import os
import binascii
import json
import tkinter as tk
from tkinter import filedialog, messagebox, ttk
import yaml
import requests
from nisasyst import Nisasyst
from zs import Zs
import sys
import time

def download_keys():
    url = "https://github.com/RAMDRAGONS/Splatoon-FesData/blob/main/Splatoon%203%20(Thunder)%20-%20Encrypted/decryptionKeys.json?raw=true"
    try:
        response = requests.get(url)
        if response.status_code == 200:
            with open("decryptionKeys.json", "wb") as f:
                f.write(response.content)
            return True
        else:
            messagebox.showerror("Error", "Failed to download decryption keys.")
            return False
    except requests.exceptions.RequestException as e:
        messagebox.showerror("Error", f"Error downloading decryption keys: {e}")
        return False

def load_keys():
    keys = {}
    if os.path.exists("decryptionKeys.json"):
        try:
            with open("decryptionKeys.json", "r") as f:
                data = json.load(f)
                for entry in data:
                    for key_type in ["base", "bh", "wa"]:
                        if key_type in entry:
                            keys[f"{entry['resource_id']} - {key_type}"] = entry[key_type]
        except json.JSONDecodeError:
            messagebox.showerror("Error", "Invalid JSON format in decryptionKeys.json")
            return {}
    if not keys:
        messagebox.showerror("Error", "decryptionKeys.json has not been found. The file will be automatically downloaded and the program will restart.")
        if download_keys():
            time.sleep(1)  # Sleep for a second to allow file download
            os.execl(sys.executable, sys.executable, *sys.argv)  # Restart the application
    return keys

def GenIVFromInputFile(input_file: str) -> str:
    summary_file = os.path.join(os.path.dirname(input_file), "summary.yml")
    summary = yaml.safe_load(open(summary_file, "r"))
    filename = os.path.basename(input_file).split(".")[0]
    iv_source = f"{summary['FestResourceID']}_{filename}.pack.zs" if filename != "base" else f"{summary['FestResourceID']}.pack.zs"
    return iv_source

def Decrypt(input_file: str, encryption_key: bytes, output_file: str):
    with open(input_file, "rb") as f:
        data = f.read()
    compressed_size = int.from_bytes(data[:4], byteorder="little")
    enc_data = data[4:]
    iv = GenIVFromInputFile(input_file)
    decrypted_data = Nisasyst.Decrypt(iv, encryption_key, enc_data)[:compressed_size]
    decompressed_data = Zs.Decompress(decrypted_data)
    with open(output_file, "wb") as f:
        f.write(decompressed_data)

def Encrypt(input_file: str, encryption_key: bytes, output_file: str):
    with open(input_file, "rb") as f:
        data = f.read()
    compressed_data = Zs.Compress(data)
    compressed_size = len(compressed_data).to_bytes(4, byteorder="little")
    decrypted_data = compressed_data + b"\x0E" * (0x10 - (len(compressed_data) % 0x10))
    iv = GenIVFromInputFile(input_file)
    encrypted_data = compressed_size + Nisasyst.Encrypt(iv, encryption_key, decrypted_data)
    with open(output_file, "wb") as f:
        f.write(encrypted_data)

def process_file(mode):
    input_file = filedialog.askopenfilename()
    if not input_file:
        return
    selected_key = keys_var.get()
    encryption_key = keys.get(selected_key, "")
    if not encryption_key:
        messagebox.showerror("Error", "Encryption/Decryption key is required")
        return
    try:
        encryption_key = binascii.unhexlify(encryption_key)
    except:
        messagebox.showerror("Error", "Invalid key format")
        return
    output_file = filedialog.asksaveasfilename()
    if not output_file:
        return
    try:
        if mode == "decrypt":
            Decrypt(input_file, encryption_key, output_file)
        else:
            Encrypt(input_file, encryption_key, output_file)
        messagebox.showinfo("Success", f"File {mode}ed successfully!")
    except Exception as e:
        messagebox.showerror("Error", str(e))

def filter_keys(*args):
    search_term = search_entry.get().lower()
    filtered_keys = [key for key in key_options if search_term in key.lower()]
    key_menu['values'] = filtered_keys
    if filtered_keys:
        key_menu.set(filtered_keys[0])

app = tk.Tk()
app.title("File Encryption/Decryption")
app.geometry("400x300")

keys = load_keys()
key_options = list(keys.keys())
if not key_options:
    key_options = ["No keys available"]

tk.Label(app, text="Search and Select Encryption/Decryption Key:").pack()

# Combined search and dropdown combobox
keys_var = tk.StringVar(app)
keys_var.set(key_options[0])

key_menu = ttk.Combobox(app, textvariable=keys_var, values=key_options, state="readonly")
key_menu.pack()

# Search entry for filtering keys
search_entry = tk.Entry(app)
search_entry.pack()
search_entry.bind("<KeyRelease>", filter_keys)

tk.Button(app, text="Encrypt File", command=lambda: process_file("encrypt")).pack()
tk.Button(app, text="Decrypt File", command=lambda: process_file("decrypt")).pack()
tk.Button(app, text="Exit", command=app.quit).pack()

app.mainloop()

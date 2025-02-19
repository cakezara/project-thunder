from SeadRand import SeadRandom
import binascii
from Crypto.Cipher import AES

class Nisasyst():
    key_material = "e413645fa69cafe34a76192843e48cbd691d1f9fba87e8a23d40e02ce13b0d534d10301576f31bc70b763a60cf07149cfca50e2a6b3955b98f26ca84a5844a8aeca7318f8d7dba406af4e45c4806fa4d7b736d51cceaaf0e96f657bb3a8af9b175d51b9bddc1ed475677260f33c41ddbc1ee30b46c4df1b24a25cf7cb6019794"

    def GenKey(random: SeadRandom) -> bytes:
        print(f"{__class__.__name__} -> GenKey()")
        # key is array of 0x10 bytes
        key = [0] * 0x10

        for i in range(0x10):
            myStr = ""

            myStr += str(Nisasyst.key_material[random.getU32() >> 24])
            myStr += str(Nisasyst.key_material[random.getU32() >> 24])

            key[i] = int(myStr, 16)

        keyStr = ""
        for i in range(0x10):
            keyStr += f"{key[i]:02x}"
        # print(f"keyStr: {keyStr}")
        return binascii.unhexlify(keyStr)


    def Decrypt(path: str, key: bytes, data: bytes) -> bytes:
        print(f"{__class__.__name__} -> Decrypt()")
        hash = binascii.crc32(path.encode('utf-8'))
        random = SeadRandom(hash)

        # Derive IV
        iv = Nisasyst.GenKey(random)

        # Decrypt (AES-CBC)
        cipher = AES.new(key, AES.MODE_CBC, iv)
        return cipher.decrypt(data)
        

    def Encrypt(path: str, key: bytes, data: bytes) -> bytes:
        print(f"{__class__.__name__} -> Encrypt()")
        hash = binascii.crc32(path.encode('utf-8'))
        random = SeadRandom(hash)

        # Derive IV
        iv = Nisasyst.GenKey(random)

        # Encrypt (AES-CBC)
        cipher = AES.new(key, AES.MODE_CBC, iv)
        return cipher.encrypt(data)
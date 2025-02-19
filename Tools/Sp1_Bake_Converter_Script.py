import xml.etree.ElementTree as ET
import json
import os
import re

def parse_value_by_format(value, format, tag):
    try:
        # Ersetzt Kommas nur dann durch Punkte, wenn sie als Dezimaltrennzeichen fungieren
        # Dies geschieht durch Annahme, dass sie zwischen Ziffern stehen
        # Beispiel: "0,123" wird zu "0.123", aber "1,1,0,0" wird nicht verändert zu "1.1.0.0"
        cleaned_value = re.sub(r'(\d),(\d)', r'\1.\2', value)

        if format.startswith("Float"):
            if tag in {"gsys_bake_st0", "gsys_bake_st1"}:
                # Behandle spezielle Tags anders, wenn nötig
                numbers = re.findall(r'\d+\.\d+|\d+', cleaned_value)
                float_values = [float(num) for num in numbers]
                return float_values
            else:
                # Standard Float Verarbeitung
                numbers = re.findall(r'\d+\.\d+|\d+', cleaned_value)
                if len(numbers) > 1:
                    return [float(num) for num in numbers]
                else:
                    return float(numbers[0]) if numbers else None
        elif format == "Int":
            # Int Verarbeitung, ohne Komma zum Punkt Konversion
            return int(value.replace(',', ''))
    except ValueError as e:
        print(f"Warning: Could not interpret value '{value}' as {format}. Error: {e}")
        return None  # Gibt None zurück, wenn die Konversion fehlschlägt

    return value  # Für alle anderen unerkannten Formate oder bei Fehlern

# Diese Funktion wird dann in der Logik verwendet, um XML-Daten zu JSON zu konvertieren, wie zuvor dargestellt.


def parse_xml_to_json(xml_file_path):
    file_name = os.path.splitext(os.path.basename(xml_file_path))[0]
    tree = ET.parse(xml_file_path)
    root = tree.getroot()

    excluded_params = {
        "edge_light_color", "specular_color", "fog_emission_color", "emission_color",
        "two_color_complement_color", "dreflection_color", "gsys_point_light_color",
        "water_fog_color", "transmit_color", "gsys_bake_light_scale2",
        "gsys_bake_light_scale", "gsys_bake_light_scale1", "albedo_tex_color",
        "multi_tex_param0", "gsys_area_env_data1", "multi_tex_reg2",
        "gsys_area_env_data0", "gsys_depth_silhoutte_color", "multi_tex_reg1",
        "multi_tex_reg0", "fog_edge_color", "tex_mtx2", "tex_mtx0", "tex_mtx1",
        "gambit_emission_brightness_offset", "light_fresnel_power",
        "three_color_complement_paint_intencity_a", "three_color_complement_paint_intencity_b",
        "material_paint_thickness", "material_paint_thickness_ratio",
        "reflection_table_scale", "specular_aniso_power", "ink_sheet_edge_radius",
        "parallax_intensity_a", "ink_sheet_angle", "caustics_power", 
        "parallax_intensity_b", "caustics_proj_size", "caustics_texcoord_offset",
        "water_fog_start", "water_fog_end", "item_fx_intensity",
        "final_adjust_cut_low", "final_adjust_cut_high", "final_adjust_gamma",
        "indirect_mag"
    }

    json_data = {
        "Name": file_name,
        "Visible": True,
        "PresetMetaInfo": {
            "Title": "",
            "Game": "",
            "Notes": "",
            "IsSwitch": False,
            "Section": "All"
        },
        "MeshInfo": [],
        "Textures": [],
        "Samplers": [],
        "RenderInfo": {},
        "Parameters": {},
        "UserData": {},
        "ShaderAssign": {
            "Options": {},
            "SamplerAssign": {},
            "AttributeAssign": {},
            "ShaderArchive": "",
            "ShaderModel": ""
        },
        "RenderState": None,
        "VolatileFlags": ""
    }

    for param in root.find('MaterialParameters'):
        tag = param.tag
        if tag not in excluded_params:
            format = param.get("Format")
            value = param.get("Value")
            json_data["Parameters"][f'{format}|{tag}'] = parse_value_by_format(value, format, tag)

    json_file_path = os.path.splitext(xml_file_path)[0] + '.json'
    with open(json_file_path, 'w') as json_file:
        json.dump(json_data, json_file, indent=4)

    print(f'JSON data saved to {json_file_path}')

# Beispielaufruf
parse_xml_to_json('FloorConcreteHigh_gp.MatParams.xml')

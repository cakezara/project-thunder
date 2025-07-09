#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#pragma optionNV(fastmath off)

in vec2 TexCoords;

uniform sampler2D materialIDTexture;

uniform int depthMaskType;

void main()
{
    float materialID = texture(materialIDTexture, vec2(TexCoords.x, 1 - TexCoords.y)).r;

    float scale = 0.05882 * 255.0;
    float _59 = trunc(scale);
    _59 = max(_59, 0.0);
    int botw = int(uint(_59));
    int totk = floatBitsToInt(2.45227E-43);

    precise float _123 = materialID * 255.0;
    float _60 = _123;
    float _62 = trunc(_60);
    float _64 = max(_62, 0.0);
    uint _67 = uint(_64);

    if (depthMaskType == 0)
    {
        int _70 = int(_67) & botw;
        float _72 = float(uint(_70));
        precise float _144 = _72 * 0.0039215688593685626983642578125;
        float _74 = _144;

        gl_FragDepth = _74;
    }
    else
    {
        int _70 = int(_67) & totk;
        float _72 = float(uint(_70));
        precise float _144 = _72 * 0.0039215688593685626983642578125;
        float _74 = _144;
        float _76 = -0.50;
        float _78 = fma(_74, _76, _74);
        precise float _157 = _78 + 0.50;
        float _80 = _157;
        gl_FragDepth = _80;
    }
}
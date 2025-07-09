#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 9, std140) uniform vp_c8
{
    vec4 _m0[4096];
} vp_c8_1;

layout(binding = 7, std140) uniform vp_c6
{
    vec4 _m0[4096];
} vp_c6_1;

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(binding = 0) uniform sampler2D vp_tex_tcb_A;

layout(location = 8) in vec4 _38;
layout(location = 6) in vec4 _40;
layout(location = 1) in vec4 _42;
layout(location = 12) in vec4 _44;
layout(location = 0) in vec4 _46;
layout(location = 4) in vec4 _48;
layout(location = 0) out vec4 _50;
layout(location = 2) out vec4 _52;
layout(location = 1) out vec4 _54;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _61 = vp_c6_1._m0[20].w * 0.5;
    float _63 = _61 + (-floor(_61));
    float _65 = textureLod(vp_tex_tcb_A, vec2(_63 + _38.x, _63 + _38.y), 0.0).x;
    float _67 = _40.x;
    float _69 = _40.y;
    float _71 = _40.z;
    float _73 = _40.w;
    float _75 = _42.x;
    float _77 = _44.x;
    float _79 = _42.y;
    int _82 = ((int(uint(floatBitsToInt(_67)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_67) & 65535) * 48);
    uint _85 = uint(int(uint(_82 + 32) >> uint(2)));
    int _87 = int(_85) + 1;
    uint _89 = uint(int(uint(_82) >> uint(2)));
    int _91 = int(_89) + 1;
    int _93 = ((int(uint(floatBitsToInt(_69)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_69) & 65535) * 48);
    uint _95 = uint(int(uint(_82 + 16) >> uint(2)));
    int _97 = int(_95) + 1;
    int _99 = ((int(uint(floatBitsToInt(_71)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_71) & 65535) * 48) + 16);
    uint _101 = uint(int(uint(_93) >> uint(2)));
    int _103 = int(_101) + 1;
    int _105 = ((int(uint(floatBitsToInt(_73)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_73) & 65535) * 48);
    uint _107 = uint(int(uint(_93 + 16) >> uint(2)));
    int _109 = int(_107) + 1;
    uint _111 = uint(int(uint(_93 + 32) >> uint(2)));
    int _113 = int(_111) + 1;
    uint _115 = uint(int(uint(_99 + (-16)) >> uint(2)));
    int _117 = int(_115) + 1;
    uint _119 = uint(int(uint(_99) >> uint(2)));
    int _121 = int(_119) + 1;
    uint _123 = uint(int(uint(_99 + 16) >> uint(2)));
    int _125 = int(_123) + 1;
    uint _127 = uint(int(uint(_105) >> uint(2)));
    int _129 = int(_127) + 1;
    uint _131 = uint(int(uint(_105 + 32) >> uint(2)));
    int _133 = int(_131) + 1;
    uint _135 = uint(int(uint(_105 + 16) >> uint(2)));
    int _137 = int(_135) + 1;
    float _139 = _42.z;
    uint _141 = uint(int(uint(_93 + 8) >> uint(2)));
    int _143 = int(_141) + 1;
    uint _145 = uint(int(uint(_93 + 24) >> uint(2)));
    int _147 = int(_145) + 1;
    uint _149 = uint(int(uint(_82 + 8) >> uint(2)));
    int _151 = int(_149) + 1;
    uint _153 = uint(int(uint(_93 + 40) >> uint(2)));
    int _155 = int(_153) + 1;
    uint _157 = uint(int(uint(_82 + 40) >> uint(2)));
    int _159 = int(_157) + 1;
    uint _161 = uint(int(uint(_99 + (-8)) >> uint(2)));
    int _163 = int(_161) + 1;
    uint _165 = uint(int(uint(_105 + 8) >> uint(2)));
    int _167 = int(_165) + 1;
    uint _169 = uint(int(uint(_99 + 24) >> uint(2)));
    int _171 = int(_169) + 1;
    uint _173 = uint(int(uint(_82 + 24) >> uint(2)));
    int _175 = int(_173) + 1;
    uint _177 = uint(int(uint(_105 + 24) >> uint(2)));
    int _179 = int(_177) + 1;
    float _181 = (fma(_65 * vp_c5_1._m0[85].y, vp_c5_1._m0[91].y, _65 * vp_c5_1._m0[85].y) + fma((_65 * _65) * vp_c5_1._m0[85].x, vp_c5_1._m0[91].x, (_65 * _65) * vp_c5_1._m0[85].x)) + vp_c5_1._m0[91].z;
    uint _183 = uint(int(uint(_99 + 8) >> uint(2)));
    int _185 = int(_183) + 1;
    float _187 = fma(_181, fma(_75, _77, -_75), _46.x);
    float _189 = fma(_181, fma(_77, _79, -_79), _46.y);
    float _191 = fma(_181, fma(_77, _139, -_139), _46.z);
    uint _193 = uint(int(uint(_105 + 40) >> uint(2)));
    int _195 = int(_193) + 1;
    float _197 = _48.y;
    float _199 = _48.x;
    float _201 = _48.w;
    float _203 = _48.z;
    float _205 = fma(vp_c8_1._m0[int(uint(_167) >> uint(2))][_167 & 3] + fma(_191, vp_c8_1._m0[int(uint(int(_165)) >> uint(2))][int(_165) & 3], fma(_189, vp_c8_1._m0[int(uint(_129) >> uint(2))][_129 & 3], _187 * vp_c8_1._m0[int(uint(int(_127)) >> uint(2))][int(_127) & 3])), _201, fma(vp_c8_1._m0[int(uint(_163) >> uint(2))][_163 & 3] + fma(_191, vp_c8_1._m0[int(uint(int(_161)) >> uint(2))][int(_161) & 3], fma(_189, vp_c8_1._m0[int(uint(_117) >> uint(2))][_117 & 3], _187 * vp_c8_1._m0[int(uint(int(_115)) >> uint(2))][int(_115) & 3])), _203, fma(vp_c8_1._m0[int(uint(_151) >> uint(2))][_151 & 3] + fma(_191, vp_c8_1._m0[int(uint(int(_149)) >> uint(2))][int(_149) & 3], fma(_189, vp_c8_1._m0[int(uint(_91) >> uint(2))][_91 & 3], _187 * vp_c8_1._m0[int(uint(int(_89)) >> uint(2))][int(_89) & 3])), _199, (vp_c8_1._m0[int(uint(_143) >> uint(2))][_143 & 3] + fma(_191, vp_c8_1._m0[int(uint(int(_141)) >> uint(2))][int(_141) & 3], fma(_189, vp_c8_1._m0[int(uint(_103) >> uint(2))][_103 & 3], _187 * vp_c8_1._m0[int(uint(int(_101)) >> uint(2))][int(_101) & 3]))) * _197)));
    _50.x = _205;
    float _207 = fma(vp_c8_1._m0[int(uint(_179) >> uint(2))][_179 & 3] + fma(_191, vp_c8_1._m0[int(uint(int(_177)) >> uint(2))][int(_177) & 3], fma(_189, vp_c8_1._m0[int(uint(_137) >> uint(2))][_137 & 3], _187 * vp_c8_1._m0[int(uint(int(_135)) >> uint(2))][int(_135) & 3])), _201, fma(vp_c8_1._m0[int(uint(_185) >> uint(2))][_185 & 3] + fma(_191, vp_c8_1._m0[int(uint(int(_183)) >> uint(2))][int(_183) & 3], fma(_189, vp_c8_1._m0[int(uint(_121) >> uint(2))][_121 & 3], _187 * vp_c8_1._m0[int(uint(int(_119)) >> uint(2))][int(_119) & 3])), _203, fma(vp_c8_1._m0[int(uint(_175) >> uint(2))][_175 & 3] + fma(_191, vp_c8_1._m0[int(uint(int(_173)) >> uint(2))][int(_173) & 3], fma(_189, vp_c8_1._m0[int(uint(_97) >> uint(2))][_97 & 3], _187 * vp_c8_1._m0[int(uint(int(_95)) >> uint(2))][int(_95) & 3])), _199, (vp_c8_1._m0[int(uint(_147) >> uint(2))][_147 & 3] + fma(_191, vp_c8_1._m0[int(uint(int(_145)) >> uint(2))][int(_145) & 3], fma(_189, vp_c8_1._m0[int(uint(_109) >> uint(2))][_109 & 3], _187 * vp_c8_1._m0[int(uint(int(_107)) >> uint(2))][int(_107) & 3]))) * _197)));
    _50.y = _207;
    float _209 = fma(vp_c8_1._m0[int(uint(_195) >> uint(2))][_195 & 3] + fma(_191, vp_c8_1._m0[int(uint(int(_193)) >> uint(2))][int(_193) & 3], fma(_189, vp_c8_1._m0[int(uint(_133) >> uint(2))][_133 & 3], _187 * vp_c8_1._m0[int(uint(int(_131)) >> uint(2))][int(_131) & 3])), _201, fma(vp_c8_1._m0[int(uint(_171) >> uint(2))][_171 & 3] + fma(_191, vp_c8_1._m0[int(uint(int(_169)) >> uint(2))][int(_169) & 3], fma(_189, vp_c8_1._m0[int(uint(_125) >> uint(2))][_125 & 3], _187 * vp_c8_1._m0[int(uint(int(_123)) >> uint(2))][int(_123) & 3])), _203, fma(vp_c8_1._m0[int(uint(_159) >> uint(2))][_159 & 3] + fma(_191, vp_c8_1._m0[int(uint(int(_157)) >> uint(2))][int(_157) & 3], fma(_189, vp_c8_1._m0[int(uint(_87) >> uint(2))][_87 & 3], _187 * vp_c8_1._m0[int(uint(int(_85)) >> uint(2))][int(_85) & 3])), _199, (vp_c8_1._m0[int(uint(_155) >> uint(2))][_155 & 3] + fma(_191, vp_c8_1._m0[int(uint(int(_153)) >> uint(2))][int(_153) & 3], fma(_189, vp_c8_1._m0[int(uint(_113) >> uint(2))][_113 & 3], _187 * vp_c8_1._m0[int(uint(int(_111)) >> uint(2))][int(_111) & 3]))) * _197)));
    _50.z = _209;
    float _211 = fma(_209, vp_c3_1._m0[0].z, fma(_207, vp_c3_1._m0[0].y, _205 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _52.z = fma(_209, vp_c3_1._m0[37].z, fma(_207, vp_c3_1._m0[37].y, _205 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _213 = fma(_209, vp_c3_1._m0[1].z, fma(_207, vp_c3_1._m0[1].y, _205 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _215 = fma(_209, vp_c3_1._m0[2].z, fma(_207, vp_c3_1._m0[2].y, _205 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _50.w = _215;
    _52.y = fma(_209, vp_c3_1._m0[36].z, fma(_207, vp_c3_1._m0[36].y, _205 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _52.x = fma(_209, vp_c3_1._m0[35].z, fma(_207, vp_c3_1._m0[35].y, _205 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _217 = fma(_215, vp_c3_1._m0[7].z, fma(_213, vp_c3_1._m0[7].y, _211 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.z = fma(_215, vp_c3_1._m0[9].z, fma(_213, vp_c3_1._m0[9].y, _211 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _219 = fma(_215, vp_c3_1._m0[8].z, fma(_213, vp_c3_1._m0[8].y, _211 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.x = _217;
    float _221 = fma(_215, vp_c3_1._m0[10].z, fma(_213, vp_c3_1._m0[10].y, _211 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _54.x = _217;
    gl_Position.y = _219;
    _54.y = _219;
    gl_Position.w = _221;
    _54.w = _221;
}


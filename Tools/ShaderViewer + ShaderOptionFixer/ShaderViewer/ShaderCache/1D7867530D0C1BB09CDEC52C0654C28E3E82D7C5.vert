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

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 6) in vec4 _31;
layout(location = 8) in vec4 _33;
layout(location = 0) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 4) in vec4 _39;
layout(location = 0) out vec4 _41;
layout(location = 2) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 5) out vec4 _47;
layout(location = 1) out vec4 _49;
layout(location = 4) out vec4 _51;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _58 = _31.y;
    float _60 = _31.x;
    float _62 = _33.y;
    float _64 = _33.x;
    float _66 = _35.x;
    float _68 = _37.x;
    float _70 = _35.y;
    float _72 = _37.y;
    int _75 = ((int(uint(floatBitsToInt(_58)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_58) & 65535) * 48) + 16);
    float _77 = _35.z;
    float _79 = _37.z;
    int _81 = ((int(uint(floatBitsToInt(_60)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_60) & 65535) * 48) + 32);
    uint _84 = uint(int(uint(_75 + (-16)) >> uint(2)));
    float _86 = vp_c8_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    uint _92 = uint(int(uint(_75) >> uint(2)));
    float _94 = vp_c8_1._m0[int(uint(int(_92)) >> uint(2))][int(_92) & 3];
    int _96 = int(_92) + 1;
    float _98 = vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3];
    uint _100 = uint(int(uint(_75 + 16) >> uint(2)));
    float _102 = vp_c8_1._m0[int(uint(int(_100)) >> uint(2))][int(_100) & 3];
    int _104 = int(_100) + 1;
    float _106 = vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3];
    uint _108 = uint(int(uint(_75 + (-8)) >> uint(2)));
    float _110 = vp_c8_1._m0[int(uint(int(_108)) >> uint(2))][int(_108) & 3];
    int _112 = int(_108) + 1;
    uint _114 = uint(int(uint(_81 + (-32)) >> uint(2)));
    float _116 = vp_c8_1._m0[int(uint(int(_114)) >> uint(2))][int(_114) & 3];
    int _118 = int(_114) + 1;
    float _120 = vp_c8_1._m0[int(uint(_118) >> uint(2))][_118 & 3];
    uint _122 = uint(int(uint(_81 + (-16)) >> uint(2)));
    float _124 = vp_c8_1._m0[int(uint(int(_122)) >> uint(2))][int(_122) & 3];
    int _126 = int(_122) + 1;
    float _128 = vp_c8_1._m0[int(uint(_126) >> uint(2))][_126 & 3];
    uint _130 = uint(int(uint(_81) >> uint(2)));
    float _132 = vp_c8_1._m0[int(uint(int(_130)) >> uint(2))][int(_130) & 3];
    int _134 = int(_130) + 1;
    float _136 = vp_c8_1._m0[int(uint(_134) >> uint(2))][_134 & 3];
    uint _138 = uint(int(uint(_75 + 8) >> uint(2)));
    float _140 = vp_c8_1._m0[int(uint(int(_138)) >> uint(2))][int(_138) & 3];
    int _142 = int(_138) + 1;
    uint _144 = uint(int(uint(_81 + (-24)) >> uint(2)));
    float _146 = vp_c8_1._m0[int(uint(int(_144)) >> uint(2))][int(_144) & 3];
    int _148 = int(_144) + 1;
    uint _150 = uint(int(uint(_75 + 24) >> uint(2)));
    float _152 = vp_c8_1._m0[int(uint(int(_150)) >> uint(2))][int(_150) & 3];
    int _154 = int(_150) + 1;
    uint _156 = uint(int(uint(_81 + (-8)) >> uint(2)));
    float _158 = vp_c8_1._m0[int(uint(int(_156)) >> uint(2))][int(_156) & 3];
    int _160 = int(_156) + 1;
    uint _162 = uint(int(uint(_81 + 8) >> uint(2)));
    float _164 = vp_c8_1._m0[int(uint(int(_162)) >> uint(2))][int(_162) & 3];
    int _166 = int(_162) + 1;
    float _168 = _39.y;
    float _170 = _39.x;
    _41.x = fma(_64, vp_c5_1._m0[111].x, _62 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _41.y = fma(_64, vp_c5_1._m0[111].y, _62 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _172 = fma(vp_c8_1._m0[int(uint(_148) >> uint(2))][_148 & 3] + fma(_146, _77, fma(_120, _70, _116 * _66)), _170, (vp_c8_1._m0[int(uint(_112) >> uint(2))][_112 & 3] + fma(_110, _77, fma(_90, _70, _86 * _66))) * _168);
    _43.x = _172;
    float _174 = fma(fma(_146, _79, fma(_120, _72, _116 * _68)), _170, fma(_110, _79, fma(_90, _72, _86 * _68)) * _168);
    float _176 = fma(vp_c8_1._m0[int(uint(_160) >> uint(2))][_160 & 3] + fma(_158, _77, fma(_128, _70, _124 * _66)), _170, (vp_c8_1._m0[int(uint(_142) >> uint(2))][_142 & 3] + fma(_140, _77, fma(_98, _70, _94 * _66))) * _168);
    _43.y = _176;
    float _178 = fma(fma(_158, _79, fma(_128, _72, _124 * _68)), _170, fma(_140, _79, fma(_98, _72, _94 * _68)) * _168);
    float _180 = fma(vp_c8_1._m0[int(uint(_166) >> uint(2))][_166 & 3] + fma(_164, _77, fma(_136, _70, _132 * _66)), _170, (vp_c8_1._m0[int(uint(_154) >> uint(2))][_154 & 3] + fma(_152, _77, fma(_106, _70, _102 * _66))) * _168);
    float _182 = fma(fma(_164, _79, fma(_136, _72, _132 * _68)), _170, fma(_152, _79, fma(_106, _72, _102 * _68)) * _168);
    _43.z = _180;
    _45.x = _172 + (-vp_c3_1._m0[11].w);
    _45.y = _176 + (-vp_c3_1._m0[12].w);
    float _184 = inversesqrt(fma(_182, _182, fma(_178, _178, _174 * _174)));
    _45.z = _180 + (-vp_c3_1._m0[13].w);
    _47.z = fma(_180, vp_c3_1._m0[37].z, fma(_176, vp_c3_1._m0[37].y, _172 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _186 = fma(_180, vp_c3_1._m0[0].z, fma(_176, vp_c3_1._m0[0].y, _172 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _49.y = _178 * _184;
    _47.y = fma(_180, vp_c3_1._m0[36].z, fma(_176, vp_c3_1._m0[36].y, _172 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _49.x = _174 * _184;
    float _188 = fma(_180, vp_c3_1._m0[1].z, fma(_176, vp_c3_1._m0[1].y, _172 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _190 = fma(_180, vp_c3_1._m0[2].z, fma(_176, vp_c3_1._m0[2].y, _172 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _43.w = _190;
    _49.z = _182 * _184;
    _47.x = fma(_180, vp_c3_1._m0[35].z, fma(_176, vp_c3_1._m0[35].y, _172 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _192 = fma(_190, vp_c3_1._m0[8].z, fma(_188, vp_c3_1._m0[8].y, _186 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_190, vp_c3_1._m0[9].z, fma(_188, vp_c3_1._m0[9].y, _186 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _194 = fma(_190, vp_c3_1._m0[7].z, fma(_188, vp_c3_1._m0[7].y, _186 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _192;
    float _196 = fma(_190, vp_c3_1._m0[10].z, fma(_188, vp_c3_1._m0[10].y, _186 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _51.y = _192;
    gl_Position.x = _194;
    _51.x = _194;
    gl_Position.w = _196;
    _51.w = _196;
}


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

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 6) in vec4 _29;
layout(location = 0) in vec4 _31;
layout(location = 4) in vec4 _33;
layout(location = 0) out vec4 _35;
layout(location = 2) out vec4 _37;
layout(location = 1) out vec4 _39;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _46 = _29.y;
    float _48 = _29.x;
    float _50 = _31.x;
    float _52 = _31.y;
    float _54 = _31.z;
    int _57 = ((int(uint(floatBitsToInt(_46)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_46) & 65535) * 48);
    uint _60 = uint(int(uint(_57) >> uint(2)));
    int _62 = int(_60) + 1;
    int _64 = ((int(uint(floatBitsToInt(_48)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_48) & 65535) * 48);
    uint _66 = uint(int(uint(_57 + 16) >> uint(2)));
    int _68 = int(_66) + 1;
    uint _70 = uint(int(uint(_57 + 32) >> uint(2)));
    int _72 = int(_70) + 1;
    uint _74 = uint(int(uint(_57 + 8) >> uint(2)));
    int _76 = int(_74) + 1;
    uint _78 = uint(int(uint(_57 + 24) >> uint(2)));
    int _80 = int(_78) + 1;
    uint _82 = uint(int(uint(_64) >> uint(2)));
    int _84 = int(_82) + 1;
    uint _86 = uint(int(uint(_64 + 16) >> uint(2)));
    int _88 = int(_86) + 1;
    uint _90 = uint(int(uint(_64 + 32) >> uint(2)));
    int _92 = int(_90) + 1;
    uint _94 = uint(int(uint(_64 + 8) >> uint(2)));
    int _96 = int(_94) + 1;
    uint _98 = uint(int(uint(_64 + 24) >> uint(2)));
    int _100 = int(_98) + 1;
    uint _102 = uint(int(uint(_57 + 40) >> uint(2)));
    int _104 = int(_102) + 1;
    uint _106 = uint(int(uint(_64 + 40) >> uint(2)));
    int _108 = int(_106) + 1;
    float _110 = _33.y;
    float _112 = _33.x;
    float _114 = fma(vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3] + fma(vp_c8_1._m0[int(uint(int(_94)) >> uint(2))][int(_94) & 3], _54, fma(vp_c8_1._m0[int(uint(_84) >> uint(2))][_84 & 3], _52, vp_c8_1._m0[int(uint(int(_82)) >> uint(2))][int(_82) & 3] * _50)), _112, (vp_c8_1._m0[int(uint(_76) >> uint(2))][_76 & 3] + fma(vp_c8_1._m0[int(uint(int(_74)) >> uint(2))][int(_74) & 3], _54, fma(vp_c8_1._m0[int(uint(_62) >> uint(2))][_62 & 3], _52, vp_c8_1._m0[int(uint(int(_60)) >> uint(2))][int(_60) & 3] * _50))) * _110);
    _35.x = _114;
    float _116 = fma(vp_c8_1._m0[int(uint(_100) >> uint(2))][_100 & 3] + fma(vp_c8_1._m0[int(uint(int(_98)) >> uint(2))][int(_98) & 3], _54, fma(vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3], _52, vp_c8_1._m0[int(uint(int(_86)) >> uint(2))][int(_86) & 3] * _50)), _112, (vp_c8_1._m0[int(uint(_80) >> uint(2))][_80 & 3] + fma(vp_c8_1._m0[int(uint(int(_78)) >> uint(2))][int(_78) & 3], _54, fma(vp_c8_1._m0[int(uint(_68) >> uint(2))][_68 & 3], _52, vp_c8_1._m0[int(uint(int(_66)) >> uint(2))][int(_66) & 3] * _50))) * _110);
    _35.y = _116;
    float _118 = fma(vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3] + fma(vp_c8_1._m0[int(uint(int(_106)) >> uint(2))][int(_106) & 3], _54, fma(vp_c8_1._m0[int(uint(_92) >> uint(2))][_92 & 3], _52, vp_c8_1._m0[int(uint(int(_90)) >> uint(2))][int(_90) & 3] * _50)), _112, (vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3] + fma(vp_c8_1._m0[int(uint(int(_102)) >> uint(2))][int(_102) & 3], _54, fma(vp_c8_1._m0[int(uint(_72) >> uint(2))][_72 & 3], _52, vp_c8_1._m0[int(uint(int(_70)) >> uint(2))][int(_70) & 3] * _50))) * _110);
    _35.z = _118;
    float _120 = fma(_118, vp_c3_1._m0[0].z, fma(_116, vp_c3_1._m0[0].y, _114 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _122 = fma(_118, vp_c3_1._m0[1].z, fma(_116, vp_c3_1._m0[1].y, _114 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _124 = fma(_118, vp_c3_1._m0[2].z, fma(_116, vp_c3_1._m0[2].y, _114 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _35.w = _124;
    _37.z = fma(_118, vp_c3_1._m0[37].z, fma(_116, vp_c3_1._m0[37].y, _114 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _37.y = fma(_118, vp_c3_1._m0[36].z, fma(_116, vp_c3_1._m0[36].y, _114 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _37.x = fma(_118, vp_c3_1._m0[35].z, fma(_116, vp_c3_1._m0[35].y, _114 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _126 = fma(_124, vp_c3_1._m0[7].z, fma(_122, vp_c3_1._m0[7].y, _120 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.z = fma(_124, vp_c3_1._m0[9].z, fma(_122, vp_c3_1._m0[9].y, _120 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _128 = fma(_124, vp_c3_1._m0[8].z, fma(_122, vp_c3_1._m0[8].y, _120 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.x = _126;
    float _130 = fma(_124, vp_c3_1._m0[10].z, fma(_122, vp_c3_1._m0[10].y, _120 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _39.x = _126;
    gl_Position.y = _128;
    _39.y = _128;
    gl_Position.w = _130;
    _39.w = _130;
}


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
layout(location = 1) in vec4 _33;
layout(location = 0) in vec4 _35;
layout(location = 8) in vec4 _37;
layout(location = 0) out vec4 _39;
layout(location = 2) out vec4 _41;
layout(location = 3) out vec4 _43;
layout(location = 1) out vec4 _45;
layout(location = 5) out vec4 _47;
layout(location = 4) out vec4 _49;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _56 = _31.x;
    float _58 = _33.x;
    float _60 = _35.x;
    float _62 = _33.y;
    float _64 = _33.z;
    float _66 = _35.y;
    float _68 = _35.z;
    int _71 = ((int(uint(floatBitsToInt(_56)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_56) & 65535) * 48);
    float _73 = _37.y;
    uint _76 = uint(int(uint(_71) >> uint(2)));
    float _78 = vp_c8_1._m0[int(uint(int(_76)) >> uint(2))][int(_76) & 3];
    int _80 = int(_76) + 1;
    float _82 = vp_c8_1._m0[int(uint(_80) >> uint(2))][_80 & 3];
    uint _84 = uint(int(uint(_71 + 16) >> uint(2)));
    float _86 = vp_c8_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    uint _92 = uint(int(uint(_71 + 32) >> uint(2)));
    float _94 = vp_c8_1._m0[int(uint(int(_92)) >> uint(2))][int(_92) & 3];
    int _96 = int(_92) + 1;
    float _98 = vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3];
    uint _100 = uint(int(uint(_71 + 8) >> uint(2)));
    float _102 = vp_c8_1._m0[int(uint(int(_100)) >> uint(2))][int(_100) & 3];
    int _104 = int(_100) + 1;
    uint _106 = uint(int(uint(_71 + 24) >> uint(2)));
    float _108 = vp_c8_1._m0[int(uint(int(_106)) >> uint(2))][int(_106) & 3];
    int _110 = int(_106) + 1;
    uint _112 = uint(int(uint(_71 + 40) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    float _118 = _37.x;
    _39.x = fma(_118, vp_c5_1._m0[111].x, _73 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    float _120 = fma(_102, _64, fma(_82, _62, _78 * _58));
    float _122 = fma(_108, _64, fma(_90, _62, _86 * _58));
    float _124 = fma(_114, _64, fma(_98, _62, _94 * _58));
    float _126 = vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3] + fma(_102, _68, fma(_82, _66, _78 * _60));
    float _128 = vp_c8_1._m0[int(uint(_110) >> uint(2))][_110 & 3] + fma(_108, _68, fma(_90, _66, _86 * _60));
    _41.x = _126;
    _41.y = _128;
    float _130 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3] + fma(_114, _68, fma(_98, _66, _94 * _60));
    _41.z = _130;
    float _132 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    _43.x = _126 + (-vp_c3_1._m0[11].w);
    _43.y = _128 + (-vp_c3_1._m0[12].w);
    _45.x = _120 * _132;
    _45.y = _122 * _132;
    _45.z = _124 * _132;
    float _134 = fma(_130, vp_c3_1._m0[0].z, fma(_128, vp_c3_1._m0[0].y, _126 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _136 = fma(_130, vp_c3_1._m0[1].z, fma(_128, vp_c3_1._m0[1].y, _126 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _138 = fma(_130, vp_c3_1._m0[2].z, fma(_128, vp_c3_1._m0[2].y, _126 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _41.w = _138;
    _39.y = fma(_118, vp_c5_1._m0[111].y, _73 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _43.z = _130 + (-vp_c3_1._m0[13].w);
    _47.z = fma(_130, vp_c3_1._m0[37].z, fma(_128, vp_c3_1._m0[37].y, _126 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _47.y = fma(_130, vp_c3_1._m0[36].z, fma(_128, vp_c3_1._m0[36].y, _126 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _47.x = fma(_130, vp_c3_1._m0[35].z, fma(_128, vp_c3_1._m0[35].y, _126 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _140 = fma(_138, vp_c3_1._m0[8].z, fma(_136, vp_c3_1._m0[8].y, _134 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_138, vp_c3_1._m0[9].z, fma(_136, vp_c3_1._m0[9].y, _134 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _142 = fma(_138, vp_c3_1._m0[7].z, fma(_136, vp_c3_1._m0[7].y, _134 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _140;
    float _144 = fma(_138, vp_c3_1._m0[10].z, fma(_136, vp_c3_1._m0[10].y, _134 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _49.y = _140;
    gl_Position.x = _142;
    _49.x = _142;
    gl_Position.w = _144;
    _49.w = _144;
}


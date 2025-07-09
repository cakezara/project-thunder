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
layout(location = 1) in vec4 _35;
layout(location = 10) in vec4 _37;
layout(location = 0) in vec4 _39;
layout(location = 0) out vec4 _41;
layout(location = 2) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 1) out vec4 _47;
layout(location = 5) out vec4 _49;
layout(location = 4) out vec4 _51;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _58 = _31.x;
    float _60 = _33.y;
    float _62 = _35.x;
    float _64 = _37.y;
    float _66 = _33.x;
    float _68 = _35.y;
    float _70 = _37.x;
    float _72 = _39.x;
    float _74 = _35.z;
    int _77 = ((int(uint(floatBitsToInt(_58)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_58) & 65535) * 48);
    float _79 = _39.y;
    float _81 = _39.z;
    uint _84 = uint(int(uint(_77) >> uint(2)));
    float _86 = vp_c8_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    uint _92 = uint(int(uint(_77 + 16) >> uint(2)));
    float _94 = vp_c8_1._m0[int(uint(int(_92)) >> uint(2))][int(_92) & 3];
    int _96 = int(_92) + 1;
    float _98 = vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3];
    uint _100 = uint(int(uint(_77 + 32) >> uint(2)));
    float _102 = vp_c8_1._m0[int(uint(int(_100)) >> uint(2))][int(_100) & 3];
    int _104 = int(_100) + 1;
    float _106 = vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3];
    uint _108 = uint(int(uint(_77 + 8) >> uint(2)));
    float _110 = vp_c8_1._m0[int(uint(int(_108)) >> uint(2))][int(_108) & 3];
    int _112 = int(_108) + 1;
    uint _114 = uint(int(uint(_77 + 24) >> uint(2)));
    float _116 = vp_c8_1._m0[int(uint(int(_114)) >> uint(2))][int(_114) & 3];
    int _118 = int(_114) + 1;
    uint _120 = uint(int(uint(_77 + 40) >> uint(2)));
    float _122 = vp_c8_1._m0[int(uint(int(_120)) >> uint(2))][int(_120) & 3];
    int _124 = int(_120) + 1;
    _41.x = fma(_66, vp_c5_1._m0[111].x, _60 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _41.z = fma(_70, vp_c5_1._m0[113].x, _64 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _41.w = fma(_70, vp_c5_1._m0[113].y, _64 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
    float _126 = fma(_110, _74, fma(_90, _68, _86 * _62));
    float _128 = fma(_116, _74, fma(_98, _68, _94 * _62));
    float _130 = fma(_122, _74, fma(_106, _68, _102 * _62));
    _41.y = fma(_66, vp_c5_1._m0[111].y, _60 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _132 = vp_c8_1._m0[int(uint(_112) >> uint(2))][_112 & 3] + fma(_110, _81, fma(_90, _79, _86 * _72));
    _43.x = _132;
    float _134 = vp_c8_1._m0[int(uint(_118) >> uint(2))][_118 & 3] + fma(_116, _81, fma(_98, _79, _94 * _72));
    _43.y = _134;
    float _136 = vp_c8_1._m0[int(uint(_124) >> uint(2))][_124 & 3] + fma(_122, _81, fma(_106, _79, _102 * _72));
    float _138 = inversesqrt(fma(_130, _130, fma(_128, _128, _126 * _126)));
    _43.z = _136;
    _45.x = _132 + (-vp_c3_1._m0[11].w);
    _45.z = _136 + (-vp_c3_1._m0[13].w);
    _47.x = _126 * _138;
    float _140 = fma(_136, vp_c3_1._m0[0].z, fma(_134, vp_c3_1._m0[0].y, _132 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _47.y = _128 * _138;
    float _142 = fma(_136, vp_c3_1._m0[1].z, fma(_134, vp_c3_1._m0[1].y, _132 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _45.y = _134 + (-vp_c3_1._m0[12].w);
    float _144 = fma(_136, vp_c3_1._m0[2].z, fma(_134, vp_c3_1._m0[2].y, _132 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _43.w = _144;
    _47.z = _130 * _138;
    _49.x = fma(_136, vp_c3_1._m0[35].z, fma(_134, vp_c3_1._m0[35].y, _132 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _49.y = fma(_136, vp_c3_1._m0[36].z, fma(_134, vp_c3_1._m0[36].y, _132 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _49.z = fma(_136, vp_c3_1._m0[37].z, fma(_134, vp_c3_1._m0[37].y, _132 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _146 = fma(_144, vp_c3_1._m0[8].z, fma(_142, vp_c3_1._m0[8].y, _140 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_144, vp_c3_1._m0[9].z, fma(_142, vp_c3_1._m0[9].y, _140 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _148 = fma(_144, vp_c3_1._m0[7].z, fma(_142, vp_c3_1._m0[7].y, _140 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _146;
    float _150 = fma(_144, vp_c3_1._m0[10].z, fma(_142, vp_c3_1._m0[10].y, _140 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _51.y = _146;
    gl_Position.x = _148;
    _51.x = _148;
    gl_Position.w = _150;
    _51.w = _150;
}


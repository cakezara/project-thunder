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
layout(location = 1) out vec4 _37;
layout(location = 2) out vec4 _39;
layout(location = 3) out vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 7) out vec4 _45;
layout(location = 6) out vec4 _47;
layout(location = 8) out vec4 _49;
layout(location = 5) out vec4 _51;
layout(location = 4) out vec4 _53;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _60 = _31.x;
    float _62 = _33.x;
    float _64 = _33.y;
    float _66 = _35.x;
    float _68 = _33.z;
    float _70 = _35.y;
    float _72 = _35.z;
    int _75 = ((int(uint(floatBitsToInt(_60)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_60) & 65535) * 48);
    uint _78 = uint(int(uint(_75) >> uint(2)));
    float _80 = vp_c8_1._m0[int(uint(int(_78)) >> uint(2))][int(_78) & 3];
    int _82 = int(_78) + 1;
    float _84 = vp_c8_1._m0[int(uint(_82) >> uint(2))][_82 & 3];
    uint _86 = uint(int(uint(_75 + 16) >> uint(2)));
    float _88 = vp_c8_1._m0[int(uint(int(_86)) >> uint(2))][int(_86) & 3];
    int _90 = int(_86) + 1;
    float _92 = vp_c8_1._m0[int(uint(_90) >> uint(2))][_90 & 3];
    uint _94 = uint(int(uint(_75 + 32) >> uint(2)));
    float _96 = vp_c8_1._m0[int(uint(int(_94)) >> uint(2))][int(_94) & 3];
    int _98 = int(_94) + 1;
    float _100 = vp_c8_1._m0[int(uint(_98) >> uint(2))][_98 & 3];
    uint _102 = uint(int(uint(_75 + 8) >> uint(2)));
    float _104 = vp_c8_1._m0[int(uint(int(_102)) >> uint(2))][int(_102) & 3];
    int _106 = int(_102) + 1;
    uint _108 = uint(int(uint(_75 + 24) >> uint(2)));
    float _110 = vp_c8_1._m0[int(uint(int(_108)) >> uint(2))][int(_108) & 3];
    int _112 = int(_108) + 1;
    uint _114 = uint(int(uint(_75 + 40) >> uint(2)));
    float _116 = vp_c8_1._m0[int(uint(int(_114)) >> uint(2))][int(_114) & 3];
    int _118 = int(_114) + 1;
    float _120 = fma(_104, _68, fma(_84, _64, _80 * _62));
    float _122 = fma(_110, _68, fma(_92, _64, _88 * _62));
    float _124 = fma(_116, _68, fma(_100, _64, _96 * _62));
    float _126 = vp_c8_1._m0[int(uint(_106) >> uint(2))][_106 & 3] + fma(_104, _72, fma(_84, _70, _80 * _66));
    _37.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    _39.x = _126;
    float _128 = vp_c8_1._m0[int(uint(_112) >> uint(2))][_112 & 3] + fma(_110, _72, fma(_92, _70, _88 * _66));
    _39.y = _128;
    float _130 = vp_c8_1._m0[int(uint(_118) >> uint(2))][_118 & 3] + fma(_116, _72, fma(_100, _70, _96 * _66));
    float _132 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    _39.z = _130;
    _41.y = _128 + (-vp_c3_1._m0[12].w);
    _41.x = _126 + (-vp_c3_1._m0[11].w);
    _41.z = _130 + (-vp_c3_1._m0[13].w);
    _43.x = _120 * _132;
    _43.y = _122 * _132;
    _43.z = _124 * _132;
    _45.w = fma(_130, vp_c3_1._m0[45].z, fma(_128, vp_c3_1._m0[45].y, _126 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _47.z = fma(_130, vp_c3_1._m0[62].z, fma(_128, vp_c3_1._m0[62].y, _126 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _45.z = fma(_130, vp_c3_1._m0[44].z, fma(_128, vp_c3_1._m0[44].y, _126 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    _45.y = fma(_130, vp_c3_1._m0[43].z, fma(_128, vp_c3_1._m0[43].y, _126 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    _47.w = fma(_130, vp_c3_1._m0[63].z, fma(_128, vp_c3_1._m0[63].y, _126 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _47.x = fma(_130, vp_c3_1._m0[60].z, fma(_128, vp_c3_1._m0[60].y, _126 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    float _134 = fma(_130, vp_c3_1._m0[0].z, fma(_128, vp_c3_1._m0[0].y, _126 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _49.z = fma(_130, vp_c3_1._m0[48].z, fma(_128, vp_c3_1._m0[48].y, _126 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    _47.y = fma(_130, vp_c3_1._m0[61].z, fma(_128, vp_c3_1._m0[61].y, _126 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    float _136 = fma(_130, vp_c3_1._m0[1].z, fma(_128, vp_c3_1._m0[1].y, _126 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _45.x = fma(_130, vp_c3_1._m0[42].z, fma(_128, vp_c3_1._m0[42].y, _126 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    _49.w = fma(_130, vp_c3_1._m0[49].z, fma(_128, vp_c3_1._m0[49].y, _126 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    _51.y = fma(_130, vp_c3_1._m0[36].z, fma(_128, vp_c3_1._m0[36].y, _126 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _51.x = fma(_130, vp_c3_1._m0[35].z, fma(_128, vp_c3_1._m0[35].y, _126 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _138 = fma(_130, vp_c3_1._m0[2].z, fma(_128, vp_c3_1._m0[2].y, _126 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _39.w = _138;
    _49.y = fma(_130, vp_c3_1._m0[47].z, fma(_128, vp_c3_1._m0[47].y, _126 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _51.z = fma(_130, vp_c3_1._m0[37].z, fma(_128, vp_c3_1._m0[37].y, _126 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _49.x = fma(_130, vp_c3_1._m0[46].z, fma(_128, vp_c3_1._m0[46].y, _126 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    float _140 = fma(_138, vp_c3_1._m0[8].z, fma(_136, vp_c3_1._m0[8].y, _134 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_138, vp_c3_1._m0[9].z, fma(_136, vp_c3_1._m0[9].y, _134 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _142 = fma(_138, vp_c3_1._m0[7].z, fma(_136, vp_c3_1._m0[7].y, _134 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _140;
    float _144 = fma(_138, vp_c3_1._m0[10].z, fma(_136, vp_c3_1._m0[10].y, _134 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _53.y = _140;
    gl_Position.x = _142;
    _53.x = _142;
    gl_Position.w = _144;
    _53.w = _144;
}


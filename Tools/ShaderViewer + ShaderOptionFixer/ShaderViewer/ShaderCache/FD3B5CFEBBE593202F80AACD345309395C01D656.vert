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
layout(location = 6) out vec4 _45;
layout(location = 5) out vec4 _47;
layout(location = 7) out vec4 _49;
layout(location = 4) out vec4 _51;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _58 = _31.x;
    float _60 = _33.x;
    float _62 = _33.y;
    float _64 = _35.x;
    float _66 = _33.z;
    float _68 = _35.y;
    float _70 = _35.z;
    int _73 = ((int(uint(floatBitsToInt(_58)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_58) & 65535) * 48);
    uint _76 = uint(int(uint(_73) >> uint(2)));
    float _78 = vp_c8_1._m0[int(uint(int(_76)) >> uint(2))][int(_76) & 3];
    int _80 = int(_76) + 1;
    float _82 = vp_c8_1._m0[int(uint(_80) >> uint(2))][_80 & 3];
    uint _84 = uint(int(uint(_73 + 16) >> uint(2)));
    float _86 = vp_c8_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    uint _92 = uint(int(uint(_73 + 32) >> uint(2)));
    float _94 = vp_c8_1._m0[int(uint(int(_92)) >> uint(2))][int(_92) & 3];
    int _96 = int(_92) + 1;
    float _98 = vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3];
    uint _100 = uint(int(uint(_73 + 8) >> uint(2)));
    float _102 = vp_c8_1._m0[int(uint(int(_100)) >> uint(2))][int(_100) & 3];
    int _104 = int(_100) + 1;
    uint _106 = uint(int(uint(_73 + 24) >> uint(2)));
    float _108 = vp_c8_1._m0[int(uint(int(_106)) >> uint(2))][int(_106) & 3];
    int _110 = int(_106) + 1;
    uint _112 = uint(int(uint(_73 + 40) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    float _118 = fma(_102, _66, fma(_82, _62, _78 * _60));
    float _120 = fma(_108, _66, fma(_90, _62, _86 * _60));
    float _122 = fma(_114, _66, fma(_98, _62, _94 * _60));
    float _124 = vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3] + fma(_102, _70, fma(_82, _68, _78 * _64));
    _37.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    _39.x = _124;
    float _126 = vp_c8_1._m0[int(uint(_110) >> uint(2))][_110 & 3] + fma(_108, _70, fma(_90, _68, _86 * _64));
    _39.y = _126;
    float _128 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3] + fma(_114, _70, fma(_98, _68, _94 * _64));
    float _130 = inversesqrt(fma(_122, _122, fma(_120, _120, _118 * _118)));
    _39.z = _128;
    _41.y = _126 + (-vp_c3_1._m0[12].w);
    _41.x = _124 + (-vp_c3_1._m0[11].w);
    _41.z = _128 + (-vp_c3_1._m0[13].w);
    _43.x = _118 * _130;
    _43.y = _120 * _130;
    _43.z = _122 * _130;
    _45.w = fma(_128, vp_c3_1._m0[45].z, fma(_126, vp_c3_1._m0[45].y, _124 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _47.z = fma(_128, vp_c3_1._m0[62].z, fma(_126, vp_c3_1._m0[62].y, _124 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _45.z = fma(_128, vp_c3_1._m0[44].z, fma(_126, vp_c3_1._m0[44].y, _124 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    _45.y = fma(_128, vp_c3_1._m0[43].z, fma(_126, vp_c3_1._m0[43].y, _124 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    _47.w = fma(_128, vp_c3_1._m0[63].z, fma(_126, vp_c3_1._m0[63].y, _124 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _47.x = fma(_128, vp_c3_1._m0[60].z, fma(_126, vp_c3_1._m0[60].y, _124 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    float _132 = fma(_128, vp_c3_1._m0[0].z, fma(_126, vp_c3_1._m0[0].y, _124 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _49.z = fma(_128, vp_c3_1._m0[48].z, fma(_126, vp_c3_1._m0[48].y, _124 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    _47.y = fma(_128, vp_c3_1._m0[61].z, fma(_126, vp_c3_1._m0[61].y, _124 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    float _134 = fma(_128, vp_c3_1._m0[1].z, fma(_126, vp_c3_1._m0[1].y, _124 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _45.x = fma(_128, vp_c3_1._m0[42].z, fma(_126, vp_c3_1._m0[42].y, _124 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    _49.w = fma(_128, vp_c3_1._m0[49].z, fma(_126, vp_c3_1._m0[49].y, _124 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    _51.y = fma(_128, vp_c3_1._m0[36].z, fma(_126, vp_c3_1._m0[36].y, _124 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _51.x = fma(_128, vp_c3_1._m0[35].z, fma(_126, vp_c3_1._m0[35].y, _124 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _136 = fma(_128, vp_c3_1._m0[2].z, fma(_126, vp_c3_1._m0[2].y, _124 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _39.w = _136;
    _49.y = fma(_128, vp_c3_1._m0[47].z, fma(_126, vp_c3_1._m0[47].y, _124 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _51.z = fma(_128, vp_c3_1._m0[37].z, fma(_126, vp_c3_1._m0[37].y, _124 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _49.x = fma(_128, vp_c3_1._m0[46].z, fma(_126, vp_c3_1._m0[46].y, _124 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    gl_Position.w = fma(_136, vp_c3_1._m0[10].z, fma(_134, vp_c3_1._m0[10].y, _132 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.y = fma(_136, vp_c3_1._m0[8].z, fma(_134, vp_c3_1._m0[8].y, _132 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_136, vp_c3_1._m0[9].z, fma(_134, vp_c3_1._m0[9].y, _132 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_136, vp_c3_1._m0[7].z, fma(_134, vp_c3_1._m0[7].y, _132 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


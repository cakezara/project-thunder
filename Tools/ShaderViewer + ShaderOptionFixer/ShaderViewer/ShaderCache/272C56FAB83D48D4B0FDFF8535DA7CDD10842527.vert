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
layout(location = 0) in vec4 _33;
layout(location = 8) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 2) in vec4 _39;
layout(location = 12) in vec4 _41;
layout(location = 3) out vec4 _43;
layout(location = 2) out vec4 _45;
layout(location = 0) out vec4 _47;
layout(location = 4) out vec4 _49;
layout(location = 5) out vec4 _51;
layout(location = 8) out vec4 _53;
layout(location = 7) out vec4 _55;
layout(location = 6) out vec4 _57;
layout(location = 9) out vec4 _59;
layout(location = 1) out vec4 _61;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _68 = _31.x;
    float _70 = _33.x;
    float _72 = _35.y;
    float _74 = _37.x;
    float _76 = _39.x;
    float _78 = _33.y;
    float _80 = _35.x;
    int _83 = ((int(uint(floatBitsToInt(_68)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_68) & 65535) * 48);
    float _85 = _33.z;
    float _87 = _37.y;
    uint _90 = uint(int(uint(_83) >> uint(2)));
    float _92 = vp_c8_1._m0[int(uint(int(_90)) >> uint(2))][int(_90) & 3];
    int _94 = int(_90) + 1;
    float _96 = vp_c8_1._m0[int(uint(_94) >> uint(2))][_94 & 3];
    uint _98 = uint(int(uint(_83 + 16) >> uint(2)));
    float _100 = vp_c8_1._m0[int(uint(int(_98)) >> uint(2))][int(_98) & 3];
    int _102 = int(_98) + 1;
    float _104 = vp_c8_1._m0[int(uint(_102) >> uint(2))][_102 & 3];
    uint _106 = uint(int(uint(_83 + 32) >> uint(2)));
    float _108 = vp_c8_1._m0[int(uint(int(_106)) >> uint(2))][int(_106) & 3];
    int _110 = int(_106) + 1;
    float _112 = vp_c8_1._m0[int(uint(_110) >> uint(2))][_110 & 3];
    uint _114 = uint(int(uint(_83 + 8) >> uint(2)));
    float _116 = vp_c8_1._m0[int(uint(int(_114)) >> uint(2))][int(_114) & 3];
    int _118 = int(_114) + 1;
    uint _120 = uint(int(uint(_83 + 24) >> uint(2)));
    float _122 = vp_c8_1._m0[int(uint(int(_120)) >> uint(2))][int(_120) & 3];
    int _124 = int(_120) + 1;
    uint _126 = uint(int(uint(_83 + 40) >> uint(2)));
    float _128 = vp_c8_1._m0[int(uint(int(_126)) >> uint(2))][int(_126) & 3];
    int _130 = int(_126) + 1;
    float _132 = _39.y;
    float _134 = _37.z;
    float _136 = _39.z;
    _43.w = _39.w;
    _45.w = clamp(_41.w * vp_c5_1._m0[0].x, 0.0, 1.0);
    _47.x = fma(_80, vp_c5_1._m0[111].x, _72 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    float _138 = vp_c8_1._m0[int(uint(_118) >> uint(2))][_118 & 3] + fma(_116, _85, fma(_96, _78, _92 * _70));
    _49.x = _138;
    float _140 = vp_c8_1._m0[int(uint(_124) >> uint(2))][_124 & 3] + fma(_122, _85, fma(_104, _78, _100 * _70));
    _49.y = _140;
    _51.x = _138 + (-vp_c3_1._m0[11].w);
    float _142 = vp_c8_1._m0[int(uint(_130) >> uint(2))][_130 & 3] + fma(_128, _85, fma(_112, _78, _108 * _70));
    _49.z = _142;
    _51.y = _140 + (-vp_c3_1._m0[12].w);
    float _144 = fma(_116, _134, fma(_96, _87, _92 * _74));
    float _146 = fma(_116, _136, fma(_96, _132, _92 * _76));
    _51.z = _142 + (-vp_c3_1._m0[13].w);
    _53.w = fma(_142, vp_c3_1._m0[45].z, fma(_140, vp_c3_1._m0[45].y, _138 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _47.y = fma(_80, vp_c5_1._m0[111].y, _72 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _55.z = fma(_142, vp_c3_1._m0[62].z, fma(_140, vp_c3_1._m0[62].y, _138 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _55.w = fma(_142, vp_c3_1._m0[63].z, fma(_140, vp_c3_1._m0[63].y, _138 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _55.y = fma(_142, vp_c3_1._m0[61].z, fma(_140, vp_c3_1._m0[61].y, _138 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    float _148 = fma(_128, _136, fma(_112, _132, _108 * _76));
    _53.y = fma(_142, vp_c3_1._m0[43].z, fma(_140, vp_c3_1._m0[43].y, _138 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    float _150 = fma(_128, _134, fma(_112, _87, _108 * _74));
    _57.y = fma(_142, vp_c3_1._m0[36].z, fma(_140, vp_c3_1._m0[36].y, _138 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _55.x = fma(_142, vp_c3_1._m0[60].z, fma(_140, vp_c3_1._m0[60].y, _138 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    _53.x = fma(_142, vp_c3_1._m0[42].z, fma(_140, vp_c3_1._m0[42].y, _138 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    float _152 = fma(_122, _136, fma(_104, _132, _100 * _76));
    _59.w = fma(_142, vp_c3_1._m0[49].z, fma(_140, vp_c3_1._m0[49].y, _138 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    float _154 = fma(_122, _134, fma(_104, _87, _100 * _74));
    float _156 = fma(_142, vp_c3_1._m0[0].z, fma(_140, vp_c3_1._m0[0].y, _138 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _57.z = fma(_142, vp_c3_1._m0[37].z, fma(_140, vp_c3_1._m0[37].y, _138 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _158 = fma(_142, vp_c3_1._m0[1].z, fma(_140, vp_c3_1._m0[1].y, _138 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _160 = inversesqrt(fma(_148, _148, fma(_152, _152, _146 * _146)));
    float _162 = inversesqrt(fma(_150, _150, fma(_154, _154, _144 * _144)));
    float _164 = fma(_142, vp_c3_1._m0[2].z, fma(_140, vp_c3_1._m0[2].y, _138 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _49.w = _164;
    _53.z = fma(_142, vp_c3_1._m0[44].z, fma(_140, vp_c3_1._m0[44].y, _138 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    _43.x = _146 * _160;
    _43.y = _152 * _160;
    _61.x = _144 * _162;
    _61.y = _154 * _162;
    _59.z = fma(_142, vp_c3_1._m0[48].z, fma(_140, vp_c3_1._m0[48].y, _138 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    _59.y = fma(_142, vp_c3_1._m0[47].z, fma(_140, vp_c3_1._m0[47].y, _138 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _59.x = fma(_142, vp_c3_1._m0[46].z, fma(_140, vp_c3_1._m0[46].y, _138 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    _57.x = fma(_142, vp_c3_1._m0[35].z, fma(_140, vp_c3_1._m0[35].y, _138 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _43.z = _148 * _160;
    _61.z = _150 * _162;
    gl_Position.w = fma(_164, vp_c3_1._m0[10].z, fma(_158, vp_c3_1._m0[10].y, _156 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.y = fma(_164, vp_c3_1._m0[8].z, fma(_158, vp_c3_1._m0[8].y, _156 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_164, vp_c3_1._m0[9].z, fma(_158, vp_c3_1._m0[9].y, _156 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_164, vp_c3_1._m0[7].z, fma(_158, vp_c3_1._m0[7].y, _156 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


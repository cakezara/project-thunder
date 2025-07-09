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
layout(location = 3) out vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 4) out vec4 _45;
layout(location = 5) out vec4 _47;
layout(location = 8) out vec4 _49;
layout(location = 7) out vec4 _51;
layout(location = 6) out vec4 _53;
layout(location = 9) out vec4 _55;
layout(location = 2) out vec4 _57;
layout(location = 1) out vec4 _59;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _66 = _31.x;
    float _68 = _33.x;
    float _70 = _33.y;
    float _72 = _35.y;
    float _74 = _37.x;
    float _76 = _33.z;
    float _78 = _35.x;
    int _81 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_66) & 65535) * 48);
    float _83 = _39.x;
    uint _86 = uint(int(uint(_81) >> uint(2)));
    float _88 = vp_c8_1._m0[int(uint(int(_86)) >> uint(2))][int(_86) & 3];
    int _90 = int(_86) + 1;
    float _92 = vp_c8_1._m0[int(uint(_90) >> uint(2))][_90 & 3];
    uint _94 = uint(int(uint(_81 + 16) >> uint(2)));
    float _96 = vp_c8_1._m0[int(uint(int(_94)) >> uint(2))][int(_94) & 3];
    int _98 = int(_94) + 1;
    float _100 = vp_c8_1._m0[int(uint(_98) >> uint(2))][_98 & 3];
    uint _102 = uint(int(uint(_81 + 32) >> uint(2)));
    float _104 = vp_c8_1._m0[int(uint(int(_102)) >> uint(2))][int(_102) & 3];
    int _106 = int(_102) + 1;
    float _108 = vp_c8_1._m0[int(uint(_106) >> uint(2))][_106 & 3];
    uint _110 = uint(int(uint(_81 + 8) >> uint(2)));
    float _112 = vp_c8_1._m0[int(uint(int(_110)) >> uint(2))][int(_110) & 3];
    int _114 = int(_110) + 1;
    uint _116 = uint(int(uint(_81 + 24) >> uint(2)));
    float _118 = vp_c8_1._m0[int(uint(int(_116)) >> uint(2))][int(_116) & 3];
    int _120 = int(_116) + 1;
    uint _122 = uint(int(uint(_81 + 40) >> uint(2)));
    float _124 = vp_c8_1._m0[int(uint(int(_122)) >> uint(2))][int(_122) & 3];
    int _126 = int(_122) + 1;
    float _128 = _37.y;
    float _130 = _39.y;
    float _132 = _37.z;
    float _134 = _39.z;
    _41.w = _39.w;
    _43.x = fma(_78, vp_c5_1._m0[111].x, _72 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    float _136 = vp_c8_1._m0[int(uint(_114) >> uint(2))][_114 & 3] + fma(_112, _76, fma(_92, _70, _88 * _68));
    _45.x = _136;
    _43.y = fma(_78, vp_c5_1._m0[111].y, _72 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _138 = vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3] + fma(_118, _76, fma(_100, _70, _96 * _68));
    _45.y = _138;
    _47.x = _136 + (-vp_c3_1._m0[11].w);
    float _140 = vp_c8_1._m0[int(uint(_126) >> uint(2))][_126 & 3] + fma(_124, _76, fma(_108, _70, _104 * _68));
    _45.z = _140;
    float _142 = fma(_112, _132, fma(_92, _128, _88 * _74));
    float _144 = fma(_112, _134, fma(_92, _130, _88 * _83));
    _47.y = _138 + (-vp_c3_1._m0[12].w);
    _47.z = _140 + (-vp_c3_1._m0[13].w);
    _49.w = fma(_140, vp_c3_1._m0[45].z, fma(_138, vp_c3_1._m0[45].y, _136 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _51.w = fma(_140, vp_c3_1._m0[63].z, fma(_138, vp_c3_1._m0[63].y, _136 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _49.y = fma(_140, vp_c3_1._m0[43].z, fma(_138, vp_c3_1._m0[43].y, _136 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    float _146 = fma(_118, _134, fma(_100, _130, _96 * _83));
    _49.x = fma(_140, vp_c3_1._m0[42].z, fma(_138, vp_c3_1._m0[42].y, _136 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    float _148 = fma(_124, _134, fma(_108, _130, _104 * _83));
    float _150 = fma(_124, _132, fma(_108, _128, _104 * _74));
    _53.y = fma(_140, vp_c3_1._m0[36].z, fma(_138, vp_c3_1._m0[36].y, _136 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _51.z = fma(_140, vp_c3_1._m0[62].z, fma(_138, vp_c3_1._m0[62].y, _136 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _51.y = fma(_140, vp_c3_1._m0[61].z, fma(_138, vp_c3_1._m0[61].y, _136 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    _51.x = fma(_140, vp_c3_1._m0[60].z, fma(_138, vp_c3_1._m0[60].y, _136 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    _55.w = fma(_140, vp_c3_1._m0[49].z, fma(_138, vp_c3_1._m0[49].y, _136 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    float _152 = fma(_118, _132, fma(_100, _128, _96 * _74));
    float _154 = inversesqrt(fma(_148, _148, fma(_146, _146, _144 * _144)));
    float _156 = fma(_140, vp_c3_1._m0[0].z, fma(_138, vp_c3_1._m0[0].y, _136 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _41.x = _144 * _154;
    float _158 = fma(_140, vp_c3_1._m0[1].z, fma(_138, vp_c3_1._m0[1].y, _136 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _41.y = _146 * _154;
    _41.z = _148 * _154;
    float _160 = inversesqrt(fma(_150, _150, fma(_152, _152, _142 * _142)));
    float _162 = fma(_140, vp_c3_1._m0[2].z, fma(_138, vp_c3_1._m0[2].y, _136 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _45.w = _162;
    _57.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    _49.z = fma(_140, vp_c3_1._m0[44].z, fma(_138, vp_c3_1._m0[44].y, _136 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    _55.z = fma(_140, vp_c3_1._m0[48].z, fma(_138, vp_c3_1._m0[48].y, _136 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    _55.y = fma(_140, vp_c3_1._m0[47].z, fma(_138, vp_c3_1._m0[47].y, _136 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _55.x = fma(_140, vp_c3_1._m0[46].z, fma(_138, vp_c3_1._m0[46].y, _136 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    _53.z = fma(_140, vp_c3_1._m0[37].z, fma(_138, vp_c3_1._m0[37].y, _136 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _53.x = fma(_140, vp_c3_1._m0[35].z, fma(_138, vp_c3_1._m0[35].y, _136 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _59.x = _142 * _160;
    _59.y = _152 * _160;
    _59.z = _150 * _160;
    gl_Position.w = fma(_162, vp_c3_1._m0[10].z, fma(_158, vp_c3_1._m0[10].y, _156 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.y = fma(_162, vp_c3_1._m0[8].z, fma(_158, vp_c3_1._m0[8].y, _156 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_162, vp_c3_1._m0[9].z, fma(_158, vp_c3_1._m0[9].y, _156 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_162, vp_c3_1._m0[7].z, fma(_158, vp_c3_1._m0[7].y, _156 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


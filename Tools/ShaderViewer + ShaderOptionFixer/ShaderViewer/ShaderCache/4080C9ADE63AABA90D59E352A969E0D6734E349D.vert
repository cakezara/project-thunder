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
layout(location = 1) in vec4 _35;
layout(location = 8) in vec4 _37;
layout(location = 2) in vec4 _39;
layout(location = 0) out vec4 _41;
layout(location = 3) out vec4 _43;
layout(location = 2) out vec4 _45;
layout(location = 4) out vec4 _47;
layout(location = 6) out vec4 _49;
layout(location = 1) out vec4 _51;
layout(location = 5) out vec4 _53;

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
    float _68 = _37.y;
    float _70 = _37.x;
    float _72 = _33.z;
    int _75 = ((int(uint(floatBitsToInt(_60)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_60) & 65535) * 48);
    float _77 = _39.x;
    uint _80 = uint(int(uint(_75) >> uint(2)));
    float _82 = vp_c8_1._m0[int(uint(int(_80)) >> uint(2))][int(_80) & 3];
    int _84 = int(_80) + 1;
    float _86 = vp_c8_1._m0[int(uint(_84) >> uint(2))][_84 & 3];
    uint _88 = uint(int(uint(_75 + 16) >> uint(2)));
    float _90 = vp_c8_1._m0[int(uint(int(_88)) >> uint(2))][int(_88) & 3];
    int _92 = int(_88) + 1;
    float _94 = vp_c8_1._m0[int(uint(_92) >> uint(2))][_92 & 3];
    uint _96 = uint(int(uint(_75 + 32) >> uint(2)));
    float _98 = vp_c8_1._m0[int(uint(int(_96)) >> uint(2))][int(_96) & 3];
    int _100 = int(_96) + 1;
    float _102 = vp_c8_1._m0[int(uint(_100) >> uint(2))][_100 & 3];
    uint _104 = uint(int(uint(_75 + 8) >> uint(2)));
    float _106 = vp_c8_1._m0[int(uint(int(_104)) >> uint(2))][int(_104) & 3];
    int _108 = int(_104) + 1;
    uint _110 = uint(int(uint(_75 + 24) >> uint(2)));
    float _112 = vp_c8_1._m0[int(uint(int(_110)) >> uint(2))][int(_110) & 3];
    int _114 = int(_110) + 1;
    uint _116 = uint(int(uint(_75 + 40) >> uint(2)));
    float _118 = vp_c8_1._m0[int(uint(int(_116)) >> uint(2))][int(_116) & 3];
    int _120 = int(_116) + 1;
    float _122 = _39.y;
    float _124 = _35.y;
    float _126 = _35.z;
    float _128 = _39.z;
    _41.x = fma(_70, vp_c5_1._m0[112].x, _68 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    float _130 = vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3] + fma(_106, _72, fma(_86, _64, _82 * _62));
    _43.x = _130;
    float _132 = vp_c8_1._m0[int(uint(_114) >> uint(2))][_114 & 3] + fma(_112, _72, fma(_94, _64, _90 * _62));
    _43.y = _132;
    float _134 = fma(_106, _128, fma(_86, _122, _82 * _77));
    _45.w = _39.w * vp_c5_1._m0[58].x;
    float _136 = fma(_118, _128, fma(_102, _122, _98 * _77));
    _41.y = fma(_70, vp_c5_1._m0[112].y, _68 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    float _138 = vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3] + fma(_118, _72, fma(_102, _64, _98 * _62));
    float _140 = fma(_112, _128, fma(_94, _122, _90 * _77));
    _43.z = _138;
    float _142 = fma(_118, _126, fma(_102, _124, _98 * _66));
    float _144 = fma(_106, _126, fma(_86, _124, _82 * _66));
    _47.y = _132 + (-vp_c3_1._m0[12].w);
    float _146 = fma(_112, _126, fma(_94, _124, _90 * _66));
    _47.x = _130 + (-vp_c3_1._m0[11].w);
    _49.y = fma(_138, vp_c3_1._m0[36].z, fma(_132, vp_c3_1._m0[36].y, _130 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _148 = inversesqrt(fma(_136, _136, fma(_140, _140, _134 * _134)));
    _47.z = _138 + (-vp_c3_1._m0[13].w);
    float _150 = fma(_138, vp_c3_1._m0[0].z, fma(_132, vp_c3_1._m0[0].y, _130 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _45.x = _134 * _148;
    _45.y = _140 * _148;
    _45.z = _136 * _148;
    float _152 = fma(_138, vp_c3_1._m0[1].z, fma(_132, vp_c3_1._m0[1].y, _130 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _154 = fma(_138, vp_c3_1._m0[2].z, fma(_132, vp_c3_1._m0[2].y, _130 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    float _156 = inversesqrt(fma(_142, _142, fma(_146, _146, _144 * _144)));
    _43.w = _154;
    _49.z = fma(_138, vp_c3_1._m0[37].z, fma(_132, vp_c3_1._m0[37].y, _130 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _49.x = fma(_138, vp_c3_1._m0[35].z, fma(_132, vp_c3_1._m0[35].y, _130 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _51.x = _144 * _156;
    _51.y = _146 * _156;
    _51.z = _142 * _156;
    float _158 = fma(_154, vp_c3_1._m0[8].z, fma(_152, vp_c3_1._m0[8].y, _150 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_154, vp_c3_1._m0[9].z, fma(_152, vp_c3_1._m0[9].y, _150 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _160 = fma(_154, vp_c3_1._m0[7].z, fma(_152, vp_c3_1._m0[7].y, _150 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _158;
    float _162 = fma(_154, vp_c3_1._m0[10].z, fma(_152, vp_c3_1._m0[10].y, _150 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _53.y = _158;
    gl_Position.x = _160;
    _53.x = _160;
    gl_Position.w = _162;
    _53.w = _162;
}


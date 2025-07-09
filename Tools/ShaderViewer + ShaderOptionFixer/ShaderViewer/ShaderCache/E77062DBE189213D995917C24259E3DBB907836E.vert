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
layout(location = 2) in vec4 _37;
layout(location = 1) in vec4 _39;
layout(location = 2) out vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 3) out vec4 _45;
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
    float _66 = _35.y;
    float _68 = _35.x;
    float _70 = _33.z;
    float _72 = _37.x;
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
    uint _96 = uint(int(uint(_75 + 8) >> uint(2)));
    float _98 = vp_c8_1._m0[int(uint(int(_96)) >> uint(2))][int(_96) & 3];
    int _100 = int(_96) + 1;
    uint _102 = uint(int(uint(_75 + 32) >> uint(2)));
    float _104 = vp_c8_1._m0[int(uint(int(_102)) >> uint(2))][int(_102) & 3];
    int _106 = int(_102) + 1;
    float _108 = vp_c8_1._m0[int(uint(_106) >> uint(2))][_106 & 3];
    uint _110 = uint(int(uint(_75 + 24) >> uint(2)));
    float _112 = vp_c8_1._m0[int(uint(int(_110)) >> uint(2))][int(_110) & 3];
    int _114 = int(_110) + 1;
    uint _116 = uint(int(uint(_75 + 40) >> uint(2)));
    float _118 = vp_c8_1._m0[int(uint(int(_116)) >> uint(2))][int(_116) & 3];
    int _120 = int(_116) + 1;
    float _122 = _37.y;
    float _124 = _39.y;
    float _126 = _39.z;
    float _128 = _37.z;
    _41.w = _37.w;
    _43.x = fma(_68, vp_c5_1._m0[111].x, _66 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    float _130 = vp_c8_1._m0[int(uint(_100) >> uint(2))][_100 & 3] + fma(_98, _70, fma(_86, _64, _82 * _62));
    _45.x = _130;
    float _132 = vp_c8_1._m0[int(uint(_114) >> uint(2))][_114 & 3] + fma(_112, _70, fma(_94, _64, _90 * _62));
    _45.y = _132;
    float _134 = fma(_98, _128, fma(_86, _122, _82 * _72));
    float _136 = fma(_118, _128, fma(_108, _122, _104 * _72));
    _43.y = fma(_68, vp_c5_1._m0[111].y, _66 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _138 = vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3] + fma(_118, _70, fma(_108, _64, _104 * _62));
    float _140 = fma(_112, _128, fma(_94, _122, _90 * _72));
    _45.z = _138;
    float _142 = fma(_118, _126, fma(_108, _124, _104 * _77));
    float _144 = fma(_98, _126, fma(_86, _124, _82 * _77));
    _47.y = _132 + (-vp_c3_1._m0[12].w);
    _47.x = _130 + (-vp_c3_1._m0[11].w);
    float _146 = fma(_112, _126, fma(_94, _124, _90 * _77));
    _47.z = _138 + (-vp_c3_1._m0[13].w);
    _49.y = fma(_138, vp_c3_1._m0[36].z, fma(_132, vp_c3_1._m0[36].y, _130 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _148 = inversesqrt(fma(_136, _136, fma(_140, _140, _134 * _134)));
    float _150 = fma(_138, vp_c3_1._m0[0].z, fma(_132, vp_c3_1._m0[0].y, _130 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _152 = inversesqrt(fma(_142, _142, fma(_146, _146, _144 * _144)));
    _41.x = _134 * _148;
    _41.y = _140 * _148;
    _41.z = _136 * _148;
    float _154 = fma(_138, vp_c3_1._m0[1].z, fma(_132, vp_c3_1._m0[1].y, _130 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _156 = fma(_138, vp_c3_1._m0[2].z, fma(_132, vp_c3_1._m0[2].y, _130 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _45.w = _156;
    _51.x = _144 * _152;
    _51.y = _146 * _152;
    _49.z = fma(_138, vp_c3_1._m0[37].z, fma(_132, vp_c3_1._m0[37].y, _130 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _49.x = fma(_138, vp_c3_1._m0[35].z, fma(_132, vp_c3_1._m0[35].y, _130 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _51.z = _142 * _152;
    float _158 = fma(_156, vp_c3_1._m0[8].z, fma(_154, vp_c3_1._m0[8].y, _150 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_156, vp_c3_1._m0[9].z, fma(_154, vp_c3_1._m0[9].y, _150 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _160 = fma(_156, vp_c3_1._m0[7].z, fma(_154, vp_c3_1._m0[7].y, _150 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _158;
    float _162 = fma(_156, vp_c3_1._m0[10].z, fma(_154, vp_c3_1._m0[10].y, _150 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _53.y = _158;
    gl_Position.x = _160;
    _53.x = _160;
    gl_Position.w = _162;
    _53.w = _162;
}


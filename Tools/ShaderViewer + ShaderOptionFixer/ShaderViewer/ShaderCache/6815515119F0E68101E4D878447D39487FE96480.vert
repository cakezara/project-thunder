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
layout(location = 10) in vec4 _33;
layout(location = 8) in vec4 _35;
layout(location = 0) in vec4 _37;
layout(location = 2) in vec4 _39;
layout(location = 1) in vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 2) out vec4 _45;
layout(location = 3) out vec4 _47;
layout(location = 4) out vec4 _49;
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
    float _62 = _33.y;
    float _64 = _35.y;
    float _66 = _33.x;
    float _68 = _37.x;
    float _70 = _39.x;
    float _72 = _35.x;
    float _74 = _41.x;
    float _76 = _37.y;
    int _79 = ((int(uint(floatBitsToInt(_60)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_60) & 65535) * 48);
    float _81 = _39.y;
    float _83 = _41.y;
    uint _86 = uint(int(uint(_79) >> uint(2)));
    float _88 = vp_c8_1._m0[int(uint(int(_86)) >> uint(2))][int(_86) & 3];
    int _90 = int(_86) + 1;
    float _92 = vp_c8_1._m0[int(uint(_90) >> uint(2))][_90 & 3];
    uint _94 = uint(int(uint(_79 + 16) >> uint(2)));
    float _96 = vp_c8_1._m0[int(uint(int(_94)) >> uint(2))][int(_94) & 3];
    int _98 = int(_94) + 1;
    float _100 = vp_c8_1._m0[int(uint(_98) >> uint(2))][_98 & 3];
    uint _102 = uint(int(uint(_79 + 32) >> uint(2)));
    float _104 = vp_c8_1._m0[int(uint(int(_102)) >> uint(2))][int(_102) & 3];
    int _106 = int(_102) + 1;
    float _108 = vp_c8_1._m0[int(uint(_106) >> uint(2))][_106 & 3];
    uint _110 = uint(int(uint(_79 + 8) >> uint(2)));
    float _112 = vp_c8_1._m0[int(uint(int(_110)) >> uint(2))][int(_110) & 3];
    int _114 = int(_110) + 1;
    uint _116 = uint(int(uint(_79 + 24) >> uint(2)));
    float _118 = vp_c8_1._m0[int(uint(int(_116)) >> uint(2))][int(_116) & 3];
    int _120 = int(_116) + 1;
    uint _122 = uint(int(uint(_79 + 40) >> uint(2)));
    float _124 = vp_c8_1._m0[int(uint(int(_122)) >> uint(2))][int(_122) & 3];
    int _126 = int(_122) + 1;
    float _128 = _37.z;
    float _130 = _39.z;
    float _132 = _41.z;
    _43.z = fma(_66, vp_c5_1._m0[114].x, _62 * vp_c5_1._m0[114].z) + vp_c5_1._m0[115].x;
    _43.w = fma(_66, vp_c5_1._m0[114].y, _62 * vp_c5_1._m0[114].w) + vp_c5_1._m0[115].y;
    _43.x = fma(_72, vp_c5_1._m0[112].x, _64 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _43.y = fma(_72, vp_c5_1._m0[112].y, _64 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    _45.w = _39.w;
    float _134 = fma(_112, _130, fma(_92, _81, _88 * _70));
    float _136 = vp_c8_1._m0[int(uint(_114) >> uint(2))][_114 & 3] + fma(_112, _128, fma(_92, _76, _88 * _68));
    float _138 = fma(_118, _130, fma(_100, _81, _96 * _70));
    _47.x = _136;
    float _140 = fma(_112, _132, fma(_92, _83, _88 * _74));
    float _142 = vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3] + fma(_118, _128, fma(_100, _76, _96 * _68));
    float _144 = fma(_124, _130, fma(_108, _81, _104 * _70));
    _47.y = _142;
    float _146 = fma(_118, _132, fma(_100, _83, _96 * _74));
    float _148 = fma(_124, _132, fma(_108, _83, _104 * _74));
    float _150 = vp_c8_1._m0[int(uint(_126) >> uint(2))][_126 & 3] + fma(_124, _128, fma(_108, _76, _104 * _68));
    _47.z = _150;
    float _152 = inversesqrt(fma(_144, _144, fma(_138, _138, _134 * _134)));
    _49.x = _136 + (-vp_c3_1._m0[11].w);
    _49.y = _142 + (-vp_c3_1._m0[12].w);
    float _154 = inversesqrt(fma(_148, _148, fma(_146, _146, _140 * _140)));
    _49.z = _150 + (-vp_c3_1._m0[13].w);
    float _156 = fma(_150, vp_c3_1._m0[0].z, fma(_142, vp_c3_1._m0[0].y, _136 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _158 = fma(_150, vp_c3_1._m0[1].z, fma(_142, vp_c3_1._m0[1].y, _136 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _45.y = _138 * _152;
    _45.x = _134 * _152;
    _51.x = _140 * _154;
    _51.y = _146 * _154;
    float _160 = fma(_150, vp_c3_1._m0[2].z, fma(_142, vp_c3_1._m0[2].y, _136 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _47.w = _160;
    _45.z = _144 * _152;
    _51.z = _148 * _154;
    float _162 = fma(_160, vp_c3_1._m0[8].z, fma(_158, vp_c3_1._m0[8].y, _156 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_160, vp_c3_1._m0[9].z, fma(_158, vp_c3_1._m0[9].y, _156 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _164 = fma(_160, vp_c3_1._m0[7].z, fma(_158, vp_c3_1._m0[7].y, _156 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _162;
    float _166 = fma(_160, vp_c3_1._m0[10].z, fma(_158, vp_c3_1._m0[10].y, _156 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _53.y = _162;
    gl_Position.x = _164;
    _53.x = _164;
    gl_Position.w = _166;
    _53.w = _166;
}


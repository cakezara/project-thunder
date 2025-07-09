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
layout(location = 1) in vec4 _39;
layout(location = 2) in vec4 _41;
layout(location = 2) out vec4 _43;
layout(location = 0) out vec4 _45;
layout(location = 3) out vec4 _47;
layout(location = 4) out vec4 _49;
layout(location = 6) out vec4 _51;
layout(location = 1) out vec4 _53;
layout(location = 5) out vec4 _55;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _62 = _31.x;
    float _64 = _33.y;
    float _66 = _35.y;
    float _68 = _33.x;
    float _70 = _37.x;
    float _72 = _39.x;
    float _74 = _35.x;
    float _76 = _41.x;
    float _78 = _37.y;
    int _81 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_62) & 65535) * 48);
    float _83 = _37.z;
    float _85 = _39.y;
    uint _88 = uint(int(uint(_81 + 16) >> uint(2)));
    float _90 = vp_c8_1._m0[int(uint(int(_88)) >> uint(2))][int(_88) & 3];
    int _92 = int(_88) + 1;
    float _94 = vp_c8_1._m0[int(uint(_92) >> uint(2))][_92 & 3];
    uint _96 = uint(int(uint(_81) >> uint(2)));
    float _98 = vp_c8_1._m0[int(uint(int(_96)) >> uint(2))][int(_96) & 3];
    int _100 = int(_96) + 1;
    float _102 = vp_c8_1._m0[int(uint(_100) >> uint(2))][_100 & 3];
    uint _104 = uint(int(uint(_81 + 32) >> uint(2)));
    float _106 = vp_c8_1._m0[int(uint(int(_104)) >> uint(2))][int(_104) & 3];
    int _108 = int(_104) + 1;
    float _110 = vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3];
    uint _112 = uint(int(uint(_81 + 8) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    uint _118 = uint(int(uint(_81 + 24) >> uint(2)));
    float _120 = vp_c8_1._m0[int(uint(int(_118)) >> uint(2))][int(_118) & 3];
    int _122 = int(_118) + 1;
    uint _124 = uint(int(uint(_81 + 40) >> uint(2)));
    float _126 = vp_c8_1._m0[int(uint(int(_124)) >> uint(2))][int(_124) & 3];
    int _128 = int(_124) + 1;
    float _130 = _41.y;
    float _132 = _39.z;
    float _134 = _41.z;
    _43.w = _41.w;
    _45.z = fma(_68, vp_c5_1._m0[114].x, _64 * vp_c5_1._m0[114].z) + vp_c5_1._m0[115].x;
    _45.w = fma(_68, vp_c5_1._m0[114].y, _64 * vp_c5_1._m0[114].w) + vp_c5_1._m0[115].y;
    _45.x = fma(_74, vp_c5_1._m0[112].x, _66 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _45.y = fma(_74, vp_c5_1._m0[112].y, _66 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    float _136 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3] + fma(_114, _83, fma(_102, _78, _98 * _70));
    _47.x = _136;
    float _138 = vp_c8_1._m0[int(uint(_122) >> uint(2))][_122 & 3] + fma(_120, _83, fma(_94, _78, _90 * _70));
    _47.y = _138;
    float _140 = fma(_114, _134, fma(_102, _130, _98 * _76));
    float _142 = fma(_126, _132, fma(_110, _85, _106 * _72));
    float _144 = fma(_126, _134, fma(_110, _130, _106 * _76));
    float _146 = fma(_120, _134, fma(_94, _130, _90 * _76));
    float _148 = vp_c8_1._m0[int(uint(_128) >> uint(2))][_128 & 3] + fma(_126, _83, fma(_110, _78, _106 * _70));
    float _150 = fma(_114, _132, fma(_102, _85, _98 * _72));
    _47.z = _148;
    _49.y = _138 + (-vp_c3_1._m0[12].w);
    _49.x = _136 + (-vp_c3_1._m0[11].w);
    float _152 = fma(_120, _132, fma(_94, _85, _90 * _72));
    _49.z = _148 + (-vp_c3_1._m0[13].w);
    float _154 = inversesqrt(fma(_144, _144, fma(_146, _146, _140 * _140)));
    _51.y = fma(_148, vp_c3_1._m0[36].z, fma(_138, vp_c3_1._m0[36].y, _136 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _156 = fma(_148, vp_c3_1._m0[0].z, fma(_138, vp_c3_1._m0[0].y, _136 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _43.x = _140 * _154;
    _43.y = _146 * _154;
    _43.z = _144 * _154;
    float _158 = fma(_148, vp_c3_1._m0[1].z, fma(_138, vp_c3_1._m0[1].y, _136 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _160 = fma(_148, vp_c3_1._m0[2].z, fma(_138, vp_c3_1._m0[2].y, _136 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    float _162 = inversesqrt(fma(_142, _142, fma(_152, _152, _150 * _150)));
    _47.w = _160;
    _51.z = fma(_148, vp_c3_1._m0[37].z, fma(_138, vp_c3_1._m0[37].y, _136 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _51.x = fma(_148, vp_c3_1._m0[35].z, fma(_138, vp_c3_1._m0[35].y, _136 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _53.x = _150 * _162;
    _53.y = _152 * _162;
    _53.z = _142 * _162;
    float _164 = fma(_160, vp_c3_1._m0[8].z, fma(_158, vp_c3_1._m0[8].y, _156 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_160, vp_c3_1._m0[9].z, fma(_158, vp_c3_1._m0[9].y, _156 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _166 = fma(_160, vp_c3_1._m0[7].z, fma(_158, vp_c3_1._m0[7].y, _156 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _164;
    float _168 = fma(_160, vp_c3_1._m0[10].z, fma(_158, vp_c3_1._m0[10].y, _156 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _55.y = _164;
    gl_Position.x = _166;
    _55.x = _166;
    gl_Position.w = _168;
    _55.w = _168;
}


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
layout(location = 9) in vec4 _35;
layout(location = 10) in vec4 _37;
layout(location = 0) in vec4 _39;
layout(location = 2) in vec4 _41;
layout(location = 1) in vec4 _43;
layout(location = 2) out vec4 _45;
layout(location = 7) out vec4 _47;
layout(location = 0) out vec4 _49;
layout(location = 3) out vec4 _51;
layout(location = 4) out vec4 _53;
layout(location = 6) out vec4 _55;
layout(location = 1) out vec4 _57;
layout(location = 5) out vec4 _59;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _66 = _31.x;
    float _68 = _33.y;
    float _70 = _35.x;
    float _72 = _37.y;
    float _74 = _33.x;
    float _76 = _39.x;
    float _78 = _35.y;
    int _81 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_66) & 65535) * 48);
    float _83 = _37.x;
    float _85 = _39.y;
    uint _88 = uint(int(uint(_81) >> uint(2)));
    float _90 = vp_c8_1._m0[int(uint(int(_88)) >> uint(2))][int(_88) & 3];
    int _92 = int(_88) + 1;
    float _94 = vp_c8_1._m0[int(uint(_92) >> uint(2))][_92 & 3];
    uint _96 = uint(int(uint(_81 + 16) >> uint(2)));
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
    float _130 = _39.z;
    float _132 = _43.x;
    float _134 = _41.x;
    float _136 = _41.y;
    float _138 = _43.y;
    float _140 = _43.z;
    float _142 = _41.z;
    _45.w = _41.w;
    _47.z = fma(_70, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _47.x = fma(_70, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _47.w = fma(_78, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _47.y = fma(_78, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _49.z = fma(_83, vp_c5_1._m0[113].x, _72 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _49.x = fma(_74, vp_c5_1._m0[111].x, _68 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    float _144 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3] + fma(_114, _130, fma(_94, _85, _90 * _76));
    _51.x = _144;
    float _146 = vp_c8_1._m0[int(uint(_122) >> uint(2))][_122 & 3] + fma(_120, _130, fma(_102, _85, _98 * _76));
    _51.y = _146;
    float _148 = fma(_114, _142, fma(_94, _136, _90 * _134));
    float _150 = fma(_126, _142, fma(_110, _136, _106 * _134));
    float _152 = fma(_120, _142, fma(_102, _136, _98 * _134));
    float _154 = fma(_126, _140, fma(_110, _138, _106 * _132));
    float _156 = vp_c8_1._m0[int(uint(_128) >> uint(2))][_128 & 3] + fma(_126, _130, fma(_110, _85, _106 * _76));
    float _158 = fma(_114, _140, fma(_94, _138, _90 * _132));
    _51.z = _156;
    _53.y = _146 + (-vp_c3_1._m0[12].w);
    _53.x = _144 + (-vp_c3_1._m0[11].w);
    float _160 = fma(_120, _140, fma(_102, _138, _98 * _132));
    _53.z = _156 + (-vp_c3_1._m0[13].w);
    float _162 = inversesqrt(fma(_150, _150, fma(_152, _152, _148 * _148)));
    _49.w = fma(_83, vp_c5_1._m0[113].y, _72 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
    _49.y = fma(_74, vp_c5_1._m0[111].y, _68 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _164 = fma(_156, vp_c3_1._m0[0].z, fma(_146, vp_c3_1._m0[0].y, _144 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _45.x = _148 * _162;
    _45.y = _152 * _162;
    _45.z = _150 * _162;
    float _166 = fma(_156, vp_c3_1._m0[1].z, fma(_146, vp_c3_1._m0[1].y, _144 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _168 = fma(_156, vp_c3_1._m0[2].z, fma(_146, vp_c3_1._m0[2].y, _144 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    float _170 = inversesqrt(fma(_154, _154, fma(_160, _160, _158 * _158)));
    _51.w = _168;
    _55.y = fma(_156, vp_c3_1._m0[36].z, fma(_146, vp_c3_1._m0[36].y, _144 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _55.z = fma(_156, vp_c3_1._m0[37].z, fma(_146, vp_c3_1._m0[37].y, _144 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _57.x = _158 * _170;
    _57.y = _160 * _170;
    _55.x = fma(_156, vp_c3_1._m0[35].z, fma(_146, vp_c3_1._m0[35].y, _144 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _57.z = _154 * _170;
    float _172 = fma(_168, vp_c3_1._m0[8].z, fma(_166, vp_c3_1._m0[8].y, _164 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_168, vp_c3_1._m0[9].z, fma(_166, vp_c3_1._m0[9].y, _164 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _174 = fma(_168, vp_c3_1._m0[7].z, fma(_166, vp_c3_1._m0[7].y, _164 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _172;
    float _176 = fma(_168, vp_c3_1._m0[10].z, fma(_166, vp_c3_1._m0[10].y, _164 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _59.y = _172;
    gl_Position.x = _174;
    _59.x = _174;
    gl_Position.w = _176;
    _59.w = _176;
}


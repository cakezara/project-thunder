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
layout(location = 0) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 2) in vec4 _39;
layout(location = 0) out vec4 _41;
layout(location = 2) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 4) out vec4 _47;
layout(location = 1) out vec4 _49;
layout(location = 6) out vec4 _51;
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
    float _64 = _35.x;
    float _66 = _37.x;
    float _68 = _39.x;
    float _70 = _35.y;
    float _72 = _33.x;
    float _74 = _37.y;
    float _76 = _39.y;
    int _79 = ((int(uint(floatBitsToInt(_60)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_60) & 65535) * 48);
    float _81 = _35.z;
    uint _84 = uint(int(uint(_79) >> uint(2)));
    float _86 = vp_c8_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    uint _92 = uint(int(uint(_79 + 32) >> uint(2)));
    float _94 = vp_c8_1._m0[int(uint(int(_92)) >> uint(2))][int(_92) & 3];
    int _96 = int(_92) + 1;
    float _98 = vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3];
    uint _100 = uint(int(uint(_79 + 16) >> uint(2)));
    float _102 = vp_c8_1._m0[int(uint(int(_100)) >> uint(2))][int(_100) & 3];
    int _104 = int(_100) + 1;
    float _106 = vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3];
    uint _108 = uint(int(uint(_79 + 8) >> uint(2)));
    float _110 = vp_c8_1._m0[int(uint(int(_108)) >> uint(2))][int(_108) & 3];
    int _112 = int(_108) + 1;
    uint _114 = uint(int(uint(_79 + 40) >> uint(2)));
    float _116 = vp_c8_1._m0[int(uint(int(_114)) >> uint(2))][int(_114) & 3];
    int _118 = int(_114) + 1;
    uint _120 = uint(int(uint(_79 + 24) >> uint(2)));
    float _122 = vp_c8_1._m0[int(uint(int(_120)) >> uint(2))][int(_120) & 3];
    int _124 = int(_120) + 1;
    float _126 = _37.z;
    float _128 = _39.z;
    _41.x = fma(_72, vp_c5_1._m0[111].x, _62 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _43.w = _39.w;
    float _130 = fma(_110, _126, fma(_90, _74, _86 * _66));
    float _132 = fma(_110, _128, fma(_90, _76, _86 * _68));
    float _134 = fma(_116, _126, fma(_98, _74, _94 * _66));
    float _136 = fma(_122, _126, fma(_106, _74, _102 * _66));
    float _138 = fma(_122, _128, fma(_106, _76, _102 * _68));
    float _140 = vp_c8_1._m0[int(uint(_112) >> uint(2))][_112 & 3] + fma(_110, _81, fma(_90, _70, _86 * _64));
    float _142 = fma(_116, _128, fma(_98, _76, _94 * _68));
    _45.x = _140;
    float _144 = vp_c8_1._m0[int(uint(_124) >> uint(2))][_124 & 3] + fma(_122, _81, fma(_106, _70, _102 * _64));
    _45.y = _144;
    float _146 = vp_c8_1._m0[int(uint(_118) >> uint(2))][_118 & 3] + fma(_116, _81, fma(_98, _70, _94 * _64));
    _45.z = _146;
    float _148 = inversesqrt(fma(_142, _142, fma(_138, _138, _132 * _132)));
    _41.y = fma(_72, vp_c5_1._m0[111].y, _62 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _47.x = _140 + (-vp_c3_1._m0[11].w);
    _47.z = _146 + (-vp_c3_1._m0[13].w);
    float _150 = fma(_146, vp_c3_1._m0[2].z, fma(_144, vp_c3_1._m0[2].y, _140 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    float _152 = inversesqrt(fma(_134, _134, fma(_136, _136, _130 * _130)));
    _45.w = _150;
    float _154 = fma(_146, vp_c3_1._m0[0].z, fma(_144, vp_c3_1._m0[0].y, _140 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _43.x = _132 * _148;
    float _156 = fma(_146, vp_c3_1._m0[1].z, fma(_144, vp_c3_1._m0[1].y, _140 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _47.y = _144 + (-vp_c3_1._m0[12].w);
    _43.y = _138 * _148;
    float _158 = _130 * _152;
    float _160 = _136 * _152;
    _49.x = _158;
    _49.y = _160;
    _43.z = _142 * _148;
    float _162 = _134 * _152;
    _49.z = _162;
    gl_Position.z = fma(_150, vp_c3_1._m0[9].z, fma(_156, vp_c3_1._m0[9].y, _154 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    _51.z = fma(_146, vp_c3_1._m0[37].z, fma(_144, vp_c3_1._m0[37].y, _140 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _164 = fma(_150, vp_c3_1._m0[8].z, fma(_156, vp_c3_1._m0[8].y, _154 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.y = _164;
    float _166 = fma(fma(_162, vp_c3_1._m0[1].z, fma(_160, vp_c3_1._m0[1].y, _158 * vp_c3_1._m0[1].x)), -0.5, 0.5);
    _53.y = _164;
    _51.y = fma(_146, vp_c3_1._m0[36].z, fma(_144, vp_c3_1._m0[36].y, _140 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _51.x = fma(_146, vp_c3_1._m0[35].z, fma(_144, vp_c3_1._m0[35].y, _140 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _168 = fma(fma(_162, vp_c3_1._m0[0].z, fma(_160, vp_c3_1._m0[0].y, _158 * vp_c3_1._m0[0].x)), 0.5, 0.5);
    float _170 = fma(_150, vp_c3_1._m0[7].z, fma(_156, vp_c3_1._m0[7].y, _154 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    float _172 = fma(_150, vp_c3_1._m0[10].z, fma(_156, vp_c3_1._m0[10].y, _154 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.x = _170;
    _53.x = _170;
    gl_Position.w = _172;
    _53.w = _172;
    _41.z = fma(_168, vp_c5_1._m0[113].x, _166 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _41.w = fma(_168, vp_c5_1._m0[113].y, _166 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
}


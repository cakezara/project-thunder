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
layout(location = 13) in vec4 _39;
layout(location = 2) in vec4 _41;
layout(location = 14) in vec4 _43;
layout(location = 15) in vec4 _45;
layout(location = 0) out vec4 _47;
layout(location = 2) out vec4 _49;
layout(location = 7) out vec4 _51;
layout(location = 3) out vec4 _53;
layout(location = 9) out vec4 _55;
layout(location = 4) out vec4 _57;
layout(location = 8) out vec4 _59;
layout(location = 6) out vec4 _61;
layout(location = 1) out vec4 _63;
layout(location = 5) out vec4 _65;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _72 = _31.x;
    float _74 = _33.y;
    float _76 = _33.x;
    float _78 = _35.x;
    float _80 = _37.x;
    float _82 = _39.x;
    float _84 = _41.x;
    float _86 = _35.y;
    float _88 = _37.y;
    int _91 = ((int(uint(floatBitsToInt(_72)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_72) & 65535) * 48);
    float _93 = _39.y;
    float _95 = _41.y;
    uint _98 = uint(int(uint(_91) >> uint(2)));
    float _100 = vp_c8_1._m0[int(uint(int(_98)) >> uint(2))][int(_98) & 3];
    int _102 = int(_98) + 1;
    float _104 = vp_c8_1._m0[int(uint(_102) >> uint(2))][_102 & 3];
    uint _106 = uint(int(uint(_91 + 16) >> uint(2)));
    float _108 = vp_c8_1._m0[int(uint(int(_106)) >> uint(2))][int(_106) & 3];
    int _110 = int(_106) + 1;
    float _112 = vp_c8_1._m0[int(uint(_110) >> uint(2))][_110 & 3];
    uint _114 = uint(int(uint(_91 + 32) >> uint(2)));
    float _116 = vp_c8_1._m0[int(uint(int(_114)) >> uint(2))][int(_114) & 3];
    int _118 = int(_114) + 1;
    float _120 = vp_c8_1._m0[int(uint(_118) >> uint(2))][_118 & 3];
    uint _122 = uint(int(uint(_91 + 8) >> uint(2)));
    float _124 = vp_c8_1._m0[int(uint(int(_122)) >> uint(2))][int(_122) & 3];
    int _126 = int(_122) + 1;
    uint _128 = uint(int(uint(_91 + 24) >> uint(2)));
    float _130 = vp_c8_1._m0[int(uint(int(_128)) >> uint(2))][int(_128) & 3];
    int _132 = int(_128) + 1;
    uint _134 = uint(int(uint(_91 + 40) >> uint(2)));
    float _136 = vp_c8_1._m0[int(uint(int(_134)) >> uint(2))][int(_134) & 3];
    int _138 = int(_134) + 1;
    float _140 = _35.z;
    float _142 = _37.z;
    float _144 = _39.z;
    float _146 = _41.z;
    _47.y = fma(_76, vp_c5_1._m0[111].y, _74 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _49.w = _41.w;
    _51.w = _45.x;
    _47.x = fma(_76, vp_c5_1._m0[111].x, _74 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    float _148 = vp_c8_1._m0[int(uint(_126) >> uint(2))][_126 & 3] + fma(_124, _140, fma(_104, _86, _100 * _78));
    _53.x = _148;
    _55.x = fma(_124, _144, fma(_104, _93, _100 * _82));
    float _150 = fma(_124, _142, fma(_104, _88, _100 * _80));
    _55.y = fma(_130, _144, fma(_112, _93, _108 * _82));
    float _152 = fma(_124, _146, fma(_104, _95, _100 * _84));
    float _154 = vp_c8_1._m0[int(uint(_132) >> uint(2))][_132 & 3] + fma(_130, _140, fma(_112, _86, _108 * _78));
    _55.z = fma(_136, _144, fma(_120, _93, _116 * _82));
    float _156 = fma(_136, _142, fma(_120, _88, _116 * _80));
    _53.y = _154;
    float _158 = fma(_136, _146, fma(_120, _95, _116 * _84));
    _57.x = _148 + (-vp_c3_1._m0[11].w);
    float _160 = vp_c8_1._m0[int(uint(_138) >> uint(2))][_138 & 3] + fma(_136, _140, fma(_120, _86, _116 * _78));
    _53.z = _160;
    _57.y = _154 + (-vp_c3_1._m0[12].w);
    float _162 = fma(_130, _142, fma(_112, _88, _108 * _80));
    float _164 = fma(_130, _146, fma(_112, _95, _108 * _84));
    float _166 = fma(_160, vp_c3_1._m0[0].z, fma(_154, vp_c3_1._m0[0].y, _148 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _59.x = fma(_160, vp_c3_1._m0[35].z, fma(_154, vp_c3_1._m0[35].y, _148 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _57.z = _160 + (-vp_c3_1._m0[13].w);
    float _168 = fma(_160, vp_c3_1._m0[1].z, fma(_154, vp_c3_1._m0[1].y, _148 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _170 = inversesqrt(fma(_156, _156, fma(_162, _162, _150 * _150)));
    float _172 = fma(_160, vp_c3_1._m0[2].z, fma(_154, vp_c3_1._m0[2].y, _148 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    float _174 = inversesqrt(fma(_158, _158, fma(_164, _164, _152 * _152)));
    _53.w = _172;
    _61.x = _43.x + vp_c5_1._m0[25].x;
    _61.y = _43.y + vp_c5_1._m0[25].y;
    _63.x = _150 * _170;
    _63.y = _162 * _170;
    _49.x = _152 * _174;
    _49.y = _164 * _174;
    _61.z = _43.z + vp_c5_1._m0[25].x;
    _61.w = _43.w + vp_c5_1._m0[25].y;
    _59.y = fma(_160, vp_c3_1._m0[36].z, fma(_154, vp_c3_1._m0[36].y, _148 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _59.z = fma(_160, vp_c3_1._m0[37].z, fma(_154, vp_c3_1._m0[37].y, _148 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _63.z = _156 * _170;
    _49.z = _158 * _174;
    float _176 = fma(_172, vp_c3_1._m0[8].z, fma(_168, vp_c3_1._m0[8].y, _166 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_172, vp_c3_1._m0[9].z, fma(_168, vp_c3_1._m0[9].y, _166 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _178 = fma(_172, vp_c3_1._m0[7].z, fma(_168, vp_c3_1._m0[7].y, _166 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _176;
    float _180 = fma(_172, vp_c3_1._m0[10].z, fma(_168, vp_c3_1._m0[10].y, _166 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _65.y = _176;
    gl_Position.x = _178;
    _65.x = _178;
    gl_Position.w = _180;
    _65.w = _180;
}


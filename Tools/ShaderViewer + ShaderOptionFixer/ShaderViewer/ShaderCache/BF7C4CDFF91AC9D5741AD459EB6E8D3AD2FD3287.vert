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
layout(location = 9) in vec4 _37;
layout(location = 1) in vec4 _39;
layout(location = 2) in vec4 _41;
layout(location = 7) out vec4 _43;
layout(location = 2) out vec4 _45;
layout(location = 0) out vec4 _47;
layout(location = 3) out vec4 _49;
layout(location = 4) out vec4 _51;
layout(location = 6) out vec4 _53;
layout(location = 1) out vec4 _55;
layout(location = 5) out vec4 _57;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _64 = _31.x;
    float _66 = _33.y;
    float _68 = _35.x;
    float _70 = _37.x;
    float _72 = _37.y;
    float _74 = _33.x;
    float _76 = _35.y;
    int _79 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_64) & 65535) * 48);
    float _81 = _39.x;
    float _83 = _41.x;
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
    float _128 = _35.z;
    float _130 = _39.y;
    float _132 = _41.y;
    float _134 = _39.z;
    float _136 = _41.z;
    _43.x = fma(_70, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _45.w = _41.w;
    _43.y = fma(_72, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _43.z = fma(_70, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _43.w = fma(_72, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _47.x = fma(_74, vp_c5_1._m0[111].x, _66 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _47.y = fma(_74, vp_c5_1._m0[111].y, _66 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _138 = vp_c8_1._m0[int(uint(_114) >> uint(2))][_114 & 3] + fma(_112, _128, fma(_92, _76, _88 * _68));
    _49.x = _138;
    float _140 = vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3] + fma(_118, _128, fma(_100, _76, _96 * _68));
    _49.y = _140;
    float _142 = fma(_124, _134, fma(_108, _130, _104 * _81));
    _51.x = _138 + (-vp_c3_1._m0[11].w);
    float _144 = fma(_124, _136, fma(_108, _132, _104 * _83));
    float _146 = fma(_112, _136, fma(_92, _132, _88 * _83));
    float _148 = vp_c8_1._m0[int(uint(_126) >> uint(2))][_126 & 3] + fma(_124, _128, fma(_108, _76, _104 * _68));
    float _150 = fma(_112, _134, fma(_92, _130, _88 * _81));
    _49.z = _148;
    _51.y = _140 + (-vp_c3_1._m0[12].w);
    float _152 = fma(_118, _136, fma(_100, _132, _96 * _83));
    float _154 = fma(_118, _134, fma(_100, _130, _96 * _81));
    float _156 = fma(_148, vp_c3_1._m0[0].z, fma(_140, vp_c3_1._m0[0].y, _138 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _51.z = _148 + (-vp_c3_1._m0[13].w);
    float _158 = fma(_148, vp_c3_1._m0[1].z, fma(_140, vp_c3_1._m0[1].y, _138 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _160 = inversesqrt(fma(_142, _142, fma(_154, _154, _150 * _150)));
    float _162 = fma(_148, vp_c3_1._m0[2].z, fma(_140, vp_c3_1._m0[2].y, _138 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    float _164 = inversesqrt(fma(_144, _144, fma(_152, _152, _146 * _146)));
    _49.w = _162;
    _53.y = fma(_148, vp_c3_1._m0[36].z, fma(_140, vp_c3_1._m0[36].y, _138 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _53.z = fma(_148, vp_c3_1._m0[37].z, fma(_140, vp_c3_1._m0[37].y, _138 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _55.x = _150 * _160;
    _55.y = _154 * _160;
    _53.x = fma(_148, vp_c3_1._m0[35].z, fma(_140, vp_c3_1._m0[35].y, _138 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _45.x = _146 * _164;
    _45.y = _152 * _164;
    _45.z = _144 * _164;
    _55.z = _142 * _160;
    float _166 = fma(_162, vp_c3_1._m0[8].z, fma(_158, vp_c3_1._m0[8].y, _156 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_162, vp_c3_1._m0[9].z, fma(_158, vp_c3_1._m0[9].y, _156 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _168 = fma(_162, vp_c3_1._m0[7].z, fma(_158, vp_c3_1._m0[7].y, _156 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _166;
    float _170 = fma(_162, vp_c3_1._m0[10].z, fma(_158, vp_c3_1._m0[10].y, _156 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _57.y = _166;
    gl_Position.x = _168;
    _57.x = _168;
    gl_Position.w = _170;
    _57.w = _170;
}


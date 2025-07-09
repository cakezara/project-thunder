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

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(location = 6) in vec4 _31;
layout(location = 0) in vec4 _33;
layout(location = 1) in vec4 _35;
layout(location = 2) out vec4 _37;
layout(location = 3) out vec4 _39;
layout(location = 5) out vec4 _41;
layout(location = 1) out vec4 _43;
layout(location = 4) out vec4 _45;
layout(location = 0) out vec4 _47;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _54 = _31.x;
    float _56 = _33.x;
    float _58 = _33.y;
    float _60 = _33.z;
    float _62 = _35.y;
    int _65 = ((int(uint(floatBitsToInt(_54)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_54) & 65535) * 48);
    uint _68 = uint(int(uint(_65) >> uint(2)));
    float _70 = vp_c8_1._m0[int(uint(int(_68)) >> uint(2))][int(_68) & 3];
    int _72 = int(_68) + 1;
    float _74 = vp_c8_1._m0[int(uint(_72) >> uint(2))][_72 & 3];
    uint _76 = uint(int(uint(_65 + 16) >> uint(2)));
    float _78 = vp_c8_1._m0[int(uint(int(_76)) >> uint(2))][int(_76) & 3];
    int _80 = int(_76) + 1;
    float _82 = vp_c8_1._m0[int(uint(_80) >> uint(2))][_80 & 3];
    uint _84 = uint(int(uint(_65 + 32) >> uint(2)));
    float _86 = vp_c8_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    uint _92 = uint(int(uint(_65 + 8) >> uint(2)));
    float _94 = vp_c8_1._m0[int(uint(int(_92)) >> uint(2))][int(_92) & 3];
    int _96 = int(_92) + 1;
    uint _98 = uint(int(uint(_65 + 24) >> uint(2)));
    float _100 = vp_c8_1._m0[int(uint(int(_98)) >> uint(2))][int(_98) & 3];
    int _102 = int(_98) + 1;
    uint _104 = uint(int(uint(_65 + 40) >> uint(2)));
    float _106 = vp_c8_1._m0[int(uint(int(_104)) >> uint(2))][int(_104) & 3];
    int _108 = int(_104) + 1;
    float _110 = _35.x;
    float _112 = _35.z;
    float _114 = vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3] + fma(_94, _60, fma(_74, _58, _70 * _56));
    float _116 = vp_c8_1._m0[int(uint(_102) >> uint(2))][_102 & 3] + fma(_100, _60, fma(_82, _58, _78 * _56));
    _37.x = _114;
    float _118 = vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3] + fma(_106, _60, fma(_90, _58, _86 * _56));
    _37.y = _116;
    float _120 = _114 + (-vp_c3_1._m0[11].w);
    _37.z = _118;
    float _122 = _116 + (-vp_c3_1._m0[12].w);
    _39.x = _120;
    float _124 = _118 + (-vp_c3_1._m0[13].w);
    _39.y = _122;
    _39.z = _124;
    float _126 = fma(_94, _112, fma(_74, _62, _70 * _110));
    float _128 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _130 = fma(_100, _112, fma(_82, _62, _78 * _110));
    float _132 = fma(_106, _112, fma(_90, _62, _86 * _110));
    float _134 = _122 * (-_128);
    float _136 = _124 * (-_128);
    float _138 = _120 * (-_128);
    float _140 = inversesqrt(fma(_132, _132, fma(_130, _130, _126 * _126)));
    float _142 = fma(_118, vp_c3_1._m0[1].z, fma(_116, vp_c3_1._m0[1].y, _114 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _144 = fma(_136, vp_c3_1._m0[12].y, -(_134 * vp_c3_1._m0[13].y));
    _41.z = fma(_118, vp_c3_1._m0[37].z, fma(_116, vp_c3_1._m0[37].y, _114 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _146 = fma(_138, vp_c3_1._m0[13].y, -(_136 * vp_c3_1._m0[11].y));
    float _148 = fma(_134, vp_c3_1._m0[11].y, -(_138 * vp_c3_1._m0[12].y));
    float _150 = _126 * _140;
    _43.x = _150;
    float _152 = fma(_118, vp_c3_1._m0[0].z, fma(_116, vp_c3_1._m0[0].y, _114 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _154 = _130 * _140;
    float _156 = _132 * _140;
    _43.y = _154;
    _43.z = _156;
    float _158 = fma(_118, vp_c3_1._m0[2].z, fma(_116, vp_c3_1._m0[2].y, _114 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _37.w = _158;
    float _160 = inversesqrt(fma(_148, _148, fma(_146, _146, _144 * _144)));
    _41.y = fma(_118, vp_c3_1._m0[36].z, fma(_116, vp_c3_1._m0[36].y, _114 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _41.x = fma(_118, vp_c3_1._m0[35].z, fma(_116, vp_c3_1._m0[35].y, _114 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _162 = _146 * _160;
    float _164 = _144 * _160;
    float _166 = _148 * _160;
    float _168 = fma(_158, vp_c3_1._m0[10].z, fma(_142, vp_c3_1._m0[10].y, _152 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_158, vp_c3_1._m0[9].z, fma(_142, vp_c3_1._m0[9].y, _152 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.w = _168;
    _45.w = _168;
    float _170 = fma(_158, vp_c3_1._m0[8].z, fma(_142, vp_c3_1._m0[8].y, _152 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.y = _170;
    _45.y = _170;
    float _172 = fma(_158, vp_c3_1._m0[7].z, fma(_142, vp_c3_1._m0[7].y, _152 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    float _174 = fma(fma(_166, _156, fma(_162, _154, _164 * _150)), 0.5, 0.5);
    gl_Position.x = _172;
    float _176 = fma(fma(fma(_138, _162, -(_134 * _164)), _156, fma(fma(_136, _164, -(_138 * _166)), _154, fma(_134, _166, -(_136 * _162)) * _150)), -0.5, 0.5);
    _45.x = _172;
    _47.x = fma(_174, vp_c5_1._m0[111].x, _176 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _47.y = fma(_174, vp_c5_1._m0[111].y, _176 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
}


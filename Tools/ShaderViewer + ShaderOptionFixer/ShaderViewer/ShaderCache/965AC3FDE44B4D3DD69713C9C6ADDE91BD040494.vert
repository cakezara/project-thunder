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
layout(location = 1) out vec4 _39;
layout(location = 3) out vec4 _41;
layout(location = 0) out vec4 _43;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _50 = _31.x;
    float _52 = _33.x;
    float _54 = _35.x;
    float _56 = _33.y;
    float _58 = _35.y;
    float _60 = _33.z;
    float _62 = _35.z;
    int _65 = ((int(uint(floatBitsToInt(_50)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_50) & 65535) * 48);
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
    float _110 = fma(_94, _62, fma(_74, _58, _70 * _54));
    float _112 = vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3] + fma(_94, _60, fma(_74, _56, _70 * _52));
    _37.x = _112;
    float _114 = fma(_100, _62, fma(_82, _58, _78 * _54));
    float _116 = vp_c8_1._m0[int(uint(_102) >> uint(2))][_102 & 3] + fma(_100, _60, fma(_82, _56, _78 * _52));
    _37.y = _116;
    float _118 = fma(_106, _62, fma(_90, _58, _86 * _54));
    float _120 = vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3] + fma(_106, _60, fma(_90, _56, _86 * _52));
    _39.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    _37.z = _120;
    float _122 = inversesqrt(fma(_118, _118, fma(_114, _114, _110 * _110)));
    _41.x = _112 + (-vp_c3_1._m0[11].w);
    _41.y = _116 + (-vp_c3_1._m0[12].w);
    float _124 = fma(_120, vp_c3_1._m0[0].z, fma(_116, vp_c3_1._m0[0].y, _112 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _41.z = _120 + (-vp_c3_1._m0[13].w);
    _43.x = _110 * _122;
    float _126 = fma(_120, vp_c3_1._m0[1].z, fma(_116, vp_c3_1._m0[1].y, _112 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _128 = fma(_120, vp_c3_1._m0[2].z, fma(_116, vp_c3_1._m0[2].y, _112 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _43.y = _114 * _122;
    _43.z = _118 * _122;
    gl_Position.y = fma(_128, vp_c3_1._m0[8].z, fma(_126, vp_c3_1._m0[8].y, _124 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.w = fma(_128, vp_c3_1._m0[10].z, fma(_126, vp_c3_1._m0[10].y, _124 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_128, vp_c3_1._m0[9].z, fma(_126, vp_c3_1._m0[9].y, _124 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_128, vp_c3_1._m0[7].z, fma(_126, vp_c3_1._m0[7].y, _124 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


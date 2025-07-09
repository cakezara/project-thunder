#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 5, std140) uniform vp_c4
{
    vec4 _m0[4096];
} vp_c4_1;

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 2) in vec4 _31;
layout(location = 8) in vec4 _33;
layout(location = 0) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 2) out vec4 _39;
layout(location = 3) out vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 4) out vec4 _45;
layout(location = 1) out vec4 _47;
layout(location = 6) out vec4 _49;
layout(location = 5) out vec4 _51;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _58 = _31.x;
    float _60 = _31.y;
    float _62 = _33.y;
    float _64 = _35.x;
    float _66 = _31.z;
    float _68 = _33.x;
    float _70 = _35.y;
    float _72 = _35.z;
    float _74 = _37.x;
    float _76 = _37.y;
    float _78 = fma(_66, vp_c4_1._m0[0].z, fma(_60, vp_c4_1._m0[0].y, _58 * vp_c4_1._m0[0].x));
    float _80 = _37.z;
    float _82 = fma(_66, vp_c4_1._m0[1].z, fma(_60, vp_c4_1._m0[1].y, _58 * vp_c4_1._m0[1].x));
    float _84 = fma(_66, vp_c4_1._m0[2].z, fma(_60, vp_c4_1._m0[2].y, _58 * vp_c4_1._m0[2].x));
    _39.w = _31.w;
    float _86 = inversesqrt(fma(_84, _84, fma(_82, _82, _78 * _78)));
    float _88 = fma(_72, vp_c4_1._m0[0].z, fma(_70, vp_c4_1._m0[0].y, _64 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _41.x = _88;
    float _90 = fma(_72, vp_c4_1._m0[1].z, fma(_70, vp_c4_1._m0[1].y, _64 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _43.x = fma(_68, vp_c5_1._m0[111].x, _62 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    float _92 = fma(_72, vp_c4_1._m0[2].z, fma(_70, vp_c4_1._m0[2].y, _64 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _41.y = _90;
    _41.z = _92;
    float _94 = fma(_80, vp_c4_1._m0[0].z, fma(_76, vp_c4_1._m0[0].y, _74 * vp_c4_1._m0[0].x));
    float _96 = fma(_80, vp_c4_1._m0[2].z, fma(_76, vp_c4_1._m0[2].y, _74 * vp_c4_1._m0[2].x));
    float _98 = fma(_80, vp_c4_1._m0[1].z, fma(_76, vp_c4_1._m0[1].y, _74 * vp_c4_1._m0[1].x));
    _39.x = _78 * _86;
    _39.y = _82 * _86;
    _39.z = _84 * _86;
    _45.z = _92 + (-vp_c3_1._m0[13].w);
    _45.x = _88 + (-vp_c3_1._m0[11].w);
    float _100 = fma(_92, vp_c3_1._m0[0].z, fma(_90, vp_c3_1._m0[0].y, _88 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _102 = fma(_92, vp_c3_1._m0[1].z, fma(_90, vp_c3_1._m0[1].y, _88 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _104 = inversesqrt(fma(_96, _96, fma(_98, _98, _94 * _94)));
    float _106 = fma(_92, vp_c3_1._m0[2].z, fma(_90, vp_c3_1._m0[2].y, _88 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _41.w = _106;
    _43.y = fma(_68, vp_c5_1._m0[111].y, _62 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _108 = _98 * _104;
    float _110 = _96 * _104;
    _47.y = _108;
    _47.z = _110;
    float _112 = _94 * _104;
    _47.x = _112;
    _45.y = _90 + (-vp_c3_1._m0[12].w);
    gl_Position.z = fma(_106, vp_c3_1._m0[9].z, fma(_102, vp_c3_1._m0[9].y, _100 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    _49.z = fma(_92, vp_c3_1._m0[37].z, fma(_90, vp_c3_1._m0[37].y, _88 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _114 = fma(fma(_110, vp_c3_1._m0[1].z, fma(_108, vp_c3_1._m0[1].y, _112 * vp_c3_1._m0[1].x)), -0.5, 0.5);
    _49.y = fma(_92, vp_c3_1._m0[36].z, fma(_90, vp_c3_1._m0[36].y, _88 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _116 = fma(fma(_110, vp_c3_1._m0[0].z, fma(_108, vp_c3_1._m0[0].y, _112 * vp_c3_1._m0[0].x)), 0.5, 0.5);
    _49.x = fma(_92, vp_c3_1._m0[35].z, fma(_90, vp_c3_1._m0[35].y, _88 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _118 = fma(_106, vp_c3_1._m0[8].z, fma(_102, vp_c3_1._m0[8].y, _100 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    float _120 = fma(_106, vp_c3_1._m0[7].z, fma(_102, vp_c3_1._m0[7].y, _100 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _118;
    _51.y = _118;
    gl_Position.x = _120;
    float _122 = fma(_106, vp_c3_1._m0[10].z, fma(_102, vp_c3_1._m0[10].y, _100 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _51.x = _120;
    gl_Position.w = _122;
    _51.w = _122;
    _43.z = fma(_116, vp_c5_1._m0[113].x, _114 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _43.w = fma(_116, vp_c5_1._m0[113].y, _114 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
}


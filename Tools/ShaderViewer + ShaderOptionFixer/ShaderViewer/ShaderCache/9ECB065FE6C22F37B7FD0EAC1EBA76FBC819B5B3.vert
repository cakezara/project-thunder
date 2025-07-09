#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(binding = 5, std140) uniform vp_c4
{
    vec4 _m0[4096];
} vp_c4_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 9) in vec4 _31;
layout(location = 1) in vec4 _33;
layout(location = 2) in vec4 _35;
layout(location = 0) in vec4 _37;
layout(location = 12) in vec4 _39;
layout(location = 8) in vec4 _41;
layout(location = 3) out vec4 _43;
layout(location = 2) out vec4 _45;
layout(location = 7) out vec4 _47;
layout(location = 4) out vec4 _49;
layout(location = 5) out vec4 _51;
layout(location = 0) out vec4 _53;
layout(location = 1) out vec4 _55;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _62 = _31.x;
    float _64 = _33.x;
    float _66 = _37.x;
    float _68 = _31.y;
    float _70 = _33.y;
    float _72 = _35.x;
    float _74 = _37.y;
    float _76 = _41.y;
    float _78 = _35.y;
    float _80 = _37.z;
    float _82 = _33.z;
    float _84 = _35.z;
    float _86 = _41.x;
    _43.w = _35.w;
    _45.x = _39.x;
    _47.w = fma(_68, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _47.y = fma(_68, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _47.x = fma(_62, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _45.z = _39.z;
    _47.z = fma(_62, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _45.y = _39.y;
    float _88 = fma(_82, vp_c4_1._m0[0].z, fma(_70, vp_c4_1._m0[0].y, _64 * vp_c4_1._m0[0].x));
    float _90 = fma(_82, vp_c4_1._m0[2].z, fma(_70, vp_c4_1._m0[2].y, _64 * vp_c4_1._m0[2].x));
    float _92 = fma(_82, vp_c4_1._m0[1].z, fma(_70, vp_c4_1._m0[1].y, _64 * vp_c4_1._m0[1].x));
    float _94 = fma(_84, vp_c4_1._m0[0].z, fma(_78, vp_c4_1._m0[0].y, _72 * vp_c4_1._m0[0].x));
    float _96 = fma(_80, vp_c4_1._m0[0].z, fma(_74, vp_c4_1._m0[0].y, _66 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _49.x = _96;
    float _98 = fma(_84, vp_c4_1._m0[2].z, fma(_78, vp_c4_1._m0[2].y, _72 * vp_c4_1._m0[2].x));
    float _100 = fma(_84, vp_c4_1._m0[1].z, fma(_78, vp_c4_1._m0[1].y, _72 * vp_c4_1._m0[1].x));
    float _102 = fma(_80, vp_c4_1._m0[1].z, fma(_74, vp_c4_1._m0[1].y, _66 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _49.y = _102;
    _51.x = _96 + (-vp_c3_1._m0[11].w);
    float _104 = fma(_80, vp_c4_1._m0[2].z, fma(_74, vp_c4_1._m0[2].y, _66 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _51.y = _102 + (-vp_c3_1._m0[12].w);
    _49.z = _104;
    float _106 = inversesqrt(fma(_90, _90, fma(_92, _92, _88 * _88)));
    float _108 = inversesqrt(fma(_98, _98, fma(_100, _100, _94 * _94)));
    _53.x = fma(_86, vp_c5_1._m0[112].x, _76 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _53.y = fma(_86, vp_c5_1._m0[112].y, _76 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    float _110 = fma(_104, vp_c3_1._m0[0].z, fma(_102, vp_c3_1._m0[0].y, _96 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _55.x = _88 * _106;
    _55.y = _92 * _106;
    float _112 = fma(_104, vp_c3_1._m0[1].z, fma(_102, vp_c3_1._m0[1].y, _96 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _43.x = _94 * _108;
    _55.z = _90 * _106;
    float _114 = fma(_104, vp_c3_1._m0[2].z, fma(_102, vp_c3_1._m0[2].y, _96 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _51.z = _104 + (-vp_c3_1._m0[13].w);
    _43.y = _100 * _108;
    _43.z = _98 * _108;
    gl_Position.y = fma(_114, vp_c3_1._m0[8].z, fma(_112, vp_c3_1._m0[8].y, _110 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.w = fma(_114, vp_c3_1._m0[10].z, fma(_112, vp_c3_1._m0[10].y, _110 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_114, vp_c3_1._m0[9].z, fma(_112, vp_c3_1._m0[9].y, _110 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_114, vp_c3_1._m0[7].z, fma(_112, vp_c3_1._m0[7].y, _110 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


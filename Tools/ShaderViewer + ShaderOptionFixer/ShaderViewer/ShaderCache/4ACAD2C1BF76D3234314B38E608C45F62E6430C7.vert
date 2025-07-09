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

layout(location = 1) in vec4 _31;
layout(location = 0) in vec4 _33;
layout(location = 2) in vec4 _35;
layout(location = 9) in vec4 _37;
layout(location = 8) in vec4 _39;
layout(location = 7) out vec4 _41;
layout(location = 2) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 0) out vec4 _47;
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
    float _62 = _31.y;
    float _64 = _33.x;
    float _66 = _35.x;
    float _68 = _37.y;
    float _70 = _33.y;
    float _72 = _37.x;
    float _74 = _35.y;
    float _76 = _39.y;
    float _78 = _31.z;
    float _80 = _33.z;
    float _82 = _35.z;
    float _84 = _39.x;
    _41.y = fma(_68, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _41.w = fma(_68, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _41.z = fma(_72, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _41.x = fma(_72, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _43.w = _35.w;
    float _86 = fma(_78, vp_c4_1._m0[0].z, fma(_62, vp_c4_1._m0[0].y, _60 * vp_c4_1._m0[0].x));
    float _88 = fma(_78, vp_c4_1._m0[2].z, fma(_62, vp_c4_1._m0[2].y, _60 * vp_c4_1._m0[2].x));
    float _90 = fma(_78, vp_c4_1._m0[1].z, fma(_62, vp_c4_1._m0[1].y, _60 * vp_c4_1._m0[1].x));
    float _92 = fma(_82, vp_c4_1._m0[0].z, fma(_74, vp_c4_1._m0[0].y, _66 * vp_c4_1._m0[0].x));
    float _94 = fma(_80, vp_c4_1._m0[0].z, fma(_70, vp_c4_1._m0[0].y, _64 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _45.x = _94;
    float _96 = fma(_82, vp_c4_1._m0[2].z, fma(_74, vp_c4_1._m0[2].y, _66 * vp_c4_1._m0[2].x));
    float _98 = fma(_82, vp_c4_1._m0[1].z, fma(_74, vp_c4_1._m0[1].y, _66 * vp_c4_1._m0[1].x));
    _47.x = fma(_84, vp_c5_1._m0[112].x, _76 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    float _100 = fma(_80, vp_c4_1._m0[1].z, fma(_70, vp_c4_1._m0[1].y, _64 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _45.y = _100;
    float _102 = fma(_80, vp_c4_1._m0[2].z, fma(_70, vp_c4_1._m0[2].y, _64 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    float _104 = inversesqrt(fma(_88, _88, fma(_90, _90, _86 * _86)));
    _45.z = _102;
    _49.x = _94 + (-vp_c3_1._m0[11].w);
    float _106 = inversesqrt(fma(_96, _96, fma(_98, _98, _92 * _92)));
    _49.y = _100 + (-vp_c3_1._m0[12].w);
    _47.y = fma(_84, vp_c5_1._m0[112].y, _76 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    float _108 = fma(_102, vp_c3_1._m0[0].z, fma(_100, vp_c3_1._m0[0].y, _94 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _51.x = _86 * _104;
    _51.y = _90 * _104;
    _43.y = _98 * _106;
    float _110 = fma(_102, vp_c3_1._m0[1].z, fma(_100, vp_c3_1._m0[1].y, _94 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _43.x = _92 * _106;
    _51.z = _88 * _104;
    float _112 = fma(_102, vp_c3_1._m0[2].z, fma(_100, vp_c3_1._m0[2].y, _94 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _43.z = _96 * _106;
    _45.w = _112;
    _49.z = _102 + (-vp_c3_1._m0[13].w);
    float _114 = fma(_112, vp_c3_1._m0[8].z, fma(_110, vp_c3_1._m0[8].y, _108 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_112, vp_c3_1._m0[9].z, fma(_110, vp_c3_1._m0[9].y, _108 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _116 = fma(_112, vp_c3_1._m0[7].z, fma(_110, vp_c3_1._m0[7].y, _108 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _114;
    float _118 = fma(_112, vp_c3_1._m0[10].z, fma(_110, vp_c3_1._m0[10].y, _108 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _53.y = _114;
    gl_Position.x = _116;
    _53.x = _116;
    gl_Position.w = _118;
    _53.w = _118;
}


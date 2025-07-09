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
layout(location = 9) in vec4 _33;
layout(location = 0) in vec4 _35;
layout(location = 8) in vec4 _37;
layout(location = 12) in vec4 _39;
layout(location = 7) out vec4 _41;
layout(location = 2) out vec4 _43;
layout(location = 0) out vec4 _45;
layout(location = 3) out vec4 _47;
layout(location = 1) out vec4 _49;
layout(location = 4) out vec4 _51;
layout(location = 6) out vec4 _53;
layout(location = 5) out vec4 _55;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _62 = _31.x;
    float _64 = _33.x;
    float _66 = _31.y;
    float _68 = _33.y;
    float _70 = _35.x;
    float _72 = _37.y;
    float _74 = _31.z;
    float _76 = _35.y;
    float _78 = _37.x;
    float _80 = _35.z;
    _41.z = fma(_64, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _41.w = fma(_68, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _41.x = fma(_64, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _41.y = fma(_68, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _43.x = _39.x;
    float _82 = fma(_74, vp_c4_1._m0[0].z, fma(_66, vp_c4_1._m0[0].y, _62 * vp_c4_1._m0[0].x));
    float _84 = fma(_74, vp_c4_1._m0[1].z, fma(_66, vp_c4_1._m0[1].y, _62 * vp_c4_1._m0[1].x));
    float _86 = fma(_74, vp_c4_1._m0[2].z, fma(_66, vp_c4_1._m0[2].y, _62 * vp_c4_1._m0[2].x));
    _45.y = fma(_78, vp_c5_1._m0[111].y, _72 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _88 = fma(_80, vp_c4_1._m0[0].z, fma(_76, vp_c4_1._m0[0].y, _70 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _47.x = _88;
    float _90 = fma(_80, vp_c4_1._m0[1].z, fma(_76, vp_c4_1._m0[1].y, _70 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    float _92 = inversesqrt(fma(_86, _86, fma(_84, _84, _82 * _82)));
    _47.y = _90;
    float _94 = fma(_80, vp_c4_1._m0[2].z, fma(_76, vp_c4_1._m0[2].y, _70 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _47.z = _94;
    _45.x = fma(_78, vp_c5_1._m0[111].x, _72 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _49.x = _82 * _92;
    _49.y = _84 * _92;
    _49.z = _86 * _92;
    _51.x = _88 + (-vp_c3_1._m0[11].w);
    float _96 = fma(_94, vp_c3_1._m0[0].z, fma(_90, vp_c3_1._m0[0].y, _88 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _51.z = _94 + (-vp_c3_1._m0[13].w);
    _51.y = _90 + (-vp_c3_1._m0[12].w);
    float _98 = fma(_94, vp_c3_1._m0[1].z, fma(_90, vp_c3_1._m0[1].y, _88 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _100 = fma(_94, vp_c3_1._m0[2].z, fma(_90, vp_c3_1._m0[2].y, _88 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _47.w = _100;
    _53.x = fma(_94, vp_c3_1._m0[35].z, fma(_90, vp_c3_1._m0[35].y, _88 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _53.y = fma(_94, vp_c3_1._m0[36].z, fma(_90, vp_c3_1._m0[36].y, _88 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _53.z = fma(_94, vp_c3_1._m0[37].z, fma(_90, vp_c3_1._m0[37].y, _88 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _102 = fma(_100, vp_c3_1._m0[8].z, fma(_98, vp_c3_1._m0[8].y, _96 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_100, vp_c3_1._m0[9].z, fma(_98, vp_c3_1._m0[9].y, _96 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _104 = fma(_100, vp_c3_1._m0[7].z, fma(_98, vp_c3_1._m0[7].y, _96 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _102;
    float _106 = fma(_100, vp_c3_1._m0[10].z, fma(_98, vp_c3_1._m0[10].y, _96 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _55.y = _102;
    gl_Position.x = _104;
    _55.x = _104;
    gl_Position.w = _106;
    _55.w = _106;
}


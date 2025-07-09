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
layout(location = 12) in vec4 _37;
layout(location = 8) out vec4 _39;
layout(location = 1) out vec4 _41;
layout(location = 2) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 0) out vec4 _47;
layout(location = 5) out vec4 _49;
layout(location = 6) out vec4 _51;
layout(location = 7) out vec4 _53;
layout(location = 4) out vec4 _55;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _62 = _31.x;
    float _64 = _31.y;
    float _66 = _35.x;
    float _68 = _31.z;
    float _70 = _35.y;
    float _72 = _35.z;
    _39.x = fma(_33.x, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    float _74 = fma(_68, vp_c4_1._m0[0].z, fma(_64, vp_c4_1._m0[0].y, _62 * vp_c4_1._m0[0].x));
    float _76 = fma(_68, vp_c4_1._m0[1].z, fma(_64, vp_c4_1._m0[1].y, _62 * vp_c4_1._m0[1].x));
    float _78 = fma(_68, vp_c4_1._m0[2].z, fma(_64, vp_c4_1._m0[2].y, _62 * vp_c4_1._m0[2].x));
    _39.y = fma(_33.y, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _41.w = clamp(_37.w * vp_c5_1._m0[0].x, 0.0, 1.0);
    float _80 = inversesqrt(fma(_78, _78, fma(_76, _76, _74 * _74)));
    float _82 = fma(_72, vp_c4_1._m0[0].z, fma(_70, vp_c4_1._m0[0].y, _66 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _43.x = _82;
    float _84 = fma(_72, vp_c4_1._m0[1].z, fma(_70, vp_c4_1._m0[1].y, _66 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _43.y = _84;
    float _86 = fma(_72, vp_c4_1._m0[2].z, fma(_70, vp_c4_1._m0[2].y, _66 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _43.z = _86;
    _45.x = _82 + (-vp_c3_1._m0[11].w);
    _47.x = _74 * _80;
    _47.y = _76 * _80;
    _45.z = _86 + (-vp_c3_1._m0[13].w);
    _45.y = _84 + (-vp_c3_1._m0[12].w);
    _49.w = fma(_86, vp_c3_1._m0[63].z, fma(_84, vp_c3_1._m0[63].y, _82 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _47.z = _78 * _80;
    _49.y = fma(_86, vp_c3_1._m0[61].z, fma(_84, vp_c3_1._m0[61].y, _82 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    _49.x = fma(_86, vp_c3_1._m0[60].z, fma(_84, vp_c3_1._m0[60].y, _82 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    _51.w = fma(_86, vp_c3_1._m0[45].z, fma(_84, vp_c3_1._m0[45].y, _82 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _51.z = fma(_86, vp_c3_1._m0[44].z, fma(_84, vp_c3_1._m0[44].y, _82 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    _49.z = fma(_86, vp_c3_1._m0[62].z, fma(_84, vp_c3_1._m0[62].y, _82 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _53.z = fma(_86, vp_c3_1._m0[48].z, fma(_84, vp_c3_1._m0[48].y, _82 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    _51.y = fma(_86, vp_c3_1._m0[43].z, fma(_84, vp_c3_1._m0[43].y, _82 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    float _88 = fma(_86, vp_c3_1._m0[0].z, fma(_84, vp_c3_1._m0[0].y, _82 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _90 = fma(_86, vp_c3_1._m0[1].z, fma(_84, vp_c3_1._m0[1].y, _82 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _92 = fma(_86, vp_c3_1._m0[2].z, fma(_84, vp_c3_1._m0[2].y, _82 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _43.w = _92;
    _51.x = fma(_86, vp_c3_1._m0[42].z, fma(_84, vp_c3_1._m0[42].y, _82 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    _53.w = fma(_86, vp_c3_1._m0[49].z, fma(_84, vp_c3_1._m0[49].y, _82 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    _53.y = fma(_86, vp_c3_1._m0[47].z, fma(_84, vp_c3_1._m0[47].y, _82 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _55.z = fma(_86, vp_c3_1._m0[37].z, fma(_84, vp_c3_1._m0[37].y, _82 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _53.x = fma(_86, vp_c3_1._m0[46].z, fma(_84, vp_c3_1._m0[46].y, _82 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    _55.y = fma(_86, vp_c3_1._m0[36].z, fma(_84, vp_c3_1._m0[36].y, _82 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _55.x = fma(_86, vp_c3_1._m0[35].z, fma(_84, vp_c3_1._m0[35].y, _82 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    gl_Position.w = fma(_92, vp_c3_1._m0[10].z, fma(_90, vp_c3_1._m0[10].y, _88 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.y = fma(_92, vp_c3_1._m0[8].z, fma(_90, vp_c3_1._m0[8].y, _88 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_92, vp_c3_1._m0[9].z, fma(_90, vp_c3_1._m0[9].y, _88 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_92, vp_c3_1._m0[7].z, fma(_90, vp_c3_1._m0[7].y, _88 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


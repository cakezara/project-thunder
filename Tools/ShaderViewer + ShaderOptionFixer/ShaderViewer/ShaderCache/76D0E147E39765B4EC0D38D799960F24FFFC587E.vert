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
layout(location = 8) in vec4 _35;
layout(location = 0) in vec4 _37;
layout(location = 2) out vec4 _39;
layout(location = 8) out vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 4) out vec4 _47;
layout(location = 1) out vec4 _49;
layout(location = 6) out vec4 _51;
layout(location = 7) out vec4 _53;
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
    float _66 = _33.y;
    float _68 = _31.y;
    float _70 = _35.y;
    float _72 = _37.x;
    float _74 = _33.z;
    float _76 = _35.x;
    float _78 = _37.y;
    float _80 = _37.z;
    _39.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    _41.z = fma(_62, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _41.w = fma(_68, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _41.y = fma(_68, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _41.x = fma(_62, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    float _82 = fma(_74, vp_c4_1._m0[0].z, fma(_66, vp_c4_1._m0[0].y, _64 * vp_c4_1._m0[0].x));
    float _84 = fma(_74, vp_c4_1._m0[1].z, fma(_66, vp_c4_1._m0[1].y, _64 * vp_c4_1._m0[1].x));
    float _86 = fma(_74, vp_c4_1._m0[2].z, fma(_66, vp_c4_1._m0[2].y, _64 * vp_c4_1._m0[2].x));
    _43.x = fma(_76, vp_c5_1._m0[112].x, _70 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    float _88 = fma(_80, vp_c4_1._m0[0].z, fma(_78, vp_c4_1._m0[0].y, _72 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _45.x = _88;
    float _90 = fma(_80, vp_c4_1._m0[1].z, fma(_78, vp_c4_1._m0[1].y, _72 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    float _92 = inversesqrt(fma(_86, _86, fma(_84, _84, _82 * _82)));
    _45.y = _90;
    float _94 = fma(_80, vp_c4_1._m0[2].z, fma(_78, vp_c4_1._m0[2].y, _72 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _45.z = _94;
    _47.x = _88 + (-vp_c3_1._m0[11].w);
    _49.y = _84 * _92;
    _49.x = _82 * _92;
    _49.z = _86 * _92;
    _51.y = fma(_94, vp_c3_1._m0[43].z, fma(_90, vp_c3_1._m0[43].y, _88 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    _47.y = _90 + (-vp_c3_1._m0[12].w);
    _53.z = fma(_94, vp_c3_1._m0[48].z, fma(_90, vp_c3_1._m0[48].y, _88 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    _47.z = _94 + (-vp_c3_1._m0[13].w);
    _51.z = fma(_94, vp_c3_1._m0[44].z, fma(_90, vp_c3_1._m0[44].y, _88 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    _43.y = fma(_76, vp_c5_1._m0[112].y, _70 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    _51.x = fma(_94, vp_c3_1._m0[42].z, fma(_90, vp_c3_1._m0[42].y, _88 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    float _96 = fma(_94, vp_c3_1._m0[0].z, fma(_90, vp_c3_1._m0[0].y, _88 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _98 = fma(_94, vp_c3_1._m0[1].z, fma(_90, vp_c3_1._m0[1].y, _88 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _100 = fma(_94, vp_c3_1._m0[2].z, fma(_90, vp_c3_1._m0[2].y, _88 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _45.w = _100;
    _53.x = fma(_94, vp_c3_1._m0[46].z, fma(_90, vp_c3_1._m0[46].y, _88 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    _51.w = fma(_94, vp_c3_1._m0[45].z, fma(_90, vp_c3_1._m0[45].y, _88 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _53.w = fma(_94, vp_c3_1._m0[49].z, fma(_90, vp_c3_1._m0[49].y, _88 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    _53.y = fma(_94, vp_c3_1._m0[47].z, fma(_90, vp_c3_1._m0[47].y, _88 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _55.z = fma(_94, vp_c3_1._m0[37].z, fma(_90, vp_c3_1._m0[37].y, _88 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _55.x = fma(_94, vp_c3_1._m0[35].z, fma(_90, vp_c3_1._m0[35].y, _88 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _55.y = fma(_94, vp_c3_1._m0[36].z, fma(_90, vp_c3_1._m0[36].y, _88 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    gl_Position.y = fma(_100, vp_c3_1._m0[8].z, fma(_98, vp_c3_1._m0[8].y, _96 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.w = fma(_100, vp_c3_1._m0[10].z, fma(_98, vp_c3_1._m0[10].y, _96 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_100, vp_c3_1._m0[9].z, fma(_98, vp_c3_1._m0[9].y, _96 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_100, vp_c3_1._m0[7].z, fma(_98, vp_c3_1._m0[7].y, _96 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


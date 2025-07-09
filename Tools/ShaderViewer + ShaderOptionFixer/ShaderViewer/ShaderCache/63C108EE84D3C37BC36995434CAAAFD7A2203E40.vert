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

layout(location = 1) in vec4 _31;
layout(location = 9) in vec4 _33;
layout(location = 2) in vec4 _35;
layout(location = 8) in vec4 _37;
layout(location = 0) in vec4 _39;
layout(location = 10) out vec4 _41;
layout(location = 3) out vec4 _43;
layout(location = 2) out vec4 _45;
layout(location = 0) out vec4 _47;
layout(location = 4) out vec4 _49;
layout(location = 1) out vec4 _51;
layout(location = 5) out vec4 _53;
layout(location = 7) out vec4 _55;
layout(location = 8) out vec4 _57;
layout(location = 9) out vec4 _59;
layout(location = 6) out vec4 _61;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _68 = _31.x;
    float _70 = _31.y;
    float _72 = _33.y;
    float _74 = _35.x;
    float _76 = _33.x;
    float _78 = _37.y;
    float _80 = _35.y;
    float _82 = _39.x;
    float _84 = _31.z;
    float _86 = _39.y;
    float _88 = _35.z;
    float _90 = _37.x;
    float _92 = _39.z;
    _41.w = fma(_72, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _43.w = _35.w;
    _41.z = fma(_76, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _41.x = fma(_76, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _41.y = fma(_72, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _45.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    float _94 = fma(_84, vp_c4_1._m0[0].z, fma(_70, vp_c4_1._m0[0].y, _68 * vp_c4_1._m0[0].x));
    float _96 = fma(_84, vp_c4_1._m0[1].z, fma(_70, vp_c4_1._m0[1].y, _68 * vp_c4_1._m0[1].x));
    float _98 = fma(_84, vp_c4_1._m0[2].z, fma(_70, vp_c4_1._m0[2].y, _68 * vp_c4_1._m0[2].x));
    float _100 = fma(_88, vp_c4_1._m0[0].z, fma(_80, vp_c4_1._m0[0].y, _74 * vp_c4_1._m0[0].x));
    float _102 = fma(_88, vp_c4_1._m0[1].z, fma(_80, vp_c4_1._m0[1].y, _74 * vp_c4_1._m0[1].x));
    float _104 = fma(_88, vp_c4_1._m0[2].z, fma(_80, vp_c4_1._m0[2].y, _74 * vp_c4_1._m0[2].x));
    _47.y = fma(_90, vp_c5_1._m0[112].y, _78 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    float _106 = inversesqrt(fma(_98, _98, fma(_96, _96, _94 * _94)));
    float _108 = fma(_92, vp_c4_1._m0[0].z, fma(_86, vp_c4_1._m0[0].y, _82 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    float _110 = fma(_92, vp_c4_1._m0[2].z, fma(_86, vp_c4_1._m0[2].y, _82 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _49.x = _108;
    _49.z = _110;
    float _112 = fma(_92, vp_c4_1._m0[1].z, fma(_86, vp_c4_1._m0[1].y, _82 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    float _114 = inversesqrt(fma(_104, _104, fma(_102, _102, _100 * _100)));
    _49.y = _112;
    _51.x = _94 * _106;
    _53.x = _108 + (-vp_c3_1._m0[11].w);
    _53.z = _110 + (-vp_c3_1._m0[13].w);
    _51.y = _96 * _106;
    _51.z = _98 * _106;
    _43.y = _102 * _114;
    _53.y = _112 + (-vp_c3_1._m0[12].w);
    _43.x = _100 * _114;
    _55.w = fma(_110, vp_c3_1._m0[63].z, fma(_112, vp_c3_1._m0[63].y, _108 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _43.z = _104 * _114;
    _55.y = fma(_110, vp_c3_1._m0[61].z, fma(_112, vp_c3_1._m0[61].y, _108 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    _47.x = fma(_90, vp_c5_1._m0[112].x, _78 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _55.x = fma(_110, vp_c3_1._m0[60].z, fma(_112, vp_c3_1._m0[60].y, _108 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    _55.z = fma(_110, vp_c3_1._m0[62].z, fma(_112, vp_c3_1._m0[62].y, _108 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _57.w = fma(_110, vp_c3_1._m0[45].z, fma(_112, vp_c3_1._m0[45].y, _108 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _57.z = fma(_110, vp_c3_1._m0[44].z, fma(_112, vp_c3_1._m0[44].y, _108 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    _57.y = fma(_110, vp_c3_1._m0[43].z, fma(_112, vp_c3_1._m0[43].y, _108 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    float _116 = fma(_110, vp_c3_1._m0[0].z, fma(_112, vp_c3_1._m0[0].y, _108 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _118 = fma(_110, vp_c3_1._m0[1].z, fma(_112, vp_c3_1._m0[1].y, _108 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _59.w = fma(_110, vp_c3_1._m0[49].z, fma(_112, vp_c3_1._m0[49].y, _108 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    float _120 = fma(_110, vp_c3_1._m0[2].z, fma(_112, vp_c3_1._m0[2].y, _108 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _49.w = _120;
    _57.x = fma(_110, vp_c3_1._m0[42].z, fma(_112, vp_c3_1._m0[42].y, _108 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    _59.z = fma(_110, vp_c3_1._m0[48].z, fma(_112, vp_c3_1._m0[48].y, _108 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    _59.y = fma(_110, vp_c3_1._m0[47].z, fma(_112, vp_c3_1._m0[47].y, _108 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _59.x = fma(_110, vp_c3_1._m0[46].z, fma(_112, vp_c3_1._m0[46].y, _108 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    _61.y = fma(_110, vp_c3_1._m0[36].z, fma(_112, vp_c3_1._m0[36].y, _108 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _61.z = fma(_110, vp_c3_1._m0[37].z, fma(_112, vp_c3_1._m0[37].y, _108 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _61.x = fma(_110, vp_c3_1._m0[35].z, fma(_112, vp_c3_1._m0[35].y, _108 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    gl_Position.w = fma(_120, vp_c3_1._m0[10].z, fma(_118, vp_c3_1._m0[10].y, _116 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.y = fma(_120, vp_c3_1._m0[8].z, fma(_118, vp_c3_1._m0[8].y, _116 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_120, vp_c3_1._m0[9].z, fma(_118, vp_c3_1._m0[9].y, _116 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_120, vp_c3_1._m0[7].z, fma(_118, vp_c3_1._m0[7].y, _116 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


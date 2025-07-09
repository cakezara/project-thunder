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
layout(location = 10) in vec4 _37;
layout(location = 8) in vec4 _39;
layout(location = 0) in vec4 _41;
layout(location = 7) out vec4 _43;
layout(location = 2) out vec4 _45;
layout(location = 0) out vec4 _47;
layout(location = 3) out vec4 _49;
layout(location = 1) out vec4 _51;
layout(location = 4) out vec4 _53;
layout(location = 6) out vec4 _55;
layout(location = 5) out vec4 _57;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _64 = _31.x;
    float _66 = _33.x;
    float _68 = _35.x;
    float _70 = _33.y;
    float _72 = _37.y;
    float _74 = _31.y;
    float _76 = _35.y;
    float _78 = _37.x;
    float _80 = _39.y;
    float _82 = _41.x;
    float _84 = _33.z;
    float _86 = _41.y;
    float _88 = _39.x;
    float _90 = _35.z;
    float _92 = _41.z;
    _43.z = fma(_64, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _43.w = fma(_74, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _43.x = fma(_64, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _43.y = fma(_74, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _45.w = _35.w;
    float _94 = fma(_84, vp_c4_1._m0[0].z, fma(_70, vp_c4_1._m0[0].y, _66 * vp_c4_1._m0[0].x));
    float _96 = fma(_84, vp_c4_1._m0[2].z, fma(_70, vp_c4_1._m0[2].y, _66 * vp_c4_1._m0[2].x));
    float _98 = fma(_84, vp_c4_1._m0[1].z, fma(_70, vp_c4_1._m0[1].y, _66 * vp_c4_1._m0[1].x));
    float _100 = fma(_90, vp_c4_1._m0[0].z, fma(_76, vp_c4_1._m0[0].y, _68 * vp_c4_1._m0[0].x));
    float _102 = fma(_90, vp_c4_1._m0[1].z, fma(_76, vp_c4_1._m0[1].y, _68 * vp_c4_1._m0[1].x));
    _47.y = fma(_88, vp_c5_1._m0[112].y, _80 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    _47.x = fma(_88, vp_c5_1._m0[112].x, _80 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    float _104 = fma(_90, vp_c4_1._m0[2].z, fma(_76, vp_c4_1._m0[2].y, _68 * vp_c4_1._m0[2].x));
    float _106 = inversesqrt(fma(_96, _96, fma(_98, _98, _94 * _94)));
    float _108 = fma(_92, vp_c4_1._m0[0].z, fma(_86, vp_c4_1._m0[0].y, _82 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _49.x = _108;
    float _110 = fma(_92, vp_c4_1._m0[1].z, fma(_86, vp_c4_1._m0[1].y, _82 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    float _112 = inversesqrt(fma(_104, _104, fma(_102, _102, _100 * _100)));
    _49.y = _110;
    _51.x = _94 * _106;
    _51.y = _98 * _106;
    _51.z = _96 * _106;
    float _114 = fma(_92, vp_c4_1._m0[2].z, fma(_86, vp_c4_1._m0[2].y, _82 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _49.z = _114;
    _53.x = _108 + (-vp_c3_1._m0[11].w);
    _45.x = _100 * _112;
    _53.y = _110 + (-vp_c3_1._m0[12].w);
    _53.z = _114 + (-vp_c3_1._m0[13].w);
    float _116 = fma(_114, vp_c3_1._m0[0].z, fma(_110, vp_c3_1._m0[0].y, _108 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _47.z = fma(_78, vp_c5_1._m0[114].x, _72 * vp_c5_1._m0[114].z) + vp_c5_1._m0[115].x;
    _47.w = fma(_78, vp_c5_1._m0[114].y, _72 * vp_c5_1._m0[114].w) + vp_c5_1._m0[115].y;
    _45.y = _102 * _112;
    float _118 = fma(_114, vp_c3_1._m0[1].z, fma(_110, vp_c3_1._m0[1].y, _108 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _55.y = fma(_114, vp_c3_1._m0[36].z, fma(_110, vp_c3_1._m0[36].y, _108 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _120 = fma(_114, vp_c3_1._m0[2].z, fma(_110, vp_c3_1._m0[2].y, _108 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _49.w = _120;
    _45.z = _104 * _112;
    _55.z = fma(_114, vp_c3_1._m0[37].z, fma(_110, vp_c3_1._m0[37].y, _108 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _55.x = fma(_114, vp_c3_1._m0[35].z, fma(_110, vp_c3_1._m0[35].y, _108 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _122 = fma(_120, vp_c3_1._m0[8].z, fma(_118, vp_c3_1._m0[8].y, _116 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_120, vp_c3_1._m0[9].z, fma(_118, vp_c3_1._m0[9].y, _116 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _124 = fma(_120, vp_c3_1._m0[7].z, fma(_118, vp_c3_1._m0[7].y, _116 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _122;
    float _126 = fma(_120, vp_c3_1._m0[10].z, fma(_118, vp_c3_1._m0[10].y, _116 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _57.y = _122;
    gl_Position.x = _124;
    _57.x = _124;
    gl_Position.w = _126;
    _57.w = _126;
}


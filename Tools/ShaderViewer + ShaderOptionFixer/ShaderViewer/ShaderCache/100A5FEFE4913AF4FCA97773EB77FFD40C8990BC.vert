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

layout(binding = 7, std140) uniform vp_c6
{
    vec4 _m0[4096];
} vp_c6_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 1) in vec4 _33;
layout(location = 10) in vec4 _35;
layout(location = 8) in vec4 _37;
layout(location = 0) in vec4 _39;
layout(location = 2) in vec4 _41;
layout(location = 3) out vec4 _43;
layout(location = 4) out vec4 _45;
layout(location = 0) out vec4 _47;
layout(location = 5) out vec4 _49;
layout(location = 1) out vec4 _51;
layout(location = 2) out vec4 _53;
layout(location = 6) out vec4 _55;
layout(location = 8) out vec4 _57;
layout(location = 7) out vec4 _59;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _66 = _33.x;
    float _68 = _33.y;
    float _70 = _35.y;
    float _72 = _37.y;
    float _74 = _39.x;
    float _76 = _35.x;
    float _78 = _37.x;
    float _80 = _39.y;
    float _82 = _33.z;
    float _84 = _41.x;
    float _86 = _39.z;
    float _88 = _41.y;
    float _90 = _41.z;
    _43.w = clamp((-0.0) + vp_c5_1._m0[19].y, 0.0, 1.0);
    _45.w = _41.w;
    float _92 = fma(_82, vp_c4_1._m0[2].z, fma(_68, vp_c4_1._m0[2].y, _66 * vp_c4_1._m0[2].x));
    float _94 = fma(_82, vp_c4_1._m0[1].z, fma(_68, vp_c4_1._m0[1].y, _66 * vp_c4_1._m0[1].x));
    float _96 = fma(_82, vp_c4_1._m0[0].z, fma(_68, vp_c4_1._m0[0].y, _66 * vp_c4_1._m0[0].x));
    _47.z = fma(_76, vp_c5_1._m0[61].x, _70 * vp_c5_1._m0[61].z) + vp_c5_1._m0[62].x;
    _47.w = fma(_76, vp_c5_1._m0[61].y, _70 * vp_c5_1._m0[61].w) + vp_c5_1._m0[62].y;
    _47.y = fma(_78, vp_c5_1._m0[59].y, _72 * vp_c5_1._m0[59].w) + vp_c5_1._m0[60].y;
    float _98 = fma(_86, vp_c4_1._m0[2].z, fma(_80, vp_c4_1._m0[2].y, _74 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _49.z = _98;
    float _100 = fma(_86, vp_c4_1._m0[0].z, fma(_80, vp_c4_1._m0[0].y, _74 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _47.x = fma(_78, vp_c5_1._m0[59].x, _72 * vp_c5_1._m0[59].z) + vp_c5_1._m0[60].x;
    _49.x = _100;
    float _102 = fma(_90, vp_c4_1._m0[0].z, fma(_88, vp_c4_1._m0[0].y, _84 * vp_c4_1._m0[0].x));
    float _104 = fma(_90, vp_c4_1._m0[1].z, fma(_88, vp_c4_1._m0[1].y, _84 * vp_c4_1._m0[1].x));
    float _106 = inversesqrt(fma(_92, _92, fma(_94, _94, _96 * _96)));
    float _108 = fma(_90, vp_c4_1._m0[2].z, fma(_88, vp_c4_1._m0[2].y, _84 * vp_c4_1._m0[2].x));
    float _110 = fma(_86, vp_c4_1._m0[1].z, fma(_80, vp_c4_1._m0[1].y, _74 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _51.w = fma(_98, -vp_c6_1._m0[16].y, 0.5);
    _49.y = _110;
    float _112 = inversesqrt(fma(_108, _108, fma(_104, _104, _102 * _102)));
    _53.y = _94 * _106;
    _55.x = _100 + (-vp_c3_1._m0[11].w);
    _55.y = _110 + (-vp_c3_1._m0[12].w);
    _51.z = fma(_100, vp_c6_1._m0[16].x, 0.5);
    _53.x = _96 * _106;
    _53.z = _92 * _106;
    _45.x = _102 * _112;
    _45.y = _104 * _112;
    float _114 = fma(_98, vp_c3_1._m0[0].z, fma(_110, vp_c3_1._m0[0].y, _100 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _55.z = _98 + (-vp_c3_1._m0[13].w);
    float _116 = fma(_98, vp_c3_1._m0[1].z, fma(_110, vp_c3_1._m0[1].y, _100 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _118 = fma(_98, vp_c3_1._m0[2].z, fma(_110, vp_c3_1._m0[2].y, _100 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _49.w = _118;
    _45.z = _108 * _112;
    _57.y = fma(_98, vp_c3_1._m0[36].z, fma(_110, vp_c3_1._m0[36].y, _100 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _57.x = fma(_98, vp_c3_1._m0[35].z, fma(_110, vp_c3_1._m0[35].y, _100 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _57.z = fma(_98, vp_c3_1._m0[37].z, fma(_110, vp_c3_1._m0[37].y, _100 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _120 = fma(_118, vp_c3_1._m0[8].z, fma(_116, vp_c3_1._m0[8].y, _114 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_118, vp_c3_1._m0[9].z, fma(_116, vp_c3_1._m0[9].y, _114 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _122 = fma(_118, vp_c3_1._m0[7].z, fma(_116, vp_c3_1._m0[7].y, _114 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _120;
    float _124 = fma(_118, vp_c3_1._m0[10].z, fma(_116, vp_c3_1._m0[10].y, _114 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _59.y = _120;
    gl_Position.x = _122;
    _59.x = _122;
    gl_Position.w = _124;
    _59.w = _124;
}


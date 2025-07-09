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
layout(location = 8) in vec4 _37;
layout(location = 11) in vec4 _39;
layout(location = 0) in vec4 _41;
layout(location = 8) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 1) out vec4 _47;
layout(location = 4) out vec4 _49;
layout(location = 2) out vec4 _51;
layout(location = 5) out vec4 _53;
layout(location = 0) out vec4 _55;
layout(location = 7) out vec4 _57;
layout(location = 6) out vec4 _59;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _66 = _31.x;
    float _68 = _33.x;
    float _70 = _35.x;
    float _72 = _33.y;
    float _74 = _37.y;
    float _76 = _31.y;
    float _78 = _35.y;
    float _80 = _37.x;
    float _82 = _39.y;
    float _84 = _41.x;
    float _86 = _33.z;
    float _88 = _41.y;
    float _90 = _39.x;
    float _92 = _35.z;
    float _94 = _41.z;
    _43.z = fma(_66, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _43.w = fma(_76, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _43.x = fma(_66, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _43.y = fma(_76, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _45.w = _35.w;
    float _96 = fma(_86, vp_c4_1._m0[0].z, fma(_72, vp_c4_1._m0[0].y, _68 * vp_c4_1._m0[0].x));
    float _98 = fma(_86, vp_c4_1._m0[2].z, fma(_72, vp_c4_1._m0[2].y, _68 * vp_c4_1._m0[2].x));
    float _100 = fma(_86, vp_c4_1._m0[1].z, fma(_72, vp_c4_1._m0[1].y, _68 * vp_c4_1._m0[1].x));
    float _102 = fma(_92, vp_c4_1._m0[0].z, fma(_78, vp_c4_1._m0[0].y, _70 * vp_c4_1._m0[0].x));
    float _104 = fma(_92, vp_c4_1._m0[1].z, fma(_78, vp_c4_1._m0[1].y, _70 * vp_c4_1._m0[1].x));
    _47.y = fma(_90, vp_c5_1._m0[116].y, _82 * vp_c5_1._m0[116].w) + vp_c5_1._m0[117].y;
    _47.x = fma(_90, vp_c5_1._m0[116].x, _82 * vp_c5_1._m0[116].z) + vp_c5_1._m0[117].x;
    float _106 = fma(_92, vp_c4_1._m0[2].z, fma(_78, vp_c4_1._m0[2].y, _70 * vp_c4_1._m0[2].x));
    float _108 = inversesqrt(fma(_98, _98, fma(_100, _100, _96 * _96)));
    float _110 = fma(_94, vp_c4_1._m0[0].z, fma(_88, vp_c4_1._m0[0].y, _84 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _49.x = _110;
    float _112 = fma(_94, vp_c4_1._m0[1].z, fma(_88, vp_c4_1._m0[1].y, _84 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    float _114 = inversesqrt(fma(_106, _106, fma(_104, _104, _102 * _102)));
    _49.y = _112;
    _51.x = _96 * _108;
    _51.y = _100 * _108;
    _51.z = _98 * _108;
    float _116 = fma(_94, vp_c4_1._m0[2].z, fma(_88, vp_c4_1._m0[2].y, _84 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _49.z = _116;
    _53.x = _110 + (-vp_c3_1._m0[11].w);
    _45.x = _102 * _114;
    _53.y = _112 + (-vp_c3_1._m0[12].w);
    _53.z = _116 + (-vp_c3_1._m0[13].w);
    float _118 = fma(_116, vp_c3_1._m0[0].z, fma(_112, vp_c3_1._m0[0].y, _110 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _55.x = fma(_80, vp_c5_1._m0[112].x, _74 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _55.y = fma(_80, vp_c5_1._m0[112].y, _74 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    _45.y = _104 * _114;
    float _120 = fma(_116, vp_c3_1._m0[1].z, fma(_112, vp_c3_1._m0[1].y, _110 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _57.y = fma(_116, vp_c3_1._m0[36].z, fma(_112, vp_c3_1._m0[36].y, _110 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _122 = fma(_116, vp_c3_1._m0[2].z, fma(_112, vp_c3_1._m0[2].y, _110 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _49.w = _122;
    _45.z = _106 * _114;
    _57.z = fma(_116, vp_c3_1._m0[37].z, fma(_112, vp_c3_1._m0[37].y, _110 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _57.x = fma(_116, vp_c3_1._m0[35].z, fma(_112, vp_c3_1._m0[35].y, _110 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _124 = fma(_122, vp_c3_1._m0[8].z, fma(_120, vp_c3_1._m0[8].y, _118 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_122, vp_c3_1._m0[9].z, fma(_120, vp_c3_1._m0[9].y, _118 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _126 = fma(_122, vp_c3_1._m0[7].z, fma(_120, vp_c3_1._m0[7].y, _118 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _124;
    float _128 = fma(_122, vp_c3_1._m0[10].z, fma(_120, vp_c3_1._m0[10].y, _118 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _59.y = _124;
    gl_Position.x = _126;
    _59.x = _126;
    gl_Position.w = _128;
    _59.w = _128;
}


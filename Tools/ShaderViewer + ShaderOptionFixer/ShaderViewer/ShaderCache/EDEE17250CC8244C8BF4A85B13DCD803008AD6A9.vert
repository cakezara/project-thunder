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

layout(location = 10) in vec4 _33;
layout(location = 1) in vec4 _35;
layout(location = 8) in vec4 _37;
layout(location = 0) in vec4 _39;
layout(location = 2) in vec4 _41;
layout(location = 3) out vec4 _43;
layout(location = 0) out vec4 _45;
layout(location = 4) out vec4 _47;
layout(location = 1) out vec4 _49;
layout(location = 2) out vec4 _51;
layout(location = 5) out vec4 _53;
layout(location = 7) out vec4 _55;
layout(location = 6) out vec4 _57;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _64 = _33.y;
    float _66 = _35.x;
    float _68 = _33.x;
    float _70 = _35.y;
    float _72 = _37.y;
    float _74 = _39.x;
    float _76 = _37.x;
    float _78 = _39.y;
    float _80 = _35.z;
    float _82 = _41.x;
    float _84 = _39.z;
    float _86 = _41.y;
    float _88 = _41.z;
    _43.w = _41.w;
    float _90 = fma(_80, vp_c4_1._m0[2].z, fma(_70, vp_c4_1._m0[2].y, _66 * vp_c4_1._m0[2].x));
    float _92 = fma(_80, vp_c4_1._m0[1].z, fma(_70, vp_c4_1._m0[1].y, _66 * vp_c4_1._m0[1].x));
    float _94 = fma(_80, vp_c4_1._m0[0].z, fma(_70, vp_c4_1._m0[0].y, _66 * vp_c4_1._m0[0].x));
    _45.z = fma(_68, vp_c5_1._m0[61].x, _64 * vp_c5_1._m0[61].z) + vp_c5_1._m0[62].x;
    _45.w = fma(_68, vp_c5_1._m0[61].y, _64 * vp_c5_1._m0[61].w) + vp_c5_1._m0[62].y;
    _45.y = fma(_76, vp_c5_1._m0[59].y, _72 * vp_c5_1._m0[59].w) + vp_c5_1._m0[60].y;
    float _96 = fma(_84, vp_c4_1._m0[2].z, fma(_78, vp_c4_1._m0[2].y, _74 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _47.z = _96;
    float _98 = fma(_84, vp_c4_1._m0[0].z, fma(_78, vp_c4_1._m0[0].y, _74 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _45.x = fma(_76, vp_c5_1._m0[59].x, _72 * vp_c5_1._m0[59].z) + vp_c5_1._m0[60].x;
    _47.x = _98;
    float _100 = fma(_88, vp_c4_1._m0[0].z, fma(_86, vp_c4_1._m0[0].y, _82 * vp_c4_1._m0[0].x));
    float _102 = fma(_88, vp_c4_1._m0[1].z, fma(_86, vp_c4_1._m0[1].y, _82 * vp_c4_1._m0[1].x));
    float _104 = inversesqrt(fma(_90, _90, fma(_92, _92, _94 * _94)));
    float _106 = fma(_88, vp_c4_1._m0[2].z, fma(_86, vp_c4_1._m0[2].y, _82 * vp_c4_1._m0[2].x));
    float _108 = fma(_84, vp_c4_1._m0[1].z, fma(_78, vp_c4_1._m0[1].y, _74 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _49.w = fma(_96, -vp_c6_1._m0[16].y, 0.5);
    _47.y = _108;
    float _110 = inversesqrt(fma(_106, _106, fma(_102, _102, _100 * _100)));
    _51.y = _92 * _104;
    _53.x = _98 + (-vp_c3_1._m0[11].w);
    _53.y = _108 + (-vp_c3_1._m0[12].w);
    _49.z = fma(_98, vp_c6_1._m0[16].x, 0.5);
    _51.x = _94 * _104;
    _51.z = _90 * _104;
    _43.x = _100 * _110;
    _43.y = _102 * _110;
    float _112 = fma(_96, vp_c3_1._m0[0].z, fma(_108, vp_c3_1._m0[0].y, _98 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _53.z = _96 + (-vp_c3_1._m0[13].w);
    float _114 = fma(_96, vp_c3_1._m0[1].z, fma(_108, vp_c3_1._m0[1].y, _98 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _116 = fma(_96, vp_c3_1._m0[2].z, fma(_108, vp_c3_1._m0[2].y, _98 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _47.w = _116;
    _43.z = _106 * _110;
    _55.y = fma(_96, vp_c3_1._m0[36].z, fma(_108, vp_c3_1._m0[36].y, _98 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _55.x = fma(_96, vp_c3_1._m0[35].z, fma(_108, vp_c3_1._m0[35].y, _98 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _55.z = fma(_96, vp_c3_1._m0[37].z, fma(_108, vp_c3_1._m0[37].y, _98 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _118 = fma(_116, vp_c3_1._m0[8].z, fma(_114, vp_c3_1._m0[8].y, _112 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_116, vp_c3_1._m0[9].z, fma(_114, vp_c3_1._m0[9].y, _112 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _120 = fma(_116, vp_c3_1._m0[7].z, fma(_114, vp_c3_1._m0[7].y, _112 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _118;
    float _122 = fma(_116, vp_c3_1._m0[10].z, fma(_114, vp_c3_1._m0[10].y, _112 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _57.y = _118;
    gl_Position.x = _120;
    _57.x = _120;
    gl_Position.w = _122;
    _57.w = _122;
}


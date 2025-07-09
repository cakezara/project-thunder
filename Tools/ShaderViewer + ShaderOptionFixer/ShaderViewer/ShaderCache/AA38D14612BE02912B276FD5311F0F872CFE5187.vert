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
layout(location = 15) in vec4 _37;
layout(location = 8) in vec4 _39;
layout(location = 0) in vec4 _41;
layout(location = 14) in vec4 _43;
layout(location = 13) in vec4 _45;
layout(location = 7) out vec4 _47;
layout(location = 2) out vec4 _49;
layout(location = 10) out vec4 _51;
layout(location = 8) out vec4 _53;
layout(location = 6) out vec4 _55;
layout(location = 0) out vec4 _57;
layout(location = 9) out vec4 _59;
layout(location = 3) out vec4 _61;
layout(location = 4) out vec4 _63;
layout(location = 1) out vec4 _65;
layout(location = 5) out vec4 _67;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _74 = _31.x;
    float _76 = _31.y;
    float _78 = _33.x;
    float _80 = _35.x;
    float _82 = _33.y;
    float _84 = _35.y;
    float _86 = _39.y;
    float _88 = _41.x;
    float _90 = _35.z;
    float _92 = _39.x;
    float _94 = _33.z;
    float _96 = _45.x;
    float _98 = _41.y;
    float _100 = fma(_90, vp_c4_1._m0[0].z, fma(_84, vp_c4_1._m0[0].y, _80 * vp_c4_1._m0[0].x));
    float _102 = fma(_94, vp_c4_1._m0[0].z, fma(_82, vp_c4_1._m0[0].y, _78 * vp_c4_1._m0[0].x));
    float _104 = _45.y;
    float _106 = fma(_94, vp_c4_1._m0[2].z, fma(_82, vp_c4_1._m0[2].y, _78 * vp_c4_1._m0[2].x));
    float _108 = _41.z;
    float _110 = _45.z;
    float _112 = fma(_94, vp_c4_1._m0[1].z, fma(_82, vp_c4_1._m0[1].y, _78 * vp_c4_1._m0[1].x));
    _47.w = _37.x;
    _49.w = _35.w;
    _51.x = fma(_74, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _51.w = fma(_76, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _51.z = fma(_74, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _51.y = fma(_76, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _53.w = _31.z;
    _55.y = _43.y + vp_c5_1._m0[25].y;
    _55.w = _43.w + vp_c5_1._m0[25].y;
    float _114 = fma(_90, vp_c4_1._m0[1].z, fma(_84, vp_c4_1._m0[1].y, _80 * vp_c4_1._m0[1].x));
    _55.z = _43.z + vp_c5_1._m0[25].x;
    _57.y = fma(_92, vp_c5_1._m0[112].y, _86 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    _59.x = fma(_110, vp_c4_1._m0[0].z, fma(_104, vp_c4_1._m0[0].y, _96 * vp_c4_1._m0[0].x));
    float _116 = fma(_90, vp_c4_1._m0[2].z, fma(_84, vp_c4_1._m0[2].y, _80 * vp_c4_1._m0[2].x));
    _59.y = fma(_110, vp_c4_1._m0[1].z, fma(_104, vp_c4_1._m0[1].y, _96 * vp_c4_1._m0[1].x));
    _59.z = fma(_110, vp_c4_1._m0[2].z, fma(_104, vp_c4_1._m0[2].y, _96 * vp_c4_1._m0[2].x));
    float _118 = fma(_108, vp_c4_1._m0[0].z, fma(_98, vp_c4_1._m0[0].y, _88 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    float _120 = fma(_108, vp_c4_1._m0[1].z, fma(_98, vp_c4_1._m0[1].y, _88 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _61.x = _118;
    _61.y = _120;
    float _122 = inversesqrt(fma(_116, _116, fma(_114, _114, _100 * _100)));
    float _124 = fma(_108, vp_c4_1._m0[2].z, fma(_98, vp_c4_1._m0[2].y, _88 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    float _126 = inversesqrt(fma(_106, _106, fma(_112, _112, _102 * _102)));
    _61.z = _124;
    _63.y = _120 + (-vp_c3_1._m0[12].w);
    _63.z = _124 + (-vp_c3_1._m0[13].w);
    _63.x = _118 + (-vp_c3_1._m0[11].w);
    _65.x = _102 * _126;
    _65.y = _112 * _126;
    _49.x = _100 * _122;
    _65.z = _106 * _126;
    _49.y = _114 * _122;
    float _128 = fma(_124, vp_c3_1._m0[0].z, fma(_120, vp_c3_1._m0[0].y, _118 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _130 = fma(_124, vp_c3_1._m0[1].z, fma(_120, vp_c3_1._m0[1].y, _118 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _132 = fma(_124, vp_c3_1._m0[2].z, fma(_120, vp_c3_1._m0[2].y, _118 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _61.w = _132;
    _55.x = _43.x + vp_c5_1._m0[25].x;
    _57.x = fma(_92, vp_c5_1._m0[112].x, _86 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _49.z = _116 * _122;
    _53.y = fma(_124, vp_c3_1._m0[36].z, fma(_120, vp_c3_1._m0[36].y, _118 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _53.z = fma(_124, vp_c3_1._m0[37].z, fma(_120, vp_c3_1._m0[37].y, _118 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _53.x = fma(_124, vp_c3_1._m0[35].z, fma(_120, vp_c3_1._m0[35].y, _118 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _134 = fma(_132, vp_c3_1._m0[8].z, fma(_130, vp_c3_1._m0[8].y, _128 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_132, vp_c3_1._m0[9].z, fma(_130, vp_c3_1._m0[9].y, _128 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _136 = fma(_132, vp_c3_1._m0[7].z, fma(_130, vp_c3_1._m0[7].y, _128 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _134;
    float _138 = fma(_132, vp_c3_1._m0[10].z, fma(_130, vp_c3_1._m0[10].y, _128 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _67.y = _134;
    gl_Position.x = _136;
    _67.x = _136;
    gl_Position.w = _138;
    _67.w = _138;
}


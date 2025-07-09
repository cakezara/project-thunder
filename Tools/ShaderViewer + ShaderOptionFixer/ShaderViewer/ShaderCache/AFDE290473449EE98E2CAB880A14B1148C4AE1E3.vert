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
layout(location = 14) in vec4 _41;
layout(location = 0) in vec4 _43;
layout(location = 13) in vec4 _45;
layout(location = 2) out vec4 _47;
layout(location = 10) out vec4 _49;
layout(location = 7) out vec4 _51;
layout(location = 6) out vec4 _53;
layout(location = 9) out vec4 _55;
layout(location = 3) out vec4 _57;
layout(location = 4) out vec4 _59;
layout(location = 1) out vec4 _61;
layout(location = 0) out vec4 _63;
layout(location = 5) out vec4 _65;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _72 = _31.x;
    float _74 = _33.x;
    float _76 = _33.y;
    float _78 = _35.x;
    float _80 = _39.y;
    float _82 = _39.x;
    float _84 = _31.y;
    float _86 = _43.x;
    float _88 = _35.y;
    float _90 = _45.x;
    float _92 = _43.y;
    float _94 = _45.y;
    float _96 = _43.z;
    float _98 = _33.z;
    float _100 = _35.z;
    float _102 = _45.z;
    _47.w = _35.w;
    _49.z = fma(_72, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    float _104 = fma(_98, vp_c4_1._m0[0].z, fma(_76, vp_c4_1._m0[0].y, _74 * vp_c4_1._m0[0].x));
    _51.w = _37.x;
    _49.x = fma(_72, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _49.w = fma(_84, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _49.y = fma(_84, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _53.x = _41.x + vp_c5_1._m0[25].x;
    _53.z = _41.z + vp_c5_1._m0[25].x;
    float _106 = fma(_98, vp_c4_1._m0[2].z, fma(_76, vp_c4_1._m0[2].y, _74 * vp_c4_1._m0[2].x));
    _55.x = fma(_102, vp_c4_1._m0[0].z, fma(_94, vp_c4_1._m0[0].y, _90 * vp_c4_1._m0[0].x));
    float _108 = fma(_96, vp_c4_1._m0[0].z, fma(_92, vp_c4_1._m0[0].y, _86 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _57.x = _108;
    _55.y = fma(_102, vp_c4_1._m0[1].z, fma(_94, vp_c4_1._m0[1].y, _90 * vp_c4_1._m0[1].x));
    float _110 = fma(_98, vp_c4_1._m0[1].z, fma(_76, vp_c4_1._m0[1].y, _74 * vp_c4_1._m0[1].x));
    _55.z = fma(_102, vp_c4_1._m0[2].z, fma(_94, vp_c4_1._m0[2].y, _90 * vp_c4_1._m0[2].x));
    float _112 = fma(_100, vp_c4_1._m0[0].z, fma(_88, vp_c4_1._m0[0].y, _78 * vp_c4_1._m0[0].x));
    float _114 = fma(_100, vp_c4_1._m0[2].z, fma(_88, vp_c4_1._m0[2].y, _78 * vp_c4_1._m0[2].x));
    float _116 = fma(_100, vp_c4_1._m0[1].z, fma(_88, vp_c4_1._m0[1].y, _78 * vp_c4_1._m0[1].x));
    float _118 = fma(_96, vp_c4_1._m0[1].z, fma(_92, vp_c4_1._m0[1].y, _86 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _57.y = _118;
    _59.x = _108 + (-vp_c3_1._m0[11].w);
    float _120 = fma(_96, vp_c4_1._m0[2].z, fma(_92, vp_c4_1._m0[2].y, _86 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _57.z = _120;
    float _122 = inversesqrt(fma(_106, _106, fma(_110, _110, _104 * _104)));
    _59.y = _118 + (-vp_c3_1._m0[12].w);
    _53.w = _41.w + vp_c5_1._m0[25].y;
    _61.x = _104 * _122;
    float _124 = fma(_120, vp_c3_1._m0[0].z, fma(_118, vp_c3_1._m0[0].y, _108 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _61.y = _110 * _122;
    float _126 = fma(_120, vp_c3_1._m0[1].z, fma(_118, vp_c3_1._m0[1].y, _108 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _61.z = _106 * _122;
    float _128 = inversesqrt(fma(_114, _114, fma(_116, _116, _112 * _112)));
    float _130 = fma(_120, vp_c3_1._m0[2].z, fma(_118, vp_c3_1._m0[2].y, _108 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _57.w = _130;
    _53.y = _41.y + vp_c5_1._m0[25].y;
    _63.x = fma(_82, vp_c5_1._m0[112].x, _80 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _63.y = fma(_82, vp_c5_1._m0[112].y, _80 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    _59.z = _120 + (-vp_c3_1._m0[13].w);
    _47.x = _112 * _128;
    _47.y = _116 * _128;
    _47.z = _114 * _128;
    float _132 = fma(_130, vp_c3_1._m0[8].z, fma(_126, vp_c3_1._m0[8].y, _124 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_130, vp_c3_1._m0[9].z, fma(_126, vp_c3_1._m0[9].y, _124 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _134 = fma(_130, vp_c3_1._m0[7].z, fma(_126, vp_c3_1._m0[7].y, _124 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _132;
    float _136 = fma(_130, vp_c3_1._m0[10].z, fma(_126, vp_c3_1._m0[10].y, _124 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _65.y = _132;
    gl_Position.x = _134;
    _65.x = _134;
    gl_Position.w = _136;
    _65.w = _136;
}


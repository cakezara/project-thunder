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
layout(location = 15) in vec4 _39;
layout(location = 13) in vec4 _41;
layout(location = 14) in vec4 _43;
layout(location = 0) in vec4 _45;
layout(location = 7) out vec4 _47;
layout(location = 2) out vec4 _49;
layout(location = 10) out vec4 _51;
layout(location = 0) out vec4 _53;
layout(location = 6) out vec4 _55;
layout(location = 9) out vec4 _57;
layout(location = 3) out vec4 _59;
layout(location = 4) out vec4 _61;
layout(location = 1) out vec4 _63;
layout(location = 8) out vec4 _65;
layout(location = 5) out vec4 _67;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _74 = _31.y;
    float _76 = _33.x;
    float _78 = _35.x;
    float _80 = _31.x;
    float _82 = _37.y;
    float _84 = _33.y;
    float _86 = _35.y;
    float _88 = _41.x;
    float _90 = _37.x;
    float _92 = _45.x;
    float _94 = _41.y;
    float _96 = _35.z;
    float _98 = _45.y;
    float _100 = _33.z;
    float _102 = _41.z;
    float _104 = _45.z;
    _47.w = _39.x;
    _49.w = _35.w;
    _51.z = fma(_80, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _51.x = fma(_80, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _51.w = fma(_74, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _51.y = fma(_74, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _53.y = fma(_90, vp_c5_1._m0[112].y, _82 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    _55.y = _43.y + vp_c5_1._m0[25].y;
    _53.x = fma(_90, vp_c5_1._m0[112].x, _82 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _55.z = _43.z + vp_c5_1._m0[25].x;
    float _106 = fma(_96, vp_c4_1._m0[0].z, fma(_86, vp_c4_1._m0[0].y, _78 * vp_c4_1._m0[0].x));
    _55.w = _43.w + vp_c5_1._m0[25].y;
    float _108 = fma(_100, vp_c4_1._m0[0].z, fma(_84, vp_c4_1._m0[0].y, _76 * vp_c4_1._m0[0].x));
    _57.x = fma(_102, vp_c4_1._m0[0].z, fma(_94, vp_c4_1._m0[0].y, _88 * vp_c4_1._m0[0].x));
    _57.y = fma(_102, vp_c4_1._m0[1].z, fma(_94, vp_c4_1._m0[1].y, _88 * vp_c4_1._m0[1].x));
    float _110 = fma(_96, vp_c4_1._m0[1].z, fma(_86, vp_c4_1._m0[1].y, _78 * vp_c4_1._m0[1].x));
    _57.z = fma(_102, vp_c4_1._m0[2].z, fma(_94, vp_c4_1._m0[2].y, _88 * vp_c4_1._m0[2].x));
    float _112 = fma(_100, vp_c4_1._m0[2].z, fma(_84, vp_c4_1._m0[2].y, _76 * vp_c4_1._m0[2].x));
    float _114 = fma(_100, vp_c4_1._m0[1].z, fma(_84, vp_c4_1._m0[1].y, _76 * vp_c4_1._m0[1].x));
    float _116 = fma(_96, vp_c4_1._m0[2].z, fma(_86, vp_c4_1._m0[2].y, _78 * vp_c4_1._m0[2].x));
    float _118 = fma(_104, vp_c4_1._m0[0].z, fma(_98, vp_c4_1._m0[0].y, _92 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    float _120 = fma(_104, vp_c4_1._m0[2].z, fma(_98, vp_c4_1._m0[2].y, _92 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _59.x = _118;
    float _122 = fma(_104, vp_c4_1._m0[1].z, fma(_98, vp_c4_1._m0[1].y, _92 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _59.z = _120;
    _59.y = _122;
    float _124 = inversesqrt(fma(_116, _116, fma(_110, _110, _106 * _106)));
    float _126 = inversesqrt(fma(_112, _112, fma(_114, _114, _108 * _108)));
    _61.z = _120 + (-vp_c3_1._m0[13].w);
    _61.y = _122 + (-vp_c3_1._m0[12].w);
    _61.x = _118 + (-vp_c3_1._m0[11].w);
    _49.x = _106 * _124;
    _63.x = _108 * _126;
    _63.y = _114 * _126;
    _63.z = _112 * _126;
    _49.y = _110 * _124;
    float _128 = fma(_120, vp_c3_1._m0[0].z, fma(_122, vp_c3_1._m0[0].y, _118 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _130 = fma(_120, vp_c3_1._m0[1].z, fma(_122, vp_c3_1._m0[1].y, _118 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _65.y = fma(_120, vp_c3_1._m0[36].z, fma(_122, vp_c3_1._m0[36].y, _118 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _132 = fma(_120, vp_c3_1._m0[2].z, fma(_122, vp_c3_1._m0[2].y, _118 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _59.w = _132;
    _55.x = _43.x + vp_c5_1._m0[25].x;
    _49.z = _116 * _124;
    _65.z = fma(_120, vp_c3_1._m0[37].z, fma(_122, vp_c3_1._m0[37].y, _118 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _65.x = fma(_120, vp_c3_1._m0[35].z, fma(_122, vp_c3_1._m0[35].y, _118 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
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


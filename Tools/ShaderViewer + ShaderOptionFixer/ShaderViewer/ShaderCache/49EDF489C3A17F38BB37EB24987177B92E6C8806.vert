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
layout(location = 14) in vec4 _37;
layout(location = 13) in vec4 _39;
layout(location = 0) in vec4 _41;
layout(location = 15) in vec4 _43;
layout(location = 8) in vec4 _45;
layout(location = 12) in vec4 _47;
layout(location = 11) out vec4 _49;
layout(location = 3) out vec4 _51;
layout(location = 8) out vec4 _53;
layout(location = 7) out vec4 _55;
layout(location = 2) out vec4 _57;
layout(location = 10) out vec4 _59;
layout(location = 4) out vec4 _61;
layout(location = 5) out vec4 _63;
layout(location = 1) out vec4 _65;
layout(location = 9) out vec4 _67;
layout(location = 0) out vec4 _69;
layout(location = 6) out vec4 _71;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _78 = _31.x;
    float _80 = _33.x;
    float _82 = _33.y;
    float _84 = _35.x;
    float _86 = _31.y;
    float _88 = _33.z;
    float _90 = _35.y;
    float _92 = _39.x;
    float _94 = _41.x;
    float _96 = _45.y;
    float _98 = fma(_88, vp_c4_1._m0[0].z, fma(_82, vp_c4_1._m0[0].y, _80 * vp_c4_1._m0[0].x));
    float _100 = fma(_88, vp_c4_1._m0[2].z, fma(_82, vp_c4_1._m0[2].y, _80 * vp_c4_1._m0[2].x));
    float _102 = _39.y;
    float _104 = fma(_88, vp_c4_1._m0[1].z, fma(_82, vp_c4_1._m0[1].y, _80 * vp_c4_1._m0[1].x));
    float _106 = _41.y;
    float _108 = _41.z;
    float _110 = _35.z;
    float _112 = _45.x;
    float _114 = _39.z;
    _49.z = fma(_78, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _51.w = _35.w;
    _49.x = fma(_78, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _49.w = fma(_86, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _49.y = fma(_86, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _53.w = _43.x;
    _55.x = _37.x + vp_c5_1._m0[25].x;
    _55.y = _37.y + vp_c5_1._m0[25].y;
    _55.z = _37.z + vp_c5_1._m0[25].x;
    _55.w = _37.w + vp_c5_1._m0[25].y;
    _57.w = clamp(_47.w * vp_c5_1._m0[0].x, 0.0, 1.0);
    _59.z = fma(_114, vp_c4_1._m0[2].z, fma(_102, vp_c4_1._m0[2].y, _92 * vp_c4_1._m0[2].x));
    _59.x = fma(_114, vp_c4_1._m0[0].z, fma(_102, vp_c4_1._m0[0].y, _92 * vp_c4_1._m0[0].x));
    float _116 = inversesqrt(fma(_100, _100, fma(_104, _104, _98 * _98)));
    _59.y = fma(_114, vp_c4_1._m0[1].z, fma(_102, vp_c4_1._m0[1].y, _92 * vp_c4_1._m0[1].x));
    float _118 = fma(_108, vp_c4_1._m0[0].z, fma(_106, vp_c4_1._m0[0].y, _94 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    float _120 = fma(_108, vp_c4_1._m0[1].z, fma(_106, vp_c4_1._m0[1].y, _94 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _61.x = _118;
    _61.y = _120;
    float _122 = fma(_110, vp_c4_1._m0[2].z, fma(_90, vp_c4_1._m0[2].y, _84 * vp_c4_1._m0[2].x));
    float _124 = fma(_110, vp_c4_1._m0[0].z, fma(_90, vp_c4_1._m0[0].y, _84 * vp_c4_1._m0[0].x));
    _63.y = _120 + (-vp_c3_1._m0[12].w);
    float _126 = fma(_110, vp_c4_1._m0[1].z, fma(_90, vp_c4_1._m0[1].y, _84 * vp_c4_1._m0[1].x));
    float _128 = fma(_108, vp_c4_1._m0[2].z, fma(_106, vp_c4_1._m0[2].y, _94 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _61.z = _128;
    _65.y = _104 * _116;
    _63.x = _118 + (-vp_c3_1._m0[11].w);
    _65.x = _98 * _116;
    _63.z = _128 + (-vp_c3_1._m0[13].w);
    _65.z = _100 * _116;
    float _130 = fma(_128, vp_c3_1._m0[0].z, fma(_120, vp_c3_1._m0[0].y, _118 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _132 = fma(_128, vp_c3_1._m0[1].z, fma(_120, vp_c3_1._m0[1].y, _118 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _67.y = fma(_128, vp_c3_1._m0[36].z, fma(_120, vp_c3_1._m0[36].y, _118 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _134 = inversesqrt(fma(_122, _122, fma(_126, _126, _124 * _124)));
    float _136 = fma(_128, vp_c3_1._m0[2].z, fma(_120, vp_c3_1._m0[2].y, _118 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _61.w = _136;
    _69.x = fma(_112, vp_c5_1._m0[112].x, _96 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _69.y = fma(_112, vp_c5_1._m0[112].y, _96 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    _51.x = _124 * _134;
    _51.y = _126 * _134;
    _51.z = _122 * _134;
    _67.z = fma(_128, vp_c3_1._m0[37].z, fma(_120, vp_c3_1._m0[37].y, _118 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _67.x = fma(_128, vp_c3_1._m0[35].z, fma(_120, vp_c3_1._m0[35].y, _118 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _138 = fma(_136, vp_c3_1._m0[8].z, fma(_132, vp_c3_1._m0[8].y, _130 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_136, vp_c3_1._m0[9].z, fma(_132, vp_c3_1._m0[9].y, _130 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _140 = fma(_136, vp_c3_1._m0[7].z, fma(_132, vp_c3_1._m0[7].y, _130 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _138;
    float _142 = fma(_136, vp_c3_1._m0[10].z, fma(_132, vp_c3_1._m0[10].y, _130 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _71.y = _138;
    gl_Position.x = _140;
    _71.x = _140;
    gl_Position.w = _142;
    _71.w = _142;
}


#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 5, std140) uniform vp_c4
{
    vec4 _m0[4096];
} vp_c4_1;

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(binding = 7, std140) uniform vp_c6
{
    vec4 _m0[4096];
} vp_c6_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 0) in vec4 _33;
layout(location = 2) in vec4 _35;
layout(location = 9) in vec4 _37;
layout(location = 1) in vec4 _39;
layout(location = 8) in vec4 _41;
layout(location = 12) in vec4 _43;
layout(location = 7) out vec4 _45;
layout(location = 2) out vec4 _47;
layout(location = 3) out vec4 _49;
layout(location = 1) out vec4 _51;
layout(location = 0) out vec4 _53;
layout(location = 4) out vec4 _55;
layout(location = 6) out vec4 _57;
layout(location = 5) out vec4 _59;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _66 = _33.y;
    float _68 = _33.x;
    float _70 = _33.z;
    float _72 = _35.x;
    float _74 = _37.x;
    float _76 = _37.y;
    float _78 = _39.x;
    float _80 = _35.y;
    float _82 = _39.y;
    float _84 = _35.z;
    float _86 = _41.y;
    float _88 = fma((_66 + _68) + _70, vp_c5_1._m0[86].y, vp_c6_1._m0[20].w) * vp_c5_1._m0[86].x;
    float _90 = _39.z;
    float _92 = fma((sin(_88 * 0.02999999932944774627685546875) + vp_c5_1._m0[89].x) * vp_c5_1._m0[86].z, 3.0, fma(sin(_88) + vp_c5_1._m0[89].x, vp_c5_1._m0[86].z, ((sin(_88 * 0.2599999904632568359375) + vp_c5_1._m0[89].x) * 2.0) * vp_c5_1._m0[86].z));
    float _94 = _43.x;
    float _96 = _41.x;
    _45.z = fma(_74, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _45.y = fma(_76, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _45.x = fma(_74, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    float _98 = fma(_90, vp_c4_1._m0[0].z, fma(_82, vp_c4_1._m0[0].y, _78 * vp_c4_1._m0[0].x));
    _45.w = fma(_76, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _47.w = _35.w;
    float _100 = fma(_90, vp_c4_1._m0[2].z, fma(_82, vp_c4_1._m0[2].y, _78 * vp_c4_1._m0[2].x));
    float _102 = fma(_90, vp_c4_1._m0[1].z, fma(_82, vp_c4_1._m0[1].y, _78 * vp_c4_1._m0[1].x));
    float _104 = 0.0 * _92;
    float _106 = fma(_84, vp_c4_1._m0[0].z, fma(_80, vp_c4_1._m0[0].y, _72 * vp_c4_1._m0[0].x));
    float _108 = fma(_84, vp_c4_1._m0[1].z, fma(_80, vp_c4_1._m0[1].y, _72 * vp_c4_1._m0[1].x));
    float _110 = fma(_84, vp_c4_1._m0[2].z, fma(_80, vp_c4_1._m0[2].y, _72 * vp_c4_1._m0[2].x));
    float _112 = fma(_104, _94, ((_92 * _78) * vp_c5_1._m0[89].z) * _94) + _68;
    float _114 = fma(_92 * vp_c5_1._m0[89].y, _94, ((_92 * _82) * vp_c5_1._m0[89].z) * _94) + _66;
    float _116 = inversesqrt(fma(_110, _110, fma(_108, _108, _106 * _106)));
    float _118 = fma(_104, _94, ((_92 * _90) * vp_c5_1._m0[89].z) * _94) + _70;
    float _120 = inversesqrt(fma(_100, _100, fma(_102, _102, _98 * _98)));
    _47.x = _106 * _116;
    float _122 = fma(_118, vp_c4_1._m0[0].z, fma(_114, vp_c4_1._m0[0].y, _112 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _49.x = _122;
    float _124 = fma(_118, vp_c4_1._m0[1].z, fma(_114, vp_c4_1._m0[1].y, _112 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _49.y = _124;
    _51.x = _98 * _120;
    _51.y = _102 * _120;
    float _126 = fma(_118, vp_c4_1._m0[2].z, fma(_114, vp_c4_1._m0[2].y, _112 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _51.z = _100 * _120;
    _49.z = _126;
    _53.y = fma(_96, vp_c5_1._m0[112].y, _86 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    float _128 = fma(_126, vp_c3_1._m0[0].z, fma(_124, vp_c3_1._m0[0].y, _122 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _55.x = _122 + (-vp_c3_1._m0[11].w);
    _55.y = _124 + (-vp_c3_1._m0[12].w);
    float _130 = fma(_126, vp_c3_1._m0[1].z, fma(_124, vp_c3_1._m0[1].y, _122 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _132 = fma(_126, vp_c3_1._m0[2].z, fma(_124, vp_c3_1._m0[2].y, _122 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _49.w = _132;
    _53.x = fma(_96, vp_c5_1._m0[112].x, _86 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _47.y = _108 * _116;
    _47.z = _110 * _116;
    _55.z = _126 + (-vp_c3_1._m0[13].w);
    _57.y = fma(_126, vp_c3_1._m0[36].z, fma(_124, vp_c3_1._m0[36].y, _122 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _57.z = fma(_126, vp_c3_1._m0[37].z, fma(_124, vp_c3_1._m0[37].y, _122 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _57.x = fma(_126, vp_c3_1._m0[35].z, fma(_124, vp_c3_1._m0[35].y, _122 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _134 = fma(_132, vp_c3_1._m0[8].z, fma(_130, vp_c3_1._m0[8].y, _128 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_132, vp_c3_1._m0[9].z, fma(_130, vp_c3_1._m0[9].y, _128 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _136 = fma(_132, vp_c3_1._m0[7].z, fma(_130, vp_c3_1._m0[7].y, _128 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _134;
    float _138 = fma(_132, vp_c3_1._m0[10].z, fma(_130, vp_c3_1._m0[10].y, _128 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _59.y = _134;
    gl_Position.x = _136;
    _59.x = _136;
    gl_Position.w = _138;
    _59.w = _138;
}


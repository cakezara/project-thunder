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
layout(location = 1) in vec4 _35;
layout(location = 12) in vec4 _37;
layout(location = 9) in vec4 _39;
layout(location = 5) out vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 1) out vec4 _45;
layout(location = 2) out vec4 _47;
layout(location = 4) out vec4 _49;
layout(location = 3) out vec4 _51;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _58 = _33.y;
    float _60 = _33.x;
    float _62 = _33.z;
    float _64 = _35.x;
    float _66 = _35.y;
    float _68 = _35.z;
    float _70 = _37.x;
    float _72 = _39.x;
    float _74 = fma((_58 + _60) + _62, vp_c5_1._m0[86].y, vp_c6_1._m0[20].w) * vp_c5_1._m0[86].x;
    float _76 = fma(sin(_74 * 0.60000002384185791015625) * vp_c5_1._m0[86].z, 2.0, fma(sin(_74), vp_c5_1._m0[86].z, (sin(_74 * 0.4000000059604644775390625) * vp_c5_1._m0[86].z) * 1.5));
    float _78 = fma(_68, vp_c4_1._m0[0].z, fma(_66, vp_c4_1._m0[0].y, _64 * vp_c4_1._m0[0].x));
    float _80 = _39.y;
    float _82 = fma(_68, vp_c4_1._m0[1].z, fma(_66, vp_c4_1._m0[1].y, _64 * vp_c4_1._m0[1].x));
    float _84 = fma(_68, vp_c4_1._m0[2].z, fma(_66, vp_c4_1._m0[2].y, _64 * vp_c4_1._m0[2].x));
    float _86 = fma(_76 * vp_c5_1._m0[89].x, _70, _60);
    _41.z = fma(_72, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    float _88 = fma(_76 * vp_c5_1._m0[89].y, _70, _58);
    float _90 = fma(_76 * vp_c5_1._m0[89].z, _70, _62);
    _41.x = fma(_72, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    float _92 = inversesqrt(fma(_84, _84, fma(_82, _82, _78 * _78)));
    _41.w = fma(_80, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _41.y = fma(_80, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _43.y = _82 * _92;
    float _94 = fma(_90, vp_c4_1._m0[0].z, fma(_88, vp_c4_1._m0[0].y, _86 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _43.x = _78 * _92;
    float _96 = fma(_90, vp_c4_1._m0[1].z, fma(_88, vp_c4_1._m0[1].y, _86 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _45.x = _94;
    float _98 = fma(_90, vp_c4_1._m0[2].z, fma(_88, vp_c4_1._m0[2].y, _86 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _45.y = _96;
    _45.z = _98;
    _43.z = _84 * _92;
    _47.x = _94 + (-vp_c3_1._m0[11].w);
    _47.y = _96 + (-vp_c3_1._m0[12].w);
    float _100 = fma(_98, vp_c3_1._m0[0].z, fma(_96, vp_c3_1._m0[0].y, _94 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _102 = fma(_98, vp_c3_1._m0[1].z, fma(_96, vp_c3_1._m0[1].y, _94 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _104 = fma(_98, vp_c3_1._m0[2].z, fma(_96, vp_c3_1._m0[2].y, _94 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _45.w = _104;
    _47.z = _98 + (-vp_c3_1._m0[13].w);
    _49.z = fma(_98, vp_c3_1._m0[37].z, fma(_96, vp_c3_1._m0[37].y, _94 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _49.y = fma(_98, vp_c3_1._m0[36].z, fma(_96, vp_c3_1._m0[36].y, _94 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _49.x = fma(_98, vp_c3_1._m0[35].z, fma(_96, vp_c3_1._m0[35].y, _94 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _106 = fma(_104, vp_c3_1._m0[8].z, fma(_102, vp_c3_1._m0[8].y, _100 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_104, vp_c3_1._m0[9].z, fma(_102, vp_c3_1._m0[9].y, _100 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _108 = fma(_104, vp_c3_1._m0[7].z, fma(_102, vp_c3_1._m0[7].y, _100 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _106;
    float _110 = fma(_104, vp_c3_1._m0[10].z, fma(_102, vp_c3_1._m0[10].y, _100 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _51.y = _106;
    gl_Position.x = _108;
    _51.x = _108;
    gl_Position.w = _110;
    _51.w = _110;
}


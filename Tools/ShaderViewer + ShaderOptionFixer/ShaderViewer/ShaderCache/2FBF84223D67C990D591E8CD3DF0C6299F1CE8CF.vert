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
layout(location = 0) in vec4 _35;
layout(location = 13) in vec4 _37;
layout(location = 14) in vec4 _39;
layout(location = 15) in vec4 _41;
layout(location = 8) out vec4 _43;
layout(location = 5) out vec4 _45;
layout(location = 4) out vec4 _47;
layout(location = 1) out vec4 _49;
layout(location = 7) out vec4 _51;
layout(location = 0) out vec4 _53;
layout(location = 2) out vec4 _55;
layout(location = 6) out vec4 _57;
layout(location = 3) out vec4 _59;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _66 = _31.x;
    float _68 = _33.x;
    float _70 = _31.y;
    float _72 = _33.y;
    float _74 = _35.x;
    float _76 = _37.x;
    float _78 = _33.z;
    float _80 = _35.y;
    float _82 = _37.y;
    float _84 = _35.z;
    float _86 = _37.z;
    _43.z = fma(_66, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _43.x = fma(_66, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _45.w = _41.x;
    _43.w = fma(_70, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _43.y = fma(_70, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _47.y = _39.y + vp_c5_1._m0[25].y;
    float _88 = fma(_78, vp_c4_1._m0[0].z, fma(_72, vp_c4_1._m0[0].y, _68 * vp_c4_1._m0[0].x));
    _47.z = _39.z + vp_c5_1._m0[25].x;
    _47.w = _39.w + vp_c5_1._m0[25].y;
    float _90 = fma(_78, vp_c4_1._m0[1].z, fma(_72, vp_c4_1._m0[1].y, _68 * vp_c4_1._m0[1].x));
    float _92 = fma(_78, vp_c4_1._m0[2].z, fma(_72, vp_c4_1._m0[2].y, _68 * vp_c4_1._m0[2].x));
    float _94 = fma(_84, vp_c4_1._m0[0].z, fma(_80, vp_c4_1._m0[0].y, _74 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _49.x = _94;
    _51.x = fma(_86, vp_c4_1._m0[0].z, fma(_82, vp_c4_1._m0[0].y, _76 * vp_c4_1._m0[0].x));
    float _96 = inversesqrt(fma(_92, _92, fma(_90, _90, _88 * _88)));
    _51.y = fma(_86, vp_c4_1._m0[1].z, fma(_82, vp_c4_1._m0[1].y, _76 * vp_c4_1._m0[1].x));
    _51.z = fma(_86, vp_c4_1._m0[2].z, fma(_82, vp_c4_1._m0[2].y, _76 * vp_c4_1._m0[2].x));
    float _98 = fma(_84, vp_c4_1._m0[1].z, fma(_80, vp_c4_1._m0[1].y, _74 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _49.y = _98;
    float _100 = fma(_84, vp_c4_1._m0[2].z, fma(_80, vp_c4_1._m0[2].y, _74 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _49.z = _100;
    _53.x = _88 * _96;
    _47.x = _39.x + vp_c5_1._m0[25].x;
    _53.y = _90 * _96;
    _53.z = _92 * _96;
    _55.x = _94 + (-vp_c3_1._m0[11].w);
    float _102 = fma(_100, vp_c3_1._m0[0].z, fma(_98, vp_c3_1._m0[0].y, _94 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _55.z = _100 + (-vp_c3_1._m0[13].w);
    _55.y = _98 + (-vp_c3_1._m0[12].w);
    float _104 = fma(_100, vp_c3_1._m0[1].z, fma(_98, vp_c3_1._m0[1].y, _94 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _106 = fma(_100, vp_c3_1._m0[2].z, fma(_98, vp_c3_1._m0[2].y, _94 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _49.w = _106;
    _57.y = fma(_100, vp_c3_1._m0[36].z, fma(_98, vp_c3_1._m0[36].y, _94 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _57.z = fma(_100, vp_c3_1._m0[37].z, fma(_98, vp_c3_1._m0[37].y, _94 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _57.x = fma(_100, vp_c3_1._m0[35].z, fma(_98, vp_c3_1._m0[35].y, _94 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _108 = fma(_106, vp_c3_1._m0[8].z, fma(_104, vp_c3_1._m0[8].y, _102 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_106, vp_c3_1._m0[9].z, fma(_104, vp_c3_1._m0[9].y, _102 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _110 = fma(_106, vp_c3_1._m0[7].z, fma(_104, vp_c3_1._m0[7].y, _102 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _108;
    float _112 = fma(_106, vp_c3_1._m0[10].z, fma(_104, vp_c3_1._m0[10].y, _102 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _59.y = _108;
    gl_Position.x = _110;
    _59.x = _110;
    gl_Position.w = _112;
    _59.w = _112;
}


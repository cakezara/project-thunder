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

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 1) in vec4 _31;
layout(location = 2) in vec4 _33;
layout(location = 8) in vec4 _35;
layout(location = 0) in vec4 _37;
layout(location = 2) out vec4 _39;
layout(location = 3) out vec4 _41;
layout(location = 4) out vec4 _43;
layout(location = 1) out vec4 _45;
layout(location = 6) out vec4 _47;
layout(location = 0) out vec4 _49;
layout(location = 5) out vec4 _51;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _58 = _31.x;
    float _60 = _33.x;
    float _62 = _31.y;
    float _64 = _33.y;
    float _66 = _35.y;
    float _68 = _37.x;
    float _70 = _31.z;
    float _72 = _35.x;
    float _74 = _37.y;
    float _76 = _33.z;
    float _78 = _37.z;
    float _80 = fma(_70, vp_c4_1._m0[0].z, fma(_62, vp_c4_1._m0[0].y, _58 * vp_c4_1._m0[0].x));
    _39.w = _33.w;
    float _82 = fma(_76, vp_c4_1._m0[0].z, fma(_64, vp_c4_1._m0[0].y, _60 * vp_c4_1._m0[0].x));
    float _84 = fma(_70, vp_c4_1._m0[1].z, fma(_62, vp_c4_1._m0[1].y, _58 * vp_c4_1._m0[1].x));
    float _86 = fma(_70, vp_c4_1._m0[2].z, fma(_62, vp_c4_1._m0[2].y, _58 * vp_c4_1._m0[2].x));
    float _88 = fma(_76, vp_c4_1._m0[1].z, fma(_64, vp_c4_1._m0[1].y, _60 * vp_c4_1._m0[1].x));
    float _90 = fma(_78, vp_c4_1._m0[1].z, fma(_74, vp_c4_1._m0[1].y, _68 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    float _92 = fma(_76, vp_c4_1._m0[2].z, fma(_64, vp_c4_1._m0[2].y, _60 * vp_c4_1._m0[2].x));
    _41.y = _90;
    float _94 = fma(_78, vp_c4_1._m0[2].z, fma(_74, vp_c4_1._m0[2].y, _68 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    float _96 = inversesqrt(fma(_86, _86, fma(_84, _84, _80 * _80)));
    float _98 = fma(_78, vp_c4_1._m0[0].z, fma(_74, vp_c4_1._m0[0].y, _68 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _41.z = _94;
    _41.x = _98;
    float _100 = inversesqrt(fma(_92, _92, fma(_88, _88, _82 * _82)));
    _43.y = _90 + (-vp_c3_1._m0[12].w);
    _43.x = _98 + (-vp_c3_1._m0[11].w);
    _45.x = _80 * _96;
    _43.z = _94 + (-vp_c3_1._m0[13].w);
    _45.y = _84 * _96;
    _39.x = _82 * _100;
    _45.z = _86 * _96;
    _39.y = _88 * _100;
    float _102 = fma(_94, vp_c3_1._m0[0].z, fma(_90, vp_c3_1._m0[0].y, _98 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _104 = fma(_94, vp_c3_1._m0[1].z, fma(_90, vp_c3_1._m0[1].y, _98 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _47.y = fma(_94, vp_c3_1._m0[36].z, fma(_90, vp_c3_1._m0[36].y, _98 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _106 = fma(_94, vp_c3_1._m0[2].z, fma(_90, vp_c3_1._m0[2].y, _98 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _41.w = _106;
    _49.x = fma(_72, vp_c5_1._m0[112].x, _66 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _49.y = fma(_72, vp_c5_1._m0[112].y, _66 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    _39.z = _92 * _100;
    _47.z = fma(_94, vp_c3_1._m0[37].z, fma(_90, vp_c3_1._m0[37].y, _98 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _47.x = fma(_94, vp_c3_1._m0[35].z, fma(_90, vp_c3_1._m0[35].y, _98 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _108 = fma(_106, vp_c3_1._m0[8].z, fma(_104, vp_c3_1._m0[8].y, _102 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_106, vp_c3_1._m0[9].z, fma(_104, vp_c3_1._m0[9].y, _102 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _110 = fma(_106, vp_c3_1._m0[7].z, fma(_104, vp_c3_1._m0[7].y, _102 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _108;
    float _112 = fma(_106, vp_c3_1._m0[10].z, fma(_104, vp_c3_1._m0[10].y, _102 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _51.y = _108;
    gl_Position.x = _110;
    _51.x = _110;
    gl_Position.w = _112;
    _51.w = _112;
}


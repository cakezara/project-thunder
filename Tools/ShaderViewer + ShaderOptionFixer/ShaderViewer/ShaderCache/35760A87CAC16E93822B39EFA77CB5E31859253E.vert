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
layout(location = 0) in vec4 _33;
layout(location = 9) in vec4 _35;
layout(location = 2) in vec4 _37;
layout(location = 8) in vec4 _39;
layout(location = 6) out vec4 _41;
layout(location = 2) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 4) out vec4 _47;
layout(location = 1) out vec4 _49;
layout(location = 0) out vec4 _51;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _58 = _31.x;
    float _60 = _31.y;
    float _62 = _33.x;
    float _64 = _35.x;
    float _66 = _37.x;
    float _68 = _35.y;
    float _70 = _33.y;
    float _72 = _37.y;
    float _74 = _33.z;
    float _76 = _39.y;
    float _78 = _31.z;
    float _80 = _37.z;
    float _82 = _39.x;
    _41.z = fma(_64, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _41.w = fma(_68, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _41.x = fma(_64, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _41.y = fma(_68, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _43.w = _37.w;
    float _84 = fma(_78, vp_c4_1._m0[0].z, fma(_60, vp_c4_1._m0[0].y, _58 * vp_c4_1._m0[0].x));
    float _86 = fma(_80, vp_c4_1._m0[0].z, fma(_72, vp_c4_1._m0[0].y, _66 * vp_c4_1._m0[0].x));
    float _88 = fma(_74, vp_c4_1._m0[0].z, fma(_70, vp_c4_1._m0[0].y, _62 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    float _90 = fma(_78, vp_c4_1._m0[2].z, fma(_60, vp_c4_1._m0[2].y, _58 * vp_c4_1._m0[2].x));
    _45.x = _88;
    float _92 = fma(_78, vp_c4_1._m0[1].z, fma(_60, vp_c4_1._m0[1].y, _58 * vp_c4_1._m0[1].x));
    float _94 = fma(_80, vp_c4_1._m0[2].z, fma(_72, vp_c4_1._m0[2].y, _66 * vp_c4_1._m0[2].x));
    float _96 = fma(_80, vp_c4_1._m0[1].z, fma(_72, vp_c4_1._m0[1].y, _66 * vp_c4_1._m0[1].x));
    float _98 = fma(_74, vp_c4_1._m0[1].z, fma(_70, vp_c4_1._m0[1].y, _62 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _47.x = _88 + (-vp_c3_1._m0[11].w);
    _45.y = _98;
    float _100 = fma(_74, vp_c4_1._m0[2].z, fma(_70, vp_c4_1._m0[2].y, _62 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _45.z = _100;
    float _102 = inversesqrt(fma(_90, _90, fma(_92, _92, _84 * _84)));
    float _104 = inversesqrt(fma(_94, _94, fma(_96, _96, _86 * _86)));
    _47.y = _98 + (-vp_c3_1._m0[12].w);
    _47.z = _100 + (-vp_c3_1._m0[13].w);
    float _106 = fma(_100, vp_c3_1._m0[0].z, fma(_98, vp_c3_1._m0[0].y, _88 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _49.x = _84 * _102;
    _49.y = _92 * _102;
    float _108 = fma(_100, vp_c3_1._m0[1].z, fma(_98, vp_c3_1._m0[1].y, _88 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _43.x = _86 * _104;
    _49.z = _90 * _102;
    float _110 = fma(_100, vp_c3_1._m0[2].z, fma(_98, vp_c3_1._m0[2].y, _88 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _51.x = fma(_82, vp_c5_1._m0[111].x, _76 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _51.y = fma(_82, vp_c5_1._m0[111].y, _76 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _43.y = _96 * _104;
    _43.z = _94 * _104;
    gl_Position.y = fma(_110, vp_c3_1._m0[8].z, fma(_108, vp_c3_1._m0[8].y, _106 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.w = fma(_110, vp_c3_1._m0[10].z, fma(_108, vp_c3_1._m0[10].y, _106 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_110, vp_c3_1._m0[9].z, fma(_108, vp_c3_1._m0[9].y, _106 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_110, vp_c3_1._m0[7].z, fma(_108, vp_c3_1._m0[7].y, _106 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


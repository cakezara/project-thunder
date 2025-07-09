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
layout(location = 0) in vec4 _33;
layout(location = 1) in vec4 _35;
layout(location = 6) out vec4 _37;
layout(location = 1) out vec4 _39;
layout(location = 2) out vec4 _41;
layout(location = 3) out vec4 _43;
layout(location = 0) out vec4 _45;
layout(location = 4) out vec4 _47;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _54 = _31.y;
    float _56 = _33.x;
    float _58 = _35.x;
    float _60 = _31.x;
    float _62 = _33.y;
    float _64 = _35.y;
    float _66 = _33.z;
    float _68 = _35.z;
    _37.y = fma(_54, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _37.w = fma(_54, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _37.z = fma(_60, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _39.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    _37.x = fma(_60, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    float _70 = fma(_68, vp_c4_1._m0[0].z, fma(_64, vp_c4_1._m0[0].y, _58 * vp_c4_1._m0[0].x));
    float _72 = fma(_66, vp_c4_1._m0[0].z, fma(_62, vp_c4_1._m0[0].y, _56 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _41.x = _72;
    float _74 = fma(_68, vp_c4_1._m0[1].z, fma(_64, vp_c4_1._m0[1].y, _58 * vp_c4_1._m0[1].x));
    float _76 = fma(_66, vp_c4_1._m0[1].z, fma(_62, vp_c4_1._m0[1].y, _56 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _41.y = _76;
    float _78 = fma(_68, vp_c4_1._m0[2].z, fma(_64, vp_c4_1._m0[2].y, _58 * vp_c4_1._m0[2].x));
    float _80 = fma(_66, vp_c4_1._m0[2].z, fma(_62, vp_c4_1._m0[2].y, _56 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _41.z = _80;
    float _82 = inversesqrt(fma(_78, _78, fma(_74, _74, _70 * _70)));
    _43.y = _76 + (-vp_c3_1._m0[12].w);
    _43.x = _72 + (-vp_c3_1._m0[11].w);
    _43.z = _80 + (-vp_c3_1._m0[13].w);
    float _84 = fma(_80, vp_c3_1._m0[0].z, fma(_76, vp_c3_1._m0[0].y, _72 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _45.x = _70 * _82;
    float _86 = fma(_80, vp_c3_1._m0[1].z, fma(_76, vp_c3_1._m0[1].y, _72 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _45.y = _74 * _82;
    _45.z = _78 * _82;
    float _88 = fma(_80, vp_c3_1._m0[2].z, fma(_76, vp_c3_1._m0[2].y, _72 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    float _90 = fma(_88, vp_c3_1._m0[8].z, fma(_86, vp_c3_1._m0[8].y, _84 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_88, vp_c3_1._m0[9].z, fma(_86, vp_c3_1._m0[9].y, _84 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _92 = fma(_88, vp_c3_1._m0[7].z, fma(_86, vp_c3_1._m0[7].y, _84 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _90;
    float _94 = fma(_88, vp_c3_1._m0[10].z, fma(_86, vp_c3_1._m0[10].y, _84 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _47.y = _90;
    gl_Position.x = _92;
    _47.x = _92;
    gl_Position.w = _94;
    _47.w = _94;
}


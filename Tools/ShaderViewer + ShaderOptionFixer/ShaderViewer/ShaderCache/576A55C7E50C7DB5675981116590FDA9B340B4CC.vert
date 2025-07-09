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

layout(location = 0) in vec4 _31;
layout(location = 1) in vec4 _33;
layout(location = 8) in vec4 _35;
layout(location = 2) out vec4 _37;
layout(location = 3) out vec4 _39;
layout(location = 0) out vec4 _41;
layout(location = 4) out vec4 _43;
layout(location = 1) out vec4 _45;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _52 = _31.x;
    float _54 = _33.x;
    float _56 = _31.y;
    float _58 = _33.y;
    float _60 = _31.z;
    float _62 = _35.y;
    float _64 = _33.z;
    float _66 = _35.x;
    _37.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    float _68 = fma(_60, vp_c4_1._m0[0].z, fma(_56, vp_c4_1._m0[0].y, _52 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    float _70 = fma(_64, vp_c4_1._m0[0].z, fma(_58, vp_c4_1._m0[0].y, _54 * vp_c4_1._m0[0].x));
    _39.x = _68;
    float _72 = fma(_64, vp_c4_1._m0[1].z, fma(_58, vp_c4_1._m0[1].y, _54 * vp_c4_1._m0[1].x));
    float _74 = fma(_60, vp_c4_1._m0[1].z, fma(_56, vp_c4_1._m0[1].y, _52 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _39.y = _74;
    float _76 = fma(_64, vp_c4_1._m0[2].z, fma(_58, vp_c4_1._m0[2].y, _54 * vp_c4_1._m0[2].x));
    float _78 = fma(_60, vp_c4_1._m0[2].z, fma(_56, vp_c4_1._m0[2].y, _52 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _41.x = fma(_66, vp_c5_1._m0[112].x, _62 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _39.z = _78;
    _41.y = fma(_66, vp_c5_1._m0[112].y, _62 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    float _80 = inversesqrt(fma(_76, _76, fma(_72, _72, _70 * _70)));
    _43.x = _68 + (-vp_c3_1._m0[11].w);
    float _82 = fma(_78, vp_c3_1._m0[0].z, fma(_74, vp_c3_1._m0[0].y, _68 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _43.y = _74 + (-vp_c3_1._m0[12].w);
    float _84 = fma(_78, vp_c3_1._m0[1].z, fma(_74, vp_c3_1._m0[1].y, _68 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _43.z = _78 + (-vp_c3_1._m0[13].w);
    _45.x = _70 * _80;
    _45.y = _72 * _80;
    float _86 = fma(_78, vp_c3_1._m0[2].z, fma(_74, vp_c3_1._m0[2].y, _68 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _45.z = _76 * _80;
    gl_Position.w = fma(_86, vp_c3_1._m0[10].z, fma(_84, vp_c3_1._m0[10].y, _82 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.y = fma(_86, vp_c3_1._m0[8].z, fma(_84, vp_c3_1._m0[8].y, _82 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_86, vp_c3_1._m0[9].z, fma(_84, vp_c3_1._m0[9].y, _82 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_86, vp_c3_1._m0[7].z, fma(_84, vp_c3_1._m0[7].y, _82 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


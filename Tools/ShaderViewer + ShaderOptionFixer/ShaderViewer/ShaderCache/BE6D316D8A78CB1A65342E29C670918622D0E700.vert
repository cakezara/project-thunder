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

layout(location = 0) in vec4 _31;
layout(location = 8) in vec4 _33;
layout(location = 9) in vec4 _35;
layout(location = 4) out vec4 _37;
layout(location = 1) out vec4 _39;
layout(location = 0) out vec4 _41;
layout(location = 3) out vec4 _43;
layout(location = 2) out vec4 _45;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _52 = _31.x;
    float _54 = _31.y;
    float _56 = _31.z;
    float _58 = _33.y;
    float _60 = _33.x;
    _37.x = fma(_35.x, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    float _62 = fma(_56, vp_c4_1._m0[0].z, fma(_54, vp_c4_1._m0[0].y, _52 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    float _64 = fma(_56, vp_c4_1._m0[1].z, fma(_54, vp_c4_1._m0[1].y, _52 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _39.x = _62;
    _39.y = _64;
    float _66 = fma(_56, vp_c4_1._m0[2].z, fma(_54, vp_c4_1._m0[2].y, _52 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _39.z = _66;
    _37.y = fma(_35.y, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _41.x = fma(_60, vp_c5_1._m0[112].x, _58 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    float _68 = fma(_66, vp_c3_1._m0[0].z, fma(_64, vp_c3_1._m0[0].y, _62 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _41.y = fma(_60, vp_c5_1._m0[112].y, _58 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    _43.z = fma(_66, vp_c3_1._m0[37].z, fma(_64, vp_c3_1._m0[37].y, _62 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _70 = fma(_66, vp_c3_1._m0[1].z, fma(_64, vp_c3_1._m0[1].y, _62 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _72 = fma(_66, vp_c3_1._m0[2].z, fma(_64, vp_c3_1._m0[2].y, _62 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _39.w = _72;
    _43.y = fma(_66, vp_c3_1._m0[36].z, fma(_64, vp_c3_1._m0[36].y, _62 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _43.x = fma(_66, vp_c3_1._m0[35].z, fma(_64, vp_c3_1._m0[35].y, _62 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _74 = fma(_72, vp_c3_1._m0[10].z, fma(_70, vp_c3_1._m0[10].y, _68 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_72, vp_c3_1._m0[9].z, fma(_70, vp_c3_1._m0[9].y, _68 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _76 = fma(_72, vp_c3_1._m0[7].z, fma(_70, vp_c3_1._m0[7].y, _68 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.w = _74;
    float _78 = fma(_72, vp_c3_1._m0[8].z, fma(_70, vp_c3_1._m0[8].y, _68 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    _45.w = _74;
    gl_Position.x = _76;
    _45.x = _76;
    gl_Position.y = _78;
    _45.y = _78;
}


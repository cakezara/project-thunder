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
layout(location = 9) in vec4 _33;
layout(location = 8) in vec4 _35;
layout(location = 1) out vec4 _37;
layout(location = 7) out vec4 _39;
layout(location = 2) out vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 4) out vec4 _45;
layout(location = 5) out vec4 _47;
layout(location = 6) out vec4 _49;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _56 = _31.x;
    float _58 = _31.y;
    float _60 = _31.z;
    float _62 = _35.y;
    float _64 = _35.x;
    _37.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    _39.x = fma(_33.x, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _39.y = fma(_33.y, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    float _66 = fma(_60, vp_c4_1._m0[0].z, fma(_58, vp_c4_1._m0[0].y, _56 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _41.x = _66;
    float _68 = fma(_60, vp_c4_1._m0[1].z, fma(_58, vp_c4_1._m0[1].y, _56 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _41.y = _68;
    float _70 = fma(_60, vp_c4_1._m0[2].z, fma(_58, vp_c4_1._m0[2].y, _56 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _43.x = fma(_64, vp_c5_1._m0[111].x, _62 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _41.z = _70;
    _43.y = fma(_64, vp_c5_1._m0[111].y, _62 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _45.z = fma(_70, vp_c3_1._m0[62].z, fma(_68, vp_c3_1._m0[62].y, _66 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _45.y = fma(_70, vp_c3_1._m0[61].z, fma(_68, vp_c3_1._m0[61].y, _66 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    _45.x = fma(_70, vp_c3_1._m0[60].z, fma(_68, vp_c3_1._m0[60].y, _66 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    _45.w = fma(_70, vp_c3_1._m0[63].z, fma(_68, vp_c3_1._m0[63].y, _66 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _47.w = fma(_70, vp_c3_1._m0[45].z, fma(_68, vp_c3_1._m0[45].y, _66 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    float _72 = fma(_70, vp_c3_1._m0[0].z, fma(_68, vp_c3_1._m0[0].y, _66 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _74 = fma(_70, vp_c3_1._m0[1].z, fma(_68, vp_c3_1._m0[1].y, _66 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _76 = fma(_70, vp_c3_1._m0[2].z, fma(_68, vp_c3_1._m0[2].y, _66 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _41.w = _76;
    _47.z = fma(_70, vp_c3_1._m0[44].z, fma(_68, vp_c3_1._m0[44].y, _66 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    _47.y = fma(_70, vp_c3_1._m0[43].z, fma(_68, vp_c3_1._m0[43].y, _66 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    _47.x = fma(_70, vp_c3_1._m0[42].z, fma(_68, vp_c3_1._m0[42].y, _66 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    _49.w = fma(_70, vp_c3_1._m0[49].z, fma(_68, vp_c3_1._m0[49].y, _66 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    _49.z = fma(_70, vp_c3_1._m0[48].z, fma(_68, vp_c3_1._m0[48].y, _66 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    _49.y = fma(_70, vp_c3_1._m0[47].z, fma(_68, vp_c3_1._m0[47].y, _66 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _49.x = fma(_70, vp_c3_1._m0[46].z, fma(_68, vp_c3_1._m0[46].y, _66 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    gl_Position.w = fma(_76, vp_c3_1._m0[10].z, fma(_74, vp_c3_1._m0[10].y, _72 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_76, vp_c3_1._m0[9].z, fma(_74, vp_c3_1._m0[9].y, _72 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.y = fma(_76, vp_c3_1._m0[8].z, fma(_74, vp_c3_1._m0[8].y, _72 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.x = fma(_76, vp_c3_1._m0[7].z, fma(_74, vp_c3_1._m0[7].y, _72 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


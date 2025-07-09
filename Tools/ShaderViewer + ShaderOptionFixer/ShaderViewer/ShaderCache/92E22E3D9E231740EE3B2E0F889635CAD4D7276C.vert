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
layout(location = 0) out vec4 _33;
layout(location = 1) out vec4 _35;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _42 = _31.x;
    float _44 = _31.y;
    float _46 = _31.z;
    _33.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    float _48 = fma(_46, vp_c4_1._m0[0].z, fma(_44, vp_c4_1._m0[0].y, _42 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _35.x = _48;
    float _50 = fma(_46, vp_c4_1._m0[1].z, fma(_44, vp_c4_1._m0[1].y, _42 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _35.y = _50;
    float _52 = fma(_46, vp_c4_1._m0[2].z, fma(_44, vp_c4_1._m0[2].y, _42 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _35.z = _52;
    float _54 = fma(_52, vp_c3_1._m0[0].z, fma(_50, vp_c3_1._m0[0].y, _48 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _56 = fma(_52, vp_c3_1._m0[1].z, fma(_50, vp_c3_1._m0[1].y, _48 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _58 = fma(_52, vp_c3_1._m0[2].z, fma(_50, vp_c3_1._m0[2].y, _48 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    gl_Position.w = fma(_58, vp_c3_1._m0[10].z, fma(_56, vp_c3_1._m0[10].y, _54 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_58, vp_c3_1._m0[9].z, fma(_56, vp_c3_1._m0[9].y, _54 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_58, vp_c3_1._m0[7].z, fma(_56, vp_c3_1._m0[7].y, _54 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = fma(_58, vp_c3_1._m0[8].z, fma(_56, vp_c3_1._m0[8].y, _54 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
}


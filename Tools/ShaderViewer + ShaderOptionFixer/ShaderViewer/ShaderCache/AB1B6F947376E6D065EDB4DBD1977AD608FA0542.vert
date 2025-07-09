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
layout(location = 0) out vec4 _35;

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
    float _48 = _33.y;
    float _50 = _33.x;
    float _52 = fma(_46, vp_c4_1._m0[0].z, fma(_44, vp_c4_1._m0[0].y, _42 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    float _54 = fma(_46, vp_c4_1._m0[1].z, fma(_44, vp_c4_1._m0[1].y, _42 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    float _56 = fma(_46, vp_c4_1._m0[2].z, fma(_44, vp_c4_1._m0[2].y, _42 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _35.x = fma(_50, vp_c5_1._m0[111].x, _48 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _35.y = fma(_50, vp_c5_1._m0[111].y, _48 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _58 = fma(_56, vp_c3_1._m0[0].z, fma(_54, vp_c3_1._m0[0].y, _52 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _60 = fma(_56, vp_c3_1._m0[1].z, fma(_54, vp_c3_1._m0[1].y, _52 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _62 = fma(_56, vp_c3_1._m0[2].z, fma(_54, vp_c3_1._m0[2].y, _52 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    gl_Position.w = fma(_62, vp_c3_1._m0[10].z, fma(_60, vp_c3_1._m0[10].y, _58 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_62, vp_c3_1._m0[9].z, fma(_60, vp_c3_1._m0[9].y, _58 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.y = fma(_62, vp_c3_1._m0[8].z, fma(_60, vp_c3_1._m0[8].y, _58 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.x = fma(_62, vp_c3_1._m0[7].z, fma(_60, vp_c3_1._m0[7].y, _58 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


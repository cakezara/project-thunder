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

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 0) in vec4 _29;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _36 = _29.x;
    float _38 = _29.y;
    float _40 = _29.z;
    float _42 = fma(_40, vp_c4_1._m0[0].z, fma(_38, vp_c4_1._m0[0].y, _36 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    float _44 = fma(_40, vp_c4_1._m0[1].z, fma(_38, vp_c4_1._m0[1].y, _36 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    float _46 = fma(_40, vp_c4_1._m0[2].z, fma(_38, vp_c4_1._m0[2].y, _36 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    float _48 = fma(_46, vp_c3_1._m0[0].z, fma(_44, vp_c3_1._m0[0].y, _42 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _50 = fma(_46, vp_c3_1._m0[1].z, fma(_44, vp_c3_1._m0[1].y, _42 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _52 = fma(_46, vp_c3_1._m0[2].z, fma(_44, vp_c3_1._m0[2].y, _42 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    gl_Position.w = fma(_52, vp_c3_1._m0[10].z, fma(_50, vp_c3_1._m0[10].y, _48 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_52, vp_c3_1._m0[9].z, fma(_50, vp_c3_1._m0[9].y, _48 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.y = fma(_52, vp_c3_1._m0[8].z, fma(_50, vp_c3_1._m0[8].y, _48 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.x = fma(_52, vp_c3_1._m0[7].z, fma(_50, vp_c3_1._m0[7].y, _48 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


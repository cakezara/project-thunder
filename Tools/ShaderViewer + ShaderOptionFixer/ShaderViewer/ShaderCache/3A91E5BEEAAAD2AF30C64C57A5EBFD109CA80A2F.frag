#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(location = 0) out vec4 _24;

void main()
{
    _24.x = fp_c6_1._m0[7].x;
    _24.y = fp_c6_1._m0[7].y;
    _24.z = fp_c6_1._m0[7].z;
    _24.w = 1.0;
}


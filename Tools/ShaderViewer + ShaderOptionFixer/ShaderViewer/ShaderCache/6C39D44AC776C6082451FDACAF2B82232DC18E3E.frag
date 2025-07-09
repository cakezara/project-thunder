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

layout(binding = 0) uniform sampler2D fp_tex_tcb_14;

layout(location = 0) in vec4 _28;
layout(location = 0) out vec4 _31;

void main()
{
    float _38 = fp_c6_1._m0[11].x * fp_c6_1._m0[15].y;
    float _40 = 1.0 / gl_FragCoord.w;
    vec3 _44 = texture(fp_tex_tcb_14, vec2(_40 * (_28.x * gl_FragCoord.w), _40 * (_28.y * gl_FragCoord.w))).xyz;
    _31.x = fma(_44.x * fp_c6_1._m0[12].x, _38, fp_c6_1._m0[7].x);
    _31.y = fma(_44.y * fp_c6_1._m0[12].y, _38, fp_c6_1._m0[7].y);
    _31.z = fma(_44.z * fp_c6_1._m0[12].z, _38, fp_c6_1._m0[7].z);
    _31.w = 1.0;
}


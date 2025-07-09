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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;

layout(location = 0) in vec4 _28;
layout(location = 1) in vec4 _30;
layout(location = 0) out vec4 _33;

void main()
{
    float _40 = 1.0 / gl_FragCoord.w;
    vec3 _44 = texture(fp_tex_tcb_A, vec2(_40 * (_28.x * gl_FragCoord.w), _40 * (_28.y * gl_FragCoord.w))).xyz;
    _33.x = fma(_44.x, fp_c6_1._m0[11].x, _44.x);
    _33.y = fma(_44.y, fp_c6_1._m0[11].x, _44.y);
    _33.z = fma(_44.z, fp_c6_1._m0[11].x, _44.z);
    _33.w = clamp(_30.w, 0.0, 1.0);
}


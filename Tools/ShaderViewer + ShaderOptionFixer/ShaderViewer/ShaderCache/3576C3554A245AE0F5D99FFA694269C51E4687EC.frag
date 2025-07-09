#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_28;
layout(binding = 1) uniform sampler2D fp_tex_tcb_2A;

layout(location = 2) in vec4 _36;
layout(location = 1) in vec4 _38;
layout(location = 0) in vec4 _40;
layout(location = 0) out vec4 _43;

void main()
{
    float _50 = 1.0 / (_36.z * gl_FragCoord.w);
    float _52 = 1.0 / _38.w;
    vec2 _56 = texture(fp_tex_tcb_2A, vec2(fma(_38.x * _52, 0.5, 0.5), fma(_38.y * _52, -0.5, 0.5))).xy;
    float _58 = _40.x;
    float _60 = _40.y;
    float _62 = _40.z;
    float _64 = _58 + (-fp_c3_1._m0[11].w);
    float _66 = _60 + (-fp_c3_1._m0[12].w);
    float _68 = _62 + (-fp_c3_1._m0[13].w);
    float _70 = fma(_68, _68, fma(_66, _66, _64 * _64));
    float _72 = exp2(log2(clamp(sqrt(_70) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_68 * inversesqrt(_70), fp_c5_1._m0[23].z, fma(_66 * inversesqrt(_70), fp_c5_1._m0[23].y, (_64 * inversesqrt(_70)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _74 = clamp(fma(fma(_62, fp_c5_1._m0[14].z, fma(_60, fp_c5_1._m0[14].y, _58 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _76 = clamp(fma(clamp((-fma(max((-_56.x) + 1.0, (-_56.y) + 1.0), clamp(_40.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_36.x * gl_FragCoord.w) * _50, (_36.y * gl_FragCoord.w) * _50)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0), fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _78 = fma(fp_c5_1._m0[13].z + (-fp_c6_1._m0[7].z), _74, fp_c6_1._m0[7].z);
    float _80 = fma(fp_c5_1._m0[13].x + (-fp_c6_1._m0[7].x), _74, fp_c6_1._m0[7].x);
    float _82 = fma(fp_c5_1._m0[13].y + (-fp_c6_1._m0[7].y), _74, fp_c6_1._m0[7].y);
    float _84 = clamp((-exp2((clamp(fma(sqrt(_70), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _43.x = fma(fma(fma((_72 * fp_c7_1._m0[55].x) * _76, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_80), _84, _80);
    _43.y = fma(fma(fma((_72 * fp_c7_1._m0[55].y) * _76, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_82), _84, _82);
    _43.z = fma(fma(fma((_72 * fp_c7_1._m0[55].z) * _76, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_78), _84, _78);
    _43.w = 1.0;
}


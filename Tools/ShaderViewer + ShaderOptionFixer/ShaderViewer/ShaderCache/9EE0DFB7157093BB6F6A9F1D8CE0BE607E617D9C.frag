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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

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
    float _54 = fma(_38.y * _52, -0.5, 0.5);
    float _56 = clamp((-0.0) + fp_c6_1._m0[8].x, 0.0, 1.0);
    float _58 = clamp(_54 * fp_c6_1._m0[89].z, 0.0, 1.0);
    float _60 = fma(fp_c6_1._m0[92].y + (-fp_c6_1._m0[7].y), _56, fp_c6_1._m0[7].y);
    float _62 = fma(_58, -2.0, 3.0) * (_58 * _58);
    float _64 = fma(fp_c6_1._m0[92].x + (-fp_c6_1._m0[7].x), _56, fp_c6_1._m0[7].x);
    float _66 = fma((-_60) + fp_c6_1._m0[83].y, fp_c6_1._m0[90].z, _60);
    float _68 = fma(fp_c6_1._m0[92].z + (-fp_c6_1._m0[7].z), _56, fp_c6_1._m0[7].z);
    float _70 = fma((-_64) + fp_c6_1._m0[83].x, fp_c6_1._m0[90].z, _64);
    float _72 = fma((-_68) + fp_c6_1._m0[83].z, fp_c6_1._m0[90].z, _68);
    float _74 = fma(fp_c6_1._m0[92].y, fp_c6_1._m0[11].x, fma(((-_66) + fp_c6_1._m0[84].y) * _62, fp_c6_1._m0[88].z, _66));
    float _76 = _40.z;
    float _78 = _40.x;
    float _80 = _40.y;
    float _82 = fma(fp_c6_1._m0[92].x, fp_c6_1._m0[11].x, fma(((-_70) + fp_c6_1._m0[84].x) * _62, fp_c6_1._m0[88].z, _70));
    float _84 = fma(fp_c6_1._m0[92].z, fp_c6_1._m0[11].x, fma(((-_72) + fp_c6_1._m0[84].z) * _62, fp_c6_1._m0[88].z, _72));
    float _86 = _78 + (-fp_c3_1._m0[11].w);
    float _88 = _80 + (-fp_c3_1._m0[12].w);
    float _90 = _76 + (-fp_c3_1._m0[13].w);
    float _92 = fma(_90, _90, fma(_88, _88, _86 * _86));
    float _94 = exp2(fma(fma(_90 * inversesqrt(_92), fp_c5_1._m0[23].z, fma(_88 * inversesqrt(_92), fp_c5_1._m0[23].y, (_86 * inversesqrt(_92)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_92) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _96 = clamp(fma(fma(_76, fp_c5_1._m0[14].z, fma(_80, fp_c5_1._m0[14].y, _78 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _98 = clamp(fma(clamp((-fma(max(0.0, (-texture(fp_tex_tcb_2A, vec2(fma(_38.x * _52, 0.5, 0.5), _54)).y) + 1.0), clamp(_40.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_36.x * gl_FragCoord.w) * _50, (_36.y * gl_FragCoord.w) * _50)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0), fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _100 = fma(_96, (-_82) + fp_c5_1._m0[13].x, _82);
    float _102 = fma(_96, (-_74) + fp_c5_1._m0[13].y, _74);
    float _104 = fma(_96, (-_84) + fp_c5_1._m0[13].z, _84);
    float _106 = clamp((-exp2((clamp(fma(sqrt(_92), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _43.x = fma((-_100) + fma(fma(_98 * (_94 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _106, _100);
    _43.y = fma((-_102) + fma(fma(_98 * (_94 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _106, _102);
    _43.z = fma((-_104) + fma(fma(_98 * (_94 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _106, _104);
    _43.w = 1.0;
}


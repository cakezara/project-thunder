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

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(location = 1) in vec4 _29;
layout(location = 0) in vec4 _31;
layout(location = 0) out vec4 _34;

void main()
{
    float _41 = _29.x;
    float _43 = _29.y;
    float _45 = _29.z;
    float _47 = _41 + (-fp_c3_1._m0[11].w);
    float _49 = _43 + (-fp_c3_1._m0[12].w);
    float _51 = _45 + (-fp_c3_1._m0[13].w);
    float _53 = clamp((-fp_c7_1._m0[54].w) + 1.0, 0.0, 1.0);
    float _55 = fma(_51, _51, fma(_49, _49, _47 * _47));
    float _57 = exp2(fma(fma(_51 * inversesqrt(_55), fp_c5_1._m0[23].z, fma(_49 * inversesqrt(_55), fp_c5_1._m0[23].y, (_47 * inversesqrt(_55)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_55) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _59 = clamp(fma(fma(_45, fp_c5_1._m0[14].z, fma(_43, fp_c5_1._m0[14].y, _41 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _61 = fma(fp_c5_1._m0[13].z + (-fp_c6_1._m0[7].z), _59, fp_c6_1._m0[7].z);
    float _63 = fma(fp_c5_1._m0[13].x + (-fp_c6_1._m0[7].x), _59, fp_c6_1._m0[7].x);
    float _65 = fma(fp_c5_1._m0[13].y + (-fp_c6_1._m0[7].y), _59, fp_c6_1._m0[7].y);
    float _67 = clamp((-exp2((clamp(fma(sqrt(_55), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _34.x = fma(fma(fma((_57 * fp_c7_1._m0[55].x) * _53, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_63), _67, _63);
    _34.y = fma(fma(fma((_57 * fp_c7_1._m0[55].y) * _53, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_65), _67, _65);
    _34.z = fma(fma(fma((_57 * fp_c7_1._m0[55].z) * _53, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_61), _67, _61);
    _34.w = clamp(_31.w, 0.0, 1.0);
}


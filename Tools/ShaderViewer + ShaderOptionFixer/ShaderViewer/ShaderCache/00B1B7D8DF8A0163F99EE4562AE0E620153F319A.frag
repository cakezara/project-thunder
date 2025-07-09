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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 1) uniform sampler2D fp_tex_tcb_28;
layout(binding = 2) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 3) uniform sampler2DArrayShadow fp_tex_tcb_2E;

layout(location = 4) in vec4 _43;
layout(location = 3) in vec4 _45;
layout(location = 2) in vec4 _47;
layout(location = 0) in vec4 _49;
layout(location = 5) in vec4 _51;
layout(location = 6) in vec4 _53;
layout(location = 1) in vec4 _55;
layout(location = 0) out vec4 _58;

void main()
{
    float _65 = 1.0 / (_43.w * gl_FragCoord.w);
    float _67 = 1.0 / (_45.z * gl_FragCoord.w);
    float _69 = _47.w;
    int _72 = abs(((-_69) > fp_c3_1._m0[58].y) ? (-1) : 0);
    float _74 = float((abs(((-_69) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_69) > fp_c3_1._m0[58].x) ? (-1) : 0)) + _72);
    bool _78 = _74 == 0.0;
    float _80 = intBitsToFloat(_72);
    if (_78)
    {
        _80 = _51.w;
    }
    float _82 = _80;
    if (!_78)
    {
        _82 = _53.w;
    }
    float _84 = 0.0;
    if (_78)
    {
        _84 = _51.z;
    }
    vec2 _88 = texture(fp_tex_tcb_2C, vec2((_43.x * gl_FragCoord.w) * _65, (_43.y * gl_FragCoord.w) * _65)).xy;
    float _90 = _88.x;
    float _92 = 0.0;
    float _94 = _84;
    if (_78)
    {
        _92 = _51.x;
    }
    float _96 = 0.0;
    float _98 = _92;
    if (_78)
    {
        _96 = _51.y;
    }
    float _100 = _96;
    if (!_78)
    {
        _94 = _53.z;
    }
    if (!_78)
    {
        _98 = _53.x;
    }
    if (!_78)
    {
        _100 = _53.y;
    }
    float _102 = 1.0 / _82;
    float _104 = clamp(_43.z, 0.0, 1.0);
    float _106 = _47.x;
    float _108 = _47.y;
    float _110 = _47.z;
    float _112 = clamp((fma(floor((1.0 / fp_c6_1._m0[85].w) * fp_c7_1._m0[20].w), -fp_c6_1._m0[85].w, fp_c7_1._m0[20].w) + (-fp_c6_1._m0[87].x)) * (1.0 / (fp_c6_1._m0[85].w + (-fp_c6_1._m0[87].x))), 0.0, 1.0);
    float _114 = _106 + (-fp_c3_1._m0[11].w);
    float _116 = fma(_90, -_90, _88.y);
    float _118 = _108 + (-fp_c3_1._m0[12].w);
    float _120 = _110 + (-fp_c3_1._m0[13].w);
    float _122 = fma(_120, _120, fma(_118, _118, _114 * _114));
    float _124 = log2(abs(_55.x));
    float _126 = exp2(fma(fma(_120 * inversesqrt(_122), fp_c5_1._m0[23].z, fma(_118 * inversesqrt(_122), fp_c5_1._m0[23].y, (_114 * inversesqrt(_122)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_122) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _128 = clamp(fma(fma(_110, fp_c5_1._m0[14].z, fma(_108, fp_c5_1._m0[14].y, _106 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _130 = clamp(fma(clamp((-(fma(texture(fp_tex_tcb_28, vec2((_45.x * gl_FragCoord.w) * _67, (_45.y * gl_FragCoord.w) * _67)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x) + max((-max(min(_116 * (1.0 / fma((-_90) + _104, (-_90) + _104, _116)), 1.0), float(_104 <= _90))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_102 * _98, _102 * _100, float(int(clamp(uint(max(roundEven(_74), 0.0)), 0u, 65535u)))), _102 * _94))) + 1.0))) + 1.0, 0.0, 1.0), fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _132 = exp2(_124 * fp_c6_1._m0[85].z);
    float _134 = fma(fp_c5_1._m0[13].x + (-fp_c6_1._m0[7].x), _128, fp_c6_1._m0[7].x);
    float _136 = fma(fp_c5_1._m0[13].z + (-fp_c6_1._m0[7].z), _128, fp_c6_1._m0[7].z);
    float _138 = fma(fp_c5_1._m0[13].y + (-fp_c6_1._m0[7].y), _128, fp_c6_1._m0[7].y);
    float _140 = clamp(fma(_132, texture(fp_tex_tcb_1C, vec2(_49.x, fma(fp_c7_1._m0[20].w, fp_c6_1._m0[85].x, _49.y))).x + exp2(_124 * fp_c6_1._m0[85].y), -_132), 0.0, 1.0);
    float _142 = clamp((-exp2((clamp(fma(sqrt(_122), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _58.x = fma(fma(fma((_126 * fp_c7_1._m0[55].x) * _130, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_134), _142, _134);
    _58.y = fma(fma(fma((_126 * fp_c7_1._m0[55].y) * _130, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_138), _142, _138);
    _58.z = fma(fma(fma((_126 * fp_c7_1._m0[55].z) * _130, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_136), _142, _136);
    _58.w = clamp(fma((_112 * _112) * fma(_112, -2.0, 3.0), -_140, _140) * _55.w, 0.0, 1.0);
}


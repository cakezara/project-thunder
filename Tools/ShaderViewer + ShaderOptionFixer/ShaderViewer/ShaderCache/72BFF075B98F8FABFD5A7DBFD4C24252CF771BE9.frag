#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 2, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 1) uniform sampler2D fp_tex_tcb_22;
layout(binding = 2) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 3) uniform sampler2DArrayShadow fp_tex_tcb_2E;

layout(location = 4) in vec4 _45;
layout(location = 2) in vec4 _47;
layout(location = 0) in vec4 _49;
layout(location = 7) in vec4 _51;
layout(location = 5) in vec4 _53;
layout(location = 6) in vec4 _55;
layout(location = 3) in vec4 _57;
layout(location = 1) in vec4 _59;
layout(location = 0) out vec4 _62;

void main()
{
    float _69 = 1.0 / (_45.w * gl_FragCoord.w);
    float _71 = _47.w;
    float _73 = fma(fp_c7_1._m0[20].w, fp_c6_1._m0[88].x, _49.x);
    int _76 = abs(((-_71) > fp_c3_1._m0[58].y) ? (-1) : 0);
    float _78 = float((abs(((-_71) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_71) > fp_c3_1._m0[58].x) ? (-1) : 0)) + _76);
    bool _82 = _78 == 0.0;
    float _84 = fma(_49.y, fp_c1_1._m0[0].x, fp_c7_1._m0[20].w * fp_c6_1._m0[88].y);
    float _86 = intBitsToFloat(_76);
    if (_82)
    {
        _86 = _53.w;
    }
    float _88 = _86;
    if (!_82)
    {
        _88 = _55.w;
    }
    float _90 = 0.0;
    if (_82)
    {
        _90 = _53.z;
    }
    float _92 = 0.0;
    float _94 = _90;
    if (_82)
    {
        _92 = _53.x;
    }
    float _96 = 0.0;
    float _98 = _92;
    if (_82)
    {
        _96 = _53.y;
    }
    float _100 = _96;
    if (!_82)
    {
        _94 = _55.z;
    }
    if (!_82)
    {
        _98 = _55.x;
    }
    if (!_82)
    {
        _100 = _55.y;
    }
    float _102 = 1.0 / _88;
    vec2 _106 = texture(fp_tex_tcb_2C, vec2((_45.x * gl_FragCoord.w) * _69, (_45.y * gl_FragCoord.w) * _69)).xy;
    float _108 = _106.x;
    vec2 _110 = texture(fp_tex_tcb_22, vec2(_51.x, _51.y)).xy;
    float _112 = clamp(_45.z, 0.0, 1.0);
    float _114 = _47.y;
    float _116 = _57.w;
    float _118 = fma(_108, -_108, _106.y);
    float _120 = _47.z;
    float _122 = _47.x;
    float _124 = _120 + (-fp_c3_1._m0[13].w);
    float _126 = _122 + (-fp_c3_1._m0[11].w);
    float _128 = _114 + (-fp_c3_1._m0[12].w);
    float _130 = clamp(clamp(fma(_110.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0) * _116, 0.0, 1.0);
    float _132 = fma(_124, _124, fma(_128, _128, _126 * _126));
    float _134 = fma(((texture(fp_tex_tcb_1C, vec2((-_73) + (-0.0), (-_84) + (-0.0))).x + (-0.5)) + texture(fp_tex_tcb_1C, vec2(_73, _84)).x) + (-0.5), fp_c6_1._m0[85].x, fp_c6_1._m0[85].y);
    float _136 = fma(fp_c6_1._m0[83].y + (-fp_c6_1._m0[82].y), fp_c7_1._m0[52].w, fp_c6_1._m0[82].y);
    float _138 = fma(fp_c6_1._m0[83].z + (-fp_c6_1._m0[82].z), fp_c7_1._m0[52].w, fp_c6_1._m0[82].z);
    float _140 = fma(fp_c6_1._m0[83].x + (-fp_c6_1._m0[82].x), fp_c7_1._m0[52].w, fp_c6_1._m0[82].x);
    float _142 = clamp(fma(fma(_120, fp_c5_1._m0[14].z, fma(_114, fp_c5_1._m0[14].y, _122 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _144 = fma((-_140) + fp_c5_1._m0[13].x, _142, _140);
    float _146 = fma((-_136) + fp_c5_1._m0[13].y, _142, _136);
    float _148 = fma((-_138) + fp_c5_1._m0[13].z, _142, _138);
    float _150 = _134 + (-fp_c6_1._m0[85].z);
    float _152 = exp2(fma(fma(_124 * inversesqrt(_132), fp_c5_1._m0[23].z, fma(_128 * inversesqrt(_132), fp_c5_1._m0[23].y, (_126 * inversesqrt(_132)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_132) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _154 = clamp(fma(clamp((-_130) + 1.0, 0.0, 1.0) * clamp((-fma(_130, fp_c7_1._m0[37].w, clamp(_116 * clamp(fma(_110.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + max((-max(min(_118 * (1.0 / fma(_112 + (-_108), _112 + (-_108), _118)), 1.0), float(_112 <= _108))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_102 * _98, _102 * _100, float(int(clamp(uint(max(roundEven(_78), 0.0)), 0u, 65535u)))), _102 * _94))) + 1.0))) + 1.0, 0.0, 1.0), fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _156 = clamp(((-_150) + _114) * (1.0 / ((_134 + fp_c6_1._m0[85].z) + (-_150))), 0.0, 1.0);
    float _158 = clamp((-exp2((clamp(fma(sqrt(_132), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _62.x = fma(fma(fma((_152 * fp_c7_1._m0[55].x) * _154, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_144), _158, _144);
    _62.y = fma(fma(fma((_152 * fp_c7_1._m0[55].y) * _154, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_146), _158, _146);
    _62.z = fma(fma(fma((_152 * fp_c7_1._m0[55].z) * _154, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_148), _158, _148);
    _62.w = clamp((fma(_156, -2.0, 3.0) * (_156 * _156)) * _59.w, 0.0, 1.0);
}


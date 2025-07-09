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

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_22;
layout(binding = 3) uniform sampler2D fp_tex_tcb_28;
layout(binding = 4) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 5) uniform sampler2DArrayShadow fp_tex_tcb_2E;

layout(location = 4) in vec4 _47;
layout(location = 2) in vec4 _49;
layout(location = 7) in vec4 _51;
layout(location = 0) in vec4 _53;
layout(location = 3) in vec4 _55;
layout(location = 5) in vec4 _57;
layout(location = 6) in vec4 _59;
layout(location = 1) in vec4 _61;
layout(location = 0) out vec4 _64;

void main()
{
    float _71 = 1.0 / (_47.w * gl_FragCoord.w);
    float _73 = _49.w;
    float _75 = _53.x;
    float _77 = _53.y;
    float _79 = float((abs(((-_73) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_73) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_73) > fp_c3_1._m0[58].y) ? (-1) : 0));
    bool _83 = _79 == 0.0;
    float _85 = 0.0;
    float _87 = _73;
    if (_83)
    {
        _85 = _57.w;
    }
    float _89 = _85;
    if (!_83)
    {
        _89 = _59.w;
    }
    if (_83)
    {
        _87 = _57.z;
    }
    float _91 = _87;
    if (!_83)
    {
        _91 = _59.z;
    }
    float _93 = 1.0 / (_55.z * gl_FragCoord.w);
    float _95 = 0.0;
    if (_83)
    {
        _95 = _57.x;
    }
    float _97 = 0.0;
    float _99 = _95;
    if (_83)
    {
        _97 = _57.y;
    }
    float _101 = _97;
    if (!_83)
    {
        _99 = _59.x;
    }
    if (!_83)
    {
        _101 = _59.y;
    }
    float _103 = 1.0 / _89;
    vec2 _107 = texture(fp_tex_tcb_2C, vec2((_47.x * gl_FragCoord.w) * _71, (_47.y * gl_FragCoord.w) * _71)).xy;
    float _109 = _107.x;
    vec2 _111 = texture(fp_tex_tcb_22, vec2(_51.x, _51.y)).xy;
    vec3 _115 = texture(fp_tex_tcb_A, vec2(_75, _77)).xyz;
    float _117 = _49.x;
    float _119 = _49.y;
    float _121 = _49.z;
    float _123 = clamp(_47.z, 0.0, 1.0);
    float _125 = _117 + (-fp_c3_1._m0[11].w);
    float _127 = _119 + (-fp_c3_1._m0[12].w);
    float _129 = _121 + (-fp_c3_1._m0[13].w);
    float _131 = fma(_129, _129, fma(_127, _127, _125 * _125));
    float _133 = fma(_109, -_109, _107.y);
    float _135 = _55.w;
    float _137 = clamp(clamp(fma(_111.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0) * _135, 0.0, 1.0);
    float _139 = exp2(log2(clamp(sqrt(_131) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_129 * inversesqrt(_131), fp_c5_1._m0[23].z, fma(_127 * inversesqrt(_131), fp_c5_1._m0[23].y, (_125 * inversesqrt(_131)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _141 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[12].x, _115.x);
    float _143 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[12].y, _115.y);
    float _145 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[12].z, _115.z);
    float _147 = clamp(fma(clamp((-_137) + 1.0, 0.0, 1.0) * clamp((-fma(_137, fp_c7_1._m0[37].w, clamp(clamp(fma(_111.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0) * _135, 0.0, 1.0) + (max((-max(min(_133 * (1.0 / fma((-_109) + _123, (-_109) + _123, _133)), 1.0), float(_123 <= _109))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_103 * _99, _103 * _101, float(int(clamp(uint(max(roundEven(_79), 0.0)), 0u, 65535u)))), _103 * _91))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_55.x * gl_FragCoord.w) * _93, (_55.y * gl_FragCoord.w) * _93)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0), fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _149 = clamp(fma(fma(_121, fp_c5_1._m0[14].z, fma(_119, fp_c5_1._m0[14].y, _117 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _151 = fma((-_141) + fp_c5_1._m0[13].x, _149, _141);
    float _153 = fma((-_143) + fp_c5_1._m0[13].y, _149, _143);
    float _155 = fma((-_145) + fp_c5_1._m0[13].z, _149, _145);
    float _157 = clamp((-exp2((clamp(fma(sqrt(_131), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _64.x = fma((-_151) + fma(fma(_147 * (_139 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _157, _151);
    _64.y = fma((-_153) + fma(fma(_147 * (_139 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _157, _153);
    _64.z = fma((-_155) + fma(fma(_147 * (_139 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _157, _155);
    _64.w = clamp(texture(fp_tex_tcb_8, vec2(_75, _77)).x * _61.w, 0.0, 1.0);
}


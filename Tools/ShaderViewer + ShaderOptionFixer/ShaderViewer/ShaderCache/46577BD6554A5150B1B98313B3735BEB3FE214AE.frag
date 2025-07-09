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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_22;
layout(binding = 1) uniform sampler2D fp_tex_tcb_28;
layout(binding = 2) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 3) uniform sampler2DArrayShadow fp_tex_tcb_2E;

layout(location = 5) in vec4 _43;
layout(location = 4) in vec4 _45;
layout(location = 2) in vec4 _47;
layout(location = 0) in vec4 _49;
layout(location = 3) in vec4 _51;
layout(location = 6) in vec4 _53;
layout(location = 7) in vec4 _55;
layout(location = 8) in vec4 _57;
layout(location = 1) in vec4 _59;
layout(location = 0) out vec4 _62;

void main()
{
    float _69 = 1.0 / (_45.z * gl_FragCoord.w);
    float _71 = _47.w;
    float _73 = _47.x;
    float _75 = _47.y;
    float _77 = _47.z;
    float _79 = _49.x;
    float _81 = _51.x;
    float _83 = _49.y;
    float _85 = _51.y;
    float _87 = _49.z;
    float _89 = _51.z;
    float _91 = float((abs(((-_71) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_71) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_71) > fp_c3_1._m0[58].y) ? (-1) : 0));
    float _93 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[12].y, fp_c6_1._m0[7].y);
    float _95 = clamp(fma(fma(_77, fp_c5_1._m0[14].z, fma(_75, fp_c5_1._m0[14].y, _73 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _97 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[12].x, fp_c6_1._m0[7].x);
    float _99 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[12].z, fp_c6_1._m0[7].z);
    bool _103 = _91 == 0.0;
    float _105 = (-_99) + fp_c5_1._m0[13].z;
    float _107 = fma((-_93) + fp_c5_1._m0[13].y, _95, _93);
    float _109 = inversesqrt(fma(_87, _87, fma(_83, _83, _79 * _79)));
    float _111 = fma((-_97) + fp_c5_1._m0[13].x, _95, _97);
    float _113 = inversesqrt(fma(_89, _89, fma(_85, _85, _81 * _81)));
    float _115 = fma(_105, _95, _99);
    float _117 = fp_c6_1._m0[12].z;
    float _119 = _105;
    float _121 = _95;
    float _123 = _93;
    if (_103)
    {
        _117 = _53.w;
    }
    float _125 = _117;
    if (!_103)
    {
        _125 = _55.w;
    }
    if (_103)
    {
        _119 = _53.z;
    }
    float _127 = _119;
    if (_103)
    {
        _121 = _53.x;
    }
    float _129 = _121;
    if (_103)
    {
        _123 = _53.y;
    }
    float _131 = _123;
    if (!_103)
    {
        _127 = _55.z;
    }
    float _133 = 1.0 / (_43.w * gl_FragCoord.w);
    if (!_103)
    {
        _129 = _55.x;
    }
    if (!_103)
    {
        _131 = _55.y;
    }
    float _135 = _73 + (-fp_c3_1._m0[11].w);
    float _137 = _75 + (-fp_c3_1._m0[12].w);
    float _139 = _77 + (-fp_c3_1._m0[13].w);
    float _141 = 1.0 / _125;
    vec2 _145 = texture(fp_tex_tcb_2C, vec2((_43.x * gl_FragCoord.w) * _133, (_43.y * gl_FragCoord.w) * _133)).xy;
    float _147 = _145.x;
    vec2 _149 = texture(fp_tex_tcb_22, vec2(_57.x, _57.y)).xy;
    float _151 = clamp(_43.z, 0.0, 1.0);
    float _153 = fma(_139, _139, fma(_137, _137, _135 * _135));
    float _155 = _45.w;
    float _157 = fma(_147, -_147, _145.y);
    float _159 = clamp(clamp(fma(_149.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0) * _155, 0.0, 1.0);
    float _161 = exp2(log2(clamp(sqrt(_153) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_139 * inversesqrt(_153), fp_c5_1._m0[23].z, fma(_137 * inversesqrt(_153), fp_c5_1._m0[23].y, (_135 * inversesqrt(_153)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _163 = clamp(fma(clamp((-_159) + 1.0, 0.0, 1.0) * clamp((-fma(_159, fp_c7_1._m0[37].w, clamp(clamp(fma(_149.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0) * _155, 0.0, 1.0) + (max((-max(min(_157 * (1.0 / fma((-_147) + _151, (-_147) + _151, _157)), 1.0), float(_151 <= _147))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_141 * _129, _141 * _131, float(int(clamp(uint(max(roundEven(_91), 0.0)), 0u, 65535u)))), _141 * _127))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_45.x * gl_FragCoord.w) * _69, (_45.y * gl_FragCoord.w) * _69)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0), fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _165 = clamp((-exp2((clamp(fma(sqrt(_153), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _62.x = fma((-_111) + fma(fma(_163 * (_161 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _165, _111);
    _62.y = fma((-_107) + fma(fma(_163 * (_161 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _165, _107);
    _62.z = fma((-_115) + fma(fma(_163 * (_161 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _165, _115);
    _62.w = clamp(exp2(log2(abs(fma(_87 * _109, _89 * _113, fma(_83 * _109, _85 * _113, (_79 * _109) * (_81 * _113))))) * fp_c6_1._m0[86].x) * _59.w, 0.0, 1.0);
}


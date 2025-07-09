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

layout(binding = 0) uniform sampler2D fp_tex_tcb_14;
layout(binding = 1) uniform sampler2D fp_tex_tcb_22;
layout(binding = 2) uniform sampler2D fp_tex_tcb_28;
layout(binding = 3) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 4) uniform sampler2DArrayShadow fp_tex_tcb_2E;

layout(location = 4) in vec4 _45;
layout(location = 2) in vec4 _47;
layout(location = 7) in vec4 _49;
layout(location = 3) in vec4 _51;
layout(location = 0) in vec4 _53;
layout(location = 5) in vec4 _55;
layout(location = 6) in vec4 _57;
layout(location = 1) in vec4 _59;
layout(location = 0) out vec4 _62;

void main()
{
    float _69 = 1.0 / (_45.w * gl_FragCoord.w);
    float _71 = _47.w;
    float _73 = float((abs(((-_71) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_71) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_71) > fp_c3_1._m0[58].y) ? (-1) : 0));
    bool _77 = _73 == 0.0;
    float _79 = 0.0;
    float _81 = _71;
    if (_77)
    {
        _79 = _55.w;
    }
    float _83 = _79;
    if (!_77)
    {
        _83 = _57.w;
    }
    if (_77)
    {
        _81 = _55.z;
    }
    float _85 = _81;
    if (!_77)
    {
        _85 = _57.z;
    }
    float _87 = 0.0;
    if (_77)
    {
        _87 = _55.x;
    }
    float _89 = 0.0;
    float _91 = _87;
    if (_77)
    {
        _89 = _55.y;
    }
    float _93 = _89;
    if (!_77)
    {
        _91 = _57.x;
    }
    if (!_77)
    {
        _93 = _57.y;
    }
    float _95 = 1.0 / (_51.z * gl_FragCoord.w);
    float _97 = 1.0 / _83;
    vec2 _101 = texture(fp_tex_tcb_2C, vec2((_45.x * gl_FragCoord.w) * _69, (_45.y * gl_FragCoord.w) * _69)).xy;
    float _103 = _101.x;
    vec2 _105 = texture(fp_tex_tcb_22, vec2(_49.x, _49.y)).xy;
    vec3 _109 = texture(fp_tex_tcb_14, vec2(_53.x, _53.y)).xyz;
    float _111 = _47.x;
    float _113 = _47.y;
    float _115 = _47.z;
    float _117 = clamp(_45.z, 0.0, 1.0);
    float _119 = _111 + (-fp_c3_1._m0[11].w);
    float _121 = _113 + (-fp_c3_1._m0[12].w);
    float _123 = _115 + (-fp_c3_1._m0[13].w);
    float _125 = fma(_123, _123, fma(_121, _121, _119 * _119));
    float _127 = fma(_103, -_103, _101.y);
    float _129 = _51.w;
    float _131 = clamp(clamp(fma(_105.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0) * _129, 0.0, 1.0);
    float _133 = exp2(log2(clamp(sqrt(_125) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_123 * inversesqrt(_125), fp_c5_1._m0[23].z, fma(_121 * inversesqrt(_125), fp_c5_1._m0[23].y, (_119 * inversesqrt(_125)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _135 = clamp(fma(clamp((-_131) + 1.0, 0.0, 1.0) * clamp((-fma(_131, fp_c7_1._m0[37].w, clamp(clamp(fma(_105.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0) * _129, 0.0, 1.0) + (max((-max(min(_127 * (1.0 / fma((-_103) + _117, (-_103) + _117, _127)), 1.0), float(_117 <= _103))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_97 * _91, _97 * _93, float(int(clamp(uint(max(roundEven(_73), 0.0)), 0u, 65535u)))), _97 * _85))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_51.x * gl_FragCoord.w) * _95, (_51.y * gl_FragCoord.w) * _95)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0), fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _137 = fma(_109.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fp_c6_1._m0[7].x);
    float _139 = fma(_109.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fp_c6_1._m0[7].y);
    float _141 = fma(_109.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fp_c6_1._m0[7].z);
    float _143 = clamp(fma(fma(_115, fp_c5_1._m0[14].z, fma(_113, fp_c5_1._m0[14].y, _111 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _145 = fma((-_137) + fp_c5_1._m0[13].x, _143, _137);
    float _147 = fma((-_139) + fp_c5_1._m0[13].y, _143, _139);
    float _149 = fma((-_141) + fp_c5_1._m0[13].z, _143, _141);
    float _151 = clamp((-exp2((clamp(fma(sqrt(_125), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _62.x = fma((-_145) + fma(fma(_135 * (_133 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _151, _145);
    _62.y = fma((-_147) + fma(fma(_135 * (_133 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _151, _147);
    _62.z = fma((-_149) + fma(fma(_135 * (_133 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _151, _149);
    _62.w = clamp(_59.w, 0.0, 1.0);
}


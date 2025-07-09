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

layout(binding = 2, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 9, std140) uniform fp_c8
{
    vec4 _m0[4096];
} fp_c8_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_26;
layout(binding = 1) uniform sampler2D fp_tex_tcb_28;
layout(binding = 2) uniform sampler2D fp_tex_tcb_2A;

layout(location = 4) in vec4 _42;
layout(location = 0) in vec4 _44;
layout(location = 3) in vec4 _46;
layout(location = 2) in vec4 _48;
layout(location = 0) out vec4 _51;

void main()
{
    float _58 = 1.0 / (_42.z * gl_FragCoord.w);
    float _60 = 1.0 / _46.w;
    int _63 = floatBitsToInt(fp_c6_1._m0[25].w) + (-1);
    float _65 = min((texture(fp_tex_tcb_26, vec2(_44.z, _44.w)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _67 = _65 * float((-abs(_63)) + 1);
    float _69 = _65 * float(max(0, (-_63)));
    float _71 = _65 * float(max(0, _63));
    float _73 = max(_71, max(_67, _69));
    float _75 = clamp(_73 + (-fp_c7_1._m0[21].w), 0.0, 1.0);
    float _77 = clamp(((_67 + (-_73)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _79 = clamp(((_69 + (-_73)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _81 = clamp(((_71 + (-_73)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _83 = fma(_81, fp_c8_1._m0[18].x, fma(_79, fp_c8_1._m0[4].x, _77 * fp_c8_1._m0[11].x));
    float _85 = fma(_81, fp_c8_1._m0[18].y, fma(_79, fp_c8_1._m0[4].y, _77 * fp_c8_1._m0[11].y));
    float _87 = fma(_81, fp_c8_1._m0[18].z, fma(_79, fp_c8_1._m0[4].z, _77 * fp_c8_1._m0[11].z));
    float _89 = 1.0;
    float _99;
    float _101;
    float _103;
    float _105;
    float _107;
    float _109;
    if (min(_75 * 1000.0, 1.0) > 0.5)
    {
        float _91 = clamp(_75 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _93 = fma(fma(_85, -fp_c7_1._m0[45].y, fma(_81, fp_c8_1._m0[17].y, fma(_79, fp_c8_1._m0[3].y, _77 * fp_c8_1._m0[10].y))), _91, _85 * fp_c7_1._m0[45].y);
        float _95 = fma(fma(_83, -fp_c7_1._m0[45].y, fma(_81, fp_c8_1._m0[17].x, fma(_79, fp_c8_1._m0[3].x, _77 * fp_c8_1._m0[10].x))), _91, _83 * fp_c7_1._m0[45].y);
        float _97 = fma(fma(_87, -fp_c7_1._m0[45].y, fma(_81, fp_c8_1._m0[17].z, fma(_79, fp_c8_1._m0[3].z, _77 * fp_c8_1._m0[10].z))), _91, _87 * fp_c7_1._m0[45].y);
        _99 = _95 * fp_c7_1._m0[18].z;
        _101 = _95;
        _103 = _93 * fp_c7_1._m0[18].z;
        _105 = _93;
        _107 = _97 * fp_c7_1._m0[18].z;
        _109 = _97;
        _89 = fp_c6_1._m0[0].y;
    }
    else
    {
        float _111 = clamp((-0.0) + fp_c6_1._m0[8].x, 0.0, 1.0);
        _99 = 0.0;
        _101 = fma(fp_c6_1._m0[92].x + (-fp_c6_1._m0[7].x), _111, fp_c6_1._m0[7].x);
        _103 = 0.0;
        _105 = fma((-fp_c6_1._m0[7].y) + fp_c6_1._m0[92].y, _111, fp_c6_1._m0[7].y);
        _107 = 0.0;
        _109 = fma((-fp_c6_1._m0[7].z) + fp_c6_1._m0[92].z, _111, fp_c6_1._m0[7].z);
    }
    float _113 = _99 + _101;
    float _115 = _48.x;
    float _117 = _103 + _105;
    float _119 = _48.y;
    float _121 = _107 + _109;
    float _123 = _48.z;
    float _125 = _123 + (-fp_c3_1._m0[13].w);
    float _127 = clamp(fma(fma(_123, fp_c5_1._m0[14].z, fma(_119, fp_c5_1._m0[14].y, _115 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _129 = fma((-_113) + fp_c5_1._m0[13].x, _127, _113);
    float _131 = fma((-_117) + fp_c5_1._m0[13].y, _127, _117);
    float _133 = _115 + (-fp_c3_1._m0[11].w);
    float _135 = fma((-_121) + fp_c5_1._m0[13].z, _127, _121);
    float _137 = _119 + (-fp_c3_1._m0[12].w);
    float _139 = fma(_125, _125, fma(_137, _137, _133 * _133));
    float _141 = exp2(fma(fma(_125 * inversesqrt(_139), fp_c5_1._m0[23].z, fma(_137 * inversesqrt(_139), fp_c5_1._m0[23].y, (_133 * inversesqrt(_139)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_139) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _143 = clamp(fma(clamp((-fma(max(0.0, (-texture(fp_tex_tcb_2A, vec2(fma(_46.x * _60, 0.5, 0.5), fma(_46.y * _60, -0.5, 0.5))).y) + 1.0), clamp(_48.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_42.x * gl_FragCoord.w) * _58, (_42.y * gl_FragCoord.w) * _58)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0), fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _145 = clamp((-exp2((clamp(fma(sqrt(_139), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _51.x = fma((-_129) + fma(fma((_141 * fp_c7_1._m0[55].x) * _143, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _145, _129);
    _51.y = fma((-_131) + fma(fma((_141 * fp_c7_1._m0[55].y) * _143, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _145, _131);
    _51.z = fma((-_135) + fma(fma((_141 * fp_c7_1._m0[55].z) * _143, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _145, _135);
    _51.w = clamp(_89 + (-0.0), 0.0, 1.0);
}


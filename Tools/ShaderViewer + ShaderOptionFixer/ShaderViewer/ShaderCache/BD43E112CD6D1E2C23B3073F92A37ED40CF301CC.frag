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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 1) uniform sampler2D fp_tex_tcb_22;
layout(binding = 2) uniform sampler2D fp_tex_tcb_28;
layout(binding = 3) uniform sampler2D fp_tex_tcb_2A;

layout(location = 0) in vec4 _40;
layout(location = 2) in vec4 _42;
layout(location = 0) out vec4 _45;
layout(location = 3) in vec4 _47;
layout(location = 4) in vec4 _49;
layout(location = 1) in vec4 _51;

void main()
{
    float _58 = _40.y;
    float _60 = texture(fp_tex_tcb_1C, vec2(_40.x, _58)).x;
    float _62 = 1.0 / _42.w;
    float _64 = _42.x * _62;
    float _66 = _42.y * _62;
    float _68 = (_60 + fp_c6_1._m0[83].w) * fp_c6_1._m0[86].x;
    bool _72 = _68 <= 0.0;
    int _75 = floatBitsToInt(_64);
    int _77 = floatBitsToInt(_66);
    int _79 = floatBitsToInt(_60);
    int _81 = floatBitsToInt(_58);
    if (_72)
    {
        discard;
    }
    if (_72)
    {
        _75 = 0;
    }
    if (_72)
    {
        _77 = 0;
    }
    if (_72)
    {
        _79 = 0;
    }
    if (_72)
    {
        _81 = 0;
    }
    if (_72)
    {
        _45.x = intBitsToFloat(_75);
        _45.y = intBitsToFloat(_77);
        _45.z = intBitsToFloat(_79);
        _45.w = intBitsToFloat(_81);
        return;
    }
    float _83 = 1.0 / (_47.z * gl_FragCoord.w);
    vec2 _87 = texture(fp_tex_tcb_2A, vec2(fma(_64, 0.5, 0.5), fma(_66, -0.5, 0.5))).xy;
    vec2 _89 = texture(fp_tex_tcb_22, vec2(_49.x, _49.y)).xy;
    float _91 = _51.x;
    float _93 = _51.y;
    float _95 = _51.z;
    float _97 = _47.w;
    float _99 = _91 + (-fp_c3_1._m0[11].w);
    float _101 = _93 + (-fp_c3_1._m0[12].w);
    float _103 = _95 + (-fp_c3_1._m0[13].w);
    float _105 = fma(_103, _103, fma(_101, _101, _99 * _99));
    float _107 = clamp(clamp(fma(_89.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0) * _97, 0.0, 1.0);
    float _109 = clamp(fma(clamp((-_107) + 1.0, 0.0, 1.0) * clamp((-fma(_107, fp_c7_1._m0[37].w, clamp(clamp(fma(_89.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0) * _97, 0.0, 1.0) + fma(max((-_87.x) + 1.0, (-_87.y) + 1.0), clamp(_51.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_47.x * gl_FragCoord.w) * _83, (_47.y * gl_FragCoord.w) * _83)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0), fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _111 = exp2(log2(clamp(sqrt(_105) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_103 * inversesqrt(_105), fp_c5_1._m0[23].z, fma(_101 * inversesqrt(_105), fp_c5_1._m0[23].y, (_99 * inversesqrt(_105)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _113 = clamp(fma(fma(_95, fp_c5_1._m0[14].z, fma(_93, fp_c5_1._m0[14].y, _91 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _115 = fma(fp_c5_1._m0[13].x + (-fp_c6_1._m0[7].x), _113, fp_c6_1._m0[7].x);
    float _117 = fma(fp_c5_1._m0[13].z + (-fp_c6_1._m0[7].z), _113, fp_c6_1._m0[7].z);
    float _119 = fma(fp_c5_1._m0[13].y + (-fp_c6_1._m0[7].y), _113, fp_c6_1._m0[7].y);
    float _121 = clamp((-exp2((clamp(fma(sqrt(_105), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _45.x = fma(fma(fma((_111 * fp_c7_1._m0[55].x) * _109, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_115), _121, _115);
    _45.y = fma(fma(fma((_111 * fp_c7_1._m0[55].y) * _109, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_119), _121, _119);
    _45.z = fma(fma(fma((_111 * fp_c7_1._m0[55].z) * _109, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_117), _121, _117);
    _45.w = clamp(_68 + (-0.0), 0.0, 1.0);
}


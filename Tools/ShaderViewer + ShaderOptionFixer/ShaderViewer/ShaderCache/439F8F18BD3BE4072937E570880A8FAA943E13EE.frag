#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 11, std140) uniform fp_c10
{
    vec4 _m0[4096];
} fp_c10_1;

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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 4) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 5) uniform sampler2D fp_tex_tcb_26;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 8) uniform sampler2DArrayShadow fp_tex_tcb_2E;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _75;
layout(location = 1) in vec4 _77;
layout(location = 3) in vec4 _79;
layout(location = 2) in vec4 _81;
layout(location = 4) in vec4 _83;
layout(location = 7) in vec4 _85;
layout(location = 5) in vec4 _87;
layout(location = 6) in vec4 _89;
layout(location = 8) in vec4 _91;
layout(location = 9) in vec4 _93;
layout(location = 0) out vec4 _96;
uint _6[12];

void main()
{
    bool _465 = false;
    float _103 = _75.x;
    float _105 = _75.y;
    vec2 _109 = texture(fp_tex_tcb_E, vec2(_103, _105)).xy;
    float _111 = _109.x;
    float _113 = _109.y;
    vec3 _117 = texture(fp_tex_tcb_A, vec2(_103, _105)).xyz;
    float _119 = _77.x;
    float _121 = _77.y;
    float _123 = _77.z;
    float _125 = _79.y;
    float _127 = _79.w;
    float _129 = _79.z;
    float _131 = _79.x;
    float _133 = inversesqrt(fma(_123, _123, fma(_121, _121, _119 * _119)));
    float _135 = _123 * _133;
    float _137 = _119 * _133;
    float _139 = _121 * _133;
    float _141 = sqrt(clamp((-fma(_111, _111, _113 * _113)) + 1.0, 0.0, 1.0));
    float _143 = (-texture(fp_tex_tcb_26, vec2(_103 + (-fp_c6_1._m0[26].w), _105 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_26, vec2(_103 + fp_c6_1._m0[26].w, _105 + fp_c6_1._m0[26].w)).x;
    int _146 = floatBitsToInt(fp_c6_1._m0[25].w) + (-1);
    float _148 = fma(_137, _141, fma(_111, _131, _113 * (fma(_139, _129, -(_135 * _125)) * _127)));
    float _150 = fma(_131 * _143, fp_c6_1._m0[27].x, _137);
    float _152 = fma(_135, _141, fma(_111, _129, _113 * (fma(_137, _125, -(_139 * _131)) * _127)));
    float _154 = fma(_129 * _143, fp_c6_1._m0[27].x, _135);
    float _156 = min((texture(fp_tex_tcb_26, vec2(_103, _105)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _158 = fma(_139, _141, fma(_111, _125, _113 * (fma(_135, _131, -(_137 * _129)) * _127)));
    float _160 = _156 * float(max(0, _146));
    float _162 = fma(_125 * _143, fp_c6_1._m0[27].x, _139);
    float _164 = _156 * float((-abs(_146)) + 1);
    float _166 = _156 * float(max(0, (-_146)));
    float _168 = inversesqrt(fma(_152, _152, fma(_158, _158, _148 * _148)));
    float _170 = max(_160, max(_164, _166));
    float _172 = inversesqrt(fma(_154, _154, fma(_162, _162, _150 * _150)));
    float _174 = _170 + (-fp_c7_1._m0[21].w);
    float _176 = _148 * _168;
    float _178 = _158 * _168;
    float _180 = clamp(_174 + (-0.0), 0.0, 1.0);
    float _182 = _152 * _168;
    float _184 = fma(clamp(_139 + (-0.0), 0.0, 1.0), (-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, fp_c7_1._m0[20].y);
    float _186 = clamp(((_164 + (-_170)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _188 = _162 * _172;
    float _190 = clamp(((_166 + (-_170)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _192 = clamp(((_160 + (-_170)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _194 = _150 * _172;
    float _196 = _154 * _172;
    bool _200 = min(_180 * 1000.0, 1.0) > 0.5;
    float _202 = fma(_192, fp_c8_1._m0[18].x, fma(_190, fp_c8_1._m0[4].x, _186 * fp_c8_1._m0[11].x));
    float _204 = fma(_192, fp_c8_1._m0[18].y, fma(_190, fp_c8_1._m0[4].y, _186 * fp_c8_1._m0[11].y));
    float _206 = fma(_192, fp_c8_1._m0[18].z, fma(_190, fp_c8_1._m0[4].z, _186 * fp_c8_1._m0[11].z));
    float _208 = _176;
    float _210 = _178;
    float _212 = _182;
    float _214 = _117.x;
    float _216 = _117.y;
    float _218 = _117.z;
    float _220 = _180;
    float _230;
    float _232;
    float _234;
    float _236;
    float _238;
    float _240;
    if (_200)
    {
        float _222 = clamp(_180 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _224 = fma(fma(_206, -fp_c7_1._m0[45].y, fma(_192, fp_c8_1._m0[17].z, fma(_190, fp_c8_1._m0[3].z, _186 * fp_c8_1._m0[10].z))), _222, _206 * fp_c7_1._m0[45].y);
        float _226 = fma(fma(_202, -fp_c7_1._m0[45].y, fma(_192, fp_c8_1._m0[17].x, fma(_190, fp_c8_1._m0[3].x, _186 * fp_c8_1._m0[10].x))), _222, _202 * fp_c7_1._m0[45].y);
        float _228 = fma(fma(_204, -fp_c7_1._m0[45].y, fma(_192, fp_c8_1._m0[17].y, fma(_190, fp_c8_1._m0[3].y, _186 * fp_c8_1._m0[10].y))), _222, _204 * fp_c7_1._m0[45].y);
        _208 = fma(_184, (-_176) + _194, _176);
        _210 = fma(_184, (-_178) + _188, _178);
        _212 = fma(_184, (-_182) + _196, _182);
        _230 = fp_c7_1._m0[18].w;
        _214 = _226;
        _232 = 0.0;
        _216 = _228;
        _218 = _224;
        _234 = fp_c6_1._m0[0].y;
        _236 = _224 * fp_c7_1._m0[18].z;
        _238 = _226 * fp_c7_1._m0[18].z;
        _240 = _228 * fp_c7_1._m0[18].z;
    }
    else
    {
        _230 = max(texture(fp_tex_tcb_10, vec2(_103, _105)).x, fp_c1_1._m0[0].y);
        _232 = fp_c6_1._m0[9].x;
        _234 = fma(texture(fp_tex_tcb_1C, vec2(_75.z, _75.w)).x, fp_c6_1._m0[82].x, texture(fp_tex_tcb_1E, vec2(_103, _105)).x) * _81.w;
        _236 = 0.0;
        _238 = 0.0;
        _240 = 0.0;
    }
    float _242 = _83.w;
    float _244 = _87.x;
    float _246 = _87.y;
    float _248 = _87.z;
    float _250 = 1.0 / (_85.w * gl_FragCoord.w);
    int _252 = abs(((-_242) > fp_c3_1._m0[58].z) ? (-1) : 0);
    float _254 = inversesqrt(fma(_248, _248, fma(_246, _246, _244 * _244)));
    float _256 = float((_252 + abs(((-_242) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_242) > fp_c3_1._m0[58].y) ? (-1) : 0));
    float _258 = _244 * (-_254);
    bool _260 = _256 == 0.0;
    float _262 = _246 * (-_254);
    float _264 = _248 * (-_254);
    float _266 = _242;
    float _268 = intBitsToFloat(_252);
    if (_260)
    {
        _266 = _91.w;
    }
    float _270 = _266;
    if (!_260)
    {
        _270 = _93.w;
    }
    float _272 = fma(_264, _212, fma(_262, _210, _258 * _208));
    float _274 = 0.0;
    if (_260)
    {
        _274 = _91.z;
    }
    float _276 = max(_272, fp_c1_1._m0[0].w);
    float _278 = _274;
    float _280 = _276;
    if (_260)
    {
        _268 = _91.x;
    }
    float _282 = _268;
    if (_260)
    {
        _220 = _91.y;
    }
    float _284 = _220;
    if (!_260)
    {
        _278 = _93.z;
    }
    if (!_260)
    {
        _282 = _93.x;
    }
    if (!_260)
    {
        _284 = _93.y;
    }
    vec2 _286 = texture(fp_tex_tcb_2C, vec2((_85.x * gl_FragCoord.w) * _250, (_85.y * gl_FragCoord.w) * _250)).xy;
    float _288 = _286.x;
    float _290 = 1.0 / (_89.z * gl_FragCoord.w);
    float _292 = 1.0 / _270;
    vec2 _294 = texture(fp_tex_tcb_38, vec2(_276, (-_230) + (-0.0))).xy;
    float _296 = clamp(_85.z, 0.0, 1.0);
    float _298 = fma(_232, -_214, _214);
    float _300 = fma(_232, -_216, _216);
    float _302 = fma(_214 + (-0.039999999105930328369140625), _232, fp_c1_1._m0[0].z);
    float _304 = fma(_288, -_288, _286.y);
    float _306 = fma(_216 + (-0.039999999105930328369140625), _232, fp_c1_1._m0[0].z);
    float _308 = fma(_232, -_218, _218);
    float _310 = fma(_218 + (-0.039999999105930328369140625), _232, fp_c1_1._m0[0].z);
    float _312 = clamp((-(fma(texture(fp_tex_tcb_28, vec2((_89.x * gl_FragCoord.w) * _290, (_89.y * gl_FragCoord.w) * _290)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x) + max((-max(min(_304 * (1.0 / fma((-_288) + _296, (-_288) + _296, _304)), 1.0), float(_296 <= _288))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_292 * _282, _292 * _284, float(int(clamp(uint(max(roundEven(_256), 0.0)), 0u, 65535u)))), _292 * _278))) + 1.0))) + 1.0, 0.0, 1.0);
    float _314 = _306;
    float _316 = _302;
    float _318 = _310;
    float _334;
    float _336;
    float _338;
    float _340;
    float _342;
    float _344;
    float _346;
    float _348;
    float _350;
    float _352;
    if (_200)
    {
        float _320 = fma(_264, -_212, fma(_262, -_210, _258 * (-_208)));
        float _322 = fma(_320 * _208, -2.0, -_258);
        float _324 = fma(_320 * _210, -2.0, -_262);
        float _326 = fma(_320 * _212, -2.0, -_264);
        float _328 = 1.0 / max(abs(_326), max(abs(_322), abs(_324)));
        vec3 _330 = texture(fp_tex_tcb_36, vec4(_322 * _328, _324 * _328, _326 * _328, float(12)), 0.0).xyz;
        float _332 = fma(_294.x, fp_c7_1._m0[19].x, _294.y);
        _334 = fma(_210 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _336 = _208 * fp_c7_1._m0[19].z;
        _338 = _212 * fp_c7_1._m0[19].z;
        _340 = 0.0;
        _342 = 0.0;
        _314 = fp_c7_1._m0[19].x;
        _316 = fp_c7_1._m0[19].x;
        _318 = fp_c7_1._m0[19].x;
        _344 = 0.0;
        _346 = _330.y * _332;
        _348 = _330.x * _332;
        _350 = _330.z * _332;
        _352 = 1.0;
    }
    else
    {
        float _354 = max(_272, fp_c1_1._m0[0].w);
        float _356 = fma(_264, -_212, fma(_262, -_210, _258 * (-_208)));
        float _358 = fma(_356 * _208, -2.0, -_258);
        float _360 = fma(_356 * _210, -2.0, -_262);
        float _362 = fma(_356 * _212, -2.0, -_264);
        vec2 _364 = texture(fp_tex_tcb_38, vec2(_354, (-_230) + (-0.0))).xy;
        float _366 = _364.x;
        float _368 = _364.y;
        float _370 = 1.0 / max(abs(_362), max(abs(_358), abs(_360)));
        vec3 _372 = texture(fp_tex_tcb_36, vec4(_358 * _370, _360 * _370, _362 * _370, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_230 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _374 = _83.y;
        float _376 = fma(fma(_196, -fp_c5_1._m0[23].z, fma(_188, -fp_c5_1._m0[23].y, _194 * (-fp_c5_1._m0[23].x))), -_210, _210);
        float _378 = _374 + (-fp_c9_1._m0[32].w);
        float _380 = _378;
        _336 = _208;
        _338 = _212;
        _280 = _354;
        _352 = clamp(fma(_376, clamp(_174 * (-7.0), 0.0, 1.0), -_376) + fp_c1_1._m0[1].y, 0.0, 1.0);
        if (_374 < fp_c9_1._m0[32].w)
        {
            _380 = _378 * (-5.0);
        }
        float _382 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w) * max(0.0, ((-_210) + 1.2000000476837158203125) * (clamp(fma(_380, -(1.0 / fma(clamp((-_210) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_380, -(1.0 / fma(clamp((-_210) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0)));
        _334 = _210;
        _340 = _382 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _342 = _382 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _344 = _382 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _346 = fma(_306, _366, _368) * _372.y;
        _348 = fma(_302, _366, _368) * _372.x;
        _350 = fma(_310, _366, _368) * _372.z;
    }
    float _384 = _258 + (-fp_c5_1._m0[23].x);
    float _386 = _83.z;
    float _388 = _334 * _336;
    float _390 = _83.x;
    float _392 = _262 + (-fp_c5_1._m0[23].y);
    float _394 = _338 * _334;
    float _396 = _264 + (-fp_c5_1._m0[23].z);
    float _398 = inversesqrt(fma(_396, _396, fma(_392, _392, _384 * _384)));
    float _400 = _384 * _398;
    float _402 = _392 * _398;
    float _404 = _396 * _398;
    float _406 = _338 * _338;
    float _408 = fma(_336, _336, -(_334 * _334));
    float _410 = _338 * _336;
    int _412 = max(0, min(int(trunc((_386 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _414 = _230 * _230;
    float _416 = fma(_230, 0.5, 0.5);
    float _418 = max(fma(_264, _404, fma(_262, _402, _258 * _400)), fp_c1_1._m0[0].w);
    float _420 = max(fma(_404, _212, fma(_402, _210, _400 * _208)), fp_c1_1._m0[0].w) * max(fma(_404, _212, fma(_402, _210, _400 * _208)), fp_c1_1._m0[0].w);
    float _422 = (_416 * 0.5) * _416;
    uint _425 = uint(int(uint((((int(uint(_412) >> uint(16)) * 20) << 16) + (((_412 & 65535) * 20) + max(0, min(int(trunc((_390 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _427 = fp_c10_1._m0[int(uint(int(_425)) >> uint(2))][int(_425) & 3];
    float _429 = exp2(_418 * fma(_418, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _431 = 1.0 / (_422 + fma(_280, -_422, _280));
    float _433 = (_431 * (1.0 / (_422 + fma(max(fma(_212, -fp_c5_1._m0[23].z, fma(_210, -fp_c5_1._m0[23].y, _208 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_422, max(fma(_212, -fp_c5_1._m0[23].z, fma(_210, -fp_c5_1._m0[23].y, _208 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_414 * (1.0 / max(fma(_420, _414 * _414, -_420) + 1.0, fp_c1_1._m0[0].w))) * (_414 * (1.0 / max(fma(_420, _414 * _414, -_420) + 1.0, fp_c1_1._m0[0].w))));
    float _435 = fma(max(0.0, fma(_408, fp_c5_1._m0[31].y, (fma(_338, fp_c5_1._m0[26].z, fma(_334, fp_c5_1._m0[26].y, _336 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_410, fp_c5_1._m0[29].w, fma(_406, fp_c5_1._m0[29].z, fma(_394, fp_c5_1._m0[29].y, _388 * fp_c5_1._m0[29].x))))) + _340, fma(_300, -_314, _300), _346);
    float _437 = fma(max(0.0, fma(_408, fp_c5_1._m0[31].x, (fma(_338, fp_c5_1._m0[25].z, fma(_334, fp_c5_1._m0[25].y, _336 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_410, fp_c5_1._m0[28].w, fma(_406, fp_c5_1._m0[28].z, fma(_394, fp_c5_1._m0[28].y, _388 * fp_c5_1._m0[28].x))))) + _344, fma(_298, -_316, _298), _348);
    float _439 = fma(max(0.0, fma(_408, fp_c5_1._m0[31].z, (fma(_338, fp_c5_1._m0[27].z, fma(_334, fp_c5_1._m0[27].y, _336 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_410, fp_c5_1._m0[30].w, fma(_406, fp_c5_1._m0[30].z, fma(_394, fp_c5_1._m0[30].y, _388 * fp_c5_1._m0[30].x))))) + _342, fma(_308, -_318, _308), _350);
    int _441 = floatBitsToInt(_427);
    float _443 = _435;
    float _445 = _439;
    float _447 = _437;
    float _449 = _439;
    float _451 = _437;
    float _453 = _435;
    if (floatBitsToInt(_427) != (-1))
    {
        int _455 = 0;
        float _459;
        float _461;
        float _463;
        int _547;
        do
        {
            int _457 = _441 & 255;
            _459 = _447;
            _461 = _443;
            _463 = _445;
            _465 = uint(_457) >= 30u;
            if (_465)
            {
                break;
            }
            int _467 = _457 << 4;
            uint _469 = uint(int(uint(_467 + 7360) >> uint(2)));
            int _471 = int(_469) + 1;
            uint _473 = uint(int(uint(_467 + 7368) >> uint(2)));
            float _475 = (-_390) + fp_c10_1._m0[int(uint(int(_469)) >> uint(2))][int(_469) & 3];
            float _477 = (-_83.y) + fp_c10_1._m0[int(uint(_471) >> uint(2))][_471 & 3];
            float _479 = (-_386) + fp_c10_1._m0[int(uint(int(_473)) >> uint(2))][int(_473) & 3];
            float _481 = fma(_479, _479, fma(_477, _477, _475 * _475));
            float _483 = _475 * inversesqrt(_481);
            float _485 = _477 * inversesqrt(_481);
            float _487 = _479 * inversesqrt(_481);
            float _489 = _258 + _483;
            float _491 = _262 + _485;
            float _493 = _264 + _487;
            float _495 = inversesqrt(fma(_493, _493, fma(_491, _491, _489 * _489)));
            float _497 = _489 * _495;
            float _499 = _491 * _495;
            float _501 = _493 * _495;
            float _503 = max(fma(_264, _501, fma(_262, _499, _258 * _497)), fp_c1_1._m0[0].w);
            uint _505 = uint(int(uint(_467 + 6880) >> uint(2)));
            int _507 = int(_505) + 1;
            float _509 = max(fma(_501, _212, fma(_499, _210, _497 * _208)), fp_c1_1._m0[0].w) * max(fma(_501, _212, fma(_499, _210, _497 * _208)), fp_c1_1._m0[0].w);
            float _511 = fma(_487, _212, fma(_485, _210, _483 * _208));
            float _513 = max(_511, fp_c1_1._m0[0].w);
            uint _515 = uint(int(uint(_467 + 8320) >> uint(2)));
            float _517 = 1.0 / max(fma(_414 * _414, _509, -_509) + 1.0, fp_c1_1._m0[0].w);
            float _519 = exp2(_503 * fma(_503, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _521 = (_431 * (1.0 / (_422 + fma(_422, -_513, _513)))) * ((_414 * _517) * (_414 * _517));
            uint _523 = uint(int(uint(_467 + 6400) >> uint(2)));
            int _525 = int(_523) + 1;
            bool _527 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_515)) >> uint(2))][int(_515) & 3]) != 0;
            uint _529 = uint(int(uint(_467 + 6408) >> uint(2)));
            float _531 = _517;
            if (!_527)
            {
                _531 = 1.0;
            }
            float _533 = _531;
            if (_527)
            {
                uint _535 = uint(int(uint(_467 + 7840) >> uint(2)));
                int _537 = int(_535) + 1;
                uint _539 = uint(int(uint(_467 + 7848) >> uint(2)));
                uint _541 = uint(int(uint(_467 + 6888) >> uint(2)));
                float _543 = fp_c10_1._m0[int(uint(int(_541)) >> uint(2))][int(_541) & 3];
                int _545 = int(_541) + 1;
                _533 = exp2(fp_c10_1._m0[int(uint(_545) >> uint(2))][_545 & 3] * log2(clamp(((-_543) + fma(_487, -fp_c10_1._m0[int(uint(int(_539)) >> uint(2))][int(_539) & 3], fma(_485, -fp_c10_1._m0[int(uint(_537) >> uint(2))][_537 & 3], _483 * (-fp_c10_1._m0[int(uint(int(_535)) >> uint(2))][int(_535) & 3])))) * (1.0 / ((-_543) + 1.0)), 0.0, 1.0)));
            }
            _547 = _455 + 1;
            float _549 = (exp2(fp_c10_1._m0[int(uint(_507) >> uint(2))][_507 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_505)) >> uint(2))][int(_505) & 3], -sqrt(_481), fp_c1_1._m0[1].x), 0.0, 1.0))) * _533) * clamp(_511 + (-0.0), 0.0, 1.0);
            float _551 = fma(fp_c10_1._m0[int(uint(_525) >> uint(2))][_525 & 3] * _549, fma(_300, fp_c1_1._m0[2].x, ((fma(_519, -_314, _519) + _314) * _521) * 0.079577468335628509521484375), _443);
            float _553 = fma(fp_c10_1._m0[int(uint(int(_529)) >> uint(2))][int(_529) & 3] * _549, fma(_308, fp_c1_1._m0[2].x, ((fma(_519, -_318, _519) + _318) * _521) * 0.079577468335628509521484375), _445);
            float _555 = fma(fp_c10_1._m0[int(uint(int(_523)) >> uint(2))][int(_523) & 3] * _549, fma(_298, fp_c1_1._m0[2].x, ((fma(_519, -_316, _519) + _316) * _521) * 0.079577468335628509521484375), _447);
            _441 = int(uint(_441) >> uint(8));
            _455 = _547;
            _443 = _551;
            _445 = _553;
            _447 = _555;
            _459 = _555;
            _461 = _551;
            _463 = _553;
        } while (!(_547 >= 4));
        _465 = false;
        _449 = _463;
        _451 = _459;
        _453 = _461;
        if ((_441 & 255) == 30)
        {
            float _557 = 1.0 / fp_c10_1._m0[561].y;
            float _559 = _386 + (-fp_c10_1._m0[557].z);
            float _561 = _559 * fp_c10_1._m0[558].x;
            float _563 = _390 + (-fp_c10_1._m0[557].x);
            float _565 = (-_390) + fma(_557, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _567 = (-_386) + fma(_557, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _569 = _563 * fp_c10_1._m0[558].z;
            float _571 = _565 * _565;
            float _573 = ((-float(_561 < _569)) + float(_561 > _569)) * fp_c10_1._m0[561].y;
            float _575 = sqrt(fma(_567, _567, _571)) * (-fp_c10_1._m0[558].y);
            float _577 = _83.y;
            float _579 = fma(_559, _559, _563 * _563);
            float _581 = inversesqrt(fma(_567, _567, fma(_575, _575, _571)));
            float _583 = _565 * _581;
            float _585 = _567 * _581;
            float _587 = _575 * _581;
            float _589 = fma(_559, fp_c10_1._m0[558].z, _563 * fp_c10_1._m0[558].x);
            float _591 = _258 + _583;
            bool _593 = fma(_559 * inversesqrt(_579), fp_c10_1._m0[558].z, (_563 * inversesqrt(_579)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _595 = inversesqrt(fma(_585, _585, _583 * _583));
            float _597 = _262 + _587;
            float _599 = fma(_585, _212, fma(_587, _210, _583 * _208));
            float _601 = _264 + _585;
            float _603 = 1.0 / (fma(_386, fp_c10_1._m0[565].z, fma(_577, fp_c10_1._m0[565].y, _390 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _605 = inversesqrt(fma(_601, _601, fma(_597, _597, _591 * _591)));
            float _607 = _591 * _605;
            float _609 = _597 * _605;
            float _611 = _601 * _605;
            bool _613 = _589 > 0.0;
            float _615 = (_583 * _595) * (-fp_c10_1._m0[558].x);
            float _617 = _615;
            if (_613)
            {
                _617 = sqrt(_579);
            }
            float _619 = _617;
            if (!_613)
            {
                _619 = 1.0;
            }
            float _621 = max(_599, fp_c1_1._m0[0].w);
            float _623 = fma(_422, -_621, _621);
            float _625 = max(fma(_611, _212, fma(_609, _210, _607 * _208)), fp_c1_1._m0[0].w) * max(fma(_611, _212, fma(_609, _210, _607 * _208)), fp_c1_1._m0[0].w);
            float _627 = clamp(fma(_589 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_589 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _629 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_563, fma(_573, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_559 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_573 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_563, fma(_573, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_559 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_573 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _631 = max(fma(_264, _611, fma(_262, _609, _258 * _607)), fp_c1_1._m0[0].w);
            float _633 = _623;
            if (!_593)
            {
                _633 = 1.0;
            }
            float _635 = _633;
            if (_593)
            {
                _635 = fma(_629, -_629, fp_c1_1._m0[1].x) * fma(_629, -_629, fp_c1_1._m0[1].x);
            }
            float _637 = exp2(_631 * fma(_631, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _639 = (_431 * (1.0 / (_422 + _623))) * ((_414 * (1.0 / max(fma(_414 * _414, _625, -_625) + 1.0, fp_c1_1._m0[0].w))) * (_414 * (1.0 / max(fma(_414 * _414, _625, -_625) + 1.0, fp_c1_1._m0[0].w))));
            float _641 = clamp(_599 + (-0.0), 0.0, 1.0) * (min(fma(_627, -_627, fp_c1_1._m0[1].x) * fma(_627, -_627, fp_c1_1._m0[1].x), _635) * (exp2(log2(clamp(fma(_619, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_585 * _595, -fp_c10_1._m0[558].z, _615) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _643 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_386, fp_c10_1._m0[562].z, fma(_577, fp_c10_1._m0[562].y, _390 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _603, 0.5, 0.5), (-fma((fma(_386, fp_c10_1._m0[563].z, fma(_577, fp_c10_1._m0[563].y, _390 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _603, 0.5, 0.5)) + 1.0)).z > fma((fma(_386, fp_c10_1._m0[564].z, fma(_577, fp_c10_1._m0[564].y, _390 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _603, 0.5, 0.5)) || (_589 <= 0.0));
            _449 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _641) * fma(_308, fp_c1_1._m0[2].x, ((fma(_637, -_318, _637) + _318) * _639) * 0.079577468335628509521484375), _643, _463);
            _451 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _641) * fma(_298, fp_c1_1._m0[2].x, ((fma(_637, -_316, _637) + _316) * _639) * 0.079577468335628509521484375), _643, _459);
            _453 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _641) * fma(_300, fp_c1_1._m0[2].x, ((fma(_637, -_314, _637) + _314) * _639) * 0.079577468335628509521484375), _643, _461);
        }
    }
    float _645 = _390 + (-fp_c3_1._m0[11].w);
    float _647 = _83.y;
    float _649 = _386 + (-fp_c3_1._m0[13].w);
    float _651 = clamp(fma(_212, -fp_c5_1._m0[23].z, fma(_210, -fp_c5_1._m0[23].y, _208 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _653 = _647 + (-fp_c3_1._m0[12].w);
    float _655 = fma(_649, _649, fma(_653, _653, _645 * _645));
    float _657 = clamp(fma(fma(_386, fp_c5_1._m0[14].z, fma(_647, fp_c5_1._m0[14].y, _390 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _659 = clamp(fma(_312, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _661 = fma(_312, ((_651 * fp_c5_1._m0[5].z) * fma((fma(_429, -_318, _429) + _318) * _433, fp_c1_1._m0[1].w, _308 * 0.3183098733425140380859375)) * _352, _449) + _236;
    float _663 = fma(_312, ((_651 * fp_c5_1._m0[5].x) * fma((fma(_429, -_316, _429) + _316) * _433, fp_c1_1._m0[1].w, _298 * 0.3183098733425140380859375)) * _352, _451) + _238;
    float _665 = fma(_312, ((_651 * fp_c5_1._m0[5].y) * fma((fma(_429, -_314, _429) + _314) * _433, fp_c1_1._m0[1].w, _300 * 0.3183098733425140380859375)) * _352, _453) + _240;
    float _667 = exp2(log2(clamp(sqrt(_655) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_649 * inversesqrt(_655), fp_c5_1._m0[23].z, fma(_653 * inversesqrt(_655), fp_c5_1._m0[23].y, (_645 * inversesqrt(_655)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _669 = fma((-_663) + fp_c5_1._m0[13].x, _657, _663);
    float _671 = fma((-_665) + fp_c5_1._m0[13].y, _657, _665);
    float _673 = fma((-_661) + fp_c5_1._m0[13].z, _657, _661);
    float _675 = clamp((-exp2((clamp(fma(sqrt(_655), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _96.x = fma((-_669) + fma(fma((_667 * fp_c7_1._m0[55].x) * _659, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _675, _669);
    _96.y = fma((-_671) + fma(fma((_667 * fp_c7_1._m0[55].y) * _659, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _675, _671);
    _96.z = fma((-_673) + fma(fma((_667 * fp_c7_1._m0[55].z) * _659, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _675, _673);
    _96.w = clamp(_234 + (-0.0), 0.0, 1.0);
}


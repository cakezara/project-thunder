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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_22;
layout(binding = 5) uniform sampler2D fp_tex_tcb_24;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 8) uniform sampler2DArrayShadow fp_tex_tcb_2E;
layout(binding = 9) uniform sampler2D fp_tex_tcb_30;
layout(binding = 10) uniform sampler2D fp_tex_tcb_32;
layout(binding = 11) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 12) uniform sampler2D fp_tex_tcb_38;
layout(binding = 13) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _75;
layout(location = 1) in vec4 _77;
layout(location = 3) in vec4 _79;
layout(location = 6) in vec4 _81;
layout(location = 4) in vec4 _83;
layout(location = 5) in vec4 _85;
layout(location = 7) in vec4 _87;
layout(location = 11) in vec4 _89;
layout(location = 8) in vec4 _91;
layout(location = 9) in vec4 _93;
layout(location = 10) in vec4 _95;
layout(location = 2) in vec4 _97;
layout(location = 0) out vec4 _100;
uint _6[12];

void main()
{
    bool _398 = false;
    float _107 = _75.x;
    float _109 = _75.y;
    vec2 _113 = texture(fp_tex_tcb_E, vec2(_107, _109)).xy;
    float _115 = _113.x;
    float _117 = _113.y;
    float _119 = _77.x;
    float _121 = _77.y;
    float _123 = _77.z;
    float _125 = _79.y;
    float _127 = _79.z;
    float _129 = _79.x;
    float _131 = _79.w;
    float _133 = inversesqrt(fma(_123, _123, fma(_121, _121, _119 * _119)));
    float _135 = _123 * _133;
    float _137 = _119 * _133;
    float _139 = _121 * _133;
    float _141 = sqrt(clamp((-fma(_115, _115, _117 * _117)) + 1.0, 0.0, 1.0));
    float _143 = 1.0 / _81.w;
    float _145 = fma(_137, _141, fma(_115, _129, _117 * (fma(_139, _127, -(_135 * _125)) * _131)));
    float _147 = fma(_139, _141, fma(_115, _125, _117 * (fma(_135, _129, -(_137 * _127)) * _131)));
    float _149 = fma(_135, _141, fma(_115, _127, _117 * (fma(_137, _125, -(_139 * _129)) * _131)));
    float _151 = inversesqrt(fma(_149, _149, fma(_147, _147, _145 * _145)));
    float _153 = fma(_81.x * _143, 0.5, 0.5);
    float _155 = _149 * _151;
    float _157 = _145 * _151;
    float _159 = fma(_81.y * _143, -0.5, 0.5);
    float _161 = fma((-_137) + _157, fp_c6_1._m0[0].z, _153);
    float _163 = fma(((-_135) + _155) * fp_c6_1._m0[0].z, -fp_c3_1._m0[15].z, _159);
    float _165 = _83.w;
    float _167 = _85.x;
    float _169 = _85.y;
    float _171 = _85.z;
    float _173 = _147 * _151;
    float _175 = max(texture(fp_tex_tcb_10, vec2(_107, _109)).x, fp_c1_1._m0[0].x);
    float _177 = 1.0 / (_87.z * gl_FragCoord.w);
    int _180 = abs(((-_165) > fp_c3_1._m0[58].y) ? (-1) : 0);
    float _182 = float((abs(((-_165) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_165) > fp_c3_1._m0[58].x) ? (-1) : 0)) + _180);
    float _184 = inversesqrt(fma(_171, _171, fma(_169, _169, _167 * _167)));
    bool _188 = _182 == 0.0;
    float _190 = _167 * (-_184);
    float _192 = _169 * (-_184);
    float _194 = 1.0 / (_91.w * gl_FragCoord.w);
    float _196 = intBitsToFloat(_180);
    float _198 = _161;
    float _200 = _163;
    if (_188)
    {
        _196 = _93.w;
    }
    float _202 = _171 * (-_184);
    float _204 = _196;
    if (!_188)
    {
        _204 = _95.w;
    }
    float _206 = 0.0;
    if (_188)
    {
        _206 = _93.z;
    }
    float _208 = fma(_155, _202, fma(_173, _192, _157 * _190));
    float _210 = 0.0;
    float _212 = _206;
    if (_188)
    {
        _210 = _93.x;
    }
    float _214 = 0.0;
    float _216 = _210;
    if (_188)
    {
        _214 = _93.y;
    }
    float _218 = max(_208, fp_c1_1._m0[0].y);
    float _220 = _214;
    if (!_188)
    {
        _212 = _95.z;
    }
    float _222 = fma(_157 * (-_208), -2.0, -_190);
    if (!_188)
    {
        _216 = _95.x;
    }
    float _224 = fma(_173 * (-_208), -2.0, -_192);
    if (!_188)
    {
        _220 = _95.y;
    }
    float _226 = fma(_155 * (-_208), -2.0, -_202);
    float _228 = 1.0 / _204;
    vec2 _230 = texture(fp_tex_tcb_2C, vec2((_91.x * gl_FragCoord.w) * _194, (_91.y * gl_FragCoord.w) * _194)).xy;
    float _232 = _230.x;
    float _234 = 1.0 / max(abs(_226), max(abs(_222), abs(_224)));
    vec2 _236 = texture(fp_tex_tcb_38, vec2(_218, (-_175) + (-0.0))).xy;
    float _238 = _236.x;
    float _240 = _236.y;
    bool _242 = texture(fp_tex_tcb_32, vec2(_161, _163)).x > gl_FragCoord.z;
    if (!_242)
    {
        _198 = _153;
    }
    if (!_242)
    {
        _200 = _159;
    }
    float _244 = _190 + (-fp_c5_1._m0[23].x);
    vec3 _248 = texture(fp_tex_tcb_36, vec4(_222 * _234, _224 * _234, _226 * _234, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_175 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _250 = texture(fp_tex_tcb_12, vec2(_107, _109)).x;
    vec3 _252 = textureLod(fp_tex_tcb_30, vec2(_198, _200), _175).xyz;
    float _254 = _252.x;
    float _256 = _252.y;
    float _258 = _252.z;
    vec2 _260 = texture(fp_tex_tcb_22, vec2(_89.x, _89.y)).xy;
    vec4 _263 = texture(fp_tex_tcb_24, vec2(_89.z, _89.w)).xyzw;
    float _265 = _263.w;
    float _267 = clamp(_91.z, 0.0, 1.0);
    float _269 = _83.x;
    float _271 = _83.z;
    float _273 = _192 + (-fp_c5_1._m0[23].y);
    float _275 = _202 + (-fp_c5_1._m0[23].z);
    float _277 = inversesqrt(fma(_275, _275, fma(_273, _273, _244 * _244)));
    float _279 = _244 * _277;
    float _281 = _273 * _277;
    int _283 = max(0, min(int(trunc((_271 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _285 = fma(_232, -_232, _230.y);
    float _287 = _275 * _277;
    float _289 = fma(_175, 0.5, 0.5);
    float _291 = _175 * _175;
    float _293 = max(fma(_202, _287, fma(_192, _281, _190 * _279)), fp_c1_1._m0[0].y);
    float _295 = _173 * _155;
    float _297 = _157 * _173;
    float _299 = max(fma(_155, _287, fma(_173, _281, _157 * _279)), fp_c1_1._m0[0].y) * max(fma(_155, _287, fma(_173, _281, _157 * _279)), fp_c1_1._m0[0].y);
    float _301 = fma(_173, -fp_c5_1._m0[23].y, _157 * (-fp_c5_1._m0[23].x));
    float _303 = (_289 * 0.5) * _289;
    float _305 = _291 * _291;
    float _307 = _155 * _155;
    float _309 = clamp(fma(_155, -fp_c5_1._m0[23].z, _301), 0.0, 1.0);
    float _311 = max(fma(_155, -fp_c5_1._m0[23].z, _301), fp_c1_1._m0[0].y);
    float _313 = _157 * _155;
    float _315 = exp2(_293 * fma(_293, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _317 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].x;
    float _319 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].y;
    float _321 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].z;
    float _323 = fma(_157, _157, -(_173 * _173));
    float _325 = ((1.0 / (_303 + fma(_218, -_303, _218))) * (1.0 / (_303 + fma(_303, -_311, _311)))) * ((_291 * (1.0 / max(fma(_299, _305, -_299) + 1.0, fp_c1_1._m0[0].y))) * (_291 * (1.0 / max(fma(_299, _305, -_299) + 1.0, fp_c1_1._m0[0].y))));
    float _327 = fma(_250, -fp_c6_1._m0[101].x, fp_c6_1._m0[101].x);
    uint _330 = uint(int(uint((((int(uint(_283) >> uint(16)) * 20) << 16) + (((_283 & 65535) * 20) + max(0, min(int(trunc((_269 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _332 = fp_c10_1._m0[int(uint(int(_330)) >> uint(2))][int(_330) & 3];
    float _334 = texture(fp_tex_tcb_8, vec2(_107, _109)).x * _97.w;
    float _336 = fma(_327, -_317, _327);
    float _338 = sqrt(fp_c6_1._m0[101].x);
    float _340 = fma(_250, -fp_c6_1._m0[101].y, fp_c6_1._m0[101].y);
    float _342 = sqrt(fp_c6_1._m0[101].y);
    float _344 = fma(_250, -fp_c6_1._m0[101].z, fp_c6_1._m0[101].z);
    float _346 = sqrt(fp_c6_1._m0[101].z);
    float _348 = clamp(_334 + (-0.0), 0.0, 1.0);
    float _350 = _87.w;
    float _352 = fma(_340, -_319, _340);
    float _354 = fma(_344, -_321, _344);
    float _356 = clamp(clamp(fma(_260.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0) * _350, 0.0, 1.0);
    float _358 = (_350 * (_263.x * _265)) * 32.0;
    float _360 = (_350 * (_263.z * _265)) * 32.0;
    float _362 = (_350 * (_263.y * _265)) * 32.0;
    float _364 = fma(_336, _358, (fma(_317, _238, _240) * _248.x) + fma(fma(_338, -_254, max(0.0, fma(_323, fp_c5_1._m0[31].x, (fma(_155, fp_c5_1._m0[25].z, fma(_173, fp_c5_1._m0[25].y, _157 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_313, fp_c5_1._m0[28].w, fma(_307, fp_c5_1._m0[28].z, fma(_295, fp_c5_1._m0[28].y, _297 * fp_c5_1._m0[28].x))))) * _336), _348, _338 * _254));
    float _366 = fma(_354, _360, (fma(_321, _238, _240) * _248.z) + fma(fma(_346, -_258, max(0.0, fma(_323, fp_c5_1._m0[31].z, (fma(_155, fp_c5_1._m0[27].z, fma(_173, fp_c5_1._m0[27].y, _157 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_313, fp_c5_1._m0[30].w, fma(_307, fp_c5_1._m0[30].z, fma(_295, fp_c5_1._m0[30].y, _297 * fp_c5_1._m0[30].x))))) * _354), _348, _346 * _258));
    float _368 = clamp((-_356) + 1.0, 0.0, 1.0);
    float _370 = fma(_352, _362, (fma(_319, _238, _240) * _248.y) + fma(fma(_342, -_256, max(0.0, fma(_323, fp_c5_1._m0[31].y, (fma(_155, fp_c5_1._m0[26].z, fma(_173, fp_c5_1._m0[26].y, _157 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_313, fp_c5_1._m0[29].w, fma(_307, fp_c5_1._m0[29].z, fma(_295, fp_c5_1._m0[29].y, _297 * fp_c5_1._m0[29].x))))) * _352), _348, _342 * _256));
    float _372 = clamp((-fma(_356, fp_c7_1._m0[37].w, clamp(_350 * clamp(fma(_260.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + (max((-max(min(_285 * (1.0 / fma((-_232) + _267, (-_232) + _267, _285)), 1.0), float(_267 <= _232))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_228 * _216, _228 * _220, float(int(clamp(uint(max(roundEven(_182), 0.0)), 0u, 65535u)))), _228 * _212))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_87.x * gl_FragCoord.w) * _177, (_87.y * gl_FragCoord.w) * _177)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _374 = _370;
    float _376 = _364;
    float _378 = _366;
    float _380 = _364;
    float _382 = _370;
    float _384 = _366;
    if (floatBitsToInt(_332) != (-1))
    {
        int _386 = floatBitsToInt(_332);
        int _388 = 0;
        float _392;
        float _394;
        float _396;
        int _480;
        do
        {
            int _390 = _386 & 255;
            _392 = _376;
            _394 = _374;
            _396 = _378;
            _398 = uint(_390) >= 30u;
            if (_398)
            {
                break;
            }
            int _400 = _390 << 4;
            uint _402 = uint(int(uint(_400 + 7360) >> uint(2)));
            int _404 = int(_402) + 1;
            uint _406 = uint(int(uint(_400 + 7368) >> uint(2)));
            float _408 = (-_269) + fp_c10_1._m0[int(uint(int(_402)) >> uint(2))][int(_402) & 3];
            float _410 = fp_c10_1._m0[int(uint(_404) >> uint(2))][_404 & 3] + (-_83.y);
            float _412 = (-_271) + fp_c10_1._m0[int(uint(int(_406)) >> uint(2))][int(_406) & 3];
            float _414 = fma(_412, _412, fma(_410, _410, _408 * _408));
            float _416 = _408 * inversesqrt(_414);
            float _418 = _410 * inversesqrt(_414);
            float _420 = _412 * inversesqrt(_414);
            float _422 = _190 + _416;
            float _424 = _192 + _418;
            float _426 = _202 + _420;
            uint _428 = uint(int(uint(_400 + 6880) >> uint(2)));
            int _430 = int(_428) + 1;
            float _432 = inversesqrt(fma(_426, _426, fma(_424, _424, _422 * _422)));
            float _434 = _422 * _432;
            float _436 = _424 * _432;
            float _438 = _426 * _432;
            float _440 = fma(_155, _420, fma(_173, _418, _157 * _416));
            uint _442 = uint(int(uint(_400 + 8320) >> uint(2)));
            float _444 = max(_440, fp_c1_1._m0[0].y);
            float _446 = max(fma(_202, _438, fma(_192, _436, _190 * _434)), fp_c1_1._m0[0].y);
            float _448 = max(fma(_155, _438, fma(_173, _436, _157 * _434)), fp_c1_1._m0[0].y) * max(fma(_155, _438, fma(_173, _436, _157 * _434)), fp_c1_1._m0[0].y);
            uint _450 = uint(int(uint(_400 + 6400) >> uint(2)));
            int _452 = int(_450) + 1;
            uint _454 = uint(int(uint(_400 + 6408) >> uint(2)));
            float _456 = exp2(_446 * fma(_446, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _458 = fp_c10_1._m0[int(uint(_430) >> uint(2))][_430 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_428)) >> uint(2))][int(_428) & 3], -sqrt(_414), fp_c1_1._m0[0].w), 0.0, 1.0));
            bool _460 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_442)) >> uint(2))][int(_442) & 3]) != 0;
            float _462 = ((1.0 / (_303 + fma(_218, -_303, _218))) * (1.0 / (_303 + fma(_303, -_444, _444)))) * ((_291 * (1.0 / max(fma(_305, _448, -_448) + 1.0, fp_c1_1._m0[0].y))) * (_291 * (1.0 / max(fma(_305, _448, -_448) + 1.0, fp_c1_1._m0[0].y))));
            float _464 = _458;
            if (!_460)
            {
                _464 = 1.0;
            }
            float _466 = _464;
            if (_460)
            {
                uint _468 = uint(int(uint(_400 + 7840) >> uint(2)));
                int _470 = int(_468) + 1;
                uint _472 = uint(int(uint(_400 + 7848) >> uint(2)));
                uint _474 = uint(int(uint(_400 + 6888) >> uint(2)));
                float _476 = fp_c10_1._m0[int(uint(int(_474)) >> uint(2))][int(_474) & 3];
                int _478 = int(_474) + 1;
                _466 = exp2(fp_c10_1._m0[int(uint(_478) >> uint(2))][_478 & 3] * log2(clamp(((-_476) + fma(_420, -fp_c10_1._m0[int(uint(int(_472)) >> uint(2))][int(_472) & 3], fma(_418, -fp_c10_1._m0[int(uint(_470) >> uint(2))][_470 & 3], _416 * (-fp_c10_1._m0[int(uint(int(_468)) >> uint(2))][int(_468) & 3])))) * (1.0 / ((-_476) + 1.0)), 0.0, 1.0)));
            }
            _480 = _388 + 1;
            float _482 = (exp2(_458) * _466) * clamp(_440 + (-0.0), 0.0, 1.0);
            float _484 = fma(fp_c10_1._m0[int(uint(_452) >> uint(2))][_452 & 3] * _482, fma(_334 * _340, fp_c1_1._m0[1].x, ((_319 + fma(_319, -_456, _456)) * _462) * 0.079577468335628509521484375), _374);
            float _486 = fma(fp_c10_1._m0[int(uint(int(_450)) >> uint(2))][int(_450) & 3] * _482, fma(_334 * _327, fp_c1_1._m0[1].x, ((_317 + fma(_317, -_456, _456)) * _462) * 0.079577468335628509521484375), _376);
            float _488 = fma(fp_c10_1._m0[int(uint(int(_454)) >> uint(2))][int(_454) & 3] * _482, fma(_334 * _344, fp_c1_1._m0[1].x, ((_321 + fma(_321, -_456, _456)) * _462) * 0.079577468335628509521484375), _378);
            _386 = int(uint(_386) >> uint(8));
            _388 = _480;
            _374 = _484;
            _376 = _486;
            _378 = _488;
            _392 = _486;
            _394 = _484;
            _396 = _488;
        } while (!(_480 >= 4));
        _398 = false;
        _380 = _392;
        _382 = _394;
        _384 = _396;
        if ((_386 & 255) == 30)
        {
            float _490 = _83.y;
            float _492 = 1.0 / (fma(_271, fp_c10_1._m0[565].z, fma(_490, fp_c10_1._m0[565].y, _269 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _494 = 1.0 / fp_c10_1._m0[561].y;
            float _496 = _269 + (-fp_c10_1._m0[557].x);
            float _498 = _271 + (-fp_c10_1._m0[557].z);
            float _500 = _496 * fp_c10_1._m0[558].z;
            float _502 = _498 * fp_c10_1._m0[558].x;
            float _504 = fma(_498, _498, _496 * _496);
            float _506 = (-_269) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_494, fp_c10_1._m0[557].x);
            float _508 = (-_271) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_494, fp_c10_1._m0[557].z);
            float _510 = _506 * _506;
            float _512 = ((-float(_502 < _500)) + float(_502 > _500)) * fp_c10_1._m0[561].y;
            float _514 = sqrt(fma(_508, _508, _510)) * (-fp_c10_1._m0[558].y);
            float _516 = inversesqrt(fma(_508, _508, fma(_514, _514, _510)));
            float _518 = _506 * _516;
            float _520 = _514 * _516;
            float _522 = _508 * _516;
            float _524 = fma(_498, fp_c10_1._m0[558].z, _496 * fp_c10_1._m0[558].x);
            float _526 = _190 + _518;
            float _528 = _518 * _518;
            float _530 = _192 + _520;
            bool _532 = _524 > 0.0;
            bool _534 = fma(_498 * inversesqrt(_504), fp_c10_1._m0[558].z, (_496 * inversesqrt(_504)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _536 = inversesqrt(fma(_522, _522, _528));
            float _538 = _528;
            if (_532)
            {
                _538 = sqrt(_504);
            }
            float _540 = _202 + _522;
            float _542 = _538;
            if (!_532)
            {
                _542 = 1.0;
            }
            float _544 = inversesqrt(fma(_540, _540, fma(_530, _530, _526 * _526)));
            float _546 = _526 * _544;
            float _548 = _530 * _544;
            float _550 = _540 * _544;
            float _552 = fma(_155, _522, fma(_173, _520, _157 * _518));
            float _554 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_496, fma(_512, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_498 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_512 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_496, fma(_512, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_498 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_512 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _556 = max(_552, fp_c1_1._m0[0].y);
            float _558 = max(fma(_202, _550, fma(_192, _548, _190 * _546)), fp_c1_1._m0[0].y);
            float _560 = fma(_554, -_554, fp_c1_1._m0[0].w);
            if (!_534)
            {
                _560 = 1.0;
            }
            float _562 = max(fma(_155, _550, fma(_173, _548, _157 * _546)), fp_c1_1._m0[0].y) * max(fma(_155, _550, fma(_173, _548, _157 * _546)), fp_c1_1._m0[0].y);
            float _564 = _560;
            if (_534)
            {
                _564 = _560 * _560;
            }
            float _566 = clamp(fma(_524 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].w), 0.0, 1.0) * clamp(fma(_524 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].w), 0.0, 1.0);
            float _568 = exp2(_558 * fma(_558, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _570 = ((1.0 / (_303 + fma(_218, -_303, _218))) * (1.0 / (_303 + fma(_303, -_556, _556)))) * ((_291 * (1.0 / max(fma(_305, _562, -_562) + 1.0, fp_c1_1._m0[0].y))) * (_291 * (1.0 / max(fma(_305, _562, -_562) + 1.0, fp_c1_1._m0[0].y))));
            float _572 = (min(fma(_566, -_566, fp_c1_1._m0[0].w) * fma(_566, -_566, fp_c1_1._m0[0].w), _564) * (exp2(log2(clamp(fma(_542, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_522 * _536, -fp_c10_1._m0[558].z, (_518 * _536) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_552 + (-0.0), 0.0, 1.0);
            float _574 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_271, fp_c10_1._m0[562].z, fma(_490, fp_c10_1._m0[562].y, _269 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _492, 0.5, 0.5), (-fma((fma(_271, fp_c10_1._m0[563].z, fma(_490, fp_c10_1._m0[563].y, _269 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _492, 0.5, 0.5)) + 1.0)).z > fma((fma(_271, fp_c10_1._m0[564].z, fma(_490, fp_c10_1._m0[564].y, _269 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _492, 0.5, 0.5)) || (_524 <= 0.0));
            _380 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _572) * fma(_334 * _327, fp_c1_1._m0[1].x, ((_317 + fma(_317, -_568, _568)) * _570) * 0.079577468335628509521484375), _574, _392);
            _382 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _572) * fma(_334 * _340, fp_c1_1._m0[1].x, ((_319 + fma(_319, -_568, _568)) * _570) * 0.079577468335628509521484375), _574, _394);
            _384 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _572) * fma(_334 * _344, fp_c1_1._m0[1].x, ((_321 + fma(_321, -_568, _568)) * _570) * 0.079577468335628509521484375), _574, _396);
        }
    }
    float _576 = _269 + (-fp_c3_1._m0[11].w);
    float _578 = _83.y;
    float _580 = _271 + (-fp_c3_1._m0[13].w);
    float _582 = fma(_368, _380, _372 * (fma(_327 * 0.3183098733425140380859375, _348, ((_317 + fma(_317, -_315, _315)) * _325) * 0.079577468335628509521484375) * fma(_309, fp_c5_1._m0[5].x, _358)));
    float _584 = fma(_368, _382, _372 * (fma(_340 * 0.3183098733425140380859375, _348, ((_319 + fma(_319, -_315, _315)) * _325) * 0.079577468335628509521484375) * fma(_309, fp_c5_1._m0[5].y, _362)));
    float _586 = _578 + (-fp_c3_1._m0[12].w);
    float _588 = fma(_580, _580, fma(_586, _586, _576 * _576));
    float _590 = clamp(fma(fma(_271, fp_c5_1._m0[14].z, fma(_578, fp_c5_1._m0[14].y, _269 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _592 = fma(_368, _384, _372 * (fma(_344 * 0.3183098733425140380859375, _348, ((_321 + fma(_321, -_315, _315)) * _325) * 0.079577468335628509521484375) * fma(_309, fp_c5_1._m0[5].z, _360)));
    float _594 = clamp(fma(_372 * _368, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _596 = exp2(log2(clamp(sqrt(_588) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_580 * inversesqrt(_588), fp_c5_1._m0[23].z, fma(_586 * inversesqrt(_588), fp_c5_1._m0[23].y, (_576 * inversesqrt(_588)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _598 = fma((-_582) + fp_c5_1._m0[13].x, _590, _582);
    float _600 = fma((-_584) + fp_c5_1._m0[13].y, _590, _584);
    float _602 = fma((-_592) + fp_c5_1._m0[13].z, _590, _592);
    float _604 = clamp((-exp2((clamp(fma(sqrt(_588), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _100.x = fma((-_598) + fma(fma((_596 * fp_c7_1._m0[55].x) * _594, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _604, _598);
    _100.y = fma((-_600) + fma(fma((_596 * fp_c7_1._m0[55].y) * _594, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _604, _600);
    _100.z = fma((-_602) + fma(fma((_596 * fp_c7_1._m0[55].z) * _594, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _604, _602);
    _100.w = 1.0;
}


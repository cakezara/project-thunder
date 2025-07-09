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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
layout(binding = 5) uniform sampler2D fp_tex_tcb_22;
layout(binding = 6) uniform sampler2D fp_tex_tcb_24;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 9) uniform sampler2DArrayShadow fp_tex_tcb_2E;
layout(binding = 10) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 11) uniform sampler2D fp_tex_tcb_38;
layout(binding = 12) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _73;
layout(location = 4) in vec4 _75;
layout(location = 1) in vec4 _77;
layout(location = 3) in vec4 _79;
layout(location = 5) in vec4 _81;
layout(location = 8) in vec4 _83;
layout(location = 9) in vec4 _85;
layout(location = 10) in vec4 _87;
layout(location = 7) in vec4 _89;
layout(location = 6) in vec4 _91;
layout(location = 2) in vec4 _93;
layout(location = 0) out vec4 _96;
uint _6[12];

void main()
{
    bool _362 = false;
    float _103 = _73.x;
    float _105 = _73.y;
    vec2 _109 = texture(fp_tex_tcb_E, vec2(_103, _105)).xy;
    float _111 = _109.x;
    float _113 = _109.y;
    float _115 = _75.w;
    float _117 = _77.x;
    float _119 = _77.y;
    float _121 = _77.z;
    float _123 = _79.z;
    float _125 = _79.x;
    float _127 = _79.w;
    float _129 = _81.x;
    float _131 = _81.y;
    float _133 = _81.z;
    float _135 = _79.y;
    float _137 = float((abs(((-_115) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_115) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_115) > fp_c3_1._m0[58].y) ? (-1) : 0));
    bool _141 = _137 == 0.0;
    float _143 = inversesqrt(fma(_121, _121, fma(_119, _119, _117 * _117)));
    float _145 = _115;
    if (_141)
    {
        _145 = _83.w;
    }
    float _147 = _145;
    if (!_141)
    {
        _147 = _85.w;
    }
    float _149 = _121 * _143;
    float _151 = 0.0;
    if (_141)
    {
        _151 = _83.x;
    }
    float _153 = _117 * _143;
    float _155 = 0.0;
    float _157 = _151;
    if (_141)
    {
        _155 = _83.y;
    }
    float _159 = _119 * _143;
    float _161 = 0.0;
    float _163 = _155;
    if (_141)
    {
        _161 = _83.z;
    }
    float _165 = _161;
    if (!_141)
    {
        _157 = _85.x;
    }
    if (!_141)
    {
        _163 = _85.y;
    }
    if (!_141)
    {
        _165 = _85.z;
    }
    float _167 = 1.0 / _147;
    float _169 = sqrt(clamp((-fma(_111, _111, _113 * _113)) + 1.0, 0.0, 1.0));
    float _171 = fma(_153, _169, fma(_111, _125, _113 * (fma(_159, _123, -(_149 * _135)) * _127)));
    float _173 = fma(_159, _169, fma(_111, _135, _113 * (fma(_149, _125, -(_153 * _123)) * _127)));
    float _175 = fma(_149, _169, fma(_111, _123, _113 * (fma(_153, _135, -(_159 * _125)) * _127)));
    float _177 = inversesqrt(fma(_133, _133, fma(_131, _131, _129 * _129)));
    float _179 = max(texture(fp_tex_tcb_10, vec2(_103, _105)).x, fp_c1_1._m0[0].x);
    float _181 = inversesqrt(fma(_175, _175, fma(_173, _173, _171 * _171)));
    float _183 = _129 * (-_177);
    float _185 = _131 * (-_177);
    float _187 = _171 * _181;
    float _189 = _173 * _181;
    float _191 = _133 * (-_177);
    float _193 = _175 * _181;
    float _195 = 1.0 / (_89.w * gl_FragCoord.w);
    float _197 = fma(_193, _191, fma(_189, _185, _187 * _183));
    float _199 = max(_197, fp_c1_1._m0[0].y);
    float _201 = fma(_187 * (-_197), -2.0, -_183);
    float _203 = fma(_189 * (-_197), -2.0, -_185);
    float _205 = fma(_193 * (-_197), -2.0, -_191);
    float _207 = 1.0 / (_91.z * gl_FragCoord.w);
    vec2 _209 = texture(fp_tex_tcb_2C, vec2((_89.x * gl_FragCoord.w) * _195, (_89.y * gl_FragCoord.w) * _195)).xy;
    float _211 = _209.x;
    float _213 = 1.0 / max(abs(_205), max(abs(_201), abs(_203)));
    vec3 _217 = texture(fp_tex_tcb_A, vec2(_103, _105)).xyz;
    vec2 _219 = texture(fp_tex_tcb_38, vec2(_199, (-_179) + (-0.0))).xy;
    float _221 = _219.x;
    float _223 = _219.y;
    vec3 _225 = texture(fp_tex_tcb_36, vec4(_201 * _213, _203 * _213, _205 * _213, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_179 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _227 = texture(fp_tex_tcb_22, vec2(_87.x, _87.y)).xy;
    vec4 _230 = texture(fp_tex_tcb_24, vec2(_87.z, _87.w)).xyzw;
    float _232 = _230.w;
    vec3 _234 = texture(fp_tex_tcb_14, vec2(_103, _105)).xyz;
    float _236 = clamp(_89.z, 0.0, 1.0);
    float _238 = _183 + (-fp_c5_1._m0[23].x);
    float _240 = _185 + (-fp_c5_1._m0[23].y);
    float _242 = _189 * _193;
    float _244 = _191 + (-fp_c5_1._m0[23].z);
    float _246 = _187 * _189;
    float _248 = inversesqrt(fma(_244, _244, fma(_240, _240, _238 * _238)));
    float _250 = _238 * _248;
    float _252 = _193 * _193;
    float _254 = fma(_211, -_211, _209.y);
    float _256 = _244 * _248;
    float _258 = _75.x;
    float _260 = _240 * _248;
    float _262 = _187 * _193;
    float _264 = _75.z;
    float _266 = fma(_187, _187, -(_189 * _189));
    float _268 = fma(_217.x, -fp_c6_1._m0[9].x, _217.x);
    float _270 = fma(_179, 0.5, 0.5);
    float _272 = _179 * _179;
    float _274 = _272 * _272;
    float _276 = max(fma(_193, _256, fma(_189, _260, _187 * _250)), fp_c1_1._m0[0].y) * max(fma(_193, _256, fma(_189, _260, _187 * _250)), fp_c1_1._m0[0].y);
    float _278 = max(fma(_191, _256, fma(_185, _260, _183 * _250)), fp_c1_1._m0[0].y);
    float _280 = fma(_189, -fp_c5_1._m0[23].y, _187 * (-fp_c5_1._m0[23].x));
    float _282 = (_270 * 0.5) * _270;
    float _284 = max(fma(_193, -fp_c5_1._m0[23].z, _280), fp_c1_1._m0[0].y);
    int _287 = max(0, min(int(trunc((_264 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _289 = 1.0 / (_282 + fma(_199, -_282, _199));
    float _291 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].x;
    float _293 = exp2(_278 * fma(_278, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _295 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].y;
    float _297 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].z;
    float _299 = (_289 * (1.0 / (_282 + fma(_282, -_284, _284)))) * ((_272 * (1.0 / max(fma(_276, _274, -_276) + 1.0, fp_c1_1._m0[0].y))) * (_272 * (1.0 / max(fma(_276, _274, -_276) + 1.0, fp_c1_1._m0[0].y))));
    uint _302 = uint(int(uint((((int(uint(_287) >> uint(16)) * 20) << 16) + (((_287 & 65535) * 20) + max(0, min(int(trunc((_258 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _304 = fp_c10_1._m0[int(uint(int(_302)) >> uint(2))][int(_302) & 3];
    float _306 = fma(_268, -_291, _268);
    float _308 = fma(_217.y, -fp_c6_1._m0[9].x, _217.y);
    float _310 = _91.w;
    float _312 = fma(_217.z, -fp_c6_1._m0[9].x, _217.z);
    float _314 = fma(_308, -_295, _308);
    float _316 = fma(_312, -_297, _312);
    float _318 = ((_230.x * _232) * _310) * 32.0;
    float _320 = ((_230.y * _232) * _310) * 32.0;
    float _322 = clamp(_310 * clamp(fma(_227.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _324 = ((_230.z * _232) * _310) * 32.0;
    float _326 = fma(_306, _318, fma(_225.x, fma(_291, _221, _223), max(0.0, fma(_266, fp_c5_1._m0[31].x, (fma(_193, fp_c5_1._m0[25].z, fma(_189, fp_c5_1._m0[25].y, _187 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_262, fp_c5_1._m0[28].w, fma(_252, fp_c5_1._m0[28].z, fma(_242, fp_c5_1._m0[28].y, _246 * fp_c5_1._m0[28].x))))) * _306));
    float _328 = clamp(fma(_193, -fp_c5_1._m0[23].z, _280), 0.0, 1.0);
    float _330 = fma(_314, _320, fma(_225.y, fma(_295, _221, _223), max(0.0, fma(_266, fp_c5_1._m0[31].y, (fma(_193, fp_c5_1._m0[26].z, fma(_189, fp_c5_1._m0[26].y, _187 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_262, fp_c5_1._m0[29].w, fma(_252, fp_c5_1._m0[29].z, fma(_242, fp_c5_1._m0[29].y, _246 * fp_c5_1._m0[29].x))))) * _314));
    float _332 = fma(_316, _324, fma(_225.z, fma(_297, _221, _223), max(0.0, fma(_266, fp_c5_1._m0[31].z, (fma(_193, fp_c5_1._m0[27].z, fma(_189, fp_c5_1._m0[27].y, _187 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_262, fp_c5_1._m0[30].w, fma(_252, fp_c5_1._m0[30].z, fma(_242, fp_c5_1._m0[30].y, _246 * fp_c5_1._m0[30].x))))) * _316));
    float _334 = clamp((-_322) + 1.0, 0.0, 1.0);
    float _336 = clamp((-fma(_322, fp_c7_1._m0[37].w, clamp(_310 * clamp(fma(_227.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + (max((-max(min(_254 * (1.0 / fma((-_211) + _236, (-_211) + _236, _254)), 1.0), float(_236 <= _211))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_167 * _157, _167 * _163, float(int(clamp(uint(max(roundEven(_137), 0.0)), 0u, 65535u)))), _167 * _165))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_91.x * gl_FragCoord.w) * _207, (_91.y * gl_FragCoord.w) * _207)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    int _338 = floatBitsToInt(_304);
    float _340 = _330;
    float _342 = _332;
    float _344 = _326;
    float _346 = _326;
    float _348 = _332;
    float _350 = _330;
    if (floatBitsToInt(_304) != (-1))
    {
        int _352 = 0;
        float _356;
        float _358;
        float _360;
        int _442;
        do
        {
            int _354 = _338 & 255;
            _356 = _344;
            _358 = _340;
            _360 = _342;
            _362 = uint(_354) >= 30u;
            if (_362)
            {
                break;
            }
            int _364 = _354 << 4;
            uint _366 = uint(int(uint(_364 + 7360) >> uint(2)));
            int _368 = int(_366) + 1;
            uint _370 = uint(int(uint(_364 + 7368) >> uint(2)));
            float _372 = (-_258) + fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3];
            float _374 = fp_c10_1._m0[int(uint(_368) >> uint(2))][_368 & 3] + (-_75.y);
            float _376 = (-_264) + fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3];
            float _378 = fma(_376, _376, fma(_374, _374, _372 * _372));
            float _380 = _372 * inversesqrt(_378);
            float _382 = _374 * inversesqrt(_378);
            float _384 = _376 * inversesqrt(_378);
            float _386 = _183 + _380;
            float _388 = _185 + _382;
            float _390 = _191 + _384;
            uint _392 = uint(int(uint(_364 + 6880) >> uint(2)));
            int _394 = int(_392) + 1;
            float _396 = inversesqrt(fma(_390, _390, fma(_388, _388, _386 * _386)));
            float _398 = _386 * _396;
            float _400 = _388 * _396;
            float _402 = _390 * _396;
            float _404 = max(fma(_191, _402, fma(_185, _400, _183 * _398)), fp_c1_1._m0[0].y);
            uint _406 = uint(int(uint(_364 + 8320) >> uint(2)));
            float _408 = fma(_193, _384, fma(_189, _382, _187 * _380));
            float _410 = max(fma(_193, _402, fma(_189, _400, _187 * _398)), fp_c1_1._m0[0].y) * max(fma(_193, _402, fma(_189, _400, _187 * _398)), fp_c1_1._m0[0].y);
            float _412 = max(_408, fp_c1_1._m0[0].y);
            uint _414 = uint(int(uint(_364 + 6408) >> uint(2)));
            uint _416 = uint(int(uint(_364 + 6400) >> uint(2)));
            int _418 = int(_416) + 1;
            float _420 = exp2(_404 * fma(_404, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _422 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_406)) >> uint(2))][int(_406) & 3]) != 0;
            float _424 = (_289 * (1.0 / (_282 + fma(_282, -_412, _412)))) * ((_272 * (1.0 / max(fma(_274, _410, -_410) + 1.0, fp_c1_1._m0[0].y))) * (_272 * (1.0 / max(fma(_274, _410, -_410) + 1.0, fp_c1_1._m0[0].y))));
            float _426 = _424;
            if (!_422)
            {
                _426 = 1.0;
            }
            float _428 = _426;
            if (_422)
            {
                uint _430 = uint(int(uint(_364 + 7840) >> uint(2)));
                int _432 = int(_430) + 1;
                uint _434 = uint(int(uint(_364 + 7848) >> uint(2)));
                uint _436 = uint(int(uint(_364 + 6888) >> uint(2)));
                float _438 = fp_c10_1._m0[int(uint(int(_436)) >> uint(2))][int(_436) & 3];
                int _440 = int(_436) + 1;
                _428 = exp2(fp_c10_1._m0[int(uint(_440) >> uint(2))][_440 & 3] * log2(clamp(((-_438) + fma(_384, -fp_c10_1._m0[int(uint(int(_434)) >> uint(2))][int(_434) & 3], fma(_382, -fp_c10_1._m0[int(uint(_432) >> uint(2))][_432 & 3], _380 * (-fp_c10_1._m0[int(uint(int(_430)) >> uint(2))][int(_430) & 3])))) * (1.0 / ((-_438) + 1.0)), 0.0, 1.0)));
            }
            _442 = _352 + 1;
            float _444 = (exp2(fp_c10_1._m0[int(uint(_394) >> uint(2))][_394 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3], -sqrt(_378), fp_c1_1._m0[1].x), 0.0, 1.0))) * _428) * clamp(_408 + (-0.0), 0.0, 1.0);
            float _446 = fma(fp_c10_1._m0[int(uint(_418) >> uint(2))][_418 & 3] * _444, fma(_308, fp_c1_1._m0[1].y, ((_295 + fma(_295, -_420, _420)) * _424) * 0.079577468335628509521484375), _340);
            float _448 = fma(fp_c10_1._m0[int(uint(int(_414)) >> uint(2))][int(_414) & 3] * _444, fma(_312, fp_c1_1._m0[1].y, ((_297 + fma(_297, -_420, _420)) * _424) * 0.079577468335628509521484375), _342);
            float _450 = fma(fp_c10_1._m0[int(uint(int(_416)) >> uint(2))][int(_416) & 3] * _444, fma(_268, fp_c1_1._m0[1].y, ((_291 + fma(_291, -_420, _420)) * _424) * 0.079577468335628509521484375), _344);
            _338 = int(uint(_338) >> uint(8));
            _352 = _442;
            _340 = _446;
            _342 = _448;
            _344 = _450;
            _356 = _450;
            _358 = _446;
            _360 = _448;
        } while (!(_442 >= 4));
        _362 = false;
        _346 = _356;
        _348 = _360;
        _350 = _358;
        if ((_338 & 255) == 30)
        {
            float _452 = _75.y;
            float _454 = 1.0 / (fma(_264, fp_c10_1._m0[565].z, fma(_452, fp_c10_1._m0[565].y, _258 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _456 = 1.0 / fp_c10_1._m0[561].y;
            float _458 = (-_258) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_456, fp_c10_1._m0[557].x);
            float _460 = (-_264) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_456, fp_c10_1._m0[557].z);
            float _462 = _458 * _458;
            float _464 = sqrt(fma(_460, _460, _462)) * (-fp_c10_1._m0[558].y);
            float _466 = _258 + (-fp_c10_1._m0[557].x);
            float _468 = inversesqrt(fma(_460, _460, fma(_464, _464, _462)));
            float _470 = _458 * _468;
            float _472 = _464 * _468;
            float _474 = _460 * _468;
            float _476 = _264 + (-fp_c10_1._m0[557].z);
            float _478 = _183 + _470;
            float _480 = _185 + _472;
            float _482 = _191 + _474;
            float _484 = _476 * fp_c10_1._m0[558].x;
            float _486 = _466 * fp_c10_1._m0[558].z;
            float _488 = inversesqrt(fma(_482, _482, fma(_480, _480, _478 * _478)));
            float _490 = _478 * _488;
            float _492 = _480 * _488;
            float _494 = _482 * _488;
            float _496 = fma(_193, _474, fma(_189, _472, _187 * _470));
            float _498 = fma(_476, _476, _466 * _466);
            float _500 = ((-float(_484 < _486)) + float(_484 > _486)) * fp_c10_1._m0[561].y;
            float _502 = fma(_476, fp_c10_1._m0[558].z, _466 * fp_c10_1._m0[558].x);
            float _504 = inversesqrt(fma(_474, _474, _470 * _470));
            bool _506 = _502 > 0.0;
            float _508 = max(fma(_191, _494, fma(_185, _492, _183 * _490)), fp_c1_1._m0[0].y);
            float _510 = max(fma(_193, _494, fma(_189, _492, _187 * _490)), fp_c1_1._m0[0].y) * max(fma(_193, _494, fma(_189, _492, _187 * _490)), fp_c1_1._m0[0].y);
            float _512 = _476;
            float _514 = _510;
            if (_506)
            {
                _512 = sqrt(_498);
            }
            float _516 = _512;
            if (!_506)
            {
                _516 = 1.0;
            }
            float _518 = max(_496, fp_c1_1._m0[0].y);
            bool _520 = fma(_476 * inversesqrt(_498), fp_c10_1._m0[558].z, (_466 * inversesqrt(_498)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _522 = clamp(fma(_502 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_502 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _524 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_466, fma(_500, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_476 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_500 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_466, fma(_500, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_476 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_500 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            if (!_520)
            {
                _514 = 1.0;
            }
            float _526 = _514;
            if (_520)
            {
                _526 = fma(_524, -_524, fp_c1_1._m0[1].x) * fma(_524, -_524, fp_c1_1._m0[1].x);
            }
            float _528 = exp2(_508 * fma(_508, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _530 = (_289 * (1.0 / (_282 + fma(_282, -_518, _518)))) * ((_272 * (1.0 / max(fma(_274, _510, -_510) + 1.0, fp_c1_1._m0[0].y))) * (_272 * (1.0 / max(fma(_274, _510, -_510) + 1.0, fp_c1_1._m0[0].y))));
            float _532 = (min(fma(_522, -_522, fp_c1_1._m0[1].x) * fma(_522, -_522, fp_c1_1._m0[1].x), _526) * (exp2(log2(clamp(fma(_516, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_474 * _504, -fp_c10_1._m0[558].z, (_470 * _504) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_496 + (-0.0), 0.0, 1.0);
            float _534 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_264, fp_c10_1._m0[562].z, fma(_452, fp_c10_1._m0[562].y, _258 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _454, 0.5, 0.5), (-fma((fma(_264, fp_c10_1._m0[563].z, fma(_452, fp_c10_1._m0[563].y, _258 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _454, 0.5, 0.5)) + 1.0)).z > fma((fma(_264, fp_c10_1._m0[564].z, fma(_452, fp_c10_1._m0[564].y, _258 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _454, 0.5, 0.5)) || (_502 <= 0.0));
            _346 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _532) * fma(_268, fp_c1_1._m0[1].y, ((_291 + fma(_291, -_528, _528)) * _530) * 0.079577468335628509521484375), _534, _356);
            _348 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _532) * fma(_312, fp_c1_1._m0[1].y, ((_297 + fma(_297, -_528, _528)) * _530) * 0.079577468335628509521484375), _534, _360);
            _350 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _532) * fma(_308, fp_c1_1._m0[1].y, ((_295 + fma(_295, -_528, _528)) * _530) * 0.079577468335628509521484375), _534, _358);
        }
    }
    float _536 = _258 + (-fp_c3_1._m0[11].w);
    float _538 = _75.y;
    float _540 = _264 + (-fp_c3_1._m0[13].w);
    float _542 = fma(_234.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_334, _346, _336 * (fma(_299 * (_291 + fma(_291, -_293, _293)), fp_c1_1._m0[0].w, _268 * 0.3183098733425140380859375) * fma(_328, fp_c5_1._m0[5].x, _318))));
    float _544 = _538 + (-fp_c3_1._m0[12].w);
    float _546 = fma(_540, _540, fma(_544, _544, _536 * _536));
    float _548 = clamp(fma(_336 * _334, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _550 = clamp(fma(fma(_264, fp_c5_1._m0[14].z, fma(_538, fp_c5_1._m0[14].y, _258 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _552 = fma(_234.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_334, _348, _336 * (fma(_299 * (_297 + fma(_297, -_293, _293)), fp_c1_1._m0[0].w, _312 * 0.3183098733425140380859375) * fma(_328, fp_c5_1._m0[5].z, _324))));
    float _554 = exp2(log2(clamp(sqrt(_546) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_540 * inversesqrt(_546), fp_c5_1._m0[23].z, fma(_544 * inversesqrt(_546), fp_c5_1._m0[23].y, (_536 * inversesqrt(_546)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _556 = fma(_234.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_334, _350, _336 * (fma(_299 * (_295 + fma(_295, -_293, _293)), fp_c1_1._m0[0].w, _308 * 0.3183098733425140380859375) * fma(_328, fp_c5_1._m0[5].y, _320))));
    float _558 = fma((-_542) + fp_c5_1._m0[13].x, _550, _542);
    float _560 = fma((-_556) + fp_c5_1._m0[13].y, _550, _556);
    float _562 = fma((-_552) + fp_c5_1._m0[13].z, _550, _552);
    float _564 = clamp((-exp2((clamp(fma(sqrt(_546), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _96.x = fma((-_558) + fma(fma((_554 * fp_c7_1._m0[55].x) * _548, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _564, _558);
    _96.y = fma((-_560) + fma(fma((_554 * fp_c7_1._m0[55].y) * _548, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _564, _560);
    _96.z = fma((-_562) + fma(fma((_554 * fp_c7_1._m0[55].z) * _548, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _564, _562);
    _96.w = clamp(texture(fp_tex_tcb_8, vec2(_103, _105)).x * _93.w, 0.0, 1.0);
}


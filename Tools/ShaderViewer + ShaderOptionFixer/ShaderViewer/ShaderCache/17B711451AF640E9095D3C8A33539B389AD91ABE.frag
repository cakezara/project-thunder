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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_22;
layout(binding = 4) uniform sampler2D fp_tex_tcb_24;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 7) uniform sampler2DArrayShadow fp_tex_tcb_2E;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _69;
layout(location = 4) in vec4 _71;
layout(location = 1) in vec4 _73;
layout(location = 3) in vec4 _75;
layout(location = 5) in vec4 _77;
layout(location = 10) in vec4 _79;
layout(location = 8) in vec4 _81;
layout(location = 9) in vec4 _83;
layout(location = 6) in vec4 _85;
layout(location = 7) in vec4 _87;
layout(location = 2) in vec4 _89;
layout(location = 0) out vec4 _92;
uint _6[12];

void main()
{
    bool _360 = false;
    float _99 = _69.x;
    float _101 = _69.y;
    vec2 _105 = texture(fp_tex_tcb_E, vec2(_99, _101)).xy;
    float _107 = _105.x;
    float _109 = _105.y;
    float _111 = _71.w;
    float _113 = _73.x;
    float _115 = _73.y;
    float _117 = _73.z;
    float _119 = _75.x;
    float _121 = _75.w;
    float _123 = _77.x;
    float _125 = _77.y;
    float _127 = _75.y;
    float _129 = _75.z;
    float _131 = float((abs(((-_111) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_111) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_111) > fp_c3_1._m0[58].y) ? (-1) : 0));
    float _133 = inversesqrt(fma(_117, _117, fma(_115, _115, _113 * _113)));
    bool _137 = _131 == 0.0;
    float _139 = _117 * _133;
    float _141 = 0.0;
    if (_137)
    {
        _141 = _81.w;
    }
    float _143 = _113 * _133;
    float _145 = _141;
    if (!_137)
    {
        _145 = _83.w;
    }
    float _147 = _115 * _133;
    float _149 = 0.0;
    if (_137)
    {
        _149 = _81.x;
    }
    float _151 = 0.0;
    float _153 = _149;
    if (_137)
    {
        _151 = _81.y;
    }
    float _155 = 0.0;
    float _157 = _151;
    if (_137)
    {
        _155 = _81.z;
    }
    float _159 = _155;
    if (!_137)
    {
        _153 = _83.x;
    }
    if (!_137)
    {
        _157 = _83.y;
    }
    if (!_137)
    {
        _159 = _83.z;
    }
    float _161 = 1.0 / _145;
    float _163 = _77.z;
    float _165 = sqrt(clamp((-fma(_107, _107, _109 * _109)) + 1.0, 0.0, 1.0));
    float _167 = fma(_143, _165, fma(_119, _107, _109 * (fma(_147, _129, -(_139 * _127)) * _121)));
    float _169 = fma(_139, _165, fma(_129, _107, _109 * (fma(_143, _127, -(_147 * _119)) * _121)));
    float _171 = 1.0 / (_85.z * gl_FragCoord.w);
    float _173 = fma(_147, _165, fma(_127, _107, _109 * (fma(_139, _119, -(_143 * _129)) * _121)));
    float _175 = inversesqrt(fma(_163, _163, fma(_125, _125, _123 * _123)));
    float _177 = inversesqrt(fma(_169, _169, fma(_173, _173, _167 * _167)));
    float _179 = _123 * (-_175);
    float _181 = _125 * (-_175);
    float _183 = _163 * (-_175);
    float _185 = _167 * _177;
    float _187 = _173 * _177;
    float _189 = _169 * _177;
    float _191 = 1.0 / (_87.w * gl_FragCoord.w);
    float _193 = fma(_189, _183, fma(_187, _181, _185 * _179));
    float _195 = max(texture(fp_tex_tcb_10, vec2(_99, _101)).x, fp_c1_1._m0[0].x);
    float _197 = fma(_187 * (-_193), -2.0, -_181);
    float _199 = fma(_185 * (-_193), -2.0, -_179);
    float _201 = fma(_189 * (-_193), -2.0, -_183);
    vec2 _203 = texture(fp_tex_tcb_2C, vec2((_87.x * gl_FragCoord.w) * _191, (_87.y * gl_FragCoord.w) * _191)).xy;
    float _205 = _203.x;
    float _207 = 1.0 / max(abs(_201), max(abs(_199), abs(_197)));
    float _209 = max(_193, fp_c1_1._m0[0].y);
    vec3 _213 = texture(fp_tex_tcb_A, vec2(_99, _101)).xyz;
    vec2 _215 = texture(fp_tex_tcb_38, vec2(_209, (-_195) + (-0.0))).xy;
    float _217 = _215.x;
    float _219 = _215.y;
    vec3 _221 = texture(fp_tex_tcb_36, vec4(_199 * _207, _197 * _207, _201 * _207, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_195 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _223 = texture(fp_tex_tcb_22, vec2(_79.x, _79.y)).xy;
    vec4 _226 = texture(fp_tex_tcb_24, vec2(_79.z, _79.w)).xyzw;
    float _228 = _226.w;
    float _230 = _179 + (-fp_c5_1._m0[23].x);
    float _232 = _181 + (-fp_c5_1._m0[23].y);
    float _234 = _183 + (-fp_c5_1._m0[23].z);
    float _236 = _189 * _189;
    float _238 = inversesqrt(fma(_234, _234, fma(_232, _232, _230 * _230)));
    float _240 = _230 * _238;
    float _242 = _232 * _238;
    float _244 = _234 * _238;
    float _246 = _187 * _189;
    float _248 = _71.z;
    float _250 = clamp(_87.z, 0.0, 1.0);
    float _252 = max(fma(_183, _244, fma(_181, _242, _179 * _240)), fp_c1_1._m0[0].y);
    float _254 = _185 * _187;
    float _256 = _71.x;
    float _258 = fma(_205, -_205, _203.y);
    float _260 = _185 * _189;
    float _262 = fma(_185, _185, -(_187 * _187));
    float _264 = max(fma(_189, _244, fma(_187, _242, _185 * _240)), fp_c1_1._m0[0].y) * max(fma(_189, _244, fma(_187, _242, _185 * _240)), fp_c1_1._m0[0].y);
    float _266 = _213.x + fp_c6_1._m0[83].x;
    float _268 = fma(_187, -fp_c5_1._m0[23].y, _185 * (-fp_c5_1._m0[23].x));
    float _270 = _195 * _195;
    float _272 = _213.y + fp_c6_1._m0[83].y;
    float _274 = max(fma(_189, -fp_c5_1._m0[23].z, _268), fp_c1_1._m0[0].y);
    int _277 = max(0, min(int(trunc((_248 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _279 = fma(_195, 0.5, 0.5);
    float _281 = clamp(fma(_189, -fp_c5_1._m0[23].z, _268), 0.0, 1.0);
    float _283 = (_279 * 0.5) * _279;
    float _285 = exp2(_252 * fma(_252, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _287 = _213.z + fp_c6_1._m0[83].z;
    float _289 = 1.0 / (_283 + fma(_209, -_283, _209));
    float _291 = fma(_266, -fp_c6_1._m0[9].x, _266);
    float _293 = fma(_272, -fp_c6_1._m0[9].x, _272);
    float _295 = fma(_266 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    uint _298 = uint(int(uint((((int(uint(_277) >> uint(16)) * 20) << 16) + (((_277 & 65535) * 20) + max(0, min(int(trunc((_256 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _300 = fp_c10_1._m0[int(uint(int(_298)) >> uint(2))][int(_298) & 3];
    float _302 = fma(_287 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _304 = fma(_272 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _306 = (_289 * (1.0 / (_283 + fma(_283, -_274, _274)))) * ((_270 * (1.0 / max(fma(_264, _270 * _270, -_264) + 1.0, fp_c1_1._m0[0].y))) * (_270 * (1.0 / max(fma(_264, _270 * _270, -_264) + 1.0, fp_c1_1._m0[0].y))));
    float _308 = fma(_295, -_291, _291);
    float _310 = _85.w;
    float _312 = fma(_287, -fp_c6_1._m0[9].x, _287);
    float _314 = fma(_304, -_293, _293);
    float _316 = fma(_302, -_312, _312);
    float _318 = clamp(_310 * clamp(fma(_223.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _320 = ((_226.y * _228) * _310) * 32.0;
    float _322 = ((_226.x * _228) * _310) * 32.0;
    float _324 = ((_226.z * _228) * _310) * 32.0;
    float _326 = clamp((-_318) + 1.0, 0.0, 1.0);
    float _328 = fma(_314, _320, fma(_221.y, fma(_304, _217, _219), max(0.0, fma(_262, fp_c5_1._m0[31].y, (fma(_189, fp_c5_1._m0[26].z, fma(_187, fp_c5_1._m0[26].y, _185 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_260, fp_c5_1._m0[29].w, fma(_236, fp_c5_1._m0[29].z, fma(_246, fp_c5_1._m0[29].y, _254 * fp_c5_1._m0[29].x))))) * _314));
    float _330 = fma(_308, _322, fma(_221.x, fma(_295, _217, _219), max(0.0, fma(_262, fp_c5_1._m0[31].x, (fma(_189, fp_c5_1._m0[25].z, fma(_187, fp_c5_1._m0[25].y, _185 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_260, fp_c5_1._m0[28].w, fma(_236, fp_c5_1._m0[28].z, fma(_246, fp_c5_1._m0[28].y, _254 * fp_c5_1._m0[28].x))))) * _308));
    float _332 = fma(_316, _324, fma(_221.z, fma(_302, _217, _219), max(0.0, fma(_262, fp_c5_1._m0[31].z, (fma(_189, fp_c5_1._m0[27].z, fma(_187, fp_c5_1._m0[27].y, _185 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_260, fp_c5_1._m0[30].w, fma(_236, fp_c5_1._m0[30].z, fma(_246, fp_c5_1._m0[30].y, _254 * fp_c5_1._m0[30].x))))) * _316));
    float _334 = clamp((-fma(_318, fp_c7_1._m0[37].w, clamp(_310 * clamp(fma(_223.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + (max((-max(min(_258 * (1.0 / fma((-_205) + _250, (-_205) + _250, _258)), 1.0), float(_250 <= _205))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_161 * _153, _161 * _157, float(int(clamp(uint(max(roundEven(_131), 0.0)), 0u, 65535u)))), _161 * _159))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_85.x * gl_FragCoord.w) * _171, (_85.y * gl_FragCoord.w) * _171)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    int _336 = floatBitsToInt(_300);
    float _338 = _332;
    float _340 = _330;
    float _342 = _328;
    float _344 = _332;
    float _346 = _328;
    float _348 = _330;
    if (floatBitsToInt(_300) != (-1))
    {
        int _350 = 0;
        float _354;
        float _356;
        float _358;
        int _442;
        do
        {
            int _352 = _336 & 255;
            _354 = _340;
            _356 = _342;
            _358 = _338;
            _360 = uint(_352) >= 30u;
            if (_360)
            {
                break;
            }
            int _362 = _352 << 4;
            uint _364 = uint(int(uint(_362 + 7360) >> uint(2)));
            int _366 = int(_364) + 1;
            uint _368 = uint(int(uint(_362 + 7368) >> uint(2)));
            float _370 = (-_256) + fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3];
            float _372 = fp_c10_1._m0[int(uint(_366) >> uint(2))][_366 & 3] + (-_71.y);
            float _374 = (-_248) + fp_c10_1._m0[int(uint(int(_368)) >> uint(2))][int(_368) & 3];
            float _376 = fma(_374, _374, fma(_372, _372, _370 * _370));
            float _378 = _370 * inversesqrt(_376);
            float _380 = _372 * inversesqrt(_376);
            float _382 = _374 * inversesqrt(_376);
            float _384 = _179 + _378;
            float _386 = _181 + _380;
            float _388 = _183 + _382;
            float _390 = inversesqrt(fma(_388, _388, fma(_386, _386, _384 * _384)));
            float _392 = _384 * _390;
            float _394 = _386 * _390;
            float _396 = _388 * _390;
            float _398 = fma(_189, _382, fma(_187, _380, _185 * _378));
            float _400 = max(fma(_183, _396, fma(_181, _394, _179 * _392)), fp_c1_1._m0[0].y);
            float _402 = max(_398, fp_c1_1._m0[0].y);
            float _404 = max(fma(_189, _396, fma(_187, _394, _185 * _392)), fp_c1_1._m0[0].y) * max(fma(_189, _396, fma(_187, _394, _185 * _392)), fp_c1_1._m0[0].y);
            uint _406 = uint(int(uint(_362 + 6880) >> uint(2)));
            int _408 = int(_406) + 1;
            uint _410 = uint(int(uint(_362 + 8320) >> uint(2)));
            float _412 = exp2(_400 * fma(_400, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _414 = (_289 * (1.0 / (_283 + fma(_283, -_402, _402)))) * ((_270 * (1.0 / max(fma(_270 * _270, _404, -_404) + 1.0, fp_c1_1._m0[0].y))) * (_270 * (1.0 / max(fma(_270 * _270, _404, -_404) + 1.0, fp_c1_1._m0[0].y))));
            float _416 = (_304 + fma(_304, -_412, _412)) * _414;
            bool _418 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_410)) >> uint(2))][int(_410) & 3]) != 0;
            uint _420 = uint(int(uint(_362 + 6408) >> uint(2)));
            uint _422 = uint(int(uint(_362 + 6400) >> uint(2)));
            int _424 = int(_422) + 1;
            float _426 = _416;
            if (!_418)
            {
                _426 = 1.0;
            }
            float _428 = _426;
            if (_418)
            {
                uint _430 = uint(int(uint(_362 + 7840) >> uint(2)));
                int _432 = int(_430) + 1;
                uint _434 = uint(int(uint(_362 + 7848) >> uint(2)));
                uint _436 = uint(int(uint(_362 + 6888) >> uint(2)));
                float _438 = fp_c10_1._m0[int(uint(int(_436)) >> uint(2))][int(_436) & 3];
                int _440 = int(_436) + 1;
                _428 = exp2(fp_c10_1._m0[int(uint(_440) >> uint(2))][_440 & 3] * log2(clamp(((-_438) + fma(_382, -fp_c10_1._m0[int(uint(int(_434)) >> uint(2))][int(_434) & 3], fma(_380, -fp_c10_1._m0[int(uint(_432) >> uint(2))][_432 & 3], _378 * (-fp_c10_1._m0[int(uint(int(_430)) >> uint(2))][int(_430) & 3])))) * (1.0 / ((-_438) + 1.0)), 0.0, 1.0)));
            }
            _442 = _350 + 1;
            float _444 = (exp2(fp_c10_1._m0[int(uint(_408) >> uint(2))][_408 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_406)) >> uint(2))][int(_406) & 3], -sqrt(_376), fp_c1_1._m0[1].x), 0.0, 1.0))) * _428) * clamp(_398 + (-0.0), 0.0, 1.0);
            float _446 = fma(fp_c10_1._m0[int(uint(int(_420)) >> uint(2))][int(_420) & 3] * _444, fma(_312, fp_c1_1._m0[1].y, ((_302 + fma(_302, -_412, _412)) * _414) * 0.079577468335628509521484375), _338);
            float _448 = fma(fp_c10_1._m0[int(uint(int(_422)) >> uint(2))][int(_422) & 3] * _444, fma(_291, fp_c1_1._m0[1].y, ((_295 + fma(_295, -_412, _412)) * _414) * 0.079577468335628509521484375), _340);
            float _450 = fma(fp_c10_1._m0[int(uint(_424) >> uint(2))][_424 & 3] * _444, fma(_293, fp_c1_1._m0[1].y, _416 * 0.079577468335628509521484375), _342);
            _336 = int(uint(_336) >> uint(8));
            _350 = _442;
            _338 = _446;
            _340 = _448;
            _342 = _450;
            _354 = _448;
            _356 = _450;
            _358 = _446;
        } while (!(_442 >= 4));
        _360 = false;
        _344 = _358;
        _346 = _356;
        _348 = _354;
        if ((_336 & 255) == 30)
        {
            float _452 = 1.0 / fp_c10_1._m0[561].y;
            float _454 = _248 + (-fp_c10_1._m0[557].z);
            float _456 = (-_256) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_452, fp_c10_1._m0[557].x);
            float _458 = (-_248) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_452, fp_c10_1._m0[557].z);
            float _460 = _456 * _456;
            float _462 = _256 + (-fp_c10_1._m0[557].x);
            float _464 = sqrt(fma(_458, _458, _460)) * (-fp_c10_1._m0[558].y);
            float _466 = inversesqrt(fma(_458, _458, fma(_464, _464, _460)));
            float _468 = _462 * fp_c10_1._m0[558].z;
            float _470 = _456 * _466;
            float _472 = _464 * _466;
            float _474 = _458 * _466;
            float _476 = _179 + _470;
            float _478 = _181 + _472;
            float _480 = _183 + _474;
            float _482 = _454 * fp_c10_1._m0[558].x;
            float _484 = inversesqrt(fma(_480, _480, fma(_478, _478, _476 * _476)));
            float _486 = _71.y;
            float _488 = _476 * _484;
            float _490 = _478 * _484;
            float _492 = ((-float(_482 < _468)) + float(_482 > _468)) * fp_c10_1._m0[561].y;
            float _494 = fma(_454, _454, _462 * _462);
            float _496 = 1.0 / (fma(_248, fp_c10_1._m0[565].z, fma(_486, fp_c10_1._m0[565].y, _256 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _498 = fma(_454, fp_c10_1._m0[558].z, _462 * fp_c10_1._m0[558].x);
            bool _500 = _498 > 0.0;
            float _502 = fma(_189, _474, fma(_187, _472, _185 * _470));
            float _504 = _480 * _484;
            float _506 = inversesqrt(fma(_474, _474, _470 * _470));
            float _508 = max(fma(_183, _504, fma(_181, _490, _179 * _488)), fp_c1_1._m0[0].y);
            float _510 = max(fma(_189, _504, fma(_187, _490, _185 * _488)), fp_c1_1._m0[0].y) * max(fma(_189, _504, fma(_187, _490, _185 * _488)), fp_c1_1._m0[0].y);
            float _512 = _474;
            if (_500)
            {
                _512 = sqrt(_494);
            }
            float _514 = _512;
            if (!_500)
            {
                _514 = 1.0;
            }
            bool _516 = fma(_454 * inversesqrt(_494), fp_c10_1._m0[558].z, (_462 * inversesqrt(_494)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _518 = max(_502, fp_c1_1._m0[0].y);
            float _520 = clamp(fma(_498 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_498 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _522 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_462, fma(_492, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_454 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_492 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_462, fma(_492, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_454 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_492 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _524 = log2(clamp(fma(_514, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _526 = _524;
            if (!_516)
            {
                _526 = 1.0;
            }
            float _528 = _526;
            if (_516)
            {
                _528 = fma(_522, -_522, fp_c1_1._m0[1].x) * fma(_522, -_522, fp_c1_1._m0[1].x);
            }
            float _530 = exp2(_508 * fma(_508, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _532 = (min(fma(_520, -_520, fp_c1_1._m0[1].x) * fma(_520, -_520, fp_c1_1._m0[1].x), _528) * (exp2(_524) * exp2(log2(clamp((fma(_474 * _506, -fp_c10_1._m0[558].z, (_470 * _506) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_502 + (-0.0), 0.0, 1.0);
            float _534 = (_289 * (1.0 / (_283 + fma(_283, -_518, _518)))) * ((_270 * (1.0 / max(fma(_270 * _270, _510, -_510) + 1.0, fp_c1_1._m0[0].y))) * (_270 * (1.0 / max(fma(_270 * _270, _510, -_510) + 1.0, fp_c1_1._m0[0].y))));
            float _536 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_248, fp_c10_1._m0[562].z, fma(_486, fp_c10_1._m0[562].y, _256 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _496, 0.5, 0.5), (-fma((fma(_248, fp_c10_1._m0[563].z, fma(_486, fp_c10_1._m0[563].y, _256 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _496, 0.5, 0.5)) + 1.0)).z > fma((fma(_248, fp_c10_1._m0[564].z, fma(_486, fp_c10_1._m0[564].y, _256 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _496, 0.5, 0.5)) || (_498 <= 0.0));
            _344 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _532) * fma(_312, fp_c1_1._m0[1].y, ((_302 + fma(_302, -_530, _530)) * _534) * 0.079577468335628509521484375), _536, _358);
            _346 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _532) * fma(_293, fp_c1_1._m0[1].y, ((_304 + fma(_304, -_530, _530)) * _534) * 0.079577468335628509521484375), _536, _356);
            _348 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _532) * fma(_291, fp_c1_1._m0[1].y, ((_295 + fma(_295, -_530, _530)) * _534) * 0.079577468335628509521484375), _536, _354);
        }
    }
    float _538 = _256 + (-fp_c3_1._m0[11].w);
    float _540 = _71.y;
    float _542 = _248 + (-fp_c3_1._m0[13].w);
    float _544 = clamp(_89.w, 0.0, 1.0);
    float _546 = _540 + (-fp_c3_1._m0[12].w);
    float _548 = fma(_326, _344, _334 * (fma(_306 * (_302 + fma(_302, -_285, _285)), fp_c1_1._m0[0].w, _312 * 0.3183098733425140380859375) * fma(_281, fp_c5_1._m0[5].z, _324)));
    float _550 = fma(_542, _542, fma(_546, _546, _538 * _538));
    float _552 = clamp(fma(_334 * _326, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _554 = fma(_326, _346, _334 * (fma(_306 * (_304 + fma(_304, -_285, _285)), fp_c1_1._m0[0].w, _293 * 0.3183098733425140380859375) * fma(_281, fp_c5_1._m0[5].y, _320)));
    float _556 = fma(_326, _348, _334 * (fma(_306 * (_295 + fma(_295, -_285, _285)), fp_c1_1._m0[0].w, _291 * 0.3183098733425140380859375) * fma(_281, fp_c5_1._m0[5].x, _322)));
    float _558 = exp2(log2(clamp(sqrt(_550) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_542 * inversesqrt(_550), fp_c5_1._m0[23].z, fma(_546 * inversesqrt(_550), fp_c5_1._m0[23].y, (_538 * inversesqrt(_550)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _560 = clamp(fma(fma(_248, fp_c5_1._m0[14].z, fma(_540, fp_c5_1._m0[14].y, _256 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _562 = fma((-_556) + fp_c5_1._m0[13].x, _560, _556);
    float _564 = fma((-_554) + fp_c5_1._m0[13].y, _560, _554);
    float _566 = fma((-_548) + fp_c5_1._m0[13].z, _560, _548);
    float _568 = clamp((-exp2((clamp(fma(sqrt(_550), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _92.x = fma(_568, (-_562) + fma(fma((_558 * fp_c7_1._m0[55].x) * _552, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _562);
    _92.y = fma(_568, (-_564) + fma(fma((_558 * fp_c7_1._m0[55].y) * _552, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _564);
    _92.z = fma(_568, (-_566) + fma(fma((_558 * fp_c7_1._m0[55].z) * _552, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _566);
    _92.w = fma(_568, -_544, _544);
}


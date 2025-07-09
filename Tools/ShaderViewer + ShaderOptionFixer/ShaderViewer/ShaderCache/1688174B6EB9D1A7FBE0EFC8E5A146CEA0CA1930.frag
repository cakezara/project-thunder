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
layout(location = 3) in vec4 _71;
layout(location = 1) in vec4 _73;
layout(location = 4) in vec4 _75;
layout(location = 5) in vec4 _77;
layout(location = 9) in vec4 _79;
layout(location = 6) in vec4 _81;
layout(location = 7) in vec4 _83;
layout(location = 8) in vec4 _85;
layout(location = 2) in vec4 _87;
layout(location = 0) out vec4 _90;
uint _6[12];

void main()
{
    bool _334 = false;
    float _97 = _69.x;
    float _99 = _69.y;
    float _101 = _71.w;
    float _103 = _73.x;
    float _105 = _73.y;
    float _107 = _75.x;
    float _109 = _75.y;
    float _111 = _73.z;
    float _113 = _75.z;
    float _115 = 1.0 / (_77.z * gl_FragCoord.w);
    float _117 = float((abs(((-_101) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_101) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_101) > fp_c3_1._m0[58].y) ? (-1) : 0));
    bool _121 = _117 == 0.0;
    float _123 = inversesqrt(fma(_111, _111, fma(_105, _105, _103 * _103)));
    float _125 = inversesqrt(fma(_113, _113, fma(_109, _109, _107 * _107)));
    float _127 = _101;
    if (_121)
    {
        _127 = _83.w;
    }
    float _129 = _127;
    if (!_121)
    {
        _129 = _85.w;
    }
    float _131 = 0.0;
    if (_121)
    {
        _131 = _83.z;
    }
    float _133 = 0.0;
    float _135 = _131;
    if (_121)
    {
        _133 = _83.x;
    }
    float _137 = 0.0;
    float _139 = _133;
    if (_121)
    {
        _137 = _83.y;
    }
    float _141 = _137;
    if (!_121)
    {
        _135 = _85.z;
    }
    if (!_121)
    {
        _139 = _85.x;
    }
    if (!_121)
    {
        _141 = _85.y;
    }
    float _143 = _103 * _123;
    float _145 = _107 * (-_125);
    float _147 = _105 * _123;
    float _149 = _109 * (-_125);
    float _151 = _111 * _123;
    float _153 = _113 * (-_125);
    float _155 = fma(_151, _153, fma(_147, _149, _143 * _145));
    float _157 = 1.0 / _129;
    float _159 = max(_155, fp_c1_1._m0[0].y);
    float _161 = fma(_143 * (-_155), -2.0, -_145);
    float _163 = 1.0 / (_81.w * gl_FragCoord.w);
    float _165 = fma(_147 * (-_155), -2.0, -_149);
    float _167 = fma(_151 * (-_155), -2.0, -_153);
    float _169 = 1.0 / max(abs(_167), max(abs(_161), abs(_165)));
    float _171 = _143 * _147;
    vec2 _175 = texture(fp_tex_tcb_2C, vec2((_81.x * gl_FragCoord.w) * _163, (_81.y * gl_FragCoord.w) * _163)).xy;
    float _177 = _175.x;
    float _179 = max(texture(fp_tex_tcb_10, vec2(_97, _99)).x, fp_c1_1._m0[0].x);
    vec3 _183 = texture(fp_tex_tcb_A, vec2(_97, _99)).xyz;
    float _185 = _183.x;
    float _187 = _183.y;
    float _189 = _183.z;
    vec2 _191 = texture(fp_tex_tcb_38, vec2(_159, (-_179) + (-0.0))).xy;
    float _193 = _191.x;
    float _195 = _191.y;
    vec2 _197 = texture(fp_tex_tcb_22, vec2(_79.x, _79.y)).xy;
    vec3 _199 = texture(fp_tex_tcb_36, vec4(_161 * _169, _165 * _169, _167 * _169, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_179 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec4 _202 = texture(fp_tex_tcb_24, vec2(_79.z, _79.w)).xyzw;
    float _204 = _202.w;
    float _206 = clamp(_81.z, 0.0, 1.0);
    float _208 = _147 * _151;
    float _210 = _151 * _151;
    float _212 = _145 + (-fp_c5_1._m0[23].x);
    float _214 = _143 * _151;
    float _216 = fma(_177, -_177, _175.y);
    float _218 = _153 + (-fp_c5_1._m0[23].z);
    float _220 = _149 + (-fp_c5_1._m0[23].y);
    float _222 = fma(_143, _143, -(_147 * _147));
    float _224 = inversesqrt(fma(_218, _218, fma(_220, _220, _212 * _212)));
    float _226 = _212 * _224;
    float _228 = _220 * _224;
    float _230 = _218 * _224;
    float _232 = _71.z;
    float _234 = _71.x;
    float _236 = _179 * _179;
    float _238 = fma(_179, 0.5, 0.5);
    float _240 = fma(_147, -fp_c5_1._m0[23].y, _143 * (-fp_c5_1._m0[23].x));
    float _242 = _236 * _236;
    float _244 = (_238 * 0.5) * _238;
    float _246 = max(fma(_151, _230, fma(_147, _228, _143 * _226)), fp_c1_1._m0[0].y) * max(fma(_151, _230, fma(_147, _228, _143 * _226)), fp_c1_1._m0[0].y);
    float _248 = max(fma(_153, _230, fma(_149, _228, _145 * _226)), fp_c1_1._m0[0].y);
    float _250 = clamp(fma(_151, -fp_c5_1._m0[23].z, _240), 0.0, 1.0);
    float _252 = max(fma(_151, -fp_c5_1._m0[23].z, _240), fp_c1_1._m0[0].y);
    float _254 = 1.0 / (_244 + fma(_159, -_244, _159));
    float _256 = exp2(_248 * fma(_248, fp_c1_1._m0[0].z, -6.9831600189208984375));
    int _259 = max(0, min(int(trunc((_232 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _261 = (_254 * (1.0 / (_244 + fma(_244, -_252, _252)))) * ((_236 * (1.0 / max(fma(_246, _242, -_246) + 1.0, fp_c1_1._m0[0].y))) * (_236 * (1.0 / max(fma(_246, _242, -_246) + 1.0, fp_c1_1._m0[0].y))));
    float _263 = fma(_185, -fp_c6_1._m0[9].x, _185);
    float _265 = fma(_187, -fp_c6_1._m0[9].x, _187);
    float _267 = fma(_189, -fp_c6_1._m0[9].x, _189);
    float _269 = fma(_185 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _271 = fma(_187 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _273 = fma(_189 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    uint _276 = uint(int(uint((((int(uint(_259) >> uint(16)) * 20) << 16) + (((_259 & 65535) * 20) + max(0, min(int(trunc((_234 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _278 = fp_c10_1._m0[int(uint(int(_276)) >> uint(2))][int(_276) & 3];
    float _280 = _77.w;
    float _282 = fma(_271, -_265, _265);
    float _284 = fma(_269, -_263, _263);
    float _286 = fma(_273, -_267, _267);
    float _288 = clamp(_280 * clamp(fma(_197.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _290 = ((_202.x * _204) * _280) * 32.0;
    float _292 = ((_202.y * _204) * _280) * 32.0;
    float _294 = ((_202.z * _204) * _280) * 32.0;
    float _296 = fma(_284, _290, fma(_199.x, fma(_269, _193, _195), max(0.0, fma(_222, fp_c5_1._m0[31].x, (fma(_151, fp_c5_1._m0[25].z, fma(_147, fp_c5_1._m0[25].y, _143 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_214, fp_c5_1._m0[28].w, fma(_210, fp_c5_1._m0[28].z, fma(_208, fp_c5_1._m0[28].y, _171 * fp_c5_1._m0[28].x))))) * _284));
    float _298 = fma(_282, _292, fma(_199.y, fma(_271, _193, _195), max(0.0, fma(_222, fp_c5_1._m0[31].y, (fma(_151, fp_c5_1._m0[26].z, fma(_147, fp_c5_1._m0[26].y, _143 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_214, fp_c5_1._m0[29].w, fma(_210, fp_c5_1._m0[29].z, fma(_208, fp_c5_1._m0[29].y, _171 * fp_c5_1._m0[29].x))))) * _282));
    float _300 = clamp((-_288) + 1.0, 0.0, 1.0);
    float _302 = fma(_286, _294, fma(_199.z, fma(_273, _193, _195), max(0.0, fma(_222, fp_c5_1._m0[31].z, (fma(_151, fp_c5_1._m0[27].z, fma(_147, fp_c5_1._m0[27].y, _143 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_214, fp_c5_1._m0[30].w, fma(_210, fp_c5_1._m0[30].z, fma(_208, fp_c5_1._m0[30].y, _171 * fp_c5_1._m0[30].x))))) * _286));
    float _304 = clamp((-fma(_288, fp_c7_1._m0[37].w, clamp(_280 * clamp(fma(_197.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + (max((-max(min(_216 * (1.0 / fma((-_177) + _206, (-_177) + _206, _216)), 1.0), float(_206 <= _177))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_157 * _139, _157 * _141, float(int(clamp(uint(max(roundEven(_117), 0.0)), 0u, 65535u)))), _157 * _135))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_77.x * gl_FragCoord.w) * _115, (_77.y * gl_FragCoord.w) * _115)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _306 = _298;
    float _308 = _302;
    float _310 = _296;
    float _312 = _143;
    float _314 = _151;
    float _316 = _296;
    float _318 = _298;
    float _320 = _302;
    if (floatBitsToInt(_278) != (-1))
    {
        int _322 = floatBitsToInt(_278);
        int _324 = 0;
        float _328;
        float _330;
        float _332;
        int _416;
        do
        {
            int _326 = _322 & 255;
            _328 = _310;
            _330 = _306;
            _332 = _308;
            _334 = uint(_326) >= 30u;
            if (_334)
            {
                break;
            }
            int _336 = _326 << 4;
            uint _338 = uint(int(uint(_336 + 7360) >> uint(2)));
            int _340 = int(_338) + 1;
            uint _342 = uint(int(uint(_336 + 7368) >> uint(2)));
            float _344 = (-_234) + fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3];
            float _346 = fp_c10_1._m0[int(uint(_340) >> uint(2))][_340 & 3] + (-_71.y);
            float _348 = (-_232) + fp_c10_1._m0[int(uint(int(_342)) >> uint(2))][int(_342) & 3];
            float _350 = fma(_348, _348, fma(_346, _346, _344 * _344));
            float _352 = _344 * inversesqrt(_350);
            float _354 = _346 * inversesqrt(_350);
            float _356 = _348 * inversesqrt(_350);
            float _358 = _145 + _352;
            float _360 = _149 + _354;
            float _362 = _153 + _356;
            float _364 = inversesqrt(fma(_362, _362, fma(_360, _360, _358 * _358)));
            float _366 = _358 * _364;
            float _368 = _360 * _364;
            float _370 = _362 * _364;
            uint _372 = uint(int(uint(_336 + 6880) >> uint(2)));
            int _374 = int(_372) + 1;
            uint _376 = uint(int(uint(_336 + 6408) >> uint(2)));
            float _378 = fma(_151, _356, fma(_147, _354, _143 * _352));
            uint _380 = uint(int(uint(_336 + 8320) >> uint(2)));
            float _382 = max(_378, fp_c1_1._m0[0].y);
            float _384 = max(fma(_151, _370, fma(_147, _368, _143 * _366)), fp_c1_1._m0[0].y) * max(fma(_151, _370, fma(_147, _368, _143 * _366)), fp_c1_1._m0[0].y);
            float _386 = max(fma(_153, _370, fma(_149, _368, _145 * _366)), fp_c1_1._m0[0].y);
            uint _388 = uint(int(uint(_336 + 6400) >> uint(2)));
            int _390 = int(_388) + 1;
            float _392 = exp2(_386 * fma(_386, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _394 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_380)) >> uint(2))][int(_380) & 3]) != 0;
            float _396 = (_254 * (1.0 / (_244 + fma(_244, -_382, _382)))) * ((_236 * (1.0 / max(fma(_242, _384, -_384) + 1.0, fp_c1_1._m0[0].y))) * (_236 * (1.0 / max(fma(_242, _384, -_384) + 1.0, fp_c1_1._m0[0].y))));
            float _398 = _271 + fma(_271, -_392, _392);
            float _400 = _398;
            if (!_394)
            {
                _400 = 1.0;
            }
            float _402 = _400;
            if (_394)
            {
                uint _404 = uint(int(uint(_336 + 7840) >> uint(2)));
                int _406 = int(_404) + 1;
                uint _408 = uint(int(uint(_336 + 6888) >> uint(2)));
                float _410 = fp_c10_1._m0[int(uint(int(_408)) >> uint(2))][int(_408) & 3];
                int _412 = int(_408) + 1;
                uint _414 = uint(int(uint(_336 + 7848) >> uint(2)));
                _402 = exp2(fp_c10_1._m0[int(uint(_412) >> uint(2))][_412 & 3] * log2(clamp(((-_410) + fma(_356, -fp_c10_1._m0[int(uint(int(_414)) >> uint(2))][int(_414) & 3], fma(_354, -fp_c10_1._m0[int(uint(_406) >> uint(2))][_406 & 3], _352 * (-fp_c10_1._m0[int(uint(int(_404)) >> uint(2))][int(_404) & 3])))) * (1.0 / ((-_410) + 1.0)), 0.0, 1.0)));
            }
            _416 = _324 + 1;
            float _418 = (exp2(fp_c10_1._m0[int(uint(_374) >> uint(2))][_374 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_372)) >> uint(2))][int(_372) & 3], -sqrt(_350), fp_c1_1._m0[1].x), 0.0, 1.0))) * _402) * clamp(_378 + (-0.0), 0.0, 1.0);
            float _420 = fma(fp_c10_1._m0[int(uint(_390) >> uint(2))][_390 & 3] * _418, fma(_265, fp_c1_1._m0[1].y, (_398 * _396) * 0.079577468335628509521484375), _306);
            float _422 = fma(fp_c10_1._m0[int(uint(int(_376)) >> uint(2))][int(_376) & 3] * _418, fma(_267, fp_c1_1._m0[1].y, ((_273 + fma(_273, -_392, _392)) * _396) * 0.079577468335628509521484375), _308);
            float _424 = fma(fp_c10_1._m0[int(uint(int(_388)) >> uint(2))][int(_388) & 3] * _418, fma(_263, fp_c1_1._m0[1].y, ((_269 + fma(_269, -_392, _392)) * _396) * 0.079577468335628509521484375), _310);
            _322 = int(uint(_322) >> uint(8));
            _324 = _416;
            _306 = _420;
            _308 = _422;
            _310 = _424;
            _328 = _424;
            _330 = _420;
            _332 = _422;
        } while (!(_416 >= 4));
        _334 = false;
        _316 = _328;
        _318 = _330;
        _320 = _332;
        if ((_322 & 255) == 30)
        {
            float _426 = _71.y;
            float _428 = 1.0 / (fma(_232, fp_c10_1._m0[565].z, fma(_426, fp_c10_1._m0[565].y, _234 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _430 = 1.0 / fp_c10_1._m0[561].y;
            float _432 = _232 + (-fp_c10_1._m0[557].z);
            float _434 = _432 * fp_c10_1._m0[558].x;
            float _436 = (-_234) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_430, fp_c10_1._m0[557].x);
            float _438 = (-_232) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_430, fp_c10_1._m0[557].z);
            float _440 = _234 + (-fp_c10_1._m0[557].x);
            float _442 = _436 * _436;
            float _444 = _440 * fp_c10_1._m0[558].z;
            float _446 = fma(_432, _432, _440 * _440);
            float _448 = sqrt(fma(_438, _438, _442)) * (-fp_c10_1._m0[558].y);
            float _450 = ((-float(_434 < _444)) + float(_434 > _444)) * fp_c10_1._m0[561].y;
            float _452 = inversesqrt(fma(_438, _438, fma(_448, _448, _442)));
            float _454 = _436 * _452;
            float _456 = _448 * _452;
            float _458 = _438 * _452;
            float _460 = _145 + _454;
            float _462 = fma(_432, fp_c10_1._m0[558].z, _440 * fp_c10_1._m0[558].x);
            float _464 = _149 + _456;
            bool _466 = _462 > 0.0;
            float _468 = inversesqrt(fma(_458, _458, _454 * _454));
            float _470 = _153 + _458;
            float _472 = fma(_151, _458, fma(_147, _456, _143 * _454));
            float _474 = inversesqrt(fma(_470, _470, fma(_464, _464, _460 * _460)));
            float _476 = _460 * _474;
            float _478 = _464 * _474;
            float _480 = _470 * _474;
            if (_466)
            {
                _312 = sqrt(_446);
            }
            float _482 = _312;
            if (!_466)
            {
                _482 = 1.0;
            }
            float _484 = max(_472, fp_c1_1._m0[0].y);
            float _486 = max(fma(_151, _480, fma(_147, _478, _143 * _476)), fp_c1_1._m0[0].y) * max(fma(_151, _480, fma(_147, _478, _143 * _476)), fp_c1_1._m0[0].y);
            float _488 = max(fma(_153, _480, fma(_149, _478, _145 * _476)), fp_c1_1._m0[0].y);
            bool _490 = fma(_432 * inversesqrt(_446), fp_c10_1._m0[558].z, (_440 * inversesqrt(_446)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _492 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_440, fma(_450, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_432 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_450 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_440, fma(_450, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_432 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_450 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _494 = clamp(fma(_462 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_462 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            if (_490)
            {
                _314 = fma(_492, -_492, fp_c1_1._m0[1].x) * fma(_492, -_492, fp_c1_1._m0[1].x);
            }
            float _496 = _314;
            if (!_490)
            {
                _496 = 1.0;
            }
            float _498 = exp2(_488 * fma(_488, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _500 = (min(fma(_494, -_494, fp_c1_1._m0[1].x) * fma(_494, -_494, fp_c1_1._m0[1].x), _496) * (exp2(log2(clamp(fma(_482, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_458 * _468, -fp_c10_1._m0[558].z, (_454 * _468) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_472 + (-0.0), 0.0, 1.0);
            float _502 = (_254 * (1.0 / (_244 + fma(_244, -_484, _484)))) * ((_236 * (1.0 / max(fma(_242, _486, -_486) + 1.0, fp_c1_1._m0[0].y))) * (_236 * (1.0 / max(fma(_242, _486, -_486) + 1.0, fp_c1_1._m0[0].y))));
            float _504 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_232, fp_c10_1._m0[562].z, fma(_426, fp_c10_1._m0[562].y, _234 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _428, 0.5, 0.5), (-fma((fma(_232, fp_c10_1._m0[563].z, fma(_426, fp_c10_1._m0[563].y, _234 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _428, 0.5, 0.5)) + 1.0)).z > fma((fma(_232, fp_c10_1._m0[564].z, fma(_426, fp_c10_1._m0[564].y, _234 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _428, 0.5, 0.5)) || (_462 <= 0.0));
            _316 = fma(fma(_263, fp_c1_1._m0[1].y, ((_269 + fma(_269, -_498, _498)) * _502) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _500), _504, _328);
            _318 = fma(fma(_265, fp_c1_1._m0[1].y, ((_271 + fma(_271, -_498, _498)) * _502) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _500), _504, _330);
            _320 = fma(fma(_267, fp_c1_1._m0[1].y, ((_273 + fma(_273, -_498, _498)) * _502) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _500), _504, _332);
        }
    }
    float _506 = _234 + (-fp_c3_1._m0[11].w);
    float _508 = _71.y;
    float _510 = _232 + (-fp_c3_1._m0[13].w);
    float _512 = _508 + (-fp_c3_1._m0[12].w);
    float _514 = fma(_510, _510, fma(_512, _512, _506 * _506));
    float _516 = fma(_300, _316, _304 * (fma(_261 * (_269 + fma(_269, -_256, _256)), fp_c1_1._m0[0].w, _263 * 0.3183098733425140380859375) * fma(_250, fp_c5_1._m0[5].x, _290)));
    float _518 = clamp(fma(_304 * _300, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _520 = fma(_300, _318, _304 * (fma(_261 * (_271 + fma(_271, -_256, _256)), fp_c1_1._m0[0].w, _265 * 0.3183098733425140380859375) * fma(_250, fp_c5_1._m0[5].y, _292)));
    float _522 = fma(_300, _320, _304 * (fma(_261 * (_273 + fma(_273, -_256, _256)), fp_c1_1._m0[0].w, _267 * 0.3183098733425140380859375) * fma(_250, fp_c5_1._m0[5].z, _294)));
    float _524 = exp2(log2(clamp(sqrt(_514) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_510 * inversesqrt(_514), fp_c5_1._m0[23].z, fma(_512 * inversesqrt(_514), fp_c5_1._m0[23].y, (_506 * inversesqrt(_514)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _526 = clamp(fma(fma(_232, fp_c5_1._m0[14].z, fma(_508, fp_c5_1._m0[14].y, _234 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _528 = fma((-_516) + fp_c5_1._m0[13].x, _526, _516);
    float _530 = fma((-_520) + fp_c5_1._m0[13].y, _526, _520);
    float _532 = fma((-_522) + fp_c5_1._m0[13].z, _526, _522);
    float _534 = clamp((-exp2((clamp(fma(sqrt(_514), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _90.x = fma((-_528) + fma(fma((_524 * fp_c7_1._m0[55].x) * _518, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _534, _528);
    _90.y = fma((-_530) + fma(fma((_524 * fp_c7_1._m0[55].y) * _518, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _534, _530);
    _90.z = fma((-_532) + fma(fma((_524 * fp_c7_1._m0[55].z) * _518, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _534, _532);
    _90.w = clamp(texture(fp_tex_tcb_8, vec2(_97, _99)).x * _87.w, 0.0, 1.0);
}


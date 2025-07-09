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
layout(location = 10) in vec4 _83;
layout(location = 8) in vec4 _85;
layout(location = 9) in vec4 _87;
layout(location = 6) in vec4 _89;
layout(location = 7) in vec4 _91;
layout(location = 2) in vec4 _93;
layout(location = 0) out vec4 _96;
uint _6[12];

void main()
{
    bool _368 = false;
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
        _145 = _85.w;
    }
    float _147 = _145;
    if (!_141)
    {
        _147 = _87.w;
    }
    float _149 = _121 * _143;
    float _151 = 0.0;
    if (_141)
    {
        _151 = _85.x;
    }
    float _153 = _117 * _143;
    float _155 = 0.0;
    float _157 = _151;
    if (_141)
    {
        _155 = _85.y;
    }
    float _159 = _119 * _143;
    float _161 = 0.0;
    float _163 = _155;
    if (_141)
    {
        _161 = _85.z;
    }
    float _165 = _161;
    if (!_141)
    {
        _157 = _87.x;
    }
    if (!_141)
    {
        _163 = _87.y;
    }
    if (!_141)
    {
        _165 = _87.z;
    }
    float _167 = 1.0 / _147;
    float _169 = sqrt(clamp((-fma(_111, _111, _113 * _113)) + 1.0, 0.0, 1.0));
    float _171 = fma(_153, _169, fma(_111, _125, _113 * (fma(_159, _123, -(_149 * _135)) * _127)));
    float _173 = fma(_159, _169, fma(_111, _135, _113 * (fma(_149, _125, -(_153 * _123)) * _127)));
    float _175 = fma(_149, _169, fma(_111, _123, _113 * (fma(_153, _135, -(_159 * _125)) * _127)));
    float _177 = 1.0 / (_89.z * gl_FragCoord.w);
    float _179 = inversesqrt(fma(_133, _133, fma(_131, _131, _129 * _129)));
    float _181 = max(texture(fp_tex_tcb_10, vec2(_103, _105)).x, fp_c1_1._m0[0].x);
    float _183 = inversesqrt(fma(_175, _175, fma(_173, _173, _171 * _171)));
    float _185 = _129 * (-_179);
    float _187 = 1.0 / (_91.w * gl_FragCoord.w);
    float _189 = _171 * _183;
    float _191 = _173 * _183;
    float _193 = _131 * (-_179);
    float _195 = _133 * (-_179);
    float _197 = _175 * _183;
    float _199 = fma(_197, _195, fma(_191, _193, _189 * _185));
    float _201 = max(_199, fp_c1_1._m0[0].y);
    float _203 = fma(_189 * (-_199), -2.0, -_185);
    vec2 _205 = texture(fp_tex_tcb_2C, vec2((_91.x * gl_FragCoord.w) * _187, (_91.y * gl_FragCoord.w) * _187)).xy;
    float _207 = _205.x;
    float _209 = fma(_191 * (-_199), -2.0, -_193);
    float _211 = fma(_197 * (-_199), -2.0, -_195);
    float _213 = 1.0 / max(abs(_211), max(abs(_203), abs(_209)));
    vec3 _217 = texture(fp_tex_tcb_A, vec2(_103, _105)).xyz;
    float _219 = _217.x;
    float _221 = _217.y;
    float _223 = _217.z;
    vec2 _225 = texture(fp_tex_tcb_38, vec2(_201, (-_181) + (-0.0))).xy;
    float _227 = _225.x;
    float _229 = _225.y;
    float _231 = _185 + (-fp_c5_1._m0[23].x);
    float _233 = _193 + (-fp_c5_1._m0[23].y);
    vec3 _235 = texture(fp_tex_tcb_36, vec4(_203 * _213, _209 * _213, _211 * _213, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_181 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _237 = texture(fp_tex_tcb_22, vec2(_83.x, _83.y)).xy;
    vec4 _240 = texture(fp_tex_tcb_24, vec2(_83.z, _83.w)).xyzw;
    float _242 = _240.w;
    vec3 _244 = texture(fp_tex_tcb_14, vec2(_103, _105)).xyz;
    float _246 = clamp(_91.z, 0.0, 1.0);
    float _248 = _195 + (-fp_c5_1._m0[23].z);
    float _250 = inversesqrt(fma(_248, _248, fma(_233, _233, _231 * _231)));
    float _252 = _189 * _191;
    float _254 = _231 * _250;
    float _256 = _191 * _197;
    float _258 = _233 * _250;
    float _260 = _197 * _197;
    float _262 = fma(_207, -_207, _205.y);
    float _264 = _248 * _250;
    float _266 = _189 * _197;
    float _268 = _75.x;
    float _270 = _75.z;
    float _272 = fma(_191, -fp_c5_1._m0[23].y, _189 * (-fp_c5_1._m0[23].x));
    float _274 = fma(_189, _189, -(_191 * _191));
    float _276 = _181 * _181;
    float _278 = max(fma(_197, _264, fma(_191, _258, _189 * _254)), fp_c1_1._m0[0].y) * max(fma(_197, _264, fma(_191, _258, _189 * _254)), fp_c1_1._m0[0].y);
    float _280 = fma(_181, 0.5, 0.5);
    float _282 = _276 * _276;
    float _284 = (_280 * 0.5) * _280;
    float _286 = max(fma(_197, -fp_c5_1._m0[23].z, _272), fp_c1_1._m0[0].y);
    float _288 = 1.0 / (_284 + fma(_201, -_284, _201));
    float _290 = max(fma(_195, _264, fma(_193, _258, _185 * _254)), fp_c1_1._m0[0].y);
    int _293 = max(0, min(int(trunc((_270 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _295 = fma(_219, -fp_c6_1._m0[9].x, _219);
    float _297 = fma(_219 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _299 = (_288 * (1.0 / (_284 + fma(_284, -_286, _286)))) * ((_276 * (1.0 / max(fma(_278, _282, -_278) + 1.0, fp_c1_1._m0[0].y))) * (_276 * (1.0 / max(fma(_278, _282, -_278) + 1.0, fp_c1_1._m0[0].y))));
    float _301 = fma(_297, -_295, _295);
    float _303 = exp2(_290 * fma(_290, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _305 = fma(_221, -fp_c6_1._m0[9].x, _221);
    float _307 = fma(_221 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _309 = fma(_223 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _311 = fma(_307, -_305, _305);
    uint _314 = uint(int(uint((((int(uint(_293) >> uint(16)) * 20) << 16) + (((_293 & 65535) * 20) + max(0, min(int(trunc((_268 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _316 = fp_c10_1._m0[int(uint(int(_314)) >> uint(2))][int(_314) & 3];
    float _318 = _89.w;
    float _320 = fma(_223, -fp_c6_1._m0[9].x, _223);
    float _322 = fma(_309, -_320, _320);
    float _324 = clamp(_318 * clamp(fma(_237.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _326 = ((_240.y * _242) * _318) * 32.0;
    float _328 = ((_240.x * _242) * _318) * 32.0;
    float _330 = ((_240.z * _242) * _318) * 32.0;
    float _332 = clamp((-_324) + 1.0, 0.0, 1.0);
    float _334 = fma(_311, _326, fma(_235.y, fma(_307, _227, _229), max(0.0, fma(_274, fp_c5_1._m0[31].y, (fma(_197, fp_c5_1._m0[26].z, fma(_191, fp_c5_1._m0[26].y, _189 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_266, fp_c5_1._m0[29].w, fma(_260, fp_c5_1._m0[29].z, fma(_256, fp_c5_1._m0[29].y, _252 * fp_c5_1._m0[29].x))))) * _311));
    float _336 = clamp(fma(_197, -fp_c5_1._m0[23].z, _272), 0.0, 1.0);
    float _338 = fma(_301, _328, fma(_235.x, fma(_297, _227, _229), max(0.0, fma(_274, fp_c5_1._m0[31].x, (fma(_197, fp_c5_1._m0[25].z, fma(_191, fp_c5_1._m0[25].y, _189 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_266, fp_c5_1._m0[28].w, fma(_260, fp_c5_1._m0[28].z, fma(_256, fp_c5_1._m0[28].y, _252 * fp_c5_1._m0[28].x))))) * _301));
    float _340 = fma(_322, _330, fma(_235.z, fma(_309, _227, _229), max(0.0, fma(_274, fp_c5_1._m0[31].z, (fma(_197, fp_c5_1._m0[27].z, fma(_191, fp_c5_1._m0[27].y, _189 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_266, fp_c5_1._m0[30].w, fma(_260, fp_c5_1._m0[30].z, fma(_256, fp_c5_1._m0[30].y, _252 * fp_c5_1._m0[30].x))))) * _322));
    float _342 = clamp((-fma(_324, fp_c7_1._m0[37].w, clamp(_318 * clamp(fma(_237.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + (max((-max(min(_262 * (1.0 / fma((-_207) + _246, (-_207) + _246, _262)), 1.0), float(_246 <= _207))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_167 * _157, _167 * _163, float(int(clamp(uint(max(roundEven(_137), 0.0)), 0u, 65535u)))), _167 * _165))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_89.x * gl_FragCoord.w) * _177, (_89.y * gl_FragCoord.w) * _177)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _344 = _334;
    float _346 = _340;
    float _348 = _338;
    float _350 = _340;
    float _352 = _338;
    float _354 = _334;
    if (floatBitsToInt(_316) != (-1))
    {
        int _356 = floatBitsToInt(_316);
        int _358 = 0;
        float _362;
        float _364;
        float _366;
        int _448;
        do
        {
            int _360 = _356 & 255;
            _362 = _348;
            _364 = _344;
            _366 = _346;
            _368 = uint(_360) >= 30u;
            if (_368)
            {
                break;
            }
            int _370 = _360 << 4;
            uint _372 = uint(int(uint(_370 + 7360) >> uint(2)));
            int _374 = int(_372) + 1;
            uint _376 = uint(int(uint(_370 + 7368) >> uint(2)));
            float _378 = (-_268) + fp_c10_1._m0[int(uint(int(_372)) >> uint(2))][int(_372) & 3];
            float _380 = fp_c10_1._m0[int(uint(_374) >> uint(2))][_374 & 3] + (-_75.y);
            float _382 = (-_270) + fp_c10_1._m0[int(uint(int(_376)) >> uint(2))][int(_376) & 3];
            float _384 = fma(_382, _382, fma(_380, _380, _378 * _378));
            float _386 = _378 * inversesqrt(_384);
            float _388 = _380 * inversesqrt(_384);
            float _390 = _382 * inversesqrt(_384);
            float _392 = _185 + _386;
            float _394 = _193 + _388;
            float _396 = _195 + _390;
            uint _398 = uint(int(uint(_370 + 6880) >> uint(2)));
            int _400 = int(_398) + 1;
            float _402 = inversesqrt(fma(_396, _396, fma(_394, _394, _392 * _392)));
            float _404 = _392 * _402;
            float _406 = _394 * _402;
            float _408 = _396 * _402;
            float _410 = max(fma(_195, _408, fma(_193, _406, _185 * _404)), fp_c1_1._m0[0].y);
            uint _412 = uint(int(uint(_370 + 8320) >> uint(2)));
            float _414 = fma(_197, _390, fma(_191, _388, _189 * _386));
            float _416 = max(fma(_197, _408, fma(_191, _406, _189 * _404)), fp_c1_1._m0[0].y) * max(fma(_197, _408, fma(_191, _406, _189 * _404)), fp_c1_1._m0[0].y);
            float _418 = max(_414, fp_c1_1._m0[0].y);
            uint _420 = uint(int(uint(_370 + 6408) >> uint(2)));
            uint _422 = uint(int(uint(_370 + 6400) >> uint(2)));
            int _424 = int(_422) + 1;
            float _426 = exp2(_410 * fma(_410, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _428 = (_288 * (1.0 / (_284 + fma(_284, -_418, _418)))) * ((_276 * (1.0 / max(fma(_282, _416, -_416) + 1.0, fp_c1_1._m0[0].y))) * (_276 * (1.0 / max(fma(_282, _416, -_416) + 1.0, fp_c1_1._m0[0].y))));
            bool _430 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_412)) >> uint(2))][int(_412) & 3]) != 0;
            float _432 = _428;
            if (!_430)
            {
                _432 = 1.0;
            }
            float _434 = _432;
            if (_430)
            {
                uint _436 = uint(int(uint(_370 + 7840) >> uint(2)));
                int _438 = int(_436) + 1;
                uint _440 = uint(int(uint(_370 + 7848) >> uint(2)));
                uint _442 = uint(int(uint(_370 + 6888) >> uint(2)));
                float _444 = fp_c10_1._m0[int(uint(int(_442)) >> uint(2))][int(_442) & 3];
                int _446 = int(_442) + 1;
                _434 = exp2(fp_c10_1._m0[int(uint(_446) >> uint(2))][_446 & 3] * log2(clamp(((-_444) + fma(_390, -fp_c10_1._m0[int(uint(int(_440)) >> uint(2))][int(_440) & 3], fma(_388, -fp_c10_1._m0[int(uint(_438) >> uint(2))][_438 & 3], _386 * (-fp_c10_1._m0[int(uint(int(_436)) >> uint(2))][int(_436) & 3])))) * (1.0 / ((-_444) + 1.0)), 0.0, 1.0)));
            }
            _448 = _358 + 1;
            float _450 = (exp2(fp_c10_1._m0[int(uint(_400) >> uint(2))][_400 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_398)) >> uint(2))][int(_398) & 3], -sqrt(_384), fp_c1_1._m0[1].x), 0.0, 1.0))) * _434) * clamp(_414 + (-0.0), 0.0, 1.0);
            float _452 = fma(fp_c10_1._m0[int(uint(_424) >> uint(2))][_424 & 3] * _450, fma(_305, fp_c1_1._m0[1].y, ((_307 + fma(_307, -_426, _426)) * _428) * 0.079577468335628509521484375), _344);
            float _454 = fma(fp_c10_1._m0[int(uint(int(_420)) >> uint(2))][int(_420) & 3] * _450, fma(_320, fp_c1_1._m0[1].y, ((_309 + fma(_309, -_426, _426)) * _428) * 0.079577468335628509521484375), _346);
            float _456 = fma(fp_c10_1._m0[int(uint(int(_422)) >> uint(2))][int(_422) & 3] * _450, fma(_295, fp_c1_1._m0[1].y, ((_297 + fma(_297, -_426, _426)) * _428) * 0.079577468335628509521484375), _348);
            _356 = int(uint(_356) >> uint(8));
            _358 = _448;
            _344 = _452;
            _346 = _454;
            _348 = _456;
            _362 = _456;
            _364 = _452;
            _366 = _454;
        } while (!(_448 >= 4));
        _368 = false;
        _350 = _366;
        _352 = _362;
        _354 = _364;
        if ((_356 & 255) == 30)
        {
            float _458 = _75.y;
            float _460 = 1.0 / (fma(_270, fp_c10_1._m0[565].z, fma(_458, fp_c10_1._m0[565].y, _268 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _462 = 1.0 / fp_c10_1._m0[561].y;
            float _464 = (-_268) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_462, fp_c10_1._m0[557].x);
            float _466 = (-_270) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_462, fp_c10_1._m0[557].z);
            float _468 = _464 * _464;
            float _470 = sqrt(fma(_466, _466, _468)) * (-fp_c10_1._m0[558].y);
            float _472 = _270 + (-fp_c10_1._m0[557].z);
            float _474 = _472 * fp_c10_1._m0[558].x;
            float _476 = inversesqrt(fma(_466, _466, fma(_470, _470, _468)));
            float _478 = _464 * _476;
            float _480 = _470 * _476;
            float _482 = _466 * _476;
            float _484 = _185 + _478;
            float _486 = _193 + _480;
            float _488 = _195 + _482;
            float _490 = _268 + (-fp_c10_1._m0[557].x);
            float _492 = _490 * fp_c10_1._m0[558].z;
            float _494 = inversesqrt(fma(_488, _488, fma(_486, _486, _484 * _484)));
            float _496 = _484 * _494;
            float _498 = _486 * _494;
            float _500 = _488 * _494;
            float _502 = ((-float(_474 < _492)) + float(_474 > _492)) * fp_c10_1._m0[561].y;
            float _504 = fma(_197, _482, fma(_191, _480, _189 * _478));
            float _506 = fma(_472, fp_c10_1._m0[558].z, _490 * fp_c10_1._m0[558].x);
            float _508 = inversesqrt(fma(_482, _482, _478 * _478));
            float _510 = fma(_472, _472, _490 * _490);
            bool _512 = _506 > 0.0;
            float _514 = max(fma(_195, _500, fma(_193, _498, _185 * _496)), fp_c1_1._m0[0].y);
            float _516 = max(fma(_197, _500, fma(_191, _498, _189 * _496)), fp_c1_1._m0[0].y) * max(fma(_197, _500, fma(_191, _498, _189 * _496)), fp_c1_1._m0[0].y);
            float _518 = _472;
            float _520 = _516;
            if (_512)
            {
                _518 = sqrt(_510);
            }
            float _522 = _518;
            if (!_512)
            {
                _522 = 1.0;
            }
            float _524 = max(_504, fp_c1_1._m0[0].y);
            bool _526 = fma(_472 * inversesqrt(_510), fp_c10_1._m0[558].z, (_490 * inversesqrt(_510)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _528 = clamp(fma(_506 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_506 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _530 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_490, fma(_502, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_472 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_502 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_490, fma(_502, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_472 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_502 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            if (_526)
            {
                _520 = fma(_530, -_530, fp_c1_1._m0[1].x) * fma(_530, -_530, fp_c1_1._m0[1].x);
            }
            float _532 = exp2(_514 * fma(_514, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _534 = _520;
            if (!_526)
            {
                _534 = 1.0;
            }
            float _536 = (_288 * (1.0 / (_284 + fma(_284, -_524, _524)))) * ((_276 * (1.0 / max(fma(_282, _516, -_516) + 1.0, fp_c1_1._m0[0].y))) * (_276 * (1.0 / max(fma(_282, _516, -_516) + 1.0, fp_c1_1._m0[0].y))));
            float _538 = (min(fma(_528, -_528, fp_c1_1._m0[1].x) * fma(_528, -_528, fp_c1_1._m0[1].x), _534) * (exp2(log2(clamp(fma(_522, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_482 * _508, -fp_c10_1._m0[558].z, (_478 * _508) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_504 + (-0.0), 0.0, 1.0);
            float _540 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_270, fp_c10_1._m0[562].z, fma(_458, fp_c10_1._m0[562].y, _268 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _460, 0.5, 0.5), (-fma((fma(_270, fp_c10_1._m0[563].z, fma(_458, fp_c10_1._m0[563].y, _268 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _460, 0.5, 0.5)) + 1.0)).z > fma((fma(_270, fp_c10_1._m0[564].z, fma(_458, fp_c10_1._m0[564].y, _268 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _460, 0.5, 0.5)) || (_506 <= 0.0));
            _350 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _538) * fma(_320, fp_c1_1._m0[1].y, ((_309 + fma(_309, -_532, _532)) * _536) * 0.079577468335628509521484375), _540, _366);
            _352 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _538) * fma(_295, fp_c1_1._m0[1].y, ((_297 + fma(_297, -_532, _532)) * _536) * 0.079577468335628509521484375), _540, _362);
            _354 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _538) * fma(_305, fp_c1_1._m0[1].y, ((_307 + fma(_307, -_532, _532)) * _536) * 0.079577468335628509521484375), _540, _364);
        }
    }
    float _542 = _268 + (-fp_c3_1._m0[11].w);
    float _544 = _75.y;
    float _546 = _270 + (-fp_c3_1._m0[13].w);
    float _548 = fma(_223 * _244.z, fp_c6_1._m0[11].x, fma(_332, _350, _342 * (fma(_299 * (_309 + fma(_309, -_303, _303)), fp_c1_1._m0[0].w, _320 * 0.3183098733425140380859375) * fma(_336, fp_c5_1._m0[5].z, _330))));
    float _550 = _544 + (-fp_c3_1._m0[12].w);
    float _552 = fma(_546, _546, fma(_550, _550, _542 * _542));
    float _554 = fma(_219 * _244.x, fp_c6_1._m0[11].x, fma(_332, _352, _342 * (fma(_299 * (_297 + fma(_297, -_303, _303)), fp_c1_1._m0[0].w, _295 * 0.3183098733425140380859375) * fma(_336, fp_c5_1._m0[5].x, _328))));
    float _556 = clamp(fma(_342 * _332, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _558 = clamp(fma(fma(_270, fp_c5_1._m0[14].z, fma(_544, fp_c5_1._m0[14].y, _268 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _560 = exp2(log2(clamp(sqrt(_552) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_546 * inversesqrt(_552), fp_c5_1._m0[23].z, fma(_550 * inversesqrt(_552), fp_c5_1._m0[23].y, (_542 * inversesqrt(_552)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _562 = fma(_221 * _244.y, fp_c6_1._m0[11].x, fma(_332, _354, _342 * (fma(_299 * (_307 + fma(_307, -_303, _303)), fp_c1_1._m0[0].w, _305 * 0.3183098733425140380859375) * fma(_336, fp_c5_1._m0[5].y, _326))));
    float _564 = fma((-_554) + fp_c5_1._m0[13].x, _558, _554);
    float _566 = fma((-_562) + fp_c5_1._m0[13].y, _558, _562);
    float _568 = fma((-_548) + fp_c5_1._m0[13].z, _558, _548);
    float _570 = clamp((-exp2((clamp(fma(sqrt(_552), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _96.x = fma((-_564) + fma(fma((_560 * fp_c7_1._m0[55].x) * _556, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _570, _564);
    _96.y = fma((-_566) + fma(fma((_560 * fp_c7_1._m0[55].y) * _556, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _570, _566);
    _96.z = fma((-_568) + fma(fma((_560 * fp_c7_1._m0[55].z) * _556, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _570, _568);
    _96.w = clamp(texture(fp_tex_tcb_8, vec2(_103, _105)).x * _93.w, 0.0, 1.0);
}


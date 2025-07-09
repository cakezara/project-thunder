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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_22;
layout(binding = 4) uniform sampler2D fp_tex_tcb_24;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 7) uniform sampler2DArrayShadow fp_tex_tcb_2E;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _69;
layout(location = 3) in vec4 _71;
layout(location = 4) in vec4 _73;
layout(location = 1) in vec4 _75;
layout(location = 0) in vec4 _77;
layout(location = 9) in vec4 _79;
layout(location = 6) in vec4 _81;
layout(location = 7) in vec4 _83;
layout(location = 8) in vec4 _85;
layout(location = 2) in vec4 _87;
layout(location = 0) out vec4 _90;
uint _6[12];

void main()
{
    bool _344 = false;
    float _97 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _99 = 1.0 / (_69.z * gl_FragCoord.w);
    float _101 = _71.w;
    float _103 = _73.x;
    float _105 = _73.y;
    float _107 = _73.z;
    float _109 = _75.x;
    float _111 = _75.y;
    float _113 = _75.z;
    float _115 = _77.x;
    int _118 = abs(((-_101) > fp_c3_1._m0[58].y) ? (-1) : 0);
    float _120 = float((abs(((-_101) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_101) > fp_c3_1._m0[58].x) ? (-1) : 0)) + _118);
    float _122 = fma(_111, _111, _109 * _109);
    bool _126 = _120 == 0.0;
    float _128 = inversesqrt(fma(_107, _107, fma(_105, _105, _103 * _103)));
    float _130 = inversesqrt(fma(_113, _113, _122));
    float _132 = intBitsToFloat(_118);
    float _134 = _122;
    if (_126)
    {
        _132 = _83.w;
    }
    float _136 = _132;
    if (!_126)
    {
        _136 = _85.w;
    }
    if (_126)
    {
        _134 = _83.z;
    }
    float _138 = 0.0;
    float _140 = _134;
    if (_126)
    {
        _138 = _83.x;
    }
    float _142 = 0.0;
    float _144 = _138;
    if (_126)
    {
        _142 = _83.y;
    }
    float _146 = _142;
    if (!_126)
    {
        _140 = _85.z;
    }
    float _148 = _103 * (-_128);
    if (!_126)
    {
        _144 = _85.x;
    }
    float _150 = _105 * (-_128);
    if (!_126)
    {
        _146 = _85.y;
    }
    float _152 = _109 * _130;
    float _154 = _111 * _130;
    float _156 = _113 * _130;
    float _158 = _107 * (-_128);
    float _160 = 1.0 / (_81.w * gl_FragCoord.w);
    float _162 = 1.0 / _136;
    float _164 = fma(_156, _158, fma(_154, _150, _152 * _148));
    float _166 = fma(_152 * (-_164), -2.0, -_148);
    float _168 = fma(_154 * (-_164), -2.0, -_150);
    float _170 = fma(_156 * (-_164), -2.0, -_158);
    float _172 = 1.0 / max(abs(_170), max(abs(_166), abs(_168)));
    float _174 = max(_164, fp_c1_1._m0[0].y);
    vec2 _178 = texture(fp_tex_tcb_2C, vec2((_81.x * gl_FragCoord.w) * _160, (_81.y * gl_FragCoord.w) * _160)).xy;
    float _180 = _178.x;
    float _182 = _77.y;
    float _184 = _154 * _156;
    vec3 _188 = texture(fp_tex_tcb_1E, vec2(_115, _182)).xyz;
    vec3 _190 = texture(fp_tex_tcb_A, vec2(_115, _182)).xyz;
    vec3 _192 = texture(fp_tex_tcb_1C, vec2(_115, _182)).xyz;
    vec2 _194 = texture(fp_tex_tcb_38, vec2(_174, (-_97) + (-0.0))).xy;
    float _196 = _194.x;
    float _198 = _194.y;
    vec2 _200 = texture(fp_tex_tcb_22, vec2(_79.x, _79.y)).xy;
    vec3 _202 = texture(fp_tex_tcb_36, vec4(_166 * _172, _168 * _172, _170 * _172, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_97 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec4 _205 = texture(fp_tex_tcb_24, vec2(_79.z, _79.w)).xyzw;
    float _207 = _205.w;
    float _209 = clamp(_81.z, 0.0, 1.0);
    float _211 = _148 + (-fp_c5_1._m0[23].x);
    float _213 = _152 * _154;
    float _215 = _150 + (-fp_c5_1._m0[23].y);
    float _217 = _152 * _156;
    float _219 = _156 * _156;
    float _221 = fma(_180, -_180, _178.y);
    float _223 = _158 + (-fp_c5_1._m0[23].z);
    float _225 = inversesqrt(fma(_223, _223, fma(_215, _215, _211 * _211)));
    float _227 = _211 * _225;
    float _229 = _215 * _225;
    float _231 = _223 * _225;
    float _233 = fma(_97, 0.5, 0.5);
    float _235 = _97 * _97;
    float _237 = _71.x;
    float _239 = _71.z;
    float _241 = _235 * _235;
    float _243 = fma(_154, -fp_c5_1._m0[23].y, _152 * (-fp_c5_1._m0[23].x));
    float _245 = max(fma(_156, _231, fma(_154, _229, _152 * _227)), fp_c1_1._m0[0].y) * max(fma(_156, _231, fma(_154, _229, _152 * _227)), fp_c1_1._m0[0].y);
    float _247 = fma(_152, _152, -(_154 * _154));
    float _249 = (_233 * 0.5) * _233;
    float _251 = max(fma(_156, -fp_c5_1._m0[23].z, _243), fp_c1_1._m0[0].y);
    float _253 = max(fma(_158, _231, fma(_150, _229, _148 * _227)), fp_c1_1._m0[0].y);
    float _255 = 1.0 / (_249 + fma(_174, -_249, _174));
    float _257 = (_192.y * clamp(fma(_188.y, fp_c6_1._m0[83].x, -_190.y) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[102].y;
    float _259 = _192.x * clamp(fma(_188.x, fp_c6_1._m0[83].x, -_190.x) + 1.0, 0.0, 1.0);
    float _261 = (_255 * (1.0 / (_249 + fma(_249, -_251, _251)))) * ((_235 * (1.0 / max(fma(_245, _241, -_245) + 1.0, fp_c1_1._m0[0].y))) * (_235 * (1.0 / max(fma(_245, _241, -_245) + 1.0, fp_c1_1._m0[0].y))));
    int _263 = max(0, min(int(trunc((_239 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _265 = _259 * fp_c6_1._m0[102].x;
    float _267 = (_192.z * clamp(fma(_188.z, fp_c6_1._m0[83].x, -_190.z) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[102].z;
    float _269 = exp2(_253 * fma(_253, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _271 = fma(_257 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _273 = fma(_267, -fp_c6_1._m0[9].x, _267);
    float _275 = fma(_265 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _277 = fma(_265, -fp_c6_1._m0[9].x, _265);
    float _279 = _69.w;
    float _281 = fma(_267 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _283 = fma(_257, -fp_c6_1._m0[9].x, _257);
    uint _286 = uint(int(uint((((int(uint(_263) >> uint(16)) * 20) << 16) + (((_263 & 65535) * 20) + max(0, min(int(trunc((_237 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _288 = fp_c10_1._m0[int(uint(int(_286)) >> uint(2))][int(_286) & 3];
    float _290 = fma(_271, -_283, _283);
    float _292 = fma(_281, -_273, _273);
    float _294 = fma(_275, -_277, _277);
    float _296 = clamp(_279 * clamp(fma(_200.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _298 = ((_205.x * _207) * _279) * 32.0;
    float _300 = ((_205.y * _207) * _279) * 32.0;
    float _302 = ((_205.z * _207) * _279) * 32.0;
    float _304 = fma(_294, _298, fma(_202.x, fma(_275, _196, _198), max(0.0, fma(_247, fp_c5_1._m0[31].x, (fma(_156, fp_c5_1._m0[25].z, fma(_154, fp_c5_1._m0[25].y, _152 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_217, fp_c5_1._m0[28].w, fma(_219, fp_c5_1._m0[28].z, fma(_184, fp_c5_1._m0[28].y, _213 * fp_c5_1._m0[28].x))))) * _294));
    float _306 = fma(_290, _300, fma(_202.y, fma(_271, _196, _198), max(0.0, fma(_247, fp_c5_1._m0[31].y, (fma(_156, fp_c5_1._m0[26].z, fma(_154, fp_c5_1._m0[26].y, _152 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_217, fp_c5_1._m0[29].w, fma(_219, fp_c5_1._m0[29].z, fma(_184, fp_c5_1._m0[29].y, _213 * fp_c5_1._m0[29].x))))) * _290));
    float _308 = clamp(fma(_156, -fp_c5_1._m0[23].z, _243), 0.0, 1.0);
    float _310 = fma(_292, _302, fma(_202.z, fma(_281, _196, _198), max(0.0, fma(_247, fp_c5_1._m0[31].z, (fma(_156, fp_c5_1._m0[27].z, fma(_154, fp_c5_1._m0[27].y, _152 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_217, fp_c5_1._m0[30].w, fma(_219, fp_c5_1._m0[30].z, fma(_184, fp_c5_1._m0[30].y, _213 * fp_c5_1._m0[30].x))))) * _292));
    float _312 = clamp((-_296) + 1.0, 0.0, 1.0);
    float _314 = clamp((-fma(_296, fp_c7_1._m0[37].w, clamp(_279 * clamp(fma(_200.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + (max((-max(min(_221 * (1.0 / fma((-_180) + _209, (-_180) + _209, _221)), 1.0), float(_209 <= _180))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_162 * _144, _162 * _146, float(int(clamp(uint(max(roundEven(_120), 0.0)), 0u, 65535u)))), _162 * _140))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_69.x * gl_FragCoord.w) * _99, (_69.y * gl_FragCoord.w) * _99)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _316 = _306;
    float _318 = _310;
    float _320 = _304;
    float _322 = _152;
    float _324 = _156;
    float _326 = _304;
    float _328 = _306;
    float _330 = _310;
    if (floatBitsToInt(_288) != (-1))
    {
        int _332 = floatBitsToInt(_288);
        int _334 = 0;
        float _338;
        float _340;
        float _342;
        int _426;
        do
        {
            int _336 = _332 & 255;
            _338 = _320;
            _340 = _316;
            _342 = _318;
            _344 = uint(_336) >= 30u;
            if (_344)
            {
                break;
            }
            int _346 = _336 << 4;
            uint _348 = uint(int(uint(_346 + 7360) >> uint(2)));
            int _350 = int(_348) + 1;
            uint _352 = uint(int(uint(_346 + 7368) >> uint(2)));
            float _354 = (-_237) + fp_c10_1._m0[int(uint(int(_348)) >> uint(2))][int(_348) & 3];
            float _356 = fp_c10_1._m0[int(uint(_350) >> uint(2))][_350 & 3] + (-_71.y);
            float _358 = (-_239) + fp_c10_1._m0[int(uint(int(_352)) >> uint(2))][int(_352) & 3];
            float _360 = fma(_358, _358, fma(_356, _356, _354 * _354));
            float _362 = _354 * inversesqrt(_360);
            float _364 = _356 * inversesqrt(_360);
            float _366 = _358 * inversesqrt(_360);
            float _368 = _148 + _362;
            float _370 = _150 + _364;
            float _372 = _158 + _366;
            float _374 = inversesqrt(fma(_372, _372, fma(_370, _370, _368 * _368)));
            float _376 = _368 * _374;
            float _378 = _370 * _374;
            float _380 = _372 * _374;
            uint _382 = uint(int(uint(_346 + 6880) >> uint(2)));
            int _384 = int(_382) + 1;
            uint _386 = uint(int(uint(_346 + 6408) >> uint(2)));
            float _388 = fma(_156, _366, fma(_154, _364, _152 * _362));
            uint _390 = uint(int(uint(_346 + 8320) >> uint(2)));
            float _392 = max(_388, fp_c1_1._m0[0].y);
            float _394 = max(fma(_156, _380, fma(_154, _378, _152 * _376)), fp_c1_1._m0[0].y) * max(fma(_156, _380, fma(_154, _378, _152 * _376)), fp_c1_1._m0[0].y);
            float _396 = max(fma(_158, _380, fma(_150, _378, _148 * _376)), fp_c1_1._m0[0].y);
            uint _398 = uint(int(uint(_346 + 6400) >> uint(2)));
            int _400 = int(_398) + 1;
            float _402 = exp2(_396 * fma(_396, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _404 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_390)) >> uint(2))][int(_390) & 3]) != 0;
            float _406 = (_255 * (1.0 / (_249 + fma(_249, -_392, _392)))) * ((_235 * (1.0 / max(fma(_241, _394, -_394) + 1.0, fp_c1_1._m0[0].y))) * (_235 * (1.0 / max(fma(_241, _394, -_394) + 1.0, fp_c1_1._m0[0].y))));
            float _408 = _271 + fma(_271, -_402, _402);
            float _410 = _408;
            if (!_404)
            {
                _410 = 1.0;
            }
            float _412 = _410;
            if (_404)
            {
                uint _414 = uint(int(uint(_346 + 7840) >> uint(2)));
                int _416 = int(_414) + 1;
                uint _418 = uint(int(uint(_346 + 6888) >> uint(2)));
                float _420 = fp_c10_1._m0[int(uint(int(_418)) >> uint(2))][int(_418) & 3];
                int _422 = int(_418) + 1;
                uint _424 = uint(int(uint(_346 + 7848) >> uint(2)));
                _412 = exp2(fp_c10_1._m0[int(uint(_422) >> uint(2))][_422 & 3] * log2(clamp(((-_420) + fma(_366, -fp_c10_1._m0[int(uint(int(_424)) >> uint(2))][int(_424) & 3], fma(_364, -fp_c10_1._m0[int(uint(_416) >> uint(2))][_416 & 3], _362 * (-fp_c10_1._m0[int(uint(int(_414)) >> uint(2))][int(_414) & 3])))) * (1.0 / ((-_420) + 1.0)), 0.0, 1.0)));
            }
            _426 = _334 + 1;
            float _428 = (exp2(fp_c10_1._m0[int(uint(_384) >> uint(2))][_384 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_382)) >> uint(2))][int(_382) & 3], -sqrt(_360), fp_c1_1._m0[1].x), 0.0, 1.0))) * _412) * clamp(_388 + (-0.0), 0.0, 1.0);
            float _430 = fma(fp_c10_1._m0[int(uint(_400) >> uint(2))][_400 & 3] * _428, fma(_283, fp_c1_1._m0[1].y, (_408 * _406) * 0.079577468335628509521484375), _316);
            float _432 = fma(fp_c10_1._m0[int(uint(int(_386)) >> uint(2))][int(_386) & 3] * _428, fma(_273, fp_c1_1._m0[1].y, ((_281 + fma(_281, -_402, _402)) * _406) * 0.079577468335628509521484375), _318);
            float _434 = fma(fp_c10_1._m0[int(uint(int(_398)) >> uint(2))][int(_398) & 3] * _428, fma(_277, fp_c1_1._m0[1].y, ((_275 + fma(_275, -_402, _402)) * _406) * 0.079577468335628509521484375), _320);
            _332 = int(uint(_332) >> uint(8));
            _334 = _426;
            _316 = _430;
            _318 = _432;
            _320 = _434;
            _338 = _434;
            _340 = _430;
            _342 = _432;
        } while (!(_426 >= 4));
        _344 = false;
        _326 = _338;
        _328 = _340;
        _330 = _342;
        if ((_332 & 255) == 30)
        {
            float _436 = _71.y;
            float _438 = 1.0 / (fma(_239, fp_c10_1._m0[565].z, fma(_436, fp_c10_1._m0[565].y, _237 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _440 = 1.0 / fp_c10_1._m0[561].y;
            float _442 = _239 + (-fp_c10_1._m0[557].z);
            float _444 = _442 * fp_c10_1._m0[558].x;
            float _446 = _237 + (-fp_c10_1._m0[557].x);
            float _448 = (-_237) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_440, fp_c10_1._m0[557].x);
            float _450 = (-_239) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_440, fp_c10_1._m0[557].z);
            float _452 = _446 * fp_c10_1._m0[558].z;
            float _454 = _448 * _448;
            float _456 = fma(_442, _442, _446 * _446);
            float _458 = sqrt(fma(_450, _450, _454)) * (-fp_c10_1._m0[558].y);
            float _460 = ((-float(_444 < _452)) + float(_444 > _452)) * fp_c10_1._m0[561].y;
            float _462 = inversesqrt(fma(_450, _450, fma(_458, _458, _454)));
            float _464 = _448 * _462;
            float _466 = _458 * _462;
            float _468 = _450 * _462;
            float _470 = _148 + _464;
            float _472 = fma(_442, fp_c10_1._m0[558].z, _446 * fp_c10_1._m0[558].x);
            float _474 = _150 + _466;
            bool _476 = _472 > 0.0;
            float _478 = inversesqrt(fma(_468, _468, _464 * _464));
            float _480 = _158 + _468;
            float _482 = fma(_156, _468, fma(_154, _466, _152 * _464));
            float _484 = inversesqrt(fma(_480, _480, fma(_474, _474, _470 * _470)));
            float _486 = _470 * _484;
            float _488 = _474 * _484;
            float _490 = _480 * _484;
            if (_476)
            {
                _322 = sqrt(_456);
            }
            float _492 = _322;
            if (!_476)
            {
                _492 = 1.0;
            }
            float _494 = max(_482, fp_c1_1._m0[0].y);
            float _496 = max(fma(_156, _490, fma(_154, _488, _152 * _486)), fp_c1_1._m0[0].y) * max(fma(_156, _490, fma(_154, _488, _152 * _486)), fp_c1_1._m0[0].y);
            float _498 = max(fma(_158, _490, fma(_150, _488, _148 * _486)), fp_c1_1._m0[0].y);
            bool _500 = fma(_442 * inversesqrt(_456), fp_c10_1._m0[558].z, (_446 * inversesqrt(_456)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _502 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_446, fma(_460, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_442 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_460 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_446, fma(_460, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_442 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_460 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _504 = clamp(fma(_472 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_472 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            if (_500)
            {
                _324 = fma(_502, -_502, fp_c1_1._m0[1].x) * fma(_502, -_502, fp_c1_1._m0[1].x);
            }
            float _506 = _324;
            if (!_500)
            {
                _506 = 1.0;
            }
            float _508 = exp2(_498 * fma(_498, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _510 = (_255 * (1.0 / (_249 + fma(_249, -_494, _494)))) * ((_235 * (1.0 / max(fma(_241, _496, -_496) + 1.0, fp_c1_1._m0[0].y))) * (_235 * (1.0 / max(fma(_241, _496, -_496) + 1.0, fp_c1_1._m0[0].y))));
            float _512 = (min(fma(_504, -_504, fp_c1_1._m0[1].x) * fma(_504, -_504, fp_c1_1._m0[1].x), _506) * (exp2(log2(clamp(fma(_492, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_468 * _478, -fp_c10_1._m0[558].z, (_464 * _478) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_482 + (-0.0), 0.0, 1.0);
            float _514 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_239, fp_c10_1._m0[562].z, fma(_436, fp_c10_1._m0[562].y, _237 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _438, 0.5, 0.5), (-fma((fma(_239, fp_c10_1._m0[563].z, fma(_436, fp_c10_1._m0[563].y, _237 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _438, 0.5, 0.5)) + 1.0)).z > fma((fma(_239, fp_c10_1._m0[564].z, fma(_436, fp_c10_1._m0[564].y, _237 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _438, 0.5, 0.5)) || (_472 <= 0.0));
            _326 = fma(fma(_277, fp_c1_1._m0[1].y, ((_275 + fma(_275, -_508, _508)) * _510) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _512), _514, _338);
            _328 = fma(fma(_283, fp_c1_1._m0[1].y, ((_271 + fma(_271, -_508, _508)) * _510) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _512), _514, _340);
            _330 = fma(fma(_273, fp_c1_1._m0[1].y, ((_281 + fma(_281, -_508, _508)) * _510) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _512), _514, _342);
        }
    }
    float _516 = _237 + (-fp_c3_1._m0[11].w);
    float _518 = _71.y;
    float _520 = _239 + (-fp_c3_1._m0[13].w);
    float _522 = fma(_312, _326, _314 * (fma(_261 * (_275 + fma(_275, -_269, _269)), fp_c1_1._m0[0].w, _277 * 0.3183098733425140380859375) * fma(_308, fp_c5_1._m0[5].x, _298)));
    float _524 = _518 + (-fp_c3_1._m0[12].w);
    float _526 = fma(_520, _520, fma(_524, _524, _516 * _516));
    float _528 = clamp(fma(fma(_239, fp_c5_1._m0[14].z, fma(_518, fp_c5_1._m0[14].y, _237 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _530 = clamp(fma(_314 * _312, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _532 = fma(_312, _328, _314 * (fma(_261 * (_271 + fma(_271, -_269, _269)), fp_c1_1._m0[0].w, _283 * 0.3183098733425140380859375) * fma(_308, fp_c5_1._m0[5].y, _300)));
    float _534 = fma(_312, _330, _314 * (fma(_261 * (_281 + fma(_281, -_269, _269)), fp_c1_1._m0[0].w, _273 * 0.3183098733425140380859375) * fma(_308, fp_c5_1._m0[5].z, _302)));
    float _536 = exp2(log2(clamp(sqrt(_526) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_520 * inversesqrt(_526), fp_c5_1._m0[23].z, fma(_524 * inversesqrt(_526), fp_c5_1._m0[23].y, (_516 * inversesqrt(_526)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _538 = fma((-_522) + fp_c5_1._m0[13].x, _528, _522);
    float _540 = fma((-_532) + fp_c5_1._m0[13].y, _528, _532);
    float _542 = fma((-_534) + fp_c5_1._m0[13].z, _528, _534);
    float _544 = clamp((-exp2((clamp(fma(sqrt(_526), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _90.x = fma((-_538) + fma(fma((_536 * fp_c7_1._m0[55].x) * _530, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _544, _538);
    _90.y = fma((-_540) + fma(fma((_536 * fp_c7_1._m0[55].y) * _530, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _544, _540);
    _90.z = fma((-_542) + fma(fma((_536 * fp_c7_1._m0[55].z) * _530, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _544, _542);
    _90.w = clamp((_259 * fp_c6_1._m0[83].w) * _87.w, 0.0, 1.0);
}


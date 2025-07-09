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

layout(binding = 2, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_16;
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 4) in vec4 _72;
layout(location = 6) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 3) in vec4 _78;
layout(location = 0) out vec4 _81;
uint _6[12];

void main()
{
    bool _342 = false;
    float _88 = _66.x;
    float _90 = _66.y;
    vec2 _94 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _96 = _94.x;
    float _98 = _94.y;
    float _100 = _68.x;
    float _102 = _70.x;
    float _104 = _68.y;
    float _106 = _70.y;
    float _108 = _68.z;
    float _110 = _70.z;
    float _112 = _70.w;
    float _114 = _72.x;
    float _116 = _72.y;
    float _118 = _72.z;
    float _120 = inversesqrt(fma(_108, _108, fma(_104, _104, _100 * _100)));
    float _122 = inversesqrt(fma(_110, _110, fma(_106, _106, _102 * _102)));
    float _124 = _104 * _120;
    float _126 = _108 * _120;
    float _128 = _110 * _122;
    float _130 = _102 * _122;
    float _132 = _106 * _122;
    float _134 = _100 * _120;
    float _136 = fma(_126, _132, -(_124 * _128)) * _112;
    float _138 = fma(_134, _128, -(_126 * _130)) * _112;
    float _140 = fma(_124, _130, -(_134 * _132)) * _112;
    float _142 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _144 = inversesqrt(fma(_140, _140, fma(_138, _138, _136 * _136)));
    float _146 = _114 * _142;
    float _148 = _114 * (-_142);
    float _150 = _116 * _142;
    float _152 = _116 * (-_142);
    float _154 = _118 * _142;
    float _156 = _118 * (-_142);
    float _158 = sqrt(clamp((-fma(_96, _96, _98 * _98)) + 1.0, 0.0, 1.0));
    float _160 = fma(_134, _158, fma(_102, _96, _98 * (fma(_124, _110, -(_126 * _106)) * _112)));
    float _162 = fma(_124, _158, fma(_106, _96, _98 * (fma(_126, _102, -(_134 * _110)) * _112)));
    float _164 = fma(_126, _158, fma(_110, _96, _98 * (fma(_134, _106, -(_124 * _102)) * _112)));
    float _166 = 1.0 / (_74.z * gl_FragCoord.w);
    float _168 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _170 = inversesqrt(fma(_164, _164, fma(_162, _162, _160 * _160)));
    float _172 = _160 * _170;
    float _174 = 1.0 / _76.w;
    float _176 = _162 * _170;
    float _178 = _164 * _170;
    float _180 = fma(_178, _156, fma(_176, _152, _172 * _148));
    float _182 = max(_180, fp_c1_1._m0[0].y);
    float _184 = fma(_172 * (-_180), -2.0, -_148);
    float _186 = fma(_176 * (-_180), -2.0, -_152);
    float _188 = fma(_178 * (-_180), -2.0, -_156);
    float _190 = 1.0 / max(abs(_188), max(abs(_184), abs(_186)));
    vec2 _192 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _174, 0.5, 0.5), fma(_76.y * _174, -0.5, 0.5))).xy;
    vec3 _196 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _198 = _196.x;
    float _200 = _196.y;
    float _202 = _196.z;
    vec2 _204 = texture(fp_tex_tcb_38, vec2(_182, (-_168) + (-0.0))).xy;
    float _206 = _204.x;
    float _208 = _204.y;
    vec3 _210 = texture(fp_tex_tcb_36, vec4(_184 * _190, _186 * _190, _188 * _190, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_168 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _212 = texture(fp_tex_tcb_16, vec2(fma(fma(_128, _154, fma(_132, _150, _130 * _146)), fp_c6_1._m0[60].z, _88), fma(fma(_140 * _144, _154, fma(_138 * _144, _150, (_136 * _144) * _146)), fp_c6_1._m0[60].z, _90))).xyz;
    float _214 = _148 + (-fp_c5_1._m0[23].x);
    float _216 = _152 + (-fp_c5_1._m0[23].y);
    float _218 = fma(_168, 0.5, 0.5);
    float _220 = _156 + (-fp_c5_1._m0[23].z);
    float _222 = (_218 * 0.5) * _218;
    float _224 = inversesqrt(fma(_220, _220, fma(_216, _216, _214 * _214)));
    float _226 = _214 * _224;
    float _228 = _216 * _224;
    float _230 = _220 * _224;
    float _232 = _78.x;
    float _234 = _176 * _178;
    float _236 = _78.z;
    float _238 = _178 * _178;
    float _240 = max(fma(_156, _230, fma(_152, _228, _148 * _226)), fp_c1_1._m0[0].y);
    float _242 = _172 * _176;
    float _244 = _172 * _178;
    float _246 = clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _248 = (-_192.y) + 1.0;
    float _250 = _248 * _246;
    float _252 = _168 * _168;
    int _255 = max(0, min(int(trunc((_236 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _257 = max(fma(_178, _230, fma(_176, _228, _172 * _226)), fp_c1_1._m0[0].y) * max(fma(_178, _230, fma(_176, _228, _172 * _226)), fp_c1_1._m0[0].y);
    float _259 = fma(_172, _172, -(_176 * _176));
    float _261 = exp2(_240 * fma(_240, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _263 = fma(_178, -fp_c5_1._m0[23].z, fma(_176, -fp_c5_1._m0[23].y, _172 * (-fp_c5_1._m0[23].x)));
    float _265 = max(_263, fp_c1_1._m0[0].y);
    float _267 = clamp(texture(fp_tex_tcb_C, vec2(_88, _90)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    uint _270 = uint(int(uint((((int(uint(_255) >> uint(16)) * 20) << 16) + (((_255 & 65535) * 20) + max(0, min(int(trunc((_232 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _272 = fp_c10_1._m0[int(uint(int(_270)) >> uint(2))][int(_270) & 3];
    float _274 = 1.0 / (_222 + fma(_182, -_222, _182));
    float _276 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].x;
    float _278 = fma(fma((-_198) + fp_c6_1._m0[93].x, _267, _198), -fp_c6_1._m0[9].x, fma((-_198) + fp_c6_1._m0[93].x, _267, _198));
    float _280 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].y;
    float _282 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].z;
    float _284 = fma(fma((-_200) + fp_c6_1._m0[93].y, _267, _200), -fp_c6_1._m0[9].x, fma((-_200) + fp_c6_1._m0[93].y, _267, _200));
    float _286 = fma(fma((-_202) + fp_c6_1._m0[93].z, _267, _202), -fp_c6_1._m0[9].x, fma((-_202) + fp_c6_1._m0[93].z, _267, _202));
    float _288 = (_274 * (1.0 / (_222 + fma(_222, -_265, _265)))) * ((_252 * (1.0 / max(fma(_257, _252 * _252, -_257) + 1.0, fp_c1_1._m0[0].y))) * (_252 * (1.0 / max(fma(_257, _252 * _252, -_257) + 1.0, fp_c1_1._m0[0].y))));
    float _290 = fma(_210.y, fma(_280, _206, _208), max(0.0, fma(_259, fp_c5_1._m0[31].y, (fma(_178, fp_c5_1._m0[26].z, fma(_176, fp_c5_1._m0[26].y, _172 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_244, fp_c5_1._m0[29].w, fma(_238, fp_c5_1._m0[29].z, fma(_234, fp_c5_1._m0[29].y, _242 * fp_c5_1._m0[29].x))))) * fma(_284, -_280, _284));
    float _292 = fma(_210.x, fma(_276, _206, _208), max(0.0, fma(_259, fp_c5_1._m0[31].x, (fma(_178, fp_c5_1._m0[25].z, fma(_176, fp_c5_1._m0[25].y, _172 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_244, fp_c5_1._m0[28].w, fma(_238, fp_c5_1._m0[28].z, fma(_234, fp_c5_1._m0[28].y, _242 * fp_c5_1._m0[28].x))))) * fma(_278, -_276, _278));
    float _294 = fma(_210.z, fma(_282, _206, _208), max(0.0, fma(_259, fp_c5_1._m0[31].z, (fma(_178, fp_c5_1._m0[27].z, fma(_176, fp_c5_1._m0[27].y, _172 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_244, fp_c5_1._m0[30].w, fma(_238, fp_c5_1._m0[30].z, fma(_234, fp_c5_1._m0[30].y, _242 * fp_c5_1._m0[30].x))))) * fma(_286, -_282, _286));
    float _296 = clamp((-fma(_246, max((-_192.x) + 1.0, _248), fma(texture(fp_tex_tcb_28, vec2((_74.x * gl_FragCoord.w) * _166, (_74.y * gl_FragCoord.w) * _166)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _298 = clamp(texture(fp_tex_tcb_18, vec2(_88, _90)).x + (-0.0), 0.0, 1.0);
    float _300 = (_212.x * fp_c6_1._m0[19].x) * fp_c6_1._m0[93].x;
    float _302 = (_212.y * fp_c6_1._m0[19].y) * fp_c6_1._m0[93].y;
    float _304 = (_212.z * fp_c6_1._m0[19].z) * fp_c6_1._m0[93].z;
    int _306 = floatBitsToInt(_272);
    float _308 = _292;
    float _310 = _290;
    float _312 = _294;
    float _314 = _172;
    float _316 = _292;
    float _318 = _290;
    float _320 = _294;
    if (floatBitsToInt(_272) != (-1))
    {
        float _322 = 1.0 / fp_c6_1._m0[18].y;
        float _324 = clamp(fma(_250, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _326 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
        float _328 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _330 = 0;
        float _334;
        float _336;
        float _338;
        int _428;
        do
        {
            int _332 = _306 & 255;
            _334 = _308;
            _336 = _310;
            _338 = _312;
            _342 = uint(_332) >= 30u;
            if (_342)
            {
                break;
            }
            int _344 = _332 << 4;
            uint _346 = uint(int(uint(_344 + 7360) >> uint(2)));
            int _348 = int(_346) + 1;
            uint _350 = uint(int(uint(_344 + 7368) >> uint(2)));
            float _352 = (-_232) + fp_c10_1._m0[int(uint(int(_346)) >> uint(2))][int(_346) & 3];
            float _354 = fp_c10_1._m0[int(uint(_348) >> uint(2))][_348 & 3] + (-_78.y);
            float _356 = (-_236) + fp_c10_1._m0[int(uint(int(_350)) >> uint(2))][int(_350) & 3];
            float _358 = fma(_356, _356, fma(_354, _354, _352 * _352));
            float _360 = _352 * inversesqrt(_358);
            float _362 = _354 * inversesqrt(_358);
            float _364 = _356 * inversesqrt(_358);
            float _366 = _148 + _360;
            float _368 = _152 + _362;
            float _370 = _156 + _364;
            uint _372 = uint(int(uint(_344 + 6880) >> uint(2)));
            int _374 = int(_372) + 1;
            float _376 = inversesqrt(fma(_370, _370, fma(_368, _368, _366 * _366)));
            float _378 = _366 * _376;
            float _380 = _368 * _376;
            float _382 = _370 * _376;
            float _384 = fma(_178, _364, fma(_176, _362, _172 * _360));
            uint _386 = uint(int(uint(_344 + 8320) >> uint(2)));
            float _388 = max(fma(_156, _382, fma(_152, _380, _148 * _378)), fp_c1_1._m0[0].y);
            float _390 = max(fma(_178, _382, fma(_176, _380, _172 * _378)), fp_c1_1._m0[0].y) * max(fma(_178, _382, fma(_176, _380, _172 * _378)), fp_c1_1._m0[0].y);
            float _392 = max(_384, fp_c1_1._m0[0].y);
            uint _394 = uint(int(uint(_344 + 6400) >> uint(2)));
            int _396 = int(_394) + 1;
            uint _398 = uint(int(uint(_344 + 6408) >> uint(2)));
            int _400 = int(_398) + 1;
            float _402 = exp2(_388 * fma(_388, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _404 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_386)) >> uint(2))][int(_386) & 3]) != 0;
            float _406 = _276 + fma(_276, -_402, _402);
            float _408 = (_274 * (1.0 / (_222 + fma(_222, -_392, _392)))) * ((_252 * (1.0 / max(fma(_252 * _252, _390, -_390) + 1.0, fp_c1_1._m0[0].y))) * (_252 * (1.0 / max(fma(_252 * _252, _390, -_390) + 1.0, fp_c1_1._m0[0].y))));
            float _410 = _406;
            if (!_404)
            {
                _410 = 1.0;
            }
            float _412 = _410;
            if (_404)
            {
                uint _414 = uint(int(uint(_344 + 7840) >> uint(2)));
                int _416 = int(_414) + 1;
                uint _418 = uint(int(uint(_344 + 7848) >> uint(2)));
                uint _420 = uint(int(uint(_344 + 6888) >> uint(2)));
                float _422 = fp_c10_1._m0[int(uint(int(_420)) >> uint(2))][int(_420) & 3];
                int _424 = int(_420) + 1;
                _412 = exp2(fp_c10_1._m0[int(uint(_424) >> uint(2))][_424 & 3] * log2(clamp(((-_422) + fma(_364, -fp_c10_1._m0[int(uint(int(_418)) >> uint(2))][int(_418) & 3], fma(_362, -fp_c10_1._m0[int(uint(_416) >> uint(2))][_416 & 3], _360 * (-fp_c10_1._m0[int(uint(int(_414)) >> uint(2))][int(_414) & 3])))) * (1.0 / ((-_422) + 1.0)), 0.0, 1.0)));
            }
            float _426 = exp2(fp_c10_1._m0[int(uint(_374) >> uint(2))][_374 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_372)) >> uint(2))][int(_372) & 3], -sqrt(_358), fp_c1_1._m0[1].x), 0.0, 1.0))) * _412;
            _428 = _330 + 1;
            float _430 = fp_c10_1._m0[int(uint(_400) >> uint(2))][_400 & 3] * _426;
            float _432 = _426 * clamp(_384 + (-0.0), 0.0, 1.0);
            float _434 = exp2(log2(clamp(fma(_180, -clamp((-_384) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].x), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_328, fp_c1_1._m0[1].w, exp2(_322 * log2(clamp(max(fma(_156, -_364, fma(_152, -_362, _148 * (-_360))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0))) * _328) + 0.20000000298023223876953125);
            float _436 = _308 + fma((fp_c10_1._m0[int(uint(int(_394)) >> uint(2))][int(_394) & 3] * _432) * fma(_278, fp_c1_1._m0[1].y, (_406 * _408) * 0.079577468335628509521484375), _326, _324 * ((_434 * (_300 * _430)) * fp_c6_1._m0[18].x));
            float _438 = _310 + fma((fp_c10_1._m0[int(uint(_396) >> uint(2))][_396 & 3] * _432) * fma(_284, fp_c1_1._m0[1].y, ((_280 + fma(_280, -_402, _402)) * _408) * 0.079577468335628509521484375), _326, _324 * ((_434 * (_302 * _430)) * fp_c6_1._m0[18].x));
            float _440 = _312 + fma((fp_c10_1._m0[int(uint(int(_398)) >> uint(2))][int(_398) & 3] * _432) * fma(_286, fp_c1_1._m0[1].y, ((_282 + fma(_282, -_402, _402)) * _408) * 0.079577468335628509521484375), _326, _324 * ((_434 * (_304 * _430)) * fp_c6_1._m0[18].x));
            _306 = int(uint(_306) >> uint(8));
            _330 = _428;
            _308 = _436;
            _310 = _438;
            _312 = _440;
            _334 = _436;
            _336 = _438;
            _338 = _440;
        } while (!(_428 >= 4));
        _342 = false;
        _316 = _334;
        _318 = _336;
        _320 = _338;
        if ((_306 & 255) == 30)
        {
            float _442 = _78.y;
            float _444 = 1.0 / (fma(_236, fp_c10_1._m0[565].z, fma(_442, fp_c10_1._m0[565].y, _232 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _446 = _232 + (-fp_c10_1._m0[557].x);
            float _448 = 1.0 / fp_c10_1._m0[561].y;
            float _450 = _236 + (-fp_c10_1._m0[557].z);
            float _452 = _446 * fp_c10_1._m0[558].z;
            float _454 = _450 * fp_c10_1._m0[558].x;
            float _456 = fma(_450, _450, _446 * _446);
            float _458 = (-_232) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_448, fp_c10_1._m0[557].x);
            float _460 = (-_236) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_448, fp_c10_1._m0[557].z);
            float _462 = _458 * _458;
            float _464 = ((-float(_454 < _452)) + float(_454 > _452)) * fp_c10_1._m0[561].y;
            bool _466 = fma(_450 * inversesqrt(_456), fp_c10_1._m0[558].z, (_446 * inversesqrt(_456)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _468 = sqrt(fma(_460, _460, _462)) * (-fp_c10_1._m0[558].y);
            float _470 = inversesqrt(fma(_460, _460, fma(_468, _468, _462)));
            float _472 = _458 * _470;
            float _474 = _468 * _470;
            float _476 = fma(_450, fp_c10_1._m0[558].z, _446 * fp_c10_1._m0[558].x);
            float _478 = _460 * _470;
            float _480 = _148 + _472;
            float _482 = _152 + _474;
            bool _484 = _476 > 0.0;
            float _486 = _156 + _478;
            float _488 = inversesqrt(fma(_486, _486, fma(_482, _482, _480 * _480)));
            float _490 = inversesqrt(fma(_478, _478, _472 * _472));
            float _492 = _480 * _488;
            float _494 = _482 * _488;
            float _496 = _486 * _488;
            float _498 = fma(_178, _478, fma(_176, _474, _172 * _472));
            if (_484)
            {
                _314 = sqrt(_456);
            }
            float _500 = _314;
            if (!_484)
            {
                _500 = 1.0;
            }
            float _502 = max(fma(_156, _496, fma(_152, _494, _148 * _492)), fp_c1_1._m0[0].y);
            float _504 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_446, fma(_464, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_450 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_464 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_446, fma(_464, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_450 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_464 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _506 = max(fma(_178, _496, fma(_176, _494, _172 * _492)), fp_c1_1._m0[0].y) * max(fma(_178, _496, fma(_176, _494, _172 * _492)), fp_c1_1._m0[0].y);
            float _508 = clamp(fma(_476 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_476 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _510 = max(_498, fp_c1_1._m0[0].y);
            float _512 = _508;
            if (_466)
            {
                _512 = fma(_504, -_504, fp_c1_1._m0[1].x) * fma(_504, -_504, fp_c1_1._m0[1].x);
            }
            float _514 = _512;
            if (!_466)
            {
                _514 = 1.0;
            }
            float _516 = exp2(_502 * fma(_502, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _518 = (fma(_328, fp_c1_1._m0[1].w, _328 * exp2(_322 * log2(clamp(max(fma(_156, -_478, fma(_152, -_474, _148 * (-_472))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125) * exp2(log2(clamp(fma(_180, -clamp((-_498) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].x), 0.0, 1.0)) * fp_c6_1._m0[18].z);
            float _520 = (exp2(log2(clamp(fma(_500, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_478 * _490, -fp_c10_1._m0[558].z, (_472 * _490) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_508, -_508, fp_c1_1._m0[1].x) * fma(_508, -_508, fp_c1_1._m0[1].x), _514);
            float _522 = (_274 * (1.0 / (_222 + fma(_222, -_510, _510)))) * ((_252 * (1.0 / max(fma(_252 * _252, _506, -_506) + 1.0, fp_c1_1._m0[0].y))) * (_252 * (1.0 / max(fma(_252 * _252, _506, -_506) + 1.0, fp_c1_1._m0[0].y))));
            float _524 = _520 * clamp(_498 + (-0.0), 0.0, 1.0);
            float _526 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_236, fp_c10_1._m0[562].z, fma(_442, fp_c10_1._m0[562].y, _232 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _444, 0.5, 0.5), (-fma((fma(_236, fp_c10_1._m0[563].z, fma(_442, fp_c10_1._m0[563].y, _232 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _444, 0.5, 0.5)) + 1.0)).z > fma((fma(_236, fp_c10_1._m0[564].z, fma(_442, fp_c10_1._m0[564].y, _232 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _444, 0.5, 0.5)) || (_476 <= 0.0));
            _316 = fma(fma(_326, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _524) * fma(_278, fp_c1_1._m0[1].y, ((_276 + fma(_276, -_516, _516)) * _522) * 0.079577468335628509521484375), _324 * ((_518 * (_300 * _520)) * fp_c6_1._m0[18].x)), _526, _334);
            _318 = fma(fma(_326, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _524) * fma(_284, fp_c1_1._m0[1].y, ((_280 + fma(_280, -_516, _516)) * _522) * 0.079577468335628509521484375), _324 * ((_518 * (_302 * _520)) * fp_c6_1._m0[18].x)), _526, _336);
            _320 = fma(fma(_326, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _524) * fma(_286, fp_c1_1._m0[1].y, ((_282 + fma(_282, -_516, _516)) * _522) * 0.079577468335628509521484375), _324 * ((_518 * (_304 * _520)) * fp_c6_1._m0[18].x)), _526, _338);
        }
    }
    float _528 = _232 + (-fp_c3_1._m0[11].w);
    float _530 = _236 + (-fp_c3_1._m0[13].w);
    float _532 = clamp(_263 + (-0.0), 0.0, 1.0);
    float _534 = clamp(fma(_250, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _536 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
    float _538 = _78.y + (-fp_c3_1._m0[12].w);
    float _540 = fma(_530, _530, fma(_538, _538, _528 * _528));
    float _542 = clamp(fma(_298 * _296, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _544 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
    float _546 = exp2(log2(clamp(fma(_180, -clamp((-_263) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].x), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_536, fp_c1_1._m0[1].w, _536 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_156, fp_c5_1._m0[23].z, fma(_152, fp_c5_1._m0[23].y, _148 * fp_c5_1._m0[23].x)), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _548 = exp2(log2(clamp(sqrt(_540) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_530 * inversesqrt(_540), fp_c5_1._m0[23].z, fma(_538 * inversesqrt(_540), fp_c5_1._m0[23].y, (_528 * inversesqrt(_540)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _550 = fma(_298, _316, fma(_296, _544 * (fma(_288 * (_276 + fma(_276, -_261, _261)), fp_c1_1._m0[0].w, _278 * 0.3183098733425140380859375) * (_532 * fp_c5_1._m0[5].x)), _534 * (((_300 * fp_c5_1._m0[5].w) * _546) * fp_c6_1._m0[18].x)));
    float _552 = fma(_298, _318, fma(_296, _544 * (fma(_288 * (_280 + fma(_280, -_261, _261)), fp_c1_1._m0[0].w, _284 * 0.3183098733425140380859375) * (_532 * fp_c5_1._m0[5].y)), _534 * (((_302 * fp_c5_1._m0[5].w) * _546) * fp_c6_1._m0[18].x)));
    float _554 = fma(_298, _320, fma(_296, _544 * (fma(_288 * (_282 + fma(_282, -_261, _261)), fp_c1_1._m0[0].w, _286 * 0.3183098733425140380859375) * (_532 * fp_c5_1._m0[5].z)), _534 * (((_304 * fp_c5_1._m0[5].w) * _546) * fp_c6_1._m0[18].x)));
    float _556 = clamp((-exp2((clamp(fma(sqrt(_540), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_550) + fma(fma((_548 * fp_c7_1._m0[55].x) * _542, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _556, _550);
    _81.y = fma((-_552) + fma(fma((_548 * fp_c7_1._m0[55].y) * _542, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _556, _552);
    _81.z = fma((-_554) + fma(fma((_548 * fp_c7_1._m0[55].z) * _542, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _556, _554);
    _81.w = 1.0;
}


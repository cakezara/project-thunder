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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_16;
layout(binding = 6) uniform sampler2D fp_tex_tcb_18;
layout(binding = 7) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 8) uniform sampler2D fp_tex_tcb_28;
layout(binding = 9) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 10) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 11) uniform sampler2D fp_tex_tcb_38;
layout(binding = 12) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 2) in vec4 _74;
layout(location = 4) in vec4 _76;
layout(location = 6) in vec4 _78;
layout(location = 5) in vec4 _80;
layout(location = 3) in vec4 _82;
layout(location = 0) out vec4 _85;
uint _6[12];

void main()
{
    bool _354 = false;
    float _92 = _70.x;
    float _94 = _70.y;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    float _104 = texture(fp_tex_tcb_1A, vec2(_92, _94)).x;
    float _106 = _72.x;
    float _108 = _72.y;
    float _110 = _72.z;
    float _112 = _74.y;
    float _114 = _74.z;
    float _116 = _74.x;
    float _118 = _74.w;
    float _120 = _76.x;
    float _122 = _76.y;
    float _124 = _76.z;
    float _126 = 1.0 / (_78.z * gl_FragCoord.w);
    float _128 = inversesqrt(fma(_110, _110, fma(_108, _108, _106 * _106)));
    float _130 = _110 * _128;
    float _132 = _106 * _128;
    float _134 = _108 * _128;
    float _136 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _138 = fma(_132, _136, fma(_100, _116, _102 * (fma(_134, _114, -(_130 * _112)) * _118)));
    float _140 = fma(_134, _136, fma(_100, _112, _102 * (fma(_130, _116, -(_132 * _114)) * _118)));
    float _142 = fma(_130, _136, fma(_100, _114, _102 * (fma(_132, _112, -(_134 * _116)) * _118)));
    float _144 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _146 = _120 * (-_144);
    float _148 = inversesqrt(fma(_142, _142, fma(_140, _140, _138 * _138)));
    float _150 = _122 * (-_144);
    float _152 = _124 * (-_144);
    float _154 = _138 * _148;
    float _156 = _140 * _148;
    float _158 = _142 * _148;
    float _160 = fma(_158, _152, fma(_156, _150, _154 * _146));
    float _162 = max(texture(fp_tex_tcb_10, vec2(_92, _94)).x, fp_c1_1._m0[0].x);
    float _164 = fma(_154 * (-_160), -2.0, -_146);
    float _166 = fma(_156 * (-_160), -2.0, -_150);
    float _168 = fma(_158 * (-_160), -2.0, -_152);
    float _170 = 1.0 / _80.w;
    float _172 = 1.0 / max(abs(_168), max(abs(_164), abs(_166)));
    float _174 = fma(exp2(log2(clamp(_160 + (-0.0), 0.0, 1.0)) * fp_c6_1._m0[9].y), fp_c6_1._m0[41].x, fp_c6_1._m0[41].y);
    vec2 _176 = texture(fp_tex_tcb_2A, vec2(fma(_80.x * _170, 0.5, 0.5), fma(_80.y * _170, -0.5, 0.5))).xy;
    vec3 _180 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _182 = _180.x;
    float _184 = _180.y;
    float _186 = _180.z;
    float _188 = texture(fp_tex_tcb_12, vec2(_92, _94)).x;
    float _190 = max(fma(_104, (-_160) + _174, _160), fp_c1_1._m0[0].z);
    vec2 _192 = texture(fp_tex_tcb_38, vec2(_190, (-_162) + (-0.0))).xy;
    float _194 = _192.x;
    float _196 = _192.y;
    vec3 _198 = texture(fp_tex_tcb_36, vec4(_164 * _172, _166 * _172, _168 * _172, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_162 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _200 = texture(fp_tex_tcb_16, vec2(_92, _94)).xyz;
    float _202 = _146 + (-fp_c5_1._m0[23].x);
    float _204 = _150 + (-fp_c5_1._m0[23].y);
    float _206 = _82.x;
    float _208 = _152 + (-fp_c5_1._m0[23].z);
    float _210 = inversesqrt(fma(_208, _208, fma(_204, _204, _202 * _202)));
    float _212 = _202 * _210;
    float _214 = _82.z;
    float _216 = _204 * _210;
    float _218 = _208 * _210;
    float _220 = _156 * _158;
    float _222 = max(fma(_152, _218, fma(_150, _216, _146 * _212)), fp_c1_1._m0[0].z);
    float _224 = _154 * _156;
    float _226 = _158 * _158;
    float _228 = _154 * _158;
    int _231 = max(0, min(int(trunc((_214 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _233 = exp2(_222 * fma(_222, fp_c1_1._m0[0].w, -6.9831600189208984375));
    uint _236 = uint(int(uint((((int(uint(_231) >> uint(16)) * 20) << 16) + (((_231 & 65535) * 20) + max(0, min(int(trunc((_206 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _238 = fp_c10_1._m0[int(uint(int(_236)) >> uint(2))][int(_236) & 3];
    float _240 = (-_176.y) + 1.0;
    float _242 = fma(_154, _154, -(_156 * _156));
    float _244 = clamp(_82.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _246 = clamp(texture(fp_tex_tcb_C, vec2(_92, _94)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _248 = _240 * _244;
    float _250 = _162 * _162;
    float _252 = fma((-_182) + fp_c6_1._m0[93].x, _246, _182);
    float _254 = fma((-_184) + fp_c6_1._m0[93].y, _246, _184);
    float _256 = _250 * _250;
    float _258 = fma((-_186) + fp_c6_1._m0[93].z, _246, _186);
    float _260 = fma(_252, -_188, _252);
    float _262 = fma(_162, 0.5, 0.5);
    float _264 = fma(_254, -_188, _254);
    float _266 = fma(fma(_104, fp_c6_1._m0[40].x, -_104), _260, _260);
    float _268 = fma(_158, -fp_c5_1._m0[23].z, fma(_156, -fp_c5_1._m0[23].y, _154 * (-fp_c5_1._m0[23].x)));
    float _270 = max(fma(_158, _218, fma(_156, _216, _154 * _212)), fp_c1_1._m0[0].z) * max(fma(_158, _218, fma(_156, _216, _154 * _212)), fp_c1_1._m0[0].z);
    float _272 = clamp(_174 + (-0.0), 0.0, 1.0);
    float _274 = fma(_258, -_188, _258);
    float _276 = max(_268, fp_c1_1._m0[0].z);
    float _278 = clamp((-fma(max(_240, (-_176.x) + 1.0), _244, fma(texture(fp_tex_tcb_28, vec2((_78.x * gl_FragCoord.w) * _126, (_78.y * gl_FragCoord.w) * _126)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _280 = fma(_260 + (-_266), _272, _266);
    float _282 = (_262 * 0.5) * _262;
    float _284 = fma(fma(_104, fp_c6_1._m0[40].y, -_104), _264, _264);
    float _286 = fma(fma(_104, fp_c6_1._m0[40].z, -_104), _274, _274);
    float _288 = fma(_188, _252 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _290 = 1.0 / (_282 + fma(_190, -_282, _190));
    float _292 = fma(_264 + (-_284), _272, _284);
    float _294 = fma(_188, _254 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _296 = fma(_188, _258 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _298 = fma(_274 + (-_286), _272, _286);
    float _300 = (_290 * (1.0 / (_282 + fma(_282, -_276, _276)))) * ((_250 * (1.0 / max(fma(_270, _256, -_270) + 1.0, fp_c1_1._m0[0].z))) * (_250 * (1.0 / max(fma(_270, _256, -_270) + 1.0, fp_c1_1._m0[0].z))));
    float _302 = fma(fma(_288, _194, _196), _198.x, max(0.0, fma(_242, fp_c5_1._m0[31].x, (fma(_158, fp_c5_1._m0[25].z, fma(_156, fp_c5_1._m0[25].y, _154 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_228, fp_c5_1._m0[28].w, fma(_226, fp_c5_1._m0[28].z, fma(_220, fp_c5_1._m0[28].y, _224 * fp_c5_1._m0[28].x))))) * fma(_288, -_280, _280));
    float _304 = fma(fma(_294, _194, _196), _198.y, max(0.0, fma(_242, fp_c5_1._m0[31].y, (fma(_158, fp_c5_1._m0[26].z, fma(_156, fp_c5_1._m0[26].y, _154 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_228, fp_c5_1._m0[29].w, fma(_226, fp_c5_1._m0[29].z, fma(_220, fp_c5_1._m0[29].y, _224 * fp_c5_1._m0[29].x))))) * fma(_294, -_292, _292));
    float _306 = fma(fma(_296, _194, _196), _198.z, max(0.0, fma(_242, fp_c5_1._m0[31].z, (fma(_158, fp_c5_1._m0[27].z, fma(_156, fp_c5_1._m0[27].y, _154 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_228, fp_c5_1._m0[30].w, fma(_226, fp_c5_1._m0[30].z, fma(_220, fp_c5_1._m0[30].y, _224 * fp_c5_1._m0[30].x))))) * fma(_296, -_298, _298));
    float _308 = clamp(_268 + (-0.0), 0.0, 1.0);
    float _310 = _252 * (_200.x * fp_c6_1._m0[19].x);
    float _312 = _254 * (_200.y * fp_c6_1._m0[19].y);
    float _314 = _258 * (_200.z * fp_c6_1._m0[19].z);
    float _316 = _104 * fp_c6_1._m0[18].x;
    float _318 = clamp(texture(fp_tex_tcb_18, vec2(_92, _94)).x + (-0.0), 0.0, 1.0);
    int _320 = floatBitsToInt(_238);
    float _322 = _302;
    float _324 = _304;
    float _326 = _306;
    float _328 = _302;
    float _330 = _304;
    float _332 = _306;
    if (floatBitsToInt(_238) != (-1))
    {
        float _334 = 1.0 / fp_c6_1._m0[18].y;
        float _336 = clamp((-_316) + 1.0, 0.0, 1.0);
        float _338 = clamp(fma(_248, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _340 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _342 = 0;
        float _346;
        float _348;
        float _350;
        int _440;
        do
        {
            int _344 = _320 & 255;
            _346 = _322;
            _348 = _324;
            _350 = _326;
            _354 = uint(_344) >= 30u;
            if (_354)
            {
                break;
            }
            int _356 = _344 << 4;
            uint _358 = uint(int(uint(_356 + 7360) >> uint(2)));
            int _360 = int(_358) + 1;
            uint _362 = uint(int(uint(_356 + 7368) >> uint(2)));
            uint _364 = uint(int(uint(_356 + 8320) >> uint(2)));
            float _366 = (-_206) + fp_c10_1._m0[int(uint(int(_358)) >> uint(2))][int(_358) & 3];
            float _368 = fp_c10_1._m0[int(uint(_360) >> uint(2))][_360 & 3] + (-_82.y);
            float _370 = (-_214) + fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3];
            bool _372 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3]) != 0;
            float _374 = fma(_370, _370, fma(_368, _368, _366 * _366));
            float _376 = _366 * inversesqrt(_374);
            float _378 = _368 * inversesqrt(_374);
            float _380 = _370 * inversesqrt(_374);
            float _382 = _146 + _376;
            float _384 = _150 + _378;
            float _386 = _152 + _380;
            uint _388 = uint(int(uint(_356 + 6880) >> uint(2)));
            int _390 = int(_388) + 1;
            float _392 = inversesqrt(fma(_386, _386, fma(_384, _384, _382 * _382)));
            float _394 = _382 * _392;
            float _396 = _384 * _392;
            float _398 = _386 * _392;
            float _400 = fma(_158, _380, fma(_156, _378, _154 * _376));
            float _402 = max(_400, fp_c1_1._m0[0].z);
            float _404 = max(fma(_152, _398, fma(_150, _396, _146 * _394)), fp_c1_1._m0[0].z);
            float _406 = max(fma(_158, _398, fma(_156, _396, _154 * _394)), fp_c1_1._m0[0].z) * max(fma(_158, _398, fma(_156, _396, _154 * _394)), fp_c1_1._m0[0].z);
            uint _408 = uint(int(uint(_356 + 6408) >> uint(2)));
            int _410 = int(_408) + 1;
            uint _412 = uint(int(uint(_356 + 6400) >> uint(2)));
            int _414 = int(_412) + 1;
            float _416 = fp_c10_1._m0[int(uint(_390) >> uint(2))][_390 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_388)) >> uint(2))][int(_388) & 3], -sqrt(_374), fp_c1_1._m0[1].y), 0.0, 1.0));
            float _418 = exp2(_404 * fma(_404, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _420 = _416;
            if (!_372)
            {
                _420 = 1.0;
            }
            float _422 = (_290 * (1.0 / (_282 + fma(_282, -_402, _402)))) * ((_250 * (1.0 / max(fma(_256, _406, -_406) + 1.0, fp_c1_1._m0[0].z))) * (_250 * (1.0 / max(fma(_256, _406, -_406) + 1.0, fp_c1_1._m0[0].z))));
            float _424 = _420;
            if (_372)
            {
                uint _426 = uint(int(uint(_356 + 7840) >> uint(2)));
                int _428 = int(_426) + 1;
                uint _430 = uint(int(uint(_356 + 7848) >> uint(2)));
                uint _432 = uint(int(uint(_356 + 6888) >> uint(2)));
                float _434 = fp_c10_1._m0[int(uint(int(_432)) >> uint(2))][int(_432) & 3];
                int _436 = int(_432) + 1;
                _424 = exp2(fp_c10_1._m0[int(uint(_436) >> uint(2))][_436 & 3] * log2(clamp(((-_434) + fma(_380, -fp_c10_1._m0[int(uint(int(_430)) >> uint(2))][int(_430) & 3], fma(_378, -fp_c10_1._m0[int(uint(_428) >> uint(2))][_428 & 3], _376 * (-fp_c10_1._m0[int(uint(int(_426)) >> uint(2))][int(_426) & 3])))) * (1.0 / ((-_434) + 1.0)), 0.0, 1.0)));
            }
            float _438 = exp2(_416) * _424;
            _440 = _342 + 1;
            float _442 = fp_c10_1._m0[int(uint(_410) >> uint(2))][_410 & 3] * _438;
            float _444 = _438 * clamp(_400 + (-0.0), 0.0, 1.0);
            float _446 = exp2(log2(clamp(fma(_174, -clamp((-_400) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_340, fp_c1_1._m0[2].x, exp2(_334 * log2(clamp(max(fma(_152, -_380, fma(_150, -_378, _146 * (-_376))), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0))) * _340) + 0.20000000298023223876953125);
            float _448 = _322 + fma((fp_c10_1._m0[int(uint(int(_412)) >> uint(2))][int(_412) & 3] * _444) * fma(_280, fp_c1_1._m0[1].z, ((_288 + fma(_288, -_418, _418)) * _422) * 0.079577468335628509521484375), _336, _338 * (_316 * (_446 * (_310 * _442))));
            float _450 = _324 + fma((fp_c10_1._m0[int(uint(_414) >> uint(2))][_414 & 3] * _444) * fma(_292, fp_c1_1._m0[1].z, ((_294 + fma(_294, -_418, _418)) * _422) * 0.079577468335628509521484375), _336, _338 * (_316 * (_446 * (_312 * _442))));
            float _452 = _326 + fma((fp_c10_1._m0[int(uint(int(_408)) >> uint(2))][int(_408) & 3] * _444) * fma(_298, fp_c1_1._m0[1].z, ((_296 + fma(_296, -_418, _418)) * _422) * 0.079577468335628509521484375), _336, _338 * (_316 * (_446 * (_314 * _442))));
            _320 = int(uint(_320) >> uint(8));
            _342 = _440;
            _322 = _448;
            _324 = _450;
            _326 = _452;
            _346 = _448;
            _348 = _450;
            _350 = _452;
        } while (!(_440 >= 4));
        _354 = false;
        _328 = _346;
        _330 = _348;
        _332 = _350;
        if ((_320 & 255) == 30)
        {
            float _454 = _82.y;
            float _456 = 1.0 / (fma(_214, fp_c10_1._m0[565].z, fma(_454, fp_c10_1._m0[565].y, _206 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _458 = 1.0 / fp_c10_1._m0[561].y;
            float _460 = _214 + (-fp_c10_1._m0[557].z);
            float _462 = _460 * fp_c10_1._m0[558].x;
            float _464 = _206 + (-fp_c10_1._m0[557].x);
            float _466 = (-_206) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_458, fp_c10_1._m0[557].x);
            float _468 = (-_214) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_458, fp_c10_1._m0[557].z);
            float _470 = _464 * fp_c10_1._m0[558].z;
            float _472 = _466 * _466;
            float _474 = fma(_460, _460, _464 * _464);
            float _476 = sqrt(fma(_468, _468, _472)) * (-fp_c10_1._m0[558].y);
            float _478 = ((-float(_462 < _470)) + float(_462 > _470)) * fp_c10_1._m0[561].y;
            float _480 = inversesqrt(fma(_468, _468, fma(_476, _476, _472)));
            bool _482 = fma(_460 * inversesqrt(_474), fp_c10_1._m0[558].z, (_464 * inversesqrt(_474)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _484 = _466 * _480;
            float _486 = _476 * _480;
            float _488 = _468 * _480;
            float _490 = _146 + _484;
            float _492 = _150 + _486;
            float _494 = fma(_460, fp_c10_1._m0[558].z, _464 * fp_c10_1._m0[558].x);
            float _496 = _152 + _488;
            bool _498 = _494 > 0.0;
            float _500 = inversesqrt(fma(_496, _496, fma(_492, _492, _490 * _490)));
            float _502 = inversesqrt(fma(_488, _488, _484 * _484));
            float _504 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_464, fma(_478, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_460 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_478 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_464, fma(_478, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_460 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_478 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _506 = _490 * _500;
            float _508 = _492 * _500;
            float _510 = _496 * _500;
            float _512 = _494 + (-fp_c10_1._m0[561].z);
            float _514 = fma(_158, _488, fma(_156, _486, _154 * _484));
            float _516 = _512;
            float _518 = fp_c10_1._m0[560].z;
            if (_498)
            {
                _516 = sqrt(_474);
            }
            float _520 = _516;
            if (!_498)
            {
                _520 = 1.0;
            }
            float _522 = clamp(fma(_512, -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_512, -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            if (_482)
            {
                _518 = fma(_504, -_504, fp_c1_1._m0[1].y) * fma(_504, -_504, fp_c1_1._m0[1].y);
            }
            float _524 = _518;
            if (!_482)
            {
                _524 = 1.0;
            }
            float _526 = max(fma(_158, _510, fma(_156, _508, _154 * _506)), fp_c1_1._m0[0].z) * max(fma(_158, _510, fma(_156, _508, _154 * _506)), fp_c1_1._m0[0].z);
            float _528 = max(fma(_152, _510, fma(_150, _508, _146 * _506)), fp_c1_1._m0[0].z);
            float _530 = max(_514, fp_c1_1._m0[0].z);
            float _532 = (exp2(log2(clamp(fma(_520, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_488 * _502, -fp_c10_1._m0[558].z, (_484 * _502) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_522, -_522, fp_c1_1._m0[1].y) * fma(_522, -_522, fp_c1_1._m0[1].y), _524);
            float _534 = exp2(_528 * fma(_528, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _536 = (fma(_340, fp_c1_1._m0[2].x, _340 * exp2(_334 * log2(clamp(max(fma(_152, -_488, fma(_150, -_486, _146 * (-_484))), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125) * exp2(log2(clamp(fma(_174, -clamp((-_514) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z);
            float _538 = _532 * clamp(_514 + (-0.0), 0.0, 1.0);
            float _540 = (_290 * (1.0 / (_282 + fma(_282, -_530, _530)))) * ((_250 * (1.0 / max(fma(_256, _526, -_526) + 1.0, fp_c1_1._m0[0].z))) * (_250 * (1.0 / max(fma(_256, _526, -_526) + 1.0, fp_c1_1._m0[0].z))));
            float _542 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_214, fp_c10_1._m0[562].z, fma(_454, fp_c10_1._m0[562].y, _206 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _456, 0.5, 0.5), (-fma((fma(_214, fp_c10_1._m0[563].z, fma(_454, fp_c10_1._m0[563].y, _206 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _456, 0.5, 0.5)) + 1.0)).z > fma((fma(_214, fp_c10_1._m0[564].z, fma(_454, fp_c10_1._m0[564].y, _206 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _456, 0.5, 0.5)) || (_494 <= 0.0));
            _328 = fma(fma(_336, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _538) * fma(_280, fp_c1_1._m0[1].z, (_540 * (_288 + fma(_288, -_534, _534))) * 0.079577468335628509521484375), _338 * (_316 * (_536 * (_310 * _532)))), _542, _346);
            _330 = fma(fma(_336, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _538) * fma(_292, fp_c1_1._m0[1].z, (_540 * (_294 + fma(_294, -_534, _534))) * 0.079577468335628509521484375), _338 * (_316 * (_536 * (_312 * _532)))), _542, _348);
            _332 = fma(fma(_336, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _538) * fma(_298, fp_c1_1._m0[1].z, (_540 * (_296 + fma(_296, -_534, _534))) * 0.079577468335628509521484375), _338 * (_316 * (_536 * (_314 * _532)))), _542, _350);
        }
    }
    float _544 = _82.y;
    float _546 = _206 + (-fp_c3_1._m0[11].w);
    float _548 = _214 + (-fp_c3_1._m0[13].w);
    float _550 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
    float _552 = _544 + (-fp_c3_1._m0[12].w);
    float _554 = fma(_548, _548, fma(_552, _552, _546 * _546));
    float _556 = clamp((-_316) + 1.0, 0.0, 1.0);
    float _558 = clamp(fma(_248, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _560 = exp2(log2(clamp(fma(_174, -clamp((-_268) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_550, fp_c1_1._m0[2].x, _550 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_152, fp_c5_1._m0[23].z, fma(_150, fp_c5_1._m0[23].y, _146 * fp_c5_1._m0[23].x)), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _562 = clamp(fma(_318 * _278, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _564 = exp2(log2(clamp(sqrt(_554) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_548 * inversesqrt(_554), fp_c5_1._m0[23].z, fma(_552 * inversesqrt(_554), fp_c5_1._m0[23].y, (_546 * inversesqrt(_554)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _566 = fma(_318, _328, fma(_278, _556 * (fma(_300 * (_288 + fma(_288, -_233, _233)), fp_c1_1._m0[1].x, _280 * 0.3183098733425140380859375) * (_308 * fp_c5_1._m0[5].x)), _558 * (_316 * (_560 * (_310 * fp_c5_1._m0[5].w)))));
    float _568 = fma(_318, _330, fma(_278, _556 * (fma(_300 * (_294 + fma(_294, -_233, _233)), fp_c1_1._m0[1].x, _292 * 0.3183098733425140380859375) * (_308 * fp_c5_1._m0[5].y)), _558 * (_316 * (_560 * (_312 * fp_c5_1._m0[5].w)))));
    float _570 = fma(_318, _332, fma(_278, _556 * (fma(_300 * (_296 + fma(_296, -_233, _233)), fp_c1_1._m0[1].x, _298 * 0.3183098733425140380859375) * (_308 * fp_c5_1._m0[5].z)), _558 * (_316 * (_560 * (_314 * fp_c5_1._m0[5].w)))));
    float _572 = clamp(fma(fma(_214, fp_c5_1._m0[14].z, fma(_544, fp_c5_1._m0[14].y, _206 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _574 = fma((-_566) + fp_c5_1._m0[13].x, _572, _566);
    float _576 = fma((-_568) + fp_c5_1._m0[13].y, _572, _568);
    float _578 = fma((-_570) + fp_c5_1._m0[13].z, _572, _570);
    float _580 = clamp((-exp2((clamp(fma(sqrt(_554), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _85.x = fma((-_574) + fma(fma((_564 * fp_c7_1._m0[55].x) * _562, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _580, _574);
    _85.y = fma((-_576) + fma(fma((_564 * fp_c7_1._m0[55].y) * _562, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _580, _576);
    _85.z = fma((-_578) + fma(fma((_564 * fp_c7_1._m0[55].z) * _562, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _580, _578);
    _85.w = 1.0;
}


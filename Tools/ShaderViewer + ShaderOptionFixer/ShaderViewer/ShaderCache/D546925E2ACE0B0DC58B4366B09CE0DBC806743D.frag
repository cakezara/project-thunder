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

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_16;
layout(binding = 6) uniform sampler2D fp_tex_tcb_18;
layout(binding = 7) uniform sampler2D fp_tex_tcb_1C;
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
    bool _336 = false;
    float _92 = _70.x;
    float _94 = _70.y;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    float _104 = _72.x;
    float _106 = _72.y;
    float _108 = _72.z;
    float _110 = _74.y;
    float _112 = _74.z;
    float _114 = _74.x;
    float _116 = _74.w;
    float _118 = _76.x;
    float _120 = _76.y;
    float _122 = _76.z;
    float _124 = 1.0 / (_78.z * gl_FragCoord.w);
    float _126 = inversesqrt(fma(_108, _108, fma(_106, _106, _104 * _104)));
    float _128 = _108 * _126;
    float _130 = _104 * _126;
    float _132 = _106 * _126;
    float _134 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _136 = fma(_130, _134, fma(_100, _114, _102 * (fma(_132, _112, -(_128 * _110)) * _116)));
    float _138 = fma(_132, _134, fma(_100, _110, _102 * (fma(_128, _114, -(_130 * _112)) * _116)));
    float _140 = fma(_128, _134, fma(_100, _112, _102 * (fma(_130, _110, -(_132 * _114)) * _116)));
    float _142 = inversesqrt(fma(_122, _122, fma(_120, _120, _118 * _118)));
    float _144 = _118 * (-_142);
    float _146 = inversesqrt(fma(_140, _140, fma(_138, _138, _136 * _136)));
    float _148 = _120 * (-_142);
    float _150 = _122 * (-_142);
    float _152 = _136 * _146;
    float _154 = _138 * _146;
    float _156 = _140 * _146;
    float _158 = 1.0 / _80.w;
    float _160 = fma(_156, _150, fma(_154, _148, _152 * _144));
    float _162 = fma(_152 * (-_160), -2.0, -_144);
    float _164 = fma(_154 * (-_160), -2.0, -_148);
    float _166 = fma(_156 * (-_160), -2.0, -_150);
    float _168 = 1.0 / max(abs(_166), max(abs(_162), abs(_164)));
    vec2 _170 = texture(fp_tex_tcb_2A, vec2(fma(_80.x * _158, 0.5, 0.5), fma(_80.y * _158, -0.5, 0.5))).xy;
    vec3 _174 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _176 = _174.x;
    float _178 = _174.y;
    float _180 = _174.z;
    float _182 = texture(fp_tex_tcb_12, vec2(_92, _94)).x;
    float _184 = max(texture(fp_tex_tcb_10, vec2(_92, _94)).x, fp_c1_1._m0[0].x);
    vec3 _186 = texture(fp_tex_tcb_16, vec2(_92, _94)).xyz;
    float _188 = max(_160, fp_c1_1._m0[0].y);
    vec2 _190 = texture(fp_tex_tcb_38, vec2(_188, (-_184) + (-0.0))).xy;
    float _192 = _190.x;
    float _194 = _190.y;
    vec3 _196 = texture(fp_tex_tcb_36, vec4(_162 * _168, _164 * _168, _166 * _168, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_184 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _198 = _82.x;
    float _200 = _82.z;
    float _202 = _144 + (-fp_c5_1._m0[23].x);
    float _204 = clamp(_82.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _206 = _148 + (-fp_c5_1._m0[23].y);
    float _208 = _150 + (-fp_c5_1._m0[23].z);
    float _210 = inversesqrt(fma(_208, _208, fma(_206, _206, _202 * _202)));
    int _213 = max(0, min(int(trunc((_200 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _215 = _152 * _154;
    float _217 = _154 * _156;
    float _219 = _202 * _210;
    float _221 = _206 * _210;
    float _223 = _208 * _210;
    float _225 = _156 * _156;
    uint _228 = uint(int(uint((((int(uint(_213) >> uint(16)) * 20) << 16) + (((_213 & 65535) * 20) + max(0, min(int(trunc((_198 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _230 = fp_c10_1._m0[int(uint(int(_228)) >> uint(2))][int(_228) & 3];
    float _232 = max(fma(_150, _223, fma(_148, _221, _144 * _219)), fp_c1_1._m0[0].y);
    float _234 = (-_170.y) + 1.0;
    float _236 = clamp(texture(fp_tex_tcb_C, vec2(_92, _94)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _238 = _152 * _156;
    float _240 = _234 * _204;
    float _242 = fma((-_176) + fp_c6_1._m0[93].x, _236, _176);
    float _244 = fma((-_178) + fp_c6_1._m0[93].y, _236, _178);
    float _246 = fma((-_180) + fp_c6_1._m0[93].z, _236, _180);
    float _248 = fma(_184, 0.5, 0.5);
    float _250 = _184 * _184;
    float _252 = max(fma(_156, _223, fma(_154, _221, _152 * _219)), fp_c1_1._m0[0].y) * max(fma(_156, _223, fma(_154, _221, _152 * _219)), fp_c1_1._m0[0].y);
    float _254 = _250 * _250;
    float _256 = fma(_156, -fp_c5_1._m0[23].z, fma(_154, -fp_c5_1._m0[23].y, _152 * (-fp_c5_1._m0[23].x)));
    float _258 = (_248 * 0.5) * _248;
    float _260 = max(_256, fp_c1_1._m0[0].y);
    float _262 = 1.0 / (_258 + fma(_188, -_258, _188));
    float _264 = fma(_152, _152, -(_154 * _154));
    float _266 = clamp((-fma(_204, max((-_170.x) + 1.0, _234), fma(texture(fp_tex_tcb_28, vec2((_78.x * gl_FragCoord.w) * _124, (_78.y * gl_FragCoord.w) * _124)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _268 = exp2(_232 * fma(_232, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _270 = fma(_182, _244 + (-0.039999999105930328369140625), fp_c1_1._m0[0].w);
    float _272 = fma(_242, -_182, _242);
    float _274 = fma(_182, _242 + (-0.039999999105930328369140625), fp_c1_1._m0[0].w);
    float _276 = fma(_244, -_182, _244);
    float _278 = (_262 * (1.0 / (_258 + fma(_258, -_260, _260)))) * ((_250 * (1.0 / max(fma(_252, _254, -_252) + 1.0, fp_c1_1._m0[0].y))) * (_250 * (1.0 / max(fma(_252, _254, -_252) + 1.0, fp_c1_1._m0[0].y))));
    float _280 = fma(_182, _246 + (-0.039999999105930328369140625), fp_c1_1._m0[0].w);
    float _282 = _246 * (_186.z * fp_c6_1._m0[19].z);
    float _284 = fma(_246, -_182, _246);
    float _286 = _242 * (_186.x * fp_c6_1._m0[19].x);
    float _288 = clamp(_256 + (-0.0), 0.0, 1.0);
    float _290 = _244 * (_186.y * fp_c6_1._m0[19].y);
    float _292 = fma(_196.x, fma(_274, _192, _194), max(0.0, fma(_264, fp_c5_1._m0[31].x, (fma(_156, fp_c5_1._m0[25].z, fma(_154, fp_c5_1._m0[25].y, _152 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_238, fp_c5_1._m0[28].w, fma(_225, fp_c5_1._m0[28].z, fma(_217, fp_c5_1._m0[28].y, _215 * fp_c5_1._m0[28].x))))) * fma(_272, -_274, _272));
    float _294 = fma(_196.y, fma(_270, _192, _194), max(0.0, fma(_264, fp_c5_1._m0[31].y, (fma(_156, fp_c5_1._m0[26].z, fma(_154, fp_c5_1._m0[26].y, _152 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_238, fp_c5_1._m0[29].w, fma(_225, fp_c5_1._m0[29].z, fma(_217, fp_c5_1._m0[29].y, _215 * fp_c5_1._m0[29].x))))) * fma(_276, -_270, _276));
    float _296 = fma(_196.z, fma(_280, _192, _194), max(0.0, fma(_264, fp_c5_1._m0[31].z, (fma(_156, fp_c5_1._m0[27].z, fma(_154, fp_c5_1._m0[27].y, _152 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_238, fp_c5_1._m0[30].w, fma(_225, fp_c5_1._m0[30].z, fma(_217, fp_c5_1._m0[30].y, _215 * fp_c5_1._m0[30].x))))) * fma(_284, -_280, _284));
    float _298 = texture(fp_tex_tcb_1C, vec2(_92, _94)).x * fp_c6_1._m0[18].x;
    float _300 = clamp(texture(fp_tex_tcb_18, vec2(_92, _94)).x + (-0.0), 0.0, 1.0);
    int _302 = floatBitsToInt(_230);
    float _304 = _294;
    float _306 = _292;
    float _308 = _296;
    float _310 = _292;
    float _312 = _294;
    float _314 = _296;
    if (floatBitsToInt(_230) != (-1))
    {
        float _316 = 1.0 / fp_c6_1._m0[18].y;
        float _318 = clamp((-_298) + 1.0, 0.0, 1.0);
        float _320 = clamp(fma(_240, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _322 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _324 = 0;
        float _328;
        float _330;
        float _332;
        int _422;
        do
        {
            int _326 = _302 & 255;
            _328 = _306;
            _330 = _304;
            _332 = _308;
            _336 = uint(_326) >= 30u;
            if (_336)
            {
                break;
            }
            int _338 = _326 << 4;
            uint _340 = uint(int(uint(_338 + 7360) >> uint(2)));
            int _342 = int(_340) + 1;
            uint _344 = uint(int(uint(_338 + 7368) >> uint(2)));
            float _346 = (-_198) + fp_c10_1._m0[int(uint(int(_340)) >> uint(2))][int(_340) & 3];
            float _348 = fp_c10_1._m0[int(uint(_342) >> uint(2))][_342 & 3] + (-_82.y);
            float _350 = (-_200) + fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3];
            float _352 = fma(_350, _350, fma(_348, _348, _346 * _346));
            float _354 = _346 * inversesqrt(_352);
            float _356 = _348 * inversesqrt(_352);
            float _358 = _350 * inversesqrt(_352);
            float _360 = _144 + _354;
            float _362 = _148 + _356;
            float _364 = _150 + _358;
            uint _366 = uint(int(uint(_338 + 6880) >> uint(2)));
            int _368 = int(_366) + 1;
            float _370 = inversesqrt(fma(_364, _364, fma(_362, _362, _360 * _360)));
            float _372 = _360 * _370;
            float _374 = _362 * _370;
            float _376 = _364 * _370;
            uint _378 = uint(int(uint(_338 + 8320) >> uint(2)));
            float _380 = fma(_156, _358, fma(_154, _356, _152 * _354));
            float _382 = max(fma(_150, _376, fma(_148, _374, _144 * _372)), fp_c1_1._m0[0].y);
            float _384 = max(fma(_156, _376, fma(_154, _374, _152 * _372)), fp_c1_1._m0[0].y) * max(fma(_156, _376, fma(_154, _374, _152 * _372)), fp_c1_1._m0[0].y);
            float _386 = max(_380, fp_c1_1._m0[0].y);
            uint _388 = uint(int(uint(_338 + 6400) >> uint(2)));
            int _390 = int(_388) + 1;
            uint _392 = uint(int(uint(_338 + 6408) >> uint(2)));
            int _394 = int(_392) + 1;
            float _396 = fp_c10_1._m0[int(uint(_368) >> uint(2))][_368 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3], -sqrt(_352), fp_c1_1._m0[1].y), 0.0, 1.0));
            float _398 = exp2(_382 * fma(_382, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _400 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_378)) >> uint(2))][int(_378) & 3]) != 0;
            float _402 = (_262 * (1.0 / (_258 + fma(_258, -_386, _386)))) * ((_250 * (1.0 / max(fma(_254, _384, -_384) + 1.0, fp_c1_1._m0[0].y))) * (_250 * (1.0 / max(fma(_254, _384, -_384) + 1.0, fp_c1_1._m0[0].y))));
            float _404 = _396;
            if (!_400)
            {
                _404 = 1.0;
            }
            float _406 = _404;
            if (_400)
            {
                uint _408 = uint(int(uint(_338 + 7840) >> uint(2)));
                int _410 = int(_408) + 1;
                uint _412 = uint(int(uint(_338 + 7848) >> uint(2)));
                uint _414 = uint(int(uint(_338 + 6888) >> uint(2)));
                float _416 = fp_c10_1._m0[int(uint(int(_414)) >> uint(2))][int(_414) & 3];
                int _418 = int(_414) + 1;
                _406 = exp2(fp_c10_1._m0[int(uint(_418) >> uint(2))][_418 & 3] * log2(clamp(((-_416) + fma(_358, -fp_c10_1._m0[int(uint(int(_412)) >> uint(2))][int(_412) & 3], fma(_356, -fp_c10_1._m0[int(uint(_410) >> uint(2))][_410 & 3], _354 * (-fp_c10_1._m0[int(uint(int(_408)) >> uint(2))][int(_408) & 3])))) * (1.0 / ((-_416) + 1.0)), 0.0, 1.0)));
            }
            float _420 = exp2(_396) * _406;
            _422 = _324 + 1;
            float _424 = fp_c10_1._m0[int(uint(_394) >> uint(2))][_394 & 3] * _420;
            float _426 = _420 * clamp(_380 + (-0.0), 0.0, 1.0);
            float _428 = exp2(log2(clamp(fma(_160, -clamp((-_380) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_322, fp_c1_1._m0[2].x, exp2(_316 * log2(clamp(max(fma(_150, -_358, fma(_148, -_356, _144 * (-_354))), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0))) * _322) + 0.20000000298023223876953125);
            float _430 = _304 + fma((fp_c10_1._m0[int(uint(_390) >> uint(2))][_390 & 3] * _426) * fma(_276, fp_c1_1._m0[1].z, ((_270 + fma(_270, -_398, _398)) * _402) * 0.079577468335628509521484375), _318, _320 * (_298 * (_428 * (_290 * _424))));
            float _432 = _306 + fma((fp_c10_1._m0[int(uint(int(_388)) >> uint(2))][int(_388) & 3] * _426) * fma(_272, fp_c1_1._m0[1].z, ((_274 + fma(_274, -_398, _398)) * _402) * 0.079577468335628509521484375), _318, _320 * (_298 * (_428 * (_286 * _424))));
            float _434 = _308 + fma((fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3] * _426) * fma(_284, fp_c1_1._m0[1].z, ((_280 + fma(_280, -_398, _398)) * _402) * 0.079577468335628509521484375), _318, _320 * (_298 * (_428 * (_282 * _424))));
            _302 = int(uint(_302) >> uint(8));
            _324 = _422;
            _304 = _430;
            _306 = _432;
            _308 = _434;
            _328 = _432;
            _330 = _430;
            _332 = _434;
        } while (!(_422 >= 4));
        _336 = false;
        _310 = _328;
        _312 = _330;
        _314 = _332;
        if ((_302 & 255) == 30)
        {
            float _436 = _82.y;
            float _438 = 1.0 / (fma(_200, fp_c10_1._m0[565].z, fma(_436, fp_c10_1._m0[565].y, _198 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _440 = 1.0 / fp_c10_1._m0[561].y;
            float _442 = _198 + (-fp_c10_1._m0[557].x);
            float _444 = _442 * fp_c10_1._m0[558].z;
            float _446 = _200 + (-fp_c10_1._m0[557].z);
            float _448 = (-_198) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_440, fp_c10_1._m0[557].x);
            float _450 = (-_200) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_440, fp_c10_1._m0[557].z);
            float _452 = _446 * fp_c10_1._m0[558].x;
            float _454 = fma(_446, _446, _442 * _442);
            float _456 = _448 * _448;
            float _458 = sqrt(fma(_450, _450, _456)) * (-fp_c10_1._m0[558].y);
            float _460 = ((-float(_452 < _444)) + float(_452 > _444)) * fp_c10_1._m0[561].y;
            bool _462 = fma(_446 * inversesqrt(_454), fp_c10_1._m0[558].z, (_442 * inversesqrt(_454)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _464 = inversesqrt(fma(_450, _450, fma(_458, _458, _456)));
            float _466 = _448 * _464;
            float _468 = _458 * _464;
            float _470 = _450 * _464;
            float _472 = _144 + _466;
            float _474 = _148 + _468;
            float _476 = fma(_446, fp_c10_1._m0[558].z, _442 * fp_c10_1._m0[558].x);
            float _478 = _150 + _470;
            bool _480 = _476 > 0.0;
            float _482 = inversesqrt(fma(_478, _478, fma(_474, _474, _472 * _472)));
            float _484 = inversesqrt(fma(_470, _470, _466 * _466));
            float _486 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_442, fma(_460, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_446 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_460 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_442, fma(_460, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_446 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_460 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _488 = _478 * _482;
            float _490 = _474 * _482;
            float _492 = _472 * _482;
            float _494 = _476 + (-fp_c10_1._m0[561].z);
            float _496 = fma(_156, _470, fma(_154, _468, _152 * _466));
            float _498 = _494;
            float _500 = fp_c10_1._m0[560].z;
            if (_480)
            {
                _498 = sqrt(_454);
            }
            float _502 = _498;
            if (!_480)
            {
                _502 = 1.0;
            }
            if (_462)
            {
                _500 = fma(_486, -_486, fp_c1_1._m0[1].y) * fma(_486, -_486, fp_c1_1._m0[1].y);
            }
            float _504 = clamp(fma(_494, -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_494, -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _506 = _500;
            if (!_462)
            {
                _506 = 1.0;
            }
            float _508 = max(fma(_156, _488, fma(_154, _490, _152 * _492)), fp_c1_1._m0[0].y) * max(fma(_156, _488, fma(_154, _490, _152 * _492)), fp_c1_1._m0[0].y);
            float _510 = max(_496, fp_c1_1._m0[0].y);
            float _512 = max(fma(_150, _488, fma(_148, _490, _144 * _492)), fp_c1_1._m0[0].y);
            float _514 = exp2(_512 * fma(_512, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _516 = (exp2(log2(clamp(fma(_502, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_470 * _484, -fp_c10_1._m0[558].z, (_466 * _484) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_504, -_504, fp_c1_1._m0[1].y) * fma(_504, -_504, fp_c1_1._m0[1].y), _506);
            float _518 = (fma(_322, fp_c1_1._m0[2].x, _322 * exp2(_316 * log2(clamp(max(fma(_150, -_470, fma(_148, -_468, _144 * (-_466))), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125) * exp2(log2(clamp(fma(_160, -clamp((-_496) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z);
            float _520 = _516 * clamp(_496 + (-0.0), 0.0, 1.0);
            float _522 = (_262 * (1.0 / (_258 + fma(_258, -_510, _510)))) * ((_250 * (1.0 / max(fma(_254, _508, -_508) + 1.0, fp_c1_1._m0[0].y))) * (_250 * (1.0 / max(fma(_254, _508, -_508) + 1.0, fp_c1_1._m0[0].y))));
            float _524 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_200, fp_c10_1._m0[562].z, fma(_436, fp_c10_1._m0[562].y, _198 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _438, 0.5, 0.5), (-fma((fma(_200, fp_c10_1._m0[563].z, fma(_436, fp_c10_1._m0[563].y, _198 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _438, 0.5, 0.5)) + 1.0)).z > fma((fma(_200, fp_c10_1._m0[564].z, fma(_436, fp_c10_1._m0[564].y, _198 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _438, 0.5, 0.5)) || (_476 <= 0.0));
            _310 = fma(fma(_318, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _520) * fma(_272, fp_c1_1._m0[1].z, (_522 * (_274 + fma(_274, -_514, _514))) * 0.079577468335628509521484375), _320 * (_298 * (_518 * (_286 * _516)))), _524, _328);
            _312 = fma(fma(_318, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _520) * fma(_276, fp_c1_1._m0[1].z, (_522 * (_270 + fma(_270, -_514, _514))) * 0.079577468335628509521484375), _320 * (_298 * (_518 * (_290 * _516)))), _524, _330);
            _314 = fma(fma(_318, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _520) * fma(_284, fp_c1_1._m0[1].z, (_522 * (_280 + fma(_280, -_514, _514))) * 0.079577468335628509521484375), _320 * (_298 * (_518 * (_282 * _516)))), _524, _332);
        }
    }
    float _526 = _82.y;
    float _528 = _198 + (-fp_c3_1._m0[11].w);
    float _530 = _200 + (-fp_c3_1._m0[13].w);
    float _532 = _526 + (-fp_c3_1._m0[12].w);
    float _534 = fma(_530, _530, fma(_532, _532, _528 * _528));
    float _536 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
    float _538 = clamp((-_298) + 1.0, 0.0, 1.0);
    float _540 = clamp(fma(_240, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _542 = exp2(log2(clamp(fma(_160, -clamp((-_256) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_536, fp_c1_1._m0[2].x, _536 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_150, fp_c5_1._m0[23].z, fma(_148, fp_c5_1._m0[23].y, _144 * fp_c5_1._m0[23].x)), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _544 = clamp(fma(_300 * _266, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _546 = exp2(log2(clamp(sqrt(_534) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_530 * inversesqrt(_534), fp_c5_1._m0[23].z, fma(_532 * inversesqrt(_534), fp_c5_1._m0[23].y, (_528 * inversesqrt(_534)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _548 = fma(_300, _310, fma(_266, _538 * (fma(_278 * (_274 + fma(_274, -_268, _268)), fp_c1_1._m0[1].x, _272 * 0.3183098733425140380859375) * (_288 * fp_c5_1._m0[5].x)), _540 * (_298 * (_542 * (_286 * fp_c5_1._m0[5].w)))));
    float _550 = fma(_300, _312, fma(_266, _538 * (fma(_278 * (_270 + fma(_270, -_268, _268)), fp_c1_1._m0[1].x, _276 * 0.3183098733425140380859375) * (_288 * fp_c5_1._m0[5].y)), _540 * (_298 * (_542 * (_290 * fp_c5_1._m0[5].w)))));
    float _552 = fma(_300, _314, fma(_266, _538 * (fma(_278 * (_280 + fma(_280, -_268, _268)), fp_c1_1._m0[1].x, _284 * 0.3183098733425140380859375) * (_288 * fp_c5_1._m0[5].z)), _540 * (_298 * (_542 * (_282 * fp_c5_1._m0[5].w)))));
    float _554 = clamp(fma(fma(_200, fp_c5_1._m0[14].z, fma(_526, fp_c5_1._m0[14].y, _198 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _556 = fma((-_548) + fp_c5_1._m0[13].x, _554, _548);
    float _558 = fma((-_550) + fp_c5_1._m0[13].y, _554, _550);
    float _560 = fma((-_552) + fp_c5_1._m0[13].z, _554, _552);
    float _562 = clamp((-exp2((clamp(fma(sqrt(_534), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _85.x = fma((-_556) + fma(fma((_546 * fp_c7_1._m0[55].x) * _544, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _562, _556);
    _85.y = fma((-_558) + fma(fma((_546 * fp_c7_1._m0[55].y) * _544, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _562, _558);
    _85.z = fma((-_560) + fma(fma((_546 * fp_c7_1._m0[55].z) * _544, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _562, _560);
    _85.w = 1.0;
}


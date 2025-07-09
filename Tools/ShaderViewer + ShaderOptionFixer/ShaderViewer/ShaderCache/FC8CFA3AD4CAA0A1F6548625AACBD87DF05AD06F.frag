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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
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
layout(location = 5) in vec4 _74;
layout(location = 6) in vec4 _76;
layout(location = 3) in vec4 _78;
layout(location = 0) out vec4 _81;
uint _6[12];

void main()
{
    bool _306 = false;
    float _88 = _66.x;
    float _90 = _66.y;
    vec2 _94 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _96 = _94.x;
    float _98 = _94.y;
    float _100 = _68.x;
    float _102 = _68.y;
    float _104 = _68.z;
    float _106 = _70.y;
    float _108 = _70.z;
    float _110 = _70.x;
    float _112 = _70.w;
    float _114 = _72.x;
    float _116 = _72.y;
    float _118 = _72.z;
    float _120 = inversesqrt(fma(_104, _104, fma(_102, _102, _100 * _100)));
    float _122 = _104 * _120;
    float _124 = _100 * _120;
    float _126 = _102 * _120;
    float _128 = sqrt(clamp((-fma(_96, _96, _98 * _98)) + 1.0, 0.0, 1.0));
    float _130 = fma(_124, _128, fma(_96, _110, _98 * (fma(_126, _108, -(_122 * _106)) * _112)));
    float _132 = fma(_126, _128, fma(_96, _106, _98 * (fma(_122, _110, -(_124 * _108)) * _112)));
    float _134 = fma(_122, _128, fma(_96, _108, _98 * (fma(_124, _106, -(_126 * _110)) * _112)));
    float _136 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _138 = inversesqrt(fma(_134, _134, fma(_132, _132, _130 * _130)));
    float _140 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _142 = _114 * (-_136);
    float _144 = _116 * (-_136);
    float _146 = _118 * (-_136);
    float _148 = _130 * _138;
    float _150 = _132 * _138;
    float _152 = _134 * _138;
    float _154 = fma(_152, _146, fma(_150, _144, _148 * _142));
    float _156 = 1.0 / (_76.z * gl_FragCoord.w);
    float _158 = 1.0 / _74.w;
    float _160 = fma(_148 * (-_154), -2.0, -_142);
    float _162 = fma(_150 * (-_154), -2.0, -_144);
    float _164 = max(_154, fp_c1_1._m0[0].z);
    float _166 = fma(_152 * (-_154), -2.0, -_146);
    float _168 = 1.0 / max(abs(_166), max(abs(_160), abs(_162)));
    vec2 _170 = texture(fp_tex_tcb_2A, vec2(fma(_74.x * _158, 0.5, 0.5), fma(_74.y * _158, -0.5, 0.5))).xy;
    vec3 _174 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _176 = _174.x;
    float _178 = _174.y;
    float _180 = _174.z;
    float _182 = texture(fp_tex_tcb_12, vec2(_88, _90)).x;
    vec2 _184 = texture(fp_tex_tcb_38, vec2(_164, (-_140) + (-0.0))).xy;
    float _186 = _184.x;
    float _188 = _184.y;
    vec3 _190 = texture(fp_tex_tcb_36, vec4(_160 * _168, _162 * _168, _166 * _168, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_140 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _192 = _142 + (-fp_c5_1._m0[23].x);
    float _194 = _144 + (-fp_c5_1._m0[23].y);
    float _196 = _146 + (-fp_c5_1._m0[23].z);
    float _198 = _78.z;
    float _200 = _78.x;
    float _202 = _148 * _150;
    float _204 = inversesqrt(fma(_196, _196, fma(_194, _194, _192 * _192)));
    float _206 = _150 * _152;
    float _208 = _192 * _204;
    float _210 = _194 * _204;
    float _212 = _196 * _204;
    float _214 = _152 * _152;
    float _216 = _148 * _152;
    float _218 = fma(_148, _148, -(_150 * _150));
    int _221 = max(0, min(int(trunc((_198 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _223 = _140 * _140;
    float _225 = fma(_140, 0.5, 0.5);
    float _227 = clamp(texture(fp_tex_tcb_18, vec2(_88, _90)).x + (-0.0), 0.0, 1.0);
    float _229 = fma(_150, -fp_c5_1._m0[23].y, _148 * (-fp_c5_1._m0[23].x));
    float _231 = clamp((-fma(max((-_170.x) + 1.0, (-_170.y) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _156, (_76.y * gl_FragCoord.w) * _156)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _233 = max(fma(_146, _212, fma(_144, _210, _142 * _208)), fp_c1_1._m0[0].z);
    float _235 = clamp(fma(_152, -fp_c5_1._m0[23].z, _229), 0.0, 1.0);
    float _237 = max(fma(_152, _212, fma(_150, _210, _148 * _208)), fp_c1_1._m0[0].z) * max(fma(_152, _212, fma(_150, _210, _148 * _208)), fp_c1_1._m0[0].z);
    float _239 = max(fma(_152, -fp_c5_1._m0[23].z, _229), fp_c1_1._m0[0].z);
    uint _242 = uint(int(uint((((int(uint(_221) >> uint(16)) * 20) << 16) + (((_221 & 65535) * 20) + max(0, min(int(trunc((_200 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _244 = fp_c10_1._m0[int(uint(int(_242)) >> uint(2))][int(_242) & 3];
    float _246 = (_225 * 0.5) * _225;
    float _248 = clamp(texture(fp_tex_tcb_C, vec2(_88, _90)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _250 = fma((-_178) + fp_c6_1._m0[92].y, _248, _178);
    float _252 = 1.0 / (_246 + fma(_164, -_246, _164));
    float _254 = fma((-_176) + fp_c6_1._m0[92].x, _248, _176);
    float _256 = fma((-_180) + fp_c6_1._m0[92].z, _248, _180);
    float _258 = fma(_254, -_182, _254);
    float _260 = exp2(_233 * fma(_233, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _262 = fma(_250, -_182, _250);
    float _264 = fma(_182, _250 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _266 = fma(_182, _254 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _268 = fma(_182, _256 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _270 = fma(_256, -_182, _256);
    float _272 = (_252 * (1.0 / (_246 + fma(_246, -_239, _239)))) * ((_223 * (1.0 / max(fma(_237, _223 * _223, -_237) + 1.0, fp_c1_1._m0[0].z))) * (_223 * (1.0 / max(fma(_237, _223 * _223, -_237) + 1.0, fp_c1_1._m0[0].z))));
    float _274 = fma(_190.y, fma(_264, _186, _188), max(0.0, fma(_218, fp_c5_1._m0[31].y, (fma(_152, fp_c5_1._m0[26].z, fma(_150, fp_c5_1._m0[26].y, _148 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_216, fp_c5_1._m0[29].w, fma(_214, fp_c5_1._m0[29].z, fma(_206, fp_c5_1._m0[29].y, _202 * fp_c5_1._m0[29].x))))) * fma(_264, -_262, _262));
    float _276 = fma(_190.x, fma(_266, _186, _188), max(0.0, fma(_218, fp_c5_1._m0[31].x, (fma(_152, fp_c5_1._m0[25].z, fma(_150, fp_c5_1._m0[25].y, _148 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_216, fp_c5_1._m0[28].w, fma(_214, fp_c5_1._m0[28].z, fma(_206, fp_c5_1._m0[28].y, _202 * fp_c5_1._m0[28].x))))) * fma(_266, -_258, _258));
    float _278 = fma(_190.z, fma(_268, _186, _188), max(0.0, fma(_218, fp_c5_1._m0[31].z, (fma(_152, fp_c5_1._m0[27].z, fma(_150, fp_c5_1._m0[27].y, _148 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_216, fp_c5_1._m0[30].w, fma(_214, fp_c5_1._m0[30].z, fma(_206, fp_c5_1._m0[30].y, _202 * fp_c5_1._m0[30].x))))) * fma(_268, -_270, _270));
    int _280 = floatBitsToInt(_244);
    float _282 = _274;
    float _284 = _278;
    float _286 = _276;
    float _288 = _276;
    float _290 = _274;
    float _292 = _278;
    if (floatBitsToInt(_244) != (-1))
    {
        int _294 = 0;
        float _298;
        float _300;
        float _302;
        int _388;
        do
        {
            int _296 = _280 & 255;
            _298 = _286;
            _300 = _282;
            _302 = _284;
            _306 = uint(_296) >= 30u;
            if (_306)
            {
                break;
            }
            int _308 = _296 << 4;
            uint _310 = uint(int(uint(_308 + 7360) >> uint(2)));
            int _312 = int(_310) + 1;
            uint _314 = uint(int(uint(_308 + 7368) >> uint(2)));
            float _316 = (-_200) + fp_c10_1._m0[int(uint(int(_310)) >> uint(2))][int(_310) & 3];
            float _318 = fp_c10_1._m0[int(uint(_312) >> uint(2))][_312 & 3] + (-_78.y);
            float _320 = (-_198) + fp_c10_1._m0[int(uint(int(_314)) >> uint(2))][int(_314) & 3];
            float _322 = fma(_320, _320, fma(_318, _318, _316 * _316));
            float _324 = _316 * inversesqrt(_322);
            float _326 = _318 * inversesqrt(_322);
            float _328 = _320 * inversesqrt(_322);
            float _330 = _142 + _324;
            float _332 = _144 + _326;
            float _334 = _146 + _328;
            uint _336 = uint(int(uint(_308 + 6880) >> uint(2)));
            int _338 = int(_336) + 1;
            float _340 = inversesqrt(fma(_334, _334, fma(_332, _332, _330 * _330)));
            float _342 = _330 * _340;
            float _344 = _332 * _340;
            float _346 = _334 * _340;
            float _348 = max(fma(_146, _346, fma(_144, _344, _142 * _342)), fp_c1_1._m0[0].z);
            float _350 = fma(_152, _328, fma(_150, _326, _148 * _324));
            float _352 = max(fma(_152, _346, fma(_150, _344, _148 * _342)), fp_c1_1._m0[0].z) * max(fma(_152, _346, fma(_150, _344, _148 * _342)), fp_c1_1._m0[0].z);
            uint _354 = uint(int(uint(_308 + 8320) >> uint(2)));
            float _356 = max(_350, fp_c1_1._m0[0].z);
            float _358 = fp_c10_1._m0[int(uint(_338) >> uint(2))][_338 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_336)) >> uint(2))][int(_336) & 3], -sqrt(_322), fp_c1_1._m0[1].y), 0.0, 1.0));
            uint _360 = uint(int(uint(_308 + 6400) >> uint(2)));
            int _362 = int(_360) + 1;
            uint _364 = uint(int(uint(_308 + 6408) >> uint(2)));
            float _366 = exp2(_348 * fma(_348, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _368 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_354)) >> uint(2))][int(_354) & 3]) != 0;
            float _370 = (_252 * (1.0 / (_246 + fma(_246, -_356, _356)))) * ((_223 * (1.0 / max(fma(_223 * _223, _352, -_352) + 1.0, fp_c1_1._m0[0].z))) * (_223 * (1.0 / max(fma(_223 * _223, _352, -_352) + 1.0, fp_c1_1._m0[0].z))));
            float _372 = _358;
            if (!_368)
            {
                _372 = 1.0;
            }
            float _374 = _372;
            if (_368)
            {
                uint _376 = uint(int(uint(_308 + 7840) >> uint(2)));
                int _378 = int(_376) + 1;
                uint _380 = uint(int(uint(_308 + 7848) >> uint(2)));
                uint _382 = uint(int(uint(_308 + 6888) >> uint(2)));
                float _384 = fp_c10_1._m0[int(uint(int(_382)) >> uint(2))][int(_382) & 3];
                int _386 = int(_382) + 1;
                _374 = exp2(fp_c10_1._m0[int(uint(_386) >> uint(2))][_386 & 3] * log2(clamp(((-_384) + fma(_328, -fp_c10_1._m0[int(uint(int(_380)) >> uint(2))][int(_380) & 3], fma(_326, -fp_c10_1._m0[int(uint(_378) >> uint(2))][_378 & 3], _324 * (-fp_c10_1._m0[int(uint(int(_376)) >> uint(2))][int(_376) & 3])))) * (1.0 / ((-_384) + 1.0)), 0.0, 1.0)));
            }
            _388 = _294 + 1;
            float _390 = (exp2(_358) * _374) * clamp(_350 + (-0.0), 0.0, 1.0);
            float _392 = fma(fp_c10_1._m0[int(uint(_362) >> uint(2))][_362 & 3] * _390, fma(_262, fp_c1_1._m0[1].z, ((_264 + fma(_264, -_366, _366)) * _370) * 0.079577468335628509521484375), _282);
            float _394 = fma(fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3] * _390, fma(_270, fp_c1_1._m0[1].z, ((_268 + fma(_268, -_366, _366)) * _370) * 0.079577468335628509521484375), _284);
            float _396 = fma(fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3] * _390, fma(_258, fp_c1_1._m0[1].z, ((_266 + fma(_266, -_366, _366)) * _370) * 0.079577468335628509521484375), _286);
            _280 = int(uint(_280) >> uint(8));
            _294 = _388;
            _282 = _392;
            _284 = _394;
            _286 = _396;
            _298 = _396;
            _300 = _392;
            _302 = _394;
        } while (!(_388 >= 4));
        _306 = false;
        _288 = _298;
        _290 = _300;
        _292 = _302;
        if ((_280 & 255) == 30)
        {
            float _398 = _78.y;
            float _400 = 1.0 / (fma(_198, fp_c10_1._m0[565].z, fma(_398, fp_c10_1._m0[565].y, _200 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _402 = 1.0 / fp_c10_1._m0[561].y;
            float _404 = _200 + (-fp_c10_1._m0[557].x);
            float _406 = _404 * fp_c10_1._m0[558].z;
            float _408 = (-_200) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_402, fp_c10_1._m0[557].x);
            float _410 = (-_198) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_402, fp_c10_1._m0[557].z);
            float _412 = _408 * _408;
            float _414 = sqrt(fma(_410, _410, _412)) * (-fp_c10_1._m0[558].y);
            float _416 = inversesqrt(fma(_410, _410, fma(_414, _414, _412)));
            float _418 = _198 + (-fp_c10_1._m0[557].z);
            float _420 = _418 * fp_c10_1._m0[558].x;
            float _422 = _408 * _416;
            float _424 = _414 * _416;
            float _426 = _410 * _416;
            float _428 = _142 + _422;
            float _430 = _144 + _424;
            float _432 = _146 + _426;
            float _434 = ((-float(_420 < _406)) + float(_420 > _406)) * fp_c10_1._m0[561].y;
            float _436 = fma(_152, _426, fma(_150, _424, _148 * _422));
            float _438 = inversesqrt(fma(_432, _432, fma(_430, _430, _428 * _428)));
            float _440 = _428 * _438;
            float _442 = _430 * _438;
            float _444 = fma(_418, _418, _404 * _404);
            float _446 = fma(_418, fp_c10_1._m0[558].z, _404 * fp_c10_1._m0[558].x);
            bool _448 = _446 > 0.0;
            float _450 = inversesqrt(fma(_426, _426, _422 * _422));
            float _452 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_404, fma(_434, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_418 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_434 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_404, fma(_434, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_418 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_434 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _454 = _422;
            if (_448)
            {
                _454 = sqrt(_444);
            }
            float _456 = _432 * _438;
            float _458 = _454;
            if (!_448)
            {
                _458 = 1.0;
            }
            float _460 = max(fma(_146, _456, fma(_144, _442, _142 * _440)), fp_c1_1._m0[0].z);
            float _462 = max(fma(_152, _456, fma(_150, _442, _148 * _440)), fp_c1_1._m0[0].z) * max(fma(_152, _456, fma(_150, _442, _148 * _440)), fp_c1_1._m0[0].z);
            float _464 = clamp(fma(_446 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_446 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            bool _466 = fma(_418 * inversesqrt(_444), fp_c10_1._m0[558].z, (_404 * inversesqrt(_444)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _468 = max(_436, fp_c1_1._m0[0].z);
            float _470 = 6.9831600189208984375;
            if (_466)
            {
                _470 = fma(_452, -_452, fp_c1_1._m0[1].y) * fma(_452, -_452, fp_c1_1._m0[1].y);
            }
            float _472 = exp2(_460 * fma(_460, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _474 = _470;
            if (!_466)
            {
                _474 = 1.0;
            }
            float _476 = (_252 * (1.0 / (_246 + fma(_246, -_468, _468)))) * ((_223 * (1.0 / max(fma(_223 * _223, _462, -_462) + 1.0, fp_c1_1._m0[0].z))) * (_223 * (1.0 / max(fma(_223 * _223, _462, -_462) + 1.0, fp_c1_1._m0[0].z))));
            float _478 = (min(fma(_464, -_464, fp_c1_1._m0[1].y) * fma(_464, -_464, fp_c1_1._m0[1].y), _474) * (exp2(log2(clamp(fma(_458, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_426 * _450, -fp_c10_1._m0[558].z, (_422 * _450) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_436 + (-0.0), 0.0, 1.0);
            float _480 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_198, fp_c10_1._m0[562].z, fma(_398, fp_c10_1._m0[562].y, _200 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _400, 0.5, 0.5), (-fma((fma(_198, fp_c10_1._m0[563].z, fma(_398, fp_c10_1._m0[563].y, _200 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _400, 0.5, 0.5)) + 1.0)).z > fma((fma(_198, fp_c10_1._m0[564].z, fma(_398, fp_c10_1._m0[564].y, _200 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _400, 0.5, 0.5)) || (_446 <= 0.0));
            _288 = fma(fma(_258, fp_c1_1._m0[1].z, ((_266 + fma(_266, -_472, _472)) * _476) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _478), _480, _298);
            _290 = fma(fma(_262, fp_c1_1._m0[1].z, ((_264 + fma(_264, -_472, _472)) * _476) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _478), _480, _300);
            _292 = fma(fma(_270, fp_c1_1._m0[1].z, ((_268 + fma(_268, -_472, _472)) * _476) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _478), _480, _302);
        }
    }
    float _482 = _200 + (-fp_c3_1._m0[11].w);
    float _484 = _78.y;
    float _486 = _198 + (-fp_c3_1._m0[13].w);
    float _488 = fma(_227, _288, _231 * (fma(_272 * (_266 + fma(_266, -_260, _260)), fp_c1_1._m0[1].x, _258 * 0.3183098733425140380859375) * (_235 * fp_c5_1._m0[5].x)));
    float _490 = _484 + (-fp_c3_1._m0[12].w);
    float _492 = fma(_486, _486, fma(_490, _490, _482 * _482));
    float _494 = clamp(fma(fma(_198, fp_c5_1._m0[14].z, fma(_484, fp_c5_1._m0[14].y, _200 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _496 = fma(_227, _290, _231 * (fma(_272 * (_264 + fma(_264, -_260, _260)), fp_c1_1._m0[1].x, _262 * 0.3183098733425140380859375) * (_235 * fp_c5_1._m0[5].y)));
    float _498 = exp2(log2(clamp(sqrt(_492) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_486 * inversesqrt(_492), fp_c5_1._m0[23].z, fma(_490 * inversesqrt(_492), fp_c5_1._m0[23].y, (_482 * inversesqrt(_492)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _500 = clamp(fma(_227 * _231, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _502 = fma(_227, _292, _231 * (fma(_272 * (_268 + fma(_268, -_260, _260)), fp_c1_1._m0[1].x, _270 * 0.3183098733425140380859375) * (_235 * fp_c5_1._m0[5].z)));
    float _504 = fma((-_488) + fp_c5_1._m0[13].x, _494, _488);
    float _506 = fma((-_496) + fp_c5_1._m0[13].y, _494, _496);
    float _508 = fma((-_502) + fp_c5_1._m0[13].z, _494, _502);
    float _510 = clamp((-exp2((clamp(fma(sqrt(_492), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_504) + fma(fma((_498 * fp_c7_1._m0[55].x) * _500, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _510, _504);
    _81.y = fma((-_506) + fma(fma((_498 * fp_c7_1._m0[55].y) * _500, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _510, _506);
    _81.z = fma((-_508) + fma(fma((_498 * fp_c7_1._m0[55].z) * _500, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _510, _508);
    _81.w = 1.0;
}


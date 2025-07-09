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
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_18;
layout(binding = 4) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 2) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 6) in vec4 _72;
layout(location = 5) in vec4 _74;
layout(location = 3) in vec4 _76;
layout(location = 0) out vec4 _79;
uint _6[12];

void main()
{
    bool _316 = false;
    float _86 = _64.x;
    float _88 = _64.y;
    vec2 _92 = texture(fp_tex_tcb_E, vec2(_86, _88)).xy;
    float _94 = _92.x;
    float _96 = _92.y;
    float _98 = texture(fp_tex_tcb_1A, vec2(_86, _88)).x;
    float _100 = _66.x;
    float _102 = _66.y;
    float _104 = _66.z;
    float _106 = _68.y;
    float _108 = _68.z;
    float _110 = _68.x;
    float _112 = _68.w;
    float _114 = _70.x;
    float _116 = _70.y;
    float _118 = _70.z;
    float _120 = 1.0 / (_72.z * gl_FragCoord.w);
    float _122 = inversesqrt(fma(_104, _104, fma(_102, _102, _100 * _100)));
    float _124 = _104 * _122;
    float _126 = _100 * _122;
    float _128 = _102 * _122;
    float _130 = sqrt(clamp((-fma(_94, _94, _96 * _96)) + 1.0, 0.0, 1.0));
    float _132 = fma(_126, _130, fma(_94, _110, _96 * (fma(_128, _108, -(_124 * _106)) * _112)));
    float _134 = fma(_128, _130, fma(_94, _106, _96 * (fma(_124, _110, -(_126 * _108)) * _112)));
    float _136 = fma(_124, _130, fma(_94, _108, _96 * (fma(_126, _106, -(_128 * _110)) * _112)));
    float _138 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _140 = inversesqrt(fma(_136, _136, fma(_134, _134, _132 * _132)));
    float _142 = _114 * (-_138);
    float _144 = _116 * (-_138);
    float _146 = _132 * _140;
    float _148 = _134 * _140;
    float _150 = _118 * (-_138);
    float _152 = _136 * _140;
    float _154 = fma(_152, _150, fma(_148, _144, _146 * _142));
    float _156 = (-_154) + 1.0;
    float _158 = max(texture(fp_tex_tcb_10, vec2(_86, _88)).x, fp_c1_1._m0[0].x);
    float _160 = 1.0 / _74.w;
    float _162 = _156 + (-fp_c6_1._m0[9].z);
    float _164 = fma(_146 * (-_154), -2.0, -_142);
    float _166 = fma(_148 * (-_154), -2.0, -_144);
    float _168 = fma(_152 * (-_154), -2.0, -_150);
    float _170 = 1.0 / max(abs(_168), max(abs(_164), abs(_166)));
    float _172 = fma(exp2(((_162 * (-_162)) * fp_c6_1._m0[9].w) * 1.44269502162933349609375), fp_c6_1._m0[10].x, fma(_156, fp_c6_1._m0[41].x, fp_c6_1._m0[41].y));
    vec2 _174 = texture(fp_tex_tcb_2A, vec2(fma(_74.x * _160, 0.5, 0.5), fma(_74.y * _160, -0.5, 0.5))).xy;
    vec3 _178 = texture(fp_tex_tcb_A, vec2(_86, _88)).xyz;
    float _180 = _178.x;
    float _182 = _178.y;
    float _184 = _178.z;
    float _186 = max(fma(_98, (-_154) + _172, _154), fp_c1_1._m0[0].y);
    vec2 _188 = texture(fp_tex_tcb_38, vec2(_186, (-_158) + (-0.0))).xy;
    float _190 = _188.x;
    float _192 = _188.y;
    vec3 _194 = texture(fp_tex_tcb_36, vec4(_164 * _170, _166 * _170, _168 * _170, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_158 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _196 = _142 + (-fp_c5_1._m0[23].x);
    float _198 = _76.x;
    float _200 = _144 + (-fp_c5_1._m0[23].y);
    float _202 = _150 + (-fp_c5_1._m0[23].z);
    float _204 = inversesqrt(fma(_202, _202, fma(_200, _200, _196 * _196)));
    float _206 = _196 * _204;
    float _208 = _76.z;
    float _210 = _200 * _204;
    float _212 = _202 * _204;
    float _214 = max(fma(_150, _212, fma(_144, _210, _142 * _206)), fp_c1_1._m0[0].y);
    float _216 = _146 * _148;
    float _218 = _152 * _152;
    float _220 = _148 * _152;
    float _222 = _146 * _152;
    float _224 = fma(_148, -fp_c5_1._m0[23].y, _146 * (-fp_c5_1._m0[23].x));
    float _226 = fma(_158, 0.5, 0.5);
    float _228 = _158 * _158;
    float _230 = max(fma(_152, _212, fma(_148, _210, _146 * _206)), fp_c1_1._m0[0].y) * max(fma(_152, _212, fma(_148, _210, _146 * _206)), fp_c1_1._m0[0].y);
    float _232 = (_226 * 0.5) * _226;
    float _234 = fma(_146, _146, -(_148 * _148));
    float _236 = clamp(fma(_152, -fp_c5_1._m0[23].z, _224), 0.0, 1.0);
    int _239 = max(0, min(int(trunc((_208 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _241 = max(fma(_152, -fp_c5_1._m0[23].z, _224), fp_c1_1._m0[0].y);
    float _243 = 1.0 / (_232 + fma(_186, -_232, _186));
    float _245 = fma(_180, -fp_c6_1._m0[9].x, _180);
    uint _248 = uint(int(uint((((int(uint(_239) >> uint(16)) * 20) << 16) + (((_239 & 65535) * 20) + max(0, min(int(trunc((_198 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _250 = fp_c10_1._m0[int(uint(int(_248)) >> uint(2))][int(_248) & 3];
    float _252 = fma(_182, -fp_c6_1._m0[9].x, _182);
    float _254 = exp2(_214 * fma(_214, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _256 = (_243 * (1.0 / (_232 + fma(_232, -_241, _241)))) * ((_228 * (1.0 / max(fma(_230, _228 * _228, -_230) + 1.0, fp_c1_1._m0[0].y))) * (_228 * (1.0 / max(fma(_230, _228 * _228, -_230) + 1.0, fp_c1_1._m0[0].y))));
    float _258 = fma(_245, fma(_98, fp_c6_1._m0[40].x, -_98), _245);
    float _260 = fma(_184, -fp_c6_1._m0[9].x, _184);
    float _262 = fma(_252, fma(_98, fp_c6_1._m0[40].y, -_98), _252);
    float _264 = clamp(_172 + (-0.0), 0.0, 1.0);
    float _266 = fma(_260, fma(_98, fp_c6_1._m0[40].z, -_98), _260);
    float _268 = fma(_180 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _270 = fma(_264, _245 + (-_258), _258);
    float _272 = fma(_182 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _274 = fma(_184 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _276 = fma(_264, _252 + (-_262), _262);
    float _278 = fma(_264, _260 + (-_266), _266);
    float _280 = clamp(texture(fp_tex_tcb_18, vec2(_86, _88)).x + (-0.0), 0.0, 1.0);
    float _282 = clamp((-fma(max((-_174.x) + 1.0, (-_174.y) + 1.0), clamp(_76.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_72.x * gl_FragCoord.w) * _120, (_72.y * gl_FragCoord.w) * _120)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _284 = fma(fma(_268, _190, _192), _194.x, max(0.0, fma(_234, fp_c5_1._m0[31].x, (fma(_152, fp_c5_1._m0[25].z, fma(_148, fp_c5_1._m0[25].y, _146 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_222, fp_c5_1._m0[28].w, fma(_218, fp_c5_1._m0[28].z, fma(_220, fp_c5_1._m0[28].y, _216 * fp_c5_1._m0[28].x))))) * fma(_268, -_270, _270));
    float _286 = fma(fma(_272, _190, _192), _194.y, max(0.0, fma(_234, fp_c5_1._m0[31].y, (fma(_152, fp_c5_1._m0[26].z, fma(_148, fp_c5_1._m0[26].y, _146 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_222, fp_c5_1._m0[29].w, fma(_218, fp_c5_1._m0[29].z, fma(_220, fp_c5_1._m0[29].y, _216 * fp_c5_1._m0[29].x))))) * fma(_272, -_276, _276));
    float _288 = fma(fma(_274, _190, _192), _194.z, max(0.0, fma(_234, fp_c5_1._m0[31].z, (fma(_152, fp_c5_1._m0[27].z, fma(_148, fp_c5_1._m0[27].y, _146 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_222, fp_c5_1._m0[30].w, fma(_218, fp_c5_1._m0[30].z, fma(_220, fp_c5_1._m0[30].y, _216 * fp_c5_1._m0[30].x))))) * fma(_274, -_278, _278));
    int _290 = floatBitsToInt(_250);
    float _292 = _286;
    float _294 = _288;
    float _296 = _284;
    float _298 = _286;
    float _300 = _284;
    float _302 = _288;
    if (floatBitsToInt(_250) != (-1))
    {
        int _304 = 0;
        float _308;
        float _310;
        float _312;
        int _398;
        do
        {
            int _306 = _290 & 255;
            _308 = _296;
            _310 = _292;
            _312 = _294;
            _316 = uint(_306) >= 30u;
            if (_316)
            {
                break;
            }
            int _318 = _306 << 4;
            uint _320 = uint(int(uint(_318 + 7360) >> uint(2)));
            int _322 = int(_320) + 1;
            uint _324 = uint(int(uint(_318 + 7368) >> uint(2)));
            float _326 = (-_198) + fp_c10_1._m0[int(uint(int(_320)) >> uint(2))][int(_320) & 3];
            float _328 = fp_c10_1._m0[int(uint(_322) >> uint(2))][_322 & 3] + (-_76.y);
            float _330 = (-_208) + fp_c10_1._m0[int(uint(int(_324)) >> uint(2))][int(_324) & 3];
            float _332 = fma(_330, _330, fma(_328, _328, _326 * _326));
            float _334 = _326 * inversesqrt(_332);
            float _336 = _328 * inversesqrt(_332);
            float _338 = _330 * inversesqrt(_332);
            float _340 = _142 + _334;
            float _342 = _144 + _336;
            float _344 = _150 + _338;
            uint _346 = uint(int(uint(_318 + 6880) >> uint(2)));
            int _348 = int(_346) + 1;
            float _350 = inversesqrt(fma(_344, _344, fma(_342, _342, _340 * _340)));
            float _352 = _340 * _350;
            float _354 = _342 * _350;
            float _356 = _344 * _350;
            float _358 = max(fma(_150, _356, fma(_144, _354, _142 * _352)), fp_c1_1._m0[0].y);
            float _360 = fma(_152, _338, fma(_148, _336, _146 * _334));
            float _362 = max(fma(_152, _356, fma(_148, _354, _146 * _352)), fp_c1_1._m0[0].y) * max(fma(_152, _356, fma(_148, _354, _146 * _352)), fp_c1_1._m0[0].y);
            uint _364 = uint(int(uint(_318 + 8320) >> uint(2)));
            float _366 = max(_360, fp_c1_1._m0[0].y);
            float _368 = fp_c10_1._m0[int(uint(_348) >> uint(2))][_348 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_346)) >> uint(2))][int(_346) & 3], -sqrt(_332), fp_c1_1._m0[1].x), 0.0, 1.0));
            uint _370 = uint(int(uint(_318 + 6400) >> uint(2)));
            int _372 = int(_370) + 1;
            uint _374 = uint(int(uint(_318 + 6408) >> uint(2)));
            float _376 = exp2(_358 * fma(_358, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _378 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3]) != 0;
            float _380 = (_243 * (1.0 / (_232 + fma(_232, -_366, _366)))) * ((_228 * (1.0 / max(fma(_228 * _228, _362, -_362) + 1.0, fp_c1_1._m0[0].y))) * (_228 * (1.0 / max(fma(_228 * _228, _362, -_362) + 1.0, fp_c1_1._m0[0].y))));
            float _382 = _368;
            if (!_378)
            {
                _382 = 1.0;
            }
            float _384 = _382;
            if (_378)
            {
                uint _386 = uint(int(uint(_318 + 7840) >> uint(2)));
                int _388 = int(_386) + 1;
                uint _390 = uint(int(uint(_318 + 7848) >> uint(2)));
                uint _392 = uint(int(uint(_318 + 6888) >> uint(2)));
                float _394 = fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3];
                int _396 = int(_392) + 1;
                _384 = exp2(fp_c10_1._m0[int(uint(_396) >> uint(2))][_396 & 3] * log2(clamp(((-_394) + fma(_338, -fp_c10_1._m0[int(uint(int(_390)) >> uint(2))][int(_390) & 3], fma(_336, -fp_c10_1._m0[int(uint(_388) >> uint(2))][_388 & 3], _334 * (-fp_c10_1._m0[int(uint(int(_386)) >> uint(2))][int(_386) & 3])))) * (1.0 / ((-_394) + 1.0)), 0.0, 1.0)));
            }
            _398 = _304 + 1;
            float _400 = (exp2(_368) * _384) * clamp(_360 + (-0.0), 0.0, 1.0);
            float _402 = fma(fp_c10_1._m0[int(uint(_372) >> uint(2))][_372 & 3] * _400, fma(_276, fp_c1_1._m0[1].y, ((_272 + fma(_272, -_376, _376)) * _380) * 0.079577468335628509521484375), _292);
            float _404 = fma(fp_c10_1._m0[int(uint(int(_374)) >> uint(2))][int(_374) & 3] * _400, fma(_278, fp_c1_1._m0[1].y, ((_274 + fma(_274, -_376, _376)) * _380) * 0.079577468335628509521484375), _294);
            float _406 = fma(fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3] * _400, fma(_270, fp_c1_1._m0[1].y, ((_268 + fma(_268, -_376, _376)) * _380) * 0.079577468335628509521484375), _296);
            _290 = int(uint(_290) >> uint(8));
            _304 = _398;
            _292 = _402;
            _294 = _404;
            _296 = _406;
            _308 = _406;
            _310 = _402;
            _312 = _404;
        } while (!(_398 >= 4));
        _316 = false;
        _298 = _310;
        _300 = _308;
        _302 = _312;
        if ((_290 & 255) == 30)
        {
            float _408 = _76.y;
            float _410 = 1.0 / (fma(_208, fp_c10_1._m0[565].z, fma(_408, fp_c10_1._m0[565].y, _198 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _412 = 1.0 / fp_c10_1._m0[561].y;
            float _414 = _198 + (-fp_c10_1._m0[557].x);
            float _416 = _208 + (-fp_c10_1._m0[557].z);
            float _418 = _414 * fp_c10_1._m0[558].z;
            float _420 = _416 * fp_c10_1._m0[558].x;
            float _422 = (-_198) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_412, fp_c10_1._m0[557].x);
            float _424 = (-_208) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_412, fp_c10_1._m0[557].z);
            float _426 = _422 * _422;
            float _428 = sqrt(fma(_424, _424, _426)) * (-fp_c10_1._m0[558].y);
            float _430 = inversesqrt(fma(_424, _424, fma(_428, _428, _426)));
            float _432 = _422 * _430;
            float _434 = _428 * _430;
            float _436 = _424 * _430;
            float _438 = _142 + _432;
            float _440 = _144 + _434;
            float _442 = ((-float(_420 < _418)) + float(_420 > _418)) * fp_c10_1._m0[561].y;
            float _444 = _150 + _436;
            float _446 = fma(_152, _436, fma(_148, _434, _146 * _432));
            float _448 = inversesqrt(fma(_444, _444, fma(_440, _440, _438 * _438)));
            float _450 = _438 * _448;
            float _452 = _440 * _448;
            float _454 = fma(_416, _416, _414 * _414);
            float _456 = fma(_416, fp_c10_1._m0[558].z, _414 * fp_c10_1._m0[558].x);
            bool _458 = _456 > 0.0;
            float _460 = inversesqrt(fma(_436, _436, _432 * _432));
            float _462 = _432;
            if (_458)
            {
                _462 = sqrt(_454);
            }
            float _464 = _444 * _448;
            float _466 = _462;
            if (!_458)
            {
                _466 = 1.0;
            }
            float _468 = max(fma(_150, _464, fma(_144, _452, _142 * _450)), fp_c1_1._m0[0].y);
            float _470 = max(fma(_152, _464, fma(_148, _452, _146 * _450)), fp_c1_1._m0[0].y) * max(fma(_152, _464, fma(_148, _452, _146 * _450)), fp_c1_1._m0[0].y);
            float _472 = clamp(fma(_456 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_456 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _474 = max(_446, fp_c1_1._m0[0].y);
            bool _476 = fma(_416 * inversesqrt(_454), fp_c10_1._m0[558].z, (_414 * inversesqrt(_454)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _478 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_414, fma(_442, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_416 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_442 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_414, fma(_442, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_416 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_442 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _480 = 6.9831600189208984375;
            if (!_476)
            {
                _480 = 1.0;
            }
            float _482 = exp2(_468 * fma(_468, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _484 = _480;
            if (_476)
            {
                _484 = fma(_478, -_478, fp_c1_1._m0[1].x) * fma(_478, -_478, fp_c1_1._m0[1].x);
            }
            float _486 = (_243 * (1.0 / (_232 + fma(_232, -_474, _474)))) * ((_228 * (1.0 / max(fma(_228 * _228, _470, -_470) + 1.0, fp_c1_1._m0[0].y))) * (_228 * (1.0 / max(fma(_228 * _228, _470, -_470) + 1.0, fp_c1_1._m0[0].y))));
            float _488 = (min(fma(_472, -_472, fp_c1_1._m0[1].x) * fma(_472, -_472, fp_c1_1._m0[1].x), _484) * (exp2(log2(clamp(fma(_466, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_436 * _460, -fp_c10_1._m0[558].z, (_432 * _460) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_446 + (-0.0), 0.0, 1.0);
            float _490 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_208, fp_c10_1._m0[562].z, fma(_408, fp_c10_1._m0[562].y, _198 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _410, 0.5, 0.5), (-fma((fma(_208, fp_c10_1._m0[563].z, fma(_408, fp_c10_1._m0[563].y, _198 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _410, 0.5, 0.5)) + 1.0)).z > fma((fma(_208, fp_c10_1._m0[564].z, fma(_408, fp_c10_1._m0[564].y, _198 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _410, 0.5, 0.5)) || (_456 <= 0.0));
            _298 = fma(fma(_276, fp_c1_1._m0[1].y, ((_272 + fma(_272, -_482, _482)) * _486) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _488), _490, _310);
            _300 = fma(fma(_270, fp_c1_1._m0[1].y, ((_268 + fma(_268, -_482, _482)) * _486) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _488), _490, _308);
            _302 = fma(fma(_278, fp_c1_1._m0[1].y, ((_274 + fma(_274, -_482, _482)) * _486) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _488), _490, _312);
        }
    }
    float _492 = _198 + (-fp_c3_1._m0[11].w);
    float _494 = _76.y;
    float _496 = _208 + (-fp_c3_1._m0[13].w);
    float _498 = fma(_280, _298, _282 * (fma(_256 * (_272 + fma(_272, -_254, _254)), fp_c1_1._m0[0].w, _276 * 0.3183098733425140380859375) * (_236 * fp_c5_1._m0[5].y)));
    float _500 = _494 + (-fp_c3_1._m0[12].w);
    float _502 = fma(_496, _496, fma(_500, _500, _492 * _492));
    float _504 = fma(_280, _300, _282 * (fma(_256 * (_268 + fma(_268, -_254, _254)), fp_c1_1._m0[0].w, _270 * 0.3183098733425140380859375) * (_236 * fp_c5_1._m0[5].x)));
    float _506 = fma(_280, _302, _282 * (fma(_256 * (_274 + fma(_274, -_254, _254)), fp_c1_1._m0[0].w, _278 * 0.3183098733425140380859375) * (_236 * fp_c5_1._m0[5].z)));
    float _508 = clamp(fma(fma(_208, fp_c5_1._m0[14].z, fma(_494, fp_c5_1._m0[14].y, _198 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _510 = exp2(log2(clamp(sqrt(_502) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_496 * inversesqrt(_502), fp_c5_1._m0[23].z, fma(_500 * inversesqrt(_502), fp_c5_1._m0[23].y, (_492 * inversesqrt(_502)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _512 = clamp(fma(_280 * _282, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _514 = fma((-_504) + fp_c5_1._m0[13].x, _508, _504);
    float _516 = fma((-_506) + fp_c5_1._m0[13].z, _508, _506);
    float _518 = fma((-_498) + fp_c5_1._m0[13].y, _508, _498);
    float _520 = clamp((-exp2((clamp(fma(sqrt(_502), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_514) + fma(fma((_510 * fp_c7_1._m0[55].x) * _512, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _520, _514);
    _79.y = fma((-_518) + fma(fma((_510 * fp_c7_1._m0[55].y) * _512, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _520, _518);
    _79.z = fma((-_516) + fma(fma((_510 * fp_c7_1._m0[55].z) * _512, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _520, _516);
    _79.w = 1.0;
}


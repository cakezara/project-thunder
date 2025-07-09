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
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_18;
layout(binding = 5) uniform sampler2D fp_tex_tcb_1A;
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
    bool _312 = false;
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
    float _120 = 1.0 / (_74.z * gl_FragCoord.w);
    float _122 = inversesqrt(fma(_104, _104, fma(_102, _102, _100 * _100)));
    float _124 = _104 * _122;
    float _126 = _100 * _122;
    float _128 = _102 * _122;
    float _130 = sqrt(clamp((-fma(_96, _96, _98 * _98)) + 1.0, 0.0, 1.0));
    float _132 = fma(_126, _130, fma(_96, _110, _98 * (fma(_128, _108, -(_124 * _106)) * _112)));
    float _134 = fma(_128, _130, fma(_96, _106, _98 * (fma(_124, _110, -(_126 * _108)) * _112)));
    float _136 = fma(_124, _130, fma(_96, _108, _98 * (fma(_126, _106, -(_128 * _110)) * _112)));
    float _138 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _140 = inversesqrt(fma(_136, _136, fma(_134, _134, _132 * _132)));
    float _142 = _114 * (-_138);
    float _144 = _116 * (-_138);
    float _146 = _118 * (-_138);
    float _148 = _132 * _140;
    float _150 = _134 * _140;
    float _152 = _136 * _140;
    float _154 = fma(_152, _146, fma(_150, _144, _148 * _142));
    float _156 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _158 = 1.0 / _76.w;
    float _160 = max(_154, fp_c1_1._m0[0].z);
    float _162 = fma(_148 * (-_154), -2.0, -_142);
    float _164 = fma(_150 * (-_154), -2.0, -_144);
    float _166 = fma(_152 * (-_154), -2.0, -_146);
    float _168 = 1.0 / max(abs(_166), max(abs(_162), abs(_164)));
    vec2 _170 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _158, 0.5, 0.5), fma(_76.y * _158, -0.5, 0.5))).xy;
    vec3 _174 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _176 = _174.x;
    float _178 = _174.y;
    float _180 = _174.z;
    float _182 = texture(fp_tex_tcb_12, vec2(_88, _90)).x;
    vec2 _184 = texture(fp_tex_tcb_38, vec2(_160, (-_156) + (-0.0))).xy;
    float _186 = _184.x;
    float _188 = _184.y;
    vec3 _190 = texture(fp_tex_tcb_36, vec4(_162 * _168, _164 * _168, _166 * _168, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_156 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _192 = _142 + (-fp_c5_1._m0[23].x);
    float _194 = _78.x;
    float _196 = _144 + (-fp_c5_1._m0[23].y);
    float _198 = _146 + (-fp_c5_1._m0[23].z);
    float _200 = _148 * _150;
    float _202 = _78.z;
    float _204 = _150 * _152;
    float _206 = _152 * _152;
    float _208 = inversesqrt(fma(_198, _198, fma(_196, _196, _192 * _192)));
    float _210 = _196 * _208;
    float _212 = _198 * _208;
    float _214 = _192 * _208;
    float _216 = _148 * _152;
    float _218 = clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    int _221 = max(0, min(int(trunc((_202 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _223 = max(fma(_152, _212, fma(_150, _210, _148 * _214)), fp_c1_1._m0[0].z) * max(fma(_152, _212, fma(_150, _210, _148 * _214)), fp_c1_1._m0[0].z);
    uint _226 = uint(int(uint((((int(uint(_221) >> uint(16)) * 20) << 16) + (((_221 & 65535) * 20) + max(0, min(int(trunc((_194 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _228 = fp_c10_1._m0[int(uint(int(_226)) >> uint(2))][int(_226) & 3];
    float _230 = (-_170.y) + 1.0;
    float _232 = fma(_148, _148, -(_150 * _150));
    float _234 = _230 * _218;
    float _236 = _156 * _156;
    float _238 = fma(_156, 0.5, 0.5);
    float _240 = fma(_150, -fp_c5_1._m0[23].y, _148 * (-fp_c5_1._m0[23].x));
    float _242 = clamp((-fma(max(_230, (-_170.x) + 1.0), _218, fma(texture(fp_tex_tcb_28, vec2((_74.x * gl_FragCoord.w) * _120, (_74.y * gl_FragCoord.w) * _120)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _244 = clamp(texture(fp_tex_tcb_18, vec2(_88, _90)).x + (-0.0), 0.0, 1.0);
    float _246 = max(fma(_146, _212, fma(_144, _210, _142 * _214)), fp_c1_1._m0[0].z);
    float _248 = (_238 * 0.5) * _238;
    float _250 = texture(fp_tex_tcb_1A, vec2(_88, _90)).x * fp_c6_1._m0[17].w;
    float _252 = max(fma(_152, -fp_c5_1._m0[23].z, _240), fp_c1_1._m0[0].z);
    float _254 = 1.0 / (_248 + fma(_160, -_248, _160));
    float _256 = fma(_176, -_182, _176);
    float _258 = fma(_176 + (-0.039999999105930328369140625), _182, fp_c1_1._m0[0].y);
    float _260 = exp2(_246 * fma(_246, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _262 = fma(_180, -_182, _180);
    float _264 = fma(_178, -_182, _178);
    float _266 = fma(_178 + (-0.039999999105930328369140625), _182, fp_c1_1._m0[0].y);
    float _268 = fma(_180 + (-0.039999999105930328369140625), _182, fp_c1_1._m0[0].y);
    float _270 = (_254 * (1.0 / (_248 + fma(_248, -_252, _252)))) * ((_236 * (1.0 / max(fma(_223, _236 * _236, -_223) + 1.0, fp_c1_1._m0[0].z))) * (_236 * (1.0 / max(fma(_223, _236 * _236, -_223) + 1.0, fp_c1_1._m0[0].z))));
    float _272 = clamp(fma(_152, -fp_c5_1._m0[23].z, _240), 0.0, 1.0);
    float _274 = fma(_190.x, fma(_258, _186, _188), max(0.0, fma(_232, fp_c5_1._m0[31].x, (fma(_152, fp_c5_1._m0[25].z, fma(_150, fp_c5_1._m0[25].y, _148 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_216, fp_c5_1._m0[28].w, fma(_206, fp_c5_1._m0[28].z, fma(_204, fp_c5_1._m0[28].y, _200 * fp_c5_1._m0[28].x))))) * fma(_258, -_256, _256));
    float _276 = fma(_190.y, fma(_266, _186, _188), max(0.0, fma(_232, fp_c5_1._m0[31].y, (fma(_152, fp_c5_1._m0[26].z, fma(_150, fp_c5_1._m0[26].y, _148 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_216, fp_c5_1._m0[29].w, fma(_206, fp_c5_1._m0[29].z, fma(_204, fp_c5_1._m0[29].y, _200 * fp_c5_1._m0[29].x))))) * fma(_266, -_264, _264));
    float _278 = fma(_190.z, fma(_268, _186, _188), max(0.0, fma(_232, fp_c5_1._m0[31].z, (fma(_152, fp_c5_1._m0[27].z, fma(_150, fp_c5_1._m0[27].y, _148 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_216, fp_c5_1._m0[30].w, fma(_206, fp_c5_1._m0[30].z, fma(_204, fp_c5_1._m0[30].y, _200 * fp_c5_1._m0[30].x))))) * fma(_268, -_262, _262));
    int _280 = floatBitsToInt(_228);
    float _282 = _274;
    float _284 = _276;
    float _286 = _278;
    float _288 = _274;
    float _290 = _276;
    float _292 = _278;
    if (floatBitsToInt(_228) != (-1))
    {
        float _294 = 1.0 / fp_c6_1._m0[18].x;
        float _296 = clamp(fma(_234, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _298 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
        int _300 = 0;
        float _304;
        float _306;
        float _308;
        int _398;
        do
        {
            int _302 = _280 & 255;
            _304 = _282;
            _306 = _284;
            _308 = _286;
            _312 = uint(_302) >= 30u;
            if (_312)
            {
                break;
            }
            int _314 = _302 << 4;
            uint _316 = uint(int(uint(_314 + 7360) >> uint(2)));
            int _318 = int(_316) + 1;
            uint _320 = uint(int(uint(_314 + 7368) >> uint(2)));
            float _322 = (-_194) + fp_c10_1._m0[int(uint(int(_316)) >> uint(2))][int(_316) & 3];
            float _324 = fp_c10_1._m0[int(uint(_318) >> uint(2))][_318 & 3] + (-_78.y);
            float _326 = (-_202) + fp_c10_1._m0[int(uint(int(_320)) >> uint(2))][int(_320) & 3];
            float _328 = fma(_326, _326, fma(_324, _324, _322 * _322));
            float _330 = _322 * inversesqrt(_328);
            float _332 = _324 * inversesqrt(_328);
            float _334 = _326 * inversesqrt(_328);
            float _336 = _142 + _330;
            float _338 = _144 + _332;
            float _340 = _146 + _334;
            uint _342 = uint(int(uint(_314 + 6880) >> uint(2)));
            int _344 = int(_342) + 1;
            float _346 = inversesqrt(fma(_340, _340, fma(_338, _338, _336 * _336)));
            float _348 = _336 * _346;
            float _350 = _338 * _346;
            float _352 = _340 * _346;
            float _354 = max(fma(_152, _352, fma(_150, _350, _148 * _348)), fp_c1_1._m0[0].z) * max(fma(_152, _352, fma(_150, _350, _148 * _348)), fp_c1_1._m0[0].z);
            float _356 = fma(_152, _334, fma(_150, _332, _148 * _330));
            float _358 = max(fma(_146, _352, fma(_144, _350, _142 * _348)), fp_c1_1._m0[0].z);
            uint _360 = uint(int(uint(_314 + 8320) >> uint(2)));
            float _362 = max(_356, fp_c1_1._m0[0].z);
            uint _364 = uint(int(uint(_314 + 6400) >> uint(2)));
            int _366 = int(_364) + 1;
            uint _368 = uint(int(uint(_314 + 6408) >> uint(2)));
            int _370 = int(_368) + 1;
            float _372 = exp2(_358 * fma(_358, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _374 = (_254 * (1.0 / (_248 + fma(_248, -_362, _362)))) * ((_236 * (1.0 / max(fma(_236 * _236, _354, -_354) + 1.0, fp_c1_1._m0[0].z))) * (_236 * (1.0 / max(fma(_236 * _236, _354, -_354) + 1.0, fp_c1_1._m0[0].z))));
            bool _376 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3]) != 0;
            float _378 = (_268 + fma(_268, -_372, _372)) * _374;
            float _380 = _378;
            if (!_376)
            {
                _380 = 1.0;
            }
            float _382 = _380;
            if (_376)
            {
                uint _384 = uint(int(uint(_314 + 7840) >> uint(2)));
                int _386 = int(_384) + 1;
                uint _388 = uint(int(uint(_314 + 7848) >> uint(2)));
                uint _390 = uint(int(uint(_314 + 6888) >> uint(2)));
                float _392 = fp_c10_1._m0[int(uint(int(_390)) >> uint(2))][int(_390) & 3];
                int _394 = int(_390) + 1;
                _382 = exp2(fp_c10_1._m0[int(uint(_394) >> uint(2))][_394 & 3] * log2(clamp(((-_392) + fma(_334, -fp_c10_1._m0[int(uint(int(_388)) >> uint(2))][int(_388) & 3], fma(_332, -fp_c10_1._m0[int(uint(_386) >> uint(2))][_386 & 3], _330 * (-fp_c10_1._m0[int(uint(int(_384)) >> uint(2))][int(_384) & 3])))) * (1.0 / ((-_392) + 1.0)), 0.0, 1.0)));
            }
            float _396 = exp2(fp_c10_1._m0[int(uint(_344) >> uint(2))][_344 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_342)) >> uint(2))][int(_342) & 3], -sqrt(_328), fp_c1_1._m0[1].y), 0.0, 1.0))) * _382;
            _398 = _300 + 1;
            float _400 = fp_c10_1._m0[int(uint(_370) >> uint(2))][_370 & 3] * _396;
            float _402 = clamp((-_250) + 1.0, 0.0, 1.0);
            float _404 = clamp(_356 + (-0.0), 0.0, 1.0) * _396;
            float _406 = fma(_298, fp_c1_1._m0[2].x, exp2(_294 * log2(clamp(max(fma(_146, -_334, fma(_144, -_332, _142 * (-_330))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0))) * _298) + 0.20000000298023223876953125;
            float _408 = _282 + fma((fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3] * _404) * fma(_256, fp_c1_1._m0[1].w, ((_258 + fma(_258, -_372, _372)) * _374) * 0.079577468335628509521484375), _402, _296 * (_250 * ((_400 * fp_c6_1._m0[19].x) * _406)));
            float _410 = _284 + fma((fp_c10_1._m0[int(uint(_366) >> uint(2))][_366 & 3] * _404) * fma(_264, fp_c1_1._m0[1].w, ((_266 + fma(_266, -_372, _372)) * _374) * 0.079577468335628509521484375), _402, _296 * (_250 * ((_400 * fp_c6_1._m0[19].y) * _406)));
            float _412 = _286 + fma((fp_c10_1._m0[int(uint(int(_368)) >> uint(2))][int(_368) & 3] * _404) * fma(_262, fp_c1_1._m0[1].w, _378 * 0.079577468335628509521484375), _402, _296 * (_250 * ((_400 * fp_c6_1._m0[19].z) * _406)));
            _280 = int(uint(_280) >> uint(8));
            _300 = _398;
            _282 = _408;
            _284 = _410;
            _286 = _412;
            _304 = _408;
            _306 = _410;
            _308 = _412;
        } while (!(_398 >= 4));
        _312 = false;
        _288 = _304;
        _290 = _306;
        _292 = _308;
        if ((_280 & 255) == 30)
        {
            float _414 = _78.y;
            float _416 = 1.0 / (fma(_202, fp_c10_1._m0[565].z, fma(_414, fp_c10_1._m0[565].y, _194 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _418 = 1.0 / fp_c10_1._m0[561].y;
            float _420 = _194 + (-fp_c10_1._m0[557].x);
            float _422 = _202 + (-fp_c10_1._m0[557].z);
            float _424 = _420 * fp_c10_1._m0[558].z;
            float _426 = _422 * fp_c10_1._m0[558].x;
            float _428 = (-_194) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_418, fp_c10_1._m0[557].x);
            float _430 = (-_202) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_418, fp_c10_1._m0[557].z);
            float _432 = _428 * _428;
            float _434 = fma(_422, _422, _420 * _420);
            float _436 = ((-float(_426 < _424)) + float(_426 > _424)) * fp_c10_1._m0[561].y;
            float _438 = sqrt(fma(_430, _430, _432)) * (-fp_c10_1._m0[558].y);
            float _440 = inversesqrt(fma(_430, _430, fma(_438, _438, _432)));
            bool _442 = fma(_422 * inversesqrt(_434), fp_c10_1._m0[558].z, (_420 * inversesqrt(_434)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _444 = _428 * _440;
            float _446 = _438 * _440;
            float _448 = _430 * _440;
            float _450 = fma(_422, fp_c10_1._m0[558].z, _420 * fp_c10_1._m0[558].x);
            float _452 = _142 + _444;
            float _454 = _144 + _446;
            bool _456 = _450 > 0.0;
            float _458 = _146 + _448;
            float _460 = inversesqrt(fma(_458, _458, fma(_454, _454, _452 * _452)));
            float _462 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_420, fma(_436, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_422 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_436 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_420, fma(_436, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_422 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_436 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _464 = _452 * _460;
            float _466 = inversesqrt(fma(_448, _448, _444 * _444));
            float _468 = _454 * _460;
            float _470 = _458 * _460;
            float _472 = _444;
            if (_456)
            {
                _472 = sqrt(_434);
            }
            float _474 = _472;
            if (!_456)
            {
                _474 = 1.0;
            }
            float _476 = max(fma(_146, _470, fma(_144, _468, _142 * _464)), fp_c1_1._m0[0].z);
            float _478 = fma(_152, _448, fma(_150, _446, _148 * _444));
            float _480 = max(fma(_152, _470, fma(_150, _468, _148 * _464)), fp_c1_1._m0[0].z) * max(fma(_152, _470, fma(_150, _468, _148 * _464)), fp_c1_1._m0[0].z);
            float _482 = clamp(fma(_450 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_450 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _484 = log2(clamp((fma(_448 * _466, -fp_c10_1._m0[558].z, (_444 * _466) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0));
            float _486 = max(_478, fp_c1_1._m0[0].z);
            float _488 = _484;
            if (_442)
            {
                _488 = fma(_462, -_462, fp_c1_1._m0[1].y) * fma(_462, -_462, fp_c1_1._m0[1].y);
            }
            float _490 = _488;
            if (!_442)
            {
                _490 = 1.0;
            }
            float _492 = exp2(_476 * fma(_476, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _494 = (exp2(log2(clamp(fma(_474, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_484 * fp_c10_1._m0[560].w)) * min(fma(_482, -_482, fp_c1_1._m0[1].y) * fma(_482, -_482, fp_c1_1._m0[1].y), _490);
            float _496 = _494 * clamp(_478 + (-0.0), 0.0, 1.0);
            float _498 = (_254 * (1.0 / (_248 + fma(_248, -_486, _486)))) * ((_236 * (1.0 / max(fma(_236 * _236, _480, -_480) + 1.0, fp_c1_1._m0[0].z))) * (_236 * (1.0 / max(fma(_236 * _236, _480, -_480) + 1.0, fp_c1_1._m0[0].z))));
            float _500 = fma(_298, fp_c1_1._m0[2].x, _298 * exp2(_294 * log2(clamp(max(fma(_146, -_448, fma(_144, -_446, _142 * (-_444))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125;
            float _502 = clamp((-_250) + 1.0, 0.0, 1.0);
            float _504 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_202, fp_c10_1._m0[562].z, fma(_414, fp_c10_1._m0[562].y, _194 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _416, 0.5, 0.5), (-fma((fma(_202, fp_c10_1._m0[563].z, fma(_414, fp_c10_1._m0[563].y, _194 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _416, 0.5, 0.5)) + 1.0)).z > fma((fma(_202, fp_c10_1._m0[564].z, fma(_414, fp_c10_1._m0[564].y, _194 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _416, 0.5, 0.5)) || (_450 <= 0.0));
            _288 = fma(fma(_502, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _496) * fma(_256, fp_c1_1._m0[1].w, (_498 * (_258 + fma(_258, -_492, _492))) * 0.079577468335628509521484375), _296 * (_250 * ((_494 * fp_c6_1._m0[19].x) * _500))), _504, _304);
            _290 = fma(fma(_502, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _496) * fma(_264, fp_c1_1._m0[1].w, (_498 * (_266 + fma(_266, -_492, _492))) * 0.079577468335628509521484375), _296 * (_250 * ((_494 * fp_c6_1._m0[19].y) * _500))), _504, _306);
            _292 = fma(fma(_502, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _496) * fma(_262, fp_c1_1._m0[1].w, (_498 * (_268 + fma(_268, -_492, _492))) * 0.079577468335628509521484375), _296 * (_250 * ((_494 * fp_c6_1._m0[19].z) * _500))), _504, _308);
        }
    }
    float _506 = _78.y;
    float _508 = _194 + (-fp_c3_1._m0[11].w);
    float _510 = _202 + (-fp_c3_1._m0[13].w);
    float _512 = clamp((-_250) + 1.0, 0.0, 1.0);
    float _514 = _506 + (-fp_c3_1._m0[12].w);
    float _516 = fma(_510, _510, fma(_514, _514, _508 * _508));
    float _518 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
    float _520 = clamp(fma(_234, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _522 = clamp(fma(_244 * _242, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _524 = fma(_518, fp_c1_1._m0[2].x, _518 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_146, fp_c5_1._m0[23].z, fma(_144, fp_c5_1._m0[23].y, _142 * fp_c5_1._m0[23].x)), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125;
    float _526 = exp2(log2(clamp(sqrt(_516) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_510 * inversesqrt(_516), fp_c5_1._m0[23].z, fma(_514 * inversesqrt(_516), fp_c5_1._m0[23].y, (_508 * inversesqrt(_516)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _528 = fma(_244, _288, fma(_242, _512 * (fma(_270 * (_258 + fma(_258, -_260, _260)), fp_c1_1._m0[1].x, _256 * 0.3183098733425140380859375) * (_272 * fp_c5_1._m0[5].x)), _520 * (_250 * (_524 * (fp_c5_1._m0[5].w * fp_c6_1._m0[19].x)))));
    float _530 = fma(_244, _290, fma(_242, _512 * (fma(_270 * (_266 + fma(_266, -_260, _260)), fp_c1_1._m0[1].x, _264 * 0.3183098733425140380859375) * (_272 * fp_c5_1._m0[5].y)), _520 * (_250 * (_524 * (fp_c5_1._m0[5].w * fp_c6_1._m0[19].y)))));
    float _532 = fma(_244, _292, fma(_242, _512 * (fma(_270 * (_268 + fma(_268, -_260, _260)), fp_c1_1._m0[1].x, _262 * 0.3183098733425140380859375) * (_272 * fp_c5_1._m0[5].z)), _520 * (_250 * (_524 * (fp_c5_1._m0[5].w * fp_c6_1._m0[19].z)))));
    float _534 = clamp(fma(fma(_202, fp_c5_1._m0[14].z, fma(_506, fp_c5_1._m0[14].y, _194 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _536 = fma((-_528) + fp_c5_1._m0[13].x, _534, _528);
    float _538 = fma((-_530) + fp_c5_1._m0[13].y, _534, _530);
    float _540 = fma((-_532) + fp_c5_1._m0[13].z, _534, _532);
    float _542 = clamp((-exp2((clamp(fma(sqrt(_516), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_536) + fma(fma((_526 * fp_c7_1._m0[55].x) * _522, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _542, _536);
    _81.y = fma((-_538) + fma(fma((_526 * fp_c7_1._m0[55].y) * _522, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _542, _538);
    _81.z = fma((-_540) + fma(fma((_526 * fp_c7_1._m0[55].z) * _522, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _542, _540);
    _81.w = 1.0;
}


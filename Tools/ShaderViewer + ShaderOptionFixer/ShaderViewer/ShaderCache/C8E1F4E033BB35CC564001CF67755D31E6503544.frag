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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

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
layout(binding = 3) uniform sampler2D fp_tex_tcb_18;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _62;
layout(location = 5) in vec4 _64;
layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 4) in vec4 _72;
layout(location = 3) in vec4 _74;
layout(location = 0) out vec4 _77;
uint _6[12];

void main()
{
    bool _292 = false;
    float _84 = 1.0 / (_62.z * gl_FragCoord.w);
    float _86 = _66.x;
    float _88 = _66.y;
    float _90 = 1.0 / _64.w;
    vec2 _94 = texture(fp_tex_tcb_E, vec2(_86, _88)).xy;
    float _96 = _94.x;
    float _98 = _94.y;
    vec2 _100 = texture(fp_tex_tcb_2A, vec2(fma(_64.x * _90, 0.5, 0.5), fma(_64.y * _90, -0.5, 0.5))).xy;
    vec3 _104 = texture(fp_tex_tcb_A, vec2(_86, _88)).xyz;
    float _106 = _104.x;
    float _108 = _104.y;
    float _110 = _104.z;
    float _112 = _68.x;
    float _114 = _68.y;
    float _116 = _68.z;
    float _118 = _70.y;
    float _120 = _70.z;
    float _122 = _70.x;
    float _124 = _70.w;
    float _126 = _72.y;
    float _128 = _72.z;
    float _130 = inversesqrt(fma(_116, _116, fma(_114, _114, _112 * _112)));
    float _132 = _116 * _130;
    float _134 = _112 * _130;
    float _136 = _114 * _130;
    float _138 = _72.x;
    float _140 = max(texture(fp_tex_tcb_10, vec2(_86, _88)).x, fp_c1_1._m0[0].x);
    float _142 = sqrt(clamp((-fma(_96, _96, _98 * _98)) + 1.0, 0.0, 1.0));
    float _144 = fma(_134, _142, fma(_96, _122, _98 * (fma(_136, _120, -(_132 * _118)) * _124)));
    float _146 = fma(_136, _142, fma(_96, _118, _98 * (fma(_132, _122, -(_134 * _120)) * _124)));
    float _148 = fma(_132, _142, fma(_96, _120, _98 * (fma(_134, _118, -(_136 * _122)) * _124)));
    float _150 = inversesqrt(fma(_128, _128, fma(_126, _126, _138 * _138)));
    float _152 = _138 * (-_150);
    float _154 = inversesqrt(fma(_148, _148, fma(_146, _146, _144 * _144)));
    float _156 = _126 * (-_150);
    float _158 = _128 * (-_150);
    float _160 = _144 * _154;
    float _162 = _146 * _154;
    float _164 = _148 * _154;
    float _166 = fma(_164, _158, fma(_162, _156, _160 * _152));
    float _168 = max(_166, fp_c1_1._m0[0].y);
    float _170 = fma(_160 * (-_166), -2.0, -_152);
    float _172 = fma(_162 * (-_166), -2.0, -_156);
    float _174 = fma(_164 * (-_166), -2.0, -_158);
    float _176 = 1.0 / max(abs(_174), max(abs(_170), abs(_172)));
    vec2 _178 = texture(fp_tex_tcb_38, vec2(_168, (-_140) + (-0.0))).xy;
    float _180 = _178.x;
    float _182 = _178.y;
    vec3 _184 = texture(fp_tex_tcb_36, vec4(_170 * _176, _172 * _176, _174 * _176, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_140 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _186 = _152 + (-fp_c5_1._m0[23].x);
    float _188 = _74.x;
    float _190 = _156 + (-fp_c5_1._m0[23].y);
    float _192 = _158 + (-fp_c5_1._m0[23].z);
    float _194 = _74.z;
    float _196 = inversesqrt(fma(_192, _192, fma(_190, _190, _186 * _186)));
    float _198 = _186 * _196;
    float _200 = _160 * _162;
    float _202 = _190 * _196;
    float _204 = _192 * _196;
    float _206 = _162 * _164;
    float _208 = _164 * _164;
    float _210 = _160 * _164;
    float _212 = fma(_160, _160, -(_162 * _162));
    float _214 = fma(_162, -fp_c5_1._m0[23].y, _160 * (-fp_c5_1._m0[23].x));
    float _216 = _140 * _140;
    int _219 = max(0, min(int(trunc((_194 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _221 = max(fma(_164, _204, fma(_162, _202, _160 * _198)), fp_c1_1._m0[0].y) * max(fma(_164, _204, fma(_162, _202, _160 * _198)), fp_c1_1._m0[0].y);
    float _223 = max(fma(_158, _204, fma(_156, _202, _152 * _198)), fp_c1_1._m0[0].y);
    float _225 = fma(_140, 0.5, 0.5);
    float _227 = clamp(fma(_164, -fp_c5_1._m0[23].z, _214), 0.0, 1.0);
    float _229 = max(fma(_164, -fp_c5_1._m0[23].z, _214), fp_c1_1._m0[0].y);
    float _231 = (_225 * 0.5) * _225;
    uint _234 = uint(int(uint((((int(uint(_219) >> uint(16)) * 20) << 16) + (((_219 & 65535) * 20) + max(0, min(int(trunc((_188 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _236 = fp_c10_1._m0[int(uint(int(_234)) >> uint(2))][int(_234) & 3];
    float _238 = 1.0 / (_231 + fma(_168, -_231, _168));
    float _240 = fma(_106, -fp_c6_1._m0[9].x, _106);
    float _242 = exp2(_223 * fma(_223, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _244 = fma(_106 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _246 = fma(_108 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _248 = fma(_110, -fp_c6_1._m0[9].x, _110);
    float _250 = (_238 * (1.0 / (_231 + fma(_231, -_229, _229)))) * ((_216 * (1.0 / max(fma(_221, _216 * _216, -_221) + 1.0, fp_c1_1._m0[0].y))) * (_216 * (1.0 / max(fma(_221, _216 * _216, -_221) + 1.0, fp_c1_1._m0[0].y))));
    float _252 = fma(_110 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _254 = fma(_108, -fp_c6_1._m0[9].x, _108);
    float _256 = clamp((-fma(max((-_100.x) + 1.0, (-_100.y) + 1.0), clamp(_74.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_62.x * gl_FragCoord.w) * _84, (_62.y * gl_FragCoord.w) * _84)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _258 = clamp(texture(fp_tex_tcb_18, vec2(_86, _88)).x + (-0.0), 0.0, 1.0);
    float _260 = fma(_184.x, fma(_244, _180, _182), max(0.0, fma(_212, fp_c5_1._m0[31].x, (fma(_164, fp_c5_1._m0[25].z, fma(_162, fp_c5_1._m0[25].y, _160 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_210, fp_c5_1._m0[28].w, fma(_208, fp_c5_1._m0[28].z, fma(_206, fp_c5_1._m0[28].y, _200 * fp_c5_1._m0[28].x))))) * fma(_244, -_240, _240));
    float _262 = fma(_184.y, fma(_246, _180, _182), max(0.0, fma(_212, fp_c5_1._m0[31].y, (fma(_164, fp_c5_1._m0[26].z, fma(_162, fp_c5_1._m0[26].y, _160 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_210, fp_c5_1._m0[29].w, fma(_208, fp_c5_1._m0[29].z, fma(_206, fp_c5_1._m0[29].y, _200 * fp_c5_1._m0[29].x))))) * fma(_246, -_254, _254));
    float _264 = fma(_184.z, fma(_252, _180, _182), max(0.0, fma(_212, fp_c5_1._m0[31].z, (fma(_164, fp_c5_1._m0[27].z, fma(_162, fp_c5_1._m0[27].y, _160 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_210, fp_c5_1._m0[30].w, fma(_208, fp_c5_1._m0[30].z, fma(_206, fp_c5_1._m0[30].y, _200 * fp_c5_1._m0[30].x))))) * fma(_252, -_248, _248));
    int _266 = floatBitsToInt(_236);
    float _268 = _262;
    float _270 = _264;
    float _272 = _260;
    float _274 = _262;
    float _276 = _260;
    float _278 = _264;
    if (floatBitsToInt(_236) != (-1))
    {
        int _280 = 0;
        float _284;
        float _286;
        float _288;
        int _374;
        do
        {
            int _282 = _266 & 255;
            _284 = _272;
            _286 = _268;
            _288 = _270;
            _292 = uint(_282) >= 30u;
            if (_292)
            {
                break;
            }
            int _294 = _282 << 4;
            uint _296 = uint(int(uint(_294 + 7360) >> uint(2)));
            int _298 = int(_296) + 1;
            uint _300 = uint(int(uint(_294 + 7368) >> uint(2)));
            float _302 = (-_188) + fp_c10_1._m0[int(uint(int(_296)) >> uint(2))][int(_296) & 3];
            float _304 = fp_c10_1._m0[int(uint(_298) >> uint(2))][_298 & 3] + (-_74.y);
            float _306 = (-_194) + fp_c10_1._m0[int(uint(int(_300)) >> uint(2))][int(_300) & 3];
            float _308 = fma(_306, _306, fma(_304, _304, _302 * _302));
            float _310 = _302 * inversesqrt(_308);
            float _312 = _304 * inversesqrt(_308);
            float _314 = _306 * inversesqrt(_308);
            float _316 = _152 + _310;
            float _318 = _156 + _312;
            float _320 = _158 + _314;
            uint _322 = uint(int(uint(_294 + 6880) >> uint(2)));
            int _324 = int(_322) + 1;
            float _326 = inversesqrt(fma(_320, _320, fma(_318, _318, _316 * _316)));
            float _328 = _316 * _326;
            float _330 = _318 * _326;
            float _332 = _320 * _326;
            uint _334 = uint(int(uint(_294 + 8320) >> uint(2)));
            float _336 = max(fma(_158, _332, fma(_156, _330, _152 * _328)), fp_c1_1._m0[0].y);
            float _338 = fma(_164, _314, fma(_162, _312, _160 * _310));
            float _340 = max(fma(_164, _332, fma(_162, _330, _160 * _328)), fp_c1_1._m0[0].y) * max(fma(_164, _332, fma(_162, _330, _160 * _328)), fp_c1_1._m0[0].y);
            float _342 = max(_338, fp_c1_1._m0[0].y);
            float _344 = fp_c10_1._m0[int(uint(_324) >> uint(2))][_324 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_322)) >> uint(2))][int(_322) & 3], -sqrt(_308), fp_c1_1._m0[1].x), 0.0, 1.0));
            uint _346 = uint(int(uint(_294 + 6400) >> uint(2)));
            int _348 = int(_346) + 1;
            uint _350 = uint(int(uint(_294 + 6408) >> uint(2)));
            float _352 = exp2(_336 * fma(_336, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _354 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_334)) >> uint(2))][int(_334) & 3]) != 0;
            float _356 = (_238 * (1.0 / (_231 + fma(_231, -_342, _342)))) * ((_216 * (1.0 / max(fma(_216 * _216, _340, -_340) + 1.0, fp_c1_1._m0[0].y))) * (_216 * (1.0 / max(fma(_216 * _216, _340, -_340) + 1.0, fp_c1_1._m0[0].y))));
            float _358 = _344;
            if (!_354)
            {
                _358 = 1.0;
            }
            float _360 = _358;
            if (_354)
            {
                uint _362 = uint(int(uint(_294 + 7840) >> uint(2)));
                int _364 = int(_362) + 1;
                uint _366 = uint(int(uint(_294 + 7848) >> uint(2)));
                uint _368 = uint(int(uint(_294 + 6888) >> uint(2)));
                float _370 = fp_c10_1._m0[int(uint(int(_368)) >> uint(2))][int(_368) & 3];
                int _372 = int(_368) + 1;
                _360 = exp2(fp_c10_1._m0[int(uint(_372) >> uint(2))][_372 & 3] * log2(clamp(((-_370) + fma(_314, -fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3], fma(_312, -fp_c10_1._m0[int(uint(_364) >> uint(2))][_364 & 3], _310 * (-fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3])))) * (1.0 / ((-_370) + 1.0)), 0.0, 1.0)));
            }
            _374 = _280 + 1;
            float _376 = (exp2(_344) * _360) * clamp(_338 + (-0.0), 0.0, 1.0);
            float _378 = fma(fp_c10_1._m0[int(uint(_348) >> uint(2))][_348 & 3] * _376, fma(_254, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_352, _352)) * _356) * 0.079577468335628509521484375), _268);
            float _380 = fma(fp_c10_1._m0[int(uint(int(_350)) >> uint(2))][int(_350) & 3] * _376, fma(_248, fp_c1_1._m0[1].y, ((_252 + fma(_252, -_352, _352)) * _356) * 0.079577468335628509521484375), _270);
            float _382 = fma(fp_c10_1._m0[int(uint(int(_346)) >> uint(2))][int(_346) & 3] * _376, fma(_240, fp_c1_1._m0[1].y, ((_244 + fma(_244, -_352, _352)) * _356) * 0.079577468335628509521484375), _272);
            _266 = int(uint(_266) >> uint(8));
            _280 = _374;
            _268 = _378;
            _270 = _380;
            _272 = _382;
            _284 = _382;
            _286 = _378;
            _288 = _380;
        } while (!(_374 >= 4));
        _292 = false;
        _274 = _286;
        _276 = _284;
        _278 = _288;
        if ((_266 & 255) == 30)
        {
            float _384 = _74.y;
            float _386 = 1.0 / (fma(_194, fp_c10_1._m0[565].z, fma(_384, fp_c10_1._m0[565].y, _188 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _388 = 1.0 / fp_c10_1._m0[561].y;
            float _390 = _188 + (-fp_c10_1._m0[557].x);
            float _392 = _390 * fp_c10_1._m0[558].z;
            float _394 = (-_188) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_388, fp_c10_1._m0[557].x);
            float _396 = (-_194) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_388, fp_c10_1._m0[557].z);
            float _398 = _394 * _394;
            float _400 = sqrt(fma(_396, _396, _398)) * (-fp_c10_1._m0[558].y);
            float _402 = inversesqrt(fma(_396, _396, fma(_400, _400, _398)));
            float _404 = _194 + (-fp_c10_1._m0[557].z);
            float _406 = _404 * fp_c10_1._m0[558].x;
            float _408 = _394 * _402;
            float _410 = _400 * _402;
            float _412 = _396 * _402;
            float _414 = _152 + _408;
            float _416 = _156 + _410;
            float _418 = _158 + _412;
            float _420 = ((-float(_406 < _392)) + float(_406 > _392)) * fp_c10_1._m0[561].y;
            float _422 = fma(_164, _412, fma(_162, _410, _160 * _408));
            float _424 = inversesqrt(fma(_418, _418, fma(_416, _416, _414 * _414)));
            float _426 = _414 * _424;
            float _428 = _416 * _424;
            float _430 = _418 * _424;
            float _432 = fma(_404, _404, _390 * _390);
            float _434 = max(fma(_158, _430, fma(_156, _428, _152 * _426)), fp_c1_1._m0[0].y);
            float _436 = fma(_404, fp_c10_1._m0[558].z, _390 * fp_c10_1._m0[558].x);
            float _438 = max(fma(_164, _430, fma(_162, _428, _160 * _426)), fp_c1_1._m0[0].y) * max(fma(_164, _430, fma(_162, _428, _160 * _426)), fp_c1_1._m0[0].y);
            bool _440 = _436 > 0.0;
            float _442 = inversesqrt(fma(_412, _412, _408 * _408));
            float _444 = _408;
            if (_440)
            {
                _444 = sqrt(_432);
            }
            float _446 = exp2(_434 * fma(_434, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _448 = _444;
            if (!_440)
            {
                _448 = 1.0;
            }
            bool _450 = fma(_404 * inversesqrt(_432), fp_c10_1._m0[558].z, (_390 * inversesqrt(_432)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _452 = clamp(fma(_436 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_436 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _454 = max(_422, fp_c1_1._m0[0].y);
            float _456 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_390, fma(_420, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_404 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_420 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_390, fma(_420, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_404 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_420 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _458 = log2(clamp((fma(_412 * _442, -fp_c10_1._m0[558].z, (_408 * _442) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _460 = _458;
            if (_450)
            {
                _460 = fma(_456, -_456, fp_c1_1._m0[1].x) * fma(_456, -_456, fp_c1_1._m0[1].x);
            }
            float _462 = _460;
            if (!_450)
            {
                _462 = 1.0;
            }
            float _464 = (_238 * (1.0 / (_231 + fma(_231, -_454, _454)))) * ((_216 * (1.0 / max(fma(_216 * _216, _438, -_438) + 1.0, fp_c1_1._m0[0].y))) * (_216 * (1.0 / max(fma(_216 * _216, _438, -_438) + 1.0, fp_c1_1._m0[0].y))));
            float _466 = (min(fma(_452, -_452, fp_c1_1._m0[1].x) * fma(_452, -_452, fp_c1_1._m0[1].x), _462) * (exp2(log2(clamp(fma(_448, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_458))) * clamp(_422 + (-0.0), 0.0, 1.0);
            float _468 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_194, fp_c10_1._m0[562].z, fma(_384, fp_c10_1._m0[562].y, _188 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _386, 0.5, 0.5), (-fma((fma(_194, fp_c10_1._m0[563].z, fma(_384, fp_c10_1._m0[563].y, _188 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _386, 0.5, 0.5)) + 1.0)).z > fma((fma(_194, fp_c10_1._m0[564].z, fma(_384, fp_c10_1._m0[564].y, _188 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _386, 0.5, 0.5)) || (_436 <= 0.0));
            _274 = fma(fma(_254, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_446, _446)) * _464) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _466), _468, _286);
            _276 = fma(fma(_240, fp_c1_1._m0[1].y, ((_244 + fma(_244, -_446, _446)) * _464) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _466), _468, _284);
            _278 = fma(fma(_248, fp_c1_1._m0[1].y, ((_252 + fma(_252, -_446, _446)) * _464) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _466), _468, _288);
        }
    }
    float _470 = _188 + (-fp_c3_1._m0[11].w);
    float _472 = _74.y;
    float _474 = _194 + (-fp_c3_1._m0[13].w);
    float _476 = fma(_258, _274, _256 * (fma(_250 * (_246 + fma(_246, -_242, _242)), fp_c1_1._m0[0].w, _254 * 0.3183098733425140380859375) * (_227 * fp_c5_1._m0[5].y)));
    float _478 = _472 + (-fp_c3_1._m0[12].w);
    float _480 = fma(_474, _474, fma(_478, _478, _470 * _470));
    float _482 = fma(_258, _276, _256 * (fma(_250 * (_244 + fma(_244, -_242, _242)), fp_c1_1._m0[0].w, _240 * 0.3183098733425140380859375) * (_227 * fp_c5_1._m0[5].x)));
    float _484 = fma(_258, _278, _256 * (fma(_250 * (_252 + fma(_252, -_242, _242)), fp_c1_1._m0[0].w, _248 * 0.3183098733425140380859375) * (_227 * fp_c5_1._m0[5].z)));
    float _486 = clamp(fma(fma(_194, fp_c5_1._m0[14].z, fma(_472, fp_c5_1._m0[14].y, _188 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _488 = exp2(log2(clamp(sqrt(_480) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_474 * inversesqrt(_480), fp_c5_1._m0[23].z, fma(_478 * inversesqrt(_480), fp_c5_1._m0[23].y, (_470 * inversesqrt(_480)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _490 = clamp(fma(_258 * _256, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _492 = fma((-_482) + fp_c5_1._m0[13].x, _486, _482);
    float _494 = fma((-_476) + fp_c5_1._m0[13].y, _486, _476);
    float _496 = fma((-_484) + fp_c5_1._m0[13].z, _486, _484);
    float _498 = clamp((-exp2((clamp(fma(sqrt(_480), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _77.x = fma((-_492) + fma(fma((_488 * fp_c7_1._m0[55].x) * _490, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _498, _492);
    _77.y = fma((-_494) + fma(fma((_488 * fp_c7_1._m0[55].y) * _490, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _498, _494);
    _77.z = fma((-_496) + fma(fma((_488 * fp_c7_1._m0[55].z) * _490, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _498, _496);
    _77.w = 1.0;
}


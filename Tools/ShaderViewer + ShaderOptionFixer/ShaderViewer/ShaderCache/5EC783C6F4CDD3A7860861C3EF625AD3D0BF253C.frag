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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

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
layout(binding = 3) uniform sampler2D fp_tex_tcb_28;
layout(binding = 4) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 5) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 6) uniform sampler2D fp_tex_tcb_38;
layout(binding = 7) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _60;
layout(location = 5) in vec4 _62;
layout(location = 0) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 2) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 3) in vec4 _72;
layout(location = 0) out vec4 _75;
uint _6[12];

void main()
{
    bool _288 = false;
    float _82 = 1.0 / (_60.z * gl_FragCoord.w);
    float _84 = _64.x;
    float _86 = _64.y;
    float _88 = 1.0 / _62.w;
    vec2 _92 = texture(fp_tex_tcb_E, vec2(_84, _86)).xy;
    float _94 = _92.x;
    float _96 = _92.y;
    vec2 _98 = texture(fp_tex_tcb_2A, vec2(fma(_62.x * _88, 0.5, 0.5), fma(_62.y * _88, -0.5, 0.5))).xy;
    vec3 _102 = texture(fp_tex_tcb_A, vec2(_84, _86)).xyz;
    float _104 = _102.x;
    float _106 = _102.y;
    float _108 = _102.z;
    float _110 = _66.x;
    float _112 = _66.y;
    float _114 = _66.z;
    float _116 = _68.y;
    float _118 = _68.z;
    float _120 = _68.x;
    float _122 = _68.w;
    float _124 = _70.x;
    float _126 = _70.y;
    float _128 = _70.z;
    float _130 = inversesqrt(fma(_114, _114, fma(_112, _112, _110 * _110)));
    float _132 = _114 * _130;
    float _134 = _110 * _130;
    float _136 = _112 * _130;
    float _138 = sqrt(clamp((-fma(_94, _94, _96 * _96)) + 1.0, 0.0, 1.0));
    float _140 = fma(_134, _138, fma(_94, _120, _96 * (fma(_136, _118, -(_132 * _116)) * _122)));
    float _142 = fma(_136, _138, fma(_94, _116, _96 * (fma(_132, _120, -(_134 * _118)) * _122)));
    float _144 = fma(_132, _138, fma(_94, _118, _96 * (fma(_134, _116, -(_136 * _120)) * _122)));
    float _146 = inversesqrt(fma(_128, _128, fma(_126, _126, _124 * _124)));
    float _148 = _124 * (-_146);
    float _150 = inversesqrt(fma(_144, _144, fma(_142, _142, _140 * _140)));
    float _152 = max(texture(fp_tex_tcb_10, vec2(_84, _86)).x, fp_c1_1._m0[0].x);
    float _154 = _126 * (-_146);
    float _156 = _128 * (-_146);
    float _158 = _140 * _150;
    float _160 = _142 * _150;
    float _162 = _144 * _150;
    float _164 = fma(_162, _156, fma(_160, _154, _158 * _148));
    float _166 = max(_164, fp_c1_1._m0[0].y);
    float _168 = fma(_158 * (-_164), -2.0, -_148);
    vec2 _170 = texture(fp_tex_tcb_38, vec2(_166, (-_152) + (-0.0))).xy;
    float _172 = _170.x;
    float _174 = _170.y;
    float _176 = fma(_160 * (-_164), -2.0, -_154);
    float _178 = fma(_162 * (-_164), -2.0, -_156);
    float _180 = _148 + (-fp_c5_1._m0[23].x);
    float _182 = 1.0 / max(abs(_178), max(abs(_168), abs(_176)));
    vec3 _184 = texture(fp_tex_tcb_36, vec4(_168 * _182, _176 * _182, _178 * _182, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_152 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _186 = _154 + (-fp_c5_1._m0[23].y);
    float _188 = _72.z;
    float _190 = _156 + (-fp_c5_1._m0[23].z);
    float _192 = _162 * _162;
    float _194 = fma(_152, 0.5, 0.5);
    float _196 = _72.x;
    float _198 = _158 * _160;
    float _200 = inversesqrt(fma(_190, _190, fma(_186, _186, _180 * _180)));
    float _202 = _160 * _162;
    float _204 = _180 * _200;
    float _206 = _186 * _200;
    float _208 = _190 * _200;
    float _210 = _158 * _162;
    float _212 = fma(_158, _158, -(_160 * _160));
    float _214 = _152 * _152;
    float _216 = fma(_160, -fp_c5_1._m0[23].y, _158 * (-fp_c5_1._m0[23].x));
    int _219 = max(0, min(int(trunc((_188 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _221 = max(fma(_162, _208, fma(_160, _206, _158 * _204)), fp_c1_1._m0[0].y) * max(fma(_162, _208, fma(_160, _206, _158 * _204)), fp_c1_1._m0[0].y);
    float _223 = fma(_108, -fp_c6_1._m0[9].x, _108);
    float _225 = clamp(fma(_162, -fp_c5_1._m0[23].z, _216), 0.0, 1.0);
    float _227 = max(fma(_162, -fp_c5_1._m0[23].z, _216), fp_c1_1._m0[0].y);
    float _229 = (_194 * 0.5) * _194;
    float _231 = max(fma(_156, _208, fma(_154, _206, _148 * _204)), fp_c1_1._m0[0].y);
    uint _234 = uint(int(uint((((int(uint(_219) >> uint(16)) * 20) << 16) + (((_219 & 65535) * 20) + max(0, min(int(trunc((_196 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _236 = fp_c10_1._m0[int(uint(int(_234)) >> uint(2))][int(_234) & 3];
    float _238 = 1.0 / (_229 + fma(_166, -_229, _166));
    float _240 = fma(_104, -fp_c6_1._m0[9].x, _104);
    float _242 = exp2(_231 * fma(_231, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _244 = fma(_104 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _246 = fma(_106 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _248 = fma(_108 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _250 = fma(_106, -fp_c6_1._m0[9].x, _106);
    float _252 = (_238 * (1.0 / (_229 + fma(_229, -_227, _227)))) * ((_214 * (1.0 / max(fma(_221, _214 * _214, -_221) + 1.0, fp_c1_1._m0[0].y))) * (_214 * (1.0 / max(fma(_221, _214 * _214, -_221) + 1.0, fp_c1_1._m0[0].y))));
    float _254 = fma(_184.x, fma(_244, _172, _174), max(0.0, fma(_212, fp_c5_1._m0[31].x, (fma(_162, fp_c5_1._m0[25].z, fma(_160, fp_c5_1._m0[25].y, _158 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_210, fp_c5_1._m0[28].w, fma(_192, fp_c5_1._m0[28].z, fma(_202, fp_c5_1._m0[28].y, _198 * fp_c5_1._m0[28].x))))) * fma(_244, -_240, _240));
    float _256 = fma(_184.y, fma(_246, _172, _174), max(0.0, fma(_212, fp_c5_1._m0[31].y, (fma(_162, fp_c5_1._m0[26].z, fma(_160, fp_c5_1._m0[26].y, _158 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_210, fp_c5_1._m0[29].w, fma(_192, fp_c5_1._m0[29].z, fma(_202, fp_c5_1._m0[29].y, _198 * fp_c5_1._m0[29].x))))) * fma(_246, -_250, _250));
    float _258 = fma(_184.z, fma(_248, _172, _174), max(0.0, fma(_212, fp_c5_1._m0[31].z, (fma(_162, fp_c5_1._m0[27].z, fma(_160, fp_c5_1._m0[27].y, _158 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_210, fp_c5_1._m0[30].w, fma(_192, fp_c5_1._m0[30].z, fma(_202, fp_c5_1._m0[30].y, _198 * fp_c5_1._m0[30].x))))) * fma(_248, -_223, _223));
    float _260 = clamp((-fma(max((-_98.x) + 1.0, (-_98.y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_60.x * gl_FragCoord.w) * _82, (_60.y * gl_FragCoord.w) * _82)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _262 = _256;
    float _264 = _258;
    float _266 = _254;
    float _268 = _254;
    float _270 = _256;
    float _272 = _258;
    if (floatBitsToInt(_236) != (-1))
    {
        int _274 = floatBitsToInt(_236);
        int _276 = 0;
        float _280;
        float _282;
        float _284;
        int _370;
        do
        {
            int _278 = _274 & 255;
            _280 = _266;
            _282 = _262;
            _284 = _264;
            _288 = uint(_278) >= 30u;
            if (_288)
            {
                break;
            }
            int _290 = _278 << 4;
            uint _292 = uint(int(uint(_290 + 7360) >> uint(2)));
            int _294 = int(_292) + 1;
            uint _296 = uint(int(uint(_290 + 7368) >> uint(2)));
            float _298 = (-_196) + fp_c10_1._m0[int(uint(int(_292)) >> uint(2))][int(_292) & 3];
            float _300 = fp_c10_1._m0[int(uint(_294) >> uint(2))][_294 & 3] + (-_72.y);
            float _302 = (-_188) + fp_c10_1._m0[int(uint(int(_296)) >> uint(2))][int(_296) & 3];
            float _304 = fma(_302, _302, fma(_300, _300, _298 * _298));
            float _306 = _298 * inversesqrt(_304);
            float _308 = _300 * inversesqrt(_304);
            float _310 = _302 * inversesqrt(_304);
            float _312 = _148 + _306;
            float _314 = _154 + _308;
            float _316 = _156 + _310;
            float _318 = inversesqrt(fma(_316, _316, fma(_314, _314, _312 * _312)));
            float _320 = _312 * _318;
            float _322 = _314 * _318;
            uint _324 = uint(int(uint(_290 + 6880) >> uint(2)));
            int _326 = int(_324) + 1;
            float _328 = _316 * _318;
            float _330 = fma(_162, _310, fma(_160, _308, _158 * _306));
            float _332 = max(fma(_156, _328, fma(_154, _322, _148 * _320)), fp_c1_1._m0[0].y);
            float _334 = max(_330, fp_c1_1._m0[0].y);
            float _336 = max(fma(_162, _328, fma(_160, _322, _158 * _320)), fp_c1_1._m0[0].y) * max(fma(_162, _328, fma(_160, _322, _158 * _320)), fp_c1_1._m0[0].y);
            uint _338 = uint(int(uint(_290 + 8320) >> uint(2)));
            uint _340 = uint(int(uint(_290 + 6408) >> uint(2)));
            uint _342 = uint(int(uint(_290 + 6400) >> uint(2)));
            int _344 = int(_342) + 1;
            float _346 = exp2(_332 * fma(_332, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _348 = fp_c10_1._m0[int(uint(_326) >> uint(2))][_326 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_324)) >> uint(2))][int(_324) & 3], -sqrt(_304), fp_c1_1._m0[1].x), 0.0, 1.0));
            float _350 = (_238 * (1.0 / (_229 + fma(_229, -_334, _334)))) * ((_214 * (1.0 / max(fma(_214 * _214, _336, -_336) + 1.0, fp_c1_1._m0[0].y))) * (_214 * (1.0 / max(fma(_214 * _214, _336, -_336) + 1.0, fp_c1_1._m0[0].y))));
            bool _352 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3]) != 0;
            float _354 = _348;
            if (!_352)
            {
                _354 = 1.0;
            }
            float _356 = _354;
            if (_352)
            {
                uint _358 = uint(int(uint(_290 + 7840) >> uint(2)));
                int _360 = int(_358) + 1;
                uint _362 = uint(int(uint(_290 + 7848) >> uint(2)));
                uint _364 = uint(int(uint(_290 + 6888) >> uint(2)));
                float _366 = fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3];
                int _368 = int(_364) + 1;
                _356 = exp2(fp_c10_1._m0[int(uint(_368) >> uint(2))][_368 & 3] * log2(clamp(((-_366) + fma(_310, -fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3], fma(_308, -fp_c10_1._m0[int(uint(_360) >> uint(2))][_360 & 3], _306 * (-fp_c10_1._m0[int(uint(int(_358)) >> uint(2))][int(_358) & 3])))) * (1.0 / ((-_366) + 1.0)), 0.0, 1.0)));
            }
            _370 = _276 + 1;
            float _372 = (exp2(_348) * _356) * clamp(_330 + (-0.0), 0.0, 1.0);
            float _374 = fma(fp_c10_1._m0[int(uint(_344) >> uint(2))][_344 & 3] * _372, fma(_250, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_346, _346)) * _350) * 0.079577468335628509521484375), _262);
            float _376 = fma(fp_c10_1._m0[int(uint(int(_340)) >> uint(2))][int(_340) & 3] * _372, fma(_223, fp_c1_1._m0[1].y, ((_248 + fma(_248, -_346, _346)) * _350) * 0.079577468335628509521484375), _264);
            float _378 = fma(fp_c10_1._m0[int(uint(int(_342)) >> uint(2))][int(_342) & 3] * _372, fma(_240, fp_c1_1._m0[1].y, ((_244 + fma(_244, -_346, _346)) * _350) * 0.079577468335628509521484375), _266);
            _274 = int(uint(_274) >> uint(8));
            _276 = _370;
            _262 = _374;
            _264 = _376;
            _266 = _378;
            _280 = _378;
            _282 = _374;
            _284 = _376;
        } while (!(_370 >= 4));
        _288 = false;
        _268 = _280;
        _270 = _282;
        _272 = _284;
        if ((_274 & 255) == 30)
        {
            float _380 = _72.y;
            float _382 = 1.0 / (fma(_188, fp_c10_1._m0[565].z, fma(_380, fp_c10_1._m0[565].y, _196 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _384 = 1.0 / fp_c10_1._m0[561].y;
            float _386 = _196 + (-fp_c10_1._m0[557].x);
            float _388 = _188 + (-fp_c10_1._m0[557].z);
            float _390 = (-_196) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_384, fp_c10_1._m0[557].x);
            float _392 = (-_188) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_384, fp_c10_1._m0[557].z);
            float _394 = _386 * fp_c10_1._m0[558].z;
            float _396 = _390 * _390;
            float _398 = _388 * fp_c10_1._m0[558].x;
            float _400 = sqrt(fma(_392, _392, _396)) * (-fp_c10_1._m0[558].y);
            float _402 = ((-float(_398 < _394)) + float(_398 > _394)) * fp_c10_1._m0[561].y;
            float _404 = inversesqrt(fma(_392, _392, fma(_400, _400, _396)));
            float _406 = _390 * _404;
            float _408 = _400 * _404;
            float _410 = _392 * _404;
            float _412 = _148 + _406;
            float _414 = _154 + _408;
            float _416 = _156 + _410;
            float _418 = inversesqrt(fma(_416, _416, fma(_414, _414, _412 * _412)));
            float _420 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_386, fma(_402, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_388 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_402 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_386, fma(_402, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_388 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_402 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _422 = _412 * _418;
            float _424 = _416 * _418;
            float _426 = _414 * _418;
            float _428 = fma(_388, _388, _386 * _386);
            float _430 = inversesqrt(fma(_410, _410, _406 * _406));
            float _432 = fma(_388, fp_c10_1._m0[558].z, _386 * fp_c10_1._m0[558].x);
            float _434 = fma(_162, _410, fma(_160, _408, _158 * _406));
            bool _436 = _432 > 0.0;
            float _438 = max(fma(_162, _424, fma(_160, _426, _158 * _422)), fp_c1_1._m0[0].y) * max(fma(_162, _424, fma(_160, _426, _158 * _422)), fp_c1_1._m0[0].y);
            float _440 = _406 * _430;
            float _442 = max(fma(_156, _424, fma(_154, _426, _148 * _422)), fp_c1_1._m0[0].y);
            float _444 = _440;
            if (_436)
            {
                _444 = sqrt(_428);
            }
            float _446 = _444;
            if (!_436)
            {
                _446 = 1.0;
            }
            bool _448 = fma(_388 * inversesqrt(_428), fp_c10_1._m0[558].z, (_386 * inversesqrt(_428)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _450 = max(_434, fp_c1_1._m0[0].y);
            float _452 = clamp(fma(_432 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_432 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _454 = log2(clamp(fma(_446, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _456 = exp2(_442 * fma(_442, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _458 = _454;
            if (_448)
            {
                _458 = fma(_420, -_420, fp_c1_1._m0[1].x) * fma(_420, -_420, fp_c1_1._m0[1].x);
            }
            float _460 = _458;
            if (!_448)
            {
                _460 = 1.0;
            }
            float _462 = (_238 * (1.0 / (_229 + fma(_229, -_450, _450)))) * ((_214 * (1.0 / max(fma(_214 * _214, _438, -_438) + 1.0, fp_c1_1._m0[0].y))) * (_214 * (1.0 / max(fma(_214 * _214, _438, -_438) + 1.0, fp_c1_1._m0[0].y))));
            float _464 = (min(fma(_452, -_452, fp_c1_1._m0[1].x) * fma(_452, -_452, fp_c1_1._m0[1].x), _460) * (exp2(_454) * exp2(log2(clamp((fma(_410 * _430, -fp_c10_1._m0[558].z, _440 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_434 + (-0.0), 0.0, 1.0);
            float _466 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_188, fp_c10_1._m0[562].z, fma(_380, fp_c10_1._m0[562].y, _196 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _382, 0.5, 0.5), (-fma((fma(_188, fp_c10_1._m0[563].z, fma(_380, fp_c10_1._m0[563].y, _196 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _382, 0.5, 0.5)) + 1.0)).z > fma((fma(_188, fp_c10_1._m0[564].z, fma(_380, fp_c10_1._m0[564].y, _196 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _382, 0.5, 0.5)) || (_432 <= 0.0));
            _268 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _464) * fma(_240, fp_c1_1._m0[1].y, ((_244 + fma(_244, -_456, _456)) * _462) * 0.079577468335628509521484375), _466, _280);
            _270 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _464) * fma(_250, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_456, _456)) * _462) * 0.079577468335628509521484375), _466, _282);
            _272 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _464) * fma(_223, fp_c1_1._m0[1].y, ((_248 + fma(_248, -_456, _456)) * _462) * 0.079577468335628509521484375), _466, _284);
        }
    }
    float _468 = _196 + (-fp_c3_1._m0[11].w);
    float _470 = _72.y;
    float _472 = _188 + (-fp_c3_1._m0[13].w);
    float _474 = fma(_260, fma(_252 * (_244 + fma(_244, -_242, _242)), fp_c1_1._m0[0].w, _240 * 0.3183098733425140380859375) * (_225 * fp_c5_1._m0[5].x), _268);
    float _476 = fma(_260, fma(_252 * (_246 + fma(_246, -_242, _242)), fp_c1_1._m0[0].w, _250 * 0.3183098733425140380859375) * (_225 * fp_c5_1._m0[5].y), _270);
    float _478 = fma(_260, fma(_252 * (_248 + fma(_248, -_242, _242)), fp_c1_1._m0[0].w, _223 * 0.3183098733425140380859375) * (_225 * fp_c5_1._m0[5].z), _272);
    float _480 = _470 + (-fp_c3_1._m0[12].w);
    float _482 = fma(_472, _472, fma(_480, _480, _468 * _468));
    float _484 = clamp(fma(fma(_188, fp_c5_1._m0[14].z, fma(_470, fp_c5_1._m0[14].y, _196 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _486 = exp2(log2(clamp(sqrt(_482) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_472 * inversesqrt(_482), fp_c5_1._m0[23].z, fma(_480 * inversesqrt(_482), fp_c5_1._m0[23].y, (_468 * inversesqrt(_482)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _488 = clamp(fma(_260, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _490 = fma((-_474) + fp_c5_1._m0[13].x, _484, _474);
    float _492 = fma((-_476) + fp_c5_1._m0[13].y, _484, _476);
    float _494 = fma((-_478) + fp_c5_1._m0[13].z, _484, _478);
    float _496 = clamp((-exp2((clamp(fma(sqrt(_482), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_490) + fma(fma(_488 * (_486 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _496, _490);
    _75.y = fma((-_492) + fma(fma(_488 * (_486 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _496, _492);
    _75.z = fma((-_494) + fma(fma(_488 * (_486 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _496, _494);
    _75.w = 1.0;
}


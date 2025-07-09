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
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_18;
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
    bool _290 = false;
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
    float _124 = _70.y;
    float _126 = _70.z;
    float _128 = inversesqrt(fma(_114, _114, fma(_112, _112, _110 * _110)));
    float _130 = _114 * _128;
    float _132 = _110 * _128;
    float _134 = _112 * _128;
    float _136 = _70.x;
    float _138 = sqrt(clamp((-fma(_94, _94, _96 * _96)) + 1.0, 0.0, 1.0));
    float _140 = fma(_132, _138, fma(_94, _120, _96 * (fma(_134, _118, -(_130 * _116)) * _122)));
    float _142 = fma(_134, _138, fma(_94, _116, _96 * (fma(_130, _120, -(_132 * _118)) * _122)));
    float _144 = fma(_130, _138, fma(_94, _118, _96 * (fma(_132, _116, -(_134 * _120)) * _122)));
    float _146 = inversesqrt(fma(_126, _126, fma(_124, _124, _136 * _136)));
    float _148 = inversesqrt(fma(_144, _144, fma(_142, _142, _140 * _140)));
    float _150 = _136 * (-_146);
    float _152 = _126 * (-_146);
    float _154 = _124 * (-_146);
    float _156 = _140 * _148;
    float _158 = _142 * _148;
    float _160 = _144 * _148;
    float _162 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _164 = fma(_160, _152, fma(_158, _154, _156 * _150));
    float _166 = fma(_158 * (-_164), -2.0, -_154);
    float _168 = fma(_156 * (-_164), -2.0, -_150);
    float _170 = fma(_160 * (-_164), -2.0, -_152);
    float _172 = max(_164, fp_c1_1._m0[0].y);
    float _174 = 1.0 / max(abs(_170), max(abs(_168), abs(_166)));
    vec2 _176 = texture(fp_tex_tcb_38, vec2(_172, (-_162) + (-0.0))).xy;
    float _178 = _176.x;
    float _180 = _176.y;
    vec3 _182 = texture(fp_tex_tcb_36, vec4(_168 * _174, _166 * _174, _170 * _174, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_162 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _184 = _72.z;
    float _186 = _72.x;
    float _188 = _150 + (-fp_c5_1._m0[23].x);
    float _190 = _154 + (-fp_c5_1._m0[23].y);
    float _192 = fma(_162, 0.5, 0.5);
    float _194 = (_192 * 0.5) * _192;
    float _196 = _152 + (-fp_c5_1._m0[23].z);
    float _198 = inversesqrt(fma(_196, _196, fma(_190, _190, _188 * _188)));
    float _200 = 1.0 / (_194 + fma(_172, -_194, _172));
    float _202 = _188 * _198;
    int _205 = max(0, min(int(trunc((_184 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _207 = _190 * _198;
    float _209 = _196 * _198;
    float _211 = _156 * _158;
    float _213 = _162 * _162;
    float _215 = _158 * _160;
    float _217 = max(fma(_160, _209, fma(_158, _207, _156 * _202)), fp_c1_1._m0[0].y) * max(fma(_160, _209, fma(_158, _207, _156 * _202)), fp_c1_1._m0[0].y);
    float _219 = _160 * _160;
    float _221 = fma(_158, -fp_c5_1._m0[23].y, _156 * (-fp_c5_1._m0[23].x));
    float _223 = _156 * _160;
    float _225 = max(fma(_160, -fp_c5_1._m0[23].z, _221), fp_c1_1._m0[0].y);
    float _227 = max(fma(_152, _209, fma(_154, _207, _150 * _202)), fp_c1_1._m0[0].y);
    float _229 = fma(_156, _156, -(_158 * _158));
    uint _232 = uint(int(uint((((int(uint(_205) >> uint(16)) * 20) << 16) + (((_205 & 65535) * 20) + max(0, min(int(trunc((_186 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _234 = fp_c10_1._m0[int(uint(int(_232)) >> uint(2))][int(_232) & 3];
    float _236 = clamp(fma(_160, -fp_c5_1._m0[23].z, _221), 0.0, 1.0);
    float _238 = exp2(_227 * fma(_227, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _240 = fma(_104 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _242 = (_200 * (1.0 / (_194 + fma(_194, -_225, _225)))) * ((_213 * (1.0 / max(fma(_217, _213 * _213, -_217) + 1.0, fp_c1_1._m0[0].y))) * (_213 * (1.0 / max(fma(_217, _213 * _213, -_217) + 1.0, fp_c1_1._m0[0].y))));
    float _244 = fma(_104, -fp_c6_1._m0[9].x, _104);
    float _246 = fma(_106 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _248 = fma(_108 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _250 = fma(_106, -fp_c6_1._m0[9].x, _106);
    float _252 = fma(_108, -fp_c6_1._m0[9].x, _108);
    float _254 = fma(_182.x, fma(_240, _178, _180), max(0.0, fma(_229, fp_c5_1._m0[31].x, (fma(_160, fp_c5_1._m0[25].z, fma(_158, fp_c5_1._m0[25].y, _156 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_223, fp_c5_1._m0[28].w, fma(_219, fp_c5_1._m0[28].z, fma(_215, fp_c5_1._m0[28].y, _211 * fp_c5_1._m0[28].x))))) * fma(_244, -_240, _244));
    float _256 = fma(_182.y, fma(_246, _178, _180), max(0.0, fma(_229, fp_c5_1._m0[31].y, (fma(_160, fp_c5_1._m0[26].z, fma(_158, fp_c5_1._m0[26].y, _156 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_223, fp_c5_1._m0[29].w, fma(_219, fp_c5_1._m0[29].z, fma(_215, fp_c5_1._m0[29].y, _211 * fp_c5_1._m0[29].x))))) * fma(_250, -_246, _250));
    float _258 = fma(_182.z, fma(_248, _178, _180), max(0.0, fma(_229, fp_c5_1._m0[31].z, (fma(_160, fp_c5_1._m0[27].z, fma(_158, fp_c5_1._m0[27].y, _156 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_223, fp_c5_1._m0[30].w, fma(_219, fp_c5_1._m0[30].z, fma(_215, fp_c5_1._m0[30].y, _211 * fp_c5_1._m0[30].x))))) * fma(_252, -_248, _252));
    float _260 = clamp(texture(fp_tex_tcb_18, vec2(_84, _86)).x + (-0.0), 0.0, 1.0);
    float _262 = clamp((-fma(max((-_98.x) + 1.0, (-_98.y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_60.x * gl_FragCoord.w) * _82, (_60.y * gl_FragCoord.w) * _82)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _264 = floatBitsToInt(_234);
    float _266 = _256;
    float _268 = _254;
    float _270 = _258;
    float _272 = _254;
    float _274 = _256;
    float _276 = _258;
    if (floatBitsToInt(_234) != (-1))
    {
        int _278 = 0;
        float _282;
        float _284;
        float _286;
        int _372;
        do
        {
            int _280 = _264 & 255;
            _282 = _268;
            _284 = _266;
            _286 = _270;
            _290 = uint(_280) >= 30u;
            if (_290)
            {
                break;
            }
            int _292 = _280 << 4;
            uint _294 = uint(int(uint(_292 + 7360) >> uint(2)));
            int _296 = int(_294) + 1;
            uint _298 = uint(int(uint(_292 + 7368) >> uint(2)));
            float _300 = (-_186) + fp_c10_1._m0[int(uint(int(_294)) >> uint(2))][int(_294) & 3];
            float _302 = fp_c10_1._m0[int(uint(_296) >> uint(2))][_296 & 3] + (-_72.y);
            float _304 = (-_184) + fp_c10_1._m0[int(uint(int(_298)) >> uint(2))][int(_298) & 3];
            float _306 = fma(_304, _304, fma(_302, _302, _300 * _300));
            float _308 = _300 * inversesqrt(_306);
            float _310 = _302 * inversesqrt(_306);
            float _312 = _304 * inversesqrt(_306);
            float _314 = _150 + _308;
            float _316 = _154 + _310;
            float _318 = _152 + _312;
            uint _320 = uint(int(uint(_292 + 6880) >> uint(2)));
            int _322 = int(_320) + 1;
            float _324 = inversesqrt(fma(_318, _318, fma(_316, _316, _314 * _314)));
            float _326 = _314 * _324;
            float _328 = _316 * _324;
            float _330 = _318 * _324;
            uint _332 = uint(int(uint(_292 + 8320) >> uint(2)));
            float _334 = max(fma(_152, _330, fma(_154, _328, _150 * _326)), fp_c1_1._m0[0].y);
            float _336 = max(fma(_160, _330, fma(_158, _328, _156 * _326)), fp_c1_1._m0[0].y) * max(fma(_160, _330, fma(_158, _328, _156 * _326)), fp_c1_1._m0[0].y);
            float _338 = fma(_160, _312, fma(_158, _310, _156 * _308));
            float _340 = max(_338, fp_c1_1._m0[0].y);
            uint _342 = uint(int(uint(_292 + 6408) >> uint(2)));
            uint _344 = uint(int(uint(_292 + 6400) >> uint(2)));
            int _346 = int(_344) + 1;
            float _348 = exp2(_334 * fma(_334, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _350 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_332)) >> uint(2))][int(_332) & 3]) != 0;
            float _352 = _246 + fma(_246, -_348, _348);
            float _354 = (_200 * (1.0 / (_194 + fma(_194, -_340, _340)))) * ((_213 * (1.0 / max(fma(_213 * _213, _336, -_336) + 1.0, fp_c1_1._m0[0].y))) * (_213 * (1.0 / max(fma(_213 * _213, _336, -_336) + 1.0, fp_c1_1._m0[0].y))));
            float _356 = _352;
            if (!_350)
            {
                _356 = 1.0;
            }
            float _358 = _356;
            if (_350)
            {
                uint _360 = uint(int(uint(_292 + 7840) >> uint(2)));
                int _362 = int(_360) + 1;
                uint _364 = uint(int(uint(_292 + 7848) >> uint(2)));
                uint _366 = uint(int(uint(_292 + 6888) >> uint(2)));
                float _368 = fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3];
                int _370 = int(_366) + 1;
                _358 = exp2(fp_c10_1._m0[int(uint(_370) >> uint(2))][_370 & 3] * log2(clamp(((-_368) + fma(_312, -fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3], fma(_310, -fp_c10_1._m0[int(uint(_362) >> uint(2))][_362 & 3], _308 * (-fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3])))) * (1.0 / ((-_368) + 1.0)), 0.0, 1.0)));
            }
            _372 = _278 + 1;
            float _374 = (exp2(fp_c10_1._m0[int(uint(_322) >> uint(2))][_322 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_320)) >> uint(2))][int(_320) & 3], -sqrt(_306), fp_c1_1._m0[1].x), 0.0, 1.0))) * _358) * clamp(_338 + (-0.0), 0.0, 1.0);
            float _376 = fma(fp_c10_1._m0[int(uint(_346) >> uint(2))][_346 & 3] * _374, fma(fma(_106, -fp_c6_1._m0[9].x, _106), fp_c1_1._m0[1].y, (_352 * _354) * 0.079577468335628509521484375), _266);
            float _378 = fma(fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3] * _374, fma(fma(_104, -fp_c6_1._m0[9].x, _104), fp_c1_1._m0[1].y, ((_240 + fma(_240, -_348, _348)) * _354) * 0.079577468335628509521484375), _268);
            float _380 = fma(fp_c10_1._m0[int(uint(int(_342)) >> uint(2))][int(_342) & 3] * _374, fma(fma(_108, -fp_c6_1._m0[9].x, _108), fp_c1_1._m0[1].y, ((_248 + fma(_248, -_348, _348)) * _354) * 0.079577468335628509521484375), _270);
            _264 = int(uint(_264) >> uint(8));
            _278 = _372;
            _266 = _376;
            _268 = _378;
            _270 = _380;
            _282 = _378;
            _284 = _376;
            _286 = _380;
        } while (!(_372 >= 4));
        _290 = false;
        _272 = _282;
        _274 = _284;
        _276 = _286;
        if ((_264 & 255) == 30)
        {
            float _382 = 1.0 / fp_c10_1._m0[561].y;
            float _384 = _186 + (-fp_c10_1._m0[557].x);
            float _386 = _384 * fp_c10_1._m0[558].z;
            float _388 = _184 + (-fp_c10_1._m0[557].z);
            float _390 = (-_186) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_382, fp_c10_1._m0[557].x);
            float _392 = (-_184) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_382, fp_c10_1._m0[557].z);
            float _394 = _388 * fp_c10_1._m0[558].x;
            float _396 = _390 * _390;
            float _398 = ((-float(_394 < _386)) + float(_394 > _386)) * fp_c10_1._m0[561].y;
            float _400 = sqrt(fma(_392, _392, _396)) * (-fp_c10_1._m0[558].y);
            float _402 = fma(_388, _388, _384 * _384);
            float _404 = inversesqrt(fma(_392, _392, fma(_400, _400, _396)));
            float _406 = _390 * _404;
            float _408 = _400 * _404;
            float _410 = fma(_388, fp_c10_1._m0[558].z, _384 * fp_c10_1._m0[558].x);
            float _412 = _150 + _406;
            float _414 = _154 + _408;
            float _416 = _392 * _404;
            float _418 = _152 + _416;
            float _420 = inversesqrt(fma(_416, _416, _406 * _406));
            float _422 = _72.y;
            float _424 = inversesqrt(fma(_418, _418, fma(_414, _414, _412 * _412)));
            float _426 = _414 * _424;
            float _428 = _412 * _424;
            float _430 = _418 * _424;
            float _432 = 1.0 / (fma(_184, fp_c10_1._m0[565].z, fma(_422, fp_c10_1._m0[565].y, _186 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _434 = fma((fma(_184, fp_c10_1._m0[563].z, fma(_422, fp_c10_1._m0[563].y, _186 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _432, 0.5, 0.5);
            bool _436 = _410 > 0.0;
            float _438 = fma(_160, _416, fma(_158, _408, _156 * _406));
            float _440 = _434;
            if (_436)
            {
                _440 = sqrt(_402);
            }
            float _442 = _440;
            if (!_436)
            {
                _442 = 1.0;
            }
            float _444 = max(fma(_160, _430, fma(_158, _426, _156 * _428)), fp_c1_1._m0[0].y) * max(fma(_160, _430, fma(_158, _426, _156 * _428)), fp_c1_1._m0[0].y);
            float _446 = max(fma(_152, _430, fma(_154, _426, _150 * _428)), fp_c1_1._m0[0].y);
            float _448 = max(_438, fp_c1_1._m0[0].y);
            float _450 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_384, fma(_398, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_388 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_398 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_384, fma(_398, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_388 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_398 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            bool _452 = fma(_388 * inversesqrt(_402), fp_c10_1._m0[558].z, (_384 * inversesqrt(_402)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _454 = clamp(fma(_410 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_410 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _456 = fma(_450, -_450, fp_c1_1._m0[1].x);
            float _458 = exp2(_446 * fma(_446, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _460 = _456;
            if (_452)
            {
                _460 = _456 * _456;
            }
            float _462 = _460;
            if (!_452)
            {
                _462 = 1.0;
            }
            float _464 = (_200 * (1.0 / (_194 + fma(_194, -_448, _448)))) * ((_213 * (1.0 / max(fma(_213 * _213, _444, -_444) + 1.0, fp_c1_1._m0[0].y))) * (_213 * (1.0 / max(fma(_213 * _213, _444, -_444) + 1.0, fp_c1_1._m0[0].y))));
            float _466 = (min(fma(_454, -_454, fp_c1_1._m0[1].x) * fma(_454, -_454, fp_c1_1._m0[1].x), _462) * (exp2(log2(clamp(fma(_442, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_416 * _420, -fp_c10_1._m0[558].z, (_406 * _420) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_438 + (-0.0), 0.0, 1.0);
            float _468 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_184, fp_c10_1._m0[562].z, fma(_422, fp_c10_1._m0[562].y, _186 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _432, 0.5, 0.5), (-_434) + 1.0)).z > fma((fma(_184, fp_c10_1._m0[564].z, fma(_422, fp_c10_1._m0[564].y, _186 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _432, 0.5, 0.5)) || (_410 <= 0.0));
            _272 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _466) * fma(fma(_104, -fp_c6_1._m0[9].x, _104), fp_c1_1._m0[1].y, ((_240 + fma(_240, -_458, _458)) * _464) * 0.079577468335628509521484375), _468, _282);
            _274 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _466) * fma(fma(_106, -fp_c6_1._m0[9].x, _106), fp_c1_1._m0[1].y, ((_246 + fma(_246, -_458, _458)) * _464) * 0.079577468335628509521484375), _468, _284);
            _276 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _466) * fma(fma(_108, -fp_c6_1._m0[9].x, _108), fp_c1_1._m0[1].y, ((_248 + fma(_248, -_458, _458)) * _464) * 0.079577468335628509521484375), _468, _286);
        }
    }
    float _470 = _186 + (-fp_c3_1._m0[11].w);
    float _472 = _72.y;
    float _474 = _184 + (-fp_c3_1._m0[13].w);
    float _476 = _472 + (-fp_c3_1._m0[12].w);
    float _478 = fma(_474, _474, fma(_476, _476, _470 * _470));
    float _480 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _482 = fma(_104, _480, fma(_260, _272, _262 * (fma(_242 * (_240 + fma(_240, -_238, _238)), fp_c1_1._m0[0].w, _244 * 0.3183098733425140380859375) * (_236 * fp_c5_1._m0[5].x))));
    float _484 = clamp(fma(fma(_184, fp_c5_1._m0[14].z, fma(_472, fp_c5_1._m0[14].y, _186 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _486 = fma(_106, _480, fma(_260, _274, _262 * (fma(_242 * (_246 + fma(_246, -_238, _238)), fp_c1_1._m0[0].w, _250 * 0.3183098733425140380859375) * (_236 * fp_c5_1._m0[5].y))));
    float _488 = clamp(fma(_260 * _262, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _490 = fma(_108, _480, fma(_260, _276, _262 * (fma(_242 * (_248 + fma(_248, -_238, _238)), fp_c1_1._m0[0].w, _252 * 0.3183098733425140380859375) * (_236 * fp_c5_1._m0[5].z))));
    float _492 = exp2(log2(clamp(sqrt(_478) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_474 * inversesqrt(_478), fp_c5_1._m0[23].z, fma(_476 * inversesqrt(_478), fp_c5_1._m0[23].y, (_470 * inversesqrt(_478)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _494 = fma((-_482) + fp_c5_1._m0[13].x, _484, _482);
    float _496 = fma((-_486) + fp_c5_1._m0[13].y, _484, _486);
    float _498 = fma((-_490) + fp_c5_1._m0[13].z, _484, _490);
    float _500 = clamp((-exp2((clamp(fma(sqrt(_478), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_494) + fma(fma((_492 * fp_c7_1._m0[55].x) * _488, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _500, _494);
    _75.y = fma((-_496) + fma(fma((_492 * fp_c7_1._m0[55].y) * _488, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _500, _496);
    _75.z = fma((-_498) + fma(fma((_492 * fp_c7_1._m0[55].z) * _488, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _500, _498);
    _75.w = 1.0;
}


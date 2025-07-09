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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _60;
layout(location = 1) in vec4 _62;
layout(location = 2) in vec4 _64;
layout(location = 4) in vec4 _66;
layout(location = 6) in vec4 _68;
layout(location = 5) in vec4 _70;
layout(location = 3) in vec4 _72;
layout(location = 0) out vec4 _75;
uint _6[12];

void main()
{
    bool _290 = false;
    float _82 = _60.x;
    float _84 = _60.y;
    vec2 _88 = texture(fp_tex_tcb_E, vec2(_82, _84)).xy;
    float _90 = _88.x;
    float _92 = _88.y;
    float _94 = _62.x;
    float _96 = _62.y;
    float _98 = _62.z;
    float _100 = _64.y;
    float _102 = _64.z;
    float _104 = _64.x;
    float _106 = _64.w;
    float _108 = _66.x;
    float _110 = _66.y;
    float _112 = _66.z;
    float _114 = 1.0 / (_68.z * gl_FragCoord.w);
    float _116 = inversesqrt(fma(_98, _98, fma(_96, _96, _94 * _94)));
    float _118 = _98 * _116;
    float _120 = _94 * _116;
    float _122 = _96 * _116;
    float _124 = sqrt(clamp((-fma(_90, _90, _92 * _92)) + 1.0, 0.0, 1.0));
    float _126 = fma(_120, _124, fma(_90, _104, _92 * (fma(_122, _102, -(_118 * _100)) * _106)));
    float _128 = fma(_122, _124, fma(_90, _100, _92 * (fma(_118, _104, -(_120 * _102)) * _106)));
    float _130 = fma(_118, _124, fma(_90, _102, _92 * (fma(_120, _100, -(_122 * _104)) * _106)));
    float _132 = inversesqrt(fma(_112, _112, fma(_110, _110, _108 * _108)));
    float _134 = _108 * (-_132);
    float _136 = inversesqrt(fma(_130, _130, fma(_128, _128, _126 * _126)));
    float _138 = _110 * (-_132);
    float _140 = _126 * _136;
    float _142 = _112 * (-_132);
    float _144 = _128 * _136;
    float _146 = _130 * _136;
    float _148 = fma(_146, _142, fma(_144, _138, _140 * _134));
    float _150 = max(texture(fp_tex_tcb_10, vec2(_82, _84)).x, fp_c1_1._m0[0].x);
    float _152 = 1.0 / _70.w;
    float _154 = fma(_140 * (-_148), -2.0, -_134);
    float _156 = max(_148, fp_c1_1._m0[0].z);
    float _158 = fma(_144 * (-_148), -2.0, -_138);
    float _160 = fma(_146 * (-_148), -2.0, -_142);
    float _162 = 1.0 / max(abs(_160), max(abs(_154), abs(_158)));
    vec2 _164 = texture(fp_tex_tcb_2A, vec2(fma(_70.x * _152, 0.5, 0.5), fma(_70.y * _152, -0.5, 0.5))).xy;
    vec3 _168 = texture(fp_tex_tcb_A, vec2(_82, _84)).xyz;
    float _170 = _168.x;
    float _172 = _168.y;
    float _174 = _168.z;
    float _176 = texture(fp_tex_tcb_12, vec2(_82, _84)).x;
    vec2 _178 = texture(fp_tex_tcb_38, vec2(_156, (-_150) + (-0.0))).xy;
    float _180 = _178.x;
    float _182 = _178.y;
    vec3 _184 = texture(fp_tex_tcb_36, vec4(_154 * _162, _158 * _162, _160 * _162, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_150 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _186 = _134 + (-fp_c5_1._m0[23].x);
    float _188 = _138 + (-fp_c5_1._m0[23].y);
    float _190 = _72.z;
    float _192 = _142 + (-fp_c5_1._m0[23].z);
    float _194 = _140 * _144;
    float _196 = _146 * _146;
    float _198 = _72.x;
    float _200 = inversesqrt(fma(_192, _192, fma(_188, _188, _186 * _186)));
    float _202 = _186 * _200;
    float _204 = _188 * _200;
    float _206 = _192 * _200;
    float _208 = _144 * _146;
    float _210 = _140 * _146;
    float _212 = fma(_140, _140, -(_144 * _144));
    float _214 = _150 * _150;
    int _217 = max(0, min(int(trunc((_190 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _219 = fma(_144, -fp_c5_1._m0[23].y, _140 * (-fp_c5_1._m0[23].x));
    float _221 = max(fma(_146, _206, fma(_144, _204, _140 * _202)), fp_c1_1._m0[0].z) * max(fma(_146, _206, fma(_144, _204, _140 * _202)), fp_c1_1._m0[0].z);
    float _223 = fma(_150, 0.5, 0.5);
    float _225 = max(fma(_142, _206, fma(_138, _204, _134 * _202)), fp_c1_1._m0[0].z);
    float _227 = (_223 * 0.5) * _223;
    float _229 = clamp(fma(_146, -fp_c5_1._m0[23].z, _219), 0.0, 1.0);
    float _231 = max(fma(_146, -fp_c5_1._m0[23].z, _219), fp_c1_1._m0[0].z);
    uint _234 = uint(int(uint((((int(uint(_217) >> uint(16)) * 20) << 16) + (((_217 & 65535) * 20) + max(0, min(int(trunc((_198 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _236 = fp_c10_1._m0[int(uint(int(_234)) >> uint(2))][int(_234) & 3];
    float _238 = 1.0 / (_227 + fma(_156, -_227, _156));
    float _240 = exp2(_225 * fma(_225, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _242 = fma(_170, -_176, _170);
    float _244 = fma(_176, _170 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _246 = fma(_174, -_176, _174);
    float _248 = clamp((-fma(max((-_164.x) + 1.0, (-_164.y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_68.x * gl_FragCoord.w) * _114, (_68.y * gl_FragCoord.w) * _114)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _250 = (_238 * (1.0 / (_227 + fma(_227, -_231, _231)))) * ((_214 * (1.0 / max(fma(_221, _214 * _214, -_221) + 1.0, fp_c1_1._m0[0].z))) * (_214 * (1.0 / max(fma(_221, _214 * _214, -_221) + 1.0, fp_c1_1._m0[0].z))));
    float _252 = fma(_176, _172 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _254 = fma(_172, -_176, _172);
    float _256 = fma(_176, _174 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _258 = fma(_184.x, fma(_244, _180, _182), max(0.0, fma(_212, fp_c5_1._m0[31].x, (fma(_146, fp_c5_1._m0[25].z, fma(_144, fp_c5_1._m0[25].y, _140 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_210, fp_c5_1._m0[28].w, fma(_196, fp_c5_1._m0[28].z, fma(_208, fp_c5_1._m0[28].y, _194 * fp_c5_1._m0[28].x))))) * fma(_244, -_242, _242));
    float _260 = fma(_184.y, fma(_252, _180, _182), max(0.0, fma(_212, fp_c5_1._m0[31].y, (fma(_146, fp_c5_1._m0[26].z, fma(_144, fp_c5_1._m0[26].y, _140 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_210, fp_c5_1._m0[29].w, fma(_196, fp_c5_1._m0[29].z, fma(_208, fp_c5_1._m0[29].y, _194 * fp_c5_1._m0[29].x))))) * fma(_252, -_254, _254));
    float _262 = fma(_184.z, fma(_256, _180, _182), max(0.0, fma(_212, fp_c5_1._m0[31].z, (fma(_146, fp_c5_1._m0[27].z, fma(_144, fp_c5_1._m0[27].y, _140 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_210, fp_c5_1._m0[30].w, fma(_196, fp_c5_1._m0[30].z, fma(_208, fp_c5_1._m0[30].y, _194 * fp_c5_1._m0[30].x))))) * fma(_256, -_246, _246));
    int _264 = floatBitsToInt(_236);
    float _266 = _260;
    float _268 = _258;
    float _270 = _262;
    float _272 = _258;
    float _274 = _262;
    float _276 = _260;
    if (floatBitsToInt(_236) != (-1))
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
            float _300 = (-_198) + fp_c10_1._m0[int(uint(int(_294)) >> uint(2))][int(_294) & 3];
            float _302 = fp_c10_1._m0[int(uint(_296) >> uint(2))][_296 & 3] + (-_72.y);
            float _304 = (-_190) + fp_c10_1._m0[int(uint(int(_298)) >> uint(2))][int(_298) & 3];
            float _306 = fma(_304, _304, fma(_302, _302, _300 * _300));
            float _308 = _300 * inversesqrt(_306);
            float _310 = _302 * inversesqrt(_306);
            float _312 = _304 * inversesqrt(_306);
            float _314 = _134 + _308;
            float _316 = _138 + _310;
            float _318 = _142 + _312;
            float _320 = inversesqrt(fma(_318, _318, fma(_316, _316, _314 * _314)));
            float _322 = _314 * _320;
            float _324 = _316 * _320;
            uint _326 = uint(int(uint(_292 + 6880) >> uint(2)));
            int _328 = int(_326) + 1;
            float _330 = _318 * _320;
            uint _332 = uint(int(uint(_292 + 8320) >> uint(2)));
            uint _334 = uint(int(uint(_292 + 6408) >> uint(2)));
            float _336 = fma(_146, _312, fma(_144, _310, _140 * _308));
            float _338 = max(fma(_142, _330, fma(_138, _324, _134 * _322)), fp_c1_1._m0[0].z);
            float _340 = max(fma(_146, _330, fma(_144, _324, _140 * _322)), fp_c1_1._m0[0].z) * max(fma(_146, _330, fma(_144, _324, _140 * _322)), fp_c1_1._m0[0].z);
            float _342 = max(_336, fp_c1_1._m0[0].z);
            uint _344 = uint(int(uint(_292 + 6400) >> uint(2)));
            int _346 = int(_344) + 1;
            float _348 = exp2(_338 * fma(_338, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _350 = fp_c10_1._m0[int(uint(_328) >> uint(2))][_328 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_326)) >> uint(2))][int(_326) & 3], -sqrt(_306), fp_c1_1._m0[1].y), 0.0, 1.0));
            bool _352 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_332)) >> uint(2))][int(_332) & 3]) != 0;
            float _354 = (_238 * (1.0 / (_227 + fma(_227, -_342, _342)))) * ((_214 * (1.0 / max(fma(_214 * _214, _340, -_340) + 1.0, fp_c1_1._m0[0].z))) * (_214 * (1.0 / max(fma(_214 * _214, _340, -_340) + 1.0, fp_c1_1._m0[0].z))));
            float _356 = _350;
            if (!_352)
            {
                _356 = 1.0;
            }
            float _358 = _356;
            if (_352)
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
            float _374 = (exp2(_350) * _358) * clamp(_336 + (-0.0), 0.0, 1.0);
            float _376 = fma(fp_c10_1._m0[int(uint(_346) >> uint(2))][_346 & 3] * _374, fma(_254, fp_c1_1._m0[1].z, ((_252 + fma(_252, -_348, _348)) * _354) * 0.079577468335628509521484375), _266);
            float _378 = fma(fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3] * _374, fma(_242, fp_c1_1._m0[1].z, ((_244 + fma(_244, -_348, _348)) * _354) * 0.079577468335628509521484375), _268);
            float _380 = fma(fp_c10_1._m0[int(uint(int(_334)) >> uint(2))][int(_334) & 3] * _374, fma(_246, fp_c1_1._m0[1].z, ((_256 + fma(_256, -_348, _348)) * _354) * 0.079577468335628509521484375), _270);
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
        _274 = _286;
        _276 = _284;
        if ((_264 & 255) == 30)
        {
            float _382 = _72.y;
            float _384 = 1.0 / (fma(_190, fp_c10_1._m0[565].z, fma(_382, fp_c10_1._m0[565].y, _198 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _386 = 1.0 / fp_c10_1._m0[561].y;
            float _388 = _198 + (-fp_c10_1._m0[557].x);
            float _390 = _190 + (-fp_c10_1._m0[557].z);
            float _392 = _388 * fp_c10_1._m0[558].z;
            float _394 = (-_198) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_386, fp_c10_1._m0[557].x);
            float _396 = (-_190) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_386, fp_c10_1._m0[557].z);
            float _398 = _394 * _394;
            float _400 = _390 * fp_c10_1._m0[558].x;
            float _402 = sqrt(fma(_396, _396, _398)) * (-fp_c10_1._m0[558].y);
            float _404 = ((-float(_400 < _392)) + float(_400 > _392)) * fp_c10_1._m0[561].y;
            float _406 = inversesqrt(fma(_396, _396, fma(_402, _402, _398)));
            float _408 = _394 * _406;
            float _410 = _402 * _406;
            float _412 = _396 * _406;
            float _414 = _134 + _408;
            float _416 = _138 + _410;
            float _418 = _142 + _412;
            float _420 = inversesqrt(fma(_418, _418, fma(_416, _416, _414 * _414)));
            float _422 = _414 * _420;
            float _424 = _416 * _420;
            float _426 = _418 * _420;
            float _428 = fma(_390, fp_c10_1._m0[558].z, _388 * fp_c10_1._m0[558].x);
            float _430 = fma(_146, _412, fma(_144, _410, _140 * _408));
            float _432 = inversesqrt(fma(_412, _412, _408 * _408));
            float _434 = fma(_390, _390, _388 * _388);
            bool _436 = _428 > 0.0;
            float _438 = max(fma(_142, _426, fma(_138, _424, _134 * _422)), fp_c1_1._m0[0].z);
            float _440 = inversesqrt(_434);
            if (_436)
            {
                _440 = sqrt(_434);
            }
            float _442 = _440;
            if (!_436)
            {
                _442 = 1.0;
            }
            float _444 = max(fma(_146, _426, fma(_144, _424, _140 * _422)), fp_c1_1._m0[0].z) * max(fma(_146, _426, fma(_144, _424, _140 * _422)), fp_c1_1._m0[0].z);
            float _446 = max(_430, fp_c1_1._m0[0].z);
            bool _448 = fma(_390 * inversesqrt(_434), fp_c10_1._m0[558].z, (_388 * inversesqrt(_434)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _450 = clamp(fma(_428 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_428 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _452 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_388, fma(_404, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_390 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_404 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_388, fma(_404, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_390 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_404 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _454 = fma(_452, -_452, fp_c1_1._m0[1].y);
            if (!_448)
            {
                _454 = 1.0;
            }
            float _456 = exp2(_438 * fma(_438, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _458 = _454;
            if (_448)
            {
                _458 = _454 * _454;
            }
            float _460 = (_238 * (1.0 / (_227 + fma(_227, -_446, _446)))) * ((_214 * (1.0 / max(fma(_214 * _214, _444, -_444) + 1.0, fp_c1_1._m0[0].z))) * (_214 * (1.0 / max(fma(_214 * _214, _444, -_444) + 1.0, fp_c1_1._m0[0].z))));
            float _462 = (min(fma(_450, -_450, fp_c1_1._m0[1].y) * fma(_450, -_450, fp_c1_1._m0[1].y), _458) * (exp2(log2(clamp(fma(_442, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_412 * _432, -fp_c10_1._m0[558].z, (_408 * _432) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_430 + (-0.0), 0.0, 1.0);
            float _464 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_190, fp_c10_1._m0[562].z, fma(_382, fp_c10_1._m0[562].y, _198 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _384, 0.5, 0.5), (-fma((fma(_190, fp_c10_1._m0[563].z, fma(_382, fp_c10_1._m0[563].y, _198 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _384, 0.5, 0.5)) + 1.0)).z > fma((fma(_190, fp_c10_1._m0[564].z, fma(_382, fp_c10_1._m0[564].y, _198 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _384, 0.5, 0.5)) || (_428 <= 0.0));
            _272 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _462) * fma(_242, fp_c1_1._m0[1].z, ((_244 + fma(_244, -_456, _456)) * _460) * 0.079577468335628509521484375), _464, _282);
            _274 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _462) * fma(_246, fp_c1_1._m0[1].z, ((_256 + fma(_256, -_456, _456)) * _460) * 0.079577468335628509521484375), _464, _286);
            _276 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _462) * fma(_254, fp_c1_1._m0[1].z, ((_252 + fma(_252, -_456, _456)) * _460) * 0.079577468335628509521484375), _464, _284);
        }
    }
    float _466 = _198 + (-fp_c3_1._m0[11].w);
    float _468 = _72.y;
    float _470 = _190 + (-fp_c3_1._m0[13].w);
    float _472 = fma(_248, fma(_250 * (_244 + fma(_244, -_240, _240)), fp_c1_1._m0[1].x, _242 * 0.3183098733425140380859375) * (_229 * fp_c5_1._m0[5].x), _272);
    float _474 = fma(_248, fma(_250 * (_256 + fma(_256, -_240, _240)), fp_c1_1._m0[1].x, _246 * 0.3183098733425140380859375) * (_229 * fp_c5_1._m0[5].z), _274);
    float _476 = fma(_248, fma(_250 * (_252 + fma(_252, -_240, _240)), fp_c1_1._m0[1].x, _254 * 0.3183098733425140380859375) * (_229 * fp_c5_1._m0[5].y), _276);
    float _478 = _468 + (-fp_c3_1._m0[12].w);
    float _480 = fma(_470, _470, fma(_478, _478, _466 * _466));
    float _482 = clamp(fma(fma(_190, fp_c5_1._m0[14].z, fma(_468, fp_c5_1._m0[14].y, _198 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _484 = exp2(log2(clamp(sqrt(_480) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_470 * inversesqrt(_480), fp_c5_1._m0[23].z, fma(_478 * inversesqrt(_480), fp_c5_1._m0[23].y, (_466 * inversesqrt(_480)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _486 = clamp(fma(_248, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _488 = fma((-_472) + fp_c5_1._m0[13].x, _482, _472);
    float _490 = fma((-_476) + fp_c5_1._m0[13].y, _482, _476);
    float _492 = clamp((-exp2((clamp(fma(sqrt(_480), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    float _494 = fma((-_474) + fp_c5_1._m0[13].z, _482, _474);
    _75.x = fma((-_488) + fma(fma(_486 * (_484 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _492, _488);
    _75.y = fma((-_490) + fma(fma(_486 * (_484 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _492, _490);
    _75.z = fma((-_494) + fma(fma(_486 * (_484 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _492, _494);
    _75.w = 1.0;
}


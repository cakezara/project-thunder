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
    float _146 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _148 = inversesqrt(fma(_128, _128, fma(_126, _126, _124 * _124)));
    float _150 = inversesqrt(fma(_144, _144, fma(_142, _142, _140 * _140)));
    float _152 = _124 * (-_148);
    float _154 = _126 * (-_148);
    float _156 = _128 * (-_148);
    float _158 = _140 * _150;
    float _160 = _142 * _150;
    float _162 = _144 * _150;
    float _164 = fma(_162, _156, fma(_160, _154, _158 * _152));
    float _166 = fma(_158 * (-_164), -2.0, -_152);
    float _168 = fma(_160 * (-_164), -2.0, -_154);
    float _170 = fma(_162 * (-_164), -2.0, -_156);
    float _172 = max(_164, fp_c1_1._m0[0].y);
    float _174 = 1.0 / max(abs(_170), max(abs(_166), abs(_168)));
    vec2 _176 = texture(fp_tex_tcb_38, vec2(_172, (-_146) + (-0.0))).xy;
    float _178 = _176.x;
    float _180 = _176.y;
    vec3 _182 = texture(fp_tex_tcb_36, vec4(_166 * _174, _168 * _174, _170 * _174, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_146 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _184 = _72.x;
    float _186 = _72.z;
    float _188 = _152 + (-fp_c5_1._m0[23].x);
    float _190 = _154 + (-fp_c5_1._m0[23].y);
    float _192 = fma(_146, 0.5, 0.5);
    float _194 = _146 * _146;
    float _196 = _156 + (-fp_c5_1._m0[23].z);
    float _198 = inversesqrt(fma(_196, _196, fma(_190, _190, _188 * _188)));
    float _200 = _158 * _160;
    float _202 = _188 * _198;
    float _204 = _190 * _198;
    float _206 = _196 * _198;
    int _209 = max(0, min(int(trunc((_186 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _211 = _160 * _162;
    float _213 = _162 * _162;
    float _215 = fma(_160, -fp_c5_1._m0[23].y, _158 * (-fp_c5_1._m0[23].x));
    float _217 = max(fma(_162, _206, fma(_160, _204, _158 * _202)), fp_c1_1._m0[0].y) * max(fma(_162, _206, fma(_160, _204, _158 * _202)), fp_c1_1._m0[0].y);
    float _219 = _158 * _162;
    float _221 = (_192 * 0.5) * _192;
    float _223 = clamp(fma(_162, -fp_c5_1._m0[23].z, _215), 0.0, 1.0);
    float _225 = max(fma(_156, _206, fma(_154, _204, _152 * _202)), fp_c1_1._m0[0].y);
    float _227 = 1.0 / (_221 + fma(_172, -_221, _172));
    float _229 = max(fma(_162, -fp_c5_1._m0[23].z, _215), fp_c1_1._m0[0].y);
    uint _232 = uint(int(uint((((int(uint(_209) >> uint(16)) * 20) << 16) + (((_209 & 65535) * 20) + max(0, min(int(trunc((_184 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _234 = fp_c10_1._m0[int(uint(int(_232)) >> uint(2))][int(_232) & 3];
    float _236 = fma(_158, _158, -(_160 * _160));
    float _238 = exp2(_225 * fma(_225, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _240 = (_227 * (1.0 / (_221 + fma(_221, -_229, _229)))) * ((_194 * (1.0 / max(fma(_217, _194 * _194, -_217) + 1.0, fp_c1_1._m0[0].y))) * (_194 * (1.0 / max(fma(_217, _194 * _194, -_217) + 1.0, fp_c1_1._m0[0].y))));
    float _242 = fma(_104, -fp_c6_1._m0[9].x, _104);
    float _244 = fma(_106, -fp_c6_1._m0[9].x, _106);
    float _246 = fma(_104 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _248 = fma(_106 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _250 = fma(_108, -fp_c6_1._m0[9].x, _108);
    float _252 = clamp((-fma(max((-_98.x) + 1.0, (-_98.y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_60.x * gl_FragCoord.w) * _82, (_60.y * gl_FragCoord.w) * _82)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _254 = fma(_108 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _256 = clamp(texture(fp_tex_tcb_18, vec2(_84, _86)).x + (-0.0), 0.0, 1.0);
    float _258 = fma(_182.x, fma(_246, _178, _180), max(0.0, fma(_236, fp_c5_1._m0[31].x, (fma(_162, fp_c5_1._m0[25].z, fma(_160, fp_c5_1._m0[25].y, _158 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_219, fp_c5_1._m0[28].w, fma(_213, fp_c5_1._m0[28].z, fma(_211, fp_c5_1._m0[28].y, _200 * fp_c5_1._m0[28].x))))) * fma(_242, -_246, _242));
    float _260 = fma(_182.y, fma(_248, _178, _180), max(0.0, fma(_236, fp_c5_1._m0[31].y, (fma(_162, fp_c5_1._m0[26].z, fma(_160, fp_c5_1._m0[26].y, _158 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_219, fp_c5_1._m0[29].w, fma(_213, fp_c5_1._m0[29].z, fma(_211, fp_c5_1._m0[29].y, _200 * fp_c5_1._m0[29].x))))) * fma(_244, -_248, _244));
    float _262 = fma(_182.z, fma(_254, _178, _180), max(0.0, fma(_236, fp_c5_1._m0[31].z, (fma(_162, fp_c5_1._m0[27].z, fma(_160, fp_c5_1._m0[27].y, _158 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_219, fp_c5_1._m0[30].w, fma(_213, fp_c5_1._m0[30].z, fma(_211, fp_c5_1._m0[30].y, _200 * fp_c5_1._m0[30].x))))) * fma(_250, -_254, _250));
    int _264 = floatBitsToInt(_234);
    float _266 = _260;
    float _268 = _262;
    float _270 = _258;
    float _272 = _260;
    float _274 = _258;
    float _276 = _262;
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
            _282 = _270;
            _284 = _266;
            _286 = _268;
            _290 = uint(_280) >= 30u;
            if (_290)
            {
                break;
            }
            int _292 = _280 << 4;
            uint _294 = uint(int(uint(_292 + 7360) >> uint(2)));
            int _296 = int(_294) + 1;
            uint _298 = uint(int(uint(_292 + 7368) >> uint(2)));
            float _300 = (-_184) + fp_c10_1._m0[int(uint(int(_294)) >> uint(2))][int(_294) & 3];
            float _302 = fp_c10_1._m0[int(uint(_296) >> uint(2))][_296 & 3] + (-_72.y);
            float _304 = (-_186) + fp_c10_1._m0[int(uint(int(_298)) >> uint(2))][int(_298) & 3];
            float _306 = fma(_304, _304, fma(_302, _302, _300 * _300));
            float _308 = _300 * inversesqrt(_306);
            float _310 = _302 * inversesqrt(_306);
            float _312 = _304 * inversesqrt(_306);
            float _314 = _152 + _308;
            float _316 = _154 + _310;
            float _318 = _156 + _312;
            uint _320 = uint(int(uint(_292 + 6880) >> uint(2)));
            int _322 = int(_320) + 1;
            float _324 = inversesqrt(fma(_318, _318, fma(_316, _316, _314 * _314)));
            float _326 = _314 * _324;
            float _328 = _316 * _324;
            float _330 = _318 * _324;
            float _332 = max(fma(_156, _330, fma(_154, _328, _152 * _326)), fp_c1_1._m0[0].y);
            float _334 = fma(_162, _312, fma(_160, _310, _158 * _308));
            float _336 = max(fma(_162, _330, fma(_160, _328, _158 * _326)), fp_c1_1._m0[0].y) * max(fma(_162, _330, fma(_160, _328, _158 * _326)), fp_c1_1._m0[0].y);
            uint _338 = uint(int(uint(_292 + 8320) >> uint(2)));
            float _340 = max(_334, fp_c1_1._m0[0].y);
            float _342 = fp_c10_1._m0[int(uint(_322) >> uint(2))][_322 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_320)) >> uint(2))][int(_320) & 3], -sqrt(_306), fp_c1_1._m0[1].x), 0.0, 1.0));
            uint _344 = uint(int(uint(_292 + 6400) >> uint(2)));
            int _346 = int(_344) + 1;
            uint _348 = uint(int(uint(_292 + 6408) >> uint(2)));
            float _350 = exp2(_332 * fma(_332, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _352 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3]) != 0;
            float _354 = (_227 * (1.0 / (_221 + fma(_221, -_340, _340)))) * ((_194 * (1.0 / max(fma(_194 * _194, _336, -_336) + 1.0, fp_c1_1._m0[0].y))) * (_194 * (1.0 / max(fma(_194 * _194, _336, -_336) + 1.0, fp_c1_1._m0[0].y))));
            float _356 = _342;
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
            float _374 = (exp2(_342) * _358) * clamp(_334 + (-0.0), 0.0, 1.0);
            float _376 = fma(fp_c10_1._m0[int(uint(_346) >> uint(2))][_346 & 3] * _374, fma(_244, fp_c1_1._m0[1].y, ((_248 + fma(_248, -_350, _350)) * _354) * 0.079577468335628509521484375), _266);
            float _378 = fma(fp_c10_1._m0[int(uint(int(_348)) >> uint(2))][int(_348) & 3] * _374, fma(_250, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_350, _350)) * _354) * 0.079577468335628509521484375), _268);
            float _380 = fma(fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3] * _374, fma(_242, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_350, _350)) * _354) * 0.079577468335628509521484375), _270);
            _264 = int(uint(_264) >> uint(8));
            _278 = _372;
            _266 = _376;
            _268 = _378;
            _270 = _380;
            _282 = _380;
            _284 = _376;
            _286 = _378;
        } while (!(_372 >= 4));
        _290 = false;
        _272 = _284;
        _274 = _282;
        _276 = _286;
        if ((_264 & 255) == 30)
        {
            float _382 = _72.y;
            float _384 = 1.0 / (fma(_186, fp_c10_1._m0[565].z, fma(_382, fp_c10_1._m0[565].y, _184 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _386 = 1.0 / fp_c10_1._m0[561].y;
            float _388 = _184 + (-fp_c10_1._m0[557].x);
            float _390 = _186 + (-fp_c10_1._m0[557].z);
            float _392 = _388 * fp_c10_1._m0[558].z;
            float _394 = _390 * fp_c10_1._m0[558].x;
            float _396 = (-_184) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_386, fp_c10_1._m0[557].x);
            float _398 = (-_186) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_386, fp_c10_1._m0[557].z);
            float _400 = _396 * _396;
            float _402 = sqrt(fma(_398, _398, _400)) * (-fp_c10_1._m0[558].y);
            float _404 = inversesqrt(fma(_398, _398, fma(_402, _402, _400)));
            float _406 = _396 * _404;
            float _408 = _402 * _404;
            float _410 = _398 * _404;
            float _412 = _152 + _406;
            float _414 = _154 + _408;
            float _416 = ((-float(_394 < _392)) + float(_394 > _392)) * fp_c10_1._m0[561].y;
            float _418 = _156 + _410;
            float _420 = fma(_162, _410, fma(_160, _408, _158 * _406));
            float _422 = inversesqrt(fma(_418, _418, fma(_414, _414, _412 * _412)));
            float _424 = _412 * _422;
            float _426 = _414 * _422;
            float _428 = fma(_390, _390, _388 * _388);
            float _430 = fma(_390, fp_c10_1._m0[558].z, _388 * fp_c10_1._m0[558].x);
            bool _432 = _430 > 0.0;
            float _434 = inversesqrt(fma(_410, _410, _406 * _406));
            float _436 = _406;
            if (_432)
            {
                _436 = sqrt(_428);
            }
            float _438 = _418 * _422;
            float _440 = _436;
            if (!_432)
            {
                _440 = 1.0;
            }
            float _442 = max(fma(_156, _438, fma(_154, _426, _152 * _424)), fp_c1_1._m0[0].y);
            float _444 = max(fma(_162, _438, fma(_160, _426, _158 * _424)), fp_c1_1._m0[0].y) * max(fma(_162, _438, fma(_160, _426, _158 * _424)), fp_c1_1._m0[0].y);
            float _446 = clamp(fma(_430 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_430 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _448 = max(_420, fp_c1_1._m0[0].y);
            bool _450 = fma(_390 * inversesqrt(_428), fp_c10_1._m0[558].z, (_388 * inversesqrt(_428)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _452 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_388, fma(_416, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_390 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_416 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_388, fma(_416, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_390 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_416 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _454 = 6.9831600189208984375;
            if (!_450)
            {
                _454 = 1.0;
            }
            float _456 = exp2(_442 * fma(_442, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _458 = _454;
            if (_450)
            {
                _458 = fma(_452, -_452, fp_c1_1._m0[1].x) * fma(_452, -_452, fp_c1_1._m0[1].x);
            }
            float _460 = (_227 * (1.0 / (_221 + fma(_221, -_448, _448)))) * ((_194 * (1.0 / max(fma(_194 * _194, _444, -_444) + 1.0, fp_c1_1._m0[0].y))) * (_194 * (1.0 / max(fma(_194 * _194, _444, -_444) + 1.0, fp_c1_1._m0[0].y))));
            float _462 = (min(fma(_446, -_446, fp_c1_1._m0[1].x) * fma(_446, -_446, fp_c1_1._m0[1].x), _458) * (exp2(log2(clamp(fma(_440, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_410 * _434, -fp_c10_1._m0[558].z, (_406 * _434) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_420 + (-0.0), 0.0, 1.0);
            float _464 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_186, fp_c10_1._m0[562].z, fma(_382, fp_c10_1._m0[562].y, _184 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _384, 0.5, 0.5), (-fma((fma(_186, fp_c10_1._m0[563].z, fma(_382, fp_c10_1._m0[563].y, _184 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _384, 0.5, 0.5)) + 1.0)).z > fma((fma(_186, fp_c10_1._m0[564].z, fma(_382, fp_c10_1._m0[564].y, _184 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _384, 0.5, 0.5)) || (_430 <= 0.0));
            _272 = fma(fma(_244, fp_c1_1._m0[1].y, ((_248 + fma(_248, -_456, _456)) * _460) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _462), _464, _284);
            _274 = fma(fma(_242, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_456, _456)) * _460) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _462), _464, _282);
            _276 = fma(fma(_250, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_456, _456)) * _460) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _462), _464, _286);
        }
    }
    float _466 = _184 + (-fp_c3_1._m0[11].w);
    float _468 = _72.y;
    float _470 = _186 + (-fp_c3_1._m0[13].w);
    float _472 = fma(_256, _272, _252 * (fma(_240 * (_248 + fma(_248, -_238, _238)), fp_c1_1._m0[0].w, _244 * 0.3183098733425140380859375) * (_223 * fp_c5_1._m0[5].y)));
    float _474 = _468 + (-fp_c3_1._m0[12].w);
    float _476 = fma(_470, _470, fma(_474, _474, _466 * _466));
    float _478 = fma(_256, _274, _252 * (fma(_240 * (_246 + fma(_246, -_238, _238)), fp_c1_1._m0[0].w, _242 * 0.3183098733425140380859375) * (_223 * fp_c5_1._m0[5].x)));
    float _480 = fma(_256, _276, _252 * (fma(_240 * (_254 + fma(_254, -_238, _238)), fp_c1_1._m0[0].w, _250 * 0.3183098733425140380859375) * (_223 * fp_c5_1._m0[5].z)));
    float _482 = clamp(fma(fma(_186, fp_c5_1._m0[14].z, fma(_468, fp_c5_1._m0[14].y, _184 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _484 = exp2(log2(clamp(sqrt(_476) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_470 * inversesqrt(_476), fp_c5_1._m0[23].z, fma(_474 * inversesqrt(_476), fp_c5_1._m0[23].y, (_466 * inversesqrt(_476)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _486 = clamp(fma(_256 * _252, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _488 = fma((-_478) + fp_c5_1._m0[13].x, _482, _478);
    float _490 = fma((-_472) + fp_c5_1._m0[13].y, _482, _472);
    float _492 = fma((-_480) + fp_c5_1._m0[13].z, _482, _480);
    float _494 = clamp((-exp2((clamp(fma(sqrt(_476), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_488) + fma(fma((_484 * fp_c7_1._m0[55].x) * _486, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _494, _488);
    _75.y = fma((-_490) + fma(fma((_484 * fp_c7_1._m0[55].y) * _486, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _494, _490);
    _75.z = fma((-_492) + fma(fma((_484 * fp_c7_1._m0[55].z) * _486, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _494, _492);
    _75.w = 1.0;
}


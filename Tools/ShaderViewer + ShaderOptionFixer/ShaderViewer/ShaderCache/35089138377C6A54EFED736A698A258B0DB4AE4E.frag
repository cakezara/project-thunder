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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
layout(binding = 5) uniform sampler2D fp_tex_tcb_16;
layout(binding = 6) uniform sampler2D fp_tex_tcb_18;
layout(binding = 7) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 8) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 9) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 10) uniform sampler2D fp_tex_tcb_20;
layout(binding = 11) uniform sampler2D fp_tex_tcb_28;
layout(binding = 12) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 13) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 14) uniform sampler2D fp_tex_tcb_38;
layout(binding = 15) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _78;
layout(location = 1) in vec4 _80;
layout(location = 2) in vec4 _82;
layout(location = 3) in vec4 _84;
layout(location = 6) in vec4 _86;
layout(location = 5) in vec4 _88;
layout(location = 7) in vec4 _90;
layout(location = 4) in vec4 _92;
layout(location = 0) out vec4 _95;
uint _6[16];

void main()
{
    bool _408 = false;
    float _102 = _78.x;
    float _104 = _78.y;
    float _106 = _80.x;
    float _108 = _80.y;
    vec2 _112 = texture(fp_tex_tcb_E, vec2(_102, _104)).xy;
    float _114 = _112.x;
    float _116 = _112.y;
    vec3 _120 = texture(fp_tex_tcb_16, vec2(_102, _104)).xyz;
    vec3 _122 = texture(fp_tex_tcb_14, vec2(_106, _108)).xyz;
    float _124 = _122.x;
    float _126 = _122.y;
    float _128 = _122.z;
    float _130 = texture(fp_tex_tcb_1C, vec2(_106, _108)).x;
    float _132 = texture(fp_tex_tcb_12, vec2(_102, _104)).x;
    float _134 = texture(fp_tex_tcb_1A, vec2(_102, _104)).x;
    vec3 _136 = texture(fp_tex_tcb_A, vec2(_102, _104)).xyz;
    float _138 = _82.x;
    float _140 = _82.y;
    float _142 = _82.z;
    float _144 = _84.y;
    float _146 = _84.z;
    float _148 = _84.x;
    float _150 = _84.w;
    float _152 = inversesqrt(fma(_142, _142, fma(_140, _140, _138 * _138)));
    float _154 = _142 * _152;
    float _156 = _138 * _152;
    float _158 = _140 * _152;
    float _160 = _120.y * fp_c6_1._m0[19].y;
    float _162 = (-texture(fp_tex_tcb_20, vec2(_102, _104)).x) + 1.0;
    float _164 = max(texture(fp_tex_tcb_10, vec2(_102, _104)).x, fp_c1_1._m0[0].y);
    float _166 = sqrt(clamp((-fma(_114, _114, _116 * _116)) + 1.0, 0.0, 1.0));
    float _168 = fma(_156, _166, fma(_114, _148, _116 * (fma(_158, _146, -(_154 * _144)) * _150)));
    float _170 = fma(_158, _166, fma(_114, _144, _116 * (fma(_154, _148, -(_156 * _146)) * _150)));
    float _172 = fma(_154, _166, fma(_114, _146, _116 * (fma(_156, _144, -(_158 * _148)) * _150)));
    float _174 = 1.0 / _86.w;
    float _176 = inversesqrt(fma(_172, _172, fma(_170, _170, _168 * _168)));
    float _178 = _124 * fp_c6_1._m0[12].x;
    float _180 = _128 * fp_c6_1._m0[12].z;
    float _182 = _172 * _176;
    float _184 = _170 * _176;
    float _186 = _168 * _176;
    float _188 = _120.x * fp_c6_1._m0[19].x;
    float _190 = _120.z * fp_c6_1._m0[19].z;
    float _192 = _126 * fp_c6_1._m0[12].y;
    float _200;
    float _202;
    float _204;
    float _206;
    if (_130 < fp_c1_1._m0[0].x)
    {
        float _194 = fma(_130 + 0.00999999977648258209228515625, 5.0, -fp_c6_1._m0[55].z);
        float _196 = clamp(_194 * (-fp_c6_1._m0[55].y), 0.0, 1.0) * clamp((-clamp(_194 * 100000.0, 0.0, 1.0)) + 1.0, 0.0, 1.0);
        float _198 = _196 * fp_c6_1._m0[56].w;
        _200 = _196;
        _202 = _178 * _198;
        _204 = _192 * _198;
        _206 = _180 * _198;
    }
    float _232 = _88.x;
    float _234 = _88.y;
    float _236 = _88.z;
    float _238 = 1.0 / (_90.z * gl_FragCoord.w);
    float _240 = _186 * _184;
    float _242 = inversesqrt(fma(_236, _236, fma(_234, _234, _232 * _232)));
    float _244 = _232 * (-_242);
    float _246 = _234 * (-_242);
    float _248 = _236 * (-_242);
    float _250 = fma(_182, -_248, fma(_184, -_246, _186 * (-_244)));
    float _252 = fma(_182, _248, fma(_184, _246, _186 * _244));
    float _254 = fma(_186 * (-_252), -2.0, -_244);
    float _256 = fma(_184 * (-_252), -2.0, -_246);
    float _258 = fma(_182 * (-_252), -2.0, -_248);
    float _260 = 1.0 / max(abs(_258), max(abs(_254), abs(_256)));
    float _262 = max(_252, fp_c1_1._m0[1].w);
    float _264 = max(fma(_248, fma(_182 * _250, -2.0, -_248), fma(_246, fma(_184 * _250, -2.0, -_246), _244 * fma(_186 * _250, -2.0, -_244))), fp_c1_1._m0[1].w);
    vec3 _266 = texture(fp_tex_tcb_1E, vec2(fma(_264, fp_c6_1._m0[51].x, _78.z), _78.w)).xyz;
    vec2 _268 = texture(fp_tex_tcb_38, vec2(_262, (-_164) + (-0.0))).xy;
    float _270 = _268.x;
    float _272 = _268.y;
    vec3 _274 = texture(fp_tex_tcb_36, vec4(_254 * _260, _256 * _260, _258 * _260, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_164 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _276 = texture(fp_tex_tcb_2A, vec2(fma(_86.x * _174, 0.5, 0.5), fma(_86.y * _174, -0.5, 0.5))).xy;
    float _278 = _92.y;
    float _280 = _184 * _182;
    _6[3] = floatBitsToUint(clamp(sqrt(fma(_128, _128, fma(_126, _126, _124 * _124))), 0.0, 1.0) * clamp(_200 + (-0.0), 0.0, 1.0));
    float _282 = _182 * _182;
    float _284 = fma(_164, 0.5, 0.5);
    float _286 = _278 + (-fp_c9_1._m0[32].w);
    float _288 = _186 * _182;
    float _290 = _164 * _164;
    float _292 = (_284 * 0.5) * _284;
    float _294 = _286;
    if (_278 < fp_c9_1._m0[32].w)
    {
        _294 = _286 * (-5.0);
    }
    float _296 = _244 + (-fp_c5_1._m0[23].x);
    float _298 = _246 + (-fp_c5_1._m0[23].y);
    float _300 = _248 + (-fp_c5_1._m0[23].z);
    float _302 = _92.x;
    float _304 = _92.z;
    float _306 = _136.z * fp_c6_1._m0[86].x;
    float _308 = inversesqrt(fma(_300, _300, fma(_298, _298, _296 * _296)));
    float _310 = fma(_186, _186, -(_184 * _184));
    float _312 = clamp(texture(fp_tex_tcb_18, vec2(_102, _104)).x + (-0.0), 0.0, 1.0);
    float _314 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w) * max(0.0, ((-_184) + 1.2000000476837158203125) * (clamp(fma(_294, -(1.0 / fma(clamp((-_184) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_294, -(1.0 / fma(clamp((-_184) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].y), 0.0, 1.0)));
    float _316 = _296 * _308;
    float _318 = _298 * _308;
    float _320 = _300 * _308;
    float _322 = _136.y * fp_c6_1._m0[86].x;
    float _324 = max(fma(_248, _320, fma(_246, _318, _244 * _316)), fp_c1_1._m0[1].w);
    float _326 = _136.x * fp_c6_1._m0[86].x;
    float _328 = fma(_182, -fp_c5_1._m0[23].z, fma(_184, -fp_c5_1._m0[23].y, _186 * (-fp_c5_1._m0[23].x)));
    float _330 = max(fma(_182, _320, fma(_184, _318, _186 * _316)), fp_c1_1._m0[1].w) * max(fma(_182, _320, fma(_184, _318, _186 * _316)), fp_c1_1._m0[1].w);
    float _332 = max(_328, fp_c1_1._m0[1].w);
    float _334 = fma(_132, _306 + (-0.039999999105930328369140625), fp_c1_1._m0[1].z);
    float _336 = fma(_132, _326 + (-0.039999999105930328369140625), fp_c1_1._m0[1].z);
    int _339 = max(0, min(int(trunc((_304 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _341 = fma(_132, _322 + (-0.039999999105930328369140625), fp_c1_1._m0[1].z);
    float _343 = exp2(_324 * fma(_324, fp_c1_1._m0[2].x, -6.9831600189208984375));
    float _345 = ((1.0 / (_292 + fma(_292, -_262, _262))) * (1.0 / (_292 + fma(_292, -_332, _332)))) * ((_290 * (1.0 / max(fma(_330, _290 * _290, -_330) + 1.0, fp_c1_1._m0[1].w))) * (_290 * (1.0 / max(fma(_330, _290 * _290, -_330) + 1.0, fp_c1_1._m0[1].w))));
    uint _348 = uint(int(uint((((int(uint(_339) >> uint(16)) * 20) << 16) + (((_339 & 65535) * 20) + max(0, min(int(trunc((_302 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _350 = fp_c10_1._m0[int(uint(int(_348)) >> uint(2))][int(_348) & 3];
    float _352 = exp2(_264 * fma(_264, fp_c1_1._m0[2].x, -6.9831600189208984375));
    float _354 = fma(_132, -_326, _326);
    float _356 = fma(_132, -_322, _322);
    float _358 = (-_276.y) + 1.0;
    float _360 = fma(_132, -_306, _306);
    _6[2] = floatBitsToUint(fma((_336 + fma(_336, -_343, _343)) * _345, fp_c1_1._m0[2].y, _354 * 0.3183098733425140380859375));
    _6[1] = floatBitsToUint(fma((_341 + fma(_341, -_343, _343)) * _345, fp_c1_1._m0[2].y, _356 * 0.3183098733425140380859375));
    _6[0] = floatBitsToUint(fma((_334 + fma(_334, -_343, _343)) * _345, fp_c1_1._m0[2].y, _360 * 0.3183098733425140380859375));
    float _362 = clamp(_92.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _364 = clamp(_328 + (-0.0), 0.0, 1.0);
    float _366 = _358 * _362;
    float _368 = fma(fma(_314, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_310, fp_c5_1._m0[31].y, (fma(_182, fp_c5_1._m0[26].z, fma(_184, fp_c5_1._m0[26].y, _186 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_288, fp_c5_1._m0[29].w, fma(_282, fp_c5_1._m0[29].z, fma(_280, fp_c5_1._m0[29].y, _240 * fp_c5_1._m0[29].x)))))), fma(_341, -_356, _356), fma(_134, (_341 + fma(_341, -_352, _352)) * (_322 * (_266.y * fp_c6_1._m0[50].w)), fma(_341, _270, _272) * _274.y));
    float _370 = fma(fma(_314, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_310, fp_c5_1._m0[31].z, (fma(_182, fp_c5_1._m0[27].z, fma(_184, fp_c5_1._m0[27].y, _186 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_288, fp_c5_1._m0[30].w, fma(_282, fp_c5_1._m0[30].z, fma(_280, fp_c5_1._m0[30].y, _240 * fp_c5_1._m0[30].x)))))), fma(_334, -_360, _360), fma(_134, (_334 + fma(_334, -_352, _352)) * (_306 * (_266.z * fp_c6_1._m0[50].w)), fma(_334, _270, _272) * _274.z));
    float _372 = fma(fma(_314, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_310, fp_c5_1._m0[31].x, (fma(_182, fp_c5_1._m0[25].z, fma(_184, fp_c5_1._m0[25].y, _186 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_288, fp_c5_1._m0[28].w, fma(_282, fp_c5_1._m0[28].z, fma(_280, fp_c5_1._m0[28].y, _240 * fp_c5_1._m0[28].x)))))), fma(_336, -_354, _354), fma(_134, (_336 + fma(_336, -_352, _352)) * (_326 * (_266.x * fp_c6_1._m0[50].w)), fma(_336, _270, _272) * _274.x));
    float _374 = clamp((-fma(max((-_276.x) + 1.0, _358), _362, fma(texture(fp_tex_tcb_28, vec2((_90.x * gl_FragCoord.w) * _238, (_90.y * gl_FragCoord.w) * _238)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _376 = floatBitsToInt(_350);
    float _378 = _372;
    float _380 = _368;
    float _382 = _370;
    float _384 = _372;
    float _386 = _368;
    float _388 = _370;
    if (floatBitsToInt(_350) != (-1))
    {
        float _390 = clamp(fma(_366, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _392 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
        float _394 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _396 = 0;
        float _400;
        float _402;
        float _404;
        int _490;
        do
        {
            int _398 = _376 & 255;
            _400 = _378;
            _402 = _380;
            _404 = _382;
            _408 = uint(_398) >= 30u;
            if (_408)
            {
                break;
            }
            int _410 = _398 << 4;
            float _412 = max(_252, fp_c1_1._m0[1].w);
            uint _414 = uint(int(uint(_410 + 7360) >> uint(2)));
            int _416 = int(_414) + 1;
            uint _418 = uint(int(uint(_410 + 7368) >> uint(2)));
            float _420 = (-_302) + fp_c10_1._m0[int(uint(int(_414)) >> uint(2))][int(_414) & 3];
            float _422 = (-_278) + fp_c10_1._m0[int(uint(_416) >> uint(2))][_416 & 3];
            float _424 = (-_304) + fp_c10_1._m0[int(uint(int(_418)) >> uint(2))][int(_418) & 3];
            float _426 = fma(_424, _424, fma(_422, _422, _420 * _420));
            float _428 = _420 * inversesqrt(_426);
            float _430 = _422 * inversesqrt(_426);
            float _432 = _424 * inversesqrt(_426);
            float _434 = _244 + _428;
            float _436 = _246 + _430;
            float _438 = _248 + _432;
            float _440 = inversesqrt(fma(_438, _438, fma(_436, _436, _434 * _434)));
            float _442 = _434 * _440;
            float _444 = _436 * _440;
            float _446 = _438 * _440;
            float _448 = fma(_182, _432, fma(_184, _430, _186 * _428));
            float _450 = max(_448, fp_c1_1._m0[1].w);
            float _452 = max(fma(_248, _446, fma(_246, _444, _244 * _442)), fp_c1_1._m0[1].w);
            float _454 = max(fma(_182, _446, fma(_184, _444, _186 * _442)), fp_c1_1._m0[1].w) * max(fma(_182, _446, fma(_184, _444, _186 * _442)), fp_c1_1._m0[1].w);
            uint _456 = uint(int(uint(_410 + 8320) >> uint(2)));
            uint _458 = uint(int(uint(_410 + 6880) >> uint(2)));
            int _460 = int(_458) + 1;
            float _462 = exp2(_452 * fma(_452, fp_c1_1._m0[2].x, -6.9831600189208984375));
            bool _464 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_456)) >> uint(2))][int(_456) & 3]) != 0;
            float _466 = ((1.0 / (_292 + fma(_292, -_412, _412))) * (1.0 / (_292 + fma(_292, -_450, _450)))) * ((_290 * (1.0 / max(fma(_290 * _290, _454, -_454) + 1.0, fp_c1_1._m0[1].w))) * (_290 * (1.0 / max(fma(_290 * _290, _454, -_454) + 1.0, fp_c1_1._m0[1].w))));
            float _468 = _466;
            if (!_464)
            {
                _468 = 1.0;
            }
            float _470 = _468;
            if (_464)
            {
                uint _472 = uint(int(uint(_410 + 7840) >> uint(2)));
                int _474 = int(_472) + 1;
                uint _476 = uint(int(uint(_410 + 7848) >> uint(2)));
                uint _478 = uint(int(uint(_410 + 6888) >> uint(2)));
                float _480 = fp_c10_1._m0[int(uint(int(_478)) >> uint(2))][int(_478) & 3];
                int _482 = int(_478) + 1;
                _470 = exp2(log2(clamp((fma(_432, -fp_c10_1._m0[int(uint(int(_476)) >> uint(2))][int(_476) & 3], fma(_430, -fp_c10_1._m0[int(uint(_474) >> uint(2))][_474 & 3], _428 * (-fp_c10_1._m0[int(uint(int(_472)) >> uint(2))][int(_472) & 3]))) + (-_480)) * (1.0 / ((-_480) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[int(uint(_482) >> uint(2))][_482 & 3]);
            }
            float _484 = exp2(fp_c10_1._m0[int(uint(_460) >> uint(2))][_460 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_458)) >> uint(2))][int(_458) & 3], -sqrt(_426), fp_c1_1._m0[1].y), 0.0, 1.0))) * _470;
            uint _486 = uint(int(uint(_410 + 6400) >> uint(2)));
            int _488 = int(_486) + 1;
            _490 = _396 + 1;
            float _492 = _484 * clamp(_448 + (-0.0), 0.0, 1.0);
            uint _494 = uint(int(uint(_410 + 6408) >> uint(2)));
            int _496 = int(_494) + 1;
            float _498 = _484 * fp_c10_1._m0[int(uint(_496) >> uint(2))][_496 & 3];
            float _500 = exp2(log2(clamp(fma(_252, -clamp((-_448) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (_162 * (fma(_394, fp_c1_1._m0[3].x, exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_248, -_432, fma(_246, -_430, _244 * (-_428))), fp_c1_1._m0[2].w) + (-0.0), 0.0, 1.0))) * _394) + 0.20000000298023223876953125));
            float _502 = _378 + fma((_492 * fp_c10_1._m0[int(uint(int(_486)) >> uint(2))][int(_486) & 3]) * fma(_354, fp_c1_1._m0[2].z, ((_336 + fma(_336, -_462, _462)) * _466) * 0.079577468335628509521484375), _392, _390 * ((_500 * (_188 * _498)) * fp_c6_1._m0[18].x));
            float _504 = _380 + fma((_492 * fp_c10_1._m0[int(uint(_488) >> uint(2))][_488 & 3]) * fma(_356, fp_c1_1._m0[2].z, ((_341 + fma(_341, -_462, _462)) * _466) * 0.079577468335628509521484375), _392, _390 * ((_500 * (_160 * _498)) * fp_c6_1._m0[18].x));
            float _506 = _382 + fma((_492 * fp_c10_1._m0[int(uint(int(_494)) >> uint(2))][int(_494) & 3]) * fma(_360, fp_c1_1._m0[2].z, ((_334 + fma(_334, -_462, _462)) * _466) * 0.079577468335628509521484375), _392, _390 * ((_500 * (_190 * _498)) * fp_c6_1._m0[18].x));
            _376 = int(uint(_376) >> uint(8));
            _396 = _490;
            _378 = _502;
            _380 = _504;
            _382 = _506;
            _400 = _502;
            _402 = _504;
            _404 = _506;
        } while (!(_490 >= 4));
        _408 = false;
        _384 = _400;
        _386 = _402;
        _388 = _404;
        if ((_376 & 255) == 30)
        {
            float _508 = 1.0 / fp_c10_1._m0[561].y;
            float _510 = (-_302) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_508, fp_c10_1._m0[557].x);
            float _512 = (-_304) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_508, fp_c10_1._m0[557].z);
            float _514 = _510 * _510;
            float _516 = sqrt(fma(_512, _512, _514)) * (-fp_c10_1._m0[558].y);
            float _518 = inversesqrt(fma(_512, _512, fma(_516, _516, _514)));
            float _520 = _510 * _518;
            float _522 = _516 * _518;
            float _524 = _512 * _518;
            float _526 = _244 + _520;
            float _528 = _246 + _522;
            float _530 = _248 + _524;
            float _532 = _304 + (-fp_c10_1._m0[557].z);
            float _534 = fma(_182, _524, fma(_184, _522, _186 * _520));
            float _536 = _532 * fp_c10_1._m0[558].x;
            float _538 = max(_252, fp_c1_1._m0[1].w);
            float _540 = inversesqrt(fma(_530, _530, fma(_528, _528, _526 * _526)));
            float _542 = max(_534, fp_c1_1._m0[1].w);
            float _544 = _526 * _540;
            float _546 = _528 * _540;
            float _548 = _530 * _540;
            float _550 = _302 + (-fp_c10_1._m0[557].x);
            float _552 = _550 * fp_c10_1._m0[558].z;
            float _554 = ((-float(_536 < _552)) + float(_536 > _552)) * fp_c10_1._m0[561].y;
            float _556 = fma(_532, _532, _550 * _550);
            float _558 = fma(_532, fp_c10_1._m0[558].z, _550 * fp_c10_1._m0[558].x);
            float _560 = 1.0 / (fma(_304, fp_c10_1._m0[565].z, fma(_278, fp_c10_1._m0[565].y, _302 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            bool _562 = _558 > 0.0;
            float _564 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_550, fma(_554, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_532 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_554 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_550, fma(_554, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_532 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_554 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _566 = _556;
            if (_562)
            {
                _566 = sqrt(_556);
            }
            float _568 = _566;
            if (!_562)
            {
                _568 = 1.0;
            }
            float _570 = max(fma(_248, _548, fma(_246, _546, _244 * _544)), fp_c1_1._m0[1].w);
            float _572 = max(fma(_182, _548, fma(_184, _546, _186 * _544)), fp_c1_1._m0[1].w) * max(fma(_182, _548, fma(_184, _546, _186 * _544)), fp_c1_1._m0[1].w);
            float _574 = inversesqrt(fma(_524, _524, _520 * _520));
            float _576 = fma(_564, -_564, fp_c1_1._m0[1].y) * fma(_564, -_564, fp_c1_1._m0[1].y);
            if (!(fma(_532 * inversesqrt(_556), fp_c10_1._m0[558].z, (_550 * inversesqrt(_556)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z))
            {
                _576 = 1.0;
            }
            float _578 = clamp(fma(_558 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_558 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _580 = exp2(_570 * fma(_570, fp_c1_1._m0[2].x, -6.9831600189208984375));
            float _582 = min(fma(_578, -_578, fp_c1_1._m0[1].y) * fma(_578, -_578, fp_c1_1._m0[1].y), _576) * (exp2(log2(clamp(fma(_568, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_524 * _574, -fp_c10_1._m0[558].z, (_520 * _574) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w));
            float _584 = (_162 * (fma(_394, fp_c1_1._m0[3].x, _394 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_248, -_524, fma(_246, -_522, _244 * (-_520))), fp_c1_1._m0[2].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125)) * exp2(log2(clamp(fma(_252, -clamp((-_534) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z);
            float _586 = _582 * clamp(_534 + (-0.0), 0.0, 1.0);
            float _588 = ((1.0 / (_292 + fma(_292, -_538, _538))) * (1.0 / (_292 + fma(_292, -_542, _542)))) * ((_290 * (1.0 / max(fma(_290 * _290, _572, -_572) + 1.0, fp_c1_1._m0[1].w))) * (_290 * (1.0 / max(fma(_290 * _290, _572, -_572) + 1.0, fp_c1_1._m0[1].w))));
            float _590 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_304, fp_c10_1._m0[562].z, fma(_278, fp_c10_1._m0[562].y, _302 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _560, 0.5, 0.5), (-fma((fma(_304, fp_c10_1._m0[563].z, fma(_278, fp_c10_1._m0[563].y, _302 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _560, 0.5, 0.5)) + 1.0)).z > fma((fma(_304, fp_c10_1._m0[564].z, fma(_278, fp_c10_1._m0[564].y, _302 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _560, 0.5, 0.5)) || (_558 <= 0.0));
            _384 = fma(fma(_392, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _586) * fma(_354, fp_c1_1._m0[2].z, (_588 * (_336 + fma(_336, -_580, _580))) * 0.079577468335628509521484375), _390 * ((_584 * (_188 * _582)) * fp_c6_1._m0[18].x)), _590, _400);
            _386 = fma(fma(_392, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _586) * fma(_356, fp_c1_1._m0[2].z, (_588 * (_341 + fma(_341, -_580, _580))) * 0.079577468335628509521484375), _390 * ((_584 * (_160 * _582)) * fp_c6_1._m0[18].x)), _590, _402);
            _388 = fma(fma(_392, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _586) * fma(_360, fp_c1_1._m0[2].z, (_588 * (_334 + fma(_334, -_580, _580))) * 0.079577468335628509521484375), _390 * ((_584 * (_190 * _582)) * fp_c6_1._m0[18].x)), _590, _404);
        }
    }
    float _592 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
    float _594 = exp2(log2(clamp(fma(_252, -clamp((-_328) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (_162 * (fma(_592, fp_c1_1._m0[3].x, _592 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_248, fp_c5_1._m0[23].z, fma(_246, fp_c5_1._m0[23].y, _244 * fp_c5_1._m0[23].x)), fp_c1_1._m0[2].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125));
    float _596 = _302 + (-fp_c3_1._m0[11].w);
    float _598 = _278 + (-fp_c3_1._m0[12].w);
    float _600 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
    float _602 = clamp(fma(_366, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _604 = _304 + (-fp_c3_1._m0[13].w);
    float _606 = fma(_604, _604, fma(_598, _598, _596 * _596));
    float _608 = fma(_124, _202 + fp_c6_1._m0[13].x, fma(_312, _384, fma(_374, _600 * ((_364 * fp_c5_1._m0[5].x) * uintBitsToFloat(_6[2])), _602 * ((_594 * (_188 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[18].x))));
    float _610 = fma(_126, _204 + fp_c6_1._m0[13].x, fma(_312, _386, fma(_374, _600 * ((_364 * fp_c5_1._m0[5].y) * uintBitsToFloat(_6[1])), _602 * ((_594 * (_160 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[18].x))));
    float _612 = fma(_128, _206 + fp_c6_1._m0[13].x, fma(_312, _388, fma(_374, _600 * ((_364 * fp_c5_1._m0[5].z) * uintBitsToFloat(_6[0])), _602 * ((_594 * (_190 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[18].x))));
    bool _614 = 1.0 < fp_c6_1._m0[11].x;
    float _616 = 1.0 + (-fp_c7_1._m0[54].w);
    float _618 = exp2(fma(fma(_604 * inversesqrt(_606), fp_c5_1._m0[23].z, fma(_598 * inversesqrt(_606), fp_c5_1._m0[23].y, (_596 * inversesqrt(_606)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_606) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _620 = clamp(fma(_312 * _374, fp_c7_1._m0[54].w, _616), 0.0, 1.0);
    float _622 = clamp(fma(fma(_304, fp_c5_1._m0[14].z, fma(_278, fp_c5_1._m0[14].y, _302 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _624 = clamp((-exp2((clamp(fma(sqrt(_606), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    float _626 = fma(uintBitsToFloat(_6[3]), (1.0 / max(fma(_612, fp_c1_1._m0[3].z, fma(_610, fp_c1_1._m0[3].y, _608 * 0.298911988735198974609375)), fp_c1_1._m0[1].w)) * fp_c6_1._m0[11].x, -uintBitsToFloat(_6[3]));
    float _628 = fma(_608, _626, _608);
    float _630 = fma(_610, _626, _610);
    float _632 = fma(_612, _626, _612);
    float _634 = _616;
    float _636 = _626;
    float _638 = _628;
    float _640 = _630;
    float _642 = _632;
    if (!_614)
    {
        _634 = (-_608) + _628;
    }
    float _644 = _634;
    if (!_614)
    {
        _636 = (-_610) + _630;
    }
    if (!_614)
    {
        _638 = fma(_634, fp_c6_1._m0[11].x, _608);
    }
    if (!_614)
    {
        _644 = (-_612) + _632;
    }
    if (!_614)
    {
        _640 = fma(_636, fp_c6_1._m0[11].x, _610);
    }
    if (!_614)
    {
        _642 = fma(_644, fp_c6_1._m0[11].x, _612);
    }
    float _646 = fma((-_638) + fp_c5_1._m0[13].x, _622, _638);
    float _648 = fma((-_640) + fp_c5_1._m0[13].y, _622, _640);
    float _650 = fma((-_642) + fp_c5_1._m0[13].z, _622, _642);
    _95.x = fma(fma(fma((_618 * fp_c7_1._m0[55].x) * _620, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_646), _624, _646);
    _95.y = fma(fma(fma((_618 * fp_c7_1._m0[55].y) * _620, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_648), _624, _648);
    _95.z = fma(fma(fma((_618 * fp_c7_1._m0[55].z) * _620, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_650), _624, _650);
    _95.w = 1.0;
}


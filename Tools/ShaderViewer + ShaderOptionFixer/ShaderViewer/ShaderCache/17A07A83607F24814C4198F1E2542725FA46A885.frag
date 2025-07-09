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
    bool _404 = false;
    float _102 = _78.x;
    float _104 = _78.y;
    vec2 _108 = texture(fp_tex_tcb_E, vec2(_102, _104)).xy;
    float _110 = _108.x;
    float _112 = _108.y;
    vec3 _116 = texture(fp_tex_tcb_16, vec2(_102, _104)).xyz;
    vec3 _118 = texture(fp_tex_tcb_14, vec2(_102, _104)).xyz;
    float _120 = _118.x;
    float _122 = _118.y;
    float _124 = _118.z;
    float _126 = texture(fp_tex_tcb_1C, vec2(_80.x, _80.y)).x;
    float _128 = texture(fp_tex_tcb_12, vec2(_102, _104)).x;
    float _130 = texture(fp_tex_tcb_1A, vec2(_102, _104)).x;
    vec3 _132 = texture(fp_tex_tcb_A, vec2(_102, _104)).xyz;
    float _134 = _132.x;
    float _136 = _132.y;
    float _138 = _132.z;
    float _140 = _82.x;
    float _142 = _82.y;
    float _144 = _82.z;
    float _146 = _84.z;
    float _148 = _84.x;
    float _150 = _84.w;
    float _152 = _84.y;
    float _154 = inversesqrt(fma(_144, _144, fma(_142, _142, _140 * _140)));
    float _156 = _140 * _154;
    float _158 = _144 * _154;
    float _160 = _142 * _154;
    float _162 = (-texture(fp_tex_tcb_20, vec2(_102, _104)).x) + 1.0;
    float _164 = max(texture(fp_tex_tcb_10, vec2(_102, _104)).x, fp_c1_1._m0[0].y);
    float _166 = sqrt(clamp((-fma(_110, _110, _112 * _112)) + 1.0, 0.0, 1.0));
    float _168 = fma(_156, _166, fma(_110, _148, _112 * (fma(_160, _146, -(_158 * _152)) * _150)));
    float _170 = fma(_158, _166, fma(_110, _146, _112 * (fma(_156, _152, -(_160 * _148)) * _150)));
    float _172 = fma(_160, _166, fma(_110, _152, _112 * (fma(_158, _148, -(_156 * _146)) * _150)));
    float _174 = 1.0 / _86.w;
    float _176 = (_116.x * fp_c6_1._m0[19].x) * fp_c6_1._m0[93].x;
    float _178 = inversesqrt(fma(_170, _170, fma(_172, _172, _168 * _168)));
    float _180 = _124 * fp_c6_1._m0[12].z;
    float _182 = _120 * fp_c6_1._m0[12].x;
    float _184 = _172 * _178;
    float _186 = _168 * _178;
    float _188 = _170 * _178;
    float _190 = _122 * fp_c6_1._m0[12].y;
    float _192 = (_116.y * fp_c6_1._m0[19].y) * fp_c6_1._m0[93].y;
    float _194 = (_116.z * fp_c6_1._m0[19].z) * fp_c6_1._m0[93].z;
    float _202;
    float _204;
    float _206;
    float _208;
    if (_126 < fp_c1_1._m0[0].x)
    {
        float _196 = fma(_126 + 0.00999999977648258209228515625, 5.0, -fp_c6_1._m0[55].z);
        float _198 = clamp(_196 * (-fp_c6_1._m0[55].y), 0.0, 1.0) * clamp((-clamp(_196 * 100000.0, 0.0, 1.0)) + 1.0, 0.0, 1.0);
        float _200 = _198 * fp_c6_1._m0[56].w;
        _202 = _198;
        _204 = _182 * _200;
        _206 = _190 * _200;
        _208 = _180 * _200;
    }
    float _234 = _88.x;
    float _236 = clamp(texture(fp_tex_tcb_18, vec2(_102, _104)).x + (-0.0), 0.0, 1.0);
    float _238 = _88.y;
    float _240 = _88.z;
    float _242 = 1.0 / (_90.z * gl_FragCoord.w);
    float _244 = inversesqrt(fma(_240, _240, fma(_238, _238, _234 * _234)));
    float _246 = _234 * (-_244);
    float _248 = _238 * (-_244);
    float _250 = _240 * (-_244);
    float _252 = fma(_188, -_250, fma(_184, -_248, _186 * (-_246)));
    float _254 = fma(_188, _250, fma(_184, _248, _186 * _246));
    float _256 = fma(_184 * (-_254), -2.0, -_248);
    float _258 = fma(_186 * (-_254), -2.0, -_246);
    float _260 = fma(_188 * (-_254), -2.0, -_250);
    float _262 = 1.0 / max(abs(_260), max(abs(_258), abs(_256)));
    float _264 = max(fma(_250, fma(_188 * _252, -2.0, -_250), fma(_248, fma(_184 * _252, -2.0, -_248), _246 * fma(_186 * _252, -2.0, -_246))), fp_c1_1._m0[1].w);
    vec3 _266 = texture(fp_tex_tcb_1E, vec2(fma(_264, fp_c6_1._m0[51].x, _78.z), _78.w)).xyz;
    float _268 = max(_254, fp_c1_1._m0[1].w);
    vec2 _270 = texture(fp_tex_tcb_38, vec2(_268, (-_164) + (-0.0))).xy;
    float _272 = _270.x;
    float _274 = _270.y;
    vec3 _276 = texture(fp_tex_tcb_36, vec4(_258 * _262, _256 * _262, _260 * _262, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_164 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _278 = texture(fp_tex_tcb_2A, vec2(fma(_86.x * _174, 0.5, 0.5), fma(_86.y * _174, -0.5, 0.5))).xy;
    float _280 = _92.y;
    float _282 = _186 * _184;
    float _284 = _184 * _188;
    float _286 = _246 + (-fp_c5_1._m0[23].x);
    float _288 = _250 + (-fp_c5_1._m0[23].z);
    _6[2] = floatBitsToUint(clamp(sqrt(fma(_124, _124, fma(_122, _122, _120 * _120))), 0.0, 1.0) * clamp(_202 + (-0.0), 0.0, 1.0));
    float _290 = _188 * _188;
    float _292 = _280 + (-fp_c9_1._m0[32].w);
    float _294 = _248 + (-fp_c5_1._m0[23].y);
    float _296 = _186 * _188;
    float _298 = _292;
    if (_280 < fp_c9_1._m0[32].w)
    {
        _298 = _292 * (-5.0);
    }
    float _300 = inversesqrt(fma(_288, _288, fma(_294, _294, _286 * _286)));
    float _302 = _92.x;
    float _304 = _92.z;
    float _306 = _286 * _300;
    float _308 = _294 * _300;
    float _310 = _288 * _300;
    float _312 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w) * max(0.0, ((-_184) + 1.2000000476837158203125) * (clamp(fma(_298, -(1.0 / fma(clamp((-_184) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_298, -(1.0 / fma(clamp((-_184) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].y), 0.0, 1.0)));
    float _314 = fma(_164, 0.5, 0.5);
    float _316 = _164 * _164;
    float _318 = (_314 * 0.5) * _314;
    float _320 = max(fma(_250, _310, fma(_248, _308, _246 * _306)), fp_c1_1._m0[1].w);
    float _322 = fma(_188, -fp_c5_1._m0[23].z, fma(_184, -fp_c5_1._m0[23].y, _186 * (-fp_c5_1._m0[23].x)));
    float _324 = max(fma(_188, _310, fma(_184, _308, _186 * _306)), fp_c1_1._m0[1].w) * max(fma(_188, _310, fma(_184, _308, _186 * _306)), fp_c1_1._m0[1].w);
    float _326 = max(_322, fp_c1_1._m0[1].w);
    float _328 = fma(_186, _186, -(_184 * _184));
    int _331 = max(0, min(int(trunc((_304 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _333 = exp2(_320 * fma(_320, fp_c1_1._m0[2].x, -6.9831600189208984375));
    float _335 = fma(_128, _136 + (-0.039999999105930328369140625), fp_c1_1._m0[1].z);
    float _337 = fma(_128, _134 + (-0.039999999105930328369140625), fp_c1_1._m0[1].z);
    float _339 = fma(_128, _138 + (-0.039999999105930328369140625), fp_c1_1._m0[1].z);
    float _341 = ((1.0 / (_318 + fma(_318, -_268, _268))) * (1.0 / (_318 + fma(_318, -_326, _326)))) * ((_316 * (1.0 / max(fma(_324, _316 * _316, -_324) + 1.0, fp_c1_1._m0[1].w))) * (_316 * (1.0 / max(fma(_324, _316 * _316, -_324) + 1.0, fp_c1_1._m0[1].w))));
    float _343 = exp2(_264 * fma(_264, fp_c1_1._m0[2].x, -6.9831600189208984375));
    uint _346 = uint(int(uint((((int(uint(_331) >> uint(16)) * 20) << 16) + (((_331 & 65535) * 20) + max(0, min(int(trunc((_302 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _348 = fp_c10_1._m0[int(uint(int(_346)) >> uint(2))][int(_346) & 3];
    float _350 = fma(_134, -_128, _134);
    float _352 = fma(_136, -_128, _136);
    float _354 = (-_278.y) + 1.0;
    float _356 = fma(_138, -_128, _138);
    _6[0] = floatBitsToUint(fma((_335 + fma(_335, -_333, _333)) * _341, fp_c1_1._m0[2].y, _352 * 0.3183098733425140380859375));
    _6[1] = floatBitsToUint(fma((_337 + fma(_337, -_333, _333)) * _341, fp_c1_1._m0[2].y, _350 * 0.3183098733425140380859375));
    float _358 = clamp(_92.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _360 = clamp(_322 + (-0.0), 0.0, 1.0);
    float _362 = _354 * _358;
    float _364 = fma(fma(_312, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_328, fp_c5_1._m0[31].x, (fma(_188, fp_c5_1._m0[25].z, fma(_184, fp_c5_1._m0[25].y, _186 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_296, fp_c5_1._m0[28].w, fma(_290, fp_c5_1._m0[28].z, fma(_284, fp_c5_1._m0[28].y, _282 * fp_c5_1._m0[28].x)))))), fma(_337, -_350, _350), fma(_130, (_337 + fma(_337, -_343, _343)) * (_134 * (_266.x * fp_c6_1._m0[50].w)), fma(_337, _272, _274) * _276.x));
    float _366 = fma(fma(_312, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_328, fp_c5_1._m0[31].y, (fma(_188, fp_c5_1._m0[26].z, fma(_184, fp_c5_1._m0[26].y, _186 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_296, fp_c5_1._m0[29].w, fma(_290, fp_c5_1._m0[29].z, fma(_284, fp_c5_1._m0[29].y, _282 * fp_c5_1._m0[29].x)))))), fma(_335, -_352, _352), fma(_130, (_335 + fma(_335, -_343, _343)) * (_136 * (_266.y * fp_c6_1._m0[50].w)), fma(_335, _272, _274) * _276.y));
    float _368 = fma(fma(_312, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_328, fp_c5_1._m0[31].z, (fma(_188, fp_c5_1._m0[27].z, fma(_184, fp_c5_1._m0[27].y, _186 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_296, fp_c5_1._m0[30].w, fma(_290, fp_c5_1._m0[30].z, fma(_284, fp_c5_1._m0[30].y, _282 * fp_c5_1._m0[30].x)))))), fma(_339, -_356, _356), fma(_130, (_339 + fma(_339, -_343, _343)) * (_138 * (_266.z * fp_c6_1._m0[50].w)), fma(_339, _272, _274) * _276.z));
    float _370 = clamp((-fma(max((-_278.x) + 1.0, _354), _358, fma(texture(fp_tex_tcb_28, vec2((_90.x * gl_FragCoord.w) * _242, (_90.y * gl_FragCoord.w) * _242)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _372 = floatBitsToInt(_348);
    float _374 = _364;
    float _376 = _366;
    float _378 = _368;
    float _380 = _364;
    float _382 = _366;
    float _384 = _368;
    if (floatBitsToInt(_348) != (-1))
    {
        float _386 = clamp(fma(_362, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _388 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
        float _390 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _392 = 0;
        float _396;
        float _398;
        float _400;
        int _486;
        do
        {
            int _394 = _372 & 255;
            _396 = _374;
            _398 = _376;
            _400 = _378;
            _404 = uint(_394) >= 30u;
            if (_404)
            {
                break;
            }
            int _406 = _394 << 4;
            float _408 = max(_254, fp_c1_1._m0[1].w);
            uint _410 = uint(int(uint(_406 + 7360) >> uint(2)));
            int _412 = int(_410) + 1;
            uint _414 = uint(int(uint(_406 + 7368) >> uint(2)));
            float _416 = (-_302) + fp_c10_1._m0[int(uint(int(_410)) >> uint(2))][int(_410) & 3];
            float _418 = (-_304) + fp_c10_1._m0[int(uint(int(_414)) >> uint(2))][int(_414) & 3];
            float _420 = (-_92.y) + fp_c10_1._m0[int(uint(_412) >> uint(2))][_412 & 3];
            float _422 = fma(_418, _418, fma(_420, _420, _416 * _416));
            float _424 = _416 * inversesqrt(_422);
            float _426 = _420 * inversesqrt(_422);
            float _428 = _418 * inversesqrt(_422);
            float _430 = _246 + _424;
            float _432 = _248 + _426;
            float _434 = _250 + _428;
            float _436 = inversesqrt(fma(_434, _434, fma(_432, _432, _430 * _430)));
            float _438 = _430 * _436;
            float _440 = _432 * _436;
            float _442 = _434 * _436;
            float _444 = fma(_188, _428, fma(_184, _426, _186 * _424));
            float _446 = max(_444, fp_c1_1._m0[1].w);
            float _448 = max(fma(_250, _442, fma(_248, _440, _246 * _438)), fp_c1_1._m0[1].w);
            float _450 = max(fma(_188, _442, fma(_184, _440, _186 * _438)), fp_c1_1._m0[1].w) * max(fma(_188, _442, fma(_184, _440, _186 * _438)), fp_c1_1._m0[1].w);
            uint _452 = uint(int(uint(_406 + 8320) >> uint(2)));
            uint _454 = uint(int(uint(_406 + 6880) >> uint(2)));
            int _456 = int(_454) + 1;
            float _458 = exp2(_448 * fma(_448, fp_c1_1._m0[2].x, -6.9831600189208984375));
            bool _460 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_452)) >> uint(2))][int(_452) & 3]) != 0;
            float _462 = ((1.0 / (_318 + fma(_318, -_408, _408))) * (1.0 / (_318 + fma(_318, -_446, _446)))) * ((_316 * (1.0 / max(fma(_316 * _316, _450, -_450) + 1.0, fp_c1_1._m0[1].w))) * (_316 * (1.0 / max(fma(_316 * _316, _450, -_450) + 1.0, fp_c1_1._m0[1].w))));
            float _464 = _462;
            if (!_460)
            {
                _464 = 1.0;
            }
            float _466 = _464;
            if (_460)
            {
                uint _468 = uint(int(uint(_406 + 7840) >> uint(2)));
                int _470 = int(_468) + 1;
                uint _472 = uint(int(uint(_406 + 7848) >> uint(2)));
                uint _474 = uint(int(uint(_406 + 6888) >> uint(2)));
                float _476 = fp_c10_1._m0[int(uint(int(_474)) >> uint(2))][int(_474) & 3];
                int _478 = int(_474) + 1;
                _466 = exp2(log2(clamp((fma(_428, -fp_c10_1._m0[int(uint(int(_472)) >> uint(2))][int(_472) & 3], fma(_426, -fp_c10_1._m0[int(uint(_470) >> uint(2))][_470 & 3], _424 * (-fp_c10_1._m0[int(uint(int(_468)) >> uint(2))][int(_468) & 3]))) + (-_476)) * (1.0 / ((-_476) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[int(uint(_478) >> uint(2))][_478 & 3]);
            }
            float _480 = exp2(fp_c10_1._m0[int(uint(_456) >> uint(2))][_456 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_454)) >> uint(2))][int(_454) & 3], -sqrt(_422), fp_c1_1._m0[1].y), 0.0, 1.0))) * _466;
            uint _482 = uint(int(uint(_406 + 6400) >> uint(2)));
            int _484 = int(_482) + 1;
            _486 = _392 + 1;
            float _488 = _480 * clamp(_444 + (-0.0), 0.0, 1.0);
            uint _490 = uint(int(uint(_406 + 6408) >> uint(2)));
            int _492 = int(_490) + 1;
            float _494 = _480 * fp_c10_1._m0[int(uint(_492) >> uint(2))][_492 & 3];
            float _496 = exp2(log2(clamp(fma(_254, -clamp((-_444) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (_162 * (fma(_390, fp_c1_1._m0[3].x, exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_250, -_428, fma(_248, -_426, _246 * (-_424))), fp_c1_1._m0[2].w) + (-0.0), 0.0, 1.0))) * _390) + 0.20000000298023223876953125));
            float _498 = fma((_488 * fp_c10_1._m0[int(uint(int(_482)) >> uint(2))][int(_482) & 3]) * fma(_350, fp_c1_1._m0[2].z, ((_337 + fma(_337, -_458, _458)) * _462) * 0.079577468335628509521484375), _388, _386 * ((_496 * (_176 * _494)) * fp_c6_1._m0[18].x)) + _374;
            float _500 = fma((_488 * fp_c10_1._m0[int(uint(_484) >> uint(2))][_484 & 3]) * fma(_352, fp_c1_1._m0[2].z, ((_335 + fma(_335, -_458, _458)) * _462) * 0.079577468335628509521484375), _388, _386 * ((_496 * (_192 * _494)) * fp_c6_1._m0[18].x)) + _376;
            float _502 = fma((_488 * fp_c10_1._m0[int(uint(int(_490)) >> uint(2))][int(_490) & 3]) * fma(_356, fp_c1_1._m0[2].z, ((_339 + fma(_339, -_458, _458)) * _462) * 0.079577468335628509521484375), _388, _386 * ((_496 * (_194 * _494)) * fp_c6_1._m0[18].x)) + _378;
            _372 = int(uint(_372) >> uint(8));
            _392 = _486;
            _374 = _498;
            _376 = _500;
            _378 = _502;
            _396 = _498;
            _398 = _500;
            _400 = _502;
        } while (!(_486 >= 4));
        _404 = false;
        _380 = _396;
        _382 = _398;
        _384 = _400;
        if ((_372 & 255) == 30)
        {
            float _504 = 1.0 / fp_c10_1._m0[561].y;
            float _506 = (-_302) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_504, fp_c10_1._m0[557].x);
            float _508 = (-_304) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_504, fp_c10_1._m0[557].z);
            float _510 = _506 * _506;
            float _512 = sqrt(fma(_508, _508, _510)) * (-fp_c10_1._m0[558].y);
            float _514 = inversesqrt(fma(_508, _508, fma(_512, _512, _510)));
            float _516 = _506 * _514;
            float _518 = _512 * _514;
            float _520 = _508 * _514;
            float _522 = _246 + _516;
            float _524 = _248 + _518;
            float _526 = _250 + _520;
            float _528 = inversesqrt(fma(_526, _526, fma(_524, _524, _522 * _522)));
            float _530 = max(_254, fp_c1_1._m0[1].w);
            float _532 = fma(_188, _520, fma(_184, _518, _186 * _516));
            float _534 = max(_532, fp_c1_1._m0[1].w);
            float _536 = _522 * _528;
            float _538 = _524 * _528;
            float _540 = _526 * _528;
            float _542 = _302 + (-fp_c10_1._m0[557].x);
            float _544 = _304 + (-fp_c10_1._m0[557].z);
            float _546 = _542 * fp_c10_1._m0[558].z;
            float _548 = _544 * fp_c10_1._m0[558].x;
            float _550 = ((-float(_548 < _546)) + float(_548 > _546)) * fp_c10_1._m0[561].y;
            float _552 = fma(_544, _544, _542 * _542);
            float _554 = fma(_544, fp_c10_1._m0[558].z, _542 * fp_c10_1._m0[558].x);
            float _556 = _92.y;
            float _558 = 1.0 / (fma(_304, fp_c10_1._m0[565].z, fma(_556, fp_c10_1._m0[565].y, _302 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            bool _560 = _554 > 0.0;
            float _562 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_542, fma(_550, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_544 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_550 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_542, fma(_550, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_544 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_550 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _564 = _552;
            if (_560)
            {
                _564 = sqrt(_552);
            }
            float _566 = _564;
            if (!_560)
            {
                _566 = 1.0;
            }
            float _568 = max(fma(_188, _540, fma(_184, _538, _186 * _536)), fp_c1_1._m0[1].w) * max(fma(_188, _540, fma(_184, _538, _186 * _536)), fp_c1_1._m0[1].w);
            float _570 = max(fma(_250, _540, fma(_248, _538, _246 * _536)), fp_c1_1._m0[1].w);
            float _572 = inversesqrt(fma(_520, _520, _516 * _516));
            float _574 = fma(_562, -_562, fp_c1_1._m0[1].y) * fma(_562, -_562, fp_c1_1._m0[1].y);
            if (!(fma(_544 * inversesqrt(_552), fp_c10_1._m0[558].z, (_542 * inversesqrt(_552)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z))
            {
                _574 = 1.0;
            }
            float _576 = clamp(fma(_554 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_554 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _578 = exp2(_570 * fma(_570, fp_c1_1._m0[2].x, -6.9831600189208984375));
            float _580 = min(fma(_576, -_576, fp_c1_1._m0[1].y) * fma(_576, -_576, fp_c1_1._m0[1].y), _574) * (exp2(log2(clamp(fma(_566, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_520 * _572, -fp_c10_1._m0[558].z, (_516 * _572) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w));
            float _582 = (_162 * (fma(_390, fp_c1_1._m0[3].x, _390 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_250, -_520, fma(_248, -_518, _246 * (-_516))), fp_c1_1._m0[2].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125)) * exp2(log2(clamp(fma(_254, -clamp((-_532) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z);
            float _584 = _580 * clamp(_532 + (-0.0), 0.0, 1.0);
            float _586 = ((1.0 / (_318 + fma(_318, -_530, _530))) * (1.0 / (_318 + fma(_318, -_534, _534)))) * ((_316 * (1.0 / max(fma(_316 * _316, _568, -_568) + 1.0, fp_c1_1._m0[1].w))) * (_316 * (1.0 / max(fma(_316 * _316, _568, -_568) + 1.0, fp_c1_1._m0[1].w))));
            float _588 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_304, fp_c10_1._m0[562].z, fma(_556, fp_c10_1._m0[562].y, _302 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _558, 0.5, 0.5), (-fma((fma(_304, fp_c10_1._m0[563].z, fma(_556, fp_c10_1._m0[563].y, _302 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _558, 0.5, 0.5)) + 1.0)).z > fma((fma(_304, fp_c10_1._m0[564].z, fma(_92.y, fp_c10_1._m0[564].y, _302 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _558, 0.5, 0.5)) || (_554 <= 0.0));
            _380 = fma(fma(_388, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _584) * fma(_350, fp_c1_1._m0[2].z, (_586 * (_337 + fma(_337, -_578, _578))) * 0.079577468335628509521484375), _386 * ((_582 * (_176 * _580)) * fp_c6_1._m0[18].x)), _588, _396);
            _382 = fma(fma(_388, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _584) * fma(_352, fp_c1_1._m0[2].z, (_586 * (_335 + fma(_335, -_578, _578))) * 0.079577468335628509521484375), _386 * ((_582 * (_192 * _580)) * fp_c6_1._m0[18].x)), _588, _398);
            _384 = fma(fma(_388, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _584) * fma(_356, fp_c1_1._m0[2].z, (_586 * (_339 + fma(_339, -_578, _578))) * 0.079577468335628509521484375), _386 * ((_582 * (_194 * _580)) * fp_c6_1._m0[18].x)), _588, _400);
        }
    }
    float _590 = _92.y;
    float _592 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
    float _594 = exp2(log2(clamp(fma(_254, -clamp((-_322) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (_162 * (fma(_592, fp_c1_1._m0[3].x, _592 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_250, fp_c5_1._m0[23].z, fma(_248, fp_c5_1._m0[23].y, _246 * fp_c5_1._m0[23].x)), fp_c1_1._m0[2].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125));
    float _596 = _302 + (-fp_c3_1._m0[11].w);
    float _598 = _590 + (-fp_c3_1._m0[12].w);
    float _600 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
    float _602 = clamp(fma(_362, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _604 = _304 + (-fp_c3_1._m0[13].w);
    float _606 = fma(_604, _604, fma(_598, _598, _596 * _596));
    float _608 = fma(_120, _204 + fp_c6_1._m0[13].x, fma(_236, _380, fma(_370, _600 * ((_360 * fp_c5_1._m0[5].x) * uintBitsToFloat(_6[1])), _602 * ((_594 * (_176 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[18].x))));
    float _610 = fma(_122, _206 + fp_c6_1._m0[13].x, fma(_236, _382, fma(_370, _600 * ((_360 * fp_c5_1._m0[5].y) * uintBitsToFloat(_6[0])), _602 * ((_594 * (_192 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[18].x))));
    float _612 = fma(_124, _208 + fp_c6_1._m0[13].x, fma(_236, _384, fma(_370, _600 * ((_360 * fp_c5_1._m0[5].z) * fma((_339 + fma(_339, -_333, _333)) * _341, fp_c1_1._m0[2].y, _356 * 0.3183098733425140380859375)), _602 * ((_594 * (_194 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[18].x))));
    bool _614 = 1.0 < fp_c6_1._m0[11].x;
    float _616 = 1.0 + (-fp_c7_1._m0[54].w);
    float _618 = exp2(fma(fma(_604 * inversesqrt(_606), fp_c5_1._m0[23].z, fma(_598 * inversesqrt(_606), fp_c5_1._m0[23].y, (_596 * inversesqrt(_606)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_606) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _620 = clamp(fma(_236 * _370, fp_c7_1._m0[54].w, _616), 0.0, 1.0);
    float _622 = clamp(fma(fma(_304, fp_c5_1._m0[14].z, fma(_590, fp_c5_1._m0[14].y, _302 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _624 = clamp((-exp2((clamp(fma(sqrt(_606), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    float _626 = fma(uintBitsToFloat(_6[2]), (1.0 / max(fma(_612, fp_c1_1._m0[3].z, fma(_610, fp_c1_1._m0[3].y, _608 * 0.298911988735198974609375)), fp_c1_1._m0[1].w)) * fp_c6_1._m0[11].x, -uintBitsToFloat(_6[2]));
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


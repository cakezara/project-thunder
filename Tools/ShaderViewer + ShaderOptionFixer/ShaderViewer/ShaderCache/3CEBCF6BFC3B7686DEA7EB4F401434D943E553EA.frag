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
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_14;
layout(binding = 6) uniform sampler2D fp_tex_tcb_16;
layout(binding = 7) uniform sampler2D fp_tex_tcb_18;
layout(binding = 8) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 9) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 10) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 11) uniform sampler2D fp_tex_tcb_20;
layout(binding = 12) uniform sampler2D fp_tex_tcb_28;
layout(binding = 13) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 14) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 15) uniform sampler2D fp_tex_tcb_38;
layout(binding = 16) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _80;
layout(location = 1) in vec4 _82;
layout(location = 2) in vec4 _84;
layout(location = 3) in vec4 _86;
layout(location = 6) in vec4 _88;
layout(location = 5) in vec4 _90;
layout(location = 7) in vec4 _92;
layout(location = 4) in vec4 _94;
layout(location = 0) out vec4 _97;
uint _6[16];

void main()
{
    bool _414 = false;
    float _104 = _80.x;
    float _106 = _80.y;
    vec2 _110 = texture(fp_tex_tcb_E, vec2(_104, _106)).xy;
    float _112 = _110.x;
    float _114 = _110.y;
    vec3 _118 = texture(fp_tex_tcb_A, vec2(_104, _106)).xyz;
    float _120 = _118.x;
    float _122 = _118.y;
    float _124 = _118.z;
    vec3 _126 = texture(fp_tex_tcb_16, vec2(_104, _106)).xyz;
    vec3 _128 = texture(fp_tex_tcb_14, vec2(_104, _106)).xyz;
    float _130 = _128.x;
    float _132 = _128.y;
    float _134 = _128.z;
    float _136 = texture(fp_tex_tcb_1C, vec2(_82.x, _82.y)).x;
    float _138 = texture(fp_tex_tcb_12, vec2(_104, _106)).x;
    float _140 = texture(fp_tex_tcb_1A, vec2(_104, _106)).x;
    float _142 = _84.x;
    float _144 = _84.y;
    float _146 = _84.z;
    float _148 = _86.y;
    float _150 = _86.z;
    float _152 = _86.w;
    float _154 = _86.x;
    float _156 = inversesqrt(fma(_146, _146, fma(_144, _144, _142 * _142)));
    float _158 = _146 * _156;
    float _160 = _142 * _156;
    float _162 = _144 * _156;
    float _164 = clamp(texture(fp_tex_tcb_C, vec2(_104, _106)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _166 = fma((-_120) + fp_c6_1._m0[93].x, _164, _120);
    float _168 = (-texture(fp_tex_tcb_20, vec2(_104, _106)).x) + 1.0;
    float _170 = sqrt(clamp((-fma(_112, _112, _114 * _114)) + 1.0, 0.0, 1.0));
    float _172 = max(texture(fp_tex_tcb_10, vec2(_104, _106)).x, fp_c1_1._m0[0].y);
    float _174 = _130 * fp_c6_1._m0[93].x;
    float _176 = fma(_160, _170, fma(_112, _154, _114 * (fma(_162, _150, -(_158 * _148)) * _152)));
    float _178 = fma(_162, _170, fma(_112, _148, _114 * (fma(_158, _154, -(_160 * _150)) * _152)));
    float _180 = fma(_158, _170, fma(_112, _150, _114 * (fma(_160, _148, -(_162 * _154)) * _152)));
    float _182 = fma((-_122) + fp_c6_1._m0[93].y, _164, _122);
    float _184 = fma((-_124) + fp_c6_1._m0[93].z, _164, _124);
    float _186 = (_126.x * fp_c6_1._m0[19].x) * fp_c6_1._m0[93].x;
    float _188 = (_126.z * fp_c6_1._m0[19].z) * fp_c6_1._m0[93].z;
    float _190 = _132 * fp_c6_1._m0[93].y;
    float _192 = _134 * fp_c6_1._m0[93].z;
    float _194 = 1.0 / _88.w;
    float _196 = inversesqrt(fma(_180, _180, fma(_178, _178, _176 * _176)));
    float _198 = _178 * _196;
    float _200 = _176 * _196;
    float _202 = _180 * _196;
    float _204 = (_126.y * fp_c6_1._m0[19].y) * fp_c6_1._m0[93].y;
    float _212;
    float _214;
    float _216;
    float _218;
    if (_136 < fp_c1_1._m0[0].x)
    {
        float _206 = fma(_136 + 0.00999999977648258209228515625, 5.0, -fp_c6_1._m0[55].z);
        float _208 = clamp(_206 * (-fp_c6_1._m0[55].y), 0.0, 1.0) * clamp((-clamp(_206 * 100000.0, 0.0, 1.0)) + 1.0, 0.0, 1.0);
        float _210 = _208 * fp_c6_1._m0[56].w;
        _212 = _208;
        _214 = _174 * _210;
        _216 = _190 * _210;
        _218 = _192 * _210;
    }
    float _244 = _198 * _202;
    float _246 = _90.x;
    float _248 = _90.y;
    float _250 = clamp(texture(fp_tex_tcb_18, vec2(_104, _106)).x + (-0.0), 0.0, 1.0);
    float _252 = _90.z;
    float _254 = 1.0 / (_92.z * gl_FragCoord.w);
    float _256 = inversesqrt(fma(_252, _252, fma(_248, _248, _246 * _246)));
    float _258 = _246 * (-_256);
    float _260 = _248 * (-_256);
    float _262 = _252 * (-_256);
    float _264 = fma(_202, -_262, fma(_198, -_260, _200 * (-_258)));
    float _266 = fma(_202, _262, fma(_198, _260, _200 * _258));
    float _268 = fma(_198 * (-_266), -2.0, -_260);
    float _270 = fma(_200 * (-_266), -2.0, -_258);
    float _272 = fma(_202 * (-_266), -2.0, -_262);
    float _274 = 1.0 / max(abs(_272), max(abs(_270), abs(_268)));
    float _276 = max(fma(_262, fma(_202 * _264, -2.0, -_262), fma(_260, fma(_198 * _264, -2.0, -_260), _258 * fma(_200 * _264, -2.0, -_258))), fp_c1_1._m0[1].z);
    float _278 = max(_266, fp_c1_1._m0[1].z);
    vec3 _280 = texture(fp_tex_tcb_1E, vec2(fma(_276, fp_c6_1._m0[51].x, _80.z), _80.w)).xyz;
    vec2 _282 = texture(fp_tex_tcb_38, vec2(_278, (-_172) + (-0.0))).xy;
    float _284 = _282.x;
    float _286 = _282.y;
    vec3 _288 = texture(fp_tex_tcb_36, vec4(_270 * _274, _268 * _274, _272 * _274, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_172 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _290 = texture(fp_tex_tcb_2A, vec2(fma(_88.x * _194, 0.5, 0.5), fma(_88.y * _194, -0.5, 0.5))).xy;
    float _292 = _94.y;
    float _294 = _200 * _198;
    float _296 = _262 + (-fp_c5_1._m0[23].z);
    _6[2] = floatBitsToUint(clamp(sqrt(fma(_134, _134, fma(_132, _132, _130 * _130))), 0.0, 1.0) * clamp(_212 + (-0.0), 0.0, 1.0));
    float _298 = _202 * _202;
    float _300 = _292 + (-fp_c9_1._m0[32].w);
    float _302 = _258 + (-fp_c5_1._m0[23].x);
    float _304 = _260 + (-fp_c5_1._m0[23].y);
    float _306 = _300;
    if (_292 < fp_c9_1._m0[32].w)
    {
        _306 = _300 * (-5.0);
    }
    float _308 = _200 * _202;
    float _310 = inversesqrt(fma(_296, _296, fma(_304, _304, _302 * _302)));
    float _312 = _94.x;
    float _314 = _94.z;
    float _316 = _302 * _310;
    float _318 = _304 * _310;
    float _320 = _296 * _310;
    float _322 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w) * max(0.0, ((-_198) + 1.2000000476837158203125) * (clamp(fma(_306, -(1.0 / fma(clamp((-_198) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_306, -(1.0 / fma(clamp((-_198) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].y), 0.0, 1.0)));
    float _324 = fma(_172, 0.5, 0.5);
    float _326 = max(fma(_262, _320, fma(_260, _318, _258 * _316)), fp_c1_1._m0[1].z);
    float _328 = _172 * _172;
    float _330 = fma(_202, -fp_c5_1._m0[23].z, fma(_198, -fp_c5_1._m0[23].y, _200 * (-fp_c5_1._m0[23].x)));
    float _332 = max(fma(_202, _320, fma(_198, _318, _200 * _316)), fp_c1_1._m0[1].z) * max(fma(_202, _320, fma(_198, _318, _200 * _316)), fp_c1_1._m0[1].z);
    float _334 = (_324 * 0.5) * _324;
    float _336 = max(_330, fp_c1_1._m0[1].z);
    float _338 = fma(_200, _200, -(_198 * _198));
    int _341 = max(0, min(int(trunc((_314 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _343 = exp2(_326 * fma(_326, fp_c1_1._m0[2].x, -6.9831600189208984375));
    float _345 = fma(_138, _166 + (-0.039999999105930328369140625), fp_c1_1._m0[1].w);
    float _347 = fma(_138, _182 + (-0.039999999105930328369140625), fp_c1_1._m0[1].w);
    float _349 = fma(_138, _184 + (-0.039999999105930328369140625), fp_c1_1._m0[1].w);
    float _351 = ((1.0 / (_334 + fma(_334, -_278, _278))) * (1.0 / (_334 + fma(_334, -_336, _336)))) * ((_328 * (1.0 / max(fma(_332, _328 * _328, -_332) + 1.0, fp_c1_1._m0[1].z))) * (_328 * (1.0 / max(fma(_332, _328 * _328, -_332) + 1.0, fp_c1_1._m0[1].z))));
    float _353 = exp2(_276 * fma(_276, fp_c1_1._m0[2].x, -6.9831600189208984375));
    uint _356 = uint(int(uint((((int(uint(_341) >> uint(16)) * 20) << 16) + (((_341 & 65535) * 20) + max(0, min(int(trunc((_312 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _358 = fp_c10_1._m0[int(uint(int(_356)) >> uint(2))][int(_356) & 3];
    float _360 = fma(_166, -_138, _166);
    float _362 = fma(_182, -_138, _182);
    float _364 = fma(_184, -_138, _184);
    float _366 = (-_290.y) + 1.0;
    _6[0] = floatBitsToUint(fma((_347 + fma(_347, -_343, _343)) * _351, fp_c1_1._m0[2].y, _362 * 0.3183098733425140380859375));
    float _368 = clamp(_94.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    _6[1] = floatBitsToUint(fma((_345 + fma(_345, -_343, _343)) * _351, fp_c1_1._m0[2].y, _360 * 0.3183098733425140380859375));
    float _370 = _366 * _368;
    float _372 = fma(fma(_322, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_338, fp_c5_1._m0[31].x, (fma(_202, fp_c5_1._m0[25].z, fma(_198, fp_c5_1._m0[25].y, _200 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_308, fp_c5_1._m0[28].w, fma(_298, fp_c5_1._m0[28].z, fma(_244, fp_c5_1._m0[28].y, _294 * fp_c5_1._m0[28].x)))))), fma(_360, -_345, _360), fma(_140, (_345 + fma(_345, -_353, _353)) * (_166 * (_280.x * fp_c6_1._m0[50].w)), fma(_345, _284, _286) * _288.x));
    float _374 = clamp(_330 + (-0.0), 0.0, 1.0);
    float _376 = fma(fma(_322, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_338, fp_c5_1._m0[31].z, (fma(_202, fp_c5_1._m0[27].z, fma(_198, fp_c5_1._m0[27].y, _200 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_308, fp_c5_1._m0[30].w, fma(_298, fp_c5_1._m0[30].z, fma(_244, fp_c5_1._m0[30].y, _294 * fp_c5_1._m0[30].x)))))), fma(_364, -_349, _364), fma(_140, (_349 + fma(_349, -_353, _353)) * (_184 * (_280.z * fp_c6_1._m0[50].w)), fma(_349, _284, _286) * _288.z));
    float _378 = clamp((-fma(max((-_290.x) + 1.0, _366), _368, fma(texture(fp_tex_tcb_28, vec2((_92.x * gl_FragCoord.w) * _254, (_92.y * gl_FragCoord.w) * _254)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _380 = fma(fma(_322, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_338, fp_c5_1._m0[31].y, (fma(_202, fp_c5_1._m0[26].z, fma(_198, fp_c5_1._m0[26].y, _200 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_308, fp_c5_1._m0[29].w, fma(_298, fp_c5_1._m0[29].z, fma(_244, fp_c5_1._m0[29].y, _294 * fp_c5_1._m0[29].x)))))), fma(_362, -_347, _362), fma(_140, (_347 + fma(_347, -_353, _353)) * (_182 * (_280.y * fp_c6_1._m0[50].w)), fma(_347, _284, _286) * _288.y));
    int _382 = floatBitsToInt(_358);
    float _384 = _372;
    float _386 = _380;
    float _388 = _376;
    float _390 = _372;
    float _392 = _380;
    float _394 = _376;
    if (floatBitsToInt(_358) != (-1))
    {
        float _396 = clamp(fma(_370, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _398 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
        float _400 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _402 = 0;
        float _406;
        float _408;
        float _410;
        int _496;
        do
        {
            int _404 = _382 & 255;
            _406 = _384;
            _408 = _386;
            _410 = _388;
            _414 = uint(_404) >= 30u;
            if (_414)
            {
                break;
            }
            int _416 = _404 << 4;
            float _418 = max(_266, fp_c1_1._m0[1].z);
            uint _420 = uint(int(uint(_416 + 7360) >> uint(2)));
            int _422 = int(_420) + 1;
            uint _424 = uint(int(uint(_416 + 7368) >> uint(2)));
            float _426 = (-_312) + fp_c10_1._m0[int(uint(int(_420)) >> uint(2))][int(_420) & 3];
            float _428 = (-_314) + fp_c10_1._m0[int(uint(int(_424)) >> uint(2))][int(_424) & 3];
            float _430 = (-_94.y) + fp_c10_1._m0[int(uint(_422) >> uint(2))][_422 & 3];
            float _432 = fma(_428, _428, fma(_430, _430, _426 * _426));
            float _434 = _426 * inversesqrt(_432);
            float _436 = _430 * inversesqrt(_432);
            float _438 = _428 * inversesqrt(_432);
            float _440 = _258 + _434;
            float _442 = _260 + _436;
            float _444 = _262 + _438;
            float _446 = inversesqrt(fma(_444, _444, fma(_442, _442, _440 * _440)));
            float _448 = _440 * _446;
            float _450 = _442 * _446;
            float _452 = _444 * _446;
            float _454 = fma(_202, _438, fma(_198, _436, _200 * _434));
            float _456 = max(_454, fp_c1_1._m0[1].z);
            float _458 = max(fma(_262, _452, fma(_260, _450, _258 * _448)), fp_c1_1._m0[1].z);
            float _460 = max(fma(_202, _452, fma(_198, _450, _200 * _448)), fp_c1_1._m0[1].z) * max(fma(_202, _452, fma(_198, _450, _200 * _448)), fp_c1_1._m0[1].z);
            uint _462 = uint(int(uint(_416 + 8320) >> uint(2)));
            uint _464 = uint(int(uint(_416 + 6880) >> uint(2)));
            int _466 = int(_464) + 1;
            float _468 = exp2(_458 * fma(_458, fp_c1_1._m0[2].x, -6.9831600189208984375));
            bool _470 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_462)) >> uint(2))][int(_462) & 3]) != 0;
            float _472 = ((1.0 / (_334 + fma(_334, -_418, _418))) * (1.0 / (_334 + fma(_334, -_456, _456)))) * ((_328 * (1.0 / max(fma(_328 * _328, _460, -_460) + 1.0, fp_c1_1._m0[1].z))) * (_328 * (1.0 / max(fma(_328 * _328, _460, -_460) + 1.0, fp_c1_1._m0[1].z))));
            float _474 = _472;
            if (!_470)
            {
                _474 = 1.0;
            }
            float _476 = _474;
            if (_470)
            {
                uint _478 = uint(int(uint(_416 + 7840) >> uint(2)));
                int _480 = int(_478) + 1;
                uint _482 = uint(int(uint(_416 + 7848) >> uint(2)));
                uint _484 = uint(int(uint(_416 + 6888) >> uint(2)));
                float _486 = fp_c10_1._m0[int(uint(int(_484)) >> uint(2))][int(_484) & 3];
                int _488 = int(_484) + 1;
                _476 = exp2(log2(clamp((fma(_438, -fp_c10_1._m0[int(uint(int(_482)) >> uint(2))][int(_482) & 3], fma(_436, -fp_c10_1._m0[int(uint(_480) >> uint(2))][_480 & 3], _434 * (-fp_c10_1._m0[int(uint(int(_478)) >> uint(2))][int(_478) & 3]))) + (-_486)) * (1.0 / ((-_486) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[int(uint(_488) >> uint(2))][_488 & 3]);
            }
            float _490 = exp2(fp_c10_1._m0[int(uint(_466) >> uint(2))][_466 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_464)) >> uint(2))][int(_464) & 3], -sqrt(_432), fp_c1_1._m0[1].y), 0.0, 1.0))) * _476;
            uint _492 = uint(int(uint(_416 + 6400) >> uint(2)));
            int _494 = int(_492) + 1;
            _496 = _402 + 1;
            float _498 = _490 * clamp(_454 + (-0.0), 0.0, 1.0);
            uint _500 = uint(int(uint(_416 + 6408) >> uint(2)));
            int _502 = int(_500) + 1;
            float _504 = _490 * fp_c10_1._m0[int(uint(_502) >> uint(2))][_502 & 3];
            float _506 = exp2(log2(clamp(fma(_266, -clamp((-_454) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (_168 * (fma(_400, fp_c1_1._m0[3].x, exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_262, -_438, fma(_260, -_436, _258 * (-_434))), fp_c1_1._m0[2].w) + (-0.0), 0.0, 1.0))) * _400) + 0.20000000298023223876953125));
            float _508 = fma((_498 * fp_c10_1._m0[int(uint(int(_492)) >> uint(2))][int(_492) & 3]) * fma(_360, fp_c1_1._m0[2].z, ((_345 + fma(_345, -_468, _468)) * _472) * 0.079577468335628509521484375), _398, _396 * ((_506 * (_186 * _504)) * fp_c6_1._m0[18].x)) + _384;
            float _510 = fma((_498 * fp_c10_1._m0[int(uint(_494) >> uint(2))][_494 & 3]) * fma(_362, fp_c1_1._m0[2].z, ((_347 + fma(_347, -_468, _468)) * _472) * 0.079577468335628509521484375), _398, _396 * ((_506 * (_204 * _504)) * fp_c6_1._m0[18].x)) + _386;
            float _512 = fma((_498 * fp_c10_1._m0[int(uint(int(_500)) >> uint(2))][int(_500) & 3]) * fma(_364, fp_c1_1._m0[2].z, ((_349 + fma(_349, -_468, _468)) * _472) * 0.079577468335628509521484375), _398, _396 * ((_506 * (_188 * _504)) * fp_c6_1._m0[18].x)) + _388;
            _382 = int(uint(_382) >> uint(8));
            _402 = _496;
            _384 = _508;
            _386 = _510;
            _388 = _512;
            _406 = _508;
            _408 = _510;
            _410 = _512;
        } while (!(_496 >= 4));
        _414 = false;
        _390 = _406;
        _392 = _408;
        _394 = _410;
        if ((_382 & 255) == 30)
        {
            float _514 = 1.0 / fp_c10_1._m0[561].y;
            float _516 = (-_312) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_514, fp_c10_1._m0[557].x);
            float _518 = (-_314) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_514, fp_c10_1._m0[557].z);
            float _520 = _516 * _516;
            float _522 = sqrt(fma(_518, _518, _520)) * (-fp_c10_1._m0[558].y);
            float _524 = inversesqrt(fma(_518, _518, fma(_522, _522, _520)));
            float _526 = _516 * _524;
            float _528 = _522 * _524;
            float _530 = _518 * _524;
            float _532 = _258 + _526;
            float _534 = _260 + _528;
            float _536 = _262 + _530;
            float _538 = inversesqrt(fma(_536, _536, fma(_534, _534, _532 * _532)));
            float _540 = max(_266, fp_c1_1._m0[1].z);
            float _542 = fma(_202, _530, fma(_198, _528, _200 * _526));
            float _544 = max(_542, fp_c1_1._m0[1].z);
            float _546 = _532 * _538;
            float _548 = _534 * _538;
            float _550 = _536 * _538;
            float _552 = _312 + (-fp_c10_1._m0[557].x);
            float _554 = _314 + (-fp_c10_1._m0[557].z);
            float _556 = _552 * fp_c10_1._m0[558].z;
            float _558 = _554 * fp_c10_1._m0[558].x;
            float _560 = ((-float(_558 < _556)) + float(_558 > _556)) * fp_c10_1._m0[561].y;
            float _562 = fma(_554, _554, _552 * _552);
            float _564 = fma(_554, fp_c10_1._m0[558].z, _552 * fp_c10_1._m0[558].x);
            float _566 = _94.y;
            float _568 = 1.0 / (fma(_314, fp_c10_1._m0[565].z, fma(_566, fp_c10_1._m0[565].y, _312 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            bool _570 = _564 > 0.0;
            float _572 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_552, fma(_560, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_554 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_560 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_552, fma(_560, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_554 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_560 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _574 = _562;
            if (_570)
            {
                _574 = sqrt(_562);
            }
            float _576 = _574;
            if (!_570)
            {
                _576 = 1.0;
            }
            float _578 = max(fma(_202, _550, fma(_198, _548, _200 * _546)), fp_c1_1._m0[1].z) * max(fma(_202, _550, fma(_198, _548, _200 * _546)), fp_c1_1._m0[1].z);
            float _580 = inversesqrt(fma(_530, _530, _526 * _526));
            float _582 = max(fma(_262, _550, fma(_260, _548, _258 * _546)), fp_c1_1._m0[1].z);
            float _584 = fma(_572, -_572, fp_c1_1._m0[1].y) * fma(_572, -_572, fp_c1_1._m0[1].y);
            if (!(fma(_554 * inversesqrt(_562), fp_c10_1._m0[558].z, (_552 * inversesqrt(_562)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z))
            {
                _584 = 1.0;
            }
            float _586 = clamp(fma(_564 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_564 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _588 = exp2(_582 * fma(_582, fp_c1_1._m0[2].x, -6.9831600189208984375));
            float _590 = (_168 * (fma(_400, fp_c1_1._m0[3].x, _400 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_262, -_530, fma(_260, -_528, _258 * (-_526))), fp_c1_1._m0[2].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125)) * exp2(log2(clamp(fma(_266, -clamp((-_542) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z);
            float _592 = ((1.0 / (_334 + fma(_334, -_540, _540))) * (1.0 / (_334 + fma(_334, -_544, _544)))) * ((_328 * (1.0 / max(fma(_328 * _328, _578, -_578) + 1.0, fp_c1_1._m0[1].z))) * (_328 * (1.0 / max(fma(_328 * _328, _578, -_578) + 1.0, fp_c1_1._m0[1].z))));
            float _594 = min(fma(_586, -_586, fp_c1_1._m0[1].y) * fma(_586, -_586, fp_c1_1._m0[1].y), _584) * (exp2(log2(clamp(fma(_576, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_530 * _580, -fp_c10_1._m0[558].z, (_526 * _580) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w));
            float _596 = _594 * clamp(_542 + (-0.0), 0.0, 1.0);
            float _598 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_314, fp_c10_1._m0[562].z, fma(_566, fp_c10_1._m0[562].y, _312 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _568, 0.5, 0.5), (-fma((fma(_314, fp_c10_1._m0[563].z, fma(_566, fp_c10_1._m0[563].y, _312 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _568, 0.5, 0.5)) + 1.0)).z > fma((fma(_314, fp_c10_1._m0[564].z, fma(_94.y, fp_c10_1._m0[564].y, _312 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _568, 0.5, 0.5)) || (_564 <= 0.0));
            _390 = fma(fma(_398, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _596) * fma(_360, fp_c1_1._m0[2].z, ((_345 + fma(_345, -_588, _588)) * _592) * 0.079577468335628509521484375), _396 * ((_590 * (_186 * _594)) * fp_c6_1._m0[18].x)), _598, _406);
            _392 = fma(fma(_398, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _596) * fma(_362, fp_c1_1._m0[2].z, ((_347 + fma(_347, -_588, _588)) * _592) * 0.079577468335628509521484375), _396 * ((_590 * (_204 * _594)) * fp_c6_1._m0[18].x)), _598, _408);
            _394 = fma(fma(_398, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _596) * fma(_364, fp_c1_1._m0[2].z, ((_349 + fma(_349, -_588, _588)) * _592) * 0.079577468335628509521484375), _396 * ((_590 * (_188 * _594)) * fp_c6_1._m0[18].x)), _598, _410);
        }
    }
    float _600 = _94.y;
    float _602 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
    float _604 = exp2(log2(clamp(fma(_266, -clamp((-_330) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (_168 * (fma(_602, fp_c1_1._m0[3].x, _602 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_262, fp_c5_1._m0[23].z, fma(_260, fp_c5_1._m0[23].y, _258 * fp_c5_1._m0[23].x)), fp_c1_1._m0[2].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125));
    float _606 = _312 + (-fp_c3_1._m0[11].w);
    float _608 = _600 + (-fp_c3_1._m0[12].w);
    float _610 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
    float _612 = clamp(fma(_370, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _614 = _314 + (-fp_c3_1._m0[13].w);
    float _616 = fma(_614, _614, fma(_608, _608, _606 * _606));
    float _618 = fma(_130, _214 + fp_c6_1._m0[13].x, fma(_250, _390, fma(_378, _610 * ((_374 * fp_c5_1._m0[5].x) * uintBitsToFloat(_6[1])), _612 * ((_604 * (_186 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[18].x))));
    float _620 = fma(_132, _216 + fp_c6_1._m0[13].x, fma(_250, _392, fma(_378, _610 * ((_374 * fp_c5_1._m0[5].y) * uintBitsToFloat(_6[0])), _612 * ((_604 * (_204 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[18].x))));
    float _622 = fma(_134, _218 + fp_c6_1._m0[13].x, fma(_250, _394, fma(_378, _610 * ((_374 * fp_c5_1._m0[5].z) * fma((_349 + fma(_349, -_343, _343)) * _351, fp_c1_1._m0[2].y, _364 * 0.3183098733425140380859375)), _612 * ((_604 * (_188 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[18].x))));
    bool _624 = 1.0 < fp_c6_1._m0[11].x;
    float _626 = 1.0 + (-fp_c7_1._m0[54].w);
    float _628 = exp2(fma(fma(_614 * inversesqrt(_616), fp_c5_1._m0[23].z, fma(_608 * inversesqrt(_616), fp_c5_1._m0[23].y, (_606 * inversesqrt(_616)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_616) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _630 = clamp(fma(_250 * _378, fp_c7_1._m0[54].w, _626), 0.0, 1.0);
    float _632 = fma(uintBitsToFloat(_6[2]), (1.0 / max(fma(_622, fp_c1_1._m0[3].z, fma(_620, fp_c1_1._m0[3].y, _618 * 0.298911988735198974609375)), fp_c1_1._m0[1].z)) * fp_c6_1._m0[11].x, -uintBitsToFloat(_6[2]));
    float _634 = fma(_618, _632, _618);
    float _636 = _628 * fp_c7_1._m0[55].x;
    float _638 = fma(_620, _632, _620);
    float _640 = fma(_622, _632, _622);
    float _642 = _626;
    float _644 = _636;
    float _646 = _634;
    float _648 = _638;
    float _650 = _640;
    if (!_624)
    {
        _642 = (-_618) + _634;
    }
    float _652 = _642;
    if (!_624)
    {
        _644 = (-_620) + _638;
    }
    if (!_624)
    {
        _646 = fma(_642, fp_c6_1._m0[11].x, _618);
    }
    if (!_624)
    {
        _652 = (-_622) + _640;
    }
    if (!_624)
    {
        _648 = fma(_644, fp_c6_1._m0[11].x, _620);
    }
    if (!_624)
    {
        _650 = fma(_652, fp_c6_1._m0[11].x, _622);
    }
    float _654 = clamp(fma(fma(_314, fp_c5_1._m0[14].z, fma(_600, fp_c5_1._m0[14].y, _312 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _656 = fma((-_646) + fp_c5_1._m0[13].x, _654, _646);
    float _658 = fma((-_648) + fp_c5_1._m0[13].y, _654, _648);
    float _660 = fma((-_650) + fp_c5_1._m0[13].z, _654, _650);
    float _662 = clamp((-exp2((clamp(fma(sqrt(_616), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _97.x = fma(fma(fma(_636 * _630, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_656), _662, _656);
    _97.y = fma(fma(fma((_628 * fp_c7_1._m0[55].y) * _630, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_658), _662, _658);
    _97.z = fma(fma(fma((_628 * fp_c7_1._m0[55].z) * _630, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_660), _662, _660);
    _97.w = 1.0;
}


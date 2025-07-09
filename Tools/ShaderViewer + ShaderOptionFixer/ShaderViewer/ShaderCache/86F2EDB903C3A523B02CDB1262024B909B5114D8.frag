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
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_16;
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
layout(binding = 6) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 7) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 8) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 9) uniform sampler2D fp_tex_tcb_28;
layout(binding = 10) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 11) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 12) uniform sampler2D fp_tex_tcb_38;
layout(binding = 13) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _72;
layout(location = 1) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 4) in vec4 _78;
layout(location = 6) in vec4 _80;
layout(location = 5) in vec4 _82;
layout(location = 3) in vec4 _84;
layout(location = 0) out vec4 _87;
uint _6[12];

void main()
{
    bool _370 = false;
    float _94 = _72.x;
    float _96 = _72.y;
    vec2 _100 = texture(fp_tex_tcb_E, vec2(_94, _96)).xy;
    float _102 = _100.x;
    float _104 = _100.y;
    float _106 = _74.x;
    float _108 = _76.x;
    float _110 = _74.y;
    float _112 = _76.y;
    float _114 = _74.z;
    float _116 = _76.z;
    float _118 = _76.w;
    float _120 = _78.x;
    float _122 = _78.z;
    float _124 = _78.y;
    float _126 = inversesqrt(fma(_114, _114, fma(_110, _110, _106 * _106)));
    float _128 = inversesqrt(fma(_116, _116, fma(_112, _112, _108 * _108)));
    float _130 = _110 * _126;
    float _132 = _114 * _126;
    float _134 = _116 * _128;
    float _136 = _108 * _128;
    float _138 = _112 * _128;
    float _140 = _106 * _126;
    float _142 = fma(_132, _138, -(_130 * _134)) * _118;
    float _144 = fma(_140, _134, -(_132 * _136)) * _118;
    float _146 = fma(_130, _136, -(_140 * _138)) * _118;
    float _148 = inversesqrt(fma(_122, _122, fma(_124, _124, _120 * _120)));
    float _150 = _120 * _148;
    float _152 = inversesqrt(fma(_146, _146, fma(_144, _144, _142 * _142)));
    float _154 = _120 * (-_148);
    float _156 = _124 * _148;
    float _158 = _124 * (-_148);
    float _160 = _122 * _148;
    float _162 = _122 * (-_148);
    float _164 = sqrt(clamp((-fma(_102, _102, _104 * _104)) + 1.0, 0.0, 1.0));
    float _166 = fma(_140, _164, fma(_108, _102, _104 * (_118 * fma(_116, _130, -(_112 * _132)))));
    float _168 = fma(_130, _164, fma(_112, _102, _104 * (_118 * fma(_108, _132, -(_116 * _140)))));
    float _170 = fma(_132, _164, fma(_116, _102, _104 * (_118 * fma(_112, _140, -(_108 * _130)))));
    float _172 = inversesqrt(fma(_170, _170, fma(_168, _168, _166 * _166)));
    float _174 = max(texture(fp_tex_tcb_10, vec2(_94, _96)).x, fp_c1_1._m0[0].x);
    float _176 = 1.0 / (_80.z * gl_FragCoord.w);
    float _178 = _166 * _172;
    float _180 = 1.0 / _82.w;
    float _182 = _168 * _172;
    float _184 = _170 * _172;
    float _186 = fma(_184, _162, fma(_182, _158, _178 * _154));
    float _188 = fma(_184, -_162, fma(_182, -_158, _178 * (-_154)));
    float _190 = fma(_178 * (-_186), -2.0, -_154);
    float _192 = fma(_182 * (-_186), -2.0, -_158);
    float _194 = fma(_184 * (-_186), -2.0, -_162);
    float _196 = 1.0 / max(abs(_194), max(abs(_190), abs(_192)));
    float _198 = clamp((-texture(fp_tex_tcb_1C, vec2(_94, _96)).x) + 1.0, 0.0, 1.0) * fp_c6_1._m0[60].z;
    float _200 = max(_186, fp_c1_1._m0[0].y);
    vec3 _204 = texture(fp_tex_tcb_C, vec2(_94, _96)).xyz;
    vec3 _206 = texture(fp_tex_tcb_1C, vec2(fma(fma(_134, _160, fma(_138, _156, _136 * _150)), _198, _94), fma(fma(_146 * _152, _160, fma(_144 * _152, _156, (_142 * _152) * _150)), _198, _96))).xyz;
    vec3 _208 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _210 = _208.x;
    float _212 = _208.y;
    float _214 = _208.z;
    float _216 = max(fma(_162, fma(_184 * _188, -2.0, -_162), fma(_158, fma(_182 * _188, -2.0, -_158), _154 * fma(_178 * _188, -2.0, -_154))), fp_c1_1._m0[0].y);
    vec3 _218 = texture(fp_tex_tcb_1E, vec2(fma(_216, fp_c6_1._m0[51].x, _72.z), _72.w)).xyz;
    vec2 _220 = texture(fp_tex_tcb_38, vec2(_200, (-_174) + (-0.0))).xy;
    float _222 = _220.x;
    float _224 = _220.y;
    vec3 _226 = texture(fp_tex_tcb_36, vec4(_190 * _196, _192 * _196, _194 * _196, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_174 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _228 = texture(fp_tex_tcb_1A, vec2(_94, _96)).x;
    vec2 _230 = texture(fp_tex_tcb_2A, vec2(fma(_82.x * _180, 0.5, 0.5), fma(_82.y * _180, -0.5, 0.5))).xy;
    vec3 _232 = texture(fp_tex_tcb_16, vec2(_94, _96)).xyz;
    float _234 = _154 + (-fp_c5_1._m0[23].x);
    float _236 = _158 + (-fp_c5_1._m0[23].y);
    float _238 = _162 + (-fp_c5_1._m0[23].z);
    float _240 = inversesqrt(fma(_238, _238, fma(_236, _236, _234 * _234)));
    float _242 = _234 * _240;
    float _244 = _236 * _240;
    float _246 = _238 * _240;
    float _248 = _84.x;
    float _250 = clamp((-0.0) + fp_c6_1._m0[8].x, 0.0, 1.0);
    float _252 = max(fma(_162, _246, fma(_158, _244, _154 * _242)), fp_c1_1._m0[0].y);
    float _254 = _84.z;
    float _256 = fma(_206.x * _204.x, 2.0, fma((-_210) + fp_c6_1._m0[93].x, _250, _210));
    float _258 = fma(_206.y * _204.y, 2.0, fma((-_212) + fp_c6_1._m0[93].y, _250, _212));
    float _260 = fma(_206.z * _204.z, 2.0, fma((-_214) + fp_c6_1._m0[93].z, _250, _214));
    float _262 = exp2(_216 * fma(_216, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _264 = fma(_256 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _266 = _178 * _182;
    float _268 = fma(_258 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _270 = fma(_260 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _272 = _182 * _184;
    float _274 = _184 * _184;
    float _276 = fma(_174, 0.5, 0.5);
    float _278 = fma(_184, -fp_c5_1._m0[23].z, fma(_182, -fp_c5_1._m0[23].y, _178 * (-fp_c5_1._m0[23].x)));
    float _280 = _174 * _174;
    float _282 = max(fma(_184, _246, fma(_182, _244, _178 * _242)), fp_c1_1._m0[0].y) * max(fma(_184, _246, fma(_182, _244, _178 * _242)), fp_c1_1._m0[0].y);
    float _284 = (_276 * 0.5) * _276;
    float _286 = max(_278, fp_c1_1._m0[0].y);
    float _288 = _280 * _280;
    int _291 = max(0, min(int(trunc((_254 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _293 = _178 * _184;
    float _295 = exp2(_252 * fma(_252, fp_c1_1._m0[0].z, -6.9831600189208984375));
    uint _298 = uint(int(uint((((int(uint(_291) >> uint(16)) * 20) << 16) + (((_291 & 65535) * 20) + max(0, min(int(trunc((_248 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _300 = fp_c10_1._m0[int(uint(int(_298)) >> uint(2))][int(_298) & 3];
    float _302 = (-_230.y) + 1.0;
    float _304 = fma(_178, _178, -(_182 * _182));
    float _306 = ((1.0 / (_284 + fma(_284, -_200, _200))) * (1.0 / (_284 + fma(_284, -_286, _286)))) * ((_280 * (1.0 / max(fma(_282, _288, -_282) + 1.0, fp_c1_1._m0[0].y))) * (_280 * (1.0 / max(fma(_282, _288, -_282) + 1.0, fp_c1_1._m0[0].y))));
    float _308 = fma(_258, -fp_c6_1._m0[9].x, _258);
    float _310 = fma(_256, -fp_c6_1._m0[9].x, _256);
    float _312 = fma(_260, -fp_c6_1._m0[9].x, _260);
    float _314 = fma(max(0.0, fma(_304, fp_c5_1._m0[31].x, (fma(_184, fp_c5_1._m0[25].z, fma(_182, fp_c5_1._m0[25].y, _178 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_293, fp_c5_1._m0[28].w, fma(_274, fp_c5_1._m0[28].z, fma(_272, fp_c5_1._m0[28].y, _266 * fp_c5_1._m0[28].x))))), fma(_310, -_264, _310), fma(_228, (_264 + fma(_264, -_262, _262)) * (_256 * (_218.x * fp_c6_1._m0[50].w)), fma(_264, _222, _224) * _226.x));
    float _316 = clamp(_84.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _318 = clamp(_278 + (-0.0), 0.0, 1.0);
    float _320 = fma(max(0.0, fma(_304, fp_c5_1._m0[31].y, (fma(_184, fp_c5_1._m0[26].z, fma(_182, fp_c5_1._m0[26].y, _178 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_293, fp_c5_1._m0[29].w, fma(_274, fp_c5_1._m0[29].z, fma(_272, fp_c5_1._m0[29].y, _266 * fp_c5_1._m0[29].x))))), fma(_308, -_268, _308), fma(_228, (_268 + fma(_268, -_262, _262)) * (_258 * (_218.y * fp_c6_1._m0[50].w)), fma(_268, _222, _224) * _226.y));
    float _322 = fma(max(0.0, fma(_304, fp_c5_1._m0[31].z, (fma(_184, fp_c5_1._m0[27].z, fma(_182, fp_c5_1._m0[27].y, _178 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_293, fp_c5_1._m0[30].w, fma(_274, fp_c5_1._m0[30].z, fma(_272, fp_c5_1._m0[30].y, _266 * fp_c5_1._m0[30].x))))), fma(_312, -_270, _312), fma(_228, (_270 + fma(_270, -_262, _262)) * (_260 * (_218.z * fp_c6_1._m0[50].w)), fma(_270, _222, _224) * _226.z));
    float _324 = _302 * _316;
    float _326 = clamp(texture(fp_tex_tcb_18, vec2(_94, _96)).x + (-0.0), 0.0, 1.0);
    float _328 = _232.x * fp_c6_1._m0[19].x;
    float _330 = _232.y * fp_c6_1._m0[19].y;
    float _332 = _232.z * fp_c6_1._m0[19].z;
    float _334 = clamp((-fma(max((-_230.x) + 1.0, _302), _316, fma(texture(fp_tex_tcb_28, vec2((_80.x * gl_FragCoord.w) * _176, (_80.y * gl_FragCoord.w) * _176)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _336 = floatBitsToInt(_300);
    float _338 = _314;
    float _340 = _320;
    float _342 = _322;
    float _344 = _314;
    float _346 = _320;
    float _348 = _322;
    if (floatBitsToInt(_300) != (-1))
    {
        float _350 = 1.0 / fp_c6_1._m0[18].y;
        float _352 = clamp(fma(_324, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _354 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
        float _356 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _358 = 0;
        float _362;
        float _364;
        float _366;
        int _456;
        do
        {
            int _360 = _336 & 255;
            _362 = _338;
            _364 = _340;
            _366 = _342;
            _370 = uint(_360) >= 30u;
            if (_370)
            {
                break;
            }
            int _372 = _360 << 4;
            uint _374 = uint(int(uint(_372 + 7360) >> uint(2)));
            int _376 = int(_374) + 1;
            uint _378 = uint(int(uint(_372 + 7368) >> uint(2)));
            float _380 = (-_248) + fp_c10_1._m0[int(uint(int(_374)) >> uint(2))][int(_374) & 3];
            float _382 = fp_c10_1._m0[int(uint(_376) >> uint(2))][_376 & 3] + (-_84.y);
            float _384 = (-_254) + fp_c10_1._m0[int(uint(int(_378)) >> uint(2))][int(_378) & 3];
            float _386 = fma(_384, _384, fma(_382, _382, _380 * _380));
            float _388 = _380 * inversesqrt(_386);
            float _390 = _382 * inversesqrt(_386);
            float _392 = _384 * inversesqrt(_386);
            float _394 = _154 + _388;
            float _396 = _158 + _390;
            float _398 = _162 + _392;
            uint _400 = uint(int(uint(_372 + 6880) >> uint(2)));
            int _402 = int(_400) + 1;
            float _404 = inversesqrt(fma(_398, _398, fma(_396, _396, _394 * _394)));
            uint _406 = uint(int(uint(_372 + 8320) >> uint(2)));
            float _408 = _394 * _404;
            float _410 = _396 * _404;
            float _412 = _398 * _404;
            float _414 = fma(_184, _392, fma(_182, _390, _178 * _388));
            float _416 = max(fma(_162, _412, fma(_158, _410, _154 * _408)), fp_c1_1._m0[0].y);
            float _418 = max(fma(_184, _412, fma(_182, _410, _178 * _408)), fp_c1_1._m0[0].y) * max(fma(_184, _412, fma(_182, _410, _178 * _408)), fp_c1_1._m0[0].y);
            float _420 = max(_414, fp_c1_1._m0[0].y);
            uint _422 = uint(int(uint(_372 + 6400) >> uint(2)));
            int _424 = int(_422) + 1;
            bool _426 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_406)) >> uint(2))][int(_406) & 3]) != 0;
            uint _428 = uint(int(uint(_372 + 6408) >> uint(2)));
            int _430 = int(_428) + 1;
            float _432 = exp2(_416 * fma(_416, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _434 = ((1.0 / (_284 + fma(_284, -_200, _200))) * (1.0 / (_284 + fma(_284, -_420, _420)))) * ((_280 * (1.0 / max(fma(_288, _418, -_418) + 1.0, fp_c1_1._m0[0].y))) * (_280 * (1.0 / max(fma(_288, _418, -_418) + 1.0, fp_c1_1._m0[0].y))));
            float _436 = (_268 + fma(_268, -_432, _432)) * _434;
            float _438 = _436;
            if (!_426)
            {
                _438 = 1.0;
            }
            float _440 = _438;
            if (_426)
            {
                uint _442 = uint(int(uint(_372 + 7840) >> uint(2)));
                int _444 = int(_442) + 1;
                uint _446 = uint(int(uint(_372 + 7848) >> uint(2)));
                uint _448 = uint(int(uint(_372 + 6888) >> uint(2)));
                float _450 = fp_c10_1._m0[int(uint(int(_448)) >> uint(2))][int(_448) & 3];
                int _452 = int(_448) + 1;
                _440 = exp2(fp_c10_1._m0[int(uint(_452) >> uint(2))][_452 & 3] * log2(clamp(((-_450) + fma(_392, -fp_c10_1._m0[int(uint(int(_446)) >> uint(2))][int(_446) & 3], fma(_390, -fp_c10_1._m0[int(uint(_444) >> uint(2))][_444 & 3], _388 * (-fp_c10_1._m0[int(uint(int(_442)) >> uint(2))][int(_442) & 3])))) * (1.0 / ((-_450) + 1.0)), 0.0, 1.0)));
            }
            float _454 = exp2(fp_c10_1._m0[int(uint(_402) >> uint(2))][_402 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_400)) >> uint(2))][int(_400) & 3], -sqrt(_386), fp_c1_1._m0[1].x), 0.0, 1.0))) * _440;
            _456 = _358 + 1;
            float _458 = _454 * clamp(_414 + (-0.0), 0.0, 1.0);
            float _460 = fp_c10_1._m0[int(uint(_430) >> uint(2))][_430 & 3] * _454;
            float _462 = exp2(log2(clamp(fma(_186, -clamp((-_414) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].x), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_356, fp_c1_1._m0[1].w, exp2(_350 * log2(clamp(max(fma(_162, -_392, fma(_158, -_390, _154 * (-_388))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0))) * _356) + 0.20000000298023223876953125);
            float _464 = _338 + fma((fp_c10_1._m0[int(uint(int(_422)) >> uint(2))][int(_422) & 3] * _458) * fma(_310, fp_c1_1._m0[1].y, ((_264 + fma(_264, -_432, _432)) * _434) * 0.079577468335628509521484375), _354, _352 * ((_462 * (_328 * _460)) * fp_c6_1._m0[18].x));
            float _466 = _340 + fma((fp_c10_1._m0[int(uint(_424) >> uint(2))][_424 & 3] * _458) * fma(_308, fp_c1_1._m0[1].y, _436 * 0.079577468335628509521484375), _354, _352 * ((_462 * (_330 * _460)) * fp_c6_1._m0[18].x));
            float _468 = _342 + fma((fp_c10_1._m0[int(uint(int(_428)) >> uint(2))][int(_428) & 3] * _458) * fma(_312, fp_c1_1._m0[1].y, ((_270 + fma(_270, -_432, _432)) * _434) * 0.079577468335628509521484375), _354, _352 * ((_462 * (_332 * _460)) * fp_c6_1._m0[18].x));
            _336 = int(uint(_336) >> uint(8));
            _358 = _456;
            _338 = _464;
            _340 = _466;
            _342 = _468;
            _362 = _464;
            _364 = _466;
            _366 = _468;
        } while (!(_456 >= 4));
        _370 = false;
        _344 = _362;
        _346 = _364;
        _348 = _366;
        if ((_336 & 255) == 30)
        {
            float _470 = _84.y;
            float _472 = 1.0 / (fma(_254, fp_c10_1._m0[565].z, fma(_470, fp_c10_1._m0[565].y, _248 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _474 = 1.0 / fp_c10_1._m0[561].y;
            float _476 = _248 + (-fp_c10_1._m0[557].x);
            float _478 = _254 + (-fp_c10_1._m0[557].z);
            float _480 = (-_248) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_474, fp_c10_1._m0[557].x);
            float _482 = (-_254) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_474, fp_c10_1._m0[557].z);
            float _484 = _476 * fp_c10_1._m0[558].z;
            float _486 = _478 * fp_c10_1._m0[558].x;
            float _488 = _480 * _480;
            float _490 = ((-float(_486 < _484)) + float(_486 > _484)) * fp_c10_1._m0[561].y;
            float _492 = sqrt(fma(_482, _482, _488)) * (-fp_c10_1._m0[558].y);
            float _494 = fma(_478, _478, _476 * _476);
            float _496 = inversesqrt(fma(_482, _482, fma(_492, _492, _488)));
            float _498 = _480 * _496;
            float _500 = _492 * _496;
            float _502 = _482 * _496;
            float _504 = _154 + _498;
            float _506 = fma(_478, fp_c10_1._m0[558].z, _476 * fp_c10_1._m0[558].x);
            float _508 = _158 + _500;
            bool _510 = fma(_478 * inversesqrt(_494), fp_c10_1._m0[558].z, (_476 * inversesqrt(_494)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _512 = _162 + _502;
            float _514 = inversesqrt(fma(_502, _502, _498 * _498));
            bool _516 = _506 > 0.0;
            float _518 = inversesqrt(fma(_512, _512, fma(_508, _508, _504 * _504)));
            float _520 = _494;
            if (_516)
            {
                _520 = sqrt(_494);
            }
            float _522 = _504 * _518;
            float _524 = _508 * _518;
            float _526 = _512 * _518;
            float _528 = fma(_184, _502, fma(_182, _500, _178 * _498));
            float _530 = _520;
            if (!_516)
            {
                _530 = 1.0;
            }
            float _532 = max(_528, fp_c1_1._m0[0].y);
            float _534 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_476, fma(_490, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_478 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_490 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_476, fma(_490, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_478 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_490 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _536 = max(fma(_162, _526, fma(_158, _524, _154 * _522)), fp_c1_1._m0[0].y);
            float _538 = max(fma(_184, _526, fma(_182, _524, _178 * _522)), fp_c1_1._m0[0].y) * max(fma(_184, _526, fma(_182, _524, _178 * _522)), fp_c1_1._m0[0].y);
            float _540 = clamp(fma(_506 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_506 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _542 = _540;
            if (_510)
            {
                _542 = fma(_534, -_534, fp_c1_1._m0[1].x) * fma(_534, -_534, fp_c1_1._m0[1].x);
            }
            float _544 = exp2(_536 * fma(_536, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _546 = _542;
            if (!_510)
            {
                _546 = 1.0;
            }
            float _548 = (exp2(log2(clamp(fma(_530, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_502 * _514, -fp_c10_1._m0[558].z, (_498 * _514) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_540, -_540, fp_c1_1._m0[1].x) * fma(_540, -_540, fp_c1_1._m0[1].x), _546);
            float _550 = (fma(_356, fp_c1_1._m0[1].w, _356 * exp2(_350 * log2(clamp(max(fma(_162, -_502, fma(_158, -_500, _154 * (-_498))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125) * exp2(log2(clamp(fma(_186, -clamp((-_528) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].x), 0.0, 1.0)) * fp_c6_1._m0[18].z);
            float _552 = _548 * clamp(_528 + (-0.0), 0.0, 1.0);
            float _554 = ((1.0 / (_284 + fma(_284, -_200, _200))) * (1.0 / (_284 + fma(_284, -_532, _532)))) * ((_280 * (1.0 / max(fma(_288, _538, -_538) + 1.0, fp_c1_1._m0[0].y))) * (_280 * (1.0 / max(fma(_288, _538, -_538) + 1.0, fp_c1_1._m0[0].y))));
            float _556 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_254, fp_c10_1._m0[562].z, fma(_470, fp_c10_1._m0[562].y, _248 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _472, 0.5, 0.5), (-fma((fma(_254, fp_c10_1._m0[563].z, fma(_470, fp_c10_1._m0[563].y, _248 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _472, 0.5, 0.5)) + 1.0)).z > fma((fma(_254, fp_c10_1._m0[564].z, fma(_470, fp_c10_1._m0[564].y, _248 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _472, 0.5, 0.5)) || (_506 <= 0.0));
            _344 = fma(fma(_354, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _552) * fma(_310, fp_c1_1._m0[1].y, ((_264 + fma(_264, -_544, _544)) * _554) * 0.079577468335628509521484375), _352 * ((_550 * (_328 * _548)) * fp_c6_1._m0[18].x)), _556, _362);
            _346 = fma(fma(_354, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _552) * fma(_308, fp_c1_1._m0[1].y, ((_268 + fma(_268, -_544, _544)) * _554) * 0.079577468335628509521484375), _352 * ((_550 * (_330 * _548)) * fp_c6_1._m0[18].x)), _556, _364);
            _348 = fma(fma(_354, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _552) * fma(_312, fp_c1_1._m0[1].y, ((_270 + fma(_270, -_544, _544)) * _554) * 0.079577468335628509521484375), _352 * ((_550 * (_332 * _548)) * fp_c6_1._m0[18].x)), _556, _366);
        }
    }
    float _558 = _84.y;
    float _560 = _248 + (-fp_c3_1._m0[11].w);
    float _562 = _254 + (-fp_c3_1._m0[13].w);
    float _564 = _558 + (-fp_c3_1._m0[12].w);
    float _566 = fma(_562, _562, fma(_564, _564, _560 * _560));
    float _568 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
    float _570 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
    float _572 = clamp(fma(_324, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _574 = exp2(log2(clamp(fma(_186, -clamp((-_278) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].x), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_568, fp_c1_1._m0[1].w, _568 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_162, fp_c5_1._m0[23].z, fma(_158, fp_c5_1._m0[23].y, _154 * fp_c5_1._m0[23].x)), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _576 = clamp(fma(_326 * _334, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _578 = exp2(log2(clamp(sqrt(_566) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_562 * inversesqrt(_566), fp_c5_1._m0[23].z, fma(_564 * inversesqrt(_566), fp_c5_1._m0[23].y, (_560 * inversesqrt(_566)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _580 = fma(_326, _344, fma(_334, _570 * ((_318 * fp_c5_1._m0[5].x) * fma((_264 + fma(_295, -_264, _295)) * _306, fp_c1_1._m0[0].w, _310 * 0.3183098733425140380859375)), _572 * ((_574 * (_328 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[18].x)));
    float _582 = fma(_326, _346, fma(_334, _570 * ((_318 * fp_c5_1._m0[5].y) * fma((_268 + fma(_295, -_268, _295)) * _306, fp_c1_1._m0[0].w, _308 * 0.3183098733425140380859375)), _572 * ((_574 * (_330 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[18].x)));
    float _584 = fma(_326, _348, fma(_334, _570 * ((_318 * fp_c5_1._m0[5].z) * fma((_270 + fma(_295, -_270, _295)) * _306, fp_c1_1._m0[0].w, _312 * 0.3183098733425140380859375)), _572 * ((_574 * (_332 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[18].x)));
    float _586 = clamp(fma(fma(_254, fp_c5_1._m0[14].z, fma(_558, fp_c5_1._m0[14].y, _248 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _588 = fma((-_580) + fp_c5_1._m0[13].x, _586, _580);
    float _590 = fma((-_582) + fp_c5_1._m0[13].y, _586, _582);
    float _592 = fma((-_584) + fp_c5_1._m0[13].z, _586, _584);
    float _594 = clamp((-exp2((clamp(fma(sqrt(_566), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _87.x = fma((-_588) + fma(fma((_578 * fp_c7_1._m0[55].x) * _576, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _594, _588);
    _87.y = fma((-_590) + fma(fma((_578 * fp_c7_1._m0[55].y) * _576, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _594, _590);
    _87.z = fma((-_592) + fma(fma((_578 * fp_c7_1._m0[55].z) * _576, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _594, _592);
    _87.w = 1.0;
}


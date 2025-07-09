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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

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
layout(binding = 9) uniform sampler2D fp_tex_tcb_20;
layout(binding = 10) uniform sampler2D fp_tex_tcb_28;
layout(binding = 11) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 12) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 13) uniform sampler2D fp_tex_tcb_38;
layout(binding = 14) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _74;
layout(location = 1) in vec4 _76;
layout(location = 2) in vec4 _78;
layout(location = 4) in vec4 _80;
layout(location = 6) in vec4 _82;
layout(location = 5) in vec4 _84;
layout(location = 3) in vec4 _86;
layout(location = 0) out vec4 _89;
uint _6[12];

void main()
{
    bool _362 = false;
    float _96 = _74.x;
    float _98 = _74.y;
    vec2 _102 = texture(fp_tex_tcb_E, vec2(_96, _98)).xy;
    float _104 = _102.x;
    float _106 = _102.y;
    float _108 = _76.x;
    float _110 = _76.y;
    float _112 = _76.z;
    float _114 = _78.y;
    float _116 = _78.z;
    float _118 = _78.x;
    float _120 = _78.w;
    float _122 = _80.x;
    float _124 = _80.y;
    float _126 = _80.z;
    float _128 = inversesqrt(fma(_112, _112, fma(_110, _110, _108 * _108)));
    float _130 = _112 * _128;
    float _132 = _108 * _128;
    float _134 = _110 * _128;
    float _136 = sqrt(clamp((-fma(_104, _104, _106 * _106)) + 1.0, 0.0, 1.0));
    float _138 = fma(_134, _136, fma(_104, _114, _106 * (fma(_130, _118, -(_132 * _116)) * _120)));
    float _140 = fma(_130, _136, fma(_104, _116, _106 * (fma(_132, _114, -(_134 * _118)) * _120)));
    float _142 = fma(_132, _136, fma(_104, _118, _106 * (fma(_134, _116, -(_130 * _114)) * _120)));
    float _144 = inversesqrt(fma(_126, _126, fma(_124, _124, _122 * _122)));
    float _146 = 1.0 / (_82.z * gl_FragCoord.w);
    float _148 = _122 * (-_144);
    float _150 = inversesqrt(fma(_140, _140, fma(_138, _138, _142 * _142)));
    float _152 = _124 * (-_144);
    float _154 = _126 * (-_144);
    float _156 = max(texture(fp_tex_tcb_10, vec2(_96, _98)).x, fp_c1_1._m0[0].y);
    float _158 = _142 * _150;
    float _160 = _138 * _150;
    float _162 = _140 * _150;
    float _164 = 1.0 / _84.w;
    float _166 = fma(_162, _154, fma(_160, _152, _158 * _148));
    float _168 = fma(_158 * (-_166), -2.0, -_148);
    float _170 = fma(_160 * (-_166), -2.0, -_152);
    float _172 = fma(_162 * (-_166), -2.0, -_154);
    float _174 = 1.0 / max(abs(_172), max(abs(_168), abs(_170)));
    vec2 _176 = texture(fp_tex_tcb_2A, vec2(fma(_84.x * _164, 0.5, 0.5), fma(_84.y * _164, -0.5, 0.5))).xy;
    float _178 = texture(fp_tex_tcb_1A, vec2(_96, _98)).x;
    vec3 _182 = texture(fp_tex_tcb_A, vec2(_96, _98)).xyz;
    float _184 = _182.x;
    float _186 = _182.y;
    float _188 = _182.z;
    float _190 = texture(fp_tex_tcb_12, vec2(_96, _98)).x;
    float _192 = max(_166, fp_c1_1._m0[0].w);
    vec2 _194 = texture(fp_tex_tcb_38, vec2(_192, (-_156) + (-0.0))).xy;
    float _196 = _194.x;
    float _198 = _194.y;
    vec3 _200 = texture(fp_tex_tcb_36, vec4(_168 * _174, _170 * _174, _172 * _174, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_156 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _202 = texture(fp_tex_tcb_16, vec2(_96, _98)).xyz;
    vec3 _204 = texture(fp_tex_tcb_14, vec2(_96, _98)).xyz;
    float _206 = fma(_156, 0.5, 0.5);
    float _208 = (_206 * 0.5) * _206;
    float _210 = clamp(_86.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _212 = _148 + (-fp_c5_1._m0[23].x);
    float _214 = (-_176.y) + 1.0;
    float _216 = (-texture(fp_tex_tcb_20, vec2(_96, _98)).x) + 1.0;
    float _218 = _214 * _210;
    float _220 = clamp((exp2(log2(clamp(max(_166, fp_c1_1._m0[0].x) + (-0.0), 0.0, 1.0)) * fp_c6_1._m0[43].x) * fp_c6_1._m0[43].y) * _178, 0.0, 1.0) * _216;
    float _222 = clamp(texture(fp_tex_tcb_18, vec2(_96, _98)).x + (-0.0), 0.0, 1.0);
    float _224 = clamp((-fma(_210, max((-_176.x) + 1.0, _214), fma(texture(fp_tex_tcb_28, vec2((_82.x * gl_FragCoord.w) * _146, (_82.y * gl_FragCoord.w) * _146)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _226 = fma(_132 + (-_158), _220, _158);
    float _228 = fma(_134 + (-_160), _220, _160);
    float _230 = fma(_130 + (-_162), _220, _162);
    float _232 = _226 * _228;
    float _234 = _228 * _230;
    float _236 = _230 * _230;
    float _238 = _152 + (-fp_c5_1._m0[23].y);
    float _240 = _154 + (-fp_c5_1._m0[23].z);
    float _242 = _226 * _230;
    float _244 = _86.z;
    float _246 = _86.x;
    float _248 = inversesqrt(fma(_240, _240, fma(_238, _238, _212 * _212)));
    float _250 = fma(_226, _226, -(_228 * _228));
    float _252 = clamp(texture(fp_tex_tcb_C, vec2(_96, _98)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _254 = _212 * _248;
    float _256 = _238 * _248;
    float _258 = _240 * _248;
    float _260 = fma((-_186) + fp_c6_1._m0[93].y, _252, _186);
    float _262 = fma((-_184) + fp_c6_1._m0[93].x, _252, _184);
    float _264 = _156 * _156;
    float _266 = 1.0 / (_208 + fma(_192, -_208, _192));
    float _268 = fma((-_188) + fp_c6_1._m0[93].z, _252, _188);
    float _270 = _264 * _264;
    float _272 = fma(_160, -fp_c5_1._m0[23].y, _158 * (-fp_c5_1._m0[23].x));
    float _274 = max(fma(_162, _258, fma(_160, _256, _158 * _254)), fp_c1_1._m0[0].w) * max(fma(_162, _258, fma(_160, _256, _158 * _254)), fp_c1_1._m0[0].w);
    float _276 = fma(_190, _262 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _278 = clamp(fma(_162, -fp_c5_1._m0[23].z, _272), 0.0, 1.0);
    float _280 = max(fma(_162, -fp_c5_1._m0[23].z, _272), fp_c1_1._m0[0].w);
    int _283 = max(0, min(int(trunc((_244 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _285 = max(fma(_154, _258, fma(_152, _256, _148 * _254)), fp_c1_1._m0[0].w);
    float _287 = fma(_260, -_190, _260);
    uint _290 = uint(int(uint((((int(uint(_283) >> uint(16)) * 20) << 16) + (((_283 & 65535) * 20) + max(0, min(int(trunc((_246 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _292 = fp_c10_1._m0[int(uint(int(_290)) >> uint(2))][int(_290) & 3];
    float _294 = _178 * fp_c6_1._m0[18].x;
    float _296 = fma(_190, _260 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _298 = exp2(_285 * fma(_285, fp_c1_1._m0[1].x, -6.9831600189208984375));
    float _300 = (_266 * (1.0 / (_208 + fma(_208, -_280, _280)))) * ((_264 * (1.0 / max(fma(_274, _270, -_274) + 1.0, fp_c1_1._m0[0].w))) * (_264 * (1.0 / max(fma(_274, _270, -_274) + 1.0, fp_c1_1._m0[0].w))));
    float _302 = fma(_262, -_190, _262);
    float _304 = fma(_220, (-_287) + fp_c6_1._m0[44].y, _287);
    float _306 = fma(_220, -_294, _294);
    float _308 = fma(_220, (-_302) + fp_c6_1._m0[44].x, _302);
    float _310 = fma(_190, _268 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _312 = fma(_268, -_190, _268);
    float _314 = fma(_220, (-_312) + fp_c6_1._m0[44].z, _312);
    float _316 = fma(_200.x, fma(_276, _196, _198), max(0.0, fma(_250, fp_c5_1._m0[31].x, (fma(_230, fp_c5_1._m0[25].z, fma(_228, fp_c5_1._m0[25].y, _226 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_242, fp_c5_1._m0[28].w, fma(_236, fp_c5_1._m0[28].z, fma(_234, fp_c5_1._m0[28].y, _232 * fp_c5_1._m0[28].x))))) * fma(_308, -_276, _308));
    float _318 = _260 * (_202.y * fp_c6_1._m0[19].y);
    float _320 = _262 * (_202.x * fp_c6_1._m0[19].x);
    float _322 = _268 * (_202.z * fp_c6_1._m0[19].z);
    float _324 = fma(_200.y, fma(_296, _196, _198), max(0.0, fma(_250, fp_c5_1._m0[31].y, (fma(_230, fp_c5_1._m0[26].z, fma(_228, fp_c5_1._m0[26].y, _226 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_242, fp_c5_1._m0[29].w, fma(_236, fp_c5_1._m0[29].z, fma(_234, fp_c5_1._m0[29].y, _232 * fp_c5_1._m0[29].x))))) * fma(_304, -_296, _304));
    float _326 = fma(_200.z, fma(_310, _196, _198), max(0.0, fma(_250, fp_c5_1._m0[31].z, (fma(_230, fp_c5_1._m0[27].z, fma(_228, fp_c5_1._m0[27].y, _226 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_242, fp_c5_1._m0[30].w, fma(_236, fp_c5_1._m0[30].z, fma(_234, fp_c5_1._m0[30].y, _232 * fp_c5_1._m0[30].x))))) * fma(_314, -_310, _314));
    int _328 = floatBitsToInt(_292);
    float _330 = _316;
    float _332 = _324;
    float _334 = _326;
    float _336 = _324;
    float _338 = _316;
    float _340 = _326;
    if (floatBitsToInt(_292) != (-1))
    {
        float _342 = 1.0 / fp_c6_1._m0[18].y;
        float _344 = clamp((-_306) + 1.0, 0.0, 1.0);
        float _346 = clamp(fma(_218, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _348 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _350 = 0;
        float _354;
        float _356;
        float _358;
        int _448;
        do
        {
            int _352 = _328 & 255;
            _354 = _330;
            _356 = _332;
            _358 = _334;
            _362 = uint(_352) >= 30u;
            if (_362)
            {
                break;
            }
            int _364 = _352 << 4;
            uint _366 = uint(int(uint(_364 + 7360) >> uint(2)));
            int _368 = int(_366) + 1;
            uint _370 = uint(int(uint(_364 + 7368) >> uint(2)));
            float _372 = (-_246) + fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3];
            float _374 = fp_c10_1._m0[int(uint(_368) >> uint(2))][_368 & 3] + (-_86.y);
            float _376 = (-_244) + fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3];
            float _378 = fma(_376, _376, fma(_374, _374, _372 * _372));
            float _380 = _372 * inversesqrt(_378);
            float _382 = _374 * inversesqrt(_378);
            float _384 = _376 * inversesqrt(_378);
            float _386 = _148 + _380;
            float _388 = _152 + _382;
            float _390 = _154 + _384;
            uint _392 = uint(int(uint(_364 + 6880) >> uint(2)));
            int _394 = int(_392) + 1;
            float _396 = inversesqrt(fma(_390, _390, fma(_388, _388, _386 * _386)));
            float _398 = _386 * _396;
            float _400 = _388 * _396;
            float _402 = _390 * _396;
            float _404 = fma(_162, _384, fma(_160, _382, _158 * _380));
            uint _406 = uint(int(uint(_364 + 8320) >> uint(2)));
            float _408 = max(fma(_162, _402, fma(_160, _400, _158 * _398)), fp_c1_1._m0[0].w) * max(fma(_162, _402, fma(_160, _400, _158 * _398)), fp_c1_1._m0[0].w);
            float _410 = max(fma(_154, _402, fma(_152, _400, _148 * _398)), fp_c1_1._m0[0].w);
            float _412 = max(_404, fp_c1_1._m0[0].w);
            uint _414 = uint(int(uint(_364 + 6408) >> uint(2)));
            int _416 = int(_414) + 1;
            float _418 = fp_c10_1._m0[int(uint(_394) >> uint(2))][_394 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3], -sqrt(_378), fp_c1_1._m0[1].z), 0.0, 1.0));
            uint _420 = uint(int(uint(_364 + 6400) >> uint(2)));
            int _422 = int(_420) + 1;
            float _424 = exp2(_410 * fma(_410, fp_c1_1._m0[1].x, -6.9831600189208984375));
            bool _426 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_406)) >> uint(2))][int(_406) & 3]) != 0;
            float _428 = (_266 * (1.0 / (_208 + fma(_208, -_412, _412)))) * ((_264 * (1.0 / max(fma(_270, _408, -_408) + 1.0, fp_c1_1._m0[0].w))) * (_264 * (1.0 / max(fma(_270, _408, -_408) + 1.0, fp_c1_1._m0[0].w))));
            float _430 = _418;
            if (!_426)
            {
                _430 = 1.0;
            }
            float _432 = _430;
            if (_426)
            {
                uint _434 = uint(int(uint(_364 + 7840) >> uint(2)));
                int _436 = int(_434) + 1;
                uint _438 = uint(int(uint(_364 + 7848) >> uint(2)));
                uint _440 = uint(int(uint(_364 + 6888) >> uint(2)));
                float _442 = fp_c10_1._m0[int(uint(int(_440)) >> uint(2))][int(_440) & 3];
                int _444 = int(_440) + 1;
                _432 = exp2(fp_c10_1._m0[int(uint(_444) >> uint(2))][_444 & 3] * log2(clamp(((-_442) + fma(_384, -fp_c10_1._m0[int(uint(int(_438)) >> uint(2))][int(_438) & 3], fma(_382, -fp_c10_1._m0[int(uint(_436) >> uint(2))][_436 & 3], _380 * (-fp_c10_1._m0[int(uint(int(_434)) >> uint(2))][int(_434) & 3])))) * (1.0 / ((-_442) + 1.0)), 0.0, 1.0)));
            }
            float _446 = exp2(_418) * _432;
            _448 = _350 + 1;
            float _450 = fp_c10_1._m0[int(uint(_416) >> uint(2))][_416 & 3] * _446;
            float _452 = clamp(_404 + (-0.0), 0.0, 1.0) * _446;
            float _454 = _216 * (fma(_348, fp_c1_1._m0[1].w, exp2(_342 * log2(clamp(max(fma(_154, -_384, fma(_152, -_382, _148 * (-_380))), fp_c1_1._m0[0].x) + (-0.0), 0.0, 1.0))) * _348) + 0.20000000298023223876953125);
            float _456 = _330 + fma((fp_c10_1._m0[int(uint(int(_420)) >> uint(2))][int(_420) & 3] * _452) * fma(_308, fp_c1_1._m0[2].x, ((_276 + fma(_276, -_424, _424)) * _428) * 0.079577468335628509521484375), _344, _346 * (_306 * ((_320 * _450) * _454)));
            float _458 = _332 + fma((fp_c10_1._m0[int(uint(_422) >> uint(2))][_422 & 3] * _452) * fma(_304, fp_c1_1._m0[2].x, ((_296 + fma(_296, -_424, _424)) * _428) * 0.079577468335628509521484375), _344, _346 * (_306 * ((_318 * _450) * _454)));
            float _460 = _334 + fma((fp_c10_1._m0[int(uint(int(_414)) >> uint(2))][int(_414) & 3] * _452) * fma(_314, fp_c1_1._m0[2].x, ((_310 + fma(_310, -_424, _424)) * _428) * 0.079577468335628509521484375), _344, _346 * (_306 * ((_322 * _450) * _454)));
            _328 = int(uint(_328) >> uint(8));
            _350 = _448;
            _330 = _456;
            _332 = _458;
            _334 = _460;
            _354 = _456;
            _356 = _458;
            _358 = _460;
        } while (!(_448 >= 4));
        _362 = false;
        _336 = _356;
        _338 = _354;
        _340 = _358;
        if ((_328 & 255) == 30)
        {
            float _462 = _86.y;
            float _464 = 1.0 / (fma(_244, fp_c10_1._m0[565].z, fma(_462, fp_c10_1._m0[565].y, _246 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _466 = 1.0 / fp_c10_1._m0[561].y;
            float _468 = _246 + (-fp_c10_1._m0[557].x);
            float _470 = _244 + (-fp_c10_1._m0[557].z);
            float _472 = _468 * fp_c10_1._m0[558].z;
            float _474 = _470 * fp_c10_1._m0[558].x;
            float _476 = (-_246) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_466, fp_c10_1._m0[557].x);
            float _478 = (-_244) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_466, fp_c10_1._m0[557].z);
            float _480 = _476 * _476;
            float _482 = fma(_470, _470, _468 * _468);
            float _484 = ((-float(_474 < _472)) + float(_474 > _472)) * fp_c10_1._m0[561].y;
            float _486 = sqrt(fma(_478, _478, _480)) * (-fp_c10_1._m0[558].y);
            float _488 = inversesqrt(fma(_478, _478, fma(_486, _486, _480)));
            float _490 = fma(_470, fp_c10_1._m0[558].z, _468 * fp_c10_1._m0[558].x);
            bool _492 = _490 > 0.0;
            float _494 = _476 * _488;
            float _496 = _486 * _488;
            float _498 = _478 * _488;
            float _500 = _148 + _494;
            float _502 = _152 + _496;
            float _504 = _154 + _498;
            float _506 = inversesqrt(fma(_504, _504, fma(_502, _502, _500 * _500)));
            float _508 = _500 * _506;
            float _510 = _502 * _506;
            float _512 = _504 * _506;
            float _514 = fma(_162, _498, fma(_160, _496, _158 * _494));
            float _516 = inversesqrt(fma(_498, _498, _494 * _494));
            float _518 = _516;
            if (_492)
            {
                _518 = sqrt(_482);
            }
            float _520 = _518;
            if (!_492)
            {
                _520 = 1.0;
            }
            bool _522 = fma(_470 * inversesqrt(_482), fp_c10_1._m0[558].z, (_468 * inversesqrt(_482)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _524 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_468, fma(_484, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_470 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_484 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_468, fma(_484, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_470 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_484 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _526 = max(fma(_162, _512, fma(_160, _510, _158 * _508)), fp_c1_1._m0[0].w) * max(fma(_162, _512, fma(_160, _510, _158 * _508)), fp_c1_1._m0[0].w);
            float _528 = max(fma(_154, _512, fma(_152, _510, _148 * _508)), fp_c1_1._m0[0].w);
            float _530 = max(_514, fp_c1_1._m0[0].w);
            float _532 = clamp(fma(_490 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0) * clamp(fma(_490 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0);
            float _534 = _532;
            if (!_522)
            {
                _534 = 1.0;
            }
            float _536 = _534;
            if (_522)
            {
                _536 = fma(_524, -_524, fp_c1_1._m0[1].z) * fma(_524, -_524, fp_c1_1._m0[1].z);
            }
            float _538 = exp2(_528 * fma(_528, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _540 = (exp2(log2(clamp(fma(_520, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_498 * _516, -fp_c10_1._m0[558].z, (_494 * _516) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_532, -_532, fp_c1_1._m0[1].z) * fma(_532, -_532, fp_c1_1._m0[1].z), _536);
            float _542 = _540 * clamp(_514 + (-0.0), 0.0, 1.0);
            float _544 = (_266 * (1.0 / (_208 + fma(_208, -_530, _530)))) * ((_264 * (1.0 / max(fma(_270, _526, -_526) + 1.0, fp_c1_1._m0[0].w))) * (_264 * (1.0 / max(fma(_270, _526, -_526) + 1.0, fp_c1_1._m0[0].w))));
            float _546 = _216 * (fma(_348, fp_c1_1._m0[1].w, _348 * exp2(_342 * log2(clamp(max(fma(_154, -_498, fma(_152, -_496, _148 * (-_494))), fp_c1_1._m0[0].x) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
            float _548 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_244, fp_c10_1._m0[562].z, fma(_462, fp_c10_1._m0[562].y, _246 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _464, 0.5, 0.5), (-fma((fma(_244, fp_c10_1._m0[563].z, fma(_462, fp_c10_1._m0[563].y, _246 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _464, 0.5, 0.5)) + 1.0)).z > fma((fma(_244, fp_c10_1._m0[564].z, fma(_462, fp_c10_1._m0[564].y, _246 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _464, 0.5, 0.5)) || (_490 <= 0.0));
            _336 = fma(fma(_344, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _542) * fma(_304, fp_c1_1._m0[2].x, (_544 * (_296 + fma(_296, -_538, _538))) * 0.079577468335628509521484375), _346 * (_306 * (_546 * (_318 * _540)))), _548, _356);
            _338 = fma(fma(_344, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _542) * fma(_308, fp_c1_1._m0[2].x, (_544 * (_276 + fma(_276, -_538, _538))) * 0.079577468335628509521484375), _346 * (_306 * (_546 * (_320 * _540)))), _548, _354);
            _340 = fma(fma(_344, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _542) * fma(_314, fp_c1_1._m0[2].x, (_544 * (_310 + fma(_310, -_538, _538))) * 0.079577468335628509521484375), _346 * (_306 * (_546 * (_322 * _540)))), _548, _358);
        }
    }
    float _550 = _86.y;
    float _552 = _246 + (-fp_c3_1._m0[11].w);
    float _554 = _244 + (-fp_c3_1._m0[13].w);
    float _556 = clamp((-_306) + 1.0, 0.0, 1.0);
    float _558 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
    float _560 = _550 + (-fp_c3_1._m0[12].w);
    float _562 = fma(_554, _554, fma(_560, _560, _552 * _552));
    float _564 = clamp(fma(_218, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _566 = _216 * (fma(_558, fp_c1_1._m0[1].w, _558 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_154, fp_c5_1._m0[23].z, fma(_152, fp_c5_1._m0[23].y, _148 * fp_c5_1._m0[23].x)), fp_c1_1._m0[0].x) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _568 = clamp(fma(_222 * _224, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _570 = exp2(log2(clamp(sqrt(_562) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_554 * inversesqrt(_562), fp_c5_1._m0[23].z, fma(_560 * inversesqrt(_562), fp_c5_1._m0[23].y, (_552 * inversesqrt(_562)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _572 = clamp(fma(fma(_244, fp_c5_1._m0[14].z, fma(_550, fp_c5_1._m0[14].y, _246 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _574 = fma(_204.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_222, _338, fma(_224, _556 * (fma(_300 * (_276 + fma(_276, -_298, _298)), fp_c1_1._m0[1].y, _308 * 0.3183098733425140380859375) * (_278 * fp_c5_1._m0[5].x)), _564 * (_306 * (_566 * (_320 * fp_c5_1._m0[5].w))))));
    float _576 = fma(_204.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_222, _336, fma(_224, _556 * (fma(_300 * (_296 + fma(_296, -_298, _298)), fp_c1_1._m0[1].y, _304 * 0.3183098733425140380859375) * (_278 * fp_c5_1._m0[5].y)), _564 * (_306 * (_566 * (_318 * fp_c5_1._m0[5].w))))));
    float _578 = fma(_204.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_222, _340, fma(_224, _556 * (fma(_300 * (_310 + fma(_310, -_298, _298)), fp_c1_1._m0[1].y, _314 * 0.3183098733425140380859375) * (_278 * fp_c5_1._m0[5].z)), _564 * (_306 * (_566 * (_322 * fp_c5_1._m0[5].w))))));
    float _580 = fma((-_574) + fp_c5_1._m0[13].x, _572, _574);
    float _582 = fma((-_576) + fp_c5_1._m0[13].y, _572, _576);
    float _584 = fma((-_578) + fp_c5_1._m0[13].z, _572, _578);
    float _586 = clamp((-exp2((clamp(fma(sqrt(_562), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _89.x = fma((-_580) + fma(fma((_570 * fp_c7_1._m0[55].x) * _568, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _586, _580);
    _89.y = fma((-_582) + fma(fma((_570 * fp_c7_1._m0[55].y) * _568, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _586, _582);
    _89.z = fma((-_584) + fma(fma((_570 * fp_c7_1._m0[55].z) * _568, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _586, _584);
    _89.w = 1.0;
}


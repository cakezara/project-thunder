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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
layout(binding = 5) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 4) in vec4 _72;
layout(location = 6) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 3) in vec4 _78;
layout(location = 0) out vec4 _81;
uint _6[12];

void main()
{
    bool _310 = false;
    float _88 = _66.x;
    float _90 = _66.y;
    vec2 _94 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _96 = _94.x;
    float _98 = _94.y;
    float _100 = _68.x;
    float _102 = _68.y;
    float _104 = _68.z;
    float _106 = _70.y;
    float _108 = _70.z;
    float _110 = _70.x;
    float _112 = _70.w;
    float _114 = _72.x;
    float _116 = _72.y;
    float _118 = _72.z;
    float _120 = inversesqrt(fma(_104, _104, fma(_102, _102, _100 * _100)));
    float _122 = _104 * _120;
    float _124 = _100 * _120;
    float _126 = _102 * _120;
    float _128 = sqrt(clamp((-fma(_96, _96, _98 * _98)) + 1.0, 0.0, 1.0));
    float _130 = fma(_124, _128, fma(_96, _110, _98 * (fma(_126, _108, -(_122 * _106)) * _112)));
    float _132 = fma(_126, _128, fma(_96, _106, _98 * (fma(_122, _110, -(_124 * _108)) * _112)));
    float _134 = fma(_122, _128, fma(_96, _108, _98 * (fma(_124, _106, -(_126 * _110)) * _112)));
    float _136 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _138 = _114 * (-_136);
    float _140 = inversesqrt(fma(_134, _134, fma(_132, _132, _130 * _130)));
    float _142 = _116 * (-_136);
    float _144 = 1.0 / (_74.z * gl_FragCoord.w);
    float _146 = _118 * (-_136);
    float _148 = 1.0 / _76.w;
    float _150 = _130 * _140;
    float _152 = _132 * _140;
    float _154 = _134 * _140;
    float _156 = fma(_154, _146, fma(_152, _142, _150 * _138));
    float _158 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _160 = max(_156, fp_c1_1._m0[0].y);
    float _162 = fma(_150 * (-_156), -2.0, -_138);
    float _164 = fma(_152 * (-_156), -2.0, -_142);
    float _166 = fma(_154 * (-_156), -2.0, -_146);
    float _168 = 1.0 / max(abs(_166), max(abs(_162), abs(_164)));
    vec2 _170 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _148, 0.5, 0.5), fma(_76.y * _148, -0.5, 0.5))).xy;
    vec3 _174 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _176 = _174.x;
    float _178 = _174.y;
    float _180 = _174.z;
    vec2 _182 = texture(fp_tex_tcb_38, vec2(_160, (-_158) + (-0.0))).xy;
    float _184 = _182.x;
    float _186 = _182.y;
    vec3 _188 = texture(fp_tex_tcb_36, vec4(_162 * _168, _164 * _168, _166 * _168, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_158 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _190 = texture(fp_tex_tcb_14, vec2(_88, _90)).xyz;
    vec3 _192 = texture(fp_tex_tcb_1C, vec2(_88, _90)).xyz;
    float _194 = _138 + (-fp_c5_1._m0[23].x);
    float _196 = _142 + (-fp_c5_1._m0[23].y);
    float _198 = _146 + (-fp_c5_1._m0[23].z);
    float _200 = _78.x;
    float _202 = _78.z;
    float _204 = _152 * _154;
    float _206 = _150 * _152;
    float _208 = inversesqrt(fma(_198, _198, fma(_196, _196, _194 * _194)));
    float _210 = _154 * _154;
    float _212 = _194 * _208;
    float _214 = _196 * _208;
    float _216 = _198 * _208;
    float _218 = _150 * _154;
    float _220 = max(fma(_146, _216, fma(_142, _214, _138 * _212)), fp_c1_1._m0[0].y);
    float _222 = fma(_150, _150, -(_152 * _152));
    float _224 = _158 * _158;
    float _226 = fma(_158, 0.5, 0.5);
    float _228 = (_226 * 0.5) * _226;
    float _230 = fma(_152, -fp_c5_1._m0[23].y, _150 * (-fp_c5_1._m0[23].x));
    int _233 = max(0, min(int(trunc((_202 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _235 = max(fma(_154, _216, fma(_152, _214, _150 * _212)), fp_c1_1._m0[0].y) * max(fma(_154, _216, fma(_152, _214, _150 * _212)), fp_c1_1._m0[0].y);
    float _237 = _224 * _224;
    float _239 = clamp(texture(fp_tex_tcb_C, vec2(_88, _90)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _241 = clamp(fma(_154, -fp_c5_1._m0[23].z, _230), 0.0, 1.0);
    float _243 = max(fma(_154, -fp_c5_1._m0[23].z, _230), fp_c1_1._m0[0].y);
    float _245 = fma((-_176) + fp_c6_1._m0[92].x, _239, _176);
    uint _248 = uint(int(uint((((int(uint(_233) >> uint(16)) * 20) << 16) + (((_233 & 65535) * 20) + max(0, min(int(trunc((_200 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _250 = fp_c10_1._m0[int(uint(int(_248)) >> uint(2))][int(_248) & 3];
    float _252 = 1.0 / (_228 + fma(_160, -_228, _160));
    float _254 = fma((-_178) + fp_c6_1._m0[92].y, _239, _178);
    float _256 = fma((-_180) + fp_c6_1._m0[92].z, _239, _180);
    float _258 = exp2(_220 * fma(_220, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _260 = fma(_245 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _262 = fma(_254 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _264 = fma(_256 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _266 = fma(_245, -fp_c6_1._m0[9].x, _245);
    float _268 = fma(_256, -fp_c6_1._m0[9].x, _256);
    float _270 = (_252 * (1.0 / (_228 + fma(_228, -_243, _243)))) * ((_224 * (1.0 / max(fma(_235, _237, -_235) + 1.0, fp_c1_1._m0[0].y))) * (_224 * (1.0 / max(fma(_235, _237, -_235) + 1.0, fp_c1_1._m0[0].y))));
    float _272 = fma(_254, -fp_c6_1._m0[9].x, _254);
    float _274 = fma(_188.x, fma(_260, _184, _186), max(0.0, fma(_222, fp_c5_1._m0[31].x, (fma(_154, fp_c5_1._m0[25].z, fma(_152, fp_c5_1._m0[25].y, _150 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_218, fp_c5_1._m0[28].w, fma(_210, fp_c5_1._m0[28].z, fma(_204, fp_c5_1._m0[28].y, _206 * fp_c5_1._m0[28].x))))) * fma(_266, -_260, _266));
    float _276 = fma(_188.z, fma(_264, _184, _186), max(0.0, fma(_222, fp_c5_1._m0[31].z, (fma(_154, fp_c5_1._m0[27].z, fma(_152, fp_c5_1._m0[27].y, _150 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_218, fp_c5_1._m0[30].w, fma(_210, fp_c5_1._m0[30].z, fma(_204, fp_c5_1._m0[30].y, _206 * fp_c5_1._m0[30].x))))) * fma(_268, -_264, _268));
    float _278 = clamp((-fma(max((-_170.x) + 1.0, (-_170.y) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_74.x * gl_FragCoord.w) * _144, (_74.y * gl_FragCoord.w) * _144)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _280 = fma(_188.y, fma(_262, _184, _186), max(0.0, fma(_222, fp_c5_1._m0[31].y, (fma(_154, fp_c5_1._m0[26].z, fma(_152, fp_c5_1._m0[26].y, _150 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_218, fp_c5_1._m0[29].w, fma(_210, fp_c5_1._m0[29].z, fma(_204, fp_c5_1._m0[29].y, _206 * fp_c5_1._m0[29].x))))) * fma(_272, -_262, _272));
    int _282 = floatBitsToInt(_250);
    float _284 = _280;
    float _286 = _276;
    float _288 = _274;
    float _290 = _150;
    float _292 = _274;
    float _294 = _280;
    float _296 = _276;
    if (floatBitsToInt(_250) != (-1))
    {
        int _298 = 0;
        float _302;
        float _304;
        float _306;
        int _392;
        do
        {
            int _300 = _282 & 255;
            _302 = _288;
            _304 = _284;
            _306 = _286;
            _310 = uint(_300) >= 30u;
            if (_310)
            {
                break;
            }
            int _312 = _300 << 4;
            uint _314 = uint(int(uint(_312 + 7360) >> uint(2)));
            int _316 = int(_314) + 1;
            uint _318 = uint(int(uint(_312 + 7368) >> uint(2)));
            float _320 = (-_200) + fp_c10_1._m0[int(uint(int(_314)) >> uint(2))][int(_314) & 3];
            float _322 = fp_c10_1._m0[int(uint(_316) >> uint(2))][_316 & 3] + (-_78.y);
            float _324 = (-_202) + fp_c10_1._m0[int(uint(int(_318)) >> uint(2))][int(_318) & 3];
            float _326 = fma(_324, _324, fma(_322, _322, _320 * _320));
            float _328 = _320 * inversesqrt(_326);
            float _330 = _322 * inversesqrt(_326);
            float _332 = _324 * inversesqrt(_326);
            float _334 = _138 + _328;
            float _336 = _142 + _330;
            float _338 = _146 + _332;
            float _340 = inversesqrt(fma(_338, _338, fma(_336, _336, _334 * _334)));
            float _342 = _334 * _340;
            float _344 = _336 * _340;
            float _346 = _338 * _340;
            uint _348 = uint(int(uint(_312 + 6880) >> uint(2)));
            int _350 = int(_348) + 1;
            uint _352 = uint(int(uint(_312 + 8320) >> uint(2)));
            float _354 = max(fma(_146, _346, fma(_142, _344, _138 * _342)), fp_c1_1._m0[0].y);
            float _356 = fma(_154, _332, fma(_152, _330, _150 * _328));
            float _358 = max(fma(_154, _346, fma(_152, _344, _150 * _342)), fp_c1_1._m0[0].y) * max(fma(_154, _346, fma(_152, _344, _150 * _342)), fp_c1_1._m0[0].y);
            float _360 = max(_356, fp_c1_1._m0[0].y);
            uint _362 = uint(int(uint(_312 + 6408) >> uint(2)));
            uint _364 = uint(int(uint(_312 + 6400) >> uint(2)));
            int _366 = int(_364) + 1;
            float _368 = exp2(_354 * fma(_354, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _370 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_352)) >> uint(2))][int(_352) & 3]) != 0;
            float _372 = fp_c10_1._m0[int(uint(_350) >> uint(2))][_350 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_348)) >> uint(2))][int(_348) & 3], -sqrt(_326), fp_c1_1._m0[1].x), 0.0, 1.0));
            float _374 = (_252 * (1.0 / (_228 + fma(_228, -_360, _360)))) * ((_224 * (1.0 / max(fma(_237, _358, -_358) + 1.0, fp_c1_1._m0[0].y))) * (_224 * (1.0 / max(fma(_237, _358, -_358) + 1.0, fp_c1_1._m0[0].y))));
            float _376 = _372;
            if (!_370)
            {
                _376 = 1.0;
            }
            float _378 = _376;
            if (_370)
            {
                uint _380 = uint(int(uint(_312 + 7840) >> uint(2)));
                int _382 = int(_380) + 1;
                uint _384 = uint(int(uint(_312 + 6888) >> uint(2)));
                float _386 = fp_c10_1._m0[int(uint(int(_384)) >> uint(2))][int(_384) & 3];
                int _388 = int(_384) + 1;
                uint _390 = uint(int(uint(_312 + 7848) >> uint(2)));
                _378 = exp2(fp_c10_1._m0[int(uint(_388) >> uint(2))][_388 & 3] * log2(clamp(((-_386) + fma(_332, -fp_c10_1._m0[int(uint(int(_390)) >> uint(2))][int(_390) & 3], fma(_330, -fp_c10_1._m0[int(uint(_382) >> uint(2))][_382 & 3], _328 * (-fp_c10_1._m0[int(uint(int(_380)) >> uint(2))][int(_380) & 3])))) * (1.0 / ((-_386) + 1.0)), 0.0, 1.0)));
            }
            _392 = _298 + 1;
            float _394 = (exp2(_372) * _378) * clamp(_356 + (-0.0), 0.0, 1.0);
            float _396 = fma(fp_c10_1._m0[int(uint(_366) >> uint(2))][_366 & 3] * _394, fma(_272, fp_c1_1._m0[1].y, ((_262 + fma(_262, -_368, _368)) * _374) * 0.079577468335628509521484375), _284);
            float _398 = fma(fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3] * _394, fma(_268, fp_c1_1._m0[1].y, ((_264 + fma(_264, -_368, _368)) * _374) * 0.079577468335628509521484375), _286);
            float _400 = fma(fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3] * _394, fma(_266, fp_c1_1._m0[1].y, ((_260 + fma(_260, -_368, _368)) * _374) * 0.079577468335628509521484375), _288);
            _282 = int(uint(_282) >> uint(8));
            _298 = _392;
            _284 = _396;
            _286 = _398;
            _288 = _400;
            _302 = _400;
            _304 = _396;
            _306 = _398;
        } while (!(_392 >= 4));
        _310 = false;
        _292 = _302;
        _294 = _304;
        _296 = _306;
        if ((_282 & 255) == 30)
        {
            float _402 = _78.y;
            float _404 = 1.0 / (fma(_202, fp_c10_1._m0[565].z, fma(_402, fp_c10_1._m0[565].y, _200 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _406 = 1.0 / fp_c10_1._m0[561].y;
            float _408 = _202 + (-fp_c10_1._m0[557].z);
            float _410 = _408 * fp_c10_1._m0[558].x;
            float _412 = (-_200) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_406, fp_c10_1._m0[557].x);
            float _414 = (-_202) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_406, fp_c10_1._m0[557].z);
            float _416 = _200 + (-fp_c10_1._m0[557].x);
            float _418 = _412 * _412;
            float _420 = _416 * fp_c10_1._m0[558].z;
            float _422 = fma(_408, _408, _416 * _416);
            float _424 = sqrt(fma(_414, _414, _418)) * (-fp_c10_1._m0[558].y);
            float _426 = ((-float(_410 < _420)) + float(_410 > _420)) * fp_c10_1._m0[561].y;
            float _428 = inversesqrt(fma(_414, _414, fma(_424, _424, _418)));
            float _430 = _412 * _428;
            float _432 = _424 * _428;
            float _434 = fma(_408, fp_c10_1._m0[558].z, _416 * fp_c10_1._m0[558].x);
            float _436 = _414 * _428;
            float _438 = _138 + _430;
            float _440 = _142 + _432;
            bool _442 = _434 > 0.0;
            float _444 = inversesqrt(fma(_436, _436, _430 * _430));
            float _446 = _146 + _436;
            float _448 = fma(_154, _436, fma(_152, _432, _150 * _430));
            float _450 = inversesqrt(fma(_446, _446, fma(_440, _440, _438 * _438)));
            float _452 = _438 * _450;
            float _454 = _440 * _450;
            float _456 = _446 * _450;
            if (_442)
            {
                _290 = sqrt(_422);
            }
            float _458 = _290;
            if (!_442)
            {
                _458 = 1.0;
            }
            float _460 = max(_448, fp_c1_1._m0[0].y);
            float _462 = max(fma(_146, _456, fma(_142, _454, _138 * _452)), fp_c1_1._m0[0].y);
            float _464 = clamp(fma(_434 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_434 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            bool _466 = fma(_408 * inversesqrt(_422), fp_c10_1._m0[558].z, (_416 * inversesqrt(_422)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _468 = max(fma(_154, _456, fma(_152, _454, _150 * _452)), fp_c1_1._m0[0].y) * max(fma(_154, _456, fma(_152, _454, _150 * _452)), fp_c1_1._m0[0].y);
            float _470 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_416, fma(_426, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_408 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_426 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_416, fma(_426, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_408 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_426 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _472 = 6.9831600189208984375;
            if (!_466)
            {
                _472 = 1.0;
            }
            float _474 = _472;
            if (_466)
            {
                _474 = fma(_470, -_470, fp_c1_1._m0[1].x) * fma(_470, -_470, fp_c1_1._m0[1].x);
            }
            float _476 = exp2(_462 * fma(_462, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _478 = (min(fma(_464, -_464, fp_c1_1._m0[1].x) * fma(_464, -_464, fp_c1_1._m0[1].x), _474) * (exp2(log2(clamp(fma(_458, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_436 * _444, -fp_c10_1._m0[558].z, (_430 * _444) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_448 + (-0.0), 0.0, 1.0);
            float _480 = (_252 * (1.0 / (_228 + fma(_228, -_460, _460)))) * ((_224 * (1.0 / max(fma(_237, _468, -_468) + 1.0, fp_c1_1._m0[0].y))) * (_224 * (1.0 / max(fma(_237, _468, -_468) + 1.0, fp_c1_1._m0[0].y))));
            float _482 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_202, fp_c10_1._m0[562].z, fma(_402, fp_c10_1._m0[562].y, _200 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _404, 0.5, 0.5), (-fma((fma(_202, fp_c10_1._m0[563].z, fma(_402, fp_c10_1._m0[563].y, _200 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _404, 0.5, 0.5)) + 1.0)).z > fma((fma(_202, fp_c10_1._m0[564].z, fma(_402, fp_c10_1._m0[564].y, _200 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _404, 0.5, 0.5)) || (_434 <= 0.0));
            _292 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _478) * fma(_266, fp_c1_1._m0[1].y, ((_260 + fma(_260, -_476, _476)) * _480) * 0.079577468335628509521484375), _482, _302);
            _294 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _478) * fma(_272, fp_c1_1._m0[1].y, ((_262 + fma(_262, -_476, _476)) * _480) * 0.079577468335628509521484375), _482, _304);
            _296 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _478) * fma(_268, fp_c1_1._m0[1].y, ((_264 + fma(_264, -_476, _476)) * _480) * 0.079577468335628509521484375), _482, _306);
        }
    }
    float _484 = _200 + (-fp_c3_1._m0[11].w);
    float _486 = _202 + (-fp_c3_1._m0[13].w);
    float _488 = _78.y + (-fp_c3_1._m0[12].w);
    float _490 = fma(_486, _486, fma(_488, _488, _484 * _484));
    float _492 = exp2(log2(clamp(sqrt(_490) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_486 * inversesqrt(_490), fp_c5_1._m0[23].z, fma(_488 * inversesqrt(_490), fp_c5_1._m0[23].y, (_484 * inversesqrt(_490)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _494 = clamp(fma(_278, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _496 = fma((_192.x * (_190.x * fp_c6_1._m0[12].x)) * fp_c6_1._m0[85].x, fp_c6_1._m0[11].x, fma(_278, fma(_270 * (_260 + fma(_260, -_258, _258)), fp_c1_1._m0[0].w, _266 * 0.3183098733425140380859375) * (_241 * fp_c5_1._m0[5].x), _292));
    float _498 = fma((_192.y * (_190.y * fp_c6_1._m0[12].y)) * fp_c6_1._m0[85].x, fp_c6_1._m0[11].x, fma(_278, fma(_270 * (_262 + fma(_262, -_258, _258)), fp_c1_1._m0[0].w, _272 * 0.3183098733425140380859375) * (_241 * fp_c5_1._m0[5].y), _294));
    float _500 = fma((_192.z * (_190.z * fp_c6_1._m0[12].z)) * fp_c6_1._m0[85].x, fp_c6_1._m0[11].x, fma(_278, fma(_270 * (_264 + fma(_264, -_258, _258)), fp_c1_1._m0[0].w, _268 * 0.3183098733425140380859375) * (_241 * fp_c5_1._m0[5].z), _296));
    float _502 = clamp((-exp2((clamp(fma(sqrt(_490), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma(fma(fma((_492 * fp_c7_1._m0[55].x) * _494, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_496), _502, _496);
    _81.y = fma(fma(fma((_492 * fp_c7_1._m0[55].y) * _494, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_498), _502, _498);
    _81.z = fma(fma(fma((_492 * fp_c7_1._m0[55].z) * _494, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_500), _502, _500);
    _81.w = 1.0;
}


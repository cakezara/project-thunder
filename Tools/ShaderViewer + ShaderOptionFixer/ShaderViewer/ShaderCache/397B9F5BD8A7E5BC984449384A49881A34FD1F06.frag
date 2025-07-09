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
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_16;
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
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
    bool _328 = false;
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
    float _132 = 1.0 / (_74.z * gl_FragCoord.w);
    float _134 = fma(_126, _128, fma(_96, _106, _98 * (fma(_122, _110, -(_124 * _108)) * _112)));
    float _136 = fma(_122, _128, fma(_96, _108, _98 * (fma(_124, _106, -(_126 * _110)) * _112)));
    float _138 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _140 = _114 * (-_138);
    float _142 = inversesqrt(fma(_136, _136, fma(_134, _134, _130 * _130)));
    float _144 = _116 * (-_138);
    float _146 = _118 * (-_138);
    float _148 = _130 * _142;
    float _150 = 1.0 / _76.w;
    float _152 = _134 * _142;
    float _154 = _136 * _142;
    float _156 = fma(_154, _146, fma(_152, _144, _148 * _140));
    float _158 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _160 = fma(_148 * (-_156), -2.0, -_140);
    float _162 = fma(_152 * (-_156), -2.0, -_144);
    float _164 = fma(_154 * (-_156), -2.0, -_146);
    float _166 = max(_156, fp_c1_1._m0[0].y);
    float _168 = 1.0 / max(abs(_164), max(abs(_160), abs(_162)));
    vec2 _170 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _150, 0.5, 0.5), fma(_76.y * _150, -0.5, 0.5))).xy;
    vec3 _174 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _176 = _174.x;
    float _178 = _174.y;
    float _180 = _174.z;
    float _182 = texture(fp_tex_tcb_12, vec2(_88, _90)).x;
    vec2 _184 = texture(fp_tex_tcb_38, vec2(_166, (-_158) + (-0.0))).xy;
    float _186 = _184.x;
    float _188 = _184.y;
    vec3 _190 = texture(fp_tex_tcb_36, vec4(_160 * _168, _162 * _168, _164 * _168, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_158 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _192 = texture(fp_tex_tcb_16, vec2(_88, _90)).xyz;
    float _194 = _140 + (-fp_c5_1._m0[23].x);
    float _196 = _78.z;
    float _198 = _144 + (-fp_c5_1._m0[23].y);
    float _200 = _78.x;
    float _202 = _146 + (-fp_c5_1._m0[23].z);
    float _204 = _148 * _152;
    float _206 = _152 * _154;
    float _208 = inversesqrt(fma(_202, _202, fma(_198, _198, _194 * _194)));
    float _210 = _154 * _154;
    float _212 = _198 * _208;
    float _214 = _194 * _208;
    float _216 = _202 * _208;
    float _218 = _148 * _154;
    float _220 = clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _222 = max(fma(_146, _216, fma(_144, _212, _140 * _214)), fp_c1_1._m0[0].y);
    int _225 = max(0, min(int(trunc((_196 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _227 = (-_170.y) + 1.0;
    float _229 = _227 * _220;
    float _231 = fma(_148, _148, -(_152 * _152));
    float _233 = _158 * _158;
    float _235 = fma(_158, 0.5, 0.5);
    float _237 = fma(_152, -fp_c5_1._m0[23].y, _148 * (-fp_c5_1._m0[23].x));
    float _239 = max(fma(_154, _216, fma(_152, _212, _148 * _214)), fp_c1_1._m0[0].y) * max(fma(_154, _216, fma(_152, _212, _148 * _214)), fp_c1_1._m0[0].y);
    float _241 = (_235 * 0.5) * _235;
    float _243 = clamp((-0.0) + fp_c6_1._m0[8].x, 0.0, 1.0);
    float _245 = max(fma(_154, -fp_c5_1._m0[23].z, _237), fp_c1_1._m0[0].y);
    float _247 = exp2(_222 * fma(_222, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _249 = fma((-_176) + fp_c6_1._m0[92].x, _243, _176);
    float _251 = fma((-_178) + fp_c6_1._m0[92].y, _243, _178);
    float _253 = 1.0 / (_241 + fma(_166, -_241, _166));
    uint _256 = uint(int(uint((((int(uint(_225) >> uint(16)) * 20) << 16) + (((_225 & 65535) * 20) + max(0, min(int(trunc((_200 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _258 = fp_c10_1._m0[int(uint(int(_256)) >> uint(2))][int(_256) & 3];
    float _260 = fma((-_180) + fp_c6_1._m0[92].z, _243, _180);
    float _262 = fma(_249, -_182, _249);
    float _264 = fma(_182, _249 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _266 = fma(_182, _251 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _268 = fma(_251, -_182, _251);
    float _270 = fma(_182, _260 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _272 = fma(_260, -_182, _260);
    float _274 = clamp(fma(_154, -fp_c5_1._m0[23].z, _237), 0.0, 1.0);
    float _276 = (_253 * (1.0 / (_241 + fma(_241, -_245, _245)))) * ((_233 * (1.0 / max(fma(_239, _233 * _233, -_239) + 1.0, fp_c1_1._m0[0].y))) * (_233 * (1.0 / max(fma(_239, _233 * _233, -_239) + 1.0, fp_c1_1._m0[0].y))));
    float _278 = fma(_190.x, fma(_264, _186, _188), max(0.0, fma(_231, fp_c5_1._m0[31].x, (fma(_154, fp_c5_1._m0[25].z, fma(_152, fp_c5_1._m0[25].y, _148 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_218, fp_c5_1._m0[28].w, fma(_210, fp_c5_1._m0[28].z, fma(_206, fp_c5_1._m0[28].y, _204 * fp_c5_1._m0[28].x))))) * fma(_264, -_262, _262));
    float _280 = fma(_190.y, fma(_266, _186, _188), max(0.0, fma(_231, fp_c5_1._m0[31].y, (fma(_154, fp_c5_1._m0[26].z, fma(_152, fp_c5_1._m0[26].y, _148 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_218, fp_c5_1._m0[29].w, fma(_210, fp_c5_1._m0[29].z, fma(_206, fp_c5_1._m0[29].y, _204 * fp_c5_1._m0[29].x))))) * fma(_266, -_268, _268));
    float _282 = fma(_190.z, fma(_270, _186, _188), max(0.0, fma(_231, fp_c5_1._m0[31].z, (fma(_154, fp_c5_1._m0[27].z, fma(_152, fp_c5_1._m0[27].y, _148 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_218, fp_c5_1._m0[30].w, fma(_210, fp_c5_1._m0[30].z, fma(_206, fp_c5_1._m0[30].y, _204 * fp_c5_1._m0[30].x))))) * fma(_270, -_272, _272));
    float _284 = _249 * (_192.x * fp_c6_1._m0[19].x);
    float _286 = _251 * (_192.y * fp_c6_1._m0[19].y);
    float _288 = _260 * (_192.z * fp_c6_1._m0[19].z);
    float _290 = clamp((-fma(_220, max((-_170.x) + 1.0, _227), fma(texture(fp_tex_tcb_28, vec2((_74.x * gl_FragCoord.w) * _132, (_74.y * gl_FragCoord.w) * _132)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _292 = clamp(texture(fp_tex_tcb_18, vec2(_88, _90)).x + (-0.0), 0.0, 1.0);
    int _294 = floatBitsToInt(_258);
    float _296 = _280;
    float _298 = _278;
    float _300 = _282;
    float _302 = _278;
    float _304 = _280;
    float _306 = _282;
    if (floatBitsToInt(_258) != (-1))
    {
        float _308 = 1.0 / fp_c6_1._m0[18].x;
        float _310 = clamp(fma(_229, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _312 = clamp(1.0 + (-fp_c6_1._m0[17].w), 0.0, 1.0);
        float _314 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
        int _316 = 0;
        float _320;
        float _322;
        float _324;
        int _414;
        do
        {
            int _318 = _294 & 255;
            _320 = _298;
            _322 = _296;
            _324 = _300;
            _328 = uint(_318) >= 30u;
            if (_328)
            {
                break;
            }
            int _330 = _318 << 4;
            uint _332 = uint(int(uint(_330 + 7360) >> uint(2)));
            int _334 = int(_332) + 1;
            uint _336 = uint(int(uint(_330 + 7368) >> uint(2)));
            float _338 = (-_200) + fp_c10_1._m0[int(uint(int(_332)) >> uint(2))][int(_332) & 3];
            float _340 = fp_c10_1._m0[int(uint(_334) >> uint(2))][_334 & 3] + (-_78.y);
            float _342 = (-_196) + fp_c10_1._m0[int(uint(int(_336)) >> uint(2))][int(_336) & 3];
            float _344 = fma(_342, _342, fma(_340, _340, _338 * _338));
            float _346 = _338 * inversesqrt(_344);
            float _348 = _340 * inversesqrt(_344);
            float _350 = _342 * inversesqrt(_344);
            float _352 = _140 + _346;
            float _354 = _144 + _348;
            float _356 = _146 + _350;
            float _358 = inversesqrt(fma(_356, _356, fma(_354, _354, _352 * _352)));
            float _360 = _352 * _358;
            float _362 = _354 * _358;
            float _364 = _356 * _358;
            uint _366 = uint(int(uint(_330 + 6880) >> uint(2)));
            int _368 = int(_366) + 1;
            uint _370 = uint(int(uint(_330 + 8320) >> uint(2)));
            float _372 = max(fma(_146, _364, fma(_144, _362, _140 * _360)), fp_c1_1._m0[0].y);
            float _374 = max(fma(_154, _364, fma(_152, _362, _148 * _360)), fp_c1_1._m0[0].y) * max(fma(_154, _364, fma(_152, _362, _148 * _360)), fp_c1_1._m0[0].y);
            float _376 = fma(_154, _350, fma(_152, _348, _148 * _346));
            float _378 = max(_376, fp_c1_1._m0[0].y);
            float _380 = 1.0 / (_241 + fma(_241, -_378, _378));
            float _382 = exp2(_372 * fma(_372, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _384 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3]) != 0;
            float _386 = (_253 * _380) * ((_233 * (1.0 / max(fma(_233 * _233, _374, -_374) + 1.0, fp_c1_1._m0[0].y))) * (_233 * (1.0 / max(fma(_233 * _233, _374, -_374) + 1.0, fp_c1_1._m0[0].y))));
            uint _388 = uint(int(uint(_330 + 6400) >> uint(2)));
            int _390 = int(_388) + 1;
            uint _392 = uint(int(uint(_330 + 6408) >> uint(2)));
            int _394 = int(_392) + 1;
            float _396 = _380;
            if (!_384)
            {
                _396 = 1.0;
            }
            float _398 = _396;
            if (_384)
            {
                uint _400 = uint(int(uint(_330 + 7840) >> uint(2)));
                int _402 = int(_400) + 1;
                uint _404 = uint(int(uint(_330 + 7848) >> uint(2)));
                uint _406 = uint(int(uint(_330 + 6888) >> uint(2)));
                float _408 = fp_c10_1._m0[int(uint(int(_406)) >> uint(2))][int(_406) & 3];
                int _410 = int(_406) + 1;
                _398 = exp2(fp_c10_1._m0[int(uint(_410) >> uint(2))][_410 & 3] * log2(clamp(((-_408) + fma(_350, -fp_c10_1._m0[int(uint(int(_404)) >> uint(2))][int(_404) & 3], fma(_348, -fp_c10_1._m0[int(uint(_402) >> uint(2))][_402 & 3], _346 * (-fp_c10_1._m0[int(uint(int(_400)) >> uint(2))][int(_400) & 3])))) * (1.0 / ((-_408) + 1.0)), 0.0, 1.0)));
            }
            float _412 = exp2(fp_c10_1._m0[int(uint(_368) >> uint(2))][_368 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3], -sqrt(_344), fp_c1_1._m0[1].y), 0.0, 1.0))) * _398;
            _414 = _316 + 1;
            float _416 = fp_c10_1._m0[int(uint(_394) >> uint(2))][_394 & 3] * _412;
            float _418 = clamp(_376 + (-0.0), 0.0, 1.0) * _412;
            float _420 = fma(_314, fp_c1_1._m0[2].x, exp2(_308 * log2(clamp(max(fma(_146, -_350, fma(_144, -_348, _140 * (-_346))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0))) * _314) + 0.20000000298023223876953125;
            float _422 = _296 + fma((fp_c10_1._m0[int(uint(_390) >> uint(2))][_390 & 3] * _418) * fma(_268, fp_c1_1._m0[1].w, ((_266 + fma(_266, -_382, _382)) * _386) * 0.079577468335628509521484375), _312, _310 * (((_286 * _416) * _420) * fp_c6_1._m0[17].w));
            float _424 = _298 + fma((fp_c10_1._m0[int(uint(int(_388)) >> uint(2))][int(_388) & 3] * _418) * fma(_262, fp_c1_1._m0[1].w, ((_264 + fma(_264, -_382, _382)) * _386) * 0.079577468335628509521484375), _312, _310 * (((_284 * _416) * _420) * fp_c6_1._m0[17].w));
            float _426 = _300 + fma((fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3] * _418) * fma(_272, fp_c1_1._m0[1].w, ((_270 + fma(_270, -_382, _382)) * _386) * 0.079577468335628509521484375), _312, _310 * (((_288 * _416) * _420) * fp_c6_1._m0[17].w));
            _294 = int(uint(_294) >> uint(8));
            _316 = _414;
            _296 = _422;
            _298 = _424;
            _300 = _426;
            _320 = _424;
            _322 = _422;
            _324 = _426;
        } while (!(_414 >= 4));
        _328 = false;
        _302 = _320;
        _304 = _322;
        _306 = _324;
        if ((_294 & 255) == 30)
        {
            float _428 = _78.y;
            float _430 = 1.0 / (fma(_196, fp_c10_1._m0[565].z, fma(_428, fp_c10_1._m0[565].y, _200 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _432 = _200 + (-fp_c10_1._m0[557].x);
            float _434 = _196 + (-fp_c10_1._m0[557].z);
            float _436 = _432 * fp_c10_1._m0[558].z;
            float _438 = _434 * fp_c10_1._m0[558].x;
            float _440 = fma(_434, _434, _432 * _432);
            float _442 = 1.0 / fp_c10_1._m0[561].y;
            float _444 = ((-float(_438 < _436)) + float(_438 > _436)) * fp_c10_1._m0[561].y;
            bool _446 = fma(_434 * inversesqrt(_440), fp_c10_1._m0[558].z, (_432 * inversesqrt(_440)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _448 = (-_200) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_442, fp_c10_1._m0[557].x);
            float _450 = (-_196) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_442, fp_c10_1._m0[557].z);
            float _452 = _448 * _448;
            float _454 = fma(_434, fp_c10_1._m0[558].z, _432 * fp_c10_1._m0[558].x);
            float _456 = sqrt(fma(_450, _450, _452)) * (-fp_c10_1._m0[558].y);
            bool _458 = _454 > 0.0;
            float _460 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_432, fma(_444, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_434 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_444 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_432, fma(_444, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_434 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_444 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _462 = inversesqrt(fma(_450, _450, fma(_456, _456, _452)));
            float _464 = _448 * _462;
            float _466 = _456 * _462;
            float _468 = _450 * _462;
            float _470 = _140 + _464;
            float _472 = _144 + _466;
            float _474 = _146 + _468;
            float _476 = inversesqrt(fma(_474, _474, fma(_472, _472, _470 * _470)));
            float _478 = _470 * _476;
            float _480 = _472 * _476;
            float _482 = _474 * _476;
            float _484 = fma(_468, _468, _464 * _464);
            float _486 = _484;
            if (_458)
            {
                _486 = sqrt(_440);
            }
            float _488 = _486;
            if (!_458)
            {
                _488 = 1.0;
            }
            float _490 = fma(_154, _468, fma(_152, _466, _148 * _464));
            float _492 = max(fma(_146, _482, fma(_144, _480, _140 * _478)), fp_c1_1._m0[0].y);
            float _494 = max(fma(_154, _482, fma(_152, _480, _148 * _478)), fp_c1_1._m0[0].y) * max(fma(_154, _482, fma(_152, _480, _148 * _478)), fp_c1_1._m0[0].y);
            float _496 = clamp(fma(_454 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_454 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _498 = max(_490, fp_c1_1._m0[0].y);
            float _500 = _492;
            if (_446)
            {
                _500 = fma(_460, -_460, fp_c1_1._m0[1].y) * fma(_460, -_460, fp_c1_1._m0[1].y);
            }
            float _502 = _500;
            if (!_446)
            {
                _502 = 1.0;
            }
            float _504 = exp2(_492 * fma(_492, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _506 = (exp2(log2(clamp(fma(_488, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_468 * inversesqrt(_484), -fp_c10_1._m0[558].z, (_464 * inversesqrt(_484)) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_496, -_496, fp_c1_1._m0[1].y) * fma(_496, -_496, fp_c1_1._m0[1].y), _502);
            float _508 = _506 * clamp(_490 + (-0.0), 0.0, 1.0);
            float _510 = fma(_314, fp_c1_1._m0[2].x, _314 * exp2(_308 * log2(clamp(max(fma(_146, -_468, fma(_144, -_466, _140 * (-_464))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125;
            float _512 = (_253 * (1.0 / (_241 + fma(_241, -_498, _498)))) * ((_233 * (1.0 / max(fma(_233 * _233, _494, -_494) + 1.0, fp_c1_1._m0[0].y))) * (_233 * (1.0 / max(fma(_233 * _233, _494, -_494) + 1.0, fp_c1_1._m0[0].y))));
            float _514 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_196, fp_c10_1._m0[562].z, fma(_428, fp_c10_1._m0[562].y, _200 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _430, 0.5, 0.5), (-fma((fma(_196, fp_c10_1._m0[563].z, fma(_428, fp_c10_1._m0[563].y, _200 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _430, 0.5, 0.5)) + 1.0)).z > fma((fma(_196, fp_c10_1._m0[564].z, fma(_428, fp_c10_1._m0[564].y, _200 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _430, 0.5, 0.5)) || (_454 <= 0.0));
            _302 = fma(fma(_312, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _508) * fma(_262, fp_c1_1._m0[1].w, (_512 * (_264 + fma(_264, -_504, _504))) * 0.079577468335628509521484375), _310 * ((_510 * (_284 * _506)) * fp_c6_1._m0[17].w)), _514, _320);
            _304 = fma(fma(_312, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _508) * fma(_268, fp_c1_1._m0[1].w, (_512 * (_266 + fma(_266, -_504, _504))) * 0.079577468335628509521484375), _310 * ((_510 * (_286 * _506)) * fp_c6_1._m0[17].w)), _514, _322);
            _306 = fma(fma(_312, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _508) * fma(_272, fp_c1_1._m0[1].w, (_512 * (_270 + fma(_270, -_504, _504))) * 0.079577468335628509521484375), _310 * ((_510 * (_288 * _506)) * fp_c6_1._m0[17].w)), _514, _324);
        }
    }
    float _516 = _78.y;
    float _518 = _200 + (-fp_c3_1._m0[11].w);
    float _520 = _196 + (-fp_c3_1._m0[13].w);
    float _522 = _516 + (-fp_c3_1._m0[12].w);
    float _524 = fma(_520, _520, fma(_522, _522, _518 * _518));
    float _526 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
    float _528 = clamp(1.0 + (-fp_c6_1._m0[17].w), 0.0, 1.0);
    float _530 = clamp(fma(_229, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _532 = clamp(fma(_292 * _290, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _534 = fma(_526, fp_c1_1._m0[2].x, _526 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_146, fp_c5_1._m0[23].z, fma(_144, fp_c5_1._m0[23].y, _140 * fp_c5_1._m0[23].x)), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125;
    float _536 = exp2(log2(clamp(sqrt(_524) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_520 * inversesqrt(_524), fp_c5_1._m0[23].z, fma(_522 * inversesqrt(_524), fp_c5_1._m0[23].y, (_518 * inversesqrt(_524)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _538 = fma(_292, _302, fma(_290, _528 * (fma((_264 + fma(_264, -_247, _247)) * _276, fp_c1_1._m0[1].x, _262 * 0.3183098733425140380859375) * (_274 * fp_c5_1._m0[5].x)), _530 * ((_534 * (_284 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[17].w)));
    float _540 = fma(_292, _304, fma(_290, _528 * (fma((_266 + fma(_266, -_247, _247)) * _276, fp_c1_1._m0[1].x, _268 * 0.3183098733425140380859375) * (_274 * fp_c5_1._m0[5].y)), _530 * ((_534 * (_286 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[17].w)));
    float _542 = fma(_292, _306, fma(_290, _528 * (fma((_270 + fma(_270, -_247, _247)) * _276, fp_c1_1._m0[1].x, _272 * 0.3183098733425140380859375) * (_274 * fp_c5_1._m0[5].z)), _530 * ((_534 * (_288 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[17].w)));
    float _544 = clamp(fma(fma(_196, fp_c5_1._m0[14].z, fma(_516, fp_c5_1._m0[14].y, _200 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _546 = fma((-_538) + fp_c5_1._m0[13].x, _544, _538);
    float _548 = fma((-_540) + fp_c5_1._m0[13].y, _544, _540);
    float _550 = fma((-_542) + fp_c5_1._m0[13].z, _544, _542);
    float _552 = clamp((-exp2((clamp(fma(sqrt(_524), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_546) + fma(fma((_536 * fp_c7_1._m0[55].x) * _532, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _552, _546);
    _81.y = fma((-_548) + fma(fma((_536 * fp_c7_1._m0[55].y) * _532, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _552, _548);
    _81.z = fma((-_550) + fma(fma((_536 * fp_c7_1._m0[55].z) * _532, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _552, _550);
    _81.w = 1.0;
}


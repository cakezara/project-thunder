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
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
layout(binding = 6) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 6) in vec4 _76;
layout(location = 5) in vec4 _78;
layout(location = 3) in vec4 _80;
layout(location = 0) out vec4 _83;
uint _6[12];

void main()
{
    bool _314 = false;
    float _90 = _68.x;
    float _92 = _68.y;
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _98 = _96.x;
    float _100 = _96.y;
    float _102 = _70.x;
    float _104 = _70.y;
    float _106 = _70.z;
    float _108 = _72.y;
    float _110 = _72.z;
    float _112 = _72.x;
    float _114 = _72.w;
    float _116 = _74.y;
    float _118 = _74.z;
    float _120 = 1.0 / (_76.z * gl_FragCoord.w);
    float _122 = inversesqrt(fma(_106, _106, fma(_104, _104, _102 * _102)));
    float _124 = _106 * _122;
    float _126 = _102 * _122;
    float _128 = _104 * _122;
    float _130 = _74.x;
    float _132 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _134 = fma(_126, _132, fma(_98, _112, _100 * (fma(_128, _110, -(_124 * _108)) * _114)));
    float _136 = fma(_128, _132, fma(_98, _108, _100 * (fma(_124, _112, -(_126 * _110)) * _114)));
    float _138 = fma(_124, _132, fma(_98, _110, _100 * (fma(_126, _108, -(_128 * _112)) * _114)));
    float _140 = inversesqrt(fma(_118, _118, fma(_116, _116, _130 * _130)));
    float _142 = _130 * (-_140);
    float _144 = _116 * (-_140);
    float _146 = _118 * (-_140);
    float _148 = inversesqrt(fma(_138, _138, fma(_136, _136, _134 * _134)));
    float _150 = _134 * _148;
    float _152 = 1.0 / _78.w;
    float _154 = _136 * _148;
    float _156 = _138 * _148;
    float _158 = fma(_156, -_146, fma(_154, -_144, _150 * (-_142)));
    float _160 = fma(_156, _146, fma(_154, _144, _150 * _142));
    float _162 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _164 = max(_160, fp_c1_1._m0[0].z);
    float _166 = fma(_150 * (-_160), -2.0, -_142);
    float _168 = fma(_154 * (-_160), -2.0, -_144);
    float _170 = fma(_156 * (-_160), -2.0, -_146);
    float _172 = 1.0 / max(abs(_170), max(abs(_166), abs(_168)));
    float _174 = max(fma(_146, fma(_156 * _158, -2.0, -_146), fma(_144, fma(_154 * _158, -2.0, -_144), _142 * fma(_150 * _158, -2.0, -_142))), fp_c1_1._m0[0].z);
    vec2 _176 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _152, 0.5, 0.5), fma(_78.y * _152, -0.5, 0.5))).xy;
    vec3 _180 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _182 = _180.x;
    float _184 = _180.y;
    float _186 = _180.z;
    float _188 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    vec3 _190 = texture(fp_tex_tcb_1E, vec2(fma(_174, fp_c6_1._m0[50].x, _68.z), _68.w)).xyz;
    vec2 _192 = texture(fp_tex_tcb_38, vec2(_164, (-_162) + (-0.0))).xy;
    float _194 = _192.x;
    float _196 = _192.y;
    vec3 _198 = texture(fp_tex_tcb_36, vec4(_166 * _172, _168 * _172, _170 * _172, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_162 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _200 = texture(fp_tex_tcb_14, vec2(_90, _92)).xyz;
    float _202 = _200.x;
    float _204 = _200.y;
    float _206 = _200.z;
    float _208 = _80.z;
    float _210 = _80.x;
    float _212 = _142 + (-fp_c5_1._m0[23].x);
    float _214 = _144 + (-fp_c5_1._m0[23].y);
    float _216 = _146 + (-fp_c5_1._m0[23].z);
    float _218 = inversesqrt(fma(_216, _216, fma(_214, _214, _212 * _212)));
    float _220 = _212 * _218;
    float _222 = _214 * _218;
    float _224 = _216 * _218;
    float _226 = _150 * _156;
    int _229 = max(0, min(int(trunc((_208 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _231 = max(fma(_146, _224, fma(_144, _222, _142 * _220)), fp_c1_1._m0[0].z);
    float _233 = _150 * _154;
    float _235 = _154 * _156;
    float _237 = _156 * _156;
    float _239 = exp2(_231 * fma(_231, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _241 = _162 * _162;
    float _243 = fma(_154, -fp_c5_1._m0[23].y, _150 * (-fp_c5_1._m0[23].x));
    float _245 = max(fma(_156, _224, fma(_154, _222, _150 * _220)), fp_c1_1._m0[0].z) * max(fma(_156, _224, fma(_154, _222, _150 * _220)), fp_c1_1._m0[0].z);
    float _247 = fma(_150, _150, -(_154 * _154));
    float _249 = fma(_162, 0.5, 0.5);
    float _251 = clamp(fma(_156, -fp_c5_1._m0[23].z, _243), 0.0, 1.0);
    float _253 = clamp((-fma(max((-_176.x) + 1.0, (-_176.y) + 1.0), clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _120, (_76.y * gl_FragCoord.w) * _120)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _255 = (_249 * 0.5) * _249;
    uint _258 = uint(int(uint((((int(uint(_229) >> uint(16)) * 20) << 16) + (((_229 & 65535) * 20) + max(0, min(int(trunc((_210 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _260 = fp_c10_1._m0[int(uint(int(_258)) >> uint(2))][int(_258) & 3];
    float _262 = max(fma(_156, -fp_c5_1._m0[23].z, _243), fp_c1_1._m0[0].z);
    float _264 = exp2(_174 * fma(_174, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _266 = fma(_188, _182 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _268 = fma(_188, _184 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _270 = clamp(texture(fp_tex_tcb_18, vec2(_90, _92)).x + (-0.0), 0.0, 1.0);
    float _272 = fma(_188, _186 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _274 = ((1.0 / (_255 + fma(_164, -_255, _164))) * (1.0 / (_255 + fma(_255, -_262, _262)))) * ((_241 * (1.0 / max(fma(_245, _241 * _241, -_245) + 1.0, fp_c1_1._m0[0].z))) * (_241 * (1.0 / max(fma(_245, _241 * _241, -_245) + 1.0, fp_c1_1._m0[0].z))));
    float _276 = fma(_182, -_188, _182);
    float _278 = fma(_184, -_188, _184);
    float _280 = fma(_186, -_188, _186);
    float _282 = fma(max(0.0, fma(_247, fp_c5_1._m0[31].x, (fma(_156, fp_c5_1._m0[25].z, fma(_154, fp_c5_1._m0[25].y, _150 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_226, fp_c5_1._m0[28].w, fma(_237, fp_c5_1._m0[28].z, fma(_235, fp_c5_1._m0[28].y, _233 * fp_c5_1._m0[28].x))))), fma(_276, -_266, _276), fma(fma(_266, _194, _196), _198.x, (_266 + fma(_266, -_264, _264)) * (_182 * (_190.x * fp_c6_1._m0[49].w))));
    float _284 = fma(max(0.0, fma(_247, fp_c5_1._m0[31].y, (fma(_156, fp_c5_1._m0[26].z, fma(_154, fp_c5_1._m0[26].y, _150 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_226, fp_c5_1._m0[29].w, fma(_237, fp_c5_1._m0[29].z, fma(_235, fp_c5_1._m0[29].y, _233 * fp_c5_1._m0[29].x))))), fma(_278, -_268, _278), fma(fma(_268, _194, _196), _198.y, (_268 + fma(_268, -_264, _264)) * (_184 * (_190.y * fp_c6_1._m0[49].w))));
    float _286 = fma(max(0.0, fma(_247, fp_c5_1._m0[31].z, (fma(_156, fp_c5_1._m0[27].z, fma(_154, fp_c5_1._m0[27].y, _150 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_226, fp_c5_1._m0[30].w, fma(_237, fp_c5_1._m0[30].z, fma(_235, fp_c5_1._m0[30].y, _233 * fp_c5_1._m0[30].x))))), fma(_280, -_272, _280), fma(fma(_272, _194, _196), _198.z, (_272 + fma(_272, -_264, _264)) * (_186 * (_190.z * fp_c6_1._m0[49].w))));
    int _288 = floatBitsToInt(_260);
    float _290 = _284;
    float _292 = _286;
    float _294 = _282;
    float _296 = _282;
    float _298 = _284;
    float _300 = _286;
    if (floatBitsToInt(_260) != (-1))
    {
        int _302 = 0;
        float _306;
        float _308;
        float _310;
        int _396;
        do
        {
            int _304 = _288 & 255;
            _306 = _294;
            _308 = _290;
            _310 = _292;
            _314 = uint(_304) >= 30u;
            if (_314)
            {
                break;
            }
            int _316 = _304 << 4;
            uint _318 = uint(int(uint(_316 + 7360) >> uint(2)));
            int _320 = int(_318) + 1;
            uint _322 = uint(int(uint(_316 + 7368) >> uint(2)));
            float _324 = (-_210) + fp_c10_1._m0[int(uint(int(_318)) >> uint(2))][int(_318) & 3];
            float _326 = fp_c10_1._m0[int(uint(_320) >> uint(2))][_320 & 3] + (-_80.y);
            float _328 = (-_208) + fp_c10_1._m0[int(uint(int(_322)) >> uint(2))][int(_322) & 3];
            float _330 = fma(_328, _328, fma(_326, _326, _324 * _324));
            float _332 = _324 * inversesqrt(_330);
            float _334 = _326 * inversesqrt(_330);
            float _336 = _328 * inversesqrt(_330);
            float _338 = _142 + _332;
            float _340 = _144 + _334;
            float _342 = _146 + _336;
            uint _344 = uint(int(uint(_316 + 6880) >> uint(2)));
            int _346 = int(_344) + 1;
            float _348 = inversesqrt(fma(_342, _342, fma(_340, _340, _338 * _338)));
            float _350 = _338 * _348;
            float _352 = _340 * _348;
            float _354 = _342 * _348;
            float _356 = fma(_156, _336, fma(_154, _334, _150 * _332));
            float _358 = max(fma(_146, _354, fma(_144, _352, _142 * _350)), fp_c1_1._m0[0].z);
            float _360 = max(fma(_156, _354, fma(_154, _352, _150 * _350)), fp_c1_1._m0[0].z) * max(fma(_156, _354, fma(_154, _352, _150 * _350)), fp_c1_1._m0[0].z);
            float _362 = max(_356, fp_c1_1._m0[0].z);
            uint _364 = uint(int(uint(_316 + 8320) >> uint(2)));
            uint _366 = uint(int(uint(_316 + 6408) >> uint(2)));
            uint _368 = uint(int(uint(_316 + 6400) >> uint(2)));
            int _370 = int(_368) + 1;
            float _372 = fp_c10_1._m0[int(uint(_346) >> uint(2))][_346 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3], -sqrt(_330), fp_c1_1._m0[1].y), 0.0, 1.0));
            float _374 = exp2(_358 * fma(_358, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _376 = ((1.0 / (_255 + fma(_164, -_255, _164))) * (1.0 / (_255 + fma(_255, -_362, _362)))) * ((_241 * (1.0 / max(fma(_241 * _241, _360, -_360) + 1.0, fp_c1_1._m0[0].z))) * (_241 * (1.0 / max(fma(_241 * _241, _360, -_360) + 1.0, fp_c1_1._m0[0].z))));
            bool _378 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3]) != 0;
            float _380 = _372;
            if (!_378)
            {
                _380 = 1.0;
            }
            float _382 = _380;
            if (_378)
            {
                uint _384 = uint(int(uint(_316 + 7840) >> uint(2)));
                int _386 = int(_384) + 1;
                uint _388 = uint(int(uint(_316 + 6888) >> uint(2)));
                float _390 = fp_c10_1._m0[int(uint(int(_388)) >> uint(2))][int(_388) & 3];
                int _392 = int(_388) + 1;
                uint _394 = uint(int(uint(_316 + 7848) >> uint(2)));
                _382 = exp2(fp_c10_1._m0[int(uint(_392) >> uint(2))][_392 & 3] * log2(clamp(((-_390) + fma(_336, -fp_c10_1._m0[int(uint(int(_394)) >> uint(2))][int(_394) & 3], fma(_334, -fp_c10_1._m0[int(uint(_386) >> uint(2))][_386 & 3], _332 * (-fp_c10_1._m0[int(uint(int(_384)) >> uint(2))][int(_384) & 3])))) * (1.0 / ((-_390) + 1.0)), 0.0, 1.0)));
            }
            _396 = _302 + 1;
            float _398 = (exp2(_372) * _382) * clamp(_356 + (-0.0), 0.0, 1.0);
            float _400 = fma(fp_c10_1._m0[int(uint(_370) >> uint(2))][_370 & 3] * _398, fma(_278, fp_c1_1._m0[1].z, ((_268 + fma(_268, -_374, _374)) * _376) * 0.079577468335628509521484375), _290);
            float _402 = fma(fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3] * _398, fma(_280, fp_c1_1._m0[1].z, ((_272 + fma(_272, -_374, _374)) * _376) * 0.079577468335628509521484375), _292);
            float _404 = fma(fp_c10_1._m0[int(uint(int(_368)) >> uint(2))][int(_368) & 3] * _398, fma(_276, fp_c1_1._m0[1].z, ((_266 + fma(_266, -_374, _374)) * _376) * 0.079577468335628509521484375), _294);
            _288 = int(uint(_288) >> uint(8));
            _302 = _396;
            _290 = _400;
            _292 = _402;
            _294 = _404;
            _306 = _404;
            _308 = _400;
            _310 = _402;
        } while (!(_396 >= 4));
        _314 = false;
        _296 = _306;
        _298 = _308;
        _300 = _310;
        if ((_288 & 255) == 30)
        {
            float _406 = _80.y;
            float _408 = 1.0 / (fma(_208, fp_c10_1._m0[565].z, fma(_406, fp_c10_1._m0[565].y, _210 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _410 = 1.0 / fp_c10_1._m0[561].y;
            float _412 = _210 + (-fp_c10_1._m0[557].x);
            float _414 = _208 + (-fp_c10_1._m0[557].z);
            float _416 = _414 * fp_c10_1._m0[558].x;
            float _418 = fma(_414, _414, _412 * _412);
            float _420 = (-_210) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_410, fp_c10_1._m0[557].x);
            float _422 = (-_208) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_410, fp_c10_1._m0[557].z);
            float _424 = _412 * fp_c10_1._m0[558].z;
            float _426 = _420 * _420;
            float _428 = ((-float(_416 < _424)) + float(_416 > _424)) * fp_c10_1._m0[561].y;
            float _430 = sqrt(fma(_422, _422, _426)) * (-fp_c10_1._m0[558].y);
            bool _432 = fma(_414 * inversesqrt(_418), fp_c10_1._m0[558].z, (_412 * inversesqrt(_418)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _434 = inversesqrt(fma(_422, _422, fma(_430, _430, _426)));
            float _436 = _420 * _434;
            float _438 = _430 * _434;
            float _440 = fma(_414, fp_c10_1._m0[558].z, _412 * fp_c10_1._m0[558].x);
            float _442 = _422 * _434;
            float _444 = _142 + _436;
            float _446 = _144 + _438;
            bool _448 = _440 > 0.0;
            float _450 = _146 + _442;
            float _452 = inversesqrt(fma(_442, _442, _436 * _436));
            float _454 = _418;
            if (_448)
            {
                _454 = sqrt(_418);
            }
            float _456 = _454;
            if (!_448)
            {
                _456 = 1.0;
            }
            float _458 = fma(_156, _442, fma(_154, _438, _150 * _436));
            float _460 = inversesqrt(fma(_450, _450, fma(_446, _446, _444 * _444)));
            float _462 = _444 * _460;
            float _464 = _450 * _460;
            float _466 = _446 * _460;
            float _468 = max(fma(_146, _464, fma(_144, _466, _142 * _462)), fp_c1_1._m0[0].z);
            float _470 = max(_458, fp_c1_1._m0[0].z);
            float _472 = clamp(fma(_440 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_440 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _474 = max(fma(_156, _464, fma(_154, _466, _150 * _462)), fp_c1_1._m0[0].z) * max(fma(_156, _464, fma(_154, _466, _150 * _462)), fp_c1_1._m0[0].z);
            float _476 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_412, fma(_428, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_414 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_428 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_412, fma(_428, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_414 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_428 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _478 = fma(_255, -_470, _470);
            float _480 = _478;
            if (_432)
            {
                _480 = fma(_476, -_476, fp_c1_1._m0[1].y) * fma(_476, -_476, fp_c1_1._m0[1].y);
            }
            float _482 = _480;
            if (!_432)
            {
                _482 = 1.0;
            }
            float _484 = exp2(_468 * fma(_468, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _486 = ((1.0 / (_255 + fma(_164, -_255, _164))) * (1.0 / (_255 + _478))) * ((_241 * (1.0 / max(fma(_241 * _241, _474, -_474) + 1.0, fp_c1_1._m0[0].z))) * (_241 * (1.0 / max(fma(_241 * _241, _474, -_474) + 1.0, fp_c1_1._m0[0].z))));
            float _488 = (min(fma(_472, -_472, fp_c1_1._m0[1].y) * fma(_472, -_472, fp_c1_1._m0[1].y), _482) * (exp2(log2(clamp(fma(_456, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_442 * _452, -fp_c10_1._m0[558].z, (_436 * _452) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_458 + (-0.0), 0.0, 1.0);
            float _490 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_208, fp_c10_1._m0[562].z, fma(_406, fp_c10_1._m0[562].y, _210 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _408, 0.5, 0.5), (-fma((fma(_208, fp_c10_1._m0[563].z, fma(_406, fp_c10_1._m0[563].y, _210 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _408, 0.5, 0.5)) + 1.0)).z > fma((fma(_208, fp_c10_1._m0[564].z, fma(_406, fp_c10_1._m0[564].y, _210 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _408, 0.5, 0.5)) || (_440 <= 0.0));
            _296 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _488) * fma(_276, fp_c1_1._m0[1].z, ((_266 + fma(_266, -_484, _484)) * _486) * 0.079577468335628509521484375), _490, _306);
            _298 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _488) * fma(_278, fp_c1_1._m0[1].z, ((_268 + fma(_268, -_484, _484)) * _486) * 0.079577468335628509521484375), _490, _308);
            _300 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _488) * fma(_280, fp_c1_1._m0[1].z, ((_272 + fma(_272, -_484, _484)) * _486) * 0.079577468335628509521484375), _490, _310);
        }
    }
    float _492 = _210 + (-fp_c3_1._m0[11].w);
    float _494 = _80.y;
    float _496 = _208 + (-fp_c3_1._m0[13].w);
    float _498 = fma(_202, (_182 * _202) + fp_c6_1._m0[13].x, fma(_270, _296, _253 * ((_251 * fp_c5_1._m0[5].x) * fma(_274 * (_266 + fma(_266, -_239, _239)), fp_c1_1._m0[1].x, _276 * 0.3183098733425140380859375))));
    float _500 = clamp(sqrt(fma(_206, _206, fma(_204, _204, _202 * _202))), 0.0, 1.0);
    float _502 = _494 + (-fp_c3_1._m0[12].w);
    float _504 = fma(_496, _496, fma(_502, _502, _492 * _492));
    float _506 = fma(_204, (_184 * _204) + fp_c6_1._m0[13].x, fma(_270, _298, _253 * ((_251 * fp_c5_1._m0[5].y) * fma(_274 * (_268 + fma(_268, -_239, _239)), fp_c1_1._m0[1].x, _278 * 0.3183098733425140380859375))));
    float _508 = fma(_206, (_186 * _206) + fp_c6_1._m0[13].x, fma(_270, _300, _253 * ((_251 * fp_c5_1._m0[5].z) * fma(_274 * (_272 + fma(_272, -_239, _239)), fp_c1_1._m0[1].x, _280 * 0.3183098733425140380859375))));
    float _510 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    bool _512 = _510 > 1.0;
    float _514 = fma(fma(_496 * inversesqrt(_504), fp_c5_1._m0[23].z, fma(_502 * inversesqrt(_504), fp_c5_1._m0[23].y, (_492 * inversesqrt(_504)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y);
    float _516 = clamp(fma(sqrt(_504), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0);
    float _518 = fma(_500, _510 * (1.0 / max(fma(_508, fp_c1_1._m0[2].x, fma(_506, fp_c1_1._m0[1].w, _498 * 0.298911988735198974609375)), fp_c1_1._m0[0].z)), -_500);
    float _520 = clamp(fma(_270 * _253, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _522 = fma(_498, _518, _498);
    float _524 = fma(_506, _518, _506);
    float _526 = fma(_508, _518, _508);
    float _528 = _516;
    float _530 = _514;
    float _532 = 1.0;
    float _534 = _522;
    float _536 = _524;
    float _538 = _526;
    if (!_512)
    {
        _528 = (-_498) + _522;
    }
    if (!_512)
    {
        _530 = (-_506) + _524;
    }
    if (!_512)
    {
        _532 = (-_508) + _526;
    }
    float _540 = exp2(_514) * exp2(log2(clamp(sqrt(_504) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    if (!_512)
    {
        _534 = fma(_510, _528, _498);
    }
    if (!_512)
    {
        _536 = fma(_510, _530, _506);
    }
    if (!_512)
    {
        _538 = fma(_510, _532, _508);
    }
    float _542 = clamp(fma(fma(_208, fp_c5_1._m0[14].z, fma(_494, fp_c5_1._m0[14].y, _210 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _544 = fma((-_534) + fp_c5_1._m0[13].x, _542, _534);
    float _546 = fma((-_536) + fp_c5_1._m0[13].y, _542, _536);
    float _548 = fma((-_538) + fp_c5_1._m0[13].z, _542, _538);
    float _550 = clamp((-exp2((_516 * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma(fma(fma((_540 * fp_c7_1._m0[55].x) * _520, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_544), _550, _544);
    _83.y = fma(fma(fma((_540 * fp_c7_1._m0[55].y) * _520, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_546), _550, _546);
    _83.z = fma(fma(fma((_540 * fp_c7_1._m0[55].z) * _520, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_548), _550, _548);
    _83.w = 1.0;
}


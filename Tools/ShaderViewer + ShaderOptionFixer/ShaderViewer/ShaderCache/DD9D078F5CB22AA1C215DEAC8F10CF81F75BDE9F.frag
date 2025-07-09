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
layout(binding = 6) uniform sampler2D fp_tex_tcb_1A;
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
    bool _348 = false;
    float _90 = _68.x;
    float _92 = _68.y;
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _98 = _96.x;
    float _100 = _96.y;
    float _102 = texture(fp_tex_tcb_1A, vec2(_90, _92)).x;
    float _104 = _70.x;
    float _106 = _70.y;
    float _108 = _70.z;
    float _110 = _72.y;
    float _112 = _72.z;
    float _114 = _72.x;
    float _116 = _72.w;
    float _118 = _74.x;
    float _120 = _74.y;
    float _122 = _74.z;
    float _124 = 1.0 / (_76.z * gl_FragCoord.w);
    float _126 = inversesqrt(fma(_108, _108, fma(_106, _106, _104 * _104)));
    float _128 = _108 * _126;
    float _130 = _104 * _126;
    float _132 = _106 * _126;
    float _134 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _136 = fma(_130, _134, fma(_98, _114, _100 * (fma(_132, _112, -(_128 * _110)) * _116)));
    float _138 = fma(_132, _134, fma(_98, _110, _100 * (fma(_128, _114, -(_130 * _112)) * _116)));
    float _140 = fma(_128, _134, fma(_98, _112, _100 * (fma(_130, _110, -(_132 * _114)) * _116)));
    float _142 = inversesqrt(fma(_122, _122, fma(_120, _120, _118 * _118)));
    float _144 = _118 * (-_142);
    float _146 = inversesqrt(fma(_140, _140, fma(_138, _138, _136 * _136)));
    float _148 = _120 * (-_142);
    float _150 = _122 * (-_142);
    float _152 = _136 * _146;
    float _154 = _138 * _146;
    float _156 = _140 * _146;
    float _158 = fma(_156, _150, fma(_154, _148, _152 * _144));
    float _160 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _162 = fma(_154 * (-_158), -2.0, -_148);
    float _164 = fma(_152 * (-_158), -2.0, -_144);
    float _166 = 1.0 / _78.w;
    float _168 = fma(_156 * (-_158), -2.0, -_150);
    float _170 = 1.0 / max(abs(_168), max(abs(_164), abs(_162)));
    float _172 = _144 * _148;
    float _174 = exp2(log2(fma(sin(fma((-_158) + fp_c6_1._m0[41].y, fp_c6_1._m0[41].x, fp_c6_1._m0[41].x) * 6.283185482025146484375), 0.5, 0.5)) * fp_c6_1._m0[9].y);
    vec2 _176 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _166, 0.5, 0.5), fma(_78.y * _166, -0.5, 0.5))).xy;
    float _178 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    vec3 _182 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _184 = _182.x;
    float _186 = _182.y;
    float _188 = _182.z;
    float _190 = max(fma(_102, (-_158) + _174, _158), fp_c1_1._m0[0].w);
    vec2 _192 = texture(fp_tex_tcb_38, vec2(_190, (-_160) + (-0.0))).xy;
    float _194 = _192.x;
    float _196 = _192.y;
    vec3 _198 = texture(fp_tex_tcb_36, vec4(_164 * _170, _162 * _170, _168 * _170, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_160 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _200 = texture(fp_tex_tcb_14, vec2(_90, _92)).xyz;
    float _202 = _80.x;
    float _204 = _80.z;
    float _206 = _144 + (-fp_c5_1._m0[23].x);
    float _208 = _148 * _150;
    float _210 = _148 + (-fp_c5_1._m0[23].y);
    float _212 = _150 * _150;
    float _214 = _144 * _150;
    float _216 = _150 + (-fp_c5_1._m0[23].z);
    float _218 = inversesqrt(fma(_216, _216, fma(_210, _210, _206 * _206)));
    int _221 = max(0, min(int(trunc((_204 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _223 = _206 * _218;
    float _225 = _210 * _218;
    float _227 = _216 * _218;
    float _229 = fma(_144, _144, -(_148 * _148));
    float _231 = max(fma(_150, _227, fma(_148, _225, _144 * _223)), fp_c1_1._m0[0].w);
    float _233 = exp2(_231 * fma(_231, fp_c1_1._m0[1].x, -6.9831600189208984375));
    float _235 = clamp(texture(fp_tex_tcb_18, vec2(_90, _92)).x + (-0.0), 0.0, 1.0);
    float _237 = fma(_184, -_178, _184);
    float _239 = exp2(log2(clamp((-_174) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[45].y) * fp_c6_1._m0[45].x;
    float _241 = fma(_188, -_178, _188);
    float _243 = fma(_186, -_178, _186);
    float _245 = clamp((exp2(log2(clamp(max(_158, fp_c1_1._m0[0].z) + (-0.0), 0.0, 1.0)) * fp_c6_1._m0[43].x) * fp_c6_1._m0[43].y) * _102, 0.0, 1.0);
    float _247 = fma(_178, _184 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _249 = fma(_178, _186 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _251 = fma(_178, _188 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _253 = fma((-_237) + fp_c6_1._m0[44].x, _245, _237);
    float _255 = fma((-_241) + fp_c6_1._m0[44].z, _245, _241);
    float _257 = fma((-_243) + fp_c6_1._m0[44].y, _245, _243);
    float _259 = fma(_253, fma(_102, fp_c6_1._m0[40].x, -_102), _253);
    float _261 = fma(_257, fma(_102, fp_c6_1._m0[40].y, -_102), _257);
    float _263 = clamp(_174 + (-0.0), 0.0, 1.0);
    float _265 = fma(_245, _130 + (-_152), _152);
    float _267 = fma(_255, fma(_102, fp_c6_1._m0[40].z, -_102), _255);
    float _269 = fma(_245, _132 + (-_154), _154);
    float _271 = _160 * _160;
    float _273 = fma(_154, -fp_c5_1._m0[23].y, _152 * (-fp_c5_1._m0[23].x));
    float _275 = max(fma(_156, _227, fma(_154, _225, _152 * _223)), fp_c1_1._m0[0].w) * max(fma(_156, _227, fma(_154, _225, _152 * _223)), fp_c1_1._m0[0].w);
    float _277 = fma(_245, _128 + (-_156), _156);
    float _279 = _271 * _271;
    float _281 = _265 * _269;
    float _283 = fma(_160, 0.5, 0.5);
    float _285 = _269 * _277;
    float _287 = _277 * _277;
    float _289 = fma(_265, _265, -(_269 * _269));
    float _291 = _265 * _277;
    float _293 = (_283 * 0.5) * _283;
    float _295 = max(fma(_156, -fp_c5_1._m0[23].z, _273), fp_c1_1._m0[0].w);
    uint _298 = uint(int(uint((((int(uint(_221) >> uint(16)) * 20) << 16) + (((_221 & 65535) * 20) + max(0, min(int(trunc((_202 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _300 = fp_c10_1._m0[int(uint(int(_298)) >> uint(2))][int(_298) & 3];
    float _302 = 1.0 / (_293 + fma(_190, -_293, _190));
    float _304 = fma(_102, (max(0.0, fma(_229, fp_c5_1._m0[31].x, (fma(_150, -fp_c5_1._m0[25].z, fma(_148, -fp_c5_1._m0[25].y, _144 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_214, fp_c5_1._m0[28].w, fma(_212, fp_c5_1._m0[28].z, fma(_208, fp_c5_1._m0[28].y, _172 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[46].x) * _239, fma(_253 + (-_259), _263, _259));
    float _306 = clamp(fma(_156, -fp_c5_1._m0[23].z, _273), 0.0, 1.0);
    float _308 = fma(_102, (max(0.0, fma(_229, fp_c5_1._m0[31].y, (fma(_150, -fp_c5_1._m0[26].z, fma(_148, -fp_c5_1._m0[26].y, _144 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_214, fp_c5_1._m0[29].w, fma(_212, fp_c5_1._m0[29].z, fma(_208, fp_c5_1._m0[29].y, _172 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[46].y) * _239, fma(_257 + (-_261), _263, _261));
    float _310 = fma(_102, (max(0.0, fma(_229, fp_c5_1._m0[31].z, (fma(_150, -fp_c5_1._m0[27].z, fma(_148, -fp_c5_1._m0[27].y, _144 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_214, fp_c5_1._m0[30].w, fma(_212, fp_c5_1._m0[30].z, fma(_208, fp_c5_1._m0[30].y, _172 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[46].z) * _239, fma(_255 + (-_267), _263, _267));
    float _312 = (_302 * (1.0 / (_293 + fma(_293, -_295, _295)))) * ((_271 * (1.0 / max(fma(_275, _279, -_275) + 1.0, fp_c1_1._m0[0].w))) * (_271 * (1.0 / max(fma(_275, _279, -_275) + 1.0, fp_c1_1._m0[0].w))));
    float _314 = fma(fma(_247, _194, _196), _198.x, fma(_247, -_304, _304) * max(0.0, fma(_289, fp_c5_1._m0[31].x, (fma(_277, fp_c5_1._m0[25].z, fma(_269, fp_c5_1._m0[25].y, _265 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_291, fp_c5_1._m0[28].w, fma(_287, fp_c5_1._m0[28].z, fma(_285, fp_c5_1._m0[28].y, _281 * fp_c5_1._m0[28].x))))));
    float _316 = fma(fma(_249, _194, _196), _198.y, fma(_249, -_308, _308) * max(0.0, fma(_289, fp_c5_1._m0[31].y, (fma(_277, fp_c5_1._m0[26].z, fma(_269, fp_c5_1._m0[26].y, _265 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_291, fp_c5_1._m0[29].w, fma(_287, fp_c5_1._m0[29].z, fma(_285, fp_c5_1._m0[29].y, _281 * fp_c5_1._m0[29].x))))));
    float _318 = fma(fma(_251, _194, _196), _198.z, fma(_251, -_310, _310) * max(0.0, fma(_289, fp_c5_1._m0[31].z, (fma(_277, fp_c5_1._m0[27].z, fma(_269, fp_c5_1._m0[27].y, _265 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_291, fp_c5_1._m0[30].w, fma(_287, fp_c5_1._m0[30].z, fma(_285, fp_c5_1._m0[30].y, _281 * fp_c5_1._m0[30].x))))));
    float _320 = clamp((-fma(max((-_176.x) + 1.0, (-_176.y) + 1.0), clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _124, (_76.y * gl_FragCoord.w) * _124)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _322 = floatBitsToInt(_300);
    float _324 = _314;
    float _326 = _316;
    float _328 = _318;
    float _330 = _316;
    float _332 = _314;
    float _334 = _318;
    if (floatBitsToInt(_300) != (-1))
    {
        int _336 = 0;
        float _340;
        float _342;
        float _344;
        int _430;
        do
        {
            int _338 = _322 & 255;
            _340 = _324;
            _342 = _326;
            _344 = _328;
            _348 = uint(_338) >= 30u;
            if (_348)
            {
                break;
            }
            int _350 = _338 << 4;
            uint _352 = uint(int(uint(_350 + 7360) >> uint(2)));
            int _354 = int(_352) + 1;
            uint _356 = uint(int(uint(_350 + 7368) >> uint(2)));
            uint _358 = uint(int(uint(_350 + 6408) >> uint(2)));
            float _360 = (-_202) + fp_c10_1._m0[int(uint(int(_352)) >> uint(2))][int(_352) & 3];
            float _362 = fp_c10_1._m0[int(uint(_354) >> uint(2))][_354 & 3] + (-_80.y);
            float _364 = (-_204) + fp_c10_1._m0[int(uint(int(_356)) >> uint(2))][int(_356) & 3];
            float _366 = fma(_364, _364, fma(_362, _362, _360 * _360));
            float _368 = _360 * inversesqrt(_366);
            float _370 = _362 * inversesqrt(_366);
            float _372 = _364 * inversesqrt(_366);
            float _374 = _144 + _368;
            float _376 = _148 + _370;
            float _378 = _150 + _372;
            uint _380 = uint(int(uint(_350 + 6880) >> uint(2)));
            int _382 = int(_380) + 1;
            float _384 = inversesqrt(fma(_378, _378, fma(_376, _376, _374 * _374)));
            float _386 = _374 * _384;
            float _388 = _376 * _384;
            float _390 = _378 * _384;
            uint _392 = uint(int(uint(_350 + 8320) >> uint(2)));
            float _394 = fma(_156, _372, fma(_154, _370, _152 * _368));
            float _396 = max(_394, fp_c1_1._m0[0].w);
            float _398 = max(fma(_150, _390, fma(_148, _388, _144 * _386)), fp_c1_1._m0[0].w);
            float _400 = max(fma(_156, _390, fma(_154, _388, _152 * _386)), fp_c1_1._m0[0].w) * max(fma(_156, _390, fma(_154, _388, _152 * _386)), fp_c1_1._m0[0].w);
            uint _402 = uint(int(uint(_350 + 6400) >> uint(2)));
            int _404 = int(_402) + 1;
            float _406 = exp2(_398 * fma(_398, fp_c1_1._m0[1].x, -6.9831600189208984375));
            bool _408 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3]) != 0;
            float _410 = fp_c10_1._m0[int(uint(_382) >> uint(2))][_382 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_380)) >> uint(2))][int(_380) & 3], -sqrt(_366), fp_c1_1._m0[1].z), 0.0, 1.0));
            float _412 = ((_271 * (1.0 / max(fma(_279, _400, -_400) + 1.0, fp_c1_1._m0[0].w))) * (_271 * (1.0 / max(fma(_279, _400, -_400) + 1.0, fp_c1_1._m0[0].w)))) * (_302 * (1.0 / (_293 + fma(_293, -_396, _396))));
            float _414 = _410;
            if (!_408)
            {
                _414 = 1.0;
            }
            float _416 = _414;
            if (_408)
            {
                uint _418 = uint(int(uint(_350 + 7840) >> uint(2)));
                int _420 = int(_418) + 1;
                uint _422 = uint(int(uint(_350 + 6888) >> uint(2)));
                float _424 = fp_c10_1._m0[int(uint(int(_422)) >> uint(2))][int(_422) & 3];
                int _426 = int(_422) + 1;
                uint _428 = uint(int(uint(_350 + 7848) >> uint(2)));
                _416 = exp2(fp_c10_1._m0[int(uint(_426) >> uint(2))][_426 & 3] * log2(clamp(((-_424) + fma(_372, -fp_c10_1._m0[int(uint(int(_428)) >> uint(2))][int(_428) & 3], fma(_370, -fp_c10_1._m0[int(uint(_420) >> uint(2))][_420 & 3], _368 * (-fp_c10_1._m0[int(uint(int(_418)) >> uint(2))][int(_418) & 3])))) * (1.0 / ((-_424) + 1.0)), 0.0, 1.0)));
            }
            _430 = _336 + 1;
            float _432 = (exp2(_410) * _416) * clamp(_394 + (-0.0), 0.0, 1.0);
            float _434 = fma(fp_c10_1._m0[int(uint(int(_402)) >> uint(2))][int(_402) & 3] * _432, fma(_304, fp_c1_1._m0[1].w, ((_247 + fma(_247, -_406, _406)) * _412) * 0.079577468335628509521484375), _324);
            float _436 = fma(fp_c10_1._m0[int(uint(_404) >> uint(2))][_404 & 3] * _432, fma(_308, fp_c1_1._m0[1].w, ((_249 + fma(_249, -_406, _406)) * _412) * 0.079577468335628509521484375), _326);
            float _438 = fma(fp_c10_1._m0[int(uint(int(_358)) >> uint(2))][int(_358) & 3] * _432, fma(_310, fp_c1_1._m0[1].w, ((_251 + fma(_251, -_406, _406)) * _412) * 0.079577468335628509521484375), _328);
            _322 = int(uint(_322) >> uint(8));
            _336 = _430;
            _324 = _434;
            _326 = _436;
            _328 = _438;
            _340 = _434;
            _342 = _436;
            _344 = _438;
        } while (!(_430 >= 4));
        _348 = false;
        _330 = _342;
        _332 = _340;
        _334 = _344;
        if ((_322 & 255) == 30)
        {
            float _440 = _80.y;
            float _442 = 1.0 / (fma(_204, fp_c10_1._m0[565].z, fma(_440, fp_c10_1._m0[565].y, _202 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _444 = 1.0 / fp_c10_1._m0[561].y;
            float _446 = (-_202) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_444, fp_c10_1._m0[557].x);
            float _448 = (-_204) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_444, fp_c10_1._m0[557].z);
            float _450 = _446 * _446;
            float _452 = sqrt(fma(_448, _448, _450)) * (-fp_c10_1._m0[558].y);
            float _454 = _202 + (-fp_c10_1._m0[557].x);
            float _456 = inversesqrt(fma(_448, _448, fma(_452, _452, _450)));
            float _458 = _446 * _456;
            float _460 = _452 * _456;
            float _462 = _448 * _456;
            float _464 = _454 * fp_c10_1._m0[558].z;
            float _466 = _144 + _458;
            float _468 = _148 + _460;
            float _470 = _150 + _462;
            float _472 = _204 + (-fp_c10_1._m0[557].z);
            float _474 = fma(_156, _462, fma(_154, _460, _152 * _458));
            float _476 = inversesqrt(fma(_462, _462, _458 * _458));
            float _478 = _472 * fp_c10_1._m0[558].x;
            float _480 = inversesqrt(fma(_470, _470, fma(_468, _468, _466 * _466)));
            float _482 = _466 * _480;
            float _484 = _468 * _480;
            float _486 = _470 * _480;
            float _488 = fma(_472, _472, _454 * _454);
            float _490 = fma(_472, fp_c10_1._m0[558].z, _454 * fp_c10_1._m0[558].x);
            float _492 = ((-float(_478 < _464)) + float(_478 > _464)) * fp_c10_1._m0[561].y;
            float _494 = (_458 * _476) * (-fp_c10_1._m0[558].x);
            bool _496 = _490 > 0.0;
            float _498 = max(fma(_156, _486, fma(_154, _484, _152 * _482)), fp_c1_1._m0[0].w) * max(fma(_156, _486, fma(_154, _484, _152 * _482)), fp_c1_1._m0[0].w);
            float _500 = _494;
            if (_496)
            {
                _500 = sqrt(_488);
            }
            float _502 = _500;
            if (!_496)
            {
                _502 = 1.0;
            }
            float _504 = max(_474, fp_c1_1._m0[0].w);
            float _506 = max(fma(_150, _486, fma(_148, _484, _144 * _482)), fp_c1_1._m0[0].w);
            bool _508 = fma(_472 * inversesqrt(_488), fp_c10_1._m0[558].z, (_454 * inversesqrt(_488)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _510 = clamp(fma(_490 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0) * clamp(fma(_490 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0);
            float _512 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_454, fma(_492, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_472 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_492 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_454, fma(_492, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_472 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_492 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _514 = fma(_512, -_512, fp_c1_1._m0[1].z);
            if (!_508)
            {
                _514 = 1.0;
            }
            float _516 = exp2(_506 * fma(_506, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _518 = _514;
            if (_508)
            {
                _518 = _514 * _514;
            }
            float _520 = (_302 * (1.0 / (_293 + fma(_293, -_504, _504)))) * ((_271 * (1.0 / max(fma(_279, _498, -_498) + 1.0, fp_c1_1._m0[0].w))) * (_271 * (1.0 / max(fma(_279, _498, -_498) + 1.0, fp_c1_1._m0[0].w))));
            float _522 = (min(fma(_510, -_510, fp_c1_1._m0[1].z) * fma(_510, -_510, fp_c1_1._m0[1].z), _518) * (exp2(log2(clamp(fma(_502, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_462 * _476, -fp_c10_1._m0[558].z, _494) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_474 + (-0.0), 0.0, 1.0);
            float _524 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_204, fp_c10_1._m0[562].z, fma(_440, fp_c10_1._m0[562].y, _202 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _442, 0.5, 0.5), (-fma((fma(_204, fp_c10_1._m0[563].z, fma(_440, fp_c10_1._m0[563].y, _202 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _442, 0.5, 0.5)) + 1.0)).z > fma((fma(_204, fp_c10_1._m0[564].z, fma(_440, fp_c10_1._m0[564].y, _202 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _442, 0.5, 0.5)) || (_490 <= 0.0));
            _330 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _522) * fma(_308, fp_c1_1._m0[1].w, (_520 * (_249 + fma(_249, -_516, _516))) * 0.079577468335628509521484375), _524, _342);
            _332 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _522) * fma(_304, fp_c1_1._m0[1].w, (_520 * (_247 + fma(_247, -_516, _516))) * 0.079577468335628509521484375), _524, _340);
            _334 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _522) * fma(_310, fp_c1_1._m0[1].w, (_520 * (_251 + fma(_251, -_516, _516))) * 0.079577468335628509521484375), _524, _344);
        }
    }
    float _526 = _202 + (-fp_c3_1._m0[11].w);
    float _528 = _80.y;
    float _530 = _204 + (-fp_c3_1._m0[13].w);
    float _532 = fma(_200.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_235, _330, _320 * (fma(_312 * (_249 + fma(_249, -_233, _233)), fp_c1_1._m0[1].y, _308 * 0.3183098733425140380859375) * (_306 * fp_c5_1._m0[5].y))));
    float _534 = _528 + (-fp_c3_1._m0[12].w);
    float _536 = fma(_530, _530, fma(_534, _534, _526 * _526));
    float _538 = clamp(fma(fma(_204, fp_c5_1._m0[14].z, fma(_528, fp_c5_1._m0[14].y, _202 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _540 = fma(_200.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_235, _332, _320 * (fma(_312 * (_247 + fma(_247, -_233, _233)), fp_c1_1._m0[1].y, _304 * 0.3183098733425140380859375) * (_306 * fp_c5_1._m0[5].x))));
    float _542 = clamp(fma(_235 * _320, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _544 = exp2(log2(clamp(sqrt(_536) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_530 * inversesqrt(_536), fp_c5_1._m0[23].z, fma(_534 * inversesqrt(_536), fp_c5_1._m0[23].y, (_526 * inversesqrt(_536)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _546 = fma(_200.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_235, _334, _320 * (fma(_312 * (_251 + fma(_251, -_233, _233)), fp_c1_1._m0[1].y, _310 * 0.3183098733425140380859375) * (_306 * fp_c5_1._m0[5].z))));
    float _548 = fma((-_540) + fp_c5_1._m0[13].x, _538, _540);
    float _550 = fma((-_532) + fp_c5_1._m0[13].y, _538, _532);
    float _552 = clamp((-exp2((clamp(fma(sqrt(_536), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    float _554 = fma((-_546) + fp_c5_1._m0[13].z, _538, _546);
    _83.x = max(0.0, min(fma(_552, (-_548) + fma(fma((_544 * fp_c7_1._m0[55].x) * _542, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _548), fp_c6_1._m0[140].x));
    _83.y = max(0.0, min(fma(_552, (-_550) + fma(fma((_544 * fp_c7_1._m0[55].y) * _542, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _550), fp_c6_1._m0[140].x));
    _83.z = max(0.0, min(fma(_552, (-_554) + fma(fma((_544 * fp_c7_1._m0[55].z) * _542, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _554), fp_c6_1._m0[140].x));
    _83.w = 1.0;
}


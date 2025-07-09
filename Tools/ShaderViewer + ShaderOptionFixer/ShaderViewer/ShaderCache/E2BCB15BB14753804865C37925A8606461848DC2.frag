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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_16;
layout(binding = 6) uniform sampler2D fp_tex_tcb_18;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 0) out vec4 _79;
layout(location = 6) in vec4 _81;
layout(location = 3) in vec4 _83;
uint _6[12];

void main()
{
    bool _362 = false;
    float _90 = _68.x;
    float _92 = _68.y;
    float _94 = texture(fp_tex_tcb_8, vec2(_90, _92)).x;
    bool _98 = _94 <= 0.0;
    if (_98)
    {
        discard;
    }
    vec2 _102 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _104 = _102.x;
    float _106 = _102.y;
    float _108 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    vec3 _112 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _114 = _112.x;
    float _116 = _112.y;
    float _118 = _112.z;
    vec3 _120 = texture(fp_tex_tcb_16, vec2(_90, _92)).xyz;
    float _122 = _70.x;
    float _124 = _70.y;
    float _126 = _70.z;
    float _128 = _72.z;
    float _130 = _72.x;
    float _132 = _72.y;
    float _134 = _74.x;
    float _136 = _74.y;
    float _138 = _72.w;
    float _140 = inversesqrt(fma(_126, _126, fma(_124, _124, _122 * _122)));
    float _142 = _126 * _140;
    float _144 = _122 * _140;
    float _146 = _124 * _140;
    float _148 = _76.w;
    float _150 = sqrt(clamp((-fma(_104, _104, _106 * _106)) + 1.0, 0.0, 1.0));
    float _152 = fma(_144, _150, fma(_104, _130, _106 * (fma(_146, _128, -(_142 * _132)) * _138)));
    float _154 = fma(_146, _150, fma(_104, _132, _106 * (fma(_142, _130, -(_144 * _128)) * _138)));
    float _156 = fma(_142, _150, fma(_104, _128, _106 * (fma(_144, _132, -(_146 * _130)) * _138)));
    float _158 = 1.0 / _148;
    float _160 = fma(_156, _156, fma(_154, _154, _152 * _152));
    int _163 = floatBitsToInt(_148);
    int _165 = floatBitsToInt(_158);
    int _167 = floatBitsToInt(_160);
    int _169 = floatBitsToInt(_156);
    if (_98)
    {
        _163 = 0;
    }
    if (_98)
    {
        _165 = 0;
    }
    if (_98)
    {
        _167 = 0;
    }
    float _171 = _156 * inversesqrt(_160);
    float _173 = _152 * inversesqrt(_160);
    float _175 = _154 * inversesqrt(_160);
    if (_98)
    {
        _169 = 0;
    }
    if (_98)
    {
        _79.x = intBitsToFloat(_169);
        _79.y = intBitsToFloat(_165);
        _79.z = intBitsToFloat(_163);
        _79.w = intBitsToFloat(_167);
        return;
    }
    float _177 = _74.z;
    float _179 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _181 = fma(cos(_179 * 3.1415927410125732421875), -5.5, 5.5);
    float _183 = 1.0 / (_81.z * gl_FragCoord.w);
    float _185 = fma(_179, 0.5, 0.5);
    float _187 = inversesqrt(fma(_177, _177, fma(_136, _136, _134 * _134)));
    float _189 = _134 * (-_187);
    float _191 = float(int(trunc(_181)));
    float _193 = _136 * (-_187);
    float _195 = _177 * (-_187);
    float _197 = fma(_171, _195, fma(_175, _193, _173 * _189));
    float _199 = max(_197, fp_c1_1._m0[0].z);
    float _201 = fma(_173 * (-_197), -2.0, -_189);
    float _203 = fma(_175 * (-_197), -2.0, -_193);
    float _205 = fma(_171 * (-_197), -2.0, -_195);
    float _207 = 1.0 / max(abs(_205), max(abs(_201), abs(_203)));
    float _209 = _203 * _207;
    float _211 = _201 * _207;
    float _213 = _205 * _207;
    vec3 _215 = texture(fp_tex_tcb_36, vec4(_211, _209, _213, float(int(clamp(uint(max(roundEven(_191), 0.0)), 0u, 65535u))))).xyz;
    float _217 = _215.x;
    float _219 = _215.y;
    float _221 = _215.z;
    vec3 _223 = texture(fp_tex_tcb_36, vec4(_211, _209, _213, float(int(clamp(uint(max(roundEven(_191 + 1.0), 0.0)), 0u, 65535u))))).xyz;
    vec2 _225 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _158, 0.5, 0.5), fma(_76.y * _158, -0.5, 0.5))).xy;
    vec2 _227 = texture(fp_tex_tcb_38, vec2(_199, (-_179) + (-0.0))).xy;
    float _229 = _227.x;
    float _231 = _227.y;
    float _233 = _83.x;
    float _235 = _83.z;
    float _237 = _120.z * fp_c6_1._m0[19].z;
    float _239 = _189 + (-fp_c5_1._m0[23].x);
    float _241 = _193 + (-fp_c5_1._m0[23].y);
    float _243 = _195 + (-fp_c5_1._m0[23].z);
    float _245 = inversesqrt(fma(_243, _243, fma(_241, _241, _239 * _239)));
    float _247 = fma(_114, -_108, _114);
    float _249 = _243 * _245;
    float _251 = fma(_116, -_108, _116);
    int _253 = max(0, min(int(trunc((_235 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _255 = fma(_118, -_108, _118);
    float _257 = _173 * _175;
    float _259 = fma(_108, _116 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _261 = fma(_108, _114 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _263 = fma(_108, _118 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _265 = clamp(_181 + (-_191), 0.0, 1.0);
    float _267 = _239 * _245;
    float _269 = _175 * _171;
    float _271 = _241 * _245;
    float _273 = _171 * _171;
    float _275 = _173 * _171;
    float _277 = _179 * _179;
    float _279 = max(fma(_195, _249, fma(_193, _271, _189 * _267)), fp_c1_1._m0[0].z);
    float _281 = _277 * _277;
    float _283 = max(fma(_171, _249, fma(_175, _271, _173 * _267)), fp_c1_1._m0[0].z) * max(fma(_171, _249, fma(_175, _271, _173 * _267)), fp_c1_1._m0[0].z);
    float _285 = fma(_171, -fp_c5_1._m0[23].z, fma(_175, -fp_c5_1._m0[23].y, _173 * (-fp_c5_1._m0[23].x)));
    float _287 = (_185 * 0.5) * _185;
    float _289 = 1.0 / (fp_c6_1._m0[38].z + 1.0);
    float _291 = max(_285, fp_c1_1._m0[0].z);
    float _293 = clamp(_285 + (-0.0), 0.0, 1.0);
    float _295 = 1.0 / (_287 + fma(_199, -_287, _199));
    float _297 = clamp(_285 + fp_c6_1._m0[38].z, 0.0, 1.0) * _289;
    uint _300 = uint(int(uint((((int(uint(_253) >> uint(16)) * 20) << 16) + (((_253 & 65535) * 20) + max(0, min(int(trunc((_233 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _302 = fp_c10_1._m0[int(uint(int(_300)) >> uint(2))][int(_300) & 3];
    float _304 = fma(_173, _173, -(_175 * _175));
    float _306 = exp2(_279 * fma(_279, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _308 = (_295 * (1.0 / (_287 + fma(_287, -_291, _291)))) * ((_277 * (1.0 / max(fma(_283, _281, -_283) + 1.0, fp_c1_1._m0[0].z))) * (_277 * (1.0 / max(fma(_283, _281, -_283) + 1.0, fp_c1_1._m0[0].z))));
    float _310 = _120.x * fp_c6_1._m0[19].x;
    float _312 = _120.y * fp_c6_1._m0[19].y;
    float _314 = clamp(_83.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _316 = (-_225.y) + 1.0;
    float _318 = _316 * _314;
    float _320 = fma(fma(_265, (-_217) + _223.x, _217), fma(_261, _229, _231), max(0.0, fma(_304, fp_c5_1._m0[31].x, (fma(_171, fp_c5_1._m0[25].z, fma(_175, fp_c5_1._m0[25].y, _173 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_275, fp_c5_1._m0[28].w, fma(_273, fp_c5_1._m0[28].z, fma(_269, fp_c5_1._m0[28].y, _257 * fp_c5_1._m0[28].x))))) * fma(_247, -_261, _247));
    float _322 = fma(fma(_265, (-_219) + _223.y, _219), fma(_259, _229, _231), max(0.0, fma(_304, fp_c5_1._m0[31].y, (fma(_171, fp_c5_1._m0[26].z, fma(_175, fp_c5_1._m0[26].y, _173 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_275, fp_c5_1._m0[29].w, fma(_273, fp_c5_1._m0[29].z, fma(_269, fp_c5_1._m0[29].y, _257 * fp_c5_1._m0[29].x))))) * fma(_251, -_259, _251));
    float _324 = fma(fma(_265, (-_221) + _223.z, _221), fma(_263, _229, _231), max(0.0, fma(_304, fp_c5_1._m0[31].z, (fma(_171, fp_c5_1._m0[27].z, fma(_175, fp_c5_1._m0[27].y, _173 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_275, fp_c5_1._m0[30].w, fma(_273, fp_c5_1._m0[30].z, fma(_269, fp_c5_1._m0[30].y, _257 * fp_c5_1._m0[30].x))))) * fma(_255, -_263, _255));
    float _326 = clamp(texture(fp_tex_tcb_18, vec2(_90, _92)).x + (-0.0), 0.0, 1.0);
    float _328 = clamp((-fma(max((-_225.x) + 1.0, _316), _314, fma(texture(fp_tex_tcb_28, vec2((_81.x * gl_FragCoord.w) * _183, (_81.y * gl_FragCoord.w) * _183)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _330 = floatBitsToInt(_302);
    float _332 = _322;
    float _334 = _320;
    float _336 = _324;
    float _338 = _320;
    float _340 = _322;
    float _342 = _324;
    if (floatBitsToInt(_302) != (-1))
    {
        float _344 = 1.0 / fp_c6_1._m0[18].y;
        float _346 = clamp(fma(_318, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _348 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
        float _350 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _352 = 0;
        float _356;
        float _358;
        float _360;
        int _448;
        do
        {
            int _354 = _330 & 255;
            _356 = _334;
            _358 = _332;
            _360 = _336;
            _362 = uint(_354) >= 30u;
            if (_362)
            {
                break;
            }
            int _364 = _354 << 4;
            uint _366 = uint(int(uint(_364 + 7360) >> uint(2)));
            int _368 = int(_366) + 1;
            uint _370 = uint(int(uint(_364 + 7368) >> uint(2)));
            float _372 = (-_233) + fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3];
            float _374 = fp_c10_1._m0[int(uint(_368) >> uint(2))][_368 & 3] + (-_83.y);
            float _376 = (-_235) + fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3];
            float _378 = fma(_376, _376, fma(_374, _374, _372 * _372));
            float _380 = _372 * inversesqrt(_378);
            float _382 = _374 * inversesqrt(_378);
            float _384 = _376 * inversesqrt(_378);
            float _386 = _189 + _380;
            float _388 = _193 + _382;
            float _390 = _195 + _384;
            uint _392 = uint(int(uint(_364 + 6880) >> uint(2)));
            int _394 = int(_392) + 1;
            float _396 = inversesqrt(fma(_390, _390, fma(_388, _388, _386 * _386)));
            float _398 = _386 * _396;
            float _400 = _388 * _396;
            float _402 = _390 * _396;
            uint _404 = uint(int(uint(_364 + 8320) >> uint(2)));
            float _406 = fma(_171, _384, fma(_175, _382, _173 * _380));
            float _408 = max(_406, fp_c1_1._m0[0].z);
            float _410 = max(fma(_195, _402, fma(_193, _400, _189 * _398)), fp_c1_1._m0[0].z);
            float _412 = max(fma(_171, _402, fma(_175, _400, _173 * _398)), fp_c1_1._m0[0].z) * max(fma(_171, _402, fma(_175, _400, _173 * _398)), fp_c1_1._m0[0].z);
            uint _414 = uint(int(uint(_364 + 6400) >> uint(2)));
            int _416 = int(_414) + 1;
            float _418 = exp2(_410 * fma(_410, fp_c1_1._m0[0].w, -6.9831600189208984375));
            uint _420 = uint(int(uint(_364 + 6408) >> uint(2)));
            int _422 = int(_420) + 1;
            bool _424 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_404)) >> uint(2))][int(_404) & 3]) != 0;
            float _426 = (_295 * (1.0 / (_287 + fma(_287, -_408, _408)))) * ((_277 * (1.0 / max(fma(_281, _412, -_412) + 1.0, fp_c1_1._m0[0].z))) * (_277 * (1.0 / max(fma(_281, _412, -_412) + 1.0, fp_c1_1._m0[0].z))));
            float _428 = (_263 + fma(_263, -_418, _418)) * _426;
            float _430 = _428;
            if (!_424)
            {
                _430 = 1.0;
            }
            float _432 = _430;
            if (_424)
            {
                uint _434 = uint(int(uint(_364 + 7840) >> uint(2)));
                int _436 = int(_434) + 1;
                uint _438 = uint(int(uint(_364 + 7848) >> uint(2)));
                uint _440 = uint(int(uint(_364 + 6888) >> uint(2)));
                float _442 = fp_c10_1._m0[int(uint(int(_440)) >> uint(2))][int(_440) & 3];
                int _444 = int(_440) + 1;
                _432 = exp2(fp_c10_1._m0[int(uint(_444) >> uint(2))][_444 & 3] * log2(clamp(((-_442) + fma(_384, -fp_c10_1._m0[int(uint(int(_438)) >> uint(2))][int(_438) & 3], fma(_382, -fp_c10_1._m0[int(uint(_436) >> uint(2))][_436 & 3], _380 * (-fp_c10_1._m0[int(uint(int(_434)) >> uint(2))][int(_434) & 3])))) * (1.0 / ((-_442) + 1.0)), 0.0, 1.0)));
            }
            float _446 = exp2(fp_c10_1._m0[int(uint(_394) >> uint(2))][_394 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3], -sqrt(_378), fp_c1_1._m0[1].y), 0.0, 1.0))) * _432;
            _448 = _352 + 1;
            float _450 = clamp(_406 + fp_c6_1._m0[38].z, 0.0, 1.0) * _289;
            float _452 = clamp(_406 + (-0.0), 0.0, 1.0);
            float _454 = fp_c10_1._m0[int(uint(_422) >> uint(2))][_422 & 3] * _446;
            float _456 = exp2(log2(clamp(fma(_197, -clamp((-_406) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_350, fp_c1_1._m0[2].x, exp2(_344 * log2(clamp(max(fma(_195, -_384, fma(_193, -_382, _189 * (-_380))), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0))) * _350) + 0.20000000298023223876953125);
            float _458 = _332 + fma((fp_c10_1._m0[int(uint(_416) >> uint(2))][_416 & 3] * (_446 * (_450 * clamp(_452 + fp_c6_1._m0[39].y, 0.0, 1.0)))) * fma(_251, fp_c1_1._m0[1].z, ((_259 + fma(_259, -_418, _418)) * _426) * 0.079577468335628509521484375), _348, _346 * ((_456 * (_312 * _454)) * fp_c6_1._m0[18].x));
            float _460 = _334 + fma((fp_c10_1._m0[int(uint(int(_414)) >> uint(2))][int(_414) & 3] * (_446 * (_450 * clamp(_452 + fp_c6_1._m0[39].x, 0.0, 1.0)))) * fma(_247, fp_c1_1._m0[1].z, ((_261 + fma(_261, -_418, _418)) * _426) * 0.079577468335628509521484375), _348, _346 * ((_456 * (_310 * _454)) * fp_c6_1._m0[18].x));
            float _462 = _336 + fma((fp_c10_1._m0[int(uint(int(_420)) >> uint(2))][int(_420) & 3] * (_446 * (_450 * clamp(_452 + fp_c6_1._m0[39].z, 0.0, 1.0)))) * fma(_255, fp_c1_1._m0[1].z, _428 * 0.079577468335628509521484375), _348, _346 * ((_456 * (_237 * _454)) * fp_c6_1._m0[18].x));
            _330 = int(uint(_330) >> uint(8));
            _352 = _448;
            _332 = _458;
            _334 = _460;
            _336 = _462;
            _356 = _460;
            _358 = _458;
            _360 = _462;
        } while (!(_448 >= 4));
        _362 = false;
        _338 = _356;
        _340 = _358;
        _342 = _360;
        if ((_330 & 255) == 30)
        {
            float _464 = _83.y;
            float _466 = 1.0 / (fma(_235, fp_c10_1._m0[565].z, fma(_464, fp_c10_1._m0[565].y, _233 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _468 = 1.0 / fp_c10_1._m0[561].y;
            float _470 = _233 + (-fp_c10_1._m0[557].x);
            float _472 = _235 + (-fp_c10_1._m0[557].z);
            float _474 = _470 * fp_c10_1._m0[558].z;
            float _476 = _472 * fp_c10_1._m0[558].x;
            float _478 = (-_233) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_468, fp_c10_1._m0[557].x);
            float _480 = (-_235) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_468, fp_c10_1._m0[557].z);
            float _482 = _478 * _478;
            float _484 = ((-float(_476 < _474)) + float(_476 > _474)) * fp_c10_1._m0[561].y;
            float _486 = sqrt(fma(_480, _480, _482)) * (-fp_c10_1._m0[558].y);
            float _488 = fma(_472, fp_c10_1._m0[558].z, _470 * fp_c10_1._m0[558].x);
            float _490 = fma(_472, _472, _470 * _470);
            float _492 = inversesqrt(fma(_480, _480, fma(_486, _486, _482)));
            bool _494 = _488 > 0.0;
            float _496 = _478 * _492;
            float _498 = _486 * _492;
            float _500 = _480 * _492;
            float _502 = _189 + _496;
            float _504 = _195 + _500;
            float _506 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_470, fma(_484, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_472 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_484 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_470, fma(_484, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_472 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_484 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _508 = _193 + _498;
            float _510 = inversesqrt(fma(_500, _500, _496 * _496));
            float _512 = fma(_472 * inversesqrt(_490), fp_c10_1._m0[558].z, (_470 * inversesqrt(_490)) * fp_c10_1._m0[558].x);
            bool _514 = _512 < fp_c10_1._m0[560].z;
            float _516 = _512;
            if (_494)
            {
                _516 = sqrt(_490);
            }
            float _518 = _516;
            if (!_494)
            {
                _518 = 1.0;
            }
            float _520 = inversesqrt(fma(_504, _504, fma(_508, _508, _502 * _502)));
            float _522 = _502 * _520;
            float _524 = _508 * _520;
            float _526 = _504 * _520;
            float _528 = clamp(fma(_488 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_488 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _530 = fma(_171, _500, fma(_175, _498, _173 * _496));
            float _532 = max(_530, fp_c1_1._m0[0].z);
            float _534 = _528;
            if (_514)
            {
                _534 = fma(_506, -_506, fp_c1_1._m0[1].y) * fma(_506, -_506, fp_c1_1._m0[1].y);
            }
            float _536 = _534;
            if (!_514)
            {
                _536 = 1.0;
            }
            float _538 = max(fma(_195, _526, fma(_193, _524, _189 * _522)), fp_c1_1._m0[0].z);
            float _540 = max(fma(_171, _526, fma(_175, _524, _173 * _522)), fp_c1_1._m0[0].z) * max(fma(_171, _526, fma(_175, _524, _173 * _522)), fp_c1_1._m0[0].z);
            float _542 = ((-1.0) + fp_c6_1._m0[18].y) * ((-1.0) + fp_c6_1._m0[18].y);
            float _544 = clamp(_530 + (-0.0), 0.0, 1.0);
            float _546 = clamp(_530 + fp_c6_1._m0[38].z, 0.0, 1.0) * (1.0 / (1.0 + fp_c6_1._m0[38].z));
            float _548 = min(fma(_528, -_528, fp_c1_1._m0[1].y) * fma(_528, -_528, fp_c1_1._m0[1].y), _536) * (exp2(log2(clamp(fma(_518, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_500 * _510, -fp_c10_1._m0[558].z, (_496 * _510) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w));
            float _550 = exp2(_538 * fma(_538, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _552 = (_295 * (1.0 / (_287 + fma(_287, -_532, _532)))) * ((_277 * (1.0 / max(fma(_281, _540, -_540) + 1.0, fp_c1_1._m0[0].z))) * (_277 * (1.0 / max(fma(_281, _540, -_540) + 1.0, fp_c1_1._m0[0].z))));
            float _554 = (fma(_542, fp_c1_1._m0[2].x, exp2(_344 * log2(clamp(max(fma(_195, -_500, fma(_193, -_498, _189 * (-_496))), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0))) * _542) + 0.20000000298023223876953125) * exp2(log2(clamp(fma(_197, -clamp((-_530) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z);
            float _556 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_235, fp_c10_1._m0[562].z, fma(_464, fp_c10_1._m0[562].y, _233 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _466, 0.5, 0.5), (-fma((fma(_235, fp_c10_1._m0[563].z, fma(_464, fp_c10_1._m0[563].y, _233 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _466, 0.5, 0.5)) + 1.0)).z > fma((fma(_235, fp_c10_1._m0[564].z, fma(_464, fp_c10_1._m0[564].y, _233 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _466, 0.5, 0.5)) || (_488 <= 0.0));
            _338 = fma(fma(_348, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * ((_546 * clamp(_544 + fp_c6_1._m0[39].x, 0.0, 1.0)) * _548)) * fma(_247, fp_c1_1._m0[1].z, (_552 * (_261 + fma(_261, -_550, _550))) * 0.079577468335628509521484375), _346 * ((_554 * (_310 * _548)) * fp_c6_1._m0[18].x)), _556, _356);
            _340 = fma(fma(_348, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * ((_546 * clamp(_544 + fp_c6_1._m0[39].y, 0.0, 1.0)) * _548)) * fma(_251, fp_c1_1._m0[1].z, (_552 * (_259 + fma(_259, -_550, _550))) * 0.079577468335628509521484375), _346 * ((_554 * (_312 * _548)) * fp_c6_1._m0[18].x)), _556, _358);
            _342 = fma(fma(_348, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * ((_546 * clamp(_544 + fp_c6_1._m0[39].z, 0.0, 1.0)) * _548)) * fma(_255, fp_c1_1._m0[1].z, (_552 * (_263 + fma(_263, -_550, _550))) * 0.079577468335628509521484375), _346 * ((_554 * (_237 * _548)) * fp_c6_1._m0[18].x)), _556, _360);
        }
    }
    float _558 = _83.y;
    float _560 = _233 + (-fp_c3_1._m0[11].w);
    float _562 = _235 + (-fp_c3_1._m0[13].w);
    float _564 = _558 + (-fp_c3_1._m0[12].w);
    float _566 = fma(_562, _562, fma(_564, _564, _560 * _560));
    float _568 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
    float _570 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
    float _572 = clamp(fma(_318, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _574 = exp2(log2(clamp(fma(_197, -clamp((-_285) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_568, fp_c1_1._m0[2].x, _568 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_195, fp_c5_1._m0[23].z, fma(_193, fp_c5_1._m0[23].y, _189 * fp_c5_1._m0[23].x)), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _576 = clamp(fma(_326 * _328, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _578 = exp2(log2(clamp(sqrt(_566) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_562 * inversesqrt(_566), fp_c5_1._m0[23].z, fma(_564 * inversesqrt(_566), fp_c5_1._m0[23].y, (_560 * inversesqrt(_566)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _580 = fma(_326, _338, fma(_328, _570 * (fma(_308 * (_261 + fma(_261, -_306, _306)), fp_c1_1._m0[1].x, _247 * 0.3183098733425140380859375) * ((clamp(_293 + fp_c6_1._m0[39].x, 0.0, 1.0) * _297) * fp_c5_1._m0[5].x)), _572 * (((_310 * fp_c5_1._m0[5].w) * _574) * fp_c6_1._m0[18].x)));
    float _582 = fma(_326, _340, fma(_328, _570 * (fma(_308 * (_259 + fma(_259, -_306, _306)), fp_c1_1._m0[1].x, _251 * 0.3183098733425140380859375) * ((clamp(_293 + fp_c6_1._m0[39].y, 0.0, 1.0) * _297) * fp_c5_1._m0[5].y)), _572 * (((_312 * fp_c5_1._m0[5].w) * _574) * fp_c6_1._m0[18].x)));
    float _584 = fma(_326, _342, fma(_328, _570 * (fma(_308 * (_263 + fma(_263, -_306, _306)), fp_c1_1._m0[1].x, _255 * 0.3183098733425140380859375) * ((clamp(_293 + fp_c6_1._m0[39].z, 0.0, 1.0) * _297) * fp_c5_1._m0[5].z)), _572 * (((_237 * fp_c5_1._m0[5].w) * _574) * fp_c6_1._m0[18].x)));
    float _586 = clamp(fma(fma(_235, fp_c5_1._m0[14].z, fma(_558, fp_c5_1._m0[14].y, _233 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _588 = fma((-_582) + fp_c5_1._m0[13].y, _586, _582);
    float _590 = fma((-_584) + fp_c5_1._m0[13].z, _586, _584);
    float _592 = fma((-_580) + fp_c5_1._m0[13].x, _586, _580);
    float _594 = clamp((-exp2((clamp(fma(sqrt(_566), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_592) + fma(fma((_578 * fp_c7_1._m0[55].x) * _576, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _594, _592);
    _79.y = fma((-_588) + fma(fma((_578 * fp_c7_1._m0[55].y) * _576, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _594, _588);
    _79.z = fma((-_590) + fma(fma((_578 * fp_c7_1._m0[55].z) * _576, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _594, _590);
    _79.w = clamp(_94 + (-0.0), 0.0, 1.0);
}


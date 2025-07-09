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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

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
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_14;
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
    bool _342 = false;
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
    float _116 = _74.x;
    float _118 = _74.y;
    float _120 = _74.z;
    float _122 = 1.0 / (_76.z * gl_FragCoord.w);
    float _124 = inversesqrt(fma(_106, _106, fma(_104, _104, _102 * _102)));
    float _126 = _106 * _124;
    float _128 = _102 * _124;
    float _130 = _104 * _124;
    float _132 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _134 = fma(_128, _132, fma(_98, _112, _100 * (fma(_130, _110, -(_126 * _108)) * _114)));
    float _136 = fma(_130, _132, fma(_98, _108, _100 * (fma(_126, _112, -(_128 * _110)) * _114)));
    float _138 = fma(_126, _132, fma(_98, _110, _100 * (fma(_128, _108, -(_130 * _112)) * _114)));
    float _140 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _142 = inversesqrt(fma(_138, _138, fma(_136, _136, _134 * _134)));
    float _144 = _116 * (-_140);
    float _146 = 1.0 / _78.w;
    float _148 = _118 * (-_140);
    float _150 = _120 * (-_140);
    float _152 = _134 * _142;
    float _154 = _136 * _142;
    float _156 = _138 * _142;
    float _158 = fma(_156, _150, fma(_154, _148, _152 * _144));
    float _160 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _162 = max(_158, fp_c1_1._m0[0].w);
    float _164 = fma(_152 * (-_158), -2.0, -_144);
    float _166 = fma(_154 * (-_158), -2.0, -_148);
    float _168 = fma(_156 * (-_158), -2.0, -_150);
    float _170 = 1.0 / max(abs(_168), max(abs(_164), abs(_166)));
    vec2 _172 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _146, 0.5, 0.5), fma(_78.y * _146, -0.5, 0.5))).xy;
    vec3 _176 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _178 = _176.x;
    float _180 = _176.y;
    float _182 = _176.z;
    float _184 = texture(fp_tex_tcb_1A, vec2(_90, _92)).x;
    float _186 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    vec2 _188 = texture(fp_tex_tcb_38, vec2(_162, (-_160) + (-0.0))).xy;
    float _190 = _188.x;
    float _192 = _188.y;
    vec3 _194 = texture(fp_tex_tcb_36, vec4(_164 * _170, _166 * _170, _168 * _170, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_160 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _196 = texture(fp_tex_tcb_14, vec2(_90, _92)).xyz;
    float _198 = _144 * _148;
    float _200 = _148 * _150;
    float _202 = fma(_160, 0.5, 0.5);
    float _204 = _144 + (-fp_c5_1._m0[23].x);
    float _206 = _148 + (-fp_c5_1._m0[23].y);
    float _208 = _150 * _150;
    float _210 = _150 + (-fp_c5_1._m0[23].z);
    float _212 = inversesqrt(fma(_210, _210, fma(_206, _206, _204 * _204)));
    float _214 = _144 * _150;
    float _216 = _204 * _212;
    float _218 = _206 * _212;
    float _220 = fma(_144, _144, -(_148 * _148));
    float _222 = _210 * _212;
    float _224 = fma((-fp_c6_1._m0[46].x) + fp_c6_1._m0[46].y, max(0.0, (fma(fp_c5_1._m0[5].z, fp_c1_1._m0[0].z, fma(fp_c5_1._m0[5].y, fp_c1_1._m0[0].y, fp_c5_1._m0[5].x * 0.298911988735198974609375)) + (-2.0)) * 0.20000000298023223876953125), fp_c6_1._m0[46].x);
    float _226 = fma(fp_c6_1._m0[85].x, fp_c1_1._m0[0].z, fma(fp_c6_1._m0[85].x, fp_c1_1._m0[0].y, fp_c6_1._m0[85].x * 0.298911988735198974609375));
    float _228 = _152 * _154;
    float _230 = max(fma(_150, _222, fma(_148, _218, _144 * _216)), fp_c1_1._m0[0].w);
    float _232 = _154 * _156;
    float _234 = _80.x;
    float _236 = _80.z;
    float _238 = _156 * _156;
    float _240 = _152 * _156;
    float _242 = exp2(log2(clamp((-_158) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
    float _244 = clamp(texture(fp_tex_tcb_C, vec2(_90, _92)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _246 = fma(_152, _152, -(_154 * _154));
    float _248 = fma((-_178) + fp_c6_1._m0[92].x, _244, _178);
    float _250 = clamp((-fma(max((-_172.x) + 1.0, (-_172.y) + 1.0), clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _122, (_76.y * gl_FragCoord.w) * _122)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _252 = fma((-_182) + fp_c6_1._m0[92].z, _244, _182);
    int _255 = max(0, min(int(trunc((_236 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _257 = fma((-_248) + fp_c6_1._m0[84].x, fp_c6_1._m0[85].z, _248);
    float _259 = fma((-_180) + fp_c6_1._m0[92].y, _244, _180);
    float _261 = fma((-_252) + fp_c6_1._m0[84].z, fp_c6_1._m0[85].z, _252);
    float _263 = fma((-_259) + fp_c6_1._m0[84].y, fp_c6_1._m0[85].z, _259);
    float _265 = _160 * _160;
    float _267 = fma((-_257) + fma(_257, -_184, _257), fp_c6_1._m0[85].w, _257);
    float _269 = fma(_154, -fp_c5_1._m0[23].y, _152 * (-fp_c5_1._m0[23].x));
    float _271 = _265 * _265;
    float _273 = max(fma(_156, _222, fma(_154, _218, _152 * _216)), fp_c1_1._m0[0].w) * max(fma(_156, _222, fma(_154, _218, _152 * _216)), fp_c1_1._m0[0].w);
    float _275 = (_202 * 0.5) * _202;
    uint _278 = uint(int(uint((((int(uint(_255) >> uint(16)) * 20) << 16) + (((_255 & 65535) * 20) + max(0, min(int(trunc((_234 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _280 = fp_c10_1._m0[int(uint(int(_278)) >> uint(2))][int(_278) & 3];
    float _282 = fma((-_261) + fma(_261, -_184, _261), fp_c6_1._m0[85].w, _261);
    float _284 = max(fma(_156, -fp_c5_1._m0[23].z, _269), fp_c1_1._m0[0].w);
    float _286 = fma((-_263) + fma(_263, -_184, _263), fp_c6_1._m0[85].w, _263);
    float _288 = 1.0 / (_275 + fma(_275, -_162, _162));
    float _290 = exp2(_230 * fma(_230, fp_c1_1._m0[1].x, -6.9831600189208984375));
    float _292 = fma(_186, _267 + (-0.039999999105930328369140625), fp_c1_1._m0[1].y);
    float _294 = fma(_186, _286 + (-0.039999999105930328369140625), fp_c1_1._m0[1].y);
    float _296 = fma((_224 * (max(0.0, fma(_220, fp_c5_1._m0[31].x, (fma(_150, -fp_c5_1._m0[25].z, fma(_148, -fp_c5_1._m0[25].y, _144 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_214, fp_c5_1._m0[28].w, fma(_208, fp_c5_1._m0[28].z, fma(_200, fp_c5_1._m0[28].y, _198 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[45].x)) * _242, _184, fma(_267, -_186, _267));
    float _298 = fma(_186, _282 + (-0.039999999105930328369140625), fp_c1_1._m0[1].y);
    float _300 = fma((_224 * (max(0.0, fma(_220, fp_c5_1._m0[31].y, (fma(_150, -fp_c5_1._m0[26].z, fma(_148, -fp_c5_1._m0[26].y, _144 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_214, fp_c5_1._m0[29].w, fma(_208, fp_c5_1._m0[29].z, fma(_200, fp_c5_1._m0[29].y, _198 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[45].y)) * _242, _184, fma(_286, -_186, _286));
    float _302 = fma((_224 * (max(0.0, fma(_220, fp_c5_1._m0[31].z, (fma(_150, -fp_c5_1._m0[27].z, fma(_148, -fp_c5_1._m0[27].y, _144 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_214, fp_c5_1._m0[30].w, fma(_208, fp_c5_1._m0[30].z, fma(_200, fp_c5_1._m0[30].y, _198 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[45].z)) * _242, _184, fma(_282, -_186, _282));
    float _304 = (_288 * (1.0 / (_275 + fma(_275, -_284, _284)))) * ((_265 * (1.0 / max(fma(_273, _271, -_273) + 1.0, fp_c1_1._m0[0].w))) * (_265 * (1.0 / max(fma(_273, _271, -_273) + 1.0, fp_c1_1._m0[0].w))));
    float _306 = fma(fma(_292, _190, _192), _194.x, max(0.0, fma(_246, fp_c5_1._m0[31].x, fma(_240, fp_c5_1._m0[28].w, fma(_238, fp_c5_1._m0[28].z, fma(_232, fp_c5_1._m0[28].y, _228 * fp_c5_1._m0[28].x))) + (fma(_156, fp_c5_1._m0[25].z, fma(_154, fp_c5_1._m0[25].y, _152 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w))) * fma(_296, -_292, _296));
    float _308 = fma(fma(_294, _190, _192), _194.y, max(0.0, fma(_246, fp_c5_1._m0[31].y, fma(_240, fp_c5_1._m0[29].w, fma(_238, fp_c5_1._m0[29].z, fma(_232, fp_c5_1._m0[29].y, _228 * fp_c5_1._m0[29].x))) + (fma(_156, fp_c5_1._m0[26].z, fma(_154, fp_c5_1._m0[26].y, _152 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w))) * fma(_300, -_294, _300));
    float _310 = clamp(fma(_156, -fp_c5_1._m0[23].z, _269), 0.0, 1.0);
    float _312 = fma(fma(_298, _190, _192), _194.z, max(0.0, fma(_246, fp_c5_1._m0[31].z, (fma(_156, fp_c5_1._m0[27].z, fma(_154, fp_c5_1._m0[27].y, _152 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_240, fp_c5_1._m0[30].w, fma(_238, fp_c5_1._m0[30].z, fma(_232, fp_c5_1._m0[30].y, _228 * fp_c5_1._m0[30].x))))) * fma(_302, -_298, _302));
    int _314 = floatBitsToInt(_280);
    float _316 = _308;
    float _318 = _306;
    float _320 = _312;
    float _322 = _152;
    float _324 = _306;
    float _326 = _308;
    float _328 = _312;
    if (floatBitsToInt(_280) != (-1))
    {
        int _330 = 0;
        float _334;
        float _336;
        float _338;
        int _424;
        do
        {
            int _332 = _314 & 255;
            _334 = _318;
            _336 = _316;
            _338 = _320;
            _342 = uint(_332) >= 30u;
            if (_342)
            {
                break;
            }
            int _344 = _332 << 4;
            uint _346 = uint(int(uint(_344 + 7360) >> uint(2)));
            int _348 = int(_346) + 1;
            uint _350 = uint(int(uint(_344 + 7368) >> uint(2)));
            uint _352 = uint(int(uint(_344 + 8320) >> uint(2)));
            uint _354 = uint(int(uint(_344 + 6408) >> uint(2)));
            float _356 = (-_234) + fp_c10_1._m0[int(uint(int(_346)) >> uint(2))][int(_346) & 3];
            float _358 = fp_c10_1._m0[int(uint(_348) >> uint(2))][_348 & 3] + (-_80.y);
            float _360 = (-_236) + fp_c10_1._m0[int(uint(int(_350)) >> uint(2))][int(_350) & 3];
            bool _362 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_352)) >> uint(2))][int(_352) & 3]) != 0;
            float _364 = fma(_360, _360, fma(_358, _358, _356 * _356));
            float _366 = _356 * inversesqrt(_364);
            float _368 = _358 * inversesqrt(_364);
            float _370 = _360 * inversesqrt(_364);
            float _372 = _144 + _366;
            float _374 = _148 + _368;
            float _376 = _150 + _370;
            float _378 = inversesqrt(fma(_376, _376, fma(_374, _374, _372 * _372)));
            float _380 = _372 * _378;
            float _382 = _374 * _378;
            float _384 = _376 * _378;
            uint _386 = uint(int(uint(_344 + 6880) >> uint(2)));
            int _388 = int(_386) + 1;
            float _390 = max(fma(_150, _384, fma(_148, _382, _144 * _380)), fp_c1_1._m0[0].w);
            float _392 = fma(_156, _370, fma(_154, _368, _152 * _366));
            float _394 = max(fma(_156, _384, fma(_154, _382, _152 * _380)), fp_c1_1._m0[0].w) * max(fma(_156, _384, fma(_154, _382, _152 * _380)), fp_c1_1._m0[0].w);
            float _396 = max(_392, fp_c1_1._m0[0].w);
            uint _398 = uint(int(uint(_344 + 6400) >> uint(2)));
            int _400 = int(_398) + 1;
            float _402 = exp2(_390 * fma(_390, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _404 = fp_c10_1._m0[int(uint(_388) >> uint(2))][_388 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_386)) >> uint(2))][int(_386) & 3], -sqrt(_364), fp_c1_1._m0[1].w), 0.0, 1.0));
            float _406 = (_288 * (1.0 / (_275 + fma(_275, -_396, _396)))) * ((_265 * (1.0 / max(fma(_271, _394, -_394) + 1.0, fp_c1_1._m0[0].w))) * (_265 * (1.0 / max(fma(_271, _394, -_394) + 1.0, fp_c1_1._m0[0].w))));
            float _408 = _404;
            if (!_362)
            {
                _408 = 1.0;
            }
            float _410 = _408;
            if (_362)
            {
                uint _412 = uint(int(uint(_344 + 7840) >> uint(2)));
                int _414 = int(_412) + 1;
                uint _416 = uint(int(uint(_344 + 6888) >> uint(2)));
                float _418 = fp_c10_1._m0[int(uint(int(_416)) >> uint(2))][int(_416) & 3];
                int _420 = int(_416) + 1;
                uint _422 = uint(int(uint(_344 + 7848) >> uint(2)));
                _410 = exp2(fp_c10_1._m0[int(uint(_420) >> uint(2))][_420 & 3] * log2(clamp(((-_418) + fma(_370, -fp_c10_1._m0[int(uint(int(_422)) >> uint(2))][int(_422) & 3], fma(_368, -fp_c10_1._m0[int(uint(_414) >> uint(2))][_414 & 3], _366 * (-fp_c10_1._m0[int(uint(int(_412)) >> uint(2))][int(_412) & 3])))) * (1.0 / ((-_418) + 1.0)), 0.0, 1.0)));
            }
            _424 = _330 + 1;
            float _426 = (exp2(_404) * _410) * clamp(_392 + (-0.0), 0.0, 1.0);
            float _428 = fma(fp_c10_1._m0[int(uint(_400) >> uint(2))][_400 & 3] * _426, fma(_300, fp_c1_1._m0[2].x, ((_294 + fma(_294, -_402, _402)) * _406) * 0.079577468335628509521484375), _316);
            float _430 = fma(fp_c10_1._m0[int(uint(int(_398)) >> uint(2))][int(_398) & 3] * _426, fma(_296, fp_c1_1._m0[2].x, ((_292 + fma(_292, -_402, _402)) * _406) * 0.079577468335628509521484375), _318);
            float _432 = fma(fp_c10_1._m0[int(uint(int(_354)) >> uint(2))][int(_354) & 3] * _426, fma(_302, fp_c1_1._m0[2].x, ((_298 + fma(_298, -_402, _402)) * _406) * 0.079577468335628509521484375), _320);
            _314 = int(uint(_314) >> uint(8));
            _330 = _424;
            _316 = _428;
            _318 = _430;
            _320 = _432;
            _334 = _430;
            _336 = _428;
            _338 = _432;
        } while (!(_424 >= 4));
        _342 = false;
        _324 = _334;
        _326 = _336;
        _328 = _338;
        if ((_314 & 255) == 30)
        {
            float _434 = _80.y;
            float _436 = 1.0 / (fma(_236, fp_c10_1._m0[565].z, fma(_434, fp_c10_1._m0[565].y, _234 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _438 = 1.0 / fp_c10_1._m0[561].y;
            float _440 = _236 + (-fp_c10_1._m0[557].z);
            float _442 = _440 * fp_c10_1._m0[558].x;
            float _444 = _234 + (-fp_c10_1._m0[557].x);
            float _446 = (-_234) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_438, fp_c10_1._m0[557].x);
            float _448 = (-_236) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_438, fp_c10_1._m0[557].z);
            float _450 = _444 * fp_c10_1._m0[558].z;
            float _452 = _446 * _446;
            float _454 = fma(_440, _440, _444 * _444);
            float _456 = sqrt(fma(_448, _448, _452)) * (-fp_c10_1._m0[558].y);
            float _458 = ((-float(_442 < _450)) + float(_442 > _450)) * fp_c10_1._m0[561].y;
            float _460 = inversesqrt(fma(_448, _448, fma(_456, _456, _452)));
            float _462 = _446 * _460;
            float _464 = _456 * _460;
            float _466 = fma(_440, fp_c10_1._m0[558].z, _444 * fp_c10_1._m0[558].x);
            float _468 = _448 * _460;
            float _470 = _144 + _462;
            float _472 = _148 + _464;
            bool _474 = _466 > 0.0;
            float _476 = inversesqrt(fma(_468, _468, _462 * _462));
            float _478 = _150 + _468;
            float _480 = inversesqrt(fma(_478, _478, fma(_472, _472, _470 * _470)));
            float _482 = fma(_156, _468, fma(_154, _464, _152 * _462));
            float _484 = _470 * _480;
            float _486 = _472 * _480;
            float _488 = _478 * _480;
            if (_474)
            {
                _322 = sqrt(_454);
            }
            float _490 = _322;
            if (!_474)
            {
                _490 = 1.0;
            }
            bool _492 = fma(_440 * inversesqrt(_454), fp_c10_1._m0[558].z, (_444 * inversesqrt(_454)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _494 = max(_482, fp_c1_1._m0[0].w);
            float _496 = max(fma(_150, _488, fma(_148, _486, _144 * _484)), fp_c1_1._m0[0].w);
            float _498 = max(fma(_156, _488, fma(_154, _486, _152 * _484)), fp_c1_1._m0[0].w) * max(fma(_156, _488, fma(_154, _486, _152 * _484)), fp_c1_1._m0[0].w);
            float _500 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_444, fma(_458, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_440 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_458 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_444, fma(_458, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_440 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_458 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _502 = clamp(fma(_466 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].w), 0.0, 1.0) * clamp(fma(_466 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].w), 0.0, 1.0);
            float _504 = exp2(_496 * fma(_496, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _506 = fma(_500, -_500, fp_c1_1._m0[1].w);
            if (!_492)
            {
                _506 = 1.0;
            }
            float _508 = _506;
            if (_492)
            {
                _508 = _506 * _506;
            }
            float _510 = (_288 * (1.0 / (_275 + fma(_275, -_494, _494)))) * ((_265 * (1.0 / max(fma(_271, _498, -_498) + 1.0, fp_c1_1._m0[0].w))) * (_265 * (1.0 / max(fma(_271, _498, -_498) + 1.0, fp_c1_1._m0[0].w))));
            float _512 = (min(fma(_502, -_502, fp_c1_1._m0[1].w) * fma(_502, -_502, fp_c1_1._m0[1].w), _508) * (exp2(log2(clamp(fma(_490, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_468 * _476, -fp_c10_1._m0[558].z, (_462 * _476) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_482 + (-0.0), 0.0, 1.0);
            float _514 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_236, fp_c10_1._m0[562].z, fma(_434, fp_c10_1._m0[562].y, _234 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _436, 0.5, 0.5), (-fma((fma(_236, fp_c10_1._m0[563].z, fma(_434, fp_c10_1._m0[563].y, _234 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _436, 0.5, 0.5)) + 1.0)).z > fma((fma(_236, fp_c10_1._m0[564].z, fma(_434, fp_c10_1._m0[564].y, _234 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _436, 0.5, 0.5)) || (_466 <= 0.0));
            _324 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _512) * fma(_296, fp_c1_1._m0[2].x, ((_292 + fma(_292, -_504, _504)) * _510) * 0.079577468335628509521484375), _514, _334);
            _326 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _512) * fma(_300, fp_c1_1._m0[2].x, ((_294 + fma(_294, -_504, _504)) * _510) * 0.079577468335628509521484375), _514, _336);
            _328 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _512) * fma(_302, fp_c1_1._m0[2].x, ((_298 + fma(_298, -_504, _504)) * _510) * 0.079577468335628509521484375), _514, _338);
        }
    }
    float _516 = _234 + (-fp_c3_1._m0[11].w);
    float _518 = _80.y;
    float _520 = _236 + (-fp_c3_1._m0[13].w);
    float _522 = _518 + (-fp_c3_1._m0[12].w);
    float _524 = fma(_520, _520, fma(_522, _522, _516 * _516));
    float _526 = fp_c6_1._m0[11].x * fp_c6_1._m0[15].y;
    float _528 = clamp(fma(_250, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _530 = fma((_196.x * fp_c6_1._m0[12].x) * _226, _526, fma(_250, fma(_304 * (_292 + fma(_292, -_290, _290)), fp_c1_1._m0[1].z, _296 * 0.3183098733425140380859375) * (_310 * fp_c5_1._m0[5].x), _324));
    float _532 = fma((_196.y * fp_c6_1._m0[12].y) * _226, _526, fma(_250, fma(_304 * (_294 + fma(_294, -_290, _290)), fp_c1_1._m0[1].z, _300 * 0.3183098733425140380859375) * (_310 * fp_c5_1._m0[5].y), _326));
    float _534 = fma((_196.z * fp_c6_1._m0[12].z) * _226, _526, fma(_250, fma(_304 * (_298 + fma(_298, -_290, _290)), fp_c1_1._m0[1].z, _302 * 0.3183098733425140380859375) * (_310 * fp_c5_1._m0[5].z), _328));
    float _536 = exp2(log2(clamp(sqrt(_524) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_520 * inversesqrt(_524), fp_c5_1._m0[23].z, fma(_522 * inversesqrt(_524), fp_c5_1._m0[23].y, (_516 * inversesqrt(_524)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _538 = clamp(fma(fma(_236, fp_c5_1._m0[14].z, fma(_518, fp_c5_1._m0[14].y, _234 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _540 = fma((-_530) + fp_c5_1._m0[13].x, _538, _530);
    float _542 = fma((-_534) + fp_c5_1._m0[13].z, _538, _534);
    float _544 = fma((-_532) + fp_c5_1._m0[13].y, _538, _532);
    float _546 = clamp((-exp2((clamp(fma(sqrt(_524), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_540) + fma(fma((_536 * fp_c7_1._m0[55].x) * _528, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _546, _540);
    _83.y = fma((-_544) + fma(fma((_536 * fp_c7_1._m0[55].y) * _528, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _546, _544);
    _83.z = fma((-_542) + fma(fma((_536 * fp_c7_1._m0[55].z) * _528, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _546, _542);
    _83.w = 1.0;
}


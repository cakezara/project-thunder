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
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _68;
layout(location = 0) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 2) in vec4 _74;
layout(location = 4) in vec4 _76;
layout(location = 6) in vec4 _78;
layout(location = 3) in vec4 _80;
layout(location = 0) out vec4 _83;
uint _6[12];

void main()
{
    bool _328 = false;
    float _90 = _70.x;
    float _92 = _70.y;
    float _94 = 1.0 / _68.w;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    vec3 _106 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _108 = _106.x;
    float _110 = _106.y;
    float _112 = _106.z;
    vec2 _114 = texture(fp_tex_tcb_2A, vec2(fma(_68.x * _94, 0.5, 0.5), fma(_68.y * _94, -0.5, 0.5))).xy;
    float _116 = _72.x;
    float _118 = _72.y;
    float _120 = _72.z;
    float _122 = _74.y;
    float _124 = _74.z;
    float _126 = _74.x;
    float _128 = _74.w;
    float _130 = _76.x;
    float _132 = _76.y;
    float _134 = _76.z;
    float _136 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _138 = _120 * _136;
    float _140 = _116 * _136;
    float _142 = _118 * _136;
    float _144 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _146 = fma(_140, _144, fma(_100, _126, _102 * (fma(_142, _124, -(_138 * _122)) * _128)));
    float _148 = fma(_142, _144, fma(_100, _122, _102 * (fma(_138, _126, -(_140 * _124)) * _128)));
    float _150 = 1.0 / (_78.z * gl_FragCoord.w);
    float _152 = fma(_138, _144, fma(_100, _124, _102 * (fma(_140, _122, -(_142 * _126)) * _128)));
    float _154 = inversesqrt(fma(_134, _134, fma(_132, _132, _130 * _130)));
    float _156 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _158 = _130 * (-_154);
    float _160 = _132 * (-_154);
    float _162 = inversesqrt(fma(_152, _152, fma(_148, _148, _146 * _146)));
    float _164 = _134 * (-_154);
    float _166 = _146 * _162;
    float _168 = _148 * _162;
    float _170 = _152 * _162;
    float _172 = fma(_170, -_164, fma(_168, -_160, _166 * (-_158)));
    float _174 = fma(_166 * _172, -2.0, -_158);
    float _176 = fma(_168 * _172, -2.0, -_160);
    float _178 = fma(_170 * _172, -2.0, -_164);
    float _180 = 1.0 / max(abs(_178), max(abs(_174), abs(_176)));
    float _182 = fma(exp2(log2(clamp(fma(_170, _164, fma(_168, _160, _166 * _158)), 0.0, 1.0)) * fp_c6_1._m0[9].y), fp_c6_1._m0[40].x, fp_c6_1._m0[40].y);
    float _184 = max(_182, fp_c1_1._m0[0].z);
    vec2 _186 = texture(fp_tex_tcb_38, vec2(_184, (-_156) + (-0.0))).xy;
    float _188 = _186.x;
    float _190 = _186.y;
    vec3 _192 = texture(fp_tex_tcb_36, vec4(_174 * _180, _176 * _180, _178 * _180, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_156 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _194 = texture(fp_tex_tcb_14, vec2(_90, _92)).xyz;
    float _196 = _80.y;
    float _198 = _166 * _168;
    float _200 = fma(_156, 0.5, 0.5);
    float _202 = _168 * _170;
    float _204 = _170 * _170;
    float _206 = _196 + (-fp_c9_1._m0[32].w);
    float _208 = _166 * _170;
    float _210 = _206;
    if (_196 < fp_c9_1._m0[32].w)
    {
        _210 = _206 * (-5.0);
    }
    float _212 = _158 + (-fp_c5_1._m0[23].x);
    float _214 = fma(_166, _166, -(_168 * _168));
    float _216 = _164 + (-fp_c5_1._m0[23].z);
    float _218 = _160 + (-fp_c5_1._m0[23].y);
    float _220 = (_200 * 0.5) * _200;
    float _222 = _80.x;
    float _224 = _80.z;
    float _226 = max(0.0, ((-_168) + 1.2000000476837158203125) * (clamp(fma(_210, -(1.0 / fma(clamp((-_168) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].y), 0.0, 1.0) * clamp(fma(_210, -(1.0 / fma(clamp((-_168) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].y), 0.0, 1.0))) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w);
    float _228 = inversesqrt(fma(_216, _216, fma(_218, _218, _212 * _212)));
    float _230 = clamp(texture(fp_tex_tcb_C, vec2(_90, _92)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _232 = _212 * _228;
    float _234 = _218 * _228;
    float _236 = _216 * _228;
    float _238 = fma((-_108) + fp_c6_1._m0[92].x, _230, _108);
    float _240 = fma(_238, -fp_c6_1._m0[9].x, _238);
    float _242 = clamp(_182 + (-0.0), 0.0, 1.0);
    float _244 = fma((-_110) + fp_c6_1._m0[92].y, _230, _110);
    float _246 = fma((-_112) + fp_c6_1._m0[92].z, _230, _112);
    float _248 = _156 * _156;
    float _250 = fma(fma(_240, -fp_c6_1._m0[39].x, _240), _242, _240 * fp_c6_1._m0[39].x);
    float _252 = _248 * _248;
    float _254 = fma(_168, -fp_c5_1._m0[23].y, _166 * (-fp_c5_1._m0[23].x));
    float _256 = max(fma(_170, _236, fma(_168, _234, _166 * _232)), fp_c1_1._m0[0].z) * max(fma(_170, _236, fma(_168, _234, _166 * _232)), fp_c1_1._m0[0].z);
    int _259 = max(0, min(int(trunc((_224 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _261 = max(fma(_164, _236, fma(_160, _234, _158 * _232)), fp_c1_1._m0[0].z);
    float _263 = max(fma(_170, -fp_c5_1._m0[23].z, _254), fp_c1_1._m0[0].z);
    uint _266 = uint(int(uint((((int(uint(_259) >> uint(16)) * 20) << 16) + (((_259 & 65535) * 20) + max(0, min(int(trunc((_222 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _268 = fp_c10_1._m0[int(uint(int(_266)) >> uint(2))][int(_266) & 3];
    float _270 = fma(_244, -fp_c6_1._m0[9].x, _244);
    float _272 = 1.0 / (_220 + fma(_184, -_220, _184));
    float _274 = exp2(_261 * fma(_261, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _276 = fma(_238 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _278 = fma(_246, -fp_c6_1._m0[9].x, _246);
    float _280 = fma(_244 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _282 = fma(_246 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _284 = fma(fma(_270, -fp_c6_1._m0[39].y, _270), _242, _270 * fp_c6_1._m0[39].y);
    float _286 = (_272 * (1.0 / (_220 + fma(_220, -_263, _263)))) * ((_248 * (1.0 / max(fma(_256, _252, -_256) + 1.0, fp_c1_1._m0[0].z))) * (_248 * (1.0 / max(fma(_256, _252, -_256) + 1.0, fp_c1_1._m0[0].z))));
    float _288 = fma(fma(_278, -fp_c6_1._m0[39].z, _278), _242, _278 * fp_c6_1._m0[39].z);
    float _290 = clamp(fma(_170, -fp_c5_1._m0[23].z, _254), 0.0, 1.0);
    float _292 = fma(_192.x, fma(_276, _188, _190), fma(_226, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_214, fp_c5_1._m0[31].x, (fma(_170, fp_c5_1._m0[25].z, fma(_168, fp_c5_1._m0[25].y, _166 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_208, fp_c5_1._m0[28].w, fma(_204, fp_c5_1._m0[28].z, fma(_202, fp_c5_1._m0[28].y, _198 * fp_c5_1._m0[28].x)))))) * fma(_276, -_250, _250));
    float _294 = fma(_192.y, fma(_280, _188, _190), fma(_226, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_214, fp_c5_1._m0[31].y, (fma(_170, fp_c5_1._m0[26].z, fma(_168, fp_c5_1._m0[26].y, _166 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_208, fp_c5_1._m0[29].w, fma(_204, fp_c5_1._m0[29].z, fma(_202, fp_c5_1._m0[29].y, _198 * fp_c5_1._m0[29].x)))))) * fma(_280, -_284, _284));
    float _296 = fma(_192.z, fma(_282, _188, _190), fma(_226, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_214, fp_c5_1._m0[31].z, (fma(_170, fp_c5_1._m0[27].z, fma(_168, fp_c5_1._m0[27].y, _166 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_208, fp_c5_1._m0[30].w, fma(_204, fp_c5_1._m0[30].z, fma(_202, fp_c5_1._m0[30].y, _198 * fp_c5_1._m0[30].x)))))) * fma(_282, -_288, _288));
    float _298 = clamp(texture(fp_tex_tcb_18, vec2(_90, _92)).x + (-0.0), 0.0, 1.0);
    float _300 = clamp((-fma(max((-_114.x) + 1.0, (-_114.y) + 1.0), clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_78.x * gl_FragCoord.w) * _150, (_78.y * gl_FragCoord.w) * _150)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _302 = floatBitsToInt(_268);
    float _304 = _296;
    float _306 = _292;
    float _308 = _294;
    float _310 = _292;
    float _312 = _294;
    float _314 = _296;
    if (floatBitsToInt(_268) != (-1))
    {
        int _316 = 0;
        float _320;
        float _322;
        float _324;
        int _410;
        do
        {
            int _318 = _302 & 255;
            _320 = _306;
            _322 = _308;
            _324 = _304;
            _328 = uint(_318) >= 30u;
            if (_328)
            {
                break;
            }
            int _330 = _318 << 4;
            uint _332 = uint(int(uint(_330 + 7360) >> uint(2)));
            int _334 = int(_332) + 1;
            uint _336 = uint(int(uint(_330 + 7368) >> uint(2)));
            float _338 = (-_222) + fp_c10_1._m0[int(uint(int(_332)) >> uint(2))][int(_332) & 3];
            float _340 = (-_196) + fp_c10_1._m0[int(uint(_334) >> uint(2))][_334 & 3];
            float _342 = (-_224) + fp_c10_1._m0[int(uint(int(_336)) >> uint(2))][int(_336) & 3];
            float _344 = fma(_342, _342, fma(_340, _340, _338 * _338));
            float _346 = _338 * inversesqrt(_344);
            float _348 = _340 * inversesqrt(_344);
            float _350 = _342 * inversesqrt(_344);
            float _352 = _158 + _346;
            float _354 = _160 + _348;
            float _356 = _164 + _350;
            uint _358 = uint(int(uint(_330 + 6880) >> uint(2)));
            int _360 = int(_358) + 1;
            float _362 = inversesqrt(fma(_356, _356, fma(_354, _354, _352 * _352)));
            float _364 = _352 * _362;
            float _366 = _354 * _362;
            float _368 = _356 * _362;
            uint _370 = uint(int(uint(_330 + 8320) >> uint(2)));
            uint _372 = uint(int(uint(_330 + 6408) >> uint(2)));
            float _374 = fma(_170, _350, fma(_168, _348, _166 * _346));
            float _376 = max(_374, fp_c1_1._m0[0].z);
            float _378 = max(fma(_164, _368, fma(_160, _366, _158 * _364)), fp_c1_1._m0[0].z);
            float _380 = max(fma(_170, _368, fma(_168, _366, _166 * _364)), fp_c1_1._m0[0].z) * max(fma(_170, _368, fma(_168, _366, _166 * _364)), fp_c1_1._m0[0].z);
            float _382 = exp2(_378 * fma(_378, fp_c1_1._m0[0].w, -6.9831600189208984375));
            uint _384 = uint(int(uint(_330 + 6400) >> uint(2)));
            int _386 = int(_384) + 1;
            bool _388 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3]) != 0;
            float _390 = (_272 * (1.0 / (_220 + fma(_220, -_376, _376)))) * ((_248 * (1.0 / max(fma(_252, _380, -_380) + 1.0, fp_c1_1._m0[0].z))) * (_248 * (1.0 / max(fma(_252, _380, -_380) + 1.0, fp_c1_1._m0[0].z))));
            float _392 = _276 + fma(_276, -_382, _382);
            float _394 = _392;
            if (!_388)
            {
                _394 = 1.0;
            }
            float _396 = _394;
            if (_388)
            {
                uint _398 = uint(int(uint(_330 + 7840) >> uint(2)));
                int _400 = int(_398) + 1;
                uint _402 = uint(int(uint(_330 + 7848) >> uint(2)));
                uint _404 = uint(int(uint(_330 + 6888) >> uint(2)));
                float _406 = fp_c10_1._m0[int(uint(int(_404)) >> uint(2))][int(_404) & 3];
                int _408 = int(_404) + 1;
                _396 = exp2(fp_c10_1._m0[int(uint(_408) >> uint(2))][_408 & 3] * log2(clamp(((-_406) + fma(_350, -fp_c10_1._m0[int(uint(int(_402)) >> uint(2))][int(_402) & 3], fma(_348, -fp_c10_1._m0[int(uint(_400) >> uint(2))][_400 & 3], _346 * (-fp_c10_1._m0[int(uint(int(_398)) >> uint(2))][int(_398) & 3])))) * (1.0 / ((-_406) + 1.0)), 0.0, 1.0)));
            }
            _410 = _316 + 1;
            float _412 = (exp2(fp_c10_1._m0[int(uint(_360) >> uint(2))][_360 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_358)) >> uint(2))][int(_358) & 3], -sqrt(_344), fp_c1_1._m0[0].y), 0.0, 1.0))) * _396) * clamp(_374 + (-0.0), 0.0, 1.0);
            float _414 = fma(fp_c10_1._m0[int(uint(int(_372)) >> uint(2))][int(_372) & 3] * _412, fma(_288, fp_c1_1._m0[1].y, ((_282 + fma(_282, -_382, _382)) * _390) * 0.079577468335628509521484375), _304);
            float _416 = fma(fp_c10_1._m0[int(uint(int(_384)) >> uint(2))][int(_384) & 3] * _412, fma(_250, fp_c1_1._m0[1].y, (_392 * _390) * 0.079577468335628509521484375), _306);
            float _418 = fma(fp_c10_1._m0[int(uint(_386) >> uint(2))][_386 & 3] * _412, fma(_284, fp_c1_1._m0[1].y, ((_280 + fma(_280, -_382, _382)) * _390) * 0.079577468335628509521484375), _308);
            _302 = int(uint(_302) >> uint(8));
            _316 = _410;
            _304 = _414;
            _306 = _416;
            _308 = _418;
            _320 = _416;
            _322 = _418;
            _324 = _414;
        } while (!(_410 >= 4));
        _328 = false;
        _310 = _320;
        _312 = _322;
        _314 = _324;
        if ((_302 & 255) == 30)
        {
            float _420 = 1.0 / (fma(_224, fp_c10_1._m0[565].z, fma(_196, fp_c10_1._m0[565].y, _222 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _422 = 1.0 / fp_c10_1._m0[561].y;
            float _424 = _224 + (-fp_c10_1._m0[557].z);
            float _426 = _424 * fp_c10_1._m0[558].x;
            float _428 = (-_222) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_422, fp_c10_1._m0[557].x);
            float _430 = (-_224) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_422, fp_c10_1._m0[557].z);
            float _432 = _222 + (-fp_c10_1._m0[557].x);
            float _434 = _428 * _428;
            float _436 = _432 * fp_c10_1._m0[558].z;
            float _438 = fma(_424, _424, _432 * _432);
            float _440 = sqrt(fma(_430, _430, _434)) * (-fp_c10_1._m0[558].y);
            float _442 = ((-float(_426 < _436)) + float(_426 > _436)) * fp_c10_1._m0[561].y;
            float _444 = inversesqrt(fma(_430, _430, fma(_440, _440, _434)));
            float _446 = _428 * _444;
            float _448 = _440 * _444;
            float _450 = _430 * _444;
            float _452 = fma(_424, fp_c10_1._m0[558].z, _432 * fp_c10_1._m0[558].x);
            float _454 = _158 + _446;
            float _456 = _160 + _448;
            bool _458 = _452 > 0.0;
            float _460 = inversesqrt(fma(_450, _450, _446 * _446));
            float _462 = _164 + _450;
            float _464 = inversesqrt(fma(_462, _462, fma(_456, _456, _454 * _454)));
            float _466 = fma(_170, _450, fma(_168, _448, _166 * _446));
            float _468 = _454 * _464;
            float _470 = _456 * _464;
            float _472 = _462 * _464;
            float _474 = _462;
            if (_458)
            {
                _474 = sqrt(_438);
            }
            float _476 = _474;
            if (!_458)
            {
                _476 = 1.0;
            }
            float _478 = max(_466, fp_c1_1._m0[0].z);
            float _480 = max(fma(_170, _472, fma(_168, _470, _166 * _468)), fp_c1_1._m0[0].z) * max(fma(_170, _472, fma(_168, _470, _166 * _468)), fp_c1_1._m0[0].z);
            bool _482 = fma(_424 * inversesqrt(_438), fp_c10_1._m0[558].z, (_432 * inversesqrt(_438)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _484 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_432, fma(_442, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_424 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_442 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_432, fma(_442, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_424 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_442 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _486 = max(fma(_164, _472, fma(_160, _470, _158 * _468)), fp_c1_1._m0[0].z);
            float _488 = clamp(fma(_452 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].y), 0.0, 1.0) * clamp(fma(_452 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].y), 0.0, 1.0);
            float _490 = log2(clamp((fma(_450 * _460, -fp_c10_1._m0[558].z, (_446 * _460) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _492 = _490;
            if (_482)
            {
                _492 = fma(_484, -_484, fp_c1_1._m0[0].y) * fma(_484, -_484, fp_c1_1._m0[0].y);
            }
            float _494 = _492;
            if (!_482)
            {
                _494 = 1.0;
            }
            float _496 = exp2(_486 * fma(_486, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _498 = (_272 * (1.0 / (_220 + fma(_220, -_478, _478)))) * ((_248 * (1.0 / max(fma(_252, _480, -_480) + 1.0, fp_c1_1._m0[0].z))) * (_248 * (1.0 / max(fma(_252, _480, -_480) + 1.0, fp_c1_1._m0[0].z))));
            float _500 = (min(fma(_488, -_488, fp_c1_1._m0[0].y) * fma(_488, -_488, fp_c1_1._m0[0].y), _494) * (exp2(log2(clamp(fma(_476, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_490))) * clamp(_466 + (-0.0), 0.0, 1.0);
            float _502 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_224, fp_c10_1._m0[562].z, fma(_196, fp_c10_1._m0[562].y, _222 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _420, 0.5, 0.5), (-fma((fma(_224, fp_c10_1._m0[563].z, fma(_196, fp_c10_1._m0[563].y, _222 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _420, 0.5, 0.5)) + 1.0)).z > fma((fma(_224, fp_c10_1._m0[564].z, fma(_196, fp_c10_1._m0[564].y, _222 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _420, 0.5, 0.5)) || (_452 <= 0.0));
            _310 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _500) * fma(_250, fp_c1_1._m0[1].y, ((_276 + fma(_276, -_496, _496)) * _498) * 0.079577468335628509521484375), _502, _320);
            _312 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _500) * fma(_284, fp_c1_1._m0[1].y, ((_280 + fma(_280, -_496, _496)) * _498) * 0.079577468335628509521484375), _502, _322);
            _314 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _500) * fma(_288, fp_c1_1._m0[1].y, ((_282 + fma(_282, -_496, _496)) * _498) * 0.079577468335628509521484375), _502, _324);
        }
    }
    float _504 = _222 + (-fp_c3_1._m0[11].w);
    float _506 = _196 + (-fp_c3_1._m0[12].w);
    float _508 = _224 + (-fp_c3_1._m0[13].w);
    float _510 = fma(_508, _508, fma(_506, _506, _504 * _504));
    float _512 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _514 = fma(_194.x * fp_c6_1._m0[92].x, _512, fma(_298, _310, _300 * (fma(_286 * (_276 + fma(_276, -_274, _274)), fp_c1_1._m0[1].x, _250 * 0.3183098733425140380859375) * (_290 * fp_c5_1._m0[5].x))));
    float _516 = clamp(fma(_298 * _300, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _518 = fma(_194.y * fp_c6_1._m0[92].y, _512, fma(_298, _312, _300 * (fma(_286 * (_280 + fma(_280, -_274, _274)), fp_c1_1._m0[1].x, _284 * 0.3183098733425140380859375) * (_290 * fp_c5_1._m0[5].y))));
    float _520 = clamp(fma(fma(_224, fp_c5_1._m0[14].z, fma(_196, fp_c5_1._m0[14].y, _222 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _522 = exp2(log2(clamp(sqrt(_510) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_508 * inversesqrt(_510), fp_c5_1._m0[23].z, fma(_506 * inversesqrt(_510), fp_c5_1._m0[23].y, (_504 * inversesqrt(_510)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _524 = fma(_194.z * fp_c6_1._m0[92].z, _512, fma(_298, _314, _300 * (fma(_286 * (_282 + fma(_282, -_274, _274)), fp_c1_1._m0[1].x, _288 * 0.3183098733425140380859375) * (_290 * fp_c5_1._m0[5].z))));
    float _526 = fma((-_514) + fp_c5_1._m0[13].x, _520, _514);
    float _528 = fma((-_524) + fp_c5_1._m0[13].z, _520, _524);
    float _530 = fma((-_518) + fp_c5_1._m0[13].y, _520, _518);
    float _532 = clamp((-exp2((clamp(fma(sqrt(_510), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_526) + fma(fma((_522 * fp_c7_1._m0[55].x) * _516, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _532, _526);
    _83.y = fma((-_530) + fma(fma((_522 * fp_c7_1._m0[55].y) * _516, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _532, _530);
    _83.z = fma((-_528) + fma(fma((_522 * fp_c7_1._m0[55].z) * _516, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _532, _528);
    _83.w = 1.0;
}


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
layout(binding = 3) uniform sampler2D fp_tex_tcb_18;
layout(binding = 4) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _64;
layout(location = 5) in vec4 _66;
layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 3) in vec4 _76;
layout(location = 0) out vec4 _79;
uint _6[12];

void main()
{
    bool _300 = false;
    float _86 = 1.0 / (_64.z * gl_FragCoord.w);
    float _88 = _68.x;
    float _90 = _68.y;
    float _92 = 1.0 / _66.w;
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _98 = _96.x;
    float _100 = _96.y;
    vec2 _102 = texture(fp_tex_tcb_2A, vec2(fma(_66.x * _92, 0.5, 0.5), fma(_66.y * _92, -0.5, 0.5))).xy;
    vec3 _106 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _108 = _106.x;
    float _110 = _106.y;
    float _112 = _106.z;
    float _114 = _70.x;
    float _116 = _70.y;
    float _118 = _70.z;
    float _120 = _72.z;
    float _122 = _72.x;
    float _124 = _72.y;
    float _126 = _72.w;
    float _128 = _74.x;
    float _130 = _74.y;
    float _132 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _134 = _114 * _132;
    float _136 = _118 * _132;
    float _138 = _116 * _132;
    float _140 = _74.z;
    float _142 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].z);
    float _144 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _146 = fma(_134, _144, fma(_98, _122, _100 * (fma(_138, _120, -(_136 * _124)) * _126)));
    float _148 = fma(_138, _144, fma(_98, _124, _100 * (fma(_136, _122, -(_134 * _120)) * _126)));
    float _150 = fma(_136, _144, fma(_98, _120, _100 * (fma(_134, _124, -(_138 * _122)) * _126)));
    float _152 = inversesqrt(fma(_140, _140, fma(_130, _130, _128 * _128)));
    float _154 = _128 * (-_152);
    float _156 = _130 * (-_152);
    float _158 = _140 * (-_152);
    float _160 = inversesqrt(fma(_150, _150, fma(_148, _148, _146 * _146)));
    float _162 = _146 * _160;
    float _164 = _148 * _160;
    float _166 = _150 * _160;
    float _168 = fma(_166, -_158, fma(_164, -_156, _162 * (-_154)));
    float _170 = fma(_166, _158, fma(_164, _156, _162 * _154));
    float _172 = fma(_164 * (-_170), -2.0, -_156);
    float _174 = fma(_162 * (-_170), -2.0, -_154);
    float _176 = fma(_166 * (-_170), -2.0, -_158);
    float _178 = max(_170, fp_c1_1._m0[0].x);
    float _180 = 1.0 / max(abs(_176), max(abs(_174), abs(_172)));
    float _182 = max(fma(_158, fma(_166 * _168, -2.0, -_158), fma(_156, fma(_164 * _168, -2.0, -_156), _154 * fma(_162 * _168, -2.0, -_154))), fp_c1_1._m0[0].x);
    vec3 _184 = texture(fp_tex_tcb_1E, vec2(fma(_182, fp_c6_1._m0[51].x, _68.z), _68.w)).xyz;
    vec2 _186 = texture(fp_tex_tcb_38, vec2(_178, (-_142) + (-0.0))).xy;
    float _188 = _186.x;
    float _190 = _186.y;
    vec3 _192 = texture(fp_tex_tcb_36, vec4(_174 * _180, _172 * _180, _176 * _180, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_142 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _194 = _154 + (-fp_c5_1._m0[23].x);
    float _196 = _156 + (-fp_c5_1._m0[23].y);
    float _198 = _158 + (-fp_c5_1._m0[23].z);
    float _200 = fma(_142, 0.5, 0.5);
    float _202 = (_200 * 0.5) * _200;
    float _204 = _76.x;
    float _206 = _76.z;
    float _208 = inversesqrt(fma(_198, _198, fma(_196, _196, _194 * _194)));
    float _210 = _194 * _208;
    float _212 = _196 * _208;
    float _214 = _198 * _208;
    float _216 = _162 * _164;
    float _218 = _164 * _166;
    float _220 = _162 * _166;
    float _222 = _166 * _166;
    float _224 = _142 * _142;
    float _226 = max(fma(_166, _214, fma(_164, _212, _162 * _210)), fp_c1_1._m0[0].x) * max(fma(_166, _214, fma(_164, _212, _162 * _210)), fp_c1_1._m0[0].x);
    float _228 = fma(_164, -fp_c5_1._m0[23].y, _162 * (-fp_c5_1._m0[23].x));
    float _230 = max(fma(_166, -fp_c5_1._m0[23].z, _228), fp_c1_1._m0[0].x);
    float _232 = max(fma(_158, _214, fma(_156, _212, _154 * _210)), fp_c1_1._m0[0].x);
    int _235 = max(0, min(int(trunc((_206 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _237 = fma(_162, _162, -(_164 * _164));
    float _239 = exp2(_232 * fma(_232, fp_c1_1._m0[0].y, -6.9831600189208984375));
    float _241 = _110 * fp_c6_1._m0[41].z;
    float _243 = _108 * fp_c6_1._m0[41].z;
    float _245 = _112 * fp_c6_1._m0[41].z;
    uint _248 = uint(int(uint((((int(uint(_235) >> uint(16)) * 20) << 16) + (((_235 & 65535) * 20) + max(0, min(int(trunc((_204 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _250 = fp_c10_1._m0[int(uint(int(_248)) >> uint(2))][int(_248) & 3];
    float _252 = exp2(_182 * fma(_182, fp_c1_1._m0[0].y, -6.9831600189208984375));
    float _254 = fma(_112, -fp_c6_1._m0[9].x, _112);
    float _256 = ((1.0 / (_202 + fma(_202, -_178, _178))) * (1.0 / (_202 + fma(_202, -_230, _230)))) * ((_224 * (1.0 / max(fma(_226, _224 * _224, -_226) + 1.0, fp_c1_1._m0[0].x))) * (_224 * (1.0 / max(fma(_226, _224 * _224, -_226) + 1.0, fp_c1_1._m0[0].x))));
    float _258 = fma(_110, -fp_c6_1._m0[9].x, _110);
    float _260 = clamp(fma(_166, -fp_c5_1._m0[23].z, _228), 0.0, 1.0);
    float _262 = clamp((-fma(max((-_102.x) + 1.0, (-_102.y) + 1.0), clamp(_76.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_64.x * gl_FragCoord.w) * _86, (_64.y * gl_FragCoord.w) * _86)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _264 = fma(_108, -fp_c6_1._m0[9].x, _108);
    float _266 = clamp(texture(fp_tex_tcb_18, vec2(_88, _90)).x + (-0.0), 0.0, 1.0);
    float _268 = fma(max(0.0, fma(_237, fp_c5_1._m0[31].y, (fma(_166, fp_c5_1._m0[26].z, fma(_164, fp_c5_1._m0[26].y, _162 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_220, fp_c5_1._m0[29].w, fma(_222, fp_c5_1._m0[29].z, fma(_218, fp_c5_1._m0[29].y, _216 * fp_c5_1._m0[29].x))))), fma(_241, -_258, _258), fma(fma(_241, _188, _190), _192.y, (_241 + fma(_241, -_252, _252)) * (_110 * (_184.y * fp_c6_1._m0[50].w))));
    float _270 = fma(max(0.0, fma(_237, fp_c5_1._m0[31].z, (fma(_166, fp_c5_1._m0[27].z, fma(_164, fp_c5_1._m0[27].y, _162 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_220, fp_c5_1._m0[30].w, fma(_222, fp_c5_1._m0[30].z, fma(_218, fp_c5_1._m0[30].y, _216 * fp_c5_1._m0[30].x))))), fma(_245, -_254, _254), fma(fma(_245, _188, _190), _192.z, (_245 + fma(_245, -_252, _252)) * (_112 * (_184.z * fp_c6_1._m0[50].w))));
    float _272 = fma(max(0.0, fma(_237, fp_c5_1._m0[31].x, (fma(_166, fp_c5_1._m0[25].z, fma(_164, fp_c5_1._m0[25].y, _162 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_220, fp_c5_1._m0[28].w, fma(_222, fp_c5_1._m0[28].z, fma(_218, fp_c5_1._m0[28].y, _216 * fp_c5_1._m0[28].x))))), fma(_243, -_264, _264), fma(fma(_243, _188, _190), _192.x, (_243 + fma(_243, -_252, _252)) * (_108 * (_184.x * fp_c6_1._m0[50].w))));
    int _274 = floatBitsToInt(_250);
    float _276 = _268;
    float _278 = _272;
    float _280 = _270;
    float _282 = _272;
    float _284 = _268;
    float _286 = _270;
    if (floatBitsToInt(_250) != (-1))
    {
        int _288 = 0;
        float _292;
        float _294;
        float _296;
        int _382;
        do
        {
            int _290 = _274 & 255;
            _292 = _278;
            _294 = _276;
            _296 = _280;
            _300 = uint(_290) >= 30u;
            if (_300)
            {
                break;
            }
            int _302 = _290 << 4;
            uint _304 = uint(int(uint(_302 + 7360) >> uint(2)));
            int _306 = int(_304) + 1;
            uint _308 = uint(int(uint(_302 + 7368) >> uint(2)));
            float _310 = (-_204) + fp_c10_1._m0[int(uint(int(_304)) >> uint(2))][int(_304) & 3];
            float _312 = fp_c10_1._m0[int(uint(_306) >> uint(2))][_306 & 3] + (-_76.y);
            float _314 = (-_206) + fp_c10_1._m0[int(uint(int(_308)) >> uint(2))][int(_308) & 3];
            float _316 = fma(_314, _314, fma(_312, _312, _310 * _310));
            float _318 = _310 * inversesqrt(_316);
            float _320 = _312 * inversesqrt(_316);
            float _322 = _314 * inversesqrt(_316);
            float _324 = _154 + _318;
            float _326 = _156 + _320;
            float _328 = _158 + _322;
            uint _330 = uint(int(uint(_302 + 6880) >> uint(2)));
            int _332 = int(_330) + 1;
            float _334 = inversesqrt(fma(_328, _328, fma(_326, _326, _324 * _324)));
            float _336 = _324 * _334;
            float _338 = _326 * _334;
            float _340 = _328 * _334;
            uint _342 = uint(int(uint(_302 + 8320) >> uint(2)));
            float _344 = fma(_166, _322, fma(_164, _320, _162 * _318));
            float _346 = max(fma(_158, _340, fma(_156, _338, _154 * _336)), fp_c1_1._m0[0].x);
            float _348 = max(fma(_166, _340, fma(_164, _338, _162 * _336)), fp_c1_1._m0[0].x) * max(fma(_166, _340, fma(_164, _338, _162 * _336)), fp_c1_1._m0[0].x);
            float _350 = max(_344, fp_c1_1._m0[0].x);
            float _352 = fp_c10_1._m0[int(uint(_332) >> uint(2))][_332 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_330)) >> uint(2))][int(_330) & 3], -sqrt(_316), fp_c1_1._m0[1].x), 0.0, 1.0));
            float _354 = exp2(_346 * fma(_346, fp_c1_1._m0[0].y, -6.9831600189208984375));
            uint _356 = uint(int(uint(_302 + 6408) >> uint(2)));
            uint _358 = uint(int(uint(_302 + 6400) >> uint(2)));
            int _360 = int(_358) + 1;
            bool _362 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_342)) >> uint(2))][int(_342) & 3]) != 0;
            float _364 = ((1.0 / (_202 + fma(_202, -_178, _178))) * (1.0 / (_202 + fma(_202, -_350, _350)))) * ((_224 * (1.0 / max(fma(_224 * _224, _348, -_348) + 1.0, fp_c1_1._m0[0].x))) * (_224 * (1.0 / max(fma(_224 * _224, _348, -_348) + 1.0, fp_c1_1._m0[0].x))));
            float _366 = _352;
            if (!_362)
            {
                _366 = 1.0;
            }
            float _368 = _366;
            if (_362)
            {
                uint _370 = uint(int(uint(_302 + 7840) >> uint(2)));
                int _372 = int(_370) + 1;
                uint _374 = uint(int(uint(_302 + 7848) >> uint(2)));
                uint _376 = uint(int(uint(_302 + 6888) >> uint(2)));
                float _378 = fp_c10_1._m0[int(uint(int(_376)) >> uint(2))][int(_376) & 3];
                int _380 = int(_376) + 1;
                _368 = exp2(fp_c10_1._m0[int(uint(_380) >> uint(2))][_380 & 3] * log2(clamp(((-_378) + fma(_322, -fp_c10_1._m0[int(uint(int(_374)) >> uint(2))][int(_374) & 3], fma(_320, -fp_c10_1._m0[int(uint(_372) >> uint(2))][_372 & 3], _318 * (-fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3])))) * (1.0 / ((-_378) + 1.0)), 0.0, 1.0)));
            }
            _382 = _288 + 1;
            float _384 = (exp2(_352) * _368) * clamp(_344 + (-0.0), 0.0, 1.0);
            float _386 = fma(fp_c10_1._m0[int(uint(_360) >> uint(2))][_360 & 3] * _384, fma(fma(_110, -fp_c6_1._m0[9].x, _110), fp_c1_1._m0[1].y, ((_241 + fma(_241, -_354, _354)) * _364) * 0.079577468335628509521484375), _276);
            float _388 = fma(fp_c10_1._m0[int(uint(int(_358)) >> uint(2))][int(_358) & 3] * _384, fma(fma(_108, -fp_c6_1._m0[9].x, _108), fp_c1_1._m0[1].y, ((_243 + fma(_243, -_354, _354)) * _364) * 0.079577468335628509521484375), _278);
            float _390 = fma(fp_c10_1._m0[int(uint(int(_356)) >> uint(2))][int(_356) & 3] * _384, fma(fma(_112, -fp_c6_1._m0[9].x, _112), fp_c1_1._m0[1].y, ((_245 + fma(_245, -_354, _354)) * _364) * 0.079577468335628509521484375), _280);
            _274 = int(uint(_274) >> uint(8));
            _288 = _382;
            _276 = _386;
            _278 = _388;
            _280 = _390;
            _292 = _388;
            _294 = _386;
            _296 = _390;
        } while (!(_382 >= 4));
        _300 = false;
        _282 = _292;
        _284 = _294;
        _286 = _296;
        if ((_274 & 255) == 30)
        {
            float _392 = _76.y;
            float _394 = 1.0 / (fma(_206, fp_c10_1._m0[565].z, fma(_392, fp_c10_1._m0[565].y, _204 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _396 = 1.0 / fp_c10_1._m0[561].y;
            float _398 = _206 + (-fp_c10_1._m0[557].z);
            float _400 = _398 * fp_c10_1._m0[558].x;
            float _402 = (-_204) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_396, fp_c10_1._m0[557].x);
            float _404 = (-_206) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_396, fp_c10_1._m0[557].z);
            float _406 = _204 + (-fp_c10_1._m0[557].x);
            float _408 = _402 * _402;
            float _410 = sqrt(fma(_404, _404, _408)) * (-fp_c10_1._m0[558].y);
            float _412 = inversesqrt(fma(_404, _404, fma(_410, _410, _408)));
            float _414 = _406 * fp_c10_1._m0[558].z;
            float _416 = _402 * _412;
            float _418 = _410 * _412;
            float _420 = _404 * _412;
            float _422 = _154 + _416;
            float _424 = _156 + _418;
            float _426 = _158 + _420;
            float _428 = ((-float(_400 < _414)) + float(_400 > _414)) * fp_c10_1._m0[561].y;
            float _430 = fma(_166, _420, fma(_164, _418, _162 * _416));
            float _432 = inversesqrt(fma(_426, _426, fma(_424, _424, _422 * _422)));
            float _434 = _422 * _432;
            float _436 = _424 * _432;
            float _438 = _426 * _432;
            float _440 = fma(_398, _398, _406 * _406);
            float _442 = max(fma(_158, _438, fma(_156, _436, _154 * _434)), fp_c1_1._m0[0].x);
            float _444 = fma(_398, fp_c10_1._m0[558].z, _406 * fp_c10_1._m0[558].x);
            float _446 = max(fma(_166, _438, fma(_164, _436, _162 * _434)), fp_c1_1._m0[0].x) * max(fma(_166, _438, fma(_164, _436, _162 * _434)), fp_c1_1._m0[0].x);
            bool _448 = _444 > 0.0;
            float _450 = inversesqrt(fma(_420, _420, _416 * _416));
            float _452 = _416;
            if (_448)
            {
                _452 = sqrt(_440);
            }
            float _454 = _452;
            if (!_448)
            {
                _454 = 1.0;
            }
            float _456 = 1.0 / fp_c10_1._m0[561].w;
            bool _458 = fma(_398 * inversesqrt(_440), fp_c10_1._m0[558].z, (_406 * inversesqrt(_440)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _460 = max(_430, fp_c1_1._m0[0].x);
            float _462 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_406, fma(_428, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_398 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_428 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_406, fma(_428, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_398 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_428 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _464 = exp2(_442 * fma(_442, fp_c1_1._m0[0].y, -6.9831600189208984375));
            float _466 = _456;
            if (!_458)
            {
                _466 = 1.0;
            }
            float _468 = clamp(fma(_444 + (-fp_c10_1._m0[561].z), -_456, fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_444 + (-fp_c10_1._m0[561].z), -_456, fp_c1_1._m0[1].x), 0.0, 1.0);
            float _470 = _466;
            if (_458)
            {
                _470 = fma(_462, -_462, fp_c1_1._m0[1].x) * fma(_462, -_462, fp_c1_1._m0[1].x);
            }
            float _472 = ((1.0 / (_202 + fma(_202, -_178, _178))) * (1.0 / (_202 + fma(_202, -_460, _460)))) * ((_224 * (1.0 / max(fma(_224 * _224, _446, -_446) + 1.0, fp_c1_1._m0[0].x))) * (_224 * (1.0 / max(fma(_224 * _224, _446, -_446) + 1.0, fp_c1_1._m0[0].x))));
            float _474 = (min(fma(_468, -_468, fp_c1_1._m0[1].x) * fma(_468, -_468, fp_c1_1._m0[1].x), _470) * (exp2(log2(clamp(fma(_454, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_420 * _450, -fp_c10_1._m0[558].z, (_416 * _450) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_430 + (-0.0), 0.0, 1.0);
            float _476 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_206, fp_c10_1._m0[562].z, fma(_392, fp_c10_1._m0[562].y, _204 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _394, 0.5, 0.5), (-fma((fma(_206, fp_c10_1._m0[563].z, fma(_392, fp_c10_1._m0[563].y, _204 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _394, 0.5, 0.5)) + 1.0)).z > fma((fma(_206, fp_c10_1._m0[564].z, fma(_392, fp_c10_1._m0[564].y, _204 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _394, 0.5, 0.5)) || (_444 <= 0.0));
            _282 = fma(fma(fma(_108, -fp_c6_1._m0[9].x, _108), fp_c1_1._m0[1].y, ((_243 + fma(_243, -_464, _464)) * _472) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _474), _476, _292);
            _284 = fma(fma(fma(_110, -fp_c6_1._m0[9].x, _110), fp_c1_1._m0[1].y, ((_241 + fma(_241, -_464, _464)) * _472) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _474), _476, _294);
            _286 = fma(fma(fma(_112, -fp_c6_1._m0[9].x, _112), fp_c1_1._m0[1].y, ((_245 + fma(_245, -_464, _464)) * _472) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _474), _476, _296);
        }
    }
    float _478 = _204 + (-fp_c3_1._m0[11].w);
    float _480 = _76.y;
    float _482 = _206 + (-fp_c3_1._m0[13].w);
    float _484 = fma(_266, _282, _262 * ((_260 * fp_c5_1._m0[5].x) * fma((_243 + fma(_243, -_239, _239)) * _256, fp_c1_1._m0[0].w, _264 * 0.3183098733425140380859375)));
    float _486 = fma(_266, _284, _262 * ((_260 * fp_c5_1._m0[5].y) * fma((_241 + fma(_241, -_239, _239)) * _256, fp_c1_1._m0[0].w, _258 * 0.3183098733425140380859375)));
    float _488 = fma(_266, _286, _262 * ((_260 * fp_c5_1._m0[5].z) * fma((_245 + fma(_245, -_239, _239)) * _256, fp_c1_1._m0[0].w, _254 * 0.3183098733425140380859375)));
    float _490 = _480 + (-fp_c3_1._m0[12].w);
    float _492 = fma(_482, _482, fma(_490, _490, _478 * _478));
    float _494 = clamp(fma(fma(_206, fp_c5_1._m0[14].z, fma(_480, fp_c5_1._m0[14].y, _204 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _496 = clamp(fma(_266 * _262, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _498 = exp2(log2(clamp(sqrt(_492) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_482 * inversesqrt(_492), fp_c5_1._m0[23].z, fma(_490 * inversesqrt(_492), fp_c5_1._m0[23].y, (_478 * inversesqrt(_492)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _500 = fma((-_484) + fp_c5_1._m0[13].x, _494, _484);
    float _502 = fma((-_486) + fp_c5_1._m0[13].y, _494, _486);
    float _504 = fma((-_488) + fp_c5_1._m0[13].z, _494, _488);
    float _506 = clamp((-exp2((clamp(fma(sqrt(_492), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_500) + fma(fma((_498 * fp_c7_1._m0[55].x) * _496, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _506, _500);
    _79.y = fma((-_502) + fma(fma((_498 * fp_c7_1._m0[55].y) * _496, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _506, _502);
    _79.z = fma((-_504) + fma(fma((_498 * fp_c7_1._m0[55].z) * _496, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _506, _504);
    _79.w = 1.0;
}


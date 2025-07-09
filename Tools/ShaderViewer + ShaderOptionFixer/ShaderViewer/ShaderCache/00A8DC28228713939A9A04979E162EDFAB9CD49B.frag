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

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

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
layout(binding = 6) uniform sampler2D fp_tex_tcb_18;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 2) in vec4 _74;
layout(location = 4) in vec4 _76;
layout(location = 6) in vec4 _78;
layout(location = 5) in vec4 _80;
layout(location = 3) in vec4 _82;
layout(location = 0) out vec4 _85;
uint _6[12];

void main()
{
    bool _324 = false;
    float _92 = _70.x;
    float _94 = _70.y;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    float _104 = _72.x;
    float _106 = _72.y;
    float _108 = _72.z;
    float _110 = _74.y;
    float _112 = _74.z;
    float _114 = _74.x;
    float _116 = _74.w;
    float _118 = _76.x;
    float _120 = _76.y;
    float _122 = _76.z;
    float _124 = 1.0 / (_78.z * gl_FragCoord.w);
    vec3 _128 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _130 = _128.x;
    float _132 = _128.y;
    float _134 = _128.z;
    float _136 = texture(fp_tex_tcb_12, vec2(_92, _94)).x;
    float _138 = inversesqrt(fma(_108, _108, fma(_106, _106, _104 * _104)));
    float _140 = _108 * _138;
    float _142 = _104 * _138;
    float _144 = _106 * _138;
    float _146 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _148 = fma(_142, _146, fma(_100, _114, _102 * (fma(_144, _112, -(_140 * _110)) * _116)));
    float _150 = fma(_144, _146, fma(_100, _110, _102 * (fma(_140, _114, -(_142 * _112)) * _116)));
    float _152 = fma(_140, _146, fma(_100, _112, _102 * (fma(_142, _110, -(_144 * _114)) * _116)));
    float _154 = inversesqrt(fma(_122, _122, fma(_120, _120, _118 * _118)));
    float _156 = _118 * (-_154);
    float _158 = _120 * (-_154);
    float _160 = inversesqrt(fma(_152, _152, fma(_150, _150, _148 * _148)));
    float _162 = _122 * (-_154);
    float _164 = _148 * _160;
    float _166 = _150 * _160;
    float _168 = _152 * _160;
    float _170 = max(texture(fp_tex_tcb_10, vec2(_92, _94)).x, fp_c1_1._m0[0].y);
    float _172 = fma(_168, _162, fma(_166, _158, _164 * _156));
    float _174 = 1.0 / _80.w;
    float _176 = fma(_164 * (-_172), -2.0, -_156);
    float _178 = fma(_166 * (-_172), -2.0, -_158);
    float _180 = fma(_168 * (-_172), -2.0, -_162);
    float _182 = max(_172, fp_c1_1._m0[0].w);
    float _184 = 1.0 / max(abs(_180), max(abs(_176), abs(_178)));
    vec2 _186 = texture(fp_tex_tcb_2A, vec2(fma(_80.x * _174, 0.5, 0.5), fma(_80.y * _174, -0.5, 0.5))).xy;
    vec2 _188 = texture(fp_tex_tcb_38, vec2(_182, (-_170) + (-0.0))).xy;
    float _190 = _188.x;
    float _192 = _188.y;
    vec3 _194 = texture(fp_tex_tcb_36, vec4(_176 * _184, _178 * _184, _180 * _184, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_170 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _196 = texture(fp_tex_tcb_14, vec2(_92, _94)).xyz;
    float _198 = _82.y;
    float _200 = _166 * _168;
    float _202 = _164 * _166;
    float _204 = fma(_164, _164, -(_166 * _166));
    float _206 = clamp(texture(fp_tex_tcb_C, vec2(_92, _94)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _208 = fma(_170, 0.5, 0.5);
    float _210 = _168 * _168;
    float _212 = _198 + (-fp_c9_1._m0[32].w);
    float _214 = _164 * _168;
    float _216 = _212;
    float _218 = _164;
    if (_198 < fp_c9_1._m0[32].w)
    {
        _216 = _212 * (-5.0);
    }
    float _220 = _156 + (-fp_c5_1._m0[23].x);
    float _222 = _82.x;
    float _224 = _82.z;
    float _226 = _158 + (-fp_c5_1._m0[23].y);
    float _228 = _162 + (-fp_c5_1._m0[23].z);
    float _230 = inversesqrt(fma(_228, _228, fma(_226, _226, _220 * _220)));
    float _232 = max(0.0, ((-_166) + 1.2000000476837158203125) * (clamp(fma(_216, -(1.0 / fma(clamp((-_166) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_216, -(1.0 / fma(clamp((-_166) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0))) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w);
    float _234 = _220 * _230;
    float _236 = _226 * _230;
    float _238 = _228 * _230;
    float _240 = fma((-_132) + fp_c6_1._m0[93].y, _206, _132);
    float _242 = fma((-_130) + fp_c6_1._m0[93].x, _206, _130);
    float _244 = _170 * _170;
    float _246 = fma((-_134) + fp_c6_1._m0[93].z, _206, _134);
    float _248 = fma(_166, -fp_c5_1._m0[23].y, _164 * (-fp_c5_1._m0[23].x));
    float _250 = _244 * _244;
    float _252 = max(fma(_168, _238, fma(_166, _236, _164 * _234)), fp_c1_1._m0[0].w) * max(fma(_168, _238, fma(_166, _236, _164 * _234)), fp_c1_1._m0[0].w);
    int _255 = max(0, min(int(trunc((_224 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _257 = max(fma(_162, _238, fma(_158, _236, _156 * _234)), fp_c1_1._m0[0].w);
    float _259 = (_208 * 0.5) * _208;
    float _261 = max(fma(_168, -fp_c5_1._m0[23].z, _248), fp_c1_1._m0[0].w);
    float _263 = 1.0 / (_259 + fma(_182, -_259, _182));
    uint _266 = uint(int(uint((((int(uint(_255) >> uint(16)) * 20) << 16) + (((_255 & 65535) * 20) + max(0, min(int(trunc((_222 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _268 = fp_c10_1._m0[int(uint(int(_266)) >> uint(2))][int(_266) & 3];
    float _270 = exp2(_257 * fma(_257, fp_c1_1._m0[1].x, -6.9831600189208984375));
    float _272 = fma(_136, _242 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _274 = fma(_242, -_136, _242);
    float _276 = fma(_136, _240 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _278 = fma(_136, _246 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _280 = fma(_240, -_136, _240);
    float _282 = fma(_246, -_136, _246);
    float _284 = (_263 * (1.0 / (_259 + fma(_259, -_261, _261)))) * ((_244 * (1.0 / max(fma(_252, _250, -_252) + 1.0, fp_c1_1._m0[0].w))) * (_244 * (1.0 / max(fma(_252, _250, -_252) + 1.0, fp_c1_1._m0[0].w))));
    float _286 = clamp(fma(_168, -fp_c5_1._m0[23].z, _248), 0.0, 1.0);
    float _288 = fma(_194.x, fma(_272, _190, _192), fma(_232, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_204, fp_c5_1._m0[31].x, (fma(_168, fp_c5_1._m0[25].z, fma(_166, fp_c5_1._m0[25].y, _164 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_214, fp_c5_1._m0[28].w, fma(_210, fp_c5_1._m0[28].z, fma(_200, fp_c5_1._m0[28].y, _202 * fp_c5_1._m0[28].x)))))) * fma(_272, -_274, _274));
    float _290 = fma(_194.y, fma(_276, _190, _192), fma(_232, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_204, fp_c5_1._m0[31].y, (fma(_168, fp_c5_1._m0[26].z, fma(_166, fp_c5_1._m0[26].y, _164 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_214, fp_c5_1._m0[29].w, fma(_210, fp_c5_1._m0[29].z, fma(_200, fp_c5_1._m0[29].y, _202 * fp_c5_1._m0[29].x)))))) * fma(_276, -_280, _280));
    float _292 = fma(_194.z, fma(_278, _190, _192), fma(_232, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_204, fp_c5_1._m0[31].z, (fma(_168, fp_c5_1._m0[27].z, fma(_166, fp_c5_1._m0[27].y, _164 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_214, fp_c5_1._m0[30].w, fma(_210, fp_c5_1._m0[30].z, fma(_200, fp_c5_1._m0[30].y, _202 * fp_c5_1._m0[30].x)))))) * fma(_278, -_282, _282));
    float _294 = clamp(texture(fp_tex_tcb_18, vec2(_92, _94)).x + (-0.0), 0.0, 1.0);
    float _296 = clamp((-fma(max((-_186.x) + 1.0, (-_186.y) + 1.0), clamp(_82.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_78.x * gl_FragCoord.w) * _124, (_78.y * gl_FragCoord.w) * _124)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _298 = _290;
    float _300 = _292;
    float _302 = _288;
    float _304 = _288;
    float _306 = _290;
    float _308 = _292;
    if (floatBitsToInt(_268) != (-1))
    {
        int _310 = floatBitsToInt(_268);
        int _312 = 0;
        float _316;
        float _318;
        float _320;
        int _406;
        do
        {
            int _314 = _310 & 255;
            _316 = _302;
            _318 = _298;
            _320 = _300;
            _324 = uint(_314) >= 30u;
            if (_324)
            {
                break;
            }
            int _326 = _314 << 4;
            uint _328 = uint(int(uint(_326 + 7360) >> uint(2)));
            int _330 = int(_328) + 1;
            uint _332 = uint(int(uint(_326 + 7368) >> uint(2)));
            float _334 = (-_222) + fp_c10_1._m0[int(uint(int(_328)) >> uint(2))][int(_328) & 3];
            float _336 = (-_198) + fp_c10_1._m0[int(uint(_330) >> uint(2))][_330 & 3];
            float _338 = (-_224) + fp_c10_1._m0[int(uint(int(_332)) >> uint(2))][int(_332) & 3];
            float _340 = fma(_338, _338, fma(_336, _336, _334 * _334));
            float _342 = _334 * inversesqrt(_340);
            float _344 = _336 * inversesqrt(_340);
            float _346 = _338 * inversesqrt(_340);
            float _348 = _156 + _342;
            float _350 = _158 + _344;
            float _352 = _162 + _346;
            uint _354 = uint(int(uint(_326 + 6880) >> uint(2)));
            int _356 = int(_354) + 1;
            float _358 = inversesqrt(fma(_352, _352, fma(_350, _350, _348 * _348)));
            float _360 = _348 * _358;
            float _362 = _350 * _358;
            float _364 = _352 * _358;
            uint _366 = uint(int(uint(_326 + 8320) >> uint(2)));
            float _368 = max(fma(_162, _364, fma(_158, _362, _156 * _360)), fp_c1_1._m0[0].w);
            float _370 = fma(_168, _346, fma(_166, _344, _164 * _342));
            float _372 = max(fma(_168, _364, fma(_166, _362, _164 * _360)), fp_c1_1._m0[0].w) * max(fma(_168, _364, fma(_166, _362, _164 * _360)), fp_c1_1._m0[0].w);
            float _374 = max(_370, fp_c1_1._m0[0].w);
            uint _376 = uint(int(uint(_326 + 6400) >> uint(2)));
            int _378 = int(_376) + 1;
            float _380 = exp2(_368 * fma(_368, fp_c1_1._m0[1].x, -6.9831600189208984375));
            uint _382 = uint(int(uint(_326 + 6408) >> uint(2)));
            bool _384 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3]) != 0;
            float _386 = (_263 * (1.0 / (_259 + fma(_259, -_374, _374)))) * ((_244 * (1.0 / max(fma(_250, _372, -_372) + 1.0, fp_c1_1._m0[0].w))) * (_244 * (1.0 / max(fma(_250, _372, -_372) + 1.0, fp_c1_1._m0[0].w))));
            float _388 = _272 + fma(_272, -_380, _380);
            float _390 = _388;
            if (!_384)
            {
                _390 = 1.0;
            }
            float _392 = _390;
            if (_384)
            {
                uint _394 = uint(int(uint(_326 + 7840) >> uint(2)));
                int _396 = int(_394) + 1;
                uint _398 = uint(int(uint(_326 + 6888) >> uint(2)));
                float _400 = fp_c10_1._m0[int(uint(int(_398)) >> uint(2))][int(_398) & 3];
                int _402 = int(_398) + 1;
                uint _404 = uint(int(uint(_326 + 7848) >> uint(2)));
                _392 = exp2(fp_c10_1._m0[int(uint(_402) >> uint(2))][_402 & 3] * log2(clamp(((-_400) + fma(_346, -fp_c10_1._m0[int(uint(int(_404)) >> uint(2))][int(_404) & 3], fma(_344, -fp_c10_1._m0[int(uint(_396) >> uint(2))][_396 & 3], _342 * (-fp_c10_1._m0[int(uint(int(_394)) >> uint(2))][int(_394) & 3])))) * (1.0 / ((-_400) + 1.0)), 0.0, 1.0)));
            }
            _406 = _312 + 1;
            float _408 = (exp2(fp_c10_1._m0[int(uint(_356) >> uint(2))][_356 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_354)) >> uint(2))][int(_354) & 3], -sqrt(_340), fp_c1_1._m0[0].x), 0.0, 1.0))) * _392) * clamp(_370 + (-0.0), 0.0, 1.0);
            float _410 = fma(fp_c10_1._m0[int(uint(_378) >> uint(2))][_378 & 3] * _408, fma(_280, fp_c1_1._m0[1].z, ((_276 + fma(_276, -_380, _380)) * _386) * 0.079577468335628509521484375), _298);
            float _412 = fma(fp_c10_1._m0[int(uint(int(_382)) >> uint(2))][int(_382) & 3] * _408, fma(_282, fp_c1_1._m0[1].z, ((_278 + fma(_278, -_380, _380)) * _386) * 0.079577468335628509521484375), _300);
            float _414 = fma(fp_c10_1._m0[int(uint(int(_376)) >> uint(2))][int(_376) & 3] * _408, fma(_274, fp_c1_1._m0[1].z, (_388 * _386) * 0.079577468335628509521484375), _302);
            _310 = int(uint(_310) >> uint(8));
            _312 = _406;
            _298 = _410;
            _300 = _412;
            _302 = _414;
            _316 = _414;
            _318 = _410;
            _320 = _412;
        } while (!(_406 >= 4));
        _324 = false;
        _304 = _316;
        _306 = _318;
        _308 = _320;
        if ((_310 & 255) == 30)
        {
            float _416 = 1.0 / (fma(_224, fp_c10_1._m0[565].z, fma(_198, fp_c10_1._m0[565].y, _222 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _418 = 1.0 / fp_c10_1._m0[561].y;
            float _420 = _224 + (-fp_c10_1._m0[557].z);
            float _422 = _420 * fp_c10_1._m0[558].x;
            float _424 = (-_222) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_418, fp_c10_1._m0[557].x);
            float _426 = (-_224) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_418, fp_c10_1._m0[557].z);
            float _428 = _222 + (-fp_c10_1._m0[557].x);
            float _430 = _424 * _424;
            float _432 = _428 * fp_c10_1._m0[558].z;
            float _434 = fma(_420, _420, _428 * _428);
            float _436 = sqrt(fma(_426, _426, _430)) * (-fp_c10_1._m0[558].y);
            float _438 = ((-float(_422 < _432)) + float(_422 > _432)) * fp_c10_1._m0[561].y;
            float _440 = inversesqrt(fma(_426, _426, fma(_436, _436, _430)));
            float _442 = _424 * _440;
            float _444 = _436 * _440;
            float _446 = _426 * _440;
            float _448 = _156 + _442;
            float _450 = fma(_420, fp_c10_1._m0[558].z, _428 * fp_c10_1._m0[558].x);
            float _452 = _158 + _444;
            float _454 = _162 + _446;
            float _456 = inversesqrt(fma(_446, _446, _442 * _442));
            bool _458 = _450 > 0.0;
            float _460 = fma(_168, _446, fma(_166, _444, _164 * _442));
            float _462 = inversesqrt(fma(_454, _454, fma(_452, _452, _448 * _448)));
            float _464 = _448 * _462;
            float _466 = _454 * _462;
            float _468 = _452 * _462;
            if (_458)
            {
                _218 = sqrt(_434);
            }
            float _470 = _218;
            if (!_458)
            {
                _470 = 1.0;
            }
            float _472 = max(fma(_162, _466, fma(_158, _468, _156 * _464)), fp_c1_1._m0[0].w);
            bool _474 = fma(_420 * inversesqrt(_434), fp_c10_1._m0[558].z, (_428 * inversesqrt(_434)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _476 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_428, fma(_438, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_420 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_438 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_428, fma(_438, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_420 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_438 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _478 = max(fma(_168, _466, fma(_166, _468, _164 * _464)), fp_c1_1._m0[0].w) * max(fma(_168, _466, fma(_166, _468, _164 * _464)), fp_c1_1._m0[0].w);
            float _480 = max(_460, fp_c1_1._m0[0].w);
            float _482 = fma(_259, -_480, _480);
            float _484 = clamp(fma(_450 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_450 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0);
            float _486 = _482;
            if (_474)
            {
                _486 = fma(_476, -_476, fp_c1_1._m0[0].x) * fma(_476, -_476, fp_c1_1._m0[0].x);
            }
            float _488 = exp2(_472 * fma(_472, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _490 = _486;
            if (!_474)
            {
                _490 = 1.0;
            }
            float _492 = (_263 * (1.0 / (_259 + _482))) * ((_244 * (1.0 / max(fma(_250, _478, -_478) + 1.0, fp_c1_1._m0[0].w))) * (_244 * (1.0 / max(fma(_250, _478, -_478) + 1.0, fp_c1_1._m0[0].w))));
            float _494 = (min(fma(_484, -_484, fp_c1_1._m0[0].x) * fma(_484, -_484, fp_c1_1._m0[0].x), _490) * (exp2(log2(clamp(fma(_470, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_446 * _456, -fp_c10_1._m0[558].z, (_442 * _456) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_460 + (-0.0), 0.0, 1.0);
            float _496 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_224, fp_c10_1._m0[562].z, fma(_198, fp_c10_1._m0[562].y, _222 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _416, 0.5, 0.5), (-fma((fma(_224, fp_c10_1._m0[563].z, fma(_198, fp_c10_1._m0[563].y, _222 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _416, 0.5, 0.5)) + 1.0)).z > fma((fma(_224, fp_c10_1._m0[564].z, fma(_198, fp_c10_1._m0[564].y, _222 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _416, 0.5, 0.5)) || (_450 <= 0.0));
            _304 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _494) * fma(_274, fp_c1_1._m0[1].z, ((_272 + fma(_272, -_488, _488)) * _492) * 0.079577468335628509521484375), _496, _316);
            _306 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _494) * fma(_280, fp_c1_1._m0[1].z, ((_276 + fma(_276, -_488, _488)) * _492) * 0.079577468335628509521484375), _496, _318);
            _308 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _494) * fma(_282, fp_c1_1._m0[1].z, ((_278 + fma(_278, -_488, _488)) * _492) * 0.079577468335628509521484375), _496, _320);
        }
    }
    float _498 = _222 + (-fp_c3_1._m0[11].w);
    float _500 = _198 + (-fp_c3_1._m0[12].w);
    float _502 = _224 + (-fp_c3_1._m0[13].w);
    float _504 = fma(_502, _502, fma(_500, _500, _498 * _498));
    float _506 = clamp(fma(fma(_224, fp_c5_1._m0[14].z, fma(_198, fp_c5_1._m0[14].y, _222 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _508 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _510 = clamp(fma(_294 * _296, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _512 = fma(_196.x * fp_c6_1._m0[93].x, _508, fma(_294, _304, _296 * (fma(_284 * (_272 + fma(_272, -_270, _270)), fp_c1_1._m0[1].y, _274 * 0.3183098733425140380859375) * (_286 * fp_c5_1._m0[5].x))));
    float _514 = fma(_196.y * fp_c6_1._m0[93].y, _508, fma(_294, _306, _296 * (fma(_284 * (_276 + fma(_276, -_270, _270)), fp_c1_1._m0[1].y, _280 * 0.3183098733425140380859375) * (_286 * fp_c5_1._m0[5].y))));
    float _516 = exp2(log2(clamp(sqrt(_504) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_502 * inversesqrt(_504), fp_c5_1._m0[23].z, fma(_500 * inversesqrt(_504), fp_c5_1._m0[23].y, (_498 * inversesqrt(_504)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _518 = fma(_196.z * fp_c6_1._m0[93].z, _508, fma(_294, _308, _296 * (fma(_284 * (_278 + fma(_278, -_270, _270)), fp_c1_1._m0[1].y, _282 * 0.3183098733425140380859375) * (_286 * fp_c5_1._m0[5].z))));
    float _520 = fma((-_512) + fp_c5_1._m0[13].x, _506, _512);
    float _522 = fma((-_514) + fp_c5_1._m0[13].y, _506, _514);
    float _524 = clamp((-exp2((clamp(fma(sqrt(_504), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    float _526 = fma((-_518) + fp_c5_1._m0[13].z, _506, _518);
    _85.x = fma((-_520) + fma(fma((_516 * fp_c7_1._m0[55].x) * _510, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _524, _520);
    _85.y = fma((-_522) + fma(fma((_516 * fp_c7_1._m0[55].y) * _510, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _524, _522);
    _85.z = fma((-_526) + fma(fma((_516 * fp_c7_1._m0[55].z) * _510, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _524, _526);
    _85.w = 1.0;
}


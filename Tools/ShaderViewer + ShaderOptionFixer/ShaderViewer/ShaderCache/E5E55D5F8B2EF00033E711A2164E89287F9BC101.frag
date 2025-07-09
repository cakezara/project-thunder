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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_18;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 2) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 6) in vec4 _72;
layout(location = 5) in vec4 _74;
layout(location = 3) in vec4 _76;
layout(location = 0) out vec4 _79;
uint _6[12];

void main()
{
    bool _302 = false;
    float _86 = _64.x;
    float _88 = _64.y;
    vec2 _92 = texture(fp_tex_tcb_E, vec2(_86, _88)).xy;
    float _94 = _92.x;
    float _96 = _92.y;
    float _98 = _66.x;
    float _100 = _66.y;
    float _102 = _66.z;
    float _104 = _68.y;
    float _106 = _68.z;
    float _108 = _68.x;
    float _110 = _68.w;
    float _112 = _70.x;
    float _114 = _70.y;
    float _116 = _70.z;
    float _118 = 1.0 / (_72.z * gl_FragCoord.w);
    float _120 = inversesqrt(fma(_102, _102, fma(_100, _100, _98 * _98)));
    float _122 = _102 * _120;
    float _124 = _98 * _120;
    float _126 = _100 * _120;
    float _128 = sqrt(clamp((-fma(_94, _94, _96 * _96)) + 1.0, 0.0, 1.0));
    float _130 = max(texture(fp_tex_tcb_10, vec2(_86, _88)).x, fp_c1_1._m0[0].x);
    float _132 = fma(_124, _128, fma(_94, _108, _96 * (fma(_126, _106, -(_122 * _104)) * _110)));
    float _134 = fma(_126, _128, fma(_94, _104, _96 * (fma(_122, _108, -(_124 * _106)) * _110)));
    float _136 = fma(_122, _128, fma(_94, _106, _96 * (fma(_124, _104, -(_126 * _108)) * _110)));
    float _138 = inversesqrt(fma(_116, _116, fma(_114, _114, _112 * _112)));
    float _140 = inversesqrt(fma(_136, _136, fma(_134, _134, _132 * _132)));
    float _142 = _112 * (-_138);
    float _144 = 1.0 / _74.w;
    float _146 = _114 * (-_138);
    float _148 = _116 * (-_138);
    float _150 = _132 * _140;
    float _152 = _134 * _140;
    float _154 = _136 * _140;
    float _156 = fma(_154, _148, fma(_152, _146, _150 * _142));
    float _158 = fma(_150 * (-_156), -2.0, -_142);
    float _160 = fma(_152 * (-_156), -2.0, -_146);
    float _162 = fma(_154 * (-_156), -2.0, -_148);
    float _164 = 1.0 / max(abs(_162), max(abs(_158), abs(_160)));
    vec2 _166 = texture(fp_tex_tcb_2A, vec2(fma(_74.x * _144, 0.5, 0.5), fma(_74.y * _144, -0.5, 0.5))).xy;
    vec3 _170 = texture(fp_tex_tcb_A, vec2(_86, _88)).xyz;
    float _172 = _170.x;
    float _174 = _170.y;
    float _176 = _170.z;
    float _178 = max(_156, fp_c1_1._m0[0].y);
    vec2 _180 = texture(fp_tex_tcb_38, vec2(_178, (-_130) + (-0.0))).xy;
    float _182 = _180.x;
    float _184 = _180.y;
    vec3 _186 = texture(fp_tex_tcb_36, vec4(_158 * _164, _160 * _164, _162 * _164, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_130 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _188 = _76.x;
    float _190 = _76.z;
    float _192 = _142 + (-fp_c5_1._m0[23].x);
    float _194 = _146 + (-fp_c5_1._m0[23].y);
    float _196 = _148 + (-fp_c5_1._m0[23].z);
    float _198 = inversesqrt(fma(_196, _196, fma(_194, _194, _192 * _192)));
    float _200 = _192 * _198;
    float _202 = _194 * _198;
    float _204 = _196 * _198;
    float _206 = _150 * _152;
    int _209 = max(0, min(int(trunc((_190 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _211 = max(fma(_148, _204, fma(_146, _202, _142 * _200)), fp_c1_1._m0[0].y);
    float _213 = _152 * _154;
    float _215 = _154 * _154;
    float _217 = _150 * _154;
    float _219 = fma(_150, _150, -(_152 * _152));
    float _221 = _130 * _130;
    float _223 = fma(_152, -fp_c5_1._m0[23].y, _150 * (-fp_c5_1._m0[23].x));
    float _225 = fma(_130, 0.5, 0.5);
    float _227 = max(fma(_154, _204, fma(_152, _202, _150 * _200)), fp_c1_1._m0[0].y) * max(fma(_154, _204, fma(_152, _202, _150 * _200)), fp_c1_1._m0[0].y);
    float _229 = clamp(texture(fp_tex_tcb_C, vec2(_86, _88)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _231 = fma((-_172) + fp_c6_1._m0[93].x, _229, _172);
    float _233 = (_225 * 0.5) * _225;
    float _235 = max(fma(_154, -fp_c5_1._m0[23].z, _223), fp_c1_1._m0[0].y);
    float _237 = fma((-_176) + fp_c6_1._m0[93].z, _229, _176);
    float _239 = clamp(fma(_154, -fp_c5_1._m0[23].z, _223), 0.0, 1.0);
    uint _242 = uint(int(uint((((int(uint(_209) >> uint(16)) * 20) << 16) + (((_209 & 65535) * 20) + max(0, min(int(trunc((_188 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _244 = fp_c10_1._m0[int(uint(int(_242)) >> uint(2))][int(_242) & 3];
    float _246 = fma((-_174) + fp_c6_1._m0[93].y, _229, _174);
    float _248 = 1.0 / (_233 + fma(_178, -_233, _178));
    float _250 = exp2(_211 * fma(_211, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _252 = fma(_231, -fp_c6_1._m0[9].x, _231);
    float _254 = fma(_231 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _256 = fma(_246 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _258 = fma(_237 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _260 = fma(_246, -fp_c6_1._m0[9].x, _246);
    float _262 = fma(_237, -fp_c6_1._m0[9].x, _237);
    float _264 = (_248 * (1.0 / (_233 + fma(_233, -_235, _235)))) * ((_221 * (1.0 / max(fma(_227, _221 * _221, -_227) + 1.0, fp_c1_1._m0[0].y))) * (_221 * (1.0 / max(fma(_227, _221 * _221, -_227) + 1.0, fp_c1_1._m0[0].y))));
    float _266 = fma(_186.x, fma(_254, _182, _184), max(0.0, fma(_219, fp_c5_1._m0[31].x, (fma(_154, fp_c5_1._m0[25].z, fma(_152, fp_c5_1._m0[25].y, _150 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_217, fp_c5_1._m0[28].w, fma(_215, fp_c5_1._m0[28].z, fma(_213, fp_c5_1._m0[28].y, _206 * fp_c5_1._m0[28].x))))) * fma(_254, -_252, _252));
    float _268 = fma(_186.y, fma(_256, _182, _184), max(0.0, fma(_219, fp_c5_1._m0[31].y, (fma(_154, fp_c5_1._m0[26].z, fma(_152, fp_c5_1._m0[26].y, _150 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_217, fp_c5_1._m0[29].w, fma(_215, fp_c5_1._m0[29].z, fma(_213, fp_c5_1._m0[29].y, _206 * fp_c5_1._m0[29].x))))) * fma(_256, -_260, _260));
    float _270 = fma(_186.z, fma(_258, _182, _184), max(0.0, fma(_219, fp_c5_1._m0[31].z, (fma(_154, fp_c5_1._m0[27].z, fma(_152, fp_c5_1._m0[27].y, _150 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_217, fp_c5_1._m0[30].w, fma(_215, fp_c5_1._m0[30].z, fma(_213, fp_c5_1._m0[30].y, _206 * fp_c5_1._m0[30].x))))) * fma(_258, -_262, _262));
    float _272 = clamp(texture(fp_tex_tcb_18, vec2(_86, _88)).x + (-0.0), 0.0, 1.0);
    float _274 = clamp((-fma(max((-_166.x) + 1.0, (-_166.y) + 1.0), clamp(_76.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_72.x * gl_FragCoord.w) * _118, (_72.y * gl_FragCoord.w) * _118)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _276 = floatBitsToInt(_244);
    float _278 = _268;
    float _280 = _270;
    float _282 = _266;
    float _284 = _268;
    float _286 = _266;
    float _288 = _270;
    if (floatBitsToInt(_244) != (-1))
    {
        int _290 = 0;
        float _294;
        float _296;
        float _298;
        int _384;
        do
        {
            int _292 = _276 & 255;
            _294 = _282;
            _296 = _278;
            _298 = _280;
            _302 = uint(_292) >= 30u;
            if (_302)
            {
                break;
            }
            int _304 = _292 << 4;
            uint _306 = uint(int(uint(_304 + 7360) >> uint(2)));
            int _308 = int(_306) + 1;
            uint _310 = uint(int(uint(_304 + 7368) >> uint(2)));
            float _312 = (-_188) + fp_c10_1._m0[int(uint(int(_306)) >> uint(2))][int(_306) & 3];
            float _314 = fp_c10_1._m0[int(uint(_308) >> uint(2))][_308 & 3] + (-_76.y);
            float _316 = (-_190) + fp_c10_1._m0[int(uint(int(_310)) >> uint(2))][int(_310) & 3];
            float _318 = fma(_316, _316, fma(_314, _314, _312 * _312));
            float _320 = _312 * inversesqrt(_318);
            float _322 = _314 * inversesqrt(_318);
            float _324 = _316 * inversesqrt(_318);
            float _326 = _142 + _320;
            float _328 = _146 + _322;
            float _330 = _148 + _324;
            uint _332 = uint(int(uint(_304 + 6880) >> uint(2)));
            int _334 = int(_332) + 1;
            float _336 = inversesqrt(fma(_330, _330, fma(_328, _328, _326 * _326)));
            float _338 = _326 * _336;
            float _340 = _328 * _336;
            float _342 = _330 * _336;
            uint _344 = uint(int(uint(_304 + 8320) >> uint(2)));
            float _346 = max(fma(_148, _342, fma(_146, _340, _142 * _338)), fp_c1_1._m0[0].y);
            float _348 = fma(_154, _324, fma(_152, _322, _150 * _320));
            float _350 = max(fma(_154, _342, fma(_152, _340, _150 * _338)), fp_c1_1._m0[0].y) * max(fma(_154, _342, fma(_152, _340, _150 * _338)), fp_c1_1._m0[0].y);
            float _352 = max(_348, fp_c1_1._m0[0].y);
            float _354 = fp_c10_1._m0[int(uint(_334) >> uint(2))][_334 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_332)) >> uint(2))][int(_332) & 3], -sqrt(_318), fp_c1_1._m0[1].x), 0.0, 1.0));
            uint _356 = uint(int(uint(_304 + 6400) >> uint(2)));
            int _358 = int(_356) + 1;
            uint _360 = uint(int(uint(_304 + 6408) >> uint(2)));
            float _362 = exp2(_346 * fma(_346, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _364 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3]) != 0;
            float _366 = (_248 * (1.0 / (_233 + fma(_233, -_352, _352)))) * ((_221 * (1.0 / max(fma(_221 * _221, _350, -_350) + 1.0, fp_c1_1._m0[0].y))) * (_221 * (1.0 / max(fma(_221 * _221, _350, -_350) + 1.0, fp_c1_1._m0[0].y))));
            float _368 = _354;
            if (!_364)
            {
                _368 = 1.0;
            }
            float _370 = _368;
            if (_364)
            {
                uint _372 = uint(int(uint(_304 + 7840) >> uint(2)));
                int _374 = int(_372) + 1;
                uint _376 = uint(int(uint(_304 + 7848) >> uint(2)));
                uint _378 = uint(int(uint(_304 + 6888) >> uint(2)));
                float _380 = fp_c10_1._m0[int(uint(int(_378)) >> uint(2))][int(_378) & 3];
                int _382 = int(_378) + 1;
                _370 = exp2(fp_c10_1._m0[int(uint(_382) >> uint(2))][_382 & 3] * log2(clamp(((-_380) + fma(_324, -fp_c10_1._m0[int(uint(int(_376)) >> uint(2))][int(_376) & 3], fma(_322, -fp_c10_1._m0[int(uint(_374) >> uint(2))][_374 & 3], _320 * (-fp_c10_1._m0[int(uint(int(_372)) >> uint(2))][int(_372) & 3])))) * (1.0 / ((-_380) + 1.0)), 0.0, 1.0)));
            }
            _384 = _290 + 1;
            float _386 = (exp2(_354) * _370) * clamp(_348 + (-0.0), 0.0, 1.0);
            float _388 = fma(fp_c10_1._m0[int(uint(_358) >> uint(2))][_358 & 3] * _386, fma(_260, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_362, _362)) * _366) * 0.079577468335628509521484375), _278);
            float _390 = fma(fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3] * _386, fma(_262, fp_c1_1._m0[1].y, ((_258 + fma(_258, -_362, _362)) * _366) * 0.079577468335628509521484375), _280);
            float _392 = fma(fp_c10_1._m0[int(uint(int(_356)) >> uint(2))][int(_356) & 3] * _386, fma(_252, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_362, _362)) * _366) * 0.079577468335628509521484375), _282);
            _276 = int(uint(_276) >> uint(8));
            _290 = _384;
            _278 = _388;
            _280 = _390;
            _282 = _392;
            _294 = _392;
            _296 = _388;
            _298 = _390;
        } while (!(_384 >= 4));
        _302 = false;
        _284 = _296;
        _286 = _294;
        _288 = _298;
        if ((_276 & 255) == 30)
        {
            float _394 = _76.y;
            float _396 = 1.0 / (fma(_190, fp_c10_1._m0[565].z, fma(_394, fp_c10_1._m0[565].y, _188 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _398 = 1.0 / fp_c10_1._m0[561].y;
            float _400 = _188 + (-fp_c10_1._m0[557].x);
            float _402 = _190 + (-fp_c10_1._m0[557].z);
            float _404 = _400 * fp_c10_1._m0[558].z;
            float _406 = _402 * fp_c10_1._m0[558].x;
            float _408 = (-_188) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_398, fp_c10_1._m0[557].x);
            float _410 = (-_190) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_398, fp_c10_1._m0[557].z);
            float _412 = _408 * _408;
            float _414 = sqrt(fma(_410, _410, _412)) * (-fp_c10_1._m0[558].y);
            float _416 = inversesqrt(fma(_410, _410, fma(_414, _414, _412)));
            float _418 = _408 * _416;
            float _420 = _414 * _416;
            float _422 = _410 * _416;
            float _424 = _142 + _418;
            float _426 = _146 + _420;
            float _428 = ((-float(_406 < _404)) + float(_406 > _404)) * fp_c10_1._m0[561].y;
            float _430 = _148 + _422;
            float _432 = fma(_154, _422, fma(_152, _420, _150 * _418));
            float _434 = inversesqrt(fma(_430, _430, fma(_426, _426, _424 * _424)));
            float _436 = _424 * _434;
            float _438 = _426 * _434;
            float _440 = fma(_402, _402, _400 * _400);
            float _442 = fma(_402, fp_c10_1._m0[558].z, _400 * fp_c10_1._m0[558].x);
            bool _444 = _442 > 0.0;
            float _446 = inversesqrt(fma(_422, _422, _418 * _418));
            float _448 = _418;
            if (_444)
            {
                _448 = sqrt(_440);
            }
            float _450 = _430 * _434;
            float _452 = _448;
            if (!_444)
            {
                _452 = 1.0;
            }
            float _454 = max(fma(_148, _450, fma(_146, _438, _142 * _436)), fp_c1_1._m0[0].y);
            float _456 = max(_432, fp_c1_1._m0[0].y);
            float _458 = max(fma(_154, _450, fma(_152, _438, _150 * _436)), fp_c1_1._m0[0].y) * max(fma(_154, _450, fma(_152, _438, _150 * _436)), fp_c1_1._m0[0].y);
            bool _460 = fma(_402 * inversesqrt(_440), fp_c10_1._m0[558].z, (_400 * inversesqrt(_440)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _462 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_400, fma(_428, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_402 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_428 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_400, fma(_428, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_402 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_428 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _464 = clamp(fma(_442 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_442 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _466 = log2(clamp((fma(_422 * _446, -fp_c10_1._m0[558].z, (_418 * _446) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _468 = exp2(_454 * fma(_454, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _470 = _466;
            if (_460)
            {
                _470 = fma(_462, -_462, fp_c1_1._m0[1].x) * fma(_462, -_462, fp_c1_1._m0[1].x);
            }
            float _472 = _470;
            if (!_460)
            {
                _472 = 1.0;
            }
            float _474 = (_248 * (1.0 / (_233 + fma(_233, -_456, _456)))) * ((_221 * (1.0 / max(fma(_221 * _221, _458, -_458) + 1.0, fp_c1_1._m0[0].y))) * (_221 * (1.0 / max(fma(_221 * _221, _458, -_458) + 1.0, fp_c1_1._m0[0].y))));
            float _476 = (min(fma(_464, -_464, fp_c1_1._m0[1].x) * fma(_464, -_464, fp_c1_1._m0[1].x), _472) * (exp2(log2(clamp(fma(_452, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_466))) * clamp(_432 + (-0.0), 0.0, 1.0);
            float _478 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_190, fp_c10_1._m0[562].z, fma(_394, fp_c10_1._m0[562].y, _188 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _396, 0.5, 0.5), (-fma((fma(_190, fp_c10_1._m0[563].z, fma(_394, fp_c10_1._m0[563].y, _188 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _396, 0.5, 0.5)) + 1.0)).z > fma((fma(_190, fp_c10_1._m0[564].z, fma(_394, fp_c10_1._m0[564].y, _188 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _396, 0.5, 0.5)) || (_442 <= 0.0));
            _284 = fma(fma(_260, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_468, _468)) * _474) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _476), _478, _296);
            _286 = fma(fma(_252, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_468, _468)) * _474) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _476), _478, _294);
            _288 = fma(fma(_262, fp_c1_1._m0[1].y, ((_258 + fma(_258, -_468, _468)) * _474) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _476), _478, _298);
        }
    }
    float _480 = _188 + (-fp_c3_1._m0[11].w);
    float _482 = _76.y;
    float _484 = _190 + (-fp_c3_1._m0[13].w);
    float _486 = _482 + (-fp_c3_1._m0[12].w);
    float _488 = fma(_484, _484, fma(_486, _486, _480 * _480));
    float _490 = fma(_272, _284, _274 * (fma(_264 * (_256 + fma(_256, -_250, _250)), fp_c1_1._m0[0].w, _260 * 0.3183098733425140380859375) * (_239 * fp_c5_1._m0[5].y)));
    float _492 = fma(_272, _286, _274 * (fma(_264 * (_254 + fma(_254, -_250, _250)), fp_c1_1._m0[0].w, _252 * 0.3183098733425140380859375) * (_239 * fp_c5_1._m0[5].x)));
    float _494 = fma(_272, _288, _274 * (fma(_264 * (_258 + fma(_258, -_250, _250)), fp_c1_1._m0[0].w, _262 * 0.3183098733425140380859375) * (_239 * fp_c5_1._m0[5].z)));
    float _496 = clamp(fma(fma(_190, fp_c5_1._m0[14].z, fma(_482, fp_c5_1._m0[14].y, _188 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _498 = exp2(log2(clamp(sqrt(_488) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_484 * inversesqrt(_488), fp_c5_1._m0[23].z, fma(_486 * inversesqrt(_488), fp_c5_1._m0[23].y, (_480 * inversesqrt(_488)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _500 = clamp(fma(_272 * _274, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _502 = fma((-_492) + fp_c5_1._m0[13].x, _496, _492);
    float _504 = fma((-_494) + fp_c5_1._m0[13].z, _496, _494);
    float _506 = fma((-_490) + fp_c5_1._m0[13].y, _496, _490);
    float _508 = clamp((-exp2((clamp(fma(sqrt(_488), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_502) + fma(fma((_498 * fp_c7_1._m0[55].x) * _500, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _508, _502);
    _79.y = fma((-_506) + fma(fma((_498 * fp_c7_1._m0[55].y) * _500, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _508, _506);
    _79.z = fma((-_504) + fma(fma((_498 * fp_c7_1._m0[55].z) * _500, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _508, _504);
    _79.w = 1.0;
}


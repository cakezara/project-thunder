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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_28;
layout(binding = 4) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 5) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 6) uniform sampler2D fp_tex_tcb_38;
layout(binding = 7) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _60;
layout(location = 5) in vec4 _62;
layout(location = 0) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 2) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 3) in vec4 _72;
layout(location = 0) out vec4 _75;
uint _6[12];

void main()
{
    bool _300 = false;
    float _82 = 1.0 / (_60.z * gl_FragCoord.w);
    float _84 = _64.x;
    float _86 = _64.y;
    float _88 = 1.0 / _62.w;
    vec2 _92 = texture(fp_tex_tcb_E, vec2(_84, _86)).xy;
    float _94 = _92.x;
    float _96 = _92.y;
    vec2 _98 = texture(fp_tex_tcb_2A, vec2(fma(_62.x * _88, 0.5, 0.5), fma(_62.y * _88, -0.5, 0.5))).xy;
    vec3 _102 = texture(fp_tex_tcb_A, vec2(_84, _86)).xyz;
    float _104 = _102.x;
    float _106 = _102.y;
    float _108 = _102.z;
    float _110 = _66.x;
    float _112 = _66.y;
    float _114 = _66.z;
    float _116 = _68.y;
    float _118 = _68.z;
    float _120 = _68.x;
    float _122 = _68.w;
    float _124 = _70.x;
    float _126 = _70.y;
    float _128 = _70.z;
    float _130 = inversesqrt(fma(_114, _114, fma(_112, _112, _110 * _110)));
    float _132 = _114 * _130;
    float _134 = _110 * _130;
    float _136 = _112 * _130;
    float _138 = sqrt(clamp((-fma(_94, _94, _96 * _96)) + 1.0, 0.0, 1.0));
    float _140 = max(texture(fp_tex_tcb_10, vec2(_84, _86)).x, fp_c1_1._m0[0].x);
    float _142 = fma(_134, _138, fma(_94, _120, _96 * (fma(_136, _118, -(_132 * _116)) * _122)));
    float _144 = fma(_136, _138, fma(_94, _116, _96 * (fma(_132, _120, -(_134 * _118)) * _122)));
    float _146 = fma(_132, _138, fma(_94, _118, _96 * (fma(_134, _116, -(_136 * _120)) * _122)));
    float _148 = inversesqrt(fma(_128, _128, fma(_126, _126, _124 * _124)));
    float _150 = _124 * (-_148);
    float _152 = inversesqrt(fma(_146, _146, fma(_144, _144, _142 * _142)));
    float _154 = _126 * (-_148);
    float _156 = _128 * (-_148);
    float _158 = _142 * _152;
    float _160 = _144 * _152;
    float _162 = _146 * _152;
    float _164 = fma(_162, _156, fma(_160, _154, _158 * _150));
    float _166 = fma(_160 * (-_164), -2.0, -_154);
    float _168 = fma(_158 * (-_164), -2.0, -_150);
    float _170 = fma(_162 * (-_164), -2.0, -_156);
    float _172 = 1.0 / max(abs(_170), max(abs(_168), abs(_166)));
    float _174 = fma(exp2(log2(abs((-_164) + 1.0)) * fp_c6_1._m0[9].y), fp_c6_1._m0[40].x, fp_c6_1._m0[40].y);
    float _176 = max(_174, fp_c1_1._m0[0].y);
    vec2 _178 = texture(fp_tex_tcb_38, vec2(_176, (-_140) + (-0.0))).xy;
    float _180 = _178.x;
    float _182 = _178.y;
    vec3 _184 = texture(fp_tex_tcb_36, vec4(_168 * _172, _166 * _172, _170 * _172, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_140 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _186 = _150 + (-fp_c5_1._m0[23].x);
    float _188 = _154 + (-fp_c5_1._m0[23].y);
    float _190 = _156 + (-fp_c5_1._m0[23].z);
    float _192 = inversesqrt(fma(_190, _190, fma(_188, _188, _186 * _186)));
    float _194 = _186 * _192;
    float _196 = _72.x;
    float _198 = _188 * _192;
    float _200 = _190 * _192;
    float _202 = _158 * _160;
    float _204 = _160 * _162;
    float _206 = _162 * _162;
    float _208 = _158 * _162;
    float _210 = max(fma(_156, _200, fma(_154, _198, _150 * _194)), fp_c1_1._m0[0].y);
    float _212 = _72.z;
    float _214 = fma(_160, -fp_c5_1._m0[23].y, _158 * (-fp_c5_1._m0[23].x));
    float _216 = max(fma(_162, _200, fma(_160, _198, _158 * _194)), fp_c1_1._m0[0].y) * max(fma(_162, _200, fma(_160, _198, _158 * _194)), fp_c1_1._m0[0].y);
    float _218 = _140 * _140;
    float _220 = fma(_140, 0.5, 0.5);
    float _222 = (_220 * 0.5) * _220;
    float _224 = fma(_158, _158, -(_160 * _160));
    float _226 = clamp(fma(_162, -fp_c5_1._m0[23].z, _214), 0.0, 1.0);
    float _228 = max(fma(_162, -fp_c5_1._m0[23].z, _214), fp_c1_1._m0[0].y);
    int _231 = max(0, min(int(trunc((_212 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _233 = clamp(_174 + (-0.0), 0.0, 1.0);
    float _235 = 1.0 / (_222 + fma(_176, -_222, _176));
    uint _238 = uint(int(uint((((int(uint(_231) >> uint(16)) * 20) << 16) + (((_231 & 65535) * 20) + max(0, min(int(trunc((_196 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _240 = fp_c10_1._m0[int(uint(int(_238)) >> uint(2))][int(_238) & 3];
    float _242 = exp2(_210 * fma(_210, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _244 = fma(_104, -fp_c6_1._m0[9].x, _104);
    float _246 = (_235 * (1.0 / (_222 + fma(_222, -_228, _228)))) * ((_218 * (1.0 / max(fma(_216, _218 * _218, -_216) + 1.0, fp_c1_1._m0[0].y))) * (_218 * (1.0 / max(fma(_216, _218 * _218, -_216) + 1.0, fp_c1_1._m0[0].y))));
    float _248 = fma(_106, -fp_c6_1._m0[9].x, _106);
    float _250 = fma(_108, -fp_c6_1._m0[9].x, _108);
    float _252 = fma(_104 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _254 = fma(_108 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _256 = fma(_106 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _258 = exp2(log2(clamp((-_174) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
    float _260 = clamp((-fma(max((-_98.x) + 1.0, (-_98.y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_60.x * gl_FragCoord.w) * _82, (_60.y * gl_FragCoord.w) * _82)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _262 = fma(_104, _258, fma(fma(_244, -fp_c6_1._m0[39].x, _244), _233, _244 * fp_c6_1._m0[39].x));
    float _264 = fma(_106, _258, fma(fma(_248, -fp_c6_1._m0[39].y, _248), _233, _248 * fp_c6_1._m0[39].y));
    float _266 = fma(_108, _258, fma(fma(_250, -fp_c6_1._m0[39].z, _250), _233, _250 * fp_c6_1._m0[39].z));
    float _268 = fma(_184.x, fma(_252, _180, _182), max(0.0, fma(_224, fp_c5_1._m0[31].x, (fma(_162, fp_c5_1._m0[25].z, fma(_160, fp_c5_1._m0[25].y, _158 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_208, fp_c5_1._m0[28].w, fma(_206, fp_c5_1._m0[28].z, fma(_204, fp_c5_1._m0[28].y, _202 * fp_c5_1._m0[28].x))))) * fma(_262, -_252, _262));
    float _270 = fma(_184.y, fma(_256, _180, _182), max(0.0, fma(_224, fp_c5_1._m0[31].y, (fma(_162, fp_c5_1._m0[26].z, fma(_160, fp_c5_1._m0[26].y, _158 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_208, fp_c5_1._m0[29].w, fma(_206, fp_c5_1._m0[29].z, fma(_204, fp_c5_1._m0[29].y, _202 * fp_c5_1._m0[29].x))))) * fma(_264, -_256, _264));
    float _272 = fma(_184.z, fma(_254, _180, _182), max(0.0, fma(_224, fp_c5_1._m0[31].z, (fma(_162, fp_c5_1._m0[27].z, fma(_160, fp_c5_1._m0[27].y, _158 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_208, fp_c5_1._m0[30].w, fma(_206, fp_c5_1._m0[30].z, fma(_204, fp_c5_1._m0[30].y, _202 * fp_c5_1._m0[30].x))))) * fma(_266, -_254, _266));
    int _274 = floatBitsToInt(_240);
    float _276 = _270;
    float _278 = _272;
    float _280 = _268;
    float _282 = _268;
    float _284 = _270;
    float _286 = _272;
    if (floatBitsToInt(_240) != (-1))
    {
        int _288 = 0;
        float _292;
        float _294;
        float _296;
        int _382;
        do
        {
            int _290 = _274 & 255;
            _292 = _280;
            _294 = _276;
            _296 = _278;
            _300 = uint(_290) >= 30u;
            if (_300)
            {
                break;
            }
            int _302 = _290 << 4;
            uint _304 = uint(int(uint(_302 + 7360) >> uint(2)));
            int _306 = int(_304) + 1;
            uint _308 = uint(int(uint(_302 + 7368) >> uint(2)));
            float _310 = (-_196) + fp_c10_1._m0[int(uint(int(_304)) >> uint(2))][int(_304) & 3];
            float _312 = fp_c10_1._m0[int(uint(_306) >> uint(2))][_306 & 3] + (-_72.y);
            float _314 = (-_212) + fp_c10_1._m0[int(uint(int(_308)) >> uint(2))][int(_308) & 3];
            float _316 = fma(_314, _314, fma(_312, _312, _310 * _310));
            float _318 = _310 * inversesqrt(_316);
            float _320 = _312 * inversesqrt(_316);
            float _322 = _314 * inversesqrt(_316);
            float _324 = _150 + _318;
            float _326 = _154 + _320;
            float _328 = _156 + _322;
            float _330 = inversesqrt(fma(_328, _328, fma(_326, _326, _324 * _324)));
            float _332 = _324 * _330;
            float _334 = _326 * _330;
            uint _336 = uint(int(uint(_302 + 6880) >> uint(2)));
            int _338 = int(_336) + 1;
            float _340 = _328 * _330;
            float _342 = max(fma(_162, _340, fma(_160, _334, _158 * _332)), fp_c1_1._m0[0].y) * max(fma(_162, _340, fma(_160, _334, _158 * _332)), fp_c1_1._m0[0].y);
            float _344 = max(fma(_156, _340, fma(_154, _334, _150 * _332)), fp_c1_1._m0[0].y);
            float _346 = fma(_162, _322, fma(_160, _320, _158 * _318));
            uint _348 = uint(int(uint(_302 + 8320) >> uint(2)));
            float _350 = max(_346, fp_c1_1._m0[0].y);
            uint _352 = uint(int(uint(_302 + 6408) >> uint(2)));
            uint _354 = uint(int(uint(_302 + 6400) >> uint(2)));
            int _356 = int(_354) + 1;
            float _358 = fp_c10_1._m0[int(uint(_338) >> uint(2))][_338 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_336)) >> uint(2))][int(_336) & 3], -sqrt(_316), fp_c1_1._m0[1].x), 0.0, 1.0));
            float _360 = exp2(_344 * fma(_344, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _362 = (_235 * (1.0 / (_222 + fma(_222, -_350, _350)))) * ((_218 * (1.0 / max(fma(_218 * _218, _342, -_342) + 1.0, fp_c1_1._m0[0].y))) * (_218 * (1.0 / max(fma(_218 * _218, _342, -_342) + 1.0, fp_c1_1._m0[0].y))));
            bool _364 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_348)) >> uint(2))][int(_348) & 3]) != 0;
            float _366 = _358;
            if (!_364)
            {
                _366 = 1.0;
            }
            float _368 = _366;
            if (_364)
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
            float _384 = (exp2(_358) * _368) * clamp(_346 + (-0.0), 0.0, 1.0);
            float _386 = fma(fp_c10_1._m0[int(uint(_356) >> uint(2))][_356 & 3] * _384, fma(_264, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_360, _360)) * _362) * 0.079577468335628509521484375), _276);
            float _388 = fma(fp_c10_1._m0[int(uint(int(_352)) >> uint(2))][int(_352) & 3] * _384, fma(_266, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_360, _360)) * _362) * 0.079577468335628509521484375), _278);
            float _390 = fma(fp_c10_1._m0[int(uint(int(_354)) >> uint(2))][int(_354) & 3] * _384, fma(_262, fp_c1_1._m0[1].y, ((_252 + fma(_252, -_360, _360)) * _362) * 0.079577468335628509521484375), _280);
            _274 = int(uint(_274) >> uint(8));
            _288 = _382;
            _276 = _386;
            _278 = _388;
            _280 = _390;
            _292 = _390;
            _294 = _386;
            _296 = _388;
        } while (!(_382 >= 4));
        _300 = false;
        _282 = _292;
        _284 = _294;
        _286 = _296;
        if ((_274 & 255) == 30)
        {
            float _392 = _72.y;
            float _394 = 1.0 / (fma(_212, fp_c10_1._m0[565].z, fma(_392, fp_c10_1._m0[565].y, _196 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _396 = 1.0 / fp_c10_1._m0[561].y;
            float _398 = _196 + (-fp_c10_1._m0[557].x);
            float _400 = _212 + (-fp_c10_1._m0[557].z);
            float _402 = _398 * fp_c10_1._m0[558].z;
            float _404 = (-_196) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_396, fp_c10_1._m0[557].x);
            float _406 = (-_212) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_396, fp_c10_1._m0[557].z);
            float _408 = _404 * _404;
            float _410 = _400 * fp_c10_1._m0[558].x;
            float _412 = sqrt(fma(_406, _406, _408)) * (-fp_c10_1._m0[558].y);
            float _414 = ((-float(_410 < _402)) + float(_410 > _402)) * fp_c10_1._m0[561].y;
            float _416 = inversesqrt(fma(_406, _406, fma(_412, _412, _408)));
            float _418 = _404 * _416;
            float _420 = _412 * _416;
            float _422 = _406 * _416;
            float _424 = _150 + _418;
            float _426 = _154 + _420;
            float _428 = _156 + _422;
            float _430 = inversesqrt(fma(_428, _428, fma(_426, _426, _424 * _424)));
            float _432 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_398, fma(_414, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_400 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_414 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_398, fma(_414, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_400 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_414 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _434 = _424 * _430;
            float _436 = _426 * _430;
            float _438 = _428 * _430;
            float _440 = fma(_162, _422, fma(_160, _420, _158 * _418));
            float _442 = inversesqrt(fma(_422, _422, _418 * _418));
            float _444 = fma(_400, fp_c10_1._m0[558].z, _398 * fp_c10_1._m0[558].x);
            float _446 = fma(_400, _400, _398 * _398);
            float _448 = max(fma(_156, _438, fma(_154, _436, _150 * _434)), fp_c1_1._m0[0].y);
            bool _450 = _444 > 0.0;
            float _452 = max(_440, fp_c1_1._m0[0].y);
            float _454 = max(fma(_162, _438, fma(_160, _436, _158 * _434)), fp_c1_1._m0[0].y) * max(fma(_162, _438, fma(_160, _436, _158 * _434)), fp_c1_1._m0[0].y);
            float _456 = inversesqrt(_446);
            float _458 = 6.9831600189208984375;
            if (_450)
            {
                _456 = sqrt(_446);
            }
            float _460 = _456;
            if (!_450)
            {
                _460 = 1.0;
            }
            bool _462 = fma(_400 * inversesqrt(_446), fp_c10_1._m0[558].z, (_398 * inversesqrt(_446)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _464 = clamp(fma(_444 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_444 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            if (_462)
            {
                _458 = fma(_432, -_432, fp_c1_1._m0[1].x) * fma(_432, -_432, fp_c1_1._m0[1].x);
            }
            float _466 = exp2(_448 * fma(_448, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _468 = _458;
            if (!_462)
            {
                _468 = 1.0;
            }
            float _470 = (_235 * (1.0 / (_222 + fma(_222, -_452, _452)))) * ((_218 * (1.0 / max(fma(_218 * _218, _454, -_454) + 1.0, fp_c1_1._m0[0].y))) * (_218 * (1.0 / max(fma(_218 * _218, _454, -_454) + 1.0, fp_c1_1._m0[0].y))));
            float _472 = (min(fma(_464, -_464, fp_c1_1._m0[1].x) * fma(_464, -_464, fp_c1_1._m0[1].x), _468) * (exp2(log2(clamp(fma(_460, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_422 * _442, -fp_c10_1._m0[558].z, (_418 * _442) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_440 + (-0.0), 0.0, 1.0);
            float _474 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_212, fp_c10_1._m0[562].z, fma(_392, fp_c10_1._m0[562].y, _196 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _394, 0.5, 0.5), (-fma((fma(_212, fp_c10_1._m0[563].z, fma(_392, fp_c10_1._m0[563].y, _196 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _394, 0.5, 0.5)) + 1.0)).z > fma((fma(_212, fp_c10_1._m0[564].z, fma(_392, fp_c10_1._m0[564].y, _196 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _394, 0.5, 0.5)) || (_444 <= 0.0));
            _282 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _472) * fma(_262, fp_c1_1._m0[1].y, ((_252 + fma(_252, -_466, _466)) * _470) * 0.079577468335628509521484375), _474, _292);
            _284 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _472) * fma(_264, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_466, _466)) * _470) * 0.079577468335628509521484375), _474, _294);
            _286 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _472) * fma(_266, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_466, _466)) * _470) * 0.079577468335628509521484375), _474, _296);
        }
    }
    float _476 = _196 + (-fp_c3_1._m0[11].w);
    float _478 = _72.y;
    float _480 = _212 + (-fp_c3_1._m0[13].w);
    float _482 = fma(_260, fma(_246 * (_252 + fma(_252, -_242, _242)), fp_c1_1._m0[0].w, _262 * 0.3183098733425140380859375) * (_226 * fp_c5_1._m0[5].x), _282);
    float _484 = fma(_260, fma(_246 * (_256 + fma(_256, -_242, _242)), fp_c1_1._m0[0].w, _264 * 0.3183098733425140380859375) * (_226 * fp_c5_1._m0[5].y), _284);
    float _486 = fma(_260, fma(_246 * (_254 + fma(_254, -_242, _242)), fp_c1_1._m0[0].w, _266 * 0.3183098733425140380859375) * (_226 * fp_c5_1._m0[5].z), _286);
    float _488 = _478 + (-fp_c3_1._m0[12].w);
    float _490 = fma(_480, _480, fma(_488, _488, _476 * _476));
    float _492 = clamp(fma(fma(_212, fp_c5_1._m0[14].z, fma(_478, fp_c5_1._m0[14].y, _196 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _494 = exp2(log2(clamp(sqrt(_490) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_480 * inversesqrt(_490), fp_c5_1._m0[23].z, fma(_488 * inversesqrt(_490), fp_c5_1._m0[23].y, (_476 * inversesqrt(_490)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _496 = clamp(fma(_260, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _498 = fma((-_482) + fp_c5_1._m0[13].x, _492, _482);
    float _500 = fma((-_484) + fp_c5_1._m0[13].y, _492, _484);
    float _502 = fma((-_486) + fp_c5_1._m0[13].z, _492, _486);
    float _504 = clamp((-exp2((clamp(fma(sqrt(_490), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_498) + fma(fma(_496 * (_494 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _504, _498);
    _75.y = fma((-_500) + fma(fma(_496 * (_494 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _504, _500);
    _75.z = fma((-_502) + fma(fma(_496 * (_494 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _504, _502);
    _75.w = 1.0;
}


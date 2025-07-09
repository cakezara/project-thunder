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
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_18;
layout(binding = 5) uniform sampler2D fp_tex_tcb_1A;
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
    bool _348 = false;
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
    float _118 = 1.0 / (_74.z * gl_FragCoord.w);
    float _120 = inversesqrt(fma(_104, _104, fma(_102, _102, _100 * _100)));
    float _122 = _104 * _120;
    float _124 = _100 * _120;
    float _126 = _102 * _120;
    float _128 = _72.z;
    float _130 = sqrt(clamp((-fma(_96, _96, _98 * _98)) + 1.0, 0.0, 1.0));
    float _132 = fma(_124, _130, fma(_96, _110, _98 * (fma(_126, _108, -(_122 * _106)) * _112)));
    float _134 = fma(_126, _130, fma(_96, _106, _98 * (fma(_122, _110, -(_124 * _108)) * _112)));
    float _136 = fma(_122, _130, fma(_96, _108, _98 * (fma(_124, _106, -(_126 * _110)) * _112)));
    float _138 = inversesqrt(fma(_128, _128, fma(_116, _116, _114 * _114)));
    float _140 = _114 * (-_138);
    float _142 = _116 * (-_138);
    float _144 = _128 * (-_138);
    float _146 = inversesqrt(fma(_136, _136, fma(_134, _134, _132 * _132)));
    float _148 = _132 * _146;
    float _150 = _134 * _146;
    float _152 = _136 * _146;
    float _154 = fma(_152, _144, fma(_150, _142, _148 * _140));
    float _156 = 1.0 / _76.w;
    float _158 = fma(_148 * (-_154), -2.0, -_140);
    float _160 = fma(_150 * (-_154), -2.0, -_142);
    float _162 = fma(_152 * (-_154), -2.0, -_144);
    float _164 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _166 = 1.0 / max(abs(_162), max(abs(_158), abs(_160)));
    vec2 _168 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _156, 0.5, 0.5), fma(_76.y * _156, -0.5, 0.5))).xy;
    vec3 _172 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _174 = _172.x;
    float _176 = _172.y;
    float _178 = _172.z;
    float _180 = texture(fp_tex_tcb_12, vec2(_88, _90)).x;
    float _182 = texture(fp_tex_tcb_1A, vec2(_88, _90)).x;
    float _184 = max(_154, fp_c1_1._m0[0].y);
    vec3 _186 = texture(fp_tex_tcb_36, vec4(_158 * _166, _160 * _166, _162 * _166, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_164 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _188 = texture(fp_tex_tcb_38, vec2(_184, (-_164) + (-0.0))).xy;
    float _190 = _188.x;
    float _192 = _188.y;
    float _194 = _140 * _142;
    float _196 = _142 * _144;
    float _198 = _144 * _144;
    float _200 = _140 + (-fp_c5_1._m0[23].x);
    float _202 = _142 + (-fp_c5_1._m0[23].y);
    float _204 = _140 * _144;
    float _206 = _144 + (-fp_c5_1._m0[23].z);
    float _208 = inversesqrt(fma(_206, _206, fma(_202, _202, _200 * _200)));
    float _210 = fma(_140, _140, -(_142 * _142));
    float _212 = _200 * _208;
    float _214 = _202 * _208;
    float _216 = _164 * _164;
    float _218 = fma(_164, 0.5, 0.5);
    float _220 = _206 * _208;
    float _222 = fma(_150, -fp_c5_1._m0[23].y, _148 * (-fp_c5_1._m0[23].x));
    float _224 = fma(_152, _220, fma(_150, _214, _148 * _212));
    float _226 = exp2(log2(clamp((-_154) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[45].y) * fp_c6_1._m0[45].x;
    float _228 = fma(_152, -fp_c5_1._m0[23].z, _222);
    float _230 = max(_224, fp_c1_1._m0[0].y) * max(_224, fp_c1_1._m0[0].y);
    float _232 = max(_228, fp_c1_1._m0[0].y);
    float _234 = (_218 * 0.5) * _218;
    bool _238 = (_228 < fp_c1_1._m0[0].y) || (_154 < fp_c1_1._m0[0].y);
    float _240 = max(fma(_144, _220, fma(_142, _214, _140 * _212)), fp_c1_1._m0[0].y);
    float _242 = _178;
    float _244 = _180;
    if (_238)
    {
        _242 = 0.0;
    }
    float _246 = ((1.0 / (_234 + fma(_234, -_184, _184))) * (1.0 / (_234 + fma(_234, -_232, _232)))) * ((_216 * (1.0 / max(fma(_230, _216 * _216, -_230) + 1.0, fp_c1_1._m0[0].y))) * (_216 * (1.0 / max(fma(_230, _216 * _216, -_230) + 1.0, fp_c1_1._m0[0].y))));
    float _248 = _176 + (-0.039999999105930328369140625);
    float _250 = fma(_180, _174 + (-0.039999999105930328369140625), fp_c1_1._m0[0].w);
    float _252 = fma(_180, _178 + (-0.039999999105930328369140625), fp_c1_1._m0[0].w);
    float _254 = _152 * _152;
    float _256 = fma(_180, _248, fp_c1_1._m0[0].w);
    float _258 = _248;
    float _260 = _242;
    if (_238)
    {
        _258 = 0.0;
    }
    float _262 = _258;
    if (_238)
    {
        _244 = 0.0;
    }
    float _264 = _244;
    if (!_238)
    {
        float _266 = inversesqrt(fma(_148, _148, _254));
        float _268 = _148 * _266;
        float _270 = _152 * (-_266);
        float _272 = fma(_152, _270, -(_148 * _268));
        float _274 = 1.0 / fp_c6_1._m0[58].z;
        float _276 = 1.0 / fp_c6_1._m0[58].y;
        float _278 = exp2(log2((-clamp(fma(fma(_122, _152, fma(_126, _150, _124 * _148)), -fp_c6_1._m0[59].x, fp_c6_1._m0[59].x), 0.0, 1.0)) + 1.0) * 200.0) * clamp((_272 * _272) * 7.0, 0.0, 1.0);
        float _280 = (_276 * sqrt(_228 * (1.0 / _154))) * _274;
        float _282 = exp2(exp2(log2(abs(fma(max(abs(fma(_220, -(_150 * _270), fma(_214, _272, _212 * (_150 * _268)))), fp_c1_1._m0[0].y) * _276, max(abs(fma(_220, -(_150 * _270), fma(_214, _272, _212 * (_150 * _268)))), fp_c1_1._m0[0].y) * _276, (max(abs(fma(_220, _268, _212 * _270)), fp_c1_1._m0[0].y) * _274) * (max(abs(fma(_220, _268, _212 * _270)), fp_c1_1._m0[0].y) * _274)) * (1.0 / (_224 + 1.0)))) * fp_c6_1._m0[58].w) * (-2.8853900432586669921875));
        _262 = (_282 * ((_250 * _278) * _280)) * 0.079577468335628509521484375;
        _264 = (_282 * ((_256 * _278) * _280)) * 0.079577468335628509521484375;
        _260 = (_282 * ((_252 * _278) * _280)) * 0.079577468335628509521484375;
    }
    float _284 = _148 * _150;
    float _286 = _150 * _152;
    float _288 = _148 * _152;
    float _290 = fma(_148, _148, -(_150 * _150));
    float _292 = _78.z;
    float _294 = _78.x;
    float _296 = fma((max(0.0, fma(_210, fp_c5_1._m0[31].y, (fma(_144, -fp_c5_1._m0[26].z, fma(_142, -fp_c5_1._m0[26].y, _140 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_204, fp_c5_1._m0[29].w, fma(_198, fp_c5_1._m0[29].z, fma(_196, fp_c5_1._m0[29].y, _194 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[46].y) * _226, _182, fma(_176, -_180, _176));
    float _298 = fma((max(0.0, fma(_210, fp_c5_1._m0[31].x, (fma(_144, -fp_c5_1._m0[25].z, fma(_142, -fp_c5_1._m0[25].y, _140 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_204, fp_c5_1._m0[28].w, fma(_198, fp_c5_1._m0[28].z, fma(_196, fp_c5_1._m0[28].y, _194 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[46].x) * _226, _182, fma(_174, -_180, _174));
    float _300 = fma((max(0.0, fma(_210, fp_c5_1._m0[31].z, (fma(_144, -fp_c5_1._m0[27].z, fma(_142, -fp_c5_1._m0[27].y, _140 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_204, fp_c5_1._m0[30].w, fma(_198, fp_c5_1._m0[30].z, fma(_196, fp_c5_1._m0[30].y, _194 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[46].z) * _226, _182, fma(_178, -_180, _178));
    int _303 = max(0, min(int(trunc((_292 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _305 = exp2(_240 * fma(_240, fp_c1_1._m0[0].z, -6.9831600189208984375));
    uint _308 = uint(int(uint((((int(uint(_303) >> uint(16)) * 20) << 16) + (((_303 & 65535) * 20) + max(0, min(int(trunc((_294 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _310 = fp_c10_1._m0[int(uint(int(_308)) >> uint(2))][int(_308) & 3];
    float _312 = clamp(fma(_152, -fp_c5_1._m0[23].z, _222), 0.0, 1.0);
    float _314 = fma(max(0.0, fma(_290, fp_c5_1._m0[31].z, (fma(_152, fp_c5_1._m0[27].z, fma(_150, fp_c5_1._m0[27].y, _148 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_288, fp_c5_1._m0[30].w, fma(_254, fp_c5_1._m0[30].z, fma(_286, fp_c5_1._m0[30].y, _284 * fp_c5_1._m0[30].x))))), fma(_300, -_252, _300), fma(_252, _190, _192) * _186.z);
    float _316 = fma(max(0.0, fma(_290, fp_c5_1._m0[31].y, (fma(_152, fp_c5_1._m0[26].z, fma(_150, fp_c5_1._m0[26].y, _148 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_288, fp_c5_1._m0[29].w, fma(_254, fp_c5_1._m0[29].z, fma(_286, fp_c5_1._m0[29].y, _284 * fp_c5_1._m0[29].x))))), fma(_296, -_256, _296), fma(_256, _190, _192) * _186.y);
    float _318 = fma(max(0.0, fma(_290, fp_c5_1._m0[31].x, (fma(_152, fp_c5_1._m0[25].z, fma(_150, fp_c5_1._m0[25].y, _148 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_288, fp_c5_1._m0[28].w, fma(_254, fp_c5_1._m0[28].z, fma(_286, fp_c5_1._m0[28].y, _284 * fp_c5_1._m0[28].x))))), fma(_298, -_250, _298), fma(_250, _190, _192) * _186.x);
    float _320 = clamp((-fma(max((-_168.x) + 1.0, (-_168.y) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_74.x * gl_FragCoord.w) * _118, (_74.y * gl_FragCoord.w) * _118)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _322 = clamp(texture(fp_tex_tcb_18, vec2(_88, _90)).x + (-0.0), 0.0, 1.0);
    int _324 = floatBitsToInt(_310);
    float _326 = _318;
    float _328 = _316;
    float _330 = _314;
    float _332 = _318;
    float _334 = _316;
    float _336 = _314;
    if (floatBitsToInt(_310) != (-1))
    {
        int _338 = 0;
        float _342;
        float _344;
        float _346;
        int _430;
        do
        {
            int _340 = _324 & 255;
            _342 = _326;
            _344 = _328;
            _346 = _330;
            _348 = uint(_340) >= 30u;
            if (_348)
            {
                break;
            }
            int _350 = _340 << 4;
            uint _352 = uint(int(uint(_350 + 7360) >> uint(2)));
            int _354 = int(_352) + 1;
            uint _356 = uint(int(uint(_350 + 7368) >> uint(2)));
            float _358 = (-_294) + fp_c10_1._m0[int(uint(int(_352)) >> uint(2))][int(_352) & 3];
            float _360 = fp_c10_1._m0[int(uint(_354) >> uint(2))][_354 & 3] + (-_78.y);
            float _362 = (-_292) + fp_c10_1._m0[int(uint(int(_356)) >> uint(2))][int(_356) & 3];
            float _364 = fma(_362, _362, fma(_360, _360, _358 * _358));
            float _366 = _358 * inversesqrt(_364);
            float _368 = _360 * inversesqrt(_364);
            float _370 = _362 * inversesqrt(_364);
            float _372 = _140 + _366;
            float _374 = _142 + _368;
            float _376 = _144 + _370;
            uint _378 = uint(int(uint(_350 + 6880) >> uint(2)));
            int _380 = int(_378) + 1;
            float _382 = inversesqrt(fma(_376, _376, fma(_374, _374, _372 * _372)));
            float _384 = _372 * _382;
            float _386 = _374 * _382;
            float _388 = _376 * _382;
            float _390 = fma(_152, _370, fma(_150, _368, _148 * _366));
            float _392 = max(fma(_152, _388, fma(_150, _386, _148 * _384)), fp_c1_1._m0[0].y) * max(fma(_152, _388, fma(_150, _386, _148 * _384)), fp_c1_1._m0[0].y);
            float _394 = max(_390, fp_c1_1._m0[0].y);
            uint _396 = uint(int(uint(_350 + 8320) >> uint(2)));
            float _398 = max(fma(_144, _388, fma(_142, _386, _140 * _384)), fp_c1_1._m0[0].y);
            uint _400 = uint(int(uint(_350 + 6408) >> uint(2)));
            float _402 = exp2(_398 * fma(_398, fp_c1_1._m0[0].z, -6.9831600189208984375));
            uint _404 = uint(int(uint(_350 + 6400) >> uint(2)));
            int _406 = int(_404) + 1;
            float _408 = ((_216 * (1.0 / max(fma(_216 * _216, _392, -_392) + 1.0, fp_c1_1._m0[0].y))) * (_216 * (1.0 / max(fma(_216 * _216, _392, -_392) + 1.0, fp_c1_1._m0[0].y)))) * ((1.0 / (_234 + fma(_234, -_184, _184))) * (1.0 / (_234 + fma(_234, -_394, _394))));
            bool _410 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_396)) >> uint(2))][int(_396) & 3]) != 0;
            float _412 = _250 + fma(_250, -_402, _402);
            float _414 = _412;
            if (!_410)
            {
                _414 = 1.0;
            }
            float _416 = _414;
            if (_410)
            {
                uint _418 = uint(int(uint(_350 + 7840) >> uint(2)));
                int _420 = int(_418) + 1;
                uint _422 = uint(int(uint(_350 + 7848) >> uint(2)));
                uint _424 = uint(int(uint(_350 + 6888) >> uint(2)));
                float _426 = fp_c10_1._m0[int(uint(int(_424)) >> uint(2))][int(_424) & 3];
                int _428 = int(_424) + 1;
                _416 = exp2(fp_c10_1._m0[int(uint(_428) >> uint(2))][_428 & 3] * log2(clamp(((-_426) + fma(_370, -fp_c10_1._m0[int(uint(int(_422)) >> uint(2))][int(_422) & 3], fma(_368, -fp_c10_1._m0[int(uint(_420) >> uint(2))][_420 & 3], _366 * (-fp_c10_1._m0[int(uint(int(_418)) >> uint(2))][int(_418) & 3])))) * (1.0 / ((-_426) + 1.0)), 0.0, 1.0)));
            }
            _430 = _338 + 1;
            float _432 = (exp2(fp_c10_1._m0[int(uint(_380) >> uint(2))][_380 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_378)) >> uint(2))][int(_378) & 3], -sqrt(_364), fp_c1_1._m0[1].z), 0.0, 1.0))) * _416) * clamp(_390 + (-0.0), 0.0, 1.0);
            float _434 = fma(fp_c10_1._m0[int(uint(int(_404)) >> uint(2))][int(_404) & 3] * _432, fma(_298, fp_c1_1._m0[1].y, (_412 * _408) * 0.079577468335628509521484375), _326);
            float _436 = fma(fp_c10_1._m0[int(uint(_406) >> uint(2))][_406 & 3] * _432, fma(_296, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_402, _402)) * _408) * 0.079577468335628509521484375), _328);
            float _438 = fma(fp_c10_1._m0[int(uint(int(_400)) >> uint(2))][int(_400) & 3] * _432, fma(_300, fp_c1_1._m0[1].y, ((_252 + fma(_252, -_402, _402)) * _408) * 0.079577468335628509521484375), _330);
            _324 = int(uint(_324) >> uint(8));
            _338 = _430;
            _326 = _434;
            _328 = _436;
            _330 = _438;
            _342 = _434;
            _344 = _436;
            _346 = _438;
        } while (!(_430 >= 4));
        _348 = false;
        _332 = _342;
        _334 = _344;
        _336 = _346;
        if ((_324 & 255) == 30)
        {
            float _440 = _78.y;
            float _442 = 1.0 / (fma(_292, fp_c10_1._m0[565].z, fma(_440, fp_c10_1._m0[565].y, _294 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _444 = 1.0 / fp_c10_1._m0[561].y;
            float _446 = _294 + (-fp_c10_1._m0[557].x);
            float _448 = _292 + (-fp_c10_1._m0[557].z);
            float _450 = _446 * fp_c10_1._m0[558].z;
            float _452 = _448 * fp_c10_1._m0[558].x;
            float _454 = (-_294) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_444, fp_c10_1._m0[557].x);
            float _456 = (-_292) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_444, fp_c10_1._m0[557].z);
            float _458 = _454 * _454;
            float _460 = sqrt(fma(_456, _456, _458)) * (-fp_c10_1._m0[558].y);
            float _462 = inversesqrt(fma(_456, _456, fma(_460, _460, _458)));
            float _464 = _454 * _462;
            float _466 = _460 * _462;
            float _468 = _456 * _462;
            float _470 = _140 + _464;
            float _472 = _142 + _466;
            float _474 = ((-float(_452 < _450)) + float(_452 > _450)) * fp_c10_1._m0[561].y;
            float _476 = _144 + _468;
            float _478 = fma(_152, _468, fma(_150, _466, _148 * _464));
            float _480 = inversesqrt(fma(_476, _476, fma(_472, _472, _470 * _470)));
            float _482 = _470 * _480;
            float _484 = _472 * _480;
            float _486 = fma(_448, _448, _446 * _446);
            float _488 = fma(_448, fp_c10_1._m0[558].z, _446 * fp_c10_1._m0[558].x);
            float _490 = inversesqrt(fma(_468, _468, _464 * _464));
            bool _492 = _488 > 0.0;
            float _494 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_446, fma(_474, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_448 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_474 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_446, fma(_474, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_448 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_474 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _496 = _464;
            if (_492)
            {
                _496 = sqrt(_486);
            }
            float _498 = _476 * _480;
            float _500 = _496;
            if (!_492)
            {
                _500 = 1.0;
            }
            float _502 = max(fma(_144, _498, fma(_142, _484, _140 * _482)), fp_c1_1._m0[0].y);
            float _504 = max(fma(_152, _498, fma(_150, _484, _148 * _482)), fp_c1_1._m0[0].y) * max(fma(_152, _498, fma(_150, _484, _148 * _482)), fp_c1_1._m0[0].y);
            float _506 = max(_478, fp_c1_1._m0[0].y);
            float _508 = clamp(fma(_488 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0) * clamp(fma(_488 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0);
            float _510 = fma(_502, fp_c1_1._m0[0].z, -6.9831600189208984375);
            bool _512 = fma(_448 * inversesqrt(_486), fp_c10_1._m0[558].z, (_446 * inversesqrt(_486)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _514 = exp2(_502 * _510);
            float _516 = _510;
            if (_512)
            {
                _516 = fma(_494, -_494, fp_c1_1._m0[1].z) * fma(_494, -_494, fp_c1_1._m0[1].z);
            }
            float _518 = _516;
            if (!_512)
            {
                _518 = 1.0;
            }
            float _520 = ((1.0 / (_234 + fma(_234, -_184, _184))) * (1.0 / (_234 + fma(_234, -_506, _506)))) * ((_216 * (1.0 / max(fma(_216 * _216, _504, -_504) + 1.0, fp_c1_1._m0[0].y))) * (_216 * (1.0 / max(fma(_216 * _216, _504, -_504) + 1.0, fp_c1_1._m0[0].y))));
            float _522 = (min(fma(_508, -_508, fp_c1_1._m0[1].z) * fma(_508, -_508, fp_c1_1._m0[1].z), _518) * (exp2(log2(clamp(fma(_500, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_468 * _490, -fp_c10_1._m0[558].z, (_464 * _490) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_478 + (-0.0), 0.0, 1.0);
            float _524 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_292, fp_c10_1._m0[562].z, fma(_440, fp_c10_1._m0[562].y, _294 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _442, 0.5, 0.5), (-fma((fma(_292, fp_c10_1._m0[563].z, fma(_440, fp_c10_1._m0[563].y, _294 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _442, 0.5, 0.5)) + 1.0)).z > fma((fma(_292, fp_c10_1._m0[564].z, fma(_440, fp_c10_1._m0[564].y, _294 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _442, 0.5, 0.5)) || (_488 <= 0.0));
            _332 = fma(fma(_298, fp_c1_1._m0[1].y, ((_250 + fma(_250, -_514, _514)) * _520) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _522), _524, _342);
            _334 = fma(fma(_296, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_514, _514)) * _520) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _522), _524, _344);
            _336 = fma(fma(_300, fp_c1_1._m0[1].y, ((_252 + fma(_252, -_514, _514)) * _520) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _522), _524, _346);
        }
    }
    float _526 = _294 + (-fp_c3_1._m0[11].w);
    float _528 = _78.y;
    float _530 = _292 + (-fp_c3_1._m0[13].w);
    float _532 = fma(_322, _332, _320 * ((_312 * fp_c5_1._m0[5].x) * fma(_298, fp_c1_1._m0[1].y, fma((_250 + fma(_305, -_250, _305)) * _246, fp_c1_1._m0[1].x, _262))));
    float _534 = fma(_322, _334, _320 * ((_312 * fp_c5_1._m0[5].y) * fma(_296, fp_c1_1._m0[1].y, fma((_256 + fma(_305, -_256, _305)) * _246, fp_c1_1._m0[1].x, _264))));
    float _536 = fma(_322, _336, _320 * ((_312 * fp_c5_1._m0[5].z) * fma(_300, fp_c1_1._m0[1].y, fma((_252 + fma(_305, -_252, _305)) * _246, fp_c1_1._m0[1].x, _260))));
    float _538 = _528 + (-fp_c3_1._m0[12].w);
    float _540 = fma(_530, _530, fma(_538, _538, _526 * _526));
    float _542 = clamp(fma(fma(_292, fp_c5_1._m0[14].z, fma(_528, fp_c5_1._m0[14].y, _294 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _544 = clamp(fma(_322 * _320, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _546 = exp2(log2(clamp(sqrt(_540) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_530 * inversesqrt(_540), fp_c5_1._m0[23].z, fma(_538 * inversesqrt(_540), fp_c5_1._m0[23].y, (_526 * inversesqrt(_540)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _548 = fma((-_532) + fp_c5_1._m0[13].x, _542, _532);
    float _550 = fma((-_536) + fp_c5_1._m0[13].z, _542, _536);
    float _552 = fma((-_534) + fp_c5_1._m0[13].y, _542, _534);
    float _554 = clamp((-exp2((clamp(fma(sqrt(_540), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_548) + fma(fma((_546 * fp_c7_1._m0[55].x) * _544, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _554, _548);
    _81.y = fma((-_552) + fma(fma((_546 * fp_c7_1._m0[55].y) * _544, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _554, _552);
    _81.z = fma((-_550) + fma(fma((_546 * fp_c7_1._m0[55].z) * _544, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _554, _550);
    _81.w = 1.0;
}


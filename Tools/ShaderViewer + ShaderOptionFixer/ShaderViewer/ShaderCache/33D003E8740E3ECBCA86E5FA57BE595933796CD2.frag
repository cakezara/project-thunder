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
layout(binding = 2) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 3) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _62;
layout(location = 5) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 2) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 6) in vec4 _72;
layout(location = 3) in vec4 _74;
layout(location = 0) out vec4 _77;
uint _6[12];

void main()
{
    bool _308 = false;
    float _84 = _62.x;
    float _86 = _62.y;
    vec2 _90 = texture(fp_tex_tcb_E, vec2(_84, _86)).xy;
    float _92 = _90.x;
    float _94 = _90.y;
    float _96 = 1.0 / _64.w;
    vec3 _100 = texture(fp_tex_tcb_1C, vec2(_62.z, _62.w)).xyz;
    vec3 _102 = texture(fp_tex_tcb_A, vec2(_84, _86)).xyz;
    float _104 = texture(fp_tex_tcb_1A, vec2(_84, _86)).x;
    vec2 _106 = texture(fp_tex_tcb_2A, vec2(fma(_64.x * _96, 0.5, 0.5), fma(_64.y * _96, -0.5, 0.5))).xy;
    float _108 = _66.x;
    float _110 = _66.y;
    float _112 = _66.z;
    float _114 = _68.y;
    float _116 = _68.z;
    float _118 = _68.w;
    float _120 = _68.x;
    float _122 = inversesqrt(fma(_112, _112, fma(_110, _110, _108 * _108)));
    float _124 = _70.z;
    float _126 = _112 * _122;
    float _128 = _110 * _122;
    float _130 = _70.x;
    float _132 = _108 * _122;
    float _134 = _70.y;
    float _136 = inversesqrt(fma(_124, _124, fma(_134, _134, _130 * _130)));
    float _138 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].y);
    float _140 = sqrt(clamp((-fma(_92, _92, _94 * _94)) + 1.0, 0.0, 1.0));
    float _142 = _130 * (-_136);
    float _144 = _134 * (-_136);
    float _146 = _124 * (-_136);
    float _148 = fma(_132, _140, fma(_92, _120, _94 * (fma(_128, _116, -(_126 * _114)) * _118)));
    float _150 = fma(_128, _140, fma(_92, _114, _94 * (fma(_126, _120, -(_132 * _116)) * _118)));
    float _152 = fma(_126, _140, fma(_92, _116, _94 * (fma(_132, _114, -(_128 * _120)) * _118)));
    float _154 = inversesqrt(fma(_152, _152, fma(_150, _150, _148 * _148)));
    float _156 = 1.0 / (_72.z * gl_FragCoord.w);
    float _158 = _148 * _154;
    float _160 = _150 * _154;
    float _162 = _152 * _154;
    float _164 = fma(_162, _146, fma(_160, _144, _158 * _142));
    float _166 = max(_164, fp_c1_1._m0[0].x);
    float _168 = fma(_158 * (-_164), -2.0, -_142);
    float _170 = fma(_160 * (-_164), -2.0, -_144);
    float _172 = fma(_162 * (-_164), -2.0, -_146);
    float _174 = _142 + (-fp_c5_1._m0[23].x);
    float _176 = 1.0 / max(abs(_172), max(abs(_168), abs(_170)));
    vec2 _178 = texture(fp_tex_tcb_38, vec2(_166, (-_138) + (-0.0))).xy;
    float _180 = _178.x;
    float _182 = _178.y;
    vec3 _184 = texture(fp_tex_tcb_36, vec4(_168 * _176, _170 * _176, _172 * _176, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_138 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _186 = _74.z;
    float _188 = _74.x;
    float _190 = _144 + (-fp_c5_1._m0[23].y);
    float _192 = _142 * _144;
    float _194 = fma(_138, 0.5, 0.5);
    float _196 = _138 * _138;
    float _198 = _100.x * _102.x;
    float _200 = _100.y * _102.y;
    float _202 = _144 * _146;
    float _204 = _100.z * _102.z;
    float _206 = _146 + (-fp_c5_1._m0[23].z);
    float _208 = _146 * _146;
    float _210 = inversesqrt(fma(_206, _206, fma(_190, _190, _174 * _174)));
    float _212 = _142 * _146;
    int _215 = max(0, min(int(trunc((_186 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _217 = _174 * _210;
    float _219 = _190 * _210;
    float _221 = _206 * _210;
    float _223 = fma(_142, _142, -(_144 * _144));
    float _225 = max(fma(_146, _221, fma(_144, _219, _142 * _217)), fp_c1_1._m0[0].x);
    float _227 = _160 * _162;
    float _229 = _160 * _158;
    float _231 = _162 * _162;
    float _233 = _162 * _158;
    float _235 = _196 * _196;
    float _237 = fma(_160, -fp_c5_1._m0[23].y, _158 * (-fp_c5_1._m0[23].x));
    float _239 = max(fma(_162, _221, fma(_160, _219, _158 * _217)), fp_c1_1._m0[0].x) * max(fma(_162, _221, fma(_160, _219, _158 * _217)), fp_c1_1._m0[0].x);
    float _241 = (_194 * 0.5) * _194;
    float _243 = clamp(fma(_162, -fp_c5_1._m0[23].z, _237), 0.0, 1.0);
    float _245 = max(fma(_162, -fp_c5_1._m0[23].z, _237), fp_c1_1._m0[0].x);
    float _247 = 1.0 / (_241 + fma(_166, -_241, _166));
    float _249 = fma(_158, _158, -(_160 * _160));
    float _251 = exp2(log2(clamp((-_164) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[45].y) * fp_c6_1._m0[45].x;
    float _253 = (_247 * (1.0 / (_241 + fma(_241, -_245, _245)))) * ((_196 * (1.0 / max(fma(_235, _239, -_239) + 1.0, fp_c1_1._m0[0].x))) * (_196 * (1.0 / max(fma(_235, _239, -_239) + 1.0, fp_c1_1._m0[0].x))));
    uint _256 = uint(int(uint((((int(uint(_215) >> uint(16)) * 20) << 16) + (((_215 & 65535) * 20) + max(0, min(int(trunc((_188 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _258 = fp_c10_1._m0[int(uint(int(_256)) >> uint(2))][int(_256) & 3];
    float _260 = exp2(_225 * fma(_225, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _262 = fma((max(0.0, fma(_223, fp_c5_1._m0[31].x, (fma(_146, -fp_c5_1._m0[25].z, fma(_144, -fp_c5_1._m0[25].y, _142 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_212, fp_c5_1._m0[28].w, fma(_208, fp_c5_1._m0[28].z, fma(_202, fp_c5_1._m0[28].y, _192 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[46].x) * _251, _104, fma(_198, -fp_c6_1._m0[9].x, _198));
    float _264 = fma(_198 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _266 = fma(_204 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _268 = fma(_200 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _270 = fma((max(0.0, fma(_223, fp_c5_1._m0[31].y, (fma(_146, -fp_c5_1._m0[26].z, fma(_144, -fp_c5_1._m0[26].y, _142 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_212, fp_c5_1._m0[29].w, fma(_208, fp_c5_1._m0[29].z, fma(_202, fp_c5_1._m0[29].y, _192 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[46].y) * _251, _104, fma(_200, -fp_c6_1._m0[9].x, _200));
    float _272 = fma((max(0.0, fma(_223, fp_c5_1._m0[31].z, (fma(_146, -fp_c5_1._m0[27].z, fma(_144, -fp_c5_1._m0[27].y, _142 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_212, fp_c5_1._m0[30].w, fma(_208, fp_c5_1._m0[30].z, fma(_202, fp_c5_1._m0[30].y, _192 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[46].z) * _251, _104, fma(_204, -fp_c6_1._m0[9].x, _204));
    float _274 = fma(fma(_268, _180, _182), _184.y, fma(_270, -_268, _270) * max(0.0, fma(_249, fp_c5_1._m0[31].y, (fma(_162, fp_c5_1._m0[26].z, fma(_160, fp_c5_1._m0[26].y, _158 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_233, fp_c5_1._m0[29].w, fma(_231, fp_c5_1._m0[29].z, fma(_227, fp_c5_1._m0[29].y, _229 * fp_c5_1._m0[29].x))))));
    float _276 = fma(fma(_266, _180, _182), _184.z, fma(_272, -_266, _272) * max(0.0, fma(_249, fp_c5_1._m0[31].z, (fma(_162, fp_c5_1._m0[27].z, fma(_160, fp_c5_1._m0[27].y, _158 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_233, fp_c5_1._m0[30].w, fma(_231, fp_c5_1._m0[30].z, fma(_227, fp_c5_1._m0[30].y, _229 * fp_c5_1._m0[30].x))))));
    float _278 = fma(fma(_264, _180, _182), _184.x, fma(_262, -_264, _262) * max(0.0, fma(_249, fp_c5_1._m0[31].x, (fma(_162, fp_c5_1._m0[25].z, fma(_160, fp_c5_1._m0[25].y, _158 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_233, fp_c5_1._m0[28].w, fma(_231, fp_c5_1._m0[28].z, fma(_227, fp_c5_1._m0[28].y, _229 * fp_c5_1._m0[28].x))))));
    float _280 = clamp((-fma(max((-_106.x) + 1.0, (-_106.y) + 1.0), clamp(_74.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_72.x * gl_FragCoord.w) * _156, (_72.y * gl_FragCoord.w) * _156)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _282 = floatBitsToInt(_258);
    float _284 = _278;
    float _286 = _274;
    float _288 = _276;
    float _290 = _274;
    float _292 = _278;
    float _294 = _276;
    if (floatBitsToInt(_258) != (-1))
    {
        int _296 = 0;
        float _300;
        float _302;
        float _304;
        int _390;
        do
        {
            int _298 = _282 & 255;
            _300 = _284;
            _302 = _286;
            _304 = _288;
            _308 = uint(_298) >= 30u;
            if (_308)
            {
                break;
            }
            int _310 = _298 << 4;
            uint _312 = uint(int(uint(_310 + 7360) >> uint(2)));
            int _314 = int(_312) + 1;
            uint _316 = uint(int(uint(_310 + 7368) >> uint(2)));
            float _318 = (-_188) + fp_c10_1._m0[int(uint(int(_312)) >> uint(2))][int(_312) & 3];
            float _320 = fp_c10_1._m0[int(uint(_314) >> uint(2))][_314 & 3] + (-_74.y);
            float _322 = (-_186) + fp_c10_1._m0[int(uint(int(_316)) >> uint(2))][int(_316) & 3];
            float _324 = fma(_322, _322, fma(_320, _320, _318 * _318));
            float _326 = _318 * inversesqrt(_324);
            float _328 = _320 * inversesqrt(_324);
            float _330 = _322 * inversesqrt(_324);
            float _332 = _142 + _326;
            float _334 = _144 + _328;
            float _336 = _146 + _330;
            uint _338 = uint(int(uint(_310 + 6880) >> uint(2)));
            int _340 = int(_338) + 1;
            float _342 = inversesqrt(fma(_336, _336, fma(_334, _334, _332 * _332)));
            float _344 = _332 * _342;
            float _346 = _334 * _342;
            float _348 = _336 * _342;
            uint _350 = uint(int(uint(_310 + 8320) >> uint(2)));
            float _352 = max(fma(_146, _348, fma(_144, _346, _142 * _344)), fp_c1_1._m0[0].x);
            float _354 = fma(_162, _330, fma(_160, _328, _158 * _326));
            float _356 = max(fma(_162, _348, fma(_160, _346, _158 * _344)), fp_c1_1._m0[0].x) * max(fma(_162, _348, fma(_160, _346, _158 * _344)), fp_c1_1._m0[0].x);
            float _358 = max(_354, fp_c1_1._m0[0].x);
            float _360 = fp_c10_1._m0[int(uint(_340) >> uint(2))][_340 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3], -sqrt(_324), fp_c1_1._m0[1].x), 0.0, 1.0));
            uint _362 = uint(int(uint(_310 + 6400) >> uint(2)));
            int _364 = int(_362) + 1;
            bool _366 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_350)) >> uint(2))][int(_350) & 3]) != 0;
            uint _368 = uint(int(uint(_310 + 6408) >> uint(2)));
            float _370 = exp2(_352 * fma(_352, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _372 = ((_196 * (1.0 / max(fma(_235, _356, -_356) + 1.0, fp_c1_1._m0[0].x))) * (_196 * (1.0 / max(fma(_235, _356, -_356) + 1.0, fp_c1_1._m0[0].x)))) * (_247 * (1.0 / (_241 + fma(_241, -_358, _358))));
            float _374 = _360;
            if (!_366)
            {
                _374 = 1.0;
            }
            float _376 = _374;
            if (_366)
            {
                uint _378 = uint(int(uint(_310 + 7840) >> uint(2)));
                int _380 = int(_378) + 1;
                uint _382 = uint(int(uint(_310 + 7848) >> uint(2)));
                uint _384 = uint(int(uint(_310 + 6888) >> uint(2)));
                float _386 = fp_c10_1._m0[int(uint(int(_384)) >> uint(2))][int(_384) & 3];
                int _388 = int(_384) + 1;
                _376 = exp2(fp_c10_1._m0[int(uint(_388) >> uint(2))][_388 & 3] * log2(clamp(((-_386) + fma(_330, -fp_c10_1._m0[int(uint(int(_382)) >> uint(2))][int(_382) & 3], fma(_328, -fp_c10_1._m0[int(uint(_380) >> uint(2))][_380 & 3], _326 * (-fp_c10_1._m0[int(uint(int(_378)) >> uint(2))][int(_378) & 3])))) * (1.0 / ((-_386) + 1.0)), 0.0, 1.0)));
            }
            _390 = _296 + 1;
            float _392 = clamp(_354 + (-0.0), 0.0, 1.0) * (exp2(_360) * _376);
            float _394 = fma(fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3] * _392, fma(_262, fp_c1_1._m0[1].y, ((_264 + fma(_264, -_370, _370)) * _372) * 0.079577468335628509521484375), _284);
            float _396 = fma(fp_c10_1._m0[int(uint(_364) >> uint(2))][_364 & 3] * _392, fma(_270, fp_c1_1._m0[1].y, ((_268 + fma(_268, -_370, _370)) * _372) * 0.079577468335628509521484375), _286);
            float _398 = fma(fp_c10_1._m0[int(uint(int(_368)) >> uint(2))][int(_368) & 3] * _392, fma(_272, fp_c1_1._m0[1].y, ((_266 + fma(_266, -_370, _370)) * _372) * 0.079577468335628509521484375), _288);
            _282 = int(uint(_282) >> uint(8));
            _296 = _390;
            _284 = _394;
            _286 = _396;
            _288 = _398;
            _300 = _394;
            _302 = _396;
            _304 = _398;
        } while (!(_390 >= 4));
        _308 = false;
        _290 = _302;
        _292 = _300;
        _294 = _304;
        if ((_282 & 255) == 30)
        {
            float _400 = _74.y;
            float _402 = 1.0 / (fma(_186, fp_c10_1._m0[565].z, fma(_400, fp_c10_1._m0[565].y, _188 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _404 = 1.0 / fp_c10_1._m0[561].y;
            float _406 = _188 + (-fp_c10_1._m0[557].x);
            float _408 = _186 + (-fp_c10_1._m0[557].z);
            float _410 = _406 * fp_c10_1._m0[558].z;
            float _412 = (-_188) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_404, fp_c10_1._m0[557].x);
            float _414 = (-_186) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_404, fp_c10_1._m0[557].z);
            float _416 = _408 * fp_c10_1._m0[558].x;
            float _418 = _412 * _412;
            float _420 = sqrt(fma(_414, _414, _418)) * (-fp_c10_1._m0[558].y);
            float _422 = inversesqrt(fma(_414, _414, fma(_420, _420, _418)));
            float _424 = _412 * _422;
            float _426 = _420 * _422;
            float _428 = _414 * _422;
            float _430 = _142 + _424;
            float _432 = _144 + _426;
            float _434 = ((-float(_416 < _410)) + float(_416 > _410)) * fp_c10_1._m0[561].y;
            float _436 = _146 + _428;
            float _438 = fma(_162, _428, fma(_160, _426, _158 * _424));
            float _440 = inversesqrt(fma(_436, _436, fma(_432, _432, _430 * _430)));
            float _442 = _430 * _440;
            float _444 = _432 * _440;
            float _446 = fma(_408, _408, _406 * _406);
            float _448 = fma(_408, fp_c10_1._m0[558].z, _406 * fp_c10_1._m0[558].x);
            bool _450 = _448 > 0.0;
            float _452 = inversesqrt(fma(_428, _428, _424 * _424));
            float _454 = _436 * _440;
            float _456 = _428;
            if (_450)
            {
                _456 = sqrt(_446);
            }
            float _458 = _456;
            if (!_450)
            {
                _458 = 1.0;
            }
            float _460 = max(fma(_146, _454, fma(_144, _444, _142 * _442)), fp_c1_1._m0[0].x);
            bool _462 = fma(_408 * inversesqrt(_446), fp_c10_1._m0[558].z, (_406 * inversesqrt(_446)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _464 = max(_438, fp_c1_1._m0[0].x);
            float _466 = max(fma(_162, _454, fma(_160, _444, _158 * _442)), fp_c1_1._m0[0].x) * max(fma(_162, _454, fma(_160, _444, _158 * _442)), fp_c1_1._m0[0].x);
            float _468 = clamp(fma(_448 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_448 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _470 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_406, fma(_434, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_408 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_434 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_406, fma(_434, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_408 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_434 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _472 = fma(_460, fp_c1_1._m0[0].z, -6.9831600189208984375);
            float _474 = _472;
            if (_462)
            {
                _474 = fma(_470, -_470, fp_c1_1._m0[1].x) * fma(_470, -_470, fp_c1_1._m0[1].x);
            }
            float _476 = _474;
            if (!_462)
            {
                _476 = 1.0;
            }
            float _478 = exp2(_460 * _472);
            float _480 = clamp(_438 + (-0.0), 0.0, 1.0) * ((exp2(log2(clamp(fma(_458, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_428 * _452, -fp_c10_1._m0[558].z, (_424 * _452) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_468, -_468, fp_c1_1._m0[1].x) * fma(_468, -_468, fp_c1_1._m0[1].x), _476));
            float _482 = (_247 * (1.0 / (_241 + fma(_241, -_464, _464)))) * ((_196 * (1.0 / max(fma(_235, _466, -_466) + 1.0, fp_c1_1._m0[0].x))) * (_196 * (1.0 / max(fma(_235, _466, -_466) + 1.0, fp_c1_1._m0[0].x))));
            float _484 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_186, fp_c10_1._m0[562].z, fma(_400, fp_c10_1._m0[562].y, _188 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _402, 0.5, 0.5), (-fma((fma(_186, fp_c10_1._m0[563].z, fma(_400, fp_c10_1._m0[563].y, _188 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _402, 0.5, 0.5)) + 1.0)).z > fma((fma(_186, fp_c10_1._m0[564].z, fma(_400, fp_c10_1._m0[564].y, _188 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _402, 0.5, 0.5)) || (_448 <= 0.0));
            _290 = fma(fma(_270, fp_c1_1._m0[1].y, ((_268 + fma(_268, -_478, _478)) * _482) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _480), _484, _302);
            _292 = fma(fma(_262, fp_c1_1._m0[1].y, ((_264 + fma(_264, -_478, _478)) * _482) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _480), _484, _300);
            _294 = fma(fma(_272, fp_c1_1._m0[1].y, ((_266 + fma(_266, -_478, _478)) * _482) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _480), _484, _304);
        }
    }
    float _486 = _188 + (-fp_c3_1._m0[11].w);
    float _488 = _74.y;
    float _490 = _186 + (-fp_c3_1._m0[13].w);
    float _492 = fma(_280, fma(_253 * (_268 + fma(_268, -_260, _260)), fp_c1_1._m0[0].w, _270 * 0.3183098733425140380859375) * (_243 * fp_c5_1._m0[5].y), _290);
    float _494 = fma(_280, fma(_253 * (_264 + fma(_264, -_260, _260)), fp_c1_1._m0[0].w, _262 * 0.3183098733425140380859375) * (_243 * fp_c5_1._m0[5].x), _292);
    float _496 = fma(_280, fma(_253 * (_266 + fma(_266, -_260, _260)), fp_c1_1._m0[0].w, _272 * 0.3183098733425140380859375) * (_243 * fp_c5_1._m0[5].z), _294);
    float _498 = _488 + (-fp_c3_1._m0[12].w);
    float _500 = fma(_490, _490, fma(_498, _498, _486 * _486));
    float _502 = clamp(fma(fma(_186, fp_c5_1._m0[14].z, fma(_488, fp_c5_1._m0[14].y, _188 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _504 = exp2(fma(fma(_490 * inversesqrt(_500), fp_c5_1._m0[23].z, fma(_498 * inversesqrt(_500), fp_c5_1._m0[23].y, (_486 * inversesqrt(_500)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_500) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _506 = clamp(fma(_280, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _508 = fma(_502, (-_494) + fp_c5_1._m0[13].x, _494);
    float _510 = fma(_502, (-_492) + fp_c5_1._m0[13].y, _492);
    float _512 = fma(_502, (-_496) + fp_c5_1._m0[13].z, _496);
    float _514 = clamp((-exp2((clamp(fma(sqrt(_500), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _77.x = fma((-_508) + fma(fma(_506 * (_504 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _514, _508);
    _77.y = fma((-_510) + fma(fma(_506 * (_504 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _514, _510);
    _77.z = fma((-_512) + fma(fma(_506 * (_504 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _514, _512);
    _77.w = 1.0;
}


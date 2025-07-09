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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
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
    bool _300 = false;
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
    float _118 = inversesqrt(fma(_102, _102, fma(_100, _100, _98 * _98)));
    float _120 = _102 * _118;
    float _122 = _98 * _118;
    float _124 = _100 * _118;
    float _126 = sqrt(clamp((-fma(_94, _94, _96 * _96)) + 1.0, 0.0, 1.0));
    float _128 = fma(_122, _126, fma(_94, _108, _96 * (fma(_124, _106, -(_120 * _104)) * _110)));
    float _130 = fma(_124, _126, fma(_94, _104, _96 * (fma(_120, _108, -(_122 * _106)) * _110)));
    float _132 = fma(_120, _126, fma(_94, _106, _96 * (fma(_122, _104, -(_124 * _108)) * _110)));
    float _134 = inversesqrt(fma(_116, _116, fma(_114, _114, _112 * _112)));
    float _136 = _112 * (-_134);
    float _138 = inversesqrt(fma(_132, _132, fma(_130, _130, _128 * _128)));
    float _140 = _114 * (-_134);
    float _142 = 1.0 / (_72.z * gl_FragCoord.w);
    float _144 = _116 * (-_134);
    float _146 = _128 * _138;
    float _148 = _130 * _138;
    float _150 = _132 * _138;
    float _152 = max(texture(fp_tex_tcb_10, vec2(_86, _88)).x, fp_c1_1._m0[0].x);
    float _154 = fma(_150, _144, fma(_148, _140, _146 * _136));
    float _156 = 1.0 / _74.w;
    float _158 = max(_154, fp_c1_1._m0[0].y);
    float _160 = fma(_146 * (-_154), -2.0, -_136);
    float _162 = fma(_148 * (-_154), -2.0, -_140);
    float _164 = fma(_150 * (-_154), -2.0, -_144);
    float _166 = 1.0 / max(abs(_164), max(abs(_160), abs(_162)));
    vec2 _168 = texture(fp_tex_tcb_2A, vec2(fma(_74.x * _156, 0.5, 0.5), fma(_74.y * _156, -0.5, 0.5))).xy;
    vec3 _172 = texture(fp_tex_tcb_A, vec2(_86, _88)).xyz;
    float _174 = _172.x;
    float _176 = _172.y;
    float _178 = _172.z;
    float _180 = texture(fp_tex_tcb_12, vec2(_86, _88)).x;
    vec3 _182 = texture(fp_tex_tcb_14, vec2(_86, _88)).xyz;
    vec2 _184 = texture(fp_tex_tcb_38, vec2(_158, (-_152) + (-0.0))).xy;
    float _186 = _184.x;
    float _188 = _184.y;
    vec3 _190 = texture(fp_tex_tcb_36, vec4(_160 * _166, _162 * _166, _164 * _166, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_152 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _192 = _76.x;
    float _194 = _76.z;
    float _196 = _140 + (-fp_c5_1._m0[23].y);
    float _198 = _136 + (-fp_c5_1._m0[23].x);
    float _200 = _144 + (-fp_c5_1._m0[23].z);
    float _202 = inversesqrt(fma(_200, _200, fma(_196, _196, _198 * _198)));
    int _205 = max(0, min(int(trunc((_194 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _207 = _146 * _148;
    float _209 = _198 * _202;
    float _211 = _196 * _202;
    float _213 = _148 * _150;
    float _215 = _200 * _202;
    float _217 = _150 * _150;
    float _219 = _146 * _150;
    float _221 = max(fma(_150, _215, fma(_148, _211, _146 * _209)), fp_c1_1._m0[0].y) * max(fma(_150, _215, fma(_148, _211, _146 * _209)), fp_c1_1._m0[0].y);
    float _223 = max(fma(_144, _215, fma(_140, _211, _136 * _209)), fp_c1_1._m0[0].y);
    float _225 = fma(_152, 0.5, 0.5);
    float _227 = _152 * _152;
    float _229 = fma(_148, -fp_c5_1._m0[23].y, _146 * (-fp_c5_1._m0[23].x));
    float _231 = fma(_146, _146, -(_148 * _148));
    float _233 = _227 * _227;
    float _235 = clamp(fma(_150, -fp_c5_1._m0[23].z, _229), 0.0, 1.0);
    float _237 = max(fma(_150, -fp_c5_1._m0[23].z, _229), fp_c1_1._m0[0].y);
    float _239 = exp2(_223 * fma(_223, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _241 = (_225 * 0.5) * _225;
    uint _244 = uint(int(uint((((int(uint(_205) >> uint(16)) * 20) << 16) + (((_205 & 65535) * 20) + max(0, min(int(trunc((_192 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _246 = fp_c10_1._m0[int(uint(int(_244)) >> uint(2))][int(_244) & 3];
    float _248 = 1.0 / (_241 + fma(_158, -_241, _158));
    float _250 = fma(_180, _176 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _252 = fma(_180, _174 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _254 = fma(_180, _178 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _256 = fma(_176, -_180, _176);
    float _258 = (_248 * (1.0 / (_241 + fma(_241, -_237, _237)))) * ((_227 * (1.0 / max(fma(_221, _233, -_221) + 1.0, fp_c1_1._m0[0].y))) * (_227 * (1.0 / max(fma(_221, _233, -_221) + 1.0, fp_c1_1._m0[0].y))));
    float _260 = fma(_174, -_180, _174);
    float _262 = fma(_178, -_180, _178);
    float _264 = fma(_190.x, fma(_252, _186, _188), max(0.0, fma(_231, fp_c5_1._m0[31].x, (fma(_150, fp_c5_1._m0[25].z, fma(_148, fp_c5_1._m0[25].y, _146 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_219, fp_c5_1._m0[28].w, fma(_217, fp_c5_1._m0[28].z, fma(_213, fp_c5_1._m0[28].y, _207 * fp_c5_1._m0[28].x))))) * fma(_260, -_252, _260));
    float _266 = fma(_190.y, fma(_250, _186, _188), max(0.0, fma(_231, fp_c5_1._m0[31].y, (fma(_150, fp_c5_1._m0[26].z, fma(_148, fp_c5_1._m0[26].y, _146 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_219, fp_c5_1._m0[29].w, fma(_217, fp_c5_1._m0[29].z, fma(_213, fp_c5_1._m0[29].y, _207 * fp_c5_1._m0[29].x))))) * fma(_256, -_250, _256));
    float _268 = fma(_190.z, fma(_254, _186, _188), max(0.0, fma(_231, fp_c5_1._m0[31].z, (fma(_150, fp_c5_1._m0[27].z, fma(_148, fp_c5_1._m0[27].y, _146 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_219, fp_c5_1._m0[30].w, fma(_217, fp_c5_1._m0[30].z, fma(_213, fp_c5_1._m0[30].y, _207 * fp_c5_1._m0[30].x))))) * fma(_262, -_254, _262));
    float _270 = clamp((-fma(max((-_168.x) + 1.0, (-_168.y) + 1.0), clamp(_76.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_72.x * gl_FragCoord.w) * _142, (_72.y * gl_FragCoord.w) * _142)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _272 = floatBitsToInt(_246);
    float _274 = _266;
    float _276 = _268;
    float _278 = _264;
    float _280 = _146;
    float _282 = _264;
    float _284 = _266;
    float _286 = _268;
    if (floatBitsToInt(_246) != (-1))
    {
        int _288 = 0;
        float _292;
        float _294;
        float _296;
        int _382;
        do
        {
            int _290 = _272 & 255;
            _292 = _278;
            _294 = _274;
            _296 = _276;
            _300 = uint(_290) >= 30u;
            if (_300)
            {
                break;
            }
            int _302 = _290 << 4;
            uint _304 = uint(int(uint(_302 + 7360) >> uint(2)));
            int _306 = int(_304) + 1;
            uint _308 = uint(int(uint(_302 + 7368) >> uint(2)));
            uint _310 = uint(int(uint(_302 + 6408) >> uint(2)));
            float _312 = (-_192) + fp_c10_1._m0[int(uint(int(_304)) >> uint(2))][int(_304) & 3];
            float _314 = fp_c10_1._m0[int(uint(_306) >> uint(2))][_306 & 3] + (-_76.y);
            float _316 = (-_194) + fp_c10_1._m0[int(uint(int(_308)) >> uint(2))][int(_308) & 3];
            float _318 = fma(_316, _316, fma(_314, _314, _312 * _312));
            float _320 = _312 * inversesqrt(_318);
            float _322 = _314 * inversesqrt(_318);
            float _324 = _316 * inversesqrt(_318);
            float _326 = _136 + _320;
            float _328 = _140 + _322;
            float _330 = _144 + _324;
            float _332 = inversesqrt(fma(_330, _330, fma(_328, _328, _326 * _326)));
            float _334 = _326 * _332;
            float _336 = _328 * _332;
            float _338 = _330 * _332;
            uint _340 = uint(int(uint(_302 + 6880) >> uint(2)));
            int _342 = int(_340) + 1;
            uint _344 = uint(int(uint(_302 + 8320) >> uint(2)));
            float _346 = max(fma(_144, _338, fma(_140, _336, _136 * _334)), fp_c1_1._m0[0].y);
            float _348 = fma(_150, _324, fma(_148, _322, _146 * _320));
            float _350 = max(fma(_150, _338, fma(_148, _336, _146 * _334)), fp_c1_1._m0[0].y) * max(fma(_150, _338, fma(_148, _336, _146 * _334)), fp_c1_1._m0[0].y);
            float _352 = max(_348, fp_c1_1._m0[0].y);
            uint _354 = uint(int(uint(_302 + 6400) >> uint(2)));
            int _356 = int(_354) + 1;
            float _358 = exp2(_346 * fma(_346, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _360 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3]) != 0;
            float _362 = fp_c10_1._m0[int(uint(_342) >> uint(2))][_342 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_340)) >> uint(2))][int(_340) & 3], -sqrt(_318), fp_c1_1._m0[1].y), 0.0, 1.0));
            float _364 = (_248 * (1.0 / (_241 + fma(_241, -_352, _352)))) * ((_227 * (1.0 / max(fma(_233, _350, -_350) + 1.0, fp_c1_1._m0[0].y))) * (_227 * (1.0 / max(fma(_233, _350, -_350) + 1.0, fp_c1_1._m0[0].y))));
            float _366 = _362;
            if (!_360)
            {
                _366 = 1.0;
            }
            float _368 = _366;
            if (_360)
            {
                uint _370 = uint(int(uint(_302 + 7840) >> uint(2)));
                int _372 = int(_370) + 1;
                uint _374 = uint(int(uint(_302 + 6888) >> uint(2)));
                float _376 = fp_c10_1._m0[int(uint(int(_374)) >> uint(2))][int(_374) & 3];
                int _378 = int(_374) + 1;
                uint _380 = uint(int(uint(_302 + 7848) >> uint(2)));
                _368 = exp2(fp_c10_1._m0[int(uint(_378) >> uint(2))][_378 & 3] * log2(clamp(((-_376) + fma(_324, -fp_c10_1._m0[int(uint(int(_380)) >> uint(2))][int(_380) & 3], fma(_322, -fp_c10_1._m0[int(uint(_372) >> uint(2))][_372 & 3], _320 * (-fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3])))) * (1.0 / ((-_376) + 1.0)), 0.0, 1.0)));
            }
            _382 = _288 + 1;
            float _384 = (exp2(_362) * _368) * clamp(_348 + (-0.0), 0.0, 1.0);
            float _386 = fma(fp_c10_1._m0[int(uint(_356) >> uint(2))][_356 & 3] * _384, fma(_256, fp_c1_1._m0[1].z, ((_250 + fma(_250, -_358, _358)) * _364) * 0.079577468335628509521484375), _274);
            float _388 = fma(fp_c10_1._m0[int(uint(int(_310)) >> uint(2))][int(_310) & 3] * _384, fma(_262, fp_c1_1._m0[1].z, ((_254 + fma(_254, -_358, _358)) * _364) * 0.079577468335628509521484375), _276);
            float _390 = fma(fp_c10_1._m0[int(uint(int(_354)) >> uint(2))][int(_354) & 3] * _384, fma(_260, fp_c1_1._m0[1].z, ((_252 + fma(_252, -_358, _358)) * _364) * 0.079577468335628509521484375), _278);
            _272 = int(uint(_272) >> uint(8));
            _288 = _382;
            _274 = _386;
            _276 = _388;
            _278 = _390;
            _292 = _390;
            _294 = _386;
            _296 = _388;
        } while (!(_382 >= 4));
        _300 = false;
        _282 = _292;
        _284 = _294;
        _286 = _296;
        if ((_272 & 255) == 30)
        {
            float _392 = _76.y;
            float _394 = 1.0 / (fma(_194, fp_c10_1._m0[565].z, fma(_392, fp_c10_1._m0[565].y, _192 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _396 = 1.0 / fp_c10_1._m0[561].y;
            float _398 = _194 + (-fp_c10_1._m0[557].z);
            float _400 = _398 * fp_c10_1._m0[558].x;
            float _402 = (-_192) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_396, fp_c10_1._m0[557].x);
            float _404 = (-_194) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_396, fp_c10_1._m0[557].z);
            float _406 = _192 + (-fp_c10_1._m0[557].x);
            float _408 = _402 * _402;
            float _410 = _406 * fp_c10_1._m0[558].z;
            float _412 = fma(_398, _398, _406 * _406);
            float _414 = sqrt(fma(_404, _404, _408)) * (-fp_c10_1._m0[558].y);
            float _416 = ((-float(_400 < _410)) + float(_400 > _410)) * fp_c10_1._m0[561].y;
            float _418 = inversesqrt(fma(_404, _404, fma(_414, _414, _408)));
            float _420 = _402 * _418;
            float _422 = _414 * _418;
            float _424 = _404 * _418;
            float _426 = _136 + _420;
            float _428 = fma(_398, fp_c10_1._m0[558].z, _406 * fp_c10_1._m0[558].x);
            float _430 = _140 + _422;
            bool _432 = _428 > 0.0;
            float _434 = inversesqrt(fma(_424, _424, _420 * _420));
            float _436 = _144 + _424;
            float _438 = fma(_150, _424, fma(_148, _422, _146 * _420));
            float _440 = inversesqrt(fma(_436, _436, fma(_430, _430, _426 * _426)));
            float _442 = _426 * _440;
            float _444 = _430 * _440;
            float _446 = _436 * _440;
            if (_432)
            {
                _280 = sqrt(_412);
            }
            float _448 = _280;
            if (!_432)
            {
                _448 = 1.0;
            }
            bool _450 = fma(_398 * inversesqrt(_412), fp_c10_1._m0[558].z, (_406 * inversesqrt(_412)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _452 = max(fma(_144, _446, fma(_140, _444, _136 * _442)), fp_c1_1._m0[0].y);
            float _454 = max(_438, fp_c1_1._m0[0].y);
            float _456 = clamp(fma(_428 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_428 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _458 = max(fma(_150, _446, fma(_148, _444, _146 * _442)), fp_c1_1._m0[0].y) * max(fma(_150, _446, fma(_148, _444, _146 * _442)), fp_c1_1._m0[0].y);
            float _460 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_406, fma(_416, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_398 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_416 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_406, fma(_416, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_398 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_416 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _462 = fma(_460, -_460, fp_c1_1._m0[1].y);
            if (!_450)
            {
                _462 = 1.0;
            }
            float _464 = _462;
            if (_450)
            {
                _464 = _462 * _462;
            }
            float _466 = exp2(_452 * fma(_452, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _468 = (min(fma(_456, -_456, fp_c1_1._m0[1].y) * fma(_456, -_456, fp_c1_1._m0[1].y), _464) * (exp2(log2(clamp(fma(_448, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_424 * _434, -fp_c10_1._m0[558].z, (_420 * _434) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_438 + (-0.0), 0.0, 1.0);
            float _470 = (_248 * (1.0 / (_241 + fma(_241, -_454, _454)))) * ((_227 * (1.0 / max(fma(_233, _458, -_458) + 1.0, fp_c1_1._m0[0].y))) * (_227 * (1.0 / max(fma(_233, _458, -_458) + 1.0, fp_c1_1._m0[0].y))));
            float _472 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_194, fp_c10_1._m0[562].z, fma(_392, fp_c10_1._m0[562].y, _192 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _394, 0.5, 0.5), (-fma((fma(_194, fp_c10_1._m0[563].z, fma(_392, fp_c10_1._m0[563].y, _192 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _394, 0.5, 0.5)) + 1.0)).z > fma((fma(_194, fp_c10_1._m0[564].z, fma(_392, fp_c10_1._m0[564].y, _192 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _394, 0.5, 0.5)) || (_428 <= 0.0));
            _282 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _468) * fma(_260, fp_c1_1._m0[1].z, ((_252 + fma(_252, -_466, _466)) * _470) * 0.079577468335628509521484375), _472, _292);
            _284 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _468) * fma(_256, fp_c1_1._m0[1].z, ((_250 + fma(_250, -_466, _466)) * _470) * 0.079577468335628509521484375), _472, _294);
            _286 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _468) * fma(_262, fp_c1_1._m0[1].z, ((_254 + fma(_254, -_466, _466)) * _470) * 0.079577468335628509521484375), _472, _296);
        }
    }
    float _474 = _192 + (-fp_c3_1._m0[11].w);
    float _476 = _76.y;
    float _478 = _194 + (-fp_c3_1._m0[13].w);
    float _480 = fma(_174 * _182.x, fp_c6_1._m0[11].x, fma(_270, fma((_252 + fma(_252, -_239, _239)) * _258, fp_c1_1._m0[1].x, _260 * 0.3183098733425140380859375) * (_235 * fp_c5_1._m0[5].x), _282));
    float _482 = fma(_176 * _182.y, fp_c6_1._m0[11].x, fma(_270, fma((_250 + fma(_250, -_239, _239)) * _258, fp_c1_1._m0[1].x, _256 * 0.3183098733425140380859375) * (_235 * fp_c5_1._m0[5].y), _284));
    float _484 = _476 + (-fp_c3_1._m0[12].w);
    float _486 = fma(_478, _478, fma(_484, _484, _474 * _474));
    float _488 = fma(_178 * _182.z, fp_c6_1._m0[11].x, fma(_270, fma((_254 + fma(_254, -_239, _239)) * _258, fp_c1_1._m0[1].x, _262 * 0.3183098733425140380859375) * (_235 * fp_c5_1._m0[5].z), _286));
    float _490 = exp2(log2(clamp(sqrt(_486) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_478 * inversesqrt(_486), fp_c5_1._m0[23].z, fma(_484 * inversesqrt(_486), fp_c5_1._m0[23].y, (_474 * inversesqrt(_486)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _492 = clamp(fma(fma(_194, fp_c5_1._m0[14].z, fma(_476, fp_c5_1._m0[14].y, _192 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _494 = clamp(fma(_270, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _496 = fma((-_480) + fp_c5_1._m0[13].x, _492, _480);
    float _498 = fma((-_482) + fp_c5_1._m0[13].y, _492, _482);
    float _500 = fma((-_488) + fp_c5_1._m0[13].z, _492, _488);
    float _502 = clamp((-exp2((clamp(fma(sqrt(_486), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_496) + fma(fma(_494 * (_490 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _502, _496);
    _79.y = fma((-_498) + fma(fma(_494 * (_490 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _502, _498);
    _79.z = fma((-_500) + fma(fma(_494 * (_490 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _502, _500);
    _79.w = 1.0;
}


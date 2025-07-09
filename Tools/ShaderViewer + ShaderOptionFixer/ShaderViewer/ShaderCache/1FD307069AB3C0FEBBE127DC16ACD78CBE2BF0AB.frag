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
layout(binding = 2) uniform sampler2D fp_tex_tcb_14;
layout(binding = 3) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 2) in vec4 _66;
layout(location = 4) in vec4 _68;
layout(location = 6) in vec4 _70;
layout(location = 5) in vec4 _72;
layout(location = 3) in vec4 _74;
layout(location = 0) out vec4 _77;
uint _6[12];

void main()
{
    bool _300 = false;
    float _84 = _62.x;
    float _86 = _62.y;
    vec2 _90 = texture(fp_tex_tcb_E, vec2(_84, _86)).xy;
    float _92 = _90.x;
    float _94 = _90.y;
    float _96 = _64.x;
    float _98 = _64.y;
    float _100 = _64.z;
    float _102 = _66.y;
    float _104 = _66.z;
    float _106 = _66.x;
    float _108 = _66.w;
    float _110 = _68.x;
    float _112 = _68.y;
    float _114 = _68.z;
    float _116 = 1.0 / (_70.z * gl_FragCoord.w);
    float _118 = inversesqrt(fma(_100, _100, fma(_98, _98, _96 * _96)));
    float _120 = _100 * _118;
    float _122 = _96 * _118;
    float _124 = _98 * _118;
    float _126 = sqrt(clamp((-fma(_92, _92, _94 * _94)) + 1.0, 0.0, 1.0));
    float _128 = fma(_122, _126, fma(_92, _106, _94 * (fma(_124, _104, -(_120 * _102)) * _108)));
    float _130 = fma(_124, _126, fma(_92, _102, _94 * (fma(_120, _106, -(_122 * _104)) * _108)));
    float _132 = fma(_120, _126, fma(_92, _104, _94 * (fma(_122, _102, -(_124 * _106)) * _108)));
    float _134 = inversesqrt(fma(_114, _114, fma(_112, _112, _110 * _110)));
    float _136 = _110 * (-_134);
    float _138 = inversesqrt(fma(_132, _132, fma(_130, _130, _128 * _128)));
    float _140 = _112 * (-_134);
    float _142 = _114 * (-_134);
    float _144 = 1.0 / _72.w;
    float _146 = _128 * _138;
    float _148 = _130 * _138;
    float _150 = _132 * _138;
    float _152 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _154 = fma(_150, _142, fma(_148, _140, _146 * _136));
    float _156 = max(_154, fp_c1_1._m0[0].y);
    float _158 = fma(_146 * (-_154), -2.0, -_136);
    float _160 = fma(_148 * (-_154), -2.0, -_140);
    float _162 = fma(_150 * (-_154), -2.0, -_142);
    float _164 = 1.0 / max(abs(_162), max(abs(_158), abs(_160)));
    vec2 _166 = texture(fp_tex_tcb_2A, vec2(fma(_72.x * _144, 0.5, 0.5), fma(_72.y * _144, -0.5, 0.5))).xy;
    vec3 _170 = texture(fp_tex_tcb_A, vec2(_84, _86)).xyz;
    float _172 = _170.x;
    float _174 = _170.y;
    float _176 = _170.z;
    vec3 _178 = texture(fp_tex_tcb_1E, vec2(_84, _86)).xyz;
    vec3 _180 = texture(fp_tex_tcb_14, vec2(_84, _86)).xyz;
    vec2 _182 = texture(fp_tex_tcb_38, vec2(_156, (-_152) + (-0.0))).xy;
    float _184 = _182.x;
    float _186 = _182.y;
    vec3 _188 = texture(fp_tex_tcb_36, vec4(_158 * _164, _160 * _164, _162 * _164, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_152 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _190 = _74.x;
    float _192 = _74.z;
    float _194 = _136 + (-fp_c5_1._m0[23].x);
    float _196 = _140 + (-fp_c5_1._m0[23].y);
    float _198 = fma(_152, 0.5, 0.5);
    float _200 = _152 * _152;
    float _202 = _142 + (-fp_c5_1._m0[23].z);
    float _204 = (_198 * 0.5) * _198;
    float _206 = inversesqrt(fma(_202, _202, fma(_196, _196, _194 * _194)));
    float _208 = _194 * _206;
    float _210 = _202 * _206;
    float _212 = _148 * _150;
    float _214 = _146 * _148;
    int _217 = max(0, min(int(trunc((_192 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _219 = _196 * _206;
    float _221 = _150 * _150;
    float _223 = fma(_148, -fp_c5_1._m0[23].y, _146 * (-fp_c5_1._m0[23].x));
    float _225 = _200 * _200;
    float _227 = max(fma(_142, _210, fma(_140, _219, _136 * _208)), fp_c1_1._m0[0].y);
    float _229 = max(fma(_150, _210, fma(_148, _219, _146 * _208)), fp_c1_1._m0[0].y) * max(fma(_150, _210, fma(_148, _219, _146 * _208)), fp_c1_1._m0[0].y);
    float _231 = _146 * _150;
    float _233 = max(fma(_150, -fp_c5_1._m0[23].z, _223), fp_c1_1._m0[0].y);
    float _235 = 1.0 / (_204 + fma(_156, -_204, _156));
    float _237 = fma(_146, _146, -(_148 * _148));
    float _239 = (_235 * (1.0 / (_204 + fma(_204, -_233, _233)))) * ((_200 * (1.0 / max(fma(_229, _225, -_229) + 1.0, fp_c1_1._m0[0].y))) * (_200 * (1.0 / max(fma(_229, _225, -_229) + 1.0, fp_c1_1._m0[0].y))));
    float _241 = exp2(_227 * fma(_227, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _243 = fma(_172 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _245 = fma(_174 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    uint _248 = uint(int(uint((((int(uint(_217) >> uint(16)) * 20) << 16) + (((_217 & 65535) * 20) + max(0, min(int(trunc((_190 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _250 = fp_c10_1._m0[int(uint(int(_248)) >> uint(2))][int(_248) & 3];
    float _252 = fma(_176 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _254 = fma(_178.z, fp_c1_1._m0[1].x, fma(_178.y, fp_c1_1._m0[0].w, _178.x * 0.298911988735198974609375));
    float _256 = fma(_174, -fp_c6_1._m0[9].x, _174);
    float _258 = fma(_176, -fp_c6_1._m0[9].x, _176);
    float _260 = fma(_172, -fp_c6_1._m0[9].x, _172);
    float _262 = clamp(fma(_150, -fp_c5_1._m0[23].z, _223), 0.0, 1.0);
    float _264 = fma(_188.z, fma(_252, _184, _186), max(0.0, fma(_237, fp_c5_1._m0[31].z, (fma(_150, fp_c5_1._m0[27].z, fma(_148, fp_c5_1._m0[27].y, _146 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_231, fp_c5_1._m0[30].w, fma(_221, fp_c5_1._m0[30].z, fma(_212, fp_c5_1._m0[30].y, _214 * fp_c5_1._m0[30].x))))) * fma(_258, -_252, _258));
    float _266 = fma(_188.x, fma(_243, _184, _186), max(0.0, fma(_237, fp_c5_1._m0[31].x, (fma(_150, fp_c5_1._m0[25].z, fma(_148, fp_c5_1._m0[25].y, _146 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_231, fp_c5_1._m0[28].w, fma(_221, fp_c5_1._m0[28].z, fma(_212, fp_c5_1._m0[28].y, _214 * fp_c5_1._m0[28].x))))) * fma(_260, -_243, _260));
    float _268 = fma(_188.y, fma(_245, _184, _186), max(0.0, fma(_237, fp_c5_1._m0[31].y, (fma(_150, fp_c5_1._m0[26].z, fma(_148, fp_c5_1._m0[26].y, _146 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_231, fp_c5_1._m0[29].w, fma(_221, fp_c5_1._m0[29].z, fma(_212, fp_c5_1._m0[29].y, _214 * fp_c5_1._m0[29].x))))) * fma(_256, -_245, _256));
    float _270 = clamp((-fma(max((-_166.x) + 1.0, (-_166.y) + 1.0), clamp(_74.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_70.x * gl_FragCoord.w) * _116, (_70.y * gl_FragCoord.w) * _116)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _272 = _268;
    float _274 = _264;
    float _276 = _266;
    float _278 = _146;
    float _280 = _266;
    float _282 = _264;
    float _284 = _268;
    if (floatBitsToInt(_250) != (-1))
    {
        int _286 = floatBitsToInt(_250);
        int _288 = 0;
        float _292;
        float _294;
        float _296;
        int _382;
        do
        {
            int _290 = _286 & 255;
            _292 = _276;
            _294 = _272;
            _296 = _274;
            _300 = uint(_290) >= 30u;
            if (_300)
            {
                break;
            }
            int _302 = _290 << 4;
            uint _304 = uint(int(uint(_302 + 7360) >> uint(2)));
            int _306 = int(_304) + 1;
            uint _308 = uint(int(uint(_302 + 7368) >> uint(2)));
            float _310 = (-_190) + fp_c10_1._m0[int(uint(int(_304)) >> uint(2))][int(_304) & 3];
            float _312 = fp_c10_1._m0[int(uint(_306) >> uint(2))][_306 & 3] + (-_74.y);
            float _314 = (-_192) + fp_c10_1._m0[int(uint(int(_308)) >> uint(2))][int(_308) & 3];
            float _316 = fma(_314, _314, fma(_312, _312, _310 * _310));
            float _318 = _310 * inversesqrt(_316);
            float _320 = _312 * inversesqrt(_316);
            float _322 = _314 * inversesqrt(_316);
            float _324 = _136 + _318;
            float _326 = _140 + _320;
            float _328 = _142 + _322;
            float _330 = inversesqrt(fma(_328, _328, fma(_326, _326, _324 * _324)));
            float _332 = _324 * _330;
            float _334 = _326 * _330;
            float _336 = _328 * _330;
            uint _338 = uint(int(uint(_302 + 6880) >> uint(2)));
            int _340 = int(_338) + 1;
            uint _342 = uint(int(uint(_302 + 8320) >> uint(2)));
            uint _344 = uint(int(uint(_302 + 6408) >> uint(2)));
            float _346 = max(fma(_142, _336, fma(_140, _334, _136 * _332)), fp_c1_1._m0[0].y);
            float _348 = fma(_150, _322, fma(_148, _320, _146 * _318));
            float _350 = max(fma(_150, _336, fma(_148, _334, _146 * _332)), fp_c1_1._m0[0].y) * max(fma(_150, _336, fma(_148, _334, _146 * _332)), fp_c1_1._m0[0].y);
            float _352 = max(_348, fp_c1_1._m0[0].y);
            uint _354 = uint(int(uint(_302 + 6400) >> uint(2)));
            int _356 = int(_354) + 1;
            float _358 = exp2(_346 * fma(_346, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _360 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_342)) >> uint(2))][int(_342) & 3]) != 0;
            float _362 = fp_c10_1._m0[int(uint(_340) >> uint(2))][_340 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3], -sqrt(_316), fp_c1_1._m0[1].z), 0.0, 1.0));
            float _364 = (_235 * (1.0 / (_204 + fma(_204, -_352, _352)))) * ((_200 * (1.0 / max(fma(_225, _350, -_350) + 1.0, fp_c1_1._m0[0].y))) * (_200 * (1.0 / max(fma(_225, _350, -_350) + 1.0, fp_c1_1._m0[0].y))));
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
                _368 = exp2(fp_c10_1._m0[int(uint(_378) >> uint(2))][_378 & 3] * log2(clamp(((-_376) + fma(_322, -fp_c10_1._m0[int(uint(int(_380)) >> uint(2))][int(_380) & 3], fma(_320, -fp_c10_1._m0[int(uint(_372) >> uint(2))][_372 & 3], _318 * (-fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3])))) * (1.0 / ((-_376) + 1.0)), 0.0, 1.0)));
            }
            _382 = _288 + 1;
            float _384 = (exp2(_362) * _368) * clamp(_348 + (-0.0), 0.0, 1.0);
            float _386 = fma(fp_c10_1._m0[int(uint(_356) >> uint(2))][_356 & 3] * _384, fma(_256, fp_c1_1._m0[1].w, ((_245 + fma(_245, -_358, _358)) * _364) * 0.079577468335628509521484375), _272);
            float _388 = fma(fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3] * _384, fma(_258, fp_c1_1._m0[1].w, ((_252 + fma(_252, -_358, _358)) * _364) * 0.079577468335628509521484375), _274);
            float _390 = fma(fp_c10_1._m0[int(uint(int(_354)) >> uint(2))][int(_354) & 3] * _384, fma(_260, fp_c1_1._m0[1].w, ((_243 + fma(_243, -_358, _358)) * _364) * 0.079577468335628509521484375), _276);
            _286 = int(uint(_286) >> uint(8));
            _288 = _382;
            _272 = _386;
            _274 = _388;
            _276 = _390;
            _292 = _390;
            _294 = _386;
            _296 = _388;
        } while (!(_382 >= 4));
        _300 = false;
        _280 = _292;
        _282 = _296;
        _284 = _294;
        if ((_286 & 255) == 30)
        {
            float _392 = _74.y;
            float _394 = 1.0 / (fma(_192, fp_c10_1._m0[565].z, fma(_392, fp_c10_1._m0[565].y, _190 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _396 = 1.0 / fp_c10_1._m0[561].y;
            float _398 = _192 + (-fp_c10_1._m0[557].z);
            float _400 = _398 * fp_c10_1._m0[558].x;
            float _402 = (-_190) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_396, fp_c10_1._m0[557].x);
            float _404 = (-_192) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_396, fp_c10_1._m0[557].z);
            float _406 = _190 + (-fp_c10_1._m0[557].x);
            float _408 = _402 * _402;
            float _410 = _406 * fp_c10_1._m0[558].z;
            float _412 = fma(_398, _398, _406 * _406);
            float _414 = sqrt(fma(_404, _404, _408)) * (-fp_c10_1._m0[558].y);
            float _416 = ((-float(_400 < _410)) + float(_400 > _410)) * fp_c10_1._m0[561].y;
            float _418 = inversesqrt(fma(_404, _404, fma(_414, _414, _408)));
            float _420 = _402 * _418;
            float _422 = _414 * _418;
            float _424 = fma(_398, fp_c10_1._m0[558].z, _406 * fp_c10_1._m0[558].x);
            float _426 = _404 * _418;
            float _428 = _136 + _420;
            float _430 = _140 + _422;
            bool _432 = _424 > 0.0;
            float _434 = inversesqrt(fma(_426, _426, _420 * _420));
            float _436 = _142 + _426;
            float _438 = fma(_150, _426, fma(_148, _422, _146 * _420));
            float _440 = inversesqrt(fma(_436, _436, fma(_430, _430, _428 * _428)));
            float _442 = _428 * _440;
            float _444 = _436 * _440;
            float _446 = _430 * _440;
            if (_432)
            {
                _278 = sqrt(_412);
            }
            float _448 = _278;
            if (!_432)
            {
                _448 = 1.0;
            }
            bool _450 = fma(_398 * inversesqrt(_412), fp_c10_1._m0[558].z, (_406 * inversesqrt(_412)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _452 = max(_438, fp_c1_1._m0[0].y);
            float _454 = max(fma(_150, _444, fma(_148, _446, _146 * _442)), fp_c1_1._m0[0].y) * max(fma(_150, _444, fma(_148, _446, _146 * _442)), fp_c1_1._m0[0].y);
            float _456 = max(fma(_142, _444, fma(_140, _446, _136 * _442)), fp_c1_1._m0[0].y);
            float _458 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_406, fma(_416, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_398 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_416 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_406, fma(_416, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_398 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_416 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _460 = clamp(fma(_424 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0) * clamp(fma(_424 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0);
            float _462 = 6.9831600189208984375;
            if (!_450)
            {
                _462 = 1.0;
            }
            float _464 = _462;
            if (_450)
            {
                _464 = fma(_458, -_458, fp_c1_1._m0[1].z) * fma(_458, -_458, fp_c1_1._m0[1].z);
            }
            float _466 = exp2(_456 * fma(_456, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _468 = (_235 * (1.0 / (_204 + fma(_204, -_452, _452)))) * ((_200 * (1.0 / max(fma(_225, _454, -_454) + 1.0, fp_c1_1._m0[0].y))) * (_200 * (1.0 / max(fma(_225, _454, -_454) + 1.0, fp_c1_1._m0[0].y))));
            float _470 = (min(fma(_460, -_460, fp_c1_1._m0[1].z) * fma(_460, -_460, fp_c1_1._m0[1].z), _464) * (exp2(log2(clamp(fma(_448, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_426 * _434, -fp_c10_1._m0[558].z, (_420 * _434) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_438 + (-0.0), 0.0, 1.0);
            float _472 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_192, fp_c10_1._m0[562].z, fma(_392, fp_c10_1._m0[562].y, _190 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _394, 0.5, 0.5), (-fma((fma(_192, fp_c10_1._m0[563].z, fma(_392, fp_c10_1._m0[563].y, _190 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _394, 0.5, 0.5)) + 1.0)).z > fma((fma(_192, fp_c10_1._m0[564].z, fma(_392, fp_c10_1._m0[564].y, _190 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _394, 0.5, 0.5)) || (_424 <= 0.0));
            _280 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _470) * fma(_260, fp_c1_1._m0[1].w, ((_243 + fma(_243, -_466, _466)) * _468) * 0.079577468335628509521484375), _472, _292);
            _282 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _470) * fma(_258, fp_c1_1._m0[1].w, ((_252 + fma(_252, -_466, _466)) * _468) * 0.079577468335628509521484375), _472, _296);
            _284 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _470) * fma(_256, fp_c1_1._m0[1].w, ((_245 + fma(_245, -_466, _466)) * _468) * 0.079577468335628509521484375), _472, _294);
        }
    }
    float _474 = _190 + (-fp_c3_1._m0[11].w);
    float _476 = _74.y;
    float _478 = _192 + (-fp_c3_1._m0[13].w);
    float _480 = _476 + (-fp_c3_1._m0[12].w);
    float _482 = fma(_478, _478, fma(_480, _480, _474 * _474));
    float _484 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _486 = fma((_254 * fma(_172, _180.x, _172)) * fp_c6_1._m0[93].x, _484, fma(_270, (_262 * fp_c5_1._m0[5].x) * fma(_239 * (_243 + fma(_243, -_241, _241)), fp_c1_1._m0[1].y, _260 * 0.3183098733425140380859375), _280));
    float _488 = fma((_254 * fma(_174, _180.y, _174)) * fp_c6_1._m0[93].y, _484, fma(_270, (_262 * fp_c5_1._m0[5].y) * fma(_239 * (_245 + fma(_245, -_241, _241)), fp_c1_1._m0[1].y, _256 * 0.3183098733425140380859375), _284));
    float _490 = fma((_254 * fma(_176, _180.z, _176)) * fp_c6_1._m0[93].z, _484, fma(_270, (_262 * fp_c5_1._m0[5].z) * fma(_239 * (_252 + fma(_252, -_241, _241)), fp_c1_1._m0[1].y, _258 * 0.3183098733425140380859375), _282));
    float _492 = clamp(fma(fma(_192, fp_c5_1._m0[14].z, fma(_476, fp_c5_1._m0[14].y, _190 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _494 = exp2(log2(clamp(sqrt(_482) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_478 * inversesqrt(_482), fp_c5_1._m0[23].z, fma(_480 * inversesqrt(_482), fp_c5_1._m0[23].y, (_474 * inversesqrt(_482)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _496 = clamp(fma(_270, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _498 = fma((-_486) + fp_c5_1._m0[13].x, _492, _486);
    float _500 = fma((-_488) + fp_c5_1._m0[13].y, _492, _488);
    float _502 = fma((-_490) + fp_c5_1._m0[13].z, _492, _490);
    float _504 = clamp((-exp2((clamp(fma(sqrt(_482), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _77.x = fma((-_498) + fma(fma((_494 * fp_c7_1._m0[55].x) * _496, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _504, _498);
    _77.y = fma((-_500) + fma(fma((_494 * fp_c7_1._m0[55].y) * _496, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _504, _500);
    _77.z = fma((-_502) + fma(fma((_494 * fp_c7_1._m0[55].z) * _496, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _504, _502);
    _77.w = 1.0;
}


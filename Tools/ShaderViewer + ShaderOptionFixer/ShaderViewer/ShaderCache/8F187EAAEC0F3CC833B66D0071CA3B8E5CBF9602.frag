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
layout(binding = 5) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _64;
layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 4) in vec4 _72;
layout(location = 3) in vec4 _74;
layout(location = 0) out vec4 _77;
uint _6[12];

void main()
{
    bool _296 = false;
    float _84 = _66.x;
    float _86 = _66.y;
    float _88 = 1.0 / _64.w;
    vec2 _92 = texture(fp_tex_tcb_E, vec2(_84, _86)).xy;
    float _94 = _92.x;
    float _96 = _92.y;
    float _98 = texture(fp_tex_tcb_12, vec2(_84, _86)).x;
    vec3 _102 = texture(fp_tex_tcb_A, vec2(_84, _86)).xyz;
    vec2 _104 = texture(fp_tex_tcb_2A, vec2(fma(_64.x * _88, 0.5, 0.5), fma(_64.y * _88, -0.5, 0.5))).xy;
    float _106 = _68.x;
    float _108 = _68.y;
    float _110 = _68.z;
    float _112 = _70.y;
    float _114 = _70.z;
    float _116 = _70.x;
    float _118 = _70.w;
    float _120 = _72.x;
    float _122 = _72.y;
    float _124 = _72.z;
    float _126 = inversesqrt(fma(_110, _110, fma(_108, _108, _106 * _106)));
    float _128 = _110 * _126;
    float _130 = _106 * _126;
    float _132 = _108 * _126;
    float _134 = sqrt(clamp((-fma(_94, _94, _96 * _96)) + 1.0, 0.0, 1.0));
    float _136 = fma(_130, _134, fma(_94, _116, _96 * (fma(_132, _114, -(_128 * _112)) * _118)));
    float _138 = fma(_132, _134, fma(_94, _112, _96 * (fma(_128, _116, -(_130 * _114)) * _118)));
    float _140 = fma(_128, _134, fma(_94, _114, _96 * (fma(_130, _112, -(_132 * _116)) * _118)));
    float _142 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _144 = _120 * (-_142);
    float _146 = inversesqrt(fma(_140, _140, fma(_138, _138, _136 * _136)));
    float _148 = _124 * (-_142);
    float _150 = max(texture(fp_tex_tcb_10, vec2(_84, _86)).x, fp_c1_1._m0[0].x);
    float _152 = _122 * (-_142);
    float _154 = _136 * _146;
    float _156 = _138 * _146;
    float _158 = _140 * _146;
    float _160 = fma(_158, _148, fma(_156, _152, _154 * _144));
    float _162 = fma(_154 * (-_160), -2.0, -_144);
    float _164 = fma(_156 * (-_160), -2.0, -_152);
    float _166 = max(_160, fp_c1_1._m0[0].y);
    float _168 = fma(_158 * (-_160), -2.0, -_148);
    vec2 _170 = texture(fp_tex_tcb_38, vec2(_166, (-_150) + (-0.0))).xy;
    float _172 = _170.x;
    float _174 = _170.y;
    float _176 = 1.0 / max(abs(_168), max(abs(_162), abs(_164)));
    vec3 _178 = texture(fp_tex_tcb_36, vec4(_162 * _176, _164 * _176, _168 * _176, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_150 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _180 = texture(fp_tex_tcb_1C, vec2(_84, _86)).xyz;
    float _182 = _74.x;
    float _184 = _74.z;
    float _186 = _152 + (-fp_c5_1._m0[23].y);
    float _188 = _158 * _158;
    float _190 = fma(_150, 0.5, 0.5);
    float _192 = (_190 * 0.5) * _190;
    float _194 = _144 + (-fp_c5_1._m0[23].x);
    float _196 = _148 + (-fp_c5_1._m0[23].z);
    float _198 = _154 * _156;
    int _201 = max(0, min(int(trunc((_184 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _203 = inversesqrt(fma(_196, _196, fma(_186, _186, _194 * _194)));
    float _205 = _186 * _203;
    float _207 = _156 * _158;
    float _209 = _194 * _203;
    float _211 = _196 * _203;
    float _213 = _154 * _158;
    float _215 = fma(_154, _154, -(_156 * _156));
    float _217 = _150 * _150;
    float _219 = max(fma(_148, _211, fma(_152, _205, _144 * _209)), fp_c1_1._m0[0].y);
    float _221 = max(fma(_158, _211, fma(_156, _205, _154 * _209)), fp_c1_1._m0[0].y) * max(fma(_158, _211, fma(_156, _205, _154 * _209)), fp_c1_1._m0[0].y);
    float _223 = _217 * _217;
    float _225 = fma(_156, -fp_c5_1._m0[23].y, _154 * (-fp_c5_1._m0[23].x));
    uint _228 = uint(int(uint((((int(uint(_201) >> uint(16)) * 20) << 16) + (((_201 & 65535) * 20) + max(0, min(int(trunc((_182 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _230 = fp_c10_1._m0[int(uint(int(_228)) >> uint(2))][int(_228) & 3];
    float _232 = max(fma(_158, -fp_c5_1._m0[23].z, _225), fp_c1_1._m0[0].y);
    float _234 = exp2(_219 * fma(_219, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _236 = exp2(log2(clamp((-_160) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
    float _238 = 1.0 / (_192 + fma(_166, -_192, _166));
    float _240 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].y;
    float _242 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].x;
    float _244 = fma(_236, fp_c6_1._m0[45].y, fma(_102.y, -_98, _102.y));
    float _246 = fma(_236, fp_c6_1._m0[45].x, fma(_102.x, -_98, _102.x));
    float _248 = fma(_236, fp_c6_1._m0[45].z, fma(_102.z, -_98, _102.z));
    float _250 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].z;
    float _252 = (_238 * (1.0 / (_192 + fma(_192, -_232, _232)))) * ((_217 * (1.0 / max(fma(_221, _223, -_221) + 1.0, fp_c1_1._m0[0].y))) * (_217 * (1.0 / max(fma(_221, _223, -_221) + 1.0, fp_c1_1._m0[0].y))));
    float _254 = clamp(fma(_158, fp_c5_1._m0[23].z, fma(_156, fp_c5_1._m0[23].y, _154 * fp_c5_1._m0[23].x)), 0.0, 1.0);
    float _256 = clamp(fma(_158, -fp_c5_1._m0[23].z, _225), 0.0, 1.0);
    float _258 = clamp(fma(max((-_104.x) + 1.0, (-_104.y) + 1.0), -clamp(_74.w + fp_c7_1._m0[36].z, 0.0, 1.0), fp_c1_1._m0[1].x), 0.0, 1.0);
    float _260 = fma(_178.y, fma(_240, _172, _174), max(0.0, fma(_215, fp_c5_1._m0[31].y, (fma(_158, fp_c5_1._m0[26].z, fma(_156, fp_c5_1._m0[26].y, _154 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_213, fp_c5_1._m0[29].w, fma(_188, fp_c5_1._m0[29].z, fma(_207, fp_c5_1._m0[29].y, _198 * fp_c5_1._m0[29].x))))) * fma(_244, -_240, _244));
    float _262 = fma(_178.x, fma(_242, _172, _174), max(0.0, fma(_215, fp_c5_1._m0[31].x, (fma(_158, fp_c5_1._m0[25].z, fma(_156, fp_c5_1._m0[25].y, _154 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_213, fp_c5_1._m0[28].w, fma(_188, fp_c5_1._m0[28].z, fma(_207, fp_c5_1._m0[28].y, _198 * fp_c5_1._m0[28].x))))) * fma(_246, -_242, _246));
    float _264 = fma(_178.z, fma(_250, _172, _174), max(0.0, fma(_215, fp_c5_1._m0[31].z, (fma(_158, fp_c5_1._m0[27].z, fma(_156, fp_c5_1._m0[27].y, _154 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_213, fp_c5_1._m0[30].w, fma(_188, fp_c5_1._m0[30].z, fma(_207, fp_c5_1._m0[30].y, _198 * fp_c5_1._m0[30].x))))) * fma(_248, -_250, _248));
    float _266 = clamp(texture(fp_tex_tcb_18, vec2(_84, _86)).x + (-0.0), 0.0, 1.0);
    int _268 = floatBitsToInt(_230);
    float _270 = _260;
    float _272 = _264;
    float _274 = _262;
    float _276 = _148;
    float _278 = _260;
    float _280 = _262;
    float _282 = _264;
    if (floatBitsToInt(_230) != (-1))
    {
        int _284 = 0;
        float _288;
        float _290;
        float _292;
        int _378;
        do
        {
            int _286 = _268 & 255;
            _288 = _274;
            _290 = _270;
            _292 = _272;
            _296 = uint(_286) >= 30u;
            if (_296)
            {
                break;
            }
            int _298 = _286 << 4;
            uint _300 = uint(int(uint(_298 + 7360) >> uint(2)));
            int _302 = int(_300) + 1;
            uint _304 = uint(int(uint(_298 + 7368) >> uint(2)));
            float _306 = (-_182) + fp_c10_1._m0[int(uint(int(_300)) >> uint(2))][int(_300) & 3];
            float _308 = fp_c10_1._m0[int(uint(_302) >> uint(2))][_302 & 3] + (-_74.y);
            float _310 = (-_184) + fp_c10_1._m0[int(uint(int(_304)) >> uint(2))][int(_304) & 3];
            float _312 = fma(_310, _310, fma(_308, _308, _306 * _306));
            float _314 = _306 * inversesqrt(_312);
            float _316 = _308 * inversesqrt(_312);
            float _318 = _310 * inversesqrt(_312);
            float _320 = _144 + _314;
            float _322 = _152 + _316;
            float _324 = _148 + _318;
            uint _326 = uint(int(uint(_298 + 6880) >> uint(2)));
            int _328 = int(_326) + 1;
            float _330 = inversesqrt(fma(_324, _324, fma(_322, _322, _320 * _320)));
            float _332 = _320 * _330;
            float _334 = _322 * _330;
            float _336 = _324 * _330;
            uint _338 = uint(int(uint(_298 + 8320) >> uint(2)));
            uint _340 = uint(int(uint(_298 + 6408) >> uint(2)));
            float _342 = fma(_158, _318, fma(_156, _316, _154 * _314));
            float _344 = max(fma(_148, _336, fma(_152, _334, _144 * _332)), fp_c1_1._m0[0].y);
            float _346 = max(fma(_158, _336, fma(_156, _334, _154 * _332)), fp_c1_1._m0[0].y) * max(fma(_158, _336, fma(_156, _334, _154 * _332)), fp_c1_1._m0[0].y);
            float _348 = max(_342, fp_c1_1._m0[0].y);
            float _350 = exp2(_344 * fma(_344, fp_c1_1._m0[0].z, -6.9831600189208984375));
            uint _352 = uint(int(uint(_298 + 6400) >> uint(2)));
            int _354 = int(_352) + 1;
            bool _356 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3]) != 0;
            float _358 = (_238 * (1.0 / (_192 + fma(_192, -_348, _348)))) * ((_217 * (1.0 / max(fma(_223, _346, -_346) + 1.0, fp_c1_1._m0[0].y))) * (_217 * (1.0 / max(fma(_223, _346, -_346) + 1.0, fp_c1_1._m0[0].y))));
            float _360 = _240 + fma(_240, -_350, _350);
            float _362 = _360;
            if (!_356)
            {
                _362 = 1.0;
            }
            float _364 = _362;
            if (_356)
            {
                uint _366 = uint(int(uint(_298 + 7840) >> uint(2)));
                int _368 = int(_366) + 1;
                uint _370 = uint(int(uint(_298 + 6888) >> uint(2)));
                float _372 = fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3];
                int _374 = int(_370) + 1;
                uint _376 = uint(int(uint(_298 + 7848) >> uint(2)));
                _364 = exp2(fp_c10_1._m0[int(uint(_374) >> uint(2))][_374 & 3] * log2(clamp(((-_372) + fma(_318, -fp_c10_1._m0[int(uint(int(_376)) >> uint(2))][int(_376) & 3], fma(_316, -fp_c10_1._m0[int(uint(_368) >> uint(2))][_368 & 3], _314 * (-fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3])))) * (1.0 / ((-_372) + 1.0)), 0.0, 1.0)));
            }
            _378 = _284 + 1;
            float _380 = (exp2(fp_c10_1._m0[int(uint(_328) >> uint(2))][_328 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_326)) >> uint(2))][int(_326) & 3], -sqrt(_312), fp_c1_1._m0[1].x), 0.0, 1.0))) * _364) * clamp(_342 + (-0.0), 0.0, 1.0);
            float _382 = fma(fp_c10_1._m0[int(uint(_354) >> uint(2))][_354 & 3] * _380, fma(_244, fp_c1_1._m0[1].y, (_360 * _358) * 0.079577468335628509521484375), _270);
            float _384 = fma(fp_c10_1._m0[int(uint(int(_340)) >> uint(2))][int(_340) & 3] * _380, fma(_248, fp_c1_1._m0[1].y, ((_250 + fma(_250, -_350, _350)) * _358) * 0.079577468335628509521484375), _272);
            float _386 = fma(fp_c10_1._m0[int(uint(int(_352)) >> uint(2))][int(_352) & 3] * _380, fma(_246, fp_c1_1._m0[1].y, ((_242 + fma(_242, -_350, _350)) * _358) * 0.079577468335628509521484375), _274);
            _268 = int(uint(_268) >> uint(8));
            _284 = _378;
            _270 = _382;
            _272 = _384;
            _274 = _386;
            _288 = _386;
            _290 = _382;
            _292 = _384;
        } while (!(_378 >= 4));
        _296 = false;
        _278 = _290;
        _280 = _288;
        _282 = _292;
        if ((_268 & 255) == 30)
        {
            float _388 = _74.y;
            float _390 = 1.0 / (fma(_184, fp_c10_1._m0[565].z, fma(_388, fp_c10_1._m0[565].y, _182 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _392 = 1.0 / fp_c10_1._m0[561].y;
            float _394 = (-_182) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_392, fp_c10_1._m0[557].x);
            float _396 = (-_184) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_392, fp_c10_1._m0[557].z);
            float _398 = _394 * _394;
            float _400 = sqrt(fma(_396, _396, _398)) * (-fp_c10_1._m0[558].y);
            float _402 = inversesqrt(fma(_396, _396, fma(_400, _400, _398)));
            float _404 = _394 * _402;
            float _406 = _400 * _402;
            float _408 = _396 * _402;
            float _410 = _184 + (-fp_c10_1._m0[557].z);
            float _412 = _144 + _404;
            float _414 = _152 + _406;
            float _416 = _148 + _408;
            float _418 = _410 * fp_c10_1._m0[558].x;
            float _420 = _182 + (-fp_c10_1._m0[557].x);
            float _422 = _420 * fp_c10_1._m0[558].z;
            float _424 = inversesqrt(fma(_416, _416, fma(_414, _414, _412 * _412)));
            float _426 = _412 * _424;
            float _428 = _414 * _424;
            float _430 = _416 * _424;
            float _432 = fma(_410, _410, _420 * _420);
            float _434 = ((-float(_418 < _422)) + float(_418 > _422)) * fp_c10_1._m0[561].y;
            float _436 = inversesqrt(fma(_408, _408, _404 * _404));
            float _438 = fma(_158, _408, fma(_156, _406, _154 * _404));
            float _440 = fma(_410, fp_c10_1._m0[558].z, _420 * fp_c10_1._m0[558].x);
            float _442 = _404 * _436;
            bool _444 = _440 > 0.0;
            float _446 = max(fma(_158, _430, fma(_156, _428, _154 * _426)), fp_c1_1._m0[0].y) * max(fma(_158, _430, fma(_156, _428, _154 * _426)), fp_c1_1._m0[0].y);
            float _448 = _442;
            if (_444)
            {
                _448 = sqrt(_432);
            }
            float _450 = _448;
            if (!_444)
            {
                _450 = 1.0;
            }
            float _452 = max(fma(_148, _430, fma(_152, _428, _144 * _426)), fp_c1_1._m0[0].y);
            float _454 = max(_438, fp_c1_1._m0[0].y);
            bool _456 = fma(_410 * inversesqrt(_432), fp_c10_1._m0[558].z, (_420 * inversesqrt(_432)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _458 = clamp(fma(_440 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_440 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _460 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_420, fma(_434, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_410 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_434 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_420, fma(_434, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_410 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_434 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            if (!_456)
            {
                _276 = 1.0;
            }
            float _462 = _276;
            if (_456)
            {
                _462 = fma(_460, -_460, fp_c1_1._m0[1].x) * fma(_460, -_460, fp_c1_1._m0[1].x);
            }
            float _464 = exp2(_452 * fma(_452, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _466 = (_238 * (1.0 / (_192 + fma(_192, -_454, _454)))) * ((_217 * (1.0 / max(fma(_223, _446, -_446) + 1.0, fp_c1_1._m0[0].y))) * (_217 * (1.0 / max(fma(_223, _446, -_446) + 1.0, fp_c1_1._m0[0].y))));
            float _468 = (min(fma(_458, -_458, fp_c1_1._m0[1].x) * fma(_458, -_458, fp_c1_1._m0[1].x), _462) * (exp2(log2(clamp(fma(_450, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_408 * _436, -fp_c10_1._m0[558].z, _442 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_438 + (-0.0), 0.0, 1.0);
            float _470 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_184, fp_c10_1._m0[562].z, fma(_388, fp_c10_1._m0[562].y, _182 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _390, 0.5, 0.5), (-fma((fma(_184, fp_c10_1._m0[563].z, fma(_388, fp_c10_1._m0[563].y, _182 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _390, 0.5, 0.5)) + 1.0)).z > fma((fma(_184, fp_c10_1._m0[564].z, fma(_388, fp_c10_1._m0[564].y, _182 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _390, 0.5, 0.5)) || (_440 <= 0.0));
            _278 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _468) * fma(_244, fp_c1_1._m0[1].y, ((_240 + fma(_240, -_464, _464)) * _466) * 0.079577468335628509521484375), _470, _290);
            _280 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _468) * fma(_246, fp_c1_1._m0[1].y, ((_242 + fma(_242, -_464, _464)) * _466) * 0.079577468335628509521484375), _470, _288);
            _282 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _468) * fma(_248, fp_c1_1._m0[1].y, ((_250 + fma(_250, -_464, _464)) * _466) * 0.079577468335628509521484375), _470, _292);
        }
    }
    float _472 = _182 + (-fp_c3_1._m0[11].w);
    float _474 = _74.y;
    float _476 = _184 + (-fp_c3_1._m0[13].w);
    float _478 = fma(_180.y * _254, fp_c6_1._m0[11].x, fma(_266, _278, _258 * (fma(_252 * (_240 + fma(_240, -_234, _234)), fp_c1_1._m0[0].w, _244 * 0.3183098733425140380859375) * (_256 * fp_c5_1._m0[5].y))));
    float _480 = _474 + (-fp_c3_1._m0[12].w);
    float _482 = fma(_476, _476, fma(_480, _480, _472 * _472));
    float _484 = fma(_180.x * _254, fp_c6_1._m0[11].x, fma(_266, _280, _258 * (fma(_252 * (_242 + fma(_242, -_234, _234)), fp_c1_1._m0[0].w, _246 * 0.3183098733425140380859375) * (_256 * fp_c5_1._m0[5].x))));
    float _486 = clamp(fma(_266 * _258, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _488 = fma(_180.z * _254, fp_c6_1._m0[11].x, fma(_266, _282, _258 * (fma(_252 * (_250 + fma(_250, -_234, _234)), fp_c1_1._m0[0].w, _248 * 0.3183098733425140380859375) * (_256 * fp_c5_1._m0[5].z))));
    float _490 = exp2(log2(clamp(sqrt(_482) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_476 * inversesqrt(_482), fp_c5_1._m0[23].z, fma(_480 * inversesqrt(_482), fp_c5_1._m0[23].y, (_472 * inversesqrt(_482)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _492 = clamp(fma(fma(_184, fp_c5_1._m0[14].z, fma(_474, fp_c5_1._m0[14].y, _182 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _494 = fma((-_484) + fp_c5_1._m0[13].x, _492, _484);
    float _496 = fma((-_478) + fp_c5_1._m0[13].y, _492, _478);
    float _498 = fma((-_488) + fp_c5_1._m0[13].z, _492, _488);
    float _500 = clamp((-exp2((clamp(fma(sqrt(_482), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _77.x = fma((-_494) + fma(fma((_490 * fp_c7_1._m0[55].x) * _486, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _500, _494);
    _77.y = fma((-_496) + fma(fma((_490 * fp_c7_1._m0[55].y) * _486, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _500, _496);
    _77.z = fma((-_498) + fma(fma((_490 * fp_c7_1._m0[55].z) * _486, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _500, _498);
    _77.w = 1.0;
}


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
    bool _290 = false;
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
    float _130 = fma(_124, _128, fma(_94, _108, _96 * (fma(_126, _106, -(_122 * _104)) * _110)));
    float _132 = fma(_126, _128, fma(_94, _104, _96 * (fma(_122, _108, -(_124 * _106)) * _110)));
    float _134 = fma(_122, _128, fma(_94, _106, _96 * (fma(_124, _104, -(_126 * _108)) * _110)));
    float _136 = inversesqrt(fma(_116, _116, fma(_114, _114, _112 * _112)));
    float _138 = _112 * (-_136);
    float _140 = inversesqrt(fma(_134, _134, fma(_132, _132, _130 * _130)));
    float _142 = _114 * (-_136);
    float _144 = max(texture(fp_tex_tcb_10, vec2(_86, _88)).x, fp_c1_1._m0[0].x);
    float _146 = 1.0 / _74.w;
    float _148 = _130 * _140;
    float _150 = _132 * _140;
    float _152 = _134 * _140;
    float _154 = _116 * (-_136);
    float _156 = fma(_152, _154, fma(_150, _142, _148 * _138));
    float _158 = max(_156, fp_c1_1._m0[0].y);
    float _160 = fma(_148 * (-_156), -2.0, -_138);
    float _162 = fma(_150 * (-_156), -2.0, -_142);
    float _164 = fma(_152 * (-_156), -2.0, -_154);
    float _166 = 1.0 / max(abs(_164), max(abs(_160), abs(_162)));
    vec2 _168 = texture(fp_tex_tcb_2A, vec2(fma(_74.x * _146, 0.5, 0.5), fma(_74.y * _146, -0.5, 0.5))).xy;
    float _170 = texture(fp_tex_tcb_12, vec2(_86, _88)).x;
    vec3 _174 = texture(fp_tex_tcb_A, vec2(_86, _88)).xyz;
    vec2 _176 = texture(fp_tex_tcb_38, vec2(_158, (-_144) + (-0.0))).xy;
    float _178 = _176.x;
    float _180 = _176.y;
    vec3 _182 = texture(fp_tex_tcb_36, vec4(_160 * _166, _162 * _166, _164 * _166, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_144 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _184 = _76.z;
    float _186 = _76.x;
    float _188 = _138 + (-fp_c5_1._m0[23].x);
    float _190 = _154 + (-fp_c5_1._m0[23].z);
    float _192 = _142 + (-fp_c5_1._m0[23].y);
    float _194 = inversesqrt(fma(_190, _190, fma(_192, _192, _188 * _188)));
    int _197 = max(0, min(int(trunc((_184 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _199 = _188 * _194;
    float _201 = _148 * _150;
    float _203 = _192 * _194;
    float _205 = _190 * _194;
    float _207 = _152 * _152;
    float _209 = _150 * _152;
    float _211 = max(fma(_152, _205, fma(_150, _203, _148 * _199)), fp_c1_1._m0[0].y) * max(fma(_152, _205, fma(_150, _203, _148 * _199)), fp_c1_1._m0[0].y);
    float _213 = _148 * _152;
    float _215 = _144 * _144;
    float _217 = fma(_150, -fp_c5_1._m0[23].y, _148 * (-fp_c5_1._m0[23].x));
    float _219 = fma(_144, 0.5, 0.5);
    float _221 = max(fma(_154, _205, fma(_142, _203, _138 * _199)), fp_c1_1._m0[0].y);
    float _223 = (_219 * 0.5) * _219;
    uint _226 = uint(int(uint((((int(uint(_197) >> uint(16)) * 20) << 16) + (((_197 & 65535) * 20) + max(0, min(int(trunc((_186 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _228 = fp_c10_1._m0[int(uint(int(_226)) >> uint(2))][int(_226) & 3];
    float _230 = max(fma(_152, -fp_c5_1._m0[23].z, _217), fp_c1_1._m0[0].y);
    float _232 = fma(_174.y, -_170, _174.y);
    float _234 = fma(_148, _148, -(_150 * _150));
    float _236 = 1.0 / (_223 + fma(_158, -_223, _158));
    float _238 = exp2(_221 * fma(_221, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _240 = clamp(fma(_152, -fp_c5_1._m0[23].z, _217), 0.0, 1.0);
    float _242 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].x;
    float _244 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].y;
    float _246 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].z;
    float _248 = clamp(texture(fp_tex_tcb_18, vec2(_86, _88)).x + (-0.0), 0.0, 1.0);
    float _250 = clamp((-fma(max((-_168.x) + 1.0, (-_168.y) + 1.0), clamp(_76.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_72.x * gl_FragCoord.w) * _118, (_72.y * gl_FragCoord.w) * _118)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _252 = (_236 * (1.0 / (_223 + fma(_223, -_230, _230)))) * ((_215 * (1.0 / max(fma(_211, _215 * _215, -_211) + 1.0, fp_c1_1._m0[0].y))) * (_215 * (1.0 / max(fma(_211, _215 * _215, -_211) + 1.0, fp_c1_1._m0[0].y))));
    float _254 = fma(_174.x, -_170, _174.x);
    float _256 = fma(_174.z, -_170, _174.z);
    float _258 = fma(_182.x, fma(_242, _178, _180), max(0.0, fma(_234, fp_c5_1._m0[31].x, (fma(_152, fp_c5_1._m0[25].z, fma(_150, fp_c5_1._m0[25].y, _148 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_213, fp_c5_1._m0[28].w, fma(_207, fp_c5_1._m0[28].z, fma(_209, fp_c5_1._m0[28].y, _201 * fp_c5_1._m0[28].x))))) * fma(_254, -_242, _254));
    float _260 = fma(_182.y, fma(_244, _178, _180), max(0.0, fma(_234, fp_c5_1._m0[31].y, (fma(_152, fp_c5_1._m0[26].z, fma(_150, fp_c5_1._m0[26].y, _148 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_213, fp_c5_1._m0[29].w, fma(_207, fp_c5_1._m0[29].z, fma(_209, fp_c5_1._m0[29].y, _201 * fp_c5_1._m0[29].x))))) * fma(_232, -_244, _232));
    float _262 = fma(_182.z, fma(_246, _178, _180), max(0.0, fma(_234, fp_c5_1._m0[31].z, (fma(_152, fp_c5_1._m0[27].z, fma(_150, fp_c5_1._m0[27].y, _148 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_213, fp_c5_1._m0[30].w, fma(_207, fp_c5_1._m0[30].z, fma(_209, fp_c5_1._m0[30].y, _201 * fp_c5_1._m0[30].x))))) * fma(_256, -_246, _256));
    int _264 = floatBitsToInt(_228);
    float _266 = _260;
    float _268 = _262;
    float _270 = _258;
    float _272 = _258;
    float _274 = _260;
    float _276 = _262;
    if (floatBitsToInt(_228) != (-1))
    {
        int _278 = 0;
        float _282;
        float _284;
        float _286;
        int _372;
        do
        {
            int _280 = _264 & 255;
            _282 = _270;
            _284 = _266;
            _286 = _268;
            _290 = uint(_280) >= 30u;
            if (_290)
            {
                break;
            }
            int _292 = _280 << 4;
            uint _294 = uint(int(uint(_292 + 7360) >> uint(2)));
            int _296 = int(_294) + 1;
            uint _298 = uint(int(uint(_292 + 7368) >> uint(2)));
            float _300 = (-_186) + fp_c10_1._m0[int(uint(int(_294)) >> uint(2))][int(_294) & 3];
            float _302 = fp_c10_1._m0[int(uint(_296) >> uint(2))][_296 & 3] + (-_76.y);
            float _304 = (-_184) + fp_c10_1._m0[int(uint(int(_298)) >> uint(2))][int(_298) & 3];
            float _306 = fma(_304, _304, fma(_302, _302, _300 * _300));
            float _308 = _300 * inversesqrt(_306);
            float _310 = _302 * inversesqrt(_306);
            float _312 = _304 * inversesqrt(_306);
            float _314 = _138 + _308;
            float _316 = _142 + _310;
            float _318 = _154 + _312;
            uint _320 = uint(int(uint(_292 + 6880) >> uint(2)));
            int _322 = int(_320) + 1;
            float _324 = inversesqrt(fma(_318, _318, fma(_316, _316, _314 * _314)));
            float _326 = _314 * _324;
            float _328 = _316 * _324;
            float _330 = _318 * _324;
            uint _332 = uint(int(uint(_292 + 8320) >> uint(2)));
            float _334 = max(fma(_154, _330, fma(_142, _328, _138 * _326)), fp_c1_1._m0[0].y);
            float _336 = fma(_152, _312, fma(_150, _310, _148 * _308));
            float _338 = max(fma(_152, _330, fma(_150, _328, _148 * _326)), fp_c1_1._m0[0].y) * max(fma(_152, _330, fma(_150, _328, _148 * _326)), fp_c1_1._m0[0].y);
            float _340 = max(_336, fp_c1_1._m0[0].y);
            float _342 = fp_c10_1._m0[int(uint(_322) >> uint(2))][_322 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_320)) >> uint(2))][int(_320) & 3], -sqrt(_306), fp_c1_1._m0[1].x), 0.0, 1.0));
            uint _344 = uint(int(uint(_292 + 6400) >> uint(2)));
            int _346 = int(_344) + 1;
            uint _348 = uint(int(uint(_292 + 6408) >> uint(2)));
            float _350 = exp2(_334 * fma(_334, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _352 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_332)) >> uint(2))][int(_332) & 3]) != 0;
            float _354 = (_236 * (1.0 / (_223 + fma(_223, -_340, _340)))) * ((_215 * (1.0 / max(fma(_215 * _215, _338, -_338) + 1.0, fp_c1_1._m0[0].y))) * (_215 * (1.0 / max(fma(_215 * _215, _338, -_338) + 1.0, fp_c1_1._m0[0].y))));
            float _356 = _342;
            if (!_352)
            {
                _356 = 1.0;
            }
            float _358 = _356;
            if (_352)
            {
                uint _360 = uint(int(uint(_292 + 7840) >> uint(2)));
                int _362 = int(_360) + 1;
                uint _364 = uint(int(uint(_292 + 7848) >> uint(2)));
                uint _366 = uint(int(uint(_292 + 6888) >> uint(2)));
                float _368 = fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3];
                int _370 = int(_366) + 1;
                _358 = exp2(fp_c10_1._m0[int(uint(_370) >> uint(2))][_370 & 3] * log2(clamp(((-_368) + fma(_312, -fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3], fma(_310, -fp_c10_1._m0[int(uint(_362) >> uint(2))][_362 & 3], _308 * (-fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3])))) * (1.0 / ((-_368) + 1.0)), 0.0, 1.0)));
            }
            _372 = _278 + 1;
            float _374 = (exp2(_342) * _358) * clamp(_336 + (-0.0), 0.0, 1.0);
            float _376 = fma(fp_c10_1._m0[int(uint(_346) >> uint(2))][_346 & 3] * _374, fma(_232, fp_c1_1._m0[1].y, ((_244 + fma(_244, -_350, _350)) * _354) * 0.079577468335628509521484375), _266);
            float _378 = fma(fp_c10_1._m0[int(uint(int(_348)) >> uint(2))][int(_348) & 3] * _374, fma(_256, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_350, _350)) * _354) * 0.079577468335628509521484375), _268);
            float _380 = fma(fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3] * _374, fma(_254, fp_c1_1._m0[1].y, ((_242 + fma(_242, -_350, _350)) * _354) * 0.079577468335628509521484375), _270);
            _264 = int(uint(_264) >> uint(8));
            _278 = _372;
            _266 = _376;
            _268 = _378;
            _270 = _380;
            _282 = _380;
            _284 = _376;
            _286 = _378;
        } while (!(_372 >= 4));
        _290 = false;
        _272 = _282;
        _274 = _284;
        _276 = _286;
        if ((_264 & 255) == 30)
        {
            float _382 = _76.y;
            float _384 = 1.0 / (fma(_184, fp_c10_1._m0[565].z, fma(_382, fp_c10_1._m0[565].y, _186 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _386 = 1.0 / fp_c10_1._m0[561].y;
            float _388 = _186 + (-fp_c10_1._m0[557].x);
            float _390 = _388 * fp_c10_1._m0[558].z;
            float _392 = (-_186) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_386, fp_c10_1._m0[557].x);
            float _394 = (-_184) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_386, fp_c10_1._m0[557].z);
            float _396 = _392 * _392;
            float _398 = sqrt(fma(_394, _394, _396)) * (-fp_c10_1._m0[558].y);
            float _400 = inversesqrt(fma(_394, _394, fma(_398, _398, _396)));
            float _402 = _184 + (-fp_c10_1._m0[557].z);
            float _404 = _402 * fp_c10_1._m0[558].x;
            float _406 = _392 * _400;
            float _408 = _398 * _400;
            float _410 = _394 * _400;
            float _412 = _138 + _406;
            float _414 = _142 + _408;
            float _416 = _154 + _410;
            float _418 = ((-float(_404 < _390)) + float(_404 > _390)) * fp_c10_1._m0[561].y;
            float _420 = fma(_152, _410, fma(_150, _408, _148 * _406));
            float _422 = inversesqrt(fma(_416, _416, fma(_414, _414, _412 * _412)));
            float _424 = _412 * _422;
            float _426 = _414 * _422;
            float _428 = _416 * _422;
            float _430 = fma(_402, _402, _388 * _388);
            float _432 = max(fma(_154, _428, fma(_142, _426, _138 * _424)), fp_c1_1._m0[0].y);
            float _434 = fma(_402, fp_c10_1._m0[558].z, _388 * fp_c10_1._m0[558].x);
            float _436 = max(fma(_152, _428, fma(_150, _426, _148 * _424)), fp_c1_1._m0[0].y) * max(fma(_152, _428, fma(_150, _426, _148 * _424)), fp_c1_1._m0[0].y);
            bool _438 = _434 > 0.0;
            float _440 = inversesqrt(fma(_410, _410, _406 * _406));
            float _442 = _406;
            if (_438)
            {
                _442 = sqrt(_430);
            }
            float _444 = exp2(_432 * fma(_432, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _446 = _442;
            if (!_438)
            {
                _446 = 1.0;
            }
            bool _448 = fma(_402 * inversesqrt(_430), fp_c10_1._m0[558].z, (_388 * inversesqrt(_430)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _450 = clamp(fma(_434 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_434 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _452 = max(_420, fp_c1_1._m0[0].y);
            float _454 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_388, fma(_418, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_402 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_418 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_388, fma(_418, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_402 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_418 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _456 = log2(clamp((fma(_410 * _440, -fp_c10_1._m0[558].z, (_406 * _440) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _458 = _456;
            if (_448)
            {
                _458 = fma(_454, -_454, fp_c1_1._m0[1].x) * fma(_454, -_454, fp_c1_1._m0[1].x);
            }
            float _460 = _458;
            if (!_448)
            {
                _460 = 1.0;
            }
            float _462 = (_236 * (1.0 / (_223 + fma(_223, -_452, _452)))) * ((_215 * (1.0 / max(fma(_215 * _215, _436, -_436) + 1.0, fp_c1_1._m0[0].y))) * (_215 * (1.0 / max(fma(_215 * _215, _436, -_436) + 1.0, fp_c1_1._m0[0].y))));
            float _464 = (min(fma(_450, -_450, fp_c1_1._m0[1].x) * fma(_450, -_450, fp_c1_1._m0[1].x), _460) * (exp2(log2(clamp(fma(_446, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_456))) * clamp(_420 + (-0.0), 0.0, 1.0);
            float _466 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_184, fp_c10_1._m0[562].z, fma(_382, fp_c10_1._m0[562].y, _186 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _384, 0.5, 0.5), (-fma((fma(_184, fp_c10_1._m0[563].z, fma(_382, fp_c10_1._m0[563].y, _186 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _384, 0.5, 0.5)) + 1.0)).z > fma((fma(_184, fp_c10_1._m0[564].z, fma(_382, fp_c10_1._m0[564].y, _186 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _384, 0.5, 0.5)) || (_434 <= 0.0));
            _272 = fma(fma(_254, fp_c1_1._m0[1].y, ((_242 + fma(_242, -_444, _444)) * _462) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _464), _466, _282);
            _274 = fma(fma(_232, fp_c1_1._m0[1].y, ((_244 + fma(_244, -_444, _444)) * _462) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _464), _466, _284);
            _276 = fma(fma(_256, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_444, _444)) * _462) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _464), _466, _286);
        }
    }
    float _468 = _186 + (-fp_c3_1._m0[11].w);
    float _470 = _76.y;
    float _472 = _184 + (-fp_c3_1._m0[13].w);
    float _474 = _470 + (-fp_c3_1._m0[12].w);
    float _476 = fma(_472, _472, fma(_474, _474, _468 * _468));
    float _478 = fma(_248, _272, _250 * (fma(_252 * (_242 + fma(_242, -_238, _238)), fp_c1_1._m0[0].w, _254 * 0.3183098733425140380859375) * (_240 * fp_c5_1._m0[5].x)));
    float _480 = fma(_248, _274, _250 * (fma(_252 * (_244 + fma(_244, -_238, _238)), fp_c1_1._m0[0].w, _232 * 0.3183098733425140380859375) * (_240 * fp_c5_1._m0[5].y)));
    float _482 = fma(_248, _276, _250 * (fma(_252 * (_246 + fma(_246, -_238, _238)), fp_c1_1._m0[0].w, _256 * 0.3183098733425140380859375) * (_240 * fp_c5_1._m0[5].z)));
    float _484 = clamp(fma(fma(_184, fp_c5_1._m0[14].z, fma(_470, fp_c5_1._m0[14].y, _186 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _486 = exp2(log2(clamp(sqrt(_476) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_472 * inversesqrt(_476), fp_c5_1._m0[23].z, fma(_474 * inversesqrt(_476), fp_c5_1._m0[23].y, (_468 * inversesqrt(_476)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _488 = clamp(fma(_248 * _250, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _490 = fma((-_478) + fp_c5_1._m0[13].x, _484, _478);
    float _492 = fma((-_482) + fp_c5_1._m0[13].z, _484, _482);
    float _494 = fma((-_480) + fp_c5_1._m0[13].y, _484, _480);
    float _496 = clamp((-exp2((clamp(fma(sqrt(_476), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_490) + fma(fma((_486 * fp_c7_1._m0[55].x) * _488, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _496, _490);
    _79.y = fma((-_494) + fma(fma((_486 * fp_c7_1._m0[55].y) * _488, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _496, _494);
    _79.z = fma((-_492) + fma(fma((_486 * fp_c7_1._m0[55].z) * _488, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _496, _492);
    _79.w = 1.0;
}


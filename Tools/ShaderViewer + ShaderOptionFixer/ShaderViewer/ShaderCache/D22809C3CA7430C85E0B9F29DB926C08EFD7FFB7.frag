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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

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
    bool _296 = false;
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
    float _112 = _70.y;
    float _114 = _70.z;
    float _116 = 1.0 / (_72.z * gl_FragCoord.w);
    float _118 = inversesqrt(fma(_102, _102, fma(_100, _100, _98 * _98)));
    float _120 = _102 * _118;
    float _122 = _98 * _118;
    float _124 = _100 * _118;
    float _126 = _70.x;
    float _128 = sqrt(clamp((-fma(_94, _94, _96 * _96)) + 1.0, 0.0, 1.0));
    float _130 = fma(_122, _128, fma(_94, _108, _96 * (fma(_124, _106, -(_120 * _104)) * _110)));
    float _132 = fma(_124, _128, fma(_94, _104, _96 * (fma(_120, _108, -(_122 * _106)) * _110)));
    float _134 = fma(_120, _128, fma(_94, _106, _96 * (fma(_122, _104, -(_124 * _108)) * _110)));
    float _136 = inversesqrt(fma(_114, _114, fma(_112, _112, _126 * _126)));
    float _138 = _126 * (-_136);
    float _140 = inversesqrt(fma(_134, _134, fma(_132, _132, _130 * _130)));
    float _142 = _112 * (-_136);
    float _144 = max(texture(fp_tex_tcb_10, vec2(_86, _88)).x, fp_c1_1._m0[0].x);
    float _146 = 1.0 / _74.w;
    float _148 = _130 * _140;
    float _150 = _132 * _140;
    float _152 = _134 * _140;
    float _154 = _114 * (-_136);
    float _156 = fma(_152, _154, fma(_150, _142, _148 * _138));
    float _158 = max(_156, fp_c1_1._m0[0].z);
    float _160 = fma(_148 * (-_156), -2.0, -_138);
    float _162 = fma(_150 * (-_156), -2.0, -_142);
    float _164 = fma(_152 * (-_156), -2.0, -_154);
    float _166 = 1.0 / max(abs(_164), max(abs(_160), abs(_162)));
    vec2 _168 = texture(fp_tex_tcb_2A, vec2(fma(_74.x * _146, 0.5, 0.5), fma(_74.y * _146, -0.5, 0.5))).xy;
    vec3 _172 = texture(fp_tex_tcb_A, vec2(_86, _88)).xyz;
    float _174 = _172.x;
    float _176 = _172.y;
    float _178 = _172.z;
    float _180 = texture(fp_tex_tcb_12, vec2(_86, _88)).x;
    vec2 _182 = texture(fp_tex_tcb_38, vec2(_158, (-_144) + (-0.0))).xy;
    float _184 = _182.x;
    float _186 = _182.y;
    vec3 _188 = texture(fp_tex_tcb_36, vec4(_160 * _166, _162 * _166, _164 * _166, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_144 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _190 = _138 + (-fp_c5_1._m0[23].x);
    float _192 = _142 + (-fp_c5_1._m0[23].y);
    float _194 = _76.x;
    float _196 = _154 + (-fp_c5_1._m0[23].z);
    float _198 = _148 * _150;
    float _200 = _76.z;
    float _202 = inversesqrt(fma(_196, _196, fma(_192, _192, _190 * _190)));
    float _204 = _190 * _202;
    float _206 = _192 * _202;
    float _208 = _150 * _152;
    float _210 = _196 * _202;
    float _212 = _152 * _152;
    float _214 = _148 * _152;
    float _216 = max(fma(_152, _210, fma(_150, _206, _148 * _204)), fp_c1_1._m0[0].z) * max(fma(_152, _210, fma(_150, _206, _148 * _204)), fp_c1_1._m0[0].z);
    int _219 = max(0, min(int(trunc((_200 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _221 = fma(_148, _148, -(_150 * _150));
    float _223 = fma(_150, -fp_c5_1._m0[23].y, _148 * (-fp_c5_1._m0[23].x));
    float _225 = _144 * _144;
    float _227 = fma(_144, 0.5, 0.5);
    float _229 = max(fma(_154, _210, fma(_142, _206, _138 * _204)), fp_c1_1._m0[0].z);
    float _231 = max(fma(_152, -fp_c5_1._m0[23].z, _223), fp_c1_1._m0[0].z);
    float _233 = (_227 * 0.5) * _227;
    float _235 = clamp(fma(_152, -fp_c5_1._m0[23].z, _223), 0.0, 1.0);
    uint _238 = uint(int(uint((((int(uint(_219) >> uint(16)) * 20) << 16) + (((_219 & 65535) * 20) + max(0, min(int(trunc((_194 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _240 = fp_c10_1._m0[int(uint(int(_238)) >> uint(2))][int(_238) & 3];
    float _242 = 1.0 / (_233 + fma(_158, -_233, _158));
    float _244 = fma(_174, -_180, _174);
    float _246 = clamp(texture(fp_tex_tcb_18, vec2(_86, _88)).x + (-0.0), 0.0, 1.0);
    float _248 = fma(_180, _174 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _250 = fma(_176, -_180, _176);
    float _252 = fma(_178, -_180, _178);
    float _254 = exp2(_229 * fma(_229, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _256 = clamp((-fma(max((-_168.x) + 1.0, (-_168.y) + 1.0), clamp(_76.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_72.x * gl_FragCoord.w) * _116, (_72.y * gl_FragCoord.w) * _116)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _258 = (_242 * (1.0 / (_233 + fma(_233, -_231, _231)))) * ((_225 * (1.0 / max(fma(_216, _225 * _225, -_216) + 1.0, fp_c1_1._m0[0].z))) * (_225 * (1.0 / max(fma(_216, _225 * _225, -_216) + 1.0, fp_c1_1._m0[0].z))));
    float _260 = fma(_180, _176 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _262 = fma(_180, _178 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _264 = fma(_188.x, fma(_248, _184, _186), max(0.0, fma(_221, fp_c5_1._m0[31].x, (fma(_152, fp_c5_1._m0[25].z, fma(_150, fp_c5_1._m0[25].y, _148 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_214, fp_c5_1._m0[28].w, fma(_212, fp_c5_1._m0[28].z, fma(_208, fp_c5_1._m0[28].y, _198 * fp_c5_1._m0[28].x))))) * fma(_248, -_244, _244));
    float _266 = fma(_188.y, fma(_260, _184, _186), max(0.0, fma(_221, fp_c5_1._m0[31].y, (fma(_152, fp_c5_1._m0[26].z, fma(_150, fp_c5_1._m0[26].y, _148 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_214, fp_c5_1._m0[29].w, fma(_212, fp_c5_1._m0[29].z, fma(_208, fp_c5_1._m0[29].y, _198 * fp_c5_1._m0[29].x))))) * fma(_260, -_250, _250));
    float _268 = fma(_188.z, fma(_262, _184, _186), max(0.0, fma(_221, fp_c5_1._m0[31].z, (fma(_152, fp_c5_1._m0[27].z, fma(_150, fp_c5_1._m0[27].y, _148 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_214, fp_c5_1._m0[30].w, fma(_212, fp_c5_1._m0[30].z, fma(_208, fp_c5_1._m0[30].y, _198 * fp_c5_1._m0[30].x))))) * fma(_262, -_252, _252));
    int _270 = floatBitsToInt(_240);
    float _272 = _266;
    float _274 = _268;
    float _276 = _264;
    float _278 = _266;
    float _280 = _264;
    float _282 = _268;
    if (floatBitsToInt(_240) != (-1))
    {
        int _284 = 0;
        float _288;
        float _290;
        float _292;
        int _378;
        do
        {
            int _286 = _270 & 255;
            _288 = _276;
            _290 = _272;
            _292 = _274;
            _296 = uint(_286) >= 30u;
            if (_296)
            {
                break;
            }
            int _298 = _286 << 4;
            uint _300 = uint(int(uint(_298 + 7360) >> uint(2)));
            int _302 = int(_300) + 1;
            uint _304 = uint(int(uint(_298 + 7368) >> uint(2)));
            float _306 = (-_194) + fp_c10_1._m0[int(uint(int(_300)) >> uint(2))][int(_300) & 3];
            float _308 = fp_c10_1._m0[int(uint(_302) >> uint(2))][_302 & 3] + (-_76.y);
            float _310 = (-_200) + fp_c10_1._m0[int(uint(int(_304)) >> uint(2))][int(_304) & 3];
            float _312 = fma(_310, _310, fma(_308, _308, _306 * _306));
            float _314 = _306 * inversesqrt(_312);
            float _316 = _308 * inversesqrt(_312);
            float _318 = _310 * inversesqrt(_312);
            float _320 = _138 + _314;
            float _322 = _142 + _316;
            float _324 = _154 + _318;
            uint _326 = uint(int(uint(_298 + 6880) >> uint(2)));
            int _328 = int(_326) + 1;
            float _330 = inversesqrt(fma(_324, _324, fma(_322, _322, _320 * _320)));
            float _332 = _320 * _330;
            float _334 = _322 * _330;
            float _336 = _324 * _330;
            uint _338 = uint(int(uint(_298 + 8320) >> uint(2)));
            float _340 = max(fma(_154, _336, fma(_142, _334, _138 * _332)), fp_c1_1._m0[0].z);
            float _342 = fma(_152, _318, fma(_150, _316, _148 * _314));
            float _344 = max(fma(_152, _336, fma(_150, _334, _148 * _332)), fp_c1_1._m0[0].z) * max(fma(_152, _336, fma(_150, _334, _148 * _332)), fp_c1_1._m0[0].z);
            float _346 = max(_342, fp_c1_1._m0[0].z);
            float _348 = fp_c10_1._m0[int(uint(_328) >> uint(2))][_328 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_326)) >> uint(2))][int(_326) & 3], -sqrt(_312), fp_c1_1._m0[1].y), 0.0, 1.0));
            uint _350 = uint(int(uint(_298 + 6400) >> uint(2)));
            int _352 = int(_350) + 1;
            uint _354 = uint(int(uint(_298 + 6408) >> uint(2)));
            float _356 = exp2(_340 * fma(_340, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _358 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3]) != 0;
            float _360 = (_242 * (1.0 / (_233 + fma(_233, -_346, _346)))) * ((_225 * (1.0 / max(fma(_225 * _225, _344, -_344) + 1.0, fp_c1_1._m0[0].z))) * (_225 * (1.0 / max(fma(_225 * _225, _344, -_344) + 1.0, fp_c1_1._m0[0].z))));
            float _362 = _348;
            if (!_358)
            {
                _362 = 1.0;
            }
            float _364 = _362;
            if (_358)
            {
                uint _366 = uint(int(uint(_298 + 7840) >> uint(2)));
                int _368 = int(_366) + 1;
                uint _370 = uint(int(uint(_298 + 7848) >> uint(2)));
                uint _372 = uint(int(uint(_298 + 6888) >> uint(2)));
                float _374 = fp_c10_1._m0[int(uint(int(_372)) >> uint(2))][int(_372) & 3];
                int _376 = int(_372) + 1;
                _364 = exp2(fp_c10_1._m0[int(uint(_376) >> uint(2))][_376 & 3] * log2(clamp(((-_374) + fma(_318, -fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3], fma(_316, -fp_c10_1._m0[int(uint(_368) >> uint(2))][_368 & 3], _314 * (-fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3])))) * (1.0 / ((-_374) + 1.0)), 0.0, 1.0)));
            }
            _378 = _284 + 1;
            float _380 = (exp2(_348) * _364) * clamp(_342 + (-0.0), 0.0, 1.0);
            float _382 = fma(fp_c10_1._m0[int(uint(_352) >> uint(2))][_352 & 3] * _380, fma(_250, fp_c1_1._m0[1].z, ((_260 + fma(_260, -_356, _356)) * _360) * 0.079577468335628509521484375), _272);
            float _384 = fma(fp_c10_1._m0[int(uint(int(_354)) >> uint(2))][int(_354) & 3] * _380, fma(_252, fp_c1_1._m0[1].z, ((_262 + fma(_262, -_356, _356)) * _360) * 0.079577468335628509521484375), _274);
            float _386 = fma(fp_c10_1._m0[int(uint(int(_350)) >> uint(2))][int(_350) & 3] * _380, fma(_244, fp_c1_1._m0[1].z, ((_248 + fma(_248, -_356, _356)) * _360) * 0.079577468335628509521484375), _276);
            _270 = int(uint(_270) >> uint(8));
            _284 = _378;
            _272 = _382;
            _274 = _384;
            _276 = _386;
            _288 = _386;
            _290 = _382;
            _292 = _384;
        } while (!(_378 >= 4));
        _296 = false;
        _278 = _290;
        _280 = _288;
        _282 = _292;
        if ((_270 & 255) == 30)
        {
            float _388 = _76.y;
            float _390 = 1.0 / (fma(_200, fp_c10_1._m0[565].z, fma(_388, fp_c10_1._m0[565].y, _194 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _392 = 1.0 / fp_c10_1._m0[561].y;
            float _394 = _194 + (-fp_c10_1._m0[557].x);
            float _396 = _394 * fp_c10_1._m0[558].z;
            float _398 = (-_194) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_392, fp_c10_1._m0[557].x);
            float _400 = (-_200) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_392, fp_c10_1._m0[557].z);
            float _402 = _398 * _398;
            float _404 = sqrt(fma(_400, _400, _402)) * (-fp_c10_1._m0[558].y);
            float _406 = inversesqrt(fma(_400, _400, fma(_404, _404, _402)));
            float _408 = _200 + (-fp_c10_1._m0[557].z);
            float _410 = _408 * fp_c10_1._m0[558].x;
            float _412 = _398 * _406;
            float _414 = _404 * _406;
            float _416 = _400 * _406;
            float _418 = _138 + _412;
            float _420 = _142 + _414;
            float _422 = _154 + _416;
            float _424 = ((-float(_410 < _396)) + float(_410 > _396)) * fp_c10_1._m0[561].y;
            float _426 = fma(_152, _416, fma(_150, _414, _148 * _412));
            float _428 = inversesqrt(fma(_422, _422, fma(_420, _420, _418 * _418)));
            float _430 = _418 * _428;
            float _432 = _420 * _428;
            float _434 = _422 * _428;
            float _436 = fma(_408, _408, _394 * _394);
            float _438 = max(fma(_154, _434, fma(_142, _432, _138 * _430)), fp_c1_1._m0[0].z);
            float _440 = fma(_408, fp_c10_1._m0[558].z, _394 * fp_c10_1._m0[558].x);
            float _442 = max(fma(_152, _434, fma(_150, _432, _148 * _430)), fp_c1_1._m0[0].z) * max(fma(_152, _434, fma(_150, _432, _148 * _430)), fp_c1_1._m0[0].z);
            bool _444 = _440 > 0.0;
            float _446 = inversesqrt(fma(_416, _416, _412 * _412));
            float _448 = _412;
            if (_444)
            {
                _448 = sqrt(_436);
            }
            float _450 = exp2(_438 * fma(_438, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _452 = _448;
            if (!_444)
            {
                _452 = 1.0;
            }
            bool _454 = fma(_408 * inversesqrt(_436), fp_c10_1._m0[558].z, (_394 * inversesqrt(_436)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _456 = clamp(fma(_440 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_440 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _458 = max(_426, fp_c1_1._m0[0].z);
            float _460 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_394, fma(_424, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_408 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_424 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_394, fma(_424, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_408 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_424 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _462 = log2(clamp((fma(_416 * _446, -fp_c10_1._m0[558].z, (_412 * _446) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _464 = _462;
            if (_454)
            {
                _464 = fma(_460, -_460, fp_c1_1._m0[1].y) * fma(_460, -_460, fp_c1_1._m0[1].y);
            }
            float _466 = _464;
            if (!_454)
            {
                _466 = 1.0;
            }
            float _468 = (_242 * (1.0 / (_233 + fma(_233, -_458, _458)))) * ((_225 * (1.0 / max(fma(_225 * _225, _442, -_442) + 1.0, fp_c1_1._m0[0].z))) * (_225 * (1.0 / max(fma(_225 * _225, _442, -_442) + 1.0, fp_c1_1._m0[0].z))));
            float _470 = (min(fma(_456, -_456, fp_c1_1._m0[1].y) * fma(_456, -_456, fp_c1_1._m0[1].y), _466) * (exp2(log2(clamp(fma(_452, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_462))) * clamp(_426 + (-0.0), 0.0, 1.0);
            float _472 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_200, fp_c10_1._m0[562].z, fma(_388, fp_c10_1._m0[562].y, _194 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _390, 0.5, 0.5), (-fma((fma(_200, fp_c10_1._m0[563].z, fma(_388, fp_c10_1._m0[563].y, _194 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _390, 0.5, 0.5)) + 1.0)).z > fma((fma(_200, fp_c10_1._m0[564].z, fma(_388, fp_c10_1._m0[564].y, _194 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _390, 0.5, 0.5)) || (_440 <= 0.0));
            _278 = fma(fma(_250, fp_c1_1._m0[1].z, ((_260 + fma(_260, -_450, _450)) * _468) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _470), _472, _290);
            _280 = fma(fma(_244, fp_c1_1._m0[1].z, ((_248 + fma(_248, -_450, _450)) * _468) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _470), _472, _288);
            _282 = fma(fma(_252, fp_c1_1._m0[1].z, ((_262 + fma(_262, -_450, _450)) * _468) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _470), _472, _292);
        }
    }
    float _474 = _194 + (-fp_c3_1._m0[11].w);
    float _476 = _76.y;
    float _478 = _200 + (-fp_c3_1._m0[13].w);
    float _480 = _476 + (-fp_c3_1._m0[12].w);
    float _482 = fma(_478, _478, fma(_480, _480, _474 * _474));
    float _484 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[12].x, fma(_246, _280, _256 * (fma(_258 * (_248 + fma(_248, -_254, _254)), fp_c1_1._m0[1].x, _244 * 0.3183098733425140380859375) * (_235 * fp_c5_1._m0[5].x))));
    float _486 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[12].y, fma(_246, _278, _256 * (fma(_258 * (_260 + fma(_260, -_254, _254)), fp_c1_1._m0[1].x, _250 * 0.3183098733425140380859375) * (_235 * fp_c5_1._m0[5].y))));
    float _488 = clamp(fma(_246 * _256, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _490 = clamp(fma(fma(_200, fp_c5_1._m0[14].z, fma(_476, fp_c5_1._m0[14].y, _194 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _492 = exp2(log2(clamp(sqrt(_482) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_478 * inversesqrt(_482), fp_c5_1._m0[23].z, fma(_480 * inversesqrt(_482), fp_c5_1._m0[23].y, (_474 * inversesqrt(_482)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _494 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[12].z, fma(_246, _282, _256 * (fma(_258 * (_262 + fma(_262, -_254, _254)), fp_c1_1._m0[1].x, _252 * 0.3183098733425140380859375) * (_235 * fp_c5_1._m0[5].z))));
    float _496 = fma((-_484) + fp_c5_1._m0[13].x, _490, _484);
    float _498 = fma((-_486) + fp_c5_1._m0[13].y, _490, _486);
    float _500 = fma((-_494) + fp_c5_1._m0[13].z, _490, _494);
    float _502 = clamp((-exp2((clamp(fma(sqrt(_482), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_496) + fma(fma((_492 * fp_c7_1._m0[55].x) * _488, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _502, _496);
    _79.y = fma((-_498) + fma(fma((_492 * fp_c7_1._m0[55].y) * _488, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _502, _498);
    _79.z = fma((-_500) + fma(fma((_492 * fp_c7_1._m0[55].z) * _488, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _502, _500);
    _79.w = 1.0;
}


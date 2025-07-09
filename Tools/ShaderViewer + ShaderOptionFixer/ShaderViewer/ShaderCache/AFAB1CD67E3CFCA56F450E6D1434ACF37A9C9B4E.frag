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
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_18;
layout(binding = 5) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 2) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 0) out vec4 _73;
layout(location = 5) in vec4 _75;
layout(location = 3) in vec4 _77;
uint _6[12];

void main()
{
    bool _330 = false;
    float _84 = texture(fp_tex_tcb_1C, vec2(_64.z, _64.w)).x;
    float _86 = _64.x;
    float _88 = _64.y;
    bool _92 = _84 <= 0.0;
    if (_92)
    {
        discard;
    }
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_86, _88)).xy;
    float _98 = _96.x;
    float _100 = _96.y;
    vec3 _104 = texture(fp_tex_tcb_A, vec2(_86, _88)).xyz;
    float _106 = _104.x;
    float _108 = _104.y;
    float _110 = _104.z;
    float _112 = texture(fp_tex_tcb_12, vec2(_86, _88)).x;
    float _114 = _66.x;
    float _116 = _66.y;
    float _118 = _66.z;
    float _120 = _68.y;
    float _122 = _68.z;
    float _124 = _68.x;
    float _126 = _68.w;
    float _128 = _70.x;
    float _130 = _70.y;
    float _132 = _70.z;
    float _134 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _136 = _118 * _134;
    float _138 = _114 * _134;
    float _140 = _116 * _134;
    float _142 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _144 = fma(_98, _120, _100 * (fma(_136, _124, -(_138 * _122)) * _126));
    int _147 = floatBitsToInt(_100);
    int _149 = floatBitsToInt(_144);
    if (_92)
    {
        _147 = 0;
    }
    float _151 = fma(_138, _142, fma(_98, _124, _100 * (fma(_140, _122, -(_136 * _120)) * _126)));
    float _153 = fma(_98, _122, _100 * (fma(_138, _120, -(_140 * _124)) * _126));
    float _155 = fma(_140, _142, _144);
    int _157 = floatBitsToInt(_153);
    if (_92)
    {
        _149 = 0;
    }
    float _159 = fma(_136, _142, _153);
    if (_92)
    {
        _157 = 0;
    }
    float _161 = inversesqrt(fma(_132, _132, fma(_130, _130, _128 * _128)));
    float _163 = fma(_155, _155, _151 * _151);
    int _165 = floatBitsToInt(_163);
    if (_92)
    {
        _165 = 0;
    }
    float _167 = inversesqrt(fma(_159, _159, _163));
    if (_92)
    {
        _73.x = intBitsToFloat(_165);
        _73.y = intBitsToFloat(_147);
        _73.z = intBitsToFloat(_157);
        _73.w = intBitsToFloat(_149);
        return;
    }
    float _169 = _128 * (-_161);
    float _171 = _151 * _167;
    float _173 = _130 * (-_161);
    float _175 = _155 * _167;
    float _177 = _159 * _167;
    float _179 = _132 * (-_161);
    float _181 = max(texture(fp_tex_tcb_10, vec2(_86, _88)).x, fp_c1_1._m0[0].x);
    float _183 = fma(_177, _179, fma(_175, _173, _171 * _169));
    float _185 = 1.0 / _75.w;
    float _187 = fma(_171 * (-_183), -2.0, -_169);
    float _189 = fma(_175 * (-_183), -2.0, -_173);
    float _191 = fma(_177 * (-_183), -2.0, -_179);
    float _193 = 1.0 / max(abs(_191), max(abs(_187), abs(_189)));
    float _195 = max(_183, fp_c1_1._m0[0].y);
    vec2 _197 = texture(fp_tex_tcb_38, vec2(_195, (-_181) + (-0.0))).xy;
    float _199 = _197.x;
    float _201 = _197.y;
    vec3 _203 = texture(fp_tex_tcb_36, vec4(_187 * _193, _189 * _193, _191 * _193, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_181 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _205 = clamp((-0.0) + fp_c6_1._m0[8].x, 0.0, 1.0);
    float _207 = _77.x;
    float _209 = fma(_181, 0.5, 0.5);
    float _211 = fma((-_106) + fp_c6_1._m0[93].x, _205, _106);
    float _213 = fma((-_108) + fp_c6_1._m0[93].y, _205, _108);
    float _215 = fma((-_110) + fp_c6_1._m0[93].z, _205, _110);
    float _217 = _77.z;
    float _219 = _169 + (-fp_c5_1._m0[23].x);
    float _221 = _179 + (-fp_c5_1._m0[23].z);
    float _223 = (_209 * 0.5) * _209;
    float _225 = clamp(texture(fp_tex_tcb_18, vec2(_86, _88)).x + (-0.0), 0.0, 1.0);
    float _227 = _173 + (-fp_c5_1._m0[23].y);
    float _229 = inversesqrt(fma(_221, _221, fma(_227, _227, _219 * _219)));
    float _231 = _219 * _229;
    float _233 = _227 * _229;
    float _235 = _221 * _229;
    float _237 = _181 * _181;
    int _239 = max(0, min(int(trunc((_217 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _241 = max(fma(_179, _235, fma(_173, _233, _169 * _231)), fp_c1_1._m0[0].y);
    float _243 = max(fma(_177, _235, fma(_175, _233, _171 * _231)), fp_c1_1._m0[0].y) * max(fma(_177, _235, fma(_175, _233, _171 * _231)), fp_c1_1._m0[0].y);
    float _245 = fma(_213, -_112, _213);
    float _247 = fma(_175, -fp_c5_1._m0[23].y, _171 * (-fp_c5_1._m0[23].x));
    float _249 = fma(_211, -_112, _211);
    float _251 = fma(_112, _215 + (-0.039999999105930328369140625), fp_c1_1._m0[0].w);
    float _253 = max(fma(_177, -fp_c5_1._m0[23].z, _247), fp_c1_1._m0[0].y);
    float _255 = fma(_112, _211 + (-0.039999999105930328369140625), fp_c1_1._m0[0].w);
    float _257 = fma(_112, _213 + (-0.039999999105930328369140625), fp_c1_1._m0[0].w);
    float _259 = fma(_215, -_112, _215);
    float _261 = clamp(exp2(log2(clamp(max(_183, fp_c1_1._m0[0].z) + (-0.0), 0.0, 1.0)) * fp_c6_1._m0[43].x) * fp_c6_1._m0[43].y, 0.0, 1.0);
    float _263 = clamp(fma(_177, -fp_c5_1._m0[23].z, _247), 0.0, 1.0);
    float _265 = 1.0 / (_223 + fma(_195, -_223, _195));
    float _267 = fma(_261, fma(_213, fp_c6_1._m0[44].y, -_245), _245);
    float _269 = fma(_261, fma(_211, fp_c6_1._m0[44].x, -_249), _249);
    float _271 = fma(_138 + (-_171), _261, _171);
    float _273 = fma(_136 + (-_177), _261, _177);
    uint _276 = uint(int(uint((((int(uint(_239) >> uint(16)) * 20) << 16) + (((_239 & 65535) * 20) + max(0, min(int(trunc((_207 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _278 = fp_c10_1._m0[int(uint(int(_276)) >> uint(2))][int(_276) & 3];
    float _280 = fma(_140 + (-_175), _261, _175);
    float _282 = fma(_261, fma(_215, fp_c6_1._m0[44].z, -_259), _259);
    float _284 = _271 * _280;
    float _286 = (_265 * (1.0 / (_223 + fma(_223, -_253, _253)))) * ((_237 * (1.0 / max(fma(_243, _237 * _237, -_243) + 1.0, fp_c1_1._m0[0].y))) * (_237 * (1.0 / max(fma(_243, _237 * _237, -_243) + 1.0, fp_c1_1._m0[0].y))));
    float _288 = _280 * _273;
    float _290 = exp2(_241 * fma(_241, fp_c1_1._m0[1].x, -6.9831600189208984375));
    float _292 = _273 * _273;
    float _294 = fma(_271, _271, -(_280 * _280));
    float _296 = _271 * _273;
    float _298 = fma(_203.x, fma(_255, _199, _201), max(0.0, fma(_294, fp_c5_1._m0[31].x, (fma(_273, fp_c5_1._m0[25].z, fma(_280, fp_c5_1._m0[25].y, _271 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_296, fp_c5_1._m0[28].w, fma(_292, fp_c5_1._m0[28].z, fma(_288, fp_c5_1._m0[28].y, _284 * fp_c5_1._m0[28].x))))) * fma(_269, -_255, _269));
    float _300 = fma(_203.z, fma(_251, _199, _201), max(0.0, fma(_294, fp_c5_1._m0[31].z, (fma(_273, fp_c5_1._m0[27].z, fma(_280, fp_c5_1._m0[27].y, _271 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_296, fp_c5_1._m0[30].w, fma(_292, fp_c5_1._m0[30].z, fma(_288, fp_c5_1._m0[30].y, _284 * fp_c5_1._m0[30].x))))) * fma(_282, -_251, _282));
    float _302 = fma(_203.y, fma(_257, _199, _201), max(0.0, fma(_294, fp_c5_1._m0[31].y, (fma(_273, fp_c5_1._m0[26].z, fma(_280, fp_c5_1._m0[26].y, _271 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_296, fp_c5_1._m0[29].w, fma(_292, fp_c5_1._m0[29].z, fma(_288, fp_c5_1._m0[29].y, _284 * fp_c5_1._m0[29].x))))) * fma(_267, -_257, _267));
    float _304 = clamp(fma(clamp(_77.w + fp_c7_1._m0[36].z, 0.0, 1.0), -max(0.0, (-texture(fp_tex_tcb_2A, vec2(fma(_75.x * _185, 0.5, 0.5), fma(_75.y * _185, -0.5, 0.5))).y) + 1.0), fp_c1_1._m0[1].z), 0.0, 1.0);
    int _306 = floatBitsToInt(_278);
    float _308 = _302;
    float _310 = _300;
    float _312 = _298;
    float _314 = _300;
    float _316 = _298;
    float _318 = _302;
    if (floatBitsToInt(_278) != (-1))
    {
        int _320 = 0;
        float _324;
        float _326;
        float _328;
        int _412;
        do
        {
            int _322 = _306 & 255;
            _324 = _312;
            _326 = _308;
            _328 = _310;
            _330 = uint(_322) >= 30u;
            if (_330)
            {
                break;
            }
            int _332 = _322 << 4;
            uint _334 = uint(int(uint(_332 + 7360) >> uint(2)));
            int _336 = int(_334) + 1;
            uint _338 = uint(int(uint(_332 + 7368) >> uint(2)));
            float _340 = (-_207) + fp_c10_1._m0[int(uint(int(_334)) >> uint(2))][int(_334) & 3];
            float _342 = fp_c10_1._m0[int(uint(_336) >> uint(2))][_336 & 3] + (-_77.y);
            float _344 = (-_217) + fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3];
            float _346 = fma(_344, _344, fma(_342, _342, _340 * _340));
            float _348 = _340 * inversesqrt(_346);
            float _350 = _342 * inversesqrt(_346);
            float _352 = _344 * inversesqrt(_346);
            float _354 = _169 + _348;
            float _356 = _173 + _350;
            float _358 = _179 + _352;
            float _360 = inversesqrt(fma(_358, _358, fma(_356, _356, _354 * _354)));
            float _362 = _354 * _360;
            float _364 = _356 * _360;
            float _366 = _358 * _360;
            float _368 = max(fma(_179, _366, fma(_173, _364, _169 * _362)), fp_c1_1._m0[0].y);
            uint _370 = uint(int(uint(_332 + 6880) >> uint(2)));
            int _372 = int(_370) + 1;
            float _374 = max(fma(_177, _366, fma(_175, _364, _171 * _362)), fp_c1_1._m0[0].y) * max(fma(_177, _366, fma(_175, _364, _171 * _362)), fp_c1_1._m0[0].y);
            float _376 = fma(_177, _352, fma(_175, _350, _171 * _348));
            uint _378 = uint(int(uint(_332 + 8320) >> uint(2)));
            float _380 = max(_376, fp_c1_1._m0[0].y);
            float _382 = exp2(_368 * fma(_368, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _384 = 1.0 / max(fma(_237 * _237, _374, -_374) + 1.0, fp_c1_1._m0[0].y);
            float _386 = (_265 * (1.0 / (_223 + fma(_223, -_380, _380)))) * ((_237 * _384) * (_237 * _384));
            bool _388 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_378)) >> uint(2))][int(_378) & 3]) != 0;
            uint _390 = uint(int(uint(_332 + 6408) >> uint(2)));
            uint _392 = uint(int(uint(_332 + 6400) >> uint(2)));
            int _394 = int(_392) + 1;
            float _396 = _384;
            if (!_388)
            {
                _396 = 1.0;
            }
            float _398 = _396;
            if (_388)
            {
                uint _400 = uint(int(uint(_332 + 7840) >> uint(2)));
                int _402 = int(_400) + 1;
                uint _404 = uint(int(uint(_332 + 7848) >> uint(2)));
                uint _406 = uint(int(uint(_332 + 6888) >> uint(2)));
                float _408 = fp_c10_1._m0[int(uint(int(_406)) >> uint(2))][int(_406) & 3];
                int _410 = int(_406) + 1;
                _398 = exp2(fp_c10_1._m0[int(uint(_410) >> uint(2))][_410 & 3] * log2(clamp(((-_408) + fma(_352, -fp_c10_1._m0[int(uint(int(_404)) >> uint(2))][int(_404) & 3], fma(_350, -fp_c10_1._m0[int(uint(_402) >> uint(2))][_402 & 3], _348 * (-fp_c10_1._m0[int(uint(int(_400)) >> uint(2))][int(_400) & 3])))) * (1.0 / ((-_408) + 1.0)), 0.0, 1.0)));
            }
            _412 = _320 + 1;
            float _414 = (exp2(fp_c10_1._m0[int(uint(_372) >> uint(2))][_372 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3], -sqrt(_346), fp_c1_1._m0[1].z), 0.0, 1.0))) * _398) * clamp(_376 + (-0.0), 0.0, 1.0);
            float _416 = fma(fp_c10_1._m0[int(uint(_394) >> uint(2))][_394 & 3] * _414, fma(_267, fp_c1_1._m0[1].w, ((_257 + fma(_257, -_382, _382)) * _386) * 0.079577468335628509521484375), _308);
            float _418 = fma(fp_c10_1._m0[int(uint(int(_390)) >> uint(2))][int(_390) & 3] * _414, fma(_282, fp_c1_1._m0[1].w, ((_251 + fma(_251, -_382, _382)) * _386) * 0.079577468335628509521484375), _310);
            float _420 = fma(fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3] * _414, fma(_269, fp_c1_1._m0[1].w, ((_255 + fma(_255, -_382, _382)) * _386) * 0.079577468335628509521484375), _312);
            _306 = int(uint(_306) >> uint(8));
            _320 = _412;
            _308 = _416;
            _310 = _418;
            _312 = _420;
            _324 = _420;
            _326 = _416;
            _328 = _418;
        } while (!(_412 >= 4));
        _330 = false;
        _314 = _328;
        _316 = _324;
        _318 = _326;
        if ((_306 & 255) == 30)
        {
            float _422 = 1.0 / fp_c10_1._m0[561].y;
            float _424 = _217 + (-fp_c10_1._m0[557].z);
            float _426 = (-_207) + fma(_422, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _428 = (-_217) + fma(_422, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _430 = _426 * _426;
            float _432 = _207 + (-fp_c10_1._m0[557].x);
            float _434 = sqrt(fma(_428, _428, _430)) * (-fp_c10_1._m0[558].y);
            float _436 = _432 * fp_c10_1._m0[558].z;
            float _438 = inversesqrt(fma(_428, _428, fma(_434, _434, _430)));
            float _440 = _426 * _438;
            float _442 = _434 * _438;
            float _444 = _428 * _438;
            float _446 = _169 + _440;
            float _448 = _173 + _442;
            float _450 = _179 + _444;
            float _452 = _424 * fp_c10_1._m0[558].x;
            float _454 = inversesqrt(fma(_450, _450, fma(_448, _448, _446 * _446)));
            float _456 = _77.y;
            float _458 = _446 * _454;
            float _460 = _448 * _454;
            float _462 = ((-float(_452 < _436)) + float(_452 > _436)) * fp_c10_1._m0[561].y;
            float _464 = fma(_424, _424, _432 * _432);
            float _466 = 1.0 / (fma(_217, fp_c10_1._m0[565].z, fma(_456, fp_c10_1._m0[565].y, _207 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _468 = fma(_424, fp_c10_1._m0[558].z, _432 * fp_c10_1._m0[558].x);
            float _470 = _450 * _454;
            bool _472 = _468 > 0.0;
            float _474 = fma(_177, _444, fma(_175, _442, _171 * _440));
            float _476 = inversesqrt(fma(_444, _444, _440 * _440));
            float _478 = max(fma(_179, _470, fma(_173, _460, _169 * _458)), fp_c1_1._m0[0].y);
            float _480 = _444;
            if (_472)
            {
                _480 = sqrt(_464);
            }
            float _482 = _480;
            if (!_472)
            {
                _482 = 1.0;
            }
            float _484 = max(fma(_177, _470, fma(_175, _460, _171 * _458)), fp_c1_1._m0[0].y) * max(fma(_177, _470, fma(_175, _460, _171 * _458)), fp_c1_1._m0[0].y);
            float _486 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_432, fma(_462, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_424 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_462 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_432, fma(_462, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_424 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_462 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            bool _488 = fma(_424 * inversesqrt(_464), fp_c10_1._m0[558].z, (_432 * inversesqrt(_464)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _490 = max(_474, fp_c1_1._m0[0].y);
            float _492 = clamp(fma(_468 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0) * clamp(fma(_468 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0);
            float _494 = log2(clamp(fma(_482, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _496 = exp2(_478 * fma(_478, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _498 = _494;
            if (_488)
            {
                _498 = fma(_486, -_486, fp_c1_1._m0[1].z) * fma(_486, -_486, fp_c1_1._m0[1].z);
            }
            float _500 = _498;
            if (!_488)
            {
                _500 = 1.0;
            }
            float _502 = (_265 * (1.0 / (_223 + fma(_223, -_490, _490)))) * ((_237 * (1.0 / max(fma(_237 * _237, _484, -_484) + 1.0, fp_c1_1._m0[0].y))) * (_237 * (1.0 / max(fma(_237 * _237, _484, -_484) + 1.0, fp_c1_1._m0[0].y))));
            float _504 = clamp(_474 + (-0.0), 0.0, 1.0) * (min(fma(_492, -_492, fp_c1_1._m0[1].z) * fma(_492, -_492, fp_c1_1._m0[1].z), _500) * (exp2(_494) * exp2(log2(clamp((fma(_444 * _476, -fp_c10_1._m0[558].z, (_440 * _476) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _506 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_217, fp_c10_1._m0[562].z, fma(_456, fp_c10_1._m0[562].y, _207 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _466, 0.5, 0.5), (-fma((fma(_217, fp_c10_1._m0[563].z, fma(_456, fp_c10_1._m0[563].y, _207 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _466, 0.5, 0.5)) + 1.0)).z > fma((fma(_217, fp_c10_1._m0[564].z, fma(_456, fp_c10_1._m0[564].y, _207 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _466, 0.5, 0.5)) || (_468 <= 0.0));
            _314 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _504) * fma(_282, fp_c1_1._m0[1].w, ((_251 + fma(_251, -_496, _496)) * _502) * 0.079577468335628509521484375), _506, _328);
            _316 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _504) * fma(_269, fp_c1_1._m0[1].w, ((_255 + fma(_255, -_496, _496)) * _502) * 0.079577468335628509521484375), _506, _324);
            _318 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _504) * fma(_267, fp_c1_1._m0[1].w, ((_257 + fma(_257, -_496, _496)) * _502) * 0.079577468335628509521484375), _506, _326);
        }
    }
    float _508 = _207 + (-fp_c3_1._m0[11].w);
    float _510 = _77.y;
    float _512 = _217 + (-fp_c3_1._m0[13].w);
    float _514 = _510 + (-fp_c3_1._m0[12].w);
    float _516 = fma(_512, _512, fma(_514, _514, _508 * _508));
    float _518 = clamp(fma(fma(_217, fp_c5_1._m0[14].z, fma(_510, fp_c5_1._m0[14].y, _207 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _520 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[93].z, fma(_225, _314, _304 * (fma(_286 * (_251 + fma(_251, -_290, _290)), fp_c1_1._m0[1].y, _282 * 0.3183098733425140380859375) * (_263 * fp_c5_1._m0[5].z))));
    float _522 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[93].x, fma(_225, _316, _304 * (fma(_286 * (_255 + fma(_255, -_290, _290)), fp_c1_1._m0[1].y, _269 * 0.3183098733425140380859375) * (_263 * fp_c5_1._m0[5].x))));
    float _524 = clamp(fma(_225 * _304, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _526 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[93].y, fma(_225, _318, _304 * (fma(_286 * (_257 + fma(_257, -_290, _290)), fp_c1_1._m0[1].y, _267 * 0.3183098733425140380859375) * (_263 * fp_c5_1._m0[5].y))));
    float _528 = exp2(log2(clamp(sqrt(_516) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_512 * inversesqrt(_516), fp_c5_1._m0[23].z, fma(_514 * inversesqrt(_516), fp_c5_1._m0[23].y, (_508 * inversesqrt(_516)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _530 = fma((-_522) + fp_c5_1._m0[13].x, _518, _522);
    float _532 = fma((-_526) + fp_c5_1._m0[13].y, _518, _526);
    float _534 = fma((-_520) + fp_c5_1._m0[13].z, _518, _520);
    float _536 = clamp((-exp2((clamp(fma(sqrt(_516), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _73.x = fma((-_530) + fma(fma((_528 * fp_c7_1._m0[55].x) * _524, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _536, _530);
    _73.y = fma((-_532) + fma(fma((_528 * fp_c7_1._m0[55].y) * _524, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _536, _532);
    _73.z = fma((-_534) + fma(fma((_528 * fp_c7_1._m0[55].z) * _524, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _536, _534);
    _73.w = clamp(_84 + (-0.0), 0.0, 1.0);
}


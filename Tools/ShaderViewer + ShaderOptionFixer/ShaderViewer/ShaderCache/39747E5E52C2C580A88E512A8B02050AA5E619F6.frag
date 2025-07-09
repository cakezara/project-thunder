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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 2) in vec4 _66;
layout(location = 0) out vec4 _69;
layout(location = 4) in vec4 _71;
layout(location = 6) in vec4 _73;
layout(location = 5) in vec4 _75;
layout(location = 3) in vec4 _77;
uint _6[12];

void main()
{
    bool _308 = false;
    float _84 = _62.x;
    float _86 = _62.y;
    float _88 = texture(fp_tex_tcb_8, vec2(_84, _86)).x;
    bool _92 = _88 <= 0.0;
    if (_92)
    {
        discard;
    }
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_84, _86)).xy;
    float _98 = _96.x;
    float _100 = _96.y;
    vec3 _104 = texture(fp_tex_tcb_A, vec2(_84, _86)).xyz;
    float _106 = _104.x;
    float _108 = _104.y;
    float _110 = _104.z;
    float _112 = _64.x;
    float _114 = _64.y;
    float _116 = _64.z;
    float _118 = _66.y;
    float _120 = _66.z;
    float _122 = _66.x;
    float _124 = _66.w;
    float _126 = inversesqrt(fma(_116, _116, fma(_114, _114, _112 * _112)));
    float _128 = _116 * _126;
    float _130 = _112 * _126;
    float _132 = _114 * _126;
    int _135 = floatBitsToInt(_126);
    if (_92)
    {
        _135 = 0;
    }
    float _137 = fma(_132, _120, -(_128 * _118));
    float _139 = fma(_128, _122, -(_130 * _120));
    float _141 = fma(_130, _118, -(_132 * _122));
    int _143 = floatBitsToInt(_139);
    int _145 = floatBitsToInt(_141);
    int _147 = floatBitsToInt(_137);
    if (_92)
    {
        _143 = 0;
    }
    if (_92)
    {
        _145 = 0;
    }
    if (_92)
    {
        _147 = 0;
    }
    if (_92)
    {
        _69.x = intBitsToFloat(_143);
        _69.y = intBitsToFloat(_145);
        _69.z = intBitsToFloat(_147);
        _69.w = intBitsToFloat(_135);
        return;
    }
    float _149 = _71.x;
    float _151 = _71.y;
    float _153 = _71.z;
    float _155 = max(texture(fp_tex_tcb_10, vec2(_84, _86)).x, fp_c1_1._m0[0].x);
    float _157 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _159 = fma(_130, _157, fma(_98, _122, _100 * (_137 * _124)));
    float _161 = fma(_132, _157, fma(_98, _118, _100 * (_139 * _124)));
    float _163 = fma(_128, _157, fma(_98, _120, _100 * (_141 * _124)));
    float _165 = inversesqrt(fma(_163, _163, fma(_161, _161, _159 * _159)));
    float _167 = inversesqrt(fma(_153, _153, fma(_151, _151, _149 * _149)));
    float _169 = _159 * _165;
    float _171 = _161 * _165;
    float _173 = _163 * _165;
    float _175 = _149 * (-_167);
    float _177 = _151 * (-_167);
    float _179 = _153 * (-_167);
    float _181 = 1.0 / (_73.z * gl_FragCoord.w);
    float _183 = fma(_173, _179, fma(_171, _177, _169 * _175));
    float _185 = 1.0 / _75.w;
    float _187 = fma(_169 * (-_183), -2.0, -_175);
    float _189 = fma(_171 * (-_183), -2.0, -_177);
    float _191 = fma(_173 * (-_183), -2.0, -_179);
    float _193 = 1.0 / max(abs(_191), max(abs(_187), abs(_189)));
    vec2 _195 = texture(fp_tex_tcb_2A, vec2(fma(_75.x * _185, 0.5, 0.5), fma(_75.y * _185, -0.5, 0.5))).xy;
    float _197 = max(_183, fp_c1_1._m0[0].y);
    vec2 _199 = texture(fp_tex_tcb_38, vec2(_197, (-_155) + (-0.0))).xy;
    float _201 = _199.x;
    float _203 = _199.y;
    vec3 _205 = texture(fp_tex_tcb_36, vec4(_187 * _193, _189 * _193, _191 * _193, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_155 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _207 = _77.x;
    float _209 = _77.z;
    float _211 = _177 + (-fp_c5_1._m0[23].y);
    float _213 = _179 + (-fp_c5_1._m0[23].z);
    float _215 = fma(_155, 0.5, 0.5);
    float _217 = _155 * _155;
    float _219 = (_215 * 0.5) * _215;
    float _221 = _175 + (-fp_c5_1._m0[23].x);
    float _223 = _171 * _173;
    int _225 = max(0, min(int(trunc((_209 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _227 = inversesqrt(fma(_213, _213, fma(_211, _211, _221 * _221)));
    float _229 = _169 * _171;
    float _231 = _221 * _227;
    float _233 = _211 * _227;
    float _235 = _213 * _227;
    float _237 = _173 * _173;
    float _239 = _169 * _173;
    float _241 = fma(_171, -fp_c5_1._m0[23].y, _169 * (-fp_c5_1._m0[23].x));
    float _243 = max(fma(_173, _235, fma(_171, _233, _169 * _231)), fp_c1_1._m0[0].y) * max(fma(_173, _235, fma(_171, _233, _169 * _231)), fp_c1_1._m0[0].y);
    float _245 = max(fma(_179, _235, fma(_177, _233, _175 * _231)), fp_c1_1._m0[0].y);
    float _247 = max(fma(_173, -fp_c5_1._m0[23].z, _241), fp_c1_1._m0[0].y);
    float _249 = clamp(fma(_173, -fp_c5_1._m0[23].z, _241), 0.0, 1.0);
    float _251 = 1.0 / (_219 + fma(_197, -_219, _197));
    float _253 = fma(_106 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    uint _256 = uint(int(uint((((int(uint(_225) >> uint(16)) * 20) << 16) + (((_225 & 65535) * 20) + max(0, min(int(trunc((_207 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _258 = fp_c10_1._m0[int(uint(int(_256)) >> uint(2))][int(_256) & 3];
    float _260 = fma(_169, _169, -(_171 * _171));
    float _262 = exp2(_245 * fma(_245, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _264 = fma(_108 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _266 = fma(_110 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _268 = fma(_106, -fp_c6_1._m0[9].x, _106);
    float _270 = fma(_108, -fp_c6_1._m0[9].x, _108);
    float _272 = (_251 * (1.0 / (_219 + fma(_219, -_247, _247)))) * ((_217 * (1.0 / max(fma(_243, _217 * _217, -_243) + 1.0, fp_c1_1._m0[0].y))) * (_217 * (1.0 / max(fma(_243, _217 * _217, -_243) + 1.0, fp_c1_1._m0[0].y))));
    float _274 = fma(_110, -fp_c6_1._m0[9].x, _110);
    float _276 = fma(_205.y, fma(_264, _201, _203), max(0.0, fma(_260, fp_c5_1._m0[31].y, (fma(_173, fp_c5_1._m0[26].z, fma(_171, fp_c5_1._m0[26].y, _169 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_239, fp_c5_1._m0[29].w, fma(_237, fp_c5_1._m0[29].z, fma(_223, fp_c5_1._m0[29].y, _229 * fp_c5_1._m0[29].x))))) * fma(_264, -_270, _270));
    float _278 = fma(_205.x, fma(_253, _201, _203), max(0.0, fma(_260, fp_c5_1._m0[31].x, (fma(_173, fp_c5_1._m0[25].z, fma(_171, fp_c5_1._m0[25].y, _169 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_239, fp_c5_1._m0[28].w, fma(_237, fp_c5_1._m0[28].z, fma(_223, fp_c5_1._m0[28].y, _229 * fp_c5_1._m0[28].x))))) * fma(_253, -_268, _268));
    float _280 = fma(_205.z, fma(_266, _201, _203), max(0.0, fma(_260, fp_c5_1._m0[31].z, (fma(_173, fp_c5_1._m0[27].z, fma(_171, fp_c5_1._m0[27].y, _169 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_239, fp_c5_1._m0[30].w, fma(_237, fp_c5_1._m0[30].z, fma(_223, fp_c5_1._m0[30].y, _229 * fp_c5_1._m0[30].x))))) * fma(_266, -_274, _274));
    float _282 = clamp((-fma(max((-_195.x) + 1.0, (-_195.y) + 1.0), clamp(_77.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_73.x * gl_FragCoord.w) * _181, (_73.y * gl_FragCoord.w) * _181)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _284 = floatBitsToInt(_258);
    float _286 = _280;
    float _288 = _278;
    float _290 = _276;
    float _292 = _278;
    float _294 = _276;
    float _296 = _280;
    if (floatBitsToInt(_258) != (-1))
    {
        int _298 = 0;
        float _302;
        float _304;
        float _306;
        int _390;
        do
        {
            int _300 = _284 & 255;
            _302 = _288;
            _304 = _290;
            _306 = _286;
            _308 = uint(_300) >= 30u;
            if (_308)
            {
                break;
            }
            int _310 = _300 << 4;
            uint _312 = uint(int(uint(_310 + 7360) >> uint(2)));
            int _314 = int(_312) + 1;
            uint _316 = uint(int(uint(_310 + 7368) >> uint(2)));
            float _318 = (-_207) + fp_c10_1._m0[int(uint(int(_312)) >> uint(2))][int(_312) & 3];
            float _320 = fp_c10_1._m0[int(uint(_314) >> uint(2))][_314 & 3] + (-_77.y);
            float _322 = (-_209) + fp_c10_1._m0[int(uint(int(_316)) >> uint(2))][int(_316) & 3];
            float _324 = fma(_322, _322, fma(_320, _320, _318 * _318));
            float _326 = _318 * inversesqrt(_324);
            float _328 = _320 * inversesqrt(_324);
            float _330 = _322 * inversesqrt(_324);
            float _332 = _175 + _326;
            float _334 = _177 + _328;
            float _336 = _179 + _330;
            uint _338 = uint(int(uint(_310 + 6880) >> uint(2)));
            int _340 = int(_338) + 1;
            float _342 = inversesqrt(fma(_336, _336, fma(_334, _334, _332 * _332)));
            float _344 = _332 * _342;
            float _346 = _334 * _342;
            float _348 = _336 * _342;
            uint _350 = uint(int(uint(_310 + 8320) >> uint(2)));
            float _352 = max(fma(_179, _348, fma(_177, _346, _175 * _344)), fp_c1_1._m0[0].y);
            float _354 = max(fma(_173, _348, fma(_171, _346, _169 * _344)), fp_c1_1._m0[0].y) * max(fma(_173, _348, fma(_171, _346, _169 * _344)), fp_c1_1._m0[0].y);
            float _356 = fma(_173, _330, fma(_171, _328, _169 * _326));
            float _358 = max(_356, fp_c1_1._m0[0].y);
            uint _360 = uint(int(uint(_310 + 6408) >> uint(2)));
            float _362 = fp_c10_1._m0[int(uint(_340) >> uint(2))][_340 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3], -sqrt(_324), fp_c1_1._m0[1].x), 0.0, 1.0));
            uint _364 = uint(int(uint(_310 + 6400) >> uint(2)));
            int _366 = int(_364) + 1;
            float _368 = exp2(_352 * fma(_352, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _370 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_350)) >> uint(2))][int(_350) & 3]) != 0;
            float _372 = (_251 * (1.0 / (_219 + fma(_219, -_358, _358)))) * ((_217 * (1.0 / max(fma(_217 * _217, _354, -_354) + 1.0, fp_c1_1._m0[0].y))) * (_217 * (1.0 / max(fma(_217 * _217, _354, -_354) + 1.0, fp_c1_1._m0[0].y))));
            float _374 = _362;
            if (!_370)
            {
                _374 = 1.0;
            }
            float _376 = _374;
            if (_370)
            {
                uint _378 = uint(int(uint(_310 + 7840) >> uint(2)));
                int _380 = int(_378) + 1;
                uint _382 = uint(int(uint(_310 + 7848) >> uint(2)));
                uint _384 = uint(int(uint(_310 + 6888) >> uint(2)));
                float _386 = fp_c10_1._m0[int(uint(int(_384)) >> uint(2))][int(_384) & 3];
                int _388 = int(_384) + 1;
                _376 = exp2(fp_c10_1._m0[int(uint(_388) >> uint(2))][_388 & 3] * log2(clamp(((-_386) + fma(_330, -fp_c10_1._m0[int(uint(int(_382)) >> uint(2))][int(_382) & 3], fma(_328, -fp_c10_1._m0[int(uint(_380) >> uint(2))][_380 & 3], _326 * (-fp_c10_1._m0[int(uint(int(_378)) >> uint(2))][int(_378) & 3])))) * (1.0 / ((-_386) + 1.0)), 0.0, 1.0)));
            }
            _390 = _298 + 1;
            float _392 = (exp2(_362) * _376) * clamp(_356 + (-0.0), 0.0, 1.0);
            float _394 = fma(fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3] * _392, fma(_274, fp_c1_1._m0[1].y, ((_266 + fma(_266, -_368, _368)) * _372) * 0.079577468335628509521484375), _286);
            float _396 = fma(fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3] * _392, fma(_268, fp_c1_1._m0[1].y, ((_253 + fma(_253, -_368, _368)) * _372) * 0.079577468335628509521484375), _288);
            float _398 = fma(fp_c10_1._m0[int(uint(_366) >> uint(2))][_366 & 3] * _392, fma(_270, fp_c1_1._m0[1].y, ((_264 + fma(_264, -_368, _368)) * _372) * 0.079577468335628509521484375), _290);
            _284 = int(uint(_284) >> uint(8));
            _298 = _390;
            _286 = _394;
            _288 = _396;
            _290 = _398;
            _302 = _396;
            _304 = _398;
            _306 = _394;
        } while (!(_390 >= 4));
        _308 = false;
        _292 = _302;
        _294 = _304;
        _296 = _306;
        if ((_284 & 255) == 30)
        {
            float _400 = _77.y;
            float _402 = 1.0 / (fma(_209, fp_c10_1._m0[565].z, fma(_400, fp_c10_1._m0[565].y, _207 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _404 = 1.0 / fp_c10_1._m0[561].y;
            float _406 = _207 + (-fp_c10_1._m0[557].x);
            float _408 = _209 + (-fp_c10_1._m0[557].z);
            float _410 = _406 * fp_c10_1._m0[558].z;
            float _412 = _408 * fp_c10_1._m0[558].x;
            float _414 = (-_207) + fma(_404, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _416 = (-_209) + fma(_404, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _418 = _414 * _414;
            float _420 = ((-float(_412 < _410)) + float(_412 > _410)) * fp_c10_1._m0[561].y;
            float _422 = sqrt(fma(_416, _416, _418)) * (-fp_c10_1._m0[558].y);
            float _424 = inversesqrt(fma(_416, _416, fma(_422, _422, _418)));
            float _426 = _414 * _424;
            float _428 = _422 * _424;
            float _430 = _416 * _424;
            float _432 = _175 + _426;
            float _434 = _177 + _428;
            float _436 = _179 + _430;
            float _438 = fma(_173, _430, fma(_171, _428, _169 * _426));
            float _440 = inversesqrt(fma(_436, _436, fma(_434, _434, _432 * _432)));
            float _442 = _432 * _440;
            float _444 = _434 * _440;
            float _446 = _436 * _440;
            float _448 = fma(_408, _408, _406 * _406);
            float _450 = max(fma(_179, _446, fma(_177, _444, _175 * _442)), fp_c1_1._m0[0].y);
            float _452 = fma(_408, fp_c10_1._m0[558].z, _406 * fp_c10_1._m0[558].x);
            float _454 = max(fma(_173, _446, fma(_171, _444, _169 * _442)), fp_c1_1._m0[0].y) * max(fma(_173, _446, fma(_171, _444, _169 * _442)), fp_c1_1._m0[0].y);
            float _456 = inversesqrt(fma(_430, _430, _426 * _426));
            bool _458 = _452 > 0.0;
            float _460 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_406, fma(_420, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_408 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_420 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_406, fma(_420, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_408 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_420 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _462 = _430;
            if (_458)
            {
                _462 = sqrt(_448);
            }
            float _464 = _462;
            if (!_458)
            {
                _464 = 1.0;
            }
            float _466 = fma(_460, -_460, fp_c1_1._m0[1].x);
            bool _468 = fma(_408 * inversesqrt(_448), fp_c10_1._m0[558].z, (_406 * inversesqrt(_448)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _470 = max(_438, fp_c1_1._m0[0].y);
            float _472 = _466;
            if (_468)
            {
                _472 = _466 * _466;
            }
            float _474 = clamp(fma(_452 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_452 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _476 = _472;
            if (!_468)
            {
                _476 = 1.0;
            }
            float _478 = exp2(_450 * fma(_450, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _480 = (_251 * (1.0 / (_219 + fma(_219, -_470, _470)))) * ((_217 * (1.0 / max(fma(_217 * _217, _454, -_454) + 1.0, fp_c1_1._m0[0].y))) * (_217 * (1.0 / max(fma(_217 * _217, _454, -_454) + 1.0, fp_c1_1._m0[0].y))));
            float _482 = clamp(_438 + (-0.0), 0.0, 1.0) * (min(fma(_474, -_474, fp_c1_1._m0[1].x) * fma(_474, -_474, fp_c1_1._m0[1].x), _476) * (exp2(log2(clamp(fma(_464, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_430 * _456, -fp_c10_1._m0[558].z, (_426 * _456) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _484 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_209, fp_c10_1._m0[562].z, fma(_400, fp_c10_1._m0[562].y, _207 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _402, 0.5, 0.5), (-fma((fma(_209, fp_c10_1._m0[563].z, fma(_400, fp_c10_1._m0[563].y, _207 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _402, 0.5, 0.5)) + 1.0)).z > fma((fma(_209, fp_c10_1._m0[564].z, fma(_400, fp_c10_1._m0[564].y, _207 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _402, 0.5, 0.5)) || (_452 <= 0.0));
            _292 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _482) * fma(_268, fp_c1_1._m0[1].y, ((_253 + fma(_253, -_478, _478)) * _480) * 0.079577468335628509521484375), _484, _302);
            _294 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _482) * fma(_270, fp_c1_1._m0[1].y, ((_264 + fma(_264, -_478, _478)) * _480) * 0.079577468335628509521484375), _484, _304);
            _296 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _482) * fma(_274, fp_c1_1._m0[1].y, ((_266 + fma(_266, -_478, _478)) * _480) * 0.079577468335628509521484375), _484, _306);
        }
    }
    float _486 = _207 + (-fp_c3_1._m0[11].w);
    float _488 = _77.y;
    float _490 = _209 + (-fp_c3_1._m0[13].w);
    float _492 = fma(_282, fma(_272 * (_253 + fma(_253, -_262, _262)), fp_c1_1._m0[0].w, _268 * 0.3183098733425140380859375) * (_249 * fp_c5_1._m0[5].x), _292);
    float _494 = fma(_282, fma(_272 * (_264 + fma(_264, -_262, _262)), fp_c1_1._m0[0].w, _270 * 0.3183098733425140380859375) * (_249 * fp_c5_1._m0[5].y), _294);
    float _496 = fma(_282, fma(_272 * (_266 + fma(_266, -_262, _262)), fp_c1_1._m0[0].w, _274 * 0.3183098733425140380859375) * (_249 * fp_c5_1._m0[5].z), _296);
    float _498 = _488 + (-fp_c3_1._m0[12].w);
    float _500 = fma(_490, _490, fma(_498, _498, _486 * _486));
    float _502 = clamp(fma(fma(_209, fp_c5_1._m0[14].z, fma(_488, fp_c5_1._m0[14].y, _207 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _504 = clamp(fma(_282, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _506 = exp2(log2(clamp(sqrt(_500) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_490 * inversesqrt(_500), fp_c5_1._m0[23].z, fma(_498 * inversesqrt(_500), fp_c5_1._m0[23].y, (_486 * inversesqrt(_500)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _508 = fma((-_492) + fp_c5_1._m0[13].x, _502, _492);
    float _510 = fma((-_494) + fp_c5_1._m0[13].y, _502, _494);
    float _512 = fma((-_496) + fp_c5_1._m0[13].z, _502, _496);
    float _514 = clamp((-exp2((clamp(fma(sqrt(_500), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _69.x = fma((-_508) + fma(fma(_504 * (_506 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _514, _508);
    _69.y = fma((-_510) + fma(fma(_504 * (_506 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _514, _510);
    _69.z = fma((-_512) + fma(fma(_504 * (_506 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _514, _512);
    _69.w = clamp(_88 + (-0.0), 0.0, 1.0);
}


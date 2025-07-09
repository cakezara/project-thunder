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

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_14;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 0) out vec4 _73;
layout(location = 4) in vec4 _75;
layout(location = 6) in vec4 _77;
layout(location = 5) in vec4 _79;
layout(location = 3) in vec4 _81;
uint _6[12];

void main()
{
    bool _320 = false;
    float _88 = _66.x;
    float _90 = _66.y;
    float _92 = texture(fp_tex_tcb_8, vec2(_88, _90)).x;
    bool _96 = _92 <= 0.0;
    if (_96)
    {
        discard;
    }
    vec2 _100 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _102 = _100.x;
    float _104 = _100.y;
    vec3 _108 = texture(fp_tex_tcb_14, vec2(_88, _90)).xyz;
    vec3 _110 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _112 = _110.x;
    float _114 = _110.y;
    float _116 = _110.z;
    float _118 = texture(fp_tex_tcb_12, vec2(_88, _90)).x;
    float _120 = _68.x;
    float _122 = _68.y;
    float _124 = _68.z;
    float _126 = _70.y;
    float _128 = _70.z;
    float _130 = _70.x;
    float _132 = _70.w;
    float _134 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _136 = _124 * _134;
    float _138 = _120 * _134;
    float _140 = _122 * _134;
    int _143 = floatBitsToInt(_134);
    if (_96)
    {
        _143 = 0;
    }
    float _145 = fma(_140, _128, -(_136 * _126));
    float _147 = fma(_136, _130, -(_138 * _128));
    float _149 = fma(_138, _126, -(_140 * _130));
    int _151 = floatBitsToInt(_147);
    int _153 = floatBitsToInt(_149);
    int _155 = floatBitsToInt(_145);
    if (_96)
    {
        _151 = 0;
    }
    if (_96)
    {
        _153 = 0;
    }
    if (_96)
    {
        _155 = 0;
    }
    if (_96)
    {
        _73.x = intBitsToFloat(_151);
        _73.y = intBitsToFloat(_153);
        _73.z = intBitsToFloat(_155);
        _73.w = intBitsToFloat(_143);
        return;
    }
    float _157 = _75.x;
    float _159 = _75.y;
    float _161 = _75.z;
    float _163 = sqrt(clamp((-fma(_102, _102, _104 * _104)) + 1.0, 0.0, 1.0));
    float _165 = fma(_138, _163, fma(_102, _130, _104 * (_145 * _132)));
    float _167 = fma(_140, _163, fma(_102, _126, _104 * (_147 * _132)));
    float _169 = fma(_136, _163, fma(_102, _128, _104 * (_149 * _132)));
    float _171 = inversesqrt(fma(_169, _169, fma(_167, _167, _165 * _165)));
    float _173 = inversesqrt(fma(_161, _161, fma(_159, _159, _157 * _157)));
    float _175 = 1.0 / _79.w;
    float _177 = _165 * _171;
    float _179 = _167 * _171;
    float _181 = _169 * _171;
    float _183 = _157 * (-_173);
    float _185 = _159 * (-_173);
    float _187 = 1.0 / (_77.z * gl_FragCoord.w);
    float _189 = _161 * (-_173);
    float _191 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _193 = fma(_181, _189, fma(_179, _185, _177 * _183));
    float _195 = fma(_177 * (-_193), -2.0, -_183);
    float _197 = fma(_179 * (-_193), -2.0, -_185);
    float _199 = fma(_181 * (-_193), -2.0, -_189);
    float _201 = 1.0 / max(abs(_199), max(abs(_195), abs(_197)));
    float _203 = max(_193, fp_c1_1._m0[0].z);
    vec2 _205 = texture(fp_tex_tcb_2A, vec2(fma(_79.x * _175, 0.5, 0.5), fma(_79.y * _175, -0.5, 0.5))).xy;
    vec2 _207 = texture(fp_tex_tcb_38, vec2(_203, (-_191) + (-0.0))).xy;
    float _209 = _207.x;
    float _211 = _207.y;
    vec3 _213 = texture(fp_tex_tcb_36, vec4(_195 * _201, _197 * _201, _199 * _201, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_191 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _215 = _185 + (-fp_c5_1._m0[23].y);
    float _217 = _189 + (-fp_c5_1._m0[23].z);
    float _219 = fma(_191, 0.5, 0.5);
    float _221 = sin(fp_c7_1._m0[20].w * fp_c6_1._m0[85].x);
    float _223 = _81.z;
    float _225 = _81.x;
    float _227 = _183 + (-fp_c5_1._m0[23].x);
    float _229 = inversesqrt(fma(_217, _217, fma(_215, _215, _227 * _227)));
    float _231 = _177 * _179;
    float _233 = _179 * _181;
    int _235 = max(0, min(int(trunc((_223 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _237 = _227 * _229;
    float _239 = _215 * _229;
    float _241 = _217 * _229;
    float _243 = _181 * _181;
    float _245 = _191 * _191;
    float _247 = _245 * _245;
    float _249 = fma(_179, -fp_c5_1._m0[23].y, _177 * (-fp_c5_1._m0[23].x));
    float _251 = _177 * _181;
    float _253 = max(fma(_181, _241, fma(_179, _239, _177 * _237)), fp_c1_1._m0[0].z) * max(fma(_181, _241, fma(_179, _239, _177 * _237)), fp_c1_1._m0[0].z);
    float _255 = clamp(fma(_181, -fp_c5_1._m0[23].z, _249), 0.0, 1.0);
    float _257 = max(fma(_189, _241, fma(_185, _239, _183 * _237)), fp_c1_1._m0[0].z);
    float _259 = (_219 * 0.5) * _219;
    float _261 = max(fma(_181, -fp_c5_1._m0[23].z, _249), fp_c1_1._m0[0].z);
    float _263 = fma(_112, -_118, _112);
    float _265 = 1.0 / (_259 + fma(_203, -_259, _203));
    uint _268 = uint(int(uint((((int(uint(_235) >> uint(16)) * 20) << 16) + (((_235 & 65535) * 20) + max(0, min(int(trunc((_225 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _270 = fp_c10_1._m0[int(uint(int(_268)) >> uint(2))][int(_268) & 3];
    float _272 = fma(_114, -_118, _114);
    float _274 = exp2(_257 * fma(_257, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _276 = fma(_116, -_118, _116);
    float _278 = fma(_177, _177, -(_179 * _179));
    float _280 = fma(_118, _112 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _282 = fma(_118, _114 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _284 = fma(_118, _116 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _286 = (_265 * (1.0 / (_259 + fma(_259, -_261, _261)))) * ((_245 * (1.0 / max(fma(_253, _247, -_253) + 1.0, fp_c1_1._m0[0].z))) * (_245 * (1.0 / max(fma(_253, _247, -_253) + 1.0, fp_c1_1._m0[0].z))));
    float _288 = fma(fma(_282, _209, _211), _213.y, max(0.0, fma(_278, fp_c5_1._m0[31].y, (fma(_181, fp_c5_1._m0[26].z, fma(_179, fp_c5_1._m0[26].y, _177 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_251, fp_c5_1._m0[29].w, fma(_243, fp_c5_1._m0[29].z, fma(_233, fp_c5_1._m0[29].y, _231 * fp_c5_1._m0[29].x))))) * fma(_282, -_272, _272));
    float _290 = fma(fma(_284, _209, _211), _213.z, max(0.0, fma(_278, fp_c5_1._m0[31].z, (fma(_181, fp_c5_1._m0[27].z, fma(_179, fp_c5_1._m0[27].y, _177 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_251, fp_c5_1._m0[30].w, fma(_243, fp_c5_1._m0[30].z, fma(_233, fp_c5_1._m0[30].y, _231 * fp_c5_1._m0[30].x))))) * fma(_284, -_276, _276));
    float _292 = fma(fma(_280, _209, _211), _213.x, max(0.0, fma(_278, fp_c5_1._m0[31].x, (fma(_181, fp_c5_1._m0[25].z, fma(_179, fp_c5_1._m0[25].y, _177 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_251, fp_c5_1._m0[28].w, fma(_243, fp_c5_1._m0[28].z, fma(_233, fp_c5_1._m0[28].y, _231 * fp_c5_1._m0[28].x))))) * fma(_280, -_263, _263));
    float _294 = clamp((-fma(max((-_205.x) + 1.0, (-_205.y) + 1.0), clamp(_81.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_77.x * gl_FragCoord.w) * _187, (_77.y * gl_FragCoord.w) * _187)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _296 = floatBitsToInt(_270);
    float _298 = _288;
    float _300 = _290;
    float _302 = _292;
    float _304 = _292;
    float _306 = _288;
    float _308 = _290;
    if (floatBitsToInt(_270) != (-1))
    {
        int _310 = 0;
        float _314;
        float _316;
        float _318;
        int _402;
        do
        {
            int _312 = _296 & 255;
            _314 = _302;
            _316 = _298;
            _318 = _300;
            _320 = uint(_312) >= 30u;
            if (_320)
            {
                break;
            }
            int _322 = _312 << 4;
            uint _324 = uint(int(uint(_322 + 7360) >> uint(2)));
            int _326 = int(_324) + 1;
            uint _328 = uint(int(uint(_322 + 7368) >> uint(2)));
            float _330 = (-_225) + fp_c10_1._m0[int(uint(int(_324)) >> uint(2))][int(_324) & 3];
            float _332 = fp_c10_1._m0[int(uint(_326) >> uint(2))][_326 & 3] + (-_81.y);
            float _334 = (-_223) + fp_c10_1._m0[int(uint(int(_328)) >> uint(2))][int(_328) & 3];
            float _336 = fma(_334, _334, fma(_332, _332, _330 * _330));
            float _338 = _330 * inversesqrt(_336);
            float _340 = _332 * inversesqrt(_336);
            float _342 = _334 * inversesqrt(_336);
            float _344 = _183 + _338;
            float _346 = _185 + _340;
            float _348 = _189 + _342;
            uint _350 = uint(int(uint(_322 + 6880) >> uint(2)));
            int _352 = int(_350) + 1;
            float _354 = inversesqrt(fma(_348, _348, fma(_346, _346, _344 * _344)));
            float _356 = _344 * _354;
            float _358 = _346 * _354;
            float _360 = _348 * _354;
            uint _362 = uint(int(uint(_322 + 8320) >> uint(2)));
            float _364 = max(fma(_189, _360, fma(_185, _358, _183 * _356)), fp_c1_1._m0[0].z);
            float _366 = fma(_181, _342, fma(_179, _340, _177 * _338));
            float _368 = max(fma(_181, _360, fma(_179, _358, _177 * _356)), fp_c1_1._m0[0].z) * max(fma(_181, _360, fma(_179, _358, _177 * _356)), fp_c1_1._m0[0].z);
            float _370 = max(_366, fp_c1_1._m0[0].z);
            uint _372 = uint(int(uint(_322 + 6408) >> uint(2)));
            uint _374 = uint(int(uint(_322 + 6400) >> uint(2)));
            int _376 = int(_374) + 1;
            float _378 = exp2(_364 * fma(_364, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _380 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3]) != 0;
            float _382 = (_265 * (1.0 / (_259 + fma(_259, -_370, _370)))) * ((_245 * (1.0 / max(fma(_247, _368, -_368) + 1.0, fp_c1_1._m0[0].z))) * (_245 * (1.0 / max(fma(_247, _368, -_368) + 1.0, fp_c1_1._m0[0].z))));
            float _384 = _284 + fma(_284, -_378, _378);
            float _386 = _384;
            if (!_380)
            {
                _386 = 1.0;
            }
            float _388 = _386;
            if (_380)
            {
                uint _390 = uint(int(uint(_322 + 7840) >> uint(2)));
                int _392 = int(_390) + 1;
                uint _394 = uint(int(uint(_322 + 7848) >> uint(2)));
                uint _396 = uint(int(uint(_322 + 6888) >> uint(2)));
                float _398 = fp_c10_1._m0[int(uint(int(_396)) >> uint(2))][int(_396) & 3];
                int _400 = int(_396) + 1;
                _388 = exp2(fp_c10_1._m0[int(uint(_400) >> uint(2))][_400 & 3] * log2(clamp(((-_398) + fma(_342, -fp_c10_1._m0[int(uint(int(_394)) >> uint(2))][int(_394) & 3], fma(_340, -fp_c10_1._m0[int(uint(_392) >> uint(2))][_392 & 3], _338 * (-fp_c10_1._m0[int(uint(int(_390)) >> uint(2))][int(_390) & 3])))) * (1.0 / ((-_398) + 1.0)), 0.0, 1.0)));
            }
            _402 = _310 + 1;
            float _404 = (exp2(fp_c10_1._m0[int(uint(_352) >> uint(2))][_352 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_350)) >> uint(2))][int(_350) & 3], -sqrt(_336), fp_c1_1._m0[1].y), 0.0, 1.0))) * _388) * clamp(_366 + (-0.0), 0.0, 1.0);
            float _406 = fma(fp_c10_1._m0[int(uint(_376) >> uint(2))][_376 & 3] * _404, fma(_272, fp_c1_1._m0[1].z, ((_282 + fma(_282, -_378, _378)) * _382) * 0.079577468335628509521484375), _298);
            float _408 = fma(fp_c10_1._m0[int(uint(int(_372)) >> uint(2))][int(_372) & 3] * _404, fma(_276, fp_c1_1._m0[1].z, (_384 * _382) * 0.079577468335628509521484375), _300);
            float _410 = fma(fp_c10_1._m0[int(uint(int(_374)) >> uint(2))][int(_374) & 3] * _404, fma(_263, fp_c1_1._m0[1].z, ((_280 + fma(_280, -_378, _378)) * _382) * 0.079577468335628509521484375), _302);
            _296 = int(uint(_296) >> uint(8));
            _310 = _402;
            _298 = _406;
            _300 = _408;
            _302 = _410;
            _314 = _410;
            _316 = _406;
            _318 = _408;
        } while (!(_402 >= 4));
        _320 = false;
        _304 = _314;
        _306 = _316;
        _308 = _318;
        if ((_296 & 255) == 30)
        {
            float _412 = _81.y;
            float _414 = 1.0 / (fma(_223, fp_c10_1._m0[565].z, fma(_412, fp_c10_1._m0[565].y, _225 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _416 = 1.0 / fp_c10_1._m0[561].y;
            float _418 = _223 + (-fp_c10_1._m0[557].z);
            float _420 = _418 * fp_c10_1._m0[558].x;
            float _422 = (-_225) + fma(_416, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _424 = (-_223) + fma(_416, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _426 = _422 * _422;
            float _428 = sqrt(fma(_424, _424, _426)) * (-fp_c10_1._m0[558].y);
            float _430 = inversesqrt(fma(_424, _424, fma(_428, _428, _426)));
            float _432 = _422 * _430;
            float _434 = _428 * _430;
            float _436 = _424 * _430;
            float _438 = _183 + _432;
            float _440 = _185 + _434;
            float _442 = _189 + _436;
            float _444 = _225 + (-fp_c10_1._m0[557].x);
            float _446 = fma(_181, _436, fma(_179, _434, _177 * _432));
            float _448 = _444 * fp_c10_1._m0[558].z;
            float _450 = inversesqrt(fma(_442, _442, fma(_440, _440, _438 * _438)));
            float _452 = _438 * _450;
            float _454 = _440 * _450;
            float _456 = _442 * _450;
            float _458 = fma(_418, _418, _444 * _444);
            float _460 = ((-float(_420 < _448)) + float(_420 > _448)) * fp_c10_1._m0[561].y;
            float _462 = inversesqrt(fma(_436, _436, _432 * _432));
            float _464 = fma(_418, fp_c10_1._m0[558].z, _444 * fp_c10_1._m0[558].x);
            float _466 = _418 * inversesqrt(_458);
            bool _468 = _464 > 0.0;
            float _470 = _466;
            if (_468)
            {
                _470 = sqrt(_458);
            }
            float _472 = _470;
            if (!_468)
            {
                _472 = 1.0;
            }
            float _474 = max(_446, fp_c1_1._m0[0].z);
            float _476 = max(fma(_181, _456, fma(_179, _454, _177 * _452)), fp_c1_1._m0[0].z) * max(fma(_181, _456, fma(_179, _454, _177 * _452)), fp_c1_1._m0[0].z);
            float _478 = max(fma(_189, _456, fma(_185, _454, _183 * _452)), fp_c1_1._m0[0].z);
            bool _480 = fma(_466, fp_c10_1._m0[558].z, (_444 * inversesqrt(_458)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _482 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_444, fma(_460, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_418 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_460 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_444, fma(_460, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_418 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_460 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _484 = clamp(fma(_464 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_464 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _486 = _478;
            if (_480)
            {
                _486 = fma(_482, -_482, fp_c1_1._m0[1].y) * fma(_482, -_482, fp_c1_1._m0[1].y);
            }
            float _488 = _486;
            if (!_480)
            {
                _488 = 1.0;
            }
            float _490 = exp2(_478 * fma(_478, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _492 = clamp(_446 + (-0.0), 0.0, 1.0) * ((exp2(log2(clamp(fma(_472, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_436 * _462, -fp_c10_1._m0[558].z, (_432 * _462) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_484, -_484, fp_c1_1._m0[1].y) * fma(_484, -_484, fp_c1_1._m0[1].y), _488));
            float _494 = (_265 * (1.0 / (_259 + fma(_259, -_474, _474)))) * ((_245 * (1.0 / max(fma(_247, _476, -_476) + 1.0, fp_c1_1._m0[0].z))) * (_245 * (1.0 / max(fma(_247, _476, -_476) + 1.0, fp_c1_1._m0[0].z))));
            float _496 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_223, fp_c10_1._m0[562].z, fma(_412, fp_c10_1._m0[562].y, _225 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _414, 0.5, 0.5), (-fma((fma(_223, fp_c10_1._m0[563].z, fma(_412, fp_c10_1._m0[563].y, _225 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _414, 0.5, 0.5)) + 1.0)).z > fma((fma(_223, fp_c10_1._m0[564].z, fma(_412, fp_c10_1._m0[564].y, _225 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _414, 0.5, 0.5)) || (_464 <= 0.0));
            _304 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _492) * fma(_263, fp_c1_1._m0[1].z, ((_280 + fma(_280, -_490, _490)) * _494) * 0.079577468335628509521484375), _496, _314);
            _306 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _492) * fma(_272, fp_c1_1._m0[1].z, ((_282 + fma(_282, -_490, _490)) * _494) * 0.079577468335628509521484375), _496, _316);
            _308 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _492) * fma(_276, fp_c1_1._m0[1].z, ((_284 + fma(_284, -_490, _490)) * _494) * 0.079577468335628509521484375), _496, _318);
        }
    }
    float _498 = _225 + (-fp_c3_1._m0[11].w);
    float _500 = _81.y;
    float _502 = _223 + (-fp_c3_1._m0[13].w);
    float _504 = _500 + (-fp_c3_1._m0[12].w);
    float _506 = fma(_502, _502, fma(_504, _504, _498 * _498));
    float _508 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _510 = fma(clamp(_221 * (fma((-fp_c6_1._m0[12].x) + fp_c6_1._m0[14].x, fp_c7_1._m0[52].w, fp_c6_1._m0[12].x) * _108.x), 0.0, 1.0), _508, fma(_294, fma(_286 * (_280 + fma(_280, -_274, _274)), fp_c1_1._m0[1].x, _263 * 0.3183098733425140380859375) * (_255 * fp_c5_1._m0[5].x), _304));
    float _512 = fma(clamp(_221 * (fma((-fp_c6_1._m0[12].y) + fp_c6_1._m0[14].y, fp_c7_1._m0[52].w, fp_c6_1._m0[12].y) * _108.y), 0.0, 1.0), _508, fma(_294, fma(_286 * (_282 + fma(_282, -_274, _274)), fp_c1_1._m0[1].x, _272 * 0.3183098733425140380859375) * (_255 * fp_c5_1._m0[5].y), _306));
    float _514 = fma(clamp(_221 * (fma((-fp_c6_1._m0[12].z) + fp_c6_1._m0[14].z, fp_c7_1._m0[52].w, fp_c6_1._m0[12].z) * _108.z), 0.0, 1.0), _508, fma(_294, fma(_286 * (_284 + fma(_284, -_274, _274)), fp_c1_1._m0[1].x, _276 * 0.3183098733425140380859375) * (_255 * fp_c5_1._m0[5].z), _308));
    float _516 = exp2(log2(clamp(sqrt(_506) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_502 * inversesqrt(_506), fp_c5_1._m0[23].z, fma(_504 * inversesqrt(_506), fp_c5_1._m0[23].y, (_498 * inversesqrt(_506)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _518 = clamp(fma(_294, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _520 = clamp(fma(fma(_223, fp_c5_1._m0[14].z, fma(_500, fp_c5_1._m0[14].y, _225 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _522 = fma((-_510) + fp_c5_1._m0[13].x, _520, _510);
    float _524 = fma((-_512) + fp_c5_1._m0[13].y, _520, _512);
    float _526 = fma((-_514) + fp_c5_1._m0[13].z, _520, _514);
    float _528 = clamp((-exp2((clamp(fma(sqrt(_506), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _73.x = fma((-_522) + fma(fma(_518 * (_516 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _528, _522);
    _73.y = fma((-_524) + fma(fma(_518 * (_516 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _528, _524);
    _73.z = fma((-_526) + fma(fma(_518 * (_516 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _528, _526);
    _73.w = clamp(_92 + (-0.0), 0.0, 1.0);
}


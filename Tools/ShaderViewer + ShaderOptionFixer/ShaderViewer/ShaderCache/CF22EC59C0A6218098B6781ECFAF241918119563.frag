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
layout(binding = 3) uniform sampler2D fp_tex_tcb_14;
layout(binding = 4) uniform sampler2D fp_tex_tcb_18;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _64;
layout(location = 5) in vec4 _66;
layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 3) in vec4 _76;
layout(location = 0) out vec4 _79;
uint _6[12];

void main()
{
    bool _298 = false;
    float _86 = 1.0 / (_64.z * gl_FragCoord.w);
    float _88 = _68.x;
    float _90 = _68.y;
    float _92 = 1.0 / _66.w;
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _98 = _96.x;
    float _100 = _96.y;
    vec2 _102 = texture(fp_tex_tcb_2A, vec2(fma(_66.x * _92, 0.5, 0.5), fma(_66.y * _92, -0.5, 0.5))).xy;
    vec3 _106 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _108 = _106.x;
    float _110 = _106.y;
    float _112 = _106.z;
    float _114 = _70.x;
    float _116 = _70.y;
    float _118 = _70.z;
    float _120 = _72.z;
    float _122 = _72.x;
    float _124 = _72.y;
    float _126 = _72.w;
    float _128 = _74.x;
    float _130 = _74.y;
    float _132 = _74.z;
    float _134 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _136 = _114 * _134;
    float _138 = _118 * _134;
    float _140 = _116 * _134;
    float _142 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _144 = fma(_136, _142, fma(_98, _122, _100 * (fma(_140, _120, -(_138 * _124)) * _126)));
    float _146 = fma(_140, _142, fma(_98, _124, _100 * (fma(_138, _122, -(_136 * _120)) * _126)));
    float _148 = fma(_138, _142, fma(_98, _120, _100 * (fma(_136, _124, -(_140 * _122)) * _126)));
    float _150 = inversesqrt(fma(_132, _132, fma(_130, _130, _128 * _128)));
    float _152 = _128 * (-_150);
    float _154 = inversesqrt(fma(_148, _148, fma(_146, _146, _144 * _144)));
    float _156 = _130 * (-_150);
    float _158 = _132 * (-_150);
    float _160 = _144 * _154;
    float _162 = _146 * _154;
    float _164 = _148 * _154;
    float _166 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _168 = fma(_164, _158, fma(_162, _156, _160 * _152));
    float _170 = max(_168, fp_c1_1._m0[0].y);
    float _172 = fma(_160 * (-_168), -2.0, -_152);
    float _174 = fma(_162 * (-_168), -2.0, -_156);
    float _176 = fma(_164 * (-_168), -2.0, -_158);
    float _178 = _152 + (-fp_c5_1._m0[23].x);
    float _180 = 1.0 / max(abs(_176), max(abs(_172), abs(_174)));
    vec2 _182 = texture(fp_tex_tcb_38, vec2(_170, (-_166) + (-0.0))).xy;
    float _184 = _182.x;
    float _186 = _182.y;
    vec3 _188 = texture(fp_tex_tcb_36, vec4(_172 * _180, _174 * _180, _176 * _180, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_166 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _190 = texture(fp_tex_tcb_14, vec2(_88, _90)).xyz;
    float _192 = _156 + (-fp_c5_1._m0[23].y);
    float _194 = _76.z;
    float _196 = _158 + (-fp_c5_1._m0[23].z);
    float _198 = _164 * _164;
    float _200 = _76.x;
    float _202 = _160 * _162;
    float _204 = inversesqrt(fma(_196, _196, fma(_192, _192, _178 * _178)));
    float _206 = _162 * _164;
    float _208 = _178 * _204;
    float _210 = _192 * _204;
    float _212 = _196 * _204;
    float _214 = _160 * _164;
    float _216 = fma(_160, _160, -(_162 * _162));
    float _218 = _166 * _166;
    int _221 = max(0, min(int(trunc((_194 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _223 = fma(_162, -fp_c5_1._m0[23].y, _160 * (-fp_c5_1._m0[23].x));
    float _225 = max(fma(_164, _212, fma(_162, _210, _160 * _208)), fp_c1_1._m0[0].y) * max(fma(_164, _212, fma(_162, _210, _160 * _208)), fp_c1_1._m0[0].y);
    float _227 = _218 * _218;
    float _229 = fma(_166, 0.5, 0.5);
    float _231 = (_229 * 0.5) * _229;
    float _233 = max(fma(_164, -fp_c5_1._m0[23].z, _223), fp_c1_1._m0[0].y);
    uint _236 = uint(int(uint((((int(uint(_221) >> uint(16)) * 20) << 16) + (((_221 & 65535) * 20) + max(0, min(int(trunc((_200 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _238 = fp_c10_1._m0[int(uint(int(_236)) >> uint(2))][int(_236) & 3];
    float _240 = max(fma(_158, _212, fma(_156, _210, _152 * _208)), fp_c1_1._m0[0].y);
    float _242 = 1.0 / (_231 + fma(_170, -_231, _170));
    float _244 = fma(_112, -fp_c6_1._m0[9].x, _112);
    float _246 = fma(_110, -fp_c6_1._m0[9].x, _110);
    float _248 = exp2(_240 * fma(_240, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _250 = fma(_108 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _252 = fma(_110 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _254 = clamp((-fma(max((-_102.x) + 1.0, (-_102.y) + 1.0), clamp(_76.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_64.x * gl_FragCoord.w) * _86, (_64.y * gl_FragCoord.w) * _86)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _256 = (_242 * (1.0 / (_231 + fma(_231, -_233, _233)))) * ((_218 * (1.0 / max(fma(_225, _227, -_225) + 1.0, fp_c1_1._m0[0].y))) * (_218 * (1.0 / max(fma(_225, _227, -_225) + 1.0, fp_c1_1._m0[0].y))));
    float _258 = fma(_112 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _260 = fma(_108, -fp_c6_1._m0[9].x, _108);
    float _262 = fma(_188.x, fma(_250, _184, _186), max(0.0, fma(_216, fp_c5_1._m0[31].x, (fma(_164, fp_c5_1._m0[25].z, fma(_162, fp_c5_1._m0[25].y, _160 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_214, fp_c5_1._m0[28].w, fma(_198, fp_c5_1._m0[28].z, fma(_206, fp_c5_1._m0[28].y, _202 * fp_c5_1._m0[28].x))))) * fma(_260, -_250, _260));
    float _264 = clamp(fma(_164, -fp_c5_1._m0[23].z, _223), 0.0, 1.0);
    float _266 = fma(_188.y, fma(_252, _184, _186), max(0.0, fma(_216, fp_c5_1._m0[31].y, (fma(_164, fp_c5_1._m0[26].z, fma(_162, fp_c5_1._m0[26].y, _160 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_214, fp_c5_1._m0[29].w, fma(_198, fp_c5_1._m0[29].z, fma(_206, fp_c5_1._m0[29].y, _202 * fp_c5_1._m0[29].x))))) * fma(_246, -_252, _246));
    float _268 = fma(_188.z, fma(_258, _184, _186), max(0.0, fma(_216, fp_c5_1._m0[31].z, (fma(_164, fp_c5_1._m0[27].z, fma(_162, fp_c5_1._m0[27].y, _160 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_214, fp_c5_1._m0[30].w, fma(_198, fp_c5_1._m0[30].z, fma(_206, fp_c5_1._m0[30].y, _202 * fp_c5_1._m0[30].x))))) * fma(_244, -_258, _244));
    float _270 = clamp(texture(fp_tex_tcb_18, vec2(_88, _90)).x + (-0.0), 0.0, 1.0);
    int _272 = floatBitsToInt(_238);
    float _274 = _266;
    float _276 = _268;
    float _278 = _262;
    float _280 = _262;
    float _282 = _268;
    float _284 = _266;
    if (floatBitsToInt(_238) != (-1))
    {
        int _286 = 0;
        float _290;
        float _292;
        float _294;
        int _380;
        do
        {
            int _288 = _272 & 255;
            _290 = _278;
            _292 = _274;
            _294 = _276;
            _298 = uint(_288) >= 30u;
            if (_298)
            {
                break;
            }
            int _300 = _288 << 4;
            uint _302 = uint(int(uint(_300 + 7360) >> uint(2)));
            int _304 = int(_302) + 1;
            uint _306 = uint(int(uint(_300 + 7368) >> uint(2)));
            float _308 = (-_200) + fp_c10_1._m0[int(uint(int(_302)) >> uint(2))][int(_302) & 3];
            float _310 = fp_c10_1._m0[int(uint(_304) >> uint(2))][_304 & 3] + (-_76.y);
            float _312 = (-_194) + fp_c10_1._m0[int(uint(int(_306)) >> uint(2))][int(_306) & 3];
            float _314 = fma(_312, _312, fma(_310, _310, _308 * _308));
            float _316 = _308 * inversesqrt(_314);
            float _318 = _310 * inversesqrt(_314);
            float _320 = _312 * inversesqrt(_314);
            float _322 = _152 + _316;
            float _324 = _156 + _318;
            float _326 = _158 + _320;
            uint _328 = uint(int(uint(_300 + 6880) >> uint(2)));
            int _330 = int(_328) + 1;
            float _332 = inversesqrt(fma(_326, _326, fma(_324, _324, _322 * _322)));
            float _334 = _322 * _332;
            float _336 = _324 * _332;
            float _338 = _326 * _332;
            uint _340 = uint(int(uint(_300 + 8320) >> uint(2)));
            uint _342 = uint(int(uint(_300 + 6408) >> uint(2)));
            float _344 = max(fma(_158, _338, fma(_156, _336, _152 * _334)), fp_c1_1._m0[0].y);
            float _346 = fma(_164, _320, fma(_162, _318, _160 * _316));
            float _348 = max(fma(_164, _338, fma(_162, _336, _160 * _334)), fp_c1_1._m0[0].y) * max(fma(_164, _338, fma(_162, _336, _160 * _334)), fp_c1_1._m0[0].y);
            float _350 = max(_346, fp_c1_1._m0[0].y);
            uint _352 = uint(int(uint(_300 + 6400) >> uint(2)));
            int _354 = int(_352) + 1;
            float _356 = exp2(_344 * fma(_344, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _358 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_340)) >> uint(2))][int(_340) & 3]) != 0;
            float _360 = (_242 * (1.0 / (_231 + fma(_231, -_350, _350)))) * ((_218 * (1.0 / max(fma(_227, _348, -_348) + 1.0, fp_c1_1._m0[0].y))) * (_218 * (1.0 / max(fma(_227, _348, -_348) + 1.0, fp_c1_1._m0[0].y))));
            float _362 = _252 + fma(_252, -_356, _356);
            float _364 = _362;
            if (!_358)
            {
                _364 = 1.0;
            }
            float _366 = _364;
            if (_358)
            {
                uint _368 = uint(int(uint(_300 + 7840) >> uint(2)));
                int _370 = int(_368) + 1;
                uint _372 = uint(int(uint(_300 + 6888) >> uint(2)));
                float _374 = fp_c10_1._m0[int(uint(int(_372)) >> uint(2))][int(_372) & 3];
                int _376 = int(_372) + 1;
                uint _378 = uint(int(uint(_300 + 7848) >> uint(2)));
                _366 = exp2(fp_c10_1._m0[int(uint(_376) >> uint(2))][_376 & 3] * log2(clamp(((-_374) + fma(_320, -fp_c10_1._m0[int(uint(int(_378)) >> uint(2))][int(_378) & 3], fma(_318, -fp_c10_1._m0[int(uint(_370) >> uint(2))][_370 & 3], _316 * (-fp_c10_1._m0[int(uint(int(_368)) >> uint(2))][int(_368) & 3])))) * (1.0 / ((-_374) + 1.0)), 0.0, 1.0)));
            }
            _380 = _286 + 1;
            float _382 = (exp2(fp_c10_1._m0[int(uint(_330) >> uint(2))][_330 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_328)) >> uint(2))][int(_328) & 3], -sqrt(_314), fp_c1_1._m0[1].x), 0.0, 1.0))) * _366) * clamp(_346 + (-0.0), 0.0, 1.0);
            float _384 = fma(fp_c10_1._m0[int(uint(_354) >> uint(2))][_354 & 3] * _382, fma(_246, fp_c1_1._m0[1].y, (_362 * _360) * 0.079577468335628509521484375), _274);
            float _386 = fma(fp_c10_1._m0[int(uint(int(_342)) >> uint(2))][int(_342) & 3] * _382, fma(_244, fp_c1_1._m0[1].y, ((_258 + fma(_258, -_356, _356)) * _360) * 0.079577468335628509521484375), _276);
            float _388 = fma(fp_c10_1._m0[int(uint(int(_352)) >> uint(2))][int(_352) & 3] * _382, fma(_260, fp_c1_1._m0[1].y, ((_250 + fma(_250, -_356, _356)) * _360) * 0.079577468335628509521484375), _278);
            _272 = int(uint(_272) >> uint(8));
            _286 = _380;
            _274 = _384;
            _276 = _386;
            _278 = _388;
            _290 = _388;
            _292 = _384;
            _294 = _386;
        } while (!(_380 >= 4));
        _298 = false;
        _280 = _290;
        _282 = _294;
        _284 = _292;
        if ((_272 & 255) == 30)
        {
            float _390 = _76.y;
            float _392 = 1.0 / (fma(_194, fp_c10_1._m0[565].z, fma(_390, fp_c10_1._m0[565].y, _200 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _394 = 1.0 / fp_c10_1._m0[561].y;
            float _396 = (-_200) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_394, fp_c10_1._m0[557].x);
            float _398 = (-_194) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_394, fp_c10_1._m0[557].z);
            float _400 = _396 * _396;
            float _402 = sqrt(fma(_398, _398, _400)) * (-fp_c10_1._m0[558].y);
            float _404 = _194 + (-fp_c10_1._m0[557].z);
            float _406 = _404 * fp_c10_1._m0[558].x;
            float _408 = inversesqrt(fma(_398, _398, fma(_402, _402, _400)));
            float _410 = _396 * _408;
            float _412 = _402 * _408;
            float _414 = _398 * _408;
            float _416 = _152 + _410;
            float _418 = _156 + _412;
            float _420 = _158 + _414;
            float _422 = _200 + (-fp_c10_1._m0[557].x);
            float _424 = _422 * fp_c10_1._m0[558].z;
            float _426 = inversesqrt(fma(_420, _420, fma(_418, _418, _416 * _416)));
            float _428 = _416 * _426;
            float _430 = _418 * _426;
            float _432 = _420 * _426;
            float _434 = fma(_404, _404, _422 * _422);
            float _436 = ((-float(_406 < _424)) + float(_406 > _424)) * fp_c10_1._m0[561].y;
            float _438 = inversesqrt(fma(_414, _414, _410 * _410));
            float _440 = fma(_404, fp_c10_1._m0[558].z, _422 * fp_c10_1._m0[558].x);
            float _442 = fma(_164, _414, fma(_162, _412, _160 * _410));
            bool _444 = _440 > 0.0;
            float _446 = fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_436 * fp_c10_1._m0[558].z));
            float _448 = _446;
            if (_444)
            {
                _448 = sqrt(_434);
            }
            float _450 = _448;
            if (!_444)
            {
                _450 = 1.0;
            }
            float _452 = max(fma(_164, _432, fma(_162, _430, _160 * _428)), fp_c1_1._m0[0].y) * max(fma(_164, _432, fma(_162, _430, _160 * _428)), fp_c1_1._m0[0].y);
            float _454 = max(fma(_158, _432, fma(_156, _430, _152 * _428)), fp_c1_1._m0[0].y);
            float _456 = max(_442, fp_c1_1._m0[0].y);
            bool _458 = fma(_404 * inversesqrt(_434), fp_c10_1._m0[558].z, (_422 * inversesqrt(_434)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _460 = clamp(fma(_440 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_440 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _462 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_422, fma(_436, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_404 * _446))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_422, fma(_436, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_404 * _446))) + (-0.0)), 0.0, 1.0);
            float _464 = _454;
            if (!_458)
            {
                _464 = 1.0;
            }
            float _466 = exp2(_454 * fma(_454, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _468 = _464;
            if (_458)
            {
                _468 = fma(_462, -_462, fp_c1_1._m0[1].x) * fma(_462, -_462, fp_c1_1._m0[1].x);
            }
            float _470 = (_242 * (1.0 / (_231 + fma(_231, -_456, _456)))) * ((_218 * (1.0 / max(fma(_227, _452, -_452) + 1.0, fp_c1_1._m0[0].y))) * (_218 * (1.0 / max(fma(_227, _452, -_452) + 1.0, fp_c1_1._m0[0].y))));
            float _472 = (min(fma(_460, -_460, fp_c1_1._m0[1].x) * fma(_460, -_460, fp_c1_1._m0[1].x), _468) * (exp2(log2(clamp(fma(_450, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_414 * _438, -fp_c10_1._m0[558].z, (_410 * _438) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_442 + (-0.0), 0.0, 1.0);
            float _474 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_194, fp_c10_1._m0[562].z, fma(_390, fp_c10_1._m0[562].y, _200 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _392, 0.5, 0.5), (-fma((fma(_194, fp_c10_1._m0[563].z, fma(_390, fp_c10_1._m0[563].y, _200 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _392, 0.5, 0.5)) + 1.0)).z > fma((fma(_194, fp_c10_1._m0[564].z, fma(_390, fp_c10_1._m0[564].y, _200 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _392, 0.5, 0.5)) || (_440 <= 0.0));
            _280 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _472) * fma(_260, fp_c1_1._m0[1].y, ((_250 + fma(_250, -_466, _466)) * _470) * 0.079577468335628509521484375), _474, _290);
            _282 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _472) * fma(_244, fp_c1_1._m0[1].y, ((_258 + fma(_258, -_466, _466)) * _470) * 0.079577468335628509521484375), _474, _294);
            _284 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _472) * fma(_246, fp_c1_1._m0[1].y, ((_252 + fma(_252, -_466, _466)) * _470) * 0.079577468335628509521484375), _474, _292);
        }
    }
    float _476 = _200 + (-fp_c3_1._m0[11].w);
    float _478 = _76.y;
    float _480 = _194 + (-fp_c3_1._m0[13].w);
    float _482 = _478 + (-fp_c3_1._m0[12].w);
    float _484 = fma(_480, _480, fma(_482, _482, _476 * _476));
    float _486 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _488 = fma(_108 * _190.x, _486, fma(_270, _280, _254 * (fma((_250 + fma(_250, -_248, _248)) * _256, fp_c1_1._m0[0].w, _260 * 0.3183098733425140380859375) * (_264 * fp_c5_1._m0[5].x))));
    float _490 = clamp(fma(_270 * _254, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _492 = fma(_112 * _190.z, _486, fma(_270, _282, _254 * (fma((_258 + fma(_258, -_248, _248)) * _256, fp_c1_1._m0[0].w, _244 * 0.3183098733425140380859375) * (_264 * fp_c5_1._m0[5].z))));
    float _494 = fma(_110 * _190.y, _486, fma(_270, _284, _254 * (fma((_252 + fma(_252, -_248, _248)) * _256, fp_c1_1._m0[0].w, _246 * 0.3183098733425140380859375) * (_264 * fp_c5_1._m0[5].y))));
    float _496 = exp2(log2(clamp(sqrt(_484) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_480 * inversesqrt(_484), fp_c5_1._m0[23].z, fma(_482 * inversesqrt(_484), fp_c5_1._m0[23].y, (_476 * inversesqrt(_484)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _498 = clamp(fma(fma(_194, fp_c5_1._m0[14].z, fma(_478, fp_c5_1._m0[14].y, _200 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _500 = fma((-_488) + fp_c5_1._m0[13].x, _498, _488);
    float _502 = fma((-_494) + fp_c5_1._m0[13].y, _498, _494);
    float _504 = fma((-_492) + fp_c5_1._m0[13].z, _498, _492);
    float _506 = clamp((-exp2((clamp(fma(sqrt(_484), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_500) + fma(fma((_496 * fp_c7_1._m0[55].x) * _490, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _506, _500);
    _79.y = fma((-_502) + fma(fma((_496 * fp_c7_1._m0[55].y) * _490, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _506, _502);
    _79.z = fma((-_504) + fma(fma((_496 * fp_c7_1._m0[55].z) * _490, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _506, _504);
    _79.w = 1.0;
}


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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_16;
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
layout(binding = 6) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 7) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 8) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 9) uniform sampler2D fp_tex_tcb_28;
layout(binding = 10) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 11) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 12) uniform sampler2D fp_tex_tcb_38;
layout(binding = 13) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _74;
layout(location = 1) in vec4 _76;
layout(location = 2) in vec4 _78;
layout(location = 4) in vec4 _80;
layout(location = 6) in vec4 _82;
layout(location = 5) in vec4 _84;
layout(location = 3) in vec4 _86;
layout(location = 0) out vec4 _89;
uint _6[12];

void main()
{
    bool _356 = false;
    float _96 = _74.x;
    float _98 = _74.y;
    vec2 _102 = texture(fp_tex_tcb_E, vec2(_96, _98)).xy;
    float _104 = _102.x;
    float _106 = _102.y;
    float _108 = _76.x;
    float _110 = _76.y;
    float _112 = _76.z;
    float _114 = _78.y;
    float _116 = _78.z;
    float _118 = _78.x;
    float _120 = _78.w;
    float _122 = _80.x;
    float _124 = _80.y;
    float _126 = _80.z;
    float _128 = 1.0 / (_82.z * gl_FragCoord.w);
    float _130 = inversesqrt(fma(_112, _112, fma(_110, _110, _108 * _108)));
    float _132 = _112 * _130;
    float _134 = _108 * _130;
    float _136 = _110 * _130;
    float _138 = sqrt(clamp((-fma(_104, _104, _106 * _106)) + 1.0, 0.0, 1.0));
    float _140 = fma(_134, _138, fma(_104, _118, _106 * (fma(_136, _116, -(_132 * _114)) * _120)));
    float _142 = fma(_136, _138, fma(_104, _114, _106 * (fma(_132, _118, -(_134 * _116)) * _120)));
    float _144 = fma(_132, _138, fma(_104, _116, _106 * (fma(_134, _114, -(_136 * _118)) * _120)));
    float _146 = inversesqrt(fma(_126, _126, fma(_124, _124, _122 * _122)));
    float _148 = inversesqrt(fma(_144, _144, fma(_142, _142, _140 * _140)));
    float _150 = _122 * (-_146);
    float _152 = 1.0 / _84.w;
    float _154 = _124 * (-_146);
    float _156 = _126 * (-_146);
    float _158 = _140 * _148;
    float _160 = _142 * _148;
    float _162 = _144 * _148;
    float _164 = fma(_154, _160, _150 * _158);
    float _166 = fma(_156, -_162, fma(_154, -_160, _150 * (-_158)));
    float _168 = fma(_156, _162, _164);
    float _170 = fma(_160 * (-_168), -2.0, -_154);
    float _172 = fma(_158 * (-_168), -2.0, -_150);
    float _174 = fma(_162 * (-_168), -2.0, -_156);
    float _176 = max(texture(fp_tex_tcb_10, vec2(_96, _98)).x, fp_c1_1._m0[0].x);
    float _178 = 1.0 / max(abs(_174), max(abs(_172), abs(_170)));
    float _180 = max(fma(_156, fma(_162 * _166, -2.0, -_156), fma(_154, fma(_160 * _166, -2.0, -_154), _150 * fma(_158 * _166, -2.0, -_150))), fp_c1_1._m0[0].z);
    vec2 _182 = texture(fp_tex_tcb_2A, vec2(fma(_84.x * _152, 0.5, 0.5), fma(_84.y * _152, -0.5, 0.5))).xy;
    vec3 _186 = texture(fp_tex_tcb_A, vec2(_96, _98)).xyz;
    float _188 = _186.x;
    float _190 = _186.y;
    float _192 = _186.z;
    float _194 = max(_168, fp_c1_1._m0[0].z);
    vec3 _196 = texture(fp_tex_tcb_1C, vec2(clamp(fma(_156, _162, _164), 0.0, 1.0), clamp(fma(_156, _162, _164), 0.0, 1.0))).xyz;
    vec2 _198 = texture(fp_tex_tcb_38, vec2(_194, (-_176) + (-0.0))).xy;
    float _200 = _198.x;
    float _202 = _198.y;
    vec3 _204 = texture(fp_tex_tcb_1E, vec2(fma(_180, fp_c6_1._m0[50].x, _74.z), _74.w)).xyz;
    vec3 _206 = texture(fp_tex_tcb_36, vec4(_172 * _178, _170 * _178, _174 * _178, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_176 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _208 = texture(fp_tex_tcb_1A, vec2(_96, _98)).x;
    vec3 _210 = texture(fp_tex_tcb_16, vec2(_96, _98)).xyz;
    float _212 = _86.y;
    float _214 = _158 * _160;
    float _216 = _160 * _162;
    float _218 = _162 * _162;
    float _220 = _158 * _162;
    float _222 = fma(_158, _158, -(_160 * _160));
    float _224 = _212 + (-fp_c9_1._m0[32].w);
    float _226 = _224;
    if (_212 < fp_c9_1._m0[32].w)
    {
        _226 = _224 * (-5.0);
    }
    float _228 = max(0.0, ((-_160) + 1.2000000476837158203125) * (clamp(fma(_226, -(1.0 / fma(clamp((-_160) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].y), 0.0, 1.0) * clamp(fma(_226, -(1.0 / fma(clamp((-_160) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].y), 0.0, 1.0))) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w);
    float _230 = _154 + (-fp_c5_1._m0[23].y);
    float _232 = _150 + (-fp_c5_1._m0[23].x);
    float _234 = _86.x;
    float _236 = _156 + (-fp_c5_1._m0[23].z);
    float _238 = _86.z;
    float _240 = inversesqrt(fma(_236, _236, fma(_230, _230, _232 * _232)));
    float _242 = clamp(_86.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _244 = _232 * _240;
    float _246 = _236 * _240;
    float _248 = (-_182.y) + 1.0;
    float _250 = clamp(texture(fp_tex_tcb_C, vec2(_96, _98)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _252 = _230 * _240;
    float _254 = _248 * _242;
    float _256 = clamp((-fma(max((-_182.x) + 1.0, _248), _242, fma(texture(fp_tex_tcb_28, vec2((_82.x * gl_FragCoord.w) * _128, (_82.y * gl_FragCoord.w) * _128)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _258 = _196.y + fma((-_190) + fp_c6_1._m0[92].y, _250, _190);
    float _260 = _196.z + fma((-_192) + fp_c6_1._m0[92].z, _250, _192);
    float _262 = _176 * _176;
    float _264 = _196.x + fma((-_188) + fp_c6_1._m0[92].x, _250, _188);
    float _266 = fma(_176, 0.5, 0.5);
    float _268 = _262 * _262;
    float _270 = max(fma(_162, _246, fma(_160, _252, _158 * _244)), fp_c1_1._m0[0].z) * max(fma(_162, _246, fma(_160, _252, _158 * _244)), fp_c1_1._m0[0].z);
    float _272 = fma(_162, -fp_c5_1._m0[23].z, fma(_160, -fp_c5_1._m0[23].y, _158 * (-fp_c5_1._m0[23].x)));
    float _274 = (_266 * 0.5) * _266;
    float _276 = max(fma(_156, _246, fma(_154, _252, _150 * _244)), fp_c1_1._m0[0].z);
    int _279 = max(0, min(int(trunc((_238 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _281 = max(_272, fp_c1_1._m0[0].z);
    float _283 = exp2(_276 * fma(_276, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _285 = fma(_264 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _287 = fma(_260 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    uint _290 = uint(int(uint((((int(uint(_279) >> uint(16)) * 20) << 16) + (((_279 & 65535) * 20) + max(0, min(int(trunc((_234 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _292 = fp_c10_1._m0[int(uint(int(_290)) >> uint(2))][int(_290) & 3];
    float _294 = fma(_258 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _296 = clamp(texture(fp_tex_tcb_18, vec2(_96, _98)).x + (-0.0), 0.0, 1.0);
    float _298 = _210.z * fp_c6_1._m0[19].z;
    float _300 = ((1.0 / (_274 + fma(_274, -_194, _194))) * (1.0 / (_274 + fma(_274, -_281, _281)))) * ((_262 * (1.0 / max(fma(_270, _268, -_270) + 1.0, fp_c1_1._m0[0].z))) * (_262 * (1.0 / max(fma(_270, _268, -_270) + 1.0, fp_c1_1._m0[0].z))));
    float _302 = exp2(_180 * fma(_180, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _304 = fma(_264, -fp_c6_1._m0[9].x, _264);
    float _306 = fma(_258, -fp_c6_1._m0[9].x, _258);
    float _308 = fma(_260, -fp_c6_1._m0[9].x, _260);
    float _310 = clamp(_272 + (-0.0), 0.0, 1.0);
    float _312 = fma(fma(_228, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_222, fp_c5_1._m0[31].y, (fma(_162, fp_c5_1._m0[26].z, fma(_160, fp_c5_1._m0[26].y, _158 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_220, fp_c5_1._m0[29].w, fma(_218, fp_c5_1._m0[29].z, fma(_216, fp_c5_1._m0[29].y, _214 * fp_c5_1._m0[29].x)))))), fma(_306, -_294, _306), fma(_208, (_294 + fma(_294, -_302, _302)) * (_258 * (_204.y * fp_c6_1._m0[49].w)), fma(_294, _200, _202) * _206.y));
    float _314 = fma(fma(_228, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_222, fp_c5_1._m0[31].x, (fma(_162, fp_c5_1._m0[25].z, fma(_160, fp_c5_1._m0[25].y, _158 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_220, fp_c5_1._m0[28].w, fma(_218, fp_c5_1._m0[28].z, fma(_216, fp_c5_1._m0[28].y, _214 * fp_c5_1._m0[28].x)))))), fma(_304, -_285, _304), fma(_208, (_285 + fma(_285, -_302, _302)) * (_264 * (_204.x * fp_c6_1._m0[49].w)), fma(_285, _200, _202) * _206.x));
    float _316 = fma(fma(_228, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_222, fp_c5_1._m0[31].z, (fma(_162, fp_c5_1._m0[27].z, fma(_160, fp_c5_1._m0[27].y, _158 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_220, fp_c5_1._m0[30].w, fma(_218, fp_c5_1._m0[30].z, fma(_216, fp_c5_1._m0[30].y, _214 * fp_c5_1._m0[30].x)))))), fma(_308, -_287, _308), fma(_208, (_287 + fma(_287, -_302, _302)) * (_260 * (_204.z * fp_c6_1._m0[49].w)), fma(_287, _200, _202) * _206.z));
    float _318 = _210.x * fp_c6_1._m0[19].x;
    float _320 = _210.y * fp_c6_1._m0[19].y;
    int _322 = floatBitsToInt(_292);
    float _324 = _314;
    float _326 = _312;
    float _328 = _316;
    float _330 = _314;
    float _332 = _312;
    float _334 = _316;
    if (floatBitsToInt(_292) != (-1))
    {
        float _336 = 1.0 / fp_c6_1._m0[18].x;
        float _338 = clamp(fma(_254, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _340 = clamp(1.0 + (-fp_c6_1._m0[17].w), 0.0, 1.0);
        float _342 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
        int _344 = 0;
        float _348;
        float _350;
        float _352;
        int _442;
        do
        {
            int _346 = _322 & 255;
            _348 = _324;
            _350 = _326;
            _352 = _328;
            _356 = uint(_346) >= 30u;
            if (_356)
            {
                break;
            }
            int _358 = _346 << 4;
            uint _360 = uint(int(uint(_358 + 7360) >> uint(2)));
            int _362 = int(_360) + 1;
            uint _364 = uint(int(uint(_358 + 7368) >> uint(2)));
            float _366 = (-_234) + fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3];
            float _368 = (-_212) + fp_c10_1._m0[int(uint(_362) >> uint(2))][_362 & 3];
            float _370 = (-_238) + fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3];
            float _372 = fma(_370, _370, fma(_368, _368, _366 * _366));
            float _374 = _366 * inversesqrt(_372);
            float _376 = _368 * inversesqrt(_372);
            float _378 = _370 * inversesqrt(_372);
            float _380 = _150 + _374;
            float _382 = _154 + _376;
            float _384 = _156 + _378;
            uint _386 = uint(int(uint(_358 + 6880) >> uint(2)));
            int _388 = int(_386) + 1;
            float _390 = inversesqrt(fma(_384, _384, fma(_382, _382, _380 * _380)));
            uint _392 = uint(int(uint(_358 + 8320) >> uint(2)));
            float _394 = _380 * _390;
            float _396 = _382 * _390;
            float _398 = _384 * _390;
            float _400 = fma(_162, _378, fma(_160, _376, _158 * _374));
            float _402 = max(fma(_156, _398, fma(_154, _396, _150 * _394)), fp_c1_1._m0[0].z);
            float _404 = max(fma(_162, _398, fma(_160, _396, _158 * _394)), fp_c1_1._m0[0].z) * max(fma(_162, _398, fma(_160, _396, _158 * _394)), fp_c1_1._m0[0].z);
            float _406 = max(_400, fp_c1_1._m0[0].z);
            uint _408 = uint(int(uint(_358 + 6400) >> uint(2)));
            int _410 = int(_408) + 1;
            float _412 = exp2(_402 * fma(_402, fp_c1_1._m0[0].w, -6.9831600189208984375));
            uint _414 = uint(int(uint(_358 + 6408) >> uint(2)));
            int _416 = int(_414) + 1;
            bool _418 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3]) != 0;
            float _420 = ((1.0 / (_274 + fma(_274, -_194, _194))) * (1.0 / (_274 + fma(_274, -_406, _406)))) * ((_262 * (1.0 / max(fma(_268, _404, -_404) + 1.0, fp_c1_1._m0[0].z))) * (_262 * (1.0 / max(fma(_268, _404, -_404) + 1.0, fp_c1_1._m0[0].z))));
            float _422 = (_285 + fma(_285, -_412, _412)) * _420;
            float _424 = _422;
            if (!_418)
            {
                _424 = 1.0;
            }
            float _426 = _424;
            if (_418)
            {
                uint _428 = uint(int(uint(_358 + 7840) >> uint(2)));
                int _430 = int(_428) + 1;
                uint _432 = uint(int(uint(_358 + 7848) >> uint(2)));
                uint _434 = uint(int(uint(_358 + 6888) >> uint(2)));
                float _436 = fp_c10_1._m0[int(uint(int(_434)) >> uint(2))][int(_434) & 3];
                int _438 = int(_434) + 1;
                _426 = exp2(fp_c10_1._m0[int(uint(_438) >> uint(2))][_438 & 3] * log2(clamp(((-_436) + fma(_378, -fp_c10_1._m0[int(uint(int(_432)) >> uint(2))][int(_432) & 3], fma(_376, -fp_c10_1._m0[int(uint(_430) >> uint(2))][_430 & 3], _374 * (-fp_c10_1._m0[int(uint(int(_428)) >> uint(2))][int(_428) & 3])))) * (1.0 / ((-_436) + 1.0)), 0.0, 1.0)));
            }
            float _440 = exp2(fp_c10_1._m0[int(uint(_388) >> uint(2))][_388 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_386)) >> uint(2))][int(_386) & 3], -sqrt(_372), fp_c1_1._m0[0].y), 0.0, 1.0))) * _426;
            _442 = _344 + 1;
            float _444 = fp_c10_1._m0[int(uint(_416) >> uint(2))][_416 & 3] * _440;
            float _446 = _440 * clamp(_400 + (-0.0), 0.0, 1.0);
            float _448 = exp2(log2(clamp(fma(_168, -clamp((-_400) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].y), 0.0, 1.0)) * fp_c6_1._m0[18].y) * (fma(_342, fp_c1_1._m0[1].w, exp2(_336 * log2(clamp(max(fma(_156, -_378, fma(_154, -_376, _150 * (-_374))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0))) * _342) + 0.20000000298023223876953125);
            float _450 = _324 + fma((fp_c10_1._m0[int(uint(int(_408)) >> uint(2))][int(_408) & 3] * _446) * fma(_304, fp_c1_1._m0[1].y, _422 * 0.079577468335628509521484375), _340, _338 * ((_448 * (_318 * _444)) * fp_c6_1._m0[17].w));
            float _452 = _326 + fma((fp_c10_1._m0[int(uint(_410) >> uint(2))][_410 & 3] * _446) * fma(_306, fp_c1_1._m0[1].y, ((_294 + fma(_294, -_412, _412)) * _420) * 0.079577468335628509521484375), _340, _338 * ((_448 * (_320 * _444)) * fp_c6_1._m0[17].w));
            float _454 = _328 + fma((fp_c10_1._m0[int(uint(int(_414)) >> uint(2))][int(_414) & 3] * _446) * fma(_308, fp_c1_1._m0[1].y, ((_287 + fma(_287, -_412, _412)) * _420) * 0.079577468335628509521484375), _340, _338 * ((_448 * (_298 * _444)) * fp_c6_1._m0[17].w));
            _322 = int(uint(_322) >> uint(8));
            _344 = _442;
            _324 = _450;
            _326 = _452;
            _328 = _454;
            _348 = _450;
            _350 = _452;
            _352 = _454;
        } while (!(_442 >= 4));
        _356 = false;
        _330 = _348;
        _332 = _350;
        _334 = _352;
        if ((_322 & 255) == 30)
        {
            float _456 = 1.0 / (fma(_238, fp_c10_1._m0[565].z, fma(_212, fp_c10_1._m0[565].y, _234 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _458 = 1.0 / fp_c10_1._m0[561].y;
            float _460 = _234 + (-fp_c10_1._m0[557].x);
            float _462 = _238 + (-fp_c10_1._m0[557].z);
            float _464 = (-_234) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_458, fp_c10_1._m0[557].x);
            float _466 = (-_238) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_458, fp_c10_1._m0[557].z);
            float _468 = _460 * fp_c10_1._m0[558].z;
            float _470 = _464 * _464;
            float _472 = _462 * fp_c10_1._m0[558].x;
            float _474 = sqrt(fma(_466, _466, _470)) * (-fp_c10_1._m0[558].y);
            float _476 = ((-float(_472 < _468)) + float(_472 > _468)) * fp_c10_1._m0[561].y;
            float _478 = fma(_462, _462, _460 * _460);
            float _480 = inversesqrt(fma(_466, _466, fma(_474, _474, _470)));
            float _482 = _464 * _480;
            float _484 = _474 * _480;
            float _486 = _466 * _480;
            float _488 = fma(_462, fp_c10_1._m0[558].z, _460 * fp_c10_1._m0[558].x);
            float _490 = _150 + _482;
            float _492 = _154 + _484;
            float _494 = inversesqrt(fma(_486, _486, _482 * _482));
            float _496 = _156 + _486;
            bool _498 = fma(_462 * inversesqrt(_478), fp_c10_1._m0[558].z, (_460 * inversesqrt(_478)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _500 = fma(_162, _486, fma(_160, _484, _158 * _482));
            float _502 = inversesqrt(fma(_496, _496, fma(_492, _492, _490 * _490)));
            bool _504 = _488 > 0.0;
            float _506 = _478;
            if (_504)
            {
                _506 = sqrt(_478);
            }
            float _508 = _490 * _502;
            float _510 = _492 * _502;
            float _512 = _496 * _502;
            float _514 = _506;
            if (!_504)
            {
                _514 = 1.0;
            }
            float _516 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_460, fma(_476, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_462 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_476 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_460, fma(_476, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_462 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_476 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _518 = max(fma(_156, _512, fma(_154, _510, _150 * _508)), fp_c1_1._m0[0].z);
            float _520 = clamp(fma(_488 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].y), 0.0, 1.0) * clamp(fma(_488 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].y), 0.0, 1.0);
            float _522 = max(fma(_162, _512, fma(_160, _510, _158 * _508)), fp_c1_1._m0[0].z) * max(fma(_162, _512, fma(_160, _510, _158 * _508)), fp_c1_1._m0[0].z);
            float _524 = fma(_518, fp_c1_1._m0[0].w, -6.9831600189208984375);
            float _526 = max(_500, fp_c1_1._m0[0].z);
            float _528 = _524;
            if (_498)
            {
                _528 = fma(_516, -_516, fp_c1_1._m0[0].y) * fma(_516, -_516, fp_c1_1._m0[0].y);
            }
            float _530 = exp2(_518 * _524);
            float _532 = _528;
            if (!_498)
            {
                _532 = 1.0;
            }
            float _534 = (exp2(log2(clamp(fma(_514, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_486 * _494, -fp_c10_1._m0[558].z, (_482 * _494) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_520, -_520, fp_c1_1._m0[0].y) * fma(_520, -_520, fp_c1_1._m0[0].y), _532);
            float _536 = ((1.0 / (_274 + fma(_274, -_194, _194))) * (1.0 / (_274 + fma(_274, -_526, _526)))) * ((_262 * (1.0 / max(fma(_268, _522, -_522) + 1.0, fp_c1_1._m0[0].z))) * (_262 * (1.0 / max(fma(_268, _522, -_522) + 1.0, fp_c1_1._m0[0].z))));
            float _538 = (fma(_342, fp_c1_1._m0[1].w, _342 * exp2(_336 * log2(clamp(max(fma(_156, -_486, fma(_154, -_484, _150 * (-_482))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125) * exp2(log2(clamp(fma(_168, -clamp((-_500) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].y), 0.0, 1.0)) * fp_c6_1._m0[18].y);
            float _540 = _534 * clamp(_500 + (-0.0), 0.0, 1.0);
            float _542 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_238, fp_c10_1._m0[562].z, fma(_212, fp_c10_1._m0[562].y, _234 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _456, 0.5, 0.5), (-fma((fma(_238, fp_c10_1._m0[563].z, fma(_212, fp_c10_1._m0[563].y, _234 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _456, 0.5, 0.5)) + 1.0)).z > fma((fma(_238, fp_c10_1._m0[564].z, fma(_212, fp_c10_1._m0[564].y, _234 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _456, 0.5, 0.5)) || (_488 <= 0.0));
            _330 = fma(fma(_340, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _540) * fma(_304, fp_c1_1._m0[1].y, ((_285 + fma(_285, -_530, _530)) * _536) * 0.079577468335628509521484375), _338 * ((_538 * (_318 * _534)) * fp_c6_1._m0[17].w)), _542, _348);
            _332 = fma(fma(_340, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _540) * fma(_306, fp_c1_1._m0[1].y, ((_294 + fma(_294, -_530, _530)) * _536) * 0.079577468335628509521484375), _338 * ((_538 * (_320 * _534)) * fp_c6_1._m0[17].w)), _542, _350);
            _334 = fma(fma(_340, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _540) * fma(_308, fp_c1_1._m0[1].y, ((_287 + fma(_287, -_530, _530)) * _536) * 0.079577468335628509521484375), _338 * ((_538 * (_298 * _534)) * fp_c6_1._m0[17].w)), _542, _352);
        }
    }
    float _544 = _234 + (-fp_c3_1._m0[11].w);
    float _546 = _212 + (-fp_c3_1._m0[12].w);
    float _548 = _238 + (-fp_c3_1._m0[13].w);
    float _550 = clamp(1.0 + (-fp_c6_1._m0[17].w), 0.0, 1.0);
    float _552 = fma(_548, _548, fma(_546, _546, _544 * _544));
    float _554 = clamp(fma(_254, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _556 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
    float _558 = clamp(fma(_296 * _256, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _560 = exp2(log2(clamp(fma(_168, -clamp((-_272) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].y), 0.0, 1.0)) * fp_c6_1._m0[18].y) * (fma(_556, fp_c1_1._m0[1].w, _556 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_156, fp_c5_1._m0[23].z, fma(_154, fp_c5_1._m0[23].y, _150 * fp_c5_1._m0[23].x)), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _562 = exp2(log2(clamp(sqrt(_552) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_548 * inversesqrt(_552), fp_c5_1._m0[23].z, fma(_546 * inversesqrt(_552), fp_c5_1._m0[23].y, (_544 * inversesqrt(_552)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _564 = fma(_296, _330, fma(_256, _550 * ((_310 * fp_c5_1._m0[5].x) * fma(_300 * (_285 + fma(_285, -_283, _283)), fp_c1_1._m0[1].x, _304 * 0.3183098733425140380859375)), _554 * ((_560 * (_318 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[17].w)));
    float _566 = fma(_296, _332, fma(_256, _550 * ((_310 * fp_c5_1._m0[5].y) * fma(_300 * (_294 + fma(_294, -_283, _283)), fp_c1_1._m0[1].x, _306 * 0.3183098733425140380859375)), _554 * ((_560 * (_320 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[17].w)));
    float _568 = fma(_296, _334, fma(_256, _550 * ((_310 * fp_c5_1._m0[5].z) * fma(_300 * (_287 + fma(_287, -_283, _283)), fp_c1_1._m0[1].x, _308 * 0.3183098733425140380859375)), _554 * ((_560 * (_298 * fp_c5_1._m0[5].w)) * fp_c6_1._m0[17].w)));
    float _570 = clamp(fma(fma(_238, fp_c5_1._m0[14].z, fma(_212, fp_c5_1._m0[14].y, _234 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _572 = fma((-_564) + fp_c5_1._m0[13].x, _570, _564);
    float _574 = fma((-_566) + fp_c5_1._m0[13].y, _570, _566);
    float _576 = fma((-_568) + fp_c5_1._m0[13].z, _570, _568);
    float _578 = clamp((-exp2((clamp(fma(sqrt(_552), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _89.x = fma((-_572) + fma(fma((_562 * fp_c7_1._m0[55].x) * _558, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _578, _572);
    _89.y = fma((-_574) + fma(fma((_562 * fp_c7_1._m0[55].y) * _558, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _578, _574);
    _89.z = fma((-_576) + fma(fma((_562 * fp_c7_1._m0[55].z) * _558, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _578, _576);
    _89.w = 1.0;
}


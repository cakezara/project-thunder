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
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_14;
layout(binding = 3) uniform sampler2D fp_tex_tcb_28;
layout(binding = 4) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 5) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 6) uniform sampler2D fp_tex_tcb_38;
layout(binding = 7) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _60;
layout(location = 1) in vec4 _62;
layout(location = 3) in vec4 _64;
layout(location = 0) in vec4 _66;
layout(location = 4) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 0) out vec4 _73;
uint _6[12];

void main()
{
    bool _268 = false;
    float _80 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _82 = 1.0 / (_60.z * gl_FragCoord.w);
    float _84 = _62.x;
    float _86 = _64.x;
    float _88 = _62.y;
    float _90 = _64.y;
    float _92 = _62.z;
    float _94 = _64.z;
    float _96 = _66.x;
    float _98 = _66.y;
    float _100 = inversesqrt(fma(_92, _92, fma(_88, _88, _84 * _84)));
    float _102 = inversesqrt(fma(_94, _94, fma(_90, _90, _86 * _86)));
    float _104 = _84 * _100;
    float _106 = _88 * _100;
    float _108 = _86 * (-_102);
    float _110 = _90 * (-_102);
    float _112 = _92 * _100;
    float _114 = _94 * (-_102);
    float _116 = fma(_112, _114, fma(_106, _110, _104 * _108));
    float _118 = 1.0 / _68.w;
    float _120 = max(_116, fp_c1_1._m0[0].y);
    float _122 = fma(_104 * (-_116), -2.0, -_108);
    float _124 = fma(_106 * (-_116), -2.0, -_110);
    float _126 = fma(_112 * (-_116), -2.0, -_114);
    float _128 = 1.0 / max(abs(_126), max(abs(_122), abs(_124)));
    vec2 _132 = texture(fp_tex_tcb_2A, vec2(fma(_68.x * _118, 0.5, 0.5), fma(_68.y * _118, -0.5, 0.5))).xy;
    vec3 _136 = texture(fp_tex_tcb_A, vec2(_96, _98)).xyz;
    float _138 = _136.x;
    float _140 = _136.y;
    float _142 = _136.z;
    vec2 _144 = texture(fp_tex_tcb_38, vec2(_120, (-_80) + (-0.0))).xy;
    float _146 = _144.x;
    float _148 = _144.y;
    vec3 _150 = texture(fp_tex_tcb_36, vec4(_122 * _128, _124 * _128, _126 * _128, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_80 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _152 = texture(fp_tex_tcb_14, vec2(_96, _98)).xyz;
    float _154 = _70.x;
    float _156 = _70.z;
    float _158 = _108 + (-fp_c5_1._m0[23].x);
    float _160 = _110 + (-fp_c5_1._m0[23].y);
    float _162 = _104 * _106;
    float _164 = _106 * _112;
    float _166 = _114 + (-fp_c5_1._m0[23].z);
    int _169 = max(0, min(int(trunc((_156 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _171 = _104 * _112;
    float _173 = _112 * _112;
    float _175 = inversesqrt(fma(_166, _166, fma(_160, _160, _158 * _158)));
    float _177 = _158 * _175;
    float _179 = _160 * _175;
    float _181 = _166 * _175;
    float _183 = fma(_80, 0.5, 0.5);
    float _185 = _80 * _80;
    float _187 = max(fma(_114, _181, fma(_110, _179, _108 * _177)), fp_c1_1._m0[0].y);
    float _189 = max(fma(_112, _181, fma(_106, _179, _104 * _177)), fp_c1_1._m0[0].y) * max(fma(_112, _181, fma(_106, _179, _104 * _177)), fp_c1_1._m0[0].y);
    float _191 = (_183 * 0.5) * _183;
    uint _194 = uint(int(uint((((int(uint(_169) >> uint(16)) * 20) << 16) + (((_169 & 65535) * 20) + max(0, min(int(trunc((_154 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _196 = fp_c10_1._m0[int(uint(int(_194)) >> uint(2))][int(_194) & 3];
    float _198 = _185 * _185;
    float _200 = fma(_106, -fp_c5_1._m0[23].y, _104 * (-fp_c5_1._m0[23].x));
    float _202 = clamp(fma(_112, -fp_c5_1._m0[23].z, _200), 0.0, 1.0);
    float _204 = clamp((-fma(max((-_132.x) + 1.0, (-_132.y) + 1.0), clamp(_70.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_60.x * gl_FragCoord.w) * _82, (_60.y * gl_FragCoord.w) * _82)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _206 = max(fma(_112, -fp_c5_1._m0[23].z, _200), fp_c1_1._m0[0].y);
    float _208 = clamp(texture(fp_tex_tcb_C, vec2(_96, _98)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _210 = fma((-_138) + fp_c6_1._m0[93].x, _208, _138);
    float _212 = fma((-_140) + fp_c6_1._m0[93].y, _208, _140);
    float _214 = 1.0 / (_191 + fma(_120, -_191, _120));
    float _216 = fma((-_142) + fp_c6_1._m0[93].z, _208, _142);
    float _218 = fma(_104, _104, -(_106 * _106));
    float _220 = exp2(_187 * fma(_187, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _222 = fma(_210, -fp_c6_1._m0[9].x, _210);
    float _224 = fma(_210 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _226 = fma(_212 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _228 = fma(_216 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _230 = fma(_212, -fp_c6_1._m0[9].x, _212);
    float _232 = (_214 * (1.0 / (_191 + fma(_191, -_206, _206)))) * ((_185 * (1.0 / max(fma(_189, _198, -_189) + 1.0, fp_c1_1._m0[0].y))) * (_185 * (1.0 / max(fma(_189, _198, -_189) + 1.0, fp_c1_1._m0[0].y))));
    float _234 = fma(_216, -fp_c6_1._m0[9].x, _216);
    float _236 = fma(_150.x, fma(_224, _146, _148), max(0.0, fma(_218, fp_c5_1._m0[31].x, (fma(_112, fp_c5_1._m0[25].z, fma(_106, fp_c5_1._m0[25].y, _104 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_171, fp_c5_1._m0[28].w, fma(_173, fp_c5_1._m0[28].z, fma(_164, fp_c5_1._m0[28].y, _162 * fp_c5_1._m0[28].x))))) * fma(_222, -_224, _222));
    float _238 = fma(_150.y, fma(_226, _146, _148), max(0.0, fma(_218, fp_c5_1._m0[31].y, (fma(_112, fp_c5_1._m0[26].z, fma(_106, fp_c5_1._m0[26].y, _104 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_171, fp_c5_1._m0[29].w, fma(_173, fp_c5_1._m0[29].z, fma(_164, fp_c5_1._m0[29].y, _162 * fp_c5_1._m0[29].x))))) * fma(_230, -_226, _230));
    float _240 = fma(_150.z, fma(_228, _146, _148), max(0.0, fma(_218, fp_c5_1._m0[31].z, (fma(_112, fp_c5_1._m0[27].z, fma(_106, fp_c5_1._m0[27].y, _104 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_171, fp_c5_1._m0[30].w, fma(_173, fp_c5_1._m0[30].z, fma(_164, fp_c5_1._m0[30].y, _162 * fp_c5_1._m0[30].x))))) * fma(_234, -_228, _234));
    int _242 = floatBitsToInt(_196);
    float _244 = _240;
    float _246 = _236;
    float _248 = _238;
    float _250 = _236;
    float _252 = _238;
    float _254 = _240;
    if (floatBitsToInt(_196) != (-1))
    {
        int _256 = 0;
        float _260;
        float _262;
        float _264;
        int _350;
        do
        {
            int _258 = _242 & 255;
            _260 = _246;
            _262 = _248;
            _264 = _244;
            _268 = uint(_258) >= 30u;
            if (_268)
            {
                break;
            }
            int _270 = _258 << 4;
            uint _272 = uint(int(uint(_270 + 7360) >> uint(2)));
            int _274 = int(_272) + 1;
            uint _276 = uint(int(uint(_270 + 7368) >> uint(2)));
            float _278 = (-_154) + fp_c10_1._m0[int(uint(int(_272)) >> uint(2))][int(_272) & 3];
            float _280 = fp_c10_1._m0[int(uint(_274) >> uint(2))][_274 & 3] + (-_70.y);
            float _282 = (-_156) + fp_c10_1._m0[int(uint(int(_276)) >> uint(2))][int(_276) & 3];
            float _284 = fma(_282, _282, fma(_280, _280, _278 * _278));
            float _286 = _278 * inversesqrt(_284);
            float _288 = _280 * inversesqrt(_284);
            float _290 = _282 * inversesqrt(_284);
            float _292 = _108 + _286;
            float _294 = _110 + _288;
            float _296 = _114 + _290;
            float _298 = inversesqrt(fma(_296, _296, fma(_294, _294, _292 * _292)));
            float _300 = _292 * _298;
            float _302 = _294 * _298;
            float _304 = _296 * _298;
            uint _306 = uint(int(uint(_270 + 6880) >> uint(2)));
            int _308 = int(_306) + 1;
            uint _310 = uint(int(uint(_270 + 8320) >> uint(2)));
            float _312 = fma(_112, _290, fma(_106, _288, _104 * _286));
            float _314 = max(_312, fp_c1_1._m0[0].y);
            float _316 = max(fma(_114, _304, fma(_110, _302, _108 * _300)), fp_c1_1._m0[0].y);
            float _318 = max(fma(_112, _304, fma(_106, _302, _104 * _300)), fp_c1_1._m0[0].y) * max(fma(_112, _304, fma(_106, _302, _104 * _300)), fp_c1_1._m0[0].y);
            uint _320 = uint(int(uint(_270 + 6408) >> uint(2)));
            uint _322 = uint(int(uint(_270 + 6400) >> uint(2)));
            int _324 = int(_322) + 1;
            float _326 = exp2(_316 * fma(_316, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _328 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_310)) >> uint(2))][int(_310) & 3]) != 0;
            float _330 = (_214 * (1.0 / (_191 + fma(_191, -_314, _314)))) * ((_185 * (1.0 / max(fma(_198, _318, -_318) + 1.0, fp_c1_1._m0[0].y))) * (_185 * (1.0 / max(fma(_198, _318, -_318) + 1.0, fp_c1_1._m0[0].y))));
            float _332 = _228 + fma(_228, -_326, _326);
            float _334 = _332;
            if (!_328)
            {
                _334 = 1.0;
            }
            float _336 = _334;
            if (_328)
            {
                uint _338 = uint(int(uint(_270 + 7840) >> uint(2)));
                int _340 = int(_338) + 1;
                uint _342 = uint(int(uint(_270 + 6888) >> uint(2)));
                float _344 = fp_c10_1._m0[int(uint(int(_342)) >> uint(2))][int(_342) & 3];
                int _346 = int(_342) + 1;
                uint _348 = uint(int(uint(_270 + 7848) >> uint(2)));
                _336 = exp2(fp_c10_1._m0[int(uint(_346) >> uint(2))][_346 & 3] * log2(clamp(((-_344) + fma(_290, -fp_c10_1._m0[int(uint(int(_348)) >> uint(2))][int(_348) & 3], fma(_288, -fp_c10_1._m0[int(uint(_340) >> uint(2))][_340 & 3], _286 * (-fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3])))) * (1.0 / ((-_344) + 1.0)), 0.0, 1.0)));
            }
            _350 = _256 + 1;
            float _352 = (exp2(fp_c10_1._m0[int(uint(_308) >> uint(2))][_308 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_306)) >> uint(2))][int(_306) & 3], -sqrt(_284), fp_c1_1._m0[1].x), 0.0, 1.0))) * _336) * clamp(_312 + (-0.0), 0.0, 1.0);
            float _354 = fma(fp_c10_1._m0[int(uint(int(_320)) >> uint(2))][int(_320) & 3] * _352, fma(_234, fp_c1_1._m0[1].y, (_332 * _330) * 0.079577468335628509521484375), _244);
            float _356 = fma(fp_c10_1._m0[int(uint(int(_322)) >> uint(2))][int(_322) & 3] * _352, fma(_222, fp_c1_1._m0[1].y, ((_224 + fma(_224, -_326, _326)) * _330) * 0.079577468335628509521484375), _246);
            float _358 = fma(fp_c10_1._m0[int(uint(_324) >> uint(2))][_324 & 3] * _352, fma(_230, fp_c1_1._m0[1].y, ((_226 + fma(_226, -_326, _326)) * _330) * 0.079577468335628509521484375), _248);
            _242 = int(uint(_242) >> uint(8));
            _256 = _350;
            _244 = _354;
            _246 = _356;
            _248 = _358;
            _260 = _356;
            _262 = _358;
            _264 = _354;
        } while (!(_350 >= 4));
        _268 = false;
        _250 = _260;
        _252 = _262;
        _254 = _264;
        if ((_242 & 255) == 30)
        {
            float _360 = _70.y;
            float _362 = 1.0 / (fma(_156, fp_c10_1._m0[565].z, fma(_360, fp_c10_1._m0[565].y, _154 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _364 = 1.0 / fp_c10_1._m0[561].y;
            float _366 = _156 + (-fp_c10_1._m0[557].z);
            float _368 = _154 + (-fp_c10_1._m0[557].x);
            float _370 = (-_154) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_364, fp_c10_1._m0[557].x);
            float _372 = (-_156) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_364, fp_c10_1._m0[557].z);
            float _374 = _368 * fp_c10_1._m0[558].z;
            float _376 = _366 * fp_c10_1._m0[558].x;
            float _378 = _370 * _370;
            float _380 = fma(_366, _366, _368 * _368);
            float _382 = sqrt(fma(_372, _372, _378)) * (-fp_c10_1._m0[558].y);
            float _384 = ((-float(_376 < _374)) + float(_376 > _374)) * fp_c10_1._m0[561].y;
            float _386 = inversesqrt(fma(_372, _372, fma(_382, _382, _378)));
            float _388 = _370 * _386;
            float _390 = _382 * _386;
            float _392 = _372 * _386;
            float _394 = fma(_366, fp_c10_1._m0[558].z, _368 * fp_c10_1._m0[558].x);
            float _396 = _108 + _388;
            float _398 = _110 + _390;
            bool _400 = _394 > 0.0;
            float _402 = inversesqrt(fma(_392, _392, _388 * _388));
            float _404 = _114 + _392;
            float _406 = fma(_112, _392, fma(_106, _390, _104 * _388));
            float _408 = inversesqrt(fma(_404, _404, fma(_398, _398, _396 * _396)));
            float _410 = _396 * _408;
            float _412 = _398 * _408;
            float _414 = _404 * _408;
            float _416 = _404;
            if (_400)
            {
                _416 = sqrt(_380);
            }
            float _418 = _416;
            if (!_400)
            {
                _418 = 1.0;
            }
            float _420 = max(_406, fp_c1_1._m0[0].y);
            float _422 = max(fma(_114, _414, fma(_110, _412, _108 * _410)), fp_c1_1._m0[0].y);
            bool _424 = fma(_366 * inversesqrt(_380), fp_c10_1._m0[558].z, (_368 * inversesqrt(_380)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _426 = clamp(fma(_394 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_394 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _428 = max(fma(_112, _414, fma(_106, _412, _104 * _410)), fp_c1_1._m0[0].y) * max(fma(_112, _414, fma(_106, _412, _104 * _410)), fp_c1_1._m0[0].y);
            float _430 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_368, fma(_384, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_366 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_384 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_368, fma(_384, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_366 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_384 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _432 = _422;
            if (!_424)
            {
                _432 = 1.0;
            }
            float _434 = _432;
            if (_424)
            {
                _434 = fma(_430, -_430, fp_c1_1._m0[1].x) * fma(_430, -_430, fp_c1_1._m0[1].x);
            }
            float _436 = exp2(_422 * fma(_422, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _438 = (min(fma(_426, -_426, fp_c1_1._m0[1].x) * fma(_426, -_426, fp_c1_1._m0[1].x), _434) * (exp2(log2(clamp(fma(_418, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_392 * _402, -fp_c10_1._m0[558].z, (_388 * _402) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_406 + (-0.0), 0.0, 1.0);
            float _440 = (_214 * (1.0 / (_191 + fma(_191, -_420, _420)))) * ((_185 * (1.0 / max(fma(_198, _428, -_428) + 1.0, fp_c1_1._m0[0].y))) * (_185 * (1.0 / max(fma(_198, _428, -_428) + 1.0, fp_c1_1._m0[0].y))));
            float _442 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_156, fp_c10_1._m0[562].z, fma(_360, fp_c10_1._m0[562].y, _154 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _362, 0.5, 0.5), (-fma((fma(_156, fp_c10_1._m0[563].z, fma(_360, fp_c10_1._m0[563].y, _154 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _362, 0.5, 0.5)) + 1.0)).z > fma((fma(_156, fp_c10_1._m0[564].z, fma(_360, fp_c10_1._m0[564].y, _154 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _362, 0.5, 0.5)) || (_394 <= 0.0));
            _250 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _438) * fma(_222, fp_c1_1._m0[1].y, ((_224 + fma(_224, -_436, _436)) * _440) * 0.079577468335628509521484375), _442, _260);
            _252 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _438) * fma(_230, fp_c1_1._m0[1].y, ((_226 + fma(_226, -_436, _436)) * _440) * 0.079577468335628509521484375), _442, _262);
            _254 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _438) * fma(_234, fp_c1_1._m0[1].y, ((_228 + fma(_228, -_436, _436)) * _440) * 0.079577468335628509521484375), _442, _264);
        }
    }
    float _444 = _154 + (-fp_c3_1._m0[11].w);
    float _446 = _70.y;
    float _448 = _156 + (-fp_c3_1._m0[13].w);
    float _450 = fma(_152.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_204, fma(_232 * (_224 + fma(_224, -_220, _220)), fp_c1_1._m0[0].w, _222 * 0.3183098733425140380859375) * (_202 * fp_c5_1._m0[5].x), _250));
    float _452 = fma(_152.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_204, fma(_232 * (_226 + fma(_226, -_220, _220)), fp_c1_1._m0[0].w, _230 * 0.3183098733425140380859375) * (_202 * fp_c5_1._m0[5].y), _252));
    float _454 = fma(_152.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_204, fma(_232 * (_228 + fma(_228, -_220, _220)), fp_c1_1._m0[0].w, _234 * 0.3183098733425140380859375) * (_202 * fp_c5_1._m0[5].z), _254));
    float _456 = _446 + (-fp_c3_1._m0[12].w);
    float _458 = fma(_448, _448, fma(_456, _456, _444 * _444));
    float _460 = exp2(log2(clamp(sqrt(_458) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_448 * inversesqrt(_458), fp_c5_1._m0[23].z, fma(_456 * inversesqrt(_458), fp_c5_1._m0[23].y, (_444 * inversesqrt(_458)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _462 = clamp(fma(fma(_156, fp_c5_1._m0[14].z, fma(_446, fp_c5_1._m0[14].y, _154 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _464 = clamp(fma(_204, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _466 = fma((-_450) + fp_c5_1._m0[13].x, _462, _450);
    float _468 = fma((-_452) + fp_c5_1._m0[13].y, _462, _452);
    float _470 = fma((-_454) + fp_c5_1._m0[13].z, _462, _454);
    float _472 = clamp((-exp2((clamp(fma(sqrt(_458), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _73.x = fma((-_466) + fma(fma((_460 * fp_c7_1._m0[55].x) * _464, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _472, _466);
    _73.y = fma((-_468) + fma(fma((_460 * fp_c7_1._m0[55].y) * _464, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _472, _468);
    _73.z = fma((-_470) + fma(fma((_460 * fp_c7_1._m0[55].z) * _464, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _472, _470);
    _73.w = 1.0;
}


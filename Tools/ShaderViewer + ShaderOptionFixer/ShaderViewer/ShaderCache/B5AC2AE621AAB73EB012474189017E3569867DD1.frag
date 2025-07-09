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

layout(binding = 9, std140) uniform fp_c8
{
    vec4 _m0[4096];
} fp_c8_1;

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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_14;
layout(binding = 2) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 3) uniform sampler2D fp_tex_tcb_28;
layout(binding = 4) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 5) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 6) uniform sampler2D fp_tex_tcb_38;
layout(binding = 7) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 3) in vec4 _66;
layout(location = 0) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 0) out vec4 _75;
uint _6[12];

void main()
{
    bool _274 = false;
    float _82 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].y);
    float _84 = 1.0 / (_62.z * gl_FragCoord.w);
    float _86 = _64.x;
    float _88 = _66.x;
    float _90 = _64.y;
    float _92 = _66.y;
    float _94 = _64.z;
    float _96 = _66.z;
    float _98 = _68.x;
    float _100 = _68.y;
    float _102 = inversesqrt(fma(_94, _94, fma(_90, _90, _86 * _86)));
    float _104 = inversesqrt(fma(_96, _96, fma(_92, _92, _88 * _88)));
    float _106 = _86 * _102;
    float _108 = _90 * _102;
    float _110 = _88 * (-_104);
    float _112 = _92 * (-_104);
    float _114 = _94 * _102;
    float _116 = _96 * (-_104);
    float _118 = fma(_114, _116, fma(_108, _112, _106 * _110));
    float _120 = 1.0 / _70.w;
    float _122 = fma(_106 * (-_118), -2.0, -_110);
    float _124 = max(_118, fp_c1_1._m0[0].x);
    float _126 = fma(_108 * (-_118), -2.0, -_112);
    float _128 = fma(_114 * (-_118), -2.0, -_116);
    float _130 = 1.0 / max(abs(_128), max(abs(_122), abs(_126)));
    vec3 _134 = texture(fp_tex_tcb_14, vec2(_68.z, _68.w)).xyz;
    vec3 _136 = texture(fp_tex_tcb_1C, vec2(_98, _100)).xyz;
    vec2 _140 = texture(fp_tex_tcb_2A, vec2(fma(_70.x * _120, 0.5, 0.5), fma(_70.y * _120, -0.5, 0.5))).xy;
    vec3 _142 = texture(fp_tex_tcb_A, vec2(_98, _100)).xyz;
    float _144 = _142.x;
    float _146 = _142.y;
    float _148 = _142.z;
    vec2 _150 = texture(fp_tex_tcb_38, vec2(_124, (-_82) + (-0.0))).xy;
    float _152 = _150.x;
    float _154 = _150.y;
    vec3 _156 = texture(fp_tex_tcb_36, vec4(_122 * _130, _126 * _130, _128 * _130, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_82 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _158 = _110 * _112;
    float _160 = _108 * _106;
    float _162 = _108 * _114;
    float _164 = _112 * _116;
    float _166 = _116 * _116;
    float _168 = _114 * _114;
    float _170 = _110 * _116;
    float _172 = _114 * _106;
    float _174 = _72.z;
    float _176 = _110 + (-fp_c5_1._m0[23].x);
    float _178 = _112 + (-fp_c5_1._m0[23].y);
    float _180 = _72.x;
    float _182 = _116 + (-fp_c5_1._m0[23].z);
    float _184 = inversesqrt(fma(_182, _182, fma(_178, _178, _176 * _176)));
    float _186 = _176 * _184;
    float _188 = _178 * _184;
    float _190 = _182 * _184;
    float _192 = max(fma(_116, _190, fma(_112, _188, _110 * _186)), fp_c1_1._m0[0].x);
    float _194 = max(fma(_114, _190, fma(_108, _188, _106 * _186)), fp_c1_1._m0[0].x) * max(fma(_114, _190, fma(_108, _188, _106 * _186)), fp_c1_1._m0[0].x);
    int _197 = max(0, min(int(trunc((_174 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _199 = fma(_110, _110, -(_112 * _112));
    uint _202 = uint(int(uint((((int(uint(_197) >> uint(16)) * 20) << 16) + (((_197 & 65535) * 20) + max(0, min(int(trunc((_180 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _204 = fp_c10_1._m0[int(uint(int(_202)) >> uint(2))][int(_202) & 3];
    float _206 = fma(_82, 0.5, 0.5);
    float _208 = _82 * _82;
    float _210 = fma(_108, -fp_c5_1._m0[23].y, _106 * (-fp_c5_1._m0[23].x));
    float _212 = (_206 * 0.5) * _206;
    float _214 = max(fma(_114, -fp_c5_1._m0[23].z, _210), fp_c1_1._m0[0].x);
    float _216 = 1.0 / (_212 + fma(_124, -_212, _124));
    float _218 = fma(_106, _106, -(_108 * _108));
    float _220 = exp2(_192 * fma(_192, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _222 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].y;
    float _224 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].z;
    float _226 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].x;
    float _228 = (_216 * (1.0 / (_212 + fma(_212, -_214, _214)))) * ((_208 * (1.0 / max(fma(_208 * _208, _194, -_194) + 1.0, fp_c1_1._m0[0].x))) * (_208 * (1.0 / max(fma(_208 * _208, _194, -_194) + 1.0, fp_c1_1._m0[0].x))));
    float _230 = exp2(log2(clamp((-_118) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
    float _232 = fma(_148 * max(0.0, fma(_199, fp_c5_1._m0[31].z, (fma(_116, -fp_c5_1._m0[27].z, fma(_112, -fp_c5_1._m0[27].y, _110 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_170, fp_c5_1._m0[30].w, fma(_166, fp_c5_1._m0[30].z, fma(_164, fp_c5_1._m0[30].y, _158 * fp_c5_1._m0[30].x))))), _230, fma(_148, -fp_c6_1._m0[9].x, _148));
    float _234 = fma(_144 * max(0.0, fma(_199, fp_c5_1._m0[31].x, (fma(_116, -fp_c5_1._m0[25].z, fma(_112, -fp_c5_1._m0[25].y, _110 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_170, fp_c5_1._m0[28].w, fma(_166, fp_c5_1._m0[28].z, fma(_164, fp_c5_1._m0[28].y, _158 * fp_c5_1._m0[28].x))))), _230, fma(_144, -fp_c6_1._m0[9].x, _144));
    float _236 = fma(_146 * max(0.0, fma(_199, fp_c5_1._m0[31].y, (fma(_116, -fp_c5_1._m0[26].z, fma(_112, -fp_c5_1._m0[26].y, _110 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_170, fp_c5_1._m0[29].w, fma(_166, fp_c5_1._m0[29].z, fma(_164, fp_c5_1._m0[29].y, _158 * fp_c5_1._m0[29].x))))), _230, fma(_146, -fp_c6_1._m0[9].x, _146));
    float _238 = clamp(fma(_114, -fp_c5_1._m0[23].z, _210), 0.0, 1.0);
    float _240 = fma(_156.x, fma(_226, _152, _154), fma(_234, -_226, _234) * max(0.0, fma(_218, fp_c5_1._m0[31].x, (fma(_114, fp_c5_1._m0[25].z, fma(_108, fp_c5_1._m0[25].y, _106 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_172, fp_c5_1._m0[28].w, fma(_168, fp_c5_1._m0[28].z, fma(_162, fp_c5_1._m0[28].y, _160 * fp_c5_1._m0[28].x))))));
    float _242 = fma(_156.z, fma(_224, _152, _154), fma(_232, -_224, _232) * max(0.0, fma(_218, fp_c5_1._m0[31].z, (fma(_114, fp_c5_1._m0[27].z, fma(_108, fp_c5_1._m0[27].y, _106 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_172, fp_c5_1._m0[30].w, fma(_168, fp_c5_1._m0[30].z, fma(_162, fp_c5_1._m0[30].y, _160 * fp_c5_1._m0[30].x))))));
    float _244 = fma(_156.y, fma(_222, _152, _154), fma(_236, -_222, _236) * max(0.0, fma(_218, fp_c5_1._m0[31].y, (fma(_114, fp_c5_1._m0[26].z, fma(_108, fp_c5_1._m0[26].y, _106 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_172, fp_c5_1._m0[29].w, fma(_168, fp_c5_1._m0[29].z, fma(_162, fp_c5_1._m0[29].y, _160 * fp_c5_1._m0[29].x))))));
    float _246 = clamp((-fma(max((-_140.x) + 1.0, (-_140.y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_62.x * gl_FragCoord.w) * _84, (_62.y * gl_FragCoord.w) * _84)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _248 = floatBitsToInt(_204);
    float _250 = _240;
    float _252 = _244;
    float _254 = _242;
    float _256 = _240;
    float _258 = _244;
    float _260 = _242;
    if (floatBitsToInt(_204) != (-1))
    {
        int _262 = 0;
        float _266;
        float _268;
        float _270;
        int _356;
        do
        {
            int _264 = _248 & 255;
            _266 = _250;
            _268 = _252;
            _270 = _254;
            _274 = uint(_264) >= 30u;
            if (_274)
            {
                break;
            }
            int _276 = _264 << 4;
            uint _278 = uint(int(uint(_276 + 7360) >> uint(2)));
            int _280 = int(_278) + 1;
            uint _282 = uint(int(uint(_276 + 7368) >> uint(2)));
            float _284 = (-_180) + fp_c10_1._m0[int(uint(int(_278)) >> uint(2))][int(_278) & 3];
            float _286 = fp_c10_1._m0[int(uint(_280) >> uint(2))][_280 & 3] + (-_72.y);
            float _288 = (-_174) + fp_c10_1._m0[int(uint(int(_282)) >> uint(2))][int(_282) & 3];
            float _290 = fma(_288, _288, fma(_286, _286, _284 * _284));
            float _292 = _284 * inversesqrt(_290);
            float _294 = _286 * inversesqrt(_290);
            float _296 = _288 * inversesqrt(_290);
            float _298 = _110 + _292;
            float _300 = _112 + _294;
            float _302 = _116 + _296;
            float _304 = inversesqrt(fma(_302, _302, fma(_300, _300, _298 * _298)));
            float _306 = _298 * _304;
            float _308 = _300 * _304;
            float _310 = _302 * _304;
            uint _312 = uint(int(uint(_276 + 6880) >> uint(2)));
            int _314 = int(_312) + 1;
            float _316 = max(fma(_116, _310, fma(_112, _308, _110 * _306)), fp_c1_1._m0[0].x);
            float _318 = max(fma(_114, _310, fma(_108, _308, _106 * _306)), fp_c1_1._m0[0].x) * max(fma(_114, _310, fma(_108, _308, _106 * _306)), fp_c1_1._m0[0].x);
            float _320 = fma(_114, _296, fma(_108, _294, _106 * _292));
            uint _322 = uint(int(uint(_276 + 8320) >> uint(2)));
            float _324 = max(_320, fp_c1_1._m0[0].x);
            float _326 = exp2(_316 * fma(_316, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _328 = _226 + fma(_226, -_326, _326);
            float _330 = ((_208 * (1.0 / max(fma(_208 * _208, _318, -_318) + 1.0, fp_c1_1._m0[0].x))) * (_208 * (1.0 / max(fma(_208 * _208, _318, -_318) + 1.0, fp_c1_1._m0[0].x)))) * (_216 * (1.0 / (_212 + fma(_212, -_324, _324))));
            uint _332 = uint(int(uint(_276 + 6408) >> uint(2)));
            bool _334 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_322)) >> uint(2))][int(_322) & 3]) != 0;
            uint _336 = uint(int(uint(_276 + 6400) >> uint(2)));
            int _338 = int(_336) + 1;
            float _340 = _328;
            if (!_334)
            {
                _340 = 1.0;
            }
            float _342 = _340;
            if (_334)
            {
                uint _344 = uint(int(uint(_276 + 7840) >> uint(2)));
                int _346 = int(_344) + 1;
                uint _348 = uint(int(uint(_276 + 7848) >> uint(2)));
                uint _350 = uint(int(uint(_276 + 6888) >> uint(2)));
                float _352 = fp_c10_1._m0[int(uint(int(_350)) >> uint(2))][int(_350) & 3];
                int _354 = int(_350) + 1;
                _342 = exp2(fp_c10_1._m0[int(uint(_354) >> uint(2))][_354 & 3] * log2(clamp(((-_352) + fma(_296, -fp_c10_1._m0[int(uint(int(_348)) >> uint(2))][int(_348) & 3], fma(_294, -fp_c10_1._m0[int(uint(_346) >> uint(2))][_346 & 3], _292 * (-fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3])))) * (1.0 / ((-_352) + 1.0)), 0.0, 1.0)));
            }
            _356 = _262 + 1;
            float _358 = clamp(_320 + (-0.0), 0.0, 1.0) * (exp2(fp_c10_1._m0[int(uint(_314) >> uint(2))][_314 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_312)) >> uint(2))][int(_312) & 3], -sqrt(_290), fp_c1_1._m0[1].x), 0.0, 1.0))) * _342);
            float _360 = fma(fp_c10_1._m0[int(uint(int(_336)) >> uint(2))][int(_336) & 3] * _358, fma(_234, fp_c1_1._m0[1].y, (_328 * _330) * 0.079577468335628509521484375), _250);
            float _362 = fma(fp_c10_1._m0[int(uint(_338) >> uint(2))][_338 & 3] * _358, fma(_236, fp_c1_1._m0[1].y, ((_222 + fma(_222, -_326, _326)) * _330) * 0.079577468335628509521484375), _252);
            float _364 = fma(fp_c10_1._m0[int(uint(int(_332)) >> uint(2))][int(_332) & 3] * _358, fma(_232, fp_c1_1._m0[1].y, ((_224 + fma(_224, -_326, _326)) * _330) * 0.079577468335628509521484375), _254);
            _248 = int(uint(_248) >> uint(8));
            _262 = _356;
            _250 = _360;
            _252 = _362;
            _254 = _364;
            _266 = _360;
            _268 = _362;
            _270 = _364;
        } while (!(_356 >= 4));
        _274 = false;
        _256 = _266;
        _258 = _268;
        _260 = _270;
        if ((_248 & 255) == 30)
        {
            float _366 = 1.0 / fp_c10_1._m0[561].y;
            float _368 = _180 + (-fp_c10_1._m0[557].x);
            float _370 = _368 * fp_c10_1._m0[558].z;
            float _372 = (-_180) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_366, fp_c10_1._m0[557].x);
            float _374 = (-_174) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_366, fp_c10_1._m0[557].z);
            float _376 = _372 * _372;
            float _378 = _174 + (-fp_c10_1._m0[557].z);
            float _380 = sqrt(fma(_374, _374, _376)) * (-fp_c10_1._m0[558].y);
            float _382 = inversesqrt(fma(_374, _374, fma(_380, _380, _376)));
            float _384 = _378 * fp_c10_1._m0[558].x;
            float _386 = _372 * _382;
            float _388 = _380 * _382;
            float _390 = _374 * _382;
            float _392 = _110 + _386;
            float _394 = _112 + _388;
            float _396 = _116 + _390;
            float _398 = inversesqrt(fma(_396, _396, fma(_394, _394, _392 * _392)));
            float _400 = _392 * _398;
            float _402 = _394 * _398;
            float _404 = ((-float(_384 < _370)) + float(_384 > _370)) * fp_c10_1._m0[561].y;
            float _406 = fma(_378, _378, _368 * _368);
            float _408 = _72.y;
            float _410 = fma(_378, fp_c10_1._m0[558].z, _368 * fp_c10_1._m0[558].x);
            float _412 = 1.0 / (fma(_174, fp_c10_1._m0[565].z, fma(_408, fp_c10_1._m0[565].y, _180 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            bool _414 = _410 > 0.0;
            float _416 = fma(_114, _390, fma(_108, _388, _106 * _386));
            float _418 = inversesqrt(fma(_390, _390, _386 * _386));
            float _420 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_368, fma(_404, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_378 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_404 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_368, fma(_404, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_378 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_404 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _422 = _396 * _398;
            float _424 = _396;
            if (_414)
            {
                _424 = sqrt(_406);
            }
            float _426 = _424;
            if (!_414)
            {
                _426 = 1.0;
            }
            bool _428 = fma(_378 * inversesqrt(_406), fp_c10_1._m0[558].z, (_368 * inversesqrt(_406)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _430 = max(_416, fp_c1_1._m0[0].x);
            float _432 = fma(_420, -_420, fp_c1_1._m0[1].x);
            float _434 = max(fma(_114, _422, fma(_108, _402, _106 * _400)), fp_c1_1._m0[0].x) * max(fma(_114, _422, fma(_108, _402, _106 * _400)), fp_c1_1._m0[0].x);
            float _436 = max(fma(_116, _422, fma(_112, _402, _110 * _400)), fp_c1_1._m0[0].x);
            float _438 = clamp(fma(_410 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_410 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _440 = _432;
            if (_428)
            {
                _440 = _432 * _432;
            }
            float _442 = _440;
            if (!_428)
            {
                _442 = 1.0;
            }
            float _444 = exp2(_436 * fma(_436, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _446 = (_216 * (1.0 / (_212 + fma(_212, -_430, _430)))) * ((_208 * (1.0 / max(fma(_208 * _208, _434, -_434) + 1.0, fp_c1_1._m0[0].x))) * (_208 * (1.0 / max(fma(_208 * _208, _434, -_434) + 1.0, fp_c1_1._m0[0].x))));
            float _448 = clamp(_416 + (-0.0), 0.0, 1.0) * ((exp2(log2(clamp(fma(_426, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_390 * _418, -fp_c10_1._m0[558].z, (_386 * _418) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_438, -_438, fp_c1_1._m0[1].x) * fma(_438, -_438, fp_c1_1._m0[1].x), _442));
            float _450 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_174, fp_c10_1._m0[562].z, fma(_408, fp_c10_1._m0[562].y, _180 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _412, 0.5, 0.5), (-fma((fma(_174, fp_c10_1._m0[563].z, fma(_408, fp_c10_1._m0[563].y, _180 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _412, 0.5, 0.5)) + 1.0)).z > fma((fma(_174, fp_c10_1._m0[564].z, fma(_408, fp_c10_1._m0[564].y, _180 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _412, 0.5, 0.5)) || (_410 <= 0.0));
            _256 = fma(fma(_234, fp_c1_1._m0[1].y, ((_226 + fma(_226, -_444, _444)) * _446) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _448), _450, _266);
            _258 = fma(fma(_236, fp_c1_1._m0[1].y, ((_222 + fma(_222, -_444, _444)) * _446) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _448), _450, _268);
            _260 = fma(fma(_232, fp_c1_1._m0[1].y, ((_224 + fma(_224, -_444, _444)) * _446) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _448), _450, _270);
        }
    }
    float _452 = _180 + (-fp_c3_1._m0[11].w);
    float _454 = _72.y;
    float _456 = _174 + (-fp_c3_1._m0[13].w);
    float _458 = fma(clamp(fma(_136.x, -fp_c6_1._m0[85].x, _134.x * fp_c6_1._m0[12].x), 0.0, 1.0) * (clamp(fp_c6_1._m0[85].y * fp_c8_1._m0[21].x, 0.0, 1.0) + clamp(fp_c6_1._m0[85].z * fp_c6_1._m0[92].x, 0.0, 1.0)), fp_c6_1._m0[11].x, fma(_246, fma(_228 * (_226 + fma(_226, -_220, _220)), fp_c1_1._m0[0].w, _234 * 0.3183098733425140380859375) * (_238 * fp_c5_1._m0[5].x), _256));
    float _460 = fma(clamp(fma(_136.y, -fp_c6_1._m0[85].x, _134.y * fp_c6_1._m0[12].y), 0.0, 1.0) * (clamp(fp_c6_1._m0[85].y * fp_c8_1._m0[21].y, 0.0, 1.0) + clamp(fp_c6_1._m0[85].z * fp_c6_1._m0[92].y, 0.0, 1.0)), fp_c6_1._m0[11].x, fma(_246, fma(_228 * (_222 + fma(_222, -_220, _220)), fp_c1_1._m0[0].w, _236 * 0.3183098733425140380859375) * (_238 * fp_c5_1._m0[5].y), _258));
    float _462 = _454 + (-fp_c3_1._m0[12].w);
    float _464 = fma(_456, _456, fma(_462, _462, _452 * _452));
    float _466 = clamp(fma(fma(_174, fp_c5_1._m0[14].z, fma(_454, fp_c5_1._m0[14].y, _180 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _468 = fma(clamp(fma(_136.z, -fp_c6_1._m0[85].x, _134.z * fp_c6_1._m0[12].z), 0.0, 1.0) * (clamp(fp_c6_1._m0[85].y * fp_c8_1._m0[21].z, 0.0, 1.0) + clamp(fp_c6_1._m0[85].z * fp_c6_1._m0[92].z, 0.0, 1.0)), fp_c6_1._m0[11].x, fma(_246, fma(_228 * (_224 + fma(_224, -_220, _220)), fp_c1_1._m0[0].w, _232 * 0.3183098733425140380859375) * (_238 * fp_c5_1._m0[5].z), _260));
    float _470 = clamp(fma(_246, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _472 = exp2(fma(fma(_456 * inversesqrt(_464), fp_c5_1._m0[23].z, fma(_462 * inversesqrt(_464), fp_c5_1._m0[23].y, (_452 * inversesqrt(_464)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_464) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _474 = fma((-_458) + fp_c5_1._m0[13].x, _466, _458);
    float _476 = fma((-_460) + fp_c5_1._m0[13].y, _466, _460);
    float _478 = fma((-_468) + fp_c5_1._m0[13].z, _466, _468);
    float _480 = clamp((-exp2((clamp(fma(sqrt(_464), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_474) + fma(fma((_472 * fp_c7_1._m0[55].x) * _470, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _480, _474);
    _75.y = fma((-_476) + fma(fma((_472 * fp_c7_1._m0[55].y) * _470, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _480, _476);
    _75.z = fma((-_478) + fma(fma((_472 * fp_c7_1._m0[55].z) * _470, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _480, _478);
    _75.w = 1.0;
}


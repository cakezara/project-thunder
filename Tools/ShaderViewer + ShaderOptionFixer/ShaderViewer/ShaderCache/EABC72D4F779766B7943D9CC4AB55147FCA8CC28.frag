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
layout(binding = 3) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 3) in vec4 _66;
layout(location = 4) in vec4 _68;
layout(location = 0) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 0) out vec4 _75;
uint _6[12];

void main()
{
    bool _266 = false;
    float _82 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _84 = 1.0 / (_62.z * gl_FragCoord.w);
    float _86 = _64.x;
    float _88 = _66.x;
    float _90 = _64.y;
    float _92 = _66.y;
    float _94 = _64.z;
    float _96 = _66.z;
    float _98 = _70.x;
    float _100 = _70.y;
    float _102 = 1.0 / _68.w;
    float _104 = inversesqrt(fma(_94, _94, fma(_90, _90, _86 * _86)));
    float _106 = inversesqrt(fma(_96, _96, fma(_92, _92, _88 * _88)));
    float _108 = _86 * _104;
    float _110 = _90 * _104;
    float _112 = _88 * (-_106);
    float _114 = _92 * (-_106);
    float _116 = _94 * _104;
    float _118 = _96 * (-_106);
    float _120 = fma(_116, _118, fma(_110, _114, _108 * _112));
    float _122 = fma(_108 * (-_120), -2.0, -_112);
    float _124 = fma(_110 * (-_120), -2.0, -_114);
    float _126 = fma(_116 * (-_120), -2.0, -_118);
    float _128 = 1.0 / max(abs(_126), max(abs(_122), abs(_124)));
    vec3 _132 = texture(fp_tex_tcb_14, vec2(_98, _100)).xyz;
    vec3 _134 = texture(fp_tex_tcb_1C, vec2(_70.z, _70.w)).xyz;
    vec3 _136 = texture(fp_tex_tcb_1E, vec2(_98, _100)).xyz;
    float _138 = max(_120, fp_c1_1._m0[0].y);
    vec3 _140 = texture(fp_tex_tcb_A, vec2(_98, _100)).xyz;
    float _142 = _140.x;
    float _144 = _140.y;
    float _146 = _140.z;
    vec2 _150 = texture(fp_tex_tcb_38, vec2(_138, (-_82) + (-0.0))).xy;
    float _152 = _150.x;
    float _154 = _150.y;
    vec3 _156 = texture(fp_tex_tcb_36, vec4(_122 * _128, _124 * _128, _126 * _128, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_82 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _158 = _112 + (-fp_c5_1._m0[23].x);
    float _160 = _72.z;
    float _162 = _114 + (-fp_c5_1._m0[23].y);
    float _164 = _72.x;
    float _166 = _108 * _110;
    float _168 = _118 + (-fp_c5_1._m0[23].z);
    float _170 = fma(_82, 0.5, 0.5);
    float _172 = _82 * _82;
    float _174 = _110 * _116;
    float _176 = _116 * _116;
    float _178 = (_170 * 0.5) * _170;
    float _180 = _108 * _116;
    float _182 = inversesqrt(fma(_168, _168, fma(_162, _162, _158 * _158)));
    float _184 = 1.0 / (_178 + fma(_138, -_178, _138));
    float _186 = _158 * _182;
    float _188 = _162 * _182;
    float _190 = _168 * _182;
    float _192 = _172 * _172;
    float _194 = fma(_110, -fp_c5_1._m0[23].y, _108 * (-fp_c5_1._m0[23].x));
    float _196 = max(fma(_116, _190, fma(_110, _188, _108 * _186)), fp_c1_1._m0[0].y) * max(fma(_116, _190, fma(_110, _188, _108 * _186)), fp_c1_1._m0[0].y);
    int _199 = max(0, min(int(trunc((_160 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _201 = max(fma(_116, -fp_c5_1._m0[23].z, _194), fp_c1_1._m0[0].y);
    float _203 = fma(_108, _108, -(_110 * _110));
    float _205 = clamp(fma(_116, -fp_c5_1._m0[23].z, _194), 0.0, 1.0);
    float _207 = max(fma(_118, _190, fma(_114, _188, _112 * _186)), fp_c1_1._m0[0].y);
    uint _210 = uint(int(uint((((int(uint(_199) >> uint(16)) * 20) << 16) + (((_199 & 65535) * 20) + max(0, min(int(trunc((_164 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _212 = fp_c10_1._m0[int(uint(int(_210)) >> uint(2))][int(_210) & 3];
    float _214 = (_184 * (1.0 / (_178 + fma(_178, -_201, _201)))) * ((_172 * (1.0 / max(fma(_196, _192, -_196) + 1.0, fp_c1_1._m0[0].y))) * (_172 * (1.0 / max(fma(_196, _192, -_196) + 1.0, fp_c1_1._m0[0].y))));
    float _216 = exp2(_207 * fma(_207, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _218 = fma(_142, -fp_c6_1._m0[9].x, _142);
    float _220 = fma(_142 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _222 = fma(_144 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _224 = fma(_146, -fp_c6_1._m0[9].x, _146);
    float _226 = fma(_146 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _228 = fma(_144, -fp_c6_1._m0[9].x, _144);
    float _230 = fma(_156.x, fma(_220, _152, _154), max(0.0, fma(_203, fp_c5_1._m0[31].x, (fma(_116, fp_c5_1._m0[25].z, fma(_110, fp_c5_1._m0[25].y, _108 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_180, fp_c5_1._m0[28].w, fma(_176, fp_c5_1._m0[28].z, fma(_174, fp_c5_1._m0[28].y, _166 * fp_c5_1._m0[28].x))))) * fma(_218, -_220, _218));
    float _232 = fma(_156.y, fma(_222, _152, _154), max(0.0, fma(_203, fp_c5_1._m0[31].y, (fma(_116, fp_c5_1._m0[26].z, fma(_110, fp_c5_1._m0[26].y, _108 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_180, fp_c5_1._m0[29].w, fma(_176, fp_c5_1._m0[29].z, fma(_174, fp_c5_1._m0[29].y, _166 * fp_c5_1._m0[29].x))))) * fma(_228, -_222, _228));
    float _234 = fma(_156.z, fma(_226, _152, _154), max(0.0, fma(_203, fp_c5_1._m0[31].z, (fma(_116, fp_c5_1._m0[27].z, fma(_110, fp_c5_1._m0[27].y, _108 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_180, fp_c5_1._m0[30].w, fma(_176, fp_c5_1._m0[30].z, fma(_174, fp_c5_1._m0[30].y, _166 * fp_c5_1._m0[30].x))))) * fma(_224, -_226, _224));
    float _236 = clamp((-fma(max(0.0, (-texture(fp_tex_tcb_2A, vec2(fma(_68.x * _102, 0.5, 0.5), fma(_68.y * _102, -0.5, 0.5))).y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_62.x * gl_FragCoord.w) * _84, (_62.y * gl_FragCoord.w) * _84)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _238 = floatBitsToInt(_212);
    float _240 = _232;
    float _242 = _234;
    float _244 = _230;
    float _246 = _108;
    float _248 = _230;
    float _250 = _232;
    float _252 = _234;
    if (floatBitsToInt(_212) != (-1))
    {
        int _254 = 0;
        float _258;
        float _260;
        float _262;
        int _348;
        do
        {
            int _256 = _238 & 255;
            _258 = _244;
            _260 = _240;
            _262 = _242;
            _266 = uint(_256) >= 30u;
            if (_266)
            {
                break;
            }
            int _268 = _256 << 4;
            uint _270 = uint(int(uint(_268 + 7360) >> uint(2)));
            int _272 = int(_270) + 1;
            uint _274 = uint(int(uint(_268 + 7368) >> uint(2)));
            float _276 = (-_164) + fp_c10_1._m0[int(uint(int(_270)) >> uint(2))][int(_270) & 3];
            float _278 = fp_c10_1._m0[int(uint(_272) >> uint(2))][_272 & 3] + (-_72.y);
            float _280 = (-_160) + fp_c10_1._m0[int(uint(int(_274)) >> uint(2))][int(_274) & 3];
            float _282 = fma(_280, _280, fma(_278, _278, _276 * _276));
            float _284 = _276 * inversesqrt(_282);
            float _286 = _278 * inversesqrt(_282);
            float _288 = _280 * inversesqrt(_282);
            float _290 = _112 + _284;
            float _292 = _114 + _286;
            float _294 = _118 + _288;
            float _296 = inversesqrt(fma(_294, _294, fma(_292, _292, _290 * _290)));
            float _298 = _290 * _296;
            float _300 = _292 * _296;
            float _302 = _294 * _296;
            uint _304 = uint(int(uint(_268 + 6880) >> uint(2)));
            int _306 = int(_304) + 1;
            uint _308 = uint(int(uint(_268 + 6408) >> uint(2)));
            float _310 = fma(_116, _288, fma(_110, _286, _108 * _284));
            uint _312 = uint(int(uint(_268 + 8320) >> uint(2)));
            float _314 = max(_310, fp_c1_1._m0[0].y);
            float _316 = max(fma(_116, _302, fma(_110, _300, _108 * _298)), fp_c1_1._m0[0].y) * max(fma(_116, _302, fma(_110, _300, _108 * _298)), fp_c1_1._m0[0].y);
            float _318 = max(fma(_118, _302, fma(_114, _300, _112 * _298)), fp_c1_1._m0[0].y);
            uint _320 = uint(int(uint(_268 + 6400) >> uint(2)));
            int _322 = int(_320) + 1;
            float _324 = exp2(_318 * fma(_318, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _326 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_312)) >> uint(2))][int(_312) & 3]) != 0;
            float _328 = (_184 * (1.0 / (_178 + fma(_178, -_314, _314)))) * ((_172 * (1.0 / max(fma(_192, _316, -_316) + 1.0, fp_c1_1._m0[0].y))) * (_172 * (1.0 / max(fma(_192, _316, -_316) + 1.0, fp_c1_1._m0[0].y))));
            float _330 = _226 + fma(_226, -_324, _324);
            float _332 = _330;
            if (!_326)
            {
                _332 = 1.0;
            }
            float _334 = _332;
            if (_326)
            {
                uint _336 = uint(int(uint(_268 + 7840) >> uint(2)));
                int _338 = int(_336) + 1;
                uint _340 = uint(int(uint(_268 + 6888) >> uint(2)));
                float _342 = fp_c10_1._m0[int(uint(int(_340)) >> uint(2))][int(_340) & 3];
                int _344 = int(_340) + 1;
                uint _346 = uint(int(uint(_268 + 7848) >> uint(2)));
                _334 = exp2(fp_c10_1._m0[int(uint(_344) >> uint(2))][_344 & 3] * log2(clamp(((-_342) + fma(_288, -fp_c10_1._m0[int(uint(int(_346)) >> uint(2))][int(_346) & 3], fma(_286, -fp_c10_1._m0[int(uint(_338) >> uint(2))][_338 & 3], _284 * (-fp_c10_1._m0[int(uint(int(_336)) >> uint(2))][int(_336) & 3])))) * (1.0 / ((-_342) + 1.0)), 0.0, 1.0)));
            }
            _348 = _254 + 1;
            float _350 = (exp2(fp_c10_1._m0[int(uint(_306) >> uint(2))][_306 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_304)) >> uint(2))][int(_304) & 3], -sqrt(_282), fp_c1_1._m0[1].x), 0.0, 1.0))) * _334) * clamp(_310 + (-0.0), 0.0, 1.0);
            float _352 = fma(fp_c10_1._m0[int(uint(_322) >> uint(2))][_322 & 3] * _350, fma(_228, fp_c1_1._m0[1].y, ((_222 + fma(_222, -_324, _324)) * _328) * 0.079577468335628509521484375), _240);
            float _354 = fma(fp_c10_1._m0[int(uint(int(_308)) >> uint(2))][int(_308) & 3] * _350, fma(_224, fp_c1_1._m0[1].y, (_330 * _328) * 0.079577468335628509521484375), _242);
            float _356 = fma(fp_c10_1._m0[int(uint(int(_320)) >> uint(2))][int(_320) & 3] * _350, fma(_218, fp_c1_1._m0[1].y, ((_220 + fma(_220, -_324, _324)) * _328) * 0.079577468335628509521484375), _244);
            _238 = int(uint(_238) >> uint(8));
            _254 = _348;
            _240 = _352;
            _242 = _354;
            _244 = _356;
            _258 = _356;
            _260 = _352;
            _262 = _354;
        } while (!(_348 >= 4));
        _266 = false;
        _248 = _258;
        _250 = _260;
        _252 = _262;
        if ((_238 & 255) == 30)
        {
            float _358 = _72.y;
            float _360 = 1.0 / (fma(_160, fp_c10_1._m0[565].z, fma(_358, fp_c10_1._m0[565].y, _164 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _362 = 1.0 / fp_c10_1._m0[561].y;
            float _364 = _160 + (-fp_c10_1._m0[557].z);
            float _366 = _364 * fp_c10_1._m0[558].x;
            float _368 = (-_164) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_362, fp_c10_1._m0[557].x);
            float _370 = (-_160) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_362, fp_c10_1._m0[557].z);
            float _372 = _164 + (-fp_c10_1._m0[557].x);
            float _374 = _368 * _368;
            float _376 = _372 * fp_c10_1._m0[558].z;
            float _378 = fma(_364, _364, _372 * _372);
            float _380 = sqrt(fma(_370, _370, _374)) * (-fp_c10_1._m0[558].y);
            float _382 = ((-float(_366 < _376)) + float(_366 > _376)) * fp_c10_1._m0[561].y;
            float _384 = inversesqrt(fma(_370, _370, fma(_380, _380, _374)));
            float _386 = _368 * _384;
            float _388 = _380 * _384;
            float _390 = fma(_364, fp_c10_1._m0[558].z, _372 * fp_c10_1._m0[558].x);
            float _392 = _370 * _384;
            float _394 = _112 + _386;
            float _396 = _114 + _388;
            bool _398 = _390 > 0.0;
            float _400 = inversesqrt(fma(_392, _392, _386 * _386));
            float _402 = _118 + _392;
            float _404 = fma(_116, _392, fma(_110, _388, _108 * _386));
            float _406 = inversesqrt(fma(_402, _402, fma(_396, _396, _394 * _394)));
            float _408 = _394 * _406;
            float _410 = _396 * _406;
            float _412 = _402 * _406;
            if (_398)
            {
                _246 = sqrt(_378);
            }
            float _414 = _246;
            if (!_398)
            {
                _414 = 1.0;
            }
            bool _416 = fma(_364 * inversesqrt(_378), fp_c10_1._m0[558].z, (_372 * inversesqrt(_378)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _418 = max(_404, fp_c1_1._m0[0].y);
            float _420 = max(fma(_118, _412, fma(_114, _410, _112 * _408)), fp_c1_1._m0[0].y);
            float _422 = max(fma(_116, _412, fma(_110, _410, _108 * _408)), fp_c1_1._m0[0].y) * max(fma(_116, _412, fma(_110, _410, _108 * _408)), fp_c1_1._m0[0].y);
            float _424 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_372, fma(_382, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_364 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_382 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_372, fma(_382, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_364 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_382 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _426 = clamp(fma(_390 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_390 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _428 = log2(clamp((fma(_392 * _400, -fp_c10_1._m0[558].z, (_386 * _400) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _430 = exp2(_420 * fma(_420, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _432 = _428;
            if (_416)
            {
                _432 = fma(_424, -_424, fp_c1_1._m0[1].x) * fma(_424, -_424, fp_c1_1._m0[1].x);
            }
            float _434 = _432;
            if (!_416)
            {
                _434 = 1.0;
            }
            float _436 = (_184 * (1.0 / (_178 + fma(_178, -_418, _418)))) * ((_172 * (1.0 / max(fma(_192, _422, -_422) + 1.0, fp_c1_1._m0[0].y))) * (_172 * (1.0 / max(fma(_192, _422, -_422) + 1.0, fp_c1_1._m0[0].y))));
            float _438 = ((exp2(log2(clamp(fma(_414, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_428)) * min(fma(_426, -_426, fp_c1_1._m0[1].x) * fma(_426, -_426, fp_c1_1._m0[1].x), _434)) * clamp(_404 + (-0.0), 0.0, 1.0);
            float _440 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_160, fp_c10_1._m0[562].z, fma(_358, fp_c10_1._m0[562].y, _164 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _360, 0.5, 0.5), (-fma((fma(_160, fp_c10_1._m0[563].z, fma(_358, fp_c10_1._m0[563].y, _164 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _360, 0.5, 0.5)) + 1.0)).z > fma((fma(_160, fp_c10_1._m0[564].z, fma(_358, fp_c10_1._m0[564].y, _164 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _360, 0.5, 0.5)) || (_390 <= 0.0));
            _248 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _438) * fma(_218, fp_c1_1._m0[1].y, ((_220 + fma(_220, -_430, _430)) * _436) * 0.079577468335628509521484375), _440, _258);
            _250 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _438) * fma(_228, fp_c1_1._m0[1].y, ((_222 + fma(_222, -_430, _430)) * _436) * 0.079577468335628509521484375), _440, _260);
            _252 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _438) * fma(_224, fp_c1_1._m0[1].y, ((_226 + fma(_226, -_430, _430)) * _436) * 0.079577468335628509521484375), _440, _262);
        }
    }
    float _442 = _164 + (-fp_c3_1._m0[11].w);
    float _444 = _72.y;
    float _446 = _160 + (-fp_c3_1._m0[13].w);
    float _448 = _444 + (-fp_c3_1._m0[12].w);
    float _450 = fma(_446, _446, fma(_448, _448, _442 * _442));
    float _452 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _454 = fma(fma(_134.x, _132.x * fp_c6_1._m0[92].x, _136.x), _452, fma(_236, fma(_214 * (_220 + fma(_220, -_216, _216)), fp_c1_1._m0[0].w, _218 * 0.3183098733425140380859375) * (_205 * fp_c5_1._m0[5].x), _248));
    float _456 = fma(fma(_134.y, _132.y * fp_c6_1._m0[92].y, _136.y), _452, fma(_236, fma(_214 * (_222 + fma(_222, -_216, _216)), fp_c1_1._m0[0].w, _228 * 0.3183098733425140380859375) * (_205 * fp_c5_1._m0[5].y), _250));
    float _458 = fma(fma(_134.z, _132.z * fp_c6_1._m0[92].z, _136.z), _452, fma(_236, fma(_214 * (_226 + fma(_226, -_216, _216)), fp_c1_1._m0[0].w, _224 * 0.3183098733425140380859375) * (_205 * fp_c5_1._m0[5].z), _252));
    float _460 = exp2(log2(clamp(sqrt(_450) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_446 * inversesqrt(_450), fp_c5_1._m0[23].z, fma(_448 * inversesqrt(_450), fp_c5_1._m0[23].y, (_442 * inversesqrt(_450)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _462 = clamp(fma(_236, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _464 = clamp(fma(fma(_160, fp_c5_1._m0[14].z, fma(_444, fp_c5_1._m0[14].y, _164 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _466 = fma((-_454) + fp_c5_1._m0[13].x, _464, _454);
    float _468 = fma((-_456) + fp_c5_1._m0[13].y, _464, _456);
    float _470 = fma((-_458) + fp_c5_1._m0[13].z, _464, _458);
    float _472 = clamp((-exp2((clamp(fma(sqrt(_450), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_466) + fma(fma((_460 * fp_c7_1._m0[55].x) * _462, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _472, _466);
    _75.y = fma((-_468) + fma(fma((_460 * fp_c7_1._m0[55].y) * _462, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _472, _468);
    _75.z = fma((-_470) + fma(fma((_460 * fp_c7_1._m0[55].z) * _462, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _472, _470);
    _75.w = 1.0;
}


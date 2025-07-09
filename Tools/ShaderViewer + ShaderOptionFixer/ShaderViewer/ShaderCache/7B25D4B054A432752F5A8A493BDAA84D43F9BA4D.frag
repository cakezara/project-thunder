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
    bool _268 = false;
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
    float _128 = max(_120, fp_c1_1._m0[0].y);
    float _130 = 1.0 / max(abs(_126), max(abs(_122), abs(_124)));
    vec3 _134 = texture(fp_tex_tcb_A, vec2(_98, _100)).xyz;
    float _136 = _134.x;
    float _138 = _134.y;
    float _140 = _134.z;
    vec3 _142 = texture(fp_tex_tcb_14, vec2(_98, _100)).xyz;
    vec3 _144 = texture(fp_tex_tcb_1C, vec2(_70.z, _70.w)).xyz;
    vec3 _146 = texture(fp_tex_tcb_1E, vec2(_98, _100)).xyz;
    vec2 _150 = texture(fp_tex_tcb_38, vec2(_128, (-_82) + (-0.0))).xy;
    float _152 = _150.x;
    float _154 = _150.y;
    vec3 _156 = texture(fp_tex_tcb_36, vec4(_122 * _130, _124 * _130, _126 * _130, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_82 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _158 = _72.x;
    float _160 = _72.z;
    float _162 = fma(_82, 0.5, 0.5);
    float _164 = _82 * _82;
    float _166 = _112 + (-fp_c5_1._m0[23].x);
    float _168 = _114 + (-fp_c5_1._m0[23].y);
    float _170 = _118 + (-fp_c5_1._m0[23].z);
    float _172 = _108 * _110;
    float _174 = inversesqrt(fma(_170, _170, fma(_168, _168, _166 * _166)));
    float _176 = _110 * _116;
    int _179 = max(0, min(int(trunc((_160 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _181 = _166 * _174;
    float _183 = _170 * _174;
    float _185 = _116 * _116;
    float _187 = _108 * _116;
    float _189 = _168 * _174;
    float _191 = max(fma(_118, _183, fma(_114, _189, _112 * _181)), fp_c1_1._m0[0].y);
    float _193 = fma(_110, -fp_c5_1._m0[23].y, _108 * (-fp_c5_1._m0[23].x));
    float _195 = _164 * _164;
    float _197 = max(fma(_116, _183, fma(_110, _189, _108 * _181)), fp_c1_1._m0[0].y) * max(fma(_116, _183, fma(_110, _189, _108 * _181)), fp_c1_1._m0[0].y);
    float _199 = (_162 * 0.5) * _162;
    float _201 = fma(_138, -fp_c6_1._m0[9].x, _138);
    float _203 = clamp(fma(_116, -fp_c5_1._m0[23].z, _193), 0.0, 1.0);
    float _205 = max(fma(_116, -fp_c5_1._m0[23].z, _193), fp_c1_1._m0[0].y);
    float _207 = fma(_136, -fp_c6_1._m0[9].x, _136);
    float _209 = fma(_108, _108, -(_110 * _110));
    float _211 = exp2(_191 * fma(_191, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _213 = fma(_136 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _215 = 1.0 / (_199 + fma(_128, -_199, _128));
    float _217 = fma(_138 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    uint _220 = uint(int(uint((((int(uint(_179) >> uint(16)) * 20) << 16) + (((_179 & 65535) * 20) + max(0, min(int(trunc((_158 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _222 = fp_c10_1._m0[int(uint(int(_220)) >> uint(2))][int(_220) & 3];
    float _224 = fma(_140 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _226 = clamp((-fma(max(0.0, (-texture(fp_tex_tcb_2A, vec2(fma(_68.x * _102, 0.5, 0.5), fma(_68.y * _102, -0.5, 0.5))).y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_62.x * gl_FragCoord.w) * _84, (_62.y * gl_FragCoord.w) * _84)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _228 = fma(_140, -fp_c6_1._m0[9].x, _140);
    float _230 = (_215 * (1.0 / (_199 + fma(_199, -_205, _205)))) * ((_164 * (1.0 / max(fma(_197, _195, -_197) + 1.0, fp_c1_1._m0[0].y))) * (_164 * (1.0 / max(fma(_197, _195, -_197) + 1.0, fp_c1_1._m0[0].y))));
    float _232 = fma(_140 * _142.z, fp_c1_1._m0[1].x, fma(_138 * _142.y, fp_c1_1._m0[0].w, (_136 * _142.x) * 0.298911988735198974609375));
    float _234 = fma(_156.y, fma(_217, _152, _154), max(0.0, fma(_209, fp_c5_1._m0[31].y, (fma(_116, fp_c5_1._m0[26].z, fma(_110, fp_c5_1._m0[26].y, _108 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_187, fp_c5_1._m0[29].w, fma(_185, fp_c5_1._m0[29].z, fma(_176, fp_c5_1._m0[29].y, _172 * fp_c5_1._m0[29].x))))) * fma(_201, -_217, _201));
    float _236 = fma(_156.x, fma(_213, _152, _154), max(0.0, fma(_209, fp_c5_1._m0[31].x, (fma(_116, fp_c5_1._m0[25].z, fma(_110, fp_c5_1._m0[25].y, _108 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_187, fp_c5_1._m0[28].w, fma(_185, fp_c5_1._m0[28].z, fma(_176, fp_c5_1._m0[28].y, _172 * fp_c5_1._m0[28].x))))) * fma(_207, -_213, _207));
    float _238 = fma(_156.z, fma(_224, _152, _154), max(0.0, fma(_209, fp_c5_1._m0[31].z, (fma(_116, fp_c5_1._m0[27].z, fma(_110, fp_c5_1._m0[27].y, _108 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_187, fp_c5_1._m0[30].w, fma(_185, fp_c5_1._m0[30].z, fma(_176, fp_c5_1._m0[30].y, _172 * fp_c5_1._m0[30].x))))) * fma(_228, -_224, _228));
    float _240 = _238;
    float _242 = _236;
    float _244 = _234;
    float _246 = _108;
    float _248 = _234;
    float _250 = _236;
    float _252 = _238;
    if (floatBitsToInt(_222) != (-1))
    {
        int _254 = floatBitsToInt(_222);
        int _256 = 0;
        float _260;
        float _262;
        float _264;
        int _350;
        do
        {
            int _258 = _254 & 255;
            _260 = _242;
            _262 = _244;
            _264 = _240;
            _268 = uint(_258) >= 30u;
            if (_268)
            {
                break;
            }
            int _270 = _258 << 4;
            uint _272 = uint(int(uint(_270 + 7360) >> uint(2)));
            int _274 = int(_272) + 1;
            uint _276 = uint(int(uint(_270 + 7368) >> uint(2)));
            float _278 = (-_158) + fp_c10_1._m0[int(uint(int(_272)) >> uint(2))][int(_272) & 3];
            float _280 = fp_c10_1._m0[int(uint(_274) >> uint(2))][_274 & 3] + (-_72.y);
            float _282 = (-_160) + fp_c10_1._m0[int(uint(int(_276)) >> uint(2))][int(_276) & 3];
            float _284 = fma(_282, _282, fma(_280, _280, _278 * _278));
            float _286 = _278 * inversesqrt(_284);
            float _288 = _280 * inversesqrt(_284);
            float _290 = _282 * inversesqrt(_284);
            float _292 = _112 + _286;
            float _294 = _114 + _288;
            float _296 = _118 + _290;
            float _298 = inversesqrt(fma(_296, _296, fma(_294, _294, _292 * _292)));
            float _300 = _292 * _298;
            float _302 = _294 * _298;
            float _304 = _296 * _298;
            uint _306 = uint(int(uint(_270 + 6880) >> uint(2)));
            int _308 = int(_306) + 1;
            uint _310 = uint(int(uint(_270 + 6408) >> uint(2)));
            float _312 = fma(_116, _290, fma(_110, _288, _108 * _286));
            uint _314 = uint(int(uint(_270 + 8320) >> uint(2)));
            float _316 = max(_312, fp_c1_1._m0[0].y);
            float _318 = max(fma(_116, _304, fma(_110, _302, _108 * _300)), fp_c1_1._m0[0].y) * max(fma(_116, _304, fma(_110, _302, _108 * _300)), fp_c1_1._m0[0].y);
            float _320 = max(fma(_118, _304, fma(_114, _302, _112 * _300)), fp_c1_1._m0[0].y);
            uint _322 = uint(int(uint(_270 + 6400) >> uint(2)));
            int _324 = int(_322) + 1;
            float _326 = exp2(_320 * fma(_320, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _328 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_314)) >> uint(2))][int(_314) & 3]) != 0;
            float _330 = (_215 * (1.0 / (_199 + fma(_199, -_316, _316)))) * ((_164 * (1.0 / max(fma(_195, _318, -_318) + 1.0, fp_c1_1._m0[0].y))) * (_164 * (1.0 / max(fma(_195, _318, -_318) + 1.0, fp_c1_1._m0[0].y))));
            float _332 = _224 + fma(_224, -_326, _326);
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
            float _352 = (exp2(fp_c10_1._m0[int(uint(_308) >> uint(2))][_308 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_306)) >> uint(2))][int(_306) & 3], -sqrt(_284), fp_c1_1._m0[1].z), 0.0, 1.0))) * _336) * clamp(_312 + (-0.0), 0.0, 1.0);
            float _354 = fma(fp_c10_1._m0[int(uint(int(_310)) >> uint(2))][int(_310) & 3] * _352, fma(_228, fp_c1_1._m0[1].w, (_332 * _330) * 0.079577468335628509521484375), _240);
            float _356 = fma(fp_c10_1._m0[int(uint(int(_322)) >> uint(2))][int(_322) & 3] * _352, fma(_207, fp_c1_1._m0[1].w, ((_213 + fma(_213, -_326, _326)) * _330) * 0.079577468335628509521484375), _242);
            float _358 = fma(fp_c10_1._m0[int(uint(_324) >> uint(2))][_324 & 3] * _352, fma(_201, fp_c1_1._m0[1].w, ((_217 + fma(_217, -_326, _326)) * _330) * 0.079577468335628509521484375), _244);
            _254 = int(uint(_254) >> uint(8));
            _256 = _350;
            _240 = _354;
            _242 = _356;
            _244 = _358;
            _260 = _356;
            _262 = _358;
            _264 = _354;
        } while (!(_350 >= 4));
        _268 = false;
        _248 = _262;
        _250 = _260;
        _252 = _264;
        if ((_254 & 255) == 30)
        {
            float _360 = _72.y;
            float _362 = 1.0 / (fma(_160, fp_c10_1._m0[565].z, fma(_360, fp_c10_1._m0[565].y, _158 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _364 = 1.0 / fp_c10_1._m0[561].y;
            float _366 = _160 + (-fp_c10_1._m0[557].z);
            float _368 = _158 + (-fp_c10_1._m0[557].x);
            float _370 = (-_158) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_364, fp_c10_1._m0[557].x);
            float _372 = (-_160) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_364, fp_c10_1._m0[557].z);
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
            float _394 = _112 + _388;
            float _396 = fma(_366, fp_c10_1._m0[558].z, _368 * fp_c10_1._m0[558].x);
            float _398 = _114 + _390;
            bool _400 = _396 > 0.0;
            float _402 = inversesqrt(fma(_392, _392, _388 * _388));
            float _404 = _118 + _392;
            float _406 = fma(_116, _392, fma(_110, _390, _108 * _388));
            float _408 = inversesqrt(fma(_404, _404, fma(_398, _398, _394 * _394)));
            float _410 = _394 * _408;
            float _412 = _398 * _408;
            float _414 = _404 * _408;
            if (_400)
            {
                _246 = sqrt(_380);
            }
            float _416 = _246;
            if (!_400)
            {
                _416 = 1.0;
            }
            bool _418 = fma(_366 * inversesqrt(_380), fp_c10_1._m0[558].z, (_368 * inversesqrt(_380)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _420 = max(_406, fp_c1_1._m0[0].y);
            float _422 = max(fma(_116, _414, fma(_110, _412, _108 * _410)), fp_c1_1._m0[0].y) * max(fma(_116, _414, fma(_110, _412, _108 * _410)), fp_c1_1._m0[0].y);
            float _424 = max(fma(_118, _414, fma(_114, _412, _112 * _410)), fp_c1_1._m0[0].y);
            float _426 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_368, fma(_384, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_366 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_384 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_368, fma(_384, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_366 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_384 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _428 = clamp(fma(_396 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0) * clamp(fma(_396 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0);
            float _430 = log2(clamp((fma(_392 * _402, -fp_c10_1._m0[558].z, (_388 * _402) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _432 = _430;
            if (_418)
            {
                _432 = fma(_426, -_426, fp_c1_1._m0[1].z) * fma(_426, -_426, fp_c1_1._m0[1].z);
            }
            float _434 = exp2(_424 * fma(_424, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _436 = _432;
            if (!_418)
            {
                _436 = 1.0;
            }
            float _438 = (_215 * (1.0 / (_199 + fma(_199, -_420, _420)))) * ((_164 * (1.0 / max(fma(_195, _422, -_422) + 1.0, fp_c1_1._m0[0].y))) * (_164 * (1.0 / max(fma(_195, _422, -_422) + 1.0, fp_c1_1._m0[0].y))));
            float _440 = (min(fma(_428, -_428, fp_c1_1._m0[1].z) * fma(_428, -_428, fp_c1_1._m0[1].z), _436) * (exp2(log2(clamp(fma(_416, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_430))) * clamp(_406 + (-0.0), 0.0, 1.0);
            float _442 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_160, fp_c10_1._m0[562].z, fma(_360, fp_c10_1._m0[562].y, _158 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _362, 0.5, 0.5), (-fma((fma(_160, fp_c10_1._m0[563].z, fma(_360, fp_c10_1._m0[563].y, _158 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _362, 0.5, 0.5)) + 1.0)).z > fma((fma(_160, fp_c10_1._m0[564].z, fma(_360, fp_c10_1._m0[564].y, _158 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _362, 0.5, 0.5)) || (_396 <= 0.0));
            _248 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _440) * fma(_201, fp_c1_1._m0[1].w, ((_217 + fma(_217, -_434, _434)) * _438) * 0.079577468335628509521484375), _442, _262);
            _250 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _440) * fma(_207, fp_c1_1._m0[1].w, ((_213 + fma(_213, -_434, _434)) * _438) * 0.079577468335628509521484375), _442, _260);
            _252 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _440) * fma(_228, fp_c1_1._m0[1].w, ((_224 + fma(_224, -_434, _434)) * _438) * 0.079577468335628509521484375), _442, _264);
        }
    }
    float _444 = _158 + (-fp_c3_1._m0[11].w);
    float _446 = _72.y;
    float _448 = _160 + (-fp_c3_1._m0[13].w);
    float _450 = fma(fma(_144.y + fp_c6_1._m0[97].y, _232, _146.y), fp_c6_1._m0[11].x, fma(_226, (_203 * fp_c5_1._m0[5].y) * fma((_217 + fma(_217, -_211, _211)) * _230, fp_c1_1._m0[1].y, _201 * 0.3183098733425140380859375), _248));
    float _452 = _446 + (-fp_c3_1._m0[12].w);
    float _454 = fma(_448, _448, fma(_452, _452, _444 * _444));
    float _456 = fma(fma(_144.x + fp_c6_1._m0[97].x, _232, _146.x), fp_c6_1._m0[11].x, fma(_226, (_203 * fp_c5_1._m0[5].x) * fma((_213 + fma(_213, -_211, _211)) * _230, fp_c1_1._m0[1].y, _207 * 0.3183098733425140380859375), _250));
    float _458 = fma(fma(_144.z + fp_c6_1._m0[97].z, _232, _146.z), fp_c6_1._m0[11].x, fma(_226, (_203 * fp_c5_1._m0[5].z) * fma((_224 + fma(_224, -_211, _211)) * _230, fp_c1_1._m0[1].y, _228 * 0.3183098733425140380859375), _252));
    float _460 = exp2(log2(clamp(sqrt(_454) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_448 * inversesqrt(_454), fp_c5_1._m0[23].z, fma(_452 * inversesqrt(_454), fp_c5_1._m0[23].y, (_444 * inversesqrt(_454)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _462 = clamp(fma(_226, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _464 = clamp(fma(fma(_160, fp_c5_1._m0[14].z, fma(_446, fp_c5_1._m0[14].y, _158 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _466 = fma((-_456) + fp_c5_1._m0[13].x, _464, _456);
    float _468 = fma((-_450) + fp_c5_1._m0[13].y, _464, _450);
    float _470 = fma((-_458) + fp_c5_1._m0[13].z, _464, _458);
    float _472 = clamp((-exp2((clamp(fma(sqrt(_454), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_466) + fma(fma((_460 * fp_c7_1._m0[55].x) * _462, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _472, _466);
    _75.y = fma((-_468) + fma(fma((_460 * fp_c7_1._m0[55].y) * _462, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _472, _468);
    _75.z = fma((-_470) + fma(fma((_460 * fp_c7_1._m0[55].z) * _462, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _472, _470);
    _75.w = 1.0;
}


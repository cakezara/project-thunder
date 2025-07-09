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

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 2, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 6) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 5) in vec4 _78;
layout(location = 6) in vec4 _80;
layout(location = 3) in vec4 _82;
layout(location = 0) out vec4 _85;
uint _6[12];

void main()
{
    bool _358 = false;
    float _92 = _70.x;
    float _94 = _70.y;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    float _104 = texture(fp_tex_tcb_1A, vec2(_92, _94)).x;
    float _106 = _72.x;
    float _108 = _74.x;
    float _110 = _72.y;
    float _112 = _74.y;
    float _114 = _72.z;
    float _116 = _74.z;
    float _118 = _76.x;
    float _120 = 1.0 / (_80.z * gl_FragCoord.w);
    float _122 = _76.z;
    float _124 = _76.y;
    float _126 = _76.w;
    float _128 = inversesqrt(fma(_114, _114, fma(_110, _110, _106 * _106)));
    float _130 = inversesqrt(fma(_116, _116, fma(_112, _112, _108 * _108)));
    float _132 = _106 * _128;
    float _134 = _110 * _128;
    float _136 = _114 * _128;
    float _138 = _108 * (-_130);
    float _140 = _112 * (-_130);
    float _142 = _116 * (-_130);
    float _144 = fma(_136, -_142, fma(_134, -_140, _132 * (-_138)));
    float _146 = max(fma(_142, fma(_136 * _144, -2.0, -_142), fma(_140, fma(_134 * _144, -2.0, -_140), _138 * fma(_132 * _144, -2.0, -_138))), fp_c1_1._m0[0].w);
    float _148 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _150 = fma(_132, _148, fma(_100, _118, _102 * (fma(_134, _122, -(_136 * _124)) * _126)));
    float _152 = fma(_134, _148, fma(_100, _124, _102 * (fma(_136, _118, -(_132 * _122)) * _126)));
    float _154 = fma(_136, _148, fma(_100, _122, _102 * (fma(_132, _124, -(_134 * _118)) * _126)));
    float _156 = fma(_136, _142, fma(_134, _140, _132 * _138));
    float _158 = inversesqrt(fma(_154, _154, fma(_152, _152, _150 * _150)));
    float _160 = fma(_134 * (-_156), -2.0, -_140);
    float _162 = fma(_132 * (-_156), -2.0, -_138);
    float _164 = _82.y;
    float _166 = fma(_136 * (-_156), -2.0, -_142);
    float _168 = _150 * _158;
    float _170 = _152 * _158;
    float _172 = _154 * _158;
    float _174 = 1.0 / max(abs(_166), max(abs(_162), abs(_160)));
    float _176 = fma(_172, _142, fma(_170, _140, _168 * _138));
    float _178 = clamp(_176 + (-0.0), 0.0, 1.0);
    float _180 = _178 + (-fp_c6_1._m0[9].z);
    float _182 = _164 + (-fp_c9_1._m0[32].w);
    float _184 = _182;
    if (_164 < fp_c9_1._m0[32].w)
    {
        _184 = _182 * (-5.0);
    }
    float _186 = 1.0 / _78.w;
    float _188 = fma(exp2(((_180 * (-_180)) * fp_c6_1._m0[9].w) * 1.44269502162933349609375), fp_c6_1._m0[10].x, fma(_178, fp_c6_1._m0[41].x, fp_c6_1._m0[41].y));
    float _190 = clamp((exp2(log2(clamp(max(_176, fp_c1_1._m0[0].y) + (-0.0), 0.0, 1.0)) * fp_c6_1._m0[43].x) * fp_c6_1._m0[43].y) * _104, 0.0, 1.0);
    float _192 = max(texture(fp_tex_tcb_10, vec2(_92, _94)).x, fp_c1_1._m0[1].x);
    float _194 = max(0.0, (clamp(fma(_184, -(1.0 / fma(clamp((-_170) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_184, -(1.0 / fma(clamp((-_170) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0)) * ((-_170) + 1.2000000476837158203125)) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w);
    float _196 = fma(_190, (-_132) + _168, _132);
    float _198 = fma(_190, (-_134) + _170, _134);
    float _200 = fma(_190, (-_136) + _172, _136);
    float _202 = _196 * _198;
    float _204 = _198 * _200;
    float _206 = _200 * _200;
    float _208 = _196 * _200;
    vec3 _212 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _214 = _212.x;
    float _216 = _212.y;
    float _218 = _212.z;
    float _220 = fma(_196, _196, -(_198 * _198));
    float _222 = texture(fp_tex_tcb_12, vec2(_92, _94)).x;
    float _224 = max(fma(_104, (-_156) + _188, _156), fp_c1_1._m0[0].w);
    vec3 _226 = texture(fp_tex_tcb_1E, vec2(fma(_146, fp_c6_1._m0[51].x, _70.z), _70.w)).xyz;
    vec2 _228 = texture(fp_tex_tcb_38, vec2(_224, (-_192) + (-0.0))).xy;
    float _230 = _228.x;
    float _232 = _228.y;
    vec3 _234 = texture(fp_tex_tcb_36, vec4(_162 * _174, _160 * _174, _166 * _174, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_192 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _236 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _186, 0.5, 0.5), fma(_78.y * _186, -0.5, 0.5))).xy;
    float _238 = _138 + (-fp_c5_1._m0[23].x);
    float _240 = fma(_192, 0.5, 0.5);
    float _242 = _192 * _192;
    float _244 = _140 + (-fp_c5_1._m0[23].y);
    float _246 = _142 + (-fp_c5_1._m0[23].z);
    float _248 = inversesqrt(fma(_246, _246, fma(_244, _244, _238 * _238)));
    float _250 = _238 * _248;
    float _252 = _244 * _248;
    float _254 = _246 * _248;
    float _256 = max(fma(_142, _254, fma(_140, _252, _138 * _250)), fp_c1_1._m0[0].w);
    float _258 = _82.z;
    float _260 = exp2(_256 * fma(_256, fp_c1_1._m0[1].y, -6.9831600189208984375));
    float _262 = clamp(texture(fp_tex_tcb_C, vec2(_92, _94)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _264 = fma((-_214) + fp_c6_1._m0[93].x, _262, _214);
    float _266 = fma((-_216) + fp_c6_1._m0[93].y, _262, _216);
    float _268 = fma((-_218) + fp_c6_1._m0[93].z, _262, _218);
    float _270 = (_240 * 0.5) * _240;
    float _272 = max(fma(_136, _254, fma(_134, _252, _132 * _250)), fp_c1_1._m0[0].w) * max(fma(_136, _254, fma(_134, _252, _132 * _250)), fp_c1_1._m0[0].w);
    float _274 = fma(_264, -_222, _264);
    float _276 = max(fma(_136, -fp_c5_1._m0[23].z, fma(_134, -fp_c5_1._m0[23].y, _132 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w);
    float _278 = fma(_266, -_222, _266);
    float _280 = fma(_190, (-_274) + fp_c6_1._m0[44].x, _274);
    float _282 = fma(_190, (-_278) + fp_c6_1._m0[44].y, _278);
    float _284 = fma(_268, -_222, _268);
    float _286 = fma(_280, fma(_104, fp_c6_1._m0[40].x, -_104), _280);
    float _288 = fma(_190, (-_284) + fp_c6_1._m0[44].z, _284);
    float _290 = clamp(_188 + (-0.0), 0.0, 1.0);
    float _292 = fma(_282, fma(_104, fp_c6_1._m0[40].y, -_104), _282);
    float _294 = fma(_280 + (-_286), _290, _286);
    float _296 = fma(_222, _264 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _298 = fma(_288, fma(_104, fp_c6_1._m0[40].z, -_104), _288);
    float _300 = _82.x;
    float _302 = ((1.0 / (_270 + fma(_224, -_270, _224))) * (1.0 / (_270 + fma(_270, -_276, _276)))) * ((_242 * (1.0 / max(fma(_242 * _242, _272, -_272) + 1.0, fp_c1_1._m0[0].w))) * (_242 * (1.0 / max(fma(_242 * _242, _272, -_272) + 1.0, fp_c1_1._m0[0].w))));
    float _304 = fma(_282 + (-_292), _290, _292);
    float _306 = fma(_222, _266 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _308 = fma(_222, _268 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _310 = fma(_288 + (-_298), _290, _298);
    int _313 = max(0, min(int(trunc((_258 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _315 = exp2(_146 * fma(_146, fp_c1_1._m0[1].y, -6.9831600189208984375));
    uint _318 = uint(int(uint((((int(uint(_313) >> uint(16)) * 20) << 16) + (((_313 & 65535) * 20) + max(0, min(int(trunc((_300 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _320 = fp_c10_1._m0[int(uint(int(_318)) >> uint(2))][int(_318) & 3];
    float _322 = clamp(fma(_172, -fp_c5_1._m0[23].z, fma(_170, -fp_c5_1._m0[23].y, _168 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _324 = fma(fma(_194, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_220, fp_c5_1._m0[31].y, (fma(_200, fp_c5_1._m0[26].z, fma(_198, fp_c5_1._m0[26].y, _196 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_208, fp_c5_1._m0[29].w, fma(_206, fp_c5_1._m0[29].z, fma(_204, fp_c5_1._m0[29].y, _202 * fp_c5_1._m0[29].x)))))), fma(_306, -_304, _304), fma(_104, (_306 + fma(_306, -_315, _315)) * (_266 * (_226.y * fp_c6_1._m0[50].w)), fma(_306, _230, _232) * _234.y));
    float _326 = fma(fma(_194, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_220, fp_c5_1._m0[31].z, (fma(_200, fp_c5_1._m0[27].z, fma(_198, fp_c5_1._m0[27].y, _196 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_208, fp_c5_1._m0[30].w, fma(_206, fp_c5_1._m0[30].z, fma(_204, fp_c5_1._m0[30].y, _202 * fp_c5_1._m0[30].x)))))), fma(_308, -_310, _310), fma(_104, (_308 + fma(_308, -_315, _315)) * (_268 * (_226.z * fp_c6_1._m0[50].w)), fma(_308, _230, _232) * _234.z));
    float _328 = fma(fma(_194, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_220, fp_c5_1._m0[31].x, (fma(_200, fp_c5_1._m0[25].z, fma(_198, fp_c5_1._m0[25].y, _196 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_208, fp_c5_1._m0[28].w, fma(_206, fp_c5_1._m0[28].z, fma(_204, fp_c5_1._m0[28].y, _202 * fp_c5_1._m0[28].x)))))), fma(_296, -_294, _294), fma(_104, (_296 + fma(_296, -_315, _315)) * (_264 * (_226.x * fp_c6_1._m0[50].w)), fma(_296, _230, _232) * _234.x));
    float _330 = clamp((-fma(max((-_236.x) + 1.0, (-_236.y) + 1.0), clamp(_82.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_80.x * gl_FragCoord.w) * _120, (_80.y * gl_FragCoord.w) * _120)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _332 = _328;
    float _334 = _324;
    float _336 = _326;
    float _338 = _324;
    float _340 = _326;
    float _342 = _328;
    if (floatBitsToInt(_320) != (-1))
    {
        int _344 = floatBitsToInt(_320);
        int _346 = 0;
        float _350;
        float _352;
        float _354;
        int _438;
        do
        {
            int _348 = _344 & 255;
            _350 = _332;
            _352 = _334;
            _354 = _336;
            _358 = uint(_348) >= 30u;
            if (_358)
            {
                break;
            }
            int _360 = _348 << 4;
            uint _362 = uint(int(uint(_360 + 7360) >> uint(2)));
            int _364 = int(_362) + 1;
            uint _366 = uint(int(uint(_360 + 7368) >> uint(2)));
            float _368 = (-_300) + fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3];
            float _370 = (-_164) + fp_c10_1._m0[int(uint(_364) >> uint(2))][_364 & 3];
            float _372 = (-_258) + fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3];
            float _374 = fma(_372, _372, fma(_370, _370, _368 * _368));
            float _376 = _368 * inversesqrt(_374);
            float _378 = _370 * inversesqrt(_374);
            float _380 = _372 * inversesqrt(_374);
            float _382 = _138 + _376;
            float _384 = _140 + _378;
            float _386 = _142 + _380;
            float _388 = inversesqrt(fma(_386, _386, fma(_384, _384, _382 * _382)));
            float _390 = _382 * _388;
            float _392 = _384 * _388;
            float _394 = _386 * _388;
            float _396 = max(fma(_136, _380, fma(_134, _378, _132 * _376)), fp_c1_1._m0[0].w);
            float _398 = max(fma(_142, _394, fma(_140, _392, _138 * _390)), fp_c1_1._m0[0].w);
            float _400 = max(fma(_136, _394, fma(_134, _392, _132 * _390)), fp_c1_1._m0[0].w) * max(fma(_136, _394, fma(_134, _392, _132 * _390)), fp_c1_1._m0[0].w);
            uint _402 = uint(int(uint(_360 + 6880) >> uint(2)));
            int _404 = int(_402) + 1;
            uint _406 = uint(int(uint(_360 + 8320) >> uint(2)));
            float _408 = exp2(_398 * fma(_398, fp_c1_1._m0[1].y, -6.9831600189208984375));
            float _410 = ((1.0 / (_270 + fma(_224, -_270, _224))) * (1.0 / (_270 + fma(_270, -_396, _396)))) * ((_242 * (1.0 / max(fma(_242 * _242, _400, -_400) + 1.0, fp_c1_1._m0[0].w))) * (_242 * (1.0 / max(fma(_242 * _242, _400, -_400) + 1.0, fp_c1_1._m0[0].w))));
            uint _412 = uint(int(uint(_360 + 6408) >> uint(2)));
            bool _414 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_406)) >> uint(2))][int(_406) & 3]) != 0;
            uint _416 = uint(int(uint(_360 + 6400) >> uint(2)));
            int _418 = int(_416) + 1;
            float _420 = intBitsToFloat(_360);
            if (!_414)
            {
                _420 = 1.0;
            }
            float _422 = _420;
            if (_414)
            {
                int _424 = _348 << 4;
                uint _426 = uint(int(uint(_424 + 7840) >> uint(2)));
                int _428 = int(_426) + 1;
                uint _430 = uint(int(uint(_424 + 7848) >> uint(2)));
                uint _432 = uint(int(uint(_424 + 6888) >> uint(2)));
                float _434 = fp_c10_1._m0[int(uint(int(_432)) >> uint(2))][int(_432) & 3];
                int _436 = int(_432) + 1;
                _422 = exp2(fp_c10_1._m0[int(uint(_436) >> uint(2))][_436 & 3] * log2(clamp(((-_434) + fma(_380, -fp_c10_1._m0[int(uint(int(_430)) >> uint(2))][int(_430) & 3], fma(_378, -fp_c10_1._m0[int(uint(_428) >> uint(2))][_428 & 3], _376 * (-fp_c10_1._m0[int(uint(int(_426)) >> uint(2))][int(_426) & 3])))) * (1.0 / ((-_434) + 1.0)), 0.0, 1.0)));
            }
            _438 = _346 + 1;
            float _440 = clamp(fma(_172, _380, fma(_170, _378, _168 * _376)), 0.0, 1.0) * (exp2(fp_c10_1._m0[int(uint(_404) >> uint(2))][_404 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_402)) >> uint(2))][int(_402) & 3], -sqrt(_374), fp_c1_1._m0[0].x), 0.0, 1.0))) * _422);
            float _442 = fma(fp_c10_1._m0[int(uint(int(_416)) >> uint(2))][int(_416) & 3] * _440, fma(_294, fp_c1_1._m0[1].w, ((_296 + fma(_296, -_408, _408)) * _410) * 0.079577468335628509521484375), _332);
            float _444 = fma(fp_c10_1._m0[int(uint(_418) >> uint(2))][_418 & 3] * _440, fma(_304, fp_c1_1._m0[1].w, ((_306 + fma(_306, -_408, _408)) * _410) * 0.079577468335628509521484375), _334);
            float _446 = fma(fp_c10_1._m0[int(uint(int(_412)) >> uint(2))][int(_412) & 3] * _440, fma(_310, fp_c1_1._m0[1].w, ((_308 + fma(_308, -_408, _408)) * _410) * 0.079577468335628509521484375), _336);
            _344 = int(uint(_344) >> uint(8));
            _346 = _438;
            _332 = _442;
            _334 = _444;
            _336 = _446;
            _350 = _442;
            _352 = _444;
            _354 = _446;
        } while (!(_438 >= 4));
        _358 = false;
        _338 = _352;
        _340 = _354;
        _342 = _350;
        if ((_344 & 255) == 30)
        {
            float _448 = 1.0 / fp_c10_1._m0[561].y;
            float _450 = (-_300) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_448, fp_c10_1._m0[557].x);
            float _452 = (-_258) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_448, fp_c10_1._m0[557].z);
            float _454 = _258 + (-fp_c10_1._m0[557].z);
            float _456 = _300 + (-fp_c10_1._m0[557].x);
            float _458 = _450 * _450;
            float _460 = _454 * fp_c10_1._m0[558].x;
            float _462 = _456 * fp_c10_1._m0[558].z;
            float _464 = fma(_454, _454, _456 * _456);
            float _466 = sqrt(fma(_452, _452, _458)) * (-fp_c10_1._m0[558].y);
            float _468 = ((-float(_460 < _462)) + float(_460 > _462)) * fp_c10_1._m0[561].y;
            float _470 = inversesqrt(fma(_452, _452, fma(_466, _466, _458)));
            bool _472 = fma(_454 * inversesqrt(_464), fp_c10_1._m0[558].z, (_456 * inversesqrt(_464)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _474 = _450 * _470;
            float _476 = _466 * _470;
            float _478 = _452 * _470;
            float _480 = _138 + _474;
            float _482 = _140 + _476;
            float _484 = fma(_454, fp_c10_1._m0[558].z, _456 * fp_c10_1._m0[558].x);
            float _486 = _142 + _478;
            float _488 = inversesqrt(fma(_486, _486, fma(_482, _482, _480 * _480)));
            float _490 = _480 * _488;
            float _492 = 1.0 / (fma(_258, fp_c10_1._m0[565].z, fma(_164, fp_c10_1._m0[565].y, _300 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _494 = _482 * _488;
            float _496 = _486 * _488;
            bool _498 = _484 > 0.0;
            float _500 = _488;
            if (_498)
            {
                _500 = sqrt(_464);
            }
            float _502 = _500;
            if (!_498)
            {
                _502 = 1.0;
            }
            float _504 = inversesqrt(fma(_478, _478, _474 * _474));
            float _506 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_456, fma(_468, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_454 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_468 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_456, fma(_468, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_454 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_468 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _508 = max(fma(_136, _496, fma(_134, _494, _132 * _490)), fp_c1_1._m0[0].w) * max(fma(_136, _496, fma(_134, _494, _132 * _490)), fp_c1_1._m0[0].w);
            float _510 = max(fma(_136, _478, fma(_134, _476, _132 * _474)), fp_c1_1._m0[0].w);
            float _512 = max(fma(_142, _496, fma(_140, _494, _138 * _490)), fp_c1_1._m0[0].w);
            float _514 = fma(_506, -_506, fp_c1_1._m0[0].x);
            if (!_472)
            {
                _514 = 1.0;
            }
            float _516 = _514;
            if (_472)
            {
                _516 = _514 * _514;
            }
            float _518 = clamp(fma(_484 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_484 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0);
            float _520 = exp2(_512 * fma(_512, fp_c1_1._m0[1].y, -6.9831600189208984375));
            float _522 = ((1.0 / (_270 + fma(_224, -_270, _224))) * (1.0 / (_270 + fma(_270, -_510, _510)))) * ((_242 * (1.0 / max(fma(_242 * _242, _508, -_508) + 1.0, fp_c1_1._m0[0].w))) * (_242 * (1.0 / max(fma(_242 * _242, _508, -_508) + 1.0, fp_c1_1._m0[0].w))));
            float _524 = clamp(fma(_172, _478, fma(_170, _476, _168 * _474)), 0.0, 1.0) * ((exp2(log2(clamp(fma(_502, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_478 * _504, -fp_c10_1._m0[558].z, (_474 * _504) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_518, -_518, fp_c1_1._m0[0].x) * fma(_518, -_518, fp_c1_1._m0[0].x), _516));
            float _526 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_258, fp_c10_1._m0[562].z, fma(_164, fp_c10_1._m0[562].y, _300 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _492, 0.5, 0.5), (-fma((fma(_258, fp_c10_1._m0[563].z, fma(_164, fp_c10_1._m0[563].y, _300 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _492, 0.5, 0.5)) + 1.0)).z > fma((fma(_258, fp_c10_1._m0[564].z, fma(_164, fp_c10_1._m0[564].y, _300 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _492, 0.5, 0.5)) || (_484 <= 0.0));
            _338 = fma(fma(_304, fp_c1_1._m0[1].w, ((_306 + fma(_306, -_520, _520)) * _522) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _524), _526, _352);
            _340 = fma(fma(_310, fp_c1_1._m0[1].w, ((_308 + fma(_308, -_520, _520)) * _522) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _524), _526, _354);
            _342 = fma(fma(_294, fp_c1_1._m0[1].w, ((_296 + fma(_296, -_520, _520)) * _522) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _524), _526, _350);
        }
    }
    float _528 = _300 + (-fp_c3_1._m0[11].w);
    float _530 = _164 + (-fp_c3_1._m0[12].w);
    float _532 = _258 + (-fp_c3_1._m0[13].w);
    float _534 = fma(_330, (_322 * fp_c5_1._m0[5].y) * fma((_306 + fma(_306, -_260, _260)) * _302, fp_c1_1._m0[1].z, _304 * 0.3183098733425140380859375), _338);
    float _536 = fma(_330, (_322 * fp_c5_1._m0[5].z) * fma((_308 + fma(_308, -_260, _260)) * _302, fp_c1_1._m0[1].z, _310 * 0.3183098733425140380859375), _340);
    float _538 = fma(_532, _532, fma(_530, _530, _528 * _528));
    float _540 = fma(_330, (_322 * fp_c5_1._m0[5].x) * fma((_296 + fma(_296, -_260, _260)) * _302, fp_c1_1._m0[1].z, _294 * 0.3183098733425140380859375), _342);
    float _542 = exp2(fma(fma(_532 * inversesqrt(_538), fp_c5_1._m0[23].z, fma(_530 * inversesqrt(_538), fp_c5_1._m0[23].y, (_528 * inversesqrt(_538)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_538) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _544 = clamp(fma(fma(_258, fp_c5_1._m0[14].z, fma(_164, fp_c5_1._m0[14].y, _300 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _546 = clamp(fma(_330, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _548 = fma((-_540) + fp_c5_1._m0[13].x, _544, _540);
    float _550 = fma((-_534) + fp_c5_1._m0[13].y, _544, _534);
    float _552 = fma((-_536) + fp_c5_1._m0[13].z, _544, _536);
    float _554 = clamp((-exp2((clamp(fma(sqrt(_538), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _85.x = fma((-_548) + fma(fma(_546 * (_542 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _554, _548);
    _85.y = fma((-_550) + fma(fma(_546 * (_542 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _554, _550);
    _85.z = fma((-_552) + fma(fma(_546 * (_542 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _554, _552);
    _85.w = 1.0;
}


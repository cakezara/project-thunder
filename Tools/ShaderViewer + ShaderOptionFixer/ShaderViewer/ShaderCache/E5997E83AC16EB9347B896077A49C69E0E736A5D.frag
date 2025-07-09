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
layout(binding = 6) uniform sampler2D fp_tex_tcb_22;
layout(binding = 7) uniform sampler2D fp_tex_tcb_24;
layout(binding = 8) uniform sampler2D fp_tex_tcb_28;
layout(binding = 9) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 10) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 11) uniform sampler2D fp_tex_tcb_38;
layout(binding = 12) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 2) in vec4 _74;
layout(location = 0) out vec4 _77;
layout(location = 4) in vec4 _79;
layout(location = 7) in vec4 _81;
layout(location = 6) in vec4 _83;
layout(location = 5) in vec4 _85;
layout(location = 3) in vec4 _87;
uint _6[12];

void main()
{
    bool _349 = false;
    float _94 = _70.x;
    float _96 = _70.y;
    float _98 = texture(fp_tex_tcb_8, vec2(_94, _96)).x;
    bool _102 = _98 <= 0.0;
    if (_102)
    {
        discard;
    }
    vec2 _106 = texture(fp_tex_tcb_E, vec2(_94, _96)).xy;
    float _108 = _106.x;
    float _110 = _106.y;
    float _112 = texture(fp_tex_tcb_12, vec2(_94, _96)).x;
    vec3 _116 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _118 = _116.x;
    float _120 = _116.y;
    float _122 = _116.z;
    vec3 _124 = texture(fp_tex_tcb_14, vec2(_94, _96)).xyz;
    float _126 = _72.x;
    float _128 = _72.y;
    float _130 = _72.z;
    float _132 = _74.y;
    float _134 = _74.z;
    float _136 = _74.x;
    float _138 = _74.w;
    float _140 = inversesqrt(fma(_130, _130, fma(_128, _128, _126 * _126)));
    float _142 = _130 * _140;
    float _144 = _126 * _140;
    float _146 = _128 * _140;
    int _149 = floatBitsToInt(_140);
    if (_102)
    {
        _149 = 0;
    }
    float _151 = fma(_146, _134, -(_142 * _132));
    float _153 = fma(_142, _136, -(_144 * _134));
    float _155 = fma(_144, _132, -(_146 * _136));
    int _157 = floatBitsToInt(_151);
    int _159 = floatBitsToInt(_153);
    int _161 = floatBitsToInt(_155);
    if (_102)
    {
        _157 = 0;
    }
    if (_102)
    {
        _159 = 0;
    }
    if (_102)
    {
        _161 = 0;
    }
    if (_102)
    {
        _77.x = intBitsToFloat(_157);
        _77.y = intBitsToFloat(_159);
        _77.z = intBitsToFloat(_161);
        _77.w = intBitsToFloat(_149);
        return;
    }
    float _163 = _79.x;
    float _165 = _79.y;
    float _167 = _79.z;
    float _169 = max(texture(fp_tex_tcb_10, vec2(_94, _96)).x, fp_c1_1._m0[0].x);
    float _171 = sqrt(clamp((-fma(_108, _108, _110 * _110)) + 1.0, 0.0, 1.0));
    float _173 = fma(_144, _171, fma(_108, _136, _110 * (_151 * _138)));
    float _175 = fma(_146, _171, fma(_108, _132, _110 * (_153 * _138)));
    float _177 = fma(_142, _171, fma(_108, _134, _110 * (_155 * _138)));
    float _179 = 1.0 / (_83.z * gl_FragCoord.w);
    float _181 = inversesqrt(fma(_177, _177, fma(_175, _175, _173 * _173)));
    float _183 = inversesqrt(fma(_167, _167, fma(_165, _165, _163 * _163)));
    float _185 = _173 * _181;
    float _187 = _175 * _181;
    float _189 = _163 * (-_183);
    float _191 = 1.0 / _85.w;
    float _193 = _165 * (-_183);
    float _195 = _167 * (-_183);
    float _197 = _177 * _181;
    float _199 = fma(_197, _195, fma(_187, _193, _185 * _189));
    float _201 = max(_199, fp_c1_1._m0[0].z);
    float _203 = fma(_185 * (-_199), -2.0, -_189);
    float _205 = fma(_187 * (-_199), -2.0, -_193);
    float _207 = fma(_197 * (-_199), -2.0, -_195);
    float _209 = 1.0 / max(abs(_207), max(abs(_203), abs(_205)));
    vec2 _211 = texture(fp_tex_tcb_2A, vec2(fma(_85.x * _191, 0.5, 0.5), fma(_85.y * _191, -0.5, 0.5))).xy;
    vec2 _213 = texture(fp_tex_tcb_38, vec2(_201, (-_169) + (-0.0))).xy;
    float _215 = _213.x;
    float _217 = _213.y;
    vec2 _219 = texture(fp_tex_tcb_22, vec2(_81.x, _81.y)).xy;
    vec3 _221 = texture(fp_tex_tcb_36, vec4(_203 * _209, _205 * _209, _207 * _209, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_169 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec4 _224 = texture(fp_tex_tcb_24, vec2(_81.z, _81.w)).xyzw;
    float _226 = _224.w;
    float _228 = _189 + (-fp_c5_1._m0[23].x);
    float _230 = _87.z;
    float _232 = _193 + (-fp_c5_1._m0[23].y);
    float _234 = _195 + (-fp_c5_1._m0[23].z);
    float _236 = _187 * _197;
    float _238 = _197 * _197;
    float _240 = fma(_122, -_112, _122);
    float _242 = _87.x;
    float _244 = inversesqrt(fma(_234, _234, fma(_232, _232, _228 * _228)));
    float _246 = _185 * _187;
    float _248 = _228 * _244;
    float _250 = _234 * _244;
    float _252 = _232 * _244;
    float _254 = fma(_118, -_112, _118);
    float _256 = fma(_120, -_112, _120);
    float _258 = fma(_169, 0.5, 0.5);
    float _260 = _185 * _197;
    float _262 = fma(_112, _118 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _264 = fma(_112, _120 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _266 = _169 * _169;
    float _268 = fma(_112, _122 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _270 = max(fma(_195, _250, fma(_193, _252, _189 * _248)), fp_c1_1._m0[0].z);
    float _272 = (_258 * 0.5) * _258;
    float _274 = fma(_187, -fp_c5_1._m0[23].y, _185 * (-fp_c5_1._m0[23].x));
    float _276 = _266 * _266;
    float _278 = max(fma(_197, _250, fma(_187, _252, _185 * _248)), fp_c1_1._m0[0].z) * max(fma(_197, _250, fma(_187, _252, _185 * _248)), fp_c1_1._m0[0].z);
    int _280 = max(0, min(int(trunc((_230 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _282 = clamp(fma(_197, -fp_c5_1._m0[23].z, _274), 0.0, 1.0);
    float _284 = max(fma(_197, -fp_c5_1._m0[23].z, _274), fp_c1_1._m0[0].z);
    float _286 = 1.0 / (_272 + fma(_201, -_272, _201));
    float _288 = exp2(_270 * fma(_270, fp_c1_1._m0[0].w, -6.9831600189208984375));
    uint _291 = uint(int(uint((((int(uint(_280) >> uint(16)) * 20) << 16) + (((_280 & 65535) * 20) + max(0, min(int(trunc((_242 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _293 = fp_c10_1._m0[int(uint(int(_291)) >> uint(2))][int(_291) & 3];
    float _295 = fma(_185, _185, -(_187 * _187));
    float _297 = (_286 * (1.0 / (_272 + fma(_272, -_284, _284)))) * ((_266 * (1.0 / max(fma(_278, _276, -_278) + 1.0, fp_c1_1._m0[0].z))) * (_266 * (1.0 / max(fma(_278, _276, -_278) + 1.0, fp_c1_1._m0[0].z))));
    float _299 = fma(_254, -_262, _254);
    float _301 = _83.w;
    float _303 = fma(_256, -_264, _256);
    float _305 = fma(_240, -_268, _240);
    float _307 = clamp(_301 * clamp(fma(_219.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _309 = ((_224.x * _226) * _301) * 32.0;
    float _311 = ((_224.y * _226) * _301) * 32.0;
    float _313 = ((_224.z * _226) * _301) * 32.0;
    float _315 = fma(_299, _309, fma(fma(_262, _215, _217), _221.x, _299 * max(0.0, fma(_295, fp_c5_1._m0[31].x, (fma(_197, fp_c5_1._m0[25].z, fma(_187, fp_c5_1._m0[25].y, _185 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_260, fp_c5_1._m0[28].w, fma(_238, fp_c5_1._m0[28].z, fma(_236, fp_c5_1._m0[28].y, _246 * fp_c5_1._m0[28].x)))))));
    float _317 = fma(_303, _311, fma(fma(_264, _215, _217), _221.y, _303 * max(0.0, fma(_295, fp_c5_1._m0[31].y, (fma(_197, fp_c5_1._m0[26].z, fma(_187, fp_c5_1._m0[26].y, _185 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_260, fp_c5_1._m0[29].w, fma(_238, fp_c5_1._m0[29].z, fma(_236, fp_c5_1._m0[29].y, _246 * fp_c5_1._m0[29].x)))))));
    float _319 = fma(_305, _313, fma(fma(_268, _215, _217), _221.z, _305 * max(0.0, fma(_295, fp_c5_1._m0[31].z, (fma(_197, fp_c5_1._m0[27].z, fma(_187, fp_c5_1._m0[27].y, _185 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_260, fp_c5_1._m0[30].w, fma(_238, fp_c5_1._m0[30].z, fma(_236, fp_c5_1._m0[30].y, _246 * fp_c5_1._m0[30].x)))))));
    float _321 = clamp((-_307) + 1.0, 0.0, 1.0);
    float _323 = clamp((-fma(_307, fp_c7_1._m0[37].w, clamp(_301 * clamp(fma(_219.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_211.x) + 1.0, (-_211.y) + 1.0), clamp(_87.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_83.x * gl_FragCoord.w) * _179, (_83.y * gl_FragCoord.w) * _179)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _325 = _317;
    float _327 = _315;
    float _329 = _319;
    float _331 = _317;
    float _333 = _315;
    float _335 = _319;
    if (floatBitsToInt(_293) != (-1))
    {
        int _337 = floatBitsToInt(_293);
        int _339 = 0;
        float _343;
        float _345;
        float _347;
        int _429;
        do
        {
            int _341 = _337 & 255;
            _343 = _327;
            _345 = _325;
            _347 = _329;
            _349 = uint(_341) >= 30u;
            if (_349)
            {
                break;
            }
            int _351 = _341 << 4;
            uint _353 = uint(int(uint(_351 + 7360) >> uint(2)));
            int _355 = int(_353) + 1;
            uint _357 = uint(int(uint(_351 + 7368) >> uint(2)));
            float _359 = (-_242) + fp_c10_1._m0[int(uint(int(_353)) >> uint(2))][int(_353) & 3];
            float _361 = fp_c10_1._m0[int(uint(_355) >> uint(2))][_355 & 3] + (-_87.y);
            float _363 = (-_230) + fp_c10_1._m0[int(uint(int(_357)) >> uint(2))][int(_357) & 3];
            float _365 = fma(_363, _363, fma(_361, _361, _359 * _359));
            float _367 = _359 * inversesqrt(_365);
            float _369 = _361 * inversesqrt(_365);
            float _371 = _363 * inversesqrt(_365);
            float _373 = _189 + _367;
            float _375 = _193 + _369;
            float _377 = _195 + _371;
            uint _379 = uint(int(uint(_351 + 6880) >> uint(2)));
            int _381 = int(_379) + 1;
            float _383 = inversesqrt(fma(_377, _377, fma(_375, _375, _373 * _373)));
            float _385 = _373 * _383;
            float _387 = _375 * _383;
            float _389 = _377 * _383;
            float _391 = max(fma(_195, _389, fma(_193, _387, _189 * _385)), fp_c1_1._m0[0].z);
            float _393 = fma(_197, _371, fma(_187, _369, _185 * _367));
            float _395 = max(fma(_197, _389, fma(_187, _387, _185 * _385)), fp_c1_1._m0[0].z) * max(fma(_197, _389, fma(_187, _387, _185 * _385)), fp_c1_1._m0[0].z);
            float _397 = max(_393, fp_c1_1._m0[0].z);
            uint _399 = uint(int(uint(_351 + 8320) >> uint(2)));
            uint _401 = uint(int(uint(_351 + 6400) >> uint(2)));
            int _403 = int(_401) + 1;
            float _405 = exp2(_391 * fma(_391, fp_c1_1._m0[0].w, -6.9831600189208984375));
            uint _407 = uint(int(uint(_351 + 6408) >> uint(2)));
            float _409 = (_286 * (1.0 / (_272 + fma(_272, -_397, _397)))) * ((_266 * (1.0 / max(fma(_276, _395, -_395) + 1.0, fp_c1_1._m0[0].z))) * (_266 * (1.0 / max(fma(_276, _395, -_395) + 1.0, fp_c1_1._m0[0].z))));
            bool _411 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_399)) >> uint(2))][int(_399) & 3]) != 0;
            float _413 = _409;
            if (!_411)
            {
                _413 = 1.0;
            }
            float _415 = _413;
            if (_411)
            {
                uint _417 = uint(int(uint(_351 + 7840) >> uint(2)));
                int _419 = int(_417) + 1;
                uint _421 = uint(int(uint(_351 + 7848) >> uint(2)));
                uint _423 = uint(int(uint(_351 + 6888) >> uint(2)));
                float _425 = fp_c10_1._m0[int(uint(int(_423)) >> uint(2))][int(_423) & 3];
                int _427 = int(_423) + 1;
                _415 = exp2(fp_c10_1._m0[int(uint(_427) >> uint(2))][_427 & 3] * log2(clamp(((-_425) + fma(_371, -fp_c10_1._m0[int(uint(int(_421)) >> uint(2))][int(_421) & 3], fma(_369, -fp_c10_1._m0[int(uint(_419) >> uint(2))][_419 & 3], _367 * (-fp_c10_1._m0[int(uint(int(_417)) >> uint(2))][int(_417) & 3])))) * (1.0 / ((-_425) + 1.0)), 0.0, 1.0)));
            }
            _429 = _339 + 1;
            float _431 = (exp2(fp_c10_1._m0[int(uint(_381) >> uint(2))][_381 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3], -sqrt(_365), fp_c1_1._m0[1].y), 0.0, 1.0))) * _415) * clamp(_393 + (-0.0), 0.0, 1.0);
            float _433 = fma(fp_c10_1._m0[int(uint(_403) >> uint(2))][_403 & 3] * _431, fma(_256, fp_c1_1._m0[1].z, ((_264 + fma(_264, -_405, _405)) * _409) * 0.079577468335628509521484375), _325);
            float _435 = fma(fp_c10_1._m0[int(uint(int(_401)) >> uint(2))][int(_401) & 3] * _431, fma(_254, fp_c1_1._m0[1].z, ((_262 + fma(_262, -_405, _405)) * _409) * 0.079577468335628509521484375), _327);
            float _437 = fma(fp_c10_1._m0[int(uint(int(_407)) >> uint(2))][int(_407) & 3] * _431, fma(_240, fp_c1_1._m0[1].z, ((_268 + fma(_268, -_405, _405)) * _409) * 0.079577468335628509521484375), _329);
            _337 = int(uint(_337) >> uint(8));
            _339 = _429;
            _325 = _433;
            _327 = _435;
            _329 = _437;
            _343 = _435;
            _345 = _433;
            _347 = _437;
        } while (!(_429 >= 4));
        _349 = false;
        _331 = _345;
        _333 = _343;
        _335 = _347;
        if ((_337 & 255) == 30)
        {
            float _439 = _87.y;
            float _441 = 1.0 / (fma(_230, fp_c10_1._m0[565].z, fma(_439, fp_c10_1._m0[565].y, _242 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _443 = 1.0 / fp_c10_1._m0[561].y;
            float _445 = _242 + (-fp_c10_1._m0[557].x);
            float _447 = (-_242) + fma(_443, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _449 = (-_230) + fma(_443, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _451 = _447 * _447;
            float _453 = sqrt(fma(_449, _449, _451)) * (-fp_c10_1._m0[558].y);
            float _455 = inversesqrt(fma(_449, _449, fma(_453, _453, _451)));
            float _457 = _447 * _455;
            float _459 = _453 * _455;
            float _461 = _449 * _455;
            float _463 = _445 * fp_c10_1._m0[558].z;
            float _465 = _189 + _457;
            float _467 = _193 + _459;
            float _469 = _195 + _461;
            float _471 = _230 + (-fp_c10_1._m0[557].z);
            float _473 = _471 * fp_c10_1._m0[558].x;
            float _475 = inversesqrt(fma(_469, _469, fma(_467, _467, _465 * _465)));
            float _477 = _465 * _475;
            float _479 = _467 * _475;
            float _481 = ((-float(_473 < _463)) + float(_473 > _463)) * fp_c10_1._m0[561].y;
            float _483 = _469 * _475;
            float _485 = fma(_471, fp_c10_1._m0[558].z, _445 * fp_c10_1._m0[558].x);
            float _487 = fma(_197, _461, fma(_187, _459, _185 * _457));
            float _489 = inversesqrt(fma(_461, _461, _457 * _457));
            bool _491 = _485 > 0.0;
            float _493 = fma(_471, _471, _445 * _445);
            float _495 = max(fma(_197, _483, fma(_187, _479, _185 * _477)), fp_c1_1._m0[0].z) * max(fma(_197, _483, fma(_187, _479, _185 * _477)), fp_c1_1._m0[0].z);
            float _497 = _457 * _489;
            float _499 = _497;
            if (_491)
            {
                _499 = sqrt(_493);
            }
            float _501 = _499;
            if (!_491)
            {
                _501 = 1.0;
            }
            float _503 = max(fma(_195, _483, fma(_193, _479, _189 * _477)), fp_c1_1._m0[0].z);
            float _505 = clamp(fma(_485 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_485 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _507 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_445, fma(_481, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_471 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_481 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_445, fma(_481, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_471 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_481 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _509 = max(_487, fp_c1_1._m0[0].z);
            bool _511 = fma(_471 * inversesqrt(_493), fp_c10_1._m0[558].z, (_445 * inversesqrt(_493)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _513 = log2(clamp((fma(_461 * _489, -fp_c10_1._m0[558].z, _497 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _515 = exp2(_503 * fma(_503, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _517 = _513;
            if (_511)
            {
                _517 = fma(_507, -_507, fp_c1_1._m0[1].y) * fma(_507, -_507, fp_c1_1._m0[1].y);
            }
            float _519 = _517;
            if (!_511)
            {
                _519 = 1.0;
            }
            float _521 = (_286 * (1.0 / (_272 + fma(_272, -_509, _509)))) * ((_266 * (1.0 / max(fma(_276, _495, -_495) + 1.0, fp_c1_1._m0[0].z))) * (_266 * (1.0 / max(fma(_276, _495, -_495) + 1.0, fp_c1_1._m0[0].z))));
            float _523 = clamp(_487 + (-0.0), 0.0, 1.0) * ((exp2(log2(clamp(fma(_501, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_513)) * min(fma(_505, -_505, fp_c1_1._m0[1].y) * fma(_505, -_505, fp_c1_1._m0[1].y), _519));
            float _525 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_230, fp_c10_1._m0[562].z, fma(_439, fp_c10_1._m0[562].y, _242 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _441, 0.5, 0.5), (-fma((fma(_230, fp_c10_1._m0[563].z, fma(_439, fp_c10_1._m0[563].y, _242 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _441, 0.5, 0.5)) + 1.0)).z > fma((fma(_230, fp_c10_1._m0[564].z, fma(_439, fp_c10_1._m0[564].y, _242 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _441, 0.5, 0.5)) || (_485 <= 0.0));
            _331 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _523) * fma(_256, fp_c1_1._m0[1].z, ((_264 + fma(_264, -_515, _515)) * _521) * 0.079577468335628509521484375), _525, _345);
            _333 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _523) * fma(_254, fp_c1_1._m0[1].z, ((_262 + fma(_262, -_515, _515)) * _521) * 0.079577468335628509521484375), _525, _343);
            _335 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _523) * fma(_240, fp_c1_1._m0[1].z, ((_268 + fma(_268, -_515, _515)) * _521) * 0.079577468335628509521484375), _525, _347);
        }
    }
    float _527 = _242 + (-fp_c3_1._m0[11].w);
    float _529 = _87.y;
    float _531 = _230 + (-fp_c3_1._m0[13].w);
    float _533 = fma(_124.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_321, _331, _323 * (fma(_297 * (_264 + fma(_264, -_288, _288)), fp_c1_1._m0[1].x, _256 * 0.3183098733425140380859375) * fma(_282, fp_c5_1._m0[5].y, _311))));
    float _535 = _529 + (-fp_c3_1._m0[12].w);
    float _537 = fma(_531, _531, fma(_535, _535, _527 * _527));
    float _539 = clamp(fma(_323 * _321, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _541 = clamp(fma(fma(_230, fp_c5_1._m0[14].z, fma(_529, fp_c5_1._m0[14].y, _242 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _543 = fma(_124.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_321, _333, _323 * (fma(_297 * (_262 + fma(_262, -_288, _288)), fp_c1_1._m0[1].x, _254 * 0.3183098733425140380859375) * fma(_282, fp_c5_1._m0[5].x, _309))));
    float _545 = fma(_124.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_321, _335, _323 * (fma(_297 * (_268 + fma(_268, -_288, _288)), fp_c1_1._m0[1].x, _240 * 0.3183098733425140380859375) * fma(_282, fp_c5_1._m0[5].z, _313))));
    float _547 = exp2(log2(clamp(sqrt(_537) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_531 * inversesqrt(_537), fp_c5_1._m0[23].z, fma(_535 * inversesqrt(_537), fp_c5_1._m0[23].y, (_527 * inversesqrt(_537)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _549 = fma((-_543) + fp_c5_1._m0[13].x, _541, _543);
    float _551 = fma((-_533) + fp_c5_1._m0[13].y, _541, _533);
    float _553 = fma((-_545) + fp_c5_1._m0[13].z, _541, _545);
    float _555 = clamp((-exp2((clamp(fma(sqrt(_537), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _77.x = fma((-_549) + fma(fma((_547 * fp_c7_1._m0[55].x) * _539, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _555, _549);
    _77.y = fma((-_551) + fma(fma((_547 * fp_c7_1._m0[55].y) * _539, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _555, _551);
    _77.z = fma((-_553) + fma(fma((_547 * fp_c7_1._m0[55].z) * _539, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _555, _553);
    _77.w = clamp(_98 + (-0.0), 0.0, 1.0);
}


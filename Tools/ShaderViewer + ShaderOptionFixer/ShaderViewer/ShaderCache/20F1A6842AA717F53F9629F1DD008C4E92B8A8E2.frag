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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 2, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(binding = 9, std140) uniform fp_c8
{
    vec4 _m0[4096];
} fp_c8_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_22;
layout(binding = 5) uniform sampler2D fp_tex_tcb_24;
layout(binding = 6) uniform sampler2D fp_tex_tcb_26;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _72;
layout(location = 1) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 5) in vec4 _78;
layout(location = 6) in vec4 _80;
layout(location = 4) in vec4 _82;
layout(location = 7) in vec4 _84;
layout(location = 3) in vec4 _86;
layout(location = 0) out vec4 _89;
uint _6[12];

void main()
{
    bool _453 = false;
    float _96 = _72.x;
    float _98 = _72.y;
    vec2 _102 = texture(fp_tex_tcb_E, vec2(_96, _98)).xy;
    float _104 = _102.x;
    float _106 = _102.y;
    vec3 _110 = texture(fp_tex_tcb_A, vec2(_96, _98)).xyz;
    float _112 = _74.x;
    float _114 = _74.y;
    float _116 = _74.z;
    float _118 = _76.x;
    float _120 = _76.y;
    float _122 = _76.z;
    float _124 = _76.w;
    float _126 = inversesqrt(fma(_116, _116, fma(_114, _114, _112 * _112)));
    float _128 = _114 * _126;
    float _130 = _116 * _126;
    float _132 = _112 * _126;
    int _135 = floatBitsToInt(fp_c6_1._m0[25].w) + (-1);
    float _137 = (-texture(fp_tex_tcb_26, vec2(_96 + (-fp_c6_1._m0[26].w), _98 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_26, vec2(_96 + fp_c6_1._m0[26].w, _98 + fp_c6_1._m0[26].w)).x;
    float _139 = 1.0 / _78.w;
    float _141 = fma(clamp(_128 + (-0.0), 0.0, 1.0), (-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, fp_c7_1._m0[20].y);
    float _143 = min((texture(fp_tex_tcb_26, vec2(_96, _98)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _145 = _143 * float((-abs(_135)) + 1);
    float _147 = _143 * float(max(0, (-_135)));
    float _149 = _143 * float(max(0, _135));
    float _151 = sqrt(clamp((-fma(_104, _104, _106 * _106)) + 1.0, 0.0, 1.0));
    float _153 = max(_149, max(_145, _147));
    float _155 = fma(_132, _151, fma(_104, _118, _106 * (fma(_128, _122, -(_130 * _120)) * _124)));
    float _157 = _153 + (-fp_c7_1._m0[21].w);
    float _159 = fma(_118 * _137, fp_c6_1._m0[27].x, _132);
    float _161 = fma(_128, _151, fma(_104, _120, _106 * (fma(_130, _118, -(_132 * _122)) * _124)));
    float _163 = fma(_120 * _137, fp_c6_1._m0[27].x, _128);
    float _165 = fma(_130, _151, fma(_104, _122, _106 * (fma(_132, _120, -(_128 * _118)) * _124)));
    float _167 = clamp(_157 + (-0.0), 0.0, 1.0);
    float _169 = fma(_122 * _137, fp_c6_1._m0[27].x, _130);
    float _171 = inversesqrt(fma(_165, _165, fma(_161, _161, _155 * _155)));
    float _173 = clamp(((_145 + (-_153)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _175 = inversesqrt(fma(_169, _169, fma(_163, _163, _159 * _159)));
    float _177 = clamp(((_147 + (-_153)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    bool _181 = min(_167 * 1000.0, 1.0) > 0.5;
    float _183 = clamp(((_149 + (-_153)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _185 = _161 * _171;
    float _187 = _155 * _171;
    float _189 = _163 * _175;
    float _191 = _165 * _171;
    float _193 = _169 * _175;
    float _195 = fma(_183, fp_c8_1._m0[18].x, fma(_177, fp_c8_1._m0[4].x, _173 * fp_c8_1._m0[11].x));
    float _197 = _159 * _175;
    float _199 = fma(_183, fp_c8_1._m0[18].y, fma(_177, fp_c8_1._m0[4].y, _173 * fp_c8_1._m0[11].y));
    float _201 = fma(_183, fp_c8_1._m0[18].z, fma(_177, fp_c8_1._m0[4].z, _173 * fp_c8_1._m0[11].z));
    float _203 = _110.z;
    float _205 = _187;
    float _207 = _185;
    float _209 = _191;
    float _211 = _110.x;
    float _213 = _110.y;
    float _223;
    float _225;
    float _227;
    float _229;
    float _231;
    if (_181)
    {
        float _215 = clamp(_167 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _217 = fma(fma(_201, -fp_c7_1._m0[45].y, fma(_183, fp_c8_1._m0[17].z, fma(_177, fp_c8_1._m0[3].z, _173 * fp_c8_1._m0[10].z))), _215, _201 * fp_c7_1._m0[45].y);
        float _219 = fma(fma(_195, -fp_c7_1._m0[45].y, fma(_183, fp_c8_1._m0[17].x, fma(_177, fp_c8_1._m0[3].x, _173 * fp_c8_1._m0[10].x))), _215, _195 * fp_c7_1._m0[45].y);
        float _221 = fma(fma(_199, -fp_c7_1._m0[45].y, fma(_183, fp_c8_1._m0[17].y, fma(_177, fp_c8_1._m0[3].y, _173 * fp_c8_1._m0[10].y))), _215, _199 * fp_c7_1._m0[45].y);
        _223 = fp_c7_1._m0[18].w;
        _203 = _217;
        _225 = 0.0;
        _205 = fma(_141, (-_187) + _197, _187);
        _207 = fma(_141, (-_185) + _189, _185);
        _209 = fma(_141, (-_191) + _193, _191);
        _211 = _219;
        _213 = _221;
        _227 = _219 * fp_c7_1._m0[18].z;
        _229 = _217 * fp_c7_1._m0[18].z;
        _231 = _221 * fp_c7_1._m0[18].z;
    }
    else
    {
        _223 = max(texture(fp_tex_tcb_10, vec2(_96, _98)).x, fp_c1_1._m0[0].y);
        _225 = texture(fp_tex_tcb_12, vec2(_96, _98)).x;
        _227 = 0.0;
        _229 = 0.0;
        _231 = 0.0;
    }
    float _233 = _82.x;
    float _235 = _82.y;
    float _237 = _82.z;
    float _239 = fma(_225, -_203, _203);
    float _241 = 1.0 / (_80.z * gl_FragCoord.w);
    vec2 _243 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _139, 0.5, 0.5), fma(_78.y * _139, -0.5, 0.5))).xy;
    vec2 _245 = texture(fp_tex_tcb_22, vec2(_84.x, _84.y)).xy;
    float _247 = inversesqrt(fma(_237, _237, fma(_235, _235, _233 * _233)));
    float _249 = _233 * (-_247);
    float _251 = _235 * (-_247);
    float _253 = _237 * (-_247);
    float _255 = fma(_253, _209, fma(_251, _207, _249 * _205));
    vec4 _258 = texture(fp_tex_tcb_24, vec2(_84.z, _84.w)).xyzw;
    float _260 = _258.w;
    float _262 = max(_255, fp_c1_1._m0[0].w);
    vec2 _264 = texture(fp_tex_tcb_38, vec2(_262, (-_223) + (-0.0))).xy;
    float _266 = _80.w;
    float _268 = fma(_225, -_211, _211);
    float _270 = fma(_225, -_213, _213);
    float _272 = clamp(clamp(fma(_245.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0) * _266, 0.0, 1.0);
    float _274 = clamp((-_272) + 1.0, 0.0, 1.0);
    float _276 = fma(_211 + (-0.039999999105930328369140625), _225, fp_c1_1._m0[0].z);
    float _278 = fma(_213 + (-0.039999999105930328369140625), _225, fp_c1_1._m0[0].z);
    float _280 = fma(_203 + (-0.039999999105930328369140625), _225, fp_c1_1._m0[0].z);
    float _282 = clamp((-fma(_272, fp_c7_1._m0[37].w, clamp(clamp(fma(_245.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0) * _266, 0.0, 1.0) + fma(max((-_243.x) + 1.0, (-_243.y) + 1.0), clamp(_86.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_80.x * gl_FragCoord.w) * _241, (_80.y * gl_FragCoord.w) * _241)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _284 = _262;
    float _286 = _276;
    float _288 = _278;
    float _290 = _280;
    float _292 = _249;
    float _308;
    float _310;
    float _312;
    float _314;
    float _316;
    float _318;
    float _320;
    float _322;
    float _324;
    float _326;
    if (_181)
    {
        float _294 = fma(_253, -_209, fma(_251, -_207, _249 * (-_205)));
        float _296 = fma(_294 * _205, -2.0, -_249);
        float _298 = fma(_294 * _207, -2.0, -_251);
        float _300 = fma(_294 * _209, -2.0, -_253);
        float _302 = 1.0 / max(abs(_300), max(abs(_296), abs(_298)));
        vec3 _304 = texture(fp_tex_tcb_36, vec4(_296 * _302, _298 * _302, _300 * _302, float(12)), 0.0).xyz;
        float _306 = fma(_264.x, fp_c7_1._m0[19].x, _264.y);
        _308 = fma(_207 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _310 = _205 * fp_c7_1._m0[19].z;
        _312 = _209 * fp_c7_1._m0[19].z;
        _286 = fp_c7_1._m0[19].x;
        _314 = 0.0;
        _316 = 0.0;
        _288 = fp_c7_1._m0[19].x;
        _318 = 0.0;
        _320 = _304.x * _306;
        _290 = fp_c7_1._m0[19].x;
        _322 = _304.y * _306;
        _324 = _304.z * _306;
        _326 = 1.0;
    }
    else
    {
        float _328 = fma(_253, -_209, fma(_251, -_207, _249 * (-_205)));
        float _330 = fma(_328 * _205, -2.0, -_249);
        float _332 = fma(_328 * _207, -2.0, -_251);
        float _334 = fma(_328 * _209, -2.0, -_253);
        float _336 = 1.0 / max(abs(_334), max(abs(_330), abs(_332)));
        float _338 = max(_255, fp_c1_1._m0[0].w);
        vec2 _340 = texture(fp_tex_tcb_38, vec2(_338, (-_223) + (-0.0))).xy;
        float _342 = _340.x;
        float _344 = _340.y;
        vec3 _346 = texture(fp_tex_tcb_36, vec4(_330 * _336, _332 * _336, _334 * _336, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_223 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _348 = _86.y;
        float _350 = fma(fma(_193, -fp_c5_1._m0[23].z, fma(_189, -fp_c5_1._m0[23].y, _197 * (-fp_c5_1._m0[23].x))), -_207, _207);
        float _352 = _348 + (-fp_c9_1._m0[32].w);
        float _354 = _352;
        _312 = _209;
        _284 = _338;
        _326 = clamp(fma(_350, clamp(_157 * (-7.0), 0.0, 1.0), -_350) + fp_c1_1._m0[1].y, 0.0, 1.0);
        if (_348 < fp_c9_1._m0[32].w)
        {
            _354 = _352 * (-5.0);
        }
        float _356 = max(0.0, ((-_207) + 1.2000000476837158203125) * (clamp(fma(_354, -(1.0 / fma(clamp((-_207) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_354, -(1.0 / fma(clamp((-_207) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0))) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w);
        _308 = _207;
        _310 = _205;
        _314 = _356 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _316 = _356 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _318 = _356 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _320 = fma(_276, _342, _344) * _346.x;
        _322 = fma(_278, _342, _344) * _346.y;
        _324 = fma(_280, _342, _344) * _346.z;
    }
    float _358 = _249 + (-fp_c5_1._m0[23].x);
    float _360 = _86.z;
    float _362 = _251 + (-fp_c5_1._m0[23].y);
    float _364 = _86.x;
    float _366 = _308 * _310;
    float _368 = _253 + (-fp_c5_1._m0[23].z);
    float _370 = _312 * _308;
    float _372 = fma(_310, _310, -(_308 * _308));
    float _374 = inversesqrt(fma(_368, _368, fma(_362, _362, _358 * _358)));
    float _376 = _312 * _310;
    float _378 = _312 * _312;
    float _380 = fma(_223, 0.5, 0.5);
    float _382 = _223 * _223;
    float _384 = _362 * _374;
    float _386 = _368 * _374;
    float _388 = _358 * _374;
    float _390 = (_380 * 0.5) * _380;
    float _392 = 1.0 / (_390 + fma(_284, -_390, _284));
    int _394 = max(0, min(int(trunc((_360 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _396 = max(fma(_253, _386, fma(_251, _384, _249 * _388)), fp_c1_1._m0[0].w);
    float _398 = _382 * _382;
    float _400 = max(fma(_386, _209, fma(_384, _207, _388 * _205)), fp_c1_1._m0[0].w) * max(fma(_386, _209, fma(_384, _207, _388 * _205)), fp_c1_1._m0[0].w);
    uint _403 = uint(int(uint((((int(uint(_394) >> uint(16)) * 20) << 16) + (((_394 & 65535) * 20) + max(0, min(int(trunc((_364 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _405 = fp_c10_1._m0[int(uint(int(_403)) >> uint(2))][int(_403) & 3];
    float _407 = fma(_268, -_286, _268);
    float _409 = exp2(_396 * fma(_396, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _411 = (_266 * (_258.x * _260)) * 32.0;
    float _413 = (_266 * (_258.y * _260)) * 32.0;
    float _415 = (_266 * (_258.z * _260)) * 32.0;
    float _417 = fma(_407, _411, fma(max(0.0, fma(_372, fp_c5_1._m0[31].x, (fma(_312, fp_c5_1._m0[25].z, fma(_308, fp_c5_1._m0[25].y, _310 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_376, fp_c5_1._m0[28].w, fma(_378, fp_c5_1._m0[28].z, fma(_370, fp_c5_1._m0[28].y, _366 * fp_c5_1._m0[28].x))))) + _314, _407, _320));
    float _419 = (_392 * (1.0 / (_390 + fma(max(fma(_209, -fp_c5_1._m0[23].z, fma(_207, -fp_c5_1._m0[23].y, _205 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_390, max(fma(_209, -fp_c5_1._m0[23].z, fma(_207, -fp_c5_1._m0[23].y, _205 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_382 * (1.0 / max(fma(_400, _398, -_400) + 1.0, fp_c1_1._m0[0].w))) * (_382 * (1.0 / max(fma(_400, _398, -_400) + 1.0, fp_c1_1._m0[0].w))));
    float _421 = fma(_270, -_288, _270);
    float _423 = fma(_239, -_290, _239);
    float _425 = fma(_421, _413, fma(max(0.0, fma(_372, fp_c5_1._m0[31].y, (fma(_312, fp_c5_1._m0[26].z, fma(_308, fp_c5_1._m0[26].y, _310 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_376, fp_c5_1._m0[29].w, fma(_378, fp_c5_1._m0[29].z, fma(_370, fp_c5_1._m0[29].y, _366 * fp_c5_1._m0[29].x))))) + _316, _421, _322));
    float _427 = fma(_423, _415, fma(max(0.0, fma(_372, fp_c5_1._m0[31].z, (fma(_312, fp_c5_1._m0[27].z, fma(_308, fp_c5_1._m0[27].y, _310 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_376, fp_c5_1._m0[30].w, fma(_378, fp_c5_1._m0[30].z, fma(_370, fp_c5_1._m0[30].y, _366 * fp_c5_1._m0[30].x))))) + _318, _423, _324));
    float _429 = _427;
    float _431 = _417;
    float _433 = _425;
    float _435 = _417;
    float _437 = _427;
    float _439 = _425;
    if (floatBitsToInt(_405) != (-1))
    {
        int _441 = floatBitsToInt(_405);
        int _443 = 0;
        float _447;
        float _449;
        float _451;
        int _535;
        do
        {
            int _445 = _441 & 255;
            _447 = _431;
            _449 = _433;
            _451 = _429;
            _453 = uint(_445) >= 30u;
            if (_453)
            {
                break;
            }
            int _455 = _445 << 4;
            uint _457 = uint(int(uint(_455 + 7360) >> uint(2)));
            int _459 = int(_457) + 1;
            uint _461 = uint(int(uint(_455 + 7368) >> uint(2)));
            float _463 = (-_364) + fp_c10_1._m0[int(uint(int(_457)) >> uint(2))][int(_457) & 3];
            float _465 = (-_86.y) + fp_c10_1._m0[int(uint(_459) >> uint(2))][_459 & 3];
            float _467 = (-_360) + fp_c10_1._m0[int(uint(int(_461)) >> uint(2))][int(_461) & 3];
            float _469 = fma(_467, _467, fma(_465, _465, _463 * _463));
            float _471 = _463 * inversesqrt(_469);
            float _473 = _465 * inversesqrt(_469);
            float _475 = _467 * inversesqrt(_469);
            float _477 = _249 + _471;
            float _479 = _251 + _473;
            float _481 = _253 + _475;
            uint _483 = uint(int(uint(_455 + 6880) >> uint(2)));
            int _485 = int(_483) + 1;
            float _487 = inversesqrt(fma(_481, _481, fma(_479, _479, _477 * _477)));
            float _489 = _477 * _487;
            float _491 = _479 * _487;
            float _493 = _481 * _487;
            uint _495 = uint(int(uint(_455 + 8320) >> uint(2)));
            float _497 = fp_c10_1._m0[int(uint(int(_495)) >> uint(2))][int(_495) & 3];
            float _499 = fma(_475, _209, fma(_473, _207, _471 * _205));
            float _501 = max(fma(_253, _493, fma(_251, _491, _249 * _489)), fp_c1_1._m0[0].w);
            float _503 = max(fma(_493, _209, fma(_491, _207, _489 * _205)), fp_c1_1._m0[0].w) * max(fma(_493, _209, fma(_491, _207, _489 * _205)), fp_c1_1._m0[0].w);
            float _505 = max(_499, fp_c1_1._m0[0].w);
            uint _507 = uint(int(uint(_455 + 6400) >> uint(2)));
            int _509 = int(_507) + 1;
            float _511 = exp2(_501 * fma(_501, fp_c1_1._m0[1].z, -6.9831600189208984375));
            uint _513 = uint(int(uint(_455 + 6408) >> uint(2)));
            bool _515 = floatBitsToInt(_497) != 0;
            float _517 = (_392 * (1.0 / (_390 + fma(_390, -_505, _505)))) * ((_382 * (1.0 / max(fma(_398, _503, -_503) + 1.0, fp_c1_1._m0[0].w))) * (_382 * (1.0 / max(fma(_398, _503, -_503) + 1.0, fp_c1_1._m0[0].w))));
            float _519 = _497;
            if (!_515)
            {
                _519 = 1.0;
            }
            float _521 = _519;
            if (_515)
            {
                uint _523 = uint(int(uint(_455 + 7840) >> uint(2)));
                int _525 = int(_523) + 1;
                uint _527 = uint(int(uint(_455 + 6888) >> uint(2)));
                float _529 = fp_c10_1._m0[int(uint(int(_527)) >> uint(2))][int(_527) & 3];
                int _531 = int(_527) + 1;
                uint _533 = uint(int(uint(_455 + 7848) >> uint(2)));
                _521 = exp2(fp_c10_1._m0[int(uint(_531) >> uint(2))][_531 & 3] * log2(clamp(((-_529) + fma(_475, -fp_c10_1._m0[int(uint(int(_533)) >> uint(2))][int(_533) & 3], fma(_473, -fp_c10_1._m0[int(uint(_525) >> uint(2))][_525 & 3], _471 * (-fp_c10_1._m0[int(uint(int(_523)) >> uint(2))][int(_523) & 3])))) * (1.0 / ((-_529) + 1.0)), 0.0, 1.0)));
            }
            _535 = _443 + 1;
            float _537 = (exp2(fp_c10_1._m0[int(uint(_485) >> uint(2))][_485 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_483)) >> uint(2))][int(_483) & 3], -sqrt(_469), fp_c1_1._m0[1].x), 0.0, 1.0))) * _521) * clamp(_499 + (-0.0), 0.0, 1.0);
            float _539 = fma(fp_c10_1._m0[int(uint(int(_513)) >> uint(2))][int(_513) & 3] * _537, fma(_239, fp_c1_1._m0[2].x, ((fma(_511, -_290, _511) + _290) * _517) * 0.079577468335628509521484375), _429);
            float _541 = fma(fp_c10_1._m0[int(uint(int(_507)) >> uint(2))][int(_507) & 3] * _537, fma(_268, fp_c1_1._m0[2].x, ((fma(_511, -_286, _511) + _286) * _517) * 0.079577468335628509521484375), _431);
            float _543 = fma(fp_c10_1._m0[int(uint(_509) >> uint(2))][_509 & 3] * _537, fma(_270, fp_c1_1._m0[2].x, ((fma(_511, -_288, _511) + _288) * _517) * 0.079577468335628509521484375), _433);
            _441 = int(uint(_441) >> uint(8));
            _443 = _535;
            _429 = _539;
            _431 = _541;
            _433 = _543;
            _447 = _541;
            _449 = _543;
            _451 = _539;
        } while (!(_535 >= 4));
        _453 = false;
        _435 = _447;
        _437 = _451;
        _439 = _449;
        if ((_441 & 255) == 30)
        {
            float _545 = _86.y;
            float _547 = 1.0 / (fma(_360, fp_c10_1._m0[565].z, fma(_545, fp_c10_1._m0[565].y, _364 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _549 = 1.0 / fp_c10_1._m0[561].y;
            float _551 = _364 + (-fp_c10_1._m0[557].x);
            float _553 = _360 + (-fp_c10_1._m0[557].z);
            float _555 = _551 * fp_c10_1._m0[558].z;
            float _557 = _553 * fp_c10_1._m0[558].x;
            float _559 = (-_364) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_549, fp_c10_1._m0[557].x);
            float _561 = (-_360) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_549, fp_c10_1._m0[557].z);
            float _563 = fma(_553, _553, _551 * _551);
            float _565 = _559 * _559;
            float _567 = ((-float(_557 < _555)) + float(_557 > _555)) * fp_c10_1._m0[561].y;
            float _569 = sqrt(fma(_561, _561, _565)) * (-fp_c10_1._m0[558].y);
            float _571 = inversesqrt(fma(_561, _561, fma(_569, _569, _565)));
            float _573 = fma(_553, fp_c10_1._m0[558].z, _551 * fp_c10_1._m0[558].x);
            float _575 = _559 * _571;
            float _577 = _569 * _571;
            float _579 = _561 * _571;
            bool _581 = _573 > 0.0;
            float _583 = _249 + _575;
            float _585 = _251 + _577;
            float _587 = _253 + _579;
            float _589 = inversesqrt(fma(_579, _579, _575 * _575));
            float _591 = fma(_579, _209, fma(_577, _207, _575 * _205));
            float _593 = inversesqrt(fma(_587, _587, fma(_585, _585, _583 * _583)));
            float _595 = _583 * _593;
            float _597 = _587 * _593;
            float _599 = _585 * _593;
            if (_581)
            {
                _292 = sqrt(_563);
            }
            float _601 = _292;
            if (!_581)
            {
                _601 = 1.0;
            }
            float _603 = max(_591, fp_c1_1._m0[0].w);
            float _605 = max(fma(_253, _597, fma(_251, _599, _249 * _595)), fp_c1_1._m0[0].w);
            float _607 = max(fma(_597, _209, fma(_599, _207, _595 * _205)), fp_c1_1._m0[0].w) * max(fma(_597, _209, fma(_599, _207, _595 * _205)), fp_c1_1._m0[0].w);
            bool _609 = fma(_553 * inversesqrt(_563), fp_c10_1._m0[558].z, (_551 * inversesqrt(_563)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _611 = clamp(fma(_573 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_573 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _613 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_551, fma(_567, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_553 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_567 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_551, fma(_567, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_553 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_567 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _615 = log2(clamp((fma(_579 * _589, -fp_c10_1._m0[558].z, (_575 * _589) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _617 = _615;
            if (_609)
            {
                _617 = fma(_613, -_613, fp_c1_1._m0[1].x) * fma(_613, -_613, fp_c1_1._m0[1].x);
            }
            float _619 = exp2(_605 * fma(_605, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _621 = _617;
            if (!_609)
            {
                _621 = 1.0;
            }
            float _623 = clamp(_591 + (-0.0), 0.0, 1.0) * (min(fma(_611, -_611, fp_c1_1._m0[1].x) * fma(_611, -_611, fp_c1_1._m0[1].x), _621) * (exp2(log2(clamp(fma(_601, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_615)));
            float _625 = (_392 * (1.0 / (_390 + fma(_390, -_603, _603)))) * ((_382 * (1.0 / max(fma(_398, _607, -_607) + 1.0, fp_c1_1._m0[0].w))) * (_382 * (1.0 / max(fma(_398, _607, -_607) + 1.0, fp_c1_1._m0[0].w))));
            float _627 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_360, fp_c10_1._m0[562].z, fma(_545, fp_c10_1._m0[562].y, _364 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _547, 0.5, 0.5), (-fma((fma(_360, fp_c10_1._m0[563].z, fma(_545, fp_c10_1._m0[563].y, _364 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _547, 0.5, 0.5)) + 1.0)).z > fma((fma(_360, fp_c10_1._m0[564].z, fma(_545, fp_c10_1._m0[564].y, _364 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _547, 0.5, 0.5)) || (_573 <= 0.0));
            _435 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _623) * fma(_268, fp_c1_1._m0[2].x, ((fma(_619, -_286, _619) + _286) * _625) * 0.079577468335628509521484375), _627, _447);
            _437 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _623) * fma(_239, fp_c1_1._m0[2].x, ((fma(_619, -_290, _619) + _290) * _625) * 0.079577468335628509521484375), _627, _451);
            _439 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _623) * fma(_270, fp_c1_1._m0[2].x, ((fma(_619, -_288, _619) + _288) * _625) * 0.079577468335628509521484375), _627, _449);
        }
    }
    float _629 = _364 + (-fp_c3_1._m0[11].w);
    float _631 = _86.y;
    float _633 = _360 + (-fp_c3_1._m0[13].w);
    float _635 = clamp(fma(_209, -fp_c5_1._m0[23].z, fma(_207, -fp_c5_1._m0[23].y, _205 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _637 = _631 + (-fp_c3_1._m0[12].w);
    float _639 = fma(_633, _633, fma(_637, _637, _629 * _629));
    float _641 = fma(_274, _435, _282 * ((fma((fma(_409, -_286, _409) + _286) * _419, fp_c1_1._m0[1].w, _268 * 0.3183098733425140380859375) * fma(_635, fp_c5_1._m0[5].x, _411)) * _326)) + _227;
    float _643 = fma(_274, _437, _282 * ((fma((fma(_409, -_290, _409) + _290) * _419, fp_c1_1._m0[1].w, _239 * 0.3183098733425140380859375) * fma(_635, fp_c5_1._m0[5].z, _415)) * _326)) + _229;
    float _645 = clamp(fma(_282 * _274, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _647 = fma(_274, _439, _282 * ((fma((fma(_409, -_288, _409) + _288) * _419, fp_c1_1._m0[1].w, _270 * 0.3183098733425140380859375) * fma(_635, fp_c5_1._m0[5].y, _413)) * _326)) + _231;
    float _649 = exp2(log2(clamp(sqrt(_639) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_633 * inversesqrt(_639), fp_c5_1._m0[23].z, fma(_637 * inversesqrt(_639), fp_c5_1._m0[23].y, (_629 * inversesqrt(_639)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _651 = clamp(fma(fma(_360, fp_c5_1._m0[14].z, fma(_631, fp_c5_1._m0[14].y, _364 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _653 = fma((-_641) + fp_c5_1._m0[13].x, _651, _641);
    float _655 = fma((-_647) + fp_c5_1._m0[13].y, _651, _647);
    float _657 = fma((-_643) + fp_c5_1._m0[13].z, _651, _643);
    float _659 = clamp((-exp2((clamp(fma(sqrt(_639), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _89.x = fma((-_653) + fma(fma((_649 * fp_c7_1._m0[55].x) * _645, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _659, _653);
    _89.y = fma((-_655) + fma(fma((_649 * fp_c7_1._m0[55].y) * _645, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _659, _655);
    _89.z = fma((-_657) + fma(fma((_649 * fp_c7_1._m0[55].z) * _645, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _659, _657);
    _89.w = 1.0;
}


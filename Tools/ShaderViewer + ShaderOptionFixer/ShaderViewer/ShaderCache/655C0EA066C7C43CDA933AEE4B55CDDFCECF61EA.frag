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

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_22;
layout(binding = 4) uniform sampler2D fp_tex_tcb_24;
layout(binding = 5) uniform sampler2D fp_tex_tcb_26;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 2) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 0) out vec4 _79;
layout(location = 6) in vec4 _81;
layout(location = 4) in vec4 _83;
layout(location = 7) in vec4 _85;
layout(location = 3) in vec4 _87;
uint _6[12];

void main()
{
    bool _473 = false;
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
    vec3 _114 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _116 = _72.x;
    float _118 = _72.y;
    float _120 = _72.z;
    float _122 = _74.y;
    float _124 = _74.z;
    float _126 = _74.x;
    float _128 = _74.w;
    float _130 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _132 = _120 * _130;
    float _134 = _116 * _130;
    float _136 = _118 * _130;
    int _139 = floatBitsToInt(fp_c6_1._m0[25].w) + (-1);
    float _141 = 1.0 / _76.w;
    float _143 = min((texture(fp_tex_tcb_26, vec2(_94, _96)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _145 = _143 * float(max(0, (-_139)));
    float _147 = _143 * float((-abs(_139)) + 1);
    float _149 = _143 * float(max(0, _139));
    float _151 = fma(clamp(_136 + (-0.0), 0.0, 1.0), (-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, fp_c7_1._m0[20].y);
    float _153 = max(_149, max(_147, _145));
    float _155 = sqrt(clamp((-fma(_108, _108, _110 * _110)) + 1.0, 0.0, 1.0));
    float _157 = _153 + (-fp_c7_1._m0[21].w);
    float _159 = texture(fp_tex_tcb_26, vec2(_94 + fp_c6_1._m0[26].w, _96 + fp_c6_1._m0[26].w)).x + (-texture(fp_tex_tcb_26, vec2(_94 + (-fp_c6_1._m0[26].w), _96 + (-fp_c6_1._m0[26].w))).x);
    float _161 = clamp(_157 + (-0.0), 0.0, 1.0);
    float _163 = fma(_132, _155, fma(_108, _124, _110 * (fma(_134, _122, -(_136 * _126)) * _128)));
    float _165 = fma(_126 * _159, fp_c6_1._m0[27].x, _134);
    float _167 = fma(_134, _155, fma(_108, _126, _110 * (fma(_136, _124, -(_132 * _122)) * _128)));
    float _169 = fma(_136, _155, fma(_108, _122, _110 * (fma(_132, _126, -(_134 * _124)) * _128)));
    float _171 = fma(_122 * _159, fp_c6_1._m0[27].x, _136);
    float _173 = fma(_124 * _159, fp_c6_1._m0[27].x, _132);
    float _175 = clamp(((_147 + (-_153)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    bool _177 = min(_161 * 1000.0, 1.0) > 0.5;
    float _179 = clamp(((_145 + (-_153)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _181 = inversesqrt(fma(_173, _173, fma(_171, _171, _165 * _165)));
    float _183 = inversesqrt(fma(_163, _163, fma(_169, _169, _167 * _167)));
    float _185 = clamp(((_149 + (-_153)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _187 = _163 * _183;
    float _189 = fma(_185, fp_c8_1._m0[18].y, fma(_179, fp_c8_1._m0[4].y, _175 * fp_c8_1._m0[11].y));
    float _191 = fma(_185, fp_c8_1._m0[18].x, fma(_179, fp_c8_1._m0[4].x, _175 * fp_c8_1._m0[11].x));
    float _193 = fma(_185, fp_c8_1._m0[18].z, fma(_179, fp_c8_1._m0[4].z, _175 * fp_c8_1._m0[11].z));
    float _195 = _167 * _183;
    float _197 = _169 * _183;
    float _199 = _165 * _181;
    float _201 = _171 * _181;
    float _203 = _173 * _181;
    int _205 = floatBitsToInt(_161);
    float _207 = _195;
    float _209 = _197;
    float _211 = _187;
    float _213 = _114.x;
    float _215 = _114.y;
    float _217 = _114.z;
    int _219 = floatBitsToInt(_183);
    int _221 = floatBitsToInt(_187);
    int _223 = floatBitsToInt(_181);
    float _235;
    float _237;
    float _239;
    float _241;
    float _243;
    float _245;
    if (_177)
    {
        float _225 = clamp(_161 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _227 = (-_195) + _199;
        float _229 = fma(fma(_193, -fp_c7_1._m0[45].y, fma(_185, fp_c8_1._m0[17].z, fma(_179, fp_c8_1._m0[3].z, _175 * fp_c8_1._m0[10].z))), _225, _193 * fp_c7_1._m0[45].y);
        float _231 = fma(fma(_191, -fp_c7_1._m0[45].y, fma(_185, fp_c8_1._m0[17].x, fma(_179, fp_c8_1._m0[3].x, _175 * fp_c8_1._m0[10].x))), _225, _191 * fp_c7_1._m0[45].y);
        float _233 = fma(fma(_189, -fp_c7_1._m0[45].y, fma(_185, fp_c8_1._m0[17].y, fma(_179, fp_c8_1._m0[3].y, _175 * fp_c8_1._m0[10].y))), _225, _189 * fp_c7_1._m0[45].y);
        _205 = floatBitsToInt(_227);
        _235 = fp_c7_1._m0[18].w;
        _207 = fma(_151, _227, _195);
        _209 = fma(_151, (-_197) + _201, _197);
        _211 = fma(_151, (-_187) + _203, _187);
        _237 = 0.0;
        _213 = _231;
        _215 = _233;
        _217 = _229;
        _239 = 0.0;
        _241 = _231 * fp_c7_1._m0[18].z;
        _243 = _229 * fp_c7_1._m0[18].z;
        _245 = _233 * fp_c7_1._m0[18].z;
    }
    else
    {
        _235 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].y);
        _237 = fp_c6_1._m0[9].x;
        _239 = 1.0;
        _241 = 0.0;
        _243 = 0.0;
        _245 = 0.0;
    }
    int _247 = _205;
    if (_102)
    {
        _219 = 0;
    }
    if (_102)
    {
        _221 = 0;
    }
    if (_102)
    {
        _247 = 0;
    }
    if (_102)
    {
        _223 = 0;
    }
    if (_102)
    {
        _79.x = intBitsToFloat(_219);
        _79.y = intBitsToFloat(_221);
        _79.z = intBitsToFloat(_247);
        _79.w = intBitsToFloat(_223);
        return;
    }
    float _249 = _83.x;
    float _251 = _83.y;
    float _253 = _83.z;
    float _255 = 1.0 / (_81.z * gl_FragCoord.w);
    float _257 = inversesqrt(fma(_253, _253, fma(_251, _251, _249 * _249)));
    float _259 = _249 * (-_257);
    float _261 = _251 * (-_257);
    float _263 = _253 * (-_257);
    vec2 _265 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _141, 0.5, 0.5), fma(_76.y * _141, -0.5, 0.5))).xy;
    vec2 _267 = texture(fp_tex_tcb_22, vec2(_85.x, _85.y)).xy;
    float _269 = fma(_263, _211, fma(_261, _209, _259 * _207));
    vec4 _272 = texture(fp_tex_tcb_24, vec2(_85.z, _85.w)).xyzw;
    float _274 = _272.w;
    float _276 = max(_269, fp_c1_1._m0[0].w);
    vec2 _278 = texture(fp_tex_tcb_38, vec2(_276, (-_235) + (-0.0))).xy;
    float _280 = _81.w;
    float _282 = fma(_213, -_237, _213);
    float _284 = fma(_215, -_237, _215);
    float _286 = fma(_217, -_237, _217);
    float _288 = fma(_215 + (-0.039999999105930328369140625), _237, fp_c1_1._m0[0].z);
    float _290 = fma(_213 + (-0.039999999105930328369140625), _237, fp_c1_1._m0[0].z);
    float _292 = clamp(clamp(fma(_267.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0) * _280, 0.0, 1.0);
    float _294 = fma(_217 + (-0.039999999105930328369140625), _237, fp_c1_1._m0[0].z);
    float _296 = clamp((-_292) + 1.0, 0.0, 1.0);
    float _298 = clamp((-fma(_292, fp_c7_1._m0[37].w, clamp(clamp(fma(_267.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0) * _280, 0.0, 1.0) + fma(max((-_265.x) + 1.0, (-_265.y) + 1.0), clamp(_87.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_81.x * gl_FragCoord.w) * _255, (_81.y * gl_FragCoord.w) * _255)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _300 = _276;
    float _316;
    float _318;
    float _320;
    float _322;
    float _324;
    float _326;
    float _328;
    float _330;
    float _332;
    float _334;
    float _336;
    float _338;
    float _340;
    if (_177)
    {
        float _302 = fma(_263, -_211, fma(_261, -_209, _259 * (-_207)));
        float _304 = fma(_302 * _207, -2.0, -_259);
        float _306 = fma(_302 * _209, -2.0, -_261);
        float _308 = fma(_302 * _211, -2.0, -_263);
        float _310 = 1.0 / max(abs(_308), max(abs(_304), abs(_306)));
        vec3 _312 = texture(fp_tex_tcb_36, vec4(_304 * _310, _306 * _310, _308 * _310, float(12)), 0.0).xyz;
        float _314 = fma(_278.x, fp_c7_1._m0[19].x, _278.y);
        _316 = fma(_209 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _318 = _207 * fp_c7_1._m0[19].z;
        _320 = _211 * fp_c7_1._m0[19].z;
        _322 = fp_c7_1._m0[19].x;
        _324 = 0.0;
        _326 = 0.0;
        _328 = fp_c7_1._m0[19].x;
        _330 = 0.0;
        _332 = fp_c7_1._m0[19].x;
        _334 = _312.x * _314;
        _336 = _312.y * _314;
        _338 = _312.z * _314;
        _340 = 1.0;
    }
    else
    {
        float _342 = max(_269, fp_c1_1._m0[0].w);
        float _344 = fma(_263, -_211, fma(_261, -_209, _259 * (-_207)));
        float _346 = fma(_344 * _207, -2.0, -_259);
        float _348 = fma(_344 * _209, -2.0, -_261);
        float _350 = fma(_344 * _211, -2.0, -_263);
        float _352 = 1.0 / max(abs(_350), max(abs(_346), abs(_348)));
        vec2 _354 = texture(fp_tex_tcb_38, vec2(_342, (-_235) + (-0.0))).xy;
        float _356 = _354.x;
        float _358 = _354.y;
        vec3 _360 = texture(fp_tex_tcb_36, vec4(_346 * _352, _348 * _352, _350 * _352, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_235 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _362 = _87.y;
        float _364 = fma(fma(fp_c6_1._m0[40].z, fp_c6_1._m0[41].y, -_288), _239, _288);
        float _366 = fma(fma(fp_c6_1._m0[40].z, fp_c6_1._m0[41].x, -_290), _239, _290);
        float _368 = fma(fma(_203, -fp_c5_1._m0[23].z, fma(_201, -fp_c5_1._m0[23].y, _199 * (-fp_c5_1._m0[23].x))), -_209, _209);
        float _370 = _362 + (-fp_c9_1._m0[32].w);
        float _372 = _370;
        _300 = _342;
        _328 = _366;
        _332 = _364;
        if (_362 < fp_c9_1._m0[32].w)
        {
            _372 = _370 * (-5.0);
        }
        float _374 = fma(fma(fp_c6_1._m0[40].z, fp_c6_1._m0[41].z, -_294), _239, _294);
        float _376 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w) * max(0.0, ((-_209) + 1.2000000476837158203125) * (clamp(fma(_372, -(1.0 / fma(clamp((-_209) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_372, -(1.0 / fma(clamp((-_209) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0)));
        _316 = _209;
        _318 = _207;
        _320 = _211;
        _322 = _374;
        _324 = _376 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _326 = _376 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _330 = _376 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _334 = fma(_356, _366, _358) * _360.x;
        _336 = fma(_356, _364, _358) * _360.y;
        _338 = fma(_356, _374, _358) * _360.z;
        _340 = clamp(fma(_368, clamp(_157 * (-7.0), 0.0, 1.0), -_368) + fp_c1_1._m0[1].y, 0.0, 1.0);
    }
    float _378 = _316 * _318;
    float _380 = _87.z;
    float _382 = _320 * _316;
    float _384 = _87.x;
    float _386 = _259 + (-fp_c5_1._m0[23].x);
    float _388 = _320 * _320;
    float _390 = _261 + (-fp_c5_1._m0[23].y);
    float _392 = _263 + (-fp_c5_1._m0[23].z);
    float _394 = _320 * _318;
    float _396 = inversesqrt(fma(_392, _392, fma(_390, _390, _386 * _386)));
    float _398 = fma(_318, _318, -(_316 * _316));
    float _400 = _386 * _396;
    float _402 = _390 * _396;
    float _404 = _392 * _396;
    float _406 = (_280 * (_272.x * _274)) * 32.0;
    float _408 = (_280 * (_272.y * _274)) * 32.0;
    float _410 = (_280 * (_272.z * _274)) * 32.0;
    int _412 = max(0, min(int(trunc((_380 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _414 = fma(_235, 0.5, 0.5);
    float _416 = _235 * _235;
    float _418 = _416 * _416;
    float _420 = max(fma(_404, _211, fma(_402, _209, _400 * _207)), fp_c1_1._m0[0].w) * max(fma(_404, _211, fma(_402, _209, _400 * _207)), fp_c1_1._m0[0].w);
    float _422 = max(fma(_263, _404, fma(_261, _402, _259 * _400)), fp_c1_1._m0[0].w);
    float _424 = (_414 * 0.5) * _414;
    uint _427 = uint(int(uint((((int(uint(_412) >> uint(16)) * 20) << 16) + (((_412 & 65535) * 20) + max(0, min(int(trunc((_384 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _429 = fp_c10_1._m0[int(uint(int(_427)) >> uint(2))][int(_427) & 3];
    float _431 = 1.0 / (_424 + fma(_300, -_424, _300));
    float _433 = exp2(_422 * fma(_422, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _435 = fma(_286, -_322, _286);
    float _437 = fma(_282, -_328, _282);
    float _439 = fma(_284, -_332, _284);
    float _441 = (_431 * (1.0 / (_424 + fma(max(fma(_211, -fp_c5_1._m0[23].z, fma(_209, -fp_c5_1._m0[23].y, _207 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_424, max(fma(_211, -fp_c5_1._m0[23].z, fma(_209, -fp_c5_1._m0[23].y, _207 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_416 * (1.0 / max(fma(_420, _418, -_420) + 1.0, fp_c1_1._m0[0].w))) * (_416 * (1.0 / max(fma(_420, _418, -_420) + 1.0, fp_c1_1._m0[0].w))));
    float _443 = fma(_437, _406, fma(max(0.0, fma(_398, fp_c5_1._m0[31].x, (fma(_320, fp_c5_1._m0[25].z, fma(_316, fp_c5_1._m0[25].y, _318 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_394, fp_c5_1._m0[28].w, fma(_388, fp_c5_1._m0[28].z, fma(_382, fp_c5_1._m0[28].y, _378 * fp_c5_1._m0[28].x))))) + _324, _437, _334));
    float _445 = fma(_439, _408, fma(max(0.0, fma(_398, fp_c5_1._m0[31].y, (fma(_320, fp_c5_1._m0[26].z, fma(_316, fp_c5_1._m0[26].y, _318 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_394, fp_c5_1._m0[29].w, fma(_388, fp_c5_1._m0[29].z, fma(_382, fp_c5_1._m0[29].y, _378 * fp_c5_1._m0[29].x))))) + _326, _439, _336));
    float _447 = fma(_435, _410, fma(max(0.0, fma(_398, fp_c5_1._m0[31].z, (fma(_320, fp_c5_1._m0[27].z, fma(_316, fp_c5_1._m0[27].y, _318 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_394, fp_c5_1._m0[30].w, fma(_388, fp_c5_1._m0[30].z, fma(_382, fp_c5_1._m0[30].y, _378 * fp_c5_1._m0[30].x))))) + _330, _435, _338));
    float _449 = _445;
    float _451 = _447;
    float _453 = _443;
    float _455 = _443;
    float _457 = _447;
    float _459 = _445;
    if (floatBitsToInt(_429) != (-1))
    {
        int _461 = floatBitsToInt(_429);
        int _463 = 0;
        float _467;
        float _469;
        float _471;
        int _555;
        do
        {
            int _465 = _461 & 255;
            _467 = _453;
            _469 = _449;
            _471 = _451;
            _473 = uint(_465) >= 30u;
            if (_473)
            {
                break;
            }
            int _475 = _465 << 4;
            uint _477 = uint(int(uint(_475 + 7360) >> uint(2)));
            int _479 = int(_477) + 1;
            uint _481 = uint(int(uint(_475 + 7368) >> uint(2)));
            float _483 = (-_384) + fp_c10_1._m0[int(uint(int(_477)) >> uint(2))][int(_477) & 3];
            float _485 = (-_87.y) + fp_c10_1._m0[int(uint(_479) >> uint(2))][_479 & 3];
            float _487 = (-_380) + fp_c10_1._m0[int(uint(int(_481)) >> uint(2))][int(_481) & 3];
            float _489 = fma(_487, _487, fma(_485, _485, _483 * _483));
            float _491 = _483 * inversesqrt(_489);
            float _493 = _485 * inversesqrt(_489);
            float _495 = _487 * inversesqrt(_489);
            float _497 = _259 + _491;
            float _499 = _261 + _493;
            float _501 = _263 + _495;
            uint _503 = uint(int(uint(_475 + 6880) >> uint(2)));
            int _505 = int(_503) + 1;
            float _507 = inversesqrt(fma(_501, _501, fma(_499, _499, _497 * _497)));
            float _509 = _497 * _507;
            float _511 = _499 * _507;
            float _513 = _501 * _507;
            float _515 = fma(_495, _211, fma(_493, _209, _491 * _207));
            float _517 = max(fma(_263, _513, fma(_261, _511, _259 * _509)), fp_c1_1._m0[0].w);
            float _519 = max(fma(_513, _211, fma(_511, _209, _509 * _207)), fp_c1_1._m0[0].w) * max(fma(_513, _211, fma(_511, _209, _509 * _207)), fp_c1_1._m0[0].w);
            float _521 = max(_515, fp_c1_1._m0[0].w);
            uint _523 = uint(int(uint(_475 + 8320) >> uint(2)));
            uint _525 = uint(int(uint(_475 + 6408) >> uint(2)));
            uint _527 = uint(int(uint(_475 + 6400) >> uint(2)));
            int _529 = int(_527) + 1;
            float _531 = exp2(_517 * fma(_517, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _533 = fp_c10_1._m0[int(uint(_505) >> uint(2))][_505 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_503)) >> uint(2))][int(_503) & 3], -sqrt(_489), fp_c1_1._m0[1].x), 0.0, 1.0));
            float _535 = (_431 * (1.0 / (_424 + fma(_424, -_521, _521)))) * ((_416 * (1.0 / max(fma(_418, _519, -_519) + 1.0, fp_c1_1._m0[0].w))) * (_416 * (1.0 / max(fma(_418, _519, -_519) + 1.0, fp_c1_1._m0[0].w))));
            bool _537 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_523)) >> uint(2))][int(_523) & 3]) != 0;
            float _539 = _533;
            if (!_537)
            {
                _539 = 1.0;
            }
            float _541 = _539;
            if (_537)
            {
                uint _543 = uint(int(uint(_475 + 7840) >> uint(2)));
                int _545 = int(_543) + 1;
                uint _547 = uint(int(uint(_475 + 7848) >> uint(2)));
                uint _549 = uint(int(uint(_475 + 6888) >> uint(2)));
                float _551 = fp_c10_1._m0[int(uint(int(_549)) >> uint(2))][int(_549) & 3];
                int _553 = int(_549) + 1;
                _541 = exp2(fp_c10_1._m0[int(uint(_553) >> uint(2))][_553 & 3] * log2(clamp(((-_551) + fma(_495, -fp_c10_1._m0[int(uint(int(_547)) >> uint(2))][int(_547) & 3], fma(_493, -fp_c10_1._m0[int(uint(_545) >> uint(2))][_545 & 3], _491 * (-fp_c10_1._m0[int(uint(int(_543)) >> uint(2))][int(_543) & 3])))) * (1.0 / ((-_551) + 1.0)), 0.0, 1.0)));
            }
            _555 = _463 + 1;
            float _557 = (exp2(_533) * _541) * clamp(_515 + (-0.0), 0.0, 1.0);
            float _559 = fma(fp_c10_1._m0[int(uint(_529) >> uint(2))][_529 & 3] * _557, fma(_284, fp_c1_1._m0[2].x, ((fma(_531, -_332, _531) + _332) * _535) * 0.079577468335628509521484375), _449);
            float _561 = fma(fp_c10_1._m0[int(uint(int(_525)) >> uint(2))][int(_525) & 3] * _557, fma(_286, fp_c1_1._m0[2].x, ((fma(_531, -_322, _531) + _322) * _535) * 0.079577468335628509521484375), _451);
            float _563 = fma(fp_c10_1._m0[int(uint(int(_527)) >> uint(2))][int(_527) & 3] * _557, fma(_282, fp_c1_1._m0[2].x, ((fma(_531, -_328, _531) + _328) * _535) * 0.079577468335628509521484375), _453);
            _461 = int(uint(_461) >> uint(8));
            _463 = _555;
            _449 = _559;
            _451 = _561;
            _453 = _563;
            _467 = _563;
            _469 = _559;
            _471 = _561;
        } while (!(_555 >= 4));
        _473 = false;
        _455 = _467;
        _457 = _471;
        _459 = _469;
        if ((_461 & 255) == 30)
        {
            float _565 = _87.y;
            float _567 = 1.0 / (fma(_380, fp_c10_1._m0[565].z, fma(_565, fp_c10_1._m0[565].y, _384 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _569 = 1.0 / fp_c10_1._m0[561].y;
            float _571 = _384 + (-fp_c10_1._m0[557].x);
            float _573 = _380 + (-fp_c10_1._m0[557].z);
            float _575 = (-_384) + fma(_569, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _577 = (-_380) + fma(_569, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _579 = _571 * fp_c10_1._m0[558].z;
            float _581 = _573 * fp_c10_1._m0[558].x;
            float _583 = _575 * _575;
            float _585 = ((-float(_581 < _579)) + float(_581 > _579)) * fp_c10_1._m0[561].y;
            float _587 = sqrt(fma(_577, _577, _583)) * (-fp_c10_1._m0[558].y);
            float _589 = fma(_573, _573, _571 * _571);
            float _591 = inversesqrt(fma(_577, _577, fma(_587, _587, _583)));
            float _593 = _575 * _591;
            float _595 = fma(_573, fp_c10_1._m0[558].z, _571 * fp_c10_1._m0[558].x);
            float _597 = _577 * _591;
            float _599 = _587 * _591;
            bool _601 = _595 > 0.0;
            float _603 = _259 + _593;
            float _605 = inversesqrt(fma(_597, _597, _593 * _593));
            float _607 = _589;
            if (_601)
            {
                _607 = sqrt(_589);
            }
            float _609 = _261 + _599;
            float _611 = _607;
            if (!_601)
            {
                _611 = 1.0;
            }
            bool _613 = fma(_573 * inversesqrt(_589), fp_c10_1._m0[558].z, (_571 * inversesqrt(_589)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _615 = _263 + _597;
            float _617 = fma(_597, _211, fma(_599, _209, _593 * _207));
            float _619 = inversesqrt(fma(_615, _615, fma(_609, _609, _603 * _603)));
            float _621 = _603 * _619;
            float _623 = _609 * _619;
            float _625 = _615 * _619;
            float _627 = max(_617, fp_c1_1._m0[0].w);
            float _629 = max(fma(_263, _625, fma(_261, _623, _259 * _621)), fp_c1_1._m0[0].w);
            float _631 = clamp(fma(_595 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_595 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _633 = max(fma(_625, _211, fma(_623, _209, _621 * _207)), fp_c1_1._m0[0].w) * max(fma(_625, _211, fma(_623, _209, _621 * _207)), fp_c1_1._m0[0].w);
            float _635 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_571, fma(_585, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_573 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_585 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_571, fma(_585, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_573 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_585 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _637 = log2(clamp(fma(_611, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _639 = _637;
            if (!_613)
            {
                _639 = 1.0;
            }
            float _641 = _639;
            if (_613)
            {
                _641 = fma(_635, -_635, fp_c1_1._m0[1].x) * fma(_635, -_635, fp_c1_1._m0[1].x);
            }
            float _643 = exp2(_629 * fma(_629, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _645 = clamp(_617 + (-0.0), 0.0, 1.0) * (min(fma(_631, -_631, fp_c1_1._m0[1].x) * fma(_631, -_631, fp_c1_1._m0[1].x), _641) * (exp2(_637) * exp2(log2(clamp((fma(_597 * _605, -fp_c10_1._m0[558].z, (_593 * _605) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _647 = (_431 * (1.0 / (_424 + fma(_424, -_627, _627)))) * ((_416 * (1.0 / max(fma(_418, _633, -_633) + 1.0, fp_c1_1._m0[0].w))) * (_416 * (1.0 / max(fma(_418, _633, -_633) + 1.0, fp_c1_1._m0[0].w))));
            float _649 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_380, fp_c10_1._m0[562].z, fma(_565, fp_c10_1._m0[562].y, _384 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _567, 0.5, 0.5), (-fma((fma(_380, fp_c10_1._m0[563].z, fma(_565, fp_c10_1._m0[563].y, _384 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _567, 0.5, 0.5)) + 1.0)).z > fma((fma(_380, fp_c10_1._m0[564].z, fma(_565, fp_c10_1._m0[564].y, _384 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _567, 0.5, 0.5)) || (_595 <= 0.0));
            _455 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _645) * fma(_282, fp_c1_1._m0[2].x, ((fma(_643, -_328, _643) + _328) * _647) * 0.079577468335628509521484375), _649, _467);
            _457 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _645) * fma(_286, fp_c1_1._m0[2].x, ((fma(_643, -_322, _643) + _322) * _647) * 0.079577468335628509521484375), _649, _471);
            _459 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _645) * fma(_284, fp_c1_1._m0[2].x, ((fma(_643, -_332, _643) + _332) * _647) * 0.079577468335628509521484375), _649, _469);
        }
    }
    float _651 = _384 + (-fp_c3_1._m0[11].w);
    float _653 = _87.y;
    float _655 = _380 + (-fp_c3_1._m0[13].w);
    float _657 = clamp(fma(_211, -fp_c5_1._m0[23].z, fma(_209, -fp_c5_1._m0[23].y, _207 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _659 = _653 + (-fp_c3_1._m0[12].w);
    float _661 = fma(_655, _655, fma(_659, _659, _651 * _651));
    float _663 = clamp(fma(_298 * _296, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _665 = fma(_296, _455, _298 * ((fma((fma(_433, -_328, _433) + _328) * _441, fp_c1_1._m0[1].w, _282 * 0.3183098733425140380859375) * fma(_657, fp_c5_1._m0[5].x, _406)) * _340)) + _241;
    float _667 = clamp(fma(fma(_380, fp_c5_1._m0[14].z, fma(_653, fp_c5_1._m0[14].y, _384 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _669 = fma(_296, _457, _298 * ((fma((fma(_433, -_322, _433) + _322) * _441, fp_c1_1._m0[1].w, _286 * 0.3183098733425140380859375) * fma(_657, fp_c5_1._m0[5].z, _410)) * _340)) + _243;
    float _671 = fma(_296, _459, _298 * ((fma((fma(_433, -_332, _433) + _332) * _441, fp_c1_1._m0[1].w, _284 * 0.3183098733425140380859375) * fma(_657, fp_c5_1._m0[5].y, _408)) * _340)) + _245;
    float _673 = exp2(log2(clamp(sqrt(_661) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_655 * inversesqrt(_661), fp_c5_1._m0[23].z, fma(_659 * inversesqrt(_661), fp_c5_1._m0[23].y, (_651 * inversesqrt(_661)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _675 = fma((-_665) + fp_c5_1._m0[13].x, _667, _665);
    float _677 = fma((-_671) + fp_c5_1._m0[13].y, _667, _671);
    float _679 = fma((-_669) + fp_c5_1._m0[13].z, _667, _669);
    float _681 = clamp((-exp2((clamp(fma(sqrt(_661), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_675) + fma(fma((_673 * fp_c7_1._m0[55].x) * _663, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _681, _675);
    _79.y = fma((-_677) + fma(fma((_673 * fp_c7_1._m0[55].y) * _663, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _681, _677);
    _79.z = fma((-_679) + fma(fma((_673 * fp_c7_1._m0[55].z) * _663, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _681, _679);
    _79.w = clamp(_98 + (-0.0), 0.0, 1.0);
}


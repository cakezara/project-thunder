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

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_26;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 2) in vec4 _78;
layout(location = 5) in vec4 _80;
layout(location = 0) out vec4 _83;
layout(location = 6) in vec4 _85;
layout(location = 4) in vec4 _87;
layout(location = 3) in vec4 _89;
uint _6[12];

void main()
{
    bool _459 = false;
    float _96 = _70.x;
    float _98 = _70.y;
    float _100 = texture(fp_tex_tcb_8, vec2(_96, _98)).x;
    bool _103 = _100 <= 0.0;
    int _106 = floatBitsToInt(_96);
    int _108 = floatBitsToInt(_98);
    if (_103)
    {
        discard;
    }
    vec2 _112 = texture(fp_tex_tcb_E, vec2(_96, _98)).xy;
    float _114 = _112.x;
    float _116 = _112.y;
    vec3 _120 = texture(fp_tex_tcb_A, vec2(_96, _98)).xyz;
    float _122 = _72.x;
    float _124 = _72.y;
    float _126 = _72.z;
    float _128 = _78.y;
    float _130 = _78.w;
    float _132 = _78.x;
    float _134 = _78.z;
    float _136 = inversesqrt(fma(_126, _126, fma(_124, _124, _122 * _122)));
    bool _138 = floatBitsToInt(fma(float(gl_FrontFacing ? (-1) : 0), -2.0, -1.0)) <= 0;
    float _140 = _124 * _136;
    float _142 = _122 * _136;
    float _144 = _126 * _136;
    float _146 = _140;
    float _148 = _132;
    float _150 = _142;
    float _152 = _128;
    float _154 = _144;
    float _156 = _120.x;
    float _158 = _120.y;
    float _160 = _120.z;
    if (_138)
    {
        _146 = (-_140) + (-0.0);
    }
    if (_138)
    {
        _148 = (-_132) + (-0.0);
    }
    if (_138)
    {
        _150 = (-_142) + (-0.0);
    }
    if (_138)
    {
        _152 = (-_128) + (-0.0);
    }
    float _162 = _134;
    if (_138)
    {
        _162 = (-_134) + (-0.0);
    }
    if (_138)
    {
        _154 = (-_144) + (-0.0);
    }
    int _164 = floatBitsToInt(fp_c6_1._m0[25].w) + (-1);
    float _166 = (-texture(fp_tex_tcb_26, vec2(_96 + (-fp_c6_1._m0[26].w), _98 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_26, vec2(_96 + fp_c6_1._m0[26].w, _98 + fp_c6_1._m0[26].w)).x;
    float _168 = min((texture(fp_tex_tcb_26, vec2(_96, _98)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _170 = _168 * float(max(0, (-_164)));
    float _172 = _168 * float((-abs(_164)) + 1);
    float _174 = sqrt(clamp((-fma(_114, _114, _116 * _116)) + 1.0, 0.0, 1.0));
    float _176 = _168 * float(max(0, _164));
    float _178 = 1.0 / _80.w;
    float _180 = fma(_174, _150, fma(_114, _148, _116 * (fma(_146, _162, -(_154 * _152)) * _130)));
    float _182 = fma(_132 * _166, fp_c6_1._m0[27].x, _150);
    float _184 = max(_176, max(_172, _170));
    float _186 = fma(clamp(_146 + (-0.0), 0.0, 1.0), (-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, fp_c7_1._m0[20].y);
    float _188 = fma(_174, _146, fma(_114, _152, _116 * (fma(_154, _148, -(_150 * _162)) * _130)));
    float _190 = fma(_174, _154, fma(_114, _162, _116 * (fma(_150, _152, -(_146 * _148)) * _130)));
    float _192 = fma(_128 * _166, fp_c6_1._m0[27].x, _146);
    float _194 = _184 + (-fp_c7_1._m0[21].w);
    float _196 = fma(_134 * _166, fp_c6_1._m0[27].x, _154);
    float _198 = clamp(_194 + (-0.0), 0.0, 1.0);
    float _200 = inversesqrt(fma(_190, _190, fma(_188, _188, _180 * _180)));
    float _202 = inversesqrt(fma(_196, _196, fma(_192, _192, _182 * _182)));
    float _204 = clamp(((_172 + (-_184)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _206 = clamp(((_170 + (-_184)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _208 = _180 * _200;
    float _210 = _190 * _200;
    bool _212 = min(_198 * 1000.0, 1.0) > 0.5;
    float _214 = _192 * _202;
    float _216 = _196 * _202;
    float _218 = _188 * _200;
    float _220 = _182 * _202;
    float _222 = clamp(((_176 + (-_184)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _224 = fma(_222, fp_c8_1._m0[18].x, fma(_206, fp_c8_1._m0[4].x, _204 * fp_c8_1._m0[11].x));
    float _226 = fma(_222, fp_c8_1._m0[18].y, fma(_206, fp_c8_1._m0[4].y, _204 * fp_c8_1._m0[11].y));
    float _228 = fma(_222, fp_c8_1._m0[18].z, fma(_206, fp_c8_1._m0[4].z, _204 * fp_c8_1._m0[11].z));
    int _230 = floatBitsToInt(_198);
    float _232 = _208;
    float _234 = _218;
    float _236 = _210;
    int _238 = floatBitsToInt(_210);
    float _252;
    float _254;
    float _256;
    float _258;
    float _260;
    if (_212)
    {
        float _240 = clamp(_198 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _242 = fma(_228, -fp_c7_1._m0[45].y, fma(_222, fp_c8_1._m0[17].z, fma(_206, fp_c8_1._m0[3].z, _204 * fp_c8_1._m0[10].z)));
        float _244 = (-_218) + _214;
        float _246 = fma(_242, _240, _228 * fp_c7_1._m0[45].y);
        float _248 = fma(fma(_224, -fp_c7_1._m0[45].y, fma(_222, fp_c8_1._m0[17].x, fma(_206, fp_c8_1._m0[3].x, _204 * fp_c8_1._m0[10].x))), _240, _224 * fp_c7_1._m0[45].y);
        float _250 = fma(fma(_226, -fp_c7_1._m0[45].y, fma(_222, fp_c8_1._m0[17].y, fma(_206, fp_c8_1._m0[3].y, _204 * fp_c8_1._m0[10].y))), _240, _226 * fp_c7_1._m0[45].y);
        _230 = floatBitsToInt(_242);
        _106 = floatBitsToInt(_240);
        _108 = floatBitsToInt(_244);
        _252 = fp_c7_1._m0[18].w;
        _156 = _248;
        _158 = _250;
        _254 = 0.0;
        _232 = fma(_186, (-_208) + _220, _208);
        _234 = fma(_186, _244, _218);
        _236 = fma(_186, (-_210) + _216, _210);
        _160 = _246;
        _256 = _248 * fp_c7_1._m0[18].z;
        _258 = _246 * fp_c7_1._m0[18].z;
        _260 = _250 * fp_c7_1._m0[18].z;
    }
    else
    {
        _252 = max(texture(fp_tex_tcb_10, vec2(_96, _98)).x, fp_c1_1._m0[0].y);
        _254 = texture(fp_tex_tcb_12, vec2(_96, _98)).x;
        _256 = 0.0;
        _258 = 0.0;
        _260 = 0.0;
    }
    int _262 = _230;
    int _264 = _106;
    int _266 = _108;
    if (_103)
    {
        _262 = 0;
    }
    if (_103)
    {
        _238 = 0;
    }
    if (_103)
    {
        _264 = 0;
    }
    if (_103)
    {
        _266 = 0;
    }
    if (_103)
    {
        _83.x = intBitsToFloat(_262);
        _83.y = intBitsToFloat(_238);
        _83.z = intBitsToFloat(_264);
        _83.w = intBitsToFloat(_266);
        return;
    }
    float _268 = _87.x;
    float _270 = _87.y;
    float _272 = fma(_158, -_254, _158);
    float _274 = _87.z;
    float _276 = 1.0 / (_85.z * gl_FragCoord.w);
    float _278 = inversesqrt(fma(_274, _274, fma(_270, _270, _268 * _268)));
    float _280 = _268 * (-_278);
    float _282 = _270 * (-_278);
    float _284 = _274 * (-_278);
    vec2 _286 = texture(fp_tex_tcb_2A, vec2(fma(_80.x * _178, 0.5, 0.5), fma(_80.y * _178, -0.5, 0.5))).xy;
    float _288 = fma(_284, _236, fma(_282, _234, _280 * _232));
    float _290 = max(_288, fp_c1_1._m0[0].w);
    vec2 _292 = texture(fp_tex_tcb_38, vec2(_290, (-_252) + (-0.0))).xy;
    float _294 = fma(_156, -_254, _156);
    float _296 = fma(_160, -_254, _160);
    float _298 = fma(_156 + (-0.039999999105930328369140625), _254, fp_c1_1._m0[0].z);
    float _300 = fma(_158 + (-0.039999999105930328369140625), _254, fp_c1_1._m0[0].z);
    float _302 = fma(_160 + (-0.039999999105930328369140625), _254, fp_c1_1._m0[0].z);
    float _304 = clamp((-fma(max((-_286.y) + 1.0, (-_286.x) + 1.0), clamp(_89.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_85.x * gl_FragCoord.w) * _276, (_85.y * gl_FragCoord.w) * _276)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _306 = _302;
    float _308 = _290;
    float _310 = _298;
    float _312 = _300;
    float _328;
    float _330;
    float _332;
    float _334;
    float _336;
    float _338;
    float _340;
    float _342;
    float _344;
    float _346;
    if (_212)
    {
        float _314 = fma(_284, -_236, fma(_282, -_234, _280 * (-_232)));
        float _316 = fma(_314 * _232, -2.0, -_280);
        float _318 = fma(_314 * _234, -2.0, -_282);
        float _320 = fma(_314 * _236, -2.0, -_284);
        float _322 = 1.0 / max(abs(_320), max(abs(_316), abs(_318)));
        vec3 _324 = texture(fp_tex_tcb_36, vec4(_316 * _322, _318 * _322, _320 * _322, float(12)), 0.0).xyz;
        float _326 = fma(_292.x, fp_c7_1._m0[19].x, _292.y);
        _328 = fma(_234 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _330 = _232 * fp_c7_1._m0[19].z;
        _332 = _236 * fp_c7_1._m0[19].z;
        _334 = 0.0;
        _306 = fp_c7_1._m0[19].x;
        _336 = _324.z * _326;
        _338 = 0.0;
        _310 = fp_c7_1._m0[19].x;
        _312 = fp_c7_1._m0[19].x;
        _340 = 0.0;
        _342 = _324.x * _326;
        _344 = _324.y * _326;
        _346 = 1.0;
    }
    else
    {
        float _348 = max(_288, fp_c1_1._m0[0].w);
        vec2 _350 = texture(fp_tex_tcb_38, vec2(_348, (-_252) + (-0.0))).xy;
        float _352 = _350.x;
        float _354 = _350.y;
        float _356 = fma(_284, -_236, fma(_282, -_234, _280 * (-_232)));
        float _358 = fma(_356 * _232, -2.0, -_280);
        float _360 = fma(_356 * _234, -2.0, -_282);
        float _362 = fma(_356 * _236, -2.0, -_284);
        float _364 = 1.0 / max(abs(_362), max(abs(_358), abs(_360)));
        vec3 _366 = texture(fp_tex_tcb_36, vec4(_358 * _364, _360 * _364, _362 * _364, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_252 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _368 = _89.y;
        float _370 = fma(fma(_216, -fp_c5_1._m0[23].z, fma(_214, -fp_c5_1._m0[23].y, _220 * (-fp_c5_1._m0[23].x))), -_234, _234);
        float _372 = _368 + (-fp_c9_1._m0[32].w);
        float _374 = _372;
        _308 = _348;
        _346 = clamp(fma(_370, clamp(_194 * (-7.0), 0.0, 1.0), -_370) + fp_c1_1._m0[1].y, 0.0, 1.0);
        if (_368 < fp_c9_1._m0[32].w)
        {
            _374 = _372 * (-5.0);
        }
        float _376 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w) * max(0.0, ((-_234) + 1.2000000476837158203125) * (clamp(fma(_374, -(1.0 / fma(clamp((-_234) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_374, -(1.0 / fma(clamp((-_234) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0)));
        _328 = _234;
        _330 = _232;
        _332 = _236;
        _334 = _376 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _336 = fma(_302, _352, _354) * _366.z;
        _338 = _376 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _340 = _376 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _342 = fma(_298, _352, _354) * _366.x;
        _344 = fma(_300, _352, _354) * _366.y;
    }
    float _378 = _328 * _330;
    float _380 = _89.z;
    float _382 = _89.x;
    float _384 = _332 * _328;
    float _386 = _280 + (-fp_c5_1._m0[23].x);
    float _388 = fma(_330, _330, -(_328 * _328));
    float _390 = _332 * _330;
    float _392 = _332 * _332;
    float _394 = _282 + (-fp_c5_1._m0[23].y);
    float _396 = _284 + (-fp_c5_1._m0[23].z);
    float _398 = fma(_252, 0.5, 0.5);
    float _400 = _252 * _252;
    float _402 = inversesqrt(fma(_396, _396, fma(_394, _394, _386 * _386)));
    float _404 = _394 * _402;
    float _406 = _386 * _402;
    float _408 = _396 * _402;
    int _410 = max(0, min(int(trunc((_380 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _412 = max(fma(_408, _236, fma(_404, _234, _406 * _232)), fp_c1_1._m0[0].w) * max(fma(_408, _236, fma(_404, _234, _406 * _232)), fp_c1_1._m0[0].w);
    uint _415 = uint(int(uint((((int(uint(_410) >> uint(16)) * 20) << 16) + (((_410 & 65535) * 20) + max(0, min(int(trunc((_382 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _417 = fp_c10_1._m0[int(uint(int(_415)) >> uint(2))][int(_415) & 3];
    float _419 = max(fma(_284, _408, fma(_282, _404, _280 * _406)), fp_c1_1._m0[0].w);
    float _421 = (_398 * 0.5) * _398;
    float _423 = 1.0 / (_421 + fma(_308, -_421, _308));
    float _425 = exp2(_419 * fma(_419, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _427 = fma(max(0.0, fma(_388, fp_c5_1._m0[31].z, (fma(_332, fp_c5_1._m0[27].z, fma(_328, fp_c5_1._m0[27].y, _330 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_390, fp_c5_1._m0[30].w, fma(_392, fp_c5_1._m0[30].z, fma(_384, fp_c5_1._m0[30].y, _378 * fp_c5_1._m0[30].x))))) + _334, fma(_296, -_306, _296), _336);
    float _429 = (_423 * (1.0 / (_421 + fma(max(fma(_236, -fp_c5_1._m0[23].z, fma(_234, -fp_c5_1._m0[23].y, _232 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_421, max(fma(_236, -fp_c5_1._m0[23].z, fma(_234, -fp_c5_1._m0[23].y, _232 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_400 * (1.0 / max(fma(_412, _400 * _400, -_412) + 1.0, fp_c1_1._m0[0].w))) * (_400 * (1.0 / max(fma(_412, _400 * _400, -_412) + 1.0, fp_c1_1._m0[0].w))));
    float _431 = fma(max(0.0, fma(_388, fp_c5_1._m0[31].x, (fma(_332, fp_c5_1._m0[25].z, fma(_328, fp_c5_1._m0[25].y, _330 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_390, fp_c5_1._m0[28].w, fma(_392, fp_c5_1._m0[28].z, fma(_384, fp_c5_1._m0[28].y, _378 * fp_c5_1._m0[28].x))))) + _338, fma(_294, -_310, _294), _342);
    float _433 = fma(max(0.0, fma(_388, fp_c5_1._m0[31].y, (fma(_332, fp_c5_1._m0[26].z, fma(_328, fp_c5_1._m0[26].y, _330 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_390, fp_c5_1._m0[29].w, fma(_392, fp_c5_1._m0[29].z, fma(_384, fp_c5_1._m0[29].y, _378 * fp_c5_1._m0[29].x))))) + _340, fma(_272, -_312, _272), _344);
    int _435 = floatBitsToInt(_417);
    float _437 = _433;
    float _439 = _427;
    float _441 = _431;
    float _443 = _431;
    float _445 = _427;
    float _447 = _433;
    if (floatBitsToInt(_417) != (-1))
    {
        int _449 = 0;
        float _453;
        float _455;
        float _457;
        int _541;
        do
        {
            int _451 = _435 & 255;
            _453 = _441;
            _455 = _437;
            _457 = _439;
            _459 = uint(_451) >= 30u;
            if (_459)
            {
                break;
            }
            int _461 = _451 << 4;
            uint _463 = uint(int(uint(_461 + 7360) >> uint(2)));
            int _465 = int(_463) + 1;
            uint _467 = uint(int(uint(_461 + 7368) >> uint(2)));
            float _469 = (-_382) + fp_c10_1._m0[int(uint(int(_463)) >> uint(2))][int(_463) & 3];
            float _471 = (-_89.y) + fp_c10_1._m0[int(uint(_465) >> uint(2))][_465 & 3];
            float _473 = (-_380) + fp_c10_1._m0[int(uint(int(_467)) >> uint(2))][int(_467) & 3];
            float _475 = fma(_473, _473, fma(_471, _471, _469 * _469));
            float _477 = _469 * inversesqrt(_475);
            float _479 = _471 * inversesqrt(_475);
            float _481 = _473 * inversesqrt(_475);
            float _483 = _280 + _477;
            float _485 = _282 + _479;
            float _487 = _284 + _481;
            float _489 = inversesqrt(fma(_487, _487, fma(_485, _485, _483 * _483)));
            float _491 = _483 * _489;
            float _493 = _485 * _489;
            float _495 = _487 * _489;
            float _497 = fma(_481, _236, fma(_479, _234, _477 * _232));
            float _499 = max(fma(_284, _495, fma(_282, _493, _280 * _491)), fp_c1_1._m0[0].w);
            float _501 = max(_497, fp_c1_1._m0[0].w);
            float _503 = max(fma(_495, _236, fma(_493, _234, _491 * _232)), fp_c1_1._m0[0].w) * max(fma(_495, _236, fma(_493, _234, _491 * _232)), fp_c1_1._m0[0].w);
            uint _505 = uint(int(uint(_461 + 6880) >> uint(2)));
            int _507 = int(_505) + 1;
            uint _509 = uint(int(uint(_461 + 8320) >> uint(2)));
            float _511 = 1.0 / max(fma(_400 * _400, _503, -_503) + 1.0, fp_c1_1._m0[0].w);
            float _513 = exp2(_499 * fma(_499, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _515 = (_423 * (1.0 / (_421 + fma(_421, -_501, _501)))) * ((_400 * _511) * (_400 * _511));
            bool _517 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_509)) >> uint(2))][int(_509) & 3]) != 0;
            uint _519 = uint(int(uint(_461 + 6408) >> uint(2)));
            uint _521 = uint(int(uint(_461 + 6400) >> uint(2)));
            int _523 = int(_521) + 1;
            float _525 = _511;
            if (!_517)
            {
                _525 = 1.0;
            }
            float _527 = _525;
            if (_517)
            {
                uint _529 = uint(int(uint(_461 + 7840) >> uint(2)));
                int _531 = int(_529) + 1;
                uint _533 = uint(int(uint(_461 + 7848) >> uint(2)));
                uint _535 = uint(int(uint(_461 + 6888) >> uint(2)));
                float _537 = fp_c10_1._m0[int(uint(int(_535)) >> uint(2))][int(_535) & 3];
                int _539 = int(_535) + 1;
                _527 = exp2(fp_c10_1._m0[int(uint(_539) >> uint(2))][_539 & 3] * log2(clamp(((-_537) + fma(_481, -fp_c10_1._m0[int(uint(int(_533)) >> uint(2))][int(_533) & 3], fma(_479, -fp_c10_1._m0[int(uint(_531) >> uint(2))][_531 & 3], _477 * (-fp_c10_1._m0[int(uint(int(_529)) >> uint(2))][int(_529) & 3])))) * (1.0 / ((-_537) + 1.0)), 0.0, 1.0)));
            }
            _541 = _449 + 1;
            float _543 = (exp2(fp_c10_1._m0[int(uint(_507) >> uint(2))][_507 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_505)) >> uint(2))][int(_505) & 3], -sqrt(_475), fp_c1_1._m0[1].x), 0.0, 1.0))) * _527) * clamp(_497 + (-0.0), 0.0, 1.0);
            float _545 = fma(fp_c10_1._m0[int(uint(_523) >> uint(2))][_523 & 3] * _543, fma(_272, fp_c1_1._m0[2].x, ((fma(_513, -_312, _513) + _312) * _515) * 0.079577468335628509521484375), _437);
            float _547 = fma(fp_c10_1._m0[int(uint(int(_519)) >> uint(2))][int(_519) & 3] * _543, fma(_296, fp_c1_1._m0[2].x, ((fma(_513, -_306, _513) + _306) * _515) * 0.079577468335628509521484375), _439);
            float _549 = fma(fp_c10_1._m0[int(uint(int(_521)) >> uint(2))][int(_521) & 3] * _543, fma(_294, fp_c1_1._m0[2].x, ((fma(_513, -_310, _513) + _310) * _515) * 0.079577468335628509521484375), _441);
            _435 = int(uint(_435) >> uint(8));
            _449 = _541;
            _437 = _545;
            _439 = _547;
            _441 = _549;
            _453 = _549;
            _455 = _545;
            _457 = _547;
        } while (!(_541 >= 4));
        _459 = false;
        _443 = _453;
        _445 = _457;
        _447 = _455;
        if ((_435 & 255) == 30)
        {
            float _551 = 1.0 / fp_c10_1._m0[561].y;
            float _553 = _380 + (-fp_c10_1._m0[557].z);
            float _555 = _553 * fp_c10_1._m0[558].x;
            float _557 = _382 + (-fp_c10_1._m0[557].x);
            float _559 = (-_382) + fma(_551, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _561 = (-_380) + fma(_551, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _563 = _557 * fp_c10_1._m0[558].z;
            float _565 = _559 * _559;
            float _567 = ((-float(_555 < _563)) + float(_555 > _563)) * fp_c10_1._m0[561].y;
            float _569 = sqrt(fma(_561, _561, _565)) * (-fp_c10_1._m0[558].y);
            float _571 = fma(_553, _553, _557 * _557);
            float _573 = inversesqrt(fma(_561, _561, fma(_569, _569, _565)));
            float _575 = _89.y;
            float _577 = _559 * _573;
            float _579 = _561 * _573;
            float _581 = fma(_553, fp_c10_1._m0[558].z, _557 * fp_c10_1._m0[558].x);
            float _583 = _569 * _573;
            float _585 = _280 + _577;
            float _587 = inversesqrt(fma(_579, _579, _577 * _577));
            bool _589 = fma(_553 * inversesqrt(_571), fp_c10_1._m0[558].z, (_557 * inversesqrt(_571)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _591 = _282 + _583;
            float _593 = fma(_579, _236, fma(_583, _234, _577 * _232));
            float _595 = _284 + _579;
            float _597 = inversesqrt(fma(_595, _595, fma(_591, _591, _585 * _585)));
            float _599 = 1.0 / (fma(_380, fp_c10_1._m0[565].z, fma(_575, fp_c10_1._m0[565].y, _382 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _601 = _595 * _597;
            float _603 = _585 * _597;
            float _605 = _591 * _597;
            bool _607 = _581 > 0.0;
            float _609 = (_577 * _587) * (-fp_c10_1._m0[558].x);
            float _611 = _609;
            float _613 = _601;
            if (_607)
            {
                _611 = sqrt(_571);
            }
            float _615 = _611;
            if (!_607)
            {
                _615 = 1.0;
            }
            float _617 = max(_593, fp_c1_1._m0[0].w);
            float _619 = max(fma(_601, _236, fma(_605, _234, _603 * _232)), fp_c1_1._m0[0].w) * max(fma(_601, _236, fma(_605, _234, _603 * _232)), fp_c1_1._m0[0].w);
            float _621 = clamp(fma(_581 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_581 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _623 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_557, fma(_567, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_553 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_567 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_557, fma(_567, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_553 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_567 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _625 = max(fma(_284, _601, fma(_282, _605, _280 * _603)), fp_c1_1._m0[0].w);
            if (!_589)
            {
                _613 = 1.0;
            }
            float _627 = _613;
            if (_589)
            {
                _627 = fma(_623, -_623, fp_c1_1._m0[1].x) * fma(_623, -_623, fp_c1_1._m0[1].x);
            }
            float _629 = exp2(_625 * fma(_625, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _631 = clamp(_593 + (-0.0), 0.0, 1.0) * (min(fma(_621, -_621, fp_c1_1._m0[1].x) * fma(_621, -_621, fp_c1_1._m0[1].x), _627) * (exp2(log2(clamp(fma(_615, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_579 * _587, -fp_c10_1._m0[558].z, _609) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _633 = (_423 * (1.0 / (_421 + fma(_421, -_617, _617)))) * ((_400 * (1.0 / max(fma(_400 * _400, _619, -_619) + 1.0, fp_c1_1._m0[0].w))) * (_400 * (1.0 / max(fma(_400 * _400, _619, -_619) + 1.0, fp_c1_1._m0[0].w))));
            float _635 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_380, fp_c10_1._m0[562].z, fma(_575, fp_c10_1._m0[562].y, _382 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _599, 0.5, 0.5), (-fma((fma(_380, fp_c10_1._m0[563].z, fma(_575, fp_c10_1._m0[563].y, _382 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _599, 0.5, 0.5)) + 1.0)).z > fma((fma(_380, fp_c10_1._m0[564].z, fma(_575, fp_c10_1._m0[564].y, _382 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _599, 0.5, 0.5)) || (_581 <= 0.0));
            _443 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _631) * fma(_294, fp_c1_1._m0[2].x, ((fma(_629, -_310, _629) + _310) * _633) * 0.079577468335628509521484375), _635, _453);
            _445 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _631) * fma(_296, fp_c1_1._m0[2].x, ((fma(_629, -_306, _629) + _306) * _633) * 0.079577468335628509521484375), _635, _457);
            _447 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _631) * fma(_272, fp_c1_1._m0[2].x, ((fma(_629, -_312, _629) + _312) * _633) * 0.079577468335628509521484375), _635, _455);
        }
    }
    float _637 = _382 + (-fp_c3_1._m0[11].w);
    float _639 = _89.y;
    float _641 = _380 + (-fp_c3_1._m0[13].w);
    float _643 = clamp(fma(_236, -fp_c5_1._m0[23].z, fma(_234, -fp_c5_1._m0[23].y, _232 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _645 = _639 + (-fp_c3_1._m0[12].w);
    float _647 = fma(_641, _641, fma(_645, _645, _637 * _637));
    float _649 = fma(_304, ((_643 * fp_c5_1._m0[5].x) * fma((fma(_425, -_310, _425) + _310) * _429, fp_c1_1._m0[1].w, _294 * 0.3183098733425140380859375)) * _346, _443) + _256;
    float _651 = fma(_304, ((_643 * fp_c5_1._m0[5].z) * fma((fma(_425, -_306, _425) + _306) * _429, fp_c1_1._m0[1].w, _296 * 0.3183098733425140380859375)) * _346, _445) + _258;
    float _653 = clamp(fma(_304, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _655 = clamp(fma(fma(_380, fp_c5_1._m0[14].z, fma(_639, fp_c5_1._m0[14].y, _382 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _657 = exp2(log2(clamp(sqrt(_647) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_641 * inversesqrt(_647), fp_c5_1._m0[23].z, fma(_645 * inversesqrt(_647), fp_c5_1._m0[23].y, (_637 * inversesqrt(_647)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _659 = fma(_304, ((_643 * fp_c5_1._m0[5].y) * fma((fma(_425, -_312, _425) + _312) * _429, fp_c1_1._m0[1].w, _272 * 0.3183098733425140380859375)) * _346, _447) + _260;
    float _661 = fma((-_649) + fp_c5_1._m0[13].x, _655, _649);
    float _663 = fma((-_651) + fp_c5_1._m0[13].z, _655, _651);
    float _665 = fma((-_659) + fp_c5_1._m0[13].y, _655, _659);
    float _667 = clamp((-exp2((clamp(fma(sqrt(_647), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_661) + fma(fma((_657 * fp_c7_1._m0[55].x) * _653, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _667, _661);
    _83.y = fma((-_665) + fma(fma((_657 * fp_c7_1._m0[55].y) * _653, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _667, _665);
    _83.z = fma((-_663) + fma(fma((_657 * fp_c7_1._m0[55].z) * _653, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _667, _663);
    _83.w = clamp(_100 + (-0.0), 0.0, 1.0);
}


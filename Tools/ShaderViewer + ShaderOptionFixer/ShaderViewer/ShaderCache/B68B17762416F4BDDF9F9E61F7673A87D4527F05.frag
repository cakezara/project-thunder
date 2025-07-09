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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_22;
layout(binding = 4) uniform sampler2D fp_tex_tcb_24;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_3C;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _68;
layout(location = 6) in vec4 _70;
layout(location = 5) in vec4 _72;
layout(location = 1) in vec4 _74;
layout(location = 8) in vec4 _76;
layout(location = 4) in vec4 _78;
layout(location = 0) out vec4 _81;
layout(location = 7) in vec4 _83;
layout(location = 3) in vec4 _85;
layout(location = 9) in vec4 _87;
layout(location = 2) in vec4 _89;
uint _6[12];

void main()
{
    bool _467 = false;
    float _96 = _68.x;
    float _98 = _68.y;
    float _100 = texture(fp_tex_tcb_8, vec2(_96, _98)).x;
    bool _104 = _70.w < 0.0;
    float _106 = _72.y;
    float _108 = _72.x;
    if (_104)
    {
        _106 = _72.w;
    }
    if (_104)
    {
        _108 = _72.z;
    }
    float _110 = (-_106) + 1.0;
    bool _112 = _100 <= 0.0;
    if (_112)
    {
        discard;
    }
    vec3 _116 = texture(fp_tex_tcb_3C, vec2(_108, _110)).xyz;
    float _118 = _116.x;
    float _120 = _116.y;
    float _122 = _116.z;
    vec3 _124 = texture(fp_tex_tcb_3C, vec2(_108, fma(fp_c7_1._m0[20].z, fp_c7_1._m0[22].w, _110))).xyz;
    vec3 _126 = texture(fp_tex_tcb_3C, vec2(fma(fp_c7_1._m0[20].z, fp_c7_1._m0[22].z, _108), _110)).xyz;
    vec3 _128 = texture(fp_tex_tcb_A, vec2(_96, _98)).xyz;
    float _130 = _74.x;
    float _132 = _74.y;
    float _134 = _74.z;
    float _136 = _76.z;
    float _138 = _76.y;
    float _140 = _76.x;
    float _142 = inversesqrt(fma(_134, _134, fma(_132, _132, _130 * _130)));
    float _144 = _132 * _142;
    float _146 = _134 * _142;
    float _148 = _130 * _142;
    float _150 = fma(_146, _138, -(_144 * _136));
    float _152 = fma(_144, _140, -(_148 * _138));
    float _154 = fma(_148, _136, -(_146 * _140));
    float _156 = fma(_152, _152, fma(_154, _154, _150 * _150));
    bool _158 = sqrt(_156) > fp_c1_1._m0[0].x;
    float _160 = 0.0;
    float _162 = _150;
    float _164 = _154;
    float _166 = _152;
    float _168 = _128.z;
    float _170 = _148;
    float _172 = _144;
    float _174 = _146;
    float _176 = _128.x;
    float _178 = _128.y;
    if (_158)
    {
        _160 = inversesqrt(_156);
    }
    if (_158)
    {
        _162 = _150 * _160;
    }
    if (_158)
    {
        _164 = _154 * _160;
    }
    if (_158)
    {
        _166 = _152 * _160;
    }
    float _180 = max(_122, max(_118, _120));
    float _182 = _180 + (-fp_c7_1._m0[21].w);
    float _184 = clamp(((_120 + (-_180)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _186 = clamp(((_118 + (-_180)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _188 = clamp(((_122 + (-_180)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _190 = 1.0 / _78.w;
    float _192 = fma(_122 + (-_124.z), _188, fma(_118 + (-_124.x), _186, (_120 + (-_124.y)) * _184)) * fp_c7_1._m0[18].y;
    float _194 = fma(_122 + (-_126.z), _188, fma(_118 + (-_126.x), _186, (_120 + (-_126.y)) * _184)) * fp_c7_1._m0[18].y;
    float _196 = _78.x * _190;
    float _198 = clamp(_182 + (-0.0), 0.0, 1.0);
    float _200 = _148 + fma(_140, _194, _192 * _162);
    float _202 = fma((-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, clamp(_144 + (-0.0), 0.0, 1.0), fp_c7_1._m0[20].y);
    float _204 = _144 + fma(_138, _194, _192 * _164);
    float _206 = _146 + fma(_136, _194, _192 * _166);
    float _208 = fma(_188, fp_c8_1._m0[18].y, fma(_186, fp_c8_1._m0[4].y, _184 * fp_c8_1._m0[11].y));
    bool _210 = min(_198 * 1000.0, 1.0) > 0.5;
    float _212 = inversesqrt(fma(_206, _206, fma(_204, _204, _200 * _200)));
    float _214 = fma(_188, fp_c8_1._m0[18].x, fma(_186, fp_c8_1._m0[4].x, _184 * fp_c8_1._m0[11].x));
    float _216 = fma(_188, fp_c8_1._m0[18].z, fma(_186, fp_c8_1._m0[4].z, _184 * fp_c8_1._m0[11].z));
    float _218 = _200 * _212;
    float _220 = _204 * _212;
    float _222 = _206 * _212;
    int _225 = floatBitsToInt(_188);
    int _227 = floatBitsToInt(_214);
    int _229 = floatBitsToInt(_196);
    int _231 = floatBitsToInt(_198);
    float _245;
    float _247;
    float _249;
    float _251;
    float _253;
    if (_210)
    {
        float _233 = clamp(_198 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _235 = _214 * fp_c7_1._m0[45].y;
        float _237 = (-_148) + _218;
        float _239 = fma(fma(_216, -fp_c7_1._m0[45].y, fma(_188, fp_c8_1._m0[17].z, fma(_186, fp_c8_1._m0[3].z, _184 * fp_c8_1._m0[10].z))), _233, _216 * fp_c7_1._m0[45].y);
        float _241 = fma(fma(_214, -fp_c7_1._m0[45].y, fma(_188, fp_c8_1._m0[17].x, fma(_186, fp_c8_1._m0[3].x, _184 * fp_c8_1._m0[10].x))), _233, _235);
        float _243 = fma(fma(_208, -fp_c7_1._m0[45].y, fma(_188, fp_c8_1._m0[17].y, fma(_186, fp_c8_1._m0[3].y, _184 * fp_c8_1._m0[10].y))), _233, _208 * fp_c7_1._m0[45].y);
        _225 = floatBitsToInt(_233);
        _227 = floatBitsToInt(_235);
        _229 = floatBitsToInt(_237);
        _245 = fp_c7_1._m0[18].x;
        _168 = _239;
        _247 = 0.0;
        _170 = fma(_202, _237, _148);
        _172 = fma(_202, (-_144) + _220, _144);
        _174 = fma(_202, (-_146) + _222, _146);
        _176 = _241;
        _178 = _243;
        _249 = _241 * fp_c7_1._m0[18].z;
        _251 = _243 * fp_c7_1._m0[18].z;
        _253 = _239 * fp_c7_1._m0[18].z;
    }
    else
    {
        _245 = max(texture(fp_tex_tcb_10, vec2(_96, _98)).x, fp_c1_1._m0[0].y);
        _247 = fp_c6_1._m0[9].x;
        _249 = 0.0;
        _251 = 0.0;
        _253 = 0.0;
    }
    int _255 = _225;
    int _257 = _227;
    int _259 = _229;
    if (_112)
    {
        _255 = 0;
    }
    if (_112)
    {
        _231 = 0;
    }
    if (_112)
    {
        _257 = 0;
    }
    if (_112)
    {
        _259 = 0;
    }
    if (_112)
    {
        _81.x = intBitsToFloat(_255);
        _81.y = intBitsToFloat(_231);
        _81.z = intBitsToFloat(_257);
        _81.w = intBitsToFloat(_259);
        return;
    }
    float _261 = _85.x;
    float _263 = _85.y;
    float _265 = _85.z;
    float _267 = fma(_168 + (-0.039999999105930328369140625), _247, fp_c1_1._m0[0].z);
    float _269 = 1.0 / (_83.z * gl_FragCoord.w);
    float _271 = inversesqrt(fma(_265, _265, fma(_263, _263, _261 * _261)));
    vec2 _275 = texture(fp_tex_tcb_2A, vec2(fma(_196, 0.5, 0.5), fma(_78.y * _190, -0.5, 0.5))).xy;
    vec2 _277 = texture(fp_tex_tcb_22, vec2(_87.x, _87.y)).xy;
    float _279 = _261 * (-_271);
    float _281 = _263 * (-_271);
    float _283 = _265 * (-_271);
    float _285 = fma(_283, _174, fma(_281, _172, _279 * _170));
    float _287 = max(_285, fp_c1_1._m0[0].w);
    vec4 _290 = texture(fp_tex_tcb_24, vec2(_87.z, _87.w)).xyzw;
    float _292 = _290.w;
    vec2 _294 = texture(fp_tex_tcb_38, vec2(_287, (-_245) + (-0.0))).xy;
    float _296 = _83.w;
    float _298 = fma(_247, -_176, _176);
    float _300 = fma(_176 + (-0.039999999105930328369140625), _247, fp_c1_1._m0[0].z);
    float _302 = fma(_247, -_178, _178);
    float _304 = fma(_247, -_168, _168);
    float _306 = clamp(clamp(fma(_277.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0) * _296, 0.0, 1.0);
    float _308 = clamp((-_306) + 1.0, 0.0, 1.0);
    float _310 = fma(_178 + (-0.039999999105930328369140625), _247, fp_c1_1._m0[0].z);
    float _312 = clamp((-fma(_306, fp_c7_1._m0[37].w, clamp(clamp(fma(_277.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0) * _296, 0.0, 1.0) + fma(max((-_275.x) + 1.0, (-_275.y) + 1.0), clamp(_89.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_83.x * gl_FragCoord.w) * _269, (_83.y * gl_FragCoord.w) * _269)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _314 = _287;
    float _316 = _300;
    float _318 = _310;
    float _320 = _267;
    float _336;
    float _338;
    float _340;
    float _342;
    float _344;
    float _346;
    float _348;
    if (_210)
    {
        float _322 = fma(_283, -_174, fma(_281, -_172, _279 * (-_170)));
        float _324 = fma(_322 * _170, -2.0, -_279);
        float _326 = fma(_322 * _172, -2.0, -_281);
        float _328 = fma(_322 * _174, -2.0, -_283);
        float _330 = 1.0 / max(abs(_328), max(abs(_324), abs(_326)));
        vec3 _332 = texture(fp_tex_tcb_36, vec4(_324 * _330, _326 * _330, _328 * _330, float(12)), 0.0).xyz;
        float _334 = fma(_294.x, fp_c7_1._m0[19].x, _294.y);
        _336 = _174 * fp_c7_1._m0[19].z;
        _338 = fma(_172 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _340 = _170 * fp_c7_1._m0[19].z;
        _316 = fp_c7_1._m0[19].x;
        _318 = fp_c7_1._m0[19].x;
        _320 = fp_c7_1._m0[19].x;
        _342 = _332.x * _334;
        _344 = _332.y * _334;
        _346 = _332.z * _334;
        _348 = 1.0;
    }
    else
    {
        float _350 = max(_285, fp_c1_1._m0[0].w);
        float _352 = fma(_283, -_174, fma(_281, -_172, _279 * (-_170)));
        float _354 = fma(_352 * _170, -2.0, -_279);
        float _356 = fma(_352 * _172, -2.0, -_281);
        float _358 = fma(_352 * _174, -2.0, -_283);
        float _360 = 1.0 / max(abs(_358), max(abs(_354), abs(_356)));
        vec2 _362 = texture(fp_tex_tcb_38, vec2(_350, (-_245) + (-0.0))).xy;
        float _364 = _362.x;
        float _366 = _362.y;
        vec3 _368 = texture(fp_tex_tcb_36, vec4(_354 * _360, _356 * _360, _358 * _360, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_245 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _370 = fma(fma(_222, -fp_c5_1._m0[23].z, fma(_220, -fp_c5_1._m0[23].y, _218 * (-fp_c5_1._m0[23].x))), -_172, _172);
        _336 = _174;
        _338 = _172;
        _340 = _170;
        _314 = _350;
        _342 = _368.x * fma(_300, _364, _366);
        _344 = _368.y * fma(_310, _364, _366);
        _346 = _368.z * fma(_267, _364, _366);
        _348 = clamp(fma(_370, clamp(_182 * (-7.0), 0.0, 1.0), -_370) + fp_c1_1._m0[1].x, 0.0, 1.0);
    }
    float _372 = _279 + (-fp_c5_1._m0[23].x);
    float _374 = _89.x;
    float _376 = _281 + (-fp_c5_1._m0[23].y);
    float _378 = _89.z;
    float _380 = _283 + (-fp_c5_1._m0[23].z);
    float _382 = max(fma(_174, -fp_c5_1._m0[23].z, fma(_172, -fp_c5_1._m0[23].y, _170 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w);
    float _384 = inversesqrt(fma(_380, _380, fma(_376, _376, _372 * _372)));
    float _386 = _336 * _336;
    float _388 = _376 * _384;
    float _390 = _336 * _338;
    float _392 = _372 * _384;
    float _394 = _380 * _384;
    float _396 = _338 * _340;
    int _398 = max(0, min(int(trunc((_378 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _400 = (_296 * (_290.z * _292)) * 32.0;
    float _402 = max(fma(_283, _394, fma(_281, _388, _279 * _392)), fp_c1_1._m0[0].w);
    float _404 = fma(_245, 0.5, 0.5);
    float _406 = _245 * _245;
    float _408 = _406 * _406;
    uint _411 = uint(int(uint((((int(uint(_398) >> uint(16)) * 20) << 16) + (((_398 & 65535) * 20) + max(0, min(int(trunc((_374 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _413 = fp_c10_1._m0[int(uint(int(_411)) >> uint(2))][int(_411) & 3];
    float _415 = max(fma(_394, _174, fma(_388, _172, _392 * _170)), fp_c1_1._m0[0].w) * max(fma(_394, _174, fma(_388, _172, _392 * _170)), fp_c1_1._m0[0].w);
    float _417 = (_404 * 0.5) * _404;
    float _419 = _336 * _340;
    float _421 = exp2(_402 * fma(_402, fp_c1_1._m0[1].y, -6.9831600189208984375));
    float _423 = fma(_340, _340, -(_338 * _338));
    float _425 = fma(_302, -_318, _302);
    float _427 = ((1.0 / (_417 + fma(_314, -_417, _314))) * (1.0 / (_417 + fma(_417, -_382, _382)))) * ((_406 * (1.0 / max(fma(_415, _408, -_415) + 1.0, fp_c1_1._m0[0].w))) * (_406 * (1.0 / max(fma(_415, _408, -_415) + 1.0, fp_c1_1._m0[0].w))));
    float _429 = fma(_298, -_316, _298);
    float _431 = fma(_304, -_320, _304);
    float _433 = (_296 * (_290.x * _292)) * 32.0;
    float _435 = (_296 * (_290.y * _292)) * 32.0;
    float _437 = fma(_429, _433, fma(_429, max(0.0, fma(_423, fp_c5_1._m0[31].x, (fma(_336, fp_c5_1._m0[25].z, fma(_338, fp_c5_1._m0[25].y, _340 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_419, fp_c5_1._m0[28].w, fma(_386, fp_c5_1._m0[28].z, fma(_390, fp_c5_1._m0[28].y, _396 * fp_c5_1._m0[28].x))))), _342));
    float _439 = fma(_431, _400, fma(_431, max(0.0, fma(_423, fp_c5_1._m0[31].z, (fma(_336, fp_c5_1._m0[27].z, fma(_338, fp_c5_1._m0[27].y, _340 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_419, fp_c5_1._m0[30].w, fma(_386, fp_c5_1._m0[30].z, fma(_390, fp_c5_1._m0[30].y, _396 * fp_c5_1._m0[30].x))))), _346));
    float _441 = fma(_425, _435, fma(_425, max(0.0, fma(_423, fp_c5_1._m0[31].y, (fma(_336, fp_c5_1._m0[26].z, fma(_338, fp_c5_1._m0[26].y, _340 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_419, fp_c5_1._m0[29].w, fma(_386, fp_c5_1._m0[29].z, fma(_390, fp_c5_1._m0[29].y, _396 * fp_c5_1._m0[29].x))))), _344));
    float _443 = _439;
    float _445 = _437;
    float _447 = _441;
    float _449 = _437;
    float _451 = _441;
    float _453 = _439;
    if (floatBitsToInt(_413) != (-1))
    {
        int _455 = floatBitsToInt(_413);
        int _457 = 0;
        float _461;
        float _463;
        float _465;
        int _549;
        do
        {
            int _459 = _455 & 255;
            _461 = _445;
            _463 = _447;
            _465 = _443;
            _467 = uint(_459) >= 30u;
            if (_467)
            {
                break;
            }
            int _469 = _459 << 4;
            uint _471 = uint(int(uint(_469 + 7360) >> uint(2)));
            int _473 = int(_471) + 1;
            uint _475 = uint(int(uint(_469 + 7368) >> uint(2)));
            float _477 = (-_374) + fp_c10_1._m0[int(uint(int(_471)) >> uint(2))][int(_471) & 3];
            float _479 = fp_c10_1._m0[int(uint(_473) >> uint(2))][_473 & 3] + (-_89.y);
            float _481 = (-_378) + fp_c10_1._m0[int(uint(int(_475)) >> uint(2))][int(_475) & 3];
            float _483 = fma(_481, _481, fma(_479, _479, _477 * _477));
            float _485 = _477 * inversesqrt(_483);
            float _487 = _479 * inversesqrt(_483);
            float _489 = _481 * inversesqrt(_483);
            float _491 = _279 + _485;
            float _493 = _281 + _487;
            float _495 = _283 + _489;
            uint _497 = uint(int(uint(_469 + 6880) >> uint(2)));
            int _499 = int(_497) + 1;
            float _501 = inversesqrt(fma(_495, _495, fma(_493, _493, _491 * _491)));
            float _503 = _491 * _501;
            float _505 = _493 * _501;
            float _507 = _495 * _501;
            float _509 = max(fma(_283, _507, fma(_281, _505, _279 * _503)), fp_c1_1._m0[0].w);
            float _511 = fma(_489, _174, fma(_487, _172, _485 * _170));
            float _513 = max(_511, fp_c1_1._m0[0].w);
            float _515 = max(fma(_507, _174, fma(_505, _172, _503 * _170)), fp_c1_1._m0[0].w) * max(fma(_507, _174, fma(_505, _172, _503 * _170)), fp_c1_1._m0[0].w);
            uint _517 = uint(int(uint(_469 + 8320) >> uint(2)));
            float _519 = fp_c10_1._m0[int(uint(int(_517)) >> uint(2))][int(_517) & 3];
            uint _521 = uint(int(uint(_469 + 6400) >> uint(2)));
            int _523 = int(_521) + 1;
            float _525 = exp2(_509 * fma(_509, fp_c1_1._m0[1].y, -6.9831600189208984375));
            uint _527 = uint(int(uint(_469 + 6408) >> uint(2)));
            float _529 = ((1.0 / (_417 + fma(max(_285, fp_c1_1._m0[0].w), -_417, max(_285, fp_c1_1._m0[0].w)))) * (1.0 / (_417 + fma(_417, -_513, _513)))) * ((_406 * (1.0 / max(fma(_408, _515, -_515) + 1.0, fp_c1_1._m0[0].w))) * (_406 * (1.0 / max(fma(_408, _515, -_515) + 1.0, fp_c1_1._m0[0].w))));
            bool _531 = floatBitsToInt(_519) != 0;
            float _533 = _519;
            if (!_531)
            {
                _533 = 1.0;
            }
            float _535 = _533;
            if (_531)
            {
                uint _537 = uint(int(uint(_469 + 7840) >> uint(2)));
                int _539 = int(_537) + 1;
                uint _541 = uint(int(uint(_469 + 7848) >> uint(2)));
                uint _543 = uint(int(uint(_469 + 6888) >> uint(2)));
                float _545 = fp_c10_1._m0[int(uint(int(_543)) >> uint(2))][int(_543) & 3];
                int _547 = int(_543) + 1;
                _535 = exp2(fp_c10_1._m0[int(uint(_547) >> uint(2))][_547 & 3] * log2(clamp(((-_545) + fma(_489, -fp_c10_1._m0[int(uint(int(_541)) >> uint(2))][int(_541) & 3], fma(_487, -fp_c10_1._m0[int(uint(_539) >> uint(2))][_539 & 3], _485 * (-fp_c10_1._m0[int(uint(int(_537)) >> uint(2))][int(_537) & 3])))) * (1.0 / ((-_545) + 1.0)), 0.0, 1.0)));
            }
            _549 = _457 + 1;
            float _551 = (exp2(fp_c10_1._m0[int(uint(_499) >> uint(2))][_499 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_497)) >> uint(2))][int(_497) & 3], -sqrt(_483), fp_c1_1._m0[1].w), 0.0, 1.0))) * _535) * clamp(_511 + (-0.0), 0.0, 1.0);
            float _553 = fma(fp_c10_1._m0[int(uint(int(_527)) >> uint(2))][int(_527) & 3] * _551, fma(_304, fp_c1_1._m0[2].x, ((fma(_525, -_320, _525) + _320) * _529) * 0.079577468335628509521484375), _443);
            float _555 = fma(fp_c10_1._m0[int(uint(int(_521)) >> uint(2))][int(_521) & 3] * _551, fma(_298, fp_c1_1._m0[2].x, ((fma(_525, -_316, _525) + _316) * _529) * 0.079577468335628509521484375), _445);
            float _557 = fma(fp_c10_1._m0[int(uint(_523) >> uint(2))][_523 & 3] * _551, fma(_302, fp_c1_1._m0[2].x, ((fma(_525, -_318, _525) + _318) * _529) * 0.079577468335628509521484375), _447);
            _455 = int(uint(_455) >> uint(8));
            _457 = _549;
            _443 = _553;
            _445 = _555;
            _447 = _557;
            _461 = _555;
            _463 = _557;
            _465 = _553;
        } while (!(_549 >= 4));
        _467 = false;
        _449 = _461;
        _451 = _463;
        _453 = _465;
        if ((_455 & 255) == 30)
        {
            float _559 = _89.y;
            float _561 = 1.0 / (fma(_378, fp_c10_1._m0[565].z, fma(_559, fp_c10_1._m0[565].y, _374 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _563 = 1.0 / fp_c10_1._m0[561].y;
            float _565 = _374 + (-fp_c10_1._m0[557].x);
            float _567 = _378 + (-fp_c10_1._m0[557].z);
            float _569 = _567 * fp_c10_1._m0[558].x;
            float _571 = fma(_567, _567, _565 * _565);
            float _573 = (-_374) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_563, fp_c10_1._m0[557].x);
            float _575 = (-_378) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_563, fp_c10_1._m0[557].z);
            float _577 = _565 * fp_c10_1._m0[558].z;
            float _579 = _573 * _573;
            float _581 = ((-float(_569 < _577)) + float(_569 > _577)) * fp_c10_1._m0[561].y;
            float _583 = sqrt(fma(_575, _575, _579)) * (-fp_c10_1._m0[558].y);
            float _585 = inversesqrt(fma(_575, _575, fma(_583, _583, _579)));
            float _587 = _573 * _585;
            float _589 = _583 * _585;
            float _591 = fma(_567, fp_c10_1._m0[558].z, _565 * fp_c10_1._m0[558].x);
            float _593 = _575 * _585;
            float _595 = _279 + _587;
            float _597 = _281 + _589;
            bool _599 = _591 > 0.0;
            float _601 = _571;
            if (_599)
            {
                _601 = sqrt(_571);
            }
            float _603 = _283 + _593;
            float _605 = _601;
            if (!_599)
            {
                _605 = 1.0;
            }
            float _607 = fma(_593, _174, fma(_589, _172, _587 * _170));
            float _609 = inversesqrt(fma(_593, _593, _587 * _587));
            float _611 = inversesqrt(fma(_603, _603, fma(_597, _597, _595 * _595)));
            float _613 = _595 * _611;
            float _615 = _597 * _611;
            float _617 = _603 * _611;
            float _619 = max(fma(_283, _617, fma(_281, _615, _279 * _613)), fp_c1_1._m0[0].w);
            float _621 = max(_607, fp_c1_1._m0[0].w);
            float _623 = max(fma(_617, _174, fma(_615, _172, _613 * _170)), fp_c1_1._m0[0].w) * max(fma(_617, _174, fma(_615, _172, _613 * _170)), fp_c1_1._m0[0].w);
            float _625 = clamp(fma(_591 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].w), 0.0, 1.0) * clamp(fma(_591 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].w), 0.0, 1.0);
            float _627 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_565, fma(_581, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_567 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_581 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_565, fma(_581, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_567 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_581 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _629 = exp2(_619 * fma(_619, fp_c1_1._m0[1].y, -6.9831600189208984375));
            float _631 = fma(_627, -_627, fp_c1_1._m0[1].w) * fma(_627, -_627, fp_c1_1._m0[1].w);
            if (!(fma(_567 * inversesqrt(_571), fp_c10_1._m0[558].z, (_565 * inversesqrt(_571)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z))
            {
                _631 = 1.0;
            }
            float _633 = ((1.0 / (_417 + fma(max(_285, fp_c1_1._m0[0].w), -_417, max(_285, fp_c1_1._m0[0].w)))) * (1.0 / (_417 + fma(_417, -_621, _621)))) * ((_406 * (1.0 / max(fma(_408, _623, -_623) + 1.0, fp_c1_1._m0[0].w))) * (_406 * (1.0 / max(fma(_408, _623, -_623) + 1.0, fp_c1_1._m0[0].w))));
            float _635 = (min(fma(_625, -_625, fp_c1_1._m0[1].w) * fma(_625, -_625, fp_c1_1._m0[1].w), _631) * (exp2(log2(clamp(fma(_605, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_593 * _609, -fp_c10_1._m0[558].z, (_587 * _609) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_607 + (-0.0), 0.0, 1.0);
            float _637 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_378, fp_c10_1._m0[562].z, fma(_559, fp_c10_1._m0[562].y, _374 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _561, 0.5, 0.5), (-fma((fma(_378, fp_c10_1._m0[563].z, fma(_559, fp_c10_1._m0[563].y, _374 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _561, 0.5, 0.5)) + 1.0)).z > fma((fma(_378, fp_c10_1._m0[564].z, fma(_559, fp_c10_1._m0[564].y, _374 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _561, 0.5, 0.5)) || (_591 <= 0.0));
            _449 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _635) * fma(_298, fp_c1_1._m0[2].x, (_633 * (fma(_629, -_316, _629) + _316)) * 0.079577468335628509521484375), _637, _461);
            _451 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _635) * fma(_302, fp_c1_1._m0[2].x, (_633 * (fma(_629, -_318, _629) + _318)) * 0.079577468335628509521484375), _637, _463);
            _453 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _635) * fma(_304, fp_c1_1._m0[2].x, (_633 * (fma(_629, -_320, _629) + _320)) * 0.079577468335628509521484375), _637, _465);
        }
    }
    float _639 = _374 + (-fp_c3_1._m0[11].w);
    float _641 = _89.y;
    float _643 = _378 + (-fp_c3_1._m0[13].w);
    float _645 = _641 + (-fp_c3_1._m0[12].w);
    float _647 = fma(_643, _643, fma(_645, _645, _639 * _639));
    float _649 = clamp(fma(_174, -fp_c5_1._m0[23].z, fma(_172, -fp_c5_1._m0[23].y, _170 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _651 = clamp(fma(_308 * _312, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _653 = fma(_308, _449, _312 * ((fma((fma(_421, -_316, _421) + _316) * _427, fp_c1_1._m0[1].z, _298 * 0.3183098733425140380859375) * fma(_649, fp_c5_1._m0[5].x, _433)) * _348)) + _249;
    float _655 = exp2(log2(clamp(sqrt(_647) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_643 * inversesqrt(_647), fp_c5_1._m0[23].z, fma(_645 * inversesqrt(_647), fp_c5_1._m0[23].y, (_639 * inversesqrt(_647)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _657 = clamp(fma(fma(_378, fp_c5_1._m0[14].z, fma(_641, fp_c5_1._m0[14].y, _374 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _659 = fma(_308, _451, _312 * ((fma((fma(_421, -_318, _421) + _318) * _427, fp_c1_1._m0[1].z, _302 * 0.3183098733425140380859375) * fma(_649, fp_c5_1._m0[5].y, _435)) * _348)) + _251;
    float _661 = fma(_308, _453, _312 * ((fma((fma(_421, -_320, _421) + _320) * _427, fp_c1_1._m0[1].z, _304 * 0.3183098733425140380859375) * fma(_649, fp_c5_1._m0[5].z, _400)) * _348)) + _253;
    float _663 = fma((-_653) + fp_c5_1._m0[13].x, _657, _653);
    float _665 = fma((-_661) + fp_c5_1._m0[13].z, _657, _661);
    float _667 = fma((-_659) + fp_c5_1._m0[13].y, _657, _659);
    float _669 = clamp((-exp2((clamp(fma(sqrt(_647), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_663) + fma(fma((_655 * fp_c7_1._m0[55].x) * _651, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _669, _663);
    _81.y = fma((-_667) + fma(fma((_655 * fp_c7_1._m0[55].y) * _651, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _669, _667);
    _81.z = fma((-_665) + fma(fma((_655 * fp_c7_1._m0[55].z) * _651, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _669, _665);
    _81.w = clamp(_100 + (-0.0), 0.0, 1.0);
}


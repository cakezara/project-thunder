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

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_3C;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _66;
layout(location = 7) in vec4 _68;
layout(location = 6) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 9) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 5) in vec4 _78;
layout(location = 0) out vec4 _81;
layout(location = 8) in vec4 _83;
layout(location = 4) in vec4 _85;
layout(location = 3) in vec4 _87;
uint _6[12];

void main()
{
    bool _486 = false;
    float _94 = _66.x;
    float _96 = _66.y;
    float _98 = texture(fp_tex_tcb_8, vec2(_94, _96)).x;
    bool _102 = _68.w < 0.0;
    float _104 = _70.y;
    float _106 = _70.x;
    if (_102)
    {
        _104 = _70.w;
    }
    if (_102)
    {
        _106 = _70.z;
    }
    float _108 = (-_104) + 1.0;
    bool _110 = _98 <= 0.0;
    if (_110)
    {
        discard;
    }
    vec3 _114 = texture(fp_tex_tcb_3C, vec2(_106, _108)).xyz;
    float _116 = _114.x;
    float _118 = _114.y;
    float _120 = _114.z;
    vec2 _124 = texture(fp_tex_tcb_E, vec2(_94, _96)).xy;
    float _126 = _124.x;
    float _128 = _124.y;
    vec3 _130 = texture(fp_tex_tcb_3C, vec2(_106, fma(fp_c7_1._m0[20].z, fp_c7_1._m0[22].w, _108))).xyz;
    vec3 _132 = texture(fp_tex_tcb_3C, vec2(fma(fp_c7_1._m0[20].z, fp_c7_1._m0[22].z, _106), _108)).xyz;
    vec3 _134 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _136 = _72.x;
    float _138 = _72.y;
    float _140 = _72.z;
    float _142 = _74.z;
    float _144 = _74.y;
    float _146 = _76.x;
    float _148 = _76.y;
    float _150 = _76.w;
    float _152 = _74.x;
    float _154 = inversesqrt(fma(_140, _140, fma(_138, _138, _136 * _136)));
    float _156 = _138 * _154;
    float _158 = _140 * _154;
    float _160 = _136 * _154;
    float _162 = _76.z;
    float _164 = _156 * _142;
    float _166 = fma(_158, _144, -_164);
    float _168 = fma(_160, _142, -(_158 * _152));
    float _170 = fma(_156, _152, -(_160 * _144));
    float _172 = _158 * _148;
    float _174 = fma(_170, _170, fma(_168, _168, _166 * _166));
    bool _176 = sqrt(_174) > fp_c1_1._m0[0].x;
    float _178 = _160 * _162;
    float _180 = 0.0;
    float _182 = _178;
    float _184 = _164;
    float _186 = _172;
    float _188 = _134.x;
    float _190 = _134.y;
    float _192 = _134.z;
    if (_176)
    {
        _180 = inversesqrt(_174);
    }
    if (!_176)
    {
        _182 = _166;
    }
    float _194 = _182;
    if (!_176)
    {
        _184 = _170;
    }
    float _196 = _184;
    if (!_176)
    {
        _186 = _168;
    }
    float _198 = _186;
    if (_176)
    {
        _194 = _166 * _180;
    }
    if (_176)
    {
        _196 = _170 * _180;
    }
    if (_176)
    {
        _198 = _168 * _180;
    }
    float _200 = max(_120, max(_116, _118));
    float _202 = clamp(((_118 + (-_200)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _204 = sqrt(clamp((-fma(_126, _126, _128 * _128)) + 1.0, 0.0, 1.0));
    float _206 = clamp(((_116 + (-_200)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _208 = 1.0 / _78.w;
    float _210 = clamp(((_120 + (-_200)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _212 = fma(_160, _204, fma(_126, _146, _128 * (fma(_156, _162, -_172) * _150)));
    float _214 = fma(_156, _204, fma(_126, _148, _128 * (fma(_158, _146, -_178) * _150)));
    float _216 = fma(_158, _204, fma(_126, _162, _128 * (fma(_160, _148, -(_156 * _146)) * _150)));
    float _218 = fma(_120 + (-_130.z), _210, fma(_116 + (-_130.x), _206, (_118 + (-_130.y)) * _202)) * fp_c7_1._m0[18].y;
    float _220 = fma(_120 + (-_132.z), _210, fma(_116 + (-_132.x), _206, (_118 + (-_132.y)) * _202)) * fp_c7_1._m0[18].y;
    float _222 = _78.y * _208;
    float _224 = inversesqrt(fma(_216, _216, fma(_214, _214, _212 * _212)));
    float _226 = _200 + (-fp_c7_1._m0[21].w);
    float _228 = _160 + fma(_152, _220, _218 * _194);
    float _230 = clamp(_226 + (-0.0), 0.0, 1.0);
    float _232 = fma((-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, clamp(_156 + (-0.0), 0.0, 1.0), fp_c7_1._m0[20].y);
    float _234 = _156 + fma(_144, _220, _218 * _198);
    float _236 = _212 * _224;
    float _238 = _158 + fma(_142, _220, _218 * _196);
    float _240 = _214 * _224;
    float _242 = _216 * _224;
    bool _244 = min(_230 * 1000.0, 1.0) > 0.5;
    float _246 = inversesqrt(fma(_238, _238, fma(_234, _234, _228 * _228)));
    float _248 = fma(_210, fp_c8_1._m0[17].x, fma(_206, fp_c8_1._m0[3].x, _202 * fp_c8_1._m0[10].x));
    float _250 = fma(_210, fp_c8_1._m0[18].x, fma(_206, fp_c8_1._m0[4].x, _202 * fp_c8_1._m0[11].x));
    float _252 = fma(_210, fp_c8_1._m0[18].y, fma(_206, fp_c8_1._m0[4].y, _202 * fp_c8_1._m0[11].y));
    float _254 = fma(_210, fp_c8_1._m0[18].z, fma(_206, fp_c8_1._m0[4].z, _202 * fp_c8_1._m0[11].z));
    float _256 = _228 * _246;
    float _258 = _234 * _246;
    float _260 = _238 * _246;
    int _263 = floatBitsToInt(_254);
    int _265 = floatBitsToInt(_248);
    int _267 = floatBitsToInt(_222);
    float _269 = _236;
    float _271 = _240;
    float _273 = _242;
    int _275 = floatBitsToInt(_232);
    float _291;
    float _293;
    float _295;
    float _297;
    float _299;
    if (_244)
    {
        float _277 = fma(_250, -fp_c7_1._m0[45].y, _248);
        float _279 = _254 * fp_c7_1._m0[45].y;
        float _281 = clamp(_230 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _283 = (-_240) + _258;
        float _285 = fma(fma(_254, -fp_c7_1._m0[45].y, fma(_210, fp_c8_1._m0[17].z, fma(_206, fp_c8_1._m0[3].z, _202 * fp_c8_1._m0[10].z))), _281, _279);
        float _287 = fma(_277, _281, _250 * fp_c7_1._m0[45].y);
        float _289 = fma(fma(_252, -fp_c7_1._m0[45].y, fma(_210, fp_c8_1._m0[17].y, fma(_206, fp_c8_1._m0[3].y, _202 * fp_c8_1._m0[10].y))), _281, _252 * fp_c7_1._m0[45].y);
        _263 = floatBitsToInt(_279);
        _265 = floatBitsToInt(_277);
        _267 = floatBitsToInt(_283);
        _291 = fp_c7_1._m0[18].x;
        _188 = _287;
        _293 = 0.0;
        _269 = fma(_232, (-_236) + _256, _236);
        _190 = _289;
        _271 = fma(_232, _283, _240);
        _273 = fma(_232, (-_242) + _260, _242);
        _192 = _285;
        _295 = _287 * fp_c7_1._m0[18].z;
        _297 = _289 * fp_c7_1._m0[18].z;
        _299 = _285 * fp_c7_1._m0[18].z;
    }
    else
    {
        _291 = max(texture(fp_tex_tcb_10, vec2(_94, _96)).x, fp_c1_1._m0[0].y);
        _293 = texture(fp_tex_tcb_12, vec2(_94, _96)).x;
        _295 = 0.0;
        _297 = 0.0;
        _299 = 0.0;
    }
    int _301 = _263;
    int _303 = _265;
    int _305 = _267;
    if (_110)
    {
        _301 = 0;
    }
    if (_110)
    {
        _303 = 0;
    }
    if (_110)
    {
        _275 = 0;
    }
    if (_110)
    {
        _305 = 0;
    }
    if (_110)
    {
        _81.x = intBitsToFloat(_301);
        _81.y = intBitsToFloat(_303);
        _81.z = intBitsToFloat(_275);
        _81.w = intBitsToFloat(_305);
        return;
    }
    float _307 = fma(_293, -_188, _188);
    float _309 = _85.x;
    float _311 = _85.y;
    float _313 = _85.z;
    float _315 = 1.0 / (_83.z * gl_FragCoord.w);
    vec2 _317 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _208, 0.5, 0.5), fma(_222, -0.5, 0.5))).xy;
    float _319 = fma(_293, -_190, _190);
    float _321 = fma(_188 + (-0.039999999105930328369140625), _293, fp_c1_1._m0[0].z);
    float _323 = inversesqrt(fma(_313, _313, fma(_311, _311, _309 * _309)));
    float _325 = _309 * (-_323);
    float _327 = _311 * (-_323);
    float _329 = _313 * (-_323);
    float _331 = fma(_329, _273, fma(_327, _271, _325 * _269));
    float _333 = max(_331, fp_c1_1._m0[0].w);
    vec2 _335 = texture(fp_tex_tcb_38, vec2(_333, (-_291) + (-0.0))).xy;
    float _337 = fma(_293, -_192, _192);
    float _339 = fma(_190 + (-0.039999999105930328369140625), _293, fp_c1_1._m0[0].z);
    float _341 = fma(_192 + (-0.039999999105930328369140625), _293, fp_c1_1._m0[0].z);
    float _343 = clamp((-fma(max((-_317.x) + 1.0, (-_317.y) + 1.0), clamp(_87.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_83.x * gl_FragCoord.w) * _315, (_83.y * gl_FragCoord.w) * _315)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _345 = _333;
    float _347 = _321;
    float _349 = _339;
    float _351 = _341;
    float _367;
    float _369;
    float _371;
    float _373;
    float _375;
    float _377;
    float _379;
    if (_244)
    {
        float _353 = fma(_329, -_273, fma(_327, -_271, _325 * (-_269)));
        float _355 = fma(_353 * _269, -2.0, -_325);
        float _357 = fma(_353 * _271, -2.0, -_327);
        float _359 = fma(_353 * _273, -2.0, -_329);
        float _361 = 1.0 / max(abs(_359), max(abs(_355), abs(_357)));
        vec3 _363 = texture(fp_tex_tcb_36, vec4(_355 * _361, _357 * _361, _359 * _361, float(12)), 0.0).xyz;
        float _365 = fma(_335.x, fp_c7_1._m0[19].x, _335.y);
        _367 = _269 * fp_c7_1._m0[19].z;
        _369 = fma(_271 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _371 = _273 * fp_c7_1._m0[19].z;
        _347 = fp_c7_1._m0[19].x;
        _349 = fp_c7_1._m0[19].x;
        _351 = fp_c7_1._m0[19].x;
        _373 = _363.x * _365;
        _375 = _363.z * _365;
        _377 = _363.y * _365;
        _379 = 1.0;
    }
    else
    {
        float _381 = max(_331, fp_c1_1._m0[0].w);
        float _383 = fma(_329, -_273, fma(_327, -_271, _325 * (-_269)));
        float _385 = fma(_383 * _269, -2.0, -_325);
        float _387 = fma(_383 * _271, -2.0, -_327);
        float _389 = fma(_383 * _273, -2.0, -_329);
        float _391 = 1.0 / max(abs(_389), max(abs(_385), abs(_387)));
        vec2 _393 = texture(fp_tex_tcb_38, vec2(_381, (-_291) + (-0.0))).xy;
        float _395 = _393.x;
        float _397 = _393.y;
        vec3 _399 = texture(fp_tex_tcb_36, vec4(_385 * _391, _387 * _391, _389 * _391, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_291 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _401 = fma(fma(_260, -fp_c5_1._m0[23].z, fma(_258, -fp_c5_1._m0[23].y, _256 * (-fp_c5_1._m0[23].x))), -_271, _271);
        _367 = _269;
        _369 = _271;
        _371 = _273;
        _345 = _381;
        _373 = _399.x * fma(_321, _395, _397);
        _375 = _399.z * fma(_341, _395, _397);
        _377 = _399.y * fma(_339, _395, _397);
        _379 = clamp(fma(_401, clamp(_226 * (-7.0), 0.0, 1.0), -_401) + fp_c1_1._m0[1].x, 0.0, 1.0);
    }
    float _403 = _325 + (-fp_c5_1._m0[23].x);
    float _405 = _87.x;
    float _407 = _327 + (-fp_c5_1._m0[23].y);
    float _409 = _87.z;
    float _411 = _329 + (-fp_c5_1._m0[23].z);
    float _413 = fma(_291, 0.5, 0.5);
    float _415 = _291 * _291;
    float _417 = (_413 * 0.5) * _413;
    float _419 = inversesqrt(fma(_411, _411, fma(_407, _407, _403 * _403)));
    float _421 = _403 * _419;
    float _423 = _407 * _419;
    float _425 = _411 * _419;
    float _427 = _367 * _369;
    float _429 = _371 * _369;
    int _431 = max(0, min(int(trunc((_409 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _433 = max(fma(_329, _425, fma(_327, _423, _325 * _421)), fp_c1_1._m0[0].w);
    uint _436 = uint(int(uint((((int(uint(_431) >> uint(16)) * 20) << 16) + (((_431 & 65535) * 20) + max(0, min(int(trunc((_405 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _438 = fp_c10_1._m0[int(uint(int(_436)) >> uint(2))][int(_436) & 3];
    float _440 = max(fma(_425, _273, fma(_423, _271, _421 * _269)), fp_c1_1._m0[0].w) * max(fma(_425, _273, fma(_423, _271, _421 * _269)), fp_c1_1._m0[0].w);
    float _442 = max(fma(_273, -fp_c5_1._m0[23].z, fma(_271, -fp_c5_1._m0[23].y, _269 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w);
    float _444 = fma(_367, _367, -(_369 * _369));
    float _446 = _371 * _367;
    float _448 = _371 * _371;
    float _450 = 1.0 / (_417 + fma(_345, -_417, _345));
    float _452 = exp2(_433 * fma(_433, fp_c1_1._m0[1].y, -6.9831600189208984375));
    float _454 = (_450 * (1.0 / (_417 + fma(_417, -_442, _442)))) * ((_415 * (1.0 / max(fma(_440, _415 * _415, -_440) + 1.0, fp_c1_1._m0[0].w))) * (_415 * (1.0 / max(fma(_440, _415 * _415, -_440) + 1.0, fp_c1_1._m0[0].w))));
    float _456 = fma(max(0.0, fma(_444, fp_c5_1._m0[31].x, (fma(_371, fp_c5_1._m0[25].z, fma(_369, fp_c5_1._m0[25].y, _367 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_446, fp_c5_1._m0[28].w, fma(_448, fp_c5_1._m0[28].z, fma(_429, fp_c5_1._m0[28].y, _427 * fp_c5_1._m0[28].x))))), fma(_307, -_347, _307), _373);
    float _458 = fma(max(0.0, fma(_444, fp_c5_1._m0[31].z, (fma(_371, fp_c5_1._m0[27].z, fma(_369, fp_c5_1._m0[27].y, _367 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_446, fp_c5_1._m0[30].w, fma(_448, fp_c5_1._m0[30].z, fma(_429, fp_c5_1._m0[30].y, _427 * fp_c5_1._m0[30].x))))), fma(_337, -_351, _337), _375);
    float _460 = fma(max(0.0, fma(_444, fp_c5_1._m0[31].y, (fma(_371, fp_c5_1._m0[26].z, fma(_369, fp_c5_1._m0[26].y, _367 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_446, fp_c5_1._m0[29].w, fma(_448, fp_c5_1._m0[29].z, fma(_429, fp_c5_1._m0[29].y, _427 * fp_c5_1._m0[29].x))))), fma(_319, -_349, _319), _377);
    int _462 = floatBitsToInt(_438);
    float _464 = _456;
    float _466 = _458;
    float _468 = _460;
    float _470 = _456;
    float _472 = _460;
    float _474 = _458;
    if (floatBitsToInt(_438) != (-1))
    {
        int _476 = 0;
        float _480;
        float _482;
        float _484;
        int _568;
        do
        {
            int _478 = _462 & 255;
            _480 = _464;
            _482 = _468;
            _484 = _466;
            _486 = uint(_478) >= 30u;
            if (_486)
            {
                break;
            }
            int _488 = _478 << 4;
            uint _490 = uint(int(uint(_488 + 7360) >> uint(2)));
            int _492 = int(_490) + 1;
            uint _494 = uint(int(uint(_488 + 7368) >> uint(2)));
            float _496 = (-_405) + fp_c10_1._m0[int(uint(int(_490)) >> uint(2))][int(_490) & 3];
            float _498 = fp_c10_1._m0[int(uint(_492) >> uint(2))][_492 & 3] + (-_87.y);
            float _500 = (-_409) + fp_c10_1._m0[int(uint(int(_494)) >> uint(2))][int(_494) & 3];
            float _502 = fma(_500, _500, fma(_498, _498, _496 * _496));
            float _504 = _496 * inversesqrt(_502);
            float _506 = _498 * inversesqrt(_502);
            float _508 = _500 * inversesqrt(_502);
            float _510 = _325 + _504;
            float _512 = _327 + _506;
            float _514 = _329 + _508;
            float _516 = inversesqrt(fma(_514, _514, fma(_512, _512, _510 * _510)));
            float _518 = _510 * _516;
            float _520 = _512 * _516;
            float _522 = _514 * _516;
            float _524 = fma(_508, _273, fma(_506, _271, _504 * _269));
            float _526 = max(fma(_329, _522, fma(_327, _520, _325 * _518)), fp_c1_1._m0[0].w);
            float _528 = max(_524, fp_c1_1._m0[0].w);
            float _530 = max(fma(_522, _273, fma(_520, _271, _518 * _269)), fp_c1_1._m0[0].w) * max(fma(_522, _273, fma(_520, _271, _518 * _269)), fp_c1_1._m0[0].w);
            uint _532 = uint(int(uint(_488 + 6880) >> uint(2)));
            int _534 = int(_532) + 1;
            uint _536 = uint(int(uint(_488 + 8320) >> uint(2)));
            float _538 = exp2(_526 * fma(_526, fp_c1_1._m0[1].y, -6.9831600189208984375));
            float _540 = fma(_538, -_347, _538) + _347;
            float _542 = (_450 * (1.0 / (_417 + fma(_417, -_528, _528)))) * ((_415 * (1.0 / max(fma(_415 * _415, _530, -_530) + 1.0, fp_c1_1._m0[0].w))) * (_415 * (1.0 / max(fma(_415 * _415, _530, -_530) + 1.0, fp_c1_1._m0[0].w))));
            bool _544 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_536)) >> uint(2))][int(_536) & 3]) != 0;
            uint _546 = uint(int(uint(_488 + 6408) >> uint(2)));
            uint _548 = uint(int(uint(_488 + 6400) >> uint(2)));
            int _550 = int(_548) + 1;
            float _552 = _540;
            if (!_544)
            {
                _552 = 1.0;
            }
            float _554 = _552;
            if (_544)
            {
                uint _556 = uint(int(uint(_488 + 7840) >> uint(2)));
                int _558 = int(_556) + 1;
                uint _560 = uint(int(uint(_488 + 7848) >> uint(2)));
                uint _562 = uint(int(uint(_488 + 6888) >> uint(2)));
                float _564 = fp_c10_1._m0[int(uint(int(_562)) >> uint(2))][int(_562) & 3];
                int _566 = int(_562) + 1;
                _554 = exp2(fp_c10_1._m0[int(uint(_566) >> uint(2))][_566 & 3] * log2(clamp(((-_564) + fma(_508, -fp_c10_1._m0[int(uint(int(_560)) >> uint(2))][int(_560) & 3], fma(_506, -fp_c10_1._m0[int(uint(_558) >> uint(2))][_558 & 3], _504 * (-fp_c10_1._m0[int(uint(int(_556)) >> uint(2))][int(_556) & 3])))) * (1.0 / ((-_564) + 1.0)), 0.0, 1.0)));
            }
            _568 = _476 + 1;
            float _570 = (exp2(fp_c10_1._m0[int(uint(_534) >> uint(2))][_534 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_532)) >> uint(2))][int(_532) & 3], -sqrt(_502), fp_c1_1._m0[1].w), 0.0, 1.0))) * _554) * clamp(_524 + (-0.0), 0.0, 1.0);
            float _572 = fma(fp_c10_1._m0[int(uint(int(_548)) >> uint(2))][int(_548) & 3] * _570, fma(_307, fp_c1_1._m0[2].x, (_540 * _542) * 0.079577468335628509521484375), _464);
            float _574 = fma(fp_c10_1._m0[int(uint(int(_546)) >> uint(2))][int(_546) & 3] * _570, fma(_337, fp_c1_1._m0[2].x, ((fma(_538, -_351, _538) + _351) * _542) * 0.079577468335628509521484375), _466);
            float _576 = fma(fp_c10_1._m0[int(uint(_550) >> uint(2))][_550 & 3] * _570, fma(_319, fp_c1_1._m0[2].x, ((fma(_538, -_349, _538) + _349) * _542) * 0.079577468335628509521484375), _468);
            _462 = int(uint(_462) >> uint(8));
            _476 = _568;
            _464 = _572;
            _466 = _574;
            _468 = _576;
            _480 = _572;
            _482 = _576;
            _484 = _574;
        } while (!(_568 >= 4));
        _486 = false;
        _470 = _480;
        _472 = _482;
        _474 = _484;
        if ((_462 & 255) == 30)
        {
            float _578 = 1.0 / fp_c10_1._m0[561].y;
            float _580 = _409 + (-fp_c10_1._m0[557].z);
            float _582 = _405 + (-fp_c10_1._m0[557].x);
            float _584 = _580 * fp_c10_1._m0[558].x;
            float _586 = (-_405) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_578, fp_c10_1._m0[557].x);
            float _588 = _582 * fp_c10_1._m0[558].z;
            float _590 = (-_409) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_578, fp_c10_1._m0[557].z);
            float _592 = _586 * _586;
            float _594 = ((-float(_584 < _588)) + float(_584 > _588)) * fp_c10_1._m0[561].y;
            float _596 = sqrt(fma(_590, _590, _592)) * (-fp_c10_1._m0[558].y);
            float _598 = _87.y;
            float _600 = fma(_580, _580, _582 * _582);
            float _602 = inversesqrt(fma(_590, _590, fma(_596, _596, _592)));
            float _604 = _586 * _602;
            float _606 = _590 * _602;
            float _608 = fma(_580, fp_c10_1._m0[558].z, _582 * fp_c10_1._m0[558].x);
            float _610 = _596 * _602;
            float _612 = inversesqrt(fma(_606, _606, _604 * _604));
            float _614 = _325 + _604;
            bool _616 = fma(_580 * inversesqrt(_600), fp_c10_1._m0[558].z, (_582 * inversesqrt(_600)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _618 = _327 + _610;
            float _620 = fma(_606, _273, fma(_610, _271, _604 * _269));
            float _622 = _329 + _606;
            float _624 = _604 * _612;
            float _626 = 1.0 / (fma(_409, fp_c10_1._m0[565].z, fma(_598, fp_c10_1._m0[565].y, _405 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _628 = inversesqrt(fma(_622, _622, fma(_618, _618, _614 * _614)));
            float _630 = _614 * _628;
            float _632 = _618 * _628;
            float _634 = _622 * _628;
            bool _636 = _608 > 0.0;
            float _638 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_582, fma(_594, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_580 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_594 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_582, fma(_594, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_580 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_594 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _640 = _624;
            if (_636)
            {
                _640 = sqrt(_600);
            }
            float _642 = _640;
            if (!_636)
            {
                _642 = 1.0;
            }
            float _644 = max(_620, fp_c1_1._m0[0].w);
            float _646 = max(fma(_329, _634, fma(_327, _632, _325 * _630)), fp_c1_1._m0[0].w);
            float _648 = clamp(fma(_608 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].w), 0.0, 1.0) * clamp(fma(_608 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].w), 0.0, 1.0);
            float _650 = max(fma(_634, _273, fma(_632, _271, _630 * _269)), fp_c1_1._m0[0].w) * max(fma(_634, _273, fma(_632, _271, _630 * _269)), fp_c1_1._m0[0].w);
            float _652 = log2(clamp((fma(_606 * _612, -fp_c10_1._m0[558].z, _624 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _654 = _652;
            if (_616)
            {
                _654 = fma(_638, -_638, fp_c1_1._m0[1].w) * fma(_638, -_638, fp_c1_1._m0[1].w);
            }
            float _656 = _654;
            if (!_616)
            {
                _656 = 1.0;
            }
            float _658 = exp2(_646 * fma(_646, fp_c1_1._m0[1].y, -6.9831600189208984375));
            float _660 = (min(fma(_648, -_648, fp_c1_1._m0[1].w) * fma(_648, -_648, fp_c1_1._m0[1].w), _656) * (exp2(log2(clamp(fma(_642, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_652))) * clamp(_620 + (-0.0), 0.0, 1.0);
            float _662 = (_450 * (1.0 / (_417 + fma(_417, -_644, _644)))) * ((_415 * (1.0 / max(fma(_415 * _415, _650, -_650) + 1.0, fp_c1_1._m0[0].w))) * (_415 * (1.0 / max(fma(_415 * _415, _650, -_650) + 1.0, fp_c1_1._m0[0].w))));
            float _664 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_409, fp_c10_1._m0[562].z, fma(_598, fp_c10_1._m0[562].y, _405 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _626, 0.5, 0.5), (-fma((fma(_409, fp_c10_1._m0[563].z, fma(_598, fp_c10_1._m0[563].y, _405 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _626, 0.5, 0.5)) + 1.0)).z > fma((fma(_409, fp_c10_1._m0[564].z, fma(_598, fp_c10_1._m0[564].y, _405 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _626, 0.5, 0.5)) || (_608 <= 0.0));
            _470 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _660) * fma(_307, fp_c1_1._m0[2].x, (_662 * (fma(_658, -_347, _658) + _347)) * 0.079577468335628509521484375), _664, _480);
            _472 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _660) * fma(_319, fp_c1_1._m0[2].x, (_662 * (fma(_658, -_349, _658) + _349)) * 0.079577468335628509521484375), _664, _482);
            _474 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _660) * fma(_337, fp_c1_1._m0[2].x, (_662 * (fma(_658, -_351, _658) + _351)) * 0.079577468335628509521484375), _664, _484);
        }
    }
    float _666 = _405 + (-fp_c3_1._m0[11].w);
    float _668 = _87.y;
    float _670 = _409 + (-fp_c3_1._m0[13].w);
    float _672 = clamp(fma(_273, -fp_c5_1._m0[23].z, fma(_271, -fp_c5_1._m0[23].y, _269 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _674 = _668 + (-fp_c3_1._m0[12].w);
    float _676 = fma(_670, _670, fma(_674, _674, _666 * _666));
    float _678 = fma(_343, ((_672 * fp_c5_1._m0[5].x) * fma((fma(_452, -_347, _452) + _347) * _454, fp_c1_1._m0[1].z, _307 * 0.3183098733425140380859375)) * _379, _470) + _295;
    float _680 = clamp(fma(fma(_409, fp_c5_1._m0[14].z, fma(_668, fp_c5_1._m0[14].y, _405 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _682 = clamp(fma(_343, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _684 = fma(_343, ((_672 * fp_c5_1._m0[5].y) * fma((fma(_452, -_349, _452) + _349) * _454, fp_c1_1._m0[1].z, _319 * 0.3183098733425140380859375)) * _379, _472) + _297;
    float _686 = exp2(log2(clamp(sqrt(_676) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_670 * inversesqrt(_676), fp_c5_1._m0[23].z, fma(_674 * inversesqrt(_676), fp_c5_1._m0[23].y, (_666 * inversesqrt(_676)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _688 = fma(_343, ((_672 * fp_c5_1._m0[5].z) * fma((fma(_452, -_351, _452) + _351) * _454, fp_c1_1._m0[1].z, _337 * 0.3183098733425140380859375)) * _379, _474) + _299;
    float _690 = fma((-_678) + fp_c5_1._m0[13].x, _680, _678);
    float _692 = fma((-_684) + fp_c5_1._m0[13].y, _680, _684);
    float _694 = fma((-_688) + fp_c5_1._m0[13].z, _680, _688);
    float _696 = clamp((-exp2((clamp(fma(sqrt(_676), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_690) + fma(fma((_686 * fp_c7_1._m0[55].x) * _682, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _696, _690);
    _81.y = fma((-_692) + fma(fma((_686 * fp_c7_1._m0[55].y) * _682, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _696, _692);
    _81.z = fma((-_694) + fma(fma((_686 * fp_c7_1._m0[55].z) * _682, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _696, _694);
    _81.w = clamp(_98 + (-0.0), 0.0, 1.0);
}


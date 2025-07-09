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

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 9, std140) uniform fp_c8
{
    vec4 _m0[4096];
} fp_c8_1;

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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_14;
layout(binding = 6) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 7) uniform sampler2D fp_tex_tcb_26;
layout(binding = 8) uniform sampler2D fp_tex_tcb_28;
layout(binding = 9) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 10) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 11) uniform sampler2D fp_tex_tcb_38;
layout(binding = 12) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _74;
layout(location = 1) in vec4 _76;
layout(location = 2) in vec4 _78;
layout(location = 5) in vec4 _80;
layout(location = 7) in vec4 _82;
layout(location = 6) in vec4 _84;
layout(location = 8) in vec4 _86;
layout(location = 4) in vec4 _88;
layout(location = 3) in vec4 _90;
layout(location = 0) out vec4 _93;
uint _6[12];

void main()
{
    bool _568 = false;
    float _100 = _74.x;
    float _102 = _74.y;
    vec2 _106 = texture(fp_tex_tcb_E, vec2(_100, _102)).xy;
    float _108 = _106.x;
    float _110 = _106.y;
    vec3 _114 = texture(fp_tex_tcb_1C, vec2(_100, _102)).xyz;
    float _116 = _114.x;
    float _118 = _114.y;
    float _120 = _114.z;
    vec3 _122 = texture(fp_tex_tcb_A, vec2(_100, _102)).xyz;
    float _124 = _122.x;
    float _126 = _122.y;
    float _128 = _122.z;
    vec3 _130 = texture(fp_tex_tcb_14, vec2(_100, _102)).xyz;
    float _132 = _76.x;
    float _134 = _76.y;
    float _136 = _76.z;
    float _138 = _78.y;
    float _140 = _78.z;
    float _142 = _78.x;
    float _144 = _78.w;
    float _146 = _82.y;
    float _148 = _82.z;
    float _150 = inversesqrt(fma(_136, _136, fma(_134, _134, _132 * _132)));
    float _152 = _136 * _150;
    float _154 = _132 * _150;
    float _156 = _134 * _150;
    float _158 = _82.x;
    float _160 = sqrt(clamp((-fma(_108, _108, _110 * _110)) + 1.0, 0.0, 1.0));
    float _162 = fma((-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, clamp(_156 + (-0.0), 0.0, 1.0), fp_c7_1._m0[20].y);
    float _164 = fma(_154, _160, fma(_108, _142, _110 * (fma(_156, _140, -(_152 * _138)) * _144)));
    float _166 = fma(_156, _160, fma(_108, _138, _110 * (fma(_152, _142, -(_154 * _140)) * _144)));
    float _168 = fma(_152, _160, fma(_108, _140, _110 * (fma(_154, _138, -(_156 * _142)) * _144)));
    float _170 = 1.0 / _80.w;
    float _172 = inversesqrt(fma(_168, _168, fma(_166, _166, _164 * _164)));
    float _174 = _164 * _172;
    float _176 = _166 * _172;
    float _178 = _168 * _172;
    float _180 = _174;
    float _182 = _176;
    float _184 = _178;
    float _202;
    float _204;
    float _206;
    float _208;
    float _210;
    float _212;
    float _214;
    float _216;
    if (_146 > fp_c7_1._m0[21].y)
    {
        float _186;
        float _188;
        float _190;
        float _192;
        float _194;
        float _196;
        float _198;
        float _200;
        if (0 == floatBitsToInt(fp_c9_1._m0[10].y))
        {
            _186 = _84.x;
            _188 = (-_84.z) + (-0.0);
            _190 = fp_c9_1._m0[7].x;
            _192 = fp_c9_1._m0[7].y;
            _194 = fp_c9_1._m0[7].z;
            _196 = fp_c9_1._m0[5].x;
            _198 = fp_c9_1._m0[5].y;
            _200 = fp_c9_1._m0[5].z;
        }
        else
        {
            _186 = (-_84.z) + (-0.0);
            _188 = _84.x;
            _190 = (-0.0) + (-fp_c9_1._m0[5].x);
            _192 = (-0.0) + (-fp_c9_1._m0[5].y);
            _194 = (-0.0) + (-fp_c9_1._m0[5].z);
            _196 = (-0.0) + (-fp_c9_1._m0[7].x);
            _198 = (-0.0) + (-fp_c9_1._m0[7].y);
            _200 = (-0.0) + (-fp_c9_1._m0[7].z);
        }
        _202 = fma(_188 * fp_c9_1._m0[9].y, fp_c9_1._m0[1].w, fp_c9_1._m0[1].y);
        _204 = fma(_186 * fp_c9_1._m0[9].x, fp_c9_1._m0[1].z, fp_c9_1._m0[1].x);
        _206 = _190;
        _208 = _192;
        _210 = _194;
        _212 = _196;
        _214 = _198;
        _216 = _200;
    }
    float _298 = (-_202) + 1.0;
    vec3 _300 = texture(fp_tex_tcb_26, vec2(_204, _298)).xyz;
    float _302 = _300.x;
    float _304 = _300.y;
    float _306 = _300.z;
    vec3 _308 = texture(fp_tex_tcb_26, vec2(_204, fma(fp_c9_1._m0[8].y, fp_c7_1._m0[20].z, _298))).xyz;
    vec3 _310 = texture(fp_tex_tcb_26, vec2(fma(fp_c9_1._m0[8].x, fp_c7_1._m0[20].z, _204), _298)).xyz;
    vec3 _312 = texture(fp_tex_tcb_14, vec2(_100, _102)).xyz;
    vec2 _314 = texture(fp_tex_tcb_2A, vec2(fma(_80.x * _170, 0.5, 0.5), fma(_80.y * _170, -0.5, 0.5))).xy;
    float _316 = max(_306, max(_302, _304));
    float _318 = clamp(((_304 + (-_316)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _320 = clamp(((_302 + (-_316)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _322 = clamp(((_306 + (-_316)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _324 = fma(_306 + (-_308.z), _322, fma(_302 + (-_308.x), _320, (_304 + (-_308.y)) * _318)) * fp_c7_1._m0[18].y;
    float _326 = fma(_306 + (-_310.z), _322, fma(_302 + (-_310.x), _320, (_304 + (-_310.y)) * _318)) * fp_c7_1._m0[18].y;
    float _328 = _316 + (-fp_c7_1._m0[21].w);
    float _330 = clamp(_328 + (-0.0), 0.0, 1.0);
    float _332 = _154 + fma(_326, _212, _324 * _206);
    float _334 = _156 + fma(_326, _214, _324 * _208);
    float _336 = _152 + fma(_326, _216, _324 * _210);
    bool _340 = min(_330 * 1000.0, 1.0) > 0.5;
    float _342 = fma(_322, fp_c8_1._m0[18].x, fma(_320, fp_c8_1._m0[4].x, _318 * fp_c8_1._m0[11].x));
    float _344 = fma(_322, fp_c8_1._m0[18].y, fma(_320, fp_c8_1._m0[4].y, _318 * fp_c8_1._m0[11].y));
    float _346 = inversesqrt(fma(_336, _336, fma(_334, _334, _332 * _332)));
    float _348 = fma(_322, fp_c8_1._m0[18].z, fma(_320, fp_c8_1._m0[4].z, _318 * fp_c8_1._m0[11].z));
    float _350 = _332 * _346;
    float _352 = _334 * _346;
    float _354 = _336 * _346;
    float _364;
    float _366;
    float _368;
    float _370;
    float _372;
    float _374;
    float _376;
    float _378;
    float _380;
    float _382;
    float _384;
    if (_340)
    {
        float _356 = clamp(_330 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _358 = fma(fma(_342, -fp_c7_1._m0[45].y, fma(_322, fp_c8_1._m0[17].x, fma(_320, fp_c8_1._m0[3].x, _318 * fp_c8_1._m0[10].x))), _356, _342 * fp_c7_1._m0[45].y);
        float _360 = fma(fma(_348, -fp_c7_1._m0[45].y, fma(_322, fp_c8_1._m0[17].z, fma(_320, fp_c8_1._m0[3].z, _318 * fp_c8_1._m0[10].z))), _356, _348 * fp_c7_1._m0[45].y);
        float _362 = fma(fma(_344, -fp_c7_1._m0[45].y, fma(_322, fp_c8_1._m0[17].y, fma(_320, fp_c8_1._m0[3].y, _318 * fp_c8_1._m0[10].y))), _356, _344 * fp_c7_1._m0[45].y);
        _364 = _358;
        _366 = _362;
        _180 = fma(_162, (-_174) + _350, _174);
        _182 = fma(_162, (-_176) + _352, _176);
        _184 = fma(_162, (-_178) + _354, _178);
        _368 = fp_c7_1._m0[18].x;
        _370 = _360;
        _372 = 0.0;
        _374 = _118 * fma(_118 * (_312.y * fp_c6_1._m0[92].y), fp_c6_1._m0[85].y, fp_c6_1._m0[85].z * fp_c6_1._m0[92].y);
        _376 = _116 * fma(_116 * (_312.x * fp_c6_1._m0[92].x), fp_c6_1._m0[85].y, fp_c6_1._m0[85].z * fp_c6_1._m0[92].x);
        _378 = _120 * fma(_120 * (_312.z * fp_c6_1._m0[92].z), fp_c6_1._m0[85].y, fp_c6_1._m0[85].z * fp_c6_1._m0[92].z);
        _380 = _358 * fp_c7_1._m0[18].z;
        _382 = _362 * fp_c7_1._m0[18].z;
        _384 = _360 * fp_c7_1._m0[18].z;
    }
    else
    {
        float _386 = clamp(texture(fp_tex_tcb_C, vec2(_100, _102)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
        _364 = fma((-_124) + fp_c6_1._m0[92].x, _386, _124);
        _366 = fma((-_126) + fp_c6_1._m0[92].y, _386, _126);
        _368 = max(texture(fp_tex_tcb_10, vec2(_100, _102)).x, fp_c1_1._m0[0].x);
        _370 = fma((-_128) + fp_c6_1._m0[92].z, _386, _128);
        _372 = texture(fp_tex_tcb_12, vec2(_100, _102)).x;
        _374 = _118 * fma(_118 * (_130.y * fp_c6_1._m0[92].y), fp_c6_1._m0[85].y, fp_c6_1._m0[85].z * fp_c6_1._m0[92].y);
        _376 = _116 * fma(_116 * (_130.x * fp_c6_1._m0[92].x), fp_c6_1._m0[85].y, fp_c6_1._m0[85].z * fp_c6_1._m0[92].x);
        _378 = _120 * fma(_120 * (_130.z * fp_c6_1._m0[92].z), fp_c6_1._m0[85].y, fp_c6_1._m0[85].z * fp_c6_1._m0[92].z);
        _380 = 0.0;
        _382 = 0.0;
        _384 = 0.0;
    }
    float _388 = _88.x;
    float _390 = _88.y;
    float _392 = _88.z;
    float _394 = 1.0 / (_86.z * gl_FragCoord.w);
    float _396 = inversesqrt(fma(_392, _392, fma(_390, _390, _388 * _388)));
    float _398 = _388 * (-_396);
    float _400 = _390 * (-_396);
    float _402 = _392 * (-_396);
    float _404 = fma(_402, _184, fma(_400, _182, _398 * _180));
    float _406 = max(_404, fp_c1_1._m0[0].z);
    vec2 _408 = texture(fp_tex_tcb_38, vec2(_406, (-_368) + (-0.0))).xy;
    float _410 = fma(_364 + (-0.039999999105930328369140625), _372, fp_c1_1._m0[0].y);
    float _412 = fma(_366 + (-0.039999999105930328369140625), _372, fp_c1_1._m0[0].y);
    float _414 = fma(_372, -_370, _370);
    float _416 = fma(_370 + (-0.039999999105930328369140625), _372, fp_c1_1._m0[0].y);
    float _418 = fma(_372, -_364, _364);
    float _420 = fma(_372, -_366, _366);
    float _422 = clamp((-fma(max((-_314.x) + 1.0, (-_314.y) + 1.0), clamp(_90.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_86.x * gl_FragCoord.w) * _394, (_86.y * gl_FragCoord.w) * _394)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _424 = _406;
    float _426 = _412;
    float _428 = _410;
    float _430 = _416;
    float _446;
    float _448;
    float _450;
    float _452;
    float _454;
    float _456;
    float _458;
    if (_340)
    {
        float _432 = fma(_402, -_184, fma(_400, -_182, _398 * (-_180)));
        float _434 = fma(_432 * _180, -2.0, -_398);
        float _436 = fma(_432 * _182, -2.0, -_400);
        float _438 = fma(_432 * _184, -2.0, -_402);
        float _440 = 1.0 / max(abs(_438), max(abs(_434), abs(_436)));
        vec3 _442 = texture(fp_tex_tcb_36, vec4(_434 * _440, _436 * _440, _438 * _440, float(12)), 0.0).xyz;
        float _444 = fma(_408.x, fp_c7_1._m0[19].x, _408.y);
        _446 = _180 * fp_c7_1._m0[19].z;
        _448 = fma(_182 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _450 = _184 * fp_c7_1._m0[19].z;
        _426 = fp_c7_1._m0[19].x;
        _428 = fp_c7_1._m0[19].x;
        _430 = fp_c7_1._m0[19].x;
        _452 = _442.x * _444;
        _454 = _442.y * _444;
        _456 = _442.z * _444;
        _458 = 1.0;
    }
    else
    {
        float _460 = max(_404, fp_c1_1._m0[0].z);
        float _462 = fma(_402, -_184, fma(_400, -_182, _398 * (-_180)));
        float _464 = fma(_462 * _180, -2.0, -_398);
        float _466 = fma(_462 * _182, -2.0, -_400);
        float _468 = fma(_462 * _184, -2.0, -_402);
        float _470 = 1.0 / max(abs(_468), max(abs(_464), abs(_466)));
        vec2 _472 = texture(fp_tex_tcb_38, vec2(_460, (-_368) + (-0.0))).xy;
        float _474 = _472.x;
        float _476 = _472.y;
        vec3 _478 = texture(fp_tex_tcb_36, vec4(_464 * _470, _466 * _470, _468 * _470, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_368 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _480 = fma(fma(_354, -fp_c5_1._m0[23].z, fma(_352, -fp_c5_1._m0[23].y, _350 * (-fp_c5_1._m0[23].x))), -_182, _182);
        _446 = _180;
        _448 = _182;
        _450 = _184;
        _424 = _460;
        _452 = _478.x * fma(_410, _474, _476);
        _454 = _478.y * fma(_412, _474, _476);
        _456 = _478.z * fma(_416, _474, _476);
        _458 = clamp(fma(_480, clamp(_328 * (-7.0), 0.0, 1.0), -_480) + fp_c1_1._m0[0].w, 0.0, 1.0);
    }
    float _482 = _398 + (-fp_c5_1._m0[23].x);
    float _484 = _90.x;
    float _486 = _400 + (-fp_c5_1._m0[23].y);
    float _488 = _90.z;
    float _490 = _402 + (-fp_c5_1._m0[23].z);
    float _492 = inversesqrt(fma(_490, _490, fma(_486, _486, _482 * _482)));
    float _494 = _482 * _492;
    float _496 = _486 * _492;
    float _498 = _490 * _492;
    float _500 = fma(_368, 0.5, 0.5);
    float _502 = _368 * _368;
    float _504 = _448 * _446;
    int _507 = max(0, min(int(trunc((_488 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _509 = _450 * _448;
    float _511 = max(fma(_402, _498, fma(_400, _496, _398 * _494)), fp_c1_1._m0[0].z);
    float _513 = (_500 * 0.5) * _500;
    float _515 = _502 * _502;
    float _517 = max(fma(_498, _184, fma(_496, _182, _494 * _180)), fp_c1_1._m0[0].z) * max(fma(_498, _184, fma(_496, _182, _494 * _180)), fp_c1_1._m0[0].z);
    uint _520 = uint(int(uint((((int(uint(_507) >> uint(16)) * 20) << 16) + (((_507 & 65535) * 20) + max(0, min(int(trunc((_484 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _522 = fp_c10_1._m0[int(uint(int(_520)) >> uint(2))][int(_520) & 3];
    float _524 = fma(_446, _446, -(_448 * _448));
    float _526 = max(fma(_184, -fp_c5_1._m0[23].z, fma(_182, -fp_c5_1._m0[23].y, _180 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].z);
    float _528 = _450 * _450;
    float _530 = _450 * _446;
    float _532 = 1.0 / (_513 + fma(_424, -_513, _424));
    float _534 = exp2(_511 * fma(_511, fp_c1_1._m0[1].x, -6.9831600189208984375));
    float _536 = (_532 * (1.0 / (_513 + fma(_513, -_526, _526)))) * ((_502 * (1.0 / max(fma(_517, _515, -_517) + 1.0, fp_c1_1._m0[0].z))) * (_502 * (1.0 / max(fma(_517, _515, -_517) + 1.0, fp_c1_1._m0[0].z))));
    float _538 = fma(max(0.0, fma(_524, fp_c5_1._m0[31].x, (fma(_450, fp_c5_1._m0[25].z, fma(_448, fp_c5_1._m0[25].y, _446 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_530, fp_c5_1._m0[28].w, fma(_528, fp_c5_1._m0[28].z, fma(_509, fp_c5_1._m0[28].y, _504 * fp_c5_1._m0[28].x))))), fma(_418, -_428, _418), _452);
    float _540 = fma(max(0.0, fma(_524, fp_c5_1._m0[31].y, (fma(_450, fp_c5_1._m0[26].z, fma(_448, fp_c5_1._m0[26].y, _446 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_530, fp_c5_1._m0[29].w, fma(_528, fp_c5_1._m0[29].z, fma(_509, fp_c5_1._m0[29].y, _504 * fp_c5_1._m0[29].x))))), fma(_420, -_426, _420), _454);
    float _542 = fma(max(0.0, fma(_524, fp_c5_1._m0[31].z, (fma(_450, fp_c5_1._m0[27].z, fma(_448, fp_c5_1._m0[27].y, _446 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_530, fp_c5_1._m0[30].w, fma(_528, fp_c5_1._m0[30].z, fma(_509, fp_c5_1._m0[30].y, _504 * fp_c5_1._m0[30].x))))), fma(_414, -_430, _414), _456);
    int _544 = floatBitsToInt(_522);
    float _546 = _540;
    float _548 = _542;
    float _550 = _538;
    float _552 = _540;
    float _554 = _538;
    float _556 = _542;
    if (floatBitsToInt(_522) != (-1))
    {
        int _558 = 0;
        float _562;
        float _564;
        float _566;
        int _648;
        do
        {
            int _560 = _544 & 255;
            _562 = _550;
            _564 = _546;
            _566 = _548;
            _568 = uint(_560) >= 30u;
            if (_568)
            {
                break;
            }
            int _570 = _560 << 4;
            uint _572 = uint(int(uint(_570 + 7360) >> uint(2)));
            int _574 = int(_572) + 1;
            uint _576 = uint(int(uint(_570 + 7368) >> uint(2)));
            float _578 = (-_484) + fp_c10_1._m0[int(uint(int(_572)) >> uint(2))][int(_572) & 3];
            float _580 = fp_c10_1._m0[int(uint(_574) >> uint(2))][_574 & 3] + (-_90.y);
            float _582 = (-_488) + fp_c10_1._m0[int(uint(int(_576)) >> uint(2))][int(_576) & 3];
            float _584 = fma(_582, _582, fma(_580, _580, _578 * _578));
            float _586 = _578 * inversesqrt(_584);
            float _588 = _580 * inversesqrt(_584);
            float _590 = _582 * inversesqrt(_584);
            float _592 = _398 + _586;
            float _594 = _400 + _588;
            float _596 = _402 + _590;
            uint _598 = uint(int(uint(_570 + 6880) >> uint(2)));
            int _600 = int(_598) + 1;
            float _602 = inversesqrt(fma(_596, _596, fma(_594, _594, _592 * _592)));
            float _604 = _592 * _602;
            float _606 = _594 * _602;
            float _608 = _596 * _602;
            float _610 = fma(_590, _184, fma(_588, _182, _586 * _180));
            float _612 = max(_610, fp_c1_1._m0[0].z);
            uint _614 = uint(int(uint(_570 + 8320) >> uint(2)));
            float _616 = max(fma(_402, _608, fma(_400, _606, _398 * _604)), fp_c1_1._m0[0].z);
            float _618 = max(fma(_608, _184, fma(_606, _182, _604 * _180)), fp_c1_1._m0[0].z) * max(fma(_608, _184, fma(_606, _182, _604 * _180)), fp_c1_1._m0[0].z);
            uint _620 = uint(int(uint(_570 + 6408) >> uint(2)));
            float _622 = exp2(_616 * fma(_616, fp_c1_1._m0[1].x, -6.9831600189208984375));
            uint _624 = uint(int(uint(_570 + 6400) >> uint(2)));
            int _626 = int(_624) + 1;
            bool _628 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_614)) >> uint(2))][int(_614) & 3]) != 0;
            float _630 = (_532 * (1.0 / (_513 + fma(_513, -_612, _612)))) * ((_502 * (1.0 / max(fma(_515, _618, -_618) + 1.0, fp_c1_1._m0[0].z))) * (_502 * (1.0 / max(fma(_515, _618, -_618) + 1.0, fp_c1_1._m0[0].z))));
            float _632 = _630;
            if (!_628)
            {
                _632 = 1.0;
            }
            float _634 = _632;
            if (_628)
            {
                uint _636 = uint(int(uint(_570 + 7840) >> uint(2)));
                int _638 = int(_636) + 1;
                uint _640 = uint(int(uint(_570 + 6888) >> uint(2)));
                float _642 = fp_c10_1._m0[int(uint(int(_640)) >> uint(2))][int(_640) & 3];
                int _644 = int(_640) + 1;
                uint _646 = uint(int(uint(_570 + 7848) >> uint(2)));
                _634 = exp2(fp_c10_1._m0[int(uint(_644) >> uint(2))][_644 & 3] * log2(clamp(((-_642) + fma(_590, -fp_c10_1._m0[int(uint(int(_646)) >> uint(2))][int(_646) & 3], fma(_588, -fp_c10_1._m0[int(uint(_638) >> uint(2))][_638 & 3], _586 * (-fp_c10_1._m0[int(uint(int(_636)) >> uint(2))][int(_636) & 3])))) * (1.0 / ((-_642) + 1.0)), 0.0, 1.0)));
            }
            _648 = _558 + 1;
            float _650 = (exp2(fp_c10_1._m0[int(uint(_600) >> uint(2))][_600 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_598)) >> uint(2))][int(_598) & 3], -sqrt(_584), fp_c1_1._m0[1].z), 0.0, 1.0))) * _634) * clamp(_610 + (-0.0), 0.0, 1.0);
            float _652 = fma(fp_c10_1._m0[int(uint(_626) >> uint(2))][_626 & 3] * _650, fma(_420, fp_c1_1._m0[1].w, ((fma(_622, -_426, _622) + _426) * _630) * 0.079577468335628509521484375), _546);
            float _654 = fma(fp_c10_1._m0[int(uint(int(_620)) >> uint(2))][int(_620) & 3] * _650, fma(_414, fp_c1_1._m0[1].w, ((fma(_622, -_430, _622) + _430) * _630) * 0.079577468335628509521484375), _548);
            float _656 = fma(fp_c10_1._m0[int(uint(int(_624)) >> uint(2))][int(_624) & 3] * _650, fma(_418, fp_c1_1._m0[1].w, ((fma(_622, -_428, _622) + _428) * _630) * 0.079577468335628509521484375), _550);
            _544 = int(uint(_544) >> uint(8));
            _558 = _648;
            _546 = _652;
            _548 = _654;
            _550 = _656;
            _562 = _656;
            _564 = _652;
            _566 = _654;
        } while (!(_648 >= 4));
        _568 = false;
        _552 = _564;
        _554 = _562;
        _556 = _566;
        if ((_544 & 255) == 30)
        {
            float _658 = _90.y;
            float _660 = 1.0 / (fma(_488, fp_c10_1._m0[565].z, fma(_658, fp_c10_1._m0[565].y, _484 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _662 = 1.0 / fp_c10_1._m0[561].y;
            float _664 = _484 + (-fp_c10_1._m0[557].x);
            float _666 = _488 + (-fp_c10_1._m0[557].z);
            float _668 = _666 * fp_c10_1._m0[558].x;
            float _670 = _664 * fp_c10_1._m0[558].z;
            float _672 = (-_484) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_662, fp_c10_1._m0[557].x);
            float _674 = (-_488) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_662, fp_c10_1._m0[557].z);
            float _676 = _672 * _672;
            float _678 = sqrt(fma(_674, _674, _676)) * (-fp_c10_1._m0[558].y);
            float _680 = ((-float(_668 < _670)) + float(_668 > _670)) * fp_c10_1._m0[561].y;
            float _682 = fma(_666, _666, _664 * _664);
            float _684 = inversesqrt(fma(_674, _674, fma(_678, _678, _676)));
            float _686 = fma(_666, fp_c10_1._m0[558].z, _664 * fp_c10_1._m0[558].x);
            float _688 = _672 * _684;
            float _690 = _678 * _684;
            float _692 = _674 * _684;
            bool _694 = _686 > 0.0;
            float _696 = _398 + _688;
            float _698 = _400 + _690;
            float _700 = _682;
            if (_694)
            {
                _700 = sqrt(_682);
            }
            float _702 = _402 + _692;
            float _704 = _700;
            if (!_694)
            {
                _704 = 1.0;
            }
            float _706 = inversesqrt(fma(_692, _692, _688 * _688));
            bool _708 = fma(_666 * inversesqrt(_682), fp_c10_1._m0[558].z, (_664 * inversesqrt(_682)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _710 = fma(_692, _184, fma(_690, _182, _688 * _180));
            float _712 = inversesqrt(fma(_702, _702, fma(_698, _698, _696 * _696)));
            float _714 = _696 * _712;
            float _716 = _698 * _712;
            float _718 = _702 * _712;
            float _720 = clamp(fma(_686 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0) * clamp(fma(_686 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0);
            float _722 = max(fma(_718, _184, fma(_716, _182, _714 * _180)), fp_c1_1._m0[0].z) * max(fma(_718, _184, fma(_716, _182, _714 * _180)), fp_c1_1._m0[0].z);
            float _724 = max(_710, fp_c1_1._m0[0].z);
            float _726 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_664, fma(_680, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_666 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_680 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_664, fma(_680, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_666 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_680 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _728 = max(fma(_402, _718, fma(_400, _716, _398 * _714)), fp_c1_1._m0[0].z);
            float _730 = _728;
            if (!_708)
            {
                _730 = 1.0;
            }
            float _732 = exp2(_728 * fma(_728, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _734 = _730;
            if (_708)
            {
                _734 = fma(_726, -_726, fp_c1_1._m0[1].z) * fma(_726, -_726, fp_c1_1._m0[1].z);
            }
            float _736 = (_532 * (1.0 / (_513 + fma(_513, -_724, _724)))) * ((_502 * (1.0 / max(fma(_515, _722, -_722) + 1.0, fp_c1_1._m0[0].z))) * (_502 * (1.0 / max(fma(_515, _722, -_722) + 1.0, fp_c1_1._m0[0].z))));
            float _738 = (min(fma(_720, -_720, fp_c1_1._m0[1].z) * fma(_720, -_720, fp_c1_1._m0[1].z), _734) * (exp2(log2(clamp(fma(_704, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_692 * _706, -fp_c10_1._m0[558].z, (_688 * _706) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_710 + (-0.0), 0.0, 1.0);
            float _740 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_488, fp_c10_1._m0[562].z, fma(_658, fp_c10_1._m0[562].y, _484 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _660, 0.5, 0.5), (-fma((fma(_488, fp_c10_1._m0[563].z, fma(_658, fp_c10_1._m0[563].y, _484 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _660, 0.5, 0.5)) + 1.0)).z > fma((fma(_488, fp_c10_1._m0[564].z, fma(_658, fp_c10_1._m0[564].y, _484 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _660, 0.5, 0.5)) || (_686 <= 0.0));
            _552 = fma(fma(_420, fp_c1_1._m0[1].w, ((fma(_732, -_426, _732) + _426) * _736) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _738), _740, _564);
            _554 = fma(fma(_418, fp_c1_1._m0[1].w, ((fma(_732, -_428, _732) + _428) * _736) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _738), _740, _562);
            _556 = fma(fma(_414, fp_c1_1._m0[1].w, ((fma(_732, -_430, _732) + _430) * _736) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _738), _740, _566);
        }
    }
    float _742 = _484 + (-fp_c3_1._m0[11].w);
    float _744 = _488 + (-fp_c3_1._m0[13].w);
    float _746 = clamp(fma(_184, -fp_c5_1._m0[23].z, fma(_182, -fp_c5_1._m0[23].y, _180 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _748 = _90.y + (-fp_c3_1._m0[12].w);
    float _750 = fma(_744, _744, fma(_748, _748, _742 * _742));
    float _752 = clamp(fma(_422, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _754 = exp2(log2(clamp(sqrt(_750) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_744 * inversesqrt(_750), fp_c5_1._m0[23].z, fma(_748 * inversesqrt(_750), fp_c5_1._m0[23].y, (_742 * inversesqrt(_750)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _756 = fma(_376, fp_c6_1._m0[11].x, fma(_422, ((_746 * fp_c5_1._m0[5].x) * fma((fma(_534, -_428, _534) + _428) * _536, fp_c1_1._m0[1].y, _418 * 0.3183098733425140380859375)) * _458, _554)) + _380;
    float _758 = fma(_374, fp_c6_1._m0[11].x, fma(_422, ((_746 * fp_c5_1._m0[5].y) * fma((fma(_534, -_426, _534) + _426) * _536, fp_c1_1._m0[1].y, _420 * 0.3183098733425140380859375)) * _458, _552)) + _382;
    float _760 = fma(_378, fp_c6_1._m0[11].x, fma(_422, ((_746 * fp_c5_1._m0[5].z) * fma((fma(_534, -_430, _534) + _430) * _536, fp_c1_1._m0[1].y, _414 * 0.3183098733425140380859375)) * _458, _556)) + _384;
    float _762 = clamp((-exp2((clamp(fma(sqrt(_750), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _93.x = fma(fma(fma((_754 * fp_c7_1._m0[55].x) * _752, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_756), _762, _756);
    _93.y = fma(fma(fma((_754 * fp_c7_1._m0[55].y) * _752, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_758), _762, _758);
    _93.z = fma(fma(fma((_754 * fp_c7_1._m0[55].z) * _752, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_760), _762, _760);
    _93.w = 1.0;
}


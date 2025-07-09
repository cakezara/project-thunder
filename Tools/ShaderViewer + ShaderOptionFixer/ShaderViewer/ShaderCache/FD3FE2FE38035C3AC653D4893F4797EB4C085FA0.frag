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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_C;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_18;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _62;
layout(location = 5) in vec4 _64;
layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 4) in vec4 _72;
layout(location = 3) in vec4 _74;
layout(location = 0) out vec4 _77;
uint _6[12];

void main()
{
    bool _292 = false;
    float _84 = 1.0 / (_62.z * gl_FragCoord.w);
    float _86 = _66.x;
    float _88 = _66.y;
    float _90 = 1.0 / _64.w;
    vec2 _94 = texture(fp_tex_tcb_E, vec2(_86, _88)).xy;
    float _96 = _94.x;
    float _98 = _94.y;
    vec2 _100 = texture(fp_tex_tcb_2A, vec2(fma(_64.x * _90, 0.5, 0.5), fma(_64.y * _90, -0.5, 0.5))).xy;
    float _102 = _68.x;
    float _104 = _68.y;
    float _106 = _68.z;
    float _108 = _70.z;
    float _110 = _70.x;
    float _112 = _70.y;
    float _114 = _70.w;
    float _116 = _72.x;
    float _118 = _72.y;
    float _120 = _72.z;
    float _122 = inversesqrt(fma(_106, _106, fma(_104, _104, _102 * _102)));
    float _124 = _102 * _122;
    float _126 = _106 * _122;
    float _128 = _104 * _122;
    float _130 = sqrt(clamp((-fma(_96, _96, _98 * _98)) + 1.0, 0.0, 1.0));
    float _132 = fma(_124, _130, fma(_96, _110, _98 * (fma(_128, _108, -(_126 * _112)) * _114)));
    float _134 = fma(_128, _130, fma(_96, _112, _98 * (fma(_126, _110, -(_124 * _108)) * _114)));
    float _136 = fma(_126, _130, fma(_96, _108, _98 * (fma(_124, _112, -(_128 * _110)) * _114)));
    float _138 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _140 = max(texture(fp_tex_tcb_10, vec2(_86, _88)).x, fp_c1_1._m0[0].x);
    float _142 = _116 * (-_138);
    float _144 = inversesqrt(fma(_136, _136, fma(_134, _134, _132 * _132)));
    float _146 = _118 * (-_138);
    float _148 = _120 * (-_138);
    float _150 = _132 * _144;
    float _152 = _134 * _144;
    float _154 = _136 * _144;
    float _156 = fma(_154, _148, fma(_152, _146, _150 * _142));
    float _158 = fma(_150 * (-_156), -2.0, -_142);
    float _160 = fma(_152 * (-_156), -2.0, -_146);
    float _162 = fma(_154 * (-_156), -2.0, -_148);
    float _164 = 1.0 / max(abs(_162), max(abs(_158), abs(_160)));
    float _166 = max(_156, fp_c1_1._m0[0].y);
    vec2 _168 = texture(fp_tex_tcb_38, vec2(_166, (-_140) + (-0.0))).xy;
    float _170 = _168.x;
    float _172 = _168.y;
    vec3 _176 = texture(fp_tex_tcb_36, vec4(_158 * _164, _160 * _164, _162 * _164, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_140 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _178 = _142 + (-fp_c5_1._m0[23].x);
    float _180 = _74.x;
    float _182 = _146 + (-fp_c5_1._m0[23].y);
    float _184 = _148 + (-fp_c5_1._m0[23].z);
    float _186 = _154 * _154;
    float _188 = inversesqrt(fma(_184, _184, fma(_182, _182, _178 * _178)));
    float _190 = _178 * _188;
    float _192 = _182 * _188;
    float _194 = _184 * _188;
    float _196 = _74.z;
    float _198 = _152 * _154;
    float _200 = _150 * _152;
    float _202 = max(fma(_148, _194, fma(_146, _192, _142 * _190)), fp_c1_1._m0[0].y);
    float _204 = _150 * _154;
    float _206 = fma(_150, _150, -(_152 * _152));
    int _209 = max(0, min(int(trunc((_196 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _211 = fma(_140, 0.5, 0.5);
    float _213 = _140 * _140;
    float _215 = fma(_152, -fp_c5_1._m0[23].y, _150 * (-fp_c5_1._m0[23].x));
    float _217 = max(fma(_154, _194, fma(_152, _192, _150 * _190)), fp_c1_1._m0[0].y) * max(fma(_154, _194, fma(_152, _192, _150 * _190)), fp_c1_1._m0[0].y);
    float _219 = clamp(texture(fp_tex_tcb_C, vec2(_86, _88)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _221 = (_211 * 0.5) * _211;
    float _223 = fma((-fp_c6_1._m0[7].x) + fp_c6_1._m0[92].x, _219, fp_c6_1._m0[7].x);
    float _225 = max(fma(_154, -fp_c5_1._m0[23].z, _215), fp_c1_1._m0[0].y);
    float _227 = fma((-fp_c6_1._m0[7].z) + fp_c6_1._m0[92].z, _219, fp_c6_1._m0[7].z);
    uint _230 = uint(int(uint((((int(uint(_209) >> uint(16)) * 20) << 16) + (((_209 & 65535) * 20) + max(0, min(int(trunc((_180 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _232 = fp_c10_1._m0[int(uint(int(_230)) >> uint(2))][int(_230) & 3];
    float _234 = fma((-fp_c6_1._m0[7].y) + fp_c6_1._m0[92].y, _219, fp_c6_1._m0[7].y);
    float _236 = exp2(_202 * fma(_202, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _238 = 1.0 / (_221 + fma(_166, -_221, _166));
    float _240 = fma(_223, -fp_c6_1._m0[9].x, _223);
    float _242 = fma(_223 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _244 = fma(_234, -fp_c6_1._m0[9].x, _234);
    float _246 = fma(_227, -fp_c6_1._m0[9].x, _227);
    float _248 = fma(_227 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _250 = fma(_234 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _252 = (_238 * (1.0 / (_221 + fma(_221, -_225, _225)))) * ((_213 * (1.0 / max(fma(_217, _213 * _213, -_217) + 1.0, fp_c1_1._m0[0].y))) * (_213 * (1.0 / max(fma(_217, _213 * _213, -_217) + 1.0, fp_c1_1._m0[0].y))));
    float _254 = clamp(fma(_154, -fp_c5_1._m0[23].z, _215), 0.0, 1.0);
    float _256 = clamp((-fma(max((-_100.x) + 1.0, (-_100.y) + 1.0), clamp(_74.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_62.x * gl_FragCoord.w) * _84, (_62.y * gl_FragCoord.w) * _84)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _258 = fma(_176.x, fma(_242, _170, _172), max(0.0, fma(_206, fp_c5_1._m0[31].x, (fma(_154, fp_c5_1._m0[25].z, fma(_152, fp_c5_1._m0[25].y, _150 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_204, fp_c5_1._m0[28].w, fma(_186, fp_c5_1._m0[28].z, fma(_198, fp_c5_1._m0[28].y, _200 * fp_c5_1._m0[28].x))))) * fma(_242, -_240, _240));
    float _260 = fma(_176.y, fma(_250, _170, _172), max(0.0, fma(_206, fp_c5_1._m0[31].y, (fma(_154, fp_c5_1._m0[26].z, fma(_152, fp_c5_1._m0[26].y, _150 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_204, fp_c5_1._m0[29].w, fma(_186, fp_c5_1._m0[29].z, fma(_198, fp_c5_1._m0[29].y, _200 * fp_c5_1._m0[29].x))))) * fma(_250, -_244, _244));
    float _262 = fma(_176.z, fma(_248, _170, _172), max(0.0, fma(_206, fp_c5_1._m0[31].z, (fma(_154, fp_c5_1._m0[27].z, fma(_152, fp_c5_1._m0[27].y, _150 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_204, fp_c5_1._m0[30].w, fma(_186, fp_c5_1._m0[30].z, fma(_198, fp_c5_1._m0[30].y, _200 * fp_c5_1._m0[30].x))))) * fma(_248, -_246, _246));
    float _264 = clamp(texture(fp_tex_tcb_18, vec2(_86, _88)).x + (-0.0), 0.0, 1.0);
    int _266 = floatBitsToInt(_232);
    float _268 = _260;
    float _270 = _262;
    float _272 = _258;
    float _274 = _260;
    float _276 = _258;
    float _278 = _262;
    if (floatBitsToInt(_232) != (-1))
    {
        int _280 = 0;
        float _284;
        float _286;
        float _288;
        int _374;
        do
        {
            int _282 = _266 & 255;
            _284 = _272;
            _286 = _268;
            _288 = _270;
            _292 = uint(_282) >= 30u;
            if (_292)
            {
                break;
            }
            int _294 = _282 << 4;
            uint _296 = uint(int(uint(_294 + 7360) >> uint(2)));
            int _298 = int(_296) + 1;
            uint _300 = uint(int(uint(_294 + 7368) >> uint(2)));
            float _302 = (-_180) + fp_c10_1._m0[int(uint(int(_296)) >> uint(2))][int(_296) & 3];
            float _304 = fp_c10_1._m0[int(uint(_298) >> uint(2))][_298 & 3] + (-_74.y);
            float _306 = (-_196) + fp_c10_1._m0[int(uint(int(_300)) >> uint(2))][int(_300) & 3];
            float _308 = fma(_306, _306, fma(_304, _304, _302 * _302));
            float _310 = _302 * inversesqrt(_308);
            float _312 = _304 * inversesqrt(_308);
            float _314 = _306 * inversesqrt(_308);
            float _316 = _142 + _310;
            float _318 = _146 + _312;
            float _320 = _148 + _314;
            uint _322 = uint(int(uint(_294 + 6880) >> uint(2)));
            int _324 = int(_322) + 1;
            float _326 = inversesqrt(fma(_320, _320, fma(_318, _318, _316 * _316)));
            float _328 = _316 * _326;
            float _330 = _318 * _326;
            float _332 = _320 * _326;
            uint _334 = uint(int(uint(_294 + 8320) >> uint(2)));
            float _336 = max(fma(_148, _332, fma(_146, _330, _142 * _328)), fp_c1_1._m0[0].y);
            float _338 = fma(_154, _314, fma(_152, _312, _150 * _310));
            float _340 = max(fma(_154, _332, fma(_152, _330, _150 * _328)), fp_c1_1._m0[0].y) * max(fma(_154, _332, fma(_152, _330, _150 * _328)), fp_c1_1._m0[0].y);
            float _342 = max(_338, fp_c1_1._m0[0].y);
            float _344 = fp_c10_1._m0[int(uint(_324) >> uint(2))][_324 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_322)) >> uint(2))][int(_322) & 3], -sqrt(_308), fp_c1_1._m0[1].x), 0.0, 1.0));
            uint _346 = uint(int(uint(_294 + 6400) >> uint(2)));
            int _348 = int(_346) + 1;
            uint _350 = uint(int(uint(_294 + 6408) >> uint(2)));
            float _352 = exp2(_336 * fma(_336, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _354 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_334)) >> uint(2))][int(_334) & 3]) != 0;
            float _356 = (_238 * (1.0 / (_221 + fma(_221, -_342, _342)))) * ((_213 * (1.0 / max(fma(_213 * _213, _340, -_340) + 1.0, fp_c1_1._m0[0].y))) * (_213 * (1.0 / max(fma(_213 * _213, _340, -_340) + 1.0, fp_c1_1._m0[0].y))));
            float _358 = _344;
            if (!_354)
            {
                _358 = 1.0;
            }
            float _360 = _358;
            if (_354)
            {
                uint _362 = uint(int(uint(_294 + 7840) >> uint(2)));
                int _364 = int(_362) + 1;
                uint _366 = uint(int(uint(_294 + 7848) >> uint(2)));
                uint _368 = uint(int(uint(_294 + 6888) >> uint(2)));
                float _370 = fp_c10_1._m0[int(uint(int(_368)) >> uint(2))][int(_368) & 3];
                int _372 = int(_368) + 1;
                _360 = exp2(fp_c10_1._m0[int(uint(_372) >> uint(2))][_372 & 3] * log2(clamp(((-_370) + fma(_314, -fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3], fma(_312, -fp_c10_1._m0[int(uint(_364) >> uint(2))][_364 & 3], _310 * (-fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3])))) * (1.0 / ((-_370) + 1.0)), 0.0, 1.0)));
            }
            _374 = _280 + 1;
            float _376 = (exp2(_344) * _360) * clamp(_338 + (-0.0), 0.0, 1.0);
            float _378 = fma(fp_c10_1._m0[int(uint(_348) >> uint(2))][_348 & 3] * _376, fma(_244, fp_c1_1._m0[1].y, ((_250 + fma(_250, -_352, _352)) * _356) * 0.079577468335628509521484375), _268);
            float _380 = fma(fp_c10_1._m0[int(uint(int(_350)) >> uint(2))][int(_350) & 3] * _376, fma(_246, fp_c1_1._m0[1].y, ((_248 + fma(_248, -_352, _352)) * _356) * 0.079577468335628509521484375), _270);
            float _382 = fma(fp_c10_1._m0[int(uint(int(_346)) >> uint(2))][int(_346) & 3] * _376, fma(_240, fp_c1_1._m0[1].y, ((_242 + fma(_242, -_352, _352)) * _356) * 0.079577468335628509521484375), _272);
            _266 = int(uint(_266) >> uint(8));
            _280 = _374;
            _268 = _378;
            _270 = _380;
            _272 = _382;
            _284 = _382;
            _286 = _378;
            _288 = _380;
        } while (!(_374 >= 4));
        _292 = false;
        _274 = _286;
        _276 = _284;
        _278 = _288;
        if ((_266 & 255) == 30)
        {
            float _384 = _74.y;
            float _386 = 1.0 / (fma(_196, fp_c10_1._m0[565].z, fma(_384, fp_c10_1._m0[565].y, _180 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _388 = 1.0 / fp_c10_1._m0[561].y;
            float _390 = _180 + (-fp_c10_1._m0[557].x);
            float _392 = _196 + (-fp_c10_1._m0[557].z);
            float _394 = _390 * fp_c10_1._m0[558].z;
            float _396 = _392 * fp_c10_1._m0[558].x;
            float _398 = (-_180) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_388, fp_c10_1._m0[557].x);
            float _400 = (-_196) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_388, fp_c10_1._m0[557].z);
            float _402 = _398 * _398;
            float _404 = sqrt(fma(_400, _400, _402)) * (-fp_c10_1._m0[558].y);
            float _406 = inversesqrt(fma(_400, _400, fma(_404, _404, _402)));
            float _408 = _398 * _406;
            float _410 = _404 * _406;
            float _412 = _400 * _406;
            float _414 = _142 + _408;
            float _416 = _146 + _410;
            float _418 = ((-float(_396 < _394)) + float(_396 > _394)) * fp_c10_1._m0[561].y;
            float _420 = _148 + _412;
            float _422 = fma(_154, _412, fma(_152, _410, _150 * _408));
            float _424 = inversesqrt(fma(_420, _420, fma(_416, _416, _414 * _414)));
            float _426 = _414 * _424;
            float _428 = _416 * _424;
            float _430 = fma(_392, _392, _390 * _390);
            float _432 = fma(_392, fp_c10_1._m0[558].z, _390 * fp_c10_1._m0[558].x);
            bool _434 = _432 > 0.0;
            float _436 = inversesqrt(fma(_412, _412, _408 * _408));
            float _438 = _408;
            if (_434)
            {
                _438 = sqrt(_430);
            }
            float _440 = _420 * _424;
            float _442 = _438;
            if (!_434)
            {
                _442 = 1.0;
            }
            float _444 = max(fma(_148, _440, fma(_146, _428, _142 * _426)), fp_c1_1._m0[0].y);
            float _446 = max(_422, fp_c1_1._m0[0].y);
            float _448 = max(fma(_154, _440, fma(_152, _428, _150 * _426)), fp_c1_1._m0[0].y) * max(fma(_154, _440, fma(_152, _428, _150 * _426)), fp_c1_1._m0[0].y);
            bool _450 = fma(_392 * inversesqrt(_430), fp_c10_1._m0[558].z, (_390 * inversesqrt(_430)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _452 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_390, fma(_418, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_392 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_418 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_390, fma(_418, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_392 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_418 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _454 = clamp(fma(_432 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_432 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _456 = log2(clamp((fma(_412 * _436, -fp_c10_1._m0[558].z, (_408 * _436) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _458 = exp2(_444 * fma(_444, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _460 = _456;
            if (_450)
            {
                _460 = fma(_452, -_452, fp_c1_1._m0[1].x) * fma(_452, -_452, fp_c1_1._m0[1].x);
            }
            float _462 = _460;
            if (!_450)
            {
                _462 = 1.0;
            }
            float _464 = (_238 * (1.0 / (_221 + fma(_221, -_446, _446)))) * ((_213 * (1.0 / max(fma(_213 * _213, _448, -_448) + 1.0, fp_c1_1._m0[0].y))) * (_213 * (1.0 / max(fma(_213 * _213, _448, -_448) + 1.0, fp_c1_1._m0[0].y))));
            float _466 = (min(fma(_454, -_454, fp_c1_1._m0[1].x) * fma(_454, -_454, fp_c1_1._m0[1].x), _462) * (exp2(log2(clamp(fma(_442, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_456))) * clamp(_422 + (-0.0), 0.0, 1.0);
            float _468 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_196, fp_c10_1._m0[562].z, fma(_384, fp_c10_1._m0[562].y, _180 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _386, 0.5, 0.5), (-fma((fma(_196, fp_c10_1._m0[563].z, fma(_384, fp_c10_1._m0[563].y, _180 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _386, 0.5, 0.5)) + 1.0)).z > fma((fma(_196, fp_c10_1._m0[564].z, fma(_384, fp_c10_1._m0[564].y, _180 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _386, 0.5, 0.5)) || (_432 <= 0.0));
            _274 = fma(fma(_244, fp_c1_1._m0[1].y, ((_250 + fma(_250, -_458, _458)) * _464) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _466), _468, _286);
            _276 = fma(fma(_240, fp_c1_1._m0[1].y, ((_242 + fma(_242, -_458, _458)) * _464) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _466), _468, _284);
            _278 = fma(fma(_246, fp_c1_1._m0[1].y, ((_248 + fma(_248, -_458, _458)) * _464) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _466), _468, _288);
        }
    }
    float _470 = _180 + (-fp_c3_1._m0[11].w);
    float _472 = _74.y;
    float _474 = _196 + (-fp_c3_1._m0[13].w);
    float _476 = _472 + (-fp_c3_1._m0[12].w);
    float _478 = fma(_474, _474, fma(_476, _476, _470 * _470));
    float _480 = fma(_264, _274, _256 * (fma(_252 * (_250 + fma(_250, -_236, _236)), fp_c1_1._m0[0].w, _244 * 0.3183098733425140380859375) * (_254 * fp_c5_1._m0[5].y)));
    float _482 = fma(_264, _276, _256 * (fma(_252 * (_242 + fma(_242, -_236, _236)), fp_c1_1._m0[0].w, _240 * 0.3183098733425140380859375) * (_254 * fp_c5_1._m0[5].x)));
    float _484 = fma(_264, _278, _256 * (fma(_252 * (_248 + fma(_248, -_236, _236)), fp_c1_1._m0[0].w, _246 * 0.3183098733425140380859375) * (_254 * fp_c5_1._m0[5].z)));
    float _486 = clamp(fma(fma(_196, fp_c5_1._m0[14].z, fma(_472, fp_c5_1._m0[14].y, _180 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _488 = exp2(log2(clamp(sqrt(_478) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_474 * inversesqrt(_478), fp_c5_1._m0[23].z, fma(_476 * inversesqrt(_478), fp_c5_1._m0[23].y, (_470 * inversesqrt(_478)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _490 = clamp(fma(_264 * _256, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _492 = fma((-_482) + fp_c5_1._m0[13].x, _486, _482);
    float _494 = fma((-_484) + fp_c5_1._m0[13].z, _486, _484);
    float _496 = fma((-_480) + fp_c5_1._m0[13].y, _486, _480);
    float _498 = clamp((-exp2((clamp(fma(sqrt(_478), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _77.x = fma((-_492) + fma(fma((_488 * fp_c7_1._m0[55].x) * _490, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _498, _492);
    _77.y = fma((-_496) + fma(fma((_488 * fp_c7_1._m0[55].y) * _490, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _498, _496);
    _77.z = fma((-_494) + fma(fma((_488 * fp_c7_1._m0[55].z) * _490, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _498, _494);
    _77.w = 1.0;
}


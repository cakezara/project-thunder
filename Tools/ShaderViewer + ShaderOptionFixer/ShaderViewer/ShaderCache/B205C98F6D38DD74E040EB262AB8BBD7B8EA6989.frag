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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 4) in vec4 _72;
layout(location = 6) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 3) in vec4 _78;
layout(location = 0) out vec4 _81;
uint _6[12];

void main()
{
    bool _302 = false;
    float _88 = _66.x;
    float _90 = _66.y;
    vec2 _94 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _96 = _94.x;
    float _98 = _94.y;
    float _100 = _68.x;
    float _102 = _68.y;
    float _104 = _68.z;
    float _106 = _70.y;
    float _108 = _70.z;
    float _110 = _70.x;
    float _112 = _70.w;
    float _114 = _72.x;
    float _116 = _72.y;
    float _118 = _72.z;
    float _120 = inversesqrt(fma(_104, _104, fma(_102, _102, _100 * _100)));
    float _122 = _104 * _120;
    float _124 = _100 * _120;
    float _126 = _102 * _120;
    float _128 = sqrt(clamp((-fma(_96, _96, _98 * _98)) + 1.0, 0.0, 1.0));
    float _130 = fma(_124, _128, fma(_96, _110, _98 * (fma(_126, _108, -(_122 * _106)) * _112)));
    float _132 = fma(_126, _128, fma(_96, _106, _98 * (fma(_122, _110, -(_124 * _108)) * _112)));
    float _134 = fma(_122, _128, fma(_96, _108, _98 * (fma(_124, _106, -(_126 * _110)) * _112)));
    float _136 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _138 = _114 * (-_136);
    float _140 = inversesqrt(fma(_134, _134, fma(_132, _132, _130 * _130)));
    float _142 = _116 * (-_136);
    float _144 = _118 * (-_136);
    float _146 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _148 = 1.0 / (_74.z * gl_FragCoord.w);
    float _150 = 1.0 / _76.w;
    float _152 = _130 * _140;
    float _154 = _132 * _140;
    float _156 = _134 * _140;
    float _158 = fma(_156, _144, fma(_154, _142, _152 * _138));
    float _160 = max(_158, fp_c1_1._m0[0].y);
    float _162 = fma(_152 * (-_158), -2.0, -_138);
    float _164 = fma(_154 * (-_158), -2.0, -_142);
    float _166 = fma(_156 * (-_158), -2.0, -_144);
    float _168 = 1.0 / max(abs(_166), max(abs(_162), abs(_164)));
    vec2 _170 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _150, 0.5, 0.5), fma(_76.y * _150, -0.5, 0.5))).xy;
    vec3 _174 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _176 = _174.x;
    float _178 = _174.y;
    float _180 = _174.z;
    float _182 = texture(fp_tex_tcb_12, vec2(_88, _90)).x;
    vec2 _184 = texture(fp_tex_tcb_38, vec2(_160, (-_146) + (-0.0))).xy;
    float _186 = _184.x;
    float _188 = _184.y;
    vec3 _190 = texture(fp_tex_tcb_36, vec4(_162 * _168, _164 * _168, _166 * _168, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_146 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _192 = texture(fp_tex_tcb_14, vec2(_88, _90)).xyz;
    float _194 = _138 + (-fp_c5_1._m0[23].x);
    float _196 = _142 + (-fp_c5_1._m0[23].y);
    float _198 = _144 + (-fp_c5_1._m0[23].z);
    float _200 = _152 * _156;
    float _202 = _152 * _154;
    float _204 = inversesqrt(fma(_198, _198, fma(_196, _196, _194 * _194)));
    float _206 = _154 * _156;
    float _208 = _156 * _156;
    float _210 = _78.x;
    float _212 = _194 * _204;
    float _214 = _196 * _204;
    float _216 = _198 * _204;
    float _218 = _78.z;
    float _220 = fma(_152, _152, -(_154 * _154));
    float _222 = clamp(texture(fp_tex_tcb_18, vec2(_88, _90)).x + (-0.0), 0.0, 1.0);
    float _224 = _146 * _146;
    float _226 = clamp((-fma(max((-_170.x) + 1.0, (-_170.y) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_74.x * gl_FragCoord.w) * _148, (_74.y * gl_FragCoord.w) * _148)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _228 = _224 * _224;
    float _230 = fma(_154, -fp_c5_1._m0[23].y, _152 * (-fp_c5_1._m0[23].x));
    float _232 = fma(_146, 0.5, 0.5);
    float _234 = max(fma(_156, _216, fma(_154, _214, _152 * _212)), fp_c1_1._m0[0].y) * max(fma(_156, _216, fma(_154, _214, _152 * _212)), fp_c1_1._m0[0].y);
    float _236 = (_232 * 0.5) * _232;
    int _239 = max(0, min(int(trunc((_218 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _241 = max(fma(_156, -fp_c5_1._m0[23].z, _230), fp_c1_1._m0[0].y);
    float _243 = 1.0 / (_236 + fma(_160, -_236, _160));
    float _245 = max(fma(_144, _216, fma(_142, _214, _138 * _212)), fp_c1_1._m0[0].y);
    uint _248 = uint(int(uint((((int(uint(_239) >> uint(16)) * 20) << 16) + (((_239 & 65535) * 20) + max(0, min(int(trunc((_210 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _250 = fp_c10_1._m0[int(uint(int(_248)) >> uint(2))][int(_248) & 3];
    float _252 = fma(_182, _178 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _254 = fma(_180, -_182, _180);
    float _256 = (_243 * (1.0 / (_236 + fma(_236, -_241, _241)))) * ((_224 * (1.0 / max(fma(_234, _228, -_234) + 1.0, fp_c1_1._m0[0].y))) * (_224 * (1.0 / max(fma(_234, _228, -_234) + 1.0, fp_c1_1._m0[0].y))));
    float _258 = fma(_176, -_182, _176);
    float _260 = fma(_182, _180 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _262 = exp2(_245 * fma(_245, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _264 = fma(_182, _176 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _266 = fma(_178, -_182, _178);
    float _268 = clamp(fma(_156, -fp_c5_1._m0[23].z, _230), 0.0, 1.0);
    float _270 = fma(_190.x, fma(_264, _186, _188), max(0.0, fma(_220, fp_c5_1._m0[31].x, (fma(_156, fp_c5_1._m0[25].z, fma(_154, fp_c5_1._m0[25].y, _152 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_200, fp_c5_1._m0[28].w, fma(_208, fp_c5_1._m0[28].z, fma(_206, fp_c5_1._m0[28].y, _202 * fp_c5_1._m0[28].x))))) * fma(_264, -_258, _258));
    float _272 = fma(_190.y, fma(_252, _186, _188), max(0.0, fma(_220, fp_c5_1._m0[31].y, (fma(_156, fp_c5_1._m0[26].z, fma(_154, fp_c5_1._m0[26].y, _152 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_200, fp_c5_1._m0[29].w, fma(_208, fp_c5_1._m0[29].z, fma(_206, fp_c5_1._m0[29].y, _202 * fp_c5_1._m0[29].x))))) * fma(_252, -_266, _266));
    float _274 = fma(_190.z, fma(_260, _186, _188), max(0.0, fma(_220, fp_c5_1._m0[31].z, (fma(_156, fp_c5_1._m0[27].z, fma(_154, fp_c5_1._m0[27].y, _152 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_200, fp_c5_1._m0[30].w, fma(_208, fp_c5_1._m0[30].z, fma(_206, fp_c5_1._m0[30].y, _202 * fp_c5_1._m0[30].x))))) * fma(_260, -_254, _254));
    int _276 = floatBitsToInt(_250);
    float _278 = _274;
    float _280 = _270;
    float _282 = _272;
    float _284 = _270;
    float _286 = _274;
    float _288 = _272;
    if (floatBitsToInt(_250) != (-1))
    {
        int _290 = 0;
        float _294;
        float _296;
        float _298;
        int _384;
        do
        {
            int _292 = _276 & 255;
            _294 = _280;
            _296 = _282;
            _298 = _278;
            _302 = uint(_292) >= 30u;
            if (_302)
            {
                break;
            }
            int _304 = _292 << 4;
            uint _306 = uint(int(uint(_304 + 7360) >> uint(2)));
            int _308 = int(_306) + 1;
            uint _310 = uint(int(uint(_304 + 7368) >> uint(2)));
            float _312 = (-_210) + fp_c10_1._m0[int(uint(int(_306)) >> uint(2))][int(_306) & 3];
            float _314 = fp_c10_1._m0[int(uint(_308) >> uint(2))][_308 & 3] + (-_78.y);
            float _316 = (-_218) + fp_c10_1._m0[int(uint(int(_310)) >> uint(2))][int(_310) & 3];
            float _318 = fma(_316, _316, fma(_314, _314, _312 * _312));
            float _320 = _312 * inversesqrt(_318);
            float _322 = _314 * inversesqrt(_318);
            float _324 = _316 * inversesqrt(_318);
            float _326 = _138 + _320;
            float _328 = _142 + _322;
            float _330 = _144 + _324;
            uint _332 = uint(int(uint(_304 + 6880) >> uint(2)));
            int _334 = int(_332) + 1;
            float _336 = inversesqrt(fma(_330, _330, fma(_328, _328, _326 * _326)));
            float _338 = _326 * _336;
            float _340 = _328 * _336;
            float _342 = _330 * _336;
            uint _344 = uint(int(uint(_304 + 8320) >> uint(2)));
            float _346 = max(fma(_144, _342, fma(_142, _340, _138 * _338)), fp_c1_1._m0[0].y);
            float _348 = fma(_156, _324, fma(_154, _322, _152 * _320));
            uint _350 = uint(int(uint(_304 + 6408) >> uint(2)));
            float _352 = max(fma(_156, _342, fma(_154, _340, _152 * _338)), fp_c1_1._m0[0].y) * max(fma(_156, _342, fma(_154, _340, _152 * _338)), fp_c1_1._m0[0].y);
            float _354 = max(_348, fp_c1_1._m0[0].y);
            uint _356 = uint(int(uint(_304 + 6400) >> uint(2)));
            int _358 = int(_356) + 1;
            float _360 = exp2(_346 * fma(_346, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _362 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3]) != 0;
            float _364 = (_243 * (1.0 / (_236 + fma(_236, -_354, _354)))) * ((_224 * (1.0 / max(fma(_228, _352, -_352) + 1.0, fp_c1_1._m0[0].y))) * (_224 * (1.0 / max(fma(_228, _352, -_352) + 1.0, fp_c1_1._m0[0].y))));
            float _366 = _252 + fma(_252, -_360, _360);
            float _368 = _366;
            if (!_362)
            {
                _368 = 1.0;
            }
            float _370 = _368;
            if (_362)
            {
                uint _372 = uint(int(uint(_304 + 7840) >> uint(2)));
                int _374 = int(_372) + 1;
                uint _376 = uint(int(uint(_304 + 6888) >> uint(2)));
                float _378 = fp_c10_1._m0[int(uint(int(_376)) >> uint(2))][int(_376) & 3];
                int _380 = int(_376) + 1;
                uint _382 = uint(int(uint(_304 + 7848) >> uint(2)));
                _370 = exp2(fp_c10_1._m0[int(uint(_380) >> uint(2))][_380 & 3] * log2(clamp(((-_378) + fma(_324, -fp_c10_1._m0[int(uint(int(_382)) >> uint(2))][int(_382) & 3], fma(_322, -fp_c10_1._m0[int(uint(_374) >> uint(2))][_374 & 3], _320 * (-fp_c10_1._m0[int(uint(int(_372)) >> uint(2))][int(_372) & 3])))) * (1.0 / ((-_378) + 1.0)), 0.0, 1.0)));
            }
            _384 = _290 + 1;
            float _386 = (exp2(fp_c10_1._m0[int(uint(_334) >> uint(2))][_334 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_332)) >> uint(2))][int(_332) & 3], -sqrt(_318), fp_c1_1._m0[1].y), 0.0, 1.0))) * _370) * clamp(_348 + (-0.0), 0.0, 1.0);
            float _388 = fma(fp_c10_1._m0[int(uint(int(_350)) >> uint(2))][int(_350) & 3] * _386, fma(_254, fp_c1_1._m0[1].z, ((_260 + fma(_260, -_360, _360)) * _364) * 0.079577468335628509521484375), _278);
            float _390 = fma(fp_c10_1._m0[int(uint(int(_356)) >> uint(2))][int(_356) & 3] * _386, fma(_258, fp_c1_1._m0[1].z, ((_264 + fma(_264, -_360, _360)) * _364) * 0.079577468335628509521484375), _280);
            float _392 = fma(fp_c10_1._m0[int(uint(_358) >> uint(2))][_358 & 3] * _386, fma(_266, fp_c1_1._m0[1].z, (_366 * _364) * 0.079577468335628509521484375), _282);
            _276 = int(uint(_276) >> uint(8));
            _290 = _384;
            _278 = _388;
            _280 = _390;
            _282 = _392;
            _294 = _390;
            _296 = _392;
            _298 = _388;
        } while (!(_384 >= 4));
        _302 = false;
        _284 = _294;
        _286 = _298;
        _288 = _296;
        if ((_276 & 255) == 30)
        {
            float _394 = _78.y;
            float _396 = 1.0 / (fma(_218, fp_c10_1._m0[565].z, fma(_394, fp_c10_1._m0[565].y, _210 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _398 = 1.0 / fp_c10_1._m0[561].y;
            float _400 = _218 + (-fp_c10_1._m0[557].z);
            float _402 = _400 * fp_c10_1._m0[558].x;
            float _404 = (-_210) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_398, fp_c10_1._m0[557].x);
            float _406 = (-_218) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_398, fp_c10_1._m0[557].z);
            float _408 = _404 * _404;
            float _410 = sqrt(fma(_406, _406, _408)) * (-fp_c10_1._m0[558].y);
            float _412 = inversesqrt(fma(_406, _406, fma(_410, _410, _408)));
            float _414 = _404 * _412;
            float _416 = _410 * _412;
            float _418 = _406 * _412;
            float _420 = _138 + _414;
            float _422 = _142 + _416;
            float _424 = _144 + _418;
            float _426 = _210 + (-fp_c10_1._m0[557].x);
            float _428 = fma(_156, _418, fma(_154, _416, _152 * _414));
            float _430 = _426 * fp_c10_1._m0[558].z;
            float _432 = inversesqrt(fma(_424, _424, fma(_422, _422, _420 * _420)));
            float _434 = _420 * _432;
            float _436 = _422 * _432;
            float _438 = _424 * _432;
            float _440 = ((-float(_402 < _430)) + float(_402 > _430)) * fp_c10_1._m0[561].y;
            float _442 = fma(_400, _400, _426 * _426);
            float _444 = inversesqrt(fma(_418, _418, _414 * _414));
            float _446 = fma(_400, fp_c10_1._m0[558].z, _426 * fp_c10_1._m0[558].x);
            float _448 = _414 * _444;
            bool _450 = _446 > 0.0;
            float _452 = _448;
            float _454 = 6.9831600189208984375;
            if (_450)
            {
                _452 = sqrt(_442);
            }
            float _456 = _452;
            if (!_450)
            {
                _456 = 1.0;
            }
            float _458 = max(fma(_144, _438, fma(_142, _436, _138 * _434)), fp_c1_1._m0[0].y);
            float _460 = max(_428, fp_c1_1._m0[0].y);
            bool _462 = fma(_400 * inversesqrt(_442), fp_c10_1._m0[558].z, (_426 * inversesqrt(_442)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _464 = max(fma(_156, _438, fma(_154, _436, _152 * _434)), fp_c1_1._m0[0].y) * max(fma(_156, _438, fma(_154, _436, _152 * _434)), fp_c1_1._m0[0].y);
            float _466 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_426, fma(_440, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_400 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_440 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_426, fma(_440, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_400 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_440 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            if (!_462)
            {
                _454 = 1.0;
            }
            float _468 = clamp(fma(_446 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_446 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _470 = _454;
            if (_462)
            {
                _470 = fma(_466, -_466, fp_c1_1._m0[1].y) * fma(_466, -_466, fp_c1_1._m0[1].y);
            }
            float _472 = exp2(_458 * fma(_458, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _474 = (_243 * (1.0 / (_236 + fma(_236, -_460, _460)))) * ((_224 * (1.0 / max(fma(_228, _464, -_464) + 1.0, fp_c1_1._m0[0].y))) * (_224 * (1.0 / max(fma(_228, _464, -_464) + 1.0, fp_c1_1._m0[0].y))));
            float _476 = (min(fma(_468, -_468, fp_c1_1._m0[1].y) * fma(_468, -_468, fp_c1_1._m0[1].y), _470) * (exp2(log2(clamp(fma(_456, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_418 * _444, -fp_c10_1._m0[558].z, _448 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_428 + (-0.0), 0.0, 1.0);
            float _478 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_218, fp_c10_1._m0[562].z, fma(_394, fp_c10_1._m0[562].y, _210 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _396, 0.5, 0.5), (-fma((fma(_218, fp_c10_1._m0[563].z, fma(_394, fp_c10_1._m0[563].y, _210 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _396, 0.5, 0.5)) + 1.0)).z > fma((fma(_218, fp_c10_1._m0[564].z, fma(_394, fp_c10_1._m0[564].y, _210 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _396, 0.5, 0.5)) || (_446 <= 0.0));
            _284 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _476) * fma(_258, fp_c1_1._m0[1].z, ((_264 + fma(_264, -_472, _472)) * _474) * 0.079577468335628509521484375), _478, _294);
            _286 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _476) * fma(_254, fp_c1_1._m0[1].z, ((_260 + fma(_260, -_472, _472)) * _474) * 0.079577468335628509521484375), _478, _298);
            _288 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _476) * fma(_266, fp_c1_1._m0[1].z, ((_252 + fma(_252, -_472, _472)) * _474) * 0.079577468335628509521484375), _478, _296);
        }
    }
    float _480 = _210 + (-fp_c3_1._m0[11].w);
    float _482 = _78.y;
    float _484 = _218 + (-fp_c3_1._m0[13].w);
    float _486 = _482 + (-fp_c3_1._m0[12].w);
    float _488 = fma(_484, _484, fma(_486, _486, _480 * _480));
    float _490 = clamp(fma(fma(_218, fp_c5_1._m0[14].z, fma(_482, fp_c5_1._m0[14].y, _210 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _492 = fma(_192.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_222, _284, _226 * (fma(_256 * (_264 + fma(_264, -_262, _262)), fp_c1_1._m0[1].x, _258 * 0.3183098733425140380859375) * (_268 * fp_c5_1._m0[5].x))));
    float _494 = fma(_192.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_222, _286, _226 * (fma(_256 * (_260 + fma(_260, -_262, _262)), fp_c1_1._m0[1].x, _254 * 0.3183098733425140380859375) * (_268 * fp_c5_1._m0[5].z))));
    float _496 = clamp(fma(_222 * _226, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _498 = fma(_192.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_222, _288, _226 * (fma(_256 * (_252 + fma(_252, -_262, _262)), fp_c1_1._m0[1].x, _266 * 0.3183098733425140380859375) * (_268 * fp_c5_1._m0[5].y))));
    float _500 = exp2(log2(clamp(sqrt(_488) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_484 * inversesqrt(_488), fp_c5_1._m0[23].z, fma(_486 * inversesqrt(_488), fp_c5_1._m0[23].y, (_480 * inversesqrt(_488)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _502 = fma((-_492) + fp_c5_1._m0[13].x, _490, _492);
    float _504 = fma((-_498) + fp_c5_1._m0[13].y, _490, _498);
    float _506 = fma((-_494) + fp_c5_1._m0[13].z, _490, _494);
    float _508 = clamp((-exp2((clamp(fma(sqrt(_488), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_502) + fma(fma((_500 * fp_c7_1._m0[55].x) * _496, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _508, _502);
    _81.y = fma((-_504) + fma(fma((_500 * fp_c7_1._m0[55].y) * _496, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _508, _504);
    _81.z = fma((-_506) + fma(fma((_500 * fp_c7_1._m0[55].z) * _496, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _508, _506);
    _81.w = 1.0;
}


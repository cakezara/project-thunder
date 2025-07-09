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
layout(binding = 4) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 5) uniform sampler2D fp_tex_tcb_20;
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
    bool _318 = false;
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
    float _130 = fma(_126, _128, fma(_96, _106, _98 * (fma(_122, _110, -(_124 * _108)) * _112)));
    float _132 = fma(_124, _128, fma(_96, _110, _98 * (fma(_126, _108, -(_122 * _106)) * _112)));
    float _134 = fma(_122, _128, fma(_96, _108, _98 * (fma(_124, _106, -(_126 * _110)) * _112)));
    float _136 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _138 = _114 * (-_136);
    float _140 = inversesqrt(fma(_134, _134, fma(_130, _130, _132 * _132)));
    float _142 = _116 * (-_136);
    float _144 = _118 * (-_136);
    float _146 = _132 * _140;
    float _148 = 1.0 / _76.w;
    float _150 = _130 * _140;
    float _152 = 1.0 / (_74.z * gl_FragCoord.w);
    float _154 = _134 * _140;
    float _156 = fma(_154, _144, fma(_150, _142, _146 * _138));
    float _158 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _160 = fma(_146 * (-_156), -2.0, -_138);
    float _162 = fma(_150 * (-_156), -2.0, -_142);
    float _164 = fma(_154 * (-_156), -2.0, -_144);
    float _166 = max(_156, fp_c1_1._m0[0].y);
    float _168 = 1.0 / max(abs(_164), max(abs(_160), abs(_162)));
    vec2 _170 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _148, 0.5, 0.5), fma(_76.y * _148, -0.5, 0.5))).xy;
    vec3 _174 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _176 = _174.x;
    float _178 = _174.y;
    float _180 = _174.z;
    float _182 = texture(fp_tex_tcb_12, vec2(_88, _90)).x;
    vec2 _184 = texture(fp_tex_tcb_38, vec2(_166, (-_158) + (-0.0))).xy;
    float _186 = _184.x;
    float _188 = _184.y;
    vec3 _190 = texture(fp_tex_tcb_36, vec4(_160 * _168, _162 * _168, _164 * _168, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_158 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _192 = _138 + (-fp_c5_1._m0[23].x);
    float _194 = _78.z;
    float _196 = _142 + (-fp_c5_1._m0[23].y);
    float _198 = _78.x;
    float _200 = _144 + (-fp_c5_1._m0[23].z);
    float _202 = inversesqrt(fma(_200, _200, fma(_196, _196, _192 * _192)));
    float _204 = _146 * _150;
    float _206 = _192 * _202;
    float _208 = _196 * _202;
    float _210 = _200 * _202;
    float _212 = _150 * _154;
    float _214 = _154 * _154;
    float _216 = _146 * _154;
    float _218 = fma(_146, _146, -(_150 * _150));
    int _221 = max(0, min(int(trunc((_194 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _223 = max(fma(_144, _210, fma(_142, _208, _138 * _206)), fp_c1_1._m0[0].y);
    uint _226 = uint(int(uint((((int(uint(_221) >> uint(16)) * 20) << 16) + (((_221 & 65535) * 20) + max(0, min(int(trunc((_198 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _228 = fp_c10_1._m0[int(uint(int(_226)) >> uint(2))][int(_226) & 3];
    float _230 = (-_170.y) + 1.0;
    float _232 = clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _234 = _230 * _232;
    float _236 = _158 * _158;
    float _238 = fma(_150, -fp_c5_1._m0[23].y, _146 * (-fp_c5_1._m0[23].x));
    float _240 = max(fma(_154, _210, fma(_150, _208, _146 * _206)), fp_c1_1._m0[0].y) * max(fma(_154, _210, fma(_150, _208, _146 * _206)), fp_c1_1._m0[0].y);
    float _242 = fma(_158, 0.5, 0.5);
    float _244 = clamp((-fma(max(_230, (-_170.x) + 1.0), _232, fma(texture(fp_tex_tcb_28, vec2((_74.x * gl_FragCoord.w) * _152, (_74.y * gl_FragCoord.w) * _152)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _246 = (_242 * 0.5) * _242;
    float _248 = _178 * fp_c6_1._m0[19].y;
    float _250 = exp2(_223 * fma(_223, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _252 = max(fma(_154, -fp_c5_1._m0[23].z, _238), fp_c1_1._m0[0].y);
    float _254 = texture(fp_tex_tcb_1A, vec2(_88, _90)).x * fp_c6_1._m0[17].w;
    float _256 = (-texture(fp_tex_tcb_20, vec2(_88, _90)).x) + 1.0;
    float _258 = fma(_176, -_182, _176);
    float _260 = fma(_176 + (-0.039999999105930328369140625), _182, fp_c1_1._m0[0].z);
    float _262 = 1.0 / (_246 + fma(_166, -_246, _166));
    float _264 = fma(_178 + (-0.039999999105930328369140625), _182, fp_c1_1._m0[0].z);
    float _266 = fma(_180, -_182, _180);
    float _268 = fma(_180 + (-0.039999999105930328369140625), _182, fp_c1_1._m0[0].z);
    float _270 = _180 * fp_c6_1._m0[19].z;
    float _272 = fma(_178, -_182, _178);
    float _274 = (_262 * (1.0 / (_246 + fma(_246, -_252, _252)))) * ((_236 * (1.0 / max(fma(_240, _236 * _236, -_240) + 1.0, fp_c1_1._m0[0].y))) * (_236 * (1.0 / max(fma(_240, _236 * _236, -_240) + 1.0, fp_c1_1._m0[0].y))));
    float _276 = clamp(fma(_154, -fp_c5_1._m0[23].z, _238), 0.0, 1.0);
    float _278 = fma(_190.y, fma(_264, _186, _188), max(0.0, fma(_218, fp_c5_1._m0[31].y, (fma(_154, fp_c5_1._m0[26].z, fma(_150, fp_c5_1._m0[26].y, _146 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_216, fp_c5_1._m0[29].w, fma(_214, fp_c5_1._m0[29].z, fma(_212, fp_c5_1._m0[29].y, _204 * fp_c5_1._m0[29].x))))) * fma(_272, -_264, _272));
    float _280 = fma(_190.x, fma(_260, _186, _188), max(0.0, fma(_218, fp_c5_1._m0[31].x, (fma(_154, fp_c5_1._m0[25].z, fma(_150, fp_c5_1._m0[25].y, _146 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_216, fp_c5_1._m0[28].w, fma(_214, fp_c5_1._m0[28].z, fma(_212, fp_c5_1._m0[28].y, _204 * fp_c5_1._m0[28].x))))) * fma(_258, -_260, _258));
    float _282 = fma(_190.z, fma(_268, _186, _188), max(0.0, fma(_218, fp_c5_1._m0[31].z, (fma(_154, fp_c5_1._m0[27].z, fma(_150, fp_c5_1._m0[27].y, _146 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_216, fp_c5_1._m0[30].w, fma(_214, fp_c5_1._m0[30].z, fma(_212, fp_c5_1._m0[30].y, _204 * fp_c5_1._m0[30].x))))) * fma(_266, -_268, _266));
    float _284 = _176 * fp_c6_1._m0[19].x;
    int _286 = floatBitsToInt(_228);
    float _288 = _280;
    float _290 = _278;
    float _292 = _282;
    float _294 = _280;
    float _296 = _278;
    float _298 = _282;
    if (floatBitsToInt(_228) != (-1))
    {
        float _300 = 1.0 / fp_c6_1._m0[18].x;
        float _302 = clamp(fma(_234, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _304 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
        int _306 = 0;
        float _310;
        float _312;
        float _314;
        int _404;
        do
        {
            int _308 = _286 & 255;
            _310 = _288;
            _312 = _290;
            _314 = _292;
            _318 = uint(_308) >= 30u;
            if (_318)
            {
                break;
            }
            int _320 = _308 << 4;
            uint _322 = uint(int(uint(_320 + 7360) >> uint(2)));
            int _324 = int(_322) + 1;
            uint _326 = uint(int(uint(_320 + 7368) >> uint(2)));
            float _328 = (-_198) + fp_c10_1._m0[int(uint(int(_322)) >> uint(2))][int(_322) & 3];
            float _330 = fp_c10_1._m0[int(uint(_324) >> uint(2))][_324 & 3] + (-_78.y);
            float _332 = (-_194) + fp_c10_1._m0[int(uint(int(_326)) >> uint(2))][int(_326) & 3];
            float _334 = fma(_332, _332, fma(_330, _330, _328 * _328));
            float _336 = _328 * inversesqrt(_334);
            float _338 = _330 * inversesqrt(_334);
            float _340 = _332 * inversesqrt(_334);
            float _342 = _138 + _336;
            float _344 = _142 + _338;
            float _346 = _144 + _340;
            float _348 = inversesqrt(fma(_346, _346, fma(_344, _344, _342 * _342)));
            float _350 = _342 * _348;
            float _352 = _344 * _348;
            float _354 = _346 * _348;
            uint _356 = uint(int(uint(_320 + 6880) >> uint(2)));
            int _358 = int(_356) + 1;
            uint _360 = uint(int(uint(_320 + 8320) >> uint(2)));
            float _362 = max(fma(_144, _354, fma(_142, _352, _138 * _350)), fp_c1_1._m0[0].y);
            float _364 = max(fma(_154, _354, fma(_150, _352, _146 * _350)), fp_c1_1._m0[0].y) * max(fma(_154, _354, fma(_150, _352, _146 * _350)), fp_c1_1._m0[0].y);
            float _366 = fma(_154, _340, fma(_150, _338, _146 * _336));
            float _368 = max(_366, fp_c1_1._m0[0].y);
            float _370 = exp2(_362 * fma(_362, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _372 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3]) != 0;
            float _374 = (_262 * (1.0 / (_246 + fma(_246, -_368, _368)))) * ((_236 * (1.0 / max(fma(_236 * _236, _364, -_364) + 1.0, fp_c1_1._m0[0].y))) * (_236 * (1.0 / max(fma(_236 * _236, _364, -_364) + 1.0, fp_c1_1._m0[0].y))));
            uint _376 = uint(int(uint(_320 + 6408) >> uint(2)));
            int _378 = int(_376) + 1;
            float _380 = _268 + fma(_268, -_370, _370);
            uint _382 = uint(int(uint(_320 + 6400) >> uint(2)));
            int _384 = int(_382) + 1;
            float _386 = _380;
            if (!_372)
            {
                _386 = 1.0;
            }
            float _388 = _386;
            if (_372)
            {
                uint _390 = uint(int(uint(_320 + 7840) >> uint(2)));
                int _392 = int(_390) + 1;
                uint _394 = uint(int(uint(_320 + 7848) >> uint(2)));
                uint _396 = uint(int(uint(_320 + 6888) >> uint(2)));
                float _398 = fp_c10_1._m0[int(uint(int(_396)) >> uint(2))][int(_396) & 3];
                int _400 = int(_396) + 1;
                _388 = exp2(fp_c10_1._m0[int(uint(_400) >> uint(2))][_400 & 3] * log2(clamp(((-_398) + fma(_340, -fp_c10_1._m0[int(uint(int(_394)) >> uint(2))][int(_394) & 3], fma(_338, -fp_c10_1._m0[int(uint(_392) >> uint(2))][_392 & 3], _336 * (-fp_c10_1._m0[int(uint(int(_390)) >> uint(2))][int(_390) & 3])))) * (1.0 / ((-_398) + 1.0)), 0.0, 1.0)));
            }
            float _402 = exp2(fp_c10_1._m0[int(uint(_358) >> uint(2))][_358 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_356)) >> uint(2))][int(_356) & 3], -sqrt(_334), fp_c1_1._m0[1].y), 0.0, 1.0))) * _388;
            _404 = _306 + 1;
            float _406 = clamp(_366 + (-0.0), 0.0, 1.0) * _402;
            float _408 = fp_c10_1._m0[int(uint(_378) >> uint(2))][_378 & 3] * _402;
            float _410 = _256 * (fma(_304, fp_c1_1._m0[1].w, exp2(_300 * log2(clamp(max(fma(_144, -_340, fma(_142, -_338, _138 * (-_336))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0))) * _304) + 0.20000000298023223876953125);
            float _412 = clamp((-_254) + 1.0, 0.0, 1.0);
            float _414 = _288 + fma((fp_c10_1._m0[int(uint(int(_382)) >> uint(2))][int(_382) & 3] * _406) * fma(_258, fp_c1_1._m0[2].x, ((_260 + fma(_260, -_370, _370)) * _374) * 0.079577468335628509521484375), _412, _302 * (_254 * ((_284 * _408) * _410)));
            float _416 = _290 + fma((fp_c10_1._m0[int(uint(_384) >> uint(2))][_384 & 3] * _406) * fma(_272, fp_c1_1._m0[2].x, ((_264 + fma(_264, -_370, _370)) * _374) * 0.079577468335628509521484375), _412, _302 * (_254 * ((_248 * _408) * _410)));
            float _418 = _292 + fma((fp_c10_1._m0[int(uint(int(_376)) >> uint(2))][int(_376) & 3] * _406) * fma(_266, fp_c1_1._m0[2].x, (_380 * _374) * 0.079577468335628509521484375), _412, _302 * (_254 * ((_270 * _408) * _410)));
            _286 = int(uint(_286) >> uint(8));
            _306 = _404;
            _288 = _414;
            _290 = _416;
            _292 = _418;
            _310 = _414;
            _312 = _416;
            _314 = _418;
        } while (!(_404 >= 4));
        _318 = false;
        _294 = _310;
        _296 = _312;
        _298 = _314;
        if ((_286 & 255) == 30)
        {
            float _420 = _78.y;
            float _422 = 1.0 / (fma(_194, fp_c10_1._m0[565].z, fma(_420, fp_c10_1._m0[565].y, _198 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _424 = _198 + (-fp_c10_1._m0[557].x);
            float _426 = _194 + (-fp_c10_1._m0[557].z);
            float _428 = _424 * fp_c10_1._m0[558].z;
            float _430 = _426 * fp_c10_1._m0[558].x;
            float _432 = fma(_426, _426, _424 * _424);
            float _434 = 1.0 / fp_c10_1._m0[561].y;
            float _436 = ((-float(_430 < _428)) + float(_430 > _428)) * fp_c10_1._m0[561].y;
            float _438 = (-_194) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_434, fp_c10_1._m0[557].z);
            float _440 = (-_198) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_434, fp_c10_1._m0[557].x);
            float _442 = _440 * _440;
            float _444 = fma(_426, fp_c10_1._m0[558].z, _424 * fp_c10_1._m0[558].x);
            float _446 = sqrt(fma(_438, _438, _442)) * (-fp_c10_1._m0[558].y);
            bool _448 = _444 > 0.0;
            float _450 = inversesqrt(fma(_438, _438, fma(_446, _446, _442)));
            float _452 = _440 * _450;
            float _454 = _446 * _450;
            float _456 = _438 * _450;
            float _458 = _138 + _452;
            float _460 = _142 + _454;
            float _462 = _144 + _456;
            float _464 = inversesqrt(fma(_462, _462, fma(_460, _460, _458 * _458)));
            float _466 = inversesqrt(fma(_456, _456, _452 * _452));
            float _468 = _458 * _464;
            float _470 = _462 * _464;
            float _472 = _460 * _464;
            float _474 = fma(_154, _456, fma(_150, _454, _146 * _452));
            float _476 = _456;
            if (_448)
            {
                _476 = sqrt(_432);
            }
            float _478 = _476;
            if (!_448)
            {
                _478 = 1.0;
            }
            float _480 = max(_474, fp_c1_1._m0[0].y);
            float _482 = max(fma(_154, _470, fma(_150, _472, _146 * _468)), fp_c1_1._m0[0].y) * max(fma(_154, _470, fma(_150, _472, _146 * _468)), fp_c1_1._m0[0].y);
            float _484 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_424, fma(_436, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_426 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_436 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_424, fma(_436, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_426 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_436 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _486 = max(fma(_144, _470, fma(_142, _472, _138 * _468)), fp_c1_1._m0[0].y);
            float _488 = clamp(fma(_444 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_444 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _490 = fma(_484, -_484, fp_c1_1._m0[1].y) * fma(_484, -_484, fp_c1_1._m0[1].y);
            if (!(fma(_426 * inversesqrt(_432), fp_c10_1._m0[558].z, (_424 * inversesqrt(_432)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z))
            {
                _490 = 1.0;
            }
            float _492 = exp2(_486 * fma(_486, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _494 = (exp2(log2(clamp(fma(_478, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_456 * _466, -fp_c10_1._m0[558].z, (_452 * _466) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_488, -_488, fp_c1_1._m0[1].y) * fma(_488, -_488, fp_c1_1._m0[1].y), _490);
            float _496 = _494 * clamp(_474 + (-0.0), 0.0, 1.0);
            float _498 = (_262 * (1.0 / (_246 + fma(_246, -_480, _480)))) * ((_236 * (1.0 / max(fma(_236 * _236, _482, -_482) + 1.0, fp_c1_1._m0[0].y))) * (_236 * (1.0 / max(fma(_236 * _236, _482, -_482) + 1.0, fp_c1_1._m0[0].y))));
            float _500 = _256 * (fma(_304, fp_c1_1._m0[1].w, _304 * exp2(_300 * log2(clamp(max(fma(_144, -_456, fma(_142, -_454, _138 * (-_452))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
            float _502 = clamp((-_254) + 1.0, 0.0, 1.0);
            float _504 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_194, fp_c10_1._m0[562].z, fma(_420, fp_c10_1._m0[562].y, _198 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _422, 0.5, 0.5), (-fma((fma(_194, fp_c10_1._m0[563].z, fma(_420, fp_c10_1._m0[563].y, _198 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _422, 0.5, 0.5)) + 1.0)).z > fma((fma(_194, fp_c10_1._m0[564].z, fma(_420, fp_c10_1._m0[564].y, _198 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _422, 0.5, 0.5)) || (_444 <= 0.0));
            _294 = fma(fma(_502, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _496) * fma(_258, fp_c1_1._m0[2].x, (_498 * (_260 + fma(_260, -_492, _492))) * 0.079577468335628509521484375), _302 * (_254 * (_500 * (_284 * _494)))), _504, _310);
            _296 = fma(fma(_502, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _496) * fma(_272, fp_c1_1._m0[2].x, (_498 * (_264 + fma(_264, -_492, _492))) * 0.079577468335628509521484375), _302 * (_254 * (_500 * (_248 * _494)))), _504, _312);
            _298 = fma(fma(_502, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _496) * fma(_266, fp_c1_1._m0[2].x, (_498 * (_268 + fma(_268, -_492, _492))) * 0.079577468335628509521484375), _302 * (_254 * (_500 * (_270 * _494)))), _504, _314);
        }
    }
    float _506 = _78.y;
    float _508 = _198 + (-fp_c3_1._m0[11].w);
    float _510 = _194 + (-fp_c3_1._m0[13].w);
    float _512 = clamp((-_254) + 1.0, 0.0, 1.0);
    float _514 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
    float _516 = _506 + (-fp_c3_1._m0[12].w);
    float _518 = fma(_510, _510, fma(_516, _516, _508 * _508));
    float _520 = clamp(fma(_234, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _522 = clamp(fma(_244, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _524 = _256 * (fma(_514, fp_c1_1._m0[1].w, _514 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_144, fp_c5_1._m0[23].z, fma(_142, fp_c5_1._m0[23].y, _138 * fp_c5_1._m0[23].x)), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _526 = exp2(log2(clamp(sqrt(_518) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_510 * inversesqrt(_518), fp_c5_1._m0[23].z, fma(_516 * inversesqrt(_518), fp_c5_1._m0[23].y, (_508 * inversesqrt(_518)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _528 = fma(_244, _512 * (fma((_260 + fma(_260, -_250, _250)) * _274, fp_c1_1._m0[1].x, _258 * 0.3183098733425140380859375) * (_276 * fp_c5_1._m0[5].x)), _520 * (_254 * (_524 * (_284 * fp_c5_1._m0[5].w)))) + _294;
    float _530 = fma(_244, _512 * (fma((_264 + fma(_264, -_250, _250)) * _274, fp_c1_1._m0[1].x, _272 * 0.3183098733425140380859375) * (_276 * fp_c5_1._m0[5].y)), _520 * (_254 * (_524 * (_248 * fp_c5_1._m0[5].w)))) + _296;
    float _532 = fma(_244, _512 * (fma((_268 + fma(_268, -_250, _250)) * _274, fp_c1_1._m0[1].x, _266 * 0.3183098733425140380859375) * (_276 * fp_c5_1._m0[5].z)), _520 * (_254 * (_524 * (_270 * fp_c5_1._m0[5].w)))) + _298;
    float _534 = clamp(fma(fma(_194, fp_c5_1._m0[14].z, fma(_506, fp_c5_1._m0[14].y, _198 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _536 = fma((-_528) + fp_c5_1._m0[13].x, _534, _528);
    float _538 = fma((-_530) + fp_c5_1._m0[13].y, _534, _530);
    float _540 = fma((-_532) + fp_c5_1._m0[13].z, _534, _532);
    float _542 = clamp((-exp2((clamp(fma(sqrt(_518), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_536) + fma(fma((_526 * fp_c7_1._m0[55].x) * _522, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _542, _536);
    _81.y = fma((-_538) + fma(fma((_526 * fp_c7_1._m0[55].y) * _522, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _542, _538);
    _81.z = fma((-_540) + fma(fma((_526 * fp_c7_1._m0[55].z) * _522, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _542, _540);
    _81.w = 1.0;
}


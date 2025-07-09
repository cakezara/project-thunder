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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_14;
layout(binding = 3) uniform sampler2D fp_tex_tcb_28;
layout(binding = 4) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 5) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 6) uniform sampler2D fp_tex_tcb_38;
layout(binding = 7) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _60;
layout(location = 5) in vec4 _62;
layout(location = 0) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 2) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 3) in vec4 _72;
layout(location = 0) out vec4 _75;
uint _6[12];

void main()
{
    bool _294 = false;
    float _82 = 1.0 / (_60.z * gl_FragCoord.w);
    float _84 = _64.x;
    float _86 = _64.y;
    float _88 = 1.0 / _62.w;
    vec2 _92 = texture(fp_tex_tcb_E, vec2(_84, _86)).xy;
    float _94 = _92.x;
    float _96 = _92.y;
    vec2 _98 = texture(fp_tex_tcb_2A, vec2(fma(_62.x * _88, 0.5, 0.5), fma(_62.y * _88, -0.5, 0.5))).xy;
    vec3 _102 = texture(fp_tex_tcb_A, vec2(_84, _86)).xyz;
    float _104 = _102.x;
    float _106 = _102.y;
    float _108 = _102.z;
    float _110 = _66.x;
    float _112 = _66.y;
    float _114 = _66.z;
    float _116 = _68.y;
    float _118 = _68.z;
    float _120 = _68.x;
    float _122 = _68.w;
    float _124 = _70.y;
    float _126 = _70.z;
    float _128 = inversesqrt(fma(_114, _114, fma(_112, _112, _110 * _110)));
    float _130 = _114 * _128;
    float _132 = _110 * _128;
    float _134 = _112 * _128;
    float _136 = _70.x;
    float _138 = sqrt(clamp((-fma(_94, _94, _96 * _96)) + 1.0, 0.0, 1.0));
    float _140 = fma(_132, _138, fma(_94, _120, _96 * (fma(_134, _118, -(_130 * _116)) * _122)));
    float _142 = fma(_134, _138, fma(_94, _116, _96 * (fma(_130, _120, -(_132 * _118)) * _122)));
    float _144 = fma(_130, _138, fma(_94, _118, _96 * (fma(_132, _116, -(_134 * _120)) * _122)));
    float _146 = inversesqrt(fma(_126, _126, fma(_124, _124, _136 * _136)));
    float _148 = inversesqrt(fma(_144, _144, fma(_142, _142, _140 * _140)));
    float _150 = _136 * (-_146);
    float _152 = _124 * (-_146);
    float _154 = _140 * _148;
    float _156 = _142 * _148;
    float _158 = _126 * (-_146);
    float _160 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _162 = _144 * _148;
    float _164 = fma(_162, _158, fma(_156, _152, _154 * _150));
    float _166 = max(_164, fp_c1_1._m0[0].y);
    float _168 = fma(_154 * (-_164), -2.0, -_150);
    float _170 = fma(_156 * (-_164), -2.0, -_152);
    float _172 = fma(_162 * (-_164), -2.0, -_158);
    float _174 = 1.0 / max(abs(_172), max(abs(_168), abs(_170)));
    vec2 _176 = texture(fp_tex_tcb_38, vec2(_166, (-_160) + (-0.0))).xy;
    float _178 = _176.x;
    float _180 = _176.y;
    vec3 _182 = texture(fp_tex_tcb_36, vec4(_168 * _174, _170 * _174, _172 * _174, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_160 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _184 = texture(fp_tex_tcb_14, vec2(_84, _86)).xyz;
    float _186 = _150 + (-fp_c5_1._m0[23].x);
    float _188 = _72.x;
    float _190 = _152 + (-fp_c5_1._m0[23].y);
    float _192 = _158 + (-fp_c5_1._m0[23].z);
    float _194 = fma(_160, 0.5, 0.5);
    float _196 = _160 * _160;
    float _198 = _154 * _156;
    float _200 = _72.z;
    float _202 = inversesqrt(fma(_192, _192, fma(_190, _190, _186 * _186)));
    float _204 = _186 * _202;
    float _206 = _190 * _202;
    float _208 = _192 * _202;
    float _210 = _156 * _162;
    float _212 = _162 * _162;
    float _214 = _154 * _162;
    float _216 = _196 * _196;
    float _218 = fma(_156, -fp_c5_1._m0[23].y, _154 * (-fp_c5_1._m0[23].x));
    float _220 = max(fma(_162, _208, fma(_156, _206, _154 * _204)), fp_c1_1._m0[0].y) * max(fma(_162, _208, fma(_156, _206, _154 * _204)), fp_c1_1._m0[0].y);
    float _222 = (_194 * 0.5) * _194;
    float _224 = max(fma(_162, -fp_c5_1._m0[23].z, _218), fp_c1_1._m0[0].y);
    int _227 = max(0, min(int(trunc((_200 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _229 = 1.0 / (_222 + fma(_166, -_222, _166));
    float _231 = max(fma(_158, _208, fma(_152, _206, _150 * _204)), fp_c1_1._m0[0].y);
    float _233 = clamp(fma(_162, -fp_c5_1._m0[23].z, _218), 0.0, 1.0);
    uint _236 = uint(int(uint((((int(uint(_227) >> uint(16)) * 20) << 16) + (((_227 & 65535) * 20) + max(0, min(int(trunc((_188 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _238 = fp_c10_1._m0[int(uint(int(_236)) >> uint(2))][int(_236) & 3];
    float _240 = fma(_154, _154, -(_156 * _156));
    float _242 = (_229 * (1.0 / (_222 + fma(_222, -_224, _224)))) * ((_196 * (1.0 / max(fma(_220, _216, -_220) + 1.0, fp_c1_1._m0[0].y))) * (_196 * (1.0 / max(fma(_220, _216, -_220) + 1.0, fp_c1_1._m0[0].y))));
    float _244 = fma(_104, -fp_c6_1._m0[9].x, _104);
    float _246 = exp2(_231 * fma(_231, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _248 = fma(_104 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _250 = fma(_106, -fp_c6_1._m0[9].x, _106);
    float _252 = fma(_106 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _254 = fma(_108 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _256 = fma(_108, -fp_c6_1._m0[9].x, _108);
    float _258 = clamp((-fma(max((-_98.x) + 1.0, (-_98.y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_60.x * gl_FragCoord.w) * _82, (_60.y * gl_FragCoord.w) * _82)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _260 = fma(_182.x, fma(_248, _178, _180), max(0.0, fma(_240, fp_c5_1._m0[31].x, (fma(_162, fp_c5_1._m0[25].z, fma(_156, fp_c5_1._m0[25].y, _154 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_214, fp_c5_1._m0[28].w, fma(_212, fp_c5_1._m0[28].z, fma(_210, fp_c5_1._m0[28].y, _198 * fp_c5_1._m0[28].x))))) * fma(_244, -_248, _244));
    float _262 = fma(_182.y, fma(_252, _178, _180), max(0.0, fma(_240, fp_c5_1._m0[31].y, (fma(_162, fp_c5_1._m0[26].z, fma(_156, fp_c5_1._m0[26].y, _154 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_214, fp_c5_1._m0[29].w, fma(_212, fp_c5_1._m0[29].z, fma(_210, fp_c5_1._m0[29].y, _198 * fp_c5_1._m0[29].x))))) * fma(_250, -_252, _250));
    float _264 = fma(_182.z, fma(_254, _178, _180), max(0.0, fma(_240, fp_c5_1._m0[31].z, (fma(_162, fp_c5_1._m0[27].z, fma(_156, fp_c5_1._m0[27].y, _154 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_214, fp_c5_1._m0[30].w, fma(_212, fp_c5_1._m0[30].z, fma(_210, fp_c5_1._m0[30].y, _198 * fp_c5_1._m0[30].x))))) * fma(_256, -_254, _256));
    int _266 = floatBitsToInt(_238);
    float _268 = _262;
    float _270 = _260;
    float _272 = _264;
    float _274 = _154;
    float _276 = _260;
    float _278 = _262;
    float _280 = _264;
    if (floatBitsToInt(_238) != (-1))
    {
        int _282 = 0;
        float _286;
        float _288;
        float _290;
        int _376;
        do
        {
            int _284 = _266 & 255;
            _286 = _270;
            _288 = _268;
            _290 = _272;
            _294 = uint(_284) >= 30u;
            if (_294)
            {
                break;
            }
            int _296 = _284 << 4;
            uint _298 = uint(int(uint(_296 + 7360) >> uint(2)));
            int _300 = int(_298) + 1;
            uint _302 = uint(int(uint(_296 + 7368) >> uint(2)));
            float _304 = (-_188) + fp_c10_1._m0[int(uint(int(_298)) >> uint(2))][int(_298) & 3];
            float _306 = fp_c10_1._m0[int(uint(_300) >> uint(2))][_300 & 3] + (-_72.y);
            float _308 = (-_200) + fp_c10_1._m0[int(uint(int(_302)) >> uint(2))][int(_302) & 3];
            float _310 = fma(_308, _308, fma(_306, _306, _304 * _304));
            float _312 = _304 * inversesqrt(_310);
            float _314 = _306 * inversesqrt(_310);
            float _316 = _308 * inversesqrt(_310);
            float _318 = _150 + _312;
            float _320 = _152 + _314;
            float _322 = _158 + _316;
            float _324 = inversesqrt(fma(_322, _322, fma(_320, _320, _318 * _318)));
            float _326 = _318 * _324;
            float _328 = _320 * _324;
            float _330 = _322 * _324;
            uint _332 = uint(int(uint(_296 + 6880) >> uint(2)));
            int _334 = int(_332) + 1;
            uint _336 = uint(int(uint(_296 + 8320) >> uint(2)));
            uint _338 = uint(int(uint(_296 + 6408) >> uint(2)));
            float _340 = max(fma(_158, _330, fma(_152, _328, _150 * _326)), fp_c1_1._m0[0].y);
            float _342 = fma(_162, _316, fma(_156, _314, _154 * _312));
            float _344 = max(fma(_162, _330, fma(_156, _328, _154 * _326)), fp_c1_1._m0[0].y) * max(fma(_162, _330, fma(_156, _328, _154 * _326)), fp_c1_1._m0[0].y);
            float _346 = max(_342, fp_c1_1._m0[0].y);
            uint _348 = uint(int(uint(_296 + 6400) >> uint(2)));
            int _350 = int(_348) + 1;
            float _352 = exp2(_340 * fma(_340, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _354 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_336)) >> uint(2))][int(_336) & 3]) != 0;
            float _356 = (_229 * (1.0 / (_222 + fma(_222, -_346, _346)))) * ((_196 * (1.0 / max(fma(_216, _344, -_344) + 1.0, fp_c1_1._m0[0].y))) * (_196 * (1.0 / max(fma(_216, _344, -_344) + 1.0, fp_c1_1._m0[0].y))));
            float _358 = _254 + fma(_254, -_352, _352);
            float _360 = _358;
            if (!_354)
            {
                _360 = 1.0;
            }
            float _362 = _360;
            if (_354)
            {
                uint _364 = uint(int(uint(_296 + 7840) >> uint(2)));
                int _366 = int(_364) + 1;
                uint _368 = uint(int(uint(_296 + 6888) >> uint(2)));
                float _370 = fp_c10_1._m0[int(uint(int(_368)) >> uint(2))][int(_368) & 3];
                int _372 = int(_368) + 1;
                uint _374 = uint(int(uint(_296 + 7848) >> uint(2)));
                _362 = exp2(fp_c10_1._m0[int(uint(_372) >> uint(2))][_372 & 3] * log2(clamp(((-_370) + fma(_316, -fp_c10_1._m0[int(uint(int(_374)) >> uint(2))][int(_374) & 3], fma(_314, -fp_c10_1._m0[int(uint(_366) >> uint(2))][_366 & 3], _312 * (-fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3])))) * (1.0 / ((-_370) + 1.0)), 0.0, 1.0)));
            }
            _376 = _282 + 1;
            float _378 = (exp2(fp_c10_1._m0[int(uint(_334) >> uint(2))][_334 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_332)) >> uint(2))][int(_332) & 3], -sqrt(_310), fp_c1_1._m0[1].x), 0.0, 1.0))) * _362) * clamp(_342 + (-0.0), 0.0, 1.0);
            float _380 = fma(fp_c10_1._m0[int(uint(_350) >> uint(2))][_350 & 3] * _378, fma(_250, fp_c1_1._m0[1].y, ((_252 + fma(_252, -_352, _352)) * _356) * 0.079577468335628509521484375), _268);
            float _382 = fma(fp_c10_1._m0[int(uint(int(_348)) >> uint(2))][int(_348) & 3] * _378, fma(_244, fp_c1_1._m0[1].y, ((_248 + fma(_248, -_352, _352)) * _356) * 0.079577468335628509521484375), _270);
            float _384 = fma(fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3] * _378, fma(_256, fp_c1_1._m0[1].y, (_358 * _356) * 0.079577468335628509521484375), _272);
            _266 = int(uint(_266) >> uint(8));
            _282 = _376;
            _268 = _380;
            _270 = _382;
            _272 = _384;
            _286 = _382;
            _288 = _380;
            _290 = _384;
        } while (!(_376 >= 4));
        _294 = false;
        _276 = _286;
        _278 = _288;
        _280 = _290;
        if ((_266 & 255) == 30)
        {
            float _386 = _72.y;
            float _388 = 1.0 / (fma(_200, fp_c10_1._m0[565].z, fma(_386, fp_c10_1._m0[565].y, _188 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _390 = 1.0 / fp_c10_1._m0[561].y;
            float _392 = _200 + (-fp_c10_1._m0[557].z);
            float _394 = _188 + (-fp_c10_1._m0[557].x);
            float _396 = (-_188) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_390, fp_c10_1._m0[557].x);
            float _398 = (-_200) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_390, fp_c10_1._m0[557].z);
            float _400 = _394 * fp_c10_1._m0[558].z;
            float _402 = _392 * fp_c10_1._m0[558].x;
            float _404 = _396 * _396;
            float _406 = fma(_392, _392, _394 * _394);
            float _408 = sqrt(fma(_398, _398, _404)) * (-fp_c10_1._m0[558].y);
            float _410 = ((-float(_402 < _400)) + float(_402 > _400)) * fp_c10_1._m0[561].y;
            float _412 = inversesqrt(fma(_398, _398, fma(_408, _408, _404)));
            float _414 = _396 * _412;
            float _416 = _408 * _412;
            float _418 = fma(_392, fp_c10_1._m0[558].z, _394 * fp_c10_1._m0[558].x);
            float _420 = _398 * _412;
            float _422 = _150 + _414;
            float _424 = _152 + _416;
            bool _426 = _418 > 0.0;
            float _428 = inversesqrt(fma(_420, _420, _414 * _414));
            float _430 = _158 + _420;
            float _432 = fma(_162, _420, fma(_156, _416, _154 * _414));
            float _434 = inversesqrt(fma(_430, _430, fma(_424, _424, _422 * _422)));
            float _436 = _422 * _434;
            float _438 = _430 * _434;
            float _440 = _424 * _434;
            if (_426)
            {
                _274 = sqrt(_406);
            }
            float _442 = _274;
            if (!_426)
            {
                _442 = 1.0;
            }
            bool _444 = fma(_392 * inversesqrt(_406), fp_c10_1._m0[558].z, (_394 * inversesqrt(_406)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _446 = max(_432, fp_c1_1._m0[0].y);
            float _448 = max(fma(_158, _438, fma(_152, _440, _150 * _436)), fp_c1_1._m0[0].y);
            float _450 = max(fma(_162, _438, fma(_156, _440, _154 * _436)), fp_c1_1._m0[0].y) * max(fma(_162, _438, fma(_156, _440, _154 * _436)), fp_c1_1._m0[0].y);
            float _452 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_394, fma(_410, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_392 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_410 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_394, fma(_410, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_392 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_410 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _454 = clamp(fma(_418 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_418 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _456 = 6.9831600189208984375;
            if (_444)
            {
                _456 = fma(_452, -_452, fp_c1_1._m0[1].x) * fma(_452, -_452, fp_c1_1._m0[1].x);
            }
            float _458 = _456;
            if (!_444)
            {
                _458 = 1.0;
            }
            float _460 = exp2(_448 * fma(_448, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _462 = (_229 * (1.0 / (_222 + fma(_222, -_446, _446)))) * ((_196 * (1.0 / max(fma(_216, _450, -_450) + 1.0, fp_c1_1._m0[0].y))) * (_196 * (1.0 / max(fma(_216, _450, -_450) + 1.0, fp_c1_1._m0[0].y))));
            float _464 = (min(fma(_454, -_454, fp_c1_1._m0[1].x) * fma(_454, -_454, fp_c1_1._m0[1].x), _458) * (exp2(log2(clamp(fma(_442, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_420 * _428, -fp_c10_1._m0[558].z, (_414 * _428) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_432 + (-0.0), 0.0, 1.0);
            float _466 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_200, fp_c10_1._m0[562].z, fma(_386, fp_c10_1._m0[562].y, _188 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _388, 0.5, 0.5), (-fma((fma(_200, fp_c10_1._m0[563].z, fma(_386, fp_c10_1._m0[563].y, _188 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _388, 0.5, 0.5)) + 1.0)).z > fma((fma(_200, fp_c10_1._m0[564].z, fma(_386, fp_c10_1._m0[564].y, _188 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _388, 0.5, 0.5)) || (_418 <= 0.0));
            _276 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _464) * fma(_244, fp_c1_1._m0[1].y, ((_248 + fma(_248, -_460, _460)) * _462) * 0.079577468335628509521484375), _466, _286);
            _278 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _464) * fma(_250, fp_c1_1._m0[1].y, ((_252 + fma(_252, -_460, _460)) * _462) * 0.079577468335628509521484375), _466, _288);
            _280 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _464) * fma(_256, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_460, _460)) * _462) * 0.079577468335628509521484375), _466, _290);
        }
    }
    float _468 = _188 + (-fp_c3_1._m0[11].w);
    float _470 = _72.y;
    float _472 = _200 + (-fp_c3_1._m0[13].w);
    float _474 = fma(_184.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_258, fma(_242 * (_248 + fma(_248, -_246, _246)), fp_c1_1._m0[0].w, _244 * 0.3183098733425140380859375) * (_233 * fp_c5_1._m0[5].x), _276));
    float _476 = fma(_184.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_258, fma(_242 * (_252 + fma(_252, -_246, _246)), fp_c1_1._m0[0].w, _250 * 0.3183098733425140380859375) * (_233 * fp_c5_1._m0[5].y), _278));
    float _478 = fma(_184.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_258, fma(_242 * (_254 + fma(_254, -_246, _246)), fp_c1_1._m0[0].w, _256 * 0.3183098733425140380859375) * (_233 * fp_c5_1._m0[5].z), _280));
    float _480 = _470 + (-fp_c3_1._m0[12].w);
    float _482 = fma(_472, _472, fma(_480, _480, _468 * _468));
    float _484 = clamp(fma(fma(_200, fp_c5_1._m0[14].z, fma(_470, fp_c5_1._m0[14].y, _188 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _486 = exp2(log2(clamp(sqrt(_482) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_472 * inversesqrt(_482), fp_c5_1._m0[23].z, fma(_480 * inversesqrt(_482), fp_c5_1._m0[23].y, (_468 * inversesqrt(_482)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _488 = clamp(fma(_258, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _490 = fma((-_474) + fp_c5_1._m0[13].x, _484, _474);
    float _492 = fma((-_476) + fp_c5_1._m0[13].y, _484, _476);
    float _494 = fma((-_478) + fp_c5_1._m0[13].z, _484, _478);
    float _496 = clamp((-exp2((clamp(fma(sqrt(_482), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_490) + fma(fma((_486 * fp_c7_1._m0[55].x) * _488, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _496, _490);
    _75.y = fma((-_492) + fma(fma((_486 * fp_c7_1._m0[55].y) * _488, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _496, _492);
    _75.z = fma((-_494) + fma(fma((_486 * fp_c7_1._m0[55].z) * _488, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _496, _494);
    _75.w = 1.0;
}


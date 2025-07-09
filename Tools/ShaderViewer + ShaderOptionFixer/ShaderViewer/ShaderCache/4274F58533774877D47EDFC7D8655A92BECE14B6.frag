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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
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
    bool _288 = false;
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
    float _128 = _70.x;
    float _130 = inversesqrt(fma(_114, _114, fma(_112, _112, _110 * _110)));
    float _132 = _114 * _130;
    float _134 = _110 * _130;
    float _136 = _112 * _130;
    float _138 = sqrt(clamp((-fma(_94, _94, _96 * _96)) + 1.0, 0.0, 1.0));
    float _140 = fma(_134, _138, fma(_94, _120, _96 * (fma(_136, _118, -(_132 * _116)) * _122)));
    float _142 = fma(_136, _138, fma(_94, _116, _96 * (fma(_132, _120, -(_134 * _118)) * _122)));
    float _144 = fma(_132, _138, fma(_94, _118, _96 * (fma(_134, _116, -(_136 * _120)) * _122)));
    float _146 = inversesqrt(fma(_126, _126, fma(_124, _124, _128 * _128)));
    float _148 = inversesqrt(fma(_144, _144, fma(_142, _142, _140 * _140)));
    float _150 = _128 * (-_146);
    float _152 = _124 * (-_146);
    float _154 = _126 * (-_146);
    float _156 = max(texture(fp_tex_tcb_10, vec2(_84, _86)).x, fp_c1_1._m0[0].x);
    float _158 = _140 * _148;
    float _160 = _142 * _148;
    float _162 = _144 * _148;
    float _164 = fma(_162, _154, fma(_160, _152, _158 * _150));
    float _166 = fma(_158 * (-_164), -2.0, -_150);
    float _168 = fma(_160 * (-_164), -2.0, -_152);
    float _170 = fma(_162 * (-_164), -2.0, -_154);
    float _172 = max(_164, fp_c1_1._m0[0].y);
    float _174 = 1.0 / max(abs(_170), max(abs(_166), abs(_168)));
    vec2 _176 = texture(fp_tex_tcb_38, vec2(_172, (-_156) + (-0.0))).xy;
    float _178 = _176.x;
    float _180 = _176.y;
    vec3 _182 = texture(fp_tex_tcb_36, vec4(_166 * _174, _168 * _174, _170 * _174, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_156 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _184 = _150 + (-fp_c5_1._m0[23].x);
    float _186 = _72.z;
    float _188 = _152 + (-fp_c5_1._m0[23].y);
    float _190 = _72.x;
    float _192 = _154 + (-fp_c5_1._m0[23].z);
    float _194 = _162 * _162;
    float _196 = _158 * _160;
    float _198 = _160 * _162;
    float _200 = inversesqrt(fma(_192, _192, fma(_188, _188, _184 * _184)));
    float _202 = _184 * _200;
    float _204 = _188 * _200;
    float _206 = _192 * _200;
    float _208 = _158 * _162;
    float _210 = fma(_158, _158, -(_160 * _160));
    float _212 = _156 * _156;
    int _215 = max(0, min(int(trunc((_186 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _217 = fma(_160, -fp_c5_1._m0[23].y, _158 * (-fp_c5_1._m0[23].x));
    float _219 = max(fma(_162, _206, fma(_160, _204, _158 * _202)), fp_c1_1._m0[0].y) * max(fma(_162, _206, fma(_160, _204, _158 * _202)), fp_c1_1._m0[0].y);
    float _221 = max(fma(_154, _206, fma(_152, _204, _150 * _202)), fp_c1_1._m0[0].y);
    float _223 = fma(_156, 0.5, 0.5);
    float _225 = (_223 * 0.5) * _223;
    float _227 = clamp(fma(_162, -fp_c5_1._m0[23].z, _217), 0.0, 1.0);
    uint _230 = uint(int(uint((((int(uint(_215) >> uint(16)) * 20) << 16) + (((_215 & 65535) * 20) + max(0, min(int(trunc((_190 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _232 = fp_c10_1._m0[int(uint(int(_230)) >> uint(2))][int(_230) & 3];
    float _234 = max(fma(_162, -fp_c5_1._m0[23].z, _217), fp_c1_1._m0[0].y);
    float _236 = 1.0 / (_225 + fma(_172, -_225, _172));
    float _238 = fma(_104, -fp_c6_1._m0[9].x, _104);
    float _240 = exp2(_221 * fma(_221, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _242 = fma(_104 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _244 = fma(_106 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _246 = fma(_108 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _248 = clamp((-fma(max((-_98.x) + 1.0, (-_98.y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_60.x * gl_FragCoord.w) * _82, (_60.y * gl_FragCoord.w) * _82)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _250 = (_236 * (1.0 / (_225 + fma(_225, -_234, _234)))) * ((_212 * (1.0 / max(fma(_219, _212 * _212, -_219) + 1.0, fp_c1_1._m0[0].y))) * (_212 * (1.0 / max(fma(_219, _212 * _212, -_219) + 1.0, fp_c1_1._m0[0].y))));
    float _252 = fma(_106, -fp_c6_1._m0[9].x, _106);
    float _254 = fma(_108, -fp_c6_1._m0[9].x, _108);
    float _256 = fma(_182.x, fma(_242, _178, _180), max(0.0, fma(_210, fp_c5_1._m0[31].x, (fma(_162, fp_c5_1._m0[25].z, fma(_160, fp_c5_1._m0[25].y, _158 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_208, fp_c5_1._m0[28].w, fma(_194, fp_c5_1._m0[28].z, fma(_198, fp_c5_1._m0[28].y, _196 * fp_c5_1._m0[28].x))))) * fma(_242, -_238, _238));
    float _258 = fma(_182.y, fma(_244, _178, _180), max(0.0, fma(_210, fp_c5_1._m0[31].y, (fma(_162, fp_c5_1._m0[26].z, fma(_160, fp_c5_1._m0[26].y, _158 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_208, fp_c5_1._m0[29].w, fma(_194, fp_c5_1._m0[29].z, fma(_198, fp_c5_1._m0[29].y, _196 * fp_c5_1._m0[29].x))))) * fma(_244, -_252, _252));
    float _260 = fma(_182.z, fma(_246, _178, _180), max(0.0, fma(_210, fp_c5_1._m0[31].z, (fma(_162, fp_c5_1._m0[27].z, fma(_160, fp_c5_1._m0[27].y, _158 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_208, fp_c5_1._m0[30].w, fma(_194, fp_c5_1._m0[30].z, fma(_198, fp_c5_1._m0[30].y, _196 * fp_c5_1._m0[30].x))))) * fma(_246, -_254, _254));
    int _262 = floatBitsToInt(_232);
    float _264 = _258;
    float _266 = _256;
    float _268 = _260;
    float _270 = _256;
    float _272 = _258;
    float _274 = _260;
    if (floatBitsToInt(_232) != (-1))
    {
        int _276 = 0;
        float _280;
        float _282;
        float _284;
        int _368;
        do
        {
            int _278 = _262 & 255;
            _280 = _266;
            _282 = _264;
            _284 = _268;
            _288 = uint(_278) >= 30u;
            if (_288)
            {
                break;
            }
            int _290 = _278 << 4;
            uint _292 = uint(int(uint(_290 + 7360) >> uint(2)));
            int _294 = int(_292) + 1;
            uint _296 = uint(int(uint(_290 + 7368) >> uint(2)));
            float _298 = (-_190) + fp_c10_1._m0[int(uint(int(_292)) >> uint(2))][int(_292) & 3];
            float _300 = fp_c10_1._m0[int(uint(_294) >> uint(2))][_294 & 3] + (-_72.y);
            float _302 = (-_186) + fp_c10_1._m0[int(uint(int(_296)) >> uint(2))][int(_296) & 3];
            float _304 = fma(_302, _302, fma(_300, _300, _298 * _298));
            float _306 = _298 * inversesqrt(_304);
            float _308 = _300 * inversesqrt(_304);
            float _310 = _302 * inversesqrt(_304);
            float _312 = _150 + _306;
            float _314 = _152 + _308;
            float _316 = _154 + _310;
            float _318 = inversesqrt(fma(_316, _316, fma(_314, _314, _312 * _312)));
            float _320 = _312 * _318;
            float _322 = _314 * _318;
            uint _324 = uint(int(uint(_290 + 6880) >> uint(2)));
            int _326 = int(_324) + 1;
            float _328 = _316 * _318;
            float _330 = max(fma(_162, _328, fma(_160, _322, _158 * _320)), fp_c1_1._m0[0].y) * max(fma(_162, _328, fma(_160, _322, _158 * _320)), fp_c1_1._m0[0].y);
            float _332 = max(fma(_154, _328, fma(_152, _322, _150 * _320)), fp_c1_1._m0[0].y);
            float _334 = fma(_162, _310, fma(_160, _308, _158 * _306));
            uint _336 = uint(int(uint(_290 + 8320) >> uint(2)));
            float _338 = max(_334, fp_c1_1._m0[0].y);
            uint _340 = uint(int(uint(_290 + 6408) >> uint(2)));
            float _342 = exp2(_332 * fma(_332, fp_c1_1._m0[0].z, -6.9831600189208984375));
            uint _344 = uint(int(uint(_290 + 6400) >> uint(2)));
            int _346 = int(_344) + 1;
            bool _348 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_336)) >> uint(2))][int(_336) & 3]) != 0;
            float _350 = (_236 * (1.0 / (_225 + fma(_225, -_338, _338)))) * ((_212 * (1.0 / max(fma(_212 * _212, _330, -_330) + 1.0, fp_c1_1._m0[0].y))) * (_212 * (1.0 / max(fma(_212 * _212, _330, -_330) + 1.0, fp_c1_1._m0[0].y))));
            float _352 = _350;
            if (!_348)
            {
                _352 = 1.0;
            }
            float _354 = _352;
            if (_348)
            {
                uint _356 = uint(int(uint(_290 + 7840) >> uint(2)));
                int _358 = int(_356) + 1;
                uint _360 = uint(int(uint(_290 + 7848) >> uint(2)));
                uint _362 = uint(int(uint(_290 + 6888) >> uint(2)));
                float _364 = fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3];
                int _366 = int(_362) + 1;
                _354 = exp2(fp_c10_1._m0[int(uint(_366) >> uint(2))][_366 & 3] * log2(clamp(((-_364) + fma(_310, -fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3], fma(_308, -fp_c10_1._m0[int(uint(_358) >> uint(2))][_358 & 3], _306 * (-fp_c10_1._m0[int(uint(int(_356)) >> uint(2))][int(_356) & 3])))) * (1.0 / ((-_364) + 1.0)), 0.0, 1.0)));
            }
            _368 = _276 + 1;
            float _370 = (exp2(fp_c10_1._m0[int(uint(_326) >> uint(2))][_326 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_324)) >> uint(2))][int(_324) & 3], -sqrt(_304), fp_c1_1._m0[1].x), 0.0, 1.0))) * _354) * clamp(_334 + (-0.0), 0.0, 1.0);
            float _372 = fma(fp_c10_1._m0[int(uint(_346) >> uint(2))][_346 & 3] * _370, fma(fma(_106, -fp_c6_1._m0[9].x, _106), fp_c1_1._m0[1].y, ((_244 + fma(_244, -_342, _342)) * _350) * 0.079577468335628509521484375), _264);
            float _374 = fma(fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3] * _370, fma(fma(_104, -fp_c6_1._m0[9].x, _104), fp_c1_1._m0[1].y, ((_242 + fma(_242, -_342, _342)) * _350) * 0.079577468335628509521484375), _266);
            float _376 = fma(fp_c10_1._m0[int(uint(int(_340)) >> uint(2))][int(_340) & 3] * _370, fma(fma(_108, -fp_c6_1._m0[9].x, _108), fp_c1_1._m0[1].y, ((_246 + fma(_246, -_342, _342)) * _350) * 0.079577468335628509521484375), _268);
            _262 = int(uint(_262) >> uint(8));
            _276 = _368;
            _264 = _372;
            _266 = _374;
            _268 = _376;
            _280 = _374;
            _282 = _372;
            _284 = _376;
        } while (!(_368 >= 4));
        _288 = false;
        _270 = _280;
        _272 = _282;
        _274 = _284;
        if ((_262 & 255) == 30)
        {
            float _378 = 1.0 / fp_c10_1._m0[561].y;
            float _380 = _190 + (-fp_c10_1._m0[557].x);
            float _382 = _186 + (-fp_c10_1._m0[557].z);
            float _384 = _380 * fp_c10_1._m0[558].z;
            float _386 = _382 * fp_c10_1._m0[558].x;
            float _388 = (-_190) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_378, fp_c10_1._m0[557].x);
            float _390 = (-_186) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_378, fp_c10_1._m0[557].z);
            float _392 = _388 * _388;
            float _394 = sqrt(fma(_390, _390, _392)) * (-fp_c10_1._m0[558].y);
            float _396 = ((-float(_386 < _384)) + float(_386 > _384)) * fp_c10_1._m0[561].y;
            float _398 = inversesqrt(fma(_390, _390, fma(_394, _394, _392)));
            float _400 = _388 * _398;
            float _402 = _394 * _398;
            float _404 = _390 * _398;
            float _406 = fma(_382, _382, _380 * _380);
            float _408 = _150 + _400;
            float _410 = _152 + _402;
            float _412 = _72.y;
            float _414 = _154 + _404;
            float _416 = inversesqrt(fma(_414, _414, fma(_410, _410, _408 * _408)));
            float _418 = fma(_382, fp_c10_1._m0[558].z, _380 * fp_c10_1._m0[558].x);
            float _420 = inversesqrt(fma(_404, _404, _400 * _400));
            float _422 = _408 * _416;
            float _424 = _410 * _416;
            float _426 = _414 * _416;
            float _428 = 1.0 / (fma(_186, fp_c10_1._m0[565].z, fma(_412, fp_c10_1._m0[565].y, _190 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _430 = fma((fma(_186, fp_c10_1._m0[563].z, fma(_412, fp_c10_1._m0[563].y, _190 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _428, 0.5, 0.5);
            bool _432 = _418 > 0.0;
            float _434 = _430;
            if (_432)
            {
                _434 = sqrt(_406);
            }
            float _436 = _434;
            if (!_432)
            {
                _436 = 1.0;
            }
            float _438 = fma(_162, _404, fma(_160, _402, _158 * _400));
            bool _440 = fma(_382 * inversesqrt(_406), fp_c10_1._m0[558].z, (_380 * inversesqrt(_406)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _442 = max(_438, fp_c1_1._m0[0].y);
            float _444 = max(fma(_162, _426, fma(_160, _424, _158 * _422)), fp_c1_1._m0[0].y) * max(fma(_162, _426, fma(_160, _424, _158 * _422)), fp_c1_1._m0[0].y);
            float _446 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_380, fma(_396, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_382 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_396 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_380, fma(_396, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_382 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_396 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _448 = max(fma(_154, _426, fma(_152, _424, _150 * _422)), fp_c1_1._m0[0].y);
            float _450 = clamp(fma(_418 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_418 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _452 = 6.9831600189208984375;
            if (_440)
            {
                _452 = fma(_446, -_446, fp_c1_1._m0[1].x) * fma(_446, -_446, fp_c1_1._m0[1].x);
            }
            float _454 = _452;
            if (!_440)
            {
                _454 = 1.0;
            }
            float _456 = exp2(_448 * fma(_448, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _458 = (min(fma(_450, -_450, fp_c1_1._m0[1].x) * fma(_450, -_450, fp_c1_1._m0[1].x), _454) * (exp2(log2(clamp(fma(_436, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_404 * _420, -fp_c10_1._m0[558].z, (_400 * _420) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_438 + (-0.0), 0.0, 1.0);
            float _460 = (_236 * (1.0 / (_225 + fma(_225, -_442, _442)))) * ((_212 * (1.0 / max(fma(_212 * _212, _444, -_444) + 1.0, fp_c1_1._m0[0].y))) * (_212 * (1.0 / max(fma(_212 * _212, _444, -_444) + 1.0, fp_c1_1._m0[0].y))));
            float _462 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_186, fp_c10_1._m0[562].z, fma(_412, fp_c10_1._m0[562].y, _190 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _428, 0.5, 0.5), (-_430) + 1.0)).z > fma((fma(_186, fp_c10_1._m0[564].z, fma(_412, fp_c10_1._m0[564].y, _190 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _428, 0.5, 0.5)) || (_418 <= 0.0));
            _270 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _458) * fma(fma(_104, -fp_c6_1._m0[9].x, _104), fp_c1_1._m0[1].y, ((_242 + fma(_242, -_456, _456)) * _460) * 0.079577468335628509521484375), _462, _280);
            _272 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _458) * fma(fma(_106, -fp_c6_1._m0[9].x, _106), fp_c1_1._m0[1].y, ((_244 + fma(_244, -_456, _456)) * _460) * 0.079577468335628509521484375), _462, _282);
            _274 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _458) * fma(fma(_108, -fp_c6_1._m0[9].x, _108), fp_c1_1._m0[1].y, ((_246 + fma(_246, -_456, _456)) * _460) * 0.079577468335628509521484375), _462, _284);
        }
    }
    float _464 = _190 + (-fp_c3_1._m0[11].w);
    float _466 = _72.y;
    float _468 = _186 + (-fp_c3_1._m0[13].w);
    float _470 = _466 + (-fp_c3_1._m0[12].w);
    float _472 = fma(_468, _468, fma(_470, _470, _464 * _464));
    float _474 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _476 = fma(_104, _474, fma(_248, fma(_250 * (_242 + fma(_242, -_240, _240)), fp_c1_1._m0[0].w, _238 * 0.3183098733425140380859375) * (_227 * fp_c5_1._m0[5].x), _270));
    float _478 = fma(_106, _474, fma(_248, fma(_250 * (_244 + fma(_244, -_240, _240)), fp_c1_1._m0[0].w, _252 * 0.3183098733425140380859375) * (_227 * fp_c5_1._m0[5].y), _272));
    float _480 = fma(_108, _474, fma(_248, fma(_250 * (_246 + fma(_246, -_240, _240)), fp_c1_1._m0[0].w, _254 * 0.3183098733425140380859375) * (_227 * fp_c5_1._m0[5].z), _274));
    float _482 = exp2(log2(clamp(sqrt(_472) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_468 * inversesqrt(_472), fp_c5_1._m0[23].z, fma(_470 * inversesqrt(_472), fp_c5_1._m0[23].y, (_464 * inversesqrt(_472)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _484 = clamp(fma(_248, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _486 = clamp(fma(fma(_186, fp_c5_1._m0[14].z, fma(_466, fp_c5_1._m0[14].y, _190 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _488 = fma((-_476) + fp_c5_1._m0[13].x, _486, _476);
    float _490 = fma((-_480) + fp_c5_1._m0[13].z, _486, _480);
    float _492 = fma((-_478) + fp_c5_1._m0[13].y, _486, _478);
    float _494 = clamp((-exp2((clamp(fma(sqrt(_472), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_488) + fma(fma(_484 * (_482 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _494, _488);
    _75.y = fma((-_492) + fma(fma(_484 * (_482 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _494, _492);
    _75.z = fma((-_490) + fma(fma(_484 * (_482 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _494, _490);
    _75.w = 1.0;
}


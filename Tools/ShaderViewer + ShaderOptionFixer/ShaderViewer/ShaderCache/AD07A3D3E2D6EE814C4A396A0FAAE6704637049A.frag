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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

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
layout(location = 5) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 6) in vec4 _76;
layout(location = 3) in vec4 _78;
layout(location = 0) out vec4 _81;
uint _6[12];

void main()
{
    bool _326 = false;
    float _88 = _66.x;
    float _90 = _66.y;
    vec2 _94 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _96 = _94.x;
    float _98 = _94.y;
    float _100 = _68.x;
    float _102 = _68.y;
    float _104 = _68.z;
    float _106 = _72.y;
    float _108 = _72.z;
    float _110 = _72.x;
    float _112 = _72.w;
    float _114 = _74.x;
    float _116 = _74.y;
    float _118 = _74.z;
    float _120 = 1.0 / _70.w;
    float _122 = inversesqrt(fma(_104, _104, fma(_102, _102, _100 * _100)));
    float _124 = _104 * _122;
    float _126 = _100 * _122;
    float _128 = _102 * _122;
    float _130 = sqrt(clamp((-fma(_96, _96, _98 * _98)) + 1.0, 0.0, 1.0));
    float _132 = fma(_126, _130, fma(_96, _110, _98 * (fma(_128, _108, -(_124 * _106)) * _112)));
    float _134 = fma(_128, _130, fma(_96, _106, _98 * (fma(_124, _110, -(_126 * _108)) * _112)));
    float _136 = fma(_124, _130, fma(_96, _108, _98 * (fma(_126, _106, -(_128 * _110)) * _112)));
    float _138 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _140 = inversesqrt(fma(_136, _136, fma(_134, _134, _132 * _132)));
    float _142 = _114 * (-_138);
    float _144 = _116 * (-_138);
    float _146 = _118 * (-_138);
    float _148 = _136 * _140;
    float _150 = _132 * _140;
    float _152 = _134 * _140;
    vec2 _154 = texture(fp_tex_tcb_2A, vec2(fma(_70.x * _120, 0.5, 0.5), fma(_70.y * _120, -0.5, 0.5))).xy;
    float _156 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _158 = fma(_148, _146, fma(_152, _144, _150 * _142));
    float _160 = 1.0 / (_76.z * gl_FragCoord.w);
    float _162 = max(_158, fp_c1_1._m0[0].z);
    float _164 = fma(_150 * (-_158), -2.0, -_142);
    float _166 = fma(_152 * (-_158), -2.0, -_144);
    float _168 = fma(_148 * (-_158), -2.0, -_146);
    vec3 _172 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _174 = _172.x;
    float _176 = _172.y;
    float _178 = _172.z;
    float _180 = texture(fp_tex_tcb_12, vec2(_88, _90)).x;
    float _182 = 1.0 / max(abs(_168), max(abs(_164), abs(_166)));
    float _184 = _168 * _182;
    vec2 _186 = texture(fp_tex_tcb_38, vec2(_162, (-_156) + (-0.0))).xy;
    float _188 = _186.x;
    float _190 = _186.y;
    vec3 _192 = texture(fp_tex_tcb_36, vec4(_164 * _182, _166 * _182, _184, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_156 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _194 = texture(fp_tex_tcb_14, vec2(_88, _90)).xyz;
    float _196 = fp_c3_1._m0[13].z * fp_c3_1._m0[13].z;
    float _198 = _78.x;
    float _200 = clamp(_196 * (1.0 / fma(fp_c3_1._m0[11].z, fp_c3_1._m0[11].z, _196)), 0.0, 1.0);
    float _202 = _78.z;
    bool _206 = _200 > fp_c1_1._m0[1].x;
    bool _208 = _200 < 0.0;
    float _210 = _184;
    if (_206)
    {
        _210 = sqrt(fma(_200, -0.5, 0.5));
    }
    float _212 = _210;
    if (!_206)
    {
        _212 = _200;
    }
    float _214 = _212 * _212;
    float _216 = _142 + (-fp_c5_1._m0[23].x);
    float _218 = _144 + (-fp_c5_1._m0[23].y);
    float _220 = fma(_214 * fma(_214, fma(_214, fma(_214, fma(_214, fp_c1_1._m0[1].y, 0.01816697604954242706298828125), fp_c1_1._m0[1].z), fp_c1_1._m0[1].w), fp_c1_1._m0[2].x), _212, _212);
    float _222 = _146 + (-fp_c5_1._m0[23].z);
    float _224 = fma(_220, -2.0, 1.57079637050628662109375);
    if (!_206)
    {
        _224 = _220;
    }
    float _226 = inversesqrt(fma(_222, _222, fma(_218, _218, _216 * _216)));
    float _228 = 0.0;
    if (_208)
    {
        _228 = (-_224) + (-0.0);
    }
    float _230 = _228;
    if (!_208)
    {
        _230 = _224;
    }
    float _232 = _216 * _226;
    float _234 = _150 * _152;
    float _236 = _218 * _226;
    float _238 = _222 * _226;
    int _241 = max(0, min(int(trunc((_202 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _243 = max(fma(_146, _238, fma(_144, _236, _142 * _232)), fp_c1_1._m0[0].z);
    float _245 = _148 * _148;
    float _247 = exp2(_243 * fma(_243, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _249 = fma(_152, -fp_c5_1._m0[23].y, _150 * (-fp_c5_1._m0[23].x));
    float _251 = _152 * _148;
    float _253 = _156 * _156;
    float _255 = _253 * _253;
    float _257 = max(fma(_148, _238, fma(_152, _236, _150 * _232)), fp_c1_1._m0[0].z) * max(fma(_148, _238, fma(_152, _236, _150 * _232)), fp_c1_1._m0[0].z);
    float _259 = fma(_156, 0.5, 0.5);
    float _261 = max(fma(_148, -fp_c5_1._m0[23].z, _249), fp_c1_1._m0[0].z);
    float _263 = (_259 * 0.5) * _259;
    float _265 = _150 * _148;
    uint _268 = uint(int(uint((((int(uint(_241) >> uint(16)) * 20) << 16) + (((_241 & 65535) * 20) + max(0, min(int(trunc((_198 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _270 = fp_c10_1._m0[int(uint(int(_268)) >> uint(2))][int(_268) & 3];
    float _272 = fma(_150, _150, -(_152 * _152));
    float _274 = fma(_174, -_180, _174);
    float _276 = fma(_176, -_180, _176);
    float _278 = ((1.0 / (_263 + fma(_162, -_263, _162))) * (1.0 / (_263 + fma(_263, -_261, _261)))) * ((_253 * (1.0 / max(fma(_257, _255, -_257) + 1.0, fp_c1_1._m0[0].z))) * (_253 * (1.0 / max(fma(_257, _255, -_257) + 1.0, fp_c1_1._m0[0].z))));
    float _280 = fma(_180, _174 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _282 = fma(_180, _176 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _284 = (fp_c7_1._m0[82].z * fp_c6_1._m0[49].w) * exp2(max(fp_c6_1._m0[50].y, fp_c1_1._m0[0].z) * log2(clamp(fma(sin(fma(fma(_148, fp_c3_1._m0[13].z, fma(_152, fp_c3_1._m0[12].z, _150 * fp_c3_1._m0[11].z)), fp_c6_1._m0[50].z, fma(_230, fp_c7_1._m0[82].x, fp_c7_1._m0[82].y)) * fp_c6_1._m0[50].x), 0.5, 0.5), 0.0, 1.0)));
    float _286 = fma(_180, _178 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _288 = fma(_178, -_180, _178);
    float _290 = (max(0.0, fma(_272, fp_c5_1._m0[31].y, (fma(_148, fp_c5_1._m0[26].z, fma(_152, fp_c5_1._m0[26].y, _150 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_265, fp_c5_1._m0[29].w, fma(_245, fp_c5_1._m0[29].z, fma(_251, fp_c5_1._m0[29].y, _234 * fp_c5_1._m0[29].x))))) * fma(_282, -_276, _276)) + fma(_176, _284, fma(_282, _188, _190) * _192.y);
    float _292 = clamp(fma(_148, -fp_c5_1._m0[23].z, _249), 0.0, 1.0);
    float _294 = (max(0.0, fma(_272, fp_c5_1._m0[31].x, (fma(_148, fp_c5_1._m0[25].z, fma(_152, fp_c5_1._m0[25].y, _150 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_265, fp_c5_1._m0[28].w, fma(_245, fp_c5_1._m0[28].z, fma(_251, fp_c5_1._m0[28].y, _234 * fp_c5_1._m0[28].x))))) * fma(_280, -_274, _274)) + fma(_174, _284, fma(_280, _188, _190) * _192.x);
    float _296 = (max(0.0, fma(_272, fp_c5_1._m0[31].z, (fma(_148, fp_c5_1._m0[27].z, fma(_152, fp_c5_1._m0[27].y, _150 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_265, fp_c5_1._m0[30].w, fma(_245, fp_c5_1._m0[30].z, fma(_251, fp_c5_1._m0[30].y, _234 * fp_c5_1._m0[30].x))))) * fma(_286, -_288, _288)) + fma(_178, _284, fma(_286, _188, _190) * _192.z);
    float _298 = clamp((-fma(max((-_154.y) + 1.0, (-_154.x) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _160, (_76.y * gl_FragCoord.w) * _160)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _300 = clamp(texture(fp_tex_tcb_18, vec2(_88, _90)).x + (-0.0), 0.0, 1.0);
    int _302 = floatBitsToInt(_270);
    float _304 = _296;
    float _306 = _294;
    float _308 = _290;
    float _310 = _296;
    float _312 = _294;
    float _314 = _290;
    if (floatBitsToInt(_270) != (-1))
    {
        int _316 = 0;
        float _320;
        float _322;
        float _324;
        int _408;
        do
        {
            int _318 = _302 & 255;
            _320 = _306;
            _322 = _308;
            _324 = _304;
            _326 = uint(_318) >= 30u;
            if (_326)
            {
                break;
            }
            int _328 = _318 << 4;
            uint _330 = uint(int(uint(_328 + 7360) >> uint(2)));
            int _332 = int(_330) + 1;
            uint _334 = uint(int(uint(_328 + 7368) >> uint(2)));
            float _336 = (-_198) + fp_c10_1._m0[int(uint(int(_330)) >> uint(2))][int(_330) & 3];
            float _338 = fp_c10_1._m0[int(uint(_332) >> uint(2))][_332 & 3] + (-_78.y);
            float _340 = (-_202) + fp_c10_1._m0[int(uint(int(_334)) >> uint(2))][int(_334) & 3];
            float _342 = fma(_340, _340, fma(_338, _338, _336 * _336));
            float _344 = _336 * inversesqrt(_342);
            float _346 = _338 * inversesqrt(_342);
            float _348 = _340 * inversesqrt(_342);
            float _350 = _142 + _344;
            float _352 = _144 + _346;
            float _354 = _146 + _348;
            uint _356 = uint(int(uint(_328 + 6880) >> uint(2)));
            int _358 = int(_356) + 1;
            float _360 = inversesqrt(fma(_354, _354, fma(_352, _352, _350 * _350)));
            float _362 = _350 * _360;
            float _364 = _352 * _360;
            float _366 = _354 * _360;
            uint _368 = uint(int(uint(_328 + 8320) >> uint(2)));
            float _370 = fma(_148, _348, fma(_152, _346, _150 * _344));
            float _372 = max(fma(_146, _366, fma(_144, _364, _142 * _362)), fp_c1_1._m0[0].z);
            float _374 = max(_370, fp_c1_1._m0[0].z);
            float _376 = max(fma(_148, _366, fma(_152, _364, _150 * _362)), fp_c1_1._m0[0].z) * max(fma(_148, _366, fma(_152, _364, _150 * _362)), fp_c1_1._m0[0].z);
            uint _378 = uint(int(uint(_328 + 6400) >> uint(2)));
            int _380 = int(_378) + 1;
            uint _382 = uint(int(uint(_328 + 6408) >> uint(2)));
            float _384 = exp2(_372 * fma(_372, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _386 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_368)) >> uint(2))][int(_368) & 3]) != 0;
            float _388 = _280 + fma(_280, -_384, _384);
            float _390 = ((1.0 / (_263 + fma(_162, -_263, _162))) * (1.0 / (_263 + fma(_263, -_374, _374)))) * ((_253 * (1.0 / max(fma(_255, _376, -_376) + 1.0, fp_c1_1._m0[0].z))) * (_253 * (1.0 / max(fma(_255, _376, -_376) + 1.0, fp_c1_1._m0[0].z))));
            float _392 = _388;
            if (!_386)
            {
                _392 = 1.0;
            }
            float _394 = _392;
            if (_386)
            {
                uint _396 = uint(int(uint(_328 + 7840) >> uint(2)));
                int _398 = int(_396) + 1;
                uint _400 = uint(int(uint(_328 + 7848) >> uint(2)));
                uint _402 = uint(int(uint(_328 + 6888) >> uint(2)));
                float _404 = fp_c10_1._m0[int(uint(int(_402)) >> uint(2))][int(_402) & 3];
                int _406 = int(_402) + 1;
                _394 = exp2(fp_c10_1._m0[int(uint(_406) >> uint(2))][_406 & 3] * log2(clamp(((-_404) + fma(_348, -fp_c10_1._m0[int(uint(int(_400)) >> uint(2))][int(_400) & 3], fma(_346, -fp_c10_1._m0[int(uint(_398) >> uint(2))][_398 & 3], _344 * (-fp_c10_1._m0[int(uint(int(_396)) >> uint(2))][int(_396) & 3])))) * (1.0 / ((-_404) + 1.0)), 0.0, 1.0)));
            }
            _408 = _316 + 1;
            float _410 = (exp2(fp_c10_1._m0[int(uint(_358) >> uint(2))][_358 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_356)) >> uint(2))][int(_356) & 3], -sqrt(_342), fp_c1_1._m0[2].z), 0.0, 1.0))) * _394) * clamp(_370 + (-0.0), 0.0, 1.0);
            float _412 = fma(fp_c10_1._m0[int(uint(int(_382)) >> uint(2))][int(_382) & 3] * _410, fma(_288, fp_c1_1._m0[2].w, ((_286 + fma(_286, -_384, _384)) * _390) * 0.079577468335628509521484375), _304);
            float _414 = fma(fp_c10_1._m0[int(uint(int(_378)) >> uint(2))][int(_378) & 3] * _410, fma(_274, fp_c1_1._m0[2].w, (_388 * _390) * 0.079577468335628509521484375), _306);
            float _416 = fma(fp_c10_1._m0[int(uint(_380) >> uint(2))][_380 & 3] * _410, fma(_276, fp_c1_1._m0[2].w, ((_282 + fma(_282, -_384, _384)) * _390) * 0.079577468335628509521484375), _308);
            _302 = int(uint(_302) >> uint(8));
            _316 = _408;
            _304 = _412;
            _306 = _414;
            _308 = _416;
            _320 = _414;
            _322 = _416;
            _324 = _412;
        } while (!(_408 >= 4));
        _326 = false;
        _310 = _324;
        _312 = _320;
        _314 = _322;
        if ((_302 & 255) == 30)
        {
            float _418 = _78.y;
            float _420 = 1.0 / (fma(_202, fp_c10_1._m0[565].z, fma(_418, fp_c10_1._m0[565].y, _198 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _422 = 1.0 / fp_c10_1._m0[561].y;
            float _424 = _202 + (-fp_c10_1._m0[557].z);
            float _426 = (-_198) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_422, fp_c10_1._m0[557].x);
            float _428 = (-_202) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_422, fp_c10_1._m0[557].z);
            float _430 = _198 + (-fp_c10_1._m0[557].x);
            float _432 = _424 * fp_c10_1._m0[558].x;
            float _434 = _426 * _426;
            float _436 = fma(_424, _424, _430 * _430);
            float _438 = _430 * fp_c10_1._m0[558].z;
            float _440 = sqrt(fma(_428, _428, _434)) * (-fp_c10_1._m0[558].y);
            float _442 = ((-float(_432 < _438)) + float(_432 > _438)) * fp_c10_1._m0[561].y;
            float _444 = inversesqrt(fma(_428, _428, fma(_440, _440, _434)));
            bool _446 = fma(_424 * inversesqrt(_436), fp_c10_1._m0[558].z, (_430 * inversesqrt(_436)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _448 = _426 * _444;
            float _450 = _440 * _444;
            float _452 = fma(_424, fp_c10_1._m0[558].z, _430 * fp_c10_1._m0[558].x);
            float _454 = _428 * _444;
            float _456 = _142 + _448;
            float _458 = _144 + _450;
            bool _460 = _452 > 0.0;
            float _462 = inversesqrt(fma(_454, _454, _448 * _448));
            float _464 = _146 + _454;
            float _466 = fma(_148, _454, fma(_152, _450, _150 * _448));
            float _468 = inversesqrt(fma(_464, _464, fma(_458, _458, _456 * _456)));
            float _470 = _456 * _468;
            float _472 = _458 * _468;
            float _474 = _458;
            if (_460)
            {
                _474 = sqrt(_436);
            }
            float _476 = _464 * _468;
            float _478 = _474;
            if (!_460)
            {
                _478 = 1.0;
            }
            float _480 = max(_466, fp_c1_1._m0[0].z);
            float _482 = max(fma(_146, _476, fma(_144, _472, _142 * _470)), fp_c1_1._m0[0].z);
            float _484 = max(fma(_148, _476, fma(_152, _472, _150 * _470)), fp_c1_1._m0[0].z) * max(fma(_148, _476, fma(_152, _472, _150 * _470)), fp_c1_1._m0[0].z);
            float _486 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_430, fma(_442, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_424 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_442 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_430, fma(_442, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_424 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_442 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _488 = 6.9831600189208984375;
            if (!_446)
            {
                _488 = 1.0;
            }
            float _490 = clamp(fma(_452 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[2].z), 0.0, 1.0) * clamp(fma(_452 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[2].z), 0.0, 1.0);
            float _492 = _488;
            if (_446)
            {
                _492 = fma(_486, -_486, fp_c1_1._m0[2].z) * fma(_486, -_486, fp_c1_1._m0[2].z);
            }
            float _494 = exp2(_482 * fma(_482, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _496 = ((1.0 / (_263 + fma(_162, -_263, _162))) * (1.0 / (_263 + fma(_263, -_480, _480)))) * ((_253 * (1.0 / max(fma(_255, _484, -_484) + 1.0, fp_c1_1._m0[0].z))) * (_253 * (1.0 / max(fma(_255, _484, -_484) + 1.0, fp_c1_1._m0[0].z))));
            float _498 = (min(fma(_490, -_490, fp_c1_1._m0[2].z) * fma(_490, -_490, fp_c1_1._m0[2].z), _492) * (exp2(log2(clamp(fma(_478, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_454 * _462, -fp_c10_1._m0[558].z, (_448 * _462) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_466 + (-0.0), 0.0, 1.0);
            float _500 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_202, fp_c10_1._m0[562].z, fma(_418, fp_c10_1._m0[562].y, _198 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _420, 0.5, 0.5), (-fma((fma(_202, fp_c10_1._m0[563].z, fma(_418, fp_c10_1._m0[563].y, _198 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _420, 0.5, 0.5)) + 1.0)).z > fma((fma(_202, fp_c10_1._m0[564].z, fma(_418, fp_c10_1._m0[564].y, _198 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _420, 0.5, 0.5)) || (_452 <= 0.0));
            _310 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _498) * fma(_288, fp_c1_1._m0[2].w, ((_286 + fma(_286, -_494, _494)) * _496) * 0.079577468335628509521484375), _500, _324);
            _312 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _498) * fma(_274, fp_c1_1._m0[2].w, ((_280 + fma(_280, -_494, _494)) * _496) * 0.079577468335628509521484375), _500, _320);
            _314 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _498) * fma(_276, fp_c1_1._m0[2].w, ((_282 + fma(_282, -_494, _494)) * _496) * 0.079577468335628509521484375), _500, _322);
        }
    }
    float _502 = _198 + (-fp_c3_1._m0[11].w);
    float _504 = _78.y;
    float _506 = _202 + (-fp_c3_1._m0[13].w);
    float _508 = _504 + (-fp_c3_1._m0[12].w);
    float _510 = fma(_506, _506, fma(_508, _508, _502 * _502));
    float _512 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _514 = fma(_174 * _194.x, _512, fma(_300, _312, _298 * ((_292 * fp_c5_1._m0[5].x) * fma(_278 * (_280 + fma(_280, -_247, _247)), fp_c1_1._m0[2].y, _274 * 0.3183098733425140380859375))));
    float _516 = clamp(fma(_300 * _298, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _518 = fma(_176 * _194.y, _512, fma(_300, _314, _298 * ((_292 * fp_c5_1._m0[5].y) * fma(_278 * (_282 + fma(_282, -_247, _247)), fp_c1_1._m0[2].y, _276 * 0.3183098733425140380859375))));
    float _520 = exp2(log2(clamp(sqrt(_510) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_506 * inversesqrt(_510), fp_c5_1._m0[23].z, fma(_508 * inversesqrt(_510), fp_c5_1._m0[23].y, (_502 * inversesqrt(_510)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _522 = clamp(fma(fma(_202, fp_c5_1._m0[14].z, fma(_504, fp_c5_1._m0[14].y, _198 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _524 = fma(_178 * _194.z, _512, fma(_300, _310, _298 * ((_292 * fp_c5_1._m0[5].z) * fma(_278 * (_286 + fma(_286, -_247, _247)), fp_c1_1._m0[2].y, _288 * 0.3183098733425140380859375))));
    float _526 = fma((-_514) + fp_c5_1._m0[13].x, _522, _514);
    float _528 = fma((-_518) + fp_c5_1._m0[13].y, _522, _518);
    float _530 = fma((-_524) + fp_c5_1._m0[13].z, _522, _524);
    float _532 = clamp((-exp2((clamp(fma(sqrt(_510), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_526) + fma(fma((_520 * fp_c7_1._m0[55].x) * _516, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _532, _526);
    _81.y = fma((-_528) + fma(fma((_520 * fp_c7_1._m0[55].y) * _516, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _532, _528);
    _81.z = fma((-_530) + fma(fma((_520 * fp_c7_1._m0[55].z) * _516, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _532, _530);
    _81.w = 1.0;
}


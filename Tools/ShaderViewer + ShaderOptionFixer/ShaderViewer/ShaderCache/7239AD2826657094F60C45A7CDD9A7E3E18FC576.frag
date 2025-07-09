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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_14;
layout(binding = 4) uniform sampler2D fp_tex_tcb_18;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _66;
layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 6) in vec4 _76;
layout(location = 3) in vec4 _78;
layout(location = 0) out vec4 _81;
uint _6[12];

void main()
{
    bool _318 = false;
    float _88 = _68.x;
    float _90 = _68.y;
    float _92 = 1.0 / _66.w;
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _98 = _96.x;
    float _100 = _96.y;
    vec3 _104 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _106 = _104.x;
    float _108 = _104.y;
    float _110 = _104.z;
    vec2 _112 = texture(fp_tex_tcb_2A, vec2(fma(_66.x * _92, 0.5, 0.5), fma(_66.y * _92, -0.5, 0.5))).xy;
    float _114 = _70.x;
    float _116 = _70.y;
    float _118 = _70.z;
    float _120 = _72.y;
    float _122 = _72.z;
    float _124 = _72.x;
    float _126 = _72.w;
    float _128 = _74.x;
    float _130 = _74.y;
    float _132 = _74.z;
    float _134 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _136 = _118 * _134;
    float _138 = _114 * _134;
    float _140 = _116 * _134;
    float _142 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _144 = inversesqrt(fma(_132, _132, fma(_130, _130, _128 * _128)));
    float _146 = fma(_138, _142, fma(_98, _124, _100 * (fma(_140, _122, -(_136 * _120)) * _126)));
    float _148 = fma(_140, _142, fma(_98, _120, _100 * (fma(_136, _124, -(_138 * _122)) * _126)));
    float _150 = fma(_136, _142, fma(_98, _122, _100 * (fma(_138, _120, -(_140 * _124)) * _126)));
    float _152 = _128 * (-_144);
    float _154 = _130 * (-_144);
    float _156 = _132 * (-_144);
    float _158 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].y);
    float _160 = inversesqrt(fma(_150, _150, fma(_148, _148, _146 * _146)));
    float _162 = _146 * _160;
    float _164 = _148 * _160;
    float _166 = _150 * _160;
    float _168 = fma(_166, -_156, fma(_164, -_154, _162 * (-_152)));
    float _170 = 1.0 / (_76.z * gl_FragCoord.w);
    float _172 = fma(_162 * _168, -2.0, -_152);
    float _174 = fma(_164 * _168, -2.0, -_154);
    float _176 = fma(_166 * _168, -2.0, -_156);
    float _178 = 1.0 / max(abs(_176), max(abs(_172), abs(_174)));
    float _180 = fma(exp2(log2(clamp(fma(_166, _156, fma(_164, _154, _162 * _152)), 0.0, 1.0)) * fp_c6_1._m0[9].y), fp_c6_1._m0[41].x, fp_c6_1._m0[41].y);
    float _182 = max(_180, fp_c1_1._m0[0].z);
    vec2 _184 = texture(fp_tex_tcb_38, vec2(_182, (-_158) + (-0.0))).xy;
    float _186 = _184.x;
    float _188 = _184.y;
    vec3 _190 = texture(fp_tex_tcb_36, vec4(_172 * _178, _174 * _178, _176 * _178, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_158 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _192 = texture(fp_tex_tcb_14, vec2(_88, _90)).xyz;
    float _194 = _78.y;
    float _196 = _162 * _166;
    float _198 = fma(_158, 0.5, 0.5);
    float _200 = _162 * _164;
    float _202 = _164 * _166;
    float _204 = _194 + (-fp_c9_1._m0[32].w);
    float _206 = _166 * _166;
    float _208 = _204;
    if (_194 < fp_c9_1._m0[32].w)
    {
        _208 = _204 * (-5.0);
    }
    float _210 = _152 + (-fp_c5_1._m0[23].x);
    float _212 = _78.x;
    float _214 = _78.z;
    float _216 = _154 + (-fp_c5_1._m0[23].y);
    float _218 = (_198 * 0.5) * _198;
    float _220 = _156 + (-fp_c5_1._m0[23].z);
    float _222 = fma(_162, _162, -(_164 * _164));
    float _224 = max(0.0, ((-_164) + 1.2000000476837158203125) * (clamp(fma(_208, -(1.0 / fma(clamp((-_164) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_208, -(1.0 / fma(clamp((-_164) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0))) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w);
    float _226 = inversesqrt(fma(_220, _220, fma(_216, _216, _210 * _210)));
    float _228 = 1.0 / (_218 + fma(_182, -_218, _182));
    float _230 = _210 * _226;
    float _232 = _216 * _226;
    float _234 = fma(_106, -fp_c6_1._m0[9].x, _106);
    float _236 = _220 * _226;
    float _238 = clamp(_180 + (-0.0), 0.0, 1.0);
    float _240 = fma(fma(_234, -fp_c6_1._m0[40].x, _234), _238, _234 * fp_c6_1._m0[40].x);
    int _243 = max(0, min(int(trunc((_214 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _245 = _158 * _158;
    float _247 = fma(_108, -fp_c6_1._m0[9].x, _108);
    float _249 = max(fma(_156, _236, fma(_154, _232, _152 * _230)), fp_c1_1._m0[0].z);
    float _251 = fma(_164, -fp_c5_1._m0[23].y, _162 * (-fp_c5_1._m0[23].x));
    float _253 = _245 * _245;
    float _255 = max(fma(_166, _236, fma(_164, _232, _162 * _230)), fp_c1_1._m0[0].z) * max(fma(_166, _236, fma(_164, _232, _162 * _230)), fp_c1_1._m0[0].z);
    float _257 = max(fma(_166, -fp_c5_1._m0[23].z, _251), fp_c1_1._m0[0].z);
    float _259 = fma(_110, -fp_c6_1._m0[9].x, _110);
    uint _262 = uint(int(uint((((int(uint(_243) >> uint(16)) * 20) << 16) + (((_243 & 65535) * 20) + max(0, min(int(trunc((_212 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _264 = fp_c10_1._m0[int(uint(int(_262)) >> uint(2))][int(_262) & 3];
    float _266 = fma(_106 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _268 = fma(_108 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _270 = exp2(_249 * fma(_249, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _272 = fma(_110 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _274 = fma(fma(_247, -fp_c6_1._m0[40].y, _247), _238, _247 * fp_c6_1._m0[40].y);
    float _276 = fma(fma(_259, -fp_c6_1._m0[40].z, _259), _238, _259 * fp_c6_1._m0[40].z);
    float _278 = (_228 * (1.0 / (_218 + fma(_218, -_257, _257)))) * ((_245 * (1.0 / max(fma(_255, _253, -_255) + 1.0, fp_c1_1._m0[0].z))) * (_245 * (1.0 / max(fma(_255, _253, -_255) + 1.0, fp_c1_1._m0[0].z))));
    float _280 = fma(_190.x, fma(_266, _186, _188), fma(_224, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_222, fp_c5_1._m0[31].x, (fma(_166, fp_c5_1._m0[25].z, fma(_164, fp_c5_1._m0[25].y, _162 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_196, fp_c5_1._m0[28].w, fma(_206, fp_c5_1._m0[28].z, fma(_202, fp_c5_1._m0[28].y, _200 * fp_c5_1._m0[28].x)))))) * fma(_240, -_266, _240));
    float _282 = clamp(fma(_166, -fp_c5_1._m0[23].z, _251), 0.0, 1.0);
    float _284 = fma(_190.y, fma(_268, _186, _188), fma(_224, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_222, fp_c5_1._m0[31].y, (fma(_166, fp_c5_1._m0[26].z, fma(_164, fp_c5_1._m0[26].y, _162 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_196, fp_c5_1._m0[29].w, fma(_206, fp_c5_1._m0[29].z, fma(_202, fp_c5_1._m0[29].y, _200 * fp_c5_1._m0[29].x)))))) * fma(_274, -_268, _274));
    float _286 = clamp(texture(fp_tex_tcb_18, vec2(_88, _90)).x + (-0.0), 0.0, 1.0);
    float _288 = fma(_190.z, fma(_272, _186, _188), fma(_224, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_222, fp_c5_1._m0[31].z, (fma(_166, fp_c5_1._m0[27].z, fma(_164, fp_c5_1._m0[27].y, _162 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_196, fp_c5_1._m0[30].w, fma(_206, fp_c5_1._m0[30].z, fma(_202, fp_c5_1._m0[30].y, _200 * fp_c5_1._m0[30].x)))))) * fma(_276, -_272, _276));
    float _290 = clamp((-fma(max((-_112.x) + 1.0, (-_112.y) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _170, (_76.y * gl_FragCoord.w) * _170)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _292 = floatBitsToInt(_264);
    float _294 = _284;
    float _296 = _288;
    float _298 = _280;
    float _300 = _280;
    float _302 = _284;
    float _304 = _288;
    if (floatBitsToInt(_264) != (-1))
    {
        int _306 = 0;
        float _310;
        float _312;
        float _314;
        int _400;
        do
        {
            int _308 = _292 & 255;
            _310 = _298;
            _312 = _294;
            _314 = _296;
            _318 = uint(_308) >= 30u;
            if (_318)
            {
                break;
            }
            int _320 = _308 << 4;
            uint _322 = uint(int(uint(_320 + 7360) >> uint(2)));
            int _324 = int(_322) + 1;
            uint _326 = uint(int(uint(_320 + 7368) >> uint(2)));
            float _328 = (-_212) + fp_c10_1._m0[int(uint(int(_322)) >> uint(2))][int(_322) & 3];
            float _330 = (-_194) + fp_c10_1._m0[int(uint(_324) >> uint(2))][_324 & 3];
            float _332 = (-_214) + fp_c10_1._m0[int(uint(int(_326)) >> uint(2))][int(_326) & 3];
            float _334 = fma(_332, _332, fma(_330, _330, _328 * _328));
            float _336 = _328 * inversesqrt(_334);
            float _338 = _330 * inversesqrt(_334);
            float _340 = _332 * inversesqrt(_334);
            float _342 = _152 + _336;
            float _344 = _154 + _338;
            float _346 = _156 + _340;
            uint _348 = uint(int(uint(_320 + 6880) >> uint(2)));
            int _350 = int(_348) + 1;
            float _352 = inversesqrt(fma(_346, _346, fma(_344, _344, _342 * _342)));
            float _354 = _342 * _352;
            float _356 = _344 * _352;
            float _358 = _346 * _352;
            uint _360 = uint(int(uint(_320 + 8320) >> uint(2)));
            float _362 = max(fma(_156, _358, fma(_154, _356, _152 * _354)), fp_c1_1._m0[0].z);
            float _364 = fma(_166, _340, fma(_164, _338, _162 * _336));
            float _366 = max(fma(_166, _358, fma(_164, _356, _162 * _354)), fp_c1_1._m0[0].z) * max(fma(_166, _358, fma(_164, _356, _162 * _354)), fp_c1_1._m0[0].z);
            float _368 = max(_364, fp_c1_1._m0[0].z);
            uint _370 = uint(int(uint(_320 + 6400) >> uint(2)));
            int _372 = int(_370) + 1;
            float _374 = exp2(_362 * fma(_362, fp_c1_1._m0[0].w, -6.9831600189208984375));
            uint _376 = uint(int(uint(_320 + 6408) >> uint(2)));
            bool _378 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3]) != 0;
            float _380 = (_228 * (1.0 / (_218 + fma(_218, -_368, _368)))) * ((_245 * (1.0 / max(fma(_253, _366, -_366) + 1.0, fp_c1_1._m0[0].z))) * (_245 * (1.0 / max(fma(_253, _366, -_366) + 1.0, fp_c1_1._m0[0].z))));
            float _382 = _268 + fma(_268, -_374, _374);
            float _384 = _382;
            if (!_378)
            {
                _384 = 1.0;
            }
            float _386 = _384;
            if (_378)
            {
                uint _388 = uint(int(uint(_320 + 7840) >> uint(2)));
                int _390 = int(_388) + 1;
                uint _392 = uint(int(uint(_320 + 6888) >> uint(2)));
                float _394 = fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3];
                int _396 = int(_392) + 1;
                uint _398 = uint(int(uint(_320 + 7848) >> uint(2)));
                _386 = exp2(fp_c10_1._m0[int(uint(_396) >> uint(2))][_396 & 3] * log2(clamp(((-_394) + fma(_340, -fp_c10_1._m0[int(uint(int(_398)) >> uint(2))][int(_398) & 3], fma(_338, -fp_c10_1._m0[int(uint(_390) >> uint(2))][_390 & 3], _336 * (-fp_c10_1._m0[int(uint(int(_388)) >> uint(2))][int(_388) & 3])))) * (1.0 / ((-_394) + 1.0)), 0.0, 1.0)));
            }
            _400 = _306 + 1;
            float _402 = (exp2(fp_c10_1._m0[int(uint(_350) >> uint(2))][_350 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_348)) >> uint(2))][int(_348) & 3], -sqrt(_334), fp_c1_1._m0[0].x), 0.0, 1.0))) * _386) * clamp(_364 + (-0.0), 0.0, 1.0);
            float _404 = fma(fp_c10_1._m0[int(uint(_372) >> uint(2))][_372 & 3] * _402, fma(_274, fp_c1_1._m0[1].y, (_382 * _380) * 0.079577468335628509521484375), _294);
            float _406 = fma(fp_c10_1._m0[int(uint(int(_376)) >> uint(2))][int(_376) & 3] * _402, fma(_276, fp_c1_1._m0[1].y, ((_272 + fma(_272, -_374, _374)) * _380) * 0.079577468335628509521484375), _296);
            float _408 = fma(fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3] * _402, fma(_240, fp_c1_1._m0[1].y, ((_266 + fma(_266, -_374, _374)) * _380) * 0.079577468335628509521484375), _298);
            _292 = int(uint(_292) >> uint(8));
            _306 = _400;
            _294 = _404;
            _296 = _406;
            _298 = _408;
            _310 = _408;
            _312 = _404;
            _314 = _406;
        } while (!(_400 >= 4));
        _318 = false;
        _300 = _310;
        _302 = _312;
        _304 = _314;
        if ((_292 & 255) == 30)
        {
            float _410 = 1.0 / (fma(_214, fp_c10_1._m0[565].z, fma(_194, fp_c10_1._m0[565].y, _212 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _412 = 1.0 / fp_c10_1._m0[561].y;
            float _414 = _214 + (-fp_c10_1._m0[557].z);
            float _416 = _414 * fp_c10_1._m0[558].x;
            float _418 = (-_212) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_412, fp_c10_1._m0[557].x);
            float _420 = (-_214) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_412, fp_c10_1._m0[557].z);
            float _422 = _212 + (-fp_c10_1._m0[557].x);
            float _424 = _418 * _418;
            float _426 = _422 * fp_c10_1._m0[558].z;
            float _428 = fma(_414, _414, _422 * _422);
            float _430 = sqrt(fma(_420, _420, _424)) * (-fp_c10_1._m0[558].y);
            float _432 = ((-float(_416 < _426)) + float(_416 > _426)) * fp_c10_1._m0[561].y;
            float _434 = inversesqrt(fma(_420, _420, fma(_430, _430, _424)));
            float _436 = _418 * _434;
            float _438 = _430 * _434;
            float _440 = _420 * _434;
            float _442 = _152 + _436;
            float _444 = fma(_414, fp_c10_1._m0[558].z, _422 * fp_c10_1._m0[558].x);
            float _446 = _154 + _438;
            bool _448 = _444 > 0.0;
            float _450 = inversesqrt(fma(_440, _440, _436 * _436));
            float _452 = _156 + _440;
            float _454 = fma(_166, _440, fma(_164, _438, _162 * _436));
            float _456 = inversesqrt(fma(_452, _452, fma(_446, _446, _442 * _442)));
            float _458 = _440 * _450;
            float _460 = _442 * _456;
            float _462 = _446 * _456;
            float _464 = _452 * _456;
            float _466 = _458;
            if (_448)
            {
                _466 = sqrt(_428);
            }
            float _468 = _466;
            if (!_448)
            {
                _468 = 1.0;
            }
            bool _470 = fma(_414 * inversesqrt(_428), fp_c10_1._m0[558].z, (_422 * inversesqrt(_428)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _472 = max(fma(_156, _464, fma(_154, _462, _152 * _460)), fp_c1_1._m0[0].z);
            float _474 = clamp(fma(_444 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_444 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0);
            float _476 = max(_454, fp_c1_1._m0[0].z);
            float _478 = max(fma(_166, _464, fma(_164, _462, _162 * _460)), fp_c1_1._m0[0].z) * max(fma(_166, _464, fma(_164, _462, _162 * _460)), fp_c1_1._m0[0].z);
            float _480 = fma(_218, -_476, _476);
            float _482 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_422, fma(_432, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_414 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_432 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_422, fma(_432, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_414 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_432 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _484 = _480;
            if (!_470)
            {
                _484 = 1.0;
            }
            float _486 = _484;
            if (_470)
            {
                _486 = fma(_482, -_482, fp_c1_1._m0[0].x) * fma(_482, -_482, fp_c1_1._m0[0].x);
            }
            float _488 = exp2(_472 * fma(_472, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _490 = (_228 * (1.0 / (_218 + _480))) * ((_245 * (1.0 / max(fma(_253, _478, -_478) + 1.0, fp_c1_1._m0[0].z))) * (_245 * (1.0 / max(fma(_253, _478, -_478) + 1.0, fp_c1_1._m0[0].z))));
            float _492 = (min(fma(_474, -_474, fp_c1_1._m0[0].x) * fma(_474, -_474, fp_c1_1._m0[0].x), _486) * (exp2(log2(clamp(fma(_468, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_458, -fp_c10_1._m0[558].z, (_436 * _450) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_454 + (-0.0), 0.0, 1.0);
            float _494 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_214, fp_c10_1._m0[562].z, fma(_194, fp_c10_1._m0[562].y, _212 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _410, 0.5, 0.5), (-fma((fma(_214, fp_c10_1._m0[563].z, fma(_194, fp_c10_1._m0[563].y, _212 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _410, 0.5, 0.5)) + 1.0)).z > fma((fma(_214, fp_c10_1._m0[564].z, fma(_194, fp_c10_1._m0[564].y, _212 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _410, 0.5, 0.5)) || (_444 <= 0.0));
            _300 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _492) * fma(_240, fp_c1_1._m0[1].y, ((_266 + fma(_266, -_488, _488)) * _490) * 0.079577468335628509521484375), _494, _310);
            _302 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _492) * fma(_274, fp_c1_1._m0[1].y, ((_268 + fma(_268, -_488, _488)) * _490) * 0.079577468335628509521484375), _494, _312);
            _304 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _492) * fma(_276, fp_c1_1._m0[1].y, ((_272 + fma(_272, -_488, _488)) * _490) * 0.079577468335628509521484375), _494, _314);
        }
    }
    float _496 = _212 + (-fp_c3_1._m0[11].w);
    float _498 = _194 + (-fp_c3_1._m0[12].w);
    float _500 = _214 + (-fp_c3_1._m0[13].w);
    float _502 = fma(_500, _500, fma(_498, _498, _496 * _496));
    float _504 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _506 = fma(fma((-fp_c6_1._m0[12].x) + fp_c6_1._m0[14].x, fp_c7_1._m0[52].w, fp_c6_1._m0[12].x) * _192.x, _504, fma(_286, _300, _290 * (fma(_278 * (_266 + fma(_266, -_270, _270)), fp_c1_1._m0[1].x, _240 * 0.3183098733425140380859375) * (_282 * fp_c5_1._m0[5].x))));
    float _508 = clamp(fma(_286 * _290, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _510 = fma(fma((-fp_c6_1._m0[12].y) + fp_c6_1._m0[14].y, fp_c7_1._m0[52].w, fp_c6_1._m0[12].y) * _192.y, _504, fma(_286, _302, _290 * (fma(_278 * (_268 + fma(_268, -_270, _270)), fp_c1_1._m0[1].x, _274 * 0.3183098733425140380859375) * (_282 * fp_c5_1._m0[5].y))));
    float _512 = fma(fma((-fp_c6_1._m0[12].z) + fp_c6_1._m0[14].z, fp_c7_1._m0[52].w, fp_c6_1._m0[12].z) * _192.z, _504, fma(_286, _304, _290 * (fma(_278 * (_272 + fma(_272, -_270, _270)), fp_c1_1._m0[1].x, _276 * 0.3183098733425140380859375) * (_282 * fp_c5_1._m0[5].z))));
    float _514 = exp2(log2(clamp(sqrt(_502) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_500 * inversesqrt(_502), fp_c5_1._m0[23].z, fma(_498 * inversesqrt(_502), fp_c5_1._m0[23].y, (_496 * inversesqrt(_502)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _516 = clamp(fma(fma(_214, fp_c5_1._m0[14].z, fma(_194, fp_c5_1._m0[14].y, _212 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _518 = fma((-_506) + fp_c5_1._m0[13].x, _516, _506);
    float _520 = fma((-_510) + fp_c5_1._m0[13].y, _516, _510);
    float _522 = fma((-_512) + fp_c5_1._m0[13].z, _516, _512);
    float _524 = clamp((-exp2((clamp(fma(sqrt(_502), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_518) + fma(fma((_514 * fp_c7_1._m0[55].x) * _508, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _524, _518);
    _81.y = fma((-_520) + fma(fma((_514 * fp_c7_1._m0[55].y) * _508, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _524, _520);
    _81.z = fma((-_522) + fma(fma((_514 * fp_c7_1._m0[55].z) * _508, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _524, _522);
    _81.w = 1.0;
}


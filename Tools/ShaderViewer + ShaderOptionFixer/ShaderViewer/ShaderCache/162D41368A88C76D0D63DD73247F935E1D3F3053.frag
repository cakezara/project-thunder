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
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
layout(binding = 6) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 2) in vec4 _74;
layout(location = 4) in vec4 _76;
layout(location = 6) in vec4 _78;
layout(location = 5) in vec4 _80;
layout(location = 3) in vec4 _82;
layout(location = 0) out vec4 _85;
uint _6[12];

void main()
{
    bool _322 = false;
    float _92 = _70.x;
    float _94 = _70.y;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    float _104 = _72.x;
    float _106 = _72.y;
    float _108 = _72.z;
    float _110 = _74.y;
    float _112 = _74.z;
    float _114 = _74.x;
    float _116 = _74.w;
    float _118 = _76.x;
    float _120 = _76.y;
    float _122 = _76.z;
    float _124 = inversesqrt(fma(_108, _108, fma(_106, _106, _104 * _104)));
    float _126 = _108 * _124;
    float _128 = _104 * _124;
    float _130 = _106 * _124;
    float _132 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _134 = inversesqrt(fma(_122, _122, fma(_120, _120, _118 * _118)));
    float _136 = fma(_128, _132, fma(_100, _114, _102 * (fma(_130, _112, -(_126 * _110)) * _116)));
    float _138 = fma(_130, _132, fma(_100, _110, _102 * (fma(_126, _114, -(_128 * _112)) * _116)));
    float _140 = fma(_126, _132, fma(_100, _112, _102 * (fma(_128, _110, -(_130 * _114)) * _116)));
    float _142 = _118 * (-_134);
    float _144 = _120 * (-_134);
    float _146 = _122 * (-_134);
    float _148 = inversesqrt(fma(_140, _140, fma(_138, _138, _136 * _136)));
    float _150 = max(texture(fp_tex_tcb_10, vec2(_92, _94)).x, fp_c1_1._m0[0].y);
    float _152 = _136 * _148;
    float _154 = 1.0 / _80.w;
    float _156 = _138 * _148;
    float _158 = _140 * _148;
    float _160 = fma(_158, -_146, fma(_156, -_144, _152 * (-_142)));
    float _162 = fma(_158, _146, fma(_156, _144, _152 * _142));
    float _164 = fma(_152 * (-_162), -2.0, -_142);
    float _166 = fma(_156 * (-_162), -2.0, -_144);
    float _168 = 1.0 / (_78.z * gl_FragCoord.w);
    float _170 = max(_162, fp_c1_1._m0[0].w);
    float _172 = fma(_158 * (-_162), -2.0, -_146);
    float _174 = 1.0 / max(abs(_172), max(abs(_164), abs(_166)));
    float _176 = max(fma(_146, fma(_158 * _160, -2.0, -_146), fma(_144, fma(_156 * _160, -2.0, -_144), _142 * fma(_152 * _160, -2.0, -_142))), fp_c1_1._m0[0].w);
    vec3 _180 = texture(fp_tex_tcb_1E, vec2(fma(_176, fp_c6_1._m0[50].x, _70.z), _70.w)).xyz;
    vec3 _182 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _184 = _182.x;
    float _186 = _182.y;
    float _188 = _182.z;
    float _190 = texture(fp_tex_tcb_12, vec2(_92, _94)).x;
    vec2 _192 = texture(fp_tex_tcb_38, vec2(_170, (-_150) + (-0.0))).xy;
    float _194 = _192.x;
    float _196 = _192.y;
    vec2 _198 = texture(fp_tex_tcb_2A, vec2(fma(_80.x * _154, 0.5, 0.5), fma(_80.y * _154, -0.5, 0.5))).xy;
    vec3 _200 = texture(fp_tex_tcb_36, vec4(_164 * _174, _166 * _174, _172 * _174, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_150 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _202 = texture(fp_tex_tcb_14, vec2(_92, _94)).xyz;
    float _204 = _82.y;
    float _206 = _142 + (-fp_c5_1._m0[23].x);
    float _208 = _144 + (-fp_c5_1._m0[23].y);
    float _210 = _146 + (-fp_c5_1._m0[23].z);
    float _212 = _158 * _158;
    float _214 = _152 * _158;
    float _216 = fma(_150, 0.5, 0.5);
    float _218 = (_216 * 0.5) * _216;
    float _220 = inversesqrt(fma(_210, _210, fma(_208, _208, _206 * _206)));
    float _222 = _152 * _156;
    float _224 = _206 * _220;
    float _226 = _208 * _220;
    float _228 = _210 * _220;
    float _230 = _156 * _158;
    float _232 = _204 + (-fp_c9_1._m0[32].w);
    float _234 = _82.z;
    float _236 = _232;
    float _238 = _156;
    if (_204 < fp_c9_1._m0[32].w)
    {
        _236 = _232 * (-5.0);
    }
    float _240 = max(0.0, ((-_156) + 1.2000000476837158203125) * (clamp(fma(_236, -(1.0 / fma(clamp((-_156) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_236, -(1.0 / fma(clamp((-_156) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0))) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w);
    float _242 = fma(_152, _152, -(_156 * _156));
    float _244 = _82.x;
    float _246 = max(fma(_146, _228, fma(_144, _226, _142 * _224)), fp_c1_1._m0[0].w);
    float _248 = exp2(_176 * fma(_176, fp_c1_1._m0[1].x, -6.9831600189208984375));
    float _250 = max(fma(_158, _228, fma(_156, _226, _152 * _224)), fp_c1_1._m0[0].w) * max(fma(_158, _228, fma(_156, _226, _152 * _224)), fp_c1_1._m0[0].w);
    int _253 = max(0, min(int(trunc((_234 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _255 = fma(_184, -_190, _184);
    float _257 = fma(_186, -_190, _186);
    float _259 = fma(_190, _186 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _261 = fma(_190, _188 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _263 = fma(_190, _184 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _265 = fma(_188, -_190, _188);
    float _267 = clamp(texture(fp_tex_tcb_18, vec2(_92, _94)).x + (-0.0), 0.0, 1.0);
    float _269 = _150 * _150;
    float _271 = _269 * _269;
    float _273 = fma(_156, -fp_c5_1._m0[23].y, _152 * (-fp_c5_1._m0[23].x));
    float _275 = clamp(fma(_158, -fp_c5_1._m0[23].z, _273), 0.0, 1.0);
    float _277 = max(fma(_158, -fp_c5_1._m0[23].z, _273), fp_c1_1._m0[0].w);
    uint _280 = uint(int(uint((((int(uint(_253) >> uint(16)) * 20) << 16) + (((_253 & 65535) * 20) + max(0, min(int(trunc((_244 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _282 = fp_c10_1._m0[int(uint(int(_280)) >> uint(2))][int(_280) & 3];
    float _284 = exp2(_246 * fma(_246, fp_c1_1._m0[1].x, -6.9831600189208984375));
    float _286 = ((1.0 / (_218 + fma(_170, -_218, _170))) * (1.0 / (_218 + fma(_218, -_277, _277)))) * ((_269 * (1.0 / max(fma(_250, _271, -_250) + 1.0, fp_c1_1._m0[0].w))) * (_269 * (1.0 / max(fma(_250, _271, -_250) + 1.0, fp_c1_1._m0[0].w))));
    float _288 = fma(fma(_240, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_242, fp_c5_1._m0[31].x, (fma(_158, fp_c5_1._m0[25].z, fma(_156, fp_c5_1._m0[25].y, _152 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_214, fp_c5_1._m0[28].w, fma(_212, fp_c5_1._m0[28].z, fma(_230, fp_c5_1._m0[28].y, _222 * fp_c5_1._m0[28].x)))))), fma(_263, -_255, _255), fma(fma(_263, _194, _196), _200.x, (_263 + fma(_263, -_248, _248)) * (_184 * (_180.x * fp_c6_1._m0[49].w))));
    float _290 = fma(fma(_240, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_242, fp_c5_1._m0[31].y, (fma(_158, fp_c5_1._m0[26].z, fma(_156, fp_c5_1._m0[26].y, _152 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_214, fp_c5_1._m0[29].w, fma(_212, fp_c5_1._m0[29].z, fma(_230, fp_c5_1._m0[29].y, _222 * fp_c5_1._m0[29].x)))))), fma(_259, -_257, _257), fma(fma(_259, _194, _196), _200.y, (_259 + fma(_259, -_248, _248)) * (_186 * (_180.y * fp_c6_1._m0[49].w))));
    float _292 = fma(fma(_240, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_242, fp_c5_1._m0[31].z, (fma(_158, fp_c5_1._m0[27].z, fma(_156, fp_c5_1._m0[27].y, _152 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_214, fp_c5_1._m0[30].w, fma(_212, fp_c5_1._m0[30].z, fma(_230, fp_c5_1._m0[30].y, _222 * fp_c5_1._m0[30].x)))))), fma(_261, -_265, _265), fma(fma(_261, _194, _196), _200.z, (_261 + fma(_261, -_248, _248)) * (_188 * (_180.z * fp_c6_1._m0[49].w))));
    float _294 = clamp((-fma(max((-_198.x) + 1.0, (-_198.y) + 1.0), clamp(_82.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_78.x * gl_FragCoord.w) * _168, (_78.y * gl_FragCoord.w) * _168)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _296 = floatBitsToInt(_282);
    float _298 = _290;
    float _300 = _292;
    float _302 = _288;
    float _304 = _290;
    float _306 = _288;
    float _308 = _292;
    if (floatBitsToInt(_282) != (-1))
    {
        int _310 = 0;
        float _314;
        float _316;
        float _318;
        int _404;
        do
        {
            int _312 = _296 & 255;
            _314 = _302;
            _316 = _298;
            _318 = _300;
            _322 = uint(_312) >= 30u;
            if (_322)
            {
                break;
            }
            int _324 = _312 << 4;
            uint _326 = uint(int(uint(_324 + 7360) >> uint(2)));
            int _328 = int(_326) + 1;
            uint _330 = uint(int(uint(_324 + 7368) >> uint(2)));
            float _332 = (-_244) + fp_c10_1._m0[int(uint(int(_326)) >> uint(2))][int(_326) & 3];
            float _334 = (-_204) + fp_c10_1._m0[int(uint(_328) >> uint(2))][_328 & 3];
            float _336 = (-_234) + fp_c10_1._m0[int(uint(int(_330)) >> uint(2))][int(_330) & 3];
            float _338 = fma(_336, _336, fma(_334, _334, _332 * _332));
            float _340 = _332 * inversesqrt(_338);
            float _342 = _334 * inversesqrt(_338);
            float _344 = _336 * inversesqrt(_338);
            float _346 = _142 + _340;
            float _348 = _144 + _342;
            float _350 = _146 + _344;
            uint _352 = uint(int(uint(_324 + 6880) >> uint(2)));
            int _354 = int(_352) + 1;
            float _356 = inversesqrt(fma(_350, _350, fma(_348, _348, _346 * _346)));
            float _358 = _346 * _356;
            float _360 = _348 * _356;
            float _362 = _350 * _356;
            uint _364 = uint(int(uint(_324 + 8320) >> uint(2)));
            float _366 = max(fma(_146, _362, fma(_144, _360, _142 * _358)), fp_c1_1._m0[0].w);
            float _368 = fma(_158, _344, fma(_156, _342, _152 * _340));
            float _370 = max(fma(_158, _362, fma(_156, _360, _152 * _358)), fp_c1_1._m0[0].w) * max(fma(_158, _362, fma(_156, _360, _152 * _358)), fp_c1_1._m0[0].w);
            float _372 = max(_368, fp_c1_1._m0[0].w);
            uint _374 = uint(int(uint(_324 + 6408) >> uint(2)));
            uint _376 = uint(int(uint(_324 + 6400) >> uint(2)));
            int _378 = int(_376) + 1;
            float _380 = exp2(_366 * fma(_366, fp_c1_1._m0[1].x, -6.9831600189208984375));
            bool _382 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3]) != 0;
            float _384 = _259 + fma(_259, -_380, _380);
            float _386 = ((1.0 / (_218 + fma(_170, -_218, _170))) * (1.0 / (_218 + fma(_218, -_372, _372)))) * ((_269 * (1.0 / max(fma(_271, _370, -_370) + 1.0, fp_c1_1._m0[0].w))) * (_269 * (1.0 / max(fma(_271, _370, -_370) + 1.0, fp_c1_1._m0[0].w))));
            float _388 = _384;
            if (!_382)
            {
                _388 = 1.0;
            }
            float _390 = _388;
            if (_382)
            {
                uint _392 = uint(int(uint(_324 + 7840) >> uint(2)));
                int _394 = int(_392) + 1;
                uint _396 = uint(int(uint(_324 + 7848) >> uint(2)));
                uint _398 = uint(int(uint(_324 + 6888) >> uint(2)));
                float _400 = fp_c10_1._m0[int(uint(int(_398)) >> uint(2))][int(_398) & 3];
                int _402 = int(_398) + 1;
                _390 = exp2(fp_c10_1._m0[int(uint(_402) >> uint(2))][_402 & 3] * log2(clamp(((-_400) + fma(_344, -fp_c10_1._m0[int(uint(int(_396)) >> uint(2))][int(_396) & 3], fma(_342, -fp_c10_1._m0[int(uint(_394) >> uint(2))][_394 & 3], _340 * (-fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3])))) * (1.0 / ((-_400) + 1.0)), 0.0, 1.0)));
            }
            _404 = _310 + 1;
            float _406 = (exp2(fp_c10_1._m0[int(uint(_354) >> uint(2))][_354 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_352)) >> uint(2))][int(_352) & 3], -sqrt(_338), fp_c1_1._m0[0].x), 0.0, 1.0))) * _390) * clamp(_368 + (-0.0), 0.0, 1.0);
            float _408 = fma(fp_c10_1._m0[int(uint(_378) >> uint(2))][_378 & 3] * _406, fma(_257, fp_c1_1._m0[1].z, (_384 * _386) * 0.079577468335628509521484375), _298);
            float _410 = fma(fp_c10_1._m0[int(uint(int(_374)) >> uint(2))][int(_374) & 3] * _406, fma(_265, fp_c1_1._m0[1].z, ((_261 + fma(_261, -_380, _380)) * _386) * 0.079577468335628509521484375), _300);
            float _412 = fma(fp_c10_1._m0[int(uint(int(_376)) >> uint(2))][int(_376) & 3] * _406, fma(_255, fp_c1_1._m0[1].z, ((_263 + fma(_263, -_380, _380)) * _386) * 0.079577468335628509521484375), _302);
            _296 = int(uint(_296) >> uint(8));
            _310 = _404;
            _298 = _408;
            _300 = _410;
            _302 = _412;
            _314 = _412;
            _316 = _408;
            _318 = _410;
        } while (!(_404 >= 4));
        _322 = false;
        _304 = _316;
        _306 = _314;
        _308 = _318;
        if ((_296 & 255) == 30)
        {
            float _414 = 1.0 / (fma(_234, fp_c10_1._m0[565].z, fma(_204, fp_c10_1._m0[565].y, _244 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _416 = 1.0 / fp_c10_1._m0[561].y;
            float _418 = _234 + (-fp_c10_1._m0[557].z);
            float _420 = (-_244) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_416, fp_c10_1._m0[557].x);
            float _422 = (-_234) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_416, fp_c10_1._m0[557].z);
            float _424 = _244 + (-fp_c10_1._m0[557].x);
            float _426 = _418 * fp_c10_1._m0[558].x;
            float _428 = _420 * _420;
            float _430 = fma(_418, _418, _424 * _424);
            float _432 = _424 * fp_c10_1._m0[558].z;
            float _434 = sqrt(fma(_422, _422, _428)) * (-fp_c10_1._m0[558].y);
            float _436 = ((-float(_426 < _432)) + float(_426 > _432)) * fp_c10_1._m0[561].y;
            float _438 = inversesqrt(fma(_422, _422, fma(_434, _434, _428)));
            bool _440 = fma(_418 * inversesqrt(_430), fp_c10_1._m0[558].z, (_424 * inversesqrt(_430)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _442 = _420 * _438;
            float _444 = _434 * _438;
            float _446 = _422 * _438;
            float _448 = _142 + _442;
            float _450 = _144 + _444;
            float _452 = fma(_418, fp_c10_1._m0[558].z, _424 * fp_c10_1._m0[558].x);
            float _454 = _146 + _446;
            bool _456 = _452 > 0.0;
            float _458 = inversesqrt(fma(_454, _454, fma(_450, _450, _448 * _448)));
            float _460 = inversesqrt(fma(_446, _446, _442 * _442));
            float _462 = _448 * _458;
            float _464 = _450 * _458;
            float _466 = _442 * _460;
            float _468 = _454 * _458;
            float _470 = fma(_158, _446, fma(_156, _444, _152 * _442));
            float _472 = _466;
            if (_456)
            {
                _472 = sqrt(_430);
            }
            float _474 = _472;
            if (!_456)
            {
                _474 = 1.0;
            }
            float _476 = max(_470, fp_c1_1._m0[0].w);
            float _478 = max(fma(_158, _468, fma(_156, _464, _152 * _462)), fp_c1_1._m0[0].w) * max(fma(_158, _468, fma(_156, _464, _152 * _462)), fp_c1_1._m0[0].w);
            float _480 = max(fma(_146, _468, fma(_144, _464, _142 * _462)), fp_c1_1._m0[0].w);
            float _482 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_424, fma(_436, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_418 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_436 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_424, fma(_436, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_418 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_436 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _484 = clamp(fma(_452 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_452 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0);
            if (!_440)
            {
                _238 = 1.0;
            }
            float _486 = _238;
            if (_440)
            {
                _486 = fma(_482, -_482, fp_c1_1._m0[0].x) * fma(_482, -_482, fp_c1_1._m0[0].x);
            }
            float _488 = exp2(_480 * fma(_480, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _490 = (min(fma(_484, -_484, fp_c1_1._m0[0].x) * fma(_484, -_484, fp_c1_1._m0[0].x), _486) * (exp2(log2(clamp(fma(_474, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_446 * _460, -fp_c10_1._m0[558].z, _466 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_470 + (-0.0), 0.0, 1.0);
            float _492 = ((1.0 / (_218 + fma(_170, -_218, _170))) * (1.0 / (_218 + fma(_218, -_476, _476)))) * ((_269 * (1.0 / max(fma(_271, _478, -_478) + 1.0, fp_c1_1._m0[0].w))) * (_269 * (1.0 / max(fma(_271, _478, -_478) + 1.0, fp_c1_1._m0[0].w))));
            float _494 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_234, fp_c10_1._m0[562].z, fma(_204, fp_c10_1._m0[562].y, _244 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _414, 0.5, 0.5), (-fma((fma(_234, fp_c10_1._m0[563].z, fma(_204, fp_c10_1._m0[563].y, _244 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _414, 0.5, 0.5)) + 1.0)).z > fma((fma(_234, fp_c10_1._m0[564].z, fma(_204, fp_c10_1._m0[564].y, _244 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _414, 0.5, 0.5)) || (_452 <= 0.0));
            _304 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _490) * fma(_257, fp_c1_1._m0[1].z, ((_259 + fma(_259, -_488, _488)) * _492) * 0.079577468335628509521484375), _494, _316);
            _306 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _490) * fma(_255, fp_c1_1._m0[1].z, ((_263 + fma(_263, -_488, _488)) * _492) * 0.079577468335628509521484375), _494, _314);
            _308 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _490) * fma(_265, fp_c1_1._m0[1].z, ((_261 + fma(_261, -_488, _488)) * _492) * 0.079577468335628509521484375), _494, _318);
        }
    }
    float _496 = _244 + (-fp_c3_1._m0[11].w);
    float _498 = _204 + (-fp_c3_1._m0[12].w);
    float _500 = _234 + (-fp_c3_1._m0[13].w);
    float _502 = fma(_500, _500, fma(_498, _498, _496 * _496));
    float _504 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _506 = fma(_202.x * fp_c6_1._m0[92].x, _504, fma(_267, _306, _294 * ((_275 * fp_c5_1._m0[5].x) * fma(_286 * (_263 + fma(_263, -_284, _284)), fp_c1_1._m0[1].y, _255 * 0.3183098733425140380859375))));
    float _508 = clamp(fma(fma(_234, fp_c5_1._m0[14].z, fma(_204, fp_c5_1._m0[14].y, _244 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _510 = fma(_202.y * fp_c6_1._m0[92].y, _504, fma(_267, _304, _294 * ((_275 * fp_c5_1._m0[5].y) * fma(_286 * (_259 + fma(_259, -_284, _284)), fp_c1_1._m0[1].y, _257 * 0.3183098733425140380859375))));
    float _512 = clamp(fma(_267 * _294, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _514 = fma(_202.z * fp_c6_1._m0[92].z, _504, fma(_267, _308, _294 * ((_275 * fp_c5_1._m0[5].z) * fma(_286 * (_261 + fma(_261, -_284, _284)), fp_c1_1._m0[1].y, _265 * 0.3183098733425140380859375))));
    float _516 = exp2(log2(clamp(sqrt(_502) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_500 * inversesqrt(_502), fp_c5_1._m0[23].z, fma(_498 * inversesqrt(_502), fp_c5_1._m0[23].y, (_496 * inversesqrt(_502)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _518 = fma((-_506) + fp_c5_1._m0[13].x, _508, _506);
    float _520 = fma((-_510) + fp_c5_1._m0[13].y, _508, _510);
    float _522 = fma((-_514) + fp_c5_1._m0[13].z, _508, _514);
    float _524 = clamp((-exp2((clamp(fma(sqrt(_502), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _85.x = fma((-_518) + fma(fma((_516 * fp_c7_1._m0[55].x) * _512, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _524, _518);
    _85.y = fma((-_520) + fma(fma((_516 * fp_c7_1._m0[55].y) * _512, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _524, _520);
    _85.z = fma((-_522) + fma(fma((_516 * fp_c7_1._m0[55].z) * _512, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _524, _522);
    _85.w = 1.0;
}


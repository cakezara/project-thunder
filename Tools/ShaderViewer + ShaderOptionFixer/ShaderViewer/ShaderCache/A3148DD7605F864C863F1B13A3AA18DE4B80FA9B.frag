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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_22;
layout(binding = 5) uniform sampler2D fp_tex_tcb_24;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _74;
layout(location = 0) out vec4 _77;
layout(location = 4) in vec4 _79;
layout(location = 7) in vec4 _81;
layout(location = 6) in vec4 _83;
layout(location = 5) in vec4 _85;
layout(location = 3) in vec4 _87;
uint _6[12];

void main()
{
    bool _358 = false;
    float _94 = _66.x;
    float _96 = _66.y;
    float _98 = texture(fp_tex_tcb_8, vec2(_94, _96)).x;
    bool _101 = _98 <= 0.0;
    if (_101)
    {
        discard;
    }
    vec2 _105 = texture(fp_tex_tcb_E, vec2(_94, _96)).xy;
    float _107 = _105.x;
    float _109 = _105.y;
    vec3 _113 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _115 = _113.x;
    float _117 = _113.y;
    float _119 = _113.z;
    float _121 = _68.x;
    float _123 = _68.y;
    float _125 = _68.z;
    float _127 = _74.x;
    float _129 = _74.y;
    float _131 = _74.z;
    float _133 = _74.w;
    float _135 = inversesqrt(fma(_125, _125, fma(_123, _123, _121 * _121)));
    bool _137 = floatBitsToInt(fma(float(gl_FrontFacing ? (-1) : 0), -2.0, -1.0)) <= 0;
    float _139 = _125 * _135;
    float _141 = _121 * _135;
    float _143 = _123 * _135;
    int _146 = floatBitsToInt(_135);
    float _148 = _129;
    float _150 = _131;
    float _152 = _139;
    float _154 = _141;
    float _156 = _127;
    float _158 = _143;
    if (_101)
    {
        _146 = 0;
    }
    if (_137)
    {
        _148 = (-_129) + (-0.0);
    }
    if (_137)
    {
        _150 = (-_131) + (-0.0);
    }
    if (_137)
    {
        _152 = (-_139) + (-0.0);
    }
    if (_137)
    {
        _154 = (-_141) + (-0.0);
    }
    if (_137)
    {
        _156 = (-_127) + (-0.0);
    }
    if (_137)
    {
        _158 = (-_143) + (-0.0);
    }
    float _160 = fma(_150, _158, -(_148 * _152));
    float _162 = fma(_156, _152, -(_150 * _154));
    float _164 = fma(_148, _154, -(_156 * _158));
    int _166 = floatBitsToInt(_162);
    int _168 = floatBitsToInt(_164);
    int _170 = floatBitsToInt(_160);
    if (_101)
    {
        _166 = 0;
    }
    if (_101)
    {
        _168 = 0;
    }
    if (_101)
    {
        _170 = 0;
    }
    if (_101)
    {
        _77.x = intBitsToFloat(_166);
        _77.y = intBitsToFloat(_168);
        _77.z = intBitsToFloat(_170);
        _77.w = intBitsToFloat(_146);
        return;
    }
    float _172 = _79.x;
    float _174 = _79.y;
    float _176 = _79.z;
    float _178 = max(texture(fp_tex_tcb_10, vec2(_94, _96)).x, fp_c1_1._m0[0].x);
    float _180 = sqrt(clamp((-fma(_107, _107, _109 * _109)) + 1.0, 0.0, 1.0));
    float _182 = fma(_180, _154, fma(_107, _156, _109 * (_160 * _133)));
    float _184 = fma(_180, _158, fma(_107, _148, _109 * (_162 * _133)));
    float _186 = fma(_180, _152, fma(_107, _150, _109 * (_164 * _133)));
    float _188 = inversesqrt(fma(_186, _186, fma(_184, _184, _182 * _182)));
    float _190 = inversesqrt(fma(_176, _176, fma(_174, _174, _172 * _172)));
    float _192 = 1.0 / (_83.z * gl_FragCoord.w);
    float _194 = _182 * _188;
    float _196 = _184 * _188;
    float _198 = _186 * _188;
    float _200 = _172 * (-_190);
    float _202 = _174 * (-_190);
    float _204 = _176 * (-_190);
    float _206 = 1.0 / _85.w;
    float _208 = fma(_198, _204, fma(_196, _202, _194 * _200));
    float _210 = max(_208, fp_c1_1._m0[0].y);
    float _212 = fma(_194 * (-_208), -2.0, -_200);
    float _214 = fma(_196 * (-_208), -2.0, -_202);
    float _216 = fma(_198 * (-_208), -2.0, -_204);
    float _218 = 1.0 / max(abs(_216), max(abs(_212), abs(_214)));
    vec2 _220 = texture(fp_tex_tcb_2A, vec2(fma(_85.x * _206, 0.5, 0.5), fma(_85.y * _206, -0.5, 0.5))).xy;
    vec2 _222 = texture(fp_tex_tcb_38, vec2(_210, (-_178) + (-0.0))).xy;
    float _224 = _222.x;
    float _226 = _222.y;
    vec2 _228 = texture(fp_tex_tcb_22, vec2(_81.x, _81.y)).xy;
    vec3 _230 = texture(fp_tex_tcb_36, vec4(_212 * _218, _214 * _218, _216 * _218, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_178 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec4 _233 = texture(fp_tex_tcb_24, vec2(_81.z, _81.w)).xyzw;
    float _235 = _233.w;
    float _237 = _200 + (-fp_c5_1._m0[23].x);
    float _239 = _87.x;
    float _241 = _202 + (-fp_c5_1._m0[23].y);
    float _243 = _204 + (-fp_c5_1._m0[23].z);
    float _245 = _194 * _196;
    float _247 = _87.z;
    float _249 = inversesqrt(fma(_243, _243, fma(_241, _241, _237 * _237)));
    float _251 = _237 * _249;
    float _253 = _243 * _249;
    float _255 = _196 * _198;
    float _257 = _241 * _249;
    float _259 = _198 * _198;
    float _261 = _194 * _198;
    float _263 = fma(_178, 0.5, 0.5);
    float _265 = _178 * _178;
    float _267 = fma(_196, -fp_c5_1._m0[23].y, _194 * (-fp_c5_1._m0[23].x));
    float _269 = _265 * _265;
    float _271 = max(fma(_198, _253, fma(_196, _257, _194 * _251)), fp_c1_1._m0[0].y) * max(fma(_198, _253, fma(_196, _257, _194 * _251)), fp_c1_1._m0[0].y);
    float _273 = max(fma(_204, _253, fma(_202, _257, _200 * _251)), fp_c1_1._m0[0].y);
    float _275 = (_263 * 0.5) * _263;
    float _277 = clamp(fma(_198, -fp_c5_1._m0[23].z, _267), 0.0, 1.0);
    float _279 = max(fma(_198, -fp_c5_1._m0[23].z, _267), fp_c1_1._m0[0].y);
    float _281 = 1.0 / (_275 + fma(_210, -_275, _210));
    int _283 = max(0, min(int(trunc((_247 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _285 = exp2(_273 * fma(_273, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _287 = fma(_194, _194, -(_196 * _196));
    float _289 = fma(_115 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _291 = fma(_117 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _293 = fma(_119 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _295 = fma(_115, -fp_c6_1._m0[9].x, _115);
    uint _298 = uint(int(uint((((int(uint(_283) >> uint(16)) * 20) << 16) + (((_283 & 65535) * 20) + max(0, min(int(trunc((_239 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _300 = fp_c10_1._m0[int(uint(int(_298)) >> uint(2))][int(_298) & 3];
    float _302 = fma(_117, -fp_c6_1._m0[9].x, _117);
    float _304 = (_281 * (1.0 / (_275 + fma(_275, -_279, _279)))) * ((_265 * (1.0 / max(fma(_271, _269, -_271) + 1.0, fp_c1_1._m0[0].y))) * (_265 * (1.0 / max(fma(_271, _269, -_271) + 1.0, fp_c1_1._m0[0].y))));
    float _306 = fma(_119, -fp_c6_1._m0[9].x, _119);
    float _308 = _83.w;
    float _310 = fma(_291, -_302, _302);
    float _312 = fma(_289, -_295, _295);
    float _314 = fma(_293, -_306, _306);
    float _316 = clamp(_308 * clamp(fma(_228.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _318 = ((_233.y * _235) * _308) * 32.0;
    float _320 = ((_233.x * _235) * _308) * 32.0;
    float _322 = ((_233.z * _235) * _308) * 32.0;
    float _324 = fma(_312, _320, fma(_230.x, fma(_289, _224, _226), max(0.0, fma(_287, fp_c5_1._m0[31].x, (fma(_198, fp_c5_1._m0[25].z, fma(_196, fp_c5_1._m0[25].y, _194 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_261, fp_c5_1._m0[28].w, fma(_259, fp_c5_1._m0[28].z, fma(_255, fp_c5_1._m0[28].y, _245 * fp_c5_1._m0[28].x))))) * _312));
    float _326 = fma(_310, _318, fma(_230.y, fma(_291, _224, _226), max(0.0, fma(_287, fp_c5_1._m0[31].y, (fma(_198, fp_c5_1._m0[26].z, fma(_196, fp_c5_1._m0[26].y, _194 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_261, fp_c5_1._m0[29].w, fma(_259, fp_c5_1._m0[29].z, fma(_255, fp_c5_1._m0[29].y, _245 * fp_c5_1._m0[29].x))))) * _310));
    float _328 = clamp((-_316) + 1.0, 0.0, 1.0);
    float _330 = fma(_314, _322, fma(_230.z, fma(_293, _224, _226), max(0.0, fma(_287, fp_c5_1._m0[31].z, (fma(_198, fp_c5_1._m0[27].z, fma(_196, fp_c5_1._m0[27].y, _194 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_261, fp_c5_1._m0[30].w, fma(_259, fp_c5_1._m0[30].z, fma(_255, fp_c5_1._m0[30].y, _245 * fp_c5_1._m0[30].x))))) * _314));
    float _332 = clamp((-fma(_316, fp_c7_1._m0[37].w, clamp(_308 * clamp(fma(_228.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_220.x) + 1.0, (-_220.y) + 1.0), clamp(_87.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_83.x * gl_FragCoord.w) * _192, (_83.y * gl_FragCoord.w) * _192)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _334 = _330;
    float _336 = _324;
    float _338 = _326;
    float _340 = _326;
    float _342 = _324;
    float _344 = _330;
    if (floatBitsToInt(_300) != (-1))
    {
        int _346 = floatBitsToInt(_300);
        int _348 = 0;
        float _352;
        float _354;
        float _356;
        int _440;
        do
        {
            int _350 = _346 & 255;
            _352 = _336;
            _354 = _338;
            _356 = _334;
            _358 = uint(_350) >= 30u;
            if (_358)
            {
                break;
            }
            int _360 = _350 << 4;
            uint _362 = uint(int(uint(_360 + 7360) >> uint(2)));
            int _364 = int(_362) + 1;
            uint _366 = uint(int(uint(_360 + 7368) >> uint(2)));
            float _368 = (-_239) + fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3];
            float _370 = fp_c10_1._m0[int(uint(_364) >> uint(2))][_364 & 3] + (-_87.y);
            float _372 = (-_247) + fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3];
            float _374 = fma(_372, _372, fma(_370, _370, _368 * _368));
            float _376 = _368 * inversesqrt(_374);
            float _378 = _370 * inversesqrt(_374);
            float _380 = _372 * inversesqrt(_374);
            float _382 = _200 + _376;
            float _384 = _202 + _378;
            float _386 = _204 + _380;
            float _388 = inversesqrt(fma(_386, _386, fma(_384, _384, _382 * _382)));
            float _390 = _382 * _388;
            float _392 = _384 * _388;
            float _394 = _386 * _388;
            uint _396 = uint(int(uint(_360 + 6880) >> uint(2)));
            int _398 = int(_396) + 1;
            uint _400 = uint(int(uint(_360 + 8320) >> uint(2)));
            float _402 = max(fma(_204, _394, fma(_202, _392, _200 * _390)), fp_c1_1._m0[0].y);
            float _404 = fma(_198, _380, fma(_196, _378, _194 * _376));
            float _406 = max(fma(_198, _394, fma(_196, _392, _194 * _390)), fp_c1_1._m0[0].y) * max(fma(_198, _394, fma(_196, _392, _194 * _390)), fp_c1_1._m0[0].y);
            float _408 = max(_404, fp_c1_1._m0[0].y);
            uint _410 = uint(int(uint(_360 + 6408) >> uint(2)));
            uint _412 = uint(int(uint(_360 + 6400) >> uint(2)));
            int _414 = int(_412) + 1;
            float _416 = exp2(_402 * fma(_402, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _418 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_400)) >> uint(2))][int(_400) & 3]) != 0;
            float _420 = _281 * (1.0 / (_275 + fma(_275, -_408, _408)));
            float _422 = _420 * ((_265 * (1.0 / max(fma(_269, _406, -_406) + 1.0, fp_c1_1._m0[0].y))) * (_265 * (1.0 / max(fma(_269, _406, -_406) + 1.0, fp_c1_1._m0[0].y))));
            float _424 = _420;
            if (!_418)
            {
                _424 = 1.0;
            }
            float _426 = _424;
            if (_418)
            {
                uint _428 = uint(int(uint(_360 + 7840) >> uint(2)));
                int _430 = int(_428) + 1;
                uint _432 = uint(int(uint(_360 + 6888) >> uint(2)));
                float _434 = fp_c10_1._m0[int(uint(int(_432)) >> uint(2))][int(_432) & 3];
                int _436 = int(_432) + 1;
                uint _438 = uint(int(uint(_360 + 7848) >> uint(2)));
                _426 = exp2(fp_c10_1._m0[int(uint(_436) >> uint(2))][_436 & 3] * log2(clamp(((-_434) + fma(_380, -fp_c10_1._m0[int(uint(int(_438)) >> uint(2))][int(_438) & 3], fma(_378, -fp_c10_1._m0[int(uint(_430) >> uint(2))][_430 & 3], _376 * (-fp_c10_1._m0[int(uint(int(_428)) >> uint(2))][int(_428) & 3])))) * (1.0 / ((-_434) + 1.0)), 0.0, 1.0)));
            }
            _440 = _348 + 1;
            float _442 = (exp2(fp_c10_1._m0[int(uint(_398) >> uint(2))][_398 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_396)) >> uint(2))][int(_396) & 3], -sqrt(_374), fp_c1_1._m0[1].x), 0.0, 1.0))) * _426) * clamp(_404 + (-0.0), 0.0, 1.0);
            float _444 = fma(fp_c10_1._m0[int(uint(int(_410)) >> uint(2))][int(_410) & 3] * _442, fma(_306, fp_c1_1._m0[1].y, ((_293 + fma(_293, -_416, _416)) * _422) * 0.079577468335628509521484375), _334);
            float _446 = fma(fp_c10_1._m0[int(uint(int(_412)) >> uint(2))][int(_412) & 3] * _442, fma(_295, fp_c1_1._m0[1].y, ((_289 + fma(_289, -_416, _416)) * _422) * 0.079577468335628509521484375), _336);
            float _448 = fma(fp_c10_1._m0[int(uint(_414) >> uint(2))][_414 & 3] * _442, fma(_302, fp_c1_1._m0[1].y, ((_291 + fma(_291, -_416, _416)) * _422) * 0.079577468335628509521484375), _338);
            _346 = int(uint(_346) >> uint(8));
            _348 = _440;
            _334 = _444;
            _336 = _446;
            _338 = _448;
            _352 = _446;
            _354 = _448;
            _356 = _444;
        } while (!(_440 >= 4));
        _358 = false;
        _340 = _354;
        _342 = _352;
        _344 = _356;
        if ((_346 & 255) == 30)
        {
            float _450 = _87.y;
            float _452 = 1.0 / (fma(_247, fp_c10_1._m0[565].z, fma(_450, fp_c10_1._m0[565].y, _239 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _454 = 1.0 / fp_c10_1._m0[561].y;
            float _456 = _247 + (-fp_c10_1._m0[557].z);
            float _458 = _239 + (-fp_c10_1._m0[557].x);
            float _460 = (-_239) + fma(_454, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _462 = (-_247) + fma(_454, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _464 = _458 * fp_c10_1._m0[558].z;
            float _466 = _460 * _460;
            float _468 = _456 * fp_c10_1._m0[558].x;
            float _470 = fma(_456, _456, _458 * _458);
            float _472 = sqrt(fma(_462, _462, _466)) * (-fp_c10_1._m0[558].y);
            float _474 = ((-float(_468 < _464)) + float(_468 > _464)) * fp_c10_1._m0[561].y;
            float _476 = inversesqrt(fma(_462, _462, fma(_472, _472, _466)));
            float _478 = _460 * _476;
            float _480 = _472 * _476;
            float _482 = _462 * _476;
            float _484 = fma(_456, fp_c10_1._m0[558].z, _458 * fp_c10_1._m0[558].x);
            float _486 = _200 + _478;
            float _488 = _202 + _480;
            bool _490 = _484 > 0.0;
            float _492 = inversesqrt(fma(_482, _482, _478 * _478));
            float _494 = _204 + _482;
            float _496 = inversesqrt(fma(_494, _494, fma(_488, _488, _486 * _486)));
            float _498 = fma(_198, _482, fma(_196, _480, _194 * _478));
            float _500 = _486 * _496;
            float _502 = _494 * _496;
            float _504 = _488 * _496;
            float _506 = _500;
            if (_490)
            {
                _506 = sqrt(_470);
            }
            float _508 = _506;
            if (!_490)
            {
                _508 = 1.0;
            }
            float _510 = max(_498, fp_c1_1._m0[0].y);
            bool _512 = fma(_456 * inversesqrt(_470), fp_c10_1._m0[558].z, (_458 * inversesqrt(_470)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _514 = max(fma(_204, _502, fma(_202, _504, _200 * _500)), fp_c1_1._m0[0].y);
            float _516 = max(fma(_198, _502, fma(_196, _504, _194 * _500)), fp_c1_1._m0[0].y) * max(fma(_198, _502, fma(_196, _504, _194 * _500)), fp_c1_1._m0[0].y);
            float _518 = fma(_275, -_510, _510);
            float _520 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_458, fma(_474, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_456 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_474 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_458, fma(_474, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_456 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_474 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _522 = clamp(fma(_484 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_484 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _524 = _518;
            if (_512)
            {
                _524 = fma(_520, -_520, fp_c1_1._m0[1].x) * fma(_520, -_520, fp_c1_1._m0[1].x);
            }
            float _526 = _524;
            if (!_512)
            {
                _526 = 1.0;
            }
            float _528 = exp2(_514 * fma(_514, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _530 = clamp(_498 + (-0.0), 0.0, 1.0) * (min(fma(_522, -_522, fp_c1_1._m0[1].x) * fma(_522, -_522, fp_c1_1._m0[1].x), _526) * (exp2(log2(clamp(fma(_508, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_482 * _492, -fp_c10_1._m0[558].z, (_478 * _492) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _532 = (_281 * (1.0 / (_275 + _518))) * ((_265 * (1.0 / max(fma(_269, _516, -_516) + 1.0, fp_c1_1._m0[0].y))) * (_265 * (1.0 / max(fma(_269, _516, -_516) + 1.0, fp_c1_1._m0[0].y))));
            float _534 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_247, fp_c10_1._m0[562].z, fma(_450, fp_c10_1._m0[562].y, _239 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _452, 0.5, 0.5), (-fma((fma(_247, fp_c10_1._m0[563].z, fma(_450, fp_c10_1._m0[563].y, _239 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _452, 0.5, 0.5)) + 1.0)).z > fma((fma(_247, fp_c10_1._m0[564].z, fma(_450, fp_c10_1._m0[564].y, _239 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _452, 0.5, 0.5)) || (_484 <= 0.0));
            _340 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _530) * fma(_302, fp_c1_1._m0[1].y, ((_291 + fma(_291, -_528, _528)) * _532) * 0.079577468335628509521484375), _534, _354);
            _342 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _530) * fma(_295, fp_c1_1._m0[1].y, ((_289 + fma(_289, -_528, _528)) * _532) * 0.079577468335628509521484375), _534, _352);
            _344 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _530) * fma(_306, fp_c1_1._m0[1].y, ((_293 + fma(_293, -_528, _528)) * _532) * 0.079577468335628509521484375), _534, _356);
        }
    }
    float _536 = _239 + (-fp_c3_1._m0[11].w);
    float _538 = _87.y;
    float _540 = _247 + (-fp_c3_1._m0[13].w);
    float _542 = fma(_328, _340, _332 * (fma(_304 * (_291 + fma(_291, -_285, _285)), fp_c1_1._m0[0].w, _302 * 0.3183098733425140380859375) * fma(_277, fp_c5_1._m0[5].y, _318)));
    float _544 = _538 + (-fp_c3_1._m0[12].w);
    float _546 = fma(_540, _540, fma(_544, _544, _536 * _536));
    float _548 = fma(_328, _342, _332 * (fma(_304 * (_289 + fma(_289, -_285, _285)), fp_c1_1._m0[0].w, _295 * 0.3183098733425140380859375) * fma(_277, fp_c5_1._m0[5].x, _320)));
    float _550 = fma(_328, _344, _332 * (fma(_304 * (_293 + fma(_293, -_285, _285)), fp_c1_1._m0[0].w, _306 * 0.3183098733425140380859375) * fma(_277, fp_c5_1._m0[5].z, _322)));
    float _552 = clamp(fma(_332 * _328, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _554 = clamp(fma(fma(_247, fp_c5_1._m0[14].z, fma(_538, fp_c5_1._m0[14].y, _239 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _556 = exp2(log2(clamp(sqrt(_546) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_540 * inversesqrt(_546), fp_c5_1._m0[23].z, fma(_544 * inversesqrt(_546), fp_c5_1._m0[23].y, (_536 * inversesqrt(_546)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _558 = fma((-_548) + fp_c5_1._m0[13].x, _554, _548);
    float _560 = fma((-_542) + fp_c5_1._m0[13].y, _554, _542);
    float _562 = fma((-_550) + fp_c5_1._m0[13].z, _554, _550);
    float _564 = clamp((-exp2((clamp(fma(sqrt(_546), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _77.x = fma((-_558) + fma(fma((_556 * fp_c7_1._m0[55].x) * _552, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _564, _558);
    _77.y = fma((-_560) + fma(fma((_556 * fp_c7_1._m0[55].y) * _552, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _564, _560);
    _77.z = fma((-_562) + fma(fma((_556 * fp_c7_1._m0[55].z) * _552, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _564, _562);
    _77.w = clamp(_98 + (-0.0), 0.0, 1.0);
}


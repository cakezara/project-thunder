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

layout(binding = 0) uniform sampler2D fp_tex_tcb_22;
layout(binding = 1) uniform sampler2D fp_tex_tcb_24;
layout(binding = 2) uniform sampler2D fp_tex_tcb_28;
layout(binding = 3) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 4) uniform sampler2DArrayShadow fp_tex_tcb_2E;
layout(binding = 5) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 6) uniform sampler2D fp_tex_tcb_38;
layout(binding = 7) uniform sampler2D fp_tex_tcb_44;

layout(location = 2) in vec4 _67;
layout(location = 0) in vec4 _69;
layout(location = 3) in vec4 _71;
layout(location = 8) in vec4 _73;
layout(location = 5) in vec4 _75;
layout(location = 6) in vec4 _77;
layout(location = 7) in vec4 _79;
layout(location = 4) in vec4 _81;
layout(location = 1) in vec4 _83;
layout(location = 0) out vec4 _86;
uint _6[12];

void main()
{
    bool _317 = false;
    float _93 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _95 = _67.w;
    float _97 = _69.x;
    float _99 = _69.y;
    float _101 = _69.z;
    float _103 = _71.x;
    float _105 = _71.y;
    float _107 = _71.z;
    float _109 = fma(_99, _99, _97 * _97);
    float _111 = float((abs(((-_95) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_95) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_95) > fp_c3_1._m0[58].y) ? (-1) : 0));
    float _113 = inversesqrt(fma(_101, _101, _109));
    bool _116 = _111 == 0.0;
    float _118 = _99 * _113;
    float _120 = _97 * _113;
    float _122 = inversesqrt(fma(_107, _107, fma(_105, _105, _103 * _103)));
    bool _124 = floatBitsToInt(fma(float(gl_FrontFacing ? (-1) : 0), -2.0, -1.0)) <= 0;
    float _126 = _101 * _113;
    float _128 = _109;
    float _130 = _97;
    float _132 = _120;
    float _134 = _118;
    float _136 = _126;
    if (_116)
    {
        _128 = _77.w;
    }
    float _138 = _103 * (-_122);
    float _140 = _128;
    if (!_116)
    {
        _140 = _79.w;
    }
    float _142 = _105 * (-_122);
    if (_116)
    {
        _130 = _77.z;
    }
    float _144 = _107 * (-_122);
    float _146 = _130;
    if (_124)
    {
        _132 = (-_120) + (-0.0);
    }
    float _148 = 0.0;
    if (_116)
    {
        _148 = _77.x;
    }
    float _150 = _148;
    if (_124)
    {
        _134 = (-_118) + (-0.0);
    }
    float _152 = 0.0;
    if (_116)
    {
        _152 = _77.y;
    }
    float _154 = _152;
    if (_124)
    {
        _136 = (-_126) + (-0.0);
    }
    if (!_116)
    {
        _146 = _79.z;
    }
    if (!_116)
    {
        _150 = _79.x;
    }
    if (!_116)
    {
        _154 = _79.y;
    }
    float _156 = fma(_144, _136, fma(_142, _134, _138 * _132));
    float _158 = 1.0 / (_75.w * gl_FragCoord.w);
    float _160 = 1.0 / _140;
    float _162 = 1.0 / (_81.z * gl_FragCoord.w);
    float _164 = fma(_156 * (-_132), -2.0, -_138);
    float _166 = fma(_156 * (-_134), -2.0, -_142);
    float _168 = fma(_156 * (-_136), -2.0, -_144);
    float _170 = 1.0 / max(abs(_168), max(abs(_164), abs(_166)));
    vec2 _174 = texture(fp_tex_tcb_2C, vec2((_75.x * gl_FragCoord.w) * _158, (_75.y * gl_FragCoord.w) * _158)).xy;
    float _176 = _174.x;
    float _178 = max(_156, fp_c1_1._m0[0].y);
    vec2 _180 = texture(fp_tex_tcb_38, vec2(_178, (-_93) + (-0.0))).xy;
    float _182 = _180.x;
    float _184 = _180.y;
    vec3 _188 = texture(fp_tex_tcb_36, vec4(_164 * _170, _166 * _170, _168 * _170, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_93 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _190 = texture(fp_tex_tcb_22, vec2(_73.x, _73.y)).xy;
    vec4 _193 = texture(fp_tex_tcb_24, vec2(_73.z, _73.w)).xyzw;
    float _195 = _193.w;
    float _197 = _67.x;
    float _199 = _67.z;
    float _201 = _142 + (-fp_c5_1._m0[23].y);
    float _203 = _144 + (-fp_c5_1._m0[23].z);
    float _205 = clamp(_75.z, 0.0, 1.0);
    float _207 = _138 + (-fp_c5_1._m0[23].x);
    float _209 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    float _211 = _134 * _132;
    int _214 = max(0, min(int(trunc((_199 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _216 = inversesqrt(fma(_203, _203, fma(_201, _201, _207 * _207)));
    float _218 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _220 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _222 = _136 * _134;
    float _224 = _136 * _136;
    float _226 = _207 * _216;
    float _228 = _201 * _216;
    float _230 = _203 * _216;
    float _232 = _136 * _132;
    float _234 = fma(_176, -_176, _174.y);
    float _236 = fma(_93, 0.5, 0.5);
    float _238 = _93 * _93;
    float _240 = max(fma(_136, -fp_c5_1._m0[23].z, fma(_134, -fp_c5_1._m0[23].y, _132 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].y);
    float _242 = max(fma(_144, _230, fma(_142, _228, _138 * _226)), fp_c1_1._m0[0].y);
    float _244 = (_236 * 0.5) * _236;
    float _246 = max(fma(_230, _136, fma(_228, _134, _226 * _132)), fp_c1_1._m0[0].y) * max(fma(_230, _136, fma(_228, _134, _226 * _132)), fp_c1_1._m0[0].y);
    float _248 = fma(_132, _132, -(_134 * _134));
    float _250 = 1.0 / (_244 + fma(_178, -_244, _178));
    float _252 = exp2(_242 * fma(_242, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _254 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].x;
    float _256 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].y;
    float _258 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].z;
    float _260 = (_250 * (1.0 / (_244 + fma(_244, -_240, _240)))) * ((_238 * (1.0 / max(fma(_246, _238 * _238, -_246) + 1.0, fp_c1_1._m0[0].y))) * (_238 * (1.0 / max(fma(_246, _238 * _238, -_246) + 1.0, fp_c1_1._m0[0].y))));
    uint _263 = uint(int(uint((((int(uint(_214) >> uint(16)) * 20) << 16) + (((_214 & 65535) * 20) + max(0, min(int(trunc((_197 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _265 = fp_c10_1._m0[int(uint(int(_263)) >> uint(2))][int(_263) & 3];
    float _267 = fma(_254, -_209, _209);
    float _269 = _81.w;
    float _271 = fma(_256, -_218, _218);
    float _273 = fma(_258, -_220, _220);
    float _275 = clamp(_269 * clamp(fma(_190.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _277 = ((_193.x * _195) * _269) * 32.0;
    float _279 = ((_193.y * _195) * _269) * 32.0;
    float _281 = ((_193.z * _195) * _269) * 32.0;
    float _283 = clamp((-_275) + 1.0, 0.0, 1.0);
    float _285 = fma(_267, _277, fma(_188.x, fma(_254, _182, _184), max(0.0, fma(_248, fp_c5_1._m0[31].x, (fma(_136, fp_c5_1._m0[25].z, fma(_134, fp_c5_1._m0[25].y, _132 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_232, fp_c5_1._m0[28].w, fma(_224, fp_c5_1._m0[28].z, fma(_222, fp_c5_1._m0[28].y, _211 * fp_c5_1._m0[28].x))))) * _267));
    float _287 = fma(_271, _279, fma(_188.y, fma(_256, _182, _184), max(0.0, fma(_248, fp_c5_1._m0[31].y, (fma(_136, fp_c5_1._m0[26].z, fma(_134, fp_c5_1._m0[26].y, _132 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_232, fp_c5_1._m0[29].w, fma(_224, fp_c5_1._m0[29].z, fma(_222, fp_c5_1._m0[29].y, _211 * fp_c5_1._m0[29].x))))) * _271));
    float _289 = fma(_273, _281, fma(_188.z, fma(_258, _182, _184), max(0.0, fma(_248, fp_c5_1._m0[31].z, (fma(_136, fp_c5_1._m0[27].z, fma(_134, fp_c5_1._m0[27].y, _132 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_232, fp_c5_1._m0[30].w, fma(_224, fp_c5_1._m0[30].z, fma(_222, fp_c5_1._m0[30].y, _211 * fp_c5_1._m0[30].x))))) * _273));
    float _291 = clamp((-fma(_275, fp_c7_1._m0[37].w, clamp(_269 * clamp(fma(_190.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + (max((-max(min(_234 * (1.0 / fma((-_176) + _205, (-_176) + _205, _234)), 1.0), float(_205 <= _176))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_160 * _150, _160 * _154, float(int(clamp(uint(max(roundEven(_111), 0.0)), 0u, 65535u)))), _160 * _146))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_81.x * gl_FragCoord.w) * _162, (_81.y * gl_FragCoord.w) * _162)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    int _293 = floatBitsToInt(_265);
    float _295 = _287;
    float _297 = _289;
    float _299 = _285;
    float _301 = _285;
    float _303 = _287;
    float _305 = _289;
    if (floatBitsToInt(_265) != (-1))
    {
        int _307 = 0;
        float _311;
        float _313;
        float _315;
        int _399;
        do
        {
            int _309 = _293 & 255;
            _311 = _299;
            _313 = _295;
            _315 = _297;
            _317 = uint(_309) >= 30u;
            if (_317)
            {
                break;
            }
            int _319 = _309 << 4;
            uint _321 = uint(int(uint(_319 + 7360) >> uint(2)));
            int _323 = int(_321) + 1;
            uint _325 = uint(int(uint(_319 + 7368) >> uint(2)));
            float _327 = (-_197) + fp_c10_1._m0[int(uint(int(_321)) >> uint(2))][int(_321) & 3];
            float _329 = fp_c10_1._m0[int(uint(_323) >> uint(2))][_323 & 3] + (-_67.y);
            float _331 = (-_199) + fp_c10_1._m0[int(uint(int(_325)) >> uint(2))][int(_325) & 3];
            float _333 = fma(_331, _331, fma(_329, _329, _327 * _327));
            float _335 = _327 * inversesqrt(_333);
            float _337 = _329 * inversesqrt(_333);
            float _339 = _331 * inversesqrt(_333);
            float _341 = _138 + _335;
            float _343 = _142 + _337;
            float _345 = _144 + _339;
            uint _347 = uint(int(uint(_319 + 6880) >> uint(2)));
            int _349 = int(_347) + 1;
            float _351 = inversesqrt(fma(_345, _345, fma(_343, _343, _341 * _341)));
            float _353 = _341 * _351;
            float _355 = _343 * _351;
            float _357 = _345 * _351;
            uint _359 = uint(int(uint(_319 + 8320) >> uint(2)));
            float _361 = max(fma(_357, _136, fma(_355, _134, _353 * _132)), fp_c1_1._m0[0].y) * max(fma(_357, _136, fma(_355, _134, _353 * _132)), fp_c1_1._m0[0].y);
            float _363 = max(fma(_144, _357, fma(_142, _355, _138 * _353)), fp_c1_1._m0[0].y);
            float _365 = fma(_339, _136, fma(_337, _134, _335 * _132));
            float _367 = max(_365, fp_c1_1._m0[0].y);
            float _369 = fp_c10_1._m0[int(uint(_349) >> uint(2))][_349 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_347)) >> uint(2))][int(_347) & 3], -sqrt(_333), fp_c1_1._m0[1].x), 0.0, 1.0));
            uint _371 = uint(int(uint(_319 + 6400) >> uint(2)));
            int _373 = int(_371) + 1;
            uint _375 = uint(int(uint(_319 + 6408) >> uint(2)));
            float _377 = exp2(_363 * fma(_363, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _379 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_359)) >> uint(2))][int(_359) & 3]) != 0;
            float _381 = (_250 * (1.0 / (_244 + fma(_244, -_367, _367)))) * ((_238 * (1.0 / max(fma(_238 * _238, _361, -_361) + 1.0, fp_c1_1._m0[0].y))) * (_238 * (1.0 / max(fma(_238 * _238, _361, -_361) + 1.0, fp_c1_1._m0[0].y))));
            float _383 = _369;
            if (!_379)
            {
                _383 = 1.0;
            }
            float _385 = _383;
            if (_379)
            {
                uint _387 = uint(int(uint(_319 + 7840) >> uint(2)));
                int _389 = int(_387) + 1;
                uint _391 = uint(int(uint(_319 + 7848) >> uint(2)));
                uint _393 = uint(int(uint(_319 + 6888) >> uint(2)));
                float _395 = fp_c10_1._m0[int(uint(int(_393)) >> uint(2))][int(_393) & 3];
                int _397 = int(_393) + 1;
                _385 = exp2(fp_c10_1._m0[int(uint(_397) >> uint(2))][_397 & 3] * log2(clamp(((-_395) + fma(_339, -fp_c10_1._m0[int(uint(int(_391)) >> uint(2))][int(_391) & 3], fma(_337, -fp_c10_1._m0[int(uint(_389) >> uint(2))][_389 & 3], _335 * (-fp_c10_1._m0[int(uint(int(_387)) >> uint(2))][int(_387) & 3])))) * (1.0 / ((-_395) + 1.0)), 0.0, 1.0)));
            }
            _399 = _307 + 1;
            float _401 = (exp2(_369) * _385) * clamp(_365 + (-0.0), 0.0, 1.0);
            float _403 = fma(fp_c10_1._m0[int(uint(_373) >> uint(2))][_373 & 3] * _401, fma(_218, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_377, _377)) * _381) * 0.079577468335628509521484375), _295);
            float _405 = fma(fp_c10_1._m0[int(uint(int(_375)) >> uint(2))][int(_375) & 3] * _401, fma(_220, fp_c1_1._m0[1].y, ((_258 + fma(_258, -_377, _377)) * _381) * 0.079577468335628509521484375), _297);
            float _407 = fma(fp_c10_1._m0[int(uint(int(_371)) >> uint(2))][int(_371) & 3] * _401, fma(_209, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_377, _377)) * _381) * 0.079577468335628509521484375), _299);
            _293 = int(uint(_293) >> uint(8));
            _307 = _399;
            _295 = _403;
            _297 = _405;
            _299 = _407;
            _311 = _407;
            _313 = _403;
            _315 = _405;
        } while (!(_399 >= 4));
        _317 = false;
        _301 = _311;
        _303 = _313;
        _305 = _315;
        if ((_293 & 255) == 30)
        {
            float _409 = 1.0 / fp_c10_1._m0[561].y;
            float _411 = _197 + (-fp_c10_1._m0[557].x);
            float _413 = _411 * fp_c10_1._m0[558].z;
            float _415 = _199 + (-fp_c10_1._m0[557].z);
            float _417 = (-_197) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_409, fp_c10_1._m0[557].x);
            float _419 = (-_199) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_409, fp_c10_1._m0[557].z);
            float _421 = _415 * fp_c10_1._m0[558].x;
            float _423 = _417 * _417;
            float _425 = ((-float(_421 < _413)) + float(_421 > _413)) * fp_c10_1._m0[561].y;
            float _427 = sqrt(fma(_419, _419, _423)) * (-fp_c10_1._m0[558].y);
            float _429 = inversesqrt(fma(_419, _419, fma(_427, _427, _423)));
            float _431 = fma(_415, _415, _411 * _411);
            float _433 = _417 * _429;
            float _435 = _427 * _429;
            float _437 = fma(_415, fp_c10_1._m0[558].z, _411 * fp_c10_1._m0[558].x);
            float _439 = _419 * _429;
            float _441 = _138 + _433;
            float _443 = _142 + _435;
            float _445 = _67.y;
            float _447 = _144 + _439;
            float _449 = inversesqrt(fma(_439, _439, _433 * _433));
            float _451 = inversesqrt(fma(_447, _447, fma(_443, _443, _441 * _441)));
            float _453 = fma(_439, _136, fma(_435, _134, _433 * _132));
            float _455 = _443 * _451;
            float _457 = _447 * _451;
            float _459 = _441 * _451;
            float _461 = 1.0 / (fma(_199, fp_c10_1._m0[565].z, fma(_445, fp_c10_1._m0[565].y, _197 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            bool _463 = _437 > 0.0;
            float _465 = (_433 * _449) * (-fp_c10_1._m0[558].x);
            float _467 = _465;
            if (_463)
            {
                _467 = sqrt(_431);
            }
            float _469 = _467;
            if (!_463)
            {
                _469 = 1.0;
            }
            float _471 = max(fma(_144, _457, fma(_142, _455, _138 * _459)), fp_c1_1._m0[0].y);
            float _473 = max(fma(_457, _136, fma(_455, _134, _459 * _132)), fp_c1_1._m0[0].y) * max(fma(_457, _136, fma(_455, _134, _459 * _132)), fp_c1_1._m0[0].y);
            float _475 = max(_453, fp_c1_1._m0[0].y);
            bool _477 = fma(_415 * inversesqrt(_431), fp_c10_1._m0[558].z, (_411 * inversesqrt(_431)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _479 = clamp(fma(_437 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_437 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _481 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_411, fma(_425, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_415 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_425 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_411, fma(_425, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_415 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_425 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _483 = log2(clamp(fma(_469, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _485 = exp2(_471 * fma(_471, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _487 = _483;
            if (_477)
            {
                _487 = fma(_481, -_481, fp_c1_1._m0[1].x) * fma(_481, -_481, fp_c1_1._m0[1].x);
            }
            float _489 = _487;
            if (!_477)
            {
                _489 = 1.0;
            }
            float _491 = (_250 * (1.0 / (_244 + fma(_244, -_475, _475)))) * ((_238 * (1.0 / max(fma(_238 * _238, _473, -_473) + 1.0, fp_c1_1._m0[0].y))) * (_238 * (1.0 / max(fma(_238 * _238, _473, -_473) + 1.0, fp_c1_1._m0[0].y))));
            float _493 = (min(fma(_479, -_479, fp_c1_1._m0[1].x) * fma(_479, -_479, fp_c1_1._m0[1].x), _489) * (exp2(_483) * exp2(log2(clamp((fma(_439 * _449, -fp_c10_1._m0[558].z, _465) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_453 + (-0.0), 0.0, 1.0);
            float _495 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_199, fp_c10_1._m0[562].z, fma(_445, fp_c10_1._m0[562].y, _197 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _461, 0.5, 0.5), (-fma((fma(_199, fp_c10_1._m0[563].z, fma(_445, fp_c10_1._m0[563].y, _197 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _461, 0.5, 0.5)) + 1.0)).z > fma((fma(_199, fp_c10_1._m0[564].z, fma(_445, fp_c10_1._m0[564].y, _197 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _461, 0.5, 0.5)) || (_437 <= 0.0));
            _301 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _493) * fma(_209, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_485, _485)) * _491) * 0.079577468335628509521484375), _495, _311);
            _303 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _493) * fma(_218, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_485, _485)) * _491) * 0.079577468335628509521484375), _495, _313);
            _305 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _493) * fma(_220, fp_c1_1._m0[1].y, ((_258 + fma(_258, -_485, _485)) * _491) * 0.079577468335628509521484375), _495, _315);
        }
    }
    float _497 = _197 + (-fp_c3_1._m0[11].w);
    float _499 = _67.y;
    float _501 = _199 + (-fp_c3_1._m0[13].w);
    float _503 = clamp(fma(_136, -fp_c5_1._m0[23].z, fma(_134, -fp_c5_1._m0[23].y, _132 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _505 = _499 + (-fp_c3_1._m0[12].w);
    float _507 = fma(_501, _501, fma(_505, _505, _497 * _497));
    float _509 = clamp(fma(fma(_199, fp_c5_1._m0[14].z, fma(_499, fp_c5_1._m0[14].y, _197 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _511 = clamp(fma(_291 * _283, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _513 = fma(_283, _301, _291 * (fma(_260 * (_254 + fma(_254, -_252, _252)), fp_c1_1._m0[0].w, _209 * 0.3183098733425140380859375) * fma(_503, fp_c5_1._m0[5].x, _277)));
    float _515 = clamp(_83.w, 0.0, 1.0);
    float _517 = exp2(log2(clamp(sqrt(_507) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_501 * inversesqrt(_507), fp_c5_1._m0[23].z, fma(_505 * inversesqrt(_507), fp_c5_1._m0[23].y, (_497 * inversesqrt(_507)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _519 = fma(_283, _303, _291 * (fma(_260 * (_256 + fma(_256, -_252, _252)), fp_c1_1._m0[0].w, _218 * 0.3183098733425140380859375) * fma(_503, fp_c5_1._m0[5].y, _279)));
    float _521 = fma(_283, _305, _291 * (fma(_260 * (_258 + fma(_258, -_252, _252)), fp_c1_1._m0[0].w, _220 * 0.3183098733425140380859375) * fma(_503, fp_c5_1._m0[5].z, _281)));
    float _523 = fma((-_513) + fp_c5_1._m0[13].x, _509, _513);
    float _525 = fma((-_519) + fp_c5_1._m0[13].y, _509, _519);
    float _527 = fma((-_521) + fp_c5_1._m0[13].z, _509, _521);
    float _529 = clamp((-exp2((clamp(fma(sqrt(_507), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _86.x = fma(_529, (-_523) + fma(fma((_517 * fp_c7_1._m0[55].x) * _511, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _523);
    _86.y = fma(_529, (-_525) + fma(fma((_517 * fp_c7_1._m0[55].y) * _511, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _525);
    _86.z = fma(_529, (-_527) + fma(fma((_517 * fp_c7_1._m0[55].z) * _511, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _527);
    _86.w = fma(_529, -_515, _515);
}


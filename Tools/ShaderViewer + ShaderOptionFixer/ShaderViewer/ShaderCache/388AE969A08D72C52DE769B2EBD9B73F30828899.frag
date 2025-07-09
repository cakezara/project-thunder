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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 3) uniform sampler2D fp_tex_tcb_22;
layout(binding = 4) uniform sampler2D fp_tex_tcb_24;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _64;
layout(location = 5) in vec4 _66;
layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 4) in vec4 _72;
layout(location = 7) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 3) in vec4 _78;
layout(location = 0) out vec4 _81;
uint _6[12];

void main()
{
    bool _339 = false;
    float _88 = 1.0 / (_64.z * gl_FragCoord.w);
    float _90 = _68.x;
    float _92 = _68.y;
    float _94 = 1.0 / _66.w;
    vec2 _98 = texture(fp_tex_tcb_1C, vec2(_68.z, _68.w)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    vec2 _104 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _106 = _104.x;
    float _108 = _104.y;
    vec2 _110 = texture(fp_tex_tcb_2A, vec2(fma(_66.x * _94, 0.5, 0.5), fma(_66.y * _94, -0.5, 0.5))).xy;
    vec3 _114 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _116 = _114.x;
    float _118 = _114.y;
    float _120 = _114.z;
    float _122 = _70.x;
    float _124 = _70.y;
    float _126 = _70.z;
    float _128 = _72.x;
    float _130 = _72.y;
    float _132 = _72.z;
    float _134 = _76.w;
    float _136 = inversesqrt(fma(_126, _126, fma(_124, _124, _122 * _122)));
    float _138 = _122 * _136;
    float _140 = _126 * _136;
    float _142 = _76.y;
    float _144 = _124 * _136;
    float _146 = _76.z;
    float _148 = _76.x;
    float _150 = fma(_100 + (-_106), fp_c6_1._m0[8].z, _106);
    float _152 = fma(_102 + (-_108), fp_c6_1._m0[8].z, _108);
    float _154 = sqrt(clamp((-fma(_106, _106, _108 * _108)) + 1.0, 0.0, 1.0));
    float _156 = fma(sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0)) + (-_154), fp_c6_1._m0[8].z, _154);
    float _158 = inversesqrt(fma(_156, _156, fma(_152, _152, _150 * _150)));
    float _160 = _152 * _158;
    float _162 = _150 * _158;
    float _164 = _156 * _158;
    float _166 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _168 = fma(_138, _164, fma(_148, _162, _160 * (fma(_144, _146, -(_140 * _142)) * _134)));
    float _170 = fma(_144, _164, fma(_142, _162, _160 * (fma(_140, _148, -(_138 * _146)) * _134)));
    float _172 = fma(_140, _164, fma(_146, _162, _160 * (fma(_138, _142, -(_144 * _148)) * _134)));
    float _174 = inversesqrt(fma(_132, _132, fma(_130, _130, _128 * _128)));
    float _176 = _128 * (-_174);
    float _178 = inversesqrt(fma(_172, _172, fma(_170, _170, _168 * _168)));
    float _180 = _130 * (-_174);
    float _182 = _132 * (-_174);
    float _184 = _168 * _178;
    float _186 = _170 * _178;
    float _188 = _172 * _178;
    float _190 = fma(_188, _182, fma(_186, _180, _184 * _176));
    float _192 = max(_190, fp_c1_1._m0[0].y);
    float _194 = fma(_184 * (-_190), -2.0, -_176);
    float _196 = fma(_186 * (-_190), -2.0, -_180);
    float _198 = fma(_188 * (-_190), -2.0, -_182);
    float _200 = _180 + (-fp_c5_1._m0[23].y);
    float _202 = 1.0 / max(abs(_198), max(abs(_194), abs(_196)));
    vec2 _204 = texture(fp_tex_tcb_38, vec2(_192, (-_166) + (-0.0))).xy;
    float _206 = _204.x;
    float _208 = _204.y;
    vec3 _210 = texture(fp_tex_tcb_36, vec4(_194 * _202, _196 * _202, _198 * _202, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_166 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _212 = texture(fp_tex_tcb_22, vec2(_74.x, _74.y)).xy;
    vec4 _215 = texture(fp_tex_tcb_24, vec2(_74.z, _74.w)).xyzw;
    float _217 = _215.w;
    float _219 = _176 + (-fp_c5_1._m0[23].x);
    float _221 = _182 + (-fp_c5_1._m0[23].z);
    float _223 = fma(_166, 0.5, 0.5);
    float _225 = _78.x;
    float _227 = _184 * _186;
    float _229 = inversesqrt(fma(_221, _221, fma(_200, _200, _219 * _219)));
    float _231 = _219 * _229;
    float _233 = _200 * _229;
    float _235 = _221 * _229;
    float _237 = _78.z;
    float _239 = _186 * _188;
    float _241 = _188 * _188;
    float _243 = _184 * _188;
    float _245 = _166 * _166;
    float _247 = fma(_186, -fp_c5_1._m0[23].y, _184 * (-fp_c5_1._m0[23].x));
    float _249 = max(fma(_188, _235, fma(_186, _233, _184 * _231)), fp_c1_1._m0[0].y) * max(fma(_188, _235, fma(_186, _233, _184 * _231)), fp_c1_1._m0[0].y);
    float _251 = (_223 * 0.5) * _223;
    float _253 = max(fma(_188, -fp_c5_1._m0[23].z, _247), fp_c1_1._m0[0].y);
    float _255 = 1.0 / (_251 + fma(_192, -_251, _192));
    float _257 = max(fma(_182, _235, fma(_180, _233, _176 * _231)), fp_c1_1._m0[0].y);
    float _259 = clamp(fma(_188, -fp_c5_1._m0[23].z, _247), 0.0, 1.0);
    float _261 = fma(_184, _184, -(_186 * _186));
    int _264 = max(0, min(int(trunc((_237 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _266 = exp2(_257 * fma(_257, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _268 = fma(_116 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _270 = (_255 * (1.0 / (_251 + fma(_251, -_253, _253)))) * ((_245 * (1.0 / max(fma(_249, _245 * _245, -_249) + 1.0, fp_c1_1._m0[0].y))) * (_245 * (1.0 / max(fma(_249, _245 * _245, -_249) + 1.0, fp_c1_1._m0[0].y))));
    float _272 = fma(_116, -fp_c6_1._m0[9].x, _116);
    float _274 = fma(_118 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    uint _277 = uint(int(uint((((int(uint(_264) >> uint(16)) * 20) << 16) + (((_264 & 65535) * 20) + max(0, min(int(trunc((_225 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _279 = fp_c10_1._m0[int(uint(int(_277)) >> uint(2))][int(_277) & 3];
    float _281 = fma(_120 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _283 = fma(_268, -_272, _272);
    float _285 = fma(_118, -fp_c6_1._m0[9].x, _118);
    float _287 = fma(_120, -fp_c6_1._m0[9].x, _120);
    float _289 = _64.w;
    float _291 = fma(_274, -_285, _285);
    float _293 = fma(_281, -_287, _287);
    float _295 = ((_215.x * _217) * _289) * 32.0;
    float _297 = clamp(_289 * clamp(fma(_212.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _299 = ((_215.y * _217) * _289) * 32.0;
    float _301 = ((_215.z * _217) * _289) * 32.0;
    float _303 = fma(_283, _295, fma(_210.x, fma(_268, _206, _208), max(0.0, fma(_261, fp_c5_1._m0[31].x, (fma(_188, fp_c5_1._m0[25].z, fma(_186, fp_c5_1._m0[25].y, _184 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_243, fp_c5_1._m0[28].w, fma(_241, fp_c5_1._m0[28].z, fma(_239, fp_c5_1._m0[28].y, _227 * fp_c5_1._m0[28].x))))) * _283));
    float _305 = clamp((-_297) + 1.0, 0.0, 1.0);
    float _307 = fma(_291, _299, fma(_210.y, fma(_274, _206, _208), max(0.0, fma(_261, fp_c5_1._m0[31].y, (fma(_188, fp_c5_1._m0[26].z, fma(_186, fp_c5_1._m0[26].y, _184 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_243, fp_c5_1._m0[29].w, fma(_241, fp_c5_1._m0[29].z, fma(_239, fp_c5_1._m0[29].y, _227 * fp_c5_1._m0[29].x))))) * _291));
    float _309 = fma(_293, _301, fma(_210.z, fma(_281, _206, _208), max(0.0, fma(_261, fp_c5_1._m0[31].z, (fma(_188, fp_c5_1._m0[27].z, fma(_186, fp_c5_1._m0[27].y, _184 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_243, fp_c5_1._m0[30].w, fma(_241, fp_c5_1._m0[30].z, fma(_239, fp_c5_1._m0[30].y, _227 * fp_c5_1._m0[30].x))))) * _293));
    float _311 = clamp((-fma(_297, fp_c7_1._m0[37].w, clamp(_289 * clamp(fma(_212.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_110.x) + 1.0, (-_110.y) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_64.x * gl_FragCoord.w) * _88, (_64.y * gl_FragCoord.w) * _88)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    int _313 = floatBitsToInt(_279);
    float _315 = _309;
    float _317 = _303;
    float _319 = _307;
    float _321 = _309;
    float _323 = _307;
    float _325 = _303;
    if (floatBitsToInt(_279) != (-1))
    {
        int _327 = 0;
        float _331;
        float _333;
        float _335;
        int _421;
        do
        {
            int _329 = _313 & 255;
            _331 = _317;
            _333 = _319;
            _335 = _315;
            _339 = uint(_329) >= 30u;
            if (_339)
            {
                break;
            }
            int _341 = _329 << 4;
            uint _343 = uint(int(uint(_341 + 7360) >> uint(2)));
            int _345 = int(_343) + 1;
            uint _347 = uint(int(uint(_341 + 7368) >> uint(2)));
            float _349 = (-_225) + fp_c10_1._m0[int(uint(int(_343)) >> uint(2))][int(_343) & 3];
            float _351 = fp_c10_1._m0[int(uint(_345) >> uint(2))][_345 & 3] + (-_78.y);
            float _353 = (-_237) + fp_c10_1._m0[int(uint(int(_347)) >> uint(2))][int(_347) & 3];
            float _355 = fma(_353, _353, fma(_351, _351, _349 * _349));
            float _357 = _349 * inversesqrt(_355);
            float _359 = _351 * inversesqrt(_355);
            float _361 = _353 * inversesqrt(_355);
            float _363 = _176 + _357;
            float _365 = _180 + _359;
            float _367 = _182 + _361;
            float _369 = inversesqrt(fma(_367, _367, fma(_365, _365, _363 * _363)));
            float _371 = _363 * _369;
            float _373 = _365 * _369;
            float _375 = _367 * _369;
            float _377 = fma(_188, _361, fma(_186, _359, _184 * _357));
            float _379 = max(fma(_182, _375, fma(_180, _373, _176 * _371)), fp_c1_1._m0[0].y);
            float _381 = max(_377, fp_c1_1._m0[0].y);
            float _383 = max(fma(_188, _375, fma(_186, _373, _184 * _371)), fp_c1_1._m0[0].y) * max(fma(_188, _375, fma(_186, _373, _184 * _371)), fp_c1_1._m0[0].y);
            uint _385 = uint(int(uint(_341 + 6880) >> uint(2)));
            int _387 = int(_385) + 1;
            uint _389 = uint(int(uint(_341 + 8320) >> uint(2)));
            float _391 = exp2(_379 * fma(_379, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _393 = (_255 * (1.0 / (_251 + fma(_251, -_381, _381)))) * ((_245 * (1.0 / max(fma(_245 * _245, _383, -_383) + 1.0, fp_c1_1._m0[0].y))) * (_245 * (1.0 / max(fma(_245 * _245, _383, -_383) + 1.0, fp_c1_1._m0[0].y))));
            float _395 = (_274 + fma(_274, -_391, _391)) * _393;
            bool _397 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_389)) >> uint(2))][int(_389) & 3]) != 0;
            uint _399 = uint(int(uint(_341 + 6408) >> uint(2)));
            uint _401 = uint(int(uint(_341 + 6400) >> uint(2)));
            int _403 = int(_401) + 1;
            float _405 = _395;
            if (!_397)
            {
                _405 = 1.0;
            }
            float _407 = _405;
            if (_397)
            {
                uint _409 = uint(int(uint(_341 + 7840) >> uint(2)));
                int _411 = int(_409) + 1;
                uint _413 = uint(int(uint(_341 + 7848) >> uint(2)));
                uint _415 = uint(int(uint(_341 + 6888) >> uint(2)));
                float _417 = fp_c10_1._m0[int(uint(int(_415)) >> uint(2))][int(_415) & 3];
                int _419 = int(_415) + 1;
                _407 = exp2(fp_c10_1._m0[int(uint(_419) >> uint(2))][_419 & 3] * log2(clamp(((-_417) + fma(_361, -fp_c10_1._m0[int(uint(int(_413)) >> uint(2))][int(_413) & 3], fma(_359, -fp_c10_1._m0[int(uint(_411) >> uint(2))][_411 & 3], _357 * (-fp_c10_1._m0[int(uint(int(_409)) >> uint(2))][int(_409) & 3])))) * (1.0 / ((-_417) + 1.0)), 0.0, 1.0)));
            }
            _421 = _327 + 1;
            float _423 = (exp2(fp_c10_1._m0[int(uint(_387) >> uint(2))][_387 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3], -sqrt(_355), fp_c1_1._m0[1].x), 0.0, 1.0))) * _407) * clamp(_377 + (-0.0), 0.0, 1.0);
            float _425 = fma(fp_c10_1._m0[int(uint(int(_399)) >> uint(2))][int(_399) & 3] * _423, fma(_287, fp_c1_1._m0[1].y, ((_281 + fma(_281, -_391, _391)) * _393) * 0.079577468335628509521484375), _315);
            float _427 = fma(fp_c10_1._m0[int(uint(int(_401)) >> uint(2))][int(_401) & 3] * _423, fma(_272, fp_c1_1._m0[1].y, ((_268 + fma(_268, -_391, _391)) * _393) * 0.079577468335628509521484375), _317);
            float _429 = fma(fp_c10_1._m0[int(uint(_403) >> uint(2))][_403 & 3] * _423, fma(_285, fp_c1_1._m0[1].y, _395 * 0.079577468335628509521484375), _319);
            _313 = int(uint(_313) >> uint(8));
            _327 = _421;
            _315 = _425;
            _317 = _427;
            _319 = _429;
            _331 = _427;
            _333 = _429;
            _335 = _425;
        } while (!(_421 >= 4));
        _339 = false;
        _321 = _335;
        _323 = _333;
        _325 = _331;
        if ((_313 & 255) == 30)
        {
            float _431 = 1.0 / fp_c10_1._m0[561].y;
            float _433 = _237 + (-fp_c10_1._m0[557].z);
            float _435 = (-_225) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_431, fp_c10_1._m0[557].x);
            float _437 = (-_237) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_431, fp_c10_1._m0[557].z);
            float _439 = _435 * _435;
            float _441 = _225 + (-fp_c10_1._m0[557].x);
            float _443 = sqrt(fma(_437, _437, _439)) * (-fp_c10_1._m0[558].y);
            float _445 = inversesqrt(fma(_437, _437, fma(_443, _443, _439)));
            float _447 = _441 * fp_c10_1._m0[558].z;
            float _449 = _435 * _445;
            float _451 = _443 * _445;
            float _453 = _437 * _445;
            float _455 = _176 + _449;
            float _457 = _180 + _451;
            float _459 = _182 + _453;
            float _461 = _433 * fp_c10_1._m0[558].x;
            float _463 = inversesqrt(fma(_459, _459, fma(_457, _457, _455 * _455)));
            float _465 = _78.y;
            float _467 = _455 * _463;
            float _469 = _457 * _463;
            float _471 = ((-float(_461 < _447)) + float(_461 > _447)) * fp_c10_1._m0[561].y;
            float _473 = fma(_433, _433, _441 * _441);
            float _475 = 1.0 / (fma(_237, fp_c10_1._m0[565].z, fma(_465, fp_c10_1._m0[565].y, _225 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _477 = fma(_433, fp_c10_1._m0[558].z, _441 * fp_c10_1._m0[558].x);
            bool _479 = _477 > 0.0;
            float _481 = fma(_188, _453, fma(_186, _451, _184 * _449));
            float _483 = _459 * _463;
            float _485 = inversesqrt(fma(_453, _453, _449 * _449));
            float _487 = max(fma(_182, _483, fma(_180, _469, _176 * _467)), fp_c1_1._m0[0].y);
            float _489 = max(fma(_188, _483, fma(_186, _469, _184 * _467)), fp_c1_1._m0[0].y) * max(fma(_188, _483, fma(_186, _469, _184 * _467)), fp_c1_1._m0[0].y);
            float _491 = _453;
            if (_479)
            {
                _491 = sqrt(_473);
            }
            float _493 = _491;
            if (!_479)
            {
                _493 = 1.0;
            }
            bool _495 = fma(_433 * inversesqrt(_473), fp_c10_1._m0[558].z, (_441 * inversesqrt(_473)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _497 = max(_481, fp_c1_1._m0[0].y);
            float _499 = clamp(fma(_477 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_477 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _501 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_441, fma(_471, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_433 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_471 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_441, fma(_471, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_433 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_471 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _503 = log2(clamp(fma(_493, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _505 = _503;
            if (!_495)
            {
                _505 = 1.0;
            }
            float _507 = _505;
            if (_495)
            {
                _507 = fma(_501, -_501, fp_c1_1._m0[1].x) * fma(_501, -_501, fp_c1_1._m0[1].x);
            }
            float _509 = exp2(_487 * fma(_487, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _511 = (min(fma(_499, -_499, fp_c1_1._m0[1].x) * fma(_499, -_499, fp_c1_1._m0[1].x), _507) * (exp2(_503) * exp2(log2(clamp((fma(_453 * _485, -fp_c10_1._m0[558].z, (_449 * _485) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_481 + (-0.0), 0.0, 1.0);
            float _513 = (_255 * (1.0 / (_251 + fma(_251, -_497, _497)))) * ((_245 * (1.0 / max(fma(_245 * _245, _489, -_489) + 1.0, fp_c1_1._m0[0].y))) * (_245 * (1.0 / max(fma(_245 * _245, _489, -_489) + 1.0, fp_c1_1._m0[0].y))));
            float _515 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_237, fp_c10_1._m0[562].z, fma(_465, fp_c10_1._m0[562].y, _225 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _475, 0.5, 0.5), (-fma((fma(_237, fp_c10_1._m0[563].z, fma(_465, fp_c10_1._m0[563].y, _225 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _475, 0.5, 0.5)) + 1.0)).z > fma((fma(_237, fp_c10_1._m0[564].z, fma(_465, fp_c10_1._m0[564].y, _225 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _475, 0.5, 0.5)) || (_477 <= 0.0));
            _321 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _511) * fma(_287, fp_c1_1._m0[1].y, ((_281 + fma(_281, -_509, _509)) * _513) * 0.079577468335628509521484375), _515, _335);
            _323 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _511) * fma(_285, fp_c1_1._m0[1].y, ((_274 + fma(_274, -_509, _509)) * _513) * 0.079577468335628509521484375), _515, _333);
            _325 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _511) * fma(_272, fp_c1_1._m0[1].y, ((_268 + fma(_268, -_509, _509)) * _513) * 0.079577468335628509521484375), _515, _331);
        }
    }
    float _517 = _225 + (-fp_c3_1._m0[11].w);
    float _519 = _78.y;
    float _521 = _237 + (-fp_c3_1._m0[13].w);
    float _523 = fma(_305, _321, _311 * (fma(_270 * (_281 + fma(_281, -_266, _266)), fp_c1_1._m0[0].w, _287 * 0.3183098733425140380859375) * fma(_259, fp_c5_1._m0[5].z, _301)));
    float _525 = _519 + (-fp_c3_1._m0[12].w);
    float _527 = fma(_521, _521, fma(_525, _525, _517 * _517));
    float _529 = clamp(fma(_311 * _305, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _531 = fma(_305, _323, _311 * (fma(_270 * (_274 + fma(_274, -_266, _266)), fp_c1_1._m0[0].w, _285 * 0.3183098733425140380859375) * fma(_259, fp_c5_1._m0[5].y, _299)));
    float _533 = fma(_305, _325, _311 * (fma(_270 * (_268 + fma(_268, -_266, _266)), fp_c1_1._m0[0].w, _272 * 0.3183098733425140380859375) * fma(_259, fp_c5_1._m0[5].x, _295)));
    float _535 = exp2(log2(clamp(sqrt(_527) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_521 * inversesqrt(_527), fp_c5_1._m0[23].z, fma(_525 * inversesqrt(_527), fp_c5_1._m0[23].y, (_517 * inversesqrt(_527)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _537 = clamp(fma(fma(_237, fp_c5_1._m0[14].z, fma(_519, fp_c5_1._m0[14].y, _225 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _539 = fma((-_533) + fp_c5_1._m0[13].x, _537, _533);
    float _541 = fma((-_531) + fp_c5_1._m0[13].y, _537, _531);
    float _543 = fma((-_523) + fp_c5_1._m0[13].z, _537, _523);
    float _545 = clamp((-exp2((clamp(fma(sqrt(_527), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_539) + fma(fma((_535 * fp_c7_1._m0[55].x) * _529, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _545, _539);
    _81.y = fma((-_541) + fma(fma((_535 * fp_c7_1._m0[55].y) * _529, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _545, _541);
    _81.z = fma((-_543) + fma(fma((_535 * fp_c7_1._m0[55].z) * _529, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _545, _543);
    _81.w = 1.0;
}


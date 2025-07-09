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

layout(binding = 0) uniform sampler2D fp_tex_tcb_E;
layout(binding = 1) uniform sampler2D fp_tex_tcb_10;
layout(binding = 2) uniform sampler2D fp_tex_tcb_14;
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
layout(location = 2) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 7) in vec4 _76;
layout(location = 3) in vec4 _78;
layout(location = 0) out vec4 _81;
uint _6[12];

void main()
{
    bool _315 = false;
    float _88 = 1.0 / (_64.z * gl_FragCoord.w);
    float _90 = _68.x;
    float _92 = _68.y;
    float _94 = 1.0 / _66.w;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    vec2 _104 = texture(fp_tex_tcb_2A, vec2(fma(_66.x * _94, 0.5, 0.5), fma(_66.y * _94, -0.5, 0.5))).xy;
    float _106 = _70.x;
    float _108 = _70.y;
    float _110 = _70.z;
    float _112 = _72.y;
    float _114 = _72.z;
    float _116 = _72.x;
    float _118 = _72.w;
    float _120 = _74.x;
    float _122 = _74.y;
    float _124 = _74.z;
    float _126 = inversesqrt(fma(_110, _110, fma(_108, _108, _106 * _106)));
    float _128 = _110 * _126;
    float _130 = _106 * _126;
    float _132 = _108 * _126;
    float _134 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _136 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _138 = fma(_130, _136, fma(_100, _116, _102 * (fma(_132, _114, -(_128 * _112)) * _118)));
    float _140 = fma(_132, _136, fma(_100, _112, _102 * (fma(_128, _116, -(_130 * _114)) * _118)));
    float _142 = fma(_128, _136, fma(_100, _114, _102 * (fma(_130, _112, -(_132 * _116)) * _118)));
    float _144 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _146 = inversesqrt(fma(_142, _142, fma(_140, _140, _138 * _138)));
    float _148 = _120 * (-_144);
    float _150 = _122 * (-_144);
    float _152 = _124 * (-_144);
    float _154 = _138 * _146;
    float _156 = _140 * _146;
    float _158 = _142 * _146;
    float _160 = fma(_158, _152, fma(_156, _150, _154 * _148));
    float _162 = fma(_154 * (-_160), -2.0, -_148);
    float _164 = fma(_156 * (-_160), -2.0, -_150);
    float _166 = max(_160, fp_c1_1._m0[0].y);
    float _168 = fma(_158 * (-_160), -2.0, -_152);
    vec2 _170 = texture(fp_tex_tcb_38, vec2(_166, (-_134) + (-0.0))).xy;
    float _172 = _170.x;
    float _174 = _170.y;
    float _176 = _150 + (-fp_c5_1._m0[23].y);
    float _178 = 1.0 / max(abs(_168), max(abs(_162), abs(_164)));
    vec3 _182 = texture(fp_tex_tcb_36, vec4(_162 * _178, _164 * _178, _168 * _178, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_134 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _184 = texture(fp_tex_tcb_22, vec2(_76.x, _76.y)).xy;
    vec4 _187 = texture(fp_tex_tcb_24, vec2(_76.z, _76.w)).xyzw;
    float _189 = _187.w;
    vec3 _191 = texture(fp_tex_tcb_14, vec2(_68.z, _68.w)).xyz;
    float _193 = _148 + (-fp_c5_1._m0[23].x);
    float _195 = _78.z;
    float _197 = _152 + (-fp_c5_1._m0[23].z);
    float _199 = _78.x;
    float _201 = fma(_134, 0.5, 0.5);
    float _203 = _134 * _134;
    float _205 = _154 * _158;
    float _207 = inversesqrt(fma(_197, _197, fma(_176, _176, _193 * _193)));
    float _209 = _193 * _207;
    float _211 = _176 * _207;
    float _213 = _197 * _207;
    float _215 = _156 * _158;
    float _217 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].y, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _219 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].z, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _221 = max(fma(_152, _213, fma(_150, _211, _148 * _209)), fp_c1_1._m0[0].y);
    float _223 = _154 * _156;
    float _225 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].x, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _227 = _158 * _158;
    float _229 = (_201 * 0.5) * _201;
    float _231 = fma(_156, -fp_c5_1._m0[23].y, _154 * (-fp_c5_1._m0[23].x));
    float _233 = _203 * _203;
    float _235 = max(fma(_158, _213, fma(_156, _211, _154 * _209)), fp_c1_1._m0[0].y) * max(fma(_158, _213, fma(_156, _211, _154 * _209)), fp_c1_1._m0[0].y);
    float _237 = max(fma(_158, -fp_c5_1._m0[23].z, _231), fp_c1_1._m0[0].y);
    float _239 = 1.0 / (_229 + fma(_166, -_229, _166));
    float _241 = exp2(_221 * fma(_221, fp_c1_1._m0[0].z, -6.9831600189208984375));
    int _244 = max(0, min(int(trunc((_195 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _246 = fma(_154, _154, -(_156 * _156));
    float _248 = (_239 * (1.0 / (_229 + fma(_229, -_237, _237)))) * ((_203 * (1.0 / max(fma(_235, _233, -_235) + 1.0, fp_c1_1._m0[0].y))) * (_203 * (1.0 / max(fma(_235, _233, -_235) + 1.0, fp_c1_1._m0[0].y))));
    uint _251 = uint(int(uint((((int(uint(_244) >> uint(16)) * 20) << 16) + (((_244 & 65535) * 20) + max(0, min(int(trunc((_199 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _253 = fp_c10_1._m0[int(uint(int(_251)) >> uint(2))][int(_251) & 3];
    float _255 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _257 = _64.w;
    float _259 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    float _261 = fma(_217, -_255, _255);
    float _263 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _265 = fma(_225, -_259, _259);
    float _267 = fma(_219, -_263, _263);
    float _269 = clamp(fma(_158, -fp_c5_1._m0[23].z, _231), 0.0, 1.0);
    float _271 = clamp(_257 * clamp(fma(_184.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _273 = ((_187.x * _189) * _257) * 32.0;
    float _275 = ((_187.z * _189) * _257) * 32.0;
    float _277 = ((_187.y * _189) * _257) * 32.0;
    float _279 = fma(_265, _273, fma(_182.x, fma(_225, _172, _174), max(0.0, fma(_246, fp_c5_1._m0[31].x, (fma(_158, fp_c5_1._m0[25].z, fma(_156, fp_c5_1._m0[25].y, _154 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_205, fp_c5_1._m0[28].w, fma(_227, fp_c5_1._m0[28].z, fma(_215, fp_c5_1._m0[28].y, _223 * fp_c5_1._m0[28].x))))) * _265));
    float _281 = fma(_267, _275, fma(_182.z, fma(_219, _172, _174), max(0.0, fma(_246, fp_c5_1._m0[31].z, (fma(_158, fp_c5_1._m0[27].z, fma(_156, fp_c5_1._m0[27].y, _154 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_205, fp_c5_1._m0[30].w, fma(_227, fp_c5_1._m0[30].z, fma(_215, fp_c5_1._m0[30].y, _223 * fp_c5_1._m0[30].x))))) * _267));
    float _283 = fma(_261, _277, fma(_182.y, fma(_217, _172, _174), max(0.0, fma(_246, fp_c5_1._m0[31].y, (fma(_158, fp_c5_1._m0[26].z, fma(_156, fp_c5_1._m0[26].y, _154 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_205, fp_c5_1._m0[29].w, fma(_227, fp_c5_1._m0[29].z, fma(_215, fp_c5_1._m0[29].y, _223 * fp_c5_1._m0[29].x))))) * _261));
    float _285 = clamp((-_271) + 1.0, 0.0, 1.0);
    float _287 = clamp((-fma(_271, fp_c7_1._m0[37].w, clamp(_257 * clamp(fma(_184.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_104.x) + 1.0, (-_104.y) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_64.x * gl_FragCoord.w) * _88, (_64.y * gl_FragCoord.w) * _88)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _289 = _283;
    float _291 = _281;
    float _293 = _279;
    float _295 = _279;
    float _297 = _281;
    float _299 = _283;
    if (floatBitsToInt(_253) != (-1))
    {
        int _301 = floatBitsToInt(_253);
        int _303 = 0;
        float _307;
        float _309;
        float _311;
        int _397;
        do
        {
            int _305 = _301 & 255;
            _307 = _293;
            _309 = _289;
            _311 = _291;
            _315 = uint(_305) >= 30u;
            if (_315)
            {
                break;
            }
            int _317 = _305 << 4;
            uint _319 = uint(int(uint(_317 + 7360) >> uint(2)));
            int _321 = int(_319) + 1;
            uint _323 = uint(int(uint(_317 + 7368) >> uint(2)));
            float _325 = (-_199) + fp_c10_1._m0[int(uint(int(_319)) >> uint(2))][int(_319) & 3];
            float _327 = fp_c10_1._m0[int(uint(_321) >> uint(2))][_321 & 3] + (-_78.y);
            float _329 = (-_195) + fp_c10_1._m0[int(uint(int(_323)) >> uint(2))][int(_323) & 3];
            float _331 = fma(_329, _329, fma(_327, _327, _325 * _325));
            float _333 = _325 * inversesqrt(_331);
            float _335 = _327 * inversesqrt(_331);
            float _337 = _329 * inversesqrt(_331);
            float _339 = _148 + _333;
            float _341 = _150 + _335;
            float _343 = _152 + _337;
            uint _345 = uint(int(uint(_317 + 6880) >> uint(2)));
            int _347 = int(_345) + 1;
            float _349 = inversesqrt(fma(_343, _343, fma(_341, _341, _339 * _339)));
            float _351 = _339 * _349;
            float _353 = _341 * _349;
            float _355 = _343 * _349;
            float _357 = fma(_158, _337, fma(_156, _335, _154 * _333));
            float _359 = max(_357, fp_c1_1._m0[0].y);
            uint _361 = uint(int(uint(_317 + 8320) >> uint(2)));
            float _363 = max(fma(_152, _355, fma(_150, _353, _148 * _351)), fp_c1_1._m0[0].y);
            float _365 = max(fma(_158, _355, fma(_156, _353, _154 * _351)), fp_c1_1._m0[0].y) * max(fma(_158, _355, fma(_156, _353, _154 * _351)), fp_c1_1._m0[0].y);
            uint _367 = uint(int(uint(_317 + 6408) >> uint(2)));
            uint _369 = uint(int(uint(_317 + 6400) >> uint(2)));
            int _371 = int(_369) + 1;
            float _373 = exp2(_363 * fma(_363, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _375 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_361)) >> uint(2))][int(_361) & 3]) != 0;
            float _377 = (_239 * (1.0 / (_229 + fma(_229, -_359, _359)))) * ((_203 * (1.0 / max(fma(_233, _365, -_365) + 1.0, fp_c1_1._m0[0].y))) * (_203 * (1.0 / max(fma(_233, _365, -_365) + 1.0, fp_c1_1._m0[0].y))));
            float _379 = (_219 + fma(_219, -_373, _373)) * _377;
            float _381 = _379;
            if (!_375)
            {
                _381 = 1.0;
            }
            float _383 = _381;
            if (_375)
            {
                uint _385 = uint(int(uint(_317 + 7840) >> uint(2)));
                int _387 = int(_385) + 1;
                uint _389 = uint(int(uint(_317 + 6888) >> uint(2)));
                float _391 = fp_c10_1._m0[int(uint(int(_389)) >> uint(2))][int(_389) & 3];
                int _393 = int(_389) + 1;
                uint _395 = uint(int(uint(_317 + 7848) >> uint(2)));
                _383 = exp2(fp_c10_1._m0[int(uint(_393) >> uint(2))][_393 & 3] * log2(clamp(((-_391) + fma(_337, -fp_c10_1._m0[int(uint(int(_395)) >> uint(2))][int(_395) & 3], fma(_335, -fp_c10_1._m0[int(uint(_387) >> uint(2))][_387 & 3], _333 * (-fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3])))) * (1.0 / ((-_391) + 1.0)), 0.0, 1.0)));
            }
            _397 = _303 + 1;
            float _399 = (exp2(fp_c10_1._m0[int(uint(_347) >> uint(2))][_347 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_345)) >> uint(2))][int(_345) & 3], -sqrt(_331), fp_c1_1._m0[1].x), 0.0, 1.0))) * _383) * clamp(_357 + (-0.0), 0.0, 1.0);
            float _401 = fma(fp_c10_1._m0[int(uint(_371) >> uint(2))][_371 & 3] * _399, fma(_255, fp_c1_1._m0[1].y, ((_217 + fma(_217, -_373, _373)) * _377) * 0.079577468335628509521484375), _289);
            float _403 = fma(fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3] * _399, fma(_263, fp_c1_1._m0[1].y, _379 * 0.079577468335628509521484375), _291);
            float _405 = fma(fp_c10_1._m0[int(uint(int(_369)) >> uint(2))][int(_369) & 3] * _399, fma(_259, fp_c1_1._m0[1].y, ((_225 + fma(_225, -_373, _373)) * _377) * 0.079577468335628509521484375), _293);
            _301 = int(uint(_301) >> uint(8));
            _303 = _397;
            _289 = _401;
            _291 = _403;
            _293 = _405;
            _307 = _405;
            _309 = _401;
            _311 = _403;
        } while (!(_397 >= 4));
        _315 = false;
        _295 = _307;
        _297 = _311;
        _299 = _309;
        if ((_301 & 255) == 30)
        {
            float _407 = _78.y;
            float _409 = 1.0 / (fma(_195, fp_c10_1._m0[565].z, fma(_407, fp_c10_1._m0[565].y, _199 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _411 = 1.0 / fp_c10_1._m0[561].y;
            float _413 = (-_199) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_411, fp_c10_1._m0[557].x);
            float _415 = (-_195) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_411, fp_c10_1._m0[557].z);
            float _417 = _413 * _413;
            float _419 = sqrt(fma(_415, _415, _417)) * (-fp_c10_1._m0[558].y);
            float _421 = _199 + (-fp_c10_1._m0[557].x);
            float _423 = inversesqrt(fma(_415, _415, fma(_419, _419, _417)));
            float _425 = _195 + (-fp_c10_1._m0[557].z);
            float _427 = _425 * fp_c10_1._m0[558].x;
            float _429 = _413 * _423;
            float _431 = _419 * _423;
            float _433 = _415 * _423;
            float _435 = _421 * fp_c10_1._m0[558].z;
            float _437 = _148 + _429;
            float _439 = _150 + _431;
            float _441 = _152 + _433;
            float _443 = inversesqrt(fma(_441, _441, fma(_439, _439, _437 * _437)));
            float _445 = fma(_425, _425, _421 * _421);
            float _447 = _437 * _443;
            float _449 = _439 * _443;
            float _451 = fma(_158, _433, fma(_156, _431, _154 * _429));
            float _453 = _441 * _443;
            float _455 = ((-float(_427 < _435)) + float(_427 > _435)) * fp_c10_1._m0[561].y;
            float _457 = inversesqrt(fma(_433, _433, _429 * _429));
            float _459 = max(_451, fp_c1_1._m0[0].y);
            float _461 = fma(_425, fp_c10_1._m0[558].z, _421 * fp_c10_1._m0[558].x);
            float _463 = max(fma(_158, _453, fma(_156, _449, _154 * _447)), fp_c1_1._m0[0].y) * max(fma(_158, _453, fma(_156, _449, _154 * _447)), fp_c1_1._m0[0].y);
            float _465 = max(fma(_152, _453, fma(_150, _449, _148 * _447)), fp_c1_1._m0[0].y);
            bool _467 = _461 > 0.0;
            float _469 = _433;
            if (_467)
            {
                _469 = sqrt(_445);
            }
            float _471 = _469;
            if (!_467)
            {
                _471 = 1.0;
            }
            float _473 = fma(_229, -_459, _459);
            bool _475 = fma(_425 * inversesqrt(_445), fp_c10_1._m0[558].z, (_421 * inversesqrt(_445)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _477 = clamp(fma(_461 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_461 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _479 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_421, fma(_455, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_425 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_455 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_421, fma(_455, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_425 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_455 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _481 = _473;
            if (!_475)
            {
                _481 = 1.0;
            }
            float _483 = _481;
            if (_475)
            {
                _483 = fma(_479, -_479, fp_c1_1._m0[1].x) * fma(_479, -_479, fp_c1_1._m0[1].x);
            }
            float _485 = exp2(_465 * fma(_465, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _487 = (_239 * (1.0 / (_229 + _473))) * ((_203 * (1.0 / max(fma(_233, _463, -_463) + 1.0, fp_c1_1._m0[0].y))) * (_203 * (1.0 / max(fma(_233, _463, -_463) + 1.0, fp_c1_1._m0[0].y))));
            float _489 = (min(fma(_477, -_477, fp_c1_1._m0[1].x) * fma(_477, -_477, fp_c1_1._m0[1].x), _483) * (exp2(log2(clamp(fma(_471, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_433 * _457, -fp_c10_1._m0[558].z, (_429 * _457) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_451 + (-0.0), 0.0, 1.0);
            float _491 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_195, fp_c10_1._m0[562].z, fma(_407, fp_c10_1._m0[562].y, _199 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _409, 0.5, 0.5), (-fma((fma(_195, fp_c10_1._m0[563].z, fma(_407, fp_c10_1._m0[563].y, _199 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _409, 0.5, 0.5)) + 1.0)).z > fma((fma(_195, fp_c10_1._m0[564].z, fma(_407, fp_c10_1._m0[564].y, _199 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _409, 0.5, 0.5)) || (_461 <= 0.0));
            _295 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _489) * fma(_259, fp_c1_1._m0[1].y, ((_225 + fma(_225, -_485, _485)) * _487) * 0.079577468335628509521484375), _491, _307);
            _297 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _489) * fma(_263, fp_c1_1._m0[1].y, ((_219 + fma(_219, -_485, _485)) * _487) * 0.079577468335628509521484375), _491, _311);
            _299 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _489) * fma(_255, fp_c1_1._m0[1].y, ((_217 + fma(_217, -_485, _485)) * _487) * 0.079577468335628509521484375), _491, _309);
        }
    }
    float _493 = _199 + (-fp_c3_1._m0[11].w);
    float _495 = _78.y;
    float _497 = _195 + (-fp_c3_1._m0[13].w);
    float _499 = _495 + (-fp_c3_1._m0[12].w);
    float _501 = fma(_497, _497, fma(_499, _499, _493 * _493));
    float _503 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _505 = fma(_191.x * fp_c6_1._m0[7].x, _503, fma(_285, _295, _287 * (fma((_225 + fma(_225, -_241, _241)) * _248, fp_c1_1._m0[0].w, _259 * 0.3183098733425140380859375) * fma(_269, fp_c5_1._m0[5].x, _273))));
    float _507 = fma(_191.z * fp_c6_1._m0[7].z, _503, fma(_285, _297, _287 * (fma((_219 + fma(_219, -_241, _241)) * _248, fp_c1_1._m0[0].w, _263 * 0.3183098733425140380859375) * fma(_269, fp_c5_1._m0[5].z, _275))));
    float _509 = clamp(fma(_287 * _285, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _511 = clamp(fma(fma(_195, fp_c5_1._m0[14].z, fma(_495, fp_c5_1._m0[14].y, _199 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _513 = fma(_191.y * fp_c6_1._m0[7].y, _503, fma(_285, _299, _287 * (fma((_217 + fma(_217, -_241, _241)) * _248, fp_c1_1._m0[0].w, _255 * 0.3183098733425140380859375) * fma(_269, fp_c5_1._m0[5].y, _277))));
    float _515 = exp2(log2(clamp(sqrt(_501) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_497 * inversesqrt(_501), fp_c5_1._m0[23].z, fma(_499 * inversesqrt(_501), fp_c5_1._m0[23].y, (_493 * inversesqrt(_501)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _517 = fma((-_505) + fp_c5_1._m0[13].x, _511, _505);
    float _519 = fma((-_513) + fp_c5_1._m0[13].y, _511, _513);
    float _521 = fma((-_507) + fp_c5_1._m0[13].z, _511, _507);
    float _523 = clamp((-exp2((clamp(fma(sqrt(_501), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_517) + fma(fma((_515 * fp_c7_1._m0[55].x) * _509, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _523, _517);
    _81.y = fma((-_519) + fma(fma((_515 * fp_c7_1._m0[55].y) * _509, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _523, _519);
    _81.z = fma((-_521) + fma(fma((_515 * fp_c7_1._m0[55].z) * _509, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _523, _521);
    _81.w = 1.0;
}


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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

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
    float _112 = _72.z;
    float _114 = _72.x;
    float _116 = _72.y;
    float _118 = _72.w;
    float _120 = _74.x;
    float _122 = _74.y;
    float _124 = _74.z;
    float _126 = inversesqrt(fma(_110, _110, fma(_108, _108, _106 * _106)));
    float _128 = _106 * _126;
    float _130 = _110 * _126;
    float _132 = _108 * _126;
    float _134 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _136 = fma(_128, _134, fma(_100, _114, _102 * (fma(_132, _112, -(_130 * _116)) * _118)));
    float _138 = fma(_132, _134, fma(_100, _116, _102 * (fma(_130, _114, -(_128 * _112)) * _118)));
    float _140 = fma(_130, _134, fma(_100, _112, _102 * (fma(_128, _116, -(_132 * _114)) * _118)));
    float _142 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _144 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _146 = _120 * (-_142);
    float _148 = inversesqrt(fma(_140, _140, fma(_138, _138, _136 * _136)));
    float _150 = _122 * (-_142);
    float _152 = _124 * (-_142);
    float _154 = _136 * _148;
    float _156 = _138 * _148;
    float _158 = _140 * _148;
    float _160 = fma(_158, _152, fma(_156, _150, _154 * _146));
    float _162 = fma(_154 * (-_160), -2.0, -_146);
    float _164 = fma(_156 * (-_160), -2.0, -_150);
    float _166 = fma(_158 * (-_160), -2.0, -_152);
    float _168 = 1.0 / max(abs(_166), max(abs(_162), abs(_164)));
    float _170 = max(_160, fp_c1_1._m0[0].y);
    vec2 _172 = texture(fp_tex_tcb_38, vec2(_170, (-_144) + (-0.0))).xy;
    float _174 = _172.x;
    float _176 = _172.y;
    vec3 _180 = texture(fp_tex_tcb_36, vec4(_162 * _168, _164 * _168, _166 * _168, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_144 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _182 = texture(fp_tex_tcb_22, vec2(_76.x, _76.y)).xy;
    vec4 _185 = texture(fp_tex_tcb_24, vec2(_76.z, _76.w)).xyzw;
    float _187 = _185.w;
    vec3 _189 = texture(fp_tex_tcb_14, vec2(_90, _92)).xyz;
    float _191 = _146 + (-fp_c5_1._m0[23].x);
    float _193 = _150 + (-fp_c5_1._m0[23].y);
    float _195 = _152 + (-fp_c5_1._m0[23].z);
    float _197 = inversesqrt(fma(_195, _195, fma(_193, _193, _191 * _191)));
    float _199 = _191 * _197;
    float _201 = _154 * _156;
    float _203 = _193 * _197;
    float _205 = _195 * _197;
    float _207 = _156 * _158;
    float _209 = _78.z;
    float _211 = _78.x;
    float _213 = _158 * _158;
    float _215 = _154 * _158;
    float _217 = fma(_154, _154, -(_156 * _156));
    float _219 = _144 * _144;
    float _221 = max(fma(_158, _205, fma(_156, _203, _154 * _199)), fp_c1_1._m0[0].y) * max(fma(_158, _205, fma(_156, _203, _154 * _199)), fp_c1_1._m0[0].y);
    float _223 = _219 * _219;
    float _225 = fma(_144, 0.5, 0.5);
    float _227 = max(fma(_152, _205, fma(_150, _203, _146 * _199)), fp_c1_1._m0[0].y);
    float _229 = fma(_156, -fp_c5_1._m0[23].y, _154 * (-fp_c5_1._m0[23].x));
    float _231 = (_225 * 0.5) * _225;
    float _233 = max(fma(_158, -fp_c5_1._m0[23].z, _229), fp_c1_1._m0[0].y);
    int _236 = max(0, min(int(trunc((_209 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _238 = 1.0 / (_231 + fma(_170, -_231, _170));
    float _240 = exp2(_227 * fma(_227, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _242 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].x, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _244 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].y, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _246 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].z, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    uint _249 = uint(int(uint((((int(uint(_236) >> uint(16)) * 20) << 16) + (((_236 & 65535) * 20) + max(0, min(int(trunc((_211 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _251 = fp_c10_1._m0[int(uint(int(_249)) >> uint(2))][int(_249) & 3];
    float _253 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _255 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    float _257 = (_238 * (1.0 / (_231 + fma(_231, -_233, _233)))) * ((_219 * (1.0 / max(fma(_221, _223, -_221) + 1.0, fp_c1_1._m0[0].y))) * (_219 * (1.0 / max(fma(_221, _223, -_221) + 1.0, fp_c1_1._m0[0].y))));
    float _259 = _64.w;
    float _261 = fma(_242, -_255, _255);
    float _263 = fma(_244, -_253, _253);
    float _265 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _267 = fma(_246, -_265, _265);
    float _269 = clamp(_259 * clamp(fma(_182.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _271 = ((_185.y * _187) * _259) * 32.0;
    float _273 = ((_185.x * _187) * _259) * 32.0;
    float _275 = ((_185.z * _187) * _259) * 32.0;
    float _277 = clamp(fma(_158, -fp_c5_1._m0[23].z, _229), 0.0, 1.0);
    float _279 = fma(_263, _271, fma(_180.y, fma(_244, _174, _176), max(0.0, fma(_217, fp_c5_1._m0[31].y, (fma(_158, fp_c5_1._m0[26].z, fma(_156, fp_c5_1._m0[26].y, _154 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_215, fp_c5_1._m0[29].w, fma(_213, fp_c5_1._m0[29].z, fma(_207, fp_c5_1._m0[29].y, _201 * fp_c5_1._m0[29].x))))) * _263));
    float _281 = fma(_261, _273, fma(_180.x, fma(_242, _174, _176), max(0.0, fma(_217, fp_c5_1._m0[31].x, (fma(_158, fp_c5_1._m0[25].z, fma(_156, fp_c5_1._m0[25].y, _154 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_215, fp_c5_1._m0[28].w, fma(_213, fp_c5_1._m0[28].z, fma(_207, fp_c5_1._m0[28].y, _201 * fp_c5_1._m0[28].x))))) * _261));
    float _283 = fma(_267, _275, fma(_180.z, fma(_246, _174, _176), max(0.0, fma(_217, fp_c5_1._m0[31].z, (fma(_158, fp_c5_1._m0[27].z, fma(_156, fp_c5_1._m0[27].y, _154 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_215, fp_c5_1._m0[30].w, fma(_213, fp_c5_1._m0[30].z, fma(_207, fp_c5_1._m0[30].y, _201 * fp_c5_1._m0[30].x))))) * _267));
    float _285 = clamp((-_269) + 1.0, 0.0, 1.0);
    float _287 = clamp((-fma(_269, fp_c7_1._m0[37].w, clamp(_259 * clamp(fma(_182.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_104.x) + 1.0, (-_104.y) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_64.x * gl_FragCoord.w) * _88, (_64.y * gl_FragCoord.w) * _88)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _289 = _279;
    float _291 = _283;
    float _293 = _281;
    float _295 = _283;
    float _297 = _281;
    float _299 = _279;
    if (floatBitsToInt(_251) != (-1))
    {
        int _301 = floatBitsToInt(_251);
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
            float _325 = (-_211) + fp_c10_1._m0[int(uint(int(_319)) >> uint(2))][int(_319) & 3];
            float _327 = fp_c10_1._m0[int(uint(_321) >> uint(2))][_321 & 3] + (-_78.y);
            float _329 = (-_209) + fp_c10_1._m0[int(uint(int(_323)) >> uint(2))][int(_323) & 3];
            float _331 = fma(_329, _329, fma(_327, _327, _325 * _325));
            float _333 = _325 * inversesqrt(_331);
            float _335 = _327 * inversesqrt(_331);
            float _337 = _329 * inversesqrt(_331);
            float _339 = _146 + _333;
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
            float _363 = max(fma(_152, _355, fma(_150, _353, _146 * _351)), fp_c1_1._m0[0].y);
            float _365 = max(fma(_158, _355, fma(_156, _353, _154 * _351)), fp_c1_1._m0[0].y) * max(fma(_158, _355, fma(_156, _353, _154 * _351)), fp_c1_1._m0[0].y);
            uint _367 = uint(int(uint(_317 + 6408) >> uint(2)));
            uint _369 = uint(int(uint(_317 + 6400) >> uint(2)));
            int _371 = int(_369) + 1;
            float _373 = exp2(_363 * fma(_363, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _375 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_361)) >> uint(2))][int(_361) & 3]) != 0;
            float _377 = (_238 * (1.0 / (_231 + fma(_231, -_359, _359)))) * ((_219 * (1.0 / max(fma(_223, _365, -_365) + 1.0, fp_c1_1._m0[0].y))) * (_219 * (1.0 / max(fma(_223, _365, -_365) + 1.0, fp_c1_1._m0[0].y))));
            float _379 = (_246 + fma(_246, -_373, _373)) * _377;
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
            float _401 = fma(fp_c10_1._m0[int(uint(_371) >> uint(2))][_371 & 3] * _399, fma(_253, fp_c1_1._m0[1].y, ((_244 + fma(_244, -_373, _373)) * _377) * 0.079577468335628509521484375), _289);
            float _403 = fma(fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3] * _399, fma(_265, fp_c1_1._m0[1].y, _379 * 0.079577468335628509521484375), _291);
            float _405 = fma(fp_c10_1._m0[int(uint(int(_369)) >> uint(2))][int(_369) & 3] * _399, fma(_255, fp_c1_1._m0[1].y, ((_242 + fma(_242, -_373, _373)) * _377) * 0.079577468335628509521484375), _293);
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
        _295 = _311;
        _297 = _307;
        _299 = _309;
        if ((_301 & 255) == 30)
        {
            float _407 = _78.y;
            float _409 = 1.0 / (fma(_209, fp_c10_1._m0[565].z, fma(_407, fp_c10_1._m0[565].y, _211 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _411 = 1.0 / fp_c10_1._m0[561].y;
            float _413 = (-_211) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_411, fp_c10_1._m0[557].x);
            float _415 = (-_209) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_411, fp_c10_1._m0[557].z);
            float _417 = _413 * _413;
            float _419 = sqrt(fma(_415, _415, _417)) * (-fp_c10_1._m0[558].y);
            float _421 = _211 + (-fp_c10_1._m0[557].x);
            float _423 = inversesqrt(fma(_415, _415, fma(_419, _419, _417)));
            float _425 = _209 + (-fp_c10_1._m0[557].z);
            float _427 = _425 * fp_c10_1._m0[558].x;
            float _429 = _413 * _423;
            float _431 = _419 * _423;
            float _433 = _415 * _423;
            float _435 = _421 * fp_c10_1._m0[558].z;
            float _437 = _146 + _429;
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
            float _459 = max(fma(_152, _453, fma(_150, _449, _146 * _447)), fp_c1_1._m0[0].y);
            float _461 = fma(_425, fp_c10_1._m0[558].z, _421 * fp_c10_1._m0[558].x);
            float _463 = max(fma(_158, _453, fma(_156, _449, _154 * _447)), fp_c1_1._m0[0].y) * max(fma(_158, _453, fma(_156, _449, _154 * _447)), fp_c1_1._m0[0].y);
            bool _465 = _461 > 0.0;
            float _467 = _433;
            if (_465)
            {
                _467 = sqrt(_445);
            }
            float _469 = _467;
            if (!_465)
            {
                _469 = 1.0;
            }
            bool _471 = fma(_425 * inversesqrt(_445), fp_c10_1._m0[558].z, (_421 * inversesqrt(_445)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _473 = max(_451, fp_c1_1._m0[0].y);
            float _475 = clamp(fma(_461 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_461 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _477 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_421, fma(_455, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_425 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_455 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_421, fma(_455, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_425 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_455 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _479 = log2(clamp(fma(_469, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _481 = _479;
            if (_471)
            {
                _481 = fma(_477, -_477, fp_c1_1._m0[1].x) * fma(_477, -_477, fp_c1_1._m0[1].x);
            }
            float _483 = _481;
            if (!_471)
            {
                _483 = 1.0;
            }
            float _485 = exp2(_459 * fma(_459, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _487 = (_238 * (1.0 / (_231 + fma(_231, -_473, _473)))) * ((_219 * (1.0 / max(fma(_223, _463, -_463) + 1.0, fp_c1_1._m0[0].y))) * (_219 * (1.0 / max(fma(_223, _463, -_463) + 1.0, fp_c1_1._m0[0].y))));
            float _489 = (min(fma(_475, -_475, fp_c1_1._m0[1].x) * fma(_475, -_475, fp_c1_1._m0[1].x), _483) * (exp2(_479) * exp2(log2(clamp((fma(_433 * _457, -fp_c10_1._m0[558].z, (_429 * _457) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_451 + (-0.0), 0.0, 1.0);
            float _491 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_209, fp_c10_1._m0[562].z, fma(_407, fp_c10_1._m0[562].y, _211 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _409, 0.5, 0.5), (-fma((fma(_209, fp_c10_1._m0[563].z, fma(_407, fp_c10_1._m0[563].y, _211 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _409, 0.5, 0.5)) + 1.0)).z > fma((fma(_209, fp_c10_1._m0[564].z, fma(_407, fp_c10_1._m0[564].y, _211 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _409, 0.5, 0.5)) || (_461 <= 0.0));
            _295 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _489) * fma(_265, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_485, _485)) * _487) * 0.079577468335628509521484375), _491, _311);
            _297 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _489) * fma(_255, fp_c1_1._m0[1].y, ((_242 + fma(_242, -_485, _485)) * _487) * 0.079577468335628509521484375), _491, _307);
            _299 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _489) * fma(_253, fp_c1_1._m0[1].y, ((_244 + fma(_244, -_485, _485)) * _487) * 0.079577468335628509521484375), _491, _309);
        }
    }
    float _493 = _211 + (-fp_c3_1._m0[11].w);
    float _495 = _78.y;
    float _497 = _209 + (-fp_c3_1._m0[13].w);
    float _499 = fma(_189.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_285, _295, _287 * (fma(_257 * (_246 + fma(_246, -_240, _240)), fp_c1_1._m0[0].w, _265 * 0.3183098733425140380859375) * fma(_277, fp_c5_1._m0[5].z, _275))));
    float _501 = _495 + (-fp_c3_1._m0[12].w);
    float _503 = fma(_497, _497, fma(_501, _501, _493 * _493));
    float _505 = clamp(fma(_287 * _285, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _507 = fma(_189.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_285, _297, _287 * (fma(_257 * (_242 + fma(_242, -_240, _240)), fp_c1_1._m0[0].w, _255 * 0.3183098733425140380859375) * fma(_277, fp_c5_1._m0[5].x, _273))));
    float _509 = clamp(fma(fma(_209, fp_c5_1._m0[14].z, fma(_495, fp_c5_1._m0[14].y, _211 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _511 = exp2(log2(clamp(sqrt(_503) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_497 * inversesqrt(_503), fp_c5_1._m0[23].z, fma(_501 * inversesqrt(_503), fp_c5_1._m0[23].y, (_493 * inversesqrt(_503)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _513 = fma(_189.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_285, _299, _287 * (fma(_257 * (_244 + fma(_244, -_240, _240)), fp_c1_1._m0[0].w, _253 * 0.3183098733425140380859375) * fma(_277, fp_c5_1._m0[5].y, _271))));
    float _515 = fma((-_507) + fp_c5_1._m0[13].x, _509, _507);
    float _517 = fma((-_513) + fp_c5_1._m0[13].y, _509, _513);
    float _519 = fma((-_499) + fp_c5_1._m0[13].z, _509, _499);
    float _521 = clamp((-exp2((clamp(fma(sqrt(_503), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_515) + fma(fma((_511 * fp_c7_1._m0[55].x) * _505, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _521, _515);
    _81.y = fma((-_517) + fma(fma((_511 * fp_c7_1._m0[55].y) * _505, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _521, _517);
    _81.z = fma((-_519) + fma(fma((_511 * fp_c7_1._m0[55].z) * _505, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _521, _519);
    _81.w = 1.0;
}


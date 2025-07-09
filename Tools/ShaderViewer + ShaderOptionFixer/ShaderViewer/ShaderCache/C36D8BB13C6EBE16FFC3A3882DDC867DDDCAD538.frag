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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
layout(binding = 5) uniform sampler2D fp_tex_tcb_22;
layout(binding = 6) uniform sampler2D fp_tex_tcb_24;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 2) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 6) in vec4 _72;
layout(location = 3) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 0) out vec4 _79;
uint _6[12];

void main()
{
    bool _317 = false;
    float _86 = _64.x;
    float _88 = _64.y;
    vec2 _92 = texture(fp_tex_tcb_E, vec2(_86, _88)).xy;
    float _94 = _92.x;
    float _96 = _92.y;
    vec3 _100 = texture(fp_tex_tcb_A, vec2(_86, _88)).xyz;
    float _102 = _100.x;
    float _104 = _100.y;
    float _106 = _100.z;
    float _108 = texture(fp_tex_tcb_12, vec2(_86, _88)).x;
    float _110 = _66.x;
    float _112 = _66.y;
    float _114 = _66.z;
    float _116 = _68.y;
    float _118 = _68.z;
    float _120 = _68.x;
    float _122 = _68.w;
    float _124 = _70.x;
    float _126 = _70.y;
    float _128 = _70.z;
    float _130 = inversesqrt(fma(_114, _114, fma(_112, _112, _110 * _110)));
    float _132 = _114 * _130;
    float _134 = _110 * _130;
    float _136 = _112 * _130;
    float _138 = sqrt(clamp((-fma(_94, _94, _96 * _96)) + 1.0, 0.0, 1.0));
    float _140 = fma(_134, _138, fma(_94, _120, _96 * (fma(_136, _118, -(_132 * _116)) * _122)));
    float _142 = fma(_136, _138, fma(_94, _116, _96 * (fma(_132, _120, -(_134 * _118)) * _122)));
    float _144 = fma(_132, _138, fma(_94, _118, _96 * (fma(_134, _116, -(_136 * _120)) * _122)));
    float _146 = inversesqrt(fma(_128, _128, fma(_126, _126, _124 * _124)));
    float _148 = inversesqrt(fma(_144, _144, fma(_142, _142, _140 * _140)));
    float _150 = _124 * (-_146);
    float _152 = _126 * (-_146);
    float _154 = _128 * (-_146);
    float _156 = _140 * _148;
    float _158 = _142 * _148;
    float _160 = _144 * _148;
    float _162 = max(texture(fp_tex_tcb_10, vec2(_86, _88)).x, fp_c1_1._m0[0].x);
    float _164 = fma(_160, _154, fma(_158, _152, _156 * _150));
    float _166 = max(_164, fp_c1_1._m0[0].z);
    float _168 = fma(_156 * (-_164), -2.0, -_150);
    float _170 = fma(_158 * (-_164), -2.0, -_152);
    float _172 = fma(_160 * (-_164), -2.0, -_154);
    float _174 = _150 + (-fp_c5_1._m0[23].x);
    float _176 = 1.0 / max(abs(_172), max(abs(_168), abs(_170)));
    vec2 _178 = texture(fp_tex_tcb_38, vec2(_166, (-_162) + (-0.0))).xy;
    float _180 = _178.x;
    float _182 = _178.y;
    vec4 _185 = texture(fp_tex_tcb_24, vec2(_72.z, _72.w)).xyzw;
    float _187 = _185.w;
    vec2 _189 = texture(fp_tex_tcb_22, vec2(_72.x, _72.y)).xy;
    vec3 _191 = texture(fp_tex_tcb_36, vec4(_168 * _176, _170 * _176, _172 * _176, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_162 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _193 = texture(fp_tex_tcb_14, vec2(_86, _88)).xyz;
    float _195 = _152 + (-fp_c5_1._m0[23].y);
    float _197 = _156 * _158;
    float _199 = _154 + (-fp_c5_1._m0[23].z);
    float _201 = _156 * _160;
    float _203 = _158 * _160;
    float _205 = _74.x;
    float _207 = inversesqrt(fma(_199, _199, fma(_195, _195, _174 * _174)));
    float _209 = _160 * _160;
    float _211 = _74.z;
    float _213 = _174 * _207;
    float _215 = _195 * _207;
    float _217 = _199 * _207;
    float _219 = fma(_156, _156, -(_158 * _158));
    float _221 = _162 * _162;
    float _223 = fma(_158, -fp_c5_1._m0[23].y, _156 * (-fp_c5_1._m0[23].x));
    float _225 = max(fma(_160, _217, fma(_158, _215, _156 * _213)), fp_c1_1._m0[0].z) * max(fma(_160, _217, fma(_158, _215, _156 * _213)), fp_c1_1._m0[0].z);
    float _227 = _221 * _221;
    float _229 = fma(_162, 0.5, 0.5);
    float _231 = clamp(fma(_160, -fp_c5_1._m0[23].z, _223), 0.0, 1.0);
    float _233 = max(fma(_154, _217, fma(_152, _215, _150 * _213)), fp_c1_1._m0[0].z);
    float _235 = (_229 * 0.5) * _229;
    float _237 = max(fma(_160, -fp_c5_1._m0[23].z, _223), fp_c1_1._m0[0].z);
    float _239 = 1.0 / (_235 + fma(_166, -_235, _166));
    int _242 = max(0, min(int(trunc((_211 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _244 = exp2(_233 * fma(_233, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _246 = fma(_108, _102 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _248 = fma(_108, _104 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _250 = fma(_108, _106 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _252 = fma(_104, -_108, _104);
    float _254 = (_239 * (1.0 / (_235 + fma(_235, -_237, _237)))) * ((_221 * (1.0 / max(fma(_225, _227, -_225) + 1.0, fp_c1_1._m0[0].z))) * (_221 * (1.0 / max(fma(_225, _227, -_225) + 1.0, fp_c1_1._m0[0].z))));
    float _256 = fma(_102, -_108, _102);
    uint _259 = uint(int(uint((((int(uint(_242) >> uint(16)) * 20) << 16) + (((_242 & 65535) * 20) + max(0, min(int(trunc((_205 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _261 = fp_c10_1._m0[int(uint(int(_259)) >> uint(2))][int(_259) & 3];
    float _263 = fma(_106, -_108, _106);
    float _265 = _76.w;
    float _267 = fma(_256, -_246, _256);
    float _269 = fma(_252, -_248, _252);
    float _271 = fma(_263, -_250, _263);
    float _273 = clamp(_265 * clamp(fma(_189.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _275 = ((_185.x * _187) * _265) * 32.0;
    float _277 = ((_185.y * _187) * _265) * 32.0;
    float _279 = ((_185.z * _187) * _265) * 32.0;
    float _281 = fma(_267, _275, fma(_191.x, fma(_246, _180, _182), _267 * max(0.0, fma(_219, fp_c5_1._m0[31].x, (fma(_160, fp_c5_1._m0[25].z, fma(_158, fp_c5_1._m0[25].y, _156 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_201, fp_c5_1._m0[28].w, fma(_209, fp_c5_1._m0[28].z, fma(_203, fp_c5_1._m0[28].y, _197 * fp_c5_1._m0[28].x)))))));
    float _283 = fma(_269, _277, fma(_191.y, fma(_248, _180, _182), _269 * max(0.0, fma(_219, fp_c5_1._m0[31].y, (fma(_160, fp_c5_1._m0[26].z, fma(_158, fp_c5_1._m0[26].y, _156 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_201, fp_c5_1._m0[29].w, fma(_209, fp_c5_1._m0[29].z, fma(_203, fp_c5_1._m0[29].y, _197 * fp_c5_1._m0[29].x)))))));
    float _285 = fma(_271, _279, fma(_191.z, fma(_250, _180, _182), _271 * max(0.0, fma(_219, fp_c5_1._m0[31].z, (fma(_160, fp_c5_1._m0[27].z, fma(_158, fp_c5_1._m0[27].y, _156 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_201, fp_c5_1._m0[30].w, fma(_209, fp_c5_1._m0[30].z, fma(_203, fp_c5_1._m0[30].y, _197 * fp_c5_1._m0[30].x)))))));
    float _287 = clamp((-_273) + 1.0, 0.0, 1.0);
    float _289 = clamp((-fma(_273, fp_c7_1._m0[37].w, clamp(_265 * clamp(fma(_189.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    float _291 = _283;
    float _293 = _281;
    float _295 = _285;
    float _297 = _281;
    float _299 = _283;
    float _301 = _285;
    if (floatBitsToInt(_261) != (-1))
    {
        int _303 = floatBitsToInt(_261);
        int _305 = 0;
        float _309;
        float _311;
        float _313;
        int _399;
        do
        {
            int _307 = _303 & 255;
            _309 = _293;
            _311 = _291;
            _313 = _295;
            _317 = uint(_307) >= 30u;
            if (_317)
            {
                break;
            }
            int _319 = _307 << 4;
            uint _321 = uint(int(uint(_319 + 7360) >> uint(2)));
            int _323 = int(_321) + 1;
            uint _325 = uint(int(uint(_319 + 7368) >> uint(2)));
            float _327 = (-_205) + fp_c10_1._m0[int(uint(int(_321)) >> uint(2))][int(_321) & 3];
            float _329 = fp_c10_1._m0[int(uint(_323) >> uint(2))][_323 & 3] + (-_74.y);
            float _331 = (-_211) + fp_c10_1._m0[int(uint(int(_325)) >> uint(2))][int(_325) & 3];
            float _333 = fma(_331, _331, fma(_329, _329, _327 * _327));
            float _335 = _327 * inversesqrt(_333);
            float _337 = _329 * inversesqrt(_333);
            float _339 = _331 * inversesqrt(_333);
            float _341 = _150 + _335;
            float _343 = _152 + _337;
            float _345 = _154 + _339;
            uint _347 = uint(int(uint(_319 + 6880) >> uint(2)));
            int _349 = int(_347) + 1;
            float _351 = inversesqrt(fma(_345, _345, fma(_343, _343, _341 * _341)));
            float _353 = _341 * _351;
            float _355 = _343 * _351;
            float _357 = _345 * _351;
            uint _359 = uint(int(uint(_319 + 8320) >> uint(2)));
            float _361 = fma(_160, _339, fma(_158, _337, _156 * _335));
            float _363 = max(fma(_154, _357, fma(_152, _355, _150 * _353)), fp_c1_1._m0[0].z);
            float _365 = max(_361, fp_c1_1._m0[0].z);
            float _367 = max(fma(_160, _357, fma(_158, _355, _156 * _353)), fp_c1_1._m0[0].z) * max(fma(_160, _357, fma(_158, _355, _156 * _353)), fp_c1_1._m0[0].z);
            uint _369 = uint(int(uint(_319 + 6408) >> uint(2)));
            uint _371 = uint(int(uint(_319 + 6400) >> uint(2)));
            int _373 = int(_371) + 1;
            float _375 = exp2(_363 * fma(_363, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _377 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_359)) >> uint(2))][int(_359) & 3]) != 0;
            float _379 = (_239 * (1.0 / (_235 + fma(_235, -_365, _365)))) * ((_221 * (1.0 / max(fma(_227, _367, -_367) + 1.0, fp_c1_1._m0[0].z))) * (_221 * (1.0 / max(fma(_227, _367, -_367) + 1.0, fp_c1_1._m0[0].z))));
            float _381 = (_248 + fma(_248, -_375, _375)) * _379;
            float _383 = _381;
            if (!_377)
            {
                _383 = 1.0;
            }
            float _385 = _383;
            if (_377)
            {
                uint _387 = uint(int(uint(_319 + 7840) >> uint(2)));
                int _389 = int(_387) + 1;
                uint _391 = uint(int(uint(_319 + 6888) >> uint(2)));
                float _393 = fp_c10_1._m0[int(uint(int(_391)) >> uint(2))][int(_391) & 3];
                int _395 = int(_391) + 1;
                uint _397 = uint(int(uint(_319 + 7848) >> uint(2)));
                _385 = exp2(fp_c10_1._m0[int(uint(_395) >> uint(2))][_395 & 3] * log2(clamp(((-_393) + fma(_339, -fp_c10_1._m0[int(uint(int(_397)) >> uint(2))][int(_397) & 3], fma(_337, -fp_c10_1._m0[int(uint(_389) >> uint(2))][_389 & 3], _335 * (-fp_c10_1._m0[int(uint(int(_387)) >> uint(2))][int(_387) & 3])))) * (1.0 / ((-_393) + 1.0)), 0.0, 1.0)));
            }
            _399 = _305 + 1;
            float _401 = (exp2(fp_c10_1._m0[int(uint(_349) >> uint(2))][_349 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_347)) >> uint(2))][int(_347) & 3], -sqrt(_333), fp_c1_1._m0[1].y), 0.0, 1.0))) * _385) * clamp(_361 + (-0.0), 0.0, 1.0);
            float _403 = fma(fp_c10_1._m0[int(uint(_373) >> uint(2))][_373 & 3] * _401, fma(_252, fp_c1_1._m0[1].z, _381 * 0.079577468335628509521484375), _291);
            float _405 = fma(fp_c10_1._m0[int(uint(int(_371)) >> uint(2))][int(_371) & 3] * _401, fma(_256, fp_c1_1._m0[1].z, ((_246 + fma(_246, -_375, _375)) * _379) * 0.079577468335628509521484375), _293);
            float _407 = fma(fp_c10_1._m0[int(uint(int(_369)) >> uint(2))][int(_369) & 3] * _401, fma(_263, fp_c1_1._m0[1].z, ((_250 + fma(_250, -_375, _375)) * _379) * 0.079577468335628509521484375), _295);
            _303 = int(uint(_303) >> uint(8));
            _305 = _399;
            _291 = _403;
            _293 = _405;
            _295 = _407;
            _309 = _405;
            _311 = _403;
            _313 = _407;
        } while (!(_399 >= 4));
        _317 = false;
        _297 = _309;
        _299 = _311;
        _301 = _313;
        if ((_303 & 255) == 30)
        {
            float _409 = _74.y;
            float _411 = 1.0 / (fma(_211, fp_c10_1._m0[565].z, fma(_409, fp_c10_1._m0[565].y, _205 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _413 = 1.0 / fp_c10_1._m0[561].y;
            float _415 = (-_205) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_413, fp_c10_1._m0[557].x);
            float _417 = (-_211) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_413, fp_c10_1._m0[557].z);
            float _419 = _415 * _415;
            float _421 = sqrt(fma(_417, _417, _419)) * (-fp_c10_1._m0[558].y);
            float _423 = _205 + (-fp_c10_1._m0[557].x);
            float _425 = inversesqrt(fma(_417, _417, fma(_421, _421, _419)));
            float _427 = _423 * fp_c10_1._m0[558].z;
            float _429 = _415 * _425;
            float _431 = _421 * _425;
            float _433 = _417 * _425;
            float _435 = _211 + (-fp_c10_1._m0[557].z);
            float _437 = _150 + _429;
            float _439 = _152 + _431;
            float _441 = _154 + _433;
            float _443 = _435 * fp_c10_1._m0[558].x;
            float _445 = fma(_160, _433, fma(_158, _431, _156 * _429));
            float _447 = inversesqrt(fma(_441, _441, fma(_439, _439, _437 * _437)));
            float _449 = fma(_435, _435, _423 * _423);
            float _451 = _437 * _447;
            float _453 = _439 * _447;
            float _455 = _441 * _447;
            float _457 = inversesqrt(fma(_433, _433, _429 * _429));
            float _459 = ((-float(_443 < _427)) + float(_443 > _427)) * fp_c10_1._m0[561].y;
            float _461 = fma(_435 * inversesqrt(_449), fp_c10_1._m0[558].z, (_423 * inversesqrt(_449)) * fp_c10_1._m0[558].x);
            float _463 = max(fma(_154, _455, fma(_152, _453, _150 * _451)), fp_c1_1._m0[0].z);
            float _465 = fma(_435, fp_c10_1._m0[558].z, _423 * fp_c10_1._m0[558].x);
            float _467 = max(fma(_160, _455, fma(_158, _453, _156 * _451)), fp_c1_1._m0[0].z) * max(fma(_160, _455, fma(_158, _453, _156 * _451)), fp_c1_1._m0[0].z);
            bool _469 = _465 > 0.0;
            float _471 = _433;
            float _473 = _461;
            if (_469)
            {
                _471 = sqrt(_449);
            }
            float _475 = _471;
            if (!_469)
            {
                _475 = 1.0;
            }
            bool _477 = _461 < fp_c10_1._m0[560].z;
            float _479 = max(_445, fp_c1_1._m0[0].z);
            float _481 = clamp(fma(_465 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_465 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            if (!_477)
            {
                _473 = 1.0;
            }
            float _483 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_423, fma(_459, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_435 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_459 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_423, fma(_459, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_435 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_459 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _485 = _473;
            if (_477)
            {
                _485 = fma(_483, -_483, fp_c1_1._m0[1].y) * fma(_483, -_483, fp_c1_1._m0[1].y);
            }
            float _487 = exp2(_463 * fma(_463, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _489 = (_239 * (1.0 / (_235 + fma(_235, -_479, _479)))) * ((_221 * (1.0 / max(fma(_227, _467, -_467) + 1.0, fp_c1_1._m0[0].z))) * (_221 * (1.0 / max(fma(_227, _467, -_467) + 1.0, fp_c1_1._m0[0].z))));
            float _491 = (min(fma(_481, -_481, fp_c1_1._m0[1].y) * fma(_481, -_481, fp_c1_1._m0[1].y), _485) * (exp2(log2(clamp(fma(_475, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_433 * _457, -fp_c10_1._m0[558].z, (_429 * _457) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_445 + (-0.0), 0.0, 1.0);
            float _493 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_211, fp_c10_1._m0[562].z, fma(_409, fp_c10_1._m0[562].y, _205 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _411, 0.5, 0.5), (-fma((fma(_211, fp_c10_1._m0[563].z, fma(_409, fp_c10_1._m0[563].y, _205 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _411, 0.5, 0.5)) + 1.0)).z > fma((fma(_211, fp_c10_1._m0[564].z, fma(_409, fp_c10_1._m0[564].y, _205 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _411, 0.5, 0.5)) || (_465 <= 0.0));
            _297 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _491) * fma(_256, fp_c1_1._m0[1].z, ((_246 + fma(_246, -_487, _487)) * _489) * 0.079577468335628509521484375), _493, _309);
            _299 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _491) * fma(_252, fp_c1_1._m0[1].z, ((_248 + fma(_248, -_487, _487)) * _489) * 0.079577468335628509521484375), _493, _311);
            _301 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _491) * fma(_263, fp_c1_1._m0[1].z, ((_250 + fma(_250, -_487, _487)) * _489) * 0.079577468335628509521484375), _493, _313);
        }
    }
    float _495 = _205 + (-fp_c3_1._m0[11].w);
    float _497 = _74.y;
    float _499 = _211 + (-fp_c3_1._m0[13].w);
    float _501 = fma(_193.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_287, _297, _289 * (fma(_254 * (_246 + fma(_246, -_244, _244)), fp_c1_1._m0[1].x, _256 * 0.3183098733425140380859375) * fma(_231, fp_c5_1._m0[5].x, _275))));
    float _503 = fma(_193.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_287, _299, _289 * (fma(_254 * (_248 + fma(_248, -_244, _244)), fp_c1_1._m0[1].x, _252 * 0.3183098733425140380859375) * fma(_231, fp_c5_1._m0[5].y, _277))));
    float _505 = _497 + (-fp_c3_1._m0[12].w);
    float _507 = fma(_499, _499, fma(_505, _505, _495 * _495));
    float _509 = clamp(fma(fma(_211, fp_c5_1._m0[14].z, fma(_497, fp_c5_1._m0[14].y, _205 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _511 = fma(_193.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_287, _301, _289 * (fma(_254 * (_250 + fma(_250, -_244, _244)), fp_c1_1._m0[1].x, _263 * 0.3183098733425140380859375) * fma(_231, fp_c5_1._m0[5].z, _279))));
    float _513 = clamp(fma(_289 * _287, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _515 = exp2(log2(clamp(sqrt(_507) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_499 * inversesqrt(_507), fp_c5_1._m0[23].z, fma(_505 * inversesqrt(_507), fp_c5_1._m0[23].y, (_495 * inversesqrt(_507)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _517 = fma((-_501) + fp_c5_1._m0[13].x, _509, _501);
    float _519 = fma((-_503) + fp_c5_1._m0[13].y, _509, _503);
    float _521 = fma((-_511) + fp_c5_1._m0[13].z, _509, _511);
    float _523 = clamp((-exp2((clamp(fma(sqrt(_507), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_517) + fma(fma((_515 * fp_c7_1._m0[55].x) * _513, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _523, _517);
    _79.y = fma((-_519) + fma(fma((_515 * fp_c7_1._m0[55].y) * _513, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _523, _519);
    _79.z = fma((-_521) + fma(fma((_515 * fp_c7_1._m0[55].z) * _513, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _523, _521);
    _79.w = 1.0;
}


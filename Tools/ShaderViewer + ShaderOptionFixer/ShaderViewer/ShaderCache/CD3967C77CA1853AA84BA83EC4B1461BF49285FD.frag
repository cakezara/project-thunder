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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 4) uniform sampler2D fp_tex_tcb_22;
layout(binding = 5) uniform sampler2D fp_tex_tcb_24;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 1) in vec4 _66;
layout(location = 0) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 3) in vec4 _72;
layout(location = 5) in vec4 _74;
layout(location = 7) in vec4 _76;
layout(location = 6) in vec4 _78;
layout(location = 8) in vec4 _80;
layout(location = 4) in vec4 _82;
layout(location = 0) out vec4 _85;
uint _6[12];

void main()
{
    bool _343 = false;
    float _92 = _68.x;
    float _94 = _68.y;
    vec2 _98 = texture(fp_tex_tcb_1C, vec2(_66.x, _66.y)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    vec2 _104 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _106 = _104.x;
    float _108 = _104.y;
    float _110 = _70.x;
    float _112 = _70.y;
    float _114 = _70.z;
    float _116 = _72.y;
    float _118 = _72.x;
    float _120 = _72.w;
    float _122 = _74.x;
    float _124 = _74.y;
    float _126 = _74.z;
    float _128 = _72.z;
    float _130 = inversesqrt(fma(_114, _114, fma(_112, _112, _110 * _110)));
    float _132 = _110 * _130;
    float _134 = _112 * _130;
    float _136 = _114 * _130;
    float _138 = fma(_102 + (-_108), fp_c6_1._m0[8].z, _108);
    float _140 = fma(_100 + (-_106), fp_c6_1._m0[8].z, _106);
    float _142 = sqrt(clamp((-fma(_106, _106, _108 * _108)) + 1.0, 0.0, 1.0));
    float _144 = fma((-_142) + sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0)), fp_c6_1._m0[8].z, _142);
    float _146 = inversesqrt(fma(_144, _144, fma(_138, _138, _140 * _140)));
    float _148 = _138 * _146;
    float _150 = _140 * _146;
    float _152 = _144 * _146;
    float _154 = fma(_132, _152, fma(_118, _150, _148 * (fma(_134, _128, -(_136 * _116)) * _120)));
    float _156 = fma(_134, _152, fma(_116, _150, _148 * (fma(_136, _118, -(_132 * _128)) * _120)));
    float _158 = fma(_136, _152, fma(_128, _150, _148 * (fma(_132, _116, -(_134 * _118)) * _120)));
    float _160 = inversesqrt(fma(_126, _126, fma(_124, _124, _122 * _122)));
    float _162 = 1.0 / (_76.z * gl_FragCoord.w);
    float _164 = _122 * (-_160);
    float _166 = inversesqrt(fma(_158, _158, fma(_156, _156, _154 * _154)));
    float _168 = _124 * (-_160);
    float _170 = 1.0 / _78.w;
    float _172 = _126 * (-_160);
    float _174 = _154 * _166;
    float _176 = _156 * _166;
    float _178 = _158 * _166;
    float _180 = fma(_178, _172, fma(_176, _168, _174 * _164));
    float _182 = max(texture(fp_tex_tcb_10, vec2(_92, _94)).x, fp_c1_1._m0[0].x);
    float _184 = max(_180, fp_c1_1._m0[0].y);
    float _186 = fma(_174 * (-_180), -2.0, -_164);
    float _188 = fma(_176 * (-_180), -2.0, -_168);
    float _190 = fma(_178 * (-_180), -2.0, -_172);
    float _192 = 1.0 / max(abs(_190), max(abs(_186), abs(_188)));
    vec2 _194 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _170, 0.5, 0.5), fma(_78.y * _170, -0.5, 0.5))).xy;
    vec3 _198 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _200 = _198.x;
    float _202 = _198.y;
    float _204 = _198.z;
    vec2 _206 = texture(fp_tex_tcb_38, vec2(_184, (-_182) + (-0.0))).xy;
    float _208 = _206.x;
    float _210 = _206.y;
    vec3 _212 = texture(fp_tex_tcb_36, vec4(_186 * _192, _188 * _192, _190 * _192, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_182 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _214 = texture(fp_tex_tcb_22, vec2(_80.x, _80.y)).xy;
    vec4 _217 = texture(fp_tex_tcb_24, vec2(_80.z, _80.w)).xyzw;
    float _219 = _217.w;
    float _221 = _164 + (-fp_c5_1._m0[23].x);
    float _223 = _168 + (-fp_c5_1._m0[23].y);
    float _225 = _172 + (-fp_c5_1._m0[23].z);
    float _227 = fma(_182, 0.5, 0.5);
    float _229 = _174 * _176;
    float _231 = (_227 * 0.5) * _227;
    float _233 = _82.x;
    float _235 = inversesqrt(fma(_225, _225, fma(_223, _223, _221 * _221)));
    float _237 = _221 * _235;
    float _239 = _223 * _235;
    float _241 = _82.z;
    float _243 = _225 * _235;
    float _245 = _176 * _178;
    float _247 = _174 * _178;
    float _249 = _178 * _178;
    float _251 = fma(_174, _174, -(_176 * _176));
    float _253 = _182 * _182;
    float _255 = fma(_176, -fp_c5_1._m0[23].y, _174 * (-fp_c5_1._m0[23].x));
    float _257 = max(fma(_178, _243, fma(_176, _239, _174 * _237)), fp_c1_1._m0[0].y) * max(fma(_178, _243, fma(_176, _239, _174 * _237)), fp_c1_1._m0[0].y);
    float _259 = max(fma(_172, _243, fma(_168, _239, _164 * _237)), fp_c1_1._m0[0].y);
    float _261 = clamp(fma(_178, -fp_c5_1._m0[23].z, _255), 0.0, 1.0);
    int _264 = max(0, min(int(trunc((_241 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _266 = max(fma(_178, -fp_c5_1._m0[23].z, _255), fp_c1_1._m0[0].y);
    float _268 = fma(_204, -fp_c6_1._m0[9].x, _204);
    float _270 = 1.0 / (_231 + fma(_184, -_231, _184));
    float _272 = exp2(_259 * fma(_259, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _274 = fma(_202, -fp_c6_1._m0[9].x, _202);
    float _276 = fma(_200 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _278 = fma(_204 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _280 = fma(_202 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _282 = fma(_200, -fp_c6_1._m0[9].x, _200);
    uint _285 = uint(int(uint((((int(uint(_264) >> uint(16)) * 20) << 16) + (((_264 & 65535) * 20) + max(0, min(int(trunc((_233 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _287 = fp_c10_1._m0[int(uint(int(_285)) >> uint(2))][int(_285) & 3];
    float _289 = (_270 * (1.0 / (_231 + fma(_231, -_266, _266)))) * ((_253 * (1.0 / max(fma(_257, _253 * _253, -_257) + 1.0, fp_c1_1._m0[0].y))) * (_253 * (1.0 / max(fma(_257, _253 * _253, -_257) + 1.0, fp_c1_1._m0[0].y))));
    float _291 = fma(_276, -_282, _282);
    float _293 = _76.w;
    float _295 = fma(_280, -_274, _274);
    float _297 = fma(_278, -_268, _268);
    float _299 = clamp(_293 * clamp(fma(_214.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _301 = ((_217.x * _219) * _293) * 32.0;
    float _303 = ((_217.y * _219) * _293) * 32.0;
    float _305 = ((_217.z * _219) * _293) * 32.0;
    float _307 = clamp((-_299) + 1.0, 0.0, 1.0);
    float _309 = fma(_291, _301, fma(_212.x, fma(_276, _208, _210), max(0.0, fma(_251, fp_c5_1._m0[31].x, (fma(_178, fp_c5_1._m0[25].z, fma(_176, fp_c5_1._m0[25].y, _174 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_247, fp_c5_1._m0[28].w, fma(_249, fp_c5_1._m0[28].z, fma(_245, fp_c5_1._m0[28].y, _229 * fp_c5_1._m0[28].x))))) * _291));
    float _311 = fma(_295, _303, fma(_212.y, fma(_280, _208, _210), max(0.0, fma(_251, fp_c5_1._m0[31].y, (fma(_178, fp_c5_1._m0[26].z, fma(_176, fp_c5_1._m0[26].y, _174 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_247, fp_c5_1._m0[29].w, fma(_249, fp_c5_1._m0[29].z, fma(_245, fp_c5_1._m0[29].y, _229 * fp_c5_1._m0[29].x))))) * _295));
    float _313 = fma(_297, _305, fma(_212.z, fma(_278, _208, _210), max(0.0, fma(_251, fp_c5_1._m0[31].z, (fma(_178, fp_c5_1._m0[27].z, fma(_176, fp_c5_1._m0[27].y, _174 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_247, fp_c5_1._m0[30].w, fma(_249, fp_c5_1._m0[30].z, fma(_245, fp_c5_1._m0[30].y, _229 * fp_c5_1._m0[30].x))))) * _297));
    float _315 = clamp((-fma(_299, fp_c7_1._m0[37].w, clamp(_293 * clamp(fma(_214.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_194.x) + 1.0, (-_194.y) + 1.0), clamp(_82.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _162, (_76.y * gl_FragCoord.w) * _162)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    int _317 = floatBitsToInt(_287);
    float _319 = _313;
    float _321 = _309;
    float _323 = _311;
    float _325 = _313;
    float _327 = _311;
    float _329 = _309;
    if (floatBitsToInt(_287) != (-1))
    {
        int _331 = 0;
        float _335;
        float _337;
        float _339;
        int _425;
        do
        {
            int _333 = _317 & 255;
            _335 = _321;
            _337 = _323;
            _339 = _319;
            _343 = uint(_333) >= 30u;
            if (_343)
            {
                break;
            }
            int _345 = _333 << 4;
            uint _347 = uint(int(uint(_345 + 7360) >> uint(2)));
            int _349 = int(_347) + 1;
            uint _351 = uint(int(uint(_345 + 7368) >> uint(2)));
            float _353 = (-_233) + fp_c10_1._m0[int(uint(int(_347)) >> uint(2))][int(_347) & 3];
            float _355 = fp_c10_1._m0[int(uint(_349) >> uint(2))][_349 & 3] + (-_82.y);
            float _357 = (-_241) + fp_c10_1._m0[int(uint(int(_351)) >> uint(2))][int(_351) & 3];
            float _359 = fma(_357, _357, fma(_355, _355, _353 * _353));
            float _361 = _353 * inversesqrt(_359);
            float _363 = _355 * inversesqrt(_359);
            float _365 = _357 * inversesqrt(_359);
            float _367 = _164 + _361;
            float _369 = _168 + _363;
            float _371 = _172 + _365;
            float _373 = inversesqrt(fma(_371, _371, fma(_369, _369, _367 * _367)));
            float _375 = _367 * _373;
            float _377 = _369 * _373;
            float _379 = _371 * _373;
            float _381 = fma(_178, _365, fma(_176, _363, _174 * _361));
            float _383 = max(fma(_172, _379, fma(_168, _377, _164 * _375)), fp_c1_1._m0[0].y);
            float _385 = max(_381, fp_c1_1._m0[0].y);
            float _387 = max(fma(_178, _379, fma(_176, _377, _174 * _375)), fp_c1_1._m0[0].y) * max(fma(_178, _379, fma(_176, _377, _174 * _375)), fp_c1_1._m0[0].y);
            uint _389 = uint(int(uint(_345 + 6880) >> uint(2)));
            int _391 = int(_389) + 1;
            uint _393 = uint(int(uint(_345 + 8320) >> uint(2)));
            float _395 = exp2(_383 * fma(_383, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _397 = (_270 * (1.0 / (_231 + fma(_231, -_385, _385)))) * ((_253 * (1.0 / max(fma(_253 * _253, _387, -_387) + 1.0, fp_c1_1._m0[0].y))) * (_253 * (1.0 / max(fma(_253 * _253, _387, -_387) + 1.0, fp_c1_1._m0[0].y))));
            float _399 = (_280 + fma(_280, -_395, _395)) * _397;
            bool _401 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_393)) >> uint(2))][int(_393) & 3]) != 0;
            uint _403 = uint(int(uint(_345 + 6408) >> uint(2)));
            uint _405 = uint(int(uint(_345 + 6400) >> uint(2)));
            int _407 = int(_405) + 1;
            float _409 = _399;
            if (!_401)
            {
                _409 = 1.0;
            }
            float _411 = _409;
            if (_401)
            {
                uint _413 = uint(int(uint(_345 + 7840) >> uint(2)));
                int _415 = int(_413) + 1;
                uint _417 = uint(int(uint(_345 + 7848) >> uint(2)));
                uint _419 = uint(int(uint(_345 + 6888) >> uint(2)));
                float _421 = fp_c10_1._m0[int(uint(int(_419)) >> uint(2))][int(_419) & 3];
                int _423 = int(_419) + 1;
                _411 = exp2(fp_c10_1._m0[int(uint(_423) >> uint(2))][_423 & 3] * log2(clamp(((-_421) + fma(_365, -fp_c10_1._m0[int(uint(int(_417)) >> uint(2))][int(_417) & 3], fma(_363, -fp_c10_1._m0[int(uint(_415) >> uint(2))][_415 & 3], _361 * (-fp_c10_1._m0[int(uint(int(_413)) >> uint(2))][int(_413) & 3])))) * (1.0 / ((-_421) + 1.0)), 0.0, 1.0)));
            }
            _425 = _331 + 1;
            float _427 = (exp2(fp_c10_1._m0[int(uint(_391) >> uint(2))][_391 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_389)) >> uint(2))][int(_389) & 3], -sqrt(_359), fp_c1_1._m0[1].x), 0.0, 1.0))) * _411) * clamp(_381 + (-0.0), 0.0, 1.0);
            float _429 = fma(fp_c10_1._m0[int(uint(int(_403)) >> uint(2))][int(_403) & 3] * _427, fma(_268, fp_c1_1._m0[1].y, ((_278 + fma(_278, -_395, _395)) * _397) * 0.079577468335628509521484375), _319);
            float _431 = fma(fp_c10_1._m0[int(uint(int(_405)) >> uint(2))][int(_405) & 3] * _427, fma(_282, fp_c1_1._m0[1].y, ((_276 + fma(_276, -_395, _395)) * _397) * 0.079577468335628509521484375), _321);
            float _433 = fma(fp_c10_1._m0[int(uint(_407) >> uint(2))][_407 & 3] * _427, fma(_274, fp_c1_1._m0[1].y, _399 * 0.079577468335628509521484375), _323);
            _317 = int(uint(_317) >> uint(8));
            _331 = _425;
            _319 = _429;
            _321 = _431;
            _323 = _433;
            _335 = _431;
            _337 = _433;
            _339 = _429;
        } while (!(_425 >= 4));
        _343 = false;
        _325 = _339;
        _327 = _337;
        _329 = _335;
        if ((_317 & 255) == 30)
        {
            float _435 = 1.0 / fp_c10_1._m0[561].y;
            float _437 = _241 + (-fp_c10_1._m0[557].z);
            float _439 = (-_233) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_435, fp_c10_1._m0[557].x);
            float _441 = (-_241) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_435, fp_c10_1._m0[557].z);
            float _443 = _439 * _439;
            float _445 = _233 + (-fp_c10_1._m0[557].x);
            float _447 = sqrt(fma(_441, _441, _443)) * (-fp_c10_1._m0[558].y);
            float _449 = inversesqrt(fma(_441, _441, fma(_447, _447, _443)));
            float _451 = _445 * fp_c10_1._m0[558].z;
            float _453 = _439 * _449;
            float _455 = _447 * _449;
            float _457 = _441 * _449;
            float _459 = _164 + _453;
            float _461 = _168 + _455;
            float _463 = _172 + _457;
            float _465 = _437 * fp_c10_1._m0[558].x;
            float _467 = inversesqrt(fma(_463, _463, fma(_461, _461, _459 * _459)));
            float _469 = _82.y;
            float _471 = _459 * _467;
            float _473 = _461 * _467;
            float _475 = ((-float(_465 < _451)) + float(_465 > _451)) * fp_c10_1._m0[561].y;
            float _477 = fma(_437, _437, _445 * _445);
            float _479 = 1.0 / (fma(_241, fp_c10_1._m0[565].z, fma(_469, fp_c10_1._m0[565].y, _233 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _481 = fma(_437, fp_c10_1._m0[558].z, _445 * fp_c10_1._m0[558].x);
            bool _483 = _481 > 0.0;
            float _485 = fma(_178, _457, fma(_176, _455, _174 * _453));
            float _487 = _463 * _467;
            float _489 = inversesqrt(fma(_457, _457, _453 * _453));
            float _491 = max(fma(_172, _487, fma(_168, _473, _164 * _471)), fp_c1_1._m0[0].y);
            float _493 = max(fma(_178, _487, fma(_176, _473, _174 * _471)), fp_c1_1._m0[0].y) * max(fma(_178, _487, fma(_176, _473, _174 * _471)), fp_c1_1._m0[0].y);
            float _495 = _457;
            if (_483)
            {
                _495 = sqrt(_477);
            }
            float _497 = _495;
            if (!_483)
            {
                _497 = 1.0;
            }
            bool _499 = fma(_437 * inversesqrt(_477), fp_c10_1._m0[558].z, (_445 * inversesqrt(_477)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _501 = max(_485, fp_c1_1._m0[0].y);
            float _503 = clamp(fma(_481 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_481 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _505 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_445, fma(_475, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_437 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_475 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_445, fma(_475, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_437 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_475 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _507 = log2(clamp(fma(_497, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _509 = _507;
            if (!_499)
            {
                _509 = 1.0;
            }
            float _511 = _509;
            if (_499)
            {
                _511 = fma(_505, -_505, fp_c1_1._m0[1].x) * fma(_505, -_505, fp_c1_1._m0[1].x);
            }
            float _513 = exp2(_491 * fma(_491, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _515 = (min(fma(_503, -_503, fp_c1_1._m0[1].x) * fma(_503, -_503, fp_c1_1._m0[1].x), _511) * (exp2(_507) * exp2(log2(clamp((fma(_457 * _489, -fp_c10_1._m0[558].z, (_453 * _489) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_485 + (-0.0), 0.0, 1.0);
            float _517 = (_270 * (1.0 / (_231 + fma(_231, -_501, _501)))) * ((_253 * (1.0 / max(fma(_253 * _253, _493, -_493) + 1.0, fp_c1_1._m0[0].y))) * (_253 * (1.0 / max(fma(_253 * _253, _493, -_493) + 1.0, fp_c1_1._m0[0].y))));
            float _519 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_241, fp_c10_1._m0[562].z, fma(_469, fp_c10_1._m0[562].y, _233 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _479, 0.5, 0.5), (-fma((fma(_241, fp_c10_1._m0[563].z, fma(_469, fp_c10_1._m0[563].y, _233 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _479, 0.5, 0.5)) + 1.0)).z > fma((fma(_241, fp_c10_1._m0[564].z, fma(_469, fp_c10_1._m0[564].y, _233 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _479, 0.5, 0.5)) || (_481 <= 0.0));
            _325 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _515) * fma(_268, fp_c1_1._m0[1].y, ((_278 + fma(_278, -_513, _513)) * _517) * 0.079577468335628509521484375), _519, _339);
            _327 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _515) * fma(_274, fp_c1_1._m0[1].y, ((_280 + fma(_280, -_513, _513)) * _517) * 0.079577468335628509521484375), _519, _337);
            _329 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _515) * fma(_282, fp_c1_1._m0[1].y, ((_276 + fma(_276, -_513, _513)) * _517) * 0.079577468335628509521484375), _519, _335);
        }
    }
    float _521 = _233 + (-fp_c3_1._m0[11].w);
    float _523 = _82.y;
    float _525 = _241 + (-fp_c3_1._m0[13].w);
    float _527 = fma(_307, _325, _315 * (fma(_289 * (_278 + fma(_278, -_272, _272)), fp_c1_1._m0[0].w, _268 * 0.3183098733425140380859375) * fma(_261, fp_c5_1._m0[5].z, _305)));
    float _529 = _523 + (-fp_c3_1._m0[12].w);
    float _531 = fma(_525, _525, fma(_529, _529, _521 * _521));
    float _533 = clamp(fma(_315 * _307, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _535 = fma(_307, _327, _315 * (fma(_289 * (_280 + fma(_280, -_272, _272)), fp_c1_1._m0[0].w, _274 * 0.3183098733425140380859375) * fma(_261, fp_c5_1._m0[5].y, _303)));
    float _537 = fma(_307, _329, _315 * (fma(_289 * (_276 + fma(_276, -_272, _272)), fp_c1_1._m0[0].w, _282 * 0.3183098733425140380859375) * fma(_261, fp_c5_1._m0[5].x, _301)));
    float _539 = exp2(log2(clamp(sqrt(_531) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_525 * inversesqrt(_531), fp_c5_1._m0[23].z, fma(_529 * inversesqrt(_531), fp_c5_1._m0[23].y, (_521 * inversesqrt(_531)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _541 = clamp(fma(fma(_241, fp_c5_1._m0[14].z, fma(_523, fp_c5_1._m0[14].y, _233 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _543 = fma((-_537) + fp_c5_1._m0[13].x, _541, _537);
    float _545 = fma((-_535) + fp_c5_1._m0[13].y, _541, _535);
    float _547 = fma((-_527) + fp_c5_1._m0[13].z, _541, _527);
    float _549 = clamp((-exp2((clamp(fma(sqrt(_531), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _85.x = fma((-_543) + fma(fma((_539 * fp_c7_1._m0[55].x) * _533, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _549, _543);
    _85.y = fma((-_545) + fma(fma((_539 * fp_c7_1._m0[55].y) * _533, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _549, _545);
    _85.z = fma((-_547) + fma(fma((_539 * fp_c7_1._m0[55].z) * _533, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _549, _547);
    _85.w = 1.0;
}


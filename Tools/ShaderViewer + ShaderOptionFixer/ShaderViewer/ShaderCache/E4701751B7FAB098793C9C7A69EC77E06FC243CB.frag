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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_18;
layout(binding = 5) uniform sampler2D fp_tex_tcb_22;
layout(binding = 6) uniform sampler2D fp_tex_tcb_24;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 4) in vec4 _72;
layout(location = 7) in vec4 _74;
layout(location = 6) in vec4 _76;
layout(location = 5) in vec4 _78;
layout(location = 3) in vec4 _80;
layout(location = 0) out vec4 _83;
uint _6[12];

void main()
{
    bool _323 = false;
    float _90 = _66.x;
    float _92 = _66.y;
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _98 = _96.x;
    float _100 = _96.y;
    float _102 = _68.x;
    float _104 = _68.y;
    float _106 = _68.z;
    float _108 = _70.y;
    float _110 = _70.z;
    float _112 = _70.x;
    float _114 = _70.w;
    float _116 = _72.x;
    float _118 = _72.y;
    float _120 = _72.z;
    float _122 = inversesqrt(fma(_106, _106, fma(_104, _104, _102 * _102)));
    float _124 = _106 * _122;
    float _126 = _102 * _122;
    float _128 = _104 * _122;
    float _130 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _132 = fma(_126, _130, fma(_98, _112, _100 * (fma(_128, _110, -(_124 * _108)) * _114)));
    float _134 = fma(_128, _130, fma(_98, _108, _100 * (fma(_124, _112, -(_126 * _110)) * _114)));
    float _136 = fma(_124, _130, fma(_98, _110, _100 * (fma(_126, _108, -(_128 * _112)) * _114)));
    float _138 = 1.0 / (_76.z * gl_FragCoord.w);
    float _140 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _142 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _144 = inversesqrt(fma(_136, _136, fma(_134, _134, _132 * _132)));
    float _146 = _116 * (-_140);
    float _148 = _118 * (-_140);
    float _150 = _120 * (-_140);
    float _152 = _132 * _144;
    float _154 = _134 * _144;
    float _156 = _136 * _144;
    float _158 = fma(_156, _150, fma(_154, _148, _152 * _146));
    float _160 = 1.0 / _78.w;
    float _162 = max(_158, fp_c1_1._m0[0].z);
    float _164 = fma(_152 * (-_158), -2.0, -_146);
    float _166 = fma(_154 * (-_158), -2.0, -_148);
    float _168 = fma(_156 * (-_158), -2.0, -_150);
    float _170 = 1.0 / max(abs(_168), max(abs(_164), abs(_166)));
    vec2 _172 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _160, 0.5, 0.5), fma(_78.y * _160, -0.5, 0.5))).xy;
    vec3 _176 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _178 = _176.x;
    float _180 = _176.y;
    float _182 = _176.z;
    float _184 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    vec2 _186 = texture(fp_tex_tcb_38, vec2(_162, (-_142) + (-0.0))).xy;
    float _188 = _186.x;
    float _190 = _186.y;
    float _192 = _146 + (-fp_c5_1._m0[23].x);
    vec3 _194 = texture(fp_tex_tcb_36, vec4(_164 * _170, _166 * _170, _168 * _170, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_142 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _196 = texture(fp_tex_tcb_22, vec2(_74.x, _74.y)).xy;
    vec4 _199 = texture(fp_tex_tcb_24, vec2(_74.z, _74.w)).xyzw;
    float _201 = _199.w;
    float _203 = _148 + (-fp_c5_1._m0[23].y);
    float _205 = _80.z;
    float _207 = _150 + (-fp_c5_1._m0[23].z);
    float _209 = _152 * _154;
    float _211 = _154 * _156;
    float _213 = _156 * _156;
    float _215 = inversesqrt(fma(_207, _207, fma(_203, _203, _192 * _192)));
    float _217 = _80.x;
    float _219 = _192 * _215;
    float _221 = _152 * _156;
    float _223 = _203 * _215;
    float _225 = _207 * _215;
    float _227 = fma(_152, _152, -(_154 * _154));
    float _229 = _142 * _142;
    float _231 = fma(_154, -fp_c5_1._m0[23].y, _152 * (-fp_c5_1._m0[23].x));
    float _233 = max(fma(_156, _225, fma(_154, _223, _152 * _219)), fp_c1_1._m0[0].z) * max(fma(_156, _225, fma(_154, _223, _152 * _219)), fp_c1_1._m0[0].z);
    float _235 = fma(_142, 0.5, 0.5);
    float _237 = (_235 * 0.5) * _235;
    float _239 = clamp(fma(_156, -fp_c5_1._m0[23].z, _231), 0.0, 1.0);
    float _241 = max(fma(_150, _225, fma(_148, _223, _146 * _219)), fp_c1_1._m0[0].z);
    float _243 = max(fma(_156, -fp_c5_1._m0[23].z, _231), fp_c1_1._m0[0].z);
    int _246 = max(0, min(int(trunc((_205 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _248 = 1.0 / (_237 + fma(_162, -_237, _162));
    float _250 = exp2(_241 * fma(_241, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _252 = fma(_184, _178 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _254 = fma(_180, -_184, _180);
    float _256 = fma(_184, _180 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _258 = fma(_184, _182 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _260 = fma(_178, -_184, _178);
    float _262 = (_248 * (1.0 / (_237 + fma(_237, -_243, _243)))) * ((_229 * (1.0 / max(fma(_233, _229 * _229, -_233) + 1.0, fp_c1_1._m0[0].z))) * (_229 * (1.0 / max(fma(_233, _229 * _229, -_233) + 1.0, fp_c1_1._m0[0].z))));
    uint _265 = uint(int(uint((((int(uint(_246) >> uint(16)) * 20) << 16) + (((_246 & 65535) * 20) + max(0, min(int(trunc((_217 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _267 = fp_c10_1._m0[int(uint(int(_265)) >> uint(2))][int(_265) & 3];
    float _269 = fma(_252, -_260, _260);
    float _271 = fma(_182, -_184, _182);
    float _273 = _76.w;
    float _275 = fma(_256, -_254, _254);
    float _277 = fma(_258, -_271, _271);
    float _279 = ((_199.y * _201) * _273) * 32.0;
    float _281 = ((_199.x * _201) * _273) * 32.0;
    float _283 = clamp(_273 * clamp(fma(_196.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _285 = ((_199.z * _201) * _273) * 32.0;
    float _287 = fma(_275, _279, fma(_194.y, fma(_256, _188, _190), max(0.0, fma(_227, fp_c5_1._m0[31].y, (fma(_156, fp_c5_1._m0[26].z, fma(_154, fp_c5_1._m0[26].y, _152 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_221, fp_c5_1._m0[29].w, fma(_213, fp_c5_1._m0[29].z, fma(_211, fp_c5_1._m0[29].y, _209 * fp_c5_1._m0[29].x))))) * _275));
    float _289 = fma(_277, _285, fma(_194.z, fma(_258, _188, _190), max(0.0, fma(_227, fp_c5_1._m0[31].z, (fma(_156, fp_c5_1._m0[27].z, fma(_154, fp_c5_1._m0[27].y, _152 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_221, fp_c5_1._m0[30].w, fma(_213, fp_c5_1._m0[30].z, fma(_211, fp_c5_1._m0[30].y, _209 * fp_c5_1._m0[30].x))))) * _277));
    float _291 = fma(_269, _281, fma(_194.x, fma(_252, _188, _190), max(0.0, fma(_227, fp_c5_1._m0[31].x, (fma(_156, fp_c5_1._m0[25].z, fma(_154, fp_c5_1._m0[25].y, _152 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_221, fp_c5_1._m0[28].w, fma(_213, fp_c5_1._m0[28].z, fma(_211, fp_c5_1._m0[28].y, _209 * fp_c5_1._m0[28].x))))) * _269));
    float _293 = clamp((-((-texture(fp_tex_tcb_18, vec2(_66.z, _66.w)).x) + _283)) + (-0.0), 0.0, 1.0);
    float _295 = clamp((-fma(_283, fp_c7_1._m0[37].w, fma(max((-_172.x) + 1.0, (-_172.y) + 1.0), clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _138, (_76.y * gl_FragCoord.w) * _138)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)) + clamp(_273 * clamp(fma(_196.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    int _297 = floatBitsToInt(_267);
    float _299 = _289;
    float _301 = _291;
    float _303 = _287;
    float _305 = _289;
    float _307 = _287;
    float _309 = _291;
    if (floatBitsToInt(_267) != (-1))
    {
        int _311 = 0;
        float _315;
        float _317;
        float _319;
        int _405;
        do
        {
            int _313 = _297 & 255;
            _315 = _301;
            _317 = _303;
            _319 = _299;
            _323 = uint(_313) >= 30u;
            if (_323)
            {
                break;
            }
            int _325 = _313 << 4;
            uint _327 = uint(int(uint(_325 + 7360) >> uint(2)));
            int _329 = int(_327) + 1;
            uint _331 = uint(int(uint(_325 + 7368) >> uint(2)));
            float _333 = (-_217) + fp_c10_1._m0[int(uint(int(_327)) >> uint(2))][int(_327) & 3];
            float _335 = fp_c10_1._m0[int(uint(_329) >> uint(2))][_329 & 3] + (-_80.y);
            float _337 = (-_205) + fp_c10_1._m0[int(uint(int(_331)) >> uint(2))][int(_331) & 3];
            float _339 = fma(_337, _337, fma(_335, _335, _333 * _333));
            float _341 = _333 * inversesqrt(_339);
            float _343 = _335 * inversesqrt(_339);
            float _345 = _337 * inversesqrt(_339);
            float _347 = _146 + _341;
            float _349 = _148 + _343;
            float _351 = _150 + _345;
            float _353 = inversesqrt(fma(_351, _351, fma(_349, _349, _347 * _347)));
            float _355 = _347 * _353;
            float _357 = _349 * _353;
            float _359 = _351 * _353;
            float _361 = fma(_156, _345, fma(_154, _343, _152 * _341));
            float _363 = max(fma(_150, _359, fma(_148, _357, _146 * _355)), fp_c1_1._m0[0].z);
            float _365 = max(fma(_156, _359, fma(_154, _357, _152 * _355)), fp_c1_1._m0[0].z) * max(fma(_156, _359, fma(_154, _357, _152 * _355)), fp_c1_1._m0[0].z);
            uint _367 = uint(int(uint(_325 + 6880) >> uint(2)));
            int _369 = int(_367) + 1;
            float _371 = max(_361, fp_c1_1._m0[0].z);
            uint _373 = uint(int(uint(_325 + 8320) >> uint(2)));
            float _375 = exp2(_363 * fma(_363, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _377 = (_248 * (1.0 / (_237 + fma(_237, -_371, _371)))) * ((_229 * (1.0 / max(fma(_229 * _229, _365, -_365) + 1.0, fp_c1_1._m0[0].z))) * (_229 * (1.0 / max(fma(_229 * _229, _365, -_365) + 1.0, fp_c1_1._m0[0].z))));
            bool _379 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_373)) >> uint(2))][int(_373) & 3]) != 0;
            uint _381 = uint(int(uint(_325 + 6408) >> uint(2)));
            float _383 = (_252 + fma(_252, -_375, _375)) * _377;
            uint _385 = uint(int(uint(_325 + 6400) >> uint(2)));
            int _387 = int(_385) + 1;
            float _389 = _383;
            if (!_379)
            {
                _389 = 1.0;
            }
            float _391 = _389;
            if (_379)
            {
                uint _393 = uint(int(uint(_325 + 7840) >> uint(2)));
                int _395 = int(_393) + 1;
                uint _397 = uint(int(uint(_325 + 7848) >> uint(2)));
                uint _399 = uint(int(uint(_325 + 6888) >> uint(2)));
                float _401 = fp_c10_1._m0[int(uint(int(_399)) >> uint(2))][int(_399) & 3];
                int _403 = int(_399) + 1;
                _391 = exp2(fp_c10_1._m0[int(uint(_403) >> uint(2))][_403 & 3] * log2(clamp(((-_401) + fma(_345, -fp_c10_1._m0[int(uint(int(_397)) >> uint(2))][int(_397) & 3], fma(_343, -fp_c10_1._m0[int(uint(_395) >> uint(2))][_395 & 3], _341 * (-fp_c10_1._m0[int(uint(int(_393)) >> uint(2))][int(_393) & 3])))) * (1.0 / ((-_401) + 1.0)), 0.0, 1.0)));
            }
            _405 = _311 + 1;
            float _407 = (exp2(fp_c10_1._m0[int(uint(_369) >> uint(2))][_369 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3], -sqrt(_339), fp_c1_1._m0[1].y), 0.0, 1.0))) * _391) * clamp(_361 + (-0.0), 0.0, 1.0);
            float _409 = fma(fp_c10_1._m0[int(uint(int(_381)) >> uint(2))][int(_381) & 3] * _407, fma(_271, fp_c1_1._m0[1].z, ((_258 + fma(_258, -_375, _375)) * _377) * 0.079577468335628509521484375), _299);
            float _411 = fma(fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3] * _407, fma(_260, fp_c1_1._m0[1].z, _383 * 0.079577468335628509521484375), _301);
            float _413 = fma(fp_c10_1._m0[int(uint(_387) >> uint(2))][_387 & 3] * _407, fma(_254, fp_c1_1._m0[1].z, ((_256 + fma(_256, -_375, _375)) * _377) * 0.079577468335628509521484375), _303);
            _297 = int(uint(_297) >> uint(8));
            _311 = _405;
            _299 = _409;
            _301 = _411;
            _303 = _413;
            _315 = _411;
            _317 = _413;
            _319 = _409;
        } while (!(_405 >= 4));
        _323 = false;
        _305 = _319;
        _307 = _317;
        _309 = _315;
        if ((_297 & 255) == 30)
        {
            float _415 = 1.0 / fp_c10_1._m0[561].y;
            float _417 = _217 + (-fp_c10_1._m0[557].x);
            float _419 = _205 + (-fp_c10_1._m0[557].z);
            float _421 = _419 * fp_c10_1._m0[558].x;
            float _423 = (-_217) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_415, fp_c10_1._m0[557].x);
            float _425 = (-_205) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_415, fp_c10_1._m0[557].z);
            float _427 = _423 * _423;
            float _429 = sqrt(fma(_425, _425, _427)) * (-fp_c10_1._m0[558].y);
            float _431 = inversesqrt(fma(_425, _425, fma(_429, _429, _427)));
            float _433 = _423 * _431;
            float _435 = _429 * _431;
            float _437 = _425 * _431;
            float _439 = _417 * fp_c10_1._m0[558].z;
            float _441 = _146 + _433;
            float _443 = _148 + _435;
            float _445 = _150 + _437;
            float _447 = _80.y;
            float _449 = inversesqrt(fma(_445, _445, fma(_443, _443, _441 * _441)));
            float _451 = _441 * _449;
            float _453 = _443 * _449;
            float _455 = ((-float(_421 < _439)) + float(_421 > _439)) * fp_c10_1._m0[561].y;
            float _457 = fma(_419, _419, _417 * _417);
            float _459 = 1.0 / (fma(_205, fp_c10_1._m0[565].z, fma(_447, fp_c10_1._m0[565].y, _217 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _461 = fma(_419, fp_c10_1._m0[558].z, _417 * fp_c10_1._m0[558].x);
            bool _463 = _461 > 0.0;
            float _465 = _445 * _449;
            float _467 = fma(_156, _437, fma(_154, _435, _152 * _433));
            float _469 = inversesqrt(fma(_437, _437, _433 * _433));
            float _471 = max(fma(_150, _465, fma(_148, _453, _146 * _451)), fp_c1_1._m0[0].z);
            float _473 = max(fma(_156, _465, fma(_154, _453, _152 * _451)), fp_c1_1._m0[0].z) * max(fma(_156, _465, fma(_154, _453, _152 * _451)), fp_c1_1._m0[0].z);
            float _475 = max(_467, fp_c1_1._m0[0].z);
            float _477 = _437;
            if (_463)
            {
                _477 = sqrt(_457);
            }
            float _479 = _477;
            if (!_463)
            {
                _479 = 1.0;
            }
            bool _481 = fma(_419 * inversesqrt(_457), fp_c10_1._m0[558].z, (_417 * inversesqrt(_457)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _483 = clamp(fma(_461 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_461 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _485 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_417, fma(_455, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_419 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_455 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_417, fma(_455, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_419 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_455 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _487 = fma(_471, fp_c1_1._m0[0].w, -6.9831600189208984375);
            float _489 = _487;
            if (_481)
            {
                _489 = fma(_485, -_485, fp_c1_1._m0[1].y) * fma(_485, -_485, fp_c1_1._m0[1].y);
            }
            float _491 = _489;
            if (!_481)
            {
                _491 = 1.0;
            }
            float _493 = (_248 * (1.0 / (_237 + fma(_237, -_475, _475)))) * ((_229 * (1.0 / max(fma(_229 * _229, _473, -_473) + 1.0, fp_c1_1._m0[0].z))) * (_229 * (1.0 / max(fma(_229 * _229, _473, -_473) + 1.0, fp_c1_1._m0[0].z))));
            float _495 = exp2(_471 * _487);
            float _497 = (min(fma(_483, -_483, fp_c1_1._m0[1].y) * fma(_483, -_483, fp_c1_1._m0[1].y), _491) * (exp2(log2(clamp(fma(_479, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_437 * _469, -fp_c10_1._m0[558].z, (_433 * _469) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_467 + (-0.0), 0.0, 1.0);
            float _499 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_205, fp_c10_1._m0[562].z, fma(_447, fp_c10_1._m0[562].y, _217 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _459, 0.5, 0.5), (-fma((fma(_205, fp_c10_1._m0[563].z, fma(_447, fp_c10_1._m0[563].y, _217 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _459, 0.5, 0.5)) + 1.0)).z > fma((fma(_205, fp_c10_1._m0[564].z, fma(_447, fp_c10_1._m0[564].y, _217 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _459, 0.5, 0.5)) || (_461 <= 0.0));
            _305 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _497) * fma(_271, fp_c1_1._m0[1].z, (_493 * (_258 + fma(_258, -_495, _495))) * 0.079577468335628509521484375), _499, _319);
            _307 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _497) * fma(_254, fp_c1_1._m0[1].z, (_493 * (_256 + fma(_256, -_495, _495))) * 0.079577468335628509521484375), _499, _317);
            _309 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _497) * fma(_260, fp_c1_1._m0[1].z, (_493 * (_252 + fma(_252, -_495, _495))) * 0.079577468335628509521484375), _499, _315);
        }
    }
    float _501 = _217 + (-fp_c3_1._m0[11].w);
    float _503 = _80.y;
    float _505 = _205 + (-fp_c3_1._m0[13].w);
    float _507 = fma(_293, _305, _295 * (fma(_262 * (_258 + fma(_258, -_250, _250)), fp_c1_1._m0[1].x, _271 * 0.3183098733425140380859375) * fma(_239, fp_c5_1._m0[5].z, _285)));
    float _509 = _503 + (-fp_c3_1._m0[12].w);
    float _511 = fma(_505, _505, fma(_509, _509, _501 * _501));
    float _513 = clamp(fma(_295 * _293, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _515 = fma(_293, _307, _295 * (fma(_262 * (_256 + fma(_256, -_250, _250)), fp_c1_1._m0[1].x, _254 * 0.3183098733425140380859375) * fma(_239, fp_c5_1._m0[5].y, _279)));
    float _517 = fma(_293, _309, _295 * (fma(_262 * (_252 + fma(_252, -_250, _250)), fp_c1_1._m0[1].x, _260 * 0.3183098733425140380859375) * fma(_239, fp_c5_1._m0[5].x, _281)));
    float _519 = exp2(log2(clamp(sqrt(_511) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_505 * inversesqrt(_511), fp_c5_1._m0[23].z, fma(_509 * inversesqrt(_511), fp_c5_1._m0[23].y, (_501 * inversesqrt(_511)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _521 = clamp(fma(fma(_205, fp_c5_1._m0[14].z, fma(_503, fp_c5_1._m0[14].y, _217 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _523 = fma((-_517) + fp_c5_1._m0[13].x, _521, _517);
    float _525 = fma((-_515) + fp_c5_1._m0[13].y, _521, _515);
    float _527 = fma((-_507) + fp_c5_1._m0[13].z, _521, _507);
    float _529 = clamp((-exp2((clamp(fma(sqrt(_511), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_523) + fma(fma((_519 * fp_c7_1._m0[55].x) * _513, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _529, _523);
    _83.y = fma((-_525) + fma(fma((_519 * fp_c7_1._m0[55].y) * _513, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _529, _525);
    _83.z = fma((-_527) + fma(fma((_519 * fp_c7_1._m0[55].z) * _513, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _529, _527);
    _83.w = 1.0;
}


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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_18;
layout(binding = 4) uniform sampler2D fp_tex_tcb_22;
layout(binding = 5) uniform sampler2D fp_tex_tcb_24;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 7) in vec4 _66;
layout(location = 6) in vec4 _68;
layout(location = 0) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 3) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 8) in vec4 _78;
layout(location = 1) in vec4 _80;
layout(location = 4) in vec4 _82;
layout(location = 0) out vec4 _85;
uint _6[12];

void main()
{
    bool _323 = false;
    float _92 = 1.0 / (_66.z * gl_FragCoord.w);
    float _94 = _70.x;
    float _96 = _70.y;
    float _98 = 1.0 / _68.w;
    vec2 _102 = texture(fp_tex_tcb_E, vec2(_94, _96)).xy;
    float _104 = _102.x;
    float _106 = _102.y;
    vec2 _108 = texture(fp_tex_tcb_2A, vec2(fma(_68.x * _98, 0.5, 0.5), fma(_68.y * _98, -0.5, 0.5))).xy;
    vec3 _112 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _114 = _112.x;
    float _116 = _112.y;
    float _118 = _112.z;
    float _120 = _72.x;
    float _122 = _72.y;
    float _124 = _72.z;
    float _126 = _74.x;
    float _128 = _74.y;
    float _130 = _74.z;
    float _132 = _74.w;
    float _134 = _76.x;
    float _136 = _76.y;
    float _138 = _76.z;
    float _140 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _142 = _122 * _140;
    float _144 = _124 * _140;
    float _146 = _120 * _140;
    float _148 = max(texture(fp_tex_tcb_10, vec2(_94, _96)).x, fp_c1_1._m0[0].x);
    float _150 = sqrt(clamp((-fma(_104, _104, _106 * _106)) + 1.0, 0.0, 1.0));
    float _152 = inversesqrt(fma(_138, _138, fma(_136, _136, _134 * _134)));
    float _154 = fma(_146, _150, fma(_104, _126, _106 * (fma(_142, _130, -(_144 * _128)) * _132)));
    float _156 = fma(_142, _150, fma(_104, _128, _106 * (fma(_144, _126, -(_146 * _130)) * _132)));
    float _158 = fma(_144, _150, fma(_104, _130, _106 * (fma(_146, _128, -(_142 * _126)) * _132)));
    float _160 = _134 * (-_152);
    float _162 = _136 * (-_152);
    float _164 = _138 * (-_152);
    float _166 = inversesqrt(fma(_158, _158, fma(_156, _156, _154 * _154)));
    float _168 = _154 * _166;
    float _170 = _156 * _166;
    float _172 = _158 * _166;
    float _174 = fma(_172, _164, fma(_170, _162, _168 * _160));
    float _176 = max(_174, fp_c1_1._m0[0].y);
    float _178 = fma(_168 * (-_174), -2.0, -_160);
    vec2 _180 = texture(fp_tex_tcb_38, vec2(_176, (-_148) + (-0.0))).xy;
    float _182 = _180.x;
    float _184 = _180.y;
    float _186 = fma(_170 * (-_174), -2.0, -_162);
    float _188 = fma(_172 * (-_174), -2.0, -_164);
    float _190 = _160 + (-fp_c5_1._m0[23].x);
    float _192 = 1.0 / max(abs(_188), max(abs(_178), abs(_186)));
    vec3 _194 = texture(fp_tex_tcb_36, vec4(_178 * _192, _186 * _192, _188 * _192, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_148 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _196 = texture(fp_tex_tcb_22, vec2(_78.x, _78.y)).xy;
    vec4 _199 = texture(fp_tex_tcb_24, vec2(_78.z, _78.w)).xyzw;
    float _201 = _199.w;
    float _203 = _162 + (-fp_c5_1._m0[23].y);
    float _205 = _164 + (-fp_c5_1._m0[23].z);
    float _207 = _168 * _170;
    float _209 = _170 * _172;
    float _211 = fma(_148, 0.5, 0.5);
    float _213 = _172 * _172;
    float _215 = inversesqrt(fma(_205, _205, fma(_203, _203, _190 * _190)));
    float _217 = _168 * _172;
    float _219 = _190 * _215;
    float _221 = _82.x;
    float _223 = _203 * _215;
    float _225 = _205 * _215;
    float _227 = _82.z;
    float _229 = fma(_168, _168, -(_170 * _170));
    float _231 = _148 * _148;
    float _233 = fma(_170, -fp_c5_1._m0[23].y, _168 * (-fp_c5_1._m0[23].x));
    float _235 = max(fma(_172, _225, fma(_170, _223, _168 * _219)), fp_c1_1._m0[0].y) * max(fma(_172, _225, fma(_170, _223, _168 * _219)), fp_c1_1._m0[0].y);
    float _237 = (_211 * 0.5) * _211;
    float _239 = clamp(fma(_172, -fp_c5_1._m0[23].z, _233), 0.0, 1.0);
    float _241 = max(fma(_172, -fp_c5_1._m0[23].z, _233), fp_c1_1._m0[0].y);
    float _243 = max(fma(_164, _225, fma(_162, _223, _160 * _219)), fp_c1_1._m0[0].y);
    float _245 = 1.0 / (_237 + fma(_176, -_237, _176));
    int _248 = max(0, min(int(trunc((_227 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _250 = (_245 * (1.0 / (_237 + fma(_237, -_241, _241)))) * ((_231 * (1.0 / max(fma(_235, _231 * _231, -_235) + 1.0, fp_c1_1._m0[0].y))) * (_231 * (1.0 / max(fma(_235, _231 * _231, -_235) + 1.0, fp_c1_1._m0[0].y))));
    float _252 = fma(_114 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _254 = exp2(_243 * fma(_243, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _256 = fma(_118 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _258 = fma(_116 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    uint _261 = uint(int(uint((((int(uint(_248) >> uint(16)) * 20) << 16) + (((_248 & 65535) * 20) + max(0, min(int(trunc((_221 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _263 = fp_c10_1._m0[int(uint(int(_261)) >> uint(2))][int(_261) & 3];
    float _265 = fma(_114, -fp_c6_1._m0[9].x, _114);
    float _267 = fma(_252, -_265, _265);
    float _269 = _66.w;
    float _271 = fma(_116, -fp_c6_1._m0[9].x, _116);
    float _273 = fma(_118, -fp_c6_1._m0[9].x, _118);
    float _275 = fma(_258, -_271, _271);
    float _277 = fma(_256, -_273, _273);
    float _279 = clamp(_269 * clamp(fma(_196.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _281 = ((_199.x * _201) * _269) * 32.0;
    float _283 = ((_199.y * _201) * _269) * 32.0;
    float _285 = ((_199.z * _201) * _269) * 32.0;
    float _287 = fma(_267, _281, fma(_194.x, fma(_252, _182, _184), max(0.0, fma(_229, fp_c5_1._m0[31].x, (fma(_172, fp_c5_1._m0[25].z, fma(_170, fp_c5_1._m0[25].y, _168 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_217, fp_c5_1._m0[28].w, fma(_213, fp_c5_1._m0[28].z, fma(_209, fp_c5_1._m0[28].y, _207 * fp_c5_1._m0[28].x))))) * _267));
    float _289 = fma(_275, _283, fma(_194.y, fma(_258, _182, _184), max(0.0, fma(_229, fp_c5_1._m0[31].y, (fma(_172, fp_c5_1._m0[26].z, fma(_170, fp_c5_1._m0[26].y, _168 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_217, fp_c5_1._m0[29].w, fma(_213, fp_c5_1._m0[29].z, fma(_209, fp_c5_1._m0[29].y, _207 * fp_c5_1._m0[29].x))))) * _275));
    float _291 = fma(_277, _285, fma(_194.z, fma(_256, _182, _184), max(0.0, fma(_229, fp_c5_1._m0[31].z, (fma(_172, fp_c5_1._m0[27].z, fma(_170, fp_c5_1._m0[27].y, _168 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_217, fp_c5_1._m0[30].w, fma(_213, fp_c5_1._m0[30].z, fma(_209, fp_c5_1._m0[30].y, _207 * fp_c5_1._m0[30].x))))) * _277));
    float _293 = clamp((-((-texture(fp_tex_tcb_18, vec2(_80.x, _80.y)).x) + _279)) + (-0.0), 0.0, 1.0);
    float _295 = clamp((-fma(_279, fp_c7_1._m0[37].w, fma(max((-_108.x) + 1.0, (-_108.y) + 1.0), clamp(_82.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_66.x * gl_FragCoord.w) * _92, (_66.y * gl_FragCoord.w) * _92)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)) + clamp(_269 * clamp(fma(_196.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    float _297 = _291;
    float _299 = _287;
    float _301 = _289;
    float _303 = _287;
    float _305 = _291;
    float _307 = _289;
    if (floatBitsToInt(_263) != (-1))
    {
        int _309 = floatBitsToInt(_263);
        int _311 = 0;
        float _315;
        float _317;
        float _319;
        int _405;
        do
        {
            int _313 = _309 & 255;
            _315 = _299;
            _317 = _301;
            _319 = _297;
            _323 = uint(_313) >= 30u;
            if (_323)
            {
                break;
            }
            int _325 = _313 << 4;
            uint _327 = uint(int(uint(_325 + 7360) >> uint(2)));
            int _329 = int(_327) + 1;
            uint _331 = uint(int(uint(_325 + 7368) >> uint(2)));
            float _333 = (-_221) + fp_c10_1._m0[int(uint(int(_327)) >> uint(2))][int(_327) & 3];
            float _335 = fp_c10_1._m0[int(uint(_329) >> uint(2))][_329 & 3] + (-_82.y);
            float _337 = (-_227) + fp_c10_1._m0[int(uint(int(_331)) >> uint(2))][int(_331) & 3];
            float _339 = fma(_337, _337, fma(_335, _335, _333 * _333));
            float _341 = _333 * inversesqrt(_339);
            float _343 = _335 * inversesqrt(_339);
            float _345 = _337 * inversesqrt(_339);
            float _347 = _160 + _341;
            float _349 = _162 + _343;
            float _351 = _164 + _345;
            float _353 = inversesqrt(fma(_351, _351, fma(_349, _349, _347 * _347)));
            float _355 = _347 * _353;
            float _357 = _349 * _353;
            float _359 = _351 * _353;
            float _361 = fma(_172, _345, fma(_170, _343, _168 * _341));
            float _363 = max(fma(_164, _359, fma(_162, _357, _160 * _355)), fp_c1_1._m0[0].y);
            float _365 = max(fma(_172, _359, fma(_170, _357, _168 * _355)), fp_c1_1._m0[0].y) * max(fma(_172, _359, fma(_170, _357, _168 * _355)), fp_c1_1._m0[0].y);
            uint _367 = uint(int(uint(_325 + 6880) >> uint(2)));
            int _369 = int(_367) + 1;
            float _371 = max(_361, fp_c1_1._m0[0].y);
            uint _373 = uint(int(uint(_325 + 8320) >> uint(2)));
            float _375 = exp2(_363 * fma(_363, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _377 = (_245 * (1.0 / (_237 + fma(_237, -_371, _371)))) * ((_231 * (1.0 / max(fma(_231 * _231, _365, -_365) + 1.0, fp_c1_1._m0[0].y))) * (_231 * (1.0 / max(fma(_231 * _231, _365, -_365) + 1.0, fp_c1_1._m0[0].y))));
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
            float _407 = (exp2(fp_c10_1._m0[int(uint(_369) >> uint(2))][_369 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3], -sqrt(_339), fp_c1_1._m0[1].x), 0.0, 1.0))) * _391) * clamp(_361 + (-0.0), 0.0, 1.0);
            float _409 = fma(fp_c10_1._m0[int(uint(int(_381)) >> uint(2))][int(_381) & 3] * _407, fma(_273, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_375, _375)) * _377) * 0.079577468335628509521484375), _297);
            float _411 = fma(fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3] * _407, fma(_265, fp_c1_1._m0[1].y, _383 * 0.079577468335628509521484375), _299);
            float _413 = fma(fp_c10_1._m0[int(uint(_387) >> uint(2))][_387 & 3] * _407, fma(_271, fp_c1_1._m0[1].y, ((_258 + fma(_258, -_375, _375)) * _377) * 0.079577468335628509521484375), _301);
            _309 = int(uint(_309) >> uint(8));
            _311 = _405;
            _297 = _409;
            _299 = _411;
            _301 = _413;
            _315 = _411;
            _317 = _413;
            _319 = _409;
        } while (!(_405 >= 4));
        _323 = false;
        _303 = _315;
        _305 = _319;
        _307 = _317;
        if ((_309 & 255) == 30)
        {
            float _415 = 1.0 / fp_c10_1._m0[561].y;
            float _417 = _221 + (-fp_c10_1._m0[557].x);
            float _419 = _227 + (-fp_c10_1._m0[557].z);
            float _421 = _419 * fp_c10_1._m0[558].x;
            float _423 = (-_221) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_415, fp_c10_1._m0[557].x);
            float _425 = (-_227) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_415, fp_c10_1._m0[557].z);
            float _427 = _423 * _423;
            float _429 = sqrt(fma(_425, _425, _427)) * (-fp_c10_1._m0[558].y);
            float _431 = inversesqrt(fma(_425, _425, fma(_429, _429, _427)));
            float _433 = _423 * _431;
            float _435 = _429 * _431;
            float _437 = _425 * _431;
            float _439 = _417 * fp_c10_1._m0[558].z;
            float _441 = _160 + _433;
            float _443 = _162 + _435;
            float _445 = _164 + _437;
            float _447 = _82.y;
            float _449 = inversesqrt(fma(_445, _445, fma(_443, _443, _441 * _441)));
            float _451 = _441 * _449;
            float _453 = _443 * _449;
            float _455 = ((-float(_421 < _439)) + float(_421 > _439)) * fp_c10_1._m0[561].y;
            float _457 = fma(_419, _419, _417 * _417);
            float _459 = 1.0 / (fma(_227, fp_c10_1._m0[565].z, fma(_447, fp_c10_1._m0[565].y, _221 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _461 = fma(_419, fp_c10_1._m0[558].z, _417 * fp_c10_1._m0[558].x);
            bool _463 = _461 > 0.0;
            float _465 = fma(_172, _437, fma(_170, _435, _168 * _433));
            float _467 = _445 * _449;
            float _469 = inversesqrt(fma(_437, _437, _433 * _433));
            float _471 = max(fma(_164, _467, fma(_162, _453, _160 * _451)), fp_c1_1._m0[0].y);
            float _473 = max(_465, fp_c1_1._m0[0].y);
            float _475 = max(fma(_172, _467, fma(_170, _453, _168 * _451)), fp_c1_1._m0[0].y) * max(fma(_172, _467, fma(_170, _453, _168 * _451)), fp_c1_1._m0[0].y);
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
            float _483 = clamp(fma(_461 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_461 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _485 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_417, fma(_455, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_419 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_455 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_417, fma(_455, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_419 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_455 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _487 = fma(_471, fp_c1_1._m0[0].z, -6.9831600189208984375);
            float _489 = _487;
            if (_481)
            {
                _489 = fma(_485, -_485, fp_c1_1._m0[1].x) * fma(_485, -_485, fp_c1_1._m0[1].x);
            }
            float _491 = _489;
            if (!_481)
            {
                _491 = 1.0;
            }
            float _493 = exp2(_471 * _487);
            float _495 = (_245 * (1.0 / (_237 + fma(_237, -_473, _473)))) * ((_231 * (1.0 / max(fma(_231 * _231, _475, -_475) + 1.0, fp_c1_1._m0[0].y))) * (_231 * (1.0 / max(fma(_231 * _231, _475, -_475) + 1.0, fp_c1_1._m0[0].y))));
            float _497 = (min(fma(_483, -_483, fp_c1_1._m0[1].x) * fma(_483, -_483, fp_c1_1._m0[1].x), _491) * (exp2(log2(clamp(fma(_479, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_437 * _469, -fp_c10_1._m0[558].z, (_433 * _469) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_465 + (-0.0), 0.0, 1.0);
            float _499 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_227, fp_c10_1._m0[562].z, fma(_447, fp_c10_1._m0[562].y, _221 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _459, 0.5, 0.5), (-fma((fma(_227, fp_c10_1._m0[563].z, fma(_447, fp_c10_1._m0[563].y, _221 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _459, 0.5, 0.5)) + 1.0)).z > fma((fma(_227, fp_c10_1._m0[564].z, fma(_447, fp_c10_1._m0[564].y, _221 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _459, 0.5, 0.5)) || (_461 <= 0.0));
            _303 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _497) * fma(_265, fp_c1_1._m0[1].y, (_495 * (_252 + fma(_252, -_493, _493))) * 0.079577468335628509521484375), _499, _315);
            _305 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _497) * fma(_273, fp_c1_1._m0[1].y, (_495 * (_256 + fma(_256, -_493, _493))) * 0.079577468335628509521484375), _499, _319);
            _307 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _497) * fma(_271, fp_c1_1._m0[1].y, (_495 * (_258 + fma(_258, -_493, _493))) * 0.079577468335628509521484375), _499, _317);
        }
    }
    float _501 = _221 + (-fp_c3_1._m0[11].w);
    float _503 = _82.y;
    float _505 = _227 + (-fp_c3_1._m0[13].w);
    float _507 = fma(_293, _303, _295 * (fma(_250 * (_252 + fma(_252, -_254, _254)), fp_c1_1._m0[0].w, _265 * 0.3183098733425140380859375) * fma(_239, fp_c5_1._m0[5].x, _281)));
    float _509 = fma(_293, _305, _295 * (fma(_250 * (_256 + fma(_256, -_254, _254)), fp_c1_1._m0[0].w, _273 * 0.3183098733425140380859375) * fma(_239, fp_c5_1._m0[5].z, _285)));
    float _511 = _503 + (-fp_c3_1._m0[12].w);
    float _513 = fma(_505, _505, fma(_511, _511, _501 * _501));
    float _515 = clamp(fma(fma(_227, fp_c5_1._m0[14].z, fma(_503, fp_c5_1._m0[14].y, _221 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _517 = clamp(fma(_295 * _293, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _519 = fma(_293, _307, _295 * (fma(_250 * (_258 + fma(_258, -_254, _254)), fp_c1_1._m0[0].w, _271 * 0.3183098733425140380859375) * fma(_239, fp_c5_1._m0[5].y, _283)));
    float _521 = exp2(log2(clamp(sqrt(_513) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_505 * inversesqrt(_513), fp_c5_1._m0[23].z, fma(_511 * inversesqrt(_513), fp_c5_1._m0[23].y, (_501 * inversesqrt(_513)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _523 = fma((-_507) + fp_c5_1._m0[13].x, _515, _507);
    float _525 = fma((-_519) + fp_c5_1._m0[13].y, _515, _519);
    float _527 = fma((-_509) + fp_c5_1._m0[13].z, _515, _509);
    float _529 = clamp((-exp2((clamp(fma(sqrt(_513), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _85.x = fma((-_523) + fma(fma((_521 * fp_c7_1._m0[55].x) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _529, _523);
    _85.y = fma((-_525) + fma(fma((_521 * fp_c7_1._m0[55].y) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _529, _525);
    _85.z = fma((-_527) + fma(fma((_521 * fp_c7_1._m0[55].z) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _529, _527);
    _85.w = 1.0;
}


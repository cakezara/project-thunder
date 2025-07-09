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
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
layout(binding = 5) uniform sampler2D fp_tex_tcb_22;
layout(binding = 6) uniform sampler2D fp_tex_tcb_24;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 4) in vec4 _72;
layout(location = 7) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 3) in vec4 _78;
layout(location = 6) in vec4 _80;
layout(location = 0) out vec4 _83;
uint _6[12];

void main()
{
    bool _325 = false;
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
    float _138 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _140 = inversesqrt(fma(_136, _136, fma(_134, _134, _132 * _132)));
    float _142 = _116 * (-_138);
    float _144 = 1.0 / _76.w;
    float _146 = _118 * (-_138);
    float _148 = _120 * (-_138);
    float _150 = _132 * _140;
    float _152 = _134 * _140;
    float _154 = _136 * _140;
    float _156 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _158 = fma(_154, _148, fma(_152, _146, _150 * _142));
    float _160 = fma(_150 * (-_158), -2.0, -_142);
    float _162 = fma(_152 * (-_158), -2.0, -_146);
    float _164 = fma(_154 * (-_158), -2.0, -_148);
    float _166 = max(_158, fp_c1_1._m0[0].z);
    vec2 _168 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _144, 0.5, 0.5), fma(_76.y * _144, -0.5, 0.5))).xy;
    vec2 _170 = texture(fp_tex_tcb_22, vec2(_74.x, _74.y)).xy;
    float _172 = _142 + (-fp_c5_1._m0[23].x);
    float _174 = 1.0 / max(abs(_164), max(abs(_160), abs(_162)));
    vec3 _178 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _180 = _178.x;
    float _182 = _178.y;
    float _184 = _178.z;
    float _186 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    vec2 _188 = texture(fp_tex_tcb_38, vec2(_166, (-_156) + (-0.0))).xy;
    float _190 = _188.x;
    float _192 = _188.y;
    float _194 = _146 + (-fp_c5_1._m0[23].y);
    vec3 _196 = texture(fp_tex_tcb_36, vec4(_160 * _174, _162 * _174, _164 * _174, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_156 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec4 _199 = texture(fp_tex_tcb_24, vec2(_74.z, _74.w)).xyzw;
    float _201 = _199.w;
    vec3 _203 = texture(fp_tex_tcb_14, vec2(_90, _92)).xyz;
    float _205 = _148 + (-fp_c5_1._m0[23].z);
    float _207 = _150 * _152;
    float _209 = _152 * _154;
    float _211 = inversesqrt(fma(_205, _205, fma(_194, _194, _172 * _172)));
    float _213 = _172 * _211;
    float _215 = _194 * _211;
    float _217 = _154 * _154;
    float _219 = _205 * _211;
    float _221 = _80.w;
    float _223 = _150 * _154;
    float _225 = _78.x;
    float _227 = fma(_150, _150, -(_152 * _152));
    float _229 = _78.z;
    float _231 = _156 * _156;
    float _233 = fma(_152, -fp_c5_1._m0[23].y, _150 * (-fp_c5_1._m0[23].x));
    float _235 = fma(_156, 0.5, 0.5);
    float _237 = _231 * _231;
    float _239 = max(fma(_154, _219, fma(_152, _215, _150 * _213)), fp_c1_1._m0[0].z) * max(fma(_154, _219, fma(_152, _215, _150 * _213)), fp_c1_1._m0[0].z);
    float _241 = (_235 * 0.5) * _235;
    float _243 = max(fma(_154, -fp_c5_1._m0[23].z, _233), fp_c1_1._m0[0].z);
    float _245 = 1.0 / (_241 + fma(_166, -_241, _166));
    float _247 = max(fma(_148, _219, fma(_146, _215, _142 * _213)), fp_c1_1._m0[0].z);
    int _250 = max(0, min(int(trunc((_229 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _252 = ((_199.y * _201) * _221) * 32.0;
    float _254 = ((_199.x * _201) * _221) * 32.0;
    float _256 = (_245 * (1.0 / (_241 + fma(_241, -_243, _243)))) * ((_231 * (1.0 / max(fma(_239, _237, -_239) + 1.0, fp_c1_1._m0[0].z))) * (_231 * (1.0 / max(fma(_239, _237, -_239) + 1.0, fp_c1_1._m0[0].z))));
    float _258 = fma(_186, _180 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _260 = exp2(_247 * fma(_247, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _262 = fma(_186, _182 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _264 = fma(_186, _184 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    uint _267 = uint(int(uint((((int(uint(_250) >> uint(16)) * 20) << 16) + (((_250 & 65535) * 20) + max(0, min(int(trunc((_225 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _269 = fp_c10_1._m0[int(uint(int(_267)) >> uint(2))][int(_267) & 3];
    float _271 = fma(_182, -_186, _182);
    float _273 = fma(_180, -_186, _180);
    float _275 = fma(_258, -_273, _273);
    float _277 = fma(_262, -_271, _271);
    float _279 = fma(_184, -_186, _184);
    float _281 = clamp(_221 * clamp(fma(_170.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _283 = fma(_264, -_279, _279);
    float _285 = fma(_277, _252, fma(_196.y, fma(_262, _190, _192), max(0.0, fma(_227, fp_c5_1._m0[31].y, (fma(_154, fp_c5_1._m0[26].z, fma(_152, fp_c5_1._m0[26].y, _150 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_223, fp_c5_1._m0[29].w, fma(_217, fp_c5_1._m0[29].z, fma(_209, fp_c5_1._m0[29].y, _207 * fp_c5_1._m0[29].x))))) * _277));
    float _287 = clamp((-_281) + 1.0, 0.0, 1.0);
    float _289 = ((_199.z * _201) * _221) * 32.0;
    float _291 = fma(_275, _254, fma(_196.x, fma(_258, _190, _192), max(0.0, fma(_227, fp_c5_1._m0[31].x, (fma(_154, fp_c5_1._m0[25].z, fma(_152, fp_c5_1._m0[25].y, _150 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_223, fp_c5_1._m0[28].w, fma(_217, fp_c5_1._m0[28].z, fma(_209, fp_c5_1._m0[28].y, _207 * fp_c5_1._m0[28].x))))) * _275));
    float _293 = clamp((-fma(_281, fp_c7_1._m0[37].w, fma(clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), max((-_168.x) + 1.0, (-_168.y) + 1.0), clamp(_221 * clamp(fma(_170.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0)))) + 1.0, 0.0, 1.0);
    float _295 = clamp(fma(_154, -fp_c5_1._m0[23].z, _233), 0.0, 1.0);
    float _297 = fma(_283, _289, fma(_196.z, fma(_264, _190, _192), max(0.0, fma(_227, fp_c5_1._m0[31].z, (fma(_154, fp_c5_1._m0[27].z, fma(_152, fp_c5_1._m0[27].y, _150 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_223, fp_c5_1._m0[30].w, fma(_217, fp_c5_1._m0[30].z, fma(_209, fp_c5_1._m0[30].y, _207 * fp_c5_1._m0[30].x))))) * _283));
    float _299 = _285;
    float _301 = _291;
    float _303 = _297;
    float _305 = _285;
    float _307 = _291;
    float _309 = _297;
    if (floatBitsToInt(_269) != (-1))
    {
        int _311 = floatBitsToInt(_269);
        int _313 = 0;
        float _317;
        float _319;
        float _321;
        int _407;
        do
        {
            int _315 = _311 & 255;
            _317 = _301;
            _319 = _299;
            _321 = _303;
            _325 = uint(_315) >= 30u;
            if (_325)
            {
                break;
            }
            int _327 = _315 << 4;
            uint _329 = uint(int(uint(_327 + 7360) >> uint(2)));
            int _331 = int(_329) + 1;
            uint _333 = uint(int(uint(_327 + 7368) >> uint(2)));
            float _335 = (-_225) + fp_c10_1._m0[int(uint(int(_329)) >> uint(2))][int(_329) & 3];
            float _337 = fp_c10_1._m0[int(uint(_331) >> uint(2))][_331 & 3] + (-_78.y);
            float _339 = (-_229) + fp_c10_1._m0[int(uint(int(_333)) >> uint(2))][int(_333) & 3];
            float _341 = fma(_339, _339, fma(_337, _337, _335 * _335));
            float _343 = _335 * inversesqrt(_341);
            float _345 = _337 * inversesqrt(_341);
            float _347 = _339 * inversesqrt(_341);
            float _349 = _142 + _343;
            float _351 = _146 + _345;
            float _353 = _148 + _347;
            uint _355 = uint(int(uint(_327 + 6880) >> uint(2)));
            int _357 = int(_355) + 1;
            float _359 = inversesqrt(fma(_353, _353, fma(_351, _351, _349 * _349)));
            float _361 = _349 * _359;
            float _363 = _351 * _359;
            float _365 = _353 * _359;
            float _367 = fma(_154, _347, fma(_152, _345, _150 * _343));
            float _369 = max(_367, fp_c1_1._m0[0].z);
            uint _371 = uint(int(uint(_327 + 8320) >> uint(2)));
            float _373 = max(fma(_148, _365, fma(_146, _363, _142 * _361)), fp_c1_1._m0[0].z);
            float _375 = max(fma(_154, _365, fma(_152, _363, _150 * _361)), fp_c1_1._m0[0].z) * max(fma(_154, _365, fma(_152, _363, _150 * _361)), fp_c1_1._m0[0].z);
            uint _377 = uint(int(uint(_327 + 6408) >> uint(2)));
            uint _379 = uint(int(uint(_327 + 6400) >> uint(2)));
            int _381 = int(_379) + 1;
            float _383 = 1.0 / max(fma(_237, _375, -_375) + 1.0, fp_c1_1._m0[0].z);
            float _385 = exp2(_373 * fma(_373, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _387 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_371)) >> uint(2))][int(_371) & 3]) != 0;
            float _389 = (_245 * (1.0 / (_241 + fma(_241, -_369, _369)))) * ((_231 * _383) * (_231 * _383));
            float _391 = _383;
            if (!_387)
            {
                _391 = 1.0;
            }
            float _393 = _391;
            if (_387)
            {
                uint _395 = uint(int(uint(_327 + 7840) >> uint(2)));
                int _397 = int(_395) + 1;
                uint _399 = uint(int(uint(_327 + 6888) >> uint(2)));
                float _401 = fp_c10_1._m0[int(uint(int(_399)) >> uint(2))][int(_399) & 3];
                int _403 = int(_399) + 1;
                uint _405 = uint(int(uint(_327 + 7848) >> uint(2)));
                _393 = exp2(fp_c10_1._m0[int(uint(_403) >> uint(2))][_403 & 3] * log2(clamp(((-_401) + fma(_347, -fp_c10_1._m0[int(uint(int(_405)) >> uint(2))][int(_405) & 3], fma(_345, -fp_c10_1._m0[int(uint(_397) >> uint(2))][_397 & 3], _343 * (-fp_c10_1._m0[int(uint(int(_395)) >> uint(2))][int(_395) & 3])))) * (1.0 / ((-_401) + 1.0)), 0.0, 1.0)));
            }
            _407 = _313 + 1;
            float _409 = (exp2(fp_c10_1._m0[int(uint(_357) >> uint(2))][_357 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_355)) >> uint(2))][int(_355) & 3], -sqrt(_341), fp_c1_1._m0[1].y), 0.0, 1.0))) * _393) * clamp(_367 + (-0.0), 0.0, 1.0);
            float _411 = fma(fp_c10_1._m0[int(uint(_381) >> uint(2))][_381 & 3] * _409, fma(_271, fp_c1_1._m0[1].z, ((_262 + fma(_262, -_385, _385)) * _389) * 0.079577468335628509521484375), _299);
            float _413 = fma(fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3] * _409, fma(_273, fp_c1_1._m0[1].z, ((_258 + fma(_258, -_385, _385)) * _389) * 0.079577468335628509521484375), _301);
            float _415 = fma(fp_c10_1._m0[int(uint(int(_377)) >> uint(2))][int(_377) & 3] * _409, fma(_279, fp_c1_1._m0[1].z, ((_264 + fma(_264, -_385, _385)) * _389) * 0.079577468335628509521484375), _303);
            _311 = int(uint(_311) >> uint(8));
            _313 = _407;
            _299 = _411;
            _301 = _413;
            _303 = _415;
            _317 = _413;
            _319 = _411;
            _321 = _415;
        } while (!(_407 >= 4));
        _325 = false;
        _305 = _319;
        _307 = _317;
        _309 = _321;
        if ((_311 & 255) == 30)
        {
            float _417 = _78.y;
            float _419 = 1.0 / (fma(_229, fp_c10_1._m0[565].z, fma(_417, fp_c10_1._m0[565].y, _225 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _421 = 1.0 / fp_c10_1._m0[561].y;
            float _423 = _229 + (-fp_c10_1._m0[557].z);
            float _425 = _423 * fp_c10_1._m0[558].x;
            float _427 = (-_225) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_421, fp_c10_1._m0[557].x);
            float _429 = (-_229) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_421, fp_c10_1._m0[557].z);
            float _431 = _427 * _427;
            float _433 = sqrt(fma(_429, _429, _431)) * (-fp_c10_1._m0[558].y);
            float _435 = _225 + (-fp_c10_1._m0[557].x);
            float _437 = _435 * fp_c10_1._m0[558].z;
            float _439 = inversesqrt(fma(_429, _429, fma(_433, _433, _431)));
            float _441 = _427 * _439;
            float _443 = _433 * _439;
            float _445 = _429 * _439;
            float _447 = ((-float(_425 < _437)) + float(_425 > _437)) * fp_c10_1._m0[561].y;
            float _449 = _142 + _441;
            float _451 = _146 + _443;
            float _453 = _148 + _445;
            float _455 = fma(_423, _423, _435 * _435);
            float _457 = fma(_154, _445, fma(_152, _443, _150 * _441));
            float _459 = inversesqrt(fma(_453, _453, fma(_451, _451, _449 * _449)));
            float _461 = _449 * _459;
            float _463 = _451 * _459;
            float _465 = _453 * _459;
            float _467 = fma(_423, fp_c10_1._m0[558].z, _435 * fp_c10_1._m0[558].x);
            float _469 = inversesqrt(fma(_445, _445, _441 * _441));
            bool _471 = _467 > 0.0;
            float _473 = max(fma(_148, _465, fma(_146, _463, _142 * _461)), fp_c1_1._m0[0].z);
            float _475 = max(fma(_154, _465, fma(_152, _463, _150 * _461)), fp_c1_1._m0[0].z) * max(fma(_154, _465, fma(_152, _463, _150 * _461)), fp_c1_1._m0[0].z);
            float _477 = max(_457, fp_c1_1._m0[0].z);
            float _479 = _445;
            if (_471)
            {
                _479 = sqrt(_455);
            }
            float _481 = _479;
            if (!_471)
            {
                _481 = 1.0;
            }
            float _483 = fma(_241, -_477, _477);
            bool _485 = fma(_423 * inversesqrt(_455), fp_c10_1._m0[558].z, (_435 * inversesqrt(_455)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _487 = clamp(fma(_467 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_467 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _489 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_435, fma(_447, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_423 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_447 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_435, fma(_447, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_423 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_447 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _491 = _483;
            if (!_485)
            {
                _491 = 1.0;
            }
            float _493 = _491;
            if (_485)
            {
                _493 = fma(_489, -_489, fp_c1_1._m0[1].y) * fma(_489, -_489, fp_c1_1._m0[1].y);
            }
            float _495 = exp2(_473 * fma(_473, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _497 = (_245 * (1.0 / (_241 + _483))) * ((_231 * (1.0 / max(fma(_237, _475, -_475) + 1.0, fp_c1_1._m0[0].z))) * (_231 * (1.0 / max(fma(_237, _475, -_475) + 1.0, fp_c1_1._m0[0].z))));
            float _499 = (min(fma(_487, -_487, fp_c1_1._m0[1].y) * fma(_487, -_487, fp_c1_1._m0[1].y), _493) * (exp2(log2(clamp(fma(_481, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_445 * _469, -fp_c10_1._m0[558].z, (_441 * _469) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_457 + (-0.0), 0.0, 1.0);
            float _501 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_229, fp_c10_1._m0[562].z, fma(_417, fp_c10_1._m0[562].y, _225 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _419, 0.5, 0.5), (-fma((fma(_229, fp_c10_1._m0[563].z, fma(_417, fp_c10_1._m0[563].y, _225 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _419, 0.5, 0.5)) + 1.0)).z > fma((fma(_229, fp_c10_1._m0[564].z, fma(_417, fp_c10_1._m0[564].y, _225 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _419, 0.5, 0.5)) || (_467 <= 0.0));
            _305 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _499) * fma(_271, fp_c1_1._m0[1].z, ((_262 + fma(_262, -_495, _495)) * _497) * 0.079577468335628509521484375), _501, _319);
            _307 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _499) * fma(_273, fp_c1_1._m0[1].z, ((_258 + fma(_258, -_495, _495)) * _497) * 0.079577468335628509521484375), _501, _317);
            _309 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _499) * fma(_279, fp_c1_1._m0[1].z, ((_264 + fma(_264, -_495, _495)) * _497) * 0.079577468335628509521484375), _501, _321);
        }
    }
    float _503 = _225 + (-fp_c3_1._m0[11].w);
    float _505 = _78.y;
    float _507 = _229 + (-fp_c3_1._m0[13].w);
    float _509 = _505 + (-fp_c3_1._m0[12].w);
    float _511 = fma(_507, _507, fma(_509, _509, _503 * _503));
    float _513 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _515 = fma(_180 * _203.x, _513, fma(_287, _307, _293 * (fma(_256 * (_258 + fma(_258, -_260, _260)), fp_c1_1._m0[1].x, _273 * 0.3183098733425140380859375) * fma(_295, fp_c5_1._m0[5].x, _254))));
    float _517 = clamp(fma(_293 * _287, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _519 = fma(_182 * _203.y, _513, fma(_287, _305, _293 * (fma(_256 * (_262 + fma(_262, -_260, _260)), fp_c1_1._m0[1].x, _271 * 0.3183098733425140380859375) * fma(_295, fp_c5_1._m0[5].y, _252))));
    float _521 = fma(_184 * _203.z, _513, fma(_287, _309, _293 * (fma(_256 * (_264 + fma(_264, -_260, _260)), fp_c1_1._m0[1].x, _279 * 0.3183098733425140380859375) * fma(_295, fp_c5_1._m0[5].z, _289))));
    float _523 = clamp(fma(fma(_229, fp_c5_1._m0[14].z, fma(_505, fp_c5_1._m0[14].y, _225 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _525 = exp2(log2(clamp(sqrt(_511) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_507 * inversesqrt(_511), fp_c5_1._m0[23].z, fma(_509 * inversesqrt(_511), fp_c5_1._m0[23].y, (_503 * inversesqrt(_511)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _527 = fma((-_515) + fp_c5_1._m0[13].x, _523, _515);
    float _529 = fma((-_519) + fp_c5_1._m0[13].y, _523, _519);
    float _531 = fma((-_521) + fp_c5_1._m0[13].z, _523, _521);
    float _533 = clamp((-exp2((clamp(fma(sqrt(_511), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_527) + fma(fma((_525 * fp_c7_1._m0[55].x) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _533, _527);
    _83.y = fma((-_529) + fma(fma((_525 * fp_c7_1._m0[55].y) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _533, _529);
    _83.z = fma((-_531) + fma(fma((_525 * fp_c7_1._m0[55].z) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _533, _531);
    _83.w = 1.0;
}


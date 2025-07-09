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
    bool _323 = false;
    float _88 = 1.0 / (_64.z * gl_FragCoord.w);
    float _90 = _68.x;
    float _92 = _68.y;
    float _94 = 1.0 / _66.w;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    vec2 _104 = texture(fp_tex_tcb_2A, vec2(fma(_66.x * _94, 0.5, 0.5), fma(_66.y * _94, -0.5, 0.5))).xy;
    vec3 _108 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _110 = _108.x;
    float _112 = _108.y;
    float _114 = _108.z;
    float _116 = _70.x;
    float _118 = _70.y;
    float _120 = _70.z;
    float _122 = _72.y;
    float _124 = _72.z;
    float _126 = _72.x;
    float _128 = _72.w;
    float _130 = _74.x;
    float _132 = _74.y;
    float _134 = _74.z;
    float _136 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _138 = _120 * _136;
    float _140 = _116 * _136;
    float _142 = _118 * _136;
    float _144 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _146 = fma(_140, _144, fma(_100, _126, _102 * (fma(_142, _124, -(_138 * _122)) * _128)));
    float _148 = fma(_142, _144, fma(_100, _122, _102 * (fma(_138, _126, -(_140 * _124)) * _128)));
    float _150 = fma(_138, _144, fma(_100, _124, _102 * (fma(_140, _122, -(_142 * _126)) * _128)));
    float _152 = inversesqrt(fma(_134, _134, fma(_132, _132, _130 * _130)));
    float _154 = inversesqrt(fma(_150, _150, fma(_148, _148, _146 * _146)));
    float _156 = _130 * (-_152);
    float _158 = _132 * (-_152);
    float _160 = _134 * (-_152);
    float _162 = _146 * _154;
    float _164 = _148 * _154;
    float _166 = _150 * _154;
    float _168 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _170 = fma(_166, _160, fma(_164, _158, _162 * _156));
    float _172 = max(_170, fp_c1_1._m0[0].y);
    float _174 = fma(_162 * (-_170), -2.0, -_156);
    float _176 = fma(_164 * (-_170), -2.0, -_158);
    float _178 = fma(_166 * (-_170), -2.0, -_160);
    float _180 = 1.0 / max(abs(_178), max(abs(_174), abs(_176)));
    vec2 _182 = texture(fp_tex_tcb_38, vec2(_172, (-_168) + (-0.0))).xy;
    float _184 = _182.x;
    float _186 = _182.y;
    vec3 _188 = texture(fp_tex_tcb_36, vec4(_174 * _180, _176 * _180, _178 * _180, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_168 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _190 = texture(fp_tex_tcb_22, vec2(_76.x, _76.y)).xy;
    vec4 _193 = texture(fp_tex_tcb_24, vec2(_76.z, _76.w)).xyzw;
    float _195 = _193.w;
    vec3 _197 = texture(fp_tex_tcb_14, vec2(_90, _92)).xyz;
    float _199 = _156 + (-fp_c5_1._m0[23].x);
    float _201 = _158 + (-fp_c5_1._m0[23].y);
    float _203 = _160 + (-fp_c5_1._m0[23].z);
    float _205 = _162 * _164;
    float _207 = fma(_168, 0.5, 0.5);
    float _209 = _166 * _166;
    float _211 = inversesqrt(fma(_203, _203, fma(_201, _201, _199 * _199)));
    float _213 = _199 * _211;
    float _215 = _201 * _211;
    float _217 = _203 * _211;
    float _219 = _78.x;
    float _221 = _162 * _166;
    float _223 = _164 * _166;
    float _225 = _168 * _168;
    float _227 = max(fma(_160, _217, fma(_158, _215, _156 * _213)), fp_c1_1._m0[0].y);
    float _229 = (_207 * 0.5) * _207;
    float _231 = _225 * _225;
    float _233 = _78.z;
    float _235 = max(fma(_166, _217, fma(_164, _215, _162 * _213)), fp_c1_1._m0[0].y) * max(fma(_166, _217, fma(_164, _215, _162 * _213)), fp_c1_1._m0[0].y);
    float _237 = fma(_164, -fp_c5_1._m0[23].y, _162 * (-fp_c5_1._m0[23].x));
    float _239 = max(fma(_166, -fp_c5_1._m0[23].z, _237), fp_c1_1._m0[0].y);
    float _241 = clamp(fma(_166, -fp_c5_1._m0[23].z, _237), 0.0, 1.0);
    float _243 = 1.0 / (_229 + fma(_172, -_229, _172));
    float _245 = fma(_162, _162, -(_164 * _164));
    float _247 = _64.w;
    int _250 = max(0, min(int(trunc((_233 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _252 = exp2(_227 * fma(_227, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _254 = fma(_110 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _256 = (_243 * (1.0 / (_229 + fma(_229, -_239, _239)))) * ((_225 * (1.0 / max(fma(_235, _231, -_235) + 1.0, fp_c1_1._m0[0].y))) * (_225 * (1.0 / max(fma(_235, _231, -_235) + 1.0, fp_c1_1._m0[0].y))));
    float _258 = fma(_112, -fp_c6_1._m0[9].x, _112);
    float _260 = fma(_114 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _262 = fma(_110, -fp_c6_1._m0[9].x, _110);
    float _264 = fma(_112 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    uint _267 = uint(int(uint((((int(uint(_250) >> uint(16)) * 20) << 16) + (((_250 & 65535) * 20) + max(0, min(int(trunc((_219 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _269 = fp_c10_1._m0[int(uint(int(_267)) >> uint(2))][int(_267) & 3];
    float _271 = fma(_258, -_264, _258);
    float _273 = fma(_262, -_254, _262);
    float _275 = fma(_114, -fp_c6_1._m0[9].x, _114);
    float _277 = fma(_275, -_260, _275);
    float _279 = ((_193.x * _195) * _247) * 32.0;
    float _281 = ((_193.y * _195) * _247) * 32.0;
    float _283 = ((_193.z * _195) * _247) * 32.0;
    float _285 = clamp(_247 * clamp(fma(_190.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _287 = fma(_273, _279, fma(_188.x, fma(_254, _184, _186), max(0.0, fma(_245, fp_c5_1._m0[31].x, (fma(_166, fp_c5_1._m0[25].z, fma(_164, fp_c5_1._m0[25].y, _162 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_221, fp_c5_1._m0[28].w, fma(_209, fp_c5_1._m0[28].z, fma(_223, fp_c5_1._m0[28].y, _205 * fp_c5_1._m0[28].x))))) * _273));
    float _289 = fma(_271, _281, fma(_188.y, fma(_264, _184, _186), max(0.0, fma(_245, fp_c5_1._m0[31].y, (fma(_166, fp_c5_1._m0[26].z, fma(_164, fp_c5_1._m0[26].y, _162 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_221, fp_c5_1._m0[29].w, fma(_209, fp_c5_1._m0[29].z, fma(_223, fp_c5_1._m0[29].y, _205 * fp_c5_1._m0[29].x))))) * _271));
    float _291 = fma(_277, _283, fma(_188.z, fma(_260, _184, _186), max(0.0, fma(_245, fp_c5_1._m0[31].z, (fma(_166, fp_c5_1._m0[27].z, fma(_164, fp_c5_1._m0[27].y, _162 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_221, fp_c5_1._m0[30].w, fma(_209, fp_c5_1._m0[30].z, fma(_223, fp_c5_1._m0[30].y, _205 * fp_c5_1._m0[30].x))))) * _277));
    float _293 = clamp((-_285) + 1.0, 0.0, 1.0);
    float _295 = clamp((-fma(_285, fp_c7_1._m0[37].w, clamp(_247 * clamp(fma(_190.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_104.x) + 1.0, (-_104.y) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_64.x * gl_FragCoord.w) * _88, (_64.y * gl_FragCoord.w) * _88)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _297 = _289;
    float _299 = _291;
    float _301 = _287;
    float _303 = _287;
    float _305 = _289;
    float _307 = _291;
    if (floatBitsToInt(_269) != (-1))
    {
        int _309 = floatBitsToInt(_269);
        int _311 = 0;
        float _315;
        float _317;
        float _319;
        int _405;
        do
        {
            int _313 = _309 & 255;
            _315 = _301;
            _317 = _297;
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
            float _333 = (-_219) + fp_c10_1._m0[int(uint(int(_327)) >> uint(2))][int(_327) & 3];
            float _335 = fp_c10_1._m0[int(uint(_329) >> uint(2))][_329 & 3] + (-_78.y);
            float _337 = (-_233) + fp_c10_1._m0[int(uint(int(_331)) >> uint(2))][int(_331) & 3];
            float _339 = fma(_337, _337, fma(_335, _335, _333 * _333));
            float _341 = _333 * inversesqrt(_339);
            float _343 = _335 * inversesqrt(_339);
            float _345 = _337 * inversesqrt(_339);
            float _347 = _156 + _341;
            float _349 = _158 + _343;
            float _351 = _160 + _345;
            uint _353 = uint(int(uint(_325 + 6880) >> uint(2)));
            int _355 = int(_353) + 1;
            float _357 = inversesqrt(fma(_351, _351, fma(_349, _349, _347 * _347)));
            float _359 = _347 * _357;
            float _361 = _349 * _357;
            float _363 = _351 * _357;
            uint _365 = uint(int(uint(_325 + 8320) >> uint(2)));
            float _367 = fma(_166, _345, fma(_164, _343, _162 * _341));
            float _369 = max(fma(_166, _363, fma(_164, _361, _162 * _359)), fp_c1_1._m0[0].y) * max(fma(_166, _363, fma(_164, _361, _162 * _359)), fp_c1_1._m0[0].y);
            float _371 = max(fma(_160, _363, fma(_158, _361, _156 * _359)), fp_c1_1._m0[0].y);
            float _373 = max(_367, fp_c1_1._m0[0].y);
            uint _375 = uint(int(uint(_325 + 6408) >> uint(2)));
            uint _377 = uint(int(uint(_325 + 6400) >> uint(2)));
            int _379 = int(_377) + 1;
            float _381 = exp2(_371 * fma(_371, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _383 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_365)) >> uint(2))][int(_365) & 3]) != 0;
            float _385 = (_243 * (1.0 / (_229 + fma(_229, -_373, _373)))) * ((_225 * (1.0 / max(fma(_231, _369, -_369) + 1.0, fp_c1_1._m0[0].y))) * (_225 * (1.0 / max(fma(_231, _369, -_369) + 1.0, fp_c1_1._m0[0].y))));
            float _387 = (_264 + fma(_264, -_381, _381)) * _385;
            float _389 = _387;
            if (!_383)
            {
                _389 = 1.0;
            }
            float _391 = _389;
            if (_383)
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
            float _407 = (exp2(fp_c10_1._m0[int(uint(_355) >> uint(2))][_355 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_353)) >> uint(2))][int(_353) & 3], -sqrt(_339), fp_c1_1._m0[1].x), 0.0, 1.0))) * _391) * clamp(_367 + (-0.0), 0.0, 1.0);
            float _409 = fma(fp_c10_1._m0[int(uint(_379) >> uint(2))][_379 & 3] * _407, fma(_258, fp_c1_1._m0[1].y, _387 * 0.079577468335628509521484375), _297);
            float _411 = fma(fp_c10_1._m0[int(uint(int(_375)) >> uint(2))][int(_375) & 3] * _407, fma(_275, fp_c1_1._m0[1].y, ((_260 + fma(_260, -_381, _381)) * _385) * 0.079577468335628509521484375), _299);
            float _413 = fma(fp_c10_1._m0[int(uint(int(_377)) >> uint(2))][int(_377) & 3] * _407, fma(_262, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_381, _381)) * _385) * 0.079577468335628509521484375), _301);
            _309 = int(uint(_309) >> uint(8));
            _311 = _405;
            _297 = _409;
            _299 = _411;
            _301 = _413;
            _315 = _413;
            _317 = _409;
            _319 = _411;
        } while (!(_405 >= 4));
        _323 = false;
        _303 = _315;
        _305 = _317;
        _307 = _319;
        if ((_309 & 255) == 30)
        {
            float _415 = _78.y;
            float _417 = 1.0 / (fma(_233, fp_c10_1._m0[565].z, fma(_415, fp_c10_1._m0[565].y, _219 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _419 = 1.0 / fp_c10_1._m0[561].y;
            float _421 = _233 + (-fp_c10_1._m0[557].z);
            float _423 = _421 * fp_c10_1._m0[558].x;
            float _425 = (-_219) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_419, fp_c10_1._m0[557].x);
            float _427 = (-_233) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_419, fp_c10_1._m0[557].z);
            float _429 = _425 * _425;
            float _431 = sqrt(fma(_427, _427, _429)) * (-fp_c10_1._m0[558].y);
            float _433 = inversesqrt(fma(_427, _427, fma(_431, _431, _429)));
            float _435 = _425 * _433;
            float _437 = _431 * _433;
            float _439 = _427 * _433;
            float _441 = _219 + (-fp_c10_1._m0[557].x);
            float _443 = _156 + _435;
            float _445 = _158 + _437;
            float _447 = _160 + _439;
            float _449 = _441 * fp_c10_1._m0[558].z;
            float _451 = inversesqrt(fma(_447, _447, fma(_445, _445, _443 * _443)));
            float _453 = fma(_421, _421, _441 * _441);
            float _455 = fma(_166, _439, fma(_164, _437, _162 * _435));
            float _457 = _443 * _451;
            float _459 = _445 * _451;
            float _461 = _447 * _451;
            float _463 = inversesqrt(fma(_439, _439, _435 * _435));
            float _465 = ((-float(_423 < _449)) + float(_423 > _449)) * fp_c10_1._m0[561].y;
            float _467 = max(fma(_160, _461, fma(_158, _459, _156 * _457)), fp_c1_1._m0[0].y);
            float _469 = fma(_421, fp_c10_1._m0[558].z, _441 * fp_c10_1._m0[558].x);
            float _471 = max(fma(_166, _461, fma(_164, _459, _162 * _457)), fp_c1_1._m0[0].y) * max(fma(_166, _461, fma(_164, _459, _162 * _457)), fp_c1_1._m0[0].y);
            bool _473 = _469 > 0.0;
            float _475 = _421;
            float _477 = _467;
            if (_473)
            {
                _475 = sqrt(_453);
            }
            float _479 = _475;
            if (!_473)
            {
                _479 = 1.0;
            }
            bool _481 = fma(_421 * inversesqrt(_453), fp_c10_1._m0[558].z, (_441 * inversesqrt(_453)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _483 = max(_455, fp_c1_1._m0[0].y);
            float _485 = clamp(fma(_469 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_469 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _487 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_441, fma(_465, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_421 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_465 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_441, fma(_465, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_421 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_465 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            if (!_481)
            {
                _477 = 1.0;
            }
            float _489 = _477;
            if (_481)
            {
                _489 = fma(_487, -_487, fp_c1_1._m0[1].x) * fma(_487, -_487, fp_c1_1._m0[1].x);
            }
            float _491 = exp2(_467 * fma(_467, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _493 = (_243 * (1.0 / (_229 + fma(_229, -_483, _483)))) * ((_225 * (1.0 / max(fma(_231, _471, -_471) + 1.0, fp_c1_1._m0[0].y))) * (_225 * (1.0 / max(fma(_231, _471, -_471) + 1.0, fp_c1_1._m0[0].y))));
            float _495 = (min(fma(_485, -_485, fp_c1_1._m0[1].x) * fma(_485, -_485, fp_c1_1._m0[1].x), _489) * (exp2(log2(clamp(fma(_479, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_439 * _463, -fp_c10_1._m0[558].z, (_435 * _463) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_455 + (-0.0), 0.0, 1.0);
            float _497 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_233, fp_c10_1._m0[562].z, fma(_415, fp_c10_1._m0[562].y, _219 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _417, 0.5, 0.5), (-fma((fma(_233, fp_c10_1._m0[563].z, fma(_415, fp_c10_1._m0[563].y, _219 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _417, 0.5, 0.5)) + 1.0)).z > fma((fma(_233, fp_c10_1._m0[564].z, fma(_415, fp_c10_1._m0[564].y, _219 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _417, 0.5, 0.5)) || (_469 <= 0.0));
            _303 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _495) * fma(_262, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_491, _491)) * _493) * 0.079577468335628509521484375), _497, _315);
            _305 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _495) * fma(_258, fp_c1_1._m0[1].y, ((_264 + fma(_264, -_491, _491)) * _493) * 0.079577468335628509521484375), _497, _317);
            _307 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _495) * fma(_275, fp_c1_1._m0[1].y, ((_260 + fma(_260, -_491, _491)) * _493) * 0.079577468335628509521484375), _497, _319);
        }
    }
    float _499 = _219 + (-fp_c3_1._m0[11].w);
    float _501 = _78.y;
    float _503 = _233 + (-fp_c3_1._m0[13].w);
    float _505 = _501 + (-fp_c3_1._m0[12].w);
    float _507 = fma(_503, _503, fma(_505, _505, _499 * _499));
    float _509 = fp_c6_1._m0[11].x * fp_c6_1._m0[15].y;
    float _511 = clamp(fma(_295 * _293, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _513 = clamp(fma(fma(_233, fp_c5_1._m0[14].z, fma(_501, fp_c5_1._m0[14].y, _219 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _515 = fma(_197.x * fp_c6_1._m0[12].x, _509, fma(_293, _303, _295 * (fma(_256 * (_254 + fma(_254, -_252, _252)), fp_c1_1._m0[0].w, _262 * 0.3183098733425140380859375) * fma(_241, fp_c5_1._m0[5].x, _279))));
    float _517 = fma(_197.y * fp_c6_1._m0[12].y, _509, fma(_293, _305, _295 * (fma(_256 * (_264 + fma(_264, -_252, _252)), fp_c1_1._m0[0].w, _258 * 0.3183098733425140380859375) * fma(_241, fp_c5_1._m0[5].y, _281))));
    float _519 = fma(_197.z * fp_c6_1._m0[12].z, _509, fma(_293, _307, _295 * (fma(_256 * (_260 + fma(_260, -_252, _252)), fp_c1_1._m0[0].w, _275 * 0.3183098733425140380859375) * fma(_241, fp_c5_1._m0[5].z, _283))));
    float _521 = exp2(log2(clamp(sqrt(_507) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_503 * inversesqrt(_507), fp_c5_1._m0[23].z, fma(_505 * inversesqrt(_507), fp_c5_1._m0[23].y, (_499 * inversesqrt(_507)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _523 = fma((-_515) + fp_c5_1._m0[13].x, _513, _515);
    float _525 = fma((-_517) + fp_c5_1._m0[13].y, _513, _517);
    float _527 = fma((-_519) + fp_c5_1._m0[13].z, _513, _519);
    float _529 = clamp((-exp2((clamp(fma(sqrt(_507), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_523) + fma(fma((_521 * fp_c7_1._m0[55].x) * _511, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _529, _523);
    _81.y = fma((-_525) + fma(fma((_521 * fp_c7_1._m0[55].y) * _511, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _529, _525);
    _81.z = fma((-_527) + fma(fma((_521 * fp_c7_1._m0[55].z) * _511, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _529, _527);
    _81.w = 1.0;
}


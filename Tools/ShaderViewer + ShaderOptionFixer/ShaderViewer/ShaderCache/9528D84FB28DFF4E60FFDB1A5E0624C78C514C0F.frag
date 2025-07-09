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
    bool _321 = false;
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
    float _134 = 1.0 / (_76.z * gl_FragCoord.w);
    float _136 = fma(_128, _130, fma(_98, _108, _100 * (fma(_124, _112, -(_126 * _110)) * _114)));
    float _138 = fma(_124, _130, fma(_98, _110, _100 * (fma(_126, _108, -(_128 * _112)) * _114)));
    float _140 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _142 = inversesqrt(fma(_138, _138, fma(_136, _136, _132 * _132)));
    float _144 = _116 * (-_140);
    float _146 = _118 * (-_140);
    float _148 = _120 * (-_140);
    float _150 = _132 * _142;
    float _152 = _136 * _142;
    float _154 = _138 * _142;
    float _156 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _158 = fma(_154, _148, fma(_152, _146, _150 * _144));
    float _160 = fma(_150 * (-_158), -2.0, -_144);
    float _162 = fma(_152 * (-_158), -2.0, -_146);
    float _164 = fma(_154 * (-_158), -2.0, -_148);
    float _166 = max(_158, fp_c1_1._m0[0].z);
    float _168 = 1.0 / _78.w;
    float _170 = 1.0 / max(abs(_164), max(abs(_160), abs(_162)));
    vec3 _174 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _176 = _174.x;
    float _178 = _174.y;
    float _180 = _174.z;
    float _182 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    vec2 _184 = texture(fp_tex_tcb_38, vec2(_166, (-_156) + (-0.0))).xy;
    float _186 = _184.x;
    float _188 = _184.y;
    vec3 _190 = texture(fp_tex_tcb_36, vec4(_160 * _170, _162 * _170, _164 * _170, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_156 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _192 = texture(fp_tex_tcb_22, vec2(_74.x, _74.y)).xy;
    vec4 _195 = texture(fp_tex_tcb_24, vec2(_74.z, _74.w)).xyzw;
    float _197 = _195.w;
    float _199 = _144 + (-fp_c5_1._m0[23].x);
    float _201 = _146 + (-fp_c5_1._m0[23].y);
    float _203 = _150 * _152;
    float _205 = _148 + (-fp_c5_1._m0[23].z);
    float _207 = _152 * _154;
    float _209 = _154 * _154;
    float _211 = _80.z;
    float _213 = inversesqrt(fma(_205, _205, fma(_201, _201, _199 * _199)));
    float _215 = _150 * _154;
    float _217 = _80.x;
    float _219 = _199 * _213;
    float _221 = _201 * _213;
    float _223 = _205 * _213;
    float _225 = fma(_150, _150, -(_152 * _152));
    float _227 = _156 * _156;
    float _229 = fma(_156, 0.5, 0.5);
    float _231 = fma(_152, -fp_c5_1._m0[23].y, _150 * (-fp_c5_1._m0[23].x));
    float _233 = max(fma(_154, _223, fma(_152, _221, _150 * _219)), fp_c1_1._m0[0].z) * max(fma(_154, _223, fma(_152, _221, _150 * _219)), fp_c1_1._m0[0].z);
    float _235 = max(fma(_148, _223, fma(_146, _221, _144 * _219)), fp_c1_1._m0[0].z);
    float _237 = (_229 * 0.5) * _229;
    float _239 = max(fma(_154, -fp_c5_1._m0[23].z, _231), fp_c1_1._m0[0].z);
    float _241 = clamp(fma(_154, -fp_c5_1._m0[23].z, _231), 0.0, 1.0);
    int _244 = max(0, min(int(trunc((_211 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _246 = 1.0 / (_237 + fma(_166, -_237, _166));
    float _248 = exp2(_235 * fma(_235, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _250 = fma(_178, -_182, _178);
    float _252 = fma(_182, _176 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _254 = fma(_182, _178 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _256 = fma(_182, _180 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _258 = fma(_176, -_182, _176);
    float _260 = (_246 * (1.0 / (_237 + fma(_237, -_239, _239)))) * ((_227 * (1.0 / max(fma(_233, _227 * _227, -_233) + 1.0, fp_c1_1._m0[0].z))) * (_227 * (1.0 / max(fma(_233, _227 * _227, -_233) + 1.0, fp_c1_1._m0[0].z))));
    uint _263 = uint(int(uint((((int(uint(_244) >> uint(16)) * 20) << 16) + (((_244 & 65535) * 20) + max(0, min(int(trunc((_217 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _265 = fp_c10_1._m0[int(uint(int(_263)) >> uint(2))][int(_263) & 3];
    float _267 = fma(_252, -_258, _258);
    float _269 = fma(_180, -_182, _180);
    float _271 = _76.w;
    float _273 = fma(_254, -_250, _250);
    float _275 = fma(_256, -_269, _269);
    float _277 = ((_195.y * _197) * _271) * 32.0;
    float _279 = ((_195.x * _197) * _271) * 32.0;
    float _281 = clamp(_271 * clamp(fma(_192.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _283 = ((_195.z * _197) * _271) * 32.0;
    float _285 = fma(_273, _277, fma(_190.y, fma(_254, _186, _188), max(0.0, fma(_225, fp_c5_1._m0[31].y, (fma(_154, fp_c5_1._m0[26].z, fma(_152, fp_c5_1._m0[26].y, _150 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_215, fp_c5_1._m0[29].w, fma(_209, fp_c5_1._m0[29].z, fma(_207, fp_c5_1._m0[29].y, _203 * fp_c5_1._m0[29].x))))) * _273));
    float _287 = fma(_275, _283, fma(_190.z, fma(_256, _186, _188), max(0.0, fma(_225, fp_c5_1._m0[31].z, (fma(_154, fp_c5_1._m0[27].z, fma(_152, fp_c5_1._m0[27].y, _150 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_215, fp_c5_1._m0[30].w, fma(_209, fp_c5_1._m0[30].z, fma(_207, fp_c5_1._m0[30].y, _203 * fp_c5_1._m0[30].x))))) * _275));
    float _289 = fma(_267, _279, fma(_190.x, fma(_252, _186, _188), max(0.0, fma(_225, fp_c5_1._m0[31].x, (fma(_154, fp_c5_1._m0[25].z, fma(_152, fp_c5_1._m0[25].y, _150 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_215, fp_c5_1._m0[28].w, fma(_209, fp_c5_1._m0[28].z, fma(_207, fp_c5_1._m0[28].y, _203 * fp_c5_1._m0[28].x))))) * _267));
    float _291 = clamp((-((-texture(fp_tex_tcb_18, vec2(_90, _92)).x) + _281)) + (-0.0), 0.0, 1.0);
    float _293 = clamp((-fma(_281, fp_c7_1._m0[37].w, fma(clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0), max(0.0, (-texture(fp_tex_tcb_2A, vec2(fma(_78.x * _168, 0.5, 0.5), fma(_78.y * _168, -0.5, 0.5))).x) + 1.0), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _134, (_76.y * gl_FragCoord.w) * _134)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)) + clamp(_271 * clamp(fma(_192.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    int _295 = floatBitsToInt(_265);
    float _297 = _287;
    float _299 = _289;
    float _301 = _285;
    float _303 = _287;
    float _305 = _285;
    float _307 = _289;
    if (floatBitsToInt(_265) != (-1))
    {
        int _309 = 0;
        float _313;
        float _315;
        float _317;
        int _403;
        do
        {
            int _311 = _295 & 255;
            _313 = _299;
            _315 = _301;
            _317 = _297;
            _321 = uint(_311) >= 30u;
            if (_321)
            {
                break;
            }
            int _323 = _311 << 4;
            uint _325 = uint(int(uint(_323 + 7360) >> uint(2)));
            int _327 = int(_325) + 1;
            uint _329 = uint(int(uint(_323 + 7368) >> uint(2)));
            float _331 = (-_217) + fp_c10_1._m0[int(uint(int(_325)) >> uint(2))][int(_325) & 3];
            float _333 = fp_c10_1._m0[int(uint(_327) >> uint(2))][_327 & 3] + (-_80.y);
            float _335 = (-_211) + fp_c10_1._m0[int(uint(int(_329)) >> uint(2))][int(_329) & 3];
            float _337 = fma(_335, _335, fma(_333, _333, _331 * _331));
            float _339 = _331 * inversesqrt(_337);
            float _341 = _333 * inversesqrt(_337);
            float _343 = _335 * inversesqrt(_337);
            float _345 = _144 + _339;
            float _347 = _146 + _341;
            float _349 = _148 + _343;
            float _351 = inversesqrt(fma(_349, _349, fma(_347, _347, _345 * _345)));
            float _353 = _345 * _351;
            float _355 = _347 * _351;
            float _357 = _349 * _351;
            float _359 = fma(_154, _343, fma(_152, _341, _150 * _339));
            float _361 = max(fma(_148, _357, fma(_146, _355, _144 * _353)), fp_c1_1._m0[0].z);
            float _363 = max(fma(_154, _357, fma(_152, _355, _150 * _353)), fp_c1_1._m0[0].z) * max(fma(_154, _357, fma(_152, _355, _150 * _353)), fp_c1_1._m0[0].z);
            uint _365 = uint(int(uint(_323 + 6880) >> uint(2)));
            int _367 = int(_365) + 1;
            float _369 = max(_359, fp_c1_1._m0[0].z);
            uint _371 = uint(int(uint(_323 + 8320) >> uint(2)));
            float _373 = exp2(_361 * fma(_361, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _375 = (_246 * (1.0 / (_237 + fma(_237, -_369, _369)))) * ((_227 * (1.0 / max(fma(_227 * _227, _363, -_363) + 1.0, fp_c1_1._m0[0].z))) * (_227 * (1.0 / max(fma(_227 * _227, _363, -_363) + 1.0, fp_c1_1._m0[0].z))));
            bool _377 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_371)) >> uint(2))][int(_371) & 3]) != 0;
            uint _379 = uint(int(uint(_323 + 6408) >> uint(2)));
            float _381 = (_252 + fma(_252, -_373, _373)) * _375;
            uint _383 = uint(int(uint(_323 + 6400) >> uint(2)));
            int _385 = int(_383) + 1;
            float _387 = _381;
            if (!_377)
            {
                _387 = 1.0;
            }
            float _389 = _387;
            if (_377)
            {
                uint _391 = uint(int(uint(_323 + 7840) >> uint(2)));
                int _393 = int(_391) + 1;
                uint _395 = uint(int(uint(_323 + 7848) >> uint(2)));
                uint _397 = uint(int(uint(_323 + 6888) >> uint(2)));
                float _399 = fp_c10_1._m0[int(uint(int(_397)) >> uint(2))][int(_397) & 3];
                int _401 = int(_397) + 1;
                _389 = exp2(fp_c10_1._m0[int(uint(_401) >> uint(2))][_401 & 3] * log2(clamp(((-_399) + fma(_343, -fp_c10_1._m0[int(uint(int(_395)) >> uint(2))][int(_395) & 3], fma(_341, -fp_c10_1._m0[int(uint(_393) >> uint(2))][_393 & 3], _339 * (-fp_c10_1._m0[int(uint(int(_391)) >> uint(2))][int(_391) & 3])))) * (1.0 / ((-_399) + 1.0)), 0.0, 1.0)));
            }
            _403 = _309 + 1;
            float _405 = (exp2(fp_c10_1._m0[int(uint(_367) >> uint(2))][_367 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_365)) >> uint(2))][int(_365) & 3], -sqrt(_337), fp_c1_1._m0[1].y), 0.0, 1.0))) * _389) * clamp(_359 + (-0.0), 0.0, 1.0);
            float _407 = fma(fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3] * _405, fma(_269, fp_c1_1._m0[1].z, ((_256 + fma(_256, -_373, _373)) * _375) * 0.079577468335628509521484375), _297);
            float _409 = fma(fp_c10_1._m0[int(uint(int(_383)) >> uint(2))][int(_383) & 3] * _405, fma(_258, fp_c1_1._m0[1].z, _381 * 0.079577468335628509521484375), _299);
            float _411 = fma(fp_c10_1._m0[int(uint(_385) >> uint(2))][_385 & 3] * _405, fma(_250, fp_c1_1._m0[1].z, ((_254 + fma(_254, -_373, _373)) * _375) * 0.079577468335628509521484375), _301);
            _295 = int(uint(_295) >> uint(8));
            _309 = _403;
            _297 = _407;
            _299 = _409;
            _301 = _411;
            _313 = _409;
            _315 = _411;
            _317 = _407;
        } while (!(_403 >= 4));
        _321 = false;
        _303 = _317;
        _305 = _315;
        _307 = _313;
        if ((_295 & 255) == 30)
        {
            float _413 = 1.0 / fp_c10_1._m0[561].y;
            float _415 = _217 + (-fp_c10_1._m0[557].x);
            float _417 = _211 + (-fp_c10_1._m0[557].z);
            float _419 = _417 * fp_c10_1._m0[558].x;
            float _421 = (-_217) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_413, fp_c10_1._m0[557].x);
            float _423 = (-_211) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_413, fp_c10_1._m0[557].z);
            float _425 = _421 * _421;
            float _427 = sqrt(fma(_423, _423, _425)) * (-fp_c10_1._m0[558].y);
            float _429 = inversesqrt(fma(_423, _423, fma(_427, _427, _425)));
            float _431 = _421 * _429;
            float _433 = _427 * _429;
            float _435 = _423 * _429;
            float _437 = _415 * fp_c10_1._m0[558].z;
            float _439 = _144 + _431;
            float _441 = _146 + _433;
            float _443 = _148 + _435;
            float _445 = _80.y;
            float _447 = inversesqrt(fma(_443, _443, fma(_441, _441, _439 * _439)));
            float _449 = _439 * _447;
            float _451 = _441 * _447;
            float _453 = ((-float(_419 < _437)) + float(_419 > _437)) * fp_c10_1._m0[561].y;
            float _455 = fma(_417, _417, _415 * _415);
            float _457 = 1.0 / (fma(_211, fp_c10_1._m0[565].z, fma(_445, fp_c10_1._m0[565].y, _217 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _459 = fma(_417, fp_c10_1._m0[558].z, _415 * fp_c10_1._m0[558].x);
            bool _461 = _459 > 0.0;
            float _463 = _443 * _447;
            float _465 = fma(_154, _435, fma(_152, _433, _150 * _431));
            float _467 = inversesqrt(fma(_435, _435, _431 * _431));
            float _469 = max(fma(_148, _463, fma(_146, _451, _144 * _449)), fp_c1_1._m0[0].z);
            float _471 = max(fma(_154, _463, fma(_152, _451, _150 * _449)), fp_c1_1._m0[0].z) * max(fma(_154, _463, fma(_152, _451, _150 * _449)), fp_c1_1._m0[0].z);
            float _473 = max(_465, fp_c1_1._m0[0].z);
            float _475 = _435;
            if (_461)
            {
                _475 = sqrt(_455);
            }
            float _477 = _475;
            if (!_461)
            {
                _477 = 1.0;
            }
            bool _479 = fma(_417 * inversesqrt(_455), fp_c10_1._m0[558].z, (_415 * inversesqrt(_455)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _481 = clamp(fma(_459 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_459 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _483 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_415, fma(_453, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_417 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_453 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_415, fma(_453, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_417 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_453 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _485 = fma(_469, fp_c1_1._m0[0].w, -6.9831600189208984375);
            float _487 = _485;
            if (_479)
            {
                _487 = fma(_483, -_483, fp_c1_1._m0[1].y) * fma(_483, -_483, fp_c1_1._m0[1].y);
            }
            float _489 = _487;
            if (!_479)
            {
                _489 = 1.0;
            }
            float _491 = (_246 * (1.0 / (_237 + fma(_237, -_473, _473)))) * ((_227 * (1.0 / max(fma(_227 * _227, _471, -_471) + 1.0, fp_c1_1._m0[0].z))) * (_227 * (1.0 / max(fma(_227 * _227, _471, -_471) + 1.0, fp_c1_1._m0[0].z))));
            float _493 = exp2(_469 * _485);
            float _495 = (min(fma(_481, -_481, fp_c1_1._m0[1].y) * fma(_481, -_481, fp_c1_1._m0[1].y), _489) * (exp2(log2(clamp(fma(_477, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_435 * _467, -fp_c10_1._m0[558].z, (_431 * _467) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_465 + (-0.0), 0.0, 1.0);
            float _497 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_211, fp_c10_1._m0[562].z, fma(_445, fp_c10_1._m0[562].y, _217 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _457, 0.5, 0.5), (-fma((fma(_211, fp_c10_1._m0[563].z, fma(_445, fp_c10_1._m0[563].y, _217 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _457, 0.5, 0.5)) + 1.0)).z > fma((fma(_211, fp_c10_1._m0[564].z, fma(_445, fp_c10_1._m0[564].y, _217 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _457, 0.5, 0.5)) || (_459 <= 0.0));
            _303 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _495) * fma(_269, fp_c1_1._m0[1].z, (_491 * (_256 + fma(_256, -_493, _493))) * 0.079577468335628509521484375), _497, _317);
            _305 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _495) * fma(_250, fp_c1_1._m0[1].z, (_491 * (_254 + fma(_254, -_493, _493))) * 0.079577468335628509521484375), _497, _315);
            _307 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _495) * fma(_258, fp_c1_1._m0[1].z, (_491 * (_252 + fma(_252, -_493, _493))) * 0.079577468335628509521484375), _497, _313);
        }
    }
    float _499 = _217 + (-fp_c3_1._m0[11].w);
    float _501 = _80.y;
    float _503 = _211 + (-fp_c3_1._m0[13].w);
    float _505 = fma(_291, _303, _293 * (fma(_260 * (_256 + fma(_256, -_248, _248)), fp_c1_1._m0[1].x, _269 * 0.3183098733425140380859375) * fma(_241, fp_c5_1._m0[5].z, _283)));
    float _507 = _501 + (-fp_c3_1._m0[12].w);
    float _509 = fma(_503, _503, fma(_507, _507, _499 * _499));
    float _511 = clamp(fma(_293 * _291, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _513 = fma(_291, _305, _293 * (fma(_260 * (_254 + fma(_254, -_248, _248)), fp_c1_1._m0[1].x, _250 * 0.3183098733425140380859375) * fma(_241, fp_c5_1._m0[5].y, _277)));
    float _515 = fma(_291, _307, _293 * (fma(_260 * (_252 + fma(_252, -_248, _248)), fp_c1_1._m0[1].x, _258 * 0.3183098733425140380859375) * fma(_241, fp_c5_1._m0[5].x, _279)));
    float _517 = exp2(log2(clamp(sqrt(_509) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_503 * inversesqrt(_509), fp_c5_1._m0[23].z, fma(_507 * inversesqrt(_509), fp_c5_1._m0[23].y, (_499 * inversesqrt(_509)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _519 = clamp(fma(fma(_211, fp_c5_1._m0[14].z, fma(_501, fp_c5_1._m0[14].y, _217 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _521 = fma((-_515) + fp_c5_1._m0[13].x, _519, _515);
    float _523 = fma((-_513) + fp_c5_1._m0[13].y, _519, _513);
    float _525 = fma((-_505) + fp_c5_1._m0[13].z, _519, _505);
    float _527 = clamp((-exp2((clamp(fma(sqrt(_509), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_521) + fma(fma((_517 * fp_c7_1._m0[55].x) * _511, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _527, _521);
    _83.y = fma((-_523) + fma(fma((_517 * fp_c7_1._m0[55].y) * _511, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _527, _523);
    _83.z = fma((-_525) + fma(fma((_517 * fp_c7_1._m0[55].z) * _511, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _527, _525);
    _83.w = 1.0;
}


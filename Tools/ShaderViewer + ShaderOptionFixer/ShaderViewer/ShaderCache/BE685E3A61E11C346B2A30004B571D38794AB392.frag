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
layout(binding = 4) uniform sampler2D fp_tex_tcb_22;
layout(binding = 5) uniform sampler2D fp_tex_tcb_24;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

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
    float _138 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _140 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _142 = inversesqrt(fma(_136, _136, fma(_134, _134, _132 * _132)));
    float _144 = _116 * (-_138);
    float _146 = _118 * (-_138);
    float _148 = 1.0 / (_76.z * gl_FragCoord.w);
    float _150 = _132 * _142;
    float _152 = _134 * _142;
    float _154 = _120 * (-_138);
    float _156 = _136 * _142;
    float _158 = 1.0 / _78.w;
    float _160 = fma(_156, _154, fma(_152, _146, _150 * _144));
    float _162 = max(_160, fp_c1_1._m0[0].z);
    float _164 = fma(_150 * (-_160), -2.0, -_144);
    float _166 = fma(_152 * (-_160), -2.0, -_146);
    float _168 = fma(_156 * (-_160), -2.0, -_154);
    float _170 = 1.0 / max(abs(_168), max(abs(_164), abs(_166)));
    vec2 _172 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _158, 0.5, 0.5), fma(_78.y * _158, -0.5, 0.5))).xy;
    vec2 _174 = texture(fp_tex_tcb_22, vec2(_74.x, _74.y)).xy;
    vec4 _177 = texture(fp_tex_tcb_24, vec2(_74.z, _74.w)).xyzw;
    float _179 = _177.w;
    vec3 _183 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _185 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    vec2 _187 = texture(fp_tex_tcb_38, vec2(_162, (-_140) + (-0.0))).xy;
    float _189 = _187.x;
    float _191 = _187.y;
    vec3 _193 = texture(fp_tex_tcb_36, vec4(_164 * _170, _166 * _170, _168 * _170, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_140 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _195 = _144 + (-fp_c5_1._m0[23].x);
    float _197 = _146 + (-fp_c5_1._m0[23].y);
    float _199 = _154 + (-fp_c5_1._m0[23].z);
    float _201 = inversesqrt(fma(_199, _199, fma(_197, _197, _195 * _195)));
    float _203 = _195 * _201;
    float _205 = _197 * _201;
    float _207 = _199 * _201;
    float _209 = _150 * _152;
    float _211 = _80.z;
    float _213 = _156 * _156;
    float _215 = _150 * _156;
    float _217 = max(fma(_154, _207, fma(_146, _205, _144 * _203)), fp_c1_1._m0[0].z);
    float _219 = _80.x;
    float _221 = _152 * _156;
    float _223 = exp2(_217 * fma(_217, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _225 = _76.w;
    float _227 = fma(_150, _150, -(_152 * _152));
    float _229 = _140 * _140;
    float _231 = fma(_140, 0.5, 0.5);
    float _233 = (_231 * 0.5) * _231;
    int _236 = max(0, min(int(trunc((_211 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _238 = max(fma(_156, _207, fma(_152, _205, _150 * _203)), fp_c1_1._m0[0].z) * max(fma(_156, _207, fma(_152, _205, _150 * _203)), fp_c1_1._m0[0].z);
    float _240 = fma(_152, -fp_c5_1._m0[23].y, _150 * (-fp_c5_1._m0[23].x));
    float _242 = _183.y + fp_c6_1._m0[83].y;
    float _244 = _183.z + fp_c6_1._m0[83].z;
    float _246 = max(fma(_156, -fp_c5_1._m0[23].z, _240), fp_c1_1._m0[0].z);
    uint _249 = uint(int(uint((((int(uint(_236) >> uint(16)) * 20) << 16) + (((_236 & 65535) * 20) + max(0, min(int(trunc((_219 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _251 = fp_c10_1._m0[int(uint(int(_249)) >> uint(2))][int(_249) & 3];
    float _253 = _183.x + fp_c6_1._m0[83].x;
    float _255 = 1.0 / (_233 + fma(_162, -_233, _162));
    float _257 = clamp(_225 * clamp(fma(_174.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _259 = fma(_185, _242 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _261 = fma(_185, _253 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _263 = fma(_185, _244 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _265 = fma(_253, -_185, _253);
    float _267 = ((_177.x * _179) * _225) * 32.0;
    float _269 = ((_177.y * _179) * _225) * 32.0;
    float _271 = ((_177.z * _179) * _225) * 32.0;
    float _273 = fma(_242, -_185, _242);
    float _275 = fma(_244, -_185, _244);
    float _277 = (_255 * (1.0 / (_233 + fma(_233, -_246, _246)))) * ((_229 * (1.0 / max(fma(_238, _229 * _229, -_238) + 1.0, fp_c1_1._m0[0].z))) * (_229 * (1.0 / max(fma(_238, _229 * _229, -_238) + 1.0, fp_c1_1._m0[0].z))));
    float _279 = fma(_261, -_265, _265);
    float _281 = fma(_259, -_273, _273);
    float _283 = fma(_263, -_275, _275);
    float _285 = fma(_279, _267, fma(fma(_261, _189, _191), _193.x, max(0.0, fma(_227, fp_c5_1._m0[31].x, (fma(_156, fp_c5_1._m0[25].z, fma(_152, fp_c5_1._m0[25].y, _150 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_215, fp_c5_1._m0[28].w, fma(_213, fp_c5_1._m0[28].z, fma(_221, fp_c5_1._m0[28].y, _209 * fp_c5_1._m0[28].x))))) * _279));
    float _287 = fma(_281, _269, fma(fma(_259, _189, _191), _193.y, max(0.0, fma(_227, fp_c5_1._m0[31].y, (fma(_156, fp_c5_1._m0[26].z, fma(_152, fp_c5_1._m0[26].y, _150 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_215, fp_c5_1._m0[29].w, fma(_213, fp_c5_1._m0[29].z, fma(_221, fp_c5_1._m0[29].y, _209 * fp_c5_1._m0[29].x))))) * _281));
    float _289 = fma(_283, _271, fma(fma(_263, _189, _191), _193.z, max(0.0, fma(_227, fp_c5_1._m0[31].z, (fma(_156, fp_c5_1._m0[27].z, fma(_152, fp_c5_1._m0[27].y, _150 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_215, fp_c5_1._m0[30].w, fma(_213, fp_c5_1._m0[30].z, fma(_221, fp_c5_1._m0[30].y, _209 * fp_c5_1._m0[30].x))))) * _283));
    float _291 = clamp(fma(_156, -fp_c5_1._m0[23].z, _240), 0.0, 1.0);
    float _293 = clamp((-_257) + 1.0, 0.0, 1.0);
    float _295 = clamp((-fma(_257, fp_c7_1._m0[37].w, clamp(_225 * clamp(fma(_174.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_172.x) + 1.0, (-_172.y) + 1.0), clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _148, (_76.y * gl_FragCoord.w) * _148)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _297 = _287;
    float _299 = _289;
    float _301 = _285;
    float _303 = _289;
    float _305 = _287;
    float _307 = _285;
    if (floatBitsToInt(_251) != (-1))
    {
        int _309 = floatBitsToInt(_251);
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
            float _335 = fp_c10_1._m0[int(uint(_329) >> uint(2))][_329 & 3] + (-_80.y);
            float _337 = (-_211) + fp_c10_1._m0[int(uint(int(_331)) >> uint(2))][int(_331) & 3];
            float _339 = fma(_337, _337, fma(_335, _335, _333 * _333));
            float _341 = _333 * inversesqrt(_339);
            float _343 = _335 * inversesqrt(_339);
            float _345 = _337 * inversesqrt(_339);
            float _347 = _144 + _341;
            float _349 = _146 + _343;
            float _351 = _154 + _345;
            float _353 = inversesqrt(fma(_351, _351, fma(_349, _349, _347 * _347)));
            float _355 = _347 * _353;
            float _357 = _349 * _353;
            float _359 = _351 * _353;
            float _361 = max(fma(_154, _359, fma(_146, _357, _144 * _355)), fp_c1_1._m0[0].z);
            uint _363 = uint(int(uint(_325 + 6880) >> uint(2)));
            int _365 = int(_363) + 1;
            float _367 = max(fma(_156, _359, fma(_152, _357, _150 * _355)), fp_c1_1._m0[0].z) * max(fma(_156, _359, fma(_152, _357, _150 * _355)), fp_c1_1._m0[0].z);
            float _369 = fma(_156, _345, fma(_152, _343, _150 * _341));
            float _371 = max(_369, fp_c1_1._m0[0].z);
            uint _373 = uint(int(uint(_325 + 8320) >> uint(2)));
            float _375 = exp2(_361 * fma(_361, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _377 = (_255 * (1.0 / (_233 + fma(_233, -_371, _371)))) * ((_229 * (1.0 / max(fma(_229 * _229, _367, -_367) + 1.0, fp_c1_1._m0[0].z))) * (_229 * (1.0 / max(fma(_229 * _229, _367, -_367) + 1.0, fp_c1_1._m0[0].z))));
            float _379 = (_259 + fma(_259, -_375, _375)) * _377;
            uint _381 = uint(int(uint(_325 + 6408) >> uint(2)));
            bool _383 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_373)) >> uint(2))][int(_373) & 3]) != 0;
            uint _385 = uint(int(uint(_325 + 6400) >> uint(2)));
            int _387 = int(_385) + 1;
            float _389 = _379;
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
            float _407 = (exp2(fp_c10_1._m0[int(uint(_365) >> uint(2))][_365 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_363)) >> uint(2))][int(_363) & 3], -sqrt(_339), fp_c1_1._m0[1].y), 0.0, 1.0))) * _391) * clamp(_369 + (-0.0), 0.0, 1.0);
            float _409 = fma(fp_c10_1._m0[int(uint(_387) >> uint(2))][_387 & 3] * _407, fma(_273, fp_c1_1._m0[1].z, _379 * 0.079577468335628509521484375), _297);
            float _411 = fma(fp_c10_1._m0[int(uint(int(_381)) >> uint(2))][int(_381) & 3] * _407, fma(_275, fp_c1_1._m0[1].z, ((_263 + fma(_263, -_375, _375)) * _377) * 0.079577468335628509521484375), _299);
            float _413 = fma(fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3] * _407, fma(_265, fp_c1_1._m0[1].z, ((_261 + fma(_261, -_375, _375)) * _377) * 0.079577468335628509521484375), _301);
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
        _303 = _319;
        _305 = _317;
        _307 = _315;
        if ((_309 & 255) == 30)
        {
            float _415 = 1.0 / fp_c10_1._m0[561].y;
            float _417 = _211 + (-fp_c10_1._m0[557].z);
            float _419 = _417 * fp_c10_1._m0[558].x;
            float _421 = (-_219) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_415, fp_c10_1._m0[557].x);
            float _423 = (-_211) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_415, fp_c10_1._m0[557].z);
            float _425 = _421 * _421;
            float _427 = sqrt(fma(_423, _423, _425)) * (-fp_c10_1._m0[558].y);
            float _429 = inversesqrt(fma(_423, _423, fma(_427, _427, _425)));
            float _431 = _421 * _429;
            float _433 = _427 * _429;
            float _435 = _423 * _429;
            float _437 = _219 + (-fp_c10_1._m0[557].x);
            float _439 = _144 + _431;
            float _441 = _146 + _433;
            float _443 = _154 + _435;
            float _445 = _437 * fp_c10_1._m0[558].z;
            float _447 = _80.y;
            float _449 = inversesqrt(fma(_443, _443, fma(_441, _441, _439 * _439)));
            float _451 = _439 * _449;
            float _453 = _441 * _449;
            float _455 = ((-float(_419 < _445)) + float(_419 > _445)) * fp_c10_1._m0[561].y;
            float _457 = fma(_417, _417, _437 * _437);
            float _459 = 1.0 / (fma(_211, fp_c10_1._m0[565].z, fma(_447, fp_c10_1._m0[565].y, _219 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _461 = fma(_417, fp_c10_1._m0[558].z, _437 * fp_c10_1._m0[558].x);
            bool _463 = _461 > 0.0;
            float _465 = fma(_156, _435, fma(_152, _433, _150 * _431));
            float _467 = _443 * _449;
            float _469 = inversesqrt(fma(_435, _435, _431 * _431));
            float _471 = _435;
            if (_463)
            {
                _471 = sqrt(_457);
            }
            float _473 = _471;
            if (!_463)
            {
                _473 = 1.0;
            }
            bool _475 = fma(_417 * inversesqrt(_457), fp_c10_1._m0[558].z, (_437 * inversesqrt(_457)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _477 = max(fma(_156, _467, fma(_152, _453, _150 * _451)), fp_c1_1._m0[0].z) * max(fma(_156, _467, fma(_152, _453, _150 * _451)), fp_c1_1._m0[0].z);
            float _479 = max(fma(_154, _467, fma(_146, _453, _144 * _451)), fp_c1_1._m0[0].z);
            float _481 = max(_465, fp_c1_1._m0[0].z);
            float _483 = clamp(fma(_461 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_461 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _485 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_437, fma(_455, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_417 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_455 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_437, fma(_455, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_417 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_455 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _487 = log2(clamp(fma(_473, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _489 = _487;
            if (_475)
            {
                _489 = fma(_485, -_485, fp_c1_1._m0[1].y) * fma(_485, -_485, fp_c1_1._m0[1].y);
            }
            float _491 = _489;
            if (!_475)
            {
                _491 = 1.0;
            }
            float _493 = exp2(_479 * fma(_479, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _495 = (_255 * (1.0 / (_233 + fma(_233, -_481, _481)))) * ((_229 * (1.0 / max(fma(_229 * _229, _477, -_477) + 1.0, fp_c1_1._m0[0].z))) * (_229 * (1.0 / max(fma(_229 * _229, _477, -_477) + 1.0, fp_c1_1._m0[0].z))));
            float _497 = (min(fma(_483, -_483, fp_c1_1._m0[1].y) * fma(_483, -_483, fp_c1_1._m0[1].y), _491) * (exp2(_487) * exp2(log2(clamp((fma(_435 * _469, -fp_c10_1._m0[558].z, (_431 * _469) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_465 + (-0.0), 0.0, 1.0);
            float _499 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_211, fp_c10_1._m0[562].z, fma(_447, fp_c10_1._m0[562].y, _219 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _459, 0.5, 0.5), (-fma((fma(_211, fp_c10_1._m0[563].z, fma(_447, fp_c10_1._m0[563].y, _219 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _459, 0.5, 0.5)) + 1.0)).z > fma((fma(_211, fp_c10_1._m0[564].z, fma(_447, fp_c10_1._m0[564].y, _219 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _459, 0.5, 0.5)) || (_461 <= 0.0));
            _303 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _497) * fma(_275, fp_c1_1._m0[1].z, ((_263 + fma(_263, -_493, _493)) * _495) * 0.079577468335628509521484375), _499, _319);
            _305 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _497) * fma(_273, fp_c1_1._m0[1].z, ((_259 + fma(_259, -_493, _493)) * _495) * 0.079577468335628509521484375), _499, _317);
            _307 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _497) * fma(_265, fp_c1_1._m0[1].z, ((_261 + fma(_261, -_493, _493)) * _495) * 0.079577468335628509521484375), _499, _315);
        }
    }
    float _501 = _219 + (-fp_c3_1._m0[11].w);
    float _503 = _80.y;
    float _505 = _211 + (-fp_c3_1._m0[13].w);
    float _507 = fma(_293, _303, _295 * (fma(_277 * (_263 + fma(_263, -_223, _223)), fp_c1_1._m0[1].x, _275 * 0.3183098733425140380859375) * fma(_291, fp_c5_1._m0[5].z, _271)));
    float _509 = _503 + (-fp_c3_1._m0[12].w);
    float _511 = fma(_505, _505, fma(_509, _509, _501 * _501));
    float _513 = clamp(fma(_295 * _293, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _515 = fma(_293, _305, _295 * (fma(_277 * (_259 + fma(_259, -_223, _223)), fp_c1_1._m0[1].x, _273 * 0.3183098733425140380859375) * fma(_291, fp_c5_1._m0[5].y, _269)));
    float _517 = fma(_293, _307, _295 * (fma(_277 * (_261 + fma(_261, -_223, _223)), fp_c1_1._m0[1].x, _265 * 0.3183098733425140380859375) * fma(_291, fp_c5_1._m0[5].x, _267)));
    float _519 = exp2(log2(clamp(sqrt(_511) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_505 * inversesqrt(_511), fp_c5_1._m0[23].z, fma(_509 * inversesqrt(_511), fp_c5_1._m0[23].y, (_501 * inversesqrt(_511)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _521 = clamp(fma(fma(_211, fp_c5_1._m0[14].z, fma(_503, fp_c5_1._m0[14].y, _219 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _523 = fma((-_517) + fp_c5_1._m0[13].x, _521, _517);
    float _525 = fma((-_515) + fp_c5_1._m0[13].y, _521, _515);
    float _527 = fma((-_507) + fp_c5_1._m0[13].z, _521, _507);
    float _529 = clamp((-exp2((clamp(fma(sqrt(_511), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_523) + fma(fma((_519 * fp_c7_1._m0[55].x) * _513, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _529, _523);
    _83.y = fma((-_525) + fma(fma((_519 * fp_c7_1._m0[55].y) * _513, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _529, _525);
    _83.z = fma((-_527) + fma(fma((_519 * fp_c7_1._m0[55].z) * _513, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _529, _527);
    _83.w = 1.0;
}


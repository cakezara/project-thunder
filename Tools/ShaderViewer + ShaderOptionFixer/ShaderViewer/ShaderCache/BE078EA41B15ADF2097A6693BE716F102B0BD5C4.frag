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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
layout(binding = 5) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 6) uniform sampler2D fp_tex_tcb_22;
layout(binding = 7) uniform sampler2D fp_tex_tcb_24;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 3) in vec4 _70;
layout(location = 5) in vec4 _72;
layout(location = 7) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 4) in vec4 _78;
layout(location = 6) in vec4 _80;
layout(location = 0) out vec4 _83;
uint _6[12];

void main()
{
    bool _333 = false;
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
    float _144 = _118 * (-_138);
    float _146 = _120 * (-_138);
    float _148 = _132 * _140;
    float _150 = _134 * _140;
    float _152 = _136 * _140;
    float _154 = fma(_152, _146, fma(_150, _144, _148 * _142));
    float _156 = fma(floor(fp_c7_1._m0[20].w * fp_c6_1._m0[86].z), fp_c1_1._m0[1].x, _92);
    float _158 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _160 = fma(_148 * (-_154), -2.0, -_142);
    float _162 = fma(_150 * (-_154), -2.0, -_144);
    float _164 = fma(_152 * (-_154), -2.0, -_146);
    float _166 = max(_154, fp_c1_1._m0[0].z);
    float _168 = 1.0 / max(abs(_164), max(abs(_160), abs(_162)));
    vec2 _170 = texture(fp_tex_tcb_1C, vec2(fma(floor(_90), -fp_c6_1._m0[86].x, _90), fma((-_92) + (_156 + (-floor(_156))), fp_c6_1._m0[86].x, _92))).xy;
    float _172 = _170.y;
    vec3 _176 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _178 = _176.x;
    float _180 = _176.y;
    float _182 = _176.z;
    float _184 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    vec4 _187 = texture(fp_tex_tcb_24, vec2(_74.z, _74.w)).xyzw;
    float _189 = _187.w;
    vec2 _191 = texture(fp_tex_tcb_22, vec2(_74.x, _74.y)).xy;
    vec2 _193 = texture(fp_tex_tcb_38, vec2(_166, (-_158) + (-0.0))).xy;
    float _195 = _193.x;
    float _197 = _193.y;
    vec3 _199 = texture(fp_tex_tcb_36, vec4(_160 * _168, _162 * _168, _164 * _168, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_158 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _201 = texture(fp_tex_tcb_14, vec2(_90, _92)).xyz;
    float _203 = _152 * _152;
    float _205 = _146 + (-fp_c5_1._m0[23].z);
    float _207 = _142 + (-fp_c5_1._m0[23].x);
    float _209 = _144 + (-fp_c5_1._m0[23].y);
    float _211 = _148 * _150;
    float _213 = inversesqrt(fma(_205, _205, fma(_209, _209, _207 * _207)));
    float _215 = _78.z;
    float _217 = sin(floor(fma(fma(floor(_92 * 6.0), fp_c1_1._m0[1].x, sqrt(fma(_76.z, _76.z, fma(_76.y, _76.y, _76.x * _76.x)))), fp_c1_1._m0[1].y, fma(floor(_90 * 5.0), 0.20000000298023223876953125, fp_c6_1._m0[86].y) * 43.221500396728515625)) + 32.221401214599609375) * 78.6631011962890625;
    float _219 = _207 * _213;
    float _221 = _209 * _213;
    float _223 = _205 * _213;
    float _225 = _78.x;
    float _227 = _150 * _152;
    float _229 = _148 * _152;
    float _231 = fma(_148, _148, -(_150 * _150));
    float _233 = float((_217 + (-floor(_217))) <= fp_c1_1._m0[1].w);
    float _235 = fma(_150, -fp_c5_1._m0[23].y, _148 * (-fp_c5_1._m0[23].x));
    float _237 = max(fma(_146, _223, fma(_144, _221, _142 * _219)), fp_c1_1._m0[0].z);
    float _239 = _158 * _158;
    float _241 = fma(fma(_172, -_233, _170.x), fp_c6_1._m0[86].x, _172 * _233);
    float _243 = max(fma(_152, _223, fma(_150, _221, _148 * _219)), fp_c1_1._m0[0].z) * max(fma(_152, _223, fma(_150, _221, _148 * _219)), fp_c1_1._m0[0].z);
    float _245 = _239 * _239;
    float _247 = fma(_158, 0.5, 0.5);
    float _249 = max(fma(_152, -fp_c5_1._m0[23].z, _235), fp_c1_1._m0[0].z);
    float _251 = (_247 * 0.5) * _247;
    float _253 = exp2(_237 * fma(_237, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _255 = 1.0 / (_251 + fma(_166, -_251, _166));
    int _258 = max(0, min(int(trunc((_215 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _260 = fma(_184, _180 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _262 = fma(_178, -_184, _178);
    float _264 = fma(_184, _178 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _266 = fma(_184, _182 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _268 = fma(_180, -_184, _180);
    float _270 = (_255 * (1.0 / (_251 + fma(_251, -_249, _249)))) * ((_239 * (1.0 / max(fma(_243, _245, -_243) + 1.0, fp_c1_1._m0[0].z))) * (_239 * (1.0 / max(fma(_243, _245, -_243) + 1.0, fp_c1_1._m0[0].z))));
    float _272 = fma(_182, -_184, _182);
    float _274 = _80.w;
    uint _277 = uint(int(uint((((int(uint(_258) >> uint(16)) * 20) << 16) + (((_258 & 65535) * 20) + max(0, min(int(trunc((_225 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _279 = fp_c10_1._m0[int(uint(int(_277)) >> uint(2))][int(_277) & 3];
    float _281 = fma(_264, -_262, _262);
    float _283 = fma(_260, -_268, _268);
    float _285 = fma(_266, -_272, _272);
    float _287 = clamp(_274 * clamp(fma(_191.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _289 = ((_187.x * _189) * _274) * 32.0;
    float _291 = ((_187.y * _189) * _274) * 32.0;
    float _293 = ((_187.z * _189) * _274) * 32.0;
    float _295 = clamp(fma(_152, -fp_c5_1._m0[23].z, _235), 0.0, 1.0);
    float _297 = fma(_281, _289, fma(_199.x, fma(_264, _195, _197), max(0.0, fma(_231, fp_c5_1._m0[31].x, (fma(_152, fp_c5_1._m0[25].z, fma(_150, fp_c5_1._m0[25].y, _148 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_229, fp_c5_1._m0[28].w, fma(_203, fp_c5_1._m0[28].z, fma(_227, fp_c5_1._m0[28].y, _211 * fp_c5_1._m0[28].x))))) * _281));
    float _299 = fma(_283, _291, fma(_199.y, fma(_260, _195, _197), max(0.0, fma(_231, fp_c5_1._m0[31].y, (fma(_152, fp_c5_1._m0[26].z, fma(_150, fp_c5_1._m0[26].y, _148 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_229, fp_c5_1._m0[29].w, fma(_203, fp_c5_1._m0[29].z, fma(_227, fp_c5_1._m0[29].y, _211 * fp_c5_1._m0[29].x))))) * _283));
    float _301 = fma(_285, _293, fma(_199.z, fma(_266, _195, _197), max(0.0, fma(_231, fp_c5_1._m0[31].z, (fma(_152, fp_c5_1._m0[27].z, fma(_150, fp_c5_1._m0[27].y, _148 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_229, fp_c5_1._m0[30].w, fma(_203, fp_c5_1._m0[30].z, fma(_227, fp_c5_1._m0[30].y, _211 * fp_c5_1._m0[30].x))))) * _285));
    float _303 = clamp((-_287) + 1.0, 0.0, 1.0);
    float _305 = clamp((-fma(_287, fp_c7_1._m0[37].w, clamp(_274 * clamp(fma(_191.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    float _307 = _299;
    float _309 = _301;
    float _311 = _297;
    float _313 = _297;
    float _315 = _301;
    float _317 = _299;
    if (floatBitsToInt(_279) != (-1))
    {
        int _319 = floatBitsToInt(_279);
        int _321 = 0;
        float _325;
        float _327;
        float _329;
        int _415;
        do
        {
            int _323 = _319 & 255;
            _325 = _311;
            _327 = _307;
            _329 = _309;
            _333 = uint(_323) >= 30u;
            if (_333)
            {
                break;
            }
            int _335 = _323 << 4;
            uint _337 = uint(int(uint(_335 + 7360) >> uint(2)));
            int _339 = int(_337) + 1;
            uint _341 = uint(int(uint(_335 + 7368) >> uint(2)));
            float _343 = (-_225) + fp_c10_1._m0[int(uint(int(_337)) >> uint(2))][int(_337) & 3];
            float _345 = fp_c10_1._m0[int(uint(_339) >> uint(2))][_339 & 3] + (-_78.y);
            float _347 = (-_215) + fp_c10_1._m0[int(uint(int(_341)) >> uint(2))][int(_341) & 3];
            float _349 = fma(_347, _347, fma(_345, _345, _343 * _343));
            float _351 = _343 * inversesqrt(_349);
            float _353 = _345 * inversesqrt(_349);
            float _355 = _347 * inversesqrt(_349);
            float _357 = _142 + _351;
            float _359 = _144 + _353;
            float _361 = _146 + _355;
            uint _363 = uint(int(uint(_335 + 6880) >> uint(2)));
            int _365 = int(_363) + 1;
            float _367 = inversesqrt(fma(_361, _361, fma(_359, _359, _357 * _357)));
            float _369 = _357 * _367;
            float _371 = _359 * _367;
            float _373 = _361 * _367;
            float _375 = fma(_152, _355, fma(_150, _353, _148 * _351));
            float _377 = max(_375, fp_c1_1._m0[0].z);
            float _379 = max(fma(_146, _373, fma(_144, _371, _142 * _369)), fp_c1_1._m0[0].z);
            float _381 = max(fma(_152, _373, fma(_150, _371, _148 * _369)), fp_c1_1._m0[0].z) * max(fma(_152, _373, fma(_150, _371, _148 * _369)), fp_c1_1._m0[0].z);
            uint _383 = uint(int(uint(_335 + 8320) >> uint(2)));
            uint _385 = uint(int(uint(_335 + 6400) >> uint(2)));
            int _387 = int(_385) + 1;
            uint _389 = uint(int(uint(_335 + 6408) >> uint(2)));
            float _391 = exp2(_379 * fma(_379, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _393 = (_255 * (1.0 / (_251 + fma(_251, -_377, _377)))) * ((_239 * (1.0 / max(fma(_245, _381, -_381) + 1.0, fp_c1_1._m0[0].z))) * (_239 * (1.0 / max(fma(_245, _381, -_381) + 1.0, fp_c1_1._m0[0].z))));
            bool _395 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_383)) >> uint(2))][int(_383) & 3]) != 0;
            float _397 = (_260 + fma(_260, -_391, _391)) * _393;
            float _399 = _397;
            if (!_395)
            {
                _399 = 1.0;
            }
            float _401 = _399;
            if (_395)
            {
                uint _403 = uint(int(uint(_335 + 7840) >> uint(2)));
                int _405 = int(_403) + 1;
                uint _407 = uint(int(uint(_335 + 6888) >> uint(2)));
                float _409 = fp_c10_1._m0[int(uint(int(_407)) >> uint(2))][int(_407) & 3];
                int _411 = int(_407) + 1;
                uint _413 = uint(int(uint(_335 + 7848) >> uint(2)));
                _401 = exp2(fp_c10_1._m0[int(uint(_411) >> uint(2))][_411 & 3] * log2(clamp(((-_409) + fma(_355, -fp_c10_1._m0[int(uint(int(_413)) >> uint(2))][int(_413) & 3], fma(_353, -fp_c10_1._m0[int(uint(_405) >> uint(2))][_405 & 3], _351 * (-fp_c10_1._m0[int(uint(int(_403)) >> uint(2))][int(_403) & 3])))) * (1.0 / ((-_409) + 1.0)), 0.0, 1.0)));
            }
            _415 = _321 + 1;
            float _417 = (exp2(fp_c10_1._m0[int(uint(_365) >> uint(2))][_365 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_363)) >> uint(2))][int(_363) & 3], -sqrt(_349), fp_c1_1._m0[2].x), 0.0, 1.0))) * _401) * clamp(_375 + (-0.0), 0.0, 1.0);
            float _419 = fma(fp_c10_1._m0[int(uint(_387) >> uint(2))][_387 & 3] * _417, fma(_268, fp_c1_1._m0[2].y, _397 * 0.079577468335628509521484375), _307);
            float _421 = fma(fp_c10_1._m0[int(uint(int(_389)) >> uint(2))][int(_389) & 3] * _417, fma(_272, fp_c1_1._m0[2].y, ((_266 + fma(_266, -_391, _391)) * _393) * 0.079577468335628509521484375), _309);
            float _423 = fma(fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3] * _417, fma(_262, fp_c1_1._m0[2].y, ((_264 + fma(_264, -_391, _391)) * _393) * 0.079577468335628509521484375), _311);
            _319 = int(uint(_319) >> uint(8));
            _321 = _415;
            _307 = _419;
            _309 = _421;
            _311 = _423;
            _325 = _423;
            _327 = _419;
            _329 = _421;
        } while (!(_415 >= 4));
        _333 = false;
        _313 = _325;
        _315 = _329;
        _317 = _327;
        if ((_319 & 255) == 30)
        {
            float _425 = _78.y;
            float _427 = 1.0 / (fma(_215, fp_c10_1._m0[565].z, fma(_425, fp_c10_1._m0[565].y, _225 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _429 = 1.0 / fp_c10_1._m0[561].y;
            float _431 = _215 + (-fp_c10_1._m0[557].z);
            float _433 = (-_225) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_429, fp_c10_1._m0[557].x);
            float _435 = (-_215) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_429, fp_c10_1._m0[557].z);
            float _437 = _433 * _433;
            float _439 = sqrt(fma(_435, _435, _437)) * (-fp_c10_1._m0[558].y);
            float _441 = inversesqrt(fma(_435, _435, fma(_439, _439, _437)));
            float _443 = _433 * _441;
            float _445 = _439 * _441;
            float _447 = _435 * _441;
            float _449 = _225 + (-fp_c10_1._m0[557].x);
            float _451 = _431 * fp_c10_1._m0[558].x;
            float _453 = _142 + _443;
            float _455 = _144 + _445;
            float _457 = _146 + _447;
            float _459 = _449 * fp_c10_1._m0[558].z;
            float _461 = inversesqrt(fma(_457, _457, fma(_455, _455, _453 * _453)));
            float _463 = fma(_431, _431, _449 * _449);
            float _465 = fma(_152, _447, fma(_150, _445, _148 * _443));
            float _467 = _453 * _461;
            float _469 = _455 * _461;
            float _471 = _457 * _461;
            float _473 = ((-float(_451 < _459)) + float(_451 > _459)) * fp_c10_1._m0[561].y;
            float _475 = inversesqrt(fma(_447, _447, _443 * _443));
            float _477 = max(fma(_146, _471, fma(_144, _469, _142 * _467)), fp_c1_1._m0[0].z);
            float _479 = fma(_431, fp_c10_1._m0[558].z, _449 * fp_c10_1._m0[558].x);
            float _481 = max(fma(_152, _471, fma(_150, _469, _148 * _467)), fp_c1_1._m0[0].z) * max(fma(_152, _471, fma(_150, _469, _148 * _467)), fp_c1_1._m0[0].z);
            bool _483 = _479 > 0.0;
            float _485 = _443 * _475;
            float _487 = _485;
            float _489 = _471;
            if (_483)
            {
                _487 = sqrt(_463);
            }
            float _491 = _487;
            if (!_483)
            {
                _491 = 1.0;
            }
            bool _493 = fma(_431 * inversesqrt(_463), fp_c10_1._m0[558].z, (_449 * inversesqrt(_463)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _495 = max(_465, fp_c1_1._m0[0].z);
            float _497 = clamp(fma(_479 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[2].x), 0.0, 1.0) * clamp(fma(_479 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[2].x), 0.0, 1.0);
            if (!_493)
            {
                _489 = 1.0;
            }
            float _499 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_449, fma(_473, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_431 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_473 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_449, fma(_473, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_431 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_473 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _501 = _489;
            if (_493)
            {
                _501 = fma(_499, -_499, fp_c1_1._m0[2].x) * fma(_499, -_499, fp_c1_1._m0[2].x);
            }
            float _503 = exp2(_477 * fma(_477, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _505 = (_255 * (1.0 / (_251 + fma(_251, -_495, _495)))) * ((_239 * (1.0 / max(fma(_245, _481, -_481) + 1.0, fp_c1_1._m0[0].z))) * (_239 * (1.0 / max(fma(_245, _481, -_481) + 1.0, fp_c1_1._m0[0].z))));
            float _507 = (min(fma(_497, -_497, fp_c1_1._m0[2].x) * fma(_497, -_497, fp_c1_1._m0[2].x), _501) * (exp2(log2(clamp(fma(_491, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_447 * _475, -fp_c10_1._m0[558].z, _485 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_465 + (-0.0), 0.0, 1.0);
            float _509 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_215, fp_c10_1._m0[562].z, fma(_425, fp_c10_1._m0[562].y, _225 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _427, 0.5, 0.5), (-fma((fma(_215, fp_c10_1._m0[563].z, fma(_425, fp_c10_1._m0[563].y, _225 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _427, 0.5, 0.5)) + 1.0)).z > fma((fma(_215, fp_c10_1._m0[564].z, fma(_425, fp_c10_1._m0[564].y, _225 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _427, 0.5, 0.5)) || (_479 <= 0.0));
            _313 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _507) * fma(_262, fp_c1_1._m0[2].y, ((_264 + fma(_264, -_503, _503)) * _505) * 0.079577468335628509521484375), _509, _325);
            _315 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _507) * fma(_272, fp_c1_1._m0[2].y, ((_266 + fma(_266, -_503, _503)) * _505) * 0.079577468335628509521484375), _509, _329);
            _317 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _507) * fma(_268, fp_c1_1._m0[2].y, ((_260 + fma(_260, -_503, _503)) * _505) * 0.079577468335628509521484375), _509, _327);
        }
    }
    float _511 = _225 + (-fp_c3_1._m0[11].w);
    float _513 = _215 + (-fp_c3_1._m0[13].w);
    float _515 = _78.y + (-fp_c3_1._m0[12].w);
    float _517 = fma(_513, _513, fma(_515, _515, _511 * _511));
    float _519 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _521 = clamp(fma(_305 * _303, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _523 = exp2(fma(fma(_513 * inversesqrt(_517), fp_c5_1._m0[23].z, fma(_515 * inversesqrt(_517), fp_c5_1._m0[23].y, (_511 * inversesqrt(_517)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_517) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _525 = fma(_241 * (fma(fp_c6_1._m0[14].x + (-fp_c6_1._m0[12].x), fp_c7_1._m0[52].w, fp_c6_1._m0[12].x) * _201.x), _519, fma(_303, _313, _305 * (fma(_270 * (_264 + fma(_264, -_253, _253)), fp_c1_1._m0[1].z, _262 * 0.3183098733425140380859375) * fma(_295, fp_c5_1._m0[5].x, _289))));
    float _527 = clamp((-exp2((clamp(fma(sqrt(_517), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    float _529 = fma(_241 * (fma(fp_c6_1._m0[14].y + (-fp_c6_1._m0[12].y), fp_c7_1._m0[52].w, fp_c6_1._m0[12].y) * _201.y), _519, fma(_303, _317, _305 * (fma(_270 * (_260 + fma(_260, -_253, _253)), fp_c1_1._m0[1].z, _268 * 0.3183098733425140380859375) * fma(_295, fp_c5_1._m0[5].y, _291))));
    float _531 = fma(_241 * (fma(fp_c6_1._m0[14].z + (-fp_c6_1._m0[12].z), fp_c7_1._m0[52].w, fp_c6_1._m0[12].z) * _201.z), _519, fma(_303, _315, _305 * (fma(_270 * (_266 + fma(_266, -_253, _253)), fp_c1_1._m0[1].z, _272 * 0.3183098733425140380859375) * fma(_295, fp_c5_1._m0[5].z, _293))));
    _83.x = fma(fma(fma((_523 * fp_c7_1._m0[55].x) * _521, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_525), _527, _525);
    _83.y = fma(fma(fma((_523 * fp_c7_1._m0[55].y) * _521, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_529), _527, _529);
    _83.z = fma(fma(fma((_523 * fp_c7_1._m0[55].z) * _521, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_531), _527, _531);
    _83.w = 1.0;
}


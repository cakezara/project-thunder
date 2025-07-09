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
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
layout(binding = 6) uniform sampler2D fp_tex_tcb_22;
layout(binding = 7) uniform sampler2D fp_tex_tcb_24;
layout(binding = 8) uniform sampler2D fp_tex_tcb_28;
layout(binding = 9) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 10) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 11) uniform sampler2D fp_tex_tcb_38;
layout(binding = 12) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 2) in vec4 _74;
layout(location = 4) in vec4 _76;
layout(location = 6) in vec4 _78;
layout(location = 7) in vec4 _80;
layout(location = 5) in vec4 _82;
layout(location = 3) in vec4 _84;
layout(location = 0) out vec4 _87;
uint _6[12];

void main()
{
    bool _331 = false;
    float _94 = _70.x;
    float _96 = _70.y;
    vec2 _100 = texture(fp_tex_tcb_E, vec2(_94, _96)).xy;
    float _102 = _100.x;
    float _104 = _100.y;
    float _106 = _72.x;
    float _108 = _72.y;
    float _110 = _72.z;
    float _112 = _74.y;
    float _114 = _74.z;
    float _116 = _74.x;
    float _118 = _74.w;
    float _120 = _76.x;
    float _122 = _76.y;
    float _124 = _76.z;
    float _126 = 1.0 / (_78.z * gl_FragCoord.w);
    float _128 = inversesqrt(fma(_110, _110, fma(_108, _108, _106 * _106)));
    float _130 = _110 * _128;
    float _132 = _106 * _128;
    float _134 = _108 * _128;
    float _136 = sqrt(clamp((-fma(_102, _102, _104 * _104)) + 1.0, 0.0, 1.0));
    float _138 = fma(_132, _136, fma(_102, _116, _104 * (fma(_134, _114, -(_130 * _112)) * _118)));
    float _140 = fma(_134, _136, fma(_102, _112, _104 * (fma(_130, _116, -(_132 * _114)) * _118)));
    float _142 = fma(_130, _136, fma(_102, _114, _104 * (fma(_132, _112, -(_134 * _116)) * _118)));
    float _144 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _146 = _120 * (-_144);
    float _148 = _122 * (-_144);
    float _150 = inversesqrt(fma(_142, _142, fma(_140, _140, _138 * _138)));
    float _152 = _124 * (-_144);
    float _154 = _138 * _150;
    float _156 = _140 * _150;
    float _158 = 1.0 / _82.w;
    float _160 = _142 * _150;
    float _162 = fma(_160, _152, fma(_156, _148, _154 * _146));
    float _164 = max(texture(fp_tex_tcb_10, vec2(_94, _96)).x, fp_c1_1._m0[0].x);
    float _166 = max(_162, fp_c1_1._m0[0].z);
    float _168 = fma(_154 * (-_162), -2.0, -_146);
    float _170 = fma(_156 * (-_162), -2.0, -_148);
    float _172 = fma(_160 * (-_162), -2.0, -_152);
    float _174 = 1.0 / max(abs(_172), max(abs(_168), abs(_170)));
    vec2 _176 = texture(fp_tex_tcb_2A, vec2(fma(_82.x * _158, 0.5, 0.5), fma(_82.y * _158, -0.5, 0.5))).xy;
    vec2 _178 = texture(fp_tex_tcb_22, vec2(_80.x, _80.y)).xy;
    vec4 _181 = texture(fp_tex_tcb_24, vec2(_80.z, _80.w)).xyzw;
    float _183 = _181.w;
    vec3 _187 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _189 = _187.x;
    float _191 = _187.y;
    float _193 = _187.z;
    float _195 = texture(fp_tex_tcb_12, vec2(_94, _96)).x;
    vec2 _197 = texture(fp_tex_tcb_38, vec2(_166, (-_164) + (-0.0))).xy;
    float _199 = _197.x;
    float _201 = _197.y;
    vec3 _203 = texture(fp_tex_tcb_36, vec4(_168 * _174, _170 * _174, _172 * _174, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_164 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _205 = texture(fp_tex_tcb_14, vec2(_94, _96)).xyz;
    float _207 = _154 * _156;
    float _209 = _156 * _160;
    float _211 = fma(_164, 0.5, 0.5);
    float _213 = _160 * _160;
    float _215 = _78.w;
    float _217 = _154 * _160;
    float _219 = _146 + (-fp_c5_1._m0[23].x);
    float _221 = _148 + (-fp_c5_1._m0[23].y);
    float _223 = _152 + (-fp_c5_1._m0[23].z);
    float _225 = _84.x;
    float _227 = inversesqrt(fma(_223, _223, fma(_221, _221, _219 * _219)));
    float _229 = _84.z;
    float _231 = fma(_154, _154, -(_156 * _156));
    float _233 = _219 * _227;
    float _235 = _223 * _227;
    float _237 = _221 * _227;
    float _239 = clamp(_215 * clamp(fma(_178.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _241 = _164 * _164;
    float _243 = _241 * _241;
    float _245 = fma(_156, -fp_c5_1._m0[23].y, _154 * (-fp_c5_1._m0[23].x));
    float _247 = ((_181.z * _183) * _215) * 32.0;
    float _249 = (_211 * 0.5) * _211;
    float _251 = max(fma(_160, _235, fma(_156, _237, _154 * _233)), fp_c1_1._m0[0].z) * max(fma(_160, _235, fma(_156, _237, _154 * _233)), fp_c1_1._m0[0].z);
    int _254 = max(0, min(int(trunc((_229 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _256 = clamp(fma(_160, -fp_c5_1._m0[23].z, _245), 0.0, 1.0);
    float _258 = max(fma(_160, -fp_c5_1._m0[23].z, _245), fp_c1_1._m0[0].z);
    float _260 = 1.0 / (_249 + fma(_166, -_249, _166));
    float _262 = max(fma(_152, _235, fma(_148, _237, _146 * _233)), fp_c1_1._m0[0].z);
    float _264 = clamp((-((-texture(fp_tex_tcb_18, vec2(_94, _96)).x) + _239)) + (-0.0), 0.0, 1.0);
    float _266 = fma(_193, -_195, _193);
    uint _269 = uint(int(uint((((int(uint(_254) >> uint(16)) * 20) << 16) + (((_254 & 65535) * 20) + max(0, min(int(trunc((_225 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _271 = fp_c10_1._m0[int(uint(int(_269)) >> uint(2))][int(_269) & 3];
    float _273 = fma(_195, _189 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _275 = exp2(_262 * fma(_262, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _277 = fma(_195, _191 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _279 = fma(_191, -_195, _191);
    float _281 = (_260 * (1.0 / (_249 + fma(_249, -_258, _258)))) * ((_241 * (1.0 / max(fma(_251, _243, -_251) + 1.0, fp_c1_1._m0[0].z))) * (_241 * (1.0 / max(fma(_251, _243, -_251) + 1.0, fp_c1_1._m0[0].z))));
    float _283 = clamp((-fma(_239, fp_c7_1._m0[37].w, fma(max((-_176.x) + 1.0, (-_176.y) + 1.0), clamp(_84.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_78.x * gl_FragCoord.w) * _126, (_78.y * gl_FragCoord.w) * _126)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)) + clamp(_215 * clamp(fma(_178.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    float _285 = fma(_277, -_279, _279);
    float _287 = fma(_195, _193 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _289 = fma(_189, -_195, _189);
    float _291 = fma(_287, -_266, _266);
    float _293 = fma(_273, -_289, _289);
    float _295 = ((_181.x * _183) * _215) * 32.0;
    float _297 = ((_181.y * _183) * _215) * 32.0;
    float _299 = fma(_291, _247, fma(_203.z, fma(_287, _199, _201), max(0.0, fma(_231, fp_c5_1._m0[31].z, (fma(_160, fp_c5_1._m0[27].z, fma(_156, fp_c5_1._m0[27].y, _154 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_217, fp_c5_1._m0[30].w, fma(_213, fp_c5_1._m0[30].z, fma(_209, fp_c5_1._m0[30].y, _207 * fp_c5_1._m0[30].x))))) * _291));
    float _301 = fma(_293, _295, fma(_203.x, fma(_273, _199, _201), max(0.0, fma(_231, fp_c5_1._m0[31].x, (fma(_160, fp_c5_1._m0[25].z, fma(_156, fp_c5_1._m0[25].y, _154 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_217, fp_c5_1._m0[28].w, fma(_213, fp_c5_1._m0[28].z, fma(_209, fp_c5_1._m0[28].y, _207 * fp_c5_1._m0[28].x))))) * _293));
    float _303 = fma(_285, _297, fma(_203.y, fma(_277, _199, _201), max(0.0, fma(_231, fp_c5_1._m0[31].y, (fma(_160, fp_c5_1._m0[26].z, fma(_156, fp_c5_1._m0[26].y, _154 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_217, fp_c5_1._m0[29].w, fma(_213, fp_c5_1._m0[29].z, fma(_209, fp_c5_1._m0[29].y, _207 * fp_c5_1._m0[29].x))))) * _285));
    float _305 = _299;
    float _307 = _301;
    float _309 = _303;
    float _311 = _303;
    float _313 = _301;
    float _315 = _299;
    if (floatBitsToInt(_271) != (-1))
    {
        int _317 = floatBitsToInt(_271);
        int _319 = 0;
        float _323;
        float _325;
        float _327;
        int _413;
        do
        {
            int _321 = _317 & 255;
            _323 = _307;
            _325 = _309;
            _327 = _305;
            _331 = uint(_321) >= 30u;
            if (_331)
            {
                break;
            }
            int _333 = _321 << 4;
            uint _335 = uint(int(uint(_333 + 7360) >> uint(2)));
            int _337 = int(_335) + 1;
            uint _339 = uint(int(uint(_333 + 7368) >> uint(2)));
            float _341 = (-_225) + fp_c10_1._m0[int(uint(int(_335)) >> uint(2))][int(_335) & 3];
            float _343 = fp_c10_1._m0[int(uint(_337) >> uint(2))][_337 & 3] + (-_84.y);
            float _345 = (-_229) + fp_c10_1._m0[int(uint(int(_339)) >> uint(2))][int(_339) & 3];
            float _347 = fma(_345, _345, fma(_343, _343, _341 * _341));
            float _349 = _341 * inversesqrt(_347);
            float _351 = _343 * inversesqrt(_347);
            float _353 = _345 * inversesqrt(_347);
            float _355 = _146 + _349;
            float _357 = _148 + _351;
            float _359 = _152 + _353;
            uint _361 = uint(int(uint(_333 + 6880) >> uint(2)));
            int _363 = int(_361) + 1;
            float _365 = inversesqrt(fma(_359, _359, fma(_357, _357, _355 * _355)));
            float _367 = _355 * _365;
            float _369 = _357 * _365;
            float _371 = _359 * _365;
            float _373 = fma(_160, _353, fma(_156, _351, _154 * _349));
            float _375 = max(_373, fp_c1_1._m0[0].z);
            uint _377 = uint(int(uint(_333 + 8320) >> uint(2)));
            float _379 = max(fma(_152, _371, fma(_148, _369, _146 * _367)), fp_c1_1._m0[0].z);
            float _381 = max(fma(_160, _371, fma(_156, _369, _154 * _367)), fp_c1_1._m0[0].z) * max(fma(_160, _371, fma(_156, _369, _154 * _367)), fp_c1_1._m0[0].z);
            uint _383 = uint(int(uint(_333 + 6408) >> uint(2)));
            uint _385 = uint(int(uint(_333 + 6400) >> uint(2)));
            int _387 = int(_385) + 1;
            float _389 = exp2(_379 * fma(_379, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _391 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_377)) >> uint(2))][int(_377) & 3]) != 0;
            float _393 = (_260 * (1.0 / (_249 + fma(_249, -_375, _375)))) * ((_241 * (1.0 / max(fma(_243, _381, -_381) + 1.0, fp_c1_1._m0[0].z))) * (_241 * (1.0 / max(fma(_243, _381, -_381) + 1.0, fp_c1_1._m0[0].z))));
            float _395 = _287 + fma(_287, -_389, _389);
            float _397 = _395;
            if (!_391)
            {
                _397 = 1.0;
            }
            float _399 = _397;
            if (_391)
            {
                uint _401 = uint(int(uint(_333 + 7840) >> uint(2)));
                int _403 = int(_401) + 1;
                uint _405 = uint(int(uint(_333 + 6888) >> uint(2)));
                float _407 = fp_c10_1._m0[int(uint(int(_405)) >> uint(2))][int(_405) & 3];
                int _409 = int(_405) + 1;
                uint _411 = uint(int(uint(_333 + 7848) >> uint(2)));
                _399 = exp2(fp_c10_1._m0[int(uint(_409) >> uint(2))][_409 & 3] * log2(clamp(((-_407) + fma(_353, -fp_c10_1._m0[int(uint(int(_411)) >> uint(2))][int(_411) & 3], fma(_351, -fp_c10_1._m0[int(uint(_403) >> uint(2))][_403 & 3], _349 * (-fp_c10_1._m0[int(uint(int(_401)) >> uint(2))][int(_401) & 3])))) * (1.0 / ((-_407) + 1.0)), 0.0, 1.0)));
            }
            _413 = _319 + 1;
            float _415 = (exp2(fp_c10_1._m0[int(uint(_363) >> uint(2))][_363 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_361)) >> uint(2))][int(_361) & 3], -sqrt(_347), fp_c1_1._m0[1].y), 0.0, 1.0))) * _399) * clamp(_373 + (-0.0), 0.0, 1.0);
            float _417 = fma(fp_c10_1._m0[int(uint(int(_383)) >> uint(2))][int(_383) & 3] * _415, fma(_266, fp_c1_1._m0[1].z, (_395 * _393) * 0.079577468335628509521484375), _305);
            float _419 = fma(fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3] * _415, fma(_289, fp_c1_1._m0[1].z, ((_273 + fma(_273, -_389, _389)) * _393) * 0.079577468335628509521484375), _307);
            float _421 = fma(fp_c10_1._m0[int(uint(_387) >> uint(2))][_387 & 3] * _415, fma(_279, fp_c1_1._m0[1].z, ((_277 + fma(_277, -_389, _389)) * _393) * 0.079577468335628509521484375), _309);
            _317 = int(uint(_317) >> uint(8));
            _319 = _413;
            _305 = _417;
            _307 = _419;
            _309 = _421;
            _323 = _419;
            _325 = _421;
            _327 = _417;
        } while (!(_413 >= 4));
        _331 = false;
        _311 = _325;
        _313 = _323;
        _315 = _327;
        if ((_317 & 255) == 30)
        {
            float _423 = _84.y;
            float _425 = 1.0 / (fma(_229, fp_c10_1._m0[565].z, fma(_423, fp_c10_1._m0[565].y, _225 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _427 = 1.0 / fp_c10_1._m0[561].y;
            float _429 = _229 + (-fp_c10_1._m0[557].z);
            float _431 = _429 * fp_c10_1._m0[558].x;
            float _433 = (-_225) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_427, fp_c10_1._m0[557].x);
            float _435 = (-_229) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_427, fp_c10_1._m0[557].z);
            float _437 = _433 * _433;
            float _439 = sqrt(fma(_435, _435, _437)) * (-fp_c10_1._m0[558].y);
            float _441 = inversesqrt(fma(_435, _435, fma(_439, _439, _437)));
            float _443 = _433 * _441;
            float _445 = _439 * _441;
            float _447 = _435 * _441;
            float _449 = _225 + (-fp_c10_1._m0[557].x);
            float _451 = _146 + _443;
            float _453 = _148 + _445;
            float _455 = _152 + _447;
            float _457 = _449 * fp_c10_1._m0[558].z;
            float _459 = inversesqrt(fma(_455, _455, fma(_453, _453, _451 * _451)));
            float _461 = fma(_429, _429, _449 * _449);
            float _463 = fma(_160, _447, fma(_156, _445, _154 * _443));
            float _465 = _451 * _459;
            float _467 = _453 * _459;
            float _469 = _455 * _459;
            float _471 = inversesqrt(fma(_447, _447, _443 * _443));
            float _473 = ((-float(_431 < _457)) + float(_431 > _457)) * fp_c10_1._m0[561].y;
            float _475 = max(fma(_152, _469, fma(_148, _467, _146 * _465)), fp_c1_1._m0[0].z);
            float _477 = fma(_429, fp_c10_1._m0[558].z, _449 * fp_c10_1._m0[558].x);
            float _479 = max(fma(_160, _469, fma(_156, _467, _154 * _465)), fp_c1_1._m0[0].z) * max(fma(_160, _469, fma(_156, _467, _154 * _465)), fp_c1_1._m0[0].z);
            bool _481 = _477 > 0.0;
            float _483 = _447;
            if (_481)
            {
                _483 = sqrt(_461);
            }
            float _485 = _483;
            if (!_481)
            {
                _485 = 1.0;
            }
            bool _487 = fma(_429 * inversesqrt(_461), fp_c10_1._m0[558].z, (_449 * inversesqrt(_461)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _489 = max(_463, fp_c1_1._m0[0].z);
            float _491 = clamp(fma(_477 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_477 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _493 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_449, fma(_473, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_429 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_473 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_449, fma(_473, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_429 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_473 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _495 = exp2(_475 * fma(_475, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _497 = fma(_493, -_493, fp_c1_1._m0[1].y);
            if (!_487)
            {
                _497 = 1.0;
            }
            float _499 = _497;
            if (_487)
            {
                _499 = _497 * _497;
            }
            float _501 = (_260 * (1.0 / (_249 + fma(_249, -_489, _489)))) * ((_241 * (1.0 / max(fma(_243, _479, -_479) + 1.0, fp_c1_1._m0[0].z))) * (_241 * (1.0 / max(fma(_243, _479, -_479) + 1.0, fp_c1_1._m0[0].z))));
            float _503 = (min(fma(_491, -_491, fp_c1_1._m0[1].y) * fma(_491, -_491, fp_c1_1._m0[1].y), _499) * (exp2(log2(clamp(fma(_485, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_447 * _471, -fp_c10_1._m0[558].z, (_443 * _471) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_463 + (-0.0), 0.0, 1.0);
            float _505 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_229, fp_c10_1._m0[562].z, fma(_423, fp_c10_1._m0[562].y, _225 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _425, 0.5, 0.5), (-fma((fma(_229, fp_c10_1._m0[563].z, fma(_423, fp_c10_1._m0[563].y, _225 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _425, 0.5, 0.5)) + 1.0)).z > fma((fma(_229, fp_c10_1._m0[564].z, fma(_423, fp_c10_1._m0[564].y, _225 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _425, 0.5, 0.5)) || (_477 <= 0.0));
            _311 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _503) * fma(_279, fp_c1_1._m0[1].z, (_501 * (_277 + fma(_277, -_495, _495))) * 0.079577468335628509521484375), _505, _325);
            _313 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _503) * fma(_289, fp_c1_1._m0[1].z, (_501 * (_273 + fma(_273, -_495, _495))) * 0.079577468335628509521484375), _505, _323);
            _315 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _503) * fma(_266, fp_c1_1._m0[1].z, (_501 * (_287 + fma(_287, -_495, _495))) * 0.079577468335628509521484375), _505, _327);
        }
    }
    float _507 = _225 + (-fp_c3_1._m0[11].w);
    float _509 = _84.y;
    float _511 = _229 + (-fp_c3_1._m0[13].w);
    float _513 = _509 + (-fp_c3_1._m0[12].w);
    float _515 = fma(_511, _511, fma(_513, _513, _507 * _507));
    float _517 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _519 = fma(_191 * _205.y, _517, fma(_264, _311, _283 * (fma(_281 * (_277 + fma(_277, -_275, _275)), fp_c1_1._m0[1].x, _279 * 0.3183098733425140380859375) * fma(_256, fp_c5_1._m0[5].y, _297))));
    float _521 = fma(_189 * _205.x, _517, fma(_264, _313, _283 * (fma(_281 * (_273 + fma(_273, -_275, _275)), fp_c1_1._m0[1].x, _289 * 0.3183098733425140380859375) * fma(_256, fp_c5_1._m0[5].x, _295))));
    float _523 = clamp(fma(_283 * _264, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _525 = clamp(fma(fma(_229, fp_c5_1._m0[14].z, fma(_509, fp_c5_1._m0[14].y, _225 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _527 = fma(_193 * _205.z, _517, fma(_264, _315, _283 * (fma(_281 * (_287 + fma(_287, -_275, _275)), fp_c1_1._m0[1].x, _266 * 0.3183098733425140380859375) * fma(_256, fp_c5_1._m0[5].z, _247))));
    float _529 = exp2(log2(clamp(sqrt(_515) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_511 * inversesqrt(_515), fp_c5_1._m0[23].z, fma(_513 * inversesqrt(_515), fp_c5_1._m0[23].y, (_507 * inversesqrt(_515)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _531 = fma((-_521) + fp_c5_1._m0[13].x, _525, _521);
    float _533 = fma((-_519) + fp_c5_1._m0[13].y, _525, _519);
    float _535 = fma((-_527) + fp_c5_1._m0[13].z, _525, _527);
    float _537 = clamp((-exp2((clamp(fma(sqrt(_515), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _87.x = fma((-_531) + fma(fma((_529 * fp_c7_1._m0[55].x) * _523, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _537, _531);
    _87.y = fma((-_533) + fma(fma((_529 * fp_c7_1._m0[55].y) * _523, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _537, _533);
    _87.z = fma((-_535) + fma(fma((_529 * fp_c7_1._m0[55].z) * _523, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _537, _535);
    _87.w = 1.0;
}


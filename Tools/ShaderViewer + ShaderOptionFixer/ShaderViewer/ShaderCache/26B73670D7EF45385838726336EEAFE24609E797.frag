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
layout(location = 7) in vec4 _78;
layout(location = 6) in vec4 _80;
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
    float _126 = inversesqrt(fma(_110, _110, fma(_108, _108, _106 * _106)));
    float _128 = _110 * _126;
    float _130 = _106 * _126;
    float _132 = _108 * _126;
    float _134 = sqrt(clamp((-fma(_102, _102, _104 * _104)) + 1.0, 0.0, 1.0));
    float _136 = fma(_130, _134, fma(_102, _116, _104 * (fma(_132, _114, -(_128 * _112)) * _118)));
    float _138 = 1.0 / (_80.z * gl_FragCoord.w);
    float _140 = fma(_132, _134, fma(_102, _112, _104 * (fma(_128, _116, -(_130 * _114)) * _118)));
    float _142 = fma(_128, _134, fma(_102, _114, _104 * (fma(_130, _112, -(_132 * _116)) * _118)));
    float _144 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _146 = max(texture(fp_tex_tcb_10, vec2(_94, _96)).x, fp_c1_1._m0[0].x);
    float _148 = inversesqrt(fma(_142, _142, fma(_140, _140, _136 * _136)));
    float _150 = _120 * (-_144);
    float _152 = _122 * (-_144);
    float _154 = _136 * _148;
    float _156 = _140 * _148;
    float _158 = _142 * _148;
    float _160 = 1.0 / _82.w;
    float _162 = _124 * (-_144);
    float _164 = fma(_158, _162, fma(_156, _152, _154 * _150));
    float _166 = max(_164, fp_c1_1._m0[0].z);
    float _168 = fma(_154 * (-_164), -2.0, -_150);
    float _170 = fma(_156 * (-_164), -2.0, -_152);
    float _172 = fma(_158 * (-_164), -2.0, -_162);
    float _174 = 1.0 / max(abs(_172), max(abs(_168), abs(_170)));
    vec2 _176 = texture(fp_tex_tcb_2A, vec2(fma(_82.x * _160, 0.5, 0.5), fma(_82.y * _160, -0.5, 0.5))).xy;
    vec3 _180 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _182 = _180.x;
    float _184 = _180.y;
    float _186 = _180.z;
    float _188 = texture(fp_tex_tcb_12, vec2(_94, _96)).x;
    vec2 _190 = texture(fp_tex_tcb_38, vec2(_166, (-_146) + (-0.0))).xy;
    float _192 = _190.x;
    float _194 = _190.y;
    vec3 _196 = texture(fp_tex_tcb_36, vec4(_168 * _174, _170 * _174, _172 * _174, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_146 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _198 = texture(fp_tex_tcb_22, vec2(_78.x, _78.y)).xy;
    vec4 _201 = texture(fp_tex_tcb_24, vec2(_78.z, _78.w)).xyzw;
    float _203 = _201.w;
    vec3 _205 = texture(fp_tex_tcb_14, vec2(_94, _96)).xyz;
    float _207 = _150 + (-fp_c5_1._m0[23].x);
    float _209 = _152 + (-fp_c5_1._m0[23].y);
    float _211 = fma(_146, 0.5, 0.5);
    float _213 = _84.x;
    float _215 = _162 + (-fp_c5_1._m0[23].z);
    float _217 = _154 * _156;
    float _219 = _156 * _158;
    float _221 = (_211 * 0.5) * _211;
    float _223 = inversesqrt(fma(_215, _215, fma(_209, _209, _207 * _207)));
    float _225 = 1.0 / (_221 + fma(_166, -_221, _166));
    float _227 = _209 * _223;
    float _229 = _207 * _223;
    float _231 = _84.z;
    float _233 = _215 * _223;
    float _235 = _158 * _158;
    float _237 = _154 * _158;
    float _239 = _146 * _146;
    float _241 = _239 * _239;
    float _243 = fma(_156, -fp_c5_1._m0[23].y, _154 * (-fp_c5_1._m0[23].x));
    float _245 = max(fma(_158, _233, fma(_156, _227, _154 * _229)), fp_c1_1._m0[0].z) * max(fma(_158, _233, fma(_156, _227, _154 * _229)), fp_c1_1._m0[0].z);
    float _247 = max(fma(_162, _233, fma(_152, _227, _150 * _229)), fp_c1_1._m0[0].z);
    float _249 = max(fma(_158, -fp_c5_1._m0[23].z, _243), fp_c1_1._m0[0].z);
    float _251 = fma(_154, _154, -(_156 * _156));
    int _254 = max(0, min(int(trunc((_231 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _256 = exp2(_247 * fma(_247, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _258 = fma(_184, -_188, _184);
    float _260 = fma(_184 + (-0.039999999105930328369140625), _188, fp_c1_1._m0[0].y);
    float _262 = fma(_182 + (-0.039999999105930328369140625), _188, fp_c1_1._m0[0].y);
    float _264 = fma(_186 + (-0.039999999105930328369140625), _188, fp_c1_1._m0[0].y);
    float _266 = fma(_182, -_188, _182);
    float _268 = fma(_186, -_188, _186);
    float _270 = (_225 * (1.0 / (_221 + fma(_221, -_249, _249)))) * ((_239 * (1.0 / max(fma(_245, _241, -_245) + 1.0, fp_c1_1._m0[0].z))) * (_239 * (1.0 / max(fma(_245, _241, -_245) + 1.0, fp_c1_1._m0[0].z))));
    uint _273 = uint(int(uint((((int(uint(_254) >> uint(16)) * 20) << 16) + (((_254 & 65535) * 20) + max(0, min(int(trunc((_213 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _275 = fp_c10_1._m0[int(uint(int(_273)) >> uint(2))][int(_273) & 3];
    float _277 = _80.w;
    float _279 = clamp(fma(_158, -fp_c5_1._m0[23].z, _243), 0.0, 1.0);
    float _281 = fma(_266, -_262, _266);
    float _283 = fma(_258, -_260, _258);
    float _285 = fma(_268, -_264, _268);
    float _287 = clamp(_277 * clamp(fma(_198.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _289 = ((_201.x * _203) * _277) * 32.0;
    float _291 = ((_201.y * _203) * _277) * 32.0;
    float _293 = ((_201.z * _203) * _277) * 32.0;
    float _295 = fma(_281, _289, fma(_196.x, fma(_262, _192, _194), max(0.0, fma(_251, fp_c5_1._m0[31].x, (fma(_158, fp_c5_1._m0[25].z, fma(_156, fp_c5_1._m0[25].y, _154 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_237, fp_c5_1._m0[28].w, fma(_235, fp_c5_1._m0[28].z, fma(_219, fp_c5_1._m0[28].y, _217 * fp_c5_1._m0[28].x))))) * _281));
    float _297 = fma(_283, _291, fma(_196.y, fma(_260, _192, _194), max(0.0, fma(_251, fp_c5_1._m0[31].y, (fma(_158, fp_c5_1._m0[26].z, fma(_156, fp_c5_1._m0[26].y, _154 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_237, fp_c5_1._m0[29].w, fma(_235, fp_c5_1._m0[29].z, fma(_219, fp_c5_1._m0[29].y, _217 * fp_c5_1._m0[29].x))))) * _283));
    float _299 = fma(_285, _293, fma(_196.z, fma(_264, _192, _194), max(0.0, fma(_251, fp_c5_1._m0[31].z, (fma(_158, fp_c5_1._m0[27].z, fma(_156, fp_c5_1._m0[27].y, _154 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_237, fp_c5_1._m0[30].w, fma(_235, fp_c5_1._m0[30].z, fma(_219, fp_c5_1._m0[30].y, _217 * fp_c5_1._m0[30].x))))) * _285));
    float _301 = clamp((-((-texture(fp_tex_tcb_18, vec2(_70.z, _70.w)).x) + _287)) + (-0.0), 0.0, 1.0);
    float _303 = clamp((-fma(_287, fp_c7_1._m0[37].w, fma(max((-_176.x) + 1.0, (-_176.y) + 1.0), clamp(_84.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_80.x * gl_FragCoord.w) * _138, (_80.y * gl_FragCoord.w) * _138)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)) + clamp(_277 * clamp(fma(_198.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    float _305 = _299;
    float _307 = _295;
    float _309 = _297;
    float _311 = _297;
    float _313 = _295;
    float _315 = _299;
    if (floatBitsToInt(_275) != (-1))
    {
        int _317 = floatBitsToInt(_275);
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
            float _341 = (-_213) + fp_c10_1._m0[int(uint(int(_335)) >> uint(2))][int(_335) & 3];
            float _343 = fp_c10_1._m0[int(uint(_337) >> uint(2))][_337 & 3] + (-_84.y);
            float _345 = (-_231) + fp_c10_1._m0[int(uint(int(_339)) >> uint(2))][int(_339) & 3];
            float _347 = fma(_345, _345, fma(_343, _343, _341 * _341));
            float _349 = _341 * inversesqrt(_347);
            float _351 = _343 * inversesqrt(_347);
            float _353 = _345 * inversesqrt(_347);
            float _355 = _150 + _349;
            float _357 = _152 + _351;
            float _359 = _162 + _353;
            uint _361 = uint(int(uint(_333 + 6880) >> uint(2)));
            int _363 = int(_361) + 1;
            float _365 = inversesqrt(fma(_359, _359, fma(_357, _357, _355 * _355)));
            float _367 = _355 * _365;
            float _369 = _357 * _365;
            float _371 = _359 * _365;
            uint _373 = uint(int(uint(_333 + 8320) >> uint(2)));
            float _375 = fma(_158, _353, fma(_156, _351, _154 * _349));
            float _377 = max(fma(_162, _371, fma(_152, _369, _150 * _367)), fp_c1_1._m0[0].z);
            float _379 = max(_375, fp_c1_1._m0[0].z);
            float _381 = max(fma(_158, _371, fma(_156, _369, _154 * _367)), fp_c1_1._m0[0].z) * max(fma(_158, _371, fma(_156, _369, _154 * _367)), fp_c1_1._m0[0].z);
            uint _383 = uint(int(uint(_333 + 6408) >> uint(2)));
            uint _385 = uint(int(uint(_333 + 6400) >> uint(2)));
            int _387 = int(_385) + 1;
            float _389 = exp2(_377 * fma(_377, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _391 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_373)) >> uint(2))][int(_373) & 3]) != 0;
            float _393 = (_225 * (1.0 / (_221 + fma(_221, -_379, _379)))) * ((_239 * (1.0 / max(fma(_241, _381, -_381) + 1.0, fp_c1_1._m0[0].z))) * (_239 * (1.0 / max(fma(_241, _381, -_381) + 1.0, fp_c1_1._m0[0].z))));
            float _395 = (_260 + fma(_260, -_389, _389)) * _393;
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
            float _415 = (exp2(fp_c10_1._m0[int(uint(_363) >> uint(2))][_363 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_361)) >> uint(2))][int(_361) & 3], -sqrt(_347), fp_c1_1._m0[1].y), 0.0, 1.0))) * _399) * clamp(_375 + (-0.0), 0.0, 1.0);
            float _417 = fma(fp_c10_1._m0[int(uint(int(_383)) >> uint(2))][int(_383) & 3] * _415, fma(_268, fp_c1_1._m0[1].z, ((_264 + fma(_264, -_389, _389)) * _393) * 0.079577468335628509521484375), _305);
            float _419 = fma(fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3] * _415, fma(_266, fp_c1_1._m0[1].z, ((_262 + fma(_262, -_389, _389)) * _393) * 0.079577468335628509521484375), _307);
            float _421 = fma(fp_c10_1._m0[int(uint(_387) >> uint(2))][_387 & 3] * _415, fma(_258, fp_c1_1._m0[1].z, _395 * 0.079577468335628509521484375), _309);
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
            float _425 = 1.0 / (fma(_231, fp_c10_1._m0[565].z, fma(_423, fp_c10_1._m0[565].y, _213 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _427 = 1.0 / fp_c10_1._m0[561].y;
            float _429 = _231 + (-fp_c10_1._m0[557].z);
            float _431 = _429 * fp_c10_1._m0[558].x;
            float _433 = (-_213) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_427, fp_c10_1._m0[557].x);
            float _435 = (-_231) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_427, fp_c10_1._m0[557].z);
            float _437 = _433 * _433;
            float _439 = sqrt(fma(_435, _435, _437)) * (-fp_c10_1._m0[558].y);
            float _441 = _213 + (-fp_c10_1._m0[557].x);
            float _443 = inversesqrt(fma(_435, _435, fma(_439, _439, _437)));
            float _445 = _433 * _443;
            float _447 = _439 * _443;
            float _449 = _435 * _443;
            float _451 = _441 * fp_c10_1._m0[558].z;
            float _453 = _150 + _445;
            float _455 = _152 + _447;
            float _457 = _162 + _449;
            float _459 = fma(_158, _449, fma(_156, _447, _154 * _445));
            float _461 = inversesqrt(fma(_457, _457, fma(_455, _455, _453 * _453)));
            float _463 = fma(_429, _429, _441 * _441);
            float _465 = _453 * _461;
            float _467 = _455 * _461;
            float _469 = _457 * _461;
            float _471 = ((-float(_431 < _451)) + float(_431 > _451)) * fp_c10_1._m0[561].y;
            float _473 = inversesqrt(fma(_449, _449, _445 * _445));
            float _475 = max(fma(_162, _469, fma(_152, _467, _150 * _465)), fp_c1_1._m0[0].z);
            float _477 = fma(_429, fp_c10_1._m0[558].z, _441 * fp_c10_1._m0[558].x);
            float _479 = max(fma(_158, _469, fma(_156, _467, _154 * _465)), fp_c1_1._m0[0].z) * max(fma(_158, _469, fma(_156, _467, _154 * _465)), fp_c1_1._m0[0].z);
            bool _481 = _477 > 0.0;
            float _483 = _449;
            if (_481)
            {
                _483 = sqrt(_463);
            }
            float _485 = _483;
            if (!_481)
            {
                _485 = 1.0;
            }
            bool _487 = fma(_429 * inversesqrt(_463), fp_c10_1._m0[558].z, (_441 * inversesqrt(_463)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _489 = max(_459, fp_c1_1._m0[0].z);
            float _491 = clamp(fma(_477 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_477 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _493 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_441, fma(_471, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_429 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_471 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_441, fma(_471, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_429 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_471 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _495 = fma(_475, fp_c1_1._m0[0].w, -6.9831600189208984375);
            float _497 = _495;
            if (_487)
            {
                _497 = fma(_493, -_493, fp_c1_1._m0[1].y) * fma(_493, -_493, fp_c1_1._m0[1].y);
            }
            float _499 = _497;
            if (!_487)
            {
                _499 = 1.0;
            }
            float _501 = exp2(_475 * _495);
            float _503 = (_225 * (1.0 / (_221 + fma(_221, -_489, _489)))) * ((_239 * (1.0 / max(fma(_241, _479, -_479) + 1.0, fp_c1_1._m0[0].z))) * (_239 * (1.0 / max(fma(_241, _479, -_479) + 1.0, fp_c1_1._m0[0].z))));
            float _505 = (min(fma(_491, -_491, fp_c1_1._m0[1].y) * fma(_491, -_491, fp_c1_1._m0[1].y), _499) * (exp2(log2(clamp(fma(_485, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_449 * _473, -fp_c10_1._m0[558].z, (_445 * _473) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_459 + (-0.0), 0.0, 1.0);
            float _507 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_231, fp_c10_1._m0[562].z, fma(_423, fp_c10_1._m0[562].y, _213 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _425, 0.5, 0.5), (-fma((fma(_231, fp_c10_1._m0[563].z, fma(_423, fp_c10_1._m0[563].y, _213 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _425, 0.5, 0.5)) + 1.0)).z > fma((fma(_231, fp_c10_1._m0[564].z, fma(_423, fp_c10_1._m0[564].y, _213 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _425, 0.5, 0.5)) || (_477 <= 0.0));
            _311 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _505) * fma(_258, fp_c1_1._m0[1].z, (_503 * (_260 + fma(_260, -_501, _501))) * 0.079577468335628509521484375), _507, _325);
            _313 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _505) * fma(_266, fp_c1_1._m0[1].z, (_503 * (_262 + fma(_262, -_501, _501))) * 0.079577468335628509521484375), _507, _323);
            _315 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _505) * fma(_268, fp_c1_1._m0[1].z, (_503 * (_264 + fma(_264, -_501, _501))) * 0.079577468335628509521484375), _507, _327);
        }
    }
    float _509 = _213 + (-fp_c3_1._m0[11].w);
    float _511 = _84.y;
    float _513 = _231 + (-fp_c3_1._m0[13].w);
    float _515 = fma(_205.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_301, _311, _303 * (fma(_270 * (_260 + fma(_260, -_256, _256)), fp_c1_1._m0[1].x, _258 * 0.3183098733425140380859375) * fma(_279, fp_c5_1._m0[5].y, _291))));
    float _517 = _511 + (-fp_c3_1._m0[12].w);
    float _519 = fma(_513, _513, fma(_517, _517, _509 * _509));
    float _521 = clamp(fma(_303 * _301, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _523 = clamp(fma(fma(_231, fp_c5_1._m0[14].z, fma(_511, fp_c5_1._m0[14].y, _213 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _525 = fma(_205.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_301, _313, _303 * (fma(_270 * (_262 + fma(_262, -_256, _256)), fp_c1_1._m0[1].x, _266 * 0.3183098733425140380859375) * fma(_279, fp_c5_1._m0[5].x, _289))));
    float _527 = fma(_205.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_301, _315, _303 * (fma(_270 * (_264 + fma(_264, -_256, _256)), fp_c1_1._m0[1].x, _268 * 0.3183098733425140380859375) * fma(_279, fp_c5_1._m0[5].z, _293))));
    float _529 = exp2(log2(clamp(sqrt(_519) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_513 * inversesqrt(_519), fp_c5_1._m0[23].z, fma(_517 * inversesqrt(_519), fp_c5_1._m0[23].y, (_509 * inversesqrt(_519)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _531 = fma((-_525) + fp_c5_1._m0[13].x, _523, _525);
    float _533 = fma((-_515) + fp_c5_1._m0[13].y, _523, _515);
    float _535 = fma((-_527) + fp_c5_1._m0[13].z, _523, _527);
    float _537 = clamp((-exp2((clamp(fma(sqrt(_519), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _87.x = fma((-_531) + fma(fma((_529 * fp_c7_1._m0[55].x) * _521, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _537, _531);
    _87.y = fma((-_533) + fma(fma((_529 * fp_c7_1._m0[55].y) * _521, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _537, _533);
    _87.z = fma((-_535) + fma(fma((_529 * fp_c7_1._m0[55].z) * _521, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _537, _535);
    _87.w = 1.0;
}


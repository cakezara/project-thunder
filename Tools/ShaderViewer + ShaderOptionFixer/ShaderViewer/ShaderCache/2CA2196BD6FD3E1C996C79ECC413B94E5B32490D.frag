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
    bool _335 = false;
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
    float _122 = _72.z;
    float _124 = _72.x;
    float _126 = _72.y;
    float _128 = _72.w;
    float _130 = _74.x;
    float _132 = _74.y;
    float _134 = _74.z;
    float _136 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _138 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _140 = _116 * _138;
    float _142 = _120 * _138;
    float _144 = _118 * _138;
    float _146 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _148 = inversesqrt(fma(_134, _134, fma(_132, _132, _130 * _130)));
    float _150 = fma(_140, _146, fma(_100, _124, _102 * (fma(_144, _122, -(_142 * _126)) * _128)));
    float _152 = fma(_144, _146, fma(_100, _126, _102 * (fma(_142, _124, -(_140 * _122)) * _128)));
    float _154 = fma(_142, _146, fma(_100, _122, _102 * (fma(_140, _126, -(_144 * _124)) * _128)));
    float _156 = _130 * (-_148);
    float _158 = _132 * (-_148);
    float _160 = inversesqrt(fma(_154, _154, fma(_152, _152, _150 * _150)));
    float _162 = _150 * _160;
    float _164 = _152 * _160;
    float _166 = _134 * (-_148);
    float _168 = _154 * _160;
    float _170 = fma(_168, _166, fma(_164, _158, _162 * _156));
    float _172 = max(_170, fp_c1_1._m0[0].y);
    float _174 = fma(_162 * (-_170), -2.0, -_156);
    float _176 = fma(_164 * (-_170), -2.0, -_158);
    float _178 = fma(_168 * (-_170), -2.0, -_166);
    float _180 = _156 + (-fp_c5_1._m0[23].x);
    float _182 = 1.0 / max(abs(_178), max(abs(_174), abs(_176)));
    vec2 _184 = texture(fp_tex_tcb_38, vec2(_172, (-_136) + (-0.0))).xy;
    float _186 = _184.x;
    float _188 = _184.y;
    vec3 _190 = texture(fp_tex_tcb_36, vec4(_174 * _182, _176 * _182, _178 * _182, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_136 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _192 = texture(fp_tex_tcb_22, vec2(_76.x, _76.y)).xy;
    vec4 _195 = texture(fp_tex_tcb_24, vec2(_76.z, _76.w)).xyzw;
    float _197 = _195.w;
    vec3 _199 = texture(fp_tex_tcb_14, vec2(_90, _92)).xyz;
    float _201 = _156 * _158;
    float _203 = _158 + (-fp_c5_1._m0[23].y);
    float _205 = _158 * _166;
    float _207 = _166 + (-fp_c5_1._m0[23].z);
    float _209 = _166 * _166;
    float _211 = inversesqrt(fma(_207, _207, fma(_203, _203, _180 * _180)));
    float _213 = _156 * _166;
    float _215 = _180 * _211;
    float _217 = _203 * _211;
    float _219 = _207 * _211;
    float _221 = fma(_156, _156, -(_158 * _158));
    float _223 = _162 * _164;
    float _225 = _164 * _168;
    float _227 = _78.x;
    float _229 = max(fma(_166, _219, fma(_158, _217, _156 * _215)), fp_c1_1._m0[0].y);
    float _231 = _168 * _168;
    float _233 = _78.z;
    float _235 = _162 * _168;
    float _237 = fma(_136, 0.5, 0.5);
    float _239 = _136 * _136;
    float _241 = fma(_164, -fp_c5_1._m0[23].y, _162 * (-fp_c5_1._m0[23].x));
    float _243 = _239 * _239;
    float _245 = max(fma(_168, _219, fma(_164, _217, _162 * _215)), fp_c1_1._m0[0].y) * max(fma(_168, _219, fma(_164, _217, _162 * _215)), fp_c1_1._m0[0].y);
    float _247 = (_237 * 0.5) * _237;
    float _249 = max(fma(_168, -fp_c5_1._m0[23].z, _241), fp_c1_1._m0[0].y);
    float _251 = 1.0 / (_247 + fma(_172, -_247, _172));
    float _253 = fma(_162, _162, -(_164 * _164));
    int _256 = max(0, min(int(trunc((_233 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _258 = (_251 * (1.0 / (_247 + fma(_247, -_249, _249)))) * ((_239 * (1.0 / max(fma(_245, _243, -_245) + 1.0, fp_c1_1._m0[0].y))) * (_239 * (1.0 / max(fma(_245, _243, -_245) + 1.0, fp_c1_1._m0[0].y))));
    float _260 = exp2(log2(clamp((-_170) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[45].y) * fp_c6_1._m0[45].x;
    float _262 = exp2(_229 * fma(_229, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _264 = fma(_110 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _266 = fma(_110 * max(0.0, fma(_221, fp_c5_1._m0[31].x, fma(_213, fp_c5_1._m0[28].w, fma(_209, fp_c5_1._m0[28].z, fma(_205, fp_c5_1._m0[28].y, _201 * fp_c5_1._m0[28].x))) + (fma(_166, -fp_c5_1._m0[25].z, fma(_158, -fp_c5_1._m0[25].y, _156 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w))), _260, fma(_110, -fp_c6_1._m0[9].x, _110));
    float _268 = fma(_112 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _270 = fma(_114 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _272 = fma(_112 * max(0.0, fma(_221, fp_c5_1._m0[31].y, fma(_213, fp_c5_1._m0[29].w, fma(_209, fp_c5_1._m0[29].z, fma(_205, fp_c5_1._m0[29].y, _201 * fp_c5_1._m0[29].x))) + (fma(_166, -fp_c5_1._m0[26].z, fma(_158, -fp_c5_1._m0[26].y, _156 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w))), _260, fma(_112, -fp_c6_1._m0[9].x, _112));
    float _274 = fma(_114 * max(0.0, fma(_221, fp_c5_1._m0[31].z, (fma(_166, -fp_c5_1._m0[27].z, fma(_158, -fp_c5_1._m0[27].y, _156 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_213, fp_c5_1._m0[30].w, fma(_209, fp_c5_1._m0[30].z, fma(_205, fp_c5_1._m0[30].y, _201 * fp_c5_1._m0[30].x))))), _260, fma(_114, -fp_c6_1._m0[9].x, _114));
    uint _277 = uint(int(uint((((int(uint(_256) >> uint(16)) * 20) << 16) + (((_256 & 65535) * 20) + max(0, min(int(trunc((_227 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _279 = fp_c10_1._m0[int(uint(int(_277)) >> uint(2))][int(_277) & 3];
    float _281 = _64.w;
    float _283 = fma(_266, -_264, _266);
    float _285 = fma(_272, -_268, _272);
    float _287 = fma(_274, -_270, _274);
    float _289 = clamp(_281 * clamp(fma(_192.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _291 = ((_195.x * _197) * _281) * 32.0;
    float _293 = ((_195.y * _197) * _281) * 32.0;
    float _295 = ((_195.z * _197) * _281) * 32.0;
    float _297 = clamp(fma(_168, -fp_c5_1._m0[23].z, _241), 0.0, 1.0);
    float _299 = fma(_283, _291, fma(_190.x, fma(_264, _186, _188), max(0.0, fma(_253, fp_c5_1._m0[31].x, (fma(_168, fp_c5_1._m0[25].z, fma(_164, fp_c5_1._m0[25].y, _162 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_235, fp_c5_1._m0[28].w, fma(_231, fp_c5_1._m0[28].z, fma(_225, fp_c5_1._m0[28].y, _223 * fp_c5_1._m0[28].x))))) * _283));
    float _301 = fma(_285, _293, fma(_190.y, fma(_268, _186, _188), max(0.0, fma(_253, fp_c5_1._m0[31].y, (fma(_168, fp_c5_1._m0[26].z, fma(_164, fp_c5_1._m0[26].y, _162 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_235, fp_c5_1._m0[29].w, fma(_231, fp_c5_1._m0[29].z, fma(_225, fp_c5_1._m0[29].y, _223 * fp_c5_1._m0[29].x))))) * _285));
    float _303 = fma(_287, _295, fma(_190.z, fma(_270, _186, _188), max(0.0, fma(_253, fp_c5_1._m0[31].z, (fma(_168, fp_c5_1._m0[27].z, fma(_164, fp_c5_1._m0[27].y, _162 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_235, fp_c5_1._m0[30].w, fma(_231, fp_c5_1._m0[30].z, fma(_225, fp_c5_1._m0[30].y, _223 * fp_c5_1._m0[30].x))))) * _287));
    float _305 = clamp((-_289) + 1.0, 0.0, 1.0);
    float _307 = clamp((-fma(_289, fp_c7_1._m0[37].w, clamp(_281 * clamp(fma(_192.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_104.x) + 1.0, (-_104.y) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_64.x * gl_FragCoord.w) * _88, (_64.y * gl_FragCoord.w) * _88)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _309 = _301;
    float _311 = _303;
    float _313 = _299;
    float _315 = _299;
    float _317 = _301;
    float _319 = _303;
    if (floatBitsToInt(_279) != (-1))
    {
        int _321 = floatBitsToInt(_279);
        int _323 = 0;
        float _327;
        float _329;
        float _331;
        int _417;
        do
        {
            int _325 = _321 & 255;
            _327 = _313;
            _329 = _309;
            _331 = _311;
            _335 = uint(_325) >= 30u;
            if (_335)
            {
                break;
            }
            int _337 = _325 << 4;
            uint _339 = uint(int(uint(_337 + 7360) >> uint(2)));
            int _341 = int(_339) + 1;
            uint _343 = uint(int(uint(_337 + 7368) >> uint(2)));
            float _345 = (-_227) + fp_c10_1._m0[int(uint(int(_339)) >> uint(2))][int(_339) & 3];
            float _347 = fp_c10_1._m0[int(uint(_341) >> uint(2))][_341 & 3] + (-_78.y);
            float _349 = (-_233) + fp_c10_1._m0[int(uint(int(_343)) >> uint(2))][int(_343) & 3];
            float _351 = fma(_349, _349, fma(_347, _347, _345 * _345));
            float _353 = _345 * inversesqrt(_351);
            float _355 = _347 * inversesqrt(_351);
            float _357 = _349 * inversesqrt(_351);
            float _359 = _156 + _353;
            float _361 = _158 + _355;
            float _363 = _166 + _357;
            uint _365 = uint(int(uint(_337 + 6880) >> uint(2)));
            int _367 = int(_365) + 1;
            float _369 = inversesqrt(fma(_363, _363, fma(_361, _361, _359 * _359)));
            float _371 = _359 * _369;
            float _373 = _361 * _369;
            float _375 = _363 * _369;
            float _377 = fma(_168, _357, fma(_164, _355, _162 * _353));
            float _379 = max(_377, fp_c1_1._m0[0].y);
            uint _381 = uint(int(uint(_337 + 8320) >> uint(2)));
            float _383 = max(fma(_166, _375, fma(_158, _373, _156 * _371)), fp_c1_1._m0[0].y);
            float _385 = max(fma(_168, _375, fma(_164, _373, _162 * _371)), fp_c1_1._m0[0].y) * max(fma(_168, _375, fma(_164, _373, _162 * _371)), fp_c1_1._m0[0].y);
            uint _387 = uint(int(uint(_337 + 6400) >> uint(2)));
            int _389 = int(_387) + 1;
            float _391 = exp2(_383 * fma(_383, fp_c1_1._m0[0].z, -6.9831600189208984375));
            uint _393 = uint(int(uint(_337 + 6408) >> uint(2)));
            bool _395 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_381)) >> uint(2))][int(_381) & 3]) != 0;
            float _397 = (_251 * (1.0 / (_247 + fma(_247, -_379, _379)))) * ((_239 * (1.0 / max(fma(_243, _385, -_385) + 1.0, fp_c1_1._m0[0].y))) * (_239 * (1.0 / max(fma(_243, _385, -_385) + 1.0, fp_c1_1._m0[0].y))));
            float _399 = (_270 + fma(_270, -_391, _391)) * _397;
            float _401 = _399;
            if (!_395)
            {
                _401 = 1.0;
            }
            float _403 = _401;
            if (_395)
            {
                uint _405 = uint(int(uint(_337 + 7840) >> uint(2)));
                int _407 = int(_405) + 1;
                uint _409 = uint(int(uint(_337 + 6888) >> uint(2)));
                float _411 = fp_c10_1._m0[int(uint(int(_409)) >> uint(2))][int(_409) & 3];
                int _413 = int(_409) + 1;
                uint _415 = uint(int(uint(_337 + 7848) >> uint(2)));
                _403 = exp2(fp_c10_1._m0[int(uint(_413) >> uint(2))][_413 & 3] * log2(clamp(((-_411) + fma(_357, -fp_c10_1._m0[int(uint(int(_415)) >> uint(2))][int(_415) & 3], fma(_355, -fp_c10_1._m0[int(uint(_407) >> uint(2))][_407 & 3], _353 * (-fp_c10_1._m0[int(uint(int(_405)) >> uint(2))][int(_405) & 3])))) * (1.0 / ((-_411) + 1.0)), 0.0, 1.0)));
            }
            _417 = _323 + 1;
            float _419 = (exp2(fp_c10_1._m0[int(uint(_367) >> uint(2))][_367 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_365)) >> uint(2))][int(_365) & 3], -sqrt(_351), fp_c1_1._m0[1].x), 0.0, 1.0))) * _403) * clamp(_377 + (-0.0), 0.0, 1.0);
            float _421 = fma(fp_c10_1._m0[int(uint(_389) >> uint(2))][_389 & 3] * _419, fma(_272, fp_c1_1._m0[1].y, ((_268 + fma(_268, -_391, _391)) * _397) * 0.079577468335628509521484375), _309);
            float _423 = fma(fp_c10_1._m0[int(uint(int(_393)) >> uint(2))][int(_393) & 3] * _419, fma(_274, fp_c1_1._m0[1].y, _399 * 0.079577468335628509521484375), _311);
            float _425 = fma(fp_c10_1._m0[int(uint(int(_387)) >> uint(2))][int(_387) & 3] * _419, fma(_266, fp_c1_1._m0[1].y, ((_264 + fma(_264, -_391, _391)) * _397) * 0.079577468335628509521484375), _313);
            _321 = int(uint(_321) >> uint(8));
            _323 = _417;
            _309 = _421;
            _311 = _423;
            _313 = _425;
            _327 = _425;
            _329 = _421;
            _331 = _423;
        } while (!(_417 >= 4));
        _335 = false;
        _315 = _327;
        _317 = _329;
        _319 = _331;
        if ((_321 & 255) == 30)
        {
            float _427 = _78.y;
            float _429 = 1.0 / (fma(_233, fp_c10_1._m0[565].z, fma(_427, fp_c10_1._m0[565].y, _227 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _431 = 1.0 / fp_c10_1._m0[561].y;
            float _433 = _233 + (-fp_c10_1._m0[557].z);
            float _435 = _433 * fp_c10_1._m0[558].x;
            float _437 = (-_227) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_431, fp_c10_1._m0[557].x);
            float _439 = (-_233) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_431, fp_c10_1._m0[557].z);
            float _441 = _437 * _437;
            float _443 = sqrt(fma(_439, _439, _441)) * (-fp_c10_1._m0[558].y);
            float _445 = _227 + (-fp_c10_1._m0[557].x);
            float _447 = _445 * fp_c10_1._m0[558].z;
            float _449 = inversesqrt(fma(_439, _439, fma(_443, _443, _441)));
            float _451 = _437 * _449;
            float _453 = _443 * _449;
            float _455 = _439 * _449;
            float _457 = _156 + _451;
            float _459 = _158 + _453;
            float _461 = _166 + _455;
            float _463 = inversesqrt(fma(_461, _461, fma(_459, _459, _457 * _457)));
            float _465 = fma(_433, _433, _445 * _445);
            float _467 = fma(_168, _455, fma(_164, _453, _162 * _451));
            float _469 = _457 * _463;
            float _471 = _459 * _463;
            float _473 = _461 * _463;
            float _475 = inversesqrt(fma(_455, _455, _451 * _451));
            float _477 = ((-float(_435 < _447)) + float(_435 > _447)) * fp_c10_1._m0[561].y;
            float _479 = fma(_433, fp_c10_1._m0[558].z, _445 * fp_c10_1._m0[558].x);
            float _481 = max(_467, fp_c1_1._m0[0].y);
            bool _483 = _479 > 0.0;
            float _485 = max(fma(_168, _473, fma(_164, _471, _162 * _469)), fp_c1_1._m0[0].y) * max(fma(_168, _473, fma(_164, _471, _162 * _469)), fp_c1_1._m0[0].y);
            float _487 = max(fma(_166, _473, fma(_158, _471, _156 * _469)), fp_c1_1._m0[0].y);
            float _489 = _433;
            if (_483)
            {
                _489 = sqrt(_465);
            }
            float _491 = _489;
            if (!_483)
            {
                _491 = 1.0;
            }
            bool _493 = fma(_433 * inversesqrt(_465), fp_c10_1._m0[558].z, (_445 * inversesqrt(_465)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _495 = clamp(fma(_479 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_479 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _497 = 6.9831600189208984375;
            if (!_493)
            {
                _497 = 1.0;
            }
            float _499 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_445, fma(_477, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_433 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_477 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_445, fma(_477, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_433 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_477 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _501 = _497;
            if (_493)
            {
                _501 = fma(_499, -_499, fp_c1_1._m0[1].x) * fma(_499, -_499, fp_c1_1._m0[1].x);
            }
            float _503 = exp2(_487 * fma(_487, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _505 = (_251 * (1.0 / (_247 + fma(_247, -_481, _481)))) * ((_239 * (1.0 / max(fma(_243, _485, -_485) + 1.0, fp_c1_1._m0[0].y))) * (_239 * (1.0 / max(fma(_243, _485, -_485) + 1.0, fp_c1_1._m0[0].y))));
            float _507 = (min(fma(_495, -_495, fp_c1_1._m0[1].x) * fma(_495, -_495, fp_c1_1._m0[1].x), _501) * (exp2(log2(clamp(fma(_491, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_455 * _475, -fp_c10_1._m0[558].z, (_451 * _475) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_467 + (-0.0), 0.0, 1.0);
            float _509 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_233, fp_c10_1._m0[562].z, fma(_427, fp_c10_1._m0[562].y, _227 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _429, 0.5, 0.5), (-fma((fma(_233, fp_c10_1._m0[563].z, fma(_427, fp_c10_1._m0[563].y, _227 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _429, 0.5, 0.5)) + 1.0)).z > fma((fma(_233, fp_c10_1._m0[564].z, fma(_427, fp_c10_1._m0[564].y, _227 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _429, 0.5, 0.5)) || (_479 <= 0.0));
            _315 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _507) * fma(_266, fp_c1_1._m0[1].y, ((_264 + fma(_264, -_503, _503)) * _505) * 0.079577468335628509521484375), _509, _327);
            _317 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _507) * fma(_272, fp_c1_1._m0[1].y, ((_268 + fma(_268, -_503, _503)) * _505) * 0.079577468335628509521484375), _509, _329);
            _319 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _507) * fma(_274, fp_c1_1._m0[1].y, ((_270 + fma(_270, -_503, _503)) * _505) * 0.079577468335628509521484375), _509, _331);
        }
    }
    float _511 = _227 + (-fp_c3_1._m0[11].w);
    float _513 = _78.y;
    float _515 = _233 + (-fp_c3_1._m0[13].w);
    float _517 = fma(_110 * _199.x, fp_c6_1._m0[11].x, fma(_305, _315, _307 * (fma(_258 * (_264 + fma(_264, -_262, _262)), fp_c1_1._m0[0].w, _266 * 0.3183098733425140380859375) * fma(_297, fp_c5_1._m0[5].x, _291))));
    float _519 = _513 + (-fp_c3_1._m0[12].w);
    float _521 = fma(_515, _515, fma(_519, _519, _511 * _511));
    float _523 = clamp(fma(_307 * _305, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _525 = fma(_112 * _199.y, fp_c6_1._m0[11].x, fma(_305, _317, _307 * (fma(_258 * (_268 + fma(_268, -_262, _262)), fp_c1_1._m0[0].w, _272 * 0.3183098733425140380859375) * fma(_297, fp_c5_1._m0[5].y, _293))));
    float _527 = fma(_114 * _199.z, fp_c6_1._m0[11].x, fma(_305, _319, _307 * (fma(_258 * (_270 + fma(_270, -_262, _262)), fp_c1_1._m0[0].w, _274 * 0.3183098733425140380859375) * fma(_297, fp_c5_1._m0[5].z, _295))));
    float _529 = clamp(fma(fma(_233, fp_c5_1._m0[14].z, fma(_513, fp_c5_1._m0[14].y, _227 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _531 = exp2(log2(clamp(sqrt(_521) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_515 * inversesqrt(_521), fp_c5_1._m0[23].z, fma(_519 * inversesqrt(_521), fp_c5_1._m0[23].y, (_511 * inversesqrt(_521)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _533 = fma((-_517) + fp_c5_1._m0[13].x, _529, _517);
    float _535 = fma((-_525) + fp_c5_1._m0[13].y, _529, _525);
    float _537 = fma((-_527) + fp_c5_1._m0[13].z, _529, _527);
    float _539 = clamp((-exp2((clamp(fma(sqrt(_521), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_533) + fma(fma((_531 * fp_c7_1._m0[55].x) * _523, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _539, _533);
    _81.y = fma((-_535) + fma(fma((_531 * fp_c7_1._m0[55].y) * _523, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _539, _535);
    _81.z = fma((-_537) + fma(fma((_531 * fp_c7_1._m0[55].z) * _523, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _539, _537);
    _81.w = 1.0;
}


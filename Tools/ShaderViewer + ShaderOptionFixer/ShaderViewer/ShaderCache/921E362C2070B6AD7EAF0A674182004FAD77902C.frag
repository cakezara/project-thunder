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
layout(location = 6) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 7) in vec4 _78;
layout(location = 3) in vec4 _80;
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
    float _134 = 1.0 / (_74.z * gl_FragCoord.w);
    float _136 = fma(_128, _130, fma(_98, _108, _100 * (fma(_124, _112, -(_126 * _110)) * _114)));
    float _138 = fma(_124, _130, fma(_98, _110, _100 * (fma(_126, _108, -(_128 * _112)) * _114)));
    float _140 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _142 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _144 = inversesqrt(fma(_138, _138, fma(_136, _136, _132 * _132)));
    float _146 = 1.0 / _76.w;
    float _148 = _116 * (-_140);
    float _150 = _118 * (-_140);
    float _152 = _132 * _144;
    float _154 = _136 * _144;
    float _156 = _120 * (-_140);
    float _158 = _138 * _144;
    float _160 = fma(_158, _156, fma(_154, _150, _152 * _148));
    float _162 = max(_160, fp_c1_1._m0[0].z);
    float _164 = fma(_152 * (-_160), -2.0, -_148);
    float _166 = fma(_154 * (-_160), -2.0, -_150);
    float _168 = fma(_158 * (-_160), -2.0, -_156);
    float _170 = 1.0 / max(abs(_168), max(abs(_164), abs(_166)));
    vec2 _172 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _146, 0.5, 0.5), fma(_76.y * _146, -0.5, 0.5))).xy;
    vec3 _176 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _178 = _176.x;
    float _180 = _176.y;
    float _182 = _176.z;
    float _184 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    vec2 _186 = texture(fp_tex_tcb_38, vec2(_162, (-_142) + (-0.0))).xy;
    float _188 = _186.x;
    float _190 = _186.y;
    vec2 _192 = texture(fp_tex_tcb_22, vec2(_78.x, _78.y)).xy;
    vec3 _194 = texture(fp_tex_tcb_36, vec4(_164 * _170, _166 * _170, _168 * _170, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_142 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec4 _197 = texture(fp_tex_tcb_24, vec2(_78.z, _78.w)).xyzw;
    float _199 = _197.w;
    float _201 = _148 + (-fp_c5_1._m0[23].x);
    float _203 = _150 + (-fp_c5_1._m0[23].y);
    float _205 = _152 * _154;
    float _207 = _156 + (-fp_c5_1._m0[23].z);
    float _209 = _154 * _158;
    float _211 = _158 * _158;
    float _213 = fma(_142, 0.5, 0.5);
    float _215 = _152 * _158;
    float _217 = inversesqrt(fma(_207, _207, fma(_203, _203, _201 * _201)));
    float _219 = (_213 * 0.5) * _213;
    float _221 = _201 * _217;
    float _223 = _203 * _217;
    float _225 = _207 * _217;
    float _227 = _80.x;
    float _229 = fma(_152, _152, -(_154 * _154));
    float _231 = _142 * _142;
    float _233 = 1.0 / (_219 + fma(_162, -_219, _162));
    float _235 = _231 * _231;
    float _237 = _80.z;
    float _239 = fma(_154, -fp_c5_1._m0[23].y, _152 * (-fp_c5_1._m0[23].x));
    float _241 = max(fma(_156, _225, fma(_150, _223, _148 * _221)), fp_c1_1._m0[0].z);
    float _243 = max(fma(_158, _225, fma(_154, _223, _152 * _221)), fp_c1_1._m0[0].z) * max(fma(_158, _225, fma(_154, _223, _152 * _221)), fp_c1_1._m0[0].z);
    float _245 = clamp(fma(_158, -fp_c5_1._m0[23].z, _239), 0.0, 1.0);
    float _247 = max(fma(_158, -fp_c5_1._m0[23].z, _239), fp_c1_1._m0[0].z);
    float _249 = fma(_178, -_184, _178);
    float _251 = exp2(_241 * fma(_241, fp_c1_1._m0[0].w, -6.9831600189208984375));
    int _254 = max(0, min(int(trunc((_237 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _256 = (_233 * (1.0 / (_219 + fma(_219, -_247, _247)))) * ((_231 * (1.0 / max(fma(_243, _235, -_243) + 1.0, fp_c1_1._m0[0].z))) * (_231 * (1.0 / max(fma(_243, _235, -_243) + 1.0, fp_c1_1._m0[0].z))));
    float _258 = fma(_184, _180 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _260 = fma(_184, _178 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _262 = fma(_180, -_184, _180);
    float _264 = fma(_184, _182 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _266 = fma(_260, -_249, _249);
    uint _269 = uint(int(uint((((int(uint(_254) >> uint(16)) * 20) << 16) + (((_254 & 65535) * 20) + max(0, min(int(trunc((_227 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _271 = fp_c10_1._m0[int(uint(int(_269)) >> uint(2))][int(_269) & 3];
    float _273 = _74.w;
    float _275 = fma(_182, -_184, _182);
    float _277 = fma(_258, -_262, _262);
    float _279 = fma(_264, -_275, _275);
    float _281 = clamp(_273 * clamp(fma(_192.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _283 = ((_197.z * _199) * _273) * 32.0;
    float _285 = ((_197.y * _199) * _273) * 32.0;
    float _287 = ((_197.x * _199) * _273) * 32.0;
    float _289 = fma(_279, _283, fma(_194.z, fma(_264, _188, _190), max(0.0, fma(_229, fp_c5_1._m0[31].z, (fma(_158, fp_c5_1._m0[27].z, fma(_154, fp_c5_1._m0[27].y, _152 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_215, fp_c5_1._m0[30].w, fma(_211, fp_c5_1._m0[30].z, fma(_209, fp_c5_1._m0[30].y, _205 * fp_c5_1._m0[30].x))))) * _279));
    float _291 = fma(_277, _285, fma(_194.y, fma(_258, _188, _190), max(0.0, fma(_229, fp_c5_1._m0[31].y, (fma(_158, fp_c5_1._m0[26].z, fma(_154, fp_c5_1._m0[26].y, _152 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_215, fp_c5_1._m0[29].w, fma(_211, fp_c5_1._m0[29].z, fma(_209, fp_c5_1._m0[29].y, _205 * fp_c5_1._m0[29].x))))) * _277));
    float _293 = clamp((-_281) + 1.0, 0.0, 1.0);
    float _295 = fma(_266, _287, fma(_194.x, fma(_260, _188, _190), max(0.0, fma(_229, fp_c5_1._m0[31].x, (fma(_158, fp_c5_1._m0[25].z, fma(_154, fp_c5_1._m0[25].y, _152 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_215, fp_c5_1._m0[28].w, fma(_211, fp_c5_1._m0[28].z, fma(_209, fp_c5_1._m0[28].y, _205 * fp_c5_1._m0[28].x))))) * _266));
    float _297 = clamp((-fma(_281, fp_c7_1._m0[37].w, clamp(_273 * clamp(fma(_192.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_172.x) + 1.0, (-_172.y) + 1.0), clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_74.x * gl_FragCoord.w) * _134, (_74.y * gl_FragCoord.w) * _134)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _299 = _291;
    float _301 = _289;
    float _303 = _295;
    float _305 = _295;
    float _307 = _291;
    float _309 = _289;
    if (floatBitsToInt(_271) != (-1))
    {
        int _311 = floatBitsToInt(_271);
        int _313 = 0;
        float _317;
        float _319;
        float _321;
        int _407;
        do
        {
            int _315 = _311 & 255;
            _317 = _303;
            _319 = _299;
            _321 = _301;
            _325 = uint(_315) >= 30u;
            if (_325)
            {
                break;
            }
            int _327 = _315 << 4;
            uint _329 = uint(int(uint(_327 + 7360) >> uint(2)));
            int _331 = int(_329) + 1;
            uint _333 = uint(int(uint(_327 + 7368) >> uint(2)));
            float _335 = (-_227) + fp_c10_1._m0[int(uint(int(_329)) >> uint(2))][int(_329) & 3];
            float _337 = fp_c10_1._m0[int(uint(_331) >> uint(2))][_331 & 3] + (-_80.y);
            float _339 = (-_237) + fp_c10_1._m0[int(uint(int(_333)) >> uint(2))][int(_333) & 3];
            float _341 = fma(_339, _339, fma(_337, _337, _335 * _335));
            float _343 = _335 * inversesqrt(_341);
            float _345 = _337 * inversesqrt(_341);
            float _347 = _339 * inversesqrt(_341);
            float _349 = _148 + _343;
            float _351 = _150 + _345;
            float _353 = _156 + _347;
            uint _355 = uint(int(uint(_327 + 6880) >> uint(2)));
            int _357 = int(_355) + 1;
            float _359 = inversesqrt(fma(_353, _353, fma(_351, _351, _349 * _349)));
            float _361 = _349 * _359;
            float _363 = _351 * _359;
            float _365 = _353 * _359;
            uint _367 = uint(int(uint(_327 + 8320) >> uint(2)));
            float _369 = fma(_158, _347, fma(_154, _345, _152 * _343));
            float _371 = max(fma(_156, _365, fma(_150, _363, _148 * _361)), fp_c1_1._m0[0].z);
            float _373 = max(fma(_158, _365, fma(_154, _363, _152 * _361)), fp_c1_1._m0[0].z) * max(fma(_158, _365, fma(_154, _363, _152 * _361)), fp_c1_1._m0[0].z);
            float _375 = max(_369, fp_c1_1._m0[0].z);
            uint _377 = uint(int(uint(_327 + 6400) >> uint(2)));
            int _379 = int(_377) + 1;
            uint _381 = uint(int(uint(_327 + 6408) >> uint(2)));
            float _383 = exp2(_371 * fma(_371, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _385 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3]) != 0;
            float _387 = (_233 * (1.0 / (_219 + fma(_219, -_375, _375)))) * ((_231 * (1.0 / max(fma(_235, _373, -_373) + 1.0, fp_c1_1._m0[0].z))) * (_231 * (1.0 / max(fma(_235, _373, -_373) + 1.0, fp_c1_1._m0[0].z))));
            float _389 = _264 + fma(_264, -_383, _383);
            float _391 = _389;
            if (!_385)
            {
                _391 = 1.0;
            }
            float _393 = _391;
            if (_385)
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
            float _409 = (exp2(fp_c10_1._m0[int(uint(_357) >> uint(2))][_357 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_355)) >> uint(2))][int(_355) & 3], -sqrt(_341), fp_c1_1._m0[1].y), 0.0, 1.0))) * _393) * clamp(_369 + (-0.0), 0.0, 1.0);
            float _411 = fma(fp_c10_1._m0[int(uint(_379) >> uint(2))][_379 & 3] * _409, fma(_262, fp_c1_1._m0[1].z, ((_258 + fma(_258, -_383, _383)) * _387) * 0.079577468335628509521484375), _299);
            float _413 = fma(fp_c10_1._m0[int(uint(int(_381)) >> uint(2))][int(_381) & 3] * _409, fma(_275, fp_c1_1._m0[1].z, (_389 * _387) * 0.079577468335628509521484375), _301);
            float _415 = fma(fp_c10_1._m0[int(uint(int(_377)) >> uint(2))][int(_377) & 3] * _409, fma(_249, fp_c1_1._m0[1].z, ((_260 + fma(_260, -_383, _383)) * _387) * 0.079577468335628509521484375), _303);
            _311 = int(uint(_311) >> uint(8));
            _313 = _407;
            _299 = _411;
            _301 = _413;
            _303 = _415;
            _317 = _415;
            _319 = _411;
            _321 = _413;
        } while (!(_407 >= 4));
        _325 = false;
        _305 = _317;
        _307 = _319;
        _309 = _321;
        if ((_311 & 255) == 30)
        {
            float _417 = _80.y;
            float _419 = 1.0 / (fma(_237, fp_c10_1._m0[565].z, fma(_417, fp_c10_1._m0[565].y, _227 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _421 = 1.0 / fp_c10_1._m0[561].y;
            float _423 = _237 + (-fp_c10_1._m0[557].z);
            float _425 = _227 + (-fp_c10_1._m0[557].x);
            float _427 = _423 * fp_c10_1._m0[558].x;
            float _429 = (-_227) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_421, fp_c10_1._m0[557].x);
            float _431 = (-_237) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_421, fp_c10_1._m0[557].z);
            float _433 = _429 * _429;
            float _435 = sqrt(fma(_431, _431, _433)) * (-fp_c10_1._m0[558].y);
            float _437 = inversesqrt(fma(_431, _431, fma(_435, _435, _433)));
            float _439 = _425 * fp_c10_1._m0[558].z;
            float _441 = _429 * _437;
            float _443 = _435 * _437;
            float _445 = _431 * _437;
            float _447 = _148 + _441;
            float _449 = _150 + _443;
            float _451 = _156 + _445;
            float _453 = inversesqrt(fma(_451, _451, fma(_449, _449, _447 * _447)));
            float _455 = fma(_423, _423, _425 * _425);
            float _457 = fma(_158, _445, fma(_154, _443, _152 * _441));
            float _459 = _447 * _453;
            float _461 = _449 * _453;
            float _463 = _451 * _453;
            float _465 = ((-float(_427 < _439)) + float(_427 > _439)) * fp_c10_1._m0[561].y;
            float _467 = inversesqrt(fma(_445, _445, _441 * _441));
            float _469 = max(fma(_156, _463, fma(_150, _461, _148 * _459)), fp_c1_1._m0[0].z);
            float _471 = fma(_423, fp_c10_1._m0[558].z, _425 * fp_c10_1._m0[558].x);
            float _473 = max(_457, fp_c1_1._m0[0].z);
            float _475 = max(fma(_158, _463, fma(_154, _461, _152 * _459)), fp_c1_1._m0[0].z) * max(fma(_158, _463, fma(_154, _461, _152 * _459)), fp_c1_1._m0[0].z);
            bool _477 = _471 > 0.0;
            float _479 = _445;
            float _481 = 6.9831600189208984375;
            if (_477)
            {
                _479 = sqrt(_455);
            }
            float _483 = _479;
            if (!_477)
            {
                _483 = 1.0;
            }
            bool _485 = fma(_423 * inversesqrt(_455), fp_c10_1._m0[558].z, (_425 * inversesqrt(_455)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _487 = clamp(fma(_471 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_471 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _489 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_425, fma(_465, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_423 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_465 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_425, fma(_465, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_423 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_465 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            if (!_485)
            {
                _481 = 1.0;
            }
            float _491 = _481;
            if (_485)
            {
                _491 = fma(_489, -_489, fp_c1_1._m0[1].y) * fma(_489, -_489, fp_c1_1._m0[1].y);
            }
            float _493 = exp2(_469 * fma(_469, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _495 = (_233 * (1.0 / (_219 + fma(_219, -_473, _473)))) * ((_231 * (1.0 / max(fma(_235, _475, -_475) + 1.0, fp_c1_1._m0[0].z))) * (_231 * (1.0 / max(fma(_235, _475, -_475) + 1.0, fp_c1_1._m0[0].z))));
            float _497 = (min(fma(_487, -_487, fp_c1_1._m0[1].y) * fma(_487, -_487, fp_c1_1._m0[1].y), _491) * (exp2(log2(clamp(fma(_483, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_445 * _467, -fp_c10_1._m0[558].z, (_441 * _467) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_457 + (-0.0), 0.0, 1.0);
            float _499 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_237, fp_c10_1._m0[562].z, fma(_417, fp_c10_1._m0[562].y, _227 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _419, 0.5, 0.5), (-fma((fma(_237, fp_c10_1._m0[563].z, fma(_417, fp_c10_1._m0[563].y, _227 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _419, 0.5, 0.5)) + 1.0)).z > fma((fma(_237, fp_c10_1._m0[564].z, fma(_417, fp_c10_1._m0[564].y, _227 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _419, 0.5, 0.5)) || (_471 <= 0.0));
            _305 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _497) * fma(_249, fp_c1_1._m0[1].z, ((_260 + fma(_260, -_493, _493)) * _495) * 0.079577468335628509521484375), _499, _317);
            _307 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _497) * fma(_262, fp_c1_1._m0[1].z, ((_258 + fma(_258, -_493, _493)) * _495) * 0.079577468335628509521484375), _499, _319);
            _309 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _497) * fma(_275, fp_c1_1._m0[1].z, ((_264 + fma(_264, -_493, _493)) * _495) * 0.079577468335628509521484375), _499, _321);
        }
    }
    float _501 = _227 + (-fp_c3_1._m0[11].w);
    float _503 = _80.y;
    float _505 = _237 + (-fp_c3_1._m0[13].w);
    float _507 = _503 + (-fp_c3_1._m0[12].w);
    float _509 = fma(_505, _505, fma(_507, _507, _501 * _501));
    float _511 = clamp(fma(fma(_237, fp_c5_1._m0[14].z, fma(_503, fp_c5_1._m0[14].y, _227 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _513 = clamp(fma(_297 * _293, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _515 = fma(_178, fp_c6_1._m0[11].x, fma(_293, _305, _297 * (fma(_256 * (_260 + fma(_260, -_251, _251)), fp_c1_1._m0[1].x, _249 * 0.3183098733425140380859375) * fma(_245, fp_c5_1._m0[5].x, _287))));
    float _517 = fma(_180, fp_c6_1._m0[11].x, fma(_293, _307, _297 * (fma(_256 * (_258 + fma(_258, -_251, _251)), fp_c1_1._m0[1].x, _262 * 0.3183098733425140380859375) * fma(_245, fp_c5_1._m0[5].y, _285))));
    float _519 = exp2(log2(clamp(sqrt(_509) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_505 * inversesqrt(_509), fp_c5_1._m0[23].z, fma(_507 * inversesqrt(_509), fp_c5_1._m0[23].y, (_501 * inversesqrt(_509)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _521 = fma(_182, fp_c6_1._m0[11].x, fma(_293, _309, _297 * (fma(_256 * (_264 + fma(_264, -_251, _251)), fp_c1_1._m0[1].x, _275 * 0.3183098733425140380859375) * fma(_245, fp_c5_1._m0[5].z, _283))));
    float _523 = fma((-_515) + fp_c5_1._m0[13].x, _511, _515);
    float _525 = fma((-_517) + fp_c5_1._m0[13].y, _511, _517);
    float _527 = fma((-_521) + fp_c5_1._m0[13].z, _511, _521);
    float _529 = clamp((-exp2((clamp(fma(sqrt(_509), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_523) + fma(fma((_519 * fp_c7_1._m0[55].x) * _513, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _529, _523);
    _83.y = fma((-_525) + fma(fma((_519 * fp_c7_1._m0[55].y) * _513, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _529, _525);
    _83.z = fma((-_527) + fma(fma((_519 * fp_c7_1._m0[55].z) * _513, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _529, _527);
    _83.w = 1.0;
}


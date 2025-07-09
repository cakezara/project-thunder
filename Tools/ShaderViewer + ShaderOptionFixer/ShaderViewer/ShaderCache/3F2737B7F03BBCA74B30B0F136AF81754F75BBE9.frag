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

layout(location = 0) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 2) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 7) in vec4 _72;
layout(location = 6) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 3) in vec4 _78;
layout(location = 0) out vec4 _81;
uint _6[12];

void main()
{
    bool _321 = false;
    float _88 = _64.x;
    float _90 = _64.y;
    vec2 _94 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _96 = _94.x;
    float _98 = _94.y;
    float _100 = _66.x;
    float _102 = _66.y;
    float _104 = _66.z;
    float _106 = _68.y;
    float _108 = _68.z;
    float _110 = _68.x;
    float _112 = _68.w;
    float _114 = _70.x;
    float _116 = _70.y;
    float _118 = _70.z;
    float _120 = inversesqrt(fma(_104, _104, fma(_102, _102, _100 * _100)));
    float _122 = _104 * _120;
    float _124 = _100 * _120;
    float _126 = _102 * _120;
    float _128 = sqrt(clamp((-fma(_96, _96, _98 * _98)) + 1.0, 0.0, 1.0));
    float _130 = fma(_124, _128, fma(_96, _110, _98 * (fma(_126, _108, -(_122 * _106)) * _112)));
    float _132 = 1.0 / (_74.z * gl_FragCoord.w);
    float _134 = fma(_126, _128, fma(_96, _106, _98 * (fma(_122, _110, -(_124 * _108)) * _112)));
    float _136 = fma(_122, _128, fma(_96, _108, _98 * (fma(_124, _106, -(_126 * _110)) * _112)));
    float _138 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _140 = inversesqrt(fma(_136, _136, fma(_134, _134, _130 * _130)));
    float _142 = _114 * (-_138);
    float _144 = _116 * (-_138);
    float _146 = _118 * (-_138);
    float _148 = _130 * _140;
    float _150 = _134 * _140;
    float _152 = _136 * _140;
    float _154 = fma(_152, _146, fma(_150, _144, _148 * _142));
    float _156 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _158 = max(_154, fp_c1_1._m0[0].z);
    float _160 = fma(_148 * (-_154), -2.0, -_142);
    float _162 = fma(_150 * (-_154), -2.0, -_144);
    float _164 = fma(_152 * (-_154), -2.0, -_146);
    float _166 = 1.0 / _76.w;
    float _168 = 1.0 / max(abs(_164), max(abs(_160), abs(_162)));
    vec2 _170 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _166, 0.5, 0.5), fma(_76.y * _166, -0.5, 0.5))).xy;
    vec3 _174 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _176 = _174.x;
    float _178 = _174.y;
    float _180 = _174.z;
    float _182 = texture(fp_tex_tcb_12, vec2(_88, _90)).x;
    vec2 _184 = texture(fp_tex_tcb_38, vec2(_158, (-_156) + (-0.0))).xy;
    float _186 = _184.x;
    float _188 = _184.y;
    vec3 _190 = texture(fp_tex_tcb_36, vec4(_160 * _168, _162 * _168, _164 * _168, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_156 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _192 = texture(fp_tex_tcb_22, vec2(_72.x, _72.y)).xy;
    vec4 _195 = texture(fp_tex_tcb_24, vec2(_72.z, _72.w)).xyzw;
    float _197 = _195.w;
    float _199 = _142 + (-fp_c5_1._m0[23].x);
    float _201 = _144 + (-fp_c5_1._m0[23].y);
    float _203 = _146 + (-fp_c5_1._m0[23].z);
    float _205 = _152 * _152;
    float _207 = _150 * _152;
    float _209 = _148 * _150;
    float _211 = fma(_156, 0.5, 0.5);
    float _213 = inversesqrt(fma(_203, _203, fma(_201, _201, _199 * _199)));
    float _215 = (_211 * 0.5) * _211;
    float _217 = _78.x;
    float _219 = _78.z;
    float _221 = _148 * _152;
    float _223 = _199 * _213;
    float _225 = _201 * _213;
    float _227 = _203 * _213;
    float _229 = 1.0 / (_215 + fma(_158, -_215, _158));
    float _231 = fma(_148, _148, -(_150 * _150));
    float _233 = _156 * _156;
    float _235 = fma(_150, -fp_c5_1._m0[23].y, _148 * (-fp_c5_1._m0[23].x));
    float _237 = max(fma(_152, _227, fma(_150, _225, _148 * _223)), fp_c1_1._m0[0].z) * max(fma(_152, _227, fma(_150, _225, _148 * _223)), fp_c1_1._m0[0].z);
    float _239 = clamp(fma(_152, -fp_c5_1._m0[23].z, _235), 0.0, 1.0);
    float _241 = max(fma(_152, -fp_c5_1._m0[23].z, _235), fp_c1_1._m0[0].z);
    float _243 = max(fma(_146, _227, fma(_144, _225, _142 * _223)), fp_c1_1._m0[0].z);
    int _246 = max(0, min(int(trunc((_219 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _248 = exp2(_243 * fma(_243, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _250 = fma(_178, -_182, _178);
    uint _253 = uint(int(uint((((int(uint(_246) >> uint(16)) * 20) << 16) + (((_246 & 65535) * 20) + max(0, min(int(trunc((_217 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _255 = fp_c10_1._m0[int(uint(int(_253)) >> uint(2))][int(_253) & 3];
    float _257 = fma(_182, _176 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _259 = fma(_182, _178 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _261 = fma(_182, _180 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _263 = fma(_180, -_182, _180);
    float _265 = _74.w;
    float _267 = (_229 * (1.0 / (_215 + fma(_215, -_241, _241)))) * ((_233 * (1.0 / max(fma(_237, _233 * _233, -_237) + 1.0, fp_c1_1._m0[0].z))) * (_233 * (1.0 / max(fma(_237, _233 * _233, -_237) + 1.0, fp_c1_1._m0[0].z))));
    float _269 = fma(_176, -_182, _176);
    float _271 = fma(_257, -_269, _269);
    float _273 = fma(_259, -_250, _250);
    float _275 = fma(_261, -_263, _263);
    float _277 = ((_195.y * _197) * _265) * 32.0;
    float _279 = clamp(_265 * clamp(fma(_192.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _281 = ((_195.x * _197) * _265) * 32.0;
    float _283 = ((_195.z * _197) * _265) * 32.0;
    float _285 = fma(_273, _277, fma(_190.y, fma(_259, _186, _188), max(0.0, fma(_231, fp_c5_1._m0[31].y, (fma(_152, fp_c5_1._m0[26].z, fma(_150, fp_c5_1._m0[26].y, _148 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_221, fp_c5_1._m0[29].w, fma(_205, fp_c5_1._m0[29].z, fma(_207, fp_c5_1._m0[29].y, _209 * fp_c5_1._m0[29].x))))) * _273));
    float _287 = clamp((-_279) + 1.0, 0.0, 1.0);
    float _289 = fma(_271, _281, fma(_190.x, fma(_257, _186, _188), max(0.0, fma(_231, fp_c5_1._m0[31].x, (fma(_152, fp_c5_1._m0[25].z, fma(_150, fp_c5_1._m0[25].y, _148 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_221, fp_c5_1._m0[28].w, fma(_205, fp_c5_1._m0[28].z, fma(_207, fp_c5_1._m0[28].y, _209 * fp_c5_1._m0[28].x))))) * _271));
    float _291 = fma(_275, _283, fma(_190.z, fma(_261, _186, _188), max(0.0, fma(_231, fp_c5_1._m0[31].z, (fma(_152, fp_c5_1._m0[27].z, fma(_150, fp_c5_1._m0[27].y, _148 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_221, fp_c5_1._m0[30].w, fma(_205, fp_c5_1._m0[30].z, fma(_207, fp_c5_1._m0[30].y, _209 * fp_c5_1._m0[30].x))))) * _275));
    float _293 = clamp((-fma(_279, fp_c7_1._m0[37].w, clamp(_265 * clamp(fma(_192.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_170.x) + 1.0, (-_170.y) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_74.x * gl_FragCoord.w) * _132, (_74.y * gl_FragCoord.w) * _132)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    int _295 = floatBitsToInt(_255);
    float _297 = _289;
    float _299 = _285;
    float _301 = _291;
    float _303 = _289;
    float _305 = _285;
    float _307 = _291;
    if (floatBitsToInt(_255) != (-1))
    {
        int _309 = 0;
        float _313;
        float _315;
        float _317;
        int _403;
        do
        {
            int _311 = _295 & 255;
            _313 = _297;
            _315 = _299;
            _317 = _301;
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
            float _333 = fp_c10_1._m0[int(uint(_327) >> uint(2))][_327 & 3] + (-_78.y);
            float _335 = (-_219) + fp_c10_1._m0[int(uint(int(_329)) >> uint(2))][int(_329) & 3];
            float _337 = fma(_335, _335, fma(_333, _333, _331 * _331));
            float _339 = _331 * inversesqrt(_337);
            float _341 = _333 * inversesqrt(_337);
            float _343 = _335 * inversesqrt(_337);
            float _345 = _142 + _339;
            float _347 = _144 + _341;
            float _349 = _146 + _343;
            float _351 = inversesqrt(fma(_349, _349, fma(_347, _347, _345 * _345)));
            float _353 = _345 * _351;
            float _355 = _347 * _351;
            float _357 = _349 * _351;
            uint _359 = uint(int(uint(_323 + 6880) >> uint(2)));
            int _361 = int(_359) + 1;
            float _363 = fma(_152, _343, fma(_150, _341, _148 * _339));
            float _365 = max(fma(_146, _357, fma(_144, _355, _142 * _353)), fp_c1_1._m0[0].z);
            float _367 = max(fma(_152, _357, fma(_150, _355, _148 * _353)), fp_c1_1._m0[0].z) * max(fma(_152, _357, fma(_150, _355, _148 * _353)), fp_c1_1._m0[0].z);
            float _369 = max(_363, fp_c1_1._m0[0].z);
            uint _371 = uint(int(uint(_323 + 8320) >> uint(2)));
            float _373 = exp2(_365 * fma(_365, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _375 = (_229 * (1.0 / (_215 + fma(_215, -_369, _369)))) * ((_233 * (1.0 / max(fma(_233 * _233, _367, -_367) + 1.0, fp_c1_1._m0[0].z))) * (_233 * (1.0 / max(fma(_233 * _233, _367, -_367) + 1.0, fp_c1_1._m0[0].z))));
            uint _377 = uint(int(uint(_323 + 6408) >> uint(2)));
            float _379 = (_259 + fma(_259, -_373, _373)) * _375;
            bool _381 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_371)) >> uint(2))][int(_371) & 3]) != 0;
            uint _383 = uint(int(uint(_323 + 6400) >> uint(2)));
            int _385 = int(_383) + 1;
            float _387 = _379;
            if (!_381)
            {
                _387 = 1.0;
            }
            float _389 = _387;
            if (_381)
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
            float _405 = (exp2(fp_c10_1._m0[int(uint(_361) >> uint(2))][_361 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_359)) >> uint(2))][int(_359) & 3], -sqrt(_337), fp_c1_1._m0[1].y), 0.0, 1.0))) * _389) * clamp(_363 + (-0.0), 0.0, 1.0);
            float _407 = fma(fp_c10_1._m0[int(uint(int(_383)) >> uint(2))][int(_383) & 3] * _405, fma(_269, fp_c1_1._m0[1].z, ((_257 + fma(_257, -_373, _373)) * _375) * 0.079577468335628509521484375), _297);
            float _409 = fma(fp_c10_1._m0[int(uint(_385) >> uint(2))][_385 & 3] * _405, fma(_250, fp_c1_1._m0[1].z, _379 * 0.079577468335628509521484375), _299);
            float _411 = fma(fp_c10_1._m0[int(uint(int(_377)) >> uint(2))][int(_377) & 3] * _405, fma(_263, fp_c1_1._m0[1].z, ((_261 + fma(_261, -_373, _373)) * _375) * 0.079577468335628509521484375), _301);
            _295 = int(uint(_295) >> uint(8));
            _309 = _403;
            _297 = _407;
            _299 = _409;
            _301 = _411;
            _313 = _407;
            _315 = _409;
            _317 = _411;
        } while (!(_403 >= 4));
        _321 = false;
        _303 = _313;
        _305 = _315;
        _307 = _317;
        if ((_295 & 255) == 30)
        {
            float _413 = 1.0 / fp_c10_1._m0[561].y;
            float _415 = _219 + (-fp_c10_1._m0[557].z);
            float _417 = (-_217) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_413, fp_c10_1._m0[557].x);
            float _419 = (-_219) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_413, fp_c10_1._m0[557].z);
            float _421 = _417 * _417;
            float _423 = sqrt(fma(_419, _419, _421)) * (-fp_c10_1._m0[558].y);
            float _425 = _217 + (-fp_c10_1._m0[557].x);
            float _427 = inversesqrt(fma(_419, _419, fma(_423, _423, _421)));
            float _429 = _417 * _427;
            float _431 = _423 * _427;
            float _433 = _419 * _427;
            float _435 = _425 * fp_c10_1._m0[558].z;
            float _437 = _142 + _429;
            float _439 = _144 + _431;
            float _441 = _146 + _433;
            float _443 = _415 * fp_c10_1._m0[558].x;
            float _445 = inversesqrt(fma(_441, _441, fma(_439, _439, _437 * _437)));
            float _447 = _78.y;
            float _449 = _437 * _445;
            float _451 = ((-float(_443 < _435)) + float(_443 > _435)) * fp_c10_1._m0[561].y;
            float _453 = _439 * _445;
            float _455 = fma(_415, _415, _425 * _425);
            float _457 = 1.0 / (fma(_219, fp_c10_1._m0[565].z, fma(_447, fp_c10_1._m0[565].y, _217 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _459 = fma(_415, fp_c10_1._m0[558].z, _425 * fp_c10_1._m0[558].x);
            float _461 = fma(_152, _433, fma(_150, _431, _148 * _429));
            bool _463 = _459 > 0.0;
            float _465 = inversesqrt(fma(_433, _433, _429 * _429));
            float _467 = _441 * _445;
            float _469 = _441;
            if (_463)
            {
                _469 = sqrt(_455);
            }
            float _471 = _469;
            if (!_463)
            {
                _471 = 1.0;
            }
            bool _473 = fma(_415 * inversesqrt(_455), fp_c10_1._m0[558].z, (_425 * inversesqrt(_455)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _475 = max(fma(_152, _467, fma(_150, _453, _148 * _449)), fp_c1_1._m0[0].z) * max(fma(_152, _467, fma(_150, _453, _148 * _449)), fp_c1_1._m0[0].z);
            float _477 = clamp(fma(_459 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_459 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _479 = max(fma(_146, _467, fma(_144, _453, _142 * _449)), fp_c1_1._m0[0].z);
            float _481 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_425, fma(_451, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_415 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_451 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_425, fma(_451, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_415 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_451 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _483 = max(_461, fp_c1_1._m0[0].z);
            float _485 = log2(clamp(fma(_471, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _487 = _485;
            if (_473)
            {
                _487 = fma(_481, -_481, fp_c1_1._m0[1].y) * fma(_481, -_481, fp_c1_1._m0[1].y);
            }
            float _489 = exp2(_479 * fma(_479, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _491 = _487;
            if (!_473)
            {
                _491 = 1.0;
            }
            float _493 = (min(fma(_477, -_477, fp_c1_1._m0[1].y) * fma(_477, -_477, fp_c1_1._m0[1].y), _491) * (exp2(_485) * exp2(log2(clamp((fma(_433 * _465, -fp_c10_1._m0[558].z, (_429 * _465) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_461 + (-0.0), 0.0, 1.0);
            float _495 = (_229 * (1.0 / (_215 + fma(_215, -_483, _483)))) * ((_233 * (1.0 / max(fma(_233 * _233, _475, -_475) + 1.0, fp_c1_1._m0[0].z))) * (_233 * (1.0 / max(fma(_233 * _233, _475, -_475) + 1.0, fp_c1_1._m0[0].z))));
            float _497 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_219, fp_c10_1._m0[562].z, fma(_447, fp_c10_1._m0[562].y, _217 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _457, 0.5, 0.5), (-fma((fma(_219, fp_c10_1._m0[563].z, fma(_447, fp_c10_1._m0[563].y, _217 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _457, 0.5, 0.5)) + 1.0)).z > fma((fma(_219, fp_c10_1._m0[564].z, fma(_447, fp_c10_1._m0[564].y, _217 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _457, 0.5, 0.5)) || (_459 <= 0.0));
            _303 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _493) * fma(_269, fp_c1_1._m0[1].z, ((_257 + fma(_257, -_489, _489)) * _495) * 0.079577468335628509521484375), _497, _313);
            _305 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _493) * fma(_250, fp_c1_1._m0[1].z, ((_259 + fma(_259, -_489, _489)) * _495) * 0.079577468335628509521484375), _497, _315);
            _307 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _493) * fma(_263, fp_c1_1._m0[1].z, ((_261 + fma(_261, -_489, _489)) * _495) * 0.079577468335628509521484375), _497, _317);
        }
    }
    float _499 = _217 + (-fp_c3_1._m0[11].w);
    float _501 = _219 + (-fp_c3_1._m0[13].w);
    float _503 = _78.y + (-fp_c3_1._m0[12].w);
    float _505 = fma(_501, _501, fma(_503, _503, _499 * _499));
    float _507 = exp2(fma(fma(_501 * inversesqrt(_505), fp_c5_1._m0[23].z, fma(_503 * inversesqrt(_505), fp_c5_1._m0[23].y, (_499 * inversesqrt(_505)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_505) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _509 = clamp(fma(_293 * _287, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _511 = fma(_287, _303, _293 * (fma(_267 * (_257 + fma(_257, -_248, _248)), fp_c1_1._m0[1].x, _269 * 0.3183098733425140380859375) * fma(_239, fp_c5_1._m0[5].x, _281)));
    float _513 = fma(_287, _305, _293 * (fma(_267 * (_259 + fma(_259, -_248, _248)), fp_c1_1._m0[1].x, _250 * 0.3183098733425140380859375) * fma(_239, fp_c5_1._m0[5].y, _277)));
    float _515 = fma(_287, _307, _293 * (fma(_267 * (_261 + fma(_261, -_248, _248)), fp_c1_1._m0[1].x, _263 * 0.3183098733425140380859375) * fma(_239, fp_c5_1._m0[5].z, _283)));
    float _517 = clamp((-exp2((clamp(fma(sqrt(_505), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma(fma(fma((_507 * fp_c7_1._m0[55].x) * _509, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_511), _517, _511);
    _81.y = fma(fma(fma((_507 * fp_c7_1._m0[55].y) * _509, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_513), _517, _513);
    _81.z = fma(fma(fma((_507 * fp_c7_1._m0[55].z) * _509, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_515), _517, _515);
    _81.w = 1.0;
}


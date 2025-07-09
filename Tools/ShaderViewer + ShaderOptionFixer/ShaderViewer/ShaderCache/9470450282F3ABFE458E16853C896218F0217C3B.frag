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
layout(binding = 4) uniform sampler2D fp_tex_tcb_22;
layout(binding = 5) uniform sampler2D fp_tex_tcb_24;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 2) in vec4 _66;
layout(location = 4) in vec4 _68;
layout(location = 7) in vec4 _70;
layout(location = 5) in vec4 _72;
layout(location = 3) in vec4 _74;
layout(location = 6) in vec4 _76;
layout(location = 0) out vec4 _79;
uint _6[12];

void main()
{
    bool _317 = false;
    float _86 = _62.x;
    float _88 = _62.y;
    vec2 _92 = texture(fp_tex_tcb_E, vec2(_86, _88)).xy;
    float _94 = _92.x;
    float _96 = _92.y;
    float _98 = _64.x;
    float _100 = _64.y;
    float _102 = _64.z;
    float _104 = _66.y;
    float _106 = _66.z;
    float _108 = _66.x;
    float _110 = _66.w;
    float _112 = _68.x;
    float _114 = _68.y;
    float _116 = _68.z;
    float _118 = inversesqrt(fma(_102, _102, fma(_100, _100, _98 * _98)));
    float _120 = _102 * _118;
    float _122 = _98 * _118;
    float _124 = _100 * _118;
    float _126 = sqrt(clamp((-fma(_94, _94, _96 * _96)) + 1.0, 0.0, 1.0));
    float _128 = fma(_122, _126, fma(_94, _108, _96 * (fma(_124, _106, -(_120 * _104)) * _110)));
    float _130 = fma(_124, _126, fma(_94, _104, _96 * (fma(_120, _108, -(_122 * _106)) * _110)));
    float _132 = fma(_120, _126, fma(_94, _106, _96 * (fma(_122, _104, -(_124 * _108)) * _110)));
    float _134 = inversesqrt(fma(_116, _116, fma(_114, _114, _112 * _112)));
    float _136 = inversesqrt(fma(_132, _132, fma(_130, _130, _128 * _128)));
    float _138 = _112 * (-_134);
    float _140 = _114 * (-_134);
    float _142 = _116 * (-_134);
    float _144 = _128 * _136;
    float _146 = _130 * _136;
    float _148 = _132 * _136;
    float _150 = fma(_148, _142, fma(_146, _140, _144 * _138));
    float _152 = max(texture(fp_tex_tcb_10, vec2(_86, _88)).x, fp_c1_1._m0[0].x);
    float _154 = max(_150, fp_c1_1._m0[0].z);
    float _156 = fma(_144 * (-_150), -2.0, -_138);
    float _158 = fma(_146 * (-_150), -2.0, -_140);
    float _160 = fma(_148 * (-_150), -2.0, -_142);
    float _162 = 1.0 / _72.w;
    float _164 = 1.0 / max(abs(_160), max(abs(_156), abs(_158)));
    vec2 _166 = texture(fp_tex_tcb_2A, vec2(fma(_72.x * _162, 0.5, 0.5), fma(_72.y * _162, -0.5, 0.5))).xy;
    float _168 = _138 + (-fp_c5_1._m0[23].x);
    vec2 _170 = texture(fp_tex_tcb_22, vec2(_70.x, _70.y)).xy;
    vec3 _174 = texture(fp_tex_tcb_A, vec2(_86, _88)).xyz;
    float _176 = _174.x;
    float _178 = _174.y;
    float _180 = _174.z;
    float _182 = texture(fp_tex_tcb_12, vec2(_86, _88)).x;
    vec2 _184 = texture(fp_tex_tcb_38, vec2(_154, (-_152) + (-0.0))).xy;
    float _186 = _184.x;
    float _188 = _184.y;
    vec3 _190 = texture(fp_tex_tcb_36, vec4(_156 * _164, _158 * _164, _160 * _164, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_152 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec4 _193 = texture(fp_tex_tcb_24, vec2(_70.z, _70.w)).xyzw;
    float _195 = _193.w;
    float _197 = _144 * _146;
    float _199 = _140 + (-fp_c5_1._m0[23].y);
    float _201 = _146 * _148;
    float _203 = _142 + (-fp_c5_1._m0[23].z);
    float _205 = _148 * _148;
    float _207 = fma(_152, 0.5, 0.5);
    float _209 = (_207 * 0.5) * _207;
    float _211 = _74.x;
    float _213 = _74.z;
    float _215 = inversesqrt(fma(_203, _203, fma(_199, _199, _168 * _168)));
    float _217 = _144 * _148;
    float _219 = _199 * _215;
    float _221 = _168 * _215;
    float _223 = _203 * _215;
    float _225 = 1.0 / (_209 + fma(_154, -_209, _154));
    float _227 = max(fma(_148, _223, fma(_146, _219, _144 * _221)), fp_c1_1._m0[0].z) * max(fma(_148, _223, fma(_146, _219, _144 * _221)), fp_c1_1._m0[0].z);
    float _229 = fma(_144, _144, -(_146 * _146));
    float _231 = _152 * _152;
    float _233 = _76.w;
    float _235 = fma(_146, -fp_c5_1._m0[23].y, _144 * (-fp_c5_1._m0[23].x));
    float _237 = clamp(fma(_148, -fp_c5_1._m0[23].z, _235), 0.0, 1.0);
    float _239 = max(fma(_142, _223, fma(_140, _219, _138 * _221)), fp_c1_1._m0[0].z);
    int _242 = max(0, min(int(trunc((_213 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _244 = max(fma(_148, -fp_c5_1._m0[23].z, _235), fp_c1_1._m0[0].z);
    float _246 = exp2(_239 * fma(_239, fp_c1_1._m0[0].w, -6.9831600189208984375));
    uint _249 = uint(int(uint((((int(uint(_242) >> uint(16)) * 20) << 16) + (((_242 & 65535) * 20) + max(0, min(int(trunc((_211 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _251 = fp_c10_1._m0[int(uint(int(_249)) >> uint(2))][int(_249) & 3];
    float _253 = fma(_182, _176 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _255 = fma(_182, _178 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _257 = fma(_182, _180 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _259 = fma(_178, -_182, _178);
    float _261 = (_225 * (1.0 / (_209 + fma(_209, -_244, _244)))) * ((_231 * (1.0 / max(fma(_227, _231 * _231, -_227) + 1.0, fp_c1_1._m0[0].z))) * (_231 * (1.0 / max(fma(_227, _231 * _231, -_227) + 1.0, fp_c1_1._m0[0].z))));
    float _263 = fma(_176, -_182, _176);
    float _265 = fma(_180, -_182, _180);
    float _267 = fma(_253, -_263, _263);
    float _269 = fma(_255, -_259, _259);
    float _271 = fma(_257, -_265, _265);
    float _273 = clamp(_233 * clamp(fma(_170.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _275 = ((_193.x * _195) * _233) * 32.0;
    float _277 = ((_193.y * _195) * _233) * 32.0;
    float _279 = ((_193.z * _195) * _233) * 32.0;
    float _281 = fma(_267, _275, fma(_190.x, fma(_253, _186, _188), max(0.0, fma(_229, fp_c5_1._m0[31].x, (fma(_148, fp_c5_1._m0[25].z, fma(_146, fp_c5_1._m0[25].y, _144 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_217, fp_c5_1._m0[28].w, fma(_205, fp_c5_1._m0[28].z, fma(_201, fp_c5_1._m0[28].y, _197 * fp_c5_1._m0[28].x))))) * _267));
    float _283 = fma(_269, _277, fma(_190.y, fma(_255, _186, _188), max(0.0, fma(_229, fp_c5_1._m0[31].y, (fma(_148, fp_c5_1._m0[26].z, fma(_146, fp_c5_1._m0[26].y, _144 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_217, fp_c5_1._m0[29].w, fma(_205, fp_c5_1._m0[29].z, fma(_201, fp_c5_1._m0[29].y, _197 * fp_c5_1._m0[29].x))))) * _269));
    float _285 = fma(_271, _279, fma(_190.z, fma(_257, _186, _188), max(0.0, fma(_229, fp_c5_1._m0[31].z, (fma(_148, fp_c5_1._m0[27].z, fma(_146, fp_c5_1._m0[27].y, _144 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_217, fp_c5_1._m0[30].w, fma(_205, fp_c5_1._m0[30].z, fma(_201, fp_c5_1._m0[30].y, _197 * fp_c5_1._m0[30].x))))) * _271));
    float _287 = clamp((-_273) + 1.0, 0.0, 1.0);
    float _289 = clamp((-fma(_273, fp_c7_1._m0[37].w, fma(clamp(_74.w + fp_c7_1._m0[36].z, 0.0, 1.0), max((-_166.x) + 1.0, (-_166.y) + 1.0), clamp(_233 * clamp(fma(_170.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0)))) + 1.0, 0.0, 1.0);
    int _291 = floatBitsToInt(_251);
    float _293 = _285;
    float _295 = _281;
    float _297 = _283;
    float _299 = _281;
    float _301 = _283;
    float _303 = _285;
    if (floatBitsToInt(_251) != (-1))
    {
        int _305 = 0;
        float _309;
        float _311;
        float _313;
        int _399;
        do
        {
            int _307 = _291 & 255;
            _309 = _295;
            _311 = _297;
            _313 = _293;
            _317 = uint(_307) >= 30u;
            if (_317)
            {
                break;
            }
            int _319 = _307 << 4;
            uint _321 = uint(int(uint(_319 + 7360) >> uint(2)));
            int _323 = int(_321) + 1;
            uint _325 = uint(int(uint(_319 + 7368) >> uint(2)));
            float _327 = (-_211) + fp_c10_1._m0[int(uint(int(_321)) >> uint(2))][int(_321) & 3];
            float _329 = fp_c10_1._m0[int(uint(_323) >> uint(2))][_323 & 3] + (-_74.y);
            float _331 = (-_213) + fp_c10_1._m0[int(uint(int(_325)) >> uint(2))][int(_325) & 3];
            float _333 = fma(_331, _331, fma(_329, _329, _327 * _327));
            float _335 = _327 * inversesqrt(_333);
            float _337 = _329 * inversesqrt(_333);
            float _339 = _331 * inversesqrt(_333);
            float _341 = _138 + _335;
            float _343 = _140 + _337;
            float _345 = _142 + _339;
            float _347 = inversesqrt(fma(_345, _345, fma(_343, _343, _341 * _341)));
            float _349 = _341 * _347;
            float _351 = _343 * _347;
            float _353 = _345 * _347;
            float _355 = fma(_148, _339, fma(_146, _337, _144 * _335));
            float _357 = max(fma(_142, _353, fma(_140, _351, _138 * _349)), fp_c1_1._m0[0].z);
            float _359 = max(_355, fp_c1_1._m0[0].z);
            float _361 = max(fma(_148, _353, fma(_146, _351, _144 * _349)), fp_c1_1._m0[0].z) * max(fma(_148, _353, fma(_146, _351, _144 * _349)), fp_c1_1._m0[0].z);
            uint _363 = uint(int(uint(_319 + 6880) >> uint(2)));
            int _365 = int(_363) + 1;
            uint _367 = uint(int(uint(_319 + 8320) >> uint(2)));
            float _369 = exp2(_357 * fma(_357, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _371 = (_225 * (1.0 / (_209 + fma(_209, -_359, _359)))) * ((_231 * (1.0 / max(fma(_231 * _231, _361, -_361) + 1.0, fp_c1_1._m0[0].z))) * (_231 * (1.0 / max(fma(_231 * _231, _361, -_361) + 1.0, fp_c1_1._m0[0].z))));
            float _373 = (_255 + fma(_255, -_369, _369)) * _371;
            bool _375 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3]) != 0;
            uint _377 = uint(int(uint(_319 + 6408) >> uint(2)));
            uint _379 = uint(int(uint(_319 + 6400) >> uint(2)));
            int _381 = int(_379) + 1;
            float _383 = _373;
            if (!_375)
            {
                _383 = 1.0;
            }
            float _385 = _383;
            if (_375)
            {
                uint _387 = uint(int(uint(_319 + 7840) >> uint(2)));
                int _389 = int(_387) + 1;
                uint _391 = uint(int(uint(_319 + 7848) >> uint(2)));
                uint _393 = uint(int(uint(_319 + 6888) >> uint(2)));
                float _395 = fp_c10_1._m0[int(uint(int(_393)) >> uint(2))][int(_393) & 3];
                int _397 = int(_393) + 1;
                _385 = exp2(fp_c10_1._m0[int(uint(_397) >> uint(2))][_397 & 3] * log2(clamp(((-_395) + fma(_339, -fp_c10_1._m0[int(uint(int(_391)) >> uint(2))][int(_391) & 3], fma(_337, -fp_c10_1._m0[int(uint(_389) >> uint(2))][_389 & 3], _335 * (-fp_c10_1._m0[int(uint(int(_387)) >> uint(2))][int(_387) & 3])))) * (1.0 / ((-_395) + 1.0)), 0.0, 1.0)));
            }
            _399 = _305 + 1;
            float _401 = (exp2(fp_c10_1._m0[int(uint(_365) >> uint(2))][_365 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_363)) >> uint(2))][int(_363) & 3], -sqrt(_333), fp_c1_1._m0[1].y), 0.0, 1.0))) * _385) * clamp(_355 + (-0.0), 0.0, 1.0);
            float _403 = fma(fp_c10_1._m0[int(uint(int(_377)) >> uint(2))][int(_377) & 3] * _401, fma(_265, fp_c1_1._m0[1].z, ((_257 + fma(_257, -_369, _369)) * _371) * 0.079577468335628509521484375), _293);
            float _405 = fma(fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3] * _401, fma(_263, fp_c1_1._m0[1].z, ((_253 + fma(_253, -_369, _369)) * _371) * 0.079577468335628509521484375), _295);
            float _407 = fma(fp_c10_1._m0[int(uint(_381) >> uint(2))][_381 & 3] * _401, fma(_259, fp_c1_1._m0[1].z, _373 * 0.079577468335628509521484375), _297);
            _291 = int(uint(_291) >> uint(8));
            _305 = _399;
            _293 = _403;
            _295 = _405;
            _297 = _407;
            _309 = _405;
            _311 = _407;
            _313 = _403;
        } while (!(_399 >= 4));
        _317 = false;
        _299 = _309;
        _301 = _311;
        _303 = _313;
        if ((_291 & 255) == 30)
        {
            float _409 = 1.0 / fp_c10_1._m0[561].y;
            float _411 = _213 + (-fp_c10_1._m0[557].z);
            float _413 = (-_211) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_409, fp_c10_1._m0[557].x);
            float _415 = (-_213) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_409, fp_c10_1._m0[557].z);
            float _417 = _413 * _413;
            float _419 = _211 + (-fp_c10_1._m0[557].x);
            float _421 = sqrt(fma(_415, _415, _417)) * (-fp_c10_1._m0[558].y);
            float _423 = inversesqrt(fma(_415, _415, fma(_421, _421, _417)));
            float _425 = _411 * fp_c10_1._m0[558].x;
            float _427 = _413 * _423;
            float _429 = _421 * _423;
            float _431 = _415 * _423;
            float _433 = _419 * fp_c10_1._m0[558].z;
            float _435 = _138 + _427;
            float _437 = _140 + _429;
            float _439 = _142 + _431;
            float _441 = _74.y;
            float _443 = inversesqrt(fma(_439, _439, fma(_437, _437, _435 * _435)));
            float _445 = _435 * _443;
            float _447 = _437 * _443;
            float _449 = ((-float(_425 < _433)) + float(_425 > _433)) * fp_c10_1._m0[561].y;
            float _451 = fma(_411, _411, _419 * _419);
            float _453 = 1.0 / (fma(_213, fp_c10_1._m0[565].z, fma(_441, fp_c10_1._m0[565].y, _211 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _455 = fma(_411, fp_c10_1._m0[558].z, _419 * fp_c10_1._m0[558].x);
            bool _457 = _455 > 0.0;
            float _459 = fma(_148, _431, fma(_146, _429, _144 * _427));
            float _461 = inversesqrt(fma(_431, _431, _427 * _427));
            float _463 = _439 * _443;
            float _465 = _439;
            if (_457)
            {
                _465 = sqrt(_451);
            }
            float _467 = _465;
            if (!_457)
            {
                _467 = 1.0;
            }
            bool _469 = fma(_411 * inversesqrt(_451), fp_c10_1._m0[558].z, (_419 * inversesqrt(_451)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _471 = max(fma(_148, _463, fma(_146, _447, _144 * _445)), fp_c1_1._m0[0].z) * max(fma(_148, _463, fma(_146, _447, _144 * _445)), fp_c1_1._m0[0].z);
            float _473 = max(_459, fp_c1_1._m0[0].z);
            float _475 = max(fma(_142, _463, fma(_140, _447, _138 * _445)), fp_c1_1._m0[0].z);
            float _477 = clamp(fma(_455 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_455 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _479 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_419, fma(_449, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_411 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_449 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_419, fma(_449, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_411 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_449 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _481 = log2(clamp(fma(_467, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _483 = _481;
            if (_469)
            {
                _483 = fma(_479, -_479, fp_c1_1._m0[1].y) * fma(_479, -_479, fp_c1_1._m0[1].y);
            }
            float _485 = _483;
            if (!_469)
            {
                _485 = 1.0;
            }
            float _487 = exp2(_475 * fma(_475, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _489 = (_225 * (1.0 / (_209 + fma(_209, -_473, _473)))) * ((_231 * (1.0 / max(fma(_231 * _231, _471, -_471) + 1.0, fp_c1_1._m0[0].z))) * (_231 * (1.0 / max(fma(_231 * _231, _471, -_471) + 1.0, fp_c1_1._m0[0].z))));
            float _491 = (min(fma(_477, -_477, fp_c1_1._m0[1].y) * fma(_477, -_477, fp_c1_1._m0[1].y), _485) * (exp2(_481) * exp2(log2(clamp((fma(_431 * _461, -fp_c10_1._m0[558].z, (_427 * _461) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_459 + (-0.0), 0.0, 1.0);
            float _493 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_213, fp_c10_1._m0[562].z, fma(_441, fp_c10_1._m0[562].y, _211 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _453, 0.5, 0.5), (-fma((fma(_213, fp_c10_1._m0[563].z, fma(_441, fp_c10_1._m0[563].y, _211 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _453, 0.5, 0.5)) + 1.0)).z > fma((fma(_213, fp_c10_1._m0[564].z, fma(_441, fp_c10_1._m0[564].y, _211 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _453, 0.5, 0.5)) || (_455 <= 0.0));
            _299 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _491) * fma(_263, fp_c1_1._m0[1].z, ((_253 + fma(_253, -_487, _487)) * _489) * 0.079577468335628509521484375), _493, _309);
            _301 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _491) * fma(_259, fp_c1_1._m0[1].z, ((_255 + fma(_255, -_487, _487)) * _489) * 0.079577468335628509521484375), _493, _311);
            _303 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _491) * fma(_265, fp_c1_1._m0[1].z, ((_257 + fma(_257, -_487, _487)) * _489) * 0.079577468335628509521484375), _493, _313);
        }
    }
    float _495 = _211 + (-fp_c3_1._m0[11].w);
    float _497 = _74.y;
    float _499 = _213 + (-fp_c3_1._m0[13].w);
    float _501 = fma(_287, _299, _289 * (fma(_261 * (_253 + fma(_253, -_246, _246)), fp_c1_1._m0[1].x, _263 * 0.3183098733425140380859375) * fma(_237, fp_c5_1._m0[5].x, _275)));
    float _503 = fma(_287, _301, _289 * (fma(_261 * (_255 + fma(_255, -_246, _246)), fp_c1_1._m0[1].x, _259 * 0.3183098733425140380859375) * fma(_237, fp_c5_1._m0[5].y, _277)));
    float _505 = fma(_287, _303, _289 * (fma(_261 * (_257 + fma(_257, -_246, _246)), fp_c1_1._m0[1].x, _265 * 0.3183098733425140380859375) * fma(_237, fp_c5_1._m0[5].z, _279)));
    float _507 = _497 + (-fp_c3_1._m0[12].w);
    float _509 = fma(_499, _499, fma(_507, _507, _495 * _495));
    float _511 = clamp(fma(_289 * _287, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _513 = clamp(fma(fma(_213, fp_c5_1._m0[14].z, fma(_497, fp_c5_1._m0[14].y, _211 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _515 = exp2(log2(clamp(sqrt(_509) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_499 * inversesqrt(_509), fp_c5_1._m0[23].z, fma(_507 * inversesqrt(_509), fp_c5_1._m0[23].y, (_495 * inversesqrt(_509)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _517 = fma((-_501) + fp_c5_1._m0[13].x, _513, _501);
    float _519 = fma((-_505) + fp_c5_1._m0[13].z, _513, _505);
    float _521 = fma((-_503) + fp_c5_1._m0[13].y, _513, _503);
    float _523 = clamp((-exp2((clamp(fma(sqrt(_509), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_517) + fma(fma((_515 * fp_c7_1._m0[55].x) * _511, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _523, _517);
    _79.y = fma((-_521) + fma(fma((_515 * fp_c7_1._m0[55].y) * _511, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _523, _521);
    _79.z = fma((-_519) + fma(fma((_515 * fp_c7_1._m0[55].z) * _511, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _523, _519);
    _79.w = 1.0;
}


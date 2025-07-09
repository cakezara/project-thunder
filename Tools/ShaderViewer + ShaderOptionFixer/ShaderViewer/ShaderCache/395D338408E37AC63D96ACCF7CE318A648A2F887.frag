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
    bool _317 = false;
    float _88 = 1.0 / (_64.z * gl_FragCoord.w);
    float _90 = _68.x;
    float _92 = _68.y;
    float _94 = 1.0 / _66.w;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    vec3 _106 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _108 = _106.x;
    float _110 = _106.y;
    float _112 = _106.z;
    float _114 = _70.x;
    float _116 = _70.y;
    float _118 = _70.z;
    float _120 = _72.y;
    float _122 = _72.z;
    float _124 = _72.x;
    float _126 = _72.w;
    float _128 = _74.x;
    float _130 = _74.y;
    float _132 = _74.z;
    float _134 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _136 = _118 * _134;
    float _138 = _114 * _134;
    float _140 = _116 * _134;
    float _142 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _144 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _146 = fma(_138, _144, fma(_100, _124, _102 * (fma(_140, _122, -(_136 * _120)) * _126)));
    float _148 = fma(_140, _144, fma(_100, _120, _102 * (fma(_136, _124, -(_138 * _122)) * _126)));
    float _150 = fma(_136, _144, fma(_100, _122, _102 * (fma(_138, _120, -(_140 * _124)) * _126)));
    float _152 = inversesqrt(fma(_132, _132, fma(_130, _130, _128 * _128)));
    float _154 = _128 * (-_152);
    float _156 = inversesqrt(fma(_150, _150, fma(_148, _148, _146 * _146)));
    float _158 = _130 * (-_152);
    float _160 = _132 * (-_152);
    float _162 = _146 * _156;
    float _164 = _148 * _156;
    float _166 = _150 * _156;
    float _168 = fma(_166, _160, fma(_164, _158, _162 * _154));
    float _170 = max(_168, fp_c1_1._m0[0].y);
    float _172 = fma(_162 * (-_168), -2.0, -_154);
    float _174 = fma(_164 * (-_168), -2.0, -_158);
    float _176 = fma(_166 * (-_168), -2.0, -_160);
    float _178 = _154 + (-fp_c5_1._m0[23].x);
    float _180 = 1.0 / max(abs(_176), max(abs(_172), abs(_174)));
    vec2 _182 = texture(fp_tex_tcb_38, vec2(_170, (-_142) + (-0.0))).xy;
    float _184 = _182.x;
    float _186 = _182.y;
    vec3 _188 = texture(fp_tex_tcb_36, vec4(_172 * _180, _174 * _180, _176 * _180, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_142 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _190 = texture(fp_tex_tcb_22, vec2(_76.x, _76.y)).xy;
    vec4 _193 = texture(fp_tex_tcb_24, vec2(_76.z, _76.w)).xyzw;
    float _195 = _193.w;
    float _197 = _158 + (-fp_c5_1._m0[23].y);
    float _199 = _78.z;
    float _201 = _78.x;
    float _203 = _160 + (-fp_c5_1._m0[23].z);
    float _205 = _164 * _166;
    float _207 = _162 * _164;
    float _209 = _166 * _166;
    float _211 = inversesqrt(fma(_203, _203, fma(_197, _197, _178 * _178)));
    float _213 = _178 * _211;
    float _215 = _197 * _211;
    float _217 = _203 * _211;
    float _219 = _162 * _166;
    float _221 = fma(_162, _162, -(_164 * _164));
    float _223 = _142 * _142;
    float _225 = fma(_164, -fp_c5_1._m0[23].y, _162 * (-fp_c5_1._m0[23].x));
    int _228 = max(0, min(int(trunc((_199 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _230 = max(fma(_166, _217, fma(_164, _215, _162 * _213)), fp_c1_1._m0[0].y) * max(fma(_166, _217, fma(_164, _215, _162 * _213)), fp_c1_1._m0[0].y);
    float _232 = fma(_142, 0.5, 0.5);
    float _234 = max(fma(_160, _217, fma(_158, _215, _154 * _213)), fp_c1_1._m0[0].y);
    float _236 = (_232 * 0.5) * _232;
    float _238 = clamp(fma(_166, -fp_c5_1._m0[23].z, _225), 0.0, 1.0);
    float _240 = max(fma(_166, -fp_c5_1._m0[23].z, _225), fp_c1_1._m0[0].y);
    float _242 = 1.0 / (_236 + fma(_170, -_236, _170));
    float _244 = exp2(_234 * fma(_234, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _246 = fma(_108 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _248 = fma(_110, -fp_c6_1._m0[9].x, _110);
    float _250 = fma(_110 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _252 = fma(_108, -fp_c6_1._m0[9].x, _108);
    uint _255 = uint(int(uint((((int(uint(_228) >> uint(16)) * 20) << 16) + (((_228 & 65535) * 20) + max(0, min(int(trunc((_201 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _257 = fp_c10_1._m0[int(uint(int(_255)) >> uint(2))][int(_255) & 3];
    float _259 = fma(_112 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _261 = fma(_112, -fp_c6_1._m0[9].x, _112);
    float _263 = (_242 * (1.0 / (_236 + fma(_236, -_240, _240)))) * ((_223 * (1.0 / max(fma(_230, _223 * _223, -_230) + 1.0, fp_c1_1._m0[0].y))) * (_223 * (1.0 / max(fma(_230, _223 * _223, -_230) + 1.0, fp_c1_1._m0[0].y))));
    float _265 = fma(_246, -_252, _252);
    float _267 = _64.w;
    float _269 = fma(_259, -_261, _261);
    float _271 = fma(_250, -_248, _248);
    float _273 = clamp(_267 * clamp(fma(_190.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _275 = ((_193.x * _195) * _267) * 32.0;
    float _277 = ((_193.y * _195) * _267) * 32.0;
    float _279 = ((_193.z * _195) * _267) * 32.0;
    float _281 = fma(_265, _275, fma(_188.x, fma(_246, _184, _186), max(0.0, fma(_221, fp_c5_1._m0[31].x, (fma(_166, fp_c5_1._m0[25].z, fma(_164, fp_c5_1._m0[25].y, _162 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_219, fp_c5_1._m0[28].w, fma(_209, fp_c5_1._m0[28].z, fma(_205, fp_c5_1._m0[28].y, _207 * fp_c5_1._m0[28].x))))) * _265));
    float _283 = fma(_271, _277, fma(_188.y, fma(_250, _184, _186), max(0.0, fma(_221, fp_c5_1._m0[31].y, (fma(_166, fp_c5_1._m0[26].z, fma(_164, fp_c5_1._m0[26].y, _162 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_219, fp_c5_1._m0[29].w, fma(_209, fp_c5_1._m0[29].z, fma(_205, fp_c5_1._m0[29].y, _207 * fp_c5_1._m0[29].x))))) * _271));
    float _285 = fma(_269, _279, fma(_188.z, fma(_259, _184, _186), max(0.0, fma(_221, fp_c5_1._m0[31].z, (fma(_166, fp_c5_1._m0[27].z, fma(_164, fp_c5_1._m0[27].y, _162 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_219, fp_c5_1._m0[30].w, fma(_209, fp_c5_1._m0[30].z, fma(_205, fp_c5_1._m0[30].y, _207 * fp_c5_1._m0[30].x))))) * _269));
    float _287 = clamp((-_273) + 1.0, 0.0, 1.0);
    float _289 = clamp((-fma(_273, fp_c7_1._m0[37].w, clamp(_267 * clamp(fma(_190.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), max(0.0, (-texture(fp_tex_tcb_2A, vec2(fma(_66.x * _94, 0.5, 0.5), fma(_66.y * _94, -0.5, 0.5))).x) + 1.0), fma(texture(fp_tex_tcb_28, vec2((_64.x * gl_FragCoord.w) * _88, (_64.y * gl_FragCoord.w) * _88)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    int _291 = floatBitsToInt(_257);
    float _293 = _285;
    float _295 = _281;
    float _297 = _283;
    float _299 = _285;
    float _301 = _283;
    float _303 = _281;
    if (floatBitsToInt(_257) != (-1))
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
            float _327 = (-_201) + fp_c10_1._m0[int(uint(int(_321)) >> uint(2))][int(_321) & 3];
            float _329 = fp_c10_1._m0[int(uint(_323) >> uint(2))][_323 & 3] + (-_78.y);
            float _331 = (-_199) + fp_c10_1._m0[int(uint(int(_325)) >> uint(2))][int(_325) & 3];
            float _333 = fma(_331, _331, fma(_329, _329, _327 * _327));
            float _335 = _327 * inversesqrt(_333);
            float _337 = _329 * inversesqrt(_333);
            float _339 = _331 * inversesqrt(_333);
            float _341 = _154 + _335;
            float _343 = _158 + _337;
            float _345 = _160 + _339;
            float _347 = inversesqrt(fma(_345, _345, fma(_343, _343, _341 * _341)));
            float _349 = _341 * _347;
            float _351 = _343 * _347;
            float _353 = _345 * _347;
            float _355 = fma(_166, _339, fma(_164, _337, _162 * _335));
            float _357 = max(fma(_160, _353, fma(_158, _351, _154 * _349)), fp_c1_1._m0[0].y);
            float _359 = max(_355, fp_c1_1._m0[0].y);
            float _361 = max(fma(_166, _353, fma(_164, _351, _162 * _349)), fp_c1_1._m0[0].y) * max(fma(_166, _353, fma(_164, _351, _162 * _349)), fp_c1_1._m0[0].y);
            uint _363 = uint(int(uint(_319 + 6880) >> uint(2)));
            int _365 = int(_363) + 1;
            uint _367 = uint(int(uint(_319 + 8320) >> uint(2)));
            float _369 = exp2(_357 * fma(_357, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _371 = (_242 * (1.0 / (_236 + fma(_236, -_359, _359)))) * ((_223 * (1.0 / max(fma(_223 * _223, _361, -_361) + 1.0, fp_c1_1._m0[0].y))) * (_223 * (1.0 / max(fma(_223 * _223, _361, -_361) + 1.0, fp_c1_1._m0[0].y))));
            float _373 = (_250 + fma(_250, -_369, _369)) * _371;
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
            float _401 = (exp2(fp_c10_1._m0[int(uint(_365) >> uint(2))][_365 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_363)) >> uint(2))][int(_363) & 3], -sqrt(_333), fp_c1_1._m0[1].x), 0.0, 1.0))) * _385) * clamp(_355 + (-0.0), 0.0, 1.0);
            float _403 = fma(fp_c10_1._m0[int(uint(int(_377)) >> uint(2))][int(_377) & 3] * _401, fma(_261, fp_c1_1._m0[1].y, ((_259 + fma(_259, -_369, _369)) * _371) * 0.079577468335628509521484375), _293);
            float _405 = fma(fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3] * _401, fma(_252, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_369, _369)) * _371) * 0.079577468335628509521484375), _295);
            float _407 = fma(fp_c10_1._m0[int(uint(_381) >> uint(2))][_381 & 3] * _401, fma(_248, fp_c1_1._m0[1].y, _373 * 0.079577468335628509521484375), _297);
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
        _299 = _313;
        _301 = _311;
        _303 = _309;
        if ((_291 & 255) == 30)
        {
            float _409 = 1.0 / fp_c10_1._m0[561].y;
            float _411 = _199 + (-fp_c10_1._m0[557].z);
            float _413 = (-_201) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_409, fp_c10_1._m0[557].x);
            float _415 = (-_199) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_409, fp_c10_1._m0[557].z);
            float _417 = _413 * _413;
            float _419 = _201 + (-fp_c10_1._m0[557].x);
            float _421 = sqrt(fma(_415, _415, _417)) * (-fp_c10_1._m0[558].y);
            float _423 = inversesqrt(fma(_415, _415, fma(_421, _421, _417)));
            float _425 = _419 * fp_c10_1._m0[558].z;
            float _427 = _413 * _423;
            float _429 = _421 * _423;
            float _431 = _415 * _423;
            float _433 = _154 + _427;
            float _435 = _158 + _429;
            float _437 = _160 + _431;
            float _439 = _411 * fp_c10_1._m0[558].x;
            float _441 = inversesqrt(fma(_437, _437, fma(_435, _435, _433 * _433)));
            float _443 = _78.y;
            float _445 = _433 * _441;
            float _447 = _435 * _441;
            float _449 = ((-float(_439 < _425)) + float(_439 > _425)) * fp_c10_1._m0[561].y;
            float _451 = fma(_411, _411, _419 * _419);
            float _453 = 1.0 / (fma(_199, fp_c10_1._m0[565].z, fma(_443, fp_c10_1._m0[565].y, _201 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _455 = fma(_411, fp_c10_1._m0[558].z, _419 * fp_c10_1._m0[558].x);
            bool _457 = _455 > 0.0;
            float _459 = fma(_166, _431, fma(_164, _429, _162 * _427));
            float _461 = _437 * _441;
            float _463 = inversesqrt(fma(_431, _431, _427 * _427));
            float _465 = max(fma(_160, _461, fma(_158, _447, _154 * _445)), fp_c1_1._m0[0].y);
            float _467 = max(fma(_166, _461, fma(_164, _447, _162 * _445)), fp_c1_1._m0[0].y) * max(fma(_166, _461, fma(_164, _447, _162 * _445)), fp_c1_1._m0[0].y);
            float _469 = _431;
            if (_457)
            {
                _469 = sqrt(_451);
            }
            float _471 = _469;
            if (!_457)
            {
                _471 = 1.0;
            }
            bool _473 = fma(_411 * inversesqrt(_451), fp_c10_1._m0[558].z, (_419 * inversesqrt(_451)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _475 = max(_459, fp_c1_1._m0[0].y);
            float _477 = clamp(fma(_455 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_455 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _479 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_419, fma(_449, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_411 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_449 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_419, fma(_449, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_411 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_449 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _481 = log2(clamp(fma(_471, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _483 = _481;
            if (!_473)
            {
                _483 = 1.0;
            }
            float _485 = _483;
            if (_473)
            {
                _485 = fma(_479, -_479, fp_c1_1._m0[1].x) * fma(_479, -_479, fp_c1_1._m0[1].x);
            }
            float _487 = exp2(_465 * fma(_465, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _489 = (min(fma(_477, -_477, fp_c1_1._m0[1].x) * fma(_477, -_477, fp_c1_1._m0[1].x), _485) * (exp2(_481) * exp2(log2(clamp((fma(_431 * _463, -fp_c10_1._m0[558].z, (_427 * _463) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_459 + (-0.0), 0.0, 1.0);
            float _491 = (_242 * (1.0 / (_236 + fma(_236, -_475, _475)))) * ((_223 * (1.0 / max(fma(_223 * _223, _467, -_467) + 1.0, fp_c1_1._m0[0].y))) * (_223 * (1.0 / max(fma(_223 * _223, _467, -_467) + 1.0, fp_c1_1._m0[0].y))));
            float _493 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_199, fp_c10_1._m0[562].z, fma(_443, fp_c10_1._m0[562].y, _201 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _453, 0.5, 0.5), (-fma((fma(_199, fp_c10_1._m0[563].z, fma(_443, fp_c10_1._m0[563].y, _201 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _453, 0.5, 0.5)) + 1.0)).z > fma((fma(_199, fp_c10_1._m0[564].z, fma(_443, fp_c10_1._m0[564].y, _201 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _453, 0.5, 0.5)) || (_455 <= 0.0));
            _299 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _489) * fma(_261, fp_c1_1._m0[1].y, ((_259 + fma(_259, -_487, _487)) * _491) * 0.079577468335628509521484375), _493, _313);
            _301 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _489) * fma(_248, fp_c1_1._m0[1].y, ((_250 + fma(_250, -_487, _487)) * _491) * 0.079577468335628509521484375), _493, _311);
            _303 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _489) * fma(_252, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_487, _487)) * _491) * 0.079577468335628509521484375), _493, _309);
        }
    }
    float _495 = _201 + (-fp_c3_1._m0[11].w);
    float _497 = _78.y;
    float _499 = _199 + (-fp_c3_1._m0[13].w);
    float _501 = fma(_287, _299, _289 * (fma(_263 * (_259 + fma(_259, -_244, _244)), fp_c1_1._m0[0].w, _261 * 0.3183098733425140380859375) * fma(_238, fp_c5_1._m0[5].z, _279)));
    float _503 = _497 + (-fp_c3_1._m0[12].w);
    float _505 = fma(_499, _499, fma(_503, _503, _495 * _495));
    float _507 = clamp(fma(_289 * _287, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _509 = fma(_287, _301, _289 * (fma(_263 * (_250 + fma(_250, -_244, _244)), fp_c1_1._m0[0].w, _248 * 0.3183098733425140380859375) * fma(_238, fp_c5_1._m0[5].y, _277)));
    float _511 = fma(_287, _303, _289 * (fma(_263 * (_246 + fma(_246, -_244, _244)), fp_c1_1._m0[0].w, _252 * 0.3183098733425140380859375) * fma(_238, fp_c5_1._m0[5].x, _275)));
    float _513 = exp2(log2(clamp(sqrt(_505) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_499 * inversesqrt(_505), fp_c5_1._m0[23].z, fma(_503 * inversesqrt(_505), fp_c5_1._m0[23].y, (_495 * inversesqrt(_505)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _515 = clamp(fma(fma(_199, fp_c5_1._m0[14].z, fma(_497, fp_c5_1._m0[14].y, _201 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _517 = fma((-_511) + fp_c5_1._m0[13].x, _515, _511);
    float _519 = fma((-_509) + fp_c5_1._m0[13].y, _515, _509);
    float _521 = fma((-_501) + fp_c5_1._m0[13].z, _515, _501);
    float _523 = clamp((-exp2((clamp(fma(sqrt(_505), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_517) + fma(fma((_513 * fp_c7_1._m0[55].x) * _507, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _523, _517);
    _81.y = fma((-_519) + fma(fma((_513 * fp_c7_1._m0[55].y) * _507, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _523, _519);
    _81.z = fma((-_521) + fma(fma((_513 * fp_c7_1._m0[55].z) * _507, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _523, _521);
    _81.w = 1.0;
}


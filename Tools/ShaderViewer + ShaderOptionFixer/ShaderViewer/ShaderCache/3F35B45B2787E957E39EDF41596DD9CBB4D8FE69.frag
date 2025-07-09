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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_E;
layout(binding = 1) uniform sampler2D fp_tex_tcb_10;
layout(binding = 2) uniform sampler2D fp_tex_tcb_18;
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
    bool _311 = false;
    float _88 = 1.0 / (_64.z * gl_FragCoord.w);
    float _90 = _68.x;
    float _92 = _68.y;
    float _94 = 1.0 / _66.w;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    vec2 _104 = texture(fp_tex_tcb_2A, vec2(fma(_66.x * _94, 0.5, 0.5), fma(_66.y * _94, -0.5, 0.5))).xy;
    float _106 = _70.x;
    float _108 = _70.y;
    float _110 = _70.z;
    float _112 = _72.x;
    float _114 = _72.y;
    float _116 = _72.z;
    float _118 = _72.w;
    float _120 = _74.x;
    float _122 = _74.y;
    float _124 = _74.z;
    float _126 = inversesqrt(fma(_110, _110, fma(_108, _108, _106 * _106)));
    float _128 = _108 * _126;
    float _130 = _110 * _126;
    float _132 = _106 * _126;
    float _134 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _136 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _138 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _140 = fma(_132, _136, fma(_100, _112, _102 * (fma(_128, _116, -(_130 * _114)) * _118)));
    float _142 = fma(_128, _136, fma(_100, _114, _102 * (fma(_130, _112, -(_132 * _116)) * _118)));
    float _144 = fma(_130, _136, fma(_100, _116, _102 * (fma(_132, _114, -(_128 * _112)) * _118)));
    float _146 = _120 * (-_138);
    float _148 = _122 * (-_138);
    float _150 = _124 * (-_138);
    float _152 = inversesqrt(fma(_144, _144, fma(_142, _142, _140 * _140)));
    float _154 = _140 * _152;
    float _156 = _142 * _152;
    float _158 = _144 * _152;
    float _160 = fma(_158, _150, fma(_156, _148, _154 * _146));
    float _162 = max(_160, fp_c1_1._m0[0].y);
    float _164 = fma(_154 * (-_160), -2.0, -_146);
    vec2 _166 = texture(fp_tex_tcb_38, vec2(_162, (-_134) + (-0.0))).xy;
    float _168 = _166.x;
    float _170 = _166.y;
    float _172 = fma(_156 * (-_160), -2.0, -_148);
    float _174 = fma(_158 * (-_160), -2.0, -_150);
    float _176 = _146 + (-fp_c5_1._m0[23].x);
    float _178 = 1.0 / max(abs(_174), max(abs(_164), abs(_172)));
    vec3 _182 = texture(fp_tex_tcb_36, vec4(_164 * _178, _172 * _178, _174 * _178, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_134 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _184 = texture(fp_tex_tcb_22, vec2(_76.x, _76.y)).xy;
    vec4 _187 = texture(fp_tex_tcb_24, vec2(_76.z, _76.w)).xyzw;
    float _189 = _187.w;
    float _191 = _148 + (-fp_c5_1._m0[23].y);
    float _193 = _150 + (-fp_c5_1._m0[23].z);
    float _195 = fma(_134, 0.5, 0.5);
    float _197 = _156 * _158;
    float _199 = _134 * _134;
    float _201 = inversesqrt(fma(_193, _193, fma(_191, _191, _176 * _176)));
    float _203 = _176 * _201;
    float _205 = _78.z;
    float _207 = _191 * _201;
    float _209 = _78.x;
    float _211 = _193 * _201;
    float _213 = _154 * _156;
    float _215 = _158 * _158;
    float _217 = max(fma(_150, _211, fma(_148, _207, _146 * _203)), fp_c1_1._m0[0].y);
    float _219 = _154 * _158;
    float _221 = max(fma(_158, _211, fma(_156, _207, _154 * _203)), fp_c1_1._m0[0].y) * max(fma(_158, _211, fma(_156, _207, _154 * _203)), fp_c1_1._m0[0].y);
    float _223 = fma(_156, -fp_c5_1._m0[23].y, _154 * (-fp_c5_1._m0[23].x));
    float _225 = (_195 * 0.5) * _195;
    float _227 = max(fma(_158, -fp_c5_1._m0[23].z, _223), fp_c1_1._m0[0].y);
    float _229 = fma(_154, _154, -(_156 * _156));
    float _231 = exp2(_217 * fma(_217, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _233 = 1.0 / (_225 + fma(_162, -_225, _162));
    int _236 = max(0, min(int(trunc((_205 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _238 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].x, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _240 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].y, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _242 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].z, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _244 = (_233 * (1.0 / (_225 + fma(_225, -_227, _227)))) * ((_199 * (1.0 / max(fma(_221, _199 * _199, -_221) + 1.0, fp_c1_1._m0[0].y))) * (_199 * (1.0 / max(fma(_221, _199 * _199, -_221) + 1.0, fp_c1_1._m0[0].y))));
    float _246 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    uint _249 = uint(int(uint((((int(uint(_236) >> uint(16)) * 20) << 16) + (((_236 & 65535) * 20) + max(0, min(int(trunc((_209 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _251 = fp_c10_1._m0[int(uint(int(_249)) >> uint(2))][int(_249) & 3];
    float _253 = fma(_238, -_246, _246);
    float _255 = clamp(fma(_158, -fp_c5_1._m0[23].z, _223), 0.0, 1.0);
    float _257 = _64.w;
    float _259 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _261 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _263 = fma(_240, -_259, _259);
    float _265 = fma(_242, -_261, _261);
    float _267 = clamp(_257 * clamp(fma(_184.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _269 = ((_187.y * _189) * _257) * 32.0;
    float _271 = ((_187.x * _189) * _257) * 32.0;
    float _273 = ((_187.z * _189) * _257) * 32.0;
    float _275 = fma(_263, _269, fma(_182.y, fma(_240, _168, _170), max(0.0, fma(_229, fp_c5_1._m0[31].y, (fma(_158, fp_c5_1._m0[26].z, fma(_156, fp_c5_1._m0[26].y, _154 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_219, fp_c5_1._m0[29].w, fma(_215, fp_c5_1._m0[29].z, fma(_197, fp_c5_1._m0[29].y, _213 * fp_c5_1._m0[29].x))))) * _263));
    float _277 = fma(_253, _271, fma(_182.x, fma(_238, _168, _170), max(0.0, fma(_229, fp_c5_1._m0[31].x, (fma(_158, fp_c5_1._m0[25].z, fma(_156, fp_c5_1._m0[25].y, _154 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_219, fp_c5_1._m0[28].w, fma(_215, fp_c5_1._m0[28].z, fma(_197, fp_c5_1._m0[28].y, _213 * fp_c5_1._m0[28].x))))) * _253));
    float _279 = fma(_265, _273, fma(_182.z, fma(_242, _168, _170), max(0.0, fma(_229, fp_c5_1._m0[31].z, (fma(_158, fp_c5_1._m0[27].z, fma(_156, fp_c5_1._m0[27].y, _154 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_219, fp_c5_1._m0[30].w, fma(_215, fp_c5_1._m0[30].z, fma(_197, fp_c5_1._m0[30].y, _213 * fp_c5_1._m0[30].x))))) * _265));
    float _281 = clamp((-((-texture(fp_tex_tcb_18, vec2(_68.z, _68.w)).x) + _267)) + (-0.0), 0.0, 1.0);
    float _283 = clamp((-fma(_267, fp_c7_1._m0[37].w, fma(max((-_104.x) + 1.0, (-_104.y) + 1.0), clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_64.x * gl_FragCoord.w) * _88, (_64.y * gl_FragCoord.w) * _88)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)) + clamp(_257 * clamp(fma(_184.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    int _285 = floatBitsToInt(_251);
    float _287 = _279;
    float _289 = _277;
    float _291 = _275;
    float _293 = _279;
    float _295 = _275;
    float _297 = _277;
    if (floatBitsToInt(_251) != (-1))
    {
        int _299 = 0;
        float _303;
        float _305;
        float _307;
        int _393;
        do
        {
            int _301 = _285 & 255;
            _303 = _289;
            _305 = _291;
            _307 = _287;
            _311 = uint(_301) >= 30u;
            if (_311)
            {
                break;
            }
            int _313 = _301 << 4;
            uint _315 = uint(int(uint(_313 + 7360) >> uint(2)));
            int _317 = int(_315) + 1;
            uint _319 = uint(int(uint(_313 + 7368) >> uint(2)));
            float _321 = (-_209) + fp_c10_1._m0[int(uint(int(_315)) >> uint(2))][int(_315) & 3];
            float _323 = fp_c10_1._m0[int(uint(_317) >> uint(2))][_317 & 3] + (-_78.y);
            float _325 = (-_205) + fp_c10_1._m0[int(uint(int(_319)) >> uint(2))][int(_319) & 3];
            float _327 = fma(_325, _325, fma(_323, _323, _321 * _321));
            float _329 = _321 * inversesqrt(_327);
            float _331 = _323 * inversesqrt(_327);
            float _333 = _325 * inversesqrt(_327);
            float _335 = _146 + _329;
            float _337 = _148 + _331;
            float _339 = _150 + _333;
            float _341 = inversesqrt(fma(_339, _339, fma(_337, _337, _335 * _335)));
            float _343 = _335 * _341;
            float _345 = _337 * _341;
            float _347 = _339 * _341;
            float _349 = fma(_158, _333, fma(_156, _331, _154 * _329));
            float _351 = max(fma(_150, _347, fma(_148, _345, _146 * _343)), fp_c1_1._m0[0].y);
            float _353 = max(fma(_158, _347, fma(_156, _345, _154 * _343)), fp_c1_1._m0[0].y) * max(fma(_158, _347, fma(_156, _345, _154 * _343)), fp_c1_1._m0[0].y);
            uint _355 = uint(int(uint(_313 + 6880) >> uint(2)));
            int _357 = int(_355) + 1;
            float _359 = max(_349, fp_c1_1._m0[0].y);
            uint _361 = uint(int(uint(_313 + 8320) >> uint(2)));
            float _363 = exp2(_351 * fma(_351, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _365 = (_233 * (1.0 / (_225 + fma(_225, -_359, _359)))) * ((_199 * (1.0 / max(fma(_199 * _199, _353, -_353) + 1.0, fp_c1_1._m0[0].y))) * (_199 * (1.0 / max(fma(_199 * _199, _353, -_353) + 1.0, fp_c1_1._m0[0].y))));
            bool _367 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_361)) >> uint(2))][int(_361) & 3]) != 0;
            float _369 = (_238 + fma(_238, -_363, _363)) * _365;
            uint _371 = uint(int(uint(_313 + 6408) >> uint(2)));
            uint _373 = uint(int(uint(_313 + 6400) >> uint(2)));
            int _375 = int(_373) + 1;
            float _377 = _369;
            if (!_367)
            {
                _377 = 1.0;
            }
            float _379 = _377;
            if (_367)
            {
                uint _381 = uint(int(uint(_313 + 7840) >> uint(2)));
                int _383 = int(_381) + 1;
                uint _385 = uint(int(uint(_313 + 7848) >> uint(2)));
                uint _387 = uint(int(uint(_313 + 6888) >> uint(2)));
                float _389 = fp_c10_1._m0[int(uint(int(_387)) >> uint(2))][int(_387) & 3];
                int _391 = int(_387) + 1;
                _379 = exp2(fp_c10_1._m0[int(uint(_391) >> uint(2))][_391 & 3] * log2(clamp(((-_389) + fma(_333, -fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3], fma(_331, -fp_c10_1._m0[int(uint(_383) >> uint(2))][_383 & 3], _329 * (-fp_c10_1._m0[int(uint(int(_381)) >> uint(2))][int(_381) & 3])))) * (1.0 / ((-_389) + 1.0)), 0.0, 1.0)));
            }
            _393 = _299 + 1;
            float _395 = (exp2(fp_c10_1._m0[int(uint(_357) >> uint(2))][_357 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_355)) >> uint(2))][int(_355) & 3], -sqrt(_327), fp_c1_1._m0[1].x), 0.0, 1.0))) * _379) * clamp(_349 + (-0.0), 0.0, 1.0);
            float _397 = fma(fp_c10_1._m0[int(uint(int(_371)) >> uint(2))][int(_371) & 3] * _395, fma(_261, fp_c1_1._m0[1].y, ((_242 + fma(_242, -_363, _363)) * _365) * 0.079577468335628509521484375), _287);
            float _399 = fma(fp_c10_1._m0[int(uint(int(_373)) >> uint(2))][int(_373) & 3] * _395, fma(_246, fp_c1_1._m0[1].y, _369 * 0.079577468335628509521484375), _289);
            float _401 = fma(fp_c10_1._m0[int(uint(_375) >> uint(2))][_375 & 3] * _395, fma(_259, fp_c1_1._m0[1].y, ((_240 + fma(_240, -_363, _363)) * _365) * 0.079577468335628509521484375), _291);
            _285 = int(uint(_285) >> uint(8));
            _299 = _393;
            _287 = _397;
            _289 = _399;
            _291 = _401;
            _303 = _399;
            _305 = _401;
            _307 = _397;
        } while (!(_393 >= 4));
        _311 = false;
        _293 = _307;
        _295 = _305;
        _297 = _303;
        if ((_285 & 255) == 30)
        {
            float _403 = 1.0 / fp_c10_1._m0[561].y;
            float _405 = _205 + (-fp_c10_1._m0[557].z);
            float _407 = (-_209) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_403, fp_c10_1._m0[557].x);
            float _409 = (-_205) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_403, fp_c10_1._m0[557].z);
            float _411 = _407 * _407;
            float _413 = _209 + (-fp_c10_1._m0[557].x);
            float _415 = sqrt(fma(_409, _409, _411)) * (-fp_c10_1._m0[558].y);
            float _417 = inversesqrt(fma(_409, _409, fma(_415, _415, _411)));
            float _419 = _405 * fp_c10_1._m0[558].x;
            float _421 = _407 * _417;
            float _423 = _415 * _417;
            float _425 = _409 * _417;
            float _427 = _413 * fp_c10_1._m0[558].z;
            float _429 = _146 + _421;
            float _431 = _148 + _423;
            float _433 = _150 + _425;
            float _435 = _78.y;
            float _437 = inversesqrt(fma(_433, _433, fma(_431, _431, _429 * _429)));
            float _439 = _429 * _437;
            float _441 = _431 * _437;
            float _443 = ((-float(_419 < _427)) + float(_419 > _427)) * fp_c10_1._m0[561].y;
            float _445 = fma(_405, _405, _413 * _413);
            float _447 = 1.0 / (fma(_205, fp_c10_1._m0[565].z, fma(_435, fp_c10_1._m0[565].y, _209 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _449 = fma(_405, fp_c10_1._m0[558].z, _413 * fp_c10_1._m0[558].x);
            bool _451 = _449 > 0.0;
            float _453 = _433 * _437;
            float _455 = fma(_158, _425, fma(_156, _423, _154 * _421));
            float _457 = inversesqrt(fma(_425, _425, _421 * _421));
            float _459 = max(fma(_150, _453, fma(_148, _441, _146 * _439)), fp_c1_1._m0[0].y);
            float _461 = max(fma(_158, _453, fma(_156, _441, _154 * _439)), fp_c1_1._m0[0].y) * max(fma(_158, _453, fma(_156, _441, _154 * _439)), fp_c1_1._m0[0].y);
            float _463 = _425;
            if (_451)
            {
                _463 = sqrt(_445);
            }
            float _465 = _463;
            if (!_451)
            {
                _465 = 1.0;
            }
            bool _467 = fma(_405 * inversesqrt(_445), fp_c10_1._m0[558].z, (_413 * inversesqrt(_445)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _469 = max(_455, fp_c1_1._m0[0].y);
            float _471 = clamp(fma(_449 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_449 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _473 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_413, fma(_443, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_405 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_443 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_413, fma(_443, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_405 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_443 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _475 = fma(_459, fp_c1_1._m0[0].z, -6.9831600189208984375);
            float _477 = _475;
            if (_467)
            {
                _477 = fma(_473, -_473, fp_c1_1._m0[1].x) * fma(_473, -_473, fp_c1_1._m0[1].x);
            }
            float _479 = _477;
            if (!_467)
            {
                _479 = 1.0;
            }
            float _481 = exp2(_459 * _475);
            float _483 = (_233 * (1.0 / (_225 + fma(_225, -_469, _469)))) * ((_199 * (1.0 / max(fma(_199 * _199, _461, -_461) + 1.0, fp_c1_1._m0[0].y))) * (_199 * (1.0 / max(fma(_199 * _199, _461, -_461) + 1.0, fp_c1_1._m0[0].y))));
            float _485 = (min(fma(_471, -_471, fp_c1_1._m0[1].x) * fma(_471, -_471, fp_c1_1._m0[1].x), _479) * (exp2(log2(clamp(fma(_465, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_425 * _457, -fp_c10_1._m0[558].z, (_421 * _457) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_455 + (-0.0), 0.0, 1.0);
            float _487 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_205, fp_c10_1._m0[562].z, fma(_435, fp_c10_1._m0[562].y, _209 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _447, 0.5, 0.5), (-fma((fma(_205, fp_c10_1._m0[563].z, fma(_435, fp_c10_1._m0[563].y, _209 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _447, 0.5, 0.5)) + 1.0)).z > fma((fma(_205, fp_c10_1._m0[564].z, fma(_435, fp_c10_1._m0[564].y, _209 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _447, 0.5, 0.5)) || (_449 <= 0.0));
            _293 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _485) * fma(_261, fp_c1_1._m0[1].y, (_483 * (_242 + fma(_242, -_481, _481))) * 0.079577468335628509521484375), _487, _307);
            _295 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _485) * fma(_259, fp_c1_1._m0[1].y, (_483 * (_240 + fma(_240, -_481, _481))) * 0.079577468335628509521484375), _487, _305);
            _297 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _485) * fma(_246, fp_c1_1._m0[1].y, (_483 * (_238 + fma(_238, -_481, _481))) * 0.079577468335628509521484375), _487, _303);
        }
    }
    float _489 = _209 + (-fp_c3_1._m0[11].w);
    float _491 = _78.y;
    float _493 = _205 + (-fp_c3_1._m0[13].w);
    float _495 = fma(_281, _293, _283 * (fma(_244 * (_242 + fma(_242, -_231, _231)), fp_c1_1._m0[0].w, _261 * 0.3183098733425140380859375) * fma(_255, fp_c5_1._m0[5].z, _273)));
    float _497 = _491 + (-fp_c3_1._m0[12].w);
    float _499 = fma(_493, _493, fma(_497, _497, _489 * _489));
    float _501 = clamp(fma(_283 * _281, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _503 = fma(_281, _295, _283 * (fma(_244 * (_240 + fma(_240, -_231, _231)), fp_c1_1._m0[0].w, _259 * 0.3183098733425140380859375) * fma(_255, fp_c5_1._m0[5].y, _269)));
    float _505 = fma(_281, _297, _283 * (fma(_244 * (_238 + fma(_238, -_231, _231)), fp_c1_1._m0[0].w, _246 * 0.3183098733425140380859375) * fma(_255, fp_c5_1._m0[5].x, _271)));
    float _507 = exp2(log2(clamp(sqrt(_499) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_493 * inversesqrt(_499), fp_c5_1._m0[23].z, fma(_497 * inversesqrt(_499), fp_c5_1._m0[23].y, (_489 * inversesqrt(_499)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _509 = clamp(fma(fma(_205, fp_c5_1._m0[14].z, fma(_491, fp_c5_1._m0[14].y, _209 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _511 = fma((-_505) + fp_c5_1._m0[13].x, _509, _505);
    float _513 = fma((-_503) + fp_c5_1._m0[13].y, _509, _503);
    float _515 = fma((-_495) + fp_c5_1._m0[13].z, _509, _495);
    float _517 = clamp((-exp2((clamp(fma(sqrt(_499), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_511) + fma(fma((_507 * fp_c7_1._m0[55].x) * _501, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _517, _511);
    _81.y = fma((-_513) + fma(fma((_507 * fp_c7_1._m0[55].y) * _501, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _517, _513);
    _81.z = fma((-_515) + fma(fma((_507 * fp_c7_1._m0[55].z) * _501, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _517, _515);
    _81.w = 1.0;
}


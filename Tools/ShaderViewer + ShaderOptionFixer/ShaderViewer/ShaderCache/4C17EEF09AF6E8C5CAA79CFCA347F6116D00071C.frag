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
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _60;
layout(location = 1) in vec4 _62;
layout(location = 2) in vec4 _64;
layout(location = 4) in vec4 _66;
layout(location = 6) in vec4 _68;
layout(location = 3) in vec4 _70;
layout(location = 5) in vec4 _72;
layout(location = 0) out vec4 _75;
uint _6[12];

void main()
{
    bool _309 = false;
    float _82 = _60.x;
    float _84 = _60.y;
    vec2 _88 = texture(fp_tex_tcb_E, vec2(_82, _84)).xy;
    float _90 = _88.x;
    float _92 = _88.y;
    float _94 = _62.x;
    float _96 = _62.y;
    float _98 = _62.z;
    float _100 = _64.y;
    float _102 = _64.z;
    float _104 = _64.x;
    float _106 = _64.w;
    float _108 = _66.x;
    float _110 = _66.y;
    float _112 = _66.z;
    float _114 = inversesqrt(fma(_98, _98, fma(_96, _96, _94 * _94)));
    float _116 = _98 * _114;
    float _118 = _94 * _114;
    float _120 = _96 * _114;
    float _122 = sqrt(clamp((-fma(_90, _90, _92 * _92)) + 1.0, 0.0, 1.0));
    float _124 = fma(_118, _122, fma(_90, _104, _92 * (fma(_120, _102, -(_116 * _100)) * _106)));
    float _126 = fma(_120, _122, fma(_90, _100, _92 * (fma(_116, _104, -(_118 * _102)) * _106)));
    float _128 = fma(_116, _122, fma(_90, _102, _92 * (fma(_118, _100, -(_120 * _104)) * _106)));
    float _130 = inversesqrt(fma(_112, _112, fma(_110, _110, _108 * _108)));
    float _132 = inversesqrt(fma(_128, _128, fma(_126, _126, _124 * _124)));
    float _134 = _108 * (-_130);
    float _136 = _110 * (-_130);
    float _138 = _112 * (-_130);
    float _140 = _124 * _132;
    float _142 = _126 * _132;
    float _144 = _128 * _132;
    float _146 = max(texture(fp_tex_tcb_10, vec2(_82, _84)).x, fp_c1_1._m0[0].x);
    float _148 = fma(_144, _138, fma(_142, _136, _140 * _134));
    float _150 = max(_148, fp_c1_1._m0[0].z);
    float _152 = fma(_140 * (-_148), -2.0, -_134);
    float _154 = fma(_142 * (-_148), -2.0, -_136);
    float _156 = fma(_144 * (-_148), -2.0, -_138);
    float _158 = _134 + (-fp_c5_1._m0[23].x);
    float _160 = 1.0 / max(abs(_156), max(abs(_152), abs(_154)));
    float _162 = _136 + (-fp_c5_1._m0[23].y);
    vec3 _166 = texture(fp_tex_tcb_A, vec2(_82, _84)).xyz;
    float _168 = _166.x;
    float _170 = _166.y;
    float _172 = _166.z;
    float _174 = texture(fp_tex_tcb_12, vec2(_82, _84)).x;
    vec4 _177 = texture(fp_tex_tcb_24, vec2(_68.z, _68.w)).xyzw;
    float _179 = _177.w;
    vec2 _181 = texture(fp_tex_tcb_22, vec2(_68.x, _68.y)).xy;
    vec2 _183 = texture(fp_tex_tcb_38, vec2(_150, (-_146) + (-0.0))).xy;
    float _185 = _183.x;
    float _187 = _183.y;
    vec3 _189 = texture(fp_tex_tcb_36, vec4(_152 * _160, _154 * _160, _156 * _160, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_146 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _191 = _138 + (-fp_c5_1._m0[23].z);
    float _193 = _142 * _144;
    float _195 = _144 * _144;
    float _197 = inversesqrt(fma(_191, _191, fma(_162, _162, _158 * _158)));
    float _199 = _158 * _197;
    float _201 = _140 * _142;
    float _203 = _162 * _197;
    float _205 = _191 * _197;
    float _207 = _140 * _144;
    float _209 = _70.x;
    float _211 = fma(_140, _140, -(_142 * _142));
    float _213 = _70.z;
    float _215 = _146 * _146;
    float _217 = max(fma(_144, _205, fma(_142, _203, _140 * _199)), fp_c1_1._m0[0].z) * max(fma(_144, _205, fma(_142, _203, _140 * _199)), fp_c1_1._m0[0].z);
    float _219 = fma(_142, -fp_c5_1._m0[23].y, _140 * (-fp_c5_1._m0[23].x));
    float _221 = fma(_146, 0.5, 0.5);
    float _223 = max(fma(_138, _205, fma(_136, _203, _134 * _199)), fp_c1_1._m0[0].z);
    float _225 = (_221 * 0.5) * _221;
    float _227 = max(fma(_144, -fp_c5_1._m0[23].z, _219), fp_c1_1._m0[0].z);
    float _229 = 1.0 / (_225 + fma(_150, -_225, _150));
    float _231 = _72.w;
    int _234 = max(0, min(int(trunc((_213 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _236 = exp2(_223 * fma(_223, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _238 = (_229 * (1.0 / (_225 + fma(_225, -_227, _227)))) * ((_215 * (1.0 / max(fma(_217, _215 * _215, -_217) + 1.0, fp_c1_1._m0[0].z))) * (_215 * (1.0 / max(fma(_217, _215 * _215, -_217) + 1.0, fp_c1_1._m0[0].z))));
    float _240 = fma(_172, -_174, _172);
    float _242 = fma(_174, _168 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _244 = fma(_174, _170 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _246 = fma(_174, _172 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _248 = fma(_168, -_174, _168);
    uint _251 = uint(int(uint((((int(uint(_234) >> uint(16)) * 20) << 16) + (((_234 & 65535) * 20) + max(0, min(int(trunc((_209 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _253 = fp_c10_1._m0[int(uint(int(_251)) >> uint(2))][int(_251) & 3];
    float _255 = fma(_170, -_174, _170);
    float _257 = fma(_246, -_240, _240);
    float _259 = fma(_244, -_255, _255);
    float _261 = fma(_242, -_248, _248);
    float _263 = clamp(_231 * clamp(fma(_181.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _265 = ((_177.x * _179) * _231) * 32.0;
    float _267 = ((_177.y * _179) * _231) * 32.0;
    float _269 = ((_177.z * _179) * _231) * 32.0;
    float _271 = clamp(fma(_144, -fp_c5_1._m0[23].z, _219), 0.0, 1.0);
    float _273 = fma(_261, _265, fma(_189.x, fma(_242, _185, _187), max(0.0, fma(_211, fp_c5_1._m0[31].x, (fma(_144, fp_c5_1._m0[25].z, fma(_142, fp_c5_1._m0[25].y, _140 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_207, fp_c5_1._m0[28].w, fma(_195, fp_c5_1._m0[28].z, fma(_193, fp_c5_1._m0[28].y, _201 * fp_c5_1._m0[28].x))))) * _261));
    float _275 = fma(_259, _267, fma(_189.y, fma(_244, _185, _187), max(0.0, fma(_211, fp_c5_1._m0[31].y, (fma(_144, fp_c5_1._m0[26].z, fma(_142, fp_c5_1._m0[26].y, _140 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_207, fp_c5_1._m0[29].w, fma(_195, fp_c5_1._m0[29].z, fma(_193, fp_c5_1._m0[29].y, _201 * fp_c5_1._m0[29].x))))) * _259));
    float _277 = fma(_257, _269, fma(_189.z, fma(_246, _185, _187), max(0.0, fma(_211, fp_c5_1._m0[31].z, (fma(_144, fp_c5_1._m0[27].z, fma(_142, fp_c5_1._m0[27].y, _140 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_207, fp_c5_1._m0[30].w, fma(_195, fp_c5_1._m0[30].z, fma(_193, fp_c5_1._m0[30].y, _201 * fp_c5_1._m0[30].x))))) * _257));
    float _279 = clamp((-_263) + 1.0, 0.0, 1.0);
    float _281 = clamp((-fma(_263, fp_c7_1._m0[37].w, clamp(_231 * clamp(fma(_181.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    float _283 = _275;
    float _285 = _277;
    float _287 = _273;
    float _289 = _277;
    float _291 = _273;
    float _293 = _275;
    if (floatBitsToInt(_253) != (-1))
    {
        int _295 = floatBitsToInt(_253);
        int _297 = 0;
        float _301;
        float _303;
        float _305;
        int _391;
        do
        {
            int _299 = _295 & 255;
            _301 = _287;
            _303 = _283;
            _305 = _285;
            _309 = uint(_299) >= 30u;
            if (_309)
            {
                break;
            }
            int _311 = _299 << 4;
            uint _313 = uint(int(uint(_311 + 7360) >> uint(2)));
            int _315 = int(_313) + 1;
            uint _317 = uint(int(uint(_311 + 7368) >> uint(2)));
            float _319 = (-_209) + fp_c10_1._m0[int(uint(int(_313)) >> uint(2))][int(_313) & 3];
            float _321 = fp_c10_1._m0[int(uint(_315) >> uint(2))][_315 & 3] + (-_70.y);
            float _323 = (-_213) + fp_c10_1._m0[int(uint(int(_317)) >> uint(2))][int(_317) & 3];
            float _325 = fma(_323, _323, fma(_321, _321, _319 * _319));
            float _327 = _319 * inversesqrt(_325);
            float _329 = _321 * inversesqrt(_325);
            float _331 = _323 * inversesqrt(_325);
            float _333 = _134 + _327;
            float _335 = _136 + _329;
            float _337 = _138 + _331;
            float _339 = inversesqrt(fma(_337, _337, fma(_335, _335, _333 * _333)));
            float _341 = _333 * _339;
            float _343 = _335 * _339;
            float _345 = _337 * _339;
            float _347 = max(fma(_138, _345, fma(_136, _343, _134 * _341)), fp_c1_1._m0[0].z);
            uint _349 = uint(int(uint(_311 + 6880) >> uint(2)));
            int _351 = int(_349) + 1;
            float _353 = fma(_144, _331, fma(_142, _329, _140 * _327));
            float _355 = max(fma(_144, _345, fma(_142, _343, _140 * _341)), fp_c1_1._m0[0].z) * max(fma(_144, _345, fma(_142, _343, _140 * _341)), fp_c1_1._m0[0].z);
            float _357 = max(_353, fp_c1_1._m0[0].z);
            uint _359 = uint(int(uint(_311 + 8320) >> uint(2)));
            float _361 = exp2(_347 * fma(_347, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _363 = (_229 * (1.0 / (_225 + fma(_225, -_357, _357)))) * ((_215 * (1.0 / max(fma(_215 * _215, _355, -_355) + 1.0, fp_c1_1._m0[0].z))) * (_215 * (1.0 / max(fma(_215 * _215, _355, -_355) + 1.0, fp_c1_1._m0[0].z))));
            bool _365 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_359)) >> uint(2))][int(_359) & 3]) != 0;
            uint _367 = uint(int(uint(_311 + 6408) >> uint(2)));
            float _369 = (_244 + fma(_244, -_361, _361)) * _363;
            uint _371 = uint(int(uint(_311 + 6400) >> uint(2)));
            int _373 = int(_371) + 1;
            float _375 = _369;
            if (!_365)
            {
                _375 = 1.0;
            }
            float _377 = _375;
            if (_365)
            {
                uint _379 = uint(int(uint(_311 + 7840) >> uint(2)));
                int _381 = int(_379) + 1;
                uint _383 = uint(int(uint(_311 + 7848) >> uint(2)));
                uint _385 = uint(int(uint(_311 + 6888) >> uint(2)));
                float _387 = fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3];
                int _389 = int(_385) + 1;
                _377 = exp2(fp_c10_1._m0[int(uint(_389) >> uint(2))][_389 & 3] * log2(clamp(((-_387) + fma(_331, -fp_c10_1._m0[int(uint(int(_383)) >> uint(2))][int(_383) & 3], fma(_329, -fp_c10_1._m0[int(uint(_381) >> uint(2))][_381 & 3], _327 * (-fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3])))) * (1.0 / ((-_387) + 1.0)), 0.0, 1.0)));
            }
            _391 = _297 + 1;
            float _393 = (exp2(fp_c10_1._m0[int(uint(_351) >> uint(2))][_351 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_349)) >> uint(2))][int(_349) & 3], -sqrt(_325), fp_c1_1._m0[1].y), 0.0, 1.0))) * _377) * clamp(_353 + (-0.0), 0.0, 1.0);
            float _395 = fma(fp_c10_1._m0[int(uint(_373) >> uint(2))][_373 & 3] * _393, fma(_255, fp_c1_1._m0[1].z, _369 * 0.079577468335628509521484375), _283);
            float _397 = fma(fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3] * _393, fma(_240, fp_c1_1._m0[1].z, ((_246 + fma(_246, -_361, _361)) * _363) * 0.079577468335628509521484375), _285);
            float _399 = fma(fp_c10_1._m0[int(uint(int(_371)) >> uint(2))][int(_371) & 3] * _393, fma(_248, fp_c1_1._m0[1].z, ((_242 + fma(_242, -_361, _361)) * _363) * 0.079577468335628509521484375), _287);
            _295 = int(uint(_295) >> uint(8));
            _297 = _391;
            _283 = _395;
            _285 = _397;
            _287 = _399;
            _301 = _399;
            _303 = _395;
            _305 = _397;
        } while (!(_391 >= 4));
        _309 = false;
        _289 = _305;
        _291 = _301;
        _293 = _303;
        if ((_295 & 255) == 30)
        {
            float _401 = 1.0 / fp_c10_1._m0[561].y;
            float _403 = _213 + (-fp_c10_1._m0[557].z);
            float _405 = (-_209) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_401, fp_c10_1._m0[557].x);
            float _407 = (-_213) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_401, fp_c10_1._m0[557].z);
            float _409 = _405 * _405;
            float _411 = sqrt(fma(_407, _407, _409)) * (-fp_c10_1._m0[558].y);
            float _413 = _209 + (-fp_c10_1._m0[557].x);
            float _415 = inversesqrt(fma(_407, _407, fma(_411, _411, _409)));
            float _417 = _413 * fp_c10_1._m0[558].z;
            float _419 = _405 * _415;
            float _421 = _411 * _415;
            float _423 = _407 * _415;
            float _425 = _134 + _419;
            float _427 = _136 + _421;
            float _429 = _138 + _423;
            float _431 = _403 * fp_c10_1._m0[558].x;
            float _433 = inversesqrt(fma(_429, _429, fma(_427, _427, _425 * _425)));
            float _435 = _70.y;
            float _437 = _425 * _433;
            float _439 = ((-float(_431 < _417)) + float(_431 > _417)) * fp_c10_1._m0[561].y;
            float _441 = _427 * _433;
            float _443 = fma(_403, _403, _413 * _413);
            float _445 = 1.0 / (fma(_213, fp_c10_1._m0[565].z, fma(_435, fp_c10_1._m0[565].y, _209 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _447 = fma(_403, fp_c10_1._m0[558].z, _413 * fp_c10_1._m0[558].x);
            bool _449 = _447 > 0.0;
            float _451 = fma(_144, _423, fma(_142, _421, _140 * _419));
            float _453 = _429 * _433;
            float _455 = inversesqrt(fma(_423, _423, _419 * _419));
            float _457 = _423;
            if (_449)
            {
                _457 = sqrt(_443);
            }
            float _459 = _457;
            if (!_449)
            {
                _459 = 1.0;
            }
            float _461 = max(fma(_144, _453, fma(_142, _441, _140 * _437)), fp_c1_1._m0[0].z) * max(fma(_144, _453, fma(_142, _441, _140 * _437)), fp_c1_1._m0[0].z);
            float _463 = max(fma(_138, _453, fma(_136, _441, _134 * _437)), fp_c1_1._m0[0].z);
            bool _465 = fma(_403 * inversesqrt(_443), fp_c10_1._m0[558].z, (_413 * inversesqrt(_443)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _467 = clamp(fma(_447 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_447 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _469 = max(_451, fp_c1_1._m0[0].z);
            float _471 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_413, fma(_439, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_403 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_439 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_413, fma(_439, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_403 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_439 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _473 = log2(clamp(fma(_459, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _475 = _473;
            if (!_465)
            {
                _475 = 1.0;
            }
            float _477 = _475;
            if (_465)
            {
                _477 = fma(_471, -_471, fp_c1_1._m0[1].y) * fma(_471, -_471, fp_c1_1._m0[1].y);
            }
            float _479 = exp2(_463 * fma(_463, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _481 = (_229 * (1.0 / (_225 + fma(_225, -_469, _469)))) * ((_215 * (1.0 / max(fma(_215 * _215, _461, -_461) + 1.0, fp_c1_1._m0[0].z))) * (_215 * (1.0 / max(fma(_215 * _215, _461, -_461) + 1.0, fp_c1_1._m0[0].z))));
            float _483 = (min(fma(_467, -_467, fp_c1_1._m0[1].y) * fma(_467, -_467, fp_c1_1._m0[1].y), _477) * (exp2(_473) * exp2(log2(clamp((fma(_423 * _455, -fp_c10_1._m0[558].z, (_419 * _455) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_451 + (-0.0), 0.0, 1.0);
            float _485 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_213, fp_c10_1._m0[562].z, fma(_435, fp_c10_1._m0[562].y, _209 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _445, 0.5, 0.5), (-fma((fma(_213, fp_c10_1._m0[563].z, fma(_435, fp_c10_1._m0[563].y, _209 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _445, 0.5, 0.5)) + 1.0)).z > fma((fma(_213, fp_c10_1._m0[564].z, fma(_435, fp_c10_1._m0[564].y, _209 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _445, 0.5, 0.5)) || (_447 <= 0.0));
            _289 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _483) * fma(_240, fp_c1_1._m0[1].z, ((_246 + fma(_246, -_479, _479)) * _481) * 0.079577468335628509521484375), _485, _305);
            _291 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _483) * fma(_248, fp_c1_1._m0[1].z, ((_242 + fma(_242, -_479, _479)) * _481) * 0.079577468335628509521484375), _485, _301);
            _293 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _483) * fma(_255, fp_c1_1._m0[1].z, ((_244 + fma(_244, -_479, _479)) * _481) * 0.079577468335628509521484375), _485, _303);
        }
    }
    float _487 = _209 + (-fp_c3_1._m0[11].w);
    float _489 = _70.y;
    float _491 = _213 + (-fp_c3_1._m0[13].w);
    float _493 = fma(_279, _289, _281 * (fma(_238 * (_246 + fma(_246, -_236, _236)), fp_c1_1._m0[1].x, _240 * 0.3183098733425140380859375) * fma(_271, fp_c5_1._m0[5].z, _269)));
    float _495 = _489 + (-fp_c3_1._m0[12].w);
    float _497 = fma(_491, _491, fma(_495, _495, _487 * _487));
    float _499 = clamp(fma(fma(_213, fp_c5_1._m0[14].z, fma(_489, fp_c5_1._m0[14].y, _209 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _501 = fma(_279, _291, _281 * (fma(_238 * (_242 + fma(_242, -_236, _236)), fp_c1_1._m0[1].x, _248 * 0.3183098733425140380859375) * fma(_271, fp_c5_1._m0[5].x, _265)));
    float _503 = fma(_279, _293, _281 * (fma(_238 * (_244 + fma(_244, -_236, _236)), fp_c1_1._m0[1].x, _255 * 0.3183098733425140380859375) * fma(_271, fp_c5_1._m0[5].y, _267)));
    float _505 = clamp(fma(_281 * _279, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _507 = exp2(log2(clamp(sqrt(_497) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_491 * inversesqrt(_497), fp_c5_1._m0[23].z, fma(_495 * inversesqrt(_497), fp_c5_1._m0[23].y, (_487 * inversesqrt(_497)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _509 = fma((-_501) + fp_c5_1._m0[13].x, _499, _501);
    float _511 = fma((-_503) + fp_c5_1._m0[13].y, _499, _503);
    float _513 = fma((-_493) + fp_c5_1._m0[13].z, _499, _493);
    float _515 = clamp((-exp2((clamp(fma(sqrt(_497), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_509) + fma(fma((_507 * fp_c7_1._m0[55].x) * _505, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _515, _509);
    _75.y = fma((-_511) + fma(fma((_507 * fp_c7_1._m0[55].y) * _505, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _515, _511);
    _75.z = fma((-_513) + fma(fma((_507 * fp_c7_1._m0[55].z) * _505, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _515, _513);
    _75.w = 1.0;
}


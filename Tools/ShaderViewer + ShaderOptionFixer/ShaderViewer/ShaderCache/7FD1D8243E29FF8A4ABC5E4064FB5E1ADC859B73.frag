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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_12;
layout(binding = 2) uniform sampler2D fp_tex_tcb_14;
layout(binding = 3) uniform sampler2D fp_tex_tcb_22;
layout(binding = 4) uniform sampler2D fp_tex_tcb_24;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 3) in vec4 _68;
layout(location = 0) in vec4 _70;
layout(location = 6) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 0) out vec4 _79;
uint _6[12];

void main()
{
    bool _293 = false;
    float _86 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _88 = 1.0 / (_64.z * gl_FragCoord.w);
    float _90 = _66.x;
    float _92 = _68.x;
    float _94 = _66.y;
    float _96 = _68.y;
    float _98 = _66.z;
    float _100 = _68.z;
    float _102 = _70.x;
    float _104 = _70.y;
    float _106 = inversesqrt(fma(_98, _98, fma(_94, _94, _90 * _90)));
    float _108 = inversesqrt(fma(_100, _100, fma(_96, _96, _92 * _92)));
    float _110 = _90 * _106;
    float _112 = _94 * _106;
    float _114 = _92 * (-_108);
    float _116 = _96 * (-_108);
    float _118 = _100 * (-_108);
    float _120 = _98 * _106;
    float _122 = fma(_120, _118, fma(_112, _116, _110 * _114));
    float _124 = 1.0 / _74.w;
    float _126 = max(_122, fp_c1_1._m0[0].z);
    float _128 = fma(_110 * (-_122), -2.0, -_114);
    float _130 = fma(_112 * (-_122), -2.0, -_116);
    float _132 = fma(_120 * (-_122), -2.0, -_118);
    float _134 = 1.0 / max(abs(_132), max(abs(_128), abs(_130)));
    vec2 _138 = texture(fp_tex_tcb_2A, vec2(fma(_74.x * _124, 0.5, 0.5), fma(_74.y * _124, -0.5, 0.5))).xy;
    vec3 _142 = texture(fp_tex_tcb_A, vec2(_102, _104)).xyz;
    float _144 = _142.x;
    float _146 = _142.y;
    float _148 = _142.z;
    float _150 = texture(fp_tex_tcb_12, vec2(_102, _104)).x;
    vec2 _152 = texture(fp_tex_tcb_38, vec2(_126, (-_86) + (-0.0))).xy;
    float _154 = _152.x;
    float _156 = _152.y;
    vec3 _158 = texture(fp_tex_tcb_36, vec4(_128 * _134, _130 * _134, _132 * _134, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_86 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _160 = texture(fp_tex_tcb_22, vec2(_72.x, _72.y)).xy;
    vec4 _163 = texture(fp_tex_tcb_24, vec2(_72.z, _72.w)).xyzw;
    float _165 = _163.w;
    vec3 _167 = texture(fp_tex_tcb_14, vec2(_102, _104)).xyz;
    float _169 = _114 + (-fp_c5_1._m0[23].x);
    float _171 = _116 + (-fp_c5_1._m0[23].y);
    float _173 = fma(_86, 0.5, 0.5);
    float _175 = _118 + (-fp_c5_1._m0[23].z);
    float _177 = _110 * _112;
    float _179 = _112 * _120;
    float _181 = inversesqrt(fma(_175, _175, fma(_171, _171, _169 * _169)));
    float _183 = _76.x;
    float _185 = _120 * _120;
    float _187 = _76.z;
    float _189 = _169 * _181;
    float _191 = _171 * _181;
    float _193 = _110 * _120;
    float _195 = _175 * _181;
    float _197 = max(fma(_118, _195, fma(_116, _191, _114 * _189)), fp_c1_1._m0[0].z);
    float _199 = max(fma(_120, _195, fma(_112, _191, _110 * _189)), fp_c1_1._m0[0].z) * max(fma(_120, _195, fma(_112, _191, _110 * _189)), fp_c1_1._m0[0].z);
    float _201 = _86 * _86;
    float _203 = _201 * _201;
    float _205 = fma(_112, -fp_c5_1._m0[23].y, _110 * (-fp_c5_1._m0[23].x));
    float _207 = (_173 * 0.5) * _173;
    float _209 = max(fma(_120, -fp_c5_1._m0[23].z, _205), fp_c1_1._m0[0].z);
    float _211 = fma(_110, _110, -(_112 * _112));
    int _214 = max(0, min(int(trunc((_187 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _216 = 1.0 / (_207 + fma(_126, -_207, _126));
    float _218 = exp2(_197 * fma(_197, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _220 = fma(_150, _144 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _222 = fma(_150, _146 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _224 = fma(_150, _148 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _226 = fma(_144, -_150, _144);
    float _228 = fma(_146, -_150, _146);
    float _230 = fma(_148, -_150, _148);
    uint _233 = uint(int(uint((((int(uint(_214) >> uint(16)) * 20) << 16) + (((_214 & 65535) * 20) + max(0, min(int(trunc((_183 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _235 = fp_c10_1._m0[int(uint(int(_233)) >> uint(2))][int(_233) & 3];
    float _237 = (_216 * (1.0 / (_207 + fma(_207, -_209, _209)))) * ((_201 * (1.0 / max(fma(_199, _203, -_199) + 1.0, fp_c1_1._m0[0].z))) * (_201 * (1.0 / max(fma(_199, _203, -_199) + 1.0, fp_c1_1._m0[0].z))));
    float _239 = fma(_220, -_226, _226);
    float _241 = _64.w;
    float _243 = fma(_222, -_228, _228);
    float _245 = fma(_224, -_230, _230);
    float _247 = clamp(_241 * clamp(fma(_160.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _249 = ((_163.y * _165) * _241) * 32.0;
    float _251 = ((_163.x * _165) * _241) * 32.0;
    float _253 = ((_163.z * _165) * _241) * 32.0;
    float _255 = clamp(fma(_120, -fp_c5_1._m0[23].z, _205), 0.0, 1.0);
    float _257 = fma(_243, _249, fma(_158.y, fma(_222, _154, _156), max(0.0, fma(_211, fp_c5_1._m0[31].y, (fma(_120, fp_c5_1._m0[26].z, fma(_112, fp_c5_1._m0[26].y, _110 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_193, fp_c5_1._m0[29].w, fma(_185, fp_c5_1._m0[29].z, fma(_179, fp_c5_1._m0[29].y, _177 * fp_c5_1._m0[29].x))))) * _243));
    float _259 = fma(_239, _251, fma(_158.x, fma(_220, _154, _156), max(0.0, fma(_211, fp_c5_1._m0[31].x, (fma(_120, fp_c5_1._m0[25].z, fma(_112, fp_c5_1._m0[25].y, _110 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_193, fp_c5_1._m0[28].w, fma(_185, fp_c5_1._m0[28].z, fma(_179, fp_c5_1._m0[28].y, _177 * fp_c5_1._m0[28].x))))) * _239));
    float _261 = fma(_245, _253, fma(_158.z, fma(_224, _154, _156), max(0.0, fma(_211, fp_c5_1._m0[31].z, (fma(_120, fp_c5_1._m0[27].z, fma(_112, fp_c5_1._m0[27].y, _110 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_193, fp_c5_1._m0[30].w, fma(_185, fp_c5_1._m0[30].z, fma(_179, fp_c5_1._m0[30].y, _177 * fp_c5_1._m0[30].x))))) * _245));
    float _263 = clamp((-_247) + 1.0, 0.0, 1.0);
    float _265 = clamp((-fma(_247, fp_c7_1._m0[37].w, clamp(_241 * clamp(fma(_160.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_138.x) + 1.0, (-_138.y) + 1.0), clamp(_76.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_64.x * gl_FragCoord.w) * _88, (_64.y * gl_FragCoord.w) * _88)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _267 = _257;
    float _269 = _259;
    float _271 = _261;
    float _273 = _259;
    float _275 = _257;
    float _277 = _261;
    if (floatBitsToInt(_235) != (-1))
    {
        int _279 = floatBitsToInt(_235);
        int _281 = 0;
        float _285;
        float _287;
        float _289;
        int _375;
        do
        {
            int _283 = _279 & 255;
            _285 = _269;
            _287 = _267;
            _289 = _271;
            _293 = uint(_283) >= 30u;
            if (_293)
            {
                break;
            }
            int _295 = _283 << 4;
            uint _297 = uint(int(uint(_295 + 7360) >> uint(2)));
            int _299 = int(_297) + 1;
            uint _301 = uint(int(uint(_295 + 7368) >> uint(2)));
            float _303 = (-_183) + fp_c10_1._m0[int(uint(int(_297)) >> uint(2))][int(_297) & 3];
            float _305 = fp_c10_1._m0[int(uint(_299) >> uint(2))][_299 & 3] + (-_76.y);
            float _307 = (-_187) + fp_c10_1._m0[int(uint(int(_301)) >> uint(2))][int(_301) & 3];
            float _309 = fma(_307, _307, fma(_305, _305, _303 * _303));
            float _311 = _303 * inversesqrt(_309);
            float _313 = _305 * inversesqrt(_309);
            float _315 = _307 * inversesqrt(_309);
            float _317 = _114 + _311;
            float _319 = _116 + _313;
            float _321 = _118 + _315;
            uint _323 = uint(int(uint(_295 + 6880) >> uint(2)));
            int _325 = int(_323) + 1;
            float _327 = inversesqrt(fma(_321, _321, fma(_319, _319, _317 * _317)));
            float _329 = _317 * _327;
            float _331 = _319 * _327;
            float _333 = _321 * _327;
            uint _335 = uint(int(uint(_295 + 8320) >> uint(2)));
            float _337 = fma(_120, _315, fma(_112, _313, _110 * _311));
            float _339 = max(fma(_118, _333, fma(_116, _331, _114 * _329)), fp_c1_1._m0[0].z);
            float _341 = max(_337, fp_c1_1._m0[0].z);
            float _343 = max(fma(_120, _333, fma(_112, _331, _110 * _329)), fp_c1_1._m0[0].z) * max(fma(_120, _333, fma(_112, _331, _110 * _329)), fp_c1_1._m0[0].z);
            uint _345 = uint(int(uint(_295 + 6408) >> uint(2)));
            uint _347 = uint(int(uint(_295 + 6400) >> uint(2)));
            int _349 = int(_347) + 1;
            float _351 = exp2(_339 * fma(_339, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _353 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_335)) >> uint(2))][int(_335) & 3]) != 0;
            float _355 = (_216 * (1.0 / (_207 + fma(_207, -_341, _341)))) * ((_201 * (1.0 / max(fma(_203, _343, -_343) + 1.0, fp_c1_1._m0[0].z))) * (_201 * (1.0 / max(fma(_203, _343, -_343) + 1.0, fp_c1_1._m0[0].z))));
            float _357 = (_224 + fma(_224, -_351, _351)) * _355;
            float _359 = _357;
            if (!_353)
            {
                _359 = 1.0;
            }
            float _361 = _359;
            if (_353)
            {
                uint _363 = uint(int(uint(_295 + 7840) >> uint(2)));
                int _365 = int(_363) + 1;
                uint _367 = uint(int(uint(_295 + 7848) >> uint(2)));
                uint _369 = uint(int(uint(_295 + 6888) >> uint(2)));
                float _371 = fp_c10_1._m0[int(uint(int(_369)) >> uint(2))][int(_369) & 3];
                int _373 = int(_369) + 1;
                _361 = exp2(fp_c10_1._m0[int(uint(_373) >> uint(2))][_373 & 3] * log2(clamp(((-_371) + fma(_315, -fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3], fma(_313, -fp_c10_1._m0[int(uint(_365) >> uint(2))][_365 & 3], _311 * (-fp_c10_1._m0[int(uint(int(_363)) >> uint(2))][int(_363) & 3])))) * (1.0 / ((-_371) + 1.0)), 0.0, 1.0)));
            }
            _375 = _281 + 1;
            float _377 = (exp2(fp_c10_1._m0[int(uint(_325) >> uint(2))][_325 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_323)) >> uint(2))][int(_323) & 3], -sqrt(_309), fp_c1_1._m0[1].y), 0.0, 1.0))) * _361) * clamp(_337 + (-0.0), 0.0, 1.0);
            float _379 = fma(fp_c10_1._m0[int(uint(_349) >> uint(2))][_349 & 3] * _377, fma(_228, fp_c1_1._m0[1].z, ((_222 + fma(_222, -_351, _351)) * _355) * 0.079577468335628509521484375), _267);
            float _381 = fma(fp_c10_1._m0[int(uint(int(_347)) >> uint(2))][int(_347) & 3] * _377, fma(_226, fp_c1_1._m0[1].z, ((_220 + fma(_220, -_351, _351)) * _355) * 0.079577468335628509521484375), _269);
            float _383 = fma(fp_c10_1._m0[int(uint(int(_345)) >> uint(2))][int(_345) & 3] * _377, fma(_230, fp_c1_1._m0[1].z, _357 * 0.079577468335628509521484375), _271);
            _279 = int(uint(_279) >> uint(8));
            _281 = _375;
            _267 = _379;
            _269 = _381;
            _271 = _383;
            _285 = _381;
            _287 = _379;
            _289 = _383;
        } while (!(_375 >= 4));
        _293 = false;
        _273 = _285;
        _275 = _287;
        _277 = _289;
        if ((_279 & 255) == 30)
        {
            float _385 = _76.y;
            float _387 = 1.0 / (fma(_187, fp_c10_1._m0[565].z, fma(_385, fp_c10_1._m0[565].y, _183 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _389 = 1.0 / fp_c10_1._m0[561].y;
            float _391 = _187 + (-fp_c10_1._m0[557].z);
            float _393 = _391 * fp_c10_1._m0[558].x;
            float _395 = (-_183) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_389, fp_c10_1._m0[557].x);
            float _397 = (-_187) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_389, fp_c10_1._m0[557].z);
            float _399 = _395 * _395;
            float _401 = sqrt(fma(_397, _397, _399)) * (-fp_c10_1._m0[558].y);
            float _403 = _183 + (-fp_c10_1._m0[557].x);
            float _405 = _403 * fp_c10_1._m0[558].z;
            float _407 = inversesqrt(fma(_397, _397, fma(_401, _401, _399)));
            float _409 = _395 * _407;
            float _411 = _401 * _407;
            float _413 = _397 * _407;
            float _415 = _114 + _409;
            float _417 = _116 + _411;
            float _419 = _118 + _413;
            float _421 = fma(_120, _413, fma(_112, _411, _110 * _409));
            float _423 = inversesqrt(fma(_419, _419, fma(_417, _417, _415 * _415)));
            float _425 = fma(_391, _391, _403 * _403);
            float _427 = _415 * _423;
            float _429 = _417 * _423;
            float _431 = _419 * _423;
            float _433 = ((-float(_393 < _405)) + float(_393 > _405)) * fp_c10_1._m0[561].y;
            float _435 = fma(_391, fp_c10_1._m0[558].z, _403 * fp_c10_1._m0[558].x);
            float _437 = inversesqrt(fma(_413, _413, _409 * _409));
            bool _439 = _435 > 0.0;
            float _441 = max(fma(_118, _431, fma(_116, _429, _114 * _427)), fp_c1_1._m0[0].z);
            float _443 = max(fma(_120, _431, fma(_112, _429, _110 * _427)), fp_c1_1._m0[0].z) * max(fma(_120, _431, fma(_112, _429, _110 * _427)), fp_c1_1._m0[0].z);
            float _445 = _391;
            float _447 = 6.9831600189208984375;
            if (_439)
            {
                _445 = sqrt(_425);
            }
            float _449 = _445;
            if (!_439)
            {
                _449 = 1.0;
            }
            bool _451 = fma(_391 * inversesqrt(_425), fp_c10_1._m0[558].z, (_403 * inversesqrt(_425)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _453 = max(_421, fp_c1_1._m0[0].z);
            float _455 = clamp(fma(_435 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_435 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _457 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_403, fma(_433, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_391 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_433 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_403, fma(_433, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_391 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_433 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            if (!_451)
            {
                _447 = 1.0;
            }
            float _459 = _447;
            if (_451)
            {
                _459 = fma(_457, -_457, fp_c1_1._m0[1].y) * fma(_457, -_457, fp_c1_1._m0[1].y);
            }
            float _461 = exp2(_441 * fma(_441, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _463 = (_216 * (1.0 / (_207 + fma(_207, -_453, _453)))) * ((_201 * (1.0 / max(fma(_203, _443, -_443) + 1.0, fp_c1_1._m0[0].z))) * (_201 * (1.0 / max(fma(_203, _443, -_443) + 1.0, fp_c1_1._m0[0].z))));
            float _465 = (min(fma(_455, -_455, fp_c1_1._m0[1].y) * fma(_455, -_455, fp_c1_1._m0[1].y), _459) * (exp2(log2(clamp(fma(_449, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_413 * _437, -fp_c10_1._m0[558].z, (_409 * _437) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_421 + (-0.0), 0.0, 1.0);
            float _467 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_187, fp_c10_1._m0[562].z, fma(_385, fp_c10_1._m0[562].y, _183 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _387, 0.5, 0.5), (-fma((fma(_187, fp_c10_1._m0[563].z, fma(_385, fp_c10_1._m0[563].y, _183 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _387, 0.5, 0.5)) + 1.0)).z > fma((fma(_187, fp_c10_1._m0[564].z, fma(_385, fp_c10_1._m0[564].y, _183 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _387, 0.5, 0.5)) || (_435 <= 0.0));
            _273 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _465) * fma(_226, fp_c1_1._m0[1].z, ((_220 + fma(_220, -_461, _461)) * _463) * 0.079577468335628509521484375), _467, _285);
            _275 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _465) * fma(_228, fp_c1_1._m0[1].z, ((_222 + fma(_222, -_461, _461)) * _463) * 0.079577468335628509521484375), _467, _287);
            _277 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _465) * fma(_230, fp_c1_1._m0[1].z, ((_224 + fma(_224, -_461, _461)) * _463) * 0.079577468335628509521484375), _467, _289);
        }
    }
    float _469 = _183 + (-fp_c3_1._m0[11].w);
    float _471 = _76.y;
    float _473 = _187 + (-fp_c3_1._m0[13].w);
    float _475 = _471 + (-fp_c3_1._m0[12].w);
    float _477 = fma(_473, _473, fma(_475, _475, _469 * _469));
    float _479 = clamp(fma(fma(_187, fp_c5_1._m0[14].z, fma(_471, fp_c5_1._m0[14].y, _183 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _481 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _483 = fma(_167.x * fma((-fp_c6_1._m0[12].x) + fp_c6_1._m0[14].x, fp_c7_1._m0[52].w, fp_c6_1._m0[12].x), _481, fma(_263, _273, _265 * (fma(_237 * (_220 + fma(_220, -_218, _218)), fp_c1_1._m0[1].x, _226 * 0.3183098733425140380859375) * fma(_255, fp_c5_1._m0[5].x, _251))));
    float _485 = clamp(fma(_265 * _263, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _487 = fma(_167.y * fma((-fp_c6_1._m0[12].y) + fp_c6_1._m0[14].y, fp_c7_1._m0[52].w, fp_c6_1._m0[12].y), _481, fma(_263, _275, _265 * (fma(_237 * (_222 + fma(_222, -_218, _218)), fp_c1_1._m0[1].x, _228 * 0.3183098733425140380859375) * fma(_255, fp_c5_1._m0[5].y, _249))));
    float _489 = fma(_167.z * fma((-fp_c6_1._m0[12].z) + fp_c6_1._m0[14].z, fp_c7_1._m0[52].w, fp_c6_1._m0[12].z), _481, fma(_263, _277, _265 * (fma(_237 * (_224 + fma(_224, -_218, _218)), fp_c1_1._m0[1].x, _230 * 0.3183098733425140380859375) * fma(_255, fp_c5_1._m0[5].z, _253))));
    float _491 = exp2(log2(clamp(sqrt(_477) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_473 * inversesqrt(_477), fp_c5_1._m0[23].z, fma(_475 * inversesqrt(_477), fp_c5_1._m0[23].y, (_469 * inversesqrt(_477)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _493 = fma((-_483) + fp_c5_1._m0[13].x, _479, _483);
    float _495 = fma((-_487) + fp_c5_1._m0[13].y, _479, _487);
    float _497 = fma((-_489) + fp_c5_1._m0[13].z, _479, _489);
    float _499 = clamp((-exp2((clamp(fma(sqrt(_477), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_493) + fma(fma((_491 * fp_c7_1._m0[55].x) * _485, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _499, _493);
    _79.y = fma((-_495) + fma(fma((_491 * fp_c7_1._m0[55].y) * _485, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _499, _495);
    _79.z = fma((-_497) + fma(fma((_491 * fp_c7_1._m0[55].z) * _485, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _499, _497);
    _79.w = 1.0;
}


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

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
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
layout(location = 4) in vec4 _68;
layout(location = 0) out vec4 _71;
layout(location = 3) in vec4 _73;
layout(location = 5) in vec4 _75;
layout(location = 6) in vec4 _77;
layout(location = 2) in vec4 _79;
uint _6[12];

void main()
{
    bool _307 = false;
    float _86 = _64.x;
    float _88 = _64.y;
    float _90 = texture(fp_tex_tcb_8, vec2(_86, _88)).x;
    bool _94 = _90 <= 0.0;
    int _97 = floatBitsToInt(_86);
    if (_94)
    {
        discard;
    }
    float _99 = texture(fp_tex_tcb_12, vec2(_86, _88)).x;
    vec3 _103 = texture(fp_tex_tcb_A, vec2(_86, _88)).xyz;
    float _105 = _103.x;
    float _107 = _103.y;
    float _109 = _103.z;
    float _111 = _66.x;
    float _113 = _66.y;
    float _115 = _66.z;
    float _117 = 1.0 / _68.w;
    float _119 = fma(_113, _113, _111 * _111);
    float _121 = inversesqrt(fma(_115, _115, _119));
    int _123 = floatBitsToInt(_119);
    int _125 = floatBitsToInt(_117);
    int _127 = floatBitsToInt(_121);
    if (_94)
    {
        _97 = 0;
    }
    if (_94)
    {
        _123 = 0;
    }
    if (_94)
    {
        _125 = 0;
    }
    float _129 = _111 * _121;
    float _131 = _113 * _121;
    float _133 = _115 * _121;
    float _135 = _133;
    if (_94)
    {
        _127 = 0;
    }
    if (_94)
    {
        _71.x = intBitsToFloat(_97);
        _71.y = intBitsToFloat(_123);
        _71.z = intBitsToFloat(_127);
        _71.w = intBitsToFloat(_125);
        return;
    }
    float _137 = max(texture(fp_tex_tcb_10, vec2(_86, _88)).x, fp_c1_1._m0[0].x);
    float _139 = _73.x;
    float _141 = _73.y;
    float _143 = _73.z;
    float _145 = 1.0 / (_75.z * gl_FragCoord.w);
    float _147 = inversesqrt(fma(_143, _143, fma(_141, _141, _139 * _139)));
    float _149 = _139 * (-_147);
    float _151 = _141 * (-_147);
    float _153 = _143 * (-_147);
    float _155 = fma(_133, _153, fma(_131, _151, _129 * _149));
    float _157 = max(_155, fp_c1_1._m0[0].z);
    float _159 = fma(_129 * (-_155), -2.0, -_149);
    float _161 = fma(_131 * (-_155), -2.0, -_151);
    float _163 = fma(_133 * (-_155), -2.0, -_153);
    float _165 = 1.0 / max(abs(_163), max(abs(_159), abs(_161)));
    vec2 _169 = texture(fp_tex_tcb_2A, vec2(fma(_68.x * _117, 0.5, 0.5), fma(_68.y * _117, -0.5, 0.5))).xy;
    float _171 = _149 + (-fp_c5_1._m0[23].x);
    vec2 _173 = texture(fp_tex_tcb_38, vec2(_157, (-_137) + (-0.0))).xy;
    float _175 = _173.x;
    float _177 = _173.y;
    vec2 _179 = texture(fp_tex_tcb_22, vec2(_77.x, _77.y)).xy;
    vec3 _181 = texture(fp_tex_tcb_36, vec4(_159 * _165, _161 * _165, _163 * _165, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_137 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec4 _184 = texture(fp_tex_tcb_24, vec2(_77.z, _77.w)).xyzw;
    float _186 = _184.w;
    float _188 = _151 + (-fp_c5_1._m0[23].y);
    float _190 = _153 + (-fp_c5_1._m0[23].z);
    float _192 = fma(_137, 0.5, 0.5);
    float _194 = _137 * _137;
    float _196 = _131 * _133;
    float _198 = (_192 * 0.5) * _192;
    float _200 = _129 * _131;
    float _202 = inversesqrt(fma(_190, _190, fma(_188, _188, _171 * _171)));
    float _204 = _171 * _202;
    float _206 = _79.x;
    float _208 = _79.z;
    float _210 = _188 * _202;
    float _212 = _133 * _133;
    float _214 = _190 * _202;
    float _216 = 1.0 / (_198 + fma(_157, -_198, _157));
    float _218 = fma(_105, -_99, _105);
    float _220 = _129 * _133;
    float _222 = fma(_107, -_99, _107);
    float _224 = fma(_109, -_99, _109);
    float _226 = fma(_99, _105 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _228 = fma(_99, _107 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _230 = fma(_99, _109 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _232 = fma(_131, -fp_c5_1._m0[23].y, _129 * (-fp_c5_1._m0[23].x));
    float _234 = _194 * _194;
    float _236 = max(fma(_133, _214, fma(_131, _210, _129 * _204)), fp_c1_1._m0[0].z) * max(fma(_133, _214, fma(_131, _210, _129 * _204)), fp_c1_1._m0[0].z);
    float _238 = max(fma(_153, _214, fma(_151, _210, _149 * _204)), fp_c1_1._m0[0].z);
    float _240 = max(fma(_133, -fp_c5_1._m0[23].z, _232), fp_c1_1._m0[0].z);
    float _242 = clamp(fma(_133, -fp_c5_1._m0[23].z, _232), 0.0, 1.0);
    int _244 = max(0, min(int(trunc((_208 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _246 = exp2(_238 * fma(_238, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _248 = fma(_129, _129, -(_131 * _131));
    float _250 = (_216 * (1.0 / (_198 + fma(_198, -_240, _240)))) * ((_194 * (1.0 / max(fma(_236, _234, -_236) + 1.0, fp_c1_1._m0[0].z))) * (_194 * (1.0 / max(fma(_236, _234, -_236) + 1.0, fp_c1_1._m0[0].z))));
    uint _253 = uint(int(uint((((int(uint(_244) >> uint(16)) * 20) << 16) + (((_244 & 65535) * 20) + max(0, min(int(trunc((_206 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _255 = fp_c10_1._m0[int(uint(int(_253)) >> uint(2))][int(_253) & 3];
    float _257 = fma(_222, -_228, _222);
    float _259 = fma(_218, -_226, _218);
    float _261 = _75.w;
    float _263 = fma(_224, -_230, _224);
    float _265 = clamp(_261 * clamp(fma(_179.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _267 = ((_184.z * _186) * _261) * 32.0;
    float _269 = ((_184.x * _186) * _261) * 32.0;
    float _271 = ((_184.y * _186) * _261) * 32.0;
    float _273 = fma(_263, _267, fma(fma(_230, _175, _177), _181.z, _263 * max(0.0, fma(_248, fp_c5_1._m0[31].z, (fma(_133, fp_c5_1._m0[27].z, fma(_131, fp_c5_1._m0[27].y, _129 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_220, fp_c5_1._m0[30].w, fma(_212, fp_c5_1._m0[30].z, fma(_196, fp_c5_1._m0[30].y, _200 * fp_c5_1._m0[30].x)))))));
    float _275 = clamp((-_265) + 1.0, 0.0, 1.0);
    float _277 = fma(_259, _269, fma(fma(_226, _175, _177), _181.x, _259 * max(0.0, fma(_248, fp_c5_1._m0[31].x, (fma(_133, fp_c5_1._m0[25].z, fma(_131, fp_c5_1._m0[25].y, _129 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_220, fp_c5_1._m0[28].w, fma(_212, fp_c5_1._m0[28].z, fma(_196, fp_c5_1._m0[28].y, _200 * fp_c5_1._m0[28].x)))))));
    float _279 = fma(_257, _271, fma(fma(_228, _175, _177), _181.y, _257 * max(0.0, fma(_248, fp_c5_1._m0[31].y, (fma(_133, fp_c5_1._m0[26].z, fma(_131, fp_c5_1._m0[26].y, _129 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_220, fp_c5_1._m0[29].w, fma(_212, fp_c5_1._m0[29].z, fma(_196, fp_c5_1._m0[29].y, _200 * fp_c5_1._m0[29].x)))))));
    float _281 = clamp((-fma(_265, fp_c7_1._m0[37].w, clamp(_261 * clamp(fma(_179.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_169.x) + 1.0, (-_169.y) + 1.0), clamp(_79.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_75.x * gl_FragCoord.w) * _145, (_75.y * gl_FragCoord.w) * _145)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _283 = _279;
    float _285 = _273;
    float _287 = _277;
    float _289 = _273;
    float _291 = _277;
    float _293 = _279;
    if (floatBitsToInt(_255) != (-1))
    {
        int _295 = floatBitsToInt(_255);
        int _297 = 0;
        float _301;
        float _303;
        float _305;
        int _389;
        do
        {
            int _299 = _295 & 255;
            _301 = _287;
            _303 = _283;
            _305 = _285;
            _307 = uint(_299) >= 30u;
            if (_307)
            {
                break;
            }
            int _309 = _299 << 4;
            uint _311 = uint(int(uint(_309 + 7360) >> uint(2)));
            int _313 = int(_311) + 1;
            uint _315 = uint(int(uint(_309 + 7368) >> uint(2)));
            float _317 = (-_206) + fp_c10_1._m0[int(uint(int(_311)) >> uint(2))][int(_311) & 3];
            float _319 = fp_c10_1._m0[int(uint(_313) >> uint(2))][_313 & 3] + (-_79.y);
            float _321 = (-_208) + fp_c10_1._m0[int(uint(int(_315)) >> uint(2))][int(_315) & 3];
            float _323 = fma(_321, _321, fma(_319, _319, _317 * _317));
            float _325 = _317 * inversesqrt(_323);
            float _327 = _319 * inversesqrt(_323);
            float _329 = _321 * inversesqrt(_323);
            float _331 = _149 + _325;
            float _333 = _151 + _327;
            float _335 = _153 + _329;
            float _337 = inversesqrt(fma(_335, _335, fma(_333, _333, _331 * _331)));
            float _339 = _331 * _337;
            float _341 = _333 * _337;
            float _343 = _335 * _337;
            uint _345 = uint(int(uint(_309 + 6880) >> uint(2)));
            int _347 = int(_345) + 1;
            uint _349 = uint(int(uint(_309 + 8320) >> uint(2)));
            uint _351 = uint(int(uint(_309 + 6408) >> uint(2)));
            float _353 = fma(_133, _329, fma(_131, _327, _129 * _325));
            float _355 = max(fma(_133, _343, fma(_131, _341, _129 * _339)), fp_c1_1._m0[0].z) * max(fma(_133, _343, fma(_131, _341, _129 * _339)), fp_c1_1._m0[0].z);
            float _357 = max(fma(_153, _343, fma(_151, _341, _149 * _339)), fp_c1_1._m0[0].z);
            float _359 = max(_353, fp_c1_1._m0[0].z);
            uint _361 = uint(int(uint(_309 + 6400) >> uint(2)));
            int _363 = int(_361) + 1;
            float _365 = exp2(_357 * fma(_357, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _367 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_349)) >> uint(2))][int(_349) & 3]) != 0;
            float _369 = (_216 * (1.0 / (_198 + fma(_198, -_359, _359)))) * ((_194 * (1.0 / max(fma(_234, _355, -_355) + 1.0, fp_c1_1._m0[0].z))) * (_194 * (1.0 / max(fma(_234, _355, -_355) + 1.0, fp_c1_1._m0[0].z))));
            float _371 = _230 + fma(_230, -_365, _365);
            float _373 = _371;
            if (!_367)
            {
                _373 = 1.0;
            }
            float _375 = _373;
            if (_367)
            {
                uint _377 = uint(int(uint(_309 + 7840) >> uint(2)));
                int _379 = int(_377) + 1;
                uint _381 = uint(int(uint(_309 + 6888) >> uint(2)));
                float _383 = fp_c10_1._m0[int(uint(int(_381)) >> uint(2))][int(_381) & 3];
                int _385 = int(_381) + 1;
                uint _387 = uint(int(uint(_309 + 7848) >> uint(2)));
                _375 = exp2(fp_c10_1._m0[int(uint(_385) >> uint(2))][_385 & 3] * log2(clamp(((-_383) + fma(_329, -fp_c10_1._m0[int(uint(int(_387)) >> uint(2))][int(_387) & 3], fma(_327, -fp_c10_1._m0[int(uint(_379) >> uint(2))][_379 & 3], _325 * (-fp_c10_1._m0[int(uint(int(_377)) >> uint(2))][int(_377) & 3])))) * (1.0 / ((-_383) + 1.0)), 0.0, 1.0)));
            }
            _389 = _297 + 1;
            float _391 = (exp2(fp_c10_1._m0[int(uint(_347) >> uint(2))][_347 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_345)) >> uint(2))][int(_345) & 3], -sqrt(_323), fp_c1_1._m0[1].y), 0.0, 1.0))) * _375) * clamp(_353 + (-0.0), 0.0, 1.0);
            float _393 = fma(fp_c10_1._m0[int(uint(_363) >> uint(2))][_363 & 3] * _391, fma(_222, fp_c1_1._m0[1].z, ((_228 + fma(_228, -_365, _365)) * _369) * 0.079577468335628509521484375), _283);
            float _395 = fma(fp_c10_1._m0[int(uint(int(_351)) >> uint(2))][int(_351) & 3] * _391, fma(_224, fp_c1_1._m0[1].z, (_371 * _369) * 0.079577468335628509521484375), _285);
            float _397 = fma(fp_c10_1._m0[int(uint(int(_361)) >> uint(2))][int(_361) & 3] * _391, fma(_218, fp_c1_1._m0[1].z, ((_226 + fma(_226, -_365, _365)) * _369) * 0.079577468335628509521484375), _287);
            _295 = int(uint(_295) >> uint(8));
            _297 = _389;
            _283 = _393;
            _285 = _395;
            _287 = _397;
            _301 = _397;
            _303 = _393;
            _305 = _395;
        } while (!(_389 >= 4));
        _307 = false;
        _289 = _305;
        _291 = _301;
        _293 = _303;
        if ((_295 & 255) == 30)
        {
            float _399 = _79.y;
            float _401 = 1.0 / (fma(_208, fp_c10_1._m0[565].z, fma(_399, fp_c10_1._m0[565].y, _206 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _403 = 1.0 / fp_c10_1._m0[561].y;
            float _405 = _208 + (-fp_c10_1._m0[557].z);
            float _407 = _405 * fp_c10_1._m0[558].x;
            float _409 = _206 + (-fp_c10_1._m0[557].x);
            float _411 = (-_206) + fma(_403, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _413 = (-_208) + fma(_403, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _415 = _409 * fp_c10_1._m0[558].z;
            float _417 = _411 * _411;
            float _419 = fma(_405, _405, _409 * _409);
            float _421 = ((-float(_407 < _415)) + float(_407 > _415)) * fp_c10_1._m0[561].y;
            float _423 = sqrt(fma(_413, _413, _417)) * (-fp_c10_1._m0[558].y);
            float _425 = inversesqrt(fma(_413, _413, fma(_423, _423, _417)));
            float _427 = _411 * _425;
            float _429 = _423 * _425;
            float _431 = _413 * _425;
            float _433 = fma(_405, fp_c10_1._m0[558].z, _409 * fp_c10_1._m0[558].x);
            float _435 = _149 + _427;
            float _437 = _151 + _429;
            bool _439 = _433 > 0.0;
            float _441 = inversesqrt(fma(_431, _431, _427 * _427));
            float _443 = _153 + _431;
            float _445 = inversesqrt(fma(_443, _443, fma(_437, _437, _435 * _435)));
            float _447 = fma(_133, _431, fma(_131, _429, _129 * _427));
            float _449 = _435 * _445;
            float _451 = _437 * _445;
            float _453 = _443 * _445;
            float _455 = _449;
            if (_439)
            {
                _455 = sqrt(_419);
            }
            float _457 = _455;
            if (!_439)
            {
                _457 = 1.0;
            }
            float _459 = max(_447, fp_c1_1._m0[0].z);
            float _461 = max(fma(_153, _453, fma(_151, _451, _149 * _449)), fp_c1_1._m0[0].z);
            bool _463 = fma(_405 * inversesqrt(_419), fp_c10_1._m0[558].z, (_409 * inversesqrt(_419)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _465 = max(fma(_133, _453, fma(_131, _451, _129 * _449)), fp_c1_1._m0[0].z) * max(fma(_133, _453, fma(_131, _451, _129 * _449)), fp_c1_1._m0[0].z);
            float _467 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_409, fma(_421, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_405 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_421 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_409, fma(_421, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_405 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_421 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _469 = clamp(fma(_433 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_433 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            if (_463)
            {
                _135 = fma(_467, -_467, fp_c1_1._m0[1].y) * fma(_467, -_467, fp_c1_1._m0[1].y);
            }
            float _471 = exp2(_461 * fma(_461, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _473 = _135;
            if (!_463)
            {
                _473 = 1.0;
            }
            float _475 = clamp(_447 + (-0.0), 0.0, 1.0) * (min(fma(_469, -_469, fp_c1_1._m0[1].y) * fma(_469, -_469, fp_c1_1._m0[1].y), _473) * (exp2(log2(clamp(fma(_457, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_431 * _441, -fp_c10_1._m0[558].z, (_427 * _441) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _477 = (_216 * (1.0 / (_198 + fma(_198, -_459, _459)))) * ((_194 * (1.0 / max(fma(_234, _465, -_465) + 1.0, fp_c1_1._m0[0].z))) * (_194 * (1.0 / max(fma(_234, _465, -_465) + 1.0, fp_c1_1._m0[0].z))));
            float _479 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_208, fp_c10_1._m0[562].z, fma(_399, fp_c10_1._m0[562].y, _206 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _401, 0.5, 0.5), (-fma((fma(_208, fp_c10_1._m0[563].z, fma(_399, fp_c10_1._m0[563].y, _206 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _401, 0.5, 0.5)) + 1.0)).z > fma((fma(_208, fp_c10_1._m0[564].z, fma(_399, fp_c10_1._m0[564].y, _206 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _401, 0.5, 0.5)) || (_433 <= 0.0));
            _289 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _475) * fma(_224, fp_c1_1._m0[1].z, ((_230 + fma(_230, -_471, _471)) * _477) * 0.079577468335628509521484375), _479, _305);
            _291 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _475) * fma(_218, fp_c1_1._m0[1].z, ((_226 + fma(_226, -_471, _471)) * _477) * 0.079577468335628509521484375), _479, _301);
            _293 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _475) * fma(_222, fp_c1_1._m0[1].z, ((_228 + fma(_228, -_471, _471)) * _477) * 0.079577468335628509521484375), _479, _303);
        }
    }
    float _481 = _206 + (-fp_c3_1._m0[11].w);
    float _483 = _79.y;
    float _485 = _208 + (-fp_c3_1._m0[13].w);
    float _487 = fma(_275, _289, _281 * (fma(_250 * (_230 + fma(_230, -_246, _246)), fp_c1_1._m0[1].x, _224 * 0.3183098733425140380859375) * fma(_242, fp_c5_1._m0[5].z, _267)));
    float _489 = _483 + (-fp_c3_1._m0[12].w);
    float _491 = fma(_485, _485, fma(_489, _489, _481 * _481));
    float _493 = fma(_275, _291, _281 * (fma(_250 * (_226 + fma(_226, -_246, _246)), fp_c1_1._m0[1].x, _218 * 0.3183098733425140380859375) * fma(_242, fp_c5_1._m0[5].x, _269)));
    float _495 = clamp(fma(_281 * _275, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _497 = fma(_275, _293, _281 * (fma(_250 * (_228 + fma(_228, -_246, _246)), fp_c1_1._m0[1].x, _222 * 0.3183098733425140380859375) * fma(_242, fp_c5_1._m0[5].y, _271)));
    float _499 = exp2(log2(clamp(sqrt(_491) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_485 * inversesqrt(_491), fp_c5_1._m0[23].z, fma(_489 * inversesqrt(_491), fp_c5_1._m0[23].y, (_481 * inversesqrt(_491)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _501 = clamp(fma(fma(_208, fp_c5_1._m0[14].z, fma(_483, fp_c5_1._m0[14].y, _206 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _503 = fma((-_493) + fp_c5_1._m0[13].x, _501, _493);
    float _505 = fma((-_497) + fp_c5_1._m0[13].y, _501, _497);
    float _507 = fma((-_487) + fp_c5_1._m0[13].z, _501, _487);
    float _509 = clamp((-exp2((clamp(fma(sqrt(_491), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _71.x = fma((-_503) + fma(fma((_499 * fp_c7_1._m0[55].x) * _495, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _509, _503);
    _71.y = fma((-_505) + fma(fma((_499 * fp_c7_1._m0[55].y) * _495, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _509, _505);
    _71.z = fma((-_507) + fma(fma((_499 * fp_c7_1._m0[55].z) * _495, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _509, _507);
    _71.w = clamp(_90 + (-0.0), 0.0, 1.0);
}


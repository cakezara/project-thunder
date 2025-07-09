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

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_16;
layout(binding = 6) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 5) in vec4 _78;
layout(location = 4) in vec4 _80;
layout(location = 0) out vec4 _83;
layout(location = 6) in vec4 _85;
layout(location = 3) in vec4 _87;
uint _6[12];

void main()
{
    bool _383 = false;
    float _94 = _68.x;
    float _96 = _68.y;
    float _98 = texture(fp_tex_tcb_8, vec2(_94, _96)).x;
    bool _101 = _98 <= 0.0;
    if (_101)
    {
        discard;
    }
    vec2 _105 = texture(fp_tex_tcb_E, vec2(_94, _96)).xy;
    float _107 = _105.x;
    float _109 = _105.y;
    vec2 _111 = texture(fp_tex_tcb_1C, vec2(_68.z, _68.w)).xy;
    float _113 = _111.x;
    float _115 = _111.y;
    vec3 _119 = texture(fp_tex_tcb_16, vec2(_94, _96)).xyz;
    vec3 _121 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _123 = _121.x;
    float _125 = _121.y;
    float _127 = _121.z;
    float _129 = texture(fp_tex_tcb_12, vec2(_94, _96)).x;
    float _131 = _74.x;
    float _133 = _74.y;
    float _135 = _74.z;
    float _137 = _76.y;
    float _139 = _76.z;
    float _141 = _76.w;
    bool _143 = floatBitsToInt(fma(float(gl_FrontFacing ? (-1) : 0), -2.0, -1.0)) <= 0;
    float _145 = _76.x;
    float _147 = _137;
    if (_143)
    {
        _147 = (-_137) + (-0.0);
    }
    float _149 = inversesqrt(fma(_135, _135, fma(_133, _133, _131 * _131)));
    float _151 = fma((-_109) + _115, fp_c6_1._m0[8].z, _109);
    float _153 = sqrt(clamp((-fma(_107, _107, _109 * _109)) + 1.0, 0.0, 1.0));
    float _155 = fma((-_107) + _113, fp_c6_1._m0[8].z, _107);
    float _157 = _135 * _149;
    float _159 = _131 * _149;
    float _161 = _133 * _149;
    float _163 = _139;
    float _165 = _157;
    float _167 = _159;
    if (_143)
    {
        _163 = (-_139) + (-0.0);
    }
    if (_143)
    {
        _165 = (-_157) + (-0.0);
    }
    if (_143)
    {
        _167 = (-_159) + (-0.0);
    }
    float _169 = _161;
    if (_143)
    {
        _169 = (-_161) + (-0.0);
    }
    float _171 = _145;
    if (_143)
    {
        _171 = (-_145) + (-0.0);
    }
    float _173 = fma(sqrt(clamp((-fma(_113, _113, _115 * _115)) + 1.0, 0.0, 1.0)) + (-_153), fp_c6_1._m0[8].z, _153);
    float _175 = inversesqrt(fma(_173, _173, fma(_151, _151, _155 * _155)));
    float _177 = _151 * _175;
    float _179 = _155 * _175;
    float _181 = _173 * _175;
    float _183 = _80.x;
    float _185 = _80.y;
    float _187 = fma(_181, _167, fma(_179, _171, _177 * (fma(_163, _169, -(_147 * _165)) * _141)));
    float _189 = _78.x;
    float _191 = fma(_181, _169, fma(_179, _147, _177 * (fma(_171, _165, -(_163 * _167)) * _141)));
    float _193 = fma(_181, _165, fma(_179, _163, _177 * (fma(_147, _167, -(_171 * _169)) * _141)));
    float _195 = 1.0 / _78.w;
    float _197 = fma(_193, _193, fma(_191, _191, _187 * _187));
    int _200 = floatBitsToInt(_189);
    int _202 = floatBitsToInt(_195);
    int _204 = floatBitsToInt(_197);
    int _206 = floatBitsToInt(inversesqrt(_197));
    if (_101)
    {
        _200 = 0;
    }
    if (_101)
    {
        _202 = 0;
    }
    if (_101)
    {
        _204 = 0;
    }
    float _208 = _187 * inversesqrt(_197);
    float _210 = _191 * inversesqrt(_197);
    float _212 = _193 * inversesqrt(_197);
    if (_101)
    {
        _206 = 0;
    }
    if (_101)
    {
        _83.x = intBitsToFloat(_200);
        _83.y = intBitsToFloat(_206);
        _83.z = intBitsToFloat(_202);
        _83.w = intBitsToFloat(_204);
        return;
    }
    float _214 = _80.z;
    float _216 = max(texture(fp_tex_tcb_10, vec2(_94, _96)).x, fp_c1_1._m0[0].x);
    float _218 = 1.0 / (_85.z * gl_FragCoord.w);
    float _220 = inversesqrt(fma(_214, _214, fma(_185, _185, _183 * _183)));
    float _222 = _183 * (-_220);
    float _224 = _185 * (-_220);
    float _226 = _214 * (-_220);
    float _228 = fma(_212, _226, fma(_210, _224, _208 * _222));
    float _230 = fma(_208 * (-_228), -2.0, -_222);
    float _232 = fma(_210 * (-_228), -2.0, -_224);
    float _234 = fma(_212 * (-_228), -2.0, -_226);
    float _236 = 1.0 / max(abs(_234), max(abs(_230), abs(_232)));
    float _238 = fma(exp2(log2(abs((-_228) + 1.0)) * fp_c6_1._m0[9].y), fp_c6_1._m0[40].x, fp_c6_1._m0[40].y);
    vec2 _240 = texture(fp_tex_tcb_2A, vec2(fma(_189 * _195, 0.5, 0.5), fma(_78.y * _195, -0.5, 0.5))).xy;
    float _242 = max(_238, fp_c1_1._m0[0].z);
    vec2 _244 = texture(fp_tex_tcb_38, vec2(_242, (-_216) + (-0.0))).xy;
    float _246 = _244.x;
    float _248 = _244.y;
    vec3 _250 = texture(fp_tex_tcb_36, vec4(_230 * _236, _232 * _236, _234 * _236, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_216 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _252 = _87.x;
    float _254 = _87.z;
    float _256 = _222 + (-fp_c5_1._m0[23].x);
    float _258 = _224 + (-fp_c5_1._m0[23].y);
    float _260 = _226 + (-fp_c5_1._m0[23].z);
    float _262 = fma(_216, 0.5, 0.5);
    float _264 = _216 * _216;
    float _266 = _123 * (_119.x * fp_c6_1._m0[19].x);
    float _268 = (_262 * 0.5) * _262;
    float _270 = inversesqrt(fma(_260, _260, fma(_258, _258, _256 * _256)));
    float _272 = _125 * (_119.y * fp_c6_1._m0[19].y);
    float _274 = fma(_125, -_129, _125);
    float _276 = fma(_123, -_129, _123);
    float _278 = _127 * (_119.z * fp_c6_1._m0[19].z);
    float _280 = fma(_127, -_129, _127);
    float _282 = fma(_129, _125 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _284 = _208 * _210;
    float _286 = fma(_129, _123 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _288 = _256 * _270;
    float _290 = fma(_129, _127 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _292 = _210 * _212;
    float _294 = _258 * _270;
    float _296 = _260 * _270;
    int _298 = max(0, min(int(trunc((_254 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _300 = _212 * _212;
    float _302 = max(fma(_226, _296, fma(_224, _294, _222 * _288)), fp_c1_1._m0[0].z);
    float _304 = _208 * _212;
    uint _307 = uint(int(uint((((int(uint(_298) >> uint(16)) * 20) << 16) + (((_298 & 65535) * 20) + max(0, min(int(trunc((_252 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _309 = fp_c10_1._m0[int(uint(int(_307)) >> uint(2))][int(_307) & 3];
    float _311 = _264 * _264;
    float _313 = max(fma(_212, _296, fma(_210, _294, _208 * _288)), fp_c1_1._m0[0].z) * max(fma(_212, _296, fma(_210, _294, _208 * _288)), fp_c1_1._m0[0].z);
    float _315 = fma(_212, -fp_c5_1._m0[23].z, fma(_210, -fp_c5_1._m0[23].y, _208 * (-fp_c5_1._m0[23].x)));
    float _317 = max(_315, fp_c1_1._m0[0].z);
    float _319 = fma(_208, _208, -(_210 * _210));
    float _321 = 1.0 / (_268 + fma(_242, -_268, _242));
    float _323 = exp2(_302 * fma(_302, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _325 = clamp(_238 + (-0.0), 0.0, 1.0);
    float _327 = fma(fma(_274, -fp_c6_1._m0[39].y, _274), _325, _274 * fp_c6_1._m0[39].y);
    float _329 = fma(fma(_280, -fp_c6_1._m0[39].z, _280), _325, _280 * fp_c6_1._m0[39].z);
    float _331 = fma(fma(_276, -fp_c6_1._m0[39].x, _276), _325, _276 * fp_c6_1._m0[39].x);
    float _333 = (_321 * (1.0 / (_268 + fma(_268, -_317, _317)))) * ((_264 * (1.0 / max(fma(_313, _311, -_313) + 1.0, fp_c1_1._m0[0].z))) * (_264 * (1.0 / max(fma(_313, _311, -_313) + 1.0, fp_c1_1._m0[0].z))));
    float _335 = clamp(_87.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _337 = clamp(_315 + (-0.0), 0.0, 1.0);
    float _339 = (-_240.y) + 1.0;
    float _341 = _339 * _335;
    float _343 = fma(fma(_286, _246, _248), _250.x, max(0.0, fma(_319, fp_c5_1._m0[31].x, (fma(_212, fp_c5_1._m0[25].z, fma(_210, fp_c5_1._m0[25].y, _208 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_304, fp_c5_1._m0[28].w, fma(_300, fp_c5_1._m0[28].z, fma(_292, fp_c5_1._m0[28].y, _284 * fp_c5_1._m0[28].x))))) * fma(_331, -_286, _331));
    float _345 = fma(fma(_282, _246, _248), _250.y, max(0.0, fma(_319, fp_c5_1._m0[31].y, (fma(_212, fp_c5_1._m0[26].z, fma(_210, fp_c5_1._m0[26].y, _208 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_304, fp_c5_1._m0[29].w, fma(_300, fp_c5_1._m0[29].z, fma(_292, fp_c5_1._m0[29].y, _284 * fp_c5_1._m0[29].x))))) * fma(_327, -_282, _327));
    float _347 = fma(fma(_290, _246, _248), _250.z, max(0.0, fma(_319, fp_c5_1._m0[31].z, (fma(_212, fp_c5_1._m0[27].z, fma(_210, fp_c5_1._m0[27].y, _208 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_304, fp_c5_1._m0[30].w, fma(_300, fp_c5_1._m0[30].z, fma(_292, fp_c5_1._m0[30].y, _284 * fp_c5_1._m0[30].x))))) * fma(_329, -_290, _329));
    float _349 = clamp((-fma(max((-_240.x) + 1.0, _339), _335, fma(texture(fp_tex_tcb_28, vec2((_85.x * gl_FragCoord.w) * _218, (_85.y * gl_FragCoord.w) * _218)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _351 = floatBitsToInt(_309);
    float _353 = _343;
    float _355 = _345;
    float _357 = _347;
    float _359 = _343;
    float _361 = _345;
    float _363 = _347;
    if (floatBitsToInt(_309) != (-1))
    {
        float _365 = clamp(fma(_341, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _367 = 1.0 / fp_c6_1._m0[18].x;
        float _369 = clamp(1.0 + (-fp_c6_1._m0[17].w), 0.0, 1.0);
        float _371 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
        int _373 = 0;
        float _377;
        float _379;
        float _381;
        int _469;
        do
        {
            int _375 = _351 & 255;
            _377 = _353;
            _379 = _355;
            _381 = _357;
            _383 = uint(_375) >= 30u;
            if (_383)
            {
                break;
            }
            int _385 = _375 << 4;
            uint _387 = uint(int(uint(_385 + 7360) >> uint(2)));
            int _389 = int(_387) + 1;
            uint _391 = uint(int(uint(_385 + 7368) >> uint(2)));
            float _393 = (-_252) + fp_c10_1._m0[int(uint(int(_387)) >> uint(2))][int(_387) & 3];
            float _395 = fp_c10_1._m0[int(uint(_389) >> uint(2))][_389 & 3] + (-_87.y);
            float _397 = (-_254) + fp_c10_1._m0[int(uint(int(_391)) >> uint(2))][int(_391) & 3];
            float _399 = fma(_397, _397, fma(_395, _395, _393 * _393));
            float _401 = _393 * inversesqrt(_399);
            float _403 = _395 * inversesqrt(_399);
            float _405 = _397 * inversesqrt(_399);
            float _407 = _222 + _401;
            float _409 = _224 + _403;
            float _411 = _226 + _405;
            uint _413 = uint(int(uint(_385 + 6880) >> uint(2)));
            int _415 = int(_413) + 1;
            float _417 = inversesqrt(fma(_411, _411, fma(_409, _409, _407 * _407)));
            float _419 = _407 * _417;
            float _421 = _409 * _417;
            float _423 = _411 * _417;
            uint _425 = uint(int(uint(_385 + 8320) >> uint(2)));
            float _427 = fma(_212, _405, fma(_210, _403, _208 * _401));
            float _429 = max(fma(_226, _423, fma(_224, _421, _222 * _419)), fp_c1_1._m0[0].z);
            float _431 = max(_427, fp_c1_1._m0[0].z);
            float _433 = max(fma(_212, _423, fma(_210, _421, _208 * _419)), fp_c1_1._m0[0].z) * max(fma(_212, _423, fma(_210, _421, _208 * _419)), fp_c1_1._m0[0].z);
            uint _435 = uint(int(uint(_385 + 6400) >> uint(2)));
            int _437 = int(_435) + 1;
            uint _439 = uint(int(uint(_385 + 6408) >> uint(2)));
            int _441 = int(_439) + 1;
            float _443 = exp2(_429 * fma(_429, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _445 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_425)) >> uint(2))][int(_425) & 3]) != 0;
            float _447 = (_321 * (1.0 / (_268 + fma(_268, -_431, _431)))) * ((_264 * (1.0 / max(fma(_311, _433, -_433) + 1.0, fp_c1_1._m0[0].z))) * (_264 * (1.0 / max(fma(_311, _433, -_433) + 1.0, fp_c1_1._m0[0].z))));
            float _449 = _290 + fma(_290, -_443, _443);
            float _451 = _449;
            if (!_445)
            {
                _451 = 1.0;
            }
            float _453 = _451;
            if (_445)
            {
                uint _455 = uint(int(uint(_385 + 7840) >> uint(2)));
                int _457 = int(_455) + 1;
                uint _459 = uint(int(uint(_385 + 6888) >> uint(2)));
                float _461 = fp_c10_1._m0[int(uint(int(_459)) >> uint(2))][int(_459) & 3];
                int _463 = int(_459) + 1;
                uint _465 = uint(int(uint(_385 + 7848) >> uint(2)));
                _453 = exp2(fp_c10_1._m0[int(uint(_463) >> uint(2))][_463 & 3] * log2(clamp(((-_461) + fma(_405, -fp_c10_1._m0[int(uint(int(_465)) >> uint(2))][int(_465) & 3], fma(_403, -fp_c10_1._m0[int(uint(_457) >> uint(2))][_457 & 3], _401 * (-fp_c10_1._m0[int(uint(int(_455)) >> uint(2))][int(_455) & 3])))) * (1.0 / ((-_461) + 1.0)), 0.0, 1.0)));
            }
            float _467 = exp2(fp_c10_1._m0[int(uint(_415) >> uint(2))][_415 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_413)) >> uint(2))][int(_413) & 3], -sqrt(_399), fp_c1_1._m0[1].y), 0.0, 1.0))) * _453;
            _469 = _373 + 1;
            float _471 = _467 * clamp(_427 + (-0.0), 0.0, 1.0);
            float _473 = fp_c10_1._m0[int(uint(_441) >> uint(2))][_441 & 3] * _467;
            float _475 = exp2(log2(clamp(fma(_238, -clamp((-_427) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].y) * (fma(_371, fp_c1_1._m0[2].x, exp2(_367 * log2(clamp(max(fma(_226, -_405, fma(_224, -_403, _222 * (-_401))), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0))) * _371) + 0.20000000298023223876953125);
            float _477 = fma((fp_c10_1._m0[int(uint(int(_435)) >> uint(2))][int(_435) & 3] * _471) * fma(_331, fp_c1_1._m0[1].z, ((_286 + fma(_286, -_443, _443)) * _447) * 0.079577468335628509521484375), _369, _365 * ((_475 * (_266 * _473)) * fp_c6_1._m0[17].w)) + _353;
            float _479 = fma((fp_c10_1._m0[int(uint(_437) >> uint(2))][_437 & 3] * _471) * fma(_327, fp_c1_1._m0[1].z, ((_282 + fma(_282, -_443, _443)) * _447) * 0.079577468335628509521484375), _369, _365 * ((_475 * (_272 * _473)) * fp_c6_1._m0[17].w)) + _355;
            float _481 = fma((fp_c10_1._m0[int(uint(int(_439)) >> uint(2))][int(_439) & 3] * _471) * fma(_329, fp_c1_1._m0[1].z, (_449 * _447) * 0.079577468335628509521484375), _369, _365 * ((_475 * (_278 * _473)) * fp_c6_1._m0[17].w)) + _357;
            _351 = int(uint(_351) >> uint(8));
            _373 = _469;
            _353 = _477;
            _355 = _479;
            _357 = _481;
            _377 = _477;
            _379 = _479;
            _381 = _481;
        } while (!(_469 >= 4));
        _383 = false;
        _359 = _377;
        _361 = _379;
        _363 = _381;
        if ((_351 & 255) == 30)
        {
            float _483 = _87.y;
            float _485 = 1.0 / (fma(_254, fp_c10_1._m0[565].z, fma(_483, fp_c10_1._m0[565].y, _252 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _487 = 1.0 / fp_c10_1._m0[561].y;
            float _489 = _252 + (-fp_c10_1._m0[557].x);
            float _491 = _254 + (-fp_c10_1._m0[557].z);
            float _493 = _491 * fp_c10_1._m0[558].x;
            float _495 = _489 * fp_c10_1._m0[558].z;
            float _497 = (-_252) + fma(_487, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _499 = (-_254) + fma(_487, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _501 = _497 * _497;
            float _503 = fma(_491, _491, _489 * _489);
            float _505 = ((-float(_493 < _495)) + float(_493 > _495)) * fp_c10_1._m0[561].y;
            float _507 = sqrt(fma(_499, _499, _501)) * (-fp_c10_1._m0[558].y);
            float _509 = inversesqrt(fma(_499, _499, fma(_507, _507, _501)));
            float _511 = fma(_491, fp_c10_1._m0[558].z, _489 * fp_c10_1._m0[558].x);
            bool _513 = fma(_491 * inversesqrt(_503), fp_c10_1._m0[558].z, (_489 * inversesqrt(_503)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _515 = _497 * _509;
            float _517 = _507 * _509;
            float _519 = _499 * _509;
            bool _521 = _511 > 0.0;
            float _523 = _222 + _515;
            float _525 = _224 + _517;
            float _527 = _226 + _519;
            float _529 = inversesqrt(fma(_519, _519, _515 * _515));
            float _531 = inversesqrt(fma(_527, _527, fma(_525, _525, _523 * _523)));
            float _533 = _515 * _529;
            float _535 = fma(_212, _519, fma(_210, _517, _208 * _515));
            float _537 = _525 * _531;
            float _539 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_489, fma(_505, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_491 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_505 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_489, fma(_505, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_491 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_505 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _541 = _527 * _531;
            float _543 = _533;
            float _545 = _503;
            if (_521)
            {
                _543 = sqrt(_503);
            }
            float _547 = _523 * _531;
            float _549 = _543;
            if (!_521)
            {
                _549 = 1.0;
            }
            float _551 = clamp(fma(_511 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_511 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            if (_513)
            {
                _545 = fma(_539, -_539, fp_c1_1._m0[1].y) * fma(_539, -_539, fp_c1_1._m0[1].y);
            }
            float _553 = _545;
            if (!_513)
            {
                _553 = 1.0;
            }
            float _555 = max(fma(_226, _541, fma(_224, _537, _222 * _547)), fp_c1_1._m0[0].z);
            float _557 = max(fma(_212, _541, fma(_210, _537, _208 * _547)), fp_c1_1._m0[0].z) * max(fma(_212, _541, fma(_210, _537, _208 * _547)), fp_c1_1._m0[0].z);
            float _559 = max(_535, fp_c1_1._m0[0].z);
            float _561 = exp2(_555 * fma(_555, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _563 = (exp2(log2(clamp(fma(_549, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_519 * _529, -fp_c10_1._m0[558].z, _533 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_551, -_551, fp_c1_1._m0[1].y) * fma(_551, -_551, fp_c1_1._m0[1].y), _553);
            float _565 = (fma(_371, fp_c1_1._m0[2].x, _371 * exp2(_367 * log2(clamp(max(fma(_226, -_519, fma(_224, -_517, _222 * (-_515))), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125) * exp2(log2(clamp(fma(_238, -clamp((-_535) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].y);
            float _567 = _563 * clamp(_535 + (-0.0), 0.0, 1.0);
            float _569 = (_321 * (1.0 / (_268 + fma(_268, -_559, _559)))) * ((_264 * (1.0 / max(fma(_311, _557, -_557) + 1.0, fp_c1_1._m0[0].z))) * (_264 * (1.0 / max(fma(_311, _557, -_557) + 1.0, fp_c1_1._m0[0].z))));
            float _571 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_254, fp_c10_1._m0[562].z, fma(_483, fp_c10_1._m0[562].y, _252 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _485, 0.5, 0.5), (-fma((fma(_254, fp_c10_1._m0[563].z, fma(_483, fp_c10_1._m0[563].y, _252 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _485, 0.5, 0.5)) + 1.0)).z > fma((fma(_254, fp_c10_1._m0[564].z, fma(_483, fp_c10_1._m0[564].y, _252 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _485, 0.5, 0.5)) || (_511 <= 0.0));
            _359 = fma(fma(_369, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _567) * fma(_331, fp_c1_1._m0[1].z, ((_286 + fma(_286, -_561, _561)) * _569) * 0.079577468335628509521484375), _365 * ((_565 * (_266 * _563)) * fp_c6_1._m0[17].w)), _571, _377);
            _361 = fma(fma(_369, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _567) * fma(_327, fp_c1_1._m0[1].z, ((_282 + fma(_282, -_561, _561)) * _569) * 0.079577468335628509521484375), _365 * ((_565 * (_272 * _563)) * fp_c6_1._m0[17].w)), _571, _379);
            _363 = fma(fma(_369, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _567) * fma(_329, fp_c1_1._m0[1].z, ((_290 + fma(_290, -_561, _561)) * _569) * 0.079577468335628509521484375), _365 * ((_565 * (_278 * _563)) * fp_c6_1._m0[17].w)), _571, _381);
        }
    }
    float _573 = _87.y;
    float _575 = _252 + (-fp_c3_1._m0[11].w);
    float _577 = _254 + (-fp_c3_1._m0[13].w);
    float _579 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
    float _581 = _573 + (-fp_c3_1._m0[12].w);
    float _583 = fma(_577, _577, fma(_581, _581, _575 * _575));
    float _585 = clamp(1.0 + (-fp_c6_1._m0[17].w), 0.0, 1.0);
    float _587 = clamp(fma(_341, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _589 = exp2(log2(clamp(fma(_238, -clamp((-_315) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].y) * (fma(_579, fp_c1_1._m0[2].x, _579 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_226, fp_c5_1._m0[23].z, fma(_224, fp_c5_1._m0[23].y, _222 * fp_c5_1._m0[23].x)), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _591 = exp2(log2(clamp(sqrt(_583) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_577 * inversesqrt(_583), fp_c5_1._m0[23].z, fma(_581 * inversesqrt(_583), fp_c5_1._m0[23].y, (_575 * inversesqrt(_583)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _593 = clamp(fma(_349, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _595 = fma(_349, _585 * (fma(_333 * (_286 + fma(_286, -_323, _323)), fp_c1_1._m0[1].x, _331 * 0.3183098733425140380859375) * (_337 * fp_c5_1._m0[5].x)), _587 * (((_266 * fp_c5_1._m0[5].w) * _589) * fp_c6_1._m0[17].w)) + _359;
    float _597 = fma(_349, _585 * (fma(_333 * (_282 + fma(_282, -_323, _323)), fp_c1_1._m0[1].x, _327 * 0.3183098733425140380859375) * (_337 * fp_c5_1._m0[5].y)), _587 * (((_272 * fp_c5_1._m0[5].w) * _589) * fp_c6_1._m0[17].w)) + _361;
    float _599 = fma(_349, _585 * (fma(_333 * (_290 + fma(_290, -_323, _323)), fp_c1_1._m0[1].x, _329 * 0.3183098733425140380859375) * (_337 * fp_c5_1._m0[5].z)), _587 * (((_278 * fp_c5_1._m0[5].w) * _589) * fp_c6_1._m0[17].w)) + _363;
    float _601 = clamp(fma(fma(_254, fp_c5_1._m0[14].z, fma(_573, fp_c5_1._m0[14].y, _252 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _603 = fma((-_597) + fp_c5_1._m0[13].y, _601, _597);
    float _605 = fma((-_595) + fp_c5_1._m0[13].x, _601, _595);
    float _607 = fma((-_599) + fp_c5_1._m0[13].z, _601, _599);
    float _609 = clamp((-exp2((clamp(fma(sqrt(_583), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_605) + fma(fma((_591 * fp_c7_1._m0[55].x) * _593, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _609, _605);
    _83.y = fma((-_603) + fma(fma((_591 * fp_c7_1._m0[55].y) * _593, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _609, _603);
    _83.z = fma((-_607) + fma(fma((_591 * fp_c7_1._m0[55].z) * _593, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _609, _607);
    _83.w = clamp(_98 + (-0.0), 0.0, 1.0);
}


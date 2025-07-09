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

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_22;
layout(binding = 4) uniform sampler2D fp_tex_tcb_24;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _64;
layout(location = 5) in vec4 _66;
layout(location = 6) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 0) out vec4 _75;
layout(location = 4) in vec4 _77;
layout(location = 7) in vec4 _79;
layout(location = 3) in vec4 _81;
uint _6[12];

void main()
{
    bool _333 = false;
    float _88 = _64.x;
    float _90 = _64.y;
    float _92 = texture(fp_tex_tcb_8, vec2(_88, _90)).x;
    float _94 = 1.0 / _66.w;
    bool _98 = _92 <= 0.0;
    float _100 = 1.0 / (_68.z * gl_FragCoord.w);
    if (_98)
    {
        discard;
    }
    vec2 _104 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _106 = _104.x;
    float _108 = _104.y;
    vec2 _110 = texture(fp_tex_tcb_2A, vec2(fma(_66.x * _94, 0.5, 0.5), fma(_66.y * _94, -0.5, 0.5))).xy;
    float _112 = _70.x;
    float _114 = _70.y;
    float _116 = _70.z;
    float _118 = _72.y;
    float _120 = _72.z;
    float _122 = _72.x;
    float _124 = _72.w;
    float _126 = inversesqrt(fma(_116, _116, fma(_114, _114, _112 * _112)));
    float _128 = _116 * _126;
    float _130 = _112 * _126;
    float _132 = _114 * _126;
    int _135 = floatBitsToInt(_126);
    if (_98)
    {
        _135 = 0;
    }
    float _137 = fma(_132, _120, -(_128 * _118));
    float _139 = fma(_128, _122, -(_130 * _120));
    float _141 = fma(_130, _118, -(_132 * _122));
    int _143 = floatBitsToInt(_139);
    int _145 = floatBitsToInt(_141);
    int _147 = floatBitsToInt(_137);
    if (_98)
    {
        _143 = 0;
    }
    if (_98)
    {
        _145 = 0;
    }
    if (_98)
    {
        _147 = 0;
    }
    if (_98)
    {
        _75.x = intBitsToFloat(_143);
        _75.y = intBitsToFloat(_145);
        _75.z = intBitsToFloat(_147);
        _75.w = intBitsToFloat(_135);
        return;
    }
    float _149 = _77.x;
    float _151 = _77.y;
    float _153 = _77.z;
    float _155 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _157 = sqrt(clamp((-fma(_106, _106, _108 * _108)) + 1.0, 0.0, 1.0));
    float _159 = fma(_130, _157, fma(_106, _122, _108 * (_137 * _124)));
    float _161 = fma(_132, _157, fma(_106, _118, _108 * (_139 * _124)));
    float _163 = fma(_128, _157, fma(_106, _120, _108 * (_141 * _124)));
    float _165 = inversesqrt(fma(_163, _163, fma(_161, _161, _159 * _159)));
    float _167 = inversesqrt(fma(_153, _153, fma(_151, _151, _149 * _149)));
    float _169 = _159 * _165;
    float _171 = _161 * _165;
    float _173 = _163 * _165;
    float _175 = _149 * (-_167);
    float _177 = _151 * (-_167);
    float _179 = _153 * (-_167);
    float _181 = fma(_173, _179, fma(_171, _177, _169 * _175));
    float _183 = max(_181, fp_c1_1._m0[0].y);
    float _185 = fma(_169 * (-_181), -2.0, -_175);
    float _187 = fma(_171 * (-_181), -2.0, -_177);
    float _189 = fma(_173 * (-_181), -2.0, -_179);
    float _191 = _177 + (-fp_c5_1._m0[23].y);
    float _193 = 1.0 / max(abs(_189), max(abs(_185), abs(_187)));
    vec2 _195 = texture(fp_tex_tcb_38, vec2(_183, (-_155) + (-0.0))).xy;
    float _197 = _195.x;
    float _199 = _195.y;
    vec2 _201 = texture(fp_tex_tcb_22, vec2(_79.x, _79.y)).xy;
    vec3 _205 = texture(fp_tex_tcb_36, vec4(_185 * _193, _187 * _193, _189 * _193, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_155 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec4 _208 = texture(fp_tex_tcb_24, vec2(_79.z, _79.w)).xyzw;
    float _210 = _208.w;
    float _212 = _175 + (-fp_c5_1._m0[23].x);
    float _214 = _81.x;
    float _216 = _179 + (-fp_c5_1._m0[23].z);
    float _218 = fma(_155, 0.5, 0.5);
    float _220 = _155 * _155;
    float _222 = _81.z;
    float _224 = inversesqrt(fma(_216, _216, fma(_191, _191, _212 * _212)));
    float _226 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    float _228 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _230 = _212 * _224;
    float _232 = _191 * _224;
    float _234 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _236 = _216 * _224;
    float _238 = _169 * _171;
    float _240 = _171 * _173;
    float _242 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].y, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _244 = max(fma(_179, _236, fma(_177, _232, _175 * _230)), fp_c1_1._m0[0].y);
    float _246 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].x, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _248 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].z, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _250 = _220 * _220;
    float _252 = max(fma(_173, _236, fma(_171, _232, _169 * _230)), fp_c1_1._m0[0].y) * max(fma(_173, _236, fma(_171, _232, _169 * _230)), fp_c1_1._m0[0].y);
    float _254 = _173 * _173;
    float _256 = fma(_171, -fp_c5_1._m0[23].y, _169 * (-fp_c5_1._m0[23].x));
    float _258 = (_218 * 0.5) * _218;
    float _260 = _169 * _173;
    float _262 = clamp(fma(_173, -fp_c5_1._m0[23].z, _256), 0.0, 1.0);
    float _264 = max(fma(_173, -fp_c5_1._m0[23].z, _256), fp_c1_1._m0[0].y);
    int _266 = max(0, min(int(trunc((_222 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _268 = 1.0 / (_258 + fma(_183, -_258, _183));
    float _270 = exp2(_244 * fma(_244, fp_c1_1._m0[0].z, -6.9831600189208984375));
    uint _273 = uint(int(uint((((int(uint(_266) >> uint(16)) * 20) << 16) + (((_266 & 65535) * 20) + max(0, min(int(trunc((_214 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _275 = fp_c10_1._m0[int(uint(int(_273)) >> uint(2))][int(_273) & 3];
    float _277 = (_268 * (1.0 / (_258 + fma(_258, -_264, _264)))) * ((_220 * (1.0 / max(fma(_252, _250, -_252) + 1.0, fp_c1_1._m0[0].y))) * (_220 * (1.0 / max(fma(_252, _250, -_252) + 1.0, fp_c1_1._m0[0].y))));
    float _279 = fma(_169, _169, -(_171 * _171));
    float _281 = _68.w;
    float _283 = fma(_242, -_234, _234);
    float _285 = fma(_246, -_226, _226);
    float _287 = fma(_248, -_228, _228);
    float _289 = clamp(_281 * clamp(fma(_201.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _291 = ((_208.x * _210) * _281) * 32.0;
    float _293 = ((_208.y * _210) * _281) * 32.0;
    float _295 = ((_208.z * _210) * _281) * 32.0;
    float _297 = fma(_285, _291, fma(_205.x, fma(_246, _197, _199), max(0.0, fma(_279, fp_c5_1._m0[31].x, (fma(_173, fp_c5_1._m0[25].z, fma(_171, fp_c5_1._m0[25].y, _169 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_260, fp_c5_1._m0[28].w, fma(_254, fp_c5_1._m0[28].z, fma(_240, fp_c5_1._m0[28].y, _238 * fp_c5_1._m0[28].x))))) * _285));
    float _299 = fma(_283, _293, fma(_205.y, fma(_242, _197, _199), max(0.0, fma(_279, fp_c5_1._m0[31].y, (fma(_173, fp_c5_1._m0[26].z, fma(_171, fp_c5_1._m0[26].y, _169 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_260, fp_c5_1._m0[29].w, fma(_254, fp_c5_1._m0[29].z, fma(_240, fp_c5_1._m0[29].y, _238 * fp_c5_1._m0[29].x))))) * _283));
    float _301 = fma(_287, _295, fma(_205.z, fma(_248, _197, _199), max(0.0, fma(_279, fp_c5_1._m0[31].z, (fma(_173, fp_c5_1._m0[27].z, fma(_171, fp_c5_1._m0[27].y, _169 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_260, fp_c5_1._m0[30].w, fma(_254, fp_c5_1._m0[30].z, fma(_240, fp_c5_1._m0[30].y, _238 * fp_c5_1._m0[30].x))))) * _287));
    float _303 = clamp((-_289) + 1.0, 0.0, 1.0);
    float _305 = clamp((-fma(_289, fp_c7_1._m0[37].w, clamp(_281 * clamp(fma(_201.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_110.x) + 1.0, (-_110.y) + 1.0), clamp(_81.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_68.x * gl_FragCoord.w) * _100, (_68.y * gl_FragCoord.w) * _100)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _307 = _301;
    float _309 = _297;
    float _311 = _299;
    float _313 = _169;
    float _315 = _301;
    float _317 = _299;
    float _319 = _297;
    if (floatBitsToInt(_275) != (-1))
    {
        int _321 = floatBitsToInt(_275);
        int _323 = 0;
        float _327;
        float _329;
        float _331;
        int _415;
        do
        {
            int _325 = _321 & 255;
            _327 = _309;
            _329 = _311;
            _331 = _307;
            _333 = uint(_325) >= 30u;
            if (_333)
            {
                break;
            }
            int _335 = _325 << 4;
            uint _337 = uint(int(uint(_335 + 7360) >> uint(2)));
            int _339 = int(_337) + 1;
            uint _341 = uint(int(uint(_335 + 7368) >> uint(2)));
            float _343 = (-_214) + fp_c10_1._m0[int(uint(int(_337)) >> uint(2))][int(_337) & 3];
            float _345 = fp_c10_1._m0[int(uint(_339) >> uint(2))][_339 & 3] + (-_81.y);
            float _347 = (-_222) + fp_c10_1._m0[int(uint(int(_341)) >> uint(2))][int(_341) & 3];
            float _349 = fma(_347, _347, fma(_345, _345, _343 * _343));
            float _351 = _343 * inversesqrt(_349);
            float _353 = _345 * inversesqrt(_349);
            float _355 = _347 * inversesqrt(_349);
            float _357 = _175 + _351;
            float _359 = _177 + _353;
            float _361 = _179 + _355;
            float _363 = inversesqrt(fma(_361, _361, fma(_359, _359, _357 * _357)));
            float _365 = _357 * _363;
            float _367 = _359 * _363;
            float _369 = _361 * _363;
            uint _371 = uint(int(uint(_335 + 6880) >> uint(2)));
            int _373 = int(_371) + 1;
            uint _375 = uint(int(uint(_335 + 8320) >> uint(2)));
            float _377 = fma(_173, _355, fma(_171, _353, _169 * _351));
            float _379 = max(fma(_173, _369, fma(_171, _367, _169 * _365)), fp_c1_1._m0[0].y) * max(fma(_173, _369, fma(_171, _367, _169 * _365)), fp_c1_1._m0[0].y);
            float _381 = max(fma(_179, _369, fma(_177, _367, _175 * _365)), fp_c1_1._m0[0].y);
            float _383 = max(_377, fp_c1_1._m0[0].y);
            uint _385 = uint(int(uint(_335 + 6408) >> uint(2)));
            uint _387 = uint(int(uint(_335 + 6400) >> uint(2)));
            int _389 = int(_387) + 1;
            float _391 = exp2(_381 * fma(_381, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _393 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_375)) >> uint(2))][int(_375) & 3]) != 0;
            float _395 = fp_c10_1._m0[int(uint(_373) >> uint(2))][_373 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_371)) >> uint(2))][int(_371) & 3], -sqrt(_349), fp_c1_1._m0[1].x), 0.0, 1.0));
            float _397 = (_268 * (1.0 / (_258 + fma(_258, -_383, _383)))) * ((_220 * (1.0 / max(fma(_250, _379, -_379) + 1.0, fp_c1_1._m0[0].y))) * (_220 * (1.0 / max(fma(_250, _379, -_379) + 1.0, fp_c1_1._m0[0].y))));
            float _399 = _395;
            if (!_393)
            {
                _399 = 1.0;
            }
            float _401 = _399;
            if (_393)
            {
                uint _403 = uint(int(uint(_335 + 7840) >> uint(2)));
                int _405 = int(_403) + 1;
                uint _407 = uint(int(uint(_335 + 6888) >> uint(2)));
                float _409 = fp_c10_1._m0[int(uint(int(_407)) >> uint(2))][int(_407) & 3];
                int _411 = int(_407) + 1;
                uint _413 = uint(int(uint(_335 + 7848) >> uint(2)));
                _401 = exp2(fp_c10_1._m0[int(uint(_411) >> uint(2))][_411 & 3] * log2(clamp(((-_409) + fma(_355, -fp_c10_1._m0[int(uint(int(_413)) >> uint(2))][int(_413) & 3], fma(_353, -fp_c10_1._m0[int(uint(_405) >> uint(2))][_405 & 3], _351 * (-fp_c10_1._m0[int(uint(int(_403)) >> uint(2))][int(_403) & 3])))) * (1.0 / ((-_409) + 1.0)), 0.0, 1.0)));
            }
            _415 = _323 + 1;
            float _417 = (exp2(_395) * _401) * clamp(_377 + (-0.0), 0.0, 1.0);
            float _419 = fma(fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3] * _417, fma(_228, fp_c1_1._m0[1].y, ((_248 + fma(_248, -_391, _391)) * _397) * 0.079577468335628509521484375), _307);
            float _421 = fma(fp_c10_1._m0[int(uint(int(_387)) >> uint(2))][int(_387) & 3] * _417, fma(_226, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_391, _391)) * _397) * 0.079577468335628509521484375), _309);
            float _423 = fma(fp_c10_1._m0[int(uint(_389) >> uint(2))][_389 & 3] * _417, fma(_234, fp_c1_1._m0[1].y, ((_242 + fma(_242, -_391, _391)) * _397) * 0.079577468335628509521484375), _311);
            _321 = int(uint(_321) >> uint(8));
            _323 = _415;
            _307 = _419;
            _309 = _421;
            _311 = _423;
            _327 = _421;
            _329 = _423;
            _331 = _419;
        } while (!(_415 >= 4));
        _333 = false;
        _315 = _331;
        _317 = _329;
        _319 = _327;
        if ((_321 & 255) == 30)
        {
            float _425 = _81.y;
            float _427 = 1.0 / (fma(_222, fp_c10_1._m0[565].z, fma(_425, fp_c10_1._m0[565].y, _214 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _429 = 1.0 / fp_c10_1._m0[561].y;
            float _431 = _222 + (-fp_c10_1._m0[557].z);
            float _433 = _431 * fp_c10_1._m0[558].x;
            float _435 = _214 + (-fp_c10_1._m0[557].x);
            float _437 = (-_214) + fma(_429, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _439 = (-_222) + fma(_429, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _441 = _435 * fp_c10_1._m0[558].z;
            float _443 = _437 * _437;
            float _445 = fma(_431, _431, _435 * _435);
            float _447 = sqrt(fma(_439, _439, _443)) * (-fp_c10_1._m0[558].y);
            float _449 = ((-float(_433 < _441)) + float(_433 > _441)) * fp_c10_1._m0[561].y;
            float _451 = inversesqrt(fma(_439, _439, fma(_447, _447, _443)));
            float _453 = _437 * _451;
            float _455 = _447 * _451;
            float _457 = _439 * _451;
            float _459 = _175 + _453;
            float _461 = fma(_431, fp_c10_1._m0[558].z, _435 * fp_c10_1._m0[558].x);
            float _463 = _177 + _455;
            float _465 = inversesqrt(fma(_457, _457, _453 * _453));
            bool _467 = _461 > 0.0;
            float _469 = _179 + _457;
            float _471 = fma(_173, _457, fma(_171, _455, _169 * _453));
            float _473 = inversesqrt(fma(_469, _469, fma(_463, _463, _459 * _459)));
            float _475 = _459 * _473;
            float _477 = _469 * _473;
            float _479 = _463 * _473;
            if (_467)
            {
                _313 = sqrt(_445);
            }
            float _481 = _313;
            if (!_467)
            {
                _481 = 1.0;
            }
            float _483 = max(fma(_179, _477, fma(_177, _479, _175 * _475)), fp_c1_1._m0[0].y);
            float _485 = clamp(fma(_461 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_461 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _487 = max(_471, fp_c1_1._m0[0].y);
            float _489 = max(fma(_173, _477, fma(_171, _479, _169 * _475)), fp_c1_1._m0[0].y) * max(fma(_173, _477, fma(_171, _479, _169 * _475)), fp_c1_1._m0[0].y);
            float _491 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_435, fma(_449, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_431 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_449 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_435, fma(_449, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_431 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_449 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            bool _493 = fma(_431 * inversesqrt(_445), fp_c10_1._m0[558].z, (_435 * inversesqrt(_445)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _495 = fma(_258, -_487, _487);
            float _497 = _495;
            if (_493)
            {
                _497 = fma(_491, -_491, fp_c1_1._m0[1].x) * fma(_491, -_491, fp_c1_1._m0[1].x);
            }
            float _499 = exp2(_483 * fma(_483, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _501 = _497;
            if (!_493)
            {
                _501 = 1.0;
            }
            float _503 = clamp(_471 + (-0.0), 0.0, 1.0) * (min(fma(_485, -_485, fp_c1_1._m0[1].x) * fma(_485, -_485, fp_c1_1._m0[1].x), _501) * (exp2(log2(clamp(fma(_481, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_457 * _465, -fp_c10_1._m0[558].z, (_453 * _465) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _505 = (_268 * (1.0 / (_258 + _495))) * ((_220 * (1.0 / max(fma(_250, _489, -_489) + 1.0, fp_c1_1._m0[0].y))) * (_220 * (1.0 / max(fma(_250, _489, -_489) + 1.0, fp_c1_1._m0[0].y))));
            float _507 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_222, fp_c10_1._m0[562].z, fma(_425, fp_c10_1._m0[562].y, _214 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _427, 0.5, 0.5), (-fma((fma(_222, fp_c10_1._m0[563].z, fma(_425, fp_c10_1._m0[563].y, _214 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _427, 0.5, 0.5)) + 1.0)).z > fma((fma(_222, fp_c10_1._m0[564].z, fma(_425, fp_c10_1._m0[564].y, _214 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _427, 0.5, 0.5)) || (_461 <= 0.0));
            _315 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _503) * fma(_228, fp_c1_1._m0[1].y, ((_248 + fma(_248, -_499, _499)) * _505) * 0.079577468335628509521484375), _507, _331);
            _317 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _503) * fma(_234, fp_c1_1._m0[1].y, ((_242 + fma(_242, -_499, _499)) * _505) * 0.079577468335628509521484375), _507, _329);
            _319 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _503) * fma(_226, fp_c1_1._m0[1].y, ((_246 + fma(_246, -_499, _499)) * _505) * 0.079577468335628509521484375), _507, _327);
        }
    }
    float _509 = _214 + (-fp_c3_1._m0[11].w);
    float _511 = _81.y;
    float _513 = _222 + (-fp_c3_1._m0[13].w);
    float _515 = fma(_303, _315, _305 * (fma(_277 * (_248 + fma(_248, -_270, _270)), fp_c1_1._m0[0].w, _228 * 0.3183098733425140380859375) * fma(_262, fp_c5_1._m0[5].z, _295)));
    float _517 = fma(_303, _317, _305 * (fma(_277 * (_242 + fma(_242, -_270, _270)), fp_c1_1._m0[0].w, _234 * 0.3183098733425140380859375) * fma(_262, fp_c5_1._m0[5].y, _293)));
    float _519 = _511 + (-fp_c3_1._m0[12].w);
    float _521 = fma(_513, _513, fma(_519, _519, _509 * _509));
    float _523 = fma(_303, _319, _305 * (fma(_277 * (_246 + fma(_246, -_270, _270)), fp_c1_1._m0[0].w, _226 * 0.3183098733425140380859375) * fma(_262, fp_c5_1._m0[5].x, _291)));
    float _525 = clamp(fma(_305 * _303, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _527 = clamp(fma(fma(_222, fp_c5_1._m0[14].z, fma(_511, fp_c5_1._m0[14].y, _214 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _529 = exp2(log2(clamp(sqrt(_521) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_513 * inversesqrt(_521), fp_c5_1._m0[23].z, fma(_519 * inversesqrt(_521), fp_c5_1._m0[23].y, (_509 * inversesqrt(_521)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _531 = fma((-_523) + fp_c5_1._m0[13].x, _527, _523);
    float _533 = fma((-_517) + fp_c5_1._m0[13].y, _527, _517);
    float _535 = fma((-_515) + fp_c5_1._m0[13].z, _527, _515);
    float _537 = clamp((-exp2((clamp(fma(sqrt(_521), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_531) + fma(fma((_529 * fp_c7_1._m0[55].x) * _525, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _537, _531);
    _75.y = fma((-_533) + fma(fma((_529 * fp_c7_1._m0[55].y) * _525, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _537, _533);
    _75.z = fma((-_535) + fma(fma((_529 * fp_c7_1._m0[55].z) * _525, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _537, _535);
    _75.w = clamp(_92 + (-0.0), 0.0, 1.0);
}


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
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 2) in vec4 _70;
layout(location = 0) out vec4 _73;
layout(location = 4) in vec4 _75;
layout(location = 6) in vec4 _77;
layout(location = 5) in vec4 _79;
layout(location = 3) in vec4 _81;
uint _6[12];

void main()
{
    bool _327 = false;
    float _88 = _62.x;
    float _90 = _62.y;
    float _92 = texture(fp_tex_tcb_8, vec2(_88, _90)).x;
    bool _95 = _92 <= 0.0;
    if (_95)
    {
        discard;
    }
    vec2 _99 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _101 = _99.x;
    float _103 = _99.y;
    vec3 _107 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _109 = _107.x;
    float _111 = _107.y;
    float _113 = _107.z;
    float _115 = texture(fp_tex_tcb_12, vec2(_88, _90)).x;
    float _117 = _64.x;
    float _119 = _64.y;
    float _121 = _64.z;
    float _123 = _70.x;
    float _125 = _70.y;
    float _127 = _70.z;
    float _129 = _70.w;
    float _131 = inversesqrt(fma(_121, _121, fma(_119, _119, _117 * _117)));
    bool _133 = floatBitsToInt(fma(float(gl_FrontFacing ? (-1) : 0), -2.0, -1.0)) <= 0;
    float _135 = _121 * _131;
    float _137 = _117 * _131;
    float _139 = _119 * _131;
    int _142 = floatBitsToInt(_131);
    float _144 = _125;
    float _146 = _127;
    float _148 = _135;
    float _150 = _137;
    float _152 = _123;
    float _154 = _139;
    if (_95)
    {
        _142 = 0;
    }
    if (_133)
    {
        _144 = (-_125) + (-0.0);
    }
    if (_133)
    {
        _146 = (-_127) + (-0.0);
    }
    if (_133)
    {
        _148 = (-_135) + (-0.0);
    }
    if (_133)
    {
        _150 = (-_137) + (-0.0);
    }
    if (_133)
    {
        _152 = (-_123) + (-0.0);
    }
    if (_133)
    {
        _154 = (-_139) + (-0.0);
    }
    float _156 = fma(_146, _154, -(_144 * _148));
    float _158 = fma(_152, _148, -(_146 * _150));
    float _160 = fma(_144, _150, -(_152 * _154));
    int _162 = floatBitsToInt(_156);
    int _164 = floatBitsToInt(_158);
    int _166 = floatBitsToInt(_160);
    if (_95)
    {
        _162 = 0;
    }
    if (_95)
    {
        _164 = 0;
    }
    if (_95)
    {
        _166 = 0;
    }
    if (_95)
    {
        _73.x = intBitsToFloat(_162);
        _73.y = intBitsToFloat(_164);
        _73.z = intBitsToFloat(_166);
        _73.w = intBitsToFloat(_142);
        return;
    }
    float _168 = _75.x;
    float _170 = _75.y;
    float _172 = _75.z;
    float _174 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _176 = sqrt(clamp((-fma(_101, _101, _103 * _103)) + 1.0, 0.0, 1.0));
    float _178 = fma(_176, _150, fma(_101, _152, _103 * (_156 * _129)));
    float _180 = fma(_176, _154, fma(_101, _144, _103 * (_158 * _129)));
    float _182 = fma(_176, _148, fma(_101, _146, _103 * (_160 * _129)));
    float _184 = inversesqrt(fma(_182, _182, fma(_180, _180, _178 * _178)));
    float _186 = inversesqrt(fma(_172, _172, fma(_170, _170, _168 * _168)));
    float _188 = _178 * _184;
    float _190 = _180 * _184;
    float _192 = _182 * _184;
    float _194 = _168 * (-_186);
    float _196 = _170 * (-_186);
    float _198 = 1.0 / (_77.z * gl_FragCoord.w);
    float _200 = _172 * (-_186);
    float _202 = fma(_192, _200, fma(_190, _196, _188 * _194));
    float _204 = 1.0 / _79.w;
    float _206 = fma(_188 * (-_202), -2.0, -_194);
    float _208 = fma(_190 * (-_202), -2.0, -_196);
    float _210 = fma(_192 * (-_202), -2.0, -_200);
    float _212 = max(_202, fp_c1_1._m0[0].z);
    float _214 = 1.0 / max(abs(_210), max(abs(_206), abs(_208)));
    vec2 _216 = texture(fp_tex_tcb_2A, vec2(fma(_79.x * _204, 0.5, 0.5), fma(_79.y * _204, -0.5, 0.5))).xy;
    vec2 _218 = texture(fp_tex_tcb_38, vec2(_212, (-_174) + (-0.0))).xy;
    float _220 = _218.x;
    float _222 = _218.y;
    vec3 _224 = texture(fp_tex_tcb_36, vec4(_206 * _214, _208 * _214, _210 * _214, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_174 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _226 = _81.x;
    float _228 = _81.z;
    float _230 = _194 + (-fp_c5_1._m0[23].x);
    float _232 = _196 + (-fp_c5_1._m0[23].y);
    float _234 = fma(_174, 0.5, 0.5);
    float _236 = _174 * _174;
    float _238 = (_234 * 0.5) * _234;
    float _240 = _200 + (-fp_c5_1._m0[23].z);
    float _242 = inversesqrt(fma(_240, _240, fma(_232, _232, _230 * _230)));
    int _244 = max(0, min(int(trunc((_228 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _246 = _230 * _242;
    float _248 = _188 * _190;
    float _250 = _232 * _242;
    float _252 = _190 * _192;
    float _254 = _240 * _242;
    float _256 = _192 * _192;
    float _258 = _188 * _192;
    float _260 = fma(_190, -fp_c5_1._m0[23].y, _188 * (-fp_c5_1._m0[23].x));
    float _262 = max(fma(_192, _254, fma(_190, _250, _188 * _246)), fp_c1_1._m0[0].z) * max(fma(_192, _254, fma(_190, _250, _188 * _246)), fp_c1_1._m0[0].z);
    float _264 = max(fma(_200, _254, fma(_196, _250, _194 * _246)), fp_c1_1._m0[0].z);
    float _266 = max(fma(_192, -fp_c5_1._m0[23].z, _260), fp_c1_1._m0[0].z);
    float _268 = clamp(fma(_192, -fp_c5_1._m0[23].z, _260), 0.0, 1.0);
    uint _271 = uint(int(uint((((int(uint(_244) >> uint(16)) * 20) << 16) + (((_244 & 65535) * 20) + max(0, min(int(trunc((_226 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _273 = fp_c10_1._m0[int(uint(int(_271)) >> uint(2))][int(_271) & 3];
    float _275 = fma(_109, -_115, _109);
    float _277 = 1.0 / (_238 + fma(_212, -_238, _212));
    float _279 = fma(_111, -_115, _111);
    float _281 = fma(_113, -_115, _113);
    float _283 = fma(_115, _113 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _285 = exp2(_264 * fma(_264, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _287 = fma(_188, _188, -(_190 * _190));
    float _289 = fma(_115, _109 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _291 = fma(_115, _111 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _293 = (_277 * (1.0 / (_238 + fma(_238, -_266, _266)))) * ((_236 * (1.0 / max(fma(_262, _236 * _236, -_262) + 1.0, fp_c1_1._m0[0].z))) * (_236 * (1.0 / max(fma(_262, _236 * _236, -_262) + 1.0, fp_c1_1._m0[0].z))));
    float _295 = fma(fma(_283, _220, _222), _224.z, max(0.0, fma(_287, fp_c5_1._m0[31].z, (fma(_192, fp_c5_1._m0[27].z, fma(_190, fp_c5_1._m0[27].y, _188 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_258, fp_c5_1._m0[30].w, fma(_256, fp_c5_1._m0[30].z, fma(_252, fp_c5_1._m0[30].y, _248 * fp_c5_1._m0[30].x))))) * fma(_283, -_281, _281));
    float _297 = fma(fma(_289, _220, _222), _224.x, max(0.0, fma(_287, fp_c5_1._m0[31].x, (fma(_192, fp_c5_1._m0[25].z, fma(_190, fp_c5_1._m0[25].y, _188 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_258, fp_c5_1._m0[28].w, fma(_256, fp_c5_1._m0[28].z, fma(_252, fp_c5_1._m0[28].y, _248 * fp_c5_1._m0[28].x))))) * fma(_289, -_275, _275));
    float _299 = fma(fma(_291, _220, _222), _224.y, max(0.0, fma(_287, fp_c5_1._m0[31].y, (fma(_192, fp_c5_1._m0[26].z, fma(_190, fp_c5_1._m0[26].y, _188 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_258, fp_c5_1._m0[29].w, fma(_256, fp_c5_1._m0[29].z, fma(_252, fp_c5_1._m0[29].y, _248 * fp_c5_1._m0[29].x))))) * fma(_291, -_279, _279));
    float _301 = clamp((-fma(max((-_216.x) + 1.0, (-_216.y) + 1.0), clamp(_81.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_77.x * gl_FragCoord.w) * _198, (_77.y * gl_FragCoord.w) * _198)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _303 = floatBitsToInt(_273);
    float _305 = _299;
    float _307 = _295;
    float _309 = _297;
    float _311 = _297;
    float _313 = _299;
    float _315 = _295;
    if (floatBitsToInt(_273) != (-1))
    {
        int _317 = 0;
        float _321;
        float _323;
        float _325;
        int _409;
        do
        {
            int _319 = _303 & 255;
            _321 = _309;
            _323 = _305;
            _325 = _307;
            _327 = uint(_319) >= 30u;
            if (_327)
            {
                break;
            }
            int _329 = _319 << 4;
            uint _331 = uint(int(uint(_329 + 7360) >> uint(2)));
            int _333 = int(_331) + 1;
            uint _335 = uint(int(uint(_329 + 7368) >> uint(2)));
            float _337 = (-_226) + fp_c10_1._m0[int(uint(int(_331)) >> uint(2))][int(_331) & 3];
            float _339 = fp_c10_1._m0[int(uint(_333) >> uint(2))][_333 & 3] + (-_81.y);
            float _341 = (-_228) + fp_c10_1._m0[int(uint(int(_335)) >> uint(2))][int(_335) & 3];
            float _343 = fma(_341, _341, fma(_339, _339, _337 * _337));
            float _345 = _337 * inversesqrt(_343);
            float _347 = _339 * inversesqrt(_343);
            float _349 = _341 * inversesqrt(_343);
            float _351 = _194 + _345;
            float _353 = _196 + _347;
            float _355 = _200 + _349;
            uint _357 = uint(int(uint(_329 + 6880) >> uint(2)));
            int _359 = int(_357) + 1;
            float _361 = inversesqrt(fma(_355, _355, fma(_353, _353, _351 * _351)));
            float _363 = _351 * _361;
            float _365 = _353 * _361;
            float _367 = _355 * _361;
            uint _369 = uint(int(uint(_329 + 8320) >> uint(2)));
            float _371 = max(fma(_200, _367, fma(_196, _365, _194 * _363)), fp_c1_1._m0[0].z);
            float _373 = max(fma(_192, _367, fma(_190, _365, _188 * _363)), fp_c1_1._m0[0].z) * max(fma(_192, _367, fma(_190, _365, _188 * _363)), fp_c1_1._m0[0].z);
            float _375 = fma(_192, _349, fma(_190, _347, _188 * _345));
            float _377 = max(_375, fp_c1_1._m0[0].z);
            uint _379 = uint(int(uint(_329 + 6408) >> uint(2)));
            float _381 = fp_c10_1._m0[int(uint(_359) >> uint(2))][_359 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_357)) >> uint(2))][int(_357) & 3], -sqrt(_343), fp_c1_1._m0[1].y), 0.0, 1.0));
            uint _383 = uint(int(uint(_329 + 6400) >> uint(2)));
            int _385 = int(_383) + 1;
            float _387 = exp2(_371 * fma(_371, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _389 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_369)) >> uint(2))][int(_369) & 3]) != 0;
            float _391 = (_277 * (1.0 / (_238 + fma(_238, -_377, _377)))) * ((_236 * (1.0 / max(fma(_236 * _236, _373, -_373) + 1.0, fp_c1_1._m0[0].z))) * (_236 * (1.0 / max(fma(_236 * _236, _373, -_373) + 1.0, fp_c1_1._m0[0].z))));
            float _393 = _381;
            if (!_389)
            {
                _393 = 1.0;
            }
            float _395 = _393;
            if (_389)
            {
                uint _397 = uint(int(uint(_329 + 7840) >> uint(2)));
                int _399 = int(_397) + 1;
                uint _401 = uint(int(uint(_329 + 7848) >> uint(2)));
                uint _403 = uint(int(uint(_329 + 6888) >> uint(2)));
                float _405 = fp_c10_1._m0[int(uint(int(_403)) >> uint(2))][int(_403) & 3];
                int _407 = int(_403) + 1;
                _395 = exp2(fp_c10_1._m0[int(uint(_407) >> uint(2))][_407 & 3] * log2(clamp(((-_405) + fma(_349, -fp_c10_1._m0[int(uint(int(_401)) >> uint(2))][int(_401) & 3], fma(_347, -fp_c10_1._m0[int(uint(_399) >> uint(2))][_399 & 3], _345 * (-fp_c10_1._m0[int(uint(int(_397)) >> uint(2))][int(_397) & 3])))) * (1.0 / ((-_405) + 1.0)), 0.0, 1.0)));
            }
            _409 = _317 + 1;
            float _411 = (exp2(_381) * _395) * clamp(_375 + (-0.0), 0.0, 1.0);
            float _413 = fma(fp_c10_1._m0[int(uint(_385) >> uint(2))][_385 & 3] * _411, fma(_279, fp_c1_1._m0[1].z, ((_291 + fma(_291, -_387, _387)) * _391) * 0.079577468335628509521484375), _305);
            float _415 = fma(fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3] * _411, fma(_281, fp_c1_1._m0[1].z, ((_283 + fma(_283, -_387, _387)) * _391) * 0.079577468335628509521484375), _307);
            float _417 = fma(fp_c10_1._m0[int(uint(int(_383)) >> uint(2))][int(_383) & 3] * _411, fma(_275, fp_c1_1._m0[1].z, ((_289 + fma(_289, -_387, _387)) * _391) * 0.079577468335628509521484375), _309);
            _303 = int(uint(_303) >> uint(8));
            _317 = _409;
            _305 = _413;
            _307 = _415;
            _309 = _417;
            _321 = _417;
            _323 = _413;
            _325 = _415;
        } while (!(_409 >= 4));
        _327 = false;
        _311 = _321;
        _313 = _323;
        _315 = _325;
        if ((_303 & 255) == 30)
        {
            float _419 = _81.y;
            float _421 = 1.0 / (fma(_228, fp_c10_1._m0[565].z, fma(_419, fp_c10_1._m0[565].y, _226 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _423 = 1.0 / fp_c10_1._m0[561].y;
            float _425 = _226 + (-fp_c10_1._m0[557].x);
            float _427 = _228 + (-fp_c10_1._m0[557].z);
            float _429 = _425 * fp_c10_1._m0[558].z;
            float _431 = _427 * fp_c10_1._m0[558].x;
            float _433 = (-_226) + fma(_423, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _435 = (-_228) + fma(_423, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _437 = _433 * _433;
            float _439 = ((-float(_431 < _429)) + float(_431 > _429)) * fp_c10_1._m0[561].y;
            float _441 = sqrt(fma(_435, _435, _437)) * (-fp_c10_1._m0[558].y);
            float _443 = inversesqrt(fma(_435, _435, fma(_441, _441, _437)));
            float _445 = _433 * _443;
            float _447 = _441 * _443;
            float _449 = _435 * _443;
            float _451 = _194 + _445;
            float _453 = _196 + _447;
            float _455 = _200 + _449;
            float _457 = fma(_192, _449, fma(_190, _447, _188 * _445));
            float _459 = inversesqrt(fma(_455, _455, fma(_453, _453, _451 * _451)));
            float _461 = _451 * _459;
            float _463 = _453 * _459;
            float _465 = _455 * _459;
            float _467 = fma(_427, _427, _425 * _425);
            float _469 = max(fma(_200, _465, fma(_196, _463, _194 * _461)), fp_c1_1._m0[0].z);
            float _471 = fma(_427, fp_c10_1._m0[558].z, _425 * fp_c10_1._m0[558].x);
            float _473 = max(fma(_192, _465, fma(_190, _463, _188 * _461)), fp_c1_1._m0[0].z) * max(fma(_192, _465, fma(_190, _463, _188 * _461)), fp_c1_1._m0[0].z);
            float _475 = inversesqrt(fma(_449, _449, _445 * _445));
            bool _477 = _471 > 0.0;
            float _479 = max(_457, fp_c1_1._m0[0].z);
            float _481 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_425, fma(_439, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_427 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_439 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_425, fma(_439, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_427 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_439 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _483 = _449;
            if (_477)
            {
                _483 = sqrt(_467);
            }
            float _485 = _483;
            if (!_477)
            {
                _485 = 1.0;
            }
            bool _487 = fma(_427 * inversesqrt(_467), fp_c10_1._m0[558].z, (_425 * inversesqrt(_467)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _489 = fma(_481, -_481, fp_c1_1._m0[1].y);
            float _491 = _489;
            if (_487)
            {
                _491 = _489 * _489;
            }
            float _493 = _491;
            if (!_487)
            {
                _493 = 1.0;
            }
            float _495 = clamp(fma(_471 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_471 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _497 = exp2(_469 * fma(_469, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _499 = (_277 * (1.0 / (_238 + fma(_238, -_479, _479)))) * ((_236 * (1.0 / max(fma(_236 * _236, _473, -_473) + 1.0, fp_c1_1._m0[0].z))) * (_236 * (1.0 / max(fma(_236 * _236, _473, -_473) + 1.0, fp_c1_1._m0[0].z))));
            float _501 = clamp(_457 + (-0.0), 0.0, 1.0) * (min(fma(_495, -_495, fp_c1_1._m0[1].y) * fma(_495, -_495, fp_c1_1._m0[1].y), _493) * (exp2(log2(clamp(fma(_485, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_449 * _475, -fp_c10_1._m0[558].z, (_445 * _475) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _503 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_228, fp_c10_1._m0[562].z, fma(_419, fp_c10_1._m0[562].y, _226 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _421, 0.5, 0.5), (-fma((fma(_228, fp_c10_1._m0[563].z, fma(_419, fp_c10_1._m0[563].y, _226 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _421, 0.5, 0.5)) + 1.0)).z > fma((fma(_228, fp_c10_1._m0[564].z, fma(_419, fp_c10_1._m0[564].y, _226 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _421, 0.5, 0.5)) || (_471 <= 0.0));
            _311 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _501) * fma(_275, fp_c1_1._m0[1].z, ((_289 + fma(_289, -_497, _497)) * _499) * 0.079577468335628509521484375), _503, _321);
            _313 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _501) * fma(_279, fp_c1_1._m0[1].z, ((_291 + fma(_291, -_497, _497)) * _499) * 0.079577468335628509521484375), _503, _323);
            _315 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _501) * fma(_281, fp_c1_1._m0[1].z, ((_283 + fma(_283, -_497, _497)) * _499) * 0.079577468335628509521484375), _503, _325);
        }
    }
    float _505 = _226 + (-fp_c3_1._m0[11].w);
    float _507 = _81.y;
    float _509 = _228 + (-fp_c3_1._m0[13].w);
    float _511 = fma(_301, fma(_293 * (_289 + fma(_289, -_285, _285)), fp_c1_1._m0[1].x, _275 * 0.3183098733425140380859375) * (_268 * fp_c5_1._m0[5].x), _311);
    float _513 = fma(_301, fma(_293 * (_291 + fma(_291, -_285, _285)), fp_c1_1._m0[1].x, _279 * 0.3183098733425140380859375) * (_268 * fp_c5_1._m0[5].y), _313);
    float _515 = fma(_301, fma(_293 * (_283 + fma(_283, -_285, _285)), fp_c1_1._m0[1].x, _281 * 0.3183098733425140380859375) * (_268 * fp_c5_1._m0[5].z), _315);
    float _517 = _507 + (-fp_c3_1._m0[12].w);
    float _519 = fma(_509, _509, fma(_517, _517, _505 * _505));
    float _521 = clamp(fma(fma(_228, fp_c5_1._m0[14].z, fma(_507, fp_c5_1._m0[14].y, _226 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _523 = clamp(fma(_301, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _525 = exp2(log2(clamp(sqrt(_519) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_509 * inversesqrt(_519), fp_c5_1._m0[23].z, fma(_517 * inversesqrt(_519), fp_c5_1._m0[23].y, (_505 * inversesqrt(_519)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _527 = fma((-_511) + fp_c5_1._m0[13].x, _521, _511);
    float _529 = fma((-_513) + fp_c5_1._m0[13].y, _521, _513);
    float _531 = fma((-_515) + fp_c5_1._m0[13].z, _521, _515);
    float _533 = clamp((-exp2((clamp(fma(sqrt(_519), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _73.x = fma((-_527) + fma(fma(_523 * (_525 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _533, _527);
    _73.y = fma((-_529) + fma(fma(_523 * (_525 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _533, _529);
    _73.z = fma((-_531) + fma(fma(_523 * (_525 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _533, _531);
    _73.w = clamp(_92 + (-0.0), 0.0, 1.0);
}


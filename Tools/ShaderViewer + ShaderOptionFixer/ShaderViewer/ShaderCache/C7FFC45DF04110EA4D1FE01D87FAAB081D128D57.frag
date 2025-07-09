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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_28;
layout(binding = 1) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 2) uniform sampler2DArrayShadow fp_tex_tcb_2E;
layout(binding = 3) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 4) uniform sampler2D fp_tex_tcb_38;
layout(binding = 5) uniform sampler2D fp_tex_tcb_44;

layout(location = 4) in vec4 _59;
layout(location = 2) in vec4 _61;
layout(location = 3) in vec4 _63;
layout(location = 0) in vec4 _65;
layout(location = 5) in vec4 _67;
layout(location = 6) in vec4 _69;
layout(location = 7) in vec4 _71;
layout(location = 1) in vec4 _73;
layout(location = 0) out vec4 _76;
uint _6[12];

void main()
{
    bool _281 = false;
    float _83 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _85 = 1.0 / (_59.z * gl_FragCoord.w);
    float _87 = _61.w;
    float _89 = _63.x;
    float _91 = _63.y;
    float _93 = _63.z;
    float _95 = _65.x;
    float _97 = _65.y;
    float _99 = _65.z;
    float _101 = _89 * _89;
    float _103 = float((abs(((-_87) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_87) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_87) > fp_c3_1._m0[58].y) ? (-1) : 0));
    float _105 = fma(_97, _97, _95 * _95);
    float _107 = inversesqrt(fma(_93, _93, fma(_91, _91, _101)));
    bool _111 = _103 == 0.0;
    float _113 = inversesqrt(fma(_99, _99, _105));
    float _115 = _89 * (-_107);
    float _117 = _101;
    float _119 = _105;
    if (_111)
    {
        _117 = _69.w;
    }
    float _121 = _95 * _113;
    float _123 = _117;
    if (!_111)
    {
        _123 = _71.w;
    }
    float _125 = _97 * _113;
    if (_111)
    {
        _119 = _69.z;
    }
    float _127 = _91 * (-_107);
    float _129 = 0.0;
    float _131 = _119;
    if (_111)
    {
        _129 = _69.x;
    }
    float _133 = _93 * (-_107);
    float _135 = 0.0;
    float _137 = _129;
    if (_111)
    {
        _135 = _69.y;
    }
    float _139 = _99 * _113;
    float _141 = _135;
    if (!_111)
    {
        _131 = _71.z;
    }
    if (!_111)
    {
        _137 = _71.x;
    }
    if (!_111)
    {
        _141 = _71.y;
    }
    float _143 = 1.0 / (_67.w * gl_FragCoord.w);
    float _145 = fma(_139, _133, fma(_125, _127, _121 * _115));
    float _147 = 1.0 / _123;
    float _149 = max(_145, fp_c1_1._m0[0].y);
    float _151 = fma(_121 * (-_145), -2.0, -_115);
    float _153 = fma(_125 * (-_145), -2.0, -_127);
    float _155 = fma(_139 * (-_145), -2.0, -_133);
    float _157 = _115 + (-fp_c5_1._m0[23].x);
    float _159 = 1.0 / max(abs(_155), max(abs(_151), abs(_153)));
    vec2 _163 = texture(fp_tex_tcb_2C, vec2((_67.x * gl_FragCoord.w) * _143, (_67.y * gl_FragCoord.w) * _143)).xy;
    float _165 = _163.x;
    vec2 _167 = texture(fp_tex_tcb_38, vec2(_149, (-_83) + (-0.0))).xy;
    float _169 = _167.x;
    float _171 = _167.y;
    vec3 _175 = texture(fp_tex_tcb_36, vec4(_151 * _159, _153 * _159, _155 * _159, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_83 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _177 = _61.x;
    float _179 = _61.z;
    float _181 = _127 + (-fp_c5_1._m0[23].y);
    float _183 = _133 + (-fp_c5_1._m0[23].z);
    float _185 = inversesqrt(fma(_183, _183, fma(_181, _181, _157 * _157)));
    float _187 = _121 * _125;
    float _189 = _157 * _185;
    float _191 = _183 * _185;
    int _194 = max(0, min(int(trunc((_179 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _196 = _181 * _185;
    float _198 = _125 * _139;
    float _200 = _83 * _83;
    float _202 = fma(_83, 0.5, 0.5);
    float _204 = max(fma(_133, _191, fma(_127, _196, _115 * _189)), fp_c1_1._m0[0].y);
    float _206 = _139 * _139;
    float _208 = max(fma(_139, _191, fma(_125, _196, _121 * _189)), fp_c1_1._m0[0].y) * max(fma(_139, _191, fma(_125, _196, _121 * _189)), fp_c1_1._m0[0].y);
    float _210 = fma(_125, -fp_c5_1._m0[23].y, _121 * (-fp_c5_1._m0[23].x));
    float _212 = (_202 * 0.5) * _202;
    float _214 = max(fma(_139, -fp_c5_1._m0[23].z, _210), fp_c1_1._m0[0].y);
    float _216 = _121 * _139;
    float _218 = 1.0 / (_212 + fma(_149, -_212, _149));
    float _220 = clamp(_67.z, 0.0, 1.0);
    float _222 = exp2(_204 * fma(_204, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _224 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].x;
    float _226 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].y;
    float _228 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].z;
    float _230 = fma(_121, _121, -(_125 * _125));
    float _232 = (_218 * (1.0 / (_212 + fma(_212, -_214, _214)))) * ((_200 * (1.0 / max(fma(_208, _200 * _200, -_208) + 1.0, fp_c1_1._m0[0].y))) * (_200 * (1.0 / max(fma(_208, _200 * _200, -_208) + 1.0, fp_c1_1._m0[0].y))));
    uint _235 = uint(int(uint((((int(uint(_194) >> uint(16)) * 20) << 16) + (((_194 & 65535) * 20) + max(0, min(int(trunc((_177 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _237 = fp_c10_1._m0[int(uint(int(_235)) >> uint(2))][int(_235) & 3];
    float _239 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    float _241 = fma(_165, -_165, _163.y);
    float _243 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _245 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _247 = clamp(fma(_139, -fp_c5_1._m0[23].z, _210), 0.0, 1.0);
    float _249 = fma(_175.x, fma(_224, _169, _171), max(0.0, fma(_230, fp_c5_1._m0[31].x, (fma(_139, fp_c5_1._m0[25].z, fma(_125, fp_c5_1._m0[25].y, _121 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_216, fp_c5_1._m0[28].w, fma(_206, fp_c5_1._m0[28].z, fma(_198, fp_c5_1._m0[28].y, _187 * fp_c5_1._m0[28].x))))) * fma(_239, -_224, _239));
    float _251 = fma(_175.y, fma(_226, _169, _171), max(0.0, fma(_230, fp_c5_1._m0[31].y, (fma(_139, fp_c5_1._m0[26].z, fma(_125, fp_c5_1._m0[26].y, _121 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_216, fp_c5_1._m0[29].w, fma(_206, fp_c5_1._m0[29].z, fma(_198, fp_c5_1._m0[29].y, _187 * fp_c5_1._m0[29].x))))) * fma(_245, -_226, _245));
    float _253 = fma(_175.z, fma(_228, _169, _171), max(0.0, fma(_230, fp_c5_1._m0[31].z, (fma(_139, fp_c5_1._m0[27].z, fma(_125, fp_c5_1._m0[27].y, _121 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_216, fp_c5_1._m0[30].w, fma(_206, fp_c5_1._m0[30].z, fma(_198, fp_c5_1._m0[30].y, _187 * fp_c5_1._m0[30].x))))) * fma(_243, -_228, _243));
    float _255 = clamp((-(max((-max(min(_241 * (1.0 / fma((-_165) + _220, (-_165) + _220, _241)), 1.0), float(_220 <= _165))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_147 * _137, _147 * _141, float(int(clamp(uint(max(roundEven(_103), 0.0)), 0u, 65535u)))), _147 * _131))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_59.x * gl_FragCoord.w) * _85, (_59.y * gl_FragCoord.w) * _85)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _257 = floatBitsToInt(_237);
    float _259 = _251;
    float _261 = _253;
    float _263 = _249;
    float _265 = _251;
    float _267 = _249;
    float _269 = _253;
    if (floatBitsToInt(_237) != (-1))
    {
        int _271 = 0;
        float _275;
        float _277;
        float _279;
        int _361;
        do
        {
            int _273 = _257 & 255;
            _275 = _263;
            _277 = _259;
            _279 = _261;
            _281 = uint(_273) >= 30u;
            if (_281)
            {
                break;
            }
            int _283 = _273 << 4;
            uint _285 = uint(int(uint(_283 + 7360) >> uint(2)));
            int _287 = int(_285) + 1;
            uint _289 = uint(int(uint(_283 + 7368) >> uint(2)));
            float _291 = (-_177) + fp_c10_1._m0[int(uint(int(_285)) >> uint(2))][int(_285) & 3];
            float _293 = fp_c10_1._m0[int(uint(_287) >> uint(2))][_287 & 3] + (-_61.y);
            float _295 = (-_179) + fp_c10_1._m0[int(uint(int(_289)) >> uint(2))][int(_289) & 3];
            float _297 = fma(_295, _295, fma(_293, _293, _291 * _291));
            float _299 = _291 * inversesqrt(_297);
            float _301 = _293 * inversesqrt(_297);
            float _303 = _295 * inversesqrt(_297);
            float _305 = _115 + _299;
            float _307 = _127 + _301;
            float _309 = _133 + _303;
            float _311 = inversesqrt(fma(_309, _309, fma(_307, _307, _305 * _305)));
            float _313 = _305 * _311;
            float _315 = _307 * _311;
            uint _317 = uint(int(uint(_283 + 6880) >> uint(2)));
            int _319 = int(_317) + 1;
            float _321 = _309 * _311;
            float _323 = fma(_139, _303, fma(_125, _301, _121 * _299));
            float _325 = max(_323, fp_c1_1._m0[0].y);
            float _327 = max(fma(_133, _321, fma(_127, _315, _115 * _313)), fp_c1_1._m0[0].y);
            float _329 = max(fma(_139, _321, fma(_125, _315, _121 * _313)), fp_c1_1._m0[0].y) * max(fma(_139, _321, fma(_125, _315, _121 * _313)), fp_c1_1._m0[0].y);
            uint _331 = uint(int(uint(_283 + 8320) >> uint(2)));
            uint _333 = uint(int(uint(_283 + 6408) >> uint(2)));
            uint _335 = uint(int(uint(_283 + 6400) >> uint(2)));
            int _337 = int(_335) + 1;
            float _339 = exp2(_327 * fma(_327, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _341 = (_218 * (1.0 / (_212 + fma(_212, -_325, _325)))) * ((_200 * (1.0 / max(fma(_200 * _200, _329, -_329) + 1.0, fp_c1_1._m0[0].y))) * (_200 * (1.0 / max(fma(_200 * _200, _329, -_329) + 1.0, fp_c1_1._m0[0].y))));
            bool _343 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_331)) >> uint(2))][int(_331) & 3]) != 0;
            float _345 = _341;
            if (!_343)
            {
                _345 = 1.0;
            }
            float _347 = _345;
            if (_343)
            {
                uint _349 = uint(int(uint(_283 + 7840) >> uint(2)));
                int _351 = int(_349) + 1;
                uint _353 = uint(int(uint(_283 + 7848) >> uint(2)));
                uint _355 = uint(int(uint(_283 + 6888) >> uint(2)));
                float _357 = fp_c10_1._m0[int(uint(int(_355)) >> uint(2))][int(_355) & 3];
                int _359 = int(_355) + 1;
                _347 = exp2(fp_c10_1._m0[int(uint(_359) >> uint(2))][_359 & 3] * log2(clamp(((-_357) + fma(_303, -fp_c10_1._m0[int(uint(int(_353)) >> uint(2))][int(_353) & 3], fma(_301, -fp_c10_1._m0[int(uint(_351) >> uint(2))][_351 & 3], _299 * (-fp_c10_1._m0[int(uint(int(_349)) >> uint(2))][int(_349) & 3])))) * (1.0 / ((-_357) + 1.0)), 0.0, 1.0)));
            }
            _361 = _271 + 1;
            float _363 = (exp2(fp_c10_1._m0[int(uint(_319) >> uint(2))][_319 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_317)) >> uint(2))][int(_317) & 3], -sqrt(_297), fp_c1_1._m0[1].x), 0.0, 1.0))) * _347) * clamp(_323 + (-0.0), 0.0, 1.0);
            float _365 = fma(fp_c10_1._m0[int(uint(_337) >> uint(2))][_337 & 3] * _363, fma(_245, fp_c1_1._m0[1].y, ((_226 + fma(_226, -_339, _339)) * _341) * 0.079577468335628509521484375), _259);
            float _367 = fma(fp_c10_1._m0[int(uint(int(_333)) >> uint(2))][int(_333) & 3] * _363, fma(_243, fp_c1_1._m0[1].y, ((_228 + fma(_228, -_339, _339)) * _341) * 0.079577468335628509521484375), _261);
            float _369 = fma(fp_c10_1._m0[int(uint(int(_335)) >> uint(2))][int(_335) & 3] * _363, fma(_239, fp_c1_1._m0[1].y, ((_224 + fma(_224, -_339, _339)) * _341) * 0.079577468335628509521484375), _263);
            _257 = int(uint(_257) >> uint(8));
            _271 = _361;
            _259 = _365;
            _261 = _367;
            _263 = _369;
            _275 = _369;
            _277 = _365;
            _279 = _367;
        } while (!(_361 >= 4));
        _281 = false;
        _265 = _277;
        _267 = _275;
        _269 = _279;
        if ((_257 & 255) == 30)
        {
            float _371 = _61.y;
            float _373 = 1.0 / (fma(_179, fp_c10_1._m0[565].z, fma(_371, fp_c10_1._m0[565].y, _177 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _375 = 1.0 / fp_c10_1._m0[561].y;
            float _377 = _177 + (-fp_c10_1._m0[557].x);
            float _379 = (-_177) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_375, fp_c10_1._m0[557].x);
            float _381 = (-_179) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_375, fp_c10_1._m0[557].z);
            float _383 = _179 + (-fp_c10_1._m0[557].z);
            float _385 = _377 * fp_c10_1._m0[558].z;
            float _387 = _379 * _379;
            float _389 = _383 * fp_c10_1._m0[558].x;
            float _391 = sqrt(fma(_381, _381, _387)) * (-fp_c10_1._m0[558].y);
            float _393 = ((-float(_389 < _385)) + float(_389 > _385)) * fp_c10_1._m0[561].y;
            float _395 = inversesqrt(fma(_381, _381, fma(_391, _391, _387)));
            float _397 = _379 * _395;
            float _399 = _391 * _395;
            float _401 = _381 * _395;
            float _403 = _115 + _397;
            float _405 = _127 + _399;
            float _407 = _133 + _401;
            float _409 = inversesqrt(fma(_407, _407, fma(_405, _405, _403 * _403)));
            float _411 = _403 * _409;
            float _413 = _405 * _409;
            float _415 = fma(_139, _401, fma(_125, _399, _121 * _397));
            float _417 = inversesqrt(fma(_401, _401, _397 * _397));
            float _419 = fma(_383, fp_c10_1._m0[558].z, _377 * fp_c10_1._m0[558].x);
            float _421 = fma(_383, _383, _377 * _377);
            bool _423 = _419 > 0.0;
            float _425 = _407 * _409;
            float _427 = inversesqrt(_421);
            if (_423)
            {
                _427 = sqrt(_421);
            }
            float _429 = _427;
            if (!_423)
            {
                _429 = 1.0;
            }
            float _431 = max(fma(_133, _425, fma(_127, _413, _115 * _411)), fp_c1_1._m0[0].y);
            float _433 = max(fma(_139, _425, fma(_125, _413, _121 * _411)), fp_c1_1._m0[0].y) * max(fma(_139, _425, fma(_125, _413, _121 * _411)), fp_c1_1._m0[0].y);
            float _435 = clamp(fma(_419 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_419 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _437 = max(_415, fp_c1_1._m0[0].y);
            float _439 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_377, fma(_393, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_383 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_393 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_377, fma(_393, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_383 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_393 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            bool _441 = fma(_383 * inversesqrt(_421), fp_c10_1._m0[558].z, (_377 * inversesqrt(_421)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _443 = fma(_439, -_439, fp_c1_1._m0[1].x);
            float _445 = exp2(_431 * fma(_431, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _447 = _443;
            if (_441)
            {
                _447 = _443 * _443;
            }
            float _449 = _447;
            if (!_441)
            {
                _449 = 1.0;
            }
            float _451 = (_218 * (1.0 / (_212 + fma(_212, -_437, _437)))) * ((_200 * (1.0 / max(fma(_200 * _200, _433, -_433) + 1.0, fp_c1_1._m0[0].y))) * (_200 * (1.0 / max(fma(_200 * _200, _433, -_433) + 1.0, fp_c1_1._m0[0].y))));
            float _453 = (min(fma(_435, -_435, fp_c1_1._m0[1].x) * fma(_435, -_435, fp_c1_1._m0[1].x), _449) * (exp2(log2(clamp(fma(_429, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_401 * _417, -fp_c10_1._m0[558].z, (_397 * _417) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_415 + (-0.0), 0.0, 1.0);
            float _455 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_179, fp_c10_1._m0[562].z, fma(_371, fp_c10_1._m0[562].y, _177 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _373, 0.5, 0.5), (-fma((fma(_179, fp_c10_1._m0[563].z, fma(_371, fp_c10_1._m0[563].y, _177 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _373, 0.5, 0.5)) + 1.0)).z > fma((fma(_179, fp_c10_1._m0[564].z, fma(_371, fp_c10_1._m0[564].y, _177 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _373, 0.5, 0.5)) || (_419 <= 0.0));
            _265 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _453) * fma(_245, fp_c1_1._m0[1].y, ((_226 + fma(_226, -_445, _445)) * _451) * 0.079577468335628509521484375), _455, _277);
            _267 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _453) * fma(_239, fp_c1_1._m0[1].y, ((_224 + fma(_224, -_445, _445)) * _451) * 0.079577468335628509521484375), _455, _275);
            _269 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _453) * fma(_243, fp_c1_1._m0[1].y, ((_228 + fma(_228, -_445, _445)) * _451) * 0.079577468335628509521484375), _455, _279);
        }
    }
    float _457 = _177 + (-fp_c3_1._m0[11].w);
    float _459 = _61.y;
    float _461 = _179 + (-fp_c3_1._m0[13].w);
    float _463 = fma(_255, fma(_232 * (_226 + fma(_226, -_222, _222)), fp_c1_1._m0[0].w, _245 * 0.3183098733425140380859375) * (_247 * fp_c5_1._m0[5].y), _265);
    float _465 = fma(_255, fma(_232 * (_224 + fma(_224, -_222, _222)), fp_c1_1._m0[0].w, _239 * 0.3183098733425140380859375) * (_247 * fp_c5_1._m0[5].x), _267);
    float _467 = _459 + (-fp_c3_1._m0[12].w);
    float _469 = fma(_461, _461, fma(_467, _467, _457 * _457));
    float _471 = clamp(fma(_255, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _473 = clamp(fma(fma(_179, fp_c5_1._m0[14].z, fma(_459, fp_c5_1._m0[14].y, _177 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _475 = fma(_255, fma(_232 * (_228 + fma(_228, -_222, _222)), fp_c1_1._m0[0].w, _243 * 0.3183098733425140380859375) * (_247 * fp_c5_1._m0[5].z), _269);
    float _477 = fma((-_465) + fp_c5_1._m0[13].x, _473, _465);
    float _479 = exp2(log2(clamp(sqrt(_469) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_461 * inversesqrt(_469), fp_c5_1._m0[23].z, fma(_467 * inversesqrt(_469), fp_c5_1._m0[23].y, (_457 * inversesqrt(_469)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _481 = fma((-_463) + fp_c5_1._m0[13].y, _473, _463);
    float _483 = fma((-_475) + fp_c5_1._m0[13].z, _473, _475);
    float _485 = clamp((-exp2((clamp(fma(sqrt(_469), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _76.x = fma((-_477) + fma(fma(_471 * (_479 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _485, _477);
    _76.y = fma((-_481) + fma(fma(_471 * (_479 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _485, _481);
    _76.z = fma((-_483) + fma(fma(_471 * (_479 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _485, _483);
    _76.w = clamp(_73.w, 0.0, 1.0);
}


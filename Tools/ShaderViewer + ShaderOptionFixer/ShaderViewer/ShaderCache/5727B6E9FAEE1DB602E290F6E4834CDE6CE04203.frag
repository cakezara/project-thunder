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

layout(location = 5) in vec4 _59;
layout(location = 4) in vec4 _61;
layout(location = 2) in vec4 _63;
layout(location = 0) in vec4 _65;
layout(location = 3) in vec4 _67;
layout(location = 6) in vec4 _69;
layout(location = 7) in vec4 _71;
layout(location = 1) in vec4 _73;
layout(location = 0) out vec4 _76;
uint _6[12];

void main()
{
    bool _295 = false;
    float _83 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _85 = 1.0 / (_59.w * gl_FragCoord.w);
    float _87 = 1.0 / (_61.z * gl_FragCoord.w);
    float _89 = _63.w;
    float _91 = _65.x;
    float _93 = _67.x;
    float _95 = _65.y;
    float _97 = _67.y;
    float _99 = _65.z;
    float _101 = _67.z;
    float _103 = float((abs(((-_89) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_89) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_89) > fp_c3_1._m0[58].y) ? (-1) : 0));
    float _105 = _93 * _93;
    float _107 = fma(_95, _95, _91 * _91);
    float _109 = inversesqrt(fma(_99, _99, _107));
    bool _113 = _103 == 0.0;
    float _115 = inversesqrt(fma(_101, _101, fma(_97, _97, _105)));
    float _117 = _91 * _109;
    float _119 = _105;
    float _121 = _107;
    if (_113)
    {
        _119 = _69.w;
    }
    float _123 = _95 * _109;
    float _125 = _119;
    if (!_113)
    {
        _125 = _71.w;
    }
    float _127 = _99 * _109;
    if (_113)
    {
        _121 = _69.z;
    }
    float _129 = 0.0;
    float _131 = _121;
    if (_113)
    {
        _129 = _69.x;
    }
    float _133 = _93 * (-_115);
    float _135 = 0.0;
    float _137 = _129;
    if (_113)
    {
        _135 = _69.y;
    }
    float _139 = _97 * (-_115);
    float _141 = _135;
    if (!_113)
    {
        _131 = _71.z;
    }
    float _143 = _101 * (-_115);
    if (!_113)
    {
        _137 = _71.x;
    }
    if (!_113)
    {
        _141 = _71.y;
    }
    float _145 = fma(_127, _143, fma(_123, _139, _117 * _133));
    float _147 = 1.0 / _125;
    float _149 = max(_145, fp_c1_1._m0[0].y);
    float _151 = fma(_123 * (-_145), -2.0, -_139);
    float _153 = fma(_117 * (-_145), -2.0, -_133);
    float _155 = fma(_127 * (-_145), -2.0, -_143);
    float _157 = _123 * _127;
    float _159 = 1.0 / max(abs(_155), max(abs(_153), abs(_151)));
    vec2 _163 = texture(fp_tex_tcb_2C, vec2((_59.x * gl_FragCoord.w) * _85, (_59.y * gl_FragCoord.w) * _85)).xy;
    float _165 = _163.x;
    vec2 _167 = texture(fp_tex_tcb_38, vec2(_149, (-_83) + (-0.0))).xy;
    float _169 = _167.x;
    float _171 = _167.y;
    vec3 _175 = texture(fp_tex_tcb_36, vec4(_153 * _159, _151 * _159, _155 * _159, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_83 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _177 = _63.z;
    float _179 = _63.x;
    float _181 = _127 * _127;
    float _183 = _127 * _117;
    float _185 = _139 * _133;
    float _187 = fma(fp_c6_1._m0[7].y + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _189 = fma(fp_c6_1._m0[7].x + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _191 = _139 * _143;
    int _194 = max(0, min(int(trunc((_177 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _196 = fma(fp_c6_1._m0[7].z + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _198 = _133 + (-fp_c5_1._m0[23].x);
    float _200 = _123 * _117;
    float _202 = _143 * _143;
    float _204 = _139 + (-fp_c5_1._m0[23].y);
    float _206 = _143 * _133;
    float _208 = _143 + (-fp_c5_1._m0[23].z);
    float _210 = inversesqrt(fma(_208, _208, fma(_204, _204, _198 * _198)));
    float _212 = _198 * _210;
    float _214 = _204 * _210;
    float _216 = _208 * _210;
    float _218 = _83 * _83;
    float _220 = fma(_123, -fp_c5_1._m0[23].y, _117 * (-fp_c5_1._m0[23].x));
    float _222 = max(fma(_127, _216, fma(_123, _214, _117 * _212)), fp_c1_1._m0[0].y) * max(fma(_127, _216, fma(_123, _214, _117 * _212)), fp_c1_1._m0[0].y);
    float _224 = _218 * _218;
    float _226 = fma(_83, 0.5, 0.5);
    float _228 = max(fma(_143, _216, fma(_139, _214, _133 * _212)), fp_c1_1._m0[0].y);
    float _230 = (_226 * 0.5) * _226;
    float _232 = max(fma(_127, -fp_c5_1._m0[23].z, _220), fp_c1_1._m0[0].y);
    float _234 = fma(_117, _117, -(_123 * _123));
    float _236 = fma(_133, _133, -(_139 * _139));
    float _238 = clamp(_59.z, 0.0, 1.0);
    float _240 = 1.0 / (_230 + fma(_149, -_230, _149));
    float _242 = exp2(_228 * fma(_228, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _244 = (_240 * (1.0 / (_230 + fma(_230, -_232, _232)))) * ((_218 * (1.0 / max(fma(_224, _222, -_222) + 1.0, fp_c1_1._m0[0].y))) * (_218 * (1.0 / max(fma(_224, _222, -_222) + 1.0, fp_c1_1._m0[0].y))));
    float _246 = exp2(log2(clamp((-_145) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
    float _248 = fma(max(0.0, fma(_236, fp_c5_1._m0[31].x, (fma(_143, -fp_c5_1._m0[25].z, fma(_139, -fp_c5_1._m0[25].y, _133 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_206, fp_c5_1._m0[28].w, fma(_202, fp_c5_1._m0[28].z, fma(_191, fp_c5_1._m0[28].y, _185 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[45].x, _246, fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x));
    float _250 = fma(max(0.0, fma(_236, fp_c5_1._m0[31].y, (fma(_143, -fp_c5_1._m0[26].z, fma(_139, -fp_c5_1._m0[26].y, _133 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_206, fp_c5_1._m0[29].w, fma(_202, fp_c5_1._m0[29].z, fma(_191, fp_c5_1._m0[29].y, _185 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[45].y, _246, fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y));
    float _252 = fma(max(0.0, fma(_236, fp_c5_1._m0[31].z, (fma(_143, -fp_c5_1._m0[27].z, fma(_139, -fp_c5_1._m0[27].y, _133 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_206, fp_c5_1._m0[30].w, fma(_202, fp_c5_1._m0[30].z, fma(_191, fp_c5_1._m0[30].y, _185 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[45].z, _246, fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z));
    float _254 = fma(_165, -_165, _163.y);
    uint _257 = uint(int(uint((((int(uint(_194) >> uint(16)) * 20) << 16) + (((_194 & 65535) * 20) + max(0, min(int(trunc((_179 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _259 = fp_c10_1._m0[int(uint(int(_257)) >> uint(2))][int(_257) & 3];
    float _261 = clamp(fma(_127, -fp_c5_1._m0[23].z, _220), 0.0, 1.0);
    float _263 = fma(_175.y, fma(_187, _169, _171), max(0.0, fma(_234, fp_c5_1._m0[31].y, (fma(_127, fp_c5_1._m0[26].z, fma(_123, fp_c5_1._m0[26].y, _117 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_183, fp_c5_1._m0[29].w, fma(_181, fp_c5_1._m0[29].z, fma(_157, fp_c5_1._m0[29].y, _200 * fp_c5_1._m0[29].x))))) * fma(_250, -_187, _250));
    float _265 = fma(_175.z, fma(_196, _169, _171), max(0.0, fma(_234, fp_c5_1._m0[31].z, (fma(_127, fp_c5_1._m0[27].z, fma(_123, fp_c5_1._m0[27].y, _117 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_183, fp_c5_1._m0[30].w, fma(_181, fp_c5_1._m0[30].z, fma(_157, fp_c5_1._m0[30].y, _200 * fp_c5_1._m0[30].x))))) * fma(_252, -_196, _252));
    float _267 = fma(_175.x, fma(_189, _169, _171), max(0.0, fma(_234, fp_c5_1._m0[31].x, (fma(_127, fp_c5_1._m0[25].z, fma(_123, fp_c5_1._m0[25].y, _117 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_183, fp_c5_1._m0[28].w, fma(_181, fp_c5_1._m0[28].z, fma(_157, fp_c5_1._m0[28].y, _200 * fp_c5_1._m0[28].x))))) * fma(_248, -_189, _248));
    float _269 = clamp((-(max((-max(min(_254 * (1.0 / fma((-_165) + _238, (-_165) + _238, _254)), 1.0), float(_238 <= _165))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_147 * _137, _147 * _141, float(int(clamp(uint(max(roundEven(_103), 0.0)), 0u, 65535u)))), _147 * _131))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_61.x * gl_FragCoord.w) * _87, (_61.y * gl_FragCoord.w) * _87)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _271 = _267;
    float _273 = _263;
    float _275 = _265;
    float _277 = _263;
    float _279 = _267;
    float _281 = _265;
    if (floatBitsToInt(_259) != (-1))
    {
        int _283 = floatBitsToInt(_259);
        int _285 = 0;
        float _289;
        float _291;
        float _293;
        int _377;
        do
        {
            int _287 = _283 & 255;
            _289 = _271;
            _291 = _273;
            _293 = _275;
            _295 = uint(_287) >= 30u;
            if (_295)
            {
                break;
            }
            int _297 = _287 << 4;
            uint _299 = uint(int(uint(_297 + 7360) >> uint(2)));
            int _301 = int(_299) + 1;
            uint _303 = uint(int(uint(_297 + 7368) >> uint(2)));
            float _305 = (-_179) + fp_c10_1._m0[int(uint(int(_299)) >> uint(2))][int(_299) & 3];
            float _307 = fp_c10_1._m0[int(uint(_301) >> uint(2))][_301 & 3] + (-_63.y);
            float _309 = (-_177) + fp_c10_1._m0[int(uint(int(_303)) >> uint(2))][int(_303) & 3];
            float _311 = fma(_309, _309, fma(_307, _307, _305 * _305));
            float _313 = _305 * inversesqrt(_311);
            float _315 = _307 * inversesqrt(_311);
            float _317 = _309 * inversesqrt(_311);
            float _319 = _133 + _313;
            float _321 = _139 + _315;
            float _323 = _143 + _317;
            uint _325 = uint(int(uint(_297 + 6880) >> uint(2)));
            int _327 = int(_325) + 1;
            float _329 = inversesqrt(fma(_323, _323, fma(_321, _321, _319 * _319)));
            float _331 = _319 * _329;
            float _333 = _321 * _329;
            float _335 = _323 * _329;
            uint _337 = uint(int(uint(_297 + 8320) >> uint(2)));
            float _339 = fma(_127, _317, fma(_123, _315, _117 * _313));
            float _341 = max(fma(_143, _335, fma(_139, _333, _133 * _331)), fp_c1_1._m0[0].y);
            float _343 = max(fma(_127, _335, fma(_123, _333, _117 * _331)), fp_c1_1._m0[0].y) * max(fma(_127, _335, fma(_123, _333, _117 * _331)), fp_c1_1._m0[0].y);
            float _345 = max(_339, fp_c1_1._m0[0].y);
            uint _347 = uint(int(uint(_297 + 6408) >> uint(2)));
            float _349 = exp2(_341 * fma(_341, fp_c1_1._m0[0].z, -6.9831600189208984375));
            uint _351 = uint(int(uint(_297 + 6400) >> uint(2)));
            int _353 = int(_351) + 1;
            bool _355 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_337)) >> uint(2))][int(_337) & 3]) != 0;
            float _357 = _187 + fma(_187, -_349, _349);
            float _359 = ((_218 * (1.0 / max(fma(_224, _343, -_343) + 1.0, fp_c1_1._m0[0].y))) * (_218 * (1.0 / max(fma(_224, _343, -_343) + 1.0, fp_c1_1._m0[0].y)))) * (_240 * (1.0 / (_230 + fma(_230, -_345, _345))));
            float _361 = _357;
            if (!_355)
            {
                _361 = 1.0;
            }
            float _363 = _361;
            if (_355)
            {
                uint _365 = uint(int(uint(_297 + 7840) >> uint(2)));
                int _367 = int(_365) + 1;
                uint _369 = uint(int(uint(_297 + 7848) >> uint(2)));
                uint _371 = uint(int(uint(_297 + 6888) >> uint(2)));
                float _373 = fp_c10_1._m0[int(uint(int(_371)) >> uint(2))][int(_371) & 3];
                int _375 = int(_371) + 1;
                _363 = exp2(fp_c10_1._m0[int(uint(_375) >> uint(2))][_375 & 3] * log2(clamp(((-_373) + fma(_317, -fp_c10_1._m0[int(uint(int(_369)) >> uint(2))][int(_369) & 3], fma(_315, -fp_c10_1._m0[int(uint(_367) >> uint(2))][_367 & 3], _313 * (-fp_c10_1._m0[int(uint(int(_365)) >> uint(2))][int(_365) & 3])))) * (1.0 / ((-_373) + 1.0)), 0.0, 1.0)));
            }
            _377 = _285 + 1;
            float _379 = clamp(_339 + (-0.0), 0.0, 1.0) * (exp2(fp_c10_1._m0[int(uint(_327) >> uint(2))][_327 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_325)) >> uint(2))][int(_325) & 3], -sqrt(_311), fp_c1_1._m0[1].x), 0.0, 1.0))) * _363);
            float _381 = fma(fp_c10_1._m0[int(uint(int(_351)) >> uint(2))][int(_351) & 3] * _379, fma(_248, fp_c1_1._m0[1].y, ((_189 + fma(_189, -_349, _349)) * _359) * 0.079577468335628509521484375), _271);
            float _383 = fma(fp_c10_1._m0[int(uint(_353) >> uint(2))][_353 & 3] * _379, fma(_250, fp_c1_1._m0[1].y, (_357 * _359) * 0.079577468335628509521484375), _273);
            float _385 = fma(fp_c10_1._m0[int(uint(int(_347)) >> uint(2))][int(_347) & 3] * _379, fma(_252, fp_c1_1._m0[1].y, ((_196 + fma(_196, -_349, _349)) * _359) * 0.079577468335628509521484375), _275);
            _283 = int(uint(_283) >> uint(8));
            _285 = _377;
            _271 = _381;
            _273 = _383;
            _275 = _385;
            _289 = _381;
            _291 = _383;
            _293 = _385;
        } while (!(_377 >= 4));
        _295 = false;
        _277 = _291;
        _279 = _289;
        _281 = _293;
        if ((_283 & 255) == 30)
        {
            float _387 = _63.y;
            float _389 = 1.0 / (fma(_177, fp_c10_1._m0[565].z, fma(_387, fp_c10_1._m0[565].y, _179 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _391 = 1.0 / fp_c10_1._m0[561].y;
            float _393 = (-_179) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_391, fp_c10_1._m0[557].x);
            float _395 = (-_177) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_391, fp_c10_1._m0[557].z);
            float _397 = _177 + (-fp_c10_1._m0[557].z);
            float _399 = _393 * _393;
            float _401 = _179 + (-fp_c10_1._m0[557].x);
            float _403 = _397 * fp_c10_1._m0[558].x;
            float _405 = _401 * fp_c10_1._m0[558].z;
            float _407 = sqrt(fma(_395, _395, _399)) * (-fp_c10_1._m0[558].y);
            float _409 = ((-float(_403 < _405)) + float(_403 > _405)) * fp_c10_1._m0[561].y;
            float _411 = inversesqrt(fma(_395, _395, fma(_407, _407, _399)));
            float _413 = _393 * _411;
            float _415 = _407 * _411;
            float _417 = _395 * _411;
            float _419 = _133 + _413;
            float _421 = _139 + _415;
            float _423 = _143 + _417;
            float _425 = fma(_127, _417, fma(_123, _415, _117 * _413));
            float _427 = inversesqrt(fma(_423, _423, fma(_421, _421, _419 * _419)));
            float _429 = _419 * _427;
            float _431 = _421 * _427;
            float _433 = _423 * _427;
            float _435 = fma(_397, _397, _401 * _401);
            float _437 = max(fma(_127, _433, fma(_123, _431, _117 * _429)), fp_c1_1._m0[0].y) * max(fma(_127, _433, fma(_123, _431, _117 * _429)), fp_c1_1._m0[0].y);
            float _439 = fma(_397, fp_c10_1._m0[558].z, _401 * fp_c10_1._m0[558].x);
            float _441 = max(fma(_143, _433, fma(_139, _431, _133 * _429)), fp_c1_1._m0[0].y);
            bool _443 = _439 > 0.0;
            float _445 = inversesqrt(fma(_417, _417, _413 * _413));
            float _447 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_401, fma(_409, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_397 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_409 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_401, fma(_409, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_397 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_409 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _449 = _417;
            if (_443)
            {
                _449 = sqrt(_435);
            }
            float _451 = _449;
            if (!_443)
            {
                _451 = 1.0;
            }
            bool _453 = fma(_397 * inversesqrt(_435), fp_c10_1._m0[558].z, (_401 * inversesqrt(_435)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _455 = max(_425, fp_c1_1._m0[0].y);
            float _457 = log2(clamp(fma(_451, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _459 = clamp(fma(_439 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_439 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _461 = _457;
            if (_453)
            {
                _461 = fma(_447, -_447, fp_c1_1._m0[1].x) * fma(_447, -_447, fp_c1_1._m0[1].x);
            }
            float _463 = _461;
            if (!_453)
            {
                _463 = 1.0;
            }
            float _465 = exp2(_441 * fma(_441, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _467 = (_240 * (1.0 / (_230 + fma(_230, -_455, _455)))) * ((_218 * (1.0 / max(fma(_224, _437, -_437) + 1.0, fp_c1_1._m0[0].y))) * (_218 * (1.0 / max(fma(_224, _437, -_437) + 1.0, fp_c1_1._m0[0].y))));
            float _469 = clamp(_425 + (-0.0), 0.0, 1.0) * ((exp2(_457) * exp2(log2(clamp((fma(_417 * _445, -fp_c10_1._m0[558].z, (_413 * _445) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_459, -_459, fp_c1_1._m0[1].x) * fma(_459, -_459, fp_c1_1._m0[1].x), _463));
            float _471 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_177, fp_c10_1._m0[562].z, fma(_387, fp_c10_1._m0[562].y, _179 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _389, 0.5, 0.5), (-fma((fma(_177, fp_c10_1._m0[563].z, fma(_387, fp_c10_1._m0[563].y, _179 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _389, 0.5, 0.5)) + 1.0)).z > fma((fma(_177, fp_c10_1._m0[564].z, fma(_387, fp_c10_1._m0[564].y, _179 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _389, 0.5, 0.5)) || (_439 <= 0.0));
            _277 = fma(fma(_250, fp_c1_1._m0[1].y, ((_187 + fma(_187, -_465, _465)) * _467) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _469), _471, _291);
            _279 = fma(fma(_248, fp_c1_1._m0[1].y, ((_189 + fma(_189, -_465, _465)) * _467) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _469), _471, _289);
            _281 = fma(fma(_252, fp_c1_1._m0[1].y, ((_196 + fma(_196, -_465, _465)) * _467) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _469), _471, _293);
        }
    }
    float _473 = _179 + (-fp_c3_1._m0[11].w);
    float _475 = _63.y;
    float _477 = _177 + (-fp_c3_1._m0[13].w);
    float _479 = fma(_269, fma(_244 * (_187 + fma(_187, -_242, _242)), fp_c1_1._m0[0].w, _250 * 0.3183098733425140380859375) * (_261 * fp_c5_1._m0[5].y), _277);
    float _481 = fma(_269, fma(_244 * (_189 + fma(_189, -_242, _242)), fp_c1_1._m0[0].w, _248 * 0.3183098733425140380859375) * (_261 * fp_c5_1._m0[5].x), _279);
    float _483 = fma(_269, fma(_244 * (_196 + fma(_196, -_242, _242)), fp_c1_1._m0[0].w, _252 * 0.3183098733425140380859375) * (_261 * fp_c5_1._m0[5].z), _281);
    float _485 = _475 + (-fp_c3_1._m0[12].w);
    float _487 = fma(_477, _477, fma(_485, _485, _473 * _473));
    float _489 = clamp(fma(fma(_177, fp_c5_1._m0[14].z, fma(_475, fp_c5_1._m0[14].y, _179 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _491 = clamp(fma(_269, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _493 = fma((-_481) + fp_c5_1._m0[13].x, _489, _481);
    float _495 = exp2(fma(fma(_477 * inversesqrt(_487), fp_c5_1._m0[23].z, fma(_485 * inversesqrt(_487), fp_c5_1._m0[23].y, (_473 * inversesqrt(_487)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_487) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _497 = fma((-_479) + fp_c5_1._m0[13].y, _489, _479);
    float _499 = fma((-_483) + fp_c5_1._m0[13].z, _489, _483);
    float _501 = clamp((-exp2((clamp(fma(sqrt(_487), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _76.x = fma((-_493) + fma(fma((_495 * fp_c7_1._m0[55].x) * _491, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _501, _493);
    _76.y = fma((-_497) + fma(fma((_495 * fp_c7_1._m0[55].y) * _491, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _501, _497);
    _76.z = fma((-_499) + fma(fma((_495 * fp_c7_1._m0[55].z) * _491, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _501, _499);
    _76.w = clamp(_73.w, 0.0, 1.0);
}


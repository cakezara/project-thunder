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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

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

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
layout(binding = 6) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 7) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 8) uniform sampler2D fp_tex_tcb_28;
layout(binding = 9) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 10) uniform sampler2DArrayShadow fp_tex_tcb_2E;
layout(binding = 11) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 12) uniform sampler2D fp_tex_tcb_38;
layout(binding = 13) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _75;
layout(location = 4) in vec4 _77;
layout(location = 7) in vec4 _79;
layout(location = 6) in vec4 _81;
layout(location = 8) in vec4 _83;
layout(location = 9) in vec4 _85;
layout(location = 1) in vec4 _87;
layout(location = 3) in vec4 _89;
layout(location = 5) in vec4 _91;
layout(location = 2) in vec4 _93;
layout(location = 0) out vec4 _96;
uint _6[12];

void main()
{
    bool _379 = false;
    float _103 = _75.x;
    float _105 = _75.y;
    vec2 _109 = texture(fp_tex_tcb_E, vec2(_103, _105)).xy;
    float _111 = _109.x;
    float _113 = _109.y;
    float _115 = _77.w;
    bool _119 = (-_115) > fp_c3_1._m0[58].z;
    float _121 = 1.0 / (_79.w * gl_FragCoord.w);
    float _123 = 1.0 / (_81.z * gl_FragCoord.w);
    float _125 = float((abs(_119 ? (-1) : 0) + abs(((-_115) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_115) > fp_c3_1._m0[58].y) ? (-1) : 0));
    bool _127 = _125 == 0.0;
    float _129 = 0.0;
    float _131 = _115;
    float _133 = intBitsToFloat(_119 ? (-1) : 0);
    if (_127)
    {
        _129 = _83.w;
    }
    float _135 = _129;
    if (!_127)
    {
        _135 = _85.w;
    }
    float _137 = 0.0;
    if (_127)
    {
        _137 = _83.z;
    }
    float _139 = _137;
    if (_127)
    {
        _131 = _83.x;
    }
    float _141 = _131;
    if (_127)
    {
        _133 = _83.y;
    }
    float _143 = _133;
    if (!_127)
    {
        _139 = _85.z;
    }
    if (!_127)
    {
        _141 = _85.x;
    }
    if (!_127)
    {
        _143 = _85.y;
    }
    vec2 _145 = texture(fp_tex_tcb_2C, vec2((_79.x * gl_FragCoord.w) * _121, (_79.y * gl_FragCoord.w) * _121)).xy;
    float _147 = _145.x;
    float _149 = 1.0 / _135;
    vec2 _151 = texture(fp_tex_tcb_1E, vec2(_103, _105)).xy;
    float _153 = _151.x;
    float _155 = _151.y;
    vec3 _159 = texture(fp_tex_tcb_A, vec2(_103, _105)).xyz;
    float _161 = _159.x;
    float _163 = _159.y;
    float _165 = _159.z;
    float _167 = texture(fp_tex_tcb_12, vec2(_103, _105)).x;
    float _169 = _87.x;
    float _171 = _87.y;
    float _173 = _87.z;
    float _175 = _89.y;
    float _177 = _89.z;
    float _179 = _89.x;
    float _181 = _89.w;
    float _183 = _91.y;
    float _185 = _91.z;
    float _187 = _91.x;
    float _189 = inversesqrt(fma(_173, _173, fma(_171, _171, _169 * _169)));
    float _191 = _173 * _189;
    float _193 = _169 * _189;
    float _195 = _171 * _189;
    float _197 = max(texture(fp_tex_tcb_10, vec2(_103, _105)).x, fp_c1_1._m0[0].x);
    float _199 = sqrt(clamp((-fma(_111, _111, _113 * _113)) + 1.0, 0.0, 1.0));
    float _201 = fma(_193, _199, fma(_111, _179, _113 * (fma(_195, _177, -(_191 * _175)) * _181)));
    float _203 = fma(_195, _199, fma(_111, _175, _113 * (fma(_191, _179, -(_193 * _177)) * _181)));
    float _205 = fma(_191, _199, fma(_111, _177, _113 * (fma(_193, _175, -(_195 * _179)) * _181)));
    float _207 = inversesqrt(fma(_185, _185, fma(_183, _183, _187 * _187)));
    float _209 = inversesqrt(fma(_205, _205, fma(_203, _203, _201 * _201)));
    float _211 = _187 * (-_207);
    float _213 = _183 * (-_207);
    float _215 = _185 * (-_207);
    float _217 = _201 * _209;
    float _219 = _203 * _209;
    float _221 = _205 * _209;
    float _223 = fma(_221, _215, fma(_219, _213, _217 * _211));
    float _225 = fma(_217 * (-_223), -2.0, -_211);
    float _227 = fma(_219 * (-_223), -2.0, -_213);
    float _229 = fma(_221 * (-_223), -2.0, -_215);
    float _231 = 1.0 / max(abs(_229), max(abs(_225), abs(_227)));
    float _233 = fma(_147, -_147, _145.y);
    float _235 = max(_223, fp_c1_1._m0[0].z);
    vec2 _237 = texture(fp_tex_tcb_38, vec2(_235, (-_197) + (-0.0))).xy;
    float _239 = _237.x;
    float _241 = _237.y;
    vec3 _243 = texture(fp_tex_tcb_36, vec4(_225 * _231, _227 * _231, _229 * _231, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_197 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _245 = texture(fp_tex_tcb_1A, vec2(_103, _105)).x;
    float _247 = clamp(_79.z, 0.0, 1.0);
    float _249 = _211 + (-fp_c5_1._m0[23].x);
    float _251 = _213 + (-fp_c5_1._m0[23].y);
    float _253 = _215 + (-fp_c5_1._m0[23].z);
    float _255 = _217 * _219;
    float _257 = inversesqrt(fma(_253, _253, fma(_251, _251, _249 * _249)));
    float _259 = _253 * _257;
    float _261 = _251 * _257;
    float _263 = _249 * _257;
    float _265 = _219 * _221;
    float _267 = _217 * _221;
    float _269 = _77.x;
    float _271 = _77.z;
    float _273 = _221 * _221;
    float _275 = sqrt(clamp((-fma(_153, _153, _155 * _155)) + 1.0, 0.0, 1.0));
    float _277 = fma(_217, _275, fma(_179, _153, _155 * (_181 * fma(_177, _219, -(_175 * _221)))));
    float _279 = fma(_219, _275, fma(_175, _153, _155 * (_181 * fma(_179, _221, -(_177 * _217)))));
    float _281 = fma(_221, _275, fma(_177, _153, _155 * (_181 * fma(_175, _217, -(_179 * _219)))));
    float _283 = inversesqrt(fma(_281, _281, fma(_279, _279, _277 * _277)));
    float _285 = fma(_217, _217, -(_219 * _219));
    float _287 = _197 * _197;
    float _289 = fma(_197, 0.5, 0.5);
    int _292 = max(0, min(int(trunc((_271 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _294 = _287 * _287;
    float _296 = fma(fma(_277, _283, -_217), fp_c6_1._m0[53].x, _217);
    float _298 = max(fma(_221, _259, fma(_219, _261, _217 * _263)), fp_c1_1._m0[0].z) * max(fma(_221, _259, fma(_219, _261, _217 * _263)), fp_c1_1._m0[0].z);
    float _300 = fma(_219, -fp_c5_1._m0[23].y, _217 * (-fp_c5_1._m0[23].x));
    float _302 = fma(fma(_279, _283, -_219), fp_c6_1._m0[53].x, _219);
    float _304 = max(fma(_215, _259, fma(_213, _261, _211 * _263)), fp_c1_1._m0[0].z);
    float _306 = (_289 * 0.5) * _289;
    float _308 = fma(fma(_281, _283, -_221), fp_c6_1._m0[53].x, _221);
    float _310 = max(fma(_221, -fp_c5_1._m0[23].z, _300), fp_c1_1._m0[0].z);
    uint _313 = uint(int(uint((((int(uint(_292) >> uint(16)) * 20) << 16) + (((_292 & 65535) * 20) + max(0, min(int(trunc((_269 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _315 = fp_c10_1._m0[int(uint(int(_313)) >> uint(2))][int(_313) & 3];
    float _317 = inversesqrt(fma(_308, _308, fma(_302, _302, _296 * _296)));
    float _319 = 1.0 / (_306 + fma(_235, -_306, _235));
    float _321 = _296 * _317;
    float _323 = exp2(_304 * fma(_304, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _325 = _302 * _317;
    float _327 = _308 * _317;
    float _329 = fma(_161, -_167, _161);
    float _331 = fma(_163, -_167, _163);
    float _333 = fma(_165, -_167, _165);
    float _335 = fma(_167, _161 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _337 = fma(_167, _163 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _339 = fma(_167, _165 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _341 = (_319 * (1.0 / (_306 + fma(_306, -_310, _310)))) * ((_287 * (1.0 / max(fma(_298, _294, -_298) + 1.0, fp_c1_1._m0[0].z))) * (_287 * (1.0 / max(fma(_298, _294, -_298) + 1.0, fp_c1_1._m0[0].z))));
    float _343 = fma(fma(_335, _239, _241), _243.x, max(0.0, fma(_285, fp_c5_1._m0[31].x, (fma(_221, fp_c5_1._m0[25].z, fma(_219, fp_c5_1._m0[25].y, _217 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_267, fp_c5_1._m0[28].w, fma(_273, fp_c5_1._m0[28].z, fma(_265, fp_c5_1._m0[28].y, _255 * fp_c5_1._m0[28].x))))) * fma(_335, -_329, _329));
    float _345 = clamp(fma(_221, -fp_c5_1._m0[23].z, _300), 0.0, 1.0);
    float _347 = fma(fma(_337, _239, _241), _243.y, max(0.0, fma(_285, fp_c5_1._m0[31].y, (fma(_221, fp_c5_1._m0[26].z, fma(_219, fp_c5_1._m0[26].y, _217 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_267, fp_c5_1._m0[29].w, fma(_273, fp_c5_1._m0[29].z, fma(_265, fp_c5_1._m0[29].y, _255 * fp_c5_1._m0[29].x))))) * fma(_337, -_331, _331));
    float _349 = clamp((-(max((-max(min(_233 * (1.0 / fma((-_147) + _247, (-_147) + _247, _233)), 1.0), float(_247 <= _147))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_149 * _141, _149 * _143, float(int(clamp(uint(max(roundEven(_125), 0.0)), 0u, 65535u)))), _149 * _139))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_81.x * gl_FragCoord.w) * _123, (_81.y * gl_FragCoord.w) * _123)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _351 = fma(fma(_339, _239, _241), _243.z, max(0.0, fma(_285, fp_c5_1._m0[31].z, (fma(_221, fp_c5_1._m0[27].z, fma(_219, fp_c5_1._m0[27].y, _217 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_267, fp_c5_1._m0[30].w, fma(_273, fp_c5_1._m0[30].z, fma(_265, fp_c5_1._m0[30].y, _255 * fp_c5_1._m0[30].x))))) * fma(_339, -_333, _333));
    float _353 = clamp(texture(fp_tex_tcb_18, vec2(_103, _105)).x + (-0.0), 0.0, 1.0);
    int _355 = floatBitsToInt(_315);
    float _357 = _351;
    float _359 = _343;
    float _361 = _347;
    float _363 = _343;
    float _365 = _347;
    float _367 = _351;
    if (floatBitsToInt(_315) != (-1))
    {
        int _369 = 0;
        float _373;
        float _375;
        float _377;
        int _459;
        do
        {
            int _371 = _355 & 255;
            _373 = _359;
            _375 = _361;
            _377 = _357;
            _379 = uint(_371) >= 30u;
            if (_379)
            {
                break;
            }
            int _381 = _371 << 4;
            uint _383 = uint(int(uint(_381 + 7360) >> uint(2)));
            int _385 = int(_383) + 1;
            uint _387 = uint(int(uint(_381 + 7368) >> uint(2)));
            float _389 = (-_269) + fp_c10_1._m0[int(uint(int(_383)) >> uint(2))][int(_383) & 3];
            float _391 = fp_c10_1._m0[int(uint(_385) >> uint(2))][_385 & 3] + (-_77.y);
            float _393 = (-_271) + fp_c10_1._m0[int(uint(int(_387)) >> uint(2))][int(_387) & 3];
            float _395 = fma(_393, _393, fma(_391, _391, _389 * _389));
            float _397 = _389 * inversesqrt(_395);
            float _399 = _391 * inversesqrt(_395);
            float _401 = _393 * inversesqrt(_395);
            float _403 = _211 + _397;
            float _405 = _213 + _399;
            float _407 = _215 + _401;
            float _409 = inversesqrt(fma(_407, _407, fma(_405, _405, _403 * _403)));
            float _411 = _403 * _409;
            float _413 = _405 * _409;
            float _415 = _407 * _409;
            uint _417 = uint(int(uint(_381 + 6880) >> uint(2)));
            int _419 = int(_417) + 1;
            float _421 = max(fma(_215, _415, fma(_213, _413, _211 * _411)), fp_c1_1._m0[0].z);
            float _423 = max(fma(_221, _415, fma(_219, _413, _217 * _411)), fp_c1_1._m0[0].z) * max(fma(_221, _415, fma(_219, _413, _217 * _411)), fp_c1_1._m0[0].z);
            uint _425 = uint(int(uint(_381 + 8320) >> uint(2)));
            float _427 = fma(_221, _401, fma(_219, _399, _217 * _397));
            float _429 = max(_427, fp_c1_1._m0[0].z);
            float _431 = exp2(_421 * fma(_421, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _433 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_425)) >> uint(2))][int(_425) & 3]) != 0;
            float _435 = (_319 * (1.0 / (_306 + fma(_306, -_429, _429)))) * ((_287 * (1.0 / max(fma(_294, _423, -_423) + 1.0, fp_c1_1._m0[0].z))) * (_287 * (1.0 / max(fma(_294, _423, -_423) + 1.0, fp_c1_1._m0[0].z))));
            float _437 = _435;
            if (!_433)
            {
                _437 = 1.0;
            }
            float _439 = _437;
            if (_433)
            {
                uint _441 = uint(int(uint(_381 + 7840) >> uint(2)));
                int _443 = int(_441) + 1;
                uint _445 = uint(int(uint(_381 + 7848) >> uint(2)));
                uint _447 = uint(int(uint(_381 + 6888) >> uint(2)));
                float _449 = fp_c10_1._m0[int(uint(int(_447)) >> uint(2))][int(_447) & 3];
                int _451 = int(_447) + 1;
                _439 = exp2(log2(clamp((fma(_401, -fp_c10_1._m0[int(uint(int(_445)) >> uint(2))][int(_445) & 3], fma(_399, -fp_c10_1._m0[int(uint(_443) >> uint(2))][_443 & 3], _397 * (-fp_c10_1._m0[int(uint(int(_441)) >> uint(2))][int(_441) & 3]))) + (-_449)) * (1.0 / ((-_449) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[int(uint(_451) >> uint(2))][_451 & 3]);
            }
            uint _453 = uint(int(uint(_381 + 6408) >> uint(2)));
            uint _455 = uint(int(uint(_381 + 6400) >> uint(2)));
            int _457 = int(_455) + 1;
            _459 = _369 + 1;
            float _461 = (exp2(fp_c10_1._m0[int(uint(_419) >> uint(2))][_419 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_417)) >> uint(2))][int(_417) & 3], -sqrt(_395), fp_c1_1._m0[1].y), 0.0, 1.0))) * _439) * clamp(_427 + (-0.0), 0.0, 1.0);
            float _463 = fma(_461 * fp_c10_1._m0[int(uint(int(_453)) >> uint(2))][int(_453) & 3], fma(_333, fp_c1_1._m0[1].z, ((_339 + fma(_339, -_431, _431)) * _435) * 0.079577468335628509521484375), _357);
            float _465 = fma(_461 * fp_c10_1._m0[int(uint(int(_455)) >> uint(2))][int(_455) & 3], fma(_329, fp_c1_1._m0[1].z, ((_335 + fma(_335, -_431, _431)) * _435) * 0.079577468335628509521484375), _359);
            float _467 = fma(_461 * fp_c10_1._m0[int(uint(_457) >> uint(2))][_457 & 3], fma(_331, fp_c1_1._m0[1].z, ((_337 + fma(_337, -_431, _431)) * _435) * 0.079577468335628509521484375), _361);
            _355 = int(uint(_355) >> uint(8));
            _369 = _459;
            _357 = _463;
            _359 = _465;
            _361 = _467;
            _373 = _465;
            _375 = _467;
            _377 = _463;
        } while (!(_459 >= 4));
        _379 = false;
        _363 = _373;
        _365 = _375;
        _367 = _377;
        if ((_355 & 255) == 30)
        {
            float _469 = 1.0 / fp_c10_1._m0[561].y;
            float _471 = _269 + (-fp_c10_1._m0[557].x);
            float _473 = _271 + (-fp_c10_1._m0[557].z);
            float _475 = _473 * fp_c10_1._m0[558].x;
            float _477 = (-_269) + fma(_469, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _479 = _471 * fp_c10_1._m0[558].z;
            float _481 = (-_271) + fma(_469, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _483 = _477 * _477;
            float _485 = ((-float(_475 < _479)) + float(_475 > _479)) * fp_c10_1._m0[561].y;
            float _487 = sqrt(fma(_481, _481, _483)) * (-fp_c10_1._m0[558].y);
            float _489 = fma(_473, _473, _471 * _471);
            float _491 = fma(_473, fp_c10_1._m0[558].z, _471 * fp_c10_1._m0[558].x);
            float _493 = inversesqrt(fma(_481, _481, fma(_487, _487, _483)));
            float _495 = _477 * _493;
            float _497 = _487 * _493;
            float _499 = _481 * _493;
            float _501 = _77.y;
            float _503 = _211 + _495;
            float _505 = _213 + _497;
            float _507 = fma(_221, _499, fma(_219, _497, _217 * _495));
            float _509 = inversesqrt(fma(_499, _499, _495 * _495));
            float _511 = _215 + _499;
            float _513 = inversesqrt(fma(_511, _511, fma(_505, _505, _503 * _503)));
            float _515 = _503 * _513;
            float _517 = _505 * _513;
            float _519 = _511 * _513;
            float _521 = 1.0 / (fma(_271, fp_c10_1._m0[565].z, fma(_501, fp_c10_1._m0[565].y, _269 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _523 = _211 * _515;
            bool _525 = _491 > 0.0;
            float _527 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_471, fma(_485, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_473 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_485 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_471, fma(_485, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_473 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_485 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _529 = _523;
            if (_525)
            {
                _529 = sqrt(_489);
            }
            float _531 = _529;
            if (!_525)
            {
                _531 = 1.0;
            }
            float _533 = max(fma(_215, _519, fma(_213, _517, _523)), fp_c1_1._m0[0].z);
            float _535 = max(fma(_221, _519, fma(_219, _517, _217 * _515)), fp_c1_1._m0[0].z) * max(fma(_221, _519, fma(_219, _517, _217 * _515)), fp_c1_1._m0[0].z);
            float _537 = max(_507, fp_c1_1._m0[0].z);
            bool _539 = fma(_473 * inversesqrt(_489), fp_c10_1._m0[558].z, (_471 * inversesqrt(_489)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _541 = clamp(fma(_491 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_491 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _543 = exp2(_533 * fma(_533, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _545 = _541;
            if (_539)
            {
                _545 = fma(_527, -_527, fp_c1_1._m0[1].y) * fma(_527, -_527, fp_c1_1._m0[1].y);
            }
            float _547 = _545;
            if (!_539)
            {
                _547 = 1.0;
            }
            float _549 = (_319 * (1.0 / (_306 + fma(_306, -_537, _537)))) * ((_287 * (1.0 / max(fma(_294, _535, -_535) + 1.0, fp_c1_1._m0[0].z))) * (_287 * (1.0 / max(fma(_294, _535, -_535) + 1.0, fp_c1_1._m0[0].z))));
            float _551 = clamp(_507 + (-0.0), 0.0, 1.0) * (min(fma(_541, -_541, fp_c1_1._m0[1].y) * fma(_541, -_541, fp_c1_1._m0[1].y), _547) * (exp2(log2(clamp(fma(_531, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_499 * _509, -fp_c10_1._m0[558].z, (_495 * _509) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _553 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_271, fp_c10_1._m0[562].z, fma(_501, fp_c10_1._m0[562].y, _269 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _521, 0.5, 0.5), (-fma((fma(_271, fp_c10_1._m0[563].z, fma(_501, fp_c10_1._m0[563].y, _269 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _521, 0.5, 0.5)) + 1.0)).z > fma((fma(_271, fp_c10_1._m0[564].z, fma(_501, fp_c10_1._m0[564].y, _269 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _521, 0.5, 0.5)) || (_491 <= 0.0));
            _363 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _551) * fma(_329, fp_c1_1._m0[1].z, ((_335 + fma(_335, -_543, _543)) * _549) * 0.079577468335628509521484375), _553, _373);
            _365 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _551) * fma(_331, fp_c1_1._m0[1].z, ((_337 + fma(_337, -_543, _543)) * _549) * 0.079577468335628509521484375), _553, _375);
            _367 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _551) * fma(_333, fp_c1_1._m0[1].z, ((_339 + fma(_339, -_543, _543)) * _549) * 0.079577468335628509521484375), _553, _377);
        }
    }
    float _555 = _269 + (-fp_c3_1._m0[11].w);
    float _557 = _77.y;
    float _559 = _271 + (-fp_c3_1._m0[13].w);
    float _561 = _557 + (-fp_c3_1._m0[12].w);
    float _563 = fma(_559, _559, fma(_561, _561, _555 * _555));
    float _565 = clamp(fma(_349 * _353, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    bool _567 = true;
    if ((_155 < fp_c6_1._m0[52].z) && ((_155 > (-fp_c6_1._m0[52].z)) && ((_153 > (-fp_c6_1._m0[52].z)) && (_153 < fp_c6_1._m0[52].z))))
    {
        _567 = false;
    }
    float _569 = 0.0;
    float _571 = 0.0;
    float _573 = 0.0;
    float _575 = 0.0;
    float _577 = 0.0;
    float _579 = 0.0;
    if (_567)
    {
        float _581 = max(fp_c6_1._m0[52].x, fp_c1_1._m0[0].x);
        float _583 = fma(_215, _327, fma(_213, _325, _211 * _321));
        float _585 = fma(_321 * (-_583), -2.0, -_211);
        float _587 = fma(_325 * (-_583), -2.0, -_213);
        float _589 = fma(_327 * (-_583), -2.0, -_215);
        float _591 = max(_583, fp_c1_1._m0[0].z);
        float _593 = 1.0 / max(abs(_589), max(abs(_585), abs(_587)));
        vec2 _595 = texture(fp_tex_tcb_38, vec2(_591, (-_581) + (-0.0))).xy;
        float _597 = _595.x;
        float _599 = _595.y;
        vec3 _601 = texture(fp_tex_tcb_36, vec4(_585 * _593, _587 * _593, _589 * _593, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_581 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _603 = _213 + (-fp_c5_1._m0[23].y);
        float _605 = _215 + (-fp_c5_1._m0[23].z);
        float _607 = inversesqrt(fma(_605, _605, fma(_603, _603, _249 * _249)));
        float _609 = (_211 + (-fp_c5_1._m0[23].x)) * _607;
        float _611 = _603 * _607;
        float _613 = _605 * _607;
        float _615 = _581 * _581;
        float _617 = fma(_581, 0.5, 0.5);
        float _619 = max(fma(_215, _613, fma(_213, _611, _211 * _609)), fp_c1_1._m0[0].z);
        float _621 = (_617 * 0.5) * _617;
        float _623 = max(fma(_327, -fp_c5_1._m0[23].z, fma(_325, -fp_c5_1._m0[23].y, _321 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].z);
        float _625 = max(fma(_613, _327, fma(_611, _325, _609 * _321)), fp_c1_1._m0[0].z) * max(fma(_613, _327, fma(_611, _325, _609 * _321)), fp_c1_1._m0[0].z);
        float _627 = exp2(_619 * fma(_619, fp_c1_1._m0[0].w, -6.9831600189208984375));
        float _629 = ((1.0 / (_621 + fma(_621, -_591, _591))) * (1.0 / (_621 + fma(_623, -_621, _623)))) * ((_615 * (1.0 / max(fma(_625, _615 * _615, -_625) + 1.0, fp_c1_1._m0[0].z))) * (_615 * (1.0 / max(fma(_625, _615 * _615, -_625) + 1.0, fp_c1_1._m0[0].z))));
        float _631 = exp2(log2(clamp(max(_591, fp_c1_1._m0[0].x) + (-0.0), 0.0, 1.0)) * fp_c6_1._m0[52].y) * (_235 * (_235 * _235));
        _569 = _631 * ((((fma(_627, -fp_c6_1._m0[51].x, _627) + fp_c6_1._m0[51].x) * _629) * 0.079577468335628509521484375) * (_623 * fp_c5_1._m0[5].x));
        _571 = _631 * ((((fma(_627, -fp_c6_1._m0[51].y, _627) + fp_c6_1._m0[51].y) * _629) * 0.079577468335628509521484375) * (_623 * fp_c5_1._m0[5].y));
        _573 = (fma(_597, fp_c6_1._m0[51].x, _599) * _601.x) * _631;
        _575 = _631 * ((((fma(_627, -fp_c6_1._m0[51].z, _627) + fp_c6_1._m0[51].z) * _629) * 0.079577468335628509521484375) * (_623 * fp_c5_1._m0[5].z));
        _577 = (fma(_597, fp_c6_1._m0[51].y, _599) * _601.y) * _631;
        _579 = (fma(_597, fp_c6_1._m0[51].z, _599) * _601.z) * _631;
    }
    float _633 = fma(_353, fma(_245, _573, _363), _349 * fma(_245, _569, fma(_341 * (_335 + fma(_335, -_323, _323)), fp_c1_1._m0[1].x, _329 * 0.3183098733425140380859375) * (_345 * fp_c5_1._m0[5].x)));
    float _635 = exp2(log2(clamp(sqrt(_563) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_559 * inversesqrt(_563), fp_c5_1._m0[23].z, fma(_561 * inversesqrt(_563), fp_c5_1._m0[23].y, (_555 * inversesqrt(_563)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _637 = clamp(fma(fma(_271, fp_c5_1._m0[14].z, fma(_557, fp_c5_1._m0[14].y, _269 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _639 = fma(_353, fma(_245, _577, _365), _349 * fma(_245, _571, fma(_341 * (_337 + fma(_337, -_323, _323)), fp_c1_1._m0[1].x, _331 * 0.3183098733425140380859375) * (_345 * fp_c5_1._m0[5].y)));
    float _641 = fma(_353, fma(_245, _579, _367), _349 * fma(_245, _575, fma(_341 * (_339 + fma(_339, -_323, _323)), fp_c1_1._m0[1].x, _333 * 0.3183098733425140380859375) * (_345 * fp_c5_1._m0[5].z)));
    float _643 = fma((-_633) + fp_c5_1._m0[13].x, _637, _633);
    float _645 = fma((-_639) + fp_c5_1._m0[13].y, _637, _639);
    float _647 = fma((-_641) + fp_c5_1._m0[13].z, _637, _641);
    float _649 = clamp((-exp2((clamp(fma(sqrt(_563), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _96.x = fma((-_643) + fma(fma((_635 * fp_c7_1._m0[55].x) * _565, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _649, _643);
    _96.y = fma((-_645) + fma(fma((_635 * fp_c7_1._m0[55].y) * _565, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _649, _645);
    _96.z = fma((-_647) + fma(fma((_635 * fp_c7_1._m0[55].z) * _565, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _649, _647);
    _96.w = clamp(texture(fp_tex_tcb_8, vec2(_103, _105)).x * _93.w, 0.0, 1.0);
}


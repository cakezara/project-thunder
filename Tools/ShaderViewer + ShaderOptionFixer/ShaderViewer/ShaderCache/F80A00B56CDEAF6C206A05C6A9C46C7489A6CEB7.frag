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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_E;
layout(binding = 1) uniform sampler2D fp_tex_tcb_28;
layout(binding = 2) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 3) uniform sampler2DArrayShadow fp_tex_tcb_2E;
layout(binding = 4) uniform sampler2D fp_tex_tcb_30;
layout(binding = 5) uniform sampler2D fp_tex_tcb_32;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _65;
layout(location = 1) in vec4 _67;
layout(location = 3) in vec4 _69;
layout(location = 5) in vec4 _71;
layout(location = 6) in vec4 _73;
layout(location = 4) in vec4 _75;
layout(location = 8) in vec4 _77;
layout(location = 7) in vec4 _79;
layout(location = 9) in vec4 _81;
layout(location = 10) in vec4 _83;
layout(location = 2) in vec4 _85;
layout(location = 0) out vec4 _88;
uint _6[12];

void main()
{
    bool _385 = false;
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_65.x, _65.y)).xy;
    float _99 = _96.x;
    float _101 = _96.y;
    float _103 = _67.x;
    float _105 = _67.y;
    float _107 = _67.z;
    float _109 = _69.y;
    float _111 = _69.z;
    float _113 = _69.x;
    float _115 = _69.w;
    float _117 = _71.y;
    float _119 = _71.z;
    float _121 = inversesqrt(fma(_107, _107, fma(_105, _105, _103 * _103)));
    float _123 = _107 * _121;
    float _125 = _103 * _121;
    float _127 = _105 * _121;
    float _129 = _71.x;
    float _131 = sqrt(clamp((-fma(_99, _99, _101 * _101)) + 1.0, 0.0, 1.0));
    float _133 = fma(_125, _131, fma(_113, _99, _101 * (fma(_127, _111, -(_123 * _109)) * _115)));
    float _135 = fma(_127, _131, fma(_109, _99, _101 * (fma(_123, _113, -(_125 * _111)) * _115)));
    float _137 = fma(_123, _131, fma(_111, _99, _101 * (fma(_125, _109, -(_127 * _113)) * _115)));
    float _139 = inversesqrt(fma(_119, _119, fma(_117, _117, _129 * _129)));
    float _141 = inversesqrt(fma(_137, _137, fma(_135, _135, _133 * _133)));
    float _143 = _129 * (-_139);
    float _145 = 1.0 / _73.w;
    float _147 = _133 * _141;
    float _149 = _117 * (-_139);
    float _151 = _135 * _141;
    float _153 = _137 * _141;
    float _155 = _119 * (-_139);
    float _157 = fma(_153, _155, fma(_151, _149, _147 * _143));
    float _159 = _157 * _157;
    float _161 = fma(_159, fp_c1_1._m0[0].w, 0.5511000156402587890625);
    bool _165 = _161 < 0.0;
    float _167 = _161;
    float _169 = _159;
    float _171 = _141;
    float _173 = _137;
    float _175 = _109;
    float _177 = _133;
    float _179 = _151;
    if (!_165)
    {
        _167 = inversesqrt(abs(_161));
    }
    float _181 = _167;
    if (_165)
    {
        _169 = 0.0;
    }
    float _183 = _169;
    if (_165)
    {
        _171 = 0.0;
    }
    float _185 = _171;
    if (_165)
    {
        _181 = 0.0;
    }
    float _187 = _181;
    if (!_165)
    {
        _183 = 1.0 / _181;
    }
    float _189 = _183;
    if (!_165)
    {
        _173 = fma(_157, fp_c1_1._m0[1].x, -_183);
    }
    float _191 = _173;
    if (!_165)
    {
        _175 = _147 * _173;
    }
    if (!_165)
    {
        _177 = _151 * _173;
    }
    if (!_165)
    {
        _191 = _153 * _173;
    }
    if (!_165)
    {
        _189 = fma(_143, fp_c1_1._m0[1].y, _175);
    }
    if (!_165)
    {
        _185 = fma(_149, fp_c1_1._m0[1].y, _177);
    }
    if (!_165)
    {
        _187 = fma(_155, fp_c1_1._m0[1].y, _191);
    }
    float _193 = fma(_73.x * _145, 0.5, 0.5);
    float _195 = _139 * fma(_187, fp_c3_1._m0[0].z, fma(_185, fp_c3_1._m0[0].y, _189 * fp_c3_1._m0[0].x));
    float _197 = fma(_73.y * _145, -0.5, 0.5);
    float _199 = fma(_195, fp_c6_1._m0[0].z, _193);
    float _201 = fma((_139 * fma(_187, fp_c3_1._m0[1].z, fma(_185, fp_c3_1._m0[1].y, _189 * fp_c3_1._m0[1].x))) * fp_c6_1._m0[0].z, -fp_c3_1._m0[15].z, _197);
    float _203 = _75.w;
    float _205 = fma(_153 * (-_157), -2.0, -_155);
    float _207 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _209 = 1.0 / (_77.w * gl_FragCoord.w);
    float _211 = 1.0 / (_79.z * gl_FragCoord.w);
    float _213 = fma(_207, 0.5, 0.5);
    float _215 = float((abs(((-_203) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_203) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_203) > fp_c3_1._m0[58].y) ? (-1) : 0));
    float _217 = fma(_151 * (-_157), -2.0, -_149);
    float _219 = max(_157, fp_c1_1._m0[0].y);
    bool _221 = _215 == 0.0;
    float _223 = fma(_147 * (-_157), -2.0, -_143);
    float _225 = _195;
    float _227 = _203;
    float _229 = _193;
    float _231 = _197;
    if (_221)
    {
        _225 = _81.w;
    }
    float _233 = _225;
    if (!_221)
    {
        _233 = _83.w;
    }
    if (_221)
    {
        _227 = _81.z;
    }
    float _235 = _143 + (-fp_c5_1._m0[23].x);
    float _237 = 1.0 / max(abs(_205), max(abs(_223), abs(_217)));
    float _239 = 0.0;
    float _241 = _227;
    if (_221)
    {
        _239 = _81.x;
    }
    float _243 = 0.0;
    float _245 = _239;
    if (_221)
    {
        _243 = _81.y;
    }
    float _247 = _243;
    if (!_221)
    {
        _241 = _83.z;
    }
    if (!_221)
    {
        _245 = _83.x;
    }
    vec2 _249 = texture(fp_tex_tcb_2C, vec2((_77.x * gl_FragCoord.w) * _209, (_77.y * gl_FragCoord.w) * _209)).xy;
    float _251 = _249.x;
    if (!_221)
    {
        _247 = _83.y;
    }
    float _253 = 1.0 / _233;
    bool _255 = texture(fp_tex_tcb_32, vec2(_199, _201)).x > gl_FragCoord.z;
    float _257 = _149 + (-fp_c5_1._m0[23].y);
    if (_255)
    {
        _229 = _199;
    }
    if (_255)
    {
        _231 = _201;
    }
    vec3 _261 = textureLod(fp_tex_tcb_30, vec2(_229, _231), _207).xyz;
    float _263 = _261.x;
    float _265 = _261.y;
    float _267 = _261.z;
    vec2 _269 = texture(fp_tex_tcb_38, vec2(_219, (-_207) + (-0.0))).xy;
    float _271 = _269.x;
    float _273 = _269.y;
    vec3 _275 = texture(fp_tex_tcb_36, vec4(_223 * _237, _217 * _237, _205 * _237, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_207 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _277 = _155 + (-fp_c5_1._m0[23].z);
    float _279 = fma(_151, -fp_c5_1._m0[23].y, _147 * (-fp_c5_1._m0[23].x));
    float _281 = inversesqrt(fma(_277, _277, fma(_257, _257, _235 * _235)));
    float _283 = _147 * _151;
    float _285 = max(fma(_153, -fp_c5_1._m0[23].z, _279), fp_c1_1._m0[0].y);
    float _287 = _235 * _281;
    float _289 = _257 * _281;
    float _291 = _277 * _281;
    float _293 = max(fma(_155, _291, fma(_149, _289, _143 * _287)), fp_c1_1._m0[0].y);
    float _295 = _151 * _153;
    float _297 = _147 * _153;
    float _299 = _153 * _153;
    float _301 = max(fma(_153, _291, fma(_151, _289, _147 * _287)), fp_c1_1._m0[0].y) * max(fma(_153, _291, fma(_151, _289, _147 * _287)), fp_c1_1._m0[0].y);
    float _303 = _75.x;
    float _305 = _207 * _207;
    float _307 = _75.z;
    float _309 = (_213 * 0.5) * _213;
    float _311 = _305 * _305;
    float _313 = exp2(_293 * fma(_293, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _315 = fma(_251, -_251, _249.y);
    float _317 = clamp(_77.z, 0.0, 1.0);
    float _319 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].x;
    float _321 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].y;
    float _323 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].z;
    float _325 = fma(_147, _147, -(_151 * _151));
    float _327 = ((1.0 / (_309 + fma(_219, -_309, _219))) * (1.0 / (_309 + fma(_309, -_285, _285)))) * ((_305 * (1.0 / max(fma(_301, _311, -_301) + 1.0, fp_c1_1._m0[0].y))) * (_305 * (1.0 / max(fma(_301, _311, -_301) + 1.0, fp_c1_1._m0[0].y))));
    int _330 = max(0, min(int(trunc((_307 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _332 = clamp(_85.w, 0.0, 1.0);
    uint _335 = uint(int(uint((((int(uint(_330) >> uint(16)) * 20) << 16) + (((_330 & 65535) * 20) + max(0, min(int(trunc((_303 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _337 = fp_c10_1._m0[int(uint(int(_335)) >> uint(2))][int(_335) & 3];
    float _339 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    float _341 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _343 = sqrt(fp_c6_1._m0[7].z);
    float _345 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _347 = sqrt(fp_c6_1._m0[7].x);
    float _349 = sqrt(fp_c6_1._m0[7].y);
    float _351 = clamp(fma(_153, -fp_c5_1._m0[23].z, _279), 0.0, 1.0);
    float _353 = (fma(_319, _271, _273) * _275.x) + fma(_332, fma(_347, -_263, max(0.0, fma(_325, fp_c5_1._m0[31].x, (fma(_153, fp_c5_1._m0[25].z, fma(_151, fp_c5_1._m0[25].y, _147 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_297, fp_c5_1._m0[28].w, fma(_299, fp_c5_1._m0[28].z, fma(_295, fp_c5_1._m0[28].y, _283 * fp_c5_1._m0[28].x))))) * fma(_339, -_319, _339)), _347 * _263);
    float _355 = (fma(_321, _271, _273) * _275.y) + fma(_332, fma(_349, -_265, max(0.0, fma(_325, fp_c5_1._m0[31].y, (fma(_153, fp_c5_1._m0[26].z, fma(_151, fp_c5_1._m0[26].y, _147 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_297, fp_c5_1._m0[29].w, fma(_299, fp_c5_1._m0[29].z, fma(_295, fp_c5_1._m0[29].y, _283 * fp_c5_1._m0[29].x))))) * fma(_341, -_321, _341)), _349 * _265);
    float _357 = (fma(_323, _271, _273) * _275.z) + fma(_332, fma(_343, -_267, max(0.0, fma(_325, fp_c5_1._m0[31].z, (fma(_153, fp_c5_1._m0[27].z, fma(_151, fp_c5_1._m0[27].y, _147 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_297, fp_c5_1._m0[30].w, fma(_299, fp_c5_1._m0[30].z, fma(_295, fp_c5_1._m0[30].y, _283 * fp_c5_1._m0[30].x))))) * fma(_345, -_323, _345)), _343 * _267);
    float _359 = clamp((-(max((-max(min(_315 * (1.0 / fma((-_251) + _317, (-_251) + _317, _315)), 1.0), float(_317 <= _251))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_253 * _245, _253 * _247, float(int(clamp(uint(max(roundEven(_215), 0.0)), 0u, 65535u)))), _253 * _241))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_79.x * gl_FragCoord.w) * _211, (_79.y * gl_FragCoord.w) * _211)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _361 = _355;
    float _363 = _353;
    float _365 = _357;
    float _367 = _357;
    float _369 = _355;
    float _371 = _353;
    if (floatBitsToInt(_337) != (-1))
    {
        int _373 = floatBitsToInt(_337);
        int _375 = 0;
        float _379;
        float _381;
        float _383;
        int _467;
        do
        {
            int _377 = _373 & 255;
            _379 = _363;
            _381 = _361;
            _383 = _365;
            _385 = uint(_377) >= 30u;
            if (_385)
            {
                break;
            }
            int _387 = _377 << 4;
            uint _389 = uint(int(uint(_387 + 7360) >> uint(2)));
            int _391 = int(_389) + 1;
            uint _393 = uint(int(uint(_387 + 7368) >> uint(2)));
            float _395 = (-_303) + fp_c10_1._m0[int(uint(int(_389)) >> uint(2))][int(_389) & 3];
            float _397 = fp_c10_1._m0[int(uint(_391) >> uint(2))][_391 & 3] + (-_75.y);
            float _399 = (-_307) + fp_c10_1._m0[int(uint(int(_393)) >> uint(2))][int(_393) & 3];
            float _401 = fma(_399, _399, fma(_397, _397, _395 * _395));
            float _403 = _395 * inversesqrt(_401);
            float _405 = _397 * inversesqrt(_401);
            float _407 = _399 * inversesqrt(_401);
            float _409 = _143 + _403;
            float _411 = _149 + _405;
            float _413 = _155 + _407;
            float _415 = inversesqrt(fma(_413, _413, fma(_411, _411, _409 * _409)));
            uint _417 = uint(int(uint(_387 + 8320) >> uint(2)));
            float _419 = _409 * _415;
            float _421 = _411 * _415;
            float _423 = _413 * _415;
            uint _425 = uint(int(uint(_387 + 6880) >> uint(2)));
            int _427 = int(_425) + 1;
            float _429 = max(fma(_153, _423, fma(_151, _421, _147 * _419)), fp_c1_1._m0[0].y) * max(fma(_153, _423, fma(_151, _421, _147 * _419)), fp_c1_1._m0[0].y);
            float _431 = max(fma(_155, _423, fma(_149, _421, _143 * _419)), fp_c1_1._m0[0].y);
            float _433 = fma(_153, _407, fma(_151, _405, _147 * _403));
            float _435 = _85.w;
            float _437 = max(_433, fp_c1_1._m0[0].y);
            bool _439 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_417)) >> uint(2))][int(_417) & 3]) != 0;
            uint _441 = uint(int(uint(_387 + 6408) >> uint(2)));
            uint _443 = uint(int(uint(_387 + 6400) >> uint(2)));
            int _445 = int(_443) + 1;
            float _447 = exp2(_431 * fma(_431, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _449 = ((1.0 / (_309 + fma(_219, -_309, _219))) * (1.0 / (_309 + fma(_309, -_437, _437)))) * ((_305 * (1.0 / max(fma(_311, _429, -_429) + 1.0, fp_c1_1._m0[0].y))) * (_305 * (1.0 / max(fma(_311, _429, -_429) + 1.0, fp_c1_1._m0[0].y))));
            float _451 = _435;
            if (!_439)
            {
                _451 = 1.0;
            }
            float _453 = _451;
            if (_439)
            {
                uint _455 = uint(int(uint(_387 + 7840) >> uint(2)));
                int _457 = int(_455) + 1;
                uint _459 = uint(int(uint(_387 + 6888) >> uint(2)));
                float _461 = fp_c10_1._m0[int(uint(int(_459)) >> uint(2))][int(_459) & 3];
                int _463 = int(_459) + 1;
                uint _465 = uint(int(uint(_387 + 7848) >> uint(2)));
                _453 = exp2(fp_c10_1._m0[int(uint(_463) >> uint(2))][_463 & 3] * log2(clamp(((-_461) + fma(_407, -fp_c10_1._m0[int(uint(int(_465)) >> uint(2))][int(_465) & 3], fma(_405, -fp_c10_1._m0[int(uint(_457) >> uint(2))][_457 & 3], _403 * (-fp_c10_1._m0[int(uint(int(_455)) >> uint(2))][int(_455) & 3])))) * (1.0 / ((-_461) + 1.0)), 0.0, 1.0)));
            }
            _467 = _375 + 1;
            float _469 = (exp2(fp_c10_1._m0[int(uint(_427) >> uint(2))][_427 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_425)) >> uint(2))][int(_425) & 3], -sqrt(_401), fp_c1_1._m0[1].z), 0.0, 1.0))) * _453) * clamp(_433 + (-0.0), 0.0, 1.0);
            float _471 = fma(fp_c10_1._m0[int(uint(_445) >> uint(2))][_445 & 3] * _469, fma(_341 * _435, fp_c1_1._m0[1].w, ((_321 + fma(_321, -_447, _447)) * _449) * 0.079577468335628509521484375), _361);
            float _473 = fma(fp_c10_1._m0[int(uint(int(_443)) >> uint(2))][int(_443) & 3] * _469, fma(_339 * _435, fp_c1_1._m0[1].w, ((_319 + fma(_319, -_447, _447)) * _449) * 0.079577468335628509521484375), _363);
            float _475 = fma(fp_c10_1._m0[int(uint(int(_441)) >> uint(2))][int(_441) & 3] * _469, fma(_345 * _435, fp_c1_1._m0[1].w, ((_323 + fma(_323, -_447, _447)) * _449) * 0.079577468335628509521484375), _365);
            _373 = int(uint(_373) >> uint(8));
            _375 = _467;
            _361 = _471;
            _363 = _473;
            _365 = _475;
            _379 = _473;
            _381 = _471;
            _383 = _475;
        } while (!(_467 >= 4));
        _385 = false;
        _367 = _383;
        _369 = _381;
        _371 = _379;
        if ((_373 & 255) == 30)
        {
            float _477 = _75.y;
            float _479 = 1.0 / (fma(_307, fp_c10_1._m0[565].z, fma(_477, fp_c10_1._m0[565].y, _303 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _481 = 1.0 / fp_c10_1._m0[561].y;
            float _483 = _303 + (-fp_c10_1._m0[557].x);
            float _485 = _307 + (-fp_c10_1._m0[557].z);
            float _487 = _485 * fp_c10_1._m0[558].x;
            float _489 = _483 * fp_c10_1._m0[558].z;
            float _491 = (-_303) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_481, fp_c10_1._m0[557].x);
            float _493 = (-_307) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_481, fp_c10_1._m0[557].z);
            float _495 = fma(_485, _485, _483 * _483);
            float _497 = _491 * _491;
            float _499 = ((-float(_487 < _489)) + float(_487 > _489)) * fp_c10_1._m0[561].y;
            float _501 = sqrt(fma(_493, _493, _497)) * (-fp_c10_1._m0[558].y);
            bool _503 = fma(_485 * inversesqrt(_495), fp_c10_1._m0[558].z, (_483 * inversesqrt(_495)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _505 = inversesqrt(fma(_493, _493, fma(_501, _501, _497)));
            float _507 = _491 * _505;
            float _509 = _501 * _505;
            float _511 = _493 * _505;
            float _513 = fma(_485, fp_c10_1._m0[558].z, _483 * fp_c10_1._m0[558].x);
            float _515 = _143 + _507;
            float _517 = _149 + _509;
            float _519 = _155 + _511;
            bool _521 = _513 > 0.0;
            float _523 = inversesqrt(fma(_511, _511, _507 * _507));
            float _525 = _495;
            if (_521)
            {
                _525 = sqrt(_495);
            }
            float _527 = _525;
            if (!_521)
            {
                _527 = 1.0;
            }
            float _529 = inversesqrt(fma(_519, _519, fma(_517, _517, _515 * _515)));
            float _531 = clamp(fma(_513 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0) * clamp(fma(_513 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0);
            float _533 = _515 * _529;
            float _535 = _517 * _529;
            float _537 = _519 * _529;
            float _539 = fma(_153, _511, fma(_151, _509, _147 * _507));
            float _541 = max(_539, fp_c1_1._m0[0].y);
            float _543 = max(fma(_155, _537, fma(_149, _535, _143 * _533)), fp_c1_1._m0[0].y);
            float _545 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_483, fma(_499, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_485 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_499 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_483, fma(_499, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_485 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_499 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _547 = _85.w;
            float _549 = max(fma(_153, _537, fma(_151, _535, _147 * _533)), fp_c1_1._m0[0].y) * max(fma(_153, _537, fma(_151, _535, _147 * _533)), fp_c1_1._m0[0].y);
            if (_503)
            {
                _179 = fma(_545, -_545, fp_c1_1._m0[1].z) * fma(_545, -_545, fp_c1_1._m0[1].z);
            }
            float _551 = _179;
            if (!_503)
            {
                _551 = 1.0;
            }
            float _553 = exp2(_543 * fma(_543, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _555 = (min(fma(_531, -_531, fp_c1_1._m0[1].z) * fma(_531, -_531, fp_c1_1._m0[1].z), _551) * (exp2(log2(clamp(fma(_527, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_511 * _523, -fp_c10_1._m0[558].z, (_507 * _523) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_539 + (-0.0), 0.0, 1.0);
            float _557 = ((1.0 / (_309 + fma(_219, -_309, _219))) * (1.0 / (_309 + fma(_309, -_541, _541)))) * ((_305 * (1.0 / max(fma(_311, _549, -_549) + 1.0, fp_c1_1._m0[0].y))) * (_305 * (1.0 / max(fma(_311, _549, -_549) + 1.0, fp_c1_1._m0[0].y))));
            float _559 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_307, fp_c10_1._m0[562].z, fma(_477, fp_c10_1._m0[562].y, _303 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _479, 0.5, 0.5), (-fma((fma(_307, fp_c10_1._m0[563].z, fma(_477, fp_c10_1._m0[563].y, _303 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _479, 0.5, 0.5)) + 1.0)).z > fma((fma(_307, fp_c10_1._m0[564].z, fma(_477, fp_c10_1._m0[564].y, _303 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _479, 0.5, 0.5)) || (_513 <= 0.0));
            _367 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _555) * fma(_345 * _547, fp_c1_1._m0[1].w, ((_323 + fma(_323, -_553, _553)) * _557) * 0.079577468335628509521484375), _559, _383);
            _369 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _555) * fma(_341 * _547, fp_c1_1._m0[1].w, ((_321 + fma(_321, -_553, _553)) * _557) * 0.079577468335628509521484375), _559, _381);
            _371 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _555) * fma(_339 * _547, fp_c1_1._m0[1].w, ((_319 + fma(_319, -_553, _553)) * _557) * 0.079577468335628509521484375), _559, _379);
        }
    }
    float _561 = _303 + (-fp_c3_1._m0[11].w);
    float _563 = _75.y;
    float _565 = _307 + (-fp_c3_1._m0[13].w);
    float _567 = fma(_359, (_351 * fp_c5_1._m0[5].z) * fma(_345 * 0.3183098733425140380859375, _332, ((_323 + fma(_323, -_313, _313)) * _327) * 0.079577468335628509521484375), _367);
    float _569 = fma(_359, (_351 * fp_c5_1._m0[5].y) * fma(_341 * 0.3183098733425140380859375, _332, ((_321 + fma(_321, -_313, _313)) * _327) * 0.079577468335628509521484375), _369);
    float _571 = fma(_359, (_351 * fp_c5_1._m0[5].x) * fma(_339 * 0.3183098733425140380859375, _332, ((_319 + fma(_319, -_313, _313)) * _327) * 0.079577468335628509521484375), _371);
    float _573 = _563 + (-fp_c3_1._m0[12].w);
    float _575 = fma(_565, _565, fma(_573, _573, _561 * _561));
    float _577 = clamp(fma(fma(_307, fp_c5_1._m0[14].z, fma(_563, fp_c5_1._m0[14].y, _303 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _579 = exp2(log2(clamp(sqrt(_575) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_565 * inversesqrt(_575), fp_c5_1._m0[23].z, fma(_573 * inversesqrt(_575), fp_c5_1._m0[23].y, (_561 * inversesqrt(_575)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _581 = clamp(fma(_359, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _583 = fma((-_571) + fp_c5_1._m0[13].x, _577, _571);
    float _585 = fma((-_569) + fp_c5_1._m0[13].y, _577, _569);
    float _587 = fma((-_567) + fp_c5_1._m0[13].z, _577, _567);
    float _589 = clamp((-exp2((clamp(fma(sqrt(_575), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _88.x = fma((-_583) + fma(fma(_581 * (_579 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _589, _583);
    _88.y = fma((-_585) + fma(fma(_581 * (_579 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _589, _585);
    _88.z = fma((-_587) + fma(fma(_581 * (_579 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _589, _587);
    _88.w = 1.0;
}


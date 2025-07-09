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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_18;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 7) uniform sampler2DArrayShadow fp_tex_tcb_2E;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _69;
layout(location = 4) in vec4 _71;
layout(location = 1) in vec4 _73;
layout(location = 3) in vec4 _75;
layout(location = 6) in vec4 _77;
layout(location = 5) in vec4 _79;
layout(location = 8) in vec4 _81;
layout(location = 9) in vec4 _83;
layout(location = 7) in vec4 _85;
layout(location = 2) in vec4 _87;
layout(location = 0) out vec4 _90;
uint _6[12];

void main()
{
    bool _343 = false;
    float _97 = _69.x;
    float _99 = _69.y;
    vec2 _103 = texture(fp_tex_tcb_E, vec2(_97, _99)).xy;
    float _105 = _103.x;
    float _107 = _103.y;
    float _109 = _71.w;
    float _111 = _73.x;
    float _113 = _73.y;
    float _115 = _73.z;
    float _117 = _75.x;
    float _119 = _75.w;
    float _121 = 1.0 / (_77.z * gl_FragCoord.w);
    float _123 = _75.y;
    float _125 = _75.z;
    float _127 = float((abs(((-_109) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_109) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_109) > fp_c3_1._m0[58].y) ? (-1) : 0));
    float _129 = inversesqrt(fma(_115, _115, fma(_113, _113, _111 * _111)));
    bool _133 = _127 == 0.0;
    float _135 = _115 * _129;
    float _137 = _111 * _129;
    float _139 = _113 * _129;
    float _141 = _79.x;
    float _143 = 0.0;
    if (_133)
    {
        _143 = _81.w;
    }
    float _145 = _143;
    if (!_133)
    {
        _145 = _83.w;
    }
    float _147 = 0.0;
    if (_133)
    {
        _147 = _81.z;
    }
    float _149 = 0.0;
    float _151 = _147;
    if (_133)
    {
        _149 = _81.x;
    }
    float _153 = 0.0;
    float _155 = _149;
    if (_133)
    {
        _153 = _81.y;
    }
    float _157 = _153;
    if (!_133)
    {
        _151 = _83.z;
    }
    if (!_133)
    {
        _155 = _83.x;
    }
    if (!_133)
    {
        _157 = _83.y;
    }
    float _159 = _79.y;
    float _161 = _79.z;
    float _163 = 1.0 / _145;
    float _165 = sqrt(clamp((-fma(_105, _105, _107 * _107)) + 1.0, 0.0, 1.0));
    float _167 = fma(_137, _165, fma(_105, _117, _107 * (fma(_139, _125, -(_135 * _123)) * _119)));
    float _169 = fma(_139, _165, fma(_105, _123, _107 * (fma(_135, _117, -(_137 * _125)) * _119)));
    float _171 = fma(_135, _165, fma(_105, _125, _107 * (fma(_137, _123, -(_139 * _117)) * _119)));
    float _173 = 1.0 / (_85.w * gl_FragCoord.w);
    float _175 = inversesqrt(fma(_161, _161, fma(_159, _159, _141 * _141)));
    float _177 = max(texture(fp_tex_tcb_10, vec2(_97, _99)).x, fp_c1_1._m0[0].x);
    float _179 = inversesqrt(fma(_171, _171, fma(_169, _169, _167 * _167)));
    float _181 = _141 * (-_175);
    float _183 = _159 * (-_175);
    float _185 = _167 * _179;
    float _187 = _169 * _179;
    float _189 = _161 * (-_175);
    vec2 _191 = texture(fp_tex_tcb_2C, vec2((_85.x * gl_FragCoord.w) * _173, (_85.y * gl_FragCoord.w) * _173)).xy;
    float _193 = _191.x;
    float _195 = texture(fp_tex_tcb_12, vec2(_97, _99)).x;
    float _197 = _171 * _179;
    float _199 = fma(_197, _189, fma(_187, _183, _185 * _181));
    float _201 = max(_199, fp_c1_1._m0[0].y);
    float _203 = fma(_185 * (-_199), -2.0, -_181);
    float _205 = fma(_187 * (-_199), -2.0, -_183);
    float _207 = fma(_197 * (-_199), -2.0, -_189);
    float _209 = _181 + (-fp_c5_1._m0[23].x);
    float _211 = 1.0 / max(abs(_207), max(abs(_203), abs(_205)));
    vec3 _215 = texture(fp_tex_tcb_A, vec2(_97, _99)).xyz;
    vec2 _217 = texture(fp_tex_tcb_38, vec2(_201, (-_177) + (-0.0))).xy;
    float _219 = _217.x;
    float _221 = _217.y;
    vec3 _223 = texture(fp_tex_tcb_36, vec4(_203 * _211, _205 * _211, _207 * _211, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_177 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _225 = _183 + (-fp_c5_1._m0[23].y);
    float _227 = _189 + (-fp_c5_1._m0[23].z);
    float _229 = _183 * _181;
    float _231 = _183 * _189;
    float _233 = inversesqrt(fma(_227, _227, fma(_225, _225, _209 * _209)));
    float _235 = _189 * _189;
    float _237 = clamp(_85.z, 0.0, 1.0);
    float _239 = _209 * _233;
    float _241 = _227 * _233;
    float _243 = _225 * _233;
    float _245 = _189 * _181;
    float _247 = fma(_181, _181, -(_183 * _183));
    float _249 = _71.x;
    float _251 = _187 * _185;
    float _253 = max(fma(_189, _241, fma(_183, _243, _181 * _239)), fp_c1_1._m0[0].y);
    float _255 = _71.z;
    float _257 = _197 * _197;
    float _259 = fma(_193, -_193, _191.y);
    float _261 = _187 * _197;
    float _263 = _197 * _185;
    float _265 = _177 * _177;
    float _267 = fma(_187, -fp_c5_1._m0[23].y, _185 * (-fp_c5_1._m0[23].x));
    float _269 = max(fma(_197, _241, fma(_187, _243, _185 * _239)), fp_c1_1._m0[0].y) * max(fma(_197, _241, fma(_187, _243, _185 * _239)), fp_c1_1._m0[0].y);
    float _271 = fma(_177, 0.5, 0.5);
    int _274 = max(0, min(int(trunc((_255 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _276 = (_271 * 0.5) * _271;
    float _278 = fma(_185, _185, -(_187 * _187));
    float _280 = max(fma(_197, -fp_c5_1._m0[23].z, _267), fp_c1_1._m0[0].y);
    float _282 = exp2(_253 * fma(_253, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _284 = 1.0 / (_276 + fma(_201, -_276, _201));
    uint _287 = uint(int(uint((((int(uint(_274) >> uint(16)) * 20) << 16) + (((_274 & 65535) * 20) + max(0, min(int(trunc((_249 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _289 = fp_c10_1._m0[int(uint(int(_287)) >> uint(2))][int(_287) & 3];
    float _291 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].y;
    float _293 = (_284 * (1.0 / (_276 + fma(_276, -_280, _280)))) * ((_265 * (1.0 / max(fma(_265 * _265, _269, -_269) + 1.0, fp_c1_1._m0[0].y))) * (_265 * (1.0 / max(fma(_265 * _265, _269, -_269) + 1.0, fp_c1_1._m0[0].y))));
    float _295 = exp2(log2(clamp((-_199) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[45].y) * fp_c6_1._m0[45].x;
    float _297 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].x;
    float _299 = fp_c6_1._m0[41].z * fp_c6_1._m0[42].z;
    float _301 = fma(max(0.0, fma(_247, fp_c5_1._m0[31].y, (fma(_189, -fp_c5_1._m0[26].z, fma(_183, -fp_c5_1._m0[26].y, _181 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_245, fp_c5_1._m0[29].w, fma(_235, fp_c5_1._m0[29].z, fma(_231, fp_c5_1._m0[29].y, _229 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[46].y, _295, fma(_215.y, -_195, _215.y));
    float _303 = fma(max(0.0, fma(_247, fp_c5_1._m0[31].z, (fma(_189, -fp_c5_1._m0[27].z, fma(_183, -fp_c5_1._m0[27].y, _181 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_245, fp_c5_1._m0[30].w, fma(_235, fp_c5_1._m0[30].z, fma(_231, fp_c5_1._m0[30].y, _229 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[46].z, _295, fma(_215.z, -_195, _215.z));
    float _305 = fma(max(0.0, fma(_247, fp_c5_1._m0[31].x, (fma(_189, -fp_c5_1._m0[25].z, fma(_183, -fp_c5_1._m0[25].y, _181 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_245, fp_c5_1._m0[28].w, fma(_235, fp_c5_1._m0[28].z, fma(_231, fp_c5_1._m0[28].y, _229 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[46].x, _295, fma(_215.x, -_195, _215.x));
    float _307 = clamp(fma(_197, -fp_c5_1._m0[23].z, _267), 0.0, 1.0);
    float _309 = fma(_223.y, fma(_291, _219, _221), max(0.0, fma(_278, fp_c5_1._m0[31].y, (fma(_197, fp_c5_1._m0[26].z, fma(_187, fp_c5_1._m0[26].y, _185 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_263, fp_c5_1._m0[29].w, fma(_257, fp_c5_1._m0[29].z, fma(_261, fp_c5_1._m0[29].y, _251 * fp_c5_1._m0[29].x))))) * fma(_301, -_291, _301));
    float _311 = fma(_223.x, fma(_297, _219, _221), max(0.0, fma(_278, fp_c5_1._m0[31].x, (fma(_197, fp_c5_1._m0[25].z, fma(_187, fp_c5_1._m0[25].y, _185 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_263, fp_c5_1._m0[28].w, fma(_257, fp_c5_1._m0[28].z, fma(_261, fp_c5_1._m0[28].y, _251 * fp_c5_1._m0[28].x))))) * fma(_305, -_297, _305));
    float _313 = fma(_223.z, fma(_299, _219, _221), max(0.0, fma(_278, fp_c5_1._m0[31].z, (fma(_197, fp_c5_1._m0[27].z, fma(_187, fp_c5_1._m0[27].y, _185 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_263, fp_c5_1._m0[30].w, fma(_257, fp_c5_1._m0[30].z, fma(_261, fp_c5_1._m0[30].y, _251 * fp_c5_1._m0[30].x))))) * fma(_303, -_299, _303));
    float _315 = clamp(texture(fp_tex_tcb_18, vec2(_97, _99)).x + (-0.0), 0.0, 1.0);
    float _317 = clamp((-(fma(texture(fp_tex_tcb_28, vec2((_77.x * gl_FragCoord.w) * _121, (_77.y * gl_FragCoord.w) * _121)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x) + max((-max(min(_259 * (1.0 / fma((-_193) + _237, (-_193) + _237, _259)), 1.0), float(_237 <= _193))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_163 * _155, _163 * _157, float(int(clamp(uint(max(roundEven(_127), 0.0)), 0u, 65535u)))), _163 * _151))) + 1.0))) + 1.0, 0.0, 1.0);
    int _319 = floatBitsToInt(_289);
    float _321 = _311;
    float _323 = _309;
    float _325 = _313;
    float _327 = _309;
    float _329 = _311;
    float _331 = _313;
    if (floatBitsToInt(_289) != (-1))
    {
        int _333 = 0;
        float _337;
        float _339;
        float _341;
        int _425;
        do
        {
            int _335 = _319 & 255;
            _337 = _321;
            _339 = _323;
            _341 = _325;
            _343 = uint(_335) >= 30u;
            if (_343)
            {
                break;
            }
            int _345 = _335 << 4;
            uint _347 = uint(int(uint(_345 + 7360) >> uint(2)));
            int _349 = int(_347) + 1;
            uint _351 = uint(int(uint(_345 + 7368) >> uint(2)));
            float _353 = (-_249) + fp_c10_1._m0[int(uint(int(_347)) >> uint(2))][int(_347) & 3];
            float _355 = fp_c10_1._m0[int(uint(_349) >> uint(2))][_349 & 3] + (-_71.y);
            float _357 = (-_255) + fp_c10_1._m0[int(uint(int(_351)) >> uint(2))][int(_351) & 3];
            float _359 = fma(_357, _357, fma(_355, _355, _353 * _353));
            float _361 = _353 * inversesqrt(_359);
            float _363 = _355 * inversesqrt(_359);
            float _365 = _357 * inversesqrt(_359);
            float _367 = _181 + _361;
            float _369 = _183 + _363;
            float _371 = _189 + _365;
            uint _373 = uint(int(uint(_345 + 6880) >> uint(2)));
            int _375 = int(_373) + 1;
            float _377 = inversesqrt(fma(_371, _371, fma(_369, _369, _367 * _367)));
            float _379 = _367 * _377;
            float _381 = _369 * _377;
            float _383 = _371 * _377;
            uint _385 = uint(int(uint(_345 + 8320) >> uint(2)));
            float _387 = max(fma(_197, _383, fma(_187, _381, _185 * _379)), fp_c1_1._m0[0].y) * max(fma(_197, _383, fma(_187, _381, _185 * _379)), fp_c1_1._m0[0].y);
            float _389 = max(fma(_189, _383, fma(_183, _381, _181 * _379)), fp_c1_1._m0[0].y);
            float _391 = fma(_197, _365, fma(_187, _363, _185 * _361));
            float _393 = max(_391, fp_c1_1._m0[0].y);
            uint _395 = uint(int(uint(_345 + 6400) >> uint(2)));
            int _397 = int(_395) + 1;
            uint _399 = uint(int(uint(_345 + 6408) >> uint(2)));
            float _401 = exp2(_389 * fma(_389, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _403 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3]) != 0;
            float _405 = ((_265 * (1.0 / max(fma(_265 * _265, _387, -_387) + 1.0, fp_c1_1._m0[0].y))) * (_265 * (1.0 / max(fma(_265 * _265, _387, -_387) + 1.0, fp_c1_1._m0[0].y)))) * (_284 * (1.0 / (_276 + fma(_276, -_393, _393))));
            float _407 = _297 + fma(_297, -_401, _401);
            float _409 = _407;
            if (!_403)
            {
                _409 = 1.0;
            }
            float _411 = _409;
            if (_403)
            {
                uint _413 = uint(int(uint(_345 + 7840) >> uint(2)));
                int _415 = int(_413) + 1;
                uint _417 = uint(int(uint(_345 + 7848) >> uint(2)));
                uint _419 = uint(int(uint(_345 + 6888) >> uint(2)));
                float _421 = fp_c10_1._m0[int(uint(int(_419)) >> uint(2))][int(_419) & 3];
                int _423 = int(_419) + 1;
                _411 = exp2(fp_c10_1._m0[int(uint(_423) >> uint(2))][_423 & 3] * log2(clamp(((-_421) + fma(_365, -fp_c10_1._m0[int(uint(int(_417)) >> uint(2))][int(_417) & 3], fma(_363, -fp_c10_1._m0[int(uint(_415) >> uint(2))][_415 & 3], _361 * (-fp_c10_1._m0[int(uint(int(_413)) >> uint(2))][int(_413) & 3])))) * (1.0 / ((-_421) + 1.0)), 0.0, 1.0)));
            }
            _425 = _333 + 1;
            float _427 = clamp(_391 + (-0.0), 0.0, 1.0) * (exp2(fp_c10_1._m0[int(uint(_375) >> uint(2))][_375 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_373)) >> uint(2))][int(_373) & 3], -sqrt(_359), fp_c1_1._m0[1].x), 0.0, 1.0))) * _411);
            float _429 = fma(fp_c10_1._m0[int(uint(int(_395)) >> uint(2))][int(_395) & 3] * _427, fma(_305, fp_c1_1._m0[1].y, (_407 * _405) * 0.079577468335628509521484375), _321);
            float _431 = fma(fp_c10_1._m0[int(uint(_397) >> uint(2))][_397 & 3] * _427, fma(_301, fp_c1_1._m0[1].y, ((_291 + fma(_291, -_401, _401)) * _405) * 0.079577468335628509521484375), _323);
            float _433 = fma(fp_c10_1._m0[int(uint(int(_399)) >> uint(2))][int(_399) & 3] * _427, fma(_303, fp_c1_1._m0[1].y, ((_299 + fma(_299, -_401, _401)) * _405) * 0.079577468335628509521484375), _325);
            _319 = int(uint(_319) >> uint(8));
            _333 = _425;
            _321 = _429;
            _323 = _431;
            _325 = _433;
            _337 = _429;
            _339 = _431;
            _341 = _433;
        } while (!(_425 >= 4));
        _343 = false;
        _327 = _339;
        _329 = _337;
        _331 = _341;
        if ((_319 & 255) == 30)
        {
            float _435 = _71.y;
            float _437 = 1.0 / (fma(_255, fp_c10_1._m0[565].z, fma(_435, fp_c10_1._m0[565].y, _249 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _439 = 1.0 / fp_c10_1._m0[561].y;
            float _441 = _255 + (-fp_c10_1._m0[557].z);
            float _443 = _441 * fp_c10_1._m0[558].x;
            float _445 = (-_249) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_439, fp_c10_1._m0[557].x);
            float _447 = (-_255) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_439, fp_c10_1._m0[557].z);
            float _449 = _445 * _445;
            float _451 = sqrt(fma(_447, _447, _449)) * (-fp_c10_1._m0[558].y);
            float _453 = inversesqrt(fma(_447, _447, fma(_451, _451, _449)));
            float _455 = _249 + (-fp_c10_1._m0[557].x);
            float _457 = _455 * fp_c10_1._m0[558].z;
            float _459 = _445 * _453;
            float _461 = _447 * _453;
            float _463 = _451 * _453;
            float _465 = _181 + _459;
            float _467 = _183 + _463;
            float _469 = ((-float(_443 < _457)) + float(_443 > _457)) * fp_c10_1._m0[561].y;
            float _471 = _189 + _461;
            float _473 = fma(_197, _461, fma(_187, _463, _185 * _459));
            float _475 = inversesqrt(fma(_471, _471, fma(_467, _467, _465 * _465)));
            float _477 = _465 * _475;
            float _479 = _467 * _475;
            float _481 = _471 * _475;
            float _483 = fma(_441, _441, _455 * _455);
            float _485 = max(fma(_189, _481, fma(_183, _479, _181 * _477)), fp_c1_1._m0[0].y);
            float _487 = max(_473, fp_c1_1._m0[0].y);
            float _489 = fma(_441, fp_c10_1._m0[558].z, _455 * fp_c10_1._m0[558].x);
            float _491 = max(fma(_197, _481, fma(_187, _479, _185 * _477)), fp_c1_1._m0[0].y) * max(fma(_197, _481, fma(_187, _479, _185 * _477)), fp_c1_1._m0[0].y);
            bool _493 = _489 > 0.0;
            float _495 = inversesqrt(fma(_461, _461, _459 * _459));
            float _497 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_455, fma(_469, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_441 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_469 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_455, fma(_469, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_441 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_469 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _499 = fma(_497, -_497, fp_c1_1._m0[1].x);
            float _501 = _459;
            float _503 = _499;
            if (_493)
            {
                _501 = sqrt(_483);
            }
            float _505 = _501;
            if (!_493)
            {
                _505 = 1.0;
            }
            bool _507 = fma(_441 * inversesqrt(_483), fp_c10_1._m0[558].z, (_455 * inversesqrt(_483)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            if (_507)
            {
                _503 = _499 * _499;
            }
            float _509 = _503;
            if (!_507)
            {
                _509 = 1.0;
            }
            float _511 = clamp(fma(_489 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_489 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _513 = (_284 * (1.0 / (_276 + fma(_276, -_487, _487)))) * ((_265 * (1.0 / max(fma(_265 * _265, _491, -_491) + 1.0, fp_c1_1._m0[0].y))) * (_265 * (1.0 / max(fma(_265 * _265, _491, -_491) + 1.0, fp_c1_1._m0[0].y))));
            float _515 = exp2(_485 * fma(_485, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _517 = clamp(_473 + (-0.0), 0.0, 1.0) * ((exp2(log2(clamp(fma(_505, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_461 * _495, -fp_c10_1._m0[558].z, (_459 * _495) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_511, -_511, fp_c1_1._m0[1].x) * fma(_511, -_511, fp_c1_1._m0[1].x), _509));
            float _519 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_255, fp_c10_1._m0[562].z, fma(_435, fp_c10_1._m0[562].y, _249 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _437, 0.5, 0.5), (-fma((fma(_255, fp_c10_1._m0[563].z, fma(_435, fp_c10_1._m0[563].y, _249 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _437, 0.5, 0.5)) + 1.0)).z > fma((fma(_255, fp_c10_1._m0[564].z, fma(_435, fp_c10_1._m0[564].y, _249 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _437, 0.5, 0.5)) || (_489 <= 0.0));
            _327 = fma(fma(_301, fp_c1_1._m0[1].y, ((_291 + fma(_291, -_515, _515)) * _513) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _517), _519, _339);
            _329 = fma(fma(_305, fp_c1_1._m0[1].y, ((_297 + fma(_297, -_515, _515)) * _513) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _517), _519, _337);
            _331 = fma(fma(_303, fp_c1_1._m0[1].y, ((_299 + fma(_299, -_515, _515)) * _513) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _517), _519, _341);
        }
    }
    float _521 = _249 + (-fp_c3_1._m0[11].w);
    float _523 = _71.y;
    float _525 = _255 + (-fp_c3_1._m0[13].w);
    float _527 = fma(_315, _327, _317 * (fma(_293 * (_291 + fma(_291, -_282, _282)), fp_c1_1._m0[0].w, _301 * 0.3183098733425140380859375) * (_307 * fp_c5_1._m0[5].y)));
    float _529 = _523 + (-fp_c3_1._m0[12].w);
    float _531 = fma(_525, _525, fma(_529, _529, _521 * _521));
    float _533 = fma(_315, _329, _317 * (fma(_293 * (_297 + fma(_297, -_282, _282)), fp_c1_1._m0[0].w, _305 * 0.3183098733425140380859375) * (_307 * fp_c5_1._m0[5].x)));
    float _535 = clamp(fma(fma(_255, fp_c5_1._m0[14].z, fma(_523, fp_c5_1._m0[14].y, _249 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _537 = fma(_315, _331, _317 * (fma(_293 * (_299 + fma(_299, -_282, _282)), fp_c1_1._m0[0].w, _303 * 0.3183098733425140380859375) * (_307 * fp_c5_1._m0[5].z)));
    float _539 = clamp(fma(_317 * _315, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _541 = exp2(log2(clamp(sqrt(_531) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_525 * inversesqrt(_531), fp_c5_1._m0[23].z, fma(_529 * inversesqrt(_531), fp_c5_1._m0[23].y, (_521 * inversesqrt(_531)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _543 = fma((-_533) + fp_c5_1._m0[13].x, _535, _533);
    float _545 = fma((-_527) + fp_c5_1._m0[13].y, _535, _527);
    float _547 = fma((-_537) + fp_c5_1._m0[13].z, _535, _537);
    float _549 = clamp((-exp2((clamp(fma(sqrt(_531), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _90.x = fma((-_543) + fma(fma((_541 * fp_c7_1._m0[55].x) * _539, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _549, _543);
    _90.y = fma((-_545) + fma(fma((_541 * fp_c7_1._m0[55].y) * _539, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _549, _545);
    _90.z = fma((-_547) + fma(fma((_541 * fp_c7_1._m0[55].z) * _539, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _549, _547);
    _90.w = clamp(_87.w, 0.0, 1.0);
}


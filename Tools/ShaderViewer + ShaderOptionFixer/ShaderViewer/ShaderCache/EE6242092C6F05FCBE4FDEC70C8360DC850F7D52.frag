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
layout(binding = 3) uniform sampler2D fp_tex_tcb_30;
layout(binding = 4) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 5) uniform sampler2D fp_tex_tcb_38;
layout(binding = 6) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _61;
layout(location = 5) in vec4 _63;
layout(location = 2) in vec4 _65;
layout(location = 0) in vec4 _67;
layout(location = 3) in vec4 _69;
layout(location = 4) in vec4 _71;
layout(location = 7) in vec4 _73;
layout(location = 8) in vec4 _75;
layout(location = 1) in vec4 _77;
layout(location = 0) out vec4 _80;
uint _6[12];

void main()
{
    bool _301 = false;
    float _87 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _89 = 1.0 / (_61.w * gl_FragCoord.w);
    float _91 = 1.0 / (_63.z * gl_FragCoord.w);
    float _93 = _65.w;
    float _95 = _67.x;
    float _97 = _69.x;
    float _99 = _67.y;
    float _101 = _69.y;
    float _103 = _67.z;
    float _105 = _69.z;
    float _107 = 1.0 / _71.w;
    float _109 = float((abs(((-_93) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_93) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_93) > fp_c3_1._m0[58].y) ? (-1) : 0));
    float _111 = _97 * _97;
    float _113 = fma(_101, _101, _111);
    float _115 = inversesqrt(fma(_103, _103, fma(_99, _99, _95 * _95)));
    bool _119 = _109 == 0.0;
    float _121 = inversesqrt(fma(_105, _105, _113));
    float _123 = _95 * _115;
    float _125 = _111;
    float _127 = _113;
    if (_119)
    {
        _125 = _73.w;
    }
    float _129 = _97 * (-_121);
    float _131 = _125;
    if (!_119)
    {
        _131 = _75.w;
    }
    float _133 = _99 * _115;
    if (_119)
    {
        _127 = _73.z;
    }
    float _135 = _101 * (-_121);
    float _137 = 0.0;
    float _139 = _127;
    if (_119)
    {
        _137 = _73.x;
    }
    float _141 = _103 * _115;
    float _143 = 0.0;
    float _145 = _137;
    if (_119)
    {
        _143 = _73.y;
    }
    float _147 = _105 * (-_121);
    float _149 = _143;
    if (!_119)
    {
        _139 = _75.z;
    }
    if (!_119)
    {
        _145 = _75.x;
    }
    if (!_119)
    {
        _149 = _75.y;
    }
    float _151 = fma(_141, _147, fma(_133, _135, _123 * _129));
    float _153 = 1.0 / _131;
    float _155 = fma(_123 * (-_151), -2.0, -_129);
    float _157 = fma(_133 * (-_151), -2.0, -_135);
    float _159 = fma(_141 * (-_151), -2.0, -_147);
    float _161 = 1.0 / max(abs(_159), max(abs(_155), abs(_157)));
    vec2 _165 = texture(fp_tex_tcb_2C, vec2((_61.x * gl_FragCoord.w) * _89, (_61.y * gl_FragCoord.w) * _89)).xy;
    float _167 = _165.x;
    float _169 = max(_151, fp_c1_1._m0[0].y);
    vec3 _173 = textureLod(fp_tex_tcb_30, vec2(fma(_71.x * _107, 0.5, 0.5), fma(_71.y * _107, -0.5, 0.5)), _87).xyz;
    float _175 = _173.x;
    float _177 = _173.y;
    float _179 = _173.z;
    vec2 _181 = texture(fp_tex_tcb_38, vec2(_169, (-_87) + (-0.0))).xy;
    float _183 = _181.x;
    float _185 = _181.y;
    vec3 _187 = texture(fp_tex_tcb_36, vec4(_155 * _161, _157 * _161, _159 * _161, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_87 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _189 = _65.x;
    float _191 = _129 + (-fp_c5_1._m0[23].x);
    float _193 = _65.z;
    float _195 = _135 + (-fp_c5_1._m0[23].y);
    float _197 = _147 + (-fp_c5_1._m0[23].z);
    float _199 = inversesqrt(fma(_197, _197, fma(_195, _195, _191 * _191)));
    float _201 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].x, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _203 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].y, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _205 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].z, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _207 = _133 * _141;
    float _209 = _191 * _199;
    float _211 = _195 * _199;
    float _213 = _197 * _199;
    float _215 = _123 * _133;
    float _217 = _141 * _141;
    float _219 = max(fma(_147, _213, fma(_135, _211, _129 * _209)), fp_c1_1._m0[0].y);
    float _221 = _87 * _87;
    float _223 = fma(_87, 0.5, 0.5);
    int _226 = max(0, min(int(trunc((_193 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _228 = fma(_133, -fp_c5_1._m0[23].y, _123 * (-fp_c5_1._m0[23].x));
    float _230 = _221 * _221;
    float _232 = max(fma(_141, _213, fma(_133, _211, _123 * _209)), fp_c1_1._m0[0].y) * max(fma(_141, _213, fma(_133, _211, _123 * _209)), fp_c1_1._m0[0].y);
    float _234 = (_223 * 0.5) * _223;
    float _236 = clamp(fma(_141, -fp_c5_1._m0[23].z, _228), 0.0, 1.0);
    float _238 = _123 * _141;
    float _240 = clamp(_61.z, 0.0, 1.0);
    float _242 = exp2(_219 * fma(_219, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _244 = fma(_123, _123, -(_133 * _133));
    float _246 = ((1.0 / (_234 + fma(_234, -_169, _169))) * (1.0 / (_234 + fma(max(fma(_141, -fp_c5_1._m0[23].z, _228), fp_c1_1._m0[0].y), -_234, max(fma(_141, -fp_c5_1._m0[23].z, _228), fp_c1_1._m0[0].y))))) * ((_221 * (1.0 / max(fma(_232, _230, -_232) + 1.0, fp_c1_1._m0[0].y))) * (_221 * (1.0 / max(fma(_232, _230, -_232) + 1.0, fp_c1_1._m0[0].y))));
    float _248 = clamp(_77.w, 0.0, 1.0);
    float _250 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    uint _253 = uint(int(uint((((int(uint(_226) >> uint(16)) * 20) << 16) + (((_226 & 65535) * 20) + max(0, min(int(trunc((_189 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _255 = fp_c10_1._m0[int(uint(int(_253)) >> uint(2))][int(_253) & 3];
    float _257 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _259 = sqrt(fp_c6_1._m0[7].z);
    float _261 = fma(_167, -_167, _165.y);
    float _263 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _265 = sqrt(fp_c6_1._m0[7].y);
    float _267 = sqrt(fp_c6_1._m0[7].x);
    float _269 = fma(fma(_201, _183, _185), _187.x, fma(_248, fma(_267, -_175, max(0.0, fma(_244, fp_c5_1._m0[31].x, (fma(_141, fp_c5_1._m0[25].z, fma(_133, fp_c5_1._m0[25].y, _123 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_238, fp_c5_1._m0[28].w, fma(_217, fp_c5_1._m0[28].z, fma(_207, fp_c5_1._m0[28].y, _215 * fp_c5_1._m0[28].x))))) * fma(_201, -_250, _250)), _267 * _175));
    float _271 = fma(fma(_203, _183, _185), _187.y, fma(_248, fma(_265, -_177, max(0.0, fma(_244, fp_c5_1._m0[31].y, (fma(_141, fp_c5_1._m0[26].z, fma(_133, fp_c5_1._m0[26].y, _123 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_238, fp_c5_1._m0[29].w, fma(_217, fp_c5_1._m0[29].z, fma(_207, fp_c5_1._m0[29].y, _215 * fp_c5_1._m0[29].x))))) * fma(_203, -_263, _263)), _265 * _177));
    float _273 = fma(fma(_205, _183, _185), _187.z, fma(_248, fma(_259, -_179, max(0.0, fma(_244, fp_c5_1._m0[31].z, (fma(_141, fp_c5_1._m0[27].z, fma(_133, fp_c5_1._m0[27].y, _123 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_238, fp_c5_1._m0[30].w, fma(_217, fp_c5_1._m0[30].z, fma(_207, fp_c5_1._m0[30].y, _215 * fp_c5_1._m0[30].x))))) * fma(_205, -_257, _257)), _259 * _179));
    float _275 = clamp((-(fma(texture(fp_tex_tcb_28, vec2((_63.x * gl_FragCoord.w) * _91, (_63.y * gl_FragCoord.w) * _91)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x) + max((-max(min(_261 * (1.0 / fma((-_167) + _240, (-_167) + _240, _261)), 1.0), float(_240 <= _167))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_153 * _145, _153 * _149, float(int(clamp(uint(max(roundEven(_109), 0.0)), 0u, 65535u)))), _153 * _139))) + 1.0))) + 1.0, 0.0, 1.0);
    float _277 = _271;
    float _279 = _269;
    float _281 = _273;
    float _283 = _269;
    float _285 = _271;
    float _287 = _273;
    if (floatBitsToInt(_255) != (-1))
    {
        int _289 = floatBitsToInt(_255);
        int _291 = 0;
        float _295;
        float _297;
        float _299;
        int _385;
        do
        {
            int _293 = _289 & 255;
            _295 = _279;
            _297 = _277;
            _299 = _281;
            _301 = uint(_293) >= 30u;
            if (_301)
            {
                break;
            }
            int _303 = _293 << 4;
            uint _305 = uint(int(uint(_303 + 7360) >> uint(2)));
            int _307 = int(_305) + 1;
            uint _309 = uint(int(uint(_303 + 7368) >> uint(2)));
            float _311 = (-_189) + fp_c10_1._m0[int(uint(int(_305)) >> uint(2))][int(_305) & 3];
            float _313 = fp_c10_1._m0[int(uint(_307) >> uint(2))][_307 & 3] + (-_65.y);
            float _315 = (-_193) + fp_c10_1._m0[int(uint(int(_309)) >> uint(2))][int(_309) & 3];
            float _317 = fma(_315, _315, fma(_313, _313, _311 * _311));
            float _319 = _311 * inversesqrt(_317);
            float _321 = _313 * inversesqrt(_317);
            float _323 = _315 * inversesqrt(_317);
            float _325 = _129 + _319;
            float _327 = _135 + _321;
            float _329 = _147 + _323;
            float _331 = inversesqrt(fma(_329, _329, fma(_327, _327, _325 * _325)));
            uint _333 = uint(int(uint(_303 + 8320) >> uint(2)));
            float _335 = _325 * _331;
            float _337 = _327 * _331;
            float _339 = _329 * _331;
            uint _341 = uint(int(uint(_303 + 6880) >> uint(2)));
            int _343 = int(_341) + 1;
            uint _345 = uint(int(uint(_303 + 6408) >> uint(2)));
            float _347 = max(fma(_141, _339, fma(_133, _337, _123 * _335)), fp_c1_1._m0[0].y) * max(fma(_141, _339, fma(_133, _337, _123 * _335)), fp_c1_1._m0[0].y);
            float _349 = max(fma(_147, _339, fma(_135, _337, _129 * _335)), fp_c1_1._m0[0].y);
            float _351 = fma(_141, _323, fma(_133, _321, _123 * _319));
            float _353 = max(_351, fp_c1_1._m0[0].y);
            uint _355 = uint(int(uint(_303 + 6400) >> uint(2)));
            int _357 = int(_355) + 1;
            bool _359 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_333)) >> uint(2))][int(_333) & 3]) != 0;
            float _361 = _77.w;
            float _363 = exp2(_349 * fma(_349, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _365 = fp_c10_1._m0[int(uint(_343) >> uint(2))][_343 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_341)) >> uint(2))][int(_341) & 3], -sqrt(_317), fp_c1_1._m0[0].w), 0.0, 1.0));
            float _367 = ((1.0 / (_234 + fma(_234, -_169, _169))) * (1.0 / (_234 + fma(_234, -_353, _353)))) * ((_221 * (1.0 / max(fma(_230, _347, -_347) + 1.0, fp_c1_1._m0[0].y))) * (_221 * (1.0 / max(fma(_230, _347, -_347) + 1.0, fp_c1_1._m0[0].y))));
            float _369 = _365;
            if (!_359)
            {
                _369 = 1.0;
            }
            float _371 = _369;
            if (_359)
            {
                uint _373 = uint(int(uint(_303 + 7840) >> uint(2)));
                int _375 = int(_373) + 1;
                uint _377 = uint(int(uint(_303 + 6888) >> uint(2)));
                float _379 = fp_c10_1._m0[int(uint(int(_377)) >> uint(2))][int(_377) & 3];
                int _381 = int(_377) + 1;
                uint _383 = uint(int(uint(_303 + 7848) >> uint(2)));
                _371 = exp2(fp_c10_1._m0[int(uint(_381) >> uint(2))][_381 & 3] * log2(clamp(((-_379) + fma(_323, -fp_c10_1._m0[int(uint(int(_383)) >> uint(2))][int(_383) & 3], fma(_321, -fp_c10_1._m0[int(uint(_375) >> uint(2))][_375 & 3], _319 * (-fp_c10_1._m0[int(uint(int(_373)) >> uint(2))][int(_373) & 3])))) * (1.0 / ((-_379) + 1.0)), 0.0, 1.0)));
            }
            _385 = _291 + 1;
            float _387 = (exp2(_365) * _371) * clamp(_351 + (-0.0), 0.0, 1.0);
            float _389 = fma(fp_c10_1._m0[int(uint(_357) >> uint(2))][_357 & 3] * _387, fma(_263 * _361, fp_c1_1._m0[1].x, ((_203 + fma(_203, -_363, _363)) * _367) * 0.079577468335628509521484375), _277);
            float _391 = fma(fp_c10_1._m0[int(uint(int(_355)) >> uint(2))][int(_355) & 3] * _387, fma(_250 * _361, fp_c1_1._m0[1].x, ((_201 + fma(_201, -_363, _363)) * _367) * 0.079577468335628509521484375), _279);
            float _393 = fma(fp_c10_1._m0[int(uint(int(_345)) >> uint(2))][int(_345) & 3] * _387, fma(_257 * _361, fp_c1_1._m0[1].x, ((_205 + fma(_205, -_363, _363)) * _367) * 0.079577468335628509521484375), _281);
            _289 = int(uint(_289) >> uint(8));
            _291 = _385;
            _277 = _389;
            _279 = _391;
            _281 = _393;
            _295 = _391;
            _297 = _389;
            _299 = _393;
        } while (!(_385 >= 4));
        _301 = false;
        _283 = _295;
        _285 = _297;
        _287 = _299;
        if ((_289 & 255) == 30)
        {
            float _395 = _65.y;
            float _397 = 1.0 / (fma(_193, fp_c10_1._m0[565].z, fma(_395, fp_c10_1._m0[565].y, _189 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _399 = 1.0 / fp_c10_1._m0[561].y;
            float _401 = _193 + (-fp_c10_1._m0[557].z);
            float _403 = fma(_234, -_169, _169);
            float _405 = _401 * fp_c10_1._m0[558].x;
            float _407 = (-_189) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_399, fp_c10_1._m0[557].x);
            float _409 = (-_193) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_399, fp_c10_1._m0[557].z);
            float _411 = _407 * _407;
            float _413 = _189 + (-fp_c10_1._m0[557].x);
            float _415 = _413 * fp_c10_1._m0[558].z;
            float _417 = sqrt(fma(_409, _409, _411)) * (-fp_c10_1._m0[558].y);
            float _419 = fma(_401, _401, _413 * _413);
            float _421 = inversesqrt(fma(_409, _409, fma(_417, _417, _411)));
            float _423 = ((-float(_405 < _415)) + float(_405 > _415)) * fp_c10_1._m0[561].y;
            float _425 = _407 * _421;
            float _427 = _417 * _421;
            float _429 = _129 + _425;
            float _431 = _135 + _427;
            float _433 = _409 * _421;
            float _435 = fma(_401, fp_c10_1._m0[558].z, _413 * fp_c10_1._m0[558].x);
            float _437 = _147 + _433;
            float _439 = inversesqrt(fma(_433, _433, _425 * _425));
            bool _441 = _435 > 0.0;
            bool _443 = fma(_401 * inversesqrt(_419), fp_c10_1._m0[558].z, (_413 * inversesqrt(_419)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _445 = inversesqrt(fma(_437, _437, fma(_431, _431, _429 * _429)));
            float _447 = _419;
            float _449 = _403;
            if (_441)
            {
                _447 = sqrt(_419);
            }
            float _451 = _447;
            if (!_441)
            {
                _451 = 1.0;
            }
            float _453 = _429 * _445;
            float _455 = _431 * _445;
            float _457 = _437 * _445;
            float _459 = clamp(fma(_435 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].w), 0.0, 1.0) * clamp(fma(_435 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].w), 0.0, 1.0);
            float _461 = fma(_141, _433, fma(_133, _427, _123 * _425));
            float _463 = max(_461, fp_c1_1._m0[0].y);
            float _465 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_413, fma(_423, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_401 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_423 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_413, fma(_423, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_401 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_423 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _467 = max(fma(_141, _457, fma(_133, _455, _123 * _453)), fp_c1_1._m0[0].y) * max(fma(_141, _457, fma(_133, _455, _123 * _453)), fp_c1_1._m0[0].y);
            float _469 = _77.w;
            float _471 = max(fma(_147, _457, fma(_135, _455, _129 * _453)), fp_c1_1._m0[0].y);
            if (_443)
            {
                _449 = fma(_465, -_465, fp_c1_1._m0[0].w) * fma(_465, -_465, fp_c1_1._m0[0].w);
            }
            float _473 = _449;
            if (!_443)
            {
                _473 = 1.0;
            }
            float _475 = exp2(_471 * fma(_471, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _477 = ((1.0 / (_234 + _403)) * (1.0 / (_234 + fma(_234, -_463, _463)))) * ((_221 * (1.0 / max(fma(_230, _467, -_467) + 1.0, fp_c1_1._m0[0].y))) * (_221 * (1.0 / max(fma(_230, _467, -_467) + 1.0, fp_c1_1._m0[0].y))));
            float _479 = (min(fma(_459, -_459, fp_c1_1._m0[0].w) * fma(_459, -_459, fp_c1_1._m0[0].w), _473) * (exp2(log2(clamp(fma(_451, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_433 * _439, -fp_c10_1._m0[558].z, (_425 * _439) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_461 + (-0.0), 0.0, 1.0);
            float _481 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_193, fp_c10_1._m0[562].z, fma(_395, fp_c10_1._m0[562].y, _189 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _397, 0.5, 0.5), (-fma((fma(_193, fp_c10_1._m0[563].z, fma(_395, fp_c10_1._m0[563].y, _189 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _397, 0.5, 0.5)) + 1.0)).z > fma((fma(_193, fp_c10_1._m0[564].z, fma(_395, fp_c10_1._m0[564].y, _189 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _397, 0.5, 0.5)) || (_435 <= 0.0));
            _283 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _479) * fma(_250 * _469, fp_c1_1._m0[1].x, ((_201 + fma(_201, -_475, _475)) * _477) * 0.079577468335628509521484375), _481, _295);
            _285 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _479) * fma(_263 * _469, fp_c1_1._m0[1].x, ((_203 + fma(_203, -_475, _475)) * _477) * 0.079577468335628509521484375), _481, _297);
            _287 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _479) * fma(_257 * _469, fp_c1_1._m0[1].x, ((_205 + fma(_205, -_475, _475)) * _477) * 0.079577468335628509521484375), _481, _299);
        }
    }
    float _483 = _189 + (-fp_c3_1._m0[11].w);
    float _485 = _193 + (-fp_c3_1._m0[13].w);
    float _487 = _65.y + (-fp_c3_1._m0[12].w);
    float _489 = fma(_485, _485, fma(_487, _487, _483 * _483));
    float _491 = exp2(log2(clamp(sqrt(_489) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_485 * inversesqrt(_489), fp_c5_1._m0[23].z, fma(_487 * inversesqrt(_489), fp_c5_1._m0[23].y, (_483 * inversesqrt(_489)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _493 = clamp(fma(_275, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _495 = fma(_275, (_236 * fp_c5_1._m0[5].x) * fma(_250 * 0.3183098733425140380859375, _248, ((_201 + fma(_201, -_242, _242)) * _246) * 0.079577468335628509521484375), _283);
    float _497 = fma(_275, (_236 * fp_c5_1._m0[5].y) * fma(_263 * 0.3183098733425140380859375, _248, ((_203 + fma(_203, -_242, _242)) * _246) * 0.079577468335628509521484375), _285);
    float _499 = fma(_275, (_236 * fp_c5_1._m0[5].z) * fma(_257 * 0.3183098733425140380859375, _248, ((_205 + fma(_205, -_242, _242)) * _246) * 0.079577468335628509521484375), _287);
    float _501 = clamp((-exp2((clamp(fma(sqrt(_489), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _80.x = fma(fma(fma((_491 * fp_c7_1._m0[55].x) * _493, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_495), _501, _495);
    _80.y = fma(fma(fma((_491 * fp_c7_1._m0[55].y) * _493, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_497), _501, _497);
    _80.z = fma(fma(fma((_491 * fp_c7_1._m0[55].z) * _493, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_499), _501, _499);
    _80.w = 1.0;
}


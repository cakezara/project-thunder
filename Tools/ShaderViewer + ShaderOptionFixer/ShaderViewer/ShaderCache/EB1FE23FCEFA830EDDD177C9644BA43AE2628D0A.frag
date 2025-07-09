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

layout(binding = 0) uniform sampler2D fp_tex_tcb_E;
layout(binding = 1) uniform sampler2D fp_tex_tcb_28;
layout(binding = 2) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 3) uniform sampler2DArrayShadow fp_tex_tcb_2E;
layout(binding = 4) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 5) uniform sampler2D fp_tex_tcb_38;
layout(binding = 6) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _61;
layout(location = 4) in vec4 _63;
layout(location = 0) in vec4 _65;
layout(location = 7) in vec4 _67;
layout(location = 8) in vec4 _69;
layout(location = 9) in vec4 _71;
layout(location = 1) in vec4 _73;
layout(location = 3) in vec4 _75;
layout(location = 5) in vec4 _77;
layout(location = 2) in vec4 _79;
layout(location = 0) out vec4 _82;
uint _6[12];

void main()
{
    bool _327 = false;
    float _89 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _91 = 1.0 / (_61.z * gl_FragCoord.w);
    float _93 = _63.w;
    float _95 = float((abs(((-_93) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_93) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_93) > fp_c3_1._m0[58].y) ? (-1) : 0));
    bool _99 = _95 == 0.0;
    float _101 = 0.0;
    float _103 = _93;
    if (_99)
    {
        _101 = _69.w;
    }
    float _105 = _101;
    if (!_99)
    {
        _105 = _71.w;
    }
    if (_99)
    {
        _103 = _69.z;
    }
    float _107 = _103;
    if (!_99)
    {
        _107 = _71.z;
    }
    float _109 = 1.0 / (_67.w * gl_FragCoord.w);
    float _111 = 0.0;
    if (_99)
    {
        _111 = _69.x;
    }
    float _113 = 0.0;
    float _115 = _111;
    if (_99)
    {
        _113 = _69.y;
    }
    float _117 = _113;
    if (!_99)
    {
        _115 = _71.x;
    }
    if (!_99)
    {
        _117 = _71.y;
    }
    float _119 = 1.0 / _105;
    vec2 _123 = texture(fp_tex_tcb_E, vec2(_65.x, _65.y)).xy;
    float _125 = _123.x;
    float _127 = _123.y;
    vec2 _129 = texture(fp_tex_tcb_2C, vec2((_67.x * gl_FragCoord.w) * _109, (_67.y * gl_FragCoord.w) * _109)).xy;
    float _131 = _129.x;
    float _133 = _73.x;
    float _135 = _73.y;
    float _137 = _73.z;
    float _139 = _75.y;
    float _141 = _75.z;
    float _143 = _75.x;
    float _145 = _75.w;
    float _147 = _77.z;
    float _149 = _77.x;
    float _151 = inversesqrt(fma(_137, _137, fma(_135, _135, _133 * _133)));
    float _153 = _137 * _151;
    float _155 = _133 * _151;
    float _157 = _135 * _151;
    float _159 = _77.y;
    float _161 = sqrt(clamp((-fma(_125, _125, _127 * _127)) + 1.0, 0.0, 1.0));
    float _163 = fma(_155, _161, fma(_143, _125, _127 * (fma(_157, _141, -(_153 * _139)) * _145)));
    float _165 = fma(_157, _161, fma(_139, _125, _127 * (fma(_153, _143, -(_155 * _141)) * _145)));
    float _167 = fma(_153, _161, fma(_141, _125, _127 * (fma(_155, _139, -(_157 * _143)) * _145)));
    float _169 = inversesqrt(fma(_147, _147, fma(_159, _159, _149 * _149)));
    float _171 = inversesqrt(fma(_167, _167, fma(_165, _165, _163 * _163)));
    float _173 = _149 * (-_169);
    float _175 = _159 * (-_169);
    float _177 = _147 * (-_169);
    float _179 = _163 * _171;
    float _181 = _165 * _171;
    float _183 = _167 * _171;
    float _185 = fma(_183, _177, fma(_181, _175, _179 * _173));
    float _187 = fma(_179 * (-_185), -2.0, -_173);
    float _189 = fma(_181 * (-_185), -2.0, -_175);
    float _191 = fma(_183 * (-_185), -2.0, -_177);
    float _193 = max(_185, fp_c1_1._m0[0].y);
    float _195 = 1.0 / max(abs(_191), max(abs(_187), abs(_189)));
    vec2 _197 = texture(fp_tex_tcb_38, vec2(_193, (-_89) + (-0.0))).xy;
    float _199 = _197.x;
    float _201 = _197.y;
    vec3 _205 = texture(fp_tex_tcb_36, vec4(_187 * _195, _189 * _195, _191 * _195, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_89 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _207 = _63.x;
    float _209 = _63.z;
    float _211 = _175 * _173;
    float _213 = _175 * _177;
    float _215 = _173 + (-fp_c5_1._m0[23].x);
    float _217 = _177 + (-fp_c5_1._m0[23].z);
    float _219 = _177 * _173;
    float _221 = _175 + (-fp_c5_1._m0[23].y);
    float _223 = fma(_131, -_131, _129.y);
    float _225 = fma(fp_c6_1._m0[7].y + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _227 = inversesqrt(fma(_217, _217, fma(_221, _221, _215 * _215)));
    float _229 = _177 * _177;
    float _231 = fma(fp_c6_1._m0[7].z + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _233 = fma(fp_c6_1._m0[7].x + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _235 = _215 * _227;
    float _237 = _221 * _227;
    int _240 = max(0, min(int(trunc((_209 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _242 = _217 * _227;
    float _244 = fma(_173, _173, -(_175 * _175));
    float _246 = max(fma(_177, _242, fma(_175, _237, _173 * _235)), fp_c1_1._m0[0].y);
    float _248 = _181 * _179;
    float _250 = _181 * _183;
    float _252 = _183 * _183;
    float _254 = fma(_89, 0.5, 0.5);
    float _256 = _183 * _179;
    float _258 = _89 * _89;
    float _260 = fma(_181, -fp_c5_1._m0[23].y, _179 * (-fp_c5_1._m0[23].x));
    float _262 = _258 * _258;
    float _264 = max(fma(_183, _242, fma(_181, _237, _179 * _235)), fp_c1_1._m0[0].y) * max(fma(_183, _242, fma(_181, _237, _179 * _235)), fp_c1_1._m0[0].y);
    float _266 = (_254 * 0.5) * _254;
    float _268 = max(fma(_183, -fp_c5_1._m0[23].z, _260), fp_c1_1._m0[0].y);
    float _270 = clamp(fma(_183, -fp_c5_1._m0[23].z, _260), 0.0, 1.0);
    float _272 = clamp(_67.z, 0.0, 1.0);
    float _274 = fma(_179, _179, -(_181 * _181));
    float _276 = 1.0 / (_266 + fma(_193, -_266, _193));
    float _278 = exp2(_246 * fma(_246, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _280 = (_276 * (1.0 / (_266 + fma(_266, -_268, _268)))) * ((_258 * (1.0 / max(fma(_262, _264, -_264) + 1.0, fp_c1_1._m0[0].y))) * (_258 * (1.0 / max(fma(_262, _264, -_264) + 1.0, fp_c1_1._m0[0].y))));
    float _282 = exp2(log2(clamp((-_185) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
    float _284 = fma(max(0.0, fma(_244, fp_c5_1._m0[31].y, (fma(_177, -fp_c5_1._m0[26].z, fma(_175, -fp_c5_1._m0[26].y, _173 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_219, fp_c5_1._m0[29].w, fma(_229, fp_c5_1._m0[29].z, fma(_213, fp_c5_1._m0[29].y, _211 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[45].y, _282, fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y));
    float _286 = fma(max(0.0, fma(_244, fp_c5_1._m0[31].x, (fma(_177, -fp_c5_1._m0[25].z, fma(_175, -fp_c5_1._m0[25].y, _173 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_219, fp_c5_1._m0[28].w, fma(_229, fp_c5_1._m0[28].z, fma(_213, fp_c5_1._m0[28].y, _211 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[45].x, _282, fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x));
    float _288 = fma(max(0.0, fma(_244, fp_c5_1._m0[31].z, (fma(_177, -fp_c5_1._m0[27].z, fma(_175, -fp_c5_1._m0[27].y, _173 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_219, fp_c5_1._m0[30].w, fma(_229, fp_c5_1._m0[30].z, fma(_213, fp_c5_1._m0[30].y, _211 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[45].z, _282, fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z));
    uint _291 = uint(int(uint((((int(uint(_240) >> uint(16)) * 20) << 16) + (((_240 & 65535) * 20) + max(0, min(int(trunc((_207 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _293 = fp_c10_1._m0[int(uint(int(_291)) >> uint(2))][int(_291) & 3];
    float _295 = fma(_205.x, fma(_233, _199, _201), max(0.0, fma(_274, fp_c5_1._m0[31].x, (fma(_183, fp_c5_1._m0[25].z, fma(_181, fp_c5_1._m0[25].y, _179 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_256, fp_c5_1._m0[28].w, fma(_252, fp_c5_1._m0[28].z, fma(_250, fp_c5_1._m0[28].y, _248 * fp_c5_1._m0[28].x))))) * fma(_286, -_233, _286));
    float _297 = fma(_205.y, fma(_225, _199, _201), max(0.0, fma(_274, fp_c5_1._m0[31].y, (fma(_183, fp_c5_1._m0[26].z, fma(_181, fp_c5_1._m0[26].y, _179 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_256, fp_c5_1._m0[29].w, fma(_252, fp_c5_1._m0[29].z, fma(_250, fp_c5_1._m0[29].y, _248 * fp_c5_1._m0[29].x))))) * fma(_284, -_225, _284));
    float _299 = fma(_205.z, fma(_231, _199, _201), max(0.0, fma(_274, fp_c5_1._m0[31].z, (fma(_183, fp_c5_1._m0[27].z, fma(_181, fp_c5_1._m0[27].y, _179 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_256, fp_c5_1._m0[30].w, fma(_252, fp_c5_1._m0[30].z, fma(_250, fp_c5_1._m0[30].y, _248 * fp_c5_1._m0[30].x))))) * fma(_288, -_231, _288));
    float _301 = clamp((-(max((-max(min(_223 * (1.0 / fma((-_131) + _272, (-_131) + _272, _223)), 1.0), float(_272 <= _131))) + 1.0, (-texture(fp_tex_tcb_2E, vec4(vec3(_119 * _115, _119 * _117, float(int(clamp(uint(max(roundEven(_95), 0.0)), 0u, 65535u)))), _119 * _107))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_61.x * gl_FragCoord.w) * _91, (_61.y * gl_FragCoord.w) * _91)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _303 = _299;
    float _305 = _295;
    float _307 = _297;
    float _309 = _297;
    float _311 = _295;
    float _313 = _299;
    if (floatBitsToInt(_293) != (-1))
    {
        int _315 = floatBitsToInt(_293);
        int _317 = 0;
        float _321;
        float _323;
        float _325;
        int _409;
        do
        {
            int _319 = _315 & 255;
            _321 = _305;
            _323 = _307;
            _325 = _303;
            _327 = uint(_319) >= 30u;
            if (_327)
            {
                break;
            }
            int _329 = _319 << 4;
            uint _331 = uint(int(uint(_329 + 7360) >> uint(2)));
            int _333 = int(_331) + 1;
            uint _335 = uint(int(uint(_329 + 7368) >> uint(2)));
            float _337 = (-_207) + fp_c10_1._m0[int(uint(int(_331)) >> uint(2))][int(_331) & 3];
            float _339 = fp_c10_1._m0[int(uint(_333) >> uint(2))][_333 & 3] + (-_63.y);
            float _341 = (-_209) + fp_c10_1._m0[int(uint(int(_335)) >> uint(2))][int(_335) & 3];
            float _343 = fma(_341, _341, fma(_339, _339, _337 * _337));
            float _345 = _337 * inversesqrt(_343);
            float _347 = _339 * inversesqrt(_343);
            float _349 = _341 * inversesqrt(_343);
            float _351 = _173 + _345;
            float _353 = _175 + _347;
            float _355 = _177 + _349;
            uint _357 = uint(int(uint(_329 + 6880) >> uint(2)));
            int _359 = int(_357) + 1;
            float _361 = inversesqrt(fma(_355, _355, fma(_353, _353, _351 * _351)));
            float _363 = _351 * _361;
            float _365 = _353 * _361;
            float _367 = _355 * _361;
            uint _369 = uint(int(uint(_329 + 8320) >> uint(2)));
            float _371 = max(fma(_183, _367, fma(_181, _365, _179 * _363)), fp_c1_1._m0[0].y) * max(fma(_183, _367, fma(_181, _365, _179 * _363)), fp_c1_1._m0[0].y);
            float _373 = max(fma(_177, _367, fma(_175, _365, _173 * _363)), fp_c1_1._m0[0].y);
            float _375 = fma(_183, _349, fma(_181, _347, _179 * _345));
            float _377 = max(_375, fp_c1_1._m0[0].y);
            uint _379 = uint(int(uint(_329 + 6400) >> uint(2)));
            int _381 = int(_379) + 1;
            uint _383 = uint(int(uint(_329 + 6408) >> uint(2)));
            float _385 = exp2(_373 * fma(_373, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _387 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_369)) >> uint(2))][int(_369) & 3]) != 0;
            float _389 = ((_258 * (1.0 / max(fma(_262, _371, -_371) + 1.0, fp_c1_1._m0[0].y))) * (_258 * (1.0 / max(fma(_262, _371, -_371) + 1.0, fp_c1_1._m0[0].y)))) * (_276 * (1.0 / (_266 + fma(_266, -_377, _377))));
            float _391 = _225 + fma(_225, -_385, _385);
            float _393 = _391;
            if (!_387)
            {
                _393 = 1.0;
            }
            float _395 = _393;
            if (_387)
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
            float _411 = clamp(_375 + (-0.0), 0.0, 1.0) * (exp2(fp_c10_1._m0[int(uint(_359) >> uint(2))][_359 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_357)) >> uint(2))][int(_357) & 3], -sqrt(_343), fp_c1_1._m0[1].x), 0.0, 1.0))) * _395);
            float _413 = fma(fp_c10_1._m0[int(uint(int(_383)) >> uint(2))][int(_383) & 3] * _411, fma(_288, fp_c1_1._m0[1].y, ((_231 + fma(_231, -_385, _385)) * _389) * 0.079577468335628509521484375), _303);
            float _415 = fma(fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3] * _411, fma(_286, fp_c1_1._m0[1].y, ((_233 + fma(_233, -_385, _385)) * _389) * 0.079577468335628509521484375), _305);
            float _417 = fma(fp_c10_1._m0[int(uint(_381) >> uint(2))][_381 & 3] * _411, fma(_284, fp_c1_1._m0[1].y, (_391 * _389) * 0.079577468335628509521484375), _307);
            _315 = int(uint(_315) >> uint(8));
            _317 = _409;
            _303 = _413;
            _305 = _415;
            _307 = _417;
            _321 = _415;
            _323 = _417;
            _325 = _413;
        } while (!(_409 >= 4));
        _327 = false;
        _309 = _323;
        _311 = _321;
        _313 = _325;
        if ((_315 & 255) == 30)
        {
            float _419 = _63.y;
            float _421 = 1.0 / (fma(_209, fp_c10_1._m0[565].z, fma(_419, fp_c10_1._m0[565].y, _207 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _423 = 1.0 / fp_c10_1._m0[561].y;
            float _425 = _209 + (-fp_c10_1._m0[557].z);
            float _427 = (-_207) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_423, fp_c10_1._m0[557].x);
            float _429 = (-_209) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_423, fp_c10_1._m0[557].z);
            float _431 = _207 + (-fp_c10_1._m0[557].x);
            float _433 = _425 * fp_c10_1._m0[558].x;
            float _435 = _427 * _427;
            float _437 = _431 * fp_c10_1._m0[558].z;
            float _439 = sqrt(fma(_429, _429, _435)) * (-fp_c10_1._m0[558].y);
            float _441 = inversesqrt(fma(_429, _429, fma(_439, _439, _435)));
            float _443 = _427 * _441;
            float _445 = _439 * _441;
            float _447 = _429 * _441;
            float _449 = _173 + _443;
            float _451 = _175 + _445;
            float _453 = ((-float(_433 < _437)) + float(_433 > _437)) * fp_c10_1._m0[561].y;
            float _455 = _177 + _447;
            float _457 = fma(_183, _447, fma(_181, _445, _179 * _443));
            float _459 = inversesqrt(fma(_455, _455, fma(_451, _451, _449 * _449)));
            float _461 = _449 * _459;
            float _463 = _451 * _459;
            float _465 = _455 * _459;
            float _467 = fma(_425, _425, _431 * _431);
            float _469 = max(fma(_177, _465, fma(_175, _463, _173 * _461)), fp_c1_1._m0[0].y);
            float _471 = fma(_425, fp_c10_1._m0[558].z, _431 * fp_c10_1._m0[558].x);
            bool _473 = _471 > 0.0;
            float _475 = inversesqrt(fma(_447, _447, _443 * _443));
            float _477 = max(fma(_183, _465, fma(_181, _463, _179 * _461)), fp_c1_1._m0[0].y) * max(fma(_183, _465, fma(_181, _463, _179 * _461)), fp_c1_1._m0[0].y);
            float _479 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_431, fma(_453, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_425 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_453 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_431, fma(_453, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_425 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_453 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _481 = _447;
            if (_473)
            {
                _481 = sqrt(_467);
            }
            float _483 = _481;
            if (!_473)
            {
                _483 = 1.0;
            }
            bool _485 = fma(_425 * inversesqrt(_467), fp_c10_1._m0[558].z, (_431 * inversesqrt(_467)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _487 = fma(_479, -_479, fp_c1_1._m0[1].x);
            float _489 = max(_457, fp_c1_1._m0[0].y);
            float _491 = exp2(_469 * fma(_469, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _493 = _487;
            if (_485)
            {
                _493 = _487 * _487;
            }
            float _495 = _493;
            if (!_485)
            {
                _495 = 1.0;
            }
            float _497 = clamp(fma(_471 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_471 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _499 = (_276 * (1.0 / (_266 + fma(_266, -_489, _489)))) * ((_258 * (1.0 / max(fma(_262, _477, -_477) + 1.0, fp_c1_1._m0[0].y))) * (_258 * (1.0 / max(fma(_262, _477, -_477) + 1.0, fp_c1_1._m0[0].y))));
            float _501 = clamp(_457 + (-0.0), 0.0, 1.0) * ((exp2(log2(clamp(fma(_483, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_447 * _475, -fp_c10_1._m0[558].z, (_443 * _475) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_497, -_497, fp_c1_1._m0[1].x) * fma(_497, -_497, fp_c1_1._m0[1].x), _495));
            float _503 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_209, fp_c10_1._m0[562].z, fma(_419, fp_c10_1._m0[562].y, _207 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _421, 0.5, 0.5), (-fma((fma(_209, fp_c10_1._m0[563].z, fma(_419, fp_c10_1._m0[563].y, _207 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _421, 0.5, 0.5)) + 1.0)).z > fma((fma(_209, fp_c10_1._m0[564].z, fma(_419, fp_c10_1._m0[564].y, _207 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _421, 0.5, 0.5)) || (_471 <= 0.0));
            _309 = fma(fma(_284, fp_c1_1._m0[1].y, ((_225 + fma(_225, -_491, _491)) * _499) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _501), _503, _323);
            _311 = fma(fma(_286, fp_c1_1._m0[1].y, ((_233 + fma(_233, -_491, _491)) * _499) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _501), _503, _321);
            _313 = fma(fma(_288, fp_c1_1._m0[1].y, ((_231 + fma(_231, -_491, _491)) * _499) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _501), _503, _325);
        }
    }
    float _505 = _207 + (-fp_c3_1._m0[11].w);
    float _507 = _63.y;
    float _509 = _209 + (-fp_c3_1._m0[13].w);
    float _511 = fma(_301, fma(_280 * (_225 + fma(_225, -_278, _278)), fp_c1_1._m0[0].w, _284 * 0.3183098733425140380859375) * (_270 * fp_c5_1._m0[5].y), _309);
    float _513 = fma(_301, fma(_280 * (_233 + fma(_233, -_278, _278)), fp_c1_1._m0[0].w, _286 * 0.3183098733425140380859375) * (_270 * fp_c5_1._m0[5].x), _311);
    float _515 = fma(_301, fma(_280 * (_231 + fma(_231, -_278, _278)), fp_c1_1._m0[0].w, _288 * 0.3183098733425140380859375) * (_270 * fp_c5_1._m0[5].z), _313);
    float _517 = _507 + (-fp_c3_1._m0[12].w);
    float _519 = fma(_509, _509, fma(_517, _517, _505 * _505));
    float _521 = clamp(_79.w, 0.0, 1.0);
    float _523 = clamp(fma(fma(_209, fp_c5_1._m0[14].z, fma(_507, fp_c5_1._m0[14].y, _207 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _525 = exp2(fma(fma(_509 * inversesqrt(_519), fp_c5_1._m0[23].z, fma(_517 * inversesqrt(_519), fp_c5_1._m0[23].y, (_505 * inversesqrt(_519)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_519) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _527 = clamp(fma(_301, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _529 = fma((-_513) + fp_c5_1._m0[13].x, _523, _513);
    float _531 = fma((-_511) + fp_c5_1._m0[13].y, _523, _511);
    float _533 = fma((-_515) + fp_c5_1._m0[13].z, _523, _515);
    float _535 = clamp((-exp2((clamp(fma(sqrt(_519), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _82.x = fma(_535, (-_529) + fma(fma((_525 * fp_c7_1._m0[55].x) * _527, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _529);
    _82.y = fma(_535, (-_531) + fma(fma((_525 * fp_c7_1._m0[55].y) * _527, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _531);
    _82.z = fma(_535, (-_533) + fma(fma((_525 * fp_c7_1._m0[55].z) * _527, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _533);
    _82.w = fma(_535, -_521, _521);
}


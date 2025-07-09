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

layout(binding = 0) uniform sampler2D fp_tex_tcb_22;
layout(binding = 1) uniform sampler2D fp_tex_tcb_24;
layout(binding = 2) uniform sampler2D fp_tex_tcb_28;
layout(binding = 3) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 4) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 5) uniform sampler2D fp_tex_tcb_38;
layout(binding = 6) uniform sampler2D fp_tex_tcb_44;

layout(location = 4) in vec4 _58;
layout(location = 0) in vec4 _60;
layout(location = 2) in vec4 _62;
layout(location = 5) in vec4 _64;
layout(location = 3) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 0) out vec4 _71;
uint _6[12];

void main()
{
    bool _265 = false;
    float _78 = 1.0 / (_58.z * gl_FragCoord.w);
    float _80 = _60.x;
    float _82 = _62.x;
    float _84 = _60.y;
    float _86 = _62.y;
    float _88 = _60.z;
    float _90 = _62.z;
    float _92 = inversesqrt(fma(_88, _88, fma(_84, _84, _80 * _80)));
    float _94 = inversesqrt(fma(_90, _90, fma(_86, _86, _82 * _82)));
    float _96 = _80 * _92;
    float _98 = _82 * (-_94);
    float _100 = _84 * _92;
    float _102 = _86 * (-_94);
    float _104 = _88 * _92;
    float _106 = _90 * (-_94);
    float _108 = 1.0 / _66.w;
    float _110 = fma(_104, _106, fma(_100, _102, _96 * _98));
    float _112 = max(_110, fp_c1_1._m0[0].x);
    float _114 = fma(_96 * (-_110), -2.0, -_98);
    float _116 = fma(_100 * (-_110), -2.0, -_102);
    float _118 = fma(_104 * (-_110), -2.0, -_106);
    float _120 = 1.0 / max(abs(_118), max(abs(_114), abs(_116)));
    vec2 _124 = texture(fp_tex_tcb_2A, vec2(fma(_66.x * _108, 0.5, 0.5), fma(_66.y * _108, -0.5, 0.5))).xy;
    vec2 _126 = texture(fp_tex_tcb_38, vec2(_112, (-0.0) + (-fp_c6_1._m0[83].w))).xy;
    float _128 = _126.x;
    float _130 = _126.y;
    vec3 _134 = texture(fp_tex_tcb_36, vec4(_114 * _120, _116 * _120, _118 * _120, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(fp_c6_1._m0[83].w * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _136 = texture(fp_tex_tcb_22, vec2(_64.x, _64.y)).xy;
    vec4 _139 = texture(fp_tex_tcb_24, vec2(_64.z, _64.w)).xyzw;
    float _141 = _139.w;
    float _143 = _98 + (-fp_c5_1._m0[23].x);
    float _145 = _68.z;
    float _147 = _102 + (-fp_c5_1._m0[23].y);
    float _149 = _106 + (-fp_c5_1._m0[23].z);
    float _151 = inversesqrt(fma(_149, _149, fma(_147, _147, _143 * _143)));
    float _153 = _143 * _151;
    float _155 = _147 * _151;
    float _157 = _149 * _151;
    float _159 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[83].x, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _161 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[83].y, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _163 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[83].z, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _165 = _68.x;
    float _167 = _96 * _100;
    float _169 = fma(fp_c6_1._m0[83].w, 0.5, 0.5);
    float _171 = _100 * _104;
    float _173 = max(fma(_106, _157, fma(_102, _155, _98 * _153)), fp_c1_1._m0[0].x);
    float _175 = fp_c6_1._m0[83].w * fp_c6_1._m0[83].w;
    float _177 = _104 * _104;
    float _179 = max(fma(_104, _157, fma(_100, _155, _96 * _153)), fp_c1_1._m0[0].x) * max(fma(_104, _157, fma(_100, _155, _96 * _153)), fp_c1_1._m0[0].x);
    float _181 = fma(_100, -fp_c5_1._m0[23].y, _96 * (-fp_c5_1._m0[23].x));
    float _183 = (_169 * 0.5) * _169;
    float _185 = max(fma(_104, -fp_c5_1._m0[23].z, _181), fp_c1_1._m0[0].x);
    float _187 = _96 * _104;
    float _189 = 1.0 / (_183 + fma(_112, -_183, _112));
    float _191 = exp2(_173 * fma(_173, fp_c1_1._m0[0].y, -6.9831600189208984375));
    float _193 = clamp(fma(_104, -fp_c5_1._m0[23].z, _181), 0.0, 1.0);
    int _196 = max(0, min(int(trunc((_145 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _198 = fma(_96, _96, -(_100 * _100));
    float _200 = (_189 * (1.0 / (_183 + fma(_183, -_185, _185)))) * ((_175 * (1.0 / max(fma(_179, _175 * _175, -_179) + 1.0, fp_c1_1._m0[0].x))) * (_175 * (1.0 / max(fma(_179, _175 * _175, -_179) + 1.0, fp_c1_1._m0[0].x))));
    float _202 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[83].x, fp_c6_1._m0[83].x);
    float _204 = _58.w;
    uint _207 = uint(int(uint((((int(uint(_196) >> uint(16)) * 20) << 16) + (((_196 & 65535) * 20) + max(0, min(int(trunc((_165 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _209 = fp_c10_1._m0[int(uint(int(_207)) >> uint(2))][int(_207) & 3];
    float _211 = fma(_159, -_202, _202);
    float _213 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[83].y, fp_c6_1._m0[83].y);
    float _215 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[83].z, fp_c6_1._m0[83].z);
    float _217 = fma(_161, -_213, _213);
    float _219 = fma(_163, -_215, _215);
    float _221 = ((_139.y * _141) * _204) * 32.0;
    float _223 = ((_139.z * _141) * _204) * 32.0;
    float _225 = clamp(_204 * clamp(fma(_136.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _227 = ((_139.x * _141) * _204) * 32.0;
    float _229 = fma(_217, _221, fma(_134.y, fma(_161, _128, _130), max(0.0, fma(_198, fp_c5_1._m0[31].y, (fma(_104, fp_c5_1._m0[26].z, fma(_100, fp_c5_1._m0[26].y, _96 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_187, fp_c5_1._m0[29].w, fma(_177, fp_c5_1._m0[29].z, fma(_171, fp_c5_1._m0[29].y, _167 * fp_c5_1._m0[29].x))))) * _217));
    float _231 = fma(_219, _223, fma(_134.z, fma(_163, _128, _130), max(0.0, fma(_198, fp_c5_1._m0[31].z, (fma(_104, fp_c5_1._m0[27].z, fma(_100, fp_c5_1._m0[27].y, _96 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_187, fp_c5_1._m0[30].w, fma(_177, fp_c5_1._m0[30].z, fma(_171, fp_c5_1._m0[30].y, _167 * fp_c5_1._m0[30].x))))) * _219));
    float _233 = fma(_211, _227, fma(_134.x, fma(_159, _128, _130), max(0.0, fma(_198, fp_c5_1._m0[31].x, (fma(_104, fp_c5_1._m0[25].z, fma(_100, fp_c5_1._m0[25].y, _96 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_187, fp_c5_1._m0[28].w, fma(_177, fp_c5_1._m0[28].z, fma(_171, fp_c5_1._m0[28].y, _167 * fp_c5_1._m0[28].x))))) * _211));
    float _235 = clamp((-_225) + 1.0, 0.0, 1.0);
    float _237 = clamp((-fma(_225, fp_c7_1._m0[37].w, clamp(_204 * clamp(fma(_136.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_124.x) + 1.0, (-_124.y) + 1.0), clamp(_68.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_58.x * gl_FragCoord.w) * _78, (_58.y * gl_FragCoord.w) * _78)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    int _239 = floatBitsToInt(_209);
    float _241 = _231;
    float _243 = _233;
    float _245 = _229;
    float _247 = _231;
    float _249 = _229;
    float _251 = _233;
    if (floatBitsToInt(_209) != (-1))
    {
        int _253 = 0;
        float _257;
        float _259;
        float _261;
        int _347;
        do
        {
            int _255 = _239 & 255;
            _257 = _243;
            _259 = _245;
            _261 = _241;
            _265 = uint(_255) >= 30u;
            if (_265)
            {
                break;
            }
            int _267 = _255 << 4;
            uint _269 = uint(int(uint(_267 + 7360) >> uint(2)));
            int _271 = int(_269) + 1;
            uint _273 = uint(int(uint(_267 + 7368) >> uint(2)));
            float _275 = (-_165) + fp_c10_1._m0[int(uint(int(_269)) >> uint(2))][int(_269) & 3];
            float _277 = fp_c10_1._m0[int(uint(_271) >> uint(2))][_271 & 3] + (-_68.y);
            float _279 = (-_145) + fp_c10_1._m0[int(uint(int(_273)) >> uint(2))][int(_273) & 3];
            float _281 = fma(_279, _279, fma(_277, _277, _275 * _275));
            float _283 = _275 * inversesqrt(_281);
            float _285 = _277 * inversesqrt(_281);
            float _287 = _279 * inversesqrt(_281);
            float _289 = _98 + _283;
            float _291 = _102 + _285;
            float _293 = _106 + _287;
            float _295 = inversesqrt(fma(_293, _293, fma(_291, _291, _289 * _289)));
            float _297 = _289 * _295;
            float _299 = _291 * _295;
            float _301 = _293 * _295;
            float _303 = max(fma(_106, _301, fma(_102, _299, _98 * _297)), fp_c1_1._m0[0].x);
            uint _305 = uint(int(uint(_267 + 6880) >> uint(2)));
            int _307 = int(_305) + 1;
            float _309 = fma(_104, _287, fma(_100, _285, _96 * _283));
            float _311 = max(fma(_104, _301, fma(_100, _299, _96 * _297)), fp_c1_1._m0[0].x) * max(fma(_104, _301, fma(_100, _299, _96 * _297)), fp_c1_1._m0[0].x);
            float _313 = max(_309, fp_c1_1._m0[0].x);
            uint _315 = uint(int(uint(_267 + 8320) >> uint(2)));
            float _317 = exp2(_303 * fma(_303, fp_c1_1._m0[0].y, -6.9831600189208984375));
            float _319 = (_189 * (1.0 / (_183 + fma(_183, -_313, _313)))) * ((_175 * (1.0 / max(fma(_175 * _175, _311, -_311) + 1.0, fp_c1_1._m0[0].x))) * (_175 * (1.0 / max(fma(_175 * _175, _311, -_311) + 1.0, fp_c1_1._m0[0].x))));
            bool _321 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_315)) >> uint(2))][int(_315) & 3]) != 0;
            uint _323 = uint(int(uint(_267 + 6408) >> uint(2)));
            float _325 = (_159 + fma(_159, -_317, _317)) * _319;
            uint _327 = uint(int(uint(_267 + 6400) >> uint(2)));
            int _329 = int(_327) + 1;
            float _331 = _325;
            if (!_321)
            {
                _331 = 1.0;
            }
            float _333 = _331;
            if (_321)
            {
                uint _335 = uint(int(uint(_267 + 7840) >> uint(2)));
                int _337 = int(_335) + 1;
                uint _339 = uint(int(uint(_267 + 7848) >> uint(2)));
                uint _341 = uint(int(uint(_267 + 6888) >> uint(2)));
                float _343 = fp_c10_1._m0[int(uint(int(_341)) >> uint(2))][int(_341) & 3];
                int _345 = int(_341) + 1;
                _333 = exp2(fp_c10_1._m0[int(uint(_345) >> uint(2))][_345 & 3] * log2(clamp(((-_343) + fma(_287, -fp_c10_1._m0[int(uint(int(_339)) >> uint(2))][int(_339) & 3], fma(_285, -fp_c10_1._m0[int(uint(_337) >> uint(2))][_337 & 3], _283 * (-fp_c10_1._m0[int(uint(int(_335)) >> uint(2))][int(_335) & 3])))) * (1.0 / ((-_343) + 1.0)), 0.0, 1.0)));
            }
            _347 = _253 + 1;
            float _349 = (exp2(fp_c10_1._m0[int(uint(_307) >> uint(2))][_307 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_305)) >> uint(2))][int(_305) & 3], -sqrt(_281), fp_c1_1._m0[0].w), 0.0, 1.0))) * _333) * clamp(_309 + (-0.0), 0.0, 1.0);
            float _351 = fma(fp_c10_1._m0[int(uint(int(_323)) >> uint(2))][int(_323) & 3] * _349, fma(_215, fp_c1_1._m0[1].x, ((_163 + fma(_163, -_317, _317)) * _319) * 0.079577468335628509521484375), _241);
            float _353 = fma(fp_c10_1._m0[int(uint(int(_327)) >> uint(2))][int(_327) & 3] * _349, fma(_202, fp_c1_1._m0[1].x, _325 * 0.079577468335628509521484375), _243);
            float _355 = fma(fp_c10_1._m0[int(uint(_329) >> uint(2))][_329 & 3] * _349, fma(_213, fp_c1_1._m0[1].x, ((_161 + fma(_161, -_317, _317)) * _319) * 0.079577468335628509521484375), _245);
            _239 = int(uint(_239) >> uint(8));
            _253 = _347;
            _241 = _351;
            _243 = _353;
            _245 = _355;
            _257 = _353;
            _259 = _355;
            _261 = _351;
        } while (!(_347 >= 4));
        _265 = false;
        _247 = _261;
        _249 = _259;
        _251 = _257;
        if ((_239 & 255) == 30)
        {
            float _357 = 1.0 / fp_c10_1._m0[561].y;
            float _359 = _145 + (-fp_c10_1._m0[557].z);
            float _361 = (-_165) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_357, fp_c10_1._m0[557].x);
            float _363 = (-_145) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_357, fp_c10_1._m0[557].z);
            float _365 = _361 * _361;
            float _367 = _165 + (-fp_c10_1._m0[557].x);
            float _369 = sqrt(fma(_363, _363, _365)) * (-fp_c10_1._m0[558].y);
            float _371 = inversesqrt(fma(_363, _363, fma(_369, _369, _365)));
            float _373 = _367 * fp_c10_1._m0[558].z;
            float _375 = _361 * _371;
            float _377 = _369 * _371;
            float _379 = _363 * _371;
            float _381 = _98 + _375;
            float _383 = _102 + _377;
            float _385 = _106 + _379;
            float _387 = _359 * fp_c10_1._m0[558].x;
            float _389 = inversesqrt(fma(_385, _385, fma(_383, _383, _381 * _381)));
            float _391 = _68.y;
            float _393 = _381 * _389;
            float _395 = _383 * _389;
            float _397 = ((-float(_387 < _373)) + float(_387 > _373)) * fp_c10_1._m0[561].y;
            float _399 = fma(_359, _359, _367 * _367);
            float _401 = 1.0 / (fma(_145, fp_c10_1._m0[565].z, fma(_391, fp_c10_1._m0[565].y, _165 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _403 = fma(_359, fp_c10_1._m0[558].z, _367 * fp_c10_1._m0[558].x);
            float _405 = _385 * _389;
            bool _407 = _403 > 0.0;
            float _409 = inversesqrt(fma(_379, _379, _375 * _375));
            float _411 = fma(_104, _379, fma(_100, _377, _96 * _375));
            float _413 = max(fma(_106, _405, fma(_102, _395, _98 * _393)), fp_c1_1._m0[0].x);
            float _415 = _379;
            if (_407)
            {
                _415 = sqrt(_399);
            }
            float _417 = _415;
            if (!_407)
            {
                _417 = 1.0;
            }
            float _419 = max(fma(_104, _405, fma(_100, _395, _96 * _393)), fp_c1_1._m0[0].x) * max(fma(_104, _405, fma(_100, _395, _96 * _393)), fp_c1_1._m0[0].x);
            bool _421 = fma(_359 * inversesqrt(_399), fp_c10_1._m0[558].z, (_367 * inversesqrt(_399)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _423 = clamp(fma(_403 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].w), 0.0, 1.0) * clamp(fma(_403 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].w), 0.0, 1.0);
            float _425 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_367, fma(_397, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_359 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_397 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_367, fma(_397, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_359 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_397 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _427 = fma(_413, fp_c1_1._m0[0].y, -6.9831600189208984375);
            float _429 = max(_411, fp_c1_1._m0[0].x);
            float _431 = _427;
            if (_421)
            {
                _431 = fma(_425, -_425, fp_c1_1._m0[0].w) * fma(_425, -_425, fp_c1_1._m0[0].w);
            }
            float _433 = _431;
            if (!_421)
            {
                _433 = 1.0;
            }
            float _435 = exp2(_413 * _427);
            float _437 = (_189 * (1.0 / (_183 + fma(_183, -_429, _429)))) * ((_175 * (1.0 / max(fma(_175 * _175, _419, -_419) + 1.0, fp_c1_1._m0[0].x))) * (_175 * (1.0 / max(fma(_175 * _175, _419, -_419) + 1.0, fp_c1_1._m0[0].x))));
            float _439 = (min(fma(_423, -_423, fp_c1_1._m0[0].w) * fma(_423, -_423, fp_c1_1._m0[0].w), _433) * (exp2(log2(clamp(fma(_417, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_379 * _409, -fp_c10_1._m0[558].z, (_375 * _409) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_411 + (-0.0), 0.0, 1.0);
            float _441 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_145, fp_c10_1._m0[562].z, fma(_391, fp_c10_1._m0[562].y, _165 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _401, 0.5, 0.5), (-fma((fma(_145, fp_c10_1._m0[563].z, fma(_391, fp_c10_1._m0[563].y, _165 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _401, 0.5, 0.5)) + 1.0)).z > fma((fma(_145, fp_c10_1._m0[564].z, fma(_391, fp_c10_1._m0[564].y, _165 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _401, 0.5, 0.5)) || (_403 <= 0.0));
            _247 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _439) * fma(_215, fp_c1_1._m0[1].x, ((_163 + fma(_163, -_435, _435)) * _437) * 0.079577468335628509521484375), _441, _261);
            _249 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _439) * fma(_213, fp_c1_1._m0[1].x, ((_161 + fma(_161, -_435, _435)) * _437) * 0.079577468335628509521484375), _441, _259);
            _251 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _439) * fma(_202, fp_c1_1._m0[1].x, ((_159 + fma(_159, -_435, _435)) * _437) * 0.079577468335628509521484375), _441, _257);
        }
    }
    float _443 = _165 + (-fp_c3_1._m0[11].w);
    float _445 = _68.y;
    float _447 = _145 + (-fp_c3_1._m0[13].w);
    float _449 = fma(_235, _247, _237 * (fma(_200 * (_163 + fma(_163, -_191, _191)), fp_c1_1._m0[0].z, _215 * 0.3183098733425140380859375) * fma(_193, fp_c5_1._m0[5].z, _223)));
    float _451 = _445 + (-fp_c3_1._m0[12].w);
    float _453 = fma(_447, _447, fma(_451, _451, _443 * _443));
    float _455 = clamp(fma(fma(_145, fp_c5_1._m0[14].z, fma(_445, fp_c5_1._m0[14].y, _165 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _457 = fma(_235, _249, _237 * (fma(_200 * (_161 + fma(_161, -_191, _191)), fp_c1_1._m0[0].z, _213 * 0.3183098733425140380859375) * fma(_193, fp_c5_1._m0[5].y, _221)));
    float _459 = fma(_235, _251, _237 * (fma(_200 * (_159 + fma(_159, -_191, _191)), fp_c1_1._m0[0].z, _202 * 0.3183098733425140380859375) * fma(_193, fp_c5_1._m0[5].x, _227)));
    float _461 = clamp(fma(_237 * _235, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _463 = exp2(log2(clamp(sqrt(_453) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_447 * inversesqrt(_453), fp_c5_1._m0[23].z, fma(_451 * inversesqrt(_453), fp_c5_1._m0[23].y, (_443 * inversesqrt(_453)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _465 = fma((-_459) + fp_c5_1._m0[13].x, _455, _459);
    float _467 = fma((-_457) + fp_c5_1._m0[13].y, _455, _457);
    float _469 = fma((-_449) + fp_c5_1._m0[13].z, _455, _449);
    float _471 = clamp((-exp2((clamp(fma(sqrt(_453), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _71.x = fma((-_465) + fma(fma((_463 * fp_c7_1._m0[55].x) * _461, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _471, _465);
    _71.y = fma((-_467) + fma(fma((_463 * fp_c7_1._m0[55].y) * _461, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _471, _467);
    _71.z = fma((-_469) + fma(fma((_463 * fp_c7_1._m0[55].z) * _461, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _471, _469);
    _71.w = 1.0;
}


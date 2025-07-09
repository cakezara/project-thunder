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

layout(binding = 0) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 1) uniform sampler2D fp_tex_tcb_22;
layout(binding = 2) uniform sampler2D fp_tex_tcb_24;
layout(binding = 3) uniform sampler2D fp_tex_tcb_28;
layout(binding = 4) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 5) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 6) uniform sampler2D fp_tex_tcb_38;
layout(binding = 7) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _60;
layout(location = 1) in vec4 _62;
layout(location = 3) in vec4 _64;
layout(location = 6) in vec4 _66;
layout(location = 0) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 0) out vec4 _75;
uint _6[12];

void main()
{
    bool _287 = false;
    float _82 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _84 = 1.0 / (_60.z * gl_FragCoord.w);
    float _86 = _62.x;
    float _88 = _64.x;
    float _90 = _62.y;
    float _92 = _64.y;
    float _94 = _62.z;
    float _96 = _64.z;
    float _98 = inversesqrt(fma(_94, _94, fma(_90, _90, _86 * _86)));
    float _100 = inversesqrt(fma(_96, _96, fma(_92, _92, _88 * _88)));
    float _102 = _86 * _98;
    float _104 = _90 * _98;
    float _106 = _88 * (-_100);
    float _108 = _92 * (-_100);
    float _110 = _96 * (-_100);
    float _112 = _94 * _98;
    float _114 = fma(_112, _110, fma(_104, _108, _102 * _106));
    float _116 = 1.0 / _70.w;
    float _118 = max(_114, fp_c1_1._m0[0].y);
    float _120 = fma(_102 * (-_114), -2.0, -_106);
    float _122 = fma(_104 * (-_114), -2.0, -_108);
    float _124 = fma(_112 * (-_114), -2.0, -_110);
    float _126 = 1.0 / max(abs(_124), max(abs(_120), abs(_122)));
    vec2 _130 = texture(fp_tex_tcb_2A, vec2(fma(_70.x * _116, 0.5, 0.5), fma(_70.y * _116, -0.5, 0.5))).xy;
    vec2 _132 = texture(fp_tex_tcb_38, vec2(_118, (-_82) + (-0.0))).xy;
    float _134 = _132.x;
    float _136 = _132.y;
    vec3 _140 = texture(fp_tex_tcb_36, vec4(_120 * _126, _122 * _126, _124 * _126, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_82 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _142 = texture(fp_tex_tcb_22, vec2(_66.x, _66.y)).xy;
    vec4 _145 = texture(fp_tex_tcb_24, vec2(_66.z, _66.w)).xyzw;
    float _147 = _145.w;
    vec3 _149 = texture(fp_tex_tcb_1C, vec2(_68.x, _68.y)).xyz;
    float _151 = _72.x;
    float _153 = _72.z;
    float _155 = _102 * _104;
    float _157 = _104 * _112;
    float _159 = fma(_82, 0.5, 0.5);
    float _161 = _106 * _110;
    float _163 = _82 * _82;
    float _165 = (_159 * 0.5) * _159;
    float _167 = fma(fp_c6_1._m0[7].z + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    int _170 = max(0, min(int(trunc((_153 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _172 = fma(fp_c6_1._m0[7].y + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _174 = _106 * _108;
    float _176 = fma(fp_c6_1._m0[7].x + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _178 = _108 * _110;
    float _180 = _110 * _110;
    float _182 = _112 * _112;
    float _184 = _102 * _112;
    float _186 = _106 + (-fp_c5_1._m0[23].x);
    float _188 = _108 + (-fp_c5_1._m0[23].y);
    float _190 = _110 + (-fp_c5_1._m0[23].z);
    float _192 = inversesqrt(fma(_190, _190, fma(_188, _188, _186 * _186)));
    float _194 = _186 * _192;
    float _196 = _188 * _192;
    float _198 = _190 * _192;
    float _200 = fma(_104, -fp_c5_1._m0[23].y, _102 * (-fp_c5_1._m0[23].x));
    float _202 = fma(_106, _106, -(_108 * _108));
    float _204 = _163 * _163;
    float _206 = fma(_102, _102, -(_104 * _104));
    float _208 = max(fma(_112, _198, fma(_104, _196, _102 * _194)), fp_c1_1._m0[0].y) * max(fma(_112, _198, fma(_104, _196, _102 * _194)), fp_c1_1._m0[0].y);
    float _210 = max(fma(_110, _198, fma(_108, _196, _106 * _194)), fp_c1_1._m0[0].y);
    float _212 = max(fma(_112, -fp_c5_1._m0[23].z, _200), fp_c1_1._m0[0].y);
    float _214 = exp2(log2(clamp((-_114) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
    float _216 = 1.0 / (_165 + fma(_118, -_165, _118));
    float _218 = fma(max(0.0, fma(_202, fp_c5_1._m0[31].x, (fma(_110, -fp_c5_1._m0[25].z, fma(_108, -fp_c5_1._m0[25].y, _106 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_161, fp_c5_1._m0[28].w, fma(_180, fp_c5_1._m0[28].z, fma(_178, fp_c5_1._m0[28].y, _174 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[45].x, _214, fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x));
    float _220 = exp2(_210 * fma(_210, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _222 = fma(max(0.0, fma(_202, fp_c5_1._m0[31].y, (fma(_110, -fp_c5_1._m0[26].z, fma(_108, -fp_c5_1._m0[26].y, _106 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_161, fp_c5_1._m0[29].w, fma(_180, fp_c5_1._m0[29].z, fma(_178, fp_c5_1._m0[29].y, _174 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[45].y, _214, fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y));
    float _224 = (_216 * (1.0 / (_165 + fma(_165, -_212, _212)))) * ((_163 * (1.0 / max(fma(_208, _204, -_208) + 1.0, fp_c1_1._m0[0].y))) * (_163 * (1.0 / max(fma(_208, _204, -_208) + 1.0, fp_c1_1._m0[0].y))));
    float _226 = fma(max(0.0, fma(_202, fp_c5_1._m0[31].z, (fma(_110, -fp_c5_1._m0[27].z, fma(_108, -fp_c5_1._m0[27].y, _106 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_161, fp_c5_1._m0[30].w, fma(_180, fp_c5_1._m0[30].z, fma(_178, fp_c5_1._m0[30].y, _174 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[45].z, _214, fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z));
    float _228 = _60.w;
    float _230 = fma(_172, -_222, _222);
    float _232 = fma(_167, -_226, _226);
    uint _235 = uint(int(uint((((int(uint(_170) >> uint(16)) * 20) << 16) + (((_170 & 65535) * 20) + max(0, min(int(trunc((_151 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _237 = fp_c10_1._m0[int(uint(int(_235)) >> uint(2))][int(_235) & 3];
    float _239 = fma(_176, -_218, _218);
    float _241 = clamp(_228 * clamp(fma(_142.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _243 = ((_145.y * _147) * _228) * 32.0;
    float _245 = ((_145.x * _147) * _228) * 32.0;
    float _247 = ((_145.z * _147) * _228) * 32.0;
    float _249 = clamp(fma(_112, -fp_c5_1._m0[23].z, _200), 0.0, 1.0);
    float _251 = fma(_230, _243, fma(_140.y, fma(_172, _134, _136), _230 * max(0.0, fma(_206, fp_c5_1._m0[31].y, (fma(_112, fp_c5_1._m0[26].z, fma(_104, fp_c5_1._m0[26].y, _102 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_184, fp_c5_1._m0[29].w, fma(_182, fp_c5_1._m0[29].z, fma(_157, fp_c5_1._m0[29].y, _155 * fp_c5_1._m0[29].x)))))));
    float _253 = fma(_239, _245, fma(_140.x, fma(_176, _134, _136), _239 * max(0.0, fma(_206, fp_c5_1._m0[31].x, (fma(_112, fp_c5_1._m0[25].z, fma(_104, fp_c5_1._m0[25].y, _102 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_184, fp_c5_1._m0[28].w, fma(_182, fp_c5_1._m0[28].z, fma(_157, fp_c5_1._m0[28].y, _155 * fp_c5_1._m0[28].x)))))));
    float _255 = fma(_232, _247, fma(_140.z, fma(_167, _134, _136), _232 * max(0.0, fma(_206, fp_c5_1._m0[31].z, (fma(_112, fp_c5_1._m0[27].z, fma(_104, fp_c5_1._m0[27].y, _102 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_184, fp_c5_1._m0[30].w, fma(_182, fp_c5_1._m0[30].z, fma(_157, fp_c5_1._m0[30].y, _155 * fp_c5_1._m0[30].x)))))));
    float _257 = clamp((-_241) + 1.0, 0.0, 1.0);
    float _259 = clamp((-fma(_241, fp_c7_1._m0[37].w, clamp(_228 * clamp(fma(_142.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_130.x) + 1.0, (-_130.y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_60.x * gl_FragCoord.w) * _84, (_60.y * gl_FragCoord.w) * _84)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _261 = _253;
    float _263 = _251;
    float _265 = _255;
    float _267 = _251;
    float _269 = _255;
    float _271 = _253;
    if (floatBitsToInt(_237) != (-1))
    {
        int _273 = floatBitsToInt(_237);
        int _275 = 0;
        float _279;
        float _281;
        float _283;
        int _369;
        do
        {
            int _277 = _273 & 255;
            _279 = _261;
            _281 = _263;
            _283 = _265;
            _287 = uint(_277) >= 30u;
            if (_287)
            {
                break;
            }
            int _289 = _277 << 4;
            uint _291 = uint(int(uint(_289 + 7360) >> uint(2)));
            int _293 = int(_291) + 1;
            uint _295 = uint(int(uint(_289 + 7368) >> uint(2)));
            float _297 = (-_151) + fp_c10_1._m0[int(uint(int(_291)) >> uint(2))][int(_291) & 3];
            float _299 = fp_c10_1._m0[int(uint(_293) >> uint(2))][_293 & 3] + (-_72.y);
            float _301 = (-_153) + fp_c10_1._m0[int(uint(int(_295)) >> uint(2))][int(_295) & 3];
            float _303 = fma(_301, _301, fma(_299, _299, _297 * _297));
            float _305 = _297 * inversesqrt(_303);
            float _307 = _299 * inversesqrt(_303);
            float _309 = _301 * inversesqrt(_303);
            float _311 = _106 + _305;
            float _313 = _108 + _307;
            float _315 = _110 + _309;
            uint _317 = uint(int(uint(_289 + 6880) >> uint(2)));
            int _319 = int(_317) + 1;
            float _321 = inversesqrt(fma(_315, _315, fma(_313, _313, _311 * _311)));
            float _323 = _311 * _321;
            float _325 = _313 * _321;
            float _327 = _315 * _321;
            float _329 = fma(_112, _309, fma(_104, _307, _102 * _305));
            uint _331 = uint(int(uint(_289 + 8320) >> uint(2)));
            float _333 = max(_329, fp_c1_1._m0[0].y);
            float _335 = max(fma(_110, _327, fma(_108, _325, _106 * _323)), fp_c1_1._m0[0].y);
            uint _337 = uint(int(uint(_289 + 6408) >> uint(2)));
            float _339 = max(fma(_112, _327, fma(_104, _325, _102 * _323)), fp_c1_1._m0[0].y) * max(fma(_112, _327, fma(_104, _325, _102 * _323)), fp_c1_1._m0[0].y);
            uint _341 = uint(int(uint(_289 + 6400) >> uint(2)));
            int _343 = int(_341) + 1;
            float _345 = exp2(_335 * fma(_335, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _347 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_331)) >> uint(2))][int(_331) & 3]) != 0;
            float _349 = ((_163 * (1.0 / max(fma(_204, _339, -_339) + 1.0, fp_c1_1._m0[0].y))) * (_163 * (1.0 / max(fma(_204, _339, -_339) + 1.0, fp_c1_1._m0[0].y)))) * (_216 * (1.0 / (_165 + fma(_165, -_333, _333))));
            float _351 = (_167 + fma(_167, -_345, _345)) * _349;
            float _353 = _351;
            if (!_347)
            {
                _353 = 1.0;
            }
            float _355 = _353;
            if (_347)
            {
                uint _357 = uint(int(uint(_289 + 7840) >> uint(2)));
                int _359 = int(_357) + 1;
                uint _361 = uint(int(uint(_289 + 6888) >> uint(2)));
                float _363 = fp_c10_1._m0[int(uint(int(_361)) >> uint(2))][int(_361) & 3];
                int _365 = int(_361) + 1;
                uint _367 = uint(int(uint(_289 + 7848) >> uint(2)));
                _355 = exp2(fp_c10_1._m0[int(uint(_365) >> uint(2))][_365 & 3] * log2(clamp(((-_363) + fma(_309, -fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3], fma(_307, -fp_c10_1._m0[int(uint(_359) >> uint(2))][_359 & 3], _305 * (-fp_c10_1._m0[int(uint(int(_357)) >> uint(2))][int(_357) & 3])))) * (1.0 / ((-_363) + 1.0)), 0.0, 1.0)));
            }
            _369 = _275 + 1;
            float _371 = (exp2(fp_c10_1._m0[int(uint(_319) >> uint(2))][_319 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_317)) >> uint(2))][int(_317) & 3], -sqrt(_303), fp_c1_1._m0[1].x), 0.0, 1.0))) * _355) * clamp(_329 + (-0.0), 0.0, 1.0);
            float _373 = fma(fp_c10_1._m0[int(uint(int(_341)) >> uint(2))][int(_341) & 3] * _371, fma(_218, fp_c1_1._m0[1].y, ((_176 + fma(_176, -_345, _345)) * _349) * 0.079577468335628509521484375), _261);
            float _375 = fma(fp_c10_1._m0[int(uint(_343) >> uint(2))][_343 & 3] * _371, fma(_222, fp_c1_1._m0[1].y, ((_172 + fma(_172, -_345, _345)) * _349) * 0.079577468335628509521484375), _263);
            float _377 = fma(fp_c10_1._m0[int(uint(int(_337)) >> uint(2))][int(_337) & 3] * _371, fma(_226, fp_c1_1._m0[1].y, _351 * 0.079577468335628509521484375), _265);
            _273 = int(uint(_273) >> uint(8));
            _275 = _369;
            _261 = _373;
            _263 = _375;
            _265 = _377;
            _279 = _373;
            _281 = _375;
            _283 = _377;
        } while (!(_369 >= 4));
        _287 = false;
        _267 = _281;
        _269 = _283;
        _271 = _279;
        if ((_273 & 255) == 30)
        {
            float _379 = _72.y;
            float _381 = 1.0 / (fma(_153, fp_c10_1._m0[565].z, fma(_379, fp_c10_1._m0[565].y, _151 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _383 = 1.0 / fp_c10_1._m0[561].y;
            float _385 = _153 + (-fp_c10_1._m0[557].z);
            float _387 = _385 * fp_c10_1._m0[558].x;
            float _389 = (-_151) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_383, fp_c10_1._m0[557].x);
            float _391 = (-_153) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_383, fp_c10_1._m0[557].z);
            float _393 = _389 * _389;
            float _395 = sqrt(fma(_391, _391, _393)) * (-fp_c10_1._m0[558].y);
            float _397 = _151 + (-fp_c10_1._m0[557].x);
            float _399 = _397 * fp_c10_1._m0[558].z;
            float _401 = inversesqrt(fma(_391, _391, fma(_395, _395, _393)));
            float _403 = _389 * _401;
            float _405 = _395 * _401;
            float _407 = _391 * _401;
            float _409 = _106 + _403;
            float _411 = _108 + _405;
            float _413 = _110 + _407;
            float _415 = inversesqrt(fma(_413, _413, fma(_411, _411, _409 * _409)));
            float _417 = fma(_385, _385, _397 * _397);
            float _419 = fma(_112, _407, fma(_104, _405, _102 * _403));
            float _421 = _409 * _415;
            float _423 = _411 * _415;
            float _425 = _413 * _415;
            float _427 = inversesqrt(fma(_407, _407, _403 * _403));
            float _429 = ((-float(_387 < _399)) + float(_387 > _399)) * fp_c10_1._m0[561].y;
            float _431 = max(fma(_110, _425, fma(_108, _423, _106 * _421)), fp_c1_1._m0[0].y);
            float _433 = fma(_385, fp_c10_1._m0[558].z, _397 * fp_c10_1._m0[558].x);
            float _435 = max(fma(_112, _425, fma(_104, _423, _102 * _421)), fp_c1_1._m0[0].y) * max(fma(_112, _425, fma(_104, _423, _102 * _421)), fp_c1_1._m0[0].y);
            bool _437 = _433 > 0.0;
            float _439 = _407;
            if (_437)
            {
                _439 = sqrt(_417);
            }
            float _441 = _439;
            if (!_437)
            {
                _441 = 1.0;
            }
            bool _443 = fma(_385 * inversesqrt(_417), fp_c10_1._m0[558].z, (_397 * inversesqrt(_417)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _445 = max(_419, fp_c1_1._m0[0].y);
            float _447 = log2(clamp(fma(_441, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _449 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_397, fma(_429, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_385 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_429 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_397, fma(_429, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_385 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_429 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _451 = clamp(fma(_433 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_433 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _453 = _447;
            if (!_443)
            {
                _453 = 1.0;
            }
            float _455 = exp2(_431 * fma(_431, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _457 = _453;
            if (_443)
            {
                _457 = fma(_449, -_449, fp_c1_1._m0[1].x) * fma(_449, -_449, fp_c1_1._m0[1].x);
            }
            float _459 = (_216 * (1.0 / (_165 + fma(_165, -_445, _445)))) * ((_163 * (1.0 / max(fma(_204, _435, -_435) + 1.0, fp_c1_1._m0[0].y))) * (_163 * (1.0 / max(fma(_204, _435, -_435) + 1.0, fp_c1_1._m0[0].y))));
            float _461 = ((exp2(_447) * exp2(log2(clamp((fma(_407 * _427, -fp_c10_1._m0[558].z, (_403 * _427) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_451, -_451, fp_c1_1._m0[1].x) * fma(_451, -_451, fp_c1_1._m0[1].x), _457)) * clamp(_419 + (-0.0), 0.0, 1.0);
            float _463 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_153, fp_c10_1._m0[562].z, fma(_379, fp_c10_1._m0[562].y, _151 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _381, 0.5, 0.5), (-fma((fma(_153, fp_c10_1._m0[563].z, fma(_379, fp_c10_1._m0[563].y, _151 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _381, 0.5, 0.5)) + 1.0)).z > fma((fma(_153, fp_c10_1._m0[564].z, fma(_379, fp_c10_1._m0[564].y, _151 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _381, 0.5, 0.5)) || (_433 <= 0.0));
            _267 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _461) * fma(_222, fp_c1_1._m0[1].y, (_459 * (_172 + fma(_172, -_455, _455))) * 0.079577468335628509521484375), _463, _281);
            _269 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _461) * fma(_226, fp_c1_1._m0[1].y, (_459 * (_167 + fma(_167, -_455, _455))) * 0.079577468335628509521484375), _463, _283);
            _271 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _461) * fma(_218, fp_c1_1._m0[1].y, (_459 * (_176 + fma(_176, -_455, _455))) * 0.079577468335628509521484375), _463, _279);
        }
    }
    float _465 = _151 + (-fp_c3_1._m0[11].w);
    float _467 = _153 + (-fp_c3_1._m0[13].w);
    float _469 = _72.y + (-fp_c3_1._m0[12].w);
    float _471 = fma(_467, _467, fma(_469, _469, _465 * _465));
    float _473 = clamp(fma(_259 * _257, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _475 = exp2(fma(fma(_467 * inversesqrt(_471), fp_c5_1._m0[23].z, fma(_469 * inversesqrt(_471), fp_c5_1._m0[23].y, (_465 * inversesqrt(_471)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_471) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _477 = fma((fma(_149.x, fp_c6_1._m0[12].x, -fp_c6_1._m0[12].x) * (-fp_c6_1._m0[85].x)) * fp_c6_1._m0[92].x, fp_c6_1._m0[11].x, fma(_257, _271, _259 * (fma((_176 + fma(_176, -_220, _220)) * _224, fp_c1_1._m0[0].w, _218 * 0.3183098733425140380859375) * fma(_249, fp_c5_1._m0[5].x, _245))));
    float _479 = fma((fma(_149.y, fp_c6_1._m0[12].y, -fp_c6_1._m0[12].y) * (-fp_c6_1._m0[85].x)) * fp_c6_1._m0[92].y, fp_c6_1._m0[11].x, fma(_257, _267, _259 * (fma((_172 + fma(_172, -_220, _220)) * _224, fp_c1_1._m0[0].w, _222 * 0.3183098733425140380859375) * fma(_249, fp_c5_1._m0[5].y, _243))));
    float _481 = fma((fma(_149.z, fp_c6_1._m0[12].z, -fp_c6_1._m0[12].z) * (-fp_c6_1._m0[85].x)) * fp_c6_1._m0[92].z, fp_c6_1._m0[11].x, fma(_257, _269, _259 * (fma((_167 + fma(_167, -_220, _220)) * _224, fp_c1_1._m0[0].w, _226 * 0.3183098733425140380859375) * fma(_249, fp_c5_1._m0[5].z, _247))));
    float _483 = clamp((-exp2((clamp(fma(sqrt(_471), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma(fma(fma((_475 * fp_c7_1._m0[55].x) * _473, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_477), _483, _477);
    _75.y = fma(fma(fma((_475 * fp_c7_1._m0[55].y) * _473, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_479), _483, _479);
    _75.z = fma(fma(fma((_475 * fp_c7_1._m0[55].z) * _473, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_481), _483, _481);
    _75.w = 1.0;
}


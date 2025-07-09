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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_14;
layout(binding = 2) uniform sampler2D fp_tex_tcb_16;
layout(binding = 3) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 4) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 5) uniform sampler2D fp_tex_tcb_20;
layout(binding = 6) uniform sampler2D fp_tex_tcb_22;
layout(binding = 7) uniform sampler2D fp_tex_tcb_24;
layout(binding = 8) uniform sampler2D fp_tex_tcb_28;
layout(binding = 9) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 10) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 11) uniform sampler2D fp_tex_tcb_38;
layout(binding = 12) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 3) in vec4 _74;
layout(location = 0) in vec4 _76;
layout(location = 6) in vec4 _78;
layout(location = 4) in vec4 _80;
layout(location = 2) in vec4 _82;
layout(location = 0) out vec4 _85;
uint _6[12];

void main()
{
    bool _345 = false;
    float _92 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _94 = 1.0 / (_70.z * gl_FragCoord.w);
    float _96 = _72.x;
    float _98 = _74.x;
    float _100 = _72.y;
    float _102 = _74.y;
    float _104 = _72.z;
    float _106 = _74.z;
    float _108 = _76.z;
    float _110 = _76.w;
    float _112 = _76.x;
    float _114 = _76.y;
    vec3 _118 = texture(fp_tex_tcb_1C, vec2(_108, _110)).xyz;
    vec3 _120 = texture(fp_tex_tcb_1E, vec2(_112, _114)).xyz;
    vec3 _122 = texture(fp_tex_tcb_14, vec2(_112, _114)).xyz;
    float _124 = inversesqrt(fma(_104, _104, fma(_100, _100, _96 * _96)));
    float _126 = inversesqrt(fma(_106, _106, fma(_102, _102, _98 * _98)));
    float _128 = _96 * _124;
    float _130 = _100 * _124;
    float _132 = _98 * (-_126);
    float _134 = _102 * (-_126);
    float _136 = _104 * _124;
    float _138 = _106 * (-_126);
    float _140 = fma(_136, _138, fma(_130, _134, _128 * _132));
    float _142 = 1.0 / _80.w;
    float _144 = max(_140, fp_c1_1._m0[0].y);
    float _146 = fma(_128 * (-_140), -2.0, -_132);
    float _148 = fma(_130 * (-_140), -2.0, -_134);
    float _150 = fma(_136 * (-_140), -2.0, -_138);
    float _152 = 1.0 / max(abs(_150), max(abs(_146), abs(_148)));
    vec2 _156 = texture(fp_tex_tcb_2A, vec2(fma(_80.x * _142, 0.5, 0.5), fma(_80.y * _142, -0.5, 0.5))).xy;
    vec3 _158 = texture(fp_tex_tcb_A, vec2(_112, _114)).xyz;
    float _160 = _158.x;
    float _162 = _158.y;
    float _164 = _158.z;
    vec3 _166 = texture(fp_tex_tcb_16, vec2(_108, _110)).xyz;
    float _168 = _166.x;
    float _170 = _166.y;
    float _172 = _166.z;
    vec2 _174 = texture(fp_tex_tcb_38, vec2(_144, (-_92) + (-0.0))).xy;
    float _176 = _174.x;
    float _178 = _174.y;
    vec3 _180 = texture(fp_tex_tcb_36, vec4(_146 * _152, _148 * _152, _150 * _152, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_92 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _182 = texture(fp_tex_tcb_22, vec2(_78.x, _78.y)).xy;
    vec4 _185 = texture(fp_tex_tcb_24, vec2(_78.z, _78.w)).xyzw;
    float _187 = _185.w;
    float _189 = _128 * _130;
    float _191 = _132 + (-fp_c5_1._m0[23].x);
    float _193 = _130 * _136;
    float _195 = _134 + (-fp_c5_1._m0[23].y);
    float _197 = _138 + (-fp_c5_1._m0[23].z);
    float _199 = _136 * _136;
    float _201 = inversesqrt(fma(_197, _197, fma(_195, _195, _191 * _191)));
    float _203 = _128 * _136;
    float _205 = _82.x;
    float _207 = _191 * _201;
    float _209 = _195 * _201;
    float _211 = _197 * _201;
    float _213 = fma(_128, _128, -(_130 * _130));
    float _215 = _82.z;
    float _217 = fma(_92, 0.5, 0.5);
    float _219 = _92 * _92;
    float _221 = max(fma(_136, _211, fma(_130, _209, _128 * _207)), fp_c1_1._m0[0].y) * max(fma(_136, _211, fma(_130, _209, _128 * _207)), fp_c1_1._m0[0].y);
    float _223 = _219 * _219;
    float _225 = fma(_136, -fp_c5_1._m0[23].z, fma(_130, -fp_c5_1._m0[23].y, _128 * (-fp_c5_1._m0[23].x)));
    float _227 = (_217 * 0.5) * _217;
    float _229 = max(_225, fp_c1_1._m0[0].y);
    float _231 = max(fma(_138, _211, fma(_134, _209, _132 * _207)), fp_c1_1._m0[0].y);
    float _233 = 1.0 / (_227 + fma(_144, -_227, _144));
    float _235 = clamp(_82.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    int _238 = max(0, min(int(trunc((_215 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _240 = (_233 * (1.0 / (_227 + fma(_227, -_229, _229)))) * ((_219 * (1.0 / max(fma(_221, _223, -_221) + 1.0, fp_c1_1._m0[0].y))) * (_219 * (1.0 / max(fma(_221, _223, -_221) + 1.0, fp_c1_1._m0[0].y))));
    float _242 = (-_156.y) + 1.0;
    float _244 = (-texture(fp_tex_tcb_20, vec2(_112, _114)).x) + 1.0;
    float _246 = _235 * _242;
    float _248 = fma(_160, -fp_c6_1._m0[9].x, _160);
    float _250 = clamp(exp2(log2(clamp(max(_140, fp_c1_1._m0[0].z) + (-0.0), 0.0, 1.0)) * fp_c6_1._m0[42].x) * fp_c6_1._m0[42].y, 0.0, 1.0) * _244;
    float _252 = exp2(_231 * fma(_231, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _254 = fma(_164 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _256 = fma(_162, -fp_c6_1._m0[9].x, _162);
    float _258 = fma(fma(_168, fp_c6_1._m0[43].x, -_248), _250, _248);
    float _260 = fma(_160 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _262 = fma(_162 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _264 = _70.w;
    uint _267 = uint(int(uint((((int(uint(_238) >> uint(16)) * 20) << 16) + (((_238 & 65535) * 20) + max(0, min(int(trunc((_205 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _269 = fp_c10_1._m0[int(uint(int(_267)) >> uint(2))][int(_267) & 3];
    float _271 = fma(_164, -fp_c6_1._m0[9].x, _164);
    float _273 = fma(fma(_170, fp_c6_1._m0[43].y, -_256), _250, _256);
    float _275 = fma(_250, -fp_c6_1._m0[17].w, fp_c6_1._m0[17].w);
    float _277 = fma(_260, -_258, _258);
    float _279 = fma(fma(_172, fp_c6_1._m0[43].z, -_271), _250, _271);
    float _281 = fma(_254, -_279, _279);
    float _283 = fma(_262, -_273, _273);
    float _285 = ((_185.x * _187) * _264) * 32.0;
    float _287 = clamp(_264 * clamp(fma(_182.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _289 = ((_185.y * _187) * _264) * 32.0;
    float _291 = ((_185.z * _187) * _264) * 32.0;
    float _293 = fma(_277, _285, fma(_180.x, fma(_260, _176, _178), max(0.0, fma(_213, fp_c5_1._m0[31].x, (fma(_136, fp_c5_1._m0[25].z, fma(_130, fp_c5_1._m0[25].y, _128 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_203, fp_c5_1._m0[28].w, fma(_199, fp_c5_1._m0[28].z, fma(_193, fp_c5_1._m0[28].y, _189 * fp_c5_1._m0[28].x))))) * _277));
    float _295 = clamp(_225 + (-0.0), 0.0, 1.0);
    float _297 = fma(_283, _289, fma(_180.y, fma(_262, _176, _178), max(0.0, fma(_213, fp_c5_1._m0[31].y, (fma(_136, fp_c5_1._m0[26].z, fma(_130, fp_c5_1._m0[26].y, _128 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_203, fp_c5_1._m0[29].w, fma(_199, fp_c5_1._m0[29].z, fma(_193, fp_c5_1._m0[29].y, _189 * fp_c5_1._m0[29].x))))) * _283));
    float _299 = fma(_281, _291, fma(_180.z, fma(_254, _176, _178), max(0.0, fma(_213, fp_c5_1._m0[31].z, (fma(_136, fp_c5_1._m0[27].z, fma(_130, fp_c5_1._m0[27].y, _128 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_203, fp_c5_1._m0[30].w, fma(_199, fp_c5_1._m0[30].z, fma(_193, fp_c5_1._m0[30].y, _189 * fp_c5_1._m0[30].x))))) * _281));
    float _301 = _168 * fp_c6_1._m0[19].x;
    float _303 = _170 * fp_c6_1._m0[19].y;
    float _305 = _172 * fp_c6_1._m0[19].z;
    float _307 = clamp((-_287) + 1.0, 0.0, 1.0);
    float _309 = clamp((-fma(_287, fp_c7_1._m0[37].w, fma(_235, max(_242, (-_156.x) + 1.0), fma(texture(fp_tex_tcb_28, vec2((_70.x * gl_FragCoord.w) * _94, (_70.y * gl_FragCoord.w) * _94)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)) + clamp(_264 * clamp(fma(_182.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    int _311 = floatBitsToInt(_269);
    float _313 = _299;
    float _315 = _293;
    float _317 = _297;
    float _319 = _293;
    float _321 = _297;
    float _323 = _299;
    if (floatBitsToInt(_269) != (-1))
    {
        float _325 = 1.0 / fp_c6_1._m0[18].x;
        float _327 = clamp((-_275) + 1.0, 0.0, 1.0);
        float _329 = clamp(fma(_246, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _331 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
        int _333 = 0;
        float _337;
        float _339;
        float _341;
        int _427;
        do
        {
            int _335 = _311 & 255;
            _337 = _315;
            _339 = _317;
            _341 = _313;
            _345 = uint(_335) >= 30u;
            if (_345)
            {
                break;
            }
            int _347 = _335 << 4;
            uint _349 = uint(int(uint(_347 + 7360) >> uint(2)));
            int _351 = int(_349) + 1;
            uint _353 = uint(int(uint(_347 + 7368) >> uint(2)));
            float _355 = (-_205) + fp_c10_1._m0[int(uint(int(_349)) >> uint(2))][int(_349) & 3];
            float _357 = fp_c10_1._m0[int(uint(_351) >> uint(2))][_351 & 3] + (-_82.y);
            float _359 = (-_215) + fp_c10_1._m0[int(uint(int(_353)) >> uint(2))][int(_353) & 3];
            float _361 = fma(_359, _359, fma(_357, _357, _355 * _355));
            float _363 = _355 * inversesqrt(_361);
            float _365 = _357 * inversesqrt(_361);
            float _367 = _359 * inversesqrt(_361);
            float _369 = _132 + _363;
            float _371 = _134 + _365;
            float _373 = _138 + _367;
            float _375 = inversesqrt(fma(_373, _373, fma(_371, _371, _369 * _369)));
            float _377 = _369 * _375;
            uint _379 = uint(int(uint(_347 + 6880) >> uint(2)));
            int _381 = int(_379) + 1;
            float _383 = _371 * _375;
            float _385 = _373 * _375;
            float _387 = max(fma(_138, _385, fma(_134, _383, _132 * _377)), fp_c1_1._m0[0].y);
            float _389 = max(fma(_136, _385, fma(_130, _383, _128 * _377)), fp_c1_1._m0[0].y) * max(fma(_136, _385, fma(_130, _383, _128 * _377)), fp_c1_1._m0[0].y);
            float _391 = fma(_136, _367, fma(_130, _365, _128 * _363));
            float _393 = exp2(_387 * fma(_387, fp_c1_1._m0[0].w, -6.9831600189208984375));
            uint _395 = uint(int(uint(_347 + 8320) >> uint(2)));
            float _397 = max(_391, fp_c1_1._m0[0].y);
            float _399 = _219 * (1.0 / max(fma(_223, _389, -_389) + 1.0, fp_c1_1._m0[0].y));
            float _401 = (_233 * (1.0 / (_227 + fma(_227, -_397, _397)))) * (_399 * _399);
            bool _403 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_395)) >> uint(2))][int(_395) & 3]) != 0;
            float _405 = _399;
            if (!_403)
            {
                _405 = 1.0;
            }
            float _407 = _405;
            if (_403)
            {
                uint _409 = uint(int(uint(_347 + 7840) >> uint(2)));
                int _411 = int(_409) + 1;
                uint _413 = uint(int(uint(_347 + 7848) >> uint(2)));
                uint _415 = uint(int(uint(_347 + 6888) >> uint(2)));
                float _417 = fp_c10_1._m0[int(uint(int(_415)) >> uint(2))][int(_415) & 3];
                int _419 = int(_415) + 1;
                _407 = exp2(log2(clamp((fma(_367, -fp_c10_1._m0[int(uint(int(_413)) >> uint(2))][int(_413) & 3], fma(_365, -fp_c10_1._m0[int(uint(_411) >> uint(2))][_411 & 3], _363 * (-fp_c10_1._m0[int(uint(int(_409)) >> uint(2))][int(_409) & 3]))) + (-_417)) * (1.0 / ((-_417) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[int(uint(_419) >> uint(2))][_419 & 3]);
            }
            uint _421 = uint(int(uint(_347 + 6400) >> uint(2)));
            int _423 = int(_421) + 1;
            float _425 = exp2(fp_c10_1._m0[int(uint(_381) >> uint(2))][_381 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3], -sqrt(_361), fp_c1_1._m0[1].y), 0.0, 1.0))) * _407;
            _427 = _333 + 1;
            float _429 = _425 * clamp(_391 + (-0.0), 0.0, 1.0);
            uint _431 = uint(int(uint(_347 + 6408) >> uint(2)));
            int _433 = int(_431) + 1;
            float _435 = _425 * fp_c10_1._m0[int(uint(_433) >> uint(2))][_433 & 3];
            float _437 = exp2(log2(clamp(fma(_140, -clamp((-_391) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].y) * (_244 * (fma(_331, fp_c1_1._m0[1].w, exp2(_325 * log2(clamp(max(fma(_138, -_367, fma(_134, -_365, _132 * (-_363))), fp_c1_1._m0[0].z) + (-0.0), 0.0, 1.0))) * _331) + 0.20000000298023223876953125));
            float _439 = _313 + fma((_429 * fp_c10_1._m0[int(uint(int(_431)) >> uint(2))][int(_431) & 3]) * fma(_279, fp_c1_1._m0[1].z, ((_254 + fma(_254, -_393, _393)) * _401) * 0.079577468335628509521484375), _327, _329 * (_275 * (_437 * (_305 * _435))));
            float _441 = _315 + fma((_429 * fp_c10_1._m0[int(uint(int(_421)) >> uint(2))][int(_421) & 3]) * fma(_258, fp_c1_1._m0[1].z, ((_260 + fma(_260, -_393, _393)) * _401) * 0.079577468335628509521484375), _327, _329 * (_275 * (_437 * (_301 * _435))));
            float _443 = _317 + fma((_429 * fp_c10_1._m0[int(uint(_423) >> uint(2))][_423 & 3]) * fma(_273, fp_c1_1._m0[1].z, ((_262 + fma(_262, -_393, _393)) * _401) * 0.079577468335628509521484375), _327, _329 * (_275 * (_437 * (_303 * _435))));
            _311 = int(uint(_311) >> uint(8));
            _333 = _427;
            _313 = _439;
            _315 = _441;
            _317 = _443;
            _337 = _441;
            _339 = _443;
            _341 = _439;
        } while (!(_427 >= 4));
        _345 = false;
        _319 = _337;
        _321 = _339;
        _323 = _341;
        if ((_311 & 255) == 30)
        {
            float _445 = 1.0 / fp_c10_1._m0[561].y;
            float _447 = _205 + (-fp_c10_1._m0[557].x);
            float _449 = _215 + (-fp_c10_1._m0[557].z);
            float _451 = _449 * fp_c10_1._m0[558].x;
            float _453 = (-_205) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_445, fp_c10_1._m0[557].x);
            float _455 = (-_215) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_445, fp_c10_1._m0[557].z);
            float _457 = _447 * fp_c10_1._m0[558].z;
            float _459 = _453 * _453;
            float _461 = ((-float(_451 < _457)) + float(_451 > _457)) * fp_c10_1._m0[561].y;
            float _463 = fma(_449, _449, _447 * _447);
            float _465 = sqrt(fma(_455, _455, _459)) * (-fp_c10_1._m0[558].y);
            float _467 = inversesqrt(fma(_455, _455, fma(_465, _465, _459)));
            float _469 = _453 * _467;
            float _471 = _465 * _467;
            float _473 = _455 * _467;
            float _475 = fma(_449, fp_c10_1._m0[558].z, _447 * fp_c10_1._m0[558].x);
            float _477 = _132 + _469;
            float _479 = _134 + _471;
            float _481 = _138 + _473;
            float _483 = _82.y;
            float _485 = inversesqrt(fma(_481, _481, fma(_479, _479, _477 * _477)));
            float _487 = _477 * _485;
            float _489 = _481 * _485;
            float _491 = _479 * _485;
            float _493 = 1.0 / (fma(_215, fp_c10_1._m0[565].z, fma(_483, fp_c10_1._m0[565].y, _205 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _495 = fma(_136, _473, fma(_130, _471, _128 * _469));
            bool _497 = _475 > 0.0;
            float _499 = inversesqrt(fma(_473, _473, _469 * _469));
            float _501 = _469 * _499;
            float _503 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_447, fma(_461, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_449 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_461 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_447, fma(_461, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_449 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_461 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _505 = _501;
            if (_497)
            {
                _505 = sqrt(_463);
            }
            float _507 = _505;
            if (!_497)
            {
                _507 = 1.0;
            }
            float _509 = clamp(fma(_475 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_475 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _511 = fma(_503, -_503, fp_c1_1._m0[1].y) * fma(_503, -_503, fp_c1_1._m0[1].y);
            if (!(fma(_449 * inversesqrt(_463), fp_c10_1._m0[558].z, (_447 * inversesqrt(_463)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z))
            {
                _511 = 1.0;
            }
            float _513 = max(fma(_136, _489, fma(_130, _491, _128 * _487)), fp_c1_1._m0[0].y) * max(fma(_136, _489, fma(_130, _491, _128 * _487)), fp_c1_1._m0[0].y);
            float _515 = max(fma(_138, _489, fma(_134, _491, _132 * _487)), fp_c1_1._m0[0].y);
            float _517 = max(_495, fp_c1_1._m0[0].y);
            float _519 = exp2(_515 * fma(_515, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _521 = min(fma(_509, -_509, fp_c1_1._m0[1].y) * fma(_509, -_509, fp_c1_1._m0[1].y), _511) * (exp2(log2(clamp(fma(_507, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_473 * _499, -fp_c10_1._m0[558].z, _501 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w));
            float _523 = (_244 * (fma(_331, fp_c1_1._m0[1].w, _331 * exp2(_325 * log2(clamp(max(fma(_138, -_473, fma(_134, -_471, _132 * (-_469))), fp_c1_1._m0[0].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125)) * exp2(log2(clamp(fma(_140, -clamp((-_495) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].y);
            float _525 = _521 * clamp(_495 + (-0.0), 0.0, 1.0);
            float _527 = (_233 * (1.0 / (_227 + fma(_227, -_517, _517)))) * ((_219 * (1.0 / max(fma(_223, _513, -_513) + 1.0, fp_c1_1._m0[0].y))) * (_219 * (1.0 / max(fma(_223, _513, -_513) + 1.0, fp_c1_1._m0[0].y))));
            float _529 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_215, fp_c10_1._m0[562].z, fma(_483, fp_c10_1._m0[562].y, _205 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _493, 0.5, 0.5), (-fma((fma(_215, fp_c10_1._m0[563].z, fma(_483, fp_c10_1._m0[563].y, _205 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _493, 0.5, 0.5)) + 1.0)).z > fma((fma(_215, fp_c10_1._m0[564].z, fma(_483, fp_c10_1._m0[564].y, _205 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _493, 0.5, 0.5)) || (_475 <= 0.0));
            _319 = fma(fma(_327, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _525) * fma(_258, fp_c1_1._m0[1].z, ((_260 + fma(_260, -_519, _519)) * _527) * 0.079577468335628509521484375), _329 * (_275 * (_523 * (_301 * _521)))), _529, _337);
            _321 = fma(fma(_327, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _525) * fma(_273, fp_c1_1._m0[1].z, ((_262 + fma(_262, -_519, _519)) * _527) * 0.079577468335628509521484375), _329 * (_275 * (_523 * (_303 * _521)))), _529, _339);
            _323 = fma(fma(_327, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _525) * fma(_279, fp_c1_1._m0[1].z, ((_254 + fma(_254, -_519, _519)) * _527) * 0.079577468335628509521484375), _329 * (_275 * (_523 * (_305 * _521)))), _529, _341);
        }
    }
    float _531 = _82.y;
    float _533 = _205 + (-fp_c3_1._m0[11].w);
    float _535 = _215 + (-fp_c3_1._m0[13].w);
    float _537 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
    float _539 = clamp((-_275) + 1.0, 0.0, 1.0);
    float _541 = _531 + (-fp_c3_1._m0[12].w);
    float _543 = fma(_535, _535, fma(_541, _541, _533 * _533));
    float _545 = clamp(fma(_246, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _547 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _549 = exp2(log2(clamp(fma(_140, -clamp((-_225) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].y) * (_244 * (fma(_537, fp_c1_1._m0[1].w, _537 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_138, fp_c5_1._m0[23].z, fma(_134, fp_c5_1._m0[23].y, _132 * fp_c5_1._m0[23].x)), fp_c1_1._m0[0].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125));
    float _551 = clamp(fma(_309 * _307, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _553 = exp2(log2(clamp(sqrt(_543) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_535 * inversesqrt(_543), fp_c5_1._m0[23].z, fma(_541 * inversesqrt(_543), fp_c5_1._m0[23].y, (_533 * inversesqrt(_543)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _555 = fma((_118.x + _120.x) * (_122.x * fma((-fp_c6_1._m0[12].x) + fp_c6_1._m0[14].x, fp_c7_1._m0[52].w, fp_c6_1._m0[12].x)), _547, fma(_307, _319, fma(_309, _539 * (fma(_240 * (_260 + fma(_260, -_252, _252)), fp_c1_1._m0[1].x, _258 * 0.3183098733425140380859375) * fma(_295, fp_c5_1._m0[5].x, _285)), _545 * (_275 * (_549 * (_301 * fp_c5_1._m0[5].w))))));
    float _557 = fma((_118.y + _120.y) * (_122.y * fma((-fp_c6_1._m0[12].y) + fp_c6_1._m0[14].y, fp_c7_1._m0[52].w, fp_c6_1._m0[12].y)), _547, fma(_307, _321, fma(_309, _539 * (fma(_240 * (_262 + fma(_262, -_252, _252)), fp_c1_1._m0[1].x, _273 * 0.3183098733425140380859375) * fma(_295, fp_c5_1._m0[5].y, _289)), _545 * (_275 * (_549 * (_303 * fp_c5_1._m0[5].w))))));
    float _559 = fma((_118.z + _120.z) * (_122.z * fma((-fp_c6_1._m0[12].z) + fp_c6_1._m0[14].z, fp_c7_1._m0[52].w, fp_c6_1._m0[12].z)), _547, fma(_307, _323, fma(_309, _539 * (fma(_240 * (_254 + fma(_254, -_252, _252)), fp_c1_1._m0[1].x, _279 * 0.3183098733425140380859375) * fma(_295, fp_c5_1._m0[5].z, _291)), _545 * (_275 * (_549 * (_305 * fp_c5_1._m0[5].w))))));
    float _561 = clamp(fma(fma(_215, fp_c5_1._m0[14].z, fma(_531, fp_c5_1._m0[14].y, _205 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _563 = fma((-_555) + fp_c5_1._m0[13].x, _561, _555);
    float _565 = fma((-_557) + fp_c5_1._m0[13].y, _561, _557);
    float _567 = fma((-_559) + fp_c5_1._m0[13].z, _561, _559);
    float _569 = clamp((-exp2((clamp(fma(sqrt(_543), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _85.x = fma((-_563) + fma(fma((_553 * fp_c7_1._m0[55].x) * _551, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _569, _563);
    _85.y = fma((-_565) + fma(fma((_553 * fp_c7_1._m0[55].y) * _551, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _569, _565);
    _85.z = fma((-_567) + fma(fma((_553 * fp_c7_1._m0[55].z) * _551, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _569, _567);
    _85.w = 1.0;
}


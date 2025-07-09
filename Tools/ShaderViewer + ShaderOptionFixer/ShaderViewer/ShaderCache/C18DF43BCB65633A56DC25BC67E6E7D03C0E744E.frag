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

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_14;
layout(binding = 4) uniform sampler2D fp_tex_tcb_18;
layout(binding = 5) uniform sampler2D fp_tex_tcb_22;
layout(binding = 6) uniform sampler2D fp_tex_tcb_24;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _68;
layout(location = 5) in vec4 _70;
layout(location = 0) in vec4 _72;
layout(location = 1) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 4) in vec4 _78;
layout(location = 7) in vec4 _80;
layout(location = 3) in vec4 _82;
layout(location = 0) out vec4 _85;
uint _6[12];

void main()
{
    bool _327 = false;
    float _92 = 1.0 / (_68.z * gl_FragCoord.w);
    float _94 = _72.x;
    float _96 = _72.y;
    float _98 = 1.0 / _70.w;
    vec2 _102 = texture(fp_tex_tcb_E, vec2(_94, _96)).xy;
    float _104 = _102.x;
    float _106 = _102.y;
    vec2 _108 = texture(fp_tex_tcb_2A, vec2(fma(_70.x * _98, 0.5, 0.5), fma(_70.y * _98, -0.5, 0.5))).xy;
    vec3 _112 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _114 = _112.x;
    float _116 = _112.y;
    float _118 = _112.z;
    float _120 = _74.x;
    float _122 = _74.y;
    float _124 = _74.z;
    float _126 = _76.y;
    float _128 = _76.z;
    float _130 = _76.x;
    float _132 = _76.w;
    float _134 = _78.x;
    float _136 = _78.y;
    float _138 = _78.z;
    float _140 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _142 = _124 * _140;
    float _144 = _120 * _140;
    float _146 = _122 * _140;
    float _148 = max(texture(fp_tex_tcb_10, vec2(_94, _96)).x, fp_c1_1._m0[0].x);
    float _150 = sqrt(clamp((-fma(_104, _104, _106 * _106)) + 1.0, 0.0, 1.0));
    float _152 = fma(_144, _150, fma(_104, _130, _106 * (fma(_146, _128, -(_142 * _126)) * _132)));
    float _154 = fma(_146, _150, fma(_104, _126, _106 * (fma(_142, _130, -(_144 * _128)) * _132)));
    float _156 = fma(_142, _150, fma(_104, _128, _106 * (fma(_144, _126, -(_146 * _130)) * _132)));
    float _158 = inversesqrt(fma(_138, _138, fma(_136, _136, _134 * _134)));
    float _160 = inversesqrt(fma(_156, _156, fma(_154, _154, _152 * _152)));
    float _162 = _134 * (-_158);
    float _164 = _136 * (-_158);
    float _166 = _138 * (-_158);
    float _168 = _152 * _160;
    float _170 = _154 * _160;
    float _172 = _156 * _160;
    float _174 = fma(_172, _166, fma(_170, _164, _168 * _162));
    float _176 = fma(_168 * (-_174), -2.0, -_162);
    float _178 = fma(_170 * (-_174), -2.0, -_164);
    float _180 = fma(_172 * (-_174), -2.0, -_166);
    float _182 = 1.0 / max(abs(_180), max(abs(_176), abs(_178)));
    float _184 = max(_174, fp_c1_1._m0[0].y);
    vec2 _186 = texture(fp_tex_tcb_38, vec2(_184, (-_148) + (-0.0))).xy;
    float _188 = _186.x;
    float _190 = _186.y;
    vec3 _192 = texture(fp_tex_tcb_36, vec4(_176 * _182, _178 * _182, _180 * _182, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_148 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _194 = texture(fp_tex_tcb_22, vec2(_80.x, _80.y)).xy;
    vec4 _197 = texture(fp_tex_tcb_24, vec2(_80.z, _80.w)).xyzw;
    float _199 = _197.w;
    vec3 _201 = texture(fp_tex_tcb_14, vec2(_94, _96)).xyz;
    float _203 = _162 + (-fp_c5_1._m0[23].x);
    float _205 = _164 + (-fp_c5_1._m0[23].y);
    float _207 = _166 + (-fp_c5_1._m0[23].z);
    float _209 = fma(_148, 0.5, 0.5);
    float _211 = _168 * _170;
    float _213 = inversesqrt(fma(_207, _207, fma(_205, _205, _203 * _203)));
    float _215 = _203 * _213;
    float _217 = _205 * _213;
    float _219 = _170 * _172;
    float _221 = _207 * _213;
    float _223 = _82.x;
    float _225 = _82.z;
    float _227 = _172 * _172;
    float _229 = _168 * _172;
    float _231 = max(fma(_172, _221, fma(_170, _217, _168 * _215)), fp_c1_1._m0[0].y) * max(fma(_172, _221, fma(_170, _217, _168 * _215)), fp_c1_1._m0[0].y);
    float _233 = fma(_170, -fp_c5_1._m0[23].y, _168 * (-fp_c5_1._m0[23].x));
    float _235 = _148 * _148;
    float _237 = max(fma(_166, _221, fma(_164, _217, _162 * _215)), fp_c1_1._m0[0].y);
    float _239 = (_209 * 0.5) * _209;
    float _241 = _235 * _235;
    float _243 = clamp(fma(_172, -fp_c5_1._m0[23].z, _233), 0.0, 1.0);
    float _245 = max(fma(_172, -fp_c5_1._m0[23].z, _233), fp_c1_1._m0[0].y);
    float _247 = fma(_168, _168, -(_170 * _170));
    float _249 = 1.0 / (_239 + fma(_184, -_239, _184));
    float _251 = exp2(_237 * fma(_237, fp_c1_1._m0[0].z, -6.9831600189208984375));
    int _254 = max(0, min(int(trunc((_225 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _256 = fma(_114, -fp_c6_1._m0[9].x, _114);
    float _258 = fma(_114 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _260 = fma(_118 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _262 = fma(_116 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _264 = _68.w;
    float _266 = (_249 * (1.0 / (_239 + fma(_239, -_245, _245)))) * ((_235 * (1.0 / max(fma(_231, _241, -_231) + 1.0, fp_c1_1._m0[0].y))) * (_235 * (1.0 / max(fma(_231, _241, -_231) + 1.0, fp_c1_1._m0[0].y))));
    uint _269 = uint(int(uint((((int(uint(_254) >> uint(16)) * 20) << 16) + (((_254 & 65535) * 20) + max(0, min(int(trunc((_223 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _271 = fp_c10_1._m0[int(uint(int(_269)) >> uint(2))][int(_269) & 3];
    float _273 = fma(_116, -fp_c6_1._m0[9].x, _116);
    float _275 = fma(_256, -_258, _256);
    float _277 = fma(_273, -_262, _273);
    float _279 = fma(_118, -fp_c6_1._m0[9].x, _118);
    float _281 = fma(_279, -_260, _279);
    float _283 = clamp(_264 * clamp(fma(_194.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _285 = ((_197.x * _199) * _264) * 32.0;
    float _287 = ((_197.y * _199) * _264) * 32.0;
    float _289 = ((_197.z * _199) * _264) * 32.0;
    float _291 = fma(_275, _285, fma(_192.x, fma(_258, _188, _190), max(0.0, fma(_247, fp_c5_1._m0[31].x, (fma(_172, fp_c5_1._m0[25].z, fma(_170, fp_c5_1._m0[25].y, _168 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_229, fp_c5_1._m0[28].w, fma(_227, fp_c5_1._m0[28].z, fma(_219, fp_c5_1._m0[28].y, _211 * fp_c5_1._m0[28].x))))) * _275));
    float _293 = fma(_277, _287, fma(_192.y, fma(_262, _188, _190), max(0.0, fma(_247, fp_c5_1._m0[31].y, (fma(_172, fp_c5_1._m0[26].z, fma(_170, fp_c5_1._m0[26].y, _168 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_229, fp_c5_1._m0[29].w, fma(_227, fp_c5_1._m0[29].z, fma(_219, fp_c5_1._m0[29].y, _211 * fp_c5_1._m0[29].x))))) * _277));
    float _295 = fma(_281, _289, fma(_192.z, fma(_260, _188, _190), max(0.0, fma(_247, fp_c5_1._m0[31].z, (fma(_172, fp_c5_1._m0[27].z, fma(_170, fp_c5_1._m0[27].y, _168 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_229, fp_c5_1._m0[30].w, fma(_227, fp_c5_1._m0[30].z, fma(_219, fp_c5_1._m0[30].y, _211 * fp_c5_1._m0[30].x))))) * _281));
    float _297 = clamp((-((-texture(fp_tex_tcb_18, vec2(_72.z, _72.w)).x) + _283)) + (-0.0), 0.0, 1.0);
    float _299 = clamp((-fma(_283, fp_c7_1._m0[37].w, fma(max((-_108.x) + 1.0, (-_108.y) + 1.0), clamp(_82.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_68.x * gl_FragCoord.w) * _92, (_68.y * gl_FragCoord.w) * _92)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)) + clamp(_264 * clamp(fma(_194.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    float _301 = _293;
    float _303 = _295;
    float _305 = _291;
    float _307 = _291;
    float _309 = _293;
    float _311 = _295;
    if (floatBitsToInt(_271) != (-1))
    {
        int _313 = floatBitsToInt(_271);
        int _315 = 0;
        float _319;
        float _321;
        float _323;
        int _409;
        do
        {
            int _317 = _313 & 255;
            _319 = _305;
            _321 = _301;
            _323 = _303;
            _327 = uint(_317) >= 30u;
            if (_327)
            {
                break;
            }
            int _329 = _317 << 4;
            uint _331 = uint(int(uint(_329 + 7360) >> uint(2)));
            int _333 = int(_331) + 1;
            uint _335 = uint(int(uint(_329 + 7368) >> uint(2)));
            float _337 = (-_223) + fp_c10_1._m0[int(uint(int(_331)) >> uint(2))][int(_331) & 3];
            float _339 = fp_c10_1._m0[int(uint(_333) >> uint(2))][_333 & 3] + (-_82.y);
            float _341 = (-_225) + fp_c10_1._m0[int(uint(int(_335)) >> uint(2))][int(_335) & 3];
            float _343 = fma(_341, _341, fma(_339, _339, _337 * _337));
            float _345 = _337 * inversesqrt(_343);
            float _347 = _339 * inversesqrt(_343);
            float _349 = _341 * inversesqrt(_343);
            float _351 = _162 + _345;
            float _353 = _164 + _347;
            float _355 = _166 + _349;
            uint _357 = uint(int(uint(_329 + 6880) >> uint(2)));
            int _359 = int(_357) + 1;
            float _361 = inversesqrt(fma(_355, _355, fma(_353, _353, _351 * _351)));
            float _363 = _351 * _361;
            float _365 = _353 * _361;
            float _367 = _355 * _361;
            uint _369 = uint(int(uint(_329 + 8320) >> uint(2)));
            float _371 = fma(_172, _349, fma(_170, _347, _168 * _345));
            float _373 = max(fma(_166, _367, fma(_164, _365, _162 * _363)), fp_c1_1._m0[0].y);
            float _375 = max(_371, fp_c1_1._m0[0].y);
            float _377 = max(fma(_172, _367, fma(_170, _365, _168 * _363)), fp_c1_1._m0[0].y) * max(fma(_172, _367, fma(_170, _365, _168 * _363)), fp_c1_1._m0[0].y);
            uint _379 = uint(int(uint(_329 + 6408) >> uint(2)));
            uint _381 = uint(int(uint(_329 + 6400) >> uint(2)));
            int _383 = int(_381) + 1;
            float _385 = exp2(_373 * fma(_373, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _387 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_369)) >> uint(2))][int(_369) & 3]) != 0;
            float _389 = (_249 * (1.0 / (_239 + fma(_239, -_375, _375)))) * ((_235 * (1.0 / max(fma(_241, _377, -_377) + 1.0, fp_c1_1._m0[0].y))) * (_235 * (1.0 / max(fma(_241, _377, -_377) + 1.0, fp_c1_1._m0[0].y))));
            float _391 = (_258 + fma(_258, -_385, _385)) * _389;
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
                uint _401 = uint(int(uint(_329 + 6888) >> uint(2)));
                float _403 = fp_c10_1._m0[int(uint(int(_401)) >> uint(2))][int(_401) & 3];
                int _405 = int(_401) + 1;
                uint _407 = uint(int(uint(_329 + 7848) >> uint(2)));
                _395 = exp2(fp_c10_1._m0[int(uint(_405) >> uint(2))][_405 & 3] * log2(clamp(((-_403) + fma(_349, -fp_c10_1._m0[int(uint(int(_407)) >> uint(2))][int(_407) & 3], fma(_347, -fp_c10_1._m0[int(uint(_399) >> uint(2))][_399 & 3], _345 * (-fp_c10_1._m0[int(uint(int(_397)) >> uint(2))][int(_397) & 3])))) * (1.0 / ((-_403) + 1.0)), 0.0, 1.0)));
            }
            _409 = _315 + 1;
            float _411 = (exp2(fp_c10_1._m0[int(uint(_359) >> uint(2))][_359 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_357)) >> uint(2))][int(_357) & 3], -sqrt(_343), fp_c1_1._m0[1].x), 0.0, 1.0))) * _395) * clamp(_371 + (-0.0), 0.0, 1.0);
            float _413 = fma(fp_c10_1._m0[int(uint(_383) >> uint(2))][_383 & 3] * _411, fma(_273, fp_c1_1._m0[1].y, ((_262 + fma(_262, -_385, _385)) * _389) * 0.079577468335628509521484375), _301);
            float _415 = fma(fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3] * _411, fma(_279, fp_c1_1._m0[1].y, ((_260 + fma(_260, -_385, _385)) * _389) * 0.079577468335628509521484375), _303);
            float _417 = fma(fp_c10_1._m0[int(uint(int(_381)) >> uint(2))][int(_381) & 3] * _411, fma(_256, fp_c1_1._m0[1].y, _391 * 0.079577468335628509521484375), _305);
            _313 = int(uint(_313) >> uint(8));
            _315 = _409;
            _301 = _413;
            _303 = _415;
            _305 = _417;
            _319 = _417;
            _321 = _413;
            _323 = _415;
        } while (!(_409 >= 4));
        _327 = false;
        _307 = _319;
        _309 = _321;
        _311 = _323;
        if ((_313 & 255) == 30)
        {
            float _419 = _82.y;
            float _421 = 1.0 / (fma(_225, fp_c10_1._m0[565].z, fma(_419, fp_c10_1._m0[565].y, _223 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _423 = 1.0 / fp_c10_1._m0[561].y;
            float _425 = _223 + (-fp_c10_1._m0[557].x);
            float _427 = (-_223) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_423, fp_c10_1._m0[557].x);
            float _429 = (-_225) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_423, fp_c10_1._m0[557].z);
            float _431 = _427 * _427;
            float _433 = sqrt(fma(_429, _429, _431)) * (-fp_c10_1._m0[558].y);
            float _435 = inversesqrt(fma(_429, _429, fma(_433, _433, _431)));
            float _437 = _425 * fp_c10_1._m0[558].z;
            float _439 = _427 * _435;
            float _441 = _433 * _435;
            float _443 = _429 * _435;
            float _445 = _225 + (-fp_c10_1._m0[557].z);
            float _447 = _162 + _439;
            float _449 = _164 + _441;
            float _451 = _166 + _443;
            float _453 = _445 * fp_c10_1._m0[558].x;
            float _455 = inversesqrt(fma(_451, _451, fma(_449, _449, _447 * _447)));
            float _457 = fma(_445, _445, _425 * _425);
            float _459 = fma(_172, _443, fma(_170, _441, _168 * _439));
            float _461 = _447 * _455;
            float _463 = _449 * _455;
            float _465 = _451 * _455;
            float _467 = inversesqrt(fma(_443, _443, _439 * _439));
            float _469 = ((-float(_453 < _437)) + float(_453 > _437)) * fp_c10_1._m0[561].y;
            float _471 = max(fma(_166, _465, fma(_164, _463, _162 * _461)), fp_c1_1._m0[0].y);
            float _473 = max(_459, fp_c1_1._m0[0].y);
            float _475 = fma(_445, fp_c10_1._m0[558].z, _425 * fp_c10_1._m0[558].x);
            float _477 = max(fma(_172, _465, fma(_170, _463, _168 * _461)), fp_c1_1._m0[0].y) * max(fma(_172, _465, fma(_170, _463, _168 * _461)), fp_c1_1._m0[0].y);
            float _479 = _439 * _467;
            bool _481 = _475 > 0.0;
            float _483 = _479;
            if (_481)
            {
                _483 = sqrt(_457);
            }
            float _485 = _483;
            if (!_481)
            {
                _485 = 1.0;
            }
            bool _487 = fma(_445 * inversesqrt(_457), fp_c10_1._m0[558].z, (_425 * inversesqrt(_457)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _489 = clamp(fma(_475 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_475 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _491 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_425, fma(_469, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_445 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_469 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_425, fma(_469, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_445 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_469 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _493 = fma(_471, fp_c1_1._m0[0].z, -6.9831600189208984375);
            float _495 = _493;
            if (!_487)
            {
                _495 = 1.0;
            }
            float _497 = _495;
            if (_487)
            {
                _497 = fma(_491, -_491, fp_c1_1._m0[1].x) * fma(_491, -_491, fp_c1_1._m0[1].x);
            }
            float _499 = (_249 * (1.0 / (_239 + fma(_239, -_473, _473)))) * ((_235 * (1.0 / max(fma(_241, _477, -_477) + 1.0, fp_c1_1._m0[0].y))) * (_235 * (1.0 / max(fma(_241, _477, -_477) + 1.0, fp_c1_1._m0[0].y))));
            float _501 = exp2(_471 * _493);
            float _503 = (min(fma(_489, -_489, fp_c1_1._m0[1].x) * fma(_489, -_489, fp_c1_1._m0[1].x), _497) * (exp2(log2(clamp(fma(_485, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_443 * _467, -fp_c10_1._m0[558].z, _479 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_459 + (-0.0), 0.0, 1.0);
            float _505 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_225, fp_c10_1._m0[562].z, fma(_419, fp_c10_1._m0[562].y, _223 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _421, 0.5, 0.5), (-fma((fma(_225, fp_c10_1._m0[563].z, fma(_419, fp_c10_1._m0[563].y, _223 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _421, 0.5, 0.5)) + 1.0)).z > fma((fma(_225, fp_c10_1._m0[564].z, fma(_419, fp_c10_1._m0[564].y, _223 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _421, 0.5, 0.5)) || (_475 <= 0.0));
            _307 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _503) * fma(_256, fp_c1_1._m0[1].y, (_499 * (_258 + fma(_258, -_501, _501))) * 0.079577468335628509521484375), _505, _319);
            _309 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _503) * fma(_273, fp_c1_1._m0[1].y, (_499 * (_262 + fma(_262, -_501, _501))) * 0.079577468335628509521484375), _505, _321);
            _311 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _503) * fma(_279, fp_c1_1._m0[1].y, (_499 * (_260 + fma(_260, -_501, _501))) * 0.079577468335628509521484375), _505, _323);
        }
    }
    float _507 = _223 + (-fp_c3_1._m0[11].w);
    float _509 = _82.y;
    float _511 = _225 + (-fp_c3_1._m0[13].w);
    float _513 = _509 + (-fp_c3_1._m0[12].w);
    float _515 = fma(_511, _511, fma(_513, _513, _507 * _507));
    float _517 = clamp(fma(fma(_225, fp_c5_1._m0[14].z, fma(_509, fp_c5_1._m0[14].y, _223 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _519 = clamp(fma(_299 * _297, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _521 = fma(_201.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_297, _307, _299 * (fma(_266 * (_258 + fma(_258, -_251, _251)), fp_c1_1._m0[0].w, _256 * 0.3183098733425140380859375) * fma(_243, fp_c5_1._m0[5].x, _285))));
    float _523 = fma(_201.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_297, _309, _299 * (fma(_266 * (_262 + fma(_262, -_251, _251)), fp_c1_1._m0[0].w, _273 * 0.3183098733425140380859375) * fma(_243, fp_c5_1._m0[5].y, _287))));
    float _525 = exp2(log2(clamp(sqrt(_515) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_511 * inversesqrt(_515), fp_c5_1._m0[23].z, fma(_513 * inversesqrt(_515), fp_c5_1._m0[23].y, (_507 * inversesqrt(_515)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _527 = fma(_201.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_297, _311, _299 * (fma(_266 * (_260 + fma(_260, -_251, _251)), fp_c1_1._m0[0].w, _279 * 0.3183098733425140380859375) * fma(_243, fp_c5_1._m0[5].z, _289))));
    float _529 = fma((-_521) + fp_c5_1._m0[13].x, _517, _521);
    float _531 = fma((-_523) + fp_c5_1._m0[13].y, _517, _523);
    float _533 = fma((-_527) + fp_c5_1._m0[13].z, _517, _527);
    float _535 = clamp((-exp2((clamp(fma(sqrt(_515), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _85.x = fma((-_529) + fma(fma((_525 * fp_c7_1._m0[55].x) * _519, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _535, _529);
    _85.y = fma((-_531) + fma(fma((_525 * fp_c7_1._m0[55].y) * _519, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _535, _531);
    _85.z = fma((-_533) + fma(fma((_525 * fp_c7_1._m0[55].z) * _519, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _535, _533);
    _85.w = 1.0;
}


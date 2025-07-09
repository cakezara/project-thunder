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

layout(binding = 0) uniform sampler2D fp_tex_tcb_E;
layout(binding = 1) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_22;
layout(binding = 3) uniform sampler2D fp_tex_tcb_24;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _62;
layout(location = 0) in vec4 _64;
layout(location = 5) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 7) in vec4 _72;
layout(location = 2) in vec4 _74;
layout(location = 3) in vec4 _76;
layout(location = 0) out vec4 _79;
uint _6[12];

void main()
{
    bool _325 = false;
    float _86 = 1.0 / (_62.z * gl_FragCoord.w);
    vec2 _90 = texture(fp_tex_tcb_1C, vec2(_64.z, _64.w)).xy;
    float _92 = _90.x;
    float _94 = _90.y;
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_64.x, _64.y)).xy;
    float _98 = _96.x;
    float _100 = _96.y;
    float _102 = 1.0 / _66.w;
    vec2 _104 = texture(fp_tex_tcb_2A, vec2(fma(_66.x * _102, 0.5, 0.5), fma(_66.y * _102, -0.5, 0.5))).xy;
    float _106 = _68.x;
    float _108 = _68.y;
    float _110 = _68.z;
    float _112 = _70.x;
    float _114 = _70.y;
    float _116 = _70.z;
    float _118 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _120 = _74.w;
    float _122 = _74.z;
    float _124 = _74.y;
    float _126 = inversesqrt(fma(_110, _110, fma(_108, _108, _106 * _106)));
    float _128 = _106 * _126;
    float _130 = _108 * _126;
    float _132 = _110 * _126;
    float _134 = _74.x;
    float _136 = fma(_94 + (-_100), fp_c6_1._m0[8].z, _100);
    float _138 = fma(_92 + (-_98), fp_c6_1._m0[8].z, _98);
    float _140 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _142 = fma(sqrt(clamp((-fma(_92, _92, _94 * _94)) + 1.0, 0.0, 1.0)) + (-_140), fp_c6_1._m0[8].z, _140);
    float _144 = inversesqrt(fma(_142, _142, fma(_136, _136, _138 * _138)));
    float _146 = _136 * _144;
    float _148 = _138 * _144;
    float _150 = _142 * _144;
    float _152 = fma(_128, _150, fma(_134, _148, _146 * (fma(_130, _122, -(_132 * _124)) * _120)));
    float _154 = fma(_130, _150, fma(_124, _148, _146 * (fma(_132, _134, -(_128 * _122)) * _120)));
    float _156 = fma(_132, _150, fma(_122, _148, _146 * (fma(_128, _124, -(_130 * _134)) * _120)));
    float _158 = inversesqrt(fma(_116, _116, fma(_114, _114, _112 * _112)));
    float _160 = inversesqrt(fma(_156, _156, fma(_154, _154, _152 * _152)));
    float _162 = _112 * (-_158);
    float _164 = _114 * (-_158);
    float _166 = _116 * (-_158);
    float _168 = _152 * _160;
    float _170 = _154 * _160;
    float _172 = _156 * _160;
    float _174 = fma(_172, _166, fma(_170, _164, _168 * _162));
    float _176 = max(_174, fp_c1_1._m0[0].y);
    float _178 = fma(_168 * (-_174), -2.0, -_162);
    float _180 = fma(_170 * (-_174), -2.0, -_164);
    float _182 = fma(_172 * (-_174), -2.0, -_166);
    float _184 = 1.0 / max(abs(_182), max(abs(_178), abs(_180)));
    vec2 _186 = texture(fp_tex_tcb_38, vec2(_176, (-_118) + (-0.0))).xy;
    float _188 = _186.x;
    float _190 = _186.y;
    vec3 _194 = texture(fp_tex_tcb_36, vec4(_178 * _184, _180 * _184, _182 * _184, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_118 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _196 = texture(fp_tex_tcb_22, vec2(_72.x, _72.y)).xy;
    vec4 _199 = texture(fp_tex_tcb_24, vec2(_72.z, _72.w)).xyzw;
    float _201 = _199.w;
    float _203 = _162 + (-fp_c5_1._m0[23].x);
    float _205 = _164 + (-fp_c5_1._m0[23].y);
    float _207 = _166 + (-fp_c5_1._m0[23].z);
    float _209 = inversesqrt(fma(_207, _207, fma(_205, _205, _203 * _203)));
    float _211 = _203 * _209;
    float _213 = _205 * _209;
    float _215 = _76.z;
    float _217 = _207 * _209;
    float _219 = _76.x;
    float _221 = _168 * _170;
    float _223 = _170 * _172;
    float _225 = max(fma(_166, _217, fma(_164, _213, _162 * _211)), fp_c1_1._m0[0].y);
    float _227 = _172 * _172;
    float _229 = fma(_118, 0.5, 0.5);
    float _231 = _118 * _118;
    float _233 = _168 * _172;
    float _235 = max(fma(_172, _217, fma(_170, _213, _168 * _211)), fp_c1_1._m0[0].y) * max(fma(_172, _217, fma(_170, _213, _168 * _211)), fp_c1_1._m0[0].y);
    float _237 = fma(_170, -fp_c5_1._m0[23].y, _168 * (-fp_c5_1._m0[23].x));
    float _239 = (_229 * 0.5) * _229;
    float _241 = max(fma(_172, -fp_c5_1._m0[23].z, _237), fp_c1_1._m0[0].y);
    float _243 = 1.0 / (_239 + fma(_176, -_239, _176));
    float _245 = exp2(_225 * fma(_225, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _247 = clamp(fma(_172, -fp_c5_1._m0[23].z, _237), 0.0, 1.0);
    float _249 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].y;
    int _252 = max(0, min(int(trunc((_215 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _254 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].x;
    float _256 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].z;
    float _258 = fma(_168, _168, -(_170 * _170));
    float _260 = _62.w;
    float _262 = (_243 * (1.0 / (_239 + fma(_239, -_241, _241)))) * ((_231 * (1.0 / max(fma(_235, _231 * _231, -_235) + 1.0, fp_c1_1._m0[0].y))) * (_231 * (1.0 / max(fma(_235, _231 * _231, -_235) + 1.0, fp_c1_1._m0[0].y))));
    uint _265 = uint(int(uint((((int(uint(_252) >> uint(16)) * 20) << 16) + (((_252 & 65535) * 20) + max(0, min(int(trunc((_219 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _267 = fp_c10_1._m0[int(uint(int(_265)) >> uint(2))][int(_265) & 3];
    float _269 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    float _271 = fma(_269, -_254, _269);
    float _273 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _275 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _277 = fma(_273, -_249, _273);
    float _279 = fma(_275, -_256, _275);
    float _281 = clamp(_260 * clamp(fma(_196.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _283 = ((_199.x * _201) * _260) * 32.0;
    float _285 = ((_199.y * _201) * _260) * 32.0;
    float _287 = ((_199.z * _201) * _260) * 32.0;
    float _289 = fma(_271, _283, fma(_194.x, fma(_254, _188, _190), max(0.0, fma(_258, fp_c5_1._m0[31].x, (fma(_172, fp_c5_1._m0[25].z, fma(_170, fp_c5_1._m0[25].y, _168 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_233, fp_c5_1._m0[28].w, fma(_227, fp_c5_1._m0[28].z, fma(_223, fp_c5_1._m0[28].y, _221 * fp_c5_1._m0[28].x))))) * _271));
    float _291 = fma(_277, _285, fma(_194.y, fma(_249, _188, _190), max(0.0, fma(_258, fp_c5_1._m0[31].y, (fma(_172, fp_c5_1._m0[26].z, fma(_170, fp_c5_1._m0[26].y, _168 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_233, fp_c5_1._m0[29].w, fma(_227, fp_c5_1._m0[29].z, fma(_223, fp_c5_1._m0[29].y, _221 * fp_c5_1._m0[29].x))))) * _277));
    float _293 = fma(_279, _287, fma(_194.z, fma(_256, _188, _190), max(0.0, fma(_258, fp_c5_1._m0[31].z, (fma(_172, fp_c5_1._m0[27].z, fma(_170, fp_c5_1._m0[27].y, _168 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_233, fp_c5_1._m0[30].w, fma(_227, fp_c5_1._m0[30].z, fma(_223, fp_c5_1._m0[30].y, _221 * fp_c5_1._m0[30].x))))) * _279));
    float _295 = clamp((-_281) + 1.0, 0.0, 1.0);
    float _297 = clamp((-fma(_281, fp_c7_1._m0[37].w, clamp(_260 * clamp(fma(_196.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_104.x) + 1.0, (-_104.y) + 1.0), clamp(_76.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_62.x * gl_FragCoord.w) * _86, (_62.y * gl_FragCoord.w) * _86)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    int _299 = floatBitsToInt(_267);
    float _301 = _289;
    float _303 = _291;
    float _305 = _293;
    float _307 = _293;
    float _309 = _291;
    float _311 = _289;
    if (floatBitsToInt(_267) != (-1))
    {
        int _313 = 0;
        float _317;
        float _319;
        float _321;
        int _407;
        do
        {
            int _315 = _299 & 255;
            _317 = _301;
            _319 = _303;
            _321 = _305;
            _325 = uint(_315) >= 30u;
            if (_325)
            {
                break;
            }
            int _327 = _315 << 4;
            uint _329 = uint(int(uint(_327 + 7360) >> uint(2)));
            int _331 = int(_329) + 1;
            uint _333 = uint(int(uint(_327 + 7368) >> uint(2)));
            float _335 = (-_219) + fp_c10_1._m0[int(uint(int(_329)) >> uint(2))][int(_329) & 3];
            float _337 = fp_c10_1._m0[int(uint(_331) >> uint(2))][_331 & 3] + (-_76.y);
            float _339 = (-_215) + fp_c10_1._m0[int(uint(int(_333)) >> uint(2))][int(_333) & 3];
            float _341 = fma(_339, _339, fma(_337, _337, _335 * _335));
            float _343 = _335 * inversesqrt(_341);
            float _345 = _337 * inversesqrt(_341);
            float _347 = _339 * inversesqrt(_341);
            float _349 = _162 + _343;
            float _351 = _164 + _345;
            float _353 = _166 + _347;
            float _355 = inversesqrt(fma(_353, _353, fma(_351, _351, _349 * _349)));
            float _357 = _349 * _355;
            float _359 = _351 * _355;
            float _361 = _353 * _355;
            uint _363 = uint(int(uint(_327 + 6880) >> uint(2)));
            int _365 = int(_363) + 1;
            float _367 = fma(_172, _347, fma(_170, _345, _168 * _343));
            float _369 = max(fma(_166, _361, fma(_164, _359, _162 * _357)), fp_c1_1._m0[0].y);
            float _371 = max(fma(_172, _361, fma(_170, _359, _168 * _357)), fp_c1_1._m0[0].y) * max(fma(_172, _361, fma(_170, _359, _168 * _357)), fp_c1_1._m0[0].y);
            float _373 = max(_367, fp_c1_1._m0[0].y);
            uint _375 = uint(int(uint(_327 + 8320) >> uint(2)));
            float _377 = exp2(_369 * fma(_369, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _379 = (_243 * (1.0 / (_239 + fma(_239, -_373, _373)))) * ((_231 * (1.0 / max(fma(_231 * _231, _371, -_371) + 1.0, fp_c1_1._m0[0].y))) * (_231 * (1.0 / max(fma(_231 * _231, _371, -_371) + 1.0, fp_c1_1._m0[0].y))));
            uint _381 = uint(int(uint(_327 + 6408) >> uint(2)));
            float _383 = (_249 + fma(_249, -_377, _377)) * _379;
            bool _385 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_375)) >> uint(2))][int(_375) & 3]) != 0;
            uint _387 = uint(int(uint(_327 + 6400) >> uint(2)));
            int _389 = int(_387) + 1;
            float _391 = _383;
            if (!_385)
            {
                _391 = 1.0;
            }
            float _393 = _391;
            if (_385)
            {
                uint _395 = uint(int(uint(_327 + 7840) >> uint(2)));
                int _397 = int(_395) + 1;
                uint _399 = uint(int(uint(_327 + 7848) >> uint(2)));
                uint _401 = uint(int(uint(_327 + 6888) >> uint(2)));
                float _403 = fp_c10_1._m0[int(uint(int(_401)) >> uint(2))][int(_401) & 3];
                int _405 = int(_401) + 1;
                _393 = exp2(fp_c10_1._m0[int(uint(_405) >> uint(2))][_405 & 3] * log2(clamp(((-_403) + fma(_347, -fp_c10_1._m0[int(uint(int(_399)) >> uint(2))][int(_399) & 3], fma(_345, -fp_c10_1._m0[int(uint(_397) >> uint(2))][_397 & 3], _343 * (-fp_c10_1._m0[int(uint(int(_395)) >> uint(2))][int(_395) & 3])))) * (1.0 / ((-_403) + 1.0)), 0.0, 1.0)));
            }
            _407 = _313 + 1;
            float _409 = (exp2(fp_c10_1._m0[int(uint(_365) >> uint(2))][_365 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_363)) >> uint(2))][int(_363) & 3], -sqrt(_341), fp_c1_1._m0[1].x), 0.0, 1.0))) * _393) * clamp(_367 + (-0.0), 0.0, 1.0);
            float _411 = fma(fp_c10_1._m0[int(uint(int(_387)) >> uint(2))][int(_387) & 3] * _409, fma(_269, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_377, _377)) * _379) * 0.079577468335628509521484375), _301);
            float _413 = fma(fp_c10_1._m0[int(uint(_389) >> uint(2))][_389 & 3] * _409, fma(_273, fp_c1_1._m0[1].y, _383 * 0.079577468335628509521484375), _303);
            float _415 = fma(fp_c10_1._m0[int(uint(int(_381)) >> uint(2))][int(_381) & 3] * _409, fma(_275, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_377, _377)) * _379) * 0.079577468335628509521484375), _305);
            _299 = int(uint(_299) >> uint(8));
            _313 = _407;
            _301 = _411;
            _303 = _413;
            _305 = _415;
            _317 = _411;
            _319 = _413;
            _321 = _415;
        } while (!(_407 >= 4));
        _325 = false;
        _307 = _321;
        _309 = _319;
        _311 = _317;
        if ((_299 & 255) == 30)
        {
            float _417 = 1.0 / fp_c10_1._m0[561].y;
            float _419 = _215 + (-fp_c10_1._m0[557].z);
            float _421 = (-_219) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_417, fp_c10_1._m0[557].x);
            float _423 = (-_215) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_417, fp_c10_1._m0[557].z);
            float _425 = _421 * _421;
            float _427 = sqrt(fma(_423, _423, _425)) * (-fp_c10_1._m0[558].y);
            float _429 = _219 + (-fp_c10_1._m0[557].x);
            float _431 = inversesqrt(fma(_423, _423, fma(_427, _427, _425)));
            float _433 = _421 * _431;
            float _435 = _427 * _431;
            float _437 = _423 * _431;
            float _439 = _429 * fp_c10_1._m0[558].z;
            float _441 = _162 + _433;
            float _443 = _164 + _435;
            float _445 = _166 + _437;
            float _447 = _419 * fp_c10_1._m0[558].x;
            float _449 = inversesqrt(fma(_445, _445, fma(_443, _443, _441 * _441)));
            float _451 = _76.y;
            float _453 = _441 * _449;
            float _455 = ((-float(_447 < _439)) + float(_447 > _439)) * fp_c10_1._m0[561].y;
            float _457 = _443 * _449;
            float _459 = fma(_419, _419, _429 * _429);
            float _461 = 1.0 / (fma(_215, fp_c10_1._m0[565].z, fma(_451, fp_c10_1._m0[565].y, _219 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _463 = fma(_419, fp_c10_1._m0[558].z, _429 * fp_c10_1._m0[558].x);
            float _465 = fma(_172, _437, fma(_170, _435, _168 * _433));
            bool _467 = _463 > 0.0;
            float _469 = inversesqrt(fma(_437, _437, _433 * _433));
            float _471 = _445 * _449;
            float _473 = _445;
            if (_467)
            {
                _473 = sqrt(_459);
            }
            float _475 = _473;
            if (!_467)
            {
                _475 = 1.0;
            }
            bool _477 = fma(_419 * inversesqrt(_459), fp_c10_1._m0[558].z, (_429 * inversesqrt(_459)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _479 = max(fma(_172, _471, fma(_170, _457, _168 * _453)), fp_c1_1._m0[0].y) * max(fma(_172, _471, fma(_170, _457, _168 * _453)), fp_c1_1._m0[0].y);
            float _481 = clamp(fma(_463 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_463 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _483 = max(fma(_166, _471, fma(_164, _457, _162 * _453)), fp_c1_1._m0[0].y);
            float _485 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_429, fma(_455, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_419 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_455 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_429, fma(_455, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_419 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_455 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _487 = max(_465, fp_c1_1._m0[0].y);
            float _489 = log2(clamp(fma(_475, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _491 = _489;
            if (_477)
            {
                _491 = fma(_485, -_485, fp_c1_1._m0[1].x) * fma(_485, -_485, fp_c1_1._m0[1].x);
            }
            float _493 = exp2(_483 * fma(_483, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _495 = _491;
            if (!_477)
            {
                _495 = 1.0;
            }
            float _497 = (min(fma(_481, -_481, fp_c1_1._m0[1].x) * fma(_481, -_481, fp_c1_1._m0[1].x), _495) * (exp2(_489) * exp2(log2(clamp((fma(_437 * _469, -fp_c10_1._m0[558].z, (_433 * _469) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_465 + (-0.0), 0.0, 1.0);
            float _499 = (_243 * (1.0 / (_239 + fma(_239, -_487, _487)))) * ((_231 * (1.0 / max(fma(_231 * _231, _479, -_479) + 1.0, fp_c1_1._m0[0].y))) * (_231 * (1.0 / max(fma(_231 * _231, _479, -_479) + 1.0, fp_c1_1._m0[0].y))));
            float _501 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_215, fp_c10_1._m0[562].z, fma(_451, fp_c10_1._m0[562].y, _219 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _461, 0.5, 0.5), (-fma((fma(_215, fp_c10_1._m0[563].z, fma(_451, fp_c10_1._m0[563].y, _219 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _461, 0.5, 0.5)) + 1.0)).z > fma((fma(_215, fp_c10_1._m0[564].z, fma(_451, fp_c10_1._m0[564].y, _219 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _461, 0.5, 0.5)) || (_463 <= 0.0));
            _307 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _497) * fma(_275, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_493, _493)) * _499) * 0.079577468335628509521484375), _501, _321);
            _309 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _497) * fma(_273, fp_c1_1._m0[1].y, ((_249 + fma(_249, -_493, _493)) * _499) * 0.079577468335628509521484375), _501, _319);
            _311 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _497) * fma(_269, fp_c1_1._m0[1].y, ((_254 + fma(_254, -_493, _493)) * _499) * 0.079577468335628509521484375), _501, _317);
        }
    }
    float _503 = _219 + (-fp_c3_1._m0[11].w);
    float _505 = _76.y;
    float _507 = _215 + (-fp_c3_1._m0[13].w);
    float _509 = fma(_295, _307, _297 * (fma(_262 * (_256 + fma(_256, -_245, _245)), fp_c1_1._m0[0].w, _275 * 0.3183098733425140380859375) * fma(_247, fp_c5_1._m0[5].z, _287)));
    float _511 = _505 + (-fp_c3_1._m0[12].w);
    float _513 = fma(_507, _507, fma(_511, _511, _503 * _503));
    float _515 = clamp(fma(fma(_215, fp_c5_1._m0[14].z, fma(_505, fp_c5_1._m0[14].y, _219 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _517 = clamp(fma(_297 * _295, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _519 = fma(_295, _309, _297 * (fma(_262 * (_249 + fma(_249, -_245, _245)), fp_c1_1._m0[0].w, _273 * 0.3183098733425140380859375) * fma(_247, fp_c5_1._m0[5].y, _285)));
    float _521 = fma(_295, _311, _297 * (fma(_262 * (_254 + fma(_254, -_245, _245)), fp_c1_1._m0[0].w, _269 * 0.3183098733425140380859375) * fma(_247, fp_c5_1._m0[5].x, _283)));
    float _523 = exp2(log2(clamp(sqrt(_513) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_507 * inversesqrt(_513), fp_c5_1._m0[23].z, fma(_511 * inversesqrt(_513), fp_c5_1._m0[23].y, (_503 * inversesqrt(_513)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _525 = fma((-_521) + fp_c5_1._m0[13].x, _515, _521);
    float _527 = fma((-_519) + fp_c5_1._m0[13].y, _515, _519);
    float _529 = fma((-_509) + fp_c5_1._m0[13].z, _515, _509);
    float _531 = clamp((-exp2((clamp(fma(sqrt(_513), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_525) + fma(fma((_523 * fp_c7_1._m0[55].x) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _531, _525);
    _79.y = fma((-_527) + fma(fma((_523 * fp_c7_1._m0[55].y) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _531, _527);
    _79.z = fma((-_529) + fma(fma((_523 * fp_c7_1._m0[55].z) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _531, _529);
    _79.w = 1.0;
}


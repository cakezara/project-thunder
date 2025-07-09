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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
layout(binding = 5) uniform sampler2D fp_tex_tcb_22;
layout(binding = 6) uniform sampler2D fp_tex_tcb_24;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 7) in vec4 _76;
layout(location = 6) in vec4 _78;
layout(location = 5) in vec4 _80;
layout(location = 3) in vec4 _82;
layout(location = 0) out vec4 _85;
uint _6[12];

void main()
{
    bool _329 = false;
    float _92 = _68.x;
    float _94 = _68.y;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    float _104 = _70.x;
    float _106 = _70.y;
    float _108 = _70.z;
    float _110 = _72.y;
    float _112 = _72.z;
    float _114 = _72.x;
    float _116 = _72.w;
    float _118 = _74.x;
    float _120 = _74.y;
    float _122 = _74.z;
    float _124 = inversesqrt(fma(_108, _108, fma(_106, _106, _104 * _104)));
    float _126 = _108 * _124;
    float _128 = _104 * _124;
    float _130 = _106 * _124;
    float _132 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _134 = fma(_128, _132, fma(_100, _114, _102 * (fma(_130, _112, -(_126 * _110)) * _116)));
    float _136 = fma(_130, _132, fma(_100, _110, _102 * (fma(_126, _114, -(_128 * _112)) * _116)));
    float _138 = fma(_126, _132, fma(_100, _112, _102 * (fma(_128, _110, -(_130 * _114)) * _116)));
    float _140 = 1.0 / (_78.z * gl_FragCoord.w);
    float _142 = inversesqrt(fma(_122, _122, fma(_120, _120, _118 * _118)));
    float _144 = max(texture(fp_tex_tcb_10, vec2(_92, _94)).x, fp_c1_1._m0[0].x);
    float _146 = inversesqrt(fma(_138, _138, fma(_136, _136, _134 * _134)));
    float _148 = _118 * (-_142);
    float _150 = _120 * (-_142);
    float _152 = _134 * _146;
    float _154 = _136 * _146;
    float _156 = _122 * (-_142);
    float _158 = _138 * _146;
    float _160 = fma(_158, _156, fma(_154, _150, _152 * _148));
    float _162 = 1.0 / _80.w;
    float _164 = max(_160, fp_c1_1._m0[0].z);
    float _166 = fma(_152 * (-_160), -2.0, -_148);
    float _168 = fma(_154 * (-_160), -2.0, -_150);
    float _170 = fma(_158 * (-_160), -2.0, -_156);
    float _172 = 1.0 / max(abs(_170), max(abs(_166), abs(_168)));
    vec2 _174 = texture(fp_tex_tcb_2A, vec2(fma(_80.x * _162, 0.5, 0.5), fma(_80.y * _162, -0.5, 0.5))).xy;
    vec3 _178 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _180 = _178.x;
    float _182 = _178.y;
    float _184 = _178.z;
    float _186 = texture(fp_tex_tcb_12, vec2(_92, _94)).x;
    vec2 _188 = texture(fp_tex_tcb_38, vec2(_164, (-_144) + (-0.0))).xy;
    float _190 = _188.x;
    float _192 = _188.y;
    vec3 _194 = texture(fp_tex_tcb_36, vec4(_166 * _172, _168 * _172, _170 * _172, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_144 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _196 = texture(fp_tex_tcb_22, vec2(_76.x, _76.y)).xy;
    vec4 _199 = texture(fp_tex_tcb_24, vec2(_76.z, _76.w)).xyzw;
    float _201 = _199.w;
    vec3 _203 = texture(fp_tex_tcb_14, vec2(_92, _94)).xyz;
    float _205 = _148 + (-fp_c5_1._m0[23].x);
    float _207 = _150 + (-fp_c5_1._m0[23].y);
    float _209 = _156 + (-fp_c5_1._m0[23].z);
    float _211 = _152 * _154;
    float _213 = _154 * _158;
    float _215 = _158 * _158;
    float _217 = inversesqrt(fma(_209, _209, fma(_207, _207, _205 * _205)));
    float _219 = _205 * _217;
    float _221 = _207 * _217;
    float _223 = _209 * _217;
    float _225 = _82.x;
    float _227 = _152 * _158;
    float _229 = _82.z;
    float _231 = max(fma(_158, _223, fma(_154, _221, _152 * _219)), fp_c1_1._m0[0].z) * max(fma(_158, _223, fma(_154, _221, _152 * _219)), fp_c1_1._m0[0].z);
    float _233 = max(fma(_156, _223, fma(_150, _221, _148 * _219)), fp_c1_1._m0[0].z);
    int _236 = max(0, min(int(trunc((_229 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _238 = fma(_152, _152, -(_154 * _154));
    float _240 = _144 * _144;
    float _242 = fma(_144, 0.5, 0.5);
    float _244 = _240 * _240;
    float _246 = fma(_154, -fp_c5_1._m0[23].y, _152 * (-fp_c5_1._m0[23].x));
    float _248 = (_242 * 0.5) * _242;
    float _250 = exp2(_233 * fma(_233, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _252 = max(fma(_158, -fp_c5_1._m0[23].z, _246), fp_c1_1._m0[0].z);
    float _254 = fma(_186, _180 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _256 = _78.w;
    float _258 = 1.0 / (_248 + fma(_164, -_248, _164));
    float _260 = fma(_186, _182 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _262 = fma(_186, _184 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    uint _265 = uint(int(uint((((int(uint(_236) >> uint(16)) * 20) << 16) + (((_236 & 65535) * 20) + max(0, min(int(trunc((_225 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _267 = fp_c10_1._m0[int(uint(int(_265)) >> uint(2))][int(_265) & 3];
    float _269 = (_258 * (1.0 / (_248 + fma(_248, -_252, _252)))) * ((_240 * (1.0 / max(fma(_231, _244, -_231) + 1.0, fp_c1_1._m0[0].z))) * (_240 * (1.0 / max(fma(_231, _244, -_231) + 1.0, fp_c1_1._m0[0].z))));
    float _271 = fma(_180, -_186, _180);
    float _273 = fma(_184, -_186, _184);
    float _275 = fma(_254, -_271, _271);
    float _277 = fma(_182, -_186, _182);
    float _279 = ((_199.x * _201) * _256) * 32.0;
    float _281 = fma(_260, -_277, _277);
    float _283 = fma(_262, -_273, _273);
    float _285 = fma(_275, _279, fma(_194.x, fma(_254, _190, _192), max(0.0, fma(_238, fp_c5_1._m0[31].x, (fma(_158, fp_c5_1._m0[25].z, fma(_154, fp_c5_1._m0[25].y, _152 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_227, fp_c5_1._m0[28].w, fma(_215, fp_c5_1._m0[28].z, fma(_213, fp_c5_1._m0[28].y, _211 * fp_c5_1._m0[28].x))))) * _275));
    float _287 = ((_199.y * _201) * _256) * 32.0;
    float _289 = ((_199.z * _201) * _256) * 32.0;
    float _291 = clamp(_256 * clamp(fma(_196.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _293 = clamp(fma(_158, -fp_c5_1._m0[23].z, _246), 0.0, 1.0);
    float _295 = fma(_281, _287, fma(_194.y, fma(_260, _190, _192), max(0.0, fma(_238, fp_c5_1._m0[31].y, (fma(_158, fp_c5_1._m0[26].z, fma(_154, fp_c5_1._m0[26].y, _152 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_227, fp_c5_1._m0[29].w, fma(_215, fp_c5_1._m0[29].z, fma(_213, fp_c5_1._m0[29].y, _211 * fp_c5_1._m0[29].x))))) * _281));
    float _297 = fma(_283, _289, fma(_194.z, fma(_262, _190, _192), max(0.0, fma(_238, fp_c5_1._m0[31].z, (fma(_158, fp_c5_1._m0[27].z, fma(_154, fp_c5_1._m0[27].y, _152 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_227, fp_c5_1._m0[30].w, fma(_215, fp_c5_1._m0[30].z, fma(_213, fp_c5_1._m0[30].y, _211 * fp_c5_1._m0[30].x))))) * _283));
    float _299 = clamp((-_291) + 1.0, 0.0, 1.0);
    float _301 = clamp((-fma(_291, fp_c7_1._m0[37].w, clamp(_256 * clamp(fma(_196.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_174.x) + 1.0, (-_174.y) + 1.0), clamp(_82.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_78.x * gl_FragCoord.w) * _140, (_78.y * gl_FragCoord.w) * _140)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _303 = _295;
    float _305 = _297;
    float _307 = _285;
    float _309 = _297;
    float _311 = _295;
    float _313 = _285;
    if (floatBitsToInt(_267) != (-1))
    {
        int _315 = floatBitsToInt(_267);
        int _317 = 0;
        float _321;
        float _323;
        float _325;
        int _411;
        do
        {
            int _319 = _315 & 255;
            _321 = _307;
            _323 = _303;
            _325 = _305;
            _329 = uint(_319) >= 30u;
            if (_329)
            {
                break;
            }
            int _331 = _319 << 4;
            uint _333 = uint(int(uint(_331 + 7360) >> uint(2)));
            int _335 = int(_333) + 1;
            uint _337 = uint(int(uint(_331 + 7368) >> uint(2)));
            float _339 = (-_225) + fp_c10_1._m0[int(uint(int(_333)) >> uint(2))][int(_333) & 3];
            float _341 = fp_c10_1._m0[int(uint(_335) >> uint(2))][_335 & 3] + (-_82.y);
            float _343 = (-_229) + fp_c10_1._m0[int(uint(int(_337)) >> uint(2))][int(_337) & 3];
            float _345 = fma(_343, _343, fma(_341, _341, _339 * _339));
            float _347 = _339 * inversesqrt(_345);
            float _349 = _341 * inversesqrt(_345);
            float _351 = _343 * inversesqrt(_345);
            float _353 = _148 + _347;
            float _355 = _150 + _349;
            float _357 = _156 + _351;
            uint _359 = uint(int(uint(_331 + 6880) >> uint(2)));
            int _361 = int(_359) + 1;
            float _363 = inversesqrt(fma(_357, _357, fma(_355, _355, _353 * _353)));
            float _365 = _353 * _363;
            float _367 = _355 * _363;
            float _369 = _357 * _363;
            uint _371 = uint(int(uint(_331 + 8320) >> uint(2)));
            float _373 = fma(_158, _351, fma(_154, _349, _152 * _347));
            float _375 = max(fma(_158, _369, fma(_154, _367, _152 * _365)), fp_c1_1._m0[0].z) * max(fma(_158, _369, fma(_154, _367, _152 * _365)), fp_c1_1._m0[0].z);
            float _377 = max(fma(_156, _369, fma(_150, _367, _148 * _365)), fp_c1_1._m0[0].z);
            float _379 = max(_373, fp_c1_1._m0[0].z);
            uint _381 = uint(int(uint(_331 + 6408) >> uint(2)));
            uint _383 = uint(int(uint(_331 + 6400) >> uint(2)));
            int _385 = int(_383) + 1;
            float _387 = exp2(_377 * fma(_377, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _389 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_371)) >> uint(2))][int(_371) & 3]) != 0;
            float _391 = (_258 * (1.0 / (_248 + fma(_248, -_379, _379)))) * ((_240 * (1.0 / max(fma(_244, _375, -_375) + 1.0, fp_c1_1._m0[0].z))) * (_240 * (1.0 / max(fma(_244, _375, -_375) + 1.0, fp_c1_1._m0[0].z))));
            float _393 = (_254 + fma(_254, -_387, _387)) * _391;
            float _395 = _393;
            if (!_389)
            {
                _395 = 1.0;
            }
            float _397 = _395;
            if (_389)
            {
                uint _399 = uint(int(uint(_331 + 7840) >> uint(2)));
                int _401 = int(_399) + 1;
                uint _403 = uint(int(uint(_331 + 7848) >> uint(2)));
                uint _405 = uint(int(uint(_331 + 6888) >> uint(2)));
                float _407 = fp_c10_1._m0[int(uint(int(_405)) >> uint(2))][int(_405) & 3];
                int _409 = int(_405) + 1;
                _397 = exp2(fp_c10_1._m0[int(uint(_409) >> uint(2))][_409 & 3] * log2(clamp(((-_407) + fma(_351, -fp_c10_1._m0[int(uint(int(_403)) >> uint(2))][int(_403) & 3], fma(_349, -fp_c10_1._m0[int(uint(_401) >> uint(2))][_401 & 3], _347 * (-fp_c10_1._m0[int(uint(int(_399)) >> uint(2))][int(_399) & 3])))) * (1.0 / ((-_407) + 1.0)), 0.0, 1.0)));
            }
            _411 = _317 + 1;
            float _413 = (exp2(fp_c10_1._m0[int(uint(_361) >> uint(2))][_361 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_359)) >> uint(2))][int(_359) & 3], -sqrt(_345), fp_c1_1._m0[1].y), 0.0, 1.0))) * _397) * clamp(_373 + (-0.0), 0.0, 1.0);
            float _415 = fma(fp_c10_1._m0[int(uint(_385) >> uint(2))][_385 & 3] * _413, fma(_277, fp_c1_1._m0[1].z, ((_260 + fma(_260, -_387, _387)) * _391) * 0.079577468335628509521484375), _303);
            float _417 = fma(fp_c10_1._m0[int(uint(int(_381)) >> uint(2))][int(_381) & 3] * _413, fma(_273, fp_c1_1._m0[1].z, ((_262 + fma(_262, -_387, _387)) * _391) * 0.079577468335628509521484375), _305);
            float _419 = fma(fp_c10_1._m0[int(uint(int(_383)) >> uint(2))][int(_383) & 3] * _413, fma(_271, fp_c1_1._m0[1].z, _393 * 0.079577468335628509521484375), _307);
            _315 = int(uint(_315) >> uint(8));
            _317 = _411;
            _303 = _415;
            _305 = _417;
            _307 = _419;
            _321 = _419;
            _323 = _415;
            _325 = _417;
        } while (!(_411 >= 4));
        _329 = false;
        _309 = _325;
        _311 = _323;
        _313 = _321;
        if ((_315 & 255) == 30)
        {
            float _421 = _82.y;
            float _423 = 1.0 / (fma(_229, fp_c10_1._m0[565].z, fma(_421, fp_c10_1._m0[565].y, _225 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _425 = 1.0 / fp_c10_1._m0[561].y;
            float _427 = _229 + (-fp_c10_1._m0[557].z);
            float _429 = _427 * fp_c10_1._m0[558].x;
            float _431 = (-_225) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_425, fp_c10_1._m0[557].x);
            float _433 = (-_229) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_425, fp_c10_1._m0[557].z);
            float _435 = _431 * _431;
            float _437 = sqrt(fma(_433, _433, _435)) * (-fp_c10_1._m0[558].y);
            float _439 = _225 + (-fp_c10_1._m0[557].x);
            float _441 = inversesqrt(fma(_433, _433, fma(_437, _437, _435)));
            float _443 = _439 * fp_c10_1._m0[558].z;
            float _445 = _431 * _441;
            float _447 = _437 * _441;
            float _449 = _433 * _441;
            float _451 = _148 + _445;
            float _453 = _150 + _447;
            float _455 = _156 + _449;
            float _457 = fma(_427, _427, _439 * _439);
            float _459 = ((-float(_429 < _443)) + float(_429 > _443)) * fp_c10_1._m0[561].y;
            float _461 = fma(_158, _449, fma(_154, _447, _152 * _445));
            float _463 = inversesqrt(fma(_455, _455, fma(_453, _453, _451 * _451)));
            float _465 = _451 * _463;
            float _467 = _453 * _463;
            float _469 = _455 * _463;
            float _471 = fma(_427, fp_c10_1._m0[558].z, _439 * fp_c10_1._m0[558].x);
            float _473 = inversesqrt(fma(_449, _449, _445 * _445));
            bool _475 = _471 > 0.0;
            float _477 = max(_461, fp_c1_1._m0[0].z);
            float _479 = max(fma(_158, _469, fma(_154, _467, _152 * _465)), fp_c1_1._m0[0].z) * max(fma(_158, _469, fma(_154, _467, _152 * _465)), fp_c1_1._m0[0].z);
            float _481 = max(fma(_156, _469, fma(_150, _467, _148 * _465)), fp_c1_1._m0[0].z);
            float _483 = _427;
            float _485 = _481;
            if (_475)
            {
                _483 = sqrt(_457);
            }
            float _487 = _483;
            if (!_475)
            {
                _487 = 1.0;
            }
            bool _489 = fma(_427 * inversesqrt(_457), fp_c10_1._m0[558].z, (_439 * inversesqrt(_457)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _491 = clamp(fma(_471 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_471 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _493 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_439, fma(_459, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_427 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_459 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_439, fma(_459, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_427 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_459 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            if (!_489)
            {
                _485 = 1.0;
            }
            float _495 = _485;
            if (_489)
            {
                _495 = fma(_493, -_493, fp_c1_1._m0[1].y) * fma(_493, -_493, fp_c1_1._m0[1].y);
            }
            float _497 = exp2(_481 * fma(_481, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _499 = (_258 * (1.0 / (_248 + fma(_248, -_477, _477)))) * ((_240 * (1.0 / max(fma(_244, _479, -_479) + 1.0, fp_c1_1._m0[0].z))) * (_240 * (1.0 / max(fma(_244, _479, -_479) + 1.0, fp_c1_1._m0[0].z))));
            float _501 = (min(fma(_491, -_491, fp_c1_1._m0[1].y) * fma(_491, -_491, fp_c1_1._m0[1].y), _495) * (exp2(log2(clamp(fma(_487, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_449 * _473, -fp_c10_1._m0[558].z, (_445 * _473) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_461 + (-0.0), 0.0, 1.0);
            float _503 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_229, fp_c10_1._m0[562].z, fma(_421, fp_c10_1._m0[562].y, _225 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _423, 0.5, 0.5), (-fma((fma(_229, fp_c10_1._m0[563].z, fma(_421, fp_c10_1._m0[563].y, _225 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _423, 0.5, 0.5)) + 1.0)).z > fma((fma(_229, fp_c10_1._m0[564].z, fma(_421, fp_c10_1._m0[564].y, _225 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _423, 0.5, 0.5)) || (_471 <= 0.0));
            _309 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _501) * fma(_273, fp_c1_1._m0[1].z, ((_262 + fma(_262, -_497, _497)) * _499) * 0.079577468335628509521484375), _503, _325);
            _311 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _501) * fma(_277, fp_c1_1._m0[1].z, ((_260 + fma(_260, -_497, _497)) * _499) * 0.079577468335628509521484375), _503, _323);
            _313 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _501) * fma(_271, fp_c1_1._m0[1].z, ((_254 + fma(_254, -_497, _497)) * _499) * 0.079577468335628509521484375), _503, _321);
        }
    }
    float _505 = _225 + (-fp_c3_1._m0[11].w);
    float _507 = _82.y;
    float _509 = _229 + (-fp_c3_1._m0[13].w);
    float _511 = fma(_184 * _203.z, fp_c6_1._m0[11].x, fma(_299, _309, _301 * (fma((_262 + fma(_262, -_250, _250)) * _269, fp_c1_1._m0[1].x, _273 * 0.3183098733425140380859375) * fma(_293, fp_c5_1._m0[5].z, _289))));
    float _513 = fma(_182 * _203.y, fp_c6_1._m0[11].x, fma(_299, _311, _301 * (fma((_260 + fma(_260, -_250, _250)) * _269, fp_c1_1._m0[1].x, _277 * 0.3183098733425140380859375) * fma(_293, fp_c5_1._m0[5].y, _287))));
    float _515 = _507 + (-fp_c3_1._m0[12].w);
    float _517 = fma(_509, _509, fma(_515, _515, _505 * _505));
    float _519 = clamp(fma(_301 * _299, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _521 = fma(_180 * _203.x, fp_c6_1._m0[11].x, fma(_299, _313, _301 * (fma((_254 + fma(_254, -_250, _250)) * _269, fp_c1_1._m0[1].x, _271 * 0.3183098733425140380859375) * fma(_293, fp_c5_1._m0[5].x, _279))));
    float _523 = clamp(fma(fma(_229, fp_c5_1._m0[14].z, fma(_507, fp_c5_1._m0[14].y, _225 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _525 = exp2(log2(clamp(sqrt(_517) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_509 * inversesqrt(_517), fp_c5_1._m0[23].z, fma(_515 * inversesqrt(_517), fp_c5_1._m0[23].y, (_505 * inversesqrt(_517)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _527 = fma((-_521) + fp_c5_1._m0[13].x, _523, _521);
    float _529 = fma((-_513) + fp_c5_1._m0[13].y, _523, _513);
    float _531 = fma((-_511) + fp_c5_1._m0[13].z, _523, _511);
    float _533 = clamp((-exp2((clamp(fma(sqrt(_517), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _85.x = fma((-_527) + fma(fma((_525 * fp_c7_1._m0[55].x) * _519, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _533, _527);
    _85.y = fma((-_529) + fma(fma((_525 * fp_c7_1._m0[55].y) * _519, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _533, _529);
    _85.z = fma((-_531) + fma(fma((_525 * fp_c7_1._m0[55].z) * _519, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _533, _531);
    _85.w = 1.0;
}


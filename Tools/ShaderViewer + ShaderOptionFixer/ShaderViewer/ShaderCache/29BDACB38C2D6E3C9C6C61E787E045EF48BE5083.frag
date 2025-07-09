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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_12;
layout(binding = 3) uniform sampler2D fp_tex_tcb_14;
layout(binding = 4) uniform sampler2D fp_tex_tcb_22;
layout(binding = 5) uniform sampler2D fp_tex_tcb_24;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _66;
layout(location = 6) in vec4 _68;
layout(location = 5) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 2) in vec4 _74;
layout(location = 4) in vec4 _76;
layout(location = 7) in vec4 _78;
layout(location = 3) in vec4 _80;
layout(location = 0) out vec4 _83;
uint _6[12];

void main()
{
    bool _327 = false;
    float _90 = _66.x;
    float _92 = _66.y;
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _98 = _96.x;
    float _100 = _96.y;
    float _102 = 1.0 / (_68.z * gl_FragCoord.w);
    float _104 = 1.0 / _70.w;
    vec2 _106 = texture(fp_tex_tcb_2A, vec2(fma(_70.x * _104, 0.5, 0.5), fma(_70.y * _104, -0.5, 0.5))).xy;
    vec3 _110 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _112 = _110.x;
    float _114 = _110.y;
    float _116 = _110.z;
    float _118 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    float _120 = _72.x;
    float _122 = _72.y;
    float _124 = _72.z;
    float _126 = _74.y;
    float _128 = _74.z;
    float _130 = _74.w;
    float _132 = _74.x;
    float _134 = _76.x;
    float _136 = _76.y;
    float _138 = _76.z;
    float _140 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _142 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _144 = _124 * _142;
    float _146 = _122 * _142;
    float _148 = _120 * _142;
    float _150 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _152 = inversesqrt(fma(_138, _138, fma(_136, _136, _134 * _134)));
    float _154 = fma(_148, _150, fma(_98, _132, _100 * (fma(_146, _128, -(_144 * _126)) * _130)));
    float _156 = fma(_146, _150, fma(_98, _126, _100 * (fma(_144, _132, -(_148 * _128)) * _130)));
    float _158 = fma(_144, _150, fma(_98, _128, _100 * (fma(_148, _126, -(_146 * _132)) * _130)));
    float _160 = _134 * (-_152);
    float _162 = _136 * (-_152);
    float _164 = _138 * (-_152);
    float _166 = inversesqrt(fma(_158, _158, fma(_156, _156, _154 * _154)));
    float _168 = _154 * _166;
    float _170 = _156 * _166;
    float _172 = _158 * _166;
    float _174 = fma(_172, _164, fma(_170, _162, _168 * _160));
    float _176 = max(_174, fp_c1_1._m0[0].z);
    float _178 = fma(_168 * (-_174), -2.0, -_160);
    float _180 = fma(_170 * (-_174), -2.0, -_162);
    float _182 = fma(_172 * (-_174), -2.0, -_164);
    float _184 = _160 + (-fp_c5_1._m0[23].x);
    float _186 = 1.0 / max(abs(_182), max(abs(_178), abs(_180)));
    vec2 _188 = texture(fp_tex_tcb_38, vec2(_176, (-_140) + (-0.0))).xy;
    float _190 = _188.x;
    float _192 = _188.y;
    vec3 _194 = texture(fp_tex_tcb_36, vec4(_178 * _186, _180 * _186, _182 * _186, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_140 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _196 = texture(fp_tex_tcb_22, vec2(_78.x, _78.y)).xy;
    vec4 _199 = texture(fp_tex_tcb_24, vec2(_78.z, _78.w)).xyzw;
    float _201 = _199.w;
    vec3 _203 = texture(fp_tex_tcb_14, vec2(_90, _92)).xyz;
    float _205 = _162 + (-fp_c5_1._m0[23].y);
    float _207 = _164 + (-fp_c5_1._m0[23].z);
    float _209 = _168 * _172;
    float _211 = inversesqrt(fma(_207, _207, fma(_205, _205, _184 * _184)));
    float _213 = _184 * _211;
    float _215 = _80.z;
    float _217 = _205 * _211;
    float _219 = _80.x;
    float _221 = _207 * _211;
    float _223 = _168 * _170;
    float _225 = _170 * _172;
    float _227 = max(fma(_164, _221, fma(_162, _217, _160 * _213)), fp_c1_1._m0[0].z);
    float _229 = _172 * _172;
    float _231 = fma(_140, 0.5, 0.5);
    float _233 = _140 * _140;
    float _235 = fma(_170, -fp_c5_1._m0[23].y, _168 * (-fp_c5_1._m0[23].x));
    float _237 = _233 * _233;
    float _239 = max(fma(_172, _221, fma(_170, _217, _168 * _213)), fp_c1_1._m0[0].z) * max(fma(_172, _221, fma(_170, _217, _168 * _213)), fp_c1_1._m0[0].z);
    float _241 = (_231 * 0.5) * _231;
    float _243 = fma(_168, _168, -(_170 * _170));
    float _245 = max(fma(_172, -fp_c5_1._m0[23].z, _235), fp_c1_1._m0[0].z);
    int _248 = max(0, min(int(trunc((_215 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _250 = 1.0 / (_241 + fma(_176, -_241, _176));
    float _252 = exp2(_227 * fma(_227, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _254 = fma(_118, _112 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _256 = _68.w;
    float _258 = fma(_118, _114 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _260 = fma(_118, _116 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    uint _263 = uint(int(uint((((int(uint(_248) >> uint(16)) * 20) << 16) + (((_248 & 65535) * 20) + max(0, min(int(trunc((_219 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _265 = fp_c10_1._m0[int(uint(int(_263)) >> uint(2))][int(_263) & 3];
    float _267 = (_250 * (1.0 / (_241 + fma(_241, -_245, _245)))) * ((_233 * (1.0 / max(fma(_239, _237, -_239) + 1.0, fp_c1_1._m0[0].z))) * (_233 * (1.0 / max(fma(_239, _237, -_239) + 1.0, fp_c1_1._m0[0].z))));
    float _269 = fma(_112, -_118, _112);
    float _271 = fma(_114, -_118, _114);
    float _273 = fma(_269, -_254, _269);
    float _275 = fma(_271, -_258, _271);
    float _277 = fma(_116, -_118, _116);
    float _279 = fma(_277, -_260, _277);
    float _281 = ((_199.x * _201) * _256) * 32.0;
    float _283 = ((_199.y * _201) * _256) * 32.0;
    float _285 = clamp(_256 * clamp(fma(_196.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _287 = ((_199.z * _201) * _256) * 32.0;
    float _289 = clamp(fma(_172, -fp_c5_1._m0[23].z, _235), 0.0, 1.0);
    float _291 = fma(_273, _281, fma(_194.x, fma(_254, _190, _192), max(0.0, fma(_243, fp_c5_1._m0[31].x, (fma(_172, fp_c5_1._m0[25].z, fma(_170, fp_c5_1._m0[25].y, _168 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_209, fp_c5_1._m0[28].w, fma(_229, fp_c5_1._m0[28].z, fma(_225, fp_c5_1._m0[28].y, _223 * fp_c5_1._m0[28].x))))) * _273));
    float _293 = fma(_275, _283, fma(_194.y, fma(_258, _190, _192), max(0.0, fma(_243, fp_c5_1._m0[31].y, (fma(_172, fp_c5_1._m0[26].z, fma(_170, fp_c5_1._m0[26].y, _168 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_209, fp_c5_1._m0[29].w, fma(_229, fp_c5_1._m0[29].z, fma(_225, fp_c5_1._m0[29].y, _223 * fp_c5_1._m0[29].x))))) * _275));
    float _295 = fma(_279, _287, fma(_194.z, fma(_260, _190, _192), max(0.0, fma(_243, fp_c5_1._m0[31].z, (fma(_172, fp_c5_1._m0[27].z, fma(_170, fp_c5_1._m0[27].y, _168 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_209, fp_c5_1._m0[30].w, fma(_229, fp_c5_1._m0[30].z, fma(_225, fp_c5_1._m0[30].y, _223 * fp_c5_1._m0[30].x))))) * _279));
    float _297 = clamp((-_285) + 1.0, 0.0, 1.0);
    float _299 = clamp((-fma(_285, fp_c7_1._m0[37].w, clamp(_256 * clamp(fma(_196.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_106.x) + 1.0, (-_106.y) + 1.0), clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_68.x * gl_FragCoord.w) * _102, (_68.y * gl_FragCoord.w) * _102)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _301 = _293;
    float _303 = _295;
    float _305 = _291;
    float _307 = _295;
    float _309 = _293;
    float _311 = _291;
    if (floatBitsToInt(_265) != (-1))
    {
        int _313 = floatBitsToInt(_265);
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
            float _337 = (-_219) + fp_c10_1._m0[int(uint(int(_331)) >> uint(2))][int(_331) & 3];
            float _339 = fp_c10_1._m0[int(uint(_333) >> uint(2))][_333 & 3] + (-_80.y);
            float _341 = (-_215) + fp_c10_1._m0[int(uint(int(_335)) >> uint(2))][int(_335) & 3];
            float _343 = fma(_341, _341, fma(_339, _339, _337 * _337));
            float _345 = _337 * inversesqrt(_343);
            float _347 = _339 * inversesqrt(_343);
            float _349 = _341 * inversesqrt(_343);
            float _351 = _160 + _345;
            float _353 = _162 + _347;
            float _355 = _164 + _349;
            uint _357 = uint(int(uint(_329 + 6880) >> uint(2)));
            int _359 = int(_357) + 1;
            float _361 = inversesqrt(fma(_355, _355, fma(_353, _353, _351 * _351)));
            float _363 = _351 * _361;
            float _365 = _353 * _361;
            float _367 = _355 * _361;
            uint _369 = uint(int(uint(_329 + 8320) >> uint(2)));
            float _371 = fma(_172, _349, fma(_170, _347, _168 * _345));
            float _373 = max(fma(_172, _367, fma(_170, _365, _168 * _363)), fp_c1_1._m0[0].z) * max(fma(_172, _367, fma(_170, _365, _168 * _363)), fp_c1_1._m0[0].z);
            float _375 = max(fma(_164, _367, fma(_162, _365, _160 * _363)), fp_c1_1._m0[0].z);
            float _377 = max(_371, fp_c1_1._m0[0].z);
            uint _379 = uint(int(uint(_329 + 6408) >> uint(2)));
            uint _381 = uint(int(uint(_329 + 6400) >> uint(2)));
            int _383 = int(_381) + 1;
            float _385 = exp2(_375 * fma(_375, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _387 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_369)) >> uint(2))][int(_369) & 3]) != 0;
            float _389 = (_250 * (1.0 / (_241 + fma(_241, -_377, _377)))) * ((_233 * (1.0 / max(fma(_237, _373, -_373) + 1.0, fp_c1_1._m0[0].z))) * (_233 * (1.0 / max(fma(_237, _373, -_373) + 1.0, fp_c1_1._m0[0].z))));
            float _391 = (_254 + fma(_254, -_385, _385)) * _389;
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
            _409 = _315 + 1;
            float _411 = (exp2(fp_c10_1._m0[int(uint(_359) >> uint(2))][_359 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_357)) >> uint(2))][int(_357) & 3], -sqrt(_343), fp_c1_1._m0[1].y), 0.0, 1.0))) * _395) * clamp(_371 + (-0.0), 0.0, 1.0);
            float _413 = fma(fp_c10_1._m0[int(uint(_383) >> uint(2))][_383 & 3] * _411, fma(_271, fp_c1_1._m0[1].z, ((_258 + fma(_258, -_385, _385)) * _389) * 0.079577468335628509521484375), _301);
            float _415 = fma(fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3] * _411, fma(_277, fp_c1_1._m0[1].z, ((_260 + fma(_260, -_385, _385)) * _389) * 0.079577468335628509521484375), _303);
            float _417 = fma(fp_c10_1._m0[int(uint(int(_381)) >> uint(2))][int(_381) & 3] * _411, fma(_269, fp_c1_1._m0[1].z, _391 * 0.079577468335628509521484375), _305);
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
        _307 = _323;
        _309 = _321;
        _311 = _319;
        if ((_313 & 255) == 30)
        {
            float _419 = _80.y;
            float _421 = 1.0 / (fma(_215, fp_c10_1._m0[565].z, fma(_419, fp_c10_1._m0[565].y, _219 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _423 = 1.0 / fp_c10_1._m0[561].y;
            float _425 = _215 + (-fp_c10_1._m0[557].z);
            float _427 = _425 * fp_c10_1._m0[558].x;
            float _429 = (-_219) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_423, fp_c10_1._m0[557].x);
            float _431 = (-_215) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_423, fp_c10_1._m0[557].z);
            float _433 = _429 * _429;
            float _435 = sqrt(fma(_431, _431, _433)) * (-fp_c10_1._m0[558].y);
            float _437 = _219 + (-fp_c10_1._m0[557].x);
            float _439 = inversesqrt(fma(_431, _431, fma(_435, _435, _433)));
            float _441 = _437 * fp_c10_1._m0[558].z;
            float _443 = _429 * _439;
            float _445 = _435 * _439;
            float _447 = _431 * _439;
            float _449 = _160 + _443;
            float _451 = _162 + _445;
            float _453 = _164 + _447;
            float _455 = fma(_425, _425, _437 * _437);
            float _457 = ((-float(_427 < _441)) + float(_427 > _441)) * fp_c10_1._m0[561].y;
            float _459 = fma(_172, _447, fma(_170, _445, _168 * _443));
            float _461 = inversesqrt(fma(_453, _453, fma(_451, _451, _449 * _449)));
            float _463 = _449 * _461;
            float _465 = _451 * _461;
            float _467 = _453 * _461;
            float _469 = fma(_425, fp_c10_1._m0[558].z, _437 * fp_c10_1._m0[558].x);
            float _471 = inversesqrt(fma(_447, _447, _443 * _443));
            bool _473 = _469 > 0.0;
            float _475 = max(_459, fp_c1_1._m0[0].z);
            float _477 = max(fma(_172, _467, fma(_170, _465, _168 * _463)), fp_c1_1._m0[0].z) * max(fma(_172, _467, fma(_170, _465, _168 * _463)), fp_c1_1._m0[0].z);
            float _479 = max(fma(_164, _467, fma(_162, _465, _160 * _463)), fp_c1_1._m0[0].z);
            float _481 = _425;
            float _483 = _479;
            if (_473)
            {
                _481 = sqrt(_455);
            }
            float _485 = _481;
            if (!_473)
            {
                _485 = 1.0;
            }
            bool _487 = fma(_425 * inversesqrt(_455), fp_c10_1._m0[558].z, (_437 * inversesqrt(_455)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _489 = clamp(fma(_469 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_469 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _491 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_437, fma(_457, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_425 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_457 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_437, fma(_457, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_425 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_457 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            if (!_487)
            {
                _483 = 1.0;
            }
            float _493 = _483;
            if (_487)
            {
                _493 = fma(_491, -_491, fp_c1_1._m0[1].y) * fma(_491, -_491, fp_c1_1._m0[1].y);
            }
            float _495 = exp2(_479 * fma(_479, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _497 = (_250 * (1.0 / (_241 + fma(_241, -_475, _475)))) * ((_233 * (1.0 / max(fma(_237, _477, -_477) + 1.0, fp_c1_1._m0[0].z))) * (_233 * (1.0 / max(fma(_237, _477, -_477) + 1.0, fp_c1_1._m0[0].z))));
            float _499 = (min(fma(_489, -_489, fp_c1_1._m0[1].y) * fma(_489, -_489, fp_c1_1._m0[1].y), _493) * (exp2(log2(clamp(fma(_485, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_447 * _471, -fp_c10_1._m0[558].z, (_443 * _471) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_459 + (-0.0), 0.0, 1.0);
            float _501 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_215, fp_c10_1._m0[562].z, fma(_419, fp_c10_1._m0[562].y, _219 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _421, 0.5, 0.5), (-fma((fma(_215, fp_c10_1._m0[563].z, fma(_419, fp_c10_1._m0[563].y, _219 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _421, 0.5, 0.5)) + 1.0)).z > fma((fma(_215, fp_c10_1._m0[564].z, fma(_419, fp_c10_1._m0[564].y, _219 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _421, 0.5, 0.5)) || (_469 <= 0.0));
            _307 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _499) * fma(_277, fp_c1_1._m0[1].z, ((_260 + fma(_260, -_495, _495)) * _497) * 0.079577468335628509521484375), _501, _323);
            _309 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _499) * fma(_271, fp_c1_1._m0[1].z, ((_258 + fma(_258, -_495, _495)) * _497) * 0.079577468335628509521484375), _501, _321);
            _311 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _499) * fma(_269, fp_c1_1._m0[1].z, ((_254 + fma(_254, -_495, _495)) * _497) * 0.079577468335628509521484375), _501, _319);
        }
    }
    float _503 = _219 + (-fp_c3_1._m0[11].w);
    float _505 = _80.y;
    float _507 = _215 + (-fp_c3_1._m0[13].w);
    float _509 = fma(_116 * _203.z, fp_c6_1._m0[11].x, fma(_297, _307, _299 * (fma((_260 + fma(_260, -_252, _252)) * _267, fp_c1_1._m0[1].x, _277 * 0.3183098733425140380859375) * fma(_289, fp_c5_1._m0[5].z, _287))));
    float _511 = fma(_114 * _203.y, fp_c6_1._m0[11].x, fma(_297, _309, _299 * (fma((_258 + fma(_258, -_252, _252)) * _267, fp_c1_1._m0[1].x, _271 * 0.3183098733425140380859375) * fma(_289, fp_c5_1._m0[5].y, _283))));
    float _513 = _505 + (-fp_c3_1._m0[12].w);
    float _515 = fma(_507, _507, fma(_513, _513, _503 * _503));
    float _517 = clamp(fma(_299 * _297, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _519 = fma(_112 * _203.x, fp_c6_1._m0[11].x, fma(_297, _311, _299 * (fma((_254 + fma(_254, -_252, _252)) * _267, fp_c1_1._m0[1].x, _269 * 0.3183098733425140380859375) * fma(_289, fp_c5_1._m0[5].x, _281))));
    float _521 = clamp(fma(fma(_215, fp_c5_1._m0[14].z, fma(_505, fp_c5_1._m0[14].y, _219 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _523 = exp2(log2(clamp(sqrt(_515) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_507 * inversesqrt(_515), fp_c5_1._m0[23].z, fma(_513 * inversesqrt(_515), fp_c5_1._m0[23].y, (_503 * inversesqrt(_515)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _525 = fma((-_519) + fp_c5_1._m0[13].x, _521, _519);
    float _527 = fma((-_511) + fp_c5_1._m0[13].y, _521, _511);
    float _529 = fma((-_509) + fp_c5_1._m0[13].z, _521, _509);
    float _531 = clamp((-exp2((clamp(fma(sqrt(_515), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_525) + fma(fma((_523 * fp_c7_1._m0[55].x) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _531, _525);
    _83.y = fma((-_527) + fma(fma((_523 * fp_c7_1._m0[55].y) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _531, _527);
    _83.z = fma((-_529) + fma(fma((_523 * fp_c7_1._m0[55].z) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _531, _529);
    _83.w = 1.0;
}


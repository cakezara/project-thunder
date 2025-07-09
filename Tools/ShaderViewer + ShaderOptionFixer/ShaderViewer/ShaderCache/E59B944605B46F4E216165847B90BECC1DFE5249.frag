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
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_1A;
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
layout(location = 5) in vec4 _76;
layout(location = 6) in vec4 _78;
layout(location = 7) in vec4 _80;
layout(location = 3) in vec4 _82;
layout(location = 0) out vec4 _85;
uint _6[12];

void main()
{
    bool _333 = false;
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
    float _140 = inversesqrt(fma(_122, _122, fma(_120, _120, _118 * _118)));
    float _142 = _118 * (-_140);
    float _144 = inversesqrt(fma(_138, _138, fma(_136, _136, _134 * _134)));
    float _146 = _120 * (-_140);
    float _148 = 1.0 / (_78.z * gl_FragCoord.w);
    float _150 = _122 * (-_140);
    float _152 = _134 * _144;
    float _154 = _136 * _144;
    float _156 = _138 * _144;
    float _158 = 1.0 / _76.w;
    float _160 = fma(_156, _150, fma(_154, _146, _152 * _142));
    float _162 = max(texture(fp_tex_tcb_10, vec2(_92, _94)).x, fp_c1_1._m0[0].x);
    float _164 = fma(_152 * (-_160), -2.0, -_142);
    float _166 = fma(_154 * (-_160), -2.0, -_146);
    float _168 = fma(_156 * (-_160), -2.0, -_150);
    vec2 _170 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _158, 0.5, 0.5), fma(_76.y * _158, -0.5, 0.5))).xy;
    float _172 = max(_160, fp_c1_1._m0[0].z);
    float _174 = 1.0 / max(abs(_168), max(abs(_164), abs(_166)));
    vec3 _178 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _180 = _178.x;
    float _182 = _178.y;
    float _184 = _178.z;
    float _186 = texture(fp_tex_tcb_12, vec2(_92, _94)).x;
    float _188 = texture(fp_tex_tcb_1A, vec2(_92, _94)).x;
    vec2 _190 = texture(fp_tex_tcb_22, vec2(_80.x, _80.y)).xy;
    vec4 _193 = texture(fp_tex_tcb_24, vec2(_80.z, _80.w)).xyzw;
    float _195 = _193.w;
    vec2 _197 = texture(fp_tex_tcb_38, vec2(_172, (-_162) + (-0.0))).xy;
    float _199 = _197.x;
    float _201 = _197.y;
    vec3 _203 = texture(fp_tex_tcb_36, vec4(_164 * _174, _166 * _174, _168 * _174, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_162 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _205 = _142 + (-fp_c5_1._m0[23].x);
    float _207 = _82.z;
    float _209 = _146 + (-fp_c5_1._m0[23].y);
    float _211 = _150 + (-fp_c5_1._m0[23].z);
    float _213 = _152 * _156;
    float _215 = _82.x;
    float _217 = inversesqrt(fma(_211, _211, fma(_209, _209, _205 * _205)));
    float _219 = _205 * _217;
    float _221 = _152 * _154;
    float _223 = _209 * _217;
    float _225 = _211 * _217;
    float _227 = _154 * _156;
    float _229 = _156 * _156;
    float _231 = _162 * _162;
    float _233 = fma(_162, 0.5, 0.5);
    float _235 = fma(_154, -fp_c5_1._m0[23].y, _152 * (-fp_c5_1._m0[23].x));
    float _237 = max(fma(_156, _225, fma(_154, _223, _152 * _219)), fp_c1_1._m0[0].z) * max(fma(_156, _225, fma(_154, _223, _152 * _219)), fp_c1_1._m0[0].z);
    float _239 = (_233 * 0.5) * _233;
    float _241 = max(fma(_156, -fp_c5_1._m0[23].z, _235), fp_c1_1._m0[0].z);
    int _244 = max(0, min(int(trunc((_207 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _246 = 1.0 / (_239 + fma(_172, -_239, _172));
    float _248 = max(fma(_150, _225, fma(_146, _223, _142 * _219)), fp_c1_1._m0[0].z);
    float _250 = fma(_152, _152, -(_154 * _154));
    float _252 = (_246 * (1.0 / (_239 + fma(_239, -_241, _241)))) * ((_231 * (1.0 / max(fma(_237, _231 * _231, -_237) + 1.0, fp_c1_1._m0[0].z))) * (_231 * (1.0 / max(fma(_237, _231 * _231, -_237) + 1.0, fp_c1_1._m0[0].z))));
    float _254 = fma(_186, _180 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _256 = fma(_186, _182 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _258 = _78.w;
    float _260 = fma(_186, _184 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _262 = clamp(fma(_156, -fp_c5_1._m0[23].z, _235), 0.0, 1.0);
    float _264 = exp2(_248 * fma(_248, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _266 = fma(fma(_180, fp_c6_1._m0[41].z, -_254), _188, _254);
    float _268 = fma(fma(_182, fp_c6_1._m0[41].z, -_256), _188, _256);
    float _270 = fma(fma(_184, fp_c6_1._m0[41].z, -_260), _188, _260);
    float _272 = fma(_180, -_186, _180);
    uint _275 = uint(int(uint((((int(uint(_244) >> uint(16)) * 20) << 16) + (((_244 & 65535) * 20) + max(0, min(int(trunc((_215 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _277 = fp_c10_1._m0[int(uint(int(_275)) >> uint(2))][int(_275) & 3];
    float _279 = fma(_182, -_186, _182);
    float _281 = fma(_184, -_186, _184);
    float _283 = fma(_266, -_272, _272);
    float _285 = fma(_268, -_279, _279);
    float _287 = fma(_270, -_281, _281);
    float _289 = clamp(_258 * clamp(fma(_190.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _291 = ((_193.x * _195) * _258) * 32.0;
    float _293 = ((_193.y * _195) * _258) * 32.0;
    float _295 = ((_193.z * _195) * _258) * 32.0;
    float _297 = fma(_283, _291, fma(fma(_266, _199, _201), _203.x, max(0.0, fma(_250, fp_c5_1._m0[31].x, (fma(_156, fp_c5_1._m0[25].z, fma(_154, fp_c5_1._m0[25].y, _152 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_213, fp_c5_1._m0[28].w, fma(_229, fp_c5_1._m0[28].z, fma(_227, fp_c5_1._m0[28].y, _221 * fp_c5_1._m0[28].x))))) * _283));
    float _299 = fma(_285, _293, fma(fma(_268, _199, _201), _203.y, max(0.0, fma(_250, fp_c5_1._m0[31].y, (fma(_156, fp_c5_1._m0[26].z, fma(_154, fp_c5_1._m0[26].y, _152 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_213, fp_c5_1._m0[29].w, fma(_229, fp_c5_1._m0[29].z, fma(_227, fp_c5_1._m0[29].y, _221 * fp_c5_1._m0[29].x))))) * _285));
    float _301 = fma(_287, _295, fma(fma(_270, _199, _201), _203.z, max(0.0, fma(_250, fp_c5_1._m0[31].z, (fma(_156, fp_c5_1._m0[27].z, fma(_154, fp_c5_1._m0[27].y, _152 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_213, fp_c5_1._m0[30].w, fma(_229, fp_c5_1._m0[30].z, fma(_227, fp_c5_1._m0[30].y, _221 * fp_c5_1._m0[30].x))))) * _287));
    float _303 = clamp((-_289) + 1.0, 0.0, 1.0);
    float _305 = clamp((-fma(_289, fp_c7_1._m0[37].w, clamp(_258 * clamp(fma(_190.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_170.x) + 1.0, (-_170.y) + 1.0), clamp(_82.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_78.x * gl_FragCoord.w) * _148, (_78.y * gl_FragCoord.w) * _148)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _307 = _299;
    float _309 = _301;
    float _311 = _297;
    float _313 = _297;
    float _315 = _299;
    float _317 = _301;
    if (floatBitsToInt(_277) != (-1))
    {
        int _319 = floatBitsToInt(_277);
        int _321 = 0;
        float _325;
        float _327;
        float _329;
        int _415;
        do
        {
            int _323 = _319 & 255;
            _325 = _311;
            _327 = _307;
            _329 = _309;
            _333 = uint(_323) >= 30u;
            if (_333)
            {
                break;
            }
            int _335 = _323 << 4;
            uint _337 = uint(int(uint(_335 + 7360) >> uint(2)));
            int _339 = int(_337) + 1;
            uint _341 = uint(int(uint(_335 + 7368) >> uint(2)));
            float _343 = (-_215) + fp_c10_1._m0[int(uint(int(_337)) >> uint(2))][int(_337) & 3];
            float _345 = fp_c10_1._m0[int(uint(_339) >> uint(2))][_339 & 3] + (-_82.y);
            float _347 = (-_207) + fp_c10_1._m0[int(uint(int(_341)) >> uint(2))][int(_341) & 3];
            float _349 = fma(_347, _347, fma(_345, _345, _343 * _343));
            float _351 = _343 * inversesqrt(_349);
            float _353 = _345 * inversesqrt(_349);
            float _355 = _347 * inversesqrt(_349);
            float _357 = _142 + _351;
            float _359 = _146 + _353;
            float _361 = _150 + _355;
            float _363 = inversesqrt(fma(_361, _361, fma(_359, _359, _357 * _357)));
            float _365 = _357 * _363;
            float _367 = _359 * _363;
            float _369 = _361 * _363;
            float _371 = max(fma(_150, _369, fma(_146, _367, _142 * _365)), fp_c1_1._m0[0].z);
            uint _373 = uint(int(uint(_335 + 6880) >> uint(2)));
            int _375 = int(_373) + 1;
            float _377 = fma(_156, _355, fma(_154, _353, _152 * _351));
            float _379 = max(fma(_156, _369, fma(_154, _367, _152 * _365)), fp_c1_1._m0[0].z) * max(fma(_156, _369, fma(_154, _367, _152 * _365)), fp_c1_1._m0[0].z);
            float _381 = max(_377, fp_c1_1._m0[0].z);
            uint _383 = uint(int(uint(_335 + 8320) >> uint(2)));
            float _385 = exp2(_371 * fma(_371, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _387 = (_246 * (1.0 / (_239 + fma(_239, -_381, _381)))) * ((_231 * (1.0 / max(fma(_231 * _231, _379, -_379) + 1.0, fp_c1_1._m0[0].z))) * (_231 * (1.0 / max(fma(_231 * _231, _379, -_379) + 1.0, fp_c1_1._m0[0].z))));
            bool _389 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_383)) >> uint(2))][int(_383) & 3]) != 0;
            uint _391 = uint(int(uint(_335 + 6408) >> uint(2)));
            uint _393 = uint(int(uint(_335 + 6400) >> uint(2)));
            int _395 = int(_393) + 1;
            float _397 = (_268 + fma(_268, -_385, _385)) * _387;
            float _399 = _397;
            if (!_389)
            {
                _399 = 1.0;
            }
            float _401 = _399;
            if (_389)
            {
                uint _403 = uint(int(uint(_335 + 7840) >> uint(2)));
                int _405 = int(_403) + 1;
                uint _407 = uint(int(uint(_335 + 7848) >> uint(2)));
                uint _409 = uint(int(uint(_335 + 6888) >> uint(2)));
                float _411 = fp_c10_1._m0[int(uint(int(_409)) >> uint(2))][int(_409) & 3];
                int _413 = int(_409) + 1;
                _401 = exp2(fp_c10_1._m0[int(uint(_413) >> uint(2))][_413 & 3] * log2(clamp(((-_411) + fma(_355, -fp_c10_1._m0[int(uint(int(_407)) >> uint(2))][int(_407) & 3], fma(_353, -fp_c10_1._m0[int(uint(_405) >> uint(2))][_405 & 3], _351 * (-fp_c10_1._m0[int(uint(int(_403)) >> uint(2))][int(_403) & 3])))) * (1.0 / ((-_411) + 1.0)), 0.0, 1.0)));
            }
            _415 = _321 + 1;
            float _417 = (exp2(fp_c10_1._m0[int(uint(_375) >> uint(2))][_375 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_373)) >> uint(2))][int(_373) & 3], -sqrt(_349), fp_c1_1._m0[1].y), 0.0, 1.0))) * _401) * clamp(_377 + (-0.0), 0.0, 1.0);
            float _419 = fma(fp_c10_1._m0[int(uint(_395) >> uint(2))][_395 & 3] * _417, fma(_279, fp_c1_1._m0[1].z, _397 * 0.079577468335628509521484375), _307);
            float _421 = fma(fp_c10_1._m0[int(uint(int(_391)) >> uint(2))][int(_391) & 3] * _417, fma(_281, fp_c1_1._m0[1].z, ((_270 + fma(_270, -_385, _385)) * _387) * 0.079577468335628509521484375), _309);
            float _423 = fma(fp_c10_1._m0[int(uint(int(_393)) >> uint(2))][int(_393) & 3] * _417, fma(_272, fp_c1_1._m0[1].z, ((_266 + fma(_266, -_385, _385)) * _387) * 0.079577468335628509521484375), _311);
            _319 = int(uint(_319) >> uint(8));
            _321 = _415;
            _307 = _419;
            _309 = _421;
            _311 = _423;
            _325 = _423;
            _327 = _419;
            _329 = _421;
        } while (!(_415 >= 4));
        _333 = false;
        _313 = _325;
        _315 = _327;
        _317 = _329;
        if ((_319 & 255) == 30)
        {
            float _425 = 1.0 / fp_c10_1._m0[561].y;
            float _427 = _207 + (-fp_c10_1._m0[557].z);
            float _429 = (-_215) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_425, fp_c10_1._m0[557].x);
            float _431 = (-_207) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_425, fp_c10_1._m0[557].z);
            float _433 = _429 * _429;
            float _435 = sqrt(fma(_431, _431, _433)) * (-fp_c10_1._m0[558].y);
            float _437 = _215 + (-fp_c10_1._m0[557].x);
            float _439 = inversesqrt(fma(_431, _431, fma(_435, _435, _433)));
            float _441 = _437 * fp_c10_1._m0[558].z;
            float _443 = _429 * _439;
            float _445 = _435 * _439;
            float _447 = _431 * _439;
            float _449 = _142 + _443;
            float _451 = _146 + _445;
            float _453 = _150 + _447;
            float _455 = _427 * fp_c10_1._m0[558].x;
            float _457 = inversesqrt(fma(_453, _453, fma(_451, _451, _449 * _449)));
            float _459 = _82.y;
            float _461 = _449 * _457;
            float _463 = ((-float(_455 < _441)) + float(_455 > _441)) * fp_c10_1._m0[561].y;
            float _465 = _451 * _457;
            float _467 = fma(_427, _427, _437 * _437);
            float _469 = 1.0 / (fma(_207, fp_c10_1._m0[565].z, fma(_459, fp_c10_1._m0[565].y, _215 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _471 = fma(_427, fp_c10_1._m0[558].z, _437 * fp_c10_1._m0[558].x);
            bool _473 = _471 > 0.0;
            float _475 = fma(_156, _447, fma(_154, _445, _152 * _443));
            float _477 = _453 * _457;
            float _479 = inversesqrt(fma(_447, _447, _443 * _443));
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
            float _485 = max(fma(_156, _477, fma(_154, _465, _152 * _461)), fp_c1_1._m0[0].z) * max(fma(_156, _477, fma(_154, _465, _152 * _461)), fp_c1_1._m0[0].z);
            float _487 = max(fma(_150, _477, fma(_146, _465, _142 * _461)), fp_c1_1._m0[0].z);
            bool _489 = fma(_427 * inversesqrt(_467), fp_c10_1._m0[558].z, (_437 * inversesqrt(_467)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _491 = clamp(fma(_471 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_471 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _493 = max(_475, fp_c1_1._m0[0].z);
            float _495 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_437, fma(_463, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_427 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_463 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_437, fma(_463, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_427 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_463 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _497 = log2(clamp(fma(_483, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _499 = _497;
            if (!_489)
            {
                _499 = 1.0;
            }
            float _501 = _499;
            if (_489)
            {
                _501 = fma(_495, -_495, fp_c1_1._m0[1].y) * fma(_495, -_495, fp_c1_1._m0[1].y);
            }
            float _503 = exp2(_487 * fma(_487, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _505 = (_246 * (1.0 / (_239 + fma(_239, -_493, _493)))) * ((_231 * (1.0 / max(fma(_231 * _231, _485, -_485) + 1.0, fp_c1_1._m0[0].z))) * (_231 * (1.0 / max(fma(_231 * _231, _485, -_485) + 1.0, fp_c1_1._m0[0].z))));
            float _507 = (min(fma(_491, -_491, fp_c1_1._m0[1].y) * fma(_491, -_491, fp_c1_1._m0[1].y), _501) * (exp2(_497) * exp2(log2(clamp((fma(_447 * _479, -fp_c10_1._m0[558].z, (_443 * _479) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_475 + (-0.0), 0.0, 1.0);
            float _509 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_207, fp_c10_1._m0[562].z, fma(_459, fp_c10_1._m0[562].y, _215 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _469, 0.5, 0.5), (-fma((fma(_207, fp_c10_1._m0[563].z, fma(_459, fp_c10_1._m0[563].y, _215 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _469, 0.5, 0.5)) + 1.0)).z > fma((fma(_207, fp_c10_1._m0[564].z, fma(_459, fp_c10_1._m0[564].y, _215 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _469, 0.5, 0.5)) || (_471 <= 0.0));
            _313 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _507) * fma(_272, fp_c1_1._m0[1].z, ((_266 + fma(_266, -_503, _503)) * _505) * 0.079577468335628509521484375), _509, _325);
            _315 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _507) * fma(_279, fp_c1_1._m0[1].z, ((_268 + fma(_268, -_503, _503)) * _505) * 0.079577468335628509521484375), _509, _327);
            _317 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _507) * fma(_281, fp_c1_1._m0[1].z, ((_270 + fma(_270, -_503, _503)) * _505) * 0.079577468335628509521484375), _509, _329);
        }
    }
    float _511 = _215 + (-fp_c3_1._m0[11].w);
    float _513 = _82.y;
    float _515 = _207 + (-fp_c3_1._m0[13].w);
    float _517 = fma(_303, _313, _305 * (fma(_252 * (_266 + fma(_266, -_264, _264)), fp_c1_1._m0[1].x, _272 * 0.3183098733425140380859375) * fma(_262, fp_c5_1._m0[5].x, _291)));
    float _519 = fma(_303, _315, _305 * (fma(_252 * (_268 + fma(_268, -_264, _264)), fp_c1_1._m0[1].x, _279 * 0.3183098733425140380859375) * fma(_262, fp_c5_1._m0[5].y, _293)));
    float _521 = _513 + (-fp_c3_1._m0[12].w);
    float _523 = fma(_515, _515, fma(_521, _521, _511 * _511));
    float _525 = clamp(fma(fma(_207, fp_c5_1._m0[14].z, fma(_513, fp_c5_1._m0[14].y, _215 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _527 = fma(_303, _317, _305 * (fma(_252 * (_270 + fma(_270, -_264, _264)), fp_c1_1._m0[1].x, _281 * 0.3183098733425140380859375) * fma(_262, fp_c5_1._m0[5].z, _295)));
    float _529 = clamp(fma(_305 * _303, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _531 = exp2(log2(clamp(sqrt(_523) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_515 * inversesqrt(_523), fp_c5_1._m0[23].z, fma(_521 * inversesqrt(_523), fp_c5_1._m0[23].y, (_511 * inversesqrt(_523)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _533 = fma((-_517) + fp_c5_1._m0[13].x, _525, _517);
    float _535 = fma((-_519) + fp_c5_1._m0[13].y, _525, _519);
    float _537 = fma((-_527) + fp_c5_1._m0[13].z, _525, _527);
    float _539 = clamp((-exp2((clamp(fma(sqrt(_523), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _85.x = fma((-_533) + fma(fma((_531 * fp_c7_1._m0[55].x) * _529, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _539, _533);
    _85.y = fma((-_535) + fma(fma((_531 * fp_c7_1._m0[55].y) * _529, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _539, _535);
    _85.z = fma((-_537) + fma(fma((_531 * fp_c7_1._m0[55].z) * _529, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _539, _537);
    _85.w = 1.0;
}


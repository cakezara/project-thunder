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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 2, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(binding = 9, std140) uniform fp_c8
{
    vec4 _m0[4096];
} fp_c8_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_C;
layout(binding = 3) uniform sampler2D fp_tex_tcb_E;
layout(binding = 4) uniform sampler2D fp_tex_tcb_10;
layout(binding = 5) uniform sampler2D fp_tex_tcb_12;
layout(binding = 6) uniform sampler2D fp_tex_tcb_16;
layout(binding = 7) uniform sampler2D fp_tex_tcb_26;
layout(binding = 8) uniform sampler2D fp_tex_tcb_28;
layout(binding = 9) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 10) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 11) uniform sampler2D fp_tex_tcb_38;
layout(binding = 12) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _72;
layout(location = 1) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 5) in vec4 _78;
layout(location = 0) out vec4 _81;
layout(location = 6) in vec4 _83;
layout(location = 4) in vec4 _85;
layout(location = 3) in vec4 _87;
uint _6[16];

void main()
{
    bool _478 = false;
    float _94 = _72.x;
    float _96 = _72.y;
    float _98 = texture(fp_tex_tcb_8, vec2(_94, _96)).x;
    float _100 = _72.z;
    float _102 = _72.w;
    bool _106 = _98 <= 0.0;
    if (_106)
    {
        discard;
    }
    vec2 _110 = texture(fp_tex_tcb_E, vec2(_94, _96)).xy;
    float _112 = _110.x;
    float _114 = _110.y;
    vec3 _118 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _120 = _118.x;
    float _122 = _118.y;
    float _124 = _118.z;
    float _126 = _74.x;
    float _128 = _74.y;
    float _130 = _74.z;
    float _132 = _76.y;
    float _134 = _76.z;
    float _136 = _76.x;
    float _138 = _76.w;
    float _140 = inversesqrt(fma(_130, _130, fma(_128, _128, _126 * _126)));
    float _142 = _130 * _140;
    float _144 = _126 * _140;
    float _146 = _128 * _140;
    float _148 = 1.0 / _78.w;
    float _150 = texture(fp_tex_tcb_26, vec2(_100 + fp_c6_1._m0[26].w, _102 + fp_c6_1._m0[26].w)).x + (-texture(fp_tex_tcb_26, vec2(_100 + (-fp_c6_1._m0[26].w), _102 + (-fp_c6_1._m0[26].w))).x);
    float _152 = sqrt(clamp((-fma(_112, _112, _114 * _114)) + 1.0, 0.0, 1.0));
    float _154 = min((texture(fp_tex_tcb_26, vec2(_100, _102)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _156 = fma(_144, _152, fma(_112, _136, _114 * (fma(_146, _134, -(_142 * _132)) * _138)));
    float _158 = fma(_146, _152, fma(_112, _132, _114 * (fma(_142, _136, -(_144 * _134)) * _138)));
    float _160 = fma(_136 * _150, fp_c6_1._m0[27].x, _144);
    float _162 = fma(_142, _152, fma(_112, _134, _114 * (fma(_144, _132, -(_146 * _136)) * _138)));
    float _164 = fma(_132 * _150, fp_c6_1._m0[27].x, _146);
    float _166 = max(0.0, max(0.0, _154));
    float _168 = fma(clamp(_146 + (-0.0), 0.0, 1.0), (-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, fp_c7_1._m0[20].y);
    float _170 = _166 + (-fp_c7_1._m0[21].w);
    float _172 = fma(_134 * _150, fp_c6_1._m0[27].x, _142);
    float _174 = inversesqrt(fma(_162, _162, fma(_158, _158, _156 * _156)));
    float _176 = clamp(((-_166) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _178 = clamp(_170 + (-0.0), 0.0, 1.0);
    float _180 = clamp(((_154 + (-_166)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _182 = _162 * _174;
    float _184 = _156 * _174;
    float _186 = _158 * _174;
    float _188 = inversesqrt(fma(_172, _172, fma(_164, _164, _160 * _160)));
    bool _190 = min(_178 * 1000.0, 1.0) > 0.5;
    float _192 = fma(_176, fp_c8_1._m0[17].x, fma(_180, fp_c8_1._m0[3].x, _176 * fp_c8_1._m0[10].x));
    float _194 = fma(_176, fp_c8_1._m0[18].x, fma(_180, fp_c8_1._m0[4].x, _176 * fp_c8_1._m0[11].x));
    float _196 = fma(_176, fp_c8_1._m0[17].y, fma(_180, fp_c8_1._m0[3].y, _176 * fp_c8_1._m0[10].y));
    float _198 = fma(_176, fp_c8_1._m0[17].z, fma(_180, fp_c8_1._m0[3].z, _176 * fp_c8_1._m0[10].z));
    float _200 = fma(_176, fp_c8_1._m0[18].y, fma(_180, fp_c8_1._m0[4].y, _176 * fp_c8_1._m0[11].y));
    float _202 = fma(_176, fp_c8_1._m0[18].z, fma(_180, fp_c8_1._m0[4].z, _176 * fp_c8_1._m0[11].z));
    float _204 = _164 * _188;
    float _206 = _160 * _188;
    float _208 = _172 * _188;
    int _211 = floatBitsToInt(_122);
    int _213 = floatBitsToInt(_168);
    float _215 = _184;
    float _217 = _186;
    float _219 = _182;
    int _235;
    int _237;
    float _239;
    float _241;
    float _243;
    float _245;
    float _247;
    float _249;
    float _251;
    float _253;
    float _255;
    float _257;
    float _259;
    if (_190)
    {
        float _221 = clamp(_178 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _223 = fma(_194, -fp_c7_1._m0[45].y, _192);
        float _225 = _194 * fp_c7_1._m0[45].y;
        float _227 = fma(_202, -fp_c7_1._m0[45].y, _198);
        float _229 = fma(_223, _221, _225);
        float _231 = fma(fma(_200, -fp_c7_1._m0[45].y, _196), _221, _200 * fp_c7_1._m0[45].y);
        float _233 = fma(_227, _221, _202 * fp_c7_1._m0[45].y);
        _235 = floatBitsToInt(_223);
        _211 = floatBitsToInt(_227);
        _237 = floatBitsToInt(_225);
        _239 = fp_c7_1._m0[18].w;
        _241 = 0.0;
        _243 = _229;
        _245 = _231;
        _215 = fma(_168, (-_184) + _206, _184);
        _217 = fma(_168, (-_186) + _204, _186);
        _219 = fma(_168, (-_182) + _208, _182);
        _247 = _233;
        _249 = _192;
        _251 = _196;
        _253 = _198;
        _255 = _229 * fp_c7_1._m0[18].z;
        _257 = _231 * fp_c7_1._m0[18].z;
        _259 = _233 * fp_c7_1._m0[18].z;
    }
    else
    {
        vec3 _261 = texture(fp_tex_tcb_16, vec2(_94, _96)).xyz;
        float _263 = _261.x;
        float _265 = _261.y;
        float _267 = clamp(texture(fp_tex_tcb_C, vec2(_94, _96)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
        float _269 = fma((-_120) + fp_c6_1._m0[92].x, _267, _120);
        float _271 = fma((-_124) + fp_c6_1._m0[92].z, _267, _124);
        float _273 = fma((-_122) + fp_c6_1._m0[92].y, _267, _122);
        float _275 = _263 * fp_c6_1._m0[19].x;
        _235 = floatBitsToInt(_275);
        _213 = floatBitsToInt(_263);
        _237 = floatBitsToInt(_265);
        _239 = max(texture(fp_tex_tcb_10, vec2(_94, _96)).x, fp_c1_1._m0[0].y);
        _241 = texture(fp_tex_tcb_12, vec2(_94, _96)).x;
        _243 = _269;
        _245 = _273;
        _247 = _271;
        _249 = _269 * _275;
        _251 = _273 * (_265 * fp_c6_1._m0[19].y);
        _253 = _271 * (_261.z * fp_c6_1._m0[19].z);
        _255 = 0.0;
        _257 = 0.0;
        _259 = 0.0;
    }
    int _277 = _235;
    int _279 = _211;
    int _281 = _213;
    int _283 = _237;
    if (_106)
    {
        _277 = 0;
    }
    if (_106)
    {
        _279 = 0;
    }
    if (_106)
    {
        _281 = 0;
    }
    if (_106)
    {
        _283 = 0;
    }
    if (_106)
    {
        _81.x = intBitsToFloat(_277);
        _81.y = intBitsToFloat(_279);
        _81.z = intBitsToFloat(_281);
        _81.w = intBitsToFloat(_283);
        return;
    }
    float _285 = fma(_243, -_241, _243);
    float _287 = _85.x;
    float _289 = _85.y;
    float _291 = fma(_243 + (-0.039999999105930328369140625), _241, fp_c1_1._m0[0].z);
    float _293 = _85.z;
    float _295 = 1.0 / (_83.z * gl_FragCoord.w);
    float _297 = fma(_245, -_241, _245);
    float _299 = inversesqrt(fma(_293, _293, fma(_289, _289, _287 * _287)));
    float _301 = _287 * (-_299);
    float _303 = _289 * (-_299);
    vec2 _305 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _148, 0.5, 0.5), fma(_78.y * _148, -0.5, 0.5))).xy;
    float _307 = _293 * (-_299);
    float _309 = fma(_307, _219, fma(_303, _217, _301 * _215));
    float _311 = max(_309, fp_c1_1._m0[0].w);
    vec2 _313 = texture(fp_tex_tcb_38, vec2(_311, (-_239) + (-0.0))).xy;
    float _315 = clamp(_87.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _317 = (-_305.y) + 1.0;
    float _319 = fma(_247, -_241, _247);
    float _321 = fma(_245 + (-0.039999999105930328369140625), _241, fp_c1_1._m0[0].z);
    float _323 = fma(_247 + (-0.039999999105930328369140625), _241, fp_c1_1._m0[0].z);
    float _325 = _317 * _315;
    float _327 = clamp((-fma(max((-_305.x) + 1.0, _317), _315, fma(texture(fp_tex_tcb_28, vec2((_83.x * gl_FragCoord.w) * _295, (_83.y * gl_FragCoord.w) * _295)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _329 = _311;
    float _331 = _291;
    float _333 = _321;
    float _335 = _323;
    float _351;
    float _353;
    float _355;
    float _357;
    float _359;
    float _361;
    float _363;
    float _365;
    if (_190)
    {
        float _337 = fma(_307, -_219, fma(_303, -_217, _301 * (-_215)));
        float _339 = fma(_337 * _215, -2.0, -_301);
        float _341 = fma(_337 * _217, -2.0, -_303);
        float _343 = fma(_337 * _219, -2.0, -_307);
        float _345 = 1.0 / max(abs(_343), max(abs(_339), abs(_341)));
        vec3 _347 = texture(fp_tex_tcb_36, vec4(_339 * _345, _341 * _345, _343 * _345, float(12)), 0.0).xyz;
        float _349 = fma(_313.x, fp_c7_1._m0[19].x, _313.y);
        _351 = fma(_217 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _353 = _215 * fp_c7_1._m0[19].z;
        _355 = _219 * fp_c7_1._m0[19].z;
        _331 = fp_c7_1._m0[19].x;
        _333 = fp_c7_1._m0[19].x;
        _335 = fp_c7_1._m0[19].x;
        _357 = _347.x * _349;
        _359 = _347.z * _349;
        _361 = _347.y * _349;
        _363 = 0.0;
        _365 = 1.0;
    }
    else
    {
        float _367 = max(_309, fp_c1_1._m0[0].w);
        float _369 = fma(_307, -_219, fma(_303, -_217, _301 * (-_215)));
        float _371 = fma(_369 * _215, -2.0, -_301);
        float _373 = fma(_369 * _217, -2.0, -_303);
        float _375 = fma(_369 * _219, -2.0, -_307);
        float _377 = 1.0 / max(abs(_375), max(abs(_371), abs(_373)));
        vec2 _379 = texture(fp_tex_tcb_38, vec2(_367, (-_239) + (-0.0))).xy;
        float _381 = _379.x;
        float _383 = _379.y;
        vec3 _385 = texture(fp_tex_tcb_36, vec4(_371 * _377, _373 * _377, _375 * _377, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_239 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _387 = fma(fma(_208, -fp_c5_1._m0[23].z, fma(_204, -fp_c5_1._m0[23].y, _206 * (-fp_c5_1._m0[23].x))), -_217, _217);
        _351 = _217;
        _353 = _215;
        _355 = _219;
        _329 = _367;
        _357 = fma(_291, _381, _383) * _385.x;
        _359 = fma(_323, _381, _383) * _385.z;
        _361 = fma(_321, _381, _383) * _385.y;
        _363 = fp_c6_1._m0[17].w;
        _365 = clamp(fma(_387, clamp(_170 * (-7.0), 0.0, 1.0), -_387) + fp_c1_1._m0[1].x, 0.0, 1.0);
    }
    float _389 = _301 + (-fp_c5_1._m0[23].x);
    float _391 = _87.z;
    float _393 = _303 + (-fp_c5_1._m0[23].y);
    float _395 = _87.x;
    float _397 = _307 + (-fp_c5_1._m0[23].z);
    float _399 = inversesqrt(fma(_397, _397, fma(_393, _393, _389 * _389)));
    float _401 = _389 * _399;
    float _403 = _393 * _399;
    float _405 = _397 * _399;
    float _407 = _351 * _353;
    float _409 = _355 * _351;
    float _411 = fma(_239, 0.5, 0.5);
    int _413 = max(0, min(int(trunc((_391 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _415 = max(fma(_307, _405, fma(_303, _403, _301 * _401)), fp_c1_1._m0[0].w);
    float _417 = max(fma(_405, _219, fma(_403, _217, _401 * _215)), fp_c1_1._m0[0].w) * max(fma(_405, _219, fma(_403, _217, _401 * _215)), fp_c1_1._m0[0].w);
    float _419 = _239 * _239;
    float _421 = fma(_353, _353, -(_351 * _351));
    float _423 = _419 * _419;
    uint _426 = uint(int(uint((((int(uint(_413) >> uint(16)) * 20) << 16) + (((_413 & 65535) * 20) + max(0, min(int(trunc((_395 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _428 = fp_c10_1._m0[int(uint(int(_426)) >> uint(2))][int(_426) & 3];
    float _430 = (_411 * 0.5) * _411;
    float _432 = _355 * _353;
    float _434 = _355 * _355;
    float _436 = 1.0 / (_430 + fma(_329, -_430, _329));
    float _438 = exp2(_415 * fma(_415, fp_c1_1._m0[1].y, -6.9831600189208984375));
    float _440 = (_436 * (1.0 / (_430 + fma(max(fma(_219, -fp_c5_1._m0[23].z, fma(_217, -fp_c5_1._m0[23].y, _215 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_430, max(fma(_219, -fp_c5_1._m0[23].z, fma(_217, -fp_c5_1._m0[23].y, _215 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_419 * (1.0 / max(fma(_417, _423, -_417) + 1.0, fp_c1_1._m0[0].w))) * (_419 * (1.0 / max(fma(_417, _423, -_417) + 1.0, fp_c1_1._m0[0].w))));
    float _442 = fma(max(0.0, fma(_421, fp_c5_1._m0[31].x, (fma(_355, fp_c5_1._m0[25].z, fma(_351, fp_c5_1._m0[25].y, _353 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_432, fp_c5_1._m0[28].w, fma(_434, fp_c5_1._m0[28].z, fma(_409, fp_c5_1._m0[28].y, _407 * fp_c5_1._m0[28].x))))), fma(_285, -_331, _285), _357);
    float _444 = fma(max(0.0, fma(_421, fp_c5_1._m0[31].z, (fma(_355, fp_c5_1._m0[27].z, fma(_351, fp_c5_1._m0[27].y, _353 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_432, fp_c5_1._m0[30].w, fma(_434, fp_c5_1._m0[30].z, fma(_409, fp_c5_1._m0[30].y, _407 * fp_c5_1._m0[30].x))))), fma(_319, -_335, _319), _359);
    _6[0] = floatBitsToUint(fma((fma(_438, -_333, _438) + _333) * _440, fp_c1_1._m0[1].z, _297 * 0.3183098733425140380859375));
    float _446 = fma(max(0.0, fma(_421, fp_c5_1._m0[31].y, (fma(_355, fp_c5_1._m0[26].z, fma(_351, fp_c5_1._m0[26].y, _353 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_432, fp_c5_1._m0[29].w, fma(_434, fp_c5_1._m0[29].z, fma(_409, fp_c5_1._m0[29].y, _407 * fp_c5_1._m0[29].x))))), fma(_297, -_333, _297), _361);
    _6[1] = floatBitsToUint(fma((fma(_438, -_331, _438) + _331) * _440, fp_c1_1._m0[1].z, _285 * 0.3183098733425140380859375));
    int _448 = floatBitsToInt(_428);
    float _450 = _446;
    float _452 = _442;
    float _454 = _444;
    float _456 = _442;
    float _458 = _446;
    float _460 = _444;
    if (floatBitsToInt(_428) != (-1))
    {
        float _462 = clamp(fma(_325, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _464 = clamp((-_363) + 1.0, 0.0, 1.0);
        float _466 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
        int _468 = 0;
        float _472;
        float _474;
        float _476;
        int _564;
        do
        {
            int _470 = _448 & 255;
            _472 = _452;
            _474 = _450;
            _476 = _454;
            _478 = uint(_470) >= 30u;
            if (_478)
            {
                break;
            }
            int _480 = _470 << 4;
            uint _482 = uint(int(uint(_480 + 7360) >> uint(2)));
            int _484 = int(_482) + 1;
            uint _486 = uint(int(uint(_480 + 7368) >> uint(2)));
            float _488 = (-_395) + fp_c10_1._m0[int(uint(int(_482)) >> uint(2))][int(_482) & 3];
            float _490 = (-_391) + fp_c10_1._m0[int(uint(int(_486)) >> uint(2))][int(_486) & 3];
            float _492 = fp_c10_1._m0[int(uint(_484) >> uint(2))][_484 & 3] + (-_87.y);
            float _494 = fma(_490, _490, fma(_492, _492, _488 * _488));
            float _496 = _488 * inversesqrt(_494);
            float _498 = _492 * inversesqrt(_494);
            float _500 = _490 * inversesqrt(_494);
            float _502 = _301 + _496;
            float _504 = _303 + _498;
            float _506 = _307 + _500;
            uint _508 = uint(int(uint(_480 + 6880) >> uint(2)));
            int _510 = int(_508) + 1;
            float _512 = inversesqrt(fma(_506, _506, fma(_504, _504, _502 * _502)));
            float _514 = _502 * _512;
            float _516 = _504 * _512;
            float _518 = _506 * _512;
            uint _520 = uint(int(uint(_480 + 8320) >> uint(2)));
            float _522 = fma(_500, _219, fma(_498, _217, _496 * _215));
            float _524 = max(fma(_307, _518, fma(_303, _516, _301 * _514)), fp_c1_1._m0[0].w);
            float _526 = max(_522, fp_c1_1._m0[0].w);
            float _528 = max(fma(_518, _219, fma(_516, _217, _514 * _215)), fp_c1_1._m0[0].w) * max(fma(_518, _219, fma(_516, _217, _514 * _215)), fp_c1_1._m0[0].w);
            uint _530 = uint(int(uint(_480 + 6408) >> uint(2)));
            int _532 = int(_530) + 1;
            uint _534 = uint(int(uint(_480 + 6400) >> uint(2)));
            int _536 = int(_534) + 1;
            float _538 = exp2(_524 * fma(_524, fp_c1_1._m0[1].y, -6.9831600189208984375));
            bool _540 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_520)) >> uint(2))][int(_520) & 3]) != 0;
            float _542 = (_436 * (1.0 / (_430 + fma(_430, -_526, _526)))) * ((_419 * (1.0 / max(fma(_423, _528, -_528) + 1.0, fp_c1_1._m0[0].w))) * (_419 * (1.0 / max(fma(_423, _528, -_528) + 1.0, fp_c1_1._m0[0].w))));
            float _544 = (fma(_538, -_335, _538) + _335) * _542;
            float _546 = _544;
            if (!_540)
            {
                _546 = 1.0;
            }
            float _548 = _546;
            if (_540)
            {
                uint _550 = uint(int(uint(_480 + 7840) >> uint(2)));
                int _552 = int(_550) + 1;
                uint _554 = uint(int(uint(_480 + 7848) >> uint(2)));
                uint _556 = uint(int(uint(_480 + 6888) >> uint(2)));
                float _558 = fp_c10_1._m0[int(uint(int(_556)) >> uint(2))][int(_556) & 3];
                int _560 = int(_556) + 1;
                _548 = exp2(fp_c10_1._m0[int(uint(_560) >> uint(2))][_560 & 3] * log2(clamp(((-_558) + fma(_500, -fp_c10_1._m0[int(uint(int(_554)) >> uint(2))][int(_554) & 3], fma(_498, -fp_c10_1._m0[int(uint(_552) >> uint(2))][_552 & 3], _496 * (-fp_c10_1._m0[int(uint(int(_550)) >> uint(2))][int(_550) & 3])))) * (1.0 / ((-_558) + 1.0)), 0.0, 1.0)));
            }
            float _562 = exp2(fp_c10_1._m0[int(uint(_510) >> uint(2))][_510 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_508)) >> uint(2))][int(_508) & 3], -sqrt(_494), fp_c1_1._m0[1].w), 0.0, 1.0))) * _548;
            _564 = _468 + 1;
            float _566 = _562 * clamp(_522 + (-0.0), 0.0, 1.0);
            float _568 = fp_c10_1._m0[int(uint(_532) >> uint(2))][_532 & 3] * _562;
            float _570 = fma(_466, fp_c1_1._m0[2].y, exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_307, -_500, fma(_303, -_498, _301 * (-_496))), fp_c1_1._m0[2].x) + (-0.0), 0.0, 1.0))) * _466) + 0.20000000298023223876953125;
            float _572 = fma((fp_c10_1._m0[int(uint(_536) >> uint(2))][_536 & 3] * _566) * fma(_297, fp_c1_1._m0[2].z, ((fma(_538, -_333, _538) + _333) * _542) * 0.079577468335628509521484375), _464, _462 * (((_568 * _251) * _570) * _363)) + _450;
            float _574 = fma((fp_c10_1._m0[int(uint(int(_534)) >> uint(2))][int(_534) & 3] * _566) * fma(_285, fp_c1_1._m0[2].z, ((fma(_538, -_331, _538) + _331) * _542) * 0.079577468335628509521484375), _464, _462 * (((_568 * _249) * _570) * _363)) + _452;
            float _576 = fma((fp_c10_1._m0[int(uint(int(_530)) >> uint(2))][int(_530) & 3] * _566) * fma(_319, fp_c1_1._m0[2].z, _544 * 0.079577468335628509521484375), _464, _462 * (((_568 * _253) * _570) * _363)) + _454;
            _448 = int(uint(_448) >> uint(8));
            _468 = _564;
            _450 = _572;
            _452 = _574;
            _454 = _576;
            _472 = _574;
            _474 = _572;
            _476 = _576;
        } while (!(_564 >= 4));
        _478 = false;
        _456 = _472;
        _458 = _474;
        _460 = _476;
        if ((_448 & 255) == 30)
        {
            float _578 = _87.y;
            float _580 = 1.0 / (fma(_391, fp_c10_1._m0[565].z, fma(_578, fp_c10_1._m0[565].y, _395 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _582 = 1.0 / fp_c10_1._m0[561].y;
            float _584 = _391 + (-fp_c10_1._m0[557].z);
            float _586 = (-_395) + fma(_582, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _588 = (-_391) + fma(_582, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _590 = _395 + (-fp_c10_1._m0[557].x);
            float _592 = _586 * _586;
            float _594 = _584 * fp_c10_1._m0[558].x;
            float _596 = _590 * fp_c10_1._m0[558].z;
            float _598 = fma(_584, _584, _590 * _590);
            float _600 = sqrt(fma(_588, _588, _592)) * (-fp_c10_1._m0[558].y);
            float _602 = ((-float(_594 < _596)) + float(_594 > _596)) * fp_c10_1._m0[561].y;
            float _604 = inversesqrt(fma(_588, _588, fma(_600, _600, _592)));
            float _606 = _586 * _604;
            float _608 = _600 * _604;
            float _610 = _588 * _604;
            float _612 = _301 + _606;
            float _614 = fma(_584, fp_c10_1._m0[558].z, _590 * fp_c10_1._m0[558].x);
            float _616 = _303 + _608;
            float _618 = _307 + _610;
            float _620 = inversesqrt(fma(_610, _610, _606 * _606));
            bool _622 = _614 > 0.0;
            float _624 = fma(_584 * inversesqrt(_598), fp_c10_1._m0[558].z, (_590 * inversesqrt(_598)) * fp_c10_1._m0[558].x);
            float _626 = _598;
            float _628 = _624;
            if (_622)
            {
                _626 = sqrt(_598);
            }
            float _630 = inversesqrt(fma(_618, _618, fma(_616, _616, _612 * _612)));
            float _632 = _626;
            if (!_622)
            {
                _632 = 1.0;
            }
            float _634 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_590, fma(_602, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_584 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_602 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_590, fma(_602, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_584 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_602 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            bool _636 = _624 < fp_c10_1._m0[560].z;
            float _638 = _612 * _630;
            float _640 = _616 * _630;
            float _642 = _618 * _630;
            float _644 = fma(_610, _219, fma(_608, _217, _606 * _215));
            if (_636)
            {
                _628 = fma(_634, -_634, fp_c1_1._m0[1].w) * fma(_634, -_634, fp_c1_1._m0[1].w);
            }
            float _646 = _628;
            if (!_636)
            {
                _646 = 1.0;
            }
            float _648 = max(fma(_307, _642, fma(_303, _640, _301 * _638)), fp_c1_1._m0[0].w);
            float _650 = max(fma(_642, _219, fma(_640, _217, _638 * _215)), fp_c1_1._m0[0].w) * max(fma(_642, _219, fma(_640, _217, _638 * _215)), fp_c1_1._m0[0].w);
            float _652 = clamp(fma(_614 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].w), 0.0, 1.0) * clamp(fma(_614 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].w), 0.0, 1.0);
            float _654 = max(_644, fp_c1_1._m0[0].w);
            float _656 = exp2(_648 * fma(_648, fp_c1_1._m0[1].y, -6.9831600189208984375));
            float _658 = min(fma(_652, -_652, fp_c1_1._m0[1].w) * fma(_652, -_652, fp_c1_1._m0[1].w), _646) * (exp2(log2(clamp(fma(_632, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_610 * _620, -fp_c10_1._m0[558].z, (_606 * _620) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w));
            float _660 = _658 * clamp(_644 + (-0.0), 0.0, 1.0);
            float _662 = fma(_466, fp_c1_1._m0[2].y, _466 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_307, -_610, fma(_303, -_608, _301 * (-_606))), fp_c1_1._m0[2].x) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125;
            float _664 = (_436 * (1.0 / (_430 + fma(_430, -_654, _654)))) * ((_419 * (1.0 / max(fma(_423, _650, -_650) + 1.0, fp_c1_1._m0[0].w))) * (_419 * (1.0 / max(fma(_423, _650, -_650) + 1.0, fp_c1_1._m0[0].w))));
            float _666 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_391, fp_c10_1._m0[562].z, fma(_578, fp_c10_1._m0[562].y, _395 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _580, 0.5, 0.5), (-fma((fma(_391, fp_c10_1._m0[563].z, fma(_578, fp_c10_1._m0[563].y, _395 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _580, 0.5, 0.5)) + 1.0)).z > fma((fma(_391, fp_c10_1._m0[564].z, fma(_578, fp_c10_1._m0[564].y, _395 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _580, 0.5, 0.5)) || (_614 <= 0.0));
            _456 = fma(fma(fma(_285, fp_c1_1._m0[2].z, ((fma(_656, -_331, _656) + _331) * _664) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _660), _464, _462 * ((_662 * (_658 * _249)) * _363)), _666, _472);
            _458 = fma(fma(fma(_297, fp_c1_1._m0[2].z, ((fma(_656, -_333, _656) + _333) * _664) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _660), _464, _462 * ((_662 * (_658 * _251)) * _363)), _666, _474);
            _460 = fma(fma(fma(_319, fp_c1_1._m0[2].z, ((fma(_656, -_335, _656) + _335) * _664) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _660), _464, _462 * ((_662 * (_658 * _253)) * _363)), _666, _476);
        }
    }
    float _668 = _395 + (-fp_c3_1._m0[11].w);
    float _670 = _87.y;
    float _672 = _391 + (-fp_c3_1._m0[13].w);
    float _674 = _670 + (-fp_c3_1._m0[12].w);
    float _676 = fma(_672, _672, fma(_674, _674, _668 * _668));
    float _678 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
    float _680 = clamp(fma(_219, -fp_c5_1._m0[23].z, fma(_217, -fp_c5_1._m0[23].y, _215 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _682 = fma(_678, fp_c1_1._m0[2].y, _678 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_307, fp_c5_1._m0[23].z, fma(_303, fp_c5_1._m0[23].y, _301 * fp_c5_1._m0[23].x)), fp_c1_1._m0[2].x) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125;
    float _684 = clamp((-_363) + 1.0, 0.0, 1.0);
    float _686 = clamp(fma(_325, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _688 = exp2(log2(clamp(sqrt(_676) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_672 * inversesqrt(_676), fp_c5_1._m0[23].z, fma(_674 * inversesqrt(_676), fp_c5_1._m0[23].y, (_668 * inversesqrt(_676)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _690 = clamp(fma(_327, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _692 = (fma(_327, (((_680 * fp_c5_1._m0[5].x) * uintBitsToFloat(_6[1])) * _684) * _365, _686 * (((_249 * fp_c5_1._m0[5].w) * _682) * _363)) + _456) + _255;
    float _694 = (fma(_327, (((_680 * fp_c5_1._m0[5].y) * uintBitsToFloat(_6[0])) * _684) * _365, _686 * (((_251 * fp_c5_1._m0[5].w) * _682) * _363)) + _458) + _257;
    float _696 = (fma(_327, (((_680 * fp_c5_1._m0[5].z) * fma((fma(_438, -_335, _438) + _335) * _440, fp_c1_1._m0[1].z, _319 * 0.3183098733425140380859375)) * _684) * _365, _686 * (((_253 * fp_c5_1._m0[5].w) * _682) * _363)) + _460) + _259;
    float _698 = clamp(fma(fma(_391, fp_c5_1._m0[14].z, fma(_670, fp_c5_1._m0[14].y, _395 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _700 = fma((-_692) + fp_c5_1._m0[13].x, _698, _692);
    float _702 = fma((-_694) + fp_c5_1._m0[13].y, _698, _694);
    float _704 = fma((-_696) + fp_c5_1._m0[13].z, _698, _696);
    float _706 = clamp((-exp2((clamp(fma(sqrt(_676), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_700) + fma(fma((_688 * fp_c7_1._m0[55].x) * _690, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _706, _700);
    _81.y = fma((-_702) + fma(fma((_688 * fp_c7_1._m0[55].y) * _690, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _706, _702);
    _81.z = fma((-_704) + fma(fma((_688 * fp_c7_1._m0[55].z) * _690, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _706, _704);
    _81.w = clamp(_98 + (-0.0), 0.0, 1.0);
}


#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 2, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_16;
layout(binding = 4) uniform sampler2D fp_tex_tcb_20;
layout(binding = 5) uniform sampler2D fp_tex_tcb_22;
layout(binding = 6) uniform sampler2D fp_tex_tcb_26;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;

layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 4) in vec4 _72;
layout(location = 5) in vec4 _74;
layout(location = 6) in vec4 _76;
layout(location = 3) in vec4 _78;
layout(location = 0) out vec4 _81;
uint _6[12];

void main()
{
    bool _468 = false;
    float _88 = _66.x;
    float _90 = _66.y;
    vec2 _94 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _96 = _94.x;
    float _98 = _94.y;
    vec3 _102 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _104 = _102.x;
    float _106 = _102.y;
    float _108 = _102.z;
    float _110 = _68.x;
    float _112 = _68.y;
    float _114 = _68.z;
    float _116 = _70.y;
    float _118 = _70.z;
    float _120 = _70.x;
    float _122 = _70.w;
    float _124 = _72.x;
    float _126 = _72.y;
    float _128 = _72.z;
    float _130 = inversesqrt(fma(_114, _114, fma(_112, _112, _110 * _110)));
    float _132 = _114 * _130;
    float _134 = _110 * _130;
    float _136 = _112 * _130;
    float _138 = sqrt(clamp((-fma(_96, _96, _98 * _98)) + 1.0, 0.0, 1.0));
    float _140 = fma(_134, _138, fma(_96, _120, _98 * (fma(_136, _118, -(_132 * _116)) * _122)));
    float _142 = fma(_136, _138, fma(_96, _116, _98 * (fma(_132, _120, -(_134 * _118)) * _122)));
    float _144 = fma(_132, _138, fma(_96, _118, _98 * (fma(_134, _116, -(_136 * _120)) * _122)));
    float _146 = inversesqrt(fma(_128, _128, fma(_126, _126, _124 * _124)));
    float _148 = inversesqrt(fma(_144, _144, fma(_142, _142, _140 * _140)));
    float _150 = _124 * (-_146);
    float _152 = _126 * (-_146);
    float _154 = _128 * (-_146);
    float _156 = _140 * _148;
    float _158 = _142 * _148;
    float _160 = _144 * _148;
    vec3 _162 = texture(fp_tex_tcb_22, vec2(clamp(fma(_160, _154, fma(_158, _152, _156 * _150)), 0.0, 1.0), clamp(fma(_160, _154, fma(_158, _152, _156 * _150)), 0.0, 1.0))).xyz;
    float _164 = _162.x;
    float _166 = _162.y;
    float _168 = _162.z;
    float _170 = (-texture(fp_tex_tcb_20, vec2(_88 + (-fp_c6_1._m0[26].w), _90 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_20, vec2(_88 + fp_c6_1._m0[26].w, _90 + fp_c6_1._m0[26].w)).x;
    int _173 = (-floatBitsToInt(fp_c6_1._m0[25].w)) + 1;
    float _175 = fma(_120 * _170, fp_c6_1._m0[27].x, _134);
    float _177 = fma(_118 * _170, fp_c6_1._m0[27].x, _132);
    float _179 = fma(_116 * _170, fp_c6_1._m0[27].x, _136);
    float _181 = min((texture(fp_tex_tcb_20, vec2(_88, _90)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _183 = 1.0 / _74.w;
    float _185 = _181 * float(max(0, (-_173)));
    float _187 = _181 * float((-abs(_173)) + 1);
    float _189 = _181 * float(max(0, _173));
    float _191 = fma(clamp(_136 + (-0.0), 0.0, 1.0), (-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, fp_c7_1._m0[20].y);
    float _193 = max(_185, max(_187, _189));
    float _195 = _193 + (-fp_c7_1._m0[21].w);
    float _197 = inversesqrt(fma(_177, _177, fma(_179, _179, _175 * _175)));
    float _199 = clamp(_195 + (-0.0), 0.0, 1.0);
    float _201 = clamp(((_187 + (-_193)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _203 = clamp(((_189 + (-_193)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _205 = clamp(((_185 + (-_193)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _207 = _175 * _197;
    float _209 = _179 * _197;
    bool _213 = min(_199 * 1000.0, 1.0) > 0.5;
    float _215 = _177 * _197;
    float _217 = _156;
    float _219 = _158;
    float _221 = _160;
    float _243;
    float _245;
    float _247;
    float _249;
    float _251;
    float _253;
    float _255;
    float _257;
    float _259;
    float _261;
    float _263;
    float _265;
    float _267;
    if (_213)
    {
        float _223 = fma(_205, fp_c7_1._m0[62].y, fma(_203, fp_c7_1._m0[3].y, _201 * fp_c7_1._m0[10].y));
        float _225 = fma(_205, fp_c7_1._m0[62].x, fma(_203, fp_c7_1._m0[3].x, _201 * fp_c7_1._m0[10].x));
        float _227 = fma(_205, fp_c7_1._m0[62].z, fma(_203, fp_c7_1._m0[3].z, _201 * fp_c7_1._m0[10].z));
        float _229 = fma(_205, fp_c7_1._m0[63].x, fma(_203, fp_c7_1._m0[4].x, _201 * fp_c7_1._m0[11].x));
        float _231 = fma(_205, fp_c7_1._m0[63].y, fma(_203, fp_c7_1._m0[4].y, _201 * fp_c7_1._m0[11].y));
        float _233 = fma(_205, fp_c7_1._m0[63].z, fma(_203, fp_c7_1._m0[4].z, _201 * fp_c7_1._m0[11].z));
        float _235 = clamp(_199 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _237 = fma(fma(_231, -fp_c7_1._m0[45].y, _223), _235, _231 * fp_c7_1._m0[45].y);
        float _239 = fma(fma(_229, -fp_c7_1._m0[45].y, _225), _235, _229 * fp_c7_1._m0[45].y);
        float _241 = fma(fma(_233, -fp_c7_1._m0[45].y, _227), _235, _233 * fp_c7_1._m0[45].y);
        _217 = fma(_191, (-_156) + _207, _156);
        _243 = fp_c7_1._m0[18].w;
        _219 = fma(_191, (-_158) + _209, _158);
        _221 = fma(_191, (-_160) + _215, _160);
        _245 = _239;
        _247 = _237;
        _249 = _241;
        _251 = 0.0;
        _253 = 0.0;
        _255 = _225;
        _257 = _223;
        _259 = _227;
        _261 = 1.0;
        _263 = _239 * fp_c7_1._m0[18].z;
        _265 = _237 * fp_c7_1._m0[18].z;
        _267 = _241 * fp_c7_1._m0[18].z;
    }
    else
    {
        vec3 _269 = texture(fp_tex_tcb_16, vec2(_88, _90)).xyz;
        _243 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].y);
        _245 = _164 + _104;
        _247 = _166 + _106;
        _249 = _168 + _108;
        _251 = fp_c6_1._m0[9].x;
        _253 = 1.0;
        _255 = _104 * (_269.x * fp_c6_1._m0[19].x);
        _257 = _106 * (_269.y * fp_c6_1._m0[19].y);
        _259 = _108 * (_269.z * fp_c6_1._m0[19].z);
        _261 = (-texture(fp_tex_tcb_26, vec2(_88, _90)).x) + 1.0;
        _263 = 0.0;
        _265 = 0.0;
        _267 = 0.0;
    }
    float _271 = fma(_154, _221, fma(_152, _219, _150 * _217));
    vec2 _273 = texture(fp_tex_tcb_2A, vec2(fma(_74.x * _183, 0.5, 0.5), fma(_74.y * _183, -0.5, 0.5))).xy;
    float _275 = max(_271, fp_c1_1._m0[0].w);
    float _277 = 1.0 / (_76.z * gl_FragCoord.w);
    vec2 _279 = texture(fp_tex_tcb_38, vec2(_275, (-_243) + (-0.0))).xy;
    float _281 = fma(_249, -_251, _249);
    float _283 = fma(_245, -_251, _245);
    float _285 = fma(_247, -_251, _247);
    float _287 = fma(_245 + (-0.039999999105930328369140625), _251, fp_c1_1._m0[0].z);
    float _289 = fma(_247 + (-0.039999999105930328369140625), _251, fp_c1_1._m0[0].z);
    float _291 = fma(_249 + (-0.039999999105930328369140625), _251, fp_c1_1._m0[0].z);
    float _293 = clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _295 = (-_273.y) + 1.0;
    float _297 = _295 * _293;
    float _299 = clamp((-fma(max((-_273.x) + 1.0, _295), _293, fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _277, (_76.y * gl_FragCoord.w) * _277)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _301 = _275;
    float _303 = _281;
    float _305 = _283;
    float _307 = _285;
    float _323;
    float _325;
    float _327;
    float _329;
    float _331;
    float _333;
    float _335;
    float _337;
    float _339;
    float _341;
    float _343;
    if (_213)
    {
        float _309 = fma(_154, -_221, fma(_152, -_219, _150 * (-_217)));
        float _311 = fma(_309 * _217, -2.0, -_150);
        float _313 = fma(_309 * _219, -2.0, -_152);
        float _315 = fma(_309 * _221, -2.0, -_154);
        float _317 = 1.0 / max(abs(_315), max(abs(_311), abs(_313)));
        vec3 _319 = texture(fp_tex_tcb_36, vec4(_311 * _317, _313 * _317, _315 * _317, float(12)), 0.0).xyz;
        float _321 = fma(_279.x, fp_c7_1._m0[19].x, _279.y);
        _323 = fma(_219 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _325 = _217 * fp_c7_1._m0[19].z;
        _327 = _221 * fp_c7_1._m0[19].z;
        _329 = fp_c7_1._m0[19].x;
        _331 = fp_c7_1._m0[19].x;
        _333 = fp_c7_1._m0[19].x;
        _335 = _319.y * _321;
        _337 = _319.z * _321;
        _339 = _319.x * _321;
        _341 = 0.0;
        _343 = 1.0;
    }
    else
    {
        float _345 = max(_271, fp_c1_1._m0[0].w);
        float _347 = fma(_154, -_221, fma(_152, -_219, _150 * (-_217)));
        float _349 = fma(_347 * _219, -2.0, -_152);
        float _351 = fma(_347 * _217, -2.0, -_150);
        float _353 = fma(_347 * _221, -2.0, -_154);
        vec2 _355 = texture(fp_tex_tcb_38, vec2(_345, (-_243) + (-0.0))).xy;
        float _357 = _355.x;
        float _359 = _355.y;
        float _361 = _150 * _152;
        float _363 = 1.0 / max(abs(_353), max(abs(_351), abs(_349)));
        vec3 _365 = texture(fp_tex_tcb_36, vec4(_351 * _363, _349 * _363, _353 * _363, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_243 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _367 = _152 * _154;
        float _369 = _154 * _154;
        float _371 = _150 * _154;
        float _373 = fma(_150, _150, -(_152 * _152));
        float _375 = fma(fma(_215, -fp_c5_1._m0[23].z, fma(_209, -fp_c5_1._m0[23].y, _207 * (-fp_c5_1._m0[23].x))), -_219, _219);
        float _377 = fma(fma(fp_c6_1._m0[40].z, fp_c6_1._m0[41].y, -_289), _253, _289);
        float _379 = exp2(log2(clamp((-_271) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
        float _381 = fma(fma(fp_c6_1._m0[40].z, fp_c6_1._m0[41].x, -_287), _253, _287);
        float _383 = fma(fma(fp_c6_1._m0[40].z, fp_c6_1._m0[41].z, -_291), _253, _291);
        _323 = _219;
        _325 = _217;
        _327 = _221;
        _301 = _345;
        _329 = _381;
        _331 = _377;
        _333 = _383;
        _303 = fma((max(0.0, fma(_373, fp_c5_1._m0[31].z, (fma(_154, -fp_c5_1._m0[27].z, fma(_152, -fp_c5_1._m0[27].y, _150 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_371, fp_c5_1._m0[30].w, fma(_369, fp_c5_1._m0[30].z, fma(_367, fp_c5_1._m0[30].y, _361 * fp_c5_1._m0[30].x))))) * _259) * _379, _253, _281);
        _305 = fma((max(0.0, fma(_373, fp_c5_1._m0[31].x, (fma(_154, -fp_c5_1._m0[25].z, fma(_152, -fp_c5_1._m0[25].y, _150 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_371, fp_c5_1._m0[28].w, fma(_369, fp_c5_1._m0[28].z, fma(_367, fp_c5_1._m0[28].y, _361 * fp_c5_1._m0[28].x))))) * _255) * _379, _253, _283);
        _307 = fma((max(0.0, fma(_373, fp_c5_1._m0[31].y, (fma(_154, -fp_c5_1._m0[26].z, fma(_152, -fp_c5_1._m0[26].y, _150 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_371, fp_c5_1._m0[29].w, fma(_369, fp_c5_1._m0[29].z, fma(_367, fp_c5_1._m0[29].y, _361 * fp_c5_1._m0[29].x))))) * _257) * _379, _253, _285);
        _335 = fma(_357, _377, _359) * _365.y;
        _337 = fma(_357, _383, _359) * _365.z;
        _339 = fma(_357, _381, _359) * _365.x;
        _341 = fp_c6_1._m0[17].w;
        _343 = clamp(fma(_375, clamp(_195 * (-7.0), 0.0, 1.0), -_375) + fp_c1_1._m0[1].x, 0.0, 1.0);
    }
    float _385 = _150 + (-fp_c5_1._m0[23].x);
    float _387 = _152 + (-fp_c5_1._m0[23].y);
    float _389 = _154 + (-fp_c5_1._m0[23].z);
    float _391 = _323 * _325;
    float _393 = fma(_243, 0.5, 0.5);
    float _395 = _243 * _243;
    float _397 = inversesqrt(fma(_389, _389, fma(_387, _387, _385 * _385)));
    float _399 = _385 * _397;
    float _401 = _387 * _397;
    float _403 = _389 * _397;
    float _405 = _327 * _323;
    float _407 = max(fma(_154, _403, fma(_152, _401, _150 * _399)), fp_c1_1._m0[0].w);
    float _409 = _395 * _395;
    int _411 = max(0, min(int(trunc((_78.z + (-fp_c9_1._m0[550].z)) * fp_c9_1._m0[551].z)), 19));
    float _413 = max(fma(_403, _221, fma(_401, _219, _399 * _217)), fp_c1_1._m0[0].w) * max(fma(_403, _221, fma(_401, _219, _399 * _217)), fp_c1_1._m0[0].w);
    float _415 = (_393 * 0.5) * _393;
    float _417 = fma(_325, _325, -(_323 * _323));
    float _419 = _327 * _325;
    float _421 = _327 * _327;
    uint _424 = uint(int(uint((((int(uint(_411) >> uint(16)) * 20) << 16) + (((_411 & 65535) * 20) + max(0, min(int(trunc((_78.x + (-fp_c9_1._m0[550].x)) * fp_c9_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _426 = fp_c9_1._m0[int(uint(int(_424)) >> uint(2))][int(_424) & 3];
    float _428 = 1.0 / (_415 + fma(_301, -_415, _301));
    float _430 = exp2(_407 * fma(_407, fp_c1_1._m0[1].y, -6.9831600189208984375));
    float _432 = (_428 * (1.0 / (_415 + fma(max(fma(_221, -fp_c5_1._m0[23].z, fma(_219, -fp_c5_1._m0[23].y, _217 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_415, max(fma(_221, -fp_c5_1._m0[23].z, fma(_219, -fp_c5_1._m0[23].y, _217 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_395 * (1.0 / max(fma(_413, _409, -_413) + 1.0, fp_c1_1._m0[0].w))) * (_395 * (1.0 / max(fma(_413, _409, -_413) + 1.0, fp_c1_1._m0[0].w))));
    float _434 = fma(max(0.0, fma(_417, fp_c5_1._m0[31].y, (fma(_327, fp_c5_1._m0[26].z, fma(_323, fp_c5_1._m0[26].y, _325 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_419, fp_c5_1._m0[29].w, fma(_421, fp_c5_1._m0[29].z, fma(_405, fp_c5_1._m0[29].y, _391 * fp_c5_1._m0[29].x))))), fma(_331, -_307, _307), _335);
    float _436 = fma(max(0.0, fma(_417, fp_c5_1._m0[31].z, (fma(_327, fp_c5_1._m0[27].z, fma(_323, fp_c5_1._m0[27].y, _325 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_419, fp_c5_1._m0[30].w, fma(_421, fp_c5_1._m0[30].z, fma(_405, fp_c5_1._m0[30].y, _391 * fp_c5_1._m0[30].x))))), fma(_333, -_303, _303), _337);
    float _438 = fma(max(0.0, fma(_417, fp_c5_1._m0[31].x, (fma(_327, fp_c5_1._m0[25].z, fma(_323, fp_c5_1._m0[25].y, _325 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_419, fp_c5_1._m0[28].w, fma(_421, fp_c5_1._m0[28].z, fma(_405, fp_c5_1._m0[28].y, _391 * fp_c5_1._m0[28].x))))), fma(_329, -_305, _305), _339);
    int _440 = floatBitsToInt(_426);
    float _442 = _438;
    float _444 = _434;
    float _446 = _436;
    float _448 = _438;
    float _450 = _434;
    float _452 = _436;
    if (floatBitsToInt(_426) != (-1))
    {
        float _454 = clamp(fma(_297, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _456 = clamp((-_341) + 1.0, 0.0, 1.0);
        float _458 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
        float _460 = 0.0;
        int _462 = 0;
        int _546;
        do
        {
            int _464 = _440 & 255;
            float _466 = _460;
            _448 = _442;
            _450 = _444;
            _452 = _446;
            _468 = uint(_464) >= 30u;
            if (_468)
            {
                break;
            }
            int _470 = _464 << 4;
            uint _472 = uint(int(uint(_470 + 7360) >> uint(2)));
            int _474 = int(_472) + 1;
            uint _476 = uint(int(uint(_470 + 7368) >> uint(2)));
            float _478 = (-_78.x) + fp_c9_1._m0[int(uint(int(_472)) >> uint(2))][int(_472) & 3];
            float _480 = fp_c9_1._m0[int(uint(_474) >> uint(2))][_474 & 3] + (-_78.y);
            float _482 = (-_78.z) + fp_c9_1._m0[int(uint(int(_476)) >> uint(2))][int(_476) & 3];
            float _484 = fma(_482, _482, fma(_480, _480, _478 * _478));
            float _486 = _478 * inversesqrt(_484);
            float _488 = _480 * inversesqrt(_484);
            float _490 = _482 * inversesqrt(_484);
            float _492 = _150 + _486;
            float _494 = _152 + _488;
            float _496 = _154 + _490;
            float _498 = inversesqrt(fma(_496, _496, fma(_494, _494, _492 * _492)));
            float _500 = _492 * _498;
            float _502 = _494 * _498;
            float _504 = _496 * _498;
            uint _506 = uint(int(uint(_470 + 6880) >> uint(2)));
            int _508 = int(_506) + 1;
            uint _510 = uint(int(uint(_470 + 8320) >> uint(2)));
            float _512 = max(fma(_154, _504, fma(_152, _502, _150 * _500)), fp_c1_1._m0[0].w);
            float _514 = max(fma(_504, _221, fma(_502, _219, _500 * _217)), fp_c1_1._m0[0].w) * max(fma(_504, _221, fma(_502, _219, _500 * _217)), fp_c1_1._m0[0].w);
            float _516 = fma(_490, _221, fma(_488, _219, _486 * _217));
            float _518 = max(_516, fp_c1_1._m0[0].w);
            float _520 = exp2(_512 * fma(_512, fp_c1_1._m0[1].y, -6.9831600189208984375));
            bool _522 = floatBitsToInt(fp_c9_1._m0[int(uint(int(_510)) >> uint(2))][int(_510) & 3]) != 0;
            if (!_522)
            {
                _466 = 1.0;
            }
            float _524 = (_428 * (1.0 / (_415 + fma(_415, -_518, _518)))) * ((_395 * (1.0 / max(fma(_409, _514, -_514) + 1.0, fp_c1_1._m0[0].w))) * (_395 * (1.0 / max(fma(_409, _514, -_514) + 1.0, fp_c1_1._m0[0].w))));
            float _526 = _466;
            if (_522)
            {
                uint _528 = uint(int(uint(_470 + 7840) >> uint(2)));
                int _530 = int(_528) + 1;
                uint _532 = uint(int(uint(_470 + 6888) >> uint(2)));
                float _534 = fp_c9_1._m0[int(uint(int(_532)) >> uint(2))][int(_532) & 3];
                int _536 = int(_532) + 1;
                uint _538 = uint(int(uint(_470 + 7848) >> uint(2)));
                _526 = exp2(log2(clamp((fma(_490, -fp_c9_1._m0[int(uint(int(_538)) >> uint(2))][int(_538) & 3], fma(_488, -fp_c9_1._m0[int(uint(_530) >> uint(2))][_530 & 3], _486 * (-fp_c9_1._m0[int(uint(int(_528)) >> uint(2))][int(_528) & 3]))) + (-_534)) * (1.0 / ((-_534) + 1.0)), 0.0, 1.0)) * fp_c9_1._m0[int(uint(_536) >> uint(2))][_536 & 3]);
            }
            uint _540 = uint(int(uint(_470 + 6408) >> uint(2)));
            int _542 = int(_540) + 1;
            float _544 = exp2(fp_c9_1._m0[int(uint(_508) >> uint(2))][_508 & 3] * log2(clamp(fma(fp_c9_1._m0[int(uint(int(_506)) >> uint(2))][int(_506) & 3], -sqrt(_484), fp_c1_1._m0[1].w), 0.0, 1.0))) * _526;
            _546 = _462 + 1;
            uint _548 = uint(int(uint(_470 + 6400) >> uint(2)));
            int _550 = int(_548) + 1;
            float _552 = _544 * fp_c9_1._m0[int(uint(_542) >> uint(2))][_542 & 3];
            float _554 = _544 * clamp(_516 + (-0.0), 0.0, 1.0);
            float _556 = exp2(log2(clamp(fma(_271, -clamp((-_516) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].w), 0.0, 1.0)) * fp_c6_1._m0[18].y) * ((fma(_458, fp_c1_1._m0[2].z, exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_154, -_490, fma(_152, -_488, _150 * (-_486))), fp_c1_1._m0[2].y) + (-0.0), 0.0, 1.0))) * _458) + 0.20000000298023223876953125) * _261);
            float _558 = fma((_554 * fp_c9_1._m0[int(uint(int(_548)) >> uint(2))][int(_548) & 3]) * fma(_305, fp_c1_1._m0[2].x, ((fma(_520, -_329, _520) + _329) * _524) * 0.079577468335628509521484375), _456, _454 * ((_556 * (_552 * _255)) * _341)) + _442;
            float _560 = fma((_554 * fp_c9_1._m0[int(uint(_550) >> uint(2))][_550 & 3]) * fma(_307, fp_c1_1._m0[2].x, ((fma(_520, -_331, _520) + _331) * _524) * 0.079577468335628509521484375), _456, _454 * ((_556 * (_552 * _257)) * _341)) + _444;
            float _562 = fma((_554 * fp_c9_1._m0[int(uint(int(_540)) >> uint(2))][int(_540) & 3]) * fma(_303, fp_c1_1._m0[2].x, ((fma(_520, -_333, _520) + _333) * _524) * 0.079577468335628509521484375), _456, _454 * ((_556 * (_552 * _259)) * _341)) + _446;
            _440 = int(uint(_440) >> uint(8));
            _460 = _526;
            _462 = _546;
            _442 = _558;
            _444 = _560;
            _446 = _562;
            _448 = _558;
            _450 = _560;
            _452 = _562;
        } while (!(_546 >= 4));
    }
    _468 = false;
    float _564 = fma(_221, -fp_c5_1._m0[23].z, fma(_219, -fp_c5_1._m0[23].y, _217 * (-fp_c5_1._m0[23].x)));
    float _566 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
    float _568 = _78.y + (-fp_c3_1._m0[12].w);
    float _570 = _78.x + (-fp_c3_1._m0[11].w);
    float _572 = _78.z + (-fp_c3_1._m0[13].w);
    float _574 = fma(_572, _572, fma(_568, _568, _570 * _570));
    float _576 = clamp(_564 + (-0.0), 0.0, 1.0);
    float _578 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _580 = exp2(log2(clamp(fma(_271, -clamp((-_564) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].w), 0.0, 1.0)) * fp_c6_1._m0[18].y) * ((fma(_566, fp_c1_1._m0[2].z, _566 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_154, fp_c5_1._m0[23].z, fma(_152, fp_c5_1._m0[23].y, _150 * fp_c5_1._m0[23].x)), fp_c1_1._m0[2].y) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125) * _261);
    float _582 = clamp((-_341) + 1.0, 0.0, 1.0);
    float _584 = clamp(fma(_297, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _586 = exp2(log2(clamp(sqrt(_574) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_572 * inversesqrt(_574), fp_c5_1._m0[23].z, fma(_568 * inversesqrt(_574), fp_c5_1._m0[23].y, (_570 * inversesqrt(_574)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _588 = clamp(fma(_299, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _590 = fma(_164, _578, fma(_299, (((_576 * fp_c5_1._m0[5].x) * fma((fma(_430, -_329, _430) + _329) * _432, fp_c1_1._m0[1].z, _305 * 0.3183098733425140380859375)) * _582) * _343, _584 * (((_255 * fp_c5_1._m0[5].w) * _580) * _341)) + _448) + _263;
    float _592 = fma(_166, _578, fma(_299, (((_576 * fp_c5_1._m0[5].y) * fma((fma(_430, -_331, _430) + _331) * _432, fp_c1_1._m0[1].z, _307 * 0.3183098733425140380859375)) * _582) * _343, _584 * (((_257 * fp_c5_1._m0[5].w) * _580) * _341)) + _450) + _265;
    float _594 = fma(_168, _578, fma(_299, (((_576 * fp_c5_1._m0[5].z) * fma((fma(_430, -_333, _430) + _333) * _432, fp_c1_1._m0[1].z, _303 * 0.3183098733425140380859375)) * _582) * _343, _584 * (((_259 * fp_c5_1._m0[5].w) * _580) * _341)) + _452) + _267;
    float _596 = clamp((-exp2((clamp(fma(sqrt(_574), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_590) + fma(fma((_586 * fp_c7_1._m0[55].x) * _588, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _596, _590);
    _81.y = fma((-_592) + fma(fma((_586 * fp_c7_1._m0[55].y) * _588, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _596, _592);
    _81.z = fma((-_594) + fma(fma((_586 * fp_c7_1._m0[55].z) * _588, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _596, _594);
    _81.w = 1.0;
}


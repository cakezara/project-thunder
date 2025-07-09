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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_14;
layout(binding = 6) uniform sampler2D fp_tex_tcb_26;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _72;
layout(location = 1) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 5) in vec4 _78;
layout(location = 4) in vec4 _80;
layout(location = 6) in vec4 _82;
layout(location = 3) in vec4 _84;
layout(location = 0) out vec4 _87;
uint _6[12];

void main()
{
    bool _442 = false;
    float _94 = _72.x;
    float _96 = _72.y;
    vec2 _100 = texture(fp_tex_tcb_E, vec2(_94, _96)).xy;
    float _102 = _100.x;
    float _104 = _100.y;
    vec3 _108 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _110 = _108.x;
    float _112 = _108.y;
    float _114 = _108.z;
    float _116 = _74.x;
    float _118 = _74.y;
    float _120 = _74.z;
    float _122 = _76.y;
    float _124 = _76.z;
    float _126 = _76.x;
    float _128 = _76.w;
    float _130 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _132 = _120 * _130;
    float _134 = _116 * _130;
    float _136 = _118 * _130;
    int _139 = floatBitsToInt(fp_c6_1._m0[25].w) + (-1);
    float _141 = (-texture(fp_tex_tcb_26, vec2(_94 + (-fp_c6_1._m0[26].w), _96 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_26, vec2(_94 + fp_c6_1._m0[26].w, _96 + fp_c6_1._m0[26].w)).x;
    float _143 = fma(clamp(_136 + (-0.0), 0.0, 1.0), (-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, fp_c7_1._m0[20].y);
    float _145 = min((texture(fp_tex_tcb_26, vec2(_94, _96)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _147 = fma(_126 * _141, fp_c6_1._m0[27].x, _134);
    float _149 = _145 * float(max(0, (-_139)));
    float _151 = _145 * float((-abs(_139)) + 1);
    float _153 = _145 * float(max(0, _139));
    float _155 = sqrt(clamp((-fma(_102, _102, _104 * _104)) + 1.0, 0.0, 1.0));
    float _157 = max(_153, max(_151, _149));
    float _159 = _157 + (-fp_c7_1._m0[21].w);
    float _161 = fma(_134, _155, fma(_102, _126, _104 * (fma(_136, _124, -(_132 * _122)) * _128)));
    float _163 = fma(_136, _155, fma(_102, _122, _104 * (fma(_132, _126, -(_134 * _124)) * _128)));
    float _165 = 1.0 / _78.w;
    float _167 = fma(_122 * _141, fp_c6_1._m0[27].x, _136);
    float _169 = fma(_132, _155, fma(_102, _124, _104 * (fma(_134, _122, -(_136 * _126)) * _128)));
    float _171 = clamp(_159 + (-0.0), 0.0, 1.0);
    float _173 = fma(_124 * _141, fp_c6_1._m0[27].x, _132);
    float _175 = inversesqrt(fma(_169, _169, fma(_163, _163, _161 * _161)));
    float _177 = inversesqrt(fma(_173, _173, fma(_167, _167, _147 * _147)));
    float _179 = clamp(((_151 + (-_157)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    bool _183 = min(_171 * 1000.0, 1.0) > 0.5;
    float _185 = clamp(((_149 + (-_157)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _187 = _163 * _175;
    float _189 = _169 * _175;
    float _191 = _161 * _175;
    float _193 = _167 * _177;
    float _195 = clamp(((_153 + (-_157)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _197 = _147 * _177;
    float _199 = _173 * _177;
    float _201 = fma(_195, fp_c8_1._m0[18].x, fma(_185, fp_c8_1._m0[4].x, _179 * fp_c8_1._m0[11].x));
    float _203 = fma(_195, fp_c8_1._m0[18].y, fma(_185, fp_c8_1._m0[4].y, _179 * fp_c8_1._m0[11].y));
    float _205 = fma(_195, fp_c8_1._m0[18].z, fma(_185, fp_c8_1._m0[4].z, _179 * fp_c8_1._m0[11].z));
    float _207 = _191;
    float _209 = _187;
    float _211 = _189;
    float _221;
    float _223;
    float _225;
    float _227;
    float _229;
    float _231;
    float _233;
    float _235;
    float _237;
    float _239;
    float _241;
    if (_183)
    {
        float _213 = clamp(_171 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _215 = fma(_213, fma(_201, -fp_c7_1._m0[45].y, fma(_195, fp_c8_1._m0[17].x, fma(_185, fp_c8_1._m0[3].x, _179 * fp_c8_1._m0[10].x))), _201 * fp_c7_1._m0[45].y);
        float _217 = fma(_213, fma(_203, -fp_c7_1._m0[45].y, fma(_195, fp_c8_1._m0[17].y, fma(_185, fp_c8_1._m0[3].y, _179 * fp_c8_1._m0[10].y))), _203 * fp_c7_1._m0[45].y);
        float _219 = fma(_213, fma(_205, -fp_c7_1._m0[45].y, fma(_195, fp_c8_1._m0[17].z, fma(_185, fp_c8_1._m0[3].z, _179 * fp_c8_1._m0[10].z))), _205 * fp_c7_1._m0[45].y);
        _221 = fp_c7_1._m0[18].w;
        _207 = fma(_143, (-_191) + _197, _191);
        _209 = fma(_143, (-_187) + _193, _187);
        _211 = fma(_143, (-_189) + _199, _189);
        _223 = _217;
        _225 = _219;
        _227 = 0.0;
        _229 = _215;
        _231 = 0.0;
        _233 = 0.0;
        _235 = 0.0;
        _237 = _215 * fp_c7_1._m0[18].z;
        _239 = _217 * fp_c7_1._m0[18].z;
        _241 = _219 * fp_c7_1._m0[18].z;
    }
    else
    {
        vec3 _243 = texture(fp_tex_tcb_14, vec2(_94, _96)).xyz;
        float _245 = clamp(texture(fp_tex_tcb_C, vec2(_94, _96)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
        _221 = max(texture(fp_tex_tcb_10, vec2(_94, _96)).x, fp_c1_1._m0[0].y);
        _223 = fma((-_112) + fp_c6_1._m0[93].y, _245, _112);
        _225 = fma((-_114) + fp_c6_1._m0[93].z, _245, _114);
        _227 = texture(fp_tex_tcb_12, vec2(_94, _96)).x;
        _229 = fma((-_110) + fp_c6_1._m0[93].x, _245, _110);
        _231 = _243.x * fp_c6_1._m0[93].x;
        _233 = _243.y * fp_c6_1._m0[93].y;
        _235 = _243.z * fp_c6_1._m0[93].z;
        _237 = 0.0;
        _239 = 0.0;
        _241 = 0.0;
    }
    float _247 = _80.x;
    float _249 = _80.y;
    float _251 = _80.z;
    float _253 = 1.0 / (_82.z * gl_FragCoord.w);
    float _255 = inversesqrt(fma(_251, _251, fma(_249, _249, _247 * _247)));
    float _257 = _247 * (-_255);
    float _259 = _249 * (-_255);
    float _261 = _251 * (-_255);
    float _263 = fma(_261, _211, fma(_259, _209, _257 * _207));
    vec2 _265 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _165, 0.5, 0.5), fma(_78.y * _165, -0.5, 0.5))).xy;
    float _267 = max(_263, fp_c1_1._m0[0].w);
    vec2 _269 = texture(fp_tex_tcb_38, vec2(_267, (-_221) + (-0.0))).xy;
    float _271 = fma(_225 + (-0.039999999105930328369140625), _227, fp_c1_1._m0[0].z);
    float _273 = fma(_223, -_227, _223);
    float _275 = fma(_225, -_227, _225);
    float _277 = fma(_223 + (-0.039999999105930328369140625), _227, fp_c1_1._m0[0].z);
    float _279 = fma(_229, -_227, _229);
    float _281 = fma(_229 + (-0.039999999105930328369140625), _227, fp_c1_1._m0[0].z);
    float _283 = clamp((-fma(max((-_265.x) + 1.0, (-_265.y) + 1.0), clamp(_84.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_82.x * gl_FragCoord.w) * _253, (_82.y * gl_FragCoord.w) * _253)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _285 = _267;
    float _287 = _277;
    float _289 = _281;
    float _291 = _271;
    float _293 = _257;
    float _309;
    float _311;
    float _313;
    float _315;
    float _317;
    float _319;
    float _321;
    float _323;
    float _325;
    float _327;
    if (_183)
    {
        float _295 = fma(_261, -_211, fma(_259, -_209, _257 * (-_207)));
        float _297 = fma(_295 * _207, -2.0, -_257);
        float _299 = fma(_295 * _209, -2.0, -_259);
        float _301 = fma(_295 * _211, -2.0, -_261);
        float _303 = 1.0 / max(abs(_301), max(abs(_297), abs(_299)));
        vec3 _305 = texture(fp_tex_tcb_36, vec4(_297 * _303, _299 * _303, _301 * _303, float(12)), 0.0).xyz;
        float _307 = fma(_269.x, fp_c7_1._m0[19].x, _269.y);
        _309 = _207 * fp_c7_1._m0[19].z;
        _311 = fma(_209 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _313 = _211 * fp_c7_1._m0[19].z;
        _315 = 0.0;
        _287 = fp_c7_1._m0[19].x;
        _317 = 0.0;
        _289 = fp_c7_1._m0[19].x;
        _291 = fp_c7_1._m0[19].x;
        _319 = _305.y * _307;
        _321 = 0.0;
        _323 = _305.x * _307;
        _325 = _305.z * _307;
        _327 = 1.0;
    }
    else
    {
        float _329 = max(_263, fp_c1_1._m0[0].w);
        float _331 = fma(_261, -_211, fma(_259, -_209, _257 * (-_207)));
        float _333 = fma(_331 * _207, -2.0, -_257);
        float _335 = fma(_331 * _209, -2.0, -_259);
        float _337 = fma(_331 * _211, -2.0, -_261);
        float _339 = 1.0 / max(abs(_337), max(abs(_333), abs(_335)));
        vec2 _341 = texture(fp_tex_tcb_38, vec2(_329, (-_221) + (-0.0))).xy;
        float _343 = _341.x;
        float _345 = _341.y;
        vec3 _347 = texture(fp_tex_tcb_36, vec4(_333 * _339, _335 * _339, _337 * _339, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_221 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _349 = _84.y;
        float _351 = fma(fma(_199, -fp_c5_1._m0[23].z, fma(_193, -fp_c5_1._m0[23].y, _197 * (-fp_c5_1._m0[23].x))), -_209, _209);
        float _353 = _349 + (-fp_c9_1._m0[32].w);
        float _355 = _353;
        _309 = _207;
        _311 = _209;
        _285 = _329;
        if (_349 < fp_c9_1._m0[32].w)
        {
            _355 = _353 * (-5.0);
        }
        float _357 = max(0.0, ((-_209) + 1.2000000476837158203125) * (clamp(fma(_355, -(1.0 / fma(clamp((-_209) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_355, -(1.0 / fma(clamp((-_209) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0))) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w);
        _313 = _211;
        _315 = _357 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _317 = _357 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _319 = fma(_277, _343, _345) * _347.y;
        _321 = _357 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _323 = fma(_281, _343, _345) * _347.x;
        _325 = fma(_271, _343, _345) * _347.z;
        _327 = clamp(fma(_351, clamp(_159 * (-7.0), 0.0, 1.0), -_351) + fp_c1_1._m0[1].y, 0.0, 1.0);
    }
    float _359 = _257 + (-fp_c5_1._m0[23].x);
    float _361 = _84.z;
    float _363 = _259 + (-fp_c5_1._m0[23].y);
    float _365 = _84.x;
    float _367 = _261 + (-fp_c5_1._m0[23].z);
    float _369 = _311 * _309;
    float _371 = _313 * _311;
    float _373 = fma(_221, 0.5, 0.5);
    float _375 = inversesqrt(fma(_367, _367, fma(_363, _363, _359 * _359)));
    float _377 = _221 * _221;
    float _379 = (_373 * 0.5) * _373;
    float _381 = _359 * _375;
    float _383 = _363 * _375;
    float _385 = _367 * _375;
    float _387 = fma(_309, _309, -(_311 * _311));
    float _389 = _313 * _309;
    float _391 = _313 * _313;
    int _393 = max(0, min(int(trunc((_361 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _395 = _377 * _377;
    float _397 = max(fma(_385, _211, fma(_383, _209, _381 * _207)), fp_c1_1._m0[0].w) * max(fma(_385, _211, fma(_383, _209, _381 * _207)), fp_c1_1._m0[0].w);
    uint _400 = uint(int(uint((((int(uint(_393) >> uint(16)) * 20) << 16) + (((_393 & 65535) * 20) + max(0, min(int(trunc((_365 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _402 = fp_c10_1._m0[int(uint(int(_400)) >> uint(2))][int(_400) & 3];
    float _404 = max(fma(_261, _385, fma(_259, _383, _257 * _381)), fp_c1_1._m0[0].w);
    float _406 = 1.0 / (_379 + fma(_285, -_379, _285));
    float _408 = exp2(_404 * fma(_404, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _410 = (_406 * (1.0 / (_379 + fma(max(fma(_211, -fp_c5_1._m0[23].z, fma(_209, -fp_c5_1._m0[23].y, _207 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_379, max(fma(_211, -fp_c5_1._m0[23].z, fma(_209, -fp_c5_1._m0[23].y, _207 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_377 * (1.0 / max(fma(_397, _395, -_397) + 1.0, fp_c1_1._m0[0].w))) * (_377 * (1.0 / max(fma(_397, _395, -_397) + 1.0, fp_c1_1._m0[0].w))));
    float _412 = fma(max(0.0, fma(_387, fp_c5_1._m0[31].y, (fma(_313, fp_c5_1._m0[26].z, fma(_311, fp_c5_1._m0[26].y, _309 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_389, fp_c5_1._m0[29].w, fma(_391, fp_c5_1._m0[29].z, fma(_371, fp_c5_1._m0[29].y, _369 * fp_c5_1._m0[29].x))))) + _317, fma(_273, -_287, _273), _319);
    float _414 = fma(max(0.0, fma(_387, fp_c5_1._m0[31].x, (fma(_313, fp_c5_1._m0[25].z, fma(_311, fp_c5_1._m0[25].y, _309 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_389, fp_c5_1._m0[28].w, fma(_391, fp_c5_1._m0[28].z, fma(_371, fp_c5_1._m0[28].y, _369 * fp_c5_1._m0[28].x))))) + _315, fma(_279, -_289, _279), _323);
    float _416 = fma(max(0.0, fma(_387, fp_c5_1._m0[31].z, (fma(_313, fp_c5_1._m0[27].z, fma(_311, fp_c5_1._m0[27].y, _309 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_389, fp_c5_1._m0[30].w, fma(_391, fp_c5_1._m0[30].z, fma(_371, fp_c5_1._m0[30].y, _369 * fp_c5_1._m0[30].x))))) + _321, fma(_275, -_291, _275), _325);
    int _418 = floatBitsToInt(_402);
    float _420 = _416;
    float _422 = _414;
    float _424 = _412;
    float _426 = _414;
    float _428 = _412;
    float _430 = _416;
    if (floatBitsToInt(_402) != (-1))
    {
        int _432 = 0;
        float _436;
        float _438;
        float _440;
        int _524;
        do
        {
            int _434 = _418 & 255;
            _436 = _422;
            _438 = _424;
            _440 = _420;
            _442 = uint(_434) >= 30u;
            if (_442)
            {
                break;
            }
            int _444 = _434 << 4;
            uint _446 = uint(int(uint(_444 + 7360) >> uint(2)));
            int _448 = int(_446) + 1;
            uint _450 = uint(int(uint(_444 + 7368) >> uint(2)));
            float _452 = (-_365) + fp_c10_1._m0[int(uint(int(_446)) >> uint(2))][int(_446) & 3];
            float _454 = (-_84.y) + fp_c10_1._m0[int(uint(_448) >> uint(2))][_448 & 3];
            float _456 = (-_361) + fp_c10_1._m0[int(uint(int(_450)) >> uint(2))][int(_450) & 3];
            float _458 = fma(_456, _456, fma(_454, _454, _452 * _452));
            float _460 = _452 * inversesqrt(_458);
            float _462 = _454 * inversesqrt(_458);
            float _464 = _456 * inversesqrt(_458);
            float _466 = _257 + _460;
            float _468 = _259 + _462;
            float _470 = _261 + _464;
            uint _472 = uint(int(uint(_444 + 6880) >> uint(2)));
            int _474 = int(_472) + 1;
            float _476 = inversesqrt(fma(_470, _470, fma(_468, _468, _466 * _466)));
            float _478 = _466 * _476;
            float _480 = _468 * _476;
            float _482 = _470 * _476;
            uint _484 = uint(int(uint(_444 + 8320) >> uint(2)));
            float _486 = fma(_464, _211, fma(_462, _209, _460 * _207));
            uint _488 = uint(int(uint(_444 + 6408) >> uint(2)));
            float _490 = max(_486, fp_c1_1._m0[0].w);
            float _492 = max(fma(_261, _482, fma(_259, _480, _257 * _478)), fp_c1_1._m0[0].w);
            float _494 = max(fma(_482, _211, fma(_480, _209, _478 * _207)), fp_c1_1._m0[0].w) * max(fma(_482, _211, fma(_480, _209, _478 * _207)), fp_c1_1._m0[0].w);
            uint _496 = uint(int(uint(_444 + 6400) >> uint(2)));
            int _498 = int(_496) + 1;
            float _500 = exp2(_492 * fma(_492, fp_c1_1._m0[1].z, -6.9831600189208984375));
            bool _502 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_484)) >> uint(2))][int(_484) & 3]) != 0;
            float _504 = _406 * (1.0 / (_379 + fma(_379, -_490, _490)));
            float _506 = _504 * ((_377 * (1.0 / max(fma(_395, _494, -_494) + 1.0, fp_c1_1._m0[0].w))) * (_377 * (1.0 / max(fma(_395, _494, -_494) + 1.0, fp_c1_1._m0[0].w))));
            float _508 = _504;
            if (!_502)
            {
                _508 = 1.0;
            }
            float _510 = _508;
            if (_502)
            {
                uint _512 = uint(int(uint(_444 + 7840) >> uint(2)));
                int _514 = int(_512) + 1;
                uint _516 = uint(int(uint(_444 + 6888) >> uint(2)));
                float _518 = fp_c10_1._m0[int(uint(int(_516)) >> uint(2))][int(_516) & 3];
                int _520 = int(_516) + 1;
                uint _522 = uint(int(uint(_444 + 7848) >> uint(2)));
                _510 = exp2(fp_c10_1._m0[int(uint(_520) >> uint(2))][_520 & 3] * log2(clamp(((-_518) + fma(_464, -fp_c10_1._m0[int(uint(int(_522)) >> uint(2))][int(_522) & 3], fma(_462, -fp_c10_1._m0[int(uint(_514) >> uint(2))][_514 & 3], _460 * (-fp_c10_1._m0[int(uint(int(_512)) >> uint(2))][int(_512) & 3])))) * (1.0 / ((-_518) + 1.0)), 0.0, 1.0)));
            }
            _524 = _432 + 1;
            float _526 = (exp2(fp_c10_1._m0[int(uint(_474) >> uint(2))][_474 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_472)) >> uint(2))][int(_472) & 3], -sqrt(_458), fp_c1_1._m0[1].x), 0.0, 1.0))) * _510) * clamp(_486 + (-0.0), 0.0, 1.0);
            float _528 = fma(fp_c10_1._m0[int(uint(int(_488)) >> uint(2))][int(_488) & 3] * _526, fma(_275, fp_c1_1._m0[2].x, ((fma(_500, -_291, _500) + _291) * _506) * 0.079577468335628509521484375), _420);
            float _530 = fma(fp_c10_1._m0[int(uint(int(_496)) >> uint(2))][int(_496) & 3] * _526, fma(_279, fp_c1_1._m0[2].x, ((fma(_500, -_289, _500) + _289) * _506) * 0.079577468335628509521484375), _422);
            float _532 = fma(fp_c10_1._m0[int(uint(_498) >> uint(2))][_498 & 3] * _526, fma(_273, fp_c1_1._m0[2].x, ((fma(_500, -_287, _500) + _287) * _506) * 0.079577468335628509521484375), _424);
            _418 = int(uint(_418) >> uint(8));
            _432 = _524;
            _420 = _528;
            _422 = _530;
            _424 = _532;
            _436 = _530;
            _438 = _532;
            _440 = _528;
        } while (!(_524 >= 4));
        _442 = false;
        _426 = _436;
        _428 = _438;
        _430 = _440;
        if ((_418 & 255) == 30)
        {
            float _534 = _84.y;
            float _536 = 1.0 / (fma(_361, fp_c10_1._m0[565].z, fma(_534, fp_c10_1._m0[565].y, _365 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _538 = 1.0 / fp_c10_1._m0[561].y;
            float _540 = _365 + (-fp_c10_1._m0[557].x);
            float _542 = _361 + (-fp_c10_1._m0[557].z);
            float _544 = (-_365) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_538, fp_c10_1._m0[557].x);
            float _546 = (-_361) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_538, fp_c10_1._m0[557].z);
            float _548 = _540 * fp_c10_1._m0[558].z;
            float _550 = _542 * fp_c10_1._m0[558].x;
            float _552 = _544 * _544;
            float _554 = ((-float(_550 < _548)) + float(_550 > _548)) * fp_c10_1._m0[561].y;
            float _556 = fma(_542, _542, _540 * _540);
            float _558 = sqrt(fma(_546, _546, _552)) * (-fp_c10_1._m0[558].y);
            float _560 = inversesqrt(fma(_546, _546, fma(_558, _558, _552)));
            float _562 = fma(_542, fp_c10_1._m0[558].z, _540 * fp_c10_1._m0[558].x);
            bool _564 = _562 > 0.0;
            float _566 = _544 * _560;
            float _568 = _558 * _560;
            float _570 = _546 * _560;
            float _572 = _257 + _566;
            float _574 = _259 + _568;
            float _576 = _261 + _570;
            float _578 = inversesqrt(fma(_570, _570, _566 * _566));
            float _580 = fma(_570, _211, fma(_568, _209, _566 * _207));
            float _582 = inversesqrt(fma(_576, _576, fma(_574, _574, _572 * _572)));
            float _584 = _572 * _582;
            float _586 = _574 * _582;
            float _588 = _576 * _582;
            if (_564)
            {
                _293 = sqrt(_556);
            }
            float _590 = _293;
            if (!_564)
            {
                _590 = 1.0;
            }
            bool _592 = fma(_542 * inversesqrt(_556), fp_c10_1._m0[558].z, (_540 * inversesqrt(_556)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _594 = max(fma(_261, _588, fma(_259, _586, _257 * _584)), fp_c1_1._m0[0].w);
            float _596 = max(_580, fp_c1_1._m0[0].w);
            float _598 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_540, fma(_554, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_542 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_554 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_540, fma(_554, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_542 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_554 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _600 = fma(_594, fp_c1_1._m0[1].z, -6.9831600189208984375);
            float _602 = max(fma(_588, _211, fma(_586, _209, _584 * _207)), fp_c1_1._m0[0].w) * max(fma(_588, _211, fma(_586, _209, _584 * _207)), fp_c1_1._m0[0].w);
            float _604 = clamp(fma(_562 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_562 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _606 = _600;
            if (_592)
            {
                _606 = fma(_598, -_598, fp_c1_1._m0[1].x) * fma(_598, -_598, fp_c1_1._m0[1].x);
            }
            float _608 = exp2(_594 * _600);
            float _610 = _606;
            if (!_592)
            {
                _610 = 1.0;
            }
            float _612 = clamp(_580 + (-0.0), 0.0, 1.0) * (min(fma(_604, -_604, fp_c1_1._m0[1].x) * fma(_604, -_604, fp_c1_1._m0[1].x), _610) * (exp2(log2(clamp(fma(_590, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_570 * _578, -fp_c10_1._m0[558].z, (_566 * _578) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _614 = (_406 * (1.0 / (_379 + fma(_379, -_596, _596)))) * ((_377 * (1.0 / max(fma(_395, _602, -_602) + 1.0, fp_c1_1._m0[0].w))) * (_377 * (1.0 / max(fma(_395, _602, -_602) + 1.0, fp_c1_1._m0[0].w))));
            float _616 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_361, fp_c10_1._m0[562].z, fma(_534, fp_c10_1._m0[562].y, _365 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _536, 0.5, 0.5), (-fma((fma(_361, fp_c10_1._m0[563].z, fma(_534, fp_c10_1._m0[563].y, _365 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _536, 0.5, 0.5)) + 1.0)).z > fma((fma(_361, fp_c10_1._m0[564].z, fma(_534, fp_c10_1._m0[564].y, _365 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _536, 0.5, 0.5)) || (_562 <= 0.0));
            _426 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _612) * fma(_279, fp_c1_1._m0[2].x, ((fma(_608, -_289, _608) + _289) * _614) * 0.079577468335628509521484375), _616, _436);
            _428 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _612) * fma(_273, fp_c1_1._m0[2].x, ((fma(_608, -_287, _608) + _287) * _614) * 0.079577468335628509521484375), _616, _438);
            _430 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _612) * fma(_275, fp_c1_1._m0[2].x, ((fma(_608, -_291, _608) + _291) * _614) * 0.079577468335628509521484375), _616, _440);
        }
    }
    float _618 = _365 + (-fp_c3_1._m0[11].w);
    float _620 = _84.y;
    float _622 = _361 + (-fp_c3_1._m0[13].w);
    float _624 = clamp(fma(_211, -fp_c5_1._m0[23].z, fma(_209, -fp_c5_1._m0[23].y, _207 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _626 = _620 + (-fp_c3_1._m0[12].w);
    float _628 = fma(_622, _622, fma(_626, _626, _618 * _618));
    float _630 = clamp(fma(_283, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _632 = fma(_231, fp_c6_1._m0[11].x, fma(_283, ((_624 * fp_c5_1._m0[5].x) * fma((fma(_408, -_289, _408) + _289) * _410, fp_c1_1._m0[1].w, _279 * 0.3183098733425140380859375)) * _327, _426)) + _237;
    float _634 = fma(_233, fp_c6_1._m0[11].x, fma(_283, ((_624 * fp_c5_1._m0[5].y) * fma((fma(_408, -_287, _408) + _287) * _410, fp_c1_1._m0[1].w, _273 * 0.3183098733425140380859375)) * _327, _428)) + _239;
    float _636 = exp2(log2(clamp(sqrt(_628) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_622 * inversesqrt(_628), fp_c5_1._m0[23].z, fma(_626 * inversesqrt(_628), fp_c5_1._m0[23].y, (_618 * inversesqrt(_628)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _638 = fma(_235, fp_c6_1._m0[11].x, fma(_283, ((_624 * fp_c5_1._m0[5].z) * fma((fma(_408, -_291, _408) + _291) * _410, fp_c1_1._m0[1].w, _275 * 0.3183098733425140380859375)) * _327, _430)) + _241;
    float _640 = clamp(fma(fma(_361, fp_c5_1._m0[14].z, fma(_620, fp_c5_1._m0[14].y, _365 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _642 = fma((-_632) + fp_c5_1._m0[13].x, _640, _632);
    float _644 = clamp((-exp2((clamp(fma(sqrt(_628), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    float _646 = fma((-_634) + fp_c5_1._m0[13].y, _640, _634);
    float _648 = fma((-_638) + fp_c5_1._m0[13].z, _640, _638);
    _87.x = fma((-_642) + fma(fma((_636 * fp_c7_1._m0[55].x) * _630, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _644, _642);
    _87.y = fma((-_646) + fma(fma((_636 * fp_c7_1._m0[55].y) * _630, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _644, _646);
    _87.z = fma((-_648) + fma(fma((_636 * fp_c7_1._m0[55].z) * _630, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _644, _648);
    _87.w = 1.0;
}


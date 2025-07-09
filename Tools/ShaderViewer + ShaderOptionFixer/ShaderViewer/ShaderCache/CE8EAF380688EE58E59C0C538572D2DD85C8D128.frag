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

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_18;
layout(binding = 5) uniform sampler2D fp_tex_tcb_26;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 2) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 0) out vec4 _79;
layout(location = 6) in vec4 _81;
layout(location = 4) in vec4 _83;
layout(location = 3) in vec4 _85;
uint _6[12];

void main()
{
    bool _448 = false;
    float _92 = _70.x;
    float _94 = _70.y;
    float _96 = texture(fp_tex_tcb_8, vec2(_92, _94)).x;
    bool _100 = _96 <= 0.0;
    if (_100)
    {
        discard;
    }
    vec2 _104 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _106 = _104.x;
    float _108 = _104.y;
    vec3 _112 = texture(fp_tex_tcb_26, vec2(_92, _94)).xyz;
    vec3 _114 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _116 = _72.x;
    float _118 = _72.y;
    float _120 = _72.z;
    float _122 = _74.y;
    float _124 = _74.z;
    float _126 = _74.x;
    float _128 = _74.w;
    float _130 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _132 = _120 * _130;
    float _134 = _116 * _130;
    float _136 = _118 * _130;
    float _138 = (-texture(fp_tex_tcb_26, vec2(_92 + (-fp_c6_1._m0[26].w), _94 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_26, vec2(_92 + fp_c6_1._m0[26].w, _94 + fp_c6_1._m0[26].w)).x;
    float _140 = sqrt(clamp((-fma(_106, _106, _108 * _108)) + 1.0, 0.0, 1.0));
    float _142 = fma(_126 * _138, fp_c6_1._m0[27].x, _134);
    float _144 = fma(_134, _140, fma(_106, _126, _108 * (fma(_136, _124, -(_132 * _122)) * _128)));
    float _146 = fma(_136, _140, fma(_106, _122, _108 * (fma(_132, _126, -(_134 * _124)) * _128)));
    float _148 = fma(_132, _140, fma(_106, _124, _108 * (fma(_134, _122, -(_136 * _126)) * _128)));
    float _150 = fma(_124 * _138, fp_c6_1._m0[27].x, _132);
    float _152 = fma(_122 * _138, fp_c6_1._m0[27].x, _136);
    float _154 = inversesqrt(fma(_148, _148, fma(_146, _146, _144 * _144)));
    float _156 = fma(clamp(_136 + (-0.0), 0.0, 1.0), fp_c7_1._m0[20].x + (-fp_c7_1._m0[20].y), fp_c7_1._m0[20].y);
    float _158 = _148 * _154;
    float _160 = _144 * _154;
    float _162 = _146 * _154;
    float _164 = min((_112.y + fp_c6_1._m0[26].y) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _166 = min((_112.x + fp_c6_1._m0[26].x) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _168 = min((_112.z + fp_c6_1._m0[26].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _170 = inversesqrt(fma(_150, _150, fma(_152, _152, _142 * _142)));
    float _172 = max(_168, max(_164, _166));
    float _174 = _172 + (-fp_c7_1._m0[21].w);
    float _176 = 1.0 / _76.w;
    float _178 = _142 * _170;
    float _180 = _152 * _170;
    float _182 = clamp(_174 + (-0.0), 0.0, 1.0);
    float _184 = _150 * _170;
    float _186 = clamp(((_164 + (-_172)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _188 = clamp(((_166 + (-_172)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _190 = _76.y * _176;
    float _192 = clamp(((_168 + (-_172)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _194 = _76.x * _176;
    bool _196 = min(_182 * 1000.0, 1.0) > 0.5;
    float _198 = fma(_192, fp_c8_1._m0[18].x, fma(_188, fp_c8_1._m0[4].x, _186 * fp_c8_1._m0[11].x));
    float _200 = fma(_192, fp_c8_1._m0[18].y, fma(_188, fp_c8_1._m0[4].y, _186 * fp_c8_1._m0[11].y));
    float _202 = fma(_192, fp_c8_1._m0[18].z, fma(_188, fp_c8_1._m0[4].z, _186 * fp_c8_1._m0[11].z));
    int _205 = floatBitsToInt(_182);
    int _207 = floatBitsToInt(_194);
    int _209 = floatBitsToInt(_190);
    float _211 = _114.x;
    float _213 = _114.z;
    float _215 = _160;
    float _217 = _162;
    float _219 = _158;
    float _221 = _114.y;
    int _223 = floatBitsToInt(_156);
    float _237;
    float _239;
    float _241;
    float _243;
    float _245;
    if (_196)
    {
        float _225 = clamp(_182 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _227 = (-_160) + _178;
        float _229 = (-_158) + _184;
        float _231 = fma(fma(_198, -fp_c7_1._m0[45].y, fma(_192, fp_c8_1._m0[17].x, fma(_188, fp_c8_1._m0[3].x, _186 * fp_c8_1._m0[10].x))), _225, _198 * fp_c7_1._m0[45].y);
        float _233 = fma(fma(_202, -fp_c7_1._m0[45].y, fma(_192, fp_c8_1._m0[17].z, fma(_188, fp_c8_1._m0[3].z, _186 * fp_c8_1._m0[10].z))), _225, _202 * fp_c7_1._m0[45].y);
        float _235 = fma(fma(_200, -fp_c7_1._m0[45].y, fma(_192, fp_c8_1._m0[17].y, fma(_188, fp_c8_1._m0[3].y, _186 * fp_c8_1._m0[10].y))), _225, _200 * fp_c7_1._m0[45].y);
        _205 = floatBitsToInt(_225);
        _207 = floatBitsToInt(_227);
        _209 = floatBitsToInt(_229);
        _237 = fp_c7_1._m0[18].w;
        _211 = _231;
        _239 = 0.0;
        _213 = _233;
        _215 = fma(_156, _227, _160);
        _217 = fma(_156, (-_162) + _180, _162);
        _219 = fma(_156, _229, _158);
        _221 = _235;
        _241 = _231 * fp_c7_1._m0[18].z;
        _243 = _235 * fp_c7_1._m0[18].z;
        _245 = _233 * fp_c7_1._m0[18].z;
    }
    else
    {
        _237 = max(texture(fp_tex_tcb_10, vec2(_92, _94)).x, fp_c1_1._m0[0].y);
        _239 = fp_c6_1._m0[9].x;
        _241 = 0.0;
        _243 = 0.0;
        _245 = 0.0;
    }
    int _247 = _205;
    int _249 = _207;
    int _251 = _209;
    if (_100)
    {
        _247 = 0;
    }
    if (_100)
    {
        _249 = 0;
    }
    if (_100)
    {
        _223 = 0;
    }
    if (_100)
    {
        _251 = 0;
    }
    if (_100)
    {
        _79.x = intBitsToFloat(_247);
        _79.y = intBitsToFloat(_249);
        _79.z = intBitsToFloat(_223);
        _79.w = intBitsToFloat(_251);
        return;
    }
    float _253 = _83.x;
    float _255 = _83.y;
    float _257 = fma(_239, -_211, _211);
    float _259 = _83.z;
    float _261 = 1.0 / (_81.z * gl_FragCoord.w);
    vec2 _263 = texture(fp_tex_tcb_2A, vec2(fma(_194, 0.5, 0.5), fma(_190, -0.5, 0.5))).xy;
    float _265 = fma(_239, -_213, _213);
    float _267 = fma(_211 + (-0.039999999105930328369140625), _239, fp_c1_1._m0[0].z);
    float _269 = inversesqrt(fma(_259, _259, fma(_255, _255, _253 * _253)));
    float _271 = _253 * (-_269);
    float _273 = _255 * (-_269);
    float _275 = _259 * (-_269);
    float _277 = fma(_275, _219, fma(_273, _217, _271 * _215));
    float _279 = max(_277, fp_c1_1._m0[0].w);
    vec2 _281 = texture(fp_tex_tcb_38, vec2(_279, (-_237) + (-0.0))).xy;
    float _283 = fma(_239, -_221, _221);
    float _285 = clamp(texture(fp_tex_tcb_18, vec2(_92, _94)).x + (-0.0), 0.0, 1.0);
    float _287 = fma(_221 + (-0.039999999105930328369140625), _239, fp_c1_1._m0[0].z);
    float _289 = fma(_213 + (-0.039999999105930328369140625), _239, fp_c1_1._m0[0].z);
    float _291 = clamp((-fma(max((-_263.x) + 1.0, (-_263.y) + 1.0), clamp(_85.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_81.x * gl_FragCoord.w) * _261, (_81.y * gl_FragCoord.w) * _261)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _293 = _279;
    float _295 = _289;
    float _297 = _267;
    float _299 = _287;
    float _315;
    float _317;
    float _319;
    float _321;
    float _323;
    float _325;
    float _327;
    float _329;
    float _331;
    float _333;
    if (_196)
    {
        float _301 = fma(_275, -_219, fma(_273, -_217, _271 * (-_215)));
        float _303 = fma(_301 * _215, -2.0, -_271);
        float _305 = fma(_301 * _217, -2.0, -_273);
        float _307 = fma(_301 * _219, -2.0, -_275);
        float _309 = 1.0 / max(abs(_307), max(abs(_303), abs(_305)));
        vec3 _311 = texture(fp_tex_tcb_36, vec4(_303 * _309, _305 * _309, _307 * _309, float(12)), 0.0).xyz;
        float _313 = fma(_281.x, fp_c7_1._m0[19].x, _281.y);
        _315 = _215 * fp_c7_1._m0[19].z;
        _317 = fma(_217 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _319 = _219 * fp_c7_1._m0[19].z;
        _321 = 0.0;
        _323 = 0.0;
        _325 = 0.0;
        _295 = fp_c7_1._m0[19].x;
        _297 = fp_c7_1._m0[19].x;
        _299 = fp_c7_1._m0[19].x;
        _327 = _311.x * _313;
        _329 = _311.z * _313;
        _331 = _311.y * _313;
        _333 = 1.0;
    }
    else
    {
        float _335 = max(_277, fp_c1_1._m0[0].w);
        float _337 = fma(_275, -_219, fma(_273, -_217, _271 * (-_215)));
        float _339 = fma(_337 * _215, -2.0, -_271);
        float _341 = fma(_337 * _217, -2.0, -_273);
        float _343 = fma(_337 * _219, -2.0, -_275);
        float _345 = 1.0 / max(abs(_343), max(abs(_339), abs(_341)));
        vec2 _347 = texture(fp_tex_tcb_38, vec2(_335, (-_237) + (-0.0))).xy;
        float _349 = _347.x;
        float _351 = _347.y;
        vec3 _353 = texture(fp_tex_tcb_36, vec4(_339 * _345, _341 * _345, _343 * _345, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_237 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _355 = _85.y;
        float _357 = fma(fma(_184, -fp_c5_1._m0[23].z, fma(_180, -fp_c5_1._m0[23].y, _178 * (-fp_c5_1._m0[23].x))), -_217, _217);
        float _359 = _355 + (-fp_c9_1._m0[32].w);
        float _361 = _359;
        _315 = _215;
        _317 = _217;
        _319 = _219;
        _293 = _335;
        _333 = clamp(fma(_357, clamp(_174 * (-7.0), 0.0, 1.0), -_357) + fp_c1_1._m0[1].y, 0.0, 1.0);
        if (_355 < fp_c9_1._m0[32].w)
        {
            _361 = _359 * (-5.0);
        }
        float _363 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w) * max(0.0, ((-_217) + 1.2000000476837158203125) * (clamp(fma(_361, -(1.0 / fma(clamp((-_217) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_361, -(1.0 / fma(clamp((-_217) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0)));
        _321 = _363 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _323 = _363 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _325 = _363 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _327 = fma(_267, _349, _351) * _353.x;
        _329 = fma(_289, _349, _351) * _353.z;
        _331 = fma(_287, _349, _351) * _353.y;
    }
    float _365 = _271 + (-fp_c5_1._m0[23].x);
    float _367 = _85.z;
    float _369 = _273 + (-fp_c5_1._m0[23].y);
    float _371 = _85.x;
    float _373 = _275 + (-fp_c5_1._m0[23].z);
    float _375 = _317 * _315;
    float _377 = _319 * _317;
    float _379 = fma(_237, 0.5, 0.5);
    float _381 = _237 * _237;
    float _383 = (_379 * 0.5) * _379;
    float _385 = inversesqrt(fma(_373, _373, fma(_369, _369, _365 * _365)));
    float _387 = 1.0 / (_383 + fma(_293, -_383, _293));
    float _389 = _365 * _385;
    float _391 = _369 * _385;
    float _393 = _373 * _385;
    float _395 = fma(_315, _315, -(_317 * _317));
    float _397 = _319 * _315;
    int _399 = max(0, min(int(trunc((_367 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _401 = _319 * _319;
    float _403 = _381 * _381;
    float _405 = max(fma(_393, _219, fma(_391, _217, _389 * _215)), fp_c1_1._m0[0].w) * max(fma(_393, _219, fma(_391, _217, _389 * _215)), fp_c1_1._m0[0].w);
    float _407 = max(fma(_275, _393, fma(_273, _391, _271 * _389)), fp_c1_1._m0[0].w);
    uint _410 = uint(int(uint((((int(uint(_399) >> uint(16)) * 20) << 16) + (((_399 & 65535) * 20) + max(0, min(int(trunc((_371 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _412 = fp_c10_1._m0[int(uint(int(_410)) >> uint(2))][int(_410) & 3];
    float _414 = exp2(_407 * fma(_407, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _416 = (_387 * (1.0 / (_383 + fma(max(fma(_219, -fp_c5_1._m0[23].z, fma(_217, -fp_c5_1._m0[23].y, _215 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_383, max(fma(_219, -fp_c5_1._m0[23].z, fma(_217, -fp_c5_1._m0[23].y, _215 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_381 * (1.0 / max(fma(_405, _403, -_405) + 1.0, fp_c1_1._m0[0].w))) * (_381 * (1.0 / max(fma(_405, _403, -_405) + 1.0, fp_c1_1._m0[0].w))));
    float _418 = fma(max(0.0, fma(_395, fp_c5_1._m0[31].x, (fma(_319, fp_c5_1._m0[25].z, fma(_317, fp_c5_1._m0[25].y, _315 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_397, fp_c5_1._m0[28].w, fma(_401, fp_c5_1._m0[28].z, fma(_377, fp_c5_1._m0[28].y, _375 * fp_c5_1._m0[28].x))))) + _321, fma(_257, -_297, _257), _327);
    float _420 = fma(max(0.0, fma(_395, fp_c5_1._m0[31].z, (fma(_319, fp_c5_1._m0[27].z, fma(_317, fp_c5_1._m0[27].y, _315 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_397, fp_c5_1._m0[30].w, fma(_401, fp_c5_1._m0[30].z, fma(_377, fp_c5_1._m0[30].y, _375 * fp_c5_1._m0[30].x))))) + _325, fma(_265, -_295, _265), _329);
    float _422 = fma(max(0.0, fma(_395, fp_c5_1._m0[31].y, (fma(_319, fp_c5_1._m0[26].z, fma(_317, fp_c5_1._m0[26].y, _315 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_397, fp_c5_1._m0[29].w, fma(_401, fp_c5_1._m0[29].z, fma(_377, fp_c5_1._m0[29].y, _375 * fp_c5_1._m0[29].x))))) + _323, fma(_283, -_299, _283), _331);
    int _424 = floatBitsToInt(_412);
    float _426 = _422;
    float _428 = _418;
    float _430 = _420;
    float _432 = _418;
    float _434 = _422;
    float _436 = _420;
    if (floatBitsToInt(_412) != (-1))
    {
        int _438 = 0;
        float _442;
        float _444;
        float _446;
        int _528;
        do
        {
            int _440 = _424 & 255;
            _442 = _428;
            _444 = _426;
            _446 = _430;
            _448 = uint(_440) >= 30u;
            if (_448)
            {
                break;
            }
            int _450 = _440 << 4;
            uint _452 = uint(int(uint(_450 + 7360) >> uint(2)));
            int _454 = int(_452) + 1;
            uint _456 = uint(int(uint(_450 + 7368) >> uint(2)));
            float _458 = (-_371) + fp_c10_1._m0[int(uint(int(_452)) >> uint(2))][int(_452) & 3];
            float _460 = (-_85.y) + fp_c10_1._m0[int(uint(_454) >> uint(2))][_454 & 3];
            float _462 = (-_367) + fp_c10_1._m0[int(uint(int(_456)) >> uint(2))][int(_456) & 3];
            float _464 = fma(_462, _462, fma(_460, _460, _458 * _458));
            float _466 = _458 * inversesqrt(_464);
            float _468 = _460 * inversesqrt(_464);
            float _470 = _462 * inversesqrt(_464);
            float _472 = _271 + _466;
            float _474 = _273 + _468;
            float _476 = _275 + _470;
            float _478 = inversesqrt(fma(_476, _476, fma(_474, _474, _472 * _472)));
            float _480 = _472 * _478;
            float _482 = _474 * _478;
            float _484 = _476 * _478;
            uint _486 = uint(int(uint(_450 + 6880) >> uint(2)));
            int _488 = int(_486) + 1;
            uint _490 = uint(int(uint(_450 + 8320) >> uint(2)));
            float _492 = fma(_470, _219, fma(_468, _217, _466 * _215));
            float _494 = max(fma(_275, _484, fma(_273, _482, _271 * _480)), fp_c1_1._m0[0].w);
            float _496 = max(_492, fp_c1_1._m0[0].w);
            float _498 = max(fma(_484, _219, fma(_482, _217, _480 * _215)), fp_c1_1._m0[0].w) * max(fma(_484, _219, fma(_482, _217, _480 * _215)), fp_c1_1._m0[0].w);
            uint _500 = uint(int(uint(_450 + 6400) >> uint(2)));
            int _502 = int(_500) + 1;
            uint _504 = uint(int(uint(_450 + 6408) >> uint(2)));
            float _506 = exp2(_494 * fma(_494, fp_c1_1._m0[1].z, -6.9831600189208984375));
            bool _508 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_490)) >> uint(2))][int(_490) & 3]) != 0;
            float _510 = (_387 * (1.0 / (_383 + fma(_383, -_496, _496)))) * ((_381 * (1.0 / max(fma(_403, _498, -_498) + 1.0, fp_c1_1._m0[0].w))) * (_381 * (1.0 / max(fma(_403, _498, -_498) + 1.0, fp_c1_1._m0[0].w))));
            float _512 = _510;
            if (!_508)
            {
                _512 = 1.0;
            }
            float _514 = _512;
            if (_508)
            {
                uint _516 = uint(int(uint(_450 + 7840) >> uint(2)));
                int _518 = int(_516) + 1;
                uint _520 = uint(int(uint(_450 + 6888) >> uint(2)));
                float _522 = fp_c10_1._m0[int(uint(int(_520)) >> uint(2))][int(_520) & 3];
                int _524 = int(_520) + 1;
                uint _526 = uint(int(uint(_450 + 7848) >> uint(2)));
                _514 = exp2(fp_c10_1._m0[int(uint(_524) >> uint(2))][_524 & 3] * log2(clamp(((-_522) + fma(_470, -fp_c10_1._m0[int(uint(int(_526)) >> uint(2))][int(_526) & 3], fma(_468, -fp_c10_1._m0[int(uint(_518) >> uint(2))][_518 & 3], _466 * (-fp_c10_1._m0[int(uint(int(_516)) >> uint(2))][int(_516) & 3])))) * (1.0 / ((-_522) + 1.0)), 0.0, 1.0)));
            }
            _528 = _438 + 1;
            float _530 = (exp2(fp_c10_1._m0[int(uint(_488) >> uint(2))][_488 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_486)) >> uint(2))][int(_486) & 3], -sqrt(_464), fp_c1_1._m0[1].x), 0.0, 1.0))) * _514) * clamp(_492 + (-0.0), 0.0, 1.0);
            float _532 = fma(fp_c10_1._m0[int(uint(_502) >> uint(2))][_502 & 3] * _530, fma(_283, fp_c1_1._m0[2].x, ((fma(_506, -_299, _506) + _299) * _510) * 0.079577468335628509521484375), _426);
            float _534 = fma(fp_c10_1._m0[int(uint(int(_500)) >> uint(2))][int(_500) & 3] * _530, fma(_257, fp_c1_1._m0[2].x, ((fma(_506, -_297, _506) + _297) * _510) * 0.079577468335628509521484375), _428);
            float _536 = fma(fp_c10_1._m0[int(uint(int(_504)) >> uint(2))][int(_504) & 3] * _530, fma(_265, fp_c1_1._m0[2].x, ((fma(_506, -_295, _506) + _295) * _510) * 0.079577468335628509521484375), _430);
            _424 = int(uint(_424) >> uint(8));
            _438 = _528;
            _426 = _532;
            _428 = _534;
            _430 = _536;
            _442 = _534;
            _444 = _532;
            _446 = _536;
        } while (!(_528 >= 4));
        _448 = false;
        _432 = _442;
        _434 = _444;
        _436 = _446;
        if ((_424 & 255) == 30)
        {
            float _538 = _85.y;
            float _540 = 1.0 / (fma(_367, fp_c10_1._m0[565].z, fma(_538, fp_c10_1._m0[565].y, _371 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _542 = 1.0 / fp_c10_1._m0[561].y;
            float _544 = _371 + (-fp_c10_1._m0[557].x);
            float _546 = _367 + (-fp_c10_1._m0[557].z);
            float _548 = _544 * fp_c10_1._m0[558].z;
            float _550 = _546 * fp_c10_1._m0[558].x;
            float _552 = (-_371) + fma(_542, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _554 = (-_367) + fma(_542, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _556 = fma(_546, _546, _544 * _544);
            float _558 = _552 * _552;
            float _560 = ((-float(_550 < _548)) + float(_550 > _548)) * fp_c10_1._m0[561].y;
            float _562 = sqrt(fma(_554, _554, _558)) * (-fp_c10_1._m0[558].y);
            float _564 = inversesqrt(fma(_554, _554, fma(_562, _562, _558)));
            float _566 = _552 * _564;
            float _568 = _562 * _564;
            float _570 = _554 * _564;
            float _572 = _271 + _566;
            float _574 = _273 + _568;
            float _576 = fma(_546, fp_c10_1._m0[558].z, _544 * fp_c10_1._m0[558].x);
            float _578 = inversesqrt(fma(_570, _570, _566 * _566));
            float _580 = _275 + _570;
            bool _582 = _576 > 0.0;
            float _584 = inversesqrt(fma(_580, _580, fma(_574, _574, _572 * _572)));
            float _586 = _572 * _584;
            float _588 = _574 * _584;
            float _590 = _570 * _578;
            float _592 = _580 * _584;
            float _594 = fma(_570, _219, fma(_568, _217, _566 * _215));
            float _596 = _590;
            if (_582)
            {
                _596 = sqrt(_556);
            }
            float _598 = _596;
            if (!_582)
            {
                _598 = 1.0;
            }
            float _600 = max(_594, fp_c1_1._m0[0].w);
            float _602 = max(fma(_275, _592, fma(_273, _588, _271 * _586)), fp_c1_1._m0[0].w);
            bool _604 = fma(_546 * inversesqrt(_556), fp_c10_1._m0[558].z, (_544 * inversesqrt(_556)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _606 = max(fma(_592, _219, fma(_588, _217, _586 * _215)), fp_c1_1._m0[0].w) * max(fma(_592, _219, fma(_588, _217, _586 * _215)), fp_c1_1._m0[0].w);
            float _608 = clamp(fma(_576 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_576 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _610 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_544, fma(_560, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_546 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_560 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_544, fma(_560, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_546 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_560 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _612 = 6.9831600189208984375;
            if (!_604)
            {
                _612 = 1.0;
            }
            float _614 = _612;
            if (_604)
            {
                _614 = fma(_610, -_610, fp_c1_1._m0[1].x) * fma(_610, -_610, fp_c1_1._m0[1].x);
            }
            float _616 = exp2(_602 * fma(_602, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _618 = (_387 * (1.0 / (_383 + fma(_383, -_600, _600)))) * ((_381 * (1.0 / max(fma(_403, _606, -_606) + 1.0, fp_c1_1._m0[0].w))) * (_381 * (1.0 / max(fma(_403, _606, -_606) + 1.0, fp_c1_1._m0[0].w))));
            float _620 = clamp(_594 + (-0.0), 0.0, 1.0) * (min(fma(_608, -_608, fp_c1_1._m0[1].x) * fma(_608, -_608, fp_c1_1._m0[1].x), _614) * (exp2(log2(clamp(fma(_598, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_590, -fp_c10_1._m0[558].z, (_566 * _578) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _622 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_367, fp_c10_1._m0[562].z, fma(_538, fp_c10_1._m0[562].y, _371 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _540, 0.5, 0.5), (-fma((fma(_367, fp_c10_1._m0[563].z, fma(_538, fp_c10_1._m0[563].y, _371 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _540, 0.5, 0.5)) + 1.0)).z > fma((fma(_367, fp_c10_1._m0[564].z, fma(_538, fp_c10_1._m0[564].y, _371 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _540, 0.5, 0.5)) || (_576 <= 0.0));
            _432 = fma(fma(_257, fp_c1_1._m0[2].x, ((fma(_616, -_297, _616) + _297) * _618) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _620), _622, _442);
            _434 = fma(fma(_283, fp_c1_1._m0[2].x, ((fma(_616, -_299, _616) + _299) * _618) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _620), _622, _444);
            _436 = fma(fma(_265, fp_c1_1._m0[2].x, ((fma(_616, -_295, _616) + _295) * _618) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _620), _622, _446);
        }
    }
    float _624 = _371 + (-fp_c3_1._m0[11].w);
    float _626 = _85.y;
    float _628 = _367 + (-fp_c3_1._m0[13].w);
    float _630 = clamp(fma(_219, -fp_c5_1._m0[23].z, fma(_217, -fp_c5_1._m0[23].y, _215 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _632 = _626 + (-fp_c3_1._m0[12].w);
    float _634 = fma(_628, _628, fma(_632, _632, _624 * _624));
    float _636 = clamp(fma(fma(_367, fp_c5_1._m0[14].z, fma(_626, fp_c5_1._m0[14].y, _371 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _638 = clamp(fma(_291 * _285, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _640 = fma(_285, _432, _291 * (((_630 * fp_c5_1._m0[5].x) * fma((fma(_414, -_297, _414) + _297) * _416, fp_c1_1._m0[1].w, _257 * 0.3183098733425140380859375)) * _333)) + _241;
    float _642 = fma(_285, _434, _291 * (((_630 * fp_c5_1._m0[5].y) * fma((fma(_414, -_299, _414) + _299) * _416, fp_c1_1._m0[1].w, _283 * 0.3183098733425140380859375)) * _333)) + _243;
    float _644 = exp2(log2(clamp(sqrt(_634) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_628 * inversesqrt(_634), fp_c5_1._m0[23].z, fma(_632 * inversesqrt(_634), fp_c5_1._m0[23].y, (_624 * inversesqrt(_634)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _646 = fma(_285, _436, _291 * (((_630 * fp_c5_1._m0[5].z) * fma((fma(_414, -_295, _414) + _295) * _416, fp_c1_1._m0[1].w, _265 * 0.3183098733425140380859375)) * _333)) + _245;
    float _648 = fma((-_640) + fp_c5_1._m0[13].x, _636, _640);
    float _650 = clamp((-exp2((clamp(fma(sqrt(_634), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    float _652 = fma((-_642) + fp_c5_1._m0[13].y, _636, _642);
    float _654 = fma((-_646) + fp_c5_1._m0[13].z, _636, _646);
    _79.x = fma((-_648) + fma(fma((_644 * fp_c7_1._m0[55].x) * _638, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _650, _648);
    _79.y = fma((-_652) + fma(fma((_644 * fp_c7_1._m0[55].y) * _638, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _650, _652);
    _79.z = fma((-_654) + fma(fma((_644 * fp_c7_1._m0[55].z) * _638, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _650, _654);
    _79.w = clamp(_96 + (-0.0), 0.0, 1.0);
}


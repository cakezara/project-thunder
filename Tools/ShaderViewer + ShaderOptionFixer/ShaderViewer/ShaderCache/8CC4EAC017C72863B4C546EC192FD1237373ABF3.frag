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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

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
    bool _452 = false;
    float _92 = _70.x;
    float _94 = _70.y;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    vec3 _106 = texture(fp_tex_tcb_26, vec2(_92, _94)).xyz;
    vec3 _108 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _110 = _72.x;
    float _112 = _72.y;
    float _114 = _72.z;
    float _116 = _74.y;
    float _118 = _74.w;
    float _120 = _74.z;
    float _122 = _74.x;
    float _124 = inversesqrt(fma(_114, _114, fma(_112, _112, _110 * _110)));
    float _126 = _110 * _124;
    float _128 = _112 * _124;
    float _130 = _114 * _124;
    float _132 = (-texture(fp_tex_tcb_26, vec2(_92 + (-fp_c6_1._m0[26].w), _94 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_26, vec2(_92 + fp_c6_1._m0[26].w, _94 + fp_c6_1._m0[26].w)).x;
    float _134 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _136 = fma(_120 * _132, fp_c6_1._m0[27].x, _130);
    float _138 = fma(_126, _134, fma(_100, _122, _102 * (fma(_128, _120, -(_130 * _116)) * _118)));
    float _140 = fma(_130, _134, fma(_100, _120, _102 * (fma(_126, _116, -(_128 * _122)) * _118)));
    float _142 = fma(_122 * _132, fp_c6_1._m0[27].x, _126);
    float _144 = min((_106.y + fp_c6_1._m0[26].y) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _146 = min((_106.x + fp_c6_1._m0[26].x) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _148 = fma(_128, _134, fma(_100, _116, _102 * (fma(_130, _122, -(_126 * _120)) * _118)));
    float _150 = min((_106.z + fp_c6_1._m0[26].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _152 = fma(_116 * _132, fp_c6_1._m0[27].x, _128);
    float _154 = max(_150, max(_144, _146));
    float _156 = fma(clamp(_128 + (-0.0), 0.0, 1.0), fp_c7_1._m0[20].x + (-fp_c7_1._m0[20].y), fp_c7_1._m0[20].y);
    float _158 = inversesqrt(fma(_136, _136, fma(_152, _152, _142 * _142)));
    float _160 = _154 + (-fp_c7_1._m0[21].w);
    float _162 = 1.0 / _76.w;
    float _164 = _142 * _158;
    float _166 = clamp(_160 + (-0.0), 0.0, 1.0);
    float _168 = inversesqrt(fma(_140, _140, fma(_148, _148, _138 * _138)));
    float _170 = _76.x * _162;
    float _172 = clamp(((_144 + (-_154)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _174 = clamp(((_146 + (-_154)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _176 = clamp(((_150 + (-_154)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _178 = _152 * _158;
    float _180 = _136 * _158;
    float _182 = _138 * _168;
    float _184 = _148 * _168;
    float _186 = _140 * _168;
    bool _190 = min(_166 * 1000.0, 1.0) > 0.5;
    float _192 = fma(_176, fp_c8_1._m0[18].x, fma(_174, fp_c8_1._m0[4].x, _172 * fp_c8_1._m0[11].x));
    float _194 = fma(_176, fp_c8_1._m0[18].y, fma(_174, fp_c8_1._m0[4].y, _172 * fp_c8_1._m0[11].y));
    float _196 = fma(_176, fp_c8_1._m0[18].z, fma(_174, fp_c8_1._m0[4].z, _172 * fp_c8_1._m0[11].z));
    float _198 = texture(fp_tex_tcb_8, vec2(_92, _94)).x;
    int _201 = floatBitsToInt(_166);
    int _203 = floatBitsToInt(_170);
    int _205 = floatBitsToInt(_94);
    float _207 = _108.x;
    float _209 = _108.z;
    float _211 = _182;
    float _213 = _184;
    float _215 = _186;
    float _217 = _108.y;
    int _233;
    float _235;
    float _237;
    float _239;
    float _241;
    float _243;
    if (_190)
    {
        float _219 = clamp(_166 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _221 = _196 * fp_c7_1._m0[45].y;
        float _223 = (-_182) + _164;
        float _225 = (-_186) + _180;
        float _227 = fma(_219, fma(_196, -fp_c7_1._m0[45].y, fma(_176, fp_c8_1._m0[17].z, fma(_174, fp_c8_1._m0[3].z, _172 * fp_c8_1._m0[10].z))), _221);
        float _229 = fma(_219, fma(_192, -fp_c7_1._m0[45].y, fma(_176, fp_c8_1._m0[17].x, fma(_174, fp_c8_1._m0[3].x, _172 * fp_c8_1._m0[10].x))), _192 * fp_c7_1._m0[45].y);
        float _231 = fma(_219, fma(_194, -fp_c7_1._m0[45].y, fma(_176, fp_c8_1._m0[17].y, fma(_174, fp_c8_1._m0[3].y, _172 * fp_c8_1._m0[10].y))), _194 * fp_c7_1._m0[45].y);
        _198 = fp_c6_1._m0[0].y;
        _201 = floatBitsToInt(_219);
        _203 = floatBitsToInt(_221);
        _233 = floatBitsToInt(_223);
        _205 = floatBitsToInt(_225);
        _235 = fp_c7_1._m0[18].w;
        _207 = _229;
        _237 = 0.0;
        _209 = _227;
        _211 = fma(_156, _223, _182);
        _213 = fma(_156, (-_184) + _178, _184);
        _215 = fma(_156, _225, _186);
        _217 = _231;
        _239 = _229 * fp_c7_1._m0[18].z;
        _241 = _231 * fp_c7_1._m0[18].z;
        _243 = _227 * fp_c7_1._m0[18].z;
    }
    else
    {
        float _245 = texture(fp_tex_tcb_10, vec2(_92, _94)).x;
        _233 = floatBitsToInt(_245);
        _235 = max(_245, fp_c1_1._m0[0].y);
        _237 = fp_c6_1._m0[9].x;
        _239 = 0.0;
        _241 = 0.0;
        _243 = 0.0;
    }
    bool _247 = _198 <= 0.0;
    int _249 = _201;
    int _251 = _203;
    int _253 = _233;
    int _255 = _205;
    if (_247)
    {
        discard;
    }
    if (_247)
    {
        _249 = 0;
    }
    if (_247)
    {
        _251 = 0;
    }
    if (_247)
    {
        _253 = 0;
    }
    if (_247)
    {
        _255 = 0;
    }
    if (_247)
    {
        _79.x = intBitsToFloat(_249);
        _79.y = intBitsToFloat(_251);
        _79.z = intBitsToFloat(_253);
        _79.w = intBitsToFloat(_255);
        return;
    }
    float _257 = _83.x;
    float _259 = _83.y;
    float _261 = fma(_237, -_207, _207);
    float _263 = _83.z;
    float _265 = 1.0 / (_81.z * gl_FragCoord.w);
    vec2 _267 = texture(fp_tex_tcb_2A, vec2(fma(_170, 0.5, 0.5), fma(_76.y * _162, -0.5, 0.5))).xy;
    float _269 = fma(_237, -_209, _209);
    float _271 = fma(_207 + (-0.039999999105930328369140625), _237, fp_c1_1._m0[0].z);
    float _273 = inversesqrt(fma(_263, _263, fma(_259, _259, _257 * _257)));
    float _275 = _257 * (-_273);
    float _277 = _259 * (-_273);
    float _279 = _263 * (-_273);
    float _281 = fma(_279, _215, fma(_277, _213, _275 * _211));
    float _283 = max(_281, fp_c1_1._m0[0].w);
    vec2 _285 = texture(fp_tex_tcb_38, vec2(_283, (-_235) + (-0.0))).xy;
    float _287 = fma(_237, -_217, _217);
    float _289 = clamp(texture(fp_tex_tcb_18, vec2(_92, _94)).x + (-0.0), 0.0, 1.0);
    float _291 = fma(_217 + (-0.039999999105930328369140625), _237, fp_c1_1._m0[0].z);
    float _293 = fma(_209 + (-0.039999999105930328369140625), _237, fp_c1_1._m0[0].z);
    float _295 = clamp((-fma(max((-_267.x) + 1.0, (-_267.y) + 1.0), clamp(_85.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_81.x * gl_FragCoord.w) * _265, (_81.y * gl_FragCoord.w) * _265)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _297 = _283;
    float _299 = _293;
    float _301 = _271;
    float _303 = _291;
    float _319;
    float _321;
    float _323;
    float _325;
    float _327;
    float _329;
    float _331;
    float _333;
    float _335;
    float _337;
    if (_190)
    {
        float _305 = fma(_279, -_215, fma(_277, -_213, _275 * (-_211)));
        float _307 = fma(_305 * _211, -2.0, -_275);
        float _309 = fma(_305 * _213, -2.0, -_277);
        float _311 = fma(_305 * _215, -2.0, -_279);
        float _313 = 1.0 / max(abs(_311), max(abs(_307), abs(_309)));
        vec3 _315 = texture(fp_tex_tcb_36, vec4(_307 * _313, _309 * _313, _311 * _313, float(12)), 0.0).xyz;
        float _317 = fma(_285.x, fp_c7_1._m0[19].x, _285.y);
        _319 = _211 * fp_c7_1._m0[19].z;
        _321 = fma(_213 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _323 = _215 * fp_c7_1._m0[19].z;
        _325 = 0.0;
        _327 = 0.0;
        _329 = 0.0;
        _299 = fp_c7_1._m0[19].x;
        _301 = fp_c7_1._m0[19].x;
        _303 = fp_c7_1._m0[19].x;
        _331 = _315.x * _317;
        _333 = _315.z * _317;
        _335 = _315.y * _317;
        _337 = 1.0;
    }
    else
    {
        float _339 = max(_281, fp_c1_1._m0[0].w);
        float _341 = fma(_279, -_215, fma(_277, -_213, _275 * (-_211)));
        float _343 = fma(_341 * _211, -2.0, -_275);
        float _345 = fma(_341 * _213, -2.0, -_277);
        float _347 = fma(_341 * _215, -2.0, -_279);
        float _349 = 1.0 / max(abs(_347), max(abs(_343), abs(_345)));
        vec2 _351 = texture(fp_tex_tcb_38, vec2(_339, (-_235) + (-0.0))).xy;
        float _353 = _351.x;
        float _355 = _351.y;
        vec3 _357 = texture(fp_tex_tcb_36, vec4(_343 * _349, _345 * _349, _347 * _349, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_235 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _359 = _85.y;
        float _361 = fma(fma(_180, -fp_c5_1._m0[23].z, fma(_178, -fp_c5_1._m0[23].y, _164 * (-fp_c5_1._m0[23].x))), -_213, _213);
        float _363 = _359 + (-fp_c9_1._m0[32].w);
        float _365 = _363;
        _319 = _211;
        _321 = _213;
        _323 = _215;
        _297 = _339;
        _337 = clamp(fma(_361, clamp(_160 * (-7.0), 0.0, 1.0), -_361) + fp_c1_1._m0[1].y, 0.0, 1.0);
        if (_359 < fp_c9_1._m0[32].w)
        {
            _365 = _363 * (-5.0);
        }
        float _367 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w) * max(0.0, ((-_213) + 1.2000000476837158203125) * (clamp(fma(_365, -(1.0 / fma(clamp((-_213) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_365, -(1.0 / fma(clamp((-_213) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0)));
        _325 = _367 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _327 = _367 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _329 = _367 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _331 = fma(_271, _353, _355) * _357.x;
        _333 = fma(_293, _353, _355) * _357.z;
        _335 = fma(_291, _353, _355) * _357.y;
    }
    float _369 = _275 + (-fp_c5_1._m0[23].x);
    float _371 = _85.z;
    float _373 = _277 + (-fp_c5_1._m0[23].y);
    float _375 = _85.x;
    float _377 = _279 + (-fp_c5_1._m0[23].z);
    float _379 = _321 * _319;
    float _381 = _323 * _321;
    float _383 = fma(_235, 0.5, 0.5);
    float _385 = _235 * _235;
    float _387 = (_383 * 0.5) * _383;
    float _389 = inversesqrt(fma(_377, _377, fma(_373, _373, _369 * _369)));
    float _391 = 1.0 / (_387 + fma(_297, -_387, _297));
    float _393 = _369 * _389;
    float _395 = _373 * _389;
    float _397 = _377 * _389;
    float _399 = fma(_319, _319, -(_321 * _321));
    float _401 = _323 * _319;
    int _403 = max(0, min(int(trunc((_371 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _405 = _323 * _323;
    float _407 = _385 * _385;
    float _409 = max(fma(_397, _215, fma(_395, _213, _393 * _211)), fp_c1_1._m0[0].w) * max(fma(_397, _215, fma(_395, _213, _393 * _211)), fp_c1_1._m0[0].w);
    float _411 = max(fma(_279, _397, fma(_277, _395, _275 * _393)), fp_c1_1._m0[0].w);
    uint _414 = uint(int(uint((((int(uint(_403) >> uint(16)) * 20) << 16) + (((_403 & 65535) * 20) + max(0, min(int(trunc((_375 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _416 = fp_c10_1._m0[int(uint(int(_414)) >> uint(2))][int(_414) & 3];
    float _418 = exp2(_411 * fma(_411, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _420 = (_391 * (1.0 / (_387 + fma(max(fma(_215, -fp_c5_1._m0[23].z, fma(_213, -fp_c5_1._m0[23].y, _211 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_387, max(fma(_215, -fp_c5_1._m0[23].z, fma(_213, -fp_c5_1._m0[23].y, _211 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_385 * (1.0 / max(fma(_409, _407, -_409) + 1.0, fp_c1_1._m0[0].w))) * (_385 * (1.0 / max(fma(_409, _407, -_409) + 1.0, fp_c1_1._m0[0].w))));
    float _422 = fma(max(0.0, fma(_399, fp_c5_1._m0[31].x, (fma(_323, fp_c5_1._m0[25].z, fma(_321, fp_c5_1._m0[25].y, _319 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_401, fp_c5_1._m0[28].w, fma(_405, fp_c5_1._m0[28].z, fma(_381, fp_c5_1._m0[28].y, _379 * fp_c5_1._m0[28].x))))) + _325, fma(_261, -_301, _261), _331);
    float _424 = fma(max(0.0, fma(_399, fp_c5_1._m0[31].z, (fma(_323, fp_c5_1._m0[27].z, fma(_321, fp_c5_1._m0[27].y, _319 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_401, fp_c5_1._m0[30].w, fma(_405, fp_c5_1._m0[30].z, fma(_381, fp_c5_1._m0[30].y, _379 * fp_c5_1._m0[30].x))))) + _329, fma(_269, -_299, _269), _333);
    float _426 = fma(max(0.0, fma(_399, fp_c5_1._m0[31].y, (fma(_323, fp_c5_1._m0[26].z, fma(_321, fp_c5_1._m0[26].y, _319 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_401, fp_c5_1._m0[29].w, fma(_405, fp_c5_1._m0[29].z, fma(_381, fp_c5_1._m0[29].y, _379 * fp_c5_1._m0[29].x))))) + _327, fma(_287, -_303, _287), _335);
    int _428 = floatBitsToInt(_416);
    float _430 = _426;
    float _432 = _422;
    float _434 = _424;
    float _436 = _422;
    float _438 = _426;
    float _440 = _424;
    if (floatBitsToInt(_416) != (-1))
    {
        int _442 = 0;
        float _446;
        float _448;
        float _450;
        int _532;
        do
        {
            int _444 = _428 & 255;
            _446 = _432;
            _448 = _430;
            _450 = _434;
            _452 = uint(_444) >= 30u;
            if (_452)
            {
                break;
            }
            int _454 = _444 << 4;
            uint _456 = uint(int(uint(_454 + 7360) >> uint(2)));
            int _458 = int(_456) + 1;
            uint _460 = uint(int(uint(_454 + 7368) >> uint(2)));
            float _462 = (-_375) + fp_c10_1._m0[int(uint(int(_456)) >> uint(2))][int(_456) & 3];
            float _464 = (-_85.y) + fp_c10_1._m0[int(uint(_458) >> uint(2))][_458 & 3];
            float _466 = (-_371) + fp_c10_1._m0[int(uint(int(_460)) >> uint(2))][int(_460) & 3];
            float _468 = fma(_466, _466, fma(_464, _464, _462 * _462));
            float _470 = _462 * inversesqrt(_468);
            float _472 = _464 * inversesqrt(_468);
            float _474 = _466 * inversesqrt(_468);
            float _476 = _275 + _470;
            float _478 = _277 + _472;
            float _480 = _279 + _474;
            float _482 = inversesqrt(fma(_480, _480, fma(_478, _478, _476 * _476)));
            float _484 = _476 * _482;
            float _486 = _478 * _482;
            float _488 = _480 * _482;
            uint _490 = uint(int(uint(_454 + 6880) >> uint(2)));
            int _492 = int(_490) + 1;
            uint _494 = uint(int(uint(_454 + 8320) >> uint(2)));
            float _496 = fma(_474, _215, fma(_472, _213, _470 * _211));
            float _498 = max(fma(_279, _488, fma(_277, _486, _275 * _484)), fp_c1_1._m0[0].w);
            float _500 = max(_496, fp_c1_1._m0[0].w);
            float _502 = max(fma(_488, _215, fma(_486, _213, _484 * _211)), fp_c1_1._m0[0].w) * max(fma(_488, _215, fma(_486, _213, _484 * _211)), fp_c1_1._m0[0].w);
            uint _504 = uint(int(uint(_454 + 6400) >> uint(2)));
            int _506 = int(_504) + 1;
            uint _508 = uint(int(uint(_454 + 6408) >> uint(2)));
            float _510 = exp2(_498 * fma(_498, fp_c1_1._m0[1].z, -6.9831600189208984375));
            bool _512 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_494)) >> uint(2))][int(_494) & 3]) != 0;
            float _514 = (_391 * (1.0 / (_387 + fma(_387, -_500, _500)))) * ((_385 * (1.0 / max(fma(_407, _502, -_502) + 1.0, fp_c1_1._m0[0].w))) * (_385 * (1.0 / max(fma(_407, _502, -_502) + 1.0, fp_c1_1._m0[0].w))));
            float _516 = _514;
            if (!_512)
            {
                _516 = 1.0;
            }
            float _518 = _516;
            if (_512)
            {
                uint _520 = uint(int(uint(_454 + 7840) >> uint(2)));
                int _522 = int(_520) + 1;
                uint _524 = uint(int(uint(_454 + 6888) >> uint(2)));
                float _526 = fp_c10_1._m0[int(uint(int(_524)) >> uint(2))][int(_524) & 3];
                int _528 = int(_524) + 1;
                uint _530 = uint(int(uint(_454 + 7848) >> uint(2)));
                _518 = exp2(fp_c10_1._m0[int(uint(_528) >> uint(2))][_528 & 3] * log2(clamp(((-_526) + fma(_474, -fp_c10_1._m0[int(uint(int(_530)) >> uint(2))][int(_530) & 3], fma(_472, -fp_c10_1._m0[int(uint(_522) >> uint(2))][_522 & 3], _470 * (-fp_c10_1._m0[int(uint(int(_520)) >> uint(2))][int(_520) & 3])))) * (1.0 / ((-_526) + 1.0)), 0.0, 1.0)));
            }
            _532 = _442 + 1;
            float _534 = (exp2(fp_c10_1._m0[int(uint(_492) >> uint(2))][_492 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_490)) >> uint(2))][int(_490) & 3], -sqrt(_468), fp_c1_1._m0[1].x), 0.0, 1.0))) * _518) * clamp(_496 + (-0.0), 0.0, 1.0);
            float _536 = fma(fp_c10_1._m0[int(uint(_506) >> uint(2))][_506 & 3] * _534, fma(_287, fp_c1_1._m0[2].x, ((fma(_510, -_303, _510) + _303) * _514) * 0.079577468335628509521484375), _430);
            float _538 = fma(fp_c10_1._m0[int(uint(int(_504)) >> uint(2))][int(_504) & 3] * _534, fma(_261, fp_c1_1._m0[2].x, ((fma(_510, -_301, _510) + _301) * _514) * 0.079577468335628509521484375), _432);
            float _540 = fma(fp_c10_1._m0[int(uint(int(_508)) >> uint(2))][int(_508) & 3] * _534, fma(_269, fp_c1_1._m0[2].x, ((fma(_510, -_299, _510) + _299) * _514) * 0.079577468335628509521484375), _434);
            _428 = int(uint(_428) >> uint(8));
            _442 = _532;
            _430 = _536;
            _432 = _538;
            _434 = _540;
            _446 = _538;
            _448 = _536;
            _450 = _540;
        } while (!(_532 >= 4));
        _452 = false;
        _436 = _446;
        _438 = _448;
        _440 = _450;
        if ((_428 & 255) == 30)
        {
            float _542 = _85.y;
            float _544 = 1.0 / (fma(_371, fp_c10_1._m0[565].z, fma(_542, fp_c10_1._m0[565].y, _375 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _546 = 1.0 / fp_c10_1._m0[561].y;
            float _548 = _375 + (-fp_c10_1._m0[557].x);
            float _550 = _371 + (-fp_c10_1._m0[557].z);
            float _552 = _548 * fp_c10_1._m0[558].z;
            float _554 = _550 * fp_c10_1._m0[558].x;
            float _556 = (-_375) + fma(_546, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _558 = (-_371) + fma(_546, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _560 = fma(_550, _550, _548 * _548);
            float _562 = _556 * _556;
            float _564 = ((-float(_554 < _552)) + float(_554 > _552)) * fp_c10_1._m0[561].y;
            float _566 = sqrt(fma(_558, _558, _562)) * (-fp_c10_1._m0[558].y);
            float _568 = inversesqrt(fma(_558, _558, fma(_566, _566, _562)));
            float _570 = _556 * _568;
            float _572 = _566 * _568;
            float _574 = _558 * _568;
            float _576 = _275 + _570;
            float _578 = _277 + _572;
            float _580 = fma(_550, fp_c10_1._m0[558].z, _548 * fp_c10_1._m0[558].x);
            float _582 = inversesqrt(fma(_574, _574, _570 * _570));
            float _584 = _279 + _574;
            bool _586 = _580 > 0.0;
            float _588 = inversesqrt(fma(_584, _584, fma(_578, _578, _576 * _576)));
            float _590 = _576 * _588;
            float _592 = _578 * _588;
            float _594 = _574 * _582;
            float _596 = _584 * _588;
            float _598 = fma(_574, _215, fma(_572, _213, _570 * _211));
            float _600 = _594;
            if (_586)
            {
                _600 = sqrt(_560);
            }
            float _602 = _600;
            if (!_586)
            {
                _602 = 1.0;
            }
            float _604 = max(_598, fp_c1_1._m0[0].w);
            float _606 = max(fma(_279, _596, fma(_277, _592, _275 * _590)), fp_c1_1._m0[0].w);
            bool _608 = fma(_550 * inversesqrt(_560), fp_c10_1._m0[558].z, (_548 * inversesqrt(_560)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _610 = max(fma(_596, _215, fma(_592, _213, _590 * _211)), fp_c1_1._m0[0].w) * max(fma(_596, _215, fma(_592, _213, _590 * _211)), fp_c1_1._m0[0].w);
            float _612 = clamp(fma(_580 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_580 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _614 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_548, fma(_564, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_550 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_564 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_548, fma(_564, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_550 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_564 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _616 = 6.9831600189208984375;
            if (!_608)
            {
                _616 = 1.0;
            }
            float _618 = _616;
            if (_608)
            {
                _618 = fma(_614, -_614, fp_c1_1._m0[1].x) * fma(_614, -_614, fp_c1_1._m0[1].x);
            }
            float _620 = exp2(_606 * fma(_606, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _622 = (_391 * (1.0 / (_387 + fma(_387, -_604, _604)))) * ((_385 * (1.0 / max(fma(_407, _610, -_610) + 1.0, fp_c1_1._m0[0].w))) * (_385 * (1.0 / max(fma(_407, _610, -_610) + 1.0, fp_c1_1._m0[0].w))));
            float _624 = clamp(_598 + (-0.0), 0.0, 1.0) * (min(fma(_612, -_612, fp_c1_1._m0[1].x) * fma(_612, -_612, fp_c1_1._m0[1].x), _618) * (exp2(log2(clamp(fma(_602, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_594, -fp_c10_1._m0[558].z, (_570 * _582) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _626 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_371, fp_c10_1._m0[562].z, fma(_542, fp_c10_1._m0[562].y, _375 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _544, 0.5, 0.5), (-fma((fma(_371, fp_c10_1._m0[563].z, fma(_542, fp_c10_1._m0[563].y, _375 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _544, 0.5, 0.5)) + 1.0)).z > fma((fma(_371, fp_c10_1._m0[564].z, fma(_542, fp_c10_1._m0[564].y, _375 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _544, 0.5, 0.5)) || (_580 <= 0.0));
            _436 = fma(fma(_261, fp_c1_1._m0[2].x, ((fma(_620, -_301, _620) + _301) * _622) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _624), _626, _446);
            _438 = fma(fma(_287, fp_c1_1._m0[2].x, ((fma(_620, -_303, _620) + _303) * _622) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _624), _626, _448);
            _440 = fma(fma(_269, fp_c1_1._m0[2].x, ((fma(_620, -_299, _620) + _299) * _622) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _624), _626, _450);
        }
    }
    float _628 = _375 + (-fp_c3_1._m0[11].w);
    float _630 = _85.y;
    float _632 = _371 + (-fp_c3_1._m0[13].w);
    float _634 = clamp(fma(_215, -fp_c5_1._m0[23].z, fma(_213, -fp_c5_1._m0[23].y, _211 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _636 = _630 + (-fp_c3_1._m0[12].w);
    float _638 = fma(_632, _632, fma(_636, _636, _628 * _628));
    float _640 = clamp(fma(fma(_371, fp_c5_1._m0[14].z, fma(_630, fp_c5_1._m0[14].y, _375 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _642 = clamp(fma(_295 * _289, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _644 = fma(_289, _436, _295 * (((_634 * fp_c5_1._m0[5].x) * fma((fma(_418, -_301, _418) + _301) * _420, fp_c1_1._m0[1].w, _261 * 0.3183098733425140380859375)) * _337)) + _239;
    float _646 = fma(_289, _438, _295 * (((_634 * fp_c5_1._m0[5].y) * fma((fma(_418, -_303, _418) + _303) * _420, fp_c1_1._m0[1].w, _287 * 0.3183098733425140380859375)) * _337)) + _241;
    float _648 = exp2(log2(clamp(sqrt(_638) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_632 * inversesqrt(_638), fp_c5_1._m0[23].z, fma(_636 * inversesqrt(_638), fp_c5_1._m0[23].y, (_628 * inversesqrt(_638)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _650 = fma(_289, _440, _295 * (((_634 * fp_c5_1._m0[5].z) * fma((fma(_418, -_299, _418) + _299) * _420, fp_c1_1._m0[1].w, _269 * 0.3183098733425140380859375)) * _337)) + _243;
    float _652 = fma((-_644) + fp_c5_1._m0[13].x, _640, _644);
    float _654 = clamp((-exp2((clamp(fma(sqrt(_638), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    float _656 = fma((-_646) + fp_c5_1._m0[13].y, _640, _646);
    float _658 = fma((-_650) + fp_c5_1._m0[13].z, _640, _650);
    _79.x = fma((-_652) + fma(fma((_648 * fp_c7_1._m0[55].x) * _642, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _654, _652);
    _79.y = fma((-_656) + fma(fma((_648 * fp_c7_1._m0[55].y) * _642, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _654, _656);
    _79.z = fma((-_658) + fma(fma((_648 * fp_c7_1._m0[55].z) * _642, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _654, _658);
    _79.w = clamp(_198 + (-0.0), 0.0, 1.0);
}


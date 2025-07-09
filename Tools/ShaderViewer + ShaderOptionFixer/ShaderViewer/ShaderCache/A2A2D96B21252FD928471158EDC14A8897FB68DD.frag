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

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
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
    bool _442 = false;
    float _92 = _70.x;
    float _94 = _70.y;
    float _96 = texture(fp_tex_tcb_8, vec2(_92, _94)).x;
    bool _100 = _96 <= 0.0;
    int _103 = floatBitsToInt(_92);
    int _105 = floatBitsToInt(_94);
    if (_100)
    {
        discard;
    }
    vec2 _109 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _111 = _109.x;
    float _113 = _109.y;
    vec3 _117 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _119 = _72.x;
    float _121 = _72.y;
    float _123 = _72.z;
    float _125 = _74.z;
    float _127 = _74.x;
    float _129 = _74.y;
    float _131 = _74.w;
    float _133 = inversesqrt(fma(_123, _123, fma(_121, _121, _119 * _119)));
    float _135 = _119 * _133;
    float _137 = _121 * _133;
    float _139 = _123 * _133;
    int _141 = floatBitsToInt(fp_c6_1._m0[25].w) + (-1);
    float _143 = (-texture(fp_tex_tcb_26, vec2(_92 + (-fp_c6_1._m0[26].w), _94 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_26, vec2(_92 + fp_c6_1._m0[26].w, _94 + fp_c6_1._m0[26].w)).x;
    float _145 = min((texture(fp_tex_tcb_26, vec2(_92, _94)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _147 = _145 * float((-abs(_141)) + 1);
    float _149 = _145 * float(max(0, (-_141)));
    float _151 = _145 * float(max(0, _141));
    float _153 = sqrt(clamp((-fma(_111, _111, _113 * _113)) + 1.0, 0.0, 1.0));
    float _155 = fma(clamp(_137 + (-0.0), 0.0, 1.0), (-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, fp_c7_1._m0[20].y);
    float _157 = max(_151, max(_147, _149));
    float _159 = _157 + (-fp_c7_1._m0[21].w);
    float _161 = fma(_135, _153, fma(_111, _127, _113 * (fma(_137, _125, -(_139 * _129)) * _131)));
    float _163 = fma(_127 * _143, fp_c6_1._m0[27].x, _135);
    float _165 = fma(_137, _153, fma(_111, _129, _113 * (fma(_139, _127, -(_135 * _125)) * _131)));
    float _167 = clamp(_159 + (-0.0), 0.0, 1.0);
    float _169 = 1.0 / _76.w;
    float _171 = fma(_129 * _143, fp_c6_1._m0[27].x, _137);
    float _173 = fma(_139, _153, fma(_111, _125, _113 * (fma(_135, _129, -(_137 * _127)) * _131)));
    float _175 = fma(_125 * _143, fp_c6_1._m0[27].x, _139);
    float _177 = clamp(((_147 + (-_157)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _179 = inversesqrt(fma(_173, _173, fma(_165, _165, _161 * _161)));
    float _181 = inversesqrt(fma(_175, _175, fma(_171, _171, _163 * _163)));
    bool _183 = min(_167 * 1000.0, 1.0) > 0.5;
    float _185 = _165 * _179;
    float _187 = clamp(((_151 + (-_157)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _189 = _163 * _181;
    float _191 = _175 * _181;
    float _193 = clamp(((_149 + (-_157)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _195 = _161 * _179;
    float _197 = _173 * _179;
    float _199 = fma(_187, fp_c8_1._m0[18].x, fma(_193, fp_c8_1._m0[4].x, _177 * fp_c8_1._m0[11].x));
    float _201 = fma(_187, fp_c8_1._m0[18].y, fma(_193, fp_c8_1._m0[4].y, _177 * fp_c8_1._m0[11].y));
    float _203 = fma(_187, fp_c8_1._m0[18].z, fma(_193, fp_c8_1._m0[4].z, _177 * fp_c8_1._m0[11].z));
    float _205 = _171 * _181;
    int _207 = floatBitsToInt(_167);
    float _209 = _117.x;
    float _211 = _195;
    float _213 = _117.y;
    float _215 = _185;
    float _217 = _197;
    float _219 = _117.z;
    int _221 = floatBitsToInt(_195);
    float _235;
    float _237;
    float _239;
    float _241;
    float _243;
    if (_183)
    {
        float _223 = clamp(_167 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _225 = (-_185) + _205;
        float _227 = (-_197) + _191;
        float _229 = fma(fma(_203, -fp_c7_1._m0[45].y, fma(_187, fp_c8_1._m0[17].z, fma(_193, fp_c8_1._m0[3].z, _177 * fp_c8_1._m0[10].z))), _223, _203 * fp_c7_1._m0[45].y);
        float _231 = fma(fma(_199, -fp_c7_1._m0[45].y, fma(_187, fp_c8_1._m0[17].x, fma(_193, fp_c8_1._m0[3].x, _177 * fp_c8_1._m0[10].x))), _223, _199 * fp_c7_1._m0[45].y);
        float _233 = fma(fma(_201, -fp_c7_1._m0[45].y, fma(_187, fp_c8_1._m0[17].y, fma(_193, fp_c8_1._m0[3].y, _177 * fp_c8_1._m0[10].y))), _223, _201 * fp_c7_1._m0[45].y);
        _207 = floatBitsToInt(_223);
        _103 = floatBitsToInt(_225);
        _105 = floatBitsToInt(_227);
        _235 = fp_c7_1._m0[18].w;
        _209 = _231;
        _237 = 0.0;
        _211 = fma(_155, (-_195) + _189, _195);
        _213 = _233;
        _215 = fma(_155, _225, _185);
        _217 = fma(_155, _227, _197);
        _219 = _229;
        _239 = _231 * fp_c7_1._m0[18].z;
        _241 = _229 * fp_c7_1._m0[18].z;
        _243 = _233 * fp_c7_1._m0[18].z;
    }
    else
    {
        _235 = max(texture(fp_tex_tcb_10, vec2(_92, _94)).x, fp_c1_1._m0[0].y);
        _237 = texture(fp_tex_tcb_12, vec2(_92, _94)).x;
        _239 = 0.0;
        _241 = 0.0;
        _243 = 0.0;
    }
    int _245 = _207;
    int _247 = _103;
    int _249 = _105;
    if (_100)
    {
        _245 = 0;
    }
    if (_100)
    {
        _221 = 0;
    }
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
        _79.x = intBitsToFloat(_245);
        _79.y = intBitsToFloat(_221);
        _79.z = intBitsToFloat(_247);
        _79.w = intBitsToFloat(_249);
        return;
    }
    float _251 = fma(_237, -_209, _209);
    float _253 = _83.x;
    float _255 = _83.y;
    float _257 = _83.z;
    float _259 = 1.0 / (_81.z * gl_FragCoord.w);
    vec2 _261 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _169, 0.5, 0.5), fma(_76.y * _169, -0.5, 0.5))).xy;
    float _263 = fma(_237, -_213, _213);
    float _265 = inversesqrt(fma(_257, _257, fma(_255, _255, _253 * _253)));
    float _267 = _253 * (-_265);
    float _269 = _255 * (-_265);
    float _271 = _257 * (-_265);
    float _273 = fma(_271, _217, fma(_269, _215, _267 * _211));
    float _275 = max(_273, fp_c1_1._m0[0].w);
    vec2 _277 = texture(fp_tex_tcb_38, vec2(_275, (-_235) + (-0.0))).xy;
    float _279 = fma(_209 + (-0.039999999105930328369140625), _237, fp_c1_1._m0[0].z);
    float _281 = fma(_237, -_219, _219);
    float _283 = fma(_219 + (-0.039999999105930328369140625), _237, fp_c1_1._m0[0].z);
    float _285 = fma(_213 + (-0.039999999105930328369140625), _237, fp_c1_1._m0[0].z);
    float _287 = clamp((-fma(max((-_261.y) + 1.0, (-_261.x) + 1.0), clamp(_85.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_81.x * gl_FragCoord.w) * _259, (_81.y * gl_FragCoord.w) * _259)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _289 = _283;
    float _291 = _275;
    float _293 = _279;
    float _295 = _285;
    float _311;
    float _313;
    float _315;
    float _317;
    float _319;
    float _321;
    float _323;
    float _325;
    float _327;
    float _329;
    if (_183)
    {
        float _297 = fma(_271, -_217, fma(_269, -_215, _267 * (-_211)));
        float _299 = fma(_297 * _211, -2.0, -_267);
        float _301 = fma(_297 * _215, -2.0, -_269);
        float _303 = fma(_297 * _217, -2.0, -_271);
        float _305 = 1.0 / max(abs(_303), max(abs(_299), abs(_301)));
        vec3 _307 = texture(fp_tex_tcb_36, vec4(_299 * _305, _301 * _305, _303 * _305, float(12)), 0.0).xyz;
        float _309 = fma(_277.x, fp_c7_1._m0[19].x, _277.y);
        _311 = fma(_215 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _313 = _211 * fp_c7_1._m0[19].z;
        _315 = _217 * fp_c7_1._m0[19].z;
        _317 = 0.0;
        _289 = fp_c7_1._m0[19].x;
        _319 = _307.z * _309;
        _321 = 0.0;
        _293 = fp_c7_1._m0[19].x;
        _295 = fp_c7_1._m0[19].x;
        _323 = 0.0;
        _325 = _307.x * _309;
        _327 = _307.y * _309;
        _329 = 1.0;
    }
    else
    {
        float _331 = max(_273, fp_c1_1._m0[0].w);
        float _333 = fma(_271, -_217, fma(_269, -_215, _267 * (-_211)));
        float _335 = fma(_333 * _211, -2.0, -_267);
        float _337 = fma(_333 * _215, -2.0, -_269);
        float _339 = fma(_333 * _217, -2.0, -_271);
        float _341 = 1.0 / max(abs(_339), max(abs(_335), abs(_337)));
        vec2 _343 = texture(fp_tex_tcb_38, vec2(_331, (-_235) + (-0.0))).xy;
        float _345 = _343.x;
        float _347 = _343.y;
        vec3 _349 = texture(fp_tex_tcb_36, vec4(_335 * _341, _337 * _341, _339 * _341, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_235 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _351 = _85.y;
        float _353 = _351 + (-fp_c9_1._m0[32].w);
        float _355 = _353;
        _291 = _331;
        if (_351 < fp_c9_1._m0[32].w)
        {
            _355 = _353 * (-5.0);
        }
        float _357 = fma(fma(_191, -fp_c5_1._m0[23].z, fma(_205, -fp_c5_1._m0[23].y, _189 * (-fp_c5_1._m0[23].x))), -_215, _215);
        float _359 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w) * max(0.0, ((-_215) + 1.2000000476837158203125) * (clamp(fma(_355, -(1.0 / fma(clamp((-_215) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_355, -(1.0 / fma(clamp((-_215) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0)));
        _311 = _215;
        _313 = _211;
        _315 = _217;
        _317 = _359 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _319 = fma(_283, _345, _347) * _349.z;
        _321 = _359 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _323 = _359 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _325 = fma(_279, _345, _347) * _349.x;
        _327 = fma(_285, _345, _347) * _349.y;
        _329 = clamp(fma(_357, clamp(_159 * (-7.0), 0.0, 1.0), -_357) + fp_c1_1._m0[1].y, 0.0, 1.0);
    }
    float _361 = _311 * _313;
    float _363 = _85.z;
    float _365 = _85.x;
    float _367 = _315 * _311;
    float _369 = _267 + (-fp_c5_1._m0[23].x);
    float _371 = fma(_313, _313, -(_311 * _311));
    float _373 = _315 * _313;
    float _375 = _315 * _315;
    float _377 = _269 + (-fp_c5_1._m0[23].y);
    float _379 = _271 + (-fp_c5_1._m0[23].z);
    float _381 = fma(_235, 0.5, 0.5);
    float _383 = _235 * _235;
    float _385 = inversesqrt(fma(_379, _379, fma(_377, _377, _369 * _369)));
    float _387 = _377 * _385;
    float _389 = _369 * _385;
    float _391 = _379 * _385;
    int _393 = max(0, min(int(trunc((_363 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _395 = max(fma(_391, _217, fma(_387, _215, _389 * _211)), fp_c1_1._m0[0].w) * max(fma(_391, _217, fma(_387, _215, _389 * _211)), fp_c1_1._m0[0].w);
    uint _398 = uint(int(uint((((int(uint(_393) >> uint(16)) * 20) << 16) + (((_393 & 65535) * 20) + max(0, min(int(trunc((_365 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _400 = fp_c10_1._m0[int(uint(int(_398)) >> uint(2))][int(_398) & 3];
    float _402 = max(fma(_271, _391, fma(_269, _387, _267 * _389)), fp_c1_1._m0[0].w);
    float _404 = (_381 * 0.5) * _381;
    float _406 = 1.0 / (_404 + fma(_291, -_404, _291));
    float _408 = exp2(_402 * fma(_402, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _410 = fma(max(0.0, fma(_371, fp_c5_1._m0[31].z, (fma(_315, fp_c5_1._m0[27].z, fma(_311, fp_c5_1._m0[27].y, _313 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_373, fp_c5_1._m0[30].w, fma(_375, fp_c5_1._m0[30].z, fma(_367, fp_c5_1._m0[30].y, _361 * fp_c5_1._m0[30].x))))) + _317, fma(_281, -_289, _281), _319);
    float _412 = (_406 * (1.0 / (_404 + fma(max(fma(_217, -fp_c5_1._m0[23].z, fma(_215, -fp_c5_1._m0[23].y, _211 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_404, max(fma(_217, -fp_c5_1._m0[23].z, fma(_215, -fp_c5_1._m0[23].y, _211 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_383 * (1.0 / max(fma(_395, _383 * _383, -_395) + 1.0, fp_c1_1._m0[0].w))) * (_383 * (1.0 / max(fma(_395, _383 * _383, -_395) + 1.0, fp_c1_1._m0[0].w))));
    float _414 = fma(max(0.0, fma(_371, fp_c5_1._m0[31].x, (fma(_315, fp_c5_1._m0[25].z, fma(_311, fp_c5_1._m0[25].y, _313 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_373, fp_c5_1._m0[28].w, fma(_375, fp_c5_1._m0[28].z, fma(_367, fp_c5_1._m0[28].y, _361 * fp_c5_1._m0[28].x))))) + _321, fma(_251, -_293, _251), _325);
    float _416 = fma(max(0.0, fma(_371, fp_c5_1._m0[31].y, (fma(_315, fp_c5_1._m0[26].z, fma(_311, fp_c5_1._m0[26].y, _313 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_373, fp_c5_1._m0[29].w, fma(_375, fp_c5_1._m0[29].z, fma(_367, fp_c5_1._m0[29].y, _361 * fp_c5_1._m0[29].x))))) + _323, fma(_263, -_295, _263), _327);
    int _418 = floatBitsToInt(_400);
    float _420 = _416;
    float _422 = _410;
    float _424 = _414;
    float _426 = _414;
    float _428 = _410;
    float _430 = _416;
    if (floatBitsToInt(_400) != (-1))
    {
        int _432 = 0;
        float _436;
        float _438;
        float _440;
        int _524;
        do
        {
            int _434 = _418 & 255;
            _436 = _424;
            _438 = _420;
            _440 = _422;
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
            float _454 = (-_85.y) + fp_c10_1._m0[int(uint(_448) >> uint(2))][_448 & 3];
            float _456 = (-_363) + fp_c10_1._m0[int(uint(int(_450)) >> uint(2))][int(_450) & 3];
            float _458 = fma(_456, _456, fma(_454, _454, _452 * _452));
            float _460 = _452 * inversesqrt(_458);
            float _462 = _454 * inversesqrt(_458);
            float _464 = _456 * inversesqrt(_458);
            float _466 = _267 + _460;
            float _468 = _269 + _462;
            float _470 = _271 + _464;
            float _472 = inversesqrt(fma(_470, _470, fma(_468, _468, _466 * _466)));
            float _474 = _466 * _472;
            float _476 = _468 * _472;
            float _478 = _470 * _472;
            float _480 = fma(_464, _217, fma(_462, _215, _460 * _211));
            float _482 = max(fma(_271, _478, fma(_269, _476, _267 * _474)), fp_c1_1._m0[0].w);
            float _484 = max(_480, fp_c1_1._m0[0].w);
            float _486 = max(fma(_478, _217, fma(_476, _215, _474 * _211)), fp_c1_1._m0[0].w) * max(fma(_478, _217, fma(_476, _215, _474 * _211)), fp_c1_1._m0[0].w);
            uint _488 = uint(int(uint(_444 + 6880) >> uint(2)));
            int _490 = int(_488) + 1;
            uint _492 = uint(int(uint(_444 + 8320) >> uint(2)));
            float _494 = 1.0 / max(fma(_383 * _383, _486, -_486) + 1.0, fp_c1_1._m0[0].w);
            float _496 = exp2(_482 * fma(_482, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _498 = (_406 * (1.0 / (_404 + fma(_404, -_484, _484)))) * ((_383 * _494) * (_383 * _494));
            bool _500 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_492)) >> uint(2))][int(_492) & 3]) != 0;
            uint _502 = uint(int(uint(_444 + 6408) >> uint(2)));
            uint _504 = uint(int(uint(_444 + 6400) >> uint(2)));
            int _506 = int(_504) + 1;
            float _508 = _494;
            if (!_500)
            {
                _508 = 1.0;
            }
            float _510 = _508;
            if (_500)
            {
                uint _512 = uint(int(uint(_444 + 7840) >> uint(2)));
                int _514 = int(_512) + 1;
                uint _516 = uint(int(uint(_444 + 7848) >> uint(2)));
                uint _518 = uint(int(uint(_444 + 6888) >> uint(2)));
                float _520 = fp_c10_1._m0[int(uint(int(_518)) >> uint(2))][int(_518) & 3];
                int _522 = int(_518) + 1;
                _510 = exp2(fp_c10_1._m0[int(uint(_522) >> uint(2))][_522 & 3] * log2(clamp(((-_520) + fma(_464, -fp_c10_1._m0[int(uint(int(_516)) >> uint(2))][int(_516) & 3], fma(_462, -fp_c10_1._m0[int(uint(_514) >> uint(2))][_514 & 3], _460 * (-fp_c10_1._m0[int(uint(int(_512)) >> uint(2))][int(_512) & 3])))) * (1.0 / ((-_520) + 1.0)), 0.0, 1.0)));
            }
            _524 = _432 + 1;
            float _526 = (exp2(fp_c10_1._m0[int(uint(_490) >> uint(2))][_490 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_488)) >> uint(2))][int(_488) & 3], -sqrt(_458), fp_c1_1._m0[1].x), 0.0, 1.0))) * _510) * clamp(_480 + (-0.0), 0.0, 1.0);
            float _528 = fma(fp_c10_1._m0[int(uint(_506) >> uint(2))][_506 & 3] * _526, fma(_263, fp_c1_1._m0[2].x, ((fma(_496, -_295, _496) + _295) * _498) * 0.079577468335628509521484375), _420);
            float _530 = fma(fp_c10_1._m0[int(uint(int(_502)) >> uint(2))][int(_502) & 3] * _526, fma(_281, fp_c1_1._m0[2].x, ((fma(_496, -_289, _496) + _289) * _498) * 0.079577468335628509521484375), _422);
            float _532 = fma(fp_c10_1._m0[int(uint(int(_504)) >> uint(2))][int(_504) & 3] * _526, fma(_251, fp_c1_1._m0[2].x, ((fma(_496, -_293, _496) + _293) * _498) * 0.079577468335628509521484375), _424);
            _418 = int(uint(_418) >> uint(8));
            _432 = _524;
            _420 = _528;
            _422 = _530;
            _424 = _532;
            _436 = _532;
            _438 = _528;
            _440 = _530;
        } while (!(_524 >= 4));
        _442 = false;
        _426 = _436;
        _428 = _440;
        _430 = _438;
        if ((_418 & 255) == 30)
        {
            float _534 = 1.0 / fp_c10_1._m0[561].y;
            float _536 = _363 + (-fp_c10_1._m0[557].z);
            float _538 = _536 * fp_c10_1._m0[558].x;
            float _540 = _365 + (-fp_c10_1._m0[557].x);
            float _542 = (-_365) + fma(_534, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _544 = (-_363) + fma(_534, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _546 = _540 * fp_c10_1._m0[558].z;
            float _548 = _542 * _542;
            float _550 = ((-float(_538 < _546)) + float(_538 > _546)) * fp_c10_1._m0[561].y;
            float _552 = sqrt(fma(_544, _544, _548)) * (-fp_c10_1._m0[558].y);
            float _554 = fma(_536, _536, _540 * _540);
            float _556 = inversesqrt(fma(_544, _544, fma(_552, _552, _548)));
            float _558 = _85.y;
            float _560 = _542 * _556;
            float _562 = _544 * _556;
            float _564 = fma(_536, fp_c10_1._m0[558].z, _540 * fp_c10_1._m0[558].x);
            float _566 = _552 * _556;
            float _568 = _267 + _560;
            float _570 = inversesqrt(fma(_562, _562, _560 * _560));
            bool _572 = fma(_536 * inversesqrt(_554), fp_c10_1._m0[558].z, (_540 * inversesqrt(_554)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _574 = _269 + _566;
            float _576 = fma(_562, _217, fma(_566, _215, _560 * _211));
            float _578 = _271 + _562;
            float _580 = inversesqrt(fma(_578, _578, fma(_574, _574, _568 * _568)));
            float _582 = 1.0 / (fma(_363, fp_c10_1._m0[565].z, fma(_558, fp_c10_1._m0[565].y, _365 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _584 = _578 * _580;
            float _586 = _568 * _580;
            float _588 = _574 * _580;
            bool _590 = _564 > 0.0;
            float _592 = (_560 * _570) * (-fp_c10_1._m0[558].x);
            float _594 = _592;
            float _596 = _584;
            if (_590)
            {
                _594 = sqrt(_554);
            }
            float _598 = _594;
            if (!_590)
            {
                _598 = 1.0;
            }
            float _600 = max(_576, fp_c1_1._m0[0].w);
            float _602 = max(fma(_584, _217, fma(_588, _215, _586 * _211)), fp_c1_1._m0[0].w) * max(fma(_584, _217, fma(_588, _215, _586 * _211)), fp_c1_1._m0[0].w);
            float _604 = clamp(fma(_564 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_564 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _606 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_540, fma(_550, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_536 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_550 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_540, fma(_550, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_536 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_550 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _608 = max(fma(_271, _584, fma(_269, _588, _267 * _586)), fp_c1_1._m0[0].w);
            if (!_572)
            {
                _596 = 1.0;
            }
            float _610 = _596;
            if (_572)
            {
                _610 = fma(_606, -_606, fp_c1_1._m0[1].x) * fma(_606, -_606, fp_c1_1._m0[1].x);
            }
            float _612 = exp2(_608 * fma(_608, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _614 = clamp(_576 + (-0.0), 0.0, 1.0) * (min(fma(_604, -_604, fp_c1_1._m0[1].x) * fma(_604, -_604, fp_c1_1._m0[1].x), _610) * (exp2(log2(clamp(fma(_598, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_562 * _570, -fp_c10_1._m0[558].z, _592) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _616 = (_406 * (1.0 / (_404 + fma(_404, -_600, _600)))) * ((_383 * (1.0 / max(fma(_383 * _383, _602, -_602) + 1.0, fp_c1_1._m0[0].w))) * (_383 * (1.0 / max(fma(_383 * _383, _602, -_602) + 1.0, fp_c1_1._m0[0].w))));
            float _618 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_363, fp_c10_1._m0[562].z, fma(_558, fp_c10_1._m0[562].y, _365 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _582, 0.5, 0.5), (-fma((fma(_363, fp_c10_1._m0[563].z, fma(_558, fp_c10_1._m0[563].y, _365 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _582, 0.5, 0.5)) + 1.0)).z > fma((fma(_363, fp_c10_1._m0[564].z, fma(_558, fp_c10_1._m0[564].y, _365 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _582, 0.5, 0.5)) || (_564 <= 0.0));
            _426 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _614) * fma(_251, fp_c1_1._m0[2].x, ((fma(_612, -_293, _612) + _293) * _616) * 0.079577468335628509521484375), _618, _436);
            _428 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _614) * fma(_281, fp_c1_1._m0[2].x, ((fma(_612, -_289, _612) + _289) * _616) * 0.079577468335628509521484375), _618, _440);
            _430 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _614) * fma(_263, fp_c1_1._m0[2].x, ((fma(_612, -_295, _612) + _295) * _616) * 0.079577468335628509521484375), _618, _438);
        }
    }
    float _620 = _365 + (-fp_c3_1._m0[11].w);
    float _622 = _85.y;
    float _624 = _363 + (-fp_c3_1._m0[13].w);
    float _626 = clamp(fma(_217, -fp_c5_1._m0[23].z, fma(_215, -fp_c5_1._m0[23].y, _211 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _628 = _622 + (-fp_c3_1._m0[12].w);
    float _630 = fma(_624, _624, fma(_628, _628, _620 * _620));
    float _632 = fma(_287, ((_626 * fp_c5_1._m0[5].x) * fma((fma(_408, -_293, _408) + _293) * _412, fp_c1_1._m0[1].w, _251 * 0.3183098733425140380859375)) * _329, _426) + _239;
    float _634 = fma(_287, ((_626 * fp_c5_1._m0[5].z) * fma((fma(_408, -_289, _408) + _289) * _412, fp_c1_1._m0[1].w, _281 * 0.3183098733425140380859375)) * _329, _428) + _241;
    float _636 = clamp(fma(_287, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _638 = clamp(fma(fma(_363, fp_c5_1._m0[14].z, fma(_622, fp_c5_1._m0[14].y, _365 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _640 = exp2(log2(clamp(sqrt(_630) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_624 * inversesqrt(_630), fp_c5_1._m0[23].z, fma(_628 * inversesqrt(_630), fp_c5_1._m0[23].y, (_620 * inversesqrt(_630)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _642 = fma(_287, ((_626 * fp_c5_1._m0[5].y) * fma((fma(_408, -_295, _408) + _295) * _412, fp_c1_1._m0[1].w, _263 * 0.3183098733425140380859375)) * _329, _430) + _243;
    float _644 = fma((-_632) + fp_c5_1._m0[13].x, _638, _632);
    float _646 = fma((-_634) + fp_c5_1._m0[13].z, _638, _634);
    float _648 = fma((-_642) + fp_c5_1._m0[13].y, _638, _642);
    float _650 = clamp((-exp2((clamp(fma(sqrt(_630), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_644) + fma(fma((_640 * fp_c7_1._m0[55].x) * _636, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _650, _644);
    _79.y = fma((-_648) + fma(fma((_640 * fp_c7_1._m0[55].y) * _636, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _650, _648);
    _79.z = fma((-_646) + fma(fma((_640 * fp_c7_1._m0[55].z) * _636, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _650, _646);
    _79.w = clamp(_96 + (-0.0), 0.0, 1.0);
}


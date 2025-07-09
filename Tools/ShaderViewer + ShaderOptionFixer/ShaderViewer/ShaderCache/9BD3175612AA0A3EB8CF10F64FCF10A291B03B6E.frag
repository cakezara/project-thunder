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
layout(binding = 3) uniform sampler2D fp_tex_tcb_26;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 5) in vec4 _72;
layout(location = 0) out vec4 _75;
layout(location = 6) in vec4 _77;
layout(location = 4) in vec4 _79;
layout(location = 3) in vec4 _81;
uint _6[12];

void main()
{
    bool _444 = false;
    float _88 = _66.x;
    float _90 = _66.y;
    float _92 = texture(fp_tex_tcb_8, vec2(_88, _90)).x;
    bool _96 = _92 <= 0.0;
    if (_96)
    {
        discard;
    }
    vec2 _100 = texture(fp_tex_tcb_E, vec2(_88, _90)).xy;
    float _102 = _100.x;
    float _104 = _100.y;
    vec3 _108 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _110 = _68.x;
    float _112 = _68.y;
    float _114 = _68.z;
    float _116 = _70.z;
    float _118 = _70.x;
    float _120 = _70.w;
    float _122 = _70.y;
    float _124 = inversesqrt(fma(_114, _114, fma(_112, _112, _110 * _110)));
    float _126 = _114 * _124;
    float _128 = _110 * _124;
    float _130 = _112 * _124;
    int _133 = floatBitsToInt(fp_c6_1._m0[25].w) + (-1);
    float _135 = 1.0 / _72.w;
    float _137 = texture(fp_tex_tcb_26, vec2(_88 + fp_c6_1._m0[26].w, _90 + fp_c6_1._m0[26].w)).x + (-texture(fp_tex_tcb_26, vec2(_88 + (-fp_c6_1._m0[26].w), _90 + (-fp_c6_1._m0[26].w))).x);
    float _139 = min((texture(fp_tex_tcb_26, vec2(_88, _90)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _141 = _139 * float((-abs(_133)) + 1);
    float _143 = _139 * float(max(0, (-_133)));
    float _145 = _139 * float(max(0, _133));
    float _147 = max(_145, max(_141, _143));
    float _149 = sqrt(clamp((-fma(_102, _102, _104 * _104)) + 1.0, 0.0, 1.0));
    float _151 = _147 + (-fp_c7_1._m0[21].w);
    float _153 = clamp(_151 + (-0.0), 0.0, 1.0);
    float _155 = fma((-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, clamp(_130 + (-0.0), 0.0, 1.0), fp_c7_1._m0[20].y);
    float _157 = fma(_118 * _137, fp_c6_1._m0[27].x, _128);
    float _159 = fma(_122 * _137, fp_c6_1._m0[27].x, _130);
    float _161 = fma(_128, _149, fma(_102, _118, _104 * (fma(_130, _116, -(_126 * _122)) * _120)));
    float _163 = fma(_130, _149, fma(_102, _122, _104 * (fma(_126, _118, -(_128 * _116)) * _120)));
    float _165 = clamp(((_141 + (-_147)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    bool _167 = min(_153 * 1000.0, 1.0) > 0.5;
    float _169 = clamp(((_143 + (-_147)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _171 = fma(_116 * _137, fp_c6_1._m0[27].x, _126);
    float _173 = fma(_126, _149, fma(_102, _116, _104 * (fma(_128, _122, -(_130 * _118)) * _120)));
    float _175 = clamp(((_145 + (-_147)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _177 = inversesqrt(fma(_171, _171, fma(_159, _159, _157 * _157)));
    float _179 = inversesqrt(fma(_173, _173, fma(_163, _163, _161 * _161)));
    float _181 = fma(_175, fp_c8_1._m0[17].y, fma(_169, fp_c8_1._m0[3].y, _165 * fp_c8_1._m0[10].y));
    float _183 = fma(_175, fp_c8_1._m0[17].x, fma(_169, fp_c8_1._m0[3].x, _165 * fp_c8_1._m0[10].x));
    float _185 = fma(_175, fp_c8_1._m0[18].x, fma(_169, fp_c8_1._m0[4].x, _165 * fp_c8_1._m0[11].x));
    float _187 = fma(_175, fp_c8_1._m0[18].y, fma(_169, fp_c8_1._m0[4].y, _165 * fp_c8_1._m0[11].y));
    float _189 = fma(_175, fp_c8_1._m0[18].z, fma(_169, fp_c8_1._m0[4].z, _165 * fp_c8_1._m0[11].z));
    float _191 = _161 * _179;
    float _193 = _163 * _179;
    float _195 = _173 * _179;
    float _197 = _157 * _177;
    float _199 = _159 * _177;
    float _201 = _171 * _177;
    int _203 = floatBitsToInt(_181);
    int _205 = floatBitsToInt(_183);
    int _207 = floatBitsToInt(_173);
    float _209 = _108.x;
    float _211 = _108.z;
    float _213 = _191;
    float _215 = _193;
    float _217 = _195;
    float _219 = _108.y;
    int _221 = floatBitsToInt(_195);
    float _237;
    float _239;
    float _241;
    float _243;
    float _245;
    if (_167)
    {
        float _223 = fma(_185, -fp_c7_1._m0[45].y, _183);
        float _225 = clamp(_153 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _227 = fma(_187, -fp_c7_1._m0[45].y, _181);
        float _229 = (-_191) + _197;
        float _231 = fma(_225, fma(_189, -fp_c7_1._m0[45].y, fma(_175, fp_c8_1._m0[17].z, fma(_169, fp_c8_1._m0[3].z, _165 * fp_c8_1._m0[10].z))), _189 * fp_c7_1._m0[45].y);
        float _233 = fma(_225, _223, _185 * fp_c7_1._m0[45].y);
        float _235 = fma(_225, _227, _187 * fp_c7_1._m0[45].y);
        _203 = floatBitsToInt(_227);
        _205 = floatBitsToInt(_229);
        _207 = floatBitsToInt(_223);
        _237 = fp_c7_1._m0[18].w;
        _209 = _233;
        _239 = 0.0;
        _211 = _231;
        _213 = fma(_155, _229, _191);
        _215 = fma(_155, (-_193) + _199, _193);
        _217 = fma(_155, (-_195) + _201, _195);
        _219 = _235;
        _241 = _231 * fp_c7_1._m0[18].z;
        _243 = _233 * fp_c7_1._m0[18].z;
        _245 = _235 * fp_c7_1._m0[18].z;
    }
    else
    {
        _237 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].y);
        _239 = fp_c6_1._m0[9].x;
        _241 = 0.0;
        _243 = 0.0;
        _245 = 0.0;
    }
    int _247 = _203;
    int _249 = _205;
    int _251 = _207;
    if (_96)
    {
        _247 = 0;
    }
    if (_96)
    {
        _221 = 0;
    }
    if (_96)
    {
        _249 = 0;
    }
    if (_96)
    {
        _251 = 0;
    }
    if (_96)
    {
        _75.x = intBitsToFloat(_247);
        _75.y = intBitsToFloat(_221);
        _75.z = intBitsToFloat(_249);
        _75.w = intBitsToFloat(_251);
        return;
    }
    float _253 = _79.x;
    float _255 = fma(_209, -_239, _209);
    float _257 = _79.y;
    float _259 = fma(_211, -_239, _211);
    float _261 = _79.z;
    float _263 = 1.0 / (_77.z * gl_FragCoord.w);
    vec2 _265 = texture(fp_tex_tcb_2A, vec2(fma(_72.x * _135, 0.5, 0.5), fma(_72.y * _135, -0.5, 0.5))).xy;
    float _267 = fma(_209 + (-0.039999999105930328369140625), _239, fp_c1_1._m0[0].z);
    float _269 = inversesqrt(fma(_261, _261, fma(_257, _257, _253 * _253)));
    float _271 = _253 * (-_269);
    float _273 = _257 * (-_269);
    float _275 = _261 * (-_269);
    float _277 = fma(_275, _217, fma(_273, _215, _271 * _213));
    float _279 = max(_277, fp_c1_1._m0[0].w);
    vec2 _281 = texture(fp_tex_tcb_38, vec2(_279, (-_237) + (-0.0))).xy;
    float _283 = fma(_211 + (-0.039999999105930328369140625), _239, fp_c1_1._m0[0].z);
    float _285 = fma(_219, -_239, _219);
    float _287 = fma(_219 + (-0.039999999105930328369140625), _239, fp_c1_1._m0[0].z);
    float _289 = clamp((-fma(max((-_265.y) + 1.0, (-_265.x) + 1.0), clamp(_81.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_77.x * gl_FragCoord.w) * _263, (_77.y * gl_FragCoord.w) * _263)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _291 = _279;
    float _293 = _267;
    float _295 = _287;
    float _297 = _283;
    float _313;
    float _315;
    float _317;
    float _319;
    float _321;
    float _323;
    float _325;
    float _327;
    float _329;
    float _331;
    if (_167)
    {
        float _299 = fma(_275, -_217, fma(_273, -_215, _271 * (-_213)));
        float _301 = fma(_299 * _213, -2.0, -_271);
        float _303 = fma(_299 * _215, -2.0, -_273);
        float _305 = fma(_299 * _217, -2.0, -_275);
        float _307 = 1.0 / max(abs(_305), max(abs(_301), abs(_303)));
        vec3 _309 = texture(fp_tex_tcb_36, vec4(_301 * _307, _303 * _307, _305 * _307, float(12)), 0.0).xyz;
        float _311 = fma(_281.x, fp_c7_1._m0[19].x, _281.y);
        _313 = fma(_215 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _315 = _213 * fp_c7_1._m0[19].z;
        _317 = _217 * fp_c7_1._m0[19].z;
        _319 = 0.0;
        _293 = fp_c7_1._m0[19].x;
        _295 = fp_c7_1._m0[19].x;
        _297 = fp_c7_1._m0[19].x;
        _321 = 0.0;
        _323 = 0.0;
        _325 = _309.x * _311;
        _327 = _309.y * _311;
        _329 = _309.z * _311;
        _331 = 1.0;
    }
    else
    {
        float _333 = fma(_275, -_217, fma(_273, -_215, _271 * (-_213)));
        float _335 = fma(_333 * _213, -2.0, -_271);
        float _337 = fma(_333 * _215, -2.0, -_273);
        float _339 = fma(_333 * _217, -2.0, -_275);
        float _341 = max(_277, fp_c1_1._m0[0].w);
        float _343 = 1.0 / max(abs(_339), max(abs(_335), abs(_337)));
        vec2 _345 = texture(fp_tex_tcb_38, vec2(_341, (-_237) + (-0.0))).xy;
        float _347 = _345.x;
        float _349 = _345.y;
        vec3 _351 = texture(fp_tex_tcb_36, vec4(_335 * _343, _337 * _343, _339 * _343, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_237 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _353 = _81.y;
        float _355 = fma(fma(_201, -fp_c5_1._m0[23].z, fma(_199, -fp_c5_1._m0[23].y, _197 * (-fp_c5_1._m0[23].x))), -_215, _215);
        float _357 = _353 + (-fp_c9_1._m0[32].w);
        float _359 = _357;
        _291 = _341;
        _331 = clamp(fma(_355, clamp(_151 * (-7.0), 0.0, 1.0), -_355) + fp_c1_1._m0[1].y, 0.0, 1.0);
        if (_353 < fp_c9_1._m0[32].w)
        {
            _359 = _357 * (-5.0);
        }
        float _361 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w) * max(0.0, ((-_215) + 1.2000000476837158203125) * (clamp(fma(_359, -(1.0 / fma(clamp((-_215) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_359, -(1.0 / fma(clamp((-_215) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0)));
        _313 = _215;
        _315 = _213;
        _317 = _217;
        _319 = _361 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _321 = _361 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _323 = _361 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _325 = fma(_267, _347, _349) * _351.x;
        _327 = fma(_287, _347, _349) * _351.y;
        _329 = fma(_283, _347, _349) * _351.z;
    }
    float _363 = _313 * _315;
    float _365 = _81.z;
    float _367 = _81.x;
    float _369 = _317 * _313;
    float _371 = _271 + (-fp_c5_1._m0[23].x);
    float _373 = fma(_315, _315, -(_313 * _313));
    float _375 = _317 * _315;
    float _377 = _317 * _317;
    float _379 = _273 + (-fp_c5_1._m0[23].y);
    float _381 = _275 + (-fp_c5_1._m0[23].z);
    float _383 = fma(_237, 0.5, 0.5);
    float _385 = _237 * _237;
    float _387 = inversesqrt(fma(_381, _381, fma(_379, _379, _371 * _371)));
    float _389 = _379 * _387;
    float _391 = _371 * _387;
    float _393 = _381 * _387;
    int _395 = max(0, min(int(trunc((_365 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _397 = max(fma(_393, _217, fma(_389, _215, _391 * _213)), fp_c1_1._m0[0].w) * max(fma(_393, _217, fma(_389, _215, _391 * _213)), fp_c1_1._m0[0].w);
    uint _400 = uint(int(uint((((int(uint(_395) >> uint(16)) * 20) << 16) + (((_395 & 65535) * 20) + max(0, min(int(trunc((_367 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _402 = fp_c10_1._m0[int(uint(int(_400)) >> uint(2))][int(_400) & 3];
    float _404 = max(fma(_275, _393, fma(_273, _389, _271 * _391)), fp_c1_1._m0[0].w);
    float _406 = (_383 * 0.5) * _383;
    float _408 = 1.0 / (_406 + fma(_291, -_406, _291));
    float _410 = exp2(_404 * fma(_404, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _412 = (_408 * (1.0 / (_406 + fma(max(fma(_217, -fp_c5_1._m0[23].z, fma(_215, -fp_c5_1._m0[23].y, _213 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_406, max(fma(_217, -fp_c5_1._m0[23].z, fma(_215, -fp_c5_1._m0[23].y, _213 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_385 * (1.0 / max(fma(_397, _385 * _385, -_397) + 1.0, fp_c1_1._m0[0].w))) * (_385 * (1.0 / max(fma(_397, _385 * _385, -_397) + 1.0, fp_c1_1._m0[0].w))));
    float _414 = fma(max(0.0, fma(_373, fp_c5_1._m0[31].x, (fma(_317, fp_c5_1._m0[25].z, fma(_313, fp_c5_1._m0[25].y, _315 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_375, fp_c5_1._m0[28].w, fma(_377, fp_c5_1._m0[28].z, fma(_369, fp_c5_1._m0[28].y, _363 * fp_c5_1._m0[28].x))))) + _319, fma(_255, -_293, _255), _325);
    float _416 = fma(max(0.0, fma(_373, fp_c5_1._m0[31].y, (fma(_317, fp_c5_1._m0[26].z, fma(_313, fp_c5_1._m0[26].y, _315 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_375, fp_c5_1._m0[29].w, fma(_377, fp_c5_1._m0[29].z, fma(_369, fp_c5_1._m0[29].y, _363 * fp_c5_1._m0[29].x))))) + _321, fma(_285, -_295, _285), _327);
    float _418 = fma(max(0.0, fma(_373, fp_c5_1._m0[31].z, (fma(_317, fp_c5_1._m0[27].z, fma(_313, fp_c5_1._m0[27].y, _315 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_375, fp_c5_1._m0[30].w, fma(_377, fp_c5_1._m0[30].z, fma(_369, fp_c5_1._m0[30].y, _363 * fp_c5_1._m0[30].x))))) + _323, fma(_259, -_297, _259), _329);
    int _420 = floatBitsToInt(_402);
    float _422 = _416;
    float _424 = _418;
    float _426 = _414;
    float _428 = _418;
    float _430 = _414;
    float _432 = _416;
    if (floatBitsToInt(_402) != (-1))
    {
        int _434 = 0;
        float _438;
        float _440;
        float _442;
        int _526;
        do
        {
            int _436 = _420 & 255;
            _438 = _426;
            _440 = _422;
            _442 = _424;
            _444 = uint(_436) >= 30u;
            if (_444)
            {
                break;
            }
            int _446 = _436 << 4;
            uint _448 = uint(int(uint(_446 + 7360) >> uint(2)));
            int _450 = int(_448) + 1;
            uint _452 = uint(int(uint(_446 + 7368) >> uint(2)));
            float _454 = (-_367) + fp_c10_1._m0[int(uint(int(_448)) >> uint(2))][int(_448) & 3];
            float _456 = (-_81.y) + fp_c10_1._m0[int(uint(_450) >> uint(2))][_450 & 3];
            float _458 = (-_365) + fp_c10_1._m0[int(uint(int(_452)) >> uint(2))][int(_452) & 3];
            float _460 = fma(_458, _458, fma(_456, _456, _454 * _454));
            float _462 = _454 * inversesqrt(_460);
            float _464 = _456 * inversesqrt(_460);
            float _466 = _458 * inversesqrt(_460);
            float _468 = _271 + _462;
            float _470 = _273 + _464;
            float _472 = _275 + _466;
            float _474 = inversesqrt(fma(_472, _472, fma(_470, _470, _468 * _468)));
            float _476 = _468 * _474;
            float _478 = _470 * _474;
            float _480 = _472 * _474;
            float _482 = fma(_466, _217, fma(_464, _215, _462 * _213));
            float _484 = max(fma(_275, _480, fma(_273, _478, _271 * _476)), fp_c1_1._m0[0].w);
            float _486 = max(_482, fp_c1_1._m0[0].w);
            float _488 = max(fma(_480, _217, fma(_478, _215, _476 * _213)), fp_c1_1._m0[0].w) * max(fma(_480, _217, fma(_478, _215, _476 * _213)), fp_c1_1._m0[0].w);
            uint _490 = uint(int(uint(_446 + 6880) >> uint(2)));
            int _492 = int(_490) + 1;
            uint _494 = uint(int(uint(_446 + 8320) >> uint(2)));
            float _496 = exp2(_484 * fma(_484, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _498 = (_408 * (1.0 / (_406 + fma(_406, -_486, _486)))) * ((_385 * (1.0 / max(fma(_385 * _385, _488, -_488) + 1.0, fp_c1_1._m0[0].w))) * (_385 * (1.0 / max(fma(_385 * _385, _488, -_488) + 1.0, fp_c1_1._m0[0].w))));
            bool _500 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_494)) >> uint(2))][int(_494) & 3]) != 0;
            float _502 = (fma(_496, -_293, _496) + _293) * _498;
            uint _504 = uint(int(uint(_446 + 6408) >> uint(2)));
            uint _506 = uint(int(uint(_446 + 6400) >> uint(2)));
            int _508 = int(_506) + 1;
            float _510 = _502;
            if (!_500)
            {
                _510 = 1.0;
            }
            float _512 = _510;
            if (_500)
            {
                uint _514 = uint(int(uint(_446 + 7840) >> uint(2)));
                int _516 = int(_514) + 1;
                uint _518 = uint(int(uint(_446 + 7848) >> uint(2)));
                uint _520 = uint(int(uint(_446 + 6888) >> uint(2)));
                float _522 = fp_c10_1._m0[int(uint(int(_520)) >> uint(2))][int(_520) & 3];
                int _524 = int(_520) + 1;
                _512 = exp2(fp_c10_1._m0[int(uint(_524) >> uint(2))][_524 & 3] * log2(clamp(((-_522) + fma(_466, -fp_c10_1._m0[int(uint(int(_518)) >> uint(2))][int(_518) & 3], fma(_464, -fp_c10_1._m0[int(uint(_516) >> uint(2))][_516 & 3], _462 * (-fp_c10_1._m0[int(uint(int(_514)) >> uint(2))][int(_514) & 3])))) * (1.0 / ((-_522) + 1.0)), 0.0, 1.0)));
            }
            _526 = _434 + 1;
            float _528 = (exp2(fp_c10_1._m0[int(uint(_492) >> uint(2))][_492 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_490)) >> uint(2))][int(_490) & 3], -sqrt(_460), fp_c1_1._m0[1].x), 0.0, 1.0))) * _512) * clamp(_482 + (-0.0), 0.0, 1.0);
            float _530 = fma(fp_c10_1._m0[int(uint(_508) >> uint(2))][_508 & 3] * _528, fma(_285, fp_c1_1._m0[2].x, ((fma(_496, -_295, _496) + _295) * _498) * 0.079577468335628509521484375), _422);
            float _532 = fma(fp_c10_1._m0[int(uint(int(_504)) >> uint(2))][int(_504) & 3] * _528, fma(_259, fp_c1_1._m0[2].x, ((fma(_496, -_297, _496) + _297) * _498) * 0.079577468335628509521484375), _424);
            float _534 = fma(fp_c10_1._m0[int(uint(int(_506)) >> uint(2))][int(_506) & 3] * _528, fma(_255, fp_c1_1._m0[2].x, _502 * 0.079577468335628509521484375), _426);
            _420 = int(uint(_420) >> uint(8));
            _434 = _526;
            _422 = _530;
            _424 = _532;
            _426 = _534;
            _438 = _534;
            _440 = _530;
            _442 = _532;
        } while (!(_526 >= 4));
        _444 = false;
        _428 = _442;
        _430 = _438;
        _432 = _440;
        if ((_420 & 255) == 30)
        {
            float _536 = 1.0 / fp_c10_1._m0[561].y;
            float _538 = _365 + (-fp_c10_1._m0[557].z);
            float _540 = _538 * fp_c10_1._m0[558].x;
            float _542 = _367 + (-fp_c10_1._m0[557].x);
            float _544 = (-_367) + fma(_536, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _546 = (-_365) + fma(_536, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _548 = _542 * fp_c10_1._m0[558].z;
            float _550 = _544 * _544;
            float _552 = ((-float(_540 < _548)) + float(_540 > _548)) * fp_c10_1._m0[561].y;
            float _554 = sqrt(fma(_546, _546, _550)) * (-fp_c10_1._m0[558].y);
            float _556 = fma(_538, _538, _542 * _542);
            float _558 = inversesqrt(fma(_546, _546, fma(_554, _554, _550)));
            float _560 = _81.y;
            float _562 = _544 * _558;
            float _564 = _546 * _558;
            float _566 = fma(_538, fp_c10_1._m0[558].z, _542 * fp_c10_1._m0[558].x);
            float _568 = _554 * _558;
            float _570 = _271 + _562;
            float _572 = inversesqrt(fma(_564, _564, _562 * _562));
            bool _574 = fma(_538 * inversesqrt(_556), fp_c10_1._m0[558].z, (_542 * inversesqrt(_556)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _576 = _273 + _568;
            float _578 = fma(_564, _217, fma(_568, _215, _562 * _213));
            float _580 = _275 + _564;
            float _582 = inversesqrt(fma(_580, _580, fma(_576, _576, _570 * _570)));
            float _584 = 1.0 / (fma(_365, fp_c10_1._m0[565].z, fma(_560, fp_c10_1._m0[565].y, _367 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _586 = _580 * _582;
            float _588 = _570 * _582;
            float _590 = _576 * _582;
            bool _592 = _566 > 0.0;
            float _594 = (_562 * _572) * (-fp_c10_1._m0[558].x);
            float _596 = _594;
            float _598 = _586;
            if (_592)
            {
                _596 = sqrt(_556);
            }
            float _600 = _596;
            if (!_592)
            {
                _600 = 1.0;
            }
            float _602 = max(_578, fp_c1_1._m0[0].w);
            float _604 = max(fma(_586, _217, fma(_590, _215, _588 * _213)), fp_c1_1._m0[0].w) * max(fma(_586, _217, fma(_590, _215, _588 * _213)), fp_c1_1._m0[0].w);
            float _606 = clamp(fma(_566 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_566 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _608 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_542, fma(_552, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_538 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_552 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_542, fma(_552, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_538 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_552 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _610 = max(fma(_275, _586, fma(_273, _590, _271 * _588)), fp_c1_1._m0[0].w);
            if (!_574)
            {
                _598 = 1.0;
            }
            float _612 = _598;
            if (_574)
            {
                _612 = fma(_608, -_608, fp_c1_1._m0[1].x) * fma(_608, -_608, fp_c1_1._m0[1].x);
            }
            float _614 = exp2(_610 * fma(_610, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _616 = clamp(_578 + (-0.0), 0.0, 1.0) * (min(fma(_606, -_606, fp_c1_1._m0[1].x) * fma(_606, -_606, fp_c1_1._m0[1].x), _612) * (exp2(log2(clamp(fma(_600, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_564 * _572, -fp_c10_1._m0[558].z, _594) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _618 = (_408 * (1.0 / (_406 + fma(_406, -_602, _602)))) * ((_385 * (1.0 / max(fma(_385 * _385, _604, -_604) + 1.0, fp_c1_1._m0[0].w))) * (_385 * (1.0 / max(fma(_385 * _385, _604, -_604) + 1.0, fp_c1_1._m0[0].w))));
            float _620 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_365, fp_c10_1._m0[562].z, fma(_560, fp_c10_1._m0[562].y, _367 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _584, 0.5, 0.5), (-fma((fma(_365, fp_c10_1._m0[563].z, fma(_560, fp_c10_1._m0[563].y, _367 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _584, 0.5, 0.5)) + 1.0)).z > fma((fma(_365, fp_c10_1._m0[564].z, fma(_560, fp_c10_1._m0[564].y, _367 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _584, 0.5, 0.5)) || (_566 <= 0.0));
            _428 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _616) * fma(_259, fp_c1_1._m0[2].x, ((fma(_614, -_297, _614) + _297) * _618) * 0.079577468335628509521484375), _620, _442);
            _430 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _616) * fma(_255, fp_c1_1._m0[2].x, ((fma(_614, -_293, _614) + _293) * _618) * 0.079577468335628509521484375), _620, _438);
            _432 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _616) * fma(_285, fp_c1_1._m0[2].x, ((fma(_614, -_295, _614) + _295) * _618) * 0.079577468335628509521484375), _620, _440);
        }
    }
    float _622 = _367 + (-fp_c3_1._m0[11].w);
    float _624 = _365 + (-fp_c3_1._m0[13].w);
    float _626 = clamp(fma(_217, -fp_c5_1._m0[23].z, fma(_215, -fp_c5_1._m0[23].y, _213 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _628 = _81.y + (-fp_c3_1._m0[12].w);
    float _630 = fma(_624, _624, fma(_628, _628, _622 * _622));
    float _632 = exp2(log2(clamp(sqrt(_630) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_624 * inversesqrt(_630), fp_c5_1._m0[23].z, fma(_628 * inversesqrt(_630), fp_c5_1._m0[23].y, (_622 * inversesqrt(_630)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _634 = clamp(fma(_289, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _636 = fma(_289, ((_626 * fp_c5_1._m0[5].z) * fma((fma(_410, -_297, _410) + _297) * _412, fp_c1_1._m0[1].w, _259 * 0.3183098733425140380859375)) * _331, _428) + _241;
    float _638 = fma(_289, ((_626 * fp_c5_1._m0[5].x) * fma((fma(_410, -_293, _410) + _293) * _412, fp_c1_1._m0[1].w, _255 * 0.3183098733425140380859375)) * _331, _430) + _243;
    float _640 = fma(_289, ((_626 * fp_c5_1._m0[5].y) * fma((fma(_410, -_295, _410) + _295) * _412, fp_c1_1._m0[1].w, _285 * 0.3183098733425140380859375)) * _331, _432) + _245;
    float _642 = clamp((-exp2((clamp(fma(sqrt(_630), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma(fma(fma((_632 * fp_c7_1._m0[55].x) * _634, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_638), _642, _638);
    _75.y = fma(fma(fma((_632 * fp_c7_1._m0[55].y) * _634, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_640), _642, _640);
    _75.z = fma(fma(fma((_632 * fp_c7_1._m0[55].z) * _634, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_636), _642, _636);
    _75.w = clamp(_92 + (-0.0), 0.0, 1.0);
}


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

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_20;
layout(binding = 3) uniform sampler2D fp_tex_tcb_22;
layout(binding = 4) uniform sampler2D fp_tex_tcb_24;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;

layout(location = 0) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 2) in vec4 _66;
layout(location = 5) in vec4 _68;
layout(location = 0) out vec4 _71;
layout(location = 4) in vec4 _73;
layout(location = 6) in vec4 _75;
layout(location = 3) in vec4 _77;
uint _6[12];

void main()
{
    bool _472 = false;
    float _84 = _62.x;
    float _86 = _62.y;
    float _88 = texture(fp_tex_tcb_8, vec2(_84, _86)).x;
    bool _92 = _88 <= 0.0;
    if (_92)
    {
        discard;
    }
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_84, _86)).xy;
    float _98 = _96.x;
    float _100 = _96.y;
    vec3 _104 = texture(fp_tex_tcb_22, vec2(_62.z, _62.w)).xyz;
    float _106 = _104.x;
    float _108 = _104.y;
    vec3 _110 = texture(fp_tex_tcb_24, vec2(_84, _86)).xyz;
    float _112 = _110.x;
    float _114 = _110.y;
    float _116 = _64.x;
    float _118 = _64.y;
    float _120 = _64.z;
    float _122 = _66.x;
    float _124 = _66.y;
    float _126 = _66.z;
    float _128 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    int _131 = (-floatBitsToInt(fp_c6_1._m0[25].w)) + 1;
    float _133 = _116 * _128;
    float _135 = _118 * _128;
    float _137 = _120 * _128;
    float _139 = 1.0 / _68.w;
    float _141 = texture(fp_tex_tcb_20, vec2(_84 + fp_c6_1._m0[26].w, _86 + fp_c6_1._m0[26].w)).x + (-texture(fp_tex_tcb_20, vec2(_84 + (-fp_c6_1._m0[26].w), _86 + (-fp_c6_1._m0[26].w))).x);
    float _143 = _66.w;
    float _145 = fma(_124 * _141, fp_c6_1._m0[27].x, _135);
    float _147 = fma(_122 * _141, fp_c6_1._m0[27].x, _133);
    float _149 = fma(_126 * _141, fp_c6_1._m0[27].x, _137);
    float _151 = min((texture(fp_tex_tcb_20, vec2(_84, _86)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _153 = _151 * float((-abs(_131)) + 1);
    float _155 = _151 * float(max(0, _131));
    float _157 = _151 * float(max(0, (-_131)));
    float _159 = max(_157, max(_153, _155));
    float _161 = inversesqrt(fma(_149, _149, fma(_145, _145, _147 * _147)));
    float _163 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _165 = _159 + (-fp_c7_1._m0[21].w);
    float _167 = clamp(_165 + (-0.0), 0.0, 1.0);
    float _169 = _147 * _161;
    float _171 = _145 * _161;
    float _173 = fma(_133, _163, fma(_98, _122, _100 * (fma(_135, _126, -(_137 * _124)) * _143)));
    float _175 = fma(_135, _163, fma(_98, _124, _100 * (fma(_137, _122, -(_133 * _126)) * _143)));
    float _177 = fma(_137, _163, fma(_98, _126, _100 * (fma(_133, _124, -(_135 * _122)) * _143)));
    float _179 = clamp(((_153 + (-_159)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _181 = _149 * _161;
    float _183 = clamp(((_155 + (-_159)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    bool _185 = min(_167 * 1000.0, 1.0) > 0.5;
    float _187 = fma(fp_c7_1._m0[20].x + (-fp_c7_1._m0[20].y), clamp(_135 + (-0.0), 0.0, 1.0), fp_c7_1._m0[20].y);
    float _189 = clamp(((_157 + (-_159)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _191 = inversesqrt(fma(_177, _177, fma(_175, _175, _173 * _173)));
    float _193 = _173 * _191;
    float _195 = _175 * _191;
    float _197 = _177 * _191;
    int _199 = floatBitsToInt(_112);
    int _201 = floatBitsToInt(_114);
    int _203 = floatBitsToInt(_106);
    int _205 = floatBitsToInt(_108);
    float _207 = _193;
    float _209 = _195;
    float _211 = _197;
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
    float _261;
    float _263;
    if (_185)
    {
        float _213 = fma(_189, fp_c7_1._m0[62].y, fma(_183, fp_c7_1._m0[3].y, _179 * fp_c7_1._m0[10].y));
        float _215 = fma(_189, fp_c7_1._m0[62].x, fma(_183, fp_c7_1._m0[3].x, _179 * fp_c7_1._m0[10].x));
        float _217 = fma(_189, fp_c7_1._m0[62].z, fma(_183, fp_c7_1._m0[3].z, _179 * fp_c7_1._m0[10].z));
        float _219 = clamp(_167 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _221 = (-_193) + _169;
        float _223 = fma(_189, fp_c7_1._m0[63].x, fma(_183, fp_c7_1._m0[4].x, _179 * fp_c7_1._m0[11].x));
        float _225 = fma(_189, fp_c7_1._m0[63].y, fma(_183, fp_c7_1._m0[4].y, _179 * fp_c7_1._m0[11].y));
        float _227 = fma(_189, fp_c7_1._m0[63].z, fma(_183, fp_c7_1._m0[4].z, _179 * fp_c7_1._m0[11].z));
        float _229 = _225 * fp_c7_1._m0[45].y;
        float _231 = fma(_227, -fp_c7_1._m0[45].y, _217);
        float _233 = _223 * fp_c7_1._m0[45].y;
        float _235 = fma(fma(_225, -fp_c7_1._m0[45].y, _213), _219, _229);
        float _237 = fma(fma(_223, -fp_c7_1._m0[45].y, _215), _219, _233);
        float _239 = fma(_231, _219, _227 * fp_c7_1._m0[45].y);
        _199 = floatBitsToInt(_231);
        _201 = floatBitsToInt(_233);
        _203 = floatBitsToInt(_229);
        _205 = floatBitsToInt(_221);
        _241 = fp_c7_1._m0[18].w;
        _243 = _235;
        _245 = _239;
        _247 = 0.0;
        _207 = fma(_187, _221, _193);
        _209 = fma(_187, (-_195) + _171, _195);
        _211 = fma(_187, (-_197) + _181, _197);
        _249 = _237;
        _251 = 0.0;
        _253 = _215;
        _255 = _213;
        _257 = _217;
        _259 = _237 * fp_c7_1._m0[18].z;
        _261 = _235 * fp_c7_1._m0[18].z;
        _263 = _239 * fp_c7_1._m0[18].z;
    }
    else
    {
        _241 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].y);
        _243 = _108 * _114;
        _245 = _104.z * _110.z;
        _247 = fp_c6_1._m0[9].x;
        _249 = _106 * _112;
        _251 = 1.0;
        _253 = fp_c6_1._m0[19].x;
        _255 = fp_c6_1._m0[19].y;
        _257 = fp_c6_1._m0[19].z;
        _259 = 0.0;
        _261 = 0.0;
        _263 = 0.0;
    }
    int _265 = _199;
    int _267 = _201;
    int _269 = _203;
    int _271 = _205;
    if (_92)
    {
        _265 = 0;
    }
    if (_92)
    {
        _267 = 0;
    }
    if (_92)
    {
        _269 = 0;
    }
    if (_92)
    {
        _271 = 0;
    }
    if (_92)
    {
        _71.x = intBitsToFloat(_265);
        _71.y = intBitsToFloat(_267);
        _71.z = intBitsToFloat(_269);
        _71.w = intBitsToFloat(_271);
        return;
    }
    float _273 = _73.x;
    float _275 = _73.y;
    float _277 = _73.z;
    float _279 = 1.0 / (_75.z * gl_FragCoord.w);
    float _281 = fma(_245, -_247, _245);
    float _283 = inversesqrt(fma(_277, _277, fma(_275, _275, _273 * _273)));
    float _285 = _273 * (-_283);
    float _287 = _275 * (-_283);
    float _289 = _277 * (-_283);
    vec2 _291 = texture(fp_tex_tcb_2A, vec2(fma(_68.x * _139, 0.5, 0.5), fma(_68.y * _139, -0.5, 0.5))).xy;
    float _293 = fma(_289, _211, fma(_287, _209, _285 * _207));
    float _295 = max(_293, fp_c1_1._m0[0].w);
    vec2 _297 = texture(fp_tex_tcb_38, vec2(_295, (-_241) + (-0.0))).xy;
    float _299 = fma(_249, -_247, _249);
    float _301 = fma(_243, -_247, _243);
    float _303 = fma(_243 + (-0.039999999105930328369140625), _247, fp_c1_1._m0[0].z);
    float _305 = fma(_249 + (-0.039999999105930328369140625), _247, fp_c1_1._m0[0].z);
    float _307 = fma(_245 + (-0.039999999105930328369140625), _247, fp_c1_1._m0[0].z);
    float _309 = clamp(_77.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _311 = (-_291.y) + 1.0;
    float _313 = _311 * _309;
    float _315 = clamp((-fma(max((-_291.x) + 1.0, _311), _309, fma(texture(fp_tex_tcb_28, vec2((_75.x * gl_FragCoord.w) * _279, (_75.y * gl_FragCoord.w) * _279)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _317 = _295;
    float _319 = _303;
    float _321 = _299;
    float _323 = _305;
    float _325 = _307;
    float _327 = _281;
    float _329 = _301;
    float _345;
    float _347;
    float _349;
    float _351;
    float _353;
    float _355;
    float _357;
    float _359;
    if (_185)
    {
        float _331 = fma(_289, -_211, fma(_287, -_209, _285 * (-_207)));
        float _333 = fma(_331 * _207, -2.0, -_285);
        float _335 = fma(_331 * _209, -2.0, -_287);
        float _337 = fma(_331 * _211, -2.0, -_289);
        float _339 = 1.0 / max(abs(_337), max(abs(_333), abs(_335)));
        vec3 _341 = texture(fp_tex_tcb_36, vec4(_333 * _339, _335 * _339, _337 * _339, float(12)), 0.0).xyz;
        float _343 = fma(_297.x, fp_c7_1._m0[19].x, _297.y);
        _345 = _207 * fp_c7_1._m0[19].z;
        _347 = _211 * fp_c7_1._m0[19].z;
        _349 = fma(_209 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _319 = fp_c7_1._m0[19].x;
        _323 = fp_c7_1._m0[19].x;
        _325 = fp_c7_1._m0[19].x;
        _351 = _341.z * _343;
        _353 = _341.x * _343;
        _355 = _341.y * _343;
        _357 = 0.0;
        _359 = 1.0;
    }
    else
    {
        float _361 = max(_293, fp_c1_1._m0[0].w);
        float _363 = fma(_289, -_211, fma(_287, -_209, _285 * (-_207)));
        float _365 = fma(_363 * _207, -2.0, -_285);
        float _367 = fma(_363 * _209, -2.0, -_287);
        float _369 = fma(_363 * _211, -2.0, -_289);
        vec2 _371 = texture(fp_tex_tcb_38, vec2(_361, (-_241) + (-0.0))).xy;
        float _373 = _371.x;
        float _375 = _371.y;
        float _377 = _285 * _287;
        float _379 = 1.0 / max(abs(_369), max(abs(_365), abs(_367)));
        vec3 _381 = texture(fp_tex_tcb_36, vec4(_365 * _379, _367 * _379, _369 * _379, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_241 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _383 = _287 * _289;
        float _385 = _289 * _289;
        float _387 = _285 * _289;
        float _389 = fma(_285, _285, -(_287 * _287));
        float _391 = fma(fma(_181, -fp_c5_1._m0[23].z, fma(_171, -fp_c5_1._m0[23].y, _169 * (-fp_c5_1._m0[23].x))), -_209, _209);
        float _393 = exp2(log2(clamp((-_293) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
        _345 = _207;
        _347 = _211;
        _349 = _209;
        _317 = _361;
        _321 = fma((max(0.0, fma(_389, fp_c5_1._m0[31].x, (fma(_289, -fp_c5_1._m0[25].z, fma(_287, -fp_c5_1._m0[25].y, _285 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_387, fp_c5_1._m0[28].w, fma(_385, fp_c5_1._m0[28].z, fma(_383, fp_c5_1._m0[28].y, _377 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[45].x) * _393, _251, _299);
        _327 = fma((max(0.0, fma(_389, fp_c5_1._m0[31].z, (fma(_289, -fp_c5_1._m0[27].z, fma(_287, -fp_c5_1._m0[27].y, _285 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_387, fp_c5_1._m0[30].w, fma(_385, fp_c5_1._m0[30].z, fma(_383, fp_c5_1._m0[30].y, _377 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[45].z) * _393, _251, _281);
        _329 = fma((max(0.0, fma(_389, fp_c5_1._m0[31].y, (fma(_289, -fp_c5_1._m0[26].z, fma(_287, -fp_c5_1._m0[26].y, _285 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_387, fp_c5_1._m0[29].w, fma(_385, fp_c5_1._m0[29].z, fma(_383, fp_c5_1._m0[29].y, _377 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[45].y) * _393, _251, _301);
        _351 = fma(_307, _373, _375) * _381.z;
        _353 = fma(_305, _373, _375) * _381.x;
        _355 = fma(_303, _373, _375) * _381.y;
        _357 = fp_c6_1._m0[17].w;
        _359 = clamp(fma(_391, clamp(_165 * (-7.0), 0.0, 1.0), -_391) + fp_c1_1._m0[1].x, 0.0, 1.0);
    }
    float _395 = _285 + (-fp_c5_1._m0[23].x);
    float _397 = _287 + (-fp_c5_1._m0[23].y);
    float _399 = _77.x;
    float _401 = _289 + (-fp_c5_1._m0[23].z);
    float _403 = inversesqrt(fma(_401, _401, fma(_397, _397, _395 * _395)));
    float _405 = _395 * _403;
    float _407 = _397 * _403;
    float _409 = _401 * _403;
    float _411 = _347 * _349;
    float _413 = _349 * _345;
    int _415 = max(0, min(int(trunc((_77.z + (-fp_c9_1._m0[550].z)) * fp_c9_1._m0[551].z)), 19));
    float _417 = fma(_241, 0.5, 0.5);
    float _419 = max(fma(_289, _409, fma(_287, _407, _285 * _405)), fp_c1_1._m0[0].w);
    float _421 = _241 * _241;
    float _423 = fma(_345, _345, -(_349 * _349));
    float _425 = max(fma(_409, _211, fma(_407, _209, _405 * _207)), fp_c1_1._m0[0].w) * max(fma(_409, _211, fma(_407, _209, _405 * _207)), fp_c1_1._m0[0].w);
    float _427 = (_417 * 0.5) * _417;
    uint _430 = uint(int(uint((((int(uint(_415) >> uint(16)) * 20) << 16) + (((_415 & 65535) * 20) + max(0, min(int(trunc((_399 + (-fp_c9_1._m0[550].x)) * fp_c9_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _432 = fp_c9_1._m0[int(uint(int(_430)) >> uint(2))][int(_430) & 3];
    float _434 = _347 * _345;
    float _436 = _347 * _347;
    float _438 = exp2(_419 * fma(_419, fp_c1_1._m0[1].y, -6.9831600189208984375));
    float _440 = 1.0 / (_427 + fma(_317, -_427, _317));
    float _442 = (_440 * (1.0 / (_427 + fma(max(fma(_211, -fp_c5_1._m0[23].z, fma(_209, -fp_c5_1._m0[23].y, _207 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_427, max(fma(_211, -fp_c5_1._m0[23].z, fma(_209, -fp_c5_1._m0[23].y, _207 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_421 * (1.0 / max(fma(_425, _421 * _421, -_425) + 1.0, fp_c1_1._m0[0].w))) * (_421 * (1.0 / max(fma(_425, _421 * _421, -_425) + 1.0, fp_c1_1._m0[0].w))));
    float _444 = fma(max(0.0, fma(_423, fp_c5_1._m0[31].z, (fma(_347, fp_c5_1._m0[27].z, fma(_349, fp_c5_1._m0[27].y, _345 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_434, fp_c5_1._m0[30].w, fma(_436, fp_c5_1._m0[30].z, fma(_411, fp_c5_1._m0[30].y, _413 * fp_c5_1._m0[30].x))))), fma(_327, -_325, _327), _351);
    float _446 = fma(max(0.0, fma(_423, fp_c5_1._m0[31].x, (fma(_347, fp_c5_1._m0[25].z, fma(_349, fp_c5_1._m0[25].y, _345 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_434, fp_c5_1._m0[28].w, fma(_436, fp_c5_1._m0[28].z, fma(_411, fp_c5_1._m0[28].y, _413 * fp_c5_1._m0[28].x))))), fma(_321, -_323, _321), _353);
    float _448 = fma(max(0.0, fma(_423, fp_c5_1._m0[31].y, (fma(_347, fp_c5_1._m0[26].z, fma(_349, fp_c5_1._m0[26].y, _345 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_434, fp_c5_1._m0[29].w, fma(_436, fp_c5_1._m0[29].z, fma(_411, fp_c5_1._m0[29].y, _413 * fp_c5_1._m0[29].x))))), fma(_329, -_319, _329), _355);
    int _450 = floatBitsToInt(_432);
    float _452 = _446;
    float _454 = _448;
    float _456 = _444;
    float _458 = _446;
    float _460 = _448;
    float _462 = _444;
    if (floatBitsToInt(_432) != (-1))
    {
        float _464 = clamp(fma(_313, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _466 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
        int _468 = 0;
        int _558;
        do
        {
            int _470 = _450 & 255;
            _458 = _452;
            _460 = _454;
            _462 = _456;
            _472 = uint(_470) >= 30u;
            if (_472)
            {
                break;
            }
            int _474 = _470 << 4;
            uint _476 = uint(int(uint(_474 + 7360) >> uint(2)));
            int _478 = int(_476) + 1;
            uint _480 = uint(int(uint(_474 + 7368) >> uint(2)));
            uint _482 = uint(int(uint(_474 + 8320) >> uint(2)));
            float _484 = (-_399) + fp_c9_1._m0[int(uint(int(_476)) >> uint(2))][int(_476) & 3];
            float _486 = fp_c9_1._m0[int(uint(_478) >> uint(2))][_478 & 3] + (-_77.y);
            float _488 = (-_77.z) + fp_c9_1._m0[int(uint(int(_480)) >> uint(2))][int(_480) & 3];
            bool _490 = floatBitsToInt(fp_c9_1._m0[int(uint(int(_482)) >> uint(2))][int(_482) & 3]) != 0;
            float _492 = fma(_488, _488, fma(_486, _486, _484 * _484));
            float _494 = _484 * inversesqrt(_492);
            float _496 = _486 * inversesqrt(_492);
            float _498 = _488 * inversesqrt(_492);
            float _500 = _285 + _494;
            float _502 = _287 + _496;
            float _504 = _289 + _498;
            float _506 = inversesqrt(fma(_504, _504, fma(_502, _502, _500 * _500)));
            float _508 = _500 * _506;
            float _510 = _502 * _506;
            float _512 = _504 * _506;
            uint _514 = uint(int(uint(_474 + 6880) >> uint(2)));
            int _516 = int(_514) + 1;
            float _518 = fma(_498, _211, fma(_496, _209, _494 * _207));
            float _520 = max(_518, fp_c1_1._m0[0].w);
            float _522 = max(fma(_289, _512, fma(_287, _510, _285 * _508)), fp_c1_1._m0[0].w);
            float _524 = max(fma(_512, _211, fma(_510, _209, _508 * _207)), fp_c1_1._m0[0].w) * max(fma(_512, _211, fma(_510, _209, _508 * _207)), fp_c1_1._m0[0].w);
            uint _526 = uint(int(uint(_474 + 6400) >> uint(2)));
            int _528 = int(_526) + 1;
            uint _530 = uint(int(uint(_474 + 6408) >> uint(2)));
            int _532 = int(_530) + 1;
            float _534 = exp2(_522 * fma(_522, fp_c1_1._m0[1].y, -6.9831600189208984375));
            float _536 = fp_c9_1._m0[int(uint(_516) >> uint(2))][_516 & 3] * log2(clamp(fma(fp_c9_1._m0[int(uint(int(_514)) >> uint(2))][int(_514) & 3], -sqrt(_492), fp_c1_1._m0[1].w), 0.0, 1.0));
            float _538 = _536;
            if (!_490)
            {
                _538 = 1.0;
            }
            float _540 = (_440 * (1.0 / (_427 + fma(_427, -_520, _520)))) * ((_421 * (1.0 / max(fma(_421 * _421, _524, -_524) + 1.0, fp_c1_1._m0[0].w))) * (_421 * (1.0 / max(fma(_421 * _421, _524, -_524) + 1.0, fp_c1_1._m0[0].w))));
            float _542 = _538;
            if (_490)
            {
                uint _544 = uint(int(uint(_474 + 7840) >> uint(2)));
                int _546 = int(_544) + 1;
                uint _548 = uint(int(uint(_474 + 7848) >> uint(2)));
                uint _550 = uint(int(uint(_474 + 6888) >> uint(2)));
                float _552 = fp_c9_1._m0[int(uint(int(_550)) >> uint(2))][int(_550) & 3];
                int _554 = int(_550) + 1;
                _542 = exp2(fp_c9_1._m0[int(uint(_554) >> uint(2))][_554 & 3] * log2(clamp(((-_552) + fma(_498, -fp_c9_1._m0[int(uint(int(_548)) >> uint(2))][int(_548) & 3], fma(_496, -fp_c9_1._m0[int(uint(_546) >> uint(2))][_546 & 3], _494 * (-fp_c9_1._m0[int(uint(int(_544)) >> uint(2))][int(_544) & 3])))) * (1.0 / ((-_552) + 1.0)), 0.0, 1.0)));
            }
            float _556 = exp2(_536) * _542;
            _558 = _468 + 1;
            float _560 = _556 * clamp(_518 + (-0.0), 0.0, 1.0);
            float _562 = clamp((-_357) + 1.0, 0.0, 1.0);
            float _564 = fp_c9_1._m0[int(uint(_532) >> uint(2))][_532 & 3] * _556;
            float _566 = exp2(log2(clamp(fma(_293, -clamp((-_518) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].w), 0.0, 1.0)) * fp_c6_1._m0[18].y) * (fma(_466, fp_c1_1._m0[2].z, exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_289, -_498, fma(_287, -_496, _285 * (-_494))), fp_c1_1._m0[2].y) + (-0.0), 0.0, 1.0))) * _466) + 0.20000000298023223876953125);
            float _568 = fma((fp_c9_1._m0[int(uint(int(_526)) >> uint(2))][int(_526) & 3] * _560) * fma(_321, fp_c1_1._m0[2].x, ((fma(_534, -_323, _534) + _323) * _540) * 0.079577468335628509521484375), _562, _464 * ((_566 * (_564 * _253)) * _357)) + _452;
            float _570 = fma((fp_c9_1._m0[int(uint(_528) >> uint(2))][_528 & 3] * _560) * fma(_329, fp_c1_1._m0[2].x, ((fma(_534, -_319, _534) + _319) * _540) * 0.079577468335628509521484375), _562, _464 * ((_566 * (_564 * _255)) * _357)) + _454;
            float _572 = fma((fp_c9_1._m0[int(uint(int(_530)) >> uint(2))][int(_530) & 3] * _560) * fma(_327, fp_c1_1._m0[2].x, ((fma(_534, -_325, _534) + _325) * _540) * 0.079577468335628509521484375), _562, _464 * ((_566 * (_564 * _257)) * _357)) + _456;
            _450 = int(uint(_450) >> uint(8));
            _468 = _558;
            _452 = _568;
            _454 = _570;
            _456 = _572;
            _458 = _568;
            _460 = _570;
            _462 = _572;
        } while (!(_558 >= 4));
    }
    _472 = false;
    float _574 = _77.y;
    float _576 = _399 + (-fp_c3_1._m0[11].w);
    float _578 = fma(_211, -fp_c5_1._m0[23].z, fma(_209, -fp_c5_1._m0[23].y, _207 * (-fp_c5_1._m0[23].x)));
    float _580 = clamp(_578 + (-0.0), 0.0, 1.0);
    float _582 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
    float _584 = _574 + (-fp_c3_1._m0[12].w);
    float _586 = _77.z;
    float _588 = _586 + (-fp_c3_1._m0[13].w);
    float _590 = fma(_588, _588, fma(_584, _584, _576 * _576));
    float _592 = exp2(log2(clamp(fma(_293, -clamp((-_578) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].w), 0.0, 1.0)) * fp_c6_1._m0[18].y) * (fma(_582, fp_c1_1._m0[2].z, _582 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_289, fp_c5_1._m0[23].z, fma(_287, fp_c5_1._m0[23].y, _285 * fp_c5_1._m0[23].x)), fp_c1_1._m0[2].y) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _594 = clamp((-_357) + 1.0, 0.0, 1.0);
    float _596 = clamp(fma(_313, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _598 = exp2(log2(clamp(sqrt(_590) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_588 * inversesqrt(_590), fp_c5_1._m0[23].z, fma(_584 * inversesqrt(_590), fp_c5_1._m0[23].y, (_576 * inversesqrt(_590)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _600 = clamp(fma(_315, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _602 = (fma(_315, (((_580 * fp_c5_1._m0[5].x) * fma((fma(_438, -_323, _438) + _323) * _442, fp_c1_1._m0[1].z, _321 * 0.3183098733425140380859375)) * _594) * _359, _596 * (((_253 * fp_c5_1._m0[5].w) * _592) * _357)) + _458) + _259;
    float _604 = (fma(_315, (((_580 * fp_c5_1._m0[5].y) * fma((fma(_438, -_319, _438) + _319) * _442, fp_c1_1._m0[1].z, _329 * 0.3183098733425140380859375)) * _594) * _359, _596 * (((_255 * fp_c5_1._m0[5].w) * _592) * _357)) + _460) + _261;
    float _606 = (fma(_315, (((_580 * fp_c5_1._m0[5].z) * fma((fma(_438, -_325, _438) + _325) * _442, fp_c1_1._m0[1].z, _327 * 0.3183098733425140380859375)) * _594) * _359, _596 * (((_257 * fp_c5_1._m0[5].w) * _592) * _357)) + _462) + _263;
    float _608 = clamp(fma(fma(_586, fp_c5_1._m0[14].z, fma(_574, fp_c5_1._m0[14].y, _399 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _610 = fma((-_602) + fp_c5_1._m0[13].x, _608, _602);
    float _612 = fma((-_604) + fp_c5_1._m0[13].y, _608, _604);
    float _614 = fma((-_606) + fp_c5_1._m0[13].z, _608, _606);
    float _616 = clamp((-exp2((clamp(fma(sqrt(_590), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _71.x = fma((-_610) + fma(fma((_598 * fp_c7_1._m0[55].x) * _600, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _616, _610);
    _71.y = fma((-_612) + fma(fma((_598 * fp_c7_1._m0[55].y) * _600, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _616, _612);
    _71.z = fma((-_614) + fma(fma((_598 * fp_c7_1._m0[55].z) * _600, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _616, _614);
    _71.w = clamp(_88 + (-0.0), 0.0, 1.0);
}


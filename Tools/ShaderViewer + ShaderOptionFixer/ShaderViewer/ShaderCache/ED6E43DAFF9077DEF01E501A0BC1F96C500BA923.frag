#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_22;
layout(binding = 5) uniform sampler2D fp_tex_tcb_24;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_3C;

layout(location = 7) in vec4 _59;
layout(location = 6) in vec4 _61;
layout(location = 0) in vec4 _63;
layout(location = 1) in vec4 _65;
layout(location = 9) in vec4 _67;
layout(location = 2) in vec4 _69;
layout(location = 5) in vec4 _71;
layout(location = 8) in vec4 _73;
layout(location = 10) in vec4 _75;
layout(location = 4) in vec4 _77;
layout(location = 3) in vec4 _79;
layout(location = 0) out vec4 _82;

void main()
{
    float _89 = _63.x;
    float _91 = _63.y;
    bool _95 = _59.w < 0.0;
    float _97 = _61.y;
    float _99 = _61.x;
    if (_95)
    {
        _97 = _61.w;
    }
    if (_95)
    {
        _99 = _61.z;
    }
    float _101 = (-_97) + 1.0;
    vec3 _105 = texture(fp_tex_tcb_3C, vec2(_99, _101)).xyz;
    float _107 = _105.x;
    float _109 = _105.y;
    float _111 = _105.z;
    vec2 _115 = texture(fp_tex_tcb_E, vec2(_89, _91)).xy;
    float _117 = _115.x;
    float _119 = _115.y;
    vec3 _121 = texture(fp_tex_tcb_3C, vec2(fma(fp_c7_1._m0[20].z, fp_c7_1._m0[22].z, _99), _101)).xyz;
    vec3 _123 = texture(fp_tex_tcb_3C, vec2(_99, fma(fp_c7_1._m0[20].z, fp_c7_1._m0[22].w, _101))).xyz;
    vec3 _125 = texture(fp_tex_tcb_A, vec2(_89, _91)).xyz;
    float _127 = _65.x;
    float _129 = _65.y;
    float _131 = _65.z;
    float _133 = _67.z;
    float _135 = _67.y;
    float _137 = _69.y;
    float _139 = _69.z;
    float _141 = _69.x;
    float _143 = _69.w;
    float _145 = _67.x;
    float _147 = inversesqrt(fma(_131, _131, fma(_129, _129, _127 * _127)));
    float _149 = _129 * _147;
    float _151 = _131 * _147;
    float _153 = _127 * _147;
    float _155 = fma(_151, _135, -(_149 * _133));
    float _157 = _153 * _135;
    float _159 = fma(_153, _133, -(_151 * _145));
    float _161 = fma(_149, _145, -_157);
    float _163 = fma(_159, _159, _155 * _155);
    float _165 = fma(_161, _161, _163);
    bool _167 = sqrt(_165) > fp_c1_1._m0[0].x;
    float _169 = fma(_149, _139, -(_151 * _137));
    float _171 = _163;
    float _173 = _157;
    float _175 = _155;
    float _177 = _169;
    float _179 = _125.x;
    float _181 = _125.y;
    float _183 = _125.z;
    if (_167)
    {
        _171 = inversesqrt(_165);
    }
    if (!_167)
    {
        _173 = _155;
    }
    float _185 = _173;
    if (!_167)
    {
        _175 = _161;
    }
    float _187 = _175;
    if (!_167)
    {
        _177 = _159;
    }
    float _189 = _177;
    if (_167)
    {
        _185 = _175 * _171;
    }
    if (_167)
    {
        _189 = _159 * _171;
    }
    if (_167)
    {
        _187 = _161 * _171;
    }
    float _191 = 1.0 / _71.w;
    float _193 = max(_111, max(_107, _109));
    float _195 = clamp(((_109 + (-_193)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _197 = clamp(((_107 + (-_193)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _199 = sqrt(clamp((-fma(_117, _117, _119 * _119)) + 1.0, 0.0, 1.0));
    float _201 = clamp(((_111 + (-_193)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _203 = fma(_153, _199, fma(_117, _141, _119 * (_169 * _143)));
    float _205 = fma(_149, _199, fma(_117, _137, _119 * (fma(_151, _141, -(_153 * _139)) * _143)));
    float _207 = _193 + (-fp_c7_1._m0[21].w);
    float _209 = fma(_111 + (-_123.z), _201, fma(_107 + (-_123.x), _197, (_109 + (-_123.y)) * _195)) * fp_c7_1._m0[18].y;
    float _211 = fma(_151, _199, fma(_117, _139, _119 * (fma(_153, _137, -(_149 * _141)) * _143)));
    float _213 = fma((-_121.z) + _111, _201, fma((-_121.x) + _107, _197, ((-_121.y) + _109) * _195)) * fp_c7_1._m0[18].y;
    float _215 = clamp(_207 + (-0.0), 0.0, 1.0);
    float _217 = inversesqrt(fma(_211, _211, fma(_205, _205, _203 * _203)));
    float _219 = _153 + fma(_213, _145, _209 * _185);
    float _221 = _149 + fma(_213, _135, _209 * _189);
    float _223 = fma((-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, clamp(_149 + (-0.0), 0.0, 1.0), fp_c7_1._m0[20].y);
    float _225 = _151 + fma(_213, _133, _209 * _187);
    float _227 = _203 * _217;
    float _229 = _205 * _217;
    float _231 = _211 * _217;
    bool _233 = min(_215 * 1000.0, 1.0) > 0.5;
    float _235 = inversesqrt(fma(_225, _225, fma(_221, _221, _219 * _219)));
    float _237 = fma(_201, fp_c8_1._m0[18].x, fma(_197, fp_c8_1._m0[4].x, _195 * fp_c8_1._m0[11].x));
    float _239 = fma(_201, fp_c8_1._m0[18].y, fma(_197, fp_c8_1._m0[4].y, _195 * fp_c8_1._m0[11].y));
    float _241 = fma(_201, fp_c8_1._m0[18].z, fma(_197, fp_c8_1._m0[4].z, _195 * fp_c8_1._m0[11].z));
    float _243 = _219 * _235;
    float _245 = _221 * _235;
    float _247 = _225 * _235;
    float _249 = _227;
    float _251 = _229;
    float _253 = _231;
    float _263;
    float _265;
    float _267;
    float _269;
    float _271;
    if (_233)
    {
        float _255 = clamp(_215 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _257 = fma(fma(_241, -fp_c7_1._m0[45].y, fma(_201, fp_c8_1._m0[17].z, fma(_197, fp_c8_1._m0[3].z, _195 * fp_c8_1._m0[10].z))), _255, _241 * fp_c7_1._m0[45].y);
        float _259 = fma(fma(_237, -fp_c7_1._m0[45].y, fma(_201, fp_c8_1._m0[17].x, fma(_197, fp_c8_1._m0[3].x, _195 * fp_c8_1._m0[10].x))), _255, _237 * fp_c7_1._m0[45].y);
        float _261 = fma(fma(_239, -fp_c7_1._m0[45].y, fma(_201, fp_c8_1._m0[17].y, fma(_197, fp_c8_1._m0[3].y, _195 * fp_c8_1._m0[10].y))), _255, _239 * fp_c7_1._m0[45].y);
        _179 = _259;
        _181 = _261;
        _263 = 0.0;
        _183 = _257;
        _249 = fma(_223, (-_227) + _243, _227);
        _251 = fma(_223, (-_229) + _245, _229);
        _253 = fma(_223, (-_231) + _247, _231);
        _265 = fp_c7_1._m0[18].x;
        _267 = _259 * fp_c7_1._m0[18].z;
        _269 = _261 * fp_c7_1._m0[18].z;
        _271 = _257 * fp_c7_1._m0[18].z;
    }
    else
    {
        _263 = texture(fp_tex_tcb_12, vec2(_89, _91)).x;
        _265 = max(texture(fp_tex_tcb_10, vec2(_89, _91)).x, fp_c1_1._m0[0].y);
        _267 = 0.0;
        _269 = 0.0;
        _271 = 0.0;
    }
    float _273 = fma(_179 + (-0.039999999105930328369140625), _263, fp_c1_1._m0[0].z);
    float _275 = 1.0 / (_73.z * gl_FragCoord.w);
    vec2 _277 = texture(fp_tex_tcb_22, vec2(_75.x, _75.y)).xy;
    float _279 = _77.x;
    float _281 = _77.y;
    float _283 = _77.z;
    float _285 = fma(_263, -_179, _179);
    float _287 = fma(_181 + (-0.039999999105930328369140625), _263, fp_c1_1._m0[0].z);
    float _289 = fma(_263, -_181, _181);
    float _291 = fma(_263, -_183, _183);
    float _293 = fma(_183 + (-0.039999999105930328369140625), _263, fp_c1_1._m0[0].z);
    float _295 = _73.w;
    float _297 = inversesqrt(fma(_283, _283, fma(_281, _281, _279 * _279)));
    float _299 = _279 * (-_297);
    float _301 = _281 * (-_297);
    float _303 = _283 * (-_297);
    float _305 = fma(_303, _253, fma(_301, _251, _299 * _249));
    float _307 = clamp(clamp(fma(_277.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0) * _295, 0.0, 1.0);
    float _309 = clamp((-_307) + 1.0, 0.0, 1.0);
    float _311 = clamp((-fma(_307, fp_c7_1._m0[37].w, fma(clamp(_79.w + fp_c7_1._m0[36].z, 0.0, 1.0), max(0.0, (-texture(fp_tex_tcb_2A, vec2(fma(_71.x * _191, 0.5, 0.5), fma(_71.y * _191, -0.5, 0.5))).x) + 1.0), fma(texture(fp_tex_tcb_28, vec2((_73.x * gl_FragCoord.w) * _275, (_73.y * gl_FragCoord.w) * _275)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)) + clamp(clamp(fma(_277.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0) * _295, 0.0, 1.0))) + 1.0, 0.0, 1.0);
    float _313 = _273;
    float _315 = _287;
    float _317 = _293;
    float _337;
    float _339;
    float _341;
    float _343;
    float _345;
    float _347;
    float _349;
    float _351;
    if (_233)
    {
        float _319 = max(_305, fp_c1_1._m0[0].w);
        vec2 _321 = texture(fp_tex_tcb_38, vec2(_319, (-_265) + (-0.0))).xy;
        float _323 = fma(_303, -_253, fma(_301, -_251, _299 * (-_249)));
        float _325 = fma(_323 * _249, -2.0, -_299);
        float _327 = fma(_323 * _251, -2.0, -_301);
        float _329 = fma(_323 * _253, -2.0, -_303);
        float _331 = 1.0 / max(abs(_329), max(abs(_325), abs(_327)));
        vec3 _333 = texture(fp_tex_tcb_36, vec4(_325 * _331, _327 * _331, _329 * _331, float(12)), 0.0).xyz;
        float _335 = fma(_321.x, fp_c7_1._m0[19].x, _321.y);
        _337 = fma(_251 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _339 = _249 * fp_c7_1._m0[19].z;
        _341 = _253 * fp_c7_1._m0[19].z;
        _343 = _319;
        _313 = fp_c7_1._m0[19].x;
        _315 = fp_c7_1._m0[19].x;
        _317 = fp_c7_1._m0[19].x;
        _345 = _333.z * _335;
        _347 = _333.x * _335;
        _349 = _333.y * _335;
        _351 = 1.0;
    }
    else
    {
        float _353 = max(_305, fp_c1_1._m0[0].w);
        float _355 = fma(_303, -_253, fma(_301, -_251, _299 * (-_249)));
        float _357 = fma(_355 * _249, -2.0, -_299);
        float _359 = fma(_355 * _251, -2.0, -_301);
        float _361 = fma(_355 * _253, -2.0, -_303);
        float _363 = 1.0 / max(abs(_361), max(abs(_357), abs(_359)));
        vec3 _365 = texture(fp_tex_tcb_36, vec4(_357 * _363, _359 * _363, _361 * _363, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_265 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        vec2 _367 = texture(fp_tex_tcb_38, vec2(_353, (-_265) + (-0.0))).xy;
        float _369 = _367.x;
        float _371 = _367.y;
        float _373 = fma(fma(_247, -fp_c5_1._m0[23].z, fma(_245, -fp_c5_1._m0[23].y, _243 * (-fp_c5_1._m0[23].x))), -_251, _251);
        _337 = _251;
        _339 = _249;
        _341 = _253;
        _343 = _353;
        _345 = _365.z * fma(_293, _369, _371);
        _347 = _365.x * fma(_273, _369, _371);
        _349 = _365.y * fma(_287, _369, _371);
        _351 = clamp(fma(_373, clamp(_207 * (-7.0), 0.0, 1.0), -_373) + fp_c1_1._m0[1].x, 0.0, 1.0);
    }
    float _375 = _337 * _339;
    float _377 = _341 * _337;
    float _379 = _341 * _341;
    float _381 = _299 + (-fp_c5_1._m0[23].x);
    float _383 = _341 * _339;
    float _385 = _301 + (-fp_c5_1._m0[23].y);
    float _387 = _303 + (-fp_c5_1._m0[23].z);
    float _389 = inversesqrt(fma(_387, _387, fma(_385, _385, _381 * _381)));
    float _391 = _381 * _389;
    float _393 = _385 * _389;
    float _395 = _387 * _389;
    vec4 _398 = texture(fp_tex_tcb_24, vec2(_75.z, _75.w)).xyzw;
    float _400 = _398.w;
    float _402 = max(fma(_303, _395, fma(_301, _393, _299 * _391)), fp_c1_1._m0[0].w);
    float _404 = fma(_339, _339, -(_337 * _337));
    float _406 = _265 * _265;
    float _408 = fma(_265, 0.5, 0.5);
    float _410 = max(fma(_395, _253, fma(_393, _251, _391 * _249)), fp_c1_1._m0[0].w) * max(fma(_395, _253, fma(_393, _251, _391 * _249)), fp_c1_1._m0[0].w);
    float _412 = (_408 * 0.5) * _408;
    float _414 = clamp(fma(_253, -fp_c5_1._m0[23].z, fma(_251, -fp_c5_1._m0[23].y, _249 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _416 = exp2(_402 * fma(_402, fp_c1_1._m0[1].y, -6.9831600189208984375));
    float _418 = ((1.0 / (_412 + fma(_343, -_412, _343))) * (1.0 / (_412 + fma(max(fma(_253, -fp_c5_1._m0[23].z, fma(_251, -fp_c5_1._m0[23].y, _249 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_412, max(fma(_253, -fp_c5_1._m0[23].z, fma(_251, -fp_c5_1._m0[23].y, _249 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_406 * (1.0 / max(fma(_406 * _406, _410, -_410) + 1.0, fp_c1_1._m0[0].w))) * (_406 * (1.0 / max(fma(_406 * _406, _410, -_410) + 1.0, fp_c1_1._m0[0].w))));
    float _420 = fma(_285, -_313, _285);
    float _422 = fma(_291, -_317, _291);
    float _424 = fma(_289, -_315, _289);
    float _426 = (_295 * (_398.x * _400)) * 32.0;
    float _428 = (_295 * (_398.y * _400)) * 32.0;
    float _430 = (_295 * (_398.z * _400)) * 32.0;
    float _432 = fma(_309, fma(_426, _420, fma(max(0.0, fma(_404, fp_c5_1._m0[31].x, (fma(_341, fp_c5_1._m0[25].z, fma(_337, fp_c5_1._m0[25].y, _339 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_383, fp_c5_1._m0[28].w, fma(_379, fp_c5_1._m0[28].z, fma(_377, fp_c5_1._m0[28].y, _375 * fp_c5_1._m0[28].x))))), _420, _347)), _311 * ((fma(_414, fp_c5_1._m0[5].x, _426) * fma(_418 * (fma(_416, -_313, _416) + _313), fp_c1_1._m0[1].z, _285 * 0.3183098733425140380859375)) * _351)) + _267;
    float _434 = fma(_309, fma(_428, _424, fma(max(0.0, fma(_404, fp_c5_1._m0[31].y, (fma(_341, fp_c5_1._m0[26].z, fma(_337, fp_c5_1._m0[26].y, _339 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_383, fp_c5_1._m0[29].w, fma(_379, fp_c5_1._m0[29].z, fma(_377, fp_c5_1._m0[29].y, _375 * fp_c5_1._m0[29].x))))), _424, _349)), _311 * ((fma(_414, fp_c5_1._m0[5].y, _428) * fma(_418 * (fma(_416, -_315, _416) + _315), fp_c1_1._m0[1].z, _289 * 0.3183098733425140380859375)) * _351)) + _269;
    float _436 = fma(_309, fma(_430, _422, fma(max(0.0, fma(_404, fp_c5_1._m0[31].z, (fma(_341, fp_c5_1._m0[27].z, fma(_337, fp_c5_1._m0[27].y, _339 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_383, fp_c5_1._m0[30].w, fma(_379, fp_c5_1._m0[30].z, fma(_377, fp_c5_1._m0[30].y, _375 * fp_c5_1._m0[30].x))))), _422, _345)), _311 * ((fma(_414, fp_c5_1._m0[5].z, _430) * fma(_418 * (fma(_416, -_317, _416) + _317), fp_c1_1._m0[1].z, _291 * 0.3183098733425140380859375)) * _351)) + _271;
    float _438 = clamp(fma(fma(_79.z, fp_c5_1._m0[14].z, fma(_79.y, fp_c5_1._m0[14].y, _79.x * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    _82.x = fma((-_432) + fp_c5_1._m0[13].x, _438, _432);
    _82.y = fma((-_434) + fp_c5_1._m0[13].y, _438, _434);
    _82.z = fma((-_436) + fp_c5_1._m0[13].z, _438, _436);
    _82.w = 1.0;
}


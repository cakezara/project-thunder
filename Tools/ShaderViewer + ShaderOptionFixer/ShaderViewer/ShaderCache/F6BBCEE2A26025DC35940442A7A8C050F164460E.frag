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

layout(binding = 0) uniform sampler2D fp_tex_tcb_C;
layout(binding = 1) uniform sampler2D fp_tex_tcb_14;
layout(binding = 2) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 3) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 4) uniform sampler2D fp_tex_tcb_26;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _68;
layout(location = 5) in vec4 _70;
layout(location = 4) in vec4 _72;
layout(location = 1) in vec4 _74;
layout(location = 0) out vec4 _77;
layout(location = 3) in vec4 _79;
layout(location = 2) in vec4 _81;
uint _6[12];

void main()
{
    bool _402 = false;
    float _88 = _68.x;
    float _90 = _68.y;
    float _92 = 1.0 / (_70.z * gl_FragCoord.w);
    float _94 = 1.0 / _72.w;
    float _96 = texture(fp_tex_tcb_1E, vec2(_88, _90)).x;
    vec2 _100 = texture(fp_tex_tcb_2A, vec2(fma(_72.x * _94, 0.5, 0.5), fma(_72.y * _94, -0.5, 0.5))).xy;
    float _102 = _74.x;
    int _105 = floatBitsToInt(fp_c6_1._m0[25].w) + (-1);
    float _107 = _74.y;
    float _109 = _74.z;
    float _111 = min((texture(fp_tex_tcb_26, vec2(_88, _90)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _113 = _111 * float((-abs(_105)) + 1);
    float _115 = _111 * float(max(0, (-_105)));
    float _117 = _111 * float(max(0, _105));
    float _119 = inversesqrt(fma(_109, _109, fma(_107, _107, _102 * _102)));
    float _121 = max(_117, max(_113, _115));
    float _123 = _121 + (-fp_c7_1._m0[21].w);
    float _125 = _102 * _119;
    float _127 = _107 * _119;
    float _129 = clamp(_123 + (-0.0), 0.0, 1.0);
    float _131 = _109 * _119;
    float _133 = clamp(((_113 + (-_121)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _135 = clamp(((_115 + (-_121)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _137 = clamp(((_117 + (-_121)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    bool _141 = min(_129 * 1000.0, 1.0) > 0.5;
    float _143 = fma(_137, fp_c8_1._m0[18].x, fma(_135, fp_c8_1._m0[4].x, _133 * fp_c8_1._m0[11].x));
    float _145 = fma(_137, fp_c8_1._m0[18].y, fma(_135, fp_c8_1._m0[4].y, _133 * fp_c8_1._m0[11].y));
    float _147 = fma(_137, fp_c8_1._m0[18].z, fma(_135, fp_c8_1._m0[4].z, _133 * fp_c8_1._m0[11].z));
    int _149 = floatBitsToInt(_88);
    int _151 = floatBitsToInt(_90);
    int _153 = floatBitsToInt(_96);
    float _165;
    int _167;
    float _169;
    float _171;
    float _173;
    float _175;
    float _177;
    float _179;
    float _181;
    float _183;
    float _185;
    float _187;
    float _189;
    if (_141)
    {
        float _155 = clamp(_129 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _157 = _147 * fp_c7_1._m0[45].y;
        float _159 = fma(fma(_143, -fp_c7_1._m0[45].y, fma(_137, fp_c8_1._m0[17].x, fma(_135, fp_c8_1._m0[3].x, _133 * fp_c8_1._m0[10].x))), _155, _143 * fp_c7_1._m0[45].y);
        float _161 = fma(fma(_145, -fp_c7_1._m0[45].y, fma(_137, fp_c8_1._m0[17].y, fma(_135, fp_c8_1._m0[3].y, _133 * fp_c8_1._m0[10].y))), _155, _145 * fp_c7_1._m0[45].y);
        float _163 = fma(fma(_147, -fp_c7_1._m0[45].y, fma(_137, fp_c8_1._m0[17].z, fma(_135, fp_c8_1._m0[3].z, _133 * fp_c8_1._m0[10].z))), _155, _157);
        _165 = fp_c6_1._m0[0].y;
        _149 = floatBitsToInt(_157);
        _167 = floatBitsToInt(_155);
        _169 = _159;
        _171 = _161;
        _173 = 0.0;
        _175 = _163;
        _177 = fp_c7_1._m0[18].w;
        _179 = 0.0;
        _181 = 0.0;
        _183 = 0.0;
        _185 = _159 * fp_c7_1._m0[18].z;
        _187 = _161 * fp_c7_1._m0[18].z;
        _189 = _163 * fp_c7_1._m0[18].z;
    }
    else
    {
        vec3 _193 = texture(fp_tex_tcb_14, vec2(_88, _90)).xyz;
        float _195 = (-texture(fp_tex_tcb_1C, vec2(_88, _90)).x) + _96;
        float _197 = clamp(texture(fp_tex_tcb_C, vec2(_88, _90)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
        float _199 = fma(fp_c6_1._m0[100].x + (-fp_c6_1._m0[7].x), _197, fp_c6_1._m0[7].x);
        float _201 = fma(fp_c6_1._m0[100].y + (-fp_c6_1._m0[7].y), _197, fp_c6_1._m0[7].y);
        float _203 = fma(fp_c6_1._m0[100].z + (-fp_c6_1._m0[7].z), _197, fp_c6_1._m0[7].z);
        _165 = _195 + 1.0;
        _167 = floatBitsToInt(_195);
        _169 = _199;
        _171 = _201;
        _173 = fp_c6_1._m0[9].x;
        _175 = _203;
        _177 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].y);
        _179 = _199 * _193.x;
        _181 = _201 * _193.y;
        _183 = _203 * _193.z;
        _185 = 0.0;
        _187 = 0.0;
        _189 = 0.0;
    }
    bool _205 = _165 <= 0.0;
    int _207 = _149;
    int _209 = _167;
    if (_205)
    {
        discard;
    }
    if (_205)
    {
        _207 = 0;
    }
    if (_205)
    {
        _151 = 0;
    }
    if (_205)
    {
        _209 = 0;
    }
    if (_205)
    {
        _153 = 0;
    }
    if (_205)
    {
        _77.x = intBitsToFloat(_207);
        _77.y = intBitsToFloat(_151);
        _77.z = intBitsToFloat(_209);
        _77.w = intBitsToFloat(_153);
        return;
    }
    float _211 = _79.x;
    float _213 = _79.y;
    float _215 = _79.z;
    float _217 = fma(_169, -_173, _169);
    float _219 = fma(_127, -fp_c5_1._m0[23].y, _125 * (-fp_c5_1._m0[23].x));
    float _221 = fma(_171, -_173, _171);
    float _223 = fma(_175, -_173, _175);
    float _225 = fma(_169 + (-0.039999999105930328369140625), _173, fp_c1_1._m0[0].z);
    float _227 = fma(_171 + (-0.039999999105930328369140625), _173, fp_c1_1._m0[0].z);
    float _229 = fma(_175 + (-0.039999999105930328369140625), _173, fp_c1_1._m0[0].z);
    float _231 = clamp(fma(_131, -fp_c5_1._m0[23].z, _219), 0.0, 1.0);
    float _233 = inversesqrt(fma(_215, _215, fma(_213, _213, _211 * _211)));
    float _235 = clamp((-fma(max((-_100.y) + 1.0, (-_100.x) + 1.0), clamp(_81.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_70.x * gl_FragCoord.w) * _92, (_70.y * gl_FragCoord.w) * _92)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _237 = _211 * (-_233);
    float _239 = _213 * (-_233);
    float _241 = _215 * (-_233);
    float _243 = fma(_131, _241, fma(_127, _239, _125 * _237));
    float _245 = _229;
    float _247 = _227;
    float _249 = _225;
    float _269;
    float _271;
    float _273;
    float _275;
    float _277;
    float _279;
    float _281;
    float _283;
    float _285;
    float _287;
    float _289;
    if (_141)
    {
        float _251 = max(_243, fp_c1_1._m0[0].w);
        vec2 _253 = texture(fp_tex_tcb_38, vec2(_251, (-_177) + (-0.0))).xy;
        float _255 = fma(_131, -_241, fma(_127, -_239, _125 * (-_237)));
        float _257 = fma(_125 * _255, -2.0, -_237);
        float _259 = fma(_127 * _255, -2.0, -_239);
        float _261 = fma(_131 * _255, -2.0, -_241);
        float _263 = 1.0 / max(abs(_261), max(abs(_257), abs(_259)));
        vec3 _265 = texture(fp_tex_tcb_36, vec4(_257 * _263, _259 * _263, _261 * _263, float(12)), 0.0).xyz;
        float _267 = fma(_253.x, fp_c7_1._m0[19].x, _253.y);
        _269 = fma(_127 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _271 = _125 * fp_c7_1._m0[19].z;
        _273 = _131 * fp_c7_1._m0[19].z;
        _275 = _251;
        _277 = 0.0;
        _245 = fp_c7_1._m0[19].x;
        _279 = 0.0;
        _281 = 0.0;
        _247 = fp_c7_1._m0[19].x;
        _283 = _265.z * _267;
        _249 = fp_c7_1._m0[19].x;
        _285 = _265.y * _267;
        _287 = _265.x * _267;
        _289 = 1.0;
    }
    else
    {
        float _291 = max(_243, fp_c1_1._m0[0].w);
        vec2 _293 = texture(fp_tex_tcb_38, vec2(_291, (-_177) + (-0.0))).xy;
        float _295 = _293.x;
        float _297 = _293.y;
        float _299 = fma(_131, -_241, fma(_127, -_239, _125 * (-_237)));
        float _301 = fma(_125 * _299, -2.0, -_237);
        float _303 = fma(_127 * _299, -2.0, -_239);
        float _305 = fma(_131 * _299, -2.0, -_241);
        float _307 = 1.0 / max(abs(_305), max(abs(_301), abs(_303)));
        vec3 _309 = texture(fp_tex_tcb_36, vec4(_301 * _307, _303 * _307, _305 * _307, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_177 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _311 = _81.y;
        float _313 = _311 + (-fp_c9_1._m0[32].w);
        float _315 = _313;
        _269 = _127;
        _273 = _131;
        _275 = _291;
        if (_311 < fp_c9_1._m0[32].w)
        {
            _315 = _313 * (-5.0);
        }
        float _317 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w) * max(0.0, ((-_127) + 1.2000000476837158203125) * (clamp(fma(_315, -(1.0 / fma(clamp((-_127) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_315, -(1.0 / fma(clamp((-_127) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0)));
        float _319 = fma(_127, -fma(_131, -fp_c5_1._m0[23].z, _219), _127);
        _271 = _125;
        _277 = _317 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _279 = _317 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _281 = _317 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _283 = fma(_229, _295, _297) * _309.z;
        _285 = fma(_227, _295, _297) * _309.y;
        _287 = fma(_225, _295, _297) * _309.x;
        _289 = clamp(fma(_319, clamp(_123 * (-7.0), 0.0, 1.0), -_319) + fp_c1_1._m0[1].y, 0.0, 1.0);
    }
    float _321 = _237 + (-fp_c5_1._m0[23].x);
    float _323 = _81.z;
    float _325 = _269 * _271;
    float _327 = _81.x;
    float _329 = _239 + (-fp_c5_1._m0[23].y);
    float _331 = _273 * _269;
    float _333 = _241 + (-fp_c5_1._m0[23].z);
    float _335 = inversesqrt(fma(_333, _333, fma(_329, _329, _321 * _321)));
    float _337 = _273 * _271;
    float _339 = fma(_271, _271, -(_269 * _269));
    float _341 = _321 * _335;
    float _343 = _329 * _335;
    float _345 = _333 * _335;
    float _347 = _273 * _273;
    int _349 = max(0, min(int(trunc((_323 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _351 = fma(_177, 0.5, 0.5);
    float _353 = _177 * _177;
    float _355 = max(fma(_131, _345, fma(_127, _343, _125 * _341)), fp_c1_1._m0[0].w) * max(fma(_131, _345, fma(_127, _343, _125 * _341)), fp_c1_1._m0[0].w);
    float _357 = max(fma(_241, _345, fma(_239, _343, _237 * _341)), fp_c1_1._m0[0].w);
    float _359 = (_351 * 0.5) * _351;
    uint _362 = uint(int(uint((((int(uint(_349) >> uint(16)) * 20) << 16) + (((_349 & 65535) * 20) + max(0, min(int(trunc((_327 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _364 = fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3];
    float _366 = 1.0 / (_359 + fma(_275, -_359, _275));
    float _368 = exp2(_357 * fma(_357, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _370 = fma(max(0.0, fma(_339, fp_c5_1._m0[31].z, (fma(_273, fp_c5_1._m0[27].z, fma(_269, fp_c5_1._m0[27].y, _271 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_337, fp_c5_1._m0[30].w, fma(_347, fp_c5_1._m0[30].z, fma(_331, fp_c5_1._m0[30].y, _325 * fp_c5_1._m0[30].x))))) + _279, fma(_223, -_245, _223), _283);
    float _372 = fma(max(0.0, fma(_339, fp_c5_1._m0[31].y, (fma(_273, fp_c5_1._m0[26].z, fma(_269, fp_c5_1._m0[26].y, _271 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_337, fp_c5_1._m0[29].w, fma(_347, fp_c5_1._m0[29].z, fma(_331, fp_c5_1._m0[29].y, _325 * fp_c5_1._m0[29].x))))) + _277, fma(_221, -_247, _221), _285);
    float _374 = (_366 * (1.0 / (_359 + fma(max(fma(_131, -fp_c5_1._m0[23].z, _219), fp_c1_1._m0[0].w), -_359, max(fma(_131, -fp_c5_1._m0[23].z, _219), fp_c1_1._m0[0].w))))) * ((_353 * (1.0 / max(fma(_355, _353 * _353, -_355) + 1.0, fp_c1_1._m0[0].w))) * (_353 * (1.0 / max(fma(_355, _353 * _353, -_355) + 1.0, fp_c1_1._m0[0].w))));
    float _376 = fma(max(0.0, fma(_339, fp_c5_1._m0[31].x, (fma(_273, fp_c5_1._m0[25].z, fma(_269, fp_c5_1._m0[25].y, _271 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_337, fp_c5_1._m0[28].w, fma(_347, fp_c5_1._m0[28].z, fma(_331, fp_c5_1._m0[28].y, _325 * fp_c5_1._m0[28].x))))) + _281, fma(_217, -_249, _217), _287);
    float _378 = _372;
    float _380 = _370;
    float _382 = _376;
    float _384 = _376;
    float _386 = _372;
    float _388 = _370;
    if (floatBitsToInt(_364) != (-1))
    {
        int _390 = floatBitsToInt(_364);
        int _392 = 0;
        float _396;
        float _398;
        float _400;
        int _482;
        do
        {
            int _394 = _390 & 255;
            _396 = _382;
            _398 = _378;
            _400 = _380;
            _402 = uint(_394) >= 30u;
            if (_402)
            {
                break;
            }
            int _404 = _394 << 4;
            uint _406 = uint(int(uint(_404 + 7360) >> uint(2)));
            int _408 = int(_406) + 1;
            uint _410 = uint(int(uint(_404 + 7368) >> uint(2)));
            float _412 = (-_327) + fp_c10_1._m0[int(uint(int(_406)) >> uint(2))][int(_406) & 3];
            float _414 = (-_81.y) + fp_c10_1._m0[int(uint(_408) >> uint(2))][_408 & 3];
            float _416 = (-_323) + fp_c10_1._m0[int(uint(int(_410)) >> uint(2))][int(_410) & 3];
            float _418 = fma(_416, _416, fma(_414, _414, _412 * _412));
            float _420 = _412 * inversesqrt(_418);
            float _422 = _414 * inversesqrt(_418);
            float _424 = _416 * inversesqrt(_418);
            float _426 = _237 + _420;
            float _428 = _239 + _422;
            float _430 = _241 + _424;
            float _432 = inversesqrt(fma(_430, _430, fma(_428, _428, _426 * _426)));
            float _434 = _426 * _432;
            float _436 = _428 * _432;
            float _438 = _430 * _432;
            uint _440 = uint(int(uint(_404 + 6880) >> uint(2)));
            int _442 = int(_440) + 1;
            uint _444 = uint(int(uint(_404 + 8320) >> uint(2)));
            float _446 = max(fma(_241, _438, fma(_239, _436, _237 * _434)), fp_c1_1._m0[0].w);
            float _448 = fma(_131, _424, fma(_127, _422, _125 * _420));
            float _450 = max(fma(_131, _438, fma(_127, _436, _125 * _434)), fp_c1_1._m0[0].w) * max(fma(_131, _438, fma(_127, _436, _125 * _434)), fp_c1_1._m0[0].w);
            float _452 = max(_448, fp_c1_1._m0[0].w);
            uint _454 = uint(int(uint(_404 + 6408) >> uint(2)));
            uint _456 = uint(int(uint(_404 + 6400) >> uint(2)));
            int _458 = int(_456) + 1;
            float _460 = exp2(_446 * fma(_446, fp_c1_1._m0[1].z, -6.9831600189208984375));
            bool _462 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_444)) >> uint(2))][int(_444) & 3]) != 0;
            float _464 = (_366 * (1.0 / (_359 + fma(_359, -_452, _452)))) * ((_353 * (1.0 / max(fma(_353 * _353, _450, -_450) + 1.0, fp_c1_1._m0[0].w))) * (_353 * (1.0 / max(fma(_353 * _353, _450, -_450) + 1.0, fp_c1_1._m0[0].w))));
            float _466 = _464;
            if (!_462)
            {
                _466 = 1.0;
            }
            float _468 = _466;
            if (_462)
            {
                uint _470 = uint(int(uint(_404 + 7840) >> uint(2)));
                int _472 = int(_470) + 1;
                uint _474 = uint(int(uint(_404 + 7848) >> uint(2)));
                uint _476 = uint(int(uint(_404 + 6888) >> uint(2)));
                float _478 = fp_c10_1._m0[int(uint(int(_476)) >> uint(2))][int(_476) & 3];
                int _480 = int(_476) + 1;
                _468 = exp2(fp_c10_1._m0[int(uint(_480) >> uint(2))][_480 & 3] * log2(clamp(((-_478) + fma(_424, -fp_c10_1._m0[int(uint(int(_474)) >> uint(2))][int(_474) & 3], fma(_422, -fp_c10_1._m0[int(uint(_472) >> uint(2))][_472 & 3], _420 * (-fp_c10_1._m0[int(uint(int(_470)) >> uint(2))][int(_470) & 3])))) * (1.0 / ((-_478) + 1.0)), 0.0, 1.0)));
            }
            _482 = _392 + 1;
            float _484 = (exp2(fp_c10_1._m0[int(uint(_442) >> uint(2))][_442 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_440)) >> uint(2))][int(_440) & 3], -sqrt(_418), fp_c1_1._m0[1].x), 0.0, 1.0))) * _468) * clamp(_448 + (-0.0), 0.0, 1.0);
            float _486 = fma(fp_c10_1._m0[int(uint(_458) >> uint(2))][_458 & 3] * _484, fma(_221, fp_c1_1._m0[2].x, ((fma(_460, -_247, _460) + _247) * _464) * 0.079577468335628509521484375), _378);
            float _488 = fma(fp_c10_1._m0[int(uint(int(_454)) >> uint(2))][int(_454) & 3] * _484, fma(_223, fp_c1_1._m0[2].x, ((fma(_460, -_245, _460) + _245) * _464) * 0.079577468335628509521484375), _380);
            float _490 = fma(fp_c10_1._m0[int(uint(int(_456)) >> uint(2))][int(_456) & 3] * _484, fma(_217, fp_c1_1._m0[2].x, ((fma(_460, -_249, _460) + _249) * _464) * 0.079577468335628509521484375), _382);
            _390 = int(uint(_390) >> uint(8));
            _392 = _482;
            _378 = _486;
            _380 = _488;
            _382 = _490;
            _396 = _490;
            _398 = _486;
            _400 = _488;
        } while (!(_482 >= 4));
        _402 = false;
        _384 = _396;
        _386 = _398;
        _388 = _400;
        if ((_390 & 255) == 30)
        {
            float _492 = _81.y;
            float _494 = 1.0 / (fma(_323, fp_c10_1._m0[565].z, fma(_492, fp_c10_1._m0[565].y, _327 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _496 = 1.0 / fp_c10_1._m0[561].y;
            float _498 = _327 + (-fp_c10_1._m0[557].x);
            float _500 = _323 + (-fp_c10_1._m0[557].z);
            float _502 = _498 * fp_c10_1._m0[558].z;
            float _504 = _500 * fp_c10_1._m0[558].x;
            float _506 = (-_327) + fma(_496, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _508 = (-_323) + fma(_496, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _510 = _506 * _506;
            float _512 = ((-float(_504 < _502)) + float(_504 > _502)) * fp_c10_1._m0[561].y;
            float _514 = sqrt(fma(_508, _508, _510)) * (-fp_c10_1._m0[558].y);
            float _516 = inversesqrt(fma(_508, _508, fma(_514, _514, _510)));
            float _518 = _506 * _516;
            float _520 = _514 * _516;
            float _522 = _508 * _516;
            float _524 = _237 + _518;
            float _526 = _239 + _520;
            float _528 = _241 + _522;
            float _530 = inversesqrt(fma(_528, _528, fma(_526, _526, _524 * _524)));
            float _532 = _524 * _530;
            float _534 = _526 * _530;
            float _536 = _528 * _530;
            float _538 = fma(_131, _522, fma(_127, _520, _125 * _518));
            float _540 = fma(_500, _500, _498 * _498);
            float _542 = max(fma(_131, _536, fma(_127, _534, _125 * _532)), fp_c1_1._m0[0].w) * max(fma(_131, _536, fma(_127, _534, _125 * _532)), fp_c1_1._m0[0].w);
            float _544 = max(fma(_241, _536, fma(_239, _534, _237 * _532)), fp_c1_1._m0[0].w);
            float _546 = fma(_500, fp_c10_1._m0[558].z, _498 * fp_c10_1._m0[558].x);
            float _548 = inversesqrt(fma(_522, _522, _518 * _518));
            bool _550 = _546 > 0.0;
            float _552 = _518;
            if (_550)
            {
                _552 = sqrt(_540);
            }
            float _554 = _552;
            if (!_550)
            {
                _554 = 1.0;
            }
            bool _556 = fma(_500 * inversesqrt(_540), fp_c10_1._m0[558].z, (_498 * inversesqrt(_540)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _558 = max(_538, fp_c1_1._m0[0].w);
            float _560 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_498, fma(_512, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_500 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_512 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_498, fma(_512, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_500 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_512 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _562 = fma(_359, -_558, _558);
            float _564 = clamp(fma(_546 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_546 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _566 = _562;
            if (!_556)
            {
                _566 = 1.0;
            }
            float _568 = _566;
            if (_556)
            {
                _568 = fma(_560, -_560, fp_c1_1._m0[1].x) * fma(_560, -_560, fp_c1_1._m0[1].x);
            }
            float _570 = exp2(_544 * fma(_544, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _572 = clamp(_538 + (-0.0), 0.0, 1.0) * ((exp2(log2(clamp(fma(_554, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_522 * _548, -fp_c10_1._m0[558].z, (_518 * _548) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_564, -_564, fp_c1_1._m0[1].x) * fma(_564, -_564, fp_c1_1._m0[1].x), _568));
            float _574 = (_366 * (1.0 / (_359 + _562))) * ((_353 * (1.0 / max(fma(_353 * _353, _542, -_542) + 1.0, fp_c1_1._m0[0].w))) * (_353 * (1.0 / max(fma(_353 * _353, _542, -_542) + 1.0, fp_c1_1._m0[0].w))));
            float _576 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_323, fp_c10_1._m0[562].z, fma(_492, fp_c10_1._m0[562].y, _327 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _494, 0.5, 0.5), (-fma((fma(_323, fp_c10_1._m0[563].z, fma(_492, fp_c10_1._m0[563].y, _327 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _494, 0.5, 0.5)) + 1.0)).z > fma((fma(_323, fp_c10_1._m0[564].z, fma(_492, fp_c10_1._m0[564].y, _327 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _494, 0.5, 0.5)) || (_546 <= 0.0));
            _384 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _572) * fma(_217, fp_c1_1._m0[2].x, ((fma(_570, -_249, _570) + _249) * _574) * 0.079577468335628509521484375), _576, _396);
            _386 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _572) * fma(_221, fp_c1_1._m0[2].x, ((fma(_570, -_247, _570) + _247) * _574) * 0.079577468335628509521484375), _576, _398);
            _388 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _572) * fma(_223, fp_c1_1._m0[2].x, ((fma(_570, -_245, _570) + _245) * _574) * 0.079577468335628509521484375), _576, _400);
        }
    }
    float _578 = _327 + (-fp_c3_1._m0[11].w);
    float _580 = _81.y;
    float _582 = _323 + (-fp_c3_1._m0[13].w);
    float _584 = fma(_179, fp_c6_1._m0[11].x, fma(_235, ((_231 * fp_c5_1._m0[5].x) * fma((fma(_368, -_249, _368) + _249) * _374, fp_c1_1._m0[1].w, _217 * 0.3183098733425140380859375)) * _289, _384)) + _185;
    float _586 = fma(_181, fp_c6_1._m0[11].x, fma(_235, ((_231 * fp_c5_1._m0[5].y) * fma((fma(_368, -_247, _368) + _247) * _374, fp_c1_1._m0[1].w, _221 * 0.3183098733425140380859375)) * _289, _386)) + _187;
    float _588 = fma(_183, fp_c6_1._m0[11].x, fma(_235, ((_231 * fp_c5_1._m0[5].z) * fma((fma(_368, -_245, _368) + _245) * _374, fp_c1_1._m0[1].w, _223 * 0.3183098733425140380859375)) * _289, _388)) + _189;
    float _590 = _580 + (-fp_c3_1._m0[12].w);
    float _592 = fma(_582, _582, fma(_590, _590, _578 * _578));
    float _594 = clamp(fma(fma(_323, fp_c5_1._m0[14].z, fma(_580, fp_c5_1._m0[14].y, _327 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _596 = clamp(fma(_235, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _598 = exp2(log2(clamp(sqrt(_592) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_582 * inversesqrt(_592), fp_c5_1._m0[23].z, fma(_590 * inversesqrt(_592), fp_c5_1._m0[23].y, (_578 * inversesqrt(_592)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _600 = fma((-_584) + fp_c5_1._m0[13].x, _594, _584);
    float _602 = fma((-_586) + fp_c5_1._m0[13].y, _594, _586);
    float _604 = fma((-_588) + fp_c5_1._m0[13].z, _594, _588);
    float _606 = clamp((-exp2((clamp(fma(sqrt(_592), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _77.x = fma((-_600) + fma(fma(_596 * (_598 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _606, _600);
    _77.y = fma((-_602) + fma(fma(_596 * (_598 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _606, _602);
    _77.z = fma((-_604) + fma(fma(_596 * (_598 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _606, _604);
    _77.w = clamp(_165 + (-0.0), 0.0, 1.0);
}


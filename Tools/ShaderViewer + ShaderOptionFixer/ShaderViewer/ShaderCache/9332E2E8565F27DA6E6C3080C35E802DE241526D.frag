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
layout(binding = 2) uniform sampler2D fp_tex_tcb_26;
layout(binding = 3) uniform sampler2D fp_tex_tcb_28;
layout(binding = 4) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 5) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 6) uniform sampler2D fp_tex_tcb_38;
layout(binding = 7) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _64;
layout(location = 5) in vec4 _66;
layout(location = 4) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 0) out vec4 _73;
layout(location = 3) in vec4 _75;
layout(location = 2) in vec4 _77;
uint _6[12];

void main()
{
    bool _392 = false;
    float _84 = _64.x;
    float _86 = _64.y;
    float _88 = texture(fp_tex_tcb_8, vec2(_84, _86)).x;
    float _90 = 1.0 / (_66.z * gl_FragCoord.w);
    bool _94 = _88 <= 0.0;
    if (_94)
    {
        discard;
    }
    vec3 _98 = texture(fp_tex_tcb_A, vec2(_84, _86)).xyz;
    float _100 = 1.0 / _68.w;
    vec2 _104 = texture(fp_tex_tcb_2A, vec2(fma(_68.x * _100, 0.5, 0.5), fma(_68.y * _100, -0.5, 0.5))).xy;
    float _106 = _70.x;
    float _108 = _70.y;
    int _111 = floatBitsToInt(fp_c6_1._m0[25].w) + (-1);
    float _113 = _70.z;
    float _115 = min((texture(fp_tex_tcb_26, vec2(_84, _86)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _117 = _115 * float((-abs(_111)) + 1);
    float _119 = inversesqrt(fma(_113, _113, fma(_108, _108, _106 * _106)));
    float _121 = _115 * float(max(0, (-_111)));
    float _123 = _115 * float(max(0, _111));
    float _125 = max(_123, max(_117, _121));
    float _127 = _106 * _119;
    float _129 = _108 * _119;
    float _131 = _113 * _119;
    float _133 = _125 + (-fp_c7_1._m0[21].w);
    float _135 = clamp(_133 + (-0.0), 0.0, 1.0);
    float _137 = clamp(((_117 + (-_125)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _139 = clamp(((_121 + (-_125)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _141 = clamp(((_123 + (-_125)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    bool _143 = min(_135 * 1000.0, 1.0) > 0.5;
    float _145 = fma(_141, fp_c8_1._m0[17].x, fma(_139, fp_c8_1._m0[3].x, _137 * fp_c8_1._m0[10].x));
    float _147 = fma(_141, fp_c8_1._m0[18].x, fma(_139, fp_c8_1._m0[4].x, _137 * fp_c8_1._m0[11].x));
    float _149 = fma(_141, fp_c8_1._m0[18].y, fma(_139, fp_c8_1._m0[4].y, _137 * fp_c8_1._m0[11].y));
    float _151 = fma(_141, fp_c8_1._m0[18].z, fma(_139, fp_c8_1._m0[4].z, _137 * fp_c8_1._m0[11].z));
    int _153 = floatBitsToInt(_151);
    int _155 = floatBitsToInt(_145);
    int _157 = floatBitsToInt(_139);
    int _159 = floatBitsToInt(_135);
    float _161 = _98.x;
    float _163 = _98.y;
    float _165 = _98.z;
    float _181;
    float _183;
    float _185;
    float _187;
    float _189;
    if (_143)
    {
        float _167 = fma(_149, -fp_c7_1._m0[45].y, fma(_141, fp_c8_1._m0[17].y, fma(_139, fp_c8_1._m0[3].y, _137 * fp_c8_1._m0[10].y)));
        float _169 = clamp(_135 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _171 = fma(_147, -fp_c7_1._m0[45].y, _145);
        float _173 = _151 * fp_c7_1._m0[45].y;
        float _175 = fma(_169, _171, _147 * fp_c7_1._m0[45].y);
        float _177 = fma(_169, _167, _149 * fp_c7_1._m0[45].y);
        float _179 = fma(_169, fma(_151, -fp_c7_1._m0[45].y, fma(_141, fp_c8_1._m0[17].z, fma(_139, fp_c8_1._m0[3].z, _137 * fp_c8_1._m0[10].z))), _173);
        _153 = floatBitsToInt(_173);
        _155 = floatBitsToInt(_171);
        _157 = floatBitsToInt(_167);
        _159 = floatBitsToInt(_169);
        _181 = 0.0;
        _161 = _175;
        _163 = _177;
        _165 = _179;
        _183 = fp_c7_1._m0[18].w;
        _185 = _175 * fp_c7_1._m0[18].z;
        _187 = _177 * fp_c7_1._m0[18].z;
        _189 = _179 * fp_c7_1._m0[18].z;
    }
    else
    {
        _181 = fp_c6_1._m0[9].x;
        _183 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].y);
        _185 = 0.0;
        _187 = 0.0;
        _189 = 0.0;
    }
    int _191 = _153;
    int _193 = _155;
    int _195 = _157;
    int _197 = _159;
    if (_94)
    {
        _191 = 0;
    }
    if (_94)
    {
        _193 = 0;
    }
    if (_94)
    {
        _195 = 0;
    }
    if (_94)
    {
        _197 = 0;
    }
    if (_94)
    {
        _73.x = intBitsToFloat(_191);
        _73.y = intBitsToFloat(_193);
        _73.z = intBitsToFloat(_195);
        _73.w = intBitsToFloat(_197);
        return;
    }
    float _199 = _75.x;
    float _201 = _75.y;
    float _203 = _75.z;
    float _205 = fma(_161, -_181, _161);
    float _207 = fma(_163, -_181, _163);
    float _209 = fma(_165, -_181, _165);
    float _211 = fma(_161 + (-0.039999999105930328369140625), _181, fp_c1_1._m0[0].z);
    float _213 = fma(_129, -fp_c5_1._m0[23].y, _127 * (-fp_c5_1._m0[23].x));
    float _215 = fma(_163 + (-0.039999999105930328369140625), _181, fp_c1_1._m0[0].z);
    float _217 = fma(_165 + (-0.039999999105930328369140625), _181, fp_c1_1._m0[0].z);
    float _219 = clamp(fma(_131, -fp_c5_1._m0[23].z, _213), 0.0, 1.0);
    float _221 = inversesqrt(fma(_203, _203, fma(_201, _201, _199 * _199)));
    float _223 = clamp((-fma(max((-_104.y) + 1.0, (-_104.x) + 1.0), clamp(_77.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_66.x * gl_FragCoord.w) * _90, (_66.y * gl_FragCoord.w) * _90)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _225 = _199 * (-_221);
    float _227 = _201 * (-_221);
    float _229 = _203 * (-_221);
    float _231 = fma(_131, _229, fma(_129, _227, _127 * _225));
    float _233 = _211;
    float _235 = _215;
    float _237 = _217;
    float _257;
    float _259;
    float _261;
    float _263;
    float _265;
    float _267;
    float _269;
    float _271;
    float _273;
    float _275;
    float _277;
    if (_143)
    {
        float _239 = max(_231, fp_c1_1._m0[0].w);
        vec2 _241 = texture(fp_tex_tcb_38, vec2(_239, (-_183) + (-0.0))).xy;
        float _243 = fma(_131, -_229, fma(_129, -_227, _127 * (-_225)));
        float _245 = fma(_127 * _243, -2.0, -_225);
        float _247 = fma(_129 * _243, -2.0, -_227);
        float _249 = fma(_131 * _243, -2.0, -_229);
        float _251 = 1.0 / max(abs(_249), max(abs(_245), abs(_247)));
        vec3 _253 = texture(fp_tex_tcb_36, vec4(_245 * _251, _247 * _251, _249 * _251, float(12)), 0.0).xyz;
        float _255 = fma(_241.x, fp_c7_1._m0[19].x, _241.y);
        _257 = fma(_129 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _259 = _127 * fp_c7_1._m0[19].z;
        _261 = _131 * fp_c7_1._m0[19].z;
        _263 = _239;
        _265 = 0.0;
        _233 = fp_c7_1._m0[19].x;
        _267 = 0.0;
        _235 = fp_c7_1._m0[19].x;
        _269 = 0.0;
        _271 = _253.y * _255;
        _237 = fp_c7_1._m0[19].x;
        _273 = _253.x * _255;
        _275 = _253.z * _255;
        _277 = 1.0;
    }
    else
    {
        float _279 = max(_231, fp_c1_1._m0[0].w);
        float _281 = fma(_131, -_229, fma(_129, -_227, _127 * (-_225)));
        float _283 = fma(_127 * _281, -2.0, -_225);
        float _285 = fma(_129 * _281, -2.0, -_227);
        float _287 = fma(_131 * _281, -2.0, -_229);
        float _289 = 1.0 / max(abs(_287), max(abs(_283), abs(_285)));
        vec2 _291 = texture(fp_tex_tcb_38, vec2(_279, (-_183) + (-0.0))).xy;
        float _293 = _291.x;
        float _295 = _291.y;
        vec3 _297 = texture(fp_tex_tcb_36, vec4(_283 * _289, _285 * _289, _287 * _289, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_183 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _299 = _77.y;
        float _301 = fma(_129, -fma(_131, -fp_c5_1._m0[23].z, _213), _129);
        float _303 = _299 + (-fp_c9_1._m0[32].w);
        float _305 = _303;
        _257 = _129;
        _261 = _131;
        _263 = _279;
        _277 = clamp(fma(_301, clamp(_133 * (-7.0), 0.0, 1.0), -_301) + fp_c1_1._m0[1].y, 0.0, 1.0);
        if (_299 < fp_c9_1._m0[32].w)
        {
            _305 = _303 * (-5.0);
        }
        float _307 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w) * max(0.0, ((-_129) + 1.2000000476837158203125) * (clamp(fma(_305, -(1.0 / fma(clamp((-_129) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_305, -(1.0 / fma(clamp((-_129) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0)));
        _259 = _127;
        _265 = _307 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _267 = _307 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _269 = _307 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _271 = fma(_215, _293, _295) * _297.y;
        _273 = fma(_211, _293, _295) * _297.x;
        _275 = fma(_217, _293, _295) * _297.z;
    }
    float _309 = _225 + (-fp_c5_1._m0[23].x);
    float _311 = _77.x;
    float _313 = _227 + (-fp_c5_1._m0[23].y);
    float _315 = _77.z;
    float _317 = _257 * _259;
    float _319 = _229 + (-fp_c5_1._m0[23].z);
    float _321 = _261 * _257;
    float _323 = _261 * _261;
    float _325 = fma(_183, 0.5, 0.5);
    float _327 = _183 * _183;
    float _329 = (_325 * 0.5) * _325;
    float _331 = inversesqrt(fma(_319, _319, fma(_313, _313, _309 * _309)));
    float _333 = _309 * _331;
    float _335 = 1.0 / (_329 + fma(_263, -_329, _263));
    float _337 = _313 * _331;
    float _339 = _319 * _331;
    float _341 = fma(_259, _259, -(_257 * _257));
    float _343 = _261 * _259;
    int _345 = max(0, min(int(trunc((_315 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _347 = _327 * _327;
    float _349 = max(fma(_229, _339, fma(_227, _337, _225 * _333)), fp_c1_1._m0[0].w);
    uint _352 = uint(int(uint((((int(uint(_345) >> uint(16)) * 20) << 16) + (((_345 & 65535) * 20) + max(0, min(int(trunc((_311 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _354 = fp_c10_1._m0[int(uint(int(_352)) >> uint(2))][int(_352) & 3];
    float _356 = max(fma(_131, _339, fma(_129, _337, _127 * _333)), fp_c1_1._m0[0].w) * max(fma(_131, _339, fma(_129, _337, _127 * _333)), fp_c1_1._m0[0].w);
    float _358 = exp2(_349 * fma(_349, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _360 = fma(max(0.0, fma(_341, fp_c5_1._m0[31].y, (fma(_261, fp_c5_1._m0[26].z, fma(_257, fp_c5_1._m0[26].y, _259 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_343, fp_c5_1._m0[29].w, fma(_323, fp_c5_1._m0[29].z, fma(_321, fp_c5_1._m0[29].y, _317 * fp_c5_1._m0[29].x))))) + _265, fma(_207, -_235, _207), _271);
    float _362 = fma(max(0.0, fma(_341, fp_c5_1._m0[31].x, (fma(_261, fp_c5_1._m0[25].z, fma(_257, fp_c5_1._m0[25].y, _259 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_343, fp_c5_1._m0[28].w, fma(_323, fp_c5_1._m0[28].z, fma(_321, fp_c5_1._m0[28].y, _317 * fp_c5_1._m0[28].x))))) + _267, fma(_205, -_233, _205), _273);
    float _364 = (_335 * (1.0 / (_329 + fma(max(fma(_131, -fp_c5_1._m0[23].z, _213), fp_c1_1._m0[0].w), -_329, max(fma(_131, -fp_c5_1._m0[23].z, _213), fp_c1_1._m0[0].w))))) * ((_327 * (1.0 / max(fma(_356, _347, -_356) + 1.0, fp_c1_1._m0[0].w))) * (_327 * (1.0 / max(fma(_356, _347, -_356) + 1.0, fp_c1_1._m0[0].w))));
    float _366 = fma(max(0.0, fma(_341, fp_c5_1._m0[31].z, (fma(_261, fp_c5_1._m0[27].z, fma(_257, fp_c5_1._m0[27].y, _259 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_343, fp_c5_1._m0[30].w, fma(_323, fp_c5_1._m0[30].z, fma(_321, fp_c5_1._m0[30].y, _317 * fp_c5_1._m0[30].x))))) + _269, fma(_209, -_237, _209), _275);
    int _368 = floatBitsToInt(_354);
    float _370 = _360;
    float _372 = _366;
    float _374 = _362;
    float _376 = _362;
    float _378 = _360;
    float _380 = _366;
    if (floatBitsToInt(_354) != (-1))
    {
        int _382 = 0;
        float _386;
        float _388;
        float _390;
        int _474;
        do
        {
            int _384 = _368 & 255;
            _386 = _374;
            _388 = _370;
            _390 = _372;
            _392 = uint(_384) >= 30u;
            if (_392)
            {
                break;
            }
            int _394 = _384 << 4;
            uint _396 = uint(int(uint(_394 + 7360) >> uint(2)));
            int _398 = int(_396) + 1;
            uint _400 = uint(int(uint(_394 + 7368) >> uint(2)));
            float _402 = (-_311) + fp_c10_1._m0[int(uint(int(_396)) >> uint(2))][int(_396) & 3];
            float _404 = (-_77.y) + fp_c10_1._m0[int(uint(_398) >> uint(2))][_398 & 3];
            float _406 = (-_315) + fp_c10_1._m0[int(uint(int(_400)) >> uint(2))][int(_400) & 3];
            float _408 = fma(_406, _406, fma(_404, _404, _402 * _402));
            float _410 = _402 * inversesqrt(_408);
            float _412 = _404 * inversesqrt(_408);
            float _414 = _406 * inversesqrt(_408);
            float _416 = _225 + _410;
            float _418 = _227 + _412;
            float _420 = _229 + _414;
            uint _422 = uint(int(uint(_394 + 6880) >> uint(2)));
            int _424 = int(_422) + 1;
            float _426 = inversesqrt(fma(_420, _420, fma(_418, _418, _416 * _416)));
            float _428 = _416 * _426;
            float _430 = _418 * _426;
            float _432 = _420 * _426;
            float _434 = fma(_131, _414, fma(_129, _412, _127 * _410));
            float _436 = max(_434, fp_c1_1._m0[0].w);
            uint _438 = uint(int(uint(_394 + 8320) >> uint(2)));
            float _440 = max(fma(_229, _432, fma(_227, _430, _225 * _428)), fp_c1_1._m0[0].w);
            float _442 = max(fma(_131, _432, fma(_129, _430, _127 * _428)), fp_c1_1._m0[0].w) * max(fma(_131, _432, fma(_129, _430, _127 * _428)), fp_c1_1._m0[0].w);
            uint _444 = uint(int(uint(_394 + 6408) >> uint(2)));
            uint _446 = uint(int(uint(_394 + 6400) >> uint(2)));
            int _448 = int(_446) + 1;
            float _450 = fp_c10_1._m0[int(uint(_424) >> uint(2))][_424 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_422)) >> uint(2))][int(_422) & 3], -sqrt(_408), fp_c1_1._m0[1].x), 0.0, 1.0));
            float _452 = exp2(_440 * fma(_440, fp_c1_1._m0[1].z, -6.9831600189208984375));
            bool _454 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_438)) >> uint(2))][int(_438) & 3]) != 0;
            float _456 = (_335 * (1.0 / (_329 + fma(_329, -_436, _436)))) * ((_327 * (1.0 / max(fma(_347, _442, -_442) + 1.0, fp_c1_1._m0[0].w))) * (_327 * (1.0 / max(fma(_347, _442, -_442) + 1.0, fp_c1_1._m0[0].w))));
            float _458 = _450;
            if (!_454)
            {
                _458 = 1.0;
            }
            float _460 = _458;
            if (_454)
            {
                uint _462 = uint(int(uint(_394 + 7840) >> uint(2)));
                int _464 = int(_462) + 1;
                uint _466 = uint(int(uint(_394 + 6888) >> uint(2)));
                float _468 = fp_c10_1._m0[int(uint(int(_466)) >> uint(2))][int(_466) & 3];
                int _470 = int(_466) + 1;
                uint _472 = uint(int(uint(_394 + 7848) >> uint(2)));
                _460 = exp2(fp_c10_1._m0[int(uint(_470) >> uint(2))][_470 & 3] * log2(clamp(((-_468) + fma(_414, -fp_c10_1._m0[int(uint(int(_472)) >> uint(2))][int(_472) & 3], fma(_412, -fp_c10_1._m0[int(uint(_464) >> uint(2))][_464 & 3], _410 * (-fp_c10_1._m0[int(uint(int(_462)) >> uint(2))][int(_462) & 3])))) * (1.0 / ((-_468) + 1.0)), 0.0, 1.0)));
            }
            _474 = _382 + 1;
            float _476 = (exp2(_450) * _460) * clamp(_434 + (-0.0), 0.0, 1.0);
            float _478 = fma(fp_c10_1._m0[int(uint(_448) >> uint(2))][_448 & 3] * _476, fma(_207, fp_c1_1._m0[2].x, ((fma(_452, -_235, _452) + _235) * _456) * 0.079577468335628509521484375), _370);
            float _480 = fma(fp_c10_1._m0[int(uint(int(_444)) >> uint(2))][int(_444) & 3] * _476, fma(_209, fp_c1_1._m0[2].x, ((fma(_452, -_237, _452) + _237) * _456) * 0.079577468335628509521484375), _372);
            float _482 = fma(fp_c10_1._m0[int(uint(int(_446)) >> uint(2))][int(_446) & 3] * _476, fma(_205, fp_c1_1._m0[2].x, ((fma(_452, -_233, _452) + _233) * _456) * 0.079577468335628509521484375), _374);
            _368 = int(uint(_368) >> uint(8));
            _382 = _474;
            _370 = _478;
            _372 = _480;
            _374 = _482;
            _386 = _482;
            _388 = _478;
            _390 = _480;
        } while (!(_474 >= 4));
        _392 = false;
        _376 = _386;
        _378 = _388;
        _380 = _390;
        if ((_368 & 255) == 30)
        {
            float _484 = _77.y;
            float _486 = 1.0 / (fma(_315, fp_c10_1._m0[565].z, fma(_484, fp_c10_1._m0[565].y, _311 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _488 = 1.0 / fp_c10_1._m0[561].y;
            float _490 = _315 + (-fp_c10_1._m0[557].z);
            float _492 = (-_311) + fma(_488, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _494 = (-_315) + fma(_488, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _496 = _492 * _492;
            float _498 = sqrt(fma(_494, _494, _496)) * (-fp_c10_1._m0[558].y);
            float _500 = _490 * fp_c10_1._m0[558].x;
            float _502 = inversesqrt(fma(_494, _494, fma(_498, _498, _496)));
            float _504 = _492 * _502;
            float _506 = _498 * _502;
            float _508 = _494 * _502;
            float _510 = _311 + (-fp_c10_1._m0[557].x);
            float _512 = _225 + _504;
            float _514 = _227 + _506;
            float _516 = _229 + _508;
            float _518 = _510 * fp_c10_1._m0[558].z;
            float _520 = inversesqrt(fma(_516, _516, fma(_514, _514, _512 * _512)));
            float _522 = fma(_490, _490, _510 * _510);
            float _524 = fma(_131, _508, fma(_129, _506, _127 * _504));
            float _526 = _512 * _520;
            float _528 = _514 * _520;
            float _530 = _516 * _520;
            float _532 = ((-float(_500 < _518)) + float(_500 > _518)) * fp_c10_1._m0[561].y;
            float _534 = max(_524, fp_c1_1._m0[0].w);
            float _536 = fma(_490, fp_c10_1._m0[558].z, _510 * fp_c10_1._m0[558].x);
            float _538 = inversesqrt(fma(_508, _508, _504 * _504));
            bool _540 = _536 > 0.0;
            float _542 = max(fma(_229, _530, fma(_227, _528, _225 * _526)), fp_c1_1._m0[0].w);
            float _544 = _508;
            if (_540)
            {
                _544 = sqrt(_522);
            }
            float _546 = _544;
            if (!_540)
            {
                _546 = 1.0;
            }
            bool _548 = fma(_490 * inversesqrt(_522), fp_c10_1._m0[558].z, (_510 * inversesqrt(_522)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _550 = max(fma(_131, _530, fma(_129, _528, _127 * _526)), fp_c1_1._m0[0].w) * max(fma(_131, _530, fma(_129, _528, _127 * _526)), fp_c1_1._m0[0].w);
            float _552 = clamp(fma(_536 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_536 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _554 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_510, fma(_532, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_490 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_532 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_510, fma(_532, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_490 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_532 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _556 = fma(_554, -_554, fp_c1_1._m0[1].x);
            if (!_548)
            {
                _556 = 1.0;
            }
            float _558 = _556;
            if (_548)
            {
                _558 = _556 * _556;
            }
            float _560 = exp2(_542 * fma(_542, fp_c1_1._m0[1].z, -6.9831600189208984375));
            float _562 = clamp(_524 + (-0.0), 0.0, 1.0) * (min(fma(_552, -_552, fp_c1_1._m0[1].x) * fma(_552, -_552, fp_c1_1._m0[1].x), _558) * (exp2(log2(clamp(fma(_546, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_508 * _538, -fp_c10_1._m0[558].z, (_504 * _538) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _564 = (_335 * (1.0 / (_329 + fma(_329, -_534, _534)))) * ((_327 * (1.0 / max(fma(_347, _550, -_550) + 1.0, fp_c1_1._m0[0].w))) * (_327 * (1.0 / max(fma(_347, _550, -_550) + 1.0, fp_c1_1._m0[0].w))));
            float _566 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_315, fp_c10_1._m0[562].z, fma(_484, fp_c10_1._m0[562].y, _311 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _486, 0.5, 0.5), (-fma((fma(_315, fp_c10_1._m0[563].z, fma(_484, fp_c10_1._m0[563].y, _311 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _486, 0.5, 0.5)) + 1.0)).z > fma((fma(_315, fp_c10_1._m0[564].z, fma(_484, fp_c10_1._m0[564].y, _311 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _486, 0.5, 0.5)) || (_536 <= 0.0));
            _376 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _562) * fma(_205, fp_c1_1._m0[2].x, ((fma(_560, -_233, _560) + _233) * _564) * 0.079577468335628509521484375), _566, _386);
            _378 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _562) * fma(_207, fp_c1_1._m0[2].x, ((fma(_560, -_235, _560) + _235) * _564) * 0.079577468335628509521484375), _566, _388);
            _380 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _562) * fma(_209, fp_c1_1._m0[2].x, ((fma(_560, -_237, _560) + _237) * _564) * 0.079577468335628509521484375), _566, _390);
        }
    }
    float _568 = _311 + (-fp_c3_1._m0[11].w);
    float _570 = _77.y;
    float _572 = _315 + (-fp_c3_1._m0[13].w);
    float _574 = fma(_223, ((_219 * fp_c5_1._m0[5].x) * fma((fma(_358, -_233, _358) + _233) * _364, fp_c1_1._m0[1].w, _205 * 0.3183098733425140380859375)) * _277, _376) + _185;
    float _576 = fma(_223, ((_219 * fp_c5_1._m0[5].y) * fma((fma(_358, -_235, _358) + _235) * _364, fp_c1_1._m0[1].w, _207 * 0.3183098733425140380859375)) * _277, _378) + _187;
    float _578 = fma(_223, ((_219 * fp_c5_1._m0[5].z) * fma((fma(_358, -_237, _358) + _237) * _364, fp_c1_1._m0[1].w, _209 * 0.3183098733425140380859375)) * _277, _380) + _189;
    float _580 = _570 + (-fp_c3_1._m0[12].w);
    float _582 = fma(_572, _572, fma(_580, _580, _568 * _568));
    float _584 = clamp(fma(_223, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _586 = clamp(fma(fma(_315, fp_c5_1._m0[14].z, fma(_570, fp_c5_1._m0[14].y, _311 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _588 = exp2(log2(clamp(sqrt(_582) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_572 * inversesqrt(_582), fp_c5_1._m0[23].z, fma(_580 * inversesqrt(_582), fp_c5_1._m0[23].y, (_568 * inversesqrt(_582)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _590 = fma((-_574) + fp_c5_1._m0[13].x, _586, _574);
    float _592 = fma((-_576) + fp_c5_1._m0[13].y, _586, _576);
    float _594 = fma((-_578) + fp_c5_1._m0[13].z, _586, _578);
    float _596 = clamp((-exp2((clamp(fma(sqrt(_582), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _73.x = fma((-_590) + fma(fma((_588 * fp_c7_1._m0[55].x) * _584, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _596, _590);
    _73.y = fma((-_592) + fma(fma((_588 * fp_c7_1._m0[55].y) * _584, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _596, _592);
    _73.z = fma((-_594) + fma(fma((_588 * fp_c7_1._m0[55].z) * _584, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _596, _594);
    _73.w = clamp(_88 + (-0.0), 0.0, 1.0);
}


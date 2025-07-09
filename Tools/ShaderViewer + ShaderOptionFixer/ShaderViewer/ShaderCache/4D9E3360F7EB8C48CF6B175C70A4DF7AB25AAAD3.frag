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

layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 5) in vec4 _74;
layout(location = 0) out vec4 _77;
layout(location = 6) in vec4 _79;
layout(location = 4) in vec4 _81;
layout(location = 3) in vec4 _83;
uint _6[12];

void main()
{
    bool _416 = false;
    float _90 = _68.x;
    float _92 = _68.y;
    float _94 = texture(fp_tex_tcb_8, vec2(_90, _92)).x;
    bool _98 = _94 <= 0.0;
    int _101 = floatBitsToInt(_90);
    int _103 = floatBitsToInt(_92);
    if (_98)
    {
        discard;
    }
    vec2 _107 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _109 = _107.x;
    float _111 = _107.y;
    vec3 _115 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _117 = _70.x;
    float _119 = _70.y;
    float _121 = _70.z;
    float _123 = _72.y;
    float _125 = _72.z;
    float _127 = _72.x;
    float _129 = _72.w;
    float _131 = inversesqrt(fma(_121, _121, fma(_119, _119, _117 * _117)));
    float _133 = _121 * _131;
    float _135 = _117 * _131;
    float _137 = _119 * _131;
    float _139 = (-texture(fp_tex_tcb_26, vec2(_90 + (-fp_c6_1._m0[26].w), _92 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_26, vec2(_90 + fp_c6_1._m0[26].w, _92 + fp_c6_1._m0[26].w)).x;
    float _141 = sqrt(clamp((-fma(_109, _109, _111 * _111)) + 1.0, 0.0, 1.0));
    float _143 = min((texture(fp_tex_tcb_26, vec2(_90, _92)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _145 = fma(clamp(_137 + (-0.0), 0.0, 1.0), (-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, fp_c7_1._m0[20].y);
    float _147 = 1.0 / _74.w;
    float _149 = fma(_135, _141, fma(_109, _127, _111 * (fma(_137, _125, -(_133 * _123)) * _129)));
    float _151 = fma(_127 * _139, fp_c6_1._m0[27].x, _135);
    float _153 = fma(_137, _141, fma(_109, _123, _111 * (fma(_133, _127, -(_135 * _125)) * _129)));
    float _155 = fma(_123 * _139, fp_c6_1._m0[27].x, _137);
    float _157 = max(0.0, max(0.0, _143));
    float _159 = fma(_133, _141, fma(_109, _125, _111 * (fma(_135, _123, -(_137 * _127)) * _129)));
    float _161 = fma(_125 * _139, fp_c6_1._m0[27].x, _133);
    float _163 = _157 + (-fp_c7_1._m0[21].w);
    float _165 = inversesqrt(fma(_159, _159, fma(_153, _153, _149 * _149)));
    float _167 = clamp(_163 + (-0.0), 0.0, 1.0);
    float _169 = inversesqrt(fma(_161, _161, fma(_155, _155, _151 * _151)));
    float _171 = clamp(((-_157) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _173 = clamp(((_143 + (-_157)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _175 = _149 * _165;
    float _177 = _153 * _165;
    float _179 = _159 * _165;
    float _181 = _151 * _169;
    float _183 = _155 * _169;
    bool _185 = min(_167 * 1000.0, 1.0) > 0.5;
    float _187 = _161 * _169;
    float _189 = fma(_171, fp_c8_1._m0[18].x, fma(_173, fp_c8_1._m0[4].x, _171 * fp_c8_1._m0[11].x));
    float _191 = fma(_171, fp_c8_1._m0[18].y, fma(_173, fp_c8_1._m0[4].y, _171 * fp_c8_1._m0[11].y));
    float _193 = fma(_171, fp_c8_1._m0[18].z, fma(_173, fp_c8_1._m0[4].z, _171 * fp_c8_1._m0[11].z));
    int _195 = floatBitsToInt(_167);
    float _197 = _115.x;
    float _199 = _175;
    float _201 = _115.y;
    float _203 = _177;
    float _205 = _179;
    float _207 = _115.z;
    int _209 = floatBitsToInt(_145);
    float _223;
    float _225;
    float _227;
    float _229;
    float _231;
    if (_185)
    {
        float _211 = clamp(_167 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _213 = (-_177) + _183;
        float _215 = (-_179) + _187;
        float _217 = fma(fma(_193, -fp_c7_1._m0[45].y, fma(_171, fp_c8_1._m0[17].z, fma(_173, fp_c8_1._m0[3].z, _171 * fp_c8_1._m0[10].z))), _211, _193 * fp_c7_1._m0[45].y);
        float _219 = fma(fma(_189, -fp_c7_1._m0[45].y, fma(_171, fp_c8_1._m0[17].x, fma(_173, fp_c8_1._m0[3].x, _171 * fp_c8_1._m0[10].x))), _211, _189 * fp_c7_1._m0[45].y);
        float _221 = fma(fma(_191, -fp_c7_1._m0[45].y, fma(_171, fp_c8_1._m0[17].y, fma(_173, fp_c8_1._m0[3].y, _171 * fp_c8_1._m0[10].y))), _211, _191 * fp_c7_1._m0[45].y);
        _195 = floatBitsToInt(_211);
        _101 = floatBitsToInt(_213);
        _103 = floatBitsToInt(_215);
        _223 = fp_c7_1._m0[18].w;
        _197 = _219;
        _225 = 0.0;
        _199 = fma(_145, (-_175) + _181, _175);
        _201 = _221;
        _203 = fma(_145, _213, _177);
        _205 = fma(_145, _215, _179);
        _207 = _217;
        _227 = _219 * fp_c7_1._m0[18].z;
        _229 = _217 * fp_c7_1._m0[18].z;
        _231 = _221 * fp_c7_1._m0[18].z;
    }
    else
    {
        _223 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].y);
        _225 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
        _227 = 0.0;
        _229 = 0.0;
        _231 = 0.0;
    }
    int _233 = _195;
    int _235 = _101;
    int _237 = _103;
    if (_98)
    {
        _233 = 0;
    }
    if (_98)
    {
        _209 = 0;
    }
    if (_98)
    {
        _235 = 0;
    }
    if (_98)
    {
        _237 = 0;
    }
    if (_98)
    {
        _77.x = intBitsToFloat(_233);
        _77.y = intBitsToFloat(_209);
        _77.z = intBitsToFloat(_235);
        _77.w = intBitsToFloat(_237);
        return;
    }
    float _239 = fma(_225, -_197, _197);
    float _241 = _81.x;
    float _243 = _81.y;
    float _245 = _81.z;
    float _247 = 1.0 / (_79.z * gl_FragCoord.w);
    vec2 _249 = texture(fp_tex_tcb_2A, vec2(fma(_74.x * _147, 0.5, 0.5), fma(_74.y * _147, -0.5, 0.5))).xy;
    float _251 = fma(_225, -_201, _201);
    float _253 = inversesqrt(fma(_245, _245, fma(_243, _243, _241 * _241)));
    float _255 = _241 * (-_253);
    float _257 = _243 * (-_253);
    float _259 = _245 * (-_253);
    float _261 = fma(_259, _205, fma(_257, _203, _255 * _199));
    float _263 = max(_261, fp_c1_1._m0[0].w);
    vec2 _265 = texture(fp_tex_tcb_38, vec2(_263, (-_223) + (-0.0))).xy;
    float _267 = fma(_197 + (-0.039999999105930328369140625), _225, fp_c1_1._m0[0].z);
    float _269 = fma(_225, -_207, _207);
    float _271 = fma(_207 + (-0.039999999105930328369140625), _225, fp_c1_1._m0[0].z);
    float _273 = fma(_201 + (-0.039999999105930328369140625), _225, fp_c1_1._m0[0].z);
    float _275 = clamp((-fma(max((-_249.y) + 1.0, (-_249.x) + 1.0), clamp(_83.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_79.x * gl_FragCoord.w) * _247, (_79.y * gl_FragCoord.w) * _247)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _277 = _263;
    float _279 = _267;
    float _281 = _273;
    float _283 = _271;
    float _299;
    float _301;
    float _303;
    float _305;
    float _307;
    float _309;
    float _311;
    if (_185)
    {
        float _285 = fma(_259, -_205, fma(_257, -_203, _255 * (-_199)));
        float _287 = fma(_285 * _199, -2.0, -_255);
        float _289 = fma(_285 * _203, -2.0, -_257);
        float _291 = fma(_285 * _205, -2.0, -_259);
        float _293 = 1.0 / max(abs(_291), max(abs(_287), abs(_289)));
        vec3 _295 = texture(fp_tex_tcb_36, vec4(_287 * _293, _289 * _293, _291 * _293, float(12)), 0.0).xyz;
        float _297 = fma(_265.x, fp_c7_1._m0[19].x, _265.y);
        _299 = _199 * fp_c7_1._m0[19].z;
        _301 = fma(_203 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _303 = _205 * fp_c7_1._m0[19].z;
        _279 = fp_c7_1._m0[19].x;
        _281 = fp_c7_1._m0[19].x;
        _283 = fp_c7_1._m0[19].x;
        _305 = _295.x * _297;
        _307 = _295.z * _297;
        _309 = _295.y * _297;
        _311 = 1.0;
    }
    else
    {
        float _313 = max(_261, fp_c1_1._m0[0].w);
        float _315 = fma(_259, -_205, fma(_257, -_203, _255 * (-_199)));
        float _317 = fma(_315 * _199, -2.0, -_255);
        float _319 = fma(_315 * _203, -2.0, -_257);
        float _321 = fma(_315 * _205, -2.0, -_259);
        float _323 = 1.0 / max(abs(_321), max(abs(_317), abs(_319)));
        vec2 _325 = texture(fp_tex_tcb_38, vec2(_313, (-_223) + (-0.0))).xy;
        float _327 = _325.x;
        float _329 = _325.y;
        vec3 _331 = texture(fp_tex_tcb_36, vec4(_317 * _323, _319 * _323, _321 * _323, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_223 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _333 = fma(fma(_187, -fp_c5_1._m0[23].z, fma(_183, -fp_c5_1._m0[23].y, _181 * (-fp_c5_1._m0[23].x))), -_203, _203);
        _299 = _199;
        _301 = _203;
        _303 = _205;
        _277 = _313;
        _305 = fma(_267, _327, _329) * _331.x;
        _307 = fma(_271, _327, _329) * _331.z;
        _309 = fma(_273, _327, _329) * _331.y;
        _311 = clamp(fma(_333, clamp(_163 * (-7.0), 0.0, 1.0), -_333) + fp_c1_1._m0[1].x, 0.0, 1.0);
    }
    float _335 = _255 + (-fp_c5_1._m0[23].x);
    float _337 = _83.z;
    float _339 = _257 + (-fp_c5_1._m0[23].y);
    float _341 = _83.x;
    float _343 = _259 + (-fp_c5_1._m0[23].z);
    float _345 = fma(_223, 0.5, 0.5);
    float _347 = _223 * _223;
    float _349 = (_345 * 0.5) * _345;
    float _351 = inversesqrt(fma(_343, _343, fma(_339, _339, _335 * _335)));
    float _353 = _335 * _351;
    float _355 = _339 * _351;
    float _357 = _301 * _299;
    float _359 = _303 * _301;
    int _361 = max(0, min(int(trunc((_337 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _363 = _343 * _351;
    float _365 = max(fma(_259, _363, fma(_257, _355, _255 * _353)), fp_c1_1._m0[0].w);
    float _367 = max(fma(_363, _205, fma(_355, _203, _353 * _199)), fp_c1_1._m0[0].w) * max(fma(_363, _205, fma(_355, _203, _353 * _199)), fp_c1_1._m0[0].w);
    uint _370 = uint(int(uint((((int(uint(_361) >> uint(16)) * 20) << 16) + (((_361 & 65535) * 20) + max(0, min(int(trunc((_341 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _372 = fp_c10_1._m0[int(uint(int(_370)) >> uint(2))][int(_370) & 3];
    float _374 = fma(_299, _299, -(_301 * _301));
    float _376 = _303 * _299;
    float _378 = _303 * _303;
    float _380 = 1.0 / (_349 + fma(_277, -_349, _277));
    float _382 = exp2(_365 * fma(_365, fp_c1_1._m0[1].y, -6.9831600189208984375));
    float _384 = (_380 * (1.0 / (_349 + fma(max(fma(_205, -fp_c5_1._m0[23].z, fma(_203, -fp_c5_1._m0[23].y, _199 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_349, max(fma(_205, -fp_c5_1._m0[23].z, fma(_203, -fp_c5_1._m0[23].y, _199 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_347 * (1.0 / max(fma(_367, _347 * _347, -_367) + 1.0, fp_c1_1._m0[0].w))) * (_347 * (1.0 / max(fma(_367, _347 * _347, -_367) + 1.0, fp_c1_1._m0[0].w))));
    float _386 = fma(max(0.0, fma(_374, fp_c5_1._m0[31].x, (fma(_303, fp_c5_1._m0[25].z, fma(_301, fp_c5_1._m0[25].y, _299 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_376, fp_c5_1._m0[28].w, fma(_378, fp_c5_1._m0[28].z, fma(_359, fp_c5_1._m0[28].y, _357 * fp_c5_1._m0[28].x))))), fma(_239, -_279, _239), _305);
    float _388 = fma(max(0.0, fma(_374, fp_c5_1._m0[31].z, (fma(_303, fp_c5_1._m0[27].z, fma(_301, fp_c5_1._m0[27].y, _299 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_376, fp_c5_1._m0[30].w, fma(_378, fp_c5_1._m0[30].z, fma(_359, fp_c5_1._m0[30].y, _357 * fp_c5_1._m0[30].x))))), fma(_269, -_283, _269), _307);
    float _390 = fma(max(0.0, fma(_374, fp_c5_1._m0[31].y, (fma(_303, fp_c5_1._m0[26].z, fma(_301, fp_c5_1._m0[26].y, _299 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_376, fp_c5_1._m0[29].w, fma(_378, fp_c5_1._m0[29].z, fma(_359, fp_c5_1._m0[29].y, _357 * fp_c5_1._m0[29].x))))), fma(_251, -_281, _251), _309);
    int _392 = floatBitsToInt(_372);
    float _394 = _390;
    float _396 = _388;
    float _398 = _386;
    float _400 = _386;
    float _402 = _388;
    float _404 = _390;
    if (floatBitsToInt(_372) != (-1))
    {
        int _406 = 0;
        float _410;
        float _412;
        float _414;
        int _498;
        do
        {
            int _408 = _392 & 255;
            _410 = _398;
            _412 = _394;
            _414 = _396;
            _416 = uint(_408) >= 30u;
            if (_416)
            {
                break;
            }
            int _418 = _408 << 4;
            uint _420 = uint(int(uint(_418 + 7360) >> uint(2)));
            int _422 = int(_420) + 1;
            uint _424 = uint(int(uint(_418 + 7368) >> uint(2)));
            float _426 = (-_341) + fp_c10_1._m0[int(uint(int(_420)) >> uint(2))][int(_420) & 3];
            float _428 = fp_c10_1._m0[int(uint(_422) >> uint(2))][_422 & 3] + (-_83.y);
            float _430 = (-_337) + fp_c10_1._m0[int(uint(int(_424)) >> uint(2))][int(_424) & 3];
            float _432 = fma(_430, _430, fma(_428, _428, _426 * _426));
            float _434 = _426 * inversesqrt(_432);
            float _436 = _428 * inversesqrt(_432);
            float _438 = _430 * inversesqrt(_432);
            float _440 = _255 + _434;
            float _442 = _257 + _436;
            float _444 = _259 + _438;
            float _446 = inversesqrt(fma(_444, _444, fma(_442, _442, _440 * _440)));
            float _448 = _440 * _446;
            float _450 = _442 * _446;
            float _452 = _444 * _446;
            float _454 = fma(_438, _205, fma(_436, _203, _434 * _199));
            float _456 = max(fma(_259, _452, fma(_257, _450, _255 * _448)), fp_c1_1._m0[0].w);
            float _458 = max(_454, fp_c1_1._m0[0].w);
            float _460 = max(fma(_452, _205, fma(_450, _203, _448 * _199)), fp_c1_1._m0[0].w) * max(fma(_452, _205, fma(_450, _203, _448 * _199)), fp_c1_1._m0[0].w);
            uint _462 = uint(int(uint(_418 + 6880) >> uint(2)));
            int _464 = int(_462) + 1;
            uint _466 = uint(int(uint(_418 + 8320) >> uint(2)));
            float _468 = 1.0 / max(fma(_347 * _347, _460, -_460) + 1.0, fp_c1_1._m0[0].w);
            float _470 = exp2(_456 * fma(_456, fp_c1_1._m0[1].y, -6.9831600189208984375));
            float _472 = (_380 * (1.0 / (_349 + fma(_349, -_458, _458)))) * ((_347 * _468) * (_347 * _468));
            bool _474 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_466)) >> uint(2))][int(_466) & 3]) != 0;
            uint _476 = uint(int(uint(_418 + 6408) >> uint(2)));
            uint _478 = uint(int(uint(_418 + 6400) >> uint(2)));
            int _480 = int(_478) + 1;
            float _482 = _468;
            if (!_474)
            {
                _482 = 1.0;
            }
            float _484 = _482;
            if (_474)
            {
                uint _486 = uint(int(uint(_418 + 7840) >> uint(2)));
                int _488 = int(_486) + 1;
                uint _490 = uint(int(uint(_418 + 7848) >> uint(2)));
                uint _492 = uint(int(uint(_418 + 6888) >> uint(2)));
                float _494 = fp_c10_1._m0[int(uint(int(_492)) >> uint(2))][int(_492) & 3];
                int _496 = int(_492) + 1;
                _484 = exp2(fp_c10_1._m0[int(uint(_496) >> uint(2))][_496 & 3] * log2(clamp(((-_494) + fma(_438, -fp_c10_1._m0[int(uint(int(_490)) >> uint(2))][int(_490) & 3], fma(_436, -fp_c10_1._m0[int(uint(_488) >> uint(2))][_488 & 3], _434 * (-fp_c10_1._m0[int(uint(int(_486)) >> uint(2))][int(_486) & 3])))) * (1.0 / ((-_494) + 1.0)), 0.0, 1.0)));
            }
            _498 = _406 + 1;
            float _500 = (exp2(fp_c10_1._m0[int(uint(_464) >> uint(2))][_464 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_462)) >> uint(2))][int(_462) & 3], -sqrt(_432), fp_c1_1._m0[1].w), 0.0, 1.0))) * _484) * clamp(_454 + (-0.0), 0.0, 1.0);
            float _502 = fma(fp_c10_1._m0[int(uint(_480) >> uint(2))][_480 & 3] * _500, fma(_251, fp_c1_1._m0[2].x, ((fma(_470, -_281, _470) + _281) * _472) * 0.079577468335628509521484375), _394);
            float _504 = fma(fp_c10_1._m0[int(uint(int(_476)) >> uint(2))][int(_476) & 3] * _500, fma(_269, fp_c1_1._m0[2].x, ((fma(_470, -_283, _470) + _283) * _472) * 0.079577468335628509521484375), _396);
            float _506 = fma(fp_c10_1._m0[int(uint(int(_478)) >> uint(2))][int(_478) & 3] * _500, fma(_239, fp_c1_1._m0[2].x, ((fma(_470, -_279, _470) + _279) * _472) * 0.079577468335628509521484375), _398);
            _392 = int(uint(_392) >> uint(8));
            _406 = _498;
            _394 = _502;
            _396 = _504;
            _398 = _506;
            _410 = _506;
            _412 = _502;
            _414 = _504;
        } while (!(_498 >= 4));
        _416 = false;
        _400 = _410;
        _402 = _414;
        _404 = _412;
        if ((_392 & 255) == 30)
        {
            float _508 = 1.0 / fp_c10_1._m0[561].y;
            float _510 = _337 + (-fp_c10_1._m0[557].z);
            float _512 = _510 * fp_c10_1._m0[558].x;
            float _514 = _341 + (-fp_c10_1._m0[557].x);
            float _516 = (-_341) + fma(_508, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _518 = (-_337) + fma(_508, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _520 = _514 * fp_c10_1._m0[558].z;
            float _522 = _516 * _516;
            float _524 = ((-float(_512 < _520)) + float(_512 > _520)) * fp_c10_1._m0[561].y;
            float _526 = sqrt(fma(_518, _518, _522)) * (-fp_c10_1._m0[558].y);
            float _528 = fma(_510, _510, _514 * _514);
            float _530 = inversesqrt(fma(_518, _518, fma(_526, _526, _522)));
            float _532 = _83.y;
            float _534 = _516 * _530;
            float _536 = _518 * _530;
            float _538 = fma(_510, fp_c10_1._m0[558].z, _514 * fp_c10_1._m0[558].x);
            float _540 = _526 * _530;
            float _542 = _255 + _534;
            float _544 = inversesqrt(fma(_536, _536, _534 * _534));
            bool _546 = fma(_510 * inversesqrt(_528), fp_c10_1._m0[558].z, (_514 * inversesqrt(_528)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _548 = _257 + _540;
            float _550 = fma(_536, _205, fma(_540, _203, _534 * _199));
            float _552 = _259 + _536;
            float _554 = inversesqrt(fma(_552, _552, fma(_548, _548, _542 * _542)));
            float _556 = 1.0 / (fma(_337, fp_c10_1._m0[565].z, fma(_532, fp_c10_1._m0[565].y, _341 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _558 = _552 * _554;
            float _560 = _542 * _554;
            float _562 = _548 * _554;
            bool _564 = _538 > 0.0;
            float _566 = (_534 * _544) * (-fp_c10_1._m0[558].x);
            float _568 = _566;
            float _570 = _558;
            if (_564)
            {
                _568 = sqrt(_528);
            }
            float _572 = _568;
            if (!_564)
            {
                _572 = 1.0;
            }
            float _574 = max(_550, fp_c1_1._m0[0].w);
            float _576 = max(fma(_558, _205, fma(_562, _203, _560 * _199)), fp_c1_1._m0[0].w) * max(fma(_558, _205, fma(_562, _203, _560 * _199)), fp_c1_1._m0[0].w);
            float _578 = clamp(fma(_538 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].w), 0.0, 1.0) * clamp(fma(_538 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].w), 0.0, 1.0);
            float _580 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_514, fma(_524, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_510 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_524 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_514, fma(_524, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_510 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_524 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _582 = max(fma(_259, _558, fma(_257, _562, _255 * _560)), fp_c1_1._m0[0].w);
            if (!_546)
            {
                _570 = 1.0;
            }
            float _584 = _570;
            if (_546)
            {
                _584 = fma(_580, -_580, fp_c1_1._m0[1].w) * fma(_580, -_580, fp_c1_1._m0[1].w);
            }
            float _586 = exp2(_582 * fma(_582, fp_c1_1._m0[1].y, -6.9831600189208984375));
            float _588 = clamp(_550 + (-0.0), 0.0, 1.0) * (min(fma(_578, -_578, fp_c1_1._m0[1].w) * fma(_578, -_578, fp_c1_1._m0[1].w), _584) * (exp2(log2(clamp(fma(_572, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_536 * _544, -fp_c10_1._m0[558].z, _566) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _590 = (_380 * (1.0 / (_349 + fma(_349, -_574, _574)))) * ((_347 * (1.0 / max(fma(_347 * _347, _576, -_576) + 1.0, fp_c1_1._m0[0].w))) * (_347 * (1.0 / max(fma(_347 * _347, _576, -_576) + 1.0, fp_c1_1._m0[0].w))));
            float _592 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_337, fp_c10_1._m0[562].z, fma(_532, fp_c10_1._m0[562].y, _341 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _556, 0.5, 0.5), (-fma((fma(_337, fp_c10_1._m0[563].z, fma(_532, fp_c10_1._m0[563].y, _341 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _556, 0.5, 0.5)) + 1.0)).z > fma((fma(_337, fp_c10_1._m0[564].z, fma(_532, fp_c10_1._m0[564].y, _341 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _556, 0.5, 0.5)) || (_538 <= 0.0));
            _400 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _588) * fma(_239, fp_c1_1._m0[2].x, ((fma(_586, -_279, _586) + _279) * _590) * 0.079577468335628509521484375), _592, _410);
            _402 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _588) * fma(_269, fp_c1_1._m0[2].x, ((fma(_586, -_283, _586) + _283) * _590) * 0.079577468335628509521484375), _592, _414);
            _404 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _588) * fma(_251, fp_c1_1._m0[2].x, ((fma(_586, -_281, _586) + _281) * _590) * 0.079577468335628509521484375), _592, _412);
        }
    }
    float _594 = _341 + (-fp_c3_1._m0[11].w);
    float _596 = _83.y;
    float _598 = _337 + (-fp_c3_1._m0[13].w);
    float _600 = clamp(fma(_205, -fp_c5_1._m0[23].z, fma(_203, -fp_c5_1._m0[23].y, _199 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _602 = _596 + (-fp_c3_1._m0[12].w);
    float _604 = fma(_598, _598, fma(_602, _602, _594 * _594));
    float _606 = fma(_275, ((_600 * fp_c5_1._m0[5].x) * fma((fma(_382, -_279, _382) + _279) * _384, fp_c1_1._m0[1].z, _239 * 0.3183098733425140380859375)) * _311, _400) + _227;
    float _608 = fma(_275, ((_600 * fp_c5_1._m0[5].z) * fma((fma(_382, -_283, _382) + _283) * _384, fp_c1_1._m0[1].z, _269 * 0.3183098733425140380859375)) * _311, _402) + _229;
    float _610 = clamp(fma(_275, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _612 = clamp(fma(fma(_337, fp_c5_1._m0[14].z, fma(_596, fp_c5_1._m0[14].y, _341 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _614 = exp2(log2(clamp(sqrt(_604) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_598 * inversesqrt(_604), fp_c5_1._m0[23].z, fma(_602 * inversesqrt(_604), fp_c5_1._m0[23].y, (_594 * inversesqrt(_604)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _616 = fma(_275, ((_600 * fp_c5_1._m0[5].y) * fma((fma(_382, -_281, _382) + _281) * _384, fp_c1_1._m0[1].z, _251 * 0.3183098733425140380859375)) * _311, _404) + _231;
    float _618 = fma((-_606) + fp_c5_1._m0[13].x, _612, _606);
    float _620 = fma((-_608) + fp_c5_1._m0[13].z, _612, _608);
    float _622 = fma((-_616) + fp_c5_1._m0[13].y, _612, _616);
    float _624 = clamp((-exp2((clamp(fma(sqrt(_604), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _77.x = fma((-_618) + fma(fma((_614 * fp_c7_1._m0[55].x) * _610, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _624, _618);
    _77.y = fma((-_622) + fma(fma((_614 * fp_c7_1._m0[55].y) * _610, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _624, _622);
    _77.z = fma((-_620) + fma(fma((_614 * fp_c7_1._m0[55].z) * _610, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _624, _620);
    _77.w = clamp(_94 + (-0.0), 0.0, 1.0);
}


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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_14;
layout(binding = 6) uniform sampler2D fp_tex_tcb_18;
layout(binding = 7) uniform sampler2D fp_tex_tcb_26;
layout(binding = 8) uniform sampler2D fp_tex_tcb_28;
layout(binding = 9) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 10) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 11) uniform sampler2D fp_tex_tcb_38;
layout(binding = 12) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _74;
layout(location = 1) in vec4 _76;
layout(location = 2) in vec4 _78;
layout(location = 5) in vec4 _80;
layout(location = 6) in vec4 _82;
layout(location = 4) in vec4 _84;
layout(location = 3) in vec4 _86;
layout(location = 0) out vec4 _89;
uint _6[12];

void main()
{
    bool _444 = false;
    float _96 = _74.x;
    float _98 = _74.y;
    vec2 _102 = texture(fp_tex_tcb_E, vec2(_96, _98)).xy;
    float _104 = _102.x;
    float _106 = _102.y;
    vec3 _110 = texture(fp_tex_tcb_A, vec2(_96, _98)).xyz;
    float _112 = _110.x;
    float _114 = _110.y;
    float _116 = _110.z;
    vec3 _118 = texture(fp_tex_tcb_14, vec2(_96, _98)).xyz;
    vec3 _120 = texture(fp_tex_tcb_14, vec2(_96, _98)).xyz;
    float _122 = _76.x;
    float _124 = _76.y;
    float _126 = _76.z;
    float _128 = _78.z;
    float _130 = _78.w;
    float _132 = _78.y;
    float _134 = _78.x;
    float _136 = inversesqrt(fma(_126, _126, fma(_124, _124, _122 * _122)));
    float _138 = _126 * _136;
    float _140 = _122 * _136;
    float _142 = _124 * _136;
    float _144 = (-texture(fp_tex_tcb_26, vec2(_96 + (-fp_c6_1._m0[26].w), _98 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_26, vec2(_96 + fp_c6_1._m0[26].w, _98 + fp_c6_1._m0[26].w)).x;
    float _146 = sqrt(clamp((-fma(_104, _104, _106 * _106)) + 1.0, 0.0, 1.0));
    float _148 = fma(_128 * _144, fp_c6_1._m0[27].x, _138);
    float _150 = fma(_132 * _144, fp_c6_1._m0[27].x, _142);
    float _152 = fma(_140, _146, fma(_104, _134, _106 * (fma(_142, _128, -(_138 * _132)) * _130)));
    float _154 = fma(_138, _146, fma(_104, _128, _106 * (fma(_140, _132, -(_142 * _134)) * _130)));
    float _156 = fma(_142, _146, fma(_104, _132, _106 * (fma(_138, _134, -(_140 * _128)) * _130)));
    float _158 = min((texture(fp_tex_tcb_26, vec2(_96, _98)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    int _161 = floatBitsToInt(fp_c6_1._m0[25].w) + (-1);
    float _163 = fma(_134 * _144, fp_c6_1._m0[27].x, _140);
    float _165 = 1.0 / _80.w;
    float _167 = _158 * float(max(0, _161));
    float _169 = _158 * float((-abs(_161)) + 1);
    float _171 = _158 * float(max(0, (-_161)));
    float _173 = inversesqrt(fma(_148, _148, fma(_150, _150, _163 * _163)));
    float _175 = fma(clamp(_142 + (-0.0), 0.0, 1.0), (-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, fp_c7_1._m0[20].y);
    float _177 = inversesqrt(fma(_154, _154, fma(_156, _156, _152 * _152)));
    float _179 = max(_167, max(_169, _171));
    float _181 = _163 * _173;
    float _183 = _150 * _173;
    float _185 = _148 * _173;
    float _187 = _179 + (-fp_c7_1._m0[21].w);
    float _189 = clamp(_187 + (-0.0), 0.0, 1.0);
    float _191 = _152 * _177;
    float _193 = _156 * _177;
    float _195 = _154 * _177;
    float _197 = clamp(((_169 + (-_179)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _199 = clamp(((_171 + (-_179)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _201 = clamp(((_167 + (-_179)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    bool _205 = min(_189 * 1000.0, 1.0) > 0.5;
    float _207 = fma(_201, fp_c8_1._m0[18].x, fma(_199, fp_c8_1._m0[4].x, _197 * fp_c8_1._m0[11].x));
    float _209 = fma(_201, fp_c8_1._m0[18].y, fma(_199, fp_c8_1._m0[4].y, _197 * fp_c8_1._m0[11].y));
    float _211 = fma(_201, fp_c8_1._m0[18].z, fma(_199, fp_c8_1._m0[4].z, _197 * fp_c8_1._m0[11].z));
    float _213 = _191;
    float _215 = _193;
    float _217 = _195;
    float _227;
    float _229;
    float _231;
    float _233;
    float _235;
    float _237;
    float _239;
    float _241;
    float _243;
    float _245;
    float _247;
    if (_205)
    {
        float _219 = clamp(_189 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _221 = fma(fma(_207, -fp_c7_1._m0[45].y, fma(_201, fp_c8_1._m0[17].x, fma(_199, fp_c8_1._m0[3].x, _197 * fp_c8_1._m0[10].x))), _219, _207 * fp_c7_1._m0[45].y);
        float _223 = fma(fma(_209, -fp_c7_1._m0[45].y, fma(_201, fp_c8_1._m0[17].y, fma(_199, fp_c8_1._m0[3].y, _197 * fp_c8_1._m0[10].y))), _219, _209 * fp_c7_1._m0[45].y);
        float _225 = fma(fma(_211, -fp_c7_1._m0[45].y, fma(_201, fp_c8_1._m0[17].z, fma(_199, fp_c8_1._m0[3].z, _197 * fp_c8_1._m0[10].z))), _219, _211 * fp_c7_1._m0[45].y);
        _227 = fp_c7_1._m0[18].w;
        _213 = fma(_175, (-_191) + _181, _191);
        _215 = fma(_175, (-_193) + _183, _193);
        _217 = fma(_175, (-_195) + _185, _195);
        _229 = _225;
        _231 = _223;
        _233 = 0.0;
        _235 = _221;
        _237 = _118.x * fp_c6_1._m0[12].x;
        _239 = _118.y * fp_c6_1._m0[12].y;
        _241 = _221 * fp_c7_1._m0[18].z;
        _243 = _118.z * fp_c6_1._m0[12].z;
        _245 = _223 * fp_c7_1._m0[18].z;
        _247 = _225 * fp_c7_1._m0[18].z;
    }
    else
    {
        float _249 = clamp(texture(fp_tex_tcb_C, vec2(_96, _98)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
        _227 = max(texture(fp_tex_tcb_10, vec2(_96, _98)).x, fp_c1_1._m0[0].y);
        _229 = fma((-_116) + fp_c6_1._m0[93].z, _249, _116);
        _231 = fma((-_114) + fp_c6_1._m0[93].y, _249, _114);
        _233 = texture(fp_tex_tcb_12, vec2(_96, _98)).x;
        _235 = fma((-_112) + fp_c6_1._m0[93].x, _249, _112);
        _237 = _120.x * fp_c6_1._m0[12].x;
        _239 = _120.y * fp_c6_1._m0[12].y;
        _241 = 0.0;
        _243 = _120.z * fp_c6_1._m0[12].z;
        _245 = 0.0;
        _247 = 0.0;
    }
    float _251 = _84.x;
    float _253 = clamp(texture(fp_tex_tcb_18, vec2(_96, _98)).x + (-0.0), 0.0, 1.0);
    float _255 = _84.y;
    float _257 = _84.z;
    float _259 = 1.0 / (_82.z * gl_FragCoord.w);
    vec2 _261 = texture(fp_tex_tcb_2A, vec2(fma(_80.x * _165, 0.5, 0.5), fma(_80.y * _165, -0.5, 0.5))).xy;
    float _263 = inversesqrt(fma(_257, _257, fma(_255, _255, _251 * _251)));
    float _265 = _251 * (-_263);
    float _267 = _255 * (-_263);
    float _269 = _257 * (-_263);
    float _271 = fma(_269, _217, fma(_267, _215, _265 * _213));
    float _273 = max(_271, fp_c1_1._m0[0].w);
    vec2 _275 = texture(fp_tex_tcb_38, vec2(_273, (-_227) + (-0.0))).xy;
    float _277 = fma(_229, -_233, _229);
    float _279 = fma(_231 + (-0.039999999105930328369140625), _233, fp_c1_1._m0[0].z);
    float _281 = fma(_229 + (-0.039999999105930328369140625), _233, fp_c1_1._m0[0].z);
    float _283 = fma(_235, -_233, _235);
    float _285 = fma(_231, -_233, _231);
    float _287 = fma(_235 + (-0.039999999105930328369140625), _233, fp_c1_1._m0[0].z);
    float _289 = clamp((-fma(max((-_261.x) + 1.0, (-_261.y) + 1.0), clamp(_86.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_82.x * gl_FragCoord.w) * _259, (_82.y * gl_FragCoord.w) * _259)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _291 = _273;
    float _293 = _281;
    float _295 = _287;
    float _297 = _279;
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
    if (_205)
    {
        float _299 = fma(_269, -_217, fma(_267, -_215, _265 * (-_213)));
        float _301 = fma(_299 * _213, -2.0, -_265);
        float _303 = fma(_299 * _215, -2.0, -_267);
        float _305 = fma(_299 * _217, -2.0, -_269);
        float _307 = 1.0 / max(abs(_305), max(abs(_301), abs(_303)));
        vec3 _309 = texture(fp_tex_tcb_36, vec4(_301 * _307, _303 * _307, _305 * _307, float(12)), 0.0).xyz;
        float _311 = fma(_275.x, fp_c7_1._m0[19].x, _275.y);
        _313 = _213 * fp_c7_1._m0[19].z;
        _315 = fma(_215 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _317 = _217 * fp_c7_1._m0[19].z;
        _319 = 0.0;
        _321 = 0.0;
        _293 = fp_c7_1._m0[19].x;
        _295 = fp_c7_1._m0[19].x;
        _297 = fp_c7_1._m0[19].x;
        _323 = 0.0;
        _325 = _309.z * _311;
        _327 = _309.y * _311;
        _329 = _309.x * _311;
        _331 = 1.0;
    }
    else
    {
        float _333 = max(_271, fp_c1_1._m0[0].w);
        float _335 = fma(_269, -_217, fma(_267, -_215, _265 * (-_213)));
        float _337 = fma(_335 * _213, -2.0, -_265);
        float _339 = fma(_335 * _215, -2.0, -_267);
        float _341 = fma(_335 * _217, -2.0, -_269);
        float _343 = 1.0 / max(abs(_341), max(abs(_337), abs(_339)));
        vec2 _345 = texture(fp_tex_tcb_38, vec2(_333, (-_227) + (-0.0))).xy;
        float _347 = _345.x;
        float _349 = _345.y;
        vec3 _351 = texture(fp_tex_tcb_36, vec4(_337 * _343, _339 * _343, _341 * _343, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_227 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _353 = _86.y;
        float _355 = fma(fma(_185, -fp_c5_1._m0[23].z, fma(_183, -fp_c5_1._m0[23].y, _181 * (-fp_c5_1._m0[23].x))), -_215, _215);
        float _357 = _353 + (-fp_c9_1._m0[32].w);
        float _359 = _357;
        _291 = _333;
        _317 = _217;
        if (_353 < fp_c9_1._m0[32].w)
        {
            _359 = _357 * (-5.0);
        }
        float _361 = max(0.0, ((-_215) + 1.2000000476837158203125) * (clamp(fma(_359, -(1.0 / fma(clamp((-_215) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_359, -(1.0 / fma(clamp((-_215) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0))) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w);
        _313 = _213;
        _315 = _215;
        _319 = _361 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _321 = _361 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _323 = _361 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _325 = fma(_281, _347, _349) * _351.z;
        _327 = fma(_279, _347, _349) * _351.y;
        _329 = fma(_287, _347, _349) * _351.x;
        _331 = clamp(fma(_355, clamp(_187 * (-7.0), 0.0, 1.0), -_355) + fp_c1_1._m0[1].y, 0.0, 1.0);
    }
    float _363 = _265 + (-fp_c5_1._m0[23].x);
    float _365 = _86.z;
    float _367 = _267 + (-fp_c5_1._m0[23].y);
    float _369 = _86.x;
    float _371 = _269 + (-fp_c5_1._m0[23].z);
    float _373 = fma(_227, 0.5, 0.5);
    float _375 = _227 * _227;
    float _377 = (_373 * 0.5) * _373;
    float _379 = _315 * _313;
    float _381 = _317 * _315;
    float _383 = inversesqrt(fma(_371, _371, fma(_367, _367, _363 * _363)));
    float _385 = 1.0 / (_377 + fma(_291, -_377, _291));
    float _387 = _363 * _383;
    float _389 = _367 * _383;
    float _391 = _371 * _383;
    float _393 = fma(_313, _313, -(_315 * _315));
    float _395 = _317 * _313;
    float _397 = _317 * _317;
    int _399 = max(0, min(int(trunc((_365 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _401 = max(fma(_391, _217, fma(_389, _215, _387 * _213)), fp_c1_1._m0[0].w) * max(fma(_391, _217, fma(_389, _215, _387 * _213)), fp_c1_1._m0[0].w);
    float _403 = max(fma(_269, _391, fma(_267, _389, _265 * _387)), fp_c1_1._m0[0].w);
    uint _406 = uint(int(uint((((int(uint(_399) >> uint(16)) * 20) << 16) + (((_399 & 65535) * 20) + max(0, min(int(trunc((_369 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _408 = fp_c10_1._m0[int(uint(int(_406)) >> uint(2))][int(_406) & 3];
    float _410 = exp2(_403 * fma(_403, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _412 = (_385 * (1.0 / (_377 + fma(max(fma(_217, -fp_c5_1._m0[23].z, fma(_215, -fp_c5_1._m0[23].y, _213 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_377, max(fma(_217, -fp_c5_1._m0[23].z, fma(_215, -fp_c5_1._m0[23].y, _213 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_375 * (1.0 / max(fma(_401, _375 * _375, -_401) + 1.0, fp_c1_1._m0[0].w))) * (_375 * (1.0 / max(fma(_401, _375 * _375, -_401) + 1.0, fp_c1_1._m0[0].w))));
    float _414 = fma(max(0.0, fma(_393, fp_c5_1._m0[31].z, (fma(_317, fp_c5_1._m0[27].z, fma(_315, fp_c5_1._m0[27].y, _313 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_395, fp_c5_1._m0[30].w, fma(_397, fp_c5_1._m0[30].z, fma(_381, fp_c5_1._m0[30].y, _379 * fp_c5_1._m0[30].x))))) + _323, fma(_277, -_293, _277), _325);
    float _416 = fma(max(0.0, fma(_393, fp_c5_1._m0[31].y, (fma(_317, fp_c5_1._m0[26].z, fma(_315, fp_c5_1._m0[26].y, _313 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_395, fp_c5_1._m0[29].w, fma(_397, fp_c5_1._m0[29].z, fma(_381, fp_c5_1._m0[29].y, _379 * fp_c5_1._m0[29].x))))) + _321, fma(_285, -_297, _285), _327);
    float _418 = fma(max(0.0, fma(_393, fp_c5_1._m0[31].x, (fma(_317, fp_c5_1._m0[25].z, fma(_315, fp_c5_1._m0[25].y, _313 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_395, fp_c5_1._m0[28].w, fma(_397, fp_c5_1._m0[28].z, fma(_381, fp_c5_1._m0[28].y, _379 * fp_c5_1._m0[28].x))))) + _319, fma(_283, -_295, _283), _329);
    float _420 = _416;
    float _422 = _414;
    float _424 = _418;
    float _426 = _418;
    float _428 = _416;
    float _430 = _414;
    if (floatBitsToInt(_408) != (-1))
    {
        int _432 = floatBitsToInt(_408);
        int _434 = 0;
        float _438;
        float _440;
        float _442;
        int _524;
        do
        {
            int _436 = _432 & 255;
            _438 = _424;
            _440 = _420;
            _442 = _422;
            _444 = uint(_436) >= 30u;
            if (_444)
            {
                break;
            }
            int _446 = _436 << 4;
            uint _448 = uint(int(uint(_446 + 7360) >> uint(2)));
            int _450 = int(_448) + 1;
            uint _452 = uint(int(uint(_446 + 7368) >> uint(2)));
            float _454 = (-_369) + fp_c10_1._m0[int(uint(int(_448)) >> uint(2))][int(_448) & 3];
            float _456 = (-_86.y) + fp_c10_1._m0[int(uint(_450) >> uint(2))][_450 & 3];
            float _458 = (-_365) + fp_c10_1._m0[int(uint(int(_452)) >> uint(2))][int(_452) & 3];
            float _460 = fma(_458, _458, fma(_456, _456, _454 * _454));
            float _462 = _454 * inversesqrt(_460);
            float _464 = _456 * inversesqrt(_460);
            float _466 = _458 * inversesqrt(_460);
            float _468 = _265 + _462;
            float _470 = _267 + _464;
            float _472 = _269 + _466;
            uint _474 = uint(int(uint(_446 + 6880) >> uint(2)));
            int _476 = int(_474) + 1;
            float _478 = inversesqrt(fma(_472, _472, fma(_470, _470, _468 * _468)));
            float _480 = _468 * _478;
            float _482 = _470 * _478;
            float _484 = _472 * _478;
            uint _486 = uint(int(uint(_446 + 8320) >> uint(2)));
            uint _488 = uint(int(uint(_446 + 6408) >> uint(2)));
            float _490 = fma(_466, _217, fma(_464, _215, _462 * _213));
            float _492 = max(fma(_269, _484, fma(_267, _482, _265 * _480)), fp_c1_1._m0[0].w);
            float _494 = max(_490, fp_c1_1._m0[0].w);
            float _496 = max(fma(_484, _217, fma(_482, _215, _480 * _213)), fp_c1_1._m0[0].w) * max(fma(_484, _217, fma(_482, _215, _480 * _213)), fp_c1_1._m0[0].w);
            float _498 = exp2(_492 * fma(_492, fp_c1_1._m0[1].z, -6.9831600189208984375));
            uint _500 = uint(int(uint(_446 + 6400) >> uint(2)));
            int _502 = int(_500) + 1;
            bool _504 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_486)) >> uint(2))][int(_486) & 3]) != 0;
            float _506 = (_385 * (1.0 / (_377 + fma(_377, -_494, _494)))) * ((_375 * (1.0 / max(fma(_375 * _375, _496, -_496) + 1.0, fp_c1_1._m0[0].w))) * (_375 * (1.0 / max(fma(_375 * _375, _496, -_496) + 1.0, fp_c1_1._m0[0].w))));
            float _508 = _506;
            if (!_504)
            {
                _508 = 1.0;
            }
            float _510 = _508;
            if (_504)
            {
                uint _512 = uint(int(uint(_446 + 7840) >> uint(2)));
                int _514 = int(_512) + 1;
                uint _516 = uint(int(uint(_446 + 6888) >> uint(2)));
                float _518 = fp_c10_1._m0[int(uint(int(_516)) >> uint(2))][int(_516) & 3];
                int _520 = int(_516) + 1;
                uint _522 = uint(int(uint(_446 + 7848) >> uint(2)));
                _510 = exp2(fp_c10_1._m0[int(uint(_520) >> uint(2))][_520 & 3] * log2(clamp(((-_518) + fma(_466, -fp_c10_1._m0[int(uint(int(_522)) >> uint(2))][int(_522) & 3], fma(_464, -fp_c10_1._m0[int(uint(_514) >> uint(2))][_514 & 3], _462 * (-fp_c10_1._m0[int(uint(int(_512)) >> uint(2))][int(_512) & 3])))) * (1.0 / ((-_518) + 1.0)), 0.0, 1.0)));
            }
            _524 = _434 + 1;
            float _526 = (exp2(fp_c10_1._m0[int(uint(_476) >> uint(2))][_476 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_474)) >> uint(2))][int(_474) & 3], -sqrt(_460), fp_c1_1._m0[1].x), 0.0, 1.0))) * _510) * clamp(_490 + (-0.0), 0.0, 1.0);
            float _528 = fma(fp_c10_1._m0[int(uint(_502) >> uint(2))][_502 & 3] * _526, fma(_285, fp_c1_1._m0[2].x, ((fma(_498, -_297, _498) + _297) * _506) * 0.079577468335628509521484375), _420);
            float _530 = fma(fp_c10_1._m0[int(uint(int(_488)) >> uint(2))][int(_488) & 3] * _526, fma(_277, fp_c1_1._m0[2].x, ((fma(_498, -_293, _498) + _293) * _506) * 0.079577468335628509521484375), _422);
            float _532 = fma(fp_c10_1._m0[int(uint(int(_500)) >> uint(2))][int(_500) & 3] * _526, fma(_283, fp_c1_1._m0[2].x, ((fma(_498, -_295, _498) + _295) * _506) * 0.079577468335628509521484375), _424);
            _432 = int(uint(_432) >> uint(8));
            _434 = _524;
            _420 = _528;
            _422 = _530;
            _424 = _532;
            _438 = _532;
            _440 = _528;
            _442 = _530;
        } while (!(_524 >= 4));
        _444 = false;
        _426 = _438;
        _428 = _440;
        _430 = _442;
        if ((_432 & 255) == 30)
        {
            float _534 = _86.y;
            float _536 = 1.0 / (fma(_365, fp_c10_1._m0[565].z, fma(_534, fp_c10_1._m0[565].y, _369 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _538 = 1.0 / fp_c10_1._m0[561].y;
            float _540 = _369 + (-fp_c10_1._m0[557].x);
            float _542 = _365 + (-fp_c10_1._m0[557].z);
            float _544 = _540 * fp_c10_1._m0[558].z;
            float _546 = (-_369) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_538, fp_c10_1._m0[557].x);
            float _548 = (-_365) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_538, fp_c10_1._m0[557].z);
            float _550 = _546 * _546;
            float _552 = _542 * fp_c10_1._m0[558].x;
            float _554 = sqrt(fma(_548, _548, _550)) * (-fp_c10_1._m0[558].y);
            float _556 = fma(_542, _542, _540 * _540);
            float _558 = ((-float(_552 < _544)) + float(_552 > _544)) * fp_c10_1._m0[561].y;
            float _560 = inversesqrt(fma(_548, _548, fma(_554, _554, _550)));
            float _562 = _546 * _560;
            float _564 = fma(_542, fp_c10_1._m0[558].z, _540 * fp_c10_1._m0[558].x);
            float _566 = _554 * _560;
            float _568 = _548 * _560;
            float _570 = _265 + _562;
            float _572 = _267 + _566;
            bool _574 = _564 > 0.0;
            float _576 = _556;
            if (_574)
            {
                _576 = sqrt(_556);
            }
            float _578 = _269 + _568;
            float _580 = fma(_568, _217, fma(_566, _215, _562 * _213));
            float _582 = _576;
            if (!_574)
            {
                _582 = 1.0;
            }
            float _584 = inversesqrt(fma(_568, _568, _562 * _562));
            float _586 = inversesqrt(fma(_578, _578, fma(_572, _572, _570 * _570)));
            bool _588 = fma(_542 * inversesqrt(_556), fp_c10_1._m0[558].z, (_540 * inversesqrt(_556)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _590 = _570 * _586;
            float _592 = _572 * _586;
            float _594 = _578 * _586;
            float _596 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_540, fma(_558, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_542 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_558 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_540, fma(_558, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_542 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_558 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _598 = max(fma(_269, _594, fma(_267, _592, _265 * _590)), fp_c1_1._m0[0].w);
            float _600 = max(_580, fp_c1_1._m0[0].w);
            float _602 = clamp(fma(_564 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_564 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _604 = max(fma(_594, _217, fma(_592, _215, _590 * _213)), fp_c1_1._m0[0].w) * max(fma(_594, _217, fma(_592, _215, _590 * _213)), fp_c1_1._m0[0].w);
            float _606 = fma(_598, fp_c1_1._m0[1].z, -6.9831600189208984375);
            float _608 = _606;
            if (_588)
            {
                _608 = fma(_596, -_596, fp_c1_1._m0[1].x) * fma(_596, -_596, fp_c1_1._m0[1].x);
            }
            float _610 = _608;
            if (!_588)
            {
                _610 = 1.0;
            }
            float _612 = exp2(_598 * _606);
            float _614 = (_385 * (1.0 / (_377 + fma(_377, -_600, _600)))) * ((_375 * (1.0 / max(fma(_375 * _375, _604, -_604) + 1.0, fp_c1_1._m0[0].w))) * (_375 * (1.0 / max(fma(_375 * _375, _604, -_604) + 1.0, fp_c1_1._m0[0].w))));
            float _616 = clamp(_580 + (-0.0), 0.0, 1.0) * (min(fma(_602, -_602, fp_c1_1._m0[1].x) * fma(_602, -_602, fp_c1_1._m0[1].x), _610) * (exp2(log2(clamp(fma(_582, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_568 * _584, -fp_c10_1._m0[558].z, (_562 * _584) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _618 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_365, fp_c10_1._m0[562].z, fma(_534, fp_c10_1._m0[562].y, _369 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _536, 0.5, 0.5), (-fma((fma(_365, fp_c10_1._m0[563].z, fma(_534, fp_c10_1._m0[563].y, _369 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _536, 0.5, 0.5)) + 1.0)).z > fma((fma(_365, fp_c10_1._m0[564].z, fma(_534, fp_c10_1._m0[564].y, _369 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _536, 0.5, 0.5)) || (_564 <= 0.0));
            _426 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _616) * fma(_283, fp_c1_1._m0[2].x, ((fma(_612, -_295, _612) + _295) * _614) * 0.079577468335628509521484375), _618, _438);
            _428 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _616) * fma(_285, fp_c1_1._m0[2].x, ((fma(_612, -_297, _612) + _297) * _614) * 0.079577468335628509521484375), _618, _440);
            _430 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _616) * fma(_277, fp_c1_1._m0[2].x, ((fma(_612, -_293, _612) + _293) * _614) * 0.079577468335628509521484375), _618, _442);
        }
    }
    float _620 = _369 + (-fp_c3_1._m0[11].w);
    float _622 = _86.y;
    float _624 = _365 + (-fp_c3_1._m0[13].w);
    float _626 = clamp(fma(_217, -fp_c5_1._m0[23].z, fma(_215, -fp_c5_1._m0[23].y, _213 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _628 = _622 + (-fp_c3_1._m0[12].w);
    float _630 = fma(_624, _624, fma(_628, _628, _620 * _620));
    float _632 = clamp(fma(fma(_365, fp_c5_1._m0[14].z, fma(_622, fp_c5_1._m0[14].y, _369 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _634 = fma(_237, fp_c6_1._m0[11].x, fma(_253, _426, _289 * (((_626 * fp_c5_1._m0[5].x) * fma((fma(_410, -_295, _410) + _295) * _412, fp_c1_1._m0[1].w, _283 * 0.3183098733425140380859375)) * _331))) + _241;
    float _636 = clamp(fma(_253 * _289, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _638 = fma(_239, fp_c6_1._m0[11].x, fma(_253, _428, _289 * (((_626 * fp_c5_1._m0[5].y) * fma((fma(_410, -_297, _410) + _297) * _412, fp_c1_1._m0[1].w, _285 * 0.3183098733425140380859375)) * _331))) + _245;
    float _640 = exp2(log2(clamp(sqrt(_630) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_624 * inversesqrt(_630), fp_c5_1._m0[23].z, fma(_628 * inversesqrt(_630), fp_c5_1._m0[23].y, (_620 * inversesqrt(_630)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _642 = fma(_243, fp_c6_1._m0[11].x, fma(_253, _430, _289 * (((_626 * fp_c5_1._m0[5].z) * fma((fma(_410, -_293, _410) + _293) * _412, fp_c1_1._m0[1].w, _277 * 0.3183098733425140380859375)) * _331))) + _247;
    float _644 = fma((-_634) + fp_c5_1._m0[13].x, _632, _634);
    float _646 = fma((-_642) + fp_c5_1._m0[13].z, _632, _642);
    float _648 = fma((-_638) + fp_c5_1._m0[13].y, _632, _638);
    float _650 = clamp((-exp2((clamp(fma(sqrt(_630), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _89.x = fma((-_644) + fma(fma((_640 * fp_c7_1._m0[55].x) * _636, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _650, _644);
    _89.y = fma((-_648) + fma(fma((_640 * fp_c7_1._m0[55].y) * _636, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _650, _648);
    _89.z = fma((-_646) + fma(fma((_640 * fp_c7_1._m0[55].z) * _636, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _650, _646);
    _89.w = 1.0;
}


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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 2, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_E;
layout(binding = 1) uniform sampler2D fp_tex_tcb_20;
layout(binding = 2) uniform sampler2D fp_tex_tcb_28;
layout(binding = 3) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 4) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 5) uniform sampler2D fp_tex_tcb_38;

layout(location = 5) in vec4 _56;
layout(location = 0) in vec4 _58;
layout(location = 1) in vec4 _60;
layout(location = 2) in vec4 _62;
layout(location = 6) in vec4 _64;
layout(location = 4) in vec4 _66;
layout(location = 3) in vec4 _68;
layout(location = 0) out vec4 _71;
uint _6[12];

void main()
{
    bool _384 = false;
    float _78 = _58.x;
    float _80 = _58.y;
    float _82 = 1.0 / _56.w;
    vec2 _86 = texture(fp_tex_tcb_E, vec2(_78, _80)).xy;
    float _88 = _86.x;
    float _90 = _86.y;
    vec2 _92 = texture(fp_tex_tcb_2A, vec2(fma(_56.x * _82, 0.5, 0.5), fma(_56.y * _82, -0.5, 0.5))).xy;
    float _94 = _60.x;
    float _96 = _60.y;
    float _98 = _60.z;
    float _100 = _62.y;
    float _102 = _62.z;
    float _104 = _62.x;
    float _106 = _62.w;
    float _108 = inversesqrt(fma(_98, _98, fma(_96, _96, _94 * _94)));
    int _111 = (-floatBitsToInt(fp_c6_1._m0[25].w)) + 1;
    float _113 = _98 * _108;
    float _115 = _94 * _108;
    float _117 = _96 * _108;
    float _119 = min((texture(fp_tex_tcb_20, vec2(_78, _80)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _121 = fma((-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, clamp(_117 + (-0.0), 0.0, 1.0), fp_c7_1._m0[20].y);
    float _123 = (-texture(fp_tex_tcb_20, vec2(_78 + (-fp_c6_1._m0[26].w), _80 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_20, vec2(_78 + fp_c6_1._m0[26].w, _80 + fp_c6_1._m0[26].w)).x;
    float _125 = _119 * float((-abs(_111)) + 1);
    float _127 = float(max(0, (-_111))) * _119;
    float _129 = _119 * float(max(0, _111));
    float _131 = sqrt(clamp((-fma(_88, _88, _90 * _90)) + 1.0, 0.0, 1.0));
    float _133 = fma(_102 * _123, fp_c6_1._m0[27].x, _113);
    float _135 = max(_127, max(_125, _129));
    float _137 = fma(_115, _131, fma(_88, _104, _90 * (fma(_117, _102, -(_113 * _100)) * _106)));
    float _139 = fma(_104 * _123, fp_c6_1._m0[27].x, _115);
    float _141 = fma(_117, _131, fma(_88, _100, _90 * (fma(_113, _104, -(_115 * _102)) * _106)));
    float _143 = fma(_100 * _123, fp_c6_1._m0[27].x, _117);
    float _145 = fma(_113, _131, fma(_88, _102, _90 * (fma(_115, _100, -(_117 * _104)) * _106)));
    float _147 = _135 + (-fp_c7_1._m0[21].w);
    float _149 = clamp(_147 + (-0.0), 0.0, 1.0);
    float _151 = inversesqrt(fma(_145, _145, fma(_141, _141, _137 * _137)));
    float _153 = inversesqrt(fma(_133, _133, fma(_143, _143, _139 * _139)));
    float _155 = clamp(((_125 + (-_135)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _157 = clamp(((_129 + (-_135)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _159 = clamp(((_127 + (-_135)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _161 = _137 * _151;
    bool _165 = min(_149 * 1000.0, 1.0) > 0.5;
    float _167 = _145 * _151;
    float _169 = _141 * _151;
    float _171 = _143 * _153;
    float _173 = _133 * _153;
    float _175 = _139 * _153;
    float _177 = _161;
    float _179 = _169;
    float _181 = _167;
    float _197;
    float _199;
    float _201;
    float _203;
    float _205;
    float _207;
    float _209;
    float _211;
    if (_165)
    {
        float _183 = fma(_159, fp_c7_1._m0[63].x, fma(_157, fp_c7_1._m0[4].x, _155 * fp_c7_1._m0[11].x));
        float _185 = fma(_159, fp_c7_1._m0[63].y, fma(_157, fp_c7_1._m0[4].y, _155 * fp_c7_1._m0[11].y));
        float _187 = fma(_159, fp_c7_1._m0[63].z, fma(_157, fp_c7_1._m0[4].z, _155 * fp_c7_1._m0[11].z));
        float _189 = clamp(_149 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _191 = fma(fma(_183, -fp_c7_1._m0[45].y, fma(_159, fp_c7_1._m0[62].x, fma(_157, fp_c7_1._m0[3].x, _155 * fp_c7_1._m0[10].x))), _189, _183 * fp_c7_1._m0[45].y);
        float _193 = fma(fma(_185, -fp_c7_1._m0[45].y, fma(_159, fp_c7_1._m0[62].y, fma(_157, fp_c7_1._m0[3].y, _155 * fp_c7_1._m0[10].y))), _189, _185 * fp_c7_1._m0[45].y);
        float _195 = fma(fma(_187, -fp_c7_1._m0[45].y, fma(_159, fp_c7_1._m0[62].z, fma(_157, fp_c7_1._m0[3].z, _155 * fp_c7_1._m0[10].z))), _189, _187 * fp_c7_1._m0[45].y);
        _197 = _191;
        _199 = fp_c7_1._m0[18].w;
        _177 = fma(_121, (-_161) + _175, _161);
        _179 = fma(_121, (-_169) + _171, _169);
        _181 = fma(_121, (-_167) + _173, _167);
        _201 = 0.0;
        _203 = _193;
        _205 = _195;
        _207 = _191 * fp_c7_1._m0[18].z;
        _209 = _193 * fp_c7_1._m0[18].z;
        _211 = _195 * fp_c7_1._m0[18].z;
    }
    else
    {
        _197 = fp_c6_1._m0[7].x;
        _199 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].y);
        _201 = fp_c6_1._m0[9].x;
        _203 = fp_c6_1._m0[7].y;
        _205 = fp_c6_1._m0[7].z;
        _207 = 0.0;
        _209 = 0.0;
        _211 = 0.0;
    }
    float _213 = _66.x;
    float _215 = _66.y;
    float _217 = _66.z;
    float _219 = 1.0 / (_64.z * gl_FragCoord.w);
    float _221 = inversesqrt(fma(_217, _217, fma(_215, _215, _213 * _213)));
    float _223 = _213 * (-_221);
    float _225 = _215 * (-_221);
    float _227 = _217 * (-_221);
    float _229 = fma(_227, _181, fma(_225, _179, _223 * _177));
    float _231 = max(_229, fp_c1_1._m0[0].w);
    vec2 _233 = texture(fp_tex_tcb_38, vec2(_231, (-_199) + (-0.0))).xy;
    float _235 = fma(_197, -_201, _197);
    float _237 = fma(_203, -_201, _203);
    float _239 = fma(_205, -_201, _205);
    float _241 = fma(_197 + (-0.039999999105930328369140625), _201, fp_c1_1._m0[0].z);
    float _243 = fma(_203 + (-0.039999999105930328369140625), _201, fp_c1_1._m0[0].z);
    float _245 = fma(_205 + (-0.039999999105930328369140625), _201, fp_c1_1._m0[0].z);
    float _247 = clamp((-fma(max((-_92.x) + 1.0, (-_92.y) + 1.0), clamp(_68.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_64.x * gl_FragCoord.w) * _219, (_64.y * gl_FragCoord.w) * _219)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _249 = _231;
    float _251 = _241;
    float _253 = _243;
    float _255 = _245;
    float _273;
    float _275;
    float _277;
    float _279;
    float _281;
    float _283;
    float _285;
    if (_165)
    {
        float _257 = fma(_227, -_181, fma(_225, -_179, _223 * (-_177)));
        float _259 = fma(_257 * _177, -2.0, -_223);
        float _261 = fma(_257 * _179, -2.0, -_225);
        float _263 = fma(_257 * _181, -2.0, -_227);
        float _265 = 1.0 / max(abs(_263), max(abs(_259), abs(_261)));
        vec3 _269 = texture(fp_tex_tcb_36, vec4(_259 * _265, _261 * _265, _263 * _265, float(12)), 0.0).xyz;
        float _271 = fma(_233.x, fp_c7_1._m0[19].x, _233.y);
        _273 = fma(_179 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _275 = _177 * fp_c7_1._m0[19].z;
        _277 = _181 * fp_c7_1._m0[19].z;
        _251 = fp_c7_1._m0[19].x;
        _253 = fp_c7_1._m0[19].x;
        _255 = fp_c7_1._m0[19].x;
        _279 = _269.x * _271;
        _281 = _269.y * _271;
        _283 = _269.z * _271;
        _285 = 1.0;
    }
    else
    {
        float _287 = max(_229, fp_c1_1._m0[0].w);
        float _289 = fma(_227, -_181, fma(_225, -_179, _223 * (-_177)));
        float _291 = fma(_289 * _177, -2.0, -_223);
        float _293 = fma(_289 * _179, -2.0, -_225);
        float _295 = fma(_289 * _181, -2.0, -_227);
        float _297 = 1.0 / max(abs(_295), max(abs(_291), abs(_293)));
        vec2 _299 = texture(fp_tex_tcb_38, vec2(_287, (-_199) + (-0.0))).xy;
        float _301 = _299.x;
        float _303 = _299.y;
        vec3 _305 = texture(fp_tex_tcb_36, vec4(_291 * _297, _293 * _297, _295 * _297, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_199 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _307 = fma(fma(_173, -fp_c5_1._m0[23].z, fma(_171, -fp_c5_1._m0[23].y, _175 * (-fp_c5_1._m0[23].x))), -_179, _179);
        _273 = _179;
        _275 = _177;
        _277 = _181;
        _249 = _287;
        _279 = fma(_241, _301, _303) * _305.x;
        _281 = fma(_243, _301, _303) * _305.y;
        _283 = fma(_245, _301, _303) * _305.z;
        _285 = clamp(fma(_307, clamp(_147 * (-7.0), 0.0, 1.0), -_307) + fp_c1_1._m0[1].x, 0.0, 1.0);
    }
    float _309 = _223 + (-fp_c5_1._m0[23].x);
    float _311 = _68.z;
    float _313 = _225 + (-fp_c5_1._m0[23].y);
    float _315 = _68.x;
    float _317 = _227 + (-fp_c5_1._m0[23].z);
    float _319 = fma(_199, 0.5, 0.5);
    float _321 = _199 * _199;
    float _323 = (_319 * 0.5) * _319;
    float _325 = _273 * _275;
    float _327 = inversesqrt(fma(_317, _317, fma(_313, _313, _309 * _309)));
    float _329 = _309 * _327;
    float _331 = _313 * _327;
    float _333 = _277 * _273;
    float _335 = _317 * _327;
    int _337 = max(0, min(int(trunc((_311 + (-fp_c9_1._m0[550].z)) * fp_c9_1._m0[551].z)), 19));
    float _339 = max(fma(_227, _335, fma(_225, _331, _223 * _329)), fp_c1_1._m0[0].w);
    float _341 = fma(_275, _275, -(_273 * _273));
    float _343 = max(fma(_335, _181, fma(_331, _179, _329 * _177)), fp_c1_1._m0[0].w) * max(fma(_335, _181, fma(_331, _179, _329 * _177)), fp_c1_1._m0[0].w);
    float _345 = _277 * _277;
    uint _348 = uint(int(uint((((int(uint(_337) >> uint(16)) * 20) << 16) + (((_337 & 65535) * 20) + max(0, min(int(trunc((_315 + (-fp_c9_1._m0[550].x)) * fp_c9_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _350 = fp_c9_1._m0[int(uint(int(_348)) >> uint(2))][int(_348) & 3];
    float _352 = _277 * _275;
    float _354 = 1.0 / (_323 + fma(_249, -_323, _249));
    float _356 = exp2(_339 * fma(_339, fp_c1_1._m0[1].y, -6.9831600189208984375));
    float _358 = (_354 * (1.0 / (_323 + fma(max(fma(_181, -fp_c5_1._m0[23].z, fma(_179, -fp_c5_1._m0[23].y, _177 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_323, max(fma(_181, -fp_c5_1._m0[23].z, fma(_179, -fp_c5_1._m0[23].y, _177 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_321 * (1.0 / max(fma(_343, _321 * _321, -_343) + 1.0, fp_c1_1._m0[0].w))) * (_321 * (1.0 / max(fma(_343, _321 * _321, -_343) + 1.0, fp_c1_1._m0[0].w))));
    float _360 = fma(max(0.0, fma(_341, fp_c5_1._m0[31].x, (fma(_277, fp_c5_1._m0[25].z, fma(_273, fp_c5_1._m0[25].y, _275 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_352, fp_c5_1._m0[28].w, fma(_345, fp_c5_1._m0[28].z, fma(_333, fp_c5_1._m0[28].y, _325 * fp_c5_1._m0[28].x))))), fma(_235, -_251, _235), _279);
    float _362 = fma(max(0.0, fma(_341, fp_c5_1._m0[31].y, (fma(_277, fp_c5_1._m0[26].z, fma(_273, fp_c5_1._m0[26].y, _275 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_352, fp_c5_1._m0[29].w, fma(_345, fp_c5_1._m0[29].z, fma(_333, fp_c5_1._m0[29].y, _325 * fp_c5_1._m0[29].x))))), fma(_237, -_253, _237), _281);
    float _364 = fma(max(0.0, fma(_341, fp_c5_1._m0[31].z, (fma(_277, fp_c5_1._m0[27].z, fma(_273, fp_c5_1._m0[27].y, _275 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_352, fp_c5_1._m0[30].w, fma(_345, fp_c5_1._m0[30].z, fma(_333, fp_c5_1._m0[30].y, _325 * fp_c5_1._m0[30].x))))), fma(_239, -_255, _239), _283);
    float _366 = _362;
    float _368 = _364;
    float _370 = _360;
    float _372 = _364;
    float _374 = _360;
    float _376 = _362;
    if (floatBitsToInt(_350) != (-1))
    {
        int _378 = floatBitsToInt(_350);
        int _380 = 0;
        int _466;
        do
        {
            int _382 = _378 & 255;
            _372 = _368;
            _374 = _370;
            _376 = _366;
            _384 = uint(_382) >= 30u;
            if (_384)
            {
                break;
            }
            int _386 = _382 << 4;
            uint _388 = uint(int(uint(_386 + 7360) >> uint(2)));
            int _390 = int(_388) + 1;
            uint _392 = uint(int(uint(_386 + 7368) >> uint(2)));
            float _394 = (-_315) + fp_c9_1._m0[int(uint(int(_388)) >> uint(2))][int(_388) & 3];
            float _396 = fp_c9_1._m0[int(uint(_390) >> uint(2))][_390 & 3] + (-_68.y);
            float _398 = (-_311) + fp_c9_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3];
            float _400 = fma(_398, _398, fma(_396, _396, _394 * _394));
            float _402 = _394 * inversesqrt(_400);
            float _404 = _396 * inversesqrt(_400);
            float _406 = _398 * inversesqrt(_400);
            float _408 = _223 + _402;
            float _410 = _225 + _404;
            float _412 = _227 + _406;
            float _414 = inversesqrt(fma(_412, _412, fma(_410, _410, _408 * _408)));
            float _416 = _408 * _414;
            float _418 = _410 * _414;
            uint _420 = uint(int(uint(_386 + 6880) >> uint(2)));
            int _422 = int(_420) + 1;
            float _424 = _412 * _414;
            float _426 = fma(_406, _181, fma(_404, _179, _402 * _177));
            uint _428 = uint(int(uint(_386 + 8320) >> uint(2)));
            float _430 = max(fma(_227, _424, fma(_225, _418, _223 * _416)), fp_c1_1._m0[0].w);
            float _432 = max(fma(_424, _181, fma(_418, _179, _416 * _177)), fp_c1_1._m0[0].w) * max(fma(_424, _181, fma(_418, _179, _416 * _177)), fp_c1_1._m0[0].w);
            float _434 = max(_426, fp_c1_1._m0[0].w);
            uint _436 = uint(int(uint(_386 + 6408) >> uint(2)));
            uint _438 = uint(int(uint(_386 + 6400) >> uint(2)));
            int _440 = int(_438) + 1;
            float _442 = exp2(_430 * fma(_430, fp_c1_1._m0[1].y, -6.9831600189208984375));
            float _444 = fp_c9_1._m0[int(uint(_422) >> uint(2))][_422 & 3] * log2(clamp(fma(fp_c9_1._m0[int(uint(int(_420)) >> uint(2))][int(_420) & 3], -sqrt(_400), fp_c1_1._m0[1].w), 0.0, 1.0));
            bool _446 = floatBitsToInt(fp_c9_1._m0[int(uint(int(_428)) >> uint(2))][int(_428) & 3]) != 0;
            float _448 = (_354 * (1.0 / (_323 + fma(_323, -_434, _434)))) * ((_321 * (1.0 / max(fma(_321 * _321, _432, -_432) + 1.0, fp_c1_1._m0[0].w))) * (_321 * (1.0 / max(fma(_321 * _321, _432, -_432) + 1.0, fp_c1_1._m0[0].w))));
            float _450 = _444;
            if (!_446)
            {
                _450 = 1.0;
            }
            float _452 = _450;
            if (_446)
            {
                uint _454 = uint(int(uint(_386 + 7840) >> uint(2)));
                int _456 = int(_454) + 1;
                uint _458 = uint(int(uint(_386 + 7848) >> uint(2)));
                uint _460 = uint(int(uint(_386 + 6888) >> uint(2)));
                float _462 = fp_c9_1._m0[int(uint(int(_460)) >> uint(2))][int(_460) & 3];
                int _464 = int(_460) + 1;
                _452 = exp2(fp_c9_1._m0[int(uint(_464) >> uint(2))][_464 & 3] * log2(clamp(((-_462) + fma(_406, -fp_c9_1._m0[int(uint(int(_458)) >> uint(2))][int(_458) & 3], fma(_404, -fp_c9_1._m0[int(uint(_456) >> uint(2))][_456 & 3], _402 * (-fp_c9_1._m0[int(uint(int(_454)) >> uint(2))][int(_454) & 3])))) * (1.0 / ((-_462) + 1.0)), 0.0, 1.0)));
            }
            _466 = _380 + 1;
            float _468 = (exp2(_444) * _452) * clamp(_426 + (-0.0), 0.0, 1.0);
            float _470 = fma(fp_c9_1._m0[int(uint(_440) >> uint(2))][_440 & 3] * _468, fma(_237, fp_c1_1._m0[2].x, ((fma(_442, -_253, _442) + _253) * _448) * 0.079577468335628509521484375), _366);
            float _472 = fma(fp_c9_1._m0[int(uint(int(_436)) >> uint(2))][int(_436) & 3] * _468, fma(_239, fp_c1_1._m0[2].x, ((fma(_442, -_255, _442) + _255) * _448) * 0.079577468335628509521484375), _368);
            float _474 = fma(fp_c9_1._m0[int(uint(int(_438)) >> uint(2))][int(_438) & 3] * _468, fma(_235, fp_c1_1._m0[2].x, ((fma(_442, -_251, _442) + _251) * _448) * 0.079577468335628509521484375), _370);
            _378 = int(uint(_378) >> uint(8));
            _380 = _466;
            _366 = _470;
            _368 = _472;
            _370 = _474;
            _372 = _472;
            _374 = _474;
            _376 = _470;
        } while (!(_466 >= 4));
    }
    _384 = false;
    float _476 = _315 + (-fp_c3_1._m0[11].w);
    float _478 = _68.y;
    float _480 = _311 + (-fp_c3_1._m0[13].w);
    float _482 = clamp(fma(_181, -fp_c5_1._m0[23].z, fma(_179, -fp_c5_1._m0[23].y, _177 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _484 = _478 + (-fp_c3_1._m0[12].w);
    float _486 = fma(_480, _480, fma(_484, _484, _476 * _476));
    float _488 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[87].x, fma(_247, ((_482 * fp_c5_1._m0[5].x) * fma((fma(_356, -_251, _356) + _251) * _358, fp_c1_1._m0[1].z, _235 * 0.3183098733425140380859375)) * _285, _374)) + _207;
    float _490 = clamp(fma(_247, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _492 = clamp(fma(fma(_311, fp_c5_1._m0[14].z, fma(_478, fp_c5_1._m0[14].y, _315 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _494 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[87].y, fma(_247, ((_482 * fp_c5_1._m0[5].y) * fma((fma(_356, -_253, _356) + _253) * _358, fp_c1_1._m0[1].z, _237 * 0.3183098733425140380859375)) * _285, _376)) + _209;
    float _496 = exp2(log2(clamp(sqrt(_486) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_480 * inversesqrt(_486), fp_c5_1._m0[23].z, fma(_484 * inversesqrt(_486), fp_c5_1._m0[23].y, (_476 * inversesqrt(_486)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _498 = fma(fp_c6_1._m0[11].x, fp_c6_1._m0[87].z, fma(_247, ((_482 * fp_c5_1._m0[5].z) * fma((fma(_356, -_255, _356) + _255) * _358, fp_c1_1._m0[1].z, _239 * 0.3183098733425140380859375)) * _285, _372)) + _211;
    float _500 = fma((-_488) + fp_c5_1._m0[13].x, _492, _488);
    float _502 = fma((-_494) + fp_c5_1._m0[13].y, _492, _494);
    float _504 = fma((-_498) + fp_c5_1._m0[13].z, _492, _498);
    float _506 = clamp((-exp2((clamp(fma(sqrt(_486), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _71.x = fma((-_500) + fma(fma((_496 * fp_c7_1._m0[55].x) * _490, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _506, _500);
    _71.y = fma((-_502) + fma(fma((_496 * fp_c7_1._m0[55].y) * _490, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _506, _502);
    _71.z = fma((-_504) + fma(fma((_496 * fp_c7_1._m0[55].z) * _490, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _506, _504);
    _71.w = 1.0;
}


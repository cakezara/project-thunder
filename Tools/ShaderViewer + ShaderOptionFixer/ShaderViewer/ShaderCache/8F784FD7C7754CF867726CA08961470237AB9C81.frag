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

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_16;
layout(binding = 6) uniform sampler2D fp_tex_tcb_18;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 2) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 0) out vec4 _79;
layout(location = 4) in vec4 _81;
layout(location = 6) in vec4 _83;
layout(location = 3) in vec4 _85;
uint _6[12];

void main()
{
    bool _374 = false;
    float _92 = _70.x;
    float _94 = _70.y;
    float _96 = texture(fp_tex_tcb_8, vec2(_92, _94)).x;
    bool _100 = _96 <= 0.0;
    if (_100)
    {
        discard;
    }
    vec2 _104 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _106 = _104.x;
    float _108 = _104.y;
    float _110 = texture(fp_tex_tcb_12, vec2(_92, _94)).x;
    vec3 _114 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _116 = _114.x;
    float _118 = _114.y;
    float _120 = _114.z;
    vec3 _122 = texture(fp_tex_tcb_16, vec2(_92, _94)).xyz;
    float _124 = _72.x;
    float _126 = _72.y;
    float _128 = _72.z;
    float _130 = _74.z;
    float _132 = _74.x;
    float _134 = _74.y;
    float _136 = _74.w;
    float _138 = inversesqrt(fma(_128, _128, fma(_126, _126, _124 * _124)));
    float _140 = _124 * _138;
    float _142 = _128 * _138;
    float _144 = _126 * _138;
    float _146 = sqrt(clamp((-fma(_106, _106, _108 * _108)) + 1.0, 0.0, 1.0));
    float _148 = fma(_140, _146, fma(_106, _132, _108 * (fma(_144, _130, -(_142 * _134)) * _136)));
    float _150 = _76.y;
    float _152 = fma(_144, _146, fma(_106, _134, _108 * (fma(_142, _132, -(_140 * _130)) * _136)));
    float _154 = fma(_142, _146, fma(_106, _130, _108 * (fma(_140, _134, -(_144 * _132)) * _136)));
    float _156 = fma(_152, _152, _148 * _148);
    float _158 = 1.0 / _76.w;
    int _161 = floatBitsToInt(_156);
    int _163 = floatBitsToInt(_150);
    int _165 = floatBitsToInt(_158);
    int _167 = floatBitsToInt(_154);
    if (_100)
    {
        _161 = 0;
    }
    float _169 = inversesqrt(fma(_154, _154, _156));
    if (_100)
    {
        _163 = 0;
    }
    if (_100)
    {
        _165 = 0;
    }
    float _171 = _154 * _169;
    float _173 = _148 * _169;
    float _175 = _152 * _169;
    if (_100)
    {
        _167 = 0;
    }
    if (_100)
    {
        _79.x = intBitsToFloat(_167);
        _79.y = intBitsToFloat(_161);
        _79.z = intBitsToFloat(_163);
        _79.w = intBitsToFloat(_165);
        return;
    }
    float _177 = max(texture(fp_tex_tcb_10, vec2(_92, _94)).x, fp_c1_1._m0[0].x);
    float _179 = _81.x;
    float _181 = _81.y;
    float _183 = _81.z;
    float _185 = inversesqrt(fma(_183, _183, fma(_181, _181, _179 * _179)));
    float _187 = 1.0 / (_83.z * gl_FragCoord.w);
    float _189 = _179 * (-_185);
    float _191 = _181 * (-_185);
    float _193 = _183 * (-_185);
    float _195 = fma(cos(_177 * 3.1415927410125732421875), -5.5, 5.5);
    float _197 = fma(_171, _193, fma(_175, _191, _173 * _189));
    float _199 = float(int(trunc(_195)));
    float _201 = max(_197, fp_c1_1._m0[0].w);
    float _203 = fma(_173 * (-_197), -2.0, -_189);
    float _205 = fma(_175 * (-_197), -2.0, -_191);
    float _207 = fma(_171 * (-_197), -2.0, -_193);
    float _209 = 1.0 / max(abs(_207), max(abs(_203), abs(_205)));
    float _211 = _203 * _209;
    float _213 = _205 * _209;
    float _215 = _207 * _209;
    vec3 _217 = texture(fp_tex_tcb_36, vec4(_211, _213, _215, float(int(clamp(uint(max(roundEven(_199), 0.0)), 0u, 65535u))))).xyz;
    float _219 = _217.x;
    float _221 = _217.y;
    float _223 = _217.z;
    vec3 _225 = texture(fp_tex_tcb_36, vec4(_211, _213, _215, float(int(clamp(uint(max(roundEven(_199 + 1.0), 0.0)), 0u, 65535u))))).xyz;
    vec2 _227 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _158, 0.5, 0.5), fma(_150 * _158, -0.5, 0.5))).xy;
    vec2 _229 = texture(fp_tex_tcb_38, vec2(_201, (-_177) + (-0.0))).xy;
    float _231 = _229.x;
    float _233 = _229.y;
    float _235 = _85.x;
    float _237 = _85.z;
    float _239 = _85.y;
    float _241 = fma(_116, -_110, _116);
    float _243 = fma(_118, -_110, _118);
    float _245 = fma(_120, -_110, _120);
    float _247 = fma(_110, _116 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _249 = fma(_110, _118 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _251 = fma(_177, 0.5, 0.5);
    float _253 = fma(_110, _120 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _255 = _122.z * fp_c6_1._m0[19].z;
    float _257 = _189 + (-fp_c5_1._m0[23].x);
    float _259 = _193 + (-fp_c5_1._m0[23].z);
    float _261 = _191 + (-fp_c5_1._m0[23].y);
    int _263 = max(0, min(int(trunc((_237 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _265 = _173 * _175;
    float _267 = _239 + (-fp_c9_1._m0[32].w);
    float _269 = inversesqrt(fma(_259, _259, fma(_261, _261, _257 * _257)));
    float _271 = _175 * _171;
    float _273 = _267;
    if (_239 < fp_c9_1._m0[32].w)
    {
        _273 = _267 * (-5.0);
    }
    float _275 = clamp(_195 + (-_199), 0.0, 1.0);
    float _277 = _171 * _171;
    float _279 = _257 * _269;
    float _281 = _261 * _269;
    float _283 = _259 * _269;
    float _285 = _173 * _171;
    float _287 = _177 * _177;
    float _289 = _287 * _287;
    float _291 = max(fma(_171, _283, fma(_175, _281, _173 * _279)), fp_c1_1._m0[0].w) * max(fma(_171, _283, fma(_175, _281, _173 * _279)), fp_c1_1._m0[0].w);
    float _293 = fma(_171, -fp_c5_1._m0[23].z, fma(_175, -fp_c5_1._m0[23].y, _173 * (-fp_c5_1._m0[23].x)));
    float _295 = max(fma(_193, _283, fma(_191, _281, _189 * _279)), fp_c1_1._m0[0].w);
    float _297 = fma(_173, _173, -(_175 * _175));
    float _299 = (_251 * 0.5) * _251;
    float _301 = max(_293, fp_c1_1._m0[0].w);
    float _303 = clamp(_293 + (-0.0), 0.0, 1.0);
    float _305 = 1.0 / (fp_c6_1._m0[38].z + 1.0);
    float _307 = 1.0 / (_299 + fma(_201, -_299, _201));
    uint _310 = uint(int(uint((((int(uint(_263) >> uint(16)) * 20) << 16) + (((_263 & 65535) * 20) + max(0, min(int(trunc((_235 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _312 = fp_c10_1._m0[int(uint(int(_310)) >> uint(2))][int(_310) & 3];
    float _314 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w) * max(0.0, ((-_175) + 1.2000000476837158203125) * (clamp(fma(_273, -(1.0 / fma(clamp((-_175) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].y), 0.0, 1.0) * clamp(fma(_273, -(1.0 / fma(clamp((-_175) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].y), 0.0, 1.0)));
    float _316 = clamp(_293 + fp_c6_1._m0[38].z, 0.0, 1.0) * _305;
    float _318 = exp2(_295 * fma(_295, fp_c1_1._m0[1].x, -6.9831600189208984375));
    float _320 = (_307 * (1.0 / (_299 + fma(_299, -_301, _301)))) * ((_287 * (1.0 / max(fma(_291, _289, -_291) + 1.0, fp_c1_1._m0[0].w))) * (_287 * (1.0 / max(fma(_291, _289, -_291) + 1.0, fp_c1_1._m0[0].w))));
    float _322 = _122.y * fp_c6_1._m0[19].y;
    float _324 = _122.x * fp_c6_1._m0[19].x;
    float _326 = (-_227.y) + 1.0;
    float _328 = clamp(_85.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _330 = clamp(texture(fp_tex_tcb_18, vec2(_92, _94)).x + (-0.0), 0.0, 1.0);
    float _332 = fma(fma(_275, (-_219) + _225.x, _219), fma(_247, _231, _233), fma(_314, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_297, fp_c5_1._m0[31].x, (fma(_171, fp_c5_1._m0[25].z, fma(_175, fp_c5_1._m0[25].y, _173 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_285, fp_c5_1._m0[28].w, fma(_277, fp_c5_1._m0[28].z, fma(_271, fp_c5_1._m0[28].y, _265 * fp_c5_1._m0[28].x)))))) * fma(_241, -_247, _241));
    float _334 = fma(fma(_275, (-_221) + _225.y, _221), fma(_249, _231, _233), fma(_314, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_297, fp_c5_1._m0[31].y, (fma(_171, fp_c5_1._m0[26].z, fma(_175, fp_c5_1._m0[26].y, _173 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_285, fp_c5_1._m0[29].w, fma(_277, fp_c5_1._m0[29].z, fma(_271, fp_c5_1._m0[29].y, _265 * fp_c5_1._m0[29].x)))))) * fma(_243, -_249, _243));
    float _336 = fma(fma(_275, (-_223) + _225.z, _223), fma(_253, _231, _233), fma(_314, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_297, fp_c5_1._m0[31].z, (fma(_171, fp_c5_1._m0[27].z, fma(_175, fp_c5_1._m0[27].y, _173 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_285, fp_c5_1._m0[30].w, fma(_277, fp_c5_1._m0[30].z, fma(_271, fp_c5_1._m0[30].y, _265 * fp_c5_1._m0[30].x)))))) * fma(_245, -_253, _245));
    float _338 = _326 * _328;
    float _340 = clamp((-fma(max((-_227.x) + 1.0, _326), _328, fma(texture(fp_tex_tcb_28, vec2((_83.x * gl_FragCoord.w) * _187, (_83.y * gl_FragCoord.w) * _187)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _342 = floatBitsToInt(_312);
    float _344 = _334;
    float _346 = _332;
    float _348 = _336;
    float _350 = _332;
    float _352 = _334;
    float _354 = _336;
    if (floatBitsToInt(_312) != (-1))
    {
        float _356 = 1.0 / fp_c6_1._m0[18].y;
        float _358 = clamp(fma(_338, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _360 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
        float _362 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _364 = 0;
        float _368;
        float _370;
        float _372;
        int _462;
        do
        {
            int _366 = _342 & 255;
            _368 = _346;
            _370 = _344;
            _372 = _348;
            _374 = uint(_366) >= 30u;
            if (_374)
            {
                break;
            }
            int _376 = _366 << 4;
            uint _378 = uint(int(uint(_376 + 7360) >> uint(2)));
            int _380 = int(_378) + 1;
            uint _382 = uint(int(uint(_376 + 7368) >> uint(2)));
            float _384 = (-_235) + fp_c10_1._m0[int(uint(int(_378)) >> uint(2))][int(_378) & 3];
            float _386 = (-_239) + fp_c10_1._m0[int(uint(_380) >> uint(2))][_380 & 3];
            float _388 = (-_237) + fp_c10_1._m0[int(uint(int(_382)) >> uint(2))][int(_382) & 3];
            float _390 = fma(_388, _388, fma(_386, _386, _384 * _384));
            float _392 = _384 * inversesqrt(_390);
            float _394 = _386 * inversesqrt(_390);
            float _396 = _388 * inversesqrt(_390);
            float _398 = _189 + _392;
            float _400 = _191 + _394;
            float _402 = _193 + _396;
            uint _404 = uint(int(uint(_376 + 6880) >> uint(2)));
            int _406 = int(_404) + 1;
            float _408 = inversesqrt(fma(_402, _402, fma(_400, _400, _398 * _398)));
            float _410 = _398 * _408;
            float _412 = _400 * _408;
            float _414 = _402 * _408;
            uint _416 = uint(int(uint(_376 + 8320) >> uint(2)));
            float _418 = fma(_171, _396, fma(_175, _394, _173 * _392));
            float _420 = max(fma(_193, _414, fma(_191, _412, _189 * _410)), fp_c1_1._m0[0].w);
            float _422 = max(fma(_171, _414, fma(_175, _412, _173 * _410)), fp_c1_1._m0[0].w) * max(fma(_171, _414, fma(_175, _412, _173 * _410)), fp_c1_1._m0[0].w);
            float _424 = max(_418, fp_c1_1._m0[0].w);
            uint _426 = uint(int(uint(_376 + 6408) >> uint(2)));
            int _428 = int(_426) + 1;
            uint _430 = uint(int(uint(_376 + 6400) >> uint(2)));
            int _432 = int(_430) + 1;
            bool _434 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_416)) >> uint(2))][int(_416) & 3]) != 0;
            float _436 = fp_c10_1._m0[int(uint(_406) >> uint(2))][_406 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_404)) >> uint(2))][int(_404) & 3], -sqrt(_390), fp_c1_1._m0[0].y), 0.0, 1.0));
            float _438 = exp2(_420 * fma(_420, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _440 = (_307 * (1.0 / (_299 + fma(_299, -_424, _424)))) * ((_287 * (1.0 / max(fma(_289, _422, -_422) + 1.0, fp_c1_1._m0[0].w))) * (_287 * (1.0 / max(fma(_289, _422, -_422) + 1.0, fp_c1_1._m0[0].w))));
            float _442 = _436;
            if (!_434)
            {
                _442 = 1.0;
            }
            float _444 = _442;
            if (_434)
            {
                uint _446 = uint(int(uint(_376 + 7840) >> uint(2)));
                int _448 = int(_446) + 1;
                uint _450 = uint(int(uint(_376 + 7848) >> uint(2)));
                uint _452 = uint(int(uint(_376 + 6888) >> uint(2)));
                float _454 = fp_c10_1._m0[int(uint(int(_452)) >> uint(2))][int(_452) & 3];
                int _456 = int(_452) + 1;
                _444 = exp2(fp_c10_1._m0[int(uint(_456) >> uint(2))][_456 & 3] * log2(clamp(((-_454) + fma(_396, -fp_c10_1._m0[int(uint(int(_450)) >> uint(2))][int(_450) & 3], fma(_394, -fp_c10_1._m0[int(uint(_448) >> uint(2))][_448 & 3], _392 * (-fp_c10_1._m0[int(uint(int(_446)) >> uint(2))][int(_446) & 3])))) * (1.0 / ((-_454) + 1.0)), 0.0, 1.0)));
            }
            float _458 = exp2(_436) * _444;
            float _460 = clamp(_418 + (-0.0), 0.0, 1.0);
            _462 = _364 + 1;
            float _464 = clamp(_418 + fp_c6_1._m0[38].z, 0.0, 1.0) * _305;
            float _466 = fp_c10_1._m0[int(uint(_428) >> uint(2))][_428 & 3] * _458;
            float _468 = exp2(log2(clamp(fma(_197, -clamp((-_418) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_362, fp_c1_1._m0[2].x, exp2(_356 * log2(clamp(max(fma(_193, -_396, fma(_191, -_394, _189 * (-_392))), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0))) * _362) + 0.20000000298023223876953125);
            float _470 = _344 + fma((fp_c10_1._m0[int(uint(_432) >> uint(2))][_432 & 3] * (_458 * (_464 * clamp(_460 + fp_c6_1._m0[39].y, 0.0, 1.0)))) * fma(_243, fp_c1_1._m0[1].z, ((_249 + fma(_249, -_438, _438)) * _440) * 0.079577468335628509521484375), _360, _358 * ((_468 * (_322 * _466)) * fp_c6_1._m0[18].x));
            float _472 = _346 + fma((fp_c10_1._m0[int(uint(int(_430)) >> uint(2))][int(_430) & 3] * (_458 * (_464 * clamp(_460 + fp_c6_1._m0[39].x, 0.0, 1.0)))) * fma(_241, fp_c1_1._m0[1].z, ((_247 + fma(_247, -_438, _438)) * _440) * 0.079577468335628509521484375), _360, _358 * ((_468 * (_324 * _466)) * fp_c6_1._m0[18].x));
            float _474 = _348 + fma((fp_c10_1._m0[int(uint(int(_426)) >> uint(2))][int(_426) & 3] * (_458 * (_464 * clamp(_460 + fp_c6_1._m0[39].z, 0.0, 1.0)))) * fma(_245, fp_c1_1._m0[1].z, ((_253 + fma(_253, -_438, _438)) * _440) * 0.079577468335628509521484375), _360, _358 * ((_468 * (_255 * _466)) * fp_c6_1._m0[18].x));
            _342 = int(uint(_342) >> uint(8));
            _364 = _462;
            _344 = _470;
            _346 = _472;
            _348 = _474;
            _368 = _472;
            _370 = _470;
            _372 = _474;
        } while (!(_462 >= 4));
        _374 = false;
        _350 = _368;
        _352 = _370;
        _354 = _372;
        if ((_342 & 255) == 30)
        {
            float _476 = 1.0 / (fma(_237, fp_c10_1._m0[565].z, fma(_239, fp_c10_1._m0[565].y, _235 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _478 = 1.0 / fp_c10_1._m0[561].y;
            float _480 = _235 + (-fp_c10_1._m0[557].x);
            float _482 = _480 * fp_c10_1._m0[558].z;
            float _484 = _237 + (-fp_c10_1._m0[557].z);
            float _486 = (-_235) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_478, fp_c10_1._m0[557].x);
            float _488 = _484 * fp_c10_1._m0[558].x;
            float _490 = (-_237) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_478, fp_c10_1._m0[557].z);
            float _492 = _486 * _486;
            float _494 = ((-float(_488 < _482)) + float(_488 > _482)) * fp_c10_1._m0[561].y;
            float _496 = sqrt(fma(_490, _490, _492)) * (-fp_c10_1._m0[558].y);
            float _498 = fma(_484, _484, _480 * _480);
            float _500 = inversesqrt(fma(_490, _490, fma(_496, _496, _492)));
            float _502 = fma(_484, fp_c10_1._m0[558].z, _480 * fp_c10_1._m0[558].x);
            bool _504 = _502 > 0.0;
            float _506 = _486 * _500;
            float _508 = _498;
            if (_504)
            {
                _508 = sqrt(_498);
            }
            float _510 = _490 * _500;
            float _512 = _496 * _500;
            float _514 = _189 + _506;
            float _516 = inversesqrt(fma(_510, _510, _506 * _506));
            float _518 = _191 + _512;
            float _520 = _193 + _510;
            bool _522 = fma(_484 * inversesqrt(_498), fp_c10_1._m0[558].z, (_480 * inversesqrt(_498)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _524 = _508;
            if (!_504)
            {
                _524 = 1.0;
            }
            float _526 = clamp(fma(_502 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].y), 0.0, 1.0) * clamp(fma(_502 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].y), 0.0, 1.0);
            float _528 = inversesqrt(fma(_520, _520, fma(_518, _518, _514 * _514)));
            float _530 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_480, fma(_494, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_484 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_494 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_480, fma(_494, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_484 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_494 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _532 = fma(_171, _510, fma(_175, _512, _173 * _506));
            float _534 = _514 * _528;
            float _536 = _518 * _528;
            float _538 = _520 * _528;
            float _540 = _526;
            if (_522)
            {
                _540 = fma(_530, -_530, fp_c1_1._m0[0].y) * fma(_530, -_530, fp_c1_1._m0[0].y);
            }
            float _542 = _540;
            if (!_522)
            {
                _542 = 1.0;
            }
            float _544 = max(_532, fp_c1_1._m0[0].w);
            float _546 = max(fma(_171, _538, fma(_175, _536, _173 * _534)), fp_c1_1._m0[0].w) * max(fma(_171, _538, fma(_175, _536, _173 * _534)), fp_c1_1._m0[0].w);
            float _548 = ((-1.0) + fp_c6_1._m0[18].y) * ((-1.0) + fp_c6_1._m0[18].y);
            float _550 = max(fma(_193, _538, fma(_191, _536, _189 * _534)), fp_c1_1._m0[0].w);
            float _552 = clamp(_532 + (-0.0), 0.0, 1.0);
            float _554 = clamp(_532 + fp_c6_1._m0[38].z, 0.0, 1.0) * (1.0 / (1.0 + fp_c6_1._m0[38].z));
            float _556 = min(fma(_526, -_526, fp_c1_1._m0[0].y) * fma(_526, -_526, fp_c1_1._m0[0].y), _542) * (exp2(log2(clamp(fma(_524, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_510 * _516, -fp_c10_1._m0[558].z, (_506 * _516) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w));
            float _558 = exp2(_550 * fma(_550, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _560 = (_307 * (1.0 / (_299 + fma(_299, -_544, _544)))) * ((_287 * (1.0 / max(fma(_289, _546, -_546) + 1.0, fp_c1_1._m0[0].w))) * (_287 * (1.0 / max(fma(_289, _546, -_546) + 1.0, fp_c1_1._m0[0].w))));
            float _562 = (fma(_548, fp_c1_1._m0[2].x, exp2(_356 * log2(clamp(max(fma(_193, -_510, fma(_191, -_512, _189 * (-_506))), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0))) * _548) + 0.20000000298023223876953125) * exp2(log2(clamp(fma(_197, -clamp((-_532) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].y), 0.0, 1.0)) * fp_c6_1._m0[18].z);
            float _564 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_237, fp_c10_1._m0[562].z, fma(_239, fp_c10_1._m0[562].y, _235 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _476, 0.5, 0.5), (-fma((fma(_237, fp_c10_1._m0[563].z, fma(_239, fp_c10_1._m0[563].y, _235 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _476, 0.5, 0.5)) + 1.0)).z > fma((fma(_237, fp_c10_1._m0[564].z, fma(_239, fp_c10_1._m0[564].y, _235 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _476, 0.5, 0.5)) || (_502 <= 0.0));
            _350 = fma(fma(_360, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * ((_554 * clamp(_552 + fp_c6_1._m0[39].x, 0.0, 1.0)) * _556)) * fma(_241, fp_c1_1._m0[1].z, (_560 * (_247 + fma(_247, -_558, _558))) * 0.079577468335628509521484375), _358 * ((_562 * (_324 * _556)) * fp_c6_1._m0[18].x)), _564, _368);
            _352 = fma(fma(_360, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * ((_554 * clamp(_552 + fp_c6_1._m0[39].y, 0.0, 1.0)) * _556)) * fma(_243, fp_c1_1._m0[1].z, (_560 * (_249 + fma(_249, -_558, _558))) * 0.079577468335628509521484375), _358 * ((_562 * (_322 * _556)) * fp_c6_1._m0[18].x)), _564, _370);
            _354 = fma(fma(_360, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * ((_554 * clamp(_552 + fp_c6_1._m0[39].z, 0.0, 1.0)) * _556)) * fma(_245, fp_c1_1._m0[1].z, (_560 * (_253 + fma(_253, -_558, _558))) * 0.079577468335628509521484375), _358 * ((_562 * (_255 * _556)) * fp_c6_1._m0[18].x)), _564, _372);
        }
    }
    float _566 = _235 + (-fp_c3_1._m0[11].w);
    float _568 = _237 + (-fp_c3_1._m0[13].w);
    float _570 = _239 + (-fp_c3_1._m0[12].w);
    float _572 = fma(_568, _568, fma(_570, _570, _566 * _566));
    float _574 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
    float _576 = clamp(fma(_338, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _578 = clamp(1.0 + (-fp_c6_1._m0[18].x), 0.0, 1.0);
    float _580 = exp2(log2(clamp(fma(_197, -clamp((-_293) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].y), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_574, fp_c1_1._m0[2].x, _574 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_193, fp_c5_1._m0[23].z, fma(_191, fp_c5_1._m0[23].y, _189 * fp_c5_1._m0[23].x)), fp_c1_1._m0[1].w) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _582 = clamp(fma(_330 * _340, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _584 = exp2(log2(clamp(sqrt(_572) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_568 * inversesqrt(_572), fp_c5_1._m0[23].z, fma(_570 * inversesqrt(_572), fp_c5_1._m0[23].y, (_566 * inversesqrt(_572)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _586 = fma(_330, _350, fma(_340, _578 * (fma((_247 + fma(_247, -_318, _318)) * _320, fp_c1_1._m0[1].y, _241 * 0.3183098733425140380859375) * ((clamp(_303 + fp_c6_1._m0[39].x, 0.0, 1.0) * _316) * fp_c5_1._m0[5].x)), _576 * (((_324 * fp_c5_1._m0[5].w) * _580) * fp_c6_1._m0[18].x)));
    float _588 = fma(_330, _352, fma(_340, _578 * (fma((_249 + fma(_249, -_318, _318)) * _320, fp_c1_1._m0[1].y, _243 * 0.3183098733425140380859375) * ((clamp(_303 + fp_c6_1._m0[39].y, 0.0, 1.0) * _316) * fp_c5_1._m0[5].y)), _576 * (((_322 * fp_c5_1._m0[5].w) * _580) * fp_c6_1._m0[18].x)));
    float _590 = fma(_330, _354, fma(_340, _578 * (fma((_253 + fma(_253, -_318, _318)) * _320, fp_c1_1._m0[1].y, _245 * 0.3183098733425140380859375) * ((clamp(_303 + fp_c6_1._m0[39].z, 0.0, 1.0) * _316) * fp_c5_1._m0[5].z)), _576 * (((_255 * fp_c5_1._m0[5].w) * _580) * fp_c6_1._m0[18].x)));
    float _592 = clamp(fma(fma(_237, fp_c5_1._m0[14].z, fma(_239, fp_c5_1._m0[14].y, _235 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _594 = fma((-_586) + fp_c5_1._m0[13].x, _592, _586);
    float _596 = fma((-_588) + fp_c5_1._m0[13].y, _592, _588);
    float _598 = fma((-_590) + fp_c5_1._m0[13].z, _592, _590);
    float _600 = clamp((-exp2((clamp(fma(sqrt(_572), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_594) + fma(fma((_584 * fp_c7_1._m0[55].x) * _582, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _600, _594);
    _79.y = fma((-_596) + fma(fma((_584 * fp_c7_1._m0[55].y) * _582, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _600, _596);
    _79.z = fma((-_598) + fma(fma((_584 * fp_c7_1._m0[55].z) * _582, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _600, _598);
    _79.w = clamp(_96 + (-0.0), 0.0, 1.0);
}


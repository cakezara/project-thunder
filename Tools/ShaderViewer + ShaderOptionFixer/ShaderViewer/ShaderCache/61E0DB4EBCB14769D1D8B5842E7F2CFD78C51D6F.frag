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

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _66;
layout(location = 1) in vec4 _68;
layout(location = 2) in vec4 _70;
layout(location = 0) out vec4 _73;
layout(location = 4) in vec4 _75;
layout(location = 6) in vec4 _77;
layout(location = 5) in vec4 _79;
layout(location = 3) in vec4 _81;
uint _6[12];

void main()
{
    bool _326 = false;
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
    float _106 = texture(fp_tex_tcb_12, vec2(_88, _90)).x;
    vec3 _110 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _112 = _110.x;
    float _114 = _110.y;
    float _116 = _110.z;
    float _118 = _68.x;
    float _120 = _68.y;
    float _122 = _68.z;
    float _124 = _70.y;
    float _126 = _70.z;
    float _128 = _70.x;
    float _130 = _70.w;
    float _132 = inversesqrt(fma(_122, _122, fma(_120, _120, _118 * _118)));
    float _134 = _122 * _132;
    float _136 = _118 * _132;
    float _138 = _120 * _132;
    int _141 = floatBitsToInt(_132);
    int _143 = floatBitsToInt(_130);
    if (_96)
    {
        _141 = 0;
    }
    float _145 = fma(_138, _126, -(_134 * _124));
    float _147 = fma(_134, _128, -(_136 * _126));
    int _149 = floatBitsToInt(_145);
    int _151 = floatBitsToInt(_147);
    if (_96)
    {
        _149 = 0;
    }
    if (_96)
    {
        _151 = 0;
    }
    if (_96)
    {
        _143 = 0;
    }
    if (_96)
    {
        _73.x = intBitsToFloat(_149);
        _73.y = intBitsToFloat(_151);
        _73.z = intBitsToFloat(_141);
        _73.w = intBitsToFloat(_143);
        return;
    }
    float _153 = _75.x;
    float _155 = _75.y;
    float _157 = _75.z;
    float _159 = max(texture(fp_tex_tcb_10, vec2(_88, _90)).x, fp_c1_1._m0[0].x);
    float _161 = sqrt(clamp((-fma(_102, _102, _104 * _104)) + 1.0, 0.0, 1.0));
    float _163 = fma(_136, _161, fma(_102, _128, _104 * (_145 * _130)));
    float _165 = fma(_138, _161, fma(_102, _124, _104 * (_147 * _130)));
    float _167 = fma(_134, _161, fma(_102, _126, _104 * (fma(_136, _124, -(_138 * _128)) * _130)));
    float _169 = inversesqrt(fma(_157, _157, fma(_155, _155, _153 * _153)));
    float _171 = clamp(texture(fp_tex_tcb_18, vec2(_88, _90)).x + (-0.0), 0.0, 1.0);
    float _173 = inversesqrt(fma(_167, _167, fma(_165, _165, _163 * _163)));
    float _175 = _153 * (-_169);
    float _177 = _155 * (-_169);
    float _179 = 1.0 / (_77.z * gl_FragCoord.w);
    float _181 = _163 * _173;
    float _183 = _165 * _173;
    float _185 = _157 * (-_169);
    float _187 = _167 * _173;
    float _189 = fma(_187, _185, fma(_183, _177, _181 * _175));
    float _191 = 1.0 / _79.w;
    float _193 = max(_189, fp_c1_1._m0[0].z);
    float _195 = fma(_181 * (-_189), -2.0, -_175);
    float _197 = fma(_183 * (-_189), -2.0, -_177);
    float _199 = fma(_187 * (-_189), -2.0, -_185);
    float _201 = 1.0 / max(abs(_199), max(abs(_195), abs(_197)));
    vec2 _203 = texture(fp_tex_tcb_2A, vec2(fma(_79.x * _191, 0.5, 0.5), fma(_79.y * _191, -0.5, 0.5))).xy;
    vec2 _205 = texture(fp_tex_tcb_38, vec2(_193, (-_159) + (-0.0))).xy;
    float _207 = _205.x;
    float _209 = _205.y;
    vec3 _211 = texture(fp_tex_tcb_36, vec4(_195 * _201, _197 * _201, _199 * _201, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_159 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _213 = _81.x;
    float _215 = _81.z;
    float _217 = _175 * _177;
    float _219 = _177 * _185;
    float _221 = _175 + (-fp_c5_1._m0[23].x);
    float _223 = _175 * _185;
    float _225 = _185 * _185;
    float _227 = _177 + (-fp_c5_1._m0[23].y);
    float _229 = fma(_106, _116 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _231 = fma(_106, _112 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _233 = fma(_175, _175, -(_177 * _177));
    float _235 = _185 + (-fp_c5_1._m0[23].z);
    float _237 = fma(_106, _114 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    int _239 = max(0, min(int(trunc((_215 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _241 = _181 * _187;
    float _243 = inversesqrt(fma(_235, _235, fma(_227, _227, _221 * _221)));
    float _245 = _181 * _183;
    float _247 = _221 * _243;
    float _249 = _227 * _243;
    float _251 = _235 * _243;
    float _253 = _183 * _187;
    float _255 = _187 * _187;
    float _257 = fma(_159, 0.5, 0.5);
    float _259 = _159 * _159;
    float _261 = fma(_183, -fp_c5_1._m0[23].y, _181 * (-fp_c5_1._m0[23].x));
    float _263 = max(fma(_187, _251, fma(_183, _249, _181 * _247)), fp_c1_1._m0[0].z) * max(fma(_187, _251, fma(_183, _249, _181 * _247)), fp_c1_1._m0[0].z);
    float _265 = max(fma(_187, -fp_c5_1._m0[23].z, _261), fp_c1_1._m0[0].z);
    float _267 = max(fma(_185, _251, fma(_177, _249, _175 * _247)), fp_c1_1._m0[0].z);
    float _269 = (_257 * 0.5) * _257;
    float _271 = 1.0 / (_269 + fma(_193, -_269, _193));
    float _273 = exp2(_267 * fma(_267, fp_c1_1._m0[0].w, -6.9831600189208984375));
    uint _276 = uint(int(uint((((int(uint(_239) >> uint(16)) * 20) << 16) + (((_239 & 65535) * 20) + max(0, min(int(trunc((_213 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _278 = fp_c10_1._m0[int(uint(int(_276)) >> uint(2))][int(_276) & 3];
    float _280 = exp2(log2(clamp((-_189) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
    float _282 = fma(_181, _181, -(_183 * _183));
    float _284 = fma(max(0.0, fma(_233, fp_c5_1._m0[31].x, (fma(_185, -fp_c5_1._m0[25].z, fma(_177, -fp_c5_1._m0[25].y, _175 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_223, fp_c5_1._m0[28].w, fma(_225, fp_c5_1._m0[28].z, fma(_219, fp_c5_1._m0[28].y, _217 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[45].x, _280, fma(_112, -_106, _112));
    float _286 = fma(max(0.0, fma(_233, fp_c5_1._m0[31].y, (fma(_185, -fp_c5_1._m0[26].z, fma(_177, -fp_c5_1._m0[26].y, _175 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_223, fp_c5_1._m0[29].w, fma(_225, fp_c5_1._m0[29].z, fma(_219, fp_c5_1._m0[29].y, _217 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[45].y, _280, fma(_114, -_106, _114));
    float _288 = (_271 * (1.0 / (_269 + fma(_269, -_265, _265)))) * ((_259 * (1.0 / max(fma(_263, _259 * _259, -_263) + 1.0, fp_c1_1._m0[0].z))) * (_259 * (1.0 / max(fma(_263, _259 * _259, -_263) + 1.0, fp_c1_1._m0[0].z))));
    float _290 = fma(max(0.0, fma(_233, fp_c5_1._m0[31].z, (fma(_185, -fp_c5_1._m0[27].z, fma(_177, -fp_c5_1._m0[27].y, _175 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_223, fp_c5_1._m0[30].w, fma(_225, fp_c5_1._m0[30].z, fma(_219, fp_c5_1._m0[30].y, _217 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[45].z, _280, fma(_116, -_106, _116));
    float _292 = clamp(fma(_187, -fp_c5_1._m0[23].z, _261), 0.0, 1.0);
    float _294 = fma(fma(_231, _207, _209), _211.x, fma(_284, -_231, _284) * max(0.0, fma(_282, fp_c5_1._m0[31].x, (fma(_187, fp_c5_1._m0[25].z, fma(_183, fp_c5_1._m0[25].y, _181 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_241, fp_c5_1._m0[28].w, fma(_255, fp_c5_1._m0[28].z, fma(_253, fp_c5_1._m0[28].y, _245 * fp_c5_1._m0[28].x))))));
    float _296 = fma(fma(_237, _207, _209), _211.y, fma(_286, -_237, _286) * max(0.0, fma(_282, fp_c5_1._m0[31].y, (fma(_187, fp_c5_1._m0[26].z, fma(_183, fp_c5_1._m0[26].y, _181 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_241, fp_c5_1._m0[29].w, fma(_255, fp_c5_1._m0[29].z, fma(_253, fp_c5_1._m0[29].y, _245 * fp_c5_1._m0[29].x))))));
    float _298 = fma(fma(_229, _207, _209), _211.z, fma(_290, -_229, _290) * max(0.0, fma(_282, fp_c5_1._m0[31].z, (fma(_187, fp_c5_1._m0[27].z, fma(_183, fp_c5_1._m0[27].y, _181 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_241, fp_c5_1._m0[30].w, fma(_255, fp_c5_1._m0[30].z, fma(_253, fp_c5_1._m0[30].y, _245 * fp_c5_1._m0[30].x))))));
    float _300 = clamp((-fma(max((-_203.x) + 1.0, (-_203.y) + 1.0), clamp(_81.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_77.x * gl_FragCoord.w) * _179, (_77.y * gl_FragCoord.w) * _179)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _302 = floatBitsToInt(_278);
    float _304 = _294;
    float _306 = _296;
    float _308 = _298;
    float _310 = _296;
    float _312 = _298;
    float _314 = _294;
    if (floatBitsToInt(_278) != (-1))
    {
        int _316 = 0;
        float _320;
        float _322;
        float _324;
        int _408;
        do
        {
            int _318 = _302 & 255;
            _320 = _304;
            _322 = _306;
            _324 = _308;
            _326 = uint(_318) >= 30u;
            if (_326)
            {
                break;
            }
            int _328 = _318 << 4;
            uint _330 = uint(int(uint(_328 + 7360) >> uint(2)));
            int _332 = int(_330) + 1;
            uint _334 = uint(int(uint(_328 + 7368) >> uint(2)));
            float _336 = (-_213) + fp_c10_1._m0[int(uint(int(_330)) >> uint(2))][int(_330) & 3];
            float _338 = fp_c10_1._m0[int(uint(_332) >> uint(2))][_332 & 3] + (-_81.y);
            float _340 = (-_215) + fp_c10_1._m0[int(uint(int(_334)) >> uint(2))][int(_334) & 3];
            float _342 = fma(_340, _340, fma(_338, _338, _336 * _336));
            float _344 = _336 * inversesqrt(_342);
            float _346 = _338 * inversesqrt(_342);
            float _348 = _340 * inversesqrt(_342);
            float _350 = _175 + _344;
            float _352 = _177 + _346;
            float _354 = _185 + _348;
            float _356 = inversesqrt(fma(_354, _354, fma(_352, _352, _350 * _350)));
            float _358 = _350 * _356;
            float _360 = _352 * _356;
            float _362 = _354 * _356;
            float _364 = max(fma(_185, _362, fma(_177, _360, _175 * _358)), fp_c1_1._m0[0].z);
            uint _366 = uint(int(uint(_328 + 6880) >> uint(2)));
            int _368 = int(_366) + 1;
            float _370 = max(fma(_187, _362, fma(_183, _360, _181 * _358)), fp_c1_1._m0[0].z) * max(fma(_187, _362, fma(_183, _360, _181 * _358)), fp_c1_1._m0[0].z);
            float _372 = fma(_187, _348, fma(_183, _346, _181 * _344));
            uint _374 = uint(int(uint(_328 + 8320) >> uint(2)));
            float _376 = max(_372, fp_c1_1._m0[0].z);
            float _378 = exp2(_364 * fma(_364, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _380 = ((_259 * (1.0 / max(fma(_259 * _259, _370, -_370) + 1.0, fp_c1_1._m0[0].z))) * (_259 * (1.0 / max(fma(_259 * _259, _370, -_370) + 1.0, fp_c1_1._m0[0].z)))) * (_271 * (1.0 / (_269 + fma(_269, -_376, _376))));
            bool _382 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_374)) >> uint(2))][int(_374) & 3]) != 0;
            float _384 = (_231 + fma(_231, -_378, _378)) * _380;
            uint _386 = uint(int(uint(_328 + 6408) >> uint(2)));
            uint _388 = uint(int(uint(_328 + 6400) >> uint(2)));
            int _390 = int(_388) + 1;
            float _392 = _384;
            if (!_382)
            {
                _392 = 1.0;
            }
            float _394 = _392;
            if (_382)
            {
                uint _396 = uint(int(uint(_328 + 7840) >> uint(2)));
                int _398 = int(_396) + 1;
                uint _400 = uint(int(uint(_328 + 7848) >> uint(2)));
                uint _402 = uint(int(uint(_328 + 6888) >> uint(2)));
                float _404 = fp_c10_1._m0[int(uint(int(_402)) >> uint(2))][int(_402) & 3];
                int _406 = int(_402) + 1;
                _394 = exp2(fp_c10_1._m0[int(uint(_406) >> uint(2))][_406 & 3] * log2(clamp(((-_404) + fma(_348, -fp_c10_1._m0[int(uint(int(_400)) >> uint(2))][int(_400) & 3], fma(_346, -fp_c10_1._m0[int(uint(_398) >> uint(2))][_398 & 3], _344 * (-fp_c10_1._m0[int(uint(int(_396)) >> uint(2))][int(_396) & 3])))) * (1.0 / ((-_404) + 1.0)), 0.0, 1.0)));
            }
            _408 = _316 + 1;
            float _410 = (exp2(fp_c10_1._m0[int(uint(_368) >> uint(2))][_368 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3], -sqrt(_342), fp_c1_1._m0[1].y), 0.0, 1.0))) * _394) * clamp(_372 + (-0.0), 0.0, 1.0);
            float _412 = fma(fp_c10_1._m0[int(uint(int(_388)) >> uint(2))][int(_388) & 3] * _410, fma(_284, fp_c1_1._m0[1].z, _384 * 0.079577468335628509521484375), _304);
            float _414 = fma(fp_c10_1._m0[int(uint(_390) >> uint(2))][_390 & 3] * _410, fma(_286, fp_c1_1._m0[1].z, ((_237 + fma(_237, -_378, _378)) * _380) * 0.079577468335628509521484375), _306);
            float _416 = fma(fp_c10_1._m0[int(uint(int(_386)) >> uint(2))][int(_386) & 3] * _410, fma(_290, fp_c1_1._m0[1].z, ((_229 + fma(_229, -_378, _378)) * _380) * 0.079577468335628509521484375), _308);
            _302 = int(uint(_302) >> uint(8));
            _316 = _408;
            _304 = _412;
            _306 = _414;
            _308 = _416;
            _320 = _412;
            _322 = _414;
            _324 = _416;
        } while (!(_408 >= 4));
        _326 = false;
        _310 = _322;
        _312 = _324;
        _314 = _320;
        if ((_302 & 255) == 30)
        {
            float _418 = 1.0 / fp_c10_1._m0[561].y;
            float _420 = _215 + (-fp_c10_1._m0[557].z);
            float _422 = _420 * fp_c10_1._m0[558].x;
            float _424 = (-_213) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_418, fp_c10_1._m0[557].x);
            float _426 = (-_215) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_418, fp_c10_1._m0[557].z);
            float _428 = _424 * _424;
            float _430 = _213 + (-fp_c10_1._m0[557].x);
            float _432 = sqrt(fma(_426, _426, _428)) * (-fp_c10_1._m0[558].y);
            float _434 = inversesqrt(fma(_426, _426, fma(_432, _432, _428)));
            float _436 = _424 * _434;
            float _438 = _432 * _434;
            float _440 = _426 * _434;
            float _442 = _430 * fp_c10_1._m0[558].z;
            float _444 = _175 + _436;
            float _446 = _177 + _438;
            float _448 = _185 + _440;
            float _450 = _81.y;
            float _452 = inversesqrt(fma(_448, _448, fma(_446, _446, _444 * _444)));
            float _454 = _444 * _452;
            float _456 = _446 * _452;
            float _458 = ((-float(_422 < _442)) + float(_422 > _442)) * fp_c10_1._m0[561].y;
            float _460 = fma(_420, _420, _430 * _430);
            float _462 = 1.0 / (fma(_215, fp_c10_1._m0[565].z, fma(_450, fp_c10_1._m0[565].y, _213 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _464 = fma(_420, fp_c10_1._m0[558].z, _430 * fp_c10_1._m0[558].x);
            float _466 = _448 * _452;
            bool _468 = _464 > 0.0;
            float _470 = fma(_187, _440, fma(_183, _438, _181 * _436));
            float _472 = inversesqrt(fma(_440, _440, _436 * _436));
            float _474 = max(fma(_185, _466, fma(_177, _456, _175 * _454)), fp_c1_1._m0[0].z);
            float _476 = _440;
            if (_468)
            {
                _476 = sqrt(_460);
            }
            float _478 = _476;
            if (!_468)
            {
                _478 = 1.0;
            }
            float _480 = max(fma(_187, _466, fma(_183, _456, _181 * _454)), fp_c1_1._m0[0].z) * max(fma(_187, _466, fma(_183, _456, _181 * _454)), fp_c1_1._m0[0].z);
            float _482 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_430, fma(_458, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_420 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_458 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_430, fma(_458, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_420 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_458 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            bool _484 = fma(_420 * inversesqrt(_460), fp_c10_1._m0[558].z, (_430 * inversesqrt(_460)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _486 = max(_470, fp_c1_1._m0[0].z);
            float _488 = clamp(fma(_464 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_464 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _490 = fma(_474, fp_c1_1._m0[0].w, -6.9831600189208984375);
            float _492 = _490;
            if (_484)
            {
                _492 = fma(_482, -_482, fp_c1_1._m0[1].y) * fma(_482, -_482, fp_c1_1._m0[1].y);
            }
            float _494 = _492;
            if (!_484)
            {
                _494 = 1.0;
            }
            float _496 = exp2(_474 * _490);
            float _498 = (_271 * (1.0 / (_269 + fma(_269, -_486, _486)))) * ((_259 * (1.0 / max(fma(_259 * _259, _480, -_480) + 1.0, fp_c1_1._m0[0].z))) * (_259 * (1.0 / max(fma(_259 * _259, _480, -_480) + 1.0, fp_c1_1._m0[0].z))));
            float _500 = clamp(_470 + (-0.0), 0.0, 1.0) * ((exp2(log2(clamp(fma(_478, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_440 * _472, -fp_c10_1._m0[558].z, (_436 * _472) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_488, -_488, fp_c1_1._m0[1].y) * fma(_488, -_488, fp_c1_1._m0[1].y), _494));
            float _502 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_215, fp_c10_1._m0[562].z, fma(_450, fp_c10_1._m0[562].y, _213 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _462, 0.5, 0.5), (-fma((fma(_215, fp_c10_1._m0[563].z, fma(_450, fp_c10_1._m0[563].y, _213 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _462, 0.5, 0.5)) + 1.0)).z > fma((fma(_215, fp_c10_1._m0[564].z, fma(_450, fp_c10_1._m0[564].y, _213 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _462, 0.5, 0.5)) || (_464 <= 0.0));
            _310 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _500) * fma(_286, fp_c1_1._m0[1].z, ((_237 + fma(_237, -_496, _496)) * _498) * 0.079577468335628509521484375), _502, _322);
            _312 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _500) * fma(_290, fp_c1_1._m0[1].z, ((_229 + fma(_229, -_496, _496)) * _498) * 0.079577468335628509521484375), _502, _324);
            _314 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _500) * fma(_284, fp_c1_1._m0[1].z, ((_231 + fma(_231, -_496, _496)) * _498) * 0.079577468335628509521484375), _502, _320);
        }
    }
    float _504 = _213 + (-fp_c3_1._m0[11].w);
    float _506 = _81.y;
    float _508 = _215 + (-fp_c3_1._m0[13].w);
    float _510 = fma(_171, _310, _300 * (fma(_288 * (_237 + fma(_237, -_273, _273)), fp_c1_1._m0[1].x, _286 * 0.3183098733425140380859375) * (_292 * fp_c5_1._m0[5].y)));
    float _512 = fma(_171, _312, _300 * (fma(_288 * (_229 + fma(_229, -_273, _273)), fp_c1_1._m0[1].x, _290 * 0.3183098733425140380859375) * (_292 * fp_c5_1._m0[5].z)));
    float _514 = _506 + (-fp_c3_1._m0[12].w);
    float _516 = fma(_508, _508, fma(_514, _514, _504 * _504));
    float _518 = clamp(fma(fma(_215, fp_c5_1._m0[14].z, fma(_506, fp_c5_1._m0[14].y, _213 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _520 = fma(_171, _314, _300 * (fma(_288 * (_231 + fma(_231, -_273, _273)), fp_c1_1._m0[1].x, _284 * 0.3183098733425140380859375) * (_292 * fp_c5_1._m0[5].x)));
    float _522 = exp2(log2(clamp(sqrt(_516) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_508 * inversesqrt(_516), fp_c5_1._m0[23].z, fma(_514 * inversesqrt(_516), fp_c5_1._m0[23].y, (_504 * inversesqrt(_516)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _524 = clamp(fma(_171 * _300, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _526 = fma((-_520) + fp_c5_1._m0[13].x, _518, _520);
    float _528 = fma((-_510) + fp_c5_1._m0[13].y, _518, _510);
    float _530 = fma((-_512) + fp_c5_1._m0[13].z, _518, _512);
    float _532 = clamp((-exp2((clamp(fma(sqrt(_516), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _73.x = fma((-_526) + fma(fma((_522 * fp_c7_1._m0[55].x) * _524, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _532, _526);
    _73.y = fma((-_528) + fma(fma((_522 * fp_c7_1._m0[55].y) * _524, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _532, _528);
    _73.z = fma((-_530) + fma(fma((_522 * fp_c7_1._m0[55].z) * _524, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _532, _530);
    _73.w = clamp(_92 + (-0.0), 0.0, 1.0);
}


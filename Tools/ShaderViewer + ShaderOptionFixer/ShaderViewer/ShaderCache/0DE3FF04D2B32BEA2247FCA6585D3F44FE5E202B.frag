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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_18;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _62;
layout(location = 5) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 4) in vec4 _68;
layout(location = 6) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 3) in vec4 _74;
layout(location = 0) out vec4 _77;
uint _6[12];

void main()
{
    bool _322 = false;
    float _84 = _62.x;
    float _86 = _62.y;
    vec2 _90 = texture(fp_tex_tcb_E, vec2(_84, _86)).xy;
    float _92 = _90.x;
    float _94 = _90.y;
    vec3 _98 = texture(fp_tex_tcb_A, vec2(_84, _86)).xyz;
    float _100 = _98.x;
    float _102 = _98.y;
    float _104 = _98.z;
    float _106 = 1.0 / _64.w;
    vec2 _108 = texture(fp_tex_tcb_2A, vec2(fma(_64.x * _106, 0.5, 0.5), fma(_64.y * _106, -0.5, 0.5))).xy;
    float _110 = _66.x;
    float _112 = _68.x;
    float _114 = _66.y;
    float _116 = _68.y;
    float _118 = _66.z;
    float _120 = _68.z;
    float _122 = _72.y;
    float _124 = _72.x;
    float _126 = _72.w;
    float _128 = 1.0 / (_70.z * gl_FragCoord.w);
    float _130 = inversesqrt(fma(_118, _118, fma(_114, _114, _110 * _110)));
    float _132 = inversesqrt(fma(_120, _120, fma(_116, _116, _112 * _112)));
    float _134 = _110 * _130;
    float _136 = _114 * _130;
    float _138 = _112 * (-_132);
    float _140 = _116 * (-_132);
    float _142 = _118 * _130;
    float _144 = _120 * (-_132);
    float _146 = fma(_142, _144, fma(_136, _140, _134 * _138));
    float _148 = max(_146, fp_c1_1._m0[0].z);
    float _150 = fma(_134 * (-_146), -2.0, -_138);
    float _152 = fma(_136 * (-_146), -2.0, -_140);
    float _154 = fma(_142 * (-_146), -2.0, -_144);
    float _156 = 1.0 / max(abs(_154), max(abs(_150), abs(_152)));
    float _158 = _72.z;
    float _160 = max(texture(fp_tex_tcb_10, vec2(_84, _86)).x, fp_c1_1._m0[0].x);
    vec2 _162 = texture(fp_tex_tcb_38, vec2(_148, (-_160) + (-0.0))).xy;
    float _164 = _162.x;
    float _166 = _162.y;
    vec3 _168 = texture(fp_tex_tcb_36, vec4(_150 * _156, _152 * _156, _154 * _156, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_160 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _170 = fma(_160, 0.5, 0.5);
    float _172 = _160 * _160;
    float _174 = sqrt(clamp((-fma(_92, _92, _94 * _94)) + 1.0, 0.0, 1.0));
    float _176 = fma(_134, _174, fma(_92, _124, _94 * (fma(_136, _158, -(_142 * _122)) * _126)));
    float _178 = fma(_136, _174, fma(_92, _122, _94 * (fma(_142, _124, -(_134 * _158)) * _126)));
    float _180 = fma(_142, _174, fma(_92, _158, _94 * (fma(_134, _122, -(_136 * _124)) * _126)));
    float _182 = inversesqrt(fma(_180, _180, fma(_178, _178, _176 * _176)));
    float _184 = _176 * _182;
    float _186 = _178 * _182;
    float _188 = _180 * _182;
    float _190 = _138 * _140;
    float _192 = _144 * _144;
    float _194 = _140 * _144;
    float _196 = fma(_188, _144, fma(_186, _140, _184 * _138));
    float _198 = _138 + (-fp_c5_1._m0[23].x);
    float _200 = _140 + (-fp_c5_1._m0[23].y);
    float _202 = _144 + (-fp_c5_1._m0[23].z);
    float _204 = _138 * _144;
    float _206 = _74.x;
    float _208 = inversesqrt(fma(_202, _202, fma(_200, _200, _198 * _198)));
    float _210 = _198 * _208;
    float _212 = _74.z;
    float _214 = _200 * _208;
    float _216 = clamp(exp2(log2(clamp(max(_196, fp_c1_1._m0[0].y) + (-0.0), 0.0, 1.0)) * fp_c6_1._m0[43].x) * fp_c6_1._m0[43].y, 0.0, 1.0);
    float _218 = _202 * _208;
    float _220 = fma(_216, (-_134) + _184, _134);
    float _222 = fma(_216, (-_136) + _186, _136);
    float _224 = fma(_138, _138, -(_140 * _140));
    float _226 = fma(_216, (-_142) + _188, _142);
    float _228 = _220 * _222;
    float _230 = _222 * _226;
    float _232 = _226 * _226;
    float _234 = fma(_220, _220, -(_222 * _222));
    float _236 = _220 * _226;
    float _238 = max(fma(_144, _218, fma(_140, _214, _138 * _210)), fp_c1_1._m0[0].z);
    int _241 = max(0, min(int(trunc((_212 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _243 = fma(_102, -fp_c6_1._m0[9].x, _102);
    float _245 = fma(_102 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _247 = fma(_104 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _249 = fma(_100 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _251 = fma(_100, -fp_c6_1._m0[9].x, _100);
    float _253 = _172 * _172;
    float _255 = max(fma(_142, _218, fma(_136, _214, _134 * _210)), fp_c1_1._m0[0].z) * max(fma(_142, _218, fma(_136, _214, _134 * _210)), fp_c1_1._m0[0].z);
    float _257 = fma(_104, -fp_c6_1._m0[9].x, _104);
    uint _260 = uint(int(uint((((int(uint(_241) >> uint(16)) * 20) << 16) + (((_241 & 65535) * 20) + max(0, min(int(trunc((_206 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _262 = fp_c10_1._m0[int(uint(int(_260)) >> uint(2))][int(_260) & 3];
    float _264 = max(fma(_142, -fp_c5_1._m0[23].z, fma(_136, -fp_c5_1._m0[23].y, _134 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].z);
    float _266 = (_170 * 0.5) * _170;
    float _268 = exp2(log2(clamp((-_196) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[45].y) * fp_c6_1._m0[45].x;
    float _270 = fma(max(0.0, fma(_224, fp_c5_1._m0[31].x, (fma(_144, -fp_c5_1._m0[25].z, fma(_140, -fp_c5_1._m0[25].y, _138 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_204, fp_c5_1._m0[28].w, fma(_192, fp_c5_1._m0[28].z, fma(_194, fp_c5_1._m0[28].y, _190 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[46].x, _268, fma((-_251) + fp_c6_1._m0[44].x, _216, _251));
    float _272 = 1.0 / (_266 + fma(_148, -_266, _148));
    float _274 = exp2(_238 * fma(_238, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _276 = fma(max(0.0, fma(_224, fp_c5_1._m0[31].y, fma(_204, fp_c5_1._m0[29].w, fma(_192, fp_c5_1._m0[29].z, fma(_194, fp_c5_1._m0[29].y, _190 * fp_c5_1._m0[29].x))) + (fma(_144, -fp_c5_1._m0[26].z, fma(_140, -fp_c5_1._m0[26].y, _138 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w))) * fp_c6_1._m0[46].y, _268, fma((-_243) + fp_c6_1._m0[44].y, _216, _243));
    float _278 = fma(max(0.0, fma(_224, fp_c5_1._m0[31].z, fma(_204, fp_c5_1._m0[30].w, fma(_192, fp_c5_1._m0[30].z, fma(_194, fp_c5_1._m0[30].y, _190 * fp_c5_1._m0[30].x))) + (fma(_144, -fp_c5_1._m0[27].z, fma(_140, -fp_c5_1._m0[27].y, _138 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w))) * fp_c6_1._m0[46].z, _268, fma((-_257) + fp_c6_1._m0[44].z, _216, _257));
    float _280 = (_272 * (1.0 / (_266 + fma(_266, -_264, _264)))) * ((_172 * (1.0 / max(fma(_253, _255, -_255) + 1.0, fp_c1_1._m0[0].z))) * (_172 * (1.0 / max(fma(_253, _255, -_255) + 1.0, fp_c1_1._m0[0].z))));
    float _282 = clamp(fma(_188, -fp_c5_1._m0[23].z, fma(_186, -fp_c5_1._m0[23].y, _184 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _284 = fma(_168.y, fma(_245, _164, _166), fma(_276, -_245, _276) * max(0.0, fma(_234, fp_c5_1._m0[31].y, (fma(_226, fp_c5_1._m0[26].z, fma(_222, fp_c5_1._m0[26].y, _220 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_236, fp_c5_1._m0[29].w, fma(_232, fp_c5_1._m0[29].z, fma(_230, fp_c5_1._m0[29].y, _228 * fp_c5_1._m0[29].x))))));
    float _286 = fma(_168.z, fma(_247, _164, _166), fma(_278, -_247, _278) * max(0.0, fma(_234, fp_c5_1._m0[31].z, (fma(_226, fp_c5_1._m0[27].z, fma(_222, fp_c5_1._m0[27].y, _220 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_236, fp_c5_1._m0[30].w, fma(_232, fp_c5_1._m0[30].z, fma(_230, fp_c5_1._m0[30].y, _228 * fp_c5_1._m0[30].x))))));
    float _288 = fma(_168.x, fma(_249, _164, _166), fma(_270, -_249, _270) * max(0.0, fma(_234, fp_c5_1._m0[31].x, (fma(_226, fp_c5_1._m0[25].z, fma(_222, fp_c5_1._m0[25].y, _220 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_236, fp_c5_1._m0[28].w, fma(_232, fp_c5_1._m0[28].z, fma(_230, fp_c5_1._m0[28].y, _228 * fp_c5_1._m0[28].x))))));
    float _290 = clamp(texture(fp_tex_tcb_18, vec2(_84, _86)).x + (-0.0), 0.0, 1.0);
    float _292 = clamp((-fma(max((-_108.x) + 1.0, (-_108.y) + 1.0), clamp(_74.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_70.x * gl_FragCoord.w) * _128, (_70.y * gl_FragCoord.w) * _128)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _294 = floatBitsToInt(_262);
    float _296 = _288;
    float _298 = _284;
    float _300 = _286;
    float _302 = _142;
    float _304 = _288;
    float _306 = _284;
    float _308 = _286;
    if (floatBitsToInt(_262) != (-1))
    {
        int _310 = 0;
        float _314;
        float _316;
        float _318;
        int _400;
        do
        {
            int _312 = _294 & 255;
            _314 = _296;
            _316 = _298;
            _318 = _300;
            _322 = uint(_312) >= 30u;
            if (_322)
            {
                break;
            }
            int _324 = _312 << 4;
            uint _326 = uint(int(uint(_324 + 7360) >> uint(2)));
            int _328 = int(_326) + 1;
            uint _330 = uint(int(uint(_324 + 7368) >> uint(2)));
            float _332 = (-_206) + fp_c10_1._m0[int(uint(int(_326)) >> uint(2))][int(_326) & 3];
            float _334 = fp_c10_1._m0[int(uint(_328) >> uint(2))][_328 & 3] + (-_74.y);
            float _336 = (-_212) + fp_c10_1._m0[int(uint(int(_330)) >> uint(2))][int(_330) & 3];
            float _338 = fma(_336, _336, fma(_334, _334, _332 * _332));
            float _340 = _332 * inversesqrt(_338);
            float _342 = _334 * inversesqrt(_338);
            float _344 = _336 * inversesqrt(_338);
            float _346 = _138 + _340;
            float _348 = _140 + _342;
            float _350 = _144 + _344;
            uint _352 = uint(int(uint(_324 + 6880) >> uint(2)));
            int _354 = int(_352) + 1;
            float _356 = inversesqrt(fma(_350, _350, fma(_348, _348, _346 * _346)));
            float _358 = _346 * _356;
            float _360 = _348 * _356;
            float _362 = _350 * _356;
            uint _364 = uint(int(uint(_324 + 8320) >> uint(2)));
            float _366 = max(fma(_144, _362, fma(_140, _360, _138 * _358)), fp_c1_1._m0[0].z);
            float _368 = max(fma(_142, _344, fma(_136, _342, _134 * _340)), fp_c1_1._m0[0].z);
            float _370 = max(fma(_142, _362, fma(_136, _360, _134 * _358)), fp_c1_1._m0[0].z) * max(fma(_142, _362, fma(_136, _360, _134 * _358)), fp_c1_1._m0[0].z);
            uint _372 = uint(int(uint(_324 + 6408) >> uint(2)));
            uint _374 = uint(int(uint(_324 + 6400) >> uint(2)));
            int _376 = int(_374) + 1;
            float _378 = exp2(_366 * fma(_366, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _380 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3]) != 0;
            float _382 = (_272 * (1.0 / (_266 + fma(_266, -_368, _368)))) * ((_172 * (1.0 / max(fma(_253, _370, -_370) + 1.0, fp_c1_1._m0[0].z))) * (_172 * (1.0 / max(fma(_253, _370, -_370) + 1.0, fp_c1_1._m0[0].z))));
            float _384 = _382;
            if (!_380)
            {
                _384 = 1.0;
            }
            float _386 = _384;
            if (_380)
            {
                uint _388 = uint(int(uint(_324 + 7840) >> uint(2)));
                int _390 = int(_388) + 1;
                uint _392 = uint(int(uint(_324 + 6888) >> uint(2)));
                float _394 = fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3];
                int _396 = int(_392) + 1;
                uint _398 = uint(int(uint(_324 + 7848) >> uint(2)));
                _386 = exp2(fp_c10_1._m0[int(uint(_396) >> uint(2))][_396 & 3] * log2(clamp(((-_394) + fma(_344, -fp_c10_1._m0[int(uint(int(_398)) >> uint(2))][int(_398) & 3], fma(_342, -fp_c10_1._m0[int(uint(_390) >> uint(2))][_390 & 3], _340 * (-fp_c10_1._m0[int(uint(int(_388)) >> uint(2))][int(_388) & 3])))) * (1.0 / ((-_394) + 1.0)), 0.0, 1.0)));
            }
            _400 = _310 + 1;
            float _402 = clamp(fma(_188, _344, fma(_186, _342, _184 * _340)), 0.0, 1.0) * (exp2(fp_c10_1._m0[int(uint(_354) >> uint(2))][_354 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_352)) >> uint(2))][int(_352) & 3], -sqrt(_338), fp_c1_1._m0[1].y), 0.0, 1.0))) * _386);
            float _404 = fma(fp_c10_1._m0[int(uint(int(_374)) >> uint(2))][int(_374) & 3] * _402, fma(_270, fp_c1_1._m0[1].z, ((_249 + fma(_249, -_378, _378)) * _382) * 0.079577468335628509521484375), _296);
            float _406 = fma(fp_c10_1._m0[int(uint(_376) >> uint(2))][_376 & 3] * _402, fma(_276, fp_c1_1._m0[1].z, ((_245 + fma(_245, -_378, _378)) * _382) * 0.079577468335628509521484375), _298);
            float _408 = fma(fp_c10_1._m0[int(uint(int(_372)) >> uint(2))][int(_372) & 3] * _402, fma(_278, fp_c1_1._m0[1].z, ((_247 + fma(_247, -_378, _378)) * _382) * 0.079577468335628509521484375), _300);
            _294 = int(uint(_294) >> uint(8));
            _310 = _400;
            _296 = _404;
            _298 = _406;
            _300 = _408;
            _314 = _404;
            _316 = _406;
            _318 = _408;
        } while (!(_400 >= 4));
        _322 = false;
        _304 = _314;
        _306 = _316;
        _308 = _318;
        if ((_294 & 255) == 30)
        {
            float _410 = _74.y;
            float _412 = 1.0 / (fma(_212, fp_c10_1._m0[565].z, fma(_410, fp_c10_1._m0[565].y, _206 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _414 = 1.0 / fp_c10_1._m0[561].y;
            float _416 = _206 + (-fp_c10_1._m0[557].x);
            float _418 = _212 + (-fp_c10_1._m0[557].z);
            float _420 = _416 * fp_c10_1._m0[558].z;
            float _422 = (-_206) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_414, fp_c10_1._m0[557].x);
            float _424 = (-_212) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_414, fp_c10_1._m0[557].z);
            float _426 = _422 * _422;
            float _428 = fma(_418, _418, _416 * _416);
            float _430 = _418 * fp_c10_1._m0[558].x;
            float _432 = sqrt(fma(_424, _424, _426)) * (-fp_c10_1._m0[558].y);
            float _434 = inversesqrt(fma(_424, _424, fma(_432, _432, _426)));
            float _436 = ((-float(_430 < _420)) + float(_430 > _420)) * fp_c10_1._m0[561].y;
            float _438 = _422 * _434;
            float _440 = _432 * _434;
            float _442 = _424 * _434;
            bool _444 = fma(_418 * inversesqrt(_428), fp_c10_1._m0[558].z, (_416 * inversesqrt(_428)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _446 = _138 + _438;
            float _448 = _140 + _440;
            float _450 = _144 + _442;
            float _452 = inversesqrt(fma(_450, _450, fma(_448, _448, _446 * _446)));
            float _454 = fma(_418, fp_c10_1._m0[558].z, _416 * fp_c10_1._m0[558].x);
            float _456 = inversesqrt(fma(_442, _442, _438 * _438));
            bool _458 = _454 > 0.0;
            float _460 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_416, fma(_436, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_418 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_436 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_416, fma(_436, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_418 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_436 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _462 = _446 * _452;
            float _464 = _428;
            if (_458)
            {
                _464 = sqrt(_428);
            }
            float _466 = _448 * _452;
            float _468 = _450 * _452;
            float _470 = _464;
            if (!_458)
            {
                _470 = 1.0;
            }
            float _472 = max(fma(_144, _468, fma(_140, _466, _138 * _462)), fp_c1_1._m0[0].z);
            float _474 = max(fma(_142, _468, fma(_136, _466, _134 * _462)), fp_c1_1._m0[0].z) * max(fma(_142, _468, fma(_136, _466, _134 * _462)), fp_c1_1._m0[0].z);
            if (!_444)
            {
                _302 = 1.0;
            }
            float _476 = max(fma(_142, _442, fma(_136, _440, _134 * _438)), fp_c1_1._m0[0].z);
            float _478 = clamp(fma(_454 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_454 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _480 = _302;
            if (_444)
            {
                _480 = fma(_460, -_460, fp_c1_1._m0[1].y) * fma(_460, -_460, fp_c1_1._m0[1].y);
            }
            float _482 = exp2(_472 * fma(_472, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _484 = (_272 * (1.0 / (_266 + fma(_266, -_476, _476)))) * ((_172 * (1.0 / max(fma(_253, _474, -_474) + 1.0, fp_c1_1._m0[0].z))) * (_172 * (1.0 / max(fma(_253, _474, -_474) + 1.0, fp_c1_1._m0[0].z))));
            float _486 = clamp(fma(_188, _442, fma(_186, _440, _184 * _438)), 0.0, 1.0) * ((exp2(log2(clamp(fma(_470, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_442 * _456, -fp_c10_1._m0[558].z, (_438 * _456) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_478, -_478, fp_c1_1._m0[1].y) * fma(_478, -_478, fp_c1_1._m0[1].y), _480));
            float _488 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_212, fp_c10_1._m0[562].z, fma(_410, fp_c10_1._m0[562].y, _206 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _412, 0.5, 0.5), (-fma((fma(_212, fp_c10_1._m0[563].z, fma(_410, fp_c10_1._m0[563].y, _206 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _412, 0.5, 0.5)) + 1.0)).z > fma((fma(_212, fp_c10_1._m0[564].z, fma(_410, fp_c10_1._m0[564].y, _206 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _412, 0.5, 0.5)) || (_454 <= 0.0));
            _304 = fma(fma(_270, fp_c1_1._m0[1].z, ((_249 + fma(_249, -_482, _482)) * _484) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _486), _488, _314);
            _306 = fma(fma(_276, fp_c1_1._m0[1].z, ((_245 + fma(_245, -_482, _482)) * _484) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _486), _488, _316);
            _308 = fma(fma(_278, fp_c1_1._m0[1].z, ((_247 + fma(_247, -_482, _482)) * _484) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _486), _488, _318);
        }
    }
    float _490 = _206 + (-fp_c3_1._m0[11].w);
    float _492 = _74.y;
    float _494 = _212 + (-fp_c3_1._m0[13].w);
    float _496 = _492 + (-fp_c3_1._m0[12].w);
    float _498 = fma(_494, _494, fma(_496, _496, _490 * _490));
    float _500 = clamp(fma(fma(_212, fp_c5_1._m0[14].z, fma(_492, fp_c5_1._m0[14].y, _206 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _502 = fma(_290, _304, _292 * (fma(_280 * (_249 + fma(_249, -_274, _274)), fp_c1_1._m0[1].x, _270 * 0.3183098733425140380859375) * (_282 * fp_c5_1._m0[5].x)));
    float _504 = fma(_290, _306, _292 * (fma(_280 * (_245 + fma(_245, -_274, _274)), fp_c1_1._m0[1].x, _276 * 0.3183098733425140380859375) * (_282 * fp_c5_1._m0[5].y)));
    float _506 = exp2(fma(fma(_494 * inversesqrt(_498), fp_c5_1._m0[23].z, fma(_496 * inversesqrt(_498), fp_c5_1._m0[23].y, (_490 * inversesqrt(_498)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_498) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _508 = fma(_290, _308, _292 * (fma(_280 * (_247 + fma(_247, -_274, _274)), fp_c1_1._m0[1].x, _278 * 0.3183098733425140380859375) * (_282 * fp_c5_1._m0[5].z)));
    float _510 = clamp(fma(_290 * _292, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _512 = fma((-_502) + fp_c5_1._m0[13].x, _500, _502);
    float _514 = fma((-_504) + fp_c5_1._m0[13].y, _500, _504);
    float _516 = fma((-_508) + fp_c5_1._m0[13].z, _500, _508);
    float _518 = clamp((-exp2((clamp(fma(sqrt(_498), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _77.x = fma((-_512) + fma(fma((_506 * fp_c7_1._m0[55].x) * _510, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _518, _512);
    _77.y = fma((-_514) + fma(fma((_506 * fp_c7_1._m0[55].y) * _510, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _518, _514);
    _77.z = fma((-_516) + fma(fma((_506 * fp_c7_1._m0[55].z) * _510, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _518, _516);
    _77.w = 1.0;
}


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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_14;
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 5) in vec4 _76;
layout(location = 6) in vec4 _78;
layout(location = 3) in vec4 _80;
layout(location = 0) out vec4 _83;
uint _6[12];

void main()
{
    bool _314 = false;
    float _90 = _68.x;
    float _92 = _68.y;
    vec2 _96 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _98 = _96.x;
    float _100 = _96.y;
    float _102 = _70.x;
    float _104 = _70.y;
    float _106 = _70.z;
    float _108 = _72.y;
    float _110 = _72.z;
    float _112 = _72.x;
    float _114 = _72.w;
    float _116 = _74.x;
    float _118 = _74.y;
    float _120 = _74.z;
    float _122 = inversesqrt(fma(_106, _106, fma(_104, _104, _102 * _102)));
    float _124 = _106 * _122;
    float _126 = _102 * _122;
    float _128 = _104 * _122;
    float _130 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _132 = fma(_126, _130, fma(_98, _112, _100 * (fma(_128, _110, -(_124 * _108)) * _114)));
    float _134 = fma(_128, _130, fma(_98, _108, _100 * (fma(_124, _112, -(_126 * _110)) * _114)));
    float _136 = fma(_124, _130, fma(_98, _110, _100 * (fma(_126, _108, -(_128 * _112)) * _114)));
    float _138 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _140 = inversesqrt(fma(_136, _136, fma(_134, _134, _132 * _132)));
    float _142 = _116 * (-_138);
    float _144 = 1.0 / _76.w;
    float _146 = _118 * (-_138);
    float _148 = _120 * (-_138);
    float _150 = _132 * _140;
    float _152 = _134 * _140;
    float _154 = _136 * _140;
    float _156 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].y);
    float _158 = fma(_154, _148, fma(_152, _146, _150 * _142));
    float _160 = 1.0 / (_78.z * gl_FragCoord.w);
    float _162 = fma(_150 * (-_158), -2.0, -_142);
    float _164 = fma(_152 * (-_158), -2.0, -_146);
    float _166 = fma(_154 * (-_158), -2.0, -_148);
    float _168 = max(_158, fp_c1_1._m0[0].w);
    float _170 = 1.0 / max(abs(_166), max(abs(_162), abs(_164)));
    vec2 _172 = texture(fp_tex_tcb_2A, vec2(fma(_76.x * _144, 0.5, 0.5), fma(_76.y * _144, -0.5, 0.5))).xy;
    vec3 _176 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _178 = _176.x;
    float _180 = _176.y;
    float _182 = _176.z;
    float _184 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    vec2 _186 = texture(fp_tex_tcb_38, vec2(_168, (-_156) + (-0.0))).xy;
    float _188 = _186.x;
    float _190 = _186.y;
    vec3 _192 = texture(fp_tex_tcb_36, vec4(_162 * _170, _164 * _170, _166 * _170, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_156 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _194 = texture(fp_tex_tcb_14, vec2(_90, _92)).xyz;
    float _196 = _80.y;
    float _198 = _80.x;
    float _200 = _150 * _152;
    float _202 = _80.z;
    float _204 = _196 + (-fp_c9_1._m0[32].w);
    float _206 = _152 * _154;
    float _208 = _154 * _154;
    float _210 = _204;
    float _212 = _150;
    if (_196 < fp_c9_1._m0[32].w)
    {
        _210 = _204 * (-5.0);
    }
    float _214 = _150 * _154;
    float _216 = _142 + (-fp_c5_1._m0[23].x);
    float _218 = _146 + (-fp_c5_1._m0[23].y);
    float _220 = fma(_150, _150, -(_152 * _152));
    float _222 = _148 + (-fp_c5_1._m0[23].z);
    float _224 = inversesqrt(fma(_222, _222, fma(_218, _218, _216 * _216)));
    float _226 = max(0.0, ((-_152) + 1.2000000476837158203125) * (clamp(fma(_210, -(1.0 / fma(clamp((-_152) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_210, -(1.0 / fma(clamp((-_152) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0))) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w);
    float _228 = _216 * _224;
    float _230 = _218 * _224;
    float _232 = _222 * _224;
    int _235 = max(0, min(int(trunc((_202 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _237 = fma(_152, -fp_c5_1._m0[23].y, _150 * (-fp_c5_1._m0[23].x));
    float _239 = clamp(texture(fp_tex_tcb_18, vec2(_90, _92)).x + (-0.0), 0.0, 1.0);
    float _241 = _156 * _156;
    float _243 = fma(_156, 0.5, 0.5);
    uint _246 = uint(int(uint((((int(uint(_235) >> uint(16)) * 20) << 16) + (((_235 & 65535) * 20) + max(0, min(int(trunc((_198 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _248 = fp_c10_1._m0[int(uint(int(_246)) >> uint(2))][int(_246) & 3];
    float _250 = _241 * _241;
    float _252 = (_243 * 0.5) * _243;
    float _254 = fma(_178, -_184, _178);
    float _256 = max(fma(_154, -fp_c5_1._m0[23].z, _237), fp_c1_1._m0[0].w);
    float _258 = fma(_184, _178 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _260 = max(fma(_154, _232, fma(_152, _230, _150 * _228)), fp_c1_1._m0[0].w) * max(fma(_154, _232, fma(_152, _230, _150 * _228)), fp_c1_1._m0[0].w);
    float _262 = clamp((-fma(max((-_172.x) + 1.0, (-_172.y) + 1.0), clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_78.x * gl_FragCoord.w) * _160, (_78.y * gl_FragCoord.w) * _160)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _264 = max(fma(_148, _232, fma(_146, _230, _142 * _228)), fp_c1_1._m0[0].w);
    float _266 = 1.0 / (_252 + fma(_168, -_252, _168));
    float _268 = exp2(_264 * fma(_264, fp_c1_1._m0[1].x, -6.9831600189208984375));
    float _270 = fma(_182, -_184, _182);
    float _272 = fma(_180, -_184, _180);
    float _274 = fma(_184, _182 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _276 = (_266 * (1.0 / (_252 + fma(_252, -_256, _256)))) * ((_241 * (1.0 / max(fma(_260, _250, -_260) + 1.0, fp_c1_1._m0[0].w))) * (_241 * (1.0 / max(fma(_260, _250, -_260) + 1.0, fp_c1_1._m0[0].w))));
    float _278 = fma(_184, _180 + (-0.039999999105930328369140625), fp_c1_1._m0[0].z);
    float _280 = clamp(fma(_154, -fp_c5_1._m0[23].z, _237), 0.0, 1.0);
    float _282 = fma(_192.x, fma(_258, _188, _190), fma(_226, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_220, fp_c5_1._m0[31].x, (fma(_154, fp_c5_1._m0[25].z, fma(_152, fp_c5_1._m0[25].y, _150 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_214, fp_c5_1._m0[28].w, fma(_208, fp_c5_1._m0[28].z, fma(_206, fp_c5_1._m0[28].y, _200 * fp_c5_1._m0[28].x)))))) * fma(_258, -_254, _254));
    float _284 = fma(_192.y, fma(_278, _188, _190), fma(_226, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_220, fp_c5_1._m0[31].y, (fma(_154, fp_c5_1._m0[26].z, fma(_152, fp_c5_1._m0[26].y, _150 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_214, fp_c5_1._m0[29].w, fma(_208, fp_c5_1._m0[29].z, fma(_206, fp_c5_1._m0[29].y, _200 * fp_c5_1._m0[29].x)))))) * fma(_278, -_272, _272));
    float _286 = fma(_192.z, fma(_274, _188, _190), fma(_226, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_220, fp_c5_1._m0[31].z, (fma(_154, fp_c5_1._m0[27].z, fma(_152, fp_c5_1._m0[27].y, _150 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_214, fp_c5_1._m0[30].w, fma(_208, fp_c5_1._m0[30].z, fma(_206, fp_c5_1._m0[30].y, _200 * fp_c5_1._m0[30].x)))))) * fma(_274, -_270, _270));
    int _288 = floatBitsToInt(_248);
    float _290 = _286;
    float _292 = _282;
    float _294 = _284;
    float _296 = _282;
    float _298 = _286;
    float _300 = _284;
    if (floatBitsToInt(_248) != (-1))
    {
        int _302 = 0;
        float _306;
        float _308;
        float _310;
        int _396;
        do
        {
            int _304 = _288 & 255;
            _306 = _292;
            _308 = _294;
            _310 = _290;
            _314 = uint(_304) >= 30u;
            if (_314)
            {
                break;
            }
            int _316 = _304 << 4;
            uint _318 = uint(int(uint(_316 + 7360) >> uint(2)));
            int _320 = int(_318) + 1;
            uint _322 = uint(int(uint(_316 + 7368) >> uint(2)));
            float _324 = (-_198) + fp_c10_1._m0[int(uint(int(_318)) >> uint(2))][int(_318) & 3];
            float _326 = (-_196) + fp_c10_1._m0[int(uint(_320) >> uint(2))][_320 & 3];
            float _328 = (-_202) + fp_c10_1._m0[int(uint(int(_322)) >> uint(2))][int(_322) & 3];
            float _330 = fma(_328, _328, fma(_326, _326, _324 * _324));
            float _332 = _324 * inversesqrt(_330);
            float _334 = _326 * inversesqrt(_330);
            float _336 = _328 * inversesqrt(_330);
            float _338 = _142 + _332;
            float _340 = _146 + _334;
            float _342 = _148 + _336;
            uint _344 = uint(int(uint(_316 + 6880) >> uint(2)));
            int _346 = int(_344) + 1;
            float _348 = inversesqrt(fma(_342, _342, fma(_340, _340, _338 * _338)));
            float _350 = _338 * _348;
            float _352 = _340 * _348;
            float _354 = _342 * _348;
            float _356 = fma(_154, _336, fma(_152, _334, _150 * _332));
            float _358 = max(_356, fp_c1_1._m0[0].w);
            uint _360 = uint(int(uint(_316 + 8320) >> uint(2)));
            uint _362 = uint(int(uint(_316 + 6408) >> uint(2)));
            float _364 = max(fma(_154, _354, fma(_152, _352, _150 * _350)), fp_c1_1._m0[0].w) * max(fma(_154, _354, fma(_152, _352, _150 * _350)), fp_c1_1._m0[0].w);
            float _366 = max(fma(_148, _354, fma(_146, _352, _142 * _350)), fp_c1_1._m0[0].w);
            uint _368 = uint(int(uint(_316 + 6400) >> uint(2)));
            int _370 = int(_368) + 1;
            float _372 = exp2(_366 * fma(_366, fp_c1_1._m0[1].x, -6.9831600189208984375));
            bool _374 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3]) != 0;
            float _376 = (_266 * (1.0 / (_252 + fma(_252, -_358, _358)))) * ((_241 * (1.0 / max(fma(_250, _364, -_364) + 1.0, fp_c1_1._m0[0].w))) * (_241 * (1.0 / max(fma(_250, _364, -_364) + 1.0, fp_c1_1._m0[0].w))));
            float _378 = _278 + fma(_278, -_372, _372);
            float _380 = _378;
            if (!_374)
            {
                _380 = 1.0;
            }
            float _382 = _380;
            if (_374)
            {
                uint _384 = uint(int(uint(_316 + 7840) >> uint(2)));
                int _386 = int(_384) + 1;
                uint _388 = uint(int(uint(_316 + 7848) >> uint(2)));
                uint _390 = uint(int(uint(_316 + 6888) >> uint(2)));
                float _392 = fp_c10_1._m0[int(uint(int(_390)) >> uint(2))][int(_390) & 3];
                int _394 = int(_390) + 1;
                _382 = exp2(fp_c10_1._m0[int(uint(_394) >> uint(2))][_394 & 3] * log2(clamp(((-_392) + fma(_336, -fp_c10_1._m0[int(uint(int(_388)) >> uint(2))][int(_388) & 3], fma(_334, -fp_c10_1._m0[int(uint(_386) >> uint(2))][_386 & 3], _332 * (-fp_c10_1._m0[int(uint(int(_384)) >> uint(2))][int(_384) & 3])))) * (1.0 / ((-_392) + 1.0)), 0.0, 1.0)));
            }
            _396 = _302 + 1;
            float _398 = (exp2(fp_c10_1._m0[int(uint(_346) >> uint(2))][_346 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_344)) >> uint(2))][int(_344) & 3], -sqrt(_330), fp_c1_1._m0[0].x), 0.0, 1.0))) * _382) * clamp(_356 + (-0.0), 0.0, 1.0);
            float _400 = fma(fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3] * _398, fma(_270, fp_c1_1._m0[1].z, ((_274 + fma(_274, -_372, _372)) * _376) * 0.079577468335628509521484375), _290);
            float _402 = fma(fp_c10_1._m0[int(uint(int(_368)) >> uint(2))][int(_368) & 3] * _398, fma(_254, fp_c1_1._m0[1].z, ((_258 + fma(_258, -_372, _372)) * _376) * 0.079577468335628509521484375), _292);
            float _404 = fma(fp_c10_1._m0[int(uint(_370) >> uint(2))][_370 & 3] * _398, fma(_272, fp_c1_1._m0[1].z, (_378 * _376) * 0.079577468335628509521484375), _294);
            _288 = int(uint(_288) >> uint(8));
            _302 = _396;
            _290 = _400;
            _292 = _402;
            _294 = _404;
            _306 = _402;
            _308 = _404;
            _310 = _400;
        } while (!(_396 >= 4));
        _314 = false;
        _296 = _306;
        _298 = _310;
        _300 = _308;
        if ((_288 & 255) == 30)
        {
            float _406 = 1.0 / (fma(_202, fp_c10_1._m0[565].z, fma(_196, fp_c10_1._m0[565].y, _198 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _408 = 1.0 / fp_c10_1._m0[561].y;
            float _410 = _202 + (-fp_c10_1._m0[557].z);
            float _412 = _410 * fp_c10_1._m0[558].x;
            float _414 = (-_198) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_408, fp_c10_1._m0[557].x);
            float _416 = (-_202) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_408, fp_c10_1._m0[557].z);
            float _418 = _198 + (-fp_c10_1._m0[557].x);
            float _420 = _414 * _414;
            float _422 = _418 * fp_c10_1._m0[558].z;
            float _424 = fma(_410, _410, _418 * _418);
            float _426 = sqrt(fma(_416, _416, _420)) * (-fp_c10_1._m0[558].y);
            float _428 = ((-float(_412 < _422)) + float(_412 > _422)) * fp_c10_1._m0[561].y;
            float _430 = inversesqrt(fma(_416, _416, fma(_426, _426, _420)));
            float _432 = _414 * _430;
            float _434 = _426 * _430;
            float _436 = fma(_410, fp_c10_1._m0[558].z, _418 * fp_c10_1._m0[558].x);
            float _438 = _416 * _430;
            float _440 = _142 + _432;
            float _442 = _146 + _434;
            bool _444 = _436 > 0.0;
            float _446 = _148 + _438;
            float _448 = inversesqrt(fma(_438, _438, _432 * _432));
            float _450 = inversesqrt(fma(_446, _446, fma(_442, _442, _440 * _440)));
            float _452 = fma(_154, _438, fma(_152, _434, _150 * _432));
            float _454 = _440 * _450;
            float _456 = _442 * _450;
            float _458 = _446 * _450;
            if (_444)
            {
                _212 = sqrt(_424);
            }
            float _460 = _212;
            if (!_444)
            {
                _460 = 1.0;
            }
            bool _462 = fma(_410 * inversesqrt(_424), fp_c10_1._m0[558].z, (_418 * inversesqrt(_424)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _464 = max(_452, fp_c1_1._m0[0].w);
            float _466 = max(fma(_148, _458, fma(_146, _456, _142 * _454)), fp_c1_1._m0[0].w);
            float _468 = max(fma(_154, _458, fma(_152, _456, _150 * _454)), fp_c1_1._m0[0].w) * max(fma(_154, _458, fma(_152, _456, _150 * _454)), fp_c1_1._m0[0].w);
            float _470 = clamp(fma(_436 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_436 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0);
            float _472 = log2(clamp(fma(_460, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _474 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_418, fma(_428, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_410 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_428 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_418, fma(_428, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_410 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_428 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _476 = _472;
            if (!_462)
            {
                _476 = 1.0;
            }
            float _478 = _476;
            if (_462)
            {
                _478 = fma(_474, -_474, fp_c1_1._m0[0].x) * fma(_474, -_474, fp_c1_1._m0[0].x);
            }
            float _480 = exp2(_466 * fma(_466, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _482 = (_266 * (1.0 / (_252 + fma(_252, -_464, _464)))) * ((_241 * (1.0 / max(fma(_250, _468, -_468) + 1.0, fp_c1_1._m0[0].w))) * (_241 * (1.0 / max(fma(_250, _468, -_468) + 1.0, fp_c1_1._m0[0].w))));
            float _484 = (min(fma(_470, -_470, fp_c1_1._m0[0].x) * fma(_470, -_470, fp_c1_1._m0[0].x), _478) * (exp2(_472) * exp2(log2(clamp((fma(_438 * _448, -fp_c10_1._m0[558].z, (_432 * _448) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_452 + (-0.0), 0.0, 1.0);
            float _486 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_202, fp_c10_1._m0[562].z, fma(_196, fp_c10_1._m0[562].y, _198 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _406, 0.5, 0.5), (-fma((fma(_202, fp_c10_1._m0[563].z, fma(_196, fp_c10_1._m0[563].y, _198 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _406, 0.5, 0.5)) + 1.0)).z > fma((fma(_202, fp_c10_1._m0[564].z, fma(_196, fp_c10_1._m0[564].y, _198 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _406, 0.5, 0.5)) || (_436 <= 0.0));
            _296 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _484) * fma(_254, fp_c1_1._m0[1].z, ((_258 + fma(_258, -_480, _480)) * _482) * 0.079577468335628509521484375), _486, _306);
            _298 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _484) * fma(_270, fp_c1_1._m0[1].z, ((_274 + fma(_274, -_480, _480)) * _482) * 0.079577468335628509521484375), _486, _310);
            _300 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _484) * fma(_272, fp_c1_1._m0[1].z, ((_278 + fma(_278, -_480, _480)) * _482) * 0.079577468335628509521484375), _486, _308);
        }
    }
    float _488 = _198 + (-fp_c3_1._m0[11].w);
    float _490 = _196 + (-fp_c3_1._m0[12].w);
    float _492 = _202 + (-fp_c3_1._m0[13].w);
    float _494 = fma(_492, _492, fma(_490, _490, _488 * _488));
    float _496 = clamp(fma(fma(_202, fp_c5_1._m0[14].z, fma(_196, fp_c5_1._m0[14].y, _198 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _498 = fma(_194.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_239, _296, _262 * (fma(_276 * (_258 + fma(_258, -_268, _268)), fp_c1_1._m0[1].y, _254 * 0.3183098733425140380859375) * (_280 * fp_c5_1._m0[5].x))));
    float _500 = fma(_194.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_239, _298, _262 * (fma(_276 * (_274 + fma(_274, -_268, _268)), fp_c1_1._m0[1].y, _270 * 0.3183098733425140380859375) * (_280 * fp_c5_1._m0[5].z))));
    float _502 = clamp(fma(_239 * _262, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _504 = fma(_194.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_239, _300, _262 * (fma(_276 * (_278 + fma(_278, -_268, _268)), fp_c1_1._m0[1].y, _272 * 0.3183098733425140380859375) * (_280 * fp_c5_1._m0[5].y))));
    float _506 = exp2(log2(clamp(sqrt(_494) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_492 * inversesqrt(_494), fp_c5_1._m0[23].z, fma(_490 * inversesqrt(_494), fp_c5_1._m0[23].y, (_488 * inversesqrt(_494)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _508 = fma((-_498) + fp_c5_1._m0[13].x, _496, _498);
    float _510 = fma((-_504) + fp_c5_1._m0[13].y, _496, _504);
    float _512 = fma((-_500) + fp_c5_1._m0[13].z, _496, _500);
    float _514 = clamp((-exp2((clamp(fma(sqrt(_494), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_508) + fma(fma((_506 * fp_c7_1._m0[55].x) * _502, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _514, _508);
    _83.y = fma((-_510) + fma(fma((_506 * fp_c7_1._m0[55].y) * _502, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _514, _510);
    _83.z = fma((-_512) + fma(fma((_506 * fp_c7_1._m0[55].z) * _502, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _514, _512);
    _83.w = 1.0;
}


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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

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
layout(binding = 3) uniform sampler2D fp_tex_tcb_12;
layout(binding = 4) uniform sampler2D fp_tex_tcb_18;
layout(binding = 5) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 6) in vec4 _76;
layout(location = 5) in vec4 _78;
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
    vec3 _104 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _106 = _104.x;
    float _108 = _104.y;
    float _110 = _104.z;
    float _112 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    float _114 = _70.x;
    float _116 = _70.y;
    float _118 = _70.z;
    float _120 = _72.y;
    float _122 = _72.z;
    float _124 = _72.x;
    float _126 = _72.w;
    float _128 = _74.y;
    float _130 = _74.z;
    float _132 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _134 = _118 * _132;
    float _136 = _114 * _132;
    float _138 = _116 * _132;
    float _140 = _74.x;
    float _142 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _144 = fma(_136, _142, fma(_98, _124, _100 * (fma(_138, _122, -(_134 * _120)) * _126)));
    float _146 = fma(_138, _142, fma(_98, _120, _100 * (fma(_134, _124, -(_136 * _122)) * _126)));
    float _148 = fma(_134, _142, fma(_98, _122, _100 * (fma(_136, _120, -(_138 * _124)) * _126)));
    float _150 = inversesqrt(fma(_130, _130, fma(_128, _128, _140 * _140)));
    float _152 = 1.0 / (_76.z * gl_FragCoord.w);
    float _154 = _140 * (-_150);
    float _156 = inversesqrt(fma(_148, _148, fma(_146, _146, _144 * _144)));
    float _158 = _128 * (-_150);
    float _160 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[1].x);
    float _162 = _130 * (-_150);
    float _164 = _144 * _156;
    float _166 = _146 * _156;
    float _168 = _148 * _156;
    float _170 = fma(_168, -_162, fma(_166, -_158, _164 * (-_154)));
    float _172 = fma(_168, _162, fma(_166, _158, _164 * _154));
    float _174 = fma(_164 * (-_172), -2.0, -_154);
    float _176 = fma(_166 * (-_172), -2.0, -_158);
    float _178 = 1.0 / _78.w;
    float _180 = fma(_168 * (-_172), -2.0, -_162);
    float _182 = 1.0 / max(abs(_180), max(abs(_174), abs(_176)));
    float _184 = max(fma(_162, fma(_168 * _170, -2.0, -_162), fma(_158, fma(_166 * _170, -2.0, -_158), _154 * fma(_164 * _170, -2.0, -_154))), fp_c1_1._m0[0].z);
    vec3 _186 = texture(fp_tex_tcb_1E, vec2(fma(_184, fp_c6_1._m0[51].x, _68.z), _68.w)).xyz;
    vec2 _188 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _178, 0.5, 0.5), fma(_78.y * _178, -0.5, 0.5))).xy;
    float _190 = max(_172, fp_c1_1._m0[0].z);
    vec2 _192 = texture(fp_tex_tcb_38, vec2(_190, (-_160) + (-0.0))).xy;
    float _194 = _192.x;
    float _196 = _192.y;
    vec3 _198 = texture(fp_tex_tcb_36, vec4(_174 * _182, _176 * _182, _180 * _182, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_160 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _200 = _154 + (-fp_c5_1._m0[23].x);
    float _202 = _80.y;
    float _204 = _158 + (-fp_c5_1._m0[23].y);
    float _206 = _162 + (-fp_c5_1._m0[23].z);
    float _208 = inversesqrt(fma(_206, _206, fma(_204, _204, _200 * _200)));
    float _210 = _206 * _208;
    float _212 = _200 * _208;
    float _214 = _164 * _166;
    float _216 = _202 + (-fp_c9_1._m0[32].w);
    float _218 = _204 * _208;
    float _220 = _166 * _168;
    float _222 = _216;
    if (_202 < fp_c9_1._m0[32].w)
    {
        _222 = _216 * (-5.0);
    }
    float _224 = _168 * _168;
    float _226 = _164 * _168;
    float _228 = _80.z;
    float _230 = fma(_164, _164, -(_166 * _166));
    float _232 = max(fma(_162, _210, fma(_158, _218, _154 * _212)), fp_c1_1._m0[0].z);
    float _234 = max(fma(_168, _210, fma(_166, _218, _164 * _212)), fp_c1_1._m0[0].z) * max(fma(_168, _210, fma(_166, _218, _164 * _212)), fp_c1_1._m0[0].z);
    float _236 = _80.x;
    float _238 = max(0.0, ((-_166) + 1.2000000476837158203125) * (clamp(fma(_222, -(1.0 / fma(clamp((-_166) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_222, -(1.0 / fma(clamp((-_166) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0))) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w);
    float _240 = fma(_166, -fp_c5_1._m0[23].y, _164 * (-fp_c5_1._m0[23].x));
    float _242 = fma(_160, 0.5, 0.5);
    float _244 = _160 * _160;
    float _246 = (_242 * 0.5) * _242;
    float _248 = clamp(fma(_168, -fp_c5_1._m0[23].z, _240), 0.0, 1.0);
    float _250 = max(fma(_168, -fp_c5_1._m0[23].z, _240), fp_c1_1._m0[0].z);
    float _252 = exp2(_184 * fma(_184, fp_c1_1._m0[0].w, -6.9831600189208984375));
    int _255 = max(0, min(int(trunc((_228 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _257 = exp2(_232 * fma(_232, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _259 = fma(_112, _106 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _261 = fma(_112, _108 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _263 = fma(_112, _110 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    uint _266 = uint(int(uint((((int(uint(_255) >> uint(16)) * 20) << 16) + (((_255 & 65535) * 20) + max(0, min(int(trunc((_236 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _268 = fp_c10_1._m0[int(uint(int(_266)) >> uint(2))][int(_266) & 3];
    float _270 = ((1.0 / (_246 + fma(_246, -_190, _190))) * (1.0 / (_246 + fma(_246, -_250, _250)))) * ((_244 * (1.0 / max(fma(_234, _244 * _244, -_234) + 1.0, fp_c1_1._m0[0].z))) * (_244 * (1.0 / max(fma(_234, _244 * _244, -_234) + 1.0, fp_c1_1._m0[0].z))));
    float _272 = fma(_106, -_112, _106);
    float _274 = fma(_108, -_112, _108);
    float _276 = fma(_110, -_112, _110);
    float _278 = clamp(texture(fp_tex_tcb_18, vec2(_90, _92)).x + (-0.0), 0.0, 1.0);
    float _280 = fma(fma(_238, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_230, fp_c5_1._m0[31].z, (fma(_168, fp_c5_1._m0[27].z, fma(_166, fp_c5_1._m0[27].y, _164 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_226, fp_c5_1._m0[30].w, fma(_224, fp_c5_1._m0[30].z, fma(_220, fp_c5_1._m0[30].y, _214 * fp_c5_1._m0[30].x)))))), fma(_263, -_276, _276), fma(fma(_263, _194, _196), _198.z, (_263 + fma(_263, -_252, _252)) * (_110 * (_186.z * fp_c6_1._m0[50].w))));
    float _282 = fma(fma(_238, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_230, fp_c5_1._m0[31].y, (fma(_168, fp_c5_1._m0[26].z, fma(_166, fp_c5_1._m0[26].y, _164 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_226, fp_c5_1._m0[29].w, fma(_224, fp_c5_1._m0[29].z, fma(_220, fp_c5_1._m0[29].y, _214 * fp_c5_1._m0[29].x)))))), fma(_261, -_274, _274), fma(fma(_261, _194, _196), _198.y, (_261 + fma(_261, -_252, _252)) * (_108 * (_186.y * fp_c6_1._m0[50].w))));
    float _284 = fma(fma(_238, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_230, fp_c5_1._m0[31].x, (fma(_168, fp_c5_1._m0[25].z, fma(_166, fp_c5_1._m0[25].y, _164 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_226, fp_c5_1._m0[28].w, fma(_224, fp_c5_1._m0[28].z, fma(_220, fp_c5_1._m0[28].y, _214 * fp_c5_1._m0[28].x)))))), fma(_259, -_272, _272), fma(fma(_259, _194, _196), _198.x, (_259 + fma(_259, -_252, _252)) * (_106 * (_186.x * fp_c6_1._m0[50].w))));
    float _286 = clamp((-fma(max((-_188.x) + 1.0, (-_188.y) + 1.0), clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _152, (_76.y * gl_FragCoord.w) * _152)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _288 = floatBitsToInt(_268);
    float _290 = _282;
    float _292 = _280;
    float _294 = _284;
    float _296 = _284;
    float _298 = _282;
    float _300 = _280;
    if (floatBitsToInt(_268) != (-1))
    {
        int _302 = 0;
        float _306;
        float _308;
        float _310;
        int _396;
        do
        {
            int _304 = _288 & 255;
            _306 = _294;
            _308 = _290;
            _310 = _292;
            _314 = uint(_304) >= 30u;
            if (_314)
            {
                break;
            }
            int _316 = _304 << 4;
            uint _318 = uint(int(uint(_316 + 7360) >> uint(2)));
            int _320 = int(_318) + 1;
            uint _322 = uint(int(uint(_316 + 7368) >> uint(2)));
            float _324 = (-_236) + fp_c10_1._m0[int(uint(int(_318)) >> uint(2))][int(_318) & 3];
            float _326 = (-_202) + fp_c10_1._m0[int(uint(_320) >> uint(2))][_320 & 3];
            float _328 = (-_228) + fp_c10_1._m0[int(uint(int(_322)) >> uint(2))][int(_322) & 3];
            float _330 = fma(_328, _328, fma(_326, _326, _324 * _324));
            float _332 = _324 * inversesqrt(_330);
            float _334 = _326 * inversesqrt(_330);
            float _336 = _328 * inversesqrt(_330);
            float _338 = _154 + _332;
            float _340 = _158 + _334;
            float _342 = _162 + _336;
            uint _344 = uint(int(uint(_316 + 6880) >> uint(2)));
            int _346 = int(_344) + 1;
            float _348 = inversesqrt(fma(_342, _342, fma(_340, _340, _338 * _338)));
            float _350 = _338 * _348;
            float _352 = _340 * _348;
            float _354 = _342 * _348;
            float _356 = fma(_168, _336, fma(_166, _334, _164 * _332));
            float _358 = max(fma(_168, _354, fma(_166, _352, _164 * _350)), fp_c1_1._m0[0].z) * max(fma(_168, _354, fma(_166, _352, _164 * _350)), fp_c1_1._m0[0].z);
            float _360 = max(_356, fp_c1_1._m0[0].z);
            uint _362 = uint(int(uint(_316 + 8320) >> uint(2)));
            float _364 = max(fma(_162, _354, fma(_158, _352, _154 * _350)), fp_c1_1._m0[0].z);
            uint _366 = uint(int(uint(_316 + 6408) >> uint(2)));
            uint _368 = uint(int(uint(_316 + 6400) >> uint(2)));
            int _370 = int(_368) + 1;
            float _372 = exp2(_364 * fma(_364, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _374 = ((1.0 / (_246 + fma(_246, -_190, _190))) * (1.0 / (_246 + fma(_246, -_360, _360)))) * ((_244 * (1.0 / max(fma(_244 * _244, _358, -_358) + 1.0, fp_c1_1._m0[0].z))) * (_244 * (1.0 / max(fma(_244 * _244, _358, -_358) + 1.0, fp_c1_1._m0[0].z))));
            bool _376 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3]) != 0;
            float _378 = _259 + fma(_259, -_372, _372);
            float _380 = _378;
            if (!_376)
            {
                _380 = 1.0;
            }
            float _382 = _380;
            if (_376)
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
            float _400 = fma(fp_c10_1._m0[int(uint(_370) >> uint(2))][_370 & 3] * _398, fma(_274, fp_c1_1._m0[1].z, ((_261 + fma(_261, -_372, _372)) * _374) * 0.079577468335628509521484375), _290);
            float _402 = fma(fp_c10_1._m0[int(uint(int(_366)) >> uint(2))][int(_366) & 3] * _398, fma(_276, fp_c1_1._m0[1].z, ((_263 + fma(_263, -_372, _372)) * _374) * 0.079577468335628509521484375), _292);
            float _404 = fma(fp_c10_1._m0[int(uint(int(_368)) >> uint(2))][int(_368) & 3] * _398, fma(_272, fp_c1_1._m0[1].z, (_378 * _374) * 0.079577468335628509521484375), _294);
            _288 = int(uint(_288) >> uint(8));
            _302 = _396;
            _290 = _400;
            _292 = _402;
            _294 = _404;
            _306 = _404;
            _308 = _400;
            _310 = _402;
        } while (!(_396 >= 4));
        _314 = false;
        _296 = _306;
        _298 = _308;
        _300 = _310;
        if ((_288 & 255) == 30)
        {
            float _406 = 1.0 / (fma(_228, fp_c10_1._m0[565].z, fma(_202, fp_c10_1._m0[565].y, _236 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _408 = 1.0 / fp_c10_1._m0[561].y;
            float _410 = _228 + (-fp_c10_1._m0[557].z);
            float _412 = _410 * fp_c10_1._m0[558].x;
            float _414 = _236 + (-fp_c10_1._m0[557].x);
            float _416 = (-_236) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_408, fp_c10_1._m0[557].x);
            float _418 = (-_228) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_408, fp_c10_1._m0[557].z);
            float _420 = _414 * fp_c10_1._m0[558].z;
            float _422 = _416 * _416;
            float _424 = ((-float(_412 < _420)) + float(_412 > _420)) * fp_c10_1._m0[561].y;
            float _426 = sqrt(fma(_418, _418, _422)) * (-fp_c10_1._m0[558].y);
            float _428 = fma(_410, _410, _414 * _414);
            float _430 = inversesqrt(fma(_418, _418, fma(_426, _426, _422)));
            float _432 = fma(_410, fp_c10_1._m0[558].z, _414 * fp_c10_1._m0[558].x);
            float _434 = _416 * _430;
            float _436 = _418 * _430;
            float _438 = _426 * _430;
            bool _440 = _432 > 0.0;
            float _442 = _154 + _434;
            bool _444 = fma(_410 * inversesqrt(_428), fp_c10_1._m0[558].z, (_414 * inversesqrt(_428)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _446 = _428;
            if (_440)
            {
                _446 = sqrt(_428);
            }
            float _448 = inversesqrt(fma(_436, _436, _434 * _434));
            float _450 = _446;
            if (!_440)
            {
                _450 = 1.0;
            }
            float _452 = _158 + _438;
            float _454 = fma(_168, _436, fma(_166, _438, _164 * _434));
            float _456 = _162 + _436;
            float _458 = inversesqrt(fma(_456, _456, fma(_452, _452, _442 * _442)));
            float _460 = _442 * _458;
            float _462 = _452 * _458;
            float _464 = _456 * _458;
            float _466 = max(_454, fp_c1_1._m0[0].z);
            float _468 = max(fma(_162, _464, fma(_158, _462, _154 * _460)), fp_c1_1._m0[0].z);
            float _470 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_414, fma(_424, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_410 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_424 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_414, fma(_424, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_410 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_424 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _472 = clamp(fma(_432 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_432 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0);
            float _474 = max(fma(_168, _464, fma(_166, _462, _164 * _460)), fp_c1_1._m0[0].z) * max(fma(_168, _464, fma(_166, _462, _164 * _460)), fp_c1_1._m0[0].z);
            float _476 = fma(_468, fp_c1_1._m0[0].w, -6.9831600189208984375);
            float _478 = _476;
            if (_444)
            {
                _478 = fma(_470, -_470, fp_c1_1._m0[0].x) * fma(_470, -_470, fp_c1_1._m0[0].x);
            }
            float _480 = _478;
            if (!_444)
            {
                _480 = 1.0;
            }
            float _482 = exp2(_468 * _476);
            float _484 = (min(fma(_472, -_472, fp_c1_1._m0[0].x) * fma(_472, -_472, fp_c1_1._m0[0].x), _480) * (exp2(log2(clamp(fma(_450, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_436 * _448, -fp_c10_1._m0[558].z, (_434 * _448) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_454 + (-0.0), 0.0, 1.0);
            float _486 = ((1.0 / (_246 + fma(_246, -_190, _190))) * (1.0 / (_246 + fma(_246, -_466, _466)))) * ((_244 * (1.0 / max(fma(_244 * _244, _474, -_474) + 1.0, fp_c1_1._m0[0].z))) * (_244 * (1.0 / max(fma(_244 * _244, _474, -_474) + 1.0, fp_c1_1._m0[0].z))));
            float _488 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_228, fp_c10_1._m0[562].z, fma(_202, fp_c10_1._m0[562].y, _236 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _406, 0.5, 0.5), (-fma((fma(_228, fp_c10_1._m0[563].z, fma(_202, fp_c10_1._m0[563].y, _236 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _406, 0.5, 0.5)) + 1.0)).z > fma((fma(_228, fp_c10_1._m0[564].z, fma(_202, fp_c10_1._m0[564].y, _236 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _406, 0.5, 0.5)) || (_432 <= 0.0));
            _296 = fma(fma(_272, fp_c1_1._m0[1].z, ((_259 + fma(_259, -_482, _482)) * _486) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _484), _488, _306);
            _298 = fma(fma(_274, fp_c1_1._m0[1].z, ((_261 + fma(_261, -_482, _482)) * _486) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _484), _488, _308);
            _300 = fma(fma(_276, fp_c1_1._m0[1].z, ((_263 + fma(_263, -_482, _482)) * _486) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _484), _488, _310);
        }
    }
    float _490 = _236 + (-fp_c3_1._m0[11].w);
    float _492 = _202 + (-fp_c3_1._m0[12].w);
    float _494 = _228 + (-fp_c3_1._m0[13].w);
    float _496 = fma(_278, _296, _286 * ((_248 * fp_c5_1._m0[5].x) * fma((_259 + fma(_259, -_257, _257)) * _270, fp_c1_1._m0[1].y, _272 * 0.3183098733425140380859375)));
    float _498 = fma(_494, _494, fma(_492, _492, _490 * _490));
    float _500 = fma(_278, _298, _286 * ((_248 * fp_c5_1._m0[5].y) * fma((_261 + fma(_261, -_257, _257)) * _270, fp_c1_1._m0[1].y, _274 * 0.3183098733425140380859375)));
    float _502 = fma(_278, _300, _286 * ((_248 * fp_c5_1._m0[5].z) * fma((_263 + fma(_263, -_257, _257)) * _270, fp_c1_1._m0[1].y, _276 * 0.3183098733425140380859375)));
    float _504 = exp2(log2(clamp(sqrt(_498) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_494 * inversesqrt(_498), fp_c5_1._m0[23].z, fma(_492 * inversesqrt(_498), fp_c5_1._m0[23].y, (_490 * inversesqrt(_498)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _506 = clamp(fma(_278 * _286, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _508 = clamp(fma(fma(_228, fp_c5_1._m0[14].z, fma(_202, fp_c5_1._m0[14].y, _236 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _510 = fma((-_496) + fp_c5_1._m0[13].x, _508, _496);
    float _512 = fma((-_500) + fp_c5_1._m0[13].y, _508, _500);
    float _514 = fma((-_502) + fp_c5_1._m0[13].z, _508, _502);
    float _516 = clamp((-exp2((clamp(fma(sqrt(_498), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_510) + fma(fma((_504 * fp_c7_1._m0[55].x) * _506, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _516, _510);
    _83.y = fma((-_512) + fma(fma((_504 * fp_c7_1._m0[55].y) * _506, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _516, _512);
    _83.z = fma((-_514) + fma(fma((_504 * fp_c7_1._m0[55].z) * _506, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _516, _514);
    _83.w = 1.0;
}


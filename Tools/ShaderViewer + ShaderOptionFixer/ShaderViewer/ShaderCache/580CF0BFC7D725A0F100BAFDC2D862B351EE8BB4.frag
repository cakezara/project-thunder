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

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_14;
layout(binding = 4) uniform sampler2D fp_tex_tcb_18;
layout(binding = 5) uniform sampler2D fp_tex_tcb_1A;
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
uint _6[16];

void main()
{
    bool _348 = false;
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
    float _112 = _72.w;
    float _114 = _72.x;
    float _116 = _74.x;
    float _118 = _74.y;
    float _120 = _74.z;
    float _122 = inversesqrt(fma(_106, _106, fma(_104, _104, _102 * _102)));
    float _124 = _106 * _122;
    float _126 = _104 * _122;
    float _128 = _102 * _122;
    float _130 = texture(fp_tex_tcb_1A, vec2(_90, _92)).x;
    float _132 = sqrt(clamp((-fma(_98, _98, _100 * _100)) + 1.0, 0.0, 1.0));
    float _134 = fma(_128, _132, fma(_98, _114, _100 * (fma(_126, _110, -(_124 * _108)) * _112)));
    float _136 = fma(_126, _132, fma(_98, _108, _100 * (fma(_124, _114, -(_128 * _110)) * _112)));
    float _138 = fma(_124, _132, fma(_98, _110, _100 * (fma(_128, _108, -(_126 * _114)) * _112)));
    float _140 = 1.0 / (_76.z * gl_FragCoord.w);
    float _142 = inversesqrt(fma(_120, _120, fma(_118, _118, _116 * _116)));
    float _144 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].z);
    float _146 = _116 * (-_142);
    float _148 = _118 * (-_142);
    float _150 = _120 * (-_142);
    float _152 = inversesqrt(fma(_138, _138, fma(_136, _136, _134 * _134)));
    float _154 = _134 * _152;
    float _156 = _136 * _152;
    float _158 = _138 * _152;
    float _160 = fma(_158, _150, fma(_156, _148, _154 * _146));
    float _162 = 1.0 / _78.w;
    float _164 = fma(_154 * (-_160), -2.0, -_146);
    float _166 = fma(_156 * (-_160), -2.0, -_148);
    float _168 = fma(_158 * (-_160), -2.0, -_150);
    float _170 = max(_160, fp_c1_1._m0[0].w);
    float _172 = 1.0 / max(abs(_168), max(abs(_164), abs(_166)));
    vec2 _174 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _162, 0.5, 0.5), fma(_78.y * _162, -0.5, 0.5))).xy;
    vec3 _178 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _180 = _178.x;
    float _182 = _178.y;
    float _184 = _178.z;
    vec2 _186 = texture(fp_tex_tcb_38, vec2(_170, (-_144) + (-0.0))).xy;
    float _188 = _186.x;
    float _190 = _186.y;
    vec3 _192 = texture(fp_tex_tcb_36, vec4(_164 * _172, _166 * _172, _168 * _172, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_144 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _194 = texture(fp_tex_tcb_14, vec2(_90, _92)).xyz;
    float _196 = _80.y;
    float _198 = _80.z;
    float _200 = _80.x;
    float _202 = _196 + (-fp_c9_1._m0[32].w);
    float _204 = _202;
    if (_196 < fp_c9_1._m0[32].w)
    {
        _204 = _202 * (-5.0);
    }
    float _206 = _148 + (-fp_c5_1._m0[23].y);
    float _208 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w) * max(0.0, ((-_156) + 1.2000000476837158203125) * (clamp(fma(_204, -(1.0 / fma(clamp((-_156) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_204, -(1.0 / fma(clamp((-_156) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].x), 0.0, 1.0)));
    float _210 = clamp(_130 * (exp2(log2(clamp(max(_160, fp_c1_1._m0[0].y) + (-0.0), 0.0, 1.0)) * fp_c6_1._m0[43].x) * fp_c6_1._m0[43].y), 0.0, 1.0);
    float _212 = _146 + (-fp_c5_1._m0[23].x);
    float _214 = fma(_128 + (-_154), _210, _154);
    float _216 = fma(_126 + (-_156), _210, _156);
    float _218 = fma(_124 + (-_158), _210, _158);
    float _220 = _150 + (-fp_c5_1._m0[23].z);
    float _222 = _214 * _216;
    float _224 = _216 * _218;
    float _226 = _218 * _218;
    float _228 = inversesqrt(fma(_220, _220, fma(_206, _206, _212 * _212)));
    float _230 = fma(_214, _214, -(_216 * _216));
    float _232 = _214 * _218;
    float _234 = _212 * _228;
    float _236 = _206 * _228;
    int _239 = max(0, min(int(trunc((_198 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _241 = _220 * _228;
    float _243 = clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _245 = max(fma(_150, _241, fma(_148, _236, _146 * _234)), fp_c1_1._m0[0].w);
    uint _248 = uint(int(uint((((int(uint(_239) >> uint(16)) * 20) << 16) + (((_239 & 65535) * 20) + max(0, min(int(trunc((_200 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _250 = fp_c10_1._m0[int(uint(int(_248)) >> uint(2))][int(_248) & 3];
    float _252 = (-_174.y) + 1.0;
    float _254 = fma(_182, -fp_c6_1._m0[9].x, _182);
    float _256 = _252 * _243;
    float _258 = _144 * _144;
    float _260 = max(fma(_158, _241, fma(_156, _236, _154 * _234)), fp_c1_1._m0[0].w) * max(fma(_158, _241, fma(_156, _236, _154 * _234)), fp_c1_1._m0[0].w);
    float _262 = fma(_144, 0.5, 0.5);
    float _264 = fma(_182 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _266 = fma(_180 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _268 = fma(_158, -fp_c5_1._m0[23].z, fma(_156, -fp_c5_1._m0[23].y, _154 * (-fp_c5_1._m0[23].x)));
    float _270 = fma(_184 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _272 = max(_268, fp_c1_1._m0[0].w);
    float _274 = (_262 * 0.5) * _262;
    float _276 = fma(_130, fma(fp_c6_1._m0[41].z, fp_c6_1._m0[42].y, -_264), _264);
    float _278 = fma(_130, fma(fp_c6_1._m0[41].z, fp_c6_1._m0[42].x, -_266), _266);
    float _280 = fma(_180, -fp_c6_1._m0[9].x, _180);
    float _282 = clamp(texture(fp_tex_tcb_18, vec2(_90, _92)).x + (-0.0), 0.0, 1.0);
    float _284 = clamp((-fma(_243, max((-_174.x) + 1.0, _252), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _140, (_76.y * gl_FragCoord.w) * _140)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _286 = exp2(_245 * fma(_245, fp_c1_1._m0[1].x, -6.9831600189208984375));
    float _288 = 1.0 / (_274 + fma(_170, -_274, _170));
    float _290 = fma(_184, -fp_c6_1._m0[9].x, _184);
    float _292 = _184 * fp_c6_1._m0[19].z;
    float _294 = fma(_210, (-_280) + fp_c6_1._m0[44].x, _280);
    float _296 = fma(_130, fma(fp_c6_1._m0[41].z, fp_c6_1._m0[42].z, -_270), _270);
    float _298 = fma(_210, (-_254) + fp_c6_1._m0[44].y, _254);
    float _300 = fma(_210, -fp_c6_1._m0[18].x, fp_c6_1._m0[18].x);
    float _302 = fma(_210, (-_290) + fp_c6_1._m0[44].z, _290);
    float _304 = (_288 * (1.0 / (_274 + fma(_274, -_272, _272)))) * ((_258 * (1.0 / max(fma(_260, _258 * _258, -_260) + 1.0, fp_c1_1._m0[0].w))) * (_258 * (1.0 / max(fma(_260, _258 * _258, -_260) + 1.0, fp_c1_1._m0[0].w))));
    _6[3] = floatBitsToUint(fma(_304 * (_278 + fma(_278, -_286, _286)), fp_c1_1._m0[1].y, _294 * 0.3183098733425140380859375));
    float _306 = fma(fma(_278, _188, _190), _192.x, fma(_208, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_230, fp_c5_1._m0[31].x, (fma(_218, fp_c5_1._m0[25].z, fma(_216, fp_c5_1._m0[25].y, _214 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_232, fp_c5_1._m0[28].w, fma(_226, fp_c5_1._m0[28].z, fma(_224, fp_c5_1._m0[28].y, _222 * fp_c5_1._m0[28].x)))))) * fma(_294, -_278, _294));
    float _308 = _182 * fp_c6_1._m0[19].y;
    _6[2] = floatBitsToUint(fma(_304 * (_276 + fma(_276, -_286, _286)), fp_c1_1._m0[1].y, _298 * 0.3183098733425140380859375));
    _6[1] = floatBitsToUint(fma(_304 * (_296 + fma(_296, -_286, _286)), fp_c1_1._m0[1].y, _302 * 0.3183098733425140380859375));
    float _310 = clamp(_268 + (-0.0), 0.0, 1.0);
    float _312 = fma(fma(_276, _188, _190), _192.y, fma(_208, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_230, fp_c5_1._m0[31].y, (fma(_218, fp_c5_1._m0[26].z, fma(_216, fp_c5_1._m0[26].y, _214 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_232, fp_c5_1._m0[29].w, fma(_226, fp_c5_1._m0[29].z, fma(_224, fp_c5_1._m0[29].y, _222 * fp_c5_1._m0[29].x)))))) * fma(_298, -_276, _298));
    float _314 = fma(fma(_296, _188, _190), _192.z, fma(_208, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_230, fp_c5_1._m0[31].z, (fma(_218, fp_c5_1._m0[27].z, fma(_216, fp_c5_1._m0[27].y, _214 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_232, fp_c5_1._m0[30].w, fma(_226, fp_c5_1._m0[30].z, fma(_224, fp_c5_1._m0[30].y, _222 * fp_c5_1._m0[30].x)))))) * fma(_302, -_296, _302));
    _6[0] = floatBitsToUint(_310 * fp_c5_1._m0[5].x);
    float _316 = _180 * fp_c6_1._m0[19].x;
    int _318 = floatBitsToInt(_250);
    float _320 = _306;
    float _322 = _312;
    float _324 = _314;
    float _326 = _306;
    float _328 = _312;
    float _330 = _314;
    if (floatBitsToInt(_250) != (-1))
    {
        float _332 = clamp(fma(_256, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _334 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _336 = 0;
        float _340;
        float _342;
        float _344;
        int _434;
        do
        {
            int _338 = _318 & 255;
            _340 = _320;
            _342 = _322;
            _344 = _324;
            _348 = uint(_338) >= 30u;
            if (_348)
            {
                break;
            }
            int _350 = _338 << 4;
            uint _352 = uint(int(uint(_350 + 7360) >> uint(2)));
            int _354 = int(_352) + 1;
            uint _356 = uint(int(uint(_350 + 7368) >> uint(2)));
            uint _358 = uint(int(uint(_350 + 6880) >> uint(2)));
            int _360 = int(_358) + 1;
            uint _362 = uint(int(uint(_350 + 8320) >> uint(2)));
            float _364 = (-_200) + fp_c10_1._m0[int(uint(int(_352)) >> uint(2))][int(_352) & 3];
            float _366 = (-_196) + fp_c10_1._m0[int(uint(_354) >> uint(2))][_354 & 3];
            float _368 = (-_198) + fp_c10_1._m0[int(uint(int(_356)) >> uint(2))][int(_356) & 3];
            bool _370 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_362)) >> uint(2))][int(_362) & 3]) != 0;
            float _372 = fma(_368, _368, fma(_366, _366, _364 * _364));
            float _374 = _364 * inversesqrt(_372);
            float _376 = _366 * inversesqrt(_372);
            float _378 = _368 * inversesqrt(_372);
            float _380 = _146 + _374;
            float _382 = _148 + _376;
            float _384 = _150 + _378;
            float _386 = inversesqrt(fma(_384, _384, fma(_382, _382, _380 * _380)));
            float _388 = _380 * _386;
            float _390 = _382 * _386;
            float _392 = _384 * _386;
            float _394 = fma(_158, _378, fma(_156, _376, _154 * _374));
            float _396 = max(fma(_150, _392, fma(_148, _390, _146 * _388)), fp_c1_1._m0[0].w);
            float _398 = max(fma(_158, _392, fma(_156, _390, _154 * _388)), fp_c1_1._m0[0].w) * max(fma(_158, _392, fma(_156, _390, _154 * _388)), fp_c1_1._m0[0].w);
            float _400 = max(_394, fp_c1_1._m0[0].w);
            float _402 = exp2(_396 * fma(_396, fp_c1_1._m0[1].x, -6.9831600189208984375));
            uint _404 = uint(int(uint(_350 + 6400) >> uint(2)));
            int _406 = int(_404) + 1;
            uint _408 = uint(int(uint(_350 + 6408) >> uint(2)));
            int _410 = int(_408) + 1;
            float _412 = (_288 * (1.0 / (_274 + fma(_274, -_400, _400)))) * ((_258 * (1.0 / max(fma(_258 * _258, _398, -_398) + 1.0, fp_c1_1._m0[0].w))) * (_258 * (1.0 / max(fma(_258 * _258, _398, -_398) + 1.0, fp_c1_1._m0[0].w))));
            float _414 = (_296 + fma(_296, -_402, _402)) * _412;
            float _416 = _414;
            if (!_370)
            {
                _416 = 1.0;
            }
            float _418 = _416;
            if (_370)
            {
                uint _420 = uint(int(uint(_350 + 7840) >> uint(2)));
                int _422 = int(_420) + 1;
                uint _424 = uint(int(uint(_350 + 7848) >> uint(2)));
                uint _426 = uint(int(uint(_350 + 6888) >> uint(2)));
                float _428 = fp_c10_1._m0[int(uint(int(_426)) >> uint(2))][int(_426) & 3];
                int _430 = int(_426) + 1;
                _418 = exp2(fp_c10_1._m0[int(uint(_430) >> uint(2))][_430 & 3] * log2(clamp(((-_428) + fma(_378, -fp_c10_1._m0[int(uint(int(_424)) >> uint(2))][int(_424) & 3], fma(_376, -fp_c10_1._m0[int(uint(_422) >> uint(2))][_422 & 3], _374 * (-fp_c10_1._m0[int(uint(int(_420)) >> uint(2))][int(_420) & 3])))) * (1.0 / ((-_428) + 1.0)), 0.0, 1.0)));
            }
            float _432 = exp2(fp_c10_1._m0[int(uint(_360) >> uint(2))][_360 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_358)) >> uint(2))][int(_358) & 3], -sqrt(_372), fp_c1_1._m0[0].x), 0.0, 1.0))) * _418;
            _434 = _336 + 1;
            float _436 = _432 * clamp(_394 + (-0.0), 0.0, 1.0);
            float _438 = fp_c10_1._m0[int(uint(_410) >> uint(2))][_410 & 3] * _432;
            float _440 = exp2(log2(clamp(fma(_160, -clamp((-_394) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].x), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_334, fp_c1_1._m0[1].w, exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_150, -_378, fma(_148, -_376, _146 * (-_374))), fp_c1_1._m0[0].y) + (-0.0), 0.0, 1.0))) * _334) + 0.20000000298023223876953125);
            float _442 = clamp((-_300) + 1.0, 0.0, 1.0);
            float _444 = _320 + fma((fp_c10_1._m0[int(uint(int(_404)) >> uint(2))][int(_404) & 3] * _436) * fma(_294, fp_c1_1._m0[1].z, ((_278 + fma(_278, -_402, _402)) * _412) * 0.079577468335628509521484375), _442, _332 * (_300 * (_440 * (_316 * _438))));
            float _446 = _322 + fma((fp_c10_1._m0[int(uint(_406) >> uint(2))][_406 & 3] * _436) * fma(_298, fp_c1_1._m0[1].z, ((_276 + fma(_276, -_402, _402)) * _412) * 0.079577468335628509521484375), _442, _332 * (_300 * (_440 * (_308 * _438))));
            float _448 = _324 + fma((fp_c10_1._m0[int(uint(int(_408)) >> uint(2))][int(_408) & 3] * _436) * fma(_302, fp_c1_1._m0[1].z, _414 * 0.079577468335628509521484375), _442, _332 * (_300 * (_440 * (_292 * _438))));
            _318 = int(uint(_318) >> uint(8));
            _336 = _434;
            _320 = _444;
            _322 = _446;
            _324 = _448;
            _340 = _444;
            _342 = _446;
            _344 = _448;
        } while (!(_434 >= 4));
        _348 = false;
        _326 = _340;
        _328 = _342;
        _330 = _344;
        if ((_318 & 255) == 30)
        {
            float _450 = 1.0 / (fma(_198, fp_c10_1._m0[565].z, fma(_196, fp_c10_1._m0[565].y, _200 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _452 = 1.0 / fp_c10_1._m0[561].y;
            float _454 = _200 + (-fp_c10_1._m0[557].x);
            float _456 = _198 + (-fp_c10_1._m0[557].z);
            float _458 = _456 * fp_c10_1._m0[558].x;
            float _460 = _454 * fp_c10_1._m0[558].z;
            float _462 = (-_200) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_452, fp_c10_1._m0[557].x);
            float _464 = (-_198) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_452, fp_c10_1._m0[557].z);
            float _466 = _462 * _462;
            float _468 = ((-float(_458 < _460)) + float(_458 > _460)) * fp_c10_1._m0[561].y;
            float _470 = fma(_456, _456, _454 * _454);
            float _472 = sqrt(fma(_464, _464, _466)) * (-fp_c10_1._m0[558].y);
            float _474 = inversesqrt(fma(_464, _464, fma(_472, _472, _466)));
            float _476 = fma(_456, fp_c10_1._m0[558].z, _454 * fp_c10_1._m0[558].x);
            float _478 = _462 * _474;
            float _480 = _472 * _474;
            float _482 = _464 * _474;
            bool _484 = _476 > 0.0;
            float _486 = _146 + _478;
            float _488 = _148 + _480;
            float _490 = _470;
            if (_484)
            {
                _490 = sqrt(_470);
            }
            float _492 = _150 + _482;
            float _494 = _490;
            if (!_484)
            {
                _494 = 1.0;
            }
            float _496 = inversesqrt(fma(_482, _482, _478 * _478));
            float _498 = fma(_158, _482, fma(_156, _480, _154 * _478));
            float _500 = inversesqrt(fma(_492, _492, fma(_488, _488, _486 * _486)));
            float _502 = _486 * _500;
            float _504 = _488 * _500;
            float _506 = _492 * _500;
            float _508 = max(_498, fp_c1_1._m0[0].w);
            float _510 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_454, fma(_468, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_456 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_468 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_454, fma(_468, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_456 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_468 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _512 = max(fma(_150, _506, fma(_148, _504, _146 * _502)), fp_c1_1._m0[0].w);
            float _514 = max(fma(_158, _506, fma(_156, _504, _154 * _502)), fp_c1_1._m0[0].w) * max(fma(_158, _506, fma(_156, _504, _154 * _502)), fp_c1_1._m0[0].w);
            float _516 = clamp(fma(_476 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_476 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0);
            float _518 = fma(_510, -_510, fp_c1_1._m0[0].x) * fma(_510, -_510, fp_c1_1._m0[0].x);
            if (!(fma(_456 * inversesqrt(_470), fp_c10_1._m0[558].z, (_454 * inversesqrt(_470)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z))
            {
                _518 = 1.0;
            }
            float _520 = exp2(_512 * fma(_512, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _522 = (exp2(log2(clamp(fma(_494, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_482 * _496, -fp_c10_1._m0[558].z, (_478 * _496) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_516, -_516, fp_c1_1._m0[0].x) * fma(_516, -_516, fp_c1_1._m0[0].x), _518);
            float _524 = _522 * clamp(_498 + (-0.0), 0.0, 1.0);
            float _526 = (_288 * (1.0 / (_274 + fma(_274, -_508, _508)))) * ((_258 * (1.0 / max(fma(_258 * _258, _514, -_514) + 1.0, fp_c1_1._m0[0].w))) * (_258 * (1.0 / max(fma(_258 * _258, _514, -_514) + 1.0, fp_c1_1._m0[0].w))));
            float _528 = (fma(_334, fp_c1_1._m0[1].w, _334 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_150, -_482, fma(_148, -_480, _146 * (-_478))), fp_c1_1._m0[0].y) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125) * exp2(log2(clamp(fma(_160, -clamp((-_498) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].x), 0.0, 1.0)) * fp_c6_1._m0[18].z);
            float _530 = clamp((-_300) + 1.0, 0.0, 1.0);
            float _532 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_198, fp_c10_1._m0[562].z, fma(_196, fp_c10_1._m0[562].y, _200 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _450, 0.5, 0.5), (-fma((fma(_198, fp_c10_1._m0[563].z, fma(_196, fp_c10_1._m0[563].y, _200 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _450, 0.5, 0.5)) + 1.0)).z > fma((fma(_198, fp_c10_1._m0[564].z, fma(_196, fp_c10_1._m0[564].y, _200 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _450, 0.5, 0.5)) || (_476 <= 0.0));
            _326 = fma(fma(_530, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _524) * fma(_294, fp_c1_1._m0[1].z, ((_278 + fma(_278, -_520, _520)) * _526) * 0.079577468335628509521484375), _332 * (_300 * (_528 * (_316 * _522)))), _532, _340);
            _328 = fma(fma(_530, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _524) * fma(_298, fp_c1_1._m0[1].z, ((_276 + fma(_276, -_520, _520)) * _526) * 0.079577468335628509521484375), _332 * (_300 * (_528 * (_308 * _522)))), _532, _342);
            _330 = fma(fma(_530, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _524) * fma(_302, fp_c1_1._m0[1].z, ((_296 + fma(_296, -_520, _520)) * _526) * 0.079577468335628509521484375), _332 * (_300 * (_528 * (_292 * _522)))), _532, _344);
        }
    }
    float _534 = _200 + (-fp_c3_1._m0[11].w);
    float _536 = _196 + (-fp_c3_1._m0[12].w);
    float _538 = _198 + (-fp_c3_1._m0[13].w);
    float _540 = fma(_538, _538, fma(_536, _536, _534 * _534));
    float _542 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
    float _544 = exp2(log2(clamp(fma(_160, -clamp((-_268) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].x), 0.0, 1.0)) * fp_c6_1._m0[18].z) * (fma(_542, fp_c1_1._m0[1].w, _542 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_150, fp_c5_1._m0[23].z, fma(_148, fp_c5_1._m0[23].y, _146 * fp_c5_1._m0[23].x)), fp_c1_1._m0[0].y) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _546 = exp2(log2(clamp(sqrt(_540) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_538 * inversesqrt(_540), fp_c5_1._m0[23].z, fma(_536 * inversesqrt(_540), fp_c5_1._m0[23].y, (_534 * inversesqrt(_540)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _548 = clamp((-_300) + 1.0, 0.0, 1.0);
    float _550 = clamp(fma(_256, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _552 = clamp(fma(_282 * _284, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _554 = fma(_180 * _194.x, fp_c6_1._m0[11].x, fma(_282, _326, fma(_284, _548 * (uintBitsToFloat(_6[3]) * uintBitsToFloat(_6[0])), _550 * (_300 * (_544 * (_316 * fp_c5_1._m0[5].w))))));
    float _556 = fma(_182 * _194.y, fp_c6_1._m0[11].x, fma(_282, _328, fma(_284, _548 * (uintBitsToFloat(_6[2]) * (_310 * fp_c5_1._m0[5].y)), _550 * (_300 * (_544 * (_308 * fp_c5_1._m0[5].w))))));
    float _558 = clamp(fma(fma(_198, fp_c5_1._m0[14].z, fma(_196, fp_c5_1._m0[14].y, _200 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _560 = fma(_184 * _194.z, fp_c6_1._m0[11].x, fma(_282, _330, fma(_284, _548 * (uintBitsToFloat(_6[1]) * (_310 * fp_c5_1._m0[5].z)), _550 * (_300 * (_544 * (_292 * fp_c5_1._m0[5].w))))));
    float _562 = fma((-_554) + fp_c5_1._m0[13].x, _558, _554);
    float _564 = fma((-_556) + fp_c5_1._m0[13].y, _558, _556);
    float _566 = fma((-_560) + fp_c5_1._m0[13].z, _558, _560);
    float _568 = clamp((-exp2((clamp(fma(sqrt(_540), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = max(0.0, min(fma(_568, (-_562) + fma(fma((_546 * fp_c7_1._m0[55].x) * _552, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _562), fp_c6_1._m0[140].x));
    _83.y = max(0.0, min(fma(_568, (-_564) + fma(fma((_546 * fp_c7_1._m0[55].y) * _552, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _564), fp_c6_1._m0[140].x));
    _83.z = max(0.0, min(fma(_568, (-_566) + fma(fma((_546 * fp_c7_1._m0[55].z) * _552, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _566), fp_c6_1._m0[140].x));
    _83.w = 1.0;
}


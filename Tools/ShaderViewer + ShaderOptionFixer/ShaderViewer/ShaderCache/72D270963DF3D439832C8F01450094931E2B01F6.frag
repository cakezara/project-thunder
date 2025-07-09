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
    bool _442 = false;
    float _96 = _74.x;
    float _98 = _74.y;
    vec2 _102 = texture(fp_tex_tcb_E, vec2(_96, _98)).xy;
    float _104 = _102.x;
    float _106 = _102.y;
    vec3 _110 = texture(fp_tex_tcb_26, vec2(_96, _98)).xyz;
    vec3 _112 = texture(fp_tex_tcb_A, vec2(_96, _98)).xyz;
    float _114 = _112.x;
    float _116 = _112.y;
    float _118 = _112.z;
    vec3 _120 = texture(fp_tex_tcb_14, vec2(_96, _98)).xyz;
    vec3 _122 = texture(fp_tex_tcb_14, vec2(_96, _98)).xyz;
    float _124 = _76.x;
    float _126 = _76.y;
    float _128 = _76.z;
    float _130 = _78.z;
    float _132 = _78.w;
    float _134 = _78.y;
    float _136 = _78.x;
    float _138 = inversesqrt(fma(_128, _128, fma(_126, _126, _124 * _124)));
    float _140 = _128 * _138;
    float _142 = _124 * _138;
    float _144 = _126 * _138;
    float _146 = (-texture(fp_tex_tcb_26, vec2(_96 + (-fp_c6_1._m0[26].w), _98 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_26, vec2(_96 + fp_c6_1._m0[26].w, _98 + fp_c6_1._m0[26].w)).x;
    float _148 = sqrt(clamp((-fma(_104, _104, _106 * _106)) + 1.0, 0.0, 1.0));
    float _150 = fma(_136 * _146, fp_c6_1._m0[27].x, _142);
    float _152 = fma(_130 * _146, fp_c6_1._m0[27].x, _140);
    float _154 = fma(_134 * _146, fp_c6_1._m0[27].x, _144);
    float _156 = fma(_142, _148, fma(_104, _136, _106 * (fma(_144, _130, -(_140 * _134)) * _132)));
    float _158 = fma(_140, _148, fma(_104, _130, _106 * (fma(_142, _134, -(_144 * _136)) * _132)));
    float _160 = min((_110.z + fp_c6_1._m0[26].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _162 = fma(_144, _148, fma(_104, _134, _106 * (fma(_140, _136, -(_142 * _130)) * _132)));
    float _164 = min((_110.y + fp_c6_1._m0[26].y) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _166 = min((_110.x + fp_c6_1._m0[26].x) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _168 = 1.0 / _80.w;
    float _170 = max(_160, max(_164, _166));
    float _172 = inversesqrt(fma(_152, _152, fma(_154, _154, _150 * _150)));
    float _174 = _170 + (-fp_c7_1._m0[21].w);
    float _176 = fma((-fp_c7_1._m0[20].y) + fp_c7_1._m0[20].x, clamp(_144 + (-0.0), 0.0, 1.0), fp_c7_1._m0[20].y);
    float _178 = clamp(_174 + (-0.0), 0.0, 1.0);
    float _180 = inversesqrt(fma(_158, _158, fma(_162, _162, _156 * _156)));
    float _182 = _150 * _172;
    float _184 = _154 * _172;
    float _186 = clamp(((_164 + (-_170)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _188 = _152 * _172;
    float _190 = clamp(((_166 + (-_170)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _192 = clamp(((_160 + (-_170)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _194 = _156 * _180;
    float _196 = _162 * _180;
    float _198 = _158 * _180;
    bool _202 = min(_178 * 1000.0, 1.0) > 0.5;
    float _204 = fma(_192, fp_c8_1._m0[18].x, fma(_190, fp_c8_1._m0[4].x, _186 * fp_c8_1._m0[11].x));
    float _206 = fma(_192, fp_c8_1._m0[18].y, fma(_190, fp_c8_1._m0[4].y, _186 * fp_c8_1._m0[11].y));
    float _208 = fma(_192, fp_c8_1._m0[18].z, fma(_190, fp_c8_1._m0[4].z, _186 * fp_c8_1._m0[11].z));
    float _210 = _194;
    float _212 = _196;
    float _214 = _198;
    float _224;
    float _226;
    float _228;
    float _230;
    float _232;
    float _234;
    float _236;
    float _238;
    float _240;
    float _242;
    float _244;
    if (_202)
    {
        float _216 = clamp(_178 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _218 = fma(fma(_204, -fp_c7_1._m0[45].y, fma(_192, fp_c8_1._m0[17].x, fma(_190, fp_c8_1._m0[3].x, _186 * fp_c8_1._m0[10].x))), _216, _204 * fp_c7_1._m0[45].y);
        float _220 = fma(fma(_206, -fp_c7_1._m0[45].y, fma(_192, fp_c8_1._m0[17].y, fma(_190, fp_c8_1._m0[3].y, _186 * fp_c8_1._m0[10].y))), _216, _206 * fp_c7_1._m0[45].y);
        float _222 = fma(fma(_208, -fp_c7_1._m0[45].y, fma(_192, fp_c8_1._m0[17].z, fma(_190, fp_c8_1._m0[3].z, _186 * fp_c8_1._m0[10].z))), _216, _208 * fp_c7_1._m0[45].y);
        _224 = fp_c7_1._m0[18].w;
        _210 = fma(_176, (-_194) + _182, _194);
        _212 = fma(_176, (-_196) + _184, _196);
        _214 = fma(_176, (-_198) + _188, _198);
        _226 = _220;
        _228 = 0.0;
        _230 = _222;
        _232 = _218;
        _234 = _120.x * fp_c6_1._m0[12].x;
        _236 = _120.y * fp_c6_1._m0[12].y;
        _238 = _218 * fp_c7_1._m0[18].z;
        _240 = _120.z * fp_c6_1._m0[12].z;
        _242 = _220 * fp_c7_1._m0[18].z;
        _244 = _222 * fp_c7_1._m0[18].z;
    }
    else
    {
        float _246 = clamp(texture(fp_tex_tcb_C, vec2(_96, _98)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
        _224 = max(texture(fp_tex_tcb_10, vec2(_96, _98)).x, fp_c1_1._m0[0].y);
        _226 = fma((-_116) + fp_c6_1._m0[93].y, _246, _116);
        _228 = texture(fp_tex_tcb_12, vec2(_96, _98)).x;
        _230 = fma((-_118) + fp_c6_1._m0[93].z, _246, _118);
        _232 = fma((-_114) + fp_c6_1._m0[93].x, _246, _114);
        _234 = _122.x * fp_c6_1._m0[12].x;
        _236 = _122.y * fp_c6_1._m0[12].y;
        _238 = 0.0;
        _240 = _122.z * fp_c6_1._m0[12].z;
        _242 = 0.0;
        _244 = 0.0;
    }
    float _248 = clamp(texture(fp_tex_tcb_18, vec2(_96, _98)).x + (-0.0), 0.0, 1.0);
    float _250 = _84.x;
    float _252 = _84.y;
    float _254 = _84.z;
    float _256 = 1.0 / (_82.z * gl_FragCoord.w);
    vec2 _258 = texture(fp_tex_tcb_2A, vec2(fma(_80.x * _168, 0.5, 0.5), fma(_80.y * _168, -0.5, 0.5))).xy;
    float _260 = inversesqrt(fma(_254, _254, fma(_252, _252, _250 * _250)));
    float _262 = _250 * (-_260);
    float _264 = _252 * (-_260);
    float _266 = _254 * (-_260);
    float _268 = fma(_266, _214, fma(_264, _212, _262 * _210));
    float _270 = max(_268, fp_c1_1._m0[0].w);
    vec2 _272 = texture(fp_tex_tcb_38, vec2(_270, (-_224) + (-0.0))).xy;
    float _274 = fma(_226 + (-0.039999999105930328369140625), _228, fp_c1_1._m0[0].z);
    float _276 = fma(_226, -_228, _226);
    float _278 = fma(_230, -_228, _230);
    float _280 = fma(_232, -_228, _232);
    float _282 = fma(_232 + (-0.039999999105930328369140625), _228, fp_c1_1._m0[0].z);
    float _284 = fma(_230 + (-0.039999999105930328369140625), _228, fp_c1_1._m0[0].z);
    float _286 = clamp((-fma(max((-_258.x) + 1.0, (-_258.y) + 1.0), clamp(_86.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_82.x * gl_FragCoord.w) * _256, (_82.y * gl_FragCoord.w) * _256)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _288 = _270;
    float _290 = _284;
    float _292 = _282;
    float _294 = _274;
    float _310;
    float _312;
    float _314;
    float _316;
    float _318;
    float _320;
    float _322;
    float _324;
    float _326;
    float _328;
    if (_202)
    {
        float _296 = fma(_266, -_214, fma(_264, -_212, _262 * (-_210)));
        float _298 = fma(_296 * _210, -2.0, -_262);
        float _300 = fma(_296 * _212, -2.0, -_264);
        float _302 = fma(_296 * _214, -2.0, -_266);
        float _304 = 1.0 / max(abs(_302), max(abs(_298), abs(_300)));
        vec3 _306 = texture(fp_tex_tcb_36, vec4(_298 * _304, _300 * _304, _302 * _304, float(12)), 0.0).xyz;
        float _308 = fma(_272.x, fp_c7_1._m0[19].x, _272.y);
        _310 = _210 * fp_c7_1._m0[19].z;
        _312 = fma(_212 + (-1.0), fp_c7_1._m0[19].z, 1.0);
        _314 = _214 * fp_c7_1._m0[19].z;
        _316 = 0.0;
        _318 = 0.0;
        _290 = fp_c7_1._m0[19].x;
        _292 = fp_c7_1._m0[19].x;
        _294 = fp_c7_1._m0[19].x;
        _320 = 0.0;
        _322 = _306.z * _308;
        _324 = _306.y * _308;
        _326 = _306.x * _308;
        _328 = 1.0;
    }
    else
    {
        float _330 = fma(_266, -_214, fma(_264, -_212, _262 * (-_210)));
        float _332 = fma(_330 * _210, -2.0, -_262);
        float _334 = fma(_330 * _212, -2.0, -_264);
        float _336 = fma(_330 * _214, -2.0, -_266);
        float _338 = 1.0 / max(abs(_336), max(abs(_332), abs(_334)));
        float _340 = max(_268, fp_c1_1._m0[0].w);
        vec2 _342 = texture(fp_tex_tcb_38, vec2(_340, (-_224) + (-0.0))).xy;
        float _344 = _342.x;
        float _346 = _342.y;
        vec3 _348 = texture(fp_tex_tcb_36, vec4(_332 * _338, _334 * _338, _336 * _338, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_224 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
        float _350 = _86.y;
        float _352 = _350 + (-fp_c9_1._m0[32].w);
        float _354 = _352;
        _310 = _210;
        _288 = _340;
        _314 = _214;
        if (_350 < fp_c9_1._m0[32].w)
        {
            _354 = _352 * (-5.0);
        }
        float _356 = fma(fma(_188, -fp_c5_1._m0[23].z, fma(_184, -fp_c5_1._m0[23].y, _182 * (-fp_c5_1._m0[23].x))), -_212, _212);
        float _358 = max(0.0, ((-_212) + 1.2000000476837158203125) * (clamp(fma(_354, -(1.0 / fma(clamp((-_212) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_354, -(1.0 / fma(clamp((-_212) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[1].x), 0.0, 1.0))) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c7_1._m0[46].w * fp_c5_1._m0[5].w);
        _312 = _212;
        _316 = _358 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
        _318 = _358 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
        _320 = _358 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
        _322 = fma(_284, _344, _346) * _348.z;
        _324 = fma(_274, _344, _346) * _348.y;
        _326 = fma(_282, _344, _346) * _348.x;
        _328 = clamp(fma(_356, clamp(_174 * (-7.0), 0.0, 1.0), -_356) + fp_c1_1._m0[1].y, 0.0, 1.0);
    }
    float _360 = _262 + (-fp_c5_1._m0[23].x);
    float _362 = _86.z;
    float _364 = _264 + (-fp_c5_1._m0[23].y);
    float _366 = _86.x;
    float _368 = _266 + (-fp_c5_1._m0[23].z);
    float _370 = fma(_224, 0.5, 0.5);
    float _372 = _224 * _224;
    float _374 = (_370 * 0.5) * _370;
    float _376 = _312 * _310;
    float _378 = _314 * _312;
    float _380 = inversesqrt(fma(_368, _368, fma(_364, _364, _360 * _360)));
    float _382 = 1.0 / (_374 + fma(_288, -_374, _288));
    float _384 = _360 * _380;
    float _386 = _364 * _380;
    float _388 = _368 * _380;
    float _390 = fma(_310, _310, -(_312 * _312));
    float _392 = _314 * _310;
    float _394 = _314 * _314;
    int _397 = max(0, min(int(trunc((_362 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _399 = max(fma(_388, _214, fma(_386, _212, _384 * _210)), fp_c1_1._m0[0].w) * max(fma(_388, _214, fma(_386, _212, _384 * _210)), fp_c1_1._m0[0].w);
    float _401 = max(fma(_266, _388, fma(_264, _386, _262 * _384)), fp_c1_1._m0[0].w);
    uint _404 = uint(int(uint((((int(uint(_397) >> uint(16)) * 20) << 16) + (((_397 & 65535) * 20) + max(0, min(int(trunc((_366 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _406 = fp_c10_1._m0[int(uint(int(_404)) >> uint(2))][int(_404) & 3];
    float _408 = exp2(_401 * fma(_401, fp_c1_1._m0[1].z, -6.9831600189208984375));
    float _410 = (_382 * (1.0 / (_374 + fma(max(fma(_214, -fp_c5_1._m0[23].z, fma(_212, -fp_c5_1._m0[23].y, _210 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w), -_374, max(fma(_214, -fp_c5_1._m0[23].z, fma(_212, -fp_c5_1._m0[23].y, _210 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].w))))) * ((_372 * (1.0 / max(fma(_399, _372 * _372, -_399) + 1.0, fp_c1_1._m0[0].w))) * (_372 * (1.0 / max(fma(_399, _372 * _372, -_399) + 1.0, fp_c1_1._m0[0].w))));
    float _412 = fma(max(0.0, fma(_390, fp_c5_1._m0[31].z, (fma(_314, fp_c5_1._m0[27].z, fma(_312, fp_c5_1._m0[27].y, _310 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_392, fp_c5_1._m0[30].w, fma(_394, fp_c5_1._m0[30].z, fma(_378, fp_c5_1._m0[30].y, _376 * fp_c5_1._m0[30].x))))) + _320, fma(_278, -_290, _278), _322);
    float _414 = fma(max(0.0, fma(_390, fp_c5_1._m0[31].y, (fma(_314, fp_c5_1._m0[26].z, fma(_312, fp_c5_1._m0[26].y, _310 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_392, fp_c5_1._m0[29].w, fma(_394, fp_c5_1._m0[29].z, fma(_378, fp_c5_1._m0[29].y, _376 * fp_c5_1._m0[29].x))))) + _318, fma(_276, -_294, _276), _324);
    float _416 = fma(max(0.0, fma(_390, fp_c5_1._m0[31].x, (fma(_314, fp_c5_1._m0[25].z, fma(_312, fp_c5_1._m0[25].y, _310 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_392, fp_c5_1._m0[28].w, fma(_394, fp_c5_1._m0[28].z, fma(_378, fp_c5_1._m0[28].y, _376 * fp_c5_1._m0[28].x))))) + _316, fma(_280, -_292, _280), _326);
    float _418 = _414;
    float _420 = _412;
    float _422 = _416;
    float _424 = _416;
    float _426 = _414;
    float _428 = _412;
    if (floatBitsToInt(_406) != (-1))
    {
        int _430 = floatBitsToInt(_406);
        int _432 = 0;
        float _436;
        float _438;
        float _440;
        int _522;
        do
        {
            int _434 = _430 & 255;
            _436 = _422;
            _438 = _418;
            _440 = _420;
            _442 = uint(_434) >= 30u;
            if (_442)
            {
                break;
            }
            int _444 = _434 << 4;
            uint _446 = uint(int(uint(_444 + 7360) >> uint(2)));
            int _448 = int(_446) + 1;
            uint _450 = uint(int(uint(_444 + 7368) >> uint(2)));
            float _452 = (-_366) + fp_c10_1._m0[int(uint(int(_446)) >> uint(2))][int(_446) & 3];
            float _454 = (-_86.y) + fp_c10_1._m0[int(uint(_448) >> uint(2))][_448 & 3];
            float _456 = (-_362) + fp_c10_1._m0[int(uint(int(_450)) >> uint(2))][int(_450) & 3];
            float _458 = fma(_456, _456, fma(_454, _454, _452 * _452));
            float _460 = _452 * inversesqrt(_458);
            float _462 = _454 * inversesqrt(_458);
            float _464 = _456 * inversesqrt(_458);
            float _466 = _262 + _460;
            float _468 = _264 + _462;
            float _470 = _266 + _464;
            uint _472 = uint(int(uint(_444 + 6880) >> uint(2)));
            int _474 = int(_472) + 1;
            float _476 = inversesqrt(fma(_470, _470, fma(_468, _468, _466 * _466)));
            float _478 = _466 * _476;
            float _480 = _468 * _476;
            float _482 = _470 * _476;
            uint _484 = uint(int(uint(_444 + 8320) >> uint(2)));
            uint _486 = uint(int(uint(_444 + 6408) >> uint(2)));
            float _488 = fma(_464, _214, fma(_462, _212, _460 * _210));
            float _490 = max(fma(_266, _482, fma(_264, _480, _262 * _478)), fp_c1_1._m0[0].w);
            float _492 = max(_488, fp_c1_1._m0[0].w);
            float _494 = max(fma(_482, _214, fma(_480, _212, _478 * _210)), fp_c1_1._m0[0].w) * max(fma(_482, _214, fma(_480, _212, _478 * _210)), fp_c1_1._m0[0].w);
            float _496 = exp2(_490 * fma(_490, fp_c1_1._m0[1].z, -6.9831600189208984375));
            uint _498 = uint(int(uint(_444 + 6400) >> uint(2)));
            int _500 = int(_498) + 1;
            bool _502 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_484)) >> uint(2))][int(_484) & 3]) != 0;
            float _504 = (_382 * (1.0 / (_374 + fma(_374, -_492, _492)))) * ((_372 * (1.0 / max(fma(_372 * _372, _494, -_494) + 1.0, fp_c1_1._m0[0].w))) * (_372 * (1.0 / max(fma(_372 * _372, _494, -_494) + 1.0, fp_c1_1._m0[0].w))));
            float _506 = _504;
            if (!_502)
            {
                _506 = 1.0;
            }
            float _508 = _506;
            if (_502)
            {
                uint _510 = uint(int(uint(_444 + 7840) >> uint(2)));
                int _512 = int(_510) + 1;
                uint _514 = uint(int(uint(_444 + 6888) >> uint(2)));
                float _516 = fp_c10_1._m0[int(uint(int(_514)) >> uint(2))][int(_514) & 3];
                int _518 = int(_514) + 1;
                uint _520 = uint(int(uint(_444 + 7848) >> uint(2)));
                _508 = exp2(fp_c10_1._m0[int(uint(_518) >> uint(2))][_518 & 3] * log2(clamp(((-_516) + fma(_464, -fp_c10_1._m0[int(uint(int(_520)) >> uint(2))][int(_520) & 3], fma(_462, -fp_c10_1._m0[int(uint(_512) >> uint(2))][_512 & 3], _460 * (-fp_c10_1._m0[int(uint(int(_510)) >> uint(2))][int(_510) & 3])))) * (1.0 / ((-_516) + 1.0)), 0.0, 1.0)));
            }
            _522 = _432 + 1;
            float _524 = (exp2(fp_c10_1._m0[int(uint(_474) >> uint(2))][_474 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_472)) >> uint(2))][int(_472) & 3], -sqrt(_458), fp_c1_1._m0[1].x), 0.0, 1.0))) * _508) * clamp(_488 + (-0.0), 0.0, 1.0);
            float _526 = fma(fp_c10_1._m0[int(uint(_500) >> uint(2))][_500 & 3] * _524, fma(_276, fp_c1_1._m0[2].x, ((fma(_496, -_294, _496) + _294) * _504) * 0.079577468335628509521484375), _418);
            float _528 = fma(fp_c10_1._m0[int(uint(int(_486)) >> uint(2))][int(_486) & 3] * _524, fma(_278, fp_c1_1._m0[2].x, ((fma(_496, -_290, _496) + _290) * _504) * 0.079577468335628509521484375), _420);
            float _530 = fma(fp_c10_1._m0[int(uint(int(_498)) >> uint(2))][int(_498) & 3] * _524, fma(_280, fp_c1_1._m0[2].x, ((fma(_496, -_292, _496) + _292) * _504) * 0.079577468335628509521484375), _422);
            _430 = int(uint(_430) >> uint(8));
            _432 = _522;
            _418 = _526;
            _420 = _528;
            _422 = _530;
            _436 = _530;
            _438 = _526;
            _440 = _528;
        } while (!(_522 >= 4));
        _442 = false;
        _424 = _436;
        _426 = _438;
        _428 = _440;
        if ((_430 & 255) == 30)
        {
            float _532 = _86.y;
            float _534 = 1.0 / (fma(_362, fp_c10_1._m0[565].z, fma(_532, fp_c10_1._m0[565].y, _366 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _536 = 1.0 / fp_c10_1._m0[561].y;
            float _538 = _366 + (-fp_c10_1._m0[557].x);
            float _540 = _362 + (-fp_c10_1._m0[557].z);
            float _542 = _538 * fp_c10_1._m0[558].z;
            float _544 = (-_366) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_536, fp_c10_1._m0[557].x);
            float _546 = (-_362) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_536, fp_c10_1._m0[557].z);
            float _548 = _544 * _544;
            float _550 = _540 * fp_c10_1._m0[558].x;
            float _552 = sqrt(fma(_546, _546, _548)) * (-fp_c10_1._m0[558].y);
            float _554 = fma(_540, _540, _538 * _538);
            float _556 = ((-float(_550 < _542)) + float(_550 > _542)) * fp_c10_1._m0[561].y;
            float _558 = inversesqrt(fma(_546, _546, fma(_552, _552, _548)));
            float _560 = _544 * _558;
            float _562 = fma(_540, fp_c10_1._m0[558].z, _538 * fp_c10_1._m0[558].x);
            float _564 = _552 * _558;
            float _566 = _546 * _558;
            float _568 = _262 + _560;
            float _570 = _264 + _564;
            bool _572 = _562 > 0.0;
            float _574 = _554;
            if (_572)
            {
                _574 = sqrt(_554);
            }
            float _576 = _266 + _566;
            float _578 = fma(_566, _214, fma(_564, _212, _560 * _210));
            float _580 = _574;
            if (!_572)
            {
                _580 = 1.0;
            }
            float _582 = inversesqrt(fma(_566, _566, _560 * _560));
            float _584 = inversesqrt(fma(_576, _576, fma(_570, _570, _568 * _568)));
            bool _586 = fma(_540 * inversesqrt(_554), fp_c10_1._m0[558].z, (_538 * inversesqrt(_554)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _588 = _568 * _584;
            float _590 = _570 * _584;
            float _592 = _576 * _584;
            float _594 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_538, fma(_556, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_540 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_556 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_538, fma(_556, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_540 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_556 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _596 = max(fma(_266, _592, fma(_264, _590, _262 * _588)), fp_c1_1._m0[0].w);
            float _598 = max(_578, fp_c1_1._m0[0].w);
            float _600 = clamp(fma(_562 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_562 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _602 = max(fma(_592, _214, fma(_590, _212, _588 * _210)), fp_c1_1._m0[0].w) * max(fma(_592, _214, fma(_590, _212, _588 * _210)), fp_c1_1._m0[0].w);
            float _604 = fma(_596, fp_c1_1._m0[1].z, -6.9831600189208984375);
            float _606 = _604;
            if (_586)
            {
                _606 = fma(_594, -_594, fp_c1_1._m0[1].x) * fma(_594, -_594, fp_c1_1._m0[1].x);
            }
            float _608 = _606;
            if (!_586)
            {
                _608 = 1.0;
            }
            float _610 = exp2(_596 * _604);
            float _612 = (_382 * (1.0 / (_374 + fma(_374, -_598, _598)))) * ((_372 * (1.0 / max(fma(_372 * _372, _602, -_602) + 1.0, fp_c1_1._m0[0].w))) * (_372 * (1.0 / max(fma(_372 * _372, _602, -_602) + 1.0, fp_c1_1._m0[0].w))));
            float _614 = clamp(_578 + (-0.0), 0.0, 1.0) * (min(fma(_600, -_600, fp_c1_1._m0[1].x) * fma(_600, -_600, fp_c1_1._m0[1].x), _608) * (exp2(log2(clamp(fma(_580, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_566 * _582, -fp_c10_1._m0[558].z, (_560 * _582) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _616 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_362, fp_c10_1._m0[562].z, fma(_532, fp_c10_1._m0[562].y, _366 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _534, 0.5, 0.5), (-fma((fma(_362, fp_c10_1._m0[563].z, fma(_532, fp_c10_1._m0[563].y, _366 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _534, 0.5, 0.5)) + 1.0)).z > fma((fma(_362, fp_c10_1._m0[564].z, fma(_532, fp_c10_1._m0[564].y, _366 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _534, 0.5, 0.5)) || (_562 <= 0.0));
            _424 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _614) * fma(_280, fp_c1_1._m0[2].x, ((fma(_610, -_292, _610) + _292) * _612) * 0.079577468335628509521484375), _616, _436);
            _426 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _614) * fma(_276, fp_c1_1._m0[2].x, ((fma(_610, -_294, _610) + _294) * _612) * 0.079577468335628509521484375), _616, _438);
            _428 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _614) * fma(_278, fp_c1_1._m0[2].x, ((fma(_610, -_290, _610) + _290) * _612) * 0.079577468335628509521484375), _616, _440);
        }
    }
    float _618 = _366 + (-fp_c3_1._m0[11].w);
    float _620 = _86.y;
    float _622 = _362 + (-fp_c3_1._m0[13].w);
    float _624 = clamp(fma(_214, -fp_c5_1._m0[23].z, fma(_212, -fp_c5_1._m0[23].y, _210 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _626 = _620 + (-fp_c3_1._m0[12].w);
    float _628 = fma(_622, _622, fma(_626, _626, _618 * _618));
    float _630 = clamp(fma(fma(_362, fp_c5_1._m0[14].z, fma(_620, fp_c5_1._m0[14].y, _366 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _632 = fma(_234, fp_c6_1._m0[11].x, fma(_248, _424, _286 * (((_624 * fp_c5_1._m0[5].x) * fma((fma(_408, -_292, _408) + _292) * _410, fp_c1_1._m0[1].w, _280 * 0.3183098733425140380859375)) * _328))) + _238;
    float _634 = clamp(fma(_248 * _286, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _636 = fma(_236, fp_c6_1._m0[11].x, fma(_248, _426, _286 * (((_624 * fp_c5_1._m0[5].y) * fma((fma(_408, -_294, _408) + _294) * _410, fp_c1_1._m0[1].w, _276 * 0.3183098733425140380859375)) * _328))) + _242;
    float _638 = exp2(log2(clamp(sqrt(_628) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_622 * inversesqrt(_628), fp_c5_1._m0[23].z, fma(_626 * inversesqrt(_628), fp_c5_1._m0[23].y, (_618 * inversesqrt(_628)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _640 = fma(_240, fp_c6_1._m0[11].x, fma(_248, _428, _286 * (((_624 * fp_c5_1._m0[5].z) * fma((fma(_408, -_290, _408) + _290) * _410, fp_c1_1._m0[1].w, _278 * 0.3183098733425140380859375)) * _328))) + _244;
    float _642 = fma((-_632) + fp_c5_1._m0[13].x, _630, _632);
    float _644 = fma((-_640) + fp_c5_1._m0[13].z, _630, _640);
    float _646 = fma((-_636) + fp_c5_1._m0[13].y, _630, _636);
    float _648 = clamp((-exp2((clamp(fma(sqrt(_628), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _89.x = fma((-_642) + fma(fma((_638 * fp_c7_1._m0[55].x) * _634, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _648, _642);
    _89.y = fma((-_646) + fma(fma((_638 * fp_c7_1._m0[55].y) * _634, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _648, _646);
    _89.z = fma((-_644) + fma(fma((_638 * fp_c7_1._m0[55].z) * _634, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _648, _644);
    _89.w = 1.0;
}


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
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_18;
layout(binding = 4) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 5) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 6) uniform sampler2D fp_tex_tcb_26;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2DArray fp_tex_tcb_42;
layout(binding = 12) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _77;
layout(location = 1) in vec4 _79;
layout(location = 2) in vec4 _81;
layout(location = 5) in vec4 _83;
layout(location = 6) in vec4 _85;
layout(location = 3) in vec4 _87;
layout(location = 4) in vec4 _89;
layout(location = 0) out vec4 _92;
uint _6[12];

void main()
{
    bool _1033 = false;
    float _99 = _77.x;
    float _101 = _77.y;
    vec2 _105 = texture(fp_tex_tcb_E, vec2(_99, _101)).xy;
    float _107 = _105.x;
    float _109 = _105.y;
    vec3 _113 = texture(fp_tex_tcb_A, vec2(_99, _101)).xyz;
    float _115 = _113.x;
    float _117 = _113.y;
    float _119 = _113.z;
    float _121 = _79.x;
    float _123 = _79.y;
    float _125 = _79.z;
    float _127 = _81.z;
    float _129 = _81.x;
    float _131 = _81.y;
    int _134 = floatBitsToInt(fp_c6_1._m0[25].w) + (-1);
    float _136 = _81.w;
    float _138 = inversesqrt(fma(_125, _125, fma(_123, _123, _121 * _121)));
    float _140 = _121 * _138;
    float _142 = _123 * _138;
    float _144 = _125 * _138;
    float _146 = fma(fp_c7_1._m0[20].x + (-fp_c7_1._m0[20].y), clamp(_142 + (-0.0), 0.0, 1.0), fp_c7_1._m0[20].y);
    float _148 = (-texture(fp_tex_tcb_26, vec2(_99 + (-fp_c6_1._m0[26].w), _101 + (-fp_c6_1._m0[26].w))).x) + texture(fp_tex_tcb_26, vec2(_99 + fp_c6_1._m0[26].w, _101 + fp_c6_1._m0[26].w)).x;
    float _150 = sqrt(clamp((-fma(_107, _107, _109 * _109)) + 1.0, 0.0, 1.0));
    float _152 = fma(_129 * _148, fp_c6_1._m0[27].x, _140);
    float _154 = min((texture(fp_tex_tcb_26, vec2(_99, _101)).x + fp_c6_1._m0[25].z) + (-1.0), fp_c1_1._m0[0].x) + fp_c7_1._m0[21].w;
    float _156 = fma(_127 * _148, fp_c6_1._m0[27].x, _144);
    float _158 = _154 * float((-abs(_134)) + 1);
    float _160 = _154 * float(max(0, (-_134)));
    float _162 = fma(_144, _150, fma(_107, _127, _109 * (fma(_140, _131, -(_142 * _129)) * _136)));
    float _164 = 1.0 / _83.w;
    float _166 = fma(_140, _150, fma(_107, _129, _109 * (fma(_142, _127, -(_144 * _131)) * _136)));
    float _168 = fma(_142, _150, fma(_107, _131, _109 * (fma(_144, _129, -(_140 * _127)) * _136)));
    float _170 = fma(_131 * _148, fp_c6_1._m0[27].x, _142);
    float _172 = _154 * float(max(0, _134));
    float _174 = max(_172, max(_158, _160));
    float _176 = inversesqrt(fma(_156, _156, fma(_170, _170, _152 * _152)));
    float _178 = _174 + (-fp_c7_1._m0[21].w);
    float _180 = inversesqrt(fma(_162, _162, fma(_168, _168, _166 * _166)));
    float _182 = clamp(_178 + (-0.0), 0.0, 1.0);
    float _184 = _170 * _176;
    float _186 = clamp(((_160 + (-_174)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _188 = _152 * _176;
    float _190 = clamp(((_158 + (-_174)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    float _192 = _166 * _180;
    float _194 = _156 * _176;
    float _196 = _168 * _180;
    float _198 = _162 * _180;
    float _200 = min(_182 * 1000.0, 1.0);
    float _202 = clamp(((_172 + (-_174)) + 9.9999997473787516355514526367188e-05) * 100000000.0, 0.0, 1.0);
    bool _206 = _200 > 0.5;
    float _208 = fma(_202, fp_c8_1._m0[17].y, fma(_186, fp_c8_1._m0[3].y, _190 * fp_c8_1._m0[10].y));
    float _210 = fma(_202, fp_c8_1._m0[17].z, fma(_186, fp_c8_1._m0[3].z, _190 * fp_c8_1._m0[10].z));
    float _212 = fma(_202, fp_c8_1._m0[17].x, fma(_186, fp_c8_1._m0[3].x, _190 * fp_c8_1._m0[10].x));
    float _214 = fma(_202, fp_c8_1._m0[18].x, fma(_186, fp_c8_1._m0[4].x, _190 * fp_c8_1._m0[11].x));
    float _216 = fma(_202, fp_c8_1._m0[18].z, fma(_186, fp_c8_1._m0[4].z, _190 * fp_c8_1._m0[11].z));
    float _218 = fma(_202, fp_c8_1._m0[18].y, fma(_186, fp_c8_1._m0[4].y, _190 * fp_c8_1._m0[11].y));
    float _220 = _192;
    float _222 = _196;
    float _224 = _198;
    float _226 = _115;
    float _228 = _117;
    float _230 = _119;
    float _232 = _208;
    float _234 = _212;
    float _236 = _210;
    float _238 = _200;
    float _240 = 0.0;
    float _242 = 0.0;
    float _244 = 0.0;
    float _266;
    float _268;
    float _270;
    float _272;
    float _274;
    float _276;
    float _278;
    float _280;
    float _282;
    float _284;
    float _286;
    float _288;
    float _290;
    float _292;
    float _294;
    float _296;
    float _298;
    float _300;
    if (_206)
    {
        float _246 = clamp(_182 * fp_c7_1._m0[45].z, 0.0, 1.0);
        float _248 = fma(fma(_214, -fp_c7_1._m0[45].y, _212), _246, _214 * fp_c7_1._m0[45].y);
        float _250 = fma(fma(_218, -fp_c7_1._m0[45].y, _208), _246, _218 * fp_c7_1._m0[45].y);
        int _252 = floatBitsToInt(fp_c7_1._m0[81].x) & 32;
        float _254 = fma(_216, -fp_c7_1._m0[45].y, _210);
        float _256 = fma(fma((-fp_c6_1._m0[82].y) + fp_c6_1._m0[100].y, fp_c6_1._m0[85].y, fp_c6_1._m0[82].y), fp_c6_1._m0[85].x, fma((-fp_c6_1._m0[82].y) + fp_c6_1._m0[100].y, fp_c6_1._m0[85].y, fp_c6_1._m0[82].y));
        float _258 = fma(fma((-fp_c6_1._m0[82].x) + fp_c6_1._m0[100].x, fp_c6_1._m0[85].y, fp_c6_1._m0[82].x), fp_c6_1._m0[85].x, fma((-fp_c6_1._m0[82].x) + fp_c6_1._m0[100].x, fp_c6_1._m0[85].y, fp_c6_1._m0[82].x));
        float _260 = float(uint(_252) > 0u);
        float _262 = fma(fma((-fp_c6_1._m0[82].z) + fp_c6_1._m0[100].z, fp_c6_1._m0[85].y, fp_c6_1._m0[82].z), fp_c6_1._m0[85].x, fma((-fp_c6_1._m0[82].z) + fp_c6_1._m0[100].z, fp_c6_1._m0[85].y, fp_c6_1._m0[82].z));
        float _264 = fma(_254, _246, _216 * fp_c7_1._m0[45].y);
        _266 = fp_c7_1._m0[18].w;
        _220 = fma(_146, (-_192) + _188, _192);
        _268 = 0.0;
        _222 = fma(_146, (-_196) + _184, _196);
        _270 = 0.0;
        _224 = fma(_146, (-_198) + _194, _198);
        _272 = _254;
        _274 = 0.0;
        _276 = 0.0;
        _226 = _248;
        _278 = 0.0;
        _228 = _250;
        _230 = _264;
        _280 = fma(float(uint(_252) > 0u), fp_c6_1._m0[86].y, fp_c6_1._m0[44].y + 3.0);
        _282 = fma(((fp_c6_1._m0[44].x + fp_c6_1._m0[86].x) + 3.0) + (-fp_c6_1._m0[44].x), float(uint(_252) > 0u), fp_c6_1._m0[44].x);
        _284 = fma((-_262) + fma(fma((-fp_c6_1._m0[83].z) + fp_c6_1._m0[100].z, fp_c6_1._m0[85].y, fp_c6_1._m0[83].z), fp_c6_1._m0[85].x, fma((-fp_c6_1._m0[83].z) + fp_c6_1._m0[100].z, fp_c6_1._m0[85].y, fp_c6_1._m0[83].z)), _260, _262);
        _286 = 0.0;
        _288 = fma((-_258) + fma(fma((-fp_c6_1._m0[83].x) + fp_c6_1._m0[100].x, fp_c6_1._m0[85].y, fp_c6_1._m0[83].x), fp_c6_1._m0[85].x, fma((-fp_c6_1._m0[83].x) + fp_c6_1._m0[100].x, fp_c6_1._m0[85].y, fp_c6_1._m0[83].x)), _260, _258);
        _290 = fma((-_256) + fma(fma((-fp_c6_1._m0[83].y) + fp_c6_1._m0[100].y, fp_c6_1._m0[85].y, fp_c6_1._m0[83].y), fp_c6_1._m0[85].x, fma((-fp_c6_1._m0[83].y) + fp_c6_1._m0[100].y, fp_c6_1._m0[85].y, fp_c6_1._m0[83].y)), _260, _256);
        _292 = 1.0;
        _294 = _248 * fp_c7_1._m0[18].z;
        _296 = _250 * fp_c7_1._m0[18].z;
        _298 = _264 * fp_c7_1._m0[18].z;
        _300 = 1.0 + (-fp_c6_1._m0[86].w);
    }
    else
    {
        float _302 = texture(fp_tex_tcb_1A, vec2(_99, _101)).x;
        float _304 = fp_c6_1._m0[44].y + 3.0;
        int _306 = floatBitsToInt(fp_c7_1._m0[81].x) & 32;
        float _308 = float(uint(_306) > 0u);
        float _310 = fma(fma(fp_c6_1._m0[100].x + (-fp_c6_1._m0[82].x), fp_c6_1._m0[85].y, fp_c6_1._m0[82].x), fp_c6_1._m0[85].x, fma(fp_c6_1._m0[100].x + (-fp_c6_1._m0[82].x), fp_c6_1._m0[85].y, fp_c6_1._m0[82].x));
        float _312 = _119 * fp_c6_1._m0[19].z;
        float _314 = fma(fma(fp_c6_1._m0[100].z + (-fp_c6_1._m0[82].z), fp_c6_1._m0[85].y, fp_c6_1._m0[82].z), fp_c6_1._m0[85].x, fma(fp_c6_1._m0[100].z + (-fp_c6_1._m0[82].z), fp_c6_1._m0[85].y, fp_c6_1._m0[82].z));
        float _316 = float(uint(_306) > 0u);
        float _318 = exp2(log2(abs(fp_c6_1._m0[83].z)) * fp_c6_1._m0[85].w);
        float _320 = fma(fma(fp_c6_1._m0[100].y + (-fp_c6_1._m0[82].y), fp_c6_1._m0[85].y, fp_c6_1._m0[82].y), fp_c6_1._m0[85].x, fma(fp_c6_1._m0[100].y + (-fp_c6_1._m0[82].y), fp_c6_1._m0[85].y, fp_c6_1._m0[82].y));
        float _322 = _115 * fp_c6_1._m0[19].x;
        float _324 = fma(fma(fp_c6_1._m0[100].y + (-fp_c6_1._m0[83].y), fp_c6_1._m0[85].y, fp_c6_1._m0[83].y), fp_c6_1._m0[85].x, fma(fp_c6_1._m0[100].y + (-fp_c6_1._m0[83].y), fp_c6_1._m0[85].y, fp_c6_1._m0[83].y)) * _302;
        float _326 = _117 * fp_c6_1._m0[19].y;
        float _328 = (-_326) + (_302 * exp2(log2(abs(fp_c6_1._m0[83].y)) * fp_c6_1._m0[85].w));
        _266 = max(texture(fp_tex_tcb_10, vec2(_99, _101)).x, fp_c1_1._m0[0].y);
        _268 = _318;
        _270 = _312;
        _272 = _324;
        _274 = _304;
        _276 = _328;
        _278 = fp_c6_1._m0[9].x;
        _280 = fma((-_304) + (_302 * (_304 + fp_c6_1._m0[86].y)), float(uint(_306) > 0u), _304);
        _282 = fma((((fp_c6_1._m0[44].x + fp_c6_1._m0[86].x) + 3.0) * _302) + (-fp_c6_1._m0[44].x), float(uint(_306) > 0u), fp_c6_1._m0[44].x);
        _284 = fma((-_314) + (fma(fma(fp_c6_1._m0[100].z + (-fp_c6_1._m0[83].z), fp_c6_1._m0[85].y, fp_c6_1._m0[83].z), fp_c6_1._m0[85].x, fma(fp_c6_1._m0[100].z + (-fp_c6_1._m0[83].z), fp_c6_1._m0[85].y, fp_c6_1._m0[83].z)) * _302), _308, _314);
        _286 = _302;
        _288 = fma((-_310) + (fma(fma(fp_c6_1._m0[100].x + (-fp_c6_1._m0[83].x), fp_c6_1._m0[85].y, fp_c6_1._m0[83].x), fp_c6_1._m0[85].x, fma(fp_c6_1._m0[100].x + (-fp_c6_1._m0[83].x), fp_c6_1._m0[85].y, fp_c6_1._m0[83].x)) * _302), _308, _310);
        _290 = fma((-_320) + _324, _308, _320);
        _292 = (-texture(fp_tex_tcb_1C, vec2(_99, _101)).x) + 1.0;
        _232 = fma(_328, _316, _326);
        _234 = fma((-_322) + (_302 * exp2(log2(abs(fp_c6_1._m0[83].x)) * fp_c6_1._m0[85].w)), _316, _322);
        _236 = fma((-_312) + (_302 * _318), _316, _312);
        _294 = 0.0;
        _296 = 0.0;
        _298 = 0.0;
        _300 = 1.0 + (-fp_c6_1._m0[86].w);
    }
    bool _330 = _200 <= 0.5;
    vec2 _332 = texture(fp_tex_tcb_2A, vec2(fma(_83.x * _164, 0.5, 0.5), fma(_83.y * _164, -0.5, 0.5))).xy;
    float _334 = _268;
    float _336 = _270;
    float _338 = _272;
    float _340 = _274;
    float _342 = _276;
    if (_330)
    {
        _334 = _266 + (-0.2980000078678131103515625);
    }
    float _344 = _334;
    if (_330)
    {
        _336 = _220 * fp_c3_1._m0[1].x;
    }
    float _346 = _336;
    if (_330)
    {
        _238 = _220 * fp_c3_1._m0[0].x;
    }
    float _348 = _238;
    if (_330)
    {
        _344 = clamp(_334 * 7.042253971099853515625, 0.0, 1.0);
    }
    if (_330)
    {
        _346 = fma(_222, fp_c3_1._m0[1].y, _336);
    }
    float _350 = 0.0;
    float _352 = _346;
    if (_330)
    {
        _350 = ceil(_344);
    }
    if (_330)
    {
        _338 = fma(_222, fp_c3_1._m0[0].y, _238);
    }
    float _354 = 1.0 / (_85.z * gl_FragCoord.w);
    float _356 = _338;
    if (_330)
    {
        _352 = fma(_224, fp_c3_1._m0[1].z, _346);
    }
    float _358 = _352;
    if (_330)
    {
        _356 = fma(_224, fp_c3_1._m0[0].z, _338);
    }
    float _360 = 0.0;
    float _362 = _356;
    if (_330)
    {
        _360 = fma(_352, 0.5, 0.5);
    }
    float _364 = _360;
    if (_330)
    {
        _340 = fma(_356, 0.5, 0.5);
    }
    if (_330)
    {
        _358 = uintBitsToFloat(clamp(uint(max(roundEven(_350), 0.0)), 0u, 65535u));
    }
    if (_330)
    {
        _364 = (-_360) + 1.0;
    }
    if (_330)
    {
        vec3 _366 = textureLod(fp_tex_tcb_42, vec3(_340, _364, float(floatBitsToInt(_358))), 0.0).xyz;
        _348 = _366.x;
        _362 = _366.y;
        _342 = _366.z;
    }
    float _368 = clamp(_87.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _370 = (-_332.y) + 1.0;
    float _372 = clamp(texture(fp_tex_tcb_18, vec2(_99, _101)).x + (-0.0), 0.0, 1.0);
    float _374 = _370 * _368;
    float _376 = clamp((-fma(max((-_332.x) + 1.0, _370), _368, fma(texture(fp_tex_tcb_28, vec2((_85.x * gl_FragCoord.w) * _354, (_85.y * gl_FragCoord.w) * _354)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _378 = 1;
    if (_330)
    {
        vec3 _380 = textureLod(fp_tex_tcb_42, vec3(_340, _364, float(int(clamp(uint(max(roundEven(floor(_344)), 0.0)), 0u, 65535u)))), 0.0).xyz;
        float _382 = _380.x;
        float _384 = _380.y;
        float _386 = _380.z;
        float _388 = _87.x;
        float _390 = _87.z;
        int _392 = max(0, min(int(trunc((_390 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
        float _394 = _344 + (-floor(_344));
        uint _397 = uint(int(uint((((int(uint(_392) >> uint(16)) * 20) << 16) + (((_392 & 65535) * 20) + max(0, min(int(trunc((_388 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
        float _399 = fp_c10_1._m0[int(uint(int(_397)) >> uint(2))][int(_397) & 3];
        float _401 = 0.0;
        float _403 = 0.0;
        float _405 = 0.0;
        float _407 = 0.0;
        float _409 = 0.0;
        float _411 = 0.0;
        if (floatBitsToInt(_399) != (-1))
        {
            int _413 = floatBitsToInt(_399) & 255;
            int _415 = _413;
            if (!(uint(_413) >= 30u))
            {
                int _417 = _413 << 4;
                float _419 = _87.y;
                uint _421 = uint(int(uint(_417 + 7360) >> uint(2)));
                int _423 = int(_421) + 1;
                uint _425 = uint(int(uint(_417 + 7368) >> uint(2)));
                uint _427 = uint(int(uint(_417 + 6880) >> uint(2)));
                int _429 = int(_427) + 1;
                uint _431 = uint(int(uint(_417 + 8320) >> uint(2)));
                uint _433 = uint(int(uint(_417 + 6408) >> uint(2)));
                float _435 = (-_388) + fp_c10_1._m0[int(uint(int(_421)) >> uint(2))][int(_421) & 3];
                float _437 = fp_c10_1._m0[int(uint(_423) >> uint(2))][_423 & 3] + (-_419);
                float _439 = (-_390) + fp_c10_1._m0[int(uint(int(_425)) >> uint(2))][int(_425) & 3];
                bool _441 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_431)) >> uint(2))][int(_431) & 3]) != 0;
                float _443 = fma(_439, _439, fma(_437, _437, _435 * _435));
                uint _445 = uint(int(uint(_417 + 6400) >> uint(2)));
                int _447 = int(_445) + 1;
                float _449 = 1.0 / (fp_c6_1._m0[37].w + 1.0);
                float _451 = _435 * inversesqrt(_443);
                float _453 = _437 * inversesqrt(_443);
                float _455 = _439 * inversesqrt(_443);
                float _457 = fp_c10_1._m0[int(uint(_429) >> uint(2))][_429 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_427)) >> uint(2))][int(_427) & 3], -sqrt(_443), fp_c1_1._m0[0].z), 0.0, 1.0));
                float _459 = fma(_455, _224, fma(_453, _222, _451 * _220));
                float _461 = _457;
                if (!_441)
                {
                    _461 = 1.0;
                }
                float _463 = clamp(_459 + (-0.0), 0.0, 1.0);
                float _465 = clamp(_459 + fp_c6_1._m0[37].w, 0.0, 1.0) * _449;
                float _467 = _461;
                if (_441)
                {
                    uint _469 = uint(int(uint(_417 + 7840) >> uint(2)));
                    int _471 = int(_469) + 1;
                    uint _473 = uint(int(uint(_417 + 6888) >> uint(2)));
                    float _475 = fp_c10_1._m0[int(uint(int(_473)) >> uint(2))][int(_473) & 3];
                    int _477 = int(_473) + 1;
                    uint _479 = uint(int(uint(_417 + 7848) >> uint(2)));
                    _467 = exp2(log2(clamp((fma(_455, -fp_c10_1._m0[int(uint(int(_479)) >> uint(2))][int(_479) & 3], fma(_453, -fp_c10_1._m0[int(uint(_471) >> uint(2))][_471 & 3], _451 * (-fp_c10_1._m0[int(uint(int(_469)) >> uint(2))][int(_469) & 3]))) + (-_475)) * (1.0 / ((-_475) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[int(uint(_477) >> uint(2))][_477 & 3]);
                }
                float _481 = exp2(_457) * _467;
                int _483 = int(uint(floatBitsToInt(_399)) >> uint(8)) & 255;
                float _485 = (((_465 * clamp(_463 + fp_c6_1._m0[38].x, 0.0, 1.0)) * _481) * fp_c10_1._m0[int(uint(int(_445)) >> uint(2))][int(_445) & 3]) * 0.12890754640102386474609375;
                float _487 = (((_465 * clamp(_463 + fp_c6_1._m0[38].y, 0.0, 1.0)) * _481) * fp_c10_1._m0[int(uint(_447) >> uint(2))][_447 & 3]) * 0.13431085646152496337890625;
                float _489 = (((_465 * clamp(_463 + fp_c6_1._m0[38].z, 0.0, 1.0)) * _481) * fp_c10_1._m0[int(uint(int(_433)) >> uint(2))][int(_433) & 3]) * 0.121651671826839447021484375;
                _415 = _483;
                _401 = _485;
                _403 = _489;
                _405 = _487;
                if (!(uint(_483) >= 30u))
                {
                    int _491 = _483 << 4;
                    uint _493 = uint(int(uint(_491 + 7360) >> uint(2)));
                    int _495 = int(_493) + 1;
                    uint _497 = uint(int(uint(_491 + 7368) >> uint(2)));
                    uint _499 = uint(int(uint(_491 + 6880) >> uint(2)));
                    int _501 = int(_499) + 1;
                    uint _503 = uint(int(uint(_491 + 8320) >> uint(2)));
                    float _505 = fp_c10_1._m0[int(uint(int(_503)) >> uint(2))][int(_503) & 3];
                    uint _507 = uint(int(uint(_491 + 6408) >> uint(2)));
                    float _509 = (-_388) + fp_c10_1._m0[int(uint(int(_493)) >> uint(2))][int(_493) & 3];
                    float _511 = (-_419) + fp_c10_1._m0[int(uint(_495) >> uint(2))][_495 & 3];
                    float _513 = (-_390) + fp_c10_1._m0[int(uint(int(_497)) >> uint(2))][int(_497) & 3];
                    bool _515 = floatBitsToInt(_505) != 0;
                    float _517 = _505;
                    if (!_515)
                    {
                        _517 = 1.0;
                    }
                    float _519 = fma(_513, _513, fma(_511, _511, _509 * _509));
                    uint _521 = uint(int(uint(_491 + 6400) >> uint(2)));
                    int _523 = int(_521) + 1;
                    float _525 = _509 * inversesqrt(_519);
                    float _527 = _511 * inversesqrt(_519);
                    float _529 = _513 * inversesqrt(_519);
                    float _531 = fma(_529, _224, fma(_527, _222, _525 * _220));
                    float _533 = clamp(_531 + (-0.0), 0.0, 1.0);
                    float _535 = _517;
                    if (_515)
                    {
                        uint _537 = uint(int(uint(_491 + 7840) >> uint(2)));
                        int _539 = int(_537) + 1;
                        uint _541 = uint(int(uint(_491 + 6888) >> uint(2)));
                        float _543 = fp_c10_1._m0[int(uint(int(_541)) >> uint(2))][int(_541) & 3];
                        int _545 = int(_541) + 1;
                        uint _547 = uint(int(uint(_491 + 7848) >> uint(2)));
                        _535 = exp2(log2(clamp((fma(_529, -fp_c10_1._m0[int(uint(int(_547)) >> uint(2))][int(_547) & 3], fma(_527, -fp_c10_1._m0[int(uint(_539) >> uint(2))][_539 & 3], _525 * (-fp_c10_1._m0[int(uint(int(_537)) >> uint(2))][int(_537) & 3]))) + (-_543)) * (1.0 / ((-_543) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[int(uint(_545) >> uint(2))][_545 & 3]);
                    }
                    float _549 = _449 * clamp(_531 + fp_c6_1._m0[37].w, 0.0, 1.0);
                    float _551 = exp2(fp_c10_1._m0[int(uint(_501) >> uint(2))][_501 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_499)) >> uint(2))][int(_499) & 3], -sqrt(_519), fp_c1_1._m0[0].z), 0.0, 1.0))) * _535;
                    int _553 = int(uint(floatBitsToInt(_399)) >> uint(16)) & 255;
                    float _555 = fma(((_549 * clamp(_533 + fp_c6_1._m0[38].x, 0.0, 1.0)) * _551) * fp_c10_1._m0[int(uint(int(_521)) >> uint(2))][int(_521) & 3], fp_c1_1._m0[0].w, _485);
                    float _557 = fma(((_549 * clamp(_533 + fp_c6_1._m0[38].y, 0.0, 1.0)) * _551) * fp_c10_1._m0[int(uint(_523) >> uint(2))][_523 & 3], fp_c1_1._m0[1].x, _487);
                    float _559 = fma(((_549 * clamp(_533 + fp_c6_1._m0[38].z, 0.0, 1.0)) * _551) * fp_c10_1._m0[int(uint(int(_507)) >> uint(2))][int(_507) & 3], fp_c1_1._m0[1].y, _489);
                    _415 = _553;
                    _401 = _555;
                    _403 = _559;
                    _405 = _557;
                    if (!(uint(_553) >= 30u))
                    {
                        int _561 = _553 << 4;
                        uint _563 = uint(int(uint(_561 + 7360) >> uint(2)));
                        int _565 = int(_563) + 1;
                        uint _567 = uint(int(uint(_561 + 7368) >> uint(2)));
                        uint _569 = uint(int(uint(_561 + 6880) >> uint(2)));
                        int _571 = int(_569) + 1;
                        uint _573 = uint(int(uint(_561 + 8320) >> uint(2)));
                        float _575 = fp_c10_1._m0[int(uint(int(_573)) >> uint(2))][int(_573) & 3];
                        uint _577 = uint(int(uint(_561 + 6408) >> uint(2)));
                        float _579 = (-_388) + fp_c10_1._m0[int(uint(int(_563)) >> uint(2))][int(_563) & 3];
                        float _581 = (-_419) + fp_c10_1._m0[int(uint(_565) >> uint(2))][_565 & 3];
                        float _583 = (-_390) + fp_c10_1._m0[int(uint(int(_567)) >> uint(2))][int(_567) & 3];
                        bool _585 = floatBitsToInt(_575) != 0;
                        float _587 = _575;
                        if (!_585)
                        {
                            _587 = 1.0;
                        }
                        float _589 = fma(_583, _583, fma(_581, _581, _579 * _579));
                        uint _591 = uint(int(uint(_561 + 6400) >> uint(2)));
                        int _593 = int(_591) + 1;
                        float _595 = _579 * inversesqrt(_589);
                        float _597 = _581 * inversesqrt(_589);
                        float _599 = _583 * inversesqrt(_589);
                        float _601 = fma(_599, _224, fma(_597, _222, _595 * _220));
                        float _603 = clamp(_601 + (-0.0), 0.0, 1.0);
                        float _605 = _587;
                        if (_585)
                        {
                            uint _607 = uint(int(uint(_561 + 7840) >> uint(2)));
                            int _609 = int(_607) + 1;
                            uint _611 = uint(int(uint(_561 + 6888) >> uint(2)));
                            float _613 = fp_c10_1._m0[int(uint(int(_611)) >> uint(2))][int(_611) & 3];
                            int _615 = int(_611) + 1;
                            uint _617 = uint(int(uint(_561 + 7848) >> uint(2)));
                            _605 = exp2(log2(clamp((fma(_599, -fp_c10_1._m0[int(uint(int(_617)) >> uint(2))][int(_617) & 3], fma(_597, -fp_c10_1._m0[int(uint(_609) >> uint(2))][_609 & 3], _595 * (-fp_c10_1._m0[int(uint(int(_607)) >> uint(2))][int(_607) & 3]))) + (-_613)) * (1.0 / ((-_613) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[int(uint(_615) >> uint(2))][_615 & 3]);
                        }
                        float _619 = _449 * clamp(_601 + fp_c6_1._m0[37].w, 0.0, 1.0);
                        float _621 = exp2(fp_c10_1._m0[int(uint(_571) >> uint(2))][_571 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_569)) >> uint(2))][int(_569) & 3], -sqrt(_589), fp_c1_1._m0[0].z), 0.0, 1.0))) * _605;
                        uint _623 = bitfieldExtract(floatBitsToUint(_399), int(24u), int(8u));
                        float _625 = fma(((_619 * clamp(_603 + fp_c6_1._m0[38].x, 0.0, 1.0)) * _621) * fp_c10_1._m0[int(uint(int(_591)) >> uint(2))][int(_591) & 3], fp_c1_1._m0[0].w, _555);
                        float _627 = fma(((_619 * clamp(_603 + fp_c6_1._m0[38].y, 0.0, 1.0)) * _621) * fp_c10_1._m0[int(uint(_593) >> uint(2))][_593 & 3], fp_c1_1._m0[1].x, _557);
                        float _629 = fma(((_619 * clamp(_603 + fp_c6_1._m0[38].z, 0.0, 1.0)) * _621) * fp_c10_1._m0[int(uint(int(_577)) >> uint(2))][int(_577) & 3], fp_c1_1._m0[1].y, _559);
                        _415 = int(_623);
                        _401 = _625;
                        _403 = _629;
                        _405 = _627;
                        if (!(_623 >= 30u))
                        {
                            int _631 = int(_623) << 4;
                            uint _633 = uint(int(uint(_631 + 7360) >> uint(2)));
                            int _635 = int(_633) + 1;
                            uint _637 = uint(int(uint(_631 + 7368) >> uint(2)));
                            uint _639 = uint(int(uint(_631 + 6880) >> uint(2)));
                            int _641 = int(_639) + 1;
                            uint _643 = uint(int(uint(_631 + 8320) >> uint(2)));
                            float _645 = fp_c10_1._m0[int(uint(int(_643)) >> uint(2))][int(_643) & 3];
                            uint _647 = uint(int(uint(_631 + 6408) >> uint(2)));
                            float _649 = (-_388) + fp_c10_1._m0[int(uint(int(_633)) >> uint(2))][int(_633) & 3];
                            float _651 = (-_419) + fp_c10_1._m0[int(uint(_635) >> uint(2))][_635 & 3];
                            float _653 = (-_390) + fp_c10_1._m0[int(uint(int(_637)) >> uint(2))][int(_637) & 3];
                            bool _655 = floatBitsToInt(_645) != 0;
                            float _657 = _645;
                            if (!_655)
                            {
                                _657 = 1.0;
                            }
                            float _659 = fma(_653, _653, fma(_651, _651, _649 * _649));
                            uint _661 = uint(int(uint(_631 + 6400) >> uint(2)));
                            int _663 = int(_661) + 1;
                            float _665 = _649 * inversesqrt(_659);
                            float _667 = _651 * inversesqrt(_659);
                            float _669 = _653 * inversesqrt(_659);
                            float _671 = fma(_669, _224, fma(_667, _222, _665 * _220));
                            float _673 = clamp(_671 + (-0.0), 0.0, 1.0);
                            float _675 = _449 * clamp(_671 + fp_c6_1._m0[37].w, 0.0, 1.0);
                            float _677 = _657;
                            if (_655)
                            {
                                uint _679 = uint(int(uint(_631 + 7840) >> uint(2)));
                                int _681 = int(_679) + 1;
                                uint _683 = uint(int(uint(_631 + 6888) >> uint(2)));
                                float _685 = fp_c10_1._m0[int(uint(int(_683)) >> uint(2))][int(_683) & 3];
                                int _687 = int(_683) + 1;
                                uint _689 = uint(int(uint(_631 + 7848) >> uint(2)));
                                _677 = exp2(log2(clamp((fma(_669, -fp_c10_1._m0[int(uint(int(_689)) >> uint(2))][int(_689) & 3], fma(_667, -fp_c10_1._m0[int(uint(_681) >> uint(2))][_681 & 3], _665 * (-fp_c10_1._m0[int(uint(int(_679)) >> uint(2))][int(_679) & 3]))) + (-_685)) * (1.0 / ((-_685) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[int(uint(_687) >> uint(2))][_687 & 3]);
                            }
                            float _691 = exp2(fp_c10_1._m0[int(uint(_641) >> uint(2))][_641 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_639)) >> uint(2))][int(_639) & 3], -sqrt(_659), fp_c1_1._m0[0].z), 0.0, 1.0))) * _677;
                            _401 = fma(((_675 * clamp(_673 + fp_c6_1._m0[38].x, 0.0, 1.0)) * _691) * fp_c10_1._m0[int(uint(int(_661)) >> uint(2))][int(_661) & 3], fp_c1_1._m0[0].w, _625);
                            _403 = fma(((_675 * clamp(_673 + fp_c6_1._m0[38].z, 0.0, 1.0)) * _691) * fp_c10_1._m0[int(uint(int(_647)) >> uint(2))][int(_647) & 3], fp_c1_1._m0[1].y, _629);
                            _405 = fma(((_675 * clamp(_673 + fp_c6_1._m0[38].y, 0.0, 1.0)) * _691) * fp_c10_1._m0[int(uint(_663) >> uint(2))][_663 & 3], fp_c1_1._m0[1].x, _627);
                        }
                    }
                }
            }
            _407 = _401;
            _409 = _405;
            _411 = _403;
            if (_415 == 30)
            {
                float _693 = _87.y;
                float _695 = 1.0 / (fma(_390, fp_c10_1._m0[565].z, fma(_693, fp_c10_1._m0[565].y, _388 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
                float _697 = 1.0 / fp_c10_1._m0[561].y;
                float _699 = (-_388) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_697, fp_c10_1._m0[557].x);
                float _701 = (-_390) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_697, fp_c10_1._m0[557].z);
                float _703 = _388 + (-fp_c10_1._m0[557].x);
                float _705 = _390 + (-fp_c10_1._m0[557].z);
                float _707 = _699 * _699;
                float _709 = _703 * fp_c10_1._m0[558].z;
                float _711 = _705 * fp_c10_1._m0[558].x;
                float _713 = sqrt(fma(_701, _701, _707)) * (-fp_c10_1._m0[558].y);
                float _715 = ((-float(_711 < _709)) + float(_711 > _709)) * fp_c10_1._m0[561].y;
                float _717 = inversesqrt(fma(_701, _701, fma(_713, _713, _707)));
                float _719 = fma(_705, _705, _703 * _703);
                float _721 = _699 * _717;
                float _723 = _701 * _717;
                float _725 = fma(_723, _723, _721 * _721);
                float _727 = fma(_705, fp_c10_1._m0[558].z, _703 * fp_c10_1._m0[558].x);
                bool _729 = _727 > 0.0;
                float _731 = fma(_705 * inversesqrt(_719), fp_c10_1._m0[558].z, (_703 * inversesqrt(_719)) * fp_c10_1._m0[558].x);
                float _733 = _725;
                float _735 = _731;
                if (_729)
                {
                    _733 = sqrt(_719);
                }
                float _737 = _733;
                if (!_729)
                {
                    _737 = 1.0;
                }
                float _739 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_703, fma(_715, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_705 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_715 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_703, fma(_715, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_705 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_715 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
                bool _741 = _731 < fp_c10_1._m0[560].z;
                float _743 = clamp(fma(_727 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].z), 0.0, 1.0) * clamp(fma(_727 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].z), 0.0, 1.0);
                float _745 = fma(_723, _224, fma(_713 * _717, _222, _721 * _220));
                if (_741)
                {
                    _735 = fma(_739, -_739, fp_c1_1._m0[0].z) * fma(_739, -_739, fp_c1_1._m0[0].z);
                }
                float _747 = _735;
                if (!_741)
                {
                    _747 = 1.0;
                }
                float _749 = clamp(_745 + (-0.0), 0.0, 1.0);
                float _751 = clamp(_745 + fp_c6_1._m0[37].w, 0.0, 1.0) * (1.0 / (1.0 + fp_c6_1._m0[37].w));
                float _753 = min(fma(_743, -_743, fp_c1_1._m0[0].z) * fma(_743, -_743, fp_c1_1._m0[0].z), _747) * (exp2(log2(clamp(fma(_737, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_723 * inversesqrt(_725), -fp_c10_1._m0[558].z, (_721 * inversesqrt(_725)) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w));
                bool _755 = (texture(fp_tex_tcb_44, vec2(fma((fma(_390, fp_c10_1._m0[562].z, fma(_693, fp_c10_1._m0[562].y, _388 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _695, 0.5, 0.5), (-fma((fma(_390, fp_c10_1._m0[563].z, fma(_693, fp_c10_1._m0[563].y, _388 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _695, 0.5, 0.5)) + 1.0)).z > fma((fma(_390, fp_c10_1._m0[564].z, fma(_693, fp_c10_1._m0[564].y, _388 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _695, 0.5, 0.5)) || (_727 <= 0.0);
                float _757 = _751;
                if (_755)
                {
                    _757 = 1.0;
                }
                float _759 = _757;
                if (!_755)
                {
                    _759 = 0.0;
                }
                _407 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * ((_751 * clamp(_749 + fp_c6_1._m0[38].x, 0.0, 1.0)) * _753)) * 0.12890754640102386474609375, _759, _401);
                _409 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * ((_751 * clamp(_749 + fp_c6_1._m0[38].y, 0.0, 1.0)) * _753)) * 0.13431085646152496337890625, _759, _405);
                _411 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * ((_751 * clamp(_749 + fp_c6_1._m0[38].z, 0.0, 1.0)) * _753)) * 0.121651671826839447021484375, _759, _403);
            }
        }
        float _761 = _89.x;
        float _763 = _89.y;
        float _765 = _89.z;
        float _767 = inversesqrt(fma(_765, _765, fma(_763, _763, _761 * _761)));
        float _769 = _765 * (-_767);
        float _771 = _763 * (-_767);
        float _773 = _761 * (-_767);
        float _775 = fma(_771, -fp_c3_1._m0[1].z, -(_769 * (-fp_c3_1._m0[1].y)));
        float _777 = fma(_769, -fp_c3_1._m0[1].x, -(_773 * (-fp_c3_1._m0[1].z)));
        float _779 = fma(_773, -fp_c3_1._m0[1].y, -(_771 * (-fp_c3_1._m0[1].x)));
        float _781 = inversesqrt(fma(_779, _779, fma(_777, _777, _775 * _775)));
        float _783 = _779 * _781;
        float _785 = _775 * _781;
        float _787 = _777 * _781;
        float _789 = fma(_769, -_787, -(_771 * (-_783)));
        float _791 = fma(_773, -_783, -(_769 * (-_785)));
        float _793 = fma(_771, -_785, -(_773 * (-_787)));
        float _795 = inversesqrt(fma(_793, _793, fma(_791, _791, _789 * _789)));
        vec3 _797 = textureLod(fp_tex_tcb_42, vec3(fma(fma(_783, _224, fma(_787, _222, _785 * _220)), 0.5, 0.5), (-fma(fma(_793 * _795, _224, fma(_791 * _795, _222, (_789 * _795) * _220)), 0.5, 0.5)) + 1.0, float(2)), 0.0).xyz;
        float _799 = clamp(fma(_119, fp_c1_1._m0[1].w, fma(_117, fp_c1_1._m0[1].z, _115 * 0.373640000820159912109375)), 0.0, 1.0);
        float _801 = fma(_799, -2.0, 3.0) * (_799 * _799);
        _378 = 0;
        _240 = _372 * fma(fma((-_382) + _348, _394, _382) + _407, _801, _797.x);
        _242 = _372 * fma(fma((-_384) + _362, _394, _384) + _409, _801, _797.y);
        _244 = _372 * fma(fma((-_386) + _342, _394, _386) + _411, _801, _797.z);
    }
    float _803 = _240;
    float _805 = _242;
    float _807 = _244;
    if (_378 != 0)
    {
        float _809 = fma(_278, -_226, _226);
        float _811 = _89.x;
        float _813 = _89.y;
        float _815 = _89.z;
        float _817 = fma(_278, -_228, _228);
        float _819 = fma(_278, -_230, _230);
        float _821 = fma(_228 + (-0.039999999105930328369140625), _278, fp_c1_1._m0[2].x);
        float _823 = fma(_230 + (-0.039999999105930328369140625), _278, fp_c1_1._m0[2].x);
        float _825 = inversesqrt(fma(_815, _815, fma(_813, _813, _811 * _811)));
        float _827 = fma(_224, -fp_c5_1._m0[23].z, fma(_222, -fp_c5_1._m0[23].y, _220 * (-fp_c5_1._m0[23].x)));
        float _829 = fma(_226 + (-0.039999999105930328369140625), _278, fp_c1_1._m0[2].x);
        float _831 = clamp(_827 + (-0.0), 0.0, 1.0);
        float _833 = _811 * (-_825);
        float _835 = _813 * (-_825);
        float _837 = _815 * (-_825);
        float _839 = _831 * fp_c5_1._m0[5].x;
        float _841 = _831 * fp_c5_1._m0[5].y;
        float _843 = _831 * fp_c5_1._m0[5].z;
        float _845 = fma(_837, _224, fma(_835, _222, _833 * _220));
        float _847 = _829;
        float _849 = _821;
        float _851 = _823;
        float _871;
        float _873;
        float _875;
        float _877;
        float _879;
        float _881;
        float _883;
        float _885;
        float _887;
        float _889;
        float _891;
        float _893;
        float _895;
        float _897;
        float _899;
        float _901;
        float _903;
        float _905;
        if (_206)
        {
            float _853 = max(_845, fp_c1_1._m0[2].y);
            float _855 = fma(_837, -_224, fma(_835, -_222, _833 * (-_220)));
            float _857 = fma(_855 * _220, -2.0, -_833);
            float _859 = fma(_855 * _222, -2.0, -_835);
            float _861 = fma(_855 * _224, -2.0, -_837);
            float _863 = 1.0 / max(abs(_861), max(abs(_857), abs(_859)));
            vec2 _865 = texture(fp_tex_tcb_38, vec2(_853, (-_266) + (-0.0))).xy;
            vec3 _867 = texture(fp_tex_tcb_36, vec4(_857 * _863, _859 * _863, _861 * _863, float(12)), 0.0).xyz;
            float _869 = fma(_865.x, fp_c7_1._m0[19].x, _865.y);
            _871 = fma(_222 + (-1.0), fp_c7_1._m0[19].z, 1.0);
            _873 = _220 * fp_c7_1._m0[19].z;
            _875 = _224 * fp_c7_1._m0[19].z;
            _877 = _819;
            _879 = _853;
            _881 = 0.0;
            _883 = 0.0;
            _885 = _809;
            _847 = fp_c7_1._m0[19].x;
            _887 = 0.0;
            _849 = fp_c7_1._m0[19].x;
            _851 = fp_c7_1._m0[19].x;
            _889 = _867.x * _869;
            _891 = _817;
            _893 = _867.y * _869;
            _895 = _867.z * _869;
            _897 = 0.0;
            _899 = _843;
            _901 = _839;
            _903 = _841;
            _905 = 1.0;
        }
        else
        {
            float _907 = max(_845, fp_c1_1._m0[2].y);
            float _909 = fma(_837, -_224, fma(_835, -_222, _833 * (-_220)));
            float _911 = fma(_909 * _222, -2.0, -_835);
            float _913 = fma(_909 * _220, -2.0, -_833);
            float _915 = fma(_909 * _224, -2.0, -_837);
            float _917 = 1.0 / max(abs(_915), max(abs(_913), abs(_911)));
            vec2 _919 = texture(fp_tex_tcb_38, vec2(_907, (-_266) + (-0.0))).xy;
            float _921 = _919.x;
            float _923 = _919.y;
            vec3 _925 = texture(fp_tex_tcb_36, vec4(_913 * _917, _911 * _917, _915 * _917, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_266 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
            float _927 = _87.y;
            float _929 = fma(fma(_194, -fp_c5_1._m0[23].z, fma(_184, -fp_c5_1._m0[23].y, _188 * (-fp_c5_1._m0[23].x))), -_222, _222);
            float _931 = _927 + (-fp_c9_1._m0[32].w);
            float _933 = exp2(log2(clamp((-_845) + 1.0, 0.0, 1.0)) * _280) * _282;
            float _935 = _931;
            _875 = _224;
            _879 = _907;
            if (_927 < fp_c9_1._m0[32].w)
            {
                _935 = _931 * (-5.0);
            }
            float _937 = clamp(_827 + fp_c6_1._m0[37].w, 0.0, 1.0) * (1.0 / (fp_c6_1._m0[37].w + 1.0));
            float _939 = fma(max(0.0, (fma(fp_c5_1._m0[5].z, fp_c1_1._m0[2].w, fma(fp_c5_1._m0[5].y, fp_c1_1._m0[2].z, fp_c5_1._m0[5].x * 0.298911988735198974609375)) + (-2.0)) * 0.20000000298023223876953125), (-fp_c6_1._m0[46].x) + fp_c6_1._m0[46].y, fp_c6_1._m0[46].x);
            float _941 = max(0.0, ((-_222) + 1.2000000476837158203125) * (clamp(fma(_935, -(1.0 / fma(clamp((-_222) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].z), 0.0, 1.0) * clamp(fma(_935, -(1.0 / fma(clamp((-_222) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].z), 0.0, 1.0))) * fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w);
            _871 = _222;
            _873 = _220;
            _877 = fma(_933 * (_939 * _284), _286, _819);
            _881 = _941 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x));
            _883 = _941 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y));
            _885 = fma(_933 * (_939 * _288), _286, _809);
            _887 = _941 * fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z));
            _889 = fma(_829, _921, _923) * _925.x;
            _891 = fma(_933 * (_939 * _290), _286, _817);
            _893 = fma(_821, _921, _923) * _925.y;
            _895 = fma(_823, _921, _923) * _925.z;
            _897 = fp_c6_1._m0[17].w;
            _899 = fma(fma(_937 * clamp(_831 + fp_c6_1._m0[38].z, 0.0, 1.0), fp_c5_1._m0[5].z, -_843), _286, _843);
            _901 = fma(fma(_937 * clamp(_831 + fp_c6_1._m0[38].x, 0.0, 1.0), fp_c5_1._m0[5].x, -_839), _286, _839);
            _903 = fma(fma(_937 * clamp(_831 + fp_c6_1._m0[38].y, 0.0, 1.0), fp_c5_1._m0[5].y, -_841), _286, _841);
            _905 = clamp(fma(_929, clamp(_178 * (-7.0), 0.0, 1.0), -_929) + fp_c1_1._m0[3].x, 0.0, 1.0);
        }
        float _943 = _871 * _873;
        float _945 = _87.z;
        float _947 = _875 * _871;
        float _949 = _87.x;
        float _951 = _833 + (-fp_c5_1._m0[23].x);
        float _953 = _835 + (-fp_c5_1._m0[23].y);
        float _955 = _875 * _875;
        float _957 = _837 + (-fp_c5_1._m0[23].z);
        float _959 = fma(_873, _873, -(_871 * _871));
        float _961 = _875 * _873;
        float _963 = inversesqrt(fma(_957, _957, fma(_953, _953, _951 * _951)));
        float _965 = _951 * _963;
        float _967 = _953 * _963;
        float _969 = _957 * _963;
        int _971 = max(0, min(int(trunc((_945 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
        float _973 = fma(_266, 0.5, 0.5);
        float _975 = _266 * _266;
        float _977 = _975 * _975;
        float _979 = max(fma(_837, _969, fma(_835, _967, _833 * _965)), fp_c1_1._m0[2].y);
        float _981 = max(fma(_969, _224, fma(_967, _222, _965 * _220)), fp_c1_1._m0[2].y) * max(fma(_969, _224, fma(_967, _222, _965 * _220)), fp_c1_1._m0[2].y);
        float _983 = (_973 * 0.5) * _973;
        uint _985 = uint(int(uint((((int(uint(_971) >> uint(16)) * 20) << 16) + (((_971 & 65535) * 20) + max(0, min(int(trunc((_949 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
        float _987 = fp_c10_1._m0[int(uint(int(_985)) >> uint(2))][int(_985) & 3];
        float _989 = 1.0 / (_983 + fma(_879, -_983, _879));
        float _991 = exp2(_979 * fma(_979, fp_c1_1._m0[3].y, -6.9831600189208984375));
        float _993 = fma(max(0.0, fma(_959, fp_c5_1._m0[31].x, (fma(_875, fp_c5_1._m0[25].z, fma(_871, fp_c5_1._m0[25].y, _873 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_961, fp_c5_1._m0[28].w, fma(_955, fp_c5_1._m0[28].z, fma(_947, fp_c5_1._m0[28].y, _943 * fp_c5_1._m0[28].x))))) + _881, fma(_847, -_885, _885), _889);
        float _995 = (_989 * (1.0 / (_983 + fma(max(_827, fp_c1_1._m0[2].y), -_983, max(_827, fp_c1_1._m0[2].y))))) * ((_975 * (1.0 / max(fma(_981, _977, -_981) + 1.0, fp_c1_1._m0[2].y))) * (_975 * (1.0 / max(fma(_981, _977, -_981) + 1.0, fp_c1_1._m0[2].y))));
        float _997 = fma(max(0.0, fma(_959, fp_c5_1._m0[31].y, (fma(_875, fp_c5_1._m0[26].z, fma(_871, fp_c5_1._m0[26].y, _873 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_961, fp_c5_1._m0[29].w, fma(_955, fp_c5_1._m0[29].z, fma(_947, fp_c5_1._m0[29].y, _943 * fp_c5_1._m0[29].x))))) + _883, fma(_849, -_891, _891), _893);
        float _999 = fma(max(0.0, fma(_959, fp_c5_1._m0[31].z, (fma(_875, fp_c5_1._m0[27].z, fma(_871, fp_c5_1._m0[27].y, _873 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_961, fp_c5_1._m0[30].w, fma(_955, fp_c5_1._m0[30].z, fma(_947, fp_c5_1._m0[30].y, _943 * fp_c5_1._m0[30].x))))) + _887, fma(_851, -_877, _877), _895);
        int _1001 = floatBitsToInt(_987);
        float _1003 = _997;
        float _1005 = _993;
        float _1007 = _999;
        float _1009 = _993;
        float _1011 = _997;
        float _1013 = _999;
        if (floatBitsToInt(_987) != (-1))
        {
            float _1015 = clamp(fma(_374, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
            float _1017 = 1.0 / fp_c6_1._m0[18].x;
            float _1019 = clamp((-_897) + 1.0, 0.0, 1.0);
            float _1021 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
            int _1023 = 0;
            float _1027;
            float _1029;
            float _1031;
            int _1113;
            do
            {
                int _1025 = _1001 & 255;
                _1027 = _1005;
                _1029 = _1003;
                _1031 = _1007;
                _1033 = uint(_1025) >= 30u;
                if (_1033)
                {
                    break;
                }
                int _1035 = _1025 << 4;
                uint _1037 = uint(int(uint(_1035 + 7360) >> uint(2)));
                int _1039 = int(_1037) + 1;
                uint _1041 = uint(int(uint(_1035 + 7368) >> uint(2)));
                float _1043 = (-_949) + fp_c10_1._m0[int(uint(int(_1037)) >> uint(2))][int(_1037) & 3];
                float _1045 = (-_87.y) + fp_c10_1._m0[int(uint(_1039) >> uint(2))][_1039 & 3];
                float _1047 = (-_945) + fp_c10_1._m0[int(uint(int(_1041)) >> uint(2))][int(_1041) & 3];
                float _1049 = fma(_1047, _1047, fma(_1045, _1045, _1043 * _1043));
                float _1051 = _1043 * inversesqrt(_1049);
                float _1053 = _1045 * inversesqrt(_1049);
                float _1055 = _1047 * inversesqrt(_1049);
                float _1057 = _833 + _1051;
                float _1059 = _835 + _1053;
                float _1061 = _837 + _1055;
                float _1063 = inversesqrt(fma(_1061, _1061, fma(_1059, _1059, _1057 * _1057)));
                float _1065 = _1057 * _1063;
                float _1067 = _1059 * _1063;
                float _1069 = _1061 * _1063;
                float _1071 = fma(_1055, _224, fma(_1053, _222, _1051 * _220));
                uint _1073 = uint(int(uint(_1035 + 6880) >> uint(2)));
                int _1075 = int(_1073) + 1;
                float _1077 = max(fma(_837, _1069, fma(_835, _1067, _833 * _1065)), fp_c1_1._m0[2].y);
                float _1079 = max(fma(_1069, _224, fma(_1067, _222, _1065 * _220)), fp_c1_1._m0[2].y) * max(fma(_1069, _224, fma(_1067, _222, _1065 * _220)), fp_c1_1._m0[2].y);
                float _1081 = fp_c10_1._m0[int(uint(_1075) >> uint(2))][_1075 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_1073)) >> uint(2))][int(_1073) & 3], -sqrt(_1049), fp_c1_1._m0[0].z), 0.0, 1.0));
                float _1083 = max(_1071, fp_c1_1._m0[2].y);
                float _1085 = exp2(_1077 * fma(_1077, fp_c1_1._m0[3].y, -6.9831600189208984375));
                float _1087 = (_989 * (1.0 / (_983 + fma(_983, -_1083, _1083)))) * ((_975 * (1.0 / max(fma(_977, _1079, -_1079) + 1.0, fp_c1_1._m0[2].y))) * (_975 * (1.0 / max(fma(_977, _1079, -_1079) + 1.0, fp_c1_1._m0[2].y))));
                uint _1089 = uint(int(uint(_1035 + 8320) >> uint(2)));
                bool _1091 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_1089)) >> uint(2))][int(_1089) & 3]) != 0;
                float _1093 = _1081;
                if (!_1091)
                {
                    _1093 = 1.0;
                }
                float _1095 = _1093;
                if (_1091)
                {
                    uint _1097 = uint(int(uint(_1035 + 7840) >> uint(2)));
                    int _1099 = int(_1097) + 1;
                    uint _1101 = uint(int(uint(_1035 + 7848) >> uint(2)));
                    uint _1103 = uint(int(uint(_1035 + 6888) >> uint(2)));
                    float _1105 = fp_c10_1._m0[int(uint(int(_1103)) >> uint(2))][int(_1103) & 3];
                    int _1107 = int(_1103) + 1;
                    _1095 = exp2(log2(clamp((fma(_1055, -fp_c10_1._m0[int(uint(int(_1101)) >> uint(2))][int(_1101) & 3], fma(_1053, -fp_c10_1._m0[int(uint(_1099) >> uint(2))][_1099 & 3], _1051 * (-fp_c10_1._m0[int(uint(int(_1097)) >> uint(2))][int(_1097) & 3]))) + (-_1105)) * (1.0 / ((-_1105) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[int(uint(_1107) >> uint(2))][_1107 & 3]);
                }
                float _1109 = exp2(_1081) * _1095;
                float _1111 = clamp(_1071 + (-0.0), 0.0, 1.0);
                _1113 = _1023 + 1;
                float _1115 = clamp(_1071 + fp_c6_1._m0[37].w, 0.0, 1.0) * (1.0 / (fp_c6_1._m0[37].w + 1.0));
                float _1117 = _1111 * _1109;
                float _1119 = exp2(log2(clamp(fma(_845, -clamp((-_1071) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].z), 0.0, 1.0)) * fp_c6_1._m0[18].y) * ((fma(_1021, fp_c1_1._m0[4].y, exp2(_1017 * log2(clamp(max(fma(_837, -_1055, fma(_835, -_1053, _833 * (-_1051))), fp_c1_1._m0[4].x) + (-0.0), 0.0, 1.0))) * _1021) + 0.20000000298023223876953125) * _292);
                uint _1121 = uint(int(uint(_1035 + 6400) >> uint(2)));
                float _1123 = fp_c10_1._m0[int(uint(int(_1121)) >> uint(2))][int(_1121) & 3];
                int _1125 = int(_1121) + 1;
                float _1127 = fp_c10_1._m0[int(uint(_1125) >> uint(2))][_1125 & 3];
                float _1129 = _1117 * _1127;
                uint _1131 = uint(int(uint(_1035 + 6408) >> uint(2)));
                float _1133 = fp_c10_1._m0[int(uint(int(_1131)) >> uint(2))][int(_1131) & 3];
                int _1135 = int(_1131) + 1;
                float _1137 = _1109 * fp_c10_1._m0[int(uint(_1135) >> uint(2))][_1135 & 3];
                float _1139 = _1117 * _1123;
                float _1141 = _1117 * _1133;
                float _1143 = fma(fma(fma(_1109 * (clamp(_1111 + fp_c6_1._m0[38].y, 0.0, 1.0) * _1115), _1127, -_1129), _286, _1129) * fma(_891, fp_c1_1._m0[3].w, ((fma(_1085, -_849, _1085) + _849) * _1087) * 0.079577468335628509521484375), _1019, _1015 * ((_1119 * (_1137 * _232)) * _897)) + _1003;
                float _1145 = fma(fma(fma(_1109 * (clamp(_1111 + fp_c6_1._m0[38].x, 0.0, 1.0) * _1115), _1123, -_1139), _286, _1139) * fma(_885, fp_c1_1._m0[3].w, ((fma(_1085, -_847, _1085) + _847) * _1087) * 0.079577468335628509521484375), _1019, _1015 * ((_1119 * (_1137 * _234)) * _897)) + _1005;
                float _1147 = fma(fma(fma(_1109 * (clamp(_1111 + fp_c6_1._m0[38].z, 0.0, 1.0) * _1115), _1133, -_1141), _286, _1141) * fma(_877, fp_c1_1._m0[3].w, ((fma(_1085, -_851, _1085) + _851) * _1087) * 0.079577468335628509521484375), _1019, _1015 * ((_1119 * (_1137 * _236)) * _897)) + _1007;
                _1001 = int(uint(_1001) >> uint(8));
                _1023 = _1113;
                _1003 = _1143;
                _1005 = _1145;
                _1007 = _1147;
                _1027 = _1145;
                _1029 = _1143;
                _1031 = _1147;
            } while (!(_1113 >= 4));
            _1033 = false;
            _1009 = _1027;
            _1011 = _1029;
            _1013 = _1031;
            if ((_1001 & 255) == 30)
            {
                float _1149 = 1.0 / fp_c10_1._m0[561].y;
                float _1151 = (-_949) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_1149, fp_c10_1._m0[557].x);
                float _1153 = (-_945) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_1149, fp_c10_1._m0[557].z);
                float _1155 = _1151 * _1151;
                float _1157 = sqrt(fma(_1153, _1153, _1155)) * (-fp_c10_1._m0[558].y);
                float _1159 = inversesqrt(fma(_1153, _1153, fma(_1157, _1157, _1155)));
                float _1161 = _1151 * _1159;
                float _1163 = _1157 * _1159;
                float _1165 = _1153 * _1159;
                float _1167 = _1161 + _833;
                float _1169 = _1163 + _835;
                float _1171 = _1165 + _837;
                float _1173 = fma(_1165, _224, fma(_1163, _222, _1161 * _220));
                float _1175 = max(_1173, fp_c1_1._m0[2].y);
                float _1177 = inversesqrt(fma(_1171, _1171, fma(_1169, _1169, _1167 * _1167)));
                float _1179 = _1167 * _1177;
                float _1181 = _1169 * _1177;
                float _1183 = _949 + (-fp_c10_1._m0[557].x);
                float _1185 = _945 + (-fp_c10_1._m0[557].z);
                float _1187 = _1171 * _1177;
                float _1189 = _1183 * fp_c10_1._m0[558].z;
                float _1191 = _1185 * fp_c10_1._m0[558].x;
                float _1193 = max(fma(_837, _1187, fma(_835, _1181, _833 * _1179)), fp_c1_1._m0[2].y);
                float _1195 = ((-float(_1191 < _1189)) + float(_1191 > _1189)) * fp_c10_1._m0[561].y;
                float _1197 = max(fma(_1187, _224, fma(_1181, _222, _1179 * _220)), fp_c1_1._m0[2].y) * max(fma(_1187, _224, fma(_1181, _222, _1179 * _220)), fp_c1_1._m0[2].y);
                float _1199 = fma(_1185, _1185, _1183 * _1183);
                float _1201 = fma(_1185, fp_c10_1._m0[558].z, _1183 * fp_c10_1._m0[558].x);
                float _1203 = _87.y;
                bool _1205 = fma(_1185 * inversesqrt(_1199), fp_c10_1._m0[558].z, (_1183 * inversesqrt(_1199)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
                float _1207 = 1.0 / (fma(_945, fp_c10_1._m0[565].z, fma(_1203, fp_c10_1._m0[565].y, _949 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
                float _1209 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_1183, fma(_1195, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_1185 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_1195 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_1183, fma(_1195, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_1185 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_1195 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
                bool _1211 = _1201 > 0.0;
                float _1213 = exp2(_1193 * fma(_1193, fp_c1_1._m0[3].y, -6.9831600189208984375));
                float _1215 = inversesqrt(fma(_1165, _1165, _1161 * _1161));
                float _1217 = clamp(fma(_1201 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].z), 0.0, 1.0) * clamp(fma(_1201 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].z), 0.0, 1.0);
                float _1219 = _1165;
                if (_1211)
                {
                    _1219 = sqrt(_1199);
                }
                float _1221 = _1219;
                if (!_1211)
                {
                    _1221 = 1.0;
                }
                float _1223 = fma(_1209, -_1209, fp_c1_1._m0[0].z);
                if (!_1205)
                {
                    _1223 = 1.0;
                }
                float _1225 = clamp(_1173 + (-0.0), 0.0, 1.0);
                float _1227 = _1223;
                if (_1205)
                {
                    _1227 = _1223 * _1223;
                }
                float _1229 = clamp(_1173 + fp_c6_1._m0[37].w, 0.0, 1.0) * (1.0 / (1.0 + fp_c6_1._m0[37].w));
                float _1231 = (exp2(log2(clamp((fma(_1165 * _1215, -fp_c10_1._m0[558].z, (_1161 * _1215) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w) * exp2(log2(clamp(fma(_1221, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y)) * min(fma(_1217, -_1217, fp_c1_1._m0[0].z) * fma(_1217, -_1217, fp_c1_1._m0[0].z), _1227);
                float _1233 = _1225 * _1231;
                float _1235 = (_989 * (1.0 / (_983 + fma(_983, -_1175, _1175)))) * ((_975 * (1.0 / max(fma(_977, _1197, -_1197) + 1.0, fp_c1_1._m0[2].y))) * (_975 * (1.0 / max(fma(_977, _1197, -_1197) + 1.0, fp_c1_1._m0[2].y))));
                float _1237 = ((fma(_1021, fp_c1_1._m0[4].y, _1021 * exp2(_1017 * log2(clamp(max(fma(_1165, -_837, fma(_1163, -_835, _1161 * (-_833))), fp_c1_1._m0[4].x) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125) * _292) * exp2(log2(clamp(fma(_845, -clamp((-_1173) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].z), 0.0, 1.0)) * fp_c6_1._m0[18].y);
                float _1239 = fp_c10_1._m0[559].w * fp_c10_1._m0[559].x;
                float _1241 = fp_c10_1._m0[559].w * fp_c10_1._m0[559].y;
                float _1243 = fp_c10_1._m0[559].w * fp_c10_1._m0[559].z;
                float _1245 = _1239 * _1233;
                float _1247 = _1241 * _1233;
                float _1249 = _1243 * _1233;
                float _1251 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_945, fp_c10_1._m0[562].z, fma(_1203, fp_c10_1._m0[562].y, _949 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _1207, 0.5, 0.5), (-fma((fma(_945, fp_c10_1._m0[563].z, fma(_1203, fp_c10_1._m0[563].y, _949 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _1207, 0.5, 0.5)) + 1.0)).z > fma((fma(_945, fp_c10_1._m0[564].z, fma(_1203, fp_c10_1._m0[564].y, _949 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _1207, 0.5, 0.5)) || (_1201 <= 0.0));
                _1009 = fma(fma(fma(fma(_1239, _1231 * (clamp(_1225 + fp_c6_1._m0[38].x, 0.0, 1.0) * _1229), -_1245), _286, _1245) * fma(_885, fp_c1_1._m0[3].w, ((fma(_1213, -_847, _1213) + _847) * _1235) * 0.079577468335628509521484375), _1019, _1015 * ((_1237 * (_1231 * _234)) * _897)), _1251, _1027);
                _1011 = fma(fma(fma(fma(_1241, _1231 * (clamp(_1225 + fp_c6_1._m0[38].y, 0.0, 1.0) * _1229), -_1247), _286, _1247) * fma(_891, fp_c1_1._m0[3].w, ((fma(_1213, -_849, _1213) + _849) * _1235) * 0.079577468335628509521484375), _1019, _1015 * ((_1237 * (_1231 * _232)) * _897)), _1251, _1029);
                _1013 = fma(fma(fma(fma(_1243, _1231 * (clamp(_1225 + fp_c6_1._m0[38].z, 0.0, 1.0) * _1229), -_1249), _286, _1249) * fma(_877, fp_c1_1._m0[3].w, ((fma(_1213, -_851, _1213) + _851) * _1235) * 0.079577468335628509521484375), _1019, _1015 * ((_1237 * (_1231 * _236)) * _897)), _1251, _1031);
            }
        }
        float _1253 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
        float _1255 = clamp((-_897) + 1.0, 0.0, 1.0);
        float _1257 = exp2(log2(clamp(fma(_845, -clamp((-fma(_224, -fp_c5_1._m0[23].z, fma(_222, -fp_c5_1._m0[23].y, _220 * (-fp_c5_1._m0[23].x)))) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].z), 0.0, 1.0)) * fp_c6_1._m0[18].y) * ((fma(_1253, fp_c1_1._m0[4].y, _1253 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_837, fp_c5_1._m0[23].z, fma(_835, fp_c5_1._m0[23].y, _833 * fp_c5_1._m0[23].x)), fp_c1_1._m0[4].x) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125) * _292);
        float _1259 = clamp(fma(_374, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        _803 = fma(_372, _1009, fma(_376, ((fma((fma(_991, -_847, _991) + _847) * _995, fp_c1_1._m0[3].z, _885 * 0.3183098733425140380859375) * _901) * _1255) * _905, _1259 * ((_1257 * (_234 * fp_c5_1._m0[5].w)) * _897)));
        _805 = fma(_372, _1011, fma(_376, ((fma((fma(_991, -_849, _991) + _849) * _995, fp_c1_1._m0[3].z, _891 * 0.3183098733425140380859375) * _903) * _1255) * _905, _1259 * ((_1257 * (_232 * fp_c5_1._m0[5].w)) * _897)));
        _807 = fma(_372, _1013, fma(_376, ((fma((fma(_991, -_851, _991) + _851) * _995, fp_c1_1._m0[3].z, _877 * 0.3183098733425140380859375) * _899) * _1255) * _905, _1259 * ((_1257 * (_236 * fp_c5_1._m0[5].w)) * _897)));
    }
    float _1261 = _87.x;
    float _1263 = _87.y;
    float _1265 = _294 + _803;
    float _1267 = _87.z;
    float _1269 = _296 + _805;
    float _1271 = _298 + _807;
    float _1273 = _1261 + (-fp_c3_1._m0[11].w);
    float _1275 = _1263 + (-fp_c3_1._m0[12].w);
    float _1277 = _1267 + (-fp_c3_1._m0[13].w);
    float _1279 = fma(_1277, _1277, fma(_1275, _1275, _1273 * _1273));
    float _1281 = clamp(fma(_372 * _376, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _1283 = clamp(fma(fma(_1267, fp_c5_1._m0[14].z, fma(_1263, fp_c5_1._m0[14].y, _1261 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _1285 = exp2(fma(fma(_1277 * inversesqrt(_1279), fp_c5_1._m0[23].z, fma(_1275 * inversesqrt(_1279), fp_c5_1._m0[23].y, (_1273 * inversesqrt(_1279)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_1279) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _1287 = fma((-_1265) + fp_c5_1._m0[13].x, _1283, _1265);
    float _1289 = fma((-_1269) + fp_c5_1._m0[13].y, _1283, _1269);
    float _1291 = fma((-_1271) + fp_c5_1._m0[13].z, _1283, _1271);
    float _1293 = (clamp((-exp2((clamp(fma(sqrt(_1279), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w) * _300;
    _92.x = fma((-_1287) + fma(fma((_1285 * fp_c7_1._m0[55].x) * _1281, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _1293, _1287);
    _92.y = fma((-_1289) + fma(fma((_1285 * fp_c7_1._m0[55].y) * _1281, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _1293, _1289);
    _92.z = fma((-_1291) + fma(fma((_1285 * fp_c7_1._m0[55].z) * _1281, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _1293, _1291);
    _92.w = 1.0;
}


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

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_28;
layout(binding = 2) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 3) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 4) uniform sampler2D fp_tex_tcb_38;
layout(binding = 5) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _56;
layout(location = 5) in vec4 _58;
layout(location = 4) in vec4 _60;
layout(location = 1) in vec4 _62;
layout(location = 3) in vec4 _64;
layout(location = 0) out vec4 _67;
layout(location = 2) in vec4 _69;
uint _6[12];

void main()
{
    bool _256 = false;
    float _76 = texture(fp_tex_tcb_8, vec2(_56.x, _56.y)).x;
    float _78 = 1.0 / (_58.z * gl_FragCoord.w);
    float _80 = 1.0 / _60.w;
    float _82 = fma(_60.y * _80, -0.5, 0.5);
    bool _86 = _76 <= 0.0;
    int _89 = floatBitsToInt(_80);
    int _91 = floatBitsToInt(_82);
    if (_86)
    {
        discard;
    }
    vec2 _95 = texture(fp_tex_tcb_2A, vec2(fma(_60.x * _80, 0.5, 0.5), _82)).xy;
    float _97 = _62.x;
    float _99 = _62.y;
    float _101 = _62.z;
    float _103 = _64.x;
    float _105 = _64.y;
    if (_86)
    {
        _89 = 0;
    }
    float _107 = _97 * _97;
    int _109 = floatBitsToInt(_107);
    if (_86)
    {
        _109 = 0;
    }
    float _111 = inversesqrt(fma(_101, _101, fma(_99, _99, _107)));
    int _113 = floatBitsToInt(_111);
    if (_86)
    {
        _91 = 0;
    }
    float _115 = _97 * _111;
    float _117 = _99 * _111;
    float _119 = _101 * _111;
    if (_86)
    {
        _113 = 0;
    }
    if (_86)
    {
        _67.x = intBitsToFloat(_109);
        _67.y = intBitsToFloat(_91);
        _67.z = intBitsToFloat(_89);
        _67.w = intBitsToFloat(_113);
        return;
    }
    float _121 = _64.z;
    float _123 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _125 = inversesqrt(fma(_121, _121, fma(_105, _105, _103 * _103)));
    float _127 = _103 * (-_125);
    float _129 = _105 * (-_125);
    float _131 = _121 * (-_125);
    float _133 = fma(_119, _131, fma(_117, _129, _115 * _127));
    float _135 = max(_133, fp_c1_1._m0[0].y);
    float _137 = fma(_115 * (-_133), -2.0, -_127);
    float _139 = fma(_117 * (-_133), -2.0, -_129);
    float _141 = fma(_119 * (-_133), -2.0, -_131);
    float _143 = 1.0 / max(abs(_141), max(abs(_137), abs(_139)));
    vec2 _145 = texture(fp_tex_tcb_38, vec2(_135, (-_123) + (-0.0))).xy;
    float _147 = _145.x;
    float _149 = _145.y;
    vec3 _153 = texture(fp_tex_tcb_36, vec4(_137 * _143, _139 * _143, _141 * _143, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_123 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _155 = _127 + (-fp_c5_1._m0[23].x);
    float _157 = _69.x;
    float _159 = _129 + (-fp_c5_1._m0[23].y);
    float _161 = _69.z;
    float _163 = _131 + (-fp_c5_1._m0[23].z);
    float _165 = fma(_123, 0.5, 0.5);
    float _167 = _117 * _119;
    float _169 = inversesqrt(fma(_163, _163, fma(_159, _159, _155 * _155)));
    float _171 = _155 * _169;
    float _173 = _159 * _169;
    float _175 = _115 * _117;
    float _177 = _163 * _169;
    float _179 = _119 * _119;
    float _181 = _123 * _123;
    float _183 = _115 * _119;
    int _185 = max(0, min(int(trunc((_161 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _187 = max(fma(_131, _177, fma(_129, _173, _127 * _171)), fp_c1_1._m0[0].y);
    float _189 = max(fma(_119, _177, fma(_117, _173, _115 * _171)), fp_c1_1._m0[0].y) * max(fma(_119, _177, fma(_117, _173, _115 * _171)), fp_c1_1._m0[0].y);
    float _191 = fma(_117, -fp_c5_1._m0[23].y, _115 * (-fp_c5_1._m0[23].x));
    float _193 = (_165 * 0.5) * _165;
    float _195 = fma(_115, _115, -(_117 * _117));
    uint _198 = uint(int(uint((((int(uint(_185) >> uint(16)) * 20) << 16) + (((_185 & 65535) * 20) + max(0, min(int(trunc((_157 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _200 = fp_c10_1._m0[int(uint(int(_198)) >> uint(2))][int(_198) & 3];
    float _202 = max(fma(_119, -fp_c5_1._m0[23].z, _191), fp_c1_1._m0[0].y);
    float _204 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    float _206 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _208 = 1.0 / (_193 + fma(_135, -_193, _135));
    float _210 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _212 = exp2(_187 * fma(_187, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _214 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].x, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _216 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].y, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _218 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].z, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _220 = (_208 * (1.0 / (_193 + fma(_193, -_202, _202)))) * ((_181 * (1.0 / max(fma(_189, _181 * _181, -_189) + 1.0, fp_c1_1._m0[0].y))) * (_181 * (1.0 / max(fma(_189, _181 * _181, -_189) + 1.0, fp_c1_1._m0[0].y))));
    float _222 = clamp(fma(_119, -fp_c5_1._m0[23].z, _191), 0.0, 1.0);
    float _224 = clamp((-fma(max((-_95.x) + 1.0, (-_95.y) + 1.0), clamp(_69.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_58.x * gl_FragCoord.w) * _78, (_58.y * gl_FragCoord.w) * _78)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _226 = fma(_153.x, fma(_214, _147, _149), max(0.0, fma(_195, fp_c5_1._m0[31].x, (fma(_119, fp_c5_1._m0[25].z, fma(_117, fp_c5_1._m0[25].y, _115 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_183, fp_c5_1._m0[28].w, fma(_179, fp_c5_1._m0[28].z, fma(_167, fp_c5_1._m0[28].y, _175 * fp_c5_1._m0[28].x))))) * fma(_214, -_204, _204));
    float _228 = fma(_153.y, fma(_216, _147, _149), max(0.0, fma(_195, fp_c5_1._m0[31].y, (fma(_119, fp_c5_1._m0[26].z, fma(_117, fp_c5_1._m0[26].y, _115 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_183, fp_c5_1._m0[29].w, fma(_179, fp_c5_1._m0[29].z, fma(_167, fp_c5_1._m0[29].y, _175 * fp_c5_1._m0[29].x))))) * fma(_216, -_206, _206));
    float _230 = fma(_153.z, fma(_218, _147, _149), max(0.0, fma(_195, fp_c5_1._m0[31].z, (fma(_119, fp_c5_1._m0[27].z, fma(_117, fp_c5_1._m0[27].y, _115 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_183, fp_c5_1._m0[30].w, fma(_179, fp_c5_1._m0[30].z, fma(_167, fp_c5_1._m0[30].y, _175 * fp_c5_1._m0[30].x))))) * fma(_218, -_210, _210));
    int _232 = floatBitsToInt(_200);
    float _234 = _228;
    float _236 = _230;
    float _238 = _226;
    float _240 = _226;
    float _242 = _228;
    float _244 = _230;
    if (floatBitsToInt(_200) != (-1))
    {
        int _246 = 0;
        float _250;
        float _252;
        float _254;
        int _338;
        do
        {
            int _248 = _232 & 255;
            _250 = _238;
            _252 = _234;
            _254 = _236;
            _256 = uint(_248) >= 30u;
            if (_256)
            {
                break;
            }
            int _258 = _248 << 4;
            uint _260 = uint(int(uint(_258 + 7360) >> uint(2)));
            int _262 = int(_260) + 1;
            uint _264 = uint(int(uint(_258 + 7368) >> uint(2)));
            float _266 = (-_157) + fp_c10_1._m0[int(uint(int(_260)) >> uint(2))][int(_260) & 3];
            float _268 = fp_c10_1._m0[int(uint(_262) >> uint(2))][_262 & 3] + (-_69.y);
            float _270 = (-_161) + fp_c10_1._m0[int(uint(int(_264)) >> uint(2))][int(_264) & 3];
            float _272 = fma(_270, _270, fma(_268, _268, _266 * _266));
            float _274 = _266 * inversesqrt(_272);
            float _276 = _268 * inversesqrt(_272);
            float _278 = _270 * inversesqrt(_272);
            float _280 = _127 + _274;
            float _282 = _129 + _276;
            float _284 = _131 + _278;
            uint _286 = uint(int(uint(_258 + 6880) >> uint(2)));
            int _288 = int(_286) + 1;
            float _290 = inversesqrt(fma(_284, _284, fma(_282, _282, _280 * _280)));
            float _292 = _280 * _290;
            float _294 = _282 * _290;
            float _296 = _284 * _290;
            float _298 = max(fma(_119, _296, fma(_117, _294, _115 * _292)), fp_c1_1._m0[0].y) * max(fma(_119, _296, fma(_117, _294, _115 * _292)), fp_c1_1._m0[0].y);
            uint _300 = uint(int(uint(_258 + 8320) >> uint(2)));
            float _302 = max(fma(_131, _296, fma(_129, _294, _127 * _292)), fp_c1_1._m0[0].y);
            float _304 = fma(_119, _278, fma(_117, _276, _115 * _274));
            float _306 = max(_304, fp_c1_1._m0[0].y);
            uint _308 = uint(int(uint(_258 + 6400) >> uint(2)));
            int _310 = int(_308) + 1;
            uint _312 = uint(int(uint(_258 + 6408) >> uint(2)));
            float _314 = exp2(_302 * fma(_302, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _316 = (_208 * (1.0 / (_193 + fma(_193, -_306, _306)))) * ((_181 * (1.0 / max(fma(_181 * _181, _298, -_298) + 1.0, fp_c1_1._m0[0].y))) * (_181 * (1.0 / max(fma(_181 * _181, _298, -_298) + 1.0, fp_c1_1._m0[0].y))));
            bool _318 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_300)) >> uint(2))][int(_300) & 3]) != 0;
            float _320 = _214 + fma(_214, -_314, _314);
            float _322 = _320;
            if (!_318)
            {
                _322 = 1.0;
            }
            float _324 = _322;
            if (_318)
            {
                uint _326 = uint(int(uint(_258 + 7840) >> uint(2)));
                int _328 = int(_326) + 1;
                uint _330 = uint(int(uint(_258 + 7848) >> uint(2)));
                uint _332 = uint(int(uint(_258 + 6888) >> uint(2)));
                float _334 = fp_c10_1._m0[int(uint(int(_332)) >> uint(2))][int(_332) & 3];
                int _336 = int(_332) + 1;
                _324 = exp2(fp_c10_1._m0[int(uint(_336) >> uint(2))][_336 & 3] * log2(clamp(((-_334) + fma(_278, -fp_c10_1._m0[int(uint(int(_330)) >> uint(2))][int(_330) & 3], fma(_276, -fp_c10_1._m0[int(uint(_328) >> uint(2))][_328 & 3], _274 * (-fp_c10_1._m0[int(uint(int(_326)) >> uint(2))][int(_326) & 3])))) * (1.0 / ((-_334) + 1.0)), 0.0, 1.0)));
            }
            _338 = _246 + 1;
            float _340 = (exp2(fp_c10_1._m0[int(uint(_288) >> uint(2))][_288 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_286)) >> uint(2))][int(_286) & 3], -sqrt(_272), fp_c1_1._m0[1].x), 0.0, 1.0))) * _324) * clamp(_304 + (-0.0), 0.0, 1.0);
            float _342 = fma(fp_c10_1._m0[int(uint(_310) >> uint(2))][_310 & 3] * _340, fma(_206, fp_c1_1._m0[1].y, ((_216 + fma(_216, -_314, _314)) * _316) * 0.079577468335628509521484375), _234);
            float _344 = fma(fp_c10_1._m0[int(uint(int(_312)) >> uint(2))][int(_312) & 3] * _340, fma(_210, fp_c1_1._m0[1].y, ((_218 + fma(_218, -_314, _314)) * _316) * 0.079577468335628509521484375), _236);
            float _346 = fma(fp_c10_1._m0[int(uint(int(_308)) >> uint(2))][int(_308) & 3] * _340, fma(_204, fp_c1_1._m0[1].y, (_320 * _316) * 0.079577468335628509521484375), _238);
            _232 = int(uint(_232) >> uint(8));
            _246 = _338;
            _234 = _342;
            _236 = _344;
            _238 = _346;
            _250 = _346;
            _252 = _342;
            _254 = _344;
        } while (!(_338 >= 4));
        _256 = false;
        _240 = _250;
        _242 = _252;
        _244 = _254;
        if ((_232 & 255) == 30)
        {
            float _348 = _69.y;
            float _350 = 1.0 / (fma(_161, fp_c10_1._m0[565].z, fma(_348, fp_c10_1._m0[565].y, _157 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _352 = 1.0 / fp_c10_1._m0[561].y;
            float _354 = _157 + (-fp_c10_1._m0[557].x);
            float _356 = _161 + (-fp_c10_1._m0[557].z);
            float _358 = _354 * fp_c10_1._m0[558].z;
            float _360 = _356 * fp_c10_1._m0[558].x;
            float _362 = (-_157) + fma(_352, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _364 = (-_161) + fma(_352, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _366 = _362 * _362;
            float _368 = ((-float(_360 < _358)) + float(_360 > _358)) * fp_c10_1._m0[561].y;
            float _370 = sqrt(fma(_364, _364, _366)) * (-fp_c10_1._m0[558].y);
            float _372 = inversesqrt(fma(_364, _364, fma(_370, _370, _366)));
            float _374 = _362 * _372;
            float _376 = _370 * _372;
            float _378 = _364 * _372;
            float _380 = _127 + _374;
            float _382 = _129 + _376;
            float _384 = _131 + _378;
            float _386 = fma(_119, _378, fma(_117, _376, _115 * _374));
            float _388 = inversesqrt(fma(_384, _384, fma(_382, _382, _380 * _380)));
            float _390 = _380 * _388;
            float _392 = _382 * _388;
            float _394 = fma(_356, _356, _354 * _354);
            float _396 = fma(_356, fp_c10_1._m0[558].z, _354 * fp_c10_1._m0[558].x);
            bool _398 = _396 > 0.0;
            float _400 = inversesqrt(fma(_378, _378, _374 * _374));
            float _402 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_354, fma(_368, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_356 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_368 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_354, fma(_368, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_356 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_368 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _404 = _374;
            if (_398)
            {
                _404 = sqrt(_394);
            }
            float _406 = _384 * _388;
            float _408 = _404;
            if (!_398)
            {
                _408 = 1.0;
            }
            float _410 = max(fma(_131, _406, fma(_129, _392, _127 * _390)), fp_c1_1._m0[0].y);
            float _412 = clamp(fma(_396 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_396 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _414 = max(fma(_119, _406, fma(_117, _392, _115 * _390)), fp_c1_1._m0[0].y) * max(fma(_119, _406, fma(_117, _392, _115 * _390)), fp_c1_1._m0[0].y);
            float _416 = max(_386, fp_c1_1._m0[0].y);
            float _418 = fma(_402, -_402, fp_c1_1._m0[1].x);
            bool _420 = fma(_356 * inversesqrt(_394), fp_c10_1._m0[558].z, (_354 * inversesqrt(_394)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _422 = _418;
            if (_420)
            {
                _422 = _418 * _418;
            }
            float _424 = _422;
            if (!_420)
            {
                _424 = 1.0;
            }
            float _426 = exp2(_410 * fma(_410, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _428 = (_208 * (1.0 / (_193 + fma(_193, -_416, _416)))) * ((_181 * (1.0 / max(fma(_181 * _181, _414, -_414) + 1.0, fp_c1_1._m0[0].y))) * (_181 * (1.0 / max(fma(_181 * _181, _414, -_414) + 1.0, fp_c1_1._m0[0].y))));
            float _430 = clamp(_386 + (-0.0), 0.0, 1.0) * (min(fma(_412, -_412, fp_c1_1._m0[1].x) * fma(_412, -_412, fp_c1_1._m0[1].x), _424) * (exp2(log2(clamp(fma(_408, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_378 * _400, -fp_c10_1._m0[558].z, (_374 * _400) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)));
            float _432 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_161, fp_c10_1._m0[562].z, fma(_348, fp_c10_1._m0[562].y, _157 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _350, 0.5, 0.5), (-fma((fma(_161, fp_c10_1._m0[563].z, fma(_348, fp_c10_1._m0[563].y, _157 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _350, 0.5, 0.5)) + 1.0)).z > fma((fma(_161, fp_c10_1._m0[564].z, fma(_348, fp_c10_1._m0[564].y, _157 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _350, 0.5, 0.5)) || (_396 <= 0.0));
            _240 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _430) * fma(_204, fp_c1_1._m0[1].y, ((_214 + fma(_214, -_426, _426)) * _428) * 0.079577468335628509521484375), _432, _250);
            _242 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _430) * fma(_206, fp_c1_1._m0[1].y, ((_216 + fma(_216, -_426, _426)) * _428) * 0.079577468335628509521484375), _432, _252);
            _244 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _430) * fma(_210, fp_c1_1._m0[1].y, ((_218 + fma(_218, -_426, _426)) * _428) * 0.079577468335628509521484375), _432, _254);
        }
    }
    float _434 = _157 + (-fp_c3_1._m0[11].w);
    float _436 = _69.y;
    float _438 = _161 + (-fp_c3_1._m0[13].w);
    float _440 = fma(_224, fma(_220 * (_214 + fma(_214, -_212, _212)), fp_c1_1._m0[0].w, _204 * 0.3183098733425140380859375) * (_222 * fp_c5_1._m0[5].x), _240);
    float _442 = fma(_224, fma(_220 * (_216 + fma(_216, -_212, _212)), fp_c1_1._m0[0].w, _206 * 0.3183098733425140380859375) * (_222 * fp_c5_1._m0[5].y), _242);
    float _444 = fma(_224, fma(_220 * (_218 + fma(_218, -_212, _212)), fp_c1_1._m0[0].w, _210 * 0.3183098733425140380859375) * (_222 * fp_c5_1._m0[5].z), _244);
    float _446 = _436 + (-fp_c3_1._m0[12].w);
    float _448 = fma(_438, _438, fma(_446, _446, _434 * _434));
    float _450 = clamp(fma(_224, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _452 = clamp(fma(fma(_161, fp_c5_1._m0[14].z, fma(_436, fp_c5_1._m0[14].y, _157 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _454 = exp2(log2(clamp(sqrt(_448) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_438 * inversesqrt(_448), fp_c5_1._m0[23].z, fma(_446 * inversesqrt(_448), fp_c5_1._m0[23].y, (_434 * inversesqrt(_448)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _456 = fma((-_440) + fp_c5_1._m0[13].x, _452, _440);
    float _458 = fma((-_442) + fp_c5_1._m0[13].y, _452, _442);
    float _460 = fma((-_444) + fp_c5_1._m0[13].z, _452, _444);
    float _462 = clamp((-exp2((clamp(fma(sqrt(_448), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _67.x = fma((-_456) + fma(fma(_450 * (_454 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _462, _456);
    _67.y = fma((-_458) + fma(fma(_450 * (_454 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _462, _458);
    _67.z = fma((-_460) + fma(fma(_450 * (_454 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _462, _460);
    _67.w = clamp(_76 + (-0.0), 0.0, 1.0);
}


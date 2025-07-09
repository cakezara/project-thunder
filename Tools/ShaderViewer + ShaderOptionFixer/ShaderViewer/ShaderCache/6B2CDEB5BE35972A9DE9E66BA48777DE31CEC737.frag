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
layout(binding = 1) uniform sampler2D fp_tex_tcb_14;
layout(binding = 2) uniform sampler2D fp_tex_tcb_28;
layout(binding = 3) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 4) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 5) uniform sampler2D fp_tex_tcb_38;
layout(binding = 6) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _58;
layout(location = 5) in vec4 _60;
layout(location = 4) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 0) out vec4 _67;
layout(location = 3) in vec4 _69;
layout(location = 2) in vec4 _71;
uint _6[12];

void main()
{
    bool _278 = false;
    float _78 = _58.x;
    float _80 = _58.y;
    float _82 = texture(fp_tex_tcb_8, vec2(_78, _80)).x;
    float _84 = 1.0 / (_60.z * gl_FragCoord.w);
    float _86 = 1.0 / _62.w;
    float _88 = fma(_62.y * _86, -0.5, 0.5);
    bool _92 = _82 <= 0.0;
    int _95 = floatBitsToInt(_86);
    int _97 = floatBitsToInt(_88);
    if (_92)
    {
        discard;
    }
    vec3 _101 = texture(fp_tex_tcb_14, vec2(_78, _80)).xyz;
    float _103 = _64.x;
    float _105 = _64.y;
    float _107 = _64.z;
    if (_92)
    {
        _95 = 0;
    }
    float _109 = fma(_105, _105, _103 * _103);
    int _111 = floatBitsToInt(_109);
    if (_92)
    {
        _111 = 0;
    }
    float _113 = inversesqrt(fma(_107, _107, _109));
    int _115 = floatBitsToInt(_113);
    if (_92)
    {
        _97 = 0;
    }
    float _117 = _103 * _113;
    float _119 = _105 * _113;
    float _121 = _107 * _113;
    if (_92)
    {
        _115 = 0;
    }
    if (_92)
    {
        _67.x = intBitsToFloat(_111);
        _67.y = intBitsToFloat(_115);
        _67.z = intBitsToFloat(_95);
        _67.w = intBitsToFloat(_97);
        return;
    }
    float _123 = _69.x;
    float _125 = _69.y;
    float _127 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _129 = _69.z;
    float _131 = (-texture(fp_tex_tcb_2A, vec2(fma(_62.x * _86, 0.5, 0.5), _88)).y) + 1.0;
    float _133 = inversesqrt(fma(_129, _129, fma(_125, _125, _123 * _123)));
    float _135 = _123 * (-_133);
    float _137 = _125 * (-_133);
    float _139 = _129 * (-_133);
    float _141 = fma(_121, _139, fma(_119, _137, _117 * _135));
    float _143 = fma(_117 * (-_141), -2.0, -_135);
    float _145 = fma(_119 * (-_141), -2.0, -_137);
    float _147 = fma(_121 * (-_141), -2.0, -_139);
    float _149 = 1.0 / max(abs(_147), max(abs(_143), abs(_145)));
    float _151 = max(_141, fp_c1_1._m0[0].y);
    vec2 _155 = texture(fp_tex_tcb_38, vec2(_151, (-_127) + (-0.0))).xy;
    float _157 = _155.x;
    float _159 = _155.y;
    vec3 _161 = texture(fp_tex_tcb_36, vec4(_143 * _149, _145 * _149, _147 * _149, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_127 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _163 = _71.z;
    float _165 = _71.x;
    float _167 = _135 + (-fp_c5_1._m0[23].x);
    float _169 = _137 + (-fp_c5_1._m0[23].y);
    float _171 = _139 + (-fp_c5_1._m0[23].z);
    float _173 = _117 * _119;
    float _175 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    float _177 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _179 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _181 = clamp(_71.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _183 = _131 * _181;
    float _185 = inversesqrt(fma(_171, _171, fma(_169, _169, _167 * _167)));
    float _187 = _119 * _121;
    float _189 = _121 * _121;
    float _191 = clamp((-fma(_181, max(0.0, _131), fma(texture(fp_tex_tcb_28, vec2((_60.x * gl_FragCoord.w) * _84, (_60.y * gl_FragCoord.w) * _84)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _193 = _167 * _185;
    float _195 = _169 * _185;
    float _197 = _171 * _185;
    int _199 = max(0, min(int(trunc((_163 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _201 = _117 * _121;
    float _203 = fma(_127, 0.5, 0.5);
    float _205 = _127 * _127;
    float _207 = max(fma(_139, _197, fma(_137, _195, _135 * _193)), fp_c1_1._m0[0].y);
    float _209 = _205 * _205;
    float _211 = max(fma(_121, _197, fma(_119, _195, _117 * _193)), fp_c1_1._m0[0].y) * max(fma(_121, _197, fma(_119, _195, _117 * _193)), fp_c1_1._m0[0].y);
    uint _214 = uint(int(uint((((int(uint(_199) >> uint(16)) * 20) << 16) + (((_199 & 65535) * 20) + max(0, min(int(trunc((_165 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _216 = fp_c10_1._m0[int(uint(int(_214)) >> uint(2))][int(_214) & 3];
    float _218 = fma(_121, -fp_c5_1._m0[23].z, fma(_119, -fp_c5_1._m0[23].y, _117 * (-fp_c5_1._m0[23].x)));
    float _220 = (_203 * 0.5) * _203;
    float _222 = max(_218, fp_c1_1._m0[0].y);
    float _224 = 1.0 / (_220 + fma(_151, -_220, _151));
    float _226 = exp2(_207 * fma(_207, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _228 = fma(_117, _117, -(_119 * _119));
    float _230 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].x;
    float _232 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].y;
    float _234 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].z;
    float _236 = (_224 * (1.0 / (_220 + fma(_220, -_222, _222)))) * ((_205 * (1.0 / max(fma(_211, _209, -_211) + 1.0, fp_c1_1._m0[0].y))) * (_205 * (1.0 / max(fma(_211, _209, -_211) + 1.0, fp_c1_1._m0[0].y))));
    float _238 = fma(_161.x, fma(_230, _157, _159), max(0.0, fma(_228, fp_c5_1._m0[31].x, (fma(_121, fp_c5_1._m0[25].z, fma(_119, fp_c5_1._m0[25].y, _117 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_201, fp_c5_1._m0[28].w, fma(_189, fp_c5_1._m0[28].z, fma(_187, fp_c5_1._m0[28].y, _173 * fp_c5_1._m0[28].x))))) * fma(_175, -_230, _175));
    float _240 = clamp(_218 + (-0.0), 0.0, 1.0);
    float _242 = fma(_161.y, fma(_232, _157, _159), max(0.0, fma(_228, fp_c5_1._m0[31].y, (fma(_121, fp_c5_1._m0[26].z, fma(_119, fp_c5_1._m0[26].y, _117 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_201, fp_c5_1._m0[29].w, fma(_189, fp_c5_1._m0[29].z, fma(_187, fp_c5_1._m0[29].y, _173 * fp_c5_1._m0[29].x))))) * fma(_177, -_232, _177));
    float _244 = fma(_161.z, fma(_234, _157, _159), max(0.0, fma(_228, fp_c5_1._m0[31].z, (fma(_121, fp_c5_1._m0[27].z, fma(_119, fp_c5_1._m0[27].y, _117 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_201, fp_c5_1._m0[30].w, fma(_189, fp_c5_1._m0[30].z, fma(_187, fp_c5_1._m0[30].y, _173 * fp_c5_1._m0[30].x))))) * fma(_179, -_234, _179));
    int _246 = floatBitsToInt(_216);
    float _248 = _238;
    float _250 = _242;
    float _252 = _244;
    float _254 = _238;
    float _256 = _242;
    float _258 = _244;
    if (floatBitsToInt(_216) != (-1))
    {
        float _260 = 1.0 / fp_c6_1._m0[18].x;
        float _262 = clamp(fma(_183, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _264 = clamp(1.0 + (-fp_c6_1._m0[17].w), 0.0, 1.0);
        float _266 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
        int _268 = 0;
        float _272;
        float _274;
        float _276;
        int _364;
        do
        {
            int _270 = _246 & 255;
            _272 = _248;
            _274 = _250;
            _276 = _252;
            _278 = uint(_270) >= 30u;
            if (_278)
            {
                break;
            }
            int _280 = _270 << 4;
            uint _282 = uint(int(uint(_280 + 7360) >> uint(2)));
            int _284 = int(_282) + 1;
            uint _286 = uint(int(uint(_280 + 7368) >> uint(2)));
            float _288 = (-_165) + fp_c10_1._m0[int(uint(int(_282)) >> uint(2))][int(_282) & 3];
            float _290 = fp_c10_1._m0[int(uint(_284) >> uint(2))][_284 & 3] + (-_71.y);
            float _292 = (-_163) + fp_c10_1._m0[int(uint(int(_286)) >> uint(2))][int(_286) & 3];
            float _294 = fma(_292, _292, fma(_290, _290, _288 * _288));
            float _296 = _288 * inversesqrt(_294);
            float _298 = _290 * inversesqrt(_294);
            float _300 = _292 * inversesqrt(_294);
            float _302 = _135 + _296;
            float _304 = _137 + _298;
            float _306 = _139 + _300;
            float _308 = fma(_121, _300, fma(_119, _298, _117 * _296));
            uint _310 = uint(int(uint(_280 + 6880) >> uint(2)));
            int _312 = int(_310) + 1;
            float _314 = inversesqrt(fma(_306, _306, fma(_304, _304, _302 * _302)));
            float _316 = _302 * _314;
            float _318 = _304 * _314;
            float _320 = _306 * _314;
            uint _322 = uint(int(uint(_280 + 8320) >> uint(2)));
            float _324 = max(_308, fp_c1_1._m0[0].y);
            float _326 = max(fma(_139, _320, fma(_137, _318, _135 * _316)), fp_c1_1._m0[0].y);
            float _328 = max(fma(_121, _320, fma(_119, _318, _117 * _316)), fp_c1_1._m0[0].y) * max(fma(_121, _320, fma(_119, _318, _117 * _316)), fp_c1_1._m0[0].y);
            uint _330 = uint(int(uint(_280 + 6400) >> uint(2)));
            int _332 = int(_330) + 1;
            uint _334 = uint(int(uint(_280 + 6408) >> uint(2)));
            int _336 = int(_334) + 1;
            float _338 = exp2(_326 * fma(_326, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _340 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_322)) >> uint(2))][int(_322) & 3]) != 0;
            float _342 = (_224 * (1.0 / (_220 + fma(_220, -_324, _324)))) * ((_205 * (1.0 / max(fma(_209, _328, -_328) + 1.0, fp_c1_1._m0[0].y))) * (_205 * (1.0 / max(fma(_209, _328, -_328) + 1.0, fp_c1_1._m0[0].y))));
            float _344 = (_230 + fma(_230, -_338, _338)) * _342;
            float _346 = _344;
            if (!_340)
            {
                _346 = 1.0;
            }
            float _348 = _346;
            if (_340)
            {
                uint _350 = uint(int(uint(_280 + 7840) >> uint(2)));
                int _352 = int(_350) + 1;
                uint _354 = uint(int(uint(_280 + 6888) >> uint(2)));
                float _356 = fp_c10_1._m0[int(uint(int(_354)) >> uint(2))][int(_354) & 3];
                int _358 = int(_354) + 1;
                uint _360 = uint(int(uint(_280 + 7848) >> uint(2)));
                _348 = exp2(fp_c10_1._m0[int(uint(_358) >> uint(2))][_358 & 3] * log2(clamp(((-_356) + fma(_300, -fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3], fma(_298, -fp_c10_1._m0[int(uint(_352) >> uint(2))][_352 & 3], _296 * (-fp_c10_1._m0[int(uint(int(_350)) >> uint(2))][int(_350) & 3])))) * (1.0 / ((-_356) + 1.0)), 0.0, 1.0)));
            }
            float _362 = exp2(fp_c10_1._m0[int(uint(_312) >> uint(2))][_312 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_310)) >> uint(2))][int(_310) & 3], -sqrt(_294), fp_c1_1._m0[1].x), 0.0, 1.0))) * _348;
            _364 = _268 + 1;
            float _366 = fp_c10_1._m0[int(uint(_336) >> uint(2))][_336 & 3] * _362;
            float _368 = _362 * clamp(_308 + (-0.0), 0.0, 1.0);
            float _370 = exp2(log2(clamp(fma(_141, -clamp((-_308) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].x), 0.0, 1.0)) * fp_c6_1._m0[18].y) * (fma(_266, fp_c1_1._m0[1].w, exp2(_260 * log2(clamp(max(fma(_139, -_300, fma(_137, -_298, _135 * (-_296))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0))) * _266) + 0.20000000298023223876953125);
            float _372 = _248 + fma((fp_c10_1._m0[int(uint(int(_330)) >> uint(2))][int(_330) & 3] * _368) * fma(_175, fp_c1_1._m0[1].y, _344 * 0.079577468335628509521484375), _264, _262 * ((_370 * (_366 * fp_c6_1._m0[19].x)) * fp_c6_1._m0[17].w));
            float _374 = _250 + fma((fp_c10_1._m0[int(uint(_332) >> uint(2))][_332 & 3] * _368) * fma(_177, fp_c1_1._m0[1].y, ((_232 + fma(_232, -_338, _338)) * _342) * 0.079577468335628509521484375), _264, _262 * ((_370 * (_366 * fp_c6_1._m0[19].y)) * fp_c6_1._m0[17].w));
            float _376 = _252 + fma((fp_c10_1._m0[int(uint(int(_334)) >> uint(2))][int(_334) & 3] * _368) * fma(_179, fp_c1_1._m0[1].y, ((_234 + fma(_234, -_338, _338)) * _342) * 0.079577468335628509521484375), _264, _262 * ((_370 * (_366 * fp_c6_1._m0[19].z)) * fp_c6_1._m0[17].w));
            _246 = int(uint(_246) >> uint(8));
            _268 = _364;
            _248 = _372;
            _250 = _374;
            _252 = _376;
            _272 = _372;
            _274 = _374;
            _276 = _376;
        } while (!(_364 >= 4));
        _278 = false;
        _254 = _272;
        _256 = _274;
        _258 = _276;
        if ((_246 & 255) == 30)
        {
            float _378 = _71.y;
            float _380 = 1.0 / (fma(_163, fp_c10_1._m0[565].z, fma(_378, fp_c10_1._m0[565].y, _165 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _382 = 1.0 / fp_c10_1._m0[561].y;
            float _384 = _165 + (-fp_c10_1._m0[557].x);
            float _386 = _163 + (-fp_c10_1._m0[557].z);
            float _388 = _386 * fp_c10_1._m0[558].x;
            float _390 = _384 * fp_c10_1._m0[558].z;
            float _392 = (-_165) + fma(_382, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _394 = (-_163) + fma(_382, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _396 = _392 * _392;
            float _398 = fma(_386, _386, _384 * _384);
            float _400 = ((-float(_388 < _390)) + float(_388 > _390)) * fp_c10_1._m0[561].y;
            float _402 = sqrt(fma(_394, _394, _396)) * (-fp_c10_1._m0[558].y);
            float _404 = inversesqrt(fma(_394, _394, fma(_402, _402, _396)));
            bool _406 = fma(_386 * inversesqrt(_398), fp_c10_1._m0[558].z, (_384 * inversesqrt(_398)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _408 = _392 * _404;
            float _410 = _402 * _404;
            float _412 = _394 * _404;
            float _414 = fma(_386, fp_c10_1._m0[558].z, _384 * fp_c10_1._m0[558].x);
            float _416 = _135 + _408;
            float _418 = _137 + _410;
            float _420 = _139 + _412;
            float _422 = inversesqrt(fma(_412, _412, _408 * _408));
            bool _424 = _414 > 0.0;
            float _426 = inversesqrt(fma(_420, _420, fma(_418, _418, _416 * _416)));
            float _428 = _414 + (-fp_c10_1._m0[561].z);
            float _430 = fma(_121, _412, fma(_119, _410, _117 * _408));
            float _432 = _428;
            float _434 = _398;
            if (_424)
            {
                _432 = sqrt(_398);
            }
            float _436 = _432;
            if (!_424)
            {
                _436 = 1.0;
            }
            float _438 = _416 * _426;
            float _440 = _418 * _426;
            float _442 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_384, fma(_400, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_386 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_400 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_384, fma(_400, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_386 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_400 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _444 = _420 * _426;
            if (_406)
            {
                _434 = fma(_442, -_442, fp_c1_1._m0[1].x) * fma(_442, -_442, fp_c1_1._m0[1].x);
            }
            float _446 = clamp(fma(_428, -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_428, -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _448 = _434;
            if (!_406)
            {
                _448 = 1.0;
            }
            float _450 = max(fma(_139, _444, fma(_137, _440, _135 * _438)), fp_c1_1._m0[0].y);
            float _452 = max(fma(_121, _444, fma(_119, _440, _117 * _438)), fp_c1_1._m0[0].y) * max(fma(_121, _444, fma(_119, _440, _117 * _438)), fp_c1_1._m0[0].y);
            float _454 = max(_430, fp_c1_1._m0[0].y);
            float _456 = exp2(_450 * fma(_450, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _458 = (exp2(log2(clamp(fma(_436, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_412 * _422, -fp_c10_1._m0[558].z, (_408 * _422) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_446, -_446, fp_c1_1._m0[1].x) * fma(_446, -_446, fp_c1_1._m0[1].x), _448);
            float _460 = exp2(log2(clamp(fma(_141, -clamp((-_430) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].x), 0.0, 1.0)) * fp_c6_1._m0[18].y) * (fma(_266, fp_c1_1._m0[1].w, _266 * exp2(_260 * log2(clamp(max(fma(_139, -_412, fma(_137, -_410, _135 * (-_408))), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
            float _462 = _458 * clamp(_430 + (-0.0), 0.0, 1.0);
            float _464 = (_224 * (1.0 / (_220 + fma(_220, -_454, _454)))) * ((_205 * (1.0 / max(fma(_209, _452, -_452) + 1.0, fp_c1_1._m0[0].y))) * (_205 * (1.0 / max(fma(_209, _452, -_452) + 1.0, fp_c1_1._m0[0].y))));
            float _466 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_163, fp_c10_1._m0[562].z, fma(_378, fp_c10_1._m0[562].y, _165 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _380, 0.5, 0.5), (-fma((fma(_163, fp_c10_1._m0[563].z, fma(_378, fp_c10_1._m0[563].y, _165 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _380, 0.5, 0.5)) + 1.0)).z > fma((fma(_163, fp_c10_1._m0[564].z, fma(_378, fp_c10_1._m0[564].y, _165 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _380, 0.5, 0.5)) || (_414 <= 0.0));
            _254 = fma(fma(_264, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _462) * fma(_175, fp_c1_1._m0[1].y, ((_230 + fma(_230, -_456, _456)) * _464) * 0.079577468335628509521484375), _262 * ((_460 * (_458 * fp_c6_1._m0[19].x)) * fp_c6_1._m0[17].w)), _466, _272);
            _256 = fma(fma(_264, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _462) * fma(_177, fp_c1_1._m0[1].y, ((_232 + fma(_232, -_456, _456)) * _464) * 0.079577468335628509521484375), _262 * ((_460 * (_458 * fp_c6_1._m0[19].y)) * fp_c6_1._m0[17].w)), _466, _274);
            _258 = fma(fma(_264, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _462) * fma(_179, fp_c1_1._m0[1].y, ((_234 + fma(_234, -_456, _456)) * _464) * 0.079577468335628509521484375), _262 * ((_460 * (_458 * fp_c6_1._m0[19].z)) * fp_c6_1._m0[17].w)), _466, _276);
        }
    }
    float _468 = _71.y;
    float _470 = _165 + (-fp_c3_1._m0[11].w);
    float _472 = _163 + (-fp_c3_1._m0[13].w);
    float _474 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
    float _476 = _468 + (-fp_c3_1._m0[12].w);
    float _478 = clamp(1.0 + (-fp_c6_1._m0[17].w), 0.0, 1.0);
    float _480 = clamp(fma(_183, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _482 = fma(_472, _472, fma(_476, _476, _470 * _470));
    float _484 = clamp(fma(_191, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _486 = exp2(log2(clamp(fma(_141, -clamp((-_218) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].x), 0.0, 1.0)) * fp_c6_1._m0[18].y) * (fma(_474, fp_c1_1._m0[1].w, _474 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_139, fp_c5_1._m0[23].z, fma(_137, fp_c5_1._m0[23].y, _135 * fp_c5_1._m0[23].x)), fp_c1_1._m0[1].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125);
    float _488 = exp2(log2(clamp(sqrt(_482) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_472 * inversesqrt(_482), fp_c5_1._m0[23].z, fma(_476 * inversesqrt(_482), fp_c5_1._m0[23].y, (_470 * inversesqrt(_482)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _490 = fma(_101.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_191, _478 * (fma(_236 * (_230 + fma(_230, -_226, _226)), fp_c1_1._m0[0].w, _175 * 0.3183098733425140380859375) * (_240 * fp_c5_1._m0[5].x)), _480 * ((_486 * (fp_c5_1._m0[5].w * fp_c6_1._m0[19].x)) * fp_c6_1._m0[17].w)) + _254);
    float _492 = fma(_101.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_191, _478 * (fma(_236 * (_232 + fma(_232, -_226, _226)), fp_c1_1._m0[0].w, _177 * 0.3183098733425140380859375) * (_240 * fp_c5_1._m0[5].y)), _480 * ((_486 * (fp_c5_1._m0[5].w * fp_c6_1._m0[19].y)) * fp_c6_1._m0[17].w)) + _256);
    float _494 = fma(_101.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_191, _478 * (fma(_236 * (_234 + fma(_234, -_226, _226)), fp_c1_1._m0[0].w, _179 * 0.3183098733425140380859375) * (_240 * fp_c5_1._m0[5].z)), _480 * ((_486 * (fp_c5_1._m0[5].w * fp_c6_1._m0[19].z)) * fp_c6_1._m0[17].w)) + _258);
    float _496 = clamp(fma(fma(_163, fp_c5_1._m0[14].z, fma(_468, fp_c5_1._m0[14].y, _165 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _498 = fma((-_492) + fp_c5_1._m0[13].y, _496, _492);
    float _500 = fma((-_490) + fp_c5_1._m0[13].x, _496, _490);
    float _502 = fma((-_494) + fp_c5_1._m0[13].z, _496, _494);
    float _504 = clamp((-exp2((clamp(fma(sqrt(_482), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _67.x = fma((-_500) + fma(fma((_488 * fp_c7_1._m0[55].x) * _484, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _504, _500);
    _67.y = fma((-_498) + fma(fma((_488 * fp_c7_1._m0[55].y) * _484, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _504, _498);
    _67.z = fma((-_502) + fma(fma((_488 * fp_c7_1._m0[55].z) * _484, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _504, _502);
    _67.w = clamp(_82 + (-0.0), 0.0, 1.0);
}


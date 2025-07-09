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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_C;
layout(binding = 3) uniform sampler2D fp_tex_tcb_14;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 0) out vec4 _67;
layout(location = 3) in vec4 _69;
layout(location = 5) in vec4 _71;
layout(location = 4) in vec4 _73;
layout(location = 2) in vec4 _75;
uint _6[12];

void main()
{
    bool _284 = false;
    float _82 = _62.x;
    float _84 = _62.y;
    float _86 = texture(fp_tex_tcb_8, vec2(_82, _84)).x;
    bool _90 = _86 <= 0.0;
    int _93 = floatBitsToInt(_82);
    int _95 = floatBitsToInt(_84);
    if (_90)
    {
        discard;
    }
    vec3 _99 = texture(fp_tex_tcb_A, vec2(_82, _84)).xyz;
    float _101 = _99.x;
    float _103 = _99.y;
    float _105 = _99.z;
    vec3 _107 = texture(fp_tex_tcb_14, vec2(_82, _84)).xyz;
    float _109 = _64.x;
    float _111 = _64.y;
    float _113 = _64.z;
    float _115 = fma(_111, _111, _109 * _109);
    int _117 = floatBitsToInt(_115);
    if (_90)
    {
        _93 = 0;
    }
    float _119 = inversesqrt(fma(_113, _113, _115));
    int _121 = floatBitsToInt(_119);
    if (_90)
    {
        _95 = 0;
    }
    if (_90)
    {
        _117 = 0;
    }
    float _123 = _109 * _119;
    float _125 = _111 * _119;
    float _127 = _113 * _119;
    if (_90)
    {
        _121 = 0;
    }
    if (_90)
    {
        _67.x = intBitsToFloat(_93);
        _67.y = intBitsToFloat(_95);
        _67.z = intBitsToFloat(_117);
        _67.w = intBitsToFloat(_121);
        return;
    }
    float _129 = _69.x;
    float _131 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _133 = _69.y;
    float _135 = _69.z;
    float _137 = 1.0 / (_71.z * gl_FragCoord.w);
    float _139 = inversesqrt(fma(_135, _135, fma(_133, _133, _129 * _129)));
    float _141 = _129 * (-_139);
    float _143 = _133 * (-_139);
    float _145 = _135 * (-_139);
    float _147 = fma(_127, _145, fma(_125, _143, _123 * _141));
    float _149 = 1.0 / _73.w;
    float _151 = fma(_123 * (-_147), -2.0, -_141);
    float _153 = fma(_125 * (-_147), -2.0, -_143);
    float _155 = fma(_127 * (-_147), -2.0, -_145);
    float _157 = 1.0 / max(abs(_155), max(abs(_151), abs(_153)));
    float _159 = max(_147, fp_c1_1._m0[0].y);
    vec2 _163 = texture(fp_tex_tcb_2A, vec2(fma(_73.x * _149, 0.5, 0.5), fma(_73.y * _149, -0.5, 0.5))).xy;
    vec2 _165 = texture(fp_tex_tcb_38, vec2(_159, (-_131) + (-0.0))).xy;
    float _167 = _165.x;
    float _169 = _165.y;
    vec3 _171 = texture(fp_tex_tcb_36, vec4(_151 * _157, _153 * _157, _155 * _157, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_131 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _173 = clamp(texture(fp_tex_tcb_C, vec2(_82, _84)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _175 = _75.x;
    float _177 = fma(_131, 0.5, 0.5);
    float _179 = _131 * _131;
    float _181 = fma((-_103) + fp_c6_1._m0[93].y, _173, _103);
    float _183 = _141 + (-fp_c5_1._m0[23].x);
    float _185 = fma((-_101) + fp_c6_1._m0[93].x, _173, _101);
    float _187 = fma((-_105) + fp_c6_1._m0[93].z, _173, _105);
    float _189 = _143 + (-fp_c5_1._m0[23].y);
    float _191 = (_177 * 0.5) * _177;
    float _193 = _145 + (-fp_c5_1._m0[23].z);
    float _195 = _75.z;
    float _197 = inversesqrt(fma(_193, _193, fma(_189, _189, _183 * _183)));
    float _199 = fma(_181, -fp_c6_1._m0[9].x, _181);
    float _201 = _183 * _197;
    float _203 = _123 * _125;
    float _205 = _189 * _197;
    float _207 = _193 * _197;
    float _209 = _125 * _127;
    float _211 = fma(_181 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _213 = _127 * _127;
    float _215 = fma(_185 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _217 = fma(_187 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _219 = max(fma(_145, _207, fma(_143, _205, _141 * _201)), fp_c1_1._m0[0].y);
    float _221 = fma(_185, -fp_c6_1._m0[9].x, _185);
    float _223 = fma(_125, -fp_c5_1._m0[23].y, _123 * (-fp_c5_1._m0[23].x));
    float _225 = _179 * _179;
    float _227 = max(fma(_127, _207, fma(_125, _205, _123 * _201)), fp_c1_1._m0[0].y) * max(fma(_127, _207, fma(_125, _205, _123 * _201)), fp_c1_1._m0[0].y);
    float _229 = _123 * _127;
    int _231 = max(0, min(int(trunc((_195 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _233 = max(fma(_127, -fp_c5_1._m0[23].z, _223), fp_c1_1._m0[0].y);
    float _235 = 1.0 / (_191 + fma(_159, -_191, _159));
    float _237 = exp2(_219 * fma(_219, fp_c1_1._m0[0].z, -6.9831600189208984375));
    uint _240 = uint(int(uint((((int(uint(_231) >> uint(16)) * 20) << 16) + (((_231 & 65535) * 20) + max(0, min(int(trunc((_175 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _242 = fp_c10_1._m0[int(uint(int(_240)) >> uint(2))][int(_240) & 3];
    float _244 = clamp(fma(_127, -fp_c5_1._m0[23].z, _223), 0.0, 1.0);
    float _246 = fma(_123, _123, -(_125 * _125));
    float _248 = (_235 * (1.0 / (_191 + fma(_191, -_233, _233)))) * ((_179 * (1.0 / max(fma(_227, _225, -_227) + 1.0, fp_c1_1._m0[0].y))) * (_179 * (1.0 / max(fma(_227, _225, -_227) + 1.0, fp_c1_1._m0[0].y))));
    float _250 = fma(_187, -fp_c6_1._m0[9].x, _187);
    float _252 = fma(_171.y, fma(_211, _167, _169), max(0.0, fma(_246, fp_c5_1._m0[31].y, (fma(_127, fp_c5_1._m0[26].z, fma(_125, fp_c5_1._m0[26].y, _123 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_229, fp_c5_1._m0[29].w, fma(_213, fp_c5_1._m0[29].z, fma(_209, fp_c5_1._m0[29].y, _203 * fp_c5_1._m0[29].x))))) * fma(_211, -_199, _199));
    float _254 = fma(_171.x, fma(_215, _167, _169), max(0.0, fma(_246, fp_c5_1._m0[31].x, (fma(_127, fp_c5_1._m0[25].z, fma(_125, fp_c5_1._m0[25].y, _123 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_229, fp_c5_1._m0[28].w, fma(_213, fp_c5_1._m0[28].z, fma(_209, fp_c5_1._m0[28].y, _203 * fp_c5_1._m0[28].x))))) * fma(_215, -_221, _221));
    float _256 = fma(_171.z, fma(_217, _167, _169), max(0.0, fma(_246, fp_c5_1._m0[31].z, (fma(_127, fp_c5_1._m0[27].z, fma(_125, fp_c5_1._m0[27].y, _123 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_229, fp_c5_1._m0[30].w, fma(_213, fp_c5_1._m0[30].z, fma(_209, fp_c5_1._m0[30].y, _203 * fp_c5_1._m0[30].x))))) * fma(_217, -_250, _250));
    float _258 = clamp((-fma(max((-_163.x) + 1.0, (-_163.y) + 1.0), clamp(_75.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_71.x * gl_FragCoord.w) * _137, (_71.y * gl_FragCoord.w) * _137)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _260 = floatBitsToInt(_242);
    float _262 = _252;
    float _264 = _254;
    float _266 = _256;
    float _268 = _254;
    float _270 = _252;
    float _272 = _256;
    if (floatBitsToInt(_242) != (-1))
    {
        int _274 = 0;
        float _278;
        float _280;
        float _282;
        int _366;
        do
        {
            int _276 = _260 & 255;
            _278 = _264;
            _280 = _262;
            _282 = _266;
            _284 = uint(_276) >= 30u;
            if (_284)
            {
                break;
            }
            int _286 = _276 << 4;
            uint _288 = uint(int(uint(_286 + 7360) >> uint(2)));
            int _290 = int(_288) + 1;
            uint _292 = uint(int(uint(_286 + 7368) >> uint(2)));
            uint _294 = uint(int(uint(_286 + 6408) >> uint(2)));
            float _296 = (-_175) + fp_c10_1._m0[int(uint(int(_288)) >> uint(2))][int(_288) & 3];
            float _298 = fp_c10_1._m0[int(uint(_290) >> uint(2))][_290 & 3] + (-_75.y);
            float _300 = (-_195) + fp_c10_1._m0[int(uint(int(_292)) >> uint(2))][int(_292) & 3];
            float _302 = fma(_300, _300, fma(_298, _298, _296 * _296));
            float _304 = _296 * inversesqrt(_302);
            float _306 = _298 * inversesqrt(_302);
            float _308 = _300 * inversesqrt(_302);
            float _310 = _141 + _304;
            float _312 = _143 + _306;
            float _314 = _145 + _308;
            uint _316 = uint(int(uint(_286 + 6880) >> uint(2)));
            int _318 = int(_316) + 1;
            float _320 = inversesqrt(fma(_314, _314, fma(_312, _312, _310 * _310)));
            float _322 = _310 * _320;
            float _324 = _312 * _320;
            float _326 = _314 * _320;
            float _328 = fma(_127, _308, fma(_125, _306, _123 * _304));
            uint _330 = uint(int(uint(_286 + 8320) >> uint(2)));
            float _332 = max(_328, fp_c1_1._m0[0].y);
            float _334 = max(fma(_145, _326, fma(_143, _324, _141 * _322)), fp_c1_1._m0[0].y);
            float _336 = max(fma(_127, _326, fma(_125, _324, _123 * _322)), fp_c1_1._m0[0].y) * max(fma(_127, _326, fma(_125, _324, _123 * _322)), fp_c1_1._m0[0].y);
            uint _338 = uint(int(uint(_286 + 6400) >> uint(2)));
            int _340 = int(_338) + 1;
            float _342 = exp2(_334 * fma(_334, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _344 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_330)) >> uint(2))][int(_330) & 3]) != 0;
            float _346 = (_235 * (1.0 / (_191 + fma(_191, -_332, _332)))) * ((_179 * (1.0 / max(fma(_225, _336, -_336) + 1.0, fp_c1_1._m0[0].y))) * (_179 * (1.0 / max(fma(_225, _336, -_336) + 1.0, fp_c1_1._m0[0].y))));
            float _348 = _217 + fma(_217, -_342, _342);
            float _350 = _348;
            if (!_344)
            {
                _350 = 1.0;
            }
            float _352 = _350;
            if (_344)
            {
                uint _354 = uint(int(uint(_286 + 7840) >> uint(2)));
                int _356 = int(_354) + 1;
                uint _358 = uint(int(uint(_286 + 7848) >> uint(2)));
                uint _360 = uint(int(uint(_286 + 6888) >> uint(2)));
                float _362 = fp_c10_1._m0[int(uint(int(_360)) >> uint(2))][int(_360) & 3];
                int _364 = int(_360) + 1;
                _352 = exp2(fp_c10_1._m0[int(uint(_364) >> uint(2))][_364 & 3] * log2(clamp(((-_362) + fma(_308, -fp_c10_1._m0[int(uint(int(_358)) >> uint(2))][int(_358) & 3], fma(_306, -fp_c10_1._m0[int(uint(_356) >> uint(2))][_356 & 3], _304 * (-fp_c10_1._m0[int(uint(int(_354)) >> uint(2))][int(_354) & 3])))) * (1.0 / ((-_362) + 1.0)), 0.0, 1.0)));
            }
            _366 = _274 + 1;
            float _368 = (exp2(fp_c10_1._m0[int(uint(_318) >> uint(2))][_318 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_316)) >> uint(2))][int(_316) & 3], -sqrt(_302), fp_c1_1._m0[1].x), 0.0, 1.0))) * _352) * clamp(_328 + (-0.0), 0.0, 1.0);
            float _370 = fma(fp_c10_1._m0[int(uint(_340) >> uint(2))][_340 & 3] * _368, fma(_199, fp_c1_1._m0[1].y, ((_211 + fma(_211, -_342, _342)) * _346) * 0.079577468335628509521484375), _262);
            float _372 = fma(fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3] * _368, fma(_221, fp_c1_1._m0[1].y, ((_215 + fma(_215, -_342, _342)) * _346) * 0.079577468335628509521484375), _264);
            float _374 = fma(fp_c10_1._m0[int(uint(int(_294)) >> uint(2))][int(_294) & 3] * _368, fma(_250, fp_c1_1._m0[1].y, (_348 * _346) * 0.079577468335628509521484375), _266);
            _260 = int(uint(_260) >> uint(8));
            _274 = _366;
            _262 = _370;
            _264 = _372;
            _266 = _374;
            _278 = _372;
            _280 = _370;
            _282 = _374;
        } while (!(_366 >= 4));
        _284 = false;
        _268 = _278;
        _270 = _280;
        _272 = _282;
        if ((_260 & 255) == 30)
        {
            float _376 = _75.y;
            float _378 = 1.0 / (fma(_195, fp_c10_1._m0[565].z, fma(_376, fp_c10_1._m0[565].y, _175 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _380 = 1.0 / fp_c10_1._m0[561].y;
            float _382 = (-_175) + fma(_380, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _384 = (-_195) + fma(_380, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _386 = _382 * _382;
            float _388 = sqrt(fma(_384, _384, _386)) * (-fp_c10_1._m0[558].y);
            float _390 = inversesqrt(fma(_384, _384, fma(_388, _388, _386)));
            float _392 = _382 * _390;
            float _394 = _388 * _390;
            float _396 = _384 * _390;
            float _398 = _195 + (-fp_c10_1._m0[557].z);
            float _400 = _141 + _392;
            float _402 = _143 + _394;
            float _404 = _145 + _396;
            float _406 = _398 * fp_c10_1._m0[558].x;
            float _408 = _175 + (-fp_c10_1._m0[557].x);
            float _410 = _408 * fp_c10_1._m0[558].z;
            float _412 = inversesqrt(fma(_404, _404, fma(_402, _402, _400 * _400)));
            float _414 = _400 * _412;
            float _416 = _402 * _412;
            float _418 = _404 * _412;
            float _420 = fma(_398, _398, _408 * _408);
            float _422 = ((-float(_406 < _410)) + float(_406 > _410)) * fp_c10_1._m0[561].y;
            float _424 = inversesqrt(fma(_396, _396, _392 * _392));
            float _426 = fma(_398, fp_c10_1._m0[558].z, _408 * fp_c10_1._m0[558].x);
            float _428 = fma(_127, _396, fma(_125, _394, _123 * _392));
            bool _430 = _426 > 0.0;
            float _432 = (_392 * _424) * (-fp_c10_1._m0[558].x);
            float _434 = _432;
            if (_430)
            {
                _434 = sqrt(_420);
            }
            float _436 = _434;
            if (!_430)
            {
                _436 = 1.0;
            }
            float _438 = max(fma(_145, _418, fma(_143, _416, _141 * _414)), fp_c1_1._m0[0].y);
            float _440 = max(_428, fp_c1_1._m0[0].y);
            bool _442 = fma(_398 * inversesqrt(_420), fp_c10_1._m0[558].z, (_408 * inversesqrt(_420)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _444 = clamp(fma(_426 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_426 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _446 = max(fma(_127, _418, fma(_125, _416, _123 * _414)), fp_c1_1._m0[0].y) * max(fma(_127, _418, fma(_125, _416, _123 * _414)), fp_c1_1._m0[0].y);
            float _448 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_408, fma(_422, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_398 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_422 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_408, fma(_422, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_398 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_422 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _450 = _438;
            if (!_442)
            {
                _450 = 1.0;
            }
            float _452 = _450;
            if (_442)
            {
                _452 = fma(_448, -_448, fp_c1_1._m0[1].x) * fma(_448, -_448, fp_c1_1._m0[1].x);
            }
            float _454 = exp2(_438 * fma(_438, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _456 = clamp(_428 + (-0.0), 0.0, 1.0) * ((exp2(log2(clamp(fma(_436, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_396 * _424, -fp_c10_1._m0[558].z, _432) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_444, -_444, fp_c1_1._m0[1].x) * fma(_444, -_444, fp_c1_1._m0[1].x), _452));
            float _458 = (_235 * (1.0 / (_191 + fma(_191, -_440, _440)))) * ((_179 * (1.0 / max(fma(_225, _446, -_446) + 1.0, fp_c1_1._m0[0].y))) * (_179 * (1.0 / max(fma(_225, _446, -_446) + 1.0, fp_c1_1._m0[0].y))));
            float _460 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_195, fp_c10_1._m0[562].z, fma(_376, fp_c10_1._m0[562].y, _175 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _378, 0.5, 0.5), (-fma((fma(_195, fp_c10_1._m0[563].z, fma(_376, fp_c10_1._m0[563].y, _175 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _378, 0.5, 0.5)) + 1.0)).z > fma((fma(_195, fp_c10_1._m0[564].z, fma(_376, fp_c10_1._m0[564].y, _175 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _378, 0.5, 0.5)) || (_426 <= 0.0));
            _268 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _456) * fma(_221, fp_c1_1._m0[1].y, ((_215 + fma(_215, -_454, _454)) * _458) * 0.079577468335628509521484375), _460, _278);
            _270 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _456) * fma(_199, fp_c1_1._m0[1].y, ((_211 + fma(_211, -_454, _454)) * _458) * 0.079577468335628509521484375), _460, _280);
            _272 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _456) * fma(_250, fp_c1_1._m0[1].y, ((_217 + fma(_217, -_454, _454)) * _458) * 0.079577468335628509521484375), _460, _282);
        }
    }
    float _462 = _175 + (-fp_c3_1._m0[11].w);
    float _464 = _75.y;
    float _466 = _195 + (-fp_c3_1._m0[13].w);
    float _468 = fma(_107.x * fp_c6_1._m0[93].x, fp_c6_1._m0[11].x, fma(_258, fma(_248 * (_215 + fma(_215, -_237, _237)), fp_c1_1._m0[0].w, _221 * 0.3183098733425140380859375) * (_244 * fp_c5_1._m0[5].x), _268));
    float _470 = fma(_107.y * fp_c6_1._m0[93].y, fp_c6_1._m0[11].x, fma(_258, fma(_248 * (_211 + fma(_211, -_237, _237)), fp_c1_1._m0[0].w, _199 * 0.3183098733425140380859375) * (_244 * fp_c5_1._m0[5].y), _270));
    float _472 = fma(_107.z * fp_c6_1._m0[93].z, fp_c6_1._m0[11].x, fma(_258, fma(_248 * (_217 + fma(_217, -_237, _237)), fp_c1_1._m0[0].w, _250 * 0.3183098733425140380859375) * (_244 * fp_c5_1._m0[5].z), _272));
    float _474 = _464 + (-fp_c3_1._m0[12].w);
    float _476 = fma(_466, _466, fma(_474, _474, _462 * _462));
    float _478 = clamp(fma(fma(_195, fp_c5_1._m0[14].z, fma(_464, fp_c5_1._m0[14].y, _175 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _480 = exp2(log2(clamp(sqrt(_476) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_466 * inversesqrt(_476), fp_c5_1._m0[23].z, fma(_474 * inversesqrt(_476), fp_c5_1._m0[23].y, (_462 * inversesqrt(_476)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _482 = clamp(fma(_258, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _484 = fma((-_468) + fp_c5_1._m0[13].x, _478, _468);
    float _486 = fma((-_470) + fp_c5_1._m0[13].y, _478, _470);
    float _488 = fma((-_472) + fp_c5_1._m0[13].z, _478, _472);
    float _490 = clamp((-exp2((clamp(fma(sqrt(_476), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _67.x = fma((-_484) + fma(fma(_482 * (_480 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _490, _484);
    _67.y = fma((-_486) + fma(fma(_482 * (_480 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _490, _486);
    _67.z = fma((-_488) + fma(fma(_482 * (_480 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _490, _488);
    _67.w = clamp(_86 + (-0.0), 0.0, 1.0);
}


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

layout(binding = 10, std140) uniform fp_c9
{
    vec4 _m0[4096];
} fp_c9_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 4) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

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
    bool _334 = false;
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
    vec3 _108 = texture(fp_tex_tcb_1C, vec2(_66.z, _66.w)).xyz;
    vec3 _110 = texture(fp_tex_tcb_A, vec2(_88, _90)).xyz;
    float _112 = texture(fp_tex_tcb_1A, vec2(_88, _90)).x;
    float _114 = _68.x;
    float _116 = _68.y;
    float _118 = _68.z;
    float _120 = _70.y;
    float _122 = _70.z;
    float _124 = _70.x;
    float _126 = _70.w;
    float _128 = inversesqrt(fma(_118, _118, fma(_116, _116, _114 * _114)));
    float _130 = _118 * _128;
    float _132 = _114 * _128;
    float _134 = _116 * _128;
    int _137 = floatBitsToInt(_116);
    int _139 = floatBitsToInt(_128);
    if (_96)
    {
        _137 = 0;
    }
    if (_96)
    {
        _139 = 0;
    }
    float _141 = fma(_134, _122, -(_130 * _120));
    float _143 = fma(_130, _124, -(_132 * _122));
    int _145 = floatBitsToInt(_141);
    int _147 = floatBitsToInt(_143);
    if (_96)
    {
        _145 = 0;
    }
    if (_96)
    {
        _147 = 0;
    }
    if (_96)
    {
        _73.x = intBitsToFloat(_145);
        _73.y = intBitsToFloat(_137);
        _73.z = intBitsToFloat(_139);
        _73.w = intBitsToFloat(_147);
        return;
    }
    float _149 = _75.x;
    float _151 = _75.y;
    float _153 = _75.z;
    float _155 = sqrt(clamp((-fma(_102, _102, _104 * _104)) + 1.0, 0.0, 1.0));
    float _157 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _159 = fma(_132, _155, fma(_102, _124, _104 * (_141 * _126)));
    float _161 = fma(_134, _155, fma(_102, _120, _104 * (_143 * _126)));
    float _163 = fma(_130, _155, fma(_102, _122, _104 * (fma(_132, _120, -(_134 * _124)) * _126)));
    float _165 = 1.0 / (_77.z * gl_FragCoord.w);
    float _167 = inversesqrt(fma(_163, _163, fma(_161, _161, _159 * _159)));
    float _169 = inversesqrt(fma(_153, _153, fma(_151, _151, _149 * _149)));
    float _171 = _159 * _167;
    float _173 = _161 * _167;
    float _175 = _149 * (-_169);
    float _177 = _151 * (-_169);
    float _179 = _163 * _167;
    float _181 = _153 * (-_169);
    float _183 = fma(_179, _181, fma(_173, _177, _171 * _175));
    float _185 = 1.0 / _79.w;
    float _187 = max(_183, fp_c1_1._m0[0].z);
    float _189 = fma(_171 * (-_183), -2.0, -_175);
    float _191 = fma(_173 * (-_183), -2.0, -_177);
    float _193 = fma(_179 * (-_183), -2.0, -_181);
    float _195 = 1.0 / max(abs(_193), max(abs(_189), abs(_191)));
    vec2 _197 = texture(fp_tex_tcb_2A, vec2(fma(_79.x * _185, 0.5, 0.5), fma(_79.y * _185, -0.5, 0.5))).xy;
    vec2 _199 = texture(fp_tex_tcb_38, vec2(_187, (-_157) + (-0.0))).xy;
    float _201 = _199.x;
    float _203 = _199.y;
    vec3 _205 = texture(fp_tex_tcb_36, vec4(_189 * _195, _191 * _195, _193 * _195, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_157 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _207 = _81.y;
    float _209 = _81.x;
    float _211 = _108.y * _110.y;
    float _213 = _181 * _181;
    float _215 = _175 + (-fp_c5_1._m0[23].x);
    float _217 = _81.z;
    float _219 = _108.x * _110.x;
    float _221 = _177 * _181;
    float _223 = _175 * _177;
    float _225 = _108.z * _110.z;
    float _227 = _207 + (-fp_c9_1._m0[32].w);
    float _229 = _175 * _181;
    float _231 = _227;
    if (_207 < fp_c9_1._m0[32].w)
    {
        _231 = _227 * (-5.0);
    }
    float _233 = _177 + (-fp_c5_1._m0[23].y);
    float _235 = _181 + (-fp_c5_1._m0[23].z);
    int _237 = max(0, min(int(trunc((_217 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _239 = inversesqrt(fma(_235, _235, fma(_233, _233, _215 * _215)));
    float _241 = _171 * _173;
    float _243 = _173 * _179;
    float _245 = _215 * _239;
    float _247 = _233 * _239;
    float _249 = _235 * _239;
    float _251 = fma(_175, _175, -(_177 * _177));
    float _253 = _179 * _179;
    float _255 = _171 * _179;
    float _257 = max(fma(_181, _249, fma(_177, _247, _175 * _245)), fp_c1_1._m0[0].z);
    float _259 = fma(_171, _171, -(_173 * _173));
    float _261 = fma(_157, 0.5, 0.5);
    float _263 = _157 * _157;
    float _265 = fma(fp_c7_1._m0[46].x, fp_c9_1._m0[33].x, fp_c5_1._m0[5].w * fp_c7_1._m0[46].w) * max(0.0, ((-_173) + 1.2000000476837158203125) * (clamp(fma(_231, -(1.0 / fma(clamp((-_173) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].y), 0.0, 1.0) * clamp(fma(_231, -(1.0 / fma(clamp((-_173) + (-0.0), 0.0, 1.0), fp_c7_1._m0[46].z, fp_c7_1._m0[46].y)), fp_c1_1._m0[0].y), 0.0, 1.0)));
    float _267 = max(fma(_179, _249, fma(_173, _247, _171 * _245)), fp_c1_1._m0[0].z) * max(fma(_179, _249, fma(_173, _247, _171 * _245)), fp_c1_1._m0[0].z);
    float _269 = fma(_173, -fp_c5_1._m0[23].y, _171 * (-fp_c5_1._m0[23].x));
    float _271 = (_261 * 0.5) * _261;
    float _273 = max(fma(_179, -fp_c5_1._m0[23].z, _269), fp_c1_1._m0[0].z);
    uint _276 = uint(int(uint((((int(uint(_237) >> uint(16)) * 20) << 16) + (((_237 & 65535) * 20) + max(0, min(int(trunc((_209 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _278 = fp_c10_1._m0[int(uint(int(_276)) >> uint(2))][int(_276) & 3];
    float _280 = 1.0 / (_271 + fma(_187, -_271, _187));
    float _282 = fma(_219 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _284 = exp2(_257 * fma(_257, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _286 = exp2(log2(clamp((-_183) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
    float _288 = fma(_211 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _290 = fma(_225 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _292 = fma(_112, (max(0.0, fma(_251, fp_c5_1._m0[31].y, (fma(_181, -fp_c5_1._m0[26].z, fma(_177, -fp_c5_1._m0[26].y, _175 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_229, fp_c5_1._m0[29].w, fma(_213, fp_c5_1._m0[29].z, fma(_221, fp_c5_1._m0[29].y, _223 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[45].y) * _286, fma(_211, -fp_c6_1._m0[9].x, _211));
    float _294 = fma(_112, (max(0.0, fma(_251, fp_c5_1._m0[31].x, fma(_229, fp_c5_1._m0[28].w, fma(_213, fp_c5_1._m0[28].z, fma(_221, fp_c5_1._m0[28].y, _223 * fp_c5_1._m0[28].x))) + (fma(_181, -fp_c5_1._m0[25].z, fma(_177, -fp_c5_1._m0[25].y, _175 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w))) * fp_c6_1._m0[45].x) * _286, fma(_219, -fp_c6_1._m0[9].x, _219));
    float _296 = (_280 * (1.0 / (_271 + fma(_271, -_273, _273)))) * ((_263 * (1.0 / max(fma(_267, _263 * _263, -_267) + 1.0, fp_c1_1._m0[0].z))) * (_263 * (1.0 / max(fma(_267, _263 * _263, -_267) + 1.0, fp_c1_1._m0[0].z))));
    float _298 = fma(_112, (max(0.0, fma(_251, fp_c5_1._m0[31].z, (fma(_181, -fp_c5_1._m0[27].z, fma(_177, -fp_c5_1._m0[27].y, _175 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_229, fp_c5_1._m0[30].w, fma(_213, fp_c5_1._m0[30].z, fma(_221, fp_c5_1._m0[30].y, _223 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[45].z) * _286, fma(_225, -fp_c6_1._m0[9].x, _225));
    float _300 = clamp(fma(_179, -fp_c5_1._m0[23].z, _269), 0.0, 1.0);
    float _302 = fma(_205.y, fma(_288, _201, _203), fma(_265, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].y, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].y, fp_c9_1._m0[32].y * fp_c7_1._m0[70].y)), max(0.0, fma(_259, fp_c5_1._m0[31].y, (fma(_179, fp_c5_1._m0[26].z, fma(_173, fp_c5_1._m0[26].y, _171 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_255, fp_c5_1._m0[29].w, fma(_253, fp_c5_1._m0[29].z, fma(_243, fp_c5_1._m0[29].y, _241 * fp_c5_1._m0[29].x)))))) * fma(_292, -_288, _292));
    float _304 = fma(_205.x, fma(_282, _201, _203), fma(_265, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].x, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].x, fp_c9_1._m0[32].y * fp_c7_1._m0[70].x)), max(0.0, fma(_259, fp_c5_1._m0[31].x, (fma(_179, fp_c5_1._m0[25].z, fma(_173, fp_c5_1._m0[25].y, _171 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_255, fp_c5_1._m0[28].w, fma(_253, fp_c5_1._m0[28].z, fma(_243, fp_c5_1._m0[28].y, _241 * fp_c5_1._m0[28].x)))))) * fma(_294, -_282, _294));
    float _306 = fma(_205.z, fma(_290, _201, _203), fma(_265, fma(fp_c9_1._m0[32].z, fp_c7_1._m0[71].z, fma(fp_c9_1._m0[32].x, fp_c7_1._m0[69].z, fp_c9_1._m0[32].y * fp_c7_1._m0[70].z)), max(0.0, fma(_259, fp_c5_1._m0[31].z, (fma(_179, fp_c5_1._m0[27].z, fma(_173, fp_c5_1._m0[27].y, _171 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_255, fp_c5_1._m0[30].w, fma(_253, fp_c5_1._m0[30].z, fma(_243, fp_c5_1._m0[30].y, _241 * fp_c5_1._m0[30].x)))))) * fma(_298, -_290, _298));
    float _308 = clamp((-fma(max((-_197.x) + 1.0, (-_197.y) + 1.0), clamp(_81.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_77.x * gl_FragCoord.w) * _165, (_77.y * gl_FragCoord.w) * _165)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _310 = floatBitsToInt(_278);
    float _312 = _304;
    float _314 = _302;
    float _316 = _306;
    float _318 = _304;
    float _320 = _302;
    float _322 = _306;
    if (floatBitsToInt(_278) != (-1))
    {
        int _324 = 0;
        float _328;
        float _330;
        float _332;
        int _416;
        do
        {
            int _326 = _310 & 255;
            _328 = _312;
            _330 = _314;
            _332 = _316;
            _334 = uint(_326) >= 30u;
            if (_334)
            {
                break;
            }
            int _336 = _326 << 4;
            uint _338 = uint(int(uint(_336 + 7360) >> uint(2)));
            int _340 = int(_338) + 1;
            uint _342 = uint(int(uint(_336 + 7368) >> uint(2)));
            float _344 = (-_209) + fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3];
            float _346 = (-_207) + fp_c10_1._m0[int(uint(_340) >> uint(2))][_340 & 3];
            float _348 = (-_217) + fp_c10_1._m0[int(uint(int(_342)) >> uint(2))][int(_342) & 3];
            float _350 = fma(_348, _348, fma(_346, _346, _344 * _344));
            float _352 = _344 * inversesqrt(_350);
            float _354 = _346 * inversesqrt(_350);
            float _356 = _348 * inversesqrt(_350);
            float _358 = _175 + _352;
            float _360 = _177 + _354;
            float _362 = _181 + _356;
            uint _364 = uint(int(uint(_336 + 6880) >> uint(2)));
            int _366 = int(_364) + 1;
            float _368 = inversesqrt(fma(_362, _362, fma(_360, _360, _358 * _358)));
            float _370 = _358 * _368;
            float _372 = _360 * _368;
            float _374 = _362 * _368;
            uint _376 = uint(int(uint(_336 + 8320) >> uint(2)));
            float _378 = max(fma(_181, _374, fma(_177, _372, _175 * _370)), fp_c1_1._m0[0].z);
            float _380 = fma(_179, _356, fma(_173, _354, _171 * _352));
            float _382 = max(fma(_179, _374, fma(_173, _372, _171 * _370)), fp_c1_1._m0[0].z) * max(fma(_179, _374, fma(_173, _372, _171 * _370)), fp_c1_1._m0[0].z);
            float _384 = max(_380, fp_c1_1._m0[0].z);
            float _386 = fp_c10_1._m0[int(uint(_366) >> uint(2))][_366 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_364)) >> uint(2))][int(_364) & 3], -sqrt(_350), fp_c1_1._m0[0].y), 0.0, 1.0));
            uint _388 = uint(int(uint(_336 + 6400) >> uint(2)));
            int _390 = int(_388) + 1;
            uint _392 = uint(int(uint(_336 + 6408) >> uint(2)));
            float _394 = exp2(_378 * fma(_378, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _396 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_376)) >> uint(2))][int(_376) & 3]) != 0;
            float _398 = ((_263 * (1.0 / max(fma(_263 * _263, _382, -_382) + 1.0, fp_c1_1._m0[0].z))) * (_263 * (1.0 / max(fma(_263 * _263, _382, -_382) + 1.0, fp_c1_1._m0[0].z)))) * (_280 * (1.0 / (_271 + fma(_271, -_384, _384))));
            float _400 = _386;
            if (!_396)
            {
                _400 = 1.0;
            }
            float _402 = _400;
            if (_396)
            {
                uint _404 = uint(int(uint(_336 + 7840) >> uint(2)));
                int _406 = int(_404) + 1;
                uint _408 = uint(int(uint(_336 + 7848) >> uint(2)));
                uint _410 = uint(int(uint(_336 + 6888) >> uint(2)));
                float _412 = fp_c10_1._m0[int(uint(int(_410)) >> uint(2))][int(_410) & 3];
                int _414 = int(_410) + 1;
                _402 = exp2(fp_c10_1._m0[int(uint(_414) >> uint(2))][_414 & 3] * log2(clamp(((-_412) + fma(_356, -fp_c10_1._m0[int(uint(int(_408)) >> uint(2))][int(_408) & 3], fma(_354, -fp_c10_1._m0[int(uint(_406) >> uint(2))][_406 & 3], _352 * (-fp_c10_1._m0[int(uint(int(_404)) >> uint(2))][int(_404) & 3])))) * (1.0 / ((-_412) + 1.0)), 0.0, 1.0)));
            }
            _416 = _324 + 1;
            float _418 = clamp(_380 + (-0.0), 0.0, 1.0) * (exp2(_386) * _402);
            float _420 = fma(fp_c10_1._m0[int(uint(int(_388)) >> uint(2))][int(_388) & 3] * _418, fma(_294, fp_c1_1._m0[1].y, ((_282 + fma(_282, -_394, _394)) * _398) * 0.079577468335628509521484375), _312);
            float _422 = fma(fp_c10_1._m0[int(uint(_390) >> uint(2))][_390 & 3] * _418, fma(_292, fp_c1_1._m0[1].y, ((_288 + fma(_288, -_394, _394)) * _398) * 0.079577468335628509521484375), _314);
            float _424 = fma(fp_c10_1._m0[int(uint(int(_392)) >> uint(2))][int(_392) & 3] * _418, fma(_298, fp_c1_1._m0[1].y, ((_290 + fma(_290, -_394, _394)) * _398) * 0.079577468335628509521484375), _316);
            _310 = int(uint(_310) >> uint(8));
            _324 = _416;
            _312 = _420;
            _314 = _422;
            _316 = _424;
            _328 = _420;
            _330 = _422;
            _332 = _424;
        } while (!(_416 >= 4));
        _334 = false;
        _318 = _328;
        _320 = _330;
        _322 = _332;
        if ((_310 & 255) == 30)
        {
            float _426 = 1.0 / (fma(_217, fp_c10_1._m0[565].z, fma(_207, fp_c10_1._m0[565].y, _209 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _428 = 1.0 / fp_c10_1._m0[561].y;
            float _430 = _209 + (-fp_c10_1._m0[557].x);
            float _432 = _217 + (-fp_c10_1._m0[557].z);
            float _434 = _430 * fp_c10_1._m0[558].z;
            float _436 = (-_209) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_428, fp_c10_1._m0[557].x);
            float _438 = (-_217) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_428, fp_c10_1._m0[557].z);
            float _440 = _436 * _436;
            float _442 = _432 * fp_c10_1._m0[558].x;
            float _444 = sqrt(fma(_438, _438, _440)) * (-fp_c10_1._m0[558].y);
            float _446 = ((-float(_442 < _434)) + float(_442 > _434)) * fp_c10_1._m0[561].y;
            float _448 = inversesqrt(fma(_438, _438, fma(_444, _444, _440)));
            float _450 = _436 * _448;
            float _452 = _444 * _448;
            float _454 = _438 * _448;
            float _456 = _175 + _450;
            float _458 = _177 + _452;
            float _460 = _181 + _454;
            float _462 = inversesqrt(fma(_460, _460, fma(_458, _458, _456 * _456)));
            float _464 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_430, fma(_446, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_432 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_446 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_430, fma(_446, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_432 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_446 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _466 = _456 * _462;
            float _468 = _460 * _462;
            float _470 = _458 * _462;
            float _472 = fma(_432, _432, _430 * _430);
            float _474 = fma(_179, _454, fma(_173, _452, _171 * _450));
            float _476 = inversesqrt(fma(_454, _454, _450 * _450));
            float _478 = fma(_432, fp_c10_1._m0[558].z, _430 * fp_c10_1._m0[558].x);
            float _480 = max(_474, fp_c1_1._m0[0].z);
            bool _482 = _478 > 0.0;
            float _484 = max(fma(_179, _468, fma(_173, _470, _171 * _466)), fp_c1_1._m0[0].z) * max(fma(_179, _468, fma(_173, _470, _171 * _466)), fp_c1_1._m0[0].z);
            float _486 = _476;
            if (_482)
            {
                _486 = sqrt(_472);
            }
            float _488 = _486;
            if (!_482)
            {
                _488 = 1.0;
            }
            float _490 = max(fma(_181, _468, fma(_177, _470, _175 * _466)), fp_c1_1._m0[0].z);
            bool _492 = fma(_432 * inversesqrt(_472), fp_c10_1._m0[558].z, (_430 * inversesqrt(_472)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _494 = clamp(fma(_478 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].y), 0.0, 1.0) * clamp(fma(_478 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].y), 0.0, 1.0);
            float _496 = fma(_464, -_464, fp_c1_1._m0[0].y);
            float _498 = exp2(_490 * fma(_490, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _500 = _496;
            if (_492)
            {
                _500 = _496 * _496;
            }
            float _502 = _500;
            if (!_492)
            {
                _502 = 1.0;
            }
            float _504 = (_280 * (1.0 / (_271 + fma(_271, -_480, _480)))) * ((_263 * (1.0 / max(fma(_263 * _263, _484, -_484) + 1.0, fp_c1_1._m0[0].z))) * (_263 * (1.0 / max(fma(_263 * _263, _484, -_484) + 1.0, fp_c1_1._m0[0].z))));
            float _506 = (min(fma(_494, -_494, fp_c1_1._m0[0].y) * fma(_494, -_494, fp_c1_1._m0[0].y), _502) * (exp2(log2(clamp(fma(_488, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_454 * _476, -fp_c10_1._m0[558].z, (_450 * _476) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_474 + (-0.0), 0.0, 1.0);
            float _508 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_217, fp_c10_1._m0[562].z, fma(_207, fp_c10_1._m0[562].y, _209 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _426, 0.5, 0.5), (-fma((fma(_217, fp_c10_1._m0[563].z, fma(_207, fp_c10_1._m0[563].y, _209 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _426, 0.5, 0.5)) + 1.0)).z > fma((fma(_217, fp_c10_1._m0[564].z, fma(_207, fp_c10_1._m0[564].y, _209 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _426, 0.5, 0.5)) || (_478 <= 0.0));
            _318 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _506) * fma(_294, fp_c1_1._m0[1].y, ((_282 + fma(_282, -_498, _498)) * _504) * 0.079577468335628509521484375), _508, _328);
            _320 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _506) * fma(_292, fp_c1_1._m0[1].y, ((_288 + fma(_288, -_498, _498)) * _504) * 0.079577468335628509521484375), _508, _330);
            _322 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _506) * fma(_298, fp_c1_1._m0[1].y, ((_290 + fma(_290, -_498, _498)) * _504) * 0.079577468335628509521484375), _508, _332);
        }
    }
    float _510 = _209 + (-fp_c3_1._m0[11].w);
    float _512 = _207 + (-fp_c3_1._m0[12].w);
    float _514 = _217 + (-fp_c3_1._m0[13].w);
    float _516 = fma(_308, fma(_296 * (_282 + fma(_282, -_284, _284)), fp_c1_1._m0[1].x, _294 * 0.3183098733425140380859375) * (_300 * fp_c5_1._m0[5].x), _318);
    float _518 = fma(_308, fma(_296 * (_288 + fma(_288, -_284, _284)), fp_c1_1._m0[1].x, _292 * 0.3183098733425140380859375) * (_300 * fp_c5_1._m0[5].y), _320);
    float _520 = fma(_308, fma(_296 * (_290 + fma(_290, -_284, _284)), fp_c1_1._m0[1].x, _298 * 0.3183098733425140380859375) * (_300 * fp_c5_1._m0[5].z), _322);
    float _522 = fma(_514, _514, fma(_512, _512, _510 * _510));
    float _524 = clamp(fma(fma(_217, fp_c5_1._m0[14].z, fma(_207, fp_c5_1._m0[14].y, _209 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _526 = exp2(log2(clamp(sqrt(_522) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_514 * inversesqrt(_522), fp_c5_1._m0[23].z, fma(_512 * inversesqrt(_522), fp_c5_1._m0[23].y, (_510 * inversesqrt(_522)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _528 = clamp(fma(_308, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _530 = fma((-_516) + fp_c5_1._m0[13].x, _524, _516);
    float _532 = fma((-_518) + fp_c5_1._m0[13].y, _524, _518);
    float _534 = fma((-_520) + fp_c5_1._m0[13].z, _524, _520);
    float _536 = clamp((-exp2((clamp(fma(sqrt(_522), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _73.x = fma((-_530) + fma(fma(_528 * (_526 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _536, _530);
    _73.y = fma((-_532) + fma(fma(_528 * (_526 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _536, _532);
    _73.z = fma((-_534) + fma(fma(_528 * (_526 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _536, _534);
    _73.w = clamp(_92 + (-0.0), 0.0, 1.0);
}


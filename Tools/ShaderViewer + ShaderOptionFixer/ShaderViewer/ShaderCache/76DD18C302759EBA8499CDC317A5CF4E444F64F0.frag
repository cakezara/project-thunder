#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 3) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2C;
layout(binding = 6) uniform sampler2DArrayShadow fp_tex_tcb_2E;
layout(binding = 7) uniform sampler2D fp_tex_tcb_30;
layout(binding = 8) uniform sampler2D fp_tex_tcb_32;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;

layout(location = 0) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 3) in vec4 _66;
layout(location = 6) in vec4 _68;
layout(location = 5) in vec4 _70;
layout(location = 4) in vec4 _72;
layout(location = 8) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 9) in vec4 _78;
layout(location = 10) in vec4 _80;
layout(location = 7) in vec4 _82;
layout(location = 0) out vec4 _85;

void main()
{
    float _92 = _62.x;
    float _94 = _62.y;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    float _104 = _64.x;
    float _106 = _64.y;
    float _108 = _64.z;
    float _110 = _66.y;
    float _112 = _66.z;
    float _114 = _66.x;
    float _116 = _66.w;
    float _118 = inversesqrt(fma(_108, _108, fma(_106, _106, _104 * _104)));
    float _120 = _108 * _118;
    float _122 = _104 * _118;
    float _124 = _106 * _118;
    float _126 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _128 = fma(_122, _126, fma(_100, _114, _102 * (fma(_124, _112, -(_120 * _110)) * _116)));
    float _130 = fma(_124, _126, fma(_100, _110, _102 * (fma(_120, _114, -(_122 * _112)) * _116)));
    float _132 = fma(_120, _126, fma(_100, _112, _102 * (fma(_122, _110, -(_124 * _114)) * _116)));
    float _134 = 1.0 / _68.w;
    float _136 = inversesqrt(fma(_132, _132, fma(_130, _130, _128 * _128)));
    float _138 = fma(_68.x * _134, 0.5, 0.5);
    float _140 = _132 * _136;
    float _142 = _128 * _136;
    float _144 = fma(_68.y * _134, -0.5, 0.5);
    float _146 = _120 + (-_140);
    float _148 = _122 + (-_142);
    float _150 = fma(_148, -fp_c6_1._m0[0].z, _138);
    float _152 = fma(_146 * (-fp_c6_1._m0[0].z), -fp_c3_1._m0[15].z, _144);
    float _154 = texture(fp_tex_tcb_32, vec2(_150, _152)).x;
    float _156 = gl_FragCoord.z;
    float _158 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    vec3 _162 = texture(fp_tex_tcb_1C, vec2(_62.z, _62.w)).xyz;
    float _164 = _162.x;
    float _166 = _162.y;
    float _168 = _162.z;
    bool _172 = _154 > _156;
    float _174 = _154;
    float _176 = _156;
    if (_172)
    {
        _174 = _150;
    }
    float _178 = _174;
    if (!_172)
    {
        _176 = _144;
    }
    vec3 _180 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _182 = _180.x;
    float _184 = _180.y;
    float _186 = _180.z;
    float _188 = _176;
    float _190 = _184;
    if (_172)
    {
        _188 = _152;
    }
    if (!_172)
    {
        _178 = _138;
    }
    vec3 _192 = texture(fp_tex_tcb_1E, vec2(_92, _94)).xyz;
    vec3 _194 = textureLod(fp_tex_tcb_30, vec2(_178, _188), _158).xyz;
    float _196 = _194.x;
    float _198 = _194.y;
    float _200 = _194.z;
    float _202 = _70.x;
    float _204 = _70.y;
    float _206 = _70.z;
    float _208 = _130 * _136;
    float _210 = _72.w;
    float _212 = inversesqrt(fma(_206, _206, fma(_204, _204, _202 * _202)));
    float _214 = _202 * (-_212);
    float _216 = _204 * (-_212);
    float _218 = _206 * (-_212);
    float _220 = _214 + (-fp_c5_1._m0[23].x);
    float _222 = _216 + (-fp_c5_1._m0[23].y);
    float _224 = _218 + (-fp_c5_1._m0[23].z);
    float _226 = fma(_140, _218, fma(_208, _216, _142 * _214));
    float _228 = inversesqrt(fma(_224, _224, fma(_222, _222, _220 * _220)));
    float _230 = _158 * _158;
    float _232 = float((abs(((-_210) > fp_c3_1._m0[58].z) ? (-1) : 0) + abs(((-_210) > fp_c3_1._m0[58].x) ? (-1) : 0)) + abs(((-_210) > fp_c3_1._m0[58].y) ? (-1) : 0));
    float _234 = _220 * _228;
    float _236 = _222 * _228;
    float _238 = _224 * _228;
    bool _240 = _232 == 0.0;
    float _242 = fma(_158, 0.5, 0.5);
    float _244 = fma(_140, -fp_c5_1._m0[23].z, fma(_208, -fp_c5_1._m0[23].y, _142 * (-fp_c5_1._m0[23].x)));
    float _246 = max(_244, fp_c1_1._m0[0].z);
    float _248 = max(fma(_140, _238, fma(_208, _236, _142 * _234)), fp_c1_1._m0[0].z) * max(fma(_140, _238, fma(_208, _236, _142 * _234)), fp_c1_1._m0[0].z);
    float _250 = clamp(exp2(log2(clamp(max(_226, fp_c1_1._m0[0].y) + (-0.0), 0.0, 1.0)) * fp_c6_1._m0[42].x) * fp_c6_1._m0[42].y, 0.0, 1.0);
    float _252 = (_242 * 0.5) * _242;
    float _254 = fma(_124 + (-_208), _250, _208);
    float _256 = fma(_148, _250, _142);
    float _258 = fma(_146, _250, _140);
    float _260 = _256 * _254;
    float _262 = _254 * _258;
    float _264 = _258 * _258;
    float _266 = fma(_142 * (-_226), -2.0, -_214);
    float _268 = fma(_208 * (-_226), -2.0, -_216);
    float _270 = _256 * _258;
    float _272 = fma(_256, _256, -(_254 * _254));
    float _274 = fma(_140 * (-_226), -2.0, -_218);
    float _276 = max(fma(_218, _238, fma(_216, _236, _214 * _234)), fp_c1_1._m0[0].z);
    float _278 = 1.0 / max(abs(_274), max(abs(_266), abs(_268)));
    float _280 = ((1.0 / (_252 + fma(max(_226, fp_c1_1._m0[0].z), -_252, max(_226, fp_c1_1._m0[0].z)))) * (1.0 / (_252 + fma(_252, -_246, _246)))) * ((_230 * (1.0 / max(fma(_248, _230 * _230, -_248) + 1.0, fp_c1_1._m0[0].z))) * (_230 * (1.0 / max(fma(_248, _230 * _230, -_248) + 1.0, fp_c1_1._m0[0].z))));
    float _282 = _164 * fp_c6_1._m0[82].x;
    float _284 = _166 * fp_c6_1._m0[82].y;
    float _286 = max(0.0, fma(_272, fp_c5_1._m0[31].x, (fma(_258, fp_c5_1._m0[25].z, fma(_254, fp_c5_1._m0[25].y, _256 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_270, fp_c5_1._m0[28].w, fma(_264, fp_c5_1._m0[28].z, fma(_262, fp_c5_1._m0[28].y, _260 * fp_c5_1._m0[28].x)))));
    float _288 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _290 = fma(_182, -fp_c6_1._m0[9].x, _182);
    float _292 = fma(_184, -fp_c6_1._m0[9].x, _184);
    float _294 = fma(_250, _282 + (-_290), _290);
    float _296 = fma(_250, _284 + (-_292), _292);
    float _298 = fma(_184 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _300 = fma(_182 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _302 = max(0.0, fma(_272, fp_c5_1._m0[31].y, (fma(_258, fp_c5_1._m0[26].z, fma(_254, fp_c5_1._m0[26].y, _256 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_270, fp_c5_1._m0[29].w, fma(_264, fp_c5_1._m0[29].z, fma(_262, fp_c5_1._m0[29].y, _260 * fp_c5_1._m0[29].x))))) * fma(_296, -_298, _296);
    float _304 = clamp(_76.w, 0.0, 1.0);
    float _306 = _286;
    float _308 = _302;
    if (_240)
    {
        _306 = _78.w;
    }
    float _310 = _306;
    if (!_240)
    {
        _310 = _80.w;
    }
    float _312 = 5.5;
    if (_240)
    {
        _190 = _78.x;
    }
    float _314 = _190;
    if (_240)
    {
        _308 = _78.z;
    }
    float _316 = 1.0 / (_74.w * gl_FragCoord.w);
    float _318 = _308;
    if (_240)
    {
        _312 = _78.y;
    }
    float _320 = _312;
    if (!_240)
    {
        _314 = _80.x;
    }
    if (!_240)
    {
        _320 = _80.y;
    }
    if (!_240)
    {
        _318 = _80.z;
    }
    float _322 = 1.0 / _310;
    float _324 = 1.0 / (_82.z * gl_FragCoord.w);
    vec2 _326 = texture(fp_tex_tcb_2C, vec2((_74.x * gl_FragCoord.w) * _316, (_74.y * gl_FragCoord.w) * _316)).xy;
    float _328 = _326.x;
    vec3 _330 = texture(fp_tex_tcb_36, vec4(_266 * _278, _268 * _278, _274 * _278, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_288 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _332 = texture(fp_tex_tcb_38, vec2(max(_226, fp_c1_1._m0[0].z), (-_288) + (-0.0))).xy;
    float _334 = _332.x;
    float _336 = _332.y;
    float _338 = exp2(_276 * fma(_276, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _340 = fma(_186 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _342 = _168 * fp_c6_1._m0[82].z;
    float _344 = fma(_186, -fp_c6_1._m0[9].x, _186);
    float _346 = fma(_250, _342 + (-_344), _344);
    float _348 = _72.y;
    float _350 = _72.x;
    float _352 = _72.z;
    float _354 = clamp(_74.z, 0.0, 1.0);
    float _356 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
    float _358 = _350 + (-fp_c3_1._m0[11].w);
    float _360 = _348 + (-fp_c3_1._m0[12].w);
    float _362 = (fma(_356, fp_c1_1._m0[1].x, exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_218, fp_c5_1._m0[23].z, fma(_216, fp_c5_1._m0[23].y, _214 * fp_c5_1._m0[23].x)), fp_c1_1._m0[0].y) + (-0.0), 0.0, 1.0))) * _356) + 0.20000000298023223876953125) * exp2(log2(clamp(fma(_226, -clamp((-_244) + (-0.0), 0.0, 1.0), fp_c1_1._m0[1].y), 0.0, 1.0)) * fp_c6_1._m0[18].y);
    float _364 = _352 + (-fp_c3_1._m0[13].w);
    float _366 = fma(_364, _364, fma(_360, _360, _358 * _358));
    float _368 = clamp(_244 + (-0.0), 0.0, 1.0);
    float _370 = fma(_250, -fp_c6_1._m0[17].w, fp_c6_1._m0[17].w);
    float _372 = clamp((-_370) + 1.0, 0.0, 1.0);
    float _374 = clamp(fma(fma(_352, fp_c5_1._m0[14].z, fma(_348, fp_c5_1._m0[14].y, _350 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _376 = fma(_328, -_328, _326.y);
    float _378 = exp2(log2(clamp(sqrt(_366) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_364 * inversesqrt(_366), fp_c5_1._m0[23].z, fma(_360 * inversesqrt(_366), fp_c5_1._m0[23].y, (_358 * inversesqrt(_366)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _380 = (-max(min(_376 * (1.0 / fma((-_328) + _354, (-_328) + _354, _376)), 1.0), float(_354 <= _328))) + 1.0;
    float _382 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _384 = clamp(fma(_380, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _386 = clamp((-(max(_380, (-texture(fp_tex_tcb_2E, vec4(vec3(_322 * _314, _322 * _320, float(int(clamp(uint(max(roundEven(_232), 0.0)), 0u, 65535u)))), _322 * _318))) + 1.0) + fma(texture(fp_tex_tcb_28, vec2((_82.x * gl_FragCoord.w) * _324, (_82.y * gl_FragCoord.w) * _324)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _388 = clamp(fma(_386, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _390 = fma((_164 + _192.x) * fp_c6_1._m0[92].x, _382, fma(_386, ((_368 * fp_c5_1._m0[5].x) * fma(_294 * 0.3183098733425140380859375, _304, ((_300 + fma(_300, -_338, _338)) * _280) * 0.079577468335628509521484375)) * _372, (_370 * (_362 * (_282 * fp_c5_1._m0[5].w))) * _384) + ((fma(_300, _334, _336) * _330.x) + fma(_304, fma(sqrt(_182), -_196, _286 * fma(_294, -_300, _294)), sqrt(_182) * _196)));
    float _392 = fma((_168 + _192.z) * fp_c6_1._m0[92].z, _382, fma(_386, ((_368 * fp_c5_1._m0[5].z) * fma(_346 * 0.3183098733425140380859375, _304, ((_340 + fma(_340, -_338, _338)) * _280) * 0.079577468335628509521484375)) * _372, (_370 * (_362 * (_342 * fp_c5_1._m0[5].w))) * _384) + ((fma(_340, _334, _336) * _330.z) + fma(_304, fma(sqrt(_186), -_200, max(0.0, fma(_272, fp_c5_1._m0[31].z, (fma(_258, fp_c5_1._m0[27].z, fma(_254, fp_c5_1._m0[27].y, _256 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_270, fp_c5_1._m0[30].w, fma(_264, fp_c5_1._m0[30].z, fma(_262, fp_c5_1._m0[30].y, _260 * fp_c5_1._m0[30].x))))) * fma(_346, -_340, _346)), sqrt(_186) * _200)));
    float _394 = fma((_166 + _192.y) * fp_c6_1._m0[92].y, _382, fma(_386, ((_368 * fp_c5_1._m0[5].y) * fma(_296 * 0.3183098733425140380859375, _304, ((_298 + fma(_298, -_338, _338)) * _280) * 0.079577468335628509521484375)) * _372, (_370 * (_362 * (_284 * fp_c5_1._m0[5].w))) * _384) + ((fma(_298, _334, _336) * _330.y) + fma(_304, fma(sqrt(_184), -_198, _302), sqrt(_184) * _198)));
    float _396 = fma((-_390) + fp_c5_1._m0[13].x, _374, _390);
    float _398 = fma((-_394) + fp_c5_1._m0[13].y, _374, _394);
    float _400 = fma((-_392) + fp_c5_1._m0[13].z, _374, _392);
    float _402 = clamp((-exp2((clamp(fma(sqrt(_366), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _85.x = fma((-_396) + fma(fma(_388 * (_378 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _402, _396);
    _85.y = fma((-_398) + fma(fma(_388 * (_378 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _402, _398);
    _85.z = fma((-_400) + fma(fma(_388 * (_378 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _402, _400);
    _85.w = 1.0;
}


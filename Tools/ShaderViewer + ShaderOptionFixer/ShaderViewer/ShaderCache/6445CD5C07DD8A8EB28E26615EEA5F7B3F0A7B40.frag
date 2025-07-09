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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_10;
layout(binding = 2) uniform sampler2D fp_tex_tcb_12;
layout(binding = 3) uniform sampler2D fp_tex_tcb_22;
layout(binding = 4) uniform sampler2D fp_tex_tcb_24;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 4) in vec4 _66;
layout(location = 6) in vec4 _68;
layout(location = 5) in vec4 _70;
layout(location = 7) in vec4 _72;
layout(location = 3) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 0) out vec4 _79;
uint _6[12];

void main()
{
    bool _291 = false;
    float _86 = _62.x;
    float _88 = _62.y;
    float _90 = _64.x;
    float _92 = _66.x;
    float _94 = _64.y;
    float _96 = _66.y;
    float _98 = _64.z;
    float _100 = _66.z;
    float _102 = 1.0 / (_68.z * gl_FragCoord.w);
    float _104 = 1.0 / _70.w;
    float _106 = inversesqrt(fma(_98, _98, fma(_94, _94, _90 * _90)));
    float _108 = inversesqrt(fma(_100, _100, fma(_96, _96, _92 * _92)));
    float _110 = _90 * _106;
    float _112 = _92 * (-_108);
    float _114 = _94 * _106;
    float _116 = _96 * (-_108);
    float _118 = _100 * (-_108);
    float _120 = _98 * _106;
    float _122 = fma(_120, _118, fma(_114, _116, _110 * _112));
    vec2 _126 = texture(fp_tex_tcb_2A, vec2(fma(_70.x * _104, 0.5, 0.5), fma(_70.y * _104, -0.5, 0.5))).xy;
    float _128 = fma(_110 * (-_122), -2.0, -_112);
    float _130 = fma(_114 * (-_122), -2.0, -_116);
    float _132 = fma(_120 * (-_122), -2.0, -_118);
    float _134 = 1.0 / max(abs(_132), max(abs(_128), abs(_130)));
    vec3 _138 = texture(fp_tex_tcb_A, vec2(_86, _88)).xyz;
    float _140 = _138.x;
    float _142 = _138.y;
    float _144 = _138.z;
    float _146 = texture(fp_tex_tcb_12, vec2(_86, _88)).x;
    float _148 = max(_122, fp_c1_1._m0[0].z);
    vec2 _150 = texture(fp_tex_tcb_22, vec2(_72.x, _72.y)).xy;
    float _152 = max(texture(fp_tex_tcb_10, vec2(_86, _88)).x, fp_c1_1._m0[0].x);
    vec2 _154 = texture(fp_tex_tcb_38, vec2(_148, (-_152) + (-0.0))).xy;
    float _156 = _154.x;
    float _158 = _154.y;
    float _160 = _110 * _114;
    vec3 _162 = texture(fp_tex_tcb_36, vec4(_128 * _134, _130 * _134, _132 * _134, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_152 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec4 _165 = texture(fp_tex_tcb_24, vec2(_72.z, _72.w)).xyzw;
    float _167 = _165.w;
    float _169 = _112 + (-fp_c5_1._m0[23].x);
    float _171 = _114 * _120;
    float _173 = _116 + (-fp_c5_1._m0[23].y);
    float _175 = _120 * _120;
    float _177 = _110 * _120;
    float _179 = _118 + (-fp_c5_1._m0[23].z);
    float _181 = inversesqrt(fma(_179, _179, fma(_173, _173, _169 * _169)));
    float _183 = _169 * _181;
    float _185 = _173 * _181;
    float _187 = _74.x;
    float _189 = _179 * _181;
    float _191 = _74.z;
    float _193 = fma(_110, _110, -(_114 * _114));
    float _195 = _152 * _152;
    float _197 = fma(_152, 0.5, 0.5);
    float _199 = fma(_114, -fp_c5_1._m0[23].y, _110 * (-fp_c5_1._m0[23].x));
    float _201 = max(fma(_120, _189, fma(_114, _185, _110 * _183)), fp_c1_1._m0[0].z) * max(fma(_120, _189, fma(_114, _185, _110 * _183)), fp_c1_1._m0[0].z);
    float _203 = max(fma(_118, _189, fma(_116, _185, _112 * _183)), fp_c1_1._m0[0].z);
    float _205 = (_197 * 0.5) * _197;
    float _207 = max(fma(_120, -fp_c5_1._m0[23].z, _199), fp_c1_1._m0[0].z);
    float _209 = clamp(fma(_120, -fp_c5_1._m0[23].z, _199), 0.0, 1.0);
    float _211 = 1.0 / (_205 + fma(_148, -_205, _148));
    float _213 = fma(_142, -_146, _142);
    int _216 = max(0, min(int(trunc((_191 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _218 = fma(_146, _142 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _220 = exp2(_203 * fma(_203, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _222 = (_211 * (1.0 / (_205 + fma(_205, -_207, _207)))) * ((_195 * (1.0 / max(fma(_201, _195 * _195, -_201) + 1.0, fp_c1_1._m0[0].z))) * (_195 * (1.0 / max(fma(_201, _195 * _195, -_201) + 1.0, fp_c1_1._m0[0].z))));
    float _224 = fma(_146, _140 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _226 = fma(_146, _144 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _228 = fma(_140, -_146, _140);
    float _230 = fma(_144, -_146, _144);
    float _232 = _68.w;
    uint _235 = uint(int(uint((((int(uint(_216) >> uint(16)) * 20) << 16) + (((_216 & 65535) * 20) + max(0, min(int(trunc((_187 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _237 = fp_c10_1._m0[int(uint(int(_235)) >> uint(2))][int(_235) & 3];
    float _239 = fma(_224, -_228, _228);
    float _241 = fma(_226, -_230, _230);
    float _243 = clamp(_232 * clamp(fma(_150.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _245 = _76.x;
    float _247 = fma(_218, -_213, _213);
    float _249 = ((_165.x * _167) * _232) * 32.0;
    float _251 = ((_165.y * _167) * _232) * 32.0;
    float _253 = ((_165.z * _167) * _232) * 32.0;
    float _255 = fma(_239, _249, fma(_162.x, fma(_224, _156, _158), max(0.0, fma(_193, fp_c5_1._m0[31].x, (fma(_120, fp_c5_1._m0[25].z, fma(_114, fp_c5_1._m0[25].y, _110 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_177, fp_c5_1._m0[28].w, fma(_175, fp_c5_1._m0[28].z, fma(_171, fp_c5_1._m0[28].y, _160 * fp_c5_1._m0[28].x))))) * _239));
    float _257 = fma(_247, _251, fma(_162.y, fma(_218, _156, _158), max(0.0, fma(_193, fp_c5_1._m0[31].y, (fma(_120, fp_c5_1._m0[26].z, fma(_114, fp_c5_1._m0[26].y, _110 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_177, fp_c5_1._m0[29].w, fma(_175, fp_c5_1._m0[29].z, fma(_171, fp_c5_1._m0[29].y, _160 * fp_c5_1._m0[29].x))))) * _247));
    float _259 = fma(_241, _253, fma(_162.z, fma(_226, _156, _158), max(0.0, fma(_193, fp_c5_1._m0[31].z, (fma(_120, fp_c5_1._m0[27].z, fma(_114, fp_c5_1._m0[27].y, _110 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_177, fp_c5_1._m0[30].w, fma(_175, fp_c5_1._m0[30].z, fma(_171, fp_c5_1._m0[30].y, _160 * fp_c5_1._m0[30].x))))) * _241));
    float _261 = clamp((-_243) + 1.0, 0.0, 1.0) * _245;
    float _263 = clamp((-fma(_243, fp_c7_1._m0[37].w, fma(max((-_126.x) + 1.0, (-_126.y) + 1.0), clamp(_74.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_68.x * gl_FragCoord.w) * _102, (_68.y * gl_FragCoord.w) * _102)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)) + clamp(_232 * clamp(fma(_150.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0) * _245;
    int _265 = floatBitsToInt(_237);
    float _267 = _257;
    float _269 = _259;
    float _271 = _255;
    float _273 = _259;
    float _275 = _255;
    float _277 = _257;
    if (floatBitsToInt(_237) != (-1))
    {
        int _279 = 0;
        float _283;
        float _285;
        float _287;
        int _373;
        do
        {
            int _281 = _265 & 255;
            _283 = _271;
            _285 = _267;
            _287 = _269;
            _291 = uint(_281) >= 30u;
            if (_291)
            {
                break;
            }
            int _293 = _281 << 4;
            uint _295 = uint(int(uint(_293 + 7360) >> uint(2)));
            int _297 = int(_295) + 1;
            uint _299 = uint(int(uint(_293 + 7368) >> uint(2)));
            float _301 = (-_187) + fp_c10_1._m0[int(uint(int(_295)) >> uint(2))][int(_295) & 3];
            float _303 = fp_c10_1._m0[int(uint(_297) >> uint(2))][_297 & 3] + (-_74.y);
            float _305 = (-_191) + fp_c10_1._m0[int(uint(int(_299)) >> uint(2))][int(_299) & 3];
            float _307 = fma(_305, _305, fma(_303, _303, _301 * _301));
            float _309 = _301 * inversesqrt(_307);
            float _311 = _303 * inversesqrt(_307);
            float _313 = _305 * inversesqrt(_307);
            float _315 = _112 + _309;
            float _317 = _116 + _311;
            float _319 = _118 + _313;
            float _321 = inversesqrt(fma(_319, _319, fma(_317, _317, _315 * _315)));
            float _323 = _315 * _321;
            float _325 = _317 * _321;
            float _327 = _319 * _321;
            uint _329 = uint(int(uint(_293 + 6880) >> uint(2)));
            int _331 = int(_329) + 1;
            float _333 = fma(_120, _313, fma(_114, _311, _110 * _309));
            float _335 = max(fma(_118, _327, fma(_116, _325, _112 * _323)), fp_c1_1._m0[0].z);
            float _337 = max(fma(_120, _327, fma(_114, _325, _110 * _323)), fp_c1_1._m0[0].z) * max(fma(_120, _327, fma(_114, _325, _110 * _323)), fp_c1_1._m0[0].z);
            float _339 = max(_333, fp_c1_1._m0[0].z);
            uint _341 = uint(int(uint(_293 + 8320) >> uint(2)));
            float _343 = exp2(_335 * fma(_335, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _345 = (_211 * (1.0 / (_205 + fma(_205, -_339, _339)))) * ((_195 * (1.0 / max(fma(_195 * _195, _337, -_337) + 1.0, fp_c1_1._m0[0].z))) * (_195 * (1.0 / max(fma(_195 * _195, _337, -_337) + 1.0, fp_c1_1._m0[0].z))));
            uint _347 = uint(int(uint(_293 + 6408) >> uint(2)));
            float _349 = (_218 + fma(_218, -_343, _343)) * _345;
            uint _351 = uint(int(uint(_293 + 6400) >> uint(2)));
            int _353 = int(_351) + 1;
            bool _355 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_341)) >> uint(2))][int(_341) & 3]) != 0;
            float _357 = _349;
            if (!_355)
            {
                _357 = 1.0;
            }
            float _359 = _357;
            if (_355)
            {
                uint _361 = uint(int(uint(_293 + 7840) >> uint(2)));
                int _363 = int(_361) + 1;
                uint _365 = uint(int(uint(_293 + 7848) >> uint(2)));
                uint _367 = uint(int(uint(_293 + 6888) >> uint(2)));
                float _369 = fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3];
                int _371 = int(_367) + 1;
                _359 = exp2(fp_c10_1._m0[int(uint(_371) >> uint(2))][_371 & 3] * log2(clamp(((-_369) + fma(_313, -fp_c10_1._m0[int(uint(int(_365)) >> uint(2))][int(_365) & 3], fma(_311, -fp_c10_1._m0[int(uint(_363) >> uint(2))][_363 & 3], _309 * (-fp_c10_1._m0[int(uint(int(_361)) >> uint(2))][int(_361) & 3])))) * (1.0 / ((-_369) + 1.0)), 0.0, 1.0)));
            }
            _373 = _279 + 1;
            float _375 = (exp2(fp_c10_1._m0[int(uint(_331) >> uint(2))][_331 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_329)) >> uint(2))][int(_329) & 3], -sqrt(_307), fp_c1_1._m0[1].y), 0.0, 1.0))) * _359) * clamp(_333 + (-0.0), 0.0, 1.0);
            float _377 = fma(fp_c10_1._m0[int(uint(_353) >> uint(2))][_353 & 3] * _375, fma(_213, fp_c1_1._m0[1].z, _349 * 0.079577468335628509521484375), _267);
            float _379 = fma(fp_c10_1._m0[int(uint(int(_347)) >> uint(2))][int(_347) & 3] * _375, fma(_230, fp_c1_1._m0[1].z, ((_226 + fma(_226, -_343, _343)) * _345) * 0.079577468335628509521484375), _269);
            float _381 = fma(fp_c10_1._m0[int(uint(int(_351)) >> uint(2))][int(_351) & 3] * _375, fma(_228, fp_c1_1._m0[1].z, ((_224 + fma(_224, -_343, _343)) * _345) * 0.079577468335628509521484375), _271);
            _265 = int(uint(_265) >> uint(8));
            _279 = _373;
            _267 = _377;
            _269 = _379;
            _271 = _381;
            _283 = _381;
            _285 = _377;
            _287 = _379;
        } while (!(_373 >= 4));
        _291 = false;
        _273 = _287;
        _275 = _283;
        _277 = _285;
        if ((_265 & 255) == 30)
        {
            float _383 = 1.0 / fp_c10_1._m0[561].y;
            float _385 = _187 + (-fp_c10_1._m0[557].x);
            float _387 = _191 + (-fp_c10_1._m0[557].z);
            float _389 = _387 * fp_c10_1._m0[558].x;
            float _391 = (-_187) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_383, fp_c10_1._m0[557].x);
            float _393 = (-_191) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_383, fp_c10_1._m0[557].z);
            float _395 = _391 * _391;
            float _397 = sqrt(fma(_393, _393, _395)) * (-fp_c10_1._m0[558].y);
            float _399 = inversesqrt(fma(_393, _393, fma(_397, _397, _395)));
            float _401 = _391 * _399;
            float _403 = _397 * _399;
            float _405 = _393 * _399;
            float _407 = _385 * fp_c10_1._m0[558].z;
            float _409 = _112 + _401;
            float _411 = _116 + _403;
            float _413 = _118 + _405;
            float _415 = _74.y;
            float _417 = inversesqrt(fma(_413, _413, fma(_411, _411, _409 * _409)));
            float _419 = _409 * _417;
            float _421 = _411 * _417;
            float _423 = ((-float(_389 < _407)) + float(_389 > _407)) * fp_c10_1._m0[561].y;
            float _425 = fma(_387, _387, _385 * _385);
            float _427 = 1.0 / (fma(_191, fp_c10_1._m0[565].z, fma(_415, fp_c10_1._m0[565].y, _187 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _429 = fma(_387, fp_c10_1._m0[558].z, _385 * fp_c10_1._m0[558].x);
            bool _431 = _429 > 0.0;
            float _433 = _413 * _417;
            float _435 = fma(_120, _405, fma(_114, _403, _110 * _401));
            float _437 = inversesqrt(fma(_405, _405, _401 * _401));
            float _439 = max(fma(_118, _433, fma(_116, _421, _112 * _419)), fp_c1_1._m0[0].z);
            float _441 = max(fma(_120, _433, fma(_114, _421, _110 * _419)), fp_c1_1._m0[0].z) * max(fma(_120, _433, fma(_114, _421, _110 * _419)), fp_c1_1._m0[0].z);
            float _443 = _401;
            if (_431)
            {
                _443 = sqrt(_425);
            }
            float _445 = _443;
            if (!_431)
            {
                _445 = 1.0;
            }
            bool _447 = fma(_387 * inversesqrt(_425), fp_c10_1._m0[558].z, (_385 * inversesqrt(_425)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _449 = clamp(fma(_429 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_429 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _451 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_385, fma(_423, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_387 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_423 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_385, fma(_423, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_387 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_423 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _453 = max(_435, fp_c1_1._m0[0].z);
            float _455 = exp2(_439 * fma(_439, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _457 = log2(clamp((fma(_405 * _437, -fp_c10_1._m0[558].z, (_401 * _437) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _459 = _457;
            if (_447)
            {
                _459 = fma(_451, -_451, fp_c1_1._m0[1].y) * fma(_451, -_451, fp_c1_1._m0[1].y);
            }
            float _461 = _459;
            if (!_447)
            {
                _461 = 1.0;
            }
            float _463 = (_211 * (1.0 / (_205 + fma(_205, -_453, _453)))) * ((_195 * (1.0 / max(fma(_195 * _195, _441, -_441) + 1.0, fp_c1_1._m0[0].z))) * (_195 * (1.0 / max(fma(_195 * _195, _441, -_441) + 1.0, fp_c1_1._m0[0].z))));
            float _465 = (min(fma(_449, -_449, fp_c1_1._m0[1].y) * fma(_449, -_449, fp_c1_1._m0[1].y), _461) * (exp2(log2(clamp(fma(_445, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_457))) * clamp(_435 + (-0.0), 0.0, 1.0);
            float _467 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_191, fp_c10_1._m0[562].z, fma(_415, fp_c10_1._m0[562].y, _187 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _427, 0.5, 0.5), (-fma((fma(_191, fp_c10_1._m0[563].z, fma(_415, fp_c10_1._m0[563].y, _187 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _427, 0.5, 0.5)) + 1.0)).z > fma((fma(_191, fp_c10_1._m0[564].z, fma(_415, fp_c10_1._m0[564].y, _187 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _427, 0.5, 0.5)) || (_429 <= 0.0));
            _273 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _465) * fma(_230, fp_c1_1._m0[1].z, ((_226 + fma(_226, -_455, _455)) * _463) * 0.079577468335628509521484375), _467, _287);
            _275 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _465) * fma(_228, fp_c1_1._m0[1].z, ((_224 + fma(_224, -_455, _455)) * _463) * 0.079577468335628509521484375), _467, _283);
            _277 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _465) * fma(_213, fp_c1_1._m0[1].z, ((_218 + fma(_218, -_455, _455)) * _463) * 0.079577468335628509521484375), _467, _285);
        }
    }
    float _469 = _187 + (-fp_c3_1._m0[11].w);
    float _471 = _74.y;
    float _473 = _191 + (-fp_c3_1._m0[13].w);
    float _475 = fma(_261, _273, _263 * (fma(_222 * (_226 + fma(_226, -_220, _220)), fp_c1_1._m0[1].x, _230 * 0.3183098733425140380859375) * fma(_209, fp_c5_1._m0[5].z, _253)));
    float _477 = _471 + (-fp_c3_1._m0[12].w);
    float _479 = fma(_473, _473, fma(_477, _477, _469 * _469));
    float _481 = fma(_261, _275, _263 * (fma(_222 * (_224 + fma(_224, -_220, _220)), fp_c1_1._m0[1].x, _228 * 0.3183098733425140380859375) * fma(_209, fp_c5_1._m0[5].x, _249)));
    float _483 = clamp(fma(_263 * _261, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _485 = clamp(fma(fma(_191, fp_c5_1._m0[14].z, fma(_471, fp_c5_1._m0[14].y, _187 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _487 = fma(_261, _277, _263 * (fma(_222 * (_218 + fma(_218, -_220, _220)), fp_c1_1._m0[1].x, _213 * 0.3183098733425140380859375) * fma(_209, fp_c5_1._m0[5].y, _251)));
    float _489 = exp2(log2(clamp(sqrt(_479) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_473 * inversesqrt(_479), fp_c5_1._m0[23].z, fma(_477 * inversesqrt(_479), fp_c5_1._m0[23].y, (_469 * inversesqrt(_479)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _491 = fma((-_481) + fp_c5_1._m0[13].x, _485, _481);
    float _493 = fma((-_487) + fp_c5_1._m0[13].y, _485, _487);
    float _495 = fma((-_475) + fp_c5_1._m0[13].z, _485, _475);
    float _497 = clamp((-exp2((clamp(fma(sqrt(_479), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_491) + fma(fma((_489 * fp_c7_1._m0[55].x) * _483, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _497, _491);
    _79.y = fma((-_493) + fma(fma((_489 * fp_c7_1._m0[55].y) * _483, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _497, _493);
    _79.z = fma((-_495) + fma(fma((_489 * fp_c7_1._m0[55].z) * _483, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _497, _495);
    _79.w = 1.0;
}


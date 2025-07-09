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
layout(binding = 2) uniform sampler2D fp_tex_tcb_14;
layout(binding = 3) uniform sampler2D fp_tex_tcb_22;
layout(binding = 4) uniform sampler2D fp_tex_tcb_24;
layout(binding = 5) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 6) uniform sampler2D fp_tex_tcb_38;
layout(binding = 7) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _60;
layout(location = 5) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 0) out vec4 _67;
layout(location = 3) in vec4 _69;
layout(location = 2) in vec4 _71;
layout(location = 4) in vec4 _73;
uint _6[12];

void main()
{
    bool _293 = false;
    float _80 = _60.x;
    float _82 = _60.y;
    float _84 = texture(fp_tex_tcb_8, vec2(_80, _82)).x;
    bool _88 = _84 <= 0.0;
    int _91 = floatBitsToInt(_80);
    int _93 = floatBitsToInt(_82);
    if (_88)
    {
        discard;
    }
    vec3 _97 = texture(fp_tex_tcb_14, vec2(_80, _82)).xyz;
    vec4 _100 = texture(fp_tex_tcb_24, vec2(_62.z, _62.w)).xyzw;
    float _102 = _100.w;
    vec3 _104 = texture(fp_tex_tcb_A, vec2(_80, _82)).xyz;
    float _106 = _104.x;
    float _108 = _104.y;
    float _110 = _104.z;
    vec2 _114 = texture(fp_tex_tcb_22, vec2(_62.x, _62.y)).xy;
    float _116 = _64.x;
    float _118 = _64.y;
    float _120 = _64.z;
    float _122 = fma(_118, _118, _116 * _116);
    int _124 = floatBitsToInt(_122);
    if (_88)
    {
        _124 = 0;
    }
    float _126 = inversesqrt(fma(_120, _120, _122));
    int _128 = floatBitsToInt(_126);
    if (_88)
    {
        _91 = 0;
    }
    if (_88)
    {
        _93 = 0;
    }
    float _130 = _116 * _126;
    float _132 = _118 * _126;
    float _134 = _120 * _126;
    if (_88)
    {
        _128 = 0;
    }
    if (_88)
    {
        _67.x = intBitsToFloat(_124);
        _67.y = intBitsToFloat(_128);
        _67.z = intBitsToFloat(_91);
        _67.w = intBitsToFloat(_93);
        return;
    }
    float _136 = _69.x;
    float _138 = _69.y;
    float _140 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _142 = _69.z;
    float _144 = inversesqrt(fma(_142, _142, fma(_138, _138, _136 * _136)));
    float _146 = _136 * (-_144);
    float _148 = _138 * (-_144);
    float _150 = _142 * (-_144);
    float _152 = fma(_134, _150, fma(_132, _148, _130 * _146));
    float _154 = max(_152, fp_c1_1._m0[0].y);
    float _156 = fma(_130 * (-_152), -2.0, -_146);
    float _158 = fma(_132 * (-_152), -2.0, -_148);
    float _160 = fma(_134 * (-_152), -2.0, -_150);
    float _162 = 1.0 / max(abs(_160), max(abs(_156), abs(_158)));
    vec2 _164 = texture(fp_tex_tcb_38, vec2(_154, (-_140) + (-0.0))).xy;
    float _166 = _164.x;
    float _168 = _164.y;
    vec3 _170 = texture(fp_tex_tcb_36, vec4(_156 * _162, _158 * _162, _160 * _162, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_140 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _172 = _146 + (-fp_c5_1._m0[23].x);
    float _174 = _71.x;
    float _176 = _148 + (-fp_c5_1._m0[23].y);
    float _178 = _71.z;
    float _180 = _150 + (-fp_c5_1._m0[23].z);
    float _182 = _130 * _132;
    float _184 = _132 * _134;
    float _186 = inversesqrt(fma(_180, _180, fma(_176, _176, _172 * _172)));
    float _188 = fma(_106 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _190 = fma(_108 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _192 = fma(_110 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _194 = _134 * _134;
    float _196 = fma(_106, -fp_c6_1._m0[9].x, _106);
    float _198 = fma(_110, -fp_c6_1._m0[9].x, _110);
    float _200 = _172 * _186;
    float _202 = _176 * _186;
    float _204 = _180 * _186;
    float _206 = _73.w;
    float _208 = _130 * _134;
    float _210 = _140 * _140;
    int _212 = max(0, min(int(trunc((_178 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _214 = fma(_140, 0.5, 0.5);
    float _216 = max(fma(_150, _204, fma(_148, _202, _146 * _200)), fp_c1_1._m0[0].y);
    float _218 = fma(_132, -fp_c5_1._m0[23].y, _130 * (-fp_c5_1._m0[23].x));
    float _220 = _210 * _210;
    float _222 = max(fma(_134, _204, fma(_132, _202, _130 * _200)), fp_c1_1._m0[0].y) * max(fma(_134, _204, fma(_132, _202, _130 * _200)), fp_c1_1._m0[0].y);
    float _224 = (_214 * 0.5) * _214;
    float _226 = max(fma(_134, -fp_c5_1._m0[23].z, _218), fp_c1_1._m0[0].y);
    float _228 = 1.0 / (_224 + fma(_154, -_224, _154));
    float _230 = exp2(_216 * fma(_216, fp_c1_1._m0[0].z, -6.9831600189208984375));
    uint _233 = uint(int(uint((((int(uint(_212) >> uint(16)) * 20) << 16) + (((_212 & 65535) * 20) + max(0, min(int(trunc((_174 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _235 = fp_c10_1._m0[int(uint(int(_233)) >> uint(2))][int(_233) & 3];
    float _237 = clamp(_206 * clamp(fma(_114.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _239 = (_228 * (1.0 / (_224 + fma(_224, -_226, _226)))) * ((_210 * (1.0 / max(fma(_222, _220, -_222) + 1.0, fp_c1_1._m0[0].y))) * (_210 * (1.0 / max(fma(_222, _220, -_222) + 1.0, fp_c1_1._m0[0].y))));
    float _241 = fma(_130, _130, -(_132 * _132));
    float _243 = ((_100.z * _102) * _206) * 32.0;
    float _245 = fma(_108, -fp_c6_1._m0[9].x, _108);
    float _247 = fma(_192, -_198, _198);
    float _249 = fma(_188, -_196, _196);
    float _251 = fma(_190, -_245, _245);
    float _253 = ((_100.x * _102) * _206) * 32.0;
    float _255 = ((_100.y * _102) * _206) * 32.0;
    float _257 = clamp((-_237) + 1.0, 0.0, 1.0);
    float _259 = fma(_249, _253, fma(_170.x, fma(_188, _166, _168), max(0.0, fma(_241, fp_c5_1._m0[31].x, (fma(_134, fp_c5_1._m0[25].z, fma(_132, fp_c5_1._m0[25].y, _130 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_208, fp_c5_1._m0[28].w, fma(_194, fp_c5_1._m0[28].z, fma(_184, fp_c5_1._m0[28].y, _182 * fp_c5_1._m0[28].x))))) * _249));
    float _261 = fma(_247, _243, fma(_170.z, fma(_192, _166, _168), max(0.0, fma(_241, fp_c5_1._m0[31].z, (fma(_134, fp_c5_1._m0[27].z, fma(_132, fp_c5_1._m0[27].y, _130 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_208, fp_c5_1._m0[30].w, fma(_194, fp_c5_1._m0[30].z, fma(_184, fp_c5_1._m0[30].y, _182 * fp_c5_1._m0[30].x))))) * _247));
    float _263 = fma(_251, _255, fma(_170.y, fma(_190, _166, _168), max(0.0, fma(_241, fp_c5_1._m0[31].y, (fma(_134, fp_c5_1._m0[26].z, fma(_132, fp_c5_1._m0[26].y, _130 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_208, fp_c5_1._m0[29].w, fma(_194, fp_c5_1._m0[29].z, fma(_184, fp_c5_1._m0[29].y, _182 * fp_c5_1._m0[29].x))))) * _251));
    float _265 = clamp(fma(_134, -fp_c5_1._m0[23].z, _218), 0.0, 1.0);
    float _267 = clamp((-fma(_237, fp_c7_1._m0[37].w, clamp(_206 * clamp(fma(_114.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    int _269 = floatBitsToInt(_235);
    float _271 = _263;
    float _273 = _261;
    float _275 = _259;
    float _277 = _259;
    float _279 = _263;
    float _281 = _261;
    if (floatBitsToInt(_235) != (-1))
    {
        int _283 = 0;
        float _287;
        float _289;
        float _291;
        int _375;
        do
        {
            int _285 = _269 & 255;
            _287 = _275;
            _289 = _271;
            _291 = _273;
            _293 = uint(_285) >= 30u;
            if (_293)
            {
                break;
            }
            int _295 = _285 << 4;
            uint _297 = uint(int(uint(_295 + 7360) >> uint(2)));
            int _299 = int(_297) + 1;
            uint _301 = uint(int(uint(_295 + 7368) >> uint(2)));
            float _303 = (-_174) + fp_c10_1._m0[int(uint(int(_297)) >> uint(2))][int(_297) & 3];
            float _305 = fp_c10_1._m0[int(uint(_299) >> uint(2))][_299 & 3] + (-_71.y);
            float _307 = (-_178) + fp_c10_1._m0[int(uint(int(_301)) >> uint(2))][int(_301) & 3];
            float _309 = fma(_307, _307, fma(_305, _305, _303 * _303));
            float _311 = _303 * inversesqrt(_309);
            float _313 = _305 * inversesqrt(_309);
            float _315 = _307 * inversesqrt(_309);
            float _317 = _146 + _311;
            float _319 = _148 + _313;
            float _321 = _150 + _315;
            uint _323 = uint(int(uint(_295 + 6880) >> uint(2)));
            int _325 = int(_323) + 1;
            float _327 = inversesqrt(fma(_321, _321, fma(_319, _319, _317 * _317)));
            float _329 = _317 * _327;
            float _331 = _319 * _327;
            float _333 = _321 * _327;
            float _335 = fma(_134, _315, fma(_132, _313, _130 * _311));
            float _337 = max(_335, fp_c1_1._m0[0].y);
            float _339 = max(fma(_150, _333, fma(_148, _331, _146 * _329)), fp_c1_1._m0[0].y);
            float _341 = max(fma(_134, _333, fma(_132, _331, _130 * _329)), fp_c1_1._m0[0].y) * max(fma(_134, _333, fma(_132, _331, _130 * _329)), fp_c1_1._m0[0].y);
            uint _343 = uint(int(uint(_295 + 8320) >> uint(2)));
            uint _345 = uint(int(uint(_295 + 6400) >> uint(2)));
            int _347 = int(_345) + 1;
            float _349 = exp2(_339 * fma(_339, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _351 = fp_c10_1._m0[int(uint(_325) >> uint(2))][_325 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_323)) >> uint(2))][int(_323) & 3], -sqrt(_309), fp_c1_1._m0[1].x), 0.0, 1.0));
            uint _353 = uint(int(uint(_295 + 6408) >> uint(2)));
            float _355 = (_228 * (1.0 / (_224 + fma(_224, -_337, _337)))) * ((_210 * (1.0 / max(fma(_220, _341, -_341) + 1.0, fp_c1_1._m0[0].y))) * (_210 * (1.0 / max(fma(_220, _341, -_341) + 1.0, fp_c1_1._m0[0].y))));
            bool _357 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_343)) >> uint(2))][int(_343) & 3]) != 0;
            float _359 = _351;
            if (!_357)
            {
                _359 = 1.0;
            }
            float _361 = _359;
            if (_357)
            {
                uint _363 = uint(int(uint(_295 + 7840) >> uint(2)));
                int _365 = int(_363) + 1;
                uint _367 = uint(int(uint(_295 + 6888) >> uint(2)));
                float _369 = fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3];
                int _371 = int(_367) + 1;
                uint _373 = uint(int(uint(_295 + 7848) >> uint(2)));
                _361 = exp2(fp_c10_1._m0[int(uint(_371) >> uint(2))][_371 & 3] * log2(clamp(((-_369) + fma(_315, -fp_c10_1._m0[int(uint(int(_373)) >> uint(2))][int(_373) & 3], fma(_313, -fp_c10_1._m0[int(uint(_365) >> uint(2))][_365 & 3], _311 * (-fp_c10_1._m0[int(uint(int(_363)) >> uint(2))][int(_363) & 3])))) * (1.0 / ((-_369) + 1.0)), 0.0, 1.0)));
            }
            _375 = _283 + 1;
            float _377 = (exp2(_351) * _361) * clamp(_335 + (-0.0), 0.0, 1.0);
            float _379 = fma(fp_c10_1._m0[int(uint(_347) >> uint(2))][_347 & 3] * _377, fma(_245, fp_c1_1._m0[1].y, ((_190 + fma(_190, -_349, _349)) * _355) * 0.079577468335628509521484375), _271);
            float _381 = fma(fp_c10_1._m0[int(uint(int(_353)) >> uint(2))][int(_353) & 3] * _377, fma(_198, fp_c1_1._m0[1].y, ((_192 + fma(_192, -_349, _349)) * _355) * 0.079577468335628509521484375), _273);
            float _383 = fma(fp_c10_1._m0[int(uint(int(_345)) >> uint(2))][int(_345) & 3] * _377, fma(_196, fp_c1_1._m0[1].y, ((_188 + fma(_188, -_349, _349)) * _355) * 0.079577468335628509521484375), _275);
            _269 = int(uint(_269) >> uint(8));
            _283 = _375;
            _271 = _379;
            _273 = _381;
            _275 = _383;
            _287 = _383;
            _289 = _379;
            _291 = _381;
        } while (!(_375 >= 4));
        _293 = false;
        _277 = _287;
        _279 = _289;
        _281 = _291;
        if ((_269 & 255) == 30)
        {
            float _385 = _71.y;
            float _387 = 1.0 / (fma(_178, fp_c10_1._m0[565].z, fma(_385, fp_c10_1._m0[565].y, _174 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _389 = 1.0 / fp_c10_1._m0[561].y;
            float _391 = _174 + (-fp_c10_1._m0[557].x);
            float _393 = (-_174) + fma(_389, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x), fp_c10_1._m0[557].x);
            float _395 = (-_178) + fma(_389, -(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z), fp_c10_1._m0[557].z);
            float _397 = _393 * _393;
            float _399 = sqrt(fma(_395, _395, _397)) * (-fp_c10_1._m0[558].y);
            float _401 = inversesqrt(fma(_395, _395, fma(_399, _399, _397)));
            float _403 = _391 * fp_c10_1._m0[558].z;
            float _405 = _393 * _401;
            float _407 = _399 * _401;
            float _409 = _395 * _401;
            float _411 = _178 + (-fp_c10_1._m0[557].z);
            float _413 = _146 + _405;
            float _415 = _148 + _407;
            float _417 = _150 + _409;
            float _419 = _411 * fp_c10_1._m0[558].x;
            float _421 = inversesqrt(fma(_417, _417, fma(_415, _415, _413 * _413)));
            float _423 = ((-float(_419 < _403)) + float(_419 > _403)) * fp_c10_1._m0[561].y;
            float _425 = fma(_134, _409, fma(_132, _407, _130 * _405));
            float _427 = _413 * _421;
            float _429 = _415 * _421;
            float _431 = _417 * _421;
            float _433 = inversesqrt(fma(_409, _409, _405 * _405));
            float _435 = fma(_411, fp_c10_1._m0[558].z, _391 * fp_c10_1._m0[558].x);
            float _437 = fma(_411, _411, _391 * _391);
            bool _439 = _435 > 0.0;
            float _441 = _405 * _433;
            float _443 = _441;
            if (_439)
            {
                _443 = sqrt(_437);
            }
            float _445 = _443;
            if (!_439)
            {
                _445 = 1.0;
            }
            float _447 = max(fma(_134, _431, fma(_132, _429, _130 * _427)), fp_c1_1._m0[0].y) * max(fma(_134, _431, fma(_132, _429, _130 * _427)), fp_c1_1._m0[0].y);
            float _449 = max(fma(_150, _431, fma(_148, _429, _146 * _427)), fp_c1_1._m0[0].y);
            float _451 = clamp(fma(_435 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_435 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _453 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_391, fma(_423, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_411 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_423 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_391, fma(_423, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_411 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_423 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            bool _455 = fma(_411 * inversesqrt(_437), fp_c10_1._m0[558].z, (_391 * inversesqrt(_437)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _457 = max(_425, fp_c1_1._m0[0].y);
            float _459 = _449;
            if (_455)
            {
                _459 = fma(_453, -_453, fp_c1_1._m0[1].x) * fma(_453, -_453, fp_c1_1._m0[1].x);
            }
            float _461 = exp2(_449 * fma(_449, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _463 = _459;
            if (!_455)
            {
                _463 = 1.0;
            }
            float _465 = (_228 * (1.0 / (_224 + fma(_224, -_457, _457)))) * ((_210 * (1.0 / max(fma(_220, _447, -_447) + 1.0, fp_c1_1._m0[0].y))) * (_210 * (1.0 / max(fma(_220, _447, -_447) + 1.0, fp_c1_1._m0[0].y))));
            float _467 = clamp(_425 + (-0.0), 0.0, 1.0) * ((exp2(log2(clamp(fma(_445, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_409 * _433, -fp_c10_1._m0[558].z, _441 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_451, -_451, fp_c1_1._m0[1].x) * fma(_451, -_451, fp_c1_1._m0[1].x), _463));
            float _469 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_178, fp_c10_1._m0[562].z, fma(_385, fp_c10_1._m0[562].y, _174 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _387, 0.5, 0.5), (-fma((fma(_178, fp_c10_1._m0[563].z, fma(_385, fp_c10_1._m0[563].y, _174 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _387, 0.5, 0.5)) + 1.0)).z > fma((fma(_178, fp_c10_1._m0[564].z, fma(_385, fp_c10_1._m0[564].y, _174 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _387, 0.5, 0.5)) || (_435 <= 0.0));
            _277 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _467) * fma(_196, fp_c1_1._m0[1].y, ((_188 + fma(_188, -_461, _461)) * _465) * 0.079577468335628509521484375), _469, _287);
            _279 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _467) * fma(_245, fp_c1_1._m0[1].y, ((_190 + fma(_190, -_461, _461)) * _465) * 0.079577468335628509521484375), _469, _289);
            _281 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _467) * fma(_198, fp_c1_1._m0[1].y, ((_192 + fma(_192, -_461, _461)) * _465) * 0.079577468335628509521484375), _469, _291);
        }
    }
    float _471 = _174 + (-fp_c3_1._m0[11].w);
    float _473 = _71.y;
    float _475 = _178 + (-fp_c3_1._m0[13].w);
    float _477 = _473 + (-fp_c3_1._m0[12].w);
    float _479 = fma(_475, _475, fma(_477, _477, _471 * _471));
    float _481 = clamp(fma(_267 * _257, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _483 = fma(_97.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_257, _277, _267 * (fma(_239 * (_188 + fma(_188, -_230, _230)), fp_c1_1._m0[0].w, _196 * 0.3183098733425140380859375) * fma(_265, fp_c5_1._m0[5].x, _253))));
    float _485 = fma(_97.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_257, _279, _267 * (fma(_239 * (_190 + fma(_190, -_230, _230)), fp_c1_1._m0[0].w, _245 * 0.3183098733425140380859375) * fma(_265, fp_c5_1._m0[5].y, _255))));
    float _487 = fma(_97.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_257, _281, _267 * (fma(_239 * (_192 + fma(_192, -_230, _230)), fp_c1_1._m0[0].w, _198 * 0.3183098733425140380859375) * fma(_265, fp_c5_1._m0[5].z, _243))));
    float _489 = exp2(log2(clamp(sqrt(_479) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_475 * inversesqrt(_479), fp_c5_1._m0[23].z, fma(_477 * inversesqrt(_479), fp_c5_1._m0[23].y, (_471 * inversesqrt(_479)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _491 = clamp(fma(fma(_178, fp_c5_1._m0[14].z, fma(_473, fp_c5_1._m0[14].y, _174 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _493 = fma((-_483) + fp_c5_1._m0[13].x, _491, _483);
    float _495 = fma((-_485) + fp_c5_1._m0[13].y, _491, _485);
    float _497 = fma((-_487) + fp_c5_1._m0[13].z, _491, _487);
    float _499 = clamp((-exp2((clamp(fma(sqrt(_479), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _67.x = fma((-_493) + fma(fma((_489 * fp_c7_1._m0[55].x) * _481, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _499, _493);
    _67.y = fma((-_495) + fma(fma((_489 * fp_c7_1._m0[55].y) * _481, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _499, _495);
    _67.z = fma((-_497) + fma(fma((_489 * fp_c7_1._m0[55].z) * _481, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _499, _497);
    _67.w = clamp(_84 + (-0.0), 0.0, 1.0);
}


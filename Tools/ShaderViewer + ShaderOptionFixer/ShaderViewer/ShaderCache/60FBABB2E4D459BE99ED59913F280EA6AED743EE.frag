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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_28;
layout(binding = 4) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 5) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 6) uniform sampler2D fp_tex_tcb_38;
layout(binding = 7) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _60;
layout(location = 5) in vec4 _62;
layout(location = 4) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 3) in vec4 _72;
layout(location = 0) out vec4 _75;
layout(location = 2) in vec4 _77;
uint _6[12];

void main()
{
    bool _287 = false;
    float _84 = _60.x;
    float _86 = _60.y;
    float _88 = texture(fp_tex_tcb_8, vec2(_84, _86)).x;
    float _90 = 1.0 / (_62.z * gl_FragCoord.w);
    float _92 = 1.0 / _64.w;
    bool _95 = _88 <= 0.0;
    if (_95)
    {
        discard;
    }
    vec2 _99 = texture(fp_tex_tcb_2A, vec2(fma(_64.x * _92, 0.5, 0.5), fma(_64.y * _92, -0.5, 0.5))).xy;
    vec3 _103 = texture(fp_tex_tcb_A, vec2(_84, _86)).xyz;
    float _105 = _103.x;
    float _107 = _103.y;
    float _109 = _103.z;
    float _111 = _66.x;
    float _113 = _66.y;
    float _115 = _66.z;
    float _117 = _72.x;
    float _119 = inversesqrt(fma(_115, _115, fma(_113, _113, _111 * _111)));
    bool _121 = floatBitsToInt(fma(float(gl_FrontFacing ? (-1) : 0), -2.0, -1.0)) <= 0;
    float _123 = _111 * _119;
    float _125 = _113 * _119;
    float _127 = _115 * _119;
    int _130 = floatBitsToInt(_111);
    int _132 = floatBitsToInt(_113);
    int _134 = floatBitsToInt(_115);
    float _136 = _123;
    float _138 = _125;
    float _140 = _127;
    int _142 = floatBitsToInt(_119);
    if (_95)
    {
        _130 = 0;
    }
    if (_95)
    {
        _132 = 0;
    }
    if (_95)
    {
        _134 = 0;
    }
    if (_121)
    {
        _136 = (-_123) + (-0.0);
    }
    if (_121)
    {
        _138 = (-_125) + (-0.0);
    }
    if (_121)
    {
        _140 = (-_127) + (-0.0);
    }
    if (_95)
    {
        _142 = 0;
    }
    if (_95)
    {
        _75.x = intBitsToFloat(_130);
        _75.y = intBitsToFloat(_132);
        _75.z = intBitsToFloat(_134);
        _75.w = intBitsToFloat(_142);
        return;
    }
    float _144 = _72.y;
    float _146 = max(texture(fp_tex_tcb_10, vec2(_84, _86)).x, fp_c1_1._m0[0].x);
    float _148 = _72.z;
    float _150 = inversesqrt(fma(_148, _148, fma(_144, _144, _117 * _117)));
    float _152 = _117 * (-_150);
    float _154 = _144 * (-_150);
    float _156 = _148 * (-_150);
    float _158 = fma(_156, _140, fma(_154, _138, _152 * _136));
    float _160 = max(_158, fp_c1_1._m0[0].y);
    float _162 = fma(_158 * (-_136), -2.0, -_152);
    float _164 = fma(_158 * (-_138), -2.0, -_154);
    float _166 = fma(_158 * (-_140), -2.0, -_156);
    float _168 = 1.0 / max(abs(_166), max(abs(_162), abs(_164)));
    vec2 _170 = texture(fp_tex_tcb_38, vec2(_160, (-_146) + (-0.0))).xy;
    float _172 = _170.x;
    float _174 = _170.y;
    vec3 _176 = texture(fp_tex_tcb_36, vec4(_162 * _168, _164 * _168, _166 * _168, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_146 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _178 = _77.x;
    float _180 = _138 * _136;
    float _182 = _77.z;
    float _184 = _140 * _138;
    float _186 = _140 * _140;
    float _188 = _154 * _156;
    float _190 = fma(_146, 0.5, 0.5);
    float _192 = (_190 * 0.5) * _190;
    float _194 = _140 * _136;
    float _196 = fma(_105 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _198 = fma(_107 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _200 = fma(_109 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _202 = _152 + (-fp_c5_1._m0[23].x);
    float _204 = fma(_136, _136, -(_138 * _138));
    float _206 = _154 + (-fp_c5_1._m0[23].y);
    float _208 = _156 + (-fp_c5_1._m0[23].z);
    float _210 = _152 * _154;
    float _212 = inversesqrt(fma(_208, _208, fma(_206, _206, _202 * _202)));
    float _214 = _156 * _156;
    float _216 = 1.0 / (_192 + fma(_160, -_192, _160));
    int _218 = max(0, min(int(trunc((_182 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _220 = _202 * _212;
    float _222 = _152 * _156;
    float _224 = _206 * _212;
    float _226 = _208 * _212;
    float _228 = _146 * _146;
    float _230 = max(fma(_226, _140, fma(_224, _138, _220 * _136)), fp_c1_1._m0[0].y) * max(fma(_226, _140, fma(_224, _138, _220 * _136)), fp_c1_1._m0[0].y);
    float _232 = max(fma(_156, _226, fma(_154, _224, _152 * _220)), fp_c1_1._m0[0].y);
    float _234 = fma(_152, _152, -(_154 * _154));
    float _236 = clamp((-fma(max((-_99.x) + 1.0, (-_99.y) + 1.0), clamp(_77.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_62.x * gl_FragCoord.w) * _90, (_62.y * gl_FragCoord.w) * _90)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    uint _239 = uint(int(uint((((int(uint(_218) >> uint(16)) * 20) << 16) + (((_218 & 65535) * 20) + max(0, min(int(trunc((_178 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _241 = fp_c10_1._m0[int(uint(int(_239)) >> uint(2))][int(_239) & 3];
    float _243 = max(fma(_140, -fp_c5_1._m0[23].z, fma(_138, -fp_c5_1._m0[23].y, _136 * (-fp_c5_1._m0[23].x))), fp_c1_1._m0[0].y);
    float _245 = exp2(_232 * fma(_232, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _247 = exp2(log2(clamp((-_158) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
    float _249 = fma(max(0.0, fma(_234, fp_c5_1._m0[31].y, (fma(_156, -fp_c5_1._m0[26].z, fma(_154, -fp_c5_1._m0[26].y, _152 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_222, fp_c5_1._m0[29].w, fma(_214, fp_c5_1._m0[29].z, fma(_188, fp_c5_1._m0[29].y, _210 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[45].y, _247, fma(_107, -fp_c6_1._m0[9].x, _107));
    float _251 = fma(max(0.0, fma(_234, fp_c5_1._m0[31].x, (fma(_156, -fp_c5_1._m0[25].z, fma(_154, -fp_c5_1._m0[25].y, _152 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_222, fp_c5_1._m0[28].w, fma(_214, fp_c5_1._m0[28].z, fma(_188, fp_c5_1._m0[28].y, _210 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[45].x, _247, fma(_105, -fp_c6_1._m0[9].x, _105));
    float _253 = fma(max(0.0, fma(_234, fp_c5_1._m0[31].z, (fma(_156, -fp_c5_1._m0[27].z, fma(_154, -fp_c5_1._m0[27].y, _152 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_222, fp_c5_1._m0[30].w, fma(_214, fp_c5_1._m0[30].z, fma(_188, fp_c5_1._m0[30].y, _210 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[45].z, _247, fma(_109, -fp_c6_1._m0[9].x, _109));
    float _255 = (_216 * (1.0 / (_192 + fma(_192, -_243, _243)))) * ((_228 * (1.0 / max(fma(_230, _228 * _228, -_230) + 1.0, fp_c1_1._m0[0].y))) * (_228 * (1.0 / max(fma(_230, _228 * _228, -_230) + 1.0, fp_c1_1._m0[0].y))));
    float _257 = fma(_176.x, fma(_196, _172, _174), max(0.0, fma(_204, fp_c5_1._m0[31].x, (fma(_140, fp_c5_1._m0[25].z, fma(_138, fp_c5_1._m0[25].y, _136 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_194, fp_c5_1._m0[28].w, fma(_186, fp_c5_1._m0[28].z, fma(_184, fp_c5_1._m0[28].y, _180 * fp_c5_1._m0[28].x))))) * fma(_251, -_196, _251));
    float _259 = fma(_176.z, fma(_200, _172, _174), max(0.0, fma(_204, fp_c5_1._m0[31].z, (fma(_140, fp_c5_1._m0[27].z, fma(_138, fp_c5_1._m0[27].y, _136 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_194, fp_c5_1._m0[30].w, fma(_186, fp_c5_1._m0[30].z, fma(_184, fp_c5_1._m0[30].y, _180 * fp_c5_1._m0[30].x))))) * fma(_253, -_200, _253));
    float _261 = fma(_176.y, fma(_198, _172, _174), max(0.0, fma(_204, fp_c5_1._m0[31].y, (fma(_140, fp_c5_1._m0[26].z, fma(_138, fp_c5_1._m0[26].y, _136 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_194, fp_c5_1._m0[29].w, fma(_186, fp_c5_1._m0[29].z, fma(_184, fp_c5_1._m0[29].y, _180 * fp_c5_1._m0[29].x))))) * fma(_249, -_198, _249));
    int _263 = floatBitsToInt(_241);
    float _265 = _257;
    float _267 = _261;
    float _269 = _259;
    float _271 = _257;
    float _273 = _259;
    float _275 = _261;
    if (floatBitsToInt(_241) != (-1))
    {
        int _277 = 0;
        float _281;
        float _283;
        float _285;
        int _367;
        do
        {
            int _279 = _263 & 255;
            _281 = _265;
            _283 = _267;
            _285 = _269;
            _287 = uint(_279) >= 30u;
            if (_287)
            {
                break;
            }
            int _289 = _279 << 4;
            uint _291 = uint(int(uint(_289 + 7360) >> uint(2)));
            int _293 = int(_291) + 1;
            uint _295 = uint(int(uint(_289 + 7368) >> uint(2)));
            float _297 = (-_178) + fp_c10_1._m0[int(uint(int(_291)) >> uint(2))][int(_291) & 3];
            float _299 = fp_c10_1._m0[int(uint(_293) >> uint(2))][_293 & 3] + (-_77.y);
            float _301 = (-_182) + fp_c10_1._m0[int(uint(int(_295)) >> uint(2))][int(_295) & 3];
            float _303 = fma(_301, _301, fma(_299, _299, _297 * _297));
            float _305 = _297 * inversesqrt(_303);
            float _307 = _299 * inversesqrt(_303);
            float _309 = _301 * inversesqrt(_303);
            float _311 = _152 + _305;
            float _313 = _154 + _307;
            float _315 = _156 + _309;
            uint _317 = uint(int(uint(_289 + 6880) >> uint(2)));
            int _319 = int(_317) + 1;
            float _321 = inversesqrt(fma(_315, _315, fma(_313, _313, _311 * _311)));
            float _323 = _311 * _321;
            float _325 = _313 * _321;
            float _327 = _315 * _321;
            uint _329 = uint(int(uint(_289 + 8320) >> uint(2)));
            float _331 = max(fma(_156, _327, fma(_154, _325, _152 * _323)), fp_c1_1._m0[0].y);
            float _333 = max(fma(_327, _140, fma(_325, _138, _323 * _136)), fp_c1_1._m0[0].y) * max(fma(_327, _140, fma(_325, _138, _323 * _136)), fp_c1_1._m0[0].y);
            float _335 = fma(_309, _140, fma(_307, _138, _305 * _136));
            uint _337 = uint(int(uint(_289 + 6408) >> uint(2)));
            float _339 = max(_335, fp_c1_1._m0[0].y);
            uint _341 = uint(int(uint(_289 + 6400) >> uint(2)));
            int _343 = int(_341) + 1;
            float _345 = exp2(_331 * fma(_331, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _347 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_329)) >> uint(2))][int(_329) & 3]) != 0;
            float _349 = ((_228 * (1.0 / max(fma(_228 * _228, _333, -_333) + 1.0, fp_c1_1._m0[0].y))) * (_228 * (1.0 / max(fma(_228 * _228, _333, -_333) + 1.0, fp_c1_1._m0[0].y)))) * (_216 * (1.0 / (_192 + fma(_192, -_339, _339))));
            float _351 = _349;
            if (!_347)
            {
                _351 = 1.0;
            }
            float _353 = _351;
            if (_347)
            {
                uint _355 = uint(int(uint(_289 + 7840) >> uint(2)));
                int _357 = int(_355) + 1;
                uint _359 = uint(int(uint(_289 + 6888) >> uint(2)));
                float _361 = fp_c10_1._m0[int(uint(int(_359)) >> uint(2))][int(_359) & 3];
                int _363 = int(_359) + 1;
                uint _365 = uint(int(uint(_289 + 7848) >> uint(2)));
                _353 = exp2(fp_c10_1._m0[int(uint(_363) >> uint(2))][_363 & 3] * log2(clamp(((-_361) + fma(_309, -fp_c10_1._m0[int(uint(int(_365)) >> uint(2))][int(_365) & 3], fma(_307, -fp_c10_1._m0[int(uint(_357) >> uint(2))][_357 & 3], _305 * (-fp_c10_1._m0[int(uint(int(_355)) >> uint(2))][int(_355) & 3])))) * (1.0 / ((-_361) + 1.0)), 0.0, 1.0)));
            }
            _367 = _277 + 1;
            float _369 = (exp2(fp_c10_1._m0[int(uint(_319) >> uint(2))][_319 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_317)) >> uint(2))][int(_317) & 3], -sqrt(_303), fp_c1_1._m0[1].x), 0.0, 1.0))) * _353) * clamp(_335 + (-0.0), 0.0, 1.0);
            float _371 = fma(fp_c10_1._m0[int(uint(int(_341)) >> uint(2))][int(_341) & 3] * _369, fma(_251, fp_c1_1._m0[1].y, ((_196 + fma(_196, -_345, _345)) * _349) * 0.079577468335628509521484375), _265);
            float _373 = fma(fp_c10_1._m0[int(uint(_343) >> uint(2))][_343 & 3] * _369, fma(_249, fp_c1_1._m0[1].y, ((_198 + fma(_198, -_345, _345)) * _349) * 0.079577468335628509521484375), _267);
            float _375 = fma(fp_c10_1._m0[int(uint(int(_337)) >> uint(2))][int(_337) & 3] * _369, fma(_253, fp_c1_1._m0[1].y, ((_200 + fma(_200, -_345, _345)) * _349) * 0.079577468335628509521484375), _269);
            _263 = int(uint(_263) >> uint(8));
            _277 = _367;
            _265 = _371;
            _267 = _373;
            _269 = _375;
            _281 = _371;
            _283 = _373;
            _285 = _375;
        } while (!(_367 >= 4));
        _287 = false;
        _271 = _281;
        _273 = _285;
        _275 = _283;
        if ((_263 & 255) == 30)
        {
            float _377 = _77.y;
            float _379 = 1.0 / (fma(_182, fp_c10_1._m0[565].z, fma(_377, fp_c10_1._m0[565].y, _178 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _381 = 1.0 / fp_c10_1._m0[561].y;
            float _383 = _182 + (-fp_c10_1._m0[557].z);
            float _385 = _383 * fp_c10_1._m0[558].x;
            float _387 = (-_178) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_381, fp_c10_1._m0[557].x);
            float _389 = (-_182) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_381, fp_c10_1._m0[557].z);
            float _391 = _178 + (-fp_c10_1._m0[557].x);
            float _393 = _387 * _387;
            float _395 = _391 * fp_c10_1._m0[558].z;
            float _397 = sqrt(fma(_389, _389, _393)) * (-fp_c10_1._m0[558].y);
            float _399 = ((-float(_385 < _395)) + float(_385 > _395)) * fp_c10_1._m0[561].y;
            float _401 = fma(_383, _383, _391 * _391);
            float _403 = inversesqrt(fma(_389, _389, fma(_397, _397, _393)));
            float _405 = _387 * _403;
            float _407 = _389 * _403;
            float _409 = _397 * _403;
            float _411 = fma(_383, fp_c10_1._m0[558].z, _391 * fp_c10_1._m0[558].x);
            float _413 = _152 + _405;
            float _415 = _154 + _409;
            float _417 = inversesqrt(fma(_407, _407, _405 * _405));
            bool _419 = _411 > 0.0;
            float _421 = fma(_407, _140, fma(_409, _138, _405 * _136));
            float _423 = _401;
            if (_419)
            {
                _423 = sqrt(_401);
            }
            float _425 = _156 + _407;
            float _427 = _423;
            if (!_419)
            {
                _427 = 1.0;
            }
            float _429 = inversesqrt(fma(_425, _425, fma(_415, _415, _413 * _413)));
            bool _431 = fma(_383 * inversesqrt(_401), fp_c10_1._m0[558].z, (_391 * inversesqrt(_401)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _433 = _413 * _429;
            float _435 = _415 * _429;
            float _437 = _425 * _429;
            float _439 = max(fma(_156, _437, fma(_154, _435, _152 * _433)), fp_c1_1._m0[0].y);
            float _441 = clamp(fma(_411 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_411 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _443 = max(fma(_437, _140, fma(_435, _138, _433 * _136)), fp_c1_1._m0[0].y) * max(fma(_437, _140, fma(_435, _138, _433 * _136)), fp_c1_1._m0[0].y);
            float _445 = max(_421, fp_c1_1._m0[0].y);
            float _447 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_391, fma(_399, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_383 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_399 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_391, fma(_399, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_383 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_399 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _449 = _439;
            if (_431)
            {
                _449 = fma(_447, -_447, fp_c1_1._m0[1].x) * fma(_447, -_447, fp_c1_1._m0[1].x);
            }
            float _451 = _449;
            if (!_431)
            {
                _451 = 1.0;
            }
            float _453 = exp2(_439 * fma(_439, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _455 = (_216 * (1.0 / (_192 + fma(_192, -_445, _445)))) * ((_228 * (1.0 / max(fma(_228 * _228, _443, -_443) + 1.0, fp_c1_1._m0[0].y))) * (_228 * (1.0 / max(fma(_228 * _228, _443, -_443) + 1.0, fp_c1_1._m0[0].y))));
            float _457 = clamp(_421 + (-0.0), 0.0, 1.0) * ((exp2(log2(clamp(fma(_427, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_407 * _417, -fp_c10_1._m0[558].z, (_405 * _417) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w)) * min(fma(_441, -_441, fp_c1_1._m0[1].x) * fma(_441, -_441, fp_c1_1._m0[1].x), _451));
            float _459 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_182, fp_c10_1._m0[562].z, fma(_377, fp_c10_1._m0[562].y, _178 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _379, 0.5, 0.5), (-fma((fma(_182, fp_c10_1._m0[563].z, fma(_377, fp_c10_1._m0[563].y, _178 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _379, 0.5, 0.5)) + 1.0)).z > fma((fma(_182, fp_c10_1._m0[564].z, fma(_377, fp_c10_1._m0[564].y, _178 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _379, 0.5, 0.5)) || (_411 <= 0.0));
            _271 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _457) * fma(_251, fp_c1_1._m0[1].y, ((_196 + fma(_196, -_453, _453)) * _455) * 0.079577468335628509521484375), _459, _281);
            _273 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _457) * fma(_253, fp_c1_1._m0[1].y, ((_200 + fma(_200, -_453, _453)) * _455) * 0.079577468335628509521484375), _459, _285);
            _275 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _457) * fma(_249, fp_c1_1._m0[1].y, ((_198 + fma(_198, -_453, _453)) * _455) * 0.079577468335628509521484375), _459, _283);
        }
    }
    float _461 = _178 + (-fp_c3_1._m0[11].w);
    float _463 = _77.y;
    float _465 = _182 + (-fp_c3_1._m0[13].w);
    float _467 = clamp(fma(_140, -fp_c5_1._m0[23].z, fma(_138, -fp_c5_1._m0[23].y, _136 * (-fp_c5_1._m0[23].x))), 0.0, 1.0);
    float _469 = _463 + (-fp_c3_1._m0[12].w);
    float _471 = fma(_465, _465, fma(_469, _469, _461 * _461));
    float _473 = clamp(fma(fma(_182, fp_c5_1._m0[14].z, fma(_463, fp_c5_1._m0[14].y, _178 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _475 = fma(_236, fma(_255 * (_196 + fma(_196, -_245, _245)), fp_c1_1._m0[0].w, _251 * 0.3183098733425140380859375) * (_467 * fp_c5_1._m0[5].x), _271);
    float _477 = clamp(fma(_236, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _479 = fma(_236, fma(_255 * (_200 + fma(_200, -_245, _245)), fp_c1_1._m0[0].w, _253 * 0.3183098733425140380859375) * (_467 * fp_c5_1._m0[5].z), _273);
    float _481 = fma(_236, fma(_255 * (_198 + fma(_198, -_245, _245)), fp_c1_1._m0[0].w, _249 * 0.3183098733425140380859375) * (_467 * fp_c5_1._m0[5].y), _275);
    float _483 = exp2(log2(clamp(sqrt(_471) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_465 * inversesqrt(_471), fp_c5_1._m0[23].z, fma(_469 * inversesqrt(_471), fp_c5_1._m0[23].y, (_461 * inversesqrt(_471)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _485 = fma((-_475) + fp_c5_1._m0[13].x, _473, _475);
    float _487 = fma((-_481) + fp_c5_1._m0[13].y, _473, _481);
    float _489 = fma((-_479) + fp_c5_1._m0[13].z, _473, _479);
    float _491 = clamp((-exp2((clamp(fma(sqrt(_471), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_485) + fma(fma((_483 * fp_c7_1._m0[55].x) * _477, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _491, _485);
    _75.y = fma((-_487) + fma(fma((_483 * fp_c7_1._m0[55].y) * _477, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _491, _487);
    _75.z = fma((-_489) + fma(fma((_483 * fp_c7_1._m0[55].z) * _477, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _491, _489);
    _75.w = clamp(_88 + (-0.0), 0.0, 1.0);
}


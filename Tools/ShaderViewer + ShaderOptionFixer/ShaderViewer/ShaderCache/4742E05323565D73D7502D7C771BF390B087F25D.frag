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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_E;
layout(binding = 1) uniform sampler2D fp_tex_tcb_10;
layout(binding = 2) uniform sampler2D fp_tex_tcb_12;
layout(binding = 3) uniform sampler2D fp_tex_tcb_22;
layout(binding = 4) uniform sampler2D fp_tex_tcb_24;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 8) uniform sampler2D fp_tex_tcb_38;
layout(binding = 9) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _64;
layout(location = 5) in vec4 _66;
layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 7) in vec4 _76;
layout(location = 3) in vec4 _78;
layout(location = 0) out vec4 _81;
uint _6[12];

void main()
{
    bool _311 = false;
    float _88 = 1.0 / (_64.z * gl_FragCoord.w);
    float _90 = _68.x;
    float _92 = _68.y;
    float _94 = 1.0 / _66.w;
    vec2 _98 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _100 = _98.x;
    float _102 = _98.y;
    float _104 = texture(fp_tex_tcb_12, vec2(_90, _92)).x;
    float _106 = _70.x;
    float _108 = _70.y;
    float _110 = _70.z;
    float _112 = _72.y;
    float _114 = _72.z;
    float _116 = _72.x;
    float _118 = _72.w;
    float _120 = _74.x;
    float _122 = _74.y;
    float _124 = _74.z;
    float _126 = inversesqrt(fma(_110, _110, fma(_108, _108, _106 * _106)));
    float _128 = _110 * _126;
    float _130 = _106 * _126;
    float _132 = _108 * _126;
    float _134 = sqrt(clamp((-fma(_100, _100, _102 * _102)) + 1.0, 0.0, 1.0));
    float _136 = fma(_130, _134, fma(_100, _116, _102 * (fma(_132, _114, -(_128 * _112)) * _118)));
    float _138 = fma(_132, _134, fma(_100, _112, _102 * (fma(_128, _116, -(_130 * _114)) * _118)));
    float _140 = fma(_128, _134, fma(_100, _114, _102 * (fma(_130, _112, -(_132 * _116)) * _118)));
    float _142 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _144 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _146 = _120 * (-_142);
    float _148 = inversesqrt(fma(_140, _140, fma(_138, _138, _136 * _136)));
    float _150 = _122 * (-_142);
    float _152 = _124 * (-_142);
    float _154 = _136 * _148;
    float _156 = _138 * _148;
    float _158 = _140 * _148;
    float _160 = fma(_158, _152, fma(_156, _150, _154 * _146));
    float _162 = max(_160, fp_c1_1._m0[0].z);
    float _164 = fma(_156 * (-_160), -2.0, -_150);
    float _166 = fma(_154 * (-_160), -2.0, -_146);
    float _168 = fma(_158 * (-_160), -2.0, -_152);
    float _170 = 1.0 / max(abs(_168), max(abs(_166), abs(_164)));
    vec2 _172 = texture(fp_tex_tcb_38, vec2(_162, (-_144) + (-0.0))).xy;
    float _174 = _172.x;
    float _176 = _172.y;
    vec3 _180 = texture(fp_tex_tcb_36, vec4(_166 * _170, _164 * _170, _168 * _170, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_144 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _182 = texture(fp_tex_tcb_22, vec2(_76.x, _76.y)).xy;
    vec4 _185 = texture(fp_tex_tcb_24, vec2(_76.z, _76.w)).xyzw;
    float _187 = _185.w;
    float _189 = _146 + (-fp_c5_1._m0[23].x);
    float _191 = _78.x;
    float _193 = _150 + (-fp_c5_1._m0[23].y);
    float _195 = _152 + (-fp_c5_1._m0[23].z);
    float _197 = _78.z;
    float _199 = inversesqrt(fma(_195, _195, fma(_193, _193, _189 * _189)));
    float _201 = _189 * _199;
    float _203 = _193 * _199;
    float _205 = _154 * _156;
    float _207 = _195 * _199;
    float _209 = _156 * _158;
    float _211 = _154 * _158;
    float _213 = _158 * _158;
    float _215 = _144 * _144;
    float _217 = fma(_144, 0.5, 0.5);
    float _219 = (_217 * 0.5) * _217;
    float _221 = max(fma(_158, _207, fma(_156, _203, _154 * _201)), fp_c1_1._m0[0].z) * max(fma(_158, _207, fma(_156, _203, _154 * _201)), fp_c1_1._m0[0].z);
    float _223 = max(fma(_152, _207, fma(_150, _203, _146 * _201)), fp_c1_1._m0[0].z);
    float _225 = fma(_156, -fp_c5_1._m0[23].y, _154 * (-fp_c5_1._m0[23].x));
    float _227 = max(fma(_158, -fp_c5_1._m0[23].z, _225), fp_c1_1._m0[0].z);
    int _230 = max(0, min(int(trunc((_197 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _232 = fma(_154, _154, -(_156 * _156));
    float _234 = 1.0 / (_219 + fma(_162, -_219, _162));
    float _236 = exp2(_223 * fma(_223, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _238 = fma(_104, (-0.039999999105930328369140625) + fp_c6_1._m0[7].y, fp_c1_1._m0[0].y);
    float _240 = fma(_104, (-0.039999999105930328369140625) + fp_c6_1._m0[7].x, fp_c1_1._m0[0].y);
    float _242 = fma(_104, (-0.039999999105930328369140625) + fp_c6_1._m0[7].z, fp_c1_1._m0[0].y);
    float _244 = (_234 * (1.0 / (_219 + fma(_219, -_227, _227)))) * ((_215 * (1.0 / max(fma(_221, _215 * _215, -_221) + 1.0, fp_c1_1._m0[0].z))) * (_215 * (1.0 / max(fma(_221, _215 * _215, -_221) + 1.0, fp_c1_1._m0[0].z))));
    uint _247 = uint(int(uint((((int(uint(_230) >> uint(16)) * 20) << 16) + (((_230 & 65535) * 20) + max(0, min(int(trunc((_191 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _249 = fp_c10_1._m0[int(uint(int(_247)) >> uint(2))][int(_247) & 3];
    float _251 = fma(_104, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    float _253 = fma(_240, -_251, _251);
    float _255 = _64.w;
    float _257 = fma(_104, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _259 = clamp(fma(_158, -fp_c5_1._m0[23].z, _225), 0.0, 1.0);
    float _261 = fma(_104, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _263 = fma(_242, -_261, _261);
    float _265 = fma(_238, -_257, _257);
    float _267 = ((_185.y * _187) * _255) * 32.0;
    float _269 = clamp(_255 * clamp(fma(_182.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _271 = ((_185.x * _187) * _255) * 32.0;
    float _273 = ((_185.z * _187) * _255) * 32.0;
    float _275 = fma(_265, _267, fma(_180.y, fma(_238, _174, _176), max(0.0, fma(_232, fp_c5_1._m0[31].y, (fma(_158, fp_c5_1._m0[26].z, fma(_156, fp_c5_1._m0[26].y, _154 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_211, fp_c5_1._m0[29].w, fma(_213, fp_c5_1._m0[29].z, fma(_209, fp_c5_1._m0[29].y, _205 * fp_c5_1._m0[29].x))))) * _265));
    float _277 = fma(_253, _271, fma(_180.x, fma(_240, _174, _176), max(0.0, fma(_232, fp_c5_1._m0[31].x, (fma(_158, fp_c5_1._m0[25].z, fma(_156, fp_c5_1._m0[25].y, _154 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_211, fp_c5_1._m0[28].w, fma(_213, fp_c5_1._m0[28].z, fma(_209, fp_c5_1._m0[28].y, _205 * fp_c5_1._m0[28].x))))) * _253));
    float _279 = fma(_263, _273, fma(_180.z, fma(_242, _174, _176), max(0.0, fma(_232, fp_c5_1._m0[31].z, (fma(_158, fp_c5_1._m0[27].z, fma(_156, fp_c5_1._m0[27].y, _154 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_211, fp_c5_1._m0[30].w, fma(_213, fp_c5_1._m0[30].z, fma(_209, fp_c5_1._m0[30].y, _205 * fp_c5_1._m0[30].x))))) * _263));
    float _281 = clamp((-_269) + 1.0, 0.0, 1.0);
    float _283 = clamp((-fma(_269, fp_c7_1._m0[37].w, clamp(_255 * clamp(fma(_182.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(clamp(_78.w + fp_c7_1._m0[36].z, 0.0, 1.0), max(0.0, (-texture(fp_tex_tcb_2A, vec2(fma(_66.x * _94, 0.5, 0.5), fma(_66.y * _94, -0.5, 0.5))).x) + 1.0), fma(texture(fp_tex_tcb_28, vec2((_64.x * gl_FragCoord.w) * _88, (_64.y * gl_FragCoord.w) * _88)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    int _285 = floatBitsToInt(_249);
    float _287 = _277;
    float _289 = _275;
    float _291 = _279;
    float _293 = _279;
    float _295 = _275;
    float _297 = _277;
    if (floatBitsToInt(_249) != (-1))
    {
        int _299 = 0;
        float _303;
        float _305;
        float _307;
        int _393;
        do
        {
            int _301 = _285 & 255;
            _303 = _287;
            _305 = _289;
            _307 = _291;
            _311 = uint(_301) >= 30u;
            if (_311)
            {
                break;
            }
            int _313 = _301 << 4;
            uint _315 = uint(int(uint(_313 + 7360) >> uint(2)));
            int _317 = int(_315) + 1;
            uint _319 = uint(int(uint(_313 + 7368) >> uint(2)));
            float _321 = (-_191) + fp_c10_1._m0[int(uint(int(_315)) >> uint(2))][int(_315) & 3];
            float _323 = fp_c10_1._m0[int(uint(_317) >> uint(2))][_317 & 3] + (-_78.y);
            float _325 = (-_197) + fp_c10_1._m0[int(uint(int(_319)) >> uint(2))][int(_319) & 3];
            float _327 = fma(_325, _325, fma(_323, _323, _321 * _321));
            float _329 = _321 * inversesqrt(_327);
            float _331 = _323 * inversesqrt(_327);
            float _333 = _325 * inversesqrt(_327);
            float _335 = _146 + _329;
            float _337 = _150 + _331;
            float _339 = _152 + _333;
            float _341 = inversesqrt(fma(_339, _339, fma(_337, _337, _335 * _335)));
            float _343 = _335 * _341;
            float _345 = _337 * _341;
            float _347 = _339 * _341;
            uint _349 = uint(int(uint(_313 + 6880) >> uint(2)));
            int _351 = int(_349) + 1;
            float _353 = fma(_158, _333, fma(_156, _331, _154 * _329));
            float _355 = max(fma(_152, _347, fma(_150, _345, _146 * _343)), fp_c1_1._m0[0].z);
            float _357 = max(fma(_158, _347, fma(_156, _345, _154 * _343)), fp_c1_1._m0[0].z) * max(fma(_158, _347, fma(_156, _345, _154 * _343)), fp_c1_1._m0[0].z);
            float _359 = max(_353, fp_c1_1._m0[0].z);
            uint _361 = uint(int(uint(_313 + 8320) >> uint(2)));
            float _363 = exp2(_355 * fma(_355, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _365 = (_234 * (1.0 / (_219 + fma(_219, -_359, _359)))) * ((_215 * (1.0 / max(fma(_215 * _215, _357, -_357) + 1.0, fp_c1_1._m0[0].z))) * (_215 * (1.0 / max(fma(_215 * _215, _357, -_357) + 1.0, fp_c1_1._m0[0].z))));
            uint _367 = uint(int(uint(_313 + 6408) >> uint(2)));
            float _369 = (_238 + fma(_238, -_363, _363)) * _365;
            bool _371 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_361)) >> uint(2))][int(_361) & 3]) != 0;
            uint _373 = uint(int(uint(_313 + 6400) >> uint(2)));
            int _375 = int(_373) + 1;
            float _377 = _369;
            if (!_371)
            {
                _377 = 1.0;
            }
            float _379 = _377;
            if (_371)
            {
                uint _381 = uint(int(uint(_313 + 7840) >> uint(2)));
                int _383 = int(_381) + 1;
                uint _385 = uint(int(uint(_313 + 7848) >> uint(2)));
                uint _387 = uint(int(uint(_313 + 6888) >> uint(2)));
                float _389 = fp_c10_1._m0[int(uint(int(_387)) >> uint(2))][int(_387) & 3];
                int _391 = int(_387) + 1;
                _379 = exp2(fp_c10_1._m0[int(uint(_391) >> uint(2))][_391 & 3] * log2(clamp(((-_389) + fma(_333, -fp_c10_1._m0[int(uint(int(_385)) >> uint(2))][int(_385) & 3], fma(_331, -fp_c10_1._m0[int(uint(_383) >> uint(2))][_383 & 3], _329 * (-fp_c10_1._m0[int(uint(int(_381)) >> uint(2))][int(_381) & 3])))) * (1.0 / ((-_389) + 1.0)), 0.0, 1.0)));
            }
            _393 = _299 + 1;
            float _395 = (exp2(fp_c10_1._m0[int(uint(_351) >> uint(2))][_351 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_349)) >> uint(2))][int(_349) & 3], -sqrt(_327), fp_c1_1._m0[1].y), 0.0, 1.0))) * _379) * clamp(_353 + (-0.0), 0.0, 1.0);
            float _397 = fma(fp_c10_1._m0[int(uint(int(_373)) >> uint(2))][int(_373) & 3] * _395, fma(_251, fp_c1_1._m0[1].z, ((_240 + fma(_240, -_363, _363)) * _365) * 0.079577468335628509521484375), _287);
            float _399 = fma(fp_c10_1._m0[int(uint(_375) >> uint(2))][_375 & 3] * _395, fma(_257, fp_c1_1._m0[1].z, _369 * 0.079577468335628509521484375), _289);
            float _401 = fma(fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3] * _395, fma(_261, fp_c1_1._m0[1].z, ((_242 + fma(_242, -_363, _363)) * _365) * 0.079577468335628509521484375), _291);
            _285 = int(uint(_285) >> uint(8));
            _299 = _393;
            _287 = _397;
            _289 = _399;
            _291 = _401;
            _303 = _397;
            _305 = _399;
            _307 = _401;
        } while (!(_393 >= 4));
        _311 = false;
        _293 = _307;
        _295 = _305;
        _297 = _303;
        if ((_285 & 255) == 30)
        {
            float _403 = 1.0 / fp_c10_1._m0[561].y;
            float _405 = _197 + (-fp_c10_1._m0[557].z);
            float _407 = (-_191) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_403, fp_c10_1._m0[557].x);
            float _409 = (-_197) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_403, fp_c10_1._m0[557].z);
            float _411 = _407 * _407;
            float _413 = sqrt(fma(_409, _409, _411)) * (-fp_c10_1._m0[558].y);
            float _415 = _191 + (-fp_c10_1._m0[557].x);
            float _417 = inversesqrt(fma(_409, _409, fma(_413, _413, _411)));
            float _419 = _407 * _417;
            float _421 = _413 * _417;
            float _423 = _409 * _417;
            float _425 = _415 * fp_c10_1._m0[558].z;
            float _427 = _146 + _419;
            float _429 = _150 + _421;
            float _431 = _152 + _423;
            float _433 = _405 * fp_c10_1._m0[558].x;
            float _435 = inversesqrt(fma(_431, _431, fma(_429, _429, _427 * _427)));
            float _437 = _78.y;
            float _439 = _427 * _435;
            float _441 = ((-float(_433 < _425)) + float(_433 > _425)) * fp_c10_1._m0[561].y;
            float _443 = _429 * _435;
            float _445 = fma(_405, _405, _415 * _415);
            float _447 = 1.0 / (fma(_197, fp_c10_1._m0[565].z, fma(_437, fp_c10_1._m0[565].y, _191 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _449 = fma(_405, fp_c10_1._m0[558].z, _415 * fp_c10_1._m0[558].x);
            float _451 = fma(_158, _423, fma(_156, _421, _154 * _419));
            bool _453 = _449 > 0.0;
            float _455 = inversesqrt(fma(_423, _423, _419 * _419));
            float _457 = _431 * _435;
            float _459 = _431;
            if (_453)
            {
                _459 = sqrt(_445);
            }
            float _461 = _459;
            if (!_453)
            {
                _461 = 1.0;
            }
            bool _463 = fma(_405 * inversesqrt(_445), fp_c10_1._m0[558].z, (_415 * inversesqrt(_445)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _465 = max(fma(_158, _457, fma(_156, _443, _154 * _439)), fp_c1_1._m0[0].z) * max(fma(_158, _457, fma(_156, _443, _154 * _439)), fp_c1_1._m0[0].z);
            float _467 = clamp(fma(_449 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_449 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _469 = max(fma(_152, _457, fma(_150, _443, _146 * _439)), fp_c1_1._m0[0].z);
            float _471 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_415, fma(_441, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_405 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_441 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_415, fma(_441, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_405 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_441 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _473 = max(_451, fp_c1_1._m0[0].z);
            float _475 = log2(clamp(fma(_461, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _477 = _475;
            if (_463)
            {
                _477 = fma(_471, -_471, fp_c1_1._m0[1].y) * fma(_471, -_471, fp_c1_1._m0[1].y);
            }
            float _479 = exp2(_469 * fma(_469, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _481 = _477;
            if (!_463)
            {
                _481 = 1.0;
            }
            float _483 = (min(fma(_467, -_467, fp_c1_1._m0[1].y) * fma(_467, -_467, fp_c1_1._m0[1].y), _481) * (exp2(_475) * exp2(log2(clamp((fma(_423 * _455, -fp_c10_1._m0[558].z, (_419 * _455) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_451 + (-0.0), 0.0, 1.0);
            float _485 = (_234 * (1.0 / (_219 + fma(_219, -_473, _473)))) * ((_215 * (1.0 / max(fma(_215 * _215, _465, -_465) + 1.0, fp_c1_1._m0[0].z))) * (_215 * (1.0 / max(fma(_215 * _215, _465, -_465) + 1.0, fp_c1_1._m0[0].z))));
            float _487 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_197, fp_c10_1._m0[562].z, fma(_437, fp_c10_1._m0[562].y, _191 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _447, 0.5, 0.5), (-fma((fma(_197, fp_c10_1._m0[563].z, fma(_437, fp_c10_1._m0[563].y, _191 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _447, 0.5, 0.5)) + 1.0)).z > fma((fma(_197, fp_c10_1._m0[564].z, fma(_437, fp_c10_1._m0[564].y, _191 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _447, 0.5, 0.5)) || (_449 <= 0.0));
            _293 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _483) * fma(_261, fp_c1_1._m0[1].z, ((_242 + fma(_242, -_479, _479)) * _485) * 0.079577468335628509521484375), _487, _307);
            _295 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _483) * fma(_257, fp_c1_1._m0[1].z, ((_238 + fma(_238, -_479, _479)) * _485) * 0.079577468335628509521484375), _487, _305);
            _297 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _483) * fma(_251, fp_c1_1._m0[1].z, ((_240 + fma(_240, -_479, _479)) * _485) * 0.079577468335628509521484375), _487, _303);
        }
    }
    float _489 = _191 + (-fp_c3_1._m0[11].w);
    float _491 = _78.y;
    float _493 = _197 + (-fp_c3_1._m0[13].w);
    float _495 = fma(_281, _293, _283 * (fma(_244 * (_242 + fma(_242, -_236, _236)), fp_c1_1._m0[1].x, _261 * 0.3183098733425140380859375) * fma(_259, fp_c5_1._m0[5].z, _273)));
    float _497 = _491 + (-fp_c3_1._m0[12].w);
    float _499 = fma(_493, _493, fma(_497, _497, _489 * _489));
    float _501 = clamp(fma(fma(_197, fp_c5_1._m0[14].z, fma(_491, fp_c5_1._m0[14].y, _191 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _503 = clamp(fma(_283 * _281, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _505 = fma(_281, _295, _283 * (fma(_244 * (_238 + fma(_238, -_236, _236)), fp_c1_1._m0[1].x, _257 * 0.3183098733425140380859375) * fma(_259, fp_c5_1._m0[5].y, _267)));
    float _507 = fma(_281, _297, _283 * (fma(_244 * (_240 + fma(_240, -_236, _236)), fp_c1_1._m0[1].x, _251 * 0.3183098733425140380859375) * fma(_259, fp_c5_1._m0[5].x, _271)));
    float _509 = exp2(log2(clamp(sqrt(_499) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_493 * inversesqrt(_499), fp_c5_1._m0[23].z, fma(_497 * inversesqrt(_499), fp_c5_1._m0[23].y, (_489 * inversesqrt(_499)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _511 = fma((-_507) + fp_c5_1._m0[13].x, _501, _507);
    float _513 = fma((-_505) + fp_c5_1._m0[13].y, _501, _505);
    float _515 = fma((-_495) + fp_c5_1._m0[13].z, _501, _495);
    float _517 = clamp((-exp2((clamp(fma(sqrt(_499), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _81.x = fma((-_511) + fma(fma((_509 * fp_c7_1._m0[55].x) * _503, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _517, _511);
    _81.y = fma((-_513) + fma(fma((_509 * fp_c7_1._m0[55].y) * _503, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _517, _513);
    _81.z = fma((-_515) + fma(fma((_509 * fp_c7_1._m0[55].z) * _503, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _517, _515);
    _81.w = 1.0;
}


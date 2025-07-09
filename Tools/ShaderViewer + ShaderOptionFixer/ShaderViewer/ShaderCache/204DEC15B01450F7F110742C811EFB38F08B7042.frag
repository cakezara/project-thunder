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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_C;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_12;
layout(binding = 5) uniform sampler2D fp_tex_tcb_14;
layout(binding = 6) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 7) uniform sampler2D fp_tex_tcb_22;
layout(binding = 8) uniform sampler2D fp_tex_tcb_24;
layout(binding = 9) uniform sampler2D fp_tex_tcb_28;
layout(binding = 10) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 11) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 12) uniform sampler2D fp_tex_tcb_38;
layout(binding = 13) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _72;
layout(location = 1) in vec4 _74;
layout(location = 2) in vec4 _76;
layout(location = 4) in vec4 _78;
layout(location = 7) in vec4 _80;
layout(location = 5) in vec4 _82;
layout(location = 6) in vec4 _84;
layout(location = 3) in vec4 _86;
layout(location = 0) out vec4 _89;
uint _6[12];

void main()
{
    bool _349 = false;
    float _96 = _72.x;
    float _98 = _72.y;
    vec2 _102 = texture(fp_tex_tcb_E, vec2(_96, _98)).xy;
    float _104 = _102.x;
    float _106 = _102.y;
    vec3 _110 = texture(fp_tex_tcb_A, vec2(_96, _98)).xyz;
    float _112 = _110.x;
    float _114 = _110.y;
    float _116 = _110.z;
    vec3 _118 = texture(fp_tex_tcb_14, vec2(_96, _98)).xyz;
    float _120 = _74.x;
    float _122 = _74.y;
    float _124 = _74.z;
    float _126 = _76.y;
    float _128 = _76.z;
    float _130 = _76.x;
    float _132 = _76.w;
    float _134 = _78.x;
    float _136 = _78.y;
    float _138 = _78.z;
    float _140 = inversesqrt(fma(_124, _124, fma(_122, _122, _120 * _120)));
    float _142 = _124 * _140;
    float _144 = _120 * _140;
    float _146 = _122 * _140;
    float _148 = sqrt(clamp((-fma(_104, _104, _106 * _106)) + 1.0, 0.0, 1.0));
    float _150 = fma(_144, _148, fma(_104, _130, _106 * (fma(_146, _128, -(_142 * _126)) * _132)));
    float _152 = fma(_146, _148, fma(_104, _126, _106 * (fma(_142, _130, -(_144 * _128)) * _132)));
    float _154 = fma(_142, _148, fma(_104, _128, _106 * (fma(_144, _126, -(_146 * _130)) * _132)));
    float _156 = inversesqrt(fma(_138, _138, fma(_136, _136, _134 * _134)));
    float _158 = _134 * (-_156);
    float _160 = inversesqrt(fma(_154, _154, fma(_152, _152, _150 * _150)));
    float _162 = _136 * (-_156);
    float _164 = _138 * (-_156);
    float _166 = 1.0 / _82.w;
    float _168 = _150 * _160;
    float _170 = _152 * _160;
    float _172 = _154 * _160;
    float _174 = fma(_172, _164, fma(_170, _162, _168 * _158));
    float _176 = max(texture(fp_tex_tcb_10, vec2(_96, _98)).x, fp_c1_1._m0[0].x);
    float _178 = 1.0 / (_84.z * gl_FragCoord.w);
    float _180 = fma(_168 * (-_174), -2.0, -_158);
    float _182 = fma(_170 * (-_174), -2.0, -_162);
    float _184 = fma(_172 * (-_174), -2.0, -_164);
    float _186 = max(_174, fp_c1_1._m0[0].z);
    float _188 = _158 + (-fp_c5_1._m0[23].x);
    float _190 = 1.0 / max(abs(_184), max(abs(_180), abs(_182)));
    vec3 _192 = texture(fp_tex_tcb_1C, vec2(_96, _98)).xyz;
    float _194 = _192.x;
    float _196 = _192.y;
    float _198 = _192.z;
    float _200 = texture(fp_tex_tcb_12, vec2(_96, _98)).x;
    vec2 _202 = texture(fp_tex_tcb_2A, vec2(fma(_82.x * _166, 0.5, 0.5), fma(_82.y * _166, -0.5, 0.5))).xy;
    vec2 _204 = texture(fp_tex_tcb_38, vec2(_186, (-_176) + (-0.0))).xy;
    float _206 = _204.x;
    float _208 = _204.y;
    vec2 _210 = texture(fp_tex_tcb_22, vec2(_80.x, _80.y)).xy;
    vec3 _212 = texture(fp_tex_tcb_36, vec4(_180 * _190, _182 * _190, _184 * _190, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_176 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec4 _215 = texture(fp_tex_tcb_24, vec2(_80.z, _80.w)).xyzw;
    float _217 = _215.w;
    float _219 = _86.x;
    float _221 = _86.z;
    float _223 = _162 + (-fp_c5_1._m0[23].y);
    float _225 = _164 + (-fp_c5_1._m0[23].z);
    float _227 = inversesqrt(fma(_225, _225, fma(_223, _223, _188 * _188)));
    float _229 = _188 * _227;
    float _231 = _223 * _227;
    float _233 = _225 * _227;
    float _235 = clamp(texture(fp_tex_tcb_C, vec2(_96, _98)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _237 = _170 * _172;
    int _240 = max(0, min(int(trunc((_221 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _242 = max(fma(_164, _233, fma(_162, _231, _158 * _229)), fp_c1_1._m0[0].z);
    float _244 = fma((-_114) + fp_c6_1._m0[92].y, _235, _114);
    float _246 = _168 * _170;
    float _248 = _172 * _172;
    float _250 = fma((-_116) + fp_c6_1._m0[92].z, _235, _116);
    float _252 = _176 * _176;
    float _254 = fma((-_112) + fp_c6_1._m0[92].x, _235, _112);
    float _256 = fma(_176, 0.5, 0.5);
    float _258 = fma(_170, -fp_c5_1._m0[23].y, _168 * (-fp_c5_1._m0[23].x));
    float _260 = _252 * _252;
    float _262 = max(fma(_172, _233, fma(_170, _231, _168 * _229)), fp_c1_1._m0[0].z) * max(fma(_172, _233, fma(_170, _231, _168 * _229)), fp_c1_1._m0[0].z);
    float _264 = (_256 * 0.5) * _256;
    float _266 = max(fma(_172, -fp_c5_1._m0[23].z, _258), fp_c1_1._m0[0].z);
    float _268 = _168 * _172;
    float _270 = 1.0 / (_264 + fma(_186, -_264, _186));
    float _272 = fma(_168, _168, -(_170 * _170));
    float _274 = (_270 * (1.0 / (_264 + fma(_264, -_266, _266)))) * ((_252 * (1.0 / max(fma(_262, _260, -_262) + 1.0, fp_c1_1._m0[0].z))) * (_252 * (1.0 / max(fma(_262, _260, -_262) + 1.0, fp_c1_1._m0[0].z))));
    float _276 = exp2(_242 * fma(_242, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _278 = clamp(fma(_172, -fp_c5_1._m0[23].z, _258), 0.0, 1.0);
    float _280 = fma(_244, -_200, _244);
    float _282 = fma(_200, _254 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _284 = fma(_254, -_200, _254);
    float _286 = fma(_250, -_200, _250);
    float _288 = fma(_200, _244 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _290 = fma(_200, _250 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    uint _293 = uint(int(uint((((int(uint(_240) >> uint(16)) * 20) << 16) + (((_240 & 65535) * 20) + max(0, min(int(trunc((_219 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _295 = fp_c10_1._m0[int(uint(int(_293)) >> uint(2))][int(_293) & 3];
    float _297 = fma(_280, -_288, _280);
    float _299 = _84.w;
    float _301 = fma(_286, -_290, _286);
    float _303 = fma(_284, -_282, _284);
    float _305 = clamp(_299 * clamp(fma(_210.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _307 = ((_215.x * _217) * _299) * 32.0;
    float _309 = ((_215.z * _217) * _299) * 32.0;
    float _311 = ((_215.y * _217) * _299) * 32.0;
    float _313 = clamp((-_305) + 1.0, 0.0, 1.0);
    float _315 = fma(_301, _309, fma(_212.z, fma(_290, _206, _208), max(0.0, fma(_272, fp_c5_1._m0[31].z, (fma(_172, fp_c5_1._m0[27].z, fma(_170, fp_c5_1._m0[27].y, _168 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_268, fp_c5_1._m0[30].w, fma(_248, fp_c5_1._m0[30].z, fma(_237, fp_c5_1._m0[30].y, _246 * fp_c5_1._m0[30].x))))) * _301));
    float _317 = fma(_303, _307, fma(_212.x, fma(_282, _206, _208), max(0.0, fma(_272, fp_c5_1._m0[31].x, (fma(_172, fp_c5_1._m0[25].z, fma(_170, fp_c5_1._m0[25].y, _168 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_268, fp_c5_1._m0[28].w, fma(_248, fp_c5_1._m0[28].z, fma(_237, fp_c5_1._m0[28].y, _246 * fp_c5_1._m0[28].x))))) * _303));
    float _319 = fma(_297, _311, fma(_212.y, fma(_288, _206, _208), max(0.0, fma(_272, fp_c5_1._m0[31].y, (fma(_172, fp_c5_1._m0[26].z, fma(_170, fp_c5_1._m0[26].y, _168 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_268, fp_c5_1._m0[29].w, fma(_248, fp_c5_1._m0[29].z, fma(_237, fp_c5_1._m0[29].y, _246 * fp_c5_1._m0[29].x))))) * _297));
    float _321 = clamp((-fma(_305, fp_c7_1._m0[37].w, clamp(_299 * clamp(fma(_210.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_202.x) + 1.0, (-_202.y) + 1.0), clamp(_86.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_84.x * gl_FragCoord.w) * _178, (_84.y * gl_FragCoord.w) * _178)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _323 = _319;
    float _325 = _315;
    float _327 = _317;
    float _329 = _319;
    float _331 = _315;
    float _333 = _317;
    if (floatBitsToInt(_295) != (-1))
    {
        int _335 = floatBitsToInt(_295);
        int _337 = 0;
        float _341;
        float _343;
        float _345;
        int _431;
        do
        {
            int _339 = _335 & 255;
            _341 = _327;
            _343 = _323;
            _345 = _325;
            _349 = uint(_339) >= 30u;
            if (_349)
            {
                break;
            }
            int _351 = _339 << 4;
            uint _353 = uint(int(uint(_351 + 7360) >> uint(2)));
            int _355 = int(_353) + 1;
            uint _357 = uint(int(uint(_351 + 7368) >> uint(2)));
            float _359 = (-_219) + fp_c10_1._m0[int(uint(int(_353)) >> uint(2))][int(_353) & 3];
            float _361 = fp_c10_1._m0[int(uint(_355) >> uint(2))][_355 & 3] + (-_86.y);
            float _363 = (-_221) + fp_c10_1._m0[int(uint(int(_357)) >> uint(2))][int(_357) & 3];
            float _365 = fma(_363, _363, fma(_361, _361, _359 * _359));
            float _367 = _359 * inversesqrt(_365);
            float _369 = _361 * inversesqrt(_365);
            float _371 = _363 * inversesqrt(_365);
            float _373 = _158 + _367;
            float _375 = _162 + _369;
            float _377 = _164 + _371;
            uint _379 = uint(int(uint(_351 + 6880) >> uint(2)));
            int _381 = int(_379) + 1;
            float _383 = inversesqrt(fma(_377, _377, fma(_375, _375, _373 * _373)));
            float _385 = _373 * _383;
            float _387 = _375 * _383;
            float _389 = _377 * _383;
            uint _391 = uint(int(uint(_351 + 8320) >> uint(2)));
            float _393 = fma(_172, _371, fma(_170, _369, _168 * _367));
            float _395 = max(fma(_164, _389, fma(_162, _387, _158 * _385)), fp_c1_1._m0[0].z);
            float _397 = max(fma(_172, _389, fma(_170, _387, _168 * _385)), fp_c1_1._m0[0].z) * max(fma(_172, _389, fma(_170, _387, _168 * _385)), fp_c1_1._m0[0].z);
            float _399 = max(_393, fp_c1_1._m0[0].z);
            uint _401 = uint(int(uint(_351 + 6400) >> uint(2)));
            int _403 = int(_401) + 1;
            uint _405 = uint(int(uint(_351 + 6408) >> uint(2)));
            float _407 = exp2(_395 * fma(_395, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _409 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_391)) >> uint(2))][int(_391) & 3]) != 0;
            float _411 = (_270 * (1.0 / (_264 + fma(_264, -_399, _399)))) * ((_252 * (1.0 / max(fma(_260, _397, -_397) + 1.0, fp_c1_1._m0[0].z))) * (_252 * (1.0 / max(fma(_260, _397, -_397) + 1.0, fp_c1_1._m0[0].z))));
            float _413 = (_290 + fma(_290, -_407, _407)) * _411;
            float _415 = _413;
            if (!_409)
            {
                _415 = 1.0;
            }
            float _417 = _415;
            if (_409)
            {
                uint _419 = uint(int(uint(_351 + 7840) >> uint(2)));
                int _421 = int(_419) + 1;
                uint _423 = uint(int(uint(_351 + 7848) >> uint(2)));
                uint _425 = uint(int(uint(_351 + 6888) >> uint(2)));
                float _427 = fp_c10_1._m0[int(uint(int(_425)) >> uint(2))][int(_425) & 3];
                int _429 = int(_425) + 1;
                _417 = exp2(fp_c10_1._m0[int(uint(_429) >> uint(2))][_429 & 3] * log2(clamp(((-_427) + fma(_371, -fp_c10_1._m0[int(uint(int(_423)) >> uint(2))][int(_423) & 3], fma(_369, -fp_c10_1._m0[int(uint(_421) >> uint(2))][_421 & 3], _367 * (-fp_c10_1._m0[int(uint(int(_419)) >> uint(2))][int(_419) & 3])))) * (1.0 / ((-_427) + 1.0)), 0.0, 1.0)));
            }
            _431 = _337 + 1;
            float _433 = (exp2(fp_c10_1._m0[int(uint(_381) >> uint(2))][_381 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3], -sqrt(_365), fp_c1_1._m0[1].y), 0.0, 1.0))) * _417) * clamp(_393 + (-0.0), 0.0, 1.0);
            float _435 = fma(fp_c10_1._m0[int(uint(_403) >> uint(2))][_403 & 3] * _433, fma(_280, fp_c1_1._m0[1].z, ((_288 + fma(_288, -_407, _407)) * _411) * 0.079577468335628509521484375), _323);
            float _437 = fma(fp_c10_1._m0[int(uint(int(_405)) >> uint(2))][int(_405) & 3] * _433, fma(_286, fp_c1_1._m0[1].z, _413 * 0.079577468335628509521484375), _325);
            float _439 = fma(fp_c10_1._m0[int(uint(int(_401)) >> uint(2))][int(_401) & 3] * _433, fma(_284, fp_c1_1._m0[1].z, ((_282 + fma(_282, -_407, _407)) * _411) * 0.079577468335628509521484375), _327);
            _335 = int(uint(_335) >> uint(8));
            _337 = _431;
            _323 = _435;
            _325 = _437;
            _327 = _439;
            _341 = _439;
            _343 = _435;
            _345 = _437;
        } while (!(_431 >= 4));
        _349 = false;
        _329 = _343;
        _331 = _345;
        _333 = _341;
        if ((_335 & 255) == 30)
        {
            float _441 = _86.y;
            float _443 = 1.0 / (fma(_221, fp_c10_1._m0[565].z, fma(_441, fp_c10_1._m0[565].y, _219 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _445 = 1.0 / fp_c10_1._m0[561].y;
            float _447 = _221 + (-fp_c10_1._m0[557].z);
            float _449 = _447 * fp_c10_1._m0[558].x;
            float _451 = (-_219) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_445, fp_c10_1._m0[557].x);
            float _453 = (-_221) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_445, fp_c10_1._m0[557].z);
            float _455 = _451 * _451;
            float _457 = sqrt(fma(_453, _453, _455)) * (-fp_c10_1._m0[558].y);
            float _459 = _219 + (-fp_c10_1._m0[557].x);
            float _461 = _459 * fp_c10_1._m0[558].z;
            float _463 = inversesqrt(fma(_453, _453, fma(_457, _457, _455)));
            float _465 = _451 * _463;
            float _467 = _457 * _463;
            float _469 = _453 * _463;
            float _471 = _158 + _465;
            float _473 = _162 + _467;
            float _475 = _164 + _469;
            float _477 = inversesqrt(fma(_475, _475, fma(_473, _473, _471 * _471)));
            float _479 = fma(_447, _447, _459 * _459);
            float _481 = fma(_172, _469, fma(_170, _467, _168 * _465));
            float _483 = _471 * _477;
            float _485 = _473 * _477;
            float _487 = _475 * _477;
            float _489 = ((-float(_449 < _461)) + float(_449 > _461)) * fp_c10_1._m0[561].y;
            float _491 = inversesqrt(fma(_469, _469, _465 * _465));
            float _493 = max(fma(_164, _487, fma(_162, _485, _158 * _483)), fp_c1_1._m0[0].z);
            float _495 = fma(_447, fp_c10_1._m0[558].z, _459 * fp_c10_1._m0[558].x);
            float _497 = max(_481, fp_c1_1._m0[0].z);
            float _499 = max(fma(_172, _487, fma(_170, _485, _168 * _483)), fp_c1_1._m0[0].z) * max(fma(_172, _487, fma(_170, _485, _168 * _483)), fp_c1_1._m0[0].z);
            bool _501 = _495 > 0.0;
            float _503 = _469;
            float _505 = 6.9831600189208984375;
            if (_501)
            {
                _503 = sqrt(_479);
            }
            float _507 = _503;
            if (!_501)
            {
                _507 = 1.0;
            }
            bool _509 = fma(_447 * inversesqrt(_479), fp_c10_1._m0[558].z, (_459 * inversesqrt(_479)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _511 = clamp(fma(_495 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_495 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _513 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_459, fma(_489, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_447 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_489 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_459, fma(_489, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_447 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_489 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            if (!_509)
            {
                _505 = 1.0;
            }
            float _515 = _505;
            if (_509)
            {
                _515 = fma(_513, -_513, fp_c1_1._m0[1].y) * fma(_513, -_513, fp_c1_1._m0[1].y);
            }
            float _517 = exp2(_493 * fma(_493, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _519 = (_270 * (1.0 / (_264 + fma(_264, -_497, _497)))) * ((_252 * (1.0 / max(fma(_260, _499, -_499) + 1.0, fp_c1_1._m0[0].z))) * (_252 * (1.0 / max(fma(_260, _499, -_499) + 1.0, fp_c1_1._m0[0].z))));
            float _521 = (min(fma(_511, -_511, fp_c1_1._m0[1].y) * fma(_511, -_511, fp_c1_1._m0[1].y), _515) * (exp2(log2(clamp(fma(_507, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_469 * _491, -fp_c10_1._m0[558].z, (_465 * _491) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_481 + (-0.0), 0.0, 1.0);
            float _523 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_221, fp_c10_1._m0[562].z, fma(_441, fp_c10_1._m0[562].y, _219 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _443, 0.5, 0.5), (-fma((fma(_221, fp_c10_1._m0[563].z, fma(_441, fp_c10_1._m0[563].y, _219 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _443, 0.5, 0.5)) + 1.0)).z > fma((fma(_221, fp_c10_1._m0[564].z, fma(_441, fp_c10_1._m0[564].y, _219 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _443, 0.5, 0.5)) || (_495 <= 0.0));
            _329 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _521) * fma(_280, fp_c1_1._m0[1].z, ((_288 + fma(_288, -_517, _517)) * _519) * 0.079577468335628509521484375), _523, _343);
            _331 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _521) * fma(_286, fp_c1_1._m0[1].z, ((_290 + fma(_290, -_517, _517)) * _519) * 0.079577468335628509521484375), _523, _345);
            _333 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _521) * fma(_284, fp_c1_1._m0[1].z, ((_282 + fma(_282, -_517, _517)) * _519) * 0.079577468335628509521484375), _523, _341);
        }
    }
    float _525 = _219 + (-fp_c3_1._m0[11].w);
    float _527 = _221 + (-fp_c3_1._m0[13].w);
    float _529 = _86.y + (-fp_c3_1._m0[12].w);
    float _531 = fma(_527, _527, fma(_529, _529, _525 * _525));
    float _533 = clamp(fma(_321 * _313, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _535 = exp2(fma(fma(_527 * inversesqrt(_531), fp_c5_1._m0[23].z, fma(_529 * inversesqrt(_531), fp_c5_1._m0[23].y, (_525 * inversesqrt(_531)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y)) * exp2(log2(clamp(sqrt(_531) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x);
    float _537 = fma(_194 * fma(_194 * (_118.x * fp_c6_1._m0[92].x), fp_c6_1._m0[85].y, fp_c6_1._m0[85].z * fp_c6_1._m0[92].x), fp_c6_1._m0[11].x, fma(_313, _333, _321 * (fma((_282 + fma(_282, -_276, _276)) * _274, fp_c1_1._m0[1].x, _284 * 0.3183098733425140380859375) * fma(_278, fp_c5_1._m0[5].x, _307))));
    float _539 = fma(_196 * fma(_196 * (_118.y * fp_c6_1._m0[92].y), fp_c6_1._m0[85].y, fp_c6_1._m0[85].z * fp_c6_1._m0[92].y), fp_c6_1._m0[11].x, fma(_313, _329, _321 * (fma((_288 + fma(_288, -_276, _276)) * _274, fp_c1_1._m0[1].x, _280 * 0.3183098733425140380859375) * fma(_278, fp_c5_1._m0[5].y, _311))));
    float _541 = fma(_198 * fma(_198 * (_118.z * fp_c6_1._m0[92].z), fp_c6_1._m0[85].y, fp_c6_1._m0[85].z * fp_c6_1._m0[92].z), fp_c6_1._m0[11].x, fma(_313, _331, _321 * (fma((_290 + fma(_290, -_276, _276)) * _274, fp_c1_1._m0[1].x, _286 * 0.3183098733425140380859375) * fma(_278, fp_c5_1._m0[5].z, _309))));
    float _543 = clamp((-exp2((clamp(fma(sqrt(_531), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _89.x = fma(fma(fma((_535 * fp_c7_1._m0[55].x) * _533, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x) + (-_537), _543, _537);
    _89.y = fma(fma(fma((_535 * fp_c7_1._m0[55].y) * _533, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y) + (-_539), _543, _539);
    _89.z = fma(fma(fma((_535 * fp_c7_1._m0[55].z) * _533, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z) + (-_541), _543, _541);
    _89.w = 1.0;
}


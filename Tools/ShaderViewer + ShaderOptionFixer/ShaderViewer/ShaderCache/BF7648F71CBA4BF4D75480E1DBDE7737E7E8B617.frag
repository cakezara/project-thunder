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

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_22;
layout(binding = 2) uniform sampler2D fp_tex_tcb_24;
layout(binding = 3) uniform sampler2D fp_tex_tcb_28;
layout(binding = 4) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 5) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 6) uniform sampler2D fp_tex_tcb_38;
layout(binding = 7) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _60;
layout(location = 1) in vec4 _62;
layout(location = 3) in vec4 _64;
layout(location = 0) in vec4 _66;
layout(location = 6) in vec4 _68;
layout(location = 4) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 0) out vec4 _75;
uint _6[12];

void main()
{
    bool _281 = false;
    float _82 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _84 = 1.0 / (_60.z * gl_FragCoord.w);
    float _86 = _62.x;
    float _88 = _64.x;
    float _90 = _62.y;
    float _92 = _64.y;
    float _94 = _62.z;
    float _96 = _64.z;
    float _98 = inversesqrt(fma(_94, _94, fma(_90, _90, _86 * _86)));
    float _100 = inversesqrt(fma(_96, _96, fma(_92, _92, _88 * _88)));
    float _102 = _86 * _98;
    float _104 = _90 * _98;
    float _106 = _88 * (-_100);
    float _108 = _92 * (-_100);
    float _110 = _94 * _98;
    float _112 = _96 * (-_100);
    float _114 = fma(_110, _112, fma(_104, _108, _102 * _106));
    float _116 = 1.0 / _70.w;
    float _118 = max(_114, fp_c1_1._m0[0].y);
    float _120 = fma(_102 * (-_114), -2.0, -_106);
    float _122 = fma(_104 * (-_114), -2.0, -_108);
    float _124 = fma(_110 * (-_114), -2.0, -_112);
    float _126 = 1.0 / max(abs(_124), max(abs(_120), abs(_122)));
    vec2 _130 = texture(fp_tex_tcb_2A, vec2(fma(_70.x * _116, 0.5, 0.5), fma(_70.y * _116, -0.5, 0.5))).xy;
    float _132 = _106 + (-fp_c5_1._m0[23].x);
    vec3 _136 = texture(fp_tex_tcb_A, vec2(_66.x, _66.y)).xyz;
    float _138 = _136.x;
    float _140 = _136.y;
    float _142 = _136.z;
    vec2 _144 = texture(fp_tex_tcb_38, vec2(_118, (-_82) + (-0.0))).xy;
    float _146 = _144.x;
    float _148 = _144.y;
    vec2 _150 = texture(fp_tex_tcb_22, vec2(_68.x, _68.y)).xy;
    vec3 _152 = texture(fp_tex_tcb_36, vec4(_120 * _126, _122 * _126, _124 * _126, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_82 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec4 _155 = texture(fp_tex_tcb_24, vec2(_68.z, _68.w)).xyzw;
    float _157 = _155.w;
    float _159 = _102 * _104;
    float _161 = _108 + (-fp_c5_1._m0[23].y);
    float _163 = _104 * _110;
    float _165 = _110 * _110;
    float _167 = _72.x;
    float _169 = _112 + (-fp_c5_1._m0[23].z);
    float _171 = _102 * _110;
    float _173 = _72.z;
    float _175 = inversesqrt(fma(_169, _169, fma(_161, _161, _132 * _132)));
    float _177 = _132 * _175;
    float _179 = _161 * _175;
    float _181 = _169 * _175;
    float _183 = fma(_82, 0.5, 0.5);
    float _185 = _82 * _82;
    float _187 = (_183 * 0.5) * _183;
    float _189 = _185 * _185;
    float _191 = fma(_104, -fp_c5_1._m0[23].y, _102 * (-fp_c5_1._m0[23].x));
    float _193 = max(fma(_110, _181, fma(_104, _179, _102 * _177)), fp_c1_1._m0[0].y) * max(fma(_110, _181, fma(_104, _179, _102 * _177)), fp_c1_1._m0[0].y);
    float _195 = fma(_102, _102, -(_104 * _104));
    float _197 = max(fma(_112, _181, fma(_108, _179, _106 * _177)), fp_c1_1._m0[0].y);
    float _199 = max(fma(_110, -fp_c5_1._m0[23].z, _191), fp_c1_1._m0[0].y);
    int _202 = max(0, min(int(trunc((_173 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _204 = 1.0 / (_187 + fma(_118, -_187, _118));
    float _206 = exp2(_197 * fma(_197, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _208 = fma(_138 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _210 = fma(_140 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _212 = fma(_142 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    uint _215 = uint(int(uint((((int(uint(_202) >> uint(16)) * 20) << 16) + (((_202 & 65535) * 20) + max(0, min(int(trunc((_167 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _217 = fp_c10_1._m0[int(uint(int(_215)) >> uint(2))][int(_215) & 3];
    float _219 = clamp(fma(_110, -fp_c5_1._m0[23].z, _191), 0.0, 1.0);
    float _221 = (_204 * (1.0 / (_187 + fma(_187, -_199, _199)))) * ((_185 * (1.0 / max(fma(_193, _189, -_193) + 1.0, fp_c1_1._m0[0].y))) * (_185 * (1.0 / max(fma(_193, _189, -_193) + 1.0, fp_c1_1._m0[0].y))));
    float _223 = fma(_138, -fp_c6_1._m0[9].x, _138);
    float _225 = fma(_140, -fp_c6_1._m0[9].x, _140);
    float _227 = _60.w;
    float _229 = fma(_210, -_225, _225);
    float _231 = fma(_208, -_223, _223);
    float _233 = fma(_142, -fp_c6_1._m0[9].x, _142);
    float _235 = fma(_212, -_233, _233);
    float _237 = clamp(_227 * clamp(fma(_150.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _239 = ((_155.x * _157) * _227) * 32.0;
    float _241 = ((_155.y * _157) * _227) * 32.0;
    float _243 = ((_155.z * _157) * _227) * 32.0;
    float _245 = fma(_231, _239, fma(_152.x, fma(_208, _146, _148), max(0.0, fma(_195, fp_c5_1._m0[31].x, (fma(_110, fp_c5_1._m0[25].z, fma(_104, fp_c5_1._m0[25].y, _102 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_171, fp_c5_1._m0[28].w, fma(_165, fp_c5_1._m0[28].z, fma(_163, fp_c5_1._m0[28].y, _159 * fp_c5_1._m0[28].x))))) * _231));
    float _247 = fma(_229, _241, fma(_152.y, fma(_210, _146, _148), max(0.0, fma(_195, fp_c5_1._m0[31].y, (fma(_110, fp_c5_1._m0[26].z, fma(_104, fp_c5_1._m0[26].y, _102 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_171, fp_c5_1._m0[29].w, fma(_165, fp_c5_1._m0[29].z, fma(_163, fp_c5_1._m0[29].y, _159 * fp_c5_1._m0[29].x))))) * _229));
    float _249 = fma(_235, _243, fma(_152.z, fma(_212, _146, _148), max(0.0, fma(_195, fp_c5_1._m0[31].z, (fma(_110, fp_c5_1._m0[27].z, fma(_104, fp_c5_1._m0[27].y, _102 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_171, fp_c5_1._m0[30].w, fma(_165, fp_c5_1._m0[30].z, fma(_163, fp_c5_1._m0[30].y, _159 * fp_c5_1._m0[30].x))))) * _235));
    float _251 = clamp((-_237) + 1.0, 0.0, 1.0);
    float _253 = clamp((-fma(_237, fp_c7_1._m0[37].w, clamp(_227 * clamp(fma(_150.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_130.x) + 1.0, (-_130.y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_60.x * gl_FragCoord.w) * _84, (_60.y * gl_FragCoord.w) * _84)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _255 = _247;
    float _257 = _249;
    float _259 = _245;
    float _261 = _245;
    float _263 = _247;
    float _265 = _249;
    if (floatBitsToInt(_217) != (-1))
    {
        int _267 = floatBitsToInt(_217);
        int _269 = 0;
        float _273;
        float _275;
        float _277;
        int _363;
        do
        {
            int _271 = _267 & 255;
            _273 = _259;
            _275 = _255;
            _277 = _257;
            _281 = uint(_271) >= 30u;
            if (_281)
            {
                break;
            }
            int _283 = _271 << 4;
            uint _285 = uint(int(uint(_283 + 7360) >> uint(2)));
            int _287 = int(_285) + 1;
            uint _289 = uint(int(uint(_283 + 7368) >> uint(2)));
            float _291 = (-_167) + fp_c10_1._m0[int(uint(int(_285)) >> uint(2))][int(_285) & 3];
            float _293 = fp_c10_1._m0[int(uint(_287) >> uint(2))][_287 & 3] + (-_72.y);
            float _295 = (-_173) + fp_c10_1._m0[int(uint(int(_289)) >> uint(2))][int(_289) & 3];
            float _297 = fma(_295, _295, fma(_293, _293, _291 * _291));
            float _299 = _291 * inversesqrt(_297);
            float _301 = _293 * inversesqrt(_297);
            float _303 = _295 * inversesqrt(_297);
            float _305 = _106 + _299;
            float _307 = _108 + _301;
            float _309 = _112 + _303;
            uint _311 = uint(int(uint(_283 + 6880) >> uint(2)));
            int _313 = int(_311) + 1;
            float _315 = inversesqrt(fma(_309, _309, fma(_307, _307, _305 * _305)));
            float _317 = _305 * _315;
            float _319 = _307 * _315;
            float _321 = _309 * _315;
            uint _323 = uint(int(uint(_283 + 8320) >> uint(2)));
            float _325 = fma(_110, _303, fma(_104, _301, _102 * _299));
            float _327 = max(fma(_112, _321, fma(_108, _319, _106 * _317)), fp_c1_1._m0[0].y);
            float _329 = max(_325, fp_c1_1._m0[0].y);
            float _331 = max(fma(_110, _321, fma(_104, _319, _102 * _317)), fp_c1_1._m0[0].y) * max(fma(_110, _321, fma(_104, _319, _102 * _317)), fp_c1_1._m0[0].y);
            uint _333 = uint(int(uint(_283 + 6400) >> uint(2)));
            int _335 = int(_333) + 1;
            uint _337 = uint(int(uint(_283 + 6408) >> uint(2)));
            float _339 = exp2(_327 * fma(_327, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _341 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_323)) >> uint(2))][int(_323) & 3]) != 0;
            float _343 = (_204 * (1.0 / (_187 + fma(_187, -_329, _329)))) * ((_185 * (1.0 / max(fma(_189, _331, -_331) + 1.0, fp_c1_1._m0[0].y))) * (_185 * (1.0 / max(fma(_189, _331, -_331) + 1.0, fp_c1_1._m0[0].y))));
            float _345 = _212 + fma(_212, -_339, _339);
            float _347 = _345;
            if (!_341)
            {
                _347 = 1.0;
            }
            float _349 = _347;
            if (_341)
            {
                uint _351 = uint(int(uint(_283 + 7840) >> uint(2)));
                int _353 = int(_351) + 1;
                uint _355 = uint(int(uint(_283 + 7848) >> uint(2)));
                uint _357 = uint(int(uint(_283 + 6888) >> uint(2)));
                float _359 = fp_c10_1._m0[int(uint(int(_357)) >> uint(2))][int(_357) & 3];
                int _361 = int(_357) + 1;
                _349 = exp2(fp_c10_1._m0[int(uint(_361) >> uint(2))][_361 & 3] * log2(clamp(((-_359) + fma(_303, -fp_c10_1._m0[int(uint(int(_355)) >> uint(2))][int(_355) & 3], fma(_301, -fp_c10_1._m0[int(uint(_353) >> uint(2))][_353 & 3], _299 * (-fp_c10_1._m0[int(uint(int(_351)) >> uint(2))][int(_351) & 3])))) * (1.0 / ((-_359) + 1.0)), 0.0, 1.0)));
            }
            _363 = _269 + 1;
            float _365 = (exp2(fp_c10_1._m0[int(uint(_313) >> uint(2))][_313 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_311)) >> uint(2))][int(_311) & 3], -sqrt(_297), fp_c1_1._m0[1].x), 0.0, 1.0))) * _349) * clamp(_325 + (-0.0), 0.0, 1.0);
            float _367 = fma(fp_c10_1._m0[int(uint(_335) >> uint(2))][_335 & 3] * _365, fma(_225, fp_c1_1._m0[1].y, ((_210 + fma(_210, -_339, _339)) * _343) * 0.079577468335628509521484375), _255);
            float _369 = fma(fp_c10_1._m0[int(uint(int(_337)) >> uint(2))][int(_337) & 3] * _365, fma(_233, fp_c1_1._m0[1].y, (_345 * _343) * 0.079577468335628509521484375), _257);
            float _371 = fma(fp_c10_1._m0[int(uint(int(_333)) >> uint(2))][int(_333) & 3] * _365, fma(_223, fp_c1_1._m0[1].y, ((_208 + fma(_208, -_339, _339)) * _343) * 0.079577468335628509521484375), _259);
            _267 = int(uint(_267) >> uint(8));
            _269 = _363;
            _255 = _367;
            _257 = _369;
            _259 = _371;
            _273 = _371;
            _275 = _367;
            _277 = _369;
        } while (!(_363 >= 4));
        _281 = false;
        _261 = _273;
        _263 = _275;
        _265 = _277;
        if ((_267 & 255) == 30)
        {
            float _373 = _72.y;
            float _375 = 1.0 / (fma(_173, fp_c10_1._m0[565].z, fma(_373, fp_c10_1._m0[565].y, _167 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _377 = 1.0 / fp_c10_1._m0[561].y;
            float _379 = _173 + (-fp_c10_1._m0[557].z);
            float _381 = _379 * fp_c10_1._m0[558].x;
            float _383 = (-_167) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_377, fp_c10_1._m0[557].x);
            float _385 = (-_173) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_377, fp_c10_1._m0[557].z);
            float _387 = _383 * _383;
            float _389 = sqrt(fma(_385, _385, _387)) * (-fp_c10_1._m0[558].y);
            float _391 = _167 + (-fp_c10_1._m0[557].x);
            float _393 = inversesqrt(fma(_385, _385, fma(_389, _389, _387)));
            float _395 = _383 * _393;
            float _397 = _389 * _393;
            float _399 = _385 * _393;
            float _401 = _106 + _395;
            float _403 = _108 + _397;
            float _405 = _112 + _399;
            float _407 = _391 * fp_c10_1._m0[558].z;
            float _409 = inversesqrt(fma(_405, _405, fma(_403, _403, _401 * _401)));
            float _411 = fma(_379, _379, _391 * _391);
            float _413 = _401 * _409;
            float _415 = _403 * _409;
            float _417 = _405 * _409;
            float _419 = fma(_110, _399, fma(_104, _397, _102 * _395));
            float _421 = max(_419, fp_c1_1._m0[0].y);
            float _423 = ((-float(_381 < _407)) + float(_381 > _407)) * fp_c10_1._m0[561].y;
            float _425 = inversesqrt(fma(_399, _399, _395 * _395));
            float _427 = fma(_379, fp_c10_1._m0[558].z, _391 * fp_c10_1._m0[558].x);
            float _429 = max(fma(_112, _417, fma(_108, _415, _106 * _413)), fp_c1_1._m0[0].y);
            bool _431 = _427 > 0.0;
            float _433 = _395 * _425;
            float _435 = _433;
            float _437 = _429;
            if (_431)
            {
                _435 = sqrt(_411);
            }
            float _439 = _435;
            if (!_431)
            {
                _439 = 1.0;
            }
            bool _441 = fma(_379 * inversesqrt(_411), fp_c10_1._m0[558].z, (_391 * inversesqrt(_411)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _443 = clamp(fma(_427 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_427 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _445 = max(fma(_110, _417, fma(_104, _415, _102 * _413)), fp_c1_1._m0[0].y) * max(fma(_110, _417, fma(_104, _415, _102 * _413)), fp_c1_1._m0[0].y);
            float _447 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_391, fma(_423, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_379 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_423 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_391, fma(_423, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_379 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_423 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            if (!_441)
            {
                _437 = 1.0;
            }
            float _449 = _437;
            if (_441)
            {
                _449 = fma(_447, -_447, fp_c1_1._m0[1].x) * fma(_447, -_447, fp_c1_1._m0[1].x);
            }
            float _451 = exp2(_429 * fma(_429, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _453 = (min(fma(_443, -_443, fp_c1_1._m0[1].x) * fma(_443, -_443, fp_c1_1._m0[1].x), _449) * (exp2(log2(clamp(fma(_439, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_399 * _425, -fp_c10_1._m0[558].z, _433 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_419 + (-0.0), 0.0, 1.0);
            float _455 = (_204 * (1.0 / (_187 + fma(_187, -_421, _421)))) * ((_185 * (1.0 / max(fma(_189, _445, -_445) + 1.0, fp_c1_1._m0[0].y))) * (_185 * (1.0 / max(fma(_189, _445, -_445) + 1.0, fp_c1_1._m0[0].y))));
            float _457 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_173, fp_c10_1._m0[562].z, fma(_373, fp_c10_1._m0[562].y, _167 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _375, 0.5, 0.5), (-fma((fma(_173, fp_c10_1._m0[563].z, fma(_373, fp_c10_1._m0[563].y, _167 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _375, 0.5, 0.5)) + 1.0)).z > fma((fma(_173, fp_c10_1._m0[564].z, fma(_373, fp_c10_1._m0[564].y, _167 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _375, 0.5, 0.5)) || (_427 <= 0.0));
            _261 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _453) * fma(_223, fp_c1_1._m0[1].y, ((_208 + fma(_208, -_451, _451)) * _455) * 0.079577468335628509521484375), _457, _273);
            _263 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _453) * fma(_225, fp_c1_1._m0[1].y, ((_210 + fma(_210, -_451, _451)) * _455) * 0.079577468335628509521484375), _457, _275);
            _265 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _453) * fma(_233, fp_c1_1._m0[1].y, ((_212 + fma(_212, -_451, _451)) * _455) * 0.079577468335628509521484375), _457, _277);
        }
    }
    float _459 = _167 + (-fp_c3_1._m0[11].w);
    float _461 = _72.y;
    float _463 = _173 + (-fp_c3_1._m0[13].w);
    float _465 = _461 + (-fp_c3_1._m0[12].w);
    float _467 = fma(_463, _463, fma(_465, _465, _459 * _459));
    float _469 = clamp(fma(_253 * _251, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _471 = fma(_138, fp_c6_1._m0[11].x, fma(_251, _261, _253 * (fma(_221 * (_208 + fma(_208, -_206, _206)), fp_c1_1._m0[0].w, _223 * 0.3183098733425140380859375) * fma(_219, fp_c5_1._m0[5].x, _239))));
    float _473 = fma(_140, fp_c6_1._m0[11].x, fma(_251, _263, _253 * (fma(_221 * (_210 + fma(_210, -_206, _206)), fp_c1_1._m0[0].w, _225 * 0.3183098733425140380859375) * fma(_219, fp_c5_1._m0[5].y, _241))));
    float _475 = exp2(log2(clamp(sqrt(_467) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_463 * inversesqrt(_467), fp_c5_1._m0[23].z, fma(_465 * inversesqrt(_467), fp_c5_1._m0[23].y, (_459 * inversesqrt(_467)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _477 = clamp(fma(fma(_173, fp_c5_1._m0[14].z, fma(_461, fp_c5_1._m0[14].y, _167 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _479 = fma(_142, fp_c6_1._m0[11].x, fma(_251, _265, _253 * (fma(_221 * (_212 + fma(_212, -_206, _206)), fp_c1_1._m0[0].w, _233 * 0.3183098733425140380859375) * fma(_219, fp_c5_1._m0[5].z, _243))));
    float _481 = fma((-_471) + fp_c5_1._m0[13].x, _477, _471);
    float _483 = fma((-_473) + fp_c5_1._m0[13].y, _477, _473);
    float _485 = fma((-_479) + fp_c5_1._m0[13].z, _477, _479);
    float _487 = clamp((-exp2((clamp(fma(sqrt(_467), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_481) + fma(fma((_475 * fp_c7_1._m0[55].x) * _469, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _487, _481);
    _75.y = fma((-_483) + fma(fma((_475 * fp_c7_1._m0[55].y) * _469, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _487, _483);
    _75.z = fma((-_485) + fma(fma((_475 * fp_c7_1._m0[55].z) * _469, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _487, _485);
    _75.w = 1.0;
}


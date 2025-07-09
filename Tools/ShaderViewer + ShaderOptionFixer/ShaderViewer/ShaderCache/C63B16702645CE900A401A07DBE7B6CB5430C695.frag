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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_10;
layout(binding = 3) uniform sampler2D fp_tex_tcb_14;
layout(binding = 4) uniform sampler2D fp_tex_tcb_22;
layout(binding = 5) uniform sampler2D fp_tex_tcb_24;
layout(binding = 6) uniform sampler2D fp_tex_tcb_28;
layout(binding = 7) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 8) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 9) uniform sampler2D fp_tex_tcb_38;
layout(binding = 10) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _66;
layout(location = 5) in vec4 _68;
layout(location = 0) in vec4 _70;
layout(location = 1) in vec4 _72;
layout(location = 2) in vec4 _74;
layout(location = 4) in vec4 _76;
layout(location = 7) in vec4 _78;
layout(location = 3) in vec4 _80;
layout(location = 0) out vec4 _83;
uint _6[12];

void main()
{
    bool _325 = false;
    float _90 = 1.0 / (_66.z * gl_FragCoord.w);
    float _92 = _70.x;
    float _94 = _70.y;
    float _96 = 1.0 / _68.w;
    vec2 _100 = texture(fp_tex_tcb_E, vec2(_92, _94)).xy;
    float _102 = _100.x;
    float _104 = _100.y;
    vec2 _106 = texture(fp_tex_tcb_2A, vec2(fma(_68.x * _96, 0.5, 0.5), fma(_68.y * _96, -0.5, 0.5))).xy;
    vec3 _110 = texture(fp_tex_tcb_A, vec2(_92, _94)).xyz;
    float _112 = _110.x;
    float _114 = _110.y;
    float _116 = _110.z;
    float _118 = _72.x;
    float _120 = _72.y;
    float _122 = _72.z;
    float _124 = _74.y;
    float _126 = _74.z;
    float _128 = _74.x;
    float _130 = _74.w;
    float _132 = _76.x;
    float _134 = _76.y;
    float _136 = _76.z;
    float _138 = inversesqrt(fma(_122, _122, fma(_120, _120, _118 * _118)));
    float _140 = _122 * _138;
    float _142 = _118 * _138;
    float _144 = _120 * _138;
    float _146 = max(texture(fp_tex_tcb_10, vec2(_92, _94)).x, fp_c1_1._m0[0].x);
    float _148 = sqrt(clamp((-fma(_102, _102, _104 * _104)) + 1.0, 0.0, 1.0));
    float _150 = inversesqrt(fma(_136, _136, fma(_134, _134, _132 * _132)));
    float _152 = fma(_142, _148, fma(_102, _128, _104 * (fma(_144, _126, -(_140 * _124)) * _130)));
    float _154 = fma(_144, _148, fma(_102, _124, _104 * (fma(_140, _128, -(_142 * _126)) * _130)));
    float _156 = fma(_140, _148, fma(_102, _126, _104 * (fma(_142, _124, -(_144 * _128)) * _130)));
    float _158 = _132 * (-_150);
    float _160 = _134 * (-_150);
    float _162 = _136 * (-_150);
    float _164 = inversesqrt(fma(_156, _156, fma(_154, _154, _152 * _152)));
    float _166 = _152 * _164;
    float _168 = _154 * _164;
    float _170 = _156 * _164;
    float _172 = fma(_170, _162, fma(_168, _160, _166 * _158));
    float _174 = max(_172, fp_c1_1._m0[0].y);
    float _176 = fma(_166 * (-_172), -2.0, -_158);
    float _178 = fma(_168 * (-_172), -2.0, -_160);
    float _180 = fma(_170 * (-_172), -2.0, -_162);
    float _182 = 1.0 / max(abs(_180), max(abs(_176), abs(_178)));
    vec2 _184 = texture(fp_tex_tcb_38, vec2(_174, (-_146) + (-0.0))).xy;
    float _186 = _184.x;
    float _188 = _184.y;
    vec3 _190 = texture(fp_tex_tcb_36, vec4(_176 * _182, _178 * _182, _180 * _182, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_146 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _192 = texture(fp_tex_tcb_22, vec2(_78.x, _78.y)).xy;
    vec4 _195 = texture(fp_tex_tcb_24, vec2(_78.z, _78.w)).xyzw;
    float _197 = _195.w;
    vec3 _199 = texture(fp_tex_tcb_14, vec2(_92, _94)).xyz;
    float _201 = _158 + (-fp_c5_1._m0[23].x);
    float _203 = _160 + (-fp_c5_1._m0[23].y);
    float _205 = _166 * _168;
    float _207 = _162 + (-fp_c5_1._m0[23].z);
    float _209 = _168 * _170;
    float _211 = fma(_146, 0.5, 0.5);
    float _213 = _170 * _170;
    float _215 = inversesqrt(fma(_207, _207, fma(_203, _203, _201 * _201)));
    float _217 = _166 * _170;
    float _219 = _201 * _215;
    float _221 = _207 * _215;
    float _223 = _203 * _215;
    float _225 = fma(_166, _166, -(_168 * _168));
    float _227 = _80.z;
    float _229 = _80.x;
    float _231 = _146 * _146;
    float _233 = fma(_168, -fp_c5_1._m0[23].y, _166 * (-fp_c5_1._m0[23].x));
    float _235 = _231 * _231;
    float _237 = (_211 * 0.5) * _211;
    float _239 = max(fma(_170, _221, fma(_168, _223, _166 * _219)), fp_c1_1._m0[0].y) * max(fma(_170, _221, fma(_168, _223, _166 * _219)), fp_c1_1._m0[0].y);
    float _241 = max(fma(_170, -fp_c5_1._m0[23].z, _233), fp_c1_1._m0[0].y);
    float _243 = max(fma(_162, _221, fma(_160, _223, _158 * _219)), fp_c1_1._m0[0].y);
    float _245 = 1.0 / (_237 + fma(_174, -_237, _174));
    float _247 = (_245 * (1.0 / (_237 + fma(_237, -_241, _241)))) * ((_231 * (1.0 / max(fma(_239, _235, -_239) + 1.0, fp_c1_1._m0[0].y))) * (_231 * (1.0 / max(fma(_239, _235, -_239) + 1.0, fp_c1_1._m0[0].y))));
    float _249 = exp2(_243 * fma(_243, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _251 = fma(_112, -fp_c6_1._m0[9].x, _112);
    int _254 = max(0, min(int(trunc((_227 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _256 = fma(_112 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _258 = fma(_114 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _260 = fma(_116 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _262 = fma(_114, -fp_c6_1._m0[9].x, _114);
    float _264 = fma(_251, -_256, _251);
    float _266 = fma(_262, -_258, _262);
    float _268 = _66.w;
    uint _271 = uint(int(uint((((int(uint(_254) >> uint(16)) * 20) << 16) + (((_254 & 65535) * 20) + max(0, min(int(trunc((_229 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _273 = fp_c10_1._m0[int(uint(int(_271)) >> uint(2))][int(_271) & 3];
    float _275 = fma(_116, -fp_c6_1._m0[9].x, _116);
    float _277 = fma(_275, -_260, _275);
    float _279 = clamp(_268 * clamp(fma(_192.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _281 = ((_195.x * _197) * _268) * 32.0;
    float _283 = ((_195.y * _197) * _268) * 32.0;
    float _285 = ((_195.z * _197) * _268) * 32.0;
    float _287 = fma(_264, _281, fma(_190.x, fma(_256, _186, _188), max(0.0, fma(_225, fp_c5_1._m0[31].x, (fma(_170, fp_c5_1._m0[25].z, fma(_168, fp_c5_1._m0[25].y, _166 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_217, fp_c5_1._m0[28].w, fma(_213, fp_c5_1._m0[28].z, fma(_209, fp_c5_1._m0[28].y, _205 * fp_c5_1._m0[28].x))))) * _264));
    float _289 = clamp(fma(_170, -fp_c5_1._m0[23].z, _233), 0.0, 1.0);
    float _291 = fma(_266, _283, fma(_190.y, fma(_258, _186, _188), max(0.0, fma(_225, fp_c5_1._m0[31].y, (fma(_170, fp_c5_1._m0[26].z, fma(_168, fp_c5_1._m0[26].y, _166 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_217, fp_c5_1._m0[29].w, fma(_213, fp_c5_1._m0[29].z, fma(_209, fp_c5_1._m0[29].y, _205 * fp_c5_1._m0[29].x))))) * _266));
    float _293 = fma(_277, _285, fma(_190.z, fma(_260, _186, _188), max(0.0, fma(_225, fp_c5_1._m0[31].z, (fma(_170, fp_c5_1._m0[27].z, fma(_168, fp_c5_1._m0[27].y, _166 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_217, fp_c5_1._m0[30].w, fma(_213, fp_c5_1._m0[30].z, fma(_209, fp_c5_1._m0[30].y, _205 * fp_c5_1._m0[30].x))))) * _277));
    float _295 = clamp((-_279) + 1.0, 0.0, 1.0);
    float _297 = clamp((-fma(_279, fp_c7_1._m0[37].w, clamp(_268 * clamp(fma(_192.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_106.x) + 1.0, (-_106.y) + 1.0), clamp(_80.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_66.x * gl_FragCoord.w) * _90, (_66.y * gl_FragCoord.w) * _90)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    float _299 = _291;
    float _301 = _293;
    float _303 = _287;
    float _305 = _293;
    float _307 = _287;
    float _309 = _291;
    if (floatBitsToInt(_273) != (-1))
    {
        int _311 = floatBitsToInt(_273);
        int _313 = 0;
        float _317;
        float _319;
        float _321;
        int _407;
        do
        {
            int _315 = _311 & 255;
            _317 = _303;
            _319 = _299;
            _321 = _301;
            _325 = uint(_315) >= 30u;
            if (_325)
            {
                break;
            }
            int _327 = _315 << 4;
            uint _329 = uint(int(uint(_327 + 7360) >> uint(2)));
            int _331 = int(_329) + 1;
            uint _333 = uint(int(uint(_327 + 7368) >> uint(2)));
            float _335 = (-_229) + fp_c10_1._m0[int(uint(int(_329)) >> uint(2))][int(_329) & 3];
            float _337 = fp_c10_1._m0[int(uint(_331) >> uint(2))][_331 & 3] + (-_80.y);
            float _339 = (-_227) + fp_c10_1._m0[int(uint(int(_333)) >> uint(2))][int(_333) & 3];
            float _341 = fma(_339, _339, fma(_337, _337, _335 * _335));
            float _343 = _335 * inversesqrt(_341);
            float _345 = _337 * inversesqrt(_341);
            float _347 = _339 * inversesqrt(_341);
            float _349 = _158 + _343;
            float _351 = _160 + _345;
            float _353 = _162 + _347;
            uint _355 = uint(int(uint(_327 + 6880) >> uint(2)));
            int _357 = int(_355) + 1;
            float _359 = inversesqrt(fma(_353, _353, fma(_351, _351, _349 * _349)));
            float _361 = _349 * _359;
            float _363 = _351 * _359;
            float _365 = _353 * _359;
            uint _367 = uint(int(uint(_327 + 8320) >> uint(2)));
            float _369 = fma(_170, _347, fma(_168, _345, _166 * _343));
            float _371 = max(fma(_162, _365, fma(_160, _363, _158 * _361)), fp_c1_1._m0[0].y);
            float _373 = max(fma(_170, _365, fma(_168, _363, _166 * _361)), fp_c1_1._m0[0].y) * max(fma(_170, _365, fma(_168, _363, _166 * _361)), fp_c1_1._m0[0].y);
            float _375 = max(_369, fp_c1_1._m0[0].y);
            uint _377 = uint(int(uint(_327 + 6408) >> uint(2)));
            uint _379 = uint(int(uint(_327 + 6400) >> uint(2)));
            int _381 = int(_379) + 1;
            float _383 = exp2(_371 * fma(_371, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _385 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_367)) >> uint(2))][int(_367) & 3]) != 0;
            float _387 = (_245 * (1.0 / (_237 + fma(_237, -_375, _375)))) * ((_231 * (1.0 / max(fma(_235, _373, -_373) + 1.0, fp_c1_1._m0[0].y))) * (_231 * (1.0 / max(fma(_235, _373, -_373) + 1.0, fp_c1_1._m0[0].y))));
            float _389 = (_260 + fma(_260, -_383, _383)) * _387;
            float _391 = _389;
            if (!_385)
            {
                _391 = 1.0;
            }
            float _393 = _391;
            if (_385)
            {
                uint _395 = uint(int(uint(_327 + 7840) >> uint(2)));
                int _397 = int(_395) + 1;
                uint _399 = uint(int(uint(_327 + 6888) >> uint(2)));
                float _401 = fp_c10_1._m0[int(uint(int(_399)) >> uint(2))][int(_399) & 3];
                int _403 = int(_399) + 1;
                uint _405 = uint(int(uint(_327 + 7848) >> uint(2)));
                _393 = exp2(fp_c10_1._m0[int(uint(_403) >> uint(2))][_403 & 3] * log2(clamp(((-_401) + fma(_347, -fp_c10_1._m0[int(uint(int(_405)) >> uint(2))][int(_405) & 3], fma(_345, -fp_c10_1._m0[int(uint(_397) >> uint(2))][_397 & 3], _343 * (-fp_c10_1._m0[int(uint(int(_395)) >> uint(2))][int(_395) & 3])))) * (1.0 / ((-_401) + 1.0)), 0.0, 1.0)));
            }
            _407 = _313 + 1;
            float _409 = (exp2(fp_c10_1._m0[int(uint(_357) >> uint(2))][_357 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_355)) >> uint(2))][int(_355) & 3], -sqrt(_341), fp_c1_1._m0[1].x), 0.0, 1.0))) * _393) * clamp(_369 + (-0.0), 0.0, 1.0);
            float _411 = fma(fp_c10_1._m0[int(uint(_381) >> uint(2))][_381 & 3] * _409, fma(_262, fp_c1_1._m0[1].y, ((_258 + fma(_258, -_383, _383)) * _387) * 0.079577468335628509521484375), _299);
            float _413 = fma(fp_c10_1._m0[int(uint(int(_377)) >> uint(2))][int(_377) & 3] * _409, fma(_275, fp_c1_1._m0[1].y, _389 * 0.079577468335628509521484375), _301);
            float _415 = fma(fp_c10_1._m0[int(uint(int(_379)) >> uint(2))][int(_379) & 3] * _409, fma(_251, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_383, _383)) * _387) * 0.079577468335628509521484375), _303);
            _311 = int(uint(_311) >> uint(8));
            _313 = _407;
            _299 = _411;
            _301 = _413;
            _303 = _415;
            _317 = _415;
            _319 = _411;
            _321 = _413;
        } while (!(_407 >= 4));
        _325 = false;
        _305 = _321;
        _307 = _317;
        _309 = _319;
        if ((_311 & 255) == 30)
        {
            float _417 = _80.y;
            float _419 = 1.0 / (fma(_227, fp_c10_1._m0[565].z, fma(_417, fp_c10_1._m0[565].y, _229 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _421 = 1.0 / fp_c10_1._m0[561].y;
            float _423 = _227 + (-fp_c10_1._m0[557].z);
            float _425 = _423 * fp_c10_1._m0[558].x;
            float _427 = (-_229) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_421, fp_c10_1._m0[557].x);
            float _429 = (-_227) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_421, fp_c10_1._m0[557].z);
            float _431 = _427 * _427;
            float _433 = sqrt(fma(_429, _429, _431)) * (-fp_c10_1._m0[558].y);
            float _435 = _229 + (-fp_c10_1._m0[557].x);
            float _437 = _435 * fp_c10_1._m0[558].z;
            float _439 = inversesqrt(fma(_429, _429, fma(_433, _433, _431)));
            float _441 = _427 * _439;
            float _443 = _433 * _439;
            float _445 = _429 * _439;
            float _447 = _158 + _441;
            float _449 = _160 + _443;
            float _451 = _162 + _445;
            float _453 = inversesqrt(fma(_451, _451, fma(_449, _449, _447 * _447)));
            float _455 = fma(_423, _423, _435 * _435);
            float _457 = fma(_170, _445, fma(_168, _443, _166 * _441));
            float _459 = _447 * _453;
            float _461 = _449 * _453;
            float _463 = _451 * _453;
            float _465 = ((-float(_425 < _437)) + float(_425 > _437)) * fp_c10_1._m0[561].y;
            float _467 = inversesqrt(fma(_445, _445, _441 * _441));
            float _469 = fma(_423, fp_c10_1._m0[558].z, _435 * fp_c10_1._m0[558].x);
            bool _471 = _469 > 0.0;
            float _473 = max(fma(_170, _463, fma(_168, _461, _166 * _459)), fp_c1_1._m0[0].y) * max(fma(_170, _463, fma(_168, _461, _166 * _459)), fp_c1_1._m0[0].y);
            float _475 = _445;
            if (_471)
            {
                _475 = sqrt(_455);
            }
            float _477 = _475;
            if (!_471)
            {
                _477 = 1.0;
            }
            float _479 = max(fma(_162, _463, fma(_160, _461, _158 * _459)), fp_c1_1._m0[0].y);
            bool _481 = fma(_423 * inversesqrt(_455), fp_c10_1._m0[558].z, (_435 * inversesqrt(_455)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _483 = max(_457, fp_c1_1._m0[0].y);
            float _485 = clamp(fma(_469 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_469 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _487 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_435, fma(_465, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_423 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_465 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_435, fma(_465, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_423 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_465 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _489 = log2(clamp(fma(_477, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y;
            float _491 = _489;
            if (_481)
            {
                _491 = fma(_487, -_487, fp_c1_1._m0[1].x) * fma(_487, -_487, fp_c1_1._m0[1].x);
            }
            float _493 = exp2(_479 * fma(_479, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _495 = _491;
            if (!_481)
            {
                _495 = 1.0;
            }
            float _497 = (_245 * (1.0 / (_237 + fma(_237, -_483, _483)))) * ((_231 * (1.0 / max(fma(_235, _473, -_473) + 1.0, fp_c1_1._m0[0].y))) * (_231 * (1.0 / max(fma(_235, _473, -_473) + 1.0, fp_c1_1._m0[0].y))));
            float _499 = (min(fma(_485, -_485, fp_c1_1._m0[1].x) * fma(_485, -_485, fp_c1_1._m0[1].x), _495) * (exp2(_489) * exp2(log2(clamp((fma(_445 * _467, -fp_c10_1._m0[558].z, (_441 * _467) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_457 + (-0.0), 0.0, 1.0);
            float _501 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_227, fp_c10_1._m0[562].z, fma(_417, fp_c10_1._m0[562].y, _229 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _419, 0.5, 0.5), (-fma((fma(_227, fp_c10_1._m0[563].z, fma(_417, fp_c10_1._m0[563].y, _229 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _419, 0.5, 0.5)) + 1.0)).z > fma((fma(_227, fp_c10_1._m0[564].z, fma(_417, fp_c10_1._m0[564].y, _229 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _419, 0.5, 0.5)) || (_469 <= 0.0));
            _305 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _499) * fma(_275, fp_c1_1._m0[1].y, ((_260 + fma(_260, -_493, _493)) * _497) * 0.079577468335628509521484375), _501, _321);
            _307 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _499) * fma(_251, fp_c1_1._m0[1].y, ((_256 + fma(_256, -_493, _493)) * _497) * 0.079577468335628509521484375), _501, _317);
            _309 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _499) * fma(_262, fp_c1_1._m0[1].y, ((_258 + fma(_258, -_493, _493)) * _497) * 0.079577468335628509521484375), _501, _319);
        }
    }
    float _503 = _229 + (-fp_c3_1._m0[11].w);
    float _505 = _80.y;
    float _507 = _227 + (-fp_c3_1._m0[13].w);
    float _509 = _505 + (-fp_c3_1._m0[12].w);
    float _511 = fma(_507, _507, fma(_509, _509, _503 * _503));
    float _513 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _515 = fma(_199.z * fma(fp_c6_1._m0[14].z + (-fp_c6_1._m0[12].z), fp_c7_1._m0[52].w, fp_c6_1._m0[12].z), _513, fma(_295, _305, _297 * (fma(_247 * (_260 + fma(_260, -_249, _249)), fp_c1_1._m0[0].w, _275 * 0.3183098733425140380859375) * fma(_289, fp_c5_1._m0[5].z, _285))));
    float _517 = clamp(fma(_297 * _295, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _519 = fma(_199.x * fma(fp_c6_1._m0[14].x + (-fp_c6_1._m0[12].x), fp_c7_1._m0[52].w, fp_c6_1._m0[12].x), _513, fma(_295, _307, _297 * (fma(_247 * (_256 + fma(_256, -_249, _249)), fp_c1_1._m0[0].w, _251 * 0.3183098733425140380859375) * fma(_289, fp_c5_1._m0[5].x, _281))));
    float _521 = fma(_199.y * fma(fp_c6_1._m0[14].y + (-fp_c6_1._m0[12].y), fp_c7_1._m0[52].w, fp_c6_1._m0[12].y), _513, fma(_295, _309, _297 * (fma(_247 * (_258 + fma(_258, -_249, _249)), fp_c1_1._m0[0].w, _262 * 0.3183098733425140380859375) * fma(_289, fp_c5_1._m0[5].y, _283))));
    float _523 = exp2(log2(clamp(sqrt(_511) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_507 * inversesqrt(_511), fp_c5_1._m0[23].z, fma(_509 * inversesqrt(_511), fp_c5_1._m0[23].y, (_503 * inversesqrt(_511)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _525 = clamp(fma(fma(_227, fp_c5_1._m0[14].z, fma(_505, fp_c5_1._m0[14].y, _229 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _527 = fma((-_519) + fp_c5_1._m0[13].x, _525, _519);
    float _529 = fma((-_521) + fp_c5_1._m0[13].y, _525, _521);
    float _531 = fma((-_515) + fp_c5_1._m0[13].z, _525, _515);
    float _533 = clamp((-exp2((clamp(fma(sqrt(_511), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _83.x = fma((-_527) + fma(fma((_523 * fp_c7_1._m0[55].x) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _533, _527);
    _83.y = fma((-_529) + fma(fma((_523 * fp_c7_1._m0[55].y) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _533, _529);
    _83.z = fma((-_531) + fma(fma((_523 * fp_c7_1._m0[55].z) * _517, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _533, _531);
    _83.w = 1.0;
}


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

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_10;
layout(binding = 1) uniform sampler2D fp_tex_tcb_22;
layout(binding = 2) uniform sampler2D fp_tex_tcb_24;
layout(binding = 3) uniform sampler2D fp_tex_tcb_28;
layout(binding = 4) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 5) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 6) uniform sampler2D fp_tex_tcb_38;
layout(binding = 7) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _60;
layout(location = 0) in vec4 _62;
layout(location = 4) in vec4 _64;
layout(location = 1) in vec4 _66;
layout(location = 3) in vec4 _68;
layout(location = 6) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 0) out vec4 _75;
uint _6[12];

void main()
{
    bool _271 = false;
    float _82 = 1.0 / (_60.z * gl_FragCoord.w);
    float _84 = 1.0 / _64.w;
    vec2 _88 = texture(fp_tex_tcb_2A, vec2(fma(_64.x * _84, 0.5, 0.5), fma(_64.y * _84, -0.5, 0.5))).xy;
    float _90 = _66.x;
    float _92 = _68.x;
    float _94 = _66.y;
    float _96 = _68.y;
    float _98 = _66.z;
    float _100 = _68.z;
    float _102 = inversesqrt(fma(_98, _98, fma(_94, _94, _90 * _90)));
    float _104 = inversesqrt(fma(_100, _100, fma(_96, _96, _92 * _92)));
    float _106 = _90 * _102;
    float _108 = _94 * _102;
    float _110 = _92 * (-_104);
    float _112 = _96 * (-_104);
    float _114 = _98 * _102;
    float _116 = _100 * (-_104);
    float _118 = fma(_114, _116, fma(_108, _112, _106 * _110));
    float _120 = max(_118, fp_c1_1._m0[0].y);
    float _122 = fma(_106 * (-_118), -2.0, -_110);
    float _124 = fma(_108 * (-_118), -2.0, -_112);
    float _126 = max(texture(fp_tex_tcb_10, vec2(_62.x, _62.y)).x, fp_c1_1._m0[0].x);
    float _128 = fma(_114 * (-_118), -2.0, -_116);
    float _130 = 1.0 / max(abs(_128), max(abs(_122), abs(_124)));
    vec2 _132 = texture(fp_tex_tcb_38, vec2(_120, (-_126) + (-0.0))).xy;
    float _134 = _132.x;
    float _136 = _132.y;
    float _138 = _110 + (-fp_c5_1._m0[23].x);
    vec3 _142 = texture(fp_tex_tcb_36, vec4(_122 * _130, _124 * _130, _128 * _130, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_126 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _144 = texture(fp_tex_tcb_22, vec2(_70.x, _70.y)).xy;
    vec4 _147 = texture(fp_tex_tcb_24, vec2(_70.z, _70.w)).xyzw;
    float _149 = _147.w;
    float _151 = _112 + (-fp_c5_1._m0[23].y);
    float _153 = _116 + (-fp_c5_1._m0[23].z);
    float _155 = _106 * _108;
    float _157 = _108 * _114;
    float _159 = _114 * _114;
    float _161 = inversesqrt(fma(_153, _153, fma(_151, _151, _138 * _138)));
    float _163 = _72.x;
    float _165 = _72.z;
    float _167 = _138 * _161;
    float _169 = _151 * _161;
    float _171 = _153 * _161;
    float _173 = _106 * _114;
    float _175 = max(fma(_116, _171, fma(_112, _169, _110 * _167)), fp_c1_1._m0[0].y);
    float _177 = fma(_106, _106, -(_108 * _108));
    float _179 = _126 * _126;
    float _181 = fma(_126, 0.5, 0.5);
    float _183 = fma(_108, -fp_c5_1._m0[23].y, _106 * (-fp_c5_1._m0[23].x));
    float _185 = max(fma(_114, _171, fma(_108, _169, _106 * _167)), fp_c1_1._m0[0].y) * max(fma(_114, _171, fma(_108, _169, _106 * _167)), fp_c1_1._m0[0].y);
    float _187 = (_181 * 0.5) * _181;
    float _189 = max(fma(_114, -fp_c5_1._m0[23].z, _183), fp_c1_1._m0[0].y);
    int _192 = max(0, min(int(trunc((_165 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _194 = exp2(_175 * fma(_175, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _196 = 1.0 / (_187 + fma(_120, -_187, _120));
    float _198 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].y, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _200 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].x, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _202 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].z, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    uint _205 = uint(int(uint((((int(uint(_192) >> uint(16)) * 20) << 16) + (((_192 & 65535) * 20) + max(0, min(int(trunc((_163 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _207 = fp_c10_1._m0[int(uint(int(_205)) >> uint(2))][int(_205) & 3];
    float _209 = (_196 * (1.0 / (_187 + fma(_187, -_189, _189)))) * ((_179 * (1.0 / max(fma(_185, _179 * _179, -_185) + 1.0, fp_c1_1._m0[0].y))) * (_179 * (1.0 / max(fma(_185, _179 * _179, -_185) + 1.0, fp_c1_1._m0[0].y))));
    float _211 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    float _213 = _60.w;
    float _215 = fma(_200, -_211, _211);
    float _217 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _219 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _221 = fma(_198, -_217, _217);
    float _223 = fma(_202, -_219, _219);
    float _225 = clamp(_213 * clamp(fma(_144.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0), 0.0, 1.0);
    float _227 = ((_147.y * _149) * _213) * 32.0;
    float _229 = ((_147.x * _149) * _213) * 32.0;
    float _231 = ((_147.z * _149) * _213) * 32.0;
    float _233 = fma(_221, _227, fma(_142.y, fma(_198, _134, _136), max(0.0, fma(_177, fp_c5_1._m0[31].y, (fma(_114, fp_c5_1._m0[26].z, fma(_108, fp_c5_1._m0[26].y, _106 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_173, fp_c5_1._m0[29].w, fma(_159, fp_c5_1._m0[29].z, fma(_157, fp_c5_1._m0[29].y, _155 * fp_c5_1._m0[29].x))))) * _221));
    float _235 = fma(_215, _229, fma(_142.x, fma(_200, _134, _136), max(0.0, fma(_177, fp_c5_1._m0[31].x, (fma(_114, fp_c5_1._m0[25].z, fma(_108, fp_c5_1._m0[25].y, _106 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_173, fp_c5_1._m0[28].w, fma(_159, fp_c5_1._m0[28].z, fma(_157, fp_c5_1._m0[28].y, _155 * fp_c5_1._m0[28].x))))) * _215));
    float _237 = fma(_223, _231, fma(_142.z, fma(_202, _134, _136), max(0.0, fma(_177, fp_c5_1._m0[31].z, (fma(_114, fp_c5_1._m0[27].z, fma(_108, fp_c5_1._m0[27].y, _106 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_173, fp_c5_1._m0[30].w, fma(_159, fp_c5_1._m0[30].z, fma(_157, fp_c5_1._m0[30].y, _155 * fp_c5_1._m0[30].x))))) * _223));
    float _239 = clamp(fma(_114, -fp_c5_1._m0[23].z, _183), 0.0, 1.0);
    float _241 = clamp((-_225) + 1.0, 0.0, 1.0);
    float _243 = clamp((-fma(_225, fp_c7_1._m0[37].w, clamp(_213 * clamp(fma(_144.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0) + fma(max((-_88.x) + 1.0, (-_88.y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_60.x * gl_FragCoord.w) * _82, (_60.y * gl_FragCoord.w) * _82)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x)))) + 1.0, 0.0, 1.0);
    int _245 = floatBitsToInt(_207);
    float _247 = _235;
    float _249 = _233;
    float _251 = _237;
    float _253 = _237;
    float _255 = _233;
    float _257 = _235;
    if (floatBitsToInt(_207) != (-1))
    {
        int _259 = 0;
        float _263;
        float _265;
        float _267;
        int _353;
        do
        {
            int _261 = _245 & 255;
            _263 = _247;
            _265 = _249;
            _267 = _251;
            _271 = uint(_261) >= 30u;
            if (_271)
            {
                break;
            }
            int _273 = _261 << 4;
            uint _275 = uint(int(uint(_273 + 7360) >> uint(2)));
            int _277 = int(_275) + 1;
            uint _279 = uint(int(uint(_273 + 7368) >> uint(2)));
            float _281 = (-_163) + fp_c10_1._m0[int(uint(int(_275)) >> uint(2))][int(_275) & 3];
            float _283 = fp_c10_1._m0[int(uint(_277) >> uint(2))][_277 & 3] + (-_72.y);
            float _285 = (-_165) + fp_c10_1._m0[int(uint(int(_279)) >> uint(2))][int(_279) & 3];
            float _287 = fma(_285, _285, fma(_283, _283, _281 * _281));
            float _289 = _281 * inversesqrt(_287);
            float _291 = _283 * inversesqrt(_287);
            float _293 = _285 * inversesqrt(_287);
            float _295 = _110 + _289;
            float _297 = _112 + _291;
            float _299 = _116 + _293;
            float _301 = inversesqrt(fma(_299, _299, fma(_297, _297, _295 * _295)));
            float _303 = _295 * _301;
            float _305 = _297 * _301;
            float _307 = _299 * _301;
            float _309 = max(fma(_116, _307, fma(_112, _305, _110 * _303)), fp_c1_1._m0[0].y);
            uint _311 = uint(int(uint(_273 + 6880) >> uint(2)));
            int _313 = int(_311) + 1;
            float _315 = max(fma(_114, _307, fma(_108, _305, _106 * _303)), fp_c1_1._m0[0].y) * max(fma(_114, _307, fma(_108, _305, _106 * _303)), fp_c1_1._m0[0].y);
            float _317 = fma(_114, _293, fma(_108, _291, _106 * _289));
            float _319 = max(_317, fp_c1_1._m0[0].y);
            uint _321 = uint(int(uint(_273 + 8320) >> uint(2)));
            float _323 = exp2(_309 * fma(_309, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _325 = (_196 * (1.0 / (_187 + fma(_187, -_319, _319)))) * ((_179 * (1.0 / max(fma(_179 * _179, _315, -_315) + 1.0, fp_c1_1._m0[0].y))) * (_179 * (1.0 / max(fma(_179 * _179, _315, -_315) + 1.0, fp_c1_1._m0[0].y))));
            float _327 = (_198 + fma(_198, -_323, _323)) * _325;
            uint _329 = uint(int(uint(_273 + 6408) >> uint(2)));
            uint _331 = uint(int(uint(_273 + 6400) >> uint(2)));
            int _333 = int(_331) + 1;
            bool _335 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_321)) >> uint(2))][int(_321) & 3]) != 0;
            float _337 = _327;
            if (!_335)
            {
                _337 = 1.0;
            }
            float _339 = _337;
            if (_335)
            {
                uint _341 = uint(int(uint(_273 + 7840) >> uint(2)));
                int _343 = int(_341) + 1;
                uint _345 = uint(int(uint(_273 + 7848) >> uint(2)));
                uint _347 = uint(int(uint(_273 + 6888) >> uint(2)));
                float _349 = fp_c10_1._m0[int(uint(int(_347)) >> uint(2))][int(_347) & 3];
                int _351 = int(_347) + 1;
                _339 = exp2(fp_c10_1._m0[int(uint(_351) >> uint(2))][_351 & 3] * log2(clamp(((-_349) + fma(_293, -fp_c10_1._m0[int(uint(int(_345)) >> uint(2))][int(_345) & 3], fma(_291, -fp_c10_1._m0[int(uint(_343) >> uint(2))][_343 & 3], _289 * (-fp_c10_1._m0[int(uint(int(_341)) >> uint(2))][int(_341) & 3])))) * (1.0 / ((-_349) + 1.0)), 0.0, 1.0)));
            }
            _353 = _259 + 1;
            float _355 = (exp2(fp_c10_1._m0[int(uint(_313) >> uint(2))][_313 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_311)) >> uint(2))][int(_311) & 3], -sqrt(_287), fp_c1_1._m0[1].x), 0.0, 1.0))) * _339) * clamp(_317 + (-0.0), 0.0, 1.0);
            float _357 = fma(fp_c10_1._m0[int(uint(int(_331)) >> uint(2))][int(_331) & 3] * _355, fma(_211, fp_c1_1._m0[1].y, ((_200 + fma(_200, -_323, _323)) * _325) * 0.079577468335628509521484375), _247);
            float _359 = fma(fp_c10_1._m0[int(uint(_333) >> uint(2))][_333 & 3] * _355, fma(_217, fp_c1_1._m0[1].y, _327 * 0.079577468335628509521484375), _249);
            float _361 = fma(fp_c10_1._m0[int(uint(int(_329)) >> uint(2))][int(_329) & 3] * _355, fma(_219, fp_c1_1._m0[1].y, ((_202 + fma(_202, -_323, _323)) * _325) * 0.079577468335628509521484375), _251);
            _245 = int(uint(_245) >> uint(8));
            _259 = _353;
            _247 = _357;
            _249 = _359;
            _251 = _361;
            _263 = _357;
            _265 = _359;
            _267 = _361;
        } while (!(_353 >= 4));
        _271 = false;
        _253 = _267;
        _255 = _265;
        _257 = _263;
        if ((_245 & 255) == 30)
        {
            float _363 = 1.0 / fp_c10_1._m0[561].y;
            float _365 = _165 + (-fp_c10_1._m0[557].z);
            float _367 = (-_163) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_363, fp_c10_1._m0[557].x);
            float _369 = (-_165) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_363, fp_c10_1._m0[557].z);
            float _371 = _367 * _367;
            float _373 = _163 + (-fp_c10_1._m0[557].x);
            float _375 = sqrt(fma(_369, _369, _371)) * (-fp_c10_1._m0[558].y);
            float _377 = inversesqrt(fma(_369, _369, fma(_375, _375, _371)));
            float _379 = _373 * fp_c10_1._m0[558].z;
            float _381 = _367 * _377;
            float _383 = _375 * _377;
            float _385 = _369 * _377;
            float _387 = _110 + _381;
            float _389 = _112 + _383;
            float _391 = _116 + _385;
            float _393 = _365 * fp_c10_1._m0[558].x;
            float _395 = inversesqrt(fma(_391, _391, fma(_389, _389, _387 * _387)));
            float _397 = _72.y;
            float _399 = _387 * _395;
            float _401 = _389 * _395;
            float _403 = ((-float(_393 < _379)) + float(_393 > _379)) * fp_c10_1._m0[561].y;
            float _405 = fma(_365, _365, _373 * _373);
            float _407 = 1.0 / (fma(_165, fp_c10_1._m0[565].z, fma(_397, fp_c10_1._m0[565].y, _163 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _409 = fma(_365, fp_c10_1._m0[558].z, _373 * fp_c10_1._m0[558].x);
            bool _411 = _409 > 0.0;
            float _413 = fma(_114, _385, fma(_108, _383, _106 * _381));
            float _415 = _391 * _395;
            float _417 = inversesqrt(fma(_385, _385, _381 * _381));
            float _419 = max(fma(_116, _415, fma(_112, _401, _110 * _399)), fp_c1_1._m0[0].y);
            float _421 = max(fma(_114, _415, fma(_108, _401, _106 * _399)), fp_c1_1._m0[0].y) * max(fma(_114, _415, fma(_108, _401, _106 * _399)), fp_c1_1._m0[0].y);
            float _423 = _381;
            if (_411)
            {
                _423 = sqrt(_405);
            }
            float _425 = _423;
            if (!_411)
            {
                _425 = 1.0;
            }
            bool _427 = fma(_365 * inversesqrt(_405), fp_c10_1._m0[558].z, (_373 * inversesqrt(_405)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _429 = clamp(fma(_409 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_409 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _431 = max(_413, fp_c1_1._m0[0].y);
            float _433 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_373, fma(_403, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_365 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_403 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_373, fma(_403, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_365 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_403 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _435 = log2(clamp((fma(_385 * _417, -fp_c10_1._m0[558].z, (_381 * _417) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _437 = exp2(_419 * fma(_419, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _439 = _435;
            if (_427)
            {
                _439 = fma(_433, -_433, fp_c1_1._m0[1].x) * fma(_433, -_433, fp_c1_1._m0[1].x);
            }
            float _441 = _439;
            if (!_427)
            {
                _441 = 1.0;
            }
            float _443 = (_196 * (1.0 / (_187 + fma(_187, -_431, _431)))) * ((_179 * (1.0 / max(fma(_179 * _179, _421, -_421) + 1.0, fp_c1_1._m0[0].y))) * (_179 * (1.0 / max(fma(_179 * _179, _421, -_421) + 1.0, fp_c1_1._m0[0].y))));
            float _445 = (min(fma(_429, -_429, fp_c1_1._m0[1].x) * fma(_429, -_429, fp_c1_1._m0[1].x), _441) * (exp2(log2(clamp(fma(_425, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_435))) * clamp(_413 + (-0.0), 0.0, 1.0);
            float _447 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_165, fp_c10_1._m0[562].z, fma(_397, fp_c10_1._m0[562].y, _163 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _407, 0.5, 0.5), (-fma((fma(_165, fp_c10_1._m0[563].z, fma(_397, fp_c10_1._m0[563].y, _163 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _407, 0.5, 0.5)) + 1.0)).z > fma((fma(_165, fp_c10_1._m0[564].z, fma(_397, fp_c10_1._m0[564].y, _163 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _407, 0.5, 0.5)) || (_409 <= 0.0));
            _253 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _445) * fma(_219, fp_c1_1._m0[1].y, ((_202 + fma(_202, -_437, _437)) * _443) * 0.079577468335628509521484375), _447, _267);
            _255 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _445) * fma(_217, fp_c1_1._m0[1].y, ((_198 + fma(_198, -_437, _437)) * _443) * 0.079577468335628509521484375), _447, _265);
            _257 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _445) * fma(_211, fp_c1_1._m0[1].y, ((_200 + fma(_200, -_437, _437)) * _443) * 0.079577468335628509521484375), _447, _263);
        }
    }
    float _449 = _163 + (-fp_c3_1._m0[11].w);
    float _451 = _72.y;
    float _453 = _165 + (-fp_c3_1._m0[13].w);
    float _455 = fma(_241, _253, _243 * (fma(_209 * (_202 + fma(_202, -_194, _194)), fp_c1_1._m0[0].w, _219 * 0.3183098733425140380859375) * fma(_239, fp_c5_1._m0[5].z, _231)));
    float _457 = _451 + (-fp_c3_1._m0[12].w);
    float _459 = fma(_453, _453, fma(_457, _457, _449 * _449));
    float _461 = clamp(fma(fma(_165, fp_c5_1._m0[14].z, fma(_451, fp_c5_1._m0[14].y, _163 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _463 = clamp(fma(_243 * _241, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _465 = fma(_241, _255, _243 * (fma(_209 * (_198 + fma(_198, -_194, _194)), fp_c1_1._m0[0].w, _217 * 0.3183098733425140380859375) * fma(_239, fp_c5_1._m0[5].y, _227)));
    float _467 = fma(_241, _257, _243 * (fma(_209 * (_200 + fma(_200, -_194, _194)), fp_c1_1._m0[0].w, _211 * 0.3183098733425140380859375) * fma(_239, fp_c5_1._m0[5].x, _229)));
    float _469 = exp2(log2(clamp(sqrt(_459) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_453 * inversesqrt(_459), fp_c5_1._m0[23].z, fma(_457 * inversesqrt(_459), fp_c5_1._m0[23].y, (_449 * inversesqrt(_459)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _471 = fma((-_467) + fp_c5_1._m0[13].x, _461, _467);
    float _473 = fma((-_465) + fp_c5_1._m0[13].y, _461, _465);
    float _475 = fma((-_455) + fp_c5_1._m0[13].z, _461, _455);
    float _477 = clamp((-exp2((clamp(fma(sqrt(_459), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _75.x = fma((-_471) + fma(fma((_469 * fp_c7_1._m0[55].x) * _463, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _477, _471);
    _75.y = fma((-_473) + fma(fma((_469 * fp_c7_1._m0[55].y) * _463, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _477, _473);
    _75.z = fma((-_475) + fma(fma((_469 * fp_c7_1._m0[55].z) * _463, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _477, _475);
    _75.w = 1.0;
}


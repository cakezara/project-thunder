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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_14;
layout(binding = 2) uniform sampler2D fp_tex_tcb_28;
layout(binding = 3) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 4) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 5) uniform sampler2D fp_tex_tcb_38;
layout(binding = 6) uniform sampler2D fp_tex_tcb_44;

layout(location = 5) in vec4 _58;
layout(location = 1) in vec4 _60;
layout(location = 3) in vec4 _62;
layout(location = 0) in vec4 _64;
layout(location = 4) in vec4 _66;
layout(location = 2) in vec4 _68;
layout(location = 0) out vec4 _71;
uint _6[12];

void main()
{
    bool _258 = false;
    float _78 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _80 = 1.0 / (_58.z * gl_FragCoord.w);
    float _82 = _60.x;
    float _84 = _62.x;
    float _86 = _60.y;
    float _88 = _62.y;
    float _90 = _60.z;
    float _92 = _62.z;
    float _94 = _64.x;
    float _96 = _64.y;
    float _98 = inversesqrt(fma(_90, _90, fma(_86, _86, _82 * _82)));
    float _100 = inversesqrt(fma(_92, _92, fma(_88, _88, _84 * _84)));
    float _102 = _82 * _98;
    float _104 = _86 * _98;
    float _106 = _84 * (-_100);
    float _108 = _90 * _98;
    float _110 = _88 * (-_100);
    float _112 = _92 * (-_100);
    float _114 = fma(_108, _112, fma(_104, _110, _102 * _106));
    float _116 = 1.0 / _66.w;
    float _118 = fma(_102 * (-_114), -2.0, -_106);
    float _120 = fma(_104 * (-_114), -2.0, -_110);
    float _122 = fma(_108 * (-_114), -2.0, -_112);
    float _124 = 1.0 / max(abs(_122), max(abs(_118), abs(_120)));
    float _126 = max(_114, fp_c1_1._m0[0].y);
    vec2 _130 = texture(fp_tex_tcb_2A, vec2(fma(_66.x * _116, 0.5, 0.5), fma(_66.y * _116, -0.5, 0.5))).xy;
    vec3 _134 = texture(fp_tex_tcb_A, vec2(_94, _96)).xyz;
    float _136 = _134.x;
    float _138 = _134.y;
    float _140 = _134.z;
    vec2 _142 = texture(fp_tex_tcb_38, vec2(_126, (-_78) + (-0.0))).xy;
    float _144 = _142.x;
    float _146 = _142.y;
    vec3 _148 = texture(fp_tex_tcb_36, vec4(_118 * _124, _120 * _124, _122 * _124, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_78 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _150 = texture(fp_tex_tcb_14, vec2(_94, _96)).xyz;
    float _152 = _106 + (-fp_c5_1._m0[23].x);
    float _154 = _110 + (-fp_c5_1._m0[23].y);
    float _156 = _112 + (-fp_c5_1._m0[23].z);
    float _158 = _102 * _104;
    float _160 = _68.x;
    float _162 = _104 * _108;
    float _164 = inversesqrt(fma(_156, _156, fma(_154, _154, _152 * _152)));
    float _166 = _68.z;
    float _168 = _108 * _108;
    float _170 = _102 * _108;
    float _172 = _152 * _164;
    float _174 = _154 * _164;
    float _176 = _156 * _164;
    float _178 = fma(_78, 0.5, 0.5);
    float _180 = _78 * _78;
    float _182 = _180 * _180;
    float _184 = fma(_104, -fp_c5_1._m0[23].y, _102 * (-fp_c5_1._m0[23].x));
    float _186 = max(fma(_108, _176, fma(_104, _174, _102 * _172)), fp_c1_1._m0[0].y) * max(fma(_108, _176, fma(_104, _174, _102 * _172)), fp_c1_1._m0[0].y);
    float _188 = (_178 * 0.5) * _178;
    float _190 = max(fma(_108, -fp_c5_1._m0[23].z, _184), fp_c1_1._m0[0].y);
    float _192 = max(fma(_112, _176, fma(_110, _174, _106 * _172)), fp_c1_1._m0[0].y);
    float _194 = fma(_102, _102, -(_104 * _104));
    int _197 = max(0, min(int(trunc((_166 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _199 = 1.0 / (_188 + fma(_126, -_188, _126));
    float _201 = clamp(fma(_108, -fp_c5_1._m0[23].z, _184), 0.0, 1.0);
    uint _204 = uint(int(uint((((int(uint(_197) >> uint(16)) * 20) << 16) + (((_197 & 65535) * 20) + max(0, min(int(trunc((_160 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _206 = fp_c10_1._m0[int(uint(int(_204)) >> uint(2))][int(_204) & 3];
    float _208 = (_199 * (1.0 / (_188 + fma(_188, -_190, _190)))) * ((_180 * (1.0 / max(fma(_186, _182, -_186) + 1.0, fp_c1_1._m0[0].y))) * (_180 * (1.0 / max(fma(_186, _182, -_186) + 1.0, fp_c1_1._m0[0].y))));
    float _210 = exp2(_192 * fma(_192, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _212 = fma(_136, -fp_c6_1._m0[9].x, _136);
    float _214 = fma(_138 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _216 = fma(_136 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _218 = fma(_140 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _220 = clamp((-fma(max((-_130.x) + 1.0, (-_130.y) + 1.0), clamp(_68.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_58.x * gl_FragCoord.w) * _80, (_58.y * gl_FragCoord.w) * _80)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _222 = fma(_138, -fp_c6_1._m0[9].x, _138);
    float _224 = fma(_140, -fp_c6_1._m0[9].x, _140);
    float _226 = fma(_148.x, fma(_216, _144, _146), max(0.0, fma(_194, fp_c5_1._m0[31].x, (fma(_108, fp_c5_1._m0[25].z, fma(_104, fp_c5_1._m0[25].y, _102 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_170, fp_c5_1._m0[28].w, fma(_168, fp_c5_1._m0[28].z, fma(_162, fp_c5_1._m0[28].y, _158 * fp_c5_1._m0[28].x))))) * fma(_212, -_216, _212));
    float _228 = fma(_148.y, fma(_214, _144, _146), max(0.0, fma(_194, fp_c5_1._m0[31].y, (fma(_108, fp_c5_1._m0[26].z, fma(_104, fp_c5_1._m0[26].y, _102 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_170, fp_c5_1._m0[29].w, fma(_168, fp_c5_1._m0[29].z, fma(_162, fp_c5_1._m0[29].y, _158 * fp_c5_1._m0[29].x))))) * fma(_222, -_214, _222));
    float _230 = fma(_148.z, fma(_218, _144, _146), max(0.0, fma(_194, fp_c5_1._m0[31].z, (fma(_108, fp_c5_1._m0[27].z, fma(_104, fp_c5_1._m0[27].y, _102 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_170, fp_c5_1._m0[30].w, fma(_168, fp_c5_1._m0[30].z, fma(_162, fp_c5_1._m0[30].y, _158 * fp_c5_1._m0[30].x))))) * fma(_224, -_218, _224));
    int _232 = floatBitsToInt(_206);
    float _234 = _230;
    float _236 = _226;
    float _238 = _228;
    float _240 = _226;
    float _242 = _228;
    float _244 = _230;
    if (floatBitsToInt(_206) != (-1))
    {
        int _246 = 0;
        float _250;
        float _252;
        float _254;
        int _340;
        do
        {
            int _248 = _232 & 255;
            _250 = _236;
            _252 = _238;
            _254 = _234;
            _258 = uint(_248) >= 30u;
            if (_258)
            {
                break;
            }
            int _260 = _248 << 4;
            uint _262 = uint(int(uint(_260 + 7360) >> uint(2)));
            int _264 = int(_262) + 1;
            uint _266 = uint(int(uint(_260 + 7368) >> uint(2)));
            float _268 = (-_160) + fp_c10_1._m0[int(uint(int(_262)) >> uint(2))][int(_262) & 3];
            float _270 = fp_c10_1._m0[int(uint(_264) >> uint(2))][_264 & 3] + (-_68.y);
            float _272 = (-_166) + fp_c10_1._m0[int(uint(int(_266)) >> uint(2))][int(_266) & 3];
            float _274 = fma(_272, _272, fma(_270, _270, _268 * _268));
            float _276 = _268 * inversesqrt(_274);
            float _278 = _270 * inversesqrt(_274);
            float _280 = _272 * inversesqrt(_274);
            float _282 = _106 + _276;
            float _284 = _110 + _278;
            float _286 = _112 + _280;
            float _288 = inversesqrt(fma(_286, _286, fma(_284, _284, _282 * _282)));
            float _290 = _282 * _288;
            float _292 = _284 * _288;
            float _294 = _286 * _288;
            uint _296 = uint(int(uint(_260 + 6880) >> uint(2)));
            int _298 = int(_296) + 1;
            uint _300 = uint(int(uint(_260 + 8320) >> uint(2)));
            uint _302 = uint(int(uint(_260 + 6408) >> uint(2)));
            float _304 = fma(_108, _280, fma(_104, _278, _102 * _276));
            float _306 = max(_304, fp_c1_1._m0[0].y);
            float _308 = max(fma(_112, _294, fma(_110, _292, _106 * _290)), fp_c1_1._m0[0].y);
            float _310 = max(fma(_108, _294, fma(_104, _292, _102 * _290)), fp_c1_1._m0[0].y) * max(fma(_108, _294, fma(_104, _292, _102 * _290)), fp_c1_1._m0[0].y);
            uint _312 = uint(int(uint(_260 + 6400) >> uint(2)));
            int _314 = int(_312) + 1;
            float _316 = exp2(_308 * fma(_308, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _318 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_300)) >> uint(2))][int(_300) & 3]) != 0;
            float _320 = (_199 * (1.0 / (_188 + fma(_188, -_306, _306)))) * ((_180 * (1.0 / max(fma(_182, _310, -_310) + 1.0, fp_c1_1._m0[0].y))) * (_180 * (1.0 / max(fma(_182, _310, -_310) + 1.0, fp_c1_1._m0[0].y))));
            float _322 = _218 + fma(_218, -_316, _316);
            float _324 = _322;
            if (!_318)
            {
                _324 = 1.0;
            }
            float _326 = _324;
            if (_318)
            {
                uint _328 = uint(int(uint(_260 + 7840) >> uint(2)));
                int _330 = int(_328) + 1;
                uint _332 = uint(int(uint(_260 + 6888) >> uint(2)));
                float _334 = fp_c10_1._m0[int(uint(int(_332)) >> uint(2))][int(_332) & 3];
                int _336 = int(_332) + 1;
                uint _338 = uint(int(uint(_260 + 7848) >> uint(2)));
                _326 = exp2(fp_c10_1._m0[int(uint(_336) >> uint(2))][_336 & 3] * log2(clamp(((-_334) + fma(_280, -fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3], fma(_278, -fp_c10_1._m0[int(uint(_330) >> uint(2))][_330 & 3], _276 * (-fp_c10_1._m0[int(uint(int(_328)) >> uint(2))][int(_328) & 3])))) * (1.0 / ((-_334) + 1.0)), 0.0, 1.0)));
            }
            _340 = _246 + 1;
            float _342 = (exp2(fp_c10_1._m0[int(uint(_298) >> uint(2))][_298 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_296)) >> uint(2))][int(_296) & 3], -sqrt(_274), fp_c1_1._m0[1].x), 0.0, 1.0))) * _326) * clamp(_304 + (-0.0), 0.0, 1.0);
            float _344 = fma(fp_c10_1._m0[int(uint(int(_302)) >> uint(2))][int(_302) & 3] * _342, fma(_224, fp_c1_1._m0[1].y, (_322 * _320) * 0.079577468335628509521484375), _234);
            float _346 = fma(fp_c10_1._m0[int(uint(int(_312)) >> uint(2))][int(_312) & 3] * _342, fma(_212, fp_c1_1._m0[1].y, ((_216 + fma(_216, -_316, _316)) * _320) * 0.079577468335628509521484375), _236);
            float _348 = fma(fp_c10_1._m0[int(uint(_314) >> uint(2))][_314 & 3] * _342, fma(_222, fp_c1_1._m0[1].y, ((_214 + fma(_214, -_316, _316)) * _320) * 0.079577468335628509521484375), _238);
            _232 = int(uint(_232) >> uint(8));
            _246 = _340;
            _234 = _344;
            _236 = _346;
            _238 = _348;
            _250 = _346;
            _252 = _348;
            _254 = _344;
        } while (!(_340 >= 4));
        _258 = false;
        _240 = _250;
        _242 = _252;
        _244 = _254;
        if ((_232 & 255) == 30)
        {
            float _350 = _68.y;
            float _352 = 1.0 / (fma(_166, fp_c10_1._m0[565].z, fma(_350, fp_c10_1._m0[565].y, _160 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _354 = 1.0 / fp_c10_1._m0[561].y;
            float _356 = _166 + (-fp_c10_1._m0[557].z);
            float _358 = _160 + (-fp_c10_1._m0[557].x);
            float _360 = (-_160) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_354, fp_c10_1._m0[557].x);
            float _362 = (-_166) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_354, fp_c10_1._m0[557].z);
            float _364 = _358 * fp_c10_1._m0[558].z;
            float _366 = _356 * fp_c10_1._m0[558].x;
            float _368 = _360 * _360;
            float _370 = fma(_356, _356, _358 * _358);
            float _372 = sqrt(fma(_362, _362, _368)) * (-fp_c10_1._m0[558].y);
            float _374 = ((-float(_366 < _364)) + float(_366 > _364)) * fp_c10_1._m0[561].y;
            float _376 = inversesqrt(fma(_362, _362, fma(_372, _372, _368)));
            float _378 = _360 * _376;
            float _380 = _372 * _376;
            float _382 = fma(_356, fp_c10_1._m0[558].z, _358 * fp_c10_1._m0[558].x);
            float _384 = _362 * _376;
            float _386 = _106 + _378;
            float _388 = _110 + _380;
            bool _390 = _382 > 0.0;
            float _392 = inversesqrt(fma(_384, _384, _378 * _378));
            float _394 = _112 + _384;
            float _396 = fma(_108, _384, fma(_104, _380, _102 * _378));
            float _398 = inversesqrt(fma(_394, _394, fma(_388, _388, _386 * _386)));
            float _400 = _386 * _398;
            float _402 = _388 * _398;
            float _404 = _394 * _398;
            float _406 = _394;
            if (_390)
            {
                _406 = sqrt(_370);
            }
            float _408 = _406;
            if (!_390)
            {
                _408 = 1.0;
            }
            float _410 = max(_396, fp_c1_1._m0[0].y);
            float _412 = max(fma(_112, _404, fma(_110, _402, _106 * _400)), fp_c1_1._m0[0].y);
            float _414 = max(fma(_108, _404, fma(_104, _402, _102 * _400)), fp_c1_1._m0[0].y) * max(fma(_108, _404, fma(_104, _402, _102 * _400)), fp_c1_1._m0[0].y);
            bool _416 = fma(_356 * inversesqrt(_370), fp_c10_1._m0[558].z, (_358 * inversesqrt(_370)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _418 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_358, fma(_374, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_356 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_374 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_358, fma(_374, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_356 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_374 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _420 = clamp(fma(_382 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_382 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _422 = _412;
            if (_416)
            {
                _422 = fma(_418, -_418, fp_c1_1._m0[1].x) * fma(_418, -_418, fp_c1_1._m0[1].x);
            }
            float _424 = _422;
            if (!_416)
            {
                _424 = 1.0;
            }
            float _426 = exp2(_412 * fma(_412, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _428 = (min(fma(_420, -_420, fp_c1_1._m0[1].x) * fma(_420, -_420, fp_c1_1._m0[1].x), _424) * (exp2(log2(clamp(fma(_408, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_384 * _392, -fp_c10_1._m0[558].z, (_378 * _392) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w))) * clamp(_396 + (-0.0), 0.0, 1.0);
            float _430 = (_199 * (1.0 / (_188 + fma(_188, -_410, _410)))) * ((_180 * (1.0 / max(fma(_182, _414, -_414) + 1.0, fp_c1_1._m0[0].y))) * (_180 * (1.0 / max(fma(_182, _414, -_414) + 1.0, fp_c1_1._m0[0].y))));
            float _432 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_166, fp_c10_1._m0[562].z, fma(_350, fp_c10_1._m0[562].y, _160 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _352, 0.5, 0.5), (-fma((fma(_166, fp_c10_1._m0[563].z, fma(_350, fp_c10_1._m0[563].y, _160 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _352, 0.5, 0.5)) + 1.0)).z > fma((fma(_166, fp_c10_1._m0[564].z, fma(_350, fp_c10_1._m0[564].y, _160 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _352, 0.5, 0.5)) || (_382 <= 0.0));
            _240 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _428) * fma(_212, fp_c1_1._m0[1].y, ((_216 + fma(_216, -_426, _426)) * _430) * 0.079577468335628509521484375), _432, _250);
            _242 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _428) * fma(_222, fp_c1_1._m0[1].y, ((_214 + fma(_214, -_426, _426)) * _430) * 0.079577468335628509521484375), _432, _252);
            _244 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _428) * fma(_224, fp_c1_1._m0[1].y, ((_218 + fma(_218, -_426, _426)) * _430) * 0.079577468335628509521484375), _432, _254);
        }
    }
    float _434 = _160 + (-fp_c3_1._m0[11].w);
    float _436 = _68.y;
    float _438 = _166 + (-fp_c3_1._m0[13].w);
    float _440 = fma(_150.x * fp_c6_1._m0[12].x, fp_c6_1._m0[11].x, fma(_220, fma(_208 * (_216 + fma(_216, -_210, _210)), fp_c1_1._m0[0].w, _212 * 0.3183098733425140380859375) * (_201 * fp_c5_1._m0[5].x), _240));
    float _442 = fma(_150.y * fp_c6_1._m0[12].y, fp_c6_1._m0[11].x, fma(_220, fma(_208 * (_214 + fma(_214, -_210, _210)), fp_c1_1._m0[0].w, _222 * 0.3183098733425140380859375) * (_201 * fp_c5_1._m0[5].y), _242));
    float _444 = fma(_150.z * fp_c6_1._m0[12].z, fp_c6_1._m0[11].x, fma(_220, fma(_208 * (_218 + fma(_218, -_210, _210)), fp_c1_1._m0[0].w, _224 * 0.3183098733425140380859375) * (_201 * fp_c5_1._m0[5].z), _244));
    float _446 = _436 + (-fp_c3_1._m0[12].w);
    float _448 = fma(_438, _438, fma(_446, _446, _434 * _434));
    float _450 = clamp(fma(fma(_166, fp_c5_1._m0[14].z, fma(_436, fp_c5_1._m0[14].y, _160 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _452 = exp2(log2(clamp(sqrt(_448) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_438 * inversesqrt(_448), fp_c5_1._m0[23].z, fma(_446 * inversesqrt(_448), fp_c5_1._m0[23].y, (_434 * inversesqrt(_448)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _454 = clamp(fma(_220, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _456 = fma((-_440) + fp_c5_1._m0[13].x, _450, _440);
    float _458 = fma((-_442) + fp_c5_1._m0[13].y, _450, _442);
    float _460 = fma((-_444) + fp_c5_1._m0[13].z, _450, _444);
    float _462 = clamp((-exp2((clamp(fma(sqrt(_448), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _71.x = fma((-_456) + fma(fma((_452 * fp_c7_1._m0[55].x) * _454, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _462, _456);
    _71.y = fma((-_458) + fma(fma((_452 * fp_c7_1._m0[55].y) * _454, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _462, _458);
    _71.z = fma((-_460) + fma(fma((_452 * fp_c7_1._m0[55].z) * _454, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _462, _460);
    _71.w = 1.0;
}


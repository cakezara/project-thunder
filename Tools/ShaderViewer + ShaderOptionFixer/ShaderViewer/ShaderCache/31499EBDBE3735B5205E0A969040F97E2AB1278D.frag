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

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 2, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_E;
layout(binding = 2) uniform sampler2D fp_tex_tcb_18;
layout(binding = 3) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 4) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 5) uniform sampler2D fp_tex_tcb_28;
layout(binding = 6) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 7) uniform sampler2DArray fp_tex_tcb_42;
layout(binding = 8) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 2) in vec4 _66;
layout(location = 5) in vec4 _68;
layout(location = 6) in vec4 _70;
layout(location = 3) in vec4 _72;
layout(location = 4) in vec4 _74;
layout(location = 0) out vec4 _77;
uint _6[12];

void main()
{
    bool _212 = false;
    float _84 = _62.x;
    float _86 = _62.y;
    vec2 _90 = texture(fp_tex_tcb_E, vec2(_84, _86)).xy;
    float _92 = _90.x;
    float _94 = _90.y;
    float _96 = texture(fp_tex_tcb_18, vec2(_84, _86)).x;
    float _98 = _64.x;
    float _100 = _64.y;
    float _102 = _64.z;
    float _104 = _66.y;
    float _106 = _66.z;
    float _108 = _66.w;
    float _110 = _66.x;
    float _112 = inversesqrt(fma(_102, _102, fma(_100, _100, _98 * _98)));
    float _114 = _102 * _112;
    float _116 = _98 * _112;
    float _118 = _100 * _112;
    float _120 = sqrt(clamp((-fma(_92, _92, _94 * _94)) + 1.0, 0.0, 1.0));
    float _122 = fma(_116, _120, fma(_92, _110, _94 * (fma(_118, _106, -(_114 * _104)) * _108)));
    float _124 = fma(_118, _120, fma(_92, _104, _94 * (fma(_114, _110, -(_116 * _106)) * _108)));
    float _126 = fma(_114, _120, fma(_92, _106, _94 * (fma(_116, _104, -(_118 * _110)) * _108)));
    float _128 = 1.0 / (_70.z * gl_FragCoord.w);
    float _130 = _96 * clamp((-fp_c6_1._m0[89].x) + 1.0, 0.0, 1.0);
    float _132 = inversesqrt(fma(_126, _126, fma(_124, _124, _122 * _122)));
    float _134 = fma(_96, (-_130) + fma(_130, -fp_c6_1._m0[89].y, _130), _130);
    float _136 = 1.0 / _68.w;
    float _138 = _122 * _132;
    float _140 = _124 * _132;
    float _142 = _126 * _132;
    float _144 = clamp(fma(fma(_134, fp_c6_1._m0[88].x, -_134) * fp_c6_1._m0[88].y, fp_c6_1._m0[88].z, _134), 0.0, 1.0);
    vec3 _148 = texture(fp_tex_tcb_A, vec2(_84, _86)).xyz;
    float _150 = _148.x;
    float _152 = _148.y;
    float _154 = _148.z;
    vec3 _156 = textureLod(fp_tex_tcb_42, vec3(fma(fma(_142, fp_c3_1._m0[0].z, fma(_140, fp_c3_1._m0[0].y, _138 * fp_c3_1._m0[0].x)), 0.5, 0.5), (-fma(fma(_142, fp_c3_1._m0[1].z, fma(_140, fp_c3_1._m0[1].y, _138 * fp_c3_1._m0[1].x)), 0.5, 0.5)) + 1.0, float(9)), (-_144) + 1.0).xyz;
    float _158 = _72.x;
    float _160 = _72.z;
    float _162 = _74.x;
    float _164 = _74.y;
    float _166 = _74.z;
    int _169 = max(0, min(int(trunc((_160 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    uint _172 = uint(int(uint((((int(uint(_169) >> uint(16)) * 20) << 16) + (((_169 & 65535) * 20) + max(0, min(int(trunc((_158 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _174 = fp_c10_1._m0[int(uint(int(_172)) >> uint(2))][int(_172) & 3];
    float _176 = inversesqrt(fma(_166, _166, fma(_164, _164, _162 * _162)));
    float _178 = _162 * (-_176);
    float _180 = _164 * (-_176);
    float _182 = _166 * (-_176);
    int _184 = floatBitsToInt(_174);
    float _186 = 0.0;
    float _188 = 0.0;
    float _190 = 0.0;
    float _192 = 0.0;
    float _194 = 0.0;
    float _196 = 0.0;
    if (floatBitsToInt(_174) != (-1))
    {
        float _198 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _200 = 0;
        float _204;
        float _206;
        float _208;
        int _274;
        do
        {
            int _202 = _184 & 255;
            _204 = _188;
            _206 = _186;
            _208 = _190;
            _212 = uint(_202) >= 30u;
            if (_212)
            {
                break;
            }
            int _214 = _202 << 4;
            uint _216 = uint(int(uint(_214 + 7360) >> uint(2)));
            int _218 = int(_216) + 1;
            uint _220 = uint(int(uint(_214 + 7368) >> uint(2)));
            uint _222 = uint(int(uint(_214 + 6880) >> uint(2)));
            int _224 = int(_222) + 1;
            uint _226 = uint(int(uint(_214 + 8320) >> uint(2)));
            uint _228 = uint(int(uint(_214 + 6408) >> uint(2)));
            int _230 = int(_228) + 1;
            float _232 = (-_158) + fp_c10_1._m0[int(uint(int(_216)) >> uint(2))][int(_216) & 3];
            float _234 = fp_c10_1._m0[int(uint(_218) >> uint(2))][_218 & 3] + (-_72.y);
            float _236 = (-_160) + fp_c10_1._m0[int(uint(int(_220)) >> uint(2))][int(_220) & 3];
            bool _238 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_226)) >> uint(2))][int(_226) & 3]) != 0;
            float _240 = fma(_236, _236, fma(_234, _234, _232 * _232));
            uint _242 = uint(int(uint(_214 + 6400) >> uint(2)));
            int _244 = int(_242) + 1;
            float _246 = _232 * inversesqrt(_240);
            float _248 = _234 * inversesqrt(_240);
            float _250 = fp_c10_1._m0[int(uint(_224) >> uint(2))][_224 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_222)) >> uint(2))][int(_222) & 3], -sqrt(_240), fp_c1_1._m0[0].x), 0.0, 1.0));
            float _252 = _236 * inversesqrt(_240);
            float _254 = _250;
            if (!_238)
            {
                _254 = 1.0;
            }
            float _256 = fma(_142, _252, fma(_140, _248, _138 * _246));
            float _258 = _254;
            if (_238)
            {
                uint _260 = uint(int(uint(_214 + 7840) >> uint(2)));
                int _262 = int(_260) + 1;
                uint _264 = uint(int(uint(_214 + 7848) >> uint(2)));
                uint _266 = uint(int(uint(_214 + 6888) >> uint(2)));
                float _268 = fp_c10_1._m0[int(uint(int(_266)) >> uint(2))][int(_266) & 3];
                int _270 = int(_266) + 1;
                _258 = exp2(fp_c10_1._m0[int(uint(_270) >> uint(2))][_270 & 3] * log2(clamp(((-_268) + fma(_252, -fp_c10_1._m0[int(uint(int(_264)) >> uint(2))][int(_264) & 3], fma(_248, -fp_c10_1._m0[int(uint(_262) >> uint(2))][_262 & 3], _246 * (-fp_c10_1._m0[int(uint(int(_260)) >> uint(2))][int(_260) & 3])))) * (1.0 / ((-_268) + 1.0)), 0.0, 1.0)));
            }
            float _272 = exp2(_250) * _258;
            _274 = _200 + 1;
            float _276 = fp_c10_1._m0[int(uint(_230) >> uint(2))][_230 & 3] * _272;
            float _278 = clamp(_256 + (-0.0), 0.0, 1.0);
            float _280 = clamp(_256 + fp_c6_1._m0[37].w, 0.0, 1.0) * (1.0 / (fp_c6_1._m0[37].w + 1.0));
            float _282 = (((-texture(fp_tex_tcb_1C, vec2(_84, _86)).x) + 1.0) * (fma(_198, fp_c1_1._m0[0].z, exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_182, -_252, fma(_180, -_248, _178 * (-_246))), fp_c1_1._m0[0].y) + (-0.0), 0.0, 1.0))) * _198) + 0.20000000298023223876953125)) * exp2(log2(clamp(fma(fma(_142, _182, fma(_140, _180, _138 * _178)), -clamp((-_256) + (-0.0), 0.0, 1.0), fp_c1_1._m0[0].x), 0.0, 1.0)) * fp_c6_1._m0[18].z);
            float _284 = _186 + fma(fp_c10_1._m0[int(uint(int(_242)) >> uint(2))][int(_242) & 3] * (_272 * (_280 * clamp(_278 + fp_c6_1._m0[38].x, 0.0, 1.0))), fp_c1_1._m0[0].w, (_282 * ((_150 * fp_c6_1._m0[19].x) * _276)) * 0.51499998569488525390625);
            float _286 = _188 + fma(fp_c10_1._m0[int(uint(_244) >> uint(2))][_244 & 3] * (_272 * (_280 * clamp(_278 + fp_c6_1._m0[38].y, 0.0, 1.0))), fp_c1_1._m0[1].x, (_282 * ((_152 * fp_c6_1._m0[19].y) * _276)) * 0.51499998569488525390625);
            float _288 = _190 + fma(fp_c10_1._m0[int(uint(int(_228)) >> uint(2))][int(_228) & 3] * (_272 * (_280 * clamp(_278 + fp_c6_1._m0[38].z, 0.0, 1.0))), fp_c1_1._m0[1].y, (_282 * ((_154 * fp_c6_1._m0[19].z) * _276)) * 0.51499998569488525390625);
            _184 = int(uint(_184) >> uint(8));
            _200 = _274;
            _186 = _284;
            _188 = _286;
            _190 = _288;
            _204 = _286;
            _206 = _284;
            _208 = _288;
        } while (!(_274 >= 4));
        _212 = false;
        _192 = _206;
        _194 = _204;
        _196 = _208;
        if ((_184 & 255) == 30)
        {
            float _290 = _72.y;
            float _292 = 1.0 / (fma(_160, fp_c10_1._m0[565].z, fma(_290, fp_c10_1._m0[565].y, _158 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _294 = 1.0 / fp_c10_1._m0[561].y;
            float _296 = _160 + (-fp_c10_1._m0[557].z);
            float _298 = _296 * fp_c10_1._m0[558].x;
            float _300 = (-_158) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_294, fp_c10_1._m0[557].x);
            float _302 = (-_160) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_294, fp_c10_1._m0[557].z);
            float _304 = _300 * _300;
            float _306 = sqrt(fma(_302, _302, _304)) * (-fp_c10_1._m0[558].y);
            float _308 = _158 + (-fp_c10_1._m0[557].x);
            float _310 = _308 * fp_c10_1._m0[558].z;
            float _312 = inversesqrt(fma(_302, _302, fma(_306, _306, _304)));
            float _314 = _300 * _312;
            float _316 = _302 * _312;
            float _318 = fma(_296, fp_c10_1._m0[558].z, _308 * fp_c10_1._m0[558].x);
            float _320 = ((-float(_298 < _310)) + float(_298 > _310)) * fp_c10_1._m0[561].y;
            bool _322 = _318 > 0.0;
            float _324 = fma(_296, _296, _308 * _308);
            float _326 = inversesqrt(fma(_316, _316, _314 * _314));
            float _328 = _320;
            if (_322)
            {
                _328 = sqrt(_324);
            }
            float _330 = _328;
            if (!_322)
            {
                _330 = 1.0;
            }
            float _332 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_308, fma(_320, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_296 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_320 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_308, fma(_320, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_296 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_320 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _334 = clamp(fma(_318 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0) * clamp(fma(_318 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[0].x), 0.0, 1.0);
            float _336 = fma(_142, _316, fma(_140, _306 * _312, _138 * _314));
            float _338 = fma(_332, -_332, fp_c1_1._m0[0].x) * fma(_332, -_332, fp_c1_1._m0[0].x);
            if (!(fma(_296 * inversesqrt(_324), fp_c10_1._m0[558].z, (_308 * inversesqrt(_324)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z))
            {
                _338 = 1.0;
            }
            float _340 = clamp(_336 + (-0.0), 0.0, 1.0);
            float _342 = clamp(_336 + fp_c6_1._m0[37].w, 0.0, 1.0) * (1.0 / (1.0 + fp_c6_1._m0[37].w));
            float _344 = min(fma(_334, -_334, fp_c1_1._m0[0].x) * fma(_334, -_334, fp_c1_1._m0[0].x), _338) * (exp2(log2(clamp(fma(_330, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_316 * _326, -fp_c10_1._m0[558].z, (_314 * _326) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w));
            float _346 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_160, fp_c10_1._m0[562].z, fma(_290, fp_c10_1._m0[562].y, _158 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _292, 0.5, 0.5), (-fma((fma(_160, fp_c10_1._m0[563].z, fma(_290, fp_c10_1._m0[563].y, _158 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _292, 0.5, 0.5)) + 1.0)).z > fma((fma(_160, fp_c10_1._m0[564].z, fma(_290, fp_c10_1._m0[564].y, _158 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _292, 0.5, 0.5)) || (_318 <= 0.0));
            _192 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * ((_342 * clamp(_340 + fp_c6_1._m0[38].x, 0.0, 1.0)) * _344)) * 0.12890754640102386474609375, _346, _206);
            _194 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * ((_342 * clamp(_340 + fp_c6_1._m0[38].y, 0.0, 1.0)) * _344)) * 0.13431085646152496337890625, _346, _204);
            _196 = fma(((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * ((_342 * clamp(_340 + fp_c6_1._m0[38].z, 0.0, 1.0)) * _344)) * 0.121651671826839447021484375, _346, _208);
        }
    }
    float _348 = fma(_180, -fp_c3_1._m0[1].z, -(_182 * (-fp_c3_1._m0[1].y)));
    float _350 = fma(_182, -fp_c3_1._m0[1].x, -(_178 * (-fp_c3_1._m0[1].z)));
    float _352 = fma(_178, -fp_c3_1._m0[1].y, -(_180 * (-fp_c3_1._m0[1].x)));
    float _354 = fma(_142, -_182, fma(_140, -_180, _138 * (-_178)));
    float _356 = inversesqrt(fma(_352, _352, fma(_350, _350, _348 * _348)));
    float _358 = _352 * _356;
    float _360 = _348 * _356;
    float _362 = _350 * _356;
    float _364 = fma(_182, -_362, -(_180 * (-_358)));
    float _366 = fma(_178, -_358, -(_182 * (-_360)));
    float _368 = fma(_180, -_360, -(_178 * (-_362)));
    float _370 = inversesqrt(fma(_368, _368, fma(_366, _366, _364 * _364)));
    float _372 = max(fma(_182, fma(_142 * _354, -2.0, -_182), fma(_180, fma(_140 * _354, -2.0, -_180), _178 * fma(_138 * _354, -2.0, -_178))), fp_c1_1._m0[2].x);
    vec3 _374 = textureLod(fp_tex_tcb_42, vec3(fma(fma(_142, _358, fma(_140, _362, _138 * _360)), 0.5, 0.5), (-fma(fma(_142, _368 * _370, fma(_140, _366 * _370, _138 * (_364 * _370))), 0.5, 0.5)) + 1.0, float(10)), (-_144) + 1.0).xyz;
    vec3 _376 = texture(fp_tex_tcb_1E, vec2(fma(_372, fp_c6_1._m0[50].x, _62.z), _62.w)).xyz;
    float _378 = _72.y;
    float _380 = _158 + (-fp_c3_1._m0[11].w);
    float _382 = _160 + (-fp_c3_1._m0[13].w);
    float _384 = clamp(fma(_154, fp_c1_1._m0[1].w, fma(_152, fp_c1_1._m0[1].z, _150 * 0.373640000820159912109375)), 0.0, 1.0);
    float _386 = _378 + (-fp_c3_1._m0[12].w);
    float _388 = fma(_382, _382, fma(_386, _386, _380 * _380));
    float _390 = clamp(fma(_144 * clamp((-fma(max(0.0, (-texture(fp_tex_tcb_2A, vec2(fma(_68.x * _136, 0.5, 0.5), fma(_68.y * _136, -0.5, 0.5))).y) + 1.0), clamp(_72.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_70.x * gl_FragCoord.w) * _128, (_70.y * gl_FragCoord.w) * _128)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0), fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _392 = exp2(log2(clamp(sqrt(_388) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_382 * inversesqrt(_388), fp_c5_1._m0[23].z, fma(_386 * inversesqrt(_388), fp_c5_1._m0[23].y, (_380 * inversesqrt(_388)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _394 = fma(exp2(_372 * fma(_372, fp_c1_1._m0[2].y, -6.9831600189208984375)), fp_c1_1._m0[2].z, 0.039999999105930328369140625);
    float _396 = fma(_384, -2.0, 3.0) * (_384 * _384);
    float _398 = clamp(fma(fma(_160, fp_c5_1._m0[14].z, fma(_378, fp_c5_1._m0[14].y, _158 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _400 = fma(_144, (_394 * (_376.x * fp_c6_1._m0[49].w)) * 0.834999978542327880859375, fma(fma(_144, _192, _156.x), _396, _374.x));
    float _402 = fma(_144, (_394 * (_376.y * fp_c6_1._m0[49].w)) * 0.87000000476837158203125, fma(fma(_144, _194, _156.y), _396, _374.y));
    float _404 = fma(_144, (_394 * (_376.z * fp_c6_1._m0[49].w)) * 0.78799998760223388671875, fma(fma(_144, _196, _156.z), _396, _374.z));
    float _406 = fma((-_400) + fp_c5_1._m0[13].x, _398, _400);
    float _408 = fma((-_402) + fp_c5_1._m0[13].y, _398, _402);
    float _410 = fma((-_404) + fp_c5_1._m0[13].z, _398, _404);
    float _412 = clamp((-exp2((clamp(fma(sqrt(_388), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _77.x = fma((-_406) + fma(fma((_392 * fp_c7_1._m0[55].x) * _390, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _412, _406);
    _77.y = fma((-_408) + fma(fma((_392 * fp_c7_1._m0[55].y) * _390, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _412, _408);
    _77.z = fma((-_410) + fma(fma((_392 * fp_c7_1._m0[55].z) * _390, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _412, _410);
    _77.w = 1.0;
}


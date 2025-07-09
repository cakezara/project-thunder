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
layout(binding = 6) uniform sampler2D fp_tex_tcb_16;
layout(binding = 7) uniform sampler2D fp_tex_tcb_18;
layout(binding = 8) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 9) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 10) uniform sampler2D fp_tex_tcb_28;
layout(binding = 11) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 12) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 13) uniform sampler2D fp_tex_tcb_38;
layout(binding = 14) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _74;
layout(location = 6) in vec4 _76;
layout(location = 5) in vec4 _78;
layout(location = 1) in vec4 _80;
layout(location = 2) in vec4 _82;
layout(location = 4) in vec4 _84;
layout(location = 3) in vec4 _86;
layout(location = 0) out vec4 _89;
uint _6[12];

void main()
{
    bool _370 = false;
    float _96 = _74.x;
    float _98 = _74.y;
    vec2 _102 = texture(fp_tex_tcb_E, vec2(_96, _98)).xy;
    float _104 = _102.x;
    float _106 = _102.y;
    float _108 = 1.0 / (_76.z * gl_FragCoord.w);
    float _110 = 1.0 / _78.w;
    vec2 _112 = texture(fp_tex_tcb_2A, vec2(fma(_78.x * _110, 0.5, 0.5), fma(_78.y * _110, -0.5, 0.5))).xy;
    float _114 = texture(fp_tex_tcb_1A, vec2(_96, _98)).x;
    vec3 _118 = texture(fp_tex_tcb_A, vec2(_96, _98)).xyz;
    float _120 = _118.x;
    float _122 = _118.y;
    float _124 = _118.z;
    float _126 = texture(fp_tex_tcb_12, vec2(_96, _98)).x;
    float _128 = _80.x;
    float _130 = _80.y;
    float _132 = _80.z;
    float _134 = _82.y;
    float _136 = _82.z;
    float _138 = _82.x;
    float _140 = _82.w;
    float _142 = _84.x;
    float _144 = _84.y;
    float _146 = _84.z;
    float _148 = inversesqrt(fma(_132, _132, fma(_130, _130, _128 * _128)));
    float _150 = _132 * _148;
    float _152 = _128 * _148;
    float _154 = _130 * _148;
    float _156 = max(texture(fp_tex_tcb_10, vec2(_96, _98)).x, fp_c1_1._m0[0].z);
    float _158 = sqrt(clamp((-fma(_104, _104, _106 * _106)) + 1.0, 0.0, 1.0));
    float _160 = fma(_152, _158, fma(_104, _138, _106 * (fma(_154, _136, -(_150 * _134)) * _140)));
    float _162 = fma(_154, _158, fma(_104, _134, _106 * (fma(_150, _138, -(_152 * _136)) * _140)));
    float _164 = fma(_150, _158, fma(_104, _136, _106 * (fma(_152, _134, -(_154 * _138)) * _140)));
    float _166 = inversesqrt(fma(_146, _146, fma(_144, _144, _142 * _142)));
    float _168 = inversesqrt(fma(_164, _164, fma(_162, _162, _160 * _160)));
    float _170 = _142 * (-_166);
    float _172 = _144 * (-_166);
    float _174 = _146 * (-_166);
    float _176 = _160 * _168;
    float _178 = _162 * _168;
    float _180 = _164 * _168;
    float _182 = fma(_180, _174, fma(_178, _172, _176 * _170));
    float _184 = fma(_176 * (-_182), -2.0, -_170);
    float _186 = fma(_178 * (-_182), -2.0, -_172);
    float _188 = fma(_180 * (-_182), -2.0, -_174);
    float _190 = max(_182, fp_c1_1._m0[0].w);
    vec2 _192 = texture(fp_tex_tcb_38, vec2(_190, (-_156) + (-0.0))).xy;
    float _194 = _192.x;
    float _196 = _192.y;
    float _198 = 1.0 / max(abs(_188), max(abs(_184), abs(_186)));
    vec3 _200 = texture(fp_tex_tcb_14, vec2(_96, _98)).xyz;
    vec3 _202 = texture(fp_tex_tcb_36, vec4(_184 * _198, _186 * _198, _188 * _198, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_156 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _204 = texture(fp_tex_tcb_1C, vec2(_96, _98)).xyz;
    vec3 _206 = texture(fp_tex_tcb_16, vec2(_96, _98)).xyz;
    float _208 = _170 * _172;
    float _210 = (-_112.y) + 1.0;
    float _212 = fma(_156, 0.5, 0.5);
    float _214 = _172 * _174;
    float _216 = clamp(_86.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _218 = _210 * _216;
    float _220 = _174 * _174;
    float _222 = _170 * _174;
    float _224 = clamp((exp2(log2(clamp(max(_182, fp_c1_1._m0[0].x) + (-0.0), 0.0, 1.0)) * fp_c6_1._m0[42].x) * fp_c6_1._m0[42].y) * _114, 0.0, 1.0);
    float _226 = fma(_224, _152 + (-_176), _176);
    float _228 = fma(_224, _154 + (-_178), _178);
    float _230 = fma(_224, _150 + (-_180), _180);
    float _232 = _226 * _228;
    float _234 = _228 * _230;
    float _236 = _226 * _230;
    float _238 = _230 * _230;
    float _240 = fma(_170, _170, -(_172 * _172));
    float _242 = fma(_226, _226, -(_228 * _228));
    float _244 = _170 + (-fp_c5_1._m0[23].x);
    float _246 = clamp(texture(fp_tex_tcb_C, vec2(_96, _98)).x + fp_c6_1._m0[8].y, 0.0, 1.0);
    float _248 = _86.z;
    float _250 = _172 + (-fp_c5_1._m0[23].y);
    float _252 = _86.x;
    float _254 = fma((-_120) + fp_c6_1._m0[92].x, _246, _120);
    float _256 = _174 + (-fp_c5_1._m0[23].z);
    float _258 = exp2(log2(clamp((-_182) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[44].y) * fp_c6_1._m0[44].x;
    float _260 = inversesqrt(fma(_256, _256, fma(_250, _250, _244 * _244)));
    float _262 = fma((-_122) + fp_c6_1._m0[92].y, _246, _122);
    float _264 = fma(_254, -_126, _254);
    float _266 = fma((-_124) + fp_c6_1._m0[92].z, _246, _124);
    float _268 = _244 * _260;
    float _270 = fma(_262, -_126, _262);
    float _272 = _250 * _260;
    float _274 = fma(_266, -_126, _266);
    float _276 = _256 * _260;
    float _278 = fma((max(0.0, fma(_240, fp_c5_1._m0[31].x, (fma(_174, -fp_c5_1._m0[25].z, fma(_172, -fp_c5_1._m0[25].y, _170 * (-fp_c5_1._m0[25].x))) + fp_c5_1._m0[25].w) + fma(_222, fp_c5_1._m0[28].w, fma(_220, fp_c5_1._m0[28].z, fma(_214, fp_c5_1._m0[28].y, _208 * fp_c5_1._m0[28].x))))) * fp_c6_1._m0[45].x) * _258, _114, fma((-_264) + fp_c6_1._m0[43].x, _224, _264));
    float _280 = _156 * _156;
    float _282 = fma((max(0.0, fma(_240, fp_c5_1._m0[31].y, (fma(_174, -fp_c5_1._m0[26].z, fma(_172, -fp_c5_1._m0[26].y, _170 * (-fp_c5_1._m0[26].x))) + fp_c5_1._m0[26].w) + fma(_222, fp_c5_1._m0[29].w, fma(_220, fp_c5_1._m0[29].z, fma(_214, fp_c5_1._m0[29].y, _208 * fp_c5_1._m0[29].x))))) * fp_c6_1._m0[45].y) * _258, _114, fma((-_270) + fp_c6_1._m0[43].y, _224, _270));
    float _284 = fma((max(0.0, fma(_240, fp_c5_1._m0[31].z, (fma(_174, -fp_c5_1._m0[27].z, fma(_172, -fp_c5_1._m0[27].y, _170 * (-fp_c5_1._m0[27].x))) + fp_c5_1._m0[27].w) + fma(_222, fp_c5_1._m0[30].w, fma(_220, fp_c5_1._m0[30].z, fma(_214, fp_c5_1._m0[30].y, _208 * fp_c5_1._m0[30].x))))) * fp_c6_1._m0[45].z) * _258, _114, fma((-_274) + fp_c6_1._m0[43].z, _224, _274));
    float _286 = fma(_178, -fp_c5_1._m0[23].y, _176 * (-fp_c5_1._m0[23].x));
    float _288 = max(fma(_180, _276, fma(_178, _272, _176 * _268)), fp_c1_1._m0[0].w) * max(fma(_180, _276, fma(_178, _272, _176 * _268)), fp_c1_1._m0[0].w);
    float _290 = max(fma(_174, _276, fma(_172, _272, _170 * _268)), fp_c1_1._m0[0].w);
    int _293 = max(0, min(int(trunc((_248 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _295 = (_212 * 0.5) * _212;
    float _297 = max(fma(_180, -fp_c5_1._m0[23].z, _286), fp_c1_1._m0[0].w);
    float _299 = 1.0 / (_295 + fma(_190, -_295, _190));
    uint _302 = uint(int(uint((((int(uint(_293) >> uint(16)) * 20) << 16) + (((_293 & 65535) * 20) + max(0, min(int(trunc((_252 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _304 = fp_c10_1._m0[int(uint(int(_302)) >> uint(2))][int(_302) & 3];
    float _306 = exp2(_290 * fma(_290, fp_c1_1._m0[1].x, -6.9831600189208984375));
    float _308 = fma(_126, _254 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _310 = fma(_126, _262 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _312 = fma(_126, _266 + (-0.039999999105930328369140625), fp_c1_1._m0[0].y);
    float _314 = fma(_224, -fp_c6_1._m0[17].w, fp_c6_1._m0[17].w);
    float _316 = (_299 * (1.0 / (_295 + fma(_295, -_297, _297)))) * ((_280 * (1.0 / max(fma(_288, _280 * _280, -_288) + 1.0, fp_c1_1._m0[0].w))) * (_280 * (1.0 / max(fma(_288, _280 * _280, -_288) + 1.0, fp_c1_1._m0[0].w))));
    float _318 = fma(_202.y, fma(_310, _194, _196), fma(_282, -_310, _282) * max(0.0, fma(_242, fp_c5_1._m0[31].y, (fma(_230, fp_c5_1._m0[26].z, fma(_228, fp_c5_1._m0[26].y, _226 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_236, fp_c5_1._m0[29].w, fma(_238, fp_c5_1._m0[29].z, fma(_234, fp_c5_1._m0[29].y, _232 * fp_c5_1._m0[29].x))))));
    float _320 = fma(_202.z, fma(_312, _194, _196), fma(_284, -_312, _284) * max(0.0, fma(_242, fp_c5_1._m0[31].z, (fma(_230, fp_c5_1._m0[27].z, fma(_228, fp_c5_1._m0[27].y, _226 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_236, fp_c5_1._m0[30].w, fma(_238, fp_c5_1._m0[30].z, fma(_234, fp_c5_1._m0[30].y, _232 * fp_c5_1._m0[30].x))))));
    float _322 = fma(_202.x, fma(_308, _194, _196), fma(_278, -_308, _278) * max(0.0, fma(_242, fp_c5_1._m0[31].x, (fma(_230, fp_c5_1._m0[25].z, fma(_228, fp_c5_1._m0[25].y, _226 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_236, fp_c5_1._m0[28].w, fma(_238, fp_c5_1._m0[28].z, fma(_234, fp_c5_1._m0[28].y, _232 * fp_c5_1._m0[28].x))))));
    float _324 = clamp(fma(_180, -fp_c5_1._m0[23].z, _286), 0.0, 1.0);
    float _326 = _266 * (_206.z * fp_c6_1._m0[19].z);
    float _328 = _254 * (_206.x * fp_c6_1._m0[19].x);
    float _330 = _262 * (_206.y * fp_c6_1._m0[19].y);
    float _332 = clamp((-fma(_216, max((-_112.x) + 1.0, _210), fma(texture(fp_tex_tcb_28, vec2((_76.x * gl_FragCoord.w) * _108, (_76.y * gl_FragCoord.w) * _108)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _334 = clamp(texture(fp_tex_tcb_18, vec2(_96, _98)).x + (-0.0), 0.0, 1.0);
    int _336 = floatBitsToInt(_304);
    float _338 = _322;
    float _340 = _318;
    float _342 = _320;
    float _344 = _322;
    float _346 = _318;
    float _348 = _320;
    if (floatBitsToInt(_304) != (-1))
    {
        float _350 = 1.0 / fp_c6_1._m0[18].x;
        float _352 = clamp((-_314) + 1.0, 0.0, 1.0);
        float _354 = clamp(fma(_218, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _356 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
        int _358 = 0;
        float _362;
        float _364;
        float _366;
        int _456;
        do
        {
            int _360 = _336 & 255;
            _362 = _338;
            _364 = _340;
            _366 = _342;
            _370 = uint(_360) >= 30u;
            if (_370)
            {
                break;
            }
            int _372 = _360 << 4;
            uint _374 = uint(int(uint(_372 + 7360) >> uint(2)));
            int _376 = int(_374) + 1;
            uint _378 = uint(int(uint(_372 + 7368) >> uint(2)));
            float _380 = (-_252) + fp_c10_1._m0[int(uint(int(_374)) >> uint(2))][int(_374) & 3];
            float _382 = fp_c10_1._m0[int(uint(_376) >> uint(2))][_376 & 3] + (-_86.y);
            float _384 = (-_248) + fp_c10_1._m0[int(uint(int(_378)) >> uint(2))][int(_378) & 3];
            float _386 = fma(_384, _384, fma(_382, _382, _380 * _380));
            float _388 = _380 * inversesqrt(_386);
            float _390 = _382 * inversesqrt(_386);
            float _392 = _384 * inversesqrt(_386);
            float _394 = _170 + _388;
            float _396 = _172 + _390;
            float _398 = _174 + _392;
            float _400 = inversesqrt(fma(_398, _398, fma(_396, _396, _394 * _394)));
            float _402 = _394 * _400;
            float _404 = _396 * _400;
            uint _406 = uint(int(uint(_372 + 6880) >> uint(2)));
            int _408 = int(_406) + 1;
            float _410 = _398 * _400;
            uint _412 = uint(int(uint(_372 + 8320) >> uint(2)));
            float _414 = max(fma(_174, _410, fma(_172, _404, _170 * _402)), fp_c1_1._m0[0].w);
            float _416 = max(fma(_180, _410, fma(_178, _404, _176 * _402)), fp_c1_1._m0[0].w) * max(fma(_180, _410, fma(_178, _404, _176 * _402)), fp_c1_1._m0[0].w);
            float _418 = fma(_180, _392, fma(_178, _390, _176 * _388));
            float _420 = max(_418, fp_c1_1._m0[0].w);
            float _422 = exp2(_414 * fma(_414, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _424 = clamp(fma(fp_c10_1._m0[int(uint(int(_406)) >> uint(2))][int(_406) & 3], -sqrt(_386), fp_c1_1._m0[1].z), 0.0, 1.0);
            bool _426 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_412)) >> uint(2))][int(_412) & 3]) != 0;
            float _428 = ((_280 * (1.0 / max(fma(_280 * _280, _416, -_416) + 1.0, fp_c1_1._m0[0].w))) * (_280 * (1.0 / max(fma(_280 * _280, _416, -_416) + 1.0, fp_c1_1._m0[0].w)))) * (_299 * (1.0 / (_295 + fma(_295, -_420, _420))));
            float _430 = _424;
            if (!_426)
            {
                _430 = 1.0;
            }
            float _432 = _430;
            if (_426)
            {
                uint _434 = uint(int(uint(_372 + 7840) >> uint(2)));
                int _436 = int(_434) + 1;
                uint _438 = uint(int(uint(_372 + 6888) >> uint(2)));
                float _440 = fp_c10_1._m0[int(uint(int(_438)) >> uint(2))][int(_438) & 3];
                int _442 = int(_438) + 1;
                uint _444 = uint(int(uint(_372 + 7848) >> uint(2)));
                _432 = exp2(log2(clamp((fma(_392, -fp_c10_1._m0[int(uint(int(_444)) >> uint(2))][int(_444) & 3], fma(_390, -fp_c10_1._m0[int(uint(_436) >> uint(2))][_436 & 3], _388 * (-fp_c10_1._m0[int(uint(int(_434)) >> uint(2))][int(_434) & 3]))) + (-_440)) * (1.0 / ((-_440) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[int(uint(_442) >> uint(2))][_442 & 3]);
            }
            uint _446 = uint(int(uint(_372 + 6408) >> uint(2)));
            int _448 = int(_446) + 1;
            float _450 = exp2(fp_c10_1._m0[int(uint(_408) >> uint(2))][_408 & 3] * log2(_424)) * _432;
            uint _452 = uint(int(uint(_372 + 6400) >> uint(2)));
            int _454 = int(_452) + 1;
            _456 = _358 + 1;
            float _458 = _450 * fp_c10_1._m0[int(uint(_448) >> uint(2))][_448 & 3];
            float _460 = _450 * clamp(_418 + (-0.0), 0.0, 1.0);
            float _462 = fma(_356, fp_c1_1._m0[1].w, exp2(_350 * log2(clamp(max(fma(_174, -_392, fma(_172, -_390, _170 * (-_388))), fp_c1_1._m0[0].x) + (-0.0), 0.0, 1.0))) * _356) + 0.20000000298023223876953125;
            float _464 = _338 + fma((_460 * fp_c10_1._m0[int(uint(int(_452)) >> uint(2))][int(_452) & 3]) * fma(_278, fp_c1_1._m0[2].x, ((_308 + fma(_308, -_422, _422)) * _428) * 0.079577468335628509521484375), _352, _354 * (_314 * ((_328 * _458) * _462)));
            float _466 = _340 + fma((_460 * fp_c10_1._m0[int(uint(_454) >> uint(2))][_454 & 3]) * fma(_282, fp_c1_1._m0[2].x, ((_310 + fma(_310, -_422, _422)) * _428) * 0.079577468335628509521484375), _352, _354 * (_314 * ((_330 * _458) * _462)));
            float _468 = _342 + fma((_460 * fp_c10_1._m0[int(uint(int(_446)) >> uint(2))][int(_446) & 3]) * fma(_284, fp_c1_1._m0[2].x, ((_312 + fma(_312, -_422, _422)) * _428) * 0.079577468335628509521484375), _352, _354 * (_314 * ((_326 * _458) * _462)));
            _336 = int(uint(_336) >> uint(8));
            _358 = _456;
            _338 = _464;
            _340 = _466;
            _342 = _468;
            _362 = _464;
            _364 = _466;
            _366 = _468;
        } while (!(_456 >= 4));
        _370 = false;
        _344 = _362;
        _346 = _364;
        _348 = _366;
        if ((_336 & 255) == 30)
        {
            float _470 = _86.y;
            float _472 = 1.0 / (fma(_248, fp_c10_1._m0[565].z, fma(_470, fp_c10_1._m0[565].y, _252 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _474 = 1.0 / fp_c10_1._m0[561].y;
            float _476 = _252 + (-fp_c10_1._m0[557].x);
            float _478 = _476 * fp_c10_1._m0[558].z;
            float _480 = (-_252) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_474, fp_c10_1._m0[557].x);
            float _482 = (-_248) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_474, fp_c10_1._m0[557].z);
            float _484 = _248 + (-fp_c10_1._m0[557].z);
            float _486 = _480 * _480;
            float _488 = _484 * fp_c10_1._m0[558].x;
            float _490 = fma(_484, _484, _476 * _476);
            float _492 = sqrt(fma(_482, _482, _486)) * (-fp_c10_1._m0[558].y);
            float _494 = ((-float(_488 < _478)) + float(_488 > _478)) * fp_c10_1._m0[561].y;
            float _496 = inversesqrt(fma(_482, _482, fma(_492, _492, _486)));
            float _498 = _480 * _496;
            float _500 = _492 * _496;
            float _502 = _482 * _496;
            float _504 = _170 + _498;
            float _506 = _172 + _500;
            float _508 = _174 + _502;
            float _510 = fma(_484, fp_c10_1._m0[558].z, _476 * fp_c10_1._m0[558].x);
            float _512 = inversesqrt(fma(_508, _508, fma(_506, _506, _504 * _504)));
            bool _514 = _510 > 0.0;
            float _516 = inversesqrt(fma(_502, _502, _498 * _498));
            float _518 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_476, fma(_494, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_484 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_494 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_476, fma(_494, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_484 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_494 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _520 = _504 * _512;
            float _522 = _506 * _512;
            float _524 = _508 * _512;
            float _526 = fma(_518, -_518, fp_c1_1._m0[1].z) * fma(_518, -_518, fp_c1_1._m0[1].z);
            if (!(fma(_484 * inversesqrt(_490), fp_c10_1._m0[558].z, (_476 * inversesqrt(_490)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z))
            {
                _526 = 1.0;
            }
            float _528 = _498 * _516;
            float _530 = _528;
            if (_514)
            {
                _530 = sqrt(_490);
            }
            float _532 = _530;
            if (!_514)
            {
                _532 = 1.0;
            }
            float _534 = fma(_180, _502, fma(_178, _500, _176 * _498));
            float _536 = max(fma(_174, _524, fma(_172, _522, _170 * _520)), fp_c1_1._m0[0].w);
            float _538 = max(fma(_180, _524, fma(_178, _522, _176 * _520)), fp_c1_1._m0[0].w) * max(fma(_180, _524, fma(_178, _522, _176 * _520)), fp_c1_1._m0[0].w);
            float _540 = clamp(fma(_510 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0) * clamp(fma(_510 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].z), 0.0, 1.0);
            float _542 = max(_534, fp_c1_1._m0[0].w);
            float _544 = exp2(_536 * fma(_536, fp_c1_1._m0[1].x, -6.9831600189208984375));
            float _546 = min(fma(_540, -_540, fp_c1_1._m0[1].z) * fma(_540, -_540, fp_c1_1._m0[1].z), _526) * (exp2(log2(clamp(fma(_532, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_502 * _516, -fp_c10_1._m0[558].z, _528 * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w));
            float _548 = (_299 * (1.0 / (_295 + fma(_295, -_542, _542)))) * ((_280 * (1.0 / max(fma(_280 * _280, _538, -_538) + 1.0, fp_c1_1._m0[0].w))) * (_280 * (1.0 / max(fma(_280 * _280, _538, -_538) + 1.0, fp_c1_1._m0[0].w))));
            float _550 = fma(_356, fp_c1_1._m0[1].w, _356 * exp2(_350 * log2(clamp(max(fma(_174, -_502, fma(_172, -_500, _170 * (-_498))), fp_c1_1._m0[0].x) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125;
            float _552 = _546 * clamp(_534 + (-0.0), 0.0, 1.0);
            float _554 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_248, fp_c10_1._m0[562].z, fma(_470, fp_c10_1._m0[562].y, _252 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _472, 0.5, 0.5), (-fma((fma(_248, fp_c10_1._m0[563].z, fma(_470, fp_c10_1._m0[563].y, _252 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _472, 0.5, 0.5)) + 1.0)).z > fma((fma(_248, fp_c10_1._m0[564].z, fma(_470, fp_c10_1._m0[564].y, _252 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _472, 0.5, 0.5)) || (_510 <= 0.0));
            _344 = fma(fma(_352, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _552) * fma(_278, fp_c1_1._m0[2].x, (_548 * (_308 + fma(_308, -_544, _544))) * 0.079577468335628509521484375), _354 * (_314 * (_550 * (_328 * _546)))), _554, _362);
            _346 = fma(fma(_352, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _552) * fma(_282, fp_c1_1._m0[2].x, (_548 * (_310 + fma(_310, -_544, _544))) * 0.079577468335628509521484375), _354 * (_314 * (_550 * (_330 * _546)))), _554, _364);
            _348 = fma(fma(_352, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _552) * fma(_284, fp_c1_1._m0[2].x, (_548 * (_312 + fma(_312, -_544, _544))) * 0.079577468335628509521484375), _354 * (_314 * (_550 * (_326 * _546)))), _554, _366);
        }
    }
    float _556 = _86.y;
    float _558 = _252 + (-fp_c3_1._m0[11].w);
    float _560 = _248 + (-fp_c3_1._m0[13].w);
    float _562 = clamp((-_314) + 1.0, 0.0, 1.0);
    float _564 = clamp(fma(_218, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _566 = _556 + (-fp_c3_1._m0[12].w);
    float _568 = fma(_560, _560, fma(_566, _566, _558 * _558));
    float _570 = (fp_c6_1._m0[18].x + (-1.0)) * (fp_c6_1._m0[18].x + (-1.0));
    float _572 = fma(_570, fp_c1_1._m0[1].w, _570 * exp2((1.0 / fp_c6_1._m0[18].x) * log2(clamp(max(fma(_174, fp_c5_1._m0[23].z, fma(_172, fp_c5_1._m0[23].y, _170 * fp_c5_1._m0[23].x)), fp_c1_1._m0[0].x) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125;
    float _574 = clamp(fma(_334 * _332, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _576 = exp2(log2(clamp(sqrt(_568) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_560 * inversesqrt(_568), fp_c5_1._m0[23].z, fma(_566 * inversesqrt(_568), fp_c5_1._m0[23].y, (_558 * inversesqrt(_568)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _578 = clamp(fma(fma(_248, fp_c5_1._m0[14].z, fma(_556, fp_c5_1._m0[14].y, _252 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _580 = fma((_204.x * (_200.x * fp_c6_1._m0[12].x)) * fp_c6_1._m0[85].x, fp_c6_1._m0[11].x, fma(_334, _344, fma(_332, _562 * (fma(_316 * (_308 + fma(_308, -_306, _306)), fp_c1_1._m0[1].y, _278 * 0.3183098733425140380859375) * (_324 * fp_c5_1._m0[5].x)), _564 * (_314 * (_572 * (_328 * fp_c5_1._m0[5].w))))));
    float _582 = fma((_204.y * (_200.y * fp_c6_1._m0[12].y)) * fp_c6_1._m0[85].x, fp_c6_1._m0[11].x, fma(_334, _346, fma(_332, _562 * (fma(_316 * (_310 + fma(_310, -_306, _306)), fp_c1_1._m0[1].y, _282 * 0.3183098733425140380859375) * (_324 * fp_c5_1._m0[5].y)), _564 * (_314 * (_572 * (_330 * fp_c5_1._m0[5].w))))));
    float _584 = fma((_204.z * (_200.z * fp_c6_1._m0[12].z)) * fp_c6_1._m0[85].x, fp_c6_1._m0[11].x, fma(_334, _348, fma(_332, _562 * (fma(_316 * (_312 + fma(_312, -_306, _306)), fp_c1_1._m0[1].y, _284 * 0.3183098733425140380859375) * (_324 * fp_c5_1._m0[5].z)), _564 * (_314 * (_572 * (_326 * fp_c5_1._m0[5].w))))));
    float _586 = fma((-_580) + fp_c5_1._m0[13].x, _578, _580);
    float _588 = fma((-_582) + fp_c5_1._m0[13].y, _578, _582);
    float _590 = fma((-_584) + fp_c5_1._m0[13].z, _578, _584);
    float _592 = clamp((-exp2((clamp(fma(sqrt(_568), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _89.x = fma((-_586) + fma(fma((_576 * fp_c7_1._m0[55].x) * _574, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _592, _586);
    _89.y = fma((-_588) + fma(fma((_576 * fp_c7_1._m0[55].y) * _574, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _592, _588);
    _89.z = fma((-_590) + fma(fma((_576 * fp_c7_1._m0[55].z) * _574, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _592, _590);
    _89.w = 1.0;
}


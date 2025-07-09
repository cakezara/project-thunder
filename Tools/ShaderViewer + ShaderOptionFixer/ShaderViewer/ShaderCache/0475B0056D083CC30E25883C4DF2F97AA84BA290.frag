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

layout(binding = 0) uniform sampler2D fp_tex_tcb_E;
layout(binding = 1) uniform sampler2D fp_tex_tcb_18;
layout(binding = 2) uniform sampler2D fp_tex_tcb_28;
layout(binding = 3) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 4) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 5) uniform sampler2D fp_tex_tcb_38;
layout(binding = 6) uniform sampler2D fp_tex_tcb_44;

layout(location = 6) in vec4 _58;
layout(location = 5) in vec4 _60;
layout(location = 0) in vec4 _62;
layout(location = 1) in vec4 _64;
layout(location = 2) in vec4 _66;
layout(location = 4) in vec4 _68;
layout(location = 3) in vec4 _70;
layout(location = 0) out vec4 _73;
uint _6[12];

void main()
{
    bool _280 = false;
    float _80 = 1.0 / (_58.z * gl_FragCoord.w);
    float _82 = _62.x;
    float _84 = _62.y;
    float _86 = 1.0 / _60.w;
    vec2 _90 = texture(fp_tex_tcb_E, vec2(_82, _84)).xy;
    float _92 = _90.x;
    float _94 = _90.y;
    vec2 _96 = texture(fp_tex_tcb_2A, vec2(fma(_60.x * _86, 0.5, 0.5), fma(_60.y * _86, -0.5, 0.5))).xy;
    float _98 = _64.x;
    float _100 = _64.y;
    float _102 = _64.z;
    float _104 = _66.y;
    float _106 = _66.z;
    float _108 = _66.x;
    float _110 = _66.w;
    float _112 = _68.x;
    float _114 = _68.y;
    float _116 = _68.z;
    float _118 = inversesqrt(fma(_102, _102, fma(_100, _100, _98 * _98)));
    float _120 = _102 * _118;
    float _122 = _98 * _118;
    float _124 = _100 * _118;
    float _126 = sqrt(clamp((-fma(_92, _92, _94 * _94)) + 1.0, 0.0, 1.0));
    float _128 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _130 = fma(_122, _126, fma(_92, _108, _94 * (fma(_124, _106, -(_120 * _104)) * _110)));
    float _132 = fma(_124, _126, fma(_92, _104, _94 * (fma(_120, _108, -(_122 * _106)) * _110)));
    float _134 = fma(_120, _126, fma(_92, _106, _94 * (fma(_122, _104, -(_124 * _108)) * _110)));
    float _136 = inversesqrt(fma(_116, _116, fma(_114, _114, _112 * _112)));
    float _138 = inversesqrt(fma(_134, _134, fma(_132, _132, _130 * _130)));
    float _140 = _112 * (-_136);
    float _142 = _114 * (-_136);
    float _144 = _116 * (-_136);
    float _146 = _130 * _138;
    float _148 = _132 * _138;
    float _150 = _134 * _138;
    float _152 = fma(_150, _144, fma(_148, _142, _146 * _140));
    float _154 = fma(_146 * (-_152), -2.0, -_140);
    float _156 = fma(_148 * (-_152), -2.0, -_142);
    float _158 = fma(_150 * (-_152), -2.0, -_144);
    float _160 = max(_152, fp_c1_1._m0[0].y);
    float _162 = 1.0 / max(abs(_158), max(abs(_154), abs(_156)));
    vec2 _164 = texture(fp_tex_tcb_38, vec2(_160, (-_128) + (-0.0))).xy;
    float _166 = _164.x;
    float _168 = _164.y;
    vec3 _172 = texture(fp_tex_tcb_36, vec4(_154 * _162, _156 * _162, _158 * _162, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_128 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _174 = _70.z;
    float _176 = _70.x;
    float _178 = _140 + (-fp_c5_1._m0[23].x);
    float _180 = _142 + (-fp_c5_1._m0[23].y);
    float _182 = _144 + (-fp_c5_1._m0[23].z);
    float _184 = fma(_128, 0.5, 0.5);
    float _186 = _128 * _128;
    float _188 = inversesqrt(fma(_182, _182, fma(_180, _180, _178 * _178)));
    float _190 = _178 * _188;
    float _192 = _180 * _188;
    float _194 = _182 * _188;
    int _197 = max(0, min(int(trunc((_174 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _199 = max(fma(_144, _194, fma(_142, _192, _140 * _190)), fp_c1_1._m0[0].y);
    float _201 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x);
    float _203 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _205 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _207 = _146 * _148;
    float _209 = _148 * _150;
    float _211 = _150 * _150;
    float _213 = fma(_148, -fp_c5_1._m0[23].y, _146 * (-fp_c5_1._m0[23].x));
    float _215 = max(fma(_150, _194, fma(_148, _192, _146 * _190)), fp_c1_1._m0[0].y) * max(fma(_150, _194, fma(_148, _192, _146 * _190)), fp_c1_1._m0[0].y);
    float _217 = _146 * _150;
    float _219 = (_184 * 0.5) * _184;
    float _221 = max(fma(_150, -fp_c5_1._m0[23].z, _213), fp_c1_1._m0[0].y);
    float _223 = clamp(fma(_150, -fp_c5_1._m0[23].z, _213), 0.0, 1.0);
    uint _226 = uint(int(uint((((int(uint(_197) >> uint(16)) * 20) << 16) + (((_197 & 65535) * 20) + max(0, min(int(trunc((_176 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _228 = fp_c10_1._m0[int(uint(int(_226)) >> uint(2))][int(_226) & 3];
    float _230 = 1.0 / (_219 + fma(_160, -_219, _160));
    float _232 = exp2(_199 * fma(_199, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _234 = fma(_146, _146, -(_148 * _148));
    float _236 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].y, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _238 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].x, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _240 = fma((-0.039999999105930328369140625) + fp_c6_1._m0[7].z, fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _242 = (_230 * (1.0 / (_219 + fma(_219, -_221, _221)))) * ((_186 * (1.0 / max(fma(_215, _186 * _186, -_215) + 1.0, fp_c1_1._m0[0].y))) * (_186 * (1.0 / max(fma(_215, _186 * _186, -_215) + 1.0, fp_c1_1._m0[0].y))));
    float _244 = clamp(texture(fp_tex_tcb_18, vec2(_82, _84)).x + (-0.0), 0.0, 1.0);
    float _246 = fma(_172.x, fma(_238, _166, _168), max(0.0, fma(_234, fp_c5_1._m0[31].x, (fma(_150, fp_c5_1._m0[25].z, fma(_148, fp_c5_1._m0[25].y, _146 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_217, fp_c5_1._m0[28].w, fma(_211, fp_c5_1._m0[28].z, fma(_209, fp_c5_1._m0[28].y, _207 * fp_c5_1._m0[28].x))))) * fma(_201, -_238, _201));
    float _248 = fma(_172.y, fma(_236, _166, _168), max(0.0, fma(_234, fp_c5_1._m0[31].y, (fma(_150, fp_c5_1._m0[26].z, fma(_148, fp_c5_1._m0[26].y, _146 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_217, fp_c5_1._m0[29].w, fma(_211, fp_c5_1._m0[29].z, fma(_209, fp_c5_1._m0[29].y, _207 * fp_c5_1._m0[29].x))))) * fma(_203, -_236, _203));
    float _250 = fma(_172.z, fma(_240, _166, _168), max(0.0, fma(_234, fp_c5_1._m0[31].z, (fma(_150, fp_c5_1._m0[27].z, fma(_148, fp_c5_1._m0[27].y, _146 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_217, fp_c5_1._m0[30].w, fma(_211, fp_c5_1._m0[30].z, fma(_209, fp_c5_1._m0[30].y, _207 * fp_c5_1._m0[30].x))))) * fma(_205, -_240, _205));
    float _252 = clamp((-fma(max((-_96.x) + 1.0, (-_96.y) + 1.0), clamp(_70.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_58.x * gl_FragCoord.w) * _80, (_58.y * gl_FragCoord.w) * _80)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _254 = floatBitsToInt(_228);
    float _256 = _248;
    float _258 = _250;
    float _260 = _246;
    float _262 = _250;
    float _264 = _246;
    float _266 = _248;
    if (floatBitsToInt(_228) != (-1))
    {
        int _268 = 0;
        float _272;
        float _274;
        float _276;
        int _362;
        do
        {
            int _270 = _254 & 255;
            _272 = _260;
            _274 = _256;
            _276 = _258;
            _280 = uint(_270) >= 30u;
            if (_280)
            {
                break;
            }
            int _282 = _270 << 4;
            uint _284 = uint(int(uint(_282 + 7360) >> uint(2)));
            int _286 = int(_284) + 1;
            uint _288 = uint(int(uint(_282 + 7368) >> uint(2)));
            float _290 = (-_176) + fp_c10_1._m0[int(uint(int(_284)) >> uint(2))][int(_284) & 3];
            float _292 = fp_c10_1._m0[int(uint(_286) >> uint(2))][_286 & 3] + (-_70.y);
            float _294 = (-_174) + fp_c10_1._m0[int(uint(int(_288)) >> uint(2))][int(_288) & 3];
            float _296 = fma(_294, _294, fma(_292, _292, _290 * _290));
            float _298 = _290 * inversesqrt(_296);
            float _300 = _292 * inversesqrt(_296);
            float _302 = _294 * inversesqrt(_296);
            float _304 = _140 + _298;
            float _306 = _142 + _300;
            float _308 = _144 + _302;
            uint _310 = uint(int(uint(_282 + 6880) >> uint(2)));
            int _312 = int(_310) + 1;
            float _314 = inversesqrt(fma(_308, _308, fma(_306, _306, _304 * _304)));
            float _316 = _304 * _314;
            float _318 = _306 * _314;
            float _320 = _308 * _314;
            uint _322 = uint(int(uint(_282 + 8320) >> uint(2)));
            float _324 = max(fma(_144, _320, fma(_142, _318, _140 * _316)), fp_c1_1._m0[0].y);
            float _326 = fma(_150, _302, fma(_148, _300, _146 * _298));
            float _328 = max(fma(_150, _320, fma(_148, _318, _146 * _316)), fp_c1_1._m0[0].y) * max(fma(_150, _320, fma(_148, _318, _146 * _316)), fp_c1_1._m0[0].y);
            float _330 = max(_326, fp_c1_1._m0[0].y);
            float _332 = fp_c10_1._m0[int(uint(_312) >> uint(2))][_312 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_310)) >> uint(2))][int(_310) & 3], -sqrt(_296), fp_c1_1._m0[1].x), 0.0, 1.0));
            uint _334 = uint(int(uint(_282 + 6400) >> uint(2)));
            int _336 = int(_334) + 1;
            uint _338 = uint(int(uint(_282 + 6408) >> uint(2)));
            float _340 = exp2(_324 * fma(_324, fp_c1_1._m0[0].z, -6.9831600189208984375));
            bool _342 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_322)) >> uint(2))][int(_322) & 3]) != 0;
            float _344 = (_230 * (1.0 / (_219 + fma(_219, -_330, _330)))) * ((_186 * (1.0 / max(fma(_186 * _186, _328, -_328) + 1.0, fp_c1_1._m0[0].y))) * (_186 * (1.0 / max(fma(_186 * _186, _328, -_328) + 1.0, fp_c1_1._m0[0].y))));
            float _346 = _332;
            if (!_342)
            {
                _346 = 1.0;
            }
            float _348 = _346;
            if (_342)
            {
                uint _350 = uint(int(uint(_282 + 7840) >> uint(2)));
                int _352 = int(_350) + 1;
                uint _354 = uint(int(uint(_282 + 7848) >> uint(2)));
                uint _356 = uint(int(uint(_282 + 6888) >> uint(2)));
                float _358 = fp_c10_1._m0[int(uint(int(_356)) >> uint(2))][int(_356) & 3];
                int _360 = int(_356) + 1;
                _348 = exp2(fp_c10_1._m0[int(uint(_360) >> uint(2))][_360 & 3] * log2(clamp(((-_358) + fma(_302, -fp_c10_1._m0[int(uint(int(_354)) >> uint(2))][int(_354) & 3], fma(_300, -fp_c10_1._m0[int(uint(_352) >> uint(2))][_352 & 3], _298 * (-fp_c10_1._m0[int(uint(int(_350)) >> uint(2))][int(_350) & 3])))) * (1.0 / ((-_358) + 1.0)), 0.0, 1.0)));
            }
            _362 = _268 + 1;
            float _364 = (exp2(_332) * _348) * clamp(_326 + (-0.0), 0.0, 1.0);
            float _366 = fma(fp_c10_1._m0[int(uint(_336) >> uint(2))][_336 & 3] * _364, fma(_203, fp_c1_1._m0[1].y, ((_236 + fma(_236, -_340, _340)) * _344) * 0.079577468335628509521484375), _256);
            float _368 = fma(fp_c10_1._m0[int(uint(int(_338)) >> uint(2))][int(_338) & 3] * _364, fma(_205, fp_c1_1._m0[1].y, ((_240 + fma(_240, -_340, _340)) * _344) * 0.079577468335628509521484375), _258);
            float _370 = fma(fp_c10_1._m0[int(uint(int(_334)) >> uint(2))][int(_334) & 3] * _364, fma(_201, fp_c1_1._m0[1].y, ((_238 + fma(_238, -_340, _340)) * _344) * 0.079577468335628509521484375), _260);
            _254 = int(uint(_254) >> uint(8));
            _268 = _362;
            _256 = _366;
            _258 = _368;
            _260 = _370;
            _272 = _370;
            _274 = _366;
            _276 = _368;
        } while (!(_362 >= 4));
        _280 = false;
        _262 = _276;
        _264 = _272;
        _266 = _274;
        if ((_254 & 255) == 30)
        {
            float _372 = _70.y;
            float _374 = 1.0 / (fma(_174, fp_c10_1._m0[565].z, fma(_372, fp_c10_1._m0[565].y, _176 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _376 = 1.0 / fp_c10_1._m0[561].y;
            float _378 = _176 + (-fp_c10_1._m0[557].x);
            float _380 = _378 * fp_c10_1._m0[558].z;
            float _382 = (-_176) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_376, fp_c10_1._m0[557].x);
            float _384 = (-_174) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_376, fp_c10_1._m0[557].z);
            float _386 = _382 * _382;
            float _388 = sqrt(fma(_384, _384, _386)) * (-fp_c10_1._m0[558].y);
            float _390 = inversesqrt(fma(_384, _384, fma(_388, _388, _386)));
            float _392 = _174 + (-fp_c10_1._m0[557].z);
            float _394 = _392 * fp_c10_1._m0[558].x;
            float _396 = _382 * _390;
            float _398 = _388 * _390;
            float _400 = _384 * _390;
            float _402 = _140 + _396;
            float _404 = _142 + _398;
            float _406 = _144 + _400;
            float _408 = ((-float(_394 < _380)) + float(_394 > _380)) * fp_c10_1._m0[561].y;
            float _410 = fma(_150, _400, fma(_148, _398, _146 * _396));
            float _412 = inversesqrt(fma(_406, _406, fma(_404, _404, _402 * _402)));
            float _414 = _402 * _412;
            float _416 = _404 * _412;
            float _418 = _406 * _412;
            float _420 = fma(_392, _392, _378 * _378);
            float _422 = max(fma(_144, _418, fma(_142, _416, _140 * _414)), fp_c1_1._m0[0].y);
            float _424 = max(fma(_150, _418, fma(_148, _416, _146 * _414)), fp_c1_1._m0[0].y) * max(fma(_150, _418, fma(_148, _416, _146 * _414)), fp_c1_1._m0[0].y);
            float _426 = fma(_392, fp_c10_1._m0[558].z, _378 * fp_c10_1._m0[558].x);
            bool _428 = _426 > 0.0;
            float _430 = inversesqrt(fma(_400, _400, _396 * _396));
            float _432 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_378, fma(_408, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_392 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_408 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_378, fma(_408, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_392 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_408 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _434 = _396;
            if (_428)
            {
                _434 = sqrt(_420);
            }
            float _436 = _434;
            if (!_428)
            {
                _436 = 1.0;
            }
            bool _438 = fma(_392 * inversesqrt(_420), fp_c10_1._m0[558].z, (_378 * inversesqrt(_420)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _440 = exp2(_422 * fma(_422, fp_c1_1._m0[0].z, -6.9831600189208984375));
            float _442 = clamp(fma(_426 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0) * clamp(fma(_426 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].x), 0.0, 1.0);
            float _444 = max(_410, fp_c1_1._m0[0].y);
            float _446 = log2(clamp((fma(_400 * _430, -fp_c10_1._m0[558].z, (_396 * _430) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w;
            float _448 = _446;
            if (_438)
            {
                _448 = fma(_432, -_432, fp_c1_1._m0[1].x) * fma(_432, -_432, fp_c1_1._m0[1].x);
            }
            float _450 = _448;
            if (!_438)
            {
                _450 = 1.0;
            }
            float _452 = (_230 * (1.0 / (_219 + fma(_219, -_444, _444)))) * ((_186 * (1.0 / max(fma(_186 * _186, _424, -_424) + 1.0, fp_c1_1._m0[0].y))) * (_186 * (1.0 / max(fma(_186 * _186, _424, -_424) + 1.0, fp_c1_1._m0[0].y))));
            float _454 = (min(fma(_442, -_442, fp_c1_1._m0[1].x) * fma(_442, -_442, fp_c1_1._m0[1].x), _450) * (exp2(log2(clamp(fma(_436, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(_446))) * clamp(_410 + (-0.0), 0.0, 1.0);
            float _456 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_174, fp_c10_1._m0[562].z, fma(_372, fp_c10_1._m0[562].y, _176 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _374, 0.5, 0.5), (-fma((fma(_174, fp_c10_1._m0[563].z, fma(_372, fp_c10_1._m0[563].y, _176 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _374, 0.5, 0.5)) + 1.0)).z > fma((fma(_174, fp_c10_1._m0[564].z, fma(_372, fp_c10_1._m0[564].y, _176 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _374, 0.5, 0.5)) || (_426 <= 0.0));
            _262 = fma(fma(_205, fp_c1_1._m0[1].y, ((_240 + fma(_240, -_440, _440)) * _452) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _454), _456, _276);
            _264 = fma(fma(_201, fp_c1_1._m0[1].y, ((_238 + fma(_238, -_440, _440)) * _452) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _454), _456, _272);
            _266 = fma(fma(_203, fp_c1_1._m0[1].y, ((_236 + fma(_236, -_440, _440)) * _452) * 0.079577468335628509521484375) * ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _454), _456, _274);
        }
    }
    float _458 = _176 + (-fp_c3_1._m0[11].w);
    float _460 = _70.y;
    float _462 = _174 + (-fp_c3_1._m0[13].w);
    float _464 = fma(_244, _262, _252 * (fma(_242 * (_240 + fma(_240, -_232, _232)), fp_c1_1._m0[0].w, _205 * 0.3183098733425140380859375) * (_223 * fp_c5_1._m0[5].z)));
    float _466 = _460 + (-fp_c3_1._m0[12].w);
    float _468 = fma(_462, _462, fma(_466, _466, _458 * _458));
    float _470 = fma(_244, _264, _252 * (fma(_242 * (_238 + fma(_238, -_232, _232)), fp_c1_1._m0[0].w, _201 * 0.3183098733425140380859375) * (_223 * fp_c5_1._m0[5].x)));
    float _472 = fma(_244, _266, _252 * (fma(_242 * (_236 + fma(_236, -_232, _232)), fp_c1_1._m0[0].w, _203 * 0.3183098733425140380859375) * (_223 * fp_c5_1._m0[5].y)));
    float _474 = exp2(log2(clamp(sqrt(_468) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_462 * inversesqrt(_468), fp_c5_1._m0[23].z, fma(_466 * inversesqrt(_468), fp_c5_1._m0[23].y, (_458 * inversesqrt(_468)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _476 = clamp(fma(fma(_174, fp_c5_1._m0[14].z, fma(_460, fp_c5_1._m0[14].y, _176 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _478 = clamp(fma(_244 * _252, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _480 = fma((-_470) + fp_c5_1._m0[13].x, _476, _470);
    float _482 = fma((-_472) + fp_c5_1._m0[13].y, _476, _472);
    float _484 = fma((-_464) + fp_c5_1._m0[13].z, _476, _464);
    float _486 = clamp((-exp2((clamp(fma(sqrt(_468), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _73.x = fma((-_480) + fma(fma((_474 * fp_c7_1._m0[55].x) * _478, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _486, _480);
    _73.y = fma((-_482) + fma(fma((_474 * fp_c7_1._m0[55].y) * _478, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _486, _482);
    _73.z = fma((-_484) + fma(fma((_474 * fp_c7_1._m0[55].z) * _478, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _486, _484);
    _73.w = 1.0;
}


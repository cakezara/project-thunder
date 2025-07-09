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

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_8;
layout(binding = 1) uniform sampler2D fp_tex_tcb_A;
layout(binding = 2) uniform sampler2D fp_tex_tcb_E;
layout(binding = 3) uniform sampler2D fp_tex_tcb_10;
layout(binding = 4) uniform sampler2D fp_tex_tcb_16;
layout(binding = 5) uniform sampler2D fp_tex_tcb_18;
layout(binding = 6) uniform sampler2D fp_tex_tcb_1A;
layout(binding = 7) uniform sampler2D fp_tex_tcb_28;
layout(binding = 8) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 9) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 10) uniform sampler2D fp_tex_tcb_38;
layout(binding = 11) uniform sampler2D fp_tex_tcb_44;

layout(location = 0) in vec4 _68;
layout(location = 1) in vec4 _70;
layout(location = 2) in vec4 _72;
layout(location = 5) in vec4 _74;
layout(location = 4) in vec4 _76;
layout(location = 0) out vec4 _79;
layout(location = 6) in vec4 _81;
layout(location = 3) in vec4 _83;
uint _6[12];

void main()
{
    bool _364 = false;
    float _90 = _68.x;
    float _92 = _68.y;
    float _94 = texture(fp_tex_tcb_8, vec2(_90, _92)).x;
    bool _98 = _94 <= 0.0;
    if (_98)
    {
        discard;
    }
    vec2 _102 = texture(fp_tex_tcb_E, vec2(_90, _92)).xy;
    float _104 = _102.x;
    float _106 = _102.y;
    vec3 _110 = texture(fp_tex_tcb_A, vec2(_90, _92)).xyz;
    float _112 = _110.x;
    float _114 = _110.y;
    float _116 = _110.z;
    float _118 = texture(fp_tex_tcb_1A, vec2(_90, _92)).x;
    vec3 _120 = texture(fp_tex_tcb_16, vec2(_90, _92)).xyz;
    float _122 = _70.x;
    float _124 = _70.y;
    float _126 = _70.z;
    float _128 = _72.x;
    float _130 = _72.y;
    float _132 = _72.w;
    float _134 = _72.z;
    float _136 = inversesqrt(fma(_126, _126, fma(_124, _124, _122 * _122)));
    float _138 = _74.w;
    float _140 = _124 * _136;
    float _142 = _122 * _136;
    float _144 = _126 * _136;
    float _146 = sqrt(clamp((-fma(_104, _104, _106 * _106)) + 1.0, 0.0, 1.0));
    float _148 = _76.x;
    float _150 = 1.0 / _138;
    float _152 = fma(_142, _146, fma(_104, _128, _106 * (fma(_140, _134, -(_144 * _130)) * _132)));
    float _154 = fma(_140, _146, fma(_104, _130, _106 * (fma(_144, _128, -(_142 * _134)) * _132)));
    float _156 = fma(_144, _146, fma(_104, _134, _106 * (fma(_142, _130, -(_140 * _128)) * _132)));
    int _159 = floatBitsToInt(_138);
    int _161 = floatBitsToInt(_156);
    int _163 = floatBitsToInt(_152);
    if (_98)
    {
        _159 = 0;
    }
    float _165 = fma(_154, _154, _152 * _152);
    int _167 = floatBitsToInt(_165);
    if (_98)
    {
        _167 = 0;
    }
    float _169 = inversesqrt(fma(_156, _156, _165));
    float _171 = _152 * _169;
    float _173 = _154 * _169;
    float _175 = _156 * _169;
    if (_98)
    {
        _161 = 0;
    }
    if (_98)
    {
        _163 = 0;
    }
    if (_98)
    {
        _79.x = intBitsToFloat(_167);
        _79.y = intBitsToFloat(_161);
        _79.z = intBitsToFloat(_163);
        _79.w = intBitsToFloat(_159);
        return;
    }
    float _177 = _76.y;
    float _179 = max(texture(fp_tex_tcb_10, vec2(_90, _92)).x, fp_c1_1._m0[0].x);
    float _181 = _76.z;
    float _183 = 1.0 / (_81.z * gl_FragCoord.w);
    float _185 = inversesqrt(fma(_181, _181, fma(_177, _177, _148 * _148)));
    float _187 = _148 * (-_185);
    float _189 = _177 * (-_185);
    float _191 = _181 * (-_185);
    float _193 = fma(_175, _191, fma(_173, _189, _171 * _187));
    float _195 = max(_193, fp_c1_1._m0[0].y);
    float _197 = fma(_171 * (-_193), -2.0, -_187);
    float _199 = fma(_173 * (-_193), -2.0, -_189);
    float _201 = fma(_175 * (-_193), -2.0, -_191);
    float _203 = 1.0 / max(abs(_201), max(abs(_197), abs(_199)));
    vec2 _205 = texture(fp_tex_tcb_2A, vec2(fma(_74.x * _150, 0.5, 0.5), fma(_74.y * _150, -0.5, 0.5))).xy;
    vec2 _207 = texture(fp_tex_tcb_38, vec2(_195, (-_179) + (-0.0))).xy;
    float _209 = _207.x;
    float _211 = _207.y;
    vec3 _213 = texture(fp_tex_tcb_36, vec4(_197 * _203, _199 * _203, _201 * _203, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_179 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _215 = _83.x;
    float _217 = _83.z;
    float _219 = _187 + (-fp_c5_1._m0[23].x);
    float _221 = _189 + (-fp_c5_1._m0[23].y);
    float _223 = clamp(texture(fp_tex_tcb_18, vec2(_90, _92)).x + (-0.0), 0.0, 1.0);
    float _225 = _112 * (_120.x * fp_c6_1._m0[19].x);
    float _227 = fma(_112, -fp_c6_1._m0[9].x, _112);
    float _229 = _191 + (-fp_c5_1._m0[23].z);
    float _231 = _114 * (_120.y * fp_c6_1._m0[19].y);
    float _233 = fma(_114, -fp_c6_1._m0[9].x, _114);
    float _235 = fma(_112 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _237 = inversesqrt(fma(_229, _229, fma(_221, _221, _219 * _219)));
    float _239 = fma(_114 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _241 = fma(_116 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _243 = _219 * _237;
    float _245 = fma(_118, fma(fp_c6_1._m0[41].z, fp_c6_1._m0[42].y, -_239), _239);
    float _247 = fma(_118, fma(fp_c6_1._m0[41].z, fp_c6_1._m0[42].x, -_235), _235);
    float _249 = _221 * _237;
    int _251 = max(0, min(int(trunc((_217 + (-fp_c10_1._m0[550].z)) * fp_c10_1._m0[551].z)), 19));
    float _253 = fma(_118, fma(fp_c6_1._m0[41].z, fp_c6_1._m0[42].z, -_241), _241);
    float _255 = _229 * _237;
    float _257 = fma(_173, -fp_c5_1._m0[23].y, _171 * (-fp_c5_1._m0[23].x));
    float _259 = _179 * _179;
    float _261 = max(fma(_191, _255, fma(_189, _249, _187 * _243)), fp_c1_1._m0[0].y);
    float _263 = fma(_179, 0.5, 0.5);
    float _265 = max(fma(_175, -fp_c5_1._m0[23].z, _257), fp_c1_1._m0[0].y);
    float _267 = _259 * _259;
    float _269 = max(fma(_175, _255, fma(_173, _249, _171 * _243)), fp_c1_1._m0[0].y) * max(fma(_175, _255, fma(_173, _249, _171 * _243)), fp_c1_1._m0[0].y);
    float _271 = _116 * (_120.z * fp_c6_1._m0[19].z);
    float _273 = fma(_116, -fp_c6_1._m0[9].x, _116);
    float _275 = (_263 * 0.5) * _263;
    float _277 = clamp(_118 * (exp2(log2(clamp(max(_193, fp_c1_1._m0[0].z) + (-0.0), 0.0, 1.0)) * fp_c6_1._m0[43].x) * fp_c6_1._m0[43].y), 0.0, 1.0);
    float _279 = 1.0 / (_275 + fma(_195, -_275, _195));
    float _281 = exp2(_261 * fma(_261, fp_c1_1._m0[0].w, -6.9831600189208984375));
    float _283 = exp2(log2(clamp((-_193) + 1.0, 0.0, 1.0)) * fp_c6_1._m0[45].y) * fp_c6_1._m0[45].x;
    float _285 = fma(_277, -fp_c6_1._m0[18].x, fp_c6_1._m0[18].x);
    uint _288 = uint(int(uint((((int(uint(_251) >> uint(16)) * 20) << 16) + (((_251 & 65535) * 20) + max(0, min(int(trunc((_215 + (-fp_c10_1._m0[550].x)) * fp_c10_1._m0[551].x)), 19)))) << 4) >> uint(2)));
    float _290 = fp_c10_1._m0[int(uint(int(_288)) >> uint(2))][int(_288) & 3];
    float _292 = fma(_277, _142 + (-_171), _171);
    float _294 = fma(_118, _283 * fp_c6_1._m0[46].x, fma(_277, (-_227) + fp_c6_1._m0[44].x, _227));
    float _296 = fma(_277, _140 + (-_173), _173);
    float _298 = fma(_277, _144 + (-_175), _175);
    float _300 = fma(_118, _283 * fp_c6_1._m0[46].y, fma(_277, (-_233) + fp_c6_1._m0[44].y, _233));
    float _302 = fma(_118, _283 * fp_c6_1._m0[46].z, fma(_277, (-_273) + fp_c6_1._m0[44].z, _273));
    float _304 = _292 * _296;
    float _306 = (_279 * (1.0 / (_275 + fma(_275, -_265, _265)))) * ((_259 * (1.0 / max(fma(_269, _267, -_269) + 1.0, fp_c1_1._m0[0].y))) * (_259 * (1.0 / max(fma(_269, _267, -_269) + 1.0, fp_c1_1._m0[0].y))));
    float _308 = _296 * _298;
    float _310 = _298 * _298;
    float _312 = fma(_292, _292, -(_296 * _296));
    float _314 = _292 * _298;
    float _316 = clamp(fma(_175, -fp_c5_1._m0[23].z, _257), 0.0, 1.0);
    float _318 = clamp(_83.w + fp_c7_1._m0[36].z, 0.0, 1.0);
    float _320 = (-_205.y) + 1.0;
    float _322 = fma(fma(_245, _209, _211), _213.y, max(0.0, fma(_312, fp_c5_1._m0[31].y, (fma(_298, fp_c5_1._m0[26].z, fma(_296, fp_c5_1._m0[26].y, _292 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_314, fp_c5_1._m0[29].w, fma(_310, fp_c5_1._m0[29].z, fma(_308, fp_c5_1._m0[29].y, _304 * fp_c5_1._m0[29].x))))) * fma(_300, -_245, _300));
    float _324 = _320 * _318;
    float _326 = fma(fma(_253, _209, _211), _213.z, max(0.0, fma(_312, fp_c5_1._m0[31].z, (fma(_298, fp_c5_1._m0[27].z, fma(_296, fp_c5_1._m0[27].y, _292 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_314, fp_c5_1._m0[30].w, fma(_310, fp_c5_1._m0[30].z, fma(_308, fp_c5_1._m0[30].y, _304 * fp_c5_1._m0[30].x))))) * fma(_302, -_253, _302));
    float _328 = fma(fma(_247, _209, _211), _213.x, max(0.0, fma(_312, fp_c5_1._m0[31].x, (fma(_298, fp_c5_1._m0[25].z, fma(_296, fp_c5_1._m0[25].y, _292 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_314, fp_c5_1._m0[28].w, fma(_310, fp_c5_1._m0[28].z, fma(_308, fp_c5_1._m0[28].y, _304 * fp_c5_1._m0[28].x))))) * fma(_294, -_247, _294));
    float _330 = clamp((-fma(max((-_205.x) + 1.0, _320), _318, fma(texture(fp_tex_tcb_28, vec2((_81.x * gl_FragCoord.w) * _183, (_81.y * gl_FragCoord.w) * _183)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    int _332 = floatBitsToInt(_290);
    float _334 = _328;
    float _336 = _322;
    float _338 = _326;
    float _340 = _328;
    float _342 = _322;
    float _344 = _326;
    if (floatBitsToInt(_290) != (-1))
    {
        float _346 = 1.0 / fp_c6_1._m0[18].y;
        float _348 = clamp((-_285) + 1.0, 0.0, 1.0);
        float _350 = clamp(fma(_324, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
        float _352 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
        int _354 = 0;
        float _358;
        float _360;
        float _362;
        int _450;
        do
        {
            int _356 = _332 & 255;
            _358 = _334;
            _360 = _336;
            _362 = _338;
            _364 = uint(_356) >= 30u;
            if (_364)
            {
                break;
            }
            int _366 = _356 << 4;
            uint _368 = uint(int(uint(_366 + 7360) >> uint(2)));
            int _370 = int(_368) + 1;
            uint _372 = uint(int(uint(_366 + 7368) >> uint(2)));
            float _374 = (-_215) + fp_c10_1._m0[int(uint(int(_368)) >> uint(2))][int(_368) & 3];
            float _376 = fp_c10_1._m0[int(uint(_370) >> uint(2))][_370 & 3] + (-_83.y);
            float _378 = (-_217) + fp_c10_1._m0[int(uint(int(_372)) >> uint(2))][int(_372) & 3];
            float _380 = fma(_378, _378, fma(_376, _376, _374 * _374));
            float _382 = _374 * inversesqrt(_380);
            float _384 = _376 * inversesqrt(_380);
            float _386 = _378 * inversesqrt(_380);
            float _388 = _187 + _382;
            float _390 = _189 + _384;
            float _392 = _191 + _386;
            uint _394 = uint(int(uint(_366 + 6880) >> uint(2)));
            int _396 = int(_394) + 1;
            float _398 = inversesqrt(fma(_392, _392, fma(_390, _390, _388 * _388)));
            float _400 = _388 * _398;
            float _402 = _390 * _398;
            float _404 = _392 * _398;
            uint _406 = uint(int(uint(_366 + 8320) >> uint(2)));
            float _408 = fma(_175, _386, fma(_173, _384, _171 * _382));
            float _410 = max(fma(_191, _404, fma(_189, _402, _187 * _400)), fp_c1_1._m0[0].y);
            float _412 = max(fma(_175, _404, fma(_173, _402, _171 * _400)), fp_c1_1._m0[0].y) * max(fma(_175, _404, fma(_173, _402, _171 * _400)), fp_c1_1._m0[0].y);
            float _414 = max(_408, fp_c1_1._m0[0].y);
            uint _416 = uint(int(uint(_366 + 6400) >> uint(2)));
            int _418 = int(_416) + 1;
            uint _420 = uint(int(uint(_366 + 6408) >> uint(2)));
            int _422 = int(_420) + 1;
            float _424 = exp2(_410 * fma(_410, fp_c1_1._m0[0].w, -6.9831600189208984375));
            bool _426 = floatBitsToInt(fp_c10_1._m0[int(uint(int(_406)) >> uint(2))][int(_406) & 3]) != 0;
            float _428 = (_279 * (1.0 / (_275 + fma(_275, -_414, _414)))) * ((_259 * (1.0 / max(fma(_267, _412, -_412) + 1.0, fp_c1_1._m0[0].y))) * (_259 * (1.0 / max(fma(_267, _412, -_412) + 1.0, fp_c1_1._m0[0].y))));
            float _430 = (_247 + fma(_247, -_424, _424)) * _428;
            float _432 = _430;
            if (!_426)
            {
                _432 = 1.0;
            }
            float _434 = _432;
            if (_426)
            {
                uint _436 = uint(int(uint(_366 + 7840) >> uint(2)));
                int _438 = int(_436) + 1;
                uint _440 = uint(int(uint(_366 + 7848) >> uint(2)));
                uint _442 = uint(int(uint(_366 + 6888) >> uint(2)));
                float _444 = fp_c10_1._m0[int(uint(int(_442)) >> uint(2))][int(_442) & 3];
                int _446 = int(_442) + 1;
                _434 = exp2(fp_c10_1._m0[int(uint(_446) >> uint(2))][_446 & 3] * log2(clamp(((-_444) + fma(_386, -fp_c10_1._m0[int(uint(int(_440)) >> uint(2))][int(_440) & 3], fma(_384, -fp_c10_1._m0[int(uint(_438) >> uint(2))][_438 & 3], _382 * (-fp_c10_1._m0[int(uint(int(_436)) >> uint(2))][int(_436) & 3])))) * (1.0 / ((-_444) + 1.0)), 0.0, 1.0)));
            }
            float _448 = exp2(fp_c10_1._m0[int(uint(_396) >> uint(2))][_396 & 3] * log2(clamp(fma(fp_c10_1._m0[int(uint(int(_394)) >> uint(2))][int(_394) & 3], -sqrt(_380), fp_c1_1._m0[1].y), 0.0, 1.0))) * _434;
            _450 = _354 + 1;
            float _452 = fp_c10_1._m0[int(uint(_422) >> uint(2))][_422 & 3] * _448;
            float _454 = _448 * clamp(_408 + (-0.0), 0.0, 1.0);
            float _456 = fma(_352, fp_c1_1._m0[1].z, exp2(_346 * log2(clamp(max(fma(_191, -_386, fma(_189, -_384, _187 * (-_382))), fp_c1_1._m0[0].z) + (-0.0), 0.0, 1.0))) * _352) + 0.20000000298023223876953125;
            float _458 = fma((fp_c10_1._m0[int(uint(int(_416)) >> uint(2))][int(_416) & 3] * _454) * fma(_294, fp_c1_1._m0[1].w, _430 * 0.079577468335628509521484375), _348, _350 * (_285 * (_456 * (_225 * _452)))) + _334;
            float _460 = fma((fp_c10_1._m0[int(uint(_418) >> uint(2))][_418 & 3] * _454) * fma(_300, fp_c1_1._m0[1].w, ((_245 + fma(_245, -_424, _424)) * _428) * 0.079577468335628509521484375), _348, _350 * (_285 * (_456 * (_231 * _452)))) + _336;
            float _462 = fma((fp_c10_1._m0[int(uint(int(_420)) >> uint(2))][int(_420) & 3] * _454) * fma(_302, fp_c1_1._m0[1].w, ((_253 + fma(_253, -_424, _424)) * _428) * 0.079577468335628509521484375), _348, _350 * (_285 * (_456 * (_271 * _452)))) + _338;
            _332 = int(uint(_332) >> uint(8));
            _354 = _450;
            _334 = _458;
            _336 = _460;
            _338 = _462;
            _358 = _458;
            _360 = _460;
            _362 = _462;
        } while (!(_450 >= 4));
        _364 = false;
        _340 = _358;
        _342 = _360;
        _344 = _362;
        if ((_332 & 255) == 30)
        {
            float _464 = _83.y;
            float _466 = 1.0 / (fma(_217, fp_c10_1._m0[565].z, fma(_464, fp_c10_1._m0[565].y, _215 * fp_c10_1._m0[565].x)) + fp_c10_1._m0[565].w);
            float _468 = 1.0 / fp_c10_1._m0[561].y;
            float _470 = _215 + (-fp_c10_1._m0[557].x);
            float _472 = _470 * fp_c10_1._m0[558].z;
            float _474 = (-_215) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].x, -_468, fp_c10_1._m0[557].x);
            float _476 = (-_217) + fma(fp_c10_1._m0[561].x * fp_c10_1._m0[558].z, -_468, fp_c10_1._m0[557].z);
            float _478 = _474 * _474;
            float _480 = _217 + (-fp_c10_1._m0[557].z);
            float _482 = _480 * fp_c10_1._m0[558].x;
            float _484 = sqrt(fma(_476, _476, _478)) * (-fp_c10_1._m0[558].y);
            float _486 = ((-float(_482 < _472)) + float(_482 > _472)) * fp_c10_1._m0[561].y;
            float _488 = fma(_480, _480, _470 * _470);
            float _490 = inversesqrt(fma(_476, _476, fma(_484, _484, _478)));
            float _492 = _474 * _490;
            float _494 = _484 * _490;
            float _496 = _476 * _490;
            float _498 = _187 + _492;
            float _500 = _189 + _494;
            float _502 = fma(_480, fp_c10_1._m0[558].z, _470 * fp_c10_1._m0[558].x);
            bool _504 = _502 > 0.0;
            float _506 = _191 + _496;
            float _508 = _488;
            if (_504)
            {
                _508 = sqrt(_488);
            }
            float _510 = inversesqrt(fma(_506, _506, fma(_500, _500, _498 * _498)));
            float _512 = _508;
            if (!_504)
            {
                _512 = 1.0;
            }
            bool _514 = fma(_480 * inversesqrt(_488), fp_c10_1._m0[558].z, (_470 * inversesqrt(_488)) * fp_c10_1._m0[558].x) < fp_c10_1._m0[560].z;
            float _516 = clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_470, fma(_486, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_480 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_486 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0) * clamp((1.0 / fp_c10_1._m0[561].x) * (abs(fma(_470, fma(_486, fp_c10_1._m0[558].x, fp_c10_1._m0[560].z * fp_c10_1._m0[558].z), -(_480 * fma(fp_c10_1._m0[560].z, fp_c10_1._m0[558].x, -(_486 * fp_c10_1._m0[558].z))))) + (-0.0)), 0.0, 1.0);
            float _518 = inversesqrt(fma(_496, _496, _492 * _492));
            float _520 = _498 * _510;
            float _522 = _506 * _510;
            float _524 = _500 * _510;
            float _526 = fma(_173, _494, _171 * _492);
            float _528 = max(fma(_191, _522, fma(_189, _524, _187 * _520)), fp_c1_1._m0[0].y);
            float _530 = max(fma(_175, _522, fma(_173, _524, _171 * _520)), fp_c1_1._m0[0].y) * max(fma(_175, _522, fma(_173, _524, _171 * _520)), fp_c1_1._m0[0].y);
            float _532 = fma(_175, _496, _526);
            float _534 = _526;
            if (_514)
            {
                _534 = fma(_516, -_516, fp_c1_1._m0[1].y) * fma(_516, -_516, fp_c1_1._m0[1].y);
            }
            float _536 = clamp(fma(_502 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0) * clamp(fma(_502 + (-fp_c10_1._m0[561].z), -(1.0 / fp_c10_1._m0[561].w), fp_c1_1._m0[1].y), 0.0, 1.0);
            float _538 = _534;
            if (!_514)
            {
                _538 = 1.0;
            }
            float _540 = max(_532, fp_c1_1._m0[0].y);
            float _542 = exp2(_528 * fma(_528, fp_c1_1._m0[0].w, -6.9831600189208984375));
            float _544 = min(fma(_536, -_536, fp_c1_1._m0[1].y) * fma(_536, -_536, fp_c1_1._m0[1].y), _538) * (exp2(log2(clamp(fma(_512, -fp_c10_1._m0[560].x, 1.0), 0.0, 1.0)) * fp_c10_1._m0[560].y) * exp2(log2(clamp((fma(_496 * _518, -fp_c10_1._m0[558].z, (_492 * _518) * (-fp_c10_1._m0[558].x)) + (-fp_c10_1._m0[560].z)) * (1.0 / ((-fp_c10_1._m0[560].z) + 1.0)), 0.0, 1.0)) * fp_c10_1._m0[560].w));
            float _546 = _544 * clamp(_532 + (-0.0), 0.0, 1.0);
            float _548 = fma(_352, fp_c1_1._m0[1].z, _352 * exp2(_346 * log2(clamp(max(fma(_191, -_496, fma(_189, -_494, _187 * (-_492))), fp_c1_1._m0[0].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125;
            float _550 = (_279 * (1.0 / (_275 + fma(_275, -_540, _540)))) * ((_259 * (1.0 / max(fma(_267, _530, -_530) + 1.0, fp_c1_1._m0[0].y))) * (_259 * (1.0 / max(fma(_267, _530, -_530) + 1.0, fp_c1_1._m0[0].y))));
            float _552 = float((texture(fp_tex_tcb_44, vec2(fma((fma(_217, fp_c10_1._m0[562].z, fma(_464, fp_c10_1._m0[562].y, _215 * fp_c10_1._m0[562].x)) + fp_c10_1._m0[562].w) * _466, 0.5, 0.5), (-fma((fma(_217, fp_c10_1._m0[563].z, fma(_464, fp_c10_1._m0[563].y, _215 * fp_c10_1._m0[563].x)) + fp_c10_1._m0[563].w) * _466, 0.5, 0.5)) + 1.0)).z > fma((fma(_217, fp_c10_1._m0[564].z, fma(_464, fp_c10_1._m0[564].y, _215 * fp_c10_1._m0[564].x)) + fp_c10_1._m0[564].w) * _466, 0.5, 0.5)) || (_502 <= 0.0));
            _340 = fma(fma(_348, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].x) * _546) * fma(_294, fp_c1_1._m0[1].w, (_550 * (_247 + fma(_247, -_542, _542))) * 0.079577468335628509521484375), _350 * (_285 * (_548 * (_225 * _544)))), _552, _358);
            _342 = fma(fma(_348, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].y) * _546) * fma(_300, fp_c1_1._m0[1].w, (_550 * (_245 + fma(_245, -_542, _542))) * 0.079577468335628509521484375), _350 * (_285 * (_548 * (_231 * _544)))), _552, _360);
            _344 = fma(fma(_348, ((fp_c10_1._m0[559].w * fp_c10_1._m0[559].z) * _546) * fma(_302, fp_c1_1._m0[1].w, (_550 * (_253 + fma(_253, -_542, _542))) * 0.079577468335628509521484375), _350 * (_285 * (_548 * (_271 * _544)))), _552, _362);
        }
    }
    float _554 = _83.y;
    float _556 = _215 + (-fp_c3_1._m0[11].w);
    float _558 = _217 + (-fp_c3_1._m0[13].w);
    float _560 = clamp((-_285) + 1.0, 0.0, 1.0);
    float _562 = _554 + (-fp_c3_1._m0[12].w);
    float _564 = fma(_558, _558, fma(_562, _562, _556 * _556));
    float _566 = (fp_c6_1._m0[18].y + (-1.0)) * (fp_c6_1._m0[18].y + (-1.0));
    float _568 = clamp(fma(_324, -fp_c7_1._m0[36].w, 1.0), 0.0, 1.0);
    float _570 = fma(_566, fp_c1_1._m0[1].z, _566 * exp2((1.0 / fp_c6_1._m0[18].y) * log2(clamp(max(fma(_191, fp_c5_1._m0[23].z, fma(_189, fp_c5_1._m0[23].y, _187 * fp_c5_1._m0[23].x)), fp_c1_1._m0[0].z) + (-0.0), 0.0, 1.0)))) + 0.20000000298023223876953125;
    float _572 = clamp(fma(_223 * _330, fp_c7_1._m0[54].w, 1.0 + (-fp_c7_1._m0[54].w)), 0.0, 1.0);
    float _574 = exp2(log2(clamp(sqrt(_564) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_558 * inversesqrt(_564), fp_c5_1._m0[23].z, fma(_562 * inversesqrt(_564), fp_c5_1._m0[23].y, (_556 * inversesqrt(_564)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _576 = clamp(fma(fma(_217, fp_c5_1._m0[14].z, fma(_554, fp_c5_1._m0[14].y, _215 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _578 = fma(_223, _340, fma(_330, _560 * (fma(_306 * (_247 + fma(_247, -_281, _281)), fp_c1_1._m0[1].x, _294 * 0.3183098733425140380859375) * (_316 * fp_c5_1._m0[5].x)), _568 * (_285 * ((_225 * fp_c5_1._m0[5].w) * _570))));
    float _580 = fma(_223, _342, fma(_330, _560 * (fma(_306 * (_245 + fma(_245, -_281, _281)), fp_c1_1._m0[1].x, _300 * 0.3183098733425140380859375) * (_316 * fp_c5_1._m0[5].y)), _568 * (_285 * ((_231 * fp_c5_1._m0[5].w) * _570))));
    float _582 = fma(_223, _344, fma(_330, _560 * (fma(_306 * (_253 + fma(_253, -_281, _281)), fp_c1_1._m0[1].x, _302 * 0.3183098733425140380859375) * (_316 * fp_c5_1._m0[5].z)), _568 * (_285 * ((_271 * fp_c5_1._m0[5].w) * _570))));
    float _584 = fma((-_578) + fp_c5_1._m0[13].x, _576, _578);
    float _586 = fma((-_580) + fp_c5_1._m0[13].y, _576, _580);
    float _588 = fma((-_582) + fp_c5_1._m0[13].z, _576, _582);
    float _590 = clamp((-exp2((clamp(fma(sqrt(_564), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _79.x = fma((-_584) + fma(fma((_574 * fp_c7_1._m0[55].x) * _572, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _590, _584);
    _79.y = fma((-_586) + fma(fma((_574 * fp_c7_1._m0[55].y) * _572, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _590, _586);
    _79.z = fma((-_588) + fma(fma((_574 * fp_c7_1._m0[55].z) * _572, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _590, _588);
    _79.w = clamp(_94 + (-0.0), 0.0, 1.0);
}


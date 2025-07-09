#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 8, std140) uniform vp_c7
{
    vec4 _m0[4096];
} vp_c7_1;

layout(binding = 5, std140) uniform vp_c4
{
    vec4 _m0[4096];
} vp_c4_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(location = 6) in vec4 _33;
layout(location = 0) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 2) in vec4 _39;
layout(location = 10) in vec4 _41;
layout(location = 8) in vec4 _43;
layout(location = 4) in vec4 _45;
layout(location = 4) out vec4 _47;
layout(location = 0) out vec4 _49;
layout(location = 3) out vec4 _51;
layout(location = 5) out vec4 _53;
layout(location = 1) out vec4 _55;
layout(location = 2) out vec4 _57;
layout(location = 6) out vec4 _59;
layout(location = 7) out vec4 _61;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _68 = _33.x;
    float _70 = _33.y;
    float _72 = _33.z;
    float _74 = _35.x;
    float _76 = _37.x;
    int _79 = ((int(uint(floatBitsToInt(_68)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_68) & 65535) * 48);
    float _81 = _39.x;
    int _83 = ((int(uint(floatBitsToInt(_70)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_70) & 65535) * 48);
    uint _86 = uint(int(uint(_79 + 32) >> uint(2)));
    float _88 = vp_c7_1._m0[int(uint(int(_86)) >> uint(2))][int(_86) & 3];
    int _90 = int(_86) + 1;
    float _92 = vp_c7_1._m0[int(uint(_90) >> uint(2))][_90 & 3];
    uint _94 = uint(int(uint(_79) >> uint(2)));
    float _96 = vp_c7_1._m0[int(uint(int(_94)) >> uint(2))][int(_94) & 3];
    int _98 = int(_94) + 1;
    float _100 = vp_c7_1._m0[int(uint(_98) >> uint(2))][_98 & 3];
    int _102 = ((int(uint(floatBitsToInt(_72)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_72) & 65535) * 48);
    uint _104 = uint(int(uint(_83 + 32) >> uint(2)));
    float _106 = vp_c7_1._m0[int(uint(int(_104)) >> uint(2))][int(_104) & 3];
    int _108 = int(_104) + 1;
    float _110 = vp_c7_1._m0[int(uint(_108) >> uint(2))][_108 & 3];
    uint _112 = uint(int(uint(_83) >> uint(2)));
    float _114 = vp_c7_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    float _118 = vp_c7_1._m0[int(uint(_116) >> uint(2))][_116 & 3];
    uint _120 = uint(int(uint(_102) >> uint(2)));
    float _122 = vp_c7_1._m0[int(uint(int(_120)) >> uint(2))][int(_120) & 3];
    int _124 = int(_120) + 1;
    float _126 = vp_c7_1._m0[int(uint(_124) >> uint(2))][_124 & 3];
    uint _128 = uint(int(uint(_102 + 32) >> uint(2)));
    float _130 = vp_c7_1._m0[int(uint(int(_128)) >> uint(2))][int(_128) & 3];
    int _132 = int(_128) + 1;
    float _134 = vp_c7_1._m0[int(uint(_132) >> uint(2))][_132 & 3];
    float _136 = _39.y;
    uint _138 = uint(int(uint(_79 + 40) >> uint(2)));
    float _140 = vp_c7_1._m0[int(uint(int(_138)) >> uint(2))][int(_138) & 3];
    int _142 = int(_138) + 1;
    float _144 = vp_c7_1._m0[int(uint(_142) >> uint(2))][_142 & 3];
    float _146 = _35.y;
    uint _148 = uint(int(uint(_83 + 40) >> uint(2)));
    float _150 = vp_c7_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    float _154 = vp_c7_1._m0[int(uint(_152) >> uint(2))][_152 & 3];
    uint _156 = uint(int(uint(_79 + 8) >> uint(2)));
    float _158 = vp_c7_1._m0[int(uint(int(_156)) >> uint(2))][int(_156) & 3];
    int _160 = int(_156) + 1;
    float _162 = vp_c7_1._m0[int(uint(_160) >> uint(2))][_160 & 3];
    float _164 = _37.y;
    float _166 = _35.z;
    float _168 = _39.z;
    float _170 = _37.z;
    uint _172 = uint(int(uint(_83 + 8) >> uint(2)));
    float _174 = vp_c7_1._m0[int(uint(int(_172)) >> uint(2))][int(_172) & 3];
    int _176 = int(_172) + 1;
    float _178 = vp_c7_1._m0[int(uint(_176) >> uint(2))][_176 & 3];
    uint _180 = uint(int(uint(_102 + 40) >> uint(2)));
    float _182 = vp_c7_1._m0[int(uint(int(_180)) >> uint(2))][int(_180) & 3];
    int _184 = int(_180) + 1;
    float _186 = vp_c7_1._m0[int(uint(_184) >> uint(2))][_184 & 3];
    uint _188 = uint(int(uint(_79 + 16) >> uint(2)));
    float _190 = vp_c7_1._m0[int(uint(int(_188)) >> uint(2))][int(_188) & 3];
    int _192 = int(_188) + 1;
    float _194 = vp_c7_1._m0[int(uint(_192) >> uint(2))][_192 & 3];
    uint _196 = uint(int(uint(_102 + 8) >> uint(2)));
    float _198 = vp_c7_1._m0[int(uint(int(_196)) >> uint(2))][int(_196) & 3];
    int _200 = int(_196) + 1;
    float _202 = vp_c7_1._m0[int(uint(_200) >> uint(2))][_200 & 3];
    uint _204 = uint(int(uint(_102 + 16) >> uint(2)));
    float _206 = vp_c7_1._m0[int(uint(int(_204)) >> uint(2))][int(_204) & 3];
    int _208 = int(_204) + 1;
    float _210 = vp_c7_1._m0[int(uint(_208) >> uint(2))][_208 & 3];
    uint _212 = uint(int(uint(_83 + 16) >> uint(2)));
    float _214 = vp_c7_1._m0[int(uint(int(_212)) >> uint(2))][int(_212) & 3];
    int _216 = int(_212) + 1;
    float _218 = vp_c7_1._m0[int(uint(_216) >> uint(2))][_216 & 3];
    uint _220 = uint(int(uint(_83 + 24) >> uint(2)));
    float _222 = vp_c7_1._m0[int(uint(int(_220)) >> uint(2))][int(_220) & 3];
    int _224 = int(_220) + 1;
    float _226 = vp_c7_1._m0[int(uint(_224) >> uint(2))][_224 & 3];
    uint _228 = uint(int(uint(_102 + 24) >> uint(2)));
    float _230 = vp_c7_1._m0[int(uint(int(_228)) >> uint(2))][int(_228) & 3];
    int _232 = int(_228) + 1;
    float _234 = vp_c7_1._m0[int(uint(_232) >> uint(2))][_232 & 3];
    uint _236 = uint(int(uint(_79 + 24) >> uint(2)));
    float _238 = vp_c7_1._m0[int(uint(int(_236)) >> uint(2))][int(_236) & 3];
    int _240 = int(_236) + 1;
    float _242 = vp_c7_1._m0[int(uint(_240) >> uint(2))][_240 & 3];
    float _244 = _41.y;
    float _246 = _43.y;
    float _248 = _41.x;
    float _250 = _43.x;
    float _252 = _45.y;
    float _254 = _45.x;
    float _256 = _45.z;
    float _258 = fma(_234 + fma(_230, _166, fma(_210, _146, _206 * _74)), _256, fma(_242 + fma(_238, _166, fma(_194, _146, _190 * _74)), _254, (_226 + fma(_222, _166, fma(_218, _146, _214 * _74))) * _252));
    _47.y = _258;
    _49.z = fma(_248, vp_c4_1._m0[59].x, _244 * vp_c4_1._m0[59].z) + vp_c4_1._m0[60].x;
    _51.w = _39.w;
    float _260 = fma(fma(0.0, _202, fma(_198, _170, fma(_126, _164, _122 * _76))), _256, fma(fma(0.0, _162, fma(_158, _170, fma(_100, _164, _96 * _76))), _254, fma(0.0, _178, fma(_174, _170, fma(_118, _164, _114 * _76))) * _252));
    float _262 = fma(_202 + fma(_198, _166, fma(_126, _146, _122 * _74)), _256, fma(_162 + fma(_158, _166, fma(_100, _146, _96 * _74)), _254, (_178 + fma(_174, _166, fma(_118, _146, _114 * _74))) * _252));
    float _264 = fma(_186 + fma(_182, _166, fma(_134, _146, _130 * _74)), _256, fma(_144 + fma(_140, _166, fma(_92, _146, _88 * _74)), _254, (_154 + fma(_150, _166, fma(_110, _146, _106 * _74))) * _252));
    _47.x = _262;
    _47.z = _264;
    _53.y = _258 + (-vp_c3_1._m0[12].w);
    float _266 = fma(fma(0.0, _234, fma(_230, _170, fma(_210, _164, _206 * _76))), _256, fma(fma(0.0, _242, fma(_238, _170, fma(_194, _164, _190 * _76))), _254, fma(0.0, _226, fma(_222, _170, fma(_218, _164, _214 * _76))) * _252));
    float _268 = fma(fma(0.0, _186, fma(_182, _168, fma(_134, _136, _130 * _81))), _256, fma(fma(0.0, _144, fma(_140, _168, fma(_92, _136, _88 * _81))), _254, fma(0.0, _154, fma(_150, _168, fma(_110, _136, _106 * _81))) * _252));
    _53.z = _264 + (-vp_c3_1._m0[13].w);
    float _270 = fma(fma(0.0, _202, fma(_198, _168, fma(_126, _136, _122 * _81))), _256, fma(fma(0.0, _162, fma(_158, _168, fma(_100, _136, _96 * _81))), _254, fma(0.0, _178, fma(_174, _168, fma(_118, _136, _114 * _81))) * _252));
    float _272 = fma(fma(0.0, _186, fma(_182, _170, fma(_134, _164, _130 * _76))), _256, fma(fma(0.0, _144, fma(_140, _170, fma(_92, _164, _88 * _76))), _254, fma(0.0, _154, fma(_150, _170, fma(_110, _164, _106 * _76))) * _252));
    float _274 = fma(fma(0.0, _234, fma(_230, _168, fma(_210, _136, _206 * _81))), _256, fma(fma(0.0, _242, fma(_238, _168, fma(_194, _136, _190 * _81))), _254, fma(0.0, _226, fma(_222, _168, fma(_218, _136, _214 * _81))) * _252));
    float _276 = fma(_264, vp_c3_1._m0[0].z, fma(_258, vp_c3_1._m0[0].y, _262 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _53.x = _262 + (-vp_c3_1._m0[11].w);
    _49.x = fma(_250, vp_c4_1._m0[57].x, _246 * vp_c4_1._m0[57].z) + vp_c4_1._m0[58].x;
    _49.y = fma(_250, vp_c4_1._m0[57].y, _246 * vp_c4_1._m0[57].w) + vp_c4_1._m0[58].y;
    _55.z = fma(_262, vp_c5_1._m0[16].x, 0.5);
    float _278 = inversesqrt(fma(_272, _272, fma(_266, _266, _260 * _260)));
    float _280 = fma(_264, vp_c3_1._m0[1].z, fma(_258, vp_c3_1._m0[1].y, _262 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _55.w = fma(_264, -vp_c5_1._m0[16].y, 0.5);
    float _282 = fma(_264, vp_c3_1._m0[2].z, fma(_258, vp_c3_1._m0[2].y, _262 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    float _284 = inversesqrt(fma(_268, _268, fma(_274, _274, _270 * _270)));
    _47.w = _282;
    _57.x = _260 * _278;
    _57.y = _266 * _278;
    _57.z = _272 * _278;
    float _286 = fma(_282, vp_c3_1._m0[10].z, fma(_280, vp_c3_1._m0[10].y, _276 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    float _288 = 1.0 / _286;
    gl_Position.w = _286;
    _59.w = _286;
    float _290 = fma(_282, vp_c3_1._m0[7].z, fma(_280, vp_c3_1._m0[7].y, _276 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    _61.z = fma(_264, vp_c3_1._m0[37].z, fma(_258, vp_c3_1._m0[37].y, _262 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _292 = fma(_282, vp_c3_1._m0[8].z, fma(_280, vp_c3_1._m0[8].y, _276 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.x = _290;
    gl_Position.y = _292;
    _51.x = _270 * _284;
    _49.w = fma(_248, vp_c4_1._m0[59].y, _244 * vp_c4_1._m0[59].w) + vp_c4_1._m0[60].y;
    _51.y = _274 * _284;
    _61.y = fma(_264, vp_c3_1._m0[36].z, fma(_258, vp_c3_1._m0[36].y, _262 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _61.x = fma(_264, vp_c3_1._m0[35].z, fma(_258, vp_c3_1._m0[35].y, _262 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _51.z = _268 * _284;
    gl_Position.z = fma(_282, vp_c3_1._m0[9].z, fma(_280, vp_c3_1._m0[9].y, _276 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    _59.x = _286 * fma(_290 * _288, 0.5, 0.5);
    _59.y = _286 * fma(_292 * _288, -0.5, 0.5);
}


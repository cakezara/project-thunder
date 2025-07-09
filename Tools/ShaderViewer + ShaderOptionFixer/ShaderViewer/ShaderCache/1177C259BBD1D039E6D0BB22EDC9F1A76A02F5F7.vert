#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 9, std140) uniform vp_c8
{
    vec4 _m0[4096];
} vp_c8_1;

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 6) in vec4 _31;
layout(location = 8) in vec4 _33;
layout(location = 0) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 4) in vec4 _39;
layout(location = 0) out vec4 _41;
layout(location = 5) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 6) out vec4 _47;
layout(location = 11) out vec4 _49;
layout(location = 12) out vec4 _51;
layout(location = 13) out vec4 _53;
layout(location = 10) out vec4 _55;
layout(location = 2) out vec4 _57;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _64 = _31.y;
    float _66 = _31.x;
    float _68 = _31.z;
    float _70 = _31.w;
    float _72 = _33.y;
    float _74 = _35.x;
    float _76 = _33.x;
    float _78 = _37.x;
    int _81 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_64) & 65535) * 48) + 16);
    float _83 = _35.y;
    uint _86 = uint(int(uint(_81) >> uint(2)));
    float _88 = vp_c8_1._m0[int(uint(int(_86)) >> uint(2))][int(_86) & 3];
    int _90 = int(_86) + 1;
    float _92 = vp_c8_1._m0[int(uint(_90) >> uint(2))][_90 & 3];
    uint _94 = uint(int(uint(_81 + (-16)) >> uint(2)));
    float _96 = vp_c8_1._m0[int(uint(int(_94)) >> uint(2))][int(_94) & 3];
    int _98 = int(_94) + 1;
    float _100 = vp_c8_1._m0[int(uint(_98) >> uint(2))][_98 & 3];
    int _102 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_66) & 65535) * 48) + 32);
    uint _104 = uint(int(uint(_81 + 16) >> uint(2)));
    float _106 = vp_c8_1._m0[int(uint(int(_104)) >> uint(2))][int(_104) & 3];
    int _108 = int(_104) + 1;
    float _110 = vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3];
    int _112 = ((int(uint(floatBitsToInt(_68)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_68) & 65535) * 48);
    uint _114 = uint(int(uint(_102) >> uint(2)));
    float _116 = vp_c8_1._m0[int(uint(int(_114)) >> uint(2))][int(_114) & 3];
    int _118 = int(_114) + 1;
    float _120 = vp_c8_1._m0[int(uint(_118) >> uint(2))][_118 & 3];
    int _122 = ((int(uint(floatBitsToInt(_70)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_70) & 65535) * 48);
    uint _124 = uint(int(uint(_102 + (-32)) >> uint(2)));
    float _126 = vp_c8_1._m0[int(uint(int(_124)) >> uint(2))][int(_124) & 3];
    int _128 = int(_124) + 1;
    float _130 = vp_c8_1._m0[int(uint(_128) >> uint(2))][_128 & 3];
    uint _132 = uint(int(uint(_102 + (-16)) >> uint(2)));
    float _134 = vp_c8_1._m0[int(uint(int(_132)) >> uint(2))][int(_132) & 3];
    int _136 = int(_132) + 1;
    float _138 = vp_c8_1._m0[int(uint(_136) >> uint(2))][_136 & 3];
    uint _140 = uint(int(uint(_102 + (-8)) >> uint(2)));
    float _142 = vp_c8_1._m0[int(uint(int(_140)) >> uint(2))][int(_140) & 3];
    int _144 = int(_140) + 1;
    uint _146 = uint(int(uint(_112) >> uint(2)));
    float _148 = vp_c8_1._m0[int(uint(int(_146)) >> uint(2))][int(_146) & 3];
    int _150 = int(_146) + 1;
    float _152 = vp_c8_1._m0[int(uint(_150) >> uint(2))][_150 & 3];
    uint _154 = uint(int(uint(_112 + 16) >> uint(2)));
    float _156 = vp_c8_1._m0[int(uint(int(_154)) >> uint(2))][int(_154) & 3];
    int _158 = int(_154) + 1;
    float _160 = vp_c8_1._m0[int(uint(_158) >> uint(2))][_158 & 3];
    uint _162 = uint(int(uint(_122) >> uint(2)));
    float _164 = vp_c8_1._m0[int(uint(int(_162)) >> uint(2))][int(_162) & 3];
    int _166 = int(_162) + 1;
    float _168 = vp_c8_1._m0[int(uint(_166) >> uint(2))][_166 & 3];
    uint _170 = uint(int(uint(_122 + 32) >> uint(2)));
    float _172 = vp_c8_1._m0[int(uint(int(_170)) >> uint(2))][int(_170) & 3];
    int _174 = int(_170) + 1;
    float _176 = vp_c8_1._m0[int(uint(_174) >> uint(2))][_174 & 3];
    uint _178 = uint(int(uint(_112 + 32) >> uint(2)));
    float _180 = vp_c8_1._m0[int(uint(int(_178)) >> uint(2))][int(_178) & 3];
    int _182 = int(_178) + 1;
    float _184 = vp_c8_1._m0[int(uint(_182) >> uint(2))][_182 & 3];
    uint _186 = uint(int(uint(_122 + 16) >> uint(2)));
    float _188 = vp_c8_1._m0[int(uint(int(_186)) >> uint(2))][int(_186) & 3];
    int _190 = int(_186) + 1;
    float _192 = vp_c8_1._m0[int(uint(_190) >> uint(2))][_190 & 3];
    float _194 = _37.y;
    uint _196 = uint(int(uint(_81 + (-8)) >> uint(2)));
    float _198 = vp_c8_1._m0[int(uint(int(_196)) >> uint(2))][int(_196) & 3];
    int _200 = int(_196) + 1;
    uint _202 = uint(int(uint(_81 + 24) >> uint(2)));
    float _204 = vp_c8_1._m0[int(uint(int(_202)) >> uint(2))][int(_202) & 3];
    int _206 = int(_202) + 1;
    uint _208 = uint(int(uint(_102 + 8) >> uint(2)));
    float _210 = vp_c8_1._m0[int(uint(int(_208)) >> uint(2))][int(_208) & 3];
    int _212 = int(_208) + 1;
    uint _214 = uint(int(uint(_102 + (-24)) >> uint(2)));
    float _216 = vp_c8_1._m0[int(uint(int(_214)) >> uint(2))][int(_214) & 3];
    int _218 = int(_214) + 1;
    uint _220 = uint(int(uint(_81 + 8) >> uint(2)));
    float _222 = vp_c8_1._m0[int(uint(int(_220)) >> uint(2))][int(_220) & 3];
    int _224 = int(_220) + 1;
    uint _226 = uint(int(uint(_112 + 8) >> uint(2)));
    float _228 = vp_c8_1._m0[int(uint(int(_226)) >> uint(2))][int(_226) & 3];
    int _230 = int(_226) + 1;
    uint _232 = uint(int(uint(_112 + 24) >> uint(2)));
    float _234 = vp_c8_1._m0[int(uint(int(_232)) >> uint(2))][int(_232) & 3];
    int _236 = int(_232) + 1;
    uint _238 = uint(int(uint(_112 + 40) >> uint(2)));
    float _240 = vp_c8_1._m0[int(uint(int(_238)) >> uint(2))][int(_238) & 3];
    int _242 = int(_238) + 1;
    uint _244 = uint(int(uint(_122 + 8) >> uint(2)));
    float _246 = vp_c8_1._m0[int(uint(int(_244)) >> uint(2))][int(_244) & 3];
    int _248 = int(_244) + 1;
    float _250 = _35.z;
    uint _252 = uint(int(uint(_122 + 24) >> uint(2)));
    float _254 = vp_c8_1._m0[int(uint(int(_252)) >> uint(2))][int(_252) & 3];
    int _256 = int(_252) + 1;
    uint _258 = uint(int(uint(_122 + 40) >> uint(2)));
    float _260 = vp_c8_1._m0[int(uint(int(_258)) >> uint(2))][int(_258) & 3];
    int _262 = int(_258) + 1;
    float _264 = _37.z;
    float _266 = _39.y;
    float _268 = _39.x;
    float _270 = _39.z;
    float _272 = _39.w;
    _41.x = fma(_76, vp_c5_1._m0[112].x, _72 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _41.y = fma(_76, vp_c5_1._m0[112].y, _72 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    float _274 = fma(vp_c8_1._m0[int(uint(_248) >> uint(2))][_248 & 3] + fma(_246, _250, fma(_168, _83, _164 * _74)), _272, fma(vp_c8_1._m0[int(uint(_230) >> uint(2))][_230 & 3] + fma(_228, _250, fma(_152, _83, _148 * _74)), _270, fma(vp_c8_1._m0[int(uint(_218) >> uint(2))][_218 & 3] + fma(_216, _250, fma(_130, _83, _126 * _74)), _268, (vp_c8_1._m0[int(uint(_200) >> uint(2))][_200 & 3] + fma(_198, _250, fma(_100, _83, _96 * _74))) * _266)));
    _43.x = _274;
    float _276 = fma(vp_c8_1._m0[int(uint(_256) >> uint(2))][_256 & 3] + fma(_254, _250, fma(_192, _83, _188 * _74)), _272, fma(vp_c8_1._m0[int(uint(_236) >> uint(2))][_236 & 3] + fma(_234, _250, fma(_160, _83, _156 * _74)), _270, fma(vp_c8_1._m0[int(uint(_144) >> uint(2))][_144 & 3] + fma(_142, _250, fma(_138, _83, _134 * _74)), _268, (vp_c8_1._m0[int(uint(_224) >> uint(2))][_224 & 3] + fma(_222, _250, fma(_92, _83, _88 * _74))) * _266)));
    _43.y = _276;
    float _278 = fma(fma(_254, _264, fma(_192, _194, _188 * _78)), _272, fma(fma(_234, _264, fma(_160, _194, _156 * _78)), _270, fma(fma(_142, _264, fma(_138, _194, _134 * _78)), _268, fma(_222, _264, fma(_92, _194, _88 * _78)) * _266)));
    _45.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    float _280 = fma(vp_c8_1._m0[int(uint(_262) >> uint(2))][_262 & 3] + fma(_260, _250, fma(_176, _83, _172 * _74)), _272, fma(vp_c8_1._m0[int(uint(_242) >> uint(2))][_242 & 3] + fma(_240, _250, fma(_184, _83, _180 * _74)), _270, fma(vp_c8_1._m0[int(uint(_212) >> uint(2))][_212 & 3] + fma(_210, _250, fma(_120, _83, _116 * _74)), _268, (vp_c8_1._m0[int(uint(_206) >> uint(2))][_206 & 3] + fma(_204, _250, fma(_110, _83, _106 * _74))) * _266)));
    _43.z = _280;
    _47.x = _274 + (-vp_c3_1._m0[11].w);
    float _282 = fma(fma(_246, _264, fma(_168, _194, _164 * _78)), _272, fma(fma(_228, _264, fma(_152, _194, _148 * _78)), _270, fma(fma(_216, _264, fma(_130, _194, _126 * _78)), _268, fma(_198, _264, fma(_100, _194, _96 * _78)) * _266)));
    float _284 = fma(fma(_260, _264, fma(_176, _194, _172 * _78)), _272, fma(fma(_240, _264, fma(_184, _194, _180 * _78)), _270, fma(fma(_210, _264, fma(_120, _194, _116 * _78)), _268, fma(_204, _264, fma(_110, _194, _106 * _78)) * _266)));
    _47.z = _280 + (-vp_c3_1._m0[13].w);
    _47.y = _276 + (-vp_c3_1._m0[12].w);
    _49.w = fma(_280, vp_c3_1._m0[63].z, fma(_276, vp_c3_1._m0[63].y, _274 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _49.z = fma(_280, vp_c3_1._m0[62].z, fma(_276, vp_c3_1._m0[62].y, _274 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _49.y = fma(_280, vp_c3_1._m0[61].z, fma(_276, vp_c3_1._m0[61].y, _274 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    _49.x = fma(_280, vp_c3_1._m0[60].z, fma(_276, vp_c3_1._m0[60].y, _274 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    _51.w = fma(_280, vp_c3_1._m0[45].z, fma(_276, vp_c3_1._m0[45].y, _274 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _51.z = fma(_280, vp_c3_1._m0[44].z, fma(_276, vp_c3_1._m0[44].y, _274 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    _51.y = fma(_280, vp_c3_1._m0[43].z, fma(_276, vp_c3_1._m0[43].y, _274 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    _51.x = fma(_280, vp_c3_1._m0[42].z, fma(_276, vp_c3_1._m0[42].y, _274 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    _53.w = fma(_280, vp_c3_1._m0[49].z, fma(_276, vp_c3_1._m0[49].y, _274 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    float _286 = inversesqrt(fma(_284, _284, fma(_278, _278, _282 * _282)));
    _53.z = fma(_280, vp_c3_1._m0[48].z, fma(_276, vp_c3_1._m0[48].y, _274 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    _55.z = fma(_280, vp_c3_1._m0[37].z, fma(_276, vp_c3_1._m0[37].y, _274 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _288 = fma(_280, vp_c3_1._m0[0].z, fma(_276, vp_c3_1._m0[0].y, _274 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _57.y = _278 * _286;
    float _290 = fma(_280, vp_c3_1._m0[1].z, fma(_276, vp_c3_1._m0[1].y, _274 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _292 = fma(_280, vp_c3_1._m0[2].z, fma(_276, vp_c3_1._m0[2].y, _274 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _43.w = _292;
    _53.y = fma(_280, vp_c3_1._m0[47].z, fma(_276, vp_c3_1._m0[47].y, _274 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _53.x = fma(_280, vp_c3_1._m0[46].z, fma(_276, vp_c3_1._m0[46].y, _274 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    _55.y = fma(_280, vp_c3_1._m0[36].z, fma(_276, vp_c3_1._m0[36].y, _274 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _57.x = _282 * _286;
    _57.z = _284 * _286;
    _55.x = fma(_280, vp_c3_1._m0[35].z, fma(_276, vp_c3_1._m0[35].y, _274 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    gl_Position.z = fma(_292, vp_c3_1._m0[9].z, fma(_290, vp_c3_1._m0[9].y, _288 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_292, vp_c3_1._m0[7].z, fma(_290, vp_c3_1._m0[7].y, _288 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.w = fma(_292, vp_c3_1._m0[10].z, fma(_290, vp_c3_1._m0[10].y, _288 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.y = fma(_292, vp_c3_1._m0[8].z, fma(_290, vp_c3_1._m0[8].y, _288 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
}


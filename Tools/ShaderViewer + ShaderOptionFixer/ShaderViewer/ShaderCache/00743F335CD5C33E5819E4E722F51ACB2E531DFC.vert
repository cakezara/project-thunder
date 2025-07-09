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
layout(location = 4) in vec4 _41;
layout(location = 10) in vec4 _43;
layout(location = 8) in vec4 _45;
layout(location = 4) out vec4 _47;
layout(location = 0) out vec4 _49;
layout(location = 5) out vec4 _51;
layout(location = 6) out vec4 _53;
layout(location = 8) out vec4 _55;
layout(location = 1) out vec4 _57;
layout(location = 2) out vec4 _59;
layout(location = 3) out vec4 _61;
layout(location = 7) out vec4 _63;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _70 = _33.x;
    float _72 = _33.y;
    float _74 = _33.z;
    float _76 = _33.w;
    float _78 = _35.x;
    int _81 = ((int(uint(floatBitsToInt(_70)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_70) & 65535) * 48);
    float _83 = _37.x;
    int _85 = ((int(uint(floatBitsToInt(_72)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_72) & 65535) * 48);
    uint _88 = uint(int(uint(_81 + 32) >> uint(2)));
    float _90 = vp_c7_1._m0[int(uint(int(_88)) >> uint(2))][int(_88) & 3];
    int _92 = int(_88) + 1;
    float _94 = vp_c7_1._m0[int(uint(_92) >> uint(2))][_92 & 3];
    uint _96 = uint(int(uint(_81) >> uint(2)));
    float _98 = vp_c7_1._m0[int(uint(int(_96)) >> uint(2))][int(_96) & 3];
    int _100 = int(_96) + 1;
    float _102 = vp_c7_1._m0[int(uint(_100) >> uint(2))][_100 & 3];
    int _104 = ((int(uint(floatBitsToInt(_74)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_74) & 65535) * 48);
    uint _106 = uint(int(uint(_85 + 32) >> uint(2)));
    float _108 = vp_c7_1._m0[int(uint(int(_106)) >> uint(2))][int(_106) & 3];
    int _110 = int(_106) + 1;
    float _112 = vp_c7_1._m0[int(uint(_110) >> uint(2))][_110 & 3];
    uint _114 = uint(int(uint(_85) >> uint(2)));
    float _116 = vp_c7_1._m0[int(uint(int(_114)) >> uint(2))][int(_114) & 3];
    int _118 = int(_114) + 1;
    float _120 = vp_c7_1._m0[int(uint(_118) >> uint(2))][_118 & 3];
    int _122 = ((int(uint(floatBitsToInt(_76)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_76) & 65535) * 48);
    uint _124 = uint(int(uint(_104) >> uint(2)));
    float _126 = vp_c7_1._m0[int(uint(int(_124)) >> uint(2))][int(_124) & 3];
    int _128 = int(_124) + 1;
    float _130 = vp_c7_1._m0[int(uint(_128) >> uint(2))][_128 & 3];
    uint _132 = uint(int(uint(_104 + 32) >> uint(2)));
    float _134 = vp_c7_1._m0[int(uint(int(_132)) >> uint(2))][int(_132) & 3];
    int _136 = int(_132) + 1;
    float _138 = vp_c7_1._m0[int(uint(_136) >> uint(2))][_136 & 3];
    float _140 = _39.x;
    float _142 = _35.y;
    float _144 = _37.y;
    float _146 = _39.y;
    uint _148 = uint(int(uint(_81 + 40) >> uint(2)));
    float _150 = vp_c7_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    float _154 = vp_c7_1._m0[int(uint(_152) >> uint(2))][_152 & 3];
    uint _156 = uint(int(uint(_81 + 8) >> uint(2)));
    float _158 = vp_c7_1._m0[int(uint(int(_156)) >> uint(2))][int(_156) & 3];
    int _160 = int(_156) + 1;
    float _162 = vp_c7_1._m0[int(uint(_160) >> uint(2))][_160 & 3];
    uint _164 = uint(int(uint(_85 + 40) >> uint(2)));
    float _166 = vp_c7_1._m0[int(uint(int(_164)) >> uint(2))][int(_164) & 3];
    int _168 = int(_164) + 1;
    float _170 = vp_c7_1._m0[int(uint(_168) >> uint(2))][_168 & 3];
    float _172 = _35.z;
    float _174 = _39.z;
    float _176 = _37.z;
    uint _178 = uint(int(uint(_85 + 8) >> uint(2)));
    float _180 = vp_c7_1._m0[int(uint(int(_178)) >> uint(2))][int(_178) & 3];
    int _182 = int(_178) + 1;
    float _184 = vp_c7_1._m0[int(uint(_182) >> uint(2))][_182 & 3];
    uint _186 = uint(int(uint(_122) >> uint(2)));
    float _188 = vp_c7_1._m0[int(uint(int(_186)) >> uint(2))][int(_186) & 3];
    int _190 = int(_186) + 1;
    float _192 = vp_c7_1._m0[int(uint(_190) >> uint(2))][_190 & 3];
    uint _194 = uint(int(uint(_104 + 8) >> uint(2)));
    float _196 = vp_c7_1._m0[int(uint(int(_194)) >> uint(2))][int(_194) & 3];
    int _198 = int(_194) + 1;
    float _200 = vp_c7_1._m0[int(uint(_198) >> uint(2))][_198 & 3];
    uint _202 = uint(int(uint(_104 + 40) >> uint(2)));
    float _204 = vp_c7_1._m0[int(uint(int(_202)) >> uint(2))][int(_202) & 3];
    int _206 = int(_202) + 1;
    float _208 = vp_c7_1._m0[int(uint(_206) >> uint(2))][_206 & 3];
    uint _210 = uint(int(uint(_122 + 8) >> uint(2)));
    float _212 = vp_c7_1._m0[int(uint(int(_210)) >> uint(2))][int(_210) & 3];
    int _214 = int(_210) + 1;
    float _216 = vp_c7_1._m0[int(uint(_214) >> uint(2))][_214 & 3];
    uint _218 = uint(int(uint(_122 + 32) >> uint(2)));
    float _220 = vp_c7_1._m0[int(uint(int(_218)) >> uint(2))][int(_218) & 3];
    int _222 = int(_218) + 1;
    float _224 = vp_c7_1._m0[int(uint(_222) >> uint(2))][_222 & 3];
    uint _226 = uint(int(uint(_122 + 40) >> uint(2)));
    float _228 = vp_c7_1._m0[int(uint(int(_226)) >> uint(2))][int(_226) & 3];
    int _230 = int(_226) + 1;
    float _232 = vp_c7_1._m0[int(uint(_230) >> uint(2))][_230 & 3];
    float _234 = _41.y;
    float _236 = _41.x;
    uint _238 = uint(int(uint(_85 + 16) >> uint(2)));
    float _240 = vp_c7_1._m0[int(uint(int(_238)) >> uint(2))][int(_238) & 3];
    int _242 = int(_238) + 1;
    float _244 = vp_c7_1._m0[int(uint(_242) >> uint(2))][_242 & 3];
    uint _246 = uint(int(uint(_81 + 16) >> uint(2)));
    float _248 = vp_c7_1._m0[int(uint(int(_246)) >> uint(2))][int(_246) & 3];
    int _250 = int(_246) + 1;
    float _252 = vp_c7_1._m0[int(uint(_250) >> uint(2))][_250 & 3];
    uint _254 = uint(int(uint(_85 + 24) >> uint(2)));
    float _256 = vp_c7_1._m0[int(uint(int(_254)) >> uint(2))][int(_254) & 3];
    int _258 = int(_254) + 1;
    float _260 = vp_c7_1._m0[int(uint(_258) >> uint(2))][_258 & 3];
    uint _262 = uint(int(uint(_81 + 24) >> uint(2)));
    float _264 = vp_c7_1._m0[int(uint(int(_262)) >> uint(2))][int(_262) & 3];
    int _266 = int(_262) + 1;
    float _268 = vp_c7_1._m0[int(uint(_266) >> uint(2))][_266 & 3];
    float _270 = _41.z;
    uint _272 = uint(int(uint(_104 + 16) >> uint(2)));
    float _274 = vp_c7_1._m0[int(uint(int(_272)) >> uint(2))][int(_272) & 3];
    int _276 = int(_272) + 1;
    float _278 = vp_c7_1._m0[int(uint(_276) >> uint(2))][_276 & 3];
    uint _280 = uint(int(uint(_122 + 16) >> uint(2)));
    float _282 = vp_c7_1._m0[int(uint(int(_280)) >> uint(2))][int(_280) & 3];
    int _284 = int(_280) + 1;
    float _286 = vp_c7_1._m0[int(uint(_284) >> uint(2))][_284 & 3];
    uint _288 = uint(int(uint(_104 + 24) >> uint(2)));
    float _290 = vp_c7_1._m0[int(uint(int(_288)) >> uint(2))][int(_288) & 3];
    int _292 = int(_288) + 1;
    float _294 = vp_c7_1._m0[int(uint(_292) >> uint(2))][_292 & 3];
    float _296 = _43.y;
    uint _298 = uint(int(uint(_122 + 24) >> uint(2)));
    float _300 = vp_c7_1._m0[int(uint(int(_298)) >> uint(2))][int(_298) & 3];
    int _302 = int(_298) + 1;
    float _304 = vp_c7_1._m0[int(uint(_302) >> uint(2))][_302 & 3];
    float _306 = _45.y;
    float _308 = _43.x;
    float _310 = _45.x;
    float _312 = _41.w;
    _47.w = _39.w;
    _49.w = fma(_308, vp_c4_1._m0[61].y, _296 * vp_c4_1._m0[61].w) + vp_c4_1._m0[62].y;
    _49.z = fma(_308, vp_c4_1._m0[61].x, _296 * vp_c4_1._m0[61].z) + vp_c4_1._m0[62].x;
    float _314 = fma(_216 + fma(_212, _172, fma(_192, _142, _188 * _78)), _312, fma(_200 + fma(_196, _172, fma(_130, _142, _126 * _78)), _270, fma(_162 + fma(_158, _172, fma(_102, _142, _98 * _78)), _236, (_184 + fma(_180, _172, fma(_120, _142, _116 * _78))) * _234)));
    _51.x = _314;
    float _316 = fma(_304 + fma(_300, _172, fma(_286, _142, _282 * _78)), _312, fma(_294 + fma(_290, _172, fma(_278, _142, _274 * _78)), _270, fma(_268 + fma(_264, _172, fma(_252, _142, _248 * _78)), _236, (_260 + fma(_256, _172, fma(_244, _142, _240 * _78))) * _234)));
    _51.y = _316;
    _49.x = fma(_310, vp_c4_1._m0[59].x, _306 * vp_c4_1._m0[59].z) + vp_c4_1._m0[60].x;
    float _318 = fma(fma(0.0, _216, fma(_212, _176, fma(_192, _144, _188 * _83))), _312, fma(fma(0.0, _200, fma(_196, _176, fma(_130, _144, _126 * _83))), _270, fma(fma(0.0, _162, fma(_158, _176, fma(_102, _144, _98 * _83))), _236, fma(0.0, _184, fma(_180, _176, fma(_120, _144, _116 * _83))) * _234)));
    _53.y = _316 + (-vp_c3_1._m0[12].w);
    float _320 = fma(_232 + fma(_228, _172, fma(_224, _142, _220 * _78)), _312, fma(_208 + fma(_204, _172, fma(_138, _142, _134 * _78)), _270, fma(_154 + fma(_150, _172, fma(_94, _142, _90 * _78)), _236, (_170 + fma(_166, _172, fma(_112, _142, _108 * _78))) * _234)));
    _51.z = _320;
    float _322 = fma(fma(0.0, _304, fma(_300, _176, fma(_286, _144, _282 * _83))), _312, fma(fma(0.0, _294, fma(_290, _176, fma(_278, _144, _274 * _83))), _270, fma(fma(0.0, _268, fma(_264, _176, fma(_252, _144, _248 * _83))), _236, fma(0.0, _260, fma(_256, _176, fma(_244, _144, _240 * _83))) * _234)));
    _49.y = fma(_310, vp_c4_1._m0[59].y, _306 * vp_c4_1._m0[59].w) + vp_c4_1._m0[60].y;
    _53.x = _314 + (-vp_c3_1._m0[11].w);
    float _324 = fma(fma(0.0, _232, fma(_228, _176, fma(_224, _144, _220 * _83))), _312, fma(fma(0.0, _208, fma(_204, _176, fma(_138, _144, _134 * _83))), _270, fma(fma(0.0, _154, fma(_150, _176, fma(_94, _144, _90 * _83))), _236, fma(0.0, _170, fma(_166, _176, fma(_112, _144, _108 * _83))) * _234)));
    _53.z = _320 + (-vp_c3_1._m0[13].w);
    _55.z = fma(_320, vp_c3_1._m0[37].z, fma(_316, vp_c3_1._m0[37].y, _314 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _57.w = fma(_320, -vp_c5_1._m0[16].y, 0.5);
    _57.z = fma(_314, vp_c5_1._m0[16].x, 0.5);
    float _326 = inversesqrt(fma(_324, _324, fma(_322, _322, _318 * _318)));
    _55.y = fma(_320, vp_c3_1._m0[36].z, fma(_316, vp_c3_1._m0[36].y, _314 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _328 = fma(fma(0.0, _216, fma(_212, _174, fma(_192, _146, _188 * _140))), _312, fma(fma(0.0, _200, fma(_196, _174, fma(_130, _146, _126 * _140))), _270, fma(fma(0.0, _162, fma(_158, _174, fma(_102, _146, _98 * _140))), _236, fma(0.0, _184, fma(_180, _174, fma(_120, _146, _116 * _140))) * _234)));
    float _330 = fma(fma(0.0, _304, fma(_300, _174, fma(_286, _146, _282 * _140))), _312, fma(fma(0.0, _294, fma(_290, _174, fma(_278, _146, _274 * _140))), _270, fma(fma(0.0, _268, fma(_264, _174, fma(_252, _146, _248 * _140))), _236, fma(0.0, _260, fma(_256, _174, fma(_244, _146, _240 * _140))) * _234)));
    float _332 = fma(_320, vp_c3_1._m0[0].z, fma(_316, vp_c3_1._m0[0].y, _314 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _55.x = fma(_320, vp_c3_1._m0[35].z, fma(_316, vp_c3_1._m0[35].y, _314 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _334 = fma(fma(0.0, _232, fma(_228, _174, fma(_224, _146, _220 * _140))), _312, fma(fma(0.0, _208, fma(_204, _174, fma(_138, _146, _134 * _140))), _270, fma(fma(0.0, _154, fma(_150, _174, fma(_94, _146, _90 * _140))), _236, fma(0.0, _170, fma(_166, _174, fma(_112, _146, _108 * _140))) * _234)));
    _59.y = _322 * _326;
    _59.x = _318 * _326;
    _59.z = _324 * _326;
    float _336 = fma(_320, vp_c3_1._m0[1].z, fma(_316, vp_c3_1._m0[1].y, _314 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _338 = inversesqrt(fma(_334, _334, fma(_330, _330, _328 * _328)));
    float _340 = fma(_320, vp_c3_1._m0[2].z, fma(_316, vp_c3_1._m0[2].y, _314 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _51.w = _340;
    _61.w = clamp((-0.0) + vp_c4_1._m0[19].y, 0.0, 1.0);
    _47.x = _328 * _338;
    _47.y = _330 * _338;
    _47.z = _334 * _338;
    float _342 = fma(_340, vp_c3_1._m0[8].z, fma(_336, vp_c3_1._m0[8].y, _332 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_340, vp_c3_1._m0[9].z, fma(_336, vp_c3_1._m0[9].y, _332 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _344 = fma(_340, vp_c3_1._m0[7].z, fma(_336, vp_c3_1._m0[7].y, _332 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _342;
    float _346 = fma(_340, vp_c3_1._m0[10].z, fma(_336, vp_c3_1._m0[10].y, _332 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _63.y = _342;
    gl_Position.x = _344;
    _63.x = _344;
    gl_Position.w = _346;
    _63.w = _346;
}


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
layout(location = 0) in vec4 _33;
layout(location = 2) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 8) in vec4 _39;
layout(location = 4) in vec4 _41;
layout(location = 3) out vec4 _43;
layout(location = 4) out vec4 _45;
layout(location = 2) out vec4 _47;
layout(location = 1) out vec4 _49;
layout(location = 6) out vec4 _51;
layout(location = 0) out vec4 _53;
layout(location = 5) out vec4 _55;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _62 = _31.x;
    float _64 = _31.y;
    float _66 = _31.z;
    float _68 = _31.w;
    float _70 = _33.x;
    float _72 = _35.x;
    float _74 = _37.x;
    float _76 = _33.y;
    int _79 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_62) & 65535) * 48) + 32);
    float _81 = _35.y;
    uint _84 = uint(int(uint(_79) >> uint(2)));
    float _86 = vp_c8_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    int _92 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_64) & 65535) * 48) + 16);
    uint _94 = uint(int(uint(_79 + (-16)) >> uint(2)));
    float _96 = vp_c8_1._m0[int(uint(int(_94)) >> uint(2))][int(_94) & 3];
    int _98 = int(_94) + 1;
    float _100 = vp_c8_1._m0[int(uint(_98) >> uint(2))][_98 & 3];
    uint _102 = uint(int(uint(_79 + (-32)) >> uint(2)));
    float _104 = vp_c8_1._m0[int(uint(int(_102)) >> uint(2))][int(_102) & 3];
    int _106 = int(_102) + 1;
    float _108 = vp_c8_1._m0[int(uint(_106) >> uint(2))][_106 & 3];
    int _110 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_66) & 65535) * 48);
    uint _112 = uint(int(uint(_92 + (-16)) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    float _118 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3];
    int _120 = ((int(uint(floatBitsToInt(_68)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_68) & 65535) * 48);
    uint _122 = uint(int(uint(_92) >> uint(2)));
    float _124 = vp_c8_1._m0[int(uint(int(_122)) >> uint(2))][int(_122) & 3];
    int _126 = int(_122) + 1;
    float _128 = vp_c8_1._m0[int(uint(_126) >> uint(2))][_126 & 3];
    uint _130 = uint(int(uint(_92 + 16) >> uint(2)));
    float _132 = vp_c8_1._m0[int(uint(int(_130)) >> uint(2))][int(_130) & 3];
    int _134 = int(_130) + 1;
    float _136 = vp_c8_1._m0[int(uint(_134) >> uint(2))][_134 & 3];
    uint _138 = uint(int(uint(_110) >> uint(2)));
    float _140 = vp_c8_1._m0[int(uint(int(_138)) >> uint(2))][int(_138) & 3];
    int _142 = int(_138) + 1;
    float _144 = vp_c8_1._m0[int(uint(_142) >> uint(2))][_142 & 3];
    uint _146 = uint(int(uint(_110 + 16) >> uint(2)));
    float _148 = vp_c8_1._m0[int(uint(int(_146)) >> uint(2))][int(_146) & 3];
    int _150 = int(_146) + 1;
    float _152 = vp_c8_1._m0[int(uint(_150) >> uint(2))][_150 & 3];
    uint _154 = uint(int(uint(_110 + 32) >> uint(2)));
    float _156 = vp_c8_1._m0[int(uint(int(_154)) >> uint(2))][int(_154) & 3];
    int _158 = int(_154) + 1;
    float _160 = vp_c8_1._m0[int(uint(_158) >> uint(2))][_158 & 3];
    uint _162 = uint(int(uint(_120) >> uint(2)));
    float _164 = vp_c8_1._m0[int(uint(int(_162)) >> uint(2))][int(_162) & 3];
    int _166 = int(_162) + 1;
    float _168 = vp_c8_1._m0[int(uint(_166) >> uint(2))][_166 & 3];
    uint _170 = uint(int(uint(_120 + 16) >> uint(2)));
    float _172 = vp_c8_1._m0[int(uint(int(_170)) >> uint(2))][int(_170) & 3];
    int _174 = int(_170) + 1;
    float _176 = vp_c8_1._m0[int(uint(_174) >> uint(2))][_174 & 3];
    uint _178 = uint(int(uint(_120 + 32) >> uint(2)));
    float _180 = vp_c8_1._m0[int(uint(int(_178)) >> uint(2))][int(_178) & 3];
    int _182 = int(_178) + 1;
    float _184 = vp_c8_1._m0[int(uint(_182) >> uint(2))][_182 & 3];
    float _186 = _39.y;
    uint _188 = uint(int(uint(_110 + 8) >> uint(2)));
    float _190 = vp_c8_1._m0[int(uint(int(_188)) >> uint(2))][int(_188) & 3];
    int _192 = int(_188) + 1;
    uint _194 = uint(int(uint(_110 + 40) >> uint(2)));
    float _196 = vp_c8_1._m0[int(uint(int(_194)) >> uint(2))][int(_194) & 3];
    int _198 = int(_194) + 1;
    uint _200 = uint(int(uint(_92 + 24) >> uint(2)));
    float _202 = vp_c8_1._m0[int(uint(int(_200)) >> uint(2))][int(_200) & 3];
    int _204 = int(_200) + 1;
    float _206 = _39.x;
    uint _208 = uint(int(uint(_110 + 24) >> uint(2)));
    float _210 = vp_c8_1._m0[int(uint(int(_208)) >> uint(2))][int(_208) & 3];
    int _212 = int(_208) + 1;
    uint _214 = uint(int(uint(_120 + 8) >> uint(2)));
    float _216 = vp_c8_1._m0[int(uint(int(_214)) >> uint(2))][int(_214) & 3];
    int _218 = int(_214) + 1;
    uint _220 = uint(int(uint(_120 + 24) >> uint(2)));
    float _222 = vp_c8_1._m0[int(uint(int(_220)) >> uint(2))][int(_220) & 3];
    int _224 = int(_220) + 1;
    float _226 = _37.y;
    uint _228 = uint(int(uint(_120 + 40) >> uint(2)));
    float _230 = vp_c8_1._m0[int(uint(int(_228)) >> uint(2))][int(_228) & 3];
    int _232 = int(_228) + 1;
    uint _234 = uint(int(uint(_92 + 8) >> uint(2)));
    float _236 = vp_c8_1._m0[int(uint(int(_234)) >> uint(2))][int(_234) & 3];
    int _238 = int(_234) + 1;
    uint _240 = uint(int(uint(_79 + 8) >> uint(2)));
    float _242 = vp_c8_1._m0[int(uint(int(_240)) >> uint(2))][int(_240) & 3];
    int _244 = int(_240) + 1;
    float _246 = _33.z;
    uint _248 = uint(int(uint(_79 + (-24)) >> uint(2)));
    float _250 = vp_c8_1._m0[int(uint(int(_248)) >> uint(2))][int(_248) & 3];
    int _252 = int(_248) + 1;
    uint _254 = uint(int(uint(_79 + (-8)) >> uint(2)));
    float _256 = vp_c8_1._m0[int(uint(int(_254)) >> uint(2))][int(_254) & 3];
    int _258 = int(_254) + 1;
    uint _260 = uint(int(uint(_92 + (-8)) >> uint(2)));
    float _262 = vp_c8_1._m0[int(uint(int(_260)) >> uint(2))][int(_260) & 3];
    int _264 = int(_260) + 1;
    float _266 = _35.z;
    float _268 = _41.y;
    float _270 = _37.z;
    float _272 = _41.x;
    float _274 = _41.z;
    float _276 = _41.w;
    float _278 = fma(fma(_216, _270, fma(_168, _226, _164 * _74)), _276, fma(fma(_190, _270, fma(_144, _226, _140 * _74)), _274, fma(fma(_250, _270, fma(_108, _226, _104 * _74)), _272, fma(_262, _270, fma(_118, _226, _114 * _74)) * _268)));
    float _280 = fma(fma(_222, _270, fma(_176, _226, _172 * _74)), _276, fma(fma(_210, _270, fma(_152, _226, _148 * _74)), _274, fma(fma(_256, _270, fma(_100, _226, _96 * _74)), _272, fma(_236, _270, fma(_128, _226, _124 * _74)) * _268)));
    float _282 = fma(fma(_230, _270, fma(_184, _226, _180 * _74)), _276, fma(fma(_196, _270, fma(_160, _226, _156 * _74)), _274, fma(fma(_242, _270, fma(_90, _226, _86 * _74)), _272, fma(_202, _270, fma(_136, _226, _132 * _74)) * _268)));
    float _284 = fma(vp_c8_1._m0[int(uint(_218) >> uint(2))][_218 & 3] + fma(_216, _246, fma(_168, _76, _164 * _70)), _276, fma(vp_c8_1._m0[int(uint(_192) >> uint(2))][_192 & 3] + fma(_190, _246, fma(_144, _76, _140 * _70)), _274, fma(vp_c8_1._m0[int(uint(_252) >> uint(2))][_252 & 3] + fma(_250, _246, fma(_108, _76, _104 * _70)), _272, (vp_c8_1._m0[int(uint(_264) >> uint(2))][_264 & 3] + fma(_262, _246, fma(_118, _76, _114 * _70))) * _268)));
    _43.x = _284;
    float _286 = fma(fma(_216, _266, fma(_168, _81, _164 * _72)), _276, fma(fma(_190, _266, fma(_144, _81, _140 * _72)), _274, fma(fma(_250, _266, fma(_108, _81, _104 * _72)), _272, fma(_262, _266, fma(_118, _81, _114 * _72)) * _268)));
    float _288 = inversesqrt(fma(_282, _282, fma(_280, _280, _278 * _278)));
    _45.x = _284 + (-vp_c3_1._m0[11].w);
    float _290 = fma(fma(_222, _266, fma(_176, _81, _172 * _72)), _276, fma(fma(_210, _266, fma(_152, _81, _148 * _72)), _274, fma(fma(_256, _266, fma(_100, _81, _96 * _72)), _272, fma(_236, _266, fma(_128, _81, _124 * _72)) * _268)));
    float _292 = fma(vp_c8_1._m0[int(uint(_224) >> uint(2))][_224 & 3] + fma(_222, _246, fma(_176, _76, _172 * _70)), _276, fma(vp_c8_1._m0[int(uint(_212) >> uint(2))][_212 & 3] + fma(_210, _246, fma(_152, _76, _148 * _70)), _274, fma(vp_c8_1._m0[int(uint(_258) >> uint(2))][_258 & 3] + fma(_256, _246, fma(_100, _76, _96 * _70)), _272, (vp_c8_1._m0[int(uint(_238) >> uint(2))][_238 & 3] + fma(_236, _246, fma(_128, _76, _124 * _70))) * _268)));
    _43.y = _292;
    float _294 = fma(vp_c8_1._m0[int(uint(_232) >> uint(2))][_232 & 3] + fma(_230, _246, fma(_184, _76, _180 * _70)), _276, fma(vp_c8_1._m0[int(uint(_198) >> uint(2))][_198 & 3] + fma(_196, _246, fma(_160, _76, _156 * _70)), _274, fma(vp_c8_1._m0[int(uint(_244) >> uint(2))][_244 & 3] + fma(_242, _246, fma(_90, _76, _86 * _70)), _272, (vp_c8_1._m0[int(uint(_204) >> uint(2))][_204 & 3] + fma(_202, _246, fma(_136, _76, _132 * _70))) * _268)));
    _43.z = _294;
    float _296 = fma(fma(_230, _266, fma(_184, _81, _180 * _72)), _276, fma(fma(_196, _266, fma(_160, _81, _156 * _72)), _274, fma(fma(_242, _266, fma(_90, _81, _86 * _72)), _272, fma(_202, _266, fma(_136, _81, _132 * _72)) * _268)));
    _47.w = _35.w * vp_c5_1._m0[58].x;
    _45.z = _294 + (-vp_c3_1._m0[13].w);
    _45.y = _292 + (-vp_c3_1._m0[12].w);
    float _298 = inversesqrt(fma(_296, _296, fma(_290, _290, _286 * _286)));
    float _300 = fma(_294, vp_c3_1._m0[0].z, fma(_292, vp_c3_1._m0[0].y, _284 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _49.x = _278 * _288;
    _51.x = fma(_294, vp_c3_1._m0[35].z, fma(_292, vp_c3_1._m0[35].y, _284 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _302 = fma(_294, vp_c3_1._m0[1].z, fma(_292, vp_c3_1._m0[1].y, _284 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _304 = fma(_294, vp_c3_1._m0[2].z, fma(_292, vp_c3_1._m0[2].y, _284 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _43.w = _304;
    _49.y = _280 * _288;
    _47.x = _286 * _298;
    _47.y = _290 * _298;
    _53.x = fma(_206, vp_c5_1._m0[112].x, _186 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _53.y = fma(_206, vp_c5_1._m0[112].y, _186 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    _51.z = fma(_294, vp_c3_1._m0[37].z, fma(_292, vp_c3_1._m0[37].y, _284 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _49.z = _282 * _288;
    _51.y = fma(_294, vp_c3_1._m0[36].z, fma(_292, vp_c3_1._m0[36].y, _284 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _47.z = _296 * _298;
    float _306 = fma(_304, vp_c3_1._m0[8].z, fma(_302, vp_c3_1._m0[8].y, _300 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_304, vp_c3_1._m0[9].z, fma(_302, vp_c3_1._m0[9].y, _300 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _308 = fma(_304, vp_c3_1._m0[7].z, fma(_302, vp_c3_1._m0[7].y, _300 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _306;
    float _310 = fma(_304, vp_c3_1._m0[10].z, fma(_302, vp_c3_1._m0[10].y, _300 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _55.y = _306;
    gl_Position.x = _308;
    _55.x = _308;
    gl_Position.w = _310;
    _55.w = _310;
}


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
layout(location = 5) out vec4 _43;
layout(location = 4) out vec4 _45;
layout(location = 6) out vec4 _47;
layout(location = 2) out vec4 _49;
layout(location = 10) out vec4 _51;
layout(location = 0) out vec4 _53;
layout(location = 7) out vec4 _55;

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
    float _81 = _39.y;
    uint _84 = uint(int(uint(_79 + (-32)) >> uint(2)));
    float _86 = vp_c8_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    uint _92 = uint(int(uint(_79) >> uint(2)));
    float _94 = vp_c8_1._m0[int(uint(int(_92)) >> uint(2))][int(_92) & 3];
    int _96 = int(_92) + 1;
    float _98 = vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3];
    int _100 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_64) & 65535) * 48) + 16);
    uint _102 = uint(int(uint(_79 + (-16)) >> uint(2)));
    float _104 = vp_c8_1._m0[int(uint(int(_102)) >> uint(2))][int(_102) & 3];
    int _106 = int(_102) + 1;
    float _108 = vp_c8_1._m0[int(uint(_106) >> uint(2))][_106 & 3];
    int _110 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_66) & 65535) * 48);
    uint _112 = uint(int(uint(_100 + (-16)) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    float _118 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3];
    int _120 = ((int(uint(floatBitsToInt(_68)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_68) & 65535) * 48);
    uint _122 = uint(int(uint(_100) >> uint(2)));
    float _124 = vp_c8_1._m0[int(uint(int(_122)) >> uint(2))][int(_122) & 3];
    int _126 = int(_122) + 1;
    float _128 = vp_c8_1._m0[int(uint(_126) >> uint(2))][_126 & 3];
    uint _130 = uint(int(uint(_100 + 16) >> uint(2)));
    float _132 = vp_c8_1._m0[int(uint(int(_130)) >> uint(2))][int(_130) & 3];
    int _134 = int(_130) + 1;
    float _136 = vp_c8_1._m0[int(uint(_134) >> uint(2))][_134 & 3];
    float _138 = _35.y;
    uint _140 = uint(int(uint(_110) >> uint(2)));
    float _142 = vp_c8_1._m0[int(uint(int(_140)) >> uint(2))][int(_140) & 3];
    int _144 = int(_140) + 1;
    float _146 = vp_c8_1._m0[int(uint(_144) >> uint(2))][_144 & 3];
    uint _148 = uint(int(uint(_110 + 16) >> uint(2)));
    float _150 = vp_c8_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    float _154 = vp_c8_1._m0[int(uint(_152) >> uint(2))][_152 & 3];
    uint _156 = uint(int(uint(_110 + 32) >> uint(2)));
    float _158 = vp_c8_1._m0[int(uint(int(_156)) >> uint(2))][int(_156) & 3];
    int _160 = int(_156) + 1;
    float _162 = vp_c8_1._m0[int(uint(_160) >> uint(2))][_160 & 3];
    uint _164 = uint(int(uint(_120) >> uint(2)));
    float _166 = vp_c8_1._m0[int(uint(int(_164)) >> uint(2))][int(_164) & 3];
    int _168 = int(_164) + 1;
    float _170 = vp_c8_1._m0[int(uint(_168) >> uint(2))][_168 & 3];
    uint _172 = uint(int(uint(_120 + 16) >> uint(2)));
    float _174 = vp_c8_1._m0[int(uint(int(_172)) >> uint(2))][int(_172) & 3];
    int _176 = int(_172) + 1;
    float _178 = vp_c8_1._m0[int(uint(_176) >> uint(2))][_176 & 3];
    uint _180 = uint(int(uint(_120 + 32) >> uint(2)));
    float _182 = vp_c8_1._m0[int(uint(int(_180)) >> uint(2))][int(_180) & 3];
    int _184 = int(_180) + 1;
    float _186 = vp_c8_1._m0[int(uint(_184) >> uint(2))][_184 & 3];
    float _188 = _37.y;
    uint _190 = uint(int(uint(_110 + 8) >> uint(2)));
    float _192 = vp_c8_1._m0[int(uint(int(_190)) >> uint(2))][int(_190) & 3];
    int _194 = int(_190) + 1;
    uint _196 = uint(int(uint(_110 + 24) >> uint(2)));
    float _198 = vp_c8_1._m0[int(uint(int(_196)) >> uint(2))][int(_196) & 3];
    int _200 = int(_196) + 1;
    uint _202 = uint(int(uint(_110 + 40) >> uint(2)));
    float _204 = vp_c8_1._m0[int(uint(int(_202)) >> uint(2))][int(_202) & 3];
    int _206 = int(_202) + 1;
    float _208 = _39.x;
    uint _210 = uint(int(uint(_120 + 8) >> uint(2)));
    float _212 = vp_c8_1._m0[int(uint(int(_210)) >> uint(2))][int(_210) & 3];
    int _214 = int(_210) + 1;
    uint _216 = uint(int(uint(_120 + 24) >> uint(2)));
    float _218 = vp_c8_1._m0[int(uint(int(_216)) >> uint(2))][int(_216) & 3];
    int _220 = int(_216) + 1;
    uint _222 = uint(int(uint(_120 + 40) >> uint(2)));
    float _224 = vp_c8_1._m0[int(uint(int(_222)) >> uint(2))][int(_222) & 3];
    int _226 = int(_222) + 1;
    uint _228 = uint(int(uint(_100 + 24) >> uint(2)));
    float _230 = vp_c8_1._m0[int(uint(int(_228)) >> uint(2))][int(_228) & 3];
    int _232 = int(_228) + 1;
    uint _234 = uint(int(uint(_79 + 8) >> uint(2)));
    float _236 = vp_c8_1._m0[int(uint(int(_234)) >> uint(2))][int(_234) & 3];
    int _238 = int(_234) + 1;
    uint _240 = uint(int(uint(_100 + 8) >> uint(2)));
    float _242 = vp_c8_1._m0[int(uint(int(_240)) >> uint(2))][int(_240) & 3];
    int _244 = int(_240) + 1;
    uint _246 = uint(int(uint(_100 + (-8)) >> uint(2)));
    float _248 = vp_c8_1._m0[int(uint(int(_246)) >> uint(2))][int(_246) & 3];
    int _250 = int(_246) + 1;
    float _252 = _33.z;
    uint _254 = uint(int(uint(_79 + (-24)) >> uint(2)));
    float _256 = vp_c8_1._m0[int(uint(int(_254)) >> uint(2))][int(_254) & 3];
    int _258 = int(_254) + 1;
    uint _260 = uint(int(uint(_79 + (-8)) >> uint(2)));
    float _262 = vp_c8_1._m0[int(uint(int(_260)) >> uint(2))][int(_260) & 3];
    int _264 = int(_260) + 1;
    float _266 = _41.y;
    float _268 = _37.z;
    float _270 = _35.z;
    float _272 = _41.x;
    float _274 = _41.w;
    float _276 = _41.z;
    float _278 = fma(fma(_212, _268, fma(_170, _188, _166 * _74)), _274, fma(fma(_192, _268, fma(_146, _188, _142 * _74)), _276, fma(fma(_256, _268, fma(_90, _188, _86 * _74)), _272, fma(_248, _268, fma(_118, _188, _114 * _74)) * _266)));
    float _280 = fma(fma(_218, _268, fma(_178, _188, _174 * _74)), _274, fma(fma(_198, _268, fma(_154, _188, _150 * _74)), _276, fma(fma(_262, _268, fma(_108, _188, _104 * _74)), _272, fma(_242, _268, fma(_128, _188, _124 * _74)) * _266)));
    float _282 = fma(vp_c8_1._m0[int(uint(_214) >> uint(2))][_214 & 3] + fma(_212, _252, fma(_170, _76, _166 * _70)), _274, fma(vp_c8_1._m0[int(uint(_194) >> uint(2))][_194 & 3] + fma(_192, _252, fma(_146, _76, _142 * _70)), _276, fma(vp_c8_1._m0[int(uint(_258) >> uint(2))][_258 & 3] + fma(_256, _252, fma(_90, _76, _86 * _70)), _272, (vp_c8_1._m0[int(uint(_250) >> uint(2))][_250 & 3] + fma(_248, _252, fma(_118, _76, _114 * _70))) * _266)));
    float _284 = fma(fma(_224, _268, fma(_186, _188, _182 * _74)), _274, fma(fma(_204, _268, fma(_162, _188, _158 * _74)), _276, fma(fma(_236, _268, fma(_98, _188, _94 * _74)), _272, fma(_230, _268, fma(_136, _188, _132 * _74)) * _266)));
    _43.x = _282;
    float _286 = fma(vp_c8_1._m0[int(uint(_226) >> uint(2))][_226 & 3] + fma(_224, _252, fma(_186, _76, _182 * _70)), _274, fma(vp_c8_1._m0[int(uint(_206) >> uint(2))][_206 & 3] + fma(_204, _252, fma(_162, _76, _158 * _70)), _276, fma(vp_c8_1._m0[int(uint(_238) >> uint(2))][_238 & 3] + fma(_236, _252, fma(_98, _76, _94 * _70)), _272, (vp_c8_1._m0[int(uint(_232) >> uint(2))][_232 & 3] + fma(_230, _252, fma(_136, _76, _132 * _70))) * _266)));
    float _288 = fma(fma(_212, _270, fma(_170, _138, _166 * _72)), _274, fma(fma(_192, _270, fma(_146, _138, _142 * _72)), _276, fma(fma(_256, _270, fma(_90, _138, _86 * _72)), _272, fma(_248, _270, fma(_118, _138, _114 * _72)) * _266)));
    _43.z = _286;
    _45.w = _35.w;
    _47.x = _282 + (-vp_c3_1._m0[11].w);
    float _290 = fma(fma(_218, _270, fma(_178, _138, _174 * _72)), _274, fma(fma(_198, _270, fma(_154, _138, _150 * _72)), _276, fma(fma(_262, _270, fma(_108, _138, _104 * _72)), _272, fma(_242, _270, fma(_128, _138, _124 * _72)) * _266)));
    float _292 = inversesqrt(fma(_284, _284, fma(_280, _280, _278 * _278)));
    float _294 = fma(vp_c8_1._m0[int(uint(_220) >> uint(2))][_220 & 3] + fma(_218, _252, fma(_178, _76, _174 * _70)), _274, fma(vp_c8_1._m0[int(uint(_200) >> uint(2))][_200 & 3] + fma(_198, _252, fma(_154, _76, _150 * _70)), _276, fma(vp_c8_1._m0[int(uint(_264) >> uint(2))][_264 & 3] + fma(_262, _252, fma(_108, _76, _104 * _70)), _272, (vp_c8_1._m0[int(uint(_244) >> uint(2))][_244 & 3] + fma(_242, _252, fma(_128, _76, _124 * _70))) * _266)));
    _43.y = _294;
    _47.z = _286 + (-vp_c3_1._m0[13].w);
    _47.y = _294 + (-vp_c3_1._m0[12].w);
    _49.x = _278 * _292;
    float _296 = fma(fma(_224, _270, fma(_186, _138, _182 * _72)), _274, fma(fma(_204, _270, fma(_162, _138, _158 * _72)), _276, fma(fma(_236, _270, fma(_98, _138, _94 * _72)), _272, fma(_230, _270, fma(_136, _138, _132 * _72)) * _266)));
    _49.y = _280 * _292;
    float _298 = inversesqrt(fma(_296, _296, fma(_290, _290, _288 * _288)));
    _49.z = _284 * _292;
    float _300 = fma(_286, vp_c3_1._m0[0].z, fma(_294, vp_c3_1._m0[0].y, _282 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _51.x = fma(_286, vp_c3_1._m0[35].z, fma(_294, vp_c3_1._m0[35].y, _282 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _302 = fma(_286, vp_c3_1._m0[1].z, fma(_294, vp_c3_1._m0[1].y, _282 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _304 = fma(_286, vp_c3_1._m0[2].z, fma(_294, vp_c3_1._m0[2].y, _282 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _53.x = fma(_208, vp_c5_1._m0[111].x, _81 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _43.w = _304;
    _53.y = fma(_208, vp_c5_1._m0[111].y, _81 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _51.z = fma(_286, vp_c3_1._m0[37].z, fma(_294, vp_c3_1._m0[37].y, _282 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _51.y = fma(_286, vp_c3_1._m0[36].z, fma(_294, vp_c3_1._m0[36].y, _282 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _45.x = _288 * _298;
    _45.y = _290 * _298;
    _45.z = _296 * _298;
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


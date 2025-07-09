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
layout(location = 8) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 2) in vec4 _39;
layout(location = 4) in vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 2) out vec4 _47;
layout(location = 4) out vec4 _49;
layout(location = 6) out vec4 _51;
layout(location = 1) out vec4 _53;
layout(location = 5) out vec4 _55;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _62 = _31.y;
    float _64 = _31.x;
    float _66 = _31.z;
    float _68 = _31.w;
    float _70 = _33.x;
    float _72 = _35.y;
    float _74 = _37.x;
    float _76 = _39.x;
    int _79 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_62) & 65535) * 48) + 16);
    float _81 = _33.y;
    uint _84 = uint(int(uint(_79 + (-16)) >> uint(2)));
    float _86 = vp_c8_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    uint _92 = uint(int(uint(_79 + 16) >> uint(2)));
    float _94 = vp_c8_1._m0[int(uint(int(_92)) >> uint(2))][int(_92) & 3];
    int _96 = int(_92) + 1;
    float _98 = vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3];
    int _100 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_64) & 65535) * 48) + 32);
    uint _102 = uint(int(uint(_79) >> uint(2)));
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
    uint _130 = uint(int(uint(_100 + (-32)) >> uint(2)));
    float _132 = vp_c8_1._m0[int(uint(int(_130)) >> uint(2))][int(_130) & 3];
    int _134 = int(_130) + 1;
    float _136 = vp_c8_1._m0[int(uint(_134) >> uint(2))][_134 & 3];
    float _138 = _35.x;
    uint _140 = uint(int(uint(_110 + 16) >> uint(2)));
    float _142 = vp_c8_1._m0[int(uint(int(_140)) >> uint(2))][int(_140) & 3];
    int _144 = int(_140) + 1;
    float _146 = vp_c8_1._m0[int(uint(_144) >> uint(2))][_144 & 3];
    uint _148 = uint(int(uint(_110 + 32) >> uint(2)));
    float _150 = vp_c8_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    float _154 = vp_c8_1._m0[int(uint(_152) >> uint(2))][_152 & 3];
    uint _156 = uint(int(uint(_120) >> uint(2)));
    float _158 = vp_c8_1._m0[int(uint(int(_156)) >> uint(2))][int(_156) & 3];
    int _160 = int(_156) + 1;
    float _162 = vp_c8_1._m0[int(uint(_160) >> uint(2))][_160 & 3];
    uint _164 = uint(int(uint(_110) >> uint(2)));
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
    float _190 = _39.y;
    float _192 = _33.z;
    uint _194 = uint(int(uint(_79 + (-8)) >> uint(2)));
    float _196 = vp_c8_1._m0[int(uint(int(_194)) >> uint(2))][int(_194) & 3];
    int _198 = int(_194) + 1;
    float _200 = _37.z;
    float _202 = _39.z;
    uint _204 = uint(int(uint(_100 + (-24)) >> uint(2)));
    float _206 = vp_c8_1._m0[int(uint(int(_204)) >> uint(2))][int(_204) & 3];
    int _208 = int(_204) + 1;
    uint _210 = uint(int(uint(_79 + 24) >> uint(2)));
    float _212 = vp_c8_1._m0[int(uint(int(_210)) >> uint(2))][int(_210) & 3];
    int _214 = int(_210) + 1;
    uint _216 = uint(int(uint(_120 + 24) >> uint(2)));
    float _218 = vp_c8_1._m0[int(uint(int(_216)) >> uint(2))][int(_216) & 3];
    int _220 = int(_216) + 1;
    uint _222 = uint(int(uint(_79 + 8) >> uint(2)));
    float _224 = vp_c8_1._m0[int(uint(int(_222)) >> uint(2))][int(_222) & 3];
    int _226 = int(_222) + 1;
    uint _228 = uint(int(uint(_100 + (-8)) >> uint(2)));
    float _230 = vp_c8_1._m0[int(uint(int(_228)) >> uint(2))][int(_228) & 3];
    int _232 = int(_228) + 1;
    uint _234 = uint(int(uint(_110 + 8) >> uint(2)));
    float _236 = vp_c8_1._m0[int(uint(int(_234)) >> uint(2))][int(_234) & 3];
    int _238 = int(_234) + 1;
    uint _240 = uint(int(uint(_100 + 8) >> uint(2)));
    float _242 = vp_c8_1._m0[int(uint(int(_240)) >> uint(2))][int(_240) & 3];
    int _244 = int(_240) + 1;
    uint _246 = uint(int(uint(_110 + 24) >> uint(2)));
    float _248 = vp_c8_1._m0[int(uint(int(_246)) >> uint(2))][int(_246) & 3];
    int _250 = int(_246) + 1;
    uint _252 = uint(int(uint(_110 + 40) >> uint(2)));
    float _254 = vp_c8_1._m0[int(uint(int(_252)) >> uint(2))][int(_252) & 3];
    int _256 = int(_252) + 1;
    uint _258 = uint(int(uint(_120 + 8) >> uint(2)));
    float _260 = vp_c8_1._m0[int(uint(int(_258)) >> uint(2))][int(_258) & 3];
    int _262 = int(_258) + 1;
    uint _264 = uint(int(uint(_120 + 40) >> uint(2)));
    float _266 = vp_c8_1._m0[int(uint(int(_264)) >> uint(2))][int(_264) & 3];
    int _268 = int(_264) + 1;
    float _270 = _41.y;
    float _272 = _41.x;
    float _274 = _41.z;
    float _276 = _41.w;
    _43.x = fma(_138, vp_c5_1._m0[111].x, _72 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _43.y = fma(_138, vp_c5_1._m0[111].y, _72 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _278 = fma(vp_c8_1._m0[int(uint(_262) >> uint(2))][_262 & 3] + fma(_260, _192, fma(_162, _81, _158 * _70)), _276, fma(vp_c8_1._m0[int(uint(_238) >> uint(2))][_238 & 3] + fma(_236, _192, fma(_170, _81, _166 * _70)), _274, fma(vp_c8_1._m0[int(uint(_208) >> uint(2))][_208 & 3] + fma(_206, _192, fma(_136, _81, _132 * _70)), _272, (vp_c8_1._m0[int(uint(_198) >> uint(2))][_198 & 3] + fma(_196, _192, fma(_90, _81, _86 * _70))) * _270)));
    _45.x = _278;
    _47.w = _39.w;
    float _280 = fma(fma(_260, _200, fma(_162, _188, _158 * _74)), _276, fma(fma(_236, _200, fma(_170, _188, _166 * _74)), _274, fma(fma(_206, _200, fma(_136, _188, _132 * _74)), _272, fma(_196, _200, fma(_90, _188, _86 * _74)) * _270)));
    float _282 = fma(vp_c8_1._m0[int(uint(_220) >> uint(2))][_220 & 3] + fma(_218, _192, fma(_178, _81, _174 * _70)), _276, fma(vp_c8_1._m0[int(uint(_250) >> uint(2))][_250 & 3] + fma(_248, _192, fma(_146, _81, _142 * _70)), _274, fma(vp_c8_1._m0[int(uint(_232) >> uint(2))][_232 & 3] + fma(_230, _192, fma(_118, _81, _114 * _70)), _272, (vp_c8_1._m0[int(uint(_226) >> uint(2))][_226 & 3] + fma(_224, _192, fma(_108, _81, _104 * _70))) * _270)));
    _45.y = _282;
    float _284 = fma(fma(_218, _200, fma(_178, _188, _174 * _74)), _276, fma(fma(_248, _200, fma(_146, _188, _142 * _74)), _274, fma(fma(_230, _200, fma(_118, _188, _114 * _74)), _272, fma(_224, _200, fma(_108, _188, _104 * _74)) * _270)));
    float _286 = fma(fma(_260, _202, fma(_162, _190, _158 * _76)), _276, fma(fma(_236, _202, fma(_170, _190, _166 * _76)), _274, fma(fma(_206, _202, fma(_136, _190, _132 * _76)), _272, fma(_196, _202, fma(_90, _190, _86 * _76)) * _270)));
    float _288 = fma(vp_c8_1._m0[int(uint(_268) >> uint(2))][_268 & 3] + fma(_266, _192, fma(_186, _81, _182 * _70)), _276, fma(vp_c8_1._m0[int(uint(_256) >> uint(2))][_256 & 3] + fma(_254, _192, fma(_154, _81, _150 * _70)), _274, fma(vp_c8_1._m0[int(uint(_244) >> uint(2))][_244 & 3] + fma(_242, _192, fma(_128, _81, _124 * _70)), _272, (vp_c8_1._m0[int(uint(_214) >> uint(2))][_214 & 3] + fma(_212, _192, fma(_98, _81, _94 * _70))) * _270)));
    _45.z = _288;
    float _290 = fma(fma(_218, _202, fma(_178, _190, _174 * _76)), _276, fma(fma(_248, _202, fma(_146, _190, _142 * _76)), _274, fma(fma(_230, _202, fma(_118, _190, _114 * _76)), _272, fma(_224, _202, fma(_108, _190, _104 * _76)) * _270)));
    _49.y = _282 + (-vp_c3_1._m0[12].w);
    _49.x = _278 + (-vp_c3_1._m0[11].w);
    float _292 = fma(fma(_266, _202, fma(_186, _190, _182 * _76)), _276, fma(fma(_254, _202, fma(_154, _190, _150 * _76)), _274, fma(fma(_242, _202, fma(_128, _190, _124 * _76)), _272, fma(_212, _202, fma(_98, _190, _94 * _76)) * _270)));
    _49.z = _288 + (-vp_c3_1._m0[13].w);
    _51.z = fma(_288, vp_c3_1._m0[37].z, fma(_282, vp_c3_1._m0[37].y, _278 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _294 = fma(fma(_266, _200, fma(_186, _188, _182 * _74)), _276, fma(fma(_254, _200, fma(_154, _188, _150 * _74)), _274, fma(fma(_242, _200, fma(_128, _188, _124 * _74)), _272, fma(_212, _200, fma(_98, _188, _94 * _74)) * _270)));
    float _296 = inversesqrt(fma(_292, _292, fma(_290, _290, _286 * _286)));
    float _298 = inversesqrt(fma(_294, _294, fma(_284, _284, _280 * _280)));
    float _300 = fma(_288, vp_c3_1._m0[0].z, fma(_282, vp_c3_1._m0[0].y, _278 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _47.x = _286 * _296;
    _47.y = _290 * _296;
    _47.z = _292 * _296;
    _51.x = fma(_288, vp_c3_1._m0[35].z, fma(_282, vp_c3_1._m0[35].y, _278 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _302 = fma(_288, vp_c3_1._m0[1].z, fma(_282, vp_c3_1._m0[1].y, _278 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _304 = fma(_288, vp_c3_1._m0[2].z, fma(_282, vp_c3_1._m0[2].y, _278 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _45.w = _304;
    _53.x = _280 * _298;
    _53.y = _284 * _298;
    _51.y = fma(_288, vp_c3_1._m0[36].z, fma(_282, vp_c3_1._m0[36].y, _278 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _53.z = _294 * _298;
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


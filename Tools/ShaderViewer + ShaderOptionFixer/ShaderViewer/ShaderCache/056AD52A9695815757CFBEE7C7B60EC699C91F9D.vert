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
layout(location = 11) in vec4 _35;
layout(location = 0) in vec4 _37;
layout(location = 1) in vec4 _39;
layout(location = 2) in vec4 _41;
layout(location = 4) in vec4 _43;
layout(location = 0) out vec4 _45;
layout(location = 1) out vec4 _47;
layout(location = 3) out vec4 _49;
layout(location = 4) out vec4 _51;
layout(location = 5) out vec4 _53;
layout(location = 7) out vec4 _55;
layout(location = 2) out vec4 _57;
layout(location = 6) out vec4 _59;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _66 = _31.y;
    float _68 = _31.x;
    float _70 = _31.z;
    float _72 = _33.y;
    float _74 = _35.y;
    float _76 = _33.x;
    float _78 = _35.x;
    float _80 = _37.x;
    int _83 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_66) & 65535) * 48);
    float _85 = _39.x;
    uint _88 = uint(int(uint(_83) >> uint(2)));
    float _90 = vp_c8_1._m0[int(uint(int(_88)) >> uint(2))][int(_88) & 3];
    int _92 = int(_88) + 1;
    float _94 = vp_c8_1._m0[int(uint(_92) >> uint(2))][_92 & 3];
    int _96 = ((int(uint(floatBitsToInt(_68)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_68) & 65535) * 48);
    uint _98 = uint(int(uint(_83 + 16) >> uint(2)));
    float _100 = vp_c8_1._m0[int(uint(int(_98)) >> uint(2))][int(_98) & 3];
    int _102 = int(_98) + 1;
    float _104 = vp_c8_1._m0[int(uint(_102) >> uint(2))][_102 & 3];
    int _106 = ((int(uint(floatBitsToInt(_70)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_70) & 65535) * 48);
    uint _108 = uint(int(uint(_96) >> uint(2)));
    float _110 = vp_c8_1._m0[int(uint(int(_108)) >> uint(2))][int(_108) & 3];
    int _112 = int(_108) + 1;
    float _114 = vp_c8_1._m0[int(uint(_112) >> uint(2))][_112 & 3];
    uint _116 = uint(int(uint(_96 + 16) >> uint(2)));
    float _118 = vp_c8_1._m0[int(uint(int(_116)) >> uint(2))][int(_116) & 3];
    int _120 = int(_116) + 1;
    float _122 = vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3];
    uint _124 = uint(int(uint(_83 + 32) >> uint(2)));
    float _126 = vp_c8_1._m0[int(uint(int(_124)) >> uint(2))][int(_124) & 3];
    int _128 = int(_124) + 1;
    float _130 = vp_c8_1._m0[int(uint(_128) >> uint(2))][_128 & 3];
    uint _132 = uint(int(uint(_96 + 32) >> uint(2)));
    float _134 = vp_c8_1._m0[int(uint(int(_132)) >> uint(2))][int(_132) & 3];
    int _136 = int(_132) + 1;
    float _138 = vp_c8_1._m0[int(uint(_136) >> uint(2))][_136 & 3];
    uint _140 = uint(int(uint(_106) >> uint(2)));
    float _142 = vp_c8_1._m0[int(uint(int(_140)) >> uint(2))][int(_140) & 3];
    int _144 = int(_140) + 1;
    float _146 = vp_c8_1._m0[int(uint(_144) >> uint(2))][_144 & 3];
    uint _148 = uint(int(uint(_106 + 16) >> uint(2)));
    float _150 = vp_c8_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    float _154 = vp_c8_1._m0[int(uint(_152) >> uint(2))][_152 & 3];
    uint _156 = uint(int(uint(_106 + 32) >> uint(2)));
    float _158 = vp_c8_1._m0[int(uint(int(_156)) >> uint(2))][int(_156) & 3];
    int _160 = int(_156) + 1;
    float _162 = vp_c8_1._m0[int(uint(_160) >> uint(2))][_160 & 3];
    float _164 = _41.x;
    float _166 = _37.y;
    float _168 = _39.y;
    float _170 = _41.y;
    uint _172 = uint(int(uint(_96 + 8) >> uint(2)));
    float _174 = vp_c8_1._m0[int(uint(int(_172)) >> uint(2))][int(_172) & 3];
    int _176 = int(_172) + 1;
    uint _178 = uint(int(uint(_96 + 24) >> uint(2)));
    float _180 = vp_c8_1._m0[int(uint(int(_178)) >> uint(2))][int(_178) & 3];
    int _182 = int(_178) + 1;
    uint _184 = uint(int(uint(_83 + 8) >> uint(2)));
    float _186 = vp_c8_1._m0[int(uint(int(_184)) >> uint(2))][int(_184) & 3];
    int _188 = int(_184) + 1;
    uint _190 = uint(int(uint(_106 + 8) >> uint(2)));
    float _192 = vp_c8_1._m0[int(uint(int(_190)) >> uint(2))][int(_190) & 3];
    int _194 = int(_190) + 1;
    uint _196 = uint(int(uint(_106 + 24) >> uint(2)));
    float _198 = vp_c8_1._m0[int(uint(int(_196)) >> uint(2))][int(_196) & 3];
    int _200 = int(_196) + 1;
    uint _202 = uint(int(uint(_83 + 40) >> uint(2)));
    float _204 = vp_c8_1._m0[int(uint(int(_202)) >> uint(2))][int(_202) & 3];
    int _206 = int(_202) + 1;
    uint _208 = uint(int(uint(_96 + 40) >> uint(2)));
    float _210 = vp_c8_1._m0[int(uint(int(_208)) >> uint(2))][int(_208) & 3];
    int _212 = int(_208) + 1;
    uint _214 = uint(int(uint(_106 + 40) >> uint(2)));
    float _216 = vp_c8_1._m0[int(uint(int(_214)) >> uint(2))][int(_214) & 3];
    int _218 = int(_214) + 1;
    uint _220 = uint(int(uint(_83 + 24) >> uint(2)));
    float _222 = vp_c8_1._m0[int(uint(int(_220)) >> uint(2))][int(_220) & 3];
    int _224 = int(_220) + 1;
    float _226 = _37.z;
    float _228 = _39.z;
    float _230 = _41.z;
    float _232 = _43.y;
    float _234 = _43.x;
    float _236 = _43.z;
    _45.x = fma(_76, vp_c5_1._m0[111].x, _72 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _45.y = fma(_76, vp_c5_1._m0[111].y, _72 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _47.x = fma(_78, vp_c5_1._m0[115].x, _74 * vp_c5_1._m0[115].z) + vp_c5_1._m0[116].x;
    _47.y = fma(_78, vp_c5_1._m0[115].y, _74 * vp_c5_1._m0[115].w) + vp_c5_1._m0[116].y;
    _49.w = _41.w;
    float _238 = fma(fma(_192, _230, fma(_146, _170, _142 * _164)), _236, fma(fma(_174, _230, fma(_114, _170, _110 * _164)), _234, fma(_186, _230, fma(_94, _170, _90 * _164)) * _232));
    float _240 = fma(vp_c8_1._m0[int(uint(_194) >> uint(2))][_194 & 3] + fma(_192, _226, fma(_146, _166, _142 * _80)), _236, fma(vp_c8_1._m0[int(uint(_176) >> uint(2))][_176 & 3] + fma(_174, _226, fma(_114, _166, _110 * _80)), _234, (vp_c8_1._m0[int(uint(_188) >> uint(2))][_188 & 3] + fma(_186, _226, fma(_94, _166, _90 * _80))) * _232));
    float _242 = fma(fma(_192, _228, fma(_146, _168, _142 * _85)), _236, fma(fma(_174, _228, fma(_114, _168, _110 * _85)), _234, fma(_186, _228, fma(_94, _168, _90 * _85)) * _232));
    _51.x = _240;
    float _244 = fma(fma(_198, _228, fma(_154, _168, _150 * _85)), _236, fma(fma(_180, _228, fma(_122, _168, _118 * _85)), _234, fma(_222, _228, fma(_104, _168, _100 * _85)) * _232));
    float _246 = fma(fma(_216, _228, fma(_162, _168, _158 * _85)), _236, fma(fma(_210, _228, fma(_138, _168, _134 * _85)), _234, fma(_204, _228, fma(_130, _168, _126 * _85)) * _232));
    float _248 = fma(fma(_198, _230, fma(_154, _170, _150 * _164)), _236, fma(fma(_180, _230, fma(_122, _170, _118 * _164)), _234, fma(_222, _230, fma(_104, _170, _100 * _164)) * _232));
    float _250 = fma(fma(_216, _230, fma(_162, _170, _158 * _164)), _236, fma(fma(_210, _230, fma(_138, _170, _134 * _164)), _234, fma(_204, _230, fma(_130, _170, _126 * _164)) * _232));
    float _252 = fma(vp_c8_1._m0[int(uint(_200) >> uint(2))][_200 & 3] + fma(_198, _226, fma(_154, _166, _150 * _80)), _236, fma(vp_c8_1._m0[int(uint(_182) >> uint(2))][_182 & 3] + fma(_180, _226, fma(_122, _166, _118 * _80)), _234, (vp_c8_1._m0[int(uint(_224) >> uint(2))][_224 & 3] + fma(_222, _226, fma(_104, _166, _100 * _80))) * _232));
    float _254 = fma(vp_c8_1._m0[int(uint(_218) >> uint(2))][_218 & 3] + fma(_216, _226, fma(_162, _166, _158 * _80)), _236, fma(vp_c8_1._m0[int(uint(_212) >> uint(2))][_212 & 3] + fma(_210, _226, fma(_138, _166, _134 * _80)), _234, (vp_c8_1._m0[int(uint(_206) >> uint(2))][_206 & 3] + fma(_204, _226, fma(_130, _166, _126 * _80))) * _232));
    _51.y = _252;
    _51.z = _254;
    _53.y = _252 + (-vp_c3_1._m0[12].w);
    _53.x = _240 + (-vp_c3_1._m0[11].w);
    _53.z = _254 + (-vp_c3_1._m0[13].w);
    float _256 = inversesqrt(fma(_250, _250, fma(_248, _248, _238 * _238)));
    _55.x = fma(_254, vp_c3_1._m0[35].z, fma(_252, vp_c3_1._m0[35].y, _240 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _258 = inversesqrt(fma(_246, _246, fma(_244, _244, _242 * _242)));
    float _260 = fma(_254, vp_c3_1._m0[0].z, fma(_252, vp_c3_1._m0[0].y, _240 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _49.y = _248 * _256;
    float _262 = fma(_254, vp_c3_1._m0[1].z, fma(_252, vp_c3_1._m0[1].y, _240 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _264 = _242 * _258;
    float _266 = _244 * _258;
    _57.x = _264;
    _57.y = _266;
    float _268 = _246 * _258;
    _57.z = _268;
    _55.y = fma(_254, vp_c3_1._m0[36].z, fma(_252, vp_c3_1._m0[36].y, _240 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _270 = fma(_254, vp_c3_1._m0[2].z, fma(_252, vp_c3_1._m0[2].y, _240 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _51.w = _270;
    _55.z = fma(_254, vp_c3_1._m0[37].z, fma(_252, vp_c3_1._m0[37].y, _240 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _272 = fma(fma(_268, vp_c3_1._m0[1].z, fma(_266, vp_c3_1._m0[1].y, _264 * vp_c3_1._m0[1].x)), -0.5, 0.5);
    _49.x = _238 * _256;
    _49.z = _250 * _256;
    gl_Position.z = fma(_270, vp_c3_1._m0[9].z, fma(_262, vp_c3_1._m0[9].y, _260 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _274 = fma(fma(_268, vp_c3_1._m0[0].z, fma(_266, vp_c3_1._m0[0].y, _264 * vp_c3_1._m0[0].x)), 0.5, 0.5);
    float _276 = fma(_270, vp_c3_1._m0[8].z, fma(_262, vp_c3_1._m0[8].y, _260 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    float _278 = fma(_270, vp_c3_1._m0[7].z, fma(_262, vp_c3_1._m0[7].y, _260 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _276;
    float _280 = fma(_270, vp_c3_1._m0[10].z, fma(_262, vp_c3_1._m0[10].y, _260 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _59.y = _276;
    gl_Position.x = _278;
    _59.x = _278;
    gl_Position.w = _280;
    _59.w = _280;
    _45.z = fma(_274, vp_c5_1._m0[113].x, _272 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _45.w = fma(_274, vp_c5_1._m0[113].y, _272 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
}


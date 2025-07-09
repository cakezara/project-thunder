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
layout(location = 1) in vec4 _35;
layout(location = 0) in vec4 _37;
layout(location = 2) in vec4 _39;
layout(location = 4) in vec4 _41;
layout(location = 4) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 0) out vec4 _47;
layout(location = 2) out vec4 _49;
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
    float _68 = _33.y;
    float _70 = _33.x;
    float _72 = _35.x;
    float _74 = _37.x;
    float _76 = _39.x;
    int _79 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_62) & 65535) * 48);
    float _81 = _35.y;
    uint _84 = uint(int(uint(_79 + 16) >> uint(2)));
    float _86 = vp_c8_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    int _92 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_64) & 65535) * 48);
    uint _94 = uint(int(uint(_79) >> uint(2)));
    float _96 = vp_c8_1._m0[int(uint(int(_94)) >> uint(2))][int(_94) & 3];
    int _98 = int(_94) + 1;
    float _100 = vp_c8_1._m0[int(uint(_98) >> uint(2))][_98 & 3];
    int _102 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_66) & 65535) * 48);
    uint _104 = uint(int(uint(_92) >> uint(2)));
    float _106 = vp_c8_1._m0[int(uint(int(_104)) >> uint(2))][int(_104) & 3];
    int _108 = int(_104) + 1;
    float _110 = vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3];
    uint _112 = uint(int(uint(_92 + 16) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    float _118 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3];
    uint _120 = uint(int(uint(_79 + 32) >> uint(2)));
    float _122 = vp_c8_1._m0[int(uint(int(_120)) >> uint(2))][int(_120) & 3];
    int _124 = int(_120) + 1;
    float _126 = vp_c8_1._m0[int(uint(_124) >> uint(2))][_124 & 3];
    uint _128 = uint(int(uint(_92 + 32) >> uint(2)));
    float _130 = vp_c8_1._m0[int(uint(int(_128)) >> uint(2))][int(_128) & 3];
    int _132 = int(_128) + 1;
    float _134 = vp_c8_1._m0[int(uint(_132) >> uint(2))][_132 & 3];
    uint _136 = uint(int(uint(_102) >> uint(2)));
    float _138 = vp_c8_1._m0[int(uint(int(_136)) >> uint(2))][int(_136) & 3];
    int _140 = int(_136) + 1;
    float _142 = vp_c8_1._m0[int(uint(_140) >> uint(2))][_140 & 3];
    uint _144 = uint(int(uint(_102 + 16) >> uint(2)));
    float _146 = vp_c8_1._m0[int(uint(int(_144)) >> uint(2))][int(_144) & 3];
    int _148 = int(_144) + 1;
    float _150 = vp_c8_1._m0[int(uint(_148) >> uint(2))][_148 & 3];
    uint _152 = uint(int(uint(_102 + 32) >> uint(2)));
    float _154 = vp_c8_1._m0[int(uint(int(_152)) >> uint(2))][int(_152) & 3];
    int _156 = int(_152) + 1;
    float _158 = vp_c8_1._m0[int(uint(_156) >> uint(2))][_156 & 3];
    float _160 = _37.y;
    float _162 = _39.y;
    uint _164 = uint(int(uint(_102 + 8) >> uint(2)));
    float _166 = vp_c8_1._m0[int(uint(int(_164)) >> uint(2))][int(_164) & 3];
    int _168 = int(_164) + 1;
    uint _170 = uint(int(uint(_102 + 24) >> uint(2)));
    float _172 = vp_c8_1._m0[int(uint(int(_170)) >> uint(2))][int(_170) & 3];
    int _174 = int(_170) + 1;
    uint _176 = uint(int(uint(_92 + 8) >> uint(2)));
    float _178 = vp_c8_1._m0[int(uint(int(_176)) >> uint(2))][int(_176) & 3];
    int _180 = int(_176) + 1;
    uint _182 = uint(int(uint(_79 + 8) >> uint(2)));
    float _184 = vp_c8_1._m0[int(uint(int(_182)) >> uint(2))][int(_182) & 3];
    int _186 = int(_182) + 1;
    uint _188 = uint(int(uint(_79 + 24) >> uint(2)));
    float _190 = vp_c8_1._m0[int(uint(int(_188)) >> uint(2))][int(_188) & 3];
    int _192 = int(_188) + 1;
    uint _194 = uint(int(uint(_92 + 24) >> uint(2)));
    float _196 = vp_c8_1._m0[int(uint(int(_194)) >> uint(2))][int(_194) & 3];
    int _198 = int(_194) + 1;
    uint _200 = uint(int(uint(_79 + 40) >> uint(2)));
    float _202 = vp_c8_1._m0[int(uint(int(_200)) >> uint(2))][int(_200) & 3];
    int _204 = int(_200) + 1;
    uint _206 = uint(int(uint(_92 + 40) >> uint(2)));
    float _208 = vp_c8_1._m0[int(uint(int(_206)) >> uint(2))][int(_206) & 3];
    int _210 = int(_206) + 1;
    uint _212 = uint(int(uint(_102 + 40) >> uint(2)));
    float _214 = vp_c8_1._m0[int(uint(int(_212)) >> uint(2))][int(_212) & 3];
    int _216 = int(_212) + 1;
    float _218 = _37.z;
    float _220 = _35.z;
    float _222 = _39.z;
    float _224 = _41.y;
    float _226 = _41.x;
    float _228 = _41.z;
    float _230 = fma(fma(_166, _220, fma(_142, _81, _138 * _72)), _228, fma(fma(_178, _220, fma(_110, _81, _106 * _72)), _226, fma(_184, _220, fma(_100, _81, _96 * _72)) * _224));
    float _232 = fma(vp_c8_1._m0[int(uint(_168) >> uint(2))][_168 & 3] + fma(_166, _218, fma(_142, _160, _138 * _74)), _228, fma(vp_c8_1._m0[int(uint(_180) >> uint(2))][_180 & 3] + fma(_178, _218, fma(_110, _160, _106 * _74)), _226, (vp_c8_1._m0[int(uint(_186) >> uint(2))][_186 & 3] + fma(_184, _218, fma(_100, _160, _96 * _74))) * _224));
    float _234 = fma(fma(_172, _220, fma(_150, _81, _146 * _72)), _228, fma(fma(_196, _220, fma(_118, _81, _114 * _72)), _226, fma(_190, _220, fma(_90, _81, _86 * _72)) * _224));
    float _236 = fma(vp_c8_1._m0[int(uint(_174) >> uint(2))][_174 & 3] + fma(_172, _218, fma(_150, _160, _146 * _74)), _228, fma(vp_c8_1._m0[int(uint(_198) >> uint(2))][_198 & 3] + fma(_196, _218, fma(_118, _160, _114 * _74)), _226, (vp_c8_1._m0[int(uint(_192) >> uint(2))][_192 & 3] + fma(_190, _218, fma(_90, _160, _86 * _74))) * _224));
    float _238 = fma(fma(_214, _220, fma(_158, _81, _154 * _72)), _228, fma(fma(_208, _220, fma(_134, _81, _130 * _72)), _226, fma(_202, _220, fma(_126, _81, _122 * _72)) * _224));
    float _240 = fma(vp_c8_1._m0[int(uint(_216) >> uint(2))][_216 & 3] + fma(_214, _218, fma(_158, _160, _154 * _74)), _228, fma(vp_c8_1._m0[int(uint(_210) >> uint(2))][_210 & 3] + fma(_208, _218, fma(_134, _160, _130 * _74)), _226, (vp_c8_1._m0[int(uint(_204) >> uint(2))][_204 & 3] + fma(_202, _218, fma(_126, _160, _122 * _74))) * _224));
    _43.x = _232 + (-vp_c3_1._m0[11].w);
    _45.x = _232;
    float _242 = inversesqrt(fma(_238, _238, fma(_234, _234, _230 * _230)));
    _45.z = _240;
    _43.y = _236 + (-vp_c3_1._m0[12].w);
    _47.x = fma(_70, vp_c5_1._m0[111].x, _68 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _49.w = _39.w;
    _47.y = fma(_70, vp_c5_1._m0[111].y, _68 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _51.z = fma(_240, vp_c3_1._m0[37].z, fma(_236, vp_c3_1._m0[37].y, _232 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _45.y = _236;
    _43.z = _240 + (-vp_c3_1._m0[13].w);
    float _244 = fma(fma(_166, _222, fma(_142, _162, _138 * _76)), _228, fma(fma(_178, _222, fma(_110, _162, _106 * _76)), _226, fma(_184, _222, fma(_100, _162, _96 * _76)) * _224));
    float _246 = fma(fma(_172, _222, fma(_150, _162, _146 * _76)), _228, fma(fma(_196, _222, fma(_118, _162, _114 * _76)), _226, fma(_190, _222, fma(_90, _162, _86 * _76)) * _224));
    _53.x = _230 * _242;
    _53.y = _234 * _242;
    float _248 = fma(_240, vp_c3_1._m0[0].z, fma(_236, vp_c3_1._m0[0].y, _232 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _53.z = _238 * _242;
    _51.y = fma(_240, vp_c3_1._m0[36].z, fma(_236, vp_c3_1._m0[36].y, _232 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _250 = fma(fma(_214, _222, fma(_158, _162, _154 * _76)), _228, fma(fma(_208, _222, fma(_134, _162, _130 * _76)), _226, fma(_202, _222, fma(_126, _162, _122 * _76)) * _224));
    float _252 = fma(_240, vp_c3_1._m0[1].z, fma(_236, vp_c3_1._m0[1].y, _232 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _254 = inversesqrt(fma(_250, _250, fma(_246, _246, _244 * _244)));
    float _256 = fma(_240, vp_c3_1._m0[2].z, fma(_236, vp_c3_1._m0[2].y, _232 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _45.w = _256;
    _51.x = fma(_240, vp_c3_1._m0[35].z, fma(_236, vp_c3_1._m0[35].y, _232 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _49.x = _244 * _254;
    _49.y = _246 * _254;
    _49.z = _250 * _254;
    float _258 = fma(_256, vp_c3_1._m0[8].z, fma(_252, vp_c3_1._m0[8].y, _248 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_256, vp_c3_1._m0[9].z, fma(_252, vp_c3_1._m0[9].y, _248 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _260 = fma(_256, vp_c3_1._m0[7].z, fma(_252, vp_c3_1._m0[7].y, _248 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _258;
    float _262 = fma(_256, vp_c3_1._m0[10].z, fma(_252, vp_c3_1._m0[10].y, _248 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _55.y = _258;
    gl_Position.x = _260;
    _55.x = _260;
    gl_Position.w = _262;
    _55.w = _262;
}


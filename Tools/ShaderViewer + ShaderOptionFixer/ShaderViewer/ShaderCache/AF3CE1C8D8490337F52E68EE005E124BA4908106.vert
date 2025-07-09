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
layout(location = 2) in vec4 _39;
layout(location = 4) in vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 2) out vec4 _45;
layout(location = 3) out vec4 _47;
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
    float _68 = _33.y;
    float _70 = _35.x;
    float _72 = _37.x;
    float _74 = _39.x;
    float _76 = _33.x;
    int _79 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_62) & 65535) * 48);
    float _81 = _35.y;
    uint _84 = uint(int(uint(_79) >> uint(2)));
    float _86 = vp_c8_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    int _92 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_64) & 65535) * 48);
    uint _94 = uint(int(uint(_79 + 16) >> uint(2)));
    float _96 = vp_c8_1._m0[int(uint(int(_94)) >> uint(2))][int(_94) & 3];
    int _98 = int(_94) + 1;
    float _100 = vp_c8_1._m0[int(uint(_98) >> uint(2))][_98 & 3];
    int _102 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_66) & 65535) * 48);
    uint _104 = uint(int(uint(_92 + 16) >> uint(2)));
    float _106 = vp_c8_1._m0[int(uint(int(_104)) >> uint(2))][int(_104) & 3];
    int _108 = int(_104) + 1;
    float _110 = vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3];
    uint _112 = uint(int(uint(_79 + 32) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    float _118 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3];
    uint _120 = uint(int(uint(_92) >> uint(2)));
    float _122 = vp_c8_1._m0[int(uint(int(_120)) >> uint(2))][int(_120) & 3];
    int _124 = int(_120) + 1;
    float _126 = vp_c8_1._m0[int(uint(_124) >> uint(2))][_124 & 3];
    uint _128 = uint(int(uint(_92 + 32) >> uint(2)));
    float _130 = vp_c8_1._m0[int(uint(int(_128)) >> uint(2))][int(_128) & 3];
    int _132 = int(_128) + 1;
    float _134 = vp_c8_1._m0[int(uint(_132) >> uint(2))][_132 & 3];
    uint _136 = uint(int(uint(_102 + 16) >> uint(2)));
    float _138 = vp_c8_1._m0[int(uint(int(_136)) >> uint(2))][int(_136) & 3];
    int _140 = int(_136) + 1;
    float _142 = vp_c8_1._m0[int(uint(_140) >> uint(2))][_140 & 3];
    uint _144 = uint(int(uint(_102) >> uint(2)));
    float _146 = vp_c8_1._m0[int(uint(int(_144)) >> uint(2))][int(_144) & 3];
    int _148 = int(_144) + 1;
    float _150 = vp_c8_1._m0[int(uint(_148) >> uint(2))][_148 & 3];
    uint _152 = uint(int(uint(_102 + 32) >> uint(2)));
    float _154 = vp_c8_1._m0[int(uint(int(_152)) >> uint(2))][int(_152) & 3];
    int _156 = int(_152) + 1;
    float _158 = vp_c8_1._m0[int(uint(_156) >> uint(2))][_156 & 3];
    float _160 = _37.y;
    float _162 = _39.y;
    uint _164 = uint(int(uint(_79 + 24) >> uint(2)));
    float _166 = vp_c8_1._m0[int(uint(int(_164)) >> uint(2))][int(_164) & 3];
    int _168 = int(_164) + 1;
    float _170 = _35.z;
    uint _172 = uint(int(uint(_92 + 8) >> uint(2)));
    float _174 = vp_c8_1._m0[int(uint(int(_172)) >> uint(2))][int(_172) & 3];
    int _176 = int(_172) + 1;
    float _178 = _37.z;
    uint _180 = uint(int(uint(_79 + 8) >> uint(2)));
    float _182 = vp_c8_1._m0[int(uint(int(_180)) >> uint(2))][int(_180) & 3];
    int _184 = int(_180) + 1;
    uint _186 = uint(int(uint(_92 + 24) >> uint(2)));
    float _188 = vp_c8_1._m0[int(uint(int(_186)) >> uint(2))][int(_186) & 3];
    int _190 = int(_186) + 1;
    uint _192 = uint(int(uint(_92 + 40) >> uint(2)));
    float _194 = vp_c8_1._m0[int(uint(int(_192)) >> uint(2))][int(_192) & 3];
    int _196 = int(_192) + 1;
    uint _198 = uint(int(uint(_79 + 40) >> uint(2)));
    float _200 = vp_c8_1._m0[int(uint(int(_198)) >> uint(2))][int(_198) & 3];
    int _202 = int(_198) + 1;
    uint _204 = uint(int(uint(_102 + 8) >> uint(2)));
    float _206 = vp_c8_1._m0[int(uint(int(_204)) >> uint(2))][int(_204) & 3];
    int _208 = int(_204) + 1;
    float _210 = _39.z;
    uint _212 = uint(int(uint(_102 + 40) >> uint(2)));
    float _214 = vp_c8_1._m0[int(uint(int(_212)) >> uint(2))][int(_212) & 3];
    int _216 = int(_212) + 1;
    uint _218 = uint(int(uint(_102 + 24) >> uint(2)));
    float _220 = vp_c8_1._m0[int(uint(int(_218)) >> uint(2))][int(_218) & 3];
    int _222 = int(_218) + 1;
    float _224 = _41.y;
    float _226 = _41.x;
    float _228 = _41.z;
    _43.x = fma(_76, vp_c5_1._m0[111].x, _68 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _43.y = fma(_76, vp_c5_1._m0[111].y, _68 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _45.w = _39.w;
    float _230 = fma(fma(_206, _178, fma(_150, _160, _146 * _72)), _228, fma(fma(_174, _178, fma(_126, _160, _122 * _72)), _226, fma(_182, _178, fma(_90, _160, _86 * _72)) * _224));
    float _232 = fma(vp_c8_1._m0[int(uint(_208) >> uint(2))][_208 & 3] + fma(_206, _170, fma(_150, _81, _146 * _70)), _228, fma(vp_c8_1._m0[int(uint(_176) >> uint(2))][_176 & 3] + fma(_174, _170, fma(_126, _81, _122 * _70)), _226, (vp_c8_1._m0[int(uint(_184) >> uint(2))][_184 & 3] + fma(_182, _170, fma(_90, _81, _86 * _70))) * _224));
    float _234 = fma(fma(_220, _178, fma(_142, _160, _138 * _72)), _228, fma(fma(_188, _178, fma(_110, _160, _106 * _72)), _226, fma(_166, _178, fma(_100, _160, _96 * _72)) * _224));
    _47.x = _232;
    float _236 = fma(fma(_206, _210, fma(_150, _162, _146 * _74)), _228, fma(fma(_174, _210, fma(_126, _162, _122 * _74)), _226, fma(_182, _210, fma(_90, _162, _86 * _74)) * _224));
    float _238 = fma(fma(_220, _210, fma(_142, _162, _138 * _74)), _228, fma(fma(_188, _210, fma(_110, _162, _106 * _74)), _226, fma(_166, _210, fma(_100, _162, _96 * _74)) * _224));
    float _240 = fma(vp_c8_1._m0[int(uint(_222) >> uint(2))][_222 & 3] + fma(_220, _170, fma(_142, _81, _138 * _70)), _228, fma(vp_c8_1._m0[int(uint(_190) >> uint(2))][_190 & 3] + fma(_188, _170, fma(_110, _81, _106 * _70)), _226, (vp_c8_1._m0[int(uint(_168) >> uint(2))][_168 & 3] + fma(_166, _170, fma(_100, _81, _96 * _70))) * _224));
    _47.y = _240;
    float _242 = fma(fma(_214, _210, fma(_158, _162, _154 * _74)), _228, fma(fma(_194, _210, fma(_134, _162, _130 * _74)), _226, fma(_200, _210, fma(_118, _162, _114 * _74)) * _224));
    float _244 = fma(fma(_214, _178, fma(_158, _160, _154 * _72)), _228, fma(fma(_194, _178, fma(_134, _160, _130 * _72)), _226, fma(_200, _178, fma(_118, _160, _114 * _72)) * _224));
    _49.x = _232 + (-vp_c3_1._m0[11].w);
    float _246 = fma(vp_c8_1._m0[int(uint(_216) >> uint(2))][_216 & 3] + fma(_214, _170, fma(_158, _81, _154 * _70)), _228, fma(vp_c8_1._m0[int(uint(_196) >> uint(2))][_196 & 3] + fma(_194, _170, fma(_134, _81, _130 * _70)), _226, (vp_c8_1._m0[int(uint(_202) >> uint(2))][_202 & 3] + fma(_200, _170, fma(_118, _81, _114 * _70))) * _224));
    _47.z = _246;
    _49.y = _240 + (-vp_c3_1._m0[12].w);
    _51.z = fma(_246, vp_c3_1._m0[37].z, fma(_240, vp_c3_1._m0[37].y, _232 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _248 = inversesqrt(fma(_242, _242, fma(_238, _238, _236 * _236)));
    float _250 = fma(_246, vp_c3_1._m0[0].z, fma(_240, vp_c3_1._m0[0].y, _232 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _252 = inversesqrt(fma(_244, _244, fma(_234, _234, _230 * _230)));
    float _254 = fma(_246, vp_c3_1._m0[1].z, fma(_240, vp_c3_1._m0[1].y, _232 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _49.z = _246 + (-vp_c3_1._m0[13].w);
    _51.x = fma(_246, vp_c3_1._m0[35].z, fma(_240, vp_c3_1._m0[35].y, _232 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _256 = fma(_246, vp_c3_1._m0[2].z, fma(_240, vp_c3_1._m0[2].y, _232 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _47.w = _256;
    _53.x = _230 * _252;
    _53.y = _234 * _252;
    _45.x = _236 * _248;
    _45.y = _238 * _248;
    _51.y = fma(_246, vp_c3_1._m0[36].z, fma(_240, vp_c3_1._m0[36].y, _232 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _53.z = _244 * _252;
    _45.z = _242 * _248;
    float _258 = fma(_256, vp_c3_1._m0[8].z, fma(_254, vp_c3_1._m0[8].y, _250 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_256, vp_c3_1._m0[9].z, fma(_254, vp_c3_1._m0[9].y, _250 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _260 = fma(_256, vp_c3_1._m0[7].z, fma(_254, vp_c3_1._m0[7].y, _250 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _258;
    float _262 = fma(_256, vp_c3_1._m0[10].z, fma(_254, vp_c3_1._m0[10].y, _250 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _55.y = _258;
    gl_Position.x = _260;
    _55.x = _260;
    gl_Position.w = _262;
    _55.w = _262;
}


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
layout(location = 3) out vec4 _45;
layout(location = 4) out vec4 _47;
layout(location = 2) out vec4 _49;
layout(location = 1) out vec4 _51;
layout(location = 6) out vec4 _53;
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
    float _66 = _33.y;
    float _68 = _33.x;
    float _70 = _35.x;
    float _72 = _37.x;
    float _74 = _39.x;
    float _76 = _35.y;
    int _79 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_62) & 65535) * 48) + 16);
    float _81 = _37.y;
    float _83 = _39.y;
    int _85 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_64) & 65535) * 48) + 32);
    uint _88 = uint(int(uint(_79 + (-16)) >> uint(2)));
    float _90 = vp_c8_1._m0[int(uint(int(_88)) >> uint(2))][int(_88) & 3];
    int _92 = int(_88) + 1;
    float _94 = vp_c8_1._m0[int(uint(_92) >> uint(2))][_92 & 3];
    uint _96 = uint(int(uint(_79 + 16) >> uint(2)));
    float _98 = vp_c8_1._m0[int(uint(int(_96)) >> uint(2))][int(_96) & 3];
    int _100 = int(_96) + 1;
    float _102 = vp_c8_1._m0[int(uint(_100) >> uint(2))][_100 & 3];
    uint _104 = uint(int(uint(_79) >> uint(2)));
    float _106 = vp_c8_1._m0[int(uint(int(_104)) >> uint(2))][int(_104) & 3];
    int _108 = int(_104) + 1;
    float _110 = vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3];
    uint _112 = uint(int(uint(_79 + (-8)) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    uint _118 = uint(int(uint(_85) >> uint(2)));
    float _120 = vp_c8_1._m0[int(uint(int(_118)) >> uint(2))][int(_118) & 3];
    int _122 = int(_118) + 1;
    float _124 = vp_c8_1._m0[int(uint(_122) >> uint(2))][_122 & 3];
    uint _126 = uint(int(uint(_85 + (-16)) >> uint(2)));
    float _128 = vp_c8_1._m0[int(uint(int(_126)) >> uint(2))][int(_126) & 3];
    int _130 = int(_126) + 1;
    float _132 = vp_c8_1._m0[int(uint(_130) >> uint(2))][_130 & 3];
    uint _134 = uint(int(uint(_85 + (-32)) >> uint(2)));
    float _136 = vp_c8_1._m0[int(uint(int(_134)) >> uint(2))][int(_134) & 3];
    int _138 = int(_134) + 1;
    float _140 = vp_c8_1._m0[int(uint(_138) >> uint(2))][_138 & 3];
    uint _142 = uint(int(uint(_79 + 8) >> uint(2)));
    float _144 = vp_c8_1._m0[int(uint(int(_142)) >> uint(2))][int(_142) & 3];
    int _146 = int(_142) + 1;
    uint _148 = uint(int(uint(_85 + (-24)) >> uint(2)));
    float _150 = vp_c8_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    uint _154 = uint(int(uint(_79 + 24) >> uint(2)));
    float _156 = vp_c8_1._m0[int(uint(int(_154)) >> uint(2))][int(_154) & 3];
    int _158 = int(_154) + 1;
    uint _160 = uint(int(uint(_85 + (-8)) >> uint(2)));
    float _162 = vp_c8_1._m0[int(uint(int(_160)) >> uint(2))][int(_160) & 3];
    int _164 = int(_160) + 1;
    uint _166 = uint(int(uint(_85 + 8) >> uint(2)));
    float _168 = vp_c8_1._m0[int(uint(int(_166)) >> uint(2))][int(_166) & 3];
    int _170 = int(_166) + 1;
    float _172 = _35.z;
    float _174 = _41.y;
    float _176 = _37.z;
    float _178 = _39.z;
    float _180 = _41.x;
    float _182 = fma(vp_c8_1._m0[int(uint(_152) >> uint(2))][_152 & 3] + fma(_150, _172, fma(_140, _76, _136 * _70)), _180, (vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3] + fma(_114, _172, fma(_94, _76, _90 * _70))) * _174);
    float _184 = fma(vp_c8_1._m0[int(uint(_164) >> uint(2))][_164 & 3] + fma(_162, _172, fma(_132, _76, _128 * _70)), _180, (vp_c8_1._m0[int(uint(_146) >> uint(2))][_146 & 3] + fma(_144, _172, fma(_110, _76, _106 * _70))) * _174);
    float _186 = _182 + (-vp_c3_1._m0[11].w);
    float _188 = fma(vp_c8_1._m0[int(uint(_170) >> uint(2))][_170 & 3] + fma(_168, _172, fma(_124, _76, _120 * _70)), _180, (vp_c8_1._m0[int(uint(_158) >> uint(2))][_158 & 3] + fma(_156, _172, fma(_102, _76, _98 * _70))) * _174);
    _43.x = fma(_68, vp_c5_1._m0[111].x, _66 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    float _190 = _184 + (-vp_c3_1._m0[12].w);
    _45.x = _182;
    _45.y = _184;
    _45.z = _188;
    float _192 = _188 + (-vp_c3_1._m0[13].w);
    _47.x = _186;
    _49.w = _39.w;
    _47.y = _190;
    _47.z = _192;
    float _194 = inversesqrt(fma(_192, _192, fma(_190, _190, _186 * _186)));
    float _196 = fma(fma(_150, _176, fma(_140, _81, _136 * _72)), _180, fma(_114, _176, fma(_94, _81, _90 * _72)) * _174);
    float _198 = fma(fma(_162, _176, fma(_132, _81, _128 * _72)), _180, fma(_144, _176, fma(_110, _81, _106 * _72)) * _174);
    float _200 = fma(fma(_168, _176, fma(_124, _81, _120 * _72)), _180, fma(_156, _176, fma(_102, _81, _98 * _72)) * _174);
    float _202 = fma(fma(_150, _178, fma(_140, _83, _136 * _74)), _180, fma(_114, _178, fma(_94, _83, _90 * _74)) * _174);
    float _204 = fma(fma(_162, _178, fma(_132, _83, _128 * _74)), _180, fma(_144, _178, fma(_110, _83, _106 * _74)) * _174);
    float _206 = fma(fma(_168, _178, fma(_124, _83, _120 * _74)), _180, fma(_156, _178, fma(_102, _83, _98 * _74)) * _174);
    float _208 = _190 * (-_194);
    float _210 = _192 * (-_194);
    float _212 = _186 * (-_194);
    _43.y = fma(_68, vp_c5_1._m0[111].y, _66 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _214 = fma(_210, vp_c3_1._m0[12].y, -(_208 * vp_c3_1._m0[13].y));
    float _216 = fma(_212, vp_c3_1._m0[13].y, -(_210 * vp_c3_1._m0[11].y));
    float _218 = fma(_208, vp_c3_1._m0[11].y, -(_212 * vp_c3_1._m0[12].y));
    float _220 = inversesqrt(fma(_206, _206, fma(_204, _204, _202 * _202)));
    float _222 = inversesqrt(fma(_200, _200, fma(_198, _198, _196 * _196)));
    float _224 = inversesqrt(fma(_218, _218, fma(_216, _216, _214 * _214)));
    float _226 = _196 * _222;
    _49.y = _204 * _220;
    float _228 = _216 * _224;
    _51.x = _226;
    float _230 = _218 * _224;
    float _232 = _214 * _224;
    float _234 = _198 * _222;
    float _236 = _200 * _222;
    _51.y = _234;
    _51.z = _236;
    float _238 = fma(_188, vp_c3_1._m0[0].z, fma(_184, vp_c3_1._m0[0].y, _182 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _49.x = _202 * _220;
    _49.z = _206 * _220;
    float _240 = fma(_188, vp_c3_1._m0[1].z, fma(_184, vp_c3_1._m0[1].y, _182 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _242 = fma(_188, vp_c3_1._m0[2].z, fma(_184, vp_c3_1._m0[2].y, _182 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _45.w = _242;
    _53.z = fma(_188, vp_c3_1._m0[37].z, fma(_184, vp_c3_1._m0[37].y, _182 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _244 = fma(fma(fma(_212, _228, -(_208 * _232)), _236, fma(fma(_210, _232, -(_212 * _230)), _234, fma(_208, _230, -(_210 * _228)) * _226)), -0.5, 0.5);
    float _246 = fma(fma(_230, _236, fma(_228, _234, _232 * _226)), 0.5, 0.5);
    _53.y = fma(_188, vp_c3_1._m0[36].z, fma(_184, vp_c3_1._m0[36].y, _182 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _53.x = fma(_188, vp_c3_1._m0[35].z, fma(_184, vp_c3_1._m0[35].y, _182 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _248 = fma(_242, vp_c3_1._m0[10].z, fma(_240, vp_c3_1._m0[10].y, _238 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_242, vp_c3_1._m0[9].z, fma(_240, vp_c3_1._m0[9].y, _238 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _250 = fma(_242, vp_c3_1._m0[7].z, fma(_240, vp_c3_1._m0[7].y, _238 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.w = _248;
    float _252 = fma(_242, vp_c3_1._m0[8].z, fma(_240, vp_c3_1._m0[8].y, _238 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    _55.w = _248;
    gl_Position.x = _250;
    _55.x = _250;
    gl_Position.y = _252;
    _55.y = _252;
    _43.z = fma(_246, vp_c5_1._m0[113].x, _244 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _43.w = fma(_246, vp_c5_1._m0[113].y, _244 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
}


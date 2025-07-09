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
layout(location = 9) in vec4 _33;
layout(location = 0) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 4) in vec4 _39;
layout(location = 8) in vec4 _41;
layout(location = 2) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 6) out vec4 _47;
layout(location = 0) out vec4 _49;
layout(location = 1) out vec4 _51;
layout(location = 5) out vec4 _53;
layout(location = 4) out vec4 _55;

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
    float _68 = _33.x;
    float _70 = _33.y;
    float _72 = _35.x;
    int _75 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_62) & 65535) * 48);
    float _77 = _37.x;
    uint _80 = uint(int(uint(_75) >> uint(2)));
    float _82 = vp_c8_1._m0[int(uint(int(_80)) >> uint(2))][int(_80) & 3];
    int _84 = int(_80) + 1;
    float _86 = vp_c8_1._m0[int(uint(_84) >> uint(2))][_84 & 3];
    int _88 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_64) & 65535) * 48);
    uint _90 = uint(int(uint(_75 + 16) >> uint(2)));
    float _92 = vp_c8_1._m0[int(uint(int(_90)) >> uint(2))][int(_90) & 3];
    int _94 = int(_90) + 1;
    float _96 = vp_c8_1._m0[int(uint(_94) >> uint(2))][_94 & 3];
    int _98 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_66) & 65535) * 48);
    uint _100 = uint(int(uint(_88) >> uint(2)));
    float _102 = vp_c8_1._m0[int(uint(int(_100)) >> uint(2))][int(_100) & 3];
    int _104 = int(_100) + 1;
    float _106 = vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3];
    uint _108 = uint(int(uint(_88 + 16) >> uint(2)));
    float _110 = vp_c8_1._m0[int(uint(int(_108)) >> uint(2))][int(_108) & 3];
    int _112 = int(_108) + 1;
    float _114 = vp_c8_1._m0[int(uint(_112) >> uint(2))][_112 & 3];
    uint _116 = uint(int(uint(_88 + 32) >> uint(2)));
    float _118 = vp_c8_1._m0[int(uint(int(_116)) >> uint(2))][int(_116) & 3];
    int _120 = int(_116) + 1;
    float _122 = vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3];
    uint _124 = uint(int(uint(_75 + 32) >> uint(2)));
    float _126 = vp_c8_1._m0[int(uint(int(_124)) >> uint(2))][int(_124) & 3];
    int _128 = int(_124) + 1;
    float _130 = vp_c8_1._m0[int(uint(_128) >> uint(2))][_128 & 3];
    uint _132 = uint(int(uint(_98 + 16) >> uint(2)));
    float _134 = vp_c8_1._m0[int(uint(int(_132)) >> uint(2))][int(_132) & 3];
    int _136 = int(_132) + 1;
    float _138 = vp_c8_1._m0[int(uint(_136) >> uint(2))][_136 & 3];
    uint _140 = uint(int(uint(_98 + 32) >> uint(2)));
    float _142 = vp_c8_1._m0[int(uint(int(_140)) >> uint(2))][int(_140) & 3];
    int _144 = int(_140) + 1;
    float _146 = vp_c8_1._m0[int(uint(_144) >> uint(2))][_144 & 3];
    uint _148 = uint(int(uint(_98) >> uint(2)));
    float _150 = vp_c8_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    float _154 = vp_c8_1._m0[int(uint(_152) >> uint(2))][_152 & 3];
    uint _156 = uint(int(uint(_75 + 8) >> uint(2)));
    float _158 = vp_c8_1._m0[int(uint(int(_156)) >> uint(2))][int(_156) & 3];
    int _160 = int(_156) + 1;
    uint _162 = uint(int(uint(_75 + 24) >> uint(2)));
    float _164 = vp_c8_1._m0[int(uint(int(_162)) >> uint(2))][int(_162) & 3];
    int _166 = int(_162) + 1;
    uint _168 = uint(int(uint(_88 + 8) >> uint(2)));
    float _170 = vp_c8_1._m0[int(uint(int(_168)) >> uint(2))][int(_168) & 3];
    int _172 = int(_168) + 1;
    uint _174 = uint(int(uint(_75 + 40) >> uint(2)));
    float _176 = vp_c8_1._m0[int(uint(int(_174)) >> uint(2))][int(_174) & 3];
    int _178 = int(_174) + 1;
    uint _180 = uint(int(uint(_88 + 24) >> uint(2)));
    float _182 = vp_c8_1._m0[int(uint(int(_180)) >> uint(2))][int(_180) & 3];
    int _184 = int(_180) + 1;
    uint _186 = uint(int(uint(_98 + 8) >> uint(2)));
    float _188 = vp_c8_1._m0[int(uint(int(_186)) >> uint(2))][int(_186) & 3];
    int _190 = int(_186) + 1;
    float _192 = _35.y;
    uint _194 = uint(int(uint(_88 + 40) >> uint(2)));
    float _196 = vp_c8_1._m0[int(uint(int(_194)) >> uint(2))][int(_194) & 3];
    int _198 = int(_194) + 1;
    uint _200 = uint(int(uint(_98 + 24) >> uint(2)));
    float _202 = vp_c8_1._m0[int(uint(int(_200)) >> uint(2))][int(_200) & 3];
    int _204 = int(_200) + 1;
    float _206 = _37.y;
    float _208 = _35.z;
    float _210 = _39.y;
    uint _212 = uint(int(uint(_98 + 40) >> uint(2)));
    float _214 = vp_c8_1._m0[int(uint(int(_212)) >> uint(2))][int(_212) & 3];
    int _216 = int(_212) + 1;
    float _218 = _39.x;
    float _220 = _39.z;
    float _222 = _37.z;
    float _224 = _41.y;
    float _226 = fma(vp_c8_1._m0[int(uint(_190) >> uint(2))][_190 & 3] + fma(_188, _208, fma(_154, _192, _150 * _72)), _220, fma(vp_c8_1._m0[int(uint(_172) >> uint(2))][_172 & 3] + fma(_170, _208, fma(_106, _192, _102 * _72)), _218, (vp_c8_1._m0[int(uint(_160) >> uint(2))][_160 & 3] + fma(_158, _208, fma(_86, _192, _82 * _72))) * _210));
    float _228 = fma(vp_c8_1._m0[int(uint(_204) >> uint(2))][_204 & 3] + fma(_202, _208, fma(_138, _192, _134 * _72)), _220, fma(vp_c8_1._m0[int(uint(_184) >> uint(2))][_184 & 3] + fma(_182, _208, fma(_114, _192, _110 * _72)), _218, (vp_c8_1._m0[int(uint(_166) >> uint(2))][_166 & 3] + fma(_164, _208, fma(_96, _192, _92 * _72))) * _210));
    float _230 = _226 + (-vp_c3_1._m0[11].w);
    float _232 = _41.x;
    _43.x = _226;
    float _234 = fma(vp_c8_1._m0[int(uint(_216) >> uint(2))][_216 & 3] + fma(_214, _208, fma(_146, _192, _142 * _72)), _220, fma(vp_c8_1._m0[int(uint(_198) >> uint(2))][_198 & 3] + fma(_196, _208, fma(_122, _192, _118 * _72)), _218, (vp_c8_1._m0[int(uint(_178) >> uint(2))][_178 & 3] + fma(_176, _208, fma(_130, _192, _126 * _72))) * _210));
    _45.x = _230;
    float _236 = _228 + (-vp_c3_1._m0[12].w);
    _43.y = _228;
    _45.y = _236;
    _43.z = _234;
    _47.z = fma(_68, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    float _238 = _234 + (-vp_c3_1._m0[13].w);
    _47.x = fma(_68, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _45.z = _238;
    _47.w = fma(_70, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _47.y = fma(_70, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    float _240 = inversesqrt(fma(_238, _238, fma(_236, _236, _230 * _230)));
    float _242 = fma(fma(_188, _222, fma(_154, _206, _150 * _77)), _220, fma(fma(_170, _222, fma(_106, _206, _102 * _77)), _218, fma(_158, _222, fma(_86, _206, _82 * _77)) * _210));
    float _244 = _236 * (-_240);
    float _246 = fma(fma(_202, _222, fma(_138, _206, _134 * _77)), _220, fma(fma(_182, _222, fma(_114, _206, _110 * _77)), _218, fma(_164, _222, fma(_96, _206, _92 * _77)) * _210));
    float _248 = fma(fma(_214, _222, fma(_146, _206, _142 * _77)), _220, fma(fma(_196, _222, fma(_122, _206, _118 * _77)), _218, fma(_176, _222, fma(_130, _206, _126 * _77)) * _210));
    float _250 = _238 * (-_240);
    _49.x = fma(_232, vp_c5_1._m0[111].x, _224 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    float _252 = _230 * (-_240);
    float _254 = fma(_250, vp_c3_1._m0[12].y, -(_244 * vp_c3_1._m0[13].y));
    _49.y = fma(_232, vp_c5_1._m0[111].y, _224 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _256 = fma(_252, vp_c3_1._m0[13].y, -(_250 * vp_c3_1._m0[11].y));
    float _258 = fma(_244, vp_c3_1._m0[11].y, -(_252 * vp_c3_1._m0[12].y));
    float _260 = fma(_234, vp_c3_1._m0[0].z, fma(_228, vp_c3_1._m0[0].y, _226 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _262 = inversesqrt(fma(_258, _258, fma(_256, _256, _254 * _254)));
    float _264 = inversesqrt(fma(_248, _248, fma(_246, _246, _242 * _242)));
    float _266 = fma(_234, vp_c3_1._m0[1].z, fma(_228, vp_c3_1._m0[1].y, _226 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _268 = fma(_234, vp_c3_1._m0[2].z, fma(_228, vp_c3_1._m0[2].y, _226 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _43.w = _268;
    float _270 = _256 * _262;
    float _272 = _258 * _262;
    float _274 = _254 * _262;
    float _276 = _242 * _264;
    _51.x = _276;
    float _278 = _246 * _264;
    _51.y = _278;
    float _280 = _248 * _264;
    _51.z = _280;
    gl_Position.z = fma(_268, vp_c3_1._m0[9].z, fma(_266, vp_c3_1._m0[9].y, _260 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    _53.x = fma(_234, vp_c3_1._m0[35].z, fma(_228, vp_c3_1._m0[35].y, _226 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _282 = fma(fma(_280, fma(_252, _270, -(_244 * _274)), fma(_278, fma(_250, _274, -(_252 * _272)), _276 * fma(_244, _272, -(_250 * _270)))), -0.5, 0.5);
    _53.z = fma(_234, vp_c3_1._m0[37].z, fma(_228, vp_c3_1._m0[37].y, _226 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _284 = fma(fma(_272, _280, fma(_270, _278, _274 * _276)), 0.5, 0.5);
    float _286 = fma(_268, vp_c3_1._m0[8].z, fma(_266, vp_c3_1._m0[8].y, _260 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    _53.y = fma(_234, vp_c3_1._m0[36].z, fma(_228, vp_c3_1._m0[36].y, _226 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    gl_Position.y = _286;
    _55.y = _286;
    float _288 = fma(_268, vp_c3_1._m0[7].z, fma(_266, vp_c3_1._m0[7].y, _260 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.x = _288;
    _55.x = _288;
    float _290 = fma(_268, vp_c3_1._m0[10].z, fma(_266, vp_c3_1._m0[10].y, _260 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.w = _290;
    _55.w = _290;
    _49.z = fma(_284, vp_c5_1._m0[113].x, _282 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _49.w = fma(_284, vp_c5_1._m0[113].y, _282 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
}


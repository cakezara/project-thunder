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
layout(location = 1) in vec4 _35;
layout(location = 0) in vec4 _37;
layout(location = 2) in vec4 _39;
layout(location = 8) in vec4 _41;
layout(location = 4) in vec4 _43;
layout(location = 4) out vec4 _45;
layout(location = 3) out vec4 _47;
layout(location = 0) out vec4 _49;
layout(location = 5) out vec4 _51;
layout(location = 7) out vec4 _53;
layout(location = 2) out vec4 _55;
layout(location = 1) out vec4 _57;
layout(location = 6) out vec4 _59;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _66 = _33.x;
    float _68 = _33.y;
    float _70 = _35.x;
    float _72 = _37.x;
    int _75 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_66) & 65535) * 48);
    float _77 = _39.x;
    int _79 = ((int(uint(floatBitsToInt(_68)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_68) & 65535) * 48);
    uint _82 = uint(int(uint(_75) >> uint(2)));
    float _84 = vp_c7_1._m0[int(uint(int(_82)) >> uint(2))][int(_82) & 3];
    int _86 = int(_82) + 1;
    float _88 = vp_c7_1._m0[int(uint(_86) >> uint(2))][_86 & 3];
    uint _90 = uint(int(uint(_75 + 32) >> uint(2)));
    float _92 = vp_c7_1._m0[int(uint(int(_90)) >> uint(2))][int(_90) & 3];
    int _94 = int(_90) + 1;
    float _96 = vp_c7_1._m0[int(uint(_94) >> uint(2))][_94 & 3];
    uint _98 = uint(int(uint(_75 + 16) >> uint(2)));
    float _100 = vp_c7_1._m0[int(uint(int(_98)) >> uint(2))][int(_98) & 3];
    int _102 = int(_98) + 1;
    float _104 = vp_c7_1._m0[int(uint(_102) >> uint(2))][_102 & 3];
    uint _106 = uint(int(uint(_79) >> uint(2)));
    float _108 = vp_c7_1._m0[int(uint(int(_106)) >> uint(2))][int(_106) & 3];
    int _110 = int(_106) + 1;
    float _112 = vp_c7_1._m0[int(uint(_110) >> uint(2))][_110 & 3];
    uint _114 = uint(int(uint(_79 + 32) >> uint(2)));
    float _116 = vp_c7_1._m0[int(uint(int(_114)) >> uint(2))][int(_114) & 3];
    int _118 = int(_114) + 1;
    float _120 = vp_c7_1._m0[int(uint(_118) >> uint(2))][_118 & 3];
    uint _122 = uint(int(uint(_79 + 16) >> uint(2)));
    float _124 = vp_c7_1._m0[int(uint(int(_122)) >> uint(2))][int(_122) & 3];
    int _126 = int(_122) + 1;
    float _128 = vp_c7_1._m0[int(uint(_126) >> uint(2))][_126 & 3];
    float _130 = _35.y;
    float _132 = _39.y;
    float _134 = _37.y;
    float _136 = _37.z;
    float _138 = _41.x;
    uint _140 = uint(int(uint(_75 + 8) >> uint(2)));
    float _142 = vp_c7_1._m0[int(uint(int(_140)) >> uint(2))][int(_140) & 3];
    int _144 = int(_140) + 1;
    float _146 = vp_c7_1._m0[int(uint(_144) >> uint(2))][_144 & 3];
    uint _148 = uint(int(uint(_79 + 8) >> uint(2)));
    float _150 = vp_c7_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    float _154 = vp_c7_1._m0[int(uint(_152) >> uint(2))][_152 & 3];
    uint _156 = uint(int(uint(_79 + 40) >> uint(2)));
    float _158 = vp_c7_1._m0[int(uint(int(_156)) >> uint(2))][int(_156) & 3];
    int _160 = int(_156) + 1;
    float _162 = vp_c7_1._m0[int(uint(_160) >> uint(2))][_160 & 3];
    uint _164 = uint(int(uint(_75 + 24) >> uint(2)));
    float _166 = vp_c7_1._m0[int(uint(int(_164)) >> uint(2))][int(_164) & 3];
    int _168 = int(_164) + 1;
    float _170 = vp_c7_1._m0[int(uint(_168) >> uint(2))][_168 & 3];
    uint _172 = uint(int(uint(_79 + 24) >> uint(2)));
    float _174 = vp_c7_1._m0[int(uint(int(_172)) >> uint(2))][int(_172) & 3];
    int _176 = int(_172) + 1;
    float _178 = vp_c7_1._m0[int(uint(_176) >> uint(2))][_176 & 3];
    uint _180 = uint(int(uint(_75 + 40) >> uint(2)));
    float _182 = vp_c7_1._m0[int(uint(int(_180)) >> uint(2))][int(_180) & 3];
    int _184 = int(_180) + 1;
    float _186 = vp_c7_1._m0[int(uint(_184) >> uint(2))][_184 & 3];
    float _188 = _41.y;
    float _190 = _35.z;
    float _192 = _39.z;
    float _194 = _43.y;
    float _196 = _43.x;
    float _198 = fma(_146 + fma(_142, _136, fma(_88, _134, _84 * _72)), _196, (_154 + fma(_150, _136, fma(_112, _134, _108 * _72))) * _194);
    _45.x = _198;
    _47.w = _39.w;
    float _200 = fma(_170 + fma(_166, _136, fma(_104, _134, _100 * _72)), _196, (_178 + fma(_174, _136, fma(_128, _134, _124 * _72))) * _194);
    _45.y = _200;
    _49.x = fma(_138, vp_c4_1._m0[59].x, _188 * vp_c4_1._m0[59].z) + vp_c4_1._m0[60].x;
    float _202 = fma(_186 + fma(_182, _136, fma(_96, _134, _92 * _72)), _196, (_162 + fma(_158, _136, fma(_120, _134, _116 * _72))) * _194);
    _45.z = _202;
    float _204 = fma(fma(0.0, _146, fma(_142, _192, fma(_88, _132, _84 * _77))), _196, fma(0.0, _154, fma(_150, _192, fma(_112, _132, _108 * _77))) * _194);
    float _206 = fma(fma(0.0, _146, fma(_142, _190, fma(_88, _130, _84 * _70))), _196, fma(0.0, _154, fma(_150, _190, fma(_112, _130, _108 * _70))) * _194);
    _51.y = _200 + (-vp_c3_1._m0[12].w);
    _49.y = fma(_138, vp_c4_1._m0[59].y, _188 * vp_c4_1._m0[59].w) + vp_c4_1._m0[60].y;
    _51.x = _198 + (-vp_c3_1._m0[11].w);
    float _208 = fma(fma(0.0, _170, fma(_166, _192, fma(_104, _132, _100 * _77))), _196, fma(0.0, _178, fma(_174, _192, fma(_128, _132, _124 * _77))) * _194);
    float _210 = fma(fma(0.0, _170, fma(_166, _190, fma(_104, _130, _100 * _70))), _196, fma(0.0, _178, fma(_174, _190, fma(_128, _130, _124 * _70))) * _194);
    _51.z = _202 + (-vp_c3_1._m0[13].w);
    float _212 = fma(fma(0.0, _186, fma(_182, _192, fma(_96, _132, _92 * _77))), _196, fma(0.0, _162, fma(_158, _192, fma(_120, _132, _116 * _77))) * _194);
    _53.z = fma(_202, vp_c3_1._m0[37].z, fma(_200, vp_c3_1._m0[37].y, _198 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _214 = fma(fma(0.0, _186, fma(_182, _190, fma(_96, _130, _92 * _70))), _196, fma(0.0, _162, fma(_158, _190, fma(_120, _130, _116 * _70))) * _194);
    float _216 = inversesqrt(fma(_212, _212, fma(_208, _208, _204 * _204)));
    float _218 = inversesqrt(fma(_214, _214, fma(_210, _210, _206 * _206)));
    float _220 = fma(_202, vp_c3_1._m0[0].z, fma(_200, vp_c3_1._m0[0].y, _198 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _47.x = _204 * _216;
    _47.y = _208 * _216;
    _55.y = _210 * _218;
    _47.z = _212 * _216;
    float _222 = fma(_202, vp_c3_1._m0[1].z, fma(_200, vp_c3_1._m0[1].y, _198 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _224 = fma(_202, vp_c3_1._m0[2].z, fma(_200, vp_c3_1._m0[2].y, _198 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _45.w = _224;
    _55.x = _206 * _218;
    _57.w = fma(_202, -vp_c5_1._m0[16].y, 0.5);
    _57.z = fma(_198, vp_c5_1._m0[16].x, 0.5);
    _53.y = fma(_202, vp_c3_1._m0[36].z, fma(_200, vp_c3_1._m0[36].y, _198 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _53.x = fma(_202, vp_c3_1._m0[35].z, fma(_200, vp_c3_1._m0[35].y, _198 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _55.z = _214 * _218;
    float _226 = fma(_224, vp_c3_1._m0[8].z, fma(_222, vp_c3_1._m0[8].y, _220 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_224, vp_c3_1._m0[9].z, fma(_222, vp_c3_1._m0[9].y, _220 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _228 = fma(_224, vp_c3_1._m0[7].z, fma(_222, vp_c3_1._m0[7].y, _220 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _226;
    float _230 = fma(_224, vp_c3_1._m0[10].z, fma(_222, vp_c3_1._m0[10].y, _220 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _59.y = _226;
    gl_Position.x = _228;
    _59.x = _228;
    gl_Position.w = _230;
    _59.w = _230;
}


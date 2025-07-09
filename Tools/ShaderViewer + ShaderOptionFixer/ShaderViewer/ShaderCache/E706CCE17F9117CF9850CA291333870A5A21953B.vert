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

layout(binding = 8, std140) uniform vp_c7
{
    vec4 _m0[4096];
} vp_c7_1;

layout(location = 6) in vec4 _33;
layout(location = 0) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 2) in vec4 _39;
layout(location = 8) in vec4 _41;
layout(location = 4) in vec4 _43;
layout(location = 7) out vec4 _45;
layout(location = 0) out vec4 _47;
layout(location = 2) out vec4 _49;
layout(location = 3) out vec4 _51;
layout(location = 4) out vec4 _53;
layout(location = 1) out vec4 _55;
layout(location = 8) out vec4 _57;
layout(location = 6) out vec4 _59;
layout(location = 5) out vec4 _61;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _68 = _33.y;
    float _70 = _33.x;
    float _72 = _35.x;
    float _74 = _37.x;
    float _76 = _39.x;
    float _78 = _35.y;
    float _80 = _41.y;
    float _82 = _37.y;
    int _85 = ((int(uint(floatBitsToInt(_68)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_68) & 65535) * 48) + 16);
    float _87 = _39.y;
    int _89 = ((int(uint(floatBitsToInt(_70)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_70) & 65535) * 48) + 32);
    uint _92 = uint(int(uint(_85 + (-16)) >> uint(2)));
    float _94 = vp_c8_1._m0[int(uint(int(_92)) >> uint(2))][int(_92) & 3];
    int _96 = int(_92) + 1;
    float _98 = vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3];
    uint _100 = uint(int(uint(_85 + 16) >> uint(2)));
    float _102 = vp_c8_1._m0[int(uint(int(_100)) >> uint(2))][int(_100) & 3];
    int _104 = int(_100) + 1;
    float _106 = vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3];
    uint _108 = uint(int(uint(_85) >> uint(2)));
    float _110 = vp_c8_1._m0[int(uint(int(_108)) >> uint(2))][int(_108) & 3];
    int _112 = int(_108) + 1;
    float _114 = vp_c8_1._m0[int(uint(_112) >> uint(2))][_112 & 3];
    uint _116 = uint(int(uint(_85 + (-8)) >> uint(2)));
    float _118 = vp_c8_1._m0[int(uint(int(_116)) >> uint(2))][int(_116) & 3];
    int _120 = int(_116) + 1;
    uint _122 = uint(int(uint(_89 + (-32)) >> uint(2)));
    float _124 = vp_c8_1._m0[int(uint(int(_122)) >> uint(2))][int(_122) & 3];
    int _126 = int(_122) + 1;
    float _128 = vp_c8_1._m0[int(uint(_126) >> uint(2))][_126 & 3];
    uint _130 = uint(int(uint(_89 + (-16)) >> uint(2)));
    float _132 = vp_c8_1._m0[int(uint(int(_130)) >> uint(2))][int(_130) & 3];
    int _134 = int(_130) + 1;
    float _136 = vp_c8_1._m0[int(uint(_134) >> uint(2))][_134 & 3];
    uint _138 = uint(int(uint(_89) >> uint(2)));
    float _140 = vp_c8_1._m0[int(uint(int(_138)) >> uint(2))][int(_138) & 3];
    int _142 = int(_138) + 1;
    float _144 = vp_c8_1._m0[int(uint(_142) >> uint(2))][_142 & 3];
    float _146 = _41.x;
    uint _148 = uint(int(uint(_89 + (-24)) >> uint(2)));
    float _150 = vp_c8_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    uint _154 = uint(int(uint(_85 + 8) >> uint(2)));
    float _156 = vp_c8_1._m0[int(uint(int(_154)) >> uint(2))][int(_154) & 3];
    int _158 = int(_154) + 1;
    uint _160 = uint(int(uint(_85 + 24) >> uint(2)));
    float _162 = vp_c8_1._m0[int(uint(int(_160)) >> uint(2))][int(_160) & 3];
    int _164 = int(_160) + 1;
    float _166 = _39.z;
    uint _168 = uint(int(uint(_89 + (-8)) >> uint(2)));
    float _170 = vp_c8_1._m0[int(uint(int(_168)) >> uint(2))][int(_168) & 3];
    int _172 = int(_168) + 1;
    uint _174 = uint(int(uint(_89 + 8) >> uint(2)));
    float _176 = vp_c8_1._m0[int(uint(int(_174)) >> uint(2))][int(_174) & 3];
    int _178 = int(_174) + 1;
    float _180 = _35.z;
    float _182 = _37.z;
    float _184 = _43.y;
    float _186 = _43.x;
    _45.z = _182;
    _45.x = _74;
    _45.y = _82;
    _47.x = fma(_146, vp_c5_1._m0[111].x, _80 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _47.y = fma(_146, vp_c5_1._m0[111].y, _80 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _49.w = _39.w;
    float _188 = fma(fma(_150, _182, fma(_128, _82, _124 * _74)), _186, fma(_118, _182, fma(_98, _82, _94 * _74)) * _184);
    float _190 = fma(fma(_170, _182, fma(_136, _82, _132 * _74)), _186, fma(_156, _182, fma(_114, _82, _110 * _74)) * _184);
    float _192 = fma(fma(_176, _182, fma(_144, _82, _140 * _74)), _186, fma(_162, _182, fma(_106, _82, _102 * _74)) * _184);
    float _194 = fma(fma(_150, _166, fma(_128, _87, _124 * _76)), _186, fma(_118, _166, fma(_98, _87, _94 * _76)) * _184);
    float _196 = fma(vp_c8_1._m0[int(uint(_152) >> uint(2))][_152 & 3] + fma(_150, _180, fma(_128, _78, _124 * _72)), _186, (vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3] + fma(_118, _180, fma(_98, _78, _94 * _72))) * _184);
    _51.x = _196;
    float _198 = fma(vp_c8_1._m0[int(uint(_178) >> uint(2))][_178 & 3] + fma(_176, _180, fma(_144, _78, _140 * _72)), _186, (vp_c8_1._m0[int(uint(_164) >> uint(2))][_164 & 3] + fma(_162, _180, fma(_106, _78, _102 * _72))) * _184);
    float _200 = inversesqrt(fma(_192, _192, fma(_190, _190, _188 * _188)));
    float _202 = fma(fma(_170, _166, fma(_136, _87, _132 * _76)), _186, fma(_156, _166, fma(_114, _87, _110 * _76)) * _184);
    _51.z = _198;
    float _204 = fma(vp_c8_1._m0[int(uint(_172) >> uint(2))][_172 & 3] + fma(_170, _180, fma(_136, _78, _132 * _72)), _186, (vp_c8_1._m0[int(uint(_158) >> uint(2))][_158 & 3] + fma(_156, _180, fma(_114, _78, _110 * _72))) * _184);
    _51.y = _204;
    float _206 = fma(fma(_176, _166, fma(_144, _87, _140 * _76)), _186, fma(_162, _166, fma(_106, _87, _102 * _76)) * _184);
    _53.x = _196 + (-vp_c3_1._m0[11].w);
    _53.y = _204 + (-vp_c3_1._m0[12].w);
    float _208 = inversesqrt(fma(_206, _206, fma(_202, _202, _194 * _194)));
    _55.y = _190 * _200;
    float _210 = fma(_198, vp_c3_1._m0[0].z, fma(_204, vp_c3_1._m0[0].y, _196 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _49.y = _202 * _208;
    _57.y = fma(_198, vp_c3_1._m0[36].z, fma(_204, vp_c3_1._m0[36].y, _196 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _212 = fma(_198, vp_c3_1._m0[1].z, fma(_204, vp_c3_1._m0[1].y, _196 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _214 = fma(_198, vp_c3_1._m0[2].z, fma(_204, vp_c3_1._m0[2].y, _196 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _51.w = _214;
    _49.x = _194 * _208;
    _59.x = _72 + (-vp_c7_1._m0[3].x);
    _59.y = _78 + (-vp_c7_1._m0[3].y);
    _59.z = _180 + (-vp_c7_1._m0[3].z);
    _53.z = _198 + (-vp_c3_1._m0[13].w);
    _55.x = _188 * _200;
    _55.z = _192 * _200;
    _57.z = fma(_198, vp_c3_1._m0[37].z, fma(_204, vp_c3_1._m0[37].y, _196 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _57.x = fma(_198, vp_c3_1._m0[35].z, fma(_204, vp_c3_1._m0[35].y, _196 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _49.z = _206 * _208;
    float _216 = fma(_214, vp_c3_1._m0[8].z, fma(_212, vp_c3_1._m0[8].y, _210 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_214, vp_c3_1._m0[9].z, fma(_212, vp_c3_1._m0[9].y, _210 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _218 = fma(_214, vp_c3_1._m0[7].z, fma(_212, vp_c3_1._m0[7].y, _210 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _216;
    float _220 = fma(_214, vp_c3_1._m0[10].z, fma(_212, vp_c3_1._m0[10].y, _210 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _61.y = _216;
    gl_Position.x = _218;
    _61.x = _218;
    gl_Position.w = _220;
    _61.w = _220;
}


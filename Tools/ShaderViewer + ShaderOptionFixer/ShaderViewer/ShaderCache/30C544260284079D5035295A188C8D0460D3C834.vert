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
layout(location = 8) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 0) in vec4 _39;
layout(location = 2) in vec4 _41;
layout(location = 4) in vec4 _43;
layout(location = 7) out vec4 _45;
layout(location = 2) out vec4 _47;
layout(location = 6) out vec4 _49;
layout(location = 0) out vec4 _51;
layout(location = 3) out vec4 _53;
layout(location = 4) out vec4 _55;
layout(location = 1) out vec4 _57;
layout(location = 5) out vec4 _59;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _66 = _31.x;
    float _68 = _31.y;
    float _70 = _33.y;
    float _72 = _35.y;
    float _74 = _33.x;
    float _76 = _35.x;
    float _78 = _37.x;
    float _80 = _39.x;
    int _83 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_66) & 65535) * 48) + 32);
    float _85 = _41.x;
    float _87 = _39.y;
    int _89 = ((int(uint(floatBitsToInt(_68)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_68) & 65535) * 48) + 16);
    uint _92 = uint(int(uint(_83 + (-32)) >> uint(2)));
    float _94 = vp_c8_1._m0[int(uint(int(_92)) >> uint(2))][int(_92) & 3];
    int _96 = int(_92) + 1;
    float _98 = vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3];
    uint _100 = uint(int(uint(_83) >> uint(2)));
    float _102 = vp_c8_1._m0[int(uint(int(_100)) >> uint(2))][int(_100) & 3];
    int _104 = int(_100) + 1;
    float _106 = vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3];
    uint _108 = uint(int(uint(_83 + (-16)) >> uint(2)));
    float _110 = vp_c8_1._m0[int(uint(int(_108)) >> uint(2))][int(_108) & 3];
    int _112 = int(_108) + 1;
    float _114 = vp_c8_1._m0[int(uint(_112) >> uint(2))][_112 & 3];
    uint _116 = uint(int(uint(_83 + (-24)) >> uint(2)));
    float _118 = vp_c8_1._m0[int(uint(int(_116)) >> uint(2))][int(_116) & 3];
    int _120 = int(_116) + 1;
    uint _122 = uint(int(uint(_89 + (-16)) >> uint(2)));
    float _124 = vp_c8_1._m0[int(uint(int(_122)) >> uint(2))][int(_122) & 3];
    int _126 = int(_122) + 1;
    float _128 = vp_c8_1._m0[int(uint(_126) >> uint(2))][_126 & 3];
    uint _130 = uint(int(uint(_89) >> uint(2)));
    float _132 = vp_c8_1._m0[int(uint(int(_130)) >> uint(2))][int(_130) & 3];
    int _134 = int(_130) + 1;
    float _136 = vp_c8_1._m0[int(uint(_134) >> uint(2))][_134 & 3];
    uint _138 = uint(int(uint(_89 + 16) >> uint(2)));
    float _140 = vp_c8_1._m0[int(uint(int(_138)) >> uint(2))][int(_138) & 3];
    int _142 = int(_138) + 1;
    float _144 = vp_c8_1._m0[int(uint(_142) >> uint(2))][_142 & 3];
    uint _146 = uint(int(uint(_89 + (-8)) >> uint(2)));
    float _148 = vp_c8_1._m0[int(uint(int(_146)) >> uint(2))][int(_146) & 3];
    int _150 = int(_146) + 1;
    uint _152 = uint(int(uint(_89 + 8) >> uint(2)));
    float _154 = vp_c8_1._m0[int(uint(int(_152)) >> uint(2))][int(_152) & 3];
    int _156 = int(_152) + 1;
    float _158 = _37.y;
    uint _160 = uint(int(uint(_83 + (-8)) >> uint(2)));
    float _162 = vp_c8_1._m0[int(uint(int(_160)) >> uint(2))][int(_160) & 3];
    int _164 = int(_160) + 1;
    uint _166 = uint(int(uint(_89 + 24) >> uint(2)));
    float _168 = vp_c8_1._m0[int(uint(int(_166)) >> uint(2))][int(_166) & 3];
    int _170 = int(_166) + 1;
    float _172 = _41.y;
    uint _174 = uint(int(uint(_83 + 8) >> uint(2)));
    float _176 = vp_c8_1._m0[int(uint(int(_174)) >> uint(2))][int(_174) & 3];
    int _178 = int(_174) + 1;
    float _180 = _37.z;
    float _182 = _39.z;
    float _184 = _43.y;
    float _186 = _43.x;
    float _188 = _41.z;
    _45.z = fma(_74, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _45.x = fma(_74, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _45.w = fma(_70, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _47.w = _41.w;
    _45.y = fma(_70, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _49.w = _33.z;
    float _190 = fma(vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3] + fma(_118, _182, fma(_98, _87, _94 * _80)), _186, (vp_c8_1._m0[int(uint(_150) >> uint(2))][_150 & 3] + fma(_148, _182, fma(_128, _87, _124 * _80))) * _184);
    _51.x = fma(_76, vp_c5_1._m0[111].x, _72 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _53.x = _190;
    _51.y = fma(_76, vp_c5_1._m0[111].y, _72 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _192 = fma(vp_c8_1._m0[int(uint(_164) >> uint(2))][_164 & 3] + fma(_162, _182, fma(_114, _87, _110 * _80)), _186, (vp_c8_1._m0[int(uint(_156) >> uint(2))][_156 & 3] + fma(_154, _182, fma(_136, _87, _132 * _80))) * _184);
    _53.y = _192;
    float _194 = fma(vp_c8_1._m0[int(uint(_178) >> uint(2))][_178 & 3] + fma(_176, _182, fma(_106, _87, _102 * _80)), _186, (vp_c8_1._m0[int(uint(_170) >> uint(2))][_170 & 3] + fma(_168, _182, fma(_144, _87, _140 * _80))) * _184);
    _53.z = _194;
    _55.x = _190 + (-vp_c3_1._m0[11].w);
    float _196 = fma(fma(_176, _180, fma(_106, _158, _102 * _78)), _186, fma(_168, _180, fma(_144, _158, _140 * _78)) * _184);
    float _198 = fma(fma(_118, _188, fma(_98, _172, _94 * _85)), _186, fma(_148, _188, fma(_128, _172, _124 * _85)) * _184);
    _55.z = _194 + (-vp_c3_1._m0[13].w);
    _49.z = fma(_194, vp_c3_1._m0[37].z, fma(_192, vp_c3_1._m0[37].y, _190 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _200 = fma(fma(_118, _180, fma(_98, _158, _94 * _78)), _186, fma(_148, _180, fma(_128, _158, _124 * _78)) * _184);
    float _202 = fma(fma(_162, _180, fma(_114, _158, _110 * _78)), _186, fma(_154, _180, fma(_136, _158, _132 * _78)) * _184);
    float _204 = fma(fma(_162, _188, fma(_114, _172, _110 * _85)), _186, fma(_154, _188, fma(_136, _172, _132 * _85)) * _184);
    float _206 = fma(_194, vp_c3_1._m0[0].z, fma(_192, vp_c3_1._m0[0].y, _190 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _208 = fma(_194, vp_c3_1._m0[1].z, fma(_192, vp_c3_1._m0[1].y, _190 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _55.y = _192 + (-vp_c3_1._m0[12].w);
    float _210 = fma(fma(_176, _188, fma(_106, _172, _102 * _85)), _186, fma(_168, _188, fma(_144, _172, _140 * _85)) * _184);
    float _212 = fma(_194, vp_c3_1._m0[2].z, fma(_192, vp_c3_1._m0[2].y, _190 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    float _214 = inversesqrt(fma(_196, _196, fma(_202, _202, _200 * _200)));
    _53.w = _212;
    float _216 = inversesqrt(fma(_210, _210, fma(_204, _204, _198 * _198)));
    _49.y = fma(_194, vp_c3_1._m0[36].z, fma(_192, vp_c3_1._m0[36].y, _190 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _57.x = _200 * _214;
    _57.y = _202 * _214;
    _47.x = _198 * _216;
    _47.y = _204 * _216;
    _49.x = fma(_194, vp_c3_1._m0[35].z, fma(_192, vp_c3_1._m0[35].y, _190 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _57.z = _196 * _214;
    _47.z = _210 * _216;
    float _218 = fma(_212, vp_c3_1._m0[8].z, fma(_208, vp_c3_1._m0[8].y, _206 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_212, vp_c3_1._m0[9].z, fma(_208, vp_c3_1._m0[9].y, _206 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _220 = fma(_212, vp_c3_1._m0[7].z, fma(_208, vp_c3_1._m0[7].y, _206 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _218;
    float _222 = fma(_212, vp_c3_1._m0[10].z, fma(_208, vp_c3_1._m0[10].y, _206 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _59.y = _218;
    gl_Position.x = _220;
    _59.x = _220;
    gl_Position.w = _222;
    _59.w = _222;
}


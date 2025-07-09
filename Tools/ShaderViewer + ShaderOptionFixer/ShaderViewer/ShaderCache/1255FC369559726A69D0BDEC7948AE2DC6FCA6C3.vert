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
layout(location = 0) in vec4 _37;
layout(location = 1) in vec4 _39;
layout(location = 2) in vec4 _41;
layout(location = 4) in vec4 _43;
layout(location = 7) out vec4 _45;
layout(location = 0) out vec4 _47;
layout(location = 2) out vec4 _49;
layout(location = 3) out vec4 _51;
layout(location = 4) out vec4 _53;
layout(location = 6) out vec4 _55;
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
    float _70 = _33.x;
    float _72 = _33.y;
    float _74 = _35.y;
    float _76 = _35.x;
    float _78 = _37.x;
    float _80 = _39.x;
    int _83 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_66) & 65535) * 48) + 32);
    float _85 = _41.x;
    float _87 = _37.y;
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
    float _158 = _41.y;
    float _160 = _39.y;
    uint _162 = uint(int(uint(_83 + (-8)) >> uint(2)));
    float _164 = vp_c8_1._m0[int(uint(int(_162)) >> uint(2))][int(_162) & 3];
    int _166 = int(_162) + 1;
    uint _168 = uint(int(uint(_89 + 24) >> uint(2)));
    float _170 = vp_c8_1._m0[int(uint(int(_168)) >> uint(2))][int(_168) & 3];
    int _172 = int(_168) + 1;
    float _174 = _41.z;
    uint _176 = uint(int(uint(_83 + 8) >> uint(2)));
    float _178 = vp_c8_1._m0[int(uint(int(_176)) >> uint(2))][int(_176) & 3];
    int _180 = int(_176) + 1;
    float _182 = _37.z;
    float _184 = _39.z;
    float _186 = _43.y;
    float _188 = _43.x;
    _45.z = fma(_70, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _45.x = fma(_70, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _45.w = fma(_72, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _45.y = fma(_72, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _47.x = fma(_76, vp_c5_1._m0[112].x, _74 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _49.w = _41.w;
    _47.y = fma(_76, vp_c5_1._m0[112].y, _74 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    float _190 = fma(vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3] + fma(_118, _182, fma(_98, _87, _94 * _78)), _188, (vp_c8_1._m0[int(uint(_150) >> uint(2))][_150 & 3] + fma(_148, _182, fma(_128, _87, _124 * _78))) * _186);
    _51.x = _190;
    float _192 = fma(vp_c8_1._m0[int(uint(_166) >> uint(2))][_166 & 3] + fma(_164, _182, fma(_114, _87, _110 * _78)), _188, (vp_c8_1._m0[int(uint(_156) >> uint(2))][_156 & 3] + fma(_154, _182, fma(_136, _87, _132 * _78))) * _186);
    _51.y = _192;
    float _194 = fma(fma(_118, _184, fma(_98, _160, _94 * _80)), _188, fma(_148, _184, fma(_128, _160, _124 * _80)) * _186);
    _53.x = _190 + (-vp_c3_1._m0[11].w);
    _53.y = _192 + (-vp_c3_1._m0[12].w);
    float _196 = fma(vp_c8_1._m0[int(uint(_180) >> uint(2))][_180 & 3] + fma(_178, _182, fma(_106, _87, _102 * _78)), _188, (vp_c8_1._m0[int(uint(_172) >> uint(2))][_172 & 3] + fma(_170, _182, fma(_144, _87, _140 * _78))) * _186);
    _51.z = _196;
    float _198 = fma(fma(_164, _184, fma(_114, _160, _110 * _80)), _188, fma(_154, _184, fma(_136, _160, _132 * _80)) * _186);
    float _200 = fma(fma(_118, _174, fma(_98, _158, _94 * _85)), _188, fma(_148, _174, fma(_128, _158, _124 * _85)) * _186);
    float _202 = fma(fma(_164, _174, fma(_114, _158, _110 * _85)), _188, fma(_154, _174, fma(_136, _158, _132 * _85)) * _186);
    float _204 = fma(fma(_178, _184, fma(_106, _160, _102 * _80)), _188, fma(_170, _184, fma(_144, _160, _140 * _80)) * _186);
    float _206 = fma(fma(_178, _174, fma(_106, _158, _102 * _85)), _188, fma(_170, _174, fma(_144, _158, _140 * _85)) * _186);
    _55.z = fma(_196, vp_c3_1._m0[37].z, fma(_192, vp_c3_1._m0[37].y, _190 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _208 = fma(_196, vp_c3_1._m0[0].z, fma(_192, vp_c3_1._m0[0].y, _190 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _53.z = _196 + (-vp_c3_1._m0[13].w);
    float _210 = fma(_196, vp_c3_1._m0[1].z, fma(_192, vp_c3_1._m0[1].y, _190 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _212 = inversesqrt(fma(_206, _206, fma(_202, _202, _200 * _200)));
    float _214 = inversesqrt(fma(_204, _204, fma(_198, _198, _194 * _194)));
    float _216 = fma(_196, vp_c3_1._m0[2].z, fma(_192, vp_c3_1._m0[2].y, _190 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _55.y = fma(_196, vp_c3_1._m0[36].z, fma(_192, vp_c3_1._m0[36].y, _190 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _51.w = _216;
    _49.x = _200 * _212;
    _57.x = _194 * _214;
    _57.y = _198 * _214;
    _49.y = _202 * _212;
    _55.x = fma(_196, vp_c3_1._m0[35].z, fma(_192, vp_c3_1._m0[35].y, _190 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _57.z = _204 * _214;
    _49.z = _206 * _212;
    float _218 = fma(_216, vp_c3_1._m0[8].z, fma(_210, vp_c3_1._m0[8].y, _208 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_216, vp_c3_1._m0[9].z, fma(_210, vp_c3_1._m0[9].y, _208 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _220 = fma(_216, vp_c3_1._m0[7].z, fma(_210, vp_c3_1._m0[7].y, _208 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _218;
    float _222 = fma(_216, vp_c3_1._m0[10].z, fma(_210, vp_c3_1._m0[10].y, _208 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _59.y = _218;
    gl_Position.x = _220;
    _59.x = _220;
    gl_Position.w = _222;
    _59.w = _222;
}


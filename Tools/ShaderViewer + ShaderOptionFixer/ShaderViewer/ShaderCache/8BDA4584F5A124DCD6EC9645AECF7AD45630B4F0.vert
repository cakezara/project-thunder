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
layout(location = 10) in vec4 _33;
layout(location = 8) in vec4 _35;
layout(location = 0) in vec4 _37;
layout(location = 1) in vec4 _39;
layout(location = 2) in vec4 _41;
layout(location = 4) in vec4 _43;
layout(location = 0) out vec4 _45;
layout(location = 2) out vec4 _47;
layout(location = 3) out vec4 _49;
layout(location = 4) out vec4 _51;
layout(location = 6) out vec4 _53;
layout(location = 1) out vec4 _55;
layout(location = 5) out vec4 _57;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _64 = _31.x;
    float _66 = _31.y;
    float _68 = _33.y;
    float _70 = _35.y;
    float _72 = _33.x;
    float _74 = _35.x;
    float _76 = _37.x;
    float _78 = _39.x;
    int _81 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_64) & 65535) * 48) + 32);
    float _83 = _41.x;
    float _85 = _37.y;
    int _87 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_66) & 65535) * 48) + 16);
    uint _90 = uint(int(uint(_81 + (-32)) >> uint(2)));
    float _92 = vp_c8_1._m0[int(uint(int(_90)) >> uint(2))][int(_90) & 3];
    int _94 = int(_90) + 1;
    float _96 = vp_c8_1._m0[int(uint(_94) >> uint(2))][_94 & 3];
    uint _98 = uint(int(uint(_81) >> uint(2)));
    float _100 = vp_c8_1._m0[int(uint(int(_98)) >> uint(2))][int(_98) & 3];
    int _102 = int(_98) + 1;
    float _104 = vp_c8_1._m0[int(uint(_102) >> uint(2))][_102 & 3];
    uint _106 = uint(int(uint(_81 + (-16)) >> uint(2)));
    float _108 = vp_c8_1._m0[int(uint(int(_106)) >> uint(2))][int(_106) & 3];
    int _110 = int(_106) + 1;
    float _112 = vp_c8_1._m0[int(uint(_110) >> uint(2))][_110 & 3];
    uint _114 = uint(int(uint(_81 + (-24)) >> uint(2)));
    float _116 = vp_c8_1._m0[int(uint(int(_114)) >> uint(2))][int(_114) & 3];
    int _118 = int(_114) + 1;
    uint _120 = uint(int(uint(_87 + (-16)) >> uint(2)));
    float _122 = vp_c8_1._m0[int(uint(int(_120)) >> uint(2))][int(_120) & 3];
    int _124 = int(_120) + 1;
    float _126 = vp_c8_1._m0[int(uint(_124) >> uint(2))][_124 & 3];
    uint _128 = uint(int(uint(_87) >> uint(2)));
    float _130 = vp_c8_1._m0[int(uint(int(_128)) >> uint(2))][int(_128) & 3];
    int _132 = int(_128) + 1;
    float _134 = vp_c8_1._m0[int(uint(_132) >> uint(2))][_132 & 3];
    uint _136 = uint(int(uint(_87 + 16) >> uint(2)));
    float _138 = vp_c8_1._m0[int(uint(int(_136)) >> uint(2))][int(_136) & 3];
    int _140 = int(_136) + 1;
    float _142 = vp_c8_1._m0[int(uint(_140) >> uint(2))][_140 & 3];
    uint _144 = uint(int(uint(_87 + (-8)) >> uint(2)));
    float _146 = vp_c8_1._m0[int(uint(int(_144)) >> uint(2))][int(_144) & 3];
    int _148 = int(_144) + 1;
    uint _150 = uint(int(uint(_87 + 8) >> uint(2)));
    float _152 = vp_c8_1._m0[int(uint(int(_150)) >> uint(2))][int(_150) & 3];
    int _154 = int(_150) + 1;
    uint _156 = uint(int(uint(_87 + 24) >> uint(2)));
    float _158 = vp_c8_1._m0[int(uint(int(_156)) >> uint(2))][int(_156) & 3];
    int _160 = int(_156) + 1;
    float _162 = _39.y;
    float _164 = _41.y;
    uint _166 = uint(int(uint(_81 + (-8)) >> uint(2)));
    float _168 = vp_c8_1._m0[int(uint(int(_166)) >> uint(2))][int(_166) & 3];
    int _170 = int(_166) + 1;
    uint _172 = uint(int(uint(_81 + 8) >> uint(2)));
    float _174 = vp_c8_1._m0[int(uint(int(_172)) >> uint(2))][int(_172) & 3];
    int _176 = int(_172) + 1;
    float _178 = _37.z;
    float _180 = _39.z;
    float _182 = _41.z;
    float _184 = _43.y;
    float _186 = _43.x;
    _45.z = fma(_72, vp_c5_1._m0[113].x, _68 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _45.w = fma(_72, vp_c5_1._m0[113].y, _68 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
    _45.x = fma(_74, vp_c5_1._m0[111].x, _70 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _45.y = fma(_74, vp_c5_1._m0[111].y, _70 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _47.w = _41.w;
    float _188 = fma(vp_c8_1._m0[int(uint(_118) >> uint(2))][_118 & 3] + fma(_116, _178, fma(_96, _85, _92 * _76)), _186, (vp_c8_1._m0[int(uint(_148) >> uint(2))][_148 & 3] + fma(_146, _178, fma(_126, _85, _122 * _76))) * _184);
    _49.x = _188;
    _51.x = _188 + (-vp_c3_1._m0[11].w);
    float _190 = fma(vp_c8_1._m0[int(uint(_170) >> uint(2))][_170 & 3] + fma(_168, _178, fma(_112, _85, _108 * _76)), _186, (vp_c8_1._m0[int(uint(_154) >> uint(2))][_154 & 3] + fma(_152, _178, fma(_134, _85, _130 * _76))) * _184);
    _49.y = _190;
    float _192 = fma(fma(_174, _182, fma(_104, _164, _100 * _83)), _186, fma(_158, _182, fma(_142, _164, _138 * _83)) * _184);
    float _194 = fma(vp_c8_1._m0[int(uint(_176) >> uint(2))][_176 & 3] + fma(_174, _178, fma(_104, _85, _100 * _76)), _186, (vp_c8_1._m0[int(uint(_160) >> uint(2))][_160 & 3] + fma(_158, _178, fma(_142, _85, _138 * _76))) * _184);
    _49.z = _194;
    float _196 = fma(fma(_116, _180, fma(_96, _162, _92 * _78)), _186, fma(_146, _180, fma(_126, _162, _122 * _78)) * _184);
    _51.y = _190 + (-vp_c3_1._m0[12].w);
    float _198 = fma(fma(_116, _182, fma(_96, _164, _92 * _83)), _186, fma(_146, _182, fma(_126, _164, _122 * _83)) * _184);
    float _200 = fma(fma(_168, _180, fma(_112, _162, _108 * _78)), _186, fma(_152, _180, fma(_134, _162, _130 * _78)) * _184);
    float _202 = fma(fma(_174, _180, fma(_104, _162, _100 * _78)), _186, fma(_158, _180, fma(_142, _162, _138 * _78)) * _184);
    float _204 = fma(fma(_168, _182, fma(_112, _164, _108 * _83)), _186, fma(_152, _182, fma(_134, _164, _130 * _83)) * _184);
    float _206 = fma(_194, vp_c3_1._m0[0].z, fma(_190, vp_c3_1._m0[0].y, _188 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _51.z = _194 + (-vp_c3_1._m0[13].w);
    float _208 = fma(_194, vp_c3_1._m0[1].z, fma(_190, vp_c3_1._m0[1].y, _188 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _210 = inversesqrt(fma(_202, _202, fma(_200, _200, _196 * _196)));
    float _212 = inversesqrt(fma(_192, _192, fma(_204, _204, _198 * _198)));
    float _214 = fma(_194, vp_c3_1._m0[2].z, fma(_190, vp_c3_1._m0[2].y, _188 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _49.w = _214;
    _53.z = fma(_194, vp_c3_1._m0[37].z, fma(_190, vp_c3_1._m0[37].y, _188 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _55.x = _196 * _210;
    _55.y = _200 * _210;
    _47.x = _198 * _212;
    _47.y = _204 * _212;
    _53.y = fma(_194, vp_c3_1._m0[36].z, fma(_190, vp_c3_1._m0[36].y, _188 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _53.x = fma(_194, vp_c3_1._m0[35].z, fma(_190, vp_c3_1._m0[35].y, _188 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _55.z = _202 * _210;
    _47.z = _192 * _212;
    float _216 = fma(_214, vp_c3_1._m0[8].z, fma(_208, vp_c3_1._m0[8].y, _206 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_214, vp_c3_1._m0[9].z, fma(_208, vp_c3_1._m0[9].y, _206 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _218 = fma(_214, vp_c3_1._m0[7].z, fma(_208, vp_c3_1._m0[7].y, _206 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _216;
    float _220 = fma(_214, vp_c3_1._m0[10].z, fma(_208, vp_c3_1._m0[10].y, _206 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _57.y = _216;
    gl_Position.x = _218;
    _57.x = _218;
    gl_Position.w = _220;
    _57.w = _220;
}


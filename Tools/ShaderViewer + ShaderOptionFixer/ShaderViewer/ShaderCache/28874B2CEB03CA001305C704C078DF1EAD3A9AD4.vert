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
layout(location = 9) in vec4 _35;
layout(location = 8) in vec4 _37;
layout(location = 1) in vec4 _39;
layout(location = 0) in vec4 _41;
layout(location = 2) in vec4 _43;
layout(location = 4) in vec4 _45;
layout(location = 7) out vec4 _47;
layout(location = 9) out vec4 _49;
layout(location = 2) out vec4 _51;
layout(location = 0) out vec4 _53;
layout(location = 3) out vec4 _55;
layout(location = 4) out vec4 _57;
layout(location = 1) out vec4 _59;
layout(location = 6) out vec4 _61;
layout(location = 8) out vec4 _63;
layout(location = 5) out vec4 _65;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _72 = _33.y;
    float _74 = _33.x;
    float _76 = _35.x;
    float _78 = _37.y;
    float _80 = _35.y;
    float _82 = _37.x;
    float _84 = _39.x;
    float _86 = _41.x;
    int _89 = ((int(uint(floatBitsToInt(_72)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_72) & 65535) * 48) + 16);
    float _91 = _43.x;
    float _93 = _39.y;
    int _95 = ((int(uint(floatBitsToInt(_74)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_74) & 65535) * 48) + 32);
    uint _98 = uint(int(uint(_89 + (-16)) >> uint(2)));
    float _100 = vp_c8_1._m0[int(uint(int(_98)) >> uint(2))][int(_98) & 3];
    int _102 = int(_98) + 1;
    float _104 = vp_c8_1._m0[int(uint(_102) >> uint(2))][_102 & 3];
    uint _106 = uint(int(uint(_89) >> uint(2)));
    float _108 = vp_c8_1._m0[int(uint(int(_106)) >> uint(2))][int(_106) & 3];
    int _110 = int(_106) + 1;
    float _112 = vp_c8_1._m0[int(uint(_110) >> uint(2))][_110 & 3];
    uint _114 = uint(int(uint(_89 + 16) >> uint(2)));
    float _116 = vp_c8_1._m0[int(uint(int(_114)) >> uint(2))][int(_114) & 3];
    int _118 = int(_114) + 1;
    float _120 = vp_c8_1._m0[int(uint(_118) >> uint(2))][_118 & 3];
    uint _122 = uint(int(uint(_89 + 8) >> uint(2)));
    float _124 = vp_c8_1._m0[int(uint(int(_122)) >> uint(2))][int(_122) & 3];
    int _126 = int(_122) + 1;
    uint _128 = uint(int(uint(_95 + (-32)) >> uint(2)));
    float _130 = vp_c8_1._m0[int(uint(int(_128)) >> uint(2))][int(_128) & 3];
    int _132 = int(_128) + 1;
    float _134 = vp_c8_1._m0[int(uint(_132) >> uint(2))][_132 & 3];
    uint _136 = uint(int(uint(_95 + (-16)) >> uint(2)));
    float _138 = vp_c8_1._m0[int(uint(int(_136)) >> uint(2))][int(_136) & 3];
    int _140 = int(_136) + 1;
    float _142 = vp_c8_1._m0[int(uint(_140) >> uint(2))][_140 & 3];
    uint _144 = uint(int(uint(_95) >> uint(2)));
    float _146 = vp_c8_1._m0[int(uint(int(_144)) >> uint(2))][int(_144) & 3];
    int _148 = int(_144) + 1;
    float _150 = vp_c8_1._m0[int(uint(_148) >> uint(2))][_148 & 3];
    uint _152 = uint(int(uint(_89 + (-8)) >> uint(2)));
    float _154 = vp_c8_1._m0[int(uint(int(_152)) >> uint(2))][int(_152) & 3];
    int _156 = int(_152) + 1;
    float _158 = _41.y;
    float _160 = _43.y;
    float _162 = _41.z;
    uint _164 = uint(int(uint(_95 + (-24)) >> uint(2)));
    float _166 = vp_c8_1._m0[int(uint(int(_164)) >> uint(2))][int(_164) & 3];
    int _168 = int(_164) + 1;
    uint _170 = uint(int(uint(_95 + 8) >> uint(2)));
    float _172 = vp_c8_1._m0[int(uint(int(_170)) >> uint(2))][int(_170) & 3];
    int _174 = int(_170) + 1;
    uint _176 = uint(int(uint(_89 + 24) >> uint(2)));
    float _178 = vp_c8_1._m0[int(uint(int(_176)) >> uint(2))][int(_176) & 3];
    int _180 = int(_176) + 1;
    uint _182 = uint(int(uint(_95 + (-8)) >> uint(2)));
    float _184 = vp_c8_1._m0[int(uint(int(_182)) >> uint(2))][int(_182) & 3];
    int _186 = int(_182) + 1;
    float _188 = _39.z;
    float _190 = _45.y;
    float _192 = _45.x;
    float _194 = _43.z;
    _47.x = _84;
    _47.y = _93;
    _49.z = fma(_76, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _51.w = _43.w;
    _47.z = _188;
    _49.x = fma(_76, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _49.w = fma(_80, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _49.y = fma(_80, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _53.x = fma(_82, vp_c5_1._m0[111].x, _78 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _53.y = fma(_82, vp_c5_1._m0[111].y, _78 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _196 = fma(fma(_166, _188, fma(_134, _93, _130 * _84)), _192, fma(_154, _188, fma(_104, _93, _100 * _84)) * _190);
    float _198 = fma(fma(_184, _188, fma(_142, _93, _138 * _84)), _192, fma(_124, _188, fma(_112, _93, _108 * _84)) * _190);
    float _200 = fma(fma(_172, _188, fma(_150, _93, _146 * _84)), _192, fma(_178, _188, fma(_120, _93, _116 * _84)) * _190);
    float _202 = fma(vp_c8_1._m0[int(uint(_186) >> uint(2))][_186 & 3] + fma(_184, _162, fma(_142, _158, _138 * _86)), _192, (vp_c8_1._m0[int(uint(_126) >> uint(2))][_126 & 3] + fma(_124, _162, fma(_112, _158, _108 * _86))) * _190);
    _55.y = _202;
    float _204 = fma(vp_c8_1._m0[int(uint(_168) >> uint(2))][_168 & 3] + fma(_166, _162, fma(_134, _158, _130 * _86)), _192, (vp_c8_1._m0[int(uint(_156) >> uint(2))][_156 & 3] + fma(_154, _162, fma(_104, _158, _100 * _86))) * _190);
    _55.x = _204;
    float _206 = fma(vp_c8_1._m0[int(uint(_174) >> uint(2))][_174 & 3] + fma(_172, _162, fma(_150, _158, _146 * _86)), _192, (vp_c8_1._m0[int(uint(_180) >> uint(2))][_180 & 3] + fma(_178, _162, fma(_120, _158, _116 * _86))) * _190);
    float _208 = inversesqrt(fma(_200, _200, fma(_198, _198, _196 * _196)));
    float _210 = fma(fma(_166, _194, fma(_134, _160, _130 * _91)), _192, fma(_154, _194, fma(_104, _160, _100 * _91)) * _190);
    _55.z = _206;
    float _212 = fma(fma(_184, _194, fma(_142, _160, _138 * _91)), _192, fma(_124, _194, fma(_112, _160, _108 * _91)) * _190);
    float _214 = fma(fma(_172, _194, fma(_150, _160, _146 * _91)), _192, fma(_178, _194, fma(_120, _160, _116 * _91)) * _190);
    _57.x = _204 + (-vp_c3_1._m0[11].w);
    _59.x = _196 * _208;
    _57.y = _202 + (-vp_c3_1._m0[12].w);
    float _216 = fma(_206, vp_c3_1._m0[0].z, fma(_202, vp_c3_1._m0[0].y, _204 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _57.z = _206 + (-vp_c3_1._m0[13].w);
    float _218 = fma(_206, vp_c3_1._m0[1].z, fma(_202, vp_c3_1._m0[1].y, _204 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _220 = fma(_206, vp_c3_1._m0[2].z, fma(_202, vp_c3_1._m0[2].y, _204 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    float _222 = inversesqrt(fma(_214, _214, fma(_212, _212, _210 * _210)));
    _55.w = _220;
    _59.y = _198 * _208;
    _61.x = _86 + (-vp_c7_1._m0[3].x);
    _51.x = _210 * _222;
    _51.y = _212 * _222;
    _61.y = _158 + (-vp_c7_1._m0[3].y);
    _61.z = _162 + (-vp_c7_1._m0[3].z);
    _59.z = _200 * _208;
    _63.z = fma(_206, vp_c3_1._m0[37].z, fma(_202, vp_c3_1._m0[37].y, _204 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _63.y = fma(_206, vp_c3_1._m0[36].z, fma(_202, vp_c3_1._m0[36].y, _204 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _63.x = fma(_206, vp_c3_1._m0[35].z, fma(_202, vp_c3_1._m0[35].y, _204 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _51.z = _214 * _222;
    float _224 = fma(_220, vp_c3_1._m0[8].z, fma(_218, vp_c3_1._m0[8].y, _216 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_220, vp_c3_1._m0[9].z, fma(_218, vp_c3_1._m0[9].y, _216 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _226 = fma(_220, vp_c3_1._m0[7].z, fma(_218, vp_c3_1._m0[7].y, _216 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _224;
    float _228 = fma(_220, vp_c3_1._m0[10].z, fma(_218, vp_c3_1._m0[10].y, _216 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _65.y = _224;
    gl_Position.x = _226;
    _65.x = _226;
    gl_Position.w = _228;
    _65.w = _228;
}


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
layout(location = 0) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 2) in vec4 _39;
layout(location = 8) in vec4 _41;
layout(location = 10) in vec4 _43;
layout(location = 4) in vec4 _45;
layout(location = 3) out vec4 _47;
layout(location = 4) out vec4 _49;
layout(location = 5) out vec4 _51;
layout(location = 1) out vec4 _53;
layout(location = 0) out vec4 _55;
layout(location = 2) out vec4 _57;
layout(location = 7) out vec4 _59;
layout(location = 6) out vec4 _61;

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
    int _77 = ((int(uint(floatBitsToInt(_68)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_68) & 65535) * 48);
    float _79 = _39.x;
    int _81 = ((int(uint(floatBitsToInt(_70)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_70) & 65535) * 48);
    uint _84 = uint(int(uint(_77) >> uint(2)));
    float _86 = vp_c7_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c7_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    uint _92 = uint(int(uint(_77 + 32) >> uint(2)));
    float _94 = vp_c7_1._m0[int(uint(int(_92)) >> uint(2))][int(_92) & 3];
    int _96 = int(_92) + 1;
    float _98 = vp_c7_1._m0[int(uint(_96) >> uint(2))][_96 & 3];
    uint _100 = uint(int(uint(_77 + 16) >> uint(2)));
    float _102 = vp_c7_1._m0[int(uint(int(_100)) >> uint(2))][int(_100) & 3];
    int _104 = int(_100) + 1;
    float _106 = vp_c7_1._m0[int(uint(_104) >> uint(2))][_104 & 3];
    uint _108 = uint(int(uint(_81) >> uint(2)));
    float _110 = vp_c7_1._m0[int(uint(int(_108)) >> uint(2))][int(_108) & 3];
    int _112 = int(_108) + 1;
    float _114 = vp_c7_1._m0[int(uint(_112) >> uint(2))][_112 & 3];
    uint _116 = uint(int(uint(_81 + 32) >> uint(2)));
    float _118 = vp_c7_1._m0[int(uint(int(_116)) >> uint(2))][int(_116) & 3];
    int _120 = int(_116) + 1;
    float _122 = vp_c7_1._m0[int(uint(_120) >> uint(2))][_120 & 3];
    uint _124 = uint(int(uint(_81 + 16) >> uint(2)));
    float _126 = vp_c7_1._m0[int(uint(int(_124)) >> uint(2))][int(_124) & 3];
    int _128 = int(_124) + 1;
    float _130 = vp_c7_1._m0[int(uint(_128) >> uint(2))][_128 & 3];
    uint _132 = uint(int(uint(_81 + 8) >> uint(2)));
    float _134 = vp_c7_1._m0[int(uint(int(_132)) >> uint(2))][int(_132) & 3];
    int _136 = int(_132) + 1;
    float _138 = vp_c7_1._m0[int(uint(_136) >> uint(2))][_136 & 3];
    float _140 = _35.y;
    float _142 = _37.y;
    float _144 = _39.y;
    float _146 = _35.z;
    float _148 = _37.z;
    float _150 = _39.z;
    uint _152 = uint(int(uint(_77 + 8) >> uint(2)));
    float _154 = vp_c7_1._m0[int(uint(int(_152)) >> uint(2))][int(_152) & 3];
    int _156 = int(_152) + 1;
    float _158 = vp_c7_1._m0[int(uint(_156) >> uint(2))][_156 & 3];
    float _160 = _41.x;
    uint _162 = uint(int(uint(_81 + 40) >> uint(2)));
    float _164 = vp_c7_1._m0[int(uint(int(_162)) >> uint(2))][int(_162) & 3];
    int _166 = int(_162) + 1;
    float _168 = vp_c7_1._m0[int(uint(_166) >> uint(2))][_166 & 3];
    float _170 = _43.y;
    float _172 = _41.y;
    uint _174 = uint(int(uint(_77 + 40) >> uint(2)));
    float _176 = vp_c7_1._m0[int(uint(int(_174)) >> uint(2))][int(_174) & 3];
    int _178 = int(_174) + 1;
    float _180 = vp_c7_1._m0[int(uint(_178) >> uint(2))][_178 & 3];
    uint _182 = uint(int(uint(_81 + 24) >> uint(2)));
    float _184 = vp_c7_1._m0[int(uint(int(_182)) >> uint(2))][int(_182) & 3];
    int _186 = int(_182) + 1;
    float _188 = vp_c7_1._m0[int(uint(_186) >> uint(2))][_186 & 3];
    uint _190 = uint(int(uint(_77 + 24) >> uint(2)));
    float _192 = vp_c7_1._m0[int(uint(int(_190)) >> uint(2))][int(_190) & 3];
    int _194 = int(_190) + 1;
    float _196 = vp_c7_1._m0[int(uint(_194) >> uint(2))][_194 & 3];
    float _198 = _43.x;
    float _200 = _45.y;
    float _202 = _45.x;
    _47.w = _39.w;
    float _204 = fma(_188 + fma(_184, _146, fma(_130, _140, _126 * _72)), _202, (_196 + fma(_192, _146, fma(_106, _140, _102 * _72))) * _200);
    float _206 = fma(_138 + fma(_134, _146, fma(_114, _140, _110 * _72)), _202, (_158 + fma(_154, _146, fma(_90, _140, _86 * _72))) * _200);
    _49.y = _204;
    _49.x = _206;
    float _208 = fma(fma(0.0, _138, fma(_134, _148, fma(_114, _142, _110 * _74))), _202, fma(0.0, _158, fma(_154, _148, fma(_90, _142, _86 * _74))) * _200);
    _51.y = _204 + (-vp_c3_1._m0[12].w);
    float _210 = fma(fma(0.0, _138, fma(_134, _150, fma(_114, _144, _110 * _79))), _202, fma(0.0, _158, fma(_154, _150, fma(_90, _144, _86 * _79))) * _200);
    _51.x = _206 + (-vp_c3_1._m0[11].w);
    float _212 = fma(_168 + fma(_164, _146, fma(_122, _140, _118 * _72)), _202, (_180 + fma(_176, _146, fma(_98, _140, _94 * _72))) * _200);
    float _214 = fma(fma(0.0, _188, fma(_184, _148, fma(_130, _142, _126 * _74))), _202, fma(0.0, _196, fma(_192, _148, fma(_106, _142, _102 * _74))) * _200);
    _49.z = _212;
    float _216 = fma(fma(0.0, _188, fma(_184, _150, fma(_130, _144, _126 * _79))), _202, fma(0.0, _196, fma(_192, _150, fma(_106, _144, _102 * _79))) * _200);
    float _218 = fma(fma(0.0, _168, fma(_164, _148, fma(_122, _142, _118 * _74))), _202, fma(0.0, _180, fma(_176, _148, fma(_98, _142, _94 * _74))) * _200);
    _51.z = _212 + (-vp_c3_1._m0[13].w);
    float _220 = fma(fma(0.0, _168, fma(_164, _150, fma(_122, _144, _118 * _79))), _202, fma(0.0, _180, fma(_176, _150, fma(_98, _144, _94 * _79))) * _200);
    _53.w = fma(_212, -vp_c5_1._m0[16].y, 0.5);
    _55.x = fma(_160, vp_c4_1._m0[59].x, _172 * vp_c4_1._m0[59].z) + vp_c4_1._m0[60].x;
    float _222 = inversesqrt(fma(_218, _218, fma(_214, _214, _208 * _208)));
    float _224 = inversesqrt(fma(_220, _220, fma(_216, _216, _210 * _210)));
    float _226 = fma(_212, vp_c3_1._m0[0].z, fma(_204, vp_c3_1._m0[0].y, _206 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _228 = fma(_212, vp_c3_1._m0[1].z, fma(_204, vp_c3_1._m0[1].y, _206 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _57.x = _208 * _222;
    _57.y = _214 * _222;
    _47.x = _210 * _224;
    _47.y = _216 * _224;
    _57.z = _218 * _222;
    _47.z = _220 * _224;
    float _230 = fma(_212, vp_c3_1._m0[2].z, fma(_204, vp_c3_1._m0[2].y, _206 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _49.w = _230;
    _55.z = fma(_198, vp_c4_1._m0[61].x, _170 * vp_c4_1._m0[61].z) + vp_c4_1._m0[62].x;
    _55.w = fma(_198, vp_c4_1._m0[61].y, _170 * vp_c4_1._m0[61].w) + vp_c4_1._m0[62].y;
    _55.y = fma(_160, vp_c4_1._m0[59].y, _172 * vp_c4_1._m0[59].w) + vp_c4_1._m0[60].y;
    _53.z = fma(_206, vp_c5_1._m0[16].x, 0.5);
    _59.x = fma(_212, vp_c3_1._m0[35].z, fma(_204, vp_c3_1._m0[35].y, _206 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _59.y = fma(_212, vp_c3_1._m0[36].z, fma(_204, vp_c3_1._m0[36].y, _206 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _59.z = fma(_212, vp_c3_1._m0[37].z, fma(_204, vp_c3_1._m0[37].y, _206 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _232 = fma(_230, vp_c3_1._m0[8].z, fma(_228, vp_c3_1._m0[8].y, _226 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_230, vp_c3_1._m0[9].z, fma(_228, vp_c3_1._m0[9].y, _226 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _234 = fma(_230, vp_c3_1._m0[7].z, fma(_228, vp_c3_1._m0[7].y, _226 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _232;
    float _236 = fma(_230, vp_c3_1._m0[10].z, fma(_228, vp_c3_1._m0[10].y, _226 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _61.y = _232;
    gl_Position.x = _234;
    _61.x = _234;
    gl_Position.w = _236;
    _61.w = _236;
}


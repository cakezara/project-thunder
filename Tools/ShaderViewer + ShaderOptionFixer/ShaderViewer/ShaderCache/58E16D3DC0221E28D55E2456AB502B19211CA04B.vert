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

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 6) in vec4 _29;
layout(location = 0) in vec4 _31;
layout(location = 4) in vec4 _33;
layout(location = 0) out vec4 _35;
layout(location = 2) out vec4 _37;
layout(location = 1) out vec4 _39;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _46 = _29.y;
    float _48 = _29.x;
    float _50 = _29.z;
    float _52 = _31.x;
    float _54 = _31.y;
    float _56 = _31.z;
    int _59 = ((int(uint(floatBitsToInt(_46)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_46) & 65535) * 48);
    uint _62 = uint(int(uint(_59 + 16) >> uint(2)));
    int _64 = int(_62) + 1;
    int _66 = ((int(uint(floatBitsToInt(_48)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_48) & 65535) * 48) + 16);
    uint _68 = uint(int(uint(_59) >> uint(2)));
    int _70 = int(_68) + 1;
    int _72 = ((int(uint(floatBitsToInt(_50)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_50) & 65535) * 48);
    uint _74 = uint(int(uint(_59 + 32) >> uint(2)));
    int _76 = int(_74) + 1;
    uint _78 = uint(int(uint(_66 + 16) >> uint(2)));
    int _80 = int(_78) + 1;
    uint _82 = uint(int(uint(_66 + (-16)) >> uint(2)));
    int _84 = int(_82) + 1;
    uint _86 = uint(int(uint(_59 + 8) >> uint(2)));
    int _88 = int(_86) + 1;
    uint _90 = uint(int(uint(_66) >> uint(2)));
    int _92 = int(_90) + 1;
    uint _94 = uint(int(uint(_72) >> uint(2)));
    int _96 = int(_94) + 1;
    uint _98 = uint(int(uint(_72 + 16) >> uint(2)));
    int _100 = int(_98) + 1;
    uint _102 = uint(int(uint(_59 + 24) >> uint(2)));
    int _104 = int(_102) + 1;
    uint _106 = uint(int(uint(_66 + (-8)) >> uint(2)));
    int _108 = int(_106) + 1;
    uint _110 = uint(int(uint(_72 + 32) >> uint(2)));
    int _112 = int(_110) + 1;
    uint _114 = uint(int(uint(_59 + 40) >> uint(2)));
    int _116 = int(_114) + 1;
    uint _118 = uint(int(uint(_66 + 8) >> uint(2)));
    int _120 = int(_118) + 1;
    uint _122 = uint(int(uint(_72 + 8) >> uint(2)));
    int _124 = int(_122) + 1;
    uint _126 = uint(int(uint(_72 + 24) >> uint(2)));
    int _128 = int(_126) + 1;
    uint _130 = uint(int(uint(_66 + 24) >> uint(2)));
    int _132 = int(_130) + 1;
    uint _134 = uint(int(uint(_72 + 40) >> uint(2)));
    int _136 = int(_134) + 1;
    float _138 = _33.y;
    float _140 = _33.x;
    float _142 = _33.z;
    float _144 = fma(vp_c8_1._m0[int(uint(_124) >> uint(2))][_124 & 3] + fma(vp_c8_1._m0[int(uint(int(_122)) >> uint(2))][int(_122) & 3], _56, fma(vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3], _54, vp_c8_1._m0[int(uint(int(_94)) >> uint(2))][int(_94) & 3] * _52)), _142, fma(vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3] + fma(vp_c8_1._m0[int(uint(int(_106)) >> uint(2))][int(_106) & 3], _56, fma(vp_c8_1._m0[int(uint(_84) >> uint(2))][_84 & 3], _54, vp_c8_1._m0[int(uint(int(_82)) >> uint(2))][int(_82) & 3] * _52)), _140, (vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3] + fma(vp_c8_1._m0[int(uint(int(_86)) >> uint(2))][int(_86) & 3], _56, fma(vp_c8_1._m0[int(uint(_70) >> uint(2))][_70 & 3], _54, vp_c8_1._m0[int(uint(int(_68)) >> uint(2))][int(_68) & 3] * _52))) * _138));
    _35.x = _144;
    float _146 = fma(vp_c8_1._m0[int(uint(_128) >> uint(2))][_128 & 3] + fma(vp_c8_1._m0[int(uint(int(_126)) >> uint(2))][int(_126) & 3], _56, fma(vp_c8_1._m0[int(uint(_100) >> uint(2))][_100 & 3], _54, vp_c8_1._m0[int(uint(int(_98)) >> uint(2))][int(_98) & 3] * _52)), _142, fma(vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3] + fma(vp_c8_1._m0[int(uint(int(_118)) >> uint(2))][int(_118) & 3], _56, fma(vp_c8_1._m0[int(uint(_92) >> uint(2))][_92 & 3], _54, vp_c8_1._m0[int(uint(int(_90)) >> uint(2))][int(_90) & 3] * _52)), _140, (vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3] + fma(vp_c8_1._m0[int(uint(int(_102)) >> uint(2))][int(_102) & 3], _56, fma(vp_c8_1._m0[int(uint(_64) >> uint(2))][_64 & 3], _54, vp_c8_1._m0[int(uint(int(_62)) >> uint(2))][int(_62) & 3] * _52))) * _138));
    _35.y = _146;
    float _148 = fma(vp_c8_1._m0[int(uint(_136) >> uint(2))][_136 & 3] + fma(vp_c8_1._m0[int(uint(int(_134)) >> uint(2))][int(_134) & 3], _56, fma(vp_c8_1._m0[int(uint(_112) >> uint(2))][_112 & 3], _54, vp_c8_1._m0[int(uint(int(_110)) >> uint(2))][int(_110) & 3] * _52)), _142, fma(vp_c8_1._m0[int(uint(_132) >> uint(2))][_132 & 3] + fma(vp_c8_1._m0[int(uint(int(_130)) >> uint(2))][int(_130) & 3], _56, fma(vp_c8_1._m0[int(uint(_80) >> uint(2))][_80 & 3], _54, vp_c8_1._m0[int(uint(int(_78)) >> uint(2))][int(_78) & 3] * _52)), _140, (vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3] + fma(vp_c8_1._m0[int(uint(int(_114)) >> uint(2))][int(_114) & 3], _56, fma(vp_c8_1._m0[int(uint(_76) >> uint(2))][_76 & 3], _54, vp_c8_1._m0[int(uint(int(_74)) >> uint(2))][int(_74) & 3] * _52))) * _138));
    _35.z = _148;
    float _150 = fma(_148, vp_c3_1._m0[0].z, fma(_146, vp_c3_1._m0[0].y, _144 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _37.z = fma(_148, vp_c3_1._m0[37].z, fma(_146, vp_c3_1._m0[37].y, _144 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _152 = fma(_148, vp_c3_1._m0[1].z, fma(_146, vp_c3_1._m0[1].y, _144 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _154 = fma(_148, vp_c3_1._m0[2].z, fma(_146, vp_c3_1._m0[2].y, _144 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _35.w = _154;
    _37.y = fma(_148, vp_c3_1._m0[36].z, fma(_146, vp_c3_1._m0[36].y, _144 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _37.x = fma(_148, vp_c3_1._m0[35].z, fma(_146, vp_c3_1._m0[35].y, _144 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _156 = fma(_154, vp_c3_1._m0[7].z, fma(_152, vp_c3_1._m0[7].y, _150 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.z = fma(_154, vp_c3_1._m0[9].z, fma(_152, vp_c3_1._m0[9].y, _150 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _158 = fma(_154, vp_c3_1._m0[8].z, fma(_152, vp_c3_1._m0[8].y, _150 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.x = _156;
    float _160 = fma(_154, vp_c3_1._m0[10].z, fma(_152, vp_c3_1._m0[10].y, _150 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _39.x = _156;
    gl_Position.y = _158;
    _39.y = _158;
    gl_Position.w = _160;
    _39.w = _160;
}


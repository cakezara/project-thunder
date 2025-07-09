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
layout(location = 1) in vec4 _33;
layout(location = 4) in vec4 _35;
layout(location = 1) out vec4 _37;
layout(location = 2) out vec4 _39;
layout(location = 4) out vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 3) out vec4 _45;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _52 = _29.y;
    float _54 = _29.x;
    float _56 = _31.x;
    float _58 = _33.x;
    float _60 = _31.y;
    float _62 = _33.y;
    float _64 = _31.z;
    float _66 = _33.z;
    int _69 = ((int(uint(floatBitsToInt(_52)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_52) & 65535) * 48) + 16);
    int _71 = ((int(uint(floatBitsToInt(_54)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_54) & 65535) * 48) + 32);
    uint _74 = uint(int(uint(_69 + (-16)) >> uint(2)));
    float _76 = vp_c8_1._m0[int(uint(int(_74)) >> uint(2))][int(_74) & 3];
    int _78 = int(_74) + 1;
    float _80 = vp_c8_1._m0[int(uint(_78) >> uint(2))][_78 & 3];
    uint _82 = uint(int(uint(_69) >> uint(2)));
    float _84 = vp_c8_1._m0[int(uint(int(_82)) >> uint(2))][int(_82) & 3];
    int _86 = int(_82) + 1;
    float _88 = vp_c8_1._m0[int(uint(_86) >> uint(2))][_86 & 3];
    uint _90 = uint(int(uint(_69 + 16) >> uint(2)));
    float _92 = vp_c8_1._m0[int(uint(int(_90)) >> uint(2))][int(_90) & 3];
    int _94 = int(_90) + 1;
    float _96 = vp_c8_1._m0[int(uint(_94) >> uint(2))][_94 & 3];
    uint _98 = uint(int(uint(_69 + (-8)) >> uint(2)));
    float _100 = vp_c8_1._m0[int(uint(int(_98)) >> uint(2))][int(_98) & 3];
    int _102 = int(_98) + 1;
    uint _104 = uint(int(uint(_71 + (-32)) >> uint(2)));
    float _106 = vp_c8_1._m0[int(uint(int(_104)) >> uint(2))][int(_104) & 3];
    int _108 = int(_104) + 1;
    float _110 = vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3];
    uint _112 = uint(int(uint(_71 + (-16)) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    float _118 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3];
    uint _120 = uint(int(uint(_71) >> uint(2)));
    float _122 = vp_c8_1._m0[int(uint(int(_120)) >> uint(2))][int(_120) & 3];
    int _124 = int(_120) + 1;
    float _126 = vp_c8_1._m0[int(uint(_124) >> uint(2))][_124 & 3];
    uint _128 = uint(int(uint(_69 + 8) >> uint(2)));
    float _130 = vp_c8_1._m0[int(uint(int(_128)) >> uint(2))][int(_128) & 3];
    int _132 = int(_128) + 1;
    uint _134 = uint(int(uint(_71 + (-24)) >> uint(2)));
    float _136 = vp_c8_1._m0[int(uint(int(_134)) >> uint(2))][int(_134) & 3];
    int _138 = int(_134) + 1;
    uint _140 = uint(int(uint(_71 + (-8)) >> uint(2)));
    float _142 = vp_c8_1._m0[int(uint(int(_140)) >> uint(2))][int(_140) & 3];
    int _144 = int(_140) + 1;
    uint _146 = uint(int(uint(_69 + 24) >> uint(2)));
    float _148 = vp_c8_1._m0[int(uint(int(_146)) >> uint(2))][int(_146) & 3];
    int _150 = int(_146) + 1;
    uint _152 = uint(int(uint(_71 + 8) >> uint(2)));
    float _154 = vp_c8_1._m0[int(uint(int(_152)) >> uint(2))][int(_152) & 3];
    int _156 = int(_152) + 1;
    float _158 = _35.y;
    float _160 = _35.x;
    float _162 = fma(vp_c8_1._m0[int(uint(_138) >> uint(2))][_138 & 3] + fma(_136, _64, fma(_110, _60, _106 * _56)), _160, (vp_c8_1._m0[int(uint(_102) >> uint(2))][_102 & 3] + fma(_100, _64, fma(_80, _60, _76 * _56))) * _158);
    _37.x = _162;
    float _164 = fma(fma(_136, _66, fma(_110, _62, _106 * _58)), _160, fma(_100, _66, fma(_80, _62, _76 * _58)) * _158);
    float _166 = fma(vp_c8_1._m0[int(uint(_144) >> uint(2))][_144 & 3] + fma(_142, _64, fma(_118, _60, _114 * _56)), _160, (vp_c8_1._m0[int(uint(_132) >> uint(2))][_132 & 3] + fma(_130, _64, fma(_88, _60, _84 * _56))) * _158);
    _37.y = _166;
    float _168 = fma(fma(_142, _66, fma(_118, _62, _114 * _58)), _160, fma(_130, _66, fma(_88, _62, _84 * _58)) * _158);
    float _170 = fma(fma(_154, _66, fma(_126, _62, _122 * _58)), _160, fma(_148, _66, fma(_96, _62, _92 * _58)) * _158);
    float _172 = fma(vp_c8_1._m0[int(uint(_156) >> uint(2))][_156 & 3] + fma(_154, _64, fma(_126, _60, _122 * _56)), _160, (vp_c8_1._m0[int(uint(_150) >> uint(2))][_150 & 3] + fma(_148, _64, fma(_96, _60, _92 * _56))) * _158);
    _37.z = _172;
    _39.x = _162 + (-vp_c3_1._m0[11].w);
    _39.y = _166 + (-vp_c3_1._m0[12].w);
    float _174 = inversesqrt(fma(_170, _170, fma(_168, _168, _164 * _164)));
    _39.z = _172 + (-vp_c3_1._m0[13].w);
    float _176 = fma(_172, vp_c3_1._m0[0].z, fma(_166, vp_c3_1._m0[0].y, _162 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _41.z = fma(_172, vp_c3_1._m0[37].z, fma(_166, vp_c3_1._m0[37].y, _162 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _43.x = _164 * _174;
    _41.y = fma(_172, vp_c3_1._m0[36].z, fma(_166, vp_c3_1._m0[36].y, _162 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _43.y = _168 * _174;
    float _178 = fma(_172, vp_c3_1._m0[1].z, fma(_166, vp_c3_1._m0[1].y, _162 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _180 = fma(_172, vp_c3_1._m0[2].z, fma(_166, vp_c3_1._m0[2].y, _162 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _43.z = _170 * _174;
    _37.w = _180;
    _41.x = fma(_172, vp_c3_1._m0[35].z, fma(_166, vp_c3_1._m0[35].y, _162 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _182 = fma(_180, vp_c3_1._m0[8].z, fma(_178, vp_c3_1._m0[8].y, _176 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_180, vp_c3_1._m0[9].z, fma(_178, vp_c3_1._m0[9].y, _176 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _184 = fma(_180, vp_c3_1._m0[7].z, fma(_178, vp_c3_1._m0[7].y, _176 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _182;
    float _186 = fma(_180, vp_c3_1._m0[10].z, fma(_178, vp_c3_1._m0[10].y, _176 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _45.y = _182;
    gl_Position.x = _184;
    _45.x = _184;
    gl_Position.w = _186;
    _45.w = _186;
}


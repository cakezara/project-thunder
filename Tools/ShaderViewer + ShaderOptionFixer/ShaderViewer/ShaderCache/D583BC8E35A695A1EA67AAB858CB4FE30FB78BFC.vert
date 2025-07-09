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

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(location = 6) in vec4 _31;
layout(location = 0) in vec4 _33;
layout(location = 1) in vec4 _35;
layout(location = 4) in vec4 _37;
layout(location = 2) out vec4 _39;
layout(location = 3) out vec4 _41;
layout(location = 1) out vec4 _43;
layout(location = 5) out vec4 _45;
layout(location = 6) out vec4 _47;
layout(location = 7) out vec4 _49;
layout(location = 0) out vec4 _51;
layout(location = 4) out vec4 _53;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _60 = _31.y;
    float _62 = _31.x;
    float _64 = _33.x;
    float _66 = _35.x;
    float _68 = _33.y;
    float _70 = _35.y;
    float _72 = _33.z;
    float _74 = _35.z;
    int _77 = ((int(uint(floatBitsToInt(_60)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_60) & 65535) * 48) + 16);
    int _79 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_62) & 65535) * 48) + 32);
    uint _82 = uint(int(uint(_77 + (-16)) >> uint(2)));
    float _84 = vp_c8_1._m0[int(uint(int(_82)) >> uint(2))][int(_82) & 3];
    int _86 = int(_82) + 1;
    float _88 = vp_c8_1._m0[int(uint(_86) >> uint(2))][_86 & 3];
    uint _90 = uint(int(uint(_77) >> uint(2)));
    float _92 = vp_c8_1._m0[int(uint(int(_90)) >> uint(2))][int(_90) & 3];
    int _94 = int(_90) + 1;
    float _96 = vp_c8_1._m0[int(uint(_94) >> uint(2))][_94 & 3];
    uint _98 = uint(int(uint(_77 + 16) >> uint(2)));
    float _100 = vp_c8_1._m0[int(uint(int(_98)) >> uint(2))][int(_98) & 3];
    int _102 = int(_98) + 1;
    float _104 = vp_c8_1._m0[int(uint(_102) >> uint(2))][_102 & 3];
    uint _106 = uint(int(uint(_77 + (-8)) >> uint(2)));
    float _108 = vp_c8_1._m0[int(uint(int(_106)) >> uint(2))][int(_106) & 3];
    int _110 = int(_106) + 1;
    uint _112 = uint(int(uint(_79 + (-32)) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    float _118 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3];
    uint _120 = uint(int(uint(_79) >> uint(2)));
    float _122 = vp_c8_1._m0[int(uint(int(_120)) >> uint(2))][int(_120) & 3];
    int _124 = int(_120) + 1;
    float _126 = vp_c8_1._m0[int(uint(_124) >> uint(2))][_124 & 3];
    uint _128 = uint(int(uint(_79 + (-16)) >> uint(2)));
    float _130 = vp_c8_1._m0[int(uint(int(_128)) >> uint(2))][int(_128) & 3];
    int _132 = int(_128) + 1;
    float _134 = vp_c8_1._m0[int(uint(_132) >> uint(2))][_132 & 3];
    uint _136 = uint(int(uint(_77 + 8) >> uint(2)));
    float _138 = vp_c8_1._m0[int(uint(int(_136)) >> uint(2))][int(_136) & 3];
    int _140 = int(_136) + 1;
    uint _142 = uint(int(uint(_79 + (-24)) >> uint(2)));
    float _144 = vp_c8_1._m0[int(uint(int(_142)) >> uint(2))][int(_142) & 3];
    int _146 = int(_142) + 1;
    uint _148 = uint(int(uint(_79 + (-8)) >> uint(2)));
    float _150 = vp_c8_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    uint _154 = uint(int(uint(_77 + 24) >> uint(2)));
    float _156 = vp_c8_1._m0[int(uint(int(_154)) >> uint(2))][int(_154) & 3];
    int _158 = int(_154) + 1;
    uint _160 = uint(int(uint(_79 + 8) >> uint(2)));
    float _162 = vp_c8_1._m0[int(uint(int(_160)) >> uint(2))][int(_160) & 3];
    int _164 = int(_160) + 1;
    float _166 = _37.y;
    float _168 = _37.x;
    float _170 = fma(vp_c8_1._m0[int(uint(_146) >> uint(2))][_146 & 3] + fma(_144, _72, fma(_118, _68, _114 * _64)), _168, (vp_c8_1._m0[int(uint(_110) >> uint(2))][_110 & 3] + fma(_108, _72, fma(_88, _68, _84 * _64))) * _166);
    _39.x = _170;
    float _172 = fma(vp_c8_1._m0[int(uint(_152) >> uint(2))][_152 & 3] + fma(_150, _72, fma(_134, _68, _130 * _64)), _168, (vp_c8_1._m0[int(uint(_140) >> uint(2))][_140 & 3] + fma(_138, _72, fma(_96, _68, _92 * _64))) * _166);
    _39.y = _172;
    float _174 = fma(vp_c8_1._m0[int(uint(_164) >> uint(2))][_164 & 3] + fma(_162, _72, fma(_126, _68, _122 * _64)), _168, (vp_c8_1._m0[int(uint(_158) >> uint(2))][_158 & 3] + fma(_156, _72, fma(_104, _68, _100 * _64))) * _166);
    _39.z = _174;
    _41.y = _172 + (-vp_c3_1._m0[12].w);
    _43.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    _41.z = _174 + (-vp_c3_1._m0[13].w);
    _41.x = _170 + (-vp_c3_1._m0[11].w);
    _45.z = fma(_174, vp_c3_1._m0[62].z, fma(_172, vp_c3_1._m0[62].y, _170 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _45.w = fma(_174, vp_c3_1._m0[63].z, fma(_172, vp_c3_1._m0[63].y, _170 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _45.x = fma(_174, vp_c3_1._m0[60].z, fma(_172, vp_c3_1._m0[60].y, _170 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    _45.y = fma(_174, vp_c3_1._m0[61].z, fma(_172, vp_c3_1._m0[61].y, _170 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    float _176 = fma(fma(_144, _74, fma(_118, _70, _114 * _66)), _168, fma(_108, _74, fma(_88, _70, _84 * _66)) * _166);
    _47.z = fma(_174, vp_c3_1._m0[44].z, fma(_172, vp_c3_1._m0[44].y, _170 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    float _178 = fma(fma(_150, _74, fma(_134, _70, _130 * _66)), _168, fma(_138, _74, fma(_96, _70, _92 * _66)) * _166);
    _47.x = fma(_174, vp_c3_1._m0[42].z, fma(_172, vp_c3_1._m0[42].y, _170 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    float _180 = fma(fma(_162, _74, fma(_126, _70, _122 * _66)), _168, fma(_156, _74, fma(_104, _70, _100 * _66)) * _166);
    _47.w = fma(_174, vp_c3_1._m0[45].z, fma(_172, vp_c3_1._m0[45].y, _170 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _47.y = fma(_174, vp_c3_1._m0[43].z, fma(_172, vp_c3_1._m0[43].y, _170 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    _49.z = fma(_174, vp_c3_1._m0[48].z, fma(_172, vp_c3_1._m0[48].y, _170 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    float _182 = inversesqrt(fma(_180, _180, fma(_178, _178, _176 * _176)));
    _49.w = fma(_174, vp_c3_1._m0[49].z, fma(_172, vp_c3_1._m0[49].y, _170 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    float _184 = fma(_174, vp_c3_1._m0[0].z, fma(_172, vp_c3_1._m0[0].y, _170 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _51.x = _176 * _182;
    _49.y = fma(_174, vp_c3_1._m0[47].z, fma(_172, vp_c3_1._m0[47].y, _170 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _49.x = fma(_174, vp_c3_1._m0[46].z, fma(_172, vp_c3_1._m0[46].y, _170 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    _53.z = fma(_174, vp_c3_1._m0[37].z, fma(_172, vp_c3_1._m0[37].y, _170 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _51.y = _178 * _182;
    _51.z = _180 * _182;
    float _186 = fma(_174, vp_c3_1._m0[1].z, fma(_172, vp_c3_1._m0[1].y, _170 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _188 = fma(_174, vp_c3_1._m0[2].z, fma(_172, vp_c3_1._m0[2].y, _170 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _39.w = _188;
    _53.y = fma(_174, vp_c3_1._m0[36].z, fma(_172, vp_c3_1._m0[36].y, _170 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _53.x = fma(_174, vp_c3_1._m0[35].z, fma(_172, vp_c3_1._m0[35].y, _170 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    gl_Position.y = fma(_188, vp_c3_1._m0[8].z, fma(_186, vp_c3_1._m0[8].y, _184 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.w = fma(_188, vp_c3_1._m0[10].z, fma(_186, vp_c3_1._m0[10].y, _184 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_188, vp_c3_1._m0[9].z, fma(_186, vp_c3_1._m0[9].y, _184 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_188, vp_c3_1._m0[7].z, fma(_186, vp_c3_1._m0[7].y, _184 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


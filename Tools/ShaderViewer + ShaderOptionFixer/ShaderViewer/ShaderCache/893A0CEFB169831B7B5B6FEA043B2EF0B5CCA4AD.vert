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
layout(location = 4) in vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 2) out vec4 _45;
layout(location = 3) out vec4 _47;
layout(location = 5) out vec4 _49;
layout(location = 1) out vec4 _51;
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
    float _64 = _33.y;
    float _66 = _35.y;
    float _68 = _33.x;
    float _70 = _35.x;
    float _72 = _37.x;
    float _74 = _39.x;
    int _77 = ((int(uint(floatBitsToInt(_60)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_60) & 65535) * 48) + 16);
    float _79 = _37.y;
    float _81 = _39.y;
    int _83 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_62) & 65535) * 48) + 32);
    uint _86 = uint(int(uint(_77 + (-16)) >> uint(2)));
    float _88 = vp_c8_1._m0[int(uint(int(_86)) >> uint(2))][int(_86) & 3];
    int _90 = int(_86) + 1;
    float _92 = vp_c8_1._m0[int(uint(_90) >> uint(2))][_90 & 3];
    uint _94 = uint(int(uint(_77) >> uint(2)));
    float _96 = vp_c8_1._m0[int(uint(int(_94)) >> uint(2))][int(_94) & 3];
    int _98 = int(_94) + 1;
    float _100 = vp_c8_1._m0[int(uint(_98) >> uint(2))][_98 & 3];
    uint _102 = uint(int(uint(_77 + 16) >> uint(2)));
    float _104 = vp_c8_1._m0[int(uint(int(_102)) >> uint(2))][int(_102) & 3];
    int _106 = int(_102) + 1;
    float _108 = vp_c8_1._m0[int(uint(_106) >> uint(2))][_106 & 3];
    uint _110 = uint(int(uint(_77 + (-8)) >> uint(2)));
    float _112 = vp_c8_1._m0[int(uint(int(_110)) >> uint(2))][int(_110) & 3];
    int _114 = int(_110) + 1;
    uint _116 = uint(int(uint(_83 + (-32)) >> uint(2)));
    float _118 = vp_c8_1._m0[int(uint(int(_116)) >> uint(2))][int(_116) & 3];
    int _120 = int(_116) + 1;
    float _122 = vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3];
    uint _124 = uint(int(uint(_83 + (-16)) >> uint(2)));
    float _126 = vp_c8_1._m0[int(uint(int(_124)) >> uint(2))][int(_124) & 3];
    int _128 = int(_124) + 1;
    float _130 = vp_c8_1._m0[int(uint(_128) >> uint(2))][_128 & 3];
    uint _132 = uint(int(uint(_83) >> uint(2)));
    float _134 = vp_c8_1._m0[int(uint(int(_132)) >> uint(2))][int(_132) & 3];
    int _136 = int(_132) + 1;
    float _138 = vp_c8_1._m0[int(uint(_136) >> uint(2))][_136 & 3];
    uint _140 = uint(int(uint(_77 + 8) >> uint(2)));
    float _142 = vp_c8_1._m0[int(uint(int(_140)) >> uint(2))][int(_140) & 3];
    int _144 = int(_140) + 1;
    uint _146 = uint(int(uint(_83 + (-24)) >> uint(2)));
    float _148 = vp_c8_1._m0[int(uint(int(_146)) >> uint(2))][int(_146) & 3];
    int _150 = int(_146) + 1;
    uint _152 = uint(int(uint(_77 + 24) >> uint(2)));
    float _154 = vp_c8_1._m0[int(uint(int(_152)) >> uint(2))][int(_152) & 3];
    int _156 = int(_152) + 1;
    uint _158 = uint(int(uint(_83 + (-8)) >> uint(2)));
    float _160 = vp_c8_1._m0[int(uint(int(_158)) >> uint(2))][int(_158) & 3];
    int _162 = int(_158) + 1;
    uint _164 = uint(int(uint(_83 + 8) >> uint(2)));
    float _166 = vp_c8_1._m0[int(uint(int(_164)) >> uint(2))][int(_164) & 3];
    int _168 = int(_164) + 1;
    float _170 = _37.z;
    float _172 = _39.z;
    float _174 = _41.y;
    float _176 = _41.x;
    _43.z = fma(_68, vp_c5_1._m0[113].x, _64 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _43.w = fma(_68, vp_c5_1._m0[113].y, _64 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
    _43.x = fma(_70, vp_c5_1._m0[111].x, _66 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _43.y = fma(_70, vp_c5_1._m0[111].y, _66 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _178 = fma(vp_c8_1._m0[int(uint(_150) >> uint(2))][_150 & 3] + fma(_148, _170, fma(_122, _79, _118 * _72)), _176, (vp_c8_1._m0[int(uint(_114) >> uint(2))][_114 & 3] + fma(_112, _170, fma(_92, _79, _88 * _72))) * _174);
    _45.x = _178;
    float _180 = fma(vp_c8_1._m0[int(uint(_162) >> uint(2))][_162 & 3] + fma(_160, _170, fma(_130, _79, _126 * _72)), _176, (vp_c8_1._m0[int(uint(_144) >> uint(2))][_144 & 3] + fma(_142, _170, fma(_100, _79, _96 * _72))) * _174);
    _45.y = _180;
    float _182 = fma(fma(_148, _172, fma(_122, _81, _118 * _74)), _176, fma(_112, _172, fma(_92, _81, _88 * _74)) * _174);
    float _184 = fma(vp_c8_1._m0[int(uint(_168) >> uint(2))][_168 & 3] + fma(_166, _170, fma(_138, _79, _134 * _72)), _176, (vp_c8_1._m0[int(uint(_156) >> uint(2))][_156 & 3] + fma(_154, _170, fma(_108, _79, _104 * _72))) * _174);
    _45.z = _184;
    float _186 = fma(fma(_160, _172, fma(_130, _81, _126 * _74)), _176, fma(_142, _172, fma(_100, _81, _96 * _74)) * _174);
    _47.x = _178 + (-vp_c3_1._m0[11].w);
    float _188 = fma(fma(_166, _172, fma(_138, _81, _134 * _74)), _176, fma(_154, _172, fma(_108, _81, _104 * _74)) * _174);
    _47.y = _180 + (-vp_c3_1._m0[12].w);
    float _190 = inversesqrt(fma(_188, _188, fma(_186, _186, _182 * _182)));
    _47.z = _184 + (-vp_c3_1._m0[13].w);
    _49.z = fma(_184, vp_c3_1._m0[37].z, fma(_180, vp_c3_1._m0[37].y, _178 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _192 = fma(_184, vp_c3_1._m0[0].z, fma(_180, vp_c3_1._m0[0].y, _178 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _51.x = _182 * _190;
    float _194 = fma(_184, vp_c3_1._m0[1].z, fma(_180, vp_c3_1._m0[1].y, _178 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _51.y = _186 * _190;
    _49.y = fma(_184, vp_c3_1._m0[36].z, fma(_180, vp_c3_1._m0[36].y, _178 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _196 = fma(_184, vp_c3_1._m0[2].z, fma(_180, vp_c3_1._m0[2].y, _178 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _45.w = _196;
    _51.z = _188 * _190;
    _49.x = fma(_184, vp_c3_1._m0[35].z, fma(_180, vp_c3_1._m0[35].y, _178 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _198 = fma(_196, vp_c3_1._m0[8].z, fma(_194, vp_c3_1._m0[8].y, _192 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_196, vp_c3_1._m0[9].z, fma(_194, vp_c3_1._m0[9].y, _192 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _200 = fma(_196, vp_c3_1._m0[7].z, fma(_194, vp_c3_1._m0[7].y, _192 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _198;
    float _202 = fma(_196, vp_c3_1._m0[10].z, fma(_194, vp_c3_1._m0[10].y, _192 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _53.y = _198;
    gl_Position.x = _200;
    _53.x = _200;
    gl_Position.w = _202;
    _53.w = _202;
}


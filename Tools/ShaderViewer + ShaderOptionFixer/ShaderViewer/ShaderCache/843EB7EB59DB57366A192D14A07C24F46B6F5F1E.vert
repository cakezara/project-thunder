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
layout(location = 1) in vec4 _33;
layout(location = 8) in vec4 _35;
layout(location = 0) in vec4 _37;
layout(location = 2) in vec4 _39;
layout(location = 4) in vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 2) out vec4 _47;
layout(location = 4) out vec4 _49;
layout(location = 6) out vec4 _51;
layout(location = 1) out vec4 _53;
layout(location = 5) out vec4 _55;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _62 = _31.x;
    float _64 = _31.y;
    float _66 = _33.x;
    float _68 = _35.y;
    float _70 = _35.x;
    float _72 = _37.x;
    float _74 = _39.x;
    float _76 = _37.y;
    int _79 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_62) & 65535) * 48) + 32);
    float _81 = _33.y;
    int _83 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_64) & 65535) * 48) + 16);
    uint _86 = uint(int(uint(_79 + (-32)) >> uint(2)));
    float _88 = vp_c8_1._m0[int(uint(int(_86)) >> uint(2))][int(_86) & 3];
    int _90 = int(_86) + 1;
    float _92 = vp_c8_1._m0[int(uint(_90) >> uint(2))][_90 & 3];
    uint _94 = uint(int(uint(_79) >> uint(2)));
    float _96 = vp_c8_1._m0[int(uint(int(_94)) >> uint(2))][int(_94) & 3];
    int _98 = int(_94) + 1;
    float _100 = vp_c8_1._m0[int(uint(_98) >> uint(2))][_98 & 3];
    uint _102 = uint(int(uint(_79 + (-16)) >> uint(2)));
    float _104 = vp_c8_1._m0[int(uint(int(_102)) >> uint(2))][int(_102) & 3];
    int _106 = int(_102) + 1;
    float _108 = vp_c8_1._m0[int(uint(_106) >> uint(2))][_106 & 3];
    uint _110 = uint(int(uint(_79 + (-24)) >> uint(2)));
    float _112 = vp_c8_1._m0[int(uint(int(_110)) >> uint(2))][int(_110) & 3];
    int _114 = int(_110) + 1;
    uint _116 = uint(int(uint(_83 + (-16)) >> uint(2)));
    float _118 = vp_c8_1._m0[int(uint(int(_116)) >> uint(2))][int(_116) & 3];
    int _120 = int(_116) + 1;
    float _122 = vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3];
    uint _124 = uint(int(uint(_83) >> uint(2)));
    float _126 = vp_c8_1._m0[int(uint(int(_124)) >> uint(2))][int(_124) & 3];
    int _128 = int(_124) + 1;
    float _130 = vp_c8_1._m0[int(uint(_128) >> uint(2))][_128 & 3];
    uint _132 = uint(int(uint(_83 + 16) >> uint(2)));
    float _134 = vp_c8_1._m0[int(uint(int(_132)) >> uint(2))][int(_132) & 3];
    int _136 = int(_132) + 1;
    float _138 = vp_c8_1._m0[int(uint(_136) >> uint(2))][_136 & 3];
    uint _140 = uint(int(uint(_83 + (-8)) >> uint(2)));
    float _142 = vp_c8_1._m0[int(uint(int(_140)) >> uint(2))][int(_140) & 3];
    int _144 = int(_140) + 1;
    uint _146 = uint(int(uint(_83 + 8) >> uint(2)));
    float _148 = vp_c8_1._m0[int(uint(int(_146)) >> uint(2))][int(_146) & 3];
    int _150 = int(_146) + 1;
    uint _152 = uint(int(uint(_83 + 24) >> uint(2)));
    float _154 = vp_c8_1._m0[int(uint(int(_152)) >> uint(2))][int(_152) & 3];
    int _156 = int(_152) + 1;
    float _158 = _39.y;
    uint _160 = uint(int(uint(_79 + (-8)) >> uint(2)));
    float _162 = vp_c8_1._m0[int(uint(int(_160)) >> uint(2))][int(_160) & 3];
    int _164 = int(_160) + 1;
    float _166 = _33.z;
    uint _168 = uint(int(uint(_79 + 8) >> uint(2)));
    float _170 = vp_c8_1._m0[int(uint(int(_168)) >> uint(2))][int(_168) & 3];
    int _172 = int(_168) + 1;
    float _174 = _37.z;
    float _176 = _39.z;
    float _178 = _41.y;
    float _180 = _41.x;
    _43.x = fma(_70, vp_c5_1._m0[112].x, _68 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    float _182 = fma(vp_c8_1._m0[int(uint(_114) >> uint(2))][_114 & 3] + fma(_112, _174, fma(_92, _76, _88 * _72)), _180, (vp_c8_1._m0[int(uint(_144) >> uint(2))][_144 & 3] + fma(_142, _174, fma(_122, _76, _118 * _72))) * _178);
    _43.y = fma(_70, vp_c5_1._m0[112].y, _68 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    _45.x = _182;
    _47.w = _39.w;
    float _184 = fma(vp_c8_1._m0[int(uint(_164) >> uint(2))][_164 & 3] + fma(_162, _174, fma(_108, _76, _104 * _72)), _180, (vp_c8_1._m0[int(uint(_150) >> uint(2))][_150 & 3] + fma(_148, _174, fma(_130, _76, _126 * _72))) * _178);
    _45.y = _184;
    float _186 = fma(fma(_112, _166, fma(_92, _81, _88 * _66)), _180, fma(_142, _166, fma(_122, _81, _118 * _66)) * _178);
    float _188 = fma(fma(_162, _176, fma(_108, _158, _104 * _74)), _180, fma(_148, _176, fma(_130, _158, _126 * _74)) * _178);
    _49.y = _184 + (-vp_c3_1._m0[12].w);
    float _190 = fma(vp_c8_1._m0[int(uint(_172) >> uint(2))][_172 & 3] + fma(_170, _174, fma(_100, _76, _96 * _72)), _180, (vp_c8_1._m0[int(uint(_156) >> uint(2))][_156 & 3] + fma(_154, _174, fma(_138, _76, _134 * _72))) * _178);
    _45.z = _190;
    float _192 = fma(fma(_112, _176, fma(_92, _158, _88 * _74)), _180, fma(_142, _176, fma(_122, _158, _118 * _74)) * _178);
    float _194 = fma(fma(_162, _166, fma(_108, _81, _104 * _66)), _180, fma(_148, _166, fma(_130, _81, _126 * _66)) * _178);
    _49.x = _182 + (-vp_c3_1._m0[11].w);
    float _196 = fma(fma(_170, _166, fma(_100, _81, _96 * _66)), _180, fma(_154, _166, fma(_138, _81, _134 * _66)) * _178);
    float _198 = fma(fma(_170, _176, fma(_100, _158, _96 * _74)), _180, fma(_154, _176, fma(_138, _158, _134 * _74)) * _178);
    _49.z = _190 + (-vp_c3_1._m0[13].w);
    float _200 = fma(_190, vp_c3_1._m0[0].z, fma(_184, vp_c3_1._m0[0].y, _182 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _202 = fma(_190, vp_c3_1._m0[1].z, fma(_184, vp_c3_1._m0[1].y, _182 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _51.z = fma(_190, vp_c3_1._m0[37].z, fma(_184, vp_c3_1._m0[37].y, _182 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _204 = inversesqrt(fma(_196, _196, fma(_194, _194, _186 * _186)));
    float _206 = inversesqrt(fma(_198, _198, fma(_188, _188, _192 * _192)));
    float _208 = fma(_190, vp_c3_1._m0[2].z, fma(_184, vp_c3_1._m0[2].y, _182 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _45.w = _208;
    _51.y = fma(_190, vp_c3_1._m0[36].z, fma(_184, vp_c3_1._m0[36].y, _182 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _53.x = _186 * _204;
    _53.y = _194 * _204;
    _47.x = _192 * _206;
    _47.y = _188 * _206;
    _51.x = fma(_190, vp_c3_1._m0[35].z, fma(_184, vp_c3_1._m0[35].y, _182 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _53.z = _196 * _204;
    _47.z = _198 * _206;
    float _210 = fma(_208, vp_c3_1._m0[8].z, fma(_202, vp_c3_1._m0[8].y, _200 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_208, vp_c3_1._m0[9].z, fma(_202, vp_c3_1._m0[9].y, _200 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _212 = fma(_208, vp_c3_1._m0[7].z, fma(_202, vp_c3_1._m0[7].y, _200 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _210;
    float _214 = fma(_208, vp_c3_1._m0[10].z, fma(_202, vp_c3_1._m0[10].y, _200 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _55.y = _210;
    gl_Position.x = _212;
    _55.x = _212;
    gl_Position.w = _214;
    _55.w = _214;
}


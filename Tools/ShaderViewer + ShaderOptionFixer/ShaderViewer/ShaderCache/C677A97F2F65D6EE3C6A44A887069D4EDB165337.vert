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
layout(location = 8) in vec4 _33;
layout(location = 0) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 9) in vec4 _39;
layout(location = 4) in vec4 _41;
layout(location = 6) out vec4 _43;
layout(location = 0) out vec4 _45;
layout(location = 2) out vec4 _47;
layout(location = 3) out vec4 _49;
layout(location = 5) out vec4 _51;
layout(location = 1) out vec4 _53;
layout(location = 4) out vec4 _55;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _62 = _31.y;
    float _64 = _31.x;
    float _66 = _33.y;
    float _68 = _33.x;
    float _70 = _35.x;
    float _72 = _37.x;
    float _74 = _39.y;
    float _76 = _39.x;
    int _79 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_62) & 65535) * 48) + 16);
    float _81 = _35.y;
    float _83 = _37.y;
    int _85 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_64) & 65535) * 48) + 32);
    uint _88 = uint(int(uint(_79 + (-16)) >> uint(2)));
    float _90 = vp_c8_1._m0[int(uint(int(_88)) >> uint(2))][int(_88) & 3];
    int _92 = int(_88) + 1;
    float _94 = vp_c8_1._m0[int(uint(_92) >> uint(2))][_92 & 3];
    uint _96 = uint(int(uint(_79) >> uint(2)));
    float _98 = vp_c8_1._m0[int(uint(int(_96)) >> uint(2))][int(_96) & 3];
    int _100 = int(_96) + 1;
    float _102 = vp_c8_1._m0[int(uint(_100) >> uint(2))][_100 & 3];
    uint _104 = uint(int(uint(_79 + 16) >> uint(2)));
    float _106 = vp_c8_1._m0[int(uint(int(_104)) >> uint(2))][int(_104) & 3];
    int _108 = int(_104) + 1;
    float _110 = vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3];
    uint _112 = uint(int(uint(_79 + (-8)) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    uint _118 = uint(int(uint(_85 + (-32)) >> uint(2)));
    float _120 = vp_c8_1._m0[int(uint(int(_118)) >> uint(2))][int(_118) & 3];
    int _122 = int(_118) + 1;
    float _124 = vp_c8_1._m0[int(uint(_122) >> uint(2))][_122 & 3];
    uint _126 = uint(int(uint(_85 + (-16)) >> uint(2)));
    float _128 = vp_c8_1._m0[int(uint(int(_126)) >> uint(2))][int(_126) & 3];
    int _130 = int(_126) + 1;
    float _132 = vp_c8_1._m0[int(uint(_130) >> uint(2))][_130 & 3];
    uint _134 = uint(int(uint(_85) >> uint(2)));
    float _136 = vp_c8_1._m0[int(uint(int(_134)) >> uint(2))][int(_134) & 3];
    int _138 = int(_134) + 1;
    float _140 = vp_c8_1._m0[int(uint(_138) >> uint(2))][_138 & 3];
    uint _142 = uint(int(uint(_79 + 8) >> uint(2)));
    float _144 = vp_c8_1._m0[int(uint(int(_142)) >> uint(2))][int(_142) & 3];
    int _146 = int(_142) + 1;
    uint _148 = uint(int(uint(_85 + (-24)) >> uint(2)));
    float _150 = vp_c8_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    uint _154 = uint(int(uint(_85 + (-8)) >> uint(2)));
    float _156 = vp_c8_1._m0[int(uint(int(_154)) >> uint(2))][int(_154) & 3];
    int _158 = int(_154) + 1;
    uint _160 = uint(int(uint(_79 + 24) >> uint(2)));
    float _162 = vp_c8_1._m0[int(uint(int(_160)) >> uint(2))][int(_160) & 3];
    int _164 = int(_160) + 1;
    uint _166 = uint(int(uint(_85 + 8) >> uint(2)));
    float _168 = vp_c8_1._m0[int(uint(int(_166)) >> uint(2))][int(_166) & 3];
    int _170 = int(_166) + 1;
    float _172 = _37.z;
    float _174 = _35.z;
    float _176 = _41.y;
    float _178 = _41.x;
    _43.z = fma(_76, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _43.x = fma(_76, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _43.w = fma(_74, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _43.y = fma(_74, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _45.x = fma(_68, vp_c5_1._m0[111].x, _66 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _45.y = fma(_68, vp_c5_1._m0[111].y, _66 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _180 = fma(vp_c8_1._m0[int(uint(_152) >> uint(2))][_152 & 3] + fma(_150, _174, fma(_124, _81, _120 * _70)), _178, (vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3] + fma(_114, _174, fma(_94, _81, _90 * _70))) * _176);
    _47.x = _180;
    float _182 = fma(vp_c8_1._m0[int(uint(_158) >> uint(2))][_158 & 3] + fma(_156, _174, fma(_132, _81, _128 * _70)), _178, (vp_c8_1._m0[int(uint(_146) >> uint(2))][_146 & 3] + fma(_144, _174, fma(_102, _81, _98 * _70))) * _176);
    _47.y = _182;
    float _184 = fma(fma(_156, _172, fma(_132, _83, _128 * _72)), _178, fma(_144, _172, fma(_102, _83, _98 * _72)) * _176);
    float _186 = fma(fma(_150, _172, fma(_124, _83, _120 * _72)), _178, fma(_114, _172, fma(_94, _83, _90 * _72)) * _176);
    float _188 = fma(vp_c8_1._m0[int(uint(_170) >> uint(2))][_170 & 3] + fma(_168, _174, fma(_140, _81, _136 * _70)), _178, (vp_c8_1._m0[int(uint(_164) >> uint(2))][_164 & 3] + fma(_162, _174, fma(_110, _81, _106 * _70))) * _176);
    float _190 = fma(fma(_168, _172, fma(_140, _83, _136 * _72)), _178, fma(_162, _172, fma(_110, _83, _106 * _72)) * _176);
    _47.z = _188;
    _49.x = _180 + (-vp_c3_1._m0[11].w);
    _49.y = _182 + (-vp_c3_1._m0[12].w);
    _49.z = _188 + (-vp_c3_1._m0[13].w);
    _51.z = fma(_188, vp_c3_1._m0[37].z, fma(_182, vp_c3_1._m0[37].y, _180 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _192 = inversesqrt(fma(_190, _190, fma(_184, _184, _186 * _186)));
    _51.y = fma(_188, vp_c3_1._m0[36].z, fma(_182, vp_c3_1._m0[36].y, _180 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _194 = fma(_188, vp_c3_1._m0[0].z, fma(_182, vp_c3_1._m0[0].y, _180 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _196 = fma(_188, vp_c3_1._m0[1].z, fma(_182, vp_c3_1._m0[1].y, _180 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _198 = fma(_188, vp_c3_1._m0[2].z, fma(_182, vp_c3_1._m0[2].y, _180 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _47.w = _198;
    _51.x = fma(_188, vp_c3_1._m0[35].z, fma(_182, vp_c3_1._m0[35].y, _180 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _53.x = _186 * _192;
    _53.y = _184 * _192;
    _53.z = _190 * _192;
    float _200 = fma(_198, vp_c3_1._m0[8].z, fma(_196, vp_c3_1._m0[8].y, _194 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_198, vp_c3_1._m0[9].z, fma(_196, vp_c3_1._m0[9].y, _194 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _202 = fma(_198, vp_c3_1._m0[7].z, fma(_196, vp_c3_1._m0[7].y, _194 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _200;
    float _204 = fma(_198, vp_c3_1._m0[10].z, fma(_196, vp_c3_1._m0[10].y, _194 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _55.y = _200;
    gl_Position.x = _202;
    _55.x = _202;
    gl_Position.w = _204;
    _55.w = _204;
}


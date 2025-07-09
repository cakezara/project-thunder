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
layout(location = 1) out vec4 _53;
layout(location = 6) out vec4 _55;
layout(location = 5) out vec4 _57;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _64 = _31.y;
    float _66 = _31.x;
    float _68 = _31.z;
    float _70 = _33.y;
    float _72 = _35.y;
    float _74 = _33.x;
    float _76 = _35.x;
    float _78 = _37.x;
    int _81 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_64) & 65535) * 48);
    float _83 = _39.x;
    uint _86 = uint(int(uint(_81 + 16) >> uint(2)));
    float _88 = vp_c8_1._m0[int(uint(int(_86)) >> uint(2))][int(_86) & 3];
    int _90 = int(_86) + 1;
    float _92 = vp_c8_1._m0[int(uint(_90) >> uint(2))][_90 & 3];
    int _94 = ((int(uint(floatBitsToInt(_66)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_66) & 65535) * 48);
    uint _96 = uint(int(uint(_81 + 32) >> uint(2)));
    float _98 = vp_c8_1._m0[int(uint(int(_96)) >> uint(2))][int(_96) & 3];
    int _100 = int(_96) + 1;
    float _102 = vp_c8_1._m0[int(uint(_100) >> uint(2))][_100 & 3];
    float _104 = _41.x;
    float _106 = _37.y;
    int _108 = ((int(uint(floatBitsToInt(_68)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_68) & 65535) * 48);
    uint _110 = uint(int(uint(_94) >> uint(2)));
    float _112 = vp_c8_1._m0[int(uint(int(_110)) >> uint(2))][int(_110) & 3];
    int _114 = int(_110) + 1;
    float _116 = vp_c8_1._m0[int(uint(_114) >> uint(2))][_114 & 3];
    uint _118 = uint(int(uint(_81) >> uint(2)));
    float _120 = vp_c8_1._m0[int(uint(int(_118)) >> uint(2))][int(_118) & 3];
    int _122 = int(_118) + 1;
    float _124 = vp_c8_1._m0[int(uint(_122) >> uint(2))][_122 & 3];
    uint _126 = uint(int(uint(_94 + 16) >> uint(2)));
    float _128 = vp_c8_1._m0[int(uint(int(_126)) >> uint(2))][int(_126) & 3];
    int _130 = int(_126) + 1;
    float _132 = vp_c8_1._m0[int(uint(_130) >> uint(2))][_130 & 3];
    uint _134 = uint(int(uint(_94 + 32) >> uint(2)));
    float _136 = vp_c8_1._m0[int(uint(int(_134)) >> uint(2))][int(_134) & 3];
    int _138 = int(_134) + 1;
    float _140 = vp_c8_1._m0[int(uint(_138) >> uint(2))][_138 & 3];
    uint _142 = uint(int(uint(_108) >> uint(2)));
    float _144 = vp_c8_1._m0[int(uint(int(_142)) >> uint(2))][int(_142) & 3];
    int _146 = int(_142) + 1;
    float _148 = vp_c8_1._m0[int(uint(_146) >> uint(2))][_146 & 3];
    uint _150 = uint(int(uint(_108 + 16) >> uint(2)));
    float _152 = vp_c8_1._m0[int(uint(int(_150)) >> uint(2))][int(_150) & 3];
    int _154 = int(_150) + 1;
    float _156 = vp_c8_1._m0[int(uint(_154) >> uint(2))][_154 & 3];
    uint _158 = uint(int(uint(_108 + 32) >> uint(2)));
    float _160 = vp_c8_1._m0[int(uint(int(_158)) >> uint(2))][int(_158) & 3];
    int _162 = int(_158) + 1;
    float _164 = vp_c8_1._m0[int(uint(_162) >> uint(2))][_162 & 3];
    float _166 = _39.y;
    float _168 = _41.y;
    uint _170 = uint(int(uint(_81 + 24) >> uint(2)));
    float _172 = vp_c8_1._m0[int(uint(int(_170)) >> uint(2))][int(_170) & 3];
    int _174 = int(_170) + 1;
    uint _176 = uint(int(uint(_94 + 8) >> uint(2)));
    float _178 = vp_c8_1._m0[int(uint(int(_176)) >> uint(2))][int(_176) & 3];
    int _180 = int(_176) + 1;
    uint _182 = uint(int(uint(_81 + 8) >> uint(2)));
    float _184 = vp_c8_1._m0[int(uint(int(_182)) >> uint(2))][int(_182) & 3];
    int _186 = int(_182) + 1;
    uint _188 = uint(int(uint(_94 + 24) >> uint(2)));
    float _190 = vp_c8_1._m0[int(uint(int(_188)) >> uint(2))][int(_188) & 3];
    int _192 = int(_188) + 1;
    uint _194 = uint(int(uint(_108 + 8) >> uint(2)));
    float _196 = vp_c8_1._m0[int(uint(int(_194)) >> uint(2))][int(_194) & 3];
    int _198 = int(_194) + 1;
    uint _200 = uint(int(uint(_108 + 24) >> uint(2)));
    float _202 = vp_c8_1._m0[int(uint(int(_200)) >> uint(2))][int(_200) & 3];
    int _204 = int(_200) + 1;
    uint _206 = uint(int(uint(_108 + 40) >> uint(2)));
    float _208 = vp_c8_1._m0[int(uint(int(_206)) >> uint(2))][int(_206) & 3];
    int _210 = int(_206) + 1;
    uint _212 = uint(int(uint(_81 + 40) >> uint(2)));
    float _214 = vp_c8_1._m0[int(uint(int(_212)) >> uint(2))][int(_212) & 3];
    int _216 = int(_212) + 1;
    uint _218 = uint(int(uint(_94 + 40) >> uint(2)));
    float _220 = vp_c8_1._m0[int(uint(int(_218)) >> uint(2))][int(_218) & 3];
    int _222 = int(_218) + 1;
    float _224 = _37.z;
    float _226 = _39.z;
    float _228 = _41.z;
    float _230 = _43.y;
    float _232 = _43.x;
    float _234 = _43.z;
    _45.z = fma(_74, vp_c5_1._m0[113].x, _70 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _45.w = fma(_74, vp_c5_1._m0[113].y, _70 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
    _45.x = fma(_76, vp_c5_1._m0[111].x, _72 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _45.y = fma(_76, vp_c5_1._m0[111].y, _72 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _47.w = _41.w;
    float _236 = fma(fma(_196, _226, fma(_148, _166, _144 * _83)), _234, fma(fma(_178, _226, fma(_116, _166, _112 * _83)), _232, fma(_184, _226, fma(_124, _166, _120 * _83)) * _230));
    float _238 = fma(fma(_202, _226, fma(_156, _166, _152 * _83)), _234, fma(fma(_190, _226, fma(_132, _166, _128 * _83)), _232, fma(_172, _226, fma(_92, _166, _88 * _83)) * _230));
    float _240 = fma(fma(_208, _226, fma(_164, _166, _160 * _83)), _234, fma(fma(_220, _226, fma(_140, _166, _136 * _83)), _232, fma(_214, _226, fma(_102, _166, _98 * _83)) * _230));
    float _242 = fma(vp_c8_1._m0[int(uint(_198) >> uint(2))][_198 & 3] + fma(_196, _224, fma(_148, _106, _144 * _78)), _234, fma(vp_c8_1._m0[int(uint(_180) >> uint(2))][_180 & 3] + fma(_178, _224, fma(_116, _106, _112 * _78)), _232, (vp_c8_1._m0[int(uint(_186) >> uint(2))][_186 & 3] + fma(_184, _224, fma(_124, _106, _120 * _78))) * _230));
    _49.x = _242;
    float _244 = inversesqrt(fma(_240, _240, fma(_238, _238, _236 * _236)));
    float _246 = fma(fma(_196, _228, fma(_148, _168, _144 * _104)), _234, fma(fma(_178, _228, fma(_116, _168, _112 * _104)), _232, fma(_184, _228, fma(_124, _168, _120 * _104)) * _230));
    _51.x = _242 + (-vp_c3_1._m0[11].w);
    float _248 = fma(vp_c8_1._m0[int(uint(_204) >> uint(2))][_204 & 3] + fma(_202, _224, fma(_156, _106, _152 * _78)), _234, fma(vp_c8_1._m0[int(uint(_192) >> uint(2))][_192 & 3] + fma(_190, _224, fma(_132, _106, _128 * _78)), _232, (vp_c8_1._m0[int(uint(_174) >> uint(2))][_174 & 3] + fma(_172, _224, fma(_92, _106, _88 * _78))) * _230));
    _49.y = _248;
    float _250 = fma(fma(_202, _228, fma(_156, _168, _152 * _104)), _234, fma(fma(_190, _228, fma(_132, _168, _128 * _104)), _232, fma(_172, _228, fma(_92, _168, _88 * _104)) * _230));
    float _252 = fma(vp_c8_1._m0[int(uint(_210) >> uint(2))][_210 & 3] + fma(_208, _224, fma(_164, _106, _160 * _78)), _234, fma(vp_c8_1._m0[int(uint(_222) >> uint(2))][_222 & 3] + fma(_220, _224, fma(_140, _106, _136 * _78)), _232, (vp_c8_1._m0[int(uint(_216) >> uint(2))][_216 & 3] + fma(_214, _224, fma(_102, _106, _98 * _78))) * _230));
    _49.z = _252;
    float _254 = fma(fma(_208, _228, fma(_164, _168, _160 * _104)), _234, fma(fma(_220, _228, fma(_140, _168, _136 * _104)), _232, fma(_214, _228, fma(_102, _168, _98 * _104)) * _230));
    _51.y = _248 + (-vp_c3_1._m0[12].w);
    _51.z = _252 + (-vp_c3_1._m0[13].w);
    _53.x = _236 * _244;
    _53.y = _238 * _244;
    float _256 = inversesqrt(fma(_254, _254, fma(_250, _250, _246 * _246)));
    _55.z = fma(_252, vp_c3_1._m0[37].z, fma(_248, vp_c3_1._m0[37].y, _242 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _258 = fma(_252, vp_c3_1._m0[0].z, fma(_248, vp_c3_1._m0[0].y, _242 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _53.z = _240 * _244;
    _47.x = _246 * _256;
    _47.y = _250 * _256;
    _47.z = _254 * _256;
    float _260 = fma(_252, vp_c3_1._m0[1].z, fma(_248, vp_c3_1._m0[1].y, _242 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _262 = fma(_252, vp_c3_1._m0[2].z, fma(_248, vp_c3_1._m0[2].y, _242 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _49.w = _262;
    _55.y = fma(_252, vp_c3_1._m0[36].z, fma(_248, vp_c3_1._m0[36].y, _242 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _55.x = fma(_252, vp_c3_1._m0[35].z, fma(_248, vp_c3_1._m0[35].y, _242 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _264 = fma(_262, vp_c3_1._m0[8].z, fma(_260, vp_c3_1._m0[8].y, _258 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_262, vp_c3_1._m0[9].z, fma(_260, vp_c3_1._m0[9].y, _258 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _266 = fma(_262, vp_c3_1._m0[7].z, fma(_260, vp_c3_1._m0[7].y, _258 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _264;
    float _268 = fma(_262, vp_c3_1._m0[10].z, fma(_260, vp_c3_1._m0[10].y, _258 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _57.y = _264;
    gl_Position.x = _266;
    _57.x = _266;
    gl_Position.w = _268;
    _57.w = _268;
}


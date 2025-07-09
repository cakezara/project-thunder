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
layout(location = 2) in vec4 _39;
layout(location = 4) in vec4 _41;
layout(location = 0) out vec4 _43;
layout(location = 4) out vec4 _45;
layout(location = 5) out vec4 _47;
layout(location = 3) out vec4 _49;
layout(location = 6) out vec4 _51;
layout(location = 11) out vec4 _53;
layout(location = 2) out vec4 _55;
layout(location = 12) out vec4 _57;
layout(location = 13) out vec4 _59;
layout(location = 10) out vec4 _61;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _68 = _31.x;
    float _70 = _31.z;
    float _72 = _31.y;
    float _74 = _33.y;
    float _76 = _33.x;
    float _78 = _35.x;
    float _80 = _37.x;
    float _82 = _39.x;
    int _85 = ((int(uint(floatBitsToInt(_68)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_68) & 65535) * 48);
    float _87 = _35.y;
    uint _90 = uint(int(uint(_85 + 16) >> uint(2)));
    float _92 = vp_c8_1._m0[int(uint(int(_90)) >> uint(2))][int(_90) & 3];
    int _94 = int(_90) + 1;
    float _96 = vp_c8_1._m0[int(uint(_94) >> uint(2))][_94 & 3];
    int _98 = ((int(uint(floatBitsToInt(_70)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_70) & 65535) * 48);
    uint _100 = uint(int(uint(_85) >> uint(2)));
    float _102 = vp_c8_1._m0[int(uint(int(_100)) >> uint(2))][int(_100) & 3];
    int _104 = int(_100) + 1;
    float _106 = vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3];
    int _108 = ((int(uint(floatBitsToInt(_72)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_72) & 65535) * 48);
    uint _110 = uint(int(uint(_98) >> uint(2)));
    float _112 = vp_c8_1._m0[int(uint(int(_110)) >> uint(2))][int(_110) & 3];
    int _114 = int(_110) + 1;
    float _116 = vp_c8_1._m0[int(uint(_114) >> uint(2))][_114 & 3];
    uint _118 = uint(int(uint(_85 + 32) >> uint(2)));
    float _120 = vp_c8_1._m0[int(uint(int(_118)) >> uint(2))][int(_118) & 3];
    int _122 = int(_118) + 1;
    float _124 = vp_c8_1._m0[int(uint(_122) >> uint(2))][_122 & 3];
    uint _126 = uint(int(uint(_98 + 16) >> uint(2)));
    float _128 = vp_c8_1._m0[int(uint(int(_126)) >> uint(2))][int(_126) & 3];
    int _130 = int(_126) + 1;
    float _132 = vp_c8_1._m0[int(uint(_130) >> uint(2))][_130 & 3];
    uint _134 = uint(int(uint(_98 + 32) >> uint(2)));
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
    float _166 = _37.y;
    uint _168 = uint(int(uint(_85 + 8) >> uint(2)));
    float _170 = vp_c8_1._m0[int(uint(int(_168)) >> uint(2))][int(_168) & 3];
    int _172 = int(_168) + 1;
    float _174 = _39.y;
    uint _176 = uint(int(uint(_108 + 8) >> uint(2)));
    float _178 = vp_c8_1._m0[int(uint(int(_176)) >> uint(2))][int(_176) & 3];
    int _180 = int(_176) + 1;
    uint _182 = uint(int(uint(_98 + 24) >> uint(2)));
    float _184 = vp_c8_1._m0[int(uint(int(_182)) >> uint(2))][int(_182) & 3];
    int _186 = int(_182) + 1;
    uint _188 = uint(int(uint(_85 + 24) >> uint(2)));
    float _190 = vp_c8_1._m0[int(uint(int(_188)) >> uint(2))][int(_188) & 3];
    int _192 = int(_188) + 1;
    uint _194 = uint(int(uint(_108 + 40) >> uint(2)));
    float _196 = vp_c8_1._m0[int(uint(int(_194)) >> uint(2))][int(_194) & 3];
    int _198 = int(_194) + 1;
    uint _200 = uint(int(uint(_108 + 24) >> uint(2)));
    float _202 = vp_c8_1._m0[int(uint(int(_200)) >> uint(2))][int(_200) & 3];
    int _204 = int(_200) + 1;
    uint _206 = uint(int(uint(_98 + 8) >> uint(2)));
    float _208 = vp_c8_1._m0[int(uint(int(_206)) >> uint(2))][int(_206) & 3];
    int _210 = int(_206) + 1;
    uint _212 = uint(int(uint(_85 + 40) >> uint(2)));
    float _214 = vp_c8_1._m0[int(uint(int(_212)) >> uint(2))][int(_212) & 3];
    int _216 = int(_212) + 1;
    uint _218 = uint(int(uint(_98 + 40) >> uint(2)));
    float _220 = vp_c8_1._m0[int(uint(int(_218)) >> uint(2))][int(_218) & 3];
    int _222 = int(_218) + 1;
    float _224 = _35.z;
    float _226 = _37.z;
    float _228 = _39.z;
    float _230 = _41.y;
    float _232 = _41.x;
    float _234 = _41.z;
    _43.x = fma(_76, vp_c5_1._m0[111].x, _74 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _43.y = fma(_76, vp_c5_1._m0[111].y, _74 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _45.w = _39.w;
    float _236 = fma(fma(_208, _226, fma(_116, _166, _112 * _80)), _234, fma(fma(_170, _226, fma(_106, _166, _102 * _80)), _232, fma(_178, _226, fma(_148, _166, _144 * _80)) * _230));
    float _238 = fma(fma(_184, _226, fma(_132, _166, _128 * _80)), _234, fma(fma(_190, _226, fma(_96, _166, _92 * _80)), _232, fma(_202, _226, fma(_156, _166, _152 * _80)) * _230));
    float _240 = fma(fma(_220, _226, fma(_140, _166, _136 * _80)), _234, fma(fma(_214, _226, fma(_124, _166, _120 * _80)), _232, fma(_196, _226, fma(_164, _166, _160 * _80)) * _230));
    float _242 = fma(vp_c8_1._m0[int(uint(_210) >> uint(2))][_210 & 3] + fma(_208, _224, fma(_116, _87, _112 * _78)), _234, fma(vp_c8_1._m0[int(uint(_172) >> uint(2))][_172 & 3] + fma(_170, _224, fma(_106, _87, _102 * _78)), _232, (vp_c8_1._m0[int(uint(_180) >> uint(2))][_180 & 3] + fma(_178, _224, fma(_148, _87, _144 * _78))) * _230));
    _47.x = _242;
    float _244 = inversesqrt(fma(_240, _240, fma(_238, _238, _236 * _236)));
    _49.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    float _246 = fma(vp_c8_1._m0[int(uint(_186) >> uint(2))][_186 & 3] + fma(_184, _224, fma(_132, _87, _128 * _78)), _234, fma(vp_c8_1._m0[int(uint(_192) >> uint(2))][_192 & 3] + fma(_190, _224, fma(_96, _87, _92 * _78)), _232, (vp_c8_1._m0[int(uint(_204) >> uint(2))][_204 & 3] + fma(_202, _224, fma(_156, _87, _152 * _78))) * _230));
    _47.y = _246;
    float _248 = fma(vp_c8_1._m0[int(uint(_222) >> uint(2))][_222 & 3] + fma(_220, _224, fma(_140, _87, _136 * _78)), _234, fma(vp_c8_1._m0[int(uint(_216) >> uint(2))][_216 & 3] + fma(_214, _224, fma(_124, _87, _120 * _78)), _232, (vp_c8_1._m0[int(uint(_198) >> uint(2))][_198 & 3] + fma(_196, _224, fma(_164, _87, _160 * _78))) * _230));
    _51.x = _242 + (-vp_c3_1._m0[11].w);
    _47.z = _248;
    _51.z = _248 + (-vp_c3_1._m0[13].w);
    _51.y = _246 + (-vp_c3_1._m0[12].w);
    float _250 = fma(fma(_208, _228, fma(_116, _174, _112 * _82)), _234, fma(fma(_170, _228, fma(_106, _174, _102 * _82)), _232, fma(_178, _228, fma(_148, _174, _144 * _82)) * _230));
    float _252 = fma(fma(_184, _228, fma(_132, _174, _128 * _82)), _234, fma(fma(_190, _228, fma(_96, _174, _92 * _82)), _232, fma(_202, _228, fma(_156, _174, _152 * _82)) * _230));
    _53.y = fma(_248, vp_c3_1._m0[61].z, fma(_246, vp_c3_1._m0[61].y, _242 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    _53.z = fma(_248, vp_c3_1._m0[62].z, fma(_246, vp_c3_1._m0[62].y, _242 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _55.x = _236 * _244;
    _55.y = _238 * _244;
    _53.x = fma(_248, vp_c3_1._m0[60].z, fma(_246, vp_c3_1._m0[60].y, _242 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    _53.w = fma(_248, vp_c3_1._m0[63].z, fma(_246, vp_c3_1._m0[63].y, _242 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _55.z = _240 * _244;
    _57.z = fma(_248, vp_c3_1._m0[44].z, fma(_246, vp_c3_1._m0[44].y, _242 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    float _254 = fma(fma(_220, _228, fma(_140, _174, _136 * _82)), _234, fma(fma(_214, _228, fma(_124, _174, _120 * _82)), _232, fma(_196, _228, fma(_164, _174, _160 * _82)) * _230));
    _57.w = fma(_248, vp_c3_1._m0[45].z, fma(_246, vp_c3_1._m0[45].y, _242 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _57.y = fma(_248, vp_c3_1._m0[43].z, fma(_246, vp_c3_1._m0[43].y, _242 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    _59.z = fma(_248, vp_c3_1._m0[48].z, fma(_246, vp_c3_1._m0[48].y, _242 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    float _256 = fma(_248, vp_c3_1._m0[0].z, fma(_246, vp_c3_1._m0[0].y, _242 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _258 = fma(_248, vp_c3_1._m0[1].z, fma(_246, vp_c3_1._m0[1].y, _242 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _59.y = fma(_248, vp_c3_1._m0[47].z, fma(_246, vp_c3_1._m0[47].y, _242 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    float _260 = inversesqrt(fma(_254, _254, fma(_252, _252, _250 * _250)));
    float _262 = fma(_248, vp_c3_1._m0[2].z, fma(_246, vp_c3_1._m0[2].y, _242 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _47.w = _262;
    _45.x = _250 * _260;
    _45.y = _252 * _260;
    _57.x = fma(_248, vp_c3_1._m0[42].z, fma(_246, vp_c3_1._m0[42].y, _242 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    _59.w = fma(_248, vp_c3_1._m0[49].z, fma(_246, vp_c3_1._m0[49].y, _242 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    _61.z = fma(_248, vp_c3_1._m0[37].z, fma(_246, vp_c3_1._m0[37].y, _242 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _59.x = fma(_248, vp_c3_1._m0[46].z, fma(_246, vp_c3_1._m0[46].y, _242 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    _61.y = fma(_248, vp_c3_1._m0[36].z, fma(_246, vp_c3_1._m0[36].y, _242 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _45.z = _254 * _260;
    _61.x = fma(_248, vp_c3_1._m0[35].z, fma(_246, vp_c3_1._m0[35].y, _242 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    gl_Position.z = fma(_262, vp_c3_1._m0[9].z, fma(_258, vp_c3_1._m0[9].y, _256 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_262, vp_c3_1._m0[7].z, fma(_258, vp_c3_1._m0[7].y, _256 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.w = fma(_262, vp_c3_1._m0[10].z, fma(_258, vp_c3_1._m0[10].y, _256 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.y = fma(_262, vp_c3_1._m0[8].z, fma(_258, vp_c3_1._m0[8].y, _256 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
}


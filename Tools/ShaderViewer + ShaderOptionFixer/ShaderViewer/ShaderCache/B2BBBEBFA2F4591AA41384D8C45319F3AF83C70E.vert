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
layout(location = 3) out vec4 _47;
layout(location = 5) out vec4 _49;
layout(location = 2) out vec4 _51;
layout(location = 8) out vec4 _53;
layout(location = 9) out vec4 _55;
layout(location = 10) out vec4 _57;
layout(location = 1) out vec4 _59;
layout(location = 7) out vec4 _61;
layout(location = 6) out vec4 _63;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _70 = _31.y;
    float _72 = _31.x;
    float _74 = _33.y;
    float _76 = _33.x;
    float _78 = _35.x;
    float _80 = _37.x;
    float _82 = _39.x;
    float _84 = _35.y;
    int _87 = ((int(uint(floatBitsToInt(_70)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_70) & 65535) * 48) + 16);
    float _89 = _37.y;
    float _91 = _39.y;
    int _93 = ((int(uint(floatBitsToInt(_72)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_72) & 65535) * 48) + 32);
    uint _96 = uint(int(uint(_87 + (-16)) >> uint(2)));
    float _98 = vp_c8_1._m0[int(uint(int(_96)) >> uint(2))][int(_96) & 3];
    int _100 = int(_96) + 1;
    float _102 = vp_c8_1._m0[int(uint(_100) >> uint(2))][_100 & 3];
    uint _104 = uint(int(uint(_87) >> uint(2)));
    float _106 = vp_c8_1._m0[int(uint(int(_104)) >> uint(2))][int(_104) & 3];
    int _108 = int(_104) + 1;
    float _110 = vp_c8_1._m0[int(uint(_108) >> uint(2))][_108 & 3];
    uint _112 = uint(int(uint(_87 + 16) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    float _118 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3];
    uint _120 = uint(int(uint(_87 + 24) >> uint(2)));
    float _122 = vp_c8_1._m0[int(uint(int(_120)) >> uint(2))][int(_120) & 3];
    int _124 = int(_120) + 1;
    uint _126 = uint(int(uint(_93 + (-16)) >> uint(2)));
    float _128 = vp_c8_1._m0[int(uint(int(_126)) >> uint(2))][int(_126) & 3];
    int _130 = int(_126) + 1;
    float _132 = vp_c8_1._m0[int(uint(_130) >> uint(2))][_130 & 3];
    uint _134 = uint(int(uint(_93 + (-32)) >> uint(2)));
    float _136 = vp_c8_1._m0[int(uint(int(_134)) >> uint(2))][int(_134) & 3];
    int _138 = int(_134) + 1;
    float _140 = vp_c8_1._m0[int(uint(_138) >> uint(2))][_138 & 3];
    uint _142 = uint(int(uint(_93) >> uint(2)));
    float _144 = vp_c8_1._m0[int(uint(int(_142)) >> uint(2))][int(_142) & 3];
    int _146 = int(_142) + 1;
    float _148 = vp_c8_1._m0[int(uint(_146) >> uint(2))][_146 & 3];
    uint _150 = uint(int(uint(_87 + (-8)) >> uint(2)));
    float _152 = vp_c8_1._m0[int(uint(int(_150)) >> uint(2))][int(_150) & 3];
    int _154 = int(_150) + 1;
    uint _156 = uint(int(uint(_87 + 8) >> uint(2)));
    float _158 = vp_c8_1._m0[int(uint(int(_156)) >> uint(2))][int(_156) & 3];
    int _160 = int(_156) + 1;
    uint _162 = uint(int(uint(_93 + (-24)) >> uint(2)));
    float _164 = vp_c8_1._m0[int(uint(int(_162)) >> uint(2))][int(_162) & 3];
    int _166 = int(_162) + 1;
    float _168 = _35.z;
    uint _170 = uint(int(uint(_93 + (-8)) >> uint(2)));
    float _172 = vp_c8_1._m0[int(uint(int(_170)) >> uint(2))][int(_170) & 3];
    int _174 = int(_170) + 1;
    float _176 = _37.z;
    uint _178 = uint(int(uint(_93 + 8) >> uint(2)));
    float _180 = vp_c8_1._m0[int(uint(int(_178)) >> uint(2))][int(_178) & 3];
    int _182 = int(_178) + 1;
    float _184 = _39.z;
    float _186 = _41.y;
    float _188 = _41.x;
    _43.y = fma(_76, vp_c5_1._m0[111].y, _74 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _190 = fma(vp_c8_1._m0[int(uint(_166) >> uint(2))][_166 & 3] + fma(_164, _168, fma(_140, _84, _136 * _78)), _188, (vp_c8_1._m0[int(uint(_154) >> uint(2))][_154 & 3] + fma(_152, _168, fma(_102, _84, _98 * _78))) * _186);
    _45.x = _190;
    _47.w = _39.w;
    float _192 = fma(fma(_164, _184, fma(_140, _91, _136 * _82)), _188, fma(_152, _184, fma(_102, _91, _98 * _82)) * _186);
    float _194 = fma(vp_c8_1._m0[int(uint(_174) >> uint(2))][_174 & 3] + fma(_172, _168, fma(_132, _84, _128 * _78)), _188, (vp_c8_1._m0[int(uint(_160) >> uint(2))][_160 & 3] + fma(_158, _168, fma(_110, _84, _106 * _78))) * _186);
    _45.y = _194;
    float _196 = fma(fma(_172, _176, fma(_132, _89, _128 * _80)), _188, fma(_158, _176, fma(_110, _89, _106 * _80)) * _186);
    float _198 = fma(fma(_164, _176, fma(_140, _89, _136 * _80)), _188, fma(_152, _176, fma(_102, _89, _98 * _80)) * _186);
    float _200 = fma(fma(_180, _176, fma(_148, _89, _144 * _80)), _188, fma(_122, _176, fma(_118, _89, _114 * _80)) * _186);
    float _202 = fma(fma(_172, _184, fma(_132, _91, _128 * _82)), _188, fma(_158, _184, fma(_110, _91, _106 * _82)) * _186);
    float _204 = fma(fma(_180, _184, fma(_148, _91, _144 * _82)), _188, fma(_122, _184, fma(_118, _91, _114 * _82)) * _186);
    float _206 = fma(vp_c8_1._m0[int(uint(_182) >> uint(2))][_182 & 3] + fma(_180, _168, fma(_148, _84, _144 * _78)), _188, (vp_c8_1._m0[int(uint(_124) >> uint(2))][_124 & 3] + fma(_122, _168, fma(_118, _84, _114 * _78))) * _186);
    _45.z = _206;
    float _208 = _190 + (-vp_c3_1._m0[11].w);
    float _210 = _194 + (-vp_c3_1._m0[12].w);
    _49.x = _208;
    _49.y = _210;
    _51.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    _53.w = fma(_206, vp_c3_1._m0[63].z, fma(_194, vp_c3_1._m0[63].y, _190 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _53.z = fma(_206, vp_c3_1._m0[62].z, fma(_194, vp_c3_1._m0[62].y, _190 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _43.x = fma(_76, vp_c5_1._m0[111].x, _74 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    float _212 = _206 + (-vp_c3_1._m0[13].w);
    _49.z = _212;
    _53.y = fma(_206, vp_c3_1._m0[61].z, fma(_194, vp_c3_1._m0[61].y, _190 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    float _214 = inversesqrt(fma(_212, _212, fma(_210, _210, _208 * _208)));
    float _216 = _210 * (-_214);
    float _218 = _208 * (-_214);
    float _220 = _212 * (-_214);
    _53.x = fma(_206, vp_c3_1._m0[60].z, fma(_194, vp_c3_1._m0[60].y, _190 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    _55.y = fma(_206, vp_c3_1._m0[43].z, fma(_194, vp_c3_1._m0[43].y, _190 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    float _222 = fma(_220, vp_c3_1._m0[12].y, -(_216 * vp_c3_1._m0[13].y));
    _55.z = fma(_206, vp_c3_1._m0[44].z, fma(_194, vp_c3_1._m0[44].y, _190 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    float _224 = fma(_218, vp_c3_1._m0[13].y, -(_220 * vp_c3_1._m0[11].y));
    float _226 = fma(_216, vp_c3_1._m0[11].y, -(_218 * vp_c3_1._m0[12].y));
    _55.x = fma(_206, vp_c3_1._m0[42].z, fma(_194, vp_c3_1._m0[42].y, _190 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    float _228 = fma(_206, vp_c3_1._m0[0].z, fma(_194, vp_c3_1._m0[0].y, _190 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _230 = inversesqrt(fma(_226, _226, fma(_224, _224, _222 * _222)));
    _57.x = fma(_206, vp_c3_1._m0[46].z, fma(_194, vp_c3_1._m0[46].y, _190 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    float _232 = inversesqrt(fma(_204, _204, fma(_202, _202, _192 * _192)));
    float _234 = inversesqrt(fma(_200, _200, fma(_196, _196, _198 * _198)));
    float _236 = _224 * _230;
    float _238 = _226 * _230;
    float _240 = _222 * _230;
    float _242 = fma(_206, vp_c3_1._m0[1].z, fma(_194, vp_c3_1._m0[1].y, _190 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _244 = fma(_206, vp_c3_1._m0[2].z, fma(_194, vp_c3_1._m0[2].y, _190 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _45.w = _244;
    _47.x = _192 * _232;
    _47.y = _202 * _232;
    _47.z = _204 * _232;
    float _246 = _198 * _234;
    float _248 = _196 * _234;
    _59.x = _246;
    _59.y = _248;
    float _250 = _200 * _234;
    _59.z = _250;
    float _252 = fma(fma(_238, _250, fma(_236, _248, _240 * _246)), 0.5, 0.5);
    float _254 = fma(fma(fma(_218, _236, -(_216 * _240)), _250, fma(fma(_220, _240, -(_218 * _238)), _248, fma(_216, _238, -(_220 * _236)) * _246)), -0.5, 0.5);
    _55.w = fma(_206, vp_c3_1._m0[45].z, fma(_194, vp_c3_1._m0[45].y, _190 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _57.w = fma(_206, vp_c3_1._m0[49].z, fma(_194, vp_c3_1._m0[49].y, _190 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    _57.z = fma(_206, vp_c3_1._m0[48].z, fma(_194, vp_c3_1._m0[48].y, _190 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    _57.y = fma(_206, vp_c3_1._m0[47].z, fma(_194, vp_c3_1._m0[47].y, _190 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _61.z = fma(_206, vp_c3_1._m0[37].z, fma(_194, vp_c3_1._m0[37].y, _190 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _61.y = fma(_206, vp_c3_1._m0[36].z, fma(_194, vp_c3_1._m0[36].y, _190 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _61.x = fma(_206, vp_c3_1._m0[35].z, fma(_194, vp_c3_1._m0[35].y, _190 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _256 = fma(_244, vp_c3_1._m0[10].z, fma(_242, vp_c3_1._m0[10].y, _228 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_244, vp_c3_1._m0[9].z, fma(_242, vp_c3_1._m0[9].y, _228 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _258 = fma(_244, vp_c3_1._m0[7].z, fma(_242, vp_c3_1._m0[7].y, _228 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.w = _256;
    float _260 = fma(_244, vp_c3_1._m0[8].z, fma(_242, vp_c3_1._m0[8].y, _228 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    _63.w = _256;
    gl_Position.x = _258;
    _63.x = _258;
    gl_Position.y = _260;
    _63.y = _260;
    _43.z = fma(_252, vp_c5_1._m0[113].x, _254 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _43.w = fma(_252, vp_c5_1._m0[113].y, _254 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
}


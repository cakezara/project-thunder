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
layout(location = 4) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 8) in vec4 _39;
layout(location = 2) out vec4 _41;
layout(location = 3) out vec4 _43;
layout(location = 0) out vec4 _45;
layout(location = 1) out vec4 _47;
layout(location = 5) out vec4 _49;
layout(location = 4) out vec4 _51;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _58 = _31.y;
    float _60 = _31.x;
    float _62 = _33.x;
    float _64 = _33.y;
    float _66 = _33.z;
    float _68 = _35.y;
    int _71 = ((int(uint(floatBitsToInt(_58)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_58) & 65535) * 48) + 32);
    uint _74 = uint(int(uint(_71 + (-32)) >> uint(2)));
    float _76 = vp_c8_1._m0[int(uint(int(_74)) >> uint(2))][int(_74) & 3];
    int _78 = int(_74) + 1;
    float _80 = vp_c8_1._m0[int(uint(_78) >> uint(2))][_78 & 3];
    int _82 = ((int(uint(floatBitsToInt(_60)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_60) & 65535) * 48);
    uint _84 = uint(int(uint(_71 + (-16)) >> uint(2)));
    float _86 = vp_c8_1._m0[int(uint(int(_84)) >> uint(2))][int(_84) & 3];
    int _88 = int(_84) + 1;
    float _90 = vp_c8_1._m0[int(uint(_88) >> uint(2))][_88 & 3];
    uint _92 = uint(int(uint(_71) >> uint(2)));
    float _94 = vp_c8_1._m0[int(uint(int(_92)) >> uint(2))][int(_92) & 3];
    int _96 = int(_92) + 1;
    float _98 = vp_c8_1._m0[int(uint(_96) >> uint(2))][_96 & 3];
    uint _100 = uint(int(uint(_71 + (-24)) >> uint(2)));
    float _102 = vp_c8_1._m0[int(uint(int(_100)) >> uint(2))][int(_100) & 3];
    int _104 = int(_100) + 1;
    uint _106 = uint(int(uint(_71 + (-8)) >> uint(2)));
    float _108 = vp_c8_1._m0[int(uint(int(_106)) >> uint(2))][int(_106) & 3];
    int _110 = int(_106) + 1;
    uint _112 = uint(int(uint(_82) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    float _118 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3];
    uint _120 = uint(int(uint(_82 + 16) >> uint(2)));
    float _122 = vp_c8_1._m0[int(uint(int(_120)) >> uint(2))][int(_120) & 3];
    int _124 = int(_120) + 1;
    float _126 = vp_c8_1._m0[int(uint(_124) >> uint(2))][_124 & 3];
    uint _128 = uint(int(uint(_82 + 32) >> uint(2)));
    float _130 = vp_c8_1._m0[int(uint(int(_128)) >> uint(2))][int(_128) & 3];
    int _132 = int(_128) + 1;
    float _134 = vp_c8_1._m0[int(uint(_132) >> uint(2))][_132 & 3];
    uint _136 = uint(int(uint(_71 + 8) >> uint(2)));
    float _138 = vp_c8_1._m0[int(uint(int(_136)) >> uint(2))][int(_136) & 3];
    int _140 = int(_136) + 1;
    uint _142 = uint(int(uint(_82 + 8) >> uint(2)));
    float _144 = vp_c8_1._m0[int(uint(int(_142)) >> uint(2))][int(_142) & 3];
    int _146 = int(_142) + 1;
    uint _148 = uint(int(uint(_82 + 24) >> uint(2)));
    float _150 = vp_c8_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    uint _154 = uint(int(uint(_82 + 40) >> uint(2)));
    float _156 = vp_c8_1._m0[int(uint(int(_154)) >> uint(2))][int(_154) & 3];
    int _158 = int(_154) + 1;
    float _160 = _37.x;
    float _162 = _35.x;
    float _164 = _37.y;
    float _166 = _37.z;
    float _168 = fma(vp_c8_1._m0[int(uint(_146) >> uint(2))][_146 & 3] + fma(_144, _66, fma(_118, _64, _114 * _62)), _162, (vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3] + fma(_102, _66, fma(_80, _64, _76 * _62))) * _68);
    float _170 = _39.x;
    float _172 = fma(vp_c8_1._m0[int(uint(_152) >> uint(2))][_152 & 3] + fma(_150, _66, fma(_126, _64, _122 * _62)), _162, (vp_c8_1._m0[int(uint(_110) >> uint(2))][_110 & 3] + fma(_108, _66, fma(_90, _64, _86 * _62))) * _68);
    float _174 = fma(vp_c8_1._m0[int(uint(_158) >> uint(2))][_158 & 3] + fma(_156, _66, fma(_134, _64, _130 * _62)), _162, (vp_c8_1._m0[int(uint(_140) >> uint(2))][_140 & 3] + fma(_138, _66, fma(_98, _64, _94 * _62))) * _68);
    float _176 = _39.y;
    float _178 = _168 + (-vp_c3_1._m0[11].w);
    _41.x = _168;
    float _180 = _172 + (-vp_c3_1._m0[12].w);
    _41.y = _172;
    _43.y = _180;
    _41.z = _174;
    _43.x = _178;
    float _182 = _174 + (-vp_c3_1._m0[13].w);
    _43.z = _182;
    float _184 = inversesqrt(fma(_182, _182, fma(_180, _180, _178 * _178)));
    float _186 = fma(fma(_144, _166, fma(_118, _164, _114 * _160)), _162, fma(_102, _166, fma(_80, _164, _76 * _160)) * _68);
    float _188 = fma(fma(_150, _166, fma(_126, _164, _122 * _160)), _162, fma(_108, _166, fma(_90, _164, _86 * _160)) * _68);
    float _190 = _180 * (-_184);
    float _192 = _182 * (-_184);
    _45.x = fma(_170, vp_c5_1._m0[112].x, _176 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    float _194 = _178 * (-_184);
    float _196 = fma(fma(_156, _166, fma(_134, _164, _130 * _160)), _162, fma(_138, _166, fma(_98, _164, _94 * _160)) * _68);
    float _198 = fma(_192, vp_c3_1._m0[12].y, -(_190 * vp_c3_1._m0[13].y));
    float _200 = fma(_194, vp_c3_1._m0[13].y, -(_192 * vp_c3_1._m0[11].y));
    float _202 = fma(_190, vp_c3_1._m0[11].y, -(_194 * vp_c3_1._m0[12].y));
    _45.y = fma(_170, vp_c5_1._m0[112].y, _176 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    float _204 = inversesqrt(fma(_202, _202, fma(_200, _200, _198 * _198)));
    float _206 = fma(_174, vp_c3_1._m0[0].z, fma(_172, vp_c3_1._m0[0].y, _168 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _208 = inversesqrt(fma(_196, _196, fma(_188, _188, _186 * _186)));
    float _210 = fma(_174, vp_c3_1._m0[2].z, fma(_172, vp_c3_1._m0[2].y, _168 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    float _212 = fma(_174, vp_c3_1._m0[1].z, fma(_172, vp_c3_1._m0[1].y, _168 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _41.w = _210;
    float _214 = _200 * _204;
    float _216 = _198 * _204;
    float _218 = _202 * _204;
    float _220 = _186 * _208;
    float _222 = _188 * _208;
    _47.x = _220;
    _47.y = _222;
    float _224 = _196 * _208;
    _47.z = _224;
    _49.z = fma(_174, vp_c3_1._m0[37].z, fma(_172, vp_c3_1._m0[37].y, _168 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _226 = fma(fma(_224, fma(_194, _214, -(_190 * _216)), fma(_222, fma(_192, _216, -(_194 * _218)), _220 * fma(_190, _218, -(_192 * _214)))), -0.5, 0.5);
    float _228 = fma(fma(_218, _224, fma(_214, _222, _216 * _220)), 0.5, 0.5);
    _49.y = fma(_174, vp_c3_1._m0[36].z, fma(_172, vp_c3_1._m0[36].y, _168 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _49.x = fma(_174, vp_c3_1._m0[35].z, fma(_172, vp_c3_1._m0[35].y, _168 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _230 = fma(_210, vp_c3_1._m0[7].z, fma(_212, vp_c3_1._m0[7].y, _206 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.z = fma(_210, vp_c3_1._m0[9].z, fma(_212, vp_c3_1._m0[9].y, _206 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = _230;
    _51.x = _230;
    float _232 = fma(_210, vp_c3_1._m0[8].z, fma(_212, vp_c3_1._m0[8].y, _206 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    float _234 = fma(_210, vp_c3_1._m0[10].z, fma(_212, vp_c3_1._m0[10].y, _206 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.y = _232;
    _51.y = _232;
    gl_Position.w = _234;
    _51.w = _234;
    _45.z = fma(_228, vp_c5_1._m0[114].x, _226 * vp_c5_1._m0[114].z) + vp_c5_1._m0[115].x;
    _45.w = fma(_228, vp_c5_1._m0[114].y, _226 * vp_c5_1._m0[114].w) + vp_c5_1._m0[115].y;
}


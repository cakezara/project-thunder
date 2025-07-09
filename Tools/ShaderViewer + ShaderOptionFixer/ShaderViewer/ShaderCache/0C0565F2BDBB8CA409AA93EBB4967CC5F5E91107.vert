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
layout(location = 2) out vec4 _39;
layout(location = 3) out vec4 _41;
layout(location = 1) out vec4 _43;
layout(location = 5) out vec4 _45;
layout(location = 4) out vec4 _47;
layout(location = 0) out vec4 _49;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _56 = _31.y;
    float _58 = _31.x;
    float _60 = _33.x;
    float _62 = _33.y;
    float _64 = _33.z;
    float _66 = _35.y;
    float _68 = _35.x;
    int _71 = ((int(uint(floatBitsToInt(_56)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_56) & 65535) * 48) + 32);
    uint _74 = uint(int(uint(_71 + (-32)) >> uint(2)));
    float _76 = vp_c8_1._m0[int(uint(int(_74)) >> uint(2))][int(_74) & 3];
    int _78 = int(_74) + 1;
    float _80 = vp_c8_1._m0[int(uint(_78) >> uint(2))][_78 & 3];
    int _82 = ((int(uint(floatBitsToInt(_58)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_58) & 65535) * 48);
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
    uint _136 = uint(int(uint(_82 + 8) >> uint(2)));
    float _138 = vp_c8_1._m0[int(uint(int(_136)) >> uint(2))][int(_136) & 3];
    int _140 = int(_136) + 1;
    uint _142 = uint(int(uint(_71 + 8) >> uint(2)));
    float _144 = vp_c8_1._m0[int(uint(int(_142)) >> uint(2))][int(_142) & 3];
    int _146 = int(_142) + 1;
    uint _148 = uint(int(uint(_82 + 24) >> uint(2)));
    float _150 = vp_c8_1._m0[int(uint(int(_148)) >> uint(2))][int(_148) & 3];
    int _152 = int(_148) + 1;
    uint _154 = uint(int(uint(_82 + 40) >> uint(2)));
    float _156 = vp_c8_1._m0[int(uint(int(_154)) >> uint(2))][int(_154) & 3];
    int _158 = int(_154) + 1;
    float _160 = _37.y;
    float _162 = _37.x;
    float _164 = _37.z;
    float _166 = fma(vp_c8_1._m0[int(uint(_140) >> uint(2))][_140 & 3] + fma(_138, _64, fma(_118, _62, _114 * _60)), _68, (vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3] + fma(_102, _64, fma(_80, _62, _76 * _60))) * _66);
    _39.x = _166;
    float _168 = fma(vp_c8_1._m0[int(uint(_152) >> uint(2))][_152 & 3] + fma(_150, _64, fma(_126, _62, _122 * _60)), _68, (vp_c8_1._m0[int(uint(_110) >> uint(2))][_110 & 3] + fma(_108, _64, fma(_90, _62, _86 * _60))) * _66);
    float _170 = _166 + (-vp_c3_1._m0[11].w);
    _39.y = _168;
    _41.x = _170;
    float _172 = fma(vp_c8_1._m0[int(uint(_158) >> uint(2))][_158 & 3] + fma(_156, _64, fma(_134, _62, _130 * _60)), _68, (vp_c8_1._m0[int(uint(_146) >> uint(2))][_146 & 3] + fma(_144, _64, fma(_98, _62, _94 * _60))) * _66);
    float _174 = _168 + (-vp_c3_1._m0[12].w);
    _39.z = _172;
    _41.y = _174;
    float _176 = _172 + (-vp_c3_1._m0[13].w);
    _41.z = _176;
    float _178 = inversesqrt(fma(_176, _176, fma(_174, _174, _170 * _170)));
    float _180 = fma(fma(_138, _164, fma(_118, _160, _114 * _162)), _68, fma(_102, _164, fma(_80, _160, _76 * _162)) * _66);
    float _182 = _174 * (-_178);
    float _184 = fma(fma(_150, _164, fma(_126, _160, _122 * _162)), _68, fma(_108, _164, fma(_90, _160, _86 * _162)) * _66);
    float _186 = _176 * (-_178);
    float _188 = _170 * (-_178);
    float _190 = fma(_186, vp_c3_1._m0[12].y, -(_182 * vp_c3_1._m0[13].y));
    float _192 = fma(fma(_156, _164, fma(_134, _160, _130 * _162)), _68, fma(_144, _164, fma(_98, _160, _94 * _162)) * _66);
    float _194 = fma(_188, vp_c3_1._m0[13].y, -(_186 * vp_c3_1._m0[11].y));
    float _196 = fma(_182, vp_c3_1._m0[11].y, -(_188 * vp_c3_1._m0[12].y));
    float _198 = fma(_172, vp_c3_1._m0[0].z, fma(_168, vp_c3_1._m0[0].y, _166 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _200 = inversesqrt(fma(_192, _192, fma(_184, _184, _180 * _180)));
    float _202 = inversesqrt(fma(_196, _196, fma(_194, _194, _190 * _190)));
    float _204 = fma(_172, vp_c3_1._m0[1].z, fma(_168, vp_c3_1._m0[1].y, _166 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _206 = fma(_172, vp_c3_1._m0[2].z, fma(_168, vp_c3_1._m0[2].y, _166 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _39.w = _206;
    float _208 = _184 * _200;
    _43.y = _208;
    float _210 = _194 * _202;
    float _212 = _196 * _202;
    float _214 = _190 * _202;
    float _216 = _180 * _200;
    float _218 = _192 * _200;
    _43.x = _216;
    _43.z = _218;
    _45.z = fma(_172, vp_c3_1._m0[37].z, fma(_168, vp_c3_1._m0[37].y, _166 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _45.y = fma(_172, vp_c3_1._m0[36].z, fma(_168, vp_c3_1._m0[36].y, _166 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _45.x = fma(_172, vp_c3_1._m0[35].z, fma(_168, vp_c3_1._m0[35].y, _166 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _220 = fma(fma(_218, fma(_188, _210, -(_182 * _214)), fma(_208, fma(_186, _214, -(_188 * _212)), _216 * fma(_182, _212, -(_186 * _210)))), -0.5, 0.5);
    gl_Position.z = fma(_206, vp_c3_1._m0[9].z, fma(_204, vp_c3_1._m0[9].y, _198 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _222 = fma(fma(_212, _218, fma(_210, _208, _214 * _216)), 0.5, 0.5);
    float _224 = fma(_206, vp_c3_1._m0[7].z, fma(_204, vp_c3_1._m0[7].y, _198 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    float _226 = fma(_206, vp_c3_1._m0[8].z, fma(_204, vp_c3_1._m0[8].y, _198 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.x = _224;
    _47.x = _224;
    gl_Position.y = _226;
    float _228 = fma(_206, vp_c3_1._m0[10].z, fma(_204, vp_c3_1._m0[10].y, _198 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _47.y = _226;
    gl_Position.w = _228;
    _47.w = _228;
    _49.x = fma(_222, vp_c5_1._m0[111].x, _220 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _49.y = fma(_222, vp_c5_1._m0[111].y, _220 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
}


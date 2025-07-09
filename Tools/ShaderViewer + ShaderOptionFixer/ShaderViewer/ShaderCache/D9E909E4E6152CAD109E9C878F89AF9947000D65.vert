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
layout(location = 0) out vec4 _33;
layout(location = 2) out vec4 _35;
layout(location = 1) out vec4 _37;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _44 = _29.x;
    float _46 = _31.x;
    float _48 = _31.y;
    float _50 = _31.z;
    int _53 = ((int(uint(floatBitsToInt(_44)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_44) & 65535) * 48);
    uint _56 = uint(int(uint(_53) >> uint(2)));
    int _58 = int(_56) + 1;
    uint _60 = uint(int(uint(_53 + 16) >> uint(2)));
    int _62 = int(_60) + 1;
    uint _64 = uint(int(uint(_53 + 32) >> uint(2)));
    int _66 = int(_64) + 1;
    uint _68 = uint(int(uint(_53 + 8) >> uint(2)));
    int _70 = int(_68) + 1;
    uint _72 = uint(int(uint(_53 + 24) >> uint(2)));
    int _74 = int(_72) + 1;
    uint _76 = uint(int(uint(_53 + 40) >> uint(2)));
    int _78 = int(_76) + 1;
    float _80 = vp_c8_1._m0[int(uint(_70) >> uint(2))][_70 & 3] + fma(vp_c8_1._m0[int(uint(int(_68)) >> uint(2))][int(_68) & 3], _50, fma(vp_c8_1._m0[int(uint(_58) >> uint(2))][_58 & 3], _48, vp_c8_1._m0[int(uint(int(_56)) >> uint(2))][int(_56) & 3] * _46));
    float _82 = vp_c8_1._m0[int(uint(_74) >> uint(2))][_74 & 3] + fma(vp_c8_1._m0[int(uint(int(_72)) >> uint(2))][int(_72) & 3], _50, fma(vp_c8_1._m0[int(uint(_62) >> uint(2))][_62 & 3], _48, vp_c8_1._m0[int(uint(int(_60)) >> uint(2))][int(_60) & 3] * _46));
    _33.x = _80;
    float _84 = vp_c8_1._m0[int(uint(_78) >> uint(2))][_78 & 3] + fma(vp_c8_1._m0[int(uint(int(_76)) >> uint(2))][int(_76) & 3], _50, fma(vp_c8_1._m0[int(uint(_66) >> uint(2))][_66 & 3], _48, vp_c8_1._m0[int(uint(int(_64)) >> uint(2))][int(_64) & 3] * _46));
    _33.y = _82;
    _33.z = _84;
    float _86 = fma(_84, vp_c3_1._m0[0].z, fma(_82, vp_c3_1._m0[0].y, _80 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _88 = fma(_84, vp_c3_1._m0[1].z, fma(_82, vp_c3_1._m0[1].y, _80 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _90 = fma(_84, vp_c3_1._m0[2].z, fma(_82, vp_c3_1._m0[2].y, _80 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _33.w = _90;
    _35.z = fma(_84, vp_c3_1._m0[37].z, fma(_82, vp_c3_1._m0[37].y, _80 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _35.y = fma(_84, vp_c3_1._m0[36].z, fma(_82, vp_c3_1._m0[36].y, _80 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _35.x = fma(_84, vp_c3_1._m0[35].z, fma(_82, vp_c3_1._m0[35].y, _80 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _92 = fma(_90, vp_c3_1._m0[10].z, fma(_88, vp_c3_1._m0[10].y, _86 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_90, vp_c3_1._m0[9].z, fma(_88, vp_c3_1._m0[9].y, _86 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _94 = fma(_90, vp_c3_1._m0[7].z, fma(_88, vp_c3_1._m0[7].y, _86 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.w = _92;
    float _96 = fma(_90, vp_c3_1._m0[8].z, fma(_88, vp_c3_1._m0[8].y, _86 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    _37.w = _92;
    gl_Position.x = _94;
    _37.x = _94;
    gl_Position.y = _96;
    _37.y = _96;
}


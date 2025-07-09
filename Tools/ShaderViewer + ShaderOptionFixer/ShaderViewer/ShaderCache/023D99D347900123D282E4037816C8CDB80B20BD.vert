#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 5, std140) uniform vp_c4
{
    vec4 _m0[4096];
} vp_c4_1;

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 1) in vec4 _31;
layout(location = 8) in vec4 _33;
layout(location = 0) in vec4 _35;
layout(location = 0) out vec4 _37;
layout(location = 2) out vec4 _39;
layout(location = 1) out vec4 _41;
layout(location = 3) out vec4 _43;
layout(location = 5) out vec4 _45;
layout(location = 4) out vec4 _47;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _54 = _31.x;
    float _56 = _31.y;
    float _58 = _33.y;
    float _60 = _31.z;
    float _62 = _35.x;
    float _64 = _33.x;
    float _66 = _35.y;
    float _68 = _35.z;
    float _70 = fma(_60, vp_c4_1._m0[0].z, fma(_56, vp_c4_1._m0[0].y, _54 * vp_c4_1._m0[0].x));
    float _72 = fma(_60, vp_c4_1._m0[1].z, fma(_56, vp_c4_1._m0[1].y, _54 * vp_c4_1._m0[1].x));
    float _74 = fma(_60, vp_c4_1._m0[2].z, fma(_56, vp_c4_1._m0[2].y, _54 * vp_c4_1._m0[2].x));
    _37.x = fma(_64, vp_c5_1._m0[111].x, _58 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    float _76 = inversesqrt(fma(_74, _74, fma(_72, _72, _70 * _70)));
    float _78 = fma(_68, vp_c4_1._m0[0].z, fma(_66, vp_c4_1._m0[0].y, _62 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    _37.y = fma(_64, vp_c5_1._m0[111].y, _58 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _80 = fma(_68, vp_c4_1._m0[1].z, fma(_66, vp_c4_1._m0[1].y, _62 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _39.x = _78;
    float _82 = fma(_68, vp_c4_1._m0[2].z, fma(_66, vp_c4_1._m0[2].y, _62 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _39.y = _80;
    _39.z = _82;
    _41.y = _72 * _76;
    _43.x = _78 + (-vp_c3_1._m0[11].w);
    _43.y = _80 + (-vp_c3_1._m0[12].w);
    _41.x = _70 * _76;
    _43.z = _82 + (-vp_c3_1._m0[13].w);
    float _84 = fma(_82, vp_c3_1._m0[0].z, fma(_80, vp_c3_1._m0[0].y, _78 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _41.z = _74 * _76;
    _45.y = fma(_82, vp_c3_1._m0[36].z, fma(_80, vp_c3_1._m0[36].y, _78 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _86 = fma(_82, vp_c3_1._m0[1].z, fma(_80, vp_c3_1._m0[1].y, _78 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _88 = fma(_82, vp_c3_1._m0[2].z, fma(_80, vp_c3_1._m0[2].y, _78 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _39.w = _88;
    _45.x = fma(_82, vp_c3_1._m0[35].z, fma(_80, vp_c3_1._m0[35].y, _78 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _45.z = fma(_82, vp_c3_1._m0[37].z, fma(_80, vp_c3_1._m0[37].y, _78 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _90 = fma(_88, vp_c3_1._m0[8].z, fma(_86, vp_c3_1._m0[8].y, _84 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_88, vp_c3_1._m0[9].z, fma(_86, vp_c3_1._m0[9].y, _84 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _92 = fma(_88, vp_c3_1._m0[7].z, fma(_86, vp_c3_1._m0[7].y, _84 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _90;
    float _94 = fma(_88, vp_c3_1._m0[10].z, fma(_86, vp_c3_1._m0[10].y, _84 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _47.y = _90;
    gl_Position.x = _92;
    _47.x = _92;
    gl_Position.w = _94;
    _47.w = _94;
}


#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(binding = 5, std140) uniform vp_c4
{
    vec4 _m0[4096];
} vp_c4_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 1) in vec4 _31;
layout(location = 0) in vec4 _33;
layout(location = 1) out vec4 _35;
layout(location = 2) out vec4 _37;
layout(location = 0) out vec4 _39;
layout(location = 3) out vec4 _41;
layout(location = 5) out vec4 _43;
layout(location = 6) out vec4 _45;
layout(location = 7) out vec4 _47;
layout(location = 4) out vec4 _49;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _56 = _31.x;
    float _58 = _31.y;
    float _60 = _31.z;
    float _62 = _33.x;
    float _64 = _33.y;
    float _66 = _33.z;
    _35.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    float _68 = fma(_60, vp_c4_1._m0[0].z, fma(_58, vp_c4_1._m0[0].y, _56 * vp_c4_1._m0[0].x));
    float _70 = fma(_60, vp_c4_1._m0[1].z, fma(_58, vp_c4_1._m0[1].y, _56 * vp_c4_1._m0[1].x));
    float _72 = fma(_60, vp_c4_1._m0[2].z, fma(_58, vp_c4_1._m0[2].y, _56 * vp_c4_1._m0[2].x));
    float _74 = fma(_66, vp_c4_1._m0[0].z, fma(_64, vp_c4_1._m0[0].y, _62 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    float _76 = inversesqrt(fma(_72, _72, fma(_70, _70, _68 * _68)));
    float _78 = fma(_66, vp_c4_1._m0[1].z, fma(_64, vp_c4_1._m0[1].y, _62 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _37.x = _74;
    float _80 = fma(_66, vp_c4_1._m0[2].z, fma(_64, vp_c4_1._m0[2].y, _62 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _37.y = _78;
    _37.z = _80;
    _39.x = _68 * _76;
    _41.x = _74 + (-vp_c3_1._m0[11].w);
    _41.y = _78 + (-vp_c3_1._m0[12].w);
    _41.z = _80 + (-vp_c3_1._m0[13].w);
    _39.y = _70 * _76;
    _39.z = _72 * _76;
    _43.w = fma(_80, vp_c3_1._m0[63].z, fma(_78, vp_c3_1._m0[63].y, _74 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _43.x = fma(_80, vp_c3_1._m0[60].z, fma(_78, vp_c3_1._m0[60].y, _74 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    _45.w = fma(_80, vp_c3_1._m0[45].z, fma(_78, vp_c3_1._m0[45].y, _74 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _43.y = fma(_80, vp_c3_1._m0[61].z, fma(_78, vp_c3_1._m0[61].y, _74 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    _43.z = fma(_80, vp_c3_1._m0[62].z, fma(_78, vp_c3_1._m0[62].y, _74 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _45.z = fma(_80, vp_c3_1._m0[44].z, fma(_78, vp_c3_1._m0[44].y, _74 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    _45.y = fma(_80, vp_c3_1._m0[43].z, fma(_78, vp_c3_1._m0[43].y, _74 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    float _82 = fma(_80, vp_c3_1._m0[0].z, fma(_78, vp_c3_1._m0[0].y, _74 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _47.z = fma(_80, vp_c3_1._m0[48].z, fma(_78, vp_c3_1._m0[48].y, _74 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    float _84 = fma(_80, vp_c3_1._m0[1].z, fma(_78, vp_c3_1._m0[1].y, _74 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _86 = fma(_80, vp_c3_1._m0[2].z, fma(_78, vp_c3_1._m0[2].y, _74 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _37.w = _86;
    _45.x = fma(_80, vp_c3_1._m0[42].z, fma(_78, vp_c3_1._m0[42].y, _74 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    _47.w = fma(_80, vp_c3_1._m0[49].z, fma(_78, vp_c3_1._m0[49].y, _74 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    _47.y = fma(_80, vp_c3_1._m0[47].z, fma(_78, vp_c3_1._m0[47].y, _74 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _49.z = fma(_80, vp_c3_1._m0[37].z, fma(_78, vp_c3_1._m0[37].y, _74 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _47.x = fma(_80, vp_c3_1._m0[46].z, fma(_78, vp_c3_1._m0[46].y, _74 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    _49.y = fma(_80, vp_c3_1._m0[36].z, fma(_78, vp_c3_1._m0[36].y, _74 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _49.x = fma(_80, vp_c3_1._m0[35].z, fma(_78, vp_c3_1._m0[35].y, _74 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    gl_Position.w = fma(_86, vp_c3_1._m0[10].z, fma(_84, vp_c3_1._m0[10].y, _82 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.y = fma(_86, vp_c3_1._m0[8].z, fma(_84, vp_c3_1._m0[8].y, _82 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_86, vp_c3_1._m0[9].z, fma(_84, vp_c3_1._m0[9].y, _82 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_86, vp_c3_1._m0[7].z, fma(_84, vp_c3_1._m0[7].y, _82 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


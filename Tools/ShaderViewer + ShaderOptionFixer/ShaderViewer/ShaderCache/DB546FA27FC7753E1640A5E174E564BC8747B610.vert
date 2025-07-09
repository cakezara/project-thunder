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

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(location = 0) in vec4 _31;
layout(location = 1) in vec4 _33;
layout(location = 2) out vec4 _35;
layout(location = 3) out vec4 _37;
layout(location = 5) out vec4 _39;
layout(location = 1) out vec4 _41;
layout(location = 4) out vec4 _43;
layout(location = 0) out vec4 _45;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _52 = _31.x;
    float _54 = _31.y;
    float _56 = _31.z;
    float _58 = _33.x;
    float _60 = _33.y;
    float _62 = _33.z;
    float _64 = fma(_56, vp_c4_1._m0[0].z, fma(_54, vp_c4_1._m0[0].y, _52 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    float _66 = fma(_56, vp_c4_1._m0[1].z, fma(_54, vp_c4_1._m0[1].y, _52 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _35.x = _64;
    float _68 = fma(_56, vp_c4_1._m0[2].z, fma(_54, vp_c4_1._m0[2].y, _52 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _35.y = _66;
    float _70 = _64 + (-vp_c3_1._m0[11].w);
    _35.z = _68;
    float _72 = _66 + (-vp_c3_1._m0[12].w);
    _37.x = _70;
    float _74 = _68 + (-vp_c3_1._m0[13].w);
    _37.y = _72;
    _37.z = _74;
    float _76 = fma(_62, vp_c4_1._m0[1].z, fma(_60, vp_c4_1._m0[1].y, _58 * vp_c4_1._m0[1].x));
    float _78 = inversesqrt(fma(_74, _74, fma(_72, _72, _70 * _70)));
    float _80 = fma(_62, vp_c4_1._m0[0].z, fma(_60, vp_c4_1._m0[0].y, _58 * vp_c4_1._m0[0].x));
    float _82 = fma(_62, vp_c4_1._m0[2].z, fma(_60, vp_c4_1._m0[2].y, _58 * vp_c4_1._m0[2].x));
    float _84 = _72 * (-_78);
    float _86 = _74 * (-_78);
    float _88 = _70 * (-_78);
    float _90 = fma(_68, vp_c3_1._m0[1].z, fma(_66, vp_c3_1._m0[1].y, _64 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _39.z = fma(_68, vp_c3_1._m0[37].z, fma(_66, vp_c3_1._m0[37].y, _64 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    float _92 = fma(_86, vp_c3_1._m0[12].y, -(_84 * vp_c3_1._m0[13].y));
    _39.y = fma(_68, vp_c3_1._m0[36].z, fma(_66, vp_c3_1._m0[36].y, _64 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _94 = fma(_88, vp_c3_1._m0[13].y, -(_86 * vp_c3_1._m0[11].y));
    float _96 = fma(_84, vp_c3_1._m0[11].y, -(_88 * vp_c3_1._m0[12].y));
    float _98 = inversesqrt(fma(_82, _82, fma(_76, _76, _80 * _80)));
    float _100 = fma(_68, vp_c3_1._m0[0].z, fma(_66, vp_c3_1._m0[0].y, _64 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _102 = inversesqrt(fma(_96, _96, fma(_94, _94, _92 * _92)));
    float _104 = fma(_68, vp_c3_1._m0[2].z, fma(_66, vp_c3_1._m0[2].y, _64 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _35.w = _104;
    float _106 = _80 * _98;
    _41.x = _106;
    float _108 = _94 * _102;
    float _110 = _96 * _102;
    float _112 = _92 * _102;
    float _114 = _82 * _98;
    _41.z = _114;
    float _116 = _76 * _98;
    _41.y = _116;
    _39.x = fma(_68, vp_c3_1._m0[35].z, fma(_66, vp_c3_1._m0[35].y, _64 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _118 = fma(fma(_110, _114, fma(_108, _116, _112 * _106)), 0.5, 0.5);
    float _120 = fma(_104, vp_c3_1._m0[10].z, fma(_90, vp_c3_1._m0[10].y, _100 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_104, vp_c3_1._m0[9].z, fma(_90, vp_c3_1._m0[9].y, _100 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _122 = fma(fma(fma(_88, _108, -(_84 * _112)), _114, fma(fma(_86, _112, -(_88 * _110)), _116, fma(_84, _110, -(_86 * _108)) * _106)), -0.5, 0.5);
    gl_Position.w = _120;
    float _124 = fma(_104, vp_c3_1._m0[7].z, fma(_90, vp_c3_1._m0[7].y, _100 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    _43.w = _120;
    float _126 = fma(_104, vp_c3_1._m0[8].z, fma(_90, vp_c3_1._m0[8].y, _100 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.x = _124;
    _43.x = _124;
    gl_Position.y = _126;
    _43.y = _126;
    _45.x = fma(_118, vp_c5_1._m0[111].x, _122 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _45.y = fma(_118, vp_c5_1._m0[111].y, _122 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
}


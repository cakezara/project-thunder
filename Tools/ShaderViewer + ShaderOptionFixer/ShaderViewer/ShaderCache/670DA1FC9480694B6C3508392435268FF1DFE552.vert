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

layout(binding = 7, std140) uniform vp_c6
{
    vec4 _m0[4096];
} vp_c6_1;

layout(binding = 5, std140) uniform vp_c4
{
    vec4 _m0[4096];
} vp_c4_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(binding = 0) uniform sampler2D vp_tex_tcb_C;

layout(location = 0) in vec4 _38;
layout(location = 8) in vec4 _40;
layout(location = 2) in vec4 _42;
layout(location = 9) in vec4 _44;
layout(location = 1) in vec4 _46;
layout(location = 12) in vec4 _48;
layout(location = 7) out vec4 _50;
layout(location = 2) out vec4 _52;
layout(location = 0) out vec4 _54;
layout(location = 1) out vec4 _56;
layout(location = 3) out vec4 _58;
layout(location = 4) out vec4 _60;
layout(location = 6) out vec4 _62;
layout(location = 5) out vec4 _64;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _71 = _38.y;
    float _73 = _38.x;
    float _75 = _38.z;
    float _77 = _40.x;
    float _79 = _40.y;
    float _81 = (_71 + _73) + _75;
    float _83 = fma(vp_c6_1._m0[20].w, vp_c5_1._m0[86].x, _81 * vp_c5_1._m0[86].z);
    float _85 = fma(_77, vp_c5_1._m0[89].x, _83);
    float _87 = fma(_79, -vp_c5_1._m0[89].y, _83);
    float _89 = textureLod(vp_tex_tcb_C, vec2(_85, _87), 0.0).x;
    float _91 = _42.x;
    float _93 = _42.y;
    float _95 = _42.z;
    float _97 = _44.x;
    float _99 = _46.x;
    float _101 = _44.y;
    float _103 = _46.y;
    float _105 = _46.z;
    float _107 = fma(_95, vp_c4_1._m0[0].z, fma(_93, vp_c4_1._m0[0].y, _91 * vp_c4_1._m0[0].x));
    float _109 = fma(_95, vp_c4_1._m0[2].z, fma(_93, vp_c4_1._m0[2].y, _91 * vp_c4_1._m0[2].x));
    float _111 = fma(_95, vp_c4_1._m0[1].z, fma(_93, vp_c4_1._m0[1].y, _91 * vp_c4_1._m0[1].x));
    _50.z = fma(_97, vp_c5_1._m0[22].x, vp_c5_1._m0[22].z);
    _50.x = fma(_97, vp_c5_1._m0[21].x, vp_c5_1._m0[21].z);
    _50.w = fma(_101, vp_c5_1._m0[22].y, vp_c5_1._m0[22].w);
    _50.y = fma(_101, vp_c5_1._m0[21].y, vp_c5_1._m0[21].w);
    _52.w = _42.w;
    float _113 = fma(_105, vp_c4_1._m0[0].z, fma(_103, vp_c4_1._m0[0].y, _99 * vp_c4_1._m0[0].x));
    float _115 = inversesqrt(fma(_109, _109, fma(_111, _111, _107 * _107)));
    float _117 = fma(vp_c6_1._m0[20].w, vp_c5_1._m0[85].x, _81 * vp_c5_1._m0[85].w);
    _54.x = fma(_77, vp_c5_1._m0[112].x, _79 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    float _119 = fma(_105, vp_c4_1._m0[1].z, fma(_103, vp_c4_1._m0[1].y, _99 * vp_c4_1._m0[1].x));
    _52.x = _107 * _115;
    _52.y = _111 * _115;
    _52.z = _109 * _115;
    float _121 = fma(_105, vp_c4_1._m0[2].z, fma(_103, vp_c4_1._m0[2].y, _99 * vp_c4_1._m0[2].x));
    _54.y = fma(_77, vp_c5_1._m0[112].y, _79 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    float _123 = inversesqrt(fma(_121, _121, fma(_119, _119, _113 * _113)));
    _54.w = fma(_85, vp_c5_1._m0[114].y, _87 * vp_c5_1._m0[114].w) + vp_c5_1._m0[115].y;
    _54.z = fma(_85, vp_c5_1._m0[114].x, _87 * vp_c5_1._m0[114].z) + vp_c5_1._m0[115].x;
    float _125 = clamp(_48.x * vp_c5_1._m0[89].z, 0.0, 1.0);
    _56.x = _113 * _123;
    _56.y = _119 * _123;
    _56.z = _121 * _123;
    float _127 = fma(_125, fma(_89 * _99, vp_c5_1._m0[86].y, 0.0), _73);
    float _129 = fma(_125, fma(_89 * _103, vp_c5_1._m0[86].y, fma(_89, vp_c5_1._m0[85].y, sin(_117 * 0.2700000107288360595703125) + sin(_117)) * vp_c5_1._m0[85].z), _71);
    float _131 = fma(_125, fma(_89 * _105, vp_c5_1._m0[86].y, 0.0), _75);
    float _133 = fma(_131, vp_c4_1._m0[0].z, fma(_129, vp_c4_1._m0[0].y, _127 * vp_c4_1._m0[0].x)) + vp_c4_1._m0[0].w;
    float _135 = fma(_131, vp_c4_1._m0[1].z, fma(_129, vp_c4_1._m0[1].y, _127 * vp_c4_1._m0[1].x)) + vp_c4_1._m0[1].w;
    _58.x = _133;
    float _137 = fma(_131, vp_c4_1._m0[2].z, fma(_129, vp_c4_1._m0[2].y, _127 * vp_c4_1._m0[2].x)) + vp_c4_1._m0[2].w;
    _58.y = _135;
    _58.z = _137;
    _60.x = _133 + (-vp_c3_1._m0[11].w);
    float _139 = fma(_137, vp_c3_1._m0[0].z, fma(_135, vp_c3_1._m0[0].y, _133 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _60.y = _135 + (-vp_c3_1._m0[12].w);
    _60.z = _137 + (-vp_c3_1._m0[13].w);
    float _141 = fma(_137, vp_c3_1._m0[1].z, fma(_135, vp_c3_1._m0[1].y, _133 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _143 = fma(_137, vp_c3_1._m0[2].z, fma(_135, vp_c3_1._m0[2].y, _133 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _58.w = _143;
    _62.y = fma(_137, vp_c3_1._m0[36].z, fma(_135, vp_c3_1._m0[36].y, _133 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _62.z = fma(_137, vp_c3_1._m0[37].z, fma(_135, vp_c3_1._m0[37].y, _133 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _62.x = fma(_137, vp_c3_1._m0[35].z, fma(_135, vp_c3_1._m0[35].y, _133 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _145 = fma(_143, vp_c3_1._m0[8].z, fma(_141, vp_c3_1._m0[8].y, _139 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_143, vp_c3_1._m0[9].z, fma(_141, vp_c3_1._m0[9].y, _139 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _147 = fma(_143, vp_c3_1._m0[7].z, fma(_141, vp_c3_1._m0[7].y, _139 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _145;
    float _149 = fma(_143, vp_c3_1._m0[10].z, fma(_141, vp_c3_1._m0[10].y, _139 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _64.y = _145;
    gl_Position.x = _147;
    _64.x = _147;
    gl_Position.w = _149;
    _64.w = _149;
}


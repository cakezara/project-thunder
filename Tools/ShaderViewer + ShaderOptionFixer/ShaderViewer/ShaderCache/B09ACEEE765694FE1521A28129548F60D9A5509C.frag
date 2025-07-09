#version 450

layout(binding = 0, std140) uniform support_buffer
{
    uint _m0;
    uint _m1[8];
    vec4 _m2;
    int _m3;
    float _m4[73];
} support_buffer_1;

layout(binding = 7, std140) uniform fp_c6
{
    vec4 _m0[4096];
} fp_c6_1;

layout(binding = 2, std140) uniform fp_c1
{
    vec4 _m0[4096];
} fp_c1_1;

layout(binding = 6, std140) uniform fp_c5
{
    vec4 _m0[4096];
} fp_c5_1;

layout(binding = 4, std140) uniform fp_c3
{
    vec4 _m0[4096];
} fp_c3_1;

layout(binding = 8, std140) uniform fp_c7
{
    vec4 _m0[4096];
} fp_c7_1;

layout(binding = 0) uniform sampler2D fp_tex_tcb_A;
layout(binding = 1) uniform sampler2D fp_tex_tcb_14;
layout(binding = 2) uniform sampler2D fp_tex_tcb_1C;
layout(binding = 3) uniform sampler2D fp_tex_tcb_1E;
layout(binding = 4) uniform sampler2D fp_tex_tcb_28;
layout(binding = 5) uniform sampler2D fp_tex_tcb_2A;
layout(binding = 6) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 7) uniform sampler2D fp_tex_tcb_38;

layout(location = 3) in vec4 _53;
layout(location = 1) in vec4 _55;
layout(location = 4) in vec4 _57;
layout(location = 0) in vec4 _59;
layout(location = 5) in vec4 _61;
layout(location = 2) in vec4 _63;
layout(location = 0) out vec4 _66;

void main()
{
    float _73 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].y);
    float _75 = _53.x;
    float _77 = _55.x;
    float _79 = _53.y;
    float _81 = _55.y;
    float _83 = _53.z;
    float _85 = _55.z;
    float _87 = _59.x;
    float _89 = _59.y;
    float _91 = 1.0 / _57.w;
    float _93 = inversesqrt(fma(_83, _83, fma(_79, _79, _75 * _75)));
    float _95 = inversesqrt(fma(_85, _85, fma(_81, _81, _77 * _77)));
    float _97 = _75 * (-_93);
    float _99 = _79 * (-_93);
    float _101 = _77 * _95;
    float _103 = _81 * _95;
    float _105 = _85 * _95;
    float _107 = _83 * (-_93);
    float _109 = _97 + (-fp_c5_1._m0[23].x);
    float _111 = _99 + (-fp_c5_1._m0[23].y);
    float _113 = _101 * _103;
    float _115 = _103 * _105;
    float _117 = _107 + (-fp_c5_1._m0[23].z);
    float _119 = _101 * _105;
    float _121 = fma(_105, _107, fma(_103, _99, _101 * _97));
    float _123 = _105 * _105;
    float _125 = inversesqrt(fma(_117, _117, fma(_111, _111, _109 * _109)));
    float _127 = fma(_103, -fp_c5_1._m0[23].y, _101 * (-fp_c5_1._m0[23].x));
    float _129 = fma(_101 * (-_121), -2.0, -_97);
    float _131 = fma(_103 * (-_121), -2.0, -_99);
    float _133 = _109 * _125;
    float _135 = fma(_105 * (-_121), -2.0, -_107);
    float _137 = _111 * _125;
    float _139 = _117 * _125;
    float _141 = max(_121, fp_c1_1._m0[0].x);
    float _143 = fma(_101, _101, -(_103 * _103));
    vec3 _147 = texture(fp_tex_tcb_A, vec2(_87, _89)).xyz;
    float _149 = _147.x;
    float _151 = _147.y;
    float _153 = _147.z;
    float _155 = 1.0 / (_61.z * gl_FragCoord.w);
    float _157 = 1.0 / max(abs(_135), max(abs(_129), abs(_131)));
    vec3 _159 = texture(fp_tex_tcb_36, vec4(_129 * _157, _131 * _157, _135 * _157, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_73 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec2 _163 = texture(fp_tex_tcb_38, vec2(_141, (-_73) + (-0.0))).xy;
    float _165 = _163.x;
    float _167 = _163.y;
    vec3 _169 = texture(fp_tex_tcb_14, vec2(_87, _89)).xyz;
    vec3 _171 = texture(fp_tex_tcb_1C, vec2(_59.z, _59.w)).xyz;
    vec3 _173 = texture(fp_tex_tcb_1E, vec2(_87, _89)).xyz;
    float _175 = max(fma(_105, _139, fma(_103, _137, _101 * _133)), fp_c1_1._m0[0].x) * max(fma(_105, _139, fma(_103, _137, _101 * _133)), fp_c1_1._m0[0].x);
    float _177 = _63.z;
    float _179 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].y) * max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].y);
    float _181 = fma(_73, 0.5, 0.5);
    float _183 = clamp(fma(_105, -fp_c5_1._m0[23].z, _127), 0.0, 1.0);
    float _185 = (_181 * 0.5) * _181;
    float _187 = max(fma(_105, -fp_c5_1._m0[23].z, _127), fp_c1_1._m0[0].x);
    float _189 = _63.x;
    float _191 = _63.y;
    float _193 = max(fma(_107, _139, fma(_99, _137, _97 * _133)), fp_c1_1._m0[0].x);
    float _195 = _177 + (-fp_c3_1._m0[13].w);
    float _197 = _189 + (-fp_c3_1._m0[11].w);
    float _199 = ((1.0 / (_185 + fma(_141, -_185, _141))) * (1.0 / (_185 + fma(_185, -_187, _187)))) * ((_179 * (1.0 / max(fma(_175, _179 * _179, -_175) + 1.0, fp_c1_1._m0[0].x))) * (_179 * (1.0 / max(fma(_175, _179 * _179, -_175) + 1.0, fp_c1_1._m0[0].x))));
    float _201 = _191 + (-fp_c3_1._m0[12].w);
    float _203 = fma(_149, -fp_c6_1._m0[9].x, _149);
    float _205 = fma(_149 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _207 = fma(_195, _195, fma(_201, _201, _197 * _197));
    float _209 = exp2(_193 * fma(_193, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _211 = fma(_151 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _213 = fma(_153 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _215 = fma(_151, -fp_c6_1._m0[9].x, _151);
    float _217 = fma(_153, -fp_c6_1._m0[9].x, _153);
    float _219 = fma(_153 * _169.z, fp_c1_1._m0[1].y, fma(_151 * _169.y, fp_c1_1._m0[1].x, (_149 * _169.x) * 0.298911988735198974609375));
    float _221 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _223 = clamp((-fma(max(0.0, (-texture(fp_tex_tcb_2A, vec2(fma(_57.x * _91, 0.5, 0.5), fma(_57.y * _91, -0.5, 0.5))).y) + 1.0), clamp(_63.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_61.x * gl_FragCoord.w) * _155, (_61.y * gl_FragCoord.w) * _155)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _225 = exp2(log2(clamp(sqrt(_207) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_195 * inversesqrt(_207), fp_c5_1._m0[23].z, fma(_201 * inversesqrt(_207), fp_c5_1._m0[23].y, (_197 * inversesqrt(_207)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _227 = clamp(fma(_223, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _229 = fma(fma(_171.x + fp_c6_1._m0[97].x, _219, _173.x), _221, fma(fma((_205 + fma(_205, -_209, _209)) * _199, fp_c1_1._m0[0].w, _203 * 0.3183098733425140380859375) * (_183 * fp_c5_1._m0[5].x), _223, fma(_159.x, fma(_205, _165, _167), max(0.0, fma(_143, fp_c5_1._m0[31].x, (fma(_105, fp_c5_1._m0[25].z, fma(_103, fp_c5_1._m0[25].y, _101 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_119, fp_c5_1._m0[28].w, fma(_123, fp_c5_1._m0[28].z, fma(_115, fp_c5_1._m0[28].y, _113 * fp_c5_1._m0[28].x))))) * fma(_203, -_205, _203))));
    float _231 = fma(fma(_171.y + fp_c6_1._m0[97].y, _219, _173.y), _221, fma(fma((_211 + fma(_211, -_209, _209)) * _199, fp_c1_1._m0[0].w, _215 * 0.3183098733425140380859375) * (_183 * fp_c5_1._m0[5].y), _223, fma(_159.y, fma(_211, _165, _167), max(0.0, fma(_143, fp_c5_1._m0[31].y, (fma(_105, fp_c5_1._m0[26].z, fma(_103, fp_c5_1._m0[26].y, _101 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_119, fp_c5_1._m0[29].w, fma(_123, fp_c5_1._m0[29].z, fma(_115, fp_c5_1._m0[29].y, _113 * fp_c5_1._m0[29].x))))) * fma(_215, -_211, _215))));
    float _233 = fma(fma(_171.z + fp_c6_1._m0[97].z, _219, _173.z), _221, fma(fma((_213 + fma(_213, -_209, _209)) * _199, fp_c1_1._m0[0].w, _217 * 0.3183098733425140380859375) * (_183 * fp_c5_1._m0[5].z), _223, fma(_159.z, fma(_213, _165, _167), max(0.0, fma(_143, fp_c5_1._m0[31].z, (fma(_105, fp_c5_1._m0[27].z, fma(_103, fp_c5_1._m0[27].y, _101 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_119, fp_c5_1._m0[30].w, fma(_123, fp_c5_1._m0[30].z, fma(_115, fp_c5_1._m0[30].y, _113 * fp_c5_1._m0[30].x))))) * fma(_217, -_213, _217))));
    float _235 = clamp(fma(fma(_177, fp_c5_1._m0[14].z, fma(_191, fp_c5_1._m0[14].y, _189 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _237 = fma((-_229) + fp_c5_1._m0[13].x, _235, _229);
    float _239 = fma((-_231) + fp_c5_1._m0[13].y, _235, _231);
    float _241 = fma((-_233) + fp_c5_1._m0[13].z, _235, _233);
    float _243 = clamp((-exp2((clamp(fma(sqrt(_207), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _66.x = fma((-_237) + fma(fma(_227 * (_225 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _243, _237);
    _66.y = fma((-_239) + fma(fma(_227 * (_225 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _243, _239);
    _66.z = fma((-_241) + fma(fma(_227 * (_225 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _243, _241);
    _66.w = 1.0;
}


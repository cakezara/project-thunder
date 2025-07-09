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

layout(location = 5) in vec4 _53;
layout(location = 1) in vec4 _55;
layout(location = 3) in vec4 _57;
layout(location = 0) in vec4 _59;
layout(location = 4) in vec4 _61;
layout(location = 2) in vec4 _63;
layout(location = 0) out vec4 _66;

void main()
{
    float _73 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].x);
    float _75 = 1.0 / (_53.z * gl_FragCoord.w);
    float _77 = _55.x;
    float _79 = _57.x;
    float _81 = _55.y;
    float _83 = _57.y;
    float _85 = _55.z;
    float _87 = _57.z;
    float _89 = _59.x;
    float _91 = _59.y;
    float _93 = inversesqrt(fma(_85, _85, fma(_81, _81, _77 * _77)));
    float _95 = inversesqrt(fma(_87, _87, fma(_83, _83, _79 * _79)));
    float _97 = _77 * _93;
    float _99 = _79 * (-_95);
    float _101 = _81 * _93;
    float _103 = _83 * (-_95);
    float _105 = _85 * _93;
    float _107 = _87 * (-_95);
    float _109 = 1.0 / _61.w;
    float _111 = fma(_105, _107, fma(_101, _103, _97 * _99));
    float _113 = max(_111, fp_c1_1._m0[0].y);
    float _115 = fma(_101 * (-_111), -2.0, -_103);
    float _117 = fma(_97 * (-_111), -2.0, -_99);
    float _119 = fma(_105 * (-_111), -2.0, -_107);
    float _121 = 1.0 / max(abs(_119), max(abs(_117), abs(_115)));
    vec3 _125 = texture(fp_tex_tcb_A, vec2(_89, _91)).xyz;
    float _127 = _125.x;
    float _129 = _125.y;
    float _131 = _125.z;
    vec2 _135 = texture(fp_tex_tcb_38, vec2(_113, (-_73) + (-0.0))).xy;
    float _137 = _135.x;
    float _139 = _135.y;
    vec3 _141 = texture(fp_tex_tcb_36, vec4(_117 * _121, _115 * _121, _119 * _121, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_73 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    vec3 _143 = texture(fp_tex_tcb_14, vec2(_59.x, _91)).xyz;
    vec3 _145 = texture(fp_tex_tcb_1C, vec2(_59.z, _59.w)).xyz;
    vec3 _147 = texture(fp_tex_tcb_1E, vec2(_89, _91)).xyz;
    float _149 = _99 + (-fp_c5_1._m0[23].x);
    float _151 = _103 + (-fp_c5_1._m0[23].y);
    float _153 = _107 + (-fp_c5_1._m0[23].z);
    float _155 = _97 * _101;
    float _157 = _101 * _105;
    float _159 = inversesqrt(fma(_153, _153, fma(_151, _151, _149 * _149)));
    float _161 = _105 * _105;
    float _163 = _149 * _159;
    float _165 = _151 * _159;
    float _167 = _153 * _159;
    float _169 = _97 * _105;
    float _171 = fma(_101, -fp_c5_1._m0[23].y, _97 * (-fp_c5_1._m0[23].x));
    float _173 = fma(_97, _97, -(_101 * _101));
    float _175 = _73 * _73;
    float _177 = max(fma(_105, _167, fma(_101, _165, _97 * _163)), fp_c1_1._m0[0].y) * max(fma(_105, _167, fma(_101, _165, _97 * _163)), fp_c1_1._m0[0].y);
    float _179 = max(fma(_105, -fp_c5_1._m0[23].z, _171), fp_c1_1._m0[0].y);
    float _181 = clamp(fma(_105, -fp_c5_1._m0[23].z, _171), 0.0, 1.0);
    float _183 = fma(_73, 0.5, 0.5);
    float _185 = (_183 * 0.5) * _183;
    float _187 = _63.x;
    float _189 = max(fma(_107, _167, fma(_103, _165, _99 * _163)), fp_c1_1._m0[0].y);
    float _191 = _63.y;
    float _193 = _63.z;
    float _195 = _187 + (-fp_c3_1._m0[11].w);
    float _197 = ((1.0 / (_185 + fma(_113, -_185, _113))) * (1.0 / (_185 + fma(_185, -_179, _179)))) * ((_175 * (1.0 / max(fma(_177, _175 * _175, -_177) + 1.0, fp_c1_1._m0[0].y))) * (_175 * (1.0 / max(fma(_177, _175 * _175, -_177) + 1.0, fp_c1_1._m0[0].y))));
    float _199 = exp2(_189 * fma(_189, fp_c1_1._m0[0].z, -6.9831600189208984375));
    float _201 = _193 + (-fp_c3_1._m0[13].w);
    float _203 = fma(_127 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _205 = fma(_129 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _207 = fma(_131 + (-0.039999999105930328369140625), fp_c6_1._m0[9].x, 0.039999999105930328369140625);
    float _209 = _191 + (-fp_c3_1._m0[12].w);
    float _211 = fma(_127, -fp_c6_1._m0[9].x, _127);
    float _213 = fma(_201, _201, fma(_209, _209, _195 * _195));
    float _215 = fma(_129, -fp_c6_1._m0[9].x, _129);
    float _217 = fma(_131, -fp_c6_1._m0[9].x, _131);
    float _219 = clamp((-fma(max(0.0, (-texture(fp_tex_tcb_2A, vec2(fma(_61.x * _109, 0.5, 0.5), fma(_61.y * _109, -0.5, 0.5))).y) + 1.0), clamp(_63.w + fp_c7_1._m0[36].z, 0.0, 1.0), fma(texture(fp_tex_tcb_28, vec2((_53.x * gl_FragCoord.w) * _75, (_53.y * gl_FragCoord.w) * _75)).x, -fp_c3_1._m0[41].x, fp_c3_1._m0[41].x))) + 1.0, 0.0, 1.0);
    float _221 = exp2(log2(clamp(sqrt(_213) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_201 * inversesqrt(_213), fp_c5_1._m0[23].z, fma(_209 * inversesqrt(_213), fp_c5_1._m0[23].y, (_195 * inversesqrt(_213)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _223 = clamp(fma(fma(_193, fp_c5_1._m0[14].z, fma(_191, fp_c5_1._m0[14].y, _187 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _225 = clamp(fma(_219, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _227 = fma(fp_c7_1._m0[52].w, fp_c6_1._m0[13].y, fp_c6_1._m0[11].x);
    float _229 = fma(fma(_145.z, _143.z * fp_c6_1._m0[92].z, _147.z), _227, fma(fma(_197 * (_207 + fma(_207, -_199, _199)), fp_c1_1._m0[0].w, _217 * 0.3183098733425140380859375) * (_181 * fp_c5_1._m0[5].z), _219, fma(fma(_207, _137, _139), _141.z, max(0.0, fma(_173, fp_c5_1._m0[31].z, (fma(_105, fp_c5_1._m0[27].z, fma(_101, fp_c5_1._m0[27].y, _97 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_169, fp_c5_1._m0[30].w, fma(_161, fp_c5_1._m0[30].z, fma(_157, fp_c5_1._m0[30].y, _155 * fp_c5_1._m0[30].x))))) * fma(_207, -_217, _217))));
    float _231 = fma(fma(_145.x, _143.x * fp_c6_1._m0[92].x, _147.x), _227, fma(fma(_197 * (_203 + fma(_203, -_199, _199)), fp_c1_1._m0[0].w, _211 * 0.3183098733425140380859375) * (_181 * fp_c5_1._m0[5].x), _219, fma(fma(_203, _137, _139), _141.x, max(0.0, fma(_173, fp_c5_1._m0[31].x, (fma(_105, fp_c5_1._m0[25].z, fma(_101, fp_c5_1._m0[25].y, _97 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_169, fp_c5_1._m0[28].w, fma(_161, fp_c5_1._m0[28].z, fma(_157, fp_c5_1._m0[28].y, _155 * fp_c5_1._m0[28].x))))) * fma(_203, -_211, _211))));
    float _233 = fma(fma(_145.y, _143.y * fp_c6_1._m0[92].y, _147.y), _227, fma(fma(_197 * (_205 + fma(_205, -_199, _199)), fp_c1_1._m0[0].w, _215 * 0.3183098733425140380859375) * (_181 * fp_c5_1._m0[5].y), _219, fma(fma(_205, _137, _139), _141.y, max(0.0, fma(_173, fp_c5_1._m0[31].y, (fma(_105, fp_c5_1._m0[26].z, fma(_101, fp_c5_1._m0[26].y, _97 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_169, fp_c5_1._m0[29].w, fma(_161, fp_c5_1._m0[29].z, fma(_157, fp_c5_1._m0[29].y, _155 * fp_c5_1._m0[29].x))))) * fma(_205, -_215, _215))));
    float _235 = fma((-_229) + fp_c5_1._m0[13].z, _223, _229);
    float _237 = fma((-_231) + fp_c5_1._m0[13].x, _223, _231);
    float _239 = fma((-_233) + fp_c5_1._m0[13].y, _223, _233);
    float _241 = clamp((-exp2((clamp(fma(sqrt(_213), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _66.x = fma((-_237) + fma(fma(_225 * (_221 * fp_c7_1._m0[55].x), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _241, _237);
    _66.y = fma((-_239) + fma(fma(_225 * (_221 * fp_c7_1._m0[55].y), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _241, _239);
    _66.z = fma((-_235) + fma(fma(_225 * (_221 * fp_c7_1._m0[55].z), fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _241, _235);
    _66.w = 1.0;
}


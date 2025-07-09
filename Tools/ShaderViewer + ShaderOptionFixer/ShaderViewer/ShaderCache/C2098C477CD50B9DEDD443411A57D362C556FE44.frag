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

layout(binding = 0) uniform sampler2D fp_tex_tcb_22;
layout(binding = 1) uniform sampler2D fp_tex_tcb_24;
layout(binding = 2) uniform sampler2D fp_tex_tcb_30;
layout(binding = 3) uniform samplerCubeArray fp_tex_tcb_36;
layout(binding = 4) uniform sampler2D fp_tex_tcb_38;

layout(location = 0) in vec4 _47;
layout(location = 3) in vec4 _49;
layout(location = 4) in vec4 _51;
layout(location = 6) in vec4 _53;
layout(location = 2) in vec4 _55;
layout(location = 1) in vec4 _57;
layout(location = 5) in vec4 _59;
layout(location = 0) out vec4 _62;

void main()
{
    float _69 = max(fp_c6_1._m0[8].w, fp_c1_1._m0[0].z);
    float _71 = _47.x;
    float _73 = _49.x;
    float _75 = _47.y;
    float _77 = _49.y;
    float _79 = _47.z;
    float _81 = _49.z;
    float _83 = inversesqrt(fma(_79, _79, fma(_75, _75, _71 * _71)));
    float _85 = inversesqrt(fma(_81, _81, fma(_77, _77, _73 * _73)));
    float _87 = _71 * _83;
    float _89 = _75 * _83;
    float _91 = _73 * (-_85);
    float _93 = _77 * (-_85);
    float _95 = _79 * _83;
    float _97 = _81 * (-_85);
    float _99 = fma(_95, -_97, fma(_89, -_93, _87 * (-_91)));
    float _101 = 1.0 / _51.w;
    float _103 = max(-_99, fp_c1_1._m0[0].x);
    vec2 _107 = texture(fp_tex_tcb_38, vec2(_103, (-_69) + (-0.0))).xy;
    float _109 = _107.x;
    float _111 = _107.y;
    float _113 = fma(_87 * _99, -2.0, -_91);
    float _115 = fma(_89 * _99, -2.0, -_93);
    float _117 = fma(_95 * _99, -2.0, -_97);
    float _119 = 1.0 / max(abs(_117), max(abs(_113), abs(_115)));
    float _121 = _91 + (-fp_c5_1._m0[23].x);
    vec2 _123 = texture(fp_tex_tcb_22, vec2(_53.x, _53.y)).xy;
    vec3 _127 = textureLod(fp_tex_tcb_30, vec2(fma(_51.x * _101, 0.5, 0.5), fma(_51.y * _101, -0.5, 0.5)), _69).xyz;
    float _129 = _127.x;
    float _131 = _127.y;
    float _133 = _127.z;
    vec4 _136 = texture(fp_tex_tcb_24, vec2(_53.z, _53.w)).xyzw;
    float _138 = _136.w;
    vec3 _140 = texture(fp_tex_tcb_36, vec4(_113 * _119, _115 * _119, _117 * _119, float(int(clamp(uint(max(roundEven(roundEven(fma(cos(_69 * 3.1415927410125732421875), -5.5, 5.5))), 0.0)), 0u, 65535u))))).xyz;
    float _142 = _93 + (-fp_c5_1._m0[23].y);
    float _144 = _97 + (-fp_c5_1._m0[23].z);
    float _146 = fma(_69, 0.5, 0.5);
    float _148 = inversesqrt(fma(_144, _144, fma(_142, _142, _121 * _121)));
    float _150 = _121 * _148;
    float _152 = _142 * _148;
    float _154 = _144 * _148;
    float _156 = _87 * _89;
    float _158 = _69 * _69;
    float _160 = _89 * _95;
    float _162 = _55.z;
    float _164 = fma(_89, -fp_c5_1._m0[23].y, _87 * (-fp_c5_1._m0[23].x));
    float _166 = _95 * _95;
    float _168 = max(fma(_95, _154, fma(_89, _152, _87 * _150)), fp_c1_1._m0[0].x) * max(fma(_95, _154, fma(_89, _152, _87 * _150)), fp_c1_1._m0[0].x);
    float _170 = (_146 * 0.5) * _146;
    float _172 = max(fma(_97, _154, fma(_93, _152, _91 * _150)), fp_c1_1._m0[0].x);
    float _174 = _55.y;
    float _176 = fma(_87, _87, -(_89 * _89));
    float _178 = _87 * _95;
    float _180 = _55.x;
    float _182 = exp2(_172 * fma(_172, fp_c1_1._m0[0].y, -6.9831600189208984375));
    float _184 = clamp(fma(_95, -fp_c5_1._m0[23].z, _164), 0.0, 1.0);
    float _186 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].x;
    float _188 = clamp(_57.w, 0.0, 1.0);
    float _190 = _59.w;
    float _192 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].y;
    float _194 = fp_c6_1._m0[40].z * fp_c6_1._m0[41].z;
    float _196 = ((1.0 / (_170 + fma(_103, -_170, _103))) * (1.0 / (_170 + fma(max(fma(_95, -fp_c5_1._m0[23].z, _164), fp_c1_1._m0[0].x), -_170, max(fma(_95, -fp_c5_1._m0[23].z, _164), fp_c1_1._m0[0].x))))) * ((_158 * (1.0 / max(fma(_168, _158 * _158, -_168) + 1.0, fp_c1_1._m0[0].x))) * (_158 * (1.0 / max(fma(_168, _158 * _158, -_168) + 1.0, fp_c1_1._m0[0].x))));
    float _198 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].y, fp_c6_1._m0[7].y);
    float _200 = sqrt(fp_c6_1._m0[7].y);
    float _202 = _180 + (-fp_c3_1._m0[11].w);
    float _204 = fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].z, fp_c6_1._m0[7].z);
    float _206 = sqrt(fp_c6_1._m0[7].z);
    float _208 = _174 + (-fp_c3_1._m0[12].w);
    float _210 = sqrt(fp_c6_1._m0[7].x);
    float _212 = _162 + (-fp_c3_1._m0[13].w);
    float _214 = fma(_204, -_194, _204);
    float _216 = fma(_198, -_192, _198);
    float _218 = fma(fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x), -_186, fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x));
    float _220 = fma(_212, _212, fma(_208, _208, _202 * _202));
    float _222 = exp2(log2(clamp(sqrt(_220) * fp_c3_1._m0[15].x, 0.0, 1.0)) * fp_c7_1._m0[54].x) * exp2(fma(fma(_212 * inversesqrt(_220), fp_c5_1._m0[23].z, fma(_208 * inversesqrt(_220), fp_c5_1._m0[23].y, (_202 * inversesqrt(_220)) * fp_c5_1._m0[23].x)), -fp_c7_1._m0[54].y, fp_c7_1._m0[54].y));
    float _224 = clamp(clamp(fma(_123.x, -fp_c7_1._m0[37].x, fp_c7_1._m0[37].x) + fp_c7_1._m0[37].y, 0.0, 1.0) * _190, 0.0, 1.0);
    float _226 = clamp((-_224) + 1.0, 0.0, 1.0);
    float _228 = clamp((-fma(_224, fp_c7_1._m0[37].w, clamp(_190 * clamp(fma(_123.y, -fp_c7_1._m0[36].y, fp_c7_1._m0[36].y) + fp_c7_1._m0[36].x, 0.0, 1.0), 0.0, 1.0))) + 1.0, 0.0, 1.0);
    float _230 = clamp(fma(_228 * _226, fp_c7_1._m0[54].w, (-fp_c7_1._m0[54].w) + 1.0), 0.0, 1.0);
    float _232 = (_190 * (_136.x * _138)) * 32.0;
    float _234 = (_190 * (_136.y * _138)) * 32.0;
    float _236 = (_190 * (_136.z * _138)) * 32.0;
    float _238 = fma(_226, fma(_218, _232, fma(fma(_186, _109, _111), _140.x, fma(_188, fma(_210, -_129, max(0.0, fma(_176, fp_c5_1._m0[31].x, (fma(_95, fp_c5_1._m0[25].z, fma(_89, fp_c5_1._m0[25].y, _87 * fp_c5_1._m0[25].x)) + fp_c5_1._m0[25].w) + fma(_178, fp_c5_1._m0[28].w, fma(_166, fp_c5_1._m0[28].z, fma(_160, fp_c5_1._m0[28].y, _156 * fp_c5_1._m0[28].x))))) * _218), _210 * _129))), _228 * (fma(fma(fp_c6_1._m0[9].x, -fp_c6_1._m0[7].x, fp_c6_1._m0[7].x) * 0.3183098733425140380859375, _188, (_196 * (_186 + fma(_182, -_186, _182))) * 0.079577468335628509521484375) * fma(_184, fp_c5_1._m0[5].x, _232)));
    float _240 = fma(_226, fma(_216, _234, fma(fma(_192, _109, _111), _140.y, fma(_188, fma(_200, -_131, max(0.0, fma(_176, fp_c5_1._m0[31].y, (fma(_95, fp_c5_1._m0[26].z, fma(_89, fp_c5_1._m0[26].y, _87 * fp_c5_1._m0[26].x)) + fp_c5_1._m0[26].w) + fma(_178, fp_c5_1._m0[29].w, fma(_166, fp_c5_1._m0[29].z, fma(_160, fp_c5_1._m0[29].y, _156 * fp_c5_1._m0[29].x))))) * _216), _200 * _131))), _228 * (fma(_198 * 0.3183098733425140380859375, _188, (_196 * (_192 + fma(_182, -_192, _182))) * 0.079577468335628509521484375) * fma(_184, fp_c5_1._m0[5].y, _234)));
    float _242 = fma(_226, fma(_214, _236, fma(fma(_194, _109, _111), _140.z, fma(_188, fma(_206, -_133, max(0.0, fma(_176, fp_c5_1._m0[31].z, (fma(_95, fp_c5_1._m0[27].z, fma(_89, fp_c5_1._m0[27].y, _87 * fp_c5_1._m0[27].x)) + fp_c5_1._m0[27].w) + fma(_178, fp_c5_1._m0[30].w, fma(_166, fp_c5_1._m0[30].z, fma(_160, fp_c5_1._m0[30].y, _156 * fp_c5_1._m0[30].x))))) * _214), _206 * _133))), _228 * (fma(_204 * 0.3183098733425140380859375, _188, (_196 * (_194 + fma(_182, -_194, _182))) * 0.079577468335628509521484375) * fma(_184, fp_c5_1._m0[5].z, _236)));
    float _244 = clamp(fma(fma(_162, fp_c5_1._m0[14].z, fma(_174, fp_c5_1._m0[14].y, _180 * fp_c5_1._m0[14].x)), -fp_c5_1._m0[15].x, fp_c5_1._m0[14].w), 0.0, 1.0) * fp_c5_1._m0[13].w;
    float _246 = fma((-_238) + fp_c5_1._m0[13].x, _244, _238);
    float _248 = fma((-_240) + fp_c5_1._m0[13].y, _244, _240);
    float _250 = fma((-_242) + fp_c5_1._m0[13].z, _244, _242);
    float _252 = clamp((-exp2((clamp(fma(sqrt(_220), fp_c5_1._m0[12].x, fp_c5_1._m0[11].w), 0.0, 1.0) * (-fp_c7_1._m0[53].x)) * 1.44269502162933349609375)) + 1.0, 0.0, 1.0) * fp_c5_1._m0[10].w;
    _62.x = fma((-_246) + fma(fma((_222 * fp_c7_1._m0[55].x) * _230, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].x), fp_c7_1._m0[53].w, fp_c5_1._m0[10].x), _252, _246);
    _62.y = fma((-_248) + fma(fma((_222 * fp_c7_1._m0[55].y) * _230, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].y), fp_c7_1._m0[53].w, fp_c5_1._m0[10].y), _252, _248);
    _62.z = fma((-_250) + fma(fma((_222 * fp_c7_1._m0[55].z) * _230, fp_c7_1._m0[54].z, -fp_c5_1._m0[10].z), fp_c7_1._m0[53].w, fp_c5_1._m0[10].z), _252, _250);
    _62.w = 1.0;
}


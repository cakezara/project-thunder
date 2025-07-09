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

layout(binding = 7, std140) uniform vp_c6
{
    vec4 _m0[4096];
} vp_c6_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(binding = 0) uniform sampler2D vp_tex_tcb_A;

layout(location = 8) in vec4 _38;
layout(location = 6) in vec4 _40;
layout(location = 1) in vec4 _42;
layout(location = 2) in vec4 _44;
layout(location = 4) in vec4 _46;
layout(location = 10) in vec4 _48;
layout(location = 12) in vec4 _50;
layout(location = 0) in vec4 _52;
layout(location = 4) out vec4 _54;
layout(location = 2) out vec4 _56;
layout(location = 0) out vec4 _58;
layout(location = 1) out vec4 _60;
layout(location = 5) out vec4 _62;
layout(location = 6) out vec4 _64;
layout(location = 3) out vec4 _66;
layout(location = 8) out vec4 _68;
layout(location = 9) out vec4 _70;
layout(location = 10) out vec4 _72;
layout(location = 7) out vec4 _74;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _81 = _38.x;
    float _83 = vp_c6_1._m0[20].w * 0.5;
    float _85 = _38.y;
    float _87 = _83 + (-floor(_83));
    float _89 = textureLod(vp_tex_tcb_A, vec2(_87 + _81, _87 + _85), 0.0).x;
    float _91 = _40.y;
    float _93 = _40.x;
    float _95 = _40.z;
    float _97 = _40.w;
    float _99 = _42.x;
    float _101 = _42.y;
    float _103 = _44.z;
    float _105 = _42.z;
    int _108 = ((int(uint(floatBitsToInt(_91)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_91) & 65535) * 48);
    float _110 = _44.w;
    uint _113 = uint(int(uint(_108) >> uint(2)));
    float _115 = vp_c8_1._m0[int(uint(int(_113)) >> uint(2))][int(_113) & 3];
    int _117 = int(_113) + 1;
    float _119 = vp_c8_1._m0[int(uint(_117) >> uint(2))][_117 & 3];
    uint _121 = uint(int(uint(_108 + 16) >> uint(2)));
    float _123 = vp_c8_1._m0[int(uint(int(_121)) >> uint(2))][int(_121) & 3];
    int _125 = int(_121) + 1;
    float _127 = vp_c8_1._m0[int(uint(_125) >> uint(2))][_125 & 3];
    int _129 = ((int(uint(floatBitsToInt(_93)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_93) & 65535) * 48) + 16);
    uint _131 = uint(int(uint(_108 + 32) >> uint(2)));
    float _133 = vp_c8_1._m0[int(uint(int(_131)) >> uint(2))][int(_131) & 3];
    int _135 = int(_131) + 1;
    float _137 = vp_c8_1._m0[int(uint(_135) >> uint(2))][_135 & 3];
    int _139 = ((int(uint(floatBitsToInt(_95)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_95) & 65535) * 48);
    uint _141 = uint(int(uint(_129) >> uint(2)));
    float _143 = vp_c8_1._m0[int(uint(int(_141)) >> uint(2))][int(_141) & 3];
    int _145 = int(_141) + 1;
    float _147 = vp_c8_1._m0[int(uint(_145) >> uint(2))][_145 & 3];
    int _149 = ((int(uint(floatBitsToInt(_97)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_97) & 65535) * 48);
    uint _151 = uint(int(uint(_129 + 16) >> uint(2)));
    float _153 = vp_c8_1._m0[int(uint(int(_151)) >> uint(2))][int(_151) & 3];
    int _155 = int(_151) + 1;
    float _157 = vp_c8_1._m0[int(uint(_155) >> uint(2))][_155 & 3];
    uint _159 = uint(int(uint(_129 + (-16)) >> uint(2)));
    float _161 = vp_c8_1._m0[int(uint(int(_159)) >> uint(2))][int(_159) & 3];
    int _163 = int(_159) + 1;
    float _165 = vp_c8_1._m0[int(uint(_163) >> uint(2))][_163 & 3];
    uint _167 = uint(int(uint(_108 + 24) >> uint(2)));
    float _169 = vp_c8_1._m0[int(uint(int(_167)) >> uint(2))][int(_167) & 3];
    int _171 = int(_167) + 1;
    uint _173 = uint(int(uint(_139) >> uint(2)));
    float _175 = vp_c8_1._m0[int(uint(int(_173)) >> uint(2))][int(_173) & 3];
    int _177 = int(_173) + 1;
    float _179 = vp_c8_1._m0[int(uint(_177) >> uint(2))][_177 & 3];
    uint _181 = uint(int(uint(_139 + 16) >> uint(2)));
    float _183 = vp_c8_1._m0[int(uint(int(_181)) >> uint(2))][int(_181) & 3];
    int _185 = int(_181) + 1;
    float _187 = vp_c8_1._m0[int(uint(_185) >> uint(2))][_185 & 3];
    uint _189 = uint(int(uint(_139 + 32) >> uint(2)));
    float _191 = vp_c8_1._m0[int(uint(int(_189)) >> uint(2))][int(_189) & 3];
    int _193 = int(_189) + 1;
    float _195 = vp_c8_1._m0[int(uint(_193) >> uint(2))][_193 & 3];
    uint _197 = uint(int(uint(_149) >> uint(2)));
    float _199 = vp_c8_1._m0[int(uint(int(_197)) >> uint(2))][int(_197) & 3];
    int _201 = int(_197) + 1;
    float _203 = vp_c8_1._m0[int(uint(_201) >> uint(2))][_201 & 3];
    uint _205 = uint(int(uint(_149 + 16) >> uint(2)));
    float _207 = vp_c8_1._m0[int(uint(int(_205)) >> uint(2))][int(_205) & 3];
    int _209 = int(_205) + 1;
    float _211 = vp_c8_1._m0[int(uint(_209) >> uint(2))][_209 & 3];
    uint _213 = uint(int(uint(_149 + 32) >> uint(2)));
    float _215 = vp_c8_1._m0[int(uint(int(_213)) >> uint(2))][int(_213) & 3];
    int _217 = int(_213) + 1;
    float _219 = vp_c8_1._m0[int(uint(_217) >> uint(2))][_217 & 3];
    uint _221 = uint(int(uint(_129 + 8) >> uint(2)));
    float _223 = vp_c8_1._m0[int(uint(int(_221)) >> uint(2))][int(_221) & 3];
    int _225 = int(_221) + 1;
    uint _227 = uint(int(uint(_108 + 8) >> uint(2)));
    float _229 = vp_c8_1._m0[int(uint(int(_227)) >> uint(2))][int(_227) & 3];
    int _231 = int(_227) + 1;
    uint _233 = uint(int(uint(_129 + (-8)) >> uint(2)));
    float _235 = vp_c8_1._m0[int(uint(int(_233)) >> uint(2))][int(_233) & 3];
    int _237 = int(_233) + 1;
    uint _239 = uint(int(uint(_108 + 40) >> uint(2)));
    float _241 = vp_c8_1._m0[int(uint(int(_239)) >> uint(2))][int(_239) & 3];
    int _243 = int(_239) + 1;
    uint _245 = uint(int(uint(_129 + 24) >> uint(2)));
    float _247 = vp_c8_1._m0[int(uint(int(_245)) >> uint(2))][int(_245) & 3];
    int _249 = int(_245) + 1;
    uint _251 = uint(int(uint(_139 + 8) >> uint(2)));
    float _253 = vp_c8_1._m0[int(uint(int(_251)) >> uint(2))][int(_251) & 3];
    int _255 = int(_251) + 1;
    float _257 = _46.y;
    uint _259 = uint(int(uint(_139 + 24) >> uint(2)));
    float _261 = vp_c8_1._m0[int(uint(int(_259)) >> uint(2))][int(_259) & 3];
    int _263 = int(_259) + 1;
    float _265 = _46.x;
    float _267 = _110 * _44.x;
    float _269 = _110 * _44.y;
    uint _271 = uint(int(uint(_149 + 8) >> uint(2)));
    float _273 = vp_c8_1._m0[int(uint(int(_271)) >> uint(2))][int(_271) & 3];
    int _275 = int(_271) + 1;
    uint _277 = uint(int(uint(_149 + 24) >> uint(2)));
    float _279 = vp_c8_1._m0[int(uint(int(_277)) >> uint(2))][int(_277) & 3];
    int _281 = int(_277) + 1;
    uint _283 = uint(int(uint(_139 + 40) >> uint(2)));
    float _285 = vp_c8_1._m0[int(uint(int(_283)) >> uint(2))][int(_283) & 3];
    int _287 = int(_283) + 1;
    uint _289 = uint(int(uint(_149 + 40) >> uint(2)));
    float _291 = vp_c8_1._m0[int(uint(int(_289)) >> uint(2))][int(_289) & 3];
    int _293 = int(_289) + 1;
    float _295 = _46.z;
    float _297 = _46.w;
    float _299 = fma(fma(_273, _105, fma(_203, _101, _199 * _99)), _297, fma(fma(_253, _105, fma(_179, _101, _175 * _99)), _295, fma(fma(_235, _105, fma(_165, _101, _161 * _99)), _265, fma(_229, _105, fma(_119, _101, _115 * _99)) * _257)));
    float _301 = fma(fma(_273, _103, fma(_203, _269, _199 * _267)), _297, fma(fma(_253, _103, fma(_179, _269, _175 * _267)), _295, fma(fma(_235, _103, fma(_165, _269, _161 * _267)), _265, fma(_229, _103, fma(_119, _269, _115 * _267)) * _257)));
    float _303 = _48.y;
    float _305 = fma(fma(_279, _103, fma(_211, _269, _207 * _267)), _297, fma(fma(_261, _103, fma(_187, _269, _183 * _267)), _295, fma(fma(_223, _103, fma(_147, _269, _143 * _267)), _265, fma(_169, _103, fma(_127, _269, _123 * _267)) * _257)));
    float _307 = _50.x;
    float _309 = fma(fma(_279, _105, fma(_211, _101, _207 * _99)), _297, fma(fma(_261, _105, fma(_187, _101, _183 * _99)), _295, fma(fma(_223, _105, fma(_147, _101, _143 * _99)), _265, fma(_169, _105, fma(_127, _101, _123 * _99)) * _257)));
    float _311 = fma(fma(_291, _103, fma(_219, _269, _215 * _267)), _297, fma(fma(_285, _103, fma(_195, _269, _191 * _267)), _295, fma(fma(_247, _103, fma(_157, _269, _153 * _267)), _265, fma(_241, _103, fma(_137, _269, _133 * _267)) * _257)));
    float _313 = fma(fma(_291, _105, fma(_219, _101, _215 * _99)), _297, fma(fma(_285, _105, fma(_195, _101, _191 * _99)), _295, fma(fma(_247, _105, fma(_157, _101, _153 * _99)), _265, fma(_241, _105, fma(_137, _101, _133 * _99)) * _257)));
    float _315 = inversesqrt(fma(_311, _311, fma(_305, _305, _301 * _301)));
    float _317 = inversesqrt(fma(_313, _313, fma(_309, _309, _299 * _299)));
    float _319 = _48.x;
    float _321 = _313 * _317;
    float _323 = _299 * _317;
    _54.y = _305 * _315;
    float _325 = _309 * _317;
    _54.x = _301 * _315;
    _54.z = _311 * _315;
    _56.x = _323;
    _56.y = _325;
    _56.z = _321;
    float _327 = fma(fma(_321, vp_c3_1._m0[1].z, fma(_325, vp_c3_1._m0[1].y, _323 * vp_c3_1._m0[1].x)), -0.5, 0.5);
    float _329 = fma(fma(_321, vp_c3_1._m0[0].z, fma(_325, vp_c3_1._m0[0].y, _323 * vp_c3_1._m0[0].x)), 0.5, 0.5);
    _58.z = fma(_319, vp_c5_1._m0[113].x, _303 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _58.w = fma(_319, vp_c5_1._m0[113].y, _303 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
    _60.x = fma(_329, vp_c5_1._m0[115].x, _327 * vp_c5_1._m0[115].z) + vp_c5_1._m0[116].x;
    _60.y = fma(_329, vp_c5_1._m0[115].y, _327 * vp_c5_1._m0[115].w) + vp_c5_1._m0[116].y;
    float _331 = (fma(_89 * vp_c5_1._m0[85].y, vp_c5_1._m0[91].y, _89 * vp_c5_1._m0[85].y) + fma((_89 * _89) * vp_c5_1._m0[85].x, vp_c5_1._m0[91].x, (_89 * _89) * vp_c5_1._m0[85].x)) + vp_c5_1._m0[91].z;
    float _333 = fma(vp_c5_1._m0[85].w + 0.20000000298023223876953125, vp_c6_1._m0[20].w, _81);
    float _335 = fma(_331, fma(_99, -_307, _99), _52.x);
    float _337 = fma(_331, fma(_307, -_101, _101), _52.y);
    float _339 = fma(_331, fma(_307, -_105, _105), _52.z);
    float _341 = fma(vp_c8_1._m0[int(uint(_275) >> uint(2))][_275 & 3] + fma(_339, _273, fma(_337, _203, _335 * _199)), _297, fma(vp_c8_1._m0[int(uint(_255) >> uint(2))][_255 & 3] + fma(_339, _253, fma(_337, _179, _335 * _175)), _295, fma(vp_c8_1._m0[int(uint(_237) >> uint(2))][_237 & 3] + fma(_339, _235, fma(_337, _165, _335 * _161)), _265, (vp_c8_1._m0[int(uint(_231) >> uint(2))][_231 & 3] + fma(_339, _229, fma(_337, _119, _335 * _115))) * _257)));
    _62.x = _341;
    float _343 = fma(vp_c8_1._m0[int(uint(_281) >> uint(2))][_281 & 3] + fma(_339, _279, fma(_337, _211, _335 * _207)), _297, fma(vp_c8_1._m0[int(uint(_263) >> uint(2))][_263 & 3] + fma(_339, _261, fma(_337, _187, _335 * _183)), _295, fma(vp_c8_1._m0[int(uint(_225) >> uint(2))][_225 & 3] + fma(_339, _223, fma(_337, _147, _335 * _143)), _265, (vp_c8_1._m0[int(uint(_171) >> uint(2))][_171 & 3] + fma(_339, _169, fma(_337, _127, _335 * _123))) * _257)));
    _62.y = _343;
    _64.x = _341 + (-vp_c3_1._m0[11].w);
    float _345 = fma(vp_c8_1._m0[int(uint(_293) >> uint(2))][_293 & 3] + fma(_339, _291, fma(_337, _219, _335 * _215)), _297, fma(vp_c8_1._m0[int(uint(_287) >> uint(2))][_287 & 3] + fma(_339, _285, fma(_337, _195, _335 * _191)), _295, fma(vp_c8_1._m0[int(uint(_249) >> uint(2))][_249 & 3] + fma(_339, _247, fma(_337, _157, _335 * _153)), _265, (vp_c8_1._m0[int(uint(_243) >> uint(2))][_243 & 3] + fma(_339, _241, fma(_337, _137, _335 * _133))) * _257)));
    _62.z = _345;
    _64.y = _343 + (-vp_c3_1._m0[12].w);
    _66.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    _64.z = _345 + (-vp_c3_1._m0[13].w);
    _68.w = fma(_345, vp_c3_1._m0[63].z, fma(_343, vp_c3_1._m0[63].y, _341 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _68.z = fma(_345, vp_c3_1._m0[62].z, fma(_343, vp_c3_1._m0[62].y, _341 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _68.y = fma(_345, vp_c3_1._m0[61].z, fma(_343, vp_c3_1._m0[61].y, _341 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    _70.z = fma(_345, vp_c3_1._m0[44].z, fma(_343, vp_c3_1._m0[44].y, _341 * vp_c3_1._m0[44].x)) + vp_c3_1._m0[44].w;
    _70.w = fma(_345, vp_c3_1._m0[45].z, fma(_343, vp_c3_1._m0[45].y, _341 * vp_c3_1._m0[45].x)) + vp_c3_1._m0[45].w;
    _68.x = fma(_345, vp_c3_1._m0[60].z, fma(_343, vp_c3_1._m0[60].y, _341 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    _72.y = fma(_345, vp_c3_1._m0[47].z, fma(_343, vp_c3_1._m0[47].y, _341 * vp_c3_1._m0[47].x)) + vp_c3_1._m0[47].w;
    _72.w = fma(_345, vp_c3_1._m0[49].z, fma(_343, vp_c3_1._m0[49].y, _341 * vp_c3_1._m0[49].x)) + vp_c3_1._m0[49].w;
    _72.z = fma(_345, vp_c3_1._m0[48].z, fma(_343, vp_c3_1._m0[48].y, _341 * vp_c3_1._m0[48].x)) + vp_c3_1._m0[48].w;
    float _347 = fma(_345, vp_c3_1._m0[0].z, fma(_343, vp_c3_1._m0[0].y, _341 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _74.x = fma(_345, vp_c3_1._m0[35].z, fma(_343, vp_c3_1._m0[35].y, _341 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _349 = fma(_345, vp_c3_1._m0[1].z, fma(_343, vp_c3_1._m0[1].y, _341 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _351 = fma(_345, vp_c3_1._m0[2].z, fma(_343, vp_c3_1._m0[2].y, _341 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _62.w = _351;
    _58.x = fma(_333, vp_c5_1._m0[111].x, _85 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _58.y = fma(_333, vp_c5_1._m0[111].y, _85 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _70.y = fma(_345, vp_c3_1._m0[43].z, fma(_343, vp_c3_1._m0[43].y, _341 * vp_c3_1._m0[43].x)) + vp_c3_1._m0[43].w;
    _70.x = fma(_345, vp_c3_1._m0[42].z, fma(_343, vp_c3_1._m0[42].y, _341 * vp_c3_1._m0[42].x)) + vp_c3_1._m0[42].w;
    _72.x = fma(_345, vp_c3_1._m0[46].z, fma(_343, vp_c3_1._m0[46].y, _341 * vp_c3_1._m0[46].x)) + vp_c3_1._m0[46].w;
    _74.z = fma(_345, vp_c3_1._m0[37].z, fma(_343, vp_c3_1._m0[37].y, _341 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _74.y = fma(_345, vp_c3_1._m0[36].z, fma(_343, vp_c3_1._m0[36].y, _341 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    gl_Position.y = fma(_351, vp_c3_1._m0[8].z, fma(_349, vp_c3_1._m0[8].y, _347 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.w = fma(_351, vp_c3_1._m0[10].z, fma(_349, vp_c3_1._m0[10].y, _347 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_351, vp_c3_1._m0[9].z, fma(_349, vp_c3_1._m0[9].y, _347 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_351, vp_c3_1._m0[7].z, fma(_349, vp_c3_1._m0[7].y, _347 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


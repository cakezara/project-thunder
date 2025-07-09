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

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(binding = 0) uniform sampler2D vp_tex_tcb_A;

layout(location = 8) in vec4 _38;
layout(location = 6) in vec4 _40;
layout(location = 2) in vec4 _42;
layout(location = 1) in vec4 _44;
layout(location = 4) in vec4 _46;
layout(location = 10) in vec4 _48;
layout(location = 12) in vec4 _50;
layout(location = 0) in vec4 _52;
layout(location = 0) out vec4 _54;
layout(location = 3) out vec4 _56;
layout(location = 4) out vec4 _58;
layout(location = 2) out vec4 _60;
layout(location = 1) out vec4 _62;
layout(location = 5) out vec4 _64;
layout(location = 6) out vec4 _66;
layout(location = 8) out vec4 _68;
layout(location = 7) out vec4 _70;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _77 = _38.x;
    float _79 = vp_c6_1._m0[20].w * 0.5;
    float _81 = _38.y;
    float _83 = _79 + (-floor(_79));
    float _85 = textureLod(vp_tex_tcb_A, vec2(_83 + _77, _83 + _81), 0.0).x;
    float _87 = _40.y;
    float _89 = _40.x;
    float _91 = _40.z;
    float _93 = _40.w;
    float _95 = _42.w;
    float _97 = _44.x;
    int _100 = ((int(uint(floatBitsToInt(_87)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_87) & 65535) * 48);
    float _102 = _44.y;
    uint _105 = uint(int(uint(_100 + 16) >> uint(2)));
    float _107 = vp_c8_1._m0[int(uint(int(_105)) >> uint(2))][int(_105) & 3];
    int _109 = int(_105) + 1;
    float _111 = vp_c8_1._m0[int(uint(_109) >> uint(2))][_109 & 3];
    int _113 = ((int(uint(floatBitsToInt(_89)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_89) & 65535) * 48) + 16);
    uint _115 = uint(int(uint(_100 + 32) >> uint(2)));
    float _117 = vp_c8_1._m0[int(uint(int(_115)) >> uint(2))][int(_115) & 3];
    int _119 = int(_115) + 1;
    float _121 = vp_c8_1._m0[int(uint(_119) >> uint(2))][_119 & 3];
    uint _123 = uint(int(uint(_100 + 24) >> uint(2)));
    float _125 = vp_c8_1._m0[int(uint(int(_123)) >> uint(2))][int(_123) & 3];
    int _127 = int(_123) + 1;
    int _129 = ((int(uint(floatBitsToInt(_91)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_91) & 65535) * 48);
    uint _131 = uint(int(uint(_113) >> uint(2)));
    float _133 = vp_c8_1._m0[int(uint(int(_131)) >> uint(2))][int(_131) & 3];
    int _135 = int(_131) + 1;
    float _137 = vp_c8_1._m0[int(uint(_135) >> uint(2))][_135 & 3];
    int _139 = ((int(uint(floatBitsToInt(_93)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_93) & 65535) * 48);
    uint _141 = uint(int(uint(_113 + 16) >> uint(2)));
    float _143 = vp_c8_1._m0[int(uint(int(_141)) >> uint(2))][int(_141) & 3];
    int _145 = int(_141) + 1;
    float _147 = vp_c8_1._m0[int(uint(_145) >> uint(2))][_145 & 3];
    float _149 = _95 * _42.x;
    uint _151 = uint(int(uint(_100 + 40) >> uint(2)));
    float _153 = vp_c8_1._m0[int(uint(int(_151)) >> uint(2))][int(_151) & 3];
    int _155 = int(_151) + 1;
    float _157 = _95 * _42.y;
    uint _159 = uint(int(uint(_129) >> uint(2)));
    float _161 = vp_c8_1._m0[int(uint(int(_159)) >> uint(2))][int(_159) & 3];
    int _163 = int(_159) + 1;
    float _165 = vp_c8_1._m0[int(uint(_163) >> uint(2))][_163 & 3];
    uint _167 = uint(int(uint(_100) >> uint(2)));
    float _169 = vp_c8_1._m0[int(uint(int(_167)) >> uint(2))][int(_167) & 3];
    int _171 = int(_167) + 1;
    float _173 = vp_c8_1._m0[int(uint(_171) >> uint(2))][_171 & 3];
    uint _175 = uint(int(uint(_113 + 8) >> uint(2)));
    float _177 = vp_c8_1._m0[int(uint(int(_175)) >> uint(2))][int(_175) & 3];
    int _179 = int(_175) + 1;
    uint _181 = uint(int(uint(_113 + (-16)) >> uint(2)));
    float _183 = vp_c8_1._m0[int(uint(int(_181)) >> uint(2))][int(_181) & 3];
    int _185 = int(_181) + 1;
    float _187 = vp_c8_1._m0[int(uint(_185) >> uint(2))][_185 & 3];
    uint _189 = uint(int(uint(_129 + 16) >> uint(2)));
    float _191 = vp_c8_1._m0[int(uint(int(_189)) >> uint(2))][int(_189) & 3];
    int _193 = int(_189) + 1;
    float _195 = vp_c8_1._m0[int(uint(_193) >> uint(2))][_193 & 3];
    uint _197 = uint(int(uint(_129 + 32) >> uint(2)));
    float _199 = vp_c8_1._m0[int(uint(int(_197)) >> uint(2))][int(_197) & 3];
    int _201 = int(_197) + 1;
    float _203 = vp_c8_1._m0[int(uint(_201) >> uint(2))][_201 & 3];
    uint _205 = uint(int(uint(_139) >> uint(2)));
    float _207 = vp_c8_1._m0[int(uint(int(_205)) >> uint(2))][int(_205) & 3];
    int _209 = int(_205) + 1;
    float _211 = vp_c8_1._m0[int(uint(_209) >> uint(2))][_209 & 3];
    uint _213 = uint(int(uint(_139 + 16) >> uint(2)));
    float _215 = vp_c8_1._m0[int(uint(int(_213)) >> uint(2))][int(_213) & 3];
    int _217 = int(_213) + 1;
    float _219 = vp_c8_1._m0[int(uint(_217) >> uint(2))][_217 & 3];
    uint _221 = uint(int(uint(_139 + 32) >> uint(2)));
    float _223 = vp_c8_1._m0[int(uint(int(_221)) >> uint(2))][int(_221) & 3];
    int _225 = int(_221) + 1;
    float _227 = vp_c8_1._m0[int(uint(_225) >> uint(2))][_225 & 3];
    uint _229 = uint(int(uint(_113 + 24) >> uint(2)));
    float _231 = vp_c8_1._m0[int(uint(int(_229)) >> uint(2))][int(_229) & 3];
    int _233 = int(_229) + 1;
    uint _235 = uint(int(uint(_100 + 8) >> uint(2)));
    float _237 = vp_c8_1._m0[int(uint(int(_235)) >> uint(2))][int(_235) & 3];
    int _239 = int(_235) + 1;
    uint _241 = uint(int(uint(_113 + (-8)) >> uint(2)));
    float _243 = vp_c8_1._m0[int(uint(int(_241)) >> uint(2))][int(_241) & 3];
    int _245 = int(_241) + 1;
    float _247 = _42.z;
    float _249 = _44.z;
    uint _251 = uint(int(uint(_129 + 8) >> uint(2)));
    float _253 = vp_c8_1._m0[int(uint(int(_251)) >> uint(2))][int(_251) & 3];
    int _255 = int(_251) + 1;
    float _257 = _46.y;
    float _259 = _46.x;
    uint _261 = uint(int(uint(_129 + 24) >> uint(2)));
    float _263 = vp_c8_1._m0[int(uint(int(_261)) >> uint(2))][int(_261) & 3];
    int _265 = int(_261) + 1;
    uint _267 = uint(int(uint(_139 + 8) >> uint(2)));
    float _269 = vp_c8_1._m0[int(uint(int(_267)) >> uint(2))][int(_267) & 3];
    int _271 = int(_267) + 1;
    uint _273 = uint(int(uint(_129 + 40) >> uint(2)));
    float _275 = vp_c8_1._m0[int(uint(int(_273)) >> uint(2))][int(_273) & 3];
    int _277 = int(_273) + 1;
    uint _279 = uint(int(uint(_139 + 24) >> uint(2)));
    float _281 = vp_c8_1._m0[int(uint(int(_279)) >> uint(2))][int(_279) & 3];
    int _283 = int(_279) + 1;
    uint _285 = uint(int(uint(_139 + 40) >> uint(2)));
    float _287 = vp_c8_1._m0[int(uint(int(_285)) >> uint(2))][int(_285) & 3];
    int _289 = int(_285) + 1;
    float _291 = _46.z;
    float _293 = _46.w;
    float _295 = _48.y;
    float _297 = _48.x;
    float _299 = fma(fma(_269, _249, fma(_211, _102, _207 * _97)), _293, fma(fma(_253, _249, fma(_165, _102, _161 * _97)), _291, fma(fma(_243, _249, fma(_187, _102, _183 * _97)), _259, fma(_237, _249, fma(_173, _102, _169 * _97)) * _257)));
    float _301 = _50.x;
    float _303 = fma(fma(_281, _249, fma(_219, _102, _215 * _97)), _293, fma(fma(_263, _249, fma(_195, _102, _191 * _97)), _291, fma(fma(_177, _249, fma(_137, _102, _133 * _97)), _259, fma(_125, _249, fma(_111, _102, _107 * _97)) * _257)));
    float _305 = fma(fma(_269, _247, fma(_211, _157, _207 * _149)), _293, fma(fma(_253, _247, fma(_165, _157, _161 * _149)), _291, fma(fma(_243, _247, fma(_187, _157, _183 * _149)), _259, fma(_237, _247, fma(_173, _157, _169 * _149)) * _257)));
    float _307 = fma(fma(_287, _249, fma(_227, _102, _223 * _97)), _293, fma(fma(_275, _249, fma(_203, _102, _199 * _97)), _291, fma(fma(_231, _249, fma(_147, _102, _143 * _97)), _259, fma(_153, _249, fma(_121, _102, _117 * _97)) * _257)));
    float _309 = fma(fma(_281, _247, fma(_219, _157, _215 * _149)), _293, fma(fma(_263, _247, fma(_195, _157, _191 * _149)), _291, fma(fma(_177, _247, fma(_137, _157, _133 * _149)), _259, fma(_125, _247, fma(_111, _157, _107 * _149)) * _257)));
    float _311 = fma(fma(_287, _247, fma(_227, _157, _223 * _149)), _293, fma(fma(_275, _247, fma(_203, _157, _199 * _149)), _291, fma(fma(_231, _247, fma(_147, _157, _143 * _149)), _259, fma(_153, _247, fma(_121, _157, _117 * _149)) * _257)));
    float _313 = fma(vp_c5_1._m0[85].w + 0.20000000298023223876953125, vp_c6_1._m0[20].w, _77);
    _54.z = fma(_297, vp_c5_1._m0[113].x, _295 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    float _315 = inversesqrt(fma(_311, _311, fma(_309, _309, _305 * _305)));
    float _317 = inversesqrt(fma(_307, _307, fma(_303, _303, _299 * _299)));
    _54.w = fma(_297, vp_c5_1._m0[113].y, _295 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
    _56.y = _50.y;
    _54.x = fma(_313, vp_c5_1._m0[111].x, _81 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    float _319 = _299 * _317;
    _58.y = _309 * _315;
    float _321 = _303 * _317;
    _60.x = _319;
    float _323 = _307 * _317;
    _60.y = _321;
    _60.z = _323;
    _56.z = _50.z;
    _58.z = _311 * _315;
    _54.y = fma(_313, vp_c5_1._m0[111].y, _81 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    _58.x = _305 * _315;
    float _325 = fma(fma(_323, vp_c3_1._m0[1].z, fma(_321, vp_c3_1._m0[1].y, _319 * vp_c3_1._m0[1].x)), -0.5, 0.5);
    float _327 = fma(fma(_323, vp_c3_1._m0[0].z, fma(_321, vp_c3_1._m0[0].y, _319 * vp_c3_1._m0[0].x)), 0.5, 0.5);
    _62.x = fma(_327, vp_c5_1._m0[115].x, _325 * vp_c5_1._m0[115].z) + vp_c5_1._m0[116].x;
    _62.y = fma(_327, vp_c5_1._m0[115].y, _325 * vp_c5_1._m0[115].w) + vp_c5_1._m0[116].y;
    float _329 = (fma(_85 * vp_c5_1._m0[85].y, vp_c5_1._m0[91].y, _85 * vp_c5_1._m0[85].y) + fma((_85 * _85) * vp_c5_1._m0[85].x, vp_c5_1._m0[91].x, (_85 * _85) * vp_c5_1._m0[85].x)) + vp_c5_1._m0[91].z;
    float _331 = fma(_329, fma(_97, -_301, _97), _52.x);
    float _333 = fma(_329, fma(_301, -_102, _102), _52.y);
    float _335 = fma(_329, fma(_301, -_249, _249), _52.z);
    float _337 = fma(vp_c8_1._m0[int(uint(_271) >> uint(2))][_271 & 3] + fma(_335, _269, fma(_333, _211, _331 * _207)), _293, fma(vp_c8_1._m0[int(uint(_255) >> uint(2))][_255 & 3] + fma(_335, _253, fma(_333, _165, _331 * _161)), _291, fma(vp_c8_1._m0[int(uint(_245) >> uint(2))][_245 & 3] + fma(_335, _243, fma(_333, _187, _331 * _183)), _259, (vp_c8_1._m0[int(uint(_239) >> uint(2))][_239 & 3] + fma(_335, _237, fma(_333, _173, _331 * _169))) * _257)));
    _64.x = _337;
    float _339 = fma(vp_c8_1._m0[int(uint(_283) >> uint(2))][_283 & 3] + fma(_335, _281, fma(_333, _219, _331 * _215)), _293, fma(vp_c8_1._m0[int(uint(_265) >> uint(2))][_265 & 3] + fma(_335, _263, fma(_333, _195, _331 * _191)), _291, fma(vp_c8_1._m0[int(uint(_179) >> uint(2))][_179 & 3] + fma(_335, _177, fma(_333, _137, _331 * _133)), _259, (vp_c8_1._m0[int(uint(_127) >> uint(2))][_127 & 3] + fma(_335, _125, fma(_333, _111, _331 * _107))) * _257)));
    _64.y = _339;
    _66.x = _337 + (-vp_c3_1._m0[11].w);
    float _341 = fma(vp_c8_1._m0[int(uint(_289) >> uint(2))][_289 & 3] + fma(_335, _287, fma(_333, _227, _331 * _223)), _293, fma(vp_c8_1._m0[int(uint(_277) >> uint(2))][_277 & 3] + fma(_335, _275, fma(_333, _203, _331 * _199)), _291, fma(vp_c8_1._m0[int(uint(_233) >> uint(2))][_233 & 3] + fma(_335, _231, fma(_333, _147, _331 * _143)), _259, (vp_c8_1._m0[int(uint(_155) >> uint(2))][_155 & 3] + fma(_335, _153, fma(_333, _121, _331 * _117))) * _257)));
    _64.z = _341;
    _56.w = clamp((-0.0) + vp_c5_1._m0[0].x, 0.0, 1.0);
    float _343 = fma(_341, vp_c3_1._m0[0].z, fma(_339, vp_c3_1._m0[0].y, _337 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _66.z = _341 + (-vp_c3_1._m0[13].w);
    float _345 = fma(_341, vp_c3_1._m0[1].z, fma(_339, vp_c3_1._m0[1].y, _337 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _66.y = _339 + (-vp_c3_1._m0[12].w);
    float _347 = fma(_341, vp_c3_1._m0[2].z, fma(_339, vp_c3_1._m0[2].y, _337 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _68.w = fma(_341, vp_c3_1._m0[63].z, fma(_339, vp_c3_1._m0[63].y, _337 * vp_c3_1._m0[63].x)) + vp_c3_1._m0[63].w;
    _68.z = fma(_341, vp_c3_1._m0[62].z, fma(_339, vp_c3_1._m0[62].y, _337 * vp_c3_1._m0[62].x)) + vp_c3_1._m0[62].w;
    _68.y = fma(_341, vp_c3_1._m0[61].z, fma(_339, vp_c3_1._m0[61].y, _337 * vp_c3_1._m0[61].x)) + vp_c3_1._m0[61].w;
    _68.x = fma(_341, vp_c3_1._m0[60].z, fma(_339, vp_c3_1._m0[60].y, _337 * vp_c3_1._m0[60].x)) + vp_c3_1._m0[60].w;
    _70.x = fma(_341, vp_c3_1._m0[35].z, fma(_339, vp_c3_1._m0[35].y, _337 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    _70.z = fma(_341, vp_c3_1._m0[37].z, fma(_339, vp_c3_1._m0[37].y, _337 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _70.y = fma(_341, vp_c3_1._m0[36].z, fma(_339, vp_c3_1._m0[36].y, _337 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    gl_Position.y = fma(_347, vp_c3_1._m0[8].z, fma(_345, vp_c3_1._m0[8].y, _343 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.w = fma(_347, vp_c3_1._m0[10].z, fma(_345, vp_c3_1._m0[10].y, _343 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    gl_Position.z = fma(_347, vp_c3_1._m0[9].z, fma(_345, vp_c3_1._m0[9].y, _343 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    gl_Position.x = fma(_347, vp_c3_1._m0[7].z, fma(_345, vp_c3_1._m0[7].y, _343 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
}


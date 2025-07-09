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
layout(location = 1) in vec4 _42;
layout(location = 12) in vec4 _44;
layout(location = 10) in vec4 _46;
layout(location = 0) in vec4 _48;
layout(location = 4) in vec4 _50;
layout(location = 0) out vec4 _52;
layout(location = 2) out vec4 _54;
layout(location = 4) out vec4 _56;
layout(location = 3) out vec4 _58;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _65 = vp_c6_1._m0[20].w * 0.5;
    float _67 = _65 + (-floor(_65));
    float _69 = textureLod(vp_tex_tcb_A, vec2(_67 + _38.x, _67 + _38.y), 0.0).x;
    float _71 = _40.y;
    float _73 = _40.x;
    float _75 = _40.z;
    float _77 = _40.w;
    float _79 = _42.x;
    float _81 = _44.x;
    float _83 = _42.y;
    float _85 = _42.z;
    int _88 = ((int(uint(floatBitsToInt(_71)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_71) & 65535) * 48);
    float _90 = _46.y;
    uint _93 = uint(int(uint(_88) >> uint(2)));
    int _95 = int(_93) + 1;
    uint _97 = uint(int(uint(_88 + 16) >> uint(2)));
    int _99 = int(_97) + 1;
    int _101 = ((int(uint(floatBitsToInt(_73)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_73) & 65535) * 48);
    int _103 = ((int(uint(floatBitsToInt(_75)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_75) & 65535) * 48) + 16);
    uint _105 = uint(int(uint(_101) >> uint(2)));
    int _107 = int(_105) + 1;
    int _109 = ((int(uint(floatBitsToInt(_77)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_77) & 65535) * 48);
    uint _111 = uint(int(uint(_101 + 16) >> uint(2)));
    int _113 = int(_111) + 1;
    uint _115 = uint(int(uint(_88 + 32) >> uint(2)));
    int _117 = int(_115) + 1;
    uint _119 = uint(int(uint(_101 + 32) >> uint(2)));
    int _121 = int(_119) + 1;
    uint _123 = uint(int(uint(_103 + (-16)) >> uint(2)));
    int _125 = int(_123) + 1;
    uint _127 = uint(int(uint(_103) >> uint(2)));
    int _129 = int(_127) + 1;
    uint _131 = uint(int(uint(_103 + 16) >> uint(2)));
    int _133 = int(_131) + 1;
    uint _135 = uint(int(uint(_109) >> uint(2)));
    int _137 = int(_135) + 1;
    uint _139 = uint(int(uint(_109 + 32) >> uint(2)));
    int _141 = int(_139) + 1;
    uint _143 = uint(int(uint(_109 + 16) >> uint(2)));
    int _145 = int(_143) + 1;
    uint _147 = uint(int(uint(_88 + 24) >> uint(2)));
    int _149 = int(_147) + 1;
    uint _151 = uint(int(uint(_101 + 8) >> uint(2)));
    int _153 = int(_151) + 1;
    float _155 = _46.x;
    uint _157 = uint(int(uint(_88 + 40) >> uint(2)));
    int _159 = int(_157) + 1;
    uint _161 = uint(int(uint(_101 + 24) >> uint(2)));
    int _163 = int(_161) + 1;
    uint _165 = uint(int(uint(_103 + (-8)) >> uint(2)));
    int _167 = int(_165) + 1;
    uint _169 = uint(int(uint(_101 + 40) >> uint(2)));
    int _171 = int(_169) + 1;
    uint _173 = uint(int(uint(_103 + 8) >> uint(2)));
    int _175 = int(_173) + 1;
    uint _177 = uint(int(uint(_109 + 8) >> uint(2)));
    int _179 = int(_177) + 1;
    uint _181 = uint(int(uint(_103 + 24) >> uint(2)));
    int _183 = int(_181) + 1;
    uint _185 = uint(int(uint(_109 + 24) >> uint(2)));
    int _187 = int(_185) + 1;
    uint _189 = uint(int(uint(_109 + 40) >> uint(2)));
    int _191 = int(_189) + 1;
    uint _193 = uint(int(uint(_88 + 8) >> uint(2)));
    int _195 = int(_193) + 1;
    float _197 = (fma(_69 * vp_c5_1._m0[85].y, vp_c5_1._m0[91].y, _69 * vp_c5_1._m0[85].y) + fma((_69 * _69) * vp_c5_1._m0[85].x, vp_c5_1._m0[91].x, (_69 * _69) * vp_c5_1._m0[85].x)) + vp_c5_1._m0[91].z;
    float _199 = fma(_197, fma(_79, _81, -_79), _48.x);
    float _201 = fma(_197, fma(_81, _83, -_83), _48.y);
    float _203 = fma(_197, fma(_81, _85, -_85), _48.z);
    float _205 = _50.y;
    float _207 = _50.x;
    float _209 = _50.z;
    float _211 = _50.w;
    _52.z = fma(_155, vp_c5_1._m0[113].x, _90 * vp_c5_1._m0[113].z) + vp_c5_1._m0[114].x;
    _52.w = fma(_155, vp_c5_1._m0[113].y, _90 * vp_c5_1._m0[113].w) + vp_c5_1._m0[114].y;
    float _213 = fma(vp_c8_1._m0[int(uint(_179) >> uint(2))][_179 & 3] + fma(_203, vp_c8_1._m0[int(uint(int(_177)) >> uint(2))][int(_177) & 3], fma(_201, vp_c8_1._m0[int(uint(_137) >> uint(2))][_137 & 3], _199 * vp_c8_1._m0[int(uint(int(_135)) >> uint(2))][int(_135) & 3])), _211, fma(vp_c8_1._m0[int(uint(_167) >> uint(2))][_167 & 3] + fma(_203, vp_c8_1._m0[int(uint(int(_165)) >> uint(2))][int(_165) & 3], fma(_201, vp_c8_1._m0[int(uint(_125) >> uint(2))][_125 & 3], _199 * vp_c8_1._m0[int(uint(int(_123)) >> uint(2))][int(_123) & 3])), _209, fma(vp_c8_1._m0[int(uint(_153) >> uint(2))][_153 & 3] + fma(_203, vp_c8_1._m0[int(uint(int(_151)) >> uint(2))][int(_151) & 3], fma(_201, vp_c8_1._m0[int(uint(_107) >> uint(2))][_107 & 3], _199 * vp_c8_1._m0[int(uint(int(_105)) >> uint(2))][int(_105) & 3])), _207, (vp_c8_1._m0[int(uint(_195) >> uint(2))][_195 & 3] + fma(_203, vp_c8_1._m0[int(uint(int(_193)) >> uint(2))][int(_193) & 3], fma(_201, vp_c8_1._m0[int(uint(_95) >> uint(2))][_95 & 3], _199 * vp_c8_1._m0[int(uint(int(_93)) >> uint(2))][int(_93) & 3]))) * _205)));
    _54.x = _213;
    float _215 = fma(vp_c8_1._m0[int(uint(_187) >> uint(2))][_187 & 3] + fma(_203, vp_c8_1._m0[int(uint(int(_185)) >> uint(2))][int(_185) & 3], fma(_201, vp_c8_1._m0[int(uint(_145) >> uint(2))][_145 & 3], _199 * vp_c8_1._m0[int(uint(int(_143)) >> uint(2))][int(_143) & 3])), _211, fma(vp_c8_1._m0[int(uint(_175) >> uint(2))][_175 & 3] + fma(_203, vp_c8_1._m0[int(uint(int(_173)) >> uint(2))][int(_173) & 3], fma(_201, vp_c8_1._m0[int(uint(_129) >> uint(2))][_129 & 3], _199 * vp_c8_1._m0[int(uint(int(_127)) >> uint(2))][int(_127) & 3])), _209, fma(vp_c8_1._m0[int(uint(_163) >> uint(2))][_163 & 3] + fma(_203, vp_c8_1._m0[int(uint(int(_161)) >> uint(2))][int(_161) & 3], fma(_201, vp_c8_1._m0[int(uint(_113) >> uint(2))][_113 & 3], _199 * vp_c8_1._m0[int(uint(int(_111)) >> uint(2))][int(_111) & 3])), _207, (vp_c8_1._m0[int(uint(_149) >> uint(2))][_149 & 3] + fma(_203, vp_c8_1._m0[int(uint(int(_147)) >> uint(2))][int(_147) & 3], fma(_201, vp_c8_1._m0[int(uint(_99) >> uint(2))][_99 & 3], _199 * vp_c8_1._m0[int(uint(int(_97)) >> uint(2))][int(_97) & 3]))) * _205)));
    _54.y = _215;
    float _217 = fma(vp_c8_1._m0[int(uint(_191) >> uint(2))][_191 & 3] + fma(_203, vp_c8_1._m0[int(uint(int(_189)) >> uint(2))][int(_189) & 3], fma(_201, vp_c8_1._m0[int(uint(_141) >> uint(2))][_141 & 3], _199 * vp_c8_1._m0[int(uint(int(_139)) >> uint(2))][int(_139) & 3])), _211, fma(vp_c8_1._m0[int(uint(_183) >> uint(2))][_183 & 3] + fma(_203, vp_c8_1._m0[int(uint(int(_181)) >> uint(2))][int(_181) & 3], fma(_201, vp_c8_1._m0[int(uint(_133) >> uint(2))][_133 & 3], _199 * vp_c8_1._m0[int(uint(int(_131)) >> uint(2))][int(_131) & 3])), _209, fma(vp_c8_1._m0[int(uint(_171) >> uint(2))][_171 & 3] + fma(_203, vp_c8_1._m0[int(uint(int(_169)) >> uint(2))][int(_169) & 3], fma(_201, vp_c8_1._m0[int(uint(_121) >> uint(2))][_121 & 3], _199 * vp_c8_1._m0[int(uint(int(_119)) >> uint(2))][int(_119) & 3])), _207, (vp_c8_1._m0[int(uint(_159) >> uint(2))][_159 & 3] + fma(_203, vp_c8_1._m0[int(uint(int(_157)) >> uint(2))][int(_157) & 3], fma(_201, vp_c8_1._m0[int(uint(_117) >> uint(2))][_117 & 3], _199 * vp_c8_1._m0[int(uint(int(_115)) >> uint(2))][int(_115) & 3]))) * _205)));
    _54.z = _217;
    float _219 = fma(_217, vp_c3_1._m0[0].z, fma(_215, vp_c3_1._m0[0].y, _213 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    float _221 = fma(_217, vp_c3_1._m0[1].z, fma(_215, vp_c3_1._m0[1].y, _213 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _223 = fma(_217, vp_c3_1._m0[2].z, fma(_215, vp_c3_1._m0[2].y, _213 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _56.z = fma(_217, vp_c3_1._m0[37].z, fma(_215, vp_c3_1._m0[37].y, _213 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _54.w = _223;
    _56.y = fma(_217, vp_c3_1._m0[36].z, fma(_215, vp_c3_1._m0[36].y, _213 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    _56.x = fma(_217, vp_c3_1._m0[35].z, fma(_215, vp_c3_1._m0[35].y, _213 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _225 = fma(_223, vp_c3_1._m0[7].z, fma(_221, vp_c3_1._m0[7].y, _219 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.z = fma(_223, vp_c3_1._m0[9].z, fma(_221, vp_c3_1._m0[9].y, _219 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _227 = fma(_223, vp_c3_1._m0[8].z, fma(_221, vp_c3_1._m0[8].y, _219 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.x = _225;
    float _229 = fma(_223, vp_c3_1._m0[10].z, fma(_221, vp_c3_1._m0[10].y, _219 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _58.x = _225;
    gl_Position.y = _227;
    _58.y = _227;
    gl_Position.w = _229;
    _58.w = _229;
}


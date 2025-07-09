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

layout(binding = 6, std140) uniform vp_c5
{
    vec4 _m0[4096];
} vp_c5_1;

layout(binding = 4, std140) uniform vp_c3
{
    vec4 _m0[4096];
} vp_c3_1;

layout(location = 6) in vec4 _31;
layout(location = 8) in vec4 _33;
layout(location = 0) in vec4 _35;
layout(location = 1) in vec4 _37;
layout(location = 4) in vec4 _39;
layout(location = 0) out vec4 _41;
layout(location = 2) out vec4 _43;
layout(location = 3) out vec4 _45;
layout(location = 5) out vec4 _47;
layout(location = 1) out vec4 _49;
layout(location = 4) out vec4 _51;

void main()
{
    gl_PointSize = 1.0;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    float _58 = _31.x;
    float _60 = _31.z;
    float _62 = _31.y;
    float _64 = _31.w;
    float _66 = _33.y;
    float _68 = _33.x;
    float _70 = _35.x;
    float _72 = _37.x;
    int _75 = ((int(uint(floatBitsToInt(_58)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_58) & 65535) * 48) + 32);
    float _77 = _35.y;
    uint _80 = uint(int(uint(_75) >> uint(2)));
    float _82 = vp_c8_1._m0[int(uint(int(_80)) >> uint(2))][int(_80) & 3];
    int _84 = int(_80) + 1;
    float _86 = vp_c8_1._m0[int(uint(_84) >> uint(2))][_84 & 3];
    uint _88 = uint(int(uint(_75 + (-32)) >> uint(2)));
    float _90 = vp_c8_1._m0[int(uint(int(_88)) >> uint(2))][int(_88) & 3];
    int _92 = int(_88) + 1;
    float _94 = vp_c8_1._m0[int(uint(_92) >> uint(2))][_92 & 3];
    int _96 = ((int(uint(floatBitsToInt(_60)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_60) & 65535) * 48);
    uint _98 = uint(int(uint(_75 + (-16)) >> uint(2)));
    float _100 = vp_c8_1._m0[int(uint(int(_98)) >> uint(2))][int(_98) & 3];
    int _102 = int(_98) + 1;
    float _104 = vp_c8_1._m0[int(uint(_102) >> uint(2))][_102 & 3];
    float _106 = _37.y;
    float _108 = _35.z;
    int _110 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + (((floatBitsToInt(_62) & 65535) * 48) + 16);
    uint _112 = uint(int(uint(_96) >> uint(2)));
    float _114 = vp_c8_1._m0[int(uint(int(_112)) >> uint(2))][int(_112) & 3];
    int _116 = int(_112) + 1;
    float _118 = vp_c8_1._m0[int(uint(_116) >> uint(2))][_116 & 3];
    int _120 = ((int(uint(floatBitsToInt(_64)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_64) & 65535) * 48);
    uint _122 = uint(int(uint(_96 + 16) >> uint(2)));
    float _124 = vp_c8_1._m0[int(uint(int(_122)) >> uint(2))][int(_122) & 3];
    int _126 = int(_122) + 1;
    float _128 = vp_c8_1._m0[int(uint(_126) >> uint(2))][_126 & 3];
    uint _130 = uint(int(uint(_96 + 32) >> uint(2)));
    float _132 = vp_c8_1._m0[int(uint(int(_130)) >> uint(2))][int(_130) & 3];
    int _134 = int(_130) + 1;
    float _136 = vp_c8_1._m0[int(uint(_134) >> uint(2))][_134 & 3];
    uint _138 = uint(int(uint(_96 + 24) >> uint(2)));
    float _140 = vp_c8_1._m0[int(uint(int(_138)) >> uint(2))][int(_138) & 3];
    int _142 = int(_138) + 1;
    uint _144 = uint(int(uint(_110) >> uint(2)));
    float _146 = vp_c8_1._m0[int(uint(int(_144)) >> uint(2))][int(_144) & 3];
    int _148 = int(_144) + 1;
    float _150 = vp_c8_1._m0[int(uint(_148) >> uint(2))][_148 & 3];
    uint _152 = uint(int(uint(_120 + 16) >> uint(2)));
    float _154 = vp_c8_1._m0[int(uint(int(_152)) >> uint(2))][int(_152) & 3];
    int _156 = int(_152) + 1;
    float _158 = vp_c8_1._m0[int(uint(_156) >> uint(2))][_156 & 3];
    uint _160 = uint(int(uint(_110 + (-16)) >> uint(2)));
    float _162 = vp_c8_1._m0[int(uint(int(_160)) >> uint(2))][int(_160) & 3];
    int _164 = int(_160) + 1;
    float _166 = vp_c8_1._m0[int(uint(_164) >> uint(2))][_164 & 3];
    uint _168 = uint(int(uint(_110 + 16) >> uint(2)));
    float _170 = vp_c8_1._m0[int(uint(int(_168)) >> uint(2))][int(_168) & 3];
    int _172 = int(_168) + 1;
    float _174 = vp_c8_1._m0[int(uint(_172) >> uint(2))][_172 & 3];
    uint _176 = uint(int(uint(_120) >> uint(2)));
    float _178 = vp_c8_1._m0[int(uint(int(_176)) >> uint(2))][int(_176) & 3];
    int _180 = int(_176) + 1;
    float _182 = vp_c8_1._m0[int(uint(_180) >> uint(2))][_180 & 3];
    uint _184 = uint(int(uint(_120 + 32) >> uint(2)));
    float _186 = vp_c8_1._m0[int(uint(int(_184)) >> uint(2))][int(_184) & 3];
    int _188 = int(_184) + 1;
    float _190 = vp_c8_1._m0[int(uint(_188) >> uint(2))][_188 & 3];
    uint _192 = uint(int(uint(_110 + 24) >> uint(2)));
    float _194 = vp_c8_1._m0[int(uint(int(_192)) >> uint(2))][int(_192) & 3];
    int _196 = int(_192) + 1;
    uint _198 = uint(int(uint(_110 + (-8)) >> uint(2)));
    float _200 = vp_c8_1._m0[int(uint(int(_198)) >> uint(2))][int(_198) & 3];
    int _202 = int(_198) + 1;
    uint _204 = uint(int(uint(_110 + 8) >> uint(2)));
    float _206 = vp_c8_1._m0[int(uint(int(_204)) >> uint(2))][int(_204) & 3];
    int _208 = int(_204) + 1;
    uint _210 = uint(int(uint(_75 + (-24)) >> uint(2)));
    float _212 = vp_c8_1._m0[int(uint(int(_210)) >> uint(2))][int(_210) & 3];
    int _214 = int(_210) + 1;
    uint _216 = uint(int(uint(_75 + (-8)) >> uint(2)));
    float _218 = vp_c8_1._m0[int(uint(int(_216)) >> uint(2))][int(_216) & 3];
    int _220 = int(_216) + 1;
    uint _222 = uint(int(uint(_96 + 8) >> uint(2)));
    float _224 = vp_c8_1._m0[int(uint(int(_222)) >> uint(2))][int(_222) & 3];
    int _226 = int(_222) + 1;
    uint _228 = uint(int(uint(_75 + 8) >> uint(2)));
    float _230 = vp_c8_1._m0[int(uint(int(_228)) >> uint(2))][int(_228) & 3];
    int _232 = int(_228) + 1;
    uint _234 = uint(int(uint(_96 + 40) >> uint(2)));
    float _236 = vp_c8_1._m0[int(uint(int(_234)) >> uint(2))][int(_234) & 3];
    int _238 = int(_234) + 1;
    uint _240 = uint(int(uint(_120 + 8) >> uint(2)));
    float _242 = vp_c8_1._m0[int(uint(int(_240)) >> uint(2))][int(_240) & 3];
    int _244 = int(_240) + 1;
    uint _246 = uint(int(uint(_120 + 40) >> uint(2)));
    float _248 = vp_c8_1._m0[int(uint(int(_246)) >> uint(2))][int(_246) & 3];
    int _250 = int(_246) + 1;
    uint _252 = uint(int(uint(_120 + 24) >> uint(2)));
    float _254 = vp_c8_1._m0[int(uint(int(_252)) >> uint(2))][int(_252) & 3];
    int _256 = int(_252) + 1;
    float _258 = _39.y;
    float _260 = _37.z;
    float _262 = _39.x;
    float _264 = _39.z;
    float _266 = _39.w;
    _41.x = fma(_68, vp_c5_1._m0[111].x, _66 * vp_c5_1._m0[111].z) + vp_c5_1._m0[112].x;
    _41.y = fma(_68, vp_c5_1._m0[111].y, _66 * vp_c5_1._m0[111].w) + vp_c5_1._m0[112].y;
    float _268 = fma(vp_c8_1._m0[int(uint(_244) >> uint(2))][_244 & 3] + fma(_242, _108, fma(_182, _77, _178 * _70)), _266, fma(vp_c8_1._m0[int(uint(_226) >> uint(2))][_226 & 3] + fma(_224, _108, fma(_118, _77, _114 * _70)), _264, fma(vp_c8_1._m0[int(uint(_214) >> uint(2))][_214 & 3] + fma(_212, _108, fma(_94, _77, _90 * _70)), _262, (vp_c8_1._m0[int(uint(_202) >> uint(2))][_202 & 3] + fma(_200, _108, fma(_166, _77, _162 * _70))) * _258)));
    _43.x = _268;
    float _270 = fma(vp_c8_1._m0[int(uint(_256) >> uint(2))][_256 & 3] + fma(_254, _108, fma(_158, _77, _154 * _70)), _266, fma(vp_c8_1._m0[int(uint(_142) >> uint(2))][_142 & 3] + fma(_140, _108, fma(_128, _77, _124 * _70)), _264, fma(vp_c8_1._m0[int(uint(_220) >> uint(2))][_220 & 3] + fma(_218, _108, fma(_104, _77, _100 * _70)), _262, (vp_c8_1._m0[int(uint(_208) >> uint(2))][_208 & 3] + fma(_206, _108, fma(_150, _77, _146 * _70))) * _258)));
    _43.y = _270;
    float _272 = fma(vp_c8_1._m0[int(uint(_250) >> uint(2))][_250 & 3] + fma(_248, _108, fma(_190, _77, _186 * _70)), _266, fma(vp_c8_1._m0[int(uint(_238) >> uint(2))][_238 & 3] + fma(_236, _108, fma(_136, _77, _132 * _70)), _264, fma(vp_c8_1._m0[int(uint(_232) >> uint(2))][_232 & 3] + fma(_230, _108, fma(_86, _77, _82 * _70)), _262, (vp_c8_1._m0[int(uint(_196) >> uint(2))][_196 & 3] + fma(_194, _108, fma(_174, _77, _170 * _70))) * _258)));
    float _274 = fma(fma(_242, _260, fma(_182, _106, _178 * _72)), _266, fma(fma(_224, _260, fma(_118, _106, _114 * _72)), _264, fma(fma(_212, _260, fma(_94, _106, _90 * _72)), _262, fma(_200, _260, fma(_166, _106, _162 * _72)) * _258)));
    _43.z = _272;
    _45.z = _272 + (-vp_c3_1._m0[13].w);
    float _276 = fma(fma(_254, _260, fma(_158, _106, _154 * _72)), _266, fma(fma(_140, _260, fma(_128, _106, _124 * _72)), _264, fma(fma(_218, _260, fma(_104, _106, _100 * _72)), _262, fma(_206, _260, fma(_150, _106, _146 * _72)) * _258)));
    float _278 = fma(fma(_248, _260, fma(_190, _106, _186 * _72)), _266, fma(fma(_236, _260, fma(_136, _106, _132 * _72)), _264, fma(fma(_230, _260, fma(_86, _106, _82 * _72)), _262, fma(_194, _260, fma(_174, _106, _170 * _72)) * _258)));
    _45.y = _270 + (-vp_c3_1._m0[12].w);
    _45.x = _268 + (-vp_c3_1._m0[11].w);
    _47.y = fma(_272, vp_c3_1._m0[36].z, fma(_270, vp_c3_1._m0[36].y, _268 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _280 = fma(_272, vp_c3_1._m0[0].z, fma(_270, vp_c3_1._m0[0].y, _268 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _47.z = fma(_272, vp_c3_1._m0[37].z, fma(_270, vp_c3_1._m0[37].y, _268 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _47.x = fma(_272, vp_c3_1._m0[35].z, fma(_270, vp_c3_1._m0[35].y, _268 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _282 = fma(_272, vp_c3_1._m0[1].z, fma(_270, vp_c3_1._m0[1].y, _268 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    float _284 = inversesqrt(fma(_278, _278, fma(_276, _276, _274 * _274)));
    float _286 = fma(_272, vp_c3_1._m0[2].z, fma(_270, vp_c3_1._m0[2].y, _268 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    _43.w = _286;
    _49.x = _274 * _284;
    _49.y = _276 * _284;
    _49.z = _278 * _284;
    float _288 = fma(_286, vp_c3_1._m0[8].z, fma(_282, vp_c3_1._m0[8].y, _280 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_286, vp_c3_1._m0[9].z, fma(_282, vp_c3_1._m0[9].y, _280 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _290 = fma(_286, vp_c3_1._m0[7].z, fma(_282, vp_c3_1._m0[7].y, _280 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _288;
    float _292 = fma(_286, vp_c3_1._m0[10].z, fma(_282, vp_c3_1._m0[10].y, _280 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _51.y = _288;
    gl_Position.x = _290;
    _51.x = _290;
    gl_Position.w = _292;
    _51.w = _292;
}


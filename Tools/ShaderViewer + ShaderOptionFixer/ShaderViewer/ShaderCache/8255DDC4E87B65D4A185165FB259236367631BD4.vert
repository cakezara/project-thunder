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
    float _58 = _31.y;
    float _60 = _31.x;
    float _62 = _31.z;
    float _64 = _33.y;
    float _66 = _33.x;
    float _68 = _35.x;
    float _70 = _37.x;
    float _72 = _35.y;
    int _75 = ((int(uint(floatBitsToInt(_58)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_58) & 65535) * 48);
    float _77 = _37.y;
    uint _80 = uint(int(uint(_75 + 32) >> uint(2)));
    float _82 = vp_c8_1._m0[int(uint(int(_80)) >> uint(2))][int(_80) & 3];
    int _84 = int(_80) + 1;
    float _86 = vp_c8_1._m0[int(uint(_84) >> uint(2))][_84 & 3];
    int _88 = ((int(uint(floatBitsToInt(_60)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_60) & 65535) * 48);
    uint _90 = uint(int(uint(_75) >> uint(2)));
    float _92 = vp_c8_1._m0[int(uint(int(_90)) >> uint(2))][int(_90) & 3];
    int _94 = int(_90) + 1;
    float _96 = vp_c8_1._m0[int(uint(_94) >> uint(2))][_94 & 3];
    int _98 = ((int(uint(floatBitsToInt(_62)) >> uint(16)) * 48) << 16) + ((floatBitsToInt(_62) & 65535) * 48);
    uint _100 = uint(int(uint(_88) >> uint(2)));
    float _102 = vp_c8_1._m0[int(uint(int(_100)) >> uint(2))][int(_100) & 3];
    int _104 = int(_100) + 1;
    float _106 = vp_c8_1._m0[int(uint(_104) >> uint(2))][_104 & 3];
    uint _108 = uint(int(uint(_75 + 16) >> uint(2)));
    float _110 = vp_c8_1._m0[int(uint(int(_108)) >> uint(2))][int(_108) & 3];
    int _112 = int(_108) + 1;
    float _114 = vp_c8_1._m0[int(uint(_112) >> uint(2))][_112 & 3];
    uint _116 = uint(int(uint(_88 + 32) >> uint(2)));
    float _118 = vp_c8_1._m0[int(uint(int(_116)) >> uint(2))][int(_116) & 3];
    int _120 = int(_116) + 1;
    float _122 = vp_c8_1._m0[int(uint(_120) >> uint(2))][_120 & 3];
    uint _124 = uint(int(uint(_75 + 8) >> uint(2)));
    float _126 = vp_c8_1._m0[int(uint(int(_124)) >> uint(2))][int(_124) & 3];
    int _128 = int(_124) + 1;
    uint _130 = uint(int(uint(_98) >> uint(2)));
    float _132 = vp_c8_1._m0[int(uint(int(_130)) >> uint(2))][int(_130) & 3];
    int _134 = int(_130) + 1;
    float _136 = vp_c8_1._m0[int(uint(_134) >> uint(2))][_134 & 3];
    uint _138 = uint(int(uint(_88 + 16) >> uint(2)));
    float _140 = vp_c8_1._m0[int(uint(int(_138)) >> uint(2))][int(_138) & 3];
    int _142 = int(_138) + 1;
    float _144 = vp_c8_1._m0[int(uint(_142) >> uint(2))][_142 & 3];
    uint _146 = uint(int(uint(_88 + 8) >> uint(2)));
    float _148 = vp_c8_1._m0[int(uint(int(_146)) >> uint(2))][int(_146) & 3];
    int _150 = int(_146) + 1;
    uint _152 = uint(int(uint(_75 + 24) >> uint(2)));
    float _154 = vp_c8_1._m0[int(uint(int(_152)) >> uint(2))][int(_152) & 3];
    int _156 = int(_152) + 1;
    uint _158 = uint(int(uint(_98 + 16) >> uint(2)));
    float _160 = vp_c8_1._m0[int(uint(int(_158)) >> uint(2))][int(_158) & 3];
    int _162 = int(_158) + 1;
    float _164 = vp_c8_1._m0[int(uint(_162) >> uint(2))][_162 & 3];
    uint _166 = uint(int(uint(_98 + 32) >> uint(2)));
    float _168 = vp_c8_1._m0[int(uint(int(_166)) >> uint(2))][int(_166) & 3];
    int _170 = int(_166) + 1;
    float _172 = vp_c8_1._m0[int(uint(_170) >> uint(2))][_170 & 3];
    uint _174 = uint(int(uint(_98 + 8) >> uint(2)));
    float _176 = vp_c8_1._m0[int(uint(int(_174)) >> uint(2))][int(_174) & 3];
    int _178 = int(_174) + 1;
    float _180 = _35.z;
    float _182 = _37.z;
    uint _184 = uint(int(uint(_75 + 40) >> uint(2)));
    float _186 = vp_c8_1._m0[int(uint(int(_184)) >> uint(2))][int(_184) & 3];
    int _188 = int(_184) + 1;
    uint _190 = uint(int(uint(_88 + 24) >> uint(2)));
    float _192 = vp_c8_1._m0[int(uint(int(_190)) >> uint(2))][int(_190) & 3];
    int _194 = int(_190) + 1;
    uint _196 = uint(int(uint(_88 + 40) >> uint(2)));
    float _198 = vp_c8_1._m0[int(uint(int(_196)) >> uint(2))][int(_196) & 3];
    int _200 = int(_196) + 1;
    uint _202 = uint(int(uint(_98 + 24) >> uint(2)));
    float _204 = vp_c8_1._m0[int(uint(int(_202)) >> uint(2))][int(_202) & 3];
    int _206 = int(_202) + 1;
    uint _208 = uint(int(uint(_98 + 40) >> uint(2)));
    float _210 = vp_c8_1._m0[int(uint(int(_208)) >> uint(2))][int(_208) & 3];
    int _212 = int(_208) + 1;
    float _214 = _39.y;
    float _216 = _39.x;
    float _218 = _39.z;
    _41.x = fma(_66, vp_c5_1._m0[112].x, _64 * vp_c5_1._m0[112].z) + vp_c5_1._m0[113].x;
    _41.y = fma(_66, vp_c5_1._m0[112].y, _64 * vp_c5_1._m0[112].w) + vp_c5_1._m0[113].y;
    float _220 = fma(vp_c8_1._m0[int(uint(_178) >> uint(2))][_178 & 3] + fma(_176, _180, fma(_136, _72, _132 * _68)), _218, fma(vp_c8_1._m0[int(uint(_150) >> uint(2))][_150 & 3] + fma(_148, _180, fma(_106, _72, _102 * _68)), _216, (vp_c8_1._m0[int(uint(_128) >> uint(2))][_128 & 3] + fma(_126, _180, fma(_96, _72, _92 * _68))) * _214));
    _43.x = _220;
    float _222 = fma(vp_c8_1._m0[int(uint(_206) >> uint(2))][_206 & 3] + fma(_204, _180, fma(_164, _72, _160 * _68)), _218, fma(vp_c8_1._m0[int(uint(_194) >> uint(2))][_194 & 3] + fma(_192, _180, fma(_144, _72, _140 * _68)), _216, (vp_c8_1._m0[int(uint(_156) >> uint(2))][_156 & 3] + fma(_154, _180, fma(_114, _72, _110 * _68))) * _214));
    _43.y = _222;
    float _224 = fma(vp_c8_1._m0[int(uint(_212) >> uint(2))][_212 & 3] + fma(_210, _180, fma(_172, _72, _168 * _68)), _218, fma(vp_c8_1._m0[int(uint(_200) >> uint(2))][_200 & 3] + fma(_198, _180, fma(_122, _72, _118 * _68)), _216, (vp_c8_1._m0[int(uint(_188) >> uint(2))][_188 & 3] + fma(_186, _180, fma(_86, _72, _82 * _68))) * _214));
    _43.z = _224;
    _45.y = _222 + (-vp_c3_1._m0[12].w);
    float _226 = fma(fma(_176, _182, fma(_136, _77, _132 * _70)), _218, fma(fma(_148, _182, fma(_106, _77, _102 * _70)), _216, fma(_126, _182, fma(_96, _77, _92 * _70)) * _214));
    float _228 = fma(fma(_204, _182, fma(_164, _77, _160 * _70)), _218, fma(fma(_192, _182, fma(_144, _77, _140 * _70)), _216, fma(_154, _182, fma(_114, _77, _110 * _70)) * _214));
    float _230 = fma(fma(_210, _182, fma(_172, _77, _168 * _70)), _218, fma(fma(_198, _182, fma(_122, _77, _118 * _70)), _216, fma(_186, _182, fma(_86, _77, _82 * _70)) * _214));
    _45.x = _220 + (-vp_c3_1._m0[11].w);
    _47.y = fma(_224, vp_c3_1._m0[36].z, fma(_222, vp_c3_1._m0[36].y, _220 * vp_c3_1._m0[36].x)) + vp_c3_1._m0[36].w;
    float _232 = fma(_224, vp_c3_1._m0[0].z, fma(_222, vp_c3_1._m0[0].y, _220 * vp_c3_1._m0[0].x)) + vp_c3_1._m0[0].w;
    _45.z = _224 + (-vp_c3_1._m0[13].w);
    float _234 = fma(_224, vp_c3_1._m0[1].z, fma(_222, vp_c3_1._m0[1].y, _220 * vp_c3_1._m0[1].x)) + vp_c3_1._m0[1].w;
    _47.x = fma(_224, vp_c3_1._m0[35].z, fma(_222, vp_c3_1._m0[35].y, _220 * vp_c3_1._m0[35].x)) + vp_c3_1._m0[35].w;
    float _236 = fma(_224, vp_c3_1._m0[2].z, fma(_222, vp_c3_1._m0[2].y, _220 * vp_c3_1._m0[2].x)) + vp_c3_1._m0[2].w;
    float _238 = inversesqrt(fma(_230, _230, fma(_228, _228, _226 * _226)));
    _43.w = _236;
    _47.z = fma(_224, vp_c3_1._m0[37].z, fma(_222, vp_c3_1._m0[37].y, _220 * vp_c3_1._m0[37].x)) + vp_c3_1._m0[37].w;
    _49.x = _226 * _238;
    _49.y = _228 * _238;
    _49.z = _230 * _238;
    float _240 = fma(_236, vp_c3_1._m0[8].z, fma(_234, vp_c3_1._m0[8].y, _232 * vp_c3_1._m0[8].x)) + vp_c3_1._m0[8].w;
    gl_Position.z = fma(_236, vp_c3_1._m0[9].z, fma(_234, vp_c3_1._m0[9].y, _232 * vp_c3_1._m0[9].x)) + vp_c3_1._m0[9].w;
    float _242 = fma(_236, vp_c3_1._m0[7].z, fma(_234, vp_c3_1._m0[7].y, _232 * vp_c3_1._m0[7].x)) + vp_c3_1._m0[7].w;
    gl_Position.y = _240;
    float _244 = fma(_236, vp_c3_1._m0[10].z, fma(_234, vp_c3_1._m0[10].y, _232 * vp_c3_1._m0[10].x)) + vp_c3_1._m0[10].w;
    _51.y = _240;
    gl_Position.x = _242;
    _51.x = _242;
    gl_Position.w = _244;
    _51.w = _244;
}


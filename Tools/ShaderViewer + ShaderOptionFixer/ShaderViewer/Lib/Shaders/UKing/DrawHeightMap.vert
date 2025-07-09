#version 430
layout (location = 0) in vec2 aPos;
layout (location = 1) in vec2 vTexCoord0;

uniform vec4 TextureST;
uniform vec4 PosST;

out vec2 TexCoords;

void main()
{
    vec2 pos = fma(aPos, PosST.xy, PosST.zw);
    gl_Position = vec4(pos.x, pos.y, 0.0, 1.0); 
    TexCoords = vTexCoord0 * TextureST.xy + TextureST.zw;
}
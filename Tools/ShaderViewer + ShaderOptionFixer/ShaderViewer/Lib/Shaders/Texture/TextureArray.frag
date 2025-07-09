#version 330 core

out vec4 FragColor;
in vec2 TexCoords;

uniform sampler2DArray textureArray;

uniform int arrayLevel;
uniform int mipLevel;


void main()
{		
    vec4 color = textureLod(textureArray, vec3(TexCoords, arrayLevel), mipLevel);
    FragColor = color;
    FragColor.a = 1.0;
}	
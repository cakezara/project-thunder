#version 330 core
in vec2 TexCoords;

uniform sampler2D materialTexture;

out vec4 FragColor;

void main()
{
    FragColor = texture(materialTexture, vec2(TexCoords.x, TexCoords.y));
}
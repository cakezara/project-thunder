#version 330 core
in vec2 TexCoords;

uniform sampler2D heightTexture;

out vec4 FragColor;

void main()
{
    FragColor = texture(heightTexture, vec2(TexCoords.x, TexCoords.y));
}
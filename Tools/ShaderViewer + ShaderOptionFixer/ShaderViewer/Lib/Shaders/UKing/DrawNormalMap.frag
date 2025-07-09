#version 330 core
in vec2 TexCoords;

uniform sampler2D heightTexture;
uniform sampler2D materialTexture;

const int WIDTH = 256;

out vec4 FragColor;

vec2 CalculateNormals()
{
    vec2 texelSize = vec2(1.0 / WIDTH, 1.0 / WIDTH);
    float scale = 16;

    float u = texture(heightTexture, TexCoords + texelSize * vec2(0.0, -1.0)).r * scale;
    float r = texture(heightTexture, TexCoords + texelSize * vec2(-1.0, 0.0)).r * scale;
    float l = texture(heightTexture, TexCoords + texelSize * vec2(1.0, 0.0)).r * scale;
    float d = texture(heightTexture, TexCoords + texelSize * vec2(0.0, 1.0)).r * scale;

    vec3 n;
    n.y = u - d;
    n.x = r - l;
    n.z = 2;
    return normalize(n.xyz).xy;
}
void main()
{
    vec4 materialMap = texture(materialTexture, vec2(TexCoords.x, TexCoords.y));

    FragColor.rg = CalculateNormals() * 0.5 + 0.5;
    FragColor.ba = materialMap.zw;
}
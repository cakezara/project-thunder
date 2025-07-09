#version 330 core
in vec2 TexCoords;

uniform sampler2D screenTexture;
uniform sampler2D depthTexture;

uniform int flipVertical;
uniform int setDepth;

out vec4 FragColor;

void main()
{
    if (flipVertical == 1)
        FragColor = texture(screenTexture, vec2(TexCoords.x, 1 - TexCoords.y));
    else
        FragColor = texture(screenTexture, TexCoords);

    if (setDepth == 1)
    {
        gl_FragDepth = texture(depthTexture, vec2(TexCoords.x, TexCoords.y)).x;
    }
}
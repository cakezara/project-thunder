#version 330 core

in vec2 TexCoords;

uniform sampler2D depthTexture;

uniform float zfar;
uniform float znear;

out vec4 out_normalized_depth;

float linearize_depth(float depth, float near,float far)
{
    float ndc = depth * 2.0 - 1.0; 
    return (2.0 * near * far) / (far + near - ndc * (far - near));	
}

void main()
{
    float depth = texture(depthTexture, vec2(TexCoords.x, TexCoords.y)).r;
    float normalized_depth = linearize_depth(depth, znear, zfar);

    //Make sure depth is stored in range 0 - 1.0
    out_normalized_depth = vec4(normalized_depth / zfar, 0, 0, 1.0);
}
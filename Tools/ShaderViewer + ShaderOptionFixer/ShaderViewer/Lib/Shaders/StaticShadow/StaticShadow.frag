#version 330 core
in vec2 TexCoords;

uniform sampler2D preshadingTexture;
uniform sampler2D depthTexture;
uniform sampler2D dynamicShadingTexture;

uniform int flipVertical;
uniform float zfar;
uniform float znear;

out vec4 out_shadow;
out vec4 out_depth;
out vec4 out_shading;
out vec4 out_subsurface;

float linearize_depth(float depth, float near,float far)
{
    float ndc = depth * 2.0 - 1.0; 
    return (2.0 * near * far) / (far + near - ndc * (far - near));	
}

void main()
{
    vec4 preshading = texture(preshadingTexture, vec2(TexCoords.x, 1 - TexCoords.y));
    float depth = texture(depthTexture, vec2(TexCoords.x, TexCoords.y)).r;
    float normalized_depth = linearize_depth(depth, znear, zfar);
    vec4 dynamicShading = texture(dynamicShadingTexture, vec2(TexCoords.x, 1 - TexCoords.y)).rgba;

    float shadow = 1.0;
    float cell_shading = 0.7;

    float char_shader = 1.0;

    out_shadow = vec4(1.0, 1.0, 1.0, 0.0);
   // out_shadow = vec4(0.58824, preshading.g, 1.0, 0.58824);

  //  out_subsurface = preshading;
   // out_subsurface = vec4( 0.58824, preshading.g, 0.0,  0.58824);
   // out_subsurface = vec4( 0.58824, preshading.g, 0.0,  0.58824);

    //out_subsurface = vec4(preshading.r, preshading.g, 0.24, preshading.a);
    //botw
    out_subsurface = vec4(0, preshading.g, 0.25, 0);
    out_shadow = vec4(1.0, 1.0, 0.5, 0.0);

    out_depth = vec4(normalized_depth, 0, 0, 1.0);
    out_shading = vec4(dynamicShading.r, char_shader, 1.0, 1.0 - normalized_depth / zfar);
}
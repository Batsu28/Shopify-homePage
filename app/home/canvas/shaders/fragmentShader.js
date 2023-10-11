const FragmentShader = /*gsls*/ `

varying vec2 vUv;
uniform vec3 randomFactors;

void main() {
  float strength = step(0.49 * randomFactors.z, max(abs(vUv.x - 0.5 * randomFactors.x), abs(vUv.y - 0.5 * randomFactors.y)));

  gl_FragColor = vec4(vec3(strength), 1.0);
}
`;

export default FragmentShader;

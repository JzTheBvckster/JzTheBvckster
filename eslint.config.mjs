import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "agents/**",
      "awesome-copilot/**",
      "skills/**"
    ]
  }
];

export default eslintConfig;

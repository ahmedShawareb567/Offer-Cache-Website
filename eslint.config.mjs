import antfu from "@antfu/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu(
    {
      ignores: [
        "gql.d.ts",
        "components/ui/**",
        "graphql/**/*.ts",
        "graphql-types.gen.ts",
        "lib/**",
        "assets/**",
        "tailwind.config.js",
        "nuxt.config.ts",
      ],
    },
    {
      rules: {
        "vue/block-order": "off",
        "style/semi": "off",
        "style/quotes": "off",
        "style/object-curly-spacing": "off",
        "no-console": "warn",
        "vue/html-self-closing": "off",
        "vue/singleline-html-element-content-newline": "off",
        "ts/consistent-type-definitions": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "style/member-delimiter-style": "off",
        "style/block-spacing": "off",
        "antfu/top-level-function": "off",
        "style/indent": "off",
        "style/indent-binary-ops": "off",
        "vue/object-curly-spacing": "off",
      },
    }
  )
);

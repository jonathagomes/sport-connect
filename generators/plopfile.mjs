export default (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setGenerator("Component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/common/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/common/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/Component.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/common/components/{{pascalCase name}}/index.test.tsx",
        templateFile: "templates/Component.test.tsx.hbs",
      },
    ],
  });
  plop.setGenerator("Page", {
    description: "Create a Page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/pages/{{lowerCase name}}.tsx",
        templateFile: "templates/Page.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/layout/{{pascalCase name}}/index.tsx",
        templateFile: "templates/Layout.tsx.hbs",
      },
    ],
  });
};

import fs from 'fs';
import path from 'path';

/**
 * @param {import("plop").NodePlopAPI} plop
 */
export default function runPlop(plop) {
  const uiRootAbs = path.resolve(process.cwd(), 'src/ui');

  const getUiDirectories = () => {
    if (!fs.existsSync(uiRootAbs)) return [];

    return fs
      .readdirSync(uiRootAbs, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();
  };

  // ---- Helpers (useful once you add real boilerplate) ----
  plop.setHelper('kebabCase', (txt) =>
    String(txt)
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase()
  );

  plop.setHelper('camelCase', (txt) => {
    const s = String(txt)
      .replace(/[^A-Za-z0-9]+/g, ' ')
      .trim();
    if (!s) return '';
    const [first, ...rest] = s.split(/\s+/);
    return (
      first.toLowerCase() +
      rest.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('')
    );
  });

  plop.setWelcomeMessage('Select a generator:');

  plop.setGenerator('component', {
    description: 'Scaffold a UI component under src/ui/<category>/<ComponentName>',
    prompts: [
      {
        type: 'input',
        name: 'ComponentName',
        message: 'Component name (PascalCase):',
        validate(value) {
          if (!value) {
            return 'Required';
          }

          return (
            /^[A-Z][A-Za-z0-9]*$/.test(value) ||
            'Component name must be in PascalCase (e.g. Button, ModalHeader)'
          );
        },
      },
      {
        type: 'list',
        name: 'destination',
        message: 'Select destination folder:',
        choices() {
          const dirs = getUiDirectories();

          // If there are no subfolders under src/ui, still allow generating at root.
          if (dirs.length === 0) return ['(root)'];

          return dirs;
        },
      },
    ],
    actions(data) {
      const { ComponentName, destination } = data;

      const targetDir = `${destination === '(root)' ? '' : `${destination}/${ComponentName}`}`;
      const basePath = `src/ui/${targetDir}`;
      const exportLine = `export * from './${targetDir}';`;

      // Prevent overwriting an existing component folder
      const basePathAbs = path.resolve(process.cwd(), basePath);

      if (fs.existsSync(basePathAbs)) {
        throw new Error(`Component already exists: ${basePath}`);
      }

      return [
        // index.ts
        {
          type: 'add',
          path: `${basePath}/index.ts`,
          templateFile: 'plop/component/index.hbs',
        },
        // {ComponentName}.component.tsx
        {
          type: 'add',
          path: `${basePath}/{{ComponentName}}.component.tsx`,
          templateFile: 'plop/component/component.hbs',
        },
        // {ComponentName}.d.ts
        {
          type: 'add',
          path: `${basePath}/{{ComponentName}}.d.ts`,
          templateFile: 'plop/component/d.hbs',
        },
        // {ComponentName}.utils.ts
        {
          type: 'add',
          path: `${basePath}/{{ComponentName}}.utils.ts`,
          templateFile: 'plop/component/utils.hbs',
        },
        // ---- ui index.ts export ----
        {
          type: 'modify',
          path: 'src/ui/index.ts',
          transform(fileContents) {
            // If already exported, do nothing
            if (fileContents.includes(exportLine)) {
              return fileContents;
            }

            // Ensure file ends with newline
            const contents = fileContents.endsWith('\n') ? fileContents : `${fileContents}\n`;

            return `${contents}${exportLine}\n`;
          },
        },
      ];
    },
  });
}

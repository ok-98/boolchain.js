const { readFile, writeFile, rm, copyFile } = require('fs/promises');
const path = require('path');
const TypeDoc = require('typedoc');
const MY_FILES = [
  path.join(__dirname, '../', 'README.base.md'),
  path.join(__dirname, './temp', 'modules.md'),
];

async function main() {
  await rm(path.join(__dirname, '../README.md'), { force: true });

  const app = await TypeDoc.Application.bootstrapWithPlugins({
    entryPoints: ['lib/boolchain.ts'],
    plugin: ['typedoc-plugin-markdown'],
    readme: path.join(__dirname, '../README.base.md'),
    githubPages: false,
    hideGenerator: true,
    jsDocCompatibility: true,
    //titleLink: undefined,
    exclude: ['**/node_modules/**/*.*'],
  });
  const project = await app.convert();
  if (project) {
    await app.generateDocs(project, path.join(__dirname, './temp'));

    const [readme, modules] = await Promise.all(
      MY_FILES.map(async (file) => await readFile(file)),
    );

    const newFile = readme
      .toString()
      .replace(
        /<!-- DOCS -->/g,
        modules
          .toString()
          .slice(47)
          .replace('- [default](modules/default.md)', '')
          .replace('### Namespaces', '')
          .replace('\n\n\n\n', '\n'),
      );

    await writeFile(path.join(__dirname, '../README.md'), newFile);
  }
}

main().catch(console.error);

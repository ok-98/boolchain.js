const { readFile, writeFile, rm, copyFile } = require('fs/promises');
const path = require('path');
const TypeDoc = require('typedoc');
const MY_FILES = ['README.md', 'modules.md'];

async function main() {
  //    await rm(path.join(__dirname, '../README.md'), { force: true });

  const app = await TypeDoc.Application.bootstrapWithPlugins({
    entryPoints: ['lib/main.ts'],
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

    await Promise.all(
      MY_FILES.map(
        async (file) =>
          await copyFile(
            path.join(__dirname, './temp', file),
            path.join(__dirname, '../', file),
          ),
      ),
    );
  }
}

main().catch(console.error);

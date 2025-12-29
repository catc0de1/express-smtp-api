import hbs from 'handlebars';
import fs from 'fs';
import path from 'path';

const renderTemplate = (templateName: string, content: object) => {
  const isProd = process.env.NODE_ENV === 'production';
  const templateDir = isProd ? 'dist/assets' : 'src/templates';

  const templatePath = path.join(process.cwd(), templateDir, `${templateName}.hbs`);
  const source = fs.readFileSync(templatePath, 'utf8');

  const partialsDir = path.join(process.cwd(), templateDir, 'partials');
  fs.readdirSync(partialsDir).forEach((filename) => {
    const partialPath = path.join(partialsDir, filename);
    const partialName = path.parse(filename).name;
    const partialContent = fs.readFileSync(partialPath, 'utf8');
    hbs.registerPartial(partialName, partialContent);
  });

  const template = hbs.compile(source);
  return template(content);
};

export default renderTemplate;

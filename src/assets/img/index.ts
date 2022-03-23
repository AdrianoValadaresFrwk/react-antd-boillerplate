const context = require.context('./', true, /\.(png|svg|jpg|jpeg|gif)$/);
const files = {};

context.keys().forEach((filename: string) => {
  files[filename] = context(filename).default;
});

export default files;

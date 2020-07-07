module.exports = function override(config, env) {
  let babelLoader = config.module.rules[2].oneOf[1];

  // This is the magic line.
  // Adjust what it replaces to make it work for your monorepo structure.
  // It works by loading typescript with CRA's config that is
  // included in the packages/ folder and not just in the /packages/web/src folder.
  babelLoader.include = babelLoader.include.replace('/web/src', '');

  config.module.rules[2].oneOf[1] = babelLoader;
  return config;
}

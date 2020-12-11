 
module.exports = function override(config, env) {

  let babelLoader = config.module.rules[2].oneOf[1];

  // Load the all the package's typescript with CRA's tsconfig.
  const babelPath = babelLoader.include;

  // Fix the path for all windows/linux/mac.
  babelLoader.include = babelPath.includes('\\')
    ? babelPath.replace('\\web\\src', '')
    : babelPath.replace('/web/src', '');
  config.module.rules[2].oneOf[1] = babelLoader;

  return config;
};
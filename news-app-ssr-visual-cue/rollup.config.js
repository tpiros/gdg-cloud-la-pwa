import babel from 'rollup-plugin-babel';
// import compiler from '@ampproject/rollup-plugin-closure-compiler';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import workboxInjectManifest from 'rollup-plugin-workbox-inject';

export default {
  input: './service-worker.dev.mjs',
  plugins: [
    resolve({ browser: true }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'production'
      ),
    }),
    babel({
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
      ],
    }),
    workboxInjectManifest({
      globDirectory: '.',
      globPatterns: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'assets/icons/*.png',
        '*.{js,css,html}',
        'partials/*.html',
      ],
      globIgnores: [
        'server.mjs',
        'service-worker.dev.mjs',
        'service-worker.js',
        'service-worker.mjs',
        'build.js',
        'rollup.config.js',
      ],
    }),
    // compiler(),
  ],
  output: {
    file: path.join(__dirname, 'service-worker.js'),
    format: 'umd',
    sourcemap: true,
  },
};

// const { injectManifest } = require('workbox-build');
import workboxInjectManifest from 'rollup-plugin-workbox-inject';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
// import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
// import OMT from '@surma/rollup-plugin-off-main-thread';
// import compiler from '@ampproject/rollup-plugin-closure-compiler';

export default {
  input: `service-worker.dev.js`,
  plugins: [
    resolve({
      browser: true,
    }),

    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'production'
      ),
    }),
    workboxInjectManifest({
      globDirectory: '.',
      globPatterns: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'assets/icons/*.png',
        '*.{js,css,html}',
      ],
      globIgnores: ['service-worker.js'],
    }),
    // OMT(),
    // compiler(),
    // terser(),
  ],
  output: {
    sourcemap: true,
    format: 'umd',
    file: 'service-worker.js',
  },
};
// const buildServiceWorker = async () => {
//   try {
//     const build = await injectManifest({
//       swSrc: 'service-worker.dev.js',
//     });
//     console.log(
//       `${build.count} files will be precached, totaling ${build.size} bytes.`
//     );
//   } catch (error) {
//     console.error(error);
//     throw new Error(error);
//   }
// };

// buildServiceWorker();

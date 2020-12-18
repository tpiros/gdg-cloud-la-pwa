import babel from 'rollup-plugin-babel';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import workboxInjectManifest from 'rollup-plugin-workbox-inject';

export default {
  input: './service-worker.dev.js',
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
      globPatterns: ['*.{js,css,html}'],
      globIgnores: ['service-worker.dev.js', 'rollup.config.js'],
    }),
  ],
  output: {
    file: path.join(__dirname, 'service-worker.js'),
    format: 'umd',
    sourcemap: true,
  },
};

import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: false,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    plugins: [
      resolve({
        extensions: ['.js', '.ts', '.tsx'],
        browser: true,
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        emitDeclarationOnly: false,
        declarationDir: 'dist',
        rootDir: 'src',
      }),
    ],
    external: ['react', 'react/jsx-runtime', '@keybindy/core'],
  },

  {
    input: 'dist/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];

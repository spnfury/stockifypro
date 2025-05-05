import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import ReactRefreshPlugin from '@rspack/plugin-react-refresh';
import HtmlPluginImport from '@rspack/plugin-html';
const HtmlPlugin = HtmlPluginImport.default;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: {
    main: './src/main.tsx',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            sourceMap: true,
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                  refresh: true,
                },
              },
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: ['postcss-loader'],
        type: 'css',
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new ReactRefreshPlugin(),
    new HtmlPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: resolve(__dirname, 'public'),
    },
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
}; 
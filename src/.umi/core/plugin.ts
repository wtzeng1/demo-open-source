// @ts-nocheck
import { Plugin } from '/Users/wtzeng/Documents/workspace/wtzeng1/demo-open-source/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['modifyClientRenderOpts','patchRoutes','rootContainer','render','onRouteChange','getInitialState','locale','locale','layout','request',],
});
plugin.register({
  apply: require('/Users/wtzeng/Documents/workspace/wtzeng1/demo-open-source/src/app.tsx'),
  path: '/Users/wtzeng/Documents/workspace/wtzeng1/demo-open-source/src/app.tsx',
});
plugin.register({
  apply: require('/Users/wtzeng/Documents/workspace/wtzeng1/demo-open-source/node_modules/umi-plugin-antd-icon-config/lib/app.js'),
  path: '/Users/wtzeng/Documents/workspace/wtzeng1/demo-open-source/node_modules/umi-plugin-antd-icon-config/lib/app.js',
});
plugin.register({
  apply: require('/Users/wtzeng/Documents/workspace/wtzeng1/demo-open-source/src/.umi/plugin-access/rootContainer.ts'),
  path: '/Users/wtzeng/Documents/workspace/wtzeng1/demo-open-source/src/.umi/plugin-access/rootContainer.ts',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('/Users/wtzeng/Documents/workspace/wtzeng1/demo-open-source/src/.umi/plugin-locale/runtime.tsx'),
  path: '/Users/wtzeng/Documents/workspace/wtzeng1/demo-open-source/src/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('@@/plugin-layout/runtime.tsx'),
  path: '@@/plugin-layout/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };

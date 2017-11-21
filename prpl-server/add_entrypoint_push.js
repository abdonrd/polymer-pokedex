/**
 * Usage:
 *   node prpl-server/add_entrypoint_push.js
 */

/* eslint-disable quotes, quote-props, indent */

const fs = require('fs');
const buildPath = require('polymer-cli/lib/build/build').mainBuildDirectoryName;
const pushManifestPath = `${buildPath}/es6-unbundled/push-manifest.json`;
const pushManifest = require(`../${pushManifestPath}`);
const newManifest = {};

const navigateRequestPreloads = {
  "bower_components/webcomponentsjs/webcomponents-loader.js": {
    "type": "script",
    "weight": 1
  }
};

newManifest['/'] = Object.assign({
    "src/app-shell.html": {
      "type": "document",
      "weight": 1
    },
    "src/pages/page-pokemons-list.html": {
      "type": "document",
      "weight": 1
    }
  },
  pushManifest['/'],
  pushManifest['src/app-shell.html'],
  pushManifest['src/pages/page-pokemons-list.html'],
  navigateRequestPreloads);
newManifest['/pokemons'] = Object.assign({
    "src/app-shell.html": {
      "type": "document",
      "weight": 1
    },
    "src/pages/page-pokemons-list.html": {
      "type": "document",
      "weight": 1
    }
  },
  pushManifest['/pokemons'],
  pushManifest['src/app-shell.html'],
  pushManifest['src/pages/page-pokemons-list.html'],
  navigateRequestPreloads);
newManifest['/pokemons/.*'] = Object.assign({
    "src/app-shell.html": {
      "type": "document",
      "weight": 1
    },
    "src/pages/page-pokemons-detail.html": {
      "type": "document",
      "weight": 1
    }
  },
  pushManifest['/pokemons/.*'],
  pushManifest['src/app-shell.html'],
  pushManifest['src/pages/page-pokemons-detail.html'],
  navigateRequestPreloads);

fs.writeFileSync(pushManifestPath, JSON.stringify(newManifest, null, 2));

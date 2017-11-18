[![Build Status](https://travis-ci.com/abdonrd/polydex.svg?token=rdiyKAed3D5Z3QVHAwde&branch=master)](https://travis-ci.com/abdonrd/polydex)

# Polydex

Pokédex built with Polymer.

## Prerequisites

First, install [Bower](https://bower.io) using [yarn](https://yarnpkg.com)
(we assume you have pre-installed [node.js](https://nodejs.org)):

    yarn global add bower

And install the dependencies:

    yarn install && bower install

## Start the development server

This command serves the app at `http://127.0.0.1:8081` and provides basic URL
routing for the app:

    yarn run serve

## Build

The `yarn run build` command builds your Polymer application for production,
using build configuration options provided by the command line or in your
project's `polymer.json` file.

You can configure your `polymer.json` file to create multiple builds. This is necessary if you will be serving different builds optimized for different browsers. You can define your own named builds, or use presets. See the documentation on [building your project for production](https://www.polymer-project.org/2.0/toolbox/build-for-production) for more information.

The Polydex is configured to create three builds using [the three supported presets](https://www.polymer-project.org/2.0/toolbox/build-for-production#build-presets):

```
"builds": [
  {
    "preset": "es5-bundled"
  },
  {
    "preset": "es6-bundled"
  },
  {
    "preset": "es6-unbundled"
  }
]
```

Builds will be output to a subdirectory under the `build/` directory as follows:

```
build/
  es5-bundled/
  es6-bundled/
  es6-unbundled/
```

* `es5-bundled` is a bundled, minified build with a service worker. ES6 code is compiled to ES5 for compatibility with older browsers.
* `es6-bundled` is a bundled, minified build with a service worker. ES6 code is served as-is. This build is for browsers that can handle ES6 code - see [building your project for production](https://www.polymer-project.org/2.0/toolbox/build-for-production#compiling) for a list.
* `es6-unbundled` is an unbundled, minified build with a service worker. ES6 code is served as-is. This build is for browsers that support HTTP/2 push.

See the documentation on the [polymer.json specification](https://www.polymer-project.org/2.0/docs/tools/polymer-json) and [building your Polymer application for production](https://www.polymer-project.org/2.0/toolbox/build-for-production).

### Preview the build

This command serves your app. Replace `build-folder-name` with the folder name of the build you want to serve.

    yarn run serve build/build-folder-name/

# px-sliding-gague [![Build Status](https://travis-ci.org/PredixDev/px-sliding-gague.svg?branch=master)](https://travis-ci.org/PredixDev/px-sliding-gague)

[![px-sliding-gague demo](px-sliding-gague.png?raw=true)](https://github.com/PredixDev/px-sliding-gague)

## Overview

The px-sliding-gague is a Predix UI component for defining a value in a range or a range of values within set boundaries.

## documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-sliding-gague).

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line.

```
bower install px-sliding-gague --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-sliding-gague/px-sliding-gague.html"/>
```

Finally, use the component in your application:

Single handled slider
```
<px-sliding-gague
  value="50"
  min="1"
  max="100">
</px-sliding-gague>
```

Multi-handled slider
```
<px-sliding-gague
  start-value="20"
  end-value="40"
  min="1"
  max="60">
</px-sliding-gague>
```

Single-handled slider with step
```
<px-sliding-gague
  value="250"
  step="50"
  min="0"
  max="500">
</px-sliding-gague>
```

### Layout

The slider will always take the full-width of whatever container it is in.
If resized or made visible for the first time (if the slider was in a modal for example) then the slider will need to be notified through the [iron-resizable-behavior](https://elements.polymer-project.org/elements/iron-resizable-behavior?active=Polymer.IronResizableBehavior), by - for example - manually calling `notifyResize()` on it.


## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.


### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-sliding-gague/issues) to submit any bugs you might find.

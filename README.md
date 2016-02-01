Px-Slider
-----------------------------------------------

## Overview

The px-Slider is a Predix Experience ('Px') component for defining a value in a range or a range of values within set boundaries.

### Attributes

**min**
The smallest value in the range (minimum)

**max**
The largest value in the range (maximum)

**value**
The starting value for the slider's handle.

**start-value**
For multi-handled/ranged sliders, the value of the left handle or start of the selected range.

**end-value**
For multi-handled/ranged sliders, the value of the right handle or end of the selected range.

**step**
All allowed values will be a multiple of the step. So if you want the user only to be able to select 10, 20, 30, 40, etc. you would set the step to 10.
The default is 1, which ensures that you only get integers for your value.

### Examples

Single handled slider
```
<px-slider
  value="50"
  min="1"
  max="100">
</px-slider>
```

Multi-handled slider
```
<px-slider
  start-value="20"
  end-value="40"
  min="1"
  max="60">
</px-slider>
```

Single-handled slider with step
```
<px-slider
  value="250"
  step="50"
  min="0"
  max="500">
</px-slider>
```

### Layout

The slider will always take the full-width of whatever container it is in.

### Latest Release
- not released yet!

### Active Development (master branch)
- <a href="http://pxc-demos.grc-apps.svc.ice.ge.com/bower_components/px-slider/demo.html" target="_blank">Demo</a>
- <a href="http://pxc-demos.grc-apps.svc.ice.ge.com/bower_components/px-slider/index.html" target="_blank">API Docs</a>

### Known Issues
Sometimes, for multi-handled slider, when you drag one handle to meet the other, the other handle jumps. 

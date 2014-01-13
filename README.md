# Treehouse points

[![Treehouse points](http://younesrafie.com/images/treehouse_points.png)](http://younesrafie.com)

Simple JavaScript library to help you import your Treehouse earned points to your website.

##Usage

Include the JavaScript library and the dependencies in your HTML.( see `test/` folder  for an example )

you can call it with.

```
new th({ 
    th_id: 'younesrafie', 
    wrapper: "wrap", 
    circle: { 
        width: 40, 
        radius:80 
    }
});
```

where

* `th_id` - Your Treehouse username.
* `wrapper` - Wraper element id.
* `circle` - Object containing a width and a radius values .
    * `width` - the width of the chart circle.
    * `radius` - the radius of the circle.

##Browser support
The library use the `canvas` element, you can check the support on [caniuse](http://caniuse.com/#search=canvas)

##Dependencies
* [JQuery](https://github.com/jquery/jquery)
* [Circle](https://github.com/Whyounes/circle)

##Licence
`TreehousePoints.js` is licensed under the terms of the MIT License.

##Inspired from
    * Treehouse earned points chart.

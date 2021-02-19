# liquidjs

A simple, expressive, safe and [Shopify][shopify/liquid] compatible template engine in pure JavaScript.
**The purpose of this repo** is to provide a standard Liquid implementation for the JavaScript community so that [Jekyll sites](https://jekyllrb.com), [Github Pages](https://pages.github.com/) and [Shopify templates](https://themes.shopify.com/) can be ported to Node.js without pain.

This fork fixes an issue with using if tags with undefined variables that the original author refused to fix.

The build files are included in this repo to make it installable via npm in our projects and avoid having to run our own npm registry.

If making any change, you'll need to rebuild and commit the dist directory as part of your commit.


[shopify/liquid]: https://shopify.github.io/liquid/
[plugins]: https://liquidjs.com/tutorials/plugins.html#Plugin-List
[setup]: https://liquidjs.com/tutorials/setup.html
[doc]: https://liquidjs.com
[github]: https://github.com/harttle/liquidjs
[patreon]: https://www.patreon.com/harttle
[oc]: https://opencollective.com/liquidjs/
[contribution]: https://liquidjs.com/tutorials/contribution-guidelines.html
[financial-support]: https://liquidjs.com/tutorials/contribution-guidelines.html#Financial-Support

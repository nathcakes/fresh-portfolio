/*
These operations are all asynchronous. Rendering however, is always synchronous. Instead of fetching data directly during rendering,
it should be loaded in a route's handler function and then passed to the page component via first argument to ctx.render().
The data that is passed to ctx.render() can then be accessed via the props.data field on the page component.
 */
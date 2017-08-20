// function route(pathname) {
//   console.log("About to route a request for " + pathname);
// }

// exports.route = route;

// function route(handle, pathname) {
//   console.log("About to route a request for " + pathname);
//   if (typeof handle[pathname] === 'function') {
//     handle[pathname]();
//   } else {
//     console.log("No request handler found for " + pathname);
//   }
// }

// exports.route = route;

function route(handle, pathname, response) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
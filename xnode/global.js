    /**
 * XNode version 0.0.1
 * Created by mR.Rikky™
 * Date: 6/2/13
 * Time: 2:22 AM
 */

// Object initialization
/**
 * XNode version 0.0.1
 */

/**
 *
 * @module xnode is fully functional with express. Use any express method if you want to.
 *
 * @json config:
 *      The configuration file for the application.
 *      Edit this file to config your application such as: ip, port, database, view engine, ...
 *
 */

var xnode = require('xnode');
var config = require('./config');
var app = xnode(config);

// Router config
/**
 *
 * @function xnode.addRouter(string route_map, string default_route, string default_route_action [, bool is_id_optional]):
 *      Add a new router to the application.
 *
 * Parameters:
 *      @string route_map:
 *          Require.
 *          The regex-like string for route mapping. For more information about route_map syntax
 *          visit: http://nodejs.vn/xnode
 *
 *      @string default_route:
 *          Require.
 *          The string which value is the name of route object when the request url is match the route, but can not
 *          specify the route.
 *
 *      @string default_route_action
 *          Require.
 *          The string which value is the name of route's method when the request url is match the route,
 *          specified the route but does not specify the route's method.
 *
 *      @bool is_id_optional
 *          Optional.
 *          Boolean value specify the additional route id option. If true, route's method handles parameter which value
 *          equal the @id in request url.
 *
 *  To add more route, call the function again with your parameters.
 *
 *  For more information about router, visit http://nodejs.vn/xnode/route
 *
 */
xnode.addRoute('/{route}/{action}/{id}','Home','Index', false); // Default route
// Add more router here.

// Debugging                             s
/**
 *
 * @function xnode.debug([json config]):
 *      Start debug the application. Error messages will be displayed instead of error views
 *
 * Parameters:
 *      @json config:
 *          Optional.
 *          The configuration for application, if null the application will be debugged with default configuration.
 *
 */
//xnode.debug();

// Running
/**
 *
 * @function xnode.run([json config]):
 *      Start the application. Error messages will not be displayed. Error view will be display instead
 *
 * Parameters:
 *      @json config:
 *          Optional.
 *          The configuration for application, if null the application will run with default configuration.
 *
 */
// To run the application instead of debug, comment the "xnode.debug()" script and remove the comment mark below
xnode.run();

// XNode v0.0.1 - 2013. Created by Rikky.



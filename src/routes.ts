/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
    "/auth/new-verification"
]

/** 
* An array of routes that are used for authentication
* These routes will redirect logged in users to /shop
* @type {string[]}
*/
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
]

/** 
* The prefix for API authentication routes
* Routes that start with this prefix are used for API authentication purposes
* @type {string}
*/
export const apiAuthPrefix = "/api/auth";

/**
 * An array of routes that are used to redirect admins to the dashboard
 * @type {string[]}
 */
export const adminRoutes = [
    "/dashboard",
    "/dashboard/employee",
    "/dashboard/notify",
    "/dashboard/user",
    "/dashboard/events"
]

/**
 * The default redirect path after loggin in;
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/shop";
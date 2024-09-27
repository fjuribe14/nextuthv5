/**
 *  array of string
 * defining routes that do not require authentication,
 * including routes for the home page, login, and registration.
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];

/**
 * array of string
 * defining routes that require authentication
 * @type {string[]}
 */
export const authRoutes: string[] = ["/login", "/register", "/new-verification"];

/**
 * array of string
 * defining routes that require authentication
 * @type {string[]}
 */
export const privateRoutes: string[] = ["/settings"];

/**
 * array of string
 * Routes that start with the api prefix are used for authentication
 * @type {string}
 */
export const apiRoutesPrefix: string = "/api/auth";

/**
 * string
 * The default route to redirect to after login
 * @type {string}
 */
export const DEFALUT_LOGIN_REDIRECT: string = "/settings";

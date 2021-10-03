/**
 * strict mode: 'use strict'; before any other statements.
 * 
 * the default, non-strict mode is sometimes referred to as "sloppy mode"
 * strict mode was introduced in ECMAScript 5 as a way to opt in to a restricted variant of JavaScript:
 * 1. Eleminates some JavaScript silent errors by changing them to throw errors.
 * 2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations:
 *  - strict mode code can sometimes be made to run faster than identical code that's not strict mode.
 * 3. Prohibits some syntax likely to be defined in the future versions of ECMAScript.
 * 
 * modules are strict by default:
 * function strict() {}
 * export default strict;
 * 
 * all classes are strict mode.
 * 
 * modern JavaScript best practices is to use strict mode on all JavaScript code.
 */
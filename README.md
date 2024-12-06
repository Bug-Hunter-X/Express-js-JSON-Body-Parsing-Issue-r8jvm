# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue encountered when working with JSON request bodies in Express.js applications.

## Problem
The Express.js application fails to parse the JSON request body, resulting in `req.body` being undefined.  This occurs despite the use of `express.json()` middleware.

## Solution
The solution involves ensuring the `express.json()` middleware is placed before the route handler that expects a JSON body.
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: 'xuc5s53o', // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "sk3FXPhcQ2TNqMO4PT2d9RyhF1v6bwwnsrRcIiJqSAf9WyvuxjaTGfQILSRUawTTi2L7fF96s4m7m2cL99oQbkRqnJL8zx4zJls0MX104XwxQDPgK9iNA0hRhvQS2pX3BY02uHBMBsR9PXhek1TryP2mSlSYiNX3feGd1ikbE47InsfcgiyE"
});

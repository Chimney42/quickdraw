/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {Object} req ExpressJS object containing the received HTTP request.
 * @param {Object} res ExpressJS object containing the HTTP response to send.
 */
exports.predict = (req, res) => {
  res.send(`Hello ${req.body.name || 'World'}!`);
};
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a0d989d555dc5b66af9f550529ef7a1d'),
  },
});

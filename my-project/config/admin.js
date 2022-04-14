module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2a51343a637b0e6789ee0fe5d584c5f1'),
  },
});

const configRoutes = (app) => {
  app.use('/', (req, res) => res.status(200).json({ message: 'OK' }));
};

module.exports = configRoutes;

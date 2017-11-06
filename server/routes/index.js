// routes/index.js
const Board = require('./routesBoard.js');
const List = require('./routesList.js');
const Card = require('./routesCard.js');

module.exports = (server) => {
	server.use('/boards', Board);
	server.use('/lists', List);
	server.use('/cards', Card);
};

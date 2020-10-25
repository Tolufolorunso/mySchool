const mongoose = require('mongoose');

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.DATABASE_LOCAL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	});
	console.log(`mongonDB connected: ${conn.connection.host}`.bgWhite.brightBlue.underline.bold);
};

module.exports = connectDB;

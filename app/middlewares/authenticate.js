const { User } = require("../models/user");
function authenticationByUser(req, res, next) {
	const token = req.header("x-auth");

	if (token) {
		User.findByToken(token)
			.then(user => {
				req.user = user;
				req.token = token;
				next();
			})
			.catch(err => {
				res.send(err);
			});
	} else {
		res.send("token must be provided");
	}
}
module.exports = { authenticationByUser };

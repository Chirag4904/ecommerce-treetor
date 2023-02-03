const usersDatabase = require("./user.mongo");
const { PasswordManager } = require("../services/passwordManager");

async function ifUserExists(user) {
	const existingUser = await usersDatabase.findOne({ email: user.email });
	return existingUser;
}

async function addNewUser(user) {
	try {
		const hashedPassword = await PasswordManager.toHash(user.password);
		const newUser = {
			name: user.name,
			email: user.email,
			password: hashedPassword,
			phone: user.phone,
		};
		const savedUser = await usersDatabase.create(newUser);
		// console.log(savedUser);
		return savedUser;
	} catch (error) {
		console.log(`Could not save user ${err}`);
	}
}

module.exports = { ifUserExists, addNewUser };

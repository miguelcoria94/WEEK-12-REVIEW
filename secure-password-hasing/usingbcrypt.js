const bcrypt = require("bcryptjs")

// you can use bcrypt async or sync

// the HASH method takes in a password to hash and the numer of saltRounds to generate a salt

// the hash method generates the salt


// auto-generate salt based on a number of salts
const saltRounds = 10;

const hash = await bcrypt.hash(password, saltRounds)

// manually generate salt before generateing password digest

const saltRounds2 = 10

const salt = await bcrypt.getSalt(saltRounds2)
const hash = await bcrypt.hash(password, salt);

// in order to login a user with their credentials, you should use bcrypts
// compare method to check whether a user-provided password matches a stored database hash.

const isPassword = await bcrypt.compare(password, hash)



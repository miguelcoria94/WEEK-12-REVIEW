# WEEK-12-REVIEW

### Using Bcrypt to Hash Paawords

* Using BCrypt to hash passwords came from the idea of thinking about how to protect user information
in the worst case scenario

### What is cryptography

* cryptography is a way to use algos and secret keys to keep information secure

* adversaries are third-parties who could possibly fake a user's identity to gain their secret value

* encoding and encrytion are two different processes
(ex. encoding for compressing aaacccbbb a3b3c3, for highly repetitive code)

* encryption is the process of translating something readable into something that looks like nonsense
and being able to translate it from a non-readible state back into something that's readable

### How does encryption work?

* There are two kinds of encryption, symmetric and asymmetric encryption

* symmetric uses one value to determine how to encrypt data

* asymmetric uses two pieces of information called the public and private keys
    * the public key is shared with everyone wanting to encrypt a message for the recipent
    * the private key is used to decrypt the message
    * encypt with public key, decrypt with private key

* an HTTPS connection is an example of asymmetric encryption

### When is it appropriate to use encryption?

* It's appropriate to use encryption to secure over the wire connection between client and server

* also data at rest (i.e. stored in a database) can also be encrypted.

### What is hashing?

* passwords need to be protected at rest, but you dont need the ability to translate a password back into
human readable form. Hashing is a better way of protecting user passwords

* hashing is the process of converting a message of any length into a short fixed-length string

* hashed values cannot be translated back to their orginal input values, you will recieve the same output

### How does hashing work?

* there are many types of hashing functions

* It's important to use cryptographic hashing functions, they minimize hash collisions.

* We are going to be using the BCrypt library which uses the blowfish cipher

* the blowfish cypher is an encryption alogrithm

### What is a "Salt"?

* for when multiple users have the same password

* salting is generating a small reandom string to set of bits known as a salt.

* you then add that salt to your users password before hashing

### When is it appropriate to use hashing?

* hashing is popular for storing passwords

* a hashed password is often referred to as a "password digest"

* when a user creates an account, their password digest is saved to the database

* the actual password is never stored

* you simply hash a provided password and comparte the hash to the stored hash

### overview of sessions

* each http request is independent from other requests that were executed before or after

* after a request is processed and return it forgets about the client

### what are sessions?

* instead of storing data in the cookie itself, a unique identifier known as the session ID is stored

* this session id is linked to an object stored on the server

### why are sessions useful?

* sessions give you a way to identify a series of requests as being connected to the same client

### what are the drawbacks?

* using sessions increases the overhead required to server clients

### What is authentication?

* authentication is the process of identifying a user.

* we authenticate a user with a key and a secret

* a key is the email

* a secret is the password

* a user's account can also contain other info like a bday, phone #, address

### authenticatino process




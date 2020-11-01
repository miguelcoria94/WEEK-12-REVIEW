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


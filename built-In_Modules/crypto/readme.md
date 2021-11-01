# ------------------------------- Crypto Modules -------------------------------

## Introduction
crypto module in node.js is used to provide cryptographic functionalities.It includes a set of wrappers for OpenSSL's hash , HMAC , verify , cipher , decipher and sign functions.

<hr/>

## What is hashing ?

- Hashing is a process of generating a fixed length value from a string using mathematical functions. It is used for providing security.
- Every hash generated using hashing is :

    - Unique : In hashing , for every unique input we will get unique output. we will get the same output for same input no matter how many times you input the same data But if we just slightly change the input it will change the output to a large extent.
    - Fixed length : Hashing algorithms always generate the hash with the same length. The length of input does not affect the length of the output.
    - Irreversible : Generated hashes are irreversible in nature. We can not change the hash to the input text again.

## different hashing algorithms 🔽 
- md5 hashing algorithm
- SHA1 hashing algorithm
- SHA256 hashing algorithm
- SHA512 hashing algorithm

One of the biggest problems with hashing includes the rainbow table which is a precomputed table for reversing cryptographic hash functions.


<hr/>

## What is hmac ?

HMAC ( keyed-hash message authentication code ) is a kind of MAC ( Message authentication code ) which involves performing the hash functions using a secret cryptographic key.

## different HMAC algorithms🔽 
- SHA256 HMAC
- SHA512 HMAC
- md5 HMAC

## [Crypto Properties and Methods ✴ ](https://www.w3schools.com/nodejs/ref_crypto.asp)
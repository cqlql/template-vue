module.exports = {
  "rootDir": "../",
  // "testMatch": [ 
  //   "**/test/?(*.)+(spec|test).[jt]s?(x)"
  //   // "**/?(*.)+(spec|test).[jt]s?(x)"
  // ],
  "testRegex": [
    "/test/unit/.+(test|spec)\\.[jt]sx?$"
  ],
  "moduleNameMapper": {
    "@/(.*)$": "<rootDir>/src/$1"
  }
}
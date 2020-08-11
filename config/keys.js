// module.exports = {
//   mongoURI:"mongodb+srv://admin:YnbNxSw9L6IM3Nzy@upcycle.sdlrk.mongodb.net/Upcycle?retryWrites=true&w=majority",
//   secretOrKey: "9GUrA#6Z'fT05Ao",
// };

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}
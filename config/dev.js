// module.exports = {
//   googleClientID:
//     "70265989829-0t7m7ce5crs6scqd3t0t6g7pv83ncaii.apps.googleusercontent.com",
//   googleClientSecret: "8mkniDQOqacXtlRD3gA4n2az",
//   mongoURI:
//     "mongodb+srv://notayogilee:ovSZNANZKgH6Bjs0@cluster0.e3h9q.mongodb.net/advnode?retryWrites=true&w=majority&appName=Cluster0",
//   cookieKey: "123123123",
// };

// console.log(process.env)

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
};

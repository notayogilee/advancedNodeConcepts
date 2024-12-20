require("dotenv").config();
const Keygrip = require("keygrip");
const keys = require("../../config/keys");
const keygrip = new Keygrip([keys.cookieKey]);

module.exports = (user) => {
  const sessionObject = {
    passport: {
      user: user._id.toString(),
    },
  };

  const session = btoa(JSON.stringify(sessionObject));
  const sig = keygrip.sign(`session=${session}`);

  return { session, sig };
};

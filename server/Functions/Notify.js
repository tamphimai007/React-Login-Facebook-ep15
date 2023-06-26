const axios = require("axios");

exports.notifyLine = async (token, message) => {
  try {
    // code
    const response = await axios({
      method: "POST",
      url: "https://notify-api.line.me/api/notify",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
      data: "message=" + message,
    });
    console.log("notify success ");
  } catch (err) {
    console.log(err);
  }
};

exports.getIPClient = async (req) => {
  const ip = req.connection.remoteAddress;
  const ipV4 = ip.split(":");
  const ipOk = ipV4[ipV4.length - 1];

  return ipOk;
};

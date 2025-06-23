const Page = require("./models/page");

const page = async (req, res) => {
  const page = await Page.create({ name: "fc", completed: true });
  res.send("page");
};

module.exports = { page };

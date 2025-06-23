const Page = require("./models/page");

const getPage = async (req, res) => {
  try {
    const page = await Page.find({ _id: req.params.id });
    res.json(page);
  } catch (error) {
    //console.log(error);
    res.status(404).json({ msj: "pagina no encontrada" });
  }
};

const getAllPages = async (req, res) => {
  try {
    const pages = await Page.find({});
    res.json(pages);
  } catch (error) {
    console.log(error);
  }
};

const createPage = async (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    const page = await Page.create(body);
    res.json(body);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPage, getAllPages, createPage };

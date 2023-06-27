// const { Component } = require("../database.js");
// const { readFile } = require('fs/promises');

// getChildren  x id  x params
const getChildren = async (req, res, next) => {
  try {
    res.send("get children");

    // const children = await Children.findOne({
    //   where: { id: req.params.id },
    // });
    // res.json({ children });
  } catch (error) {
    return next(error);
  }
};

// getChildrenComponents x componentId x params
const getComponentChildrens = async (req, res, next) => {
  try {
    res.send("get childrens by componentId");
    // const childrens = await Component.findOne({
    //   where: { id: req.params.componentId },
    //   include: {
    //     model: Children,
    //     as: ""
    //   }
    // });
    // res.json({ components: childrens });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getChildren,
  getComponentChildrens,
};

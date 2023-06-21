import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Traductor = function Traductor() {
  var data = [{
    nombre: "Gatito 1",
    imagen: "https://placekitten.com/200/200"
  }, {
    nombre: "Gatito 2",
    imagen: "https://placekitten.com/200/200"
  }, {
    nombre: "Gatito 3",
    imagen: "https://placekitten.com/200/200"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Traductor"), data.map(function (item, index) {
    return /*#__PURE__*/React.createElement("article", {
      key: index
    }, /*#__PURE__*/React.createElement("img", {
      src: item.imagen,
      alt: item.nombre
    }), /*#__PURE__*/React.createElement("p", null, item.nombre));
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "comentarios"
  }, "Comentarios:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "comentarios",
    name: "comentarios",
    className: "text-black"
  }));
};
var _default = Traductor;
exports.default = _default;
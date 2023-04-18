/// <reference types="cypress" />

const fs = require('fs-extra');
const path = require('path');


function buscarArquivoDeConfig(arq) {
  const caminho = path.resolve('.', 'cypress', 'config', `${arq}.json`);
  return fs.readJson(caminho);
}
module.exports = (on, config) => {
  const arquivo = config.env.configFile
  return buscarArquivoDeConfig(arquivo);
}

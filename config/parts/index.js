const { devServer } = require('./devserver');
const { page } = require('./page');
const { extractCSS, tailwind, autoprefix } = require('./styles');

module.exports = {
    devServer,
    page,
    extractCSS,
    tailwind,
    autoprefix
}
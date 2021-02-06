// webpack.config.js создаётся с нуля и
// исполняется в среде Node.js

// подключение зависимостей
const path = require(`path`);

// экспорт настройки в Node.js
module.exports = {
    // точка входа сборки
    entry: `./src/index.js`,
    // как собирать
    output: {
        // имя файла на выходе
        filename: `bundle.js`,
        // вставка собранного файла
        path: path.join(__dirname, `public`),
    },
    // директива настройки сервера
    devServer: {
        contentBase: path.join(__dirname, `public`),
        open: false,
        inline: false,
        port: 1337,
    },
    // преобразование файлов, правила для сервера
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`,
                }
            },
        ],
    },
    // расширения файлов для сборки (обязательный параметр в новой версии webpack)
    resolve: {
        extensions: [`.js`, `.jsx`],
    },
    // работа с компилирующим кодом
    devtool: `source-map`,
};
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
    // директива настройки сервера - webpackDevServer
    devServer: {
        // от куда забирать файл (index.html)
        contentBase: path.join(__dirname, `public`),
        // открывать страницу при старте
        open: true,
        // автоматическое обновление
        inline: false,
        port: 1337,
    },
    // преобразование файлов
    module: {
        // правила для сервера
        rules: [
            {   // если JS или JSX - применяем правило
                test: /\.(js|jsx)$/,
                // путь, где искать не нужно
                exclude: /node_modules/,
                // инструмент для работы с файлами
                use: {
                    loader: `babel-loader`,
                }
            },
        ],
    },
    // разрешить расширения файлов для сборки (обязательный параметр в новой версии webpack)
    resolve: {
        extensions: [`.js`, `.jsx`],
    },
    // помогает работать с компилируемым кодом
    devtool: `source-map`,
};
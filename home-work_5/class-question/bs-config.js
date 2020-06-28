// lite-server под капотом использует BrowserSync
// отключаем по максимуму любые автоосвежения
// т.е. страница бцдет освежаться и когда проект еще не собран
// освежать страницу будем сами

module.exports = {
    "notify": false, // не показывать в браузере черное окошко BrowserSync
    "ui": false, // не открывать отдельный порт для управления BrowserSync
    "files": "*.none" // следить за изменением таких файлов, т.е. никаких
};
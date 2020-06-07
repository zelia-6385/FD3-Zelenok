1. Переработать проект под сборку npm.
2. Разбить проект на модули (каждый компонент в отдельном файле).
3. Переработать описание классов компонентов на синтаксис ES6.
4. Использовать JSX.
5. Перечень товаров вынести в JSON-файл.
6. Доработать поведение:
    6.1. При щелчке на строку с товаром она не только выделяется цветом, но и снизу от таблицы товаров отображается карточка товара.
    6.2. В каждой строке с товаром - кнопки "редактировать" и "удалить". Ниже списка товаров - кнопка "новый".
    6.3. По нажатию кнопки "редактировать" карточка товара переходит в режим редактирования с кнопками "сохранить" и "отмена":
        6.3.1. При любых изменениях полей валидируется правильное заполнение полей (по любым правилам); сообщение об ошибках отображаются возле неправильно заполненных полей;
        6.3.2. При невалидном заполнении полей кнопка "сохранить" недоступна;
        6.3.3. Если кликнуть на другую строку - должен включиться режим просмотра карточки этого товара (если в редактируемую сейчас карточку не были внесены изменения, иначе клики просто не срабатывают);
        6.3.4. Если кликнуть на кнопку "редактировать" другого товара - сразу включается редактирование карточки этого товара (если в редактируемую сейчас карточку не были внесены изменения, иначе клики просто не срабатывают);
        6.3.5. Все кнопки "удалить" и кнопка "новый" должны быть запрещены.
    6.4 По нажатию кнопки "новый" карточка товара переходит в режим добавления (пустая форма) с кнопками "добавить" и "отмена":
        6.4.1. Валидация работает аналогично;
        6.4.2. Клики по строкам товаров не должны ничего делать;
        6.4.3. Выделенной цветом строки товара не должно быть;
        6.4.4. Все кнопки "удалить", "редактировать" и "новый" должны быть запрещены;
        6.4.5. Кнопка "добавить" не должна нажиматься, если поля не заполнены;

Примечания:
    1. Валидация полей - пустое = невалидное;
    2. При невалидном значении можно уйти с поля;
    3. Проверка состояния элементов происходит при сравнении значений с полями state;
    4. Карточка товара может быть одним компонентом или 2 компонента = карточка + валидируемая карточка;
    5. Props для компонента - либо все свойства поотдельности, либо id товара и массив товаров;
    6. Props mode отвечает за внешний вид карточки;
    7. Если использовать один компонент, то должен быть if при отображении: либо  input, либо span;
    8. Для передачи отредактированной карточки в таблицу нужно вызвать колбэк и передать данные в таблицу вместе с id для распознавания изменяемого товара;
    9. Для новой карточки необходим другой колбэк;
    10. Запрещение кнопок производится через state - true/false. Метод провепяет поле при уходе с него и в зависимости от результата изменяет state. Кнопка деблокируется при всех true;
    11. Значения полей должны сохраняться в state для будущей передачи;
    12. Можно валидировать все поля одним методом, который запускается по blur и проверяет наличие содержимого во всех полях;
    13. В state должны быть помещены 4 поля для выведения сообщений о невалидном input;
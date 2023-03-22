[![Build status](https://ci.appveyor.com/api/projects/status/teg79s6smq2hbjpj/branch/main?svg=true)](https://ci.appveyor.com/project/marinaustinovich/ahj-homeworks-testing/branch/main)

deployment: https://marinaustinovich.github.io/ahj-homeworks-testing/

### Credit Card Validator

#### Легенда

Вам пришла задача: сделать виджет, позволяющий вводить номер карты. Для ознакомления можете почитать о PCI DSS.

Общий вид виджета должен выглядеть так:

![](./pic/validator.png)

Скриншот взят с [сайта](http://www.validcreditcardnumber.com).

Вам нужно провести исследовательскую работу и выяснить, на базе чего определяется, какой платёжной системе принадлежит определённая карта (не забыдь о «Мире»).

#### Описание

Используется [алгоритм](https://en.wikipedia.org/wiki/Luhn_algorithm) для проверки валидности номера карты.

Информация об использованных изображениях размещены в файле `licenses.txt` в корне сайта.

Логика проверки номера карты, выяснения принадлежности определённой платёжной системе и взаимодействия с DOM разделена.

Автотесты на функции проверки номера карты и принадлежности к определённой платёжной системе.

Убедитесь, что всё работает при прогоне тестов в AppVeyor.

**Для поиска изображений использовался сервис [findicons.com](https://findicons.com)**.

---

### Puppeteer

Подключен Puppeteer и проверено взаимодействие для двух различных вариантов:
1. Ввод валидного номера карты.
1. Ввод невалидного номера карты.

---

### JSDOM 


Подключите JSDOM и реализованва проверк с использованием `jest.each`.

# AngularNeobank

**Запуск проекта** 
- npm install
- ng serve
- перейти на `http://localhost:4200/`
- docker-compose up – build запустить контейнер (backend)

**Макет**
https://neostudy.neoflex.ru/my/courses.php

*Логика работы*
1. Пользователь заполняет форму (prescoring) на странице loan и после отправки данных создаётся уникальный id заявки.
2. Начинается обработка prescoring заявки и есть она проходит, то пользователю становятся доступны 4 предложения на выбор (loanOffer) с разными условиями (например без страховки, со страховкой, с зарплатным клиентом, со страховкой и зарплатным клиентом).
3. Пользователь выбирает одно из предложений и отправляется запрос, после чего его заявка сохраняется.
4. После создание пользователю показывается сообщение о том, что необходимо дождаться ответа по заявке на почту.
5. На почту клиенту приходит письмо с текстом "Ваша заявка предварительно одобрена, завершите оформление".
6. В письме клиент переходит на страницу loan/id и заполняет вторую форму, где указывает свои паспортные данные и работу. После отправки формы, показывается сообщение, что ответ по заявке придёт на почту. Также сразу после отправки запускается таймер на 10 секунд и  происходит редирект на главную страницу если статус ответа 'CC_DENIED' или на loan/:id/document если любой другой статус.
7. Происходит scoring данных, бэкенд рассчитывает все данные по кредиту (ПСК, график платежей и тд). После валидации данных пользователю приходит письмо на почту с одобрением или отказом. Если кредит одобрен, то в письме присутствует ссылка на запрос "Сформировать документы", loan/id/document.
8. Перейдя по ссылке пользователь отрисовывается график платежей от первого до последнего месяца, если пользователь согласен, он нажимает на checkbox и отправляет документы на формирование, после на этой странице показывается текст, что необходимо перейти в почту.
9. Пользователю на почту приходят документы для подписания и ссылку на запрос на согласие с условиями. При переходе по ссылке loan/id/document/sign пользователь нажимает на checkbox и отправляет документы на подписание. Пользователь может отказаться от условий или согласиться. После отправки опять показывается надпись с предложением перейти в почту.
10. Если пользователь согласился, то на почту отправляется код подтверждения, при переходе на loan/id/code пользователь вводит code. Если введённый код неверный, то показывается сообщение с ошибкой. Если полученный код совпадает с отправленными, то выводится экран с поздравлением и оформление кредита заканчивается.

/loan -> loan/:id -> loan/:id/document -> loan/:id/document/sign -> loan/:id/code

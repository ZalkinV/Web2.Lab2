# Лабораторная работа 2

Создать приложение с использованием библиотеки React.

При первой загрузке страницы происходит запрос пользователя на получение данных о геолокации с использованием HTML5 Geolocation API. Если пользователь соглашается предоставить данные о геолокации – получаем из внешнего API данные о погоде. Если нет – запрашиваем информацию для города по умолчанию (город по умолчанию можно выбрать самостоятельно). Информация о городе, данные о погоде (температура, ветер, давление, влажность), иконка погоды, координаты отрисовываются на странице в соответствии с макетом.  
Иконка и все необходимые данные есть в [API](https://openweathermap.org).

В интерфейсе также есть кнопка с повторным запросом геолокации пользователя.
У пользователя есть возможность добавления и удаления городов в избранное. Информация о погоде отображается для всех городов из избранного в соответствии с макетом. Избранное сохраняется в LocalStorage.

Пока происходит загрузка данных по конкретному городу/локации – показываем loader и/или сообщение об ожидании загрузки данных.

Работа с глобальным состоянием приложения (например, список избранных городов) реализуется с помощью Redux.  
Локальное состояние компонента (например, состояние ожидания загрузки данных) – через локальный state компонента.

![Пример 1](https://sun9-22.userapi.com/c852020/v852020713/1e0fdf/JDeAOW3ViWA.jpg)

![Пример 2](https://sun9-67.userapi.com/c852020/v852020713/1e0fd6/NBw_fcx_lTg.jpg)

В папке Popup находятся .js и .css файлы для работы библиотеки , которая при клику по кнопке “play” открывает “popup” с видео с ютуба.

Закрытие “popup” происходит при клике по кнопке “close” или по нажатию на клавишу “esc”.

При открытом popup, фокусировка при нажатии клавиши tab проходит только внутри его.

В классе реализованы следующие возможности:

-тип контента, который можно отобразить в popup (свойство type, может принимать значения "video" и "text"). В случае если type="text", то html контента необходимо передавать в свойство textTemplate. Если type="video" - то необходимо свойство videoId;
Отдельные типы контента сделала так как размер iframe для видео с youtube должен иметь соотношение ширины/высоты равное 16/9. При загрузке popup рассчитываются размеры контейнера в котором лежит iframe с видео (так же срабатывает пересчет и на resize); 

-так же есть возможность передавать callback на открытие (onOpen), закрытие (onClose) и на отключение работы библиотеки (onDestroy);

Реализовала lazyload для рендеринга изображений в том числе фоновых (использовала в верстке только background-image, но функционал сработает и для lazyload img).

При реалтзации навигации по popup с помощью tab правильного решения не нашла.
Работает за счет "костыля" - в шаблон с видео добавила инпут, скрытый стилями, за счет которого фокус с popup не уходит.
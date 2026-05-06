// === База событий фестиваля «Фрактальная Одиссея», 23 мая 2026 ===
//
// ЕДИНСТВЕННЫЙ источник правды о программе. Подключается синхронно через
//     <script src="festival-data.js"></script>
// в index.html и используется админ-страницей programmer.html.
//
// СТРУКТУРА:
//   _meta          — версия, история изменений
//   _howto         — правила редактирования
//   venues         — площадки
//   categories     — семь зафиксированных категорий
//   subcategories  — для music/cinema/art (sub-уровень в Аполлонии)
//   time_slots     — временные интервалы с адресом в папоротнике
//   events         — список всех событий
//   exhibits       — постоянные арт-объекты вне таймлайна

window.FESTIVAL_DATA = {
  "_meta": {
    "version": "2026-05-06-v12",
    "comment": "База событий фестиваля «Фрактальная Одиссея», 23 мая 2026. Структура: time-slots → events → venues → categories. Поля display в venues и categories — то что видит пользователь. Поля id — внутренние ключи, скучные и стабильные, не меняются при ребрендинге.",
    "changes_v2": "Добавлено поле apollo_slot для каждого события (позиция внутри круга-категории). Возвращены Brinstar/Spiral Fractal с status=tentative (вместо абстрактных music-3/music-4). Расширен _howto.",
    "changes_v3": "Удалён placeholder stage-extra в popsci (события не будет). music-rap: speaker → Вадим. dance-program: category social → music, apollo_slot big-3 → ear-2. Новое событие social-rosetka: нетворкинг от бюро «Розетка», apollo_slot big-3.",
    "changes_v4": "Добавлен слой subcategories для music/cinema/art. venues получили поле apollo_label. events music/art получили поле subcategory.",
    "changes_v5": "Sub-cat music labels берутся из venue.display (Мандельброт/Кантор/Серпинский). music-rap (Влад Горелов) перемещён на courtyard.",
    "changes_v6": "Кантор и Серпинский поменяны местами: big_bar=Серпинский (большой бар), courtyard=Кантор (двор). Mandelbrot (главная сцена) не тронут. _howto дополнен описанием поля subcategory.",
    "changes_v7": "Введён массив exhibits для постоянных арт-объектов вне таймлайна (галерея/инсталляции/медиа-арт). Добавлен interlude-слот на главной сцене 17:00-17:30. inst-plato перенесён из events в exhibits как галерея.",
    "changes": " | v7: исправлена категоризация (Сидько→инсталляция, Андрей→experiment-станция). Добавлены: Зайцева (workshop), Алина (social), Явь подтверждено.",
    "changes_v8": "mc-theremin → experiment без apollo_slot. media-yav привязан к app-28 (Анастасия Владычкина «Внутренняя спираль»).",
    "changes_v9": "Добавлены slot-interlude-2 (18:30-19:00) и slot-interlude-3 (20:00-20:30) — потенциальные слоты для короткометражек между лекциями. Интерлюды теперь относятся к cinema-категории.",
    "changes_v10": "Финальная версия для сегодняшнего deploy: добавлены Ася (Фрактальные витражи), TBA-плейсхолдеры на cinema-слоты, интерлюды и дискуссию. Размещены social-rosetka и social-tochka-nol. Восстановлены legacy id (inst-squirrel, inst-polyhedral, inst-plato, inst-fractal-projection) для совместимости с захардкоженным папоротником в index.html.",
    "changes_v11": "Все 12 art-экспонатов вернулись в events с уникальными apollo_slot. Теперь круг ИСКУССТВО на сайте показывает 12 произведений. Squirrel получил kind=installation в exhibits.",
    "changes_v12": "Кинопрограмма наполнена: 4 короткометражки в субкат short (3 поставлены в интерлюды, 4-я ждёт слота 1 ч), 10 анимаций в субкат animation (без timeline-слотов, заглушки лайнапа), 4 полнометражных в субкат feature (Pi + 3 документалки). Это первичный лайнап, конкретные названия и авторы уточняются."
  },
  "venues": {
    "library": {
      "display": "Библиотека Достоевского",
      "short": "Библиотека",
      "note": "Чистопрудный 23, малый зал",
      "lanes": 1
    },
    "main_stage": {
      "display": "Мандельброт",
      "short": "Мандельброт",
      "note": "главная сцена клуба Лахесис",
      "apollo_label": "главная сцена",
      "lanes": 1
    },
    "big_bar": {
      "display": "Серпинский",
      "short": "Серпинский",
      "note": "большой бар",
      "apollo_label": "большой бар",
      "lanes": 2
    },
    "small_bar": {
      "display": "Жюлиа",
      "short": "Жюлиа",
      "note": "малый бар",
      "lanes": 1
    },
    "courtyard": {
      "display": "Кантор",
      "short": "Кантор",
      "note": "общий двор",
      "apollo_label": "двор",
      "lanes": 1
    }
  },
  "categories": {
    "popsci": {
      "display": "научпоп",
      "size": "big",
      "comment": "лекции, выступления, открытые форматы"
    },
    "music": {
      "display": "музыка",
      "size": "big",
      "comment": "сеты, концерты, инструменты"
    },
    "art": {
      "display": "искусство",
      "size": "big",
      "comment": "инсталляции, объекты, проекции"
    },
    "workshop": {
      "display": "мастерские",
      "size": "big",
      "comment": "что-то делать руками, чему-то научиться"
    },
    "experiment": {
      "display": "эксперименты",
      "size": "big",
      "comment": "интерактивные станции, эксперименты, наблюдение"
    },
    "cinema": {
      "display": "кино",
      "size": "big",
      "comment": "короткометражки, видеоарт"
    },
    "social": {
      "display": "общение",
      "size": "big",
      "comment": "коллективные действия: дискуссии, квизы, совместное решение задач, нетворкинг, спид-дейтинг, перформансы, танцпол. Критерий: люди делают что-то вместе, в отличие от лекции, где есть выступающий и слушатели."
    }
  },
  "time_slots": {
    "slot-evdokimov": {
      "fern_address": [
        3
      ],
      "start": "14:00",
      "end": "15:00",
      "label_for_zoom": "Михаил Евдокимов · 14:00",
      "tool_label": "Библиотека 1"
    },
    "slot-tarasevich": {
      "fern_address": [
        2
      ],
      "start": "15:00",
      "end": "16:00",
      "label_for_zoom": "Григорий Тарасевич · 15:00",
      "tool_label": "Библиотека 2"
    },
    "slot-gelfand": {
      "fern_address": [
        1,
        2
      ],
      "start": "16:00",
      "end": "17:00",
      "label_for_zoom": "Михаил Гельфанд · 16:00",
      "tool_label": "Лекция 1"
    },
    "slot-stations-1": {
      "fern_address": [
        1,
        3
      ],
      "start": "16:30",
      "end": "17:30",
      "label_for_zoom": "Первый блок · 16:30",
      "tool_label": "Станции 1"
    },
    "slot-rajgorodski": {
      "fern_address": [
        1,
        1,
        2
      ],
      "start": "17:30",
      "end": "18:30",
      "label_for_zoom": "Андрей Райгородский · 17:30",
      "tool_label": "Лекция 2"
    },
    "slot-stations-2": {
      "fern_address": [
        1,
        1,
        3
      ],
      "start": "17:30",
      "end": "18:30",
      "label_for_zoom": "Второй блок · 17:30",
      "tool_label": "Станции 2"
    },
    "slot-skripchenko": {
      "fern_address": [
        1,
        1,
        1,
        2
      ],
      "start": "19:00",
      "end": "20:00",
      "label_for_zoom": "Александра Скрипченко · 19:00",
      "tool_label": "Лекция 3"
    },
    "slot-stations-3": {
      "fern_address": [
        1,
        1,
        1,
        3
      ],
      "start": "18:30",
      "end": "19:30",
      "label_for_zoom": "Третий блок · 18:30",
      "tool_label": "Станции 3"
    },
    "slot-stations-4": {
      "fern_address": [
        1,
        1,
        1,
        1,
        3
      ],
      "start": "19:30",
      "end": "20:30",
      "label_for_zoom": "Четвёртый блок · 19:30",
      "tool_label": "Станции 4"
    },
    "slot-music-1": {
      "fern_address": [
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "start": "22:00",
      "end": "23:00",
      "label_for_zoom": "Главная сцена · 22:00",
      "tool_label": "Музыка 1"
    },
    "slot-music-2": {
      "fern_address": [
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "start": "23:00",
      "end": "00:00",
      "label_for_zoom": "Главная сцена · 23:00",
      "tool_label": "Музыка 2"
    },
    "slot-music-3": {
      "fern_address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "start": "00:00",
      "end": "01:00",
      "label_for_zoom": "Главная сцена · 00:00",
      "tool_label": "Музыка 3"
    },
    "slot-music-4": {
      "fern_address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "start": "01:00",
      "end": "02:00",
      "label_for_zoom": "Главная сцена · 01:00",
      "tool_label": "Музыка 4"
    },
    "slot-music-parallel-1": {
      "fern_address": [
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "start": "22:00",
      "end": "23:00",
      "label_for_zoom": "Малая сцена · 22:00",
      "tool_label": "Параллель 1"
    },
    "slot-music-parallel-2": {
      "fern_address": [
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "start": "23:00",
      "end": "00:00",
      "label_for_zoom": "Малая сцена · 23:00",
      "tool_label": "Параллель 2"
    },
    "slot-music-parallel-3": {
      "fern_address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "start": "00:00",
      "end": "01:00",
      "label_for_zoom": "Малая сцена · 00:00",
      "tool_label": "Параллель 3"
    },
    "slot-music-parallel-4": {
      "fern_address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "start": "01:00",
      "end": "02:00",
      "label_for_zoom": "Малая сцена · 01:00",
      "tool_label": "Параллель 4"
    },
    "slot-dance": {
      "fern_address": "tail",
      "start": "02:00",
      "end": "04:00",
      "label_for_zoom": "Танцпол · 02:00",
      "tool_label": "Танцпол"
    },
    "slot-discussion": {
      "fern_address": [
        1,
        1,
        1,
        1,
        2
      ],
      "start": "20:30",
      "end": "21:30",
      "label_for_zoom": "Дискуссия · 20:30",
      "tool_label": "Дискуссия"
    },
    "slot-cinema-1": {
      "fern_address": [
        3,
        1
      ],
      "start": "19:00",
      "end": "20:00",
      "label_for_zoom": "Кино 1 · 19:00",
      "tool_label": "Кино 1"
    },
    "slot-cinema-2": {
      "fern_address": [
        3,
        2
      ],
      "start": "20:00",
      "end": "21:00",
      "label_for_zoom": "Кино 2 · 20:00",
      "tool_label": "Кино 2"
    },
    "slot-interlude-1": {
      "fern_address": [
        1,
        1,
        4
      ],
      "start": "17:00",
      "end": "17:30",
      "label_for_zoom": "Перебив · 17:00",
      "tool_label": "Короткометражки 1"
    },
    "slot-interlude-2": {
      "fern_address": [
        1,
        1,
        1,
        4
      ],
      "start": "18:30",
      "end": "19:00",
      "label_for_zoom": "Перебив · 18:30",
      "tool_label": "Короткометражки 2"
    },
    "slot-interlude-3": {
      "fern_address": [
        1,
        1,
        1,
        1,
        4
      ],
      "start": "20:00",
      "end": "20:30",
      "label_for_zoom": "Перебив · 20:00",
      "tool_label": "Короткометражки 3"
    }
  },
  "events": [
    {
      "id": "talk-evdokimov",
      "status": "confirmed",
      "title": "Задачки «Квантика»",
      "subtitle": "решаем задачи вместе с залом",
      "speaker": "Михаил Евдокимов",
      "speaker_role": "автор задач, популяризатор математики",
      "category": "social",
      "apollo_slot": "big-1",
      "venue": "library",
      "slot": "slot-evdokimov",
      "duration_override": null,
      "description": "Утренний пролог в библиотеке: классные задачи журнала «Квантик», которые решаются всем залом совместно. Можно прийти с детьми — это семейная часть программы."
    },
    {
      "id": "talk-tarasevich",
      "status": "confirmed",
      "title": "Научпоп-квиз",
      "subtitle": "командный квиз",
      "speaker": "Григорий Тарасевич",
      "speaker_role": "научный журналист",
      "category": "social",
      "apollo_slot": "big-2",
      "venue": "library",
      "slot": "slot-tarasevich",
      "duration_override": null,
      "description": "Командный квиз на математико-естественнонаучные темы — играют команды зала. Семейная утренняя часть в библиотеке Достоевского."
    },
    {
      "id": "social-rosetka",
      "status": "tentative",
      "title": "Нетворкинг",
      "subtitle": null,
      "speaker": "Бюро «Розетка»",
      "speaker_role": "образовательное бюро",
      "category": "social",
      "apollo_slot": "mid-1",
      "venue": "big_bar",
      "slot": "slot-discussion",
      "duration_override": null,
      "description": "Программа знакомств и совместных активностей. Готовится бюро «Розетка». Время и место уточняются."
    },
    {
      "id": "talk-gelfand",
      "status": "confirmed",
      "title": "Иерархия бесконечностей",
      "subtitle": null,
      "speaker": "Михаил Гельфанд",
      "speaker_role": "биоинформатик",
      "category": "popsci",
      "apollo_slot": "big-1",
      "venue": "main_stage",
      "slot": "slot-gelfand",
      "duration_override": null,
      "description": "О генетике, эволюции и о том, как устроена наука."
    },
    {
      "id": "talk-rajgorodski",
      "status": "confirmed",
      "title": "Лекция Андрея Райгородского",
      "subtitle": null,
      "speaker": "Андрей Райгородский",
      "speaker_role": "математик, директор ФПМИ МФТИ",
      "category": "popsci",
      "apollo_slot": "big-2",
      "venue": "main_stage",
      "slot": "slot-rajgorodski",
      "duration_override": null,
      "description": "Теория графов, комбинаторика. Тема будет уточнена ближе к фестивалю."
    },
    {
      "id": "talk-skripchenko",
      "status": "confirmed",
      "title": "Лекция Александры Скрипченко",
      "subtitle": null,
      "speaker": "Александра Скрипченко",
      "speaker_role": "математик",
      "category": "popsci",
      "apollo_slot": "big-3",
      "venue": "main_stage",
      "slot": "slot-skripchenko",
      "duration_override": null,
      "description": "О том, как простые правила могут породить бесконечно сложную структуру. Динамические системы."
    },
    {
      "id": "puzzle-fractal-3d",
      "status": "confirmed",
      "title": "Сделай 3D-фрактал из бумаги",
      "subtitle": null,
      "speaker": "Полина Романова",
      "speaker_role": null,
      "category": "workshop",
      "apollo_slot": "big-1",
      "venue": "big_bar",
      "slot": "slot-stations-1",
      "duration_override": null,
      "description": "Ножницы, лист А4, инструкция. За 5–10 минут — фрактальная модель в руках. Можно собрать дома ещё."
    },
    {
      "id": "mc-calligraphy",
      "status": "confirmed",
      "title": "Каллиграфия как фрактал",
      "subtitle": null,
      "speaker": "Наташа Евдокимова",
      "speaker_role": null,
      "category": "workshop",
      "apollo_slot": "big-3",
      "venue": "big_bar",
      "slot": "slot-stations-1",
      "duration_override": null,
      "description": "Базовые черты, точки, линии. Из них — иероглифы. Простота порождает сложность через повторение."
    },
    {
      "id": "obs-diagnostics",
      "status": "confirmed",
      "title": "Эстетика в диагнозах",
      "subtitle": null,
      "speaker": "Дария",
      "speaker_role": null,
      "category": "experiment",
      "apollo_slot": "big-1",
      "venue": "small_bar",
      "slot": "slot-stations-1",
      "duration_override": null,
      "description": "Рисуночные методики, которыми психиатрия выявляет психические расстройства. Самоподобие как клинический инструмент."
    },
    {
      "id": "puzzle-engineering-origami",
      "status": "confirmed",
      "title": "Инженерное оригами",
      "subtitle": null,
      "speaker": "Полина Романова",
      "speaker_role": null,
      "category": "workshop",
      "apollo_slot": "big-2",
      "venue": "big_bar",
      "slot": "slot-stations-2",
      "duration_override": null,
      "description": "Складные конструкции из бумаги, использующиеся в инженерии — солнечные панели, медицинские стенты. Складывание по математическим правилам."
    },
    {
      "id": "mc-tie-dye",
      "status": "confirmed",
      "title": "Тай-дай: космические яйца",
      "subtitle": null,
      "speaker": "Ольга",
      "speaker_role": null,
      "category": "workshop",
      "apollo_slot": "mid-1",
      "venue": "courtyard",
      "slot": "slot-stations-2",
      "duration_override": null,
      "description": "Окрашивание тканей с фрактальными разводами. На выходе — узор, никогда не повторяющийся."
    },
    {
      "id": "mc-theremin",
      "status": "confirmed",
      "title": "Терменвокс: попробовать самому",
      "subtitle": null,
      "speaker": "Лора Заиконникова",
      "speaker_role": null,
      "category": "experiment",
      "apollo_slot": null,
      "venue": "small_bar",
      "slot": "slot-stations-2",
      "duration_override": null,
      "description": "Подойти к инструменту, поиграть руками в воздухе. К Петру Термену готовиться никак не нужно — просто можно попробовать."
    },
    {
      "id": "puzzle-graphs-evolution",
      "status": "confirmed",
      "title": "Эволюция графов",
      "subtitle": null,
      "speaker": "Александр Николаичев",
      "speaker_role": null,
      "category": "experiment",
      "apollo_slot": "big-3",
      "venue": "small_bar",
      "slot": "slot-stations-3",
      "duration_override": null,
      "description": "Интерактивная демонстрация — как графы растут, ломаются, перестраиваются. Игра с динамикой связей."
    },
    {
      "id": "mc-fractal-stained-glass",
      "status": "confirmed",
      "title": "Фрактальные витражи",
      "subtitle": null,
      "speaker": "Ася",
      "speaker_role": null,
      "category": "workshop",
      "apollo_slot": "mid-2",
      "venue": "big_bar",
      "slot": "slot-stations-3",
      "duration_override": null,
      "description": "Витражи во фрактальной геометрии. Можно сделать свой и забрать."
    },
    {
      "id": "station-4-1",
      "status": "placeholder",
      "title": "Станция 4.1",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "category": "experiment",
      "apollo_slot": "mid-2",
      "venue": "big_bar",
      "slot": "slot-stations-4",
      "duration_override": null,
      "description": null
    },
    {
      "id": "station-4-2",
      "status": "placeholder",
      "title": "Станция 4.2",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "category": "workshop",
      "apollo_slot": "mid-3",
      "venue": "small_bar",
      "slot": "slot-stations-4",
      "duration_override": null,
      "description": null
    },
    {
      "id": "music-termen",
      "status": "confirmed",
      "title": "Сет Петра Термена",
      "subtitle": "терменвокс",
      "speaker": "Пётр Термен",
      "speaker_role": "музыкант, терменвокс",
      "category": "music",
      "apollo_slot": "big-1",
      "venue": "main_stage",
      "slot": "slot-music-1",
      "duration_override": null,
      "description": "Музыкант играет руками в воздухе. Инструмент, которому больше ста лет (его прадед — Лев Термен — изобретатель). Музыка ближе к академической.",
      "subcategory": "main_stage"
    },
    {
      "id": "music-rap",
      "status": "confirmed",
      "title": "Научно-технический рэп",
      "subtitle": null,
      "speaker": "Влад Горелов",
      "speaker_role": "музыкант, научно-технический рэп",
      "category": "music",
      "apollo_slot": "big-1",
      "venue": "courtyard",
      "slot": "slot-music-2",
      "duration_override": null,
      "description": "Музыкальная программа переходного интенсива между Терменом и ночной танцевальной частью.",
      "subcategory": "courtyard"
    },
    {
      "id": "music-brinstar",
      "status": "tentative",
      "title": "Brinstar",
      "subtitle": null,
      "speaker": "Brinstar",
      "speaker_role": "музыкант",
      "category": "music",
      "apollo_slot": "big-3",
      "venue": "main_stage",
      "slot": "slot-music-3",
      "duration_override": null,
      "description": "Музыкальный сет в ночной части программы. Подробности уточняются.",
      "subcategory": "main_stage"
    },
    {
      "id": "music-spiral-fractal",
      "status": "tentative",
      "title": "Spiral Fractal",
      "subtitle": null,
      "speaker": "Spiral Fractal",
      "speaker_role": "музыкант",
      "category": "music",
      "apollo_slot": "center",
      "venue": "main_stage",
      "slot": "slot-music-4",
      "duration_override": null,
      "description": "Музыкальный сет в поздней ночной части. Подробности уточняются.",
      "subcategory": "main_stage"
    },
    {
      "id": "music-parallel-1",
      "status": "placeholder",
      "title": "Малая сцена 1",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "category": "music",
      "apollo_slot": "mid-1",
      "venue": "small_bar",
      "slot": "slot-music-parallel-1",
      "duration_override": null,
      "description": null,
      "subcategory": "big_bar"
    },
    {
      "id": "music-parallel-2",
      "status": "placeholder",
      "title": "Малая сцена 2",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "category": "music",
      "apollo_slot": "mid-2",
      "venue": "small_bar",
      "slot": "slot-music-parallel-2",
      "duration_override": null,
      "description": null,
      "subcategory": "big_bar"
    },
    {
      "id": "music-parallel-3",
      "status": "placeholder",
      "title": "Малая сцена 3",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "category": "music",
      "apollo_slot": "mid-3",
      "venue": "small_bar",
      "slot": "slot-music-parallel-3",
      "duration_override": null,
      "description": null,
      "subcategory": "big_bar"
    },
    {
      "id": "music-parallel-4",
      "status": "placeholder",
      "title": "Малая сцена 4",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "category": "music",
      "apollo_slot": "ear-1",
      "venue": "small_bar",
      "slot": "slot-music-parallel-4",
      "duration_override": null,
      "description": null,
      "subcategory": "big_bar"
    },
    {
      "id": "dance-program",
      "status": "placeholder",
      "title": "Танцевальная программа",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "category": "music",
      "apollo_slot": "ear-2",
      "venue": "main_stage",
      "slot": "slot-dance",
      "duration_override": null,
      "description": "Открытый танцпол, продолжается до закрытия фестиваля.",
      "subcategory": "main_stage"
    },
    {
      "id": "mc-fractal-tiles",
      "status": "confirmed",
      "title": "Фрактал-Ателье: напечатай свой тайлинг",
      "speaker": "Татьяна Зайцева",
      "category": "workshop",
      "apollo_slot": null,
      "venue": "courtyard",
      "slot": "slot-stations-4",
      "description": "Печать на ткани/бумаге фрактальных замощений — разных тайлингов, сгенерированных аффинными растяжениями."
    },
    {
      "id": "social-tochka-nol",
      "status": "tentative",
      "title": "Точка-ноль (по Хармсу)",
      "speaker": "Алина Асомния",
      "category": "social",
      "apollo_slot": "mid-2",
      "venue": null,
      "slot": null,
      "description": "Музыкальный спектакль с интерактивной возможностью для зрителей влиять на звук."
    },
    {
      "id": "discussion-tba",
      "status": "tentative",
      "title": "Дискуссия · TBA",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "category": "social",
      "apollo_slot": "big-3",
      "venue": "main_stage",
      "slot": "slot-discussion",
      "duration_override": null,
      "description": "Тема дискуссии и состав участников будут объявлены."
    },
    {
      "id": "art-plato",
      "status": "tentative",
      "title": "Артефакты Плато",
      "subtitle": null,
      "speaker": "Александр Солеев",
      "speaker_role": null,
      "category": "art",
      "subcategory": "art",
      "apollo_slot": "big-1",
      "venue": "big_bar",
      "slot": "slot-stations-3",
      "description": "Мыльные плёнки на проволочных рамках. Минимальные поверхности. Деталь в заявке app-9."
    },
    {
      "id": "art-fluoro",
      "status": "tentative",
      "title": "Андрей Флюоро",
      "subtitle": null,
      "speaker": "Андрей Флюоро",
      "speaker_role": null,
      "category": "art",
      "subcategory": "art",
      "apollo_slot": "big-2",
      "venue": null,
      "slot": null,
      "description": "Художник, идея от команды. Заявки в OpenCall нет — нужно дозаполнить."
    },
    {
      "id": "art-string-1",
      "status": "tentative",
      "title": "String Art (художник 1)",
      "subtitle": null,
      "speaker": "(уточнить)",
      "speaker_role": null,
      "category": "art",
      "subcategory": "art",
      "apollo_slot": "big-3",
      "venue": null,
      "slot": null,
      "description": "String Art, первый из двух художников. Идея от команды."
    },
    {
      "id": "art-string-2",
      "status": "tentative",
      "title": "String Art (художник 2)",
      "subtitle": null,
      "speaker": "(уточнить)",
      "speaker_role": null,
      "category": "art",
      "subcategory": "art",
      "apollo_slot": "mid-1",
      "venue": null,
      "slot": null,
      "description": "String Art, второй из двух художников. Идея от команды."
    },
    {
      "id": "art-other-spaces",
      "status": "tentative",
      "title": "Свет иных пространств",
      "subtitle": null,
      "speaker": "Пётр Николаев",
      "speaker_role": null,
      "category": "art",
      "subcategory": "art",
      "apollo_slot": "mid-2",
      "venue": null,
      "slot": null,
      "description": "Картины. Идея от команды, заявки OpenCall нет."
    },
    {
      "id": "inst-tetraquark",
      "status": "tentative",
      "title": "Очарование тетракварка",
      "subtitle": null,
      "speaker": "Alex Mu",
      "speaker_role": null,
      "category": "art",
      "subcategory": "installation",
      "apollo_slot": "big-1",
      "venue": null,
      "slot": null,
      "description": "Инсталляция о тетракварках, заявка app-5/6 от Alex Mu — детали в карточке заявки."
    },
    {
      "id": "inst-polyhedral-exhibit",
      "status": "tentative",
      "title": "Полиэдральное цветение",
      "subtitle": null,
      "speaker": "Максимилиан Роганов",
      "speaker_role": null,
      "category": "art",
      "subcategory": "installation",
      "apollo_slot": "big-2",
      "venue": "big_bar",
      "slot": "slot-stations-2",
      "description": "Складные многогранники. Деталь в заявке app-14."
    },
    {
      "id": "inst-element1",
      "status": "tentative",
      "title": "Элемент 1",
      "subtitle": null,
      "speaker": "Ира",
      "speaker_role": null,
      "category": "art",
      "subcategory": "installation",
      "apollo_slot": "big-3",
      "venue": null,
      "slot": null,
      "description": "Инсталляция, заявка app-15 от автора Ира."
    },
    {
      "id": "inst-mimesis",
      "status": "tentative",
      "title": "Мимесис",
      "subtitle": null,
      "speaker": "Евдокия Дергилёва, Ирина Сафонова",
      "speaker_role": null,
      "category": "art",
      "subcategory": "installation",
      "apollo_slot": "mid-1",
      "venue": null,
      "slot": null,
      "description": "Привязано к заявке app-20 («Объект из серии Детские иллюзии»). Авторы планируют другой объект — Мимесис. Детали — у них."
    },
    {
      "id": "inst-squirrel",
      "status": "tentative",
      "title": "Squirrel Institute",
      "subtitle": null,
      "speaker": "Антон Сидько",
      "speaker_role": null,
      "category": "art",
      "subcategory": "installation",
      "apollo_slot": null,
      "venue": "courtyard",
      "slot": "slot-stations-1",
      "description": "Светящиеся фарфоровые цилиндры — инсталляция из портфолио автора."
    },
    {
      "id": "media-arttech",
      "status": "tentative",
      "title": "ArtTech",
      "subtitle": null,
      "speaker": "группа ArtTech",
      "speaker_role": null,
      "category": "art",
      "subcategory": "media",
      "apollo_slot": "big-1",
      "venue": null,
      "slot": null,
      "description": "Медиа-арт-группа, приглашение в процессе."
    },
    {
      "id": "media-shchelochi",
      "status": "tentative",
      "title": "Щелочь",
      "subtitle": null,
      "speaker": "группа «Щелочь»",
      "speaker_role": null,
      "category": "art",
      "subcategory": "media",
      "apollo_slot": "big-2",
      "venue": null,
      "slot": null,
      "description": "Медиа-арт-группа, приглашение в процессе."
    },
    {
      "id": "media-yav",
      "status": "confirmed",
      "title": "Внутренняя спираль",
      "subtitle": null,
      "speaker": "арт-группа Явь · Анастасия Владычкина",
      "speaker_role": null,
      "category": "art",
      "subcategory": "media",
      "apollo_slot": "big-3",
      "venue": null,
      "slot": null,
      "description": "Серия фрактальных видео — городская среда разворачивается внутрь самой себя. Деталь в заявке app-28 от Анастасии Владычкиной (фронтвумен арт-группы Явь)."
    },
    {
      "id": "inst-polyhedral",
      "status": "tentative",
      "title": "Полиэдральное цветение",
      "speaker": "Максимилиан Роганов",
      "category": "art",
      "subcategory": "installation",
      "apollo_slot": null,
      "venue": "big_bar",
      "slot": "slot-stations-2",
      "description": "Складные многогранники, разворачивающиеся как цветы. См. exhibit inst-polyhedral-exhibit."
    },
    {
      "id": "inst-plato",
      "status": "tentative",
      "title": "Артефакты Плато",
      "speaker": "Александр Солеев",
      "category": "art",
      "subcategory": "art",
      "apollo_slot": null,
      "venue": "big_bar",
      "slot": "slot-stations-3",
      "description": "Мыльные плёнки на проволочных рамках. См. exhibit art-plato."
    },
    {
      "id": "inst-fractal-projection",
      "status": "tentative",
      "title": "Миры фракталов",
      "speaker": "Андрей",
      "category": "art",
      "subcategory": "installation",
      "apollo_slot": null,
      "venue": "small_bar",
      "slot": "slot-stations-3",
      "description": "Большие проекции с навигацией по множествам Мандельброта и Жюлиа."
    },
    {
      "id": "cinema-short-1",
      "status": "tentative",
      "title": "Короткометражка №1",
      "speaker": null,
      "category": "cinema",
      "subcategory": "short",
      "apollo_slot": "big-1",
      "venue": "main_stage",
      "slot": "slot-interlude-1",
      "description": "Короткий метр, около 6 минут. Источник: YouTube (Sx_0cdogaZ8). Название и автор уточняются.",
      "links": [
        "https://www.youtube.com/watch?v=Sx_0cdogaZ8"
      ]
    },
    {
      "id": "cinema-short-2",
      "status": "tentative",
      "title": "Короткометражка №2",
      "speaker": null,
      "category": "cinema",
      "subcategory": "short",
      "apollo_slot": "big-2",
      "venue": "main_stage",
      "slot": "slot-interlude-2",
      "description": "Короткий метр, около 4 минут. Источник: Vimeo. Название и автор уточняются.",
      "links": [
        "https://vimeo.com/921612050"
      ]
    },
    {
      "id": "cinema-short-3",
      "status": "tentative",
      "title": "Короткометражка №3",
      "speaker": null,
      "category": "cinema",
      "subcategory": "short",
      "apollo_slot": "big-3",
      "venue": "main_stage",
      "slot": "slot-interlude-3",
      "description": "Короткий метр, около 10 минут. Источник: Vimeo channel 561739. Название и автор уточняются.",
      "links": [
        "https://vimeo.com/channels/561739/50924800"
      ]
    },
    {
      "id": "cinema-short-4",
      "status": "tentative",
      "title": "Короткометражка №4",
      "speaker": null,
      "category": "cinema",
      "subcategory": "short",
      "apollo_slot": "mid-1",
      "venue": null,
      "slot": null,
      "description": "Короткий метр, около 20 минут. Может пойти в Кино 1 или Кино 2 (часовой слот в библиотеке). Источник: YouTube (tN_eNQFcv5E).",
      "links": [
        "https://www.youtube.com/watch?v=tN_eNQFcv5E"
      ]
    },
    {
      "id": "cinema-anim-fraktaal",
      "status": "tentative",
      "title": "Fraktaal",
      "speaker": "Julius Horsthuis",
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "big-1",
      "venue": null,
      "slot": null,
      "description": "Sci-fi короткометражная анимация без сюжета. Путешествие по сгенерированным фрактальным мирам в эстетике научной фантастики. Используется Mandelbulb 3D.",
      "links": [
        "https://www.youtube.com/watch?v=WD0xC5PwFmw"
      ]
    },
    {
      "id": "cinema-anim-machina-1",
      "status": "tentative",
      "title": "Machina Infinitum",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "big-2",
      "venue": null,
      "slot": null,
      "description": "3D-фрактальная анимация. Источник: YouTube.",
      "links": [
        "https://www.youtube.com/watch?v=dDBsPFk5nuQ"
      ]
    },
    {
      "id": "cinema-anim-machina-2",
      "status": "tentative",
      "title": "Machina Infinitum (2)",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "big-3",
      "venue": null,
      "slot": null,
      "description": "3D-фрактальная анимация, продолжение/другая серия.",
      "links": [
        "https://www.youtube.com/watch?v=CUIaulVmmys"
      ]
    },
    {
      "id": "cinema-anim-cartoon-1",
      "status": "tentative",
      "title": "Анимационная короткометражка",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "mid-1",
      "venue": null,
      "slot": null,
      "description": "Анимация рекомендованная как «!!». Авторство уточняется.",
      "links": [
        "https://www.youtube.com/watch?v=0C75vRVL5lE"
      ]
    },
    {
      "id": "cinema-anim-cartoon-2",
      "status": "tentative",
      "title": "Мультфильм",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "mid-2",
      "venue": null,
      "slot": null,
      "description": "Анимация рекомендованная как «!!». Авторство уточняется.",
      "links": [
        "https://vimeo.com/channels/561739/36608074"
      ]
    },
    {
      "id": "cinema-anim-other-1",
      "status": "tentative",
      "title": "Фрактальная анимация",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "mid-3",
      "venue": null,
      "slot": null,
      "description": "Фрактальная анимация другого автора. YouTube.",
      "links": [
        "https://www.youtube.com/watch?v=S530Vwa33G0"
      ]
    },
    {
      "id": "cinema-anim-vimeo-1",
      "status": "tentative",
      "title": "Фрактальная анимация (Vimeo)",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "center",
      "venue": null,
      "slot": null,
      "description": "Фрактальная анимация. Источник: Vimeo channel 561739.",
      "links": [
        "https://vimeo.com/channels/561739/34544497"
      ]
    },
    {
      "id": "cinema-anim-vimeo-2",
      "status": "tentative",
      "title": "Фрактальная анимация (Vimeo, 2)",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "ear-1",
      "venue": null,
      "slot": null,
      "description": "Фрактальная анимация. Источник: Vimeo channel 561739.",
      "links": [
        "https://vimeo.com/channels/561739/43351466"
      ]
    },
    {
      "id": "cinema-anim-simple-1",
      "status": "tentative",
      "title": "Простая фрактальная анимация",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "ear-2",
      "venue": null,
      "slot": null,
      "description": "Простая анимация на тему фракталов. YouTube.",
      "links": [
        "https://www.youtube.com/watch?v=zXTpASSd9xE"
      ]
    },
    {
      "id": "cinema-anim-simple-2",
      "status": "tentative",
      "title": "Простая фрактальная анимация (2)",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "ear-3",
      "venue": null,
      "slot": null,
      "description": "Простая анимация на тему фракталов. YouTube.",
      "links": [
        "https://www.youtube.com/watch?v=Hk_tHcJzTOo"
      ]
    },
    {
      "id": "cinema-feature-pi",
      "status": "tentative",
      "title": "Пи",
      "speaker": "Даррен Аронофски",
      "category": "cinema",
      "subcategory": "feature",
      "apollo_slot": "big-1",
      "venue": "library",
      "slot": "slot-cinema-1",
      "description": "Художественный фильм 1998 года. Параноидальный математик в поисках универсальной формулы. Чёрно-белый, психоделический."
    },
    {
      "id": "cinema-feature-doc-order",
      "status": "tentative",
      "title": "Фракталы: Порядок в хаосе",
      "speaker": null,
      "category": "cinema",
      "subcategory": "feature",
      "apollo_slot": "big-2",
      "venue": "library",
      "slot": "slot-cinema-2",
      "description": "«Fractals: Order in Chaos», 2008. Документальный фильм о фракталах в природе и в математике."
    },
    {
      "id": "cinema-feature-doc-colors",
      "status": "tentative",
      "title": "Фракталы: Цвета бесконечности",
      "speaker": "Артур Кларк",
      "category": "cinema",
      "subcategory": "feature",
      "apollo_slot": "big-3",
      "venue": null,
      "slot": null,
      "description": "«Colors of Infinity», 1995. Документальный фильм Артура Кларка о множестве Мандельброта. Альтернатива «Порядку в хаосе»."
    },
    {
      "id": "cinema-feature-doc-hidden",
      "status": "tentative",
      "title": "Фракталы: Поиски скрытого измерения",
      "speaker": null,
      "category": "cinema",
      "subcategory": "feature",
      "apollo_slot": "mid-1",
      "venue": null,
      "slot": null,
      "description": "«Hunting the Hidden Dimension», NOVA/PBS, 2008–2011. Документальный фильм о Бенуа Мандельброте. Альтернатива основной документалке."
    }
  ],
  "_howto": {
    "add_event": "Добавь объект в массив events со всеми полями. Если для события нужен новый временной слот — добавь его в time_slots с fern_address. Не забудь apollo_slot, если событие должно появиться в круге Аполлония.",
    "rename_venue": "Меняй только поле display в venues, id (main_stage и т.д.) оставляй как есть. Так на сайте обновится отображение, но не сломаются ссылки в events.",
    "change_status": "При подтверждении события меняй status с placeholder на confirmed и заполни speaker, title, description.",
    "categories_are_fixed": "Семь категорий зафиксированы: popsci, music, art, workshop, experiment, cinema, social. Новые не добавлять без обсуждения архитектуры — они должны соответствовать кругам Аполлоновой навигации.",
    "category_choice_rule": "Решающий критерий — что человек делает в этом событии. Слушает выступающего → popsci. Что-то делает руками по инструкции → workshop. Наблюдает интерактивный объект → experiment или art (art если объект — произведение, experiment если объект — наблюдение/опыт). Делает что-то вместе с другими (квиз, дискуссия, спид-дейтинг, танцпол) → social. Когда в одном событии есть и лекция, и совместное действие — выбираем по доминанте. Например, утренний квиз Тарасевича — это social, не popsci, потому что доминанта в командной игре, а не в выступлении ведущего.",
    "apollo_slot": "Позиция события внутри круга-категории в Аполлонии. Опциональное. Значения: 'big-1', 'big-2', 'big-3' (три крупных), 'mid-1', 'mid-2', 'mid-3' (три средних), 'center' (центр), 'ear-1', 'ear-2', 'ear-3' (три ушка — для переполнения; визуально мельче). Один и тот же slot не должен повторяться внутри одной категории.",
    "subcategory": "Обязательное поле для events в категориях music/cinema/art — указывает в какой sub-круг Аполлония попадёт событие. Значения: music → main_stage / big_bar / courtyard (соответствует venue id, площадка). cinema → feature / short / animation. art → art / installation / media. Для остальных категорий (popsci, workshop, experiment, social) поле НЕ задаётся.",
    "file_layout": "Этот файл — единственный источник правды о программе фестиваля. Используется и в index.html (отображение), и в будущей admin-странице (редактирование). Подключается синхронно через <script src=\"festival-data.js\">, после чего в window.FESTIVAL_DATA доступен весь объект.",
    "rendering_targets": "База кормит ТРИ виджета на index.html: (1) Аполлония (круги категорий с зумом) — берёт events по category + apollo_slot, для music/cinema/art также subcategory; (2) Папоротник-расписание (iframe в секции #schedule) — берёт time_slots с fern_address для построения дерева; (3) Список расписания в правой колонке — берёт events с venue/slot для группировки по интервалам. Все три виджета — read-only визуализации. Редактирование = только в этом файле.",
    "fern_address": "Поле time_slots[id].fern_address — путь от корня фрактального папоротника. Массив чисел [n1, n2, ...]: каждая цифра 1, 2 или 3 — какой ветви идти на этом шаге (1 — главный ствол, 2 — основная боковая ветвь, 3 — вторичная боковая). Глубина массива = глубина зума. Особое значение \"tail\" для танцевальной программы (хвост папоротника, без конкретного адреса). При добавлении нового слота важно не пересекаться с существующими адресами и располагаться визуально логично по времени.",
    "venue_resolution": "В коде index.html ВСЕ ссылки на площадки идут через id (main_stage, big_bar, small_bar, courtyard, library), а не через display-имена. Display подтягивается через хелпер resolveVenue(v): принимает id, массив id, или плоскую строку (для сборных описаний типа \"бары и двор\"). Это даёт один источник правды: переименовал площадку в venues[id].display — меняется везде на сайте."
  },
  "subcategories": {
    "music": {
      "main_stage": {
        "slot": "big-1",
        "label_from_venue": "main_stage"
      },
      "big_bar": {
        "slot": "big-2",
        "label_from_venue": "big_bar"
      },
      "courtyard": {
        "slot": "big-3",
        "label_from_venue": "courtyard"
      }
    },
    "cinema": {
      "feature": {
        "slot": "big-1",
        "display": "полный метр"
      },
      "short": {
        "slot": "big-2",
        "display": "короткометражки"
      },
      "animation": {
        "slot": "big-3",
        "display": "анимация"
      }
    },
    "art": {
      "art": {
        "slot": "big-1",
        "display": "галерея"
      },
      "installation": {
        "slot": "big-2",
        "display": "инсталляции"
      },
      "media": {
        "slot": "big-3",
        "display": "медиа-арт"
      }
    }
  },
  "exhibits": [
    {
      "id": "media-arttech",
      "kind": "media",
      "status": "tentative",
      "title": "ArtTech",
      "speaker": "группа ArtTech",
      "description": "Медиа-арт-группа, приглашение в процессе.",
      "subcategory": "media",
      "apollo_slot": "big-1"
    },
    {
      "id": "media-shchelochi",
      "kind": "media",
      "status": "tentative",
      "title": "Щелочь",
      "speaker": "группа «Щелочь»",
      "description": "Медиа-арт-группа, приглашение в процессе.",
      "subcategory": "media",
      "apollo_slot": "big-2"
    },
    {
      "id": "media-yav",
      "kind": "media",
      "status": "confirmed",
      "title": "Внутренняя спираль",
      "speaker": "арт-группа Явь · Анастасия Владычкина",
      "description": "Серия фрактальных видео — городская среда разворачивается внутрь самой себя. Деталь в заявке app-28 от Анастасии Владычкиной (фронтвумен арт-группы Явь).",
      "subcategory": "media",
      "apollo_slot": "big-3"
    },
    {
      "id": "inst-tetraquark",
      "kind": "installation",
      "status": "tentative",
      "title": "Очарование тетракварка",
      "speaker": "Alex Mu",
      "description": "Инсталляция о тетракварках, заявка app-5/6 от Alex Mu — детали в карточке заявки.",
      "subcategory": "installation",
      "apollo_slot": "big-1"
    },
    {
      "id": "inst-polyhedral-exhibit",
      "kind": "installation",
      "status": "tentative",
      "title": "Полиэдральное цветение",
      "speaker": "Максимилиан Роганов",
      "description": "Складные многогранники. Деталь в заявке app-14.",
      "subcategory": "installation",
      "apollo_slot": "big-2"
    },
    {
      "id": "inst-element1",
      "kind": "installation",
      "status": "tentative",
      "title": "Элемент 1",
      "speaker": "Ира",
      "description": "Инсталляция, заявка app-15 от автора Ира.",
      "subcategory": "installation",
      "apollo_slot": "big-3"
    },
    {
      "id": "inst-mimesis",
      "kind": "installation",
      "status": "tentative",
      "title": "Мимесис",
      "speaker": "Евдокия Дергилёва, Ирина Сафонова",
      "description": "Привязано к заявке app-20 («Объект из серии Детские иллюзии»). Авторы планируют другой объект — Мимесис. Детали — у них.",
      "subcategory": "installation",
      "apollo_slot": "mid-1"
    },
    {
      "id": "art-plato",
      "kind": "art",
      "status": "tentative",
      "title": "Артефакты Плато",
      "speaker": "Александр Солеев",
      "description": "Мыльные плёнки на проволочных рамках. Минимальные поверхности. Деталь в заявке app-9.",
      "subcategory": "art",
      "apollo_slot": "big-1"
    },
    {
      "id": "art-fluoro",
      "kind": "art",
      "status": "tentative",
      "title": "Андрей Флюоро",
      "speaker": "Андрей Флюоро",
      "description": "Художник, идея от команды. Заявки в OpenCall нет — нужно дозаполнить.",
      "subcategory": "art",
      "apollo_slot": "big-2"
    },
    {
      "id": "art-string-1",
      "kind": "art",
      "status": "tentative",
      "title": "String Art (художник 1)",
      "speaker": "(уточнить)",
      "description": "String Art, первый из двух художников. Идея от команды.",
      "subcategory": "art",
      "apollo_slot": "big-3"
    },
    {
      "id": "art-string-2",
      "kind": "art",
      "status": "tentative",
      "title": "String Art (художник 2)",
      "speaker": "(уточнить)",
      "description": "String Art, второй из двух художников. Идея от команды.",
      "subcategory": "art",
      "apollo_slot": "mid-1"
    },
    {
      "id": "art-other-spaces",
      "kind": "art",
      "status": "tentative",
      "title": "Свет иных пространств",
      "speaker": "Пётр Николаев",
      "description": "Картины. Идея от команды, заявки OpenCall нет.",
      "subcategory": "art",
      "apollo_slot": "mid-2"
    },
    {
      "id": "inst-squirrel",
      "status": "tentative",
      "title": "Squirrel Institute",
      "speaker": "Антон Сидько",
      "subcategory": "installation",
      "apollo_slot": null,
      "description": "Светящиеся фарфоровые цилиндры — инсталляция из портфолио автора.",
      "kind": "installation"
    }
  ]
};

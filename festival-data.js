// === База событий фестиваля «Фрактальная Одиссея», 23 мая 2026 ===
//
// ЕДИНСТВЕННЫЙ источник правды о программе. Подключается синхронно через
//     <script src="festival-data.js"></script>
// в index.html и будет использоваться для админ-страницы.
//
// СТРУКТУРА:
//   _meta          — версия, история изменений
//   _howto         — правила редактирования (читай ПЕРЕД любыми правками)
//   venues         — площадки (id → {display, short, note, apollo_label})
//   categories     — семь зафиксированных категорий
//   subcategories  — для music/cinema/art (sub-уровень в Аполлонии)
//   time_slots     — временные интервалы с адресом в папоротнике
//   events         — список всех событий
//
// КАК РЕДАКТИРОВАТЬ:
//   - Меняй значения в объекте window.FESTIVAL_DATA.
//   - Сохраняй валидный JS-синтаксис (двойные кавычки у строк, запятые между полями).
//   - НЕ меняй id-поля площадок/категорий/событий — на них завязаны ссылки.
//   - Display-поля (что видит пользователь) меняй свободно.
//   - После правки достаточно перезагрузить страницу — никаких сборок не нужно.
//
// === ПРАВИЛА РАБОТЫ С БАЗОЙ — см. _howto в самом объекте ===

window.FESTIVAL_DATA = {
  "_meta": {
    "version": "2026-05-05-v3",
    "comment": "База событий фестиваля «Фрактальная Одиссея», 23 мая 2026. Структура: time-slots → events → venues → categories. Поля display в venues и categories — то что видит пользователь. Поля id — внутренние ключи, скучные и стабильные, не меняются при ребрендинге.",
    "changes_v2": "Добавлено поле apollo_slot для каждого события (позиция внутри круга-категории). Возвращены Brinstar/Spiral Fractal с status=tentative (вместо абстрактных music-3/music-4). Расширен _howto.",
    "changes_v3": "Удалён placeholder stage-extra в popsci (события не будет). music-rap: speaker → Вадим. dance-program: category social → music, apollo_slot big-3 → ear-2. Новое событие social-rosetka: нетворкинг от бюро «Розетка», apollo_slot big-3.",
    "changes_v4": "Добавлен слой subcategories для music/cinema/art. venues получили поле apollo_label. events music/art получили поле subcategory.",
    "changes_v5": "Sub-cat music labels берутся из venue.display (Мандельброт/Кантор/Серпинский). music-rap (Влад Горелов) перемещён на courtyard.",
    "changes_v6": "Кантор и Серпинский поменяны местами: big_bar=Серпинский (большой бар), courtyard=Кантор (двор). Mandelbrot (главная сцена) не тронут. _howto дополнен описанием поля subcategory."
  },
  "venues": {
    "library": {
      "display": "Библиотека Достоевского",
      "short": "Библиотека",
      "note": "Чистопрудный 23, малый зал"
    },
    "main_stage": {
      "display": "Мандельброт",
      "short": "Мандельброт",
      "note": "главная сцена клуба Лахесис",
      "apollo_label": "главная сцена"
    },
    "big_bar": {
      "display": "Серпинский",
      "short": "Серпинский",
      "note": "большой бар",
      "apollo_label": "большой бар"
    },
    "small_bar": {
      "display": "Жюлиа",
      "short": "Жюлиа",
      "note": "малый бар"
    },
    "courtyard": {
      "display": "Кантор",
      "short": "Кантор",
      "note": "общий двор",
      "apollo_label": "двор"
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
      "label_for_zoom": "Михаил Евдокимов · 14:00"
    },
    "slot-tarasevich": {
      "fern_address": [
        2
      ],
      "start": "15:00",
      "end": "16:00",
      "label_for_zoom": "Григорий Тарасевич · 15:00"
    },
    "slot-gelfand": {
      "fern_address": [
        1,
        2
      ],
      "start": "16:00",
      "end": "17:00",
      "label_for_zoom": "Михаил Гельфанд · 16:00"
    },
    "slot-stations-1": {
      "fern_address": [
        1,
        3
      ],
      "start": "16:30",
      "end": "17:30",
      "label_for_zoom": "Первый блок · 16:30"
    },
    "slot-rajgorodski": {
      "fern_address": [
        1,
        1,
        2
      ],
      "start": "17:30",
      "end": "18:30",
      "label_for_zoom": "Андрей Райгородский · 17:30"
    },
    "slot-stations-2": {
      "fern_address": [
        1,
        1,
        3
      ],
      "start": "17:30",
      "end": "18:30",
      "label_for_zoom": "Второй блок · 17:30"
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
      "label_for_zoom": "Александра Скрипченко · 19:00"
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
      "label_for_zoom": "Третий блок · 18:30"
    },
    "slot-stage-extra": {
      "fern_address": [
        1,
        1,
        1,
        1,
        2
      ],
      "start": "20:00",
      "end": "22:00",
      "label_for_zoom": "Главная сцена · 20:00"
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
      "label_for_zoom": "Четвёртый блок · 19:30"
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
      "label_for_zoom": "Главная сцена · 22:00"
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
      "label_for_zoom": "Главная сцена · 23:00"
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
      "label_for_zoom": "Главная сцена · 00:00"
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
      "label_for_zoom": "Главная сцена · 01:00"
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
      "label_for_zoom": "Малая сцена · 22:00"
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
      "label_for_zoom": "Малая сцена · 23:00"
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
      "label_for_zoom": "Малая сцена · 00:00"
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
      "label_for_zoom": "Малая сцена · 01:00"
    },
    "slot-dance": {
      "fern_address": "tail",
      "start": "02:00",
      "end": "04:00",
      "label_for_zoom": "Танцпол · 02:00"
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
      "apollo_slot": "big-3",
      "venue": null,
      "slot": null,
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
      "id": "inst-squirrel",
      "status": "confirmed",
      "title": "Squirrel Institute",
      "subtitle": null,
      "speaker": "Антон Сидько",
      "speaker_role": null,
      "category": "art",
      "apollo_slot": "big-1",
      "venue": "big_bar",
      "slot": "slot-stations-1",
      "duration_override": null,
      "description": "Фарфоровые цилиндры со свернувшимися в спирали белками — модель структуры канального белка. Лингвистическая петля «бЕлка / белкА» как ирония над автопереводом РАН в 2010 году.",
      "subcategory": "installation"
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
      "category": "workshop",
      "apollo_slot": "mid-2",
      "venue": "small_bar",
      "slot": "slot-stations-2",
      "duration_override": null,
      "description": "Подойти к инструменту, поиграть руками в воздухе. К Петру Термену готовиться никак не нужно — просто можно попробовать."
    },
    {
      "id": "inst-polyhedral",
      "status": "confirmed",
      "title": "Полиэдральное цветение",
      "subtitle": null,
      "speaker": "Максимилиан Роганов",
      "speaker_role": null,
      "category": "art",
      "apollo_slot": "big-2",
      "venue": "small_bar",
      "slot": "slot-stations-2",
      "duration_override": null,
      "description": "Складные многогранники, разворачивающиеся как цветы. Геометрия, которая раскрывается во времени.",
      "subcategory": "installation"
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
      "id": "inst-plato",
      "status": "confirmed",
      "title": "Артефакты Плато",
      "subtitle": null,
      "speaker": "Александр Солеев",
      "speaker_role": null,
      "category": "experiment",
      "apollo_slot": "big-2",
      "venue": "big_bar",
      "slot": "slot-stations-3",
      "duration_override": null,
      "description": "Мыльные плёнки на проволочных рамках — минимальные поверхности. Геометрия пузырей и пены, открытая Жозефом Плато."
    },
    {
      "id": "inst-fractal-projection",
      "status": "confirmed",
      "title": "Миры фракталов",
      "subtitle": null,
      "speaker": "Андрей",
      "speaker_role": null,
      "category": "art",
      "apollo_slot": "big-3",
      "venue": "small_bar",
      "slot": "slot-stations-3",
      "duration_override": null,
      "description": "Большие проекции с навигацией по множествам Мандельброта и Жюлиа. Можно подойти и побродить пальцем.",
      "subcategory": "installation"
    },
    {
      "id": "station-3-extra",
      "status": "placeholder",
      "title": "Станция 3.4",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "category": "experiment",
      "apollo_slot": "mid-1",
      "venue": "big_bar",
      "slot": "slot-stations-3",
      "duration_override": null,
      "description": null
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
      "id": "station-4-3",
      "status": "placeholder",
      "title": "Станция 4.3",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "category": "art",
      "apollo_slot": "center",
      "venue": "courtyard",
      "slot": "slot-stations-4",
      "duration_override": null,
      "description": null,
      "subcategory": "art"
    },
    {
      "id": "station-4-4",
      "status": "placeholder",
      "title": "Станция 4.4",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "category": "experiment",
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
  }
};

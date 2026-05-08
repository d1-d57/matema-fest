// === База событий фестиваля «Фрактальная Одиссея», 23 мая 2026 ===
window.FESTIVAL_DATA = {
  "_meta": {
    "version": "2026-05-08-v25",
    "comment": "База событий фестиваля «Фрактальная Одиссея», 23 мая 2026. Структура: time-slots → events → venues → categories. Поля display в venues и categories — то что видит пользователь. Поля id — внутренние ключи, скучные и стабильные, не меняются при ребрендинге.",
    "changes_v17": "Разделение составных слотов: slot-stations-1..4 разбиты по событиям (slot-stations-1-1, -1-2, -1-3 и т.д.). Каждый слот теперь содержит максимум 1 событие. Поля category/apollo_slot/subcategory перенесены с событий на слоты (это атрибуты места, не карточки). У событий-сирот (banks: cinema/animation без слота) поля остались. Добавлено slot.type — короткий тип: talk/station/interlude/cinema/music/discussion/networking/dance/music-extra. Также перенесён venue с событий на слоты.",
    "changes_v18": "Введена секция fern_leaves — явный список листьев папоротника с временами и сторонами (headline / side / tail). Поле fern_address удалено из всех слотов. Привязка слот→лист теперь делается алгоритмом в индексе по правилу: хедлайнерский слот (talk/discussion) → headline лист по времени; иначе → side лист. Изменены времена: cinema-1 (Пи) 19:30-21:00, cinema-2 21:00-22:00, dance 01-04. Музыкальная программа переразвязана: Brinstar 23-00, Spiral Fractal 00-01. Удалены slot-music-4 и slot-music-parallel-4. Переименована \"Малая сцена\" в \"Музыка (малая сцена)\".",
    "changes_v19": "Сдвиг всех хедлайнерских листьев на 1 уровень вниз (убрана пустота слева). Расширение музыкальной программы до 03:00: добавлены 4 новых слота (slot-music-5, slot-music-parallel-5, slot-music-6, slot-music-parallel-6) и 4 новых листа. Добавлены 7 новых музыкантов: Stropharia, Gonaitei, Hobboth, WOMBA, Rombix, Aensof, Darkest Supernova. Танцы (slot-dance) сжаты до 03:00-04:00.",
    "changes_v21": "Добавлены 6 анимаций (cinema/animation) и 4 короткометражки (cinema/short). Из коротких 3 привязаны к существующим interlude-слотам в расписании, 4-я (длинное название Menger meets Eiffel) — сирота для ночного показа. Удалены 11 старых TBA-сирот.",
    "changes_v22": "venue музыки на малой сцене (slot-music-parallel-1/2/3/5/6) перенесён с small_bar на big_bar — параллельная музыка идёт в Большом баре, в lane 2; малый бар освобождается. Восстановлены связи _source_app между событиями/экспонатами и заявками open call (были утеряны при миграции v9->v17). 10 events + 7 exhibits получили ссылки на свои заявки.",
    "changes_v23": "Добавлены slot-stations-1-4 (workshop, courtyard) и slot-stations-3-3 (workshop, courtyard) — двор не должен пустовать днём. Раньше Станции 1 и Станции 3 были только на big_bar+small_bar, теперь как Станции 2 и 4 — на трёх площадках включая двор.",
    "changes_v24": "Чистка данных: status=tentative проставлен у 17 событий (новые музыканты + анимации + короткометражки). label_for_zoom сгенерирован у 4 ночных music-слотов. Закрыты apollo_slot пропуски у slot-stations-2-3 и -4-3. Резолвлены дубли apollo_slot в workshop (slot-stations-1-4 и -3-3 переведены в experiment). Теперь экспериментов столько же сколько мастерских.",
    "changes_v25": "Растянут slot-networking до 22:00 (90 минут вместо 60). Placeholder events station-4-1 и station-4-2 переименованы в \"Станция TBA\" — нумерация по индексу была визуальным шумом, статус остался placeholder. Раздел _howto обновлён: документировано поле apollo_slot и связь с subcategory."
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
      "start": "14:00",
      "end": "15:00",
      "label_for_zoom": "Михаил Евдокимов · 14:00",
      "tool_label": "Библиотека 1",
      "type": "talk",
      "category": "social",
      "apollo_slot": "big-1",
      "venue": "library",
      "leaf": "leaf-side-morning"
    },
    "slot-tarasevich": {
      "start": "15:00",
      "end": "16:00",
      "label_for_zoom": "Григорий Тарасевич · 15:00",
      "tool_label": "Библиотека 2",
      "type": "talk",
      "category": "social",
      "apollo_slot": "big-2",
      "venue": "library",
      "leaf": "leaf-side-morning"
    },
    "slot-gelfand": {
      "start": "16:00",
      "end": "17:00",
      "label_for_zoom": "Михаил Гельфанд · 16:00",
      "tool_label": "Лекция 1",
      "type": "talk",
      "category": "popsci",
      "apollo_slot": "big-1",
      "venue": "main_stage"
    },
    "slot-stations-1-1": {
      "start": "16:30",
      "end": "17:30",
      "label_for_zoom": "Первый блок · 16:30",
      "tool_label": "Станции 1",
      "type": "station",
      "category": "workshop",
      "apollo_slot": "big-1",
      "venue": "big_bar"
    },
    "slot-stations-1-2": {
      "start": "16:30",
      "end": "17:30",
      "label_for_zoom": "Первый блок · 16:30",
      "tool_label": "Станции 1",
      "type": "station",
      "category": "workshop",
      "apollo_slot": "big-3",
      "venue": "big_bar"
    },
    "slot-stations-1-3": {
      "start": "16:30",
      "end": "17:30",
      "label_for_zoom": "Первый блок · 16:30",
      "tool_label": "Станции 1",
      "type": "station",
      "category": "experiment",
      "apollo_slot": "big-1",
      "venue": "small_bar"
    },
    "slot-stations-1-4": {
      "start": "16:30",
      "end": "17:30",
      "label_for_zoom": "Первый блок · 16:30",
      "tool_label": "Станции 1",
      "type": "station",
      "category": "experiment",
      "apollo_slot": "big-2",
      "venue": "courtyard"
    },
    "slot-rajgorodski": {
      "start": "17:30",
      "end": "18:30",
      "label_for_zoom": "Андрей Райгородский · 17:30",
      "tool_label": "Лекция 2",
      "type": "talk",
      "category": "popsci",
      "apollo_slot": "big-2",
      "venue": "main_stage"
    },
    "slot-stations-2-1": {
      "start": "17:30",
      "end": "18:30",
      "label_for_zoom": "Второй блок · 17:30",
      "tool_label": "Станции 2",
      "type": "station",
      "category": "workshop",
      "apollo_slot": "big-2",
      "venue": "big_bar"
    },
    "slot-stations-2-2": {
      "start": "17:30",
      "end": "18:30",
      "label_for_zoom": "Второй блок · 17:30",
      "tool_label": "Станции 2",
      "type": "station",
      "category": "workshop",
      "apollo_slot": "mid-1",
      "venue": "courtyard"
    },
    "slot-stations-2-3": {
      "start": "17:30",
      "end": "18:30",
      "label_for_zoom": "Второй блок · 17:30",
      "tool_label": "Станции 2",
      "type": "station",
      "category": "experiment",
      "venue": "small_bar",
      "apollo_slot": "mid-1"
    },
    "slot-skripchenko": {
      "start": "19:00",
      "end": "20:00",
      "label_for_zoom": "Александра Скрипченко · 19:00",
      "tool_label": "Лекция 3",
      "type": "talk",
      "category": "popsci",
      "apollo_slot": "big-3",
      "venue": "main_stage"
    },
    "slot-stations-3-1": {
      "start": "18:30",
      "end": "19:30",
      "label_for_zoom": "Третий блок · 18:30",
      "tool_label": "Станции 3",
      "type": "station",
      "category": "experiment",
      "apollo_slot": "big-3",
      "venue": "small_bar"
    },
    "slot-stations-3-2": {
      "start": "18:30",
      "end": "19:30",
      "label_for_zoom": "Третий блок · 18:30",
      "tool_label": "Станции 3",
      "type": "station",
      "category": "workshop",
      "apollo_slot": "mid-2",
      "venue": "big_bar"
    },
    "slot-stations-3-3": {
      "start": "18:30",
      "end": "19:30",
      "label_for_zoom": "Третий блок · 18:30",
      "tool_label": "Станции 3",
      "type": "station",
      "category": "experiment",
      "apollo_slot": "ear-1",
      "venue": "courtyard"
    },
    "slot-stations-4-1": {
      "start": "19:30",
      "end": "20:30",
      "label_for_zoom": "Четвёртый блок · 19:30",
      "tool_label": "Станции 4",
      "type": "station",
      "category": "experiment",
      "apollo_slot": "mid-2",
      "venue": "big_bar"
    },
    "slot-stations-4-2": {
      "start": "19:30",
      "end": "20:30",
      "label_for_zoom": "Четвёртый блок · 19:30",
      "tool_label": "Станции 4",
      "type": "station",
      "category": "workshop",
      "apollo_slot": "mid-3",
      "venue": "small_bar"
    },
    "slot-stations-4-3": {
      "start": "19:30",
      "end": "20:30",
      "label_for_zoom": "Четвёртый блок · 19:30",
      "tool_label": "Станции 4",
      "type": "station",
      "category": "experiment",
      "apollo_slot": "mid-3",
      "venue": "courtyard"
    },
    "slot-music-1": {
      "start": "22:00",
      "end": "23:00",
      "label_for_zoom": "Главная сцена · 22:00",
      "tool_label": "Музыка 1",
      "type": "music",
      "category": "music",
      "apollo_slot": "big-1",
      "subcategory": "main_stage",
      "venue": "main_stage"
    },
    "slot-music-2": {
      "start": "23:00",
      "end": "00:00",
      "label_for_zoom": "Главная сцена · 23:00",
      "tool_label": "Музыка",
      "type": "music",
      "venue": "main_stage",
      "category": "music",
      "subcategory": "main_stage",
      "apollo_slot": "big-2"
    },
    "slot-music-3": {
      "start": "00:00",
      "end": "01:00",
      "label_for_zoom": "Главная сцена · 00:00",
      "tool_label": "Музыка",
      "type": "music",
      "category": "music",
      "apollo_slot": "big-3",
      "subcategory": "main_stage",
      "venue": "main_stage"
    },
    "slot-music-parallel-1": {
      "start": "22:00",
      "end": "23:00",
      "label_for_zoom": "Малая сцена · 22:00",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "apollo_slot": "mid-1",
      "subcategory": "big_bar",
      "venue": "big_bar"
    },
    "slot-music-parallel-2": {
      "start": "23:00",
      "end": "00:00",
      "label_for_zoom": "Малая сцена · 23:00",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "apollo_slot": "mid-2",
      "subcategory": "big_bar",
      "venue": "big_bar"
    },
    "slot-music-parallel-3": {
      "start": "00:00",
      "end": "01:00",
      "label_for_zoom": "Малая сцена · 00:00",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "apollo_slot": "mid-3",
      "subcategory": "big_bar",
      "venue": "big_bar"
    },
    "slot-dance": {
      "start": "03:00",
      "end": "04:00",
      "label_for_zoom": "Танцпол · 02:00",
      "tool_label": "Танцпол",
      "type": "dance",
      "category": "music",
      "apollo_slot": "ear-2",
      "subcategory": "main_stage",
      "venue": "main_stage"
    },
    "slot-discussion": {
      "start": "20:30",
      "end": "22:00",
      "label_for_zoom": "Дискуссия · 20:30",
      "tool_label": "Дискуссия",
      "type": "discussion",
      "category": "social",
      "apollo_slot": "big-3",
      "venue": "main_stage"
    },
    "slot-cinema-1": {
      "start": "19:30",
      "end": "21:00",
      "label_for_zoom": "Кино 1 · 19:00",
      "tool_label": "Кино 1",
      "type": "cinema",
      "category": "cinema",
      "apollo_slot": "big-1",
      "subcategory": "feature",
      "venue": "library"
    },
    "slot-cinema-2": {
      "start": "21:00",
      "end": "22:00",
      "label_for_zoom": "Кино 2 · 20:00",
      "tool_label": "Кино 2",
      "type": "cinema",
      "category": "cinema",
      "apollo_slot": "big-2",
      "subcategory": "feature",
      "venue": "library"
    },
    "slot-interlude-1": {
      "start": "17:00",
      "end": "17:30",
      "label_for_zoom": "Перебив · 17:00",
      "tool_label": "Короткометражки 1",
      "type": "interlude",
      "category": "cinema",
      "apollo_slot": "big-1",
      "subcategory": "short",
      "venue": "main_stage"
    },
    "slot-interlude-2": {
      "start": "18:30",
      "end": "19:00",
      "label_for_zoom": "Перебив · 18:30",
      "tool_label": "Короткометражки 2",
      "type": "interlude",
      "category": "cinema",
      "apollo_slot": "big-2",
      "subcategory": "short",
      "venue": "main_stage"
    },
    "slot-interlude-3": {
      "start": "20:00",
      "end": "20:30",
      "label_for_zoom": "Перебив · 20:00",
      "tool_label": "Короткометражки 3",
      "type": "interlude",
      "category": "cinema",
      "apollo_slot": "big-3",
      "subcategory": "short",
      "venue": "main_stage"
    },
    "slot-networking": {
      "start": "20:30",
      "end": "22:00",
      "label_for_zoom": "Нетворкинг",
      "tool_label": "Нетворкинг «Розетка»",
      "allowed_venues": [
        "big_bar"
      ],
      "type": "networking",
      "category": "social",
      "apollo_slot": "mid-1",
      "venue": "big_bar"
    },
    "slot-rap-evening": {
      "start": "20:30",
      "end": "22:00",
      "label_for_zoom": "Научно-технический рэп",
      "tool_label": "Научно-технический рэп",
      "allowed_venues": [
        "courtyard"
      ],
      "type": "music",
      "category": "music",
      "apollo_slot": "big-1",
      "subcategory": "courtyard",
      "venue": "courtyard"
    },
    "slot-music-5": {
      "venue": "main_stage",
      "start": "01:00",
      "end": "02:00",
      "tool_label": "Музыка",
      "type": "music",
      "category": "music",
      "apollo_slot": "mid-1",
      "subcategory": "main_stage",
      "label_for_zoom": "Музыка · 01:00"
    },
    "slot-music-parallel-5": {
      "venue": "big_bar",
      "start": "01:00",
      "end": "02:00",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "apollo_slot": "big-1",
      "subcategory": "big_bar",
      "label_for_zoom": "Музыка (малая сцена) · 01:00"
    },
    "slot-music-6": {
      "venue": "main_stage",
      "start": "02:00",
      "end": "03:00",
      "tool_label": "Музыка",
      "type": "music",
      "category": "music",
      "apollo_slot": "mid-2",
      "subcategory": "main_stage",
      "label_for_zoom": "Музыка · 02:00"
    },
    "slot-music-parallel-6": {
      "venue": "big_bar",
      "start": "02:00",
      "end": "03:00",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "apollo_slot": "big-2",
      "subcategory": "big_bar",
      "label_for_zoom": "Музыка (малая сцена) · 02:00"
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
      "slot": "slot-networking",
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
      "slot": "slot-stations-1-1",
      "duration_override": null,
      "description": "Ножницы, лист А4, инструкция. За 5–10 минут — фрактальная модель в руках. Можно собрать дома ещё.",
      "_source_app": "app-15"
    },
    {
      "id": "mc-calligraphy",
      "status": "confirmed",
      "title": "Каллиграфия как фрактал",
      "subtitle": null,
      "speaker": "Наташа Евдокимова",
      "speaker_role": null,
      "slot": "slot-stations-1-2",
      "duration_override": null,
      "description": "Базовые черты, точки, линии. Из них — иероглифы. Простота порождает сложность через повторение.",
      "_source_app": "app-9"
    },
    {
      "id": "obs-diagnostics",
      "status": "confirmed",
      "title": "Эстетика в диагнозах",
      "subtitle": null,
      "speaker": "Дария",
      "speaker_role": null,
      "slot": "slot-stations-1-3",
      "duration_override": null,
      "description": "Рисуночные методики, которыми психиатрия выявляет психические расстройства. Самоподобие как клинический инструмент.",
      "_source_app": "app-11"
    },
    {
      "id": "puzzle-engineering-origami",
      "status": "confirmed",
      "title": "Инженерное оригами",
      "subtitle": null,
      "speaker": "Полина Романова",
      "speaker_role": null,
      "slot": "slot-stations-2-1",
      "duration_override": null,
      "description": "Складные конструкции из бумаги, использующиеся в инженерии — солнечные панели, медицинские стенты. Складывание по математическим правилам.",
      "_source_app": "app-16"
    },
    {
      "id": "mc-tie-dye",
      "status": "confirmed",
      "title": "Тай-дай: космические яйца",
      "subtitle": null,
      "speaker": "Ольга",
      "speaker_role": null,
      "slot": "slot-stations-2-2",
      "duration_override": null,
      "description": "Окрашивание тканей с фрактальными разводами. На выходе — узор, никогда не повторяющийся.",
      "_source_app": "app-17"
    },
    {
      "id": "mc-theremin",
      "status": "confirmed",
      "title": "Терменвокс: попробовать самому",
      "subtitle": null,
      "speaker": "Лора Заиконникова",
      "speaker_role": null,
      "slot": "slot-stations-2-3",
      "duration_override": null,
      "description": "Подойти к инструменту, поиграть руками в воздухе. К Петру Термену готовиться никак не нужно — просто можно попробовать.",
      "_source_app": "app-19"
    },
    {
      "id": "puzzle-graphs-evolution",
      "status": "confirmed",
      "title": "Эволюция графов",
      "subtitle": null,
      "speaker": "Александр Николаичев",
      "speaker_role": null,
      "slot": "slot-stations-3-1",
      "duration_override": null,
      "description": "Интерактивная демонстрация — как графы растут, ломаются, перестраиваются. Игра с динамикой связей.",
      "_source_app": "app-22"
    },
    {
      "id": "mc-fractal-stained-glass",
      "status": "confirmed",
      "title": "Фрактальные витражи",
      "subtitle": null,
      "speaker": "Ася",
      "speaker_role": null,
      "slot": "slot-stations-3-2",
      "duration_override": null,
      "description": "Витражи во фрактальной геометрии. Можно сделать свой и забрать.",
      "_source_app": "app-27"
    },
    {
      "id": "station-4-1",
      "status": "placeholder",
      "title": "Станция TBA",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "slot": "slot-stations-4-1",
      "duration_override": null,
      "description": null
    },
    {
      "id": "station-4-2",
      "status": "placeholder",
      "title": "Станция TBA",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "slot": "slot-stations-4-2",
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
      "slot": "slot-music-1",
      "duration_override": null,
      "description": "Музыкант играет руками в воздухе. Инструмент, которому больше ста лет (его прадед — Лев Термен — изобретатель). Музыка ближе к академической."
    },
    {
      "id": "music-rap",
      "status": "confirmed",
      "title": "Научно-технический рэп",
      "subtitle": null,
      "speaker": "Влад Горелов",
      "speaker_role": "музыкант, научно-технический рэп",
      "slot": "slot-rap-evening",
      "duration_override": null,
      "description": "Музыкальная программа переходного интенсива между Терменом и ночной танцевальной частью."
    },
    {
      "id": "music-brinstar",
      "status": "tentative",
      "title": "Brinstar",
      "subtitle": null,
      "speaker": "Brinstar",
      "speaker_role": "музыкант",
      "slot": "slot-music-2",
      "duration_override": null,
      "description": "Музыкальный сет в ночной части программы. Подробности уточняются."
    },
    {
      "id": "music-spiral-fractal",
      "status": "tentative",
      "title": "Spiral Fractal",
      "subtitle": null,
      "speaker": "Spiral Fractal",
      "speaker_role": "музыкант",
      "slot": "slot-music-3",
      "duration_override": null,
      "description": "Музыкальный сет в поздней ночной части. Подробности уточняются."
    },
    {
      "id": "dance-program",
      "status": "placeholder",
      "title": "Танцевальная программа",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "slot": "slot-dance",
      "duration_override": null,
      "description": "Открытый танцпол, продолжается до закрытия фестиваля."
    },
    {
      "id": "mc-fractal-tiles",
      "status": "confirmed",
      "title": "Фрактал-Ателье: напечатай свой тайлинг",
      "speaker": "Татьяна Зайцева",
      "slot": "slot-stations-4-3",
      "description": "Печать на ткани/бумаге фрактальных замощений — разных тайлингов, сгенерированных аффинными растяжениями.",
      "_source_app": "app-24"
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
      "description": "Музыкальный спектакль с интерактивной возможностью для зрителей влиять на звук.",
      "_source_app": "app-26"
    },
    {
      "id": "discussion-tba",
      "status": "tentative",
      "title": "Дискуссия · TBA",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "slot": "slot-discussion",
      "duration_override": null,
      "description": "Тема дискуссии и состав участников будут объявлены."
    },
    {
      "id": "cinema-feature-pi",
      "status": "tentative",
      "title": "Пи",
      "speaker": "Даррен Аронофски",
      "slot": "slot-cinema-1",
      "description": "Художественный фильм 1998 года. Параноидальный математик в поисках универсальной формулы. Чёрно-белый, психоделический."
    },
    {
      "id": "cinema-feature-doc-order",
      "status": "tentative",
      "title": "TBA",
      "speaker": null,
      "slot": "slot-cinema-2",
      "description": null
    },
    {
      "id": "music-stropharia",
      "title": "Stropharia",
      "speaker": "Stropharia",
      "description": "",
      "slot": "slot-music-5",
      "status": "tentative"
    },
    {
      "id": "music-gonaitei",
      "title": "Gonaitei",
      "speaker": "Gonaitei",
      "description": "",
      "slot": "slot-music-6",
      "status": "tentative"
    },
    {
      "id": "music-hobboth",
      "title": "Hobboth",
      "speaker": "Hobboth",
      "description": "",
      "slot": "slot-music-parallel-1",
      "status": "tentative"
    },
    {
      "id": "music-womba",
      "title": "WOMBA",
      "speaker": "WOMBA",
      "description": "",
      "slot": "slot-music-parallel-2",
      "status": "tentative"
    },
    {
      "id": "music-rombix",
      "title": "Rombix",
      "speaker": "Rombix",
      "description": "",
      "slot": "slot-music-parallel-3",
      "status": "tentative"
    },
    {
      "id": "music-aensof",
      "title": "Aensof",
      "speaker": "Aensof",
      "description": "",
      "slot": "slot-music-parallel-5",
      "status": "tentative"
    },
    {
      "id": "music-darkest-supernova",
      "title": "Darkest Supernova",
      "speaker": "Darkest Supernova",
      "description": "",
      "slot": "slot-music-parallel-6",
      "status": "tentative"
    },
    {
      "id": "cinema-anim-horsthuis",
      "title": "Julius Horsthuis",
      "description": "Цифровой художник из Нидерландов, известный своими завораживающими фрактальными анимациями, которые сочетают в себе абстрактную сложность с кинематографической красотой.",
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "big-1",
      "venue": "main_stage",
      "status": "tentative"
    },
    {
      "id": "cinema-anim-machina",
      "title": "Machina Infinitum",
      "description": "«Эти миры существовали всегда, Machina Infinitum интерпретирует их, позволяя вам их познать»",
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "big-2",
      "venue": "main_stage",
      "status": "tentative"
    },
    {
      "id": "cinema-anim-missing-fractals",
      "title": "Missing fractals",
      "description": "The case of the missing fractals. Частный детектив Мэнни Брот решает головокружительные геометрические загадки! Приготовьтесь к потрясающему раскрытию дела о пропавших фракталах!",
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "big-3",
      "venue": "main_stage",
      "status": "tentative"
    },
    {
      "id": "cinema-anim-fractal-baby",
      "title": "Fractal baby",
      "description": "Маленькая девочка разговаривает с младенцем, который пока находится в животе у матери. Она перечисляет все возможные причины, по которым ему следует выйти вовне...",
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "mid-1",
      "venue": "main_stage",
      "status": "tentative"
    },
    {
      "id": "cinema-anim-like-in-a-dream",
      "title": "Like in a dream",
      "description": "Анимация, посвящённая проекту «Атлас человека» Брайана Альвареса из Калифорнийского университета в Беркли и иллюстрирующая его идею о красоте живых организмов.",
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "mid-2",
      "venue": "main_stage",
      "status": "tentative"
    },
    {
      "id": "cinema-anim-worlds-within-worlds",
      "title": "Worlds Within Worlds",
      "description": "Worlds Within Worlds: Tanawha. Аудиовизуальное исследование пространства, времени, размерности, геометрии, сознания и биоразнообразия.",
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "mid-3",
      "venue": "main_stage",
      "status": "tentative"
    },
    {
      "id": "cinema-short-big-brains",
      "title": "Big Brains, Small Films",
      "description": "Фильм основан на последнем интервью Бенуа Мандельброта, записанном в 2010 году всего за 19 дней до его смерти. В этом интервью «отец фракталов» делится воспоминаниями о своём пути в математике и о том, как его уникальный взгляд на мир привёл к открытию фрактальной геометрии.",
      "slot": "slot-interlude-1",
      "status": "tentative"
    },
    {
      "id": "cinema-short-fractal",
      "title": "Fractal",
      "description": "Как оплакивать потерю того, чего у тебя никогда не было? Грейс живёт воспоминаниями и мечтами о том, что могло бы быть, после потери того, чего у неё никогда и не было.",
      "slot": "slot-interlude-2",
      "status": "tentative"
    },
    {
      "id": "cinema-short-fractal-universe",
      "title": "Fractal universe?",
      "description": "Could our universe be fractal? Может ли простая математика создать целую вселенную? Что общего у брокколи с Большим взрывом? И какое отношение это имеет к таким видеоиграм, как «No Man's Sky» или «Minecraft»?",
      "slot": "slot-interlude-3",
      "status": "tentative"
    },
    {
      "id": "cinema-short-menger-eiffel",
      "title": "Menger meets Eiffel",
      "description": "Karl Menger meeting Gustave Eiffel in a Time Machine. Идея Машины Времени, позволяющей зрителю попеременно перемещаться с разной скоростью и в разных направлениях между различными частями этого бесконечного путешествия, демонстрируется в этом фильме на разных уровнях.",
      "category": "cinema",
      "subcategory": "short",
      "apollo_slot": "mid-1",
      "venue": "main_stage",
      "status": "tentative"
    }
  ],
  "_howto": {
    "schema": "Источник правды о программе фестиваля. Структура (схема v17+, актуально на v24): time_slots — где и когда, events — что (название, спикер, описание), exhibits — постоянные экспонаты вне таймлайна, fern_leaves — 21 лист папоротника, venues и categories — справочники. Поля venue/category/apollo_slot/subcategory живут на time_slots; события наследуют их через slot.",
    "add_event": "Добавь объект в массив events: id, title, slot (id слота), speaker, description, status. Поля venue/category/apollo_slot — на слот, не на событие.",
    "add_slot": "Новый временной слот в time_slots: start, end, type (talk/discussion/station/music/music-extra/dance/cinema/interlude/networking), venue (id из data.venues), category, apollo_slot, tool_label. Привязка к листу фрактала вычисляется автоматически по slot.start; для override — поле slot.leaf.",
    "rename_venue": "Меняй только venues[id].display, id (main_stage и т.д.) оставляй — на него ссылаются слоты.",
    "change_status": "placeholder → tentative → confirmed. confirmed подразумевает заполненные speaker, title, description.",
    "categories": "Семь фиксированных: popsci, music, art, workshop, experiment, cinema, social. art только в exhibits, не на слотах.",
    "category_choice_rule": "По доминанте: что человек делает. Слушает → popsci. Делает руками → workshop. Наблюдает интерактивный объект → experiment (опыт) или art (произведение). Делает с другими → social.",
    "apollo_slot": "apollo_slot — позиция события на круге Аполлония внутри его категории. На сайте index.html события находятся по ключу category:subcategory:apollo_slot. Значения: big-1, big-2, big-3 (большие позиции), mid-1, mid-2, mid-3 (средние), ear-1, ear-2, ear-3 (маленькие декоративные), center (центр, для общения). Позиция должна быть уникальной в пределах одной (category, subcategory) — иначе на круге второе событие перетрёт первое. Пара (category, subcategory) разносит события по подкругам внутри категории; например для music: main_stage / big_bar / courtyard, у каждого свой набор позиций. apollo_slot живёт на slot (а не на event), event получает его через enrichEventsFromSlots при загрузке.",
    "subcategory": "Только для music/cinema/art. music → main_stage/big_bar/courtyard (= venue). cinema → feature/short/animation. art → art/installation/media.",
    "fern_leaves": "Массив из 21 листа фрактала. Поля: id, start, end, side (headline/side/tail), address (координаты в SVG, не трогать). Привязка слот→лист: алгоритм в index.html и в programmer.html (findLeafForSlot). По slot.type определяется side (talk/discussion+music на main_stage → headline; dance → tail; остальное → side). Лист выбирается по slot.start: первый лист этой стороны, чьё окно [start, end) содержит slot.start. Для override — slot.leaf.",
    "exhibits_vs_events": "events — те что в таймлайне (имеют slot). exhibits — постоянные арт-объекты, висят весь вечер. Оба попадают в Аполлонию.",
    "programmer": "UI-инструмент для редактирования этого файла — programmer.html в том же репо. Загружается с github pages, экспорт через кнопку «Скачать festival-data.js»."
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
      "title": "TBA",
      "speaker": null,
      "description": null,
      "subcategory": "media",
      "apollo_slot": "big-1"
    },
    {
      "id": "media-shchelochi",
      "kind": "media",
      "status": "tentative",
      "title": "TBA",
      "speaker": null,
      "description": null,
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
      "apollo_slot": "big-3",
      "_source_app": "app-28"
    },
    {
      "id": "inst-tetraquark",
      "kind": "installation",
      "status": "tentative",
      "title": "Очарование тетракварка",
      "speaker": "Alex Mu",
      "description": "Инсталляция о тетракварках, заявка app-5/6 от Alex Mu — детали в карточке заявки.",
      "subcategory": "installation",
      "apollo_slot": "big-1",
      "_source_app": "app-4"
    },
    {
      "id": "inst-polyhedral-exhibit",
      "kind": "installation",
      "status": "tentative",
      "title": "Полиэдральное цветение",
      "speaker": "Максимилиан Роганов",
      "description": "Складные многогранники. Деталь в заявке app-14.",
      "subcategory": "installation",
      "apollo_slot": "big-2",
      "_source_app": "app-12"
    },
    {
      "id": "inst-element1",
      "kind": "installation",
      "status": "tentative",
      "title": "Элемент 1",
      "speaker": "Ира",
      "description": "Инсталляция, заявка app-15 от автора Ира.",
      "subcategory": "installation",
      "apollo_slot": "big-3",
      "_source_app": "app-13"
    },
    {
      "id": "inst-mimesis",
      "kind": "installation",
      "status": "tentative",
      "title": "Мимесис",
      "speaker": "Евдокия Дергилёва, Ирина Сафонова",
      "description": "Привязано к заявке app-20 («Объект из серии Детские иллюзии»). Авторы планируют другой объект — Мимесис. Детали — у них.",
      "subcategory": "installation",
      "apollo_slot": "mid-1",
      "_source_app": "app-18"
    },
    {
      "id": "art-plato",
      "kind": "art",
      "status": "tentative",
      "title": "Артефакты Плато",
      "speaker": "Александр Солеев",
      "description": "Мыльные плёнки на проволочных рамках. Минимальные поверхности. Деталь в заявке app-9.",
      "subcategory": "art",
      "apollo_slot": "big-1",
      "_source_app": "app-7"
    },
    {
      "id": "art-fluoro",
      "kind": "art",
      "status": "tentative",
      "title": "TBA",
      "speaker": null,
      "description": null,
      "subcategory": "art",
      "apollo_slot": "big-2"
    },
    {
      "id": "art-string-1",
      "kind": "art",
      "status": "tentative",
      "title": "String Art",
      "speaker": "(уточняется)",
      "description": "Картины в технике String Art. Авторство уточняется.",
      "subcategory": "art",
      "apollo_slot": "big-3"
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
      "kind": "installation",
      "_source_app": "app-3"
    }
  ],
  "fern_leaves": [
    {
      "id": "leaf-side-morning",
      "address": [
        3
      ],
      "side": "side",
      "start": "14:00",
      "end": "16:00"
    },
    {
      "id": "leaf-headline-1",
      "address": [
        2
      ],
      "side": "headline",
      "start": "16:00",
      "end": "17:30"
    },
    {
      "id": "leaf-headline-2",
      "address": [
        1,
        2
      ],
      "side": "headline",
      "start": "17:30",
      "end": "19:00"
    },
    {
      "id": "leaf-headline-3",
      "address": [
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "19:00",
      "end": "20:30"
    },
    {
      "id": "leaf-headline-4",
      "address": [
        1,
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "20:30",
      "end": "22:00"
    },
    {
      "id": "leaf-side-1",
      "address": [
        1,
        3
      ],
      "side": "side",
      "start": "16:30",
      "end": "17:30"
    },
    {
      "id": "leaf-side-2",
      "address": [
        1,
        1,
        3
      ],
      "side": "side",
      "start": "17:30",
      "end": "18:30"
    },
    {
      "id": "leaf-side-3",
      "address": [
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "18:30",
      "end": "19:30"
    },
    {
      "id": "leaf-side-4",
      "address": [
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "19:30",
      "end": "20:30"
    },
    {
      "id": "leaf-side-5",
      "address": [
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "20:30",
      "end": "22:00"
    },
    {
      "id": "leaf-music-headline-1",
      "address": [
        1,
        1,
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "22:00",
      "end": "23:00"
    },
    {
      "id": "leaf-music-side-1",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "22:00",
      "end": "23:00"
    },
    {
      "id": "leaf-music-headline-2",
      "address": [
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "23:00",
      "end": "00:00"
    },
    {
      "id": "leaf-music-side-2",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "23:00",
      "end": "00:00"
    },
    {
      "id": "leaf-music-headline-3",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "00:00",
      "end": "01:00"
    },
    {
      "id": "leaf-music-side-3",
      "address": [
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
      "side": "side",
      "start": "00:00",
      "end": "01:00"
    },
    {
      "id": "leaf-music-headline-4",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "01:00",
      "end": "02:00"
    },
    {
      "id": "leaf-music-side-4",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "01:00",
      "end": "02:00"
    },
    {
      "id": "leaf-music-headline-5",
      "address": [
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
      "side": "headline",
      "start": "02:00",
      "end": "03:00"
    },
    {
      "id": "leaf-music-side-5",
      "address": [
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
      "side": "side",
      "start": "02:00",
      "end": "03:00"
    },
    {
      "id": "leaf-tail",
      "address": "tail",
      "side": "tail",
      "start": "03:00",
      "end": "04:00"
    }
  ]
};

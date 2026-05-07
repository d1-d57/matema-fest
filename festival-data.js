// === База событий фестиваля «Фрактальная Одиссея», 23 мая 2026 ===
window.FESTIVAL_DATA = {
  "_meta": {
    "version": "2026-05-07-v18",
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
    "changes_v12": "Кинопрограмма наполнена: 4 короткометражки в субкат short (3 поставлены в интерлюды, 4-я ждёт слота 1 ч), 10 анимаций в субкат animation (без timeline-слотов, заглушки лайнапа), 4 полнометражных в субкат feature (Pi + 3 документалки). Это первичный лайнап, конкретные названия и авторы уточняются.",
    "changes_v13": "TBA-режим для неподтверждённых: Флюоро, ArtTech, Щелочь, все анимации, второй полный метр. String Art объединён в одну карточку (было 2). Полнометражных оставлено 2 (было 4): Пи + TBA. Реальные названия и автор спрятаны в служебных полях _team_real_title/_team_real_speaker для команды; на сайт идёт только title=TBA.",
    "changes_v14": "УБРАНЫ ART-ДУБЛИ из events. Все 11 art-объектов теперь живут только в exhibits. Сайт научился читать exhibits через apolloItems в Аполлонии. Папоротник: art-id удалены из захардкоженных SPOTS/SUBSPOTS, заменены на placeholder-станции.",
    "changes_v15": "Зоны: тройной хедлайнер (Дискуссия+Нетворкинг+Рэп) на одном листе [1,1,1,1,2]. Утренний блок (Евдокимов+Тарасевич) на одном листе [3]. Cinema/interlude переадресованы внутрь блоков станций. Кино 2 продлено до 22:00.",
    "changes_v16": "Короткометражки и кино перенесены на адреса блоков-листьев (было: подлисты [...,1,2]/[...,1,3], стало: тот же адрес что у блока станций). Это требуется новой логикой v19-B где SPOTS генерируется из time_slots по fern_address: все события одного адреса становятся зонами одного листа.",
    "changes_v17": "Разделение составных слотов: slot-stations-1..4 разбиты по событиям (slot-stations-1-1, -1-2, -1-3 и т.д.). Каждый слот теперь содержит максимум 1 событие. Поля category/apollo_slot/subcategory перенесены с событий на слоты (это атрибуты места, не карточки). У событий-сирот (banks: cinema/animation без слота) поля остались. Добавлено slot.type — короткий тип: talk/station/interlude/cinema/music/discussion/networking/dance/music-extra. Также перенесён venue с событий на слоты.",
    "changes_v18": "Введена секция fern_leaves — явный список листьев папоротника с временами и сторонами (headline / side / tail). Поле fern_address удалено из всех слотов. Привязка слот→лист теперь делается алгоритмом в индексе по правилу: хедлайнерский слот (talk/discussion) → headline лист по времени; иначе → side лист. Изменены времена: cinema-1 (Пи) 19:30-21:00, cinema-2 21:00-22:00, dance 01-04. Музыкальная программа переразвязана: Brinstar 23-00, Spiral Fractal 00-01. Удалены slot-music-4 и slot-music-parallel-4. Переименована \"Малая сцена\" в \"Музыка (малая сцена)\"."
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
      "venue": "small_bar"
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
      "category": "workshop",
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
      "venue": "main_stage"
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
      "venue": "small_bar"
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
      "venue": "small_bar"
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
      "venue": "small_bar"
    },
    "slot-dance": {
      "start": "01:00",
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
      "end": "21:30",
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
      "description": "Ножницы, лист А4, инструкция. За 5–10 минут — фрактальная модель в руках. Можно собрать дома ещё."
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
      "description": "Базовые черты, точки, линии. Из них — иероглифы. Простота порождает сложность через повторение."
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
      "description": "Рисуночные методики, которыми психиатрия выявляет психические расстройства. Самоподобие как клинический инструмент."
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
      "description": "Складные конструкции из бумаги, использующиеся в инженерии — солнечные панели, медицинские стенты. Складывание по математическим правилам."
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
      "description": "Окрашивание тканей с фрактальными разводами. На выходе — узор, никогда не повторяющийся."
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
      "description": "Подойти к инструменту, поиграть руками в воздухе. К Петру Термену готовиться никак не нужно — просто можно попробовать."
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
      "description": "Интерактивная демонстрация — как графы растут, ломаются, перестраиваются. Игра с динамикой связей."
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
      "description": "Витражи во фрактальной геометрии. Можно сделать свой и забрать."
    },
    {
      "id": "station-4-1",
      "status": "placeholder",
      "title": "Станция 4.1",
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
      "title": "Станция 4.2",
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
      "id": "music-parallel-1",
      "status": "placeholder",
      "title": "Малая сцена 1",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "slot": "slot-music-parallel-1",
      "duration_override": null,
      "description": null
    },
    {
      "id": "music-parallel-2",
      "status": "placeholder",
      "title": "Малая сцена 2",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "slot": "slot-music-parallel-2",
      "duration_override": null,
      "description": null
    },
    {
      "id": "music-parallel-3",
      "status": "placeholder",
      "title": "Малая сцена 3",
      "subtitle": null,
      "speaker": null,
      "speaker_role": null,
      "slot": "slot-music-parallel-3",
      "duration_override": null,
      "description": null
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
      "slot": "slot-discussion",
      "duration_override": null,
      "description": "Тема дискуссии и состав участников будут объявлены."
    },
    {
      "id": "cinema-short-1",
      "status": "tentative",
      "title": "Короткометражка №1",
      "speaker": null,
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
      "title": "TBA",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "big-1",
      "venue": null,
      "slot": null,
      "description": null,
      "links": [
        "https://www.youtube.com/watch?v=WD0xC5PwFmw"
      ]
    },
    {
      "id": "cinema-anim-machina-1",
      "status": "tentative",
      "title": "TBA",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "big-2",
      "venue": null,
      "slot": null,
      "description": null,
      "links": [
        "https://www.youtube.com/watch?v=dDBsPFk5nuQ"
      ]
    },
    {
      "id": "cinema-anim-machina-2",
      "status": "tentative",
      "title": "TBA",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "big-3",
      "venue": null,
      "slot": null,
      "description": null,
      "links": [
        "https://www.youtube.com/watch?v=CUIaulVmmys"
      ]
    },
    {
      "id": "cinema-anim-cartoon-1",
      "status": "tentative",
      "title": "TBA",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "mid-1",
      "venue": null,
      "slot": null,
      "description": null,
      "links": [
        "https://www.youtube.com/watch?v=0C75vRVL5lE"
      ]
    },
    {
      "id": "cinema-anim-cartoon-2",
      "status": "tentative",
      "title": "TBA",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "mid-2",
      "venue": null,
      "slot": null,
      "description": null,
      "links": [
        "https://vimeo.com/channels/561739/36608074"
      ]
    },
    {
      "id": "cinema-anim-other-1",
      "status": "tentative",
      "title": "TBA",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "mid-3",
      "venue": null,
      "slot": null,
      "description": null,
      "links": [
        "https://www.youtube.com/watch?v=S530Vwa33G0"
      ]
    },
    {
      "id": "cinema-anim-vimeo-1",
      "status": "tentative",
      "title": "TBA",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "center",
      "venue": null,
      "slot": null,
      "description": null,
      "links": [
        "https://vimeo.com/channels/561739/34544497"
      ]
    },
    {
      "id": "cinema-anim-vimeo-2",
      "status": "tentative",
      "title": "TBA",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "ear-1",
      "venue": null,
      "slot": null,
      "description": null,
      "links": [
        "https://vimeo.com/channels/561739/43351466"
      ]
    },
    {
      "id": "cinema-anim-simple-1",
      "status": "tentative",
      "title": "TBA",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "ear-2",
      "venue": null,
      "slot": null,
      "description": null,
      "links": [
        "https://www.youtube.com/watch?v=zXTpASSd9xE"
      ]
    },
    {
      "id": "cinema-anim-simple-2",
      "status": "tentative",
      "title": "TBA",
      "speaker": null,
      "category": "cinema",
      "subcategory": "animation",
      "apollo_slot": "ear-3",
      "venue": null,
      "slot": null,
      "description": null,
      "links": [
        "https://www.youtube.com/watch?v=Hk_tHcJzTOo"
      ]
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
      "kind": "installation"
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
        1,
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
      "id": "leaf-tail",
      "address": "tail",
      "side": "tail",
      "start": "01:00",
      "end": "04:00"
    }
  ]
};

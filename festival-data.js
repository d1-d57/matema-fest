// === База событий фестиваля «Фрактальная Одиссея» v31 ===
// Автоматически сгенерировано programmer-tool 2026-05-21T13:20:51.536Z
window.FESTIVAL_DATA = {
  "_meta": {
    "version": "2026-05-09-v30-handfix-yakovlev",
    "comment": "База событий фестиваля «Фрактальная Одиссея», 23 мая 2026. Структура: time-slots → events → venues → categories. Поля display в venues и categories — то что видит пользователь. Поля id — внутренние ключи, скучные и стабильные, не меняются при ребрендинге.",
    "changes_v17": "Разделение составных слотов: slot-stations-1..4 разбиты по событиям (slot-stations-1-1, -1-2, -1-3 и т.д.). Каждый слот теперь содержит максимум 1 событие. Поля category/apollo_slot/subcategory перенесены с событий на слоты (это атрибуты места, не карточки). У событий-сирот (banks: cinema/animation без слота) поля остались. Добавлено slot.type — короткий тип: talk/station/interlude/cinema/music/discussion/networking/dance/music-extra. Также перенесён venue с событий на слоты.",
    "changes_v18": "Введена секция fern_leaves — явный список листьев папоротника с временами и сторонами (headline / side / tail). Поле fern_address удалено из всех слотов. Привязка слот→лист теперь делается алгоритмом в индексе по правилу: хедлайнерский слот (talk/discussion) → headline лист по времени; иначе → side лист. Изменены времена: cinema-1 (Пи) 19:30-21:00, cinema-2 21:00-22:00, dance 01-04. Музыкальная программа переразвязана: Brinstar 23-00, Spiral Fractal 00-01. Удалены slot-music-4 и slot-music-parallel-4. Переименована \"Малая сцена\" в \"Музыка (малая сцена)\".",
    "changes_v19": "Сдвиг всех хедлайнерских листьев на 1 уровень вниз (убрана пустота слева). Расширение музыкальной программы до 03:00: добавлены 4 новых слота (slot-music-5, slot-music-parallel-5, slot-music-6, slot-music-parallel-6) и 4 новых листа. Добавлены 7 новых музыкантов: Stropharia, Gonaitei, Hobboth, WOMBA, Rombix, Aensof, Darkest Supernova. Танцы (slot-dance) сжаты до 03:00-04:00.",
    "changes_v21": "Добавлены 6 анимаций (cinema/animation) и 4 короткометражки (cinema/short). Из коротких 3 привязаны к существующим interlude-слотам в расписании, 4-я (длинное название Menger meets Eiffel) — сирота для ночного показа. Удалены 11 старых TBA-сирот.",
    "changes_v22": "venue музыки на малой сцене (slot-music-parallel-1/2/3/5/6) перенесён с small_bar на big_bar — параллельная музыка идёт в Большом баре, в lane 2; малый бар освобождается. Восстановлены связи _source_app между событиями/экспонатами и заявками open call (были утеряны при миграции v9->v17). 10 events + 7 exhibits получили ссылки на свои заявки.",
    "changes_v23": "Добавлены slot-stations-1-4 (workshop, courtyard) и slot-stations-3-3 (workshop, courtyard) — двор не должен пустовать днём. Раньше Станции 1 и Станции 3 были только на big_bar+small_bar, теперь как Станции 2 и 4 — на трёх площадках включая двор.",
    "changes_v24": "Чистка данных: status=tentative проставлен у 17 событий (новые музыканты + анимации + короткометражки). label_for_zoom сгенерирован у 4 ночных music-слотов. Закрыты apollo_slot пропуски у slot-stations-2-3 и -4-3. Резолвлены дубли apollo_slot в workshop (slot-stations-1-4 и -3-3 переведены в experiment). Теперь экспериментов столько же сколько мастерских.",
    "changes_v25": "Растянут slot-networking до 22:00 (90 минут вместо 60). Placeholder events station-4-1 и station-4-2 переименованы в \"Станция TBA\" — нумерация по индексу была визуальным шумом, статус остался placeholder. Раздел _howto обновлён: документировано поле apollo_slot и связь с subcategory.",
    "changes_v26": "Перенос APPLICATIONS_FALLBACK из programmer.html в festival-data.js как раздел applications. Теперь все заявки 1-28 в одном файле, программер не содержит захардкоженных данных. Заявки 29+ продолжают подтягиваться из Sheets через localStorage sync. Поле exclusive=true проставлено у slot-networking и всех вечерних music/dance слотов в big_bar — они визуально занимают весь venue в программере (без разделения на подколонки).",
    "changes_v27": "Переименование залов: main_stage→\"Зал Мандельброт\", big_bar→\"Бар Серпинский\", small_bar→\"Бар Жюлиа\", courtyard→\"Кантор\". Полное обновление музыкальной программы: Main (Зал Мандельброт) 22:00-03:00 = Пётр Термен, Stropharia, Rombix, Womba, Hobboth. Pink (Бар Серпинский, со смещением -30 мин) 21:30-03:30 = Brinstaar, Spiralfractal, Morakh, ænsof, garish_cyborg, The Darkest Supernova. Добавлен новый слот slot-music-parallel-4 (00:30-01:30).",
    "changes_v28": "Кино: TBA (1 час) переехал в первый слот 19:30-20:30, «Пи» (1.5 часа) — во второй слот 20:30-22:00. Длительности слотов изменены под фильмы.",
    "last_modified": "2026-05-21T13:20:51.534Z",
    "modified_by": "programmer-tool",
    "changes_v30": "Удалён кривой slot-custom-1778344218071 (был без venue/type — артефакт неудачной попытки UI); Создан slot-networking: 20:30-21:30, Бар Жюлиа, social/mid-1, exclusive; social-rosetka привязан к slot-networking; slot-interlude-3 (перформанс «Точка-ноль»): category cinema→social, apollo big-3→mid-2 (резолвит дубль с slot-discussion); app-34 (Богатикова) → accepted, создан exh-bogatikova-mini в галерее (tentative); app-1 (Руслан), app-2 (Надежда) → rejected (были «в Отказах» по словам Ивана); Новые: ev-letnyaya-shkola-linguistics, ev-maskul-prefractals (events confirmed без слота), exh-lenticular-fractals (exhibit art confirmed)",
    "changes_yakovlev": "Добавлен слот slot-yakovlev (Иван Яковлев · Фракталы вокруг нас, library 14:00-15:00, popsci, talk). slot-evdokimov переименован в \"Библиотека 2\".",
    "changes_v31": "Массовое добавление поля links у 36 карточек по links-table.md: arts, music, popsci, social, stations. 4 карточки с мусорными ссылками (Карнаухов, Серомаха, FracLife/Юля, Математический арт/Андрей) пересобраны в чистый формат [{label,url}]. У Гусева ссылка TLF проставлена и на лекции (talk-gusev-nn), и на станции (station-gusev-chaos).",
    "changes_v32": "Музыкальная программа переразвязана. Main (Зал Мандельброт) — добавлен Misha Nikitin на финальный слот 03:00-04:00 (slot-dance переделан с type=dance в type=music; категория не изменилась). Pink (Бар Серпинский) — добавлен новый исполнитель S66 в 23:30, после него все смещены: Morakh 00:15, ænsof 01:10, garish_cyborg 02:10, The Darkest Supernova 03:00 (финал). Новые длительности сетов: 45/55/60/50/60 мин. Добавлен slot-music-parallel-7 (03:00-04:00) для финала Pink. id карточек music-pink-XXXX остаются стабильными ключами, но больше не соответствуют времени по имени — заменены title/description/links по своим slot-ам.",
    "changes_v33": "Художественная программа. Удалены inst-mimesis (Мимесис) и exh-bogatikova-mini (Фрактал в современном искусстве). Добавлены 4 новых art-карточки: art-monads-mirrors (Монады — зеркала души, А. Алеф Вайсман, art/art, big-2), inst-anthill-sierpinski (Муравейник Серпинского, арт-дуэт EVPRAXIS, art/installation, big-3), media-cactus-juice (Cactus Juice, art/media, big-3), media-fractal-reflection (Фрактальное Отражение, Артём Ткач, art/media, mid-1). Имена дополнены/исправлены: art-plato + Солеев в описании, art-other-spaces + Петра в описании, inst-element1 speaker «Ира» → «Ирина Канделариа», inst-tetraquark speaker «Alex Mu» → «Алекс Мухин», inst-polyhedral-exhibit speaker «Максимилиан» → «Максимилиано» и встроено в описание. Музыка: music-main-22 title «Сет Петра Термена» → «Пётр Термен». Подзаголовок subcategories.art.installation.display «инсталляции» → «объекты». В index.html подзаголовок категории Музыка «DJ-сеты в течение всего дня» → «live-выступления».",
    "changes_v34": "Большое обновление: убрали подкатегорию art/digital, перенесли её содержимое (3 карточки FracLife, Математический арт, Эволюция графов) в station/interactive. Добавлена subcategories.experiment.interactive со slot=center — теперь центр круга «эксперименты» на Аполлонии занят кругом «интерактивы». Партнёрская склейка Гусева: удалена station-gusev-chaos, talk-gusev-nn превращена в multi-slot карточку с 3 слотами (slot-gusev-talk + slot-st-bb-B + slot-st-bb-E), описание объединено. Категория Гусева на Аполлонии — popsci (одна карточка). Центр круга эксперименты теперь свободен от Гусева и занят кругом интерактивов."
  },
  "venues": {
    "library": {
      "display": "Библиотека Достоевского",
      "short": "Библиотека",
      "note": "Чистопрудный 23, малый зал",
      "lanes": 1
    },
    "main_stage": {
      "display": "Зал Мандельброт",
      "short": "Мандельброт",
      "note": "главная сцена клуба Лахесис",
      "apollo_label": "главная сцена",
      "lanes": 1
    },
    "big_bar": {
      "display": "Бар Серпинский",
      "short": "Серпинский",
      "note": "большой бар",
      "apollo_label": "большой бар",
      "lanes": 1
    },
    "small_bar": {
      "display": "Бар Жюлиа",
      "short": "Жюлиа",
      "note": "малый бар",
      "lanes": 2
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
    },
    "station": {
      "display": "станции",
      "size": "big",
      "comment": "мастерские и эксперименты — два круга на Аполлонии в типе station"
    }
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
        "display": "объекты"
      },
      "media": {
        "slot": "big-3",
        "display": "медиа-арт"
      }
    },
    "experiment": {
      "interactive": {
        "slot": "center",
        "display": "интерактивы"
      }
    }
  },
  "time_slots": {
    "slot-evdokimov": {
      "start": "15:00",
      "end": "16:00",
      "label_for_zoom": "Михаил Евдокимов · 14:00",
      "tool_label": "Библиотека 2",
      "type": "talk",
      "category": "popsci",
      "venue": "library",
      "leaf": "leaf-side-morning"
    },
    "slot-tarasevich": {
      "start": "20:30",
      "end": "21:30",
      "label_for_zoom": "Григорий Тарасевич · 20:30",
      "tool_label": "Квиз",
      "type": "talk",
      "category": "popsci",
      "venue": "small_bar",
      "exclusive": true
    },
    "slot-gelfand": {
      "start": "16:00",
      "end": "17:00",
      "label_for_zoom": "Михаил Гельфанд · 16:00",
      "tool_label": "Лекция 1",
      "type": "talk",
      "category": "popsci",
      "venue": "main_stage"
    },
    "slot-st-sb1-A": {
      "start": "16:00",
      "end": "16:45",
      "label_for_zoom": "Станции · волна 1 · 16:00",
      "tool_label": "Станции · волна 1",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 0
    },
    "slot-st-sb2-A": {
      "start": "16:00",
      "end": "16:45",
      "label_for_zoom": "Станции · волна 1 · 16:00",
      "tool_label": "Станции · волна 1",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 1
    },
    "slot-st-bb-A": {
      "start": "16:00",
      "end": "16:45",
      "label_for_zoom": "Станции · волна 1 · 16:00",
      "tool_label": "Станции · волна 1",
      "type": "station",
      "category": "station",
      "venue": "big_bar"
    },
    "slot-st-cy-A": {
      "start": "16:00",
      "end": "16:45",
      "label_for_zoom": "Станции · волна 1 · 16:00",
      "tool_label": "Станции · волна 1",
      "type": "station",
      "category": "station",
      "venue": "courtyard"
    },
    "slot-st-sb1-B": {
      "start": "16:45",
      "end": "17:30",
      "label_for_zoom": "Станции · волна 2 · 16:45",
      "tool_label": "Станции · волна 2",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 0
    },
    "slot-st-sb2-B": {
      "start": "16:45",
      "end": "17:30",
      "label_for_zoom": "Станции · волна 2 · 16:45",
      "tool_label": "Станции · волна 2",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 1
    },
    "slot-st-bb-B": {
      "start": "16:45",
      "end": "17:30",
      "label_for_zoom": "Станции · волна 2 · 16:45",
      "tool_label": "Станции · волна 2",
      "type": "station",
      "category": "station",
      "venue": "big_bar"
    },
    "slot-st-cy-B": {
      "start": "16:45",
      "end": "17:30",
      "label_for_zoom": "Станции · волна 2 · 16:45",
      "tool_label": "Станции · волна 2",
      "type": "station",
      "category": "station",
      "venue": "courtyard"
    },
    "slot-st-sb1-C": {
      "start": "17:30",
      "end": "18:15",
      "label_for_zoom": "Станции · волна 3 · 17:30",
      "tool_label": "Станции · волна 3",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 0
    },
    "slot-st-sb2-C": {
      "start": "17:30",
      "end": "18:15",
      "label_for_zoom": "Станции · волна 3 · 17:30",
      "tool_label": "Станции · волна 3",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 1
    },
    "slot-st-bb-C": {
      "start": "17:30",
      "end": "18:15",
      "label_for_zoom": "Станции · волна 3 · 17:30",
      "tool_label": "Станции · волна 3",
      "type": "station",
      "category": "station",
      "venue": "big_bar"
    },
    "slot-st-cy-C": {
      "start": "17:30",
      "end": "18:15",
      "label_for_zoom": "Станции · волна 3 · 17:30",
      "tool_label": "Станции · волна 3",
      "type": "station",
      "category": "station",
      "venue": "courtyard"
    },
    "slot-st-sb1-D": {
      "start": "18:15",
      "end": "19:00",
      "label_for_zoom": "Станции · волна 4 · 18:15",
      "tool_label": "Станции · волна 4",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 0
    },
    "slot-st-sb2-D": {
      "start": "18:15",
      "end": "19:00",
      "label_for_zoom": "Станции · волна 4 · 18:15",
      "tool_label": "Станции · волна 4",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 1
    },
    "slot-st-bb-D": {
      "start": "18:15",
      "end": "19:00",
      "label_for_zoom": "Станции · волна 4 · 18:15",
      "tool_label": "Станции · волна 4",
      "type": "station",
      "category": "station",
      "venue": "big_bar"
    },
    "slot-st-cy-D": {
      "start": "18:15",
      "end": "19:00",
      "label_for_zoom": "Станции · волна 4 · 18:15",
      "tool_label": "Станции · волна 4",
      "type": "station",
      "category": "station",
      "venue": "courtyard"
    },
    "slot-st-sb1-E": {
      "start": "19:00",
      "end": "19:45",
      "label_for_zoom": "Станции · волна 5 · 19:00",
      "tool_label": "Станции · волна 5",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 0
    },
    "slot-st-sb2-E": {
      "start": "19:00",
      "end": "19:45",
      "label_for_zoom": "Станции · волна 5 · 19:00",
      "tool_label": "Станции · волна 5",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 1
    },
    "slot-st-bb-E": {
      "start": "19:00",
      "end": "19:45",
      "label_for_zoom": "Станции · волна 5 · 19:00",
      "tool_label": "Станции · волна 5",
      "type": "station",
      "category": "station",
      "venue": "big_bar"
    },
    "slot-st-cy-E": {
      "start": "19:00",
      "end": "19:45",
      "label_for_zoom": "Станции · волна 5 · 19:00",
      "tool_label": "Станции · волна 5",
      "type": "station",
      "category": "station",
      "venue": "courtyard"
    },
    "slot-st-sb1-F": {
      "start": "19:45",
      "end": "20:30",
      "label_for_zoom": "Станции · волна 6 · 19:45",
      "tool_label": "Станции · волна 6",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 0
    },
    "slot-st-sb2-F": {
      "start": "19:45",
      "end": "20:30",
      "label_for_zoom": "Станции · волна 6 · 19:45",
      "tool_label": "Станции · волна 6",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 1
    },
    "slot-st-bb-F": {
      "start": "19:45",
      "end": "20:30",
      "label_for_zoom": "Станции · волна 6 · 19:45",
      "tool_label": "Станции · волна 6",
      "type": "station",
      "category": "station",
      "venue": "big_bar"
    },
    "slot-st-cy-F": {
      "start": "19:45",
      "end": "20:30",
      "label_for_zoom": "Станции · волна 6 · 19:45",
      "tool_label": "Станции · волна 6",
      "type": "station",
      "category": "station",
      "venue": "courtyard"
    },
    "slot-rajgorodski": {
      "start": "17:30",
      "end": "18:30",
      "label_for_zoom": "Андрей Райгородский · 17:30",
      "tool_label": "Лекция 2",
      "type": "talk",
      "category": "popsci",
      "venue": "main_stage"
    },
    "slot-skripchenko": {
      "start": "19:00",
      "end": "20:00",
      "label_for_zoom": "Александра Скрипченко · 19:00",
      "tool_label": "Лекция 3",
      "type": "talk",
      "category": "popsci",
      "venue": "main_stage"
    },
    "slot-music-1": {
      "start": "22:00",
      "end": "23:00",
      "label_for_zoom": "Главная сцена · 22:00",
      "tool_label": "Музыка 1",
      "type": "music",
      "category": "music",
      "venue": "main_stage"
    },
    "slot-music-2": {
      "start": "23:00",
      "end": "00:00",
      "label_for_zoom": "Главная сцена · 23:00",
      "tool_label": "Музыка",
      "type": "music",
      "venue": "main_stage",
      "category": "music"
    },
    "slot-music-3": {
      "start": "00:00",
      "end": "01:00",
      "label_for_zoom": "Главная сцена · 00:00",
      "tool_label": "Музыка",
      "type": "music",
      "category": "music",
      "venue": "main_stage"
    },
    "slot-dance": {
      "start": "03:00",
      "end": "04:00",
      "label_for_zoom": "Главная сцена · 03:00",
      "tool_label": "Музыка · финал",
      "type": "music",
      "category": "music",
      "venue": "main_stage"
    },
    "slot-discussion": {
      "start": "20:30",
      "end": "21:30",
      "label_for_zoom": "Дискуссия · 20:30",
      "tool_label": "Дискуссия",
      "type": "discussion",
      "category": "social",
      "venue": "main_stage",
      "exclusive": false
    },
    "slot-cinema-2": {
      "start": "20:30",
      "end": "22:00",
      "label_for_zoom": "Кино 2 · 20:30",
      "tool_label": "Кино 2",
      "type": "cinema",
      "category": "cinema",
      "venue": "library"
    },
    "slot-interlude-2": {
      "start": "18:30",
      "end": "19:00",
      "label_for_zoom": "Перебив · 18:30",
      "tool_label": "Короткометражки 1",
      "type": "interlude",
      "category": "cinema",
      "venue": "main_stage",
      "exclusive": false
    },
    "slot-interlude-3": {
      "start": "20:30",
      "end": "21:30",
      "label_for_zoom": "Перебив · 20:00",
      "tool_label": "Перфоманс ",
      "type": "interlude",
      "category": "social",
      "venue": "courtyard",
      "leaf": null
    },
    "slot-rap-evening": {
      "start": "21:30",
      "end": "21:50",
      "label_for_zoom": "Научно-технический рэп",
      "tool_label": "Музыка (двор)",
      "type": "music",
      "category": "music",
      "venue": "courtyard",
      "leaf": null,
      "exclusive": false
    },
    "slot-music-5": {
      "venue": "main_stage",
      "start": "01:00",
      "end": "02:00",
      "tool_label": "Музыка",
      "type": "music",
      "category": "music",
      "label_for_zoom": "Музыка · 01:00"
    },
    "slot-music-6": {
      "venue": "main_stage",
      "start": "02:00",
      "end": "03:00",
      "tool_label": "Музыка",
      "type": "music",
      "category": "music",
      "label_for_zoom": "Музыка · 02:00"
    },
    "slot-music-parallel-1": {
      "start": "21:30",
      "end": "22:30",
      "label_for_zoom": "Малая сцена · 21:30",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true,
      "leaf": null
    },
    "slot-music-parallel-2": {
      "start": "22:30",
      "end": "23:30",
      "label_for_zoom": "Малая сцена · 22:30",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true
    },
    "slot-music-parallel-3": {
      "start": "23:30",
      "end": "00:15",
      "label_for_zoom": "Малая сцена · 23:30",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true
    },
    "slot-music-parallel-4": {
      "start": "00:15",
      "end": "01:10",
      "label_for_zoom": "Малая сцена · 00:15",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true
    },
    "slot-music-parallel-5": {
      "start": "01:10",
      "end": "02:10",
      "label_for_zoom": "Малая сцена · 01:10",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true
    },
    "slot-music-parallel-6": {
      "start": "02:10",
      "end": "03:00",
      "label_for_zoom": "Малая сцена · 02:10",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true
    },
    "slot-music-parallel-7": {
      "start": "03:00",
      "end": "04:00",
      "label_for_zoom": "Малая сцена · 03:00",
      "tool_label": "Музыка (малая сцена) · финал",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true
    },
    "slot-networking": {
      "start": "20:30",
      "end": "21:30",
      "venue": "big_bar",
      "type": null,
      "category": "social",
      "exclusive": true,
      "leaf": null,
      "tool_label": "Нетворкинг",
      "label_for_zoom": "Нетворкинг от бюро Розетка"
    },
    "slot-yakovlev": {
      "start": "14:00",
      "end": "15:00",
      "label_for_zoom": "Иван Яковлев · 14:00",
      "tool_label": "Библиотека 1",
      "type": "talk",
      "category": "popsci",
      "venue": "library",
      "leaf": "leaf-side-morning"
    },
    "slot-gusev-talk": {
      "start": "17:00",
      "end": "17:30",
      "label_for_zoom": "Вячеслав Гусев · 17:15",
      "tool_label": "Партнёрское выступление",
      "type": "talk",
      "category": "popsci",
      "venue": "main_stage",
      "exclusive": false
    },
    "slot-cinema-1": {
      "start": "19:30",
      "end": "20:30",
      "label_for_zoom": "Документальный фильм · 19:30",
      "tool_label": "Кино",
      "type": "cinema",
      "category": "cinema",
      "venue": "library"
    },
    "slot-custom-1779301750995": {
      "start": "20:00",
      "end": "20:30",
      "label_for_zoom": "короткометражки ",
      "tool_label": "короткометражки 2",
      "venue": "main_stage",
      "category": "cinema",
      "exclusive": false
    },
    "slot-custom-1779301988086": {
      "start": "21:30",
      "end": "22:00",
      "label_for_zoom": "Перебив",
      "tool_label": "короткометражки 3",
      "venue": "main_stage",
      "category": "cinema",
      "exclusive": false
    }
  },
  "cards": [
    {
      "id": "talk-yakovlev-fractals",
      "status": "accepted",
      "type": "popsci",
      "title": "Фракталы вокруг нас",
      "speaker": "Ваня Яковлев, Полина Романова",
      "description": "Открывающая лекция фестиваля — введение в тему. Расскажем, что такое фракталы, как они устроены, и покажем, где их можно найти: в природе, в искусстве, в математике, в нашей повседневной жизни. Эта лекция задаёт тон всему, что будет происходить на фестивале дальше.",
      "venue": "library",
      "links": [
        {
          "label": "Telegram «Кроссворд Тьюринга»",
          "url": "https://t.me/turings_crossword"
        },
        {
          "label": "Сайт",
          "url": "https://matemateachka.com/mathteacheryakovlev"
        }
      ],
      "_admin": {
        "knows": true,
        "has_announce": true,
        "has_channel_post": true,
        "time_final": true
      },
      "slot": "slot-yakovlev",
      "apollo_slot": "mid-1"
    },
    {
      "id": "talk-evdokimov",
      "status": "accepted",
      "type": "popsci",
      "title": "Задачи-картинки Квантика и Квантландии",
      "subtitle": "решаем задачи вместе с залом",
      "speaker": "Михаил Евдокимов",
      "speaker_role": "автор задач, популяризатор математики",
      "description": "В библиотеке Достоевского Михаил даст задачи, которые можно решить без знания математики — глядя на картинку. Их можно решать вслух, можно молча, можно с детьми и без.",
      "venue": "library",
      "links": [
        {
          "label": "Журнал «Квантик»",
          "url": "https://kvantik.com/"
        },
        {
          "label": "Квантландия",
          "url": "https://math.kvantland.com/"
        }
      ],
      "_admin": {
        "knows": true,
        "has_announce": true,
        "has_channel_post": true,
        "time_final": true
      },
      "slot": "slot-evdokimov",
      "apollo_slot": "mid-2"
    },
    {
      "id": "talk-tarasevich",
      "status": "accepted",
      "type": "popsci",
      "title": "Научпоп-квиз",
      "subtitle": "командный квиз",
      "speaker_role": "научный журналист",
      "description": "Командный квиз в формате ЧГК с вопросами на стыке науки и искусства. Играть можно семьями, с детьми, школьниками — или без них.",
      "venue": "small_bar",
      "links": [
        {
          "label": "Кот Шрёдингера",
          "url": "https://t.me/kot_sh"
        }
      ],
      "slot": "slot-tarasevich",
      "apollo_slot": "center",
      "speaker": "Григорий Тарасевич"
    },
    {
      "id": "social-rosetka",
      "status": "accepted",
      "type": "social",
      "title": "Аттрактор",
      "subtitle": "Нетворкинг",
      "speaker": "Бюро «Розетка»",
      "speaker_role": "образовательное бюро",
      "description": "Сеанс знакомств, построенный по принципу фрактала: сначала участники представляются в парах, потом пары соединяются в четвёрки, четвёрки в группы по восемь, восемь в шестнадцать. На каждом этапе ищут общий паттерн между собой, сохраняют его или меняют. К концу часа группы из шестнадцати человек собирают карту своих связей — каждый уходит с контактами всех, с кем успел познакомиться.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Сайт",
          "url": "https://rozetka.team/"
        },
        {
          "label": "Instagram",
          "url": "https://www.instagram.com/obrazovantsy/"
        }
      ],
      "_admin": {
        "knows": true
      },
      "slot": "slot-networking",
      "apollo_slot": "big-2"
    },
    {
      "id": "talk-gelfand",
      "status": "accepted",
      "type": "popsci",
      "title": "Иерархия бесконечностей",
      "speaker": "Михаил Гельфанд",
      "speaker_role": "биоинформатик",
      "description": "Ясно, что пять яблок больше, чем три яблока. Но вот можно ли сказать, каких чисел больше: чётных или нечётных? чётных или натуральных? целых или рациональных дробей? Как вообще сравнивать бесконечности? Или они все одинаковы?",
      "venue": "main_stage",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/mikhail_s_gelfand"
        }
      ],
      "_admin": {
        "knows": true
      },
      "slot": "slot-gelfand",
      "apollo_slot": "big-1"
    },
    {
      "id": "talk-rajgorodski",
      "status": "accepted",
      "type": "popsci",
      "title": "Сколько нужно цветов?",
      "speaker": "Андрей Райгородский",
      "speaker_role": "математик, директор ФПМИ МФТИ",
      "description": "Возьмите все точки плоскости и раскрасьте их так, чтобы любые две на единичном расстоянии были разного цвета. Сколько цветов вам понадобится? Удивительно, что эта задача, которая звучит как школьная, оказалась одной из ключевых открытых проблем комбинаторной геометрии и не решена до сих пор. На лекции мы разберёмся, что про неё всё-таки известно, заглянем в трёхмерное пространство и посмотрим на много картинок. По пути встретятся шестиугольные соты, замощения усечёнными октаэдрами и другие неожиданно красивые объекты",
      "venue": "main_stage",
      "links": [
        {
          "label": "Wiki МФТИ",
          "url": "https://wiki.mipt.tech/index.php/Райгородский_Андрей_Михайлович"
        },
        {
          "label": "Страница на МФТИ",
          "url": "https://mipt.ru/education/chairs/dm/staff/raigorodskii.php"
        }
      ],
      "_admin": {
        "knows": true
      },
      "slot": "slot-rajgorodski",
      "apollo_slot": "big-3"
    },
    {
      "id": "talk-skripchenko",
      "status": "accepted",
      "type": "popsci",
      "title": "Математика жизни",
      "speaker": "Александра Скрипченко",
      "speaker_role": "математик",
      "description": "Поговорим о том, как яркие математические теории объясняют природу: как фракталы связаны с моделированием экосистем и откуда математики знают, как раскрашен тигр",
      "venue": "main_stage",
      "links": [
        {
          "label": "Страница на ВШЭ",
          "url": "https://www.hse.ru/org/persons/114685975/"
        }
      ],
      "_admin": {
        "knows": true
      },
      "slot": "slot-skripchenko",
      "apollo_slot": "big-2"
    },
    {
      "id": "puzzle-fractal-3d",
      "status": "accepted",
      "type": "station",
      "subtype": "workshop",
      "title": "Сделай 3D-фрактал из бумаги",
      "speaker": "Полина Романова",
      "description": "Многие видели книги с выдвижными иллюстрациями. Оказывается, можно создать раскладывающуюся открытку с фракталом в технике pop up. На мастер-классе участники смогут прочувствовать, что такое самоподобие и сделать свои собственные трехмерные модели фракталов.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/maomao_les"
        }
      ],
      "_admin": {
        "knows": true,
        "has_announce": true,
        "has_channel_post": true
      },
      "slot": "slot-st-bb-F",
      "_source_app": "app-15",
      "application": {
        "_suggested_category": "workshop",
        "_suggested_subcategory": null,
        "submitted_at": "2026-04-30T12:59:28.819Z",
        "name": "Полина Романова",
        "contact": "@Polly_Romanova",
        "about": "аспирант матфака, препод школы Лес и 179",
        "title": "сделай 3d фрактал своими руками",
        "description": "есть две модели фракталов, обе вырезаются из листа бумаги A4. Они есть в этом посте https://t.me/turings_crossword/1510 человеку выдается инструкция где показывается поэтапное построение разных фракталов (то есть объясняется принцип), а потом показано по шагам как это вырезать. на каждый уходит около 5-10 минут. помощь волонтеров нужна с тем, чтобы выдавать материалы",
        "visual": "получается объект, складывающийся в виде \"книжки\" с объемными картинками",
        "materials": "печать материалов, ножницы, бумага",
        "volunteers": "2026-03-02T00:00:00",
        "source": "От Кроссворда Тьюринга",
        "format": "Станция",
        "place": "Другое",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Математика; Естественные науки; Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "Да, час подходит",
        "bring": "примерно 10 ножниц",
        "org": "школа Лес",
        "capacity": "15 и больше",
        "fractal_link": "да, мы собственно вырезаем два фрактала",
        "special": "нет, но наверное нужно побольше стульев и столов так как станция может вместить много людей"
      },
      "apollo_slot": "big-1"
    },
    {
      "id": "puzzle-engineering-origami",
      "status": "accepted",
      "type": "station",
      "subtype": "workshop",
      "title": "Инженерное оригами",
      "speaker": "Полина Романова",
      "description": "Соберём подвижные модели солнечных панелей в технике оригами: по чертежу, со сборкой и инструкцией. Складные конструкции из бумаги работают по строгим математическим правилам, поэтому их применяют в инженерии — от солнечных батарей до медицинских стентов.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/maomao_les"
        }
      ],
      "_admin": {
        "knows": true
      },
      "slot": "slot-st-bb-B",
      "_source_app": "app-16",
      "application": {
        "_suggested_category": "workshop",
        "_suggested_subcategory": null,
        "submitted_at": "2026-04-30T13:08:03.611Z",
        "name": "Полина Романова",
        "contact": "@Polly_Romanova",
        "about": "мотфаг",
        "title": "инженерное оригами",
        "description": "будем собирать подвижные модели солнечных панелей, выполненные в виде оригами. участникам выдается чертеж для сборки и инструкция, где объясняется, что это за устройство и как собрать по чертежу. все есть тут в посте https://t.me/maomao_les/127",
        "visual": "ну оригами)",
        "materials": "печать материалов, ножницы, бумага",
        "volunteers": "2026-04-03T00:00:00",
        "source": "От Кроссворда Тьюринга",
        "format": "Станция",
        "place": "Другое",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Математика; Естественные науки; Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "Да, час подходит",
        "bring": "какой-то запас чертежей и инструкций есть",
        "capacity": "15 и больше",
        "fractal_link": "не(",
        "special": "опять таки побольше стульев"
      },
      "apollo_slot": "big-2"
    },
    {
      "id": "music-rap",
      "status": "accepted",
      "type": "music",
      "subtype": "courtyard",
      "title": "Научно-технический рэп",
      "speaker": "Влад Горелов",
      "speaker_role": "музыкант, научно-технический рэп",
      "description": "Единственная группа в России, играющая нердкор — интеллектуальный хип-хоп. Песни — про реалии жизни IT-специалистов, биографии учёных и популярные теоремы. Влад программист, в прошлом сотрудник теорсектора Ландау. Группа основана в 2014 году «с целью нести свет знания в небытие хип-хопа».",
      "venue": "courtyard",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/ntr1_0"
        }
      ],
      "slot": "slot-rap-evening",
      "apollo_slot": "big-1"
    },
    {
      "id": "social-tochka-nol",
      "status": "accepted",
      "type": "social",
      "title": "Точка-ноль",
      "speaker": "Алина Асомния",
      "description": "Музыкальный спектакль по тексту Хармса «Нуль и ноль». Алина плетёт звуковую среду в реальном времени, в зале — физический объект-нуль, к которому зритель может прикоснуться. Каждое прикосновение включает свой звуковой эффект, спектакль реагирует на действия зала. Можно ничего не делать — спектакль всё равно идёт сам.",
      "venue": "courtyard",
      "links": [
        {
          "label": "Сайт",
          "url": "https://alina.asomnia.art"
        }
      ],
      "_admin": {
        "knows": true,
        "has_announce": true,
        "has_channel_post": true
      },
      "slot": "slot-interlude-3",
      "_source_app": "app-26",
      "application": {
        "_suggested_category": "social",
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-04T22:29:50.422Z",
        "name": "Алина Асомния",
        "contact": "89057937003, alina.asomnia@mail.ru",
        "about": "Я режиссёр, композитор, артист и междисциплинарный художник, по первому образованию - архитектор.\nСоздаю Театр нового звука.\n\nОбразование:\nРежиссёр - мастерская индвидуальной режиссуры Б.Ю. Юхананова в Электротеатре Станиславский (выпуск 2024)\nАрхитектор - МАрхИ (выпуск 2019)\n\nмузыкой занимаюсь всю жизнь, опыт выступлений - более 100 концертов, есть опыт в интерактивности и иммерсивности, опыт в звукозаписи более 10 лет\n\nБиография - https://alina.asomnia.art/bio",
        "title": "Точка - ноль.",
        "description": "Я предлагаю сделать музыкальный спектакль с интерактивной возможностью для зрителей влиять на звук спектакля по произведению Д. Хармса \"Нуль и ноль\" \n\nНа сцене разворачивается музыкальное действие - я, как артист-звукохудожник создаю звуковую среду и вплетаю голосом текст Хармса, в зале - есть некий объект (ноль/круг в том или ином виде), при прикосновении зрителя к которому инициируются определённые звуковые эффекты. Зритель может взаимодействовать с объектом и влиять на звук, может не взаимодействовать и не влиять - спектакль всё равно будет продолжать идти, реагируя не происходящее.\n\nПри этом не предполагается что я стою на сцене столбом:) Движение внутри музыки также будет отдельно осмыслено через контемпорари мышление. Если то будет позволять пространство и действие, люблю периодически смешивать территорию сцены и зала, время от времени выходя к зрителю на прямой контакт.",
        "visual": "Визуально я хочу сделать акцент именно на ноле, как на основополагающем символе. Помимо возможной проекции с абстрактной видео-графикой так или иначе репрезентирующей нули; физический объект, к которому зритель сможет прикасаться в зале тоже должен повторять этот символ - в зависимости от возможностей, это может быть либо большая скульптура (нужна помощь с материалами, их доставкой и сбором скульптуры на месте), либо нарисованный знак на столе, либо стойка с небольшой кнопкой-нулём, либо дополнительный пол. \n\nНоль в данном случае, не только точка отсчёта или влияния, но символ бесконечного потенциала, объединяющий в себе все возможные числа и смыслы.",
        "materials": "Исходя из конфигураций помещения и планируемой аудитории нам с вами нужно решить в каком именно виде органичнее всего будет создать интерактивный объект. Он должен располагаться в 1-3 метрах от сцены. Это может быть \n\n1. Скульптура \"ноля\" с ростом /выше роста человека\n2. Пол со знаком ноля (кладем фанеру на пол и красим, пьезы устанавливаем под фанеру)\n3. Тумба-стойка с кнопкой/небольшим предметом\n4. Круглый стол со знаком ноля - пьезы под стол\n\nЭто может быть и несколько столов/предметов - до 8 штук (кол-во свободных входов в звуковой карте), в таком случае каждый из 8 предметов может влиять на звук со своим характером\n\nЛюбому предмету можно додумать и подсветку",
        "volunteers": "В зависимости от масштабов ссооружения интерактивных объектов. Навскидку 1-2 человека - помочь собрать объекты, раскидать провода. Звуковым подключением я занимаюсь сама полностью с нуля.\nСвоих волонтёров я привезти, к сожалению, не смогу.",
        "source": "Из телеграм-канала",
        "format": "Выступление",
        "place": "Другое",
        "indoor_outdoor": "Только в помещении",
        "topic": "Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "bring": "Я привезу все нужные звуковые инструменты и датчики, стойки, микрофоны, провода. От вас нужна звуковая система(колонки с пультом), проектор(при возможности) и помощь с производством интерактивных объектов и материалы на них",
        "links": "https://alina.asomnia.art/ - общее портфолио\n\nВидео выступлений:\n\n1. музыкально-драматическая работа, построенная на контролируемой алеаторике шумов - прикосновения к офисному столу превращались в звуковой пейзаж, который становился сценическим партнёром и двигал драматургию сюжета https://alina.asomnia.art/progulka\n2. иммерсивный концерт - прикосновение к зрителю, становилось частью концерта https://alina.asomnia.art/tactus\n3. музыкальное короткометражное кино о важности ошибки - https://alina.asomnia.art/reshitelnosti\n4. интерактивная саунд-арт инсталляция язык прикосновений - https://alina.asomnia.art/zvuk-sculpture-yazik\n5. интерактивная саунд-арт инсталляция предмет любви https://alina.asomnia.art/zvuk-sculpture-predmet\n6. музыкальный пластический панкрок спектакль https://alina.asomnia.art/spell\n7. разработка звуковой интерактивной среды для спектакля \"выход\" (актёры прикасались к предметам, прикосновение инициировало нужный звук) https://alina.asomnia.art/zvuk-commerce-vihod",
        "special": "Что нужно технически: звуковая система (колонки и микшерный пульт для подключения звука) и место-сцена, где они стоят. В идеале проектор, если есть такая возможность, потому что возможный видеоряд позади звукохудожника может вполне себе неплохо поддержать визуально. Хотя, естественно, легко можем обойтись и без проектора.\n\nКак работает интерактивный элемент - в него прячется пьезодатчик(и), которые отправляются мне в звуковую карту проводом jack/jack. Всё остальное я настраиваю у себя в компьютере.\n\nМой сетап - несколько мидиконтроллеров на стойках, микрофон, звуковая карта, ноутбук - двумя jack/jack проводами звук увожу в микшерный пульт на месте.",
        "duration": "30–45 минут",
        "source_detail": "увидела пост в каком-то канале с подборками опен-коллов",
        "extra": "Я могу варьировать форматом в зависимости от ваших возможностей, возьму на себя полное подключение звука (с любыми настройками отстройками), помимо своего выступления. Но что касается строительства привлекающего к себе интерактивного объекта - здесь мне нужна помощь, нет возможности в одиночку сделать его заранее или привезти заблаговременно. При этом объект может быть любым - влияние на звук происходит путем передачи вибраций от удара/прикосновения на пьезодатчик, который передаёт сигнал в мою систему. Также, когда появится понимание в какой именно точке происходит спектакль, какие размеры помещения, сцены, сколько зрителей и т.д. - смогу набросать эскизы объектов. Ну и к тому же ко всем вариантам объектов можно предусмотреть и подсветку - но тут снова будет нужна помочь с пайкой, физически, к сожалению, не смогу осилить и звук настроить и свет спаять. Нужно будет рационально оценить силы, команду и время настройки. \n\nПри невозможности помощи с созданием интерактивных объектов - \"Точка-Ноль\", само собой, может остаться просто музыкальным спектаклем.",
        "_warning": "Музыкальный спектакль по Хармсу — берём, формат уточняется"
      },
      "apollo_slot": "big-3"
    },
    {
      "id": "discussion-tba",
      "status": "accepted",
      "type": "social",
      "title": "Бесконечная вселенная в замкнутом мире",
      "subtitle": "лайв-подкаст философов и математиков",
      "speaker": "Дискуссия между философией и математикой",
      "description": "Лайв-подкаст о фракталах на границе математики и философии. Простое итеративное правило, заданное на конечной плоскости, порождает структуру с бесконечной длиной, бесконечной глубиной, самоподобием на всех масштабах. Это математический факт. Но бесконечное в конечном — это содержательное утверждение об устройстве мира или удобная метафора нашего масштабирования? Состав участников будет объявлен.",
      "venue": "main_stage",
      "_admin": {
        "knows": true
      },
      "slot": "slot-discussion",
      "apollo_slot": "big-1"
    },
    {
      "id": "cinema-feature-pi",
      "status": "accepted",
      "type": "cinema",
      "subtype": "feature",
      "title": "Пи",
      "speaker": "Даррен Аронофски",
      "description": "Сначала построим дерево Пифагора и попробуем понять, конечна ли его площадь. Затем с помощью циркуля и формулы Декарта достроим ковёр Аполлония, обсудим его раскраски и связь с цепными дробями. Будем работать руками — и разбираться, как фракталы устроены.",
      "venue": "library",
      "slot": "slot-cinema-2",
      "apollo_slot": "big-1"
    },
    {
      "id": "cinema-anim-horsthuis",
      "status": "accepted",
      "type": "cinema",
      "subtype": "animation",
      "title": "Julius Horsthuis",
      "description": "Цифровой художник из Нидерландов. Делает завораживающие фрактальные анимации, в которых математическая сложность встречается с кинематографической красотой.",
      "venue": "main_stage",
      "apollo_slot": "big-1"
    },
    {
      "id": "cinema-anim-machina",
      "status": "accepted",
      "type": "cinema",
      "subtype": "animation",
      "title": "Machina Infinitum",
      "description": "«Эти миры существовали всегда, Machina Infinitum интерпретирует их, позволяя вам их познать».",
      "venue": "main_stage",
      "apollo_slot": "big-2"
    },
    {
      "id": "cinema-anim-missing-fractals",
      "status": "accepted",
      "type": "cinema",
      "subtype": "animation",
      "title": "Missing fractals",
      "description": "Как оплакивать потерю того, чего у тебя никогда не было? Грейс живёт воспоминаниями и мечтами о том, что могло бы случиться — после потери того, чего у неё никогда и не было.",
      "venue": "main_stage",
      "apollo_slot": "big-3"
    },
    {
      "id": "cinema-anim-fractal-baby",
      "status": "accepted",
      "type": "cinema",
      "subtype": "animation",
      "title": "Fractal baby",
      "description": "Маленькая девочка разговаривает с младенцем, который ещё в животе у матери. Она перечисляет ему все причины, по которым ему стоит выйти наружу.",
      "venue": "main_stage",
      "apollo_slot": "mid-1"
    },
    {
      "id": "cinema-anim-like-in-a-dream",
      "status": "accepted",
      "type": "cinema",
      "subtype": "animation",
      "title": "Like in a dream",
      "description": "Анимация по проекту «Атлас человека» Брайана Альвареса из Калифорнийского университета в Беркли. Иллюстрация его идеи о красоте живых организмов.",
      "venue": "main_stage",
      "apollo_slot": "mid-2"
    },
    {
      "id": "cinema-anim-worlds-within-worlds",
      "status": "accepted",
      "type": "cinema",
      "subtype": "animation",
      "title": "Worlds Within Worlds",
      "description": "Аудиовизуальное исследование пространства, времени, размерности, геометрии, сознания и биоразнообразия.",
      "venue": "main_stage",
      "apollo_slot": "mid-3"
    },
    {
      "id": "cinema-short-big-brains",
      "status": "accepted",
      "type": "cinema",
      "subtype": "short",
      "title": "Big Brains, Small Films",
      "description": "Фильм основан на последнем интервью Бенуа Мандельброта, записанном в 2010 году за 19 дней до его смерти. Отец фракталов вспоминает свой путь в математике и рассказывает, как его взгляд на мир привёл к открытию фрактальной геометрии.",
      "apollo_slot": "big-1"
    },
    {
      "id": "cinema-short-menger-eiffel",
      "status": "accepted",
      "type": "cinema",
      "subtype": "short",
      "title": "Короткий метр и анимация ",
      "description": "Карл Менгер встречает Гюстава Эйфеля в машине времени. Бесконечное путешествие на разных скоростях и в разных направлениях — фильм показывает его на разных уровнях одновременно.",
      "venue": "main_stage",
      "slots": [
        "slot-interlude-2",
        "slot-custom-1779301750995",
        "slot-custom-1779301988086"
      ],
      "apollo_slot": "big-2"
    },
    {
      "id": "music-main-22",
      "status": "accepted",
      "type": "music",
      "subtype": "main_stage",
      "title": "Пётр Термен",
      "speaker": "Пётр Термен",
      "description": "Пётр Термен (Peter Theremin) — один из ведущих исполнителей на терменвоксе в мире, академический и электронный музыкант, руководитель школы терменвокса ThereminFamilySchool, правнук Льва Термена. Как композитор — лауреат премий Creativepool и Clio Music.",
      "venue": "main_stage",
      "links": [
        {
          "label": "Сайт",
          "url": "https://peter.theremintimes.ru/"
        }
      ],
      "slot": "slot-music-1",
      "apollo_slot": "mid-2"
    },
    {
      "id": "music-main-23",
      "status": "accepted",
      "type": "music",
      "subtype": "main_stage",
      "title": "Stropharia",
      "description": "Московский live-проект, сформирован Дмитрием Поликарповым в 1993 году. Умная электроника, радикальный бит, цифровой хардкор, эйсид-транс. Выступление поддержит видео-арт-художник vj forrrest.",
      "venue": "main_stage",
      "links": [
        {
          "label": "Блог",
          "url": "http://blog.stropharia.ru/"
        },
        {
          "label": "Bandcamp",
          "url": "https://stropharia.bandcamp.com/"
        }
      ],
      "slot": "slot-music-2",
      "apollo_slot": "mid-3"
    },
    {
      "id": "music-main-00",
      "status": "accepted",
      "type": "music",
      "subtype": "main_stage",
      "title": "Rombix",
      "description": "Роман Вороновский — музыкант, продюсер, основатель лейбла 24919. Исследует процессы плёночной звукозаписи и манипуляции с лентой: шелест плёночных петель, спонтанные вмешательства и непредсказуемое наложение звуков порождают постоянно меняющийся поток.",
      "venue": "main_stage",
      "links": [
        {
          "label": "LiveJournal",
          "url": "https://rombix.livejournal.com/"
        },
        {
          "label": "Discogs",
          "url": "https://www.discogs.com/artist/115618-Rombix"
        }
      ],
      "slot": "slot-music-3",
      "apollo_slot": "big-1"
    },
    {
      "id": "music-main-01",
      "status": "accepted",
      "type": "music",
      "subtype": "main_stage",
      "title": "Womba",
      "description": "Сольный проект Тихона Кубова. Звуковые конструкты построены на деформированных кассетных и полевых сэмплах, полуразложившихся home-fi гармониях, конвульсивных синтетических вибрациях с дерзкими вокальными экзерсисами.",
      "venue": "main_stage",
      "links": [
        {
          "label": "Bandcamp",
          "url": "https://womba.bandcamp.com/music"
        },
        {
          "label": "VK",
          "url": "https://vk.com/club7401126"
        },
        {
          "label": "Instagram",
          "url": "https://www.instagram.com/modulor_archives/"
        }
      ],
      "slot": "slot-music-5",
      "apollo_slot": "big-2"
    },
    {
      "id": "music-main-02",
      "status": "accepted",
      "type": "music",
      "subtype": "main_stage",
      "title": "Hobboth",
      "description": "Эмбиент-проект, вдохновлённый земным и космическим воплощениями природы. Мелодические секвенции наслаиваются друг на друга и плавно переходят в шумы и дроны.",
      "venue": "main_stage",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/HobbothMusic"
        },
        {
          "label": "YouTube",
          "url": "https://youtube.com/@hobbothmusic"
        }
      ],
      "slot": "slot-music-6",
      "apollo_slot": "big-3"
    },
    {
      "id": "music-main-03",
      "status": "accepted",
      "type": "music",
      "subtype": "main_stage",
      "title": "Misha Nikitin",
      "description": "Московский продюсер, саунд-дизайнер и диджей. Работает на стыке экспериментальной и танцевальной музыки, любит деконструктивные зарисовки и пост-жанровый подход. Резидент Track ID pls!, Oramica и Aspect, играл на Signal, Outline и Nur, релизы на Judder, Applique, ШУМ, TOH, Oramica и других. На фестивале — пьеса в трёх частях, своеобразный гимн дефрагментации и расщеплению.",
      "venue": "main_stage",
      "links": [
        {
          "label": "SoundCloud",
          "url": "https://soundcloud.com/mishanikitin"
        }
      ],
      "slot": "slot-dance",
      "apollo_slot": "mid-1"
    },
    {
      "id": "music-pink-2130",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "Brinstaar",
      "description": "Проект московского художника и музыканта Михаила Мясоедова. Соучредитель лейбла Kotä, преподаёт саунд-арт в Школе дизайна НИУ ВШЭ. К фестивалю готовит специальный сетап, в котором звук генерируется процедурными алгоритмами, в том числе на основе фракталов.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Bandcamp",
          "url": "https://brinstaar.bandcamp.com/"
        },
        {
          "label": "Лейбл Kotä",
          "url": "https://kotaerecords.com/artists/brinstaar"
        }
      ],
      "slot": "slot-music-parallel-1",
      "apollo_slot": "mid-2"
    },
    {
      "id": "music-pink-2230",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "Spiralfractal",
      "description": "В основе проекта — спиральность и фрактальность всего сущего. Во время его выступления архаичные ритмы, этнические мелодии и басовые волны формируют на танцполе узоры сакральной геометрии.",
      "venue": "big_bar",
      "links": [
        {
          "label": "VK",
          "url": "https://m.vk.com/public205955884"
        }
      ],
      "slot": "slot-music-parallel-2",
      "apollo_slot": "mid-3"
    },
    {
      "id": "music-pink-2330",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "S66",
      "venue": "big_bar",
      "slot": "slot-music-parallel-3",
      "speaker": "S66",
      "description": "S66 — Борис Шилин, создатель и CEO проекта «ЩЁЛОЧЬ», идеолог и креативный директор лейбла экспериментальной электроники САУНД. Его музыка — симбиоз noise, ambient, IDM, techno, jungle и breakcore, вдохновлённый английской и германской электроникой 90-х и 00-х.",
      "apollo_slot": "center"
    },
    {
      "id": "music-pink-0030",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "Morakh",
      "description": "Резидент лейблов «Местность» и Shelter Tapes. Звучание проекта Morakh — синтез интеллигентного техно, брейкбита, IDM и future garage, энергичная и эмоциональная музыка для больших площадок. Его альбомы сравнивали с работами Moderat, Bicep и Overmono.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/morakhmusic"
        },
        {
          "label": "VK",
          "url": "https://vk.com/morakhmusic"
        },
        {
          "label": "Instagram",
          "url": "https://instagram.com/morakhmusic"
        }
      ],
      "slot": "slot-music-parallel-4",
      "apollo_slot": "big-1"
    },
    {
      "id": "music-pink-0130",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "ænsof",
      "description": "В каббалистической традиции есть непознаваемая сущность Б-га, дословно — «бесконечное». Дуэт использует абсолютно современный инструментарий, но, не размениваясь в своём звуке на сиюминутные веяния моды, исследует сквозь призму классических индустриальных и дабовых техник полубессознательные и порой архетипические образы.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/aensofsound"
        },
        {
          "label": "Instagram",
          "url": "http://instagram.com/aensofsound"
        }
      ],
      "slot": "slot-music-parallel-5",
      "apollo_slot": "big-2"
    },
    {
      "id": "music-pink-0230",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "garish_cyborg",
      "description": "Московский экспериментатор, работающий в разных жанрах — от гипнотического дабстепа до самых шумных форм индастриала. Основатель лейблов KILL EGO, «Бегущий Человек», «Такое».",
      "venue": "big_bar",
      "links": [
        {
          "label": "Ссылки",
          "url": "https://taplink.cc/garish_cyborg"
        }
      ],
      "slot": "slot-music-parallel-6",
      "apollo_slot": "big-3"
    },
    {
      "id": "music-pink-final",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "The Darkest Supernova",
      "description": "Дискотека под шумы. Витчхаус и нойз, дрон и брейкбит — создатель проекта стирает рамки между стилями, приводя их к общему знаменателю — музыке как таковой. Финал ночной программы в Баре Серпинский.",
      "venue": "big_bar",
      "links": [
        {
          "label": "VK",
          "url": "https://vk.com/id885725241"
        }
      ],
      "slot": "slot-music-parallel-7",
      "apollo_slot": "mid-1"
    },
    {
      "id": "talk-gusev-nn",
      "status": "accepted",
      "type": "popsci",
      "title": "Внутри нейросети живут фракталы",
      "speaker": "Вячеслав Гусев",
      "description": "Вячеслав Гусев, учитель AI & Computer Science в проекте TLF. На сцене — короткое выступление о том, как фракталы возникают в обучающихся нейросетях. Параллельно в Большом баре в две сессии работает стенд Гусева с визуализациями хаотических процессов обучения нейросетей — можно подойти и поразбираться вживую.",
      "links": [
        {
          "label": "TLF",
          "url": "https://leaderstech.ru/"
        }
      ],
      "slots": [
        "slot-gusev-talk",
        "slot-st-sb2-C",
        "slot-st-sb2-F"
      ],
      "_admin": {
        "knows": true,
        "has_announce": true,
        "has_channel_post": true
      },
      "venue": "small_bar",
      "lane": "left",
      "apollo_slot": "mid-3"
    },
    {
      "id": "cinema-short-fractal-universe",
      "status": "accepted",
      "type": "cinema",
      "subtype": "short",
      "title": "Fractal universe?",
      "description": "Может ли наша вселенная быть фрактальной? Может ли простая математика создать целую вселенную? Что общего у брокколи с Большим взрывом? И при чём здесь видеоигры No Man's Sky и Minecraft?",
      "apollo_slot": "big-3"
    },
    {
      "id": "cinema-feature-doc-order",
      "status": "accepted",
      "type": "cinema",
      "subtype": "feature",
      "title": "Фракталы: Порядок в хаосе",
      "description": "«Фракталы: Порядок в хаосе» (Fractals: Hunting the Hidden Dimension) — научно-популярный фильм PBS из серии NOVA, 2008 год. Лента исследует математическую революцию, доказавшую, что кажущиеся хаотичными формы природы — облака, деревья, горные пики, даже сердечный ритм — подчиняются строгим геометрическим законам фракталов.",
      "venue": "library",
      "slot": "slot-cinema-1",
      "apollo_slot": "big-2",
      "links": [
        {
          "label": "IMDb",
          "url": "https://www.imdb.com/title/tt1287217/"
        }
      ]
    },
    {
      "id": "mc-calligraphy",
      "status": "accepted",
      "type": "station",
      "subtype": "workshop",
      "title": "Каллиграфия как фрактал",
      "speaker": "Наташа Евдокимова",
      "description": "Японская каллиграфия — фрактальная: каждая черта повторяет форму целого иероглифа, и каждый штрих неповторим. Возьмём кисть и тушь, попробуем сами — без задачи «сделать красиво», с задачей прочувствовать, как одно движение разворачивается в форму.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/natashasensei"
        }
      ],
      "_admin": {
        "knows": true,
        "has_announce": true,
        "has_channel_post": true,
        "time_final": true
      },
      "slots": [
        "slot-st-bb-C",
        "slot-st-bb-E"
      ],
      "_source_app": "app-9",
      "application": {
        "_suggested_category": "workshop",
        "_suggested_subcategory": null,
        "submitted_at": "2026-04-28T18:16:35.003Z",
        "name": "Евдокимова Наташа",
        "contact": "#ERROR!",
        "about": "Преподаю японский язык, перевожу, организую мк по японской культуре и читаю лекции больше 20 лет. При этом умудрилась прожить почти 10 лет в Южной Корее и выучить корейский до уверенного бытового уровня.\n\nВеду тг канал о японском языке и принципах изучения иностранных языков в целом. Консультирую коллег репетиторов и специалистов помогающих профессий по системному ведению соц сетей без выгорания, запуску онлайн проектов, набору учеников и пр.",
        "title": "Ничто не повторится дважды - мк по основам японской каллиграфии",
        "description": "Мы будем практиковаться писать базовые линии японской каллиграфии - точки, горизонтальные и вертикальные линии. Собирать их в иероглифы. Будем искать в них схожести и различия. Расскажу о японской поговорке \"ичи-го ичи-э\", что значит \"одни миг одна встреча\".",
        "visual": "Издалека листы каллиграфии, написанные одним и тем же человеком, могут казаться похожими. Однако, если рассматривать их вблизи, то даже написанные с намерением быть идентичными линии и иероглифы будут иметь свою индивидуальность и неповторимость.",
        "materials": "Писчая бумага 1 пачка на 1 час, стоимость 1 пачки до 200р. Тушь для каллиграфии стоимость до 2000р. Влажные салфетки 1 упаковка около 100р. Файлики А4, чтобы люди забрали свои работы с собой опционально. Остальные расходники - кисти, подложки, емкости для туши у меня есть.",
        "volunteers": "Я могу справиться без волонтеров",
        "source": "От Розетки",
        "format": "Станция",
        "place": "Стол и 2–4 стула",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "Да, час подходит",
        "bring": "Специальные кисти для каллиграфии, подложки для письма, емкости для туши, пресс для бумаги",
        "links": "Основные соц сети:\nhttps://t.me/natashasensei\nhttps://instagram.com/natalia.evdokimova.sensei?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr",
        "fractal_link": "Иероглиф -  это рукотворный фрактал, где простота базовых черт порождает  сложность смыслов через  повторение одних и тех же графических паттернов («рот»口, «дерево»木, «человек»人).",
        "special": "В идеале только чтобы не было ветра и осадков",
        "time_constraints": "Хотелось бы иметь 1-2 окна или перерыва по 30 минут, чтобы самой также принять участие в Одиссее",
        "extra": "Все прекрасно, буду рада поделиться знаниями о японской каллиграфии. Открыта к сотрудничеству и вопросам"
      },
      "apollo_slot": "big-3"
    },
    {
      "id": "mc-tie-dye",
      "status": "accepted",
      "type": "station",
      "subtype": "workshop",
      "title": "Тай-дай: космические яйца",
      "speaker": "Ольга Черменская",
      "description": "Техника «Космические яйца»: складываем ткань определённым образом, стягиваем вощёной нитью и заливаем кипятком с красителями. Через полчаса разворачиваем — получается фрактальный узор, который никогда не повторится.",
      "venue": "courtyard",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/djokatkova"
        }
      ],
      "_admin": {
        "knows": true,
        "has_announce": true,
        "has_channel_post": true
      },
      "slots": [
        "slot-st-cy-A",
        "slot-st-cy-C"
      ],
      "_source_app": "app-17",
      "application": {
        "_suggested_category": "workshop",
        "_suggested_subcategory": null,
        "submitted_at": "2026-04-30T20:30:20.101Z",
        "name": "Ольга",
        "contact": "@msempathy",
        "about": "https://t.me/zakroootila",
        "title": "Мастер-класс по тай-дай росписи",
        "description": "Можно будет раскрасить свою футболку или носки в технике тай-дай методом \"Космические яйца\", что позволяет заметить повторение аргумента, как основу. Для данной техники в идеале использовать лёд и делать ее под наклоном, но в формате мастер-класча можно использовать кипяток, это быстро и результат будет уже через пол часа. Для мастер-класса понадобятчя одноразовые перчатки, фартуки, защита стола, шприцы для кипятка 50-100 мл, кальцинированная сода, красители, поддоны. Участники получат незабываемый опыт и владение новым мастерством.",
        "visual": "Как я писала выше, технику я взяла не простую. Складывается ткань определенным образом и стягивается вощеной нитью, что позволяет определить рисунок.",
        "materials": "Фартуки, перчатки, пленка для упаковки, пакеты, пакеты для мусора, вода, кипяток, шприцы 50-100 мл для кипятка, ткань для основы МК",
        "volunteers": "Пара человек будет кстати, но справлялась и одна. Помочь в упаковке изделий, в подготовке - защита рабочей поверхности, выдача необходимого",
        "source": "От других организаторов",
        "format": "Станция",
        "place": "Стол и люди вокруг стоя",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "Час подходит, но есть нюансы",
        "bring": "Краситель",
        "org": "Zakroootila",
        "links": "https://t.me/zakrootila",
        "capacity": "5–15",
        "fractal_link": "Повторение рисунка при раскручивании будет подобно повторяющейся детализации, что гениально и невероятно просто.",
        "special": "Возможно понадобится микрофон-петелька, зависит от того, насколько шумное будет в целом помещение"
      },
      "apollo_slot": "mid-2"
    },
    {
      "id": "mc-theremin",
      "status": "rejected",
      "type": "station",
      "subtype": "experiment",
      "title": "Терменвокс: попробовать самому",
      "speaker": "Лора Заиконникова",
      "description": "Терменвокс — электромузыкальный инструмент, который сто лет назад изобрёл в Петербурге Лев Термен. Музыкант играет руками в воздухе, не касаясь инструмента. Лора расскажет, как это устроено физически, и даст попробовать всем, кто захочет. Подготовки никакой не нужно — приходите и пробуйте.",
      "_source_app": "app-19",
      "application": {
        "_suggested_category": "experiment",
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-01T09:34:47.630Z",
        "name": "Лора Заиконникова",
        "contact": "l.zaikonnikova@gmail.com",
        "about": "Работаю в PR, играю на терменвоксе. \nМузыкант, певица, автор текстов и исполнитель на терменвоксе. Участница специального выпуска шоу «Голос Дети – это Фантастика» (2024 г.); ВК-шоу «Удиви меня» (2025 г.); постоянная участница международного фестиваля терменвокс-культуры «Терменология». Также участвовала как исполнитель на терменвоксе в фестивалях электронной музыки: «Лед на солнце» (2021), «Холодок» (2024), фестиваль стимпанк-культуры Ferrum (2025). В коллаборациях работала с электронным музыкантом и продюсером Ильей Чертковым // mal0 (альбом «Идиома», 2025 г.); drone-музыкантом Максимом Мамкиным (СТРУП, МаЖиКо). Участница выставки «Физика звука» (Audio Device In), Владивосток 2026, Центр современного искусства «Этажи». В рамках выставки презентовалось видео и аудио на композицию Black Ride. Участница «Оркестра терменвоксов» под управлением Петра Термена, (выступление на ВДНХ, 2026)",
        "title": "Физика звука",
        "description": "Расскажу про инструмент и сделаю мастер-класс игры на инструменте для всех желающих. Терменвокс – электромузыкальный инструмент, который был изобретен более 100 лет назад в Санкт-Петербурге гениальным русским ученым, изобретателем и музыкантом – Львом Сергеевичем Терменом. Инструмент необычен тем, что музыкант как будто играет руками в «воздухе». Принцип работы терменвокса основан на взаимодействии электромагнитных полей инструмента и музыканта.",
        "visual": "Там, где физика, там и математика. Я думаю моя станция хорошо впишется в ваш формат.",
        "materials": "1 волонтер помочь с оборудованием",
        "volunteers": "1 крепкий волонтер мужчина",
        "source": "Из телеграм-канала",
        "format": "Станция",
        "place": "Большая зона 3×3 м+",
        "indoor_outdoor": "Только в помещении",
        "topic": "Искусство",
        "time": "17:00–18:00; 18:00–19:00; 19:00–20:00",
        "slot_ok": "Да, час подходит",
        "bring": "Инструмент, стойку, провода, педали",
        "links": "https://vk.com/lorazaikonnikova\nYandex Music: https://music.yandex.ru/artist/12352761",
        "capacity": "До 5",
        "fractal_link": "Прямой связи, конечно, нет, но я подумаю как это можно представить.",
        "special": "Заземленные розетки, звук: гитарный комбоусилитель или пульт с мониторами. Есть подробный райдер, в зависимости от ваших возможностей. С собой привезу инструмент, педали, провода, стойку."
      },
      "apollo_slot": "big-3"
    },
    {
      "id": "mc-fractal-stained-glass",
      "status": "accepted",
      "type": "station",
      "subtype": "workshop",
      "title": "Фрактальные витражи",
      "speaker": "Анастасия Гурарева",
      "description": "Рисуем витражные краски по гибкому пластику. По линиям и формам получается фрактальный узор — каждый забирает свою работу с собой.",
      "venue": "small_bar",
      "_admin": {
        "knows": true
      },
      "slots": [
        "slot-st-sb2-E",
        "slot-st-sb2-B"
      ],
      "_source_app": "app-27",
      "application": {
        "_suggested_category": "workshop",
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-05T15:10:47.124Z",
        "name": "Ася",
        "contact": "89772693213 (лучше тг по этому номеру)",
        "about": "Работаю в школе, преподаю биологию.",
        "title": "Фрактальные витражи",
        "description": "Рисуем специальными красками, скорее всего по гибкому пластику. Получаем прикольное тематическое украшение интерьера",
        "visual": "Эстетика витражных фракталов",
        "materials": "В идеале расходники: одноразовые/многоразовые фартуки (совсем в идеале, краска плохо отстирывается), чем-то застелить стол, чтоб мы его не угваздали. \nА так: краски, зубочистки, пластик, кисточки, стаканчики для воды, двусторонний \"наноскотч\", пластиковые доски для разделки/жесткая подложка, карандаши и бумага для набросков",
        "volunteers": "Зависит от потока людей. Если одновременно 5-7 человек, то могу и в одно лицо)",
        "source": "Другое",
        "format": "Станция",
        "place": "Другое",
        "indoor_outdoor": "Только в помещении",
        "topic": "Другое",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "Час не подходит",
        "bring": "В принципе, могу привезти все",
        "capacity": "До 5",
        "fractal_link": "Собственно, рисуем фракталы)",
        "special": "Доступ к воде (набрать воду, поменять воду и т д.), небольшое пространство для просушки работ, прежде чем их заберут. Да, стульев лучше 6-8, по числу одномоментных участников",
        "time_constraints": "Пока не уверена про время. Возможно, смогу все время, возможно, только часть((",
        "source_detail": "ЛШ Лес"
      },
      "lane": "right",
      "apollo_slot": "mid-1"
    },
    {
      "id": "mc-fractal-tiles",
      "status": "accepted",
      "type": "station",
      "subtype": "experiment",
      "title": "Фрактал-Ателье",
      "speaker": "Татьяна Зайцева",
      "description": "Татьяна занимается фрактальными замощениями — это её основная научная работа на мехмате. На станции можно выбрать форму фрактала и цветовую гамму, программа сгенерирует замощение, а маленький термопринтер тут же напечатает результат. Получается персональный паттерн — можно унести с собой, можно отправить файлом и потом напечатать на чём угодно.",
      "venue": "small_bar",
      "_admin": {
        "knows": true,
        "has_announce": true,
        "has_channel_post": true
      },
      "slots": [
        "slot-st-sb2-A",
        "slot-st-sb2-E"
      ],
      "_source_app": "app-24",
      "application": {
        "_suggested_category": "workshop",
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-03T18:03:08.447Z",
        "name": "Татьяна Зайцева",
        "contact": "@ttzz0, +79262928105",
        "about": "28 лет, работаю на мехмате МГУ. Закончила его в 2021 со средним баллом 5.0, до этого 179 школа, призёр всероссийских олимпиад по математике (2014, 2015) и информатике (2015). \nВ 2023 защитила кандидатскую диссертацию \"Самоподобные замощения и многомерная аппроксимация\" в МИАН, руководитель чл.-корр. РАН В.Ю. Протасов. Занимаюсь темой фрактальных замощений с 2017 года, моя основная научная работа про это, имею 12 публикаций. \nБыла одним из трёх лауреатов всероссийской премии фонда \"Талант и успех\" по математике среди аспирантов (2024). Неоднократно получала награды за лучший постер и доклад. Много занимаюсь частным преподаванием для студентов.",
        "title": "Фрактал-Ателье: напечатай своё фрактальное замощение",
        "description": "По науке изучаю семейство фрактальных замощений (тайлингов), сгенерированных аффинными растяжениями с одинаковой линейной частью M и сдвигами d. Такие фракталы порождают замощения, у меня есть их коллекция. \n\nПришедший человек выбирает форму фрактала из предложенных и цветовую гамму. Далее я создаю через софт выбранное замощение и печатаю его на имеющемся термопринтере, либо отправляю электронный файл, если принт не нужен. \nЭто занимает около 10 минут, надо настроить программу под замощение, прописать цвета, подогнать расположение, подождать генерацию и кадрировать для принтера. Также можно на выбор пришедшего распечатать один фрактал или его разбиение (см. ниже на диске примеры). \nПродвинутым посетителям возможен краткий рассказ о том, как были получены такие замощения. \n\nТакже имею различный мерч: фрактальные шарфы, 3д напечатанные twindragon, два брелока на веревке. Их можно положить рядом для изучения. Шарф остался один, допечатаю немного еще до фестиваля. Фото 3д печати есть на диске, там немного. Если на фестивале допускается коммерческая реклама своего мерча и/или продажа на месте, я бы записывала контакты заинтересованных себе и потом бы им заказала в типографии по шарфу и уже после фестиваля индивидуально договаривалась о передаче и платеже. Если нет, то буду просто желающим отдавать полученный файл, из которого они смогут сделать шарф сами при желании. \n\nДиск с фото мерча и тестовых карточек, которые предлагается сделать на фестивале (и выложить как образцы)  https://disk.yandex.ru/d/7XwSTvBVSarBKQ",
        "visual": "Здесь вроде очевидно: получится персональное красивое замощение, либо в электронном виде, либо в виде мининаклейки",
        "materials": "Хотелось бы скомпенсировать стоимость бумаги. На озоне есть вариант за 4 тыс рублей (100 листов), который успеет приехать до фестиваля \nhttps://www.ozon.ru/product/xiaomi-fotobumaga-100-list-sht-1736959052/?from_sku=1742556194&oos_search=false.  \nПоскольку времени мало, я уже заказала его, озон пишет, что приедет 13-21 мая. Надеюсь, что так. Если не пригодится, оставлю себе. Если нужно на большее число людей, надо определяться быстро, иначе не успеет приехать.  \nНа крайний случай у меня на руках есть 30 листов. \n\nЕсли есть другие варианты печати (возможно минипринтер у кого-то другого из организаторов), то тоже вариант. \n\nЕсли это затратно, можно ограничиться электронным вариантом замощения, но не так интересно, конечно.",
        "volunteers": "В целом, справлюсь сама. Но если волонтер будет, тоже можно, настроим, чтобы он мог кадрировать и печатать на принтере (нужен телефон с блютуз и готовностью установить приложение xiaomi). Это чуть разгрузит меня и чуть ускорит процесс, но не так сильно -- больше времени занимает настройка программы. Сама волонтеров не приведу",
        "source": "От Кроссворда Тьюринга",
        "format": "Станция",
        "place": "Стол и 2–4 стула",
        "indoor_outdoor": "Только в помещении",
        "topic": "Математика; Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "Час подходит, но есть нюансы",
        "bring": "Фотопринтер свой, маленький xiaomi",
        "links": "CV на личной странице http://approx-lab.math.msu.su/staff/Zaitseva.html \n\nЗапись выступления 2025 г. на соискание премии Шувалова (более популярное изложение про вейвлеты на основе фракталов) https://expert.msu.ru/sh2025, таймкод с 3.46\n\nСсылка на диссертацию https://www.mi-ras.ru/dis/ref23/zaitseva/dis.pdf",
        "capacity": "До 5",
        "fractal_link": "Полностью подходит под тему",
        "special": "Рабочий интернет",
        "extra": "1) Термопринтер в силу технологии и размеров очень искажает цвета. Если пришедший хочет напечатанный вариант, а не электронный, у меня распечатаны тестовые таблицы цветов на это принтере, можно ориентироваться на них. Но отдельные оттенки на нем получить очень сложно, в целом более тусклая картинка получается, чем на экране.  \n\n2) Поскольку процесс создания медленный, возможна очередь. Но пока ждёт, человек может выбрать фрактал или поизучать мерч. Могу сделать какие-то распечатки с информацией, чтобы можно было занять себя ими. \nИз-за медленности процесса, если станция будет час, то смогу принять совсем малое число людей (ориентировочно около 8). Мне кажется разумным такого рода станцию держать большее число часов."
      },
      "lane": "left",
      "apollo_slot": "big-3"
    },
    {
      "id": "ev-1778338476401-960j",
      "status": "accepted",
      "type": "station",
      "subtype": "experiment",
      "title": "Эксперименты: от мира идей к миру вещей",
      "speaker": "Станислав Карнаухов",
      "description": "Станция с экспериментами, которые можно потрогать руками. В этом году у Стаса магистральная линия — от спектроскопии и химии к квантовой механике. Идея простая: показать, как обычные опыты открывают свою квантовую природу, и дать прикоснуться к квантовой механике руками.",
      "venue": "courtyard",
      "links": [
        {
          "label": "Страница на сайте СУНЦ МГУ",
          "url": "https://internat.msu.ru/physics/sotrudniki-kafedry-fiziki-sunts-mgu/kornauhov-stanislav-sergeevich/"
        },
        {
          "label": "СУНЦ на Фестивале науки 2025",
          "url": "https://internat.msu.ru/suncz-mgu-na-festivale-nauki-2025/"
        }
      ],
      "_admin": {
        "knows": true
      },
      "slots": [
        "slot-st-cy-B",
        "slot-st-cy-F"
      ],
      "_source_app": "app-37",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-08T19:42:03.911Z",
        "name": "Стас",
        "contact": "@k_stanislav_k kornaukhov.ss21@physics.msu.ru 89102460394",
        "about": "Сотрудник СУНЦ МГУ, студент кафедры биофизики физфака МГУ. Участвовал в проведении фестиваля Наука0+ в МГУ на протяжении нескольких лет, участвовал в проведении мат. олимпиады в 57 школе, в проведении фестиваля в прошлом году. Сейчас занимаюсь трудной проблемой сознания, психофизиологией и нейробиологией; преподаю экспериментальную физику и олимпиадную экономику.",
        "title": "Эксперименты: от мира идей к миру вещей",
        "description": "Также, как и в прошлом году планирую сделать станцию с экспериментами - чтобы те, кто приходят, могли поделать что-то своими руками. В этом году хотелось бы как-то попробовать сделать \"магистральную линию\" - через цепочку экспериментов проследить за эволюцией научной идеи. (Идеи: от спектроскопии и химии к квантовой механики, увидеть в обычных (и не только) опытах их квантовой природу; квантовая механика обладает флером таинственности и возможность прикоснуться к ней заворачивает).\n\nЕсли есть стенд посвященный симметрии в живой природе, то можно на примере коллекции беспозвоночных увидеть, как симметрия животного связана с его способом питания и образом жизни",
        "visual": "В квантовой механике есть завораживающая история с формулой Бальмера (и эта формула имеет красивое визуальное выражение в виде спектра атома водорода). В целом, это зависит, скорее от того, какие опыты попадут в финальную программу. По поводу симметрий в биологических системах уже написал выше",
        "materials": "Возможно мелкие расходники",
        "volunteers": "Приведу 1-2 своих точно, постараюсь еще поискать, чем больше людей, тем больше можно реализовать; мб попробуем что-то задизайнить",
        "source": "Другое",
        "format": "Станция",
        "place": "Большая зона 3×3 м+",
        "indoor_outdoor": "Нужна улица",
        "topic": "Естественные науки",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "Час подходит, но есть нюансы",
        "bring": "Реактивы, посуда, какие-то расходники по электричеству",
        "org": "",
        "links": "https://internat.msu.ru/physics/sotrudniki-kafedry-fiziki-sunts-mgu/kornauhov-stanislav-sergeevich/\nhttps://internat.msu.ru/suncz-mgu-na-festivale-nauki-2025/",
        "capacity": "До 5",
        "speech_details": "",
        "fractal_link": "В своей научной работе я использую фракталы, могу уже в личных беседах посетителям порассказывать)",
        "special": "Нужны розетки и, не обязательно, вода",
        "time_constraints": "",
        "duration": "",
        "source_detail": "Участвовал в прошлом году",
        "extra": "Хотелось бы встретиться/созвониться и обсудить конкретику и подстроить программу под то, что есть",
        "inst_size": "",
        "inst_duration": "",
        "author_presence": ""
      },
      "apollo_slot": "big-1"
    },
    {
      "id": "ev-1778341972924-tz5v",
      "status": "accepted",
      "type": "station",
      "subtype": "experiment",
      "title": "Симметрия наноматериалов",
      "speaker": "Анастасия Коровина",
      "description": "Наноматериалы состоят из элементарных ячеек — самой маленькой повторяющейся части. На станции можно изучить срезы разных наноматериалов и попробовать найти элементарную ячейку самому, по разным уровням сложности. Рядом — напечатанная на 3D-принтере структура двухслойного графена, которую можно поворачивать руками.",
      "venue": "small_bar",
      "_admin": {
        "knows": true
      },
      "slots": [
        "slot-st-sb2-A",
        "slot-st-sb2-D"
      ],
      "_source_app": "app-29",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-06T14:09:08.230Z",
        "name": "Анастасия",
        "contact": "Тг: metkapometka Почта: KorovinaNastya99@gmail.com",
        "about": "Я аспирант 3-его года обучения в институте биохимической физики им. Эмануэля РАН. Я занимаюсь моделированием новых материалов, в том числе наноматериалов. \nЗакончила в бакалавриате МИТХТ им. Ломоносова по направлению Химическая технология с выпускающей кафедрой \"Высокомолекулярные соединения\". Магистратуру я закончила в МФТИ по направлению Прикладная математика и информатика на кафедре Функциональных материалов.",
        "title": "Симметрия наноматериалов",
        "description": "Участникам будет предложено изучить слой различных наноматериалов на бумаге/картоне. Наноматериалы состоят из элементарных ячеек. Элементарная ячейка представляет собой наименьшую постоянно повторяющуюся часть материала. Участникам будет необходимо вырезать ножницами или обвести фломастером (ещё не решено) непосредственно элементарную ячейку материала. Будут представлены несколько уровней сложности с разными элементарными ячейками. Участники смогут проверить себя при помощи скрытого бланка ответов. \nТакже будет создана из пластика структура двухслойного графена, наглядно показывающая структуру диаманов с разным углом поворота. Такая структура создает повторяющуюся мозайку внутри материала. Слои графена можно поворачивать друг относительно друга, чтобы посмотреть структуру. \nТакже будут выставлены напечатанные на 3д принтере структуры различных наноматериалов.",
        "visual": "Для моделирования наноматериалов нами используется теория функционала плотности. Это метод, основанный на теории электронной структуры, который позволяет вычислять энергию, плотность заряда и другие свойства системы. В свою очередь теория функционала плотности плотно завязана на квантовых вычислениях, которые являются ничем иным как решением уравнения Шредингера.",
        "materials": "Необходима закупка бумаги, печать цветных изображений, закупка листов пластика (около 500 рублей). Цена бумаги и печати будет зависеть от примерного числа посетителей.",
        "volunteers": "Нам необходим 1 волонтер, который будет проверять сохранность предметов.",
        "source": "От Кроссворда Тьюринга",
        "format": "Инсталляция",
        "place": "Стол и 2–4 стула",
        "indoor_outdoor": "Только в помещении",
        "topic": "Естественные науки",
        "time": "15:00–16:00; 16:00–17:00; 17:00–18:00; 18:00–19:00",
        "slot_ok": "",
        "bring": "Фломастеры, карандаши, ножницы. Бумаги с объяснением задания. А также конверт с правильными ответами. Стойка с qr нашей лаборатории.",
        "org": "ИБХФ РАН",
        "links": "",
        "capacity": "",
        "speech_details": "",
        "fractal_link": "",
        "special": "",
        "time_constraints": "",
        "duration": "",
        "source_detail": "",
        "extra": "",
        "inst_size": "Помещается на столе",
        "inst_duration": "Несколько часов",
        "author_presence": "Волонтёр-смотрящий периодически"
      },
      "lane": "right",
      "apollo_slot": "big-2"
    },
    {
      "id": "ev-letnyaya-shkola-linguistics",
      "status": "accepted",
      "type": "station",
      "subtype": "experiment",
      "title": "Задачи, которые придумали лингвисты, которые...",
      "speaker": "Тёма Бойко",
      "speaker_role": "команда летней школы",
      "description": "Человеческие языки могут порой казаться довольно хаотичными, но всё же в них есть место системе, и иногда эта система очень элегантная. Мы предлагаем решить несколько лингвистических задач, показывающих структуры с самоподобием и гармонией в различных языках.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/lsh_linguistics"
        }
      ],
      "team_notes": "Подтверждено устно. Заявку команда ещё не подавала, но мы их берём.",
      "_admin": {
        "knows": true,
        "has_announce": true,
        "has_channel_post": true
      },
      "slots": [
        "slot-st-bb-D",
        "slot-st-bb-A"
      ],
      "apollo_slot": "mid-2"
    },
    {
      "id": "ev-maskul-prefractals",
      "status": "accepted",
      "type": "station",
      "subtype": "experiment",
      "title": "Ковер Аполлония, дерево Пифагора",
      "speaker": "Анна Назмутдинова",
      "speaker_role": "онлайн-школа олимпиадной математики",
      "description": "Сначала построим дерево Пифагора и попробуем понять, конечна ли его площадь. Затем с помощью циркуля и формулы Декарта достроим ковёр Аполлония, обсудим его раскраски и связь с цепными дробями. Будем работать руками — и разбираться, как фракталы устроены.",
      "venue": "small_bar",
      "links": [
        {
          "label": "Сайт",
          "url": "https://math-cool.com/"
        },
        {
          "label": "Telegram",
          "url": "https://t.me/math_cool_rus"
        }
      ],
      "team_notes": "Подтверждено. Команда дорабатывает формат.",
      "_admin": {
        "knows": true,
        "has_announce": true,
        "has_channel_post": true
      },
      "slots": [
        "slot-st-sb2-B",
        "slot-st-sb2-D"
      ],
      "lane": "left",
      "apollo_slot": "mid-3"
    },
    {
      "id": "ev-1778769282894-6x65",
      "status": "accepted",
      "type": "station",
      "subtype": "experiment",
      "title": "Фрактальная природа моря",
      "speaker": "Серомаха Екатерина",
      "description": "Екатерина — science-art-художник, который вокруг морской биологии выстраивает интересные визуальные сюжеты. Раковины, аммониты, кораллы — почти все формы морской жизни фрактальны, и фестиваль — повод их рассмотреть подробнее. Формат станции уточняется.",
      "venue": "small_bar",
      "links": [
        {
          "label": "Сайт",
          "url": "https://seromakha.ru"
        },
        {
          "label": "Превью работ (Я.Диск)",
          "url": "https://disk.yandex.ru/i/QZJO4CaFOeA9ow"
        },
        {
          "label": "Портфолио (Я.Диск)",
          "url": "https://disk.yandex.ru/i/ZzA7R26U5UoSFg"
        }
      ],
      "_admin": {
        "knows": true
      },
      "slots": [
        "slot-st-sb2-C",
        "slot-st-sb2-F"
      ],
      "_source_app": "app-40",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-09T14:33:29.396Z",
        "name": "Серомаха Екатерина",
        "contact": "Seromakha",
        "about": "Я Екатерина Серомаха — science art художник из Москвы.Я — художникВ моих картинах выражено бесконечное восхищение миром природы. Разнообразием его цветов, форм и текстур. В каждом мазке кисти я стараюсь выразить эту любовь и страсть. Мои картины рождаются глубоко внутри, через медитацию, повторное возвращение к пережитым образам. Мне лишь остаётся наблюдать, как они снова оживают на холсте.Со зрителем я хочу поделиться красотой мирового океана, макро и микромира, разнообразием природы морских глубин. Мне нравится направлять внимание внутрь, в глубину, расширяя восприятие и самосознание зрителя.В своих работах я сочетаю реализм и метафоры. Мне нравится вписывать узнаваемые образы в воображаемый мир, подводить привычные явления к их духовным началам. Этому я училась семь лет в студии искусств.Я — исследовательМоё искусство вдохновлено самыми сильными образами на планете, но пока они доступны только учёным. Это мировой океан и космос, между которыми мне нравится находить общее. Но основное внимание в своём творчестве я уделаю морскому миру.Для меня важны вопросы сохранения природы. Поэтому любовь к океану и в работе, и в творчестве для меня неразрывно связаны с желанием их защитить, показать их хрупкость.\n\nПерсональный сайт seromakha.ru",
        "title": "Пока нет",
        "description": "Варианты станций:\n\nНАПРАВЛЕНИЕ 01. РЕШАЮТ\n\n1. «Найди фрактал в раковине»\nНа столе разложены 10 морских объектов: аммонит, наутилус, гребешок, морская звезда, коралл, каури, тридакна, бараний рог, рапана, ципрея. Участник должен за 2 минуты разложить их по принципу «фрактал / не фрактал» и объяснить решение. На обороте карточек — правильный ответ и пояснение, где именно в ракушке спрятано самоподобие.\n\n2. «Что здесь лишнее? (морская версия)»\nЧетыре ряда изображений, в каждом три фрактальных морских объекта и один — не фрактал. Например: раковина наутилуса, морская звезда, коралл-мозговик, рыба-шар. Или: аммонит, лист папоротника, песчаная дюна, ракушка гребешка. Задача: найти лишнего и объяснить почему.\n\nНАПРАВЛЕНИЕ 02. ДЕЛАЮТ РУКАМИ\n\n4. «Отпечаток аммонита»\nУчастник берёт самозатвердевающую глину, пластику, скатывает в лепёшку. С помощью настоящего аммонита (или его слепка) делает оттиск на поверхности. Затем аккуратно обводит линии получившегося узора и дорисовывает повторяющиеся элементы, завершая фрактальную спираль. Можно добавить отверстие чтобы сделать брелок или кулон. Лучшие отпечатки забирают домой.\n\n5. «Бесконечная раковина»\nКаждый участник получает квадрат бумаги (10×10 см) с нарисованным первым витком спирали наутилуса. Задача: дорисовать ещё 3–4 витка, каждый раз повторяя пропорции предыдущего (примерные линии уже пунктиром). В конце все раковины вывешиваются на стену как «Бесконечный риф».\n\nНАПРАВЛЕНИЕ 03. ЭКСПЕРИМЕНТИРУЮТ\n\n6. «Стена масштабов: аммонит»\nНа стене развешаны 10 увеличенных фотографий одного аммонита от целой раковины до фрагмента перегородки, видимой под микроскопом. Нужно разложить их в правильном порядке от самого крупного к самому мелкому. Каждый правильный шаг — наклейка-спираль.\n\nНАПРАВЛЕНИЕ 04. СОЗДАЮТ ВМЕСТЕ\n\n7. «Коралловый квадрат из крышек»\nНа полу размечается большой квадрат (3×3 м). Рядом — коробки с пластиковыми крышками и гранулами (синие, белые, оранжевые, коралловые). Участники заполняют квадрат, выкладывая узор, повторяющий строение коралла: ветвление, ответвления, самоподобные формы. К вечеру получается фрактальный риф из десятков элементов.\n\n8. «Древо из рук-ракушек»\nНа листе ватмана нарисован ствол — как стебель коралла. Участники обводят свои ладони (пальцы в стороны) — они будут напоминать лучи морской звезды или ветки коралла. Простое правило: чем выше, тем ладошка меньше (имитация рекурсивного роста). К концу дня вырастает фрактальное коралловое дерево из десятков рук.\n\n---\n\nНАПРАВЛЕНИЕ 05. СМОТРЯТ И СЛУШАЮТ\n\n9. «Раковина в темноте с шепотом чисел»\nВ маленькой тёмной комнате/ большой коробке стоит одна крупная раковина аммонита на чёрном пьедестале, подсвеченная сверху узким лучом. Луч передвигается вручную, подсвечивая разные фрагменты спирали. В наушниках — запись: морской прибой, наложенный на шёпот, который перечисляет числа Фибоначчи и их появление в спиралях.",
        "visual": "Есть связь с Фибоначчи",
        "materials": "5000 на расходные материалы",
        "volunteers": "2-3",
        "source": "От Летней школы",
        "format": "Станция",
        "place": "Стол и люди вокруг стоя",
        "indoor_outdoor": "Без разницы",
        "topic": "Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "Да, час подходит",
        "bring": "Художественные материалы",
        "org": "",
        "links": "Seromakha.ru\nhttps://disk.yandex.ru/i/QZJO4CaFOeA9ow Cv художника \nhttps://disk.yandex.ru/i/ZzA7R26U5UoSFg Портфолио",
        "capacity": "До 5",
        "speech_details": "",
        "fractal_link": "На станции предусмотрена работа с фракталами",
        "special": "",
        "time_constraints": "",
        "duration": "",
        "source_detail": "",
        "extra": "",
        "inst_size": "",
        "inst_duration": "",
        "author_presence": ""
      },
      "lane": "right",
      "apollo_slot": "mid-1"
    },
    {
      "id": "ev-1778338408747-r7tp",
      "status": "accepted",
      "type": "station",
      "subtype": "interactive",
      "title": "FracLife",
      "speaker": "Юля Назаренко",
      "description": "Интерактивная видеоинсталляция Юли Назаренко, в которой фракталы оживают на экране под звук и откликаются на движения зрителя: меняют структуру, тип, глубину. Зритель становится частью генеративной системы и сам управляет её ростом.",
      "links": [
        {
          "label": "Instagram",
          "url": "https://www.instagram.com/jell_ixx/"
        },
        {
          "label": "Видео проектов (Я.Диск)",
          "url": "https://disk.yandex.ru/d/sj_-YzlY4_-xdQ"
        }
      ],
      "_admin": {
        "knows": true
      },
      "_source_app": "app-36",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-08T18:51:01.452Z",
        "name": "Юля",
        "contact": "tg: @jell_ixx , почта:  210802@inbox.ru  телефон: +79264206116",
        "about": "Занимаюсь мультимедийным искусством, заканчиваю магистратуру в Строгановке, участвую в опен коллах. Подробнее в CV по ссылке:\n\nhttps://disk.yandex.ru/i/gbD5lNPnQoKCNQ",
        "title": "FracLife",
        "description": "Интерактивные фракталы. На экране представлены некоторые виды фракталов с названиями и небольшим описанием. Изображение красочное и стилизованное, вместе с ним идёт звук. Посетители смогут взаимодействовать с фракталами с помощью простых движений рук: менять количество итераций, тип, \"углубляться\" в фрактал или деформировать изображение. Инсталляция направлена на \"игровое\" взаимодействие и изучение базовых форм.",
        "visual": "Красочно и наглядно визуализируются математические формулы фракталов. Вот пример как это может выглядеть. Это тестовый вариант видео инсталляции, который будет дорабатываться: https://drive.google.com/drive/folders/1FiHnRLHyztlabb-dIOddfI5HbeqiBtVd?usp=sharing",
        "materials": "Нужен экран или проектор, лучше проектор. Можно найти простой до 5000",
        "volunteers": "Нужно чтоб 1 человек иногда проверял, всё ли в порядке. Скорее всего, сама смогу",
        "source": "Из телеграм-канала",
        "format": "Инсталляция",
        "place": "Стол и люди вокруг стоя",
        "indoor_outdoor": "Только в помещении",
        "topic": "Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "bring": "ноут, камеру, динамики",
        "org": "-",
        "links": "https://www.instagram.com/jell_ixx/\nвидео некоторых проектов: https://disk.yandex.ru/d/sj_-YzlY4_-xdQ",
        "special": "Для инсталляции нужны экран или проектор, камера, динамики для вывода звука и немного пространства для взаимодействия. Поэтому можно разместить на столе или выделить небольшой угол под это, зависит от оборудования. Для проектора более предпочтительно тёмное помещение.  и лучше чтоб было не громко рядом, но не обязательно",
        "source_detail": "",
        "extra": "Если понравилась идея, пишите в тг или на почту, вместе обсудим как её лучше реализовать",
        "inst_size": "Отдельный угол ~2×2 м",
        "inst_duration": "Весь вечер",
        "author_presence": "Я буду рядом весь вечер"
      },
      "apollo_slot": "big-1"
    },
    {
      "id": "ev-1778360794899-4bwi",
      "status": "accepted",
      "type": "station",
      "subtype": "interactive",
      "title": "Сферус",
      "speaker": "Андрей Гринблат",
      "description": "На сайте Андрея Гринблата можно играть с фракталами, шумом и другими математическими объектами, менять параметры и собирать собственные. Сам Андрей на фестивале не будет, но станция работает самостоятельно — садитесь и пробуйте.",
      "links": [
        {
          "label": "Сайт",
          "url": "https://spherus.ru/"
        },
        {
          "label": "Видео на Rutube #1",
          "url": "https://rutube.ru/shorts/da56803ed2a2dd0e975ed2b8f04994eb/?playlist=530134"
        },
        {
          "label": "Видео на Rutube #2",
          "url": "https://rutube.ru/video/83266cb1cd2ee9aad68ed468941a1ec3/?playlist=530134"
        },
        {
          "label": "Видео на Rutube #3",
          "url": "https://rutube.ru/video/df284853b8ad9b5226a62ca52b15bf62/?playlist=530134"
        },
        {
          "label": "Видео на Rutube #4",
          "url": "https://rutube.ru/video/868965d1440d1b523bb38ac5e905c575/?playlist=530134"
        },
        {
          "label": "Видео на Rutube #5",
          "url": "https://rutube.ru/video/2aee4c8e3f547ed7ffd0f4baacbb6f39/?playlist=530134"
        },
        {
          "label": "Статья на Хабре #1",
          "url": "https://habr.com/ru/companies/sberbank/articles/952102/"
        },
        {
          "label": "Статья на Хабре #2",
          "url": "https://habr.com/ru/companies/sberbank/articles/954726/"
        },
        {
          "label": "Статья на Хабре #3",
          "url": "https://habr.com/ru/companies/sberbank/articles/957194/"
        }
      ],
      "_source_app": "app-23",
      "application": {
        "_suggested_category": "experiment",
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-03T13:08:31.111Z",
        "name": "Андрей",
        "contact": "телеграм - @Gleam_82",
        "about": "Программист, работаю в СберТехе",
        "title": "Математический арт",
        "description": "На моем сайте можно поиграться с фракталами, шумом и тд. А также самим создать подобные объекты. И получить эстетическое наслаждение :)",
        "visual": "В роликах и на сайте, непосредственно видна красота математических объектов - фракталы, шум и др",
        "materials": "экран + компьютер (ноутбук)",
        "volunteers": "1 человек, показывающий что можно сделать на сайте, или вообще ни одного",
        "source": "От знакомых",
        "format": "Пока не уверен(а)",
        "place": "Стол и люди вокруг стоя",
        "indoor_outdoor": "Без разницы",
        "topic": "Математика; Искусство",
        "time": "19:00–20:00",
        "bring": "не могу приехать",
        "links": "мой сайт https://spherus.ru/\nнесколько моих видео по теме\nhttps://rutube.ru/shorts/da56803ed2a2dd0e975ed2b8f04994eb/?playlist=530134\nhttps://rutube.ru/video/83266cb1cd2ee9aad68ed468941a1ec3/?playlist=530134\nhttps://rutube.ru/video/df284853b8ad9b5226a62ca52b15bf62/?playlist=530134\nhttps://rutube.ru/video/868965d1440d1b523bb38ac5e905c575/?playlist=530134\nhttps://rutube.ru/video/2aee4c8e3f547ed7ffd0f4baacbb6f39/?playlist=530134\n\nнесколько моих статей на Хабре по теме\nhttps://habr.com/ru/companies/sberbank/articles/952102/\nhttps://habr.com/ru/companies/sberbank/articles/954726/\nhttps://habr.com/ru/companies/sberbank/articles/957194/",
        "fractal_link": "Связь самая прямая :)",
        "special": "экран + компьютер (ноутбук)",
        "time_constraints": "не могу приехать, время указал, чтобы пройти валидацию",
        "_warning": "Сайт с фракталами для игры на ноутбуке. Не может приехать сам — нужен волонтёр. Возможна станция-experiment если кто-то сядет за ноутбук."
      },
      "apollo_slot": "big-2"
    },
    {
      "id": "media-yav",
      "status": "accepted",
      "type": "art",
      "subtype": "media",
      "title": "Внутренняя спираль",
      "speaker": "арт-группа Явь · Анастасия Владычкина",
      "description": "Серия видеоработ «Яви», сделанная специально для «Фрактальной Одиссеи». Эти работы хочется смотреть долго.",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/yav_zone"
        }
      ],
      "_source_app": "app-28",
      "application": {
        "_suggested_category": "art",
        "_suggested_subcategory": "media",
        "submitted_at": "2026-05-05T21:36:45.083Z",
        "name": "Владыычкина Анастасия",
        "contact": "#ERROR!",
        "about": "фаундер и фронтвумен арт-группы Явь",
        "title": "Внутренняя спираль",
        "description": "Серия фрактальных видео, где городская среда разворачивается внутрь самой себя. Минимальное вмешательство превращает реальные пространства в рекурсивные системы. Повторение становится формой напряжения, а движение - иллюзией. Работа исследует границу между документальной реальностью и её искажением.",
        "visual": "Математика в проекте не добавляется извне - она извлекается из самой среды. Повторяющиеся элементы городской архитектуры (ряды, модули, перспективы) уже содержат в себе принципы рекурсии и самоподобия.\nАнимация лишь делает эти закономерности наблюдаемыми: пространство начинает масштабироваться, замыкаться и воспроизводить себя как фрактальная система. В этот момент визуальное становится математическим - и именно это создаёт эффект, который одновременно воспринимается как эстетический и как структурный.",
        "materials": "нам потребуется оплата кредитов для генерации видео",
        "volunteers": "нужно будет установить проектор и запустить видео, в целом можем сделать это самостоятельно",
        "source": "От других организаторов",
        "format": "Инсталляция",
        "place": "Другое",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "bring": "-",
        "org": "арт-группа Явь",
        "links": "https://taplink.cc/yav_zone",
        "fractal_link": "Есть — и она прямая.\n\nРабота опирается на принцип \"самоподобия\": элементы городской среды (ряды гаражей, повторяющиеся модули, перспектива) при анимации начинают воспроизводить сами себя на разных масштабах. Пространство ведёт себя как фрактальная структура - оно не просто повторяется, а разворачивается вглубь, создавая ощущение бесконечности.\n\nФрактальность здесь возникает из реальности, а не накладывается как эффект.",
        "special": "проектор, также мы предлагаем проецировать это не столько до 20 часов, сколько ночью в клубе",
        "inst_size": "Большое пространство 4×4 м+",
        "inst_duration": "Несколько часов",
        "author_presence": "Нет, объект справится сам"
      },
      "apollo_slot": "big-1"
    },
    {
      "id": "inst-tetraquark",
      "status": "accepted",
      "type": "art",
      "subtype": "installation",
      "title": "Очарование тетракварка",
      "speaker": "Алекс Мухин",
      "description": "Скульптурная интерпретация физической частицы, очарованного тетракварка. Имя кварка отсылает к букве T, форма работы вырастает из этой буквы. Внутри объекта зашито самоподобие — символ внутри символа, структура внутри структуры.",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/alex_abstraction_art"
        }
      ],
      "_source_app": "app-4",
      "application": {
        "_suggested_category": "art",
        "_suggested_subcategory": "installation",
        "submitted_at": "2026-04-27T11:24:08.820Z",
        "name": "Alex Mu",
        "contact": "alexsonyplay@gmail.com",
        "about": "https://docs.google.com/document/d/1UigaCvD6AabUjhew_f7UWihcaoIl7hL8/edit?usp=sharing&ouid=102046487677928376812&rtpof=true&sd=true",
        "title": "\"Очарование тетракварка\"",
        "description": "Работой хотел показать фигуру Тетракварк на основе буквы его написания T его внутреннее устройство, очарование и внутреннюю энергию как очаровательный тетракварк выглядит в моей художественной интерпретации. \n\nhttps://drive.google.com/drive/folders/1QgQbPxO7WpcukdLR0nv3oKL0ApJEvEN3?usp=sharing",
        "visual": "Симметрия, Фракталы, Гармония чисел и форм",
        "materials": "инсталляция изготовлена",
        "volunteers": "-",
        "source": "Из телеграм-канала",
        "format": "Инсталляция",
        "place": "Уголок для тихой инсталляции",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Естественные науки",
        "time": "19:00–20:00",
        "bring": "объект",
        "org": "-",
        "links": "https://drive.google.com/file/d/1ZFEbqGAUF7VocsTY0LsssYR_PK_OCUWh/view?usp=sharing",
        "fractal_link": "в объекте заложено самоподобие структуры.",
        "special": "-",
        "time_constraints": "не смогу быть все время",
        "source_detail": "-",
        "extra": "-",
        "inst_size": "Отдельный угол ~2×2 м",
        "inst_duration": "Весь вечер",
        "author_presence": "Нет, объект справится сам"
      },
      "apollo_slot": "big-1"
    },
    {
      "id": "inst-polyhedral-exhibit",
      "status": "accepted",
      "type": "art",
      "subtype": "media",
      "title": "Полиэдральное цветение",
      "speaker": "Максимилиано Роганов",
      "description": "Трёхмерный объект Максимилиано Роганова — рекурсивная агрегация икосферических узлов. Структура колеблется между дискретной геометрией и непрерывной формой. Это не модель чего-либо конкретного — это модель самого процесса организации формы, где красота возникает из логики роста.",
      "_source_app": "app-12",
      "application": {
        "_suggested_category": "art",
        "_suggested_subcategory": "installation",
        "submitted_at": "2026-04-29T18:37:29.875Z",
        "name": "Роганов Максимилиан Александрович",
        "contact": "t.me/maxrogan, archisynth@ya.ru, +79776564577",
        "about": "Медиа-художник, работающий в области генеративной графики и архитектурного дизайна с 2010 года.\nЗа прошедший год принял участие в выставках и фестивалях:\nИгра. Цифра. Искусство, Мультимедийный музей “Россия - моя история”, Екатеринбург, 2026\nЦифровые чувства. Мультисенсорный поворот, Галерея Краснохолмская Объединения “Выставочные залы Москвы”, Москва, 2025\nNextArt. Погружение, ЦСИ Артэтаж, Владивосток, 2025\nЛаборатория братьев Стругацких, Галерея на Каширке Объединения “Выставочные залы Москвы”, Москва, 2025\nЭстетика ошибки. Глитч-арт, Галерея Краснохолмская Объединения “Выставочные залы Москвы”, Москва, 2025",
        "title": "Полиэдральное Цветение",
        "description": "Трехмерный объект представляет собой рекурсивную агрегацию икосферических узлов.\nСтруктура колеблется между полиэдральной дискретностью и непрерывным многообразием.\nЭто не модель чего-либо конкретного.\nЭто модель самого процесса организации формы.\nСсылка на видео: https://drive.google.com/file/d/1aHy26tq70ZO9BpnoljQd84w7uoAKvka0/view?usp=sharing",
        "visual": "В этой работе математика проявляется не как система формул, а как живая среда, способная порождать сложность из простых правил. Рекурсивная структура икосфер создаёт хрупкий баланс между дискретной геометрией и непрерывной органической формой. Визуальный образ становится следом вычисления, где красота возникает из самой логики роста.",
        "materials": "Нет",
        "volunteers": "Один человек, способный включить проекцию/экран",
        "source": "Из телеграм-канала",
        "format": "Инсталляция",
        "place": "Другое",
        "indoor_outdoor": "Только в помещении",
        "topic": "Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "links": "Сайт: maxroganovstudio.netlify.app\nInstagram: @archisynth",
        "fractal_link": "Фрактальная природа объекта проявляется в рекурсивном повторении геометрических элементов, где каждая часть воспроизводит структуру целого в новом масштабе.",
        "special": "Проекция/экран",
        "source_detail": "Телеграм-канал Open Call for Artists",
        "inst_size": "Отдельный угол ~2×2 м",
        "inst_duration": "Весь вечер",
        "author_presence": "Нет, объект справится сам"
      },
      "apollo_slot": "big-2"
    },
    {
      "id": "art-monads-mirrors",
      "status": "accepted",
      "type": "art",
      "subtype": "art",
      "title": "Монады — зеркала души",
      "speaker": "Александр Алеф Вайсман",
      "description": "Метакогнитивные зеркала Александра Алеф Вайсмана. «Моё искусство — это попытка через образ выразить духовное восхищение безупречностью природы всего».",
      "links": [
        {
          "label": "Сайт",
          "url": "https://alefwiseman.ru"
        }
      ],
      "apollo_slot": "big-2"
    },
    {
      "id": "inst-anthill-sierpinski",
      "status": "accepted",
      "type": "art",
      "subtype": "installation",
      "title": "Муравейник Серпинского",
      "speaker": "арт-дуэт EVPRAXIS",
      "description": "Объект из авторского фарфорового композита, разработанного в резиденции ГЭС-2. Если включить подсветку, проявляется фрактальная структура пирамиды.",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/evpraxis"
        }
      ],
      "apollo_slot": "big-3"
    },
    {
      "id": "media-cactus-juice",
      "status": "accepted",
      "type": "art",
      "subtype": "media",
      "title": "Cactus Juice",
      "speaker": "Cactus Juice",
      "description": "Команда визуальных экспериментаторов. Сэт и Лёша совмещают импровизированный генеративный лайвкодинг с мощнейшим шейдером — законами физики. Выпив это зелье, можно увидеть декартово произведение модулирующего и модулированного, фрактальные зафидбэченные узоры и ритуальное поедание сгущёнки.",
      "apollo_slot": "big-3"
    },
    {
      "id": "media-fractal-reflection",
      "status": "accepted",
      "type": "art",
      "subtype": "media",
      "title": "Фрактальное Отражение",
      "speaker": "Артём Ткач",
      "description": "«Рождаясь из бесконечности. Мы путешествуем по бесконечности. Где структура реальности трансформируется в зависимости от пути.» Работа состоит из трёх визуальных композиций: рождение, путешествие и движение, трансформация структуры с финальной остановкой пути. Произведение выставлялось в подземном музее Зарядья, в Дубае, в Пекине на восьмиметровом экране, а также на крупнейшем в Европе медиафасаде.",
      "apollo_slot": "mid-1"
    },
    {
      "id": "inst-element1",
      "status": "accepted",
      "type": "art",
      "subtype": "installation",
      "title": "Элемент 1",
      "speaker": "Ирина Канделариа",
      "description": "Объект-инсталляция из серии «Элементы» — про рекурсию и самоподобие. Каждая работа задумана как начальная точка, из которой могут вырасти следующие, как из исходного фрагмента вырастает фрактал.",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/processus_i"
        }
      ],
      "_source_app": "app-13",
      "application": {
        "_suggested_category": "art",
        "_suggested_subcategory": "installation",
        "submitted_at": "2026-04-30T08:59:48.044Z",
        "name": "Ира",
        "contact": "почта candelariaira@gmail.com телеграм @lovelyhaircut",
        "about": "Я современная художница, живу в Москве. Последний год я занимаюсь созданием и развитием своей первой серии Элементы. Прикладываю ссылку на портфолио и CV.\nhttps://drive.google.com/file/d/1MTwv7h6LxY_1_IBYJaDnVqYj9YLhaRE3/view?usp=sharing",
        "title": "Элемент1",
        "description": "Для участия я хочу предложить свой объект-инсталляцию Элемент1. Он есть в моем портфолио, и там же можно увидеть описание к нему и этой серии. \nhttps://drive.google.com/file/d/1MTwv7h6LxY_1_IBYJaDnVqYj9YLhaRE3/view?usp=sharing",
        "visual": "Предлагаемая работа затрагивает темы рекурсии и самоподобия. В будущем я хочу, отталкиваясь от своих работ, как от некоторых начальных точек, развивать другие проекты.",
        "materials": "нет",
        "volunteers": "нет",
        "source": "Другое",
        "format": "Инсталляция",
        "place": "Уголок для тихой инсталляции",
        "indoor_outdoor": "Только в помещении",
        "topic": "Математика; Естественные науки; Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "source_detail": "из телеграм канала с опенколлами для художников",
        "inst_size": "Отдельный угол ~2×2 м",
        "inst_duration": "Весь вечер",
        "author_presence": "Волонтёр-смотрящий периодически"
      },
      "apollo_slot": "big-2"
    },
    {
      "id": "art-plato",
      "status": "accepted",
      "type": "art",
      "subtype": "art",
      "title": "Артефакты Плато",
      "speaker": "Александр Солеев",
      "description": "Серия скульптур, в которых живые природные формы переплетаются с техногенными. Александр Солеев давно ведёт проект «Плато» — это искусственный мир, где он эмулирует и визуализирует процессы развития искусственной жизни. Иногда на Плато удаётся захватить форму и перенести её в наш мир — в керамику, гипс, искусственный камень. Эти артефакты и привозит на фестиваль.",
      "_source_app": "app-7",
      "application": {
        "_suggested_category": "art",
        "_suggested_subcategory": "gallery",
        "submitted_at": "2026-04-27T17:13:41.669Z",
        "name": "Александр Солеев",
        "contact": "#ERROR!",
        "about": "Живу и работаю в Нижнем Новгороде. Начиная с 2008 работаю в сфере IT, занимаюсь разработкой сложных высоконагруженных систем. В 2015 году начал работу над проектом на стыке науки и искусства - “Плато”. Это попытка эмулирования и визуализации процессов развития искусственной жизни, эволюционных алгоритмов, хаотических процессов происходящих в разных сферах жизни. Одним из результатов проекта стали артефакты перенесенные с помощью прикладных практик из виртуальных миров в реальный. На сегодняшний день работаю над серией абстрактных скульптур из камня, гипса, пластика и других материалов.",
        "title": "\"Артефакты Плато\"",
        "description": "Серия скульптур, где идея фрактального объекта сочетает в себе техногенные и природные паттерны. Это размышления на тему какие объекты флоры могла бы создать искусственная жизнь, если бы мы предоставили ей огромный виртуальный полигон. Сможет ли хаос создать формы гармоничные с точки зрения человеческих эстетических установок или они будут вызывать отторжение?",
        "visual": "Привожу выдержку из , так как она как раз объясняет концепцию.\n\nОдна из концепций когда-то сильно захвативших меня - теория хаоса, открытие скрытой красоты порядка в, казалось бы, совершенно непредсказуемых процессах. Аттракторы Эдварда Лоренца найденные при прогнозировании погоды или фракталы Бенуа Мандельброта увиденные в береговой линии острова - это по своей сути сложнейшие математические концепции, но при этом через них для человека стала возможной визуализация этих явлений и осмысление их через художественные формы.\n\nДля того чтобы играть с Хаосом я изобретаю собственный искусственный мир - “Плато”. Это пространство для мысленного, числового, игрового экспериментов. В то же время Плато это карта и территория, каждая клетка которой подчиняется определенному набору правил и хранит историю своих изменений. На подобной сцене мы можем наблюдать драму - рождение, расцвет и гибель колоний крипто жизни, создание и разрушений континентов, непреодолимую силу стихии. Иногда на Плато удается захватить форму и перенести в виде объекта в наш мир. Это как игра в крипто археологию.\n\nПеренос объектов из искусственного мира в реальный это целенаправленное смешение техник - сочетание работы математики, алгоритмов, хаоса и рук человека. Первичная форма исследуется в 3d средах. Далее работа с классическими материалами такими как керамика, гипс, искусственный камень, воск это - сторона человека, сторона мастера искажающего форму через свое восприятие. \n\nМоя художественная практика это рефлексия страха и восхищения перед сегодняшней технологической революцией. На мой взгляд, осознать происходящие перемены и предсказать ближайшее будущее объективно невозможно. При этом все стремительнее растет разрыв между зависимостью человека от технологий и пониманием - как это работает. В своем творчестве я пытаюсь формализовать эти ощущения создавая искусственный мир - убежище, в котором можно остановиться и попытаться осмыслить происходящее.",
        "materials": "Нет, готов предоставить готовые объекты.",
        "volunteers": "Возможно понадобится помощь в случае развески на стене. Объекты также могут быть установлены на напольных мольбертах.",
        "source": "Из телеграм-канала",
        "format": "Инсталляция",
        "place": "Большая зона 3×3 м+",
        "indoor_outdoor": "Только в помещении",
        "topic": "Математика; Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "bring": "Некоторое количество объектов, представленных в портфолио. Объекты достаточно массивные, буду ограничен вместимостью машины.",
        "links": "Портфолио https://drive.google.com/file/d/111KCJ1p7Uq2uT9Qa01avVv5qs8e1PEWF/view?usp=drive_link\nФото работ в высоком разрешении https://drive.google.com/drive/folders/13Wk4OzRGC1yYMGaiaSOVdKGUAkbJMGDy?usp=drive_link",
        "fractal_link": "Мои объекты это попытка перенести фракталы из виртуальных сред в реальный мир.",
        "inst_size": "Отдельный угол ~2×2 м",
        "inst_duration": "Весь вечер",
        "author_presence": "Я буду рядом весь вечер"
      },
      "apollo_slot": "big-1"
    },
    {
      "id": "art-other-spaces",
      "status": "accepted",
      "type": "art",
      "subtype": "art",
      "title": "Свет иных пространств",
      "speaker": "Пётр Николаев",
      "description": "Каждая картина Петра Николаева — это фрагмент фрактала, бесконечной математической структуры, выросшей из простой формулы. И каждая картина — это фрагмент целого мира, в котором можно было бы выхватить любое другое место.",
      "links": [
        {
          "label": "Статья в АиФ",
          "url": "https://aif.ru/culture/art/portal-v-inye-miry-uchyonyy-sozdayot-kartiny-v-zhanre-fraktalnoy-zhivopisi"
        }
      ],
      "apollo_slot": "big-3"
    },
    {
      "id": "exh-1779028883221",
      "status": "accepted",
      "type": "station",
      "subtype": "interactive",
      "title": "Эволюция графов",
      "speaker": "Александр Николаичев",
      "description": "С помощью простых локальных замен подграфов можно получить не только тьюринг-полную систему перезаписи, но и красивые картины на грани с искусством — в том числе фракталы. Вы сами выбираете правила и шаги, а система начинает жить и эволюционировать, выдавая визуализации. Александр Николаичев покажет, как это устроено, и расскажет, как связаны графовые переписи, конечные автоматы, физический проект Вольфрама и лямбда-исчисление.",
      "_source_app": "app-22",
      "application": {
        "_suggested_category": "popsci",
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-02T13:22:44.353Z",
        "name": "Александр Николаичев",
        "contact": "saaacha.nik@yandex.ru",
        "about": "Работаю в Яндексе руководителем разработки внутренней платформы инфраструктуры.",
        "title": "Эволюция графов",
        "description": "С помощью локальных замен подграфов (рассматриваются ориентированные графы) можно получить не только практические применения тьюринг полной системы, основанной на перезаписи, но и красивые картины на грани с искусством, в том числе конечно фракталы. Хочу об этом рассказать и показать визуализации. Могу затронуть связь также с конечными автоматами, физическим проектом Вольфрама, лямбда исчислением, комбинаторами, программой Гильберта и тд.",
        "visual": "Красота визуализации, порожденная простыми правилами эволюции.",
        "materials": "Нет, достаточно экрана",
        "volunteers": "Не нужно",
        "source": "Из телеграм-канала",
        "format": "Выступление",
        "place": "Стол и люди вокруг стоя",
        "indoor_outdoor": "Только в помещении",
        "topic": "Математика",
        "time": "Могу весь интервал 15:00–20:00",
        "links": "https://nikalexxx.github.io/\nhttps://t.me/nik_alex_flow",
        "speech_details": "Классическое выступление с экраном",
        "fractal_link": "Фрактальные картины получаются при некоторых правилах перезаписи, если перезапись учитывает \"поколения\" узлов графа, или, иначе говоря, работает как обход \"в ширину\"",
        "special": "Нужен обязательно проектор для показа запущенных визуализаций.",
        "duration": "30–45 минут",
        "extra": "Выше только идея, а формат выступления я выбрал, так как привык выступать с докладами. И к нему я знаю как подготовиться. Но если можно придумать интерактив, готов обсудить."
      },
      "apollo_slot": "big-3"
    },
    {
      "id": "app-1",
      "status": "rejected",
      "_source_app": "app-1",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-04-25T21:57:12.705Z",
        "name": "Руслан",
        "contact": 79153950549,
        "about": "Выпускник НГТУ, прикладная математика, три диплома. Но очень люблю теоретическую математику.",
        "title": "Поиск решения трансцендентных чисел",
        "description": "Есть наброски в решении транседентых чисел",
        "visual": "Решение числа Пи",
        "materials": "Ок",
        "volunteers": "Ноль",
        "source": "От знакомых",
        "format": "Пока не уверен(а)",
        "place": "Стол и 2–4 стула",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Математика",
        "time": "Могу весь интервал 15:00–20:00",
        "bring": "Все обсуждаемо",
        "org": "Решение трансцендентных чисел"
      }
    },
    {
      "id": "app-2",
      "status": "rejected",
      "_source_app": "app-2",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-04-27T08:11:47.056Z",
        "name": "Надежда",
        "contact": "@nadezhda_dvornikova тг, 89106736913",
        "about": "Художник сакральной геометрии, создаю энергокартины - с символами сакральной геометрии , проводила персональную выставку с передачей опыты взаимодействия с символами и  материалами о том, как они помогают настраивать сознание и состояние на баланс и сотворение своей жизни.\nСайт: https://энергокартина.online/",
        "title": "Символ - инструмент соединения со своим даром.",
        "description": "Мастер -класс создания энергосимвола с мини-лекцией о его значении \nС нейромедитацией настройкой",
        "visual": "Я приношу на стенд свои созданные картины с сакральными символами геометрии - это и есть ваша заявленнная тема - и ее отражение в визуальном кода и смыслах о чем эти символы .",
        "materials": "Да, листы бумаги или мини холсты ( 30/30см) как пожелаете , циркули , набор простых карандашей , ластиков, акварельные краски , акриловые маркеры , линейки , стоимость зависит от количества участников , которые предполагается что будут участвовать в процессе , до 3-5 тыс уложимся",
        "volunteers": "Да, желательно , количество зависит от количество участников , я могу объять до 7 человек одновременно, если больше то нужно 1-2 человека в помощь, поясню что делать , просто помогать участникам подходить в их процессе рисования, если они не успевают или не поняли , я покажу все.\nВозможно , будут и мои волонтеры, еще нужно обсудить с ними .",
        "source": "Из телеграм-канала",
        "format": "Станция",
        "place": "Большая зона 3×3 м+",
        "indoor_outdoor": "Без разницы",
        "topic": "Математика; Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "Да, час подходит",
        "bring": "Свои картины, линейки, материалы для показа символов и  демонстрации, декор для украшения столов",
        "links": "https://энергокартина.online/\n\nВидео выступлений по запросу отправлю \nСоц сети: https://www.instagram.com/vselennay_art?igsh=NjFqbmljYXlvcHo2\n\nЮтуб https://youtube.com/@vselennay_art?si=VCKlu5Aqjq7uytbN",
        "capacity": "До 5",
        "speech_details": "На сцене достаточно меня - как ведущего процесс,  классно если будет экран, где я могу показать что мы будем создавать",
        "fractal_link": "Сакральная геометрия. Это древние геометрические символы, в которых запакована энергия, цифровой код — из которого создано всё видимое и невидимое во Вселенной. И эти символы работают с нашим сознанием и подсознанием, переписывая информацию в клетках ДНК.взаимодействие с символом открывает внутри человека узнавание себя, вспоминание этих кодов - талантов, которыми он наделен.\nКаждый символ сакральной геометрии структурирует и гармонизирует пространство, в котором есть его изображение на невидимом глазу тонком уровне.",
        "special": "Тишина, колонка - возможность включить медитативную музыку , которую я использую - можно живой ханг - вообще супер будет для погружения в процесс",
        "time_constraints": "Естественные отлучения перекусить и в туалет )",
        "duration": "Больше 45 минут",
        "_warning": "Эзотерика — отказ"
      }
    },
    {
      "id": "app-3",
      "status": "rejected",
      "_source_app": "app-3",
      "application": {
        "_suggested_category": "art",
        "_suggested_subcategory": "installation",
        "submitted_at": "2026-04-27T08:12:27.274Z",
        "name": "Антон Сидько",
        "contact": "#ERROR!",
        "about": "Я занимаюсь современной керамикой и имею естественно-научное образование, опыт исследователя (биомедицина).\nCV: https://docs.google.com/document/d/1ntdqHbShOPdhqXokj44O8K7VWE8Z6GKnthF8q80cJyA/edit?usp=sharing",
        "title": "Squirrel Institute",
        "description": "Хочу показать свою инсталляцию \"Squirrel Institute\". (представлена в портфолио)\nРабота представляет из себя светящиеся фарфоровые цилиндры со свернувшимися на них в спирали бЕлками - модель структуры канального белкА. Она иронизирует над анекдотичным применением машинных алгоритмов при обработке информации (автоперевод сайтов РАН в 2010 году). \nНо через свой медиум (мое изобретение - композитный фарфор ПОРФИР) демонстрирует плодотворность внедрения новых технических средств и мультидисциплинарного подхода. \nРассеивающий пучки света хоровод из бЕлковых субъединиц, отсылает зрителя к методам анализа структуры вещества с помощью ядерно-физических методов анализа (рентген, нейтроны и т.д.).",
        "visual": "Работа создана из фарфора в технике слоистого композита, применение такого материаловедческого подхода позволяет выйти за пределы форм используемые художниками и создать новую визуальность на стыке искусства и науки. За ярким и торжественным арт-объектом прячется и модель канального белкА и научный мем про институт белКи.",
        "materials": "Печать плаката-постера (~2500р), подиум с верхней площадкой 50*50 см - 100*100 см, место для постера и точечная подсветка постера.",
        "volunteers": 1,
        "source": "Из телеграм-канала",
        "format": "Инсталляция",
        "place": "Уголок для тихой инсталляции",
        "indoor_outdoor": "Только в помещении",
        "topic": "Естественные науки; Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "bring": "Могу привезти работу и точечный свет для постера, при наличии волонтера с машиной (приехать-уехать) могу привезти подиум для работы.",
        "links": "Сайт: https://antonsidko.tilda.ws/\nПортфолио: https://docs.google.com/presentation/d/1W6UHcvxkgJ6zz81FXrZcI8zePGyrI1Wv4yJJRQooeCA/edit?usp=sharing",
        "fractal_link": "Подобие бЕлка и белкИ - лингвистическая петля. Она может вести в совершенно ошибочном направлении.\nБелкИ",
        "special": "Затемнение, розетка (потребление ~50 Вт), точечный светильник",
        "source_detail": "канал с open call",
        "extra": "Работу не трогать)",
        "inst_size": "Помещается на столе",
        "inst_duration": "Весь вечер",
        "_warning": "Не станция, а экспонат-инсталляция"
      }
    },
    {
      "id": "app-5",
      "status": "rejected",
      "_source_app": "app-5",
      "application": {
        "_suggested_category": "experiment",
        "_suggested_subcategory": null,
        "submitted_at": "2026-04-27T12:01:22.831Z",
        "name": "Андрей",
        "contact": "@AndreyKuzmin_artist2019, ekokuzmineko@gmail.com ,    +79859259455",
        "about": "Фотография с 6 лет;\nцифровая живопись с 2015 года \nhttps://drive.google.com/file/d/11cOZDEMJ7H9OAxD2e7-2Q7Vz2iImeNND/view?usp=drivesdk",
        "title": "\"Мир Фракталов\" или \"Порталы в Миры Паттернов\"",
        "description": "Демонстрация на большом экране (монитор или проекция) в потоке несколько переходящих друг в друга фрактальных миров. Они возникают и переходят друг в друга, демонстрируя бесконечность нашей Вселенной и нашего существования.",
        "visual": "Портал математизированное представление окружающего нас мира, квзи образ принципа Метавселенной, проходя по серии разнообразных фракталов понимаешь их математическое многообразие, визуализированное с помощью искусства",
        "materials": "монитор или проекционный аппарат",
        "volunteers": "1 Волонтер, который наладит изображение",
        "source": "Из телеграм-канала",
        "format": "Инсталляция",
        "place": "Другое",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Другое",
        "time": "Могу весь интервал 15:00–20:00",
        "bring": "флешку с инсталляцией",
        "links": "https://vk.com/andreykuzminartist2019",
        "fractal_link": "визуализированы сами фракталы",
        "special": "затемнение",
        "extra": "Нужен кусок стены от 1х1,5 м до  без ограничений и проекционный аппарат или один крупный монитор (телевизор)",
        "inst_size": "Отдельный угол ~2×2 м",
        "inst_duration": "Весь вечер",
        "author_presence": "Я буду рядом весь вечер",
        "_warning": "Совместное создание фрактальных миров — кандидат на станцию"
      }
    },
    {
      "id": "app-6",
      "status": "rejected",
      "_source_app": "app-6",
      "application": {
        "_suggested_category": "social",
        "_suggested_subcategory": null,
        "submitted_at": "2026-04-27T12:22:46.083Z",
        "name": "Макарова Мария Викторовна",
        "contact": "https://t.me/Mariamakart    \tmariamakarova82@gmail.com   89267890779",
        "about": "https://drive.google.com/file/d/1lmtshaGLixPY5yvRggjFeIvoRQJUO3ye/view?usp=sharing\n\nМария МакАрт (Мария Макарова) — художник, работающий в области абстрактной живописи. С 2023 года ведёт последовательную студийную практику, формируя авторскую серию работ, исследующих взаимодействие цвета, слоя и ритма. Профессиональная художественная деятельность с 1999 года.\n\nИмеет 25-летний опыт работы как художник-живописец, \n20 лет в сфере дизайна интерьера и 15 лет преподавательской практики.\n\nОкончила МГХПУ им. С.Г. Строганова (1999–2005), Профессиональный художественный лицей №303 (1995–1999), проходила обучение в МГУ им. М.В. Ломоносова (2008–2009, дизайн ландшафта).\n\nВ 2010–2019 годах основала и руководила художественной студией на о. Самуи (Таиланд), преподавала рисунок и живопись детям и взрослым.\n2019 - 2026  Собственная Художественная студия в Москве.            \nИндивидуальные занятия и мастер классы до 30 человек, в различных \nтехниках и материалах.\n\nРаботы по живописи находятся в частных коллекциях. \nПредставлена на платформе Artmajeur.",
        "title": "\"Бесконечная живопись в поле всех возможностей\". Или \"Упорядоченный хаос живописи\". Или \"Арт Фрактал\"",
        "description": "Предлагаю создать интерактивный арт-перформанс, где живописный процесс становится главным исследованием. \nНа большом холсте\\картоне (120х90см) художник, вместе с участниками, создаёт живописное абстрактное полотно, а на отдельных форматах (А4-А8) каждый создает свои цветовые выкрасы, вступая в диалог с работами других, через отпечатки по сырой краске. \nЭти отпечатки выкрасов переносятся на общее полотно, формируя визуальный эффект самоподобия и фрактальной структуры. \nУчастники наблюдают, как из хаотичных действий рождается закономерность, а цвет и форма бесконечно трансформируются. \nВ итоге, каждый уносит с собой личный фрагмент этого процесса и опыт соприкосновения с современным искусством, в частности абстрактной живописью, как исследованием и арт-терапией.",
        "visual": "Красота математики здесь появляется прямо в процессе. Когда участники делают отпечатки по сырой краске, один и тот же элемент повторяется и создаёт эффект самоподобия, как фрактал. Из простых действий постепенно возникает  ритм и структура, бесконечная многослойность. В итоге человек не просто видит это, а сам участвует и проживает, как из хаоса появляется система.",
        "materials": "Расходы 4-5тыс. Зависит от утвержденных вами материалов. Готова обсудить.  Высылаю чек лист:\nЧек лист на МК\n1.\tСтол(ы) \n2.\tХолст или гофрированный картон + обои под покраску, или только обои\n3.\tОбои под\\пок., порезанные на малый формат \n4.\tКраски акрил\n5.\tКисти \n6.\tВалики, шпатели \n7.\tМастихины \n8.\tПоролоновые губки д/рисования\n9.\tГотовые выкрасы.\n10.\tФартуки одноразовые\n11.\tТарелки одноразовые\n12.\tСтаканчики бумажные\n13.\tСалфетки влажные \n14.\tСалфетки бумажные \n15.\tКлеенка \n16.\tМолярный скотч  \n17.\tМешки для мусора\n18.\tПерчатки одноразовые \n\nДополнительно \n1.\tНапольный мольберт\n2.\tШтатив для телефона  \n3.\tТрафареты\n4.\tКолонка для музыки\n5.\tВедерко",
        "volunteers": "1 мужчина для разгрузки и погрузки материалов. Искать\nЖелательно + 1 человек в помощи подготовки и уборки. Возможно найду.",
        "source": "Из телеграм-канала",
        "format": "Станция",
        "place": "Стол и люди вокруг стоя",
        "indoor_outdoor": "Только в помещении",
        "topic": "Искусство",
        "time": "18:00–19:00; 19:00–20:00",
        "slot_ok": "Да, час подходит",
        "bring": "Все. Мне важно, чтоб материалы были профессиональные, по моему чек-листу. В нужном кол-ве и качестве.",
        "org": "Основатель художественной студии \"МарияМакАрт\"",
        "links": "Художественная студия https://www.instagram.com/mariamak_teacher/\nИсследование/высказывание https://www.instagram.com/mariamakart/\nЛичный блог/коммерческая живопись  https://www.instagram.com/mariamakmax/",
        "capacity": "5–15",
        "fractal_link": "Отпечатки выкрасов друг от друга прямая связь с фракталами и самоподобием.",
        "special": "Хорошее освещение. \nЖелательно стена, на которую можно будет повесить основной холст (картон). \nЕсли не будет возможности, то он будет расположен на полу или треноге. \nНужна бесплатная парковка, т.к. планирую привезти все материалы свои. \nПомощь в разгрузке и загрузке материалов. \nЖелательно, помощь в подготовке и уборке.",
        "time_constraints": "Зависит от наличия и кол-ва помощников подготовки.",
        "source_detail": "@opencallfortheartist"
      }
    },
    {
      "id": "app-8",
      "status": "rejected",
      "_source_app": "app-8",
      "application": {
        "_suggested_category": "popsci",
        "_suggested_subcategory": null,
        "submitted_at": "2026-04-28T07:15:22.580Z",
        "name": "Тримонов Николай Леонидович",
        "contact": "https://t.me/N_Trimonov, tnl83@mail.ru",
        "about": "15 лет руководитель проектов в ИТ сфере. \nРаботаю в ИИИ МФТИ",
        "title": "Семантическая топология.",
        "description": "Семантическая топология направлена на решение проблем становящейся цифровой реальности. Главная из них — достижение «взаимопонимания» между людьми и машинами, между людьми с участием машин, а также между машинами. Решения этой проблемы требует создания метаязыка.  Идея метаязыка уходит своими корнями к Р. Луллию с его методом выведения истин из общих понятий и к Г. Лейбницу с идеей создания алфавита человеческой мысли и философского исчисления. Т. Гоббс допускал вычисления не только над числами, но и над словами, а Р. Декарт предложил упорядочить исходные понятия на основе математики и формализовать операции над ними по строгим правилам логики. Подходы к созданию метаязыка и набор принципов логики для формализации идеи истины разработаны математиком А. Тарским и развиты культурологом Ю. Лотманом.\nСозданная автором версия метаязыка вместе со способом ее построения образуют направление, обозначенное автором как «семантическая топология». Семантическая топология – это теоретическая модель построения семантических пространств как топологических структур.\n\nВ модели реализован принцип целостности семантического пространства с соблюдением законов связности, взаимного положения и следования его элементов. Синтаксическую структуру метаязыка образуют геометрические фигуры, элементы которых размечены понятиями, имеющими универсальные значения для разных областей знания. Установление математического порядка в семантическом множестве метаязыка позволяет формализовать описание реальности и оперировать ими по правилам математической логики.",
        "visual": "Предметом математики как способа научного описания мира выступают три рода проявлений сущностей во Вселенной: 1) число; 2) размер; 3) форма. Все эти три аспекта присутствуют в явлениях одновременно. Но преобладающее значение имеет форма, а число и размер имеют смысл только в отношениях с раскрываемой формой. Число описывает дискретные структуры (предмет арифметики), а размер – непрерывные (предмет алгебры). Обе эти структуры охватывает геометрия и на основе качественной геометрии (топологии) может быть реализовано широкое объединяющее видение мира (А. Гротендик).\n\nНачала геометрии и идея симметрии уходят корнями к идеальным телам Платона. Это пять вписанных в сферу правильных геометрических фигур. Сфера – идеал организации пространства с бесконечным числом симметрий. Симметрия – это идея, посредством которой постигается гармония природы, создается порядок, красота и совершенство, производится согласование частей в едином целом (Г. Вейль). По этой причине в основания современной физики закладываются красивые математические теории. Принцип красоты содержит набор строгих требований простоты, симметрии (инвариантности), целостности (согласованности и соразмерности) и наглядности (понимания) теорий.",
        "materials": "Все сделаем сами, ничего не требуется.",
        "volunteers": "не нужно.",
        "source": "Из телеграм-канала",
        "format": "Станция",
        "place": "Стол и люди вокруг стоя",
        "indoor_outdoor": "Только в помещении",
        "topic": "Математика; Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "Да, час подходит",
        "bring": "Плакаты, Физическую 3D модель, Ноутбук для демонстрации  интерактивной модели и презентаций",
        "org": "Представляю школу В.А.Рубанова",
        "links": "https://mirovizor.com/\nhttps://mirovizor.com/3d\nhttps://mirovizor.com/Semanticheskaya-topologiya\nhttps://t.me/mirovizor",
        "capacity": "До 5",
        "fractal_link": "Фрактал основной принцип построения семантического пространства. Самоподобие фундаментальный принцип Семантической топологии.",
        "special": "Розетка для ноутбука, желательно монитор.",
        "time_constraints": "нет",
        "source_detail": "слежу за каналом @turings_crossword"
      }
    },
    {
      "id": "app-10",
      "status": "rejected",
      "_source_app": "app-10",
      "application": {
        "_suggested_category": "art",
        "_suggested_subcategory": "gallery",
        "submitted_at": "2026-04-29T09:53:06.840Z",
        "name": "Злата",
        "contact": 89689290344,
        "about": "https://drive.google.com/file/d/1ApR4anr5MpFp5fWlHDx7poV2Qv8nXexp/view?usp=sharing",
        "title": "Метафизика",
        "description": "Инсталляция, графика, живопись и все это объединено общей идеей исследования человека и его внутренней (эмоциональной, интеллектуальной) составляющей. Как и что влияет на внутреннее состояние индивида и отражается во внешнем. Форма, пластика, цвет - все это средства выразительности моих работ.",
        "visual": "В том как построены работы, их композиция и цвет - это все объясняется физикой, а соотвественно там задействована математика",
        "materials": "нет",
        "volunteers": "2026-02-01T00:00:00",
        "source": "От знакомых",
        "format": "Инсталляция",
        "place": "Большая зона 3×3 м+",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Математика; Искусство",
        "time": "15:00–16:00",
        "links": "https://drive.google.com/file/d/1ApR4anr5MpFp5fWlHDx7poV2Qv8nXexp/view?usp=sharing",
        "fractal_link": "Инсталляция Похороны - внутри гроба лежат разбитые стекла - множащаяся форма",
        "special": "для одного окна нужна розетка (окно 1)",
        "time_constraints": "меня не будет в городе, привезет знакомый",
        "inst_size": "Большое пространство 4×4 м+",
        "inst_duration": "Весь вечер",
        "author_presence": "Волонтёр-смотрящий периодически",
        "_warning": "Метафизика — графика, живопись"
      }
    },
    {
      "id": "app-11",
      "status": "rejected",
      "_source_app": "app-11",
      "application": {
        "_suggested_category": "experiment",
        "_suggested_subcategory": null,
        "submitted_at": "2026-04-29T12:16:42.450Z",
        "name": "Дария",
        "contact": "Mayalliss",
        "about": "https://hh.ru/resume/167b9068ff08ed6aeb0039ed1f747331555959?from=share_ios",
        "title": "Эстетика в диагнозах: как визуальные методики помогают выявлять психические заболевания",
        "description": "Планирую принести рисуночные методики, картинки для узнавания и так далее, которые используют в диагностике псих расстройств. Красивые!",
        "visual": "*",
        "materials": "Бумага, цветные карандаши",
        "volunteers": "Не нужно или приведу своих",
        "source": "От Кроссворда Тьюринга",
        "format": "Станция",
        "place": "Стол и люди вокруг стоя",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Естественные науки; Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "Да, час подходит",
        "org": "Лес",
        "capacity": "5–15",
        "fractal_link": "Самоподобие — методики на нахождение общего и лишнего, отделение главного от второстепенного",
        "special": "Стулья хорошо, но не обязательно"
      }
    },
    {
      "id": "app-14",
      "status": "rejected",
      "_source_app": "app-14",
      "application": {
        "_suggested_category": "art",
        "_suggested_subcategory": "gallery",
        "submitted_at": "2026-04-30T09:14:29.085Z",
        "name": "Надежда Ховаева",
        "contact": "#ERROR!",
        "about": "https://drive.google.com/file/d/1rotTfn8srh3He0n154lxFX949wkzGICC/view?usp=sharing",
        "title": "Программа цифровой колонизации",
        "description": "Полиптих из 9 работ, расположенных в три ряда по три, в специальном порядке. Серия отображает матричную основу мира. Каждая из работ в серии в свою очередь тоже является матрицей: Зарождение, Социум, Выход из системы, Цифровая клетка, Downloaded, Матричная ДНК, Фрактал, Клонирование, Металюди. Вся существующая реальность есть не что иное, как проявление точной математики, где исключены любые случайности. Механизм творения является материнской программой, которая проявляется во всех частицах существующего мироздания. Способен ли человек быть свободным, есть ли у него выбор, или он является частью программы и заложником своих достижений? Размер экспозиции 114 х 168 см, бумага, акварель, оформлены в рамы клик. Серия принимала участие в выставке \"Образ науки\" в ИНИОН РАН г.Москва",
        "visual": "каждая работа - отдельная матрица, в которой заключено повествование. Верхний ряд в сумме со вторым дает третий логически и визуально, также и столбцы. Повествование идет от развития клетки на земле до перерождения в металюдей.",
        "materials": "только крепления на стену - стандартные для картин , \nрасходы на доставку из Волгограда и обратно",
        "volunteers": "рассказывать о работе",
        "source": "Из телеграм-канала",
        "format": "Инсталляция",
        "place": "Другое",
        "indoor_outdoor": "Только в помещении",
        "topic": "Математика; Естественные науки; Искусство",
        "time": "15:00–16:00",
        "links": "https://drive.google.com/file/d/1rotTfn8srh3He0n154lxFX949wkzGICC/view?usp=sharing",
        "fractal_link": "Визуально сама работа матрица из подобных фигур. Одна из работ является сама по себе фракталом  и имеет схожее название. Визуально можно увидеть работу в портфолио.",
        "special": "стена, на которой могут быть расположены работы в три ряда по три шт. Общий размер примерно ширина 120 см, высота 180 см",
        "time_constraints": "я из другого города, сама не смогу присутствовать",
        "extra": "я из другого города, сама не смогу присутствовать",
        "inst_size": "Отдельный угол ~2×2 м",
        "inst_duration": "Весь вечер",
        "author_presence": "Волонтёр-смотрящий периодически"
      }
    },
    {
      "id": "app-20",
      "status": "rejected",
      "_source_app": "app-20",
      "application": {
        "_suggested_category": "art",
        "_suggested_subcategory": "installation",
        "submitted_at": "2026-05-01T10:17:05.813Z",
        "name": "Максим Нострик",
        "contact": "@Maxim_nostrik",
        "about": "СтрингАрт художник. Если пафосно то занимаюсь исследованием мира и себя через искусство СтрингАрт. \nЕсли проще то являюсь огромным поклонником и адептом симметрии. Использую для своих исследований инструмент реализации в види нити.",
        "title": "Инсталляция. Возможно некое количество картин. Инсталляция может быть как сложной так и более простой.",
        "description": "Сами нити символизируют общество. \nНевидимые порой связи образуют цельный рисунок которой начинает видится лишь в тот момент когда от него до я бы слегка отдаляешься.",
        "visual": "Прямые линии обращующие искривление. Казалось бы чистый хаос который под руками человека пришел в структуру. Благодаря математике.",
        "materials": "Если мы с вами найдем общий язык то я поеду с Санкт-Петербурга. \nПо возможности буду рад финансовой помощи.",
        "volunteers": "Один человек.",
        "source": "Из телеграм-канала",
        "format": "Инсталляция",
        "place": "Большая зона 3×3 м+",
        "indoor_outdoor": "Только в помещении",
        "topic": "Математика; Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "bring": "Все материалы. Их не надо будет оплачивать.",
        "links": "https://www.instagram.com/maxim_nostrik?igsh=MWlpbHNxZTRsM3c4Yw%3D%3D&utm_source=qr",
        "fractal_link": "Большое количество повторений прямых дает искривление.",
        "inst_size": "Большое пространство 4×4 м+",
        "inst_duration": "Весь вечер",
        "author_presence": "Волонтёр-смотрящий периодически"
      }
    },
    {
      "id": "app-21",
      "status": "rejected",
      "_source_app": "app-21",
      "application": {
        "_suggested_category": "social",
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-01T19:16:37.783Z",
        "name": "Торбин Максим Сергеевич",
        "contact": 89257153350,
        "about": "Работаю в закупках. Пишу стихи с 2011 года, пробую себя в создание стихов в стиле киберфутуризма - Я ВКонтакте: vk.com/torbin_maxim",
        "title": "Киберфутуризм - цикл стихов Вихрь кристалов",
        "description": "Киберфутуризм – это не только научная фантастика с элементами высоких технологий и передовых научных концепций. Это также форма выражения, которая поднимает философские и социальные вопросы, связанные с будущим нашего общества. В центре внимания таких произведений оказываются робототехника, виртуальная реальность и другие технологии, которые постепенно становятся неотъемлемой частью человеческой жизни.",
        "visual": "Она создана и органично вписана в стихотворение, где природа рассматривается через призму научных и технологических терминов.",
        "materials": "Пока не знаю точно, идея есть, воплотить пока не знаю как 🤔",
        "volunteers": "Если формат подойдет, буду думать и обсуждать",
        "source": "От знакомых",
        "format": "Пока не уверен(а)",
        "place": "Другое",
        "indoor_outdoor": "Без разницы",
        "topic": "Математика; Искусство; Другое",
        "time": "17:00–18:00; 18:00–19:00; 19:00–20:00",
        "links": "Я ВКонтакте: vk.com/torbin_maxim",
        "special": "Пока не знаю, идей для воплощения пока нет, готов обсудить",
        "time_constraints": "Стихи не рассчитаны на долгое время, надо подумать на какой промежуток времени нужно будет сделать",
        "extra": "Есть идея, но нет четкого воплощения идеи.",
        "_warning": "Стихи — формат чтения/перформанса"
      }
    },
    {
      "id": "app-25",
      "status": "rejected",
      "_source_app": "app-25",
      "application": {
        "_suggested_category": "art",
        "_suggested_subcategory": "installation",
        "submitted_at": "2026-05-04T12:24:43.500Z",
        "name": "Олеся Гаврилина",
        "contact": "тг: @olesya_ze",
        "about": "https://disk.360.yandex.ru/i/nC9194fEhR_U6w",
        "title": "Порядок",
        "description": "ссылка на проект на портфолио: https://hsedesign.ru/project/6dbb3a439c584debb34988815ce0d844\nОдин из вариантов экспонирования инсталляции - в дверном проеме, через который могут проходить люди, взаимодействуя с инсталляцией. Или она может быть экспонирована в любом другом месте как неприкосновенный объект.",
        "visual": "Инсталляция изображает устройство мира через абстрактные текстильные формы, универсальную систему, которой можно описать всё.",
        "materials": "Работа готова, желательно оплатить транспортировку",
        "volunteers": "не нужны",
        "source": "Из телеграм-канала",
        "format": "Инсталляция",
        "place": "Уголок для тихой инсталляции",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "links": "https://disk.360.yandex.ru/i/nC9194fEhR_U6w",
        "fractal_link": "Белые объекты, сшитые из разной ткани, являются фрагментами первичной материи. Они могут напоминать одновременно и космические тела (облака вещества, зарождающиеся планеты, туманности) и микроскопические структуры (клетки, частицы, сгустки энергии). Эта двойственность отсылает к идее фрактальности: и в бесконечно большом, и в бесконечно малом действуют одни и те же законы организации.",
        "special": "возможность подвесить деревянную рейку",
        "inst_size": "Отдельный угол ~2×2 м",
        "inst_duration": "Весь вечер",
        "author_presence": "Нет, объект справится сам"
      }
    },
    {
      "id": "app-30",
      "status": "rejected",
      "_source_app": "app-30",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-07T12:25:19.322Z",
        "name": "Ирина Белкина",
        "contact": "79261790723",
        "about": "Я разработала метод системного портрета-квантовый портрет. Я не интерпретирую личность. Я пробую\n визуализировать её как систему",
        "title": "Я дарю себе добро",
        "description": "Рисование своего состояния",
        "visual": "Красота цвета, формы",
        "materials": "Вообще нужны краски кисти бумага плотные в принципе я сама могу бумагу привезти если так нужно ну и краски баночки тоже могу гуашь хорошо бы кисти купить синтетику номер два",
        "volunteers": "Я могу сама справиться и раздать кисти краски и бумагу",
        "source": "Другое",
        "format": "Станция",
        "place": "Стол и 2–4 стула",
        "indoor_outdoor": "Без разницы",
        "topic": "Естественные науки; Искусство",
        "time": "18:00–19:00",
        "slot_ok": "Да, час подходит",
        "bring": "Гуашь",
        "org": "",
        "links": "@artbelkinart",
        "capacity": "",
        "speech_details": "",
        "fractal_link": "",
        "special": "Краски баночки с водой кисти посадочные места",
        "time_constraints": "",
        "duration": "",
        "source_detail": "",
        "extra": "",
        "inst_size": "",
        "inst_duration": "",
        "author_presence": ""
      }
    },
    {
      "id": "app-31",
      "status": "rejected",
      "_source_app": "app-31",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-07T12:33:13.276Z",
        "name": "Полина Бортина",
        "contact": "@polinabortina",
        "about": "В 2009 закончила факультет искусств МГУ им. Ломоносова  по \nспециальности изобразительное искусство. \nВ 2010 году закончила   курсы при училище 1905 года по \nспециальности графический дизайн. \nВ 2011 году прошла курс в колледже номер 13 им. Овчинникова \nпо специальности ювелирное искусство.\nВ 2013 году поехала учиться в Равенну, Италия в мозаичную \nшколу Sisam, где закончила два курса: по микро мозаике и \nсовременной мозаике.",
        "title": "Ткань времени",
        "description": "Концепция\nМир, который мы воспринимаем, чаще всего состоит из \nповерхностей. Орнаменты привычек, культурных кодов и визуальных \nпаттернов помогают нам ориентироваться, но одновременно могут \nскрывать глубину. В проекте «Ткань времени» я исследую момент, \nкогда знакомое перестаёт быть опорой и превращается в \nпрепятствие: когда взгляд, привыкший к рисунку, внезапно начинает \nразличать форму под его поверхностью",
        "visual": "Мой проект - это картины!Идея Работы\nЭто визуальная метафора того, как коллективная и личная память \nнакладываются слоями, искажаются, скрывают важное и \nодновременно помогают нам удерживать связь с прошлым. \nПлоскость декоративного узора становится маской, под которой \nскрывается объём — хрупкий, изменчивый, едва различимый. Узор \nстремится доминировать, но не способен полностью подавить \nматериальность формы.\nХудожественная задача\nМне важно создать ситуацию, в которой зритель переживает переход \nот «плоского» взгляда к внимательному всматриванию. Мои работы \nсуществуют на границе между живописью, объектом и инсталляцией \n—они требуют не только смотреть, но и чувствовать, подключать \nпочти тактильное восприятие. Моя задача — вернуть зрителю \nвнимание к тонким слоям смысла, которые в обычной жизни скрыты \nза орнаментом очевидности",
        "materials": "нет",
        "volunteers": "сама справлюсь",
        "source": "Из телеграм-канала",
        "format": "Пока не уверен(а)",
        "place": "Большая зона 3×3 м+",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Естественные науки",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "",
        "bring": "все",
        "org": "проект .ссылка на него: https://drive.google.com/file/d/1LZrFUsEVtBkTdaM-dSQtSd1hY7q_voVA/view?usp=sharing",
        "links": "https://www.instagram.com/polina_bortini_art/",
        "capacity": "",
        "speech_details": "",
        "fractal_link": "Я работаю с орнаментом, чем не фрактал?",
        "special": "нет",
        "time_constraints": "",
        "duration": "",
        "source_detail": "",
        "extra": "нет",
        "inst_size": "",
        "inst_duration": "",
        "author_presence": "Нет, объект справится сам"
      }
    },
    {
      "id": "app-32",
      "status": "rejected",
      "_source_app": "app-32",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-07T14:06:50.848Z",
        "name": "Екатерина",
        "contact": "@uvelka11358",
        "about": "Учусь в ЕАСИ, на прикладной информатике. Занимаю созданием визуального контента на различных мероприятиях, тех. поддержкой.",
        "title": "Евклидов ритм",
        "description": "Евклидов ритм — результат максимально равномерного распределения импульсов (H) внутри временного интервала (T). В инсталляции T — это круг, разбитый на позиции, а H — количество объектов с магнитами, которые зритель решает разместить. Несколько таких кругов, каждый со своим набором тембров, звучат подобно разным инструментам, но как единая система. При помещении объектов на позиции скрытые датчики фиксируют их, и контроллер мгновенно просчитывает ритм, рождающийся здесь и сейчас. Опыт строится вокруг взаимодействия: математика становится инструментом исследования ритмической закономерности.",
        "visual": "Зритель видит, как расстановка предметов образует геометрический паттерн, который одновременно является точной математической структурой Евклидова ритма и тут же становится звуком",
        "materials": "Доставка из Екатеринбурга",
        "volunteers": "2-3 человека для подключения, 1 человек во время работы инсталляции",
        "source": "От знакомых",
        "format": "Инсталляция",
        "place": "Стол и люди вокруг стоя",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Математика; Искусство",
        "time": "15:00–16:00",
        "slot_ok": "",
        "bring": "",
        "org": "Команда",
        "links": "",
        "capacity": "",
        "speech_details": "",
        "fractal_link": "Алгоритм Евклида, лежащий в основе таких ритмов, рекурсивно делит интервалы, создавая паттерны, которые при рассмотрении с разным разрешением сохраняют свою ритмическую «форму»",
        "special": "Розетки, звук, тишина",
        "time_constraints": "не сможем присутствовать",
        "duration": "",
        "source_detail": "",
        "extra": "Не сможем быть на монтаже, демонтаже",
        "inst_size": "Помещается на столе",
        "inst_duration": "Весь вечер",
        "author_presence": "Волонтёр-смотрящий периодически"
      }
    },
    {
      "id": "app-33",
      "status": "rejected",
      "_source_app": "app-33",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-07T22:22:14.896Z",
        "name": "Даниил",
        "contact": "@wildhed stromperton@gmail.com +79654560564",
        "about": "Ссылка на CV https://docs.google.com/document/d/1TaI1Rt5My48a2GIsS6M4ISbXc7hY6TYfGaxAeC_p0o0/edit?usp=sharing",
        "title": "Вертушка Троянова",
        "description": "Художественная инсталляция, вытекающая из авторского почерка. Холсты будут прикреплены к сервоприводу, скорость которого зависит от расстояния к человеку. Через художественные образы планируется рассмотреть принципиальные законы мироздания, чтобы довести их до эстетически-квантового уровня.",
        "visual": "Семиотика в её связи с математикой раскрывается через образ золотого сечения, отношения отрезков 37 к 63. Многообразие жизненного опыта в эстетическом свёртке холста передаётся через фрактальность в ее связке с динамическими системами.",
        "materials": "Вероятнее всего потребуются модули для Arduino\n- Bluetooth модуль JDY-23\n- ESP32\n- Сервопривод\n- Модули питания и памяти\n\nДоп. Профессиональные художественные краски и холсты",
        "volunteers": "1-2 (скорее всего свои)",
        "source": "Другое",
        "format": "Инсталляция",
        "place": "Уголок для тихой инсталляции",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "",
        "bring": "Платы Arduino, краски Maimeri, грунт",
        "org": "",
        "links": "Личный сайт с портфолио https://sway.neocities.org",
        "capacity": "",
        "speech_details": "",
        "fractal_link": "В работе будут использоваться образы, возникающие в теории динамических систем (бифуркации, аттракторы)",
        "special": "Розетки",
        "time_constraints": "",
        "duration": "",
        "source_detail": "Стас из СУНЦа позвал участвовать @k_stanislav_k",
        "extra": "",
        "inst_size": "Помещается на столе",
        "inst_duration": "Весь вечер",
        "author_presence": "Нет, объект справится сам"
      }
    },
    {
      "id": "app-35",
      "status": "rejected",
      "_source_app": "app-35",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-08T06:52:53.315Z",
        "name": "Ирина",
        "contact": "@ir_ionova",
        "about": "Я учитель физики, репетитор и музыкант-экспениментатор. Училась на факультете Кибернетики в МИРЭА. Провожу голосовые, звуковые, двигательные практики",
        "title": "Что если знание – это то же самое ДНК, и при чем тут музыка?",
        "description": "Это ближе всего к лекции с примерами на музыкальных инструментах. Я объясняю феномен эволюции культуры с первобытных времён до наших дней, раскладываю по полочкам что является геном, ДНК и носителем в этом смысле, как культурная эволюция конкурирует с биологической и почему музыка вне конкуренции. Музыка является ключевым элементом, так как лучше всего иллюстрирует тему. Участники слушают, участвуют в обсуждении, могут привлекаться к интерактивной части \"сделайте так, попробуйте это\" и т.п.",
        "visual": "У меня визуализация через музыку. Если можно это назвать визуалом) Я буду иллюстрировать теорию, которая обоснована математикой и , на своих инструментах: глюкофоне, свирели и перкуссии",
        "materials": "Только маркеры, флипчарт или доска",
        "volunteers": "1 человек для подстраховки, лучше ваш, знающий технику и местность",
        "source": "От знакомых",
        "format": "Выступление",
        "place": "Большая зона 3×3 м+",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Математика; Естественные науки; Искусство",
        "time": "Могу весь интервал 15:00–20:00",
        "slot_ok": "",
        "bring": "Свои музыкальные инструменты",
        "org": "",
        "links": "vk.com/ir_ionova\nhttps://vk.com/wall60141675_6166",
        "capacity": "",
        "speech_details": "Возможно 45-60 минут. Точно не меньше 45. На сцене 1 спикер, зритель видит презентацию или маркерную доску. Переодически используются музыкальные инструменты, звучат известные мелодии",
        "fractal_link": "Если принять аксиому что ДНК самоподобна и фрактально воспроизводится на протяжении поколений то да",
        "special": "Тихое помещение или отдаленный угол на улице. Посадочные места для участников (можно на коврах). Проектор или маркерная доска, звук микрофона и позвучка для инструментов при большом помещении (2 маленьких микро).",
        "time_constraints": "",
        "duration": "Больше 45 минут",
        "source_detail": "",
        "extra": "",
        "inst_size": "",
        "inst_duration": "",
        "author_presence": ""
      }
    },
    {
      "id": "app-38",
      "status": "rejected",
      "_source_app": "app-38",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-09T06:11:57.338Z",
        "name": "Юлия Баранюк",
        "contact": "@Julia_Baranyuk",
        "about": "Мультимедиа художница, перформер, танцовщица, сочиняю музыку, создаю вселенную своих персонажей\nhttps://drive.google.com/file/d/155SsmZ_xejQjY-AarwNjLsGDw-8uijxE/view?usp=sharing",
        "title": "Первая идея - Keyring orchestra - концерт миниатюрных звучащих объектов на станции",
        "description": "Я играю концерт на звучащих брелоках и механизмах музыкальных шкатулок. Объекты подзвучиваются, добавляются звуковые эффекты в момент игры, рядом стоит колонка, где можно слышать обработанный и усиленный звук.\nДелала такой пример ранее, отрывок концерта: https://youtu.be/L8Un89OYDzs",
        "visual": "Музыка математична в принципе. Чтобы играть на механизмах нескольких шкатулок одновременно, нужно некоторое техническое чутье и математическая выверенность последовательности. Здесь музыка создается не столько от ярких образов, сколько от логики и чувства гармонии",
        "materials": "Аренда хорошей звуковой колонки, адекватной помещению/улице",
        "volunteers": "справлюсь сама",
        "source": "Из телеграм-канала",
        "format": "Станция",
        "place": "Стол и люди вокруг стоя",
        "indoor_outdoor": "Без разницы",
        "topic": "Искусство",
        "time": "16:00–17:00; 17:00–18:00; 18:00–19:00; 19:00–20:00",
        "slot_ok": "Да, час подходит",
        "bring": "могу привезти колонку от пункта аренды до места",
        "org": "-",
        "links": "t.me/vo_chto - тг-канал\n@ju_juli_perf - инстаграм\nhttps://www.youtube.com/@JuliaBaranyuk",
        "capacity": "5–15",
        "speech_details": "",
        "fractal_link": "",
        "special": "Могу на улице, но главное чтобы не было дождя и было не совсем шумно (не шум машин)",
        "time_constraints": "",
        "duration": "",
        "source_detail": "",
        "extra": "Есть вторая заявка на танцевальный перформанс. В идеале сделать станцию до танца.",
        "inst_size": "",
        "inst_duration": "",
        "author_presence": ""
      }
    },
    {
      "id": "app-39",
      "status": "rejected",
      "_source_app": "app-39",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-09T06:32:33.885Z",
        "name": "Юлия Баранюк",
        "contact": "@Julia_Baranyuk +7(916)3080847",
        "about": "Мультимедиа художница, перформер, танцовщица, сочиняю музыку, создаю вселенную своих персонажей\nhttps://drive.google.com/file/d/155SsmZ_xejQjY-AarwNjLsGDw-8uijxE/view?usp=sharing",
        "title": "Вторая идея - Kumo - танцевально-вокальный перформанс",
        "description": "В японском языке слово «kumo» пишется разными иероглифами, но звучит одинаково: 蜘蛛 — паук и 雲 — облако. Этот лингвистический парадокс становится отправной точкой для перформанса, исследующего природу превращения: как тяжёлое, земное, плетущее (паук) может стать лёгким, небесным, тающим (облако), и наоборот.",
        "visual": "Паутина — не хаотична, она подчиняется логарифмическим спиралям и самоподобию. И хотя танец не может идеально математично воспроизвести движение паутины, в нем есть это стремление. Переход от угловатой, цепкой позы к плавной, парящей — это непрерывная деформация топологического пространства тела - постоянное нахождение на стыке хаоса и порядка. Академический вокал - чистое соотношение частот и обертоновый ряд, который певица расщепляет в щелчках и придыханиях, — это математика звука, ставшая телом танцовщицы.",
        "materials": "для фоновой электроники (предзапись) понадобится звуковая колонка - своей в наличии нет, согласна на арендованную. Если перформанс будет проходить на улице, возможно, певице потребуется микрофон",
        "volunteers": "-",
        "source": "Из телеграм-канала",
        "format": "Выступление",
        "place": "Большая зона 3×3 м+",
        "indoor_outdoor": "Предпочту помещение, можно и на улице",
        "topic": "Искусство",
        "time": "16:00–17:00; 17:00–18:00; 18:00–19:00; 19:00–20:00",
        "slot_ok": "",
        "bring": "если понадобится арендовать колонку, могу привезти ее. + свое оборудование, реквизит, костюмы",
        "org": "-",
        "links": "t.me/vo_chto - тг-канал\n@ju_juli_perf - инстаграм\nhttps://www.youtube.com/@JuliaBaranyuk",
        "capacity": "",
        "speech_details": "Буто-танец, рождённый в Японии во второй половине 20 века, традиционно работает с образами трансформации, деконструкции тела, пограничными состояниями. Танцовщица буто  (Ю. Баранюк) воплощает паука: её тело изгибается, конечности двигаются независимо, она как будто ткёт невидимую паутину пространства. Но постепенно, через микро-движения, замедления, потерю веса, она становится облаком — парящим, текучим, почти бесплотным. Переход происходит не резко, а как мерцание: то паук проглядывает в облаке, то облако проступает в пауке.\n\nАкадемический вокал (Аня Бах, сопрано) здесь — не иллюстрация, а равноправный агент превращения. Певица использует широкий спектр приёмов: от парящего легато, создающего ощущение бесконечного неба, до резких стаккато, щелчков, придыханий, имитирующих паучью поступь или плетение нити.\n\nЗвуковой ландшафт создаётся ambient-электроникой. Так возникает звуковая паутина, в которой вибрации тела становятся музыкой, а музыка — телом.",
        "fractal_link": "",
        "special": "Если на улице - главное чтобы было слышно звук",
        "time_constraints": "",
        "duration": "15–30 минут",
        "source_detail": "",
        "extra": "Направляла также заявку на Станцию. В идеале сделать Станцию, немного отдохнуть подготовиться и после перформанс.",
        "inst_size": "",
        "inst_duration": "",
        "author_presence": ""
      }
    },
    {
      "id": "app-41",
      "status": "considering",
      "_source_app": "app-41",
      "application": {
        "_suggested_category": null,
        "_suggested_subcategory": null,
        "submitted_at": "2026-05-09T20:09:52.885Z",
        "name": "Дмитрий Манаширович Якубов",
        "contact": "8 (910) 423-40-42, но же Tg. Почта: d.m.yakubov@mail.ru",
        "about": "Руковожу Музеем Истории Науки и Техники (МИНТ) в Москве. Лектор, популяризатор.",
        "title": "Графики. Во-первых, это красиво",
        "description": "Лекция-игра с опытами, парадоксальными фактами и понятными объяснениями. Динамично, весело, есть над чем подумать. \nГрафики – мощнейшее средство визуализации данных. Графики совершенно необходимы учёным, а кроме того, графики бывают очень красивы и даже эмоциональны. Они могут иллюстрировать гармонию и вскрывать ложь. Подсказывать правильные ответы и вводить в заблуждение.\nМинут 10 мы посмотрим разные графики: 1) содержательные, 2) красивые, 3) и то и другое одновременно. Затем участники сыграют в несколько несложных игр. Действия игроков (играют все!) в реальном времени отображаться на графиках: так легче заметить ошибки и найти выигрышные стратегии. \nРезультат: узнаем кое что о графиках и о себе.",
        "visual": "Не понял вопроса... Графики бывают очень красивые. Вот и вся \"ось\".",
        "materials": "Желательно распечатать посеры.",
        "volunteers": "Один для поддержания контактов с залом (передать микрофон, помочь при рассадке). Или ни одного – буду сам справляться.",
        "source": "От знакомых",
        "format": "Выступление",
        "place": "Другое",
        "indoor_outdoor": "Только в помещении",
        "topic": "Математика; Естественные науки",
        "time": "15:00–16:00; 16:00–17:00; 17:00–18:00; Могу весь интервал 15:00–20:00",
        "slot_ok": "",
        "bring": "Какие-то экспонаты: маятник с песком, установку для фигур Хладни, осциллограф.",
        "org": "",
        "links": "https://mint.museum/\nСсылку на видео лекции могу прислать позже.",
        "capacity": "",
        "speech_details": "Продолжительность: 30 минут + время на вопросы и обсуждения\nВозраст слушателей: старшие школьники, их родители, учителя, дедушки и бабушки.\nЖелательное количество участников: 25...30 и больше, чтобы игры проходили весело и показательно.  \nТребуемая подготовка слушателей: это лекция не о физике и не о математике, специальная подготовка не требуется.\n\nЕсли заранее распечатать на пенокартоне с десяток разных красивых графиков – получится маленькая выставка.",
        "fractal_link": "Если нужно, могу включить в выступление эпизод о самоподобии, но пока не уверен.",
        "special": "Большой экран, доступ в Интернет. Стулья по числу участников (25...30 или больше).",
        "time_constraints": "Предпочтительно не ставить занятие на самый вечер. Но можно и туда, если не будет вариантов.",
        "duration": "30–45 минут",
        "source_detail": "",
        "extra": "",
        "inst_size": "",
        "inst_duration": "",
        "author_presence": ""
      }
    },
    {
      "id": "mc-dreamcatcher",
      "status": "accepted",
      "type": "station",
      "subtype": "workshop",
      "title": "Мастерская про ловцов снов",
      "speaker": "Лина Кундалина",
      "description": "Вы сотворите свой личный фрактальный оберег, который будет дарить тепло и уют в вашем доме и защищать как во сне, так и на яву. Это знаменитый индейский предмет силы, в процессе плетения которого мы вкладываем желаемое намерение и создаем для себя амулет со смыслом. Занятие развивает мелкую моторику и настраивает внутреннее состояние на гармоничный лад. Все материалы предоставляются, а свой ловец снов вы заберете с собой.",
      "venue": "courtyard",
      "slots": [
        "slot-st-cy-E",
        "slot-st-cy-D"
      ],
      "apollo_slot": "mid-3"
    },
    {
      "id": "inst-mimesis",
      "status": "accepted",
      "type": "art",
      "subtype": "art",
      "title": "Мимесис",
      "speaker": "арт-дуэт EVPRAXIS",
      "description": "Серия работ, в которой Евдокия и Ирина пытаются представить, как мог бы выглядеть портрет искусственного интеллекта. В античной философии мимесисом называли подражание — способность человека воспроизводить свой мир в искусстве. Художник наблюдает реальность и превращает её в образ. По тому же принципу люди создали искусственный интеллект: подражая устройству собственного мышления.",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/evpraxis"
        }
      ],
      "apollo_slot": "mid-1"
    },
    {
      "id": "media-forrest",
      "status": "accepted",
      "type": "art",
      "subtype": "media",
      "title": "forrest",
      "speaker": "forrest",
      "description": "«Для меня творчество — это магия, это всегда энергия открытия. Это удивительное ощущение, когда сквозь тебя проходит поток вибраций Вселенной, и, если повезёт настроиться на него, то он унесёт тебя с собой за пределы реальности.» Как виджей, forrest во время перформанса использует комбинации различных инструментов, добиваясь совпадения картинки со звуковой текстурой, позволяя ей стать комплиментарной составляющей, неотъемлемой и органичной частью. Только так может возникнуть эффект синергии, когда «единица» и «ноль» в сочетании друг с другом дадут на выходе «десятку»."
    },
    {
      "id": "inst-macramain",
      "status": "accepted",
      "type": "art",
      "subtype": "installation",
      "title": "Macramain",
      "speaker": "Полина Куликова",
      "description": "Полина Куликова воплощает современный дизайн в технике макраме — от декора до одежды. В уличной части галереи можно будет полюбоваться фрактальными мандалами, светящимися в тёмное время суток под ультрафиолетовым излучением."
    },
    {
      "id": "int-marble-marcher",
      "status": "accepted",
      "type": "station",
      "subtype": "interactive",
      "title": "Marble Marcher",
      "description": "Гоночная игра, где вы катаете шарик по поверхности эволюционирующего трёхмерного фрактала. 24 уровня, цель: добраться до финиша как можно быстрее."
    },
    {
      "id": "int-mandelbrot-explorer",
      "status": "accepted",
      "type": "station",
      "subtype": "interactive",
      "title": "Mandelbrot Fractal Explorer",
      "description": "Браузерный исследователь множества Мандельброта с прогрессивным уточнением. Чем дольше держишь камеру в одной точке, тем глубже видны детали, вплоть до триллионных увеличений. Удерживая курсор над фракталом, можно увидеть орбиты значений z, открывающие сложную динамику границы."
    },
    {
      "id": "int-fractal-odyssey",
      "status": "accepted",
      "type": "station",
      "subtype": "interactive",
      "title": "Fractal Odyssey",
      "description": "VR-приложение для медитативного полёта внутри бесконечного туннеля из снежинки Коха."
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
      "start": "16:00",
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
      "end": "21:30"
    },
    {
      "id": "leaf-music-side-0",
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
      "start": "21:30",
      "end": "22:30"
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
      "id": "leaf-music-headline-6",
      "address": [
        1,
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
      "start": "03:00",
      "end": "04:00"
    },
    {
      "id": "leaf-music-side-6",
      "address": [
        1,
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
      "start": "03:00",
      "end": "04:00"
    },
    {
      "id": "leaf-tail",
      "address": "tail",
      "side": "tail",
      "start": "03:00",
      "end": "04:00"
    }
  ],
  "_howto": {
    "schema": "Источник правды о программе фестиваля. Структура (схема v17+, актуально на v24): time_slots — где и когда, events — что (название, спикер, описание), exhibits — постоянные экспонаты вне таймлайна, fern_leaves — 21 лист папоротника, venues и categories — справочники. Поля venue/category/subcategory живут на time_slots; события наследуют их через slot.",
    "add_event": "Добавь объект в массив events: id, title, slot (id слота), speaker, description, status. Поля venue/category/subcategory — на слот, не на событие. Позицию на круге Аполлония назначать НЕ нужно — сайт сам распределяет объекты по схеме на основе их category/subcategory.",
    "add_slot": "Новый временной слот в time_slots: start, end, type (talk/discussion/station/music/music-extra/dance/cinema/interlude/networking), venue (id из data.venues), category, subcategory, tool_label. Привязка к листу фрактала вычисляется автоматически по slot.start; для override — поле slot.leaf.",
    "rename_venue": "Меняй только venues[id].display, id (main_stage и т.д.) оставляй — на него ссылаются слоты.",
    "change_status": "placeholder → tentative → confirmed. confirmed подразумевает заполненные speaker, title, description.",
    "categories": "Семь фиксированных: popsci, music, art, workshop, experiment, cinema, social. art только в exhibits, не на слотах.",
    "category_choice_rule": "По доминанте: что человек делает. Слушает → popsci. Делает руками → workshop. Наблюдает интерактивный объект → experiment (опыт) или art (произведение). Делает с другими → social.",
    "subcategory": "Только для music/cinema/art. music → main_stage/big_bar/courtyard (= venue). cinema → feature/short/animation. art → art/installation/media.",
    "fern_leaves": "Массив из 21 листа фрактала. Поля: id, start, end, side (headline/side/tail), address (координаты в SVG, не трогать). Привязка слот→лист: алгоритм в index.html и в programmer.html (findLeafForSlot). По slot.type определяется side (talk/discussion+music на main_stage → headline; dance → tail; остальное → side). Лист выбирается по slot.start: первый лист этой стороны, чьё окно [start, end) содержит slot.start. Для override — slot.leaf.",
    "exhibits_vs_events": "events — те что в таймлайне (имеют slot). exhibits — постоянные арт-объекты, висят весь вечер. Оба попадают в Аполлонию.",
    "programmer": "UI-инструмент для редактирования этого файла — programmer.html в том же репо. Загружается с github pages, экспорт через кнопку «Скачать festival-data.js».",
    "applications": "Раздел applications — снапшот заявок 1-28 (open call апрель-май 2026). Заявки 29+ программер подтягивает из Google Sheets через меню «📥 Новые заявки», они хранятся в localStorage пользователя. Связь заявка↔событие: поле _source_app: \"app-N\" на event/exhibit. Заявки и связи могут не совпадать 1-к-1 — некоторые заявки отвергнуты (status: rejected), некоторые добавлены вручную без заявки (нет _source_app), некоторые соединены руками после факта (см. кнопку 🔗 связать в карточке заявки в программере)."
  }
};

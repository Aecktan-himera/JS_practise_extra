let lang = "en";
const daysOfWeekRu = "понедельник вторник среда четверг пятница суббота воскресенье";
const daysOfWeekEn = "Monday Tuesday Wednesday Thursday Friday Saturday Sunday";


//Решение через if
if (lang == "ru") {
    console.log(daysOfWeekRu)
} else if (lang == "en") {
    console.log(daysOfWeekEn)
}

//Решение через switch-case
switch (lang) {
    case "ru":
    console.log(daysOfWeekRu);
    break;
    case "en":
    console.log(daysOfWeekEn);
    break;
}

// Решение через многомерный массив
const daysOfWeek = {
  'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'оскресенье'],
  'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

daysOfWeek[lang].forEach(day => console.log(day));



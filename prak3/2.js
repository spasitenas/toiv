// Задайте имена входов кнопок
var button25 = "wb-gpio/Input_25";
var button26 = "wb-gpio/Input_26";

// Задайте имя реле или устройства шарового крана
var valveRelay = "wb-gpio/Relay_2";

// Переменные для хранения предыдущего состояния кнопок
var prevButton25 = 0;
var prevButton26 = 0;

// Функция, которая выполняется при изменении состояния кнопок
defineRule("ValveControlByTwoButtons", {
  whenChanged: [button25, button26],
  then: function (newValue, devName, cellName) {
    var currentButton25 = dev[button25];
    var currentButton26 = dev[button26];

    // Проверяем, что обе кнопки сейчас нажаты и раньше не были нажаты одновременно
    if (currentButton25 && currentButton26 && !(prevButton25 && prevButton26)) {
      // Переключаем состояние шарового крана
      dev[valveRelay] = dev[valveRelay] ? 0 : 1;
      log("Состояние шарового крана изменено: " + (dev[valveRelay] ? "Открыт" : "Закрыт"));
    }

    // Обновляем предыдущие состояния кнопок
    prevButton25 = currentButton25;
    prevButton26 = currentButton26;
  }
});

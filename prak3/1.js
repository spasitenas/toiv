var temperatureSensor = "wb-msw-v3_21/Temperature";

// Задайте здесь имя реле вентилятора
var fanRelay = "wb-mr3_56/K3";

// Установите пороговые значения температуры
var temperatureOn = 10; // Температура, выше которой вентилятор включается
var temperatureOff = 0; // Температура, ниже которой вентилятор выключается

// Функция, которая выполняется при изменении температуры
defineRule("FanControlByTemperature", {
  whenChanged: temperatureSensor,
  then: function (newValue, devName, cellName) {
    log("Текущая температура: " + newValue + "°C");

    if (newValue >= temperatureOn) {
      // Включаем вентилятор
      dev[fanRelay] = 1;
      log("Вентилятор включен");
    }
    else if (newValue <= temperatureOff) {
      // Выключаем вентилятор
      dev[fanRelay] = 0;
      log("Вентилятор выключен");
    }
  }
});

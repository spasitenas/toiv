// Задайте здесь имя датчика температуры
var temperatureSensor = "wb-msw-v3_97/temperature";

// Задайте здесь имя реле вентилятора
var fanRelay = "wb-gpio/Relay_1";

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

defineRule ("crane_control", {
  when: "wb-gpio/EXT1_R3A2" == true && "wb-gpio/EXT1_R3A3" == true,
    then: function (newValue, devName, cellName) {
      dev["wb-mwac_68/K2"] = true;
    }
  
});

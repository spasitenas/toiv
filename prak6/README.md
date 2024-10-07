```bash
mosquitto_sub -h 192.168.2.24 -p 22 -u user -P 123123 -t "/devices/wb-msw-v3/controls/+/on" -t "/devices/wb-ms-v2/controls/temperature" -v
```

```bash
mosquitto_sub -t "/devices/wb-msw-v3/controls/+/on" -t "/devices/wb-ms-v2/controls/temperature" -v
```

Ошибка "Permission denied" указывает на то, что у вас нет достаточных прав для подключения к MQTT-брокеру или для подписки на указанные топики. Вот несколько шагов, которые вы можете предпринять для решения этой проблемы:

1. Проверьте, запущен ли MQTT-брокер:
   ```
   sudo systemctl status mosquitto
   ```

2. Если брокер не запущен, попробуйте запустить его:
   ```
   sudo systemctl start mosquitto
   ```

3. Проверьте настройки аутентификации MQTT-брокера. Возможно, требуется указать имя пользователя и пароль. В этом случае добавьте параметры `-u` и `-P` к вашей команде:
   ```
   mosquitto_sub -u <username> -P <password> -t "/devices/wb-msw-v3/controls/+/on" -t "/devices/wb-ms-v2/controls/temperature" -v
   ```

4. Проверьте права доступа к MQTT-брокеру. Возможно, ваш пользователь не входит в нужную группу. Попробуйте выполнить команду от имени суперпользователя:
   ```
   sudo mosquitto_sub -t "/devices/wb-msw-v3/controls/+/on" -t "/devices/wb-ms-v2/controls/temperature" -v
   ```

5. Проверьте конфигурацию ACL (Access Control List) MQTT-брокера. Убедитесь, что у вашего пользователя есть права на подписку на эти топики.

6. Проверьте, правильно ли указаны топики. Возможно, в вашей системе используются другие названия для устройств или контролов.

7. Если вы используете локальный брокер на Wiren Board, попробуйте явно указать адрес localhost:
   ```
   mosquitto_sub -h localhost -t "/devices/wb-msw-v3/controls/+/on" -t "/devices/wb-ms-v2/controls/temperature" -v
   ```

Если проблема сохраняется, проверьте логи MQTT-брокера для получения дополнительной информации:

```
sudo tail -f /var/log/mosquitto/mosquitto.log
```

Это может дать вам более подробную информацию о причине отказа в доступе.

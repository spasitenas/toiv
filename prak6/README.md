```bash
mosquitto_sub -h 192.168.2.24 -p 22 -u user -P 123123 -t "/devices/wb-msw-v3/controls/+/on" -t "/devices/wb-ms-v2/controls/temperature" -v
```

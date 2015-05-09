# Adam's WiFi kettle software

### Dependencies
* Raspberry Pi with an active WiFi/internet connection
* [WebIOPi](https://code.google.com/p/webiopi/)
* OPTIONAL: The kettle hardware/relays etc


### How to install/use
1. Once you have WebIOPi installed on your Pi, you must replace or edit /etc/webiopi/config to match [the one in this reposistory](config)

2. If you have not modified the [config](config) file, you must copy and paste the contents of [www/](www/) into /var/www or wherever you wish to store your web pages.

3. By default the web-service will toggle GPIO 17, if you wish you change this you will have to modify [config](config) and [kettle.css](www/kettle.css)

4. For security reasons I recommend keeping the password protection on your webpage, you can change the login using the following command: ``` sudo webiopi-passwd ```

4. You can then either add WebIOPi to your startup services with the following command ``` sudo update-rc.d /etc/init.d/webiopi defaults ``` or as a one off: ``` sudo services webiopi start ```

5. If you are running a graphical session on your Pi you can then access the page at http://127.0.0.1 , otherwise whatever the local IP address of your Pi is.

6. Brew your kettle remotely and have a lovely cup of tea. (I do not endorse making cofee using an electric kettle!)


### Screenshots
![The webpage](kettle.jpg)

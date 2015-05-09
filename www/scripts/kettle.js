webiopi().ready(function() {
        		webiopi().setFunction(17,"out");
        		webiopi().refreshGPIO(true);		
        		var content, button;
        		content = $("#content");
        		
        		button = webiopi().createGPIOButton(17,"Toggle that kettle!");
        		content.append(button);
        		
        		
        });

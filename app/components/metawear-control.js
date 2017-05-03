import Ember from 'ember';

export default Ember.Component.extend({
	metawearConnected: false,
	macAddressOfBoard: 'F6:D5:7D:A8:FE:44',
	tempHistory: [],
	tempGraph: [],
	getTime: true,
	stopTime: 0,
	timer: function(){     // pulls current time when called
    var x = new Date();
    var inittime = x.getTime();
    return inittime;
	},
	actions: {
		connect: function() {
			var component = this;
			Ember.run.later(function() {
				try {
					console.log('attempting to connect to: ' + component.get('macAddressOfBoard'));
				metawear.mwdevice.connect(component.get('macAddressOfBoard'),
					function(){//success
						console.log('connected');
						component.set('metawearConnected', true);
					}, function(error){//failure
						console.log('connection failed' +error);
						alert('error: '+error);
					});
				}
				catch(err){
					console.log('error: '+err);
					alert('error: '+err);
				}

				}, 100);//run after 100ms
			},
		disconnect: function(){
			var component = this;
			Ember.run.later(function() {
				try {
					console.log('Disconnecting from: ' + component.get('macAddressOfBoard'));
					metawear.mwdevice.disconnect();
					component.set('metawearConnected', false);
				}
				catch(err){
					console.log('error: '+err);
					alert('error: '+err);
				}

			}, 100);//run after 100ms
		},
		recordTempSWLF: function() {
			var component = this;
			var temperatureValues = component.get('tempHistory');
			var graphValues = component.get('tempGraph');

			var temperatureSuccess = function(result) {
				console.log(result);
				temperatureValues.pushObject(result.temperature);
				localStorage.setItem('temperature', temperatureValues);
				var newTemp = {'time': Date.now(), 'value': result.temperature, 'label': 'Temperature'};
				graphValues.pushObject(newTemp);
				component.set('temperature', result.temperature);

			};

			var failure = function(result){
				var message = "";
				if(result.status !== undefined){
					message = result.status;
				}else{
					message = result;
				}
				console.log(result);
				alert("ERROR : " + message);
			};

      Ember.run.later(function() {
      try {
        console.log("Taking Temperature");
        metawear.mwdevice.readTemperature(temperatureSuccess, failure, {sensor: 'R_NRF_DIE'});

      } catch (err) {
        console.log('error: '+err);
        alert('error: '+err);
      }
      console.log(graphValues);
      var check = component.get('getTime');
      if (temperatureValues[temperatureValues.length -1] >= 32 && check) {
        var pulledTime = parseInt(component.timer); // converts pulled value to integer from timer function
        component.set('stopTime', pulledTime + 30000);
        console.log(new Date().getTime());
        console.log("initialized times");
        component.set('getTime', false);
       } else {
          var stopTime = parseInt(component.get('stopTime'));
          var currentTime = parseInt(new Date().getTime());
          if(!check && currentTime >= stopTime) { //if temperature not 60 degrees or greater then it is false otherwise should be true
            console.log("Your laundry is done.");
            alert('Your laundry is done.');
          } else {
            console.log("Your laundry is close to being done.");
          }
      }
      if(temperatureValues.length < 300) {
         component.send('recordTempSWLF');
      }
      }, 10000);

		},

		playLED: function() {
    					var component = this;
    					Ember.run.later(function(){
    						//wrapper to preserve binding satistfaction
    						try {
    						//invoke metawear connection
    							console.log('Turning on Blue Light: ' + component.get('macAddressOfBoard'));
    							metawear.mwdevice.playLED({channel:"BLUE",
    								riseTime: 0, pulseDuration: 1000,
    								repeatCount: 5, highTime: 500,
    								fallTime: 750, lowIntensity: 16,
    								highIntensity: 31});
    						}
    						catch(err){
    							console.log('error: '+err);
    							alert('error: '+err);
    						}

    					}, 100);//run after 100ms
    				},

    stopLED: function() {
      var component = this;
      Ember.run.later(function(){
        //wrapper
        try {
        //invoke metawear connection
          console.log('Shutting off Blue Light: ' + component.get('macAddressOfBoard'));
          metawear.mwdevice.stopLED();
        }
        catch(err){
          console.log('error: '+err);
          alert('error: '+err);
        }
      }, 100);//run after 100ms
    }

	}
});

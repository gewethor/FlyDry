import Ember from 'ember';

export default Ember.Component.extend({
	metawearConnected: false,
	macAddressOfBoard: 'F3:30:D9:88:01:7E',
	actions: {
		connect: function(){
			var component = this;
			Ember.run.later(function(){
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
			Ember.run.later(function(){
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
		recordTempSWLF: function(){
			//final Temperature.Sensor tempSensor = temperature.findSensors(SensorType.NRF_SOC)[0];
			var temperatureSuccess = function(result){
				console.log(result);
				this.set('temperature').text(
					'temperature: ' + result.temperature
				);
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

			metawear.mwdevice.readTemperature(temperatureSuccess, failure, {sensor: 'R_NRF_DIE'});
		},
		recordTempSMHF: function(){
		},

	}
});

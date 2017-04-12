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
		 
	}
});

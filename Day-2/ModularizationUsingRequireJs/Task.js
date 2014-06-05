define([],function(){
	return function Task(name){
		var modelState = {name : name, isCompleted : false};
		this.set = function(attrName,value){
			modelState[attrName] = value;
			this.trigger(attrName);
		};
		this.get = function(attrName){
			return modelState[attrName];
		};

		this.remove = function(){
			this.trigger('remove');
		}

		this.toggleCompletion = function(){
			modelState["isCompleted"] = !modelState["isCompleted"];
			this.trigger("isCompleted");
		}

		var subscribers = {};
		this.addSubscriber = function(attrName, subscription){
			subscribers[attrName] = subscribers[attrName] || [];
			subscribers[attrName].push(subscription);
		};
		this.trigger = function(attrName){
			var subscriptions = subscribers[attrName] || [];
			for(var i=0;i<subscriptions.length;i++){
				var subscription = subscriptions[i];
				subscription();
			}
		}
	}
});
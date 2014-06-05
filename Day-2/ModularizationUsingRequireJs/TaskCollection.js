define(['Task'],function(Task){
	return function TaskCollection(){
		var tasks = [];

		this.add = function(taskName){
			var newTask = new Task(taskName);
			tasks.push(newTask);
			this.trigger('add',newTask);
		};

		this.removeCompleted = function(){
			for(var i = tasks.length-1;i>=0;i--){
				if (tasks[i].get('isCompleted') === true){
					tasks[i].remove();
					tasks.splice(i,1);
					
				}
			}
		}
		this.getAll = function(){
			return tasks;
		}

		var subscribers = {};
		this.addSubscriber = function(attrName, subscription){
			subscribers[attrName] = subscribers[attrName] || [];
			subscribers[attrName].push(subscription);
		};
		this.trigger = function(attrName,value){
			var subscriptions = subscribers[attrName] || [];
			for(var i=0;i<subscriptions.length;i++){
				var subscription = subscriptions[i];
				subscription(value);
			}
		}

	}
});
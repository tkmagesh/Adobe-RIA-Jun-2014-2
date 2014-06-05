define(['jquery'], function($){
	return function TaskView(model){
		var task = this.task = model;
		var $root = this.$root = $("<li></li>");
		
		this.initialize = function(){
			/*Bind UI events*/
			$root.on("click",function(){
				task.toggleCompletion();
			});

			/* Model Change Events*/
			task.addSubscriber("isCompleted",this.render);
			task.addSubscriber("remove",function(){
				$root.remove();
			})
		}

		this.render = function(){
			$root.html(task.get('name'));
			if (task.get('isCompleted')){
				$root.addClass("completed");
			} else {
				$root.removeClass("completed");
			}
			return this;
		}
	}
});
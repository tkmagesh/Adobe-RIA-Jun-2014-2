define(['jquery','TaskView','text!appTemplate.html'],function($,TaskView,templateHTML){
	return function TaskCollectionView(collection){
		var taskCollection = this.taskCollection = collection;
		var $root = this.$root = $("<div></div>");

		this.initialize = function(){
			/*UI Element events*/
			$root.on("click","#btnAddTask",function(){
				var taskName = $("#txtTask",$root).val();
				taskCollection.add(taskName);
			});

			$root.on("click","#btnRemoveCompleted",function(){
				taskCollection.removeCompleted();
			});

			/*Collection events*/
			taskCollection.addSubscriber("add", function(newTask){
				var newTaskView = new TaskView(newTask);
				newTaskView.initialize();
				newTaskView.render().$root.appendTo($("#ulTaskList",$root));
			});
		};
		this.render = function(){
			//var templateHTML = $("#taskManagerTemplate").html();
			this.$root.append(templateHTML);
			return this;
		};

	}
});

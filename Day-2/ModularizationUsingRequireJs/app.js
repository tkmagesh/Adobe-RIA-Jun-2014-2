require.config({
	paths : {
		'jquery' : 'jquery-1.11.1'
	}
});
require(['jquery','TaskCollection','TaskCollectionView','user'], function($,TaskCollection, TaskCollectionView, u){
	$(function(){
		window.taskCollection = new TaskCollection();
		window.taskCollectionView = new TaskCollectionView(window.taskCollection);
		taskCollectionView.initialize();
		taskCollectionView.render().$root.appendTo(document.body);
		$(document.body).append("Welcome " + u.name);
	});
});
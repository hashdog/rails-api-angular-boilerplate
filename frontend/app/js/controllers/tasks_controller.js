// with $resource
angular.module("app").controller("TasksResourceController", function ($scope, TaskResource) {
  // because the stubbed endpoint returns an array of results, .query() is used
  // if the endpoint returned an object, you would use .get()
  

  $scope.init = function() {
  	$scope.tasks = TaskResource.query();	
  };

  $scope.addTask = function(){
	TaskResource.save({
		title: $scope.task.title,
		ready: false
	},function(response){
		$scope.tasks.push(response);
		$scope.task = {};
  	});
  };

  $scope.removeTask = function(index){
  	TaskResource.delete({ id: $scope.tasks[index].id }, function(data){
  		$scope.tasks.splice(index, 1);
  	}, function(err){
  		console.log('error: ', err);
  	});
  };
});


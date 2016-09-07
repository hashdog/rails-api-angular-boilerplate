angular.module("app").factory("TaskResource", function($q, $resource) {
  var apiUrl = '/tasks';

	return $resource(apiUrl, {
		id: '@id'
	}, {
		'delete': {
			'url': apiUrl + '/:id',
			'method': 'DELETE'
		}
	});
});

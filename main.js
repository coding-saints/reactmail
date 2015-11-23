angular.module("MailboxApp",['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("partials/inbox");
	$stateProvider.state("inbox",{
		url:"partials/inbox",
		templateUrl:"partials/inbox.html",
		controller:function($scope, messageStore){
			//console.log("Inbox.")
			$scope.messages = messageStore.getMessages();
		}
	})
})
 .service('messageStore',function(){
 	var messages = [];
 	var sampleSize = 100;
 	for (var i = 0; i < sampleSize; i++) {
 		messages.push({
 			sender:"john.smith"+i+"@gmail.com",
 			date:Date.now() - i * 2400000000,
 			id:i,
 			subject: "Regarding memo #" + i,
 			body: "Hey Dan. Where is that memo #" + i + "?"
 		})
 	}
 	return {
 		getMessages:function(){
 			return messages;
 		}
 	}
 })
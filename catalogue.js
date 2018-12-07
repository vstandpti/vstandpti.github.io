(function(){

	var app = angular.module('store', ['ngCookies']);

	app.controller('StoreController', ['$scope','$cookies', function($scope,$cookies){
	
		$scope.products = productsData;
		$scope.cart = [];
	  $scope.total = 0;
	  /*
		if ($cookieStore.get('cart') !== null) {
		 		$scope.cart =  $cookieStore.get('cart');
		}
		*/
		
		if(!angular.isUndefined($cookies.get('total'))){
		  $scope.total = parseFloat($cookies.get('total'));
		}
		//Sepetimiz daha önceden tanımlıysa onu çekelim
		if (!angular.isUndefined($cookies.get('cart'))) {
		 		$scope.cart =  $cookies.getObject('cart');
		}
		
		$scope.addItemToCart = function(product){
		  
		 	if ($scope.cart.length === 0){
		 		product.count = 1;
		 		$scope.cart.push(product);
		 	} else {
		 		var repeat = false;
		 		for(var i = 0; i< $scope.cart.length; i++){
		 			if($scope.cart[i].id === product.id){
		 				repeat = true;
		 				$scope.cart[i].count +=1;
		 			}
		 		}
		 		if (!repeat) {
		 			product.count = 1;
		 		 	$scope.cart.push(product);	
		 		}
		 	}
		 	var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1);
		 	$cookies.putObject('cart', $scope.cart,  {'expires': expireDate});
		 	$scope.cart = $cookies.getObject('cart');
		 
		  $scope.total += parseFloat(product.price);
      $cookies.put('total', $scope.total,  {'expires': expireDate});
		 };

		 $scope.removeItemCart = function(product){
		   
		   if(product.count > 1){
		     product.count -= 1;
		     var expireDate = new Date();
         expireDate.setDate(expireDate.getDate() + 1);
		     $cookies.putObject('cart', $scope.cart, {'expires': expireDate});
 			   $scope.cart = $cookies.getObject('cart');
		   }
		   else if(product.count === 1){
		     var index = $scope.cart.indexOf(product);
 			 $scope.cart.splice(index, 1);
 			 expireDate = new Date();
       expireDate.setDate(expireDate.getDate() + 1);
 			 $cookies.putObject('cart', $scope.cart, {'expires': expireDate});
 			 $scope.cart = $cookies.getObject('cart');
		     
		   }
		   
		   $scope.total -= parseFloat(product.price);
       $cookies.put('total', $scope.total,  {'expires': expireDate});
		   
		 };

	}]);



	var productsData = [{
		id: 1,
		name: 'Nasi + Ayam Rica-rica + Lalapan + Es Teh Manis',
		price: 17.000,
		image: "resources/img/1.jpg"
	},{
		id: 2,
		name: 'Nasi + Ikan Pepes + Capcay + Lalapan + Es Teh Manis',
		price: 20.000,
		image: ''
	},{
		id: 3,
		name: 'Nasi + Sate + Capcay + Tahu Tempe + Lalapan + Es Teh Manis',
		price: 30.000,
		image: ''
	}];

})();
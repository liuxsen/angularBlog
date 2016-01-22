/**
* app Module
*
* Description
*/
angular.module('app', [])
.controller('first', ['$scope', function($scope){
	$scope.tom = {
		gender: 0,
		name: 'tom',
		age: 23
	}
	$scope.formateGender = function(gender){
		if(gender == 0){
			return '女'
		}
		if(gender == 1){
			return '男'
		}
	}

	// 数组
	$scope.arr1 = [1,2,3];
	$scope.add = function(){
		$scope.arr1.push($scope.arr1.length+1)
	}
	$scope.arr2 = [1,1,3,4]
	$scope.arr3 = [
		[11,12,21],
		[12,24,56],
		[202,3565,678,34,34]
	]

	// 数组元素是对象结构
	$scope.arr4 = [
		{
			name: 'tom',
			age: 23
		},
		{
			name: 'zhangsan',
			age: 22
		}
	]

	$scope.obj = {
		a:1,
		b:2,
		c:3
	}

}])
.controller('ctrl2', ['$scope', function($scope){
	$scope.a = 1;
	$scope.$watch('a',function(newValue,oldValue){
		// alert(oldValue+"->"+newValue)
	})
	$scope.changeA = function(){
		$scope.a++;
	}

	$scope.arr = [1,2,3];
	$scope.addItem = function(){
		$scope.arr.push($scope.arr.length+1)
	}
	$scope.$watch('arr',function(newValue){
		// alert('deep' + newValue.join(','))
	},true)//true 监控包括数组的子元素和对象的属性等等。

}])
.controller('ctrl3', ['$scope', function($scope){
	$scope.items = [];
	for (var i = 0; i < 10; i++) {
		$scope.items.push({
			title: i
		})
	}
	$scope.select = function(item){
		$scope.selectedItem = item
	}
}])
.controller('ctrl4', ['$scope', function($scope){
	$scope.provinceArr = ['江苏','云南'];
	$scope.cityArr = [];

	$scope.$watch('selectedProvince',function(province){
		switch (province) {
			case '江苏':
			     $scope.cityArr = ['南京','苏州']
				break;
			case '云南':
			     $scope.cityArr = ['昆明','丽江']
				break;
			default:
				// statements_def
				break;
		}
	})
	$scope.selectProvice = function(province){
		$scope.selectedProvince = province;
	}
	$scope.selectCity = function(city){
		$scope.selectedCity = city;
	}
}])
.controller('formCtrl', ['$scope', function($scope){
	$scope.editing = false;
	$scope.provinceArr = ['江苏','云南'];
	$scope.cityArr = [];
	$scope.create=function(){
		$scope.editing = true;
	}
}])
/**
 * @ngdoc function
 * @name mockeryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mockeryApp
 */
angular.module("mockeryApp").controller("MainCtrl", ["$scope", function ($scope) {
  "use strict";

  $scope.mappingData = _.cloneDeep(ngFx.flattenEntityProperties(ngFx.propertyMappingInfo));

  $scope.evaluateClass = function (element) {
    return "tr-" + element.embeddingIndex;
  };

  $scope.errorMessage = "";

  $scope.nextStep = function () {
    var allProperties = _.flatten($scope.mappingData, "properties");
    var mappedProperties = _.map(allProperties, function (property) {
      return {
        csvIndex: property.column,
        propertyName: property.propertyName,
        isRequired: property.isRequired
      };
    });

    var hasCsvValue = _.all(mappedProperties, function (e) {
      return !e.isRequired || e.csvIndex > -1 ;
    });

    if (hasCsvValue) {
      alert(JSON.stringify(mappedProperties, undefined, 0));
    } else {
      alert("Please map all required elements!");
    }
  };

  $scope.fx = {
    evaluateFirstRow: function (index) {
      if (index > -1 ){
        return $scope.csvFilePreview.rowsData[0][index];
      } else {
        return "";
      }

    },
    elementOf : function (element, array) {
      return _.indexOf(array, element);
    }
  };

  $scope.csvFilePreview = {
    "columnLabels": [
      "Department Code",
      "Department Title",
      "Division Code",
      "Division Title"
    ],
    "rowsData": [
      [
        "lectus",
        "vestibulum eget vulputate ut",
        "vulputate ut",
        "quam turpis adipiscing lorem vitae"
      ],
      [
        "augue",
        "sed lacus morbi sem mauris",
        "aliquam augue",
        "luctus et ultrices posuere"
      ],
      [
        "nisi",
        "ac leo pellentesque ultrices mattis",
        "blandit",
        "aenean lectus pellentesque eget"
      ],
      [
        "vel nisl",
        "sapien arcu sed",
        "imperdiet nullam",
        "venenatis non sodales sed tincidunt"
      ],
      [
        "leo pellentesque",
        "donec pharetra magna vestibulum",
        "ligula in",
        "nam ultrices libero non mattis"
      ],
      [
        "turpis adipiscing",
        "mauris ullamcorper purus sit",
        "pulvinar",
        "sed accumsan felis ut"
      ],
      [
        "mattis",
        "ac lobortis vel dapibus at",
        "nec dui",
        "in faucibus orci luctus"
      ],
      [
        "quam",
        "vitae mattis nibh ligula",
        "libero",
        "dolor sit amet"
      ],
      [
        "congue vivamus",
        "ut volutpat sapien arcu",
        "odio",
        "ipsum aliquam non mauris"
      ]
    ]
  };

  $scope.csvFilePreview.columnLabels.unshift(ngFx.notSelectedOption);

  $scope.csvFilePreview.columnLabels = _.map($scope.csvFilePreview.columnLabels, function (e, i) {
    return {
      id: (i - 1),
      label: e
    };
  });

}]);

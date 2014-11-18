/**
 * Created by brbulic on 18/11/14.
 */

angular.module("mockeryApp").directive("lookupType", function () {
  "use strict";
  return {
    scope: {
      entityProperty: "="
    },
    controller: ["$scope", function ($scope) {
      $scope.fx = {
        dataSourceForDropdown: function (selectedModel) {
          if (selectedModel === 1)
        }
      };
    }],
    templateUrl: "views/lookupType.html",
    replace: false
  };
});


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
      var boolean = [
        {
          value: undefined,
          label: ngFx.notSelectedOption
        },
        {
          value: "yes",
          label: "Yes"
        },
        {
          value: "no",
          label: "No"
        }
      ];

      $scope.fx = {
        dataSourceForDropdown: function (selectedModel) {
          if (selectedModel === ngFx.lookupTypes.Boolean) {
            return boolean;
          } else {
            return [];
          }
        }
      };
    }],
    templateUrl: "views/lookupType.html",
    replace: false
  };
});

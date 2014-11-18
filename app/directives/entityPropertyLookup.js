/**
 * Created by brbulic on 18/11/14.
 */

angular.module("mockeryApp").directive("entityPropertyLookup", function () {
  "use strict";
  return {
    scope: {
      entityProperty: "="
    },
    controller: ["$scope", function ($scope) {

    }],
    templateUrl: "views/entityPropertyLookup.html",
    replace: false
  };
});

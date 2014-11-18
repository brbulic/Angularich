/**
 * Created by brbulic on 18/11/14.
 */

angular.module("mockeryApp").directive("entityLookup", function () {
  "use strict";
  return {
    scope: {
      lookupSpec: "="
    },
    controller: ["$scope", function ($scope) {

    }],
    templateUrl: "../views/entityLookup.html",
    replace: false
  };
});

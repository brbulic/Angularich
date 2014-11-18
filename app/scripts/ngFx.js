/**
 * Created by brbulic on 13/11/14.
 */

var ngFx = (function () {
  "use strict";
  var ngFx = {};

  ngFx.lookupTypes = {
    
  };

  ngFx.tabelator = function (obj) {
    var secret = function (obj, accumulator) {
      var tabs = _.reduce(_.range(accumulator), function (acc, element) {
        return acc + "\t";
      }, "");

      var result = accumulator;
      console.log(tabs + obj.label);
      _.each(obj.propertyMappingInfos, function (element) {
        console.log(tabs + element.label);
        if (element.childEntityMappingInfo) {
          result = secret(element.childEntityMappingInfo, accumulator + 1);
        }
      });

      return result;
    };

    return (secret(obj, 0) + 1);
  };

  ngFx.EntityDescriptor = function (entityName, embeddingIndex, propertyArray) {
    this.EmptyChildEntity = "EMPTY";

    return {
      entityName: entityName,
      embeddingIndex: embeddingIndex,
      properties: propertyArray,
      lookupType: 0
    };
  };

  ngFx.flattenEntityProperties = function (obj) {
    var resultObject = [];

    var secret = function (obj, embedIndex, arrayRef) {
      _.each(obj.propertyMappingInfos, function (element) {
        var elementCopy = _.cloneDeep(element);
        elementCopy.column = -1;

        if (element.childEntityMappingInfo) {
          elementCopy.childEntityMappingInfo = ngFx.EntityDescriptor.EmptyChildEntity;
          var parsed = new ngFx.EntityDescriptor(
            elementCopy.label,
            embedIndex + 1,
            secret(element.childEntityMappingInfo, embedIndex + 1, [])
          );

          resultObject.push(parsed);
        } else {
          arrayRef.push(_.extend(elementCopy, {embedIndex: embedIndex}));
        }
      });

      return arrayRef;
    };

    resultObject.push(ngFx.EntityDescriptor(
      obj.label,
      0,
      secret(obj, 0, [])
    ));

    return resultObject.reverse();
  };

  ngFx.propertyMappingInfo = {
    "entityType": 1,
    "label": "Employees",
    "propertyMappingInfos": [
      {
        "autoCompleteOperationType": null,
        "autoCompletePlaceholder": null,
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": true,
        "label": "First Name",
        "lookupType": 0,
        "propertyName": "FirstName"
      },
      {
        "autoCompleteOperationType": null,
        "autoCompletePlaceholder": null,
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": true,
        "label": "Last Name",
        "lookupType": 0,
        "propertyName": "LastName"
      },
      {
        "autoCompleteOperationType": null,
        "autoCompletePlaceholder": null,
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": true,
        "label": "Employee Number",
        "lookupType": 0,
        "propertyName": "EmployeeNumber"
      },
      {
        "autoCompleteOperationType": null,
        "autoCompletePlaceholder": null,
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": true,
        "label": "Email",
        "lookupType": 0,
        "propertyName": "Email"
      },
      {
        "autoCompleteOperationType": null,
        "autoCompletePlaceholder": null,
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": true,
        "label": "Start Date",
        "lookupType": 0,
        "propertyName": "EOD_Date"
      },
      {
        "autoCompleteOperationType": null,
        "autoCompletePlaceholder": null,
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": false,
        "label": "Separation Date",
        "lookupType": 0,
        "propertyName": "SeparationDate"
      },
      {
        "autoCompleteOperationType": null,
        "autoCompletePlaceholder": null,
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": false,
        "label": "Address 1",
        "lookupType": 0,
        "propertyName": "Address1"
      },
      {
        "autoCompleteOperationType": null,
        "autoCompletePlaceholder": null,
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": false,
        "label": "Address 2",
        "lookupType": 0,
        "propertyName": "Address2"
      },
      {
        "autoCompleteOperationType": null,
        "autoCompletePlaceholder": null,
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": false,
        "label": "City",
        "lookupType": 0,
        "propertyName": "City"
      },
      {
        "autoCompleteOperationType": null,
        "autoCompletePlaceholder": null,
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": false,
        "label": "Zip Code",
        "lookupType": 0,
        "propertyName": "ZipCode"
      },
      {
        "autoCompleteOperationType": null,
        "autoCompletePlaceholder": null,
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": false,
        "label": "Phone",
        "lookupType": 0,
        "propertyName": "Phone"
      },
      {
        "autoCompleteOperationType": null,
        "autoCompletePlaceholder": null,
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": false,
        "label": "State",
        "lookupType": 12,
        "propertyName": "StateId"
      },
      {
        "autoCompleteOperationType": "DirectManager",
        "autoCompletePlaceholder": "Start typing name, number or email",
        "childEntityMappingInfo": null,
        "isIdentifier": false,
        "isRequired": false,
        "label": "Direct Manager",
        "lookupType": 0,
        "propertyName": "DirectManagerId"
      },
      {
        "autoCompleteOperationType": "PositionTitle",
        "autoCompletePlaceholder": "Start typing title or code",
        "childEntityMappingInfo": {
          "entityType": 9,
          "label": "Positions",
          "propertyMappingInfos": [
            {
              "autoCompleteOperationType": null,
              "autoCompletePlaceholder": null,
              "childEntityMappingInfo": null,
              "isIdentifier": true,
              "isRequired": true,
              "label": "Position Control Number",
              "lookupType": 0,
              "propertyName": "Position.PositionCode"
            },
            {
              "autoCompleteOperationType": null,
              "autoCompletePlaceholder": null,
              "childEntityMappingInfo": null,
              "isIdentifier": true,
              "isRequired": true,
              "label": "Title",
              "lookupType": 0,
              "propertyName": "Position.PositionTitle"
            },
            {
              "autoCompleteOperationType": null,
              "autoCompletePlaceholder": null,
              "childEntityMappingInfo": null,
              "isIdentifier": false,
              "isRequired": false,
              "label": "Position Description",
              "lookupType": 0,
              "propertyName": "Position.Description"
            },
            {
              "autoCompleteOperationType": null,
              "autoCompletePlaceholder": null,
              "childEntityMappingInfo": null,
              "isIdentifier": false,
              "isRequired": false,
              "label": "Max FTE",
              "lookupType": 0,
              "propertyName": "Position.MaxFTE"
            },
            {
              "autoCompleteOperationType": null,
              "autoCompletePlaceholder": null,
              "childEntityMappingInfo": null,
              "isIdentifier": false,
              "isRequired": false,
              "label": "Current FTE",
              "lookupType": 0,
              "propertyName": "Position.CurrentFTE"
            },
            {
              "autoCompleteOperationType": null,
              "autoCompletePlaceholder": null,
              "childEntityMappingInfo": null,
              "isIdentifier": false,
              "isRequired": false,
              "label": "Performance Schedule",
              "lookupType": 11,
              "propertyName": "Position.PerformanceScheduleId"
            },
            {
              "autoCompleteOperationType": "Divisions",
              "autoCompletePlaceholder": "Start typing title or code",
              "childEntityMappingInfo": {
                "entityType": 12,
                "label": "Divisions",
                "propertyMappingInfos": [
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": true,
                    "isRequired": true,
                    "label": "Division Code",
                    "lookupType": 0,
                    "propertyName": "Position.Division.DivisionCode"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": true,
                    "isRequired": true,
                    "label": "Division",
                    "lookupType": 0,
                    "propertyName": "Position.Division.DivisionName"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": false,
                    "label": "Active_PE",
                    "lookupType": 13,
                    "propertyName": "Position.Division.PE_IsActive"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": false,
                    "label": "Active_IN",
                    "lookupType": 13,
                    "propertyName": "Position.Division.IN_IsActive"
                  },
                  {
                    "autoCompleteOperationType": "DepartmentName",
                    "autoCompletePlaceholder": "Start typing name or code",
                    "childEntityMappingInfo": {
                      "entityType": 11,
                      "label": "Departments",
                      "propertyMappingInfos": [
                        {
                          "autoCompleteOperationType": null,
                          "autoCompletePlaceholder": null,
                          "childEntityMappingInfo": null,
                          "isIdentifier": true,
                          "isRequired": true,
                          "label": "Department Code",
                          "lookupType": 0,
                          "propertyName": "Position.Division.Department.DepartmentCode"
                        },
                        {
                          "autoCompleteOperationType": null,
                          "autoCompletePlaceholder": null,
                          "childEntityMappingInfo": null,
                          "isIdentifier": true,
                          "isRequired": true,
                          "label": "Department",
                          "lookupType": 0,
                          "propertyName": "Position.Division.Department.DepartmentName"
                        },
                        {
                          "autoCompleteOperationType": null,
                          "autoCompletePlaceholder": null,
                          "childEntityMappingInfo": null,
                          "isIdentifier": false,
                          "isRequired": false,
                          "label": "Active_PE",
                          "lookupType": 13,
                          "propertyName": "Position.Division.Department.PE_IsActive"
                        },
                        {
                          "autoCompleteOperationType": null,
                          "autoCompletePlaceholder": null,
                          "childEntityMappingInfo": null,
                          "isIdentifier": false,
                          "isRequired": false,
                          "label": "Active_IN",
                          "lookupType": 13,
                          "propertyName": "Position.Division.Department.IN_IsActive"
                        }
                      ]
                    },
                    "isIdentifier": false,
                    "isRequired": false,
                    "label": "Department",
                    "lookupType": 0,
                    "propertyName": "Position.Division.Department"
                  }
                ]
              },
              "isIdentifier": false,
              "isRequired": false,
              "label": "Division",
              "lookupType": 0,
              "propertyName": "Position.Division"
            },
            {
              "autoCompleteOperationType": "Class_Title",
              "autoCompletePlaceholder": "Start typing title or code",
              "childEntityMappingInfo": {
                "entityType": 13,
                "label": "Class Specifications",
                "propertyMappingInfos": [
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": true,
                    "isRequired": true,
                    "label": "Class Code",
                    "lookupType": 0,
                    "propertyName": "Position.ClassSpecification.ClassCode"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": true,
                    "isRequired": true,
                    "label": "Class Title",
                    "lookupType": 0,
                    "propertyName": "Position.ClassSpecification.ClassTitle"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": false,
                    "label": "Examples of Duties",
                    "lookupType": 0,
                    "propertyName": "Position.ClassSpecification.ExamplesOfDuties"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": false,
                    "label": "Supplemental Information",
                    "lookupType": 0,
                    "propertyName": "Position.ClassSpecification.SupplementalInfo"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": true,
                    "label": "Minimum Salary",
                    "lookupType": 0,
                    "propertyName": "Position.ClassSpecification.SalaryMIN"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": false,
                    "label": "Maximum Salary",
                    "lookupType": 0,
                    "propertyName": "Position.ClassSpecification.SalaryMAX"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": true,
                    "label": "Bargaining Unit",
                    "lookupType": 1,
                    "propertyName": "Position.ClassSpecification.BargainingUnitId"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": true,
                    "label": "Physical Class",
                    "lookupType": 4,
                    "propertyName": "Position.ClassSpecification.PhysicalClassId"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": true,
                    "label": "Benefit Code",
                    "lookupType": 5,
                    "propertyName": "Position.ClassSpecification.BenefitId"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": true,
                    "label": "Occupational Group",
                    "lookupType": 6,
                    "propertyName": "Position.ClassSpecification.OccupationalGroupId"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": true,
                    "label": "FLSA",
                    "lookupType": 7,
                    "propertyName": "Position.ClassSpecification.FlsaId"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": true,
                    "label": "EEO",
                    "lookupType": 8,
                    "propertyName": "Position.ClassSpecification.EeoId"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": true,
                    "label": "Accept Job Interest Cards",
                    "lookupType": 0,
                    "propertyName": "Position.ClassSpecification.AcceptJobInterestCard"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": true,
                    "label": "Salary Paid",
                    "lookupType": 9,
                    "propertyName": "Position.ClassSpecification.SalaryPaidId"
                  },
                  {
                    "autoCompleteOperationType": null,
                    "autoCompletePlaceholder": null,
                    "childEntityMappingInfo": null,
                    "isIdentifier": false,
                    "isRequired": true,
                    "label": "Billable Hours",
                    "lookupType": 10,
                    "propertyName": "Position.ClassSpecification.BillableHoursId"
                  }
                ]
              },
              "isIdentifier": false,
              "isRequired": false,
              "label": "Class Specification",
              "lookupType": 0,
              "propertyName": "Position.ClassSpecification"
            }
          ]
        },
        "isIdentifier": false,
        "isRequired": false,
        "label": "Position",
        "lookupType": 0,
        "propertyName": "Position"
      }
    ]
  };

  return ngFx;
})();


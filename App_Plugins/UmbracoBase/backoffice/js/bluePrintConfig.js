// Removes option for adding Blank content template
// For more info: https://24days.in/umbraco-cms/2017/building-from-blueprints/
angular.module("umbraco").value("blueprintConfig", {
    skipSelect: true,
    allowBlank: false
});
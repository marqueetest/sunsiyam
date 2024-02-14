function nestedContentElements(authResource) {

    return {
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
            // check if current user is an admin
            authResource.getCurrentUser().then(function (user) {
                var isAdmin = (user.userGroups.indexOf('admin') >= 0);

                if (isAdmin) {
                    // show all nested content controls
                    $(elem).removeClass('nested-content-elements--non-admin');
                    var umbNestedContentButton = $(elem).find('> nested-content-property-editor > .umb-nested-content > ng-form > .umb-nested-content__footer-bar > .umb-nested-content__add-content > localize');
                    umbNestedContentButton.text("Add modules");
                }
                else {
                    // disable sorting of nested content elements
                    var umbNestedContent = $(elem).find('> nested-content-property-editor > .umb-nested-content');
                    var umbNestedContentScope = angular.element(umbNestedContent).scope();

                    umbNestedContentScope.vm.sortableOptions.disabled = true;
                }
            });
        }
    };

}

angular.module('umbraco.directives').directive('nestedContentElements', ['authResource', nestedContentElements]);

﻿(function () {
    'use strict';

    function submittedController($scope, $rootScope,
        xliffFileUploadService,
        notificationsService) {

        var vm = this;
        vm.job = $scope.vm.job;
        vm.properties = angular.fromJson(vm.job.ProviderProperties);

        vm.uploadFile = uploadFile;
        vm.fileSelected = fileSelected;
        vm.getFilePath = getFilePath;

        vm.uploadError = false;
        vm.uploading = false;
        vm.buttonState = 'init';
        vm.file = undefined;
        vm.files = [];

        $scope.$on('filesSelected', function (event, data) {

            if (data.files.length > 0) {
                vm.file = data.files[0];
            }
        });

        vm.location = getMediaUrl(vm.properties);

        ///////////////////

        function fileSelected(files) {
            vm.file = files;
        }

        function getMediaUrl(properties) {

            if (properties.fileUrl !== undefined)
                return properties.fileUrl;

            return properties.fileLocation;

        }

        function uploadFile() {

            if (vm.uploading) return;
            if (vm.file === undefined) return;

            vm.uploading = true;
            vm.uploadError = false;
            vm.buttonState = 'busy';

            xliffFileUploadService.upload(vm.file, vm.job.Id)
                .then(function (data) {
                    vm.buttonState = 'success';
                    vm.uploading = false;
                    $rootScope.$broadcast('translate-job-reloaded');
                })
                .catch(function (error) {
                    vm.uploading = false;
                    vm.buttonState = 'error';
                    vm.uploadError = true;
                    vm.errorMessage = error.data.ExceptionMessage;
                    notificationsService.error('error', 'Upload Failed ' + error.data.ExceptionMessage);
                });
        }

        function getFilePath(fileName) {
            return fileName.substr(fileName.lastIndexOf('/') + 1);
        }

    }

    angular.module('umbraco')
        .controller('xliffSubmittedController', submittedController);

})();
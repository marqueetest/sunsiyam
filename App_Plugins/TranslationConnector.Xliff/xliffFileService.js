(function () {
    'use strict';

    function fileService($http, Upload) {

        var service = {
            upload: uploadFileToServer,
            getMediaUrl : getMediaUrl
        };

        return service;


        function uploadFileToServer(file, jobId) {

            return Upload.upload({
                url: 'backoffice/translationManager/XliffConnectorFileApi/uploadFile',
                fields: {
                    'jobId': jobId
                },
                file: file
            });
        }

        function getMediaUrl(path) {
            return $http.get('backoffice/translationManager/XliffConnectorFileApi/GetMediaUrl?url=' + path);
        }
    }

    angular.module('umbraco.resources')
        .factory('xliffFileUploadService', fileService);
})();
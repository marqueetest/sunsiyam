$(document).ready(function () {
    window.setInterval(function () {
        var uiHasLoaded = $("span.section__name:contains('Content')").length > 0;
        if (uiHasLoaded) {
            $("#contentcolumn div.umb-dashboard__header > umb-tabs-nav > ul > li > a:contains('Redirect URL Management')").text("Automatic redirects");
            $("#contentcolumn div.umb-dashboard__header > umb-tabs-nav > ul > li > a:contains('Redirects')").text("Manual redirects");
            clearInterval();
        }
    }, 200);
});
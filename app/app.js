$(document).ready(function () {
    /**
     * App HTML
     *
     * @type {string}
     */
    var htm = '';
    htm += "<div class='container'>";

    // Page title
    htm += "<div class='page-header'>";
    htm += "<h1 id='page-title'>Employees</h1>";
    htm += "</div>";

    // Content
    htm += "<div id='content'></div>";
    htm += "</div>";

    $('#employees').html(htm);
});

/**
 * Change page title depending on the action
 *
 * @param page_title
 */
function changePageTitle(page_title) {
    $('#page-title').text(page_title);
    document.title = page_title;
}

/**
 * Make form values to json format
 *
 * @returns {{}}
 */
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
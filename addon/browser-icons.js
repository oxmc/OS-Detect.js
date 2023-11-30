if (typeof osd != null && typeof osd === 'object') {
    osd.bi = function(browser, size = "") {
        if (size != "") {
            size = `-${size}`;
        }
        return `<i class="browi ${browser.toLowerCase()}${size}"></i>`;
    }
}
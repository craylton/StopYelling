const toSentenceCase = title => title
    .toLowerCase()
    .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c) {
        return c.toUpperCase()
    });

const isObnoxious = title => {
    const visiblePart = title.slice(0,20);
    const numChars = visiblePart.length;
    const numUpper = (visiblePart.match(/[A-Z]/g) || []).length;
    return numUpper / numChars > 0.3;
}

const updateTitles = () => {
    const titleElements = document.querySelectorAll('.ilJsSZ, .hjONlz');
    for (const titleElement of titleElements) {
        const title = titleElement.title;
        if (isObnoxious(title)) {
            titleElement.textContent = toSentenceCase(title);
        }
    }
};

setInterval(updateTitles, 1000);
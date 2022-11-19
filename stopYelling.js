const toSentenceCase = title => title
    .toLowerCase()
    .replace(
        /(^\s*\w|[\.\!\?]\s*\w)/g,
        c => c.toUpperCase()
    );

const isObnoxious = title => {
    const visiblePart = title.slice(0,20);
    const numChars = visiblePart.length;
    const numUpper = (visiblePart.match(/[A-Z]/g) || []).length;
    return numUpper / numChars > 0.3;
};

const updateTitles = (selector, textGetterCallback, textSetterCallback) => {
    const titleElements = document.querySelectorAll(selector);

    for (const titleElement of titleElements) {
        let title = textGetterCallback(titleElement);

        if (isObnoxious(title)) {
            title = toSentenceCase(title);
            textSetterCallback(titleElement, title);
        }
    }
};
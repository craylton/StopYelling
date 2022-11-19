const thumbnailSelector = 'a#video-title';
const recommendedVideoSelector = 'span#video-title';
const belowVideoSelector = '#super-title + h1 yt-formatted-string';

const updateYoutubeTitles = () => {
    const titleElements = document.querySelectorAll(thumbnailSelector);
    for (const titleElement of titleElements) {
        const title = titleElement.text;
        if (isObnoxious(title)) {
            titleElement.text = toSentenceCase(title);
        }
    }
};

const updateRecommendedYoutubeTitles = () => {
    const titleElements = document.querySelectorAll(recommendedVideoSelector);
    for (const titleElement of titleElements) {
        const title = titleElement.title;
        if (isObnoxious(title)) {
            titleElement.textContent = toSentenceCase(title);
        }
    }
};

const updateYoutubeBelowVideoTitle = () => {
    const titleElements = document.querySelectorAll(belowVideoSelector);
    for (const titleElement of titleElements) {
        const title = titleElement.innerHTML;
        if (isObnoxious(title)) {
            titleElement.innerHTML = toSentenceCase(title);
        }
    }
};

setInterval(updateYoutubeTitles, 1000);
setInterval(updateRecommendedYoutubeTitles, 1000);
setInterval(updateYoutubeBelowVideoTitle, 1000);
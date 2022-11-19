const followingSelector = 'article > div > div > div > div > a > h3';
const recommendedSelector = 'article > div > div > div > div > a > div > button > h3';
const continueWatchingSelector = 'article > div > div > div > div > div > a > h3';
const belowStreamSelector = '#live-channel-stream-information > div > div > div > div > div > div > div > div > div > h2';
const allTitlesSelector = `${followingSelector}, ${recommendedSelector}, ${continueWatchingSelector}, ${belowStreamSelector}`;

const updateTwitchTitles = () => {
    const titleElements = document.querySelectorAll(allTitlesSelector);
    for (const titleElement of titleElements) {
        const title = titleElement.title;
        if (isObnoxious(title)) {
            titleElement.textContent = toSentenceCase(title);
        }
    }
};

setInterval(updateTwitchTitles, 1000);
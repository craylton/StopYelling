const followingSelector = 'article > div > div > div > div > a > h3';
const recommendedSelector = 'article > div > div > div > div > a > div > button > h3';
const continueWatchingSelector = 'article > div > div > div > div > div > a > h3';
const belowStreamSelector = '#live-channel-stream-information > div > div > div > div > div > div > div > div > div > h2';
const allTitlesSelector = `${followingSelector}, ${recommendedSelector}, ${continueWatchingSelector}, ${belowStreamSelector}`;

const updateTwitchTitles = () =>
    updateTitles(
        allTitlesSelector,
        element => element.title,
        (element, newTitle) => element.textContent = newTitle);

setInterval(updateTwitchTitles, 1000);
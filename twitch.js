const followingTitleSelectorV1 = 'article > div > div > div > div > a > h3';
const followingTitleSelectorV2 = 'article div div div a h4';
const recommendedSelector = 'article > div > div > div > div > a > div > button > h3';
const continueWatchingSelector = 'article > div > div > div > div > div > a > h3';
const belowStreamSelectorV1 = '#live-channel-stream-information > div > div > div > div > div > div > div > div > div > h2';
const belowStreamSelectorV2 = '#live-channel-stream-information > div > div > div > div > div > div > div > div > p';
const allTitlesSelector = [
    followingTitleSelectorV1,
    followingTitleSelectorV2,
    recommendedSelector,
    continueWatchingSelector,
    belowStreamSelectorV1,
    belowStreamSelectorV2
].join(', ');

const updateTwitchTitles = () =>
    updateTitles(
        allTitlesSelector,
        element => element.textContent,
        (element, newTitle) => element.textContent = newTitle);

setInterval(updateTwitchTitles, 1000);
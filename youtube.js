const thumbnailAndRecommendedVideoSelector = '#video-title';
const belowVideoSelector = '#above-the-fold #title h1 yt-formatted-string';

const updateThumbnailAndRecommendedVideoTitles = () =>
    updateTitles(
        thumbnailAndRecommendedVideoSelector,
        element => element.textContent,
        (element, newTitle) => element.textContent = newTitle);

const updateYoutubeBelowVideoTitle = () =>
    updateTitles(
        belowVideoSelector,
        element => element.textContent,
        (element, newTitle) => element.textContent = newTitle);

function updateAllYoutubeTitles() {
    updateThumbnailAndRecommendedVideoTitles();
    updateYoutubeBelowVideoTitle();
}

ensureBody(() => {
    observeDom(updateAllYoutubeTitles);
});
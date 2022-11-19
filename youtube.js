const thumbnailSelector = 'a#video-title';
const recommendedVideoSelector = 'span#video-title';
const belowVideoSelector = '#super-title + h1 yt-formatted-string';

const updateYoutubeTitles = () =>
    updateTitles(
        thumbnailSelector,
        element => element.text,
        (element, newTitle) => element.text = newTitle);

const updateRecommendedYoutubeTitles = () =>
    updateTitles(
        recommendedVideoSelector,
        element => element.title,
        (element, newTitle) => element.textContent = newTitle);

const updateYoutubeBelowVideoTitle = () =>
    updateTitles(
        belowVideoSelector,
        element => element.textContent,
        (element, newTitle) => element.textContent = newTitle);

setInterval(updateYoutubeTitles, 1000);
setInterval(updateRecommendedYoutubeTitles, 1000);
setInterval(updateYoutubeBelowVideoTitle, 1000);
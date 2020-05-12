require('dotenv/config');
const axios = require('axios');
const { writeFileSync } = require('fs');

const { YOUTUBE_RECENT_URL } = process.env;
console.log(YOUTUBE_RECENT_URL);
axios
        .get(YOUTUBE_RECENT_URL, {
                headers: {
                        Accept: 'application/json',
                },
        })
        .then(({ data }) =>
                writeFileSync(
                        __dirname + '/static/youtube-recent.json',
                        JSON.stringify(
                                data.items.map(
                                        ({
                                                contentDetails,
                                                snippet: { publishedAt, title, thumbnails },
                                        }) => ({
                                                videoId: contentDetails.videoId,
                                                url: `https://www.youtube.com/watch?v=${contentDetails.videoId}`,
                                                title: title.replace('&#39;', "'"),
                                                thumbnail: thumbnails.medium,
                                                date: publishedAt,
                                        })
                                )
                        )
                )
        );
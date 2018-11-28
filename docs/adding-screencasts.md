# Adding Screencasts

## Encode and upload video
* In Miro Video Encoder, encode video to two formats: MP4 and WebM SD
* Upload encoded videos to buildkite-site-screencasts S3 bucket

# Generate poster frame
* Export frame as PNG to assets/images/screencasts/frame-exports
* Run ./scripts/generate-screencast-images

## Add to _data.js
* Add a new entry to pages/screencasts/_data.js
* Add a new page to pages/screencasts/
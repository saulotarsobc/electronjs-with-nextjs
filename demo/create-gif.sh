#! bash
ffmpeg -i demo-video.mp4 -vf "fps=30,scale=1080:-1:flags=lanczos" -c:v gif demo.gi
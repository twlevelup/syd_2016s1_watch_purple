docker run -it --rm --name twlevelup_watch -p 9001:9001 -p 8080:8080 -v "$PWD":/usr/src/app twlevelup/watch_edition npm start
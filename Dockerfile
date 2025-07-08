FROM ubuntu:latest
LABEL authors="tom"

ENTRYPOINT ["top", "-b"]
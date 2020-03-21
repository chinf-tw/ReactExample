FROM golang
LABEL maintainer="CHINF chinf1996@gmail.com"
WORKDIR /go/src/
COPY ["./dist", "./dist"]
COPY ["./main.go","./go.sum","./go.mod","./"]

CMD ["go","run","main.go"]
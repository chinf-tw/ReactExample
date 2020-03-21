package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.LoadHTMLFiles("./dist/*")
	// r.GET("/", func(c *gin.Context) {
	// 	c.HTML(200, "index.html", nil)
	// })
	r.StaticFile("/", "./dist/index.html")
	r.StaticFile("/bundle.js", "./dist/bundle.js")
	r.Run() // listen and serve on 0.0.0.0:8080
}

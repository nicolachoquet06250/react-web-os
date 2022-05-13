package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/websocket"
)

type environement struct {
	PORT string
	IP string
}

func GetEnv() environement {
	return environement{
		PORT: os.Getenv("PORT"),
		IP: os.Getenv("IP"),
	}
}

var upgrader = websocket.Upgrader{
    ReadBufferSize:  1024,
    WriteBufferSize: 1024,
}

func wsEndpoint(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)

	if err != nil {
		println("ERROR : " + err.Error())
		return
	}

	for {
		msgType, msg, err := conn.ReadMessage()
		if err != nil {
			println("ERROR : " + err.Error())
			return
		}

		fmt.Printf("%s sent : %s\n", conn.RemoteAddr(), string(msg))

		if err = conn.WriteMessage(msgType, msg); err != nil {
			println("ERROR : " + err.Error())
			return
		}
	}
}

func main()  {
	var env = GetEnv()

	http.HandleFunc("/", wsEndpoint)
	log.Fatal(http.ListenAndServe(env.IP + ":" + env.PORT, nil))
}
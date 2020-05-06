package main

import (
	"fmt"
)

// sample(iota)
const (
	sunday = iota
	monday
	tuesday
	wednesday
	thursday
	friday
	saturday
)

// end-sample

func main() {

	fmt.Println(sunday)
	fmt.Println(monday)

}

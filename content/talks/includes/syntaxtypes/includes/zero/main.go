package main

import "fmt"

func main() {
	// sample(zero)
	var a int
	var b string
	var c float64
	var d bool
	// end-sample

	// sample(output)
	fmt.Printf("var a int \t %T [%v]\n", a, a)
	fmt.Printf("var b string \t %T [%v]\n", b, b)
	fmt.Printf("var c float64 \t %T [%v]\n", c, c)
	fmt.Printf("var d bool \t %T [%v]\n\n", d, d)
	// end-sample

}

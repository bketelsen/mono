package main

import "fmt"

// sample(struct)
type example struct {
	flag    bool
	counter int16
	pi      float32
}

// end-sample

func main() {
	// Declare a variable of type example set to its
	// zero value.

	// sample(zero)
	var e1 example
	// end-sample

	// Display the value.
	fmt.Printf("%+v\n", e1)

	// Declare a variable of type example and init using
	// a struct literal.

	// sample(literal)
	e2 := example{
		flag:    true,
		counter: 10,
		pi:      3.141592,
	}
	// end-sample

	// Display the field values.
	fmt.Println("Flag", e2.flag)
	fmt.Println("Counter", e2.counter)
	fmt.Println("Pi", e2.pi)
}

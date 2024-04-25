
function* generatorFunction() {
    return "hello world"
}

// Assign the Generator object to generator
const generator = generatorFunction();

// Call the next method on the Generator object
console.log(generator.next());; //Output: {value: "Hello, World!", done: true}

//The value returned from calling next() is Hello, World!, and the state of done is true. Because this value came from a return that closed out the iterator.

//Generators introduced a new keyword called yield. A yield can pause a generator function & return a value. Here is an example first:
// A generator function with multiple yields and a return a value.

// Yield will return a value and pause the execeution untill the next next() method is called
function* generatorFunction1() {
    yield 'Value 1'
    console.log('This line is getting executed')
    yield 'Value 2'
    console.log('This line is getting executed')
    yield 'Value 3'
    return 'Value 4'
}

const generator1 = generatorFunction1()

// Call next four times
console.log(generator1.next()) // {value: "Value 1", done: false}
console.log('Checking if the next log is printing')
console.log(generator1.next()) // {value: "Value 2", done: false}
console.log(generator1.next()) // {value: "Value 3", done: false}
console.log(generator1.next()) // {value: "Value 4", done: true}

//The return is not a mandatory thing for a generator function. 
//If you don’t write it then the done the value will remain false for 4 iterations and then it’ll be true on the fifth iteration 
//i.e. {value: undefined, done: true}.

function* generatorFunction2() {
    yield 'Value 1'

    yield 'Value 2'
    yield 'Value 3'
    yield 'Value 4'
}
const generator2 = generatorFunction2()
for (const value of generator2) {
    console.log(value)
}



console.log("***********************************************")

// Create a generator function
function* fibonacci() {
    let prev = 0;
    let next = 1;

    yield prev
    yield next

    // Add previous and next values and yield them forever
    while (true) {
        const newVal = next + prev
        yield newVal
        console.log('Generating Next value')
        prev = next
        next = newVal
    }
}

const fibGenerator = fibonacci()

// Print first five fib
for (let i = 0; i < 5; i++) {
    console.log(fibGenerator.next())
}
console.log("===========")
//Print the next 5
for (let i = 0; i < 5; i++) {
    console.log(fibGenerator.next())
}

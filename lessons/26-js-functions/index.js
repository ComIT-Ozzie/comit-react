function showEvenNumbers(max) {
    for (let i = 0; i <= max; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        }
    }
}

showEvenNumbers(50);

function showUser(name, age, phoneNumber, street, postalCode, married) {
    console.log("Name", name);
    console.log("Age", age);
    console.log("Phone number", phoneNumber);
    console.log("Street", street);
    console.log("Postal Code", postalCode);
    console.log("Married", married);
}

showUser("Ozzie", 22, 12345678, "123 Fake st", "S7x1j2", false);

const showEvenNumbers2 = function() {
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

showEvenNumbers2();
showEvenNumbers2();
showEvenNumbers2();
showEvenNumbers2();
showEvenNumbers2();

function fibonacci(max) {
    let previous = 0;
    console.log(previous);
    
    let current = 1;
    console.log(current);
    
    let next = previous + current;
    
    for (let i = 0; i < max; i++) {
        console.log(next);
        previous = current;
        current = next;
        next = previous + current;
    }
}

fibonacci(20); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const showName = function() {
    console.log("===========");
    console.log("=  Ozzie  =");
    console.log("===========");
}

showName();
showName();

// function curring notes
// this differnce bitween simple funstion and funtion curring is 
// we pass more than one arguments when we call function like this func(1)(1)(1);
// simple function callback is like this func(1);

// how to tackel functions curring
// by returning next arugument in function n1,n2,n3 and so on
function sum(n1){
    return (n2) => { 
        return (n3) =>{
            t = n1 + n2 + n3
            console.log(t);
        }
    }
}
// that how we solve function curring in one line with fat arrow functionalaty
const sumfatarrow = (n1) => (n2) => (n3) => console.log(n1+n2+n3);

sum(2)(4)(4); //with help function get sum 2+4+4 = 10 otherwise it will throw error
sumfatarrow(2)(4)(4); ////with help of fat arrowfunction get sum 2+4+4 = 10 otherwise throws error
// function* test(number) {
//     yield number
//     yield number + 12
//     yield number + 20
//     return
//     yield "takelatest"
// }
// let t = test(10)
// console.log(test(10).next());
// console.log(t);
// for (const task of t) {
//     console.log(task);
// }
// console.log(t.next());
// console.log(t.next());
// console.log(t.next());
// console.log(t.next());

//------------------------------
// function* count() {
//     yield 2
//     yield 3
//     yield 4
//     yield 5
//     yield 6
//     yield 7
// }
// let a = count()
// for (const element of a) {
//     console.log(element);
// }

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function* makeMyiteratorNew(start,end){
    for (let i = start; i <= end; i++) {
      yield i        
    }
}
const one=makeMyiteratorNew(1,30)
for (const element of one) {
    console.log(element);   
    
}

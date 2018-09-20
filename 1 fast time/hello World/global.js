console.log(__dirname);
console.log(__filename);

setTimeout( function hello() {
    console.log("Wait");
}, 2000);

(function run_me(){
    console.log("I am Running ");
})();

function run_me(){
    console.log("i am not running");
}

console.log("Hello Bangladesh");
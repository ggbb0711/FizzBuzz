
function FizzBuzz(){
    let INPUT=parseInt(document.getElementById("user-input").value);
    console.log('It\' working');
    let result='';
    let FizzBuzz_counter=0;
    let Fizz_counter=0;
    let Buzz_counter=0;
    document.getElementById("Fizz_conter").innerText="";
    document.getElementById("Buzz_counter").innerText="";
    document.getElementById("FizzBuzz_conter").innerText="";
    if(INPUT<=0 || INPUT>100){
        document.getElementById("result").innerText='Please enter a positive number from 1 to 100'
        console.log(-1)
        return
    }
    for(var i=1;i<=INPUT;i++){
        if(i%3===0 && i%5===0){
            result+='FizzBuzz ';
            FizzBuzz_counter++;
        }
        else if(i%3===0){
            result+='Fizz ';
            Fizz_counter++;
        }
        else if (i%5===0){
            result+='Buzz ';
            Buzz_counter++;
        }
        else{
            result+=i+' '
        }
    }
    document.getElementById("result").innerText=result;
    document.getElementById("Fizz_conter").innerText="Number of Fizz: "+Fizz_counter;
    document.getElementById("Buzz_counter").innerText="Number of Buzz: "+Buzz_counter;
    document.getElementById("FizzBuzz_conter").innerText="Number of FizzBuzz: "+FizzBuzz_counter;
}
FizzBuzz(-5)
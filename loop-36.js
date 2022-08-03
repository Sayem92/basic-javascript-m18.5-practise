var numbers =[100, 300, 150, 80, 70, 500, 250, 120, 90, 30, 201]

for( var i = 0; i <numbers.length; i++){
    var number = numbers[i];
    if(number >= 200){
        continue;
    }
   
    console.log(number);
}
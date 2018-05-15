/*Tax Application to display the tax amount in kobo
*when given the amount in naira and the tax percentage
*/

function taxes(amount, percentage){
    //To check if the given parameters are integers
    if(typeof(amount) == "number" && typeof(percentage) == "number"){
        amount *= 100;//To convert the amount from naira to kobo
        output = amount *(percentage/100);//To calculate the tax amount
        output =[output];
        console.log(output + " kobo");
    }
    else{
        console.log("The two values has to be integers");
    }
}
taxes(160, 25);  //displays 4000 kobo
taxes("are", 10); //displays The two values has to be integers

// Grade Calculator
function gradeGenarator (number){
    switch (true){
        case (number>=80&&number<=100):
            console.log("You obtained A+");
        
        break;
        case (number>=70&&number<=79):
            console.log("You obtained A");
        break;
        case (number>=60&&number<=69):
            console.log("You obtained A-");
        break;
        case (number>=50&&number<=59):
            console.log("You obtained B");
        break;
        case (number>=40&&number<=49):
            console.log("You obtained C");
        break;
        case (number>=33&&number<=39):
            console.log("You obtained D");
            break;
       default:
            console.log("You obtained F");
    }
}

gradeGenarator(80);


//Sean Bowry
module.exports = class MathTest{
    makeAMove(sInput, fCallback){

        //CONSTANTS
        const OPERATORS = ['+','-','/','*'];
        //the end condition is defined as the number of questions + 1
        const ENDCONDITION = 11;
        const PASSINGGRADE = 0.5;


        //VARIABLES
        let sReturn= ""; 
        let operator = Math.ceil((Math.random() * 4)-1);
        let first = Math.ceil(Math.random() * this.firstRange);
        let second = 0;
        //removes the possibility of a 0 divisor
        while (second == 0){
            second = Math.ceil(Math.random() * this.secondRange);
        }

        if(!this.attempts){
            this.attempts = 1; 
            this.correct = 0;  
            sReturn += "Welcome to your math test\n"+
            "A passing grade is 50%\n" +
            "There are 10 questions\n" +
            "(Hint: no remainders, just the quotient)\n" +
            "Please enter a difficulty level from 1 to 15" +
            "Good Luck!\n";
            switch(sInput){
                case 1:
                    this.firstRange = 5;
                    this.secondRange = 10;
                    break;
                case 2:
                    this.firstRange = 10;
                    this.secondRange = 10;     
                    break;
                case 3:
                    this.firstRange = 20;
                    this.secondRange = 10;
                    break;
                case 4:
                    this.firstRange = 20;
                    this.secondRange = 20;
                    break;
                case 5:
                    this.firstRange = 30;
                    this.secondRange = 20;
                    break;
                case 6:
                    this.firstRange = 30;
                    this.secondRange = 30;
                    break;
                case 7:
                    this.firstRange = 40;
                    this.secondRange = 30;
                    break;
                case 8:
                    this.firstRange = 40;
                    this.secondRange = 40;
                    break;
                case 9:
                    this.firstRange = 50;
                    this.secondRange = 50;
                    break;
                case 10:
                    this.firstRange = 60;
                    this.secondRange = 60;
                    break;
                case 11:
                    this.firstRange = 70;
                    this.secondRange = 70;
                    break;
                case 12:
                    this.firstRange = 80;
                    this.secondRange = 80;
                    break;
                case 13:
                    this.firstRange = 90;
                    this.secondRange = 90;
                     break;
                case 14:
                    this.firstRange = 100;
                    this.secondRange = 100;
                    break;
                case 15:
                    this.firstRange = 500;
                    this.secondRange = 500;
                    break;
            }
        }
        else {
            if(sInput == this.answer){            
                sReturn += "good job you're correct\n";
                this.correct++;
            }
            else{
                sReturn += "I'm sorry but that is incorrect\n";
                sReturn += "The correct answer was " + this.answer + "\n"; 
            }
        }
        //end condition
        if (this.attempts == ENDCONDITION){
            
            if(this.correct/(ENDCONDITION-1)>= PASSINGGRADE){
                sReturn += "Well Done! you passed! with a score of \n" + 
                    this.correct + "/" + (ENDCONDITION - 1);        
            }
            else {
                sReturn += "Unfortunately you failed with a score of \n" + 
                this.correct + "/" + (ENDCONDITION - 1); 
            }
            this.attempts = false;
        }
        else{
            //Finds the answer to randomly generated question
            switch(operator){
                case 0:
                    this.answer = first + second;
                    break;
                case 1:
                    this.answer = first - second;
                    break;
                case 2:
                    this.answer = Math.floor(first / second);
                    break;
                case 3:
                    this.answer = first * second;
                    break;
            }

            //asks Questions
            if(!this.attempts){
            sReturn += "question " + this.attempts + "\n";  
            sReturn += first + ' ' + OPERATORS[operator] + ' ' + second;
            this.attempts++;
            }
        }
        setTimeout(() => { 
            fCallback([sReturn]); 
        }, 1000);
    }
}
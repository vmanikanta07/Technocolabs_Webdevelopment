class School{
    constructor(name,level,numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name(){
        return this._name;
    }

    get level(){
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudents;
    }
    quickFacts(){
        console.log(this._name + " educates "+this._numberOfStudents+" students at the "+this._level+" school level.");
    }

    static pickSubstituteTeacher(substituteTeachers){
        var y = Math.floor(Math.random()*substituteTeachers.length);
        return substituteTeachers[y];
    }

    set numberOfStudents(x){
        if(Number.isNaN(x)){
            console.log("Invalid input: numberOfStudents must be set to a Number.");
        }else{
            this.numberOfStudents = x;
        }
    }

    
}

class Primary extends School{
    constructor(name,numberOfStudents,pickUpPolicy){
        super(name,"Primary",numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }
    get pickUpPolicy(){
        return this.pickUpPolicy();
    }
}
class Middle extends School{
}

class High extends School{
    constructor(name,numberOfStudents,sportsTeams){
        super(name,"High",numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    x = 0;
    get sportsteams(){
        console.log(this._sportsTeams);
    }
}


const lorraineHansbury = new Primary('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

const pick = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(pick);

const alSmith = new High('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsteams;
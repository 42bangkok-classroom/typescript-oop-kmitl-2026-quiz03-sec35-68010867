export class Student {
    firstname? : string ;
    lastname? : string ;
    fullname? : string ;

    printName() {
        console.log(`${this.firstname} ${this.lastname}`);
    }

}

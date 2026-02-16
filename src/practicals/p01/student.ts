export class Student {
    firstname? : string ;
    lastname? : string ;

    printName(): void{
        console.log(this.firstname); console.log(this.lastname);
    }

}

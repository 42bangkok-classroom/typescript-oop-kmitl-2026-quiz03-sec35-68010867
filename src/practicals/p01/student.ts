export class Student {
    firstname? : string ;
    lastname? : string ;
    fullname? : string ;

    printName(): void{
        console.log(this.firstname+" "+this.lastname); 
    }

}

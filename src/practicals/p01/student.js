"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.printName = function () {
        console.log(this.firstname, this.lastname);
    };
    return Student;
}());
exports.Student = Student;

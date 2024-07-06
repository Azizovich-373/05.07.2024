import { students } from "./lib/db.js";
import { reload } from "./lib/utils.js";
import { Student } from "./components/Student.js";
const main = document.querySelector('.place')
const form = document.forms.namedItem('add_new')

form.onsubmit = (e) => {
    e.preventDefault();
    
    const student = {
        number: students.length,
        name: new FormData(form).get('name'),
        age: new FormData(form).get('age'), 
    }
    console.log(student);
    if(student.name.length !== 0 && student.age >= 18 ) {
        students.push(student)
        reload(students, main, Student)
        return  
    } 

    alert('Напишите имя или вам еще нет 18!')
}

import {StudentType} from "../02-object/02-object";
import {addSkill} from "./03-function";

let student: StudentType;
beforeEach(() =>{
    student = {
        id: 1,
        name: 'Victor',
        age: 32,
        isActive: false,
        address: {
            streetTitle: 'Surganova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus',
            }
        },
        technologies:[
            {
                id: 1,
                title: 'HTML',
            },
            {
                id: 2,
                title: 'CSS',
            },
            {
                id: 3,
                title: 'REACT',
            },
        ]
    }
})


test('new tech skill should be added to student', ()=>{
    expect(student.technologies.length).toBe(3);

   addSkill(student, 'JS');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})
import {addSkill, doesStudentLiveIn, makeStudentActive} from './03-function';
import {StudentType} from '../02-object/02-object';

let student: StudentType;

beforeEach(() => {
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
        technologies: [
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


test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, 'JS');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})

test('student in country', () => {
    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Minsk')

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})






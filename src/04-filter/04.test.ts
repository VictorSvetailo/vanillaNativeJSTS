import exp from 'constants';

test("should take old men older then 90", ()=> {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

// Courses

test("should take old men older then 90", ()=> {
    const courses = [
        {title: 'css', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150},
    ]

    const cheapPredicate = (course: CoursesType) => course.price < 160;

    const cheapCourses = courses.filter(cheapPredicate)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].price).toBe(110)
    expect(cheapCourses[1].price).toBe(150)
})




// test.skip("should take courses chiper 160", ()=> {
//     const courses = [
//         {title: 'css', price: 110},
//         {title: 'JS', price: 200},
//         {title: 'React', price: 150},
//     ]
//
//     const cheapPredicate = (courses: CoursesType) => {
//         return courses.price < 160;
//     }
//
//     const cheapCourses = courses.filter(courses => courses.price < 160);
//
//     expect(cheapCourses.length).toBe(2)
//     expect(cheapCourses[0].title).toBe('css')
//     expect(cheapCourses[1].title).toBe('React')
// })

// Tasks
test("get only completed tasks", ()=> {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: true},
        {id: 4, title: 'Sugar', isDone: false},
    ];

    const complitedTasks = tasks.filter((task => task.isDone))

    expect(complitedTasks.length).toBe(2)
    expect(complitedTasks[0].title).toBe('Milk')
    expect(complitedTasks[1].title).toBe('Salt')

})

const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100];

type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: 'css', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150},
]

const cheapPredicate = (courses: CoursesType) => {
    return courses.price < 160;

}

const cheapCourses = [
    {title: 'css', price: 110},
    {title: 'React', price: 150},
];

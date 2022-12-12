export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}


export  type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}


export function makeHairStyle(user: UserType, power: number) {
    return {...user, hair: user.hair / power}
}

export const moveUser = (user: UserWithLaptopType, value: string) => {
    return {...user, address: {...user.address, city:  value}}
}


export function changeHouse(user: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...user, address: {...user.address, house:  house}}
}

export const addNewBooksToUser = (user: UserWithLaptopType & UserWithBooksType, newBook: string) => {
    return {...user, books: [...user.books, newBook]}
}


export const updateBooks = (user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
    return {...user, books: [...user.books.map(b => b === oldBook ? newBook : b)]}
}


export const removeBook = (user: UserWithLaptopType & UserWithBooksType, book: string) => {
    return {...user, books: [...user.books.filter(b => b !== book)]}
}


export function updateCompanyTitle(user: WithCompaniesType, companyID: number, newTitle: string) {
    return {...user, companies: [...user.companies.map(c => c.id === companyID ?
            {...c, title: newTitle} : c)]}
}

export function updateCompanyTitle2(companies: { [key: string]: Array<CompanyType> },
                                    userName: string, companyID: number, newTitle: string,) {
    return {...companies, [userName]: [...companies[userName].map(o => o.id === companyID ?
        {...o, title:  'dcdc'}: o) ]}
}


// export const moveLaptop = (user: UserWithLaptopType, lap: string) =>{
//     let copyUser = {...user}
//     let copyLap = {copyUser, laptop: {...copyUser.address, title: lap}}
//     return {copyLap}
// }


// export function upgradeBooks(u: UserWithLaptopType, newLap: string) {
//
// }



    // const copy = {
    //    ...u,
    //     books: [ ...u.books]
    // }
    //
    //
    // copy.books.push(newBook)
    // return copy


// массив примитивов

// длинная запись
//     const copy = {
//         ...u,
//         books: u.books.map(b => {
//             if (b === oldBook) {
//                 return newBook
//             } else {
//                 return b
//             }
//
//         })
//     }
//     return copy




//
// export function updateCompanyTitle(user: WithCompaniesType, companyID: number, newTitle: string) {
//
//
//     // полная запись
//     // const copy: WithCompaniesType = {
//     //     ...user,
//     //     companies: user.companies.map(c => {
//     //         if (c.id === companyID){
//     //             return {...c, title: newTitle};
//     //         }else {
//     //             return c
//     //         }
//     //     })
//     //
//     // }
//
//     //тернарное выражение СЛОЖНО
//     const copy: WithCompaniesType = {
//         ...user,
//         companies: user.companies.map(c => c.id === companyID
//             ? {...c, title: newTitle}
//             : c)
//
//     }
//     return copy
// }
//
// export function updateCompanyTitle2(companies: { [key: string]: Array<CompanyType> }, userName: string, companyID: number, newTitle: string,) {
//
//     let companyCopy = {...companies}
//     companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID
//         ? {...c, title: newTitle} : c)
//
//
//     return companyCopy
// }

//
//
//
// export function moveUser(u: UserWithLaptopType, city: string) {
//     return {
//         ...u,
//         address: {
//             ...u.address,
//             city: city
//         }
//
//     }
// }
//
// export const updateBooks = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
//     return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
// }


// export function makeHairStyle(u: UserType, power: number) {
//     return {...u, hair: u.hair / power}
// }
//
// export const moveUser = (user: UserWithLaptopType, value: string) => {
//     return {...user, address: {...user.address, city: value}}
// }
//
//
// export function changeHouse(u: UserWithLaptopType & UserWithBooksType, houses: number) {
//     return {...u, address: {...u.address, house: houses}}
// }
//
// export const addNewBooksToUser = (user: UserWithLaptopType & UserWithBooksType, newBook: string) => {
//     return {...user, books: [...user.books, newBook]}
// }
//
//
// export const updateBooks = (user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
//     return {...user, books: user.books.map(b => b === oldBook ? newBook : b)}
// }
//
//
// export const removeBook = (user: UserWithLaptopType & UserWithBooksType, book: string) => {
//     return {...user, books: user.books.filter(b => b !== book)}
// }
//
//
// export function updateCompanyTitle(user: WithCompaniesType, companyID: number, newTitle: string) {
//     return {...user, companies: user.companies.map(c => c.id === companyID ? {...c, title: newTitle} : c)}
// }
//
// export function updateCompanyTitle2(companies: { [key: string]: Array<CompanyType> },
//                                     userName: string, companyID: number, newTitle: string,) {
//     return {...companies, [userName]: companies[userName].map(o => o.id === companyID ? {...o, title: newTitle}: o)}
// }

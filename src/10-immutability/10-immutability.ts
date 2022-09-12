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


export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }

    }
}


export function changeHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}


export function moveLaptop(u: UserWithLaptopType, newLap: string) {
    const copy = {
        ...u,
        }
    copy.address = {
        ...copy.address,
        city: newLap}
    return copy

}

export function upgradeBooks(u: UserWithLaptopType, newLap: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: newLap
        }
    }
}


export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {

    return {
        ...u,
        books: [...u.books, newBook]
    }

    // const copy = {
    //    ...u,
    //     books: [ ...u.books]
    // }
    //
    //
    // copy.books.push(newBook)
    // return copy
}

// массив примитивов
export const updateBooks = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) =>
    ({
        ...u, books: u.books.map(b => b === oldBook ? newBook : b)
    })
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

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, removeForBook: string) =>
    ({
        ...u,
        books: u.books.filter(b => b !== removeForBook)
    })


export function x(u: UserWithLaptopType & UserWithBooksType, newBook: string) {

    return {
        ...u,
        books: [...u.books, newBook]
    }

}

export function updateCompanyTitle(user: WithCompaniesType, companyID: number, newTitle: string) {


    // полная запись
    // const copy: WithCompaniesType = {
    //     ...user,
    //     companies: user.companies.map(c => {
    //         if (c.id === companyID){
    //             return {...c, title: newTitle};
    //         }else {
    //             return c
    //         }
    //     })
    //
    // }

    //тернарное выражение СЛОЖНО
    const copy: WithCompaniesType = {
        ...user,
        companies: user.companies.map(c => c.id === companyID
            ? {...c, title: newTitle}
            : c)

    }
    return copy
}

export function updateCompanyTitle2(companies: { [key: string]: Array<CompanyType> }, userName: string, companyID: number, newTitle: string,) {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID
        ? {...c, title: newTitle} : c)


    return companyCopy
}

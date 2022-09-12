import {
    addNewBooksToUser,
    changeHouse,
    makeHairStyle,
    moveLaptop,
    moveUser, removeBook, updateBooks, updateCompanyTitle, updateCompanyTitle2,
    upgradeBooks,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10-immutability'


test('reference type test', () => {
    let user: UserType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }
    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)


})

test('change address user', () => {
    let user: UserWithLaptopType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})


test.skip('change address user', () => {
    let user: UserWithLaptopType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedNewLaptop = moveLaptop(user, 'MacBook')
    expect(user).not.toBe(movedNewLaptop)
    //expect(user.address).toBe(movedNewLaptop.address)
    expect(user.laptop).not.toBe(movedNewLaptop.laptop)
    expect(movedNewLaptop.laptop.title).toBe('MacBook')
    expect(user.laptop.title).toBe('ZenBook')
})


test('upgrade books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [
            'css', 'html', 'react', 'js', 'ts'
        ]
    }

    const userCopy = changeHouse(user, 666)
    // const userCopy = upgradeBooks(user, 'MacBook')

    expect(user).not.toBe(userCopy)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(user.address.house).not.toBe(userCopy.address.house)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address.house).toBe(12)
    expect(userCopy.address.house).toBe(666)
    // expect(user.laptop.title).toBe('ZenBook')
})


test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [
            'css', 'html', 'react', 'js',
        ]
    }

    const userCopy = addNewBooksToUser(user, 'ts')
    // const userCopy = upgradeBooks(user, 'MacBook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    //expect(userCopy.books[4]).toBe('rest api')
    expect(userCopy.books[4]).toBe('ts')
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [
            'css', 'html', 'react', 'js',
        ]
    }

    const userCopy = updateBooks(user, 'js', 'ts')
    // const userCopy = upgradeBooks(user, 'MacBook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[3]).toBe('ts')
})


test('remove books js', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: [
            'css', 'html', 'react', 'js',
        ]
    }

    const userCopy = removeBook(user, 'js')
    // const userCopy = upgradeBooks(user, 'MacBook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})


test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')

})


// Ассоциативный массив
test('update company', () => {

    let companies = {
        'Dimych': [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Victor': [{id: 1, title: 'Hello World'}, {id: 2, title: 'KodKodych'}]
    }

    const copy = updateCompanyTitle2(companies, 'Dimych', 1, 'EPAM')


    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Victor']).toBe(companies['Victor'])
    expect(copy['Dimych'][0].title).toBe('EPAM')
    expect(companies['Dimych'][0].title).toBe('Epam')

})

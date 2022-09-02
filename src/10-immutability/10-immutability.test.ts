import {makeHairStyle, moveLaptop, moveUser, UserType, UserWithLaptopType} from './10-immutability'


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

    const movedNewLaptop = moveLaptop(user, 'MacBook')
    expect(user).not.toBe(movedNewLaptop)
     expect(user.address).toBe(movedNewLaptop.address)
    expect(user.laptop).not.toBe(movedNewLaptop.laptop)
    expect(movedNewLaptop.laptop.title).toBe('MacBook')
    expect(user.laptop.title).toBe('ZenBook')
})
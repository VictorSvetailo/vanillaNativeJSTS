function increaseAge(u: UserType) {
    u.age = u.age + 1;
}

type UserType = {
    name: string
    age: number
}

type UserType2 = {
    name: string
    age: number
    address: {title: string}
}

test.skip('reference type test', () => {
    var user: UserType = {
        name: 'Victor',
        age: 25,
    }
    increaseAge(user)
    expect(user.age).toBe(26)


    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})


test.skip('array test', () => {
    var users = [
        {
            name: 'Victor',
            age: 25
        },
        {
            name: 'Dimych',
            age: 35
        },
    ]

    var admins = users
    admins.push({name: 'Goga', age: 94})
    expect(users[2]).toEqual({name: 'Goga', age: 94})
    expect(admins[2]).toEqual({name: 'Goga', age: 94})


})
test('array test', () => {

    var usersCount = 100;
    // var users = [
    //     {
    //         name: 'Victor',
    //         age: 25
    //     },
    //     {
    //         name: 'Dimych',
    //         age: 35
    //     },
    // ]
    var adminsCount = usersCount

    adminsCount = adminsCount + 1

    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)
})

test('reference type test', () => {

    const  address = {
        title: 'Moscow'
    }
    var user: UserType2 = {
        name: 'Victor',
        age: 25,
        address: address
    }
    const user2: UserType2 = {
        name: 'Natacha',
        age: 30,
        address: address
    }


    expect(user2.address.title).toBe('Moscow')
    expect(user.address.title).toBe('Moscow')
})

test('reference type test', () => {

    const  address = {
        title: 'Moscow'
    }
    var user: UserType2 = {
        name: 'Victor',
        age: 25,
        address: address
    }
    const user2: UserType2 = {
        name: 'Natacha',
        age: 30,
        address: address
    }

    const users = [user, user2, { name: 'Mysha', age: 4, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Goga'

    const arraySort = ['d', 'f', 'a', 'c', 'b']
   arraySort.sort()

    expect(user.name).toBe('Goga')
    expect(admins[0].name).toBe('Goga')
    expect(user.address.title).toBe('Moscow')
    expect(arraySort).toEqual(['a', 'b', 'c', 'd', 'f'])
})

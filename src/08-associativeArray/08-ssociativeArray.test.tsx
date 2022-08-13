import {userObj} from './08-ssociativeArray';

type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach (()=>{
    users = {
        '101': {id: 101, name: 'Victor'},
        '1212': {id: 1212, name: 'Dima'},
        '3232312': {id: 3232312, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test.skip( 'should select corresponding user', ()=>{
    users['1'].name = 'Ekaterina'

    // expect(userObj[0]).toBe('Victor')
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'})
    // expect(userObj[2]).toBe('Valera')
    // expect(userObj[3]).toBe('Katya')
})

test.skip( 'should delete corresponding user', ()=>{
    delete users['1']
    expect(users['1']).toBeUndefined()
})
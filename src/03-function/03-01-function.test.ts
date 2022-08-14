import {CityType} from '../02-object/02-01-object';
import {
    addMoneyToBudget,
    demoLishHousesOnTheStreet,
    getBuildingsWithStaffCountGreaterThen,
    repairHouse,
    toFireStaff,
    toHireStaff
} from './03-function';

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            },

        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})

// 01. Создайте в отдельном файле функцию, чтобы тесты прошли
test('Budget should be for changed fot HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
});

//02. Тесты должны пройти
test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
});

test('Houses should be destroyed', () => {
    demoLishHousesOnTheStreet(city, 'Happy street')

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
});

//01. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});

// 02. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be increased', () => {
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180);
});

test('Staff should be reduced', () => {
    toHireStaff(city.governmentBuildings[0], 100);
    toHireStaff(city.governmentBuildings[1], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(300);
    expect(city.governmentBuildings[1].staffCount).toBe(1020);

});

test('Buldings with correct staff count', () => {
   let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
});















// 04. Создайте в том же файле еще одну функцию, чтобы тесты прошли




//
//
//
// test.skip('Greeting message should be correct for city', () => {
//     const message = createMessage(city);
//     expect(message).toBe('Hello New York citizens. I want you be happy. All 1000000 men');
// });












// // 01. дополните тип GovernmentBuildingType
// // 02. заполните объект city, чтобы тесты ниже прошли
// test("test city should contains hospital and fire station", () => {
//     expect(city.governmentBuildings.length).toBe(2);
//
//     expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
//     expect(city.governmentBuildings[0].budget).toBe(200000);
//     expect(city.governmentBuildings[0].staffCount).toBe(200);
//     expect(city.governmentBuildings[0].address.street.title).toBe("Central Str");
//
//     expect(city.governmentBuildings[1].type).toBe("FIRE-STATION");
//     expect(city.governmentBuildings[1].budget).toBe(500000);
//     expect(city.governmentBuildings[1].staffCount).toBe(1000);
//     expect(city.governmentBuildings[1].address.street.title).toBe("South Str");
// })

// // 01. создайте тип CityType
// // 02. заполните объект city, чтобы тесты ниже прошли
// test("test city should contains 3 houses", () => {
//     expect(city.houses.length).toBe(3);
//
//     expect(city.houses[0].buildedAt).toBe(2012);
//     expect(city.houses[0].repaired).toBe(false);
//     expect(city.houses[0].address.number).toBe(100);
//     expect(city.houses[0].address.street.title).toBe("White street");
//
//     expect(city.houses[1].buildedAt).toBe(2008);
//     expect(city.houses[1].repaired).toBe(false);
//     expect(city.houses[1].address.number).toBe(100);
//     expect(city.houses[1].address.street.title).toBe("Happy street");
//
//     expect(city.houses[2].buildedAt).toBe(2020);
//     expect(city.houses[2].repaired).toBe(false);
//     expect(city.houses[2].address.number).toBe(101);
//     expect(city.houses[2].address.street.title).toBe("Happy street");
// })

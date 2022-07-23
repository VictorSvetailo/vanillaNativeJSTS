export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}


export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentBuildingType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}

// type TechType = {
//     id: number
//     title: string
// }
// export type StudentType = {
//     id: number
//     name: string
//     age: number
//     isActive: boolean
//     address: AddressType
//     technologies: Array<TechType>
// }
//
// export const student: StudentType = {
//     id: 1,
//     name: 'Victor',
//     age: 32,
//     isActive: false,
//     address: {
//         streetTitle: 'Surganova 2',
//         city: {
//             title: 'Minsk',
//             countryTitle: 'Belarus',
//         }
//     },
//     technologies:[
//         {
//             id: 1,
//             title: 'HTML',
//         },
//         {
//             id: 2,
//             title: 'CSS',
//         },
//         {
//             id: 3,
//             title: 'REACT',
//         },
//         {
//             id: 4,
//             title: 'Node.js',
//         }
//     ]
// }
//
//
// console.log(student.age)
// console.log(student.name)
// console.log(student.address.city.title)
// console.log(student.technologies[2].title)
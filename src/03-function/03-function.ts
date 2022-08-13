import {StudentType} from "../02-object/02-object";
import {CityType, GovernmentBuildingType, HouseType} from "../02-object/02-01-object";


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}


export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}


export function toFireStaff(building: GovernmentBuildingType, staffCountToFire: number){
    building.staffCount -= staffCountToFire;
}

export function toHireStaff(building: GovernmentBuildingType, numberOfEmployeesHired: number){
    building.staffCount += numberOfEmployeesHired;
}



export const createMessage = (props: CityType)=>{
    // return "Hello " + props.title + " citizens. I want you be happy. All " + props.citizensNumber + " men";
    return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`;
}





// debugger
// export const sum = (a: number, b: number) => {
//     return a + b
// };
//
// const res = sum(sum(5,5), sum(2,2))
//


// export function sum(a: number, b: number) {
//     return a + b;
// }
//
//
// export const sum2 = (a: number, b: number) => {
//     return a + b;
// }

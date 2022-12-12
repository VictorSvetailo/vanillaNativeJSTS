



// 11-promise #2
//@ts-ignore
//@ts-ignore



export const test = () =>{
    console.log('Запуск promise ')
    //@ts-ignore
    const test2 = (time) =>{
        return new Promise(resolve => {
            //@ts-ignore
            setTimeout(()=> {resolve()}, time)
        })
    }
    // 11-promise.all([test2(1000), test2(3000)]).then(()=>{
    //     console.log('All promise ')
    // })
    Promise.race([test2(1000), test2(3000)]).then(()=>{
        console.log('кто первый?  All promise ')
    })
}

// test2(1000).then(()=> console.log('1000 ms'))
// test2(3000).then(()=> console.log('3000 ms'))






// 11-promise #1
// export const test  = () => {
//     console.log('Запрос данных')
//     return new 11-promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Подготовка данных...')
//
//             const prod = {
//                 name: 'Auto',
//                 price: 2000,
//             }
//
//             //@ts-ignore
//             resolve(prod)
//
//         }, 2000)
//     }).then((prod)=>{
//       return new 11-promise((resolve, reject) => {
//           setTimeout(() => {
//               //@ts-ignore
//               prod.status = 'Profit'
//               //@ts-ignore
//               reject(prod)
//           }, 2000)
//         })
//     }).then(data => {
//         console.log(data)
//         //@ts-ignore
//         data.modify = true
//         return data;
//     }).then((data)=>{
//         console.log(data)
//         return data;
//     }).then(data => {
//         setTimeout(() => {
//             //@ts-ignore
//             data.study = {
//                 book: 'JavaScript',
//                 price: '300r',
//             }
//             console.log(data)
//             return data;
//         }, 2000)
//     }).catch((error)=>{
//         console.error('Error')
//     }).finally(()=>{
//         console.log('Несмотря на ошибку я это сделаю!')
//     })
// }

    // reg.then((prod)=>{
    //     setTimeout(() => {
    //         console.log('Данные получены!')
    //         //@ts-ignore
    //         prod.status = 'Profit'
    //         console.log(prod)
    //     }, 2000)
    // })

    // reg.then((res)=>{
    //     //@ts-ignore
    //     // console.log(res)
    // })





// setTimeout(() => {
//     //@ts-ignore
//     prod.status = 'Profit'
//     console.log(prod)
// }, 2000)


// let isMomHappy = true;
// 11-promise
// export let willIGetNewPhone = new 11-promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             setTimeout(()=>{
//                 let phone = {
//                     brand: 'Samsung',
//                     color: 'black'
//                 };
//                 resolve(phone); // Всё выполнено
//             }, 3000)
//         } else {
//             let reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }
//
//     }
// );
//
//
// export const askMom = () => {
//     willIGetNewPhone
//         .then(()=>{
//             console.log('fullfield')
//         }).catch(()=>{
//         console.log('dont fullfield')
//     })
//
// }


// console.log()
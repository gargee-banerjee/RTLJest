const sum = require('./sum')
// test('Add', ()=>{
//     expect(sum(1,2)).toBe(3);
// });

test(':check sum', ()=>{
    expect(3+4).toBe(7);
});

test('Object assignment',()=>{
    let obj = {'one':1}
    obj['two'] = 2;
    expect(obj).toEqual({'one':1,'two':2})
})

test('Check for falsy',()=>{
    let a = 1;
    expect(a).toBeTruthy();
})
test('Check for falsy',()=>{
    let a = 0;
    expect(a).toBeFalsy();
})

const myFn = require('./sum')

// test('Throws Error on invalid number',
// ()=>{
//     expect(()=>{myFn(undefined)}).toThrow()
// })

const fetchData = require('./sum')
// test('Check for callback value',(done)=>{
//     const callback = (data)=>{
        
//         console.log("Done")
//         try{
            
//             expect(data).toBe('peanut Butter');
//             done();
//         }catch(error){
//             done(error)
//             //if not wrapped, with try-catch, wont give apt error
//         }
//     }
//     fetchData(callback);
// })


const fetchPromiseData = require('./sum')

test('Check for promise value',(done)=>{
    fetchPromiseData().then((d_)=>{
        // console.log('DONE')
        try{
            expect(d_).toBe('yay mango')
            done();
        }catch(err){
            done(err)
        }
    })
})
test('Check for promise value without done',()=>{
    console.log('Without done')
    return fetchPromiseData().then((d_)=>{
        expect(d_).toBe('yay mango')
    },(d_)=>{
        expect(d_).toBe('yay mango')

    })
})
test('Check for promise value with async-await',async()=>{
    console.log('Without done, with await')
    const d_ = await fetchPromiseData();
    expect(d_).toBe('yay mango');
    
})
test('Check for promise value with async-await - try-catch',async()=>{
    console.log('Without done, with await')
    try{

        const d_ = await fetchPromiseData();
        expect(d_).toBe('yay mango');
    }catch(rejectedError){
        expect(rejectedError).toMatch('yay mango');
    }
    
})
test('Check for promise value with resolves',async()=>{
    // console.log('Without done, with await')
    await expect(fetchPromiseData()).resolves.toBe('yay mango');
})
test('Check for promise value with resolves',async()=>{
    // console.log('Without done, with await')
    await expect(fetchPromiseData()).rejects.toBe('yay mango');
})

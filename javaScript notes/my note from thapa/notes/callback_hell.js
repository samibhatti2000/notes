// callback hell is calling new function inside exiting function 
// and do it to many times is called callbackhell

setTimeout(()=>{
    console.log('fist function')
    setTimeout(()=>{
        console.log('two function')
        setTimeout(()=>{
            console.log('fhree function')
            setTimeout(()=>{
                console.log('four function')
                setTimeout(()=>{
                    console.log('five function')
                    setTimeout(()=>{
                        console.log('six function')
                        setTimeout(()=>{
                            console.log('seven function')
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},100)
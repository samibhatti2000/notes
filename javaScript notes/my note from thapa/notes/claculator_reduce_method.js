
const calc = {
    add(a){
        const add = a.reduce((addn,item,index,arry)=>{
            return addn += item;
        });
        console.log(add);
    },
    subs(a){
        const subs = a.reduce((subsn,item,index,arry)=>{
           t = Math.abs(subsn)-item;
           return t;
        });
        console.log(Math.abs(subs));
    },
    bodmass_subs(a){
        const subs = a.reduce((subsn,item,index,arry)=>{
           t = subsn-item;
           return t;
        });
        console.log(subs);
    },
    mul(a){
        const mul = a.reduce((muln,item,index,arry)=>{
           return muln *= item;
        });
        console.log(mul);
    },

    // lis(a,operator){
    //     const ccalc = a.reduce((operator,item,index,a)=>{
    //         if(operator == add){
    //             operator +=item;
    //             console.log(operator);
    //         }
    //         if(operator == subs){
    //             operator -=item;
    //             console.log(operator);
    //         }
    //         if(operator == mul){
    //             operator *=item;
    //             console.log(operator);
    //         }

    //     });
    // }
}


a = [5,6,1,4];
// calc.add(a);
calc.add([5,6,1]);
calc.subs([4,5,8,10]);
calc.bodmass_subs([4,5,8,10]);
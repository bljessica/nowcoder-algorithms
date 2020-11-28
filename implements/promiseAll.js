Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
        if(promises.length === 0) resolve([]);
        else {
            let res = [];
            let index = 0;
            for(let i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i]).then(data => {
                    res[i] = data;
                    if(++index === promises.length) {
                        resolve(res);
                    }
                }, err => {
                    reject(err);
                    return;
                })
            }
        }
    })
    // let res = [];
    // let count = 0;
    // let len = promises.length;
    // return new Promise((resolve, reject) => {
    //     for(let item of promises) {
    //         Promise.resolve(item).then((res => {
    //             count++;
    //             res[]
    //         }))
    //     }
    // })
}
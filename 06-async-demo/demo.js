(function(){
    function addSync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);
        const result = x + y;
        console.log(`   [@Service] returning the result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@Client] invoking the service`);
        const result = addSync(x,y);
        console.log(`[@Client] result = ${result}`);
    }
    window['addSyncClient'] = addSyncClient;

    function addAsync(x, y, callback) {
        console.log(`   [@Service] processing ${x} and ${y}`);
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@Service] returning the result`);
            callback(result);
        }, 5000);
    }

    function addAsyncClient(x, y) {
        console.log(`[@Client] invoking the service`);
        addAsync(x, y, function(result){
            console.log(`[@Client] result = ${result}`);
        });
    }
    window['addAsyncClient'] = addAsyncClient;


    function addAsyncPromise(x, y) {
        console.log(`   [@Service] processing ${x} and ${y}`);

        const promise = new Promise(function(resolve, reject){
            setTimeout(function () {
                const result = x + y;
                console.log(`   [@Service] returning the result`);
                resolve(result);
            }, 5000);
        });
        
        return promise;
    }

    window['addAsyncPromise'] = addAsyncPromise;

})();
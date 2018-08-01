//observer
function observe(data){
    if(!data || typeof data !=='object'){
        return
    }
    //遍历
    Object.keys(data).forEach(function(key){
        defineReactive(data,key,data[key]);
    })
}
function defineReactive(data,key,val){
    observe(val);//子属性
    Object.defineProperty(data,key,{
        enumerable: true, // 可枚举
        configurable: false, // 不能再define
        get: function() {
            return val;
        },
        set: function(newVal) {
            console.log('监听到值变化了 ', val, ' --> ', newVal);
            val = newVal;
        }
    })
}
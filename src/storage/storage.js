/*
      storage 主要放项目中的storage相关操作：存取等
  */
 var storage = {
       /**
         对本地数据进行操作的相关方法，如localStorage,sessionStorage的封装
       */

    removeStorage(key){
           localStorage.removeItem(key);
     },
   setItemStorage(key,value){
     localStorage.setItem( key,JSON.stringify(value))//将对象转化成字符串存储起来
   }
 };
 export default storage;

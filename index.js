const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // checked solution to see how they were handling array vs object
      const tempCollection = collection instanceof Array ? (collection.slice()) : (Object.values(collection))
      
      for (let i = 0; i < tempCollection.length; i ++){
        callback(tempCollection[i]) // passes each element into callback
      }
      return collection // return original collection
    },

    map: function(collection, callback) {
      const newCollection = collection instanceof Array ? (collection.slice()) : (Object.values(collection))
      for (let i = 0; i < newCollection.length; i++){
        newCollection[i] = callback(newCollection[i])
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      if (acc) {
        let total = acc
        for (let i = 0; i < collection.length; i++){
          total = callback(total, collection[i], collection)
        }
        return total
      } else {
        let total = collection[0]
        for (let i = 1; i < collection.length; i++) {
          total = callback(total, collection[i], collection)
        }
        return total
      }
    },

    find: function(collection, evaluate){
      const len = collection.length

      for (let i = 0; i < len; i++) {
        if (evaluate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, evaluate){
      let filteredCollection = [];

      for (let i = 0; i < collection.length; i++) {
        if (evaluate(collection[i])) {
          filteredCollection.push(collection[i])
        }
      }
      return filteredCollection
    },

    size: function(collection) {
      if (!(collection instanceof Array)) collection = Object.values(collection)
      return collection.length
    },

    first: function(array, n = 1) {
      return array.slice(0, n).length === 1 ? (parseInt(array.slice(0, n))) : (array.slice(0, n))
    },

    last: function(array, n = 1) {
      let last = array.slice(-n)
      return last.length === 1 ? (parseInt(last)) : (last)
    },

    compact: function(array){
      let newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) newArray.push(array[i])
      }
      return newArray
    },

    sortBy: function(array, callback){
      const newArray = array.slice()
      return newArray.sort(function(a, b) {return callback(a) - callback(b)})
    },

    keys: function (object) {
      return Object.keys(object)
    },

    values: function (object) {
      return Object.values(object)
    },

    functions: function (object) {
      const objectKeys = Object.keys(object)
      let functions = []
      for (let i = 0; i < objectKeys.length; i++) {
        if (typeof object[objectKeys[i]] === 'function') {
          functions.push(objectKeys[i])
        }
      }
      return functions.sort()


    },


  }
})()

fi.libraryMethod()

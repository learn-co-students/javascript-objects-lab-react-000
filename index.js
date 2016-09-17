const recipes = {}

const updateObjectWithKeyAndValue = function(object, key, value){
  return Object.assign({}, object, {[key]:value})
}

const destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  object[key] = value
  return object
}

const deleteFromObjectByKey = function(object, key){
  let obj = Object.assign({}, object)
  delete obj[key]
  return obj
}

const destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object.key
  return object
}

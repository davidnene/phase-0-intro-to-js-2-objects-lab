// Write your solution in this file!

function print(value) {
    console.info(value)
}

/**
 * To start, define a employee variable and assign it to an Object containing name and streetAddress keys;
 *  you can use whatever values you like. Use literal syntax to create your Object. Various updates 
 * will be applied to this variable (destructively and non-destructively) in this lab.
 */
let employee = {
    name: 'David',
    streetAddress: 'Nairobi'
}

print(employee)

/**
 * updateEmployeeWithKeyAndValue(): 
 * this function should take in three arguments: an employee Object, a key and a value. 
 * This function should not mutate the employee; it should return a new Object that has 
 * an updated value for the key passed in. Hint: use the spread operator!
 * 
 */
function updateEmployeeWithKeyAndValue(Object, key, value) {
    const newEmployee = {...Object};
    newEmployee[key] = value;
    return newEmployee;
}

/**
 * destructivelyUpdateEmployeeWithKeyAndValue()
 * : this function should work the same as updateEmployeeWithKeyAndValue() 
 * but it should mutate the employee Object passed in.
 *  
 */

function destructivelyUpdateEmployeeWithKeyAndValue(Object, key, value) {
    Object[key] = value;
    return Object;
}

/**
 * deleteFromEmployeeByKey()
 * : this function should take in a employee Object and a key. 
 * It should delete the property with that key from the employee Object. 
 * This should not mutate the original employee Object; it should return a new Object 
 * that doesn't include the identified key-value pair. Hint: use the spread operator!
 */

function deleteFromEmployeeByKey(Object, key) {
    const newEmployee = {...Object};
    delete newEmployee[key];
    return newEmployee;
}

/**
 * destructivelyDeleteFromEmployeeByKey(): 
 * this function should work the same as deleteFromEmployeeByKey() 
 * but it should mutate the employee Object.
 */

function destructivelyDeleteFromEmployeeByKey(Object, key) {
    delete Object[key];
    return Object;
}


//test
//print(destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress'))
//print(employee)

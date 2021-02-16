// js doc

/**
 * 
 * @param {object} payload the key of this object should be the column name, the values should be actual record value
 * @returns {String} 
 */
function generateSetQuery(payload) {
    if(!(payload instanceof Object)){
        throw new Error("Payload should be Object.")
    }
      return Object.keys(payload)
            .map((fieldName) => `${fieldName} = ?`)
            .join(', ');
}


module.exports = {
    generateSetQuery,
}
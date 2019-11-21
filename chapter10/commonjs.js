let ordinal = require('ordinal')
let names = require('date-names')

console.log(ordinal(1)) // '1st'
console.log(ordinal(2)) // '2nd'
console.log(ordinal(3)) // '3rd'
console.log(ordinal(4)) // '4th'

ordinal(11) // '11th'
ordinal(12) // '12th'
ordinal(13) // '13th'

ordinal(21) // '21st'
ordinal(22) // '22nd'
ordinal(23) // '23rd'
ordinal(24) // '24th'

console.log(names.months)
console.log(names.days)
const fs = require('fs')

JsonData = JSON.parse(fs.readFileSync('1-json.json').toString())

JsonData.name = "Aakash Gowda"
JsonData.age = 24

fs.writeFileSync('1-json.json', JSON.stringify(JsonData))
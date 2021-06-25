async function getMercuryData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,mercury&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius')
    let mercuryData = await response.json()
    return mercuryData
}

async function getVenusData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,venus&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius')
    let venusData = await response.json()
    return venusData
}

async function getEarthData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,earth&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius')
    let earthData = await response.json()
    return earthData
}

async function getMarsData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,mars&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius')
    let marsData = await response.json()
    return marsData
}

async function getJupiterData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,jupiter&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius')
    let jupiterData = await response.json()
    return jupiterData
}

async function getSaturnData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,saturn&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius')
    let saturnData = await response.json()
    return saturnData
}

async function getUranusData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,uranus&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius')
    let uranusData = await response.json()
    return uranusData
}

async function getNeptuneData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,neptune&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius')
    let neptuneData = await response.json()
    return neptuneData
}


async function getPlanetData(){
    let mercuryData = await getMercuryData()
    let venusData = await getVenusData()
    let earthData = await getEarthData()
    let marsData = await getMarsData()
    let jupiterData = await getJupiterData()
    let saturnData = await getSaturnData()
    let uranusData = await getUranusData()
    let neptuneData = await getNeptuneData()

    console.log(mercuryData,venusData,earthData,marsData,jupiterData,saturnData,uranusData,neptuneData)


}

getPlanetData()
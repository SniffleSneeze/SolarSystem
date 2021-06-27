async function getMercuryData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,mercury&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')
    let mercuryData = await response.json()
    return mercuryData
}

async function getVenusData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,venus&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')
    let venusData = await response.json()
    return venusData
}

async function getEarthData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,earth&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')
    let earthData = await response.json()
    return earthData
}

async function getMarsData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,mars&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')
    let marsData = await response.json()
    return marsData
}

async function getJupiterData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,jupiter&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')
    let jupiterData = await response.json()
    return jupiterData
}

async function getSaturnData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,saturn&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')
    let saturnData = await response.json()
    return saturnData
}

async function getUranusData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,uranus&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')
    let uranusData = await response.json()
    return uranusData
}

async function getNeptuneData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,neptune&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')
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

     dataDisplay(mercuryData,'#mercuryTemplate','#mercuryTemplateExtra')
     dataDisplay(venusData,'#venusTemplate','#venusTemplateExtra')
     dataDisplay(earthData,'#earthTemplate','#earthTemplateExtra')
     dataDisplay(marsData,'#marsTemplate','#marsTemplateExtra')
     dataDisplay(jupiterData,'#jupiterTemplate','#jupiterTemplateExtra')
     dataDisplay(saturnData,'#saturnTemplate','#saturnTemplateExtra')
     dataDisplay(uranusData,'#uranusTemplate','#uranusTemplateExtra')
     dataDisplay(neptuneData,'#neptuneTemplate','#neptuneTemplateExtra')

}

async function dataDisplay(obj,id1,id2) {
    const sourceOne = await document.querySelector(id1).innerHTML
    const sourceTwo = await document.querySelector(id2).innerHTML
    const templateOne = await Handlebars.compile(sourceOne)
    const templateTwo = await Handlebars.compile(sourceTwo)
    const targetOne = await document.querySelector('.details-section')
    const targetTwo = await document.querySelector('.extra-section')


     obj['bodies'].forEach(key => {
         if (key['moons'] != null) {
             obj['bodies']['0']['hasMoon'] = true
         } else {
             obj['bodies']['0']['hasMoon'] = false
         }

         if (key['discoveredBy'] != '') {
             obj['bodies']['0']['isDiscovered'] = true
         } else {
             obj['bodies']['0']['isDiscovered'] = false
         }
        targetOne.innerHTML = templateOne(key)
        targetTwo.innerHTML = templateTwo(key)
    })

    console.log(obj['bodies']['0']['moons'])
}

getPlanetData()
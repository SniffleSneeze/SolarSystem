var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getMercuryData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, mercuryData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,mercury&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    mercuryData = _a.sent();
                    return [2, mercuryData];
            }
        });
    });
}
function getVenusData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, venusData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,venus&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    venusData = _a.sent();
                    return [2, venusData];
            }
        });
    });
}
function getEarthData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, earthData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,earth&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    earthData = _a.sent();
                    return [2, earthData];
            }
        });
    });
}
function getMarsData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, marsData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,mars&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    marsData = _a.sent();
                    return [2, marsData];
            }
        });
    });
}
function getJupiterData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, jupiterData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,jupiter&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    jupiterData = _a.sent();
                    return [2, jupiterData];
            }
        });
    });
}
function getSaturnData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, saturnData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,saturn&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    saturnData = _a.sent();
                    return [2, saturnData];
            }
        });
    });
}
function getUranusData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, uranusData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,uranus&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    uranusData = _a.sent();
                    return [2, uranusData];
            }
        });
    });
}
function getNeptuneData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, neptuneData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,neptune&data=id,englishName,moons,moon,density,discoveredBy,discoveryDate,mass,massValue,meanRadius,sideralOrbit,sideralRotation')];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    neptuneData = _a.sent();
                    return [2, neptuneData];
            }
        });
    });
}
function getPlanetData() {
    return __awaiter(this, void 0, void 0, function () {
        var mercuryData, venusData, earthData, marsData, jupiterData, saturnData, uranusData, neptuneData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getMercuryData()];
                case 1:
                    mercuryData = _a.sent();
                    return [4, getVenusData()];
                case 2:
                    venusData = _a.sent();
                    return [4, getEarthData()];
                case 3:
                    earthData = _a.sent();
                    return [4, getMarsData()];
                case 4:
                    marsData = _a.sent();
                    return [4, getJupiterData()];
                case 5:
                    jupiterData = _a.sent();
                    return [4, getSaturnData()];
                case 6:
                    saturnData = _a.sent();
                    return [4, getUranusData()];
                case 7:
                    uranusData = _a.sent();
                    return [4, getNeptuneData()];
                case 8:
                    neptuneData = _a.sent();
                    dataDisplay(mercuryData, '#mercuryTemplate', '#mercuryTemplateExtra');
                    dataDisplay(venusData, '#venusTemplate', '#venusTemplateExtra');
                    dataDisplay(earthData, '#earthTemplate', '#earthTemplateExtra');
                    dataDisplay(marsData, '#marsTemplate', '#marsTemplateExtra');
                    dataDisplay(jupiterData, '#jupiterTemplate', '#jupiterTemplateExtra');
                    dataDisplay(saturnData, '#saturnTemplate', '#saturnTemplateExtra');
                    dataDisplay(uranusData, '#uranusTemplate', '#uranusTemplateExtra');
                    dataDisplay(neptuneData, '#neptuneTemplate', '#neptuneTemplateExtra');
                    return [2];
            }
        });
    });
}
function dataDisplay(obj, id1, id2) {
    return __awaiter(this, void 0, void 0, function () {
        var sourceOne, sourceTwo, templateOne, templateTwo, targetOne, targetTwo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, document.querySelector(id1).innerHTML];
                case 1:
                    sourceOne = _a.sent();
                    return [4, document.querySelector(id2).innerHTML];
                case 2:
                    sourceTwo = _a.sent();
                    return [4, Handlebars.compile(sourceOne)];
                case 3:
                    templateOne = _a.sent();
                    return [4, Handlebars.compile(sourceTwo)];
                case 4:
                    templateTwo = _a.sent();
                    return [4, document.querySelector('.details-section')];
                case 5:
                    targetOne = _a.sent();
                    return [4, document.querySelector('.extra-section')];
                case 6:
                    targetTwo = _a.sent();
                    obj['bodies'].forEach(function (key) {
                        if (key['moons'] != null) {
                            obj['bodies']['0']['hasMoon'] = true;
                        }
                        else {
                            obj['bodies']['0']['hasMoon'] = false;
                        }
                        if (key['discoveredBy'] != '') {
                            obj['bodies']['0']['isDiscovered'] = true;
                        }
                        else {
                            obj['bodies']['0']['isDiscovered'] = false;
                        }
                        targetOne.innerHTML = templateOne(key);
                        targetTwo.innerHTML = templateTwo(key);
                    });
                    console.log(obj['bodies']['0']['moons']);
                    return [2];
            }
        });
    });
}
getPlanetData();

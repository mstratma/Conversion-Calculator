//Weight variables and functions
var pounds = document.getElementById('poundsInput');
var ounces = document.getElementById('ouncesInput');
var kilograms = document.getElementById('kilogramsInput');
var grams = document.getElementById('gramsInput');


function updateFromOunces() {
  pounds.value = (ounces.value / 16).toFixed(2);
  kilograms.value = (pounds.value / 2.20462).toFixed(2);
  grams.value = ((pounds.value / 2.20462) * 1000).toFixed(2);
}

function updateFromGrams() {
  pounds.value = ((grams.value / 1000)* 2.20462).toFixed(2);
  kilograms.value = (grams.value / 1000).toFixed(2);
  ounces.value = (pounds.value * 16).toFixed(2);
};

function updateFromKilograms() {
  pounds.value = (kilograms.value * 2.20462).toFixed(2);
  grams.value = (kilograms.value * 1000).toFixed(2);
  ounces.value = (pounds.value * 16).toFixed(2);
};

function updateFromPounds() {
  kilograms.value = (pounds.value / 2.20462).toFixed(2);
  grams.value = ((pounds.value / 2.20462) * 1000).toFixed(2);
  ounces.value = (pounds.value * 16).toFixed(2);
};

ounces.oninput = updateFromOunces;
grams.oninput = updateFromGrams;
pounds.oninput = updateFromPounds;
kilograms.oninput = updateFromKilograms;
//End Weight variables and functions

//Temperature variables and functions
var fehr = document.getElementById('fInput');
var celcius = document.getElementById('cInput');
var kelvin = document.getElementById('kInput');

function updateFromC() {
  fehr.value = (celcius.value * 1.8 + 32).toFixed(2);
  kelvin.value = (celcius.value / 1 + 273.15).toFixed(2);
}

function updateFromF() {
  celcius.value = ((fehr.value - 32) / 1.8).toFixed(2);
  kelvin.value = (celcius.value / 1 + 273.15).toFixed(2);
}

function updateFromK() {
  celcius.value = (kelvin.value - 273.15).toFixed(2);
  fehr.value = (celcius.value * 1.8 + 32).toFixed(2);
}

celcius.oninput = updateFromC;
fehr.oninput = updateFromF;
kelvin.oninput = updateFromK;
//End tempterature variables and functions

//Velocity functions
var feps = document.getElementById('footSInput');
var miph = document.getElementById('mileHInput');
var mips = document.getElementById('mileSInput');
var kiph = document.getElementById('kilometerHInput');
var kips = document.getElementById('kilometerSInput');
var meps = document.getElementById('meterSInput');

function updateFromFeetS () {
  miph.value = (feps.value * 0.681818).toFixed(2);
  mips.value = (feps.value * 0.0001893939394).toFixed(2);
  kiph.value = (feps.value * 1.09728).toFixed(2);
  kips.value = (feps.value * 0.0003048).toFixed(2);
  meps.value = (feps.value * 0.3048).toFixed(2);
}

function updateFromMileH () {
  feps.value = (miph.value * 1.46666667).toFixed(2);
  mips.value = (miph.value * 0.0002777777778).toFixed(2);
  kiph.value = (miph.value * 1.609344).toFixed(2);
  kips.value = (miph.value * 0.00044704).toFixed(2);
  meps.value = (miph.value * 0.44704).toFixed(2);
}

function updateFromMileS () {
  feps.value = (mips.value * 5280).toFixed(2);
  miph.value = (mips.value * 3600).toFixed(2);
  kiph.value = (mips.value * 5793.6384).toFixed(2);
  kips.value = (mips.value * 1.609344).toFixed(2);
  meps.value = (mips.value * 1609.344).toFixed(2);
}

function updateFromKilometerH () {
  feps.value = (kiph.value * 0.91134442).toFixed(2);
  miph.value = (kiph.value * 0.6213711923).toFixed(2);
  mips.value = (kiph.value * 0.000172603109).toFixed(2);
  kips.value = (kiph.value * 0.0002777777778).toFixed(2);
  meps.value = (kiph.value * 0.2777777778).toFixed(2);
}

function updateFromKilometerS () {
  feps.value = (kips.value * 3280.839895).toFixed(2);
  miph.value = (kips.value * 2236.936292).toFixed(2);
  mips.value = (kips.value * 0.6213711922).toFixed(2);
  kiph.value = (kips.value * 3600).toFixed(2);
  meps.value = (kips.value * 1000).toFixed(2);
}

function updateFromMeterS () {
  feps.value = (meps.value * 3.280839895).toFixed(2);
  miph.value = (meps.value * 2.236936292).toFixed(2);
  mips.value = (meps.value * 0.0006213711922).toFixed(2);
  kiph.value = (meps.value * 3.6).toFixed(2);
  kips.value = (meps.value * .001).toFixed(2);
}

feps.oninput = updateFromFeetS;
miph.oninput = updateFromMileH;
mips.oninput = updateFromMileS;
kiph.oninput = updateFromKilometerH;
kips.oninput = updateFromKilometerS;
meps.oninput = updateFromMeterS;
//End Velocity functions

//Volume functions

var tsp = document.getElementById('tSPInput');
var tbsp = document.getElementById('tBSPInput');
var floz = document.getElementById('fluidOInput');
var cup = document.getElementById('cupInput');
var pint = document.getElementById('pintInput');
var quart = document.getElementById('quartInput');
var gallon = document.getElementById('gallonInput');
var milliliter = document.getElementById('milliliterInput');
var liter = document.getElementById('literInput');

function updateFromTSP () {
  tbsp.value = (tsp.value * 0.3333333333).toFixed(2);
  floz.value = (tsp.value * 0.1666666667).toFixed(2);
  cup.value = (tsp.value * 0.02083333).toFixed(2);
  pint.value = (tsp.value * 0.01041666667).toFixed(2);
  quart.value = (tsp.value * 0.005208333333).toFixed(2);
  gallon.value = (tsp.value * 0.001302083333).toFixed(2);
  milliliter.value = (tsp.value * 4.928921594).toFixed(2);
  liter.value = (tsp.value * 0.004928921594).toFixed(2);
}

function updateFromtBSP () {
  tsp.value = (tbsp.value * 3).toFixed(2);
  floz.value = (tbsp.value * .5).toFixed(2);
  cup.value = (tbsp.value * .0625).toFixed(2);
  pint.value = (tbsp.value * .03125).toFixed(2);
  quart.value = (tbsp.value * .015625).toFixed(2);
  gallon.value = (tbsp.value * 0.00390625).toFixed(2);
  milliliter.value = (tbsp.value * 14.78676478).toFixed(2);
  liter.value = (tbsp.value * 0.01478676478).toFixed(2);
}

function updateFromFluidO () {
  tsp.value = (floz.value * 6).toFixed(2);
  tbsp.value = (floz.value * 2).toFixed(2);
  cup.value = (floz.value * .125).toFixed(2);
  pint.value = (floz.value * .0625).toFixed(2);
  quart.value = (floz.value * .03125).toFixed(2);
  gallon.value = (floz.value * 0.007812499999).toFixed(2);
  milliliter.value = (floz.value * 29.57352956).toFixed(2);
  liter.value = (floz.value * 0.02957352956).toFixed(2);
}

function updateFromCup () {
  tsp.value = (cup.value * 48).toFixed(2);
  tbsp.value = (cup.value * 16).toFixed(2);
  floz.value = (cup.value * 8).toFixed(2);
  pint.value = (cup.value * .5).toFixed(2);
  quart.value = (cup.value * .25).toFixed(2);
  gallon.value = (cup.value * .0625).toFixed(2);
  milliliter.value = (cup.value * 236.5882365).toFixed(2);
  liter.value = (cup.value * 0.2365882365).toFixed(2);
}

function updateFromPint () {
  tsp.value = (pint.value * 96).toFixed(2);
  tbsp.value = (pint.value * 32).toFixed(2);
  floz.value = (pint.value * 16).toFixed(2);
  cup.value = (pint.value * 2).toFixed(2);
  quart.value = (pint.value * .5).toFixed(2);
  gallon.value = (pint.value * .125).toFixed(2);
  milliliter.value = (pint.value * 473.176473).toFixed(2);
  liter.value = (pint.value * 0.473176473).toFixed(2);
}

function updateFromQuart () {
  tsp.value = (quart.value * 192).toFixed(2);
  tbsp.value = (quart.value * 64).toFixed(2);
  floz.value = (quart.value * 32).toFixed(2);
  cup.value = (quart.value * 4).toFixed(2);
  pint.value = (quart.value * 2).toFixed(2);
  gallon.value = (quart.value * .25).toFixed(2);
  milliliter.value = (quart.value * 946.352946).toFixed(2);
  liter.value = (quart.value * 0.946352946).toFixed(2);
}

function updateFromGallon () {
  tsp.value = (gallon.value * 768).toFixed(2);
  tbsp.value = (gallon.value * 256).toFixed(2);
  floz.value = (gallon.value * 128).toFixed(2);
  cup.value = (gallon.value * 16).toFixed(2);
  pint.value = (gallon.value * 8).toFixed(2);
  quart.value = (gallon.value * 4).toFixed(2);
  milliliter.value = (gallon.value * 3785.411784).toFixed(2);
  liter.value = (gallon.value * 3.785411784).toFixed(2);
}

function updateFromMilliliter () {
  tsp.value = (milliliter.value * 0.20288414).toFixed(2);
  tbsp.value = (milliliter.value * 0.06762805).toFixed(2);
  floz.value = (milliliter.value * 0.03381402).toFixed(2);
  cup.value = (milliliter.value * 0.00422675).toFixed(2);
  pint.value = (milliliter.value * 0.00211338).toFixed(2);
  quart.value = (milliliter.value * 0.00105669).toFixed(2);
  gallon.value = (milliliter.value * 0.00026417).toFixed(2);
  liter.value = (milliliter.value * 0.001).toFixed(2);
}

function updateFromLiter () {
  tsp.value = (liter.value * 202.8841362).toFixed(2);
  tbsp.value = (liter.value * 67.6280454).toFixed(2);
  floz.value = (liter.value * 33.8140227).toFixed(2);
  cup.value = (liter.value * 4.22675284).toFixed(2);
  pint.value = (liter.value * 2.11337642).toFixed(2);
  quart.value = (liter.value * 1.05668821).toFixed(2);
  gallon.value = (liter.value * 0.26417205).toFixed(2);
  milliliter.value = (liter.value * 1000).toFixed(2);
}

tsp.oninput = updateFromTSP;
tbsp.oninput = updateFromtBSP;
floz.oninput = updateFromFluidO;
cup.oninput = updateFromCup;
pint.oninput = updateFromPint;
quart.oninput = updateFromQuart;
gallon.oninput = updateFromGallon;
milliliter.oninput = updateFromMilliliter;
liter.oninput = updateFromLiter;
//End volume functions

//Distance and length functions
var inch = document.getElementById('inchInput');
var foot = document.getElementById('footInput');
var yard = document.getElementById('yardInput');
var mile = document.getElementById('mileInput');
var millimeter = document.getElementById('millimeterInput');
var centimeter = document.getElementById('centimeterInput');
var meter = document.getElementById('meterInput');
var kilometer = document.getElementById('kilometerInput');

function updateFromInch () {
  foot.value = (inch.value * 0.08333333333).toFixed(2);
  yard.value = (inch.value * 0.02777777778).toFixed(2);
  mile.value = (inch.value * 0.00001578282828).toFixed(2);
  millimeter.value = (inch.value * 25.4).toFixed(2);
  centimeter.value = (inch.value * 2.54).toFixed(2);
  meter.value = (inch.value * .0254).toFixed(2);
  kilometer.value = (inch.value * .0000254).toFixed(2);
}

function updateFromFoot () {
  inch.value = (foot.value * 12).toFixed(2);
  yard.value = (foot.value * 0.333333333).toFixed(2);
  mile.value = (foot.value * 0.0001893932).toFixed(2);
  millimeter.value = (foot.value * 304.8).toFixed(2);
  centimeter.value = (foot.value * 30.48).toFixed(2);
  meter.value = (foot.value * 0.3048).toFixed(2);
  kilometer.value = (foot.value * 0.0003048).toFixed(2);
}

function updateFromYard () {
  inch.value = (yard.value * 36).toFixed(2);
  foot.value = (yard.value * 3).toFixed(2);
  mile.value = (yard.value * 0.0005681797).toFixed(2);
  millimeter.value = (yard.value * 914.4).toFixed(2);
  centimeter.value = (yard.value * 91.44).toFixed(2);
  meter.value = (yard.value * 0.9144).toFixed(2);
  kilometer.value = (yard.value * 0.0009144).toFixed(2);
}

function updateFromMile () {
  inch.value = (mile.value * 63360).toFixed(2);
  foot.value = (mile.value * 5280).toFixed(2);
  yard.value = (mile.value * 1760).toFixed(2);
  millimeter.value = (mile.value * 1609340).toFixed(2);
  centimeter.value = (mile.value * 160934).toFixed(2);
  meter.value = (mile.value * 1609.34).toFixed(2);
  kilometer.value = (mile.value * 1.60934).toFixed(2);
}

function updateFromMillimeter () {
  inch.value = (millimeter.value * 0.0393700787).toFixed(2);
  foot.value = (millimeter.value * 0.0032808399).toFixed(2);
  yard.value = (millimeter.value * 0.0010936133).toFixed(2);
  mile.value = (millimeter.value * 0.0000006213688).toFixed(2);
  centimeter.value = (millimeter.value * .1).toFixed(2);
  meter.value = (millimeter.value * 0.001).toFixed(2);
  kilometer.value = (millimeter.value * 0.000001).toFixed(2);
}

function updateFromCentimeter () {
  inch.value = (centimeter.value * 0.3937007874).toFixed(2);
  foot.value = (centimeter.value * 0.032808399).toFixed(2);
  yard.value = (centimeter.value * 0.010936133).toFixed(2);
  mile.value = (centimeter.value * 0.0000062137).toFixed(2);
  millimeter.value = (centimeter.value * 10).toFixed(2);
  meter.value = (centimeter.value * 0.01).toFixed(2);
  kilometer.value = (centimeter.value * 0.00001).toFixed(2);
}

function updateFromMeter () {
  inch.value = (meter.value * 39.37007874).toFixed(2);
  foot.value = (meter.value * 3.280839895).toFixed(2);
  yard.value = (meter.value * 1.093613298).toFixed(2);
  mile.value = (meter.value * 0.0006213689).toFixed(2);
  millimeter.value = (meter.value * 1000).toFixed(2);
  centimeter.value = (meter.value * 100).toFixed(2);
  kilometer.value = (meter.value * 0.001).toFixed(2);
}

function updateFromKilometer () {
  inch.value = (kilometer.value * 39370.07874).toFixed(2);
  foot.value = (kilometer.value * 3280.839895).toFixed(2);
  yard.value = (kilometer.value * 1093.613298).toFixed(2);
  mile.value = (kilometer.value * 0.6213688756).toFixed(2);
  millimeter.value = (kilometer.value * 1000000).toFixed(2);
  centimeter.value = (kilometer.value * 100000).toFixed(2);
  meter.value = (kilometer.value * 1000).toFixed(2);
}

inch.oninput = updateFromInch;
foot.oninput = updateFromFoot;
yard.oninput = updateFromYard;
mile.oninput = updateFromMile;
millimeter.oninput = updateFromMillimeter;
centimeter.oninput = updateFromCentimeter;
meter.oninput = updateFromMeter;
kilometer.oninput = updateFromKilometer;
//End distance and length functions

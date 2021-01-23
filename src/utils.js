let convert = require('color-convert')

function getColorsArray(primaryHex) {
  let colorsArray = Array(10).fill({})
  
  let primaryHSL = convert.hex.hsl(primaryHex)
  // convert primaryHSL elements to strings
  primaryHSL[0] = String(primaryHSL[0])
  primaryHSL[1] = String(primaryHSL[1])
  primaryHSL[2] = String(primaryHSL[2])
  //extract lightness
  let lightness = primaryHSL[2]
  let primaryHSLIndex = Number(lightness[0])

  //fills colorsArray with HSL and index info
  for(let i = 0; i < colorsArray.length; i++){
    colorsArray[i] = {
      index: i, 
      hsl: [(primaryHSL[0]), primaryHSL[1], `${i}${primaryHSL[2][1]}`], 
      hex:'', 
      primary: false
    }
    //determines which color in the array is primary
    if(i === primaryHSLIndex){
      colorsArray[i].primary = true
    }
  }

  //fills colorsArray with hex info
  for(let i = 0; i < colorsArray.length; i++){
    if(i === primaryHSLIndex){
      colorsArray[i].hex = primaryHex
    } else {
      let hex = hslToHex(colorsArray[i].hsl)
      colorsArray[i].hex = hex
    }
  }
  
  //fill colorsArray with complementary hex colors
  let complimentaryColors = []
  
  for(let i = 0; i < colorsArray.length; i++){
    let RGBFromHex = convert.hex.rgb(colorsArray[i].hex)
    let complimentaryHex = getComplimentaryColor(RGBFromHex)
    complimentaryColors.push(`#${complimentaryHex}`)
  }
  complimentaryColors = complimentaryColors.reverse()
  
  for(let i = 0; i < complimentaryColors.length; i ++){
    colorsArray[i].compliment = complimentaryColors[i]
  }

  return colorsArray
}

function hslToHex(hsl) {
  let [h, s, l] = hsl
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function getComplimentaryColor(rgb){
  let [r, g, b] = rgb
  r = Math.abs(r - 255)
  g = Math.abs(g - 255)
  b = Math.abs(b - 255)
  
  let hexFromRGB = convert.rgb.hex(r, g, b)
  
  return hexFromRGB
}

function formatHex(hex){
  if(hex[0] === '#'){
    hex = hex.slice(1)
  }
  if(hex.length === 3){
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }
  if(hex.length < 6 || hex.length > 6){
    return false
  }
  let regEx = /[^a-z\d]/i;
  let isValid = !(regEx.test(hex))
  if(isValid){
    return `#${hex}`
  } else {
    return false
  }
}

export default { getColorsArray, formatHex }

export default function make2Digits(str){
  if (String(str).length == 1) 
    return '0' + str
  return str
}
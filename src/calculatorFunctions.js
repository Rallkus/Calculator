//module.exports.
export function fAdd (array_) {   
  return array_.reduce((valorAnterior, valorActual) => {
     return valorAnterior + valorActual;
  });
}

//module.exports.
export function fMultiplier (array_) {
  return array_.reduce((valorAnterior, valorActual)=>{
     return valorAnterior * valorActual;
  });
} 
//It doubles every single item of the array
//module.exports.
export function fDoublefier (array_){
  return array_.map(function(valorActual){
    return valorActual*2;
  });
}


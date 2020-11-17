
const usersArr=[
  {login:123, password:123,
     bascetProduct: [{categoryName:'jewelry', productId:21}]}
]

function toCheckInStore(userLogin, userPassword){
  let statusLogin=usersArr.some(item=>{
    return (item.login===parseInt(userLogin)) && (item.password===parseInt(userPassword))
  })
  return statusLogin
}

 

 function validate(userLogin, userPassword){
    // console.log('validate')
    let messageError=[]
    if(userLogin.length<=2){
      messageError.push('Short LOGIN')
    }
     if(userPassword<=2){
      messageError.push('Short Password')
    }
    if(toCheckInStore(userLogin, userPassword)){
      messageError=['This customer already']
    }
//    console.log(messageError)

    return messageError;
  }

  export {validate};
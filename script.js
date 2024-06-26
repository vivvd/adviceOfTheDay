const urlToQuery = 'https://api.adviceslip.com/advice';
let advice = ''
const getAdvice = async () => {
  try{
    const response = await fetch (urlToQuery)
    if(response.ok) {
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      document.getElementById('advice').innerHTML = jsonResponse.slip.advice;
      document.getElementById('advice').style.animation = "fadeIn 0.5s";
      const timerId = setTimeout(() => {
        document.getElementById('advice').style.animation = "none";
      }, 1000)
      
    }
  }catch(error){
    console.log(error)
  }

}


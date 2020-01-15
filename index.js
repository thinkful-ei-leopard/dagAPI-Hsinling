

function getDogImg(num){
if(num <= 3){
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response =>  response.json())
    .then (responseJson =>displayImg(responseJson));
    
      
}else {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response =>  response.json())
    .then (responseJson =>displayImg(responseJson));         
}   
}

function displayImg(responseJson){
  console.log(responseJson);
  let html =('');
  for(let i=0; i< responseJson.message.length ; i++){
    html += '<img class="results-img" src="'+responseJson.message[i]+'" alt="placeholder">'
  }
  $('.results-img').html(html);
     

}

function numImg(){
  $('form').on('submit', function(event){
    event.preventDefault();
    $('.results').removeAttr('hidden');
    let num =$('input[type="number"]').val();   
    getDogImg(num);
  });
}



$(function() {
    console.log('App loaded! Waiting for submit!');
    numImg();
  });


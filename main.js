$(document).ready(function() {
  $('header button').click(function() {
    $('form').slideDown()
  })

  $('#botao-cancelar').click(function() {
    $('form').slideUp()
  })

  $('form').on('submit',function(e){
    e.preventDefault()
    const urlImagem = $('#urlImg').val()
    let novaImagem = $('<li></li>')    
    console.log($(`<img src="${urlImagem}" />`).appendTo(novaImagem))
    console.log($(`<div class="overlay-image-link">
    <a href="${urlImagem}" title="ver uma em tamnho real" target="_blank">
      Veja imagem no tamanho real
    </a>
  </div>`).appendTo(novaImagem))    
  $(novaImagem).appendTo('ul')      
  })  
})
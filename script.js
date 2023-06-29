let btn = document.getElementById('button')
let nome = document.getElementById('input-name')
let email = document.getElementById('input-email')
let span1 = document.getElementById('span1')
let span2 = document.getElementById('span2')
let span3 = document.getElementById('span3')


    function Validar(){
        event.preventDefault()
        if(nome.value==''){
            span1.innerText = '*Campo Obrigatório*'
            span1.style.color = 'red'
            
        }else{
            span1.innerText = ''
            
            
        }
        if(email.value==''){
            span2.innerText = '*Campo Obrigatório*'
            span2.style.color = 'red'
            
    
        }else{
            span2.innerText = ''
            
        }   
        if(nome.value =='' || email.value ==''){
            span3.innerText = 'Campos obrigatórios não preenchidos.'
            span3.style.color = 'red'
        } 
        if(nome.value !='' && email.value !=''){
            span3.innerText = 'Sucesso!'
            span3.style.color = 'green'
            document.querySelector('form').submit();
            
        }
        
}
// This is a JavaScript file

window.onload = function(){
  const buscar = document.querySelector("#buscar");
  const cep = document.querySelector("#cep");

  const opcoes = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  buscar.addEventListener("click", function(){
    fetch(`http://viacep.com.br/ws/${ cep.value }/json/`, opcoes)
      .then(response => {response.json()
        .then(data => {
          document.querySelector("#CEP").value = data['cep'];
          document.querySelector("#Logradouro").value = data['logradouro'];
          document.querySelector("#Bairro").value = data['bairro'];
          document.querySelector("#Localidade").value = data['localidade'];
          document.querySelector("#UF").value = data['uf'];
          document.querySelector("#DDD").value = data['ddd'];
        })
      })
  });
}

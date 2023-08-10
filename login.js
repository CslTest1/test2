// Função para fazer o login com Bearer Token
function fazerLoginComToken() {
  // Bearer Token do usuário
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.RxvAfAaGK5REuXWL-4VbQZYgQgRDCkZk0i5C9U5h3KI
';

  // URL de login
  const url = 'https://ormus.com/login';

  // Configuração da requisição POST
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  // Faz a requisição POST para a URL
  fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        // Login bem-sucedido, realizar ações pós-login aqui
        console.log('Login realizado com sucesso:', data.message);
      } else {
        // Login falhou, lidar com o erro aqui
        console.error('Erro no login:', data.error);
      }
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
}

const botaoLogin = document.getElementById('botao-login');
botaoLogin.addEventListener('click', fazerLoginComToken);

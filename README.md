# Diagnoser Chatbot 🩺

## Descrição

O **Diagnoser Chatbot** é uma solução desenvolvida durante um hackathon da **PedLabs** em cerca de 2 horas. Ele utiliza a API da OpenAI para fornecer **pré-diagnósticos médicos** com base nos sintomas informados pelo paciente. Além disso, o chatbot direciona o paciente para a área correta do hospital e define a **prioridade de atendimento**, contribuindo para otimizar processos de triagem hospitalar.

## Funcionalidades

- Coleta de sintomas do paciente via interface de chat.
- Geração de pré-diagnósticos médicos baseados em IA.
- Definição de prioridade de atendimento.
- Direcionamento do paciente para a área correta do hospital (pneumologia, infectologia, etc.).

## Demonstração

Confira o chatbot em ação [aqui](https://www.linkedin.com/posts/guilhermelopesbertacini_tecnologia-inovacao-healthtech-activity-7254496754237071360-b8WG?utm_source=share&utm_medium=member_desktop).

## Tecnologias Utilizadas

- **HTML/CSS/JavaScript**: Interface do chatbot.
- **OpenAI API**: IA responsável pelo pré-diagnóstico.
- **Fetch API**: Comunicação com a API para processar as mensagens.
  
## Pré-requisitos

- Navegador moderno que suporte JavaScript.
- Conta na [OpenAI](https://openai.com/) com chave de API.

## Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/GuilhermeLopesBertacini/diagnoser-chatbot.git
   ```

2. Abra o arquivo `index.html` no seu navegador.

3. Insira sua chave da API OpenAI no arquivo `script.js`:
   ```javascript
   const API_KEY = 'sua-chave-da-api-aqui';
   ```

4. Interaja com o chatbot inserindo sintomas no campo de texto e clicando em "Enviar".

## Estrutura do Projeto

```bash
.
├── index.html        # Arquivo principal da interface
├── css/
│   └── style.css     # Estilos para a interface do chatbot
├── js/
│   └── script.js     # Lógica do chatbot e comunicação com a API OpenAI
└── README.md         # Descrição do projeto
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para entrar em contato com suas ideias.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, entre em contato:

- Email: guilb2005@gmail.com
- LinkedIn: [Guilherme Lopes Bertacini](www.linkedin.com/in/guilhermelopesbertacini)

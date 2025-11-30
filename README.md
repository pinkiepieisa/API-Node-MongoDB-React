# API-Node-MongoDB-React

Projeto fullstack de exemplo: backend em Node/Express + MongoDB e frontend em React (Vite).  
Estrutura principal:
- Back/ — API (Express + Mongoose)
- Front/republica/ — Frontend React (Vite)

## Pré-requisitos
- Node.js (>=16)
- npm
- MongoDB rodando (local ou Atlas)

---

## Instalação e execução

Importante: iniciar o backend antes do frontend.

### Backend (Back)
1. Abrir terminal na pasta `Back`:
   ```bash
   cd c:\Users\adm\OneDrive\FATEC\FATEC\Terceiro Semestre\Desenvolvimento Web 3\API-Node-MongoDB-React\Back
   npm install
   ```
2. Variáveis de ambiente (opcional): crie `.env` com algo como:
   ```
   PORT=8081
   MONGO_URI=mongodb://localhost:27017/nome_do_banco
   ```
3. Rodar a API:
   - com Node:
     ```bash
     node index.js
     ```
   - com nodemon (dev):
     ```bash
     npx nodemon index.js
     ```

Rotas principais (conforme controllers):
- GET  /              → rota de teste ("Eu estou aqui!")
- GET  /aluna         → lista de alunas
- POST /aluna         → criar aluna (ver formato do body)
- GET  /aluna/:id     → pegar aluna por id
- PUT  /aluna/:id     → atualizar aluna
- DELETE /aluna/:id   → deletar aluna

> Observação: o controller de dormitórios está montado em `/dormitorio`.

### Frontend (Front/republica)
1. Abrir terminal na pasta `Front/republica`:
   ```bash
   cd c:\Users\adm\OneDrive\FATEC\FATEC\Terceiro Semestre\Desenvolvimento Web 3\API-Node-MongoDB-React\Front\republica
   npm install
   ```
2. Rodar dev server (Vite):
   ```bash
   npm run dev
   ```
3. Front usa axios com baseURL em `src/services/api.js`:
   ```js
   // exemplo
   import axios from 'axios';
   const api = axios.create({ baseURL: 'http://localhost:8081' });
   export default api;
   ```
   - Para chamadas às alunas use `api.get('/aluna')`, `api.post('/aluna', body)`, etc.

---

## Formato esperado para criar/atualizar Aluna
O backend espera um objeto `dormitorio` no corpo com `andar` e `porta`. Exemplo de body para POST /aluna:

```json
{
  "nome": "Maria",
  "idade": 20,
  "cpf": "00000000000",
  "semestre": 3,
  "curso": "ADS",
  "dormitorio": {
    "andar": 2,
    "porta": 5
  }
}
```

---

## Testes rápidos (curl)
- Teste rota de health:
  ```bash
  curl http://localhost:8081/
  ```
- Listar alunas:
  ```bash
  curl http://localhost:8081/aluna
  ```

---

## Dependências principais

Backend (na pasta Back):
- express
- mongoose
- cors
- body-parser (opcional; pode usar express.json())
- dotenv (opcional)
- nodemon (dev)

Frontend (na pasta Front/republica):
- react
- react-dom
- react-router-dom
- axios
- vite (dev)
- @vitejs/plugin-react (se usado)
- sass (opcional, caso queira SCSS)

Exemplos de instalação (executar nas pastas correspondentes):
```bash
# Back
npm install express mongoose cors body-parser dotenv
npm install -D nodemon

# Front
npm install react react-dom react-router-dom axios
npm install -D vite @vitejs/plugin-react
npm install -D sass   # opcional
```

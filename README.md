# Plataforma de Gestão de Projetos Ambientais 🌱

Gestão de projetos com prazos, status, autenticação e integrações.

## Funcionalidades
- Login com Google (Firebase)
- Cadastro de projetos com prazo
- Lista de projetos
- Backend em Flask
- Integração com Google Drive via Zapier
- Exportação de relatórios em PDF

## Tecnologias
- React + Tailwind
- Flask + CORS
- Firebase Auth
- jsPDF

## Instalação
### Frontend
```bash
npm install
npm start
```

### Backend
```bash
pip install -r requirements.txt
python app.py
```

## Uso Offline
- O backend armazena os dados em memória;
- Para persistência, adapte com SQLite ou MongoDB.

## Deploy
- Frontend: Vercel / Netlify
- Backend: Render / Railway / Heroku
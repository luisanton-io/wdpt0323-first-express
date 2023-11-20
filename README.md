# Express

Inizializziamo una repo vuota

- creiamo una nuova cartella
- lanciamo `npm init`
- rispondiamo alle domande che vengono poste dal wizard
- `npm install express`
- ci assicuriamo che il nostro `.gitignore` includa `node_modules`
- creiamo una directory `src` dentro la quale inseriamo il nostro `index.js` (questa è una convenzione, dettata dal fatto che se in un secondo momento aggiungessimo una fase di build, è comodo avere tutti i nostri file dentro una sola cartella)
- infine, creiamo uno script che ci permette di lanciare il nostro server, generalmente lo script si chiama `dev` o `start`

  - installiamo come dipendenza di sviluppo `nodemon` che ci consente di rilanciare lo script del server ad ogni salvataggio
  - dentro il nostro `package.json`:
    - `"dev": "nodemon src/index.js"`

- lanciamo il nostro server:

```js
server.listen(port, () => {
  console.log("Server listening at port: ", port);
});
```

# MongoDB Atlas

- creazione di un'utenza
- creazione di un cluster
- creazione di un DB
- creazione di una o piu collezioni
- creazione di multipli documenti

# Mongoose

Come leggere MongoDB tramite Mongoose dentro la nostra applicazione scritta con Express?

- `npm install mongoose`
- ci colleghiamo tramite mongoose al nostro DB con il nostro URI

  - ```js
    mongoose.connect(URI); // promise(!), quindi gestibile con .then/.catch
    ```

- definiamo lo schema dei nostri documenti

  - ```js
    const UserSchema = new Schema({
      /* qui la definizione della struttura dati */
    });
    ```

- esportiamo un modello che ci consente di interagire con il DB

  - ```js
    const User = mongoose.model(NOME_COLLEZIONE, SCHEMA); // esportando questo oggetto riusciamo a collegarci e interagire con il DB
    ```

- dentro la route, usiamo il modello con gli appositi metodi per recuperare i dati da DB
  - ```js
    const users = await User.find({}); // restituisce tutti i documenti
    // ...
    const user = await User.findById(ID_RICERCATO); // restituisce il doc con tale id o null
    // ...
    const newUser = new User(data); // crea un nuovo documento
    await newUser.save(); // salva il documento in modo persistente su DB
    ```

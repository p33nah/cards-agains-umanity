const questions = [
  {
     "text":"La nuova norma sulla sicurezza ora proibisce _ sugli aerei.",
     "pick":1
  },
  {
     "text":"è un peccato che i ragazzini al giorno d'oggi partecipino a _",
     "pick":1
  },
  {
     "text":"Fra 1.000 anni, quando le banconote saranno soltanto un ricordo lontano, _ sarà il nostro denaro.",
     "pick":1
  },
  {
     "text":"La lega serie A ha vietato _ poichè dà un vantaggio ingiusto ai giocatori.",
     "pick":1
  },
  {
     "text":"Qual è il vizio segreto di Batman?",
     "pick":1
  },
  {
     "text":"Il prossimo romanzo di J.K.Rowling. Harry Potter e la camera dei _",
     "pick":1
  },
  {
     "text":"Si, ho ucciso _ Ti domandi come? _",
     "pick":2
  },
  {
     "text":"Prof. mi dispiace ma non ho potuto finire i compiti per colpa di _",
     "pick":1
  },
  {
     "text":"E il premio Oscar per _ va a _",
     "pick":2
  },
  {
     "text":"Per il mio prossimo numero tirerò fuori _ da _",
     "pick":2
  },
  {
     "text":"_ + _ = _",
     "pick":3
  },
  {
     "text":"Cosa ho portato dal Messico?",
     "pick":1
  },
  {
     "text":"_? C'è un app per quello.",
     "pick":1
  },
  {
     "text":"Passo 1: _ Passo 2: _ Passo 3: Guadagno!",
     "pick":2
  },
  {
     "text":"_ Scommetto che non ne desideri soltanto uno!",
     "pick":1
  },
  {
     "text":"Qual è il mio antidroga?",
     "pick":1
  },
  {
     "text":"Mentre gli USA e la Russia gareggiavano per la conquista della Luna, il Messico ha investito milioni di pesos in _",
     "pick":1
  },
  {
     "text":"Nel nuovo film della Disney, Hannah Montana si scontra per la prima volta contro _",
     "pick":1
  },
  {
     "text":"Qual è il mio potere segreto?",
     "pick":1
  },
  {
     "text":"Qual è la nuova dieta del momento?",
     "pick":1
  },
  {
     "text":"Cosa si mangia Vin Diesel per cena?",
     "pick":1
  },
  {
     "text":"Quando il faraone rimase impassibile, Mosè scateno la piaga _",
     "pick":1
  },
  {
     "text":"Come faccio a mantenere la mia attuale relazione?",
     "pick":1
  },
  {
     "text":"Qual è la cosa più incrostata?",
     "pick":1
  },
  {
     "text":"Mentre ero sotto gli effetti di acidi, _ si trasformò in _",
     "pick":2
  },
  {
     "text":"Nel carcere di Los Angeles le voci dicono che puoi scambiare 200 sigarette per _",
     "pick":1
  },
  {
     "text":"Dopo il terremoto Sean Penn portò _ alle persone di Haiti.",
     "pick":1
  },
  {
     "text":"Invece del carbone la Befana ora porta ai bambini cattivi _",
     "pick":1
  },
  {
     "text":"La vita degli indiani d'America cambiò per sempre quando gli uomini bianchi Ii introdussero a _",
     "pick":1
  },
  {
     "text":"Cosa usano gli insegnanti per ispirare al successo i ragazzi?",
     "pick":1
  },
  {
     "text":"Amaro Montenegro. Sapore di _",
     "pick":1
  },
  {
     "text":"Negli ultimi istanti di vita di Michael Jackson lui pensò a _",
     "pick":1
  },
  {
     "text":"Ai neri piace _",
     "pick":1
  },
  {
     "text":"_ è una tendenza pericolosa che porta a _",
     "pick":2
  },
  {
     "text":"Perchè ho male ovunque?",
     "pick":1
  },
  {
     "text":"Una romantica cena a lume di candela è incompleta senza _",
     "pick":1
  },
  {
     "text":"Cosa posso andare a prendere dal passato per convincere la gente di essere un potente stregone?",
     "pick":1
  },
  {
     "text":"Sono Valerio Staffelli e sono qui per parlavi di _",
     "pick":1
  },
  {
     "text":"La gita scolastica fu completamente rovinata da _",
     "pick":1
  },
  {
     "text":"Qual è il miglior amico di una ragazza?",
     "pick":1
  },
  {
     "text":"Cara TopGirl, ho difficoltà con _ e vorrei qualche consiglio.",
     "pick":1
  },
  {
     "text":"Quando sarò il capo del governo creerò il Ministero del _",
     "pick":1
  },
  {
     "text":"Cosa mi stanno nascondendo i miei genitori?",
     "pick":1
  },
  {
     "text":"Cosa non fallisce mai nel ravvivare una festa?",
     "pick":1
  },
  {
     "text":"In un mondo depredato da _ il nostro unico conforto è _",
     "pick":2
  },
  {
     "text":"Inventa un haiku.",
     "pick":1
  },
  {
     "text":"Nel nuovo film di Shyamalan Bruce Willis scopre che _ era invece _ per tutto il tempo.",
     "pick":2
  },
  {
     "text":"Cosa migliora con l'età?",
     "pick":1
  },
  {
     "text":"_ buono fino all'ultima goccia.",
     "pick":1
  },
  {
     "text":"Ho un sacco di problemi ma _ non è fra questi.",
     "pick":1
  },
  {
     "text":"_ è una trappola!",
     "pick":1
  },
  {
     "text":"Il nuovo reality show di MTV presenterà otto celebrità sull'orlo dello sfinimento che vivranno con _",
     "pick":1
  },
  {
     "text":"Cos'è che mia nonna troverebbe allarmante ma nello stesso tempo anche stranamente affascinante?",
     "pick":1
  },
  {
     "text":"Chi è il più emo?",
     "pick":1
  },
  {
     "text":"Non avevo veramente compreso _ finchè non incontrai _",
     "pick":2
  },
  {
     "text":"Durante il sesso mi piace pensare a _",
     "pick":1
  },
  {
     "text":"Cosa fece finire la mia passata relazione?",
     "pick":1
  },
  {
     "text":"Cos'è questo suono?",
     "pick":1
  },
  {
     "text":"_ Così è come voglio morire!",
     "pick":1
  },
  {
     "text":"Perchè sono appiccicoso?",
     "pick":1
  },
  {
     "text":"Quale sarà il prossimo giocattolo dell'Happy Meal?",
     "pick":1
  },
  {
     "text":"Cosa sarà disponibile a volontà in paradiso?",
     "pick":1
  },
  {
     "text":"Non so con che armi sarà combattuta la terza guerra mondiale. Ma nella quarta si useranno _",
     "pick":1
  },
  {
     "text":"Cosa ti permette di portarti a letto, con assoluta certezza, una ragazza?",
     "pick":1
  },
  {
     "text":"Voci dicono che il piatto preferito di Vladimir Putin è _ ripieno di _",
     "pick":2
  },
  {
     "text":"LA7D presenta _ la storia di _",
     "pick":2
  },
  {
     "text":"_: testato dai bambini, approvato dalle madri.",
     "pick":1
  },
  {
     "text":"Perchè non riesco a dormire?",
     "pick":1
  },
  {
     "text":"Cos'è questo odore?",
     "pick":1
  },
  {
     "text":"Cosa aiuterebbe Monti a rilassarsi?",
     "pick":1
  },
  {
     "text":"Questo è come il mondo finirà, non con una esplosione ma con _",
     "pick":1
  },
  {
     "text":"In arrivo a Broadway quest'anno, _: il musical.",
     "pick":1
  },
  {
     "text":"Gli antropologi hanno recentemente scoperto un'antica tribù che venera _",
     "pick":1
  },
  {
     "text":"Ma prima che la uccida Signor Bond le voglio mostrare _",
     "pick":1
  },
  {
     "text":"Recenti studi hanno mostrato che topi di laboratorio impiegano il 50% in meno per uscire da un labirinto se sono stati esposti a _",
     "pick":1
  },
  {
     "text":"Quale sarà la prossima coppia di supereroi?",
     "pick":1
  },
  {
     "text":"Prossimamente su Rai Sport 2: i mondiali di _",
     "pick":1
  },
  {
     "text":"Quando sarò milionario erigerò una statua di 30 metri per commemorare _",
     "pick":1
  },
  {
     "text":"Nel tentativo di attrarre nuove persone, il museo nazionale di Storia Naturale inaugurerà una mostra interattiva su _",
     "pick":1
  },
  {
     "text":"Guerra! A cosa ci serve?",
     "pick":1
  },
  {
     "text":"Cosa mi crea flatulenze incontrollabili?",
     "pick":1
  },
  {
     "text":"Di cosa odorano le persone anziane?",
     "pick":1
  },
  {
     "text":"A cosa rinuncio per la quaresima?",
     "pick":1
  },
  {
     "text":"La medicina alternativa sta ora adottando i poteri curativi di _",
     "pick":1
  },
  {
     "text":"Quale cosa l'Italia ha paracadutato ai bambini afghani?",
     "pick":1
  },
  {
     "text":"Cosa piace a Silvio Berlusconi?",
     "pick":1
  },
  {
     "text":"Durante il trascurato Periodo Marrone, Picasso ha prodotto centinai di quadri su _",
     "pick":1
  },
  {
     "text":"Cosa non vuoi trovare nel tuo cibo cinese?",
     "pick":1
  },
  {
     "text":"Bevo per dimenticare _",
     "pick":1
  },
  {
     "text":"_ Dammi un cinque fratello!",
     "pick":1
  }
]

export default questions
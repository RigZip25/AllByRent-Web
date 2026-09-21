const fs = require('fs');

const edits = {
  'de/index.html': {
    'Evorios ist nicht nur eine Inserate-App — es ist das Backoffice deines Ladens. Sieh, was du verdienst, ziele auf ein Monatsziel und hol deine Nachbarn mit einem einzigen Link dazu.':'Mit Evorios verwaltest du Angebote, Buchungen und Einnahmen an einem Ort. Teile deine Angebotsseite direkt mit Menschen in deiner Nähe.',
    'Ein Link bringt Nachbarn direkt zu deinem Regal — poste ihn auf TikTok, Instagram, Nextdoor oder WhatsApp, oder kopiere einen fertigen Text.':'Ein Link führt direkt zu deinen Angeboten — teile ihn über Instagram, Facebook oder WhatsApp oder nutze einen vorbereiteten Text.',
    'Nicht sicher, was du verlangen sollst? Dein Concierge schlägt einen fairen Preis vor, sobald ein Gegenstand ins Regal kommt.':'Du bist beim Preis unsicher? Evorios macht dir beim Erstellen des Angebots einen unverbindlichen Vorschlag.',
    'Jede Kategorie hat zwei Regale — <b>Haushalt</b> für den alltäglichen Nachbarn, <b>Profi / Business</b> für die Handwerker und Teams in deiner Nachbarschaft. Deine Garage kann alles davon führen.':'Jede Kategorie unterscheidet zwischen <b>Privat</b> und <b>Profi / Business</b>. So finden Interessierte schneller das passende Angebot.',
    'Zwanzig Kategorien. Je zwei Regale. Eine Nachbarschaft.':'Zwanzig Kategorien für private und gewerbliche Angebote.',
    'Fotografiere alles Ungenutzte und stell es in etwa 30 Sekunden ins Regal.':'Fotografiere den Gegenstand und ergänze Preis, Verfügbarkeit und die wichtigsten Angaben.',
    'Keine Apple-Steuer. Kein Google-Anteil. Mit einem Tipp zum Startbildschirm hinzufügen.':'Direkt im Browser nutzen oder zum Startbildschirm hinzufügen.',
    '<!-- GARAGE STATEMENT -->':'<!-- OWNER DASHBOARD -->'
  },
  'fr/index.html': {
    "Evorios n'est pas qu'une appli d'annonces — c'est l'arrière-boutique de ton commerce. Vois ce que tu gagnes, vise un objectif mensuel et amène tes voisins avec un seul lien.":'Evorios réunit vos annonces, vos réservations et vos revenus. Une page suffit pour présenter vos objets aux personnes qui vivent près de chez vous.',
    "Des outils ou du matériel qui dorment ? Mets-les en ligne en 3 minutes. Chaque location met de l'argent dans ta poche — protégé par caution et suivi.":'Des outils ou du matériel peu utilisés ? Proposez-les à la location, fixez vos disponibilités et suivez vos revenus.',
    "Matériel photo, outils électriques, équipement de camping — quelqu'un près de toi en a besoin aujourd'hui. Mets en ligne en 3 minutes et gagne pendant ton sommeil.":'Matériel photo, bricolage ou camping : publiez ce que vous utilisez peu et rendez-le disponible près de chez vous.',
    "Photo → l'IA remplit le titre, la catégorie et suggère un prix. Moins de 3 minutes de la photo à l'annonce en ligne.":"À partir de vos photos, l’IA prépare le titre, la catégorie et une suggestion de prix. Vous gardez la main avant la publication.",
    'Le locataire scanne le QR à la remise puis à nouveau au retour. Chaque horodatage est une preuve légale. Le versement arrive sur ton compte.':'Le locataire scanne le QR au retrait puis au retour. Chaque scan date l’étape et conserve un historique clair de la location.',
    'Scan à la remise, scan au retour. Chaque horodatage est une preuve légale.':'Un scan au retrait, un autre au retour : les deux étapes restent datées dans l’historique.',
    'Pas de taxe Apple. Pas de commission Google. Ajoute à l\'écran d\'accueil en un geste.':"Utilisez Evorios dans votre navigateur ou ajoutez-le à l’écran d’accueil.",
    'Chaque foyer peut tenir sa propre boutique dans le quartier':'Des objets utiles, proposés et loués près de chez vous',
    '<!-- GARAGE STATEMENT -->':'<!-- OWNER DASHBOARD -->'
  },
  'it/index.html': {
    "Evorios non è solo un'app di annunci — è il retrobottega del tuo negozio. Guarda quanto guadagni, punta a un obiettivo mensile e porta i tuoi vicini con un solo link.":'Con Evorios gestisci annunci, prenotazioni e guadagni in un unico posto. Condividi la tua pagina con chi vive nella tua zona.',
    'Chi noleggia scansiona il QR al ritiro e di nuovo alla restituzione. Ogni marca temporale è prova legale. Il pagamento arriva sul tuo conto.':'Chi noleggia scansiona il QR al ritiro e alla restituzione. Ogni passaggio resta registrato con data e ora.',
    'Scansiona alla consegna, scansiona al rientro. Ogni marca temporale è prova legale.':'Una scansione al ritiro e una alla restituzione mantengono chiara la cronologia del noleggio.',
    'Ogni casa può avere un proprio negozio nel quartiere':'Oggetti utili da noleggiare vicino a casa',
    'Nessuna tassa Apple. Nessuna quota Google. Aggiungilo alla schermata Home con un tocco.':'Usa Evorios dal browser o aggiungilo alla schermata Home.',
    '<!-- GARAGE STATEMENT -->':'<!-- OWNER DASHBOARD -->'
  },
  'pl/index.html': {
    'Evorios to nie tylko aplikacja z ogłoszeniami — to zaplecze Twojego sklepu. Widzisz, ile zarabiasz, celujesz w miesięczny cel i przyciągasz sąsiadów jednym linkiem.':'W Evorios zarządzasz ogłoszeniami, rezerwacjami i wypłatami w jednym miejscu. Swoją stronę z ofertami możesz łatwo udostępnić osobom w okolicy.',
    'Zrób zdjęcie czegokolwiek nieużywanego i połóż na półce w około 30 sekund.':'Zrób zdjęcia, dodaj cenę i dostępność, a następnie sprawdź ogłoszenie przed publikacją.',
    'Masz narzędzia albo sprzęt bez użytku? Wystaw je w 3 minuty. Każde wypożyczenie wkłada pieniądze do kieszeni — z kaucją i śledzeniem.':'Masz rzadko używane narzędzia lub sprzęt? Ustal dostępność, opublikuj ogłoszenie i śledź swoje przychody.',
    'Sprzęt foto, elektronarzędzia, kemping — ktoś w pobliżu potrzebuje tego dziś. Wystaw w 3 minuty i zarabiaj przez sen.':'Sprzęt fotograficzny, elektronarzędzia czy wyposażenie kempingowe mogą przydać się komuś w pobliżu.',
    'Zdjęcie → AI uzupełnia tytuł, kategorię i podpowiada cenę. Mniej niż 3 minuty od zdjęcia do gotowego ogłoszenia.':'Na podstawie zdjęcia AI przygotuje tytuł, kategorię i propozycję ceny. Przed publikacją możesz wszystko poprawić.',
    'Bez podatku Apple. Bez prowizji Google. Dodaj do ekranu głównego jednym dotknięciem.':'Korzystaj w przeglądarce lub dodaj Evorios do ekranu głównego.',
    'Każdy dom może mieć własny sklep w okolicy':'Potrzebne rzeczy możesz znaleźć i wypożyczyć w okolicy',
    '<!-- GARAGE STATEMENT -->':'<!-- OWNER DASHBOARD -->'
  },
  'pt/index.html': {
    'O Evorios não é só um app de anúncios — é a retaguarda da sua loja. Veja quanto você ganha, mire numa meta mensal e traga seus vizinhos com um único link.':'No Evorios, você gerencia anúncios, reservas e recebimentos em um só lugar. Compartilhe sua página com quem mora perto de você.',
    'Foto → a IA preenche título, categoria e sugere preço. Menos de 3 minutos da foto ao anúncio no ar.':'A partir da foto, a IA prepara título, categoria e uma sugestão de preço. Você revisa tudo antes de publicar.',
    'Sem taxa da Apple. Sem corte do Google. Adicione à tela inicial com um toque.':'Use no navegador ou adicione o Evorios à tela inicial.',
    'Cada casa pode ter sua própria loja no bairro':'Itens úteis para alugar perto de você',
    '<!-- GARAGE STATEMENT -->':'<!-- OWNER DASHBOARD -->'
  },
  'pt-pt/index.html': {
    'O Evorios não é só uma app de anúncios — é a retaguarda da tua loja. Vê quanto ganhas, aponta a um objetivo mensal e traz os teus vizinhos com um único link.':'No Evorios, geres anúncios, reservas e pagamentos num só lugar. Partilha a tua página com quem vive perto de ti.',
    'Sem taxa Apple. Sem parte para a Google. Adiciona ao ecrã principal com um toque.':'Usa no navegador ou adiciona o Evorios ao ecrã principal.',
    'Cada casa pode ter a sua própria loja na zona':'Artigos úteis para alugar perto de ti',
    '<!-- GARAGE STATEMENT -->':'<!-- OWNER DASHBOARD -->'
  },
  'sk/index.html': {
    'Jeden odkaz zavedie susedov rovno na vašu policu — zdieľajte ho na TikToku, Instagrame, Facebooku alebo WhatsAppe, alebo skopírujte hotový popisok.':'Jeden odkaz otvorí všetky vaše ponuky — zdieľajte ho na Instagrame, Facebooku alebo WhatsAppe.',
    'Neviete, koľko si vypýtať? Váš sprievodca navrhne férovú cenu vo chvíli, keď vec pridáte na policu.':'Neviete, akú cenu zvoliť? Evorios pri vytváraní ponuky pripraví nezáväzný návrh.',
    'Každá kategória má dve police — <b>Domácnosť</b> pre bežného suseda, <b>Profi / Biznis</b> pre remeselníkov, tímy a živnostníkov vo vašej štvrti. Domácnosť unesie čokoľvek z toho.':'Každá kategória rozlišuje ponuky pre <b>domácnosť</b> a <b>profi / biznis</b>, aby si každý rýchlejšie našiel vhodné vybavenie.',
    'Dvadsať kategórií. Každá s dvomi policami. Jedna štvrť.':'Dvadsať kategórií pre súkromné aj profesionálne ponuky.',
    'Odfoťte čokoľvek nevyužité a dajte to na policu asi za 30 sekúnd.':'Pridajte fotografie, cenu a dostupnosť a pred zverejnením ponuku skontrolujte.',
    'Záujemca naskenuje QR pri prevzatí a znova pri vrátení. Každý časový záznam je právny dôkaz. Výplata dorazí na váš účet.':'Záujemca naskenuje QR pri prevzatí aj vrátení. Obe udalosti zostanú zaznamenané s dátumom a časom.',
    'Sken pri prevzatí, sken pri vrátení. Každý časový záznam je právny dôkaz.':'Sken pri prevzatí a vrátení zachová prehľadnú históriu prenájmu.',
    'Žiadna daň pre Apple. Žiadny podiel pre Google. Pridanie na plochu jedným klepnutím.':'Používajte Evorios v prehliadači alebo si ho pridajte na plochu.',
    '<!-- GARAGE STATEMENT -->':'<!-- OWNER DASHBOARD -->'
  }
};

const spanishRegional = {
  'es-ar/index.html': [
    ['Un enlace lleva a los vecinos directo a tu estante — compartilo en TikTok, Instagram, Nextdoor o WhatsApp, o copiá un texto ya listo.','Un enlace reúne todas tus publicaciones — compartilo por Instagram, Facebook o WhatsApp.'],
    ['¿No sabés cuánto cobrar? Tu asistente te sugiere un precio justo apenas ponés el artículo en el estante.','¿No sabés cuánto cobrar? Evorios te ofrece una referencia y vos decidís el precio final.'],
    ['Veinte categorías. Dos estantes cada una. Un barrio.','Veinte categorías para publicaciones particulares y profesionales.'],
    ['Sacale una foto a cualquier cosa sin usar y ponela en tu estante en unos 30 segundos.','Sacá las fotos, definí el precio y la disponibilidad, y revisá todo antes de publicar.'],
    ['Quien alquila escanea el QR al retirar y otra vez al devolver. Cada registro de hora es evidencia legal. El pago llega a tu cuenta.','Quien alquila escanea el QR al retirar y al devolver. Ambos pasos quedan registrados con fecha y hora.'],
    ['Escaneá al entregar, escaneá al devolver. Cada registro de hora es evidencia legal.','Un escaneo al retirar y otro al devolver mantienen claro el historial del alquiler.'],
    ['Sin comisión de Apple. Sin recorte de Google. Agregalo a tu pantalla de inicio con un toque.','Usalo desde el navegador o agregalo a la pantalla de inicio.'],
    ['<!-- GARAGE STATEMENT -->','<!-- OWNER DASHBOARD -->']
  ],
  'es-cl/index.html': [], 'es-co/index.html': [], 'es-mx/index.html': []
};

for (const file of ['es-cl/index.html','es-co/index.html','es-mx/index.html']) {
  const mx = file.startsWith('es-mx');
  spanishRegional[file] = [
    ['Un enlace lleva a los vecinos directo a tu estante — compártelo en TikTok, Instagram, Facebook o WhatsApp, o copia un texto ya listo.', mx ? 'Un enlace reúne todas tus publicaciones — compártelo por Instagram, Facebook o WhatsApp.' : 'Un enlace reúne todas tus publicaciones — compártelo por Instagram, Facebook o WhatsApp.'],
    ['¿No sabes cuánto cobrar? El Sr. Evorios sugiere un precio justo apenas pones el artículo en el estante.', mx ? '¿No sabes cuánto cobrar? Evorios te da una referencia y tú decides el precio final.' : '¿No sabes cuánto cobrar? Evorios te ofrece una referencia y tú decides el precio final.'],
    ['Veinte categorías. Dos estantes cada una. Un barrio.','Veinte categorías para publicaciones particulares y profesionales.'],
    ['Veinte categorías. Dos estantes cada una. Una colonia.','Veinte categorías para publicaciones particulares y profesionales.'],
    ['Toma foto de cualquier cosa sin usar y ponla en tu estante en unos 30 segundos.', mx ? 'Toma las fotos, define el precio y la disponibilidad, y revisa todo antes de publicar.' : 'Haz las fotos, define el precio y la disponibilidad, y revisa todo antes de publicar.'],
    ['Sin comisión de Apple. Sin recorte de Google. Agrégalo a tu pantalla de inicio con un toque.','Úsalo desde el navegador o agrégalo a tu pantalla de inicio.'],
    ['<!-- GARAGE STATEMENT -->','<!-- OWNER DASHBOARD -->']
  ];
}

for (const [file, pairs] of Object.entries(spanishRegional)) {
  edits[file] = Object.fromEntries(pairs);
}

for (const [file, map] of Object.entries(edits)) {
  let html = fs.readFileSync(file, 'utf8');
  for (const [from, to] of Object.entries(map)) html = html.split(from).join(to);
  fs.writeFileSync(file, html);
}

console.log(`Polished supporting copy for ${Object.keys(edits).length} localized pages.`);

const fs = require('fs');

const markets = {
  'index.html': { locale:'en-US', currency:'USD', dash:[640,5820,790], earn:[60,210,320,470,780,1280], save:90,
    focus:'Popular nearby: lawn and power equipment, camping gear, cameras, party supplies and tools for one-off projects.' },
  'cs/index.html': { locale:'cs-CZ', currency:'CZK', dash:[12500,93600,15400], earn:[1200,4200,6800,9800,15800,26000], save:1800,
    focus:'V Česku dává smysl začít s nářadím, koly, kempingovou výbavou, zahradní technikou a vybavením na oslavy.' },
  'de/index.html': { locale:'de-DE', currency:'EUR', dash:[720,6480,890], earn:[55,190,310,460,760,1250], save:80,
    focus:'Besonders gefragt: Heimwerker- und Gartengeräte, Fahrräder und E-Bikes, Campingausrüstung sowie Technik für Feiern und Projekte.' },
  'es/index.html': { locale:'es-ES', currency:'EUR', dash:[590,5210,720], earn:[45,165,270,395,650,1080], save:70,
    focus:'En España pueden funcionar especialmente bien el material de playa y camping, las herramientas, las bicicletas y el equipo para celebraciones.' },
  'es-ar/index.html': { locale:'es-AR', currency:'ARS', dash:[420000,3150000,520000], earn:[35000,125000,220000,330000,540000,900000], save:55000,
    focus:'En Argentina conviene probar con herramientas, equipos para eventos, camping, foto y video, y artículos que se usan solo algunos fines de semana.' },
  'es-cl/index.html': { locale:'es-CL', currency:'CLP', dash:[310000,2280000,380000], earn:[25000,95000,165000,245000,410000,680000], save:42000,
    focus:'En Chile pueden destacar el equipo de trekking y camping, bicicletas, deportes de agua, herramientas y artículos para eventos.' },
  'es-co/index.html': { locale:'es-CO', currency:'COP', dash:[920000,6900000,1140000], earn:[75000,280000,470000,700000,1150000,1900000], save:130000,
    focus:'En Colombia suelen tener potencial el sonido y equipo para eventos, foto y video, herramientas, camping y artículos para niños.' },
  'es-mx/index.html': { locale:'es-MX', currency:'MXN', dash:[9800,73500,12100], earn:[800,2900,4800,7100,11800,19500], save:1300,
    focus:'En México vale la pena empezar con equipo para fiestas, herramientas, camping, foto y video, y artículos para bebés que se usan por temporadas.' },
  'fr/index.html': { locale:'fr-FR', currency:'EUR', dash:[650,5790,800], earn:[50,180,290,430,710,1170], save:75,
    focus:'En France, misez d’abord sur le bricolage et le jardin, les vélos, le camping, la photo et le matériel pour les fêtes.' },
  'it/index.html': { locale:'it-IT', currency:'EUR', dash:[560,4980,690], earn:[45,160,260,385,640,1050], save:65,
    focus:'In Italia possono funzionare bene attrezzature per eventi, foto e video, utensili, campeggio e articoli stagionali.' },
  'pl/index.html': { locale:'pl-PL', currency:'PLN', dash:[2600,19500,3200], earn:[220,780,1300,1900,3150,5200], save:340,
    focus:'W Polsce warto zacząć od narzędzi i sprzętu ogrodowego, wyposażenia na imprezy, rowerów oraz rzeczy na kemping i wyjazdy.' },
  'pt/index.html': { locale:'pt-BR', currency:'BRL', dash:[2800,20800,3450], earn:[230,850,1400,2050,3400,5600], save:380,
    focus:'No Brasil, vale testar primeiro itens para festas, som e foto, ferramentas, camping e equipamentos esportivos usados só de vez em quando.' },
  'pt-pt/index.html': { locale:'pt-PT', currency:'EUR', dash:[520,4610,640], earn:[40,145,240,355,590,970], save:60,
    focus:'Em Portugal, podem destacar-se pranchas e material de praia, campismo, ferramentas, bicicletas e equipamento para festas.' },
  'ru/index.html': { locale:'ru-RU', currency:'RUB', dash:[52000,386000,64000], earn:[4200,15000,25000,37000,61000,101000], save:6500,
    focus:'Чаще всего стоит начинать с инструмента, садовой техники, туристического снаряжения, фотооборудования и вещей для мероприятий.' },
  'sk/index.html': { locale:'sk-SK', currency:'EUR', dash:[510,4520,630], earn:[40,145,235,350,580,950], save:60,
    focus:'Na Slovensku sa oplatí začať náradím, záhradnou technikou, bicyklami, kempingovou výbavou a vecami na oslavy.' },
  'uk/index.html': { locale:'uk-UA', currency:'UAH', dash:[24500,182000,30200], earn:[2000,7200,12000,17800,29400,48500], save:3200,
    focus:'В Україні варто почати з інструментів, генераторів і техніки для дому, садового обладнання, туристичного спорядження та речей для подій.' }
};

const roundExpr = {
  USD:'Math.round(lerp(incPts,n)/10)*10', EUR:'Math.round(lerp(incPts,n)/5)*5',
  CZK:'Math.round(lerp(incPts,n)/100)*100', ARS:'Math.round(lerp(incPts,n)/5000)*5000',
  CLP:'Math.round(lerp(incPts,n)/5000)*5000', COP:'Math.round(lerp(incPts,n)/10000)*10000',
  MXN:'Math.round(lerp(incPts,n)/100)*100', PLN:'Math.round(lerp(incPts,n)/50)*50',
  BRL:'Math.round(lerp(incPts,n)/50)*50', RUB:'Math.round(lerp(incPts,n)/1000)*1000',
  UAH:'Math.round(lerp(incPts,n)/500)*500'
};

for (const [file, m] of Object.entries(markets)) {
  let s = fs.readFileSync(file, 'utf8');
  const fmt = new Intl.NumberFormat(m.locale, {style:'currency', currency:m.currency, maximumFractionDigits:0});
  s = s.replace(/<div class="dash-big">[\s\S]*?<\/div>/, `<div class="dash-big">${fmt.format(m.dash[0])}</div>`);
  s = s.replace(/(<div class="dash-sub">[\s\S]*?<b>)[\s\S]*?(<\/b><\/div>)/, `$1${fmt.format(m.dash[1])}$2`);
  s = s.replace(/(<div class="dash-proj">[\s\S]*?<b[^>]*>)[\s\S]*?(<\/b>[\s\S]*?<\/div>)/, `$1${fmt.format(m.dash[2])}$2`);
  s = s.replace(/(<div class="econ-num" id="earnNum">)[\s\S]*?(<\/div>)/, `$1${fmt.format(m.earn[2])}$2`);
  s = s.replace(/(<div class="econ-num" id="saveNum">)[\s\S]*?(<\/div>)/, `$1${fmt.format(m.save * 6)}$2`);

  s = s.replace(/(<div class="section econ reveal">[\s\S]*?<p class="lead2"[^>]*>[\s\S]*?<\/p>)(?:\s*<p class="market-focus"[^>]*>[\s\S]*?<\/p>)?/, `$1\n    <p class="market-focus" style="max-width:760px;margin:12px auto 0;color:#0d5c3a;font-weight:700">${m.focus}</p>`);

  const points = [[1,m.earn[0]],[5,m.earn[1]],[10,m.earn[2]],[15,m.earn[3]],[25,m.earn[4]],[40,m.earn[5]]];
  s = s.replace(/function countTo\(el,target\)\{[\s\S]*?requestAnimationFrame\(step\);\}/,
`function countTo(el,target){var start=parseInt(el.getAttribute('data-v')||'0',10),t0=null;
    function step(ts){if(!t0)t0=ts;var k=Math.min(1,(ts-t0)/500);k=1-Math.pow(1-k,3);var v=Math.round(start+(target-start)*k);el.textContent=new Intl.NumberFormat('${m.locale}',{style:'currency',currency:'${m.currency}',maximumFractionDigits:0}).format(v);if(k<1)requestAnimationFrame(step);else el.setAttribute('data-v',target);}
    requestAnimationFrame(step);}`);
  s = s.replace(/var incPts=\[[^;]+;/, `var incPts=${JSON.stringify(points)};`);
  s = s.replace(/function upEarn\(\)\{[^}]+\}/, `function upEarn(){var n=+eS.value,v=${roundExpr[m.currency]};eI.textContent=n;countTo(eN,v);setBars(eB,v/${m.earn[5]});}`);
  s = s.replace(/function upSave\(\)\{[^}]+\}/, `function upSave(){var n=+sS.value,v=n*${m.save};sI.textContent=n;countTo(sN,v);setBars(sB,v/${m.save*20});}`);
  fs.writeFileSync(file, s);
}

console.log(`Localized market economics for ${Object.keys(markets).length} pages.`);

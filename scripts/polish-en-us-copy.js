const fs = require('fs');

const file = 'index.html';
let s = fs.readFileSync(file, 'utf8');

const replacements = {
  'Tools, cameras, camping gear and more may already be nearby. Rent instead of buying, or list the useful things sitting idle at home.':'Find tools, gear, and equipment nearby. Rent them for the days you need — or earn by listing what you already own.',
  'Rent, sell or gift':'Rent, sell, or give away',
  'Make the most of what you already have.':'Choose what works for each item.',
  'Deposit on rentals':'Refundable deposits',
  'Secure payments. More peace of mind for everyone.':'Add a card hold when a rental calls for it.',
  'Trusted people nearby.':'See profiles and reviews before you book.',
  'The evolution of ownership':'A smarter way to use what we already own',
  'Every home on your street is open for business.':'Put useful things back to work.',
  'A camera, a mower, camping gear or event equipment can do more than take up space. List what you already own, choose when it is available, and turn useful things into a flexible local income stream.':'A camera, mower, tent, or set of party tables may sit unused most of the year. List it, set your price and availability, and let people nearby put it to use.',
  'Run it like a business. Grow it like one.':'Everything you need to manage your listings.',
  "Evorios isn't a listing app — it's your storefront's back office. See what you earn, aim at a monthly target, and bring your neighbors in with a single link.":'Track bookings and payouts, see which listings get attention, and share one page with your neighborhood or audience.',
  'Keep 2+ items available on weekends, when neighbors need them most.':'Keep availability current so renters can quickly find dates that work.',
  'Example view — your numbers start at $0 and grow as you rent, sell, and gift.':'Sample dashboard. Your account starts at $0 and updates with real activity.',
  'Earn dashboard':'Earnings',
  "See what you've earned, your best listings, and a monthly target to grow toward.":'See payouts, top-performing listings, and monthly activity.',
  'Share your shelf':'Promote your page',
  'One link drops neighbors straight onto your shelf — post it to TikTok, Instagram, Nextdoor, or WhatsApp, or copy a ready-made caption.':'Share one link on Instagram, TikTok, Nextdoor, WhatsApp, or anywhere you already reach customers.',
  'Mr. Evorios prices it':'Pricing guidance',
  'Not sure what to charge? Your concierge suggests a fair price the moment an item hits the shelf.':'Not sure where to start? Evorios can suggest a price range while you build the listing. The final price is always yours.',
  'The more you put in, the more it pays.':'Earn on what you own. Spend less on what you need.',
  'Two sides of one economy: the more you list, the more you earn — and the more you rent instead of buy, the less you spend. Drag the sliders and watch.':'The calculator shows sample scenarios. Earnings depend on demand and availability; savings depend on the purchases you replace with rentals.',
  'From a spare drill to a forklift.':'Everyday items and professional equipment.',
  'Every category includes Household items and Pro / Business equipment — from everyday neighbors, specialists and local rental businesses.':'Browse listings from individual owners, specialists, and established rental businesses — all in the same marketplace.',
  'Twenty categories. Two shelves each. One block.':'For home projects, work, travel, events, and everything in between.',
  'Whatever you love, your neighbors might pay you for it.':'A hobby or skill can become something more.',
  "Your hobby isn't just a hobby — it can be a little income, and the reason you finally meet the neighbors who love the same things. Sell what you rarely use, rent out the rest, and put your talent to work.":'Plants, handmade pieces, specialty tools, and hard-to-find gear can reach buyers and renters nearby.',
  'Green thumb?':'Grow plants?',
  'List your seedlings, seeds, houseplants, and seasonal flowers — your garden already grows more than you can keep.':'Offer seedlings, seeds, houseplants, or seasonal flowers nearby.',
  'Handy with a brush?':'Make things by hand?',
  "Show the block your paintings and crafts — and sell the pieces you're ready to pass on.":'List the pieces you want to sell, gift, or make available for shoots and events.',
  'Gear gathering dust?':'Rarely use it?',
  'That tool, kayak, or camera you barely touch — sell it, or rent it out and let it earn.':'A tool, kayak, or camera can be useful to someone else — and earn money for you.',
  'Need something?':'Need it once?',
  "Rent it from a neighbor before you buy — chances are it's already sitting on your block.":'Check nearby listings before you buy. The right item may already be close by.',
  'Rent before you buy. Earn from what you already own. Meet the people next door.':'Rent instead of buying. Earn from what you own. Find useful things nearby.',
  'From a spare shelf to your own shop.':'Start with one item.',
  'Start with what you already have, learn what people nearby need, and grow at your own pace.':'Publish your first listing, see what gets interest, and add more where demand is strongest.',
  'Photograph anything idle and put it on your shelf in about 30 seconds.':'Add photos, a clear description, your price, and available dates.',
  'See what your block wants':'Watch what gets interest',
  'Requests and earnings show you what neighbors keep asking for.':'Views, bookings, and earnings show which listings perform best.',
  'Own your niche':'Build on what works',
  'Go all in — wedding dresses, seedlings, costumes — and become the one everyone asks.':'Add similar items in the categories where you already see demand.',
  'Hobbyists and working pros both build their own niche here.':'Evorios works for individual owners and established rental businesses.',
  'Whether you want to earn or save — this is for you':'For people who list — and people who rent.',
  'List your items. Make money.':'Earn from items you already own.',
  'Got tools, gear, or equipment sitting idle? List them in 3 minutes. Every rental puts money in your pocket — deposit-protected and tracked.':'Set your price, availability, and terms. For rentals, you can add a refundable deposit and confirm each handoff by QR.',
  'Rent instead of buy. Save money.':'Use what you need without buying it.',
  'Need a pressure washer for one weekend? A camera kit for a trip? Rent from a verified neighbor. Fraction of the cost, zero storage.':'Compare nearby listings, choose your dates, and book the item for as long as you need it.',
  'One account — switch between Earn and Save anytime':'One account lets you list your own items and rent from others.',
  'What you already own can earn its keep':'Rarely use it? Let someone else put it to work.',
  'Camera gear, outdoor equipment and useful household items can earn instead of sitting idle. List them, choose when they are available, and stay in control.':'Camera gear, outdoor equipment, and useful household items may already be in demand nearby. You set the price and decide when each item is available.',
  'Need it for a weekend? Rent it.':'Need it for a few days? Rent it nearby.',
  'Why buy when your neighbor has it? Browse verified listings, pay with Stripe, pick up the same day.':'Compare listings, choose your dates, and book in the app.',
  'Three steps to your first rental':'How a rental works',
  'Snap list':'Create the listing',
  'Photo → AI fills title, category, and suggests price. Under 3 minutes from photo to live listing.':'Add photos. Evorios can suggest a title, category, and starting price — review and edit everything before publishing.',
  'Renter books pays':'Get booked',
  'Stripe payment, a refundable deposit hold, identity verified on both sides. You get notified instantly.':'The renter chooses dates and pays in the app. If required, a refundable deposit is held on the card.',
  'QR handoff earn':'Scan at pickup and return',
  'Renter scans QR on pickup, scans again on return. Every timestamp is legal evidence. Payout hits your account.':'Both sides scan the QR code at pickup and return. Once the rental is complete, the payout is sent to the owner.',
  'One item. Three ways to offer it.':'One item. Three ways to list it.',
  'Daily income':'Rent it out',
  'Daily, weekly, monthly. Deposit-protected.':'Offer it by the day, week, or month, with a refundable deposit when needed.',
  'One-time sale':'Sell it',
  'Sell it outright. No deposit, no calendar.':'Sell it once, with no rental calendar or return.',
  'Give freely':'Give it away',
  'No charge. No commission. Just goodwill.':'Pass it along to someone who can use it.',
  'Trust built in — no need to know each other first':'Clear records for both sides.',
  'Identity verified':'Profile details',
  'Stripe Identity — government ID + selfie. One-time per account.':'Review profile details, completed checks, and ratings before you book.',
  'Deposit protection':'Refundable deposit',
  "A refundable hold on the renter's card — released on return, claimable if there's damage.":"When required, a hold is placed on the renter's card and released after the item is returned.",
  'QR tracking':'QR handoff record',
  'Scan in, scan out. Every timestamp is legal evidence.':'The QR code records when an item is picked up and returned.',
  'Blind reviews':'Two-way reviews',
  'Both sides review independently. Published only when both submit.':'After a rental, owners and renters can review each other.',
  'Traveling? Rent locally.':'Rent bulky gear when you get there.',
  "Don't pack it all. Search by city, find verified owners, deposit-protected rentals wherever you land.":'Search by city and reserve outdoor, sports, or camera gear before your trip.',
  'No shipping. No hassle. Just rent what you need, where you are.':'Pack less and skip purchases for things you only need for a few days.',
  'Your AI guide. Always on.':'From photo to listing.',
  'No support tickets. No hold music. No waiting.':'Evorios can analyze a photo, suggest a category, and help draft the listing. You review every suggestion before it goes live.',
  'Speaks any language — so you can always reach out':'Use the assistant in the language that works for you.',
  'Open and install. That\'s it.':'Find what you need or list your first item.',
  'No Apple tax. No Google cut. Add to home screen in one tap.':'Use Evorios in your browser — no app store required.'
};

for (const [from,to] of Object.entries(replacements)) s = s.split(from).join(to);

const faq = [
  ['What is Evorios?','Evorios is a local marketplace for renting useful items nearby. You can also sell or give away items you own. Listings can come from individual owners and professional rental businesses.'],
  ['How much can I earn?','There is no fixed amount. Earnings depend on local demand, price, item condition, and availability. Start with a few useful listings and use your dashboard to see what gets booked.'],
  ['How do I create my first listing?','Create an account and add photos. Evorios can suggest a title, category, and starting price. Review the details, set your availability, and make any changes before you publish.'],
  ['What if there are not many listings near me yet?','That is normal for a new marketplace. Add a few useful items and share your page with neighbors, customers, or followers so local renters can discover them.'],
  ['What is the difference between renting and selling?','A rental is returned to the owner after the booked period. A sale transfers the item to the buyer permanently. Choose the option that fits each listing.'],
  ['How do payments work?','Renters pay in the app. Before checkout, they see the rental price, platform fees, and any refundable deposit. The payout timing is shown in the booking terms.'],
  ['Why does a rental item need a QR code?','The owner and renter scan the QR code at pickup and return. The booking keeps a record of when each handoff happened.'],
  ['How does the refundable deposit work?','When a deposit is required, a temporary hold is placed on the renter\'s card. The hold is released after the item is returned according to the terms shown in the app.'],
  ['What if there is a problem during a rental?','Message the other person in the app first. If you cannot resolve it together, open a request from the booking and add relevant photos, messages, or notes.'],
  ['How is my payment information protected?','Stripe processes card information, so Evorios does not store full card numbers. Enter payment details only on the official checkout page and never send them in a message.']
];

let i=0;
s=s.replace(/<details><summary>[\s\S]*?<\/summary><p>[\s\S]*?<\/p><\/details>/g,()=>{const [q,a]=faq[i++];return `<details><summary>${q}</summary><p>${a}</p></details>`;});
if(i!==faq.length) throw new Error(`Expected ${faq.length} FAQ entries, replaced ${i}`);
const faqJson=`<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})}</script>`;
s=s.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,tag=>tag.includes('FAQPage')?faqJson:tag);

fs.writeFileSync(file,s);
console.log('Polished US English landing-page copy.');

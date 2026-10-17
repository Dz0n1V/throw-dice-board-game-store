const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            currentLang: 'en',
            currentRoute: 'home',
            selectedGameId: null,
            searchQuery: '',
            sortBy: 'name',
            filterCategory: 'all',
            
            translations: {
                sr: {
                    home: 'Početna', gallery: 'Galerija', catalog: 'Katalog igara', account: 'Moj nalog', aboutUs: 'O nama',
                    rating: 'Ocena:', addedToCart: 'Dodato u korpu:', purchaseDone: 'Kupovina je uspešno finalizovana!',
                    confirmClearRatings: 'Da li ste sigurni da želite da obrišete SVE ocene igara? Ova radnja se ne može opozvati.',
                    confirmClearComments: 'Da li ste sigurni da želite da obrišete SVE komentare? Ova radnja se ne može opozvati.',
                    confirmClearHistory: 'Da li ste sigurni da želite trajno da obrišete istoriju porudžbina?',
                    promotions: 'Aktuelne akcije', topRated: 'Najbolje ocenjene igre',
                    search: 'Pretraži igre (naziv, opis, cena)...', sortName: 'Sortiraj po nazivu', sortPrice: 'Sortiraj po ceni',
                    allCategories: 'Sve kategorije', addToCart: 'Dodaj u korpu', cart: 'Korpa',
                    finalize: 'Finalizuj kupovinu', downloadCatalog: 'Preuzmi katalog',
                    clearRatings: 'Obriši sve ocene', clearComments: 'Obriši sve komentare', price: 'Cena:', votes: 'glasova',
                    catFamily: 'Porodične', catStrategy: 'Strateške', catParty: 'Zabavne',
                    nameHeader: 'Naziv', qtyHeader: 'Količina', priceHeader: 'Cena', actionHeader: 'Akcija',
                    total: 'Ukupno:', remove: 'Ukloni', emptyCart: 'Korpa je prazna.',
                    orderHistory: 'Istorija porudžbina', clearHistory: 'Očisti istoriju',
                    noOrders: 'Nemate prethodnih porudžbina.', orderPrefix: 'Porudžbina #',
                    totalPrice: 'Ukupno:', dateLabel: 'datum',
                    promo1: 'Veliki prolećni popust - 20% na sve strateške igre!',
                    promo2: 'Najava: Očekuje nas Catan turnir sledećeg vikenda.',
                    promo3: 'Novo: Proširen katalog sa 6 novih fantastičnih igara.',
                    desc1: 'Klasik trgovine i gradnje.',
                    desc2: 'Avantura vozovima širom sveta.',
                    desc3: 'Igra asocijacija i prelepih ilustracija.',
                    desc4: 'Kontrola korporacija na crvenoj planeti.',
                    desc5: 'Alternativna istorija Evrope 1920-ih.',
                    desc6: 'Industrijska revolucija u Engleskoj.',
                    desc7: 'Zabavna igra sa tajnim agentima i rečima.',
                    desc8: 'Ruski rulet sa mačkama.',
                    desc9: 'Igra za loše ljude.',
                    desc10: 'Izgradnja srednjovekovnih gradova i puteva.',
                    desc11: 'Kreiranje prelepih mozaika od pločica.',
                    desc12: 'Asimetrična borba za prevlast u šumi.',
                    desc13: 'Vikinški klanovi u doba Ragnaroka.',
                    desc14: 'Testiraj reflekse i moć zapažanja.',
                    desc15: 'Brza igra hvatanja totema.',
                    details: 'Detalji', backToCatalog: 'Nazad na katalog',
                    comments: 'Komentari', addComment: 'Dodaj komentar', yourName: 'Vaše ime',
                    yourComment: 'Vaš komentar', submit: 'Objavi', noComments: 'Još uvek nema komentara. Budite prvi!',
                    aboutHistory: 'Istorijat',
                    aboutMission: 'Misija',
                    aboutAwards: 'Nagrade i priznanja',
                    aboutWorkingHours: 'Radno vreme',
                    aboutContact: 'Kontakt',
                    aboutLocation: 'Naša lokacija',
                    aboutText1: 'Prodavnica društvenih igara Throw Dice osnovana je 2015. godine u Beogradu, iz ljubavi prema druženju, takmičenju i kvalitetnoj zabavi. Počeli smo kao mali klub igara u Bulevaru Kralja Aleksandra, a danas smo jedan od najvećih maloprodajnih lanaca društvenih igara u regionu.',
                    aboutText2: 'Naša misija je da povežemo ljude kroz igru – bilo da ste porodica, grupa prijatelja ili ozbiljni takmičari. Želimo da svako pronađe igru koja mu odgovara i da se kroz igru stvaraju lepe uspomene.',
                    aboutAward1: 'Najbolji maloprodajni lanac igara u Srbiji (2022, 2023) – nagrada "Igrač godine"',
                    aboutAward2: 'Specijalno priznanje za doprinos razvoju kulture igranja (Asocijacija "Igre bez granica")',
                    aboutAward3: 'Organizatori najvećeg turnira u Catan-u na Balkanu 2024. godine',
                    aboutHours: 'Ponedeljak – Petak: 10:00 – 20:00\nSubota: 10:00 – 18:00\nNedelja: zatvoreno',
                    aboutPhone: 'Telefon: +381 11 123 4567',
                    aboutEmail: 'Email: info@throwdice.rs',
                    aboutAddress: 'Adresa: Bulevar kralja Aleksandra 73, Beograd',
                    aboutMarkerNote: 'Pronađite nas u Bulevaru kralja Aleksandra 73, Beograd.',
                    // Gallery
                    galleryTitle: 'Galerija',
                    storePhotos: 'Fotografije prodavnice',
                    gamePhotos: 'Fotografije društvenih igara',
                    videoGallery: 'Video galerija',
                    videoPlaceholder1: 'Video snimak objašnjenja pravila i igranja društvene igre Katan',
                    videoPlaceholder2: 'Throw Dice promotivni video',
                    // Footer
                    copyright: '© 2026 Throw Dice · Created by Dz0n1V',
                    storeFront: 'Izlog prodavnice',
                    storeInterior: 'Unutrašnjost',
                    // Useful links section
                    usefulLinks: 'Korisni linkovi',
                    linkBgg: 'BoardGameGeek - Baza igara, recenzije, forum',
                    linkCatan: 'Catan - Zvanični sajt, pravila, turniri',
                    linkAsmodee: 'Asmodee - Izdavač popularnih igara',
                    visit: 'Posetite →'
                },
                en: {
                    home: 'Home', gallery: 'Gallery', catalog: 'Game Catalog', account: 'My Account', aboutUs: 'About Us',
                    rating: 'Rating:', addedToCart: 'Added to cart:', purchaseDone: 'Purchase completed successfully!',
                    confirmClearRatings: 'Are you sure you want to delete ALL game ratings? This action cannot be undone.',
                    confirmClearComments: 'Are you sure you want to delete ALL comments? This action cannot be undone.',
                    confirmClearHistory: 'Are you sure you want to permanently delete order history?',
                    promotions: 'Current Promotions', topRated: 'Top Rated Games',
                    search: 'Search games (name, description, price)...', sortName: 'Sort by Name', sortPrice: 'Sort by Price',
                    allCategories: 'All Categories', addToCart: 'Add to Cart', cart: 'Shopping Cart',
                    finalize: 'Finalize Purchase', downloadCatalog: 'Download Catalog',
                    clearRatings: 'Clear all ratings', clearComments: 'Delete all comments', price: 'Price:', votes: 'votes',
                    catFamily: 'Family', catStrategy: 'Strategy', catParty: 'Party',
                    nameHeader: 'Name', qtyHeader: 'Quantity', priceHeader: 'Price', actionHeader: 'Action',
                    total: 'Total:', remove: 'Remove', emptyCart: 'Cart is empty.',
                    orderHistory: 'Order History', clearHistory: 'Clear history',
                    noOrders: 'No previous orders.', orderPrefix: 'Order #',
                    totalPrice: 'Total:', dateLabel: 'date',
                    promo1: 'Big spring discount - 20% off all strategy games!',
                    promo2: 'Announcement: Catan tournament next weekend.',
                    promo3: 'New: Expanded catalog with 6 new fantastic games.',
                    desc1: 'A classic of trading and building.',
                    desc2: 'Train adventure across the world.',
                    desc3: 'Game of associations and beautiful illustrations.',
                    desc4: 'Corporate control on the red planet.',
                    desc5: 'Alternate history of Europe in the 1920s.',
                    desc6: 'Industrial revolution in England.',
                    desc7: 'Fun game with secret agents and words.',
                    desc8: 'Russian roulette with cats.',
                    desc9: 'Game for horrible people.',
                    desc10: 'Building medieval cities and roads.',
                    desc11: 'Creating beautiful tile mosaics.',
                    desc12: 'Asymmetric fight for forest dominance.',
                    desc13: 'Viking clans in the age of Ragnarok.',
                    desc14: 'Test your reflexes and observation skills.',
                    desc15: 'Fast-paced totem grabbing game.',
                    details: 'Details', backToCatalog: 'Back to catalog',
                    comments: 'Comments', addComment: 'Add comment', yourName: 'Your name',
                    yourComment: 'Your comment', submit: 'Post', noComments: 'No comments yet. Be the first!',
                    aboutHistory: 'History',
                    aboutMission: 'Mission',
                    aboutAwards: 'Awards & Recognitions',
                    aboutWorkingHours: 'Working Hours',
                    aboutContact: 'Contact',
                    aboutLocation: 'Our Location',
                    aboutText1: 'Throw Dice board game store was founded in 2015 in Belgrade, out of love for socializing, competition and quality entertainment. We started as a small game club in Bulevar Kralja Aleksandra Street, and today we are one of the largest board game retail chains in the region.',
                    aboutText2: 'Our mission is to connect people through games – whether you are a family, a group of friends or serious competitors. We want everyone to find a game that suits them and to create beautiful memories through play.',
                    aboutAward1: 'Best game retail chain in Serbia (2022, 2023) – "Player of the Year" award',
                    aboutAward2: 'Special recognition for contribution to the development of gaming culture (Association "Games Without Borders")',
                    aboutAward3: 'Organizers of the largest Catan tournament in the Balkans in 2024',
                    aboutHours: 'Monday – Friday: 10:00 – 20:00\nSaturday: 10:00 – 18:00\nSunday: closed',
                    aboutPhone: 'Phone: +381 11 123 4567',
                    aboutEmail: 'Email: info@throwdice.rs',
                    aboutAddress: 'Address: Bulevar kralja Aleksandra 73, Belgrade',
                    aboutMarkerNote: 'Find us at Bulevar kralja Aleksandra 73, Belgrade.',
                    galleryTitle: 'Gallery',
                    storePhotos: 'Store Photos',
                    gamePhotos: 'Board Game Photos',
                    videoGallery: 'Video Gallery',
                    videoPlaceholder1: 'A video explaining the rules and playing the board game Catan',
                    videoPlaceholder2: 'Throw Dice promotional video',
                    copyright: '© 2026 Throw Dice · Created by Dz0n1V',
                    storeFront: 'Store front',
                    storeInterior: 'Interior',
                    usefulLinks: 'Useful Links',
                    linkBgg: 'BoardGameGeek - Game database, reviews, forum',
                    linkCatan: 'Catan - Official site, rules, tournaments',
                    linkAsmodee: 'Asmodee - Publisher of popular games',
                    visit: 'Visit →'
                }
            },
            
            promotionsRaw: {
                sr: [{ id: 1, type: 'danger', textKey: 'promo1' }, { id: 2, type: 'info', textKey: 'promo2' }, { id: 3, type: 'success', textKey: 'promo3' }],
                en: [{ id: 1, type: 'danger', textKey: 'promo1' }, { id: 2, type: 'info', textKey: 'promo2' }, { id: 3, type: 'success', textKey: 'promo3' }]
            },

            menuItems: [
                { id: 'home', labelKey: 'home' },
                { id: 'gallery', labelKey: 'gallery' },
                { id: 'catalog', labelKey: 'catalog' },
                { id: 'account', labelKey: 'account' },
                { id: 'about', labelKey: 'aboutUs' }
            ],

            games: [
                { id: 1, nameSr: 'Katan', nameEn: 'Catan', category: 'family', price: 4500, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc1' },
                { id: 2, nameSr: 'Karta za vožnju', nameEn: 'Ticket to Ride', category: 'family', price: 5200, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc2' },
                { id: 3, nameSr: 'Diksit', nameEn: 'Dixit', category: 'family', price: 3800, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc3' },
                { id: 4, nameSr: 'Teraformiranje Marsa', nameEn: 'Terraforming Mars', category: 'strategy', price: 7500, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc4' },
                { id: 5, nameSr: 'Sajt', nameEn: 'Scythe', category: 'strategy', price: 8900, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc5' },
                { id: 6, nameSr: 'Mesing: Birmingham', nameEn: 'Brass: Birmingham', category: 'strategy', price: 8200, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc6' },
                { id: 7, nameSr: 'Šifrovana imena', nameEn: 'Codenames', category: 'party', price: 2500, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc7' },
                { id: 8, nameSr: 'Eksplodirajuće mačke', nameEn: 'Exploding Kittens', category: 'party', price: 2800, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc8' },
                { id: 9, nameSr: 'Karte protiv čovečanstva', nameEn: 'Cards Against Humanity', category: 'party', price: 3500, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc9' },
                { id: 10, nameSr: 'Karkason', nameEn: 'Carcassonne', category: 'family', price: 3900, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc10' },
                { id: 11, nameSr: 'Azul', nameEn: 'Azul', category: 'family', price: 5500, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc11' },
                { id: 12, nameSr: 'Koren', nameEn: 'Root', category: 'strategy', price: 7800, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc12' },
                { id: 13, nameSr: 'Krvavi bes', nameEn: 'Blood Rage', category: 'strategy', price: 9500, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc13' },
                { id: 14, nameSr: 'Dobl', nameEn: 'Dobble', category: 'party', price: 1800, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc14' },
                { id: 15, nameSr: 'Džungla sprint', nameEn: 'Jungle Speed', category: 'party', price: 2200, rating: 0, ratingSum: 0, ratingCount: 0, descKey: 'desc15' }
            ],
            
            cart: [],
            orderHistory: [],
            userVoted: {},
            comments: {},
            newCommentAuthor: '',
            newCommentText: ''
        };
    },
    computed: {
        currentRouteName() {
            if (this.currentRoute === 'game') {
                const game = this.selectedGame;
                return game ? this.gameName(game) : '';
            }
            const item = this.menuItems.find(m => m.id === this.currentRoute);
            return item ? this.t(item.labelKey) : '';
        },
        pageTitle() {
            const base = 'Throw Dice | ';
            if (this.currentRoute === 'game' && this.selectedGame) {
                return base + this.gameName(this.selectedGame);
            }
            return base + this.currentRouteName;
        },
        selectedGame() {
            if (!this.selectedGameId) return null;
            return this.games.find(g => g.id === this.selectedGameId);
        },
        gameComments() {
            if (!this.selectedGameId) return [];
            return this.comments[this.selectedGameId] || [];
        },
        topGames() {
            return [...this.games].sort((a, b) => b.rating - a.rating).slice(0, 3);
        },
        filteredGames() {
            let result = [...this.games];
            if (this.filterCategory !== 'all') {
                result = result.filter(g => g.category === this.filterCategory);
            }
            if (this.searchQuery) {
                const q = this.searchQuery.toLowerCase();
                result = result.filter(g => {
                    const nameMatch = this.gameName(g).toLowerCase().includes(q);
                    const descMatch = this.gameDesc(g).toLowerCase().includes(q);
                    const priceMatch = g.price.toString().includes(q);
                    return nameMatch || descMatch || priceMatch;
                });
            }
            result.sort((a, b) => {
                if (this.sortBy === 'name') return this.gameName(a).localeCompare(this.gameName(b));
                if (this.sortBy === 'price') return a.price - b.price;
            });
            return result;
        },
        cartTotal() {
            return this.cart.reduce((sum, item) => sum + (item.game.price * item.qty), 0);
        },
        promotions() {
            return this.promotionsRaw[this.currentLang].map(p => ({ ...p, text: this.t(p.textKey) }));
        },
        categoriesFilter() {
            return [
                { value: 'all', labelKey: 'allCategories' },
                { value: 'family', labelKey: 'catFamily' },
                { value: 'strategy', labelKey: 'catStrategy' },
                { value: 'party', labelKey: 'catParty' }
            ];
        },
        breadcrumbs() {
            const crumbs = [{ name: this.t('home'), route: 'home' }];
            if (this.currentRoute === 'catalog') {
                crumbs.push({ name: this.t('catalog'), route: 'catalog' });
            } else if (this.currentRoute === 'game' && this.selectedGame) {
                crumbs.push({ name: this.t('catalog'), route: 'catalog' });
                crumbs.push({ name: this.gameName(this.selectedGame), route: 'game', isActive: true });
            } else if (this.currentRoute !== 'home') {
                crumbs.push({ name: this.currentRouteName, route: this.currentRoute });
            }
            return crumbs;
        },

        mapUrl() {
        const baseUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.5!2d20.4749!3d44.8051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab5a2b4c9b9%3A0x5c8b6f3e8e5a6f0!2sElektrotehni%C4%8Dki%20fakultet%20Univerziteta%20u%20Beogradu!5e0!3m2!1ssr!2srs!4v1717800000000!5m2!1ssr!2srs&q=44.8051,20.4749";
        const langParam = this.currentLang === 'en' ? '&hl=en' : '&hl=sr';
        return baseUrl + langParam;
        }
    },
    watch: {
        currentRoute: 'updateTitle',
        currentLang: 'updateTitle'
    },
    methods: {
        t(key) { return this.translations[this.currentLang][key] || key; },
        gameName(game) { return this.currentLang === 'sr' ? game.nameSr : game.nameEn; },
        gameDesc(game) { return this.t(game.descKey); },
        categoryName(categoryValue) {
            const map = { 'family': 'catFamily', 'strategy': 'catStrategy', 'party': 'catParty' };
            return this.t(map[categoryValue]);
        },
        updateTitle() { document.title = this.pageTitle; document.documentElement.lang = this.currentLang; },
        changeLang(lang, event) {
            this.currentLang = lang;
            localStorage.setItem('prefLang', lang);
            if(event) event.target.blur();
            this.updateTitle();
        },
        navigate(routeId, gameId = null) {
            this.currentRoute = routeId;
            this.selectedGameId = gameId;
            if (routeId === 'game' && gameId) history.pushState({}, '', `#game/${gameId}`);
            else history.pushState({}, '', `#${routeId}`);
            this.updateTitle();
        },
        goBackToCatalog() { this.navigate('catalog'); },
        downloadPDF(event) { if(event) event.target.blur(); window.print(); },
        rateGame(game, score, event) {
            if(event) event.target.blur();
            if (this.userVoted[game.id]) return;
            this.userVoted[game.id] = score;
            localStorage.setItem('tdUserVotes', JSON.stringify(this.userVoted));
            game.ratingSum += score;
            game.ratingCount++;
            game.rating = parseFloat((game.ratingSum / game.ratingCount).toFixed(1));
            const savedRatings = JSON.parse(localStorage.getItem('tdRatings')) || {};
            savedRatings[game.id] = { sum: game.ratingSum, count: game.ratingCount, avg: game.rating };
            localStorage.setItem('tdRatings', JSON.stringify(savedRatings));
        },
        clearAllRatings(event) {
            if(event) event.target.blur();
            if (!confirm(this.t('confirmClearRatings'))) return;
            this.games.forEach(game => { game.rating = 0; game.ratingSum = 0; game.ratingCount = 0; });
            this.userVoted = {};
            localStorage.removeItem('tdUserVotes');
            localStorage.removeItem('tdRatings');
        },
        clearAllComments(event) {
            if(event) event.target.blur();
            if (!confirm(this.t('confirmClearComments'))) return;
            this.comments = {};
            localStorage.removeItem('tdComments');
        },
        addToCart(game) {
            const existing = this.cart.find(item => item.game.id === game.id);
            if (existing) existing.qty++;
            else this.cart.push({ game: game, qty: 1 });
            this.saveCart();
            alert(`${this.t('addedToCart')} ${this.gameName(game)}`);
        },
        removeFromCart(index) { this.cart.splice(index, 1); this.saveCart(); },
        saveCart() { sessionStorage.setItem('tdCart', JSON.stringify(this.cart)); },
        finalizePurchase() {
            if (this.cart.length === 0) return;
            const order = { items: [...this.cart], total: this.cartTotal, date: new Date().toLocaleString() };
            this.orderHistory.push(order);
            localStorage.setItem('tdOrderHistory', JSON.stringify(this.orderHistory));
            this.cart = [];
            this.saveCart();
            alert(this.t('purchaseDone'));
        },
        clearOrderHistory(event) {
            if(event) event.target.blur();
            if (confirm(this.t('confirmClearHistory'))) {
                this.orderHistory = [];
                localStorage.removeItem('tdOrderHistory');
            }
        },
        loadComments() {
            const stored = localStorage.getItem('tdComments');
            this.comments = stored ? JSON.parse(stored) : {};
        },
        saveComments() { localStorage.setItem('tdComments', JSON.stringify(this.comments)); },
        addComment(event) {
            if(event) event.preventDefault();
            if (!this.newCommentAuthor || !this.newCommentText) return;
            const gameId = this.selectedGameId;
            if (!gameId) return;
            if (!this.comments[gameId]) this.comments[gameId] = [];
            this.comments[gameId].push({ id: Date.now(), author: this.newCommentAuthor, text: this.newCommentText, date: new Date().toLocaleString() });
            this.saveComments();
            this.newCommentAuthor = '';
            this.newCommentText = '';
        }
    },
    mounted() {
        const savedLang = localStorage.getItem('prefLang');
        if (savedLang === 'sr' || savedLang === 'en') this.currentLang = savedLang;
        const savedCart = sessionStorage.getItem('tdCart');
        if (savedCart) this.cart = JSON.parse(savedCart);
        const savedHistory = localStorage.getItem('tdOrderHistory');
        if (savedHistory) this.orderHistory = JSON.parse(savedHistory);
        const savedVotes = JSON.parse(localStorage.getItem('tdUserVotes'));
        if (savedVotes) this.userVoted = savedVotes;
        const savedRatings = JSON.parse(localStorage.getItem('tdRatings'));
        if (savedRatings) {
            this.games.forEach(g => {
                if (savedRatings[g.id]) {
                    g.ratingSum = savedRatings[g.id].sum;
                    g.ratingCount = savedRatings[g.id].count;
                    g.rating = savedRatings[g.id].avg;
                }
            });
        }
        this.loadComments();
        const hash = window.location.hash.slice(1);
        if (hash.startsWith('game/')) {
            const id = parseInt(hash.split('/')[1]);
            if (id) this.navigate('game', id);
        } else if (hash && this.menuItems.some(m => m.id === hash)) this.navigate(hash);
        this.updateTitle();
    
        // Browser back/forward support
        window.addEventListener('popstate', () => {
            const hash = window.location.hash.slice(1);
            if (hash.startsWith('game/')) {
                const id = parseInt(hash.split('/')[1]);
                if (id) this.navigate('game', id);
            } else if (hash) {
                if (this.menuItems.some(m => m.id === hash)) this.navigate(hash);
                else if (hash === 'catalog') this.navigate('catalog');
            } else {
                this.navigate('home');
            }
        });
    }
});

app.mount('#app');
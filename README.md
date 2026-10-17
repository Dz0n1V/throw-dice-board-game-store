# Throw Dice – Board Game Store

A responsive, bilingual (English / Serbian) web storefront for a fictional board game shop. Browse a catalog of 15 games, search and sort, rate and comment, fill a shopping cart and place orders – all running entirely in the browser with no backend.

Built with **Vue 3**, **Bootstrap**, **HTML5**, **CSS3** and vanilla **JavaScript**.

---

## Features

### Storefront
- **Single-page app** with hash-based routing (`#home`, `#catalog`, `#game/4`, …), working browser back/forward buttons and deep links
- **Bilingual UI** (English by default, Serbian available) with instant language switching; the chosen language is remembered across visits
- **Dynamic page title** and **breadcrumbs** that reflect the current page, plus a highlighted active menu item
- **Responsive layout** (collapsible navbar, Bootstrap grid) for desktop, tablet and mobile

### Catalog
- 15 games across three categories: **Family**, **Strategy** and **Party**
- **Live search** by name, description or price
- **Sorting** by name or price and **filtering** by category
- **Game detail pages** with description, price, average rating and comments
- **Printable catalog** – the "Download Catalog" button opens the print dialog with a print-optimized stylesheet showing only the games currently listed (choose *Save as PDF*)

### Ratings and comments
- 1–5 star rating, one vote per game per browser, with a live average and vote count
- Per-game comment threads with author name and timestamp
- Home page automatically shows the **top three rated games**

### Cart and orders ("My Account")
- Add games to the cart, adjust quantities, remove items, see the running total
- Checkout empties the cart and moves the order into a persistent **order history**

### Other pages
- **Gallery** – store photos, game photos and a video gallery (game tutorial and promo video)
- **About Us** – history, mission, awards, opening hours, contact details and an embedded Google Map
- **Home** – promotions, tournament announcements and partner link banners (BoardGameGeek, Catan, Asmodee)

---

## Tech Stack

| Area | Technology |
|---|---|
| UI framework | Vue 3 (global build, no bundler) |
| Styling | Bootstrap 5.3 + custom CSS (`style.css`) |
| Language | HTML5, CSS3, JavaScript (ES6+) |
| Persistence | `localStorage` and `sessionStorage` |
| Maps | Google Maps embed |

No build step, no dependencies to install – all libraries are bundled in the repository.

---

## Getting Started

Clone the repository and open `index.html` in any modern browser:

```bash
git clone https://github.com/Dz0n1V/throw-dice-board-game-store.git
cd throw-dice-board-game-store
```

Or serve it locally (recommended, so videos and the map load reliably):

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

---

## Project Structure

```
.
├── index.html        # Application shell and all page templates
├── app.js            # Vue app: state, routing, translations, cart, ratings
├── style.css         # Custom styles and print rules
├── css/              # Bootstrap 5 stylesheet
├── js/               # Vue and Bootstrap bundles
├── boardGames/       # Game photos
├── shopImages/       # Store photos
└── videos/           # Gallery videos
```

---

## How Data Is Stored

Everything is persisted client-side, so no server is required:

| Data | Storage | Key |
|---|---|---|
| Shopping cart | `sessionStorage` | `tdCart` |
| Order history | `localStorage` | `tdOrderHistory` |
| Ratings (sum, count, average) | `localStorage` | `tdRatings` |
| The current user's votes | `localStorage` | `tdUserVotes` |
| Comments | `localStorage` | `tdComments` |
| Language preference | `localStorage` | `prefLang` |

Clearing site data in your browser resets the store to its initial state.

---

## Possible Improvements

- Replace the print dialog with generated PDF files (e.g. jsPDF)
- Add a backend and database for shared ratings, comments and real orders
- Add per-game details such as player count, recommended age and play time
- Split `app.js` into components and add a build tool (Vite)

---

## License

Released under the [MIT License](LICENSE).

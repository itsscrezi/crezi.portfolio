# CREZI portfolio — GitHub Pages

A static, responsive artist/producer portfolio. No build tools are required.

## Files you can safely edit
- `content.js` — music links, descriptions, social links, beat listings, email form endpoint.
- `assets/crezi-portrait.png` — replace this image with another portrait using the same filename.
- `index.html` — page structure and visible text.
- `styles.css` — visual design.
- `script.js` — language, theme, music player and form behaviour.

## Publish free with GitHub Pages
1. Sign in to GitHub.
2. Create a **public** repository named exactly `YOUR-GITHUB-USERNAME.github.io`.
3. Upload all files and the `assets` folder from this project (not the ZIP itself).
4. Open repository **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**.
6. Select branch `main`, folder `/ (root)`, then Save.
7. Your site will be at `https://YOUR-GITHUB-USERNAME.github.io`.

GitHub Pages can take a few minutes to publish after the first setup.

## Connect the contact form
The form is designed for Formspree and sends without opening the visitor's email app.
1. Create a form at https://formspree.io/ and set its destination to `itsscrezi@gmail.com`.
2. Verify the destination email address with Formspree.
3. Copy the form endpoint, shaped like `https://formspree.io/f/xxxxxxxx`.
4. Paste it into `formspreeEndpoint` in `content.js`.
5. Commit the change to GitHub.

Until this is configured, the form displays a helpful message and the direct email link remains available. Formspree's free tier has submission limits; check its current plan before launch.

## Add or edit music
Edit the `music` array in `content.js`. Each entry supports:
- `title`, `role`, `description`
- `spotify` (Spotify track URL)
- `youtube` (optional YouTube link)
- `cover` (optional image path)

Spotify players are loaded only when a visitor presses “Listen here”. The actual player is provided by Spotify.

## Add beats
Add beat objects to the `beats` array in `content.js`. Example:
```js
{
  title: "BEAT NAME",
  genre: "Afro Pop",
  bpm: "100",
  price: "€25",
  preview: "assets/previews/beat-preview.mp3",
  checkoutUrl: "YOUR_SECURE_CHECKOUT_LINK",
  downloadUrl: ""
}
```

**Important payment and download limitation:** GitHub Pages is static hosting. It cannot securely process payments, verify a purchase, hide a buyer-only download URL, or automatically unlock a private WAV/MP3. Do not upload full-quality paid files or private download links into `content.js` or a public GitHub repository. A real checkout and secure delivery need a payment/digital-delivery provider or a backend. Payment providers may require an adult account holder and identity verification; since crezi is 16, check the provider's age rules and involve a parent/guardian before setting up payments. A direct bank transfer may reveal the account holder's name to the payer, so don't promise anonymous bank payments.

## Languages and theme
The header switcher supports English, Albanian, Dutch, French and German. The dark/light toggle is saved in the visitor's browser. To change translations, edit the `translations` object in `script.js`.

## Offline
The service worker caches the main page and portrait so the basic site shell can open after a previous successful visit. Spotify embeds, external links and contact submissions still need an internet connection. A first visit cannot work offline.

## Notes
- The `credits.html` page explains the third-party services.
- `404.html` is the custom not-found page.
- The red-square favicon is `favicon.svg`.
- The website is designed desktop-first but responsive on mobile.

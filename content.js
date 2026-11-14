/*
  CREZI CONTENT EDITOR
  --------------------
  Safe place to change text, music links, beat listings and photos.
  Keep the quotes, commas and brackets. Do not edit script.js or styles.css
  unless you want to change the website's behaviour or design.
*/
window.CREZI_CONTENT = {
  email: "itsscrezi@gmail.com",
  portrait: "assets/crezi-portrait.png",
  music: [
    {
      title: "A E DIN",
      role: "Own release",
      description: "A release by crezi.",
      spotify: "https://open.spotify.com/track/72GipCAxudNTFmI6Xl0CUi?si=75cd1445114c4792",
      youtube: "https://www.youtube.com/@itsscrezi",
      year: "",
      cover: ""
    },
    {
      title: "PIANO!",
      role: "Production credit",
      description: "Produced by crezi, released with AyFlori.",
      spotify: "https://open.spotify.com/track/4PqTVcr15EeWhJThgXP8pj?si=1e16f8dd8c884def",
      youtube: "",
      year: "",
      cover: ""
    }
  ],
  /*
    Add beats here when you're ready. Example:
    {
      title: "BEAT NAME",
      genre: "Afro Pop",
      bpm: "100",
      price: "€25",
      preview: "assets/previews/beat-preview.mp3",
      checkoutUrl: "YOUR_SECURE_CHECKOUT_LINK",
      downloadUrl: ""
    }
    IMPORTANT: Never put paid full-quality beat files or secret download links
    in this public file. A static GitHub Pages site cannot securely unlock files.
  */
  beats: [],
  socials: {
    instagram: "https://www.instagram.com/itsscrezi/",
    tiktok: "https://www.tiktok.com/@itsscrezi",
    youtube: "https://www.youtube.com/@itsscrezi",
    spotify: "https://open.spotify.com/artist/3qm3DDhWwc61SOjXkeu8eL"
  },
  // Paste your Formspree endpoint here after creating a free form.
  // Example format: https://formspree.io/f/xxxxxxxx
  formspreeEndpoint: ""
};

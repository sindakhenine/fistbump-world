// Which phone stores sell Fistbump today. Switched on by hand on launch day as each store
// approves (docs/TODO.md row 265): until then /get sends phones to the web app, and the home
// page shows "Coming soon" instead of that store's button.
window.FISTBUMP_STORES = {
  ios: { live: true, url: 'https://apps.apple.com/app/id6825308934' },
  android: { live: true, url: 'https://play.google.com/store/apps/details?id=world.fistbump.app' },
  web: 'https://app.fistbump.world/',
};

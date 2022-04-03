const critical = require('critical');
critical.generate({
  base: 'test/',
  src: 'http/fire/gde005.html',
  target: {
    css: 'http/fire/assets/merge.css',
  },
  dimensions: [
    {
      height: 200,
      width: 500,
    },
    {
      height: 900,
      width: 1200,
    },
  ],
});
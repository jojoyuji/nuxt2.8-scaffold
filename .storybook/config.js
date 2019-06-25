// /.storybook/config.js
import { configure } from '@storybook/vue';

import '@/assets/css/tailwind.css'

function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

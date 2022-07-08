const fs = require('fs');

const components = ['VPFeature','VPFeatures'];
const themePath = 'node_modules/vitepress/dist/client/theme-default/components/'

components.forEach(component=>{
    fs.copyFileSync(`backup-components/${component}.vue`, `${themePath}${component}.vue`);
})
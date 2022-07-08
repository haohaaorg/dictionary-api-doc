const glob = require('glob');
const fs   = require('fs');

/**
 * 1. rename('docs','toReadme'); // Find index.md and rename it to README.md
 * 2. rename('docs','toIndex'); // Find README.md and rename it to index.md
 * @param String | directory
 */
 function rename(dir,type) {

    glob( `${dir}/**/*.md`, function( err, files ) {
       
       files.forEach((file)=>{
           const dirArr   = file.split('/');
           const fileName = dirArr.pop();

           if(type === 'toIndex'){
                const files = ['README.md','Readme.md','readme.md'];
                if(!files.includes(fileName)) return;
                fs.renameSync(file,`${dirArr.join("/")}/index.md`);
                return;
           }

           if(type === 'toReadme'){
                const files = ['INDEX.md','Index.md','index.md'];
                if(!files.includes(fileName)) return;
                fs.renameSync(file,`${dirArr.join("/")}/README.md`);
            }

       })
       
    });

}

rename('docs','toIndex');
// rename('docs','toReadme');
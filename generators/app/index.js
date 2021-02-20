const Generator = require('yeoman-generator');

module.exports = class extends Generator {
   //用户交互方法
   promptiong  () {
      return this.prompt([{
         type: 'input',
         name: 'name', 
         message: 'Your project name',
         default: this.appname
      }])
      .then(answers => {
         this.answers = answers;
      })
   }
   //写入文件方法
   writing () {
      //不在像之前只是写入单个文件, 需要批量把准备好的结构批量生成
      //把每一文件都通过模板转换到目标路径: 利用数组,循环的方式批量的生成每一个文件
      const templates = [
         '.browserslistrc',
         '.editorconfig',
         '.env.development',
         '.env.production',
         '.eslintrc.js',
         '.gitignore',
         'babel.config.js',
         'package.json',
         'postcss.config.js',
         'README.md',
         'public/favicon.ico',
         'public/index.html',
         'src/App.vue',
         'src/main.js',
         'src/router.js',
         'src/assets/logo.png',
         'src/components/HelloWorld.vue',
         'src/store/actions.js',
         'src/store/getters.js',
         'src/store/index.js',
         'src/store/mutations.js',
         'src/store/state.js',
         'src/utils/request.js',
         'src/views/About.vue',
         'src/views/Home.vue',
      ];
      //遍历生成每一个文件
      templates.forEach(item => {
         //item => 为每一模板在目标路径下生成相对应的文件
         this.fs.copyTpl(
            this.templatePath(item),
            this.destinationPath(item),
            this.answers
         );
      });
   }
};
const header = require('./page/header.tpl');
const $ = require('jquery');
document.getElementsByClassName('home-app')[0].innerHTML = header();
$('.banner_link').html('dafdfadf');

var headerTpl = require('./widget/header/header.tpl');

var data2 = require('./data.yaml')
var data = {
  navCon: [
    {
      class: "nav-item home",
      href: "#",
      title: "主站",
      i: "bili-icon",
      name: "主站",
      div: 0
    }, {
      class: "nav-item home",
      href: "#",
      title: "画友",
      name: "画友",
      div: 0
    }
  ]
};
$('.bili-header').html(headerTpl(data2));

var headerTpl = require('./header.ejs');
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
$('nav-con').html(headerTpl(data));

shots = new Shots();
shots.fetch();
var city = new City;
var shotview = new ShotView({model: city});

$(document.body).html(shotview.el);
/**
 * Created with JetBrains WebStorm.
 * User: zappa
 * Date: 1/20/13
 * Time: 4:05 PM
 * To change this template use File | Settings | File Templates.
 */



var human = function(spec) {
    var that = {},
        name = spec.name || 'aieie',
        surname = spec.surname || 'brazorf';

    that.greet = function() {
        return ('Hi, I am ' + name + ' '+ surname);
    };

    that.getName = function() {
        return name;
    };

    that.getSurname = function() {
        return surname;
    };

    return that;
};

var italian = function(spec) {
    var that = human(spec);

    that.swear = function() {
        //properties of super are private!
        return ('FY by ' +  that.name + ' ' + that.surname);
    };

    that.swearCorrectly = function () {
        //access private properties by super interface
        return ('FY by ' +  that.getName() + ' ' + that.getSurname());
    };

    return that;
};


var pino = italian({name: 'pino', surname: 'scotto'});

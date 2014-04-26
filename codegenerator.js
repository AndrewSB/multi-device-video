//Andrew

//JS function that gives a random 3 character code

module.exports = {
  getCode: function () {
    var cipher = "";
    var bank = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( var i=0; i < 3; i++ )
        cipher += bank.charAt(Math.floor(Math.random() * bank.length));

    return cipher;
  }
};

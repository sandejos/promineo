const chai = window.chai
var expect = chai.expect;

context('WarGameFunctions', function() {
    context('#concatenate', function(){
        it('Should put together two strings', function(){
           var x = concatenate("Hey ", "Whats up");
                expect(x).to.equal(`Hey Whats up`);
        });

    });

});

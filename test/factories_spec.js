describe('factories', function() {
    "use strict";

    beforeEach(module('factories'));

    var factoryUT;
    var $log;

    beforeEach(inject(function(_factoryUT_, _$log_) {
        factoryUT = _factoryUT_;
        $log = _$log_;
        sinon.stub($log, 'warn', function() {});
    }));

    describe('when invoked', function() {

        beforeEach(function() {
            factoryUT.ook();
        });

        it('should say Ook', function() {
            expect($log.warn.callCount).to.equal(1);
            expect($log.warn.args[0][0]).to.equal('Ook.');
        });
    });
});

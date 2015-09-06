describe('http', function() {
    "use strict";

    beforeEach(module('HttpRequestExample'));

    var httpReq;
    var $httpBackend;

    beforeEach(inject(function(_httpReq_, _$httpBackend_) {
        httpReq = _httpReq_;
        $httpBackend = _$httpBackend_;
    }));

    describe('when sending a message', function() {
        beforeEach(function() {
            $httpBackend.expectGET('http://it-ebooks-api.info/v1/search/JavaScript')
            .respond(200, {message: 'Ook.', id: 0});

            httpReq.sendMessage();
            $httpBackend.flush();
        });

        it('should send an HTTP GET request', function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var student_service_1 = require("./student.service");
describe('StudentService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(student_service_1.StudentService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=student.service.spec.js.map
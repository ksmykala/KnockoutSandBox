"use strike";

var Company = function(index, name, jobs) {
    this.index = index;
    this.name = name;
    this.jobs = jobs;
}

var Job = function(name, salary) {
    this.name = name;
    this.salary = salary;
}

var BindingsViewModel = function () {
    var self = this;

    self.plainText = "Plain Text";

    self.availableCompanies = ko.observableArray([
        new Company(0, "Google", [new Job("QA", 1999.99), new Job("Developer", 2000), new Job("CEO", 1.99^10)]),
        new Company(1, "Yahoo", [new Job("Architect", 2000), new Job("PM", 10124)]),
        new Company(2, "NoName Company", [new Job("Tester", 666.666), new Job("Awesome driver", 2500), new Job("Nobody", 9999)]),
        new Company(3, "Company Without Jobs")
    ]);

    self.selectedCompany = ko.observable(0);

    self.getJobsInSelectedCompany = function() {
        return self.availableCompanies()[self.selectedCompany()].jobs;
    };
}

var viewModel = new BindingsViewModel();

ko.applyBindings(viewModel);
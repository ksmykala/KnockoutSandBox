"use strike";

var Company = function (index, name, jobs) {
    this.index = index;
    this.name = name;
    this.jobs = jobs;
}

var Job = function (name, salary) {
    this.name = name;
    this.salary = salary;
}

var BindingsViewModel = function () {
    var self = this;

    self.plainText = "Plain Text";

    self.availableCompanies = ko.observableArray([
        new Company(0, "Google", [new Job("QA", 1999.99), new Job("Developer", 2000), new Job("CEO", 1.99 ^ 10)]),
        new Company(1, "Yahoo", [new Job("Architect", 2000), new Job("PM", 10124)]),
        new Company(2, "NoName Company", [new Job("Tester", 666.666), new Job("Awesome driver", 2500), new Job("Nobody", 9999)]),
        new Company(3, "Company Without Jobs")
    ]);

    self.selectedCompany = ko.observable();

    self.getJobsInSelectedCompany = ko.computed(function () {
        if (self.selectedCompany() !== undefined) {
            return self.availableCompanies()[self.selectedCompany()].jobs;
        }
        else {
            return undefined;
        }
    });

    self.showPlanetElement = function (elem) {
        if (elem.nodeType === 1)
            $(elem).hide().show('slide');
    }
    self.hidePlanetElement = function (elem) {
        if (elem.nodeType === 1)
            $(elem).hide('slide', function () { $(elem).remove(); });
    }
}

ko.bindingHandlers.toggleWizardSection = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        var duration = allBindings.get('duration') || 400;

        if (valueUnwrapped === undefined)
            $(element).hide(duration);
        else
            $(element).show(duration);
    }
};

var viewModel = new BindingsViewModel();

ko.applyBindings(viewModel);
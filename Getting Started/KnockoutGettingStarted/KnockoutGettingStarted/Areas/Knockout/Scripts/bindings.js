"use strike";

var Company = function(index, name) {
    this.index = index;
    this.name = name;
}

var BindingsViewModel = function () {
    var self = this;

    self.plainText = "Plain Text";

    self.availableCompanies = ko.observableArray([
        new Company(0, "Future Processing"),
        new Company(1, "Sii"),
        new Company(2, "BI-Technologies")
    ]);

    self.selectedCompany = ko.observable(0);

}

var viewModel = new BindingsViewModel();

ko.applyBindings(viewModel);
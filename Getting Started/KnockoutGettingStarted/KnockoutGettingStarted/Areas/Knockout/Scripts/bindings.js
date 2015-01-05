"use strike";

var Company = function(index, name) {
    this.index = index;
    this.name = name;
}

var BindingsViewModel = function () {
    var self = this;

    self.plainText = "Plain Text";

    self.companies = {
        available: ko.observableArray([
            new Company(0, "Future Processing"),
            new Company(1, "Sii"),
            new Company(2, "BI-Technologies")
        ]),
        selected: ko.observable()
    };

}

var viewModel = new BindingsViewModel();

ko.applyBindings(viewModel);
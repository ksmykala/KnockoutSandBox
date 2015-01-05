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

ko.bindingHandlers.toggleWizardSection = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);

        if (valueUnwrapped === undefined)
            $(element).css('display', 'none');
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        var duration = allBindings.get('duration') || 400;

        if(valueUnwrapped === undefined)
            $(element).hide(duration);
        else
            $(element).show(duration);
    }
};

var viewModel = new BindingsViewModel();

ko.applyBindings(viewModel);
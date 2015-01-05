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

        if (valueUnwrapped === undefined)
            $(element).hide(duration);
        else
            $(element).show(duration);
    }
};

ko.bindingHandlers.renderJobs = {
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var template = allBindings.get('template');

        ko.renderTemplate(template, value, {}, element, 'replaceChildren');
    }
};
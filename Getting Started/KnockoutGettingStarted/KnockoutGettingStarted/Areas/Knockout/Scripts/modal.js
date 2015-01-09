window.APP = {
    setupKnockoutSteps: function (viewModel, numberOfSteps) {
        var self = viewModel;
        self.steps = [];
        self.currentStep = ko.observable(0);

        for (var i = 0; i < numberOfSteps; i++) {
            var visible = (self.currentStep() === i) ? true : false
            self.steps[i] = { IsVisible: ko.observable(visible) };
        }

        self.nextStep = function () {
            self.currentStep(self.currentStep() + 1);
            if (self.currentStep() <= (numberOfSteps - 1)) {
                self.hideSteps();
                self.steps[self.currentStep()].IsVisible(true);
            } else {
                self.currentStep(numberOfSteps - 1);
            }
        }

        self.prevStep = function () {
            self.currentStep(self.currentStep() - 1);
            if (self.currentStep() >= 0) {
                self.hideSteps();
                self.steps[self.currentStep()].IsVisible(true);
            } else {
                self.currentStep(0);
            }
        }

        self.hideSteps = function () {
            for (step in self.steps) {
                self.steps[step].IsVisible(false);
            }
        }

        self.canGoBack = ko.computed(function () {
            return self.currentStep() > 0;
        });

        self.canGoFwd = ko.computed(function () {
            return self.currentStep() < (numberOfSteps - 1);
        });

    }
}

function viewModel() {
    var self = this;
}

var viewModel = new viewModel();

APP.setupKnockoutSteps(viewModel, 3);

ko.applyBindings(viewModel);
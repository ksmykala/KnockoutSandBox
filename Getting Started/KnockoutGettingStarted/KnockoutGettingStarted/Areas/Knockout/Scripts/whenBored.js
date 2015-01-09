"use strike";

var PreviousItem = function(content) {
    this.content = content;
    this.count = ko.observable(1);

    this.increaseCount = function() {
        this.count(this.count() + 1);
    }
}

var ViewModel = function (againstBoringList) {
    var self = this;

    self.selectedAgainstBoringItem = ko.observable();
    self.againstBoringList = ko.observableArray(againstBoringList);
    self.previousItems = ko.observableArray();

    self.getRandomEvent = function () {
        var newSelectedItem;
        var listLength = self.againstBoringList().length;

        if (listLength == 0) {
            newSelectedItem = "There's no item to show";
        }
        else if (listLength > 1) {
            do {
                var randomIndex = Math.floor(Math.random() * listLength);
                newSelectedItem = self.againstBoringList()[randomIndex];

                if (newSelectedItem == undefined || newSelectedItem == '') {
                    newSelectedItem = "Syntax error in source file - you cannot use empty line as item";
                    break;
                }

            } while (newSelectedItem == self.selectedAgainstBoringItem())

        } else {
            newSelectedItem = self.againstBoringList()[0];
        }

        self.selectedAgainstBoringItem(newSelectedItem);

        var match = ko.utils.arrayFirst(self.previousItems(), function(item) {
            if (newSelectedItem === item.content) {
                item.increaseCount();
                return true;
            } else {
                return false;
            }
        });

        if (!match) {
            self.previousItems.push(new PreviousItem(newSelectedItem));
        }
    }
}
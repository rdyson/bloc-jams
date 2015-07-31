var documentArray = document.getElementsByTagName("*");

function printTagNameForElement(elementObject, callback) {
    console.log("Element ID " + elementObject.elementId + " has tag " + elementObject.elementTagName);
}

for (var i=0; i < documentArray.length; i++) {
    var elementObject = {
        elementId: i,
        elementTagName: documentArray[i].tagName
    };
    printTagNameForElement(elementObject, function(){});
}
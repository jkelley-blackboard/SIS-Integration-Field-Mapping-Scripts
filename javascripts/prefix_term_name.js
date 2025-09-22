(function() {
    // Blackboard SIS Mapping Script
    // Purpose: Update the term name (shortDescription) by adding a "LIT " prefix

    var sField = 'Term Name Prefix Script: ';  // Logging prefix

    // 1. Get the existing term name
    var termNameObj = data.getGroup().getDescription().getShortDescription();

    if (!termNameObj) {
        helper.logWarning(sField + 'Term name not found. Skipping record.');
        helper.skipRecord();
        return; // Exit if there's no term name
    }

    var termName = termNameObj.trim();

    // 2. Prefix with "LIT "
    var newTermName = 'LIT ' + termName;

    helper.logInfo(sField + 'Original term name: ' + termName + ' | Updated term name: ' + newTermName);

    // 3. Return the updated term name
    return newTermName;
})();

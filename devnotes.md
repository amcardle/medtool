Layout

All tools should render inside a <Row> component; this will handle layout of the tool in the page
and toggling of visibility depending on which tools the user wishes to view.

Tools can run patientData() in their setup function to get weight, height, sex, and other variables

Any component mathematics should be placed into separate functions to permit re-usability, and
ideally functions should accept and return Unit (U) instances, and perform unit checking before
execution
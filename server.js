/**
 * Created by erosb on 2017.04.26..
 */
const PORT = process.env.PORT || 8282;

const app = require("./app");

app.app.listen(PORT);
console.log("Running on http://localhost:" + PORT);
console.log("\texpected Client ID: " + app.EXPECTED_CLIENT_ID);
console.log("\texpected Client Secret: " + app.EXPECTED_CLIENT_SECRET);
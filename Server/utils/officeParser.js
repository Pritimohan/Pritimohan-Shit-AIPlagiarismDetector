import officeParser from "officeparser";

export async function parseOffice(filPath) {
    try {
        // "data" string returned from promise here is the text parsed from the office file passed in the argument
        const data = await officeParser.parseOfficeAsync(filPath);
        return data;
    } catch (err) {
        // resolve error
        console.error(`Error parsing the file: ${err.message}`);
        return null
    }
}

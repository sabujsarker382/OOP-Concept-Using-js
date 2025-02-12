function readFile(fileName, callback) {
    console.log(`Reading file: ${fileName}...`);
    setTimeout(() => {
        // Simulated file data
        if (fileName === "data.json") {
            callback(null, '{"name": "John Doe", "age": 30}');
        } else {
            callback("File not found!", null); // Simulate an error
        }
    }, 2000); // Simulate a 2-second delay
}

function processFile(data, callback) {
    console.log("Processing file data...");
    setTimeout(() => {
        try {
            const parsedData = JSON.parse(data); // Parse JSON content
            callback(null, parsedData);
        } catch (error) {
            callback("Invalid JSON format!", null); // Handle parsing errors
        }
    }, 1000); // Simulate a 1-second delay
}

function writeFile(fileName, content, callback) {
    console.log(`Writing data to ${fileName}...`);
    setTimeout(() => {
        // Simulate writing success
        console.log("Write operation successful!");
        callback(null, "File written successfully!");
    }, 1500); // Simulate a 1.5-second delay
}

// Main Program (Callback Hell Example)
function main() {
    readFile("data.json", (readError, fileData) => {
        if (readError) {
            console.error("Error reading file:", readError);
            return;
        }
        processFile(fileData, (processError, processedData) => {
            if (processError) {
                console.error("Error processing file:", processError);
                return;
            }
            writeFile("output.json", JSON.stringify(processedData), (writeError, writeMessage) => {
                if (writeError) {
                    console.error("Error writing file:", writeError);
                    return;
                }
                console.log(writeMessage); // Final success message
            });
        });
    });
}

// Run the program
main();

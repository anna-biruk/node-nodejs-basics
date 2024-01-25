const parseEnv = () => {
    Object.keys(process.env).forEach((key) => {
        console.log(key)

        if (key.startsWith("RSS_")) {
            const variableName = key.substring(prefix.length);
            const variableValue = process.env[key];
            console.log(`${variableName}: ${variableValue}`);
        }
    })
};

parseEnv();
const config = {
    verbose: true,
    modulePaths: ["<rootDir>/src"],
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/src/__mocks__/fileMock.js",
    },
    testEnvironment: "jsdom",
};

module.exports = config;

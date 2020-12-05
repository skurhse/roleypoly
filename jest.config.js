const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    testEnvironment: 'enzyme',
    reporters: ['default'],
    setupFilesAfterEnv: ['jest-enzyme', 'jest-styled-components', './hack/jestSetup.ts'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
    snapshotSerializers: ['enzyme-to-json/serializer'],
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.test.json',
        },
    },
};

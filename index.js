'use strict'
const config = require('conventional-changelog-conventionalcommits')

module.exports = config({
    types: [
        { type: 'feat', section: 'Features' },
        { type: 'fix', section: 'Bug Fixes' },
        { type: 'improvement', section: 'Improvements' },
        { type: 'perf', section: 'Performance Improvements' },
        { type: 'deps', section: 'Dependencies' },
        { type: 'docs', section: 'Documentation', hidden: true },
        { type: 'style', section: 'Styles', hidden: true },
        { type: 'refactor', section: 'Code Refactoring', hidden: true },
        { type: 'test', section: 'Tests', hidden: true },
        { type: 'build', section: 'Build System', hidden: true },
        { type: 'ci', section: 'Continuous Integration', hidden: true },
    ]
})

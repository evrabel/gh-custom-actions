// const core = require('@actions/core');
// const github = require('@actions/github');
// const exec = require('@actions/exec');

import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'



function run() {
    core.notice('Hello from my custom JavaScript Action!')
}

run();
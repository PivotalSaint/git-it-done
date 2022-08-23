var getUserRepos = function () {
    fetch("https://api.github.com/user/octocat/repos");
}

getUserRepos();
var get_url = function (dir) {
    return (location.port ? '' : '/keen/dist/') + dir;
}

function getParam(param) {
    return new URLSearchParams(window.location.search).get(param);
}
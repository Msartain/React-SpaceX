function getLaunchData() {
    return fetch('https://api.spacexdata.com/v3/launches?limit=12&order=desc&sort=launch_date_local')
    .then(response => response.json())
};

export { getLaunchData }
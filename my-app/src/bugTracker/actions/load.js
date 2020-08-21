import axios from 'axios';

function getLocalBugs(){
    const bugs = [
        {
            "id": 1,
            "name": "Local bug - 1",
            "isClosed": false,
            "createdAt": "2020-08-07T07:01:05.216Z"
        },
        {
            "id": 2,
            "name": "Local bug - 2",
            "isClosed": true,
            "createdAt": "2020-08-07T07:01:11.419Z"
        }
    ];

    return bugs;
}

function getServerBugs(){
    axios.get('http://localhost:3030/bugs')
        .then(response => response.data)
        .then(bugs => console.table(bugs));
}

function load(){
    const bugs = getLocalBugs();
    const action = { type : 'INIT_BUGS', payload : bugs};
    return action;
}

export default load;
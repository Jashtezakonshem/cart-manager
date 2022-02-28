import axios from 'axios'

axios.defaults.baseURL = 'https://hodgepodge-server.herokuapp.com';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjZkZWZhNDBjZGUzMDAxNjgxMDEwZSIsImlhdCI6MTY0NTk5NzI1NX0.X3CsnRYJo8BYMY7GUJq23DVZsign_WyXltQemh1efow'

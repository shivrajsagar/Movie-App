import axios from 'axios'

const API_KEY="ebb9d8d33069e66b288614ca42d87ad4"


export default axios.create({
    baseURL:"https://api.themoviedb.org"
})
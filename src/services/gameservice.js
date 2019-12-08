import axios from 'axios'
const baseUrl = 'http://localhost:3001/games'

const fetchGames = () => axios.get(baseUrl)

export default { fetchGames }
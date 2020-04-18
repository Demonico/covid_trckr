import axios, { AxiosResponse } from 'axios'

export default class DataService {
  // States Current Values
  static async getStatesCurrentValues(): Promise<AxiosResponse> {
    const url = 'https://covidtracking.com/api/v1/states/current.json'
    return await axios.get(url)
  }
}

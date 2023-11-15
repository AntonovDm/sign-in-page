import { API_URL } from '../utils/const'

interface IFetchData {
  email: string
  password: string
}

interface IUseApiResponseResult {
  email: string
  password: string
  id: number
}

export const fetchData = async (
  data: IFetchData,
  resetFunction: () => void
): Promise<IUseApiResponseResult> => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Request failed')
    }

    const responseData: IUseApiResponseResult = await response.json()
    resetFunction()
    alert('Success')
    return responseData
  } catch (error) {
    alert('Error, please log in later')
    throw Error('Failed fetch data')
  }
}

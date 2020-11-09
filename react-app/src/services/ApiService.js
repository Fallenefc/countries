import React from 'react'
import axios from 'axios'

export const getCountries = async () => {
  const data = await axios.get('https://restcountries.eu/rest/v2/all');
  return data.data;
}
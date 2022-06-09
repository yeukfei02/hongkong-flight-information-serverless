import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FlightService {
  async getFlights(
    date?: string,
    arrival?: string,
    cargo?: string,
    lang?: string,
  ): Promise<any> {
    const response = await getFlightsRequest(date, arrival, cargo, lang);
    return response;
  }
}

async function getFlightsRequest(
  date?: string,
  arrival?: string,
  cargo?: string,
  lang?: string,
) {
  let responseData = null;

  const params = {
    date: date,
    arrival: arrival,
    cargo: cargo,
    lang: lang,
  };
  console.log('params', params);

  const rootUrl = `https://www.hongkongairport.com/flightinfo-rest/rest/flights/past`;
  const response = await axios.get(`${rootUrl}`, {
    params: params,
  });

  if (response && response.data) {
    responseData = response.data;
  }

  return responseData;
}

import { Controller, Get, Query } from '@nestjs/common';
import { FlightService } from './flight.service';
import dayjs from 'dayjs';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  async getFlights(
    @Query('date') date?: string,
    @Query('arrival') arrival?: string,
    @Query('cargo') cargo?: string,
    @Query('lang') lang?: string,
  ): Promise<any> {
    const dateStr = date
      ? dayjs(date).format('YYYY-MM-DD')
      : dayjs().format('YYYY-MM-DD');
    const arrivalStr = arrival || 'true';
    const cargoStr = cargo || 'false';
    const langStr = lang || 'en';

    const flightsData = await this.flightService.getFlights(
      dateStr,
      arrivalStr,
      cargoStr,
      langStr,
    );

    const response = {
      message: 'hong kong flight information',
      data: flightsData,
    };
    return response;
  }
}

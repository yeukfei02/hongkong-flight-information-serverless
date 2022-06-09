import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getMain(): Promise<any> {
    const data = {
      message: 'hongkong-flight-information-serverless',
    };
    return data;
  }
}

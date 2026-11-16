import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelModule } from './travel/travel.module';
import { AgenceModule } from './agence/agence.module';

@Module({
  imports: [TravelModule, AgenceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

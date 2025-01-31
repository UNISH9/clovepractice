import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [PrismaModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

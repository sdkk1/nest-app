import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

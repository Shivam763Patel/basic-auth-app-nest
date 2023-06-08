import { Inject, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from '../users/user.entity'
import { UsersModule } from 'users/users.module';

@Module({
  
   

      imports: [ConfigModule.forRoot({ isGlobal: true}),
      
        TypeOrmModule.forRootAsync({

      useFactory: async (ConfigService: ConfigService) => ({

     
        type: 'mysql',
        host:'15.206.7.200',
        port: 3310,
        username: 'shivampa',
        password: 'pK593is53CkVsQRLPkRYL1N2',
        database: 'shivampa',
        entities:[User],
        synchronize: true

      }),    
      
      inject:[ConfigService]
      
      
    }),      
    
    UsersModule ],


    controllers:[AppController],
    providers: [AppService]
  
})
export class AppModule {}

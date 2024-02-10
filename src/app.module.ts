import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
// import { AuthModule } from './auth/auth.module';
// import AuthMod
// import { User } from './user/entities/user.entity';
import { User } from './users/entities/user.entity';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '41959',
      username: 'postgres',
      entities: [User], // here we have added user enitity in entities array
      database: 'nest_rnd',
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

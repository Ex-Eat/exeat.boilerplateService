import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {MongooseModule} from '@nestjs/mongoose';
import {config} from "./config";

@Module({
    imports: [
        AuthModule,
        MongooseModule.forRoot(`mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`)
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

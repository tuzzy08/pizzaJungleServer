import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import * as Pusher from 'pusher';
import { ok } from 'assert';

const pusher = new Pusher({
  appId: '1283742',
  key: 'fb2d17544b3e7440c96f',
  secret: 'eed6807d68d3c5882261',
  cluster: 'eu',
  useTLS: true,
});

@Injectable()
export class OrdersService {
  create(order: CreateOrderDto) {
    pusher.trigger('pizza-jungle', 'new-order', { ...order });
    return {
      status: true,
      data: { ...order },
      msg: 'Order created',
    };
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

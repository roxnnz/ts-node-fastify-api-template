import { FastifyInstance } from 'fastify/types/instance';
import { FastifyRequest } from 'fastify/types/request';
import { FastifyReply } from 'fastify/types/reply';
//TODO: move to plugin
import ShopDao from '../../services/platformAdmin/ShopDao';

export default async (fastify: FastifyInstance, options: any) => {
  fastify.post('/platform/admin/shop', openShopHandler);
  fastify.get('/platform/admin/shop/:id', findShopHandler);
};

const openShopHandler = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  try {
    const shop = await ShopDao.CreateShop(request.body);
    reply.code(201).send(shop);
  } catch (error) {
    console.log(error.message);
  }
};
const findShopHandler = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  try {
    const shop = await ShopDao.GetShopDetailsByShopId(request.params);
    reply.code(201).send(shop);
  } catch (error) {
    console.log(error.message);
    reply.code(500).send(error.message);
  }
};

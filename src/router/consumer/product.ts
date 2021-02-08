import { FastifyInstance } from 'fastify/types/instance';
import { FastifyRequest } from 'fastify/types/request';
import { FastifyReply } from 'fastify/types/reply';

export default async (fastify: FastifyInstance, options: any) => {
  fastify.get('/user/:id', getUserById);
  fastify.put('/user/:id', updateUserById);
  fastify.delete('/user/:id', deleteUserById);
  fastify.post('/user', createUser);
};

const getUserById = async (request: FastifyRequest, reply: FastifyReply) => {
  return { hello: 'world' };
};
const updateUserById = async (request: FastifyRequest, reply: FastifyReply) => {
  return { hello: 'world' };
};
const deleteUserById = async (request: FastifyRequest, reply: FastifyReply) => {
  return { hello: 'world' };
};
const createUser = async (request: FastifyRequest, reply: FastifyReply) => {
  return { hello: 'world' };
};

import axios from 'axios';
import routes from './routes';

const dataConstructor = (attributes) => ({
  data: {
    attributes,
  },
});

export const postMessage = (channelId, text) => {
  const data = dataConstructor({ text });
  return axios
    .post(routes.channelMessagesPath(channelId), data);
};

export const getMessages = (channelId) => axios
  .get(routes.channelMessagesPath(channelId));

export const patchChannel = (channelId, name) => {
  const data = dataConstructor({ name });
  return axios
    .patch(routes.channelPath(channelId), data);
};

export const deleteChannel = (channelId) => axios
  .delete(routes.channelPath(channelId));

export const postChannel = (name) => {
  const data = dataConstructor({ name });
  return axios.post(routes.channelsPath(), data);
};

export const getChannels = () => axios
  .get(routes.channelsPath());

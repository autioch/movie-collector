import parse from './parse';
import request from './request';
import prepare from './prepare';

export default function setup() {
  return (video) => prepare(video)
    .then((prepared) => request(prepared))
    .then((responseData) => parse(responseData))
    .catch((err) => ({
      error: err.message
    }));
}

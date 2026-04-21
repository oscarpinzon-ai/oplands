export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    url.hostname = '375992d5.oplands.pages.dev';

    return fetch(new Request(url, request));
  },
};

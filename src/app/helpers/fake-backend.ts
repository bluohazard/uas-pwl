import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(
  backend: MockBackend,
  options: BaseRequestOptions) {

  // tslint:disable-next-line:max-line-length
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkdyZWdneSBHaWFuaW5pIEZpcm1hbnN5YWgiLCJhZG1pbiI6dHJ1ZX0.PxvOCuuO4Zfh2a_ghWvUy6nFdi3tKm2VdVjtuav4yl8';

  backend.connections.subscribe((connection: MockConnection) => {
    // We are using the setTimeout() function to simulate an
    // asynchronous call to the server that takes 1 second.
    setTimeout(() => {
      //
      // Fake implementation of /api/authenticate
      //
      if (connection.request.url.endsWith('/api/authenticate') &&
        connection.request.method === RequestMethod.Post) {
        const body = JSON.parse(connection.request.getBody());

        if (body.username === 'greggygf' && body.password === 'interisti') {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token }
            })));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
      }



      //
      // Fake implementation of /api/orders
      //
      if (connection.request.url.endsWith('/api/orders') &&
        connection.request.method === RequestMethod.Get) {
        if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200, body: [1, 2, 3] })
          ));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 401 })
          ));
        }
      }



    }, 1000);
  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions]
};
